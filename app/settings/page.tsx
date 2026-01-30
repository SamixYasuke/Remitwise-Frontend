"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wallet,
  Bell,
  Globe,
  ShieldCheck,
  Info,
  LogOut,
  CreditCard,
  MessageSquare,
  FileText,
  Lock,
  Clock,
  ExternalLink,
  Mail,
  ChevronRight,
} from "lucide-react";
import SettingsSection from "@/components/SettingsSection";
import SettingsItem from "@/components/SettingsItem";

export default function SettingsPage() {
  // Mock state for settings
  const [notifications, setNotifications] = useState({
    billReminders: true,
    paymentConfirmations: true,
    goalUpdates: false,
  });

  const [security, setSecurity] = useState({
    transactionSigning: true,
  });

  const stellarAddress = "GCF2...7P3Q";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center">
          <Link
            href="/dashboard"
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="ml-4 text-xl font-bold text-gray-900">Settings</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto py-6">
        {/* Account Section */}
        <SettingsSection title="Account">
          <SettingsItem
            icon={<Wallet className="w-5 h-5" />}
            title="Stellar Address"
            description="Connected Wallet"
            type="text"
            value={stellarAddress}
          />
          <SettingsItem
            icon={<CreditCard className="w-5 h-5" />}
            title="Wallet Status"
            description="Connected via Freighter"
            type="navigation"
          />
          <SettingsItem
            icon={<LogOut className="w-5 h-5 text-red-500" />}
            title="Change Wallet"
            onClick={() => console.log("Change wallet")}
          />
        </SettingsSection>

        {/* Notifications Section */}
        <SettingsSection title="Notifications">
          <SettingsItem
            icon={<Bell className="w-5 h-5" />}
            title="Bill Reminders"
            description="Get notified before bills are due"
            type="toggle"
            enabled={notifications.billReminders}
            onToggle={(val) =>
              setNotifications({ ...notifications, billReminders: val })
            }
          />
          <SettingsItem
            icon={<Bell className="w-5 h-5" />}
            title="Payment Confirmations"
            description="Receive receipt after every transfer"
            type="toggle"
            enabled={notifications.paymentConfirmations}
            onToggle={(val) =>
              setNotifications({ ...notifications, paymentConfirmations: val })
            }
          />
          <SettingsItem
            icon={<Bell className="w-5 h-5" />}
            title="Goal Progress Updates"
            description="Weekly summary of your savings goals"
            type="toggle"
            enabled={notifications.goalUpdates}
            onToggle={(val) =>
              setNotifications({ ...notifications, goalUpdates: val })
            }
          />
        </SettingsSection>

        {/* Preferences Section */}
        <SettingsSection title="Preferences">
          <SettingsItem
            icon={<Globe className="w-5 h-5" />}
            title="Currency Display"
            description="Primary currency for dashboard"
            type="text"
            value="USD ($)"
          />
          <SettingsItem
            icon={<MessageSquare className="w-5 h-5" />}
            title="Language"
            description="Default app language"
            type="text"
            value="English"
          />
        </SettingsSection>

        {/* Security Section */}
        <SettingsSection title="Security">
          <SettingsItem
            icon={<Lock className="w-5 h-5" />}
            title="Transaction Signing"
            description="Always ask for signature"
            type="toggle"
            enabled={security.transactionSigning}
            onToggle={(val) =>
              setSecurity({ ...security, transactionSigning: val })
            }
          />
          <SettingsItem
            icon={<Clock className="w-5 h-5" />}
            title="Session Timeout"
            description="Automatically log out after inactivity"
            type="text"
            value="30 minutes"
          />
        </SettingsSection>

        {/* About Section (redesigned) */}
        <div className="mb-8">
          <div className="px-4 mb-3 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
              <Info className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                About
              </h2>
              <p className="text-sm text-gray-500">
                App information and support
              </p>
            </div>
          </div>

          <div className="mx-4 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
            <div className="divide-y divide-gray-800">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200">
                    <Info className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      App Version
                    </span>
                    <span className="text-xs text-gray-400">
                      Current version: 1.0.0
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">v1.0.0</div>
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      Terms of Service
                    </span>
                    <span className="text-xs text-gray-400">
                      Read our terms and conditions
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      Privacy Policy
                    </span>
                    <span className="text-xs text-gray-400">
                      How we protect your data
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      Help & Support
                    </span>
                    <span className="text-xs text-gray-400">
                      Get help with your account
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      Contact Us
                    </span>
                    <span className="text-xs text-gray-400">
                      support@remitwise.com
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}