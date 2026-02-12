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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADMKYV2%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCWUnYddADme2sN8crAG3t%2Bb5vdpIuUDwVpwHHVKsevdAIgduRsNSaV9RcmEJe2a76GjfyMtqN3gd370lC8mEjGyxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7FxSuMQgO4rG4q8ircA7niG8mQYv0xmlZ2aaGBykIvvs6ucSwq4xnBNraC1y36QCCa3CWggcj7Uh0E8ljDgEcrPeCw0E8H0TTjlb%2Fs1tJXxHuCR7NhSfAToWJiRVu%2F49Lo7wKOgbH%2BWmaHyzItBeYlK7mRBRXNdubTZQsiLsVM%2FOgnsSF5UQrpr1lLb1TTgrCIzKrlvs67dPXoE8uxW4SXJwqM2Xab%2FZ53usqfXKGrbevnhq%2FVpE%2BEyQMufPv00hfalKCzPmKb5P%2FtLCWD%2BF%2FL11It%2B5rOew1OTEAEvvxX91VoqXpxJXmIt0lTSZgDPpPVIIgQh%2F9uMayxqi2N9dqE8fVX1HCEro9Mw3oEE%2FjQga7JJ%2B%2BJmEWUMMc0eHtc4MyvewDZHJZP7E2lWCBWFllZ2VlWks%2B7ISe3td%2BEXg7P%2FQ0A%2BFRtlT3niEDbPvA9DDFHo1%2FNnR9dHqhKtfjYKgh3eETdPVcMfmJJqAKmSHuK2ucxb9KhwXAUpH1ZTDxDZTGwQnrHYgRW4DCuigwPPeTOp7kC3NbBfyp5wtM5gzdj8O%2FaSyukrFmzqRQTNc9ehos5j4RWE1S4QEvGVVH59Ejie7Z4OTwdCeFjHaRvirI%2BnCIGPNfMB1A6x8C7FPTLNiGr6G68CrrwthbGMOzUtMwGOqUBdt3IOAp4uS866g2Eb8W0E3cmsZmjs23NNgZt354xpiNDUS%2B1W%2BksAAjSud9S7cPsUtSBVMeU1mgQNDl6Qc8gJSFI%2BAMaNbhj%2BTYkM0dczeZ4dxSmb6miWcavUrMxkIGBLy7XF8AjQMVv9x99RpJMwDzGhtrU7G8qAoKA5Birv4UkHbqfm4npH%2Bliyk%2BzAnyrDDH5AErTNYWBp6GfhBUaWvFJNLua&X-Amz-Signature=7e2fdfddc58541739b442e0db193b04dcd7958df726ab1c131570447bc293e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
