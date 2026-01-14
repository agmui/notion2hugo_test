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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLBNGQW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD01YWx%2FZwwIMRr9e7kL%2Fvx0kqQi6p7y4q3H6Zg%2BNKtYQIhAJa5r%2Bg%2FMvUwfVBJx2j34gIBi%2F4BgnNChXwfHj7Wgh7iKv8DCBIQABoMNjM3NDIzMTgzODA1IgxmrEFMG6tlre%2FfKukq3APJP3dsY2HSOVS5v0r1Ob4HxiBOZ0bLkhMKZ0%2BCPm0I7Q8e38GBjklVY3ELXVvU0eHGTNrj0mHGTi%2Bvv1vQwfRhRwmi2tDoPz%2FUFCsMzhyTRQrPxF4UrtPoC5UThfXUWfDIRjiTUogaB79JudbjgdWVomWPPAkoROqAPzbhcm3Bw1I9KDlshHR8p5Our2pgMDcSNYUnFi2Sj4o%2BK4RKf%2BzwsHZJnaRJo0vwxOy6FdLO0bAmGMuo%2FoIASXVtECoIEjpN6nCHxuAgeKcSihslxixIwhl54tQuU6%2BuW6FzmeWCHm6cq7Kpd82PYZCKsGR5bOzmOLICfJFzfbN23IsrGpYAiso8BHThmS9I2uXHNILHKi0guhhO2U0betJOVti0eL4mn8gKBgCv8Oj6CHhyYa0FMrnx8WCvifiahUI80z0KP3gQ0R8ndGHe5S%2FQW4N4HMh83uJvbbpa7MrIx0pecBWo9HHVxwItQe%2F5RRbPMPkj6z%2BVQ0V7z4xNQWo7%2BnorBIdELU7Y3Q8QypJsESX3y1VEqvPJdFNGaWmgrgV20THBIb0sTnNP7ZwNroGh6MkDmRtWOGI7YmRdGS1%2BJL1k37evtOCmZO7aYW5VKiqWYjArzU%2Fvt6hS2vkBYCoD4TDHzZvLBjqkAeGO72zaRbiJNwOjLjPXy4944haK42orMX%2F8w1Dego%2BTU3LPqO%2FgqszpL1ZWdykFdEGvEEuVfM2f%2Fpot1e%2BZ%2BJHm4cwHnJluP2DnN0lMWu3sofJrK%2FZNxkI%2Be69Div4HnVeQKdXxZ7TGQliIA7dPzWmQjA5Yc0L7HiGvkVEbu9htP5jX3NeAN0ECYuFhZMfKzRA1vQcXDf2UxJCqkK%2BH0s%2F9sd8v&X-Amz-Signature=8b0a219e17bc400c48ba4680604fa6c3f0148b532ff3e33d72d00922463e2084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJOULXVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGvs9S%2FBJnx896MNhZcsy2vB1O5LH5tW1uBQBsOicoXAAiBtiMr5gRWCr1fVz3a3e8puOIRPo2ssVylUUrZRTuyMpir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMLE4hj6lhmuem%2FIA7KtwD4D4EjWwseVDbzaqR1xCt9kBJcDvC%2BL2P8%2BPCeR5FSe5MPX6oCfuR63vgI5fVD2%2BBIA02%2BNZnpWmGhhgP%2B1RID%2FDrAxkO5vSd0UfE80d1DxXYCJ8GpBEzX44k3Tc%2BfzLOHca8BpIS%2BvL%2Frr3NfQ1wDsYMm0s%2FarvOV88NSyxIkAnrPN87SES4BAHOK6aBgK5NV8q5ytgeBGb686%2FpFen33Ed2ww8rMyL4JEaNDdMR6F4Jn8r0X3r2JZbVG%2F88iTAaVkBQkNTtc%2Betuv9rkeKVivZuC6nus6DpPYOVi1Rr%2FhFLdTXFxUsS%2B7NaujL55OocHyVfmTBkfTwDCUgvxjT0rpREnR8yPnwx%2BqA%2FFeXz9T7jKl88rouVRLfPeGuFlCp0XZNYDUggaCFVP2SPVsKZRtJO%2B0YeZ5zvXRrAxEOz09x0W6iNOoJwRqkOXCO50rX6tpEjcaZNBPnYzKbmMZ415HWyjXhlS65SWfStMrfhvk6WYfac77ICBG0tpU5CyIJnz%2FmlvSthVuLgbM0Tvlvv7AOq20oaR2LUJFTLpA4gfkV0pN4n650jq%2BED17hjMuNpFEgfVLn%2FB%2FYaq7grCExKAEQLb13WuL%2BshPP8xjlLiLE5OhL%2Bn%2FJCJTtGUJgw786bywY6pgEZ3UNeYFNlMlaaUzRdKQyXP%2FxOW%2F%2F9fraJMCRgLyakrtGeHrgVc%2BNbaRQri1c%2B6IZeAqxpqC5p9Ev6KL3FJ8Cu%2Fuop6ZCTUKT8hz3UEdYbc1RLQ8gvoJh7EcAdnU5Oko2%2BEalDK94BxBJpit9UwifLg%2FPBElk07fq7r6mz52f1SWrJU7UrFH8vIDmwntuQc9T9mvENfz6yZZU6WgIBzvLvlMqplomv&X-Amz-Signature=6fac63160c0ed84c9ef21291eaf68d98f58c2e51fc4ca6699794d9ecd4b335ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
