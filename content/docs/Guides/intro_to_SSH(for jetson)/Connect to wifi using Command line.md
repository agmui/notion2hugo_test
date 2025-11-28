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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IO46PV6%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMyp3KKMBky33Qvr%2FKiqMwf6%2BqQ0YJaJNdJB9LIUQsnAiA2Zglv%2BVkyqfIAF%2BKknbuYSFpq3s5yMbv1YB8dH%2FXl3iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6mIsr2BbDHrK8f2oKtwDOZA4u%2FSzfd2FU%2BBjPDuEOBK1H%2BWlp%2BCZTrDGc98wQFOlannhbkAjWpIsYkum%2FVPKL%2F9BPYdYgWaKrED1aaNNBDLNAfLiG4rAaq19GPxi02DtoBFtzEzrn9IhM8KFYZUWId16OUO5OxLUMeSVQF6vgU5LNGEPLutt0ympEKGAWk74ELRmimShOoPLRzBc9KQ%2FwlrNgSmYPMXrPGshddYxHjfZwTcBUn6LcbeYgeb%2BDqSLcufW3V6CN3ujG7QlwD0D0%2Bt4svO7Hesj3Ee4xd7KiwS76CCtTIE%2BXmQspkNvgyTIkhi4BuPFbhrUNU1fHDDepTpSL4%2FxwnjFGlrgf2LYuU4ZeTSOOSap0LWLMdVuNKaWiERzSZ82d%2BmfNTqoqm8SkcRFJSwvpxlu%2FLJFzWZHZZbRTOEFyLEtrqMdn5kKTnz5avwL3TvsFW6oxe62FQXc%2BI9OAQ6H7zPGABpYSUyr1yU49lirP%2FEh8%2BDGSfpg6ifiaAD3ruoWsFJAQRC4iNPlqFLop2vohfcTCSxEPIMFziUdbXg8nC2sOFRyNmLgaBueWASTb3CLYPNXf1sT7sDVHwh85PVzFyr9G0QcLCCLBLiV1saPORh6nYD3YpMlouZFjKReOYd62Nfvr6wwtNuiyQY6pgH%2BD86HRJo3mZ77iIhgbciW95BjxB5sY4tOXkxsRnzOs1mCm138Z%2BzO8Alao6xH24InyWd%2BufqO8%2Fa71MoswPfr7gaGVD%2B2youJa4Y0JDP6UZbzCVvT%2Bh1txVaYG%2BYAGUZ82UP16bnAECL1efl%2FXsHT3TpUJsMdfqgXuLlFamgpsSetnH0eo2ch9Al9uqLdhlCUTMIA1vXxq%2BjIQIyD5g2QmV5F8YIG&X-Amz-Signature=dff3c2472f725256967e4636237091146af18a9da3bd20b5716c67918586421b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
