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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRKG7TC%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDDYWzaudnFAMR43BiJecs9eoRvpMs7VTwnYdECkhulXgIhAIqY6yGJROlg%2FCuCzI05k0Yd%2FVINJRg28fRP%2FRv5NzOxKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0j6IxDOsBBXTOgygq3AOuo%2FcVc3I43oqTJgBuhbUby7BZW4AU%2ByT%2BWRbPdM%2F1ODOmDDYVNXU87OeEZp4oXgfmnpRLb6Qq7%2FP%2FuuazuZq2ATTFZj2lx2saBo7rUzD0o3zbuT789QsdvXrkZIx%2BXqHv9KUh5DXyIt7t9KL8VcD9HKWqKBgevC5bDb3WSyoR8u1Yu%2FCENwH1yA%2FmSGrmD4L5QjzGIblJX4n2QHyUSbbyu1cT9iEzuSEdNC0aUY4Ozq2fBKLgtB8T%2FRt9tpf%2FNpu68AR1nEmSEcbyW4lXiuQOCr78ao9ybQVHEtSIJdbagYvVY6%2Fo57kXncqULluKw24VVqZzOhN9kahAI8rhb9JHLJx6V2RgSfyqoItSw2dy%2BMiZMxb9TbMAewyFIUBSMDkKL6SrCanhIJZCaRGOQfFHXhDHbVnPeF%2F2Bnz46YnjnSihG8JltPjW7LgZoDHSqNp3jN1zH7YDsyRMV8JbTYwXKZ06ijhWLKHfvlib7jZoJAP3MfslPiWQeFDKP%2FnWDnFYDFj0XTu0EXYV8Am8M6R88kFQ%2FbJNmE8kzHXrdfSqxQ2R6lN6bRjdEYWdO2OGqRapmlXfJm1AZnCnUUfZH1I2ahP%2BdkA1SeSiP1WlJuQomGI8W6pzRihY99kE0jD1osDPBjqkAZ9t%2Bije0K%2FTGs61ZT3PmSKnJ%2BRaMAIsaoZDd8%2FLKwQkqOfRDUtC4quJiR3mPLR1qgWaBm9UE3y8YYxpjmwXWNzren0VgNk%2BdUHYtWfDAqqq38yxy2lGbchOLtm80%2Bmsyuk5IwcWTBG1GGp8hfonanK3yhynS8Y20NaSPCi8T1vkCoGCC41QI%2Fums%2BU7o4ozbJDiuMwRujAZe6RecV0oUV80BKKk&X-Amz-Signature=9a2686e5d7ccacccaefc37c4888e9e7f914ddc78e1f57b3744552edaa4daf0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3X5OAOV%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDIUwCZPCWlfFiGQL3iDPLn29lT0tNPy60pi8cEYdjHjwIhAMcFB9ngBlH6s39Zt8Bna7AWl98CaXDW9tHwu%2Blue1ckKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8Jsefn7xuntsi2gq3ANONs7SIKxjIpxDbgQV7UeUWw22Yq11z0xlfvI4YZS8%2FH59bsYAgpxoE9E3MGuhLxgdMliFhvAuCkSUZ7nvu0K%2BmAws9uwPUM6HbS9okfbVeEKXhPQmBR2G90KI%2BIKwBwbyiX5yi1dr324KUfpkMFGUfil2Vw2YUzItqbEEA9Rhe7sTMODBXccVF5QvUbkGx2xqeACHd5lpVYL0FTyLkxEekdH6xvQU16ALf%2B%2FPMn6iCoOPSRodm9QPmZD4Oqgaluwnj5dkIB2uB15vCg%2B4Mzg13TkCimh2BRkd3J25zzxWKeEl8FrYkIO83xVewxD%2BzL5KOzQqebIR%2FCpF%2FXtVLlRdtPUYfo9gHSZhIJUP9MDjIGVpYV8bVC6V9eWTXOXBQI4NBKiffiVoq0l9RaXlS4fsJ2Ku5S0s9DoPhUj48dVQ9%2FO0JDcXnOAnCKSpycc%2FKUdv33oqZxavnc%2B9sbd6iH6Kt59r%2FMiz7zrk6rZeJzKDdwALNGMCvvs78RYLxrn0BrgtgbDRbvpjxbHrWcZjAXlOBSviHIla%2F%2FgbjBB1HOwzL247myZ5Ocg0f4Ix2mZQtR3uSJiWdJQSeWq8ksnnZm0UD1X%2FDhfvVlMseR3NaylfXGMHrE3vFxa7RaPBmTDDo8DPBjqkAaoCNKupGQXE2tB5RHzEiRl2R2mBLMmYY6ObK2p4%2FrEqv9BtGo6tvCQF86gIChfDZ0sv0MoVDkP4IdTBsLSeQR8FiRC15ClDjwM9HG2EP%2BnMAmdtYceMb9AvrTc2Sd88%2FtmMNFBb6GkPUhI6vk2l%2BNQiYwCU4Wqjqt7YINQz6hWWpjQF5VkysBw4DdiOffDBJbh42bWjji7aKKa42AlOWEkBTdY2&X-Amz-Signature=41d29cdfaf56440550659e49884f237ae5ad57d9a97acf89f0e3a4e383e23497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
