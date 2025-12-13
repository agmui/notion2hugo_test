---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTNYYBS%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCqOyMsTrmlibjGgyc6oMhb%2BJY%2FkRkrqldj%2F2OmrCWlQwIhAMGqLlIUiESIUF%2F%2BFgPcRonvNDQd7hfpJolPTm6s5SawKv8DCBIQABoMNjM3NDIzMTgzODA1IgwK4PltdKBT9KNWgZMq3ANmYbkg%2BkPddTdJxkljpOlFUVGgPOBf8YvzYsLIeWLs55zAQuIQJ124RYsObVy7VTdHNVmZLxgzLxtv7RyCFiwnSnHoB81gzx4xnqud0qajW8YGrkwXdhEd%2FcFksPI0Mg1dDB4IkGtwJGDHTOIPf4DSKwGWylcaF8Wz7aP%2F1RXr8XrjVW9M9SMfDI7I6CesndoTVuKpFhyS1IOj8MuQnzHr6i0TeNTtyjKCEWwtLh3xgjnj0TvnxsHKlZl546Zz9aqYQxX5IpdZg7enSlv4i1uFNViUQM4fmgXryTi1oOV%2BqfnFhMBN9EZ%2BdGp0%2FDLVcB%2BfqQnrYRfMxXJJCM3Gdiv7fa1u1ETx%2BhdctSKzM4KFzTDO3WGKma%2Fy0DHfci4krGXW%2BPZPSoL1bfUgEpFYFVbD6XmObpj%2BOFUtV5EWqgEVNFKtoEwCycHc534ct2K64Bt2T2bs0eaMp%2B7SESrqADsCzX%2B9X%2BlHnxDFnE6jXO70LHfsKhihHBlOi7ZIh1Ly3PVOqCq3MM8QiabFa8GBWozOnYJoOjvSZiu6PS%2F74rU4Vq5fu4o8XMhRTQKMGGk%2FKLVi7X8Ev84deGzQqWOpNf3ckTnPQVWlQrMR%2FYbnM78s%2BGBo5cxhuIKDnUC0qDC%2F8%2FLJBjqkAVYr7BDy7MWeeQzKUc8jMP5R2gI4PiDMT5sBbdKlaK7NzSjCsPqhkn1b6SKkSx%2BJWEAmkN19zt%2FTsPHg9EC9rSkOTHNLsRZZ8I1GJVDp8flC1zYcD6pH4zYnvo2DJZm2GIv0IKYe%2F%2Fhl0kWZD%2BD%2FImx2m61Tw1tGpmvMtHqVPIEfLREvRhjsgQt719TvFrqEh0LUNbMj6gQWuxj4LcvSRVmGXZzK&X-Amz-Signature=a65bcfbf399315cf570884ee466aac1c49161c658f9ff2b4827914928c36a19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
