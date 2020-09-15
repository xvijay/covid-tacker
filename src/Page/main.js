import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

import MaterialTable from "material-table";

import "./_main.scss";

export default class MainContainer extends React.Component {
  render() {
    const columns = [
      {
        title: "Flag",
        field: "flag",
        cellStyle: {
          width: 20,
          maxWidth: 20,
        },
      },
      { title: "Name", field: "name", lookup: { 34: "India", 63: "USA" } },
      { title: "Case", field: "case" },
    ];
    const data = [
      // { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        flag: "flag",
        name: 34,
        case: "120,5854",
      },
    ];
    return (
      <React.Fragment>
        <Box maxWidth={"lg"} style={{ padding: "1rem" }}>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <Grid container spacing={3}>
                <Grid item md={3}>
                  <div className="card-body">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <div className="card-title total">Total</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="card-content total">25,555,854</div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="card-body">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <div className="card-title active">Active</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="card-content active">25,555,854</div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="card-body">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <div className="card-title total">Recovered</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="card-content revcover">25,555,854</div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="card-body">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <div className="card-title total">Death</div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="card-content death">25,555,854</div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item md={3}>
                  <div>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={true}
                            onChange={(e) => console.log(e)}
                            name="checkedA"
                          />
                        }
                        label="Map"
                      />
                    </FormGroup>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div>
                    <FormControl>
                      <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                      <NativeSelect
                        value={10}
                        onChange={(e) => console.log(e)}
                        inputProps={{
                          name: "age",
                          id: "age-native-helper",
                        }}
                      >
                        <option aria-label="None" value="Global">
                          Global
                        </option>
                        <option value={10}>India</option>
                        <option value={20}>USA</option>
                        <option value={30}>China</option>
                      </NativeSelect>
                      <FormHelperText>Change Contry</FormHelperText>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <div className="map-container">Map</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
              <div className="country-table-container">
                <Grid container spaccing={3}>
                  <Grid item md={12}>
                    Live Cases by Contry
                  </Grid>
                </Grid>
                <div>
                  <MaterialTable
                    style={{ boxShadow: "none" }}
                    title=""
                    columns={columns}
                    data={data}
                    options={
                      {
                        // toolbar: false,
                        // paging: false,
                        // headerStyle: { backgroundColor: "red", padding: "5px" }, //change header padding
                        //cellStyle:{ padding: '5px'} here not work for me
                      }
                    }
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}
