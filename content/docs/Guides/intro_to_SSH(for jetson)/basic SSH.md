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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTRTYYC%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEcO3zY50QEZ%2FGEInXIjWyHtbWB5vdhoEMxDBVZphgAiEAunGRZGBNJmnijGwtMkVTeXLA%2FQo66wmD1%2B787iHpyvwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJpoZij1GLMJw8NFkCrcAybq5ENqr4OtR7U2XSir6CxCurUsMqSiXIdf3LVtgjcnit5deVcIusr2kdPuiAyI0ZkdxyXJ3VuxmdyZQF%2B8EbV7vkxBXL2TZZJq5DDhe9Rdwdmxiz3kLiIJDvoEMrCdkmwaiVxiCFFNwm%2BOikPSjnPHcluIpOUH4rYO%2BpLPTRRr30uL3p%2BociQWiGdIFmX3d1hbcGiYClTO4TvAhGrRs1Nen2ArAJyp5r0Xu8clvliXIpTmxk0BOAIJYcLmX9FARs7zpvaHlG8NM2SUvLp19vWK6cdRyTYs5l8hZNDPUTXD8ngEbNdl1FE6G70ahusojLhiatV%2BsnmFp%2BkjncM6BkdpU%2BHORovJwqfikYa9fr9wSq0cExYRe043%2BeeVF2LW%2FHPQ9KHOpIur78%2FpYB%2BDn2MYxQ24YQlHvjDY%2B08jMYRbp8dZk6TWOGPsS6hsCPDOslAZRdsK1b7Yw9Ln%2BsFqSf47S%2BoG7%2FWiRbH2mGYeH35OpO%2F3z5chMG6yqTOH%2FE0xaUTf8kl3ULVXNc57xxTzcp1e3PywMKVaFJnXZ4VIW5xYR0AA5FLZt6ucQqB1psLSo2ZKcqp7UeQIlaaEZvLjDEf3u5qAtmRh1ten5VtTTvQXi6amHD7oxEUXu5NLMNbPydQGOqUBDbQsQ5WKwOjcPtTNoIINNNt%2FdmBe28nx4ZlO26gJk3azr1B%2FU9kDrMnI0tj6hAsM0cGdAMSW2EnCUCfGSfeZKABXiUItGvsh2JDyw9AIKD%2BRZHutWFSpGTYukLIPWWck7OqLF8rpC1ofJOwQ5yAxvnmLoCvHa3UipCTe271tgXdPn5eXJcrp9l%2F%2FCnq0Be%2BSTz0V6qhdMoPOZ2slJ8UpgfGBEbVH&X-Amz-Signature=a88f031873f4596c2adeb25173c7edcce2ed2e4ae200beb90fbeaae7a664ee14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4PA3G2%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuOD9i%2F5%2FvN49ztiLlFGtXbVzLa0jIdEhGsZ8Z9TPv0AiEA2s8W26EIBeAJ9UvzSSsz75Z15u%2BeKuFoGzHPvYF00uMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDD3FQWuHXuCXounXGSrcA%2BL0kBdmI0in%2F6UTGRh4tUM7p%2BJsGOzMC1LG6GzsvMd1C0n9mdAEsSfMeRKjiOCL98gtpzWtsmDhKMZc4aN9RMnQr4b8iBCiL1xHvY5js0Z62u%2BeLSf%2BXFhLvzCCHsUDQ3SsUUQlYOzBPGIS12CzxMp3tW3Vmm0fgIfbBsxossImPARotOEkj0WdTX8aoup6uJ7xlfdrgvJBDWtBHCwQgdyjn6rJM2uBWQQwf2xQJMzrpPRijH8aLvsyH%2BoK1Z9ApJXdrau75R2l6QPFhz9jd3lniaRDp%2F76RW5cnsSWWsI%2FytGDypokE1PVCHhbXQ4vtyomy8ygB6MNK5t1%2Bte0W6eQHaZBz0U0e%2Fg8MQVWQDMJJdR81NKluIY%2Fl8P2keECAel0pTm87gZ8ZeGZDIFi1AXTZ%2Fpo6MMi09mFsFKSAUuCDm71kZxDZU0rgOmqvKXvUpBY2sM7GDntqkKw%2B8IeyPUdGHPDqK%2BldpfS1O6whn%2F33SLETBzJ20PTm94riNFnezfFXJpM1KRRnCJl%2FhaDFJHouBCEAdEYPh1Fo%2F%2Ff9cSSZbXIrJzt0IpaeE%2BTUiVggm5uwneb9OO7D%2FCZycEe1QXILeXiBj034GCGYY6iDIXMKxyX6tekVyelEkU2MODPydQGOqUBTl9CJ6BEat4W6cizkwbVBW%2B%2BXZmLD1qAUa%2F55H1i0EhuGPVCFZpRn1wFO2vQWkoCCMQZA4ZOOyocoBax4Xtzi%2FYFicCRre1veX1uXnYEaTShQDJEVVvPFOB8HO3bKCsdTVNmpaNUQGwpCgC9WFWuKg0DwfngbzgWND1fVCDDazB%2Fz6nAnobzAhuHKHy5wGr7p%2BFk3%2FJWI7G%2BdURixXjB%2FHmWOT3x&X-Amz-Signature=326a634e9f6c89df3132c138c1c2c07d16d3dbc1f60e77d26c8ea3c884eda49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
