

const DataDeletionPolicyDayStories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-[#1f2937] p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-400">Data Deletion Policy</h1>
        <p className="mb-4 text-sm text-gray-400 text-center">Last updated: July 24, 2025</p>

        <p className="mb-6">
          At <strong>DayStories</strong>, your privacy and data control are our priorities. This Data Deletion Policy explains how you can delete your personal data stored within the app or backed up to Google Drive.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">1. Local Data Deletion</h2>
        <p className="mb-6 text-gray-300">
          All your journal entries, images, and emotion records are stored locally on your device. To delete your local data:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>Open the DayStories app</li>
          <li>Navigate to the "Settings" section</li>
          <li>Select "Delete All Data" (this will permanently remove all your entries and images from your device)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">2. Google Drive Backup Deletion</h2>
        <p className="mb-6 text-gray-300">
          If you opted to back up your data to Google Drive:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>Go to <a className="text-pink-400 underline" href="https://drive.google.com/drive/u/0/settings" target="_blank" rel="noopener noreferrer">Google Drive Settings</a></li>
          <li>Find "Manage Apps" and locate <strong>DayStories</strong></li>
          <li>Click "Options" and choose “Delete hidden app data”</li>
          <li>This will remove your backup file stored in your Drive’s private appDataFolder</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">3. Uninstalling the App</h2>
        <p className="mb-6 text-gray-300">
          Uninstalling DayStories will remove all local app data from your device. However, this will not delete any backups stored in Google Drive. Follow the steps above to delete cloud backups separately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">4. Requesting Data Deletion</h2>
        <p className="mb-6 text-gray-300">
          If you need help deleting your data, or if you believe any data is still stored after following the steps above, please contact us. We will assist you within 7 business days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">5. Contact Us</h2>
        <p className="text-gray-300">
          For any data-related concerns, contact us at:
        </p>
        <p className="mt-2">
          <a href="mailto:tecxzo.dev@gmail.com" className="text-pink-400 underline hover:text-pink-500">
            tecxzo.dev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default DataDeletionPolicyDayStories;
