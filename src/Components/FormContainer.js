import React from 'react'
import PersonalInformationForm from './Field Components/PersonalInformationForm';
import WorkExperienceForm from './Field Components/WorkExperienceForm'
import EducationalExperienceForm from './Field Components/EducationalExperienceForm';
import SkillForm from './Field Components/SkillForm'

function FormContainer(props) {

    const { personalInformation, 
        handleUpdateExperience, 
        handleDeleteExperience, 
        handleCreateExperience,
        workExperience } = props;

    return (
        <div className='FormContainer'>
            <button type="submit" onClick={e => e.preventDefault()} className='sampleStateButton'>Generate Sample CV</button>
            <PersonalInformationForm 
                handleUpdateExperience={handleUpdateExperience}
                personalInformation={personalInformation}/>
                
            <WorkExperienceForm workExperience={workExperience}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleCreateExperience={handleCreateExperience}/>
            
            {/* <SkillForm skillArr={appState.skillArr}
            createExperience={createExperience}
            deleteExperience={deleteExperience}
            toggleSkillEdit={toggleSkillEdit}
            updateInputField={updateInputField}/> */}
            
            {/* <EducationalExperienceForm
                educationalExperienceArr={appState.educationalExperience.educationalExperienceArr}
                elementType={appState.educationalExperience.type}
                updateInputField={updateInputField}
                createExperience={createExperience}
                deleteExperience={deleteExperience}/> */}

        </div>
    )
    
}



export default FormContainer;