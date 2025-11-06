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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JE7MI2H%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAC76VdSpugAXMTUhAYsHfvbrGrTNPhYlAKT4pX37eIQIgE%2FLxsNOFORFpf6VaprA8yOrhh957jybhctyCDvsbEEIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxjE%2BNMAbbTwXK6CrcA4BVaOwmTnutrM1r0PRQAAnkkwK7FRtE9wSwtqdljr4prjhDunfSj8RWxeBeHsQF3G9zKRbKAZjeIMKhykNKoWDI10bwYsoOl%2BrfSGHKhVbWmwB8Lu%2BQxOA3zwrLIJgjXnH8XwtghS%2BTtB%2FWSvUh4w%2B4nUETmhkMIf%2B%2BiDMwzYWqqYY3hcuupZNFDjWJcywmph7bv1kSKyytqMDw8B4ZGvwobib8DFvWDDdHLBvUBqVANiH%2BRFIcQvnMUCn1E3C0pRHZ4YRWsjRRQmOttXqOS8UP0Rrn6BaGeT7MQaALJ1ARUBr0H0cj13hDu2guDx107oob%2F2RpNVp6LsLtnS9kWrXH%2FdULhvlIuc8oq54TP0hizGP%2F6alhsbrZrUmY5or03VMvssi9fB1U2rfXUJzRwKb2Az7Al%2BUlpX1HiUt7IjEDl7tdbzpNTpEAnJD1h%2B%2By8vWbCY5SuBVnN%2Ba43cUXQGxbj2iJjn%2FuINvXOq1ADzBCLKzdx6KdZ0YDB12%2F6L4veVKt04cGNjPHTHScOlvc81aH7XTS5TbGi7sNu6C4LGDFee023sP2UiV2qzuoJ9Nt3o6PGBEfK%2BQaEJIJNXEju74BXakDJzNo%2BWexI50UruuiLaNh0kEaVKMa5rJ0MMDyr8gGOqUBlphjvs8ZSVASGAvPUp0d3fUhrmIcAA4SmL1u124VonWEdEClj3ZuaqUyOvXKn1d8JAXpNs78STCgm1U4PsesZox2B5uOlEwNmslLbzYM7HXXUb90ZNssUljY9d5OkKATr7qe3QoTmFwWwvplIQnq0B6yMs6SEq%2Frn%2Bg3mtRJqlKm5wwq5O2UhZ73KP5zXYr32Egx1xC2j1buAhOyrFeq58snSmD9&X-Amz-Signature=43ab8934178aa8e608a4a7ffbf651e0c18cceb22e5f03c2384f63c3294994a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLB7T4FP%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaTxTCmwK%2BSnzInZHhnKt7BBHmWN%2BW3rWmHTqAyvV%2FyAiEA2%2FWjOhucivZMzkLjfSOHzmQbGj1ZXlFa5xJqD9JvxxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqD0wt%2BU1VVFP0h2CrcA67B%2FnLK7qpdC2lBX%2F12gUogvCaZCzKX94sYguG94VxR2d8Nt2TG6iyRIm2TRSeSiwWoOOaTeji8ugBGVDKjyuk%2FVP7eMDAi%2BF1JQ2Sf6F4yjaWWZjw2LxZtjK11iaqekMIwIUUnnRqpo3I3ZeJ8AdxvkzjmbmgggNIQxY3AS9kakcauQKlQJBulqGKUc1GdCpvLtiansLy648aVT6Y64kko7Mojrbj3bvRciz7a33TaSZn6WyDvbPhE6nO05gav%2BhtCOCSGWjfYUwwv2%2BhKlfh17H80vHCRPxBP%2BX2uRnr94s64nSGYzPgxTxvUiLC%2BarUEs8tjrUL1VlNFjxHo6OJpptteheWh0R3o%2BUXYzkqMpaR6FXmr1CQ62v0Qw8pt%2FTzoVt1xT7yVj%2FlXYXEkeCSWlDxvVAMqtEq8lkxK%2FX%2F%2FJpT86KDaou2PskS2vd4ujjhTpvEIJ6znXUIA26Cv23YAUNbfXOPbnTIvyZ9DIe2Y6Qa7dg%2FpG%2FXHkGAQACCWsYLflJ%2FIJlKfX1Frd6VSwVIZZTN3EbgNKJ3haM%2FjmIa6fRsTWw4Clf9n7sDLf4u6YHv59wmE4w4d%2BbpwuEaFZIlqKtvPSY%2BBODSO%2Bws8MYnlt597BpdTS%2Bn7BiBxMNjyr8gGOqUBllassYHvrSyoEawicBzVDq86I0CFU6VfBqxNAUfBKWkWCWcyUmIh7YrFI35K2fTdDF2IMcMohfmUTzWWSulouzpaQgTu13YII5sVHh8QqX3QRL%2F%2FUBXiqqD%2B8WqLBQTwn9OC38WtXpRnbiDzaQbjhM6VJ6QShT3MpZnh9vG1CCuPs9gvuQ7lg8A9VKn0Y2qBIAGpB3wTebH3o3XO35dZFwGBvdNa&X-Amz-Signature=fc71aa24f9bce5dfd46829c16f7d2b2205f84b9ba3a501bac42e25930a8e5975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
