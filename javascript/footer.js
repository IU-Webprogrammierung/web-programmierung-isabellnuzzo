document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-content">
      <div class="contact-info">
        <h2 class="heading-secondary">Contact me</h2>
        <h3 class="heading-tertiary">Let's work together!</h3>

        <p>
          I'm always excited to get the opportunity to
          <strong>connect with like-minded people</strong> and collaborate on
          innovative projects. Whether you're looking for someone to bring
          your ideas to life with, solve complex challenges or create seamless
          user experiences, I'm here to help. Let's discuss
          <em>your vision</em> and how we can <em>bring it to life</em>. I'm
          ready to contribute my skills and expertise. Just reach out to me
          down below - Let's create something amazing
          <strong>together!</strong>
        </p>

        <p>
          <a href="mailto:isabell.nuzzo@iu-study.org"
            >isabell.nuzzo@iu-study.org</a
          ><br />
          +49123123123
        </p>
      </div>

      <div id="contact-me" class="contact-form">
        <form action="https://formspree.io/f/yourformid" method="POST">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="_replyto"
            placeholder="Email"
            required
          />
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            required
          ></textarea>
          <div class="button-footer">
            <button class="btn" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
});
