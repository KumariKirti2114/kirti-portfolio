# Personal Portfolio Website | [View Live](https://ashutosh-kumar-2004.github.io/myportfolio/)

A modern, responsive, and interactive personal portfolio website built to showcase my skills, projects, and professional experience. Developed using **React**, **Tailwind CSS**, and **Vite**, featuring dynamic content, smooth animations, and a seamless user experience.

## Features

- **Dynamic Content**: Sections for Skills, Experience, and Projects are fueled by a centralized `constants.js` file for easy updates.
- **Responsive Design**: Fully responsive layout ensuring compatibility across Desktops, Tablets, and Mobile devices.
- **Interactive UI**: Engaging user interface with animations powered by `react-parallax-tilt`, `react-simple-typewriter`, and custom Framer Motion-like effects.
- **Modern Styling**: Sleek design utilizing **Tailwind CSS** with a dark-themed aesthetic, gradients, and glassmorphism effects.
- **Contact Integration**: Functional contact form integrated with **EmailJS** for real-time messaging directly from the browser.
- **Notifications**: Instant user feedback for actions like form submissions using `react-toastify`.
- **Component-Based Architecture**: Modular and reusable code structure for easy maintenance and scalability.

## 🛠️ Tech Stack

**Frontend:**

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

**Libraries & Tools:**

- `emailjs-browser`: Service to send emails directly from client-side code.
- `react-icons` & `lucide-react`: Comprehensive libraries for scalable vector icons.
- `react-toastify`: For adding beautiful notifications to your app.
- `react-parallax-tilt`: For creating 3D tilt effects on components.
- `react-simple-typewriter`: For adding typewriter effects to text.
- `react-router-dom`: Declarative routing for React web applications.

## 📂 Project Structure

```bash
src/
├── assets/          # Images, logos, and static assets
├── components/      # Reusable UI components
│   ├── About/       # About Me section
│   ├── Contact/     # Contact form and logic
│   ├── Education/   # Education timeline/grid
│   ├── Navbar/      # Responsive Navigation bar
│   ├── Skills/      # Skills logic and display
│   ├── Work/        # Project showcase/grid
│   ├── Footer/      # Footer component
│   └── BlurBlob.jsx # Background gradient effect
├── constants.js     # Centralized data file for Skills, Projects, Experience
├── App.jsx          # Main application component layout
├── main.jsx         # Entry point rendering the App
└── index.css        # Global styles & Tailwind directives
```

## ⚙️ Installation & Run Locally

Follow these steps to set up the project locally on your machine.

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Ashutosh-kumar-2004/myportfolio.git
    cd myportfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📝 Configuration

### Updating Content

You can easily update the portfolio content by modifying the `src/constants.js` file. This file exports arrays for:

- **SkillsInfo**: Your technical skills and icons.
- **experiences**: Your work history.
- **projects**: Your portfolio projects.

### Email Service Setup

The contact form uses EmailJS. To make it functional for yourself:

1.  Create an account on [EmailJS](https://www.emailjs.com/).
2.  Update the `service_id`, `template_id`, and `public_key` in `src/components/Contact/Contact.jsx`.

## 🤝 Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## 📬 Contact

Feel free to reach out to me via the contact form on the website!

---


