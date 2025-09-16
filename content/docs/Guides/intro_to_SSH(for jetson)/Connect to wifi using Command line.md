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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5D7BPP%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEtvuk233LLg5Wx54yas6xyVVkMxryz0CGO0mcs7sq0bAiEA4wHxXn73zobd5RGOkmf1X3t4Bh%2FQ%2FvkqN9zNOJvDgscqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2B7esBsMiDISQy3pircAySOoE%2FDL083HKgdSZ97oI8H1ELk2CR3QU7AZ6xGoGgrNSQZfZpzbsBC%2FKyFOv0hLGIk4fi5ObDLOLOjaf5vdW3geJW1jiMKp3ie1kBmmXVeij5tdyNMlNX8u7%2Fc9tWhcmGuWRxqCq1cV7r7sh45rTemY3GbaRCb52tV2pJAD4CGJDiJptBRsq%2BFhA1jbMOoAT67X6y7P509rMrZllVX4ISRSiDYlVwzN%2FJ6772Db3HdIXPd93uTzIS%2BtQ8t7xfWjs88ljOBfOQXJo57%2Buckym3hRbDqhYvgLPDORbWc%2BpiPCe6yc3qTOqoAj78545ykhaxamEMYSw0YCjCHbfSJ3O0%2BqgCiYAN321bq8l%2FeyXuG7mBFXI2cdwP0BPDgHd9PvCMEHBTgVPlSh1xR3kNEIR0OG88LkUSZsjS4KFX0sTV8vlgyAsp0ImZx53rrUyQVY24ChtJxUujLY%2FEYesAVTGtfRWGrWTgWzkven3pcZArG4Ao40vgaVOJxVUlIDViC8ZaX2TGHvhg%2BhFN5xblEBABElWhtR8ubYZ5u6V707ke3JQYlvgjmzVbU2dOccdvz%2F4gLz0WkkrTVogUDsA8YSBHqz0dUJGgqWMsvcgCnTjfpE%2FakFBWnbDKzD8tHMJvwosYGOqUBFCQZmPvrRGp1rNF5uQDCU1tVlRZwNeJdW5rIHnEDmu5Gmjt7TQKAb3NGpGiKZy35KSF3a3IfL8lK7HV%2BGIu9q%2FIcbiPSGV1zEfgsAYkp52%2Bx2R9k%2BKN1WHstkE623a6iQo5E541%2Bpwk6XAc9ZHGOMsewtM7Nou4KnRQsA1dK3099zZARvMozVXApWotoDDEz139SUQXGjFV4UzwN%2BokM437PInpH&X-Amz-Signature=b1830d75fbf244783b35f3b6014040440477b77047f0783d536a74c85aed53c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
