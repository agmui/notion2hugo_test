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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LT2EN5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCHEjBRMSkDrPN0VDiUlKbXmW%2BJ8tohlAdSvjSlf%2FljJQIgDC5dG3nTI0tSOHsQGF5aAhoFa0MapY17afvIFNBAzMwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDO6eRQx7htm4uJ%2ByjSrcA2eQrUTJzpuq1uNyKQmHGoMkZUMhQxUzYhy24Xv%2FZDMd9mNkV84ODjOIBJaTuoR9hxChNWC8AcPJrsCnqXld3nX6fSFjFJ1O8jiYOAC6FqcPFhieeJk583LSzpsajdgaO6ksoyC3zdIUaMlGZhnk7hQhuLQEWSEGtkY7AntTtfjMTTtSdeeoSaYscjiZG6%2BB88hUp9M1nWuRTKkSZ7vEQvTbKbkeVj6H75atd%2FGrEgS4TkTweeOy4BW%2FoirjL%2BmxcIFJf74t%2FNyUbsFxCpbCh2uYf%2BBNWfdP0w28h3G7pFHA84MzPXlKtITrREwU9FcNupNY4MbW0rikh50Ouq3LEDdyoIWMyqRncB04lgL%2Bt1knsiX17OyvnjF5n0jFkl%2FDUPisJx5T5veDg%2FSEZkWa0LhAZuhsq%2F0jVd8khqaDD2frHv8SH03%2Bh1yVUc01wZLkxgdBmiCYkA37Voe%2Bw2cfORXIFmoejcotqFfCVcfCYB8AD8uOVeu4ma%2BYYsN74zVPqFUIfeNw1GtWWWXp9Y4NdvYfUwQddXSJuRY2nzIJZF5j5OJLzefoyHjnSu%2FSut2tjfd7DAoXoqfDFovv1T66UOOUxSKFqWaxgBvJH4A%2FbOsppHBm%2B4gbzv64AkMoMLDb%2FMkGOqUBD33EaIBy7EfB7J3QoQJYQqTaCvpav6blVDh%2BRBM5MJB5W%2F7FUm%2BqZqIPmhSmU0bE9pyV%2B7OLQhUee6t7GE5nFah58UK%2B5Xgv%2FD5YmLLF3NR5XMduwMkoAbP6IxMxqY0eZYNHFH%2FFjl1pTqhqYI1EKJTn7eXXvc18WeFIfK0ucL810S7SXD0CqusihwSyWPRRi5sNYAUiHvdLjTOYlhYxr3KvseSs&X-Amz-Signature=652a34cdd16e4bc876d1e5855be25f8d9d8c19490420668d6944fb17f2743142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHIJ6EE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDI%2BpLrwOU0jLi2bTuuCV4d9yNQy3Wobz%2B9ogoXnx13jAiEA4LlTUK5vU719VhEnbYWdifCfsJz4HNHQ18BXmgzWMaAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNZohCxgj%2FIHVk0tEyrcA1P5ZYJ4YdbQZtqnYi%2FZqvYLpqCMXnUw0MDfdjpML5dIp9xWuc3DC9c9pDWveLnqyn4IlJeNh%2FkZKV7fU9kf3hssaPseBSPOsWzJkQwUbjSkwTHZn%2FVkgTS%2FOKDyIYHTLWDteBCgl3zdmwSM%2ByK8%2BqBofvp%2Bkz7yJxUTmsE2K2mSU9fe8hxHCeft49VUSAojP9wAMXSKh0x2G%2BmK%2BPwAZv3ZnLfOBOZ1%2FXAHcqISAmAJTvKm3sOU0gZNNNzMZayVPcpDf9H12pHwtf7dTo1HWIQoNV7CVhzzDMArmIv89tqWJ43MZseWH9sPY7in1HDGZ%2FxcPzwwO3%2FSs9UNtvFRg7%2B4Rio5gmZ6rFO4grtC19umTgiESHCaigbkS0AeiKJ6qCCJcVGt9v1c3NCJvdtQzeaaZCusP1WvGAOzBMEs1ACdLt1renHN0VkjhB%2F4luYrdqlpUZRuymVhwJ7AxQ4UFT61Mz4ccgd72RgHx0OFRpanF%2FLIKQIYccomAdFoB7tNMdYnR4baAHYLOpC8Y0XnRmZqX7rdZv24uDR3jHCIaPOPrPacBVj%2BiAmlfWB62SXuNLgg3ferwyBMJlhmpO9eMcvnx1TJG76kHfbipOhL8pqymzYUaSYckXf7bCTHMLza%2FMkGOqUBeWhupSO6OIIUWirFtpZ7bgzeQL8v6LfDa8Y0svYsrf3myT9CY9htL3bBw9VF%2FV3Wgfb93RQ2%2FasIbutOOa6Tij%2FNXl7dDeAfvVKOYcjvoRfdUsTEffNs955TOS6b6gnSyvMfglFOrvdmrkK9YX6uQTLDZ2jtCs5LMKrJC3fiCvE7fVEXw%2BPqtQDR2n%2BYEsvj2MACNkYYZjE2Py88Y1vqulgO%2FtN3&X-Amz-Signature=f005fbb17cc9ee23e3f92f39297fd2204b1e20e60beaa3b2e033c2fa845aecf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
