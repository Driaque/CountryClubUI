import React, { Component } from 'react'

export default class SuccessModal extends Component {
    render() {
        return (
            <div>
                <div className="example-modal">
                    <div className="modal modal-success">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Success</h4>
                            </div>
                            <div className="modal-body">
                                {/* Success Description message */}
                            <p>Topic Added</p> 
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-outline">Add New Topic</button>
                            </div>
                        </div>
                        {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>
                    {/* /.modal */}
                </div>

            </div>
        )
    }
}
