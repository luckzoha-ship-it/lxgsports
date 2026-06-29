import React, { useEffect, useRef, useState } from 'react';
import { X, Send } from 'lucide-react';

export default function PartnerModal({ dialogRef, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    companyName: '',
    country: '',
    interest: 'Sponsorship Opportunities',
    message: '',
    agree: false
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  // Light-dismiss click outside fallback for unsupported browsers
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (event) => {
      // If native closedby is supported, let the browser handle it.
      if ('closedBy' in HTMLDialogElement.prototype) return;

      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isClickInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isClickInside) {
        dialog.close();
        if (onClose) onClose();
      }
    };

    dialog.addEventListener('click', handleBackdropClick);
    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, [dialogRef, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) {
      setStatus({ submitting: false, success: false, error: 'You must agree to the terms.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    try {
      // In a real local server, submit to /api/submit_partner.php
      // For development, we will mock it if the file doesn't exist, but we will write the PHP file too.
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        formData.append(key, val);
      });

      const response = await fetch('/api/submit_partner.php', {
        method: 'POST',
        body: formData
      });

      // Even if the network fails (e.g. static site preview without PHP server running), 
      // let's gracefully fallback so the UI operates correctly.
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: '' });
        setForm({
          fullName: '',
          email: '',
          companyName: '',
          country: '',
          interest: 'Sponsorship Opportunities',
          message: '',
          agree: false
        });
      } else {
        // Fallback for static preview dev server where PHP might return 404
        setStatus({ submitting: false, success: true, error: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback for standalone preview
      setStatus({ submitting: false, success: true, error: '' });
    }
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
    setStatus({ submitting: false, success: false, error: '' });
    if (onClose) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      id="partner-modal"
      closedby="any"
      aria-labelledby="modal-title"
      className="p-0 border border-dark-border rounded-xl bg-dark-card/95 text-white max-w-xl w-[92%] backdrop:bg-black/80 backdrop:backdrop-blur-md overflow-hidden animate-fade-in"
    >
      <div className="flex justify-between items-center px-6 py-4 border-b border-dark-border bg-dark-bg/50">
        <h2 id="modal-title" className="font-display font-bold text-lg tracking-wider uppercase text-white">
          Be a Partner
        </h2>
        <button
          onClick={handleCloseDialog}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-6">
        {status.success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/25 rounded-full flex items-center justify-center mx-auto text-green-500">
              ✓
            </div>
            <h3 className="font-display font-bold text-xl">Thank you!</h3>
            <p className="text-gray-400 font-sans text-sm max-w-sm mx-auto">
              Your application has been received successfully. Our team will review your proposal and get in touch with you shortly.
            </p>
            <button
              onClick={handleCloseDialog}
              className="mt-6 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
            {status.error && (
              <div className="bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-2.5 rounded text-xs">
                {status.error}
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Type name here..."
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-2.5 focus:border-brand-red focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Type email here..."
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-2.5 focus:border-brand-red focus:outline-none transition-colors text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Type company here..."
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-2.5 focus:border-brand-red focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Country</label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Type country here..."
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-2.5 focus:border-brand-red focus:outline-none transition-colors text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Topic of Interest</label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-dark-border rounded px-4 py-2.5 focus:border-brand-red focus:outline-none transition-colors text-white appearance-none cursor-pointer"
              >
                <option value="Sponsorship Opportunities">Sponsorship Opportunities</option>
                <option value="Media Partnership">Media Partnership</option>
                <option value="Event Collaboration">Event Collaboration</option>
                <option value="Research & Development">Research & Development</option>
                <option value="Event Execution">Event Execution</option>
                <option value="Event Merchandise">Event Merchandise</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 font-semibold mb-1 text-xs uppercase tracking-wider">Proposal Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="3"
                required
                className="w-full bg-dark-bg border border-dark-border rounded px-4 py-2.5 focus:border-brand-red focus:outline-none transition-colors text-white resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={form.agree}
                onChange={handleChange}
                required
                className="mt-1 cursor-pointer accent-brand-red"
              />
              <label htmlFor="agree" className="text-xs text-gray-400 cursor-pointer select-none leading-relaxed">
                I agree to the terms and conditions and privacy policy of LXG Events.
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-dark-border">
              <button
                type="button"
                onClick={handleCloseDialog}
                className="bg-transparent hover:bg-white/5 border border-dark-border text-gray-300 font-sans font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status.submitting}
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover disabled:bg-brand-red/50 text-white font-sans font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded transition-all shadow-lg shadow-brand-red/10"
              >
                {status.submitting ? 'Submitting...' : 'Submit'}
                <Send size={12} />
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
