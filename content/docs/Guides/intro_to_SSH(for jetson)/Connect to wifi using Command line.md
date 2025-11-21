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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVTXE5Z%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBrvvy%2Fbnblza%2FzqLELfEpaGAS7iZCu0IwTkmdnyXSTJAiEAsPhBrpZK4i6LPkoz0jytuBdzzjEQec4ODjU8wWcsq0Iq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNHHaUqBHU%2BBcHCAlSrcA0FAkf43Flb2MGzGrvm5VGnpvTVlOOoLLYQsSxSLAHjlv8kIaVhOybx75bvfh%2B2QC%2BHi9WnMowuyXHnyuipTmW422QooX%2BvGUsFDbrh%2FVJbAKbFA5gxDgBZze7N0TMGy4e%2FctLS%2BqO6DlCmKqA7I8xc9DCLdvrtHh3I6PEe1Fkd9tKGMk9deJQvyP0oOY6%2FjCEvEe92yT0BeimuCk1OPz8qESBf2SYMaVUKFUFB9oDTOsIle%2FQmcFtPTVxIg3Eh4h2ZDqMYrXnx917cqag2O4vKlPafxR78HYYw%2FzJXM5ue1%2Br4OevfDJ5y%2FQ8tGpVTCNn6%2FOLcbsED6uI6FXDJTeoTcD8YQllfXCakb4MSwbFLTB7acu6cdHA7rE6q9lhNw7oXBOJEGZLxfBAHMryvSrr%2FQPxjzMZ%2Bck8bTrqzEakKXSJ%2FS8guYZXbHHgrOJn%2FYv1N52bvaEmPMGVxECgaB%2FiCIMwO6Wr9l2%2F%2FMTRGs%2FjsWqSGSlTWfes1nMUeq9k1PhVKXXkuXcB1Fkl3mbJCPSPaGViXcNv5reIQATWFwYr4FC%2Fk4Uhliq7uLQMaEDx1HdaTB94tc5lFsnEDUB0o14UtYhp8bTlyyFel4Zi82O5d39fCrMZ8MEFbDqut8MImA%2F8gGOqUBlS8M%2BAcucz1y%2F%2BbHlI3dzBcS7zScvXkrW8noo6FDNhw7PnbvPnTbb4GIMRmTelsZVk4J5p4C3TspUcs5z7%2BbkfWaFxCrEKBZd6YYLtNP824wAxiibVZc16Fl80GAzPKPOhRehW4bggdN6twlJIFgyUqK1v4XGjE7Xfyfn34YA8gSUuNZYNn%2B7YKlcV%2BWr0yG8R5eOJsNZpzhZjq0dJSvnjaF4K34&X-Amz-Signature=1b42ac42b38935dc60dacd6dafcbb994c52db5f00dd144610e23b89e0110ca04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
