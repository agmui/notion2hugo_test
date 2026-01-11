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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMZGFFZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICKndy1SZqlOkHj5fg8CLwv2p3yI%2FMLFEmgqgulIB6sIAiEAyDTPn%2Bz0lVZ1BKZxLGQG%2FsfBsQHx6wwK8q3RSAqlYKgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJaMto9QoJmPwCn7yrcA6PlyNvncsBcgs%2BAoSbNEVWyqGM6Rj7AKPwCx7og0%2BWy42Flm7N%2F2qGW3RXnSFn%2BgNKjaFzAJcEUV32dJ6Vfg6yzpy0fAwJMmzA6QQ1iHjOXRYyQeoPLkdVt7NZoWn4kkOhNBiSxNdB9fXgxFZP%2F5dCM%2FVgBOP8KMoEO5ILT9fxdXY4sVOvFj71JSVY72lxl9c5kFB3HkWg1yegNGC5sIQS10oplsWhhsbT%2BLilQel3iXRnrdNAEXeN43EFOwd%2FTjSGugToj39Q5VxVYW1PzmFXkgSEa5B9BK2Y%2B1zHTqMEnIEkYnUgDndnT57Qa97eJ8hgqrpnK2HNfh5%2F0ZW0o9SAD1S%2FlcG3mYHXpJH0xyY%2FiHcJrUSPBfjsjWa1MxzX%2Bbz8wrsuHBvZcuuh%2BfQeatqT72emnZQ3Pyo%2BS6qeMmBCvRgqfpmVRboCmUMoFx3S7KgB6WcMm5e3OMmoxSDlpO8rtgD2GNeY4PdbRFM93X7Vb48KJa%2F47Jjm9dSy29p3F%2FUUmETnmExqzWDg1OgHHU9upxVznWTSzh9OHyzPs4gzdubiafPmOEGlt6wrqv6kVrKeg33WZbCJpdnY2crrHxvEtHdJFEItScUYkupdd4AuiUPJT6Hy9GC6zJuJrMIH6i8sGOqUB7yLEWCMKQw4Rtxwh0yb1uGsIQMjD4a0UVZcc1yXZGn47kb4uJZX78YVadHLbHbUJnlrqe3rdGROtdve9lIl2eSU0bzvWaFdn45JOVIikGJkiwAmgjzOB36EZxFGsp0NATOq7cx9NuZ%2BH3JbO3FS1BcQQzq3OvcyozdibFYt1el6IDYuYmlpHL4Lv%2Bort9yfrNknas3u97Vk4MDB8j5gao8H7fhSb&X-Amz-Signature=ce00bd88b52f2d00273e3706f237865db07e377d070d5fd764a40035db42087a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
