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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTV6JDL%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEAUNZiwuqv8VAjLyaeFN1%2BPErhBqDqvD5dx%2BJAawMDnAiEA4fBldxx4FZrzpa37y0TXfxPaARLsMdtWNxF8lCSpiuEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXC2carHAzsp78HAyrcA3ZWZsWMspGJBIztDRuPWlLuFOORDDIT5QOlpRHlkFTjboPdp8WvVO8SU4wZ66H2W6aGKOHsoTU1X6JJ5fdHH1ap%2Be5zK4A39oZtu8EslvPXD3o4PgKD8ooEprJfIFXCwzG3OhfctKA6BsNfEJ8XKwajjjk52Nvkrjq1%2FYA5g5camQ2OXUs1E%2B76TBPKtjxnz8w%2B9dBu2pLZBXykaRLvG5YSdpvBNUJeTHVd9T3GN%2FyMdfFD91DRtU%2FSm%2FWSaqcTIQZJI%2BUoRV6C0H2QJAiCnjm9Vh8%2BXKZH9NNwjiwo69hFj0NhIQjsxbo0EZWCyroKFPqoxFr6m0eP8a1OTOm3UeXcFXb47gaXcXT1Ye14FecznBeSADkELFs%2Bs76CrgiuUo5hXic3Hml%2FCbf7cS1wZqP6ts3Smrw3wvFUYIBNLiDNa%2F4jp2ZGgH%2BBDc%2BlcLJrLpxsQzibh%2BITKqXLWaLYEKA7KsD7OeTc98uqW%2BcKlJ%2FmXC1CElJ%2BGdvG%2FIz%2B0AWvL8zaOh50ECbF6tSMAsRJqB5KxskpC%2FllY5dhZ8d%2F%2FkKE9nDmRJw%2BxFW0MjH0ayV7kMSCswWYJS5pMpgbSg97QcJ2zsz4oz5i6xPkBgPmMLQE6OQlEvf1xlrsY0tvMPy16MkGOqUBNKRFaDowRYQ53rwjuCgdRfkLrRlJmIrJUu85QVyx31NQz4oAh8adwm6qjU7IO8hgcsUX3gSy%2FUcY1Nh%2BQxAIVUwtPjUeLcdzDhpF5jKoziTzWdIKz10m%2F%2BTl45ECNKP13TJs4ePFJjZqiv6W0M2dX7z0ADXwV6jC1SRLr3Ik9vDjNx5R6uHUD3QVGZWw5EZ%2Fr%2BuuksKq3Zs944s%2FhtchGqr7ML8B&X-Amz-Signature=7693199b464bad62087f5ccb10b4364f1c3629863b01e059513ba20e326eed7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
