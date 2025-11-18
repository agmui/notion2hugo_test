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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HW5NUBI%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4ycqZrDV0zQlxwadHWpejybqLccfGx86Uc9PZi2Je4AiB%2FHz8vRpU7gSNTEzf%2FcjVDYWgBx3A1O6v%2B48Au25GaUSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtwN0QaDa8nqMr%2BqqKtwDPtaAu67V1JGiq%2Blv6IIZznJd7fkBhtM%2FK%2FeoO0rwwx7LuFcdkcnF3AhlG1uXRjFivf9KHnokoSgMWh2HF2A9sBIQ7ewD904fn4SK7khPyneT9ari%2Bdmg1I7Jc%2Fqd7IbCzCQw477uf7psfBAjroBtK4ndlaHd7%2Ft8T26fNiHE%2BZxEg8zn7pXodDcBPE49QJXPpUm633CS7W%2B%2BYghs8Hb1xrOnawfFwlEjrXCdJDN%2BOP1FSIgwIFqfZc2CYedo%2BOSU2JYaYOLhMeb%2F5mfIilTPVlSI9cB%2B2tr55cAs43rRWrSsP20qfRdyFUG2027E9vzMnNS9JuiKODudQLqThVbPH21GPP0m4MgMvLHFvYZ0KEkjMEjKPQikG2I1dDfqZr%2FGzyuaj6ItMyXp0DK38iE5yvFdkSU6pZzn21JFXCA8JRBK8MPwkF%2BBwD6IGtt%2B9b9O1GqGXWFJ7TG%2F7Ze8braB1i3zFSVi1gBIUVyIbix7rGQRTsUtaDXBHzPDFqDX%2FoCb200NEvK4YPTGJKyvmkVeBQxKWAorA00BNZ1xD4Fo10J8xJMu1XrrCd6LoJY96Q84yNxLZfnZOJXgXB1S%2BzDy4mpdOicmWzCszLTs2aFvMjpu7Jk%2Bi4YCpuM4ZgIwiZjvyAY6pgHsK7tJedWG3Q%2F55I8VUr0XJd03KafW%2BnDkrX1mrT3VdOjtpQsf0BVZmGCLU2BsgGJaNFy6fq%2FgWUSHVuG4hUKX%2BFLOWt1yqM%2Fk7bte7%2B9Tomz%2BXuxshID%2BkN%2F1FVUPJB7fIKNYPjLFjCNcZQ%2FEx3gA6XuGL6h0Glx68iTcjObhi2C5MbV86nckILAdbzg0w7qGuxlIQ1P3715MTCM1F1w9AxMMLs96&X-Amz-Signature=23679eca61846ddb5d38d796ed8fef228913a11042a97c9d9f04798cd94de5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
