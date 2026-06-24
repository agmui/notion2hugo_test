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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTLB4EC%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIE%2B%2FUUHAyKLSGqmwPUG%2BDiLEEf7E4YRHfv2SbzTeILQTAiBSNmFZi1J1HYGviS97YQfkPNQQnXAofW0ow4bKHLd8RSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMytLBjCKbxGMBiUfDKtwDJvghpBWDy7rwZZe4yczRR29T0yxShqqu18AeNeKp%2BQ5oi0RpawiqcK2Tv%2BEXSCQuAELhJwWo3%2BJKCBNomizETYrZmJ5XA2dvIMFmjQV8i%2FcyouV1rrYxpKtKWpj9gRnLtrI%2FtQBv00R1UXBt%2F5H%2BR3H8VKD0VsiWreHWljX1%2BYyWyVH1K1IZB5ywg8DVErOUJtzliQavHuRsgQ6kFbuk5jS81EclcJFaoXf9BRDW3IhYvdoAaWVieH7EUNp8vJuodxEa%2FE9O27Fv4P49Brkun3fRzz594DUayunjk8N7yYpyjysIWYxgUyOwv73nEPACZqEP9LXmOOk1LC%2B%2FSg5Qfgay5aRw6mzQKG%2BE1ChJO5VwELNBnUWEisqjfuqzeOMYUqQra9n1Q6x1uo8270%2FLlG6E5ynF4XhdGT48Sh%2BZiYMsmy66M5yC6CslMuI6hvz7ubmd5S1jpHbwl9fdD0mGjFHrTvCbl6%2Fmd8x2GYHgi7AxhIWz0teW%2F6wy1Q3LaBOuCV1tiA%2Bzax2X62AgGQ5trxLEXb6YVzrl814Ta7VySgCgptymcJ04UCwILtsDSxWDb8OiPftec9GxulaH6u888YKvWxPLq1BSJPyn7jU1y6GaoSAKJ%2BfYrx5HeM0w0O%2Fs0QY6pgGuXLYD1dwpXaH0%2Fv9W%2FaHBpOMRbln5%2FG1IKLp4U0xftgi0pnepC%2B%2F88sd62rb7fPUzgiWxtimqvlXxit%2B5x5ocI7v9PMfo7cVphmdQQC%2BSNsDHcKsWn0uK7kZnI4lnnHFglCSyv0gyLL2vhgNTvpHkFoQ1poVio6k%2BspcjwpKIQAkwu5f0hdc0rJzagndrPYR5bXUu1V0IIyiU9gsBmwO%2BFy3DseHG&X-Amz-Signature=556a6b2480ee351d3c4cee1495bd48459e1495cd9b105991bd32acc4431179f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6BUOAX%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCklRIi4WD2k6HqbEr0XYTrC1UHol9WnSocoiBMvaUAfwIhAIXRL%2F%2BpZ6f1qV%2B4dr27xfS7tdf9IJMer69mObm8uKWzKv8DCCsQABoMNjM3NDIzMTgzODA1Igz2mHJ5Q%2B9m%2BfpkZrAq3AOXLkPp9eVG7cpcQCV0a3OPT3BJSJ8sfKTpG85R3U6ETJAZRkNqXOFaMy3mRZzrQ9V5XOhODDozoGQb9zLNTDIF5%2Bkssh1mVb4wfmNmIkIeRBDvlH3YL2EDuB7NpdOqUPahMfKCq9ThcyQcaULM3SW0rpSLXKxvzNxB2FWfeddPMC0S850HVCGUcy2%2BkfTvULGljLQVZytrc8TIRntDyl%2Bd6e1Ac28LGXy8vG5yH%2Fq%2FVraUzcKbJEVnPTaWl9zF40T9f7aAqq23Y%2BVyqQp77O7XTZe4kvXWB29XwGIj5OUDM%2BMKH1ekgY%2FgNo46KLKevHCBy5%2BCp3fhTTGDFPku0MBldZsu8dygbaVUkrjOeJ6JyirOkmTzXTipJI1hdIigzq7qKviqbkxBuIZXdFd4ehgYNV2o%2BVtKPiZQQFDTMrLPueJTV69oxVspD4cPCSd47gJPG3LGJRiVukZbW2VPOywI%2FmkM89faO%2BlPxCS2pAfYOa16hHezfBVomJ%2B1b9OnFjGu8M6eQgHJ6RioZprOsxa8%2BDk14UD6Rr%2BxS4n3smwtgvR4WYUJ7s4fuVfmXX2bEV%2Fj4AyymznMeTCCk%2FIP1BqQe9qVqX7aB3leJHNyNvoC4552LxMj0K0aFVuViDD67%2BzRBjqkAcjCGex6%2BF9rhzpKI1BvJJzoydIy2OvFg6p9xzvgx%2BZxNTh%2BSQYHG591ZztHBNDys%2FLdOrkJhF5eya62mPLGVRSdbLH44mV5iZ0uR0qPk%2BVmeOPlfS19UDqvGocriSbtgqQi4UbtoYLMwgP1VEMFpS6SR1YZJcBbWJqQeWRYp1jT7Q7ds7ynAtqmV%2FG1ohq6B5WSK1BD5qiEYEDBdoiQuDFXaTjj&X-Amz-Signature=94d29e22359c398bbb9263bc19412d9fe8663bdc0a11ddf4074222652da82222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
