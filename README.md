# Diaspora Connect

Diaspora Connect is a web application that helps users discover and connect with service providers who cater to the needs of the African diaspora community.

## ✨ Features

* Browse and search for providers
* Add new providers with details like name, category, location, email, and photo
* Responsive layout with dynamic card rendering
* Infinite scroll for seamless browsing

## 🚀 Technologies Used

* **Angular 17** (standalone components)
* **Firebase Firestore** (for data storage)
* **Firebase Hosting** (for deployment)
* **Tailwind CSS** (for UI styling)

## 📆 Project Structure

```bash
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   └── add-provider/
│   ├── services/
│   │   └── firestore.service.ts
│   └── models/
│       └── provider.model.ts
```

## 📝 Getting Started

### 1. Clone the Repo

```bash
git clone git@github.com:bisrat09/diaspora-connect.git
cd diaspora-connect
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

* Create a Firebase project
* Enable Firestore and set up your collection (e.g., `providers`)
* Create an `environments.ts` file in `src/environments/` with your Firebase config:

```ts
export const environment = {
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT.appspot.com',
    messagingSenderId: 'SENDER_ID',
    appId: 'APP_ID'
  }
};
```

### 4. Run the App

```bash
ng serve
```

Visit `http://localhost:4200` to see it in action.

## 🛠️ Development Status

MVP features under active development:

* [x] Card display from Firestore
* [x] Add provider form
* [x] Firebase connection
* [x] Responsive layout
* [x] Infinite scroll
* [ ] Pagination refinement
* [ ] Search/filter capabilities


## 📁 License

MIT
