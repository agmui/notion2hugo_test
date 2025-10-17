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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTLJ6FE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG65KMEQ6dsjlpjTszz9NBxYkD02K4qpaaHKl2ojfGYZAiEApO1IOKSo%2BvrvRw93vxTyJbp%2BbO3QZt0daQLyw943Dz4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgNejZYbDWAK2uw6SrcA2hNTV5x27FDHxA4ZUW%2F80ich4xbqZLWcx96QuRQw06wM7aMSdoDwzPjUZaXX%2Bf1mLM3IkwwAtVq%2FBeX07gSR8KhqSRJvr99UWxJIRUX3KLKWrRh4KdzKV8f7uWbxvaQ%2Bmk7j3qZuO1Zhh%2FPCCZ%2BEbprcntHsCZCG5nJ7ByzqWitfQ90ILWB%2BqaJBIl%2F%2Fwux9QZsiP0WgBrMFOAxCwaCxp9kUx%2FV1SsG6ZrpjVnbihs2KT%2FBZjYj7XjO42GT9YRpbO0XXekmO4IpgmFoBgbatFLC1RPOzEY3CgDcVZgEMSfK%2FeH4LEHrmdamHG9jTEbrUWnb1E%2BNThDVEYopfjJHIYzrupbfkyqvL5Bc0n%2FB9Y2QNqLcpx20uj9Wf%2BS5PXL7%2Fj4MG5XBrI8rf4bG7do%2BnSIe0lkHyhX29oHD0L8N3Oo83OGUFsOtF1oPcDUTn9yNjUDRIACU9gBHZBXq0aEGcaoVdrg4lkbskq5ahw1Rqh%2F6EL%2Blusy7jTfPR%2BQ99ESfi%2F4vJH%2FPXkhqfiRPhAyyhTaKSkrVicDnwnUdLHm%2F7O02kYMeRw2FuASg7T3V0m0uZvULhPIMIyaXoRXei8Iby%2B86uxB9ckvVo3y9UTm5Vu2xxJtUxrCBo29Bv%2FqJMOmQxscGOqUBXxuk7KAQZ5tOkudLWIXO1G1MK2rP%2BvJjsMpGiGXb6KLTyjWPXJWWynKuWy%2Bs4okIkk6l3WCq%2FHbz7qYcD0UkkW2ezHztNUC%2BzMCOJyMZf2Nl2k1UWPx7Xr9Fjn5LYoc3pgfy7xL2GS%2BXgC7AA6CYQVfH89BPUvgAiwSTSscxZJDSbxwB3mTjOzaXWs2ZW2c6gaD1ESsCl%2Fx2GT%2BHxLiGgAMKS1RS&X-Amz-Signature=147bdfa80ecedcdb3c3ab1bc3e89b389e9245563f116b6a921276db32356011a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
