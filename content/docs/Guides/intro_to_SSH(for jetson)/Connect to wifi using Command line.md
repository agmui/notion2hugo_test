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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IWD35L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BeXlUT%2FjTLOPk%2BgUzYZ8TjJPYd6xeTbTUQAvquDeTgIgGHwDOS%2FoOEBgeZ4eIyjqNPrkpCEnKzinfj6kPjlOPtIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7tHVEup9IZ5O1b4ircA0G6B78eHpf%2Fw%2Bv5Dq1phWiVRtMbVr7rpx3X4LHbCYqavI%2BjXo2p9QLPmHiVL9BL8DnNnk4YvsUNcIpVgd6lb1zcBGQbjAUzD4cJ1MoPrKxJ7Kv5GSX7WM3CWBjylPJRZ%2BgzrWbK2nMhAJIcnCpwKSwuw780S0gl7U%2FmHM351PhKKwQvJFAI0h3wJDfg5JzggbcDIRIpoNNcw82YxPvW5xNX5KDIWbPCmjmThAKhNF%2Br9Vr69w397TtZiQ0dU7veYhTkjFsvzkNM%2FC%2FMRs80nMIDaOD5K4sAvfIXcH%2BEbcSih%2BYQbhQL%2FsNYK8C%2BAb3WG13NSeHtZm%2BQCGeU%2FElp%2FYejw6l0NSysRcM5%2FjYogKFVJdF4cZzfSAHvUyFMuz0yIMd9SCjD7jF0M8lNAhiD2IoSN2Sb2sOEc1xpGhLZXs3%2FnbsRw2S4prEGhajpZYDgFpz7jNcA6XvnwUajtQs4W7mXxypImaEzVet9CIaf3a0qOo9%2FzUV%2BmEnW1c7ms18fM3NRtzccmiEOPiHWbESVKM2j3S8aa5Y076GzeTfxay0TnzhfvZYMmtbsdqZ7wMstbf02XRBdU5CMq9JvtACA%2BatswGq%2Fso%2Bzm%2BAna2d5%2BII5JCvJrcjjqQbFQ9YFMPL90skGOqUBHL12U2RqLn5t6Sl2iEvhs2EliHoo9s%2B1twCfdRJuob3N5v4bMfD249%2ByLqg5ztLEWZURqVsMg3CiIB%2BcbmCqRAoySaA9JGsiNV%2B1bhCEvD9L5ndxTf2MVtn3jpZ1xvoS7VViUlruwVaGk8Y0D8ZKzR8mmtD%2Bbvgy5lkQd75NB9mlZEKuf%2BGMVF6l2VjNOxACzymgiaria7RNNDZVewFzDBb7KmU8&X-Amz-Signature=3938f9512531a3d81e0cd03dbcb0f4355d502e5d4d5d00637f0cb13160b16b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
