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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7UR7RG%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BlFJXhSvkngIhxikTX55C87ZTR4W9a5XtjjeoJZDTAIgeLZkWYuT48y4%2Fq2cI3SzlguAF1Vt410WRa0aZgL8mfgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpDff8UJxda3lpuCyrcAwQbX0spRF9taVihoO0zV%2FjTLfugQWBtFq%2FGWJVzTLamnvqtzrL8cSesCBRMQDcjO4K38Z29cMxD0D%2FuzN50wwFzerOS3nbzyd2Iook3DeKHUQYfLcMxVVuwi2fNqt0ww7pAgouAblt8DzQItlfe5LrfwkOyKtCuTYgrdHZcVQL8EZzBA%2BLJluOfT2IFHj7vWAwarMVXOGqg2VkjzGdmlRQYRjjEwkkGWLjRJCF4KxfAdgaZ0XZMQL2wxfp6QpHzTZU5wn0KRFq5CeRXwqES6UpYF1smLYuP8IaYW9nwlMHKssv2hvX%2FGDD22oKKRClGsMjn9qhXVjBbPMC%2FugZp85AR4W1relEJNe6YQC92RC27TdkRTfr2qLPHJe6Ii93fv%2F4DKjwcpE%2B%2FnR0rjL1SFRG9mWGZONj2OKIIPp01asKkvqApnc%2BMng2592W0E%2BOTAVtDXAXB1eXHmhSqtHW%2F%2BRH8R8lFJmgeMsIUzbUgPdGks%2FkMDcxuOi92sqIvKCbfO%2Fz%2FyrqAdem8XWK97dn1p%2BvLPhG3AwlgZZPaT7UoAPEN2807uXu2N9hkb3qiY4vmNXmlRPzpJd7wvOzk0HGZjQHvyBObzdX2aR2y%2FIP7Uu3iPve1GjpitqGD3D3rMNaegtIGOqUBtlJWa%2Bfhec6nmh0Ceuj54nPKOxK1QdPpOzzLz%2Fx5SSDEjrwiw7nAyWFgqMtAySIM7meEhNLnsf2lFapJUmE00uaBEaJ0t4t55pWDGDgxakUb%2FY5ppMNcjFnWQN2F0IYQ07YUmDzj7PEWoSkKtQfi9GrS86%2BT7b%2BUq%2BibMDGp5zhHL6ksqcVpDGojJgHq1ndhmjJwkwyXF5Ud09ITTzOqDpXtVmQh&X-Amz-Signature=f7479198fa2aeb64a0ba418da968ff9c92e2ed85743c1f99b9fb7460378659fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHAZKSK%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsGz20ZXTmcrISXVnU5eVqLkr0yIZE4TrjhqXd%2Fv%2F7fAiEAlshe%2B20qii0Dy%2Fsv48RNbmAk1QiuBUL7i3JBceYh14AqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC139K0JYoRU2QPE%2FyrcAzMDEAPHbgMwY7cs9q70WGeFwJNuSTGflGxpGXGzo4NF1MIQ%2FfZCvGHxkG%2B1WkLSFWdADe2%2FynUzf3ZkI%2ByusmRmWJLZQ1vRp7CTMoXGYKy3cOklxk5Zy9MItGuQB7Too%2By944shWjz95YOMOGAImYVSwd1R5S0ysQfG5zXfuQl6p71ZMgZSYKQt0vHBVzR58Cp4X3Gfunv2aLv2OClUYj5BlwNE1vLUfDdSAEmYpy0VrcBdUj99rFp6sW%2B%2Bzt84PeruPh7NXLMUM6cnIqgdjFC0kZ%2BafSXZ9hEPCGmN%2FUa5z4L485IZQl6HrpTvN8MoCCxtRVsmMVXGLyvg6ldFid10r8LzwasbdaUvewfWGVLfonHLw7A%2BqjFDpxU5w9%2FxPw8lHNQb5BMvU%2BGeBFskrm8WmNw1i8h39i9EkbIb26MTipNZouodrgKsXP%2BRMRB%2BcNf2Ih0GaTpOLN4yfbQe92tK6YmMjP2Ena2pOVvA2Cd7eKbpNoVlcIrGJpoGq6ASNNkDl0vTHgl8yaYBlxNcCjBPFb4L0QtsBoDo9Nk%2Fj1Xo96PEQCywSe3yWtDDoZdHBs1oiywWOnjP%2FNpKP9BiKBdfk7UPnwpngCH7ih47YDD3xlypZdfBbS94vls3MLiegtIGOqUBa0xRJ78IDKZFriWh0krqRHY2AdqZ7kEdZbKBwK2GStzlgAJd35AkrioNhivsMnyuL92rEn984c%2FxTnXsnElfGLQ75fRfXZvjbNhUW5wwM01WdyvVndS8L3uO3qFT%2FFRpiGRd0N9nGorvvewdss2MRyj%2Beb5xkJ65J7Z6bhf6jNeT6l%2B1Ps7xVlLy1FnmxwPLW58qzpd0WWk1yhdO3ieVWmH34ZjX&X-Amz-Signature=e1e39357fc06e1aa45ce5cf66369df4430e860e74b6e567a5cd4e4b9915ef5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
