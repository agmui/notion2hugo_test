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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYY4BKI%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADR4pSjXSUhnNt4hzZXL%2BNEXn3PC%2F14JfTkppN7SghGAiAsU7b9tvD%2FzpNex5bxXDnX0Q%2B%2BdxBVjq2BKf6ESF8PASr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMdExTrJgSYgh7Fa4aKtwDhl4faNfQk6ZLzWaflnZmbW7UEECp7brrNXeVgOUpo6kfm9yb0lWNRjcyJBGKy8Asa%2B%2FWnfsJmPyi%2Fvve%2FtbNshNwy9HR6Nwmx7DQ7p5fRMG9qEEq0MlaZmdkriO2EjQAekFqcGnEyPndW%2Ff8X2s%2BvWVmCOH9AFWNmh8FIFXE0kA6DNap2vBGe%2FKvjCK5ygJmDXYxz9p%2Fx0EAFNLkLld9hpojSS2Zr1W0Do0X5N%2BvI12uYhcZc4rfTqF%2FstCz5i21MJsYeNPKJJSQHFmd9V7A0ySJAWhOSjKLZkRpPYjWbpdXxOEr5Gc%2BLNQu1S9Z62gKIOLgXdcKyue%2FTB64W8ZRR7LJLvpG3xF9ECMYZjtkPX8t7oCHZQs1gq9vS%2FTJLu6JTXIYoY%2FXo9QqG7bKjm0dpjtsQlpsd3Y0lYYkd%2FF35UR%2FAQBFG45iJ1KdfqkV%2By%2FdXa%2FgwJ2NHSCKIa5lkl1rvaV9zQag8Oy9sOH1ecRDhHjJyRuiTtUX5aCqPS89FJ5HiDTrDs3t1ydeGbw6lmQNkfXQ3YsYphfle%2BHlx33JuFOaFqdgJPJvtQI2niAAOjubQIqw5ID3ejmewFtddCkvApKB50ddVADPmeOPc1sIHxNtg3h4yCrtq1kjtDkwovnfzwY6pgG3UAAB2g%2FkzYEcJokrIYcMrVYBAM2PuPK%2BF2wFEY7PN%2B7R%2Brpl1y3Y%2BOgplXH%2FRTo0zeA5vLw2MXrTMMqIKfVlcQJhMm8ENl1I%2BmVc9MWW4U%2BLXXnBAUTQW6LFiNWwXm%2BDbZJIXrSuMmWUCAA07WPKGBr1hRqjGGTaBgLjvpy4Ka8oZPyfqZ6KMTDGk0OhYZgd9diH0FxycAtCA0Qmh0PL3wRQIrhi&X-Amz-Signature=a8666437bf75c25d21babc3be6cec31ea9f8d9f80e07b02d32af01c6b3852103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNGWFGTY%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQxW9fvmicaTfMi3exB%2B3RjccMi3tw2%2Fb4ZOllo8T%2BRAiEAyhMzAEnEJLUa3X60c5wUvgAUizfKJpp4Kd9%2BgzUxuhIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOrn6U2IqhNDq%2Bp%2FkircA%2F2yYmp6vJq%2F9o927cpy0Eyw3GBBdMLLWPvCDZJDJo5nsUIEAyRyEK7jE3Mv%2FBuwoBbCWjvju4Xt%2FlqhKlDzmJjBWU%2B5H1We7tGwbJLPu415rX71dUJGEHnWx8pKVmouvUQm3cB9bTbKNvxQAA%2Fr9RkGVECkpv3zhp61vYUTRbPqNe6o7bAe9fSJhOIkpp77uLikQxL4fZTpqSnYwI0W6g9tq5llrA0yzI96mQHSTcbHCMbAM7BYvt3Ew%2FOHZZ%2BTwKV0yIQuBbgHjSJVfoe7bcoxPZhdi5BEk6Nm7CuZSH%2FqbOet%2FmyFlrQIE5wP%2FfJmBV3%2FH2lrmAu13UQmVHNu9NB6SpHLJtK3uX9jQbTwikzqWIv%2FGRCOOVn7eqpsZG3tysACZ%2F1nrJ818M%2FyxPDhRAqbo7t5RTDa5OWsleN9Co%2BXvqWnT%2FkHbzo4M8nCMdr%2BoC155yXhp2wd%2ByAAET8ND8Dowz%2Fp2putHzDX8cwjusuCQPNQV2eTvubVYdQ1RWQVLMQISfnurk%2Foj%2FvCAcTQRMEuRDmwVFPnMY1U1RAR6Y8b8d3KMoHxotiKZp1vv2IFjnGrIThp%2FM9l6AZcyNGsZNbSdmsJbQor7dRzTT1TZrAk70dSEiri4M2MbmZ1MK73388GOqUB18hWnQ%2B53D4ZWhN%2FR9n9ImEEG%2FgLD6ITnocMYoI%2FZMVvw3x5MCzAnj0yfHwl4JCGYsSMyucKAjgywl5maAP9adx9f%2BnT%2B9LeQB%2BIE4FMrqs3nHIPfqz5tpn14Djd6McwjkjNy5Q2i2tLCto42Ls%2BeSQ5X1K78E3wTy08h88UO8erQZAD%2BEHdYu9xS8H7%2F8Mg6uHPaiBr7TRvdE4lAixdjExIuHbA&X-Amz-Signature=ad9b829c92a5bc2086775ab65857d3b65d5cda9779b87988c7da9d02869f8eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
