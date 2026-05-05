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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYFPA7I%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ1NHTEOZeeJj7caNO4xs7tp6cXi6MqPuU%2Fn3r2i9bHAiBi84ryE2uB5NCGqukFPROjxa0Bl7qlGLQ83D686wfwHSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMBAuhTBn1HhnhTCPjKtwDi2%2FDvcCcUFGcU9TScjOLpUWVB0jpW1EzuXnQbkbSApupevkVhM97%2B7Ak3wHwTVo3Gs3QeW%2F42IlLAJOB2mxoDlsSG27CD7adOKzmQDCPu8K8gA7f8iAjDvrRjtmybvAfOb%2Bks06DJEkdWHkk9T2HKPiVVwSSfZuCExE4hc%2FVtPIxpwOXjWeP5AW6NYkj%2FOWQTa2neSgrmGuCVC50S%2BYyaJfQ8i9lrpxsIsLJu9xfZKWaDFQ3NiLAGCPTJwx%2B4wjNdrP2EdkNiw2fZudLH3%2F29DKp6LTs4jqQ62zFk1%2BKFyC6ejGNkWZ6%2FpG0Q8btiLExIugHl%2BX987sX%2Fml4Bp8pTkMql15UYii1b%2BoYVC%2BlyxF8T9na4G%2BkxSGpTVXfrYifzJXo1WjK8U1X7Y%2B7xchGG%2BF1EyGhfyTxXk6qis6UT%2BbiC3LjRkUxtr3Tx4LPnPJ%2BzarXEUGONrGNVphTMm75Q%2BgJBTdqFgyDtKgm3Q55IZ9sPQCMzoA6e6sUqIUeQw%2BicKfeWBzKLGE%2FuuwtJwIhmUt7ld7zp1FdiUexyLBvoo11y0NRf%2BilE155yvhjts7Zma4vQbX8x1RRv8WHn%2Bno5%2B1%2ByP2nZwW7dpEB0nXb08z%2Fu%2FeJWCUILqY9RDcw56XlzwY6pgEoX2EacZiCvEOryLD9%2BZCEIbdzVNVyFK0UXZ21pjdNxCTfqd1mxVZhB09L9ibPZ1YqMapBOeM%2BkDjW1j55DyrBpGup%2Bt2tYG6hVemPfy1GwyxvvZpvxNJsNxdUKv3A7Uba6wBn4ZzPZYGBmKttX4jOsBKMhTtaOv5tguZKOw6rxfFqqykfnw7axeHDcbVG9UeueNAjbXW%2Bymm8RYIZgYK6WVM4eiHh&X-Amz-Signature=f54a82060a0e00ab293de21c6fc285cf6f67878e63f601de19abe1c39a482254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
