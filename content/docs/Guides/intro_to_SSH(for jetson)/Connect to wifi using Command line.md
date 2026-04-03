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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XKX35Y%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7yoDHVtEr8Lo1GEejTF1hb41JFCbUOSO4NIRq3EtgcAIhAOj5vOf7dDqj6iXQJg8FfTdIrkgoQS%2BpmaTp0PY04HnJKv8DCHcQABoMNjM3NDIzMTgzODA1Igxjd%2BCdgmNYGNDrfakq3AND2uewiMnJ1LG8vb8WmGbYoyTvrLpMpExcL4tz7XuAAjgDeQ48%2BH%2F2K268r56npKtKnxbaJaHvyfRs6saksD2VUu4o%2FAG6BsYJh%2F7Av7DIwm%2Fka4T8%2BH4pJMDsIgn4CoD%2BXhpiOuMZ4EL5pp9agHTlyOPkAaHKDhLcu0fU202dAKdFuoft%2FuV%2BKLGuUGSqTttAqp1Pq1H1%2FmaG8pRPS3gCZGwS1h7%2BZQLcawNQ5bItDv1UbalC%2FI0O%2BOUbLO5OfuhRdu8BnIZFNnu3GfSAispPgHWK3w%2Fg%2F3m%2BPQeXhmN97GuEMWWVXtzwjqKk0Py5Gj5cnpNn2g64C4Qbx5RkaU6Azh7a7lp%2BXQPHRdQH3c%2ByCuZDJ3p0shLVkWwtd0C5E2fXlPIcOJnoLvuLrNc%2BH73roxcjOhskgfeHUoRhBd5FN%2FHBZr0UdTWv9TXY02%2FaaX8M%2Fr3wXSgdL%2Fse5rgjNzSEbB4QpUBSfK3pfbWKh1I5jcGuuT6590bRfwpSbNul99%2FydPo%2BRRrbCIFobrtvpVQa%2Flwhef7UfRRqvLzJDMCNMRbe8fLIJzlYx6lNeI4IahA90eFt434lY6waQPFoF%2B%2B7VM6AOXTf4U8RU8ukoOS%2F8ykRwnf%2FttInZfrb4jDwx7vOBjqkARsiUY7oSnoNtPJChloLUMhy6dzQJOai0oVrj6LTG7QVTC1IpQl81KpzoVbux9lBFnz5%2BJuzDfyCMD2cydsnPuM1oNRKU0WXIF73Y20u1jTrlGxuAVENgE1j8F71ZJmM4%2FKwUfOCLw%2Fcyu4bdB8HeMXXKm%2FotqdPR8bA7O96dMrogN94KYi1q%2BzvGSeu0x6l6SgIrx8GYLfe9MkP6%2BYbdmsA8edf&X-Amz-Signature=7b1999bf0778e402680f90efa009e14bc1c5b6152945a0e6a446dfdc81babbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
