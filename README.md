## 🌟 Learning Support Provider Directory

This project is a **React-based module** developed for **Habot Connect DMCC**. It allows parents to easily browse, search, sort, and view details of learning support providers.

The application demonstrates **React best practices**, clean UI/UX design, API simulation, and robust state management.

---

### 🚀 Features

✅ **React Development**

* Functional components with hooks (`useState`, `useEffect`, `useNavigate`, etc.)
* Modular, reusable components
* Efficient state and prop management

✅ **UI / UX**

* Responsive, mobile-friendly grid layout
* Clear and intuitive navigation
* Elegant error and empty states (e.g., 404 page, no results message)

✅ **Search & Filter**

* Dynamic search by name or specialization
* Sort by name, location, or rating (ascending/descending)
* URL-based search query param support

✅ **Pagination**

* Client-side pagination with controls

✅ **API Simulation**

* Mock provider data fetched from a simulated service

✅ **Error Handling**

* User-friendly 404 Not Found page
* Graceful empty state when no results

---

### 🛠 Tech Stack

* **React (Vite or Create React App)**
* **TailwindCSS** (for styling)
* **React Router** (navigation)
* **Lucide React Icons** (icons)

---

### 📂 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── Pagination.jsx
│   └── PCard.jsx
│   ├── ProviderList.jsx
│   ├── ProviderDetail.jsx
│   └── NotFound.jsx
├── services/
│   └── providerService.js
├── assets/
│   └── pnf.png
├── App.jsx
└── main.jsx
```

---

### ⚙️ How to Run Locally

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Arpit-Krishna/Habot-Learning-Support-Provider
cd frontend
# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the app
npm run dev
```

---

### 💡 Usage

* Use the search bar to find providers by **name** or **specialization**
* Sort results by **name**, **location**, or **rating**
* Click a provider card for **detailed view**
* Navigate using **pagination controls**
* If no results match, reset search using the button

---

### 🔑 Key Files

* `ProviderList.jsx` → Main directory page with search, sort, pagination
* `ProviderDetail.jsx` → Individual provider detail page
* `NotFound.jsx` → 404 error page
* `providerService.js` → Mock API fetch


### 📌 Version Control

✅ Commits follow clean, descriptive messages
✅ GitHub repository is well-organized

---


### 🤝 Acknowledgements

This project is part of a coding challenge for **Habot Connect DMCC** to demonstrate React proficiency, UI/UX design, and best coding practices.

---


