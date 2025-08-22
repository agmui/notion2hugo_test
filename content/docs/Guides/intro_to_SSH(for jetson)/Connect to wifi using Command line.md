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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP5D2BTF%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy9RomcCEp2c%2F9qnjByy5Uaw70Q7SGRN24DGniafiCcAiA1AD2bGDrIRE5fPftrwa%2Bq1inIihDCHlDIkZwGF02yUiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJyQ5p8I2HScJYD4bKtwDPimWa6Xs4IAdYxTSJrEBvU%2BmTVAfGrP0vqyGBjf8pv1OTJtEHck%2BU1avM2%2BwK0CjPVh8AXh5wOLLfRcAD9mDFlNgvfocRf9c5UR7Gqiq0N31VAYZeY18MvcWM3XMJxW9icRkzuHGdjSfWMclYDsAeqxeepFgevY4JYUXVX%2FLZPEM2kKdqd9p1DzD9oRZ9Eklof9EiCSGtYNh1DAXpuaResFKX2GuXZ6U30PIJADMW81K7qm2Mg1reKXDkXPz6LV%2Fi6Uq0GBJxXcYN%2BgrPjV1ASz2H7C88UJfosj9JfkDOo4U6ihH0oW%2BgaJhMX6sbgUzfd3BFp9ZqGbSWZCwDjz3SFfiLr%2BOMXDrecKJY%2F9ea2qsTXdLfhfjhX16zdcrgQOULyqfHkwJXcGwSxTDaJJpYP5wcjLcnUuAT9bYbtJvsU8niU4c9mrR4PFkiE8kAt6%2ByAJZaqQN5hcZT2F3kmyUtlfZJ8eXe%2BHDXeA82w2X1LXkugcBsdy0WeU%2B7BRSe1%2FSiZtiBXdkFI3uiNJIiUAAfw3SjJnj%2B4CIroGLktGSm8BvsrmghOfNjRqUdBYZCnQnktnbpMod4hfO2q5uCCiGJuEB%2B%2Bt%2BXNpkUBlCYSISP3tEkKTVBtTz98%2B183gwhfOexQY6pgGPaUXBQcFZeKPKLSvLd4aNNn63UE54nsij2pFn69f4zAP2FsNzwHEhOxsZr6kWAe9OEKN3Hj6Ij0n8qm48oc8uzKK9kZKUVuaVbK4k0dH070h%2B%2FhwSOFFqqZgMnEhWItgaXPKjjuvofzxIRbqvcf5gSV1knNwEtuaUgMOw%2BHvx2ci%2BI18kIp3YBRNo4jqzXSCa80ZGWpyEfCm411HtFS5M81MUXQWZ&X-Amz-Signature=c99e6bd3b19501ae3497e9f7fd939f5db663abfb3e3ae992bbdf12ba29f161b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
