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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS56IIE5%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA83ipt1ThtEoRB9uUH589QLIr1oLqDWO4zhvRv0TEheAiB8jA6tBz3gKDuCiZiyQmEB9msq77Ct%2F06jbVsKZ5Mf7iqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtnGW3q13%2BX%2FzRNaAKtwDafPCHz2%2Bmg%2B964%2F9goHS9SFmycqIA1wmR53gqqpOPJr%2Fh6VWfIBjPuwgPSSyMWRm1plFMOGczrrsCFYmJe4DDI9F%2B4uL%2BfUoQ0jq1GiUhgYdAAnZT15Xu6bpMz71gr23YJTG9AAxjkXpiGrxhKI%2F73HGVR58ImOsbDY9oRCY8gmvl2Ox7h80rhtJObUomCD8M39yRJp7xrlkCJSuBiCpErJxn%2FYzt3N25aRDni6U1mM3ItVNp0aMn1gXZIkdx3vuP2r0k2bsa7nAQKpByocMLusrGXTUudBIbpC49P3vtLh8bklegTvxOGwlhqVZPvTj%2Bl1aS4haE0InECYDlsdA6I4OChYvYAiF9HyM471%2Fls9H%2BvO7NFgQUI39mU9xXEaiv059uAzy7SctEuiJk3Yxw487qEDdMs7GZphYWP5vE8cUmUJq3vc3dqPZA8aeJ%2BPtq3PqElNyv5gls2LlZmJ1eCJnNwqxzlbRIqt3yS78LvFa%2BKwQYpf7V%2FGn0J%2BKrItCkvk5EyJWcVReEsD9Sb0wnUH36ai0X3pFM%2BStTgM7uVOlkUTOn%2FixCP%2Fvj1lmGpRSFzp9thVRHq7BKX5c7%2BNKCng2mWeJLhZg7vagswmwhVoTvcBNumzrEyZMq6Qw5IWp1AY6pgHShhk4dbqP9Sk3Alt4z%2FrzzTIvdcSTA1jylhEJTUdApFLLUXvAaFbone4GL3MZA8fXQgi0olOJW%2Fa3w0DR9UAcNtYIwhXfx4ViygxpmC%2FDumRlpIOlMPVtKDoTeaqaUp9eB1XHA29qOW6U%2FUVxspS4hXFaqDkt90QQgDGFKZk5355Ip1H78p0TbllrdFKSmYmjbd1zxRmB%2F3GKubQKdgRfnzhh2a8Y&X-Amz-Signature=8e2864c549e169f77c6ace7109dc1f4a5c568bba72157b7538de56a48bc1cc92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
