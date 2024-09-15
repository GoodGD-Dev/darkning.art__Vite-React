import { useState, useEffect } from 'react';
import './style.css';

// Define os campos do formulário
const formFields = {
  email: { label: 'Email*', placeholder: 'example@example.com' },
  name: { label: 'Name*', placeholder: 'John Doe' },
  projectType: {
    label: 'What type of project are you interested in?*',
    options: [
      'Personal project',
      'Artwork or asset for professional or passion project',
      'Artwork for album or single cover',
      'Custom piece for tattoo',
      'Tabletop RPG (D&D) character designs',
      'Original character design',
      'Fan art',
      'Book cover',
      'Licensing an existing piece',
      'Custom digital piece or physical painting',
      'Other'
    ]
  },
  other: { label: 'Please specify:' },
  priceRange: { label: 'Price Range*', placeholder: '$100 - $500' },
  requestDescription: {
    label: 'Description of request*',
    placeholder: 'Describe your project in detail...'
  },
  references: {
    label: 'If there are any pieces that you are drawn to visually, please feel free to add a link to them or describe them below.',
    placeholder: 'Add links or descriptions...'
  },
  format: { label: 'Do you need this project in a specific format?', placeholder: 'e.g., JPEG, PNG, PDF' },
  dueDate: 'Date needed by, if applicable',
  licensing: {
    label: 'Licensing needs*',
    options: [
      'Exclusive rights',
      'Commercial licensing',
      'Personal use',
      'Not needed',
      'Not sure',
      'Other'
    ]
  },
  formBtn: { submitButton: 'Submit' }
};

function Commission() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    projectType: '',
    otherProjectType: '',
    priceRange: '',
    requestDescription: '',
    references: '',
    format: '',
    dueDate: '',
    licensing: '',
    otherLicensingNeeds: ''
  });

  // Estados para mostrar campos adicionais
  const [showOtherProjectType, setShowOtherProjectType] = useState(false);
  const [showOtherLicensingNeeds, setShowOtherLicensingNeeds] = useState(false);

  // Efeito para redirecionar o usuário baseado no idioma
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const path = window.location.pathname;

    if (userLang.startsWith('pt') && !path.startsWith('/pt/')) {
      window.location.href = '/pt/';
    } else if (userLang.startsWith('es') && !path.startsWith('/es/')) {
      window.location.href = '/es/';
    }
  }, []);

  // Função para lidar com o envio do formulário
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Define a lista do Trello baseada no idioma
    const lang = document.documentElement.lang;
    const idList = lang.startsWith('pt')
      ? '66c097ff1a2064d6f36bdc52'
      : lang.startsWith('es')
      ? '66c0aa892394d0ec1f629658'
      : '66c09834bd7bc70b3522d228';

    // Dados do cartão para enviar ao Trello
    const cardData = {
      name: `${formData.name} ${formData.email}`,
      desc: `Tipo de Projeto: ${formData.projectType}
             Preço: ${formData.priceRange}
             Descrição: ${formData.requestDescription}
             Referências: ${formData.references}
             Formatos: ${formData.format}
             Data: ${formData.dueDate}
             Licenças: ${formData.licensing}
             ${formData.otherProjectType ? `Outro Tipo de Projeto: ${formData.otherProjectType}` : ''}
             ${formData.otherLicensingNeeds ? `Outra Licença: ${formData.otherLicensingNeeds}` : ''}`,
      due: formData.dueDate ? new Date(formData.dueDate).toISOString() : null,
      start: new Date().toISOString(),
      idList: idList,
      key: '2edec1d82889c648b879474fc0cc0505',
      token: 'ATTAcc69586c0da53a549ddfe1c766dd27cfb288d69f0f275c22ec28879769073d238258503D'
    };

    // Envia os dados para o Trello
    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cardData)
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        window.location.href = 'https://darkning.art';
      } else {
        alert('Houve um erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Houve um erro ao enviar o formulário.');
    }
  };

  return (
    <div className="container">
      <section className="hidden">
        <div className="form">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">{formFields.email.label}</label>
            <input
              type="email"
              id="email"
              placeholder={formFields.email.placeholder}
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <label htmlFor="name">{formFields.name.label}</label>
            <input
              type="text"
              id="name"
              placeholder={formFields.name.placeholder}
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <label htmlFor="project-type">{formFields.projectType.label}</label>
            <select
              id="project-type"
              name="projectType"
              value={formData.projectType}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, projectType: value });
                setShowOtherProjectType(value === 'Other');
              }}
            >
              {formFields.projectType.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {showOtherProjectType && (
              <>
                <label htmlFor="other-project-type">{formFields.other.label}</label>
                <input
                  type="text"
                  id="other-project-type"
                  placeholder={formFields.other.label}
                  value={formData.otherProjectType}
                  onChange={(e) => setFormData({ ...formData, otherProjectType: e.target.value })}
                />
              </>
            )}

            <label htmlFor="price-range">{formFields.priceRange.label}</label>
            <input
              type="text"
              id="price-range"
              name="priceRange"
              placeholder={formFields.priceRange.placeholder}
              required
              value={formData.priceRange}
              onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
            />

            <label htmlFor="request-description">{formFields.requestDescription.label}</label>
            <textarea
              id="request-description"
              name="requestDescription"
              rows="4"
              maxLength="500"
              placeholder={formFields.requestDescription.placeholder}
              required
              value={formData.requestDescription}
              onChange={(e) => setFormData({ ...formData, requestDescription: e.target.value })}
            ></textarea>

            <label htmlFor="references">{formFields.references.label}</label>
            <textarea
              id="references"
              name="references"
              rows="4"
              maxLength="300"
              placeholder={formFields.references.placeholder}
              value={formData.references}
              onChange={(e) => setFormData({ ...formData, references: e.target.value })}
            ></textarea>

            <label htmlFor="format">{formFields.format.label}</label>
            <input
              type="text"
              id="format"
              name="format"
              placeholder={formFields.format.placeholder}
              value={formData.format}
              onChange={(e) => setFormData({ ...formData, format: e.target.value })}
            />

            <label htmlFor="due-date">{formFields.dueDate}</label>
            <input
              type="date"
              id="due-date"
              name="dueDate"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            />

            <label htmlFor="licensing">{formFields.licensing.label}</label>
            <select
              id="licensing"
              name="licensing"
              required
              value={formData.licensing}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, licensing: value });
                setShowOtherLicensingNeeds(value === 'Other');
              }}
            >
              {formFields.licensing.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {showOtherLicensingNeeds && (
              <>
                <label htmlFor="other-licensing-needs">{formFields.otherLicensingNeeds.label}</label>
                <input
                  type="text"
                  id="other-licensing-needs"
                  placeholder={formFields.otherLicensingNeeds.label}
                  value={formData.otherLicensingNeeds}
                  onChange={(e) => setFormData({ ...formData, otherLicensingNeeds: e.target.value })}
                />
              </>
            )}

            <button type="submit">{formFields.formBtn.submitButton}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Commission;
