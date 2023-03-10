import Column from "./Column";

function Table({ name, columns }) {
    return (
        <div class="table">
            <div class="table_name">{name}</div>
            <div class="table_columns">{columns.map((item => <Column name={item.name} />))}</div>
        </div>
    );
}
export default Table;