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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DQ63PT%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGzPzsDdhcGKWsDASnU7PMZ0zXZp%2BrE5EVfckNrdCTzAiEA%2FPA2%2FI7byV8aFiHEV9jysjXRGiG0JI2KhYIbQz2whygq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBijc8wOVistro%2Fp%2BircA%2FL5Ba3LvqJsyrb%2BaBb51QMFHjbuut%2BHSyj950SWOzBtKDmMrufxKSfsiamLuamABAzVbrcMC8aJzjbiy%2B23qe1tgLU0y%2B7B3iKH78ZprJhVcKZsZvcTjV1y3Nh4eY4amv6KY%2BeL93PDEhbLjwEaTnGINX22XOOsjUjvqynt4LhUZQts4%2Beuec9U7eY%2B1clBtJrQSguHuAvqmZjg7n%2FzdLXxo42H9FHqc4gdyxr%2Bf6WmtfgIJzG5jIuNQzOOPwUuU%2BWoaxIXChMHwe7ATzaequN1zwcknIQpMy19MW06uYub%2BzNELnDcKxzY1rbRweica9p1sJ4Um8qVGFpvfqAnaPfkT7TrZGC0kSu9TQjlbIyqhC2PUxyzsMQ%2FgWs0KLdkv4X7bb2lNrnFV0usxBQWzN%2BPzILQLqmaxYASzRV9F8YrGzQo%2BxPXZq%2Fr16f16qh8A6nkT7z4ll2bkNqGIPzJJ7p9dVDiv9h374XzdRlE5PqMPSgaYQWtCEEugdRKA2%2BLNw3C8FS3Ytei%2FP%2BevgqdjlupklO4Z%2FKO9nzdW9dYac5bxYf5JJw3wGgaoMogUHXSi20jTXLT%2F%2FAb%2BCnE5bc%2FdpfD5OGJPrqECkEJ9xxrAfEauMmM7E5yOR9NMAxGMJPZg80GOqUBjQwqRnRjBDh6mkPavh5b0iCCE9QhSPvzkokW7cMa62YLjJKG%2BYPD1OSDp6UrDku5mBMmRvV0HnZNZM3BeRhqPcE03%2Be0IkAMK9dYdIlAjymiYy%2BAZ17MOccuLlCamdDTn6DQssPw26AsdZ%2FJGh3S2cr%2FoEt6IdOqwYqg8h6OAlsoOUzpUvs7eQi4r1%2BaubYRCr%2FTbQkJi2f8SoxHGl8hbF%2BhEGPd&X-Amz-Signature=12465a2baa32c481c2d78e1c7ac27db9f733a63cff7f204f4dd8f824dd0b2890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEXDLSS%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEOH5iBPac2VZJpO1JOytX7x43DUBiiA1OAiQiWTwkYEAiBpVJ7TI%2BTuRLS3c%2FgVH0rXuJg7Y%2Fla1%2BpQbcs5kZ5w3Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMU6JSQ6WSzbIk70Z1KtwDyyYdR%2FNAFTsokBvdDpway70ftINIWXqWOZSb%2FfGnrpQS1seocI6QIAeGjpsrajhN6aEkvE738%2BB4MFuRC4uA4pq%2BoWVpOKvooWrovevN%2FVi503Akg2ozRgpTcUMGUm%2FFfiLsaYfqG3nAxl9Q9Mrr5oqzzG2kOdxZwKrBU4FJjth2KNHIGE4F5pYd3qRTtc0848uDQJlKeZGZ3HyQ9cX6GS6tDbldPT4lBnkiXv0ZtK8wFbauTw8N%2FHgLIf4UyZpxnEYMLoiWAJ5zOO2alGkt8V0hJIA6dzCfWYM11aFuIfxXPNysZrBC7uB2Z33NLxx%2FO0nMOzpLM3eARp%2FU31dVNAIJXBiXM4Xr%2FAp%2Bd7TJ%2FkASGoaNFekSYE%2BTJmUUmmkjceI%2FVkgyiGkKyYLJT2pEc6GIoE1nIadVQON5PZgQRjNkGgjGmnqWOQcauQDbuArraq6HMTPRfuWM2cCDoYOhrzvsfA0CDeHu0WlKCiUFBOyH4eC2lM4wPS21PAXSnvn2Khe4noClxWU2vxwP3Qs6r1z4yXn91%2FQ7amffBbftimfXlRBC6NmMV4T5GTHecuk8c7DNU1jP1CEKXeWBr2Wxp8izjTrDWAv%2FGtNf3Jwuo8EEs2L8XHYQjzEEHTgwn9mDzQY6pgFw3camUfASB4BUKjfcZeRdk2StkhRMmKGHpfcxLjBXyr6crX%2FxDy3It%2Foa4uTS%2FrAeEuvr9bVZWO4RR07delJ2W5YUpB3JYgQicJ%2FzFude07gPEdIi0Yl4dVdY%2BPtLcYrrhUup0EZ2PNd3T%2FTSbGrQBsJ7me0ubr1NBUj5CvRtObTews%2FABt52CHRXnp5ZXL4fo3uJqilydPIV%2Fy%2BKMd17WZNgGBGe&X-Amz-Signature=557621be0369d1c234e692fe453bdb0099eb00a972ba441ec98ffac38f4df454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
