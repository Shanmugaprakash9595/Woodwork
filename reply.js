const testimonials = [
      {
        text: "It adds an incredible modern touch to our home, and we get compliments from everyone who visits.",
        name: "Prakash",
        role: "Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        text: "Excellent craftsmanship and very professional team. Highly recommended!",
        name: "Ramanan",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        text: "They finished our work on time and quality is top notch. Worth every penny.",
        name: "Pandi",
        role: "Business Owner",
        image: "https://randomuser.me/api/portraits/men/52.jpg"
      }
    ];

    let index = 0;

    const text = document.getElementById("text");
    const name = document.getElementById("name");
    const role = document.getElementById("role");
    const image = document.getElementById("image");

    function showTestimonial() {
      text.innerText = testimonials[index].text;
      name.innerText = testimonials[index].name;
      role.innerText = testimonials[index].role;
      image.src = testimonials[index].image;
    }

    function nextTestimonial() {
      index++;
      if (index >= testimonials.length) {
        index = 0;
      }
      showTestimonial();
    }

    function prevTestimonial() {
      index--;
      if (index < 0) {
        index = testimonials.length - 1;
      }
      showTestimonial();
    }
