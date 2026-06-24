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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGPSP5R%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICwtgs9TgPGRZ58pUxwUeSEm9NZgj3HBv2CftpEr23DlAiEA0EEXIeEQtx9hgr8Rn2vX6ORyIgd993tt02MKNC18XBoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPpqqi8IH6uqMiAx9CrcA%2BnHmsCYnRlQTU5bzTtj17ODMA%2FWBF%2F6b7c0deUb12Qo%2BCyhmAWacVPB8WKGI8dfxL8Rp1SM5Z1ZnyzKFdp%2B0AM8F1UsUoIjBDOrthtLcufQVGJdA2pcc%2FUsphpgpCF3uUgZ8XhXS50c8oXiu0IqBCE4%2BpumUZmK5MNbVJWVrWYt1s1hXDos0UGCyqH5oAoRTdTM%2BMyKWiCcocl1%2BVO%2FPdQ%2BZbZLDZ6O%2BkGkU6%2BaGDM74Oq8gWoKTR6K21hG8sH26eKSU6NobdO456Fu9t1h0YhFf3n%2FiNDXD1elMPIuV1qmtiB9i92o80SOrGQ1bpeZ36pK7ezcBZnv%2BW0NuKdTWllajGpvdQDxms32hHxILCGKFL21YZzM6DasUAmrdxAlXmFIgBRy%2BvAvhn5RIV%2B2k%2FK5Ypv3yXYrWTvISrnvG5ZS0AFBtg3Af%2FTFBl6MlOF7su1ofQrHJ1qmETPgftVQUw7Z5%2BCrbfG7RtkHl3V9JeHfoFMuxu9QBFE9OScOYiH4Nb56XceI5gBpde6VTjGuOG85P3ICfvEVpl%2Butme5Hq92h4I%2Bl23j7guBzRks1l79ifMf26qsmxe%2BccwhegOXApzDZijmLe59S8LnOSDPplqhl835jqwppViHvVnLMOjy7NEGOqUBHGsdSAIrypcL8Ele%2FALG%2FfASYrvvdqZDNdhVR8H1xezPqAAohlUp0cpAtmO56RipbH0%2BPEPt8tglAZtRywjZbzR%2BKA7p4YKwmEIvvOVQdzUDjvh8KrQ8vDNiF6r8h%2B7exPjHfP76y41szXqOy6q2Wa8y5jidV8J0ySe0EAyqK59z40eQ0NzzWDcH7XiwzNMRF4%2BHp9%2BMoo41v7mxal7PA0n6Eub3&X-Amz-Signature=477ead8200e88e43400b7c8dae2bbc8f3bbb1f48ca62a3a52b1e0e9b74794e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
