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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5EKHO3%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD32U1wjJHdF3blfimcB700eo2ShEjlHgaTQeo%2FJfpjDwIgQ0USqtnMY4O2IZ2hNUpxNHBs5w%2BOFWqmLqOkb3Tiy0EqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjLnnAwy07dRFDCLircA8LYIy56RoU%2Btb2uHlfVJw%2Ft7wF5VIhIItgS1m7CsiqGQrE%2FJuFCyWFN1f%2FXWj1%2BepiP16pJA8MKzmVB6MlNnTllsZvu%2FgAxK7NAMh1OvINZqkI5FN2QYcyDCvNC5QIFyVIG%2B6i02Vu7jlW4Zbk7%2F0paNJGeMAgoLlfeBwK55GpnlcJ2IySmp4dwIVwab3j2jXOEFm%2F%2FWKSNdzdWvce45Asjm6p6u%2FRR%2BYvPWJaqoCKYu%2F0K3t1UHz2Ib9shVncUrWa2I%2Bs%2FXAeCVhWXyeGfkxnKoW0G6UD3N5nFxhCJyrmuxa5AeNx0Y7sHbXAjCA%2B54iGrLVEgMLLsfZeYKqc8jdTEyiOB8ZQXE3Lx0lqoUWxaTXA7pqAU4MvSo1kWiS2HzGZ9Lepn%2Bq%2BnHrLd4NXaThrj4cvC791n91rZy%2BDberIsJomf8R8LuHjb7t%2F5DME8aGMY0krxaLyegRUV9a0Xt92fyXv21vVC9q5rIUrHvv4Ama8eeetolyx1gwr0y49YMEOttPITVk88B3Zpu4WBQZYIcpRGbyfTRnsBpmJAJnjoIr0gcHSj0%2FNUia4f6XZN4VX%2FZZ0n5u6O6CM59uAyAfnIjomu11%2BcemIDg8%2BZdLDOYXrdqWW5KWiAZWbfMKGUsNMGOqUBcyAlppKIbb%2FyI5w%2Bq3U5tQGiOSP76ddNS4fwCNuT5DD7fUXuC6ekLXA18ZjTZYMknlxXZmIEX%2BpUgKO4gZb6g%2Bys3l4eeLa%2BfGZfbESm%2B9BMNdAvTvC8s%2FhDvhMn85vsk0mlVn9TrXNFMfCbfZRejGw8U1%2BvTrXrz3wVXp8e%2FGEvZgRiWHl%2FXZQp12bGRIarsMGoWsayc8Zd2pFges7GCcm35lKk&X-Amz-Signature=60226ae1d961051508bd9cc4314e222d5b0628c2631bfb1ed1dceab97e2a357d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPCKCTB%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1xD7nHCh2eG9kKp5URL8%2BXFExUZbKbn%2FIH8pnstCvYAiEA%2FIubDw2UoN6gqhGe9BHH6cW3v%2FX%2BeN0PjWj7jLm3%2FMQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUlf7uoBJtJ%2BqYmcyrcAyBJMT8UD6fAi5%2BufYY6414aI%2BjxMZ4uWNEI%2Bf6Gtr3Bj%2BSDEeR7p7w0PN4tE2UrVr%2BnxEECzGXFM3h7G%2F%2FeO96kqef7AcXoDOv%2BkWcki5Ka5yx2VchxVnhJEIgbkDaDzzhyvQGc6yiYoShVHQWcGkfIHUlvP1S6xRMyX7DkWnBXqm7UHajW8gyP9OWXtUei7%2BhiNKl%2BtOzwDRw5uwfto83s3FLA10e6MQ0zm52YpIWBQbZ8IXgyzj6XYpk%2FSfMK47x5wZT9KrAUw5Y34hPqaPm%2F%2Fqui77AMSi2bfsgei0FxbLQ7H2H9OK2HWibTh7EuhtQZbQEwMcFCdIe72l6KovaUZWMKY5yzEeL47MvmkZsRwp1xD%2F%2FVIE%2F%2F8qt%2FHWilO0r%2F3mFlnhntX8S08%2FXU%2FXq0nhFzAwggSqe0soVfPUddPEEbcqwHp0K27wZPRRhn82FNmMPt1vlh5YfTr%2FRRSbUhq1qwj9K23zzS6ElsCv0pMu0KF6TN6DKQlKTqiEN%2FBse8J%2FENf9m2yQFygJHGT2yaFXWiTCkb227IlZi7ExOznTbOkhluodPmB%2Fiu6TtOf16HILW%2FshRXR%2BdHZLffbzyGLGYx9i%2FdG%2FmNAyStcD2C48fUJItHNynQXIt%2FMLmXsNMGOqUBKoLgujZixA21taVhFKAZX3%2FBIFTFaVBQHGY%2B4ki33XcDwa2EWiB0s%2FnN3ijSVfgFmPnmX1760seSmiJ35J9gcayLEL7rOEj5T9TOMp3KJaMNdfrEJ%2F1mm1p7Jrbtct%2FTRhT4UFZIrypipTh3AjNZ0MSt%2FiPUK9Wzt2tiSbup40%2BdU4OpuhnRub7GCQQFDOpilfNd2csk9zoHk8qMPh3PbYwK3L4h&X-Amz-Signature=55a567cd8b9a326e647b8eb4cf49d30897ab5b2706f7d0809a31739b0501ee3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
