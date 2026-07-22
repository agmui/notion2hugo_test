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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB47UDB%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCpl3SeEfWXb7mVV0EpRAUA5j3bmqjA%2FZF0y6bF2P4e1AIgB1eCNXEpDRAbAbJpRki30c2VDvQDE1EiIu5spDNOArQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsCMNG%2BmUfCJobAAyrcAzXrGRQO3gnZd0ZmfEsUzO9Gu4OipCMtqwM356bxeJFTJuQb5oBxcWcV3c6GKF8nLozb24YjmB8ne%2FI37BrTk1uyK70xF1nwczj2XzmxbONwC8Qti%2BqlNe2otMKN9BZj6xpOPG4jyIHjLlSHQbAt71OFAU0zO9sCdV9bRiFWOIuzvR7k7VUGOCAJQX6C6gGO8tE5%2FUg59TVsxeKu5%2ByR15nIjw5G2U8KnMmuQ3jp0M46fbCxFa292G0WNz4Jo1nDVzX7Jwp1cv0gZOjO%2F9mehljYOxGfo8t5sHfeyfbkAnhTM2OBe6kVQAv2uqxuKjphhHUqSN3HVtIrx3posmKYISGUA9%2FwdAzjYD7U40eyDylJmNzSv2H%2B5OJMmcgXudct9scpf1kfSDKsYOlIEJ76wLk%2FnArbDrH%2FnDLKVdubDQfaC8carNrjDMKl2PxsStOMQom7MX8BxNcFagQxZQpvoR8YIdL87Ye727bowrjEntndnPVbrc5VyuVZFEbCHEs6TsXCGm%2B5%2FDhr0D3kx3%2BM0oLpWo5PrTmT5KCBBJX2U25VgA0TXVsH1DiFMwmBeJUWMC7guD1tH5hyvXfmie7n5fBy1DxlqxzPv%2Fz2rXPpoXqIL40JDbHqyDR6DSCCMPDFgNMGOqUBOjIxaF7ZR4hXY85IiewFzMegLT9jFp85nrDKLAO%2BIJRl3l7KvjNUhgYn4klk%2F%2BY4%2BCDSXbbn1jVhl%2FnNf39oUs%2F6%2B1G%2BCO7W%2BMQMA4T6YhKgoGKFQ2eCRW%2BJjlIYAepGAgr1QS6RFCtwZN2BFZo14pfPaIRJFervzhO4psRxzIt8jl6wfTZLHMDyk1F44nDtSy7VI%2BfuG37shjQXr9RYNXcNrK3%2B&X-Amz-Signature=c9fc6c2b3ee42bdb6ee6572c70bf5b594034570ea27c26c2a4422179201a0836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
