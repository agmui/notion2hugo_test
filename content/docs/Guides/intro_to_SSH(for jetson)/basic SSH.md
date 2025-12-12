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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5GQCYT%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA9DnWk%2FLfXABzGjdoJSUhPClwvO4tuxnf8HUN2MAotyAiA%2FBAgtPdMO8Qkbm1SFHHsN%2BHelSnMc23mM%2BKvpOg%2BKLCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5lFyV0qZ4puIzblKtwDNGqJSnMrlHoYIeYJDQcj5LQSwGA1auQgkBkYbet2XjYcEkSQTYSukVcTqud%2B1BqCVyhmyj1s7mz2uHMqoaeW8AfLK4Z4IPTxjOGVAE0PsZMRc22oBOgqrReuP4SwIfxkntJZYYcAYGUzzWqcVmVnb4wmJpcZwJtPQFgzW6aylevruFnr8mWXHFrfpdLjZ6Md%2BnwhPhmuVlqQDI%2BqTd%2Bhwt24%2FioclQUhnVZVVJMjhfn8lea0hCbEJGJIqm%2B9zCRI77fNLF6uXwpFYia04M2%2BuVkkqoiedlmG%2BG9Qde7fAfdqNdTpNUFxSFNiSy9PPOBpkAViyeIJZdOO8FQkBkC3Yry%2B86jL7CEeoULiz58SHWwx2cc9Au6kiwgEt0JlMY1jS9nEOpUnGOr3QLx8CSAYD5OS6CSEy5yt3NxY8W4CVaox2R8x0aVmThxYJ2NHDnmJFSjVojpF9O1i0N6T%2FTVlZDQEUb9Y4HyJxafT8FvZ3W1Jx1URRkUJ1DdDnFwQ%2FKTmmE1k%2BZxEmWLyqPdvVNZfMFiAiy8%2FHgh2oQ3BnkVQlpfIR4fuGm%2F5mBrXMvLEyYKlNJ3qWj6I3oCUOas3cddaJNM1GcNACLN%2BtaSNlY7w9nP9EGNeUxeXBarhnzMws9XtyQY6pgEIzXVURHIJyzw9%2BualzvgYGCDpUxoKeTfP5dHN1GUiwAuyCi2xFgJngrlkdm4Rag1S9v92ieRJZSVQSyci1jGnxKgVEbaYzCIuCzKRS7Ek7T0z522R2v1d%2BVlCgLfo9T4b%2FRVpemSmPC%2Bu7rhjQ48FZOAgZxB%2Bm1I18VkGO95%2Fl2NJ6xve3QMnSpR%2FBoEYbU6t1NPUJ%2Bnlzapo0NsdvtxPfnRS3I78&X-Amz-Signature=75d62684225348b9c4df4dc884bd6f133a13c013d3f02075eccfcd49e6ac559c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSULFPN%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDwXiyoOxbJSl93hZG552H3UdRxR6u35%2F%2Fw4iHfy5pz2gIgBUy2KHtrmm%2Fmfopyo6ODuRCJfsWEdXsfTrWVoRweGkkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5i3I%2B99SbRhg%2B0uSrcA6nLKC9fCiM1USI0AwgqS8OroPzEOIGdbvSuhbOUt1IFiYQ6UbgOz1GmisMKEaIPR3o7uIFQscxeP%2FIf6fHZFj9FcGQD5ydH6uim2Sort3wSvYkyVXCP0nd1m4f7tZAk4gxm4cohF6d34pYgTQ14I4QJHnRCox02T59hqtZeo3hYxqCseXX96wPgREoFhuGWgk7hz2pXvQXUt0V01c5h2gujOmJEC%2FdISKYNS%2B3pNuVPrkAO%2Bpcc1N65bX71oigZRT2nsWZB01IvBhYMblTVc8T04q8pHNlmR67L%2F2V9BbRMFPU3%2FAqwTam%2Bjq1r8I%2FM6h1jNyiFRhopQr1X8tRyAHsBDgbKQgINgdYN35TJFnhrTymZ2xr3QZC3Sx46hZSXFUhiCk0tiWZiMIOQ8EM8hsVLx%2BlL%2Bk2cfySahHq7LblMq7Ic6csCCRLX739GRAXGPUTbDq08%2B0dGYQ9ZhSzdErIfUN1%2Ba3GbB3pL%2BsDEArM63jMw5jz7ERciWQP52FdbOBlCkdfF73z%2FfDRXmYNLreZtX6lsWS6v3TP%2BKipu0%2FtWXuO68f653Eq2C7bJGNB1plZaLc0TypYSjEI6o5AFdQ%2FiTdpoiPvPpmzNVEB2WzynlgC%2BmN6x8lLNB9vtMM3U7ckGOqUB5E1ZIuu61paZXpWqhcj7s9Kwtf7LudMnDryUM4SHvImpmf84iwvB8S0tpEnGf%2FZLSk9Yg2uLBcd0W3LFVgTLiPu0To7eN3IUAYJ4IkBX%2FqrJJsrxRSlmP4w96gh2waJkW3bH7PUufmsHXr9yEg9Y0qfW4dba6n5GwT3uR0tqXBnq6STAJvT3GcXa3HnbST5XNkoSQo1gTkaMOfkvkj%2FJmqN%2Bq1dV&X-Amz-Signature=079aa083043213bc637802314112b7aae893e57088ba25d0a32dd4fbd0a013e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
