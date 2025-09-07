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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBUW7AX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCPoappHJwgrg0Esdp4jzNpecAMIXkX%2FAR0xZ7fS%2Foc9QIhANlPDd6X3i59vIg8rFZMcP%2FJkLxso5OyV8PslWqDE6LNKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNnosNl8EewAjNLfkq3AOEc%2BUzF1T6AqiXGJmvJHuLxe5k9LIUMBRsULclBn1z8A1eH7Z5%2BIZRWZv59Cpkfd5xpLnti3UjEwSIBgKngkusHSmdE%2BxU40S7JUF2FNc6xI3PHJl1vOHgVkgYU8icGRhT98LZ3BpG%2BaWFBLZNeODR13lJZPV9nRha1X%2FNQrgzU6%2F0w6S%2BRTBVggynzBPaqrnCVNdtLHxVmT5DIzdFjvwpnY8%2F0MODCU5b8dKvQA3T71zUd57ET0mEdXvdFNVqwsWDuG2UduCXyrYtquib6u%2FDVaGoez2rXWQD2VySyS9rx8RtKBnYkZrzXoG0WvzOvChM%2B%2Fr8N0XmuVk%2FnGSkSCeg1KEyeJBlJgb%2FH9fitEy4aL342A6fQxvJ4kv5MRcmxhgzsC69hKKaJR7Aoqfv0S9ESfziNVxcAPoV8%2FzZmsSd12W9Lb2nreBTUwMABHx5%2F39k%2BAXBuyiPOClYINpwJ5KZnVxAXQR5qi0%2Ftiw4mYi53syA9553%2BMYQdQ6bWZDtotQNbQ69DQUkMeD2AIsRrRu7REPc%2FzeOulUYBwSyGrwVqI1hSJU8WZ5a%2Fcp2YL81eSWvH4WsM75T9JvJepqcer0I7B9tZMfBqNNzXxeONBGnNuHcF8yGusBe%2FWaNTzCxxPLFBjqkAekt3UjI9eFA1nC%2FR64TQNjQaeNTs22yarMBOhY54Z%2B8nMOIPtC6eYQhRO064XVhiWzpXtnXI5veOBfEcqNlaEqbiTOj1i0bA76ICOFkKpqEERrFZwuQi9GrVIXmSt3gsotx3QHxMDXu4CTW%2By%2FQfGVbQI5NbSDrMdWqIMeikZbQPzh7HmmzUQd4q93bzSIJijh2mpqOLP8m1%2FLJr7%2BoeZQu7WDz&X-Amz-Signature=0886ad756230fddecd3166d6330012de74dd71e0a1b8d5db0d075c9cd0e1f009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVNSO2Y%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEWgSXRKlHhVbdXtfHMfdsDicq323moKfcDF0R8hcZqbAiEAr81awJey1BPcpK18m2t7cb0abuevGPOxM%2B%2FDwLXrt2cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlp3bGxT7H%2FtNB2OircAxdhkyeGyQ4aL3zr9yC7kAylCfFRmHgp%2BUA1pi8lSLzmqueJSIm%2FFHvlKZRcg3X9bIL9wQEWPMqqufh%2B6PhXF3BD47r8tI7ttmAOro5ol55WOk0INEbaq4bDDfL4nE0uY5T3SZuRk11%2FXdpSvcu%2FZZi8VH44LtdNPI5amNk27dtOukz5mSjXMxsvi8DJfJFuWvljkBQPADBIBHv1W8%2Fyg7SFCBplASaidhRMZN6C6nfCeZaXpGSkWmtIookjstyAhPfPD9QX1EWr5t5%2FzHrNXss73G%2BZaI%2FSBSuYaHa42r2aYwC2R0z57G%2BKOUSwyO25NOrB%2BsQJ8wfBvc10ecAUTm3s8Wr47mGII7%2BDArA0CBYolW%2FKMVrlMkmiXOAXM1ZkS%2BNjdCjHzlLynD4BVyuFMk3A%2BwPzmyEbeP6nnj9kbs47KlPjHOlsyNwikmEIfKHB5fksnfVKTYULP33bPu6PQJivbkjOdUeFwQoCxUnBNU1HVDkQGF8aGNW8dXZReQQzh7lNiB3eeLqmlIpXaCN0YfNXw6Tco92PiaKDz9nTWxRdPymkVXjbFJOUaKX5MsbJipAcS6q5VcrEyXJLVPm0JvJyOpxKRoeVrWsifmt%2FHt7Mky6sBebI%2FSd602oOMPXD8sUGOqUBQ76szu%2BU9RrMXJ0bhF3q9GieMsnXJN0CysI7UjAlpX%2BjEfzyD43mzVYJyqn40KkNghJb%2FPn3WFDxFeDzrbh9wEuCbjQJ48Vlnq6powZM822FGRcQgYaK1SSentppCEOL4PRrRoYPiq4qfrt4%2BrhRs8Ppxaeo2DPquwTaogzgS0lLuMbu4WVdnq8U3ckcXS387HTKlfXBcoKpbj4Uaes1lXIw6isG&X-Amz-Signature=07d7cee51c97bafc442ad8b6f9bcccb06e9f66644d2103f99041f4174e8d0904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
