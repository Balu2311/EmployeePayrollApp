window.addEventListener('DOMContentLoaded', (event) => {
    createTableContents();
});
const createTableContents = () =>
{
    const tableHeader = `<tr>
    <th>Image</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start date</th>
    <th>Actions</th>
</tr>`;
    const tableContents = `${tableHeader}<tr>
    <td><img class="profile" src="../assets/profile-images/Ellipse -5.png" /></td>
    <td>B N Reddy V</td>
    <td>Male</td>
    <td>
        <span class="dept_label">Soft</span>
        <span class="dept_label">Engineer</span>
    </td>
    <td>₹4500000</td>
    <td>23 Dec 2019</td>
    <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" />
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" />
    </td>
</tr>
<tr>
    <td><img class="profile" src="../assets/profile-images/Ellipse -5.png" /></td>
    <td>B N Reddy V</td>
    <td>Male</td>
    <td>
        <span class="dept_label">Soft</span>
        <span class="dept_label">Engineer</span>
        </td>
        <td>₹4500000</td>
        <td>23 Dec 2019</td>
        <td>
            <img src="../assets/icons/delete-black-18dp.svg" alt="delete" />
            <img src="../assets/icons/create-black-18dp.svg" alt="edit" />
        </td>
</tr>`;
    document.getElementById('display_container').innerHTML = tableContents;
}