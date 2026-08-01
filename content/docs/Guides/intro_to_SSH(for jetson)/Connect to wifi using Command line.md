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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E67JTLX%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjo8koLeXGNvNPCz421OyT0r5ZHLMhdPQR3DvBzovYFAiEAolItAXo9ACB6aIfHKWxnCNCElqCMFD1RQyX6BPYGUZoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0XU6YXZepZJJ901ircA5N8QKgh4UGnAXncejnyjDEbCAzcPrZ7nQdpq2BlknGGNQrfGhwum%2BCh4xRHY4jve4PyY3p8WrtfhBPqc878C75uRyIiGi68aVd6o4CYDhoFfse%2F3%2BCAMnfg7jeFEMZKBztvrXR1YloOvLFk7XIgFeq4TUvMQQyaYge9kvNKhNVb8As750WyVwOEv6jDPRcVr2wT4yaMxQ7rVbAmBg9DlILk%2BqMtiVPmnzhyyBlYhF%2BLr6x%2Bdwmr8QaxnRhzkBUXcG6S%2FkHg9JR4eLlSkM3dz8JRfqGO3epREC3sIczlrFLZlQPGFPESBWby5%2BCMyd9F41KuZT041p8r00xqQvwTVYO0nLwqUp94Nudn7dzvL9y8Ivs4y12%2BOcc58MN81lT02szEUf4pOqm0tRDft9dwo3BttpWQ2HYDatgZTa15koTLsCZryxoDLpLf4yTb%2BIo4JrnXq332DTsDFdw20OF0WOMQK7%2BenfpkWbsz%2BMwrkAhpILAKa4rDSXmVmWlREhFDBHQaziP5rsI0N4x4UicWdNwUoc8O%2FoS4irAtlmV6Ur3OUTTGIKByIgHYQ2mTUBM4x%2BZHVCS2SkIVIrnFM%2BD5O%2B472RDi1R8tBQ%2FuXUZ9U3og0LdBjNro3zu0NjSQMLq5tdMGOqUBl%2BunXbskof2Z5Sk8gaP8qar79v0fQtKTcGZEdTu73rORXNcu6soZIZyRY7UZVwIB6pX1mEMH%2BgagSV0Ie%2BHRKANLEEm1KsalB%2FotHePk4XbO0JMch2MuXRTAT2%2BXRdj6GiMLrlTMdx9oswYSVR26woh6hDG1CS5sVcMHcSwWtXMLuHHtkX1PQlSH8ThQoBXbuWx6pvIBrbhglMKtAwUDEFY4KgWW&X-Amz-Signature=5200c7386f498541928b4aaef0574925af3b000e303d33ba684d79a709630692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
