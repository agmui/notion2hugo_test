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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOVUI7V%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrEjYieTgwqW0BSuLw%2FoCvuyxuDxb1ySOyFmcZats%2BZwIgIoU7QfmM2TSTQrTjESdmglnTTwfhEM0CuBIwh7vWflsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNcK2jK%2Fo789lvR%2FbCrcA1hITr2oPvnWkvyRpK9pVW5yd5OuLlQQf1RxzbCzLZlassJghWuHNbKtTIL8v7xbCW2zcLFb%2FYBfZOPb4Pm7L%2BEaoHH52XlA%2FobshsKiW97cOrPkr3PvULlcusCPRNyf8kQxWoBDSeUc9MiZwLvwy6okY7gvn5NBTy9SoS9SHb16dql8O5bz0wXyifxT3L0XFivJMMt6Ifgzq6FuEFdBc7rXEGlZrtjFxrP2PRcmHEjLD8GApec7djVEr%2B2Fgg6w21amRsLTczW9%2BcwMXBWCWi96deGbCAk3hmvYGkyDiwDgCCyVwnGwykSbx9uFvgX7aNQiqpEsCyWEvTJ9yZDMJ3CvvY8eXllzJ%2F2Q61bVI8xHiBa%2BMer0EcGsuNuQ2%2FoI5tU9z%2B4P29tAFn%2F5FrndY%2FANgl%2FqGai7mlvmVrkxoAScllJTyBcAiZlFC%2F7PzA9LdXLk6KLroWfS2KxB1eP5JWNEX2jRNhGBNRKYjoeUb6LoxGwsKxmOeh0dHSB7XdTvM%2FmtvuZqWZpn82f5H6YXH6MxE%2Fe4ZzVX%2FjiJk30DrnozeJlwAg7UJF8sFOak5xzXbxI3jNXskP3Pfca%2FAFSjUVrwqvSVseZPJtkDFgQ78MMd%2FRv3IhG8dw2WKWp2MKyf68cGOqUBVkLsqXQSb4j7gJhCGESphaL9qCXLtCZ91RdWe4mfUsu%2BYpclOjLqaHWKzXRqDZtbeeBF2VXZ%2F8eimNzujrvIiLo7oOgtSBY9GTnho7GcHVR9h2W2unc9RRhVMlC9B2iT9nqNwhBkvi1SKkA4bt3BhC8NZHjhvbNdvfcYIhHUYc66Nbvs9micKT3yfc0xo86W8PGRdwZ0EC6fUr613cGS0d4u%2FnmC&X-Amz-Signature=4b5f2c22bccea8da7b09649292d0f88206cd83c87036dfbfac133ab91ae88d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVMMTCL%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNZ3iW%2Fu9VayAxQp0MCjs27MzDdm0msIG9Ecpik5ABZwIhAJqobKm9LJQLieWFudFuCP4oH9AC%2F6ML1Lh5w%2BBBCybgKv8DCFIQABoMNjM3NDIzMTgzODA1Igw4oGNI7BtZaplXsUkq3AOb19gIGUHa7h%2FRE3SesXplvhwGAPLzx%2BEP%2FKlx%2F70FC%2BP034PHLcQc9IHWDMa3BtDw1gCNa5uOlkk8QgGg6YrlOPoO%2Bt27NNArQMnffG3b%2BdmfYKTtLRL2m9uF6ZHeppEtePFW10W69KGKzxZiWVrVOxWaE1M0Uyx8tV00KlQNog3LOxVBiuh234kOXuhHsyoCPNbemt1mYj%2FopGZ8LX6FO8oF6qW4cvrPM0P83j2klAABeDZW9odYjXViQBz4wgbw3LayGUSDSqEbGLWxa7r7Vbe6%2BSDQCVcT82q77VV0bXSUx9IjbPl5Pmd0kXLzXiwbrcxJwLO1t5YCBA%2Ft6e09tea%2FjNdPTv396exf%2BLAHDwAjbBrtX8LSyvkHoKCZCZwciv9xlcIvFbf9AT9sHNihWMWeJ6E0KPPCuY1og6un2VV6UiPSnI%2FI9ha%2FoVmMhoI83kCHexrxjBMW7r%2BfDv4r7olNDO3rT1eMX03PxNbNuqcEj3tzTnrj0VYNBCBs4BwEjycXs9tbfzWuvb1abqXftAAlDieHzUxyPwR3ofKhoGL8vCvHPWZvty79zutszurvx%2BKj%2FspIhy%2FSKHUUTAfrWR5uMVSKLJMDrnicAn19BMDF0VZZ0Fu8PjqZ9DCun%2BvHBjqkAVMkyiK2DcaDAvNkqfW1cFANVVlpnScwk%2Fkh%2BXUj%2BPwHHJdNvp2ILCEzaMB8TlL%2BAYX5XW2jaR5jUnHhzQU6pVLx2sJzQJFr7PolmDGfXM7E%2BhqS32%2FcUYw0CqkuzmXCrM1oy5fOjaO5FuC36fBhNq%2B2%2FoqOZvEVd%2F2ARd675fjIK0myaOJd1%2BG1wFdfyhY3SGj5Iz9nKRAazHdNJBnZOdIqmoYr&X-Amz-Signature=c2808fbb064356ff98feb686bdadb5160dd9ac235c65fc3cb8e1ef333ca96b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
