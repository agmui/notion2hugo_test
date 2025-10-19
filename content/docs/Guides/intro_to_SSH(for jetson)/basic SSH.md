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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEQKKRR%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIClhabmFmUIndl1uqsxa5%2Figvf8gtO13w5VlK44SqPIqAiEAs%2BwHX7XtMmRLXH09yX8XqJnW5P260HXmemGgedJ%2Fg3AqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNWVfk0IkXE2l6BYyrcA5qsA%2Frss%2FyH2OS5rkqgYh%2Bc6kXfj5tSfiFV5S2Ou9Yuad3GSQ1EypBWFQP9qYxob80XQnX1KHW6PZ4iSGVxPELOo68eH7Lg2K34vmUNzwM2sM8En7fpgeaA%2BrY9cjmJTSMq44uNh%2BmJwgYjQDq%2F9s3v%2F0A7R%2FCgKVARz7ST6vOuzqx1Q%2BsZnNRnxsz2VsV1w55S11HvE6vUPDPtnP6shpshQz6iIhjSqyWrTZEKEo8t1qQpAI0KsrmLytjsym4P8YBgvc8cCWP1ZCMiF8Kdwp6zs%2B%2FtmRcMNWbEMtCgBR1%2BNvt7B%2FuX9o%2BmMq0F6uQEoq9AgzEUDFWPasEvmjo8a6TGcbGvna0T4SFjJC%2FuK4hWBTVaKJG3%2FyCfLruWc4CTMdljIHi1zcgn5ZWC1fch5U7Ax78L7WHukJ%2B5kKIxHEcbU2D7iuJiH6H%2B%2BvpAz9OanhJchOFTfOR%2FMxHSpM7K6Epc6TLnY%2BIHANFRXAgftsdKlHK8DwcHH%2FoQ5yyMgooprDFOrJ9ULgad3qZ%2BF3CcaHkovgDRj1IIOCfUcY1fk%2FUgoGDKuSBKYxdMxoHeLCQvkmr%2BalzG4d6zpMy8y4PFTYiKBDj8ey8m7ZYoIbgptHGowqezR6H3PGXSAXIoMPH40McGOqUBhrSjItRbpbBE10OrwliP0xGPmBVIP1tIKQRcwZ4Hysxcjd4ok0bgd2cCGKFplPJa7ifQAqlqPlnLDH5%2F93ElJtOGCBZWPBsonXK6t5C74a0ixqZ71uMLkB7LQvZpNkIMxDO14lCinAAneXt856n7lZ7CsTjAVihcbpC5dkjkej930EGmIxiY5Hkn3zeLV0XG3vOW%2BERoU1CaQJOae60%2BJs2U4OrK&X-Amz-Signature=8212055ed6f069c8f62b506c34f3b9acb7d783f39c5516d7d42d2f03da0d9f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=b62a030eb78673ae2bdf3f24defd814e3e4387b9621a62837b8334cd6c4611d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
