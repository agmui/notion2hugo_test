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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B54MJWR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICK7ZtHpWHBBX76ok1oIVqb7dIaRV%2FwGK3YncWV8FuQ4AiEA%2BeaFGWbvC6VJiAKeqJdBLwv8kPoiMqCzfzofBu0O7cwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCMlAwPoF2K5HMGdircA%2BK0jkh2Rxh9rpTJUxP0%2FsxJ2bGLoIAkTm4InvdGei5CWN9V1AT7eendY1NrkPV9QEpG%2FR8ed96KxiPFreOodighI7qpxOmj1AwqQF43eJqD8HNqAKWOb2fo9D%2FBMAgLQbDhlNyEl4zNqNoXna126jduBzc4nRkQLDFZO%2FTbScLRLO2Arav4BB9XK8e466AMkVP7rmnSECgIr%2BWJnQmuPdlVCavP4WUcLW0fPQ6y7gj%2FWxTsWTtAiq1uLiNAEUYHNhdWGVlpsf%2FyJ7B%2BM1FdIQnla38Y5uOUxemgcz4Yoey8xw048JVy2E45K43kUdet5k4HpOqGnW6GKwOOH7lTg6cXCnKLQsHlbFvRzVylZoczQq4EchmhIV08lhzbVWymFb5CdS1RtNXDlGR970nABHFFm2FvGo9elRFIeKXsR290bm3r6PhytObsV%2FA3WN9px4Xb145gEulV48CxMihr2jkro2pdkVGsnTgpjyVdEKGL%2FTRMza4wGndLda4JsrXSLnvBzp1goXR%2FqNisitGCqG5VIjMQ3vTEVN4QYs95zLDMFQ3tCJLD1ctl1%2FwuGzKdMuBXi4PtvKmLYgMsrG1AT6utzVoCfHrlQi4q343HkTiCxoZX75OYipoaZmZwMOyg18oGOqUBTMrWuCmpkIcDkXiCjQOVy8TH%2BQHkqvhMQFJuhiDg5KlRMHzIUDaLRHigQUkE4UFVbXfA0GwWVj6WPUyupOa3nWWBpJf8ab%2BLqAeF5NkK6Pw%2B5zaghflNJOy0sdSv9XgVYzH0XKb71H%2BvmRP69cx%2BhI%2Bseb5F6uXsBj6Mxj%2FGbwVyt7rz7iGg5Cv%2F8ftOE11TOMbBf9C7DfmPhNYscVphUkT6wnX3&X-Amz-Signature=73cad0ecf65cf13dc57da64d1cb0a6e1d86f9c973d4b5b610c0a99bb89402277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5DA7G25%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGvMQBgHVaFjY%2FAKUPEgmQQBixcKh4GptSqXWGV3FpIwAiAMejmVhl7YYoSM%2Fe9It21%2F6ryAw8GiVka4cph4uX2PeyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9OQ8%2F9YruhqDXgd0KtwDRikyqwUuu4smGeUzQ7sgKQlLJRE8NX%2Fzbu%2BsCyuGzJFfpFXBLsigFAi9rSpnmUSg5YemTTwdMDzyijSCRIMRILQd%2Fk8qnLZqTyN7BjfE72NZ8wY5RHgde8OQWRIRbqTWJxqt0I3xH%2FcR7sJNel1ZNCHsNHeMjJh1tXuT71D7jw0YikzOtigGX5lSd%2FAdSVIvLuGt0kUwW2sb5pLcsNmcL%2Fm7gwkRiNlx2rgSAo8zLs2pZ8qWtelvSILZMn2dGW%2FQeGHvXEyoTD%2BJCuDGI%2BG8CCIHreJyq1NERxOI3PtEupdu6RXMZ2ZoOw79fYdpy93i8KlxK8yvHExhvkQ2NXaQ9RciMK234rhlpdg5Xg95TBdVfDZu6kGM6hPiVMcWX1%2BeE%2BbYTLzxAqDVCcNn%2B0WLpLWWsJElzh1CQt2pnrvT%2BbqB%2FZd7BatfKJfyY7W7bOy97hIHXe1ZYJspGwys%2BtFOHaf%2Fjnkl%2FHVJYWH8%2F0elbcjVrCSWb5BidCNpcnHEhOh8yFsBkzqUq2vm9eGYErPwTTPfOXEQQqxnzf1Mj%2FVhEm6M0Yx4LXb%2Fs8C42RUPInSSmkX9vZqtCTnj%2B%2Bj6HbmWiex%2Ft0JyFJfSFyq1babUYxVrhCVOh700sgU6m28w4pzXygY6pgHPHu%2Bkt6BUIaZnb0SOOd5sUvhJE4Nx0fQPl1bG%2Ftc6hXiH6lLxZqJF7bBwylEbKWkveIdkMsvhpb2B5WkGI0UJoOda1BPxgP8UEnWDjg%2Be7%2FjpfytJpkBF4WajiXBZ%2FPn0LW93%2BEb%2BRGWDflk2QDEVn9%2B6n%2FI%2BLElSY%2BrYvUKXfPIglRg3gta3Uw3XJ3Z9BK2J5hyZKIlfpdkrJ3KClI%2F4mNqW9w1y&X-Amz-Signature=6724d453f968c27f1e18a1d067739054b516402c79b6f898d58175ba2736cd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
