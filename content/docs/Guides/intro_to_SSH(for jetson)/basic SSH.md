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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNKTYYJ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnuhDTnAOXg0iPp5DPvdnBGnS0CwEyHyLhj2sB8Byj0AiAWARGAb17PQJpQmRCD7eWd8zi3NQnMl840LXeq2Bjn2SqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8EgCkW2V0ernAPYKtwDwminQQV0fWK6ZiqT3YTjfY4Em0ZspdoFefF%2BSLr6RuvvajY98QZ1JjAjzV6ruUEOWZS6hp1DjvIkp6%2FkWTYbfmqpbFfjE5jb5stta9VIgetSu2I0LVKggKPE09bERTop2raaVC7s%2F9z4D%2BdceQq%2B28kYrQNvc2ErELE%2B3xzy%2BOb1sTbNzWc%2BOMm7GZqEGCs4WUxbZHLf0SHrgLkcfS%2BYIzDUoYKVzuFhwpDTWrm9XUZlTnAI3y%2BQ569hKeDQaIsRyb7p1dHSft5rh%2ByTlhe5xd%2FuFomIPkyI1aDbt2bMV0YsWwjGjdnSrnPaMffVEZ1qT7IwPL3IQIbKBp289y18zzJ6nkYvCm9T3Kuf9%2BBMdq50Z73Z%2F65ZYdY3rX9d96%2FhHiaxmIibU%2BkWrkeYrV4zLLteNxGjxQpF1WgLEKrwbtBuHtQWjvTAgHzOO0a%2BC12NVNmeyaXlR7nxpo6IhkDvH%2FpDYFU1AziCy7D4jm7ETa2lJgPLb0U1Y3tjdC4J9AAaijEPLW2NvRtPr7n8PM5ZK8lcnRNy%2FsUI5lRuvVlm7gWxoRjlToq8ds12wLByi2b7CNNOVecG3E8ooFKdpnK4phBSF%2BsRQI6AdScld6SEMaWfRvDL24fWyLuMEY0w08GY0QY6pgF5iMy7mQxz%2F54YmQdBmGyu90GHsxKzuzCsndCllCzWRxbBh7LNfIysoKPA4HYq3wwsZR1VZI8h1JCJQkJr5O4LLA2vb6kw78ViqVir2nzEQE6Ls5OcjTgCXWN2ChQZ9HGgPHeaE%2BTxlvpH2znWFmiJh6EathQW8veaY7xm80x2vkCBGUC06Xaa3avs5tABMKxw5dTLRjc6AHgrmc7IKO7hWIN0TH7Q&X-Amz-Signature=1b2715b35e643965d6f0ea0b173bdaadd4a892a6229e374a0d174f0ee89f9128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKGSJZ3%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWPLU9sd5XpJ9%2BSjVMLXaU6kYPXCRGbh4qx2IVJ00wAIhAPFLHcft5hpefQTzB2G2ucdB20OrI8utPvNMOMn62mdwKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFu0jUmywIYLqLjuMq3AMZmirOUYUU5z1ZvYAzYBQVdJEflJ0JKN646l76uyROwRUlZSla89w8QlD352vzx3pMAYYXvwFNKhR7LY51T1tGDJKnWjcp1gtmoDITAnWS6QT4sIrMJFEWSq5Fi3iZhNfifMbzUwLC9yuoj6HD6aud6MVB%2BAwqgX9BJ%2Bj%2FrT2obvqCPw3Cmb11TP215N8EAgv%2B0ZaNnAKlzJuZ85WpT1KkzBoRj6N2rMHTMLGk%2F%2FrphDZVIbW33SmNpIfB2v2Lsbl0oONIan2TkSUg5rMMjXwn0xJFb%2FUqLO3OFZBBR5uiZROndUqxX7mTIxQ8LIvFEC8mv6yUVeeJzNy%2F6Ht83lC0b4MwISJCQtBW8I4bDQV6PQMalLvxK5yAFpwYMk7jy5YY2ng484Xahn4SHJrPYTnFpOt4LdMfOAeCEToAdaoEN6TgaAoFJF6ySRN2%2BSJC5P5IbJ%2Fz7OpWG2bZTO6pLDtK7Ro%2FeGEYRcarz2f0eTgWxAp9J2RmMmD8Hz4ruIJxl%2B%2BeGhejUBEY%2F%2BqqtpGo6GrjAbK8lZNflbD2yoUNMv3WWdm62FAlNlN7PoE2VbaNgsjAqhd%2FR0h89RIWg2GA1a7ZaMx%2BY7Ksh6KMjv87Lk9DnQHlIxlux33LCbdwRDDmwJjRBjqkAYjoTu9YTZ7nh0VoOvcdcPCYwE86WJ4S0eluCrLZFJjkfh0cwkFzhxDfugiIdukuwq5RRygFv5H2CLazIASjHjDp8%2BKV6g6YADPIMkm3BbDweNOqLmSnGH4qUSSvXfb0EpbI8qt45A2i34DC8DlRlctRq8GApUS2Pl7XQSjt2NdKmMi0vFc9sH%2FN7fkk4uFro1P544hJxmj%2FGInRIXB9V%2FdRd5Q1&X-Amz-Signature=a060dcd5f68cbe05ee9ca00d8b2385c0a3264348e824a71861ebf60ea29c480b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
