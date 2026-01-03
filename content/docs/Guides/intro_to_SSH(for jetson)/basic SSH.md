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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4U7CT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFgyPBd1CKwReEvy8Vm%2BEbu1s87K2E5Q6VzmRaA2FO4nAiAJtJFKhXa3REXdedhoiCxHnzM3aGNPPwzKtU24Zn2UWCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMOjxzkFz3L0xreOTBKtwDLjqdxVsq8pCEX25NNGJkJ2qXHIKTDlgqPOcesXMxJy%2BjL7pRZUTDF650JgR9qpeRvvE4V4U7mOtpyDxD0u1Ab2F8SKcA1rsb%2B%2Fx6nttumk7QN09UnpFIMYr62s%2FLDToolqx0C7BMZdKXKDJMtJm2SVAnO3FpYkUabpEjTNgDjvpMxEWsv%2Ftk8PBBNPsYKX5Rhy%2FYHJyMaowdLMW7zWH8W153c4Oy0Yk4sV6XpUAyynvDv9X0UBLYI2D1Q7wUfXCLdZv4%2BVhRkR0WKWU%2BWpE2dNw5UJ8dWo1nxVRQ%2BmK08QuCKHtd%2BGvdAVCcb0E7aUeC2m3a%2FoljwfqxxL8k424RHhrFs5T8naQ9hEbO6mMN0kMY2cRMqlKvU1LGWvA0guodNfcMdbF23dcvUf%2BVcuAxmYoBb7yYA8cGV1vBM0FmQ7yCYSZXRVvT9QwrNlBsyqLnoUdfBjV39qvp2VlyZ%2F0XkBDhluage6xu1p5zBFQWOIvzwISRWnlW1w9gB0%2FFpBxQeGFbwLJ4ZUF%2BQcnPa7yCS3A%2FjtvgxhTF8NtCllODg9qe8u9rvW%2BFR2HTXX%2FMgpHFwFVQGUFoukXOc1nI4AqCfNUGwIlTGuky8HIiVIW%2Bz4BdJHF0V979OLym4Oswud%2FhygY6pgHD3Y9RdnVQisBh8PPr7VyVkgBrn7KwuJLL0UeQ8bbtRs8FmiWVIAvRiwWijRKSFfyZtYoX%2FS0Yz8SuM%2Fjb%2FJOoTdLABI5GLirWu8AFJzbphw6YhOkLYgfOJNqoRGMX0ben1Wj2ZLeTGe1qoc16vDcjv3NzSm%2FwMhkxbialD%2BGfxu4nPoM4vFBYMycHoqr8Sl4ZRJCWIzOOolIY9DxF3VCn45Mz4tp8&X-Amz-Signature=0f19365553e9cb92d6e196ea7c62fbd9e4704ed28f1c0fecaba1cc68d2d32e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T4KQZX%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBYA4fNlJ%2Fd%2FcAc0HwXxXk9bgOZ8%2FRMoj0PwUg8B51JNAiEA4iqyOqGVF3IqWrH2BBeirlyudCJZoad2wDKwbm3OE24q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJXa66e9YJtJ2oP7qSrcA%2Bi8q7XuzYD8q9SP9uM1ptrc2f%2BLaxnDxtUl5IdRYe337yIkNaGi5Yk39rh4eZ0DgyOe0nvm%2F10EveyAuA%2FHIkboesFIN%2FIV7lVicWmtoEBNQQnZ4rPSdDrliLN77arHu%2B0a9wr%2Fe%2BLcakJkecKPPVWrmg35P6a87RDU21uhQpnEbh%2F91Aml9fy6M0cNnLnfqV8n3eI81dd3arIJu8thZiqWoPPzw9gROHD9GtRj8IxChiXbNCnPuuGtwFsZug1J5hambhtFvxAj7MVVqW2sZRIHiYmVojjPAemTMt4%2FnzvWkB2UkHUnzA7juN6OY7K%2F%2BJEHSvtLMVVCiHBpKZh%2Bx%2B0zKNxG3xctPkGlSVppJ3umJgS5lTlA8MHv9BGaooaZwyna%2BlDZtC8X5O5imB%2B81DNUotuGwluewBpeTnPHMiYvJFVJrv4gYQZ0Ccw%2FdYWjGxz1oJLyTFORoTvAFpkCP9f4TpyomziJ%2FCUpTwSdleh0LW%2BnrIso5axtyDvRBZauvnrl6QDySTOlxyA7K12HpwR2D5u3nJpp1dv4xthmsslXfQU4FvpENJZ3kyX9uE5ZtZZVz3m4exw%2F7EoXS9RA%2FpMLS5X%2FRGRf5vyn3YP%2BQEfwwuooBsdnjgbMuYA1MKTP4MoGOqUBLFxZLhEInoEJTT7DIJMfD50tlcYEQVpU4fNWaIKZFoyNeEvcft3J52LXqk4sfdbH1Lr964vOic%2B7foOXLs%2BTDQMjnEsnaBiWgbQW11l49Iu7DsEZl4lm9m%2FPgTwPQOGN7jbWItvFMHVD5U9mfLKeuHXonQer2gO5cpnxjKmHY7zow8M5TdttfEKjHE6Do0Mi605L%2BoVix6pkgCYCbzTTIhtoYIih&X-Amz-Signature=dea2dc1847aa937f353252130bed1477096f09678fd6df0cbc5fc32dbb927c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
