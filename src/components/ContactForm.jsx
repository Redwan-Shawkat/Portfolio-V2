"use client";

import { useState } from "react";
import { profile } from "@/data/cv";
import { ArrowRight } from "./Icons";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  "w-full border border-line bg-ground px-4 py-3.5 text-base text-heading transition placeholder:text-body/60 focus:border-accent focus:outline-none";
const label = "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        "The form is not wired up yet — NEXT_PUBLIC_WEB3FORMS_KEY is missing. Email me directly in the meantime.",
      );
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New message from your portfolio",
          from_name: "Portfolio contact form",
          ...Object.fromEntries(new FormData(form)),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        throw new Error(data.message || `Request failed (${res.status})`);
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        `${err.message}. You can reach me at ${profile.email} instead.`,
      );
    }
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 border border-line bg-panel p-10"
    >
      {/* Web3Forms honeypot — bots fill it, people never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="c-name">
            Your name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="c-email">
            Your email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={field}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={label} htmlFor="c-phone">
          Your phone{" "}
          <span className="normal-case tracking-normal opacity-70">(optional)</span>
        </label>
        <input
          id="c-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+880 ..."
          className={field}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={label} htmlFor="c-msg">
          Your message
        </label>
        <textarea
          id="c-msg"
          name="message"
          rows={6}
          required
          placeholder="Tell me what you are building..."
          className={`${field} resize-y`}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex cursor-pointer items-center gap-2.5 border-0 bg-accent px-[34px] py-[18px] text-[13px] font-semibold uppercase tracking-[0.1em] text-ink transition disabled:cursor-wait disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
          <ArrowRight size={17} />
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-[15px] ${
            status === "sent"
              ? "text-heading"
              : status === "error"
                ? "text-accent"
                : "text-body"
          }`}
        >
          {status === "sent"
            ? "Thanks — your message is on its way. I will get back to you."
            : status === "error"
              ? error
              : "Goes straight to my inbox. No newsletter, no autoresponder."}
        </p>
      </div>
    </form>
  );
}
