import React from 'react';

import { observer } from "mobx-react";
import { AppContext } from "../../../containers/AppContext";
import { styled, Box, Button, Checkbox, CircularProgress, FormControlLabel, IconButton, Modal, Paper, Table, TableRow, TableCell, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const StyledTableCell = styled(TableCell)({
    textAlign: "center",
    borderBottom: "1px solid ghostwhite",
    padding: 0,
    fontSize: 12,
});

function CircularProgressWithLabel(props: any) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: "center" }}>
            <CircularProgress variant="determinate" {...props} size="2rem" />

            {props.value > 0 ?
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        fontSize={10}
                        fontWeight="bold"
                    >
                        {`${Math.round(props.value)}`}
                    </Typography>
                </Box>
                :
                null
            }
        </Box>
    );
}

export const UploadDisabledModal = observer(() => {
    const { common, product } = React.useContext(AppContext);

    return <Modal open={product.modalInfo.uploadDisabled}>
        <Paper className='uploadModal' sx={{
            width: 600
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3
            }}>
                <Typography fontSize={16} sx={{
                }}>
                    ?????? ????????????
                </Typography>

                <IconButton
                    size="small"
                    onClick={() => {
                        product.toggleUploadDisabledModal(-1, false, common)
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Paper variant="outlined">
                <Box sx={{
                    p: 1,
                }}>
                    <Table>
                        <TableRow>
                            <StyledTableCell colSpan={2} sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={<Checkbox size="small" onChange={(e) => { common.toggleUploadDisabledInfoMarketAll(e.target.checked) }} />} label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    ???????????? ????????????
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell colSpan={2}>
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell width={"35%"} sx={{
                                textAlign: "left"
                            }}>
                                ????????????
                            </StyledTableCell>

                            <StyledTableCell width={"15%"}>
                                ??????
                            </StyledTableCell>

                            <StyledTableCell width={"35%"} sx={{
                                textAlign: "left"
                            }}>
                                ????????????
                            </StyledTableCell>

                            <StyledTableCell width={"15%"}>
                                ??????
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A077').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A077').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A077', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-smartstore.png" />

                                    &nbsp;

                                    ??????????????????
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A077').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A077').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A077').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>

                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B378').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B378').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('B378', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-coupang.png" />

                                    &nbsp;

                                    ??????
                                </Box>} />

                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B378').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B378').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B378').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A112').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A112').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A112', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-street-global.png" />

                                    &nbsp;

                                    11??????(?????????)
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A112').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A112').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A112').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>

                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A113').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A113').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A113', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-street-normal.png" />

                                    &nbsp;

                                    11??????(??????)
                                </Box>} />

                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A113').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A113').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A113').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A006').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A006').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A006', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-gmarket.png" />

                                    &nbsp;

                                    ?????????
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A006').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A006').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A006').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>

                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A001').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A001').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A001', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-auction.png" />

                                    &nbsp;

                                    ??????
                                </Box>} />

                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A001').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A001').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A001').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A027').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A027').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A027', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-interpark.png" />

                                    &nbsp;

                                    ????????????
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A027').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A027').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A027').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>

                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B719').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B719').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('B719', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-wemakeprice.png" />

                                    &nbsp;

                                    ?????????
                                </Box>} />

                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B719').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B719').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B719').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A524').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A524').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A524', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-lotteon-global.png" />

                                    &nbsp;

                                    ?????????(?????????)
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A524').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A524').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A524').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>

                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A525').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A525').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('A525', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-lotteon-normal.png" />

                                    &nbsp;

                                    ?????????(??????)
                                </Box>} />

                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A525').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A525').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'A525').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell sx={{
                                textAlign: "left"
                            }}>
                                <FormControlLabel control={
                                    <Checkbox
                                        size="small"
                                        disabled={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B956').disabled}
                                        checked={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B956').upload}
                                        onChange={(e) => { common.toggleUploadDisabledInfoMarket('B956', e.target.checked) }}
                                    />
                                } label={<Box sx={{
                                    display: "flex",
                                    fontSize: 12,
                                    alignItems: "center"
                                }}>
                                    <img src="/resources/icon-tmon.png" />

                                    &nbsp;

                                    ??????
                                </Box>} />
                            </StyledTableCell>

                            <StyledTableCell>
                                {common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B956').progress > 0 ?
                                    <CircularProgressWithLabel color="error" value={common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B956').progress} />
                                    :
                                    common.uploadDisabledInfo.markets.find((v: any) => v.code === 'B956').disabled ?
                                        <Typography sx={{
                                            color: "red",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                        :
                                        <Typography sx={{
                                            color: "green",
                                            fontSize: 12
                                        }}>
                                            ????????????
                                        </Typography>
                                }
                            </StyledTableCell>

                            <StyledTableCell colSpan={2}>
                            </StyledTableCell>
                        </TableRow>
                    </Table>
                </Box>
            </Paper>

            <Paper variant="outlined" sx={{
                height: 100,
                overflowY: "auto",
                mt: 1,
            }}>
                {product.uploadConsole?.map((v: any) => <Typography sx={{
                    fontSize: 12
                }}>
                    {v}
                </Typography>)}
            </Paper>

            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3
            }}>
                <Button disabled={!common.uploadInfo.uploadable} disableElevation variant="contained" color="info" sx={{
                    width: "33%",
                    mx: 0.5
                }} onClick={async () => {
                    await common.setUploadable(false);

                    await product.disableItems(common);
                    await product.toggleUploadDisabledModal(-1, false, common);
                }}>
                    {!common.uploadInfo.uploadable && !common.uploadInfo.stopped ? "???????????? ???..." : "????????????"}
                </Button>

                <Button disabled={common.uploadInfo.stopped} disableElevation variant="contained" color="error" sx={{
                    width: "33%",
                    mx: 0.5
                }} onClick={async () => {
                    let accept = confirm("??????????????? ?????????????????????????\n??????????????? ?????????????????? ????????? ????????? ????????? ???????????? ?????? ??? ????????????.");

                    if (accept) {
                        await common.setStopped(true);
                    }
                }}>
                    {!common.uploadInfo.uploadable && common.uploadInfo.stopped ? "?????? ???..." : "??????"}
                </Button>

                <Button disableElevation variant="contained" color="inherit" sx={{
                    width: "33%",
                    mx: 0.5
                }} onClick={() => { product.toggleUploadDisabledModal(-1, false, common) }}>
                    ??????
                </Button>
            </Box>
        </Paper>
    </Modal>
});