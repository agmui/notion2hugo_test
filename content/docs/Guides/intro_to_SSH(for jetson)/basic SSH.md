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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSCQLIJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIG%2FUQ1by%2B22Hp8%2FHfQURxHgaSGHv1bR8eSoQGnN1Mc%2BbAiAZoREZhnYaUzTPCoB2XYKB6cyEG7W%2F7gb2fzPur3Qf9iqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4J2xdPjaYUxyHu2KtwDfta1UbUXkLYAvqV1dXLrfffkly41KQC1yNz2nyjOB%2B26qWMWATR4Za7ZWSKG0%2BYN%2FsQTeE%2F0M38Gus%2BiCMdJcqCInmC36AoZnR3vYbvSIHnDpHfPB62biB3qjJNw4KROMgkF%2FvsPYfeWdArdcCafH9wqbJ%2FCLyawwCI92O81vU6iwXgBJHOvFoL9FgI65pWs6Y89TEM2WNoofFoPoG8hXXa5V2l1q8CiDA%2FnzvT3MO7AaQeC%2FWdYs1C2pEDjWTu3tf4DhlqftYKQJ4oYGVIZnoYW6CBbOUKjNo8SFTQJtdIN%2FLWTtgVSmqnKXlPXNYy8xOoQhzcY17%2FMU4WWxMQ1XfLSKie090DiPx%2FNklR9YA16Xo0W3E10kd%2FinB0xvthQM09LFGSdj8JmWgmoKhyUuo3rmDGmIbmn6o04dS%2B68Bsi0c3Y8tkZIo2gT0enHZXfD4QSKshBB11%2B%2B6Cyl58kpxdG4u%2F6J6zSpsakS5B9DF4yPrCjmrrQqTHbquoRrUvkoIanCWAz9q7jsdq8%2F%2BlbCSlLjWIVTohmczo3C8BoFVMYdPUZDiON%2Fack1tfz7lSWq%2FxEmLIbFKOK9V9ZuP%2FIzG3jY93T5FTOFyg0tVWP1rHa1yc9Ux2ZrRgHS2ww0IuDxgY6pgFi5uYrnqHL7a5Lw3ywBxk7m3HMXMZhM37xtzgnmMp2OW5DQ7A9%2BRpCAYY0PJDG02THBwYUt1NIFN0BMrLc7wLdb7bAwtFBzu5l%2BbnIc1fmDsgOkunSxSfOiz4PWb6193VYKvBXPDF0sY8qlXY4yZ6rGqDKof9rjR5ELM8OufwhJFwRDiu3z3WVXFKKEf5J44uXO6dEAIZyVWipN9diczZILfctJfAq&X-Amz-Signature=c7a6857512f47840e65d49384cdc5dc4110c358148d1e37a160661b8bf906a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJYNGHT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCN5wk3jkt6HJkK5IYUkFudi4tlXj9rNZOzxJMy2hw%2F%2FAIhAMNpxMV6CGdN91dBa9hZbTJtx3rTn2hHenrAMzaTz%2FnvKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAfqrI%2FNzp0E9Gtk4q3AMak9jgSuz8Dl6fmdP1xwHCYvlRItH5NlU8rUemU1MDm5m1Qv1g5TXdF0wwxS3y3dqUyAkozgiTVJPJLyHTEtqst3ClteBD6Xrc4yXjgys1Wo9%2BnI%2BUhSwdUihIpvqWQWpUnV%2F7qy%2FrEdwO7oR3KRnT08J3ky%2BgcbvpntQmyoVkL0QrqcJW6kI7FAjRkaSIRimjgS8hOFhcVcR1%2BVevOVdqAkxvDV7FTCeegpcgGvFMMlGfmYLWTSVGm3XCjsy2kBMYinTTKe6X8ujqyPy8iQYZOi8sTCZ8Q4z9AbAr7KG3D1c6Ppyx67UkuofkgLGRkKW4RBNrgrV0IaafA1wggmWzwDDAQYYf03TxII2%2FqL8zAS4mtwKUcrKczWRyGzvcTpASQONzNjqxI2VZMD9DBGdatIXo9OfPYX2KmQ3y69BQ78WyxJ0RWyxB0A1M5F%2BTgtOtlH4n0lnYWEHJY%2BPUedncKLY6GGvrkxhfQ1VvMpTxtM%2F64Wf98wvckoWofr1ndW6fTehVKjQ%2BNo3SrXenxcSLtoVsfk4xlyx5tocIOygxa%2Fz1cOgiH3010kzAwsufrcUb3lmuvazTtqNsIOrNQfcqI%2BVFdzcF71Pmi6z0Hv7GRwQnXI2MCUWBqaoptDDYi4PGBjqkAc7eUbde17T27HZ2eDKEe8QNQnoewd2bIFnAWqi6Auh7Qjpyzvepm8qZ21LGTtdXxt0nFDn09FMAM25u7RLlx7%2B%2Bm3owSH2dIaTmb8ZXlmizaI49vB7tDF1atkPBweyfj%2F9rRD7ryO4ydlVZ1bwfd3boMcv6Cd4t7byQDlQtAfDMqqbIx5TJ5P79c5y%2Fw16TK%2B4%2FCUzOak04JOEENEnnPqQIzH4v&X-Amz-Signature=bda271977c4765ce2732d97704c26d8d6066b13ff05becb53c4ddf85e56c1ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
