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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723XZ4Y4%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFjleo1bdraDv340xvJcdnftm0uVx%2BR54Qr9Z%2B9rrwq%2FAiBqYQhYMgX9tosrz18T5%2F2RoiNt0WGurYJkc%2Beac%2FF0TCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMwFdB9qSQ1tIlp95pKtwDxucuFoaskyAv%2BVJamIkpqqZGdyrBiz561iVCrnHELXgCNOK45ropyhOlDRwxcB0uIR9MwXxqw4hmc9Wr2imib8tuGEN5xXIIOWPheTlRHsyfIo%2BqywKPiRLSgNr50aXZ0b5AqSR%2Ffek3EdAKvtcbNLtPEuNV7jblIHlo%2B3r71GROeoWNc6gSNFE6kz5CazJ9ZvyZdsFDvXwSBHQwf0xOxZe92TunWi58cZgcPmgknoR2xbecHuBKeo7NbJs%2F5ngpP0ba5nYtmjWUQ7Bgv2mVj%2BCFTGCWdg2RcGWljYoWIADDStGp%2BqCkTNLXt7H%2Fnvf9nhk97X%2B1o7yU4bcIOSnZeSuXGz7eo4u5Q3ECd1RwkhCmA1D64slm1EG7M578X2MNNbZ1qzyVNQ5%2FP4fNTmiHxaymRt0LXk2jkQugf2mq4bw0u8vVehsad8LrWfKwzC72wXUqcZyv433SWkbyWBNgRh2kU9bQZU5payfsH5SHN9TSF%2FmwF2u0HDK8bTmW4BqBBoFW3SHE9nASGhtn0eo0KctawRXil1YuQrrj7OEUj6KUB7yw865vEpUXJ2VagXtlLU40HTUt5zr1LpcvLRskuW45NrtwN7h1C9ZZxUrCcAOC%2FbsqdnLTt4T%2FFEgwvafVzwY6pgEn05Ad4D5jbNpey0%2FqGR2CfaCn6jESc8munDX5v8v%2B1G0ht%2B0ykOJWg4TNI8N2WCi3%2BNeb8lcqbeFDwaSP164Rma7L4teoEb8V3QxqUz8cE5grfdKLxAN38JbaFqB10POyZXCJAt3ML6Cx6ILKiufwaXkEtX6RMHFkrflaBhkNwqq4XPpILBrVslqnO6yOe8weido%2BC6Xv9QxMNhkgncJQFldj0iRI&X-Amz-Signature=dc14360ca34b113a95ff228f79d60644c0359e8308d39183da6728ac6e1bfa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
