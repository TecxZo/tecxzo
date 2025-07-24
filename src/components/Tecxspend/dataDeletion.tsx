import React from 'react';

const DataDeletionPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-[#1f2937] p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-400">Data Deletion Policy</h1>
        <p className="mb-4 text-sm text-gray-400 text-center">Last updated: July 24, 2025</p>

        <p className="mb-6">
          At <strong>TecxSpend</strong>, your data privacy and control are our top priority. This Data Deletion Policy explains how you can remove your personal and app data from our systems.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-red-300">1. Local App Data</h2>
        <p className="mb-6 text-gray-300">
          All your data (including expense records and notes) is stored locally on your mobile device. We do not store any data on our servers.
        </p>
        <p className="mb-6 text-gray-300">
          To delete your data:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>Open your device's settings</li>
          <li>Go to “Apps” TecxSpend</li>
          <li>Tap “Storage”</li>
          <li>Select “Clear Data” or “Clear Storage”</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-red-300">2. Google Drive Backup</h2>
        <p className="mb-6 text-gray-300">
          If you’ve enabled cloud backup, a data file is stored in your Google Drive account under the "App Data" folder.
        </p>
        <p className="mb-6 text-gray-300">
          To delete the backup:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>Go to <a className="underline text-blue-400" href="https://drive.google.com/drive/u/0/quota" target="_blank" rel="noopener noreferrer">https://drive.google.com/drive/u/0/quota</a></li>
          <li>Look for “TecxSpend” or associated backup file</li>
          <li>Right-click and select “Remove”</li>
          <li>Empty your Google Drive Trash to permanently delete</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-red-300">3. Contact for Support</h2>
        <p className="mb-6 text-gray-300">
          If you need assistance deleting your data or have any privacy-related questions, please contact us at:
        </p>
        <p className="text-gray-300">
          <a href="mailto:tecxzo.dev@gmail.com" className="text-blue-400 underline hover:text-blue-500">
            tecxzo.dev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default DataDeletionPolicy;
