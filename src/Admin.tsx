import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle2, Link2, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

const PREFIXES = [
  "මහත්මා",
  "මහත්මිය",
  "මහත්මා සහ මහත්මිය",
  "පවුලේ සැම",
  "ආදරණීය"
];

const Admin = () => {
  const [prefix, setPrefix] = useState("මහත්මා");
  const [guestName, setGuestName] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const generatedLink = `${window.location.origin}/?p=${encodeURIComponent(prefix)}&n=${encodeURIComponent(guestName.replace(/ /g, "_"))}`;

  const familyGreeting = prefix === "පවුලේ සැම" ? " ඔබ සහ ඔබේ පවුලේ සැමට" : "";
  const whatsappMessage = `ආදරණීය ${guestName} ${prefix}${familyGreeting} ❤️

අප දෙදෙනාගේ ජීවිතයේ අතිශය සුවිශේෂී දිනයක් වන අපගේ විවාහ මංගල උත්සවයට ඔබගේ සහභාගීත්වය ආදරයෙන් අපේක්ෂා කරමු.

විවාහ ආරාධනය සහ උත්සවයේ සියලු විස්තර පහත link එකෙන් නැරඹිය හැකිය 🌐

${generatedLink}

ඔබගේ පැමිණීම අපට අතිශයින්ම වටිනා වන අතර, මෙම සුන්දර අවස්ථාව අප සමඟ සැමරීමට ඔබ පැමිණෙනු ඇතැයි අපි හදවතින්ම බලාපොරොත්තු වෙමු.

ආදරයෙන්,
❤️ ඉන්ද්‍රජිත් & හසිනි`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy message', err);
    }
  };

  const isFormValid = guestName.trim().length > 0;

  return (
    <div className="h-screen bg-[#FAF2E8] font-serif overflow-y-auto relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#85B9A2]/20 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-[#AE925D]/20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-[#AE925D] w-10 h-10" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#74472D] mb-4">
            InviteMint Premium
          </h1>
          <p className="text-lg text-[#74472D]/70 max-w-xl mx-auto">
            Create personalized elegant wedding invitation links and messages for your beloved guests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-[#74472D]/5 rounded-3xl p-6 md:p-8">

              <div className="space-y-6">
                <div>
                  <label className="block text-[#74472D] font-bold text-lg mb-2">
                    Guest Prefix
                  </label>
                  <div className="relative">
                    <select
                      value={prefix}
                      onChange={(e) => setPrefix(e.target.value)}
                      className="w-full bg-white/60 border border-[#AE925D]/30 text-[#74472D] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AE925D]/50 focus:border-transparent appearance-none text-lg transition-all"
                    >
                      {PREFIXES.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-[#AE925D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#74472D] font-bold text-lg mb-2">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Sanjaya"
                    className="w-full bg-white/60 border border-[#AE925D]/30 text-[#74472D] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AE925D]/50 focus:border-transparent text-lg placeholder-[#74472D]/40 transition-all"
                  />
                </div>

                <div className="pt-4 space-y-4">
                  <button
                    onClick={() => setShowPreview(true)}
                    disabled={!isFormValid}
                    className="w-full bg-[#74472D] hover:bg-[#5a3621] text-[#FAF2E8] font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-[#74472D]/20 transition-all transform active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Link</span>
                  </button>

                  {isFormValid && (
                    <a
                      href={generatedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-transparent border-2 border-[#85B9A2] hover:bg-[#85B9A2] text-[#74472D] hover:text-white font-bold text-lg py-3 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Preview Invitation</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {showPreview && isFormValid ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6"
                >
                  {/* Generated Link Card */}
                  <div className="bg-white/40 backdrop-blur-xl border border-[#AE925D]/30 shadow-xl shadow-[#74472D]/5 rounded-3xl p-6">
                    <h3 className="text-[#74472D] font-bold text-xl mb-4 flex items-center">
                      <Link2 className="w-5 h-5 mr-2 text-[#AE925D]" />
                      Generated Link
                    </h3>
                    <div className="bg-white/60 p-4 rounded-xl mb-4 break-all text-[#74472D] font-medium border border-white/80">
                      {generatedLink}
                    </div>
                    <button
                      onClick={handleCopyLink}
                      className="w-full sm:w-auto bg-[#85B9A2] hover:bg-[#6fa088] text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
                    >
                      {copiedLink ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      <span>{copiedLink ? "✅ Link Copied Successfully." : "Copy Link Only"}</span>
                    </button>
                  </div>

                  {/* WhatsApp Message Card */}
                  <div className="bg-white/40 backdrop-blur-xl border border-[#AE925D]/30 shadow-xl shadow-[#74472D]/5 rounded-3xl p-6">
                    <h3 className="text-[#74472D] font-bold text-xl mb-4 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2 text-[#AE925D]" />
                      WhatsApp Message Preview
                    </h3>
                    <div className="bg-[#FAF2E8] border border-[#AE925D]/20 p-5 rounded-2xl mb-6 text-[#74472D] whitespace-pre-wrap leading-relaxed">
                      {whatsappMessage}
                    </div>
                    <button
                      onClick={handleCopyMessage}
                      className="w-full bg-[#AE925D] hover:bg-[#8f7749] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#AE925D]/20 transition-all flex items-center justify-center space-x-2"
                    >
                      {copiedMessage ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      <span>{copiedMessage ? "✅ Message Copied Successfully." : "Copy Full Message"}</span>
                    </button>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-[#AE925D]/30 rounded-3xl bg-white/20 backdrop-blur-sm"
                >
                  <Sparkles className="w-12 h-12 text-[#AE925D]/40 mb-4" />
                  <p className="text-[#74472D]/60 text-lg">
                    Enter details and click 'Generate Link'.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Admin;
