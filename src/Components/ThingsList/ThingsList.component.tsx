import React, { FunctionComponent, useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import {
    Grid,
    Typography,
    TableContainer,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
    TablePagination,
    Button,
    TextField,
    Toolbar,
    Tabs,
    Tab,
} from "@material-ui/core"
import { Search } from "@material-ui/icons"
import axios from "axios"
import "./thingsList.sass"
import { IThing } from "src/Interfaces/IThings.interface"


const styles = makeStyles({
    row: {
        padding: "2px",
    },
    cell: {
        margin: 0
    }
})


export const ThingsList: FunctionComponent<{ things: Array<IThing>, context: string}> = ({ things, context }) => {
    const classes = styles()
    const [thingsArray, setThingsArray] = useState<Array<IThing>>(things),
        [temp, setTemp] = useState<Array<IThing>>(things),
        [rowsPerPage, setRowsPerPage] = useState(10),
        [page, setPage] = useState(0),
        handleChangePage = (newPage: number) => {
            setPage(newPage)
        },
        handleRowsPerPageChange = (value: string) => {
            setRowsPerPage(parseInt(value, 10))
        },
        handleSearchFor = (searchFor: string) => {
            setPage(0)
            return searchFor !== '' ? setTemp([...things.filter(thing => thing.name.toLowerCase().includes(searchFor))]) : setTemp([...things])
        },
        dataSliced = temp.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        rowsToHide = rowsPerPage - dataSliced.length


    useEffect(() => {
        setTemp(things)
    }, [things.length])


    return (
        <section className="table" >
            <div >
                <Grid container >
                    <Grid item>
                        <Search fontSize="small" />
                    </Grid>
                        <Grid item>
                            <TextField
                                label="Rechercher"
                                onChange={event => handleSearchFor(event.target.value)} />
                        </Grid>
                </Grid>
                <TableContainer  >
                    <Table>
                        <TableHead>
                            <TableRow className={classes.row}>
                                {["Nom"].map((header: string, idx: number) =>
                                (
                                    <TableCell key={idx} className={classes.cell}>
                                        <Typography variant="h6">{header}</Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
						{dataSliced.length === 0 
							? (
								<TableRow>
									<TableCell colSpan={5}>
										<Typography>
											Aucune donnée trouvée dans ce contexte: { context }
										</Typography>
									</TableCell>
								</TableRow>
							)
							: (
							dataSliced.map((thing: any, idx: number) => (
                                    <TableRow key={idx} hover className={classes.row}>
                                        <TableCell className={classes.cell}>
                                            <Typography>
                                                {thing.name}
                                            </Typography>
                                        </TableCell>
                                        {/* <TableCell className={classes.cell}>
                                            <Typography>
                                                {user.sAMAccountName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell className={classes.cell}>
                                            <Typography>
                                                {user.mail}
                                            </Typography>
                                        </TableCell> */}
                                        {/* <TableCell className={classes.cell}>
                                            <Button variant="outlined" onClick={event => handleChangeAccountStatus(event, user.cn, getOrgUnitFromUser(user.dn), user.userAccountControl === "512" ? "514" : "512")}>
                                                {user.userAccountControl === "512" || user.userAccountControl === "544" || user.userAccountControl === "66048" ? "désa" : 'A'}ctiver le compte
                                            </Button>
                                            <Button>
                                                <Link to={`/edit/${getOrgUnitFromUser(user.dn)}/${user.cn}`}>Edition</Link>
                                            </Button>
                                            <Button onClick={event => getOrgUnitFromUser(user.dn)}>
                                                Voir
                                            </Button>
                                        </TableCell> */}
                                    </TableRow>
                                ))
										) }
                            {rowsToHide > 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} style={{ height: rowsToHide * 5 + "vh" }} ></TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, {value: -1, label: "Tout"}]}
                    rowsPerPage={rowsPerPage}
                    count={things.length}
                    page={page}
                    onPageChange={(event, newPage) => handleChangePage(newPage)}
                    onRowsPerPageChange={event => handleRowsPerPageChange(event.target.value)} />
            </div>
        </section>
    )
}
