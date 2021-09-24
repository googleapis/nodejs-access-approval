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
  // [START accessapproval_v1_generated_AccessApproval_UpdateAccessApprovalSettings_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The new AccessApprovalSettings.
   */
  // const settings = ''
  /**
   *  The update mask applies to the settings. Only the top level fields of
   *  AccessApprovalSettings (notification_emails & enrolled_services) are
   *  supported. For each field, if it is included, the currently stored value
   *  will be entirely overwritten with the value of the field passed in this
   *  request.
   *  For the `FieldMask` definition, see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   *  If this field is left unset, only the notification_emails field will be
   *  updated.
   */
  // const updateMask = ''

  // Imports the Accessapproval library
  const {AccessApprovalClient} = require('@google-cloud/access-approval').v1;

  // Instantiates a client
  const accessapprovalClient = new AccessApprovalClient();

  async function updateAccessApprovalSettings() {
    // Construct request
    const request = {};

    // Run request
    const response = await accessapprovalClient.updateAccessApprovalSettings(
      request
    );
    console.log(response);
  }

  updateAccessApprovalSettings();
  // [END accessapproval_v1_generated_AccessApproval_UpdateAccessApprovalSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
