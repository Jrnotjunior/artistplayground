/* Edit this file to change the website text. No need to touch index.html. */
window.SITE = {
  name: "Artist Playground",
  tagline: "Arts & Performances",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Latest Updates", href: "#updates" },
    { label: "Productions", href: "#productions" },
    { label: "For Schools", href: "#schools" },
    { label: "Acting School", href: "#school" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    title: "Classic Philippine stories, live on stage.",
    text: "Artist Playground brings Rizal, Balagtas and the great Filipino epics to school auditoriums and theaters, and trains the next generation of actors.",
    buttons: [
      { label: "See upcoming shows", href: "#updates" },
      { label: "Book for your school", href: "#schools" }
    ]
  },
  about: {
    lead: "Artist Playground is a theater production company for arts and performances.",
    paragraphs: [
      "We stage the Philippine literature students read in class, so those stories are seen, heard and felt. Our productions travel to schools and also play in public theaters.",
      "We also run an acting school for students who want to learn the craft and perform."
    ],
    highlights: [
      { title: "Stage productions", text: "Four classic Filipino works in our repertoire." },
      { title: "School shows", text: "Performances booked directly by schools." },
      { title: "Acting school", text: "Classes for beginners and returning students." }
    ]
  },
  updates: {
    lead: "News on our upcoming plays.",
    featured: {
      label: "Next show", day: "00", month: "Month 2026",
      title: "Noli Me Tangere",
      text: "Venue and time to be announced. Tickets and school bookings are now open by inquiry.",
      button: "Ask about tickets", href: "#contact"
    },
    news: [
      { when: "Coming soon", title: "El Filibusterismo", text: "Casting and rehearsal schedule will be posted here." },
      { when: "Open now", title: "Acting school enrollment", text: "New batch is forming. Message us to reserve a slot." },
      { when: "For schools", title: "Book a school show", text: "Choose a play and we will arrange a date with your school." }
    ]
  },
  productions: {
    lead: "Four works, each adapted for the stage and for student audiences.",
    plays: [
      { title: "Noli Me Tangere", by: "José Rizal", text: "Rizal's novel of love, abuse of power and a country awakening." },
      { title: "El Filibusterismo", by: "José Rizal", text: "The sequel: Simoun's plan for revenge and its cost." },
      { title: "Ibong Adarna", by: "Traditional korido", text: "The enchanted bird, three princes and a kingdom's healing." },
      { title: "Florante at Laura", by: "Francisco Balagtas", text: "A tale of loyalty, betrayal and love told in verse." }
    ]
  },
  schools: {
    lead: "We sell our productions to schools. Bring the lesson to life for your whole grade level.",
    text: "Tell us your play, your audience size and your preferred date. We will reply with availability and a quote.",
    button: "Request a quote",
    points: [
      { title: "Choose your play", text: "Any of our four productions." },
      { title: "We come to you", text: "Performed at your school or venue." },
      { title: "Matches the curriculum", text: "Works students study in Filipino class." }
    ]
  },
  actingSchool: {
    lead: "Learn to perform with the people who make our shows.",
    classes: [
      { title: "Acting basics", text: "Voice, movement and stage presence." },
      { title: "Script and character", text: "Reading a role and building it." },
      { title: "Performance workshop", text: "Rehearse and perform for an audience." }
    ],
    button: "Enroll or ask for schedule"
  },
  contact: {
    lead: "For school bookings, tickets and acting classes.",
    email: "hello@artistplayground.example",
    cards: [
      { label: "Phone", value: "+63 000 000 0000", href: "tel:+630000000000" },
      { label: "Email", value: "hello@artistplayground.example", href: "mailto:hello@artistplayground.example" },
      { label: "Studio", value: "Street, City, Philippines" },
      { label: "Facebook", value: "facebook.com/artistplayground", href: "https://facebook.com/artistplayground" }
    ],
    topics: ["School show booking", "Tickets", "Acting school", "Something else"]
  }
};
