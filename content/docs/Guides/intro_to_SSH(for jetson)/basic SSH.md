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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7H54LBB%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxCskHDXD8g6%2BEgfq6JpgI71l001bTUGkQwC%2BB96MfiAiEAiRwyJT6crRjehUqGFTtN2qETrdXSKODekXHIdKQytagqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsxfeBhnLlBOIRbMSrcA4mttyE6xry9sB0hTspHj2Aszj3xiwSH7Bj%2FaXuT3CM7MSeUgxeukESLzx9oqfqFXnLVDTQUD2Gla3%2BkE%2Bdfy27GZTfa3GBaQj8FqUHJllV4T5vF8WbqhamlHpa53B4QMWI56sKoNM9HkoCt4NbwBburJfx%2BU2bwITpOKGU7C7%2FwDYQbJXhfdmjLk8KspjCBaO2IY9UufZ0LaUHEun5oFnRp2MgsDZ76gYNet1P02ceIpz4isWaRQHc8IH06M94USUW5Ex5c5zstJQIGLsiqUBa8RGqIlAiGKO3zYfLckuhW727hT4Z5x%2FjJNOmqNF1YaUUPKDFIUOQw%2ByuH6h8vIcipD42JQVCo%2BUBRqo18fw%2B8twerDW2tnN6om7HynwU5F1jdnOrwIQKgrkgVuBVfal3YpIFfD13p4AiMnJuzXWCi2D5xCVYQ9mwBZnFDv0m1dUT1hXELR%2Fl2K6pIfmJ3BP0yZBt%2B4gzGtIzzjzMh2xZX6Wl%2F01X99uiHpxsQpizYKa8Mpayq%2FFadUxlud0IeVQjWeUA%2BHAjUPf0NP6SXppOG%2FmsWDZZJYrtPE73DkeKot%2Bxz%2FnSDm13sd6siYdKAzcPMqTV0gzRT8JJYiHjkI1izKa03D%2BaoYea7I%2FZJMI71jM4GOqUBCDS3UQvAqrzePz19u5fmvUJNo5OcHQG37f%2FL4u4eBmIa7UpsII2ZQD9sn7ySHUNRxbYTG%2Fre3sSN7ir4klOcyokLg4YBTXPc8TG8FuHBUCiY6eIHxGp5MssXsRQ8ENvprLRVPHwugi2uUL4yis3M0JQn7MykHtNQfxnjMojF9wALI7JCgPSNQk%2BNLZoHI5AEGsMLX8jbv93kXWf6EpHAv6x7I%2Fvo&X-Amz-Signature=25c4635fa22d8309eb527204d2fbbed49d26a2b38dd00a476da0edccb82e25b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNZX52J%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4UuTuATjGcOfmwTV5MqKA%2B7iGKz6LoShaw84cVqk6KgIhAMXu5rwgK%2BmyS7CaSn49TK5FsL235OrVIeypECgy3mPpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQvy0U4Ol8pvs0kfcq3AN%2FFlStwLPrHPXiRXsBVi8w8vwULNolB5wBnO0z3vpBBFPDFIgjL0v7O1upl4IZg%2BGFydke54b%2FW4LBUN47Tdlz35BrOwewsaXU%2BD0zqqpxyubYLNQPc672RDYj7FlADaSlPjIJRnifrY9R%2BCgTTwPiqX24niyTP4ONUhkLW0Y9w7KskwAHPgWEinh%2FwvUwxxEWvWrpLz4iYnZsmzERwZvtx8Y%2FJGberJXt0uTy7O%2FHWBvgN2pFzeAGogQ9bNgcTvaoT0DdBp6WViyuFhTzIr8TeFE5pCC8EC77WQRl8JgHH4%2BK3TbIl8PftJiYlgaX0cRfpNSgp1W%2FdXuJR1eiEMIC6icMXl2oXp9693FK6qSVSPwDhK3qgpKqxLHvseWnI1idDM8wDwzhWAzlNFS%2B3%2BPZVV%2BEfmRw1Dv0rVYt9jo%2BBDh07AwdzeY0Ngo2njX3mPSziB35AyLP4oxG%2B77CRKmSyrxlViEB1yeBCPiYhk4BVpbjWyFE8YMhxL8AnVLEh359jZ5C7fpbAIXBJ5zKj8uAqlknibTQfN7vU5b7kZotzNwnTd2KLCiSQye82EfYV5mo8rIKk5caI51vPOVe8p4WtU2rorFxTS9qlMPhVPW9QwpSUgVnZfqK2jV0FjCD9IzOBjqkAaiu%2BVbylz%2FW9OTkMrSTDozodMrBCr3b0SSw1UtfV8cGa8H0bdxfpMEq0aUpKbWkt7qIjXct5gNIiGIZ6Js1C2MULwSE6QO0leKke2KqtnTOkHmSw816vnxCoHpgdT%2B%2FYfRXWvAgaeNXQYHTL%2Bj%2B9wzVSFfx4spzxKX1ZJo94TW7UOsVUbMHhI5fTc0TZsf7TsoJnVWBGR3XeVyHvttv8anAELUj&X-Amz-Signature=e3a859f76917b5e598ca2e4da07c791e703872a791ac52b3713515f9feb8d335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
