document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('#sideMenu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = event.target.id.replace('Link', '');
            loadContent(section);
        });
    });

    function loadContent(section) {
        const content = {
            browseCourses: `
                <div class="dashboard-box" id="browseCoursesBox">
                    <h2>Browse Courses</h2>
                    <p>10 Available Courses</p>
                </div>
            `,
            createCourse: `
                <div class="dashboard-box" id="createCourseBox">
                    <h2>Create Course</h2>
                    <p>Create a new course with detailed modules.</p>
                </div>
            `,
            enrolledCourses: `
                <div class="dashboard-box" id="enrolledCoursesBox">
                    <h2>Enrolled Courses</h2>
                    <p>5 Enrolled Courses</p>
                </div>
            `,
            trackProgress: `
                <div class="dashboard-box" id="trackProgressBox">
                    <h2>Track Progress</h2>
                    <p>View your progress in all enrolled courses.</p>
                </div>
            `,
            manageMaterials: `
                <div class="dashboard-box" id="manageMaterialsBox">
                    <h2>Manage Materials</h2>
                    <p>Upload and manage course materials.</p>
                </div>
            `,
            exercises: `
                <div class="dashboard-box" id="exercisesBox">
                    <h2>Exercises</h2>
                    <p>Participate in exercises and quizzes.</p>
                </div>
            `
        };

        document.getElementById('content').innerHTML = content[section];

        const boxes = document.querySelectorAll('.dashboard-box');

        boxes.forEach(box => {
            box.addEventListener('click', () => {
                const section = box.id.replace('Box', '');
                loadDetailedContent(section);
            });
        });
    }

    function loadDetailedContent(section) {
        const detailedContent = {
            browseCourses: `
                <h2>Browse Courses</h2>
                <ul>
                    <li>Course 1: Introduction to Language</li>
                    <li>Course 2: Intermediate Grammar</li>
                    <li>Course 3: Advanced Vocabulary</li>
                    <li>Course 4: Conversational Skills</li>
                    <li>Course 5: Writing Techniques</li>
                </ul>
            `,
            createCourse: `
                <h2>Create Course</h2>
                <p>Fill out the form to create a new course.</p>
                <!-- Add form here for creating course -->
            `,
            enrolledCourses: `
                <h2>Enrolled Courses</h2>
                <ul>
                    <li>Course 1: Introduction to Language</li>
                    <li>Course 2: Intermediate Grammar</li>
                </ul>
            `,
            trackProgress: `
                <h2>Track Progress</h2>
                <ul>
                    <li>Course 1: 75% Complete</li>
                    <li>Course 2: 50% Complete</li>
                </ul>
            `,
            manageMaterials: `
                <h2>Manage Materials</h2>
                <p>Upload and organize your course materials.</p>
                <!-- Add form here for uploading materials -->
            `,
            exercises: `
                <h2>Exercises</h2>
                <ul>
                    <li>Exercise 1: Grammar Quiz</li>
                    <li>Exercise 2: Vocabulary Test</li>
                </ul>
            `
        };

        document.getElementById('content').innerHTML = detailedContent[section];
    }

    // Example data to update counts
    document.getElementById('materialsCount').textContent = '5 Materials';
    document.getElementById('lecturesCount').textContent = '8 Lectures';
    document.getElementById('studentsCount').textContent = '15 Students';
    document.getElementById('usersCount').textContent = '20 Users';
});
