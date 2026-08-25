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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672P6SZNY%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIF%2BTR0SYxIdEodhur%2BX1kSdDBCAVg93w1pbLaCI3h%2Fb6AiB1VmorWsgG9C0xsjTUsugR3cZMu%2FeG8V7%2FeSY4EEeMaiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YWFhStXb6sFB0rpKtwDeOPv9XiA7ENZSozhXZgZNC2tMQaLNcC2be6Wm13jMgAqcp0v2ZfMgrQ72mxaHo7elD3lzPgIHFGrWBAztjn4cDUEbdgaEij1Wi7Pv9T11C2RSostxv0XP8yGAeVaJFBQln3viEHJgaonJvmgl6i%2Fc5sGktA4xnMa3meTacSxDdjBsO2zpLJw9%2F%2BLUXPphr2uZlhgXnWFlpoIjxFCwiXnT0o4x%2FzPNcSCP1hEMXP%2FB676e3Rsgd4AQ%2B%2BVwl99SLUjc7rIFKGxNi7DgHoX8msmGVwqjnhl%2FcF3ZkH0ov1jlL5Jftnx4PjZfdgHVgDM9HXpbnMgQ0z%2F%2Be7s85adUaox%2BjxmdDx%2BMQBNkaPAMIKXmZu916VC3OVmEZeckL0w%2FQFujLepYG4kG%2F5caK4nydA6CVhexBoiKnTCOH0ItW3sVPs7DoCk2Z8AOdiLvp3Rpq%2B46vdGHlalrtC8jbIEytSV8SJUI1Oqz4CHHIlOLTBJ4UgtKOrwAg%2BC3jwWG79HFj6b6iI2VVfruNl%2FL99pEX4SCOhSIUpxRb%2BOP691gIZyycVjS5WyVI0hRUB4Im985H%2BR7q6Js8Kq8WThZx2WC%2Bfw5TsnUQqqdDlMNL6OWuN7wh10Ck8qgs5knkbBVOwwltGz1AY6pgFHyJrygfHQX5VfpPWYoOpkNTwR6u6iZrnbfC%2FfP%2F2J5wdOyD%2Fo7zOADIxyrZmc4zQs0Qv%2F%2B%2FCiZnSl9pHa0Ze07zprbkQgjyqSjbu77fhoVTafcp9Zeuc%2BpglhAnwgv9QLTP3JBSeoozoz%2Fch0RuiC321svPI0DPCBVdJdHsr4RzajYSy0ZCPLqCiSNMQgUywsT11AlK4GO5gP1p%2FQMBROYyB7aCh7&X-Amz-Signature=4182df1d2417bc4580302199167847ed34601ca6efee04b617b4d7d63a57fbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROIMPIJD%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCl%2BIcsc7srMzIoRrCUvGguN8aRkE0DOeXnkES8crr%2BDAIgA07HCOIDt84aydVKruiaOQjfIOZUm0lNhEcbLmFdZNwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD%2B4uFQE5uURTdQOircA0bOgSP%2BxcL7om1%2FYn1IA2cVXjUHciztaZPK7LGXPXWBqXJr3swHmV8SbqFQ67Me749W5iLdKjv1NegxhPqyEY1DEwA40fEZMVFWsN5%2FpmkUcH2Ju1e6zgz8enrhsMbcdVO1lLWZKFmXAGUbXj1g%2FiChZa6SBtdaTnOQmZZtsuqh%2F%2Fg%2BkVHpBnLmrS%2BffSwRPZoKd2Syl97zIRwEWDAX4355%2F38Nth6u4MDZAv5CEGJzofOq%2B6c8fccKPIK%2B2QhEosrBVylOIvdU%2FxKT1Ln3xw%2BdYAaOxDmCKY%2F%2FeWZ7AaY43166cm1Rc7%2FEZbMUnXvFBFISPInDRsW26lUr7q1UfY5mtkfwhAebCovP7zicL6jeRWNJpuFL6RhTGC8F3FrcAnZV2zezFpc3dt4cvcG3thQulf3j1mxeXBmR2ZSYg90MEf%2BIHQJNKeqCSi0Yi%2FyO881mLvz%2FEvW%2Fg0QVe5EEXv8Lz6hgROwBtWMU0F0W76Y5ElcS0sY3eSskPyiyrOUDbVFTF0luLgRUbcqaA50JGHC%2B%2FZ33GRKiulBotH84cXBQonsMJ1tPfKy5R1bEAZT8EidwtWvZ9g5BvUZcYQl%2FBfm08Hp0GjDu435EbeBjKHT0tA2sNr6LFxzO%2ByMBMPbQs9QGOqUBr0R1EVWz9nTjFcef0H3nIZTrGUp73ENmr0TYtTL%2Fwsm6qgaBcCZ2y6v3MjemdC%2BEL5X1Vc6T3v6wdqgYiAHQZaPT%2BrbEJdf%2B0Uew85zJe0Ovu8deayMcY%2FsQFnfjWsWdJHiOmqCpOXLiP19CkOVU8THhykv%2F2ugQy7%2BTxZnfBtkB3YpWvdh3LP9yysRDL3QNPJH6eib23hWFDaxciadDWjZaqSO5&X-Amz-Signature=ca9fb284f6dc9aaa13d46afe9e9353a14d96dc9b1ba887196615a368d4ce3000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
