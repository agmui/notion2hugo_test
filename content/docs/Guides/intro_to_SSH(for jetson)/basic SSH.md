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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN36BOV2%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCseaqEHJ%2BmB2nM9Hi9Oz7cz6QlT%2BAvjILzGe4T8FkObgIgGXTeBDMem06Hag8xeYkNtW%2BbN%2B4CPJXOSQumUBBmRzQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8pUk71xgjeYxgxEircA0tbjvKZv86z0RCOIuUxEUyc%2BfEmjeomBRVPpXnb6IjhDYJ03OSjO2ZFeA2m4geH6%2B3%2BoycWUCHqZQtVcN%2FtxhAWDkotnHlWUkjBCMht%2F9gt1ustC18Fo1ZNK00fcgLs%2FLeYC8Gdg3j2mXB61ejHnWaTXUYmBamUiAoVNTa14ukisJfWV3XRiEVHfQWl3bvoBbt2T3Jjb423QpcdrLcdjryHIbUCyzuCaiyt9oOJJ%2Fc4Bp5jPxExZb%2BBBjFCrM0Asc%2BU%2FxGobeHQZHYqZ%2BRzH8qAG9MliWeL6Yy5bveYV6quza2nr0eq6goVllgt9ynG%2FmxaLL4DyVxIo8Yztu2n40RQyFuElfWVBcFPEqHIZi6HBD0liR65k2fxpIQ6YlYzvhZkWJzz%2FrtMq4C4L92cm%2FRCYrkJt95efOsEn5rZ%2FmcU8hPYe54eRNf%2FvyKDOQ7jkQ3uqE3QT4Ok1sFTdnquLCwKmMNaFTyIt1aUJ3BPESidxSyDybs8t5Xh5%2BbI9tVxYWQwYIMb%2F9nr4K0a4PQQX%2BXib%2By3jkDSdbtP97o9VaQp0WqaX2ZmUZyI2cUkGLhNvmZqLPQvE65YkoPXWu7JU2YKGYkbufi0FXYp0fUgARwc8LztGShBeuiwHx7QMKHtnM4GOqUBYSmmzd2bfUxOoXWQtkFfYFpc%2BOYt56m4uCyQ0EDvN8IhCRXWDNq8lXnjUgUuh3CX6Y9m7nlxfzmS5O%2FnyRiYpj3Fa7HohGiGoqXkONCxKKe%2FRiDgtFjVfBGZw7OuF6wW43SfvJcTQOuKFS5dm81%2F%2FGvkcPdFyJiTMOLWDY%2BGPgGkxpO7InzmnMpftITCJq7vSeQmUPZKCYi07GcNvHG4N5w6SAG1&X-Amz-Signature=f741ed5150f2694f29ee54b8e0bd0a01d70d225676a526c9fb11b76ef43b3d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYTPA6L%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDT2el2bk0q4fpBtbMDyCqZvGCem2aBASqSMdfUzu05dAIgTkfWsL%2BWcp1vw%2FMBFXwoEaLBaTmUy%2FgDv4i4T0MsmRMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICs3VXGNWDZ2HJNECrcA%2B5f%2B%2FuggWnWtdbnidJ8baobkFidUgIWkCBynI%2Fds0IHkNRI3W5ouZkGTvKRfKxvEM8jTmJJzWioxXgWHQ0gfEQVahJ1YhQkYJrcG2qQQDewmxO7sfNaD9QwcoQt41QB7z%2Bob9YeCt3qhZt30Kza8s2oprcJDYBC8neZ5pcmsaoWP2xb8woATMGYlvaPfr6tex2dpDFUTzX0VJqgtcb2rzwzgOVBe05Y2s6%2BsLRA9VG0%2FFF02HYWSvwZ1sd1F3nZb7IXPZTuj4grrrR%2B4hZwRuOK67jBX6CFzlhU4Cpkizc0af%2BE5pY%2FajoMpEP0b28RF%2FOzv4oFZICqmEkwHNsdAIwc9GSU4RCx2K9tBjqZuA3jbbqOQ7xNfLCj%2BKsvPNw4YkgCvw048Tq%2FYuYQehC2D%2Fw7NgFuaudWU9u79tHkjFX%2FjkMaIoSJvyLMgrvB8BBeJUJVzr0Rb4iBPAcn%2BsgbxGlR1vVV3kIac99Xg%2F0%2B5f2gGXg6Hr%2B4uqVEtK0FgOttoMXDzwY35ry5Psp%2B5U1awuG%2FLBecNQZ%2F5AcbxO9E4CJUmccDvgu%2FDW%2FEFad8eq8E1zXHzvmt54Glu0L2gHGUVSQ9pwJ%2BdSoxy2MwFzOTF6OIxD1aoYi3C3MJJ5MsMKzsnM4GOqUBVCpMFzos7WHmFP2v8gnWQD7Y0LBklDbEgYsYucY6BL4EumHHDLguQsbsv3qSJLjp1SPmx%2BwChxbfxrPLOj4G9JrUjdI8wToO32TqGeB5B49taLog2H5KOx%2FUAiWGPFT4p9SiVgeryvdF04ZZEyv2CjfrGV4gJB0sdy%2BQIdRHz7J5mYuvmK1mvRQ8f6PTxYAc0eGU5bzHjkdK5rAhpZlASesXNdaL&X-Amz-Signature=91b73f1e3ffcb4245caf341a029d3abe82a5949b8b7362051f6c627a8bdf6252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
