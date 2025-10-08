---
sys:
  pageId: "253da3bc-6297-8089-a208-f7fd19bf3125"
  createdTime: "2025-08-18T09:34:00.000Z"
  lastEditedTime: "2025-08-20T08:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/basic SSH.md"
title: "basic SSH"
date: "2025-08-20T08:10:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 191
toc: false
icon: ""
---

[**What is ssh?:**](https://www.cloudflare.com/learning/access-management/what-is-ssh/)

SSH lets us connect to a computer through the internet. Its useful because for the jetson we don’t need to bring a monitor+keyboard everywhere we go. We just need a laptop and a connection to connect to the jetson. It is also useful for wireless setups so when the robot is moving so we can still be connected to the jetson.

## SSH command

{{% alert context="info" %}}

Note: make sure you are on the same wifi as the jetson / computer you want to connect to (for Rose students you may need to use a VPN if your off campus)

{{% /alert %}}

{{< tabs tabTotal="2">}}
{{% tab tabName="Linux/WSL/Mac" %}}

in the command line run:

```bash
ssh <username>@<ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}**example:**{{< /markdownify >}}</summary>
  
```cpp
ssh admin@192.167.188.15
```

</details>



{{% /tab %}}
{{% tab tabName="Windows" %}}

Recommend solution is to use the VS code SSH extention which the **SSH with VS code** part of the guide goes over.

Alternatively you could use [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and select ssh in the connection types

{{% /tab %}}
{{< /tabs >}}

---

{{% alert context="warning" %}}

<details>
  <summary>{{< markdownify >}}How to get the ip of your jetson without a monitor?{{< /markdownify >}}</summary>
  
Follow this guide: [**Connect to jetson using USB**](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_sshfor-jetson/connect-to-jetson-using-usb/)

</details>



{{% /alert %}}

## How do I get the ip of a computer?

run:

```cpp
ifconfig
```

and look at where it says `inet: ...`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQDLSUCP%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAdKJogk8bceVK0ZCScCqzyUDWIj1PSwPKkDj%2BXdZyPbAiAcQmhrcYga29jNOJmtobgHX6Ag4WZMrrIcBrsop8%2FCzSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqdYs%2FTvJt8bHb5TKtwDed59WX8w47ZDNd9MC3%2Bjux%2BXjsJrGJkSvj0M4fSrV6AY2OjDtbM48hD7mhHDusoaLi4Wn2BpHgCvj%2B%2Fo6QyR9t%2BCTn9cIYJULsxv518pSKejIyMv5F8vf1c72Xag%2B1O9FWYe2hW5%2BdIVb%2F9LIgMCj2yTp6S9Vg0kK%2BfexlIc9iAdaVEVGQHN8InuE2T2QG5vVBKcfxSoi05VRcPRqXBjK4nO9uOqQdLrwl4%2B27Fk0rgRWbVSg43JTbPyBBYKlcztoBAWwzyKGoCRNNXl9Vfm72A36vd1xRHKaio7HUL%2BMu8niIRyk6qV9AhA3oiNWHTJTH1UheZZU3Wv%2Fj4LqJo4Q3XIaHDFZa96utu3KxuJZA7VPIamAsU8Z8M%2BNkyszreIOI0%2BxzCtLs5NCTO3aFT995sWyH4KSo2laTTJtyc3j%2BWQixi8Ff%2FOcNQHoj3mFUrfSQfrpUo5CYpq%2BlrBC9AY%2B1f0AgZ7%2FcXt%2FklxB61zz96RSgXgUVwu5qCymYNHmEBOgCJxg7836mvKgE%2FkYWN31dkS92rI7qnrsZ9k0c7a2C6Db%2Fk%2Badcl5vt4klBfV94%2BjT%2BheAxxi9b%2BIuSbT%2BilumaVm6MYLCqq04cgnWD15kaZVwK8I4tYbadpC%2Bwwr%2BaWxwY6pgE%2BsYr2rIAaWnrrt%2B0n3WjrY8Z2GGtLIKSJhWkqdeaeMKTluPY9j1j4pTwoIr%2FA1%2FWhStxujKAuapVEvVyNoWwupR15DUKoRAOUWUyMshKT9hF6XKHNsFybqrUecVsxKWcwkELoF1t9Lp8zhifu1ybSfeUHQpoHN6PuyqIJEHUfVgFt1SYj3NmfSH2%2FC3DjdsfvNL%2BfqqhKxI211AVDpbaiYgCxsVbk&X-Amz-Signature=e0f7c2f2e822722f5380557893028ae7dbbb70f85dc9e0f5abf6c26e6d761f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MXVHWS%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCYCWp5iBSsPYiyB6wugJg3HOEvxUWVKEg4dDpTcHTokgIhAJ%2Fgjn3cQPVNle1ImQz8gP6ajl%2F6xkqWG114HL0pTrttKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyySSIVgGGlOyHZ%2F%2Bwq3APND%2FESPKdErt6nw91JU5YJAxmGC1ddD5xAk1l65%2FOUwjn9BAlIdtc8O581%2B0Z1shcvGmUE9OX06AjkXYA8b0K15dpWiGA0WiKVbvDLGTd1RAbo5clW90mNZ1fQvvpY4sNxfoFm7Sho4xX3yY26K9MXUobOI0AI9x%2Bsu%2FqsiF2wrDNUqMtYOhTk9%2FyZIrU8nIYmpx7ENMbtXVgmyU%2B8t0UzkP28rGnT19slTCKsGTVGqSDUdBCJch0HRzZXZspXAxHn7pqNRo0GIj%2B8NPJn4IDGrOTPsGzmuKz4DKZsgKP92QZk2aixjdnZ%2BFJgQbaCOquD5%2BmTe5xWeUrwtn6i1HM1BqWnEF0tQur8eNuQvxMhpzoA2qVHt6onQcLq2widYpLoqYS562JSwKE7J6sHf4wykzhbg%2F%2Bq2MeK7lrbCWdNy%2BAkS96gL4CSf49JqTOnxsVOf%2BJ%2BIPhq3Ya52Z232qD2bN%2F9FM297rMLTnzMn3Ays7ROmPiq%2Fd8qx%2FxpJghWAmFkLMLvoSU3pEto1JF3j1h47opCVG6HL0n7s4MQ2YLPACoyfNplvm%2BnA0PqujMuvLW%2F1c4YpGEdX9s8FAl1KsclJxL57o4wopmWsHj5Um2ngWjhhTxzJWTU3NEc9zDX55bHBjqkAcH%2FmxGXX7pZIlEnBeKShNx7JfD1apy4DAmkelrKy%2Bc0%2BoDqjhNUypl4KlNrdn2Ovexv4Oj5WPEQZLc3UfejWK3TpSXGUawo0hv18F6kEJmvJpf9ErLKLPJyHGWwOEa5Ov5THlQzl9Fb4HHt21idchBaQ8E2iiEDO04aztXQR%2BSEA349adk%2BqmYKkSYyr6HH5WtGH9qF85Xb8mkbDjyCnBRSMrlL&X-Amz-Signature=303c2539218800568b1b7d687ff55c226c8cf444f9554f8f0c585bedb8204ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



If you get a response then that likely means the computers can ssh to each other

## Forward windows

If you want to see a window pop up in your program over SSH say for example an OpenCV window of what your camera you can add the `-X` flag

```bash
ssh -X <username>@<ip of computer to ssh into>
```

you can test this by running `xclock` though the ssh connection and see a window get passed though

## Tailscale

[official tailscale docs](https://tailscale.com/)

Tailscale is a vpn that lets you buy pass the problem of always getting the ip of the jetson

---

## SSH with VS code

[**official guide**](https://code.visualstudio.com/docs/remote/ssh#_connect-to-a-remote-host)

{{<youtube "cOopQQIL8JU">}}

I recommend ssh with this method so you are able to edit files and not need to use vim or nano. You are also able to open multiple terminals this way too.

Another nice feature is, if you saved your workspace, every time you reopen vs code it automatically tries to connect via ssh.
