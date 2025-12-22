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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2I4MHU%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEKVZZpDEw02VDhMuAF4SE606cd%2B4%2B0zCYshtW9SeP%2BqAiEAmh8dKou8Av1hp1jlG%2FS63tcEgHrdF6NZ5T9tQ5bDG7UqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsxJ3lQ6qBpSxfTUyrcA8K34fJX1GyNc%2FED7YAKlnGOmax%2BcVO5ITKRKAxwyS2zupOAl4RlQpGHSdot8A4yTj0DJdCVaHvb3kCiLXfZV621DuZ61r0TjnI%2FDr1xfPar%2BmVutXWOj5sJ12rg8i%2B%2BJ%2BxpeRaRV5tmrd02B6G0YYBA5hHGOaowhO%2FzIIsc%2Fo2K5vAIGYpvTjYn0T3LQUz%2Fv11bvQdWgZKxPu7aBkrGNh%2FyxsKwU8Mgx4%2F%2B1NeK%2BS%2FHJQxyn9vMlozkyvd6E2OPq7KJruXlEPO9ZHPQeB0HEj%2FPIPVCW36bwRRLsKknO180Fn9QMBsB6nPBw3vG8NbHLVl%2F4bRnPIC02qNygQPmUOHnOTc8Dq15WcPioLw4djT9mMgKAYGqtHfpDNlO4%2Fsu0%2F%2FlzDScOtZL7ID6FcWwjBjs26PVV3pztPIevIz68nh4s0FnkIvnKaMnmXPTNy60jIWyEnezzykkvqbOB8FgRy43oKxREyrpFXzK95fr3Bfp7KzhfKOQNbZWWagJfwDN%2BT0gM2csCqv6IV%2Fjel9JwXu47m14Y9Aj8dBV6cgDMO4NAfEnXixKWacCOtRw4d574uYG0fV9ghtvDNpUeIcdt7IDmghLcYi1MSS67Fb5IfrqeW9ax4ChKRWhabusMK75ocoGOqUBH0zLs%2FoHKVq9LLgPDUu4JC8Uwb%2BACyBbXMjepS8ZJkdYlP%2FjCzHw%2FkeFEoE4TCqSs9sZkYtUAaDC3xde0X26wGDYD32B5F6MdDPZrs5zCtQS0X9OYfbEmhodZtVZLLOtrgB6X9zBprCp4y8vV65Fx%2Bou8tm7qXuxWhdoij2b%2F8h0Kv6gqkQeE%2BQKMDkL%2Btbi%2FSv7wfr8ogDJXterFrVOkhGJZ7BU&X-Amz-Signature=1e3261a23ed339ec90664963c7e78d23e846f36dba1c34075187b8d9283ccfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXOEFXP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCYgTTWQDBzqnDXwbLSRzVxEIlUrh1miH%2BYvDIoKZpEgQIhALAi9bZXqZutwzced3dHnsJvockJj8ojXcOqclhD7RALKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0mGiKMuLFErl3jsIq3AOTbXhSs5x2%2FlEpJgiTlxJaCOB7cKJBUt93MX%2Ff%2BpjhJpEKXVESTmRq%2BitcMqsi1QTOwkDiNX3yBiqr39kJHYBeQ7TVb%2FQ%2Fau9nMLtTuqTMUyj5uAybuxNAK3Bu3ZiNFlPPlRtqWGTXScX798xctSvSWXJXigvtvJf5oeYEjkDEqUFeNnexA7jo3a8EiCBoSqPOyZuw5mW1N4gbZBUfi67GM9BfdNSd%2FBXe9EPgRi6aokh4%2Fkeof%2BR08JQMny2fEc0ESXXC7p7GfvWk3fgzEOQEJmbo9MPH77Y0XRosuGt1d7AJR1mvlyO%2BEpK%2FKlCPwZl02zrDJvRDc6d9B0HFR4t8BbK5f7wENxpzsulolFQ4GF7QOwp4tV%2BBAY3m%2FT2f2wX8bB83Q85ij3NiCcmdMLGkMh6sjomFwYEF9ot%2BVEPvVOVVic9M1LNBvDfwGULUE0hvKn5XflptkYvG2H8NOIDdZ6QGyLPmeJDMjLjsRb0uw8D%2BXcxhN72DcEdJkLHNApJxgh3hSuwP7m%2BAaBaUbv4J7IxDDiI3%2BQyYy20ytEy2kPb49MYJG2GmGReQluSGwQSvQZP0x%2BgRMIA94RcssL3igRbv0u2Pn942rPPjN2TcU0xbWvVLGA0V34GjLTDb%2BaHKBjqkAXMbbmzXfXtfqtvpQPUg5%2BSmJGKxuCM%2Bjhyg7SLaEcwpBOG24Jq3Isj%2FfI0KHaprY%2FGYG%2BhVSeQI%2FvguZx3u15to4rUTEq0EUSabaUNlXBdqCldNindmAY%2FR5tVmYlMJSkUlj5kUCjfM9UUOguc9mD%2FImzC1lliXuPd16Gy2ba7x6HNhIIq7rN69WCRbLQR9FhIS3rRQUR0EdPXWL1RunNyweePy&X-Amz-Signature=a63fd3f88f066636157008ca3a849ad41326cd2483fe5f12964c153fbb2e5ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
