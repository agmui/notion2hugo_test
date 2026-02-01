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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWITTQA%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdAoPYQzK2egFpIh9uv%2FycFVkeEaWB9u%2FxetCrcRuf4wIhAN9S4%2Brov58cMldz%2FTRqPiE2pcDHAKaGxdQ0yNs1k0plKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoWyWkZKnSQKJLo5Yq3AMugEETleHBG4W8U4mWx9JBMTKBBqiARdoYn8K%2BaMcTwlD0b9PgwYj%2Fg5bO3bMvx94smku8%2Bc%2F3P%2FHUCV5fIIBQ76vC1SYs%2B9UxZOVdbKefnmPJVg0PQ6Od0VSXybyGPTBs2gZnmfRJdmtV2gE5nhFN7lcSfZfYuYW0GHPLW6U%2BfB%2BBCZOFsL8u1ufryUwaxKdAWaYjNCLG8ziKB6N0rrytaq%2BPrZtoVMMxrw7gf5gV7T6gfw74p0k1Qn76wQM17YKUUxjcPu%2Ba27Imbh2RaY%2Brd9rG%2Fuze7BMUr85H3VVnaz7fFV0QpkMeBnaxYNpf8zrkaxoxJdz%2FE7gyj1XsXDRppBRcEeoRBUDClbE01qGDKgGlRB84LqCJHCjL64uWIITGojMXDC9keppUjnegt2cHbhIBWhIEw9YZcy1AgCJCaSCDscvItm5xHMDT9My4r9amin0L9Tpo2fepsulANgIzlIiBWRUiwE6FCsvszfELHeoNvXGekZtczG4SdG7BO9FqA%2BGmZrgVPCJNScjcBSPnFkgdxR00OkkQ1nvIGLyNX0xbIJleQWEuu9axz%2B3YwXFG5FSuCrYI8EpXUjGCoubFG%2FrPhq4eaaeDhCTCSawse%2Bo25Wmdveax6vQBjTC68fnLBjqkAe2ptjmBH6tgzgUc1MIbxhIr0OoHAnZNWPfPoQxPn9DKYLWpkakvhWCRafyXWO%2FUcvql9TlVkzGZH4WBQz1eUTdv4BDtNi5NvSPQVWLU3Zl89qaCz6A2w6a4Iy3Refg9iPSsdyvrLRoJJ5h3lq2iI3THMmSIM83wYLrj604JdVZwMoUnbtoFZWhRGazGO%2FHvjGX7Uq3ish03I%2Fx9MV%2B3Z7PhRD7S&X-Amz-Signature=6fa0d3adab6da4dadf697a37f02b8814303eb0f586de20f1ddde7c3a6059f910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4H3XZL5%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAen0RZcfQ1GCD30G1KM%2F93v0XyQ1EOW1V2s%2BYIbpYqUAiEAuS2fS5ZggySdCKF8fWRPF2xp%2Bhki2f8O0Q9rHfeaHWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMtaH1%2FFGJse3kXDSrcA9ceJ2MFkdnxBx%2F3eT%2B3sNbpUKoPfMUkZl%2FJZp4E%2FcDTJqNls66Nx9kq9j%2BXxTnFVSuaXysnYxPSvVlVTBBt3%2FnJ9oZkZIHqr5M43S6kfXrVGeDhP2a75uWRMLpp8FzCPiLvtx8NR55ZnpzG%2F9rtYIsN0bAaRD2EB9lsGy%2F8aJdQTYuycdFPe6EorBVpoDMOh6P%2Fd7kVPmRJbLqd1IENSmnUEIofkmTuDkVQNtIspxmht4orzwBj24Nl2LAa2rjxSaMtP%2B%2FWGeSNG9uRtH6DsCFaVScQFZZ%2B47Mgj5wQrxhLxTj97Gh4r9oj%2FqhvJIo6X%2BILChvth3gTEf0HwLQqKaVLu%2FY%2FAQ6e02zcygv%2BuR1Kc9KOlV34ynsGSOoOdvE4kjATiEENEaFOmTxMfPPAWIzcggw5153gB45yMvineQOM0o%2FXUhgsvxhGoHHslThJiwx6%2B54fZAbKSn2DuMGVU0SztQHN5qZO8JDtATfeiY3d8p5kfw%2Bs%2BUCoaX3Qg1oXrbsS0XVD2JNB5jEyy7ol48xO24zX0UU5Yk4KvtJ%2F5uYvSO8BMVHmkIuSKYPw8PAUTL7LFJIqgJR5xMzKibovOHYzPxHjtWTuFELH6WvYeea%2FtwNs5%2B4h7erh2lfrMLby%2BcsGOqUBuMXIqopwrYrd152Okv0LZG6i7T87XGkXg2XD53SIoAtqflNvuC2G%2BWxP2%2FHnWtlbRdNNLLAcQ8NW8j%2BRUTFFJuHYXXw1MKiKs0PsHNmsrdohultAhTD8gNXpND%2Behzm4Ddz9fm1WgCv%2Fe2M%2BMWmwq4kQOok8MpP4wLVGNFDfVkVpJRYIkekx1HshfCHpRnBjPLyz5VNNtFGW0yU6r%2FlGo2wX9Mj3&X-Amz-Signature=b0a55a31d2eb66a26aa8dfab1b037252946a5a96c6196fa514520db0d39c917a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
