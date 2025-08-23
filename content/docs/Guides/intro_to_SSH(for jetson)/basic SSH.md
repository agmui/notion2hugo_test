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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRHDVKDC%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAh22s4zNyHrecuozmaOdHFNGH8YVQTasJyAhu1phXPYAiBMzkbzdUKICESUNJvRpFo6xIyJ%2FIZNx%2B6uImOFeR2wfCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMdcZ%2BaXzqMrXWOlH1KtwDyFcQz7CrcYQcHx%2FU0IzSSE1aMdeCXZGZvM%2BK3cU%2B9bVwIl7bhhfDYoKCPMpXlXvs9IEgWEfzXhiCK6jrmzxmmOr0%2BKXPQgyujF40UR7JkI95F4QmtV3VZZ4bvZm03i7DRDK%2F%2Bsd%2Fkl7XlgLPjXSZisuykDEMlRe5MKUgAxzii4eiduQexynatmFMFsEV8mIHMRQBVZkwfen7Yy%2Bz3ZgXun2mXh5dKTXJWJDFepSutJBZrFUIzJx78Bbxq%2F9c2RwGdRzxZvK9bJQe24qnHKFrTqsOoQpmzrfzXMFGVsBr0564jq9kjszNZNGOl4aZ3Ey1eRg53YaB3EbhxlLh20c5WzFrnYA4ClYIfijPtclOiTr3NZM6%2FvFHeOCfKTxFTH7x841l1ALjtlMNOW91Vw6oUC%2BKaePPGltqL0%2FuzTrI5fGBIE%2BzV7wiJ91E5%2B8EJ%2FK3KfkX8pvnSqZOBLo4H1UA9LAdD%2F7ximOB5OeCK5i9II5H146ujPPkECAhb4emPB7eQ%2FxjnP60beXb3eCOH83CslExqBJ0fUHzvzwtdD5hfrzEBbwASHJrH9RbqtShnmknz7KDh0NXomTHLLdkwDFAsJP2YoGFSgkmUtQiTf3tKwq5uDbYdrPYeefOlBkwl46kxQY6pgGbHTigxj93KKKUiHPeLmg8uKogvlVRG7hXvOOTDohiYrWOZXEwfJPZZSd94cPhJX17F8E9FHrrCHfDagijW6Ac3RC3pUreKetA8HfMEwRdivE7UkL6%2BD5dtnh8htmBz07Gpra626lR3osDtOU0RSIjgj0XFQH9DnlgIdfy1w4m68OU9lV4k8DUchZMAwFFXNueJ1whZ%2FiefOXNl%2FyNxQ2sF5Ec5JuR&X-Amz-Signature=de15f9adcae220685c96802aad2ef4f62bf0fa2b5c73af28220186b531d66fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITVF3XI%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD1F1L1DoB0YoBGOvMAtCUn02KA%2FaLOr1DNk%2Bl9rqN7AiEAkzLCQJ0fKv8k%2BSgBaSyICk09QT3aO%2FnRZ6Qtyt0HTy4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQReBTAZHj9ZDiPZircA9wVvEyWlOIDEt%2Fzapzjg6vDql8fNTGIBpScPQDzcR08xrwlnYkkHDqVezVDwQ4ZFoM%2BEnRWwwX0dq0MUVkKE%2B3cjzXUdW8cQI40mlyoxRtdEvFk5G1yJ4kFXMQHEaAyZjAqvJpiFkPSIomiiXnfyIusc9XdhWtLnDmUl%2BBkGG0c8mcVuRcl24%2Fi%2BDmacfMUL5ausT42A9bcI%2B%2Fy0Ye1JcCldwvs1JOdFWAxQ79V7gSVkHJTNN2oRQC9mK8ggLbWTwqKBxBrl5on3LK0fgpCLxpurUkywd4geSkN6ZdC6yB%2BCX9lBHLp5Aj9YIX7pUnZ1igssVhn7Uo%2FUNYrLEERlOI%2FPU8vkBiOR0BXybf5C6Lph5%2F1bDwCSt5CbwZLkF2Tb3hI%2B4I1TRLvdEGXyNQNEwtAEAc7so0Y8eHldLquH6NWZvLKZLZ8eaQ9OujLPYNYNO1yVBrgy1XgRjkI5AUlgBiwz%2F1dpjIf2ZOLSob3I7jH%2BnB8Z4t1rTW2YejBHsT48OM6f4Ix2mkRg7SuPzayuyKQYecbwnsJcGtKMdzh8hh%2BgWup8azxNl0Cdt1RvouEKcnFdllaiHLFv0vxbirAB4hpV7X9WTUpb%2BCE1vd4Z3pX7jGYPNnXW3sMInh%2BMOyPpMUGOqUB%2FaevWVPnf7gOYaPjtwhCPSHhIbAKuNk3vXtTnDiz%2BIXxXrLcteNwcBoOJt80z8Y6q4QeISoVKFkGLci5AAoUryrxM1fdpNPH%2BQ7kOWYmvy1qJKs1zuNFUC7lns5iF%2FtkyKzdcaj00K%2BgLWeC1vRMS%2FZgJ%2FGbI1%2BeemLYtajvMjFeRsXUxcQnf8%2FwD352ZMMGfDZLDVr%2FgllCHnAScAiMPvJn6msx&X-Amz-Signature=b79cdd77571c87942ff9bfa4e7c136c1d152af09b82d3194265780ce14271086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
