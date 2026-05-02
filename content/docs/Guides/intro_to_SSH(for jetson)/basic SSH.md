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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJZOSOM%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr7qvPi8SXM6KnBb3qiwGIYZy1eaJJD1ct4yqvX27qQAiAyR5cSk1Kaa1YUSossMBsie8l4u%2BMA%2F9YnutBDtkm3%2FCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMnodW%2BJrGRrd4J0VWKtwDpqPTB63ECtLAN4oEVlTD%2BMa6h5M%2BTykbsaEZ4Gxzqyo4RmaRCMrCanZNL%2FbaTkKkp6cwyAIvQDTuRK8xOZfM6%2B4SQLHsQDl2mDvJ0bGhk%2B47xWry4NM1XhWtlj%2FyTmVmtd30oC3gkNM4sKLxsmIWNiq7GkIgPNbB1KJSUmVHA2PlazvXGBWRF3vBg6uiwVFq6YTGxZ3YOZUkktHHv3xqYE7M%2Bkn6b7n4oQCU2ZZSVfiNImS75cpfqzsdzNn9X3%2BbmhLzDLY0zf%2F4aMj8kkoqN7OvP55WQxkGHDVotlvEBoG15wsSQifzvLk5xSFvdu8zjB557Ds8%2FTcQp9xAqUA6U7A7UvydCkNJC21fJRFwO2RZDqGWQSJdOvjo1053E%2FnyAKQ9vSserPqicFI718tTJUsDfHIVRfswhWk%2BljvRpj9lupaqMZBvtJQ4Ch%2FeW7DwQx4jSocRAi%2Bhkf4hXGTY%2BKCumCYqfs6IOatZJeTxqr1xR3MsD5Z6hrZhidZw5gJ1VBqJs4goTXqvPahFFiv06W%2BEIbjxjfJ5B5bXRHOGE88jNTy6xZaG1IiX4U%2Bse8WI8Hf%2BtmpEp%2B8lulRpVsRXEKSRfzM1sLGM90OFmsMYNyUT8VgpwPkh9ik%2Fs5Awj6jVzwY6pgECDfDWLU7C8CdSE268iXsc7UcfOi%2BRG7xnSXfuvIxljW7SplJUwEIMj9JWGPZfA2ks72GfJnIy2etlBTjHHvV0ettktp2Wu2Wf971E2RnvpJMqb1t8kTn98ioLmJl7tkemernDv4gax0SkS8pHsKNQVh7E%2FeWkrO2OvZ2%2B4bPakpITtxmWyv7U3XIxqx1K5ZF6HT8Iq4UJaSR6c76F2JpFb%2Bul4MYZ&X-Amz-Signature=d7c3cc0407bca9d3a55277c051eab9792a7edb3c8fff2a619d7c173e771a37c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3MQ7OC%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAsQqgoor%2BFI%2FeIYMi0DVy%2BydPchr3yRDHSOMmLtlkYSAiEAruNvblB5lzq2QWScUbzKHutyEAupsp3PZ8FEAVq%2FLr4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPMah%2BwI2Hnas7wUGyrcA2JllK5AmtQ48SuK6v24lHgBRd4LWFL%2F1UzTIfFbaZRe5tiSW%2FBu%2Fnj2Q%2Fai%2BCaTio7qHkPgoxOELBtOSZIK6HS0d7%2FHAD8m5EbyXj6sWl%2FYe2iCTlY%2BoShmCKoOHx%2BCOLxHmrVZlvqup0%2Blw20m%2Bvspqd7uPewGCnLaY2S%2BDhYyw1RALzHxXGoyfTd6B6TPbjAa4JZ0sjvJWZVTkqtwMfCFzMfrL4OLZF1SQCGKXJ3ourNTdlo%2BvEz2aj6LWoki1vtKBWatJ4T0dIE4FD6GtRYQhqeD%2BdThlyeIE7l57emCRL8maRFmtOyKnokDCtxkwVvPI75lg6ZBzarao1RBVkdnlvt6dJniekObI%2BTuQ%2FxOPi3Tdx8zxcGiZA02ATufFJXo14FD6%2BHjCsJdnPpqTKG4gKiB93ueUvIEX05OIuNpkKFbvWAA60uV8eOfJHVEzAXZtqPZ2nyXpyZxk2geV4RwYunbwZoyNe8d006S%2BIEQ9gL3qinAhCxw2YsgLAPp%2B3%2BEh%2B0T%2FI6YBt68BfZTLoPgXn9lekM8U4dbNFBVX0%2FAnGqPaqfubSB%2Fa%2FbDUacBHZNAnuFv3tnLbB4A31UwcXKpI%2BLH9WtKKUBNv2YotGh503EJD9GzTXKmvKi9MKKp1c8GOqUBjRObp1e%2F1Pjiwahn9KxBnUYJXWSVh1Q6rueo%2FnMdPaurIfYeJMrFbIQeNe1yoONCcz%2FsU8hy6S7a%2FGAVNXY6iyTJTIMDzWAYJM0cs%2FzUoxqvIRtI6DKxxb4bBPGjcqgEwVLV1nkew%2F4xJluOsBB7hr1Du9REMaM82BRv68rjA78fclQLJPFOB%2BPzwfcSi8%2BcNoDKkmnRJKji8fYL4x9zlK6A7aHS&X-Amz-Signature=f2abd2121e6069944c6b5fdec7e333699bccd8a53e51ba19570bcca70e73c45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
