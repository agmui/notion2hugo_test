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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJWAAA%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHarCPIxX2lx7PJo515dq0ZNGOseNxAaslXeYczWJ%2BiVAiAXBG77c4myAqC4ij762vEYPnheF5PZzPVvRgHTRsWtACr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2BNkpCe3N0xEg1dQoKtwDZx3Rc1WU%2BwtmB2f1wNsvH1NgpeklcwlIh4t6ed9TeRsuCHM%2FameECG%2BpmJsAY%2FDYJXyoIfdh2LhXJ6PT94ZdSlkVs%2Bf%2FZuTAJcXN2%2FLEmD5xfo8UEj01uUYvnX%2BYOoQDpQRQlF2ZnK1og9YcpCmpUxXXAMAe9JNmui1dUl%2BRJ7vE5yBVVJvF1Pt19Nx5HTEs0kB2j5nWCgtkzgq3zj813mxurVdBEB5gdZVkfGRBokrW264CktsLJiP1KxKomhq%2B254nvb6OkdWDkUI5f9czvjBlNLezA%2BrHbBVatqf%2F0Z2vtiuQjpRXWYp2Gy9ewAEQS90sIk5mo9Z0yWIISAtTksbxgL2YTl89zH6sd1EFDNw7sdDR72hy3%2FXw%2FNQ%2FKcG5hdYuEH39impDB3iSb7IhNwVWnHSe67FXsbORDeFDQzMJ9FX%2BEeBJvbFS03k4%2FS81oFU6X3hNKMJErA34Q3ow3AGM%2FD972qKYr%2FTRapgHWkmFIT3PIcHNBxfPUSkflMVPHa%2B2fz5FrX4cDv%2F%2Bn5hB5%2BFil0wuoTVXnkDNvlAIZhGevcrmLOnaDlFBCUIjyMu9GWq1qWh3t%2FK1O7sEF8jWvpjmv%2FwnFD%2BLkTx9OJpyL0J3GeL9mIEoeeStimMwuPXqywY6pgHZbgVEI4mgTI2Jb1UIVPrRESZ8zILyfLCSCyY1NJXlcf5InIDlYwfUe24BFoYS1sAJx5YEkVVx6Vkg0iehUzyooSDa%2BhupfVpElAelO7FRGHjWxV8VvystEZ9b83XCpdTsa9vWcot1WEZcJIx3Fj%2F%2FxjYES1YSCT8RxbF2OC0TxeT811s%2BZkBXBS8AMgDgi8rEESoYbmhHjDZMhZvpuClydQLE%2BSOq&X-Amz-Signature=839391c0a96a61264d162dc880cbeeb5231c7565ac6827596a791233b7a33123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZ3GLRD%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpPD2sluMBPQCg2pNnRy71mFrkRgpjOPKKbngQ5OVJ1AiEAmfq1QwU4EMDWGUSngSD66hzFy%2FmCaE%2FmgdieVPhEi%2Boq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJG%2F3FXp8TD0ezcfiCrcAw1SmDkjOaLLpj8vdVnQa%2Bn%2FO%2BuV%2FFa%2BhlBsmJsrhntfIabgiZTX1A4LyHQLIouqKz5Mb8rL7S7Y9BeTAaDSQzB5XRKQVTU17Ijn7stBRLtmZp2QgQEvfrwD0jvf1HoiHOYBCtJKVFbkJ4XStEC1O3TUBkFoB7Cpi3IdY4MDUXFTOZ80M37cPhWRxSotKDF8WtEAAtj4wuhNUneUF%2BHM0jz8tQptPCF8wteYhdewr2lroWtZ59whqbc7D9Q0jXqd308GRx2BwaYSCyHnN0nzrJep0tXTTlOVujI%2Fbp%2FXzY0yW0MzC7peCKHKSRKlz7GRC3fBPYQwoqClenrtymH%2BNoxXClYlSTGn14WtL6Lgd5k4wa400XqBp5GpVpDnx%2F1bXIZ9%2F3ipYnMm1asiFwGRNGcMT2CXFAGwiDpl4oZiiKYgshen%2FBFM4qb71qd8hhM9JQGVfK6DS2oO7K8phvktT%2F7ngLPAuVWBFoBziifFNCAo%2BL5OQU3Cd4oda%2B1BjHDwwpWhsek9kT2iNeJ1tdHzWFd1zlIOTmopkVNbEMfhujgOs7loU7SleRTOqsM1qi%2BvNDZQjkHE%2BFyMDUKHG5Mu0ximLtS58S9JpWjQt6MdE6uLB0%2Fr0vkTlaK9IpoCMJH26ssGOqUBkaNI%2F7DpFqRC9TBNsprcLz3PTYBbNTzEM8q%2F3fZH0c%2FZbN5ujJNoB3%2BGe1prsj9oV4ktTjJf3M21T6RPaJejOyoTEe%2Fvmyt51mPltM7kddNpya3lviWcBp79OmGYVOguaVsrA3tfwvwqBQDA8L%2F6Gq94azmMjkGd8q1es%2FO1LESWxwuSVQHlEW72mlQ43Dcjb%2Fk9pHHXnH8fzBUrXybzK2kfDTyh&X-Amz-Signature=669827c76993db268e8720ea1820c133b78077833832e524c64847c82280bc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
