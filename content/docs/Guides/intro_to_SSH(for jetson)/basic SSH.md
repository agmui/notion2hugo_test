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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXZKX24%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7VE0Tqz8Txanygdob4f3ZJNn5ZMpFhG6t1%2BlqjqWFEQIhAK3O7Pwa14YH4v0TJE90R5axs26t2XKbBIzpCL3tazlJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxepEHhZ36OjvuMcpMq3AO28q0%2BSnkQrrIvh3DvvIxrmFhgrvDVKNhqK40eU1R6E0HjloJwEf2%2BOO%2FIE9c6bCpkYU7oz7WGp%2FOIOC725BMm4jXBwSaFrDFyHNqif0yuGsrwXvkzYBLKXgPM6dKqQ%2F4zpqeSk%2BpfrJOvS22A%2F5JBSvF%2FhAUKuZrNzzwwPvVJk6ZLHefXSj2sQFJEfj1B0pJXh9UuB%2F%2FXm0t10OBV2xPxT%2FTdemIVS6%2F73A5yvFVWiGkXw8w8No0ygvpKmw5W4Jtl%2FTdLnV9PxY799AZ8w6W7adsh3tsHBohWeqxL3XmYEUpXBtO6ohLDMuHlLgoLCi%2FWdnU1ie7DSmmFsH24dQo8jfe6ryf6OveKdBZNOqXrPFwIhrYHCh7cXIcgEPBtq3b%2BrKZ1uWtaOSGnp9J8FxFR9sOMAqKYWGZ2oj98t3Kgr21C1YKy6tE4vRTOUaOrDzv6C8sXPfea0HvCfCk3N%2Bi%2BVogTCuegHW9sNbdaq5ePWoeTIKHvOOB8HQQHGuMXiLj2cbSdXkqAa4PrpiXSPwowTcb8Ca0le7lbKRpNauJPiVM8Mw1qHReIZ87k%2BBNbrQizMtyKUgd0j8tj1%2BwNh0PAzOIifg1E%2Fb%2BHNkVWPg%2FEafXNJqyzyqrZjXO%2FwjCCwbrTBjqkAVOLb%2FCu3cCy3gcLGoUseuFxsoDLoFqz88QWHyv0iu3CAMCAaL0mbJ6DEB0hv%2B69HHkbY1ipHlZ%2FfPCsXLDIOk54omrDjd7B9PjsQQlqqq%2BCXmLauGKH2DwNE3CQgZfv2%2FiVc%2BIA7X24yIHBH9eChGkninzYWBBQ852M0Z%2B4IJ9KGqfYZ3KDRIFfTf%2FC9%2B%2B%2Bw6n6NJpi51%2BR7gw%2FYNpbH0Nhl%2B5S&X-Amz-Signature=587105d09a72de3588224d4be81b10747d20a78af3dacaa01aab41075349a03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXPDUI4F%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA%2BL6qZgWp6COj%2FvopW78Ut4iRapzH0cT0cgQ4bsPoMEAiBLD1ygnp4KIAd5J2ADBpd7hl4TdCtWEEEWXsmqoI4eRyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9GqG0NIZha9G3QOsKtwDCiIW10KMWw8k9CWH3Ytu3MqkO%2By9UCrGx2azsz2%2BtdVcWuiSymC0ONk4gf7seBMCUG21Fy7Q6YONLhXtB2ZukHRr4haGkOuYvFpMKmgm63nLlkl2G6LubMVHARLMTWTi%2BEpKVPPWpmGqY%2BPxWbupHzbqIVDaDdCibbHwJht%2FFpuvAYIGgwB6eVmwsKFU%2BpxRKSUx%2Fh4NMAZuqsXHCM38tju3S7izSFAl0qB%2Bli%2BdcdGFLFY2ztLJfs1gy%2F1Nw9MNIghhkGjfdZoicEBovmEcSydLhHCGEDqI%2FCxYtbi9tx%2BR2C1K6TJcE6JoVKV%2F9PAlwkx3lMXCFMbI3jluZYcapxDVlW8%2BAb%2Bij8k7A7HXucTInwk%2FWqVkeXIvyh%2Fgfw2SnCxVj1LfdNdjT0cGFWsXzjypte1bbUQOXnr8PW5tMQQJ61eiHNlmxnP0rxEDZoTwVp5wUnW%2BDnWMp8GqFZiZoLV5ddQ5DMfOu0pwjX6M02g6uBngFuO6ZxiW4wEZZ71KIVz5yujbxOYaTNCtn%2F2%2Bo7o%2BtESxH8Wr3lnzGrCcl2%2BG21kpUmoqqzMb3dhTx%2FYtks15hPW%2FB1XzlBtUps2zUTMt0oKqu0ulTmFre660f7EdDOnSnFHM%2B9xOr2YwqsO60wY6pgEJq8My6nV2Ci0PIf5VvuoG3ff1wB7BHh8sp4wkv%2BSFWapWFbn1HtA8LRJ0PiAtJYRhrOTrZHNWJUVsJxtACM8xKlM99rpBr%2FmWjCPe58TgtdBolyLE2OFqSz91YsBBnvsWBVy3yQ%2FT0k6D0%2FCo2JmLwb40%2BJPg3g0VNbZm2omJI6mOAUvO0eGVb5b0BlwvWemC0CDuyiTp1d6y4xjnRLoze1TkoQQw&X-Amz-Signature=3b8360e093ecfa7c415cf50d857511010b019b4fd5cbc32f4fbb54cd7045bdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
