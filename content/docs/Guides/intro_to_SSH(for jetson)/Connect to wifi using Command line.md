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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QZJ4U5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDEmKSeNmFN69JsJN2yADHaorNbSXvjsuWVtCphVu521wIhAL5tJlypzI27YNxtDpIF6Zjj%2F3G%2B%2BQIlFkApBM18%2B2S%2BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaIPiZC5vezhwkaJwq3AMWLS6z9oL7cRfbGdg%2BvRBNm%2FkKSRpoDOUdh7GCaSguQbqYq2rAeD2yx4RUHtCpzzr3hsDlA0BJcHQ4Yu%2BPKOWjdLvQMJjuHwO2wa9TXUmqaJ1hDhr5cDfjQBEVB62tGMMsdE%2BiYJHl6VTmpJjmT%2FiyHrZjo3pWhLhoS2jBs7%2F1XdPeHGK1ojgWWq8EJGxIEl8alXWsbkr59T5STYA00HX4ge%2F7mg6s7lEG%2Fl15geeu%2FgV838tdGw%2B4Iw5a%2FHrZHF%2BUyGsPmu9aCfuRHYnWMGf9G1SgHioWPbTie2NO9zjpojA3X6zgpRJRRFV%2FX0EaPJBgfCOcPef6VDQqHBIGhh2rT0r%2FdHSnSZDzXmKjlnqIBVO6kDRATAd6mxKu3Y3rhoPafGnsIVYz4wpZIZA%2FZYS5fsNDxE3tAeH8FOUm2JUsQcRRdUy8fmLlDQYv7CIRCnq8OXisWKUzHRso4bnODC4wLPJtHXPVqamab05wMM9DVHftQB7DZ8T1Oho2WzSW0p0M8wDHeCmnuFrCDGFh8TTJedLlRzeJN5wrAaBG2s58BuhPBLoQG04IoN3wNUN3fe6zb5%2BaxJe4m%2FdSyY4nn9SIuwI3sIHPbQQPFdHyg4rFt19lIZeBoVCA8PdpPjDC7O7MBjqkAbH0dw1cjbRnCTim2rVeT9bLppDaCWkC1bhoRD5XANIkaPniBEwe3aSDS%2BJtqBR700lGj7kM6%2Fo3o%2BWlC4gc8VIkk9uzzowamquNm6ul9fpI3Wkr92DksefOkv6bL7wbivxlM7a%2BTDz8zd%2B36tD6QC1CCwJJVkaJ%2Bj6ab11AdDTwz2OJ1VerxGl9hzFH6sFLB88Aw4MIPXh2jeh0TlCiA7h5MRce&X-Amz-Signature=cd073d3d92420cb4381f718315a39f039d64416c34bd93fa961ccf001adf32b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
