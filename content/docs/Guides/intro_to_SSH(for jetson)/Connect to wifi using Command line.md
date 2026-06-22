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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWIELQ7%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC8NWi51HHHL1UBz6qGiHI92dVcRS3V1aLEDJuJW63VaAiEAtezvd0Dnu8ysDN%2BpU2tSdjSHKVBihkvhj33cwSITgbcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUUFVz7R%2FBnv4kJOCrcA2owH9ELUq3oXLheDcqAhVmFYiqpA3Rl9WLZQf3kaq8WDR6P6zWk43OuOrDqcjX4sdDH%2ByzLxKkVMVdunS9SYtUAA01frXKsa4nZOaoB%2BKkHA57%2FVZ7VNZB0hEhPfo%2BhydwS%2BxUS5SxOxxoDzARxuqiOlE5nEQYPMB%2B8agsDlwPIjPMON1uhF32%2FQUfZoxWvV55unCQ3yVHyHP%2BBCgV60IpEnqOxXvku%2FPwAdoy9G0Cz2pzUILBFHWLJa7s%2BT2s4TEgCCT3TL3VBnP1A1Ba12pQS%2FwJ%2BaQJElktWFv70E9tIvk5WHjOA2jIKlrRuxltUZBaKRvbPtG57d8OxwIZV7y3mcoYNL3JLU1rhV%2F0rSZUCybk6%2FjKX4oL2zgOhtIFkVgMw4lVJRqKCZh%2FXShDxjzLtMrUTbrpY%2B0J8ENnpKgMOyNgZlkCnm1nrYxSLBHYcxXxNm7sNpqOMt7ifMLsAgHeZ4pqWH2%2FUyiYtksIjuBp7wAIGM%2FowIYmeGaZJQJ2ZGEECSNQ6b%2BdWJAVm3j%2B7FtUXhtyupXKWiTW1a0YnZo%2FRWXgActXxh6wmQyniRtc07%2FAVsqck1FiB2lm2wPsCik61d6fbXcTYR1tuxtVtqHPX%2B6qloPavAUFUNWz9MMbY4tEGOqUBhI8aEnr0Y0p3rGYIl2UXP9zy2QVeujWN05Hz9RWCD0h4J2VLCCfaht%2BXRSTSeUnWUDmVa9GWqcIszxnp8NmfUk1MCl89SWE0HCrPVZkYmZhDkUjf1M2vguqW0TglNLa4Xidb43JOBWu%2BXxR8x7co2T%2F6OjInoggxGNUl0NPoGmc0UOEupor%2F%2BgUnWnPa8tVXFHjiJvESjbEzeMB1NVJjqvbKnRRI&X-Amz-Signature=f9ea7266bd74c990155e46f2e3dd19c51f31512e703431a642d3a5e7172865c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
