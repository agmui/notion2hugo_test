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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZFT6Z6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFAPTXO%2BQ7tx2pCtx10RDbRdaIajdB%2B%2BiAMjFhpnTk1dAiEAihy%2Fsr9H2pPi0NBzlXcvQa%2FwLg9%2BDxSvy4SqyFpkL84qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJKYnj5RosrbMw5UircAwLM5EGG8bSFZDLCS5ouN0JZ3N%2B3mOqqogB2z1565sIL4uFUo7so5aACb6wUScHxANrcFxH5A%2FAEljdK2SboM0MdfuRDrBvIJqP3WnopnkABjPNg87ij%2FDLjrzuKed1fdfiAMX4XwdDMxhbVv%2FSGkCCxzew0LpZQ1xntDbGOUeWPK2KPa4oazws3%2FQLirmyKh0eWhM7Lh%2B%2FIB%2BjSc7T6H2dCieTuOVc28KEouT7c34mMSLUKWRahtZP6mBtwHRLDIUKPQ6wgBil7zZgDr1yaf%2BKoDiGY0aTR5uubVedYczmOWp4qpc8MSUElgOfU4Wch8fH%2F0AkngFjgIkLEC6R%2FG4YClZxK7RoIYyQLs25vp4TAmMVOn9CnlKSt55GaLbHFxfitrsmoQLgSOhfKUPbdtB0roifs0GRLxQOUkSJrqEalwfUO7KVHFRyle2OcAQzYXniJx2hwA9p0R%2FShWgs5wTExpDCM91a3skiIvO5O2FGfh%2FehzasotXIrkrTLsJLBQpzBJrcwrJ6EKuspCcJ3DOTVk1NSEoxe8WG0xhMYoHE2S9LEPK6QOeg7ue5LwzRome5q0NQkOOoha8O2sfLykAjUB0P3gHbuoWqnNYGL7F9BlzDU5xaadSuGWFoqMJ%2FE8sUGOqUBnNKmakK%2FBYOxwmG7P9mzvZ2mTZbhgRSIRxSfQSVmBNWOj%2FF2eOHMvoSLrBniDcFYqziDlWRD3EIALMQyX4pWSsrd%2BmwLJLQ5DFj6i%2Fh6HrDNptfPArK3lcFWEzfsCYIwAm5E8gpKvsgIoTOmDI1T%2BdRfpqAK%2B3CkBjjFTGkm5gV52Jxdvl5smzcHom8pbsYWabLz7FLQ7cN1lCyJ%2FIIq3rca5LNS&X-Amz-Signature=fb2b06105bd0cc46856e3a17a38352ee468a63fa5d982c4e0fbaf2a3c7213a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
