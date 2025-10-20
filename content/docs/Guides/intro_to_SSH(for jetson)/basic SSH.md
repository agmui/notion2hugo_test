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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAIMDDM%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAc0hUNLLkBs3ML1O%2BYPpcHvFe0fWBP%2FB2DRYH%2BFRZb%2BAiA2UJRDmKpKiytYQT8b6Uk9vr5R2qu2lTkeCF%2B9Y0lcuCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM76CPGD%2Bd4hI3ZZ1HKtwDKOD13uYFuOsAdD8sIPWoGk3QI%2BiQtHLu%2BF0%2Fijjw%2F5QSY9Yxt5QqaZ502qeHcAuFOEm8AGeteX7znN3XyJ8WYrLpcyhogfszt0YaiVXaBlXGp3JKJ0VdIu3CUgYN4iLQxbnJV3fpmpfTA2hpxSHbOXXQlxOLudb8ekiTAaMeoz1sfDT7kp%2Bq1OnCreSHCu9rEUTiPG5Au1qzPXijWsAzBMrTVkc%2FavDkfSnuNFhcrGfyIAdZKXdX9ODyqKSOKk5ozp5%2F09bKA52jB%2BhRvBYJER5Dw5%2FmmcAp3Zw7P9%2FG%2FxEGvkBcovaUvqL43Q9Cz9MKQ5q%2BUPwRIqGztvnedZka4%2FmmVeV3CYhzrftzTrF%2BiQkIlVIQGAit8P3rT%2BRgHXyC12uCcj1O5oviX8FSfxSKhJxiG4x9NzIi8RTMS7PE3q9qq3YI9ypb9DIyvsvw6%2F%2Bomqa1yGsfZygGn0BS1RUUMzVh0U1AhdFJF%2BEJZmVUYqn9Z6qi6PzgO4%2FJ011DfEnQOkajw7vpeo6sCoRpTuqiPiZyt%2FpRgwrfG65RJ8qZxh4nfoC9wOsJeeFMWP%2F9wbJqF0NFSFR9atFYRNMJkGSO1quCB2hXu5zRN3rQ7%2BBQs0lDw42K53sL%2BA9d2lMw2o3WxwY6pgH9HROe4B8sWXw%2Bg0PLnfTPT5DERRMxW1%2BGYbZdNmlT%2FSpgaOtfMS5nrDIXlczbQdFZn6YgaA7ggcQAeEwvwO9oNOb9IC4RnoGy6cztKwtX%2FJvpHNd5b0fFj6Rohgye2GJsb5ZgJrvsBzcQuoRDR28WW3IX1bTTUmMBI2dKHObvo7209NB2CWnxlqDJLPNCi%2FE4PQ54bs4%2Fg5aYKaqBuSaqQSzxQLpL&X-Amz-Signature=5407b7d4c90b560172bbccb7a5347a4b384888e63c0b2962fd80230571b30744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBL6YJRP%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBGbO5dEQqjb5%2FDNLkXEzjM2y0X7sqQJCKPjtUXnyHE1AiEA5Xa9All1NweoRMW1u5B47DSnLpSpTXKo0cXsJ7oqMK0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2B5aydIjI%2FLZvyLqCrcA32sRLqMk9InGqn3ev%2BBTaJxIR4cqgEDegOuH%2FK8HmedKtzqjKEOGlyg3PJNqVZacxk0Q4FQ984unYt6qfcMqJiJ9nt39dnb3p9KMufv%2FQOmz7EkE%2BHRQVj0AQZhBfzK3Ph3x3fwLpqAEyEbMB%2FTIh3nbl5TAOFCs5gKXb5KR%2BciLctBXUnTNh9l1oswlKskr1xKUXIupj46hZ0%2BWZeZOG7CzuHmiGY8NN6PTlpUQO%2BDayU7avxJ%2BV%2FPLcDi94GTtkxjf4pb47CgCkNHDC%2F0SVwYc580hbYDjUPKbYaE27VnH7BK66ya8p5kH7v79YlmP2epigff1Nfl9dJowb5%2FhpxRx%2F8LLAP7ezorX7QJd6EgB1XWwUoRhmX24njf3q0qGQO8cCVwklwBEkyJ8L7vfNzbzK%2FU6gL%2FEyUYTFMszaBUs0p16YaxwHGqR6H7o57Y9Ufkr0OdUcNXsJh2FgZX7ecoYf0gwYH3UZN4MG0vTDqgDYd39ZDvbBbyKBjvnDlOtU%2B%2BgzmG1GGaYPfUlDV1C66%2FmHMr7e4itoadJLjhtEMihnOfa6vtWkePkq9g12gN7lvE6eEgq%2FU9YebgdtZvHEIbjBes4SEJn4yceP%2FRStzvh%2Fa2FOAuGFhdMsGjMPeL1scGOqUBfHnYbrXlpdRwMFbeu1GDBH2aRvj0OGMCEFq%2BFPPg5YFyQr%2FaNmiCb7NZtPj1wumRqvoxRUIziIP7cWhAL7KIzRmQPmwkzHt8UlR5dgSsJg%2FlzsXi5t4hSXXv19z8F%2BGz%2FypudsviJSlyxF8jH6MnXeorOWx7yfZI2DCVo2JSw%2F3bURHQ1kBuadn1pqCYg2H3AZyKxvy%2FntZznGsP%2BBTkHwOciWBG&X-Amz-Signature=568061e1918a1c28ad88296de66d1d6d9d20a5841b652d05b8d7f07104ab5e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
