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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHYKKE4%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkkhN%2BiFm8sVeEeDmRtp3PU9sZLiy8cx2680XsIghtgIhAKp32UUaV5cWScLwvHsk9sDiEaei%2BZ%2BvF%2F%2FMXtQra9bCKv8DCFMQABoMNjM3NDIzMTgzODA1IgzgoRiaYr2eYzC3GJsq3ANHXPfWb7eLXKCprLEMyKaYmdtYTXwX64PtHGuAPJI723wN3O0QQ%2BkgIEq%2BiWEz9DsqmcKhcJS9M79gv%2F7nVSw0XBs5hsF4XVUVSQgqBvupEMfzDbIL8XaFeyoMIpzqvwggI%2BKVyq%2F9E0iLGen7ydLvWesS6oyQ1HmzhIT4R5QQAq%2BDYwyk5D8ZkEn51Kgx3jFTLRIVf47FHGnTsx38WrD7ssInUq9je2MwM7KFZAU6q26RqMMrRAK0yg8bmz%2Bo7LfhWXh7Lal15PMdRLrpr9hHl7e58E5T%2F5Sxzt0D3YjjjBn2sdCrneoCW9yV8%2F89K40In1BglTQ1bIWq4B1PJGu%2BJzaDksw%2F4ABulBFvbJxiNPifbACIVMG5eOjoYcQ46RMbnW86hSyyR5Y1cjV3ZK9d2jUCrzTlvSfPHuAbnXIhG0hRhdSzig5z9YrJms1oqA7DtLwaFyQMkA12CXzR0McGy%2FGehSdJufx5TVMYpfvQ%2FwFzwaRObazeVetqxVYzJraSTWF44SORaHCEhj9%2BKqi01HmQBM%2F2gvRbWQk3J61p2vOp3vQ%2Bfi3RnPlK%2F79MoT3iPAkkokWS%2FVHOUZJVNYbwhpUlIcQkUGf%2B3qyAWDeu8%2FjXjD4FtovlCB2bOzD9iaDIBjqkAZvXJQfKJD1GeoSRc7XPLySR4PwKXviu3xpxDRpc2WV1FngTbI8dGcOvwqZA57DMjq8BRFLSroPNRg1Je5YKL7RyE30t1SAQm9DQGZwkerbTa6FmTG0gq%2BpDxGMJPcjWbgL%2FZElMNya5bHd8KM2xdznH2VACr2Te%2Bq7c7cxtG5GuZXI7U7s95tfEjwpDedWQy2f1zl2azzfW42mr%2F%2BXegxs6Facn&X-Amz-Signature=d7ad39a15a3c4c2ddf0bde16b4bc3d864553f9b20139644a21ffc65e15435e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
