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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUS7GTS%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaXDEqCAm8Wbo7HXGROXrLVP9T5UBea3IQa715GnA3JAiEArFlfM8pYETXcnY%2Fy85GT86%2B5ScP%2B9J2sXNA7EF3g0g0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA1UN2JSLZe8gfd3HSrcAzoA0u8hwOQFahBclMSJTduNTG7gsOOp6M3znS6JsjxX6yNau5ZoW3QgPLsHbMMnlqR1GgO1z1o9OdFAB3s4k0eOKZHcl46BSPIg1V6k%2Bjr4KpGYo%2Bi1hhhaEt9hfwHaI5fkA3IOt%2FUNXNHZF89HbwLaUM%2FvpSb%2FFpzBkqmdR0HrmB9DW2CFgzd1UeWO%2BRZuRlMImL%2BDqdUsPKqbaLiaDCl%2BJuDJizBfY02EwN3HCQFkfQ4%2BED0i6aIW9tue6yfYbM4KA8v%2BDFmdSuVRmexJnAG3YGoatFTeawhO3Iqtyh1G2Kpwx4nbmRbf8%2Bl3WNOTHYH7pKNj%2FbXNCY2X0Zksv%2FNRiwkZz8rSaZFv5pDGC6oopRC9jx27CNmR9YDIuJ9vEjj806Tni4%2F0jBnM%2BHgAl4We1rcB%2BI6RRV11GgHyNVYGUxMSLWOYRODf99aoph%2Ba7sm5Ht4uZ3NOCVJ8xt2Is1KxUFnlU5O5ZQuny5Wbu1%2BY0kmybE6v%2FUptgxiVQuAo%2B3jUmuGkHej1U7QXc0tUrv7uMK9PEDls8MSetJn9fG3vsNfJhdvxVZL9VShvwkIXt39k40N3U1%2BCOlwUaoLi4J%2FM7ZR3%2FUE6as9MRywnVPr0aRFwcp0MXFndkZ0AMJPSydQGOqUBBieEMABC5EQPTlRsk%2BXdEysMgJA0GFbjyEj%2B5XrZ0kMwcu1ATLtOrDRbP0FVPALa17LTtTI9L1elC9IZztwYwvHLTtE1KLIoEM5NTdYrmLtYkYbpf1qjCUOp3L9KA%2B1P2TRCG9635u8F%2BTU8J1s8JvQQ0%2FTot6Urm7mkWrRVEV1S7xBGNRKOdUyRsn7V2UEKJ4l%2B5%2F79NnYOoIIFkO6O0%2Be7STbn&X-Amz-Signature=3f49b05761140ed313c82118cb22e026223ecade5f6cfe7420de1a2a7085b2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
