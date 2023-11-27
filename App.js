import Button from "./component/button/functional/buttoncomp"
import Sunny_list from "./component/list/list-un"
import Od_list from "./component/list/lists"
import Table from "./component/table/table"
import Dhoni from "./component/images/dhoni"
function app() {
  return (
    <div>
      <h1>Table</h1>
      <table border=" 4px solid black" border-collapse="collapse">

        <tr>

          <th>S.No</th>
          <th>Name</th>
          <th>Class</th>
          <th>ROOL .No</th>

        </tr>
        <tr>
          <td>1</td>
          <td>Shashi</td>
          <td>2</td>
          <td>36</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shiva</td>
          <td>9</td>
          <td>6</td>
        </tr>
        <tr>
          <td>3</td>
          <td>swapna</td>
          <td>LKG</td>
          <td>3</td>
        </tr>
      </table>
      <h2>food items i like</h2>
      <ol>
        <li>Chicken Biryani</li>
        <li>mutton curry</li>
        <li>fish</li>
        <li>sambar</li>
      </ol>
      <h2>food items i dont like </h2>
      <ul>
        <li>bittle gaurd</li>
        <li>prawns</li>
      </ul>
      <Button />
      <Od_list />
      <Sunny_list />
     <Table/>
     <Dhoni/>
    </div>
  )
}
export default app

