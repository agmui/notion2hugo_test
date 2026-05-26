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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGD6ZHNS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS96eH9RterlXnXGcDNGRSx4geIPHghciT4ocKt46KEAiA%2FkYWHpgviYB9ASOFU4uzj2tfN8Myl6pPSDosvUhGP7ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMh1gDaKZ7lpFvFSYeKtwDgpy2UOD27R82PYexPy651c5BwrlBFtjjrz8Aq97sk8lxklg7PoPNVJZ5U1cEmGs3TqxRAcdulYyP%2BUbDjp6zbZ1F1guSTThi%2BP%2FZSbRcEJYRofQjA0FfKXgjZtrxk257XVKaFWYYOLrsJmB2edDNfX1%2B540Zn90ipi635Uivp%2BIATZkyC8DxfEy9dh5GtIqE%2BN67tcOiZO2OD%2BUzJ7m961vf3zSxQWa8mWvOH8B5W0GDeL751JRw2XIC8MIJ1zFqyvMeIh1MrI5gXhcaRyEDKzgdj0MLLIN9jVumFIBJBOA552SU%2B88rjZ3DDvCaa83NcUh3Z5dfKAQmhdXQT8moMB6XUkhEI7wPVSXDuhg86ErNdJ1uSFX6qGNleLL9gXP1SEdg9vOoNFfUPEZBQi7b%2Faulaw1N%2BwBhtLEH%2Bg7zZfzSCzCFdL6JSirCU00OkClPiY6LTjuexGHlGRxuCbsVtKx1ZSPjLvYU14WHT0Ct29t4q0MZK9QF1E07%2BopTeZDrXtKhtu2OcTs1t0XHeoWZIna9gKq4J94aUsun0OYRgwKPn6u5HLulav5%2FiB4rdEtehsm%2BhtB50IVCTdoHyg256MwsO1ly5G0A%2BtCYDQmHWFToTAtknCOR4IDiuD8wkPjT0AY6pgEcxRuy675nkCXcG2kR%2FIoe%2FrS6Ssqcl1u9ejX4UICX%2FDcNuvXii0mgD0BZNEEB%2FOHp03zkG%2Bddtq8Dkqw3Gw1BnSHPboQKFpaddf7qg3rK7zzYPYMaYwqmfR2z4DoXBHCdXMdWhn%2FByIDKs%2FzbiOpXyg0jofQN16QR9AKjD%2BYpZPKWrdveV1kl4beNNSnmYTDgnajEB1B%2B2CMHLMgAVoleoKTaMzA6&X-Amz-Signature=19aa499ee79cb439919e5bf647423adcb72f8ca43184d3beb10c2d0791e9fac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
