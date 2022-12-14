import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

import { observer } from "mobx-react";
import { AppContext } from "../../../../containers/AppContext";
import { styled, Box, Checkbox, Chip, CircularProgress, Grid, IconButton, Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { List, AutoSizer } from "react-virtualized";
import { MyButton } from "../../Common/UI";
import { OrderSummary } from './OrderSummary';

import '../../Common/Styles.css';

const StyledTableCell = styled(TableCell)({
    background: "white",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    textAlign: "center",
    padding: 0,
    fontSize: 14,
});

export const OrderTables = observer(() => {
    const { common, order } = React.useContext(AppContext);

    const tableRef = React.useRef();

    const rowRenderer = (props) => {
        const item = order.orderInfo.orders[props.index];

        return <div key={props.key} style={props.style}>
            <Box>
                <Table>
                    <OrderSummary item={item} index={props.index} />
                </Table>
            </Box>
        </div>;
    };

    return (
        <>
            <Table stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        <StyledTableCell width={50}>
                            <Checkbox size="small" checked={order.orderInfo.checkedAll} onChange={(e) => order.toggleItemCheckedAll(e.target.checked)} />
                        </StyledTableCell>

                        <StyledTableCell width={600}>
                        </StyledTableCell>

                        <StyledTableCell>
                            <Box
                                sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "right",
                                    px: 1,
                                    minHeight: 50
                                }}
                            >
                                <MyButton disableElevation variant="contained" color="secondary" sx={{
                                    minWidth: 60,
                                }} onClick={() => { order.loadOrder(common); }}>
                                    ????????????
                                </MyButton>

                                <MyButton disableElevation variant="contained" color="secondary" sx={{
                                    ml: 0.5,
                                    minWidth: 60,
                                }} onClick={() => {
                                    alert("?????? ????????????.");

                                    // order.productPrepared(common, "");
                                }}>
                                    ????????????
                                </MyButton>

                                <MyButton disableElevation variant="contained" color="error" sx={{
                                    ml: 0.5,
                                    minWidth: 60,
                                }} onClick={() => {
                                    order.deleteOrder(-1);
                                }}>
                                    ????????????
                                </MyButton>
                            </Box>
                        </StyledTableCell>
                    </TableRow>

                    <TableRow>
                        <StyledTableCell width={50}>
                        </StyledTableCell>

                        <StyledTableCell colSpan={2}>
                            <Grid container spacing={0.5}>
                                <Grid item xs={6} md={4} sx={{
                                    margin: "auto"
                                }}>
                                    <Box
                                        sx={{
                                            alignItems: "center",
                                            display: "flex",
                                            fontSize: 11
                                        }}
                                    >
                                        ????????????(????????????/?????????/?????????)
                                    </Box>
                                </Grid>

                                <Grid item xs={6} md={2} sx={{
                                    margin: "auto"
                                }}>
                                    <Box
                                        sx={{
                                            alignItems: "center",
                                            display: "flex",
                                            fontSize: 11
                                        }}
                                    >
                                        ?????????(??????/??????/?????????)
                                    </Box>
                                </Grid>

                                <Grid item xs={6} md={3} sx={{
                                    margin: "auto"
                                }}>
                                    <Box
                                        sx={{
                                            alignItems: "center",
                                            display: "flex",
                                            fontSize: 11
                                        }}
                                    >
                                        ?????????(????????????/?????????/???????????????)
                                    </Box>
                                </Grid>

                                <Grid item xs={6} md={3} sx={{
                                    margin: "auto"
                                }}>
                                    <Box
                                        sx={{
                                            alignItems: "center",
                                            display: "flex",
                                            fontSize: 11
                                        }}
                                    >
                                        ??????(????????????/????????????)
                                    </Box>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {order.orderInfo.orders.length > 0 ?
                        <TableRow>
                            <StyledTableCell colSpan={3}>
                                <div style={{
                                    height: 745,
                                }}>
                                    <AutoSizer>
                                        {({ height, width }) => (
                                            <List
                                                width={width}
                                                height={height}
                                                rowCount={order.orderInfo.orders.length}
                                                rowRenderer={rowRenderer}
                                                rowHeight={83}
                                                ref={tableRef}
                                            />
                                        )}
                                    </AutoSizer>
                                </div>
                            </StyledTableCell>
                        </TableRow>
                        :
                        <TableRow>
                            <StyledTableCell colSpan={3}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: 3
                                }}>
                                    {order.orderInfo.loading ?
                                        <>
                                            <CircularProgress disableShrink size="1.5rem" />

                                            <Typography sx={{
                                                ml: 1
                                            }} fontSize={16}>
                                                ??????????????? ???????????? ????????????...
                                            </Typography>
                                        </>
                                        :
                                        <Typography fontSize={16}>
                                            ????????? ???????????? ????????????.
                                        </Typography>
                                    }
                                </Box>
                            </StyledTableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </>
    );
})

export default OrderTables;
