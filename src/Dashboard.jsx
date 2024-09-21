async function getTasks() {
    const response = await fetch(this.url);
    const tasks = await response.json();

    const status = `dashboard.getTasks(): ${response.status}, ${response.statusText}`;
    console.log(status);

    if (!response.ok)
        return;

    return tasks;
}

function DashboardColumn() {

}

function Dashboard() {

}

export default Dashboard;