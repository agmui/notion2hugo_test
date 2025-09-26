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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CCI3ER%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSo9r%2F8qYmtrlZiAF%2FGei%2FapFdmqDGOfiJouZPzaJkQAiEAphbzdOGurNLJz3LxBZ6egdmjoCU0GzoS5F81varOUHcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt%2Bx7Ij6%2BSNndMmAyrcA7ZvMKSs80LmPsb6voviUGH%2F9%2BAo3HgDFhIG2z5y2weMT6VKBzHRLEbFA19VJPCeco6%2F5tb%2ByVrZzjsUhneMYbpCuNhgpIJjrPJGGy7KkFfkyf6tVQzu7N3T5yLdgMrjDfKUVS8v%2FBRSRTOH4ZSlUU3ocPhkFQYU3Hr1y4bzvTgq%2BPDp58LZ7TS17bplY%2FuW6VNs2i5JiAIE8OxEPr4cbRWuXx7BHjzenFTlfHn%2FDynuM%2FX7j4oalDvNOtDhQAn9XKwFKBJZ0Q4jWX%2FxK1VnI8%2BbmWhN8CjEYv6r1MgKVAPUBcSCUZyvW6xBMAGd1ILBlChTOgBJFi%2BK8iQSc6LX16Goi3ObpZcCBFup9CFlmu6Fy3Jao309V3tLTXiqI5Vf5OC9mRlumnc8Vs%2BGKSgTBQ5jiiGlSwdhlGjEewqU5FsVTidKggFtAYz6WaGzTRJCSXapxKCBw25SedYVUNNslaVQKpDkAyM0rXdUvJtfokOH9wDxfT39lmfNbBunsQrW%2B5CH9VYQ1DFClVab0BVI8JI8J6VEoWpU0Z1%2B8MBQb6BzN1QKA9OU%2BSwU7hde%2BOWda4FVdD9Gt5lM9Mc%2F20U25seSkPqTWjKJdt2cTrRGLj6eEY4LCK%2Bt%2Bg5Dw8UVMI%2FV18YGOqUBP3s5C%2BkJOY24RUjMRLmd%2BkjKZVE%2BwH%2Br1HLcsS1kf4Abr9SMWTIUIQZ%2FSowVxouRRUZJp3G3n4y5HsvqPXMWSVdNCBO9XyRXJJzjDm7b80JU3yynZWBqmeTEVmn7%2BOgHl6c6eqppvmSk2WTn6FhQfxPQbcBI6ClfvafmnGgrFUIp%2F6YMDnqhnzIMkrJXSnpRnVasFei9zuBjNTGaa9LPXjdDsJqO&X-Amz-Signature=a7f8b2be07a993a1c7b2b3197b4ef383edf65cdfcc08fab67c77f4a752536e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7N7RRU%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZxwXjCxvyxEn%2B0f3i4%2BXwdldjRoQrfUbe0v%2B8OX0D2AiEAvpt6cYjiHPuSv4nbxpAPqQqL4D12gkM29vfqXDMAIB0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLEqBRWyHaRDUpuvCrcA2kg9utMlD5%2BTlUq7otFm0JvkqYEQnATwFv2ppSFV51DquVJ904%2F2ww8qvdd0B90jRJ3VARydlve26je2ql2eEJedpTAP7fzzC061px4hBpIQFQx0Kbvjj6MxhmZ35O1zqpDxVZ5OFavymOnSHMX%2Fn0ZHTW%2Bw1VqNPfkewW0Dd9LXgbIS7AfIOgf3RTZ6szAGPC5pdvxq63qp5grGs%2FcE%2BN%2B1FHz6dangiWrlCIIijCD%2FPER%2BuDGH8xEUA6Mn%2Fv4BjD40UKul44Ei8PeBIu05e1q4Ztk8Lw5FQpmBo2Mw5vURuGfpqAGAc2imrrzERaUmwrbkjkGjY6Ea5YLML0i9KG6JsRvUmGeyPE2qiBKtOHJcPgB2nhQDpTL1lbmIaXdiYY0MuOtaSlRuXmCF9B5kcwwp6qU7XcYMS2jM7%2FOcPLGP4I484zGIjG%2F09ul4cPa0mbx00ktleqIL1Rb0uECNLcT%2Fx0BDzwh5RsuNIr2S2X15zFY6tRjorBCWYAyJ8voK3UFe6U3noqYYfnP20hpRl1roEQV2U6pGsFpYF%2FYeMXX71iEXQ9lMvv37%2FG8bB2ebNgSvVAOxHL9jLegkDKcZpH6%2BdyTyrNosA8H6FKzeWYZbv64kxP1e9b0D0PKMK6o18YGOqUBvQouLxd4O%2F8009uiYsP4G9QtVkxA7sETSCeT7614oFNNmdldlAx%2BOtrDvBL7TXwS91WTnityY3B%2BKzQK8VgaEpuEIVEcTV1hHQffeB2h7dsmV0XCM5hqM3v97%2FS8miGQnzZjMfpXSLAKlp66CU1l5LtO1xOMDXRH0AFwE%2Bxac0RfHveI2XP2AnGphBqDFGXJk%2BViUt%2FlaG0RXnO6ALz%2F4k2rl5my&X-Amz-Signature=a6fe5e4e89f0b043e50e17f4cd61e7342b5cd41f7d14e80f423519c9fd1b77e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
