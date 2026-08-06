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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXQIHQT%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDmHAqvUVzuGsPeMI1XkHqxVbWrDITTFk9xSINcpva1%2FgIhANWUss8rS8%2B1zAKPX6nMqpTE70wlz%2FlEPMq6z1L99vHgKv8DCDMQABoMNjM3NDIzMTgzODA1Igy71aTxFn9bZiYWMMYq3APxGLhpfVMTi9LrbqDWmmZnLZJkc4VdLphJxM8kd902QhMrVQTFDbWiBz1fp9rmp%2BIMWXd2wDbZZPdvGeSWOmQQTmy1ri7Q9h2ca3xbCbsTqMdbWzhA5ReWdVEZMwrzQcTkK7k%2B6eu0aTXub%2FIv9FcQFlOyTxtyZo7wKxcPlfkgp0mAF6%2FIx1lWpLToSM4%2BqxCRJ8o9yEjmYqkW1yVgCYm3m4i%2B6rRCJGM3LbOFkA5Fjpl0wHSbUfBwFJHtAIPiE7w0zPHm%2F4PLOqgU8RBWV9tBfG3lCwEsyBCA1tjHFC99nqpm9w2xq7T55Kvg7wA7kFCBivxNOWVZX9QgyQ0dke3uhrQ6JmaBmO6%2BrXOzvf79%2BL5jjWoKO4zlYrnYsRYiWoLwa2vxTLfq9qxKUEvn1aVwy2ououpbVRGblID%2B7hPPq6To1vt2qaZvCOv5p%2B6dHNDodEdc8RJOolT%2FfukP8qBkeD9KtLX%2Fp1fVNGGmS3xnZ%2F3ZVCyZapQNY3YOOCqg4dHqLcGxzjPAJL1l9aHXN5n%2Fzbvt5bSfRuWwfKtNZ3J9hSG6EyNQbNJSxmt54VChbREqn02hyXgX5XlQFjjE40u8p8rHDMe91URojEbClGZBHO2%2B06qq9P%2FGfKypmTCH1M%2FTBjqkAaG1LB9Il7iicnEeh6HbW0LbhSmKrczmFTd5rwvtpLAvRtnDl0quw8LYVtQ8Q8tgOzH%2BQlHKCKN9dr8juphro6pLbMvxtKz2NkpJw2ybETORx8tLbPX2buk8m1rQstxZkN8X9Fb9aF%2BlLuszQMx9t%2BwcNuMMm9VOz23OUmNpTPXZIjrgOs5ezNjt0sr7k0jRHq9v7IEzyvTGmrRyImDokYLTpuvF&X-Amz-Signature=cea3d020812da4ec47ba8084d596c1024b821e78b009f77af5f8055e99ae2ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
