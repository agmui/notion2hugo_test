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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKTUJI7%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpGzL2jOar2tzisU0GyIhiSgPqdqrPL6YiA04Hz278AIgSVNEhlnsYI%2BLmZDDUcu%2BPZJgrcFzVt0bI3KYiQ8dPxcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMOpq7sDbBFMlUs0ircA6Y879aJj80kQPiAJMflND%2FQd2FzeYS70T7QnTrCZnehBKEFTjA0Hpk%2FqrG%2FxVprt%2Fjn1FupuOWxvbNG6eavS%2BBY10f1oYYtymVUQwXkwNWbdaNrhfplkP6Bb3FtleqJKQnLmkkGrnek8bIBODNtgd67gQF7aL1ZXS3R6ZW%2BWc3%2BencQqAAT%2Fn3iuPdRdroPx7fVkRHprVuDeWFyJBf849bB85J9Hp253%2BCNCS7alFqKMOoBY9QGbheRpHwd1iA%2FzC1jyXd8QRaQaO0CJkmXsNNCWeKf8YulDz%2FvNA%2BDZm8LjhPeMADLBGhD31eQFk9azSJQdi9qPTAAxZN20CsrlEY%2BMuuaLnD0sAOOJ%2BBNjnOL6i0ghXDQLhNh8HQnWmJUaNJz9WAd%2BYh2DeeGEzRhDu0deIrwBRhYI3wHwYoU5xqEOg58T4wKUK2mRXejRe%2BEcLwQBK0s%2FNd0iqYHN%2Fsejt4OsjaW3ZZGF%2FKk1E%2FUktgE0%2B9CYwmV6magffe1CkB3TEWesu3RAk6mAuwuP4%2Bx3ZXXnEJrGKkUCvXN128WE70Q6IPFIRpqS%2BSroasId9VGHGlVa1%2FNoheqY1r3OpYttUs1HbS6qYmnCrXV9QTLWBkXSyTmSat%2BvsXwK8MSMKPfqtMGOqUB3cmwfdIyXPEJX89MqIRg4j0PGymaEJsex1hP5%2BhaE2CEXy4oEyO997pAfyNNwKrxB74wO%2BxsTJ9Yq31%2Brr6L8wftDclo66s4XMkzalRSkjqRlkDPUpBP2rB23cULVLL994byB17HAfsvjMxqd8%2B6xgCpnB1lgnYtra6xQMth8foL3uHFsuA9cxXF7IV8ASpM99bGP4LpYH0Y6IqzigpeQ%2BRprSBw&X-Amz-Signature=6d9e5690fda3ae1c646ccf326c226c9a15a2f49baeb548d7e6f6b7f9e6c1b562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
