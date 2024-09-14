import "./style.css";

const formFields = {
  email: { label: "Email*", placeholder: "example@example.com" },
  name: { label: "Name*", placeholder: "John Doe" },
  projectType: {
    label: "What type of project are you interested in?*",
    options: [
      "Personal project",
      "Artwork or asset for professional or passion project",
      "Artwork for album or single cover",
      "Custom piece for tattoo",
      "Tabletop RPG (D&D) character designs",
      "Original character design",
      "Fan art",
      "Book cover",
      "Licensing an existing piece",
      "Custom digital piece or physical painting",
      "Other"
    ]
  },
  other: { label: "Please specify:" },
  priceRange: { label: "Price Range*", placeholder: "$100 - $500" },
  requestDescription: {
    label: "Description of request*",
    placeholder: "Describe your project in detail..."
  },
  references: {
    label:
      "If there are any pieces that you are drawn to visually, please feel free to add a link to them or describe them below.",
    placeholder: "Add links or descriptions..."
  },
  format: { label: "Do you need this project in a specific format?", placeholder: "e.g., JPEG, PNG, PDF" },
  dueDate: "Date needed by, if applicable",
  licensing: {
    label: "Licensing needs*",
    options: [
      "Exclusive rights",
      "Commercial licensing",
      "Personal use",
      "Not needed",
      "Not sure",
      "Other"
    ]
  },
  formBtn: { submitButton: "Submit" },
};

function Commission() {
  return (
    <div className="container">
      <section className="hidden">
        <div className="form">
          <form>
            <label htmlFor="email">{formFields.email.label}</label>
            <input type="email" placeholder={formFields.email.placeholder} required />

            <label htmlFor="name">{formFields.name.label}</label>
            <input type="text" placeholder={formFields.name.placeholder} required />

            <label htmlFor="project-type">{formFields.projectType.label}</label>
            <select id="project-type" name="projectType">
              {formFields.projectType.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="other-input" id="other-project-type">
              <label htmlFor="other-project-type-input">{formFields.other.label}</label>
              <input type="text" name="other-project-type-input" />
            </div>

            <label htmlFor="price-range">{formFields.priceRange.label}</label>
            <input
              type="text"
              id="price-range"
              name="priceRange"
              placeholder={formFields.priceRange.placeholder}
              required
            />

            <label htmlFor="request-description">{formFields.requestDescription.label}</label>
            <textarea
              id="request-description"
              name="requestDescription"
              rows="4"
              maxLength="500"
              placeholder={formFields.requestDescription.placeholder}
              required
            ></textarea>

            <label htmlFor="references">{formFields.references.label}</label>
            <textarea
              id="references"
              name="references"
              rows="4"
              maxLength="300"
              placeholder={formFields.references.placeholder}
            ></textarea>

            <label htmlFor="format">{formFields.format.label}</label>
            <input type="text" id="format" name="format" placeholder={formFields.format.placeholder} />

            <label htmlFor="due-date">{formFields.dueDate}</label>
            <input type="date" id="due-date" name="dueDate" />

            <label htmlFor="licensing">{formFields.licensing.label}</label>
            <select id="licensing" name="licensing" required>
              {formFields.licensing.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="other-input" id="other-licensing-needs">
              <label htmlFor="other-licensing-needs-input">{formFields.other.label}</label>
              <input type="text" id="other-licensing-needs-input" name="other-licensing-needs-input" />
            </div>

            <button type="submit">{formFields.formBtn.submitButton}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Commission;
