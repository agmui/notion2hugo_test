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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XAYL7U%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCNKRepy4jNUX44CcsN%2Fr8VpP%2BJtG5uLfm7WdV0p2E%2BPQIhAJx0qZ58pukhW9tu7tjm1t3FaXqVtsklRW2OU2xPAs6EKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0%2BIlzIL5oQNuIsoIq3AOZEb2tPaU%2B3YTmBBX1ojZMlGy8QduDM7zn7U6FjOIpGYEtMwLKirDzQFBMFuTVO0zbRsYdOUho9h%2Bf4A58tWIfQQ0gRgnGdBuD2GylxpOCy54H9vCjRGrCNXVa7Jmp3ZRfS1%2FxFfmC1Pc2zeUTqBsvex9417TuHKfbFi8oWpW5ruaeui%2FxH1QLtUzwqweVWMpBmnUlivVcbWX2GXIHIq5COvxuRSBm1Q4Uxj%2BO%2Fr1lgEyslPmE6sC5i%2FIirtCuvlN5lPo%2Fu%2BtstdtvNcrgPe2nvC2xHytc2%2BrRh0OT%2FbgZq71PYyiTp8qO2s8slLxAdVfm3dqbuRCHdr7ikbMtwkgjLVf1tsAVwbTOTHR%2BubJQdq3UKyuNs0IT4GowAmV735yD6UzJkSxHfHT%2ByCULJfuNoIWSKfjxowYCIdfxJIl5%2BDRoKhNoBD6JBMkYR%2BXCJF2x9dlTLM1nEhrZET%2B5gjPkJb9vEpQvZhORnw3LsPmfkUMlEXv2vG%2F2kd7tNfkd0bHRb5VIjVl9RSE%2BLYnx%2FaLF4wBmmrdhLJWf2smoSPPIknS1JreC2%2F63SaLhXuvccCUkhWMPrFZ6vrRsN4WYlwMRw4QKLLidmQqKhbf%2FaJ6MMzuEbljI8nW7181mOTCy8pbOBjqkAXKmRFaacLGxp9eJeKt7pdCJj31EQpV5sKDtMB8TIfEfpLdlub%2F8dZBkQfzis%2BR6Qc%2FJm%2B6WMQjBNjizcOFJgTE4MZzCVWNJ1t0nxgnmzrimRmmOsHXVVYGb5ilD0GQxd9QPLEoLc1cD8QyZl1cqJ8W9tRQWeRUKiGow4mStvjfm9NJJi%2F%2FdQnZoODDw9qBlCjc0o7r3PJrf0r063rG6qOcqCb9g&X-Amz-Signature=efe98a3fcb9664dc657c3cf80bb41373906502dc424f741dd7171c61f2beabce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TID4BNSW%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDM%2F7W2765zvNqZGOK%2B%2B8PrmDadw4pp5sczx%2B2ahGR3AQIgX0%2FYl1uXnWygQCj7C0c3DaMjxu05CboQV9eumuzmfmQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXq9MIh2gUW%2FFMxbircAy3tMLUpmaauGn64i3U9jVMGh5OaaN9cwkNumahuwrTnUFTiBZYzyukv7WoTjgOMZPNwpWUuaAsGEx4N0qKzoE6xFTx4ecu1B%2BjaWEtuL%2BO4iwMx%2BqZ8zXK0UvLsiUd8X2kR%2FeAjAdVMp1rXvrvFtZlZMVWIyJYMrPCINEvuN%2Bv9D3fyvtk8TiJGhRkVYuqypjtDaJB2Yb%2BDqIVfZVvwbe683UrBndeJDkCVHEZDwlHVTHdTxzcl9EgOd2FZQbx1cF1mtvQQkSto528E3yYy7fxkV%2FJpIoO1VTCTqtvGw8sXuQLs26C0ilPnXQKwTuW5p24ts4qnJB4GoV3CsOGZpRNpwXw9sI1LKL9OTO%2FZPN8DnP4IliftuFc9CxcHwucEouNl4MjSq31BKBLXhXVcgbOIYOrwBJqGoU0ynGGgYUY6hLKqiraxBV%2F%2Fiue3ZAspbxTk8A9WPhjOhl0ut7%2BrwucfaeTBfIsQDu85uc6%2FPBZbPzxMKdOjz%2B4%2FBV1O3JwSEZlVRdtGNJtYxvlXZUUvH9sg6Nazico5%2BR47TyCZpL1LMczOs%2FkXvkGD93ZuZflt2yJ6myykAd6Tc%2FIeIyVWVzvqz7tKqs%2BpaNP4W9%2Brc6l%2B%2FX5ToxBqdnCAH3v8MKfxls4GOqUBqjelvcMdOTIlXI3PS%2FXvIVERhDaSiZvzT3QDIwQ0CwX0M04eUBaNjzts2hwQIyTIe0pHlP0ijDzH%2BnMAzvhekVRFTGMxE6hBH19Uys%2Foeove%2BTJ62vp3k9jn%2Fxd4%2FaZcmR6MkSCyNrnTWN%2FU2pWMesDyaU5rnZtewqEWy08xwKcH%2FOQLXKJYcTCrzB9wbg9uSwx1dgQB1eRvcSu%2FRa%2BwbVWO4an1&X-Amz-Signature=58d104d4c47f5cadbdc409036b4f733b715c4c21c2f27d4f678bd2def82f3452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
