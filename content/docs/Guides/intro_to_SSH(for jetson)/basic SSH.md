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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAZFUDU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEM3oMR5v628KmlnfvEux0q%2FlN%2BmZ%2FAbcGbCpFv%2BhW8hAiEA%2BtxKKu5J9Ray5zwd6fEpCZmnkMKTCyYEwNhAhnPrYhMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHeJFVR1A7fx9r5ICrcAzXk5FRhh8pp69V%2FKLqAKn8GsyXVSEJRmohSEHg7LyKjNeIkh0tmDs9gF7Ci6oXXoyrItKgIswriqF43SYKtwroHUv2lPBRz7C%2BH4O0PFaiDIeULVCeekcNBviG2cxR%2BNXFGMjGv62AhWNtD%2FJn%2F4aNnnMK%2FaCZmC2BMADsk3AwicaR5JWnYNBXcdDZcv2wAGs08m8KORipNTkMs9d2OApRTf20XpzY9p5k%2B5w5IgMukzhNrrXAz4KzeGXb1TpKjOUb3NtguBpBgOuEgVn4G%2FmEHiu7ax11O0%2BwsY4GzyGoHPWCnwo8MWQODKth5ShDfbkxn9A68JhpocdnKbOQeJTn6ND%2FadvyWe6abjow6sJr0w7%2Bgahg%2Fn0wyLJ%2FHmfnVEzRWk%2FTfUSrhasf3oIP5GEbYv6q48GFdyqP6hjHybDwE5A%2BppTfGnE2fvAgPvVQ55FyR2A137U9UkrTpIXodrg%2BjEikDXWM0HGA2NvnAxWXZiLN2HX%2BdHxVNwlGAfgQY8Frxryl1ER434z%2BkIAg0E%2FHI1wOEKCaQxVPmuwGCaZi86JcHHgd0EGDgcZ%2BK1MOspbGxjAtzt5vCH2apqkmTgb8LUxZ91lc4TSBtKQTDEjdNvH%2FoB8cIjutNq8WOMKrs7swGOqUBl44A2wJrvYAh9aHzVnYhViPBIXy4diFYTZkvgA15Whj5uc0pB5eUDDaWucF%2B66Xt3KMZqDphKhvmrs27%2BZWaH7pZhzPA0E2KUaEumFRCVGR8zRH%2Biv7h9rt9sCVvpx935bRu7rjFe8WABWuZiwHrRgw1MQXzHBn8gsOGSeIqxs1d7zmVmAPr5RYL5x5s7bCfqCipRsmmvcW%2B%2BnqmSWEUR0PxeBAx&X-Amz-Signature=da44c66e43da41270410a1fc0060409b729479e3ca282383cd92e19ff81c9e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTE2BOQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04gb2GHOVRA4PfxjaLkXb%2BvdTwck2FGUZE5j8BIedxAIgLJ3IyZ88%2FuPBIM0ojV1QHnC6CUqNZyL%2FSgSKisHcDDIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrhp53sPHCquVRUnircAxmrc320rjxvbkSHk2EHFp7I9CRW6RFnwaL97q5ljqrzJGViK8mFWagTO7j5%2BeFoRV%2BWcq27ZDZO9MWu7W1UPLpu5o%2Ba3Xe6QcwBrLI328OFk08B7U9tz5%2F%2BlBPxrWKXDCtjVCcAzbQKz9Ky4%2B5vy%2BmwjpQo44434pJhgEqj%2FN2QI%2F47spfz3CDhAjUIRLMzmwaDMCxAZHbhaAB%2FNDqY3hceDZxj9YBlpvbCUjZ8%2Bwv4R7nhCwGo5lHy2Mo2scckGGIeGIJOUc7p4TR95UcBhubWB0BcNd%2FtMxHhGUmTRKii6aG2hJ5Ek7BxBkXZQuc90HcTWVrGYIx7v0%2FC%2FtRCgG8pTgDaEU0CawxroaFZ6XRmnRBmnHC4QVs%2BX5ugMfg0MvARrMOnDvHgkla7hz9KGuu%2BuWQXucUv%2Bfy1fmqICrtu5ppzP8cZlVcQiyiaZYHhpFlOg9HvT7Z74lpNTrTCCL7Hux0RYXvRfBX6aGf3IHOkjqVBtrHSzpfedBOT0kogfzfypC6S8ukGysKXQqFhWabcSDA5zroi%2FSac4fA7tQw0cl1cpR9Nt%2BM1mVAF3QkI2MiHeC9nZRljI23MGBKg%2BsAWKGY3sXeBfGyR%2BD0oQGP5JfMc67DnuoHND1xpMMTs7swGOqUBSAVjxZ4elyci8clAZxow8zagGkRBuAs6BWhYWJ8DEtJu0HME0TDkPl037rbm0HGoGglEShwOffMAYU8Pagj%2B3PgsAZSJq58Sa5c8e87M7F9HJSAAKs%2F8HM2eAsKHJLvtJ7HcCSYv11op8mSGHzJSxNmXOdQWXryK9S9k2xxFzkCbumDXCdesBoTtmblPun%2Bg%2F%2Ba5wy%2BGWaHgPLwzg4opDLtRQsJY&X-Amz-Signature=d26cdd6a2288868e41b6f284dbcbc0c153460ec7d2c4b43d3800a19764b94200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
