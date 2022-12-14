import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { observer } from "mobx-react";
import { AppContext } from "../../../../containers/AppContext";
import { styled, Box, Button, Checkbox, CircularProgress, Divider, Grid, MenuItem, Select, Table, TableHead, TableBody, TableRow, TableCell, Toolbar, Typography } from "@mui/material";
import { List, AutoSizer } from "react-virtualized";
import { Input, MyButton } from "../../Common/UI";
import { Summary } from './Summary';
import { Details } from './Details/Details';

import '../../Common/Styles.css';

const StyledTableCell = styled(TableCell)({
  background: "white",
  textAlign: "center",
  padding: 0,
  fontSize: 14,
});

export const ProductTables = observer(() => {
  const { common, product } = React.useContext(AppContext);

  const tableRef = React.useRef();

  const rowRenderer = (props) => {
    const item = product.itemInfo.items[props.index];

    return <div key={props.key} style={props.style}>
      <Box>
        <Table>
          <Summary tableRef={tableRef} item={item} index={props.index} />
          <Details item={item} index={props.index} />
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
              <Checkbox size="small" checked={product.itemInfo.checkedAll} onChange={(e) => product.toggleItemCheckedAll(e.target.checked)} />
            </StyledTableCell>

            <StyledTableCell colSpan={3}>
              <Toolbar disableGutters style={{
                minHeight: 50
              }}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6} md={5} sx={{
                    margin: "auto"
                  }}>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <Button disableElevation
                        sx={{
                          minWidth: 100,
                          height: 30
                        }}
                        size="small"
                        variant="contained"
                        color="info"
                        startIcon={<FilterAltIcon />}
                        onClick={() => {
                          product.toggleSearchFilterModal(true)
                        }}
                      >
                        ????????????
                      </Button>

                      <Select
                        sx={{
                          background: "white",
                          fontSize: 13,
                          height: 30,
                          minWidth: 100,
                          mx: 0.5,
                        }}
                        defaultValue={product.searchInfo.searchType}
                        onChange={(e: any) => {
                          product.setSearchInfo({
                            ...product.searchInfo,

                            searchType: e.target.value
                          });
                        }}
                      >
                        {/* <MenuItem value="ALL">
                        ????????????
                      </MenuItem> */}

                        <MenuItem value="PCODE">
                          ????????????
                        </MenuItem>

                        <MenuItem value="ONAME">
                          ?????????(??????)
                        </MenuItem>

                        <MenuItem value="NAME">
                          ?????????(??????)
                        </MenuItem>

                        <MenuItem value="CNAME">
                          ???????????????
                        </MenuItem>

                        <MenuItem value="OID">
                          ?????????????????????
                        </MenuItem>

                        <MenuItem value="MID">
                          ????????????????????????
                        </MenuItem>
                      </Select>

                      <Input
                        id="product_tables_keyword"
                        onChange={(e: any) => {
                          product.setSearchInfo({
                            ...product.searchInfo,

                            searchKeyword: e.target.value
                          });
                        }}
                        onKeyPress={(e: any) => {
                          if (e.key !== 'Enter') {
                            return;
                          }

                          product.getSearchResult();
                        }}
                      />

                      <MyButton disableElevation variant="contained" color="info" sx={{
                        minWidth: 60,
                        ml: 0.5
                      }} onClick={() => { product.getSearchResult(); }}>
                        ??????
                      </MyButton>
                    </Box>
                  </Grid>

                  <Grid item xs={6} md={7} sx={{
                    margin: "auto"
                  }}>
                    <Box sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                      mr: 1
                    }}>
                      <Typography fontSize={13}>
                        ????????????
                      </Typography>

                      <Divider sx={{ height: 28, mr: 1, ml: 1 }} orientation="vertical" />

                      <MyButton disableElevation variant="contained" color="secondary" sx={{
                        minWidth: 60,
                      }} onClick={() => { product.toggleManyPriceModal(true) }}>
                        ????????????
                      </MyButton>

                      <MyButton disableElevation variant="contained" color="secondary" sx={{
                        ml: 0.5,
                        minWidth: 60,
                      }} onClick={() => { product.toggleManyFeeModal(true) }}>
                        ?????????
                      </MyButton>

                      <MyButton disableElevation variant="contained" color="secondary" sx={{
                        ml: 0.5,
                        minWidth: 60,
                      }} onClick={() => { product.toggleManyCategoryModal(true) }}>
                        ????????????
                      </MyButton>

                      <MyButton disableElevation variant="contained" color="secondary" sx={{
                        ml: 0.5,
                        minWidth: 60,
                      }} onClick={() => { product.toggleManyNameModal(true) }}>
                        ?????????
                      </MyButton>

                      <MyButton disableElevation variant="contained" color="secondary" sx={{
                        ml: 0.5,
                        minWidth: 60,
                      }} onClick={async () => {
                        product.toggleManyTagModal(true);
                      }}>
                        ????????????
                      </MyButton>

                      {product.state === 7 ?
                        <MyButton disableElevation variant="contained" color="secondary" sx={{
                          ml: 0.5,
                          minWidth: 60,
                        }} onClick={() => {
                          common.setEditedUpload(true);

                          product.toggleUploadModal(-1, true)
                        }}>
                          ????????????
                        </MyButton>
                        :
                        null
                      }

                      <MyButton disableElevation variant="contained" color="secondary" sx={{
                        ml: 0.5,
                        minWidth: 60,
                      }} onClick={() => {
                        common.setEditedUpload(false);

                        product.toggleUploadModal(-1, true)
                      }}>
                        ????????????
                      </MyButton>

                      {product.state === 7 ?
                        <MyButton disableElevation variant="contained" color="error" sx={{
                          ml: 0.5,
                          minWidth: 60,
                        }} onClick={() => {
                          product.toggleUploadDisabledModal(-1, true, common)
                        }}>
                          ????????????
                        </MyButton>
                        :
                        <MyButton disableElevation variant="contained" color="error" sx={{
                          ml: 0.5,
                          minWidth: 60,
                        }} onClick={() => {
                          product.deleteProduct(-1);
                        }}>
                          ????????????
                        </MyButton>
                      }
                    </Box>
                  </Grid>
                </Grid>
              </Toolbar>
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {product.itemInfo.items.length > 0 ?
            <TableRow>
              <StyledTableCell colSpan={3}>
                <div style={{
                  height: 770,
                }}>
                  <AutoSizer>
                    {({ height, width }) => (
                      <List
                        width={width}
                        height={height}
                        rowCount={product.itemInfo.items.length}
                        rowRenderer={rowRenderer}
                        rowHeight={({ index }) => product.itemInfo.items[index].collapse ? 577 : 83}
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
                  {product.itemInfo.loading ?
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
export default ProductTables;
