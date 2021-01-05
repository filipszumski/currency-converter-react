import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Symbol, TableCell, TableHeader, TableRow } from "./styled";
import { getRates, selectBase, selectLatestDayRates, selectPreviousToLatestDayRates } from "../../ratesSlice";

export const TableBody = () => {
    const dispatch = useDispatch();
    const rates = useSelector(selectLatestDayRates);
    const base = useSelector(selectBase);
    const previousDayRates = useSelector(selectPreviousToLatestDayRates);

    useEffect(() => {
        dispatch(getRates());
    }, [dispatch, base]);

    return (
        <>
            <TableRow>
                <TableHeader scope="col">Currency</TableHeader>
                <TableHeader scope="col">Spot</TableHeader>
                <TableHeader scope="col">Increace&nbsp;/ Decrease</TableHeader>
                <TableHeader scope="col">Chart</TableHeader>
            </TableRow>
            {(rates !== undefined && rates.length > 0) && rates.map((rate, index) => (
                <TableRow key={rate[0]}>
                    <TableCell>{rate[0]}</TableCell>
                    <TableCell>{rate[1].toFixed(4)}</TableCell>
                    <TableCell>
                        {(rate[1] / previousDayRates[index][1]) > 1 ?
                            <Symbol increase>	&#129033;</Symbol> :
                            <Symbol decrease>	&#129035;</Symbol>}
                    </TableCell>
                    <TableCell><span role="img">📉</span></TableCell>
                </TableRow>
            ))}
        </>
    )
};