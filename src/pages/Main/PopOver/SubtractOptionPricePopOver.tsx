import React from 'react';

import { observer } from "mobx-react";
import { AppContext } from "../../../containers/AppContext";
import { Box, Button, Grid, MenuItem, Popover, Select, TextField, Typography } from '@mui/material';

export const SubtractOptionPricePopOver = observer(() => {
    const { product } = React.useContext(AppContext);

    const onClose = () => {
        product.setSubtractOptionPricePopOver({
            ...product.popOverInfo.setSubtractOptionPrice,

            index: -1,
            element: null,
            open: false,

            data: {
                nameIndex: -1,
                valueIndex: -1,
                price: ""
            }
        });
    }

    return <Popover
        open={product.popOverInfo.subtractOptionPrice.open}
        anchorEl={product.popOverInfo.subtractOptionPrice.element}
        onClose={onClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
    >
        <Box sx={{
            p: 3,
            width: 300
        }}>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={6} md={6} sx={{
                        m: "auto"
                    }}>
                        <Typography fontSize={14}>
                            적용할 옵션명
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={6} sx={{
                        m: "auto",
                    }}>
                        <Select sx={{
                            background: "white",
                            fontSize: 13,
                            height: 30,
                            width: "100%",
                        }}
                            value={product.popOverInfo.subtractOptionPrice.data.nameIndex}
                            variant='outlined'
                            size='small'
                            onChange={(e) => {
                                product.setSubtractOptionPricePopOver({
                                    ...product.popOverInfo.subtractOptionPrice,

                                    data: {
                                        ...product.popOverInfo.subtractOptionPrice.data,

                                        nameIndex: e.target.value
                                    }
                                });
                            }}
                        >
                            <MenuItem value={-2}>
                                {"<체크된 옵션>"}
                            </MenuItem>

                            <MenuItem value={-1}>
                                {"<모든 옵션명>"}
                            </MenuItem>

                            {product.popOverInfo.subtractOptionPrice.index > -1 ? product.itemInfo.items[product.popOverInfo.subtractOptionPrice.index].productOptionName.map((v: any, i: number) => (
                                <MenuItem value={i}>
                                    {v.name}
                                </MenuItem>
                            )) : null}
                        </Select>
                    </Grid>

                    {product.popOverInfo.subtractOptionPrice.data.nameIndex < 0 ?
                        null
                        :
                        <>
                            <Grid item xs={6} md={6} sx={{
                                m: "auto"
                            }}>
                                <Typography fontSize={14}>
                                    적용할 옵션값
                                </Typography>
                            </Grid>

                            <Grid item xs={6} md={6} sx={{
                                m: "auto",
                            }}>
                                <Select sx={{
                                    background: "white",
                                    fontSize: 13,
                                    height: 30,
                                    width: "100%",
                                }}
                                    value={product.popOverInfo.subtractOptionPrice.data.valueIndex}
                                    variant='outlined'
                                    size='small'
                                    onChange={(e) => {
                                        product.setSubtractOptionPricePopOver({
                                            ...product.popOverInfo.subtractOptionPrice,

                                            data: {
                                                ...product.popOverInfo.subtractOptionPrice.data,

                                                valueIndex: e.target.value
                                            }
                                        });
                                    }}
                                >
                                    <MenuItem value={-1}>
                                        {"<옵션값 선택>"}
                                    </MenuItem>

                                    {product.popOverInfo.subtractOptionPrice.index > -1 ? product.itemInfo.items[product.popOverInfo.subtractOptionPrice.index].productOptionName[product.popOverInfo.subtractOptionPrice.data.nameIndex].productOptionValue.map((v: any, i: number) => (
                                        <MenuItem value={i}>
                                            {v.name}
                                        </MenuItem>
                                    )) : null}
                                </Select>
                            </Grid>
                        </>
                    }

                    <Grid item xs={6} md={6} sx={{
                        m: "auto"
                    }}>
                        <Typography fontSize={14}>
                            인하할 가격
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={6} sx={{
                        m: "auto",
                    }}>
                        <TextField
                            id={"subtract_option_price"}
                            variant='outlined'
                            sx={{
                                width: "100%",
                            }}
                            inputProps={{
                                style: {
                                    fontSize: 14,
                                    padding: 5,
                                }
                            }}
                            onBlur={(e) => {
                                product.setSubtractOptionPricePopOver({
                                    ...product.popOverInfo.subtractOptionPrice,

                                    data: {
                                        ...product.popOverInfo.subtractOptionPrice.data,

                                        price: e.target.value
                                    }
                                });
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3
            }}>
                <Button disableElevation size="small" variant="contained" color="info" sx={{
                    width: 100,
                    height: 30,
                    mx: 0.5
                }} onClick={async () => {
                    const index = product.popOverInfo.subtractOptionPrice.index;

                    const price = parseInt(product.popOverInfo.subtractOptionPrice.data.price);

                    const nameIndex = parseInt(product.popOverInfo.subtractOptionPrice.data.nameIndex);
                    const valueIndex = parseInt(product.popOverInfo.subtractOptionPrice.data.valueIndex);

                    if (!price || isNaN(price)) {
                        alert("인하할 가격은 숫자 형식으로만 입력 가능합니다.");

                        return;
                    }

                    if (nameIndex < 0) {
                        if (nameIndex === -1) {
                            product.calcProductOptionPrice(price, 'subPrice', index, null, false);
                        }
                        else if (nameIndex === -2) {
                            product.calcProductOptionPrice(price, 'subPrice', index, null, true);
                        }
                    } else {
                        if (valueIndex === -1) {
                            alert("적용할 옵션값을 선택해주세요.");

                            return;
                        }

                        const valueId = product.itemInfo.items[index].productOptionName[nameIndex].productOptionValue[valueIndex].id;

                        product.calcProductOptionPrice(price, 'subPrice', index, valueId, null);
                    }

                    onClose();
                }}>
                    적용
                </Button>

                <Button disableElevation size="small" variant="contained" color="inherit" sx={{
                    width: 100,
                    height: 30,
                    mx: 0.5
                }} onClick={onClose}>
                    취소
                </Button>
            </Box>
        </Box>
    </Popover >
});