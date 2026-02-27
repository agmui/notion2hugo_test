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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPZMT3G%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGaDDuI6pvasbUP5UUPnBzENgiwrhxC62mMn%2FxSTZyQEAiEA%2F0Pb9ZHe5O375UtRLUxPFU1K%2FIxuN9W3aNYR9vzLRwwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEeRMI2PWYowxjVNYSrcAztRAdqQOVxGmf9ppIal%2B2hTKSMzn4uJRAHHF0acgfdqfNLug3SN9Rd%2BftGUi5k9xovf4nD8kilA5Am0j06XpuS7wSo7aRMDfHqcreXYJFzeXus%2FduRzI473KTQTFrzdZeq1PC%2Br2aL0ImBj26BxMutsvKxPrKSn71taENVTPcNNiR5bjFKx0Gc09wBY4xd8GtiGtom%2FD5J9nLdiFnuIF4v3Gcmfei50cBraNArp0ybl4hrYzpYYhm2q4AJwuMFKdEmfdsUThYEGVMPn%2B4Ilj%2BOvnCEcy2msuiYPm1%2FUtmSVMijecyCPkY9yc%2BG2OQpa4M0%2Bqq3Gw0wIQiG%2F4IFu%2BruAC0X8Gd4yTSrSGDBK4aqkI%2Bui7HA1wn7FYQWQJ%2BR9qmSE6k1mrvYWpZIlDolvWzrqj%2B99pnadBDlO7zckGA%2Bq38r91u2Sq32sf54pOiJYEiJ%2F8VZAsSSooFniZS1xJ03%2FLic9vNJOn%2FsGgdvvTIsX8w1sIUdAlk3HGKrD2xhNfYl%2BrG2h7tsOba5Myg8FAO%2BmZkuQ5uzkUa0Bnmt%2BbqdZXyQmp7HoV1LZJeo1YXUczSfnkKrGqfSLQe70HGgDf1zA2kUv1saFD6I68Ktzoz90Pm5o0OtDxmivIbbHMOHag80GOqUB32nJK1f0hZBTzX10LlOIijXzwufUdv%2FcdEG7VDBQ3ncjk70HniDOnxfq%2B2N0qd06LgidyXAoddb%2FQGUO5yUwggKbtpJReUESh%2BwwfFMzgX90WXX%2BD9%2BWlvg5BnoBVXgf6%2BLXjy8ENc%2FkfyCHvFBKTEmrQW%2FCbLedxq%2F1IVI4%2FKVAiH%2F748D92tFt8DySSV6zpotsLQL1WVwHkUUUhcev4GADKHXG&X-Amz-Signature=0f86b5d4bebd87b17a6a21f8489b007f41c076101af6e31aa94e42a41d267419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
