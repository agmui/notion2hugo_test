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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3BJ7CS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlTe242vsDr8qL%2Bf6hPrsLb3xIGHBvkrCxSNnzuJCT6AiB4asyvbtBSY87ZBuq3aERqUTNyRZj09ck668JLNZmf6CqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZTtCPRAIXZrcQDlKtwD8%2Fcw6%2BG3%2BN6wK8PFwgd9EvNL5oAIxV6vyR%2BCbw9BboZnzvTx7Qn6mlN96zgaFz7dyNs3BeUiW3QuzUaR6aXXlbH%2BfBkRTIVWU%2BRNBR0rpE1kY1HARQdJhRX28mb4ZAUaYXsHep%2BAo4i53xp95UvBi7AJTnPmkH%2FMdiuTFvdWWKam8K5jqhPhD%2B919dlkjMbeQ4qb0I%2FQLIV%2BYNR7zDUe%2FF96EQUr%2BqlEpwaG4SkFI3ogmw5GT0Iqj0KasjYRDPzWVjEqQNaX5vlaCYYAgowvtbIfnk6ZOsYszKrPQ%2FEg7JSjgZv%2Fe7VLolmtG7KKo%2BxrGtKPHc4BVKiuQel3l50ouh73Q8rB%2BAOEwc%2BAvIU8Y7%2Fm7cULADj%2BaOgadIjY4k1ibDJf12E00ls6PYyed6UP4g0hyISi%2BkvK1MjHOpwlhwQYLQ4VCuW4VSxV80841aQSIOWj0fott2KYXrZVZvJecK%2Fp25pfVlBx1Yvo7jhujq0HRijsxob7dKag9M7fFS9EhmTCnfb2qKqGWImUKzqbFiloqhqxjH30G%2F%2FKp6BR19XveoAWScW%2F38hisxrMcyFZCJ386nWe8ItJiP0riZeOf7K1M%2FoZceyoMmQDH%2FQt1rc7218wJ57T6qpNVo4wmoLwywY6pgF%2BL5lqeYpd%2FssjYs5vV7eKQCGjeuB4Nl7LBiHu50G3ars%2F1%2Bp%2FB6ZdyaF3QZpSQcQgFqyO%2F2%2FvPWZrh6%2Bv0AuhjkQKCwh11%2Bn%2F8wHKFHu9FNpgM7h5ISRRJUlNpjY%2F8oa6dS4uNMfzqZ1uGm9Jm1ALk1ZIS0%2BXYGzxEY2XHXIBBTeERF4fexfcEM%2BEsg2Fkz5fMxkLTSnUrveZ9QZE3YBXz8i4aRaF&X-Amz-Signature=1f57b915887053f9ebade1c71c253258003aa677110235560a7585a198f38826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZKMSXP%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCn%2B1Wo6vSCAYcJAPBL%2FW4pyJUQ6gPavhKmUZQAL1pAIhAPEBFS0Z32v455x4hfzstsUH6mDviz4%2Ff83cezyKQyOcKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdln8SthjID7WJ5DYq3ANjYeya11RykFKm5XzQhodATZwtVxegjt2enr2dYhTrw0YDSdHFyve5sYP8mx%2FdDucp4fKgXsVZQ3blqni37i6gQm0SHZPeiSoxqyjN1yaPq05DdUH3MjOMx0ksAp%2B7Hd5rmDzlw8FdS6P65gKfgXmafQcJ0aBEnsUvoxBRR6EdCqPxBTFL%2BKMGkCP37%2FaTGDulb4Y58h8%2FWMOTmIBrEHt2IJcZ%2FvQlwxfozx2Iq2HqqhotdsDQx4fUgVUlOV%2FTVrpAuU4x2mC1cE4%2BKI9lCJCmTWOg3E3G8HCRHJFMtiZiGJKEgYAtjwA3QvU6eRZPSeRLZpKmpTupdUo0iwj04JfJ129zFqJn5wg1Y%2FkVN6r2vTSK9kPww7H0wlH%2F1m8l%2B%2FW%2F5ifIk2ztPQVzYgzezNqZ%2FrSgRGf9blaqjlX3SgLWFpgxpyVkqTxA5oHvmEOs0XnHnZr6SqmsyFglFGFJxxIYPsn3G0931zifTYVpbf8r9FFQMJ5Umwb59P1L30zHMF9JhfTwY1qJ2DSraJa8NUXM1hCfYgSI1JuBqJ9m681fVnv7HnXNZ8k4M8oHZCbXl7lyK%2BzNxw0x3O9YFg3Y3sGqLTD1b07lmuttdvVT6WLS7cnAOaf%2B%2BXkbLieQizDFgvDLBjqkAYtSYnxiqrc395fIaOhk4kNGZWNGUdRR8D6IsI3kCMB3TwEYqBIeHyPaxEIdos9PrpoLBrtVtzYw81pEwLJ%2F0K6Aaas6amsqRRLk%2BaHBjvR%2FGyR5FE6tayK9oCtDb79xRn4nqzzVF3BMGD7UlsUYFs16F8HVMVLBZB%2Fzl9R7BFFcSiCaPK7GWJ4OcauFdXZzj64v2K66eqo%2FaBbzP9wxQro8i6WQ&X-Amz-Signature=c635db234341f2bfc8fe551d6113203af0cdcf3474bf96960cf5b13efec9f69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
