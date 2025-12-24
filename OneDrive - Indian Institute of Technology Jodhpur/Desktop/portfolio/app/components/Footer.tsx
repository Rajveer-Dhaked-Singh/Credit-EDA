export default function Footer() {
  return (
    <footer role="contentinfo" className="py-8 mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} All Rights Reserved.</p>
        <a href="#home" aria-label="Back to top" className="text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Back to top ↑</a>
      </div>
    </footer>
  );
}
