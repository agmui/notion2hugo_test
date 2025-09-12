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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSJU36F%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzc%2BT6s6N%2FXRUCsN5WE2AjbtrBSxd4ouIYkTJBXc75ZwIhAMC98uEoafhwvGd6dQIH3m1suX0gxiV3fMVGtB2eELQhKv8DCCIQABoMNjM3NDIzMTgzODA1Igw0MGtuhvm9G%2FM%2FvWAq3APsKeWxQr3xReMybsZ7K4vvHgfM91d6l1SFTMpyJhq%2BAz%2Bjm5nqq7WI3gyhZsLdJPuzLkM5PMVVmlfEkdhIyO4NFBwu%2BgkkMF7tn4GOQ%2F7m31vKaw5Xawsp4tKNAkyvRI5y2c%2F1qOHge0ynErkYLIicCyX1%2FxK3VtcRzeTJfTUTMHgKs8ZICzClu%2FmM6riKAwqBSu0OvIC%2Bubb51Qx6S26davs8Fm5lsVMat5nzsVM6P7I4MyR4bymbgXsfERAlQsnjvH%2F1%2FUJZXaYr4oZ5kVD91ZDC1GB3JVSN6RBpJGLuV45l6zEymrKSfQfRGBeTN3Wf%2FeyGqRQE5LruHgWS%2BUvoDnAa4mD9XbOnP9eBVG0kwPPoIcnI0tikpv2kIdhXhAsKXVTApO6FZSDrE1ZighehqQEsET2zld88saSZF5mApeLm3L2p87qfPfwAt1ENhG%2FeQPz4uUQ2ChQBDvGydunk1P3%2FMlKStBSWm4PWOJWmobKcHRdgupVb2PlakeaSxgL%2BTjnCBciPx5bObchYr%2FDvhiE9ZQTYtzC1Kr1ENZTXGJ9QxRk5dAUW5oZLKrTJaaM2VtGPcu9L38ZxJUD%2FkOXSMxn%2FcsyWnEZj4oLvQYNMid6ibpCdinxeU78yBzC20Y3GBjqkAXeuO9l7SifaeHlPAkuhklGjyMJEPivBG57JrCOjPmWJAajxN7o7tOquRzv%2BvIIfseFoVlFp3TnRmOrn1%2FSPNFBYQEKZhV5qj5dejxya0g22DSdTfQXBlHQqquk9ItsqGGUhyS62UrM7G33Xd0rp8X0137phcL%2BPwJSEgR3Zht4L6NjIsSMSEnCoTDUxuP3eplqxXICnEKtZgNWP8ecYKk4lDcvb&X-Amz-Signature=bc5478c380de681c36a1affea89bab979886991a63c725f377a839fefa4234d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PGZYIP%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRUJlUEolc%2Br6b9Nvf2wDP2hXpiYs0xsZtUv37cM6aGAiAAumNulid3cc1IOKnWGvmJ8HCw4li1x2H2peOrzWHqGSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM50firwDlVbHCaaOaKtwDVWBsxy%2FrkRWI3Tp2DI6XyJQ%2F%2FS5vKGShIpx3o8Ok9YDdqIHL8%2B9i5jznnbMFuwf6JuriK%2FFvO1XmzfhLyAIT72tDM2qBMR9yzn8%2FEVIF1Gn9OV%2FXzvkWNyfK8tAVrzwr9i8W9CTWUq3bSb3FAOEJTM51w9a98xasrb%2FaUrqdhIzR9iSd%2BRmt%2BGT%2FwQTKPS2ywfqSAeCyj3AL9EqprOYyrGYpup5CckS3TmnRR0kONiAl7FuGyRVWkSvEoWtD9XDE%2BLo7rY6rXISPUDhRS%2FP7%2B8Z%2FihDuBqxP0e5Vy1gq3WIfhmwO2TONv%2BGlbSa%2BNySxCF886lX5T0VxCtki5pmgfdC9mNslHAgS2r3%2BJbB06mgfxhWueJ518cLBIYiJn9wZlEbl1BeHhMTFYYnlNrRNT21hM2XTKZsOO%2B3Q1cW96TB2xaDnrElvF9ykhB9VfikLvglvOUSC%2F8R0u%2F%2FCr6lE9B9VWWfLA4GrKyumqgL7LHEo0HhsZNfQifjNJtVfF74ZAczLNbGw%2BjJ%2Fp9YGzdwo8V%2FfNMZhP7teBCHJnybgfQAyvVyHDDWCYhK%2BVcAlewXnMJpxVIMvC69ZfuqiQpqPyfdwQcIrnQeSDd23cZrG3zDEEtpnYhMVRy5sEfAwiNGNxgY6pgE9ZWGkIt%2BD1wtEMfEDMhemcdM%2BCNJW8PGgkkcnoOn690j7K4ITdQ3IL1IaW7fgg%2BwLSUnscVNDPFF9cDJDnKAjFRhj3jzKWoHaySjNgeiVAhpRoUZC6iqAof9o4zqxb0sMnB6UyIG7lO9drr52OjHUoSYIiz4eg48KJTqobJWLDga5fymWlR263SynihGuCVw01TF4tTwbHXF%2Br5Kewc6vlFTdXq%2F9&X-Amz-Signature=0b948ae28662ac61230412adcf208b73b5bd1579f8c371ec8bd002fe06b33f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
