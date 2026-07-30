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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVFTSQDG%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUtbYrS2EwQKB67pat6qiWu4w9mNLuCWqnUq0dfpu42AiBQPz%2BGU%2FewglYC1bHWsgwYEp64FpkViPRoRPFLSkv72yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0%2FQ9MSukPJssO9mKtwDAQ7ArLC2y5PZ5IwyYi6EXcCIp2YlkJeq5rbQxFyKG%2FBjcYUdUwtVNGeuJVhfwrJnnrRpr3DNtxSyp%2FiKFN%2FdqB809xSD9uf3drVPRuacwPy6CHztX5BDwK%2FnOrTtZAp7JpARklOkGD8dBH8dcpFfjieX4oKbe6iUX8T99lSuwTJ2%2FbJ%2BN3LMgN1FWUR9Iu4yJ1WcjFrtSdE77kajKXuEDOY7gCusR57vzQUc8zHdbHcQPFPl8IMZK%2FmudrM9TVCdVycKQMZmLev1cTOeEGq3yyQVPBwFvfmZ%2FJnNtgFbj1dPMl2BjK7vq83N0l4h4l0ZylK988oJHUxvg1t2sOp9iCrs8lMUiW2nLGlqIP8RRb31GuMBRag4M4HaBGpOWiFtrRRVP0dclVXORq9dX47kP9iI4DMXpHTfT%2FApSC%2BERXuNAmpp8rujbJpJVlnj0ZiXACca4ddYHVcWVAVpM44NjvL2d71xuBlJowxrPB4pvboG%2Fabziz1e1BauSE4fLAgQNdaj4CDdikZjMN2PBEIqAj69pAR%2FeCjChDfHXMAHOoPzFm%2BacY3wvDdqxEVc4V0gatTy6g%2FMsk078lhzqCbThY2CKH3auPcd3Y1YVKpYJVrUDmSqgv8SfNCWM8Aw49%2Bq0wY6pgFdZDBRRMqJCpcBOTBblYBELhjh9NjUWxAT49XqXVXM1scvJYjxqn8HEMDpuEEgcBrmj1e5Fhyig24QSw5u7hC8vjF%2FCq%2BUf%2FQ7MaOB%2FY2NrjC0CT1PediIsdyoYFKg7Tlp3gb6NjCFy%2FbbR8Aevg1hCGYncqUdzlt1qVfmx3X3rpp8GVcUBO6Ypkb2%2FRR6i2kC5wG%2FQPmGj3u2TEOXILxK3nX%2FuT6w&X-Amz-Signature=80997a44da252620bb3bb0c72cd0cfce0ec660533f04968e80edff0afda31af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5NZPPF%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjsK%2Ban6ozWyTk03DTanXjMTltSq1Inuwa18KhGFMY7AiAr0P3UmD43EoeNafg%2F6BHA6XWlGQj%2BvsD1Bu%2Bf27WrqiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ%2FCVJqVSHFRB4QjvKtwDYLA4ysQtkTTxtm8nmU9TJQwveodIqMeaH0WrH4ZpQq34JpKiFP14OB4L8EH4gWWNfCkmTEEoiY46SVBSHgvgRChZDqVd%2F9VWnEiKr52oN86%2BaX8KgmsTsw%2B9TZVdjx%2BdKN9%2BHE86SOQYZ4sMQxUGEnFzrLxX7MsEbT92tucMifI2b1eJc7t6ODLH2e7pfT%2BmnXRUDn3fh%2FDJ9nHkNdiys0zzVHqMNmKlOLo7wY8Hgwncv%2FHsr%2FwYDNeYmUG9m32i2AhbEchRlwQRMj7RKuiZY6AA3eu%2B%2FFXECegm6RnLSqkV9l9cWOUsHqKsiT1CBwZKBzOBGPKIWxH%2FNCn17gUVNDj8J9ArAqsFEvNNCpesOxhyCSDXEnYdrYqybEhcgvSq%2BOQ5rSh2Am6d2vRaBliU78SCeSqB%2BJVpgEY%2B6NnWBkm4i9JdBMNcGhtDy5BEcfGrQPVXBFfhZe44X2682SW42cy0nU6W2XFGL3Za4%2FX%2FVjl%2BNzBoiiHX3gn75BJUc0Omz8tHHFqpMj3ZYyB7RQKHVgbfUixdpmRVPIxiteNuJ%2FqJghmfGq6M3Bxwk0jXeOCJTg%2FV%2BhHj9wURzX0ZksIHYzqUso5Ycwunfc19UhzpG7QE5mZmiR89Zryxwhgw5N%2Bq0wY6pgF8mI9lDx2XCr%2FcsTmWbWwFEjgBB2J3ViIWcEAVarzuQ6YM8XoH8vafUcUFHk%2FkXvJQfA9V2HHQ8GkMxijmmQWMTNkcrZvwK9ZoaxsxmSWvTKBanUjd6G1CoGGFZc7Qo62ZokfpP%2BIUE0tEbjcEohLYVIBNyiORpBpcH6GmnsMX2Fs9jl439R%2Fz9H4wvK7gV536tM16%2BW9tiuS5R2x94gR%2BitoUfuBq&X-Amz-Signature=ab51d214ef61c3a9e48d3f95c7f5b6bf87d6dcf2c24deb7cf5fa4bd701098ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
