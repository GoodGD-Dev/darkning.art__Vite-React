import "./style.css";

function Comission () {
  return (
    <div className="container">
      <section className="hidden">
        <div className="form">
          <form>
            <label htmlFor="email"></label>
            <input type="email" placeholder="example@example.com" required />

            <label htmlFor="name"></label>
            <input type="name" placeholder="John Doe" required />

            <label htmlFor="project-type">What type of project are you interested in?* </label>
            <select id="project-type" name="project-type">
              <option value="Personal project">Personal project</option>
              <option value="Artwork or asset for professional or passion project">Artwork or asset for professional or passion project</option>
              <option value="Artwork for album or single cover">Artwork for album or single cover</option>
              <option value="Custom piece for tattoo">Custom piece for tattoo</option>
              <option value="Tabletop RPG (D&D) character designs">Tabletop RPG (D&D) character designs</option>
              <option value="Original character design">Original character design</option>
              <option value="Fan Art">Fan Art</option>
              <option value="Book cover">Book cover</option>
              <option value="Licensing an existing piece">Licensing an existing piece</option>
              <option value="Custom digital piece or physical painting">Custom digital piece or physical painting</option>
              <option value="Other">Other</option>
            </select>

            <div className="other-input" id="other-project-type">
              <label htmlFor="other-project-type-input">Please specify:</label>
              <input type="text" name="other-project-type-input" />
            </div>

            <label htmlFor="price-range">Price Range* </label>
            <input type="text" id="price-range" name="price-range" placeholder="$100 - $500" required />

            <label htmlFor="description">Description of request* </label>
            <textarea id="description" name="description" rows="4" maxLength="500" placeholder="Describe your project in detail..." required></textarea>

            <label htmlFor="visual-preference">If there are any pieces that you are drawn to visually, please feel free to add a link to them or describe them below.</label>
            <textarea id="visual-preference" name="visual-preference" rows="4" maxLength="300" placeholder="Add links or descriptions..."></textarea>

            <label htmlFor="format-needed">Do you need this project in a specific format?</label>
            <input type="text" id="format-needed" name="format-needed" placeholder="e.g., JPEG, PNG, PDF" />

            <label htmlFor="date-needed">Date needed by, if applicable</label>
            <input type="date" id="date-needed" name="date-needed" />

            <label htmlFor="licensing-needs">Licensing needs* </label>
            <select id="licensing-needs" name="licensing-needs" required>
                <option value="Exclusive rights">Exclusive rights</option>
                <option value="Commercial licensing">Commercial licensing</option>
                <option value="Personal use">Personal use</option>
                <option value="Not needed">Not needed</option>
                <option value="Not sure">Not sure</option>
                <option value="Other">Other</option>
            </select>

            <div className="other-input" id="other-licensing-needs">
                <label htmlFor="other-licensing-needs-input">Please specify:</label>
                <input type="text" id="other-licensing-needs-input" name="other-licensing-needs-input" />
            </div>

            <button type="submit">Submit</button>

            </form>
        </div>
      </section>
    </div>
  );
}

export default Comission;
