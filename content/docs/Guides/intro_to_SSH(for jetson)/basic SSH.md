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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRRKSFG%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN6ZIliNNn6n5W0%2FlJrhnSc3ByERp4otzx8KuhoUrM9gIhAPwuT4qrOjclmxpkn8iXuNPi7qcaH8THp3bAXI5n8X9KKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01f852E6QPy0zbRsq3ANRI5w1z%2BNay77jA4iQ4kEo4%2BS2zOhMZWXqrUfm06pz%2FetRp2lq6Fyo7vH6jgQOA4%2BLj7%2BMUklP%2BOL6vGP2k3a%2Bz%2F%2FkvDRFlKs7NqpfUECF9RwRULtVxyd5woLe8qv6JddRVjNa5A611cP2lTX1NTg2otK2Xa%2FNefS5N0Wl7Tg65QxwTaZt8%2BwSEKO%2B%2FcCrXZfLUHyuH9E%2B4IZYkYm7RAW%2B6uwJ0CKqnfEs48xrmD6sWlY1Pi0h6c2MfoF2LklqdYSAO2jkeT6FQzFplyS4oH%2BEGvJ6bHwR7Iweu2Gxn2WUVdWrKQG0nsBlSpsvRpF%2FdM0cjsj5zp9jCv17QafMvxtw%2BMg85rGBBWAbsuCGtqeQ6zBQNZQ7KhNQz4LFtZ9WjWpLeSX2XH3AdSz7Z%2FyFMily4VCV6lxMxrnQDGJ422li06nesMquuFkp9XNCpCa4Bdt7oB5xhEi2Oh5euJGaBKeZQJ39Zrpa0y5Q2rv%2FjFcVi0Hvo1D3%2BLw03Qg%2F2X2DhUIZV9HJfmKaBcb5o0N4LkvhxX%2FzVZ%2BHzwOGWLLdJ68h%2Bgna0XnK%2Bt2918EaXixc8MUldDrN6bNcNo6SfSM8nn7jOuBCcph61a5B1rUqmrWZTFAu7VoNf2VAizfW9zDCu8vKBjqkAVTvLVgfHZ%2FxBIKEq8xSJJScIqrzC7vPdfxQ8EXFfpHjJG9bs7DMSa5xqpWBoDtD92%2Fd%2Fk6gD%2FF5fAbSq6fac2R2TQwkUHVEzhsMYWD7OSY39sVSuwU4mALNN%2FG%2FyuTTjtv0%2BkEUm6SRmsAMmdqcBLZAWcTnZD6XiyUb3bYxSPSUzBMt8NjdsH%2FhJBRxbqRNB6Fjf%2FdxnPWPmO35ZKcX5uyZbo7w&X-Amz-Signature=761f21e7d6368d062f3da8d51f7ca9457d13f6da8d60cb4d8a95a2ed64f16c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673X6MFMU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlBixP4%2F4BgwV3MCOPGrk%2FQ3Io9VtdkL%2B4uCJC5dwgqAiEA4MP486RITL%2F%2Bh6%2F9s4gBNELwMFZlmkFGIZSCURX3B4AqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkTDVSiFpOw%2BYvIKyrcA95w%2FPKPM1lLH8l%2BKBSUlinmAEmgGk3ARjPWwmlMAdBo05KqMSbja6xOEABYk0APJoBw%2Bad3SqOrLzvHEnkQmpmYT%2B%2Bjufewjxh3%2B5t1v08wpUHlDvCFk4MnBJaYdFx1ORrk2raUNQwCpMDde7S9SY6S5%2FSnrn4rK1dEgDvarTNPJZ%2BqfCa41atGxhqrZP7NHz%2F9qsCp0JQYXrimJhyfcsOC6t0qyFmAdVdT2qQODQeqKe%2BTrhXB0o72e76aspLJIpufRWAd%2FhazT7GFaWUAmMlaMVruzquzx9mQNjdIr%2F1qtqxD%2F3rIQgcRKjZA9XmP8ZFrqrxR4%2FidQyarz18oFAVfIOKw908%2FEn2f%2FVUgnjROTAymCZSXgMUOqGRw8DJ95wIMPSQ4gg2ptMmGSF1%2FmcXsIcWhKtwsrnHqe%2BLOQD0R0hFO0Ae2t88H2Rhvf9FNVfbSR8ih4rEYXEPMuMGie%2Fxkjh6kFfUVgcXI4Tn7jddC07b4VY9HQhVHBDoElwRwqEBpcDVX6ediZdfRWeZuaJsUcKF%2BmzmdTr4fhgfijmdZc0cI0NH6Q6bt1nQthJW76HUbAFecgvTBPUFWmZBpYIviIGH0yH2%2FKrgg8PTP1dFijY2F7PFJoCY5hJjDMMy5y8oGOqUBxjGM%2FtGDX%2B8tTexexQTiISddZdlbT5Y6f3vNkUMnEXCwmXPmAtKjOEI3qKjNnLtXPjAmJhs5jPe1aH%2B%2FZzzG3yh1e0A5ly24PzfiQY%2F1sKnxhI6rBhG1giy4fjBgSphZ44qCqFmtdmFPNkdMJe%2FgeIddn%2BZeBRCCt%2B5gAT5Ed5C38ELBlJ%2F06AWAMyNrdqAtcWCq7bHJlqg%2Fx1spBbajQvqNr96V&X-Amz-Signature=36981c818e0cb0d2d3c08a2b06be80100299390883935ce60a0e4f0db7fa1391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
