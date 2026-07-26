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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHN3PK3%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAiRPl6EGvAUlqSHITzmhfRJ61h5KdeaP1QxqxzVGA2TAiEAvk1AoEVSfdj%2B3DdRg%2BhX%2FHZteZhieUAiDOglVdNpkJ8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNmmlL8WWsF3%2Fkg0LCrcAyZMLJsVdyCMjR6jc%2BDln85OFUXYYZIvzsBI0Aw%2BBg1oj49ow6DKkZmXK42xXzhskJ6jTVByMB6cOlpyeZ6TwIfKmh4TmzW36jmYYFibquAUCQzeBgsfp9fP3Cf8gfiMKb%2Bd9X58ip6GDy80z4ehCwt5PC87SgfA0y3iUBsFPi1W5KRQjlq%2FPtWUBMbaJ707w6wT1D%2BBPeSBBaU%2FYEibCeSCrv327Ivb9uqOac6YHob4Yz56HA%2FmTiqlEiG4ryDDTlhb87FNuT1Cl%2FwCDZKYSJc1SRqbUe6w3n0UNOkCDog6WKkh%2FRxiKymZ0JUK61quPFA9XVkrDqT6mfDS7e9XWPbaG%2BwfntL5v7OGvEdSQFiwOVipAhoY3nc1wqKqHIIGdtQO5L%2FLgH5exs0mroNJPOrdWNgfH4GVue5w7UoTAXVB4kad0K6uo%2FE%2FEfwczxsENq4lwYxhVv4zQ4zBNae55LgD7WK6YxTZTI%2BwzMlmnXil5b%2BuJYOMUfEDEOVuQfOxuBlhqwZ%2BV%2Bz2yxfn%2BYvRAtm%2FEIjrqv680zfRjf9mgItYWE0IsGUXj42HPkTYmypSZ4H5Yu2RAlHlsb0xtrauPW9H2yajU9l1V6X9RrflNXbJ%2BpgStSGtQQBQ%2Ff5mMLLpldMGOqUB%2F01DpMnI8XePHdeH3RDW4mTxE9gAKnBaBzvxpKhH%2FRZkNRBKtHdZJ%2BgUr6FH5n3t%2Bnt9Tzd%2FSDY%2BUiNMjtIRKST7tjtBWPwTr7vWERX%2BpRVPfJH1arCkTZSCFUq0%2BqmZ5wxPDIMkp6QuZa6hm4O2l1pDkQyuUAZ6MV499%2FUkSQH3cG%2FtJVIuCnHnzBS%2BAdqzqiE03mJksKgD4tG0TQySgeKGc43t&X-Amz-Signature=a785e20f8a9fb9a4ec82b200bbd28b8efda83da13e6ce6883b005b3963cba9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
