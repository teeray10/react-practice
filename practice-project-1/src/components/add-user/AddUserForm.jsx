function AddUserForm(props) {
    return (
        <form>
            <div>
                <label>Username</label>
                <input type="text" />
            </div>
            <div>
                <label>Age</label>
                <input type="number" />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUserForm;