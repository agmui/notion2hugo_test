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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYIZR23N%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTKsPYay2QODG4PEU%2FK%2FIMp9P0%2BqW9d3wZV2D9lR8rAiEAwbPb0lvP5w3qcS39S2g7uFzSIqZqnUokRjCJ59nAYl0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeXMbQMbtJECRMseCrcA8kT2u%2BOqbsh%2BXO2VLJC%2BOylfJnjvg%2Fn%2F7YrZr9Yn%2FSsl2HmQCXEAJ2kF8NvNdm7bCOldY7FNRvBM57DU35R96BDhpEA%2FcBO8FcSVisHwjki0nFSp2xX4mUJ9D3BSsSB71erT7d6Q4%2BV3B8jOJ4bQ4kMKaY9q%2FbsWLNSK6TzD1awmHTt6GBXipKfuEuvNUqBST6m9xHcSYYntzyOiqgUmoL6yNs%2F1ATJPvgDGRVbiiwRZEdEWppW%2FNrorllOaj0Q5nMzVZXSE5DQp15evsEiCT4SrNw9pNsNvsXod6i0nsPUDy1G4%2BMxzJ2d4d5oHGgUn19x4M3ewCK7DBqFGtNU4LOto8IsR78oNqpxupVYGIlQnmFEyBvMi9shfCS%2B6AW8m4jGsQbn%2FxyQHmMx3J1DJCPlmAZ0lSKgn2qxi6YJybS5h7uRzZ42RvFQYbDZZFOGz8ALQuoIfb%2FBM2CNbjEViIXkGWPO3u%2BGsL%2B%2FImL%2BTwEOPV5hFlzM1yMrylqXmANJMG0bV2MCO8G2cUG3knJldQg5xWSENpIzf283MbJBcXqAUpceHGPxv59jjrQ13bcXAD6ho2X7BdKNSR670ELyaqexjuWPGlTtzUTrY%2FC%2FlN9E8QancyJ3WuSL%2BPY4MLWvzdEGOqUBAbeo26838X%2FMQ7mS1L0f3Dn39HLW6ditKd0T536RRF4dJH%2BWCSvqzJCoM1eYlDBugs7IpIHsVLTziAn1U8%2FbG24qYBqvFxNv6v0XFfKHnPrQJ8oPKkWSPAK857eJJDYJp8J%2Bez%2FsN5uxN%2F3Tr%2FpAIxNEiTsPl%2Fxn0jXov9%2BNV2eqY%2FIndhO2bzwgAm4fncmUJdUan6qloZZAkeH54xAoatxdMbxb&X-Amz-Signature=c4b5b5fd171dad2a123d76dfae2738fa99106742012dfd5d92b3cef67acc4843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
