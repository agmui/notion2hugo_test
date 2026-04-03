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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPDJEVA%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCojyd%2BEQBgLMm1xhf13aNw3QqqsRkcmEXQ2%2FHcxmmYRgIgKR2MCWsiiMc8jcxct90P9RP9FosGQxqa%2B6R7hG5OqB8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF4Et67AbgojX7UgpSrcAzbg0sK4xrBJBXwIGwns3hifwHOPC6Ni5RQTRM1A6rAwPLM25YPRRfYGVUb064Kylbs7y69BF7uqbFlv9iCphsYHbF09mcQNgWbFWP011UgmkPUx4NgaNlAVqyma%2BQCPnKE79nBpcsxdTDxWPmOsjm1wbIfki4diYxN9kiBdbVyhMyRO75uL4Kq7F61fcu5FA7DIm6ekGFVUG1ucORSmmHTZdfVE7Uv4CEPKYwxv5UIg10A04fZG9cK4gRnsFYfiZXvIpi7s5v6GtsLhYkeMWu1SsQhwT4%2FRmzJz9rTnCy%2BryUAEiEuUapzflZxVy3jXX1pSY8awqq75w58z2HOCb%2BrpovjG6yZAB49vOod08nhxccPPeIOXrmQQYnsQEO5bn8SN%2BuuUdn0sH%2Bt7KtipwwkD4%2BtwkUjrKIkkiHaKzq%2FbtkwoN2lEW%2Bog0Xw7wrtMxjTtm5wsrQbde2Umy96To5xahjjFv4P0WCDyEtVeJP63G7vrHSi9ToFwWgw%2FWxrfTo5ZrlpkmpLi0RMwBY7KeEgKJN4kIrGsRCnWjaNryoopuVZ3jcXaAmNx2X9XZMKEsh3a53OzcdsMpU6D44GmXb6DnmTzUEQog2GUs%2FQaBnQkZbqmcGmgHvk3rUhnMLnFu84GOqUBGhpzKh3%2FI9NDJ%2B1fio3QJ7xZydxXIl%2FhdJM451pmEx1fXdTysZa%2FwMc8wkBgODv1lawn%2Fqdoequ20dPPHp%2FUJyTl0Wr2eyZuGuDOEfeKT1M81MT%2Bgx4qA%2F6khtcD6qD5KSDMm2QNJ1THvtaNTj5d7bc1n1MI3a6ovir%2FGKwxIo5RHT6PkXnevt9tXIbEKmufsto6T1WQU%2F%2FjypCPNGvZYK40IPcB&X-Amz-Signature=6774db208bf4d6e8f94d14211eaf31f650d53e610f3ee9e2f2bced0ca4367f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRKNWZU%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5udPW5vOsstEj0D6GNKiKLxzgxcXdX4WRZ%2FmRxl7AxAiBgCJh80GMuj5uX5g6quBqzI3kPzKm8%2F2zlV38v4iSTzCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMsiYOKr1G2hnrX%2BiqKtwDOLv4bYO4Epb4E0iikL9Eo0Asimx3VgT1qEnHqk5dTn750DvXfGNI%2FmZS86TfS4ZiXdmrP8yV4OR5o0w986h%2B8hXWohtSm6VkSTq6iWIdwRxFTAIk%2Bbw%2Fsc6je0ReBINO2gD3CgmSfayrWEqmHgKLfkWlAlunApcpPEl0nVdXh3KVoqv8wMreInjrGnBDdCr0iDCwD5mXxsBc1dhI3cc3AcVZ5icPXO5NC%2F3vmjr2JD8VzbzI9fR8jRGKghHm4pTzZt5H0%2BwHcXM7FsqYzLU11G5mA5N1nxpCVrgO0XNSFv3oaqGgHHRbYnrFJw7hDJ%2FIJDlmcu%2B%2F%2FDdZ6bPljHuBtw3hFVorW%2FHeUflzPhVk%2FsqmtTsDqZ3x7hRgKXiTw%2Ba3VHTaQo9iB2oRhSHX%2FxLAIvjumVnXg97q9LJhVjX4w5tXFn7EYKNFiIDFlCOor7iyj3cOLjxOPDvGKF%2BwQO5sbtzeBNq1w54Kgc3UrwtXLB6gtCnZxHL0XfLQbdJwiZsafze5DGFLf4zcs927cR9iSV4oOvftiWdaYcJNwOj%2BnQ490ip3zCe7YuArr6LTBKAxf%2BFpRQPmUfmoqntzzx6nBzoLE9HUGXh4jLx5P0Git3IpQHVSfuzNiRs0LoMw4sW7zgY6pgHlxFDqrohuX8mk9p2R8DLbrEDMu%2FOhAWJIZQuhWf6sKsMEF2Hn2QURMouKWs1S1VLSpbRYbIiXOLLh15yAeAN9Lj3FpjbOsQwHOrRWOHM2Rc9E3AE2SGNQ0SRWMW7tZPH8G0NuYNPGFEu%2FSu9f6WA4sAg4amlitbM5ZaMxEXFqthqwGUUC0I%2FlS%2BjlRsc3bAGSE7YK0GbJFStkmU9EqyZxYk2D%2BkiC&X-Amz-Signature=0827beaa3a7f86c8729f9686e1e56acabf4e3ad2f968b7c10b0b44d845b1a70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
