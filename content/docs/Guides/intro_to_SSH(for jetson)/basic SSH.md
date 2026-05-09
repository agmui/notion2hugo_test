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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LXQTM7W%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHu7rC1L2gaFe2rydJozOfS5a1%2B%2BMc%2BCf0KTotfiumwYAiBeeIjwbOV313csxkluH%2BPoRgx8CegfSHnit9qMb4HcOyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu2VjZmwJVaOIdwYvKtwDmFxu%2Fs92ZmvYPSYKkDkW1FNyL4V478680W1ryz9hJppZHQ0Yh3cyNSLF8iMAeeFDM2znBdq9q9BNNKvy2%2BlM9NZpryySFL7FP3JKK6r%2FhqQ1%2FnetPJzmAar5NaHQZ0COThNmREhp3LhQYCa6GDzRvo7Mndb8%2BKRQJVro7fh7JPK4xZSXtD5BO8cXvglPC0nrm3P04KcK66VuEx0BqPpq2xkSE0nOKinAHwlbx3eHFpbTsK%2Be2FUZdTdxE6AbS0w%2FFRxWoOdb6aHuzPK7AUDh3A%2BIkuzMy4E6J0HkkFk%2BxbWvqyLUzb%2FZH04jTUmp%2BRQmWPkKqiDY8hjE2eaBUhgAzIebeCzVhrBgh9CuDWlFH7PRHEpIBtkrS%2FIqT4GY0XJi0oXQOOrTWbg1RisMc6FNyNsO4hi30nFs658VX5LTKML5bGAoob1hzxr6u%2BbXbU9siecOa6mAuEDysW3iObEfLwQnzAw1RFxbIs%2B3S2cahldtUVgi1GqWDobtjSjSPq%2FG%2FSRtg9oILkWaswDK2iUuFsZ1SSIEWjDL7r89miMcbeB6d%2BSNykB4jxJIfXMDS8x8I5xxQnuKEqxQf5UB1RsQYUjfBcr1CV0qhADQGS6c3GMLlLYIqevnqDePc10w87L6zwY6pgGgZvdypehwBodLJvhBR3D6Uv4cz64J5hLJDMOcPPcojWqEh95J9TpJ2fmC8DO9Q%2FPkcRzYFcey74LmNR2Q2Dc%2FKlPKHRJ6U1wmfy%2FA8W0euZ3ML4A14SvuR5x3fpfE7kGgaujSTB4IXNM%2F6QyrFceM%2B%2Bh3F6GTyESsLqpv0R%2FvRZTMVe93ap6NFf7FgYAbTyGvp6EjkhQq2S1LwPqUATXt6Ymc2OYC&X-Amz-Signature=b8c11f5f673e2c229518643cb193b69007446efa15d97270e096734a9ede9e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5RV4TP%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCo8006ErZhMhcat013%2BkIWzzhDzFwPvs00kcXNqvV6jQIhAM8r0NyyrMBBMjdZPteg2QVFhgR4UUbF41IE3I4KoI2yKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLfhL5g7ntiAMV%2F8sq3APggvzdiqVOlpJRJLSl9yXQXSVMzMHXP%2FRkzvmmT8M6OW0g4zOhvsyCAU1euuELnehY0LNyhymmmyP1mwDkrmd9n%2Bi3mFVSm1iFVtu1PdCVh7YR%2B6UiJlNcf7JuU6PCv4DJKSTBe6tsnOHGJPTVx3UnxWT8Eh2k7SPsLJnXJhjiykSnXKexqcWux1Rg%2F7tIcJSJzp1FlTRI3QJL1N9j17R%2FQFDC8dRF%2BWIZzerSPUGE9y4yAw7Zp4mxRhmeqyLYh513IFrWPQuZUHn5ZoOmt4U%2B5Nhrfvtea5EJy%2BXjwpTSNmZQXeManPEugWBCPHL9nLrXaWNbg0LFdELwG67y2oHFT304xcrP0YlRgb3nI%2BYPH5bXO4f86yeuJpkG%2BwtPNvHivRIa3cNm9arpwlkhuuZsaQLsGXDaYBdamqMyFP465DmyIT2ai8JUKQUrCAEEmPCRsEe26%2ByeWozpfKvDPi06Bo0Ac9B%2BpfHycIuE%2FXwRSr9vTcn7Z9%2Fhah5v92nbwWLh%2FIQtos2lgVcnl%2BE91PUropnFM2tJUfDdxwBb1UnR%2FE7OjOinBYgZcBvghe758mg1s4u%2B18vNVP0Ci1l9tsTcaI9sNOob%2FFWcHtzbp7Z6NkG1JrFvRGiO6DV%2FVzCgsfrPBjqkAYMFQjCIyuPpIl8gFxtY2ALZ8NfKCxD%2BWDSZAgMT%2B%2FPPAa27RDQFhQ7yGzhSs%2BKJX%2FOVmy0G2%2B5KUwHS18BNJiqqvCzk1YUT7Q0svjbCjfudowSCGRvnx9JqyAu039XyxMasL91XVw5AdIB9b%2F12A5JTMPHAb%2F8XlOwKEduFoM7rg6b48K4VJeYqVi6OStZ9TGseUNdmfUrvbNXj4FPRxYwTDqFI&X-Amz-Signature=1eafe06c97b9b6d7e2602b194cd529dadc2b006d39b003b82241d28169573cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
