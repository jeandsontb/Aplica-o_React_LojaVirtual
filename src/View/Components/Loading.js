import React from 'react';
import { Typography, Modal, CircularProgress } from '@material-ui/core';
import { changeLoading } from '../../store/actions/loading.action';
import { useSelector, useDispatch } from 'react-redux';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loadingReducer);


    return (
        <Modal
            open={loading.open}
            onClose={() => dispatch( changeLoading({open: false}) ) }
            className="d-flex justify-content-center align-items-center h-100"
        >
            <div className="bg-white d-flex align-items-center rounded-lg p-3" >
                <CircularProgress size={20} className="mr-3" />
                <Typography variant="subtitle1" > {loading.msg} </Typography>
            </div>
        </Modal>
    );
}