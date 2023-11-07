import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import FormModal from "./components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./redux/userDataSlice";
import { FetchData } from "./components/FetchData";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.userReducer);
  console.log(userData, "users");
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handelOpen} variant="contained">
              ADD USER
            </Button>
          </Box>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Gender</TableCell>
                    <TableCell align="center">Hobbies</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData && userData.lengh > 0 ? (
                    <p>TableRow</p>
                  ) : (
                    userData.map((user) => {
                      return (
                        <TableRow
                          key={user.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {user.name}
                          </TableCell>
                          <TableCell align="center">{user.email}</TableCell>
                          <TableCell align="center">{user.date}</TableCell>
                          <TableCell align="center">{user.gender}</TableCell>
                          <TableCell align="center">{user.hobbies}</TableCell>
                          <TableCell align="center">
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Button
                                onClick={() => dispatch(deleteUser(user.id))}
                                variant="contained"
                                color="error"
                              >
                                Delete
                              </Button>
                              <Button
                                sx={{ ml: 2 }}
                                variant="contained"
                                color="success"
                              >
                                Update
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
      <FetchData />
      <FormModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
