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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYVRI35%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Mq3lLz9zAURBrB1tEXIm6I%2FMIn3sJP8H7juyWZ%2BJ9AIgI6GpAy4wAGF051rElLFEWYBELItVj%2BR%2B%2FrxU2FiYNFIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLeAbFRLS29Ij3a6SCrcA2xK28udYZw0Tji3SHWbwfAGEnRlOKjBSyoGG2EY1N%2FXl3Y4rbbF8O4nC7u6wI3rEHJOeT6KTNQ2QzbJVO71g7vv5f0uWQq3c3PpZS4BqUNzhFtAMiFA5Yh1cskIMWmic2mi2fwmIl0UoHed3jpSrv7d0Tb5847s8WVwQ%2BQlcgHqunr%2B97qUsKEXQPcjWUXB58u3O5DOqOhDR7YzXb%2FZP2JL6D38EGO%2B1ZAJnQi13PWG4L71m5yqbhT9n%2FJ%2BayhwrlUFFxJ7%2Bm%2F2d1XiWDyO6jdBw7lAPZvaavd7dM5z8XS5VJ2HEYhbZQpU%2FTftgcb0CftIAHBbdT5g6Ls%2FHuot2lXbNVbv1RJd2uWLePILyjz80rIi8kcqTpGRzy%2BBdqpgnB86e2I5LB5uxtz13H3n7MpgrPNxeYCU17XAzlqHX%2Bk7KKllFGubO4lLxpZVVJUKKBg10WEJVJlFTFRmNgi5Pfl61fNvcc%2Fq1RdeFUrUNi9v8tjZ2nZZxpgFyiP0UmWzJqnHfYao%2FgCskudqJPJjgeJcYHiUkHniG7RqMadFhZSmGfRjusqImwox5OH6vQAQ%2Bs6bkTn5SbWmlY72OG6KW%2BXAXcz3O3KKY8AeNrfLMMEuZQraeDowkbX60%2FkNMMP0wcoGOqUB%2BN9jSBMxost%2FjUwiS82HrKKC%2Bg63ClCDIh9jFkw20g2T5sgUfiY0q68ZosHe2IFota1F%2BbMp%2FP8ReuZMjXN9kat8i%2Bj20BxJyVSYArzAifrK%2F1eqWEZCu7VYT0jXLwUhf8I9uN7lnfCJJ7u7MTDuQGkLTCnvj63%2BJzdVw%2F%2FZQwQJPwrIsShqGO0klJjvo0jMGSYjwXewkx7JSocJ4sRVBADMGI3b&X-Amz-Signature=c694e9d3d64d8db74b37e3426d6a92168c6ac06fa84a42186c2755404f986b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWYR47F%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKLWr0NZEVI774uTAxAmM7qt9ujGxHCeQYVEz9G9MmAIhAN1wf2D9YcU3biRBAz2canFWXpvwnienJQWWsKCuIiC2Kv8DCHkQABoMNjM3NDIzMTgzODA1Igz3rLAID56anwraivsq3ANE5BAT2czTjlalF0Hk%2Bz8uUWxlUTH7dNLm4ZgIjqATi1IKAUkPj3SDcj0bRkfDrfD6U5Mu91m4M2j8iP%2BI4Hydyq0p4JVdJSwP1tIlc%2B9Alizv6%2Fy6XFahEsPOwfziOD%2BU42C58TixXmAy21DvomC%2Fnb1qkII92u%2FgVWXZKziiUB1Xgpo%2F013JjUFO42HLz9Y0up1Ycbni3ZBJ9PJfNtwDECwLipu4Scit1Obu2b2RbVNISeuJ22X5B1bIho1RX0hw7Bfw6oNgT4wKhUIIuqy7bF31YLCEE3sWHUjlZkMJDzewssEBsxzEPe4H4ZWyGZyGkNqSemyMSeCK8CjnUA9ZhM2CuZBQDkOHkdRXsfWes3wuPIvzOyp0809I3qSr9AvFA2fsAb5BQAkqqEiJWwQYwDPgiEHterK9bXZ8hdpRGojMZbrcyZd2ufqEODiB6xZpHepT7ZODbyyio6zS2hnOmfRjZGvAPGZMI1BQo3gAmuRJdHfr5LWSA7HwvJhe3Y1FCCBvx1C%2Fuwagl5eDdlzOOZTOIGAjv88I3EVYIN3rYQBDFUJl%2B7cOb16JWYuHLOgQ5Qhi8845bgZf669Z0Z5jiIRsYnWJ06bJIzB3ubkFH9%2B%2BYIpxiWcl249yzjDc6MHKBjqkAb3lMeqxD1%2Bp7zlduwjO0MKfnlUem9qIZaIZNRXTBqY7amoUruvB0CQKMcEt0znmMl7KX8f2xHZQ3BRZ3RFIXRw6thc7i03m8e%2BAyjiWXLSdzUwr9neJr0XkoAcks3KRAFDGep9kmIdPGlLiOyMd3cqFuig%2Br%2F5Ox%2F0Hd6FAUCG98ERDSk%2FqzI9v%2FcFrVw%2FzXfWlHCKhGRLngT6aZ0nwcJtKk9g3&X-Amz-Signature=2c144edbda726e3c0ca329ff0713d83352a9a09e38583bef3bfb736742b4a8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
