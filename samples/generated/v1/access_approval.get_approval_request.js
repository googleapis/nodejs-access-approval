// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START accessapproval_get_approval_request_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the approval request to retrieve.
   */
  // const name = 'abc123'

  // Imports the Accessapproval library
  const {AccessApprovalClient} = require('@google-cloud/access-approval').v1;

  // Instantiates a client
  const accessapprovalClient = new AccessApprovalClient();

  async function getApprovalRequest() {
    // Construct request
    const request = {};

    // Run request
    const response = await accessapprovalClient.getApprovalRequest(request);
    console.log(response);
  }

  getApprovalRequest();
  // [END accessapproval_get_approval_request_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
