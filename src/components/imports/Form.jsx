import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useForm } from '../../hooks/UseForm';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit, asesorias, showAlert } = useForm(
        {
            nombre: '',
            telefono: '+52',
            email: '',
            asesoria: '',
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Un agente se pondrá en contacto contigo.', 'success', '#9fc750');
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#1497ee');
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="campos-obligatorios">
                <p className="light-text">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE */}
            <div className="campo-precalificar-form">
                <label htmlFor="nombre" className="light-text" aria-label="Nombre del usuario">
                    *Nombre Completo:
                </label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && (
                    <small className="text-danger light-text" aria-live="assertive">
                        {errors.nombre}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className="campo-precalificar-form">
                <label htmlFor="telefono" className="light-text" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13"
                />
                {errors.telefono && (
                    <small className="text-danger light-text" aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* EMAIL */}
            <div className="campo-precalificar-form">
                <label htmlFor="email" className="light-text" aria-label="email del usuario">
                    *Correo Electrónico :
                </label>
                <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className="text-danger light-text" aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* TIPOS DE asesoria */}
            <div className="campo-precalificar-form">
                <label htmlFor="asesoria" className="light-text" aria-label="Tipo de asesoria quieres">
                    *Tipo de asesoria:
                </label>
                <select className="form-control" id="asesoria" name="asesoria" value={formData.asesoria} onChange={handleChange}>
                    {asesorias.map((asesoria) => (
                        <option key={asesoria} value={asesoria}>
                            {asesoria}
                        </option>
                    ))}
                </select>
                {errors.asesoria && (
                    <small className="text-danger light-text" aria-live="assertive">
                        {errors.asesoria}
                    </small>
                )}
            </div>

            {/* Contenedor para el botón y spinner */}
            <div className="content-envio">
                <button type="submit" className="boton-form bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    ENVIAR
                </button>

                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>
        </form>
    );
};
