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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OP4UTCY%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAR2SemKXbNyEAjqr5iRrponXI5otcJHPYwbZQwn1ThnAiEAqpUBgB%2BAIbRheJrB3sI3J4axaF5Ga9oTql9Ao0MSpjkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDE77SETvqIkd6GGx6CrcAzF2KGZu9mqrLu1zzJf95VqgyyGUZHpGDuN9YhYs3pMqy2q5dAvGmPHt48h0oEp%2Fh%2BHFgh1A5TL%2BkNr%2BRhoChN607uXURY%2BOUIjgvEbrF%2FnK%2FySvy5WZlTnK5Bso0qD%2FNdvttg4u13WuqWTMsr2OIea48GyaNyCFwrqjsVa477mmiZl52sOS8vekd%2BBXUHIAAhjeB3SGigcKaWGn8VDfF5tPQk4Gn%2FunZXP28%2B4PskXg3brqgjDxugWIfp9g5UD%2FEbD43FaCEDHrK%2BhKaAuu04qqkiI4GNRfNUA4l1PKL57fHyWpxBYSVZrUZ2Ti8POfh%2BBKuYypNFKSm4xO6xgn6Dnvf2%2BOJQpWcztkrMOmGyKj9M6JkNq83fEDHsDWNQWV0sdEZKX9hN98QY%2BCo1lk2tmNlB4lKDMcktWYe6JsT1YT7f5EjlKeU0Qb3jlt%2FeahfCEZKpI4rKh7iTJldHVMGEpV3QPTJXxjqreFJRee8wMfi2p7THCvZsi%2FEbZa9g2ApjoI9gquUJkbvcY4fnOpuE739BPM5Uinnq55wlzRy3Si1r5ncxXqTA%2Bnb0na%2F%2BtX25H7%2FKnNcGvpb5qaQdwYDMx36mJS%2BPT3oZ9P2lNnEeuTXHbzcS6iMDc8iPIkMLHomsgGOqUBeYa8O8r05TbPh2%2BoB9OuHgPuOF5YDGiTqyij%2BAPxiPUtAwtw%2BjKW6q3ZNnXJ4rlF9qThuEsEKnJ%2FTngQ50S1OAbb6SURkzlYnHY%2BoHwcTenSvu1HWh0yxlAN4zO%2BWciq8q%2BBucbcNUy3vdpOVM6xS10oy9bwarpLc6tq0tQ13NmrCDDaMfM5Jk3AGfVe%2BBnKYMnk1U6jo6wjitZWg0UP99AEDVk%2F&X-Amz-Signature=45d489698120573a78d039a47ca3e6ae4f188b4def087fcb8c50575a873b207c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
