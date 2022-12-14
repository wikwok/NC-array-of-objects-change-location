function updateRemoteStudents (students) {
    let updatedStudents = []

    for (const element of students) {
        const student = {...element}

        if (!student.hasOwnProperty('location')) student.location = 'remote'

        updatedStudents.push(student)


    }
    //console.log(updatedStudents)
    //return students;
    return updatedStudents;
}

module.exports = {updateRemoteStudents};