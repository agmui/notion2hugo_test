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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JH3I72B%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDYGQwniEEu1IlgTgH2aYAOH9es9dHjvT8XprfCXENJrgIgeyhn12%2FTasmxGzgQYKNtRDJGdrx9sqP0rMOrFbSkZGkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIIya0%2Bwrivb6u9CdyrcA%2B5W3fer%2FRcIYtDsTARPEfhMIeDA9IQ03TD%2F%2B%2Fv0E6KDZCFtjHxg6SAb8SZJ1TkFUDomH8Xv4Or8wpLFGS%2BVEkdSR8tnJQyybIXpXQ30dY8UAcdHTed16DPWpvzZzM6C%2Fan2PovEdmSvBxivjbMZM%2F4hw38cHp6x1BQ2m8YZP3hywmwyE8aWbbwRRf4Q4g7ETBLkbeLh2VA%2F3mPMX6VrunN4q2nCH92mZJEgtyS0wRBnfYVSeClviG%2FTQ%2BVjO3wewTJINC8kg8KdmSBObIjISWgplgKUvbQ7oH8e6LWk%2FRA7BGi3oDk3MaTr0fiQaaDbqmDlexXNQR6qSZqochQSYDFW2gna4gSqXknE047dSWmUfprmO2TO7C9WMFVpZenFtcUkrATrf3730bgG%2Ff7SRCPl7nzVKFdtHUHeI3b5mlAVZi%2FrH610Ngau0Bi41jt03l9%2FZQwVUVrHNj0k5W8TpHV4LVtPmu1OLl2fNLMfi8QNbahYUYjIMt0SIjfmTodXW0CR%2BJUtS5M%2BRMp%2Bbc2JGEJpPGCgTJuINwgdWfUMYpWDvj8x3IQ94gMFKC6db%2BjnJqEl4dpK2wm7ICMCjeO9Ni5q2KKvGKKVH9O1BnvbDlZccKlYcAnQgK3ybVDjMMDoldMGOqUBr8WujfDd44Y81TrF8E1AHQ8Ico2jYHDIWaskrnIK6QiJWNIHS3Zw2WPCMCULJRswv4%2Fkp8qBdtAG7b32Bp0hbIyt1V11YR0ixMlkgL5RA%2FkLmL9bzQoMQwhHqJWnVN43y2f468oiyMz4PL5Hixulj%2Fon6NTAFRoJTk0lqRhjHlzUyI0V9LilKCrBzbonboBvT%2F6dqQg8rC4CJ3AuPsCuY6MFrk3G&X-Amz-Signature=24ed86cfeed1125baed174128c921fc0687de3b96542322c5059a5285d52f22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMEPUYE%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEyhafheUd4Q1YoMY8BBn7GDXtyrSyau%2F8SwwCiFqVbRAiBKmyvVajF9AXDNZ4mkmb8iO3y%2BJLRbLHtuNaUxmp4%2Fnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGqMIllMU5aqDoik2KtwDKC5CrtDI37YZSFvp5Qmx72U9tLda4G%2FYFU38sy2uwL%2BAg0XWg4EOUUpH%2B32Gr0YmqPeTjapV%2B6DLFUL0pUVhGSm44pbYugWJc1GGViBAvWB4QXZACb9NdNqcP6d1iVhRSPDmw0BRieSZAfXxLIlKFei0LXxi4bPetCWV5MC4PBibgjodZuwM1zMNpefJGeA0pJSRtUnjS5Ut8k%2BioDls46ZUbF64kIme7UC1rO5CpojZ76QOu1FFqk60QV5Fsdm7rXPwwbiJUJdriHrz5eQcgFiA7qpbBwRl62gqONRqXBSlY7wMz7UVVldyGMbtSBP6g9W5H7b7A3pU411nK0G%2B0wN1Fme67DFpmWoKhoBXPVRToijF6BOas4nefsk%2FXrzcVbhz%2BaZhMYLcIZIYmWF%2BH%2B218UCF5xq40YCp6DrIu0Dgue5SbY%2Fc8rXvVKV%2Bn%2FURWqHGE8mPQHYK51oA5GpLyRvDdogIE5SzAxy9sn3F75UKrzM1I9asLl6bLN2zdba7OKJEbmL5Fdwj5dlAcPuTjtODO8e6y4vE18kzCbx%2BvqmVViArYgDBgzrr25zmACVo6AIZBOob2nB6n3hHxK8tenVnPTGG65%2BDkZkMeXRWWhm3oXEanfuVqzi7m8cw5umV0wY6pgF%2BgMcyeS3Orq5XlzoVa6kVbbNM069FeAr5fAqkqxC%2FtIRoZ1AoqqRhBPXMOKR3UlvcFNRBdNI7A5vdQXq7gAlBMpuvnaZCN2zNEWGW5SMuxyNUIN6PsCZRhxT3pDDmB0HOt6hjVl0VNSVk1E9%2B0pLYTxn66HtmKT%2FDSt5JzHYaJr22lYfBDnNeYTjYxunHAoijfyyDMgFd0piBLYAuBcPXOwLgDV%2BC&X-Amz-Signature=bb1d81c1832c6ae3308ac32904ac62f896daf701f71f3d13e19863175e60f76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
