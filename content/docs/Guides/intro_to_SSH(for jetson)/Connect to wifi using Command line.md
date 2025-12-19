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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJXYSSV%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBco0rPw41xBdNr2iVOr8kb%2F7lpwSVic664LDLW2HDQXAiEAscC3iY0E8Tf6Obg5Ms1lNvdZrxfh2gpjxlSkAXrJmBwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Ftc4Tknc9hMEpSBCrcA1rhI7bsY5I7aAuvVoVunNBABp8WExes%2FF0qM%2B0FF7cOGRKOhT0EM8QjXNjJi2fQswma30cxslz%2FuCNvTn6Wp%2FREczxy%2FuKOKbiTgaaqN0hUJFN7ZFZ5EmDvda7C4rsWfSTOYm6N5fRb7HmSyKuF6Ncdy8Ym%2Fv%2BDz60gbrVGDqfK%2BnoXBFq%2Bao77EViDp5m6Ix2PgoI1bzhV0ymruWZqhmeEfB9jKNc3OhyG2Yx2T7sVGVMd2t8fr0ZnkzmcW6cPSTkyB0jvSQx2zzhV3kCzabEm4712kcTH7WnO0DrNmycwtbdApTMEKKumIgsq%2FP%2F%2FgtXENzqUOufaLTZn9%2FYDogn4DbBIFiKFgSt7af0aKkwPLIWFTZBwaSyea2m5N5IAudLZGLJgEGwIhaMJ52mUkY8CMd5hIFJCcth%2FYfwLURUQ8Joa5AtUUE%2BIY8Hd4D2eVYNoO1WLi%2BJg0PaE7Xm0COUaZpWXFpN7M9JAg6zuuRpj7E9wIjFk1cDg4KbDDPQ6DwR5cEeJugClAEPVZbw9mp6J4R%2BiV4zcD21wFp2W6RIzwUzcIHtSQNEGTqY6NGqgAlpglmbYVJY3m8CSBNMp7KQeroedqgewaVt75k2mOpwasR%2BEIZroVCcbu%2BLXMPbGksoGOqUBP%2FnnZ4hHqb609auZMvHH8nz7GduQhY1mXIBV16tfru8JFqeROsHGcESjq8EDr5rLjguyQdXPHyB3%2FaCFsrHBRfqE2to1t6BYHAJmfLWBLco8FTiLFgowuk0Wb96kK3D5D1a8GSVwt%2FomK30w33%2Bf6TLcdglKcMn6%2BPkHgwwPY6vPkf%2FAJn%2B%2FgwRWCivcpX0pUyEqsdL5Zbnt1VVZsM4sfC%2BEkHdS&X-Amz-Signature=69a7f45503d77bd2a5cc4a504ea7ad699e31b3ff9f7d152bf8e3080fcfa3a306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
