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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JFOEC3%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAS%2Fjx3mOjdn%2Fi9aykOKu06LoL7dr6GRLrn4cVGS1ggwIhAPnpLhaNFg1VxnmUaCKFpywT2ClKeSCXBYUg2DwAnES8KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJUYuRZKIG4hBS%2F5sq3AMsi%2FL1QFFUwgI%2FIhO0%2Feo1dmTikVWFUfLlTZIB6z2Vz5IvxpHucDtiNDHoHNN%2F%2BH30NKuVmAHlwpvnFs2lLRAF1XXSf11gqm6BtLsQ2AHWk5HyC9BoIOgbJftjRwYS9HKgvlDtgHH8G5amgRWaJvqA3nTnSd2pD2bjRWuzvN00WN90zHyJy9e4qfJfNoOZM4dQneI%2FfHkEusxzn0dPE%2FJh2bDsAxPuQa9%2BhpaPAn49%2B5svnXghzhbIznie4fjT1wSZLh22wK3ZSKDEUIu2QuStZlCXEzoL2%2BjsPTTRDp0t5rIDU3RuPXn6faUa4reJiAeimn1hLqmJofb66J3STQCHfMv0UgVK5x%2BIt6tozPxfKf5JM7kjm42lGepvMz5f%2FWZR%2Fv%2FpvhA3PO%2BDWVeTU8x%2Fv1m7gKSMeAYK1IFFQZ3vImFW6ICnV7P2Edqx%2BYPbdukOfe1YOiXLpfLqZk2EbNs1keJDkA%2F0y9zhGJ8zbZFRGUiUFuwR6UcMgtI1tV8sAY0evN1It%2BqPL0bXlmau%2FwTaz%2BTAiDnGjdf9Of3cxsBiNOuAPaOd2YrxnummknFw6qDw7LKMdvRrPjelvEenpzcxhyoUKm%2B9HPbxHS3lmpJfSSuzqG8MZ13FJ4YiHjD0ns7FBjqkAanQvwwLQ2qtqL45d1qpSKx5s2ESX0KZs%2FwwGOATOZ4OVTr3IkpLKSw9VeUIpQzwMZ%2F3rV7zuc%2Fqs%2BBvAKzAYAx%2FJwF85EImF2RxjinQ7pVvdQ0iBUkfIWadoaZS0YlhsYFEULJoi%2Bhbka0Dxz%2FqYMMU%2FVAWQMuQQB73MEO6HxceLpic8FilwK5O26IoFCezxMvZSWyWUJzXAMeAM1MMz4FEThXB&X-Amz-Signature=314a2de76a40d2eebe73211e3fb8bef8071bc02144120e20e094cb834d2b3a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKLB7LL%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrUwsIadxwfwWzDOuow2%2Fu%2BAWysTP6ffL0e5bb%2BJ7LdAiAubvoVah4COG5yc9FrCTppdaa2qBXrWAa7ax0M6WonNyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkuk248JeycP0H3NrKtwDest9IxtA27ypRsBUf%2B3usFeMYSVk%2F8LYBB010OThupbdI9nVDQrATB8iwOs%2BN9Po0Bo%2B4ekqBmdzOmu9Tkn2almBRhujJfFznLQT9TTgoVZPFwv5fmLrpoNx9lt9TIApIGOn1FJwV1AmVj0MN59STN591zqFXCUCQLPT92r9ffDItsQeVND35gClMpqit8%2Bdmfq3VPkS5Zug6MMQrJpOWgvPdt3dnkwaapLVSG7A7awCYXb0z2k2ttKdYwKLrvesxyUQMo9o2tJXrByQvgGCoblC0St2amuzXhmia1WnEs97FyfOyTIUqDhPhOBJlqWBN0iZQy4nnn63H2LTlmM8MGFsMJHEU%2BQw%2FTYO%2B2sfLEwlWBW9KroL5mgOAqKtf6ncWhG74mEnEU8VOhYEnE%2FQU%2Fy%2BV0ShA9%2BhPlmnE9ajUoScjKIm4D%2BWO6HPhuexDvIy9Z%2B6bCjTGYrp0cMWCRM8uaWgbCaMfeZQzS3QxtApxCYEMQ%2FFYhlGja8BvtHGZK3vcLEd4YCzKPz%2BWp%2F613i%2Bc%2BZ9DlPSpVukyrl95vJcQQNyvVOi1sqJMWD6g1SNPrZb7EQf4pX0S9uPJSHnGVpxHxcTIbExMqkF98dqh5XYl1e9Kh8wrvHnyoeYnGYwxJ7OxQY6pgE4rQXQOWcuUZCZOaZnl7wwHl1tbMP4%2BoB2QUjkEFFMWipZtTTdtWzMIhhLoeAKoo5DJorBhM7mkCcRjliX0leQyolMxCrn14kFFkiJxmIHyxHqrmNYfGEz0hLf6V3PwxQx%2BltzIfw21hNX78TPZFvJehC8QtGLPtx8OZftcaHskaq32D8%2BNvQiaKlEHm19x3UVNsd6S7jO7RCTfLoLrYP8e8mxO%2Ffz&X-Amz-Signature=2d72239c20af63eeda49844aede14ffe4ca418fd3f4df4c2689c9da760cdf7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
