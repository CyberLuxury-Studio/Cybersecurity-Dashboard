"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/../lib/variants";
import { useState, useEffect } from "react";

const initialLogs = [
  {
    time: "09:41:22",
    ip: "192.168.1.104",
    level: "SAFE",
    action: "AUTH_SUCCESS",
  },
  {
    time: "09:41:23",
    ip: "45.22.109.11",
    level: "WARN",
    action: "PORT_SCAN_DETECTED",
  },
  { time: "09:41:25", ip: "10.0.0.5", level: "SAFE", action: "DATA_SYNC" },
  {
    time: "09:41:28",
    ip: "188.43.99.2",
    level: "CRITICAL",
    action: "SQL_INJECTION_BLOCKED",
  },
  { time: "09:41:30", ip: "192.168.1.104", level: "SAFE", action: "LOGOUT" },
];

export function ThreatFeed() {
  const [logs, setLogs] = useState(initialLogs);

  useEffect(() => {
    const interval = setInterval(() => {
      const actions = [
        "AUTH_SUCCESS",
        "PORT_SCAN_DETECTED",
        "SQL_INJECTION_BLOCKED",
        "DATA_SYNC",
        "BRUTE_FORCE_PREVENTED",
      ];
      const levels = ["SAFE", "WARN", "CRITICAL", "SAFE", "WARN"];
      const rId = Math.floor(Math.random() * actions.length);

      const newLog = {
        time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        level: levels[rId],
        action: actions[rId],
      };

      setLogs((prev) => [newLog, ...prev].slice(0, 8));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto relative z-10"
      id="infiltrate"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="flex justify-between items-end border-b border-outline-variant pb-4">
          <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">terminal</span>
            Live Threat Feed
          </h2>
          <div className="flex items-center gap-2 text-xs font-label text-primary animate-pulse">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            MONITORING_ACTIVE
          </div>
        </div>

        <div className="bg-black border border-primary/30 rounded-lg p-6 font-label text-sm overflow-hidden relative shadow-[0_0_20px_rgba(0,255,65,0.05)]">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 text-outline mb-4 pb-2 border-b border-outline-variant/30 text-xs uppercase">
            <div>Timestamp</div>
            <div>Source_IP</div>
            <div>Level</div>
            <div>Action_Taken</div>
          </div>

          {/* Logs */}
          <div className="space-y-3">
            {logs.map((log, idx) => (
              <motion.div
                key={`${log.time}-${idx}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-4 gap-4 items-center"
              >
                <div className="text-on-surface-variant">{log.time}</div>
                <div className="text-primary-container">{log.ip}</div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      log.level === "CRITICAL"
                        ? "bg-on-tertiary-container text-tertiary-fixed"
                        : log.level === "WARN"
                          ? "bg-secondary-container text-secondary-fixed"
                          : "bg-primary-container/20 text-primary-container"
                    }`}
                  >
                    {log.level}
                  </span>
                </div>
                <div
                  className={`${log.level === "CRITICAL" ? "text-on-tertiary-container" : "text-on-surface"}`}
                >
                  {log.action}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
