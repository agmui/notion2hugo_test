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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BNM4XV%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Q0r4pUFouzxCbfT3ytmJvQ%2Fz6836a2%2Fz1lPqSnQqjQIgLCUegXs7nv%2FoH1GCtBKkgYwfn9N9JJBOfS4CzOnW5b0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhp7t5VQjVB2yZwjircA26S39rrIIFR5r22t6USacdpuT3lPosl0JZ5l4ICU0Z3OkkDuyCH0ybNzIqVfQtAeRuAhRcXZEI96T5AZVhZaSpV2KevF%2BruUWcgTlav1SvsM6UubYphnTks2JniDcJL1i0%2Bm0zU2nLXXvgxFFMUltvrstu1zXy5TCKYtMtfDNog3lmoPpzlrVI1HQSsQC5tvD%2BrJ15e9v5gpJ%2FS6uQZhza7XwN56pHM9vRxRHa7s7pRe34kw67XStU6QUwuPHR5blXu7civyT%2B%2BDqSz9uEKUZEe5xC%2BvHY0WmOCZBrr7qkeHV7zspONdTinBH7xzd5tEbuhayNm7AxqfzFhKRiyHIzI4t70EiBc1EAxpadE6zWHoi10akcpUBAsjBqU3m%2BWaaH1tUZ%2BoHBtnfkPSY9sPs28u%2FFVDCCil%2FM8a%2FXdP1EwocYUCkDMupSOxQic9tGLtwk3k0AsnK%2BkdCPGS%2F%2FKoLlnJSbSIwt0vHjPSsFWNdwnwz4Ap7AnmDFFnDst%2BGqtzern47yYj97YfvIGXYiNe1FfYhhjB78kolow7x0UgaQR5NHyYxBp2Idy%2BTk5f9%2Bpo5OS6X3q2C0RQZOGRyxXroCANZHs8FS2%2FVlLw2HrVPQka%2Bv3wz%2BDGkcPsfMeMMPn3swGOqUBfaQZMVxPPK6TRqchdjbZNBsnrU8FRhTZPtqNObJYJpmbgIrj0GNL1Fq2fMo7K1LpGhoc1qAusgG7FsNbr8yBvhoDvanKHeRTTLLW6GvRr2NSLLQBgyYJDiWDCyVomh6lvk1yvY9ARR8OXQdMa8Dwri89cAe%2BeFknBqHNmdLmwzvRjRM%2FE4iyAbPcMicdyIjPal1j1SPTyZNC0v466z732hH5VvQc&X-Amz-Signature=d107223048d784ec22316ef0ea3e00bffabc478d36f07d032d25ef0e955e93db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCCHAD2H%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMSrdphPGS9HENwyElfqzDsSxvdrd60BBaD44WgjUn8AiEAtwoIIsf%2BgzCz3%2FVuahQid5qHZ3eNnLxrNuLC9yAb2LQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzeHCjdoBogwSasSircA47b2PiIZSjnx9ERzR2LGtAd01MMRNRFe5qKy2h43tZ%2FTN9oSexO3l9fe2hNE%2BNCyv688v%2FD35uC1KiwrxkLR4rKfTy5UjmdpZNiyDo9gHfWE4HACUz%2FpGDgB9vb57pB7wJh0MzZTY23TToXga59Fyq9%2FU2b%2Fi3yK%2BDRbBOdy75e4NrfAxTIBu8%2BXc2L%2FvQ2vdkyCwosI6zWpwIRRP1tzXOcmSqEXGgp%2FiuFQ4OcECI%2Fvt68sMCfiL7LLQyUklEAUnx9p8uQrBFl76NLw4JhK59RxsmypUJTAOEWACz1hcBaxlL2LJSX3msdFij5uk1UsGYH61UkyJTsX6zD3Rai3V6kXgXAt2ce90J2GWWOEYMlPwJMrxvftAKpKr0zyBpyWynIWkGB6DTDu5ELd2MmIRW%2BLXu2PBZqhBoYWLF%2FSTSa665FpnBXTI5yZqNpGI6P8m9D2F8T3kW4hxnsBWTt5TnJv6SLN%2Fx4NgpoVqkp2lXgZQ2gal34lU064LH%2F6NI%2Fq9%2BkbRmJsYNaX2n4mb6yBinOiQ%2BYAe2VTMe%2F%2FXlKddnfUpFJC5ChawkLFR9xNCmpzsQF3hpYe6N96gDjeNNxPTJ0vzuOHOiK0Qahthb0B%2Fm35mynl%2BRnZoToHLemMI3o3swGOqUBYQrUof0NSNb0mNowdDNYbWRGO3Ig1kwHTdgwo%2FEGlRSLqvljMHP3oDPuw1e9W%2B6VTrLosRLLBs8pdVzneF7F%2FNYrH5TsSpklxTN8vHUOQuxSQ6XXJpM1OOAT3%2BvIl77DTsHdNy8%2BcvF0eggcwF%2FVkF078cc1pknpWdZlszbX4HE9bMvjK%2B9OA6bNoxunxatlA4lJ6B3LU090tUifPr8Vp%2Bx32EkX&X-Amz-Signature=26c4a2cc6c1be885e0f511b396361d2d7ea951a6f13f41cc0ac00082fea93f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
