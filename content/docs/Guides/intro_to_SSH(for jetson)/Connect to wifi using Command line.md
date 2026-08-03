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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BAKDUP%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBUGdZHaWTC7M0zIU1Ovl%2F%2F5Ig428dRG6ClHJHAOICyIAiEAvKMzEQYnJMvKcLeHpIXWArdOf8ig558V81o3ho2djhgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3MDFExuRG%2B78d%2BOCrcAwz2xV6yeBnstx3hWLkqA7MhjvhJE5zgzPhL0g5qhJ9lkuwYzzi4fqZ7qlaFbeSaMUJP4maNVGaIWjWpmSuCCj9XCE3MzhIevPxLfOipWYtBr2y2uy%2BQFSCctPtiLzd16j6sdbulzxVOzH4WpaDP8%2FuyaYIQoraZq23OV9SYHocBb4rbbMTHXLLMof9VRT70SQ7cQVvq9BTyBt1d9Q1DGaeB5muQ%2FtTDzFU2M6sd025Js5ggwR3ecKt32dncUd1AzpWsyRJHBCEQ0v6cPfTH5H0sVlbOvvi1T6ZdVqnjPRbECinFEtvyVVaj1CBkIUE5NFE6KMnfSIlI%2FpxNTQcLISWjFuRM%2B8cslUH500E%2B%2BcCCA%2FxtR1aDkUQfr2x5yl6psagFUYzVWtGDt7GQntxpx6Gvu%2F4jNWJ46O7YBQXjo3agdQ7Ge%2Fh6ncVKYgCBRuz8TlQIqs2YsE0E7cfnrkI15zmlc4801%2F%2Ffko2zu%2BSyyriewnT4vHyY9stcQJXgG7aKE9QqycxwUWdAAD3vnCryf6SR2qcoPXi4W2EM4tvAwjycoO%2F19q6IZ1LouVDiCn%2BQWjCMPf8XAm0FTpRejE2f3CwQApPD1btQ0P%2FGWsI2GWLa9hybRJj3gAzSdvxZMOXlv9MGOqUBhmCtSNG3FbkpbNfzLJJ9tVXrCfnzhxfa7EHcaB%2BOkNrf8DTBO5TSDrWEcL1I34Qh%2BjD8se5s8GLImMWUB0lMT4UG0GWHwLnXwrHr%2F3ugrCOGlo50dIDkKHst1%2F4XYYOT4wcj6G1fxgNoc6B0NlZoieEyAlpz5YtD5gb%2BJVyqD%2FUAtE8LXCaSztOH8QUQZ%2FHTfIhoAHcw9sGmQlxLvYurbCCQ5w5m&X-Amz-Signature=4cb998e66b9473f3747cd8b5ddb4ab779144f48e235132102a531197e3bee7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
