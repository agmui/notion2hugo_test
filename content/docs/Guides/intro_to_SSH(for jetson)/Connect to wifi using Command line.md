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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POIC7GU%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCZP5MeG%2FOjIM0262enai7kBMpZKkYJv%2FmpyMJvCr24QIhAN6gDdo0CbZJJIg%2F1jF2vZ1sNllG38RFCDsbZcLes%2BO7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyhhlbE0Ufd9SVRTgoq3AO4h9cz%2FDNBrIar%2FhnECwFEjFS8%2BzPNMGrJGgcaRDfBrXd4DZbAP%2Bvvv7ysSgF9ujPEMY7k0ycNEFC9pSuwznYyiI4C24wSBhGqY%2B2O6MiheHFwh7PbswqwXbp%2BoQmg7KpLe8B0WsMgwrF%2FMvL6I2cB1%2BgBN0uftyBHK2kXsMxcR6IACicdjU6nWd8me9rm7cILzGKqdreN8t1lk9gOgquot1TZUcIeyqq%2FwbcA3FjYCwf8r%2F47FzP4pp%2FA2u%2BBmQYnV%2Fmjfh0xPaC7w%2BvPDcYj8kkV2TRlSLEAxGb6ml%2BBwpF6wa8AUrlIVuGxUnQ5GDqpb6RXcynbeLKdVAS9uqQEW%2BFoGb12bj%2FCyYMYNReK0olw6zzv%2ForDCpKLTnXxWcB%2BLhGxqXPt4VpFFVSSMwIIiCr40zrQi8%2FJHy13XW1fhAKbPIGWbZitIJylBAJfkrCwnBzgrVOEjXeb5rBA5CFZv8fxSNHdp0I9eKgM%2FgMLXRuWynTdOPWMrryOHhRfE4y%2FnkEl9mF59PMaT1bIF31DojeNZovd9SVVM6HhxtRQ%2Fr2%2FG1PP5zssU%2BPfqYbWgE94LawO39%2BLeBF7FkSHq7w%2FRXGGwgTN7DzccoHxec43UaJHr9CKDFc6va4yHzCZitnFBjqkAeLhHHzd4kpzC6vGoIOz1ne%2B95m%2B0B%2FtD5loiCrPxDhtplXP7uZ8HhDrmSApkEPE%2FqODlh0eBNUh0UMvFBI5qdpf163eyE4WWDTbY%2BHH2pueNp34sV13zfc5kSEmBlyHySQki7DlUXSNH6DfN9ZvRlkTHLQqoW%2Fh8zaiaVNEKlqJRF0k4GN7kyz6eAAFGEmb7oFx1r0cnzOxiDvtmmnLbZi36ehZ&X-Amz-Signature=9795189dd74f491b5b97c5b0b3325a408a8afc739fbc92f4e9d740122da28ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
