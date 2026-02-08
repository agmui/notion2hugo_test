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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNVHH3QY%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZvBnoqeAQCpVlatfMvLdgWmxub4y1Ix6KMNA%2Fh1rFPAiBvqoUL05w7XlSWbl5kz%2BILTcnW1Vnrfd6t8w7cgQYEhCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMbzSnAt8fBIoMVSkhKtwDqEKBpS9J%2FK%2FzM%2Bw6nlM5lSl4XKsS0VGGj3i9xjc8HPKWGj3ukk2FKSZB32azz6k9o7TkFQQ4zkZISFXOSH%2BM7gJiKhQO0myPhk72ykgFw60Sv5UHyldRHNqvx2E5%2FEsH5XylaRiysclNluNMzje76iQm2kWGH8jYI328PxwsHltkiGXf7XnMjUV%2F7O1%2BfKIP4zj7rQqD49DXtanP5ZZtO8EheNUUQvEgRx5EntR76XNvS4NfbKM%2FXYM6m6MdQ%2BmNH7PEjg9PdonblfNUQdEzeEQt66bHbflZGITUtla74pi5exFd9p2abMmyrTvQZCTZmQDyJSvnalQYR5tPJPmXclyuvWRih0XJz6OKcMn5%2FbJxO8b6M9XOJmo%2FU%2Fn%2BSXz7A8ymBf9Kl6gDdTrO4KhF9Z2kvKP5D8H1qPgK5MXZrZOKMZ7ZNy9nooILqV4%2BdUWS0045fQvXbSh2U24sgu4D%2BqaeNG8gjv64%2F%2Fddq%2FfsjFuYu%2FJ1g35EL0oBFd%2BY%2F9L5WIu89Dx9C63MJeQzy%2FdOs89ofrFmMrg3svn1aZU5Pf70E1PR9sI0RYwbmfhlRrTfCfxDTQzmNF00VHA%2F7oU0nVMgvZh%2F%2FOEOt5PXgWMj70YJ7TnDx%2FiL8iP1PMkw2uqfzAY6pgFb5NQHkcxBprXmxG9wK18OifR4GrJWSGhjqHaQptb7GeEN5BFdsf6CjEfbE2Hoi2QI4JXgR3nXu91JeFpGTaP6iNfUb%2BAKZbDmSmJhvE9zAe7XcKJ0HvKaWMphkERgFsD71kuahJDoijRikX8CpLxz2arLg7qRsRkwiP3Do%2BWHl0EkJzZYge24mDMpRBoSdB%2B0Dvulrcv%2Fk5N9uQT4gkwNLYJTYe9e&X-Amz-Signature=de224a8cf3b495ce2ff3a952007f75d51e9b2c7d27ac13085af8186421c415f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
