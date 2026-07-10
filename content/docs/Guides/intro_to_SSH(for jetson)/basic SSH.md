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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47I67HP%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3bWAJJZ0VyYrIcWVQ8tmcYJlPoZi%2BYZW4J3NHsdnU%2FAiAE%2B%2F7DKInUYOWc5NSU5Z2kpcSblynCDebXtGq7qWLj7CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1bM4nT%2F6fEK%2B9fUVKtwDUXGsEZgzAs3Tx%2FbWgwYKsQ9PnpEFd9XSve%2FnqlRo9cWhT3YavI72gpiCA0jwy%2FNGh8HWY50VorK1RDj4pWo56olzUs2YEH%2FMLeU5Ce3c%2F8Bg1K7TTYug5dFbO8C9IwH1hpIa%2FjQ99zhTYC1MaimDRL%2BgLveTEm7zx0gF3SU4Xu8bQwUjeLXYoRvUplIviHRZaMJeV6v60c4Jgo%2Bgfvms4%2Fe2ma%2FEKBrk2M6HDvhcfdYHND%2BYb3pA3YgIwpTjl%2FdhPQ4%2FWk2ZKVHtWd6A61e4YEXezNeeDz5meLQO3vDAxGmwMnwA028x9jZrdrMzwZ4Unef5l3SGkir5Ppkh%2FKG7wKWxDnPgPRaAVRy7mrxGBJjzmKMvqJok8gDeP5qPhlaMLUWAJfEj6NqaixSb84jTCK9OdGK1KNN%2F2K%2BBuM40PETlotshew2uq%2BoVrVpILCN%2BPD0N%2B7wCita5xwB7ym5AJ33GJBwPjFko%2BiA9VMSc6bFi0g5XrzQedzJ4ihdFvn5YcoJZpwlZLiDu0fzH5o4WyWXBzOs0eXgr%2FU7mLPjoaRTt7nMH7WKtFACE5jJGNAmRob7u8f8cemU%2BZsmxClBF4GSuZVXbM53djGomOCBHQB2MFkilVfHVVtbAo1Ywy7jB0gY6pgEK%2BXK%2BMUsWhiNP77MvI%2BItB5YBsQA28qE9NDURYsJIhZANsOtrJjf5b6eVtSXaucKSVgGsQlIujBmf6KLhTou7RY1J0rcKNvweqPCZAT8HpgpHhrQ9JRGOPsVd9wIRnPrmukCcST%2B3%2Fw7B43Ckrq3W3s6QZgeshpj0PcVM%2F8LnRLaRs1o2qBKeU4iZoyvSjk13VwZTAhTF80YjyyPmAnbFAPw3xNOr&X-Amz-Signature=5ea3b6ff605fb5f974d8eea17733e0e90b101bb8af57115762a4eaac7372cbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5AZ6JR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FZ1niUZvvLzlw1xEVaaxiAUTOyDFoszENQEgaCAFkoAiAqKPX5s5AhTKS8LIECoFWV6umiZHDuzK3Q1MQz5bItWSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkTqRWMmj%2F2Y3dyLJKtwDk50lA8qjFPovaMgLuH1rBS86AqM7uPxat3P5BjeslmHbkUkDDLFfcvRnFZ3b0pI1f36ndBt46KkLL4H4P9B4acMrTjCQ0gxn5HFy7pIJlF6wXsPs5sPniorsN0gVDHf11EVWQ8ZCEk5KWsWowOahqloluOvyoch46ChNlzsFSVlKEmExpNwle%2F4EPC4Up0D5SyxTzw1tJ6UlXiMt4xX917h7M15%2FjnfVksmDTOM%2B5klEVwczv2h8Mig9HoeHwwcEgyoc%2BApCpbv7drV3z7CCgMpF2I4vnR8E8UggYhU6K3mXYkxBEzvoJeeA%2FbpMXiZTlgfXGNtUo80u4VgMhVeatIMHpIOdoO7zOMqHh%2BxqVzGhh6rjmn1QZ2YX4k1bon8b7vxhgdNqDn0ibUaok5ZNc5l4HuLbSmHyN7NuXlT813PFJYVadOlqyG6Rc8uyt%2BVzUytuk0HLbGAVZbz%2BFt4VQTW2g%2BQ818T9g%2F%2B6roP7OygXtdi%2B8Ot0uBu%2BHojxF6rJtsYV%2Fmho2gjQP2T0fth%2F3dn00gSUgJ%2FRlE24BW05%2BeubHBEP%2BSC%2B7XM7kQi2n8Gm%2BwG2i4k6zUaXJcU7fPg4UmM07Px7iWQXiWbf7OUnVt9KioBxLWXpCipgCm8wvLbB0gY6pgFBBsszdgo882plZILDGCqWIWvcsyrA8MLB5t2i2x%2FSpdtMTQBAl7anC9C3aQmr5ZreBPIXZoe4FaIzD1wKVvpnUxcdk%2Fwl0l1Jg3OFYoF9C%2FqaWTWIr9wQlcmLYYEmMvt7U3lWWqRsL03gOa792nKYkRnhU7%2B%2FUusBF3ahPeWC7CMSuxbb1x8hAlKn42l3i015ymbFlLYsDlMbUtdqG0qstixzAlBE&X-Amz-Signature=6236458316bd65af442e6b9ed42fb12c262d5470708a679abfd9984a2d4592bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
