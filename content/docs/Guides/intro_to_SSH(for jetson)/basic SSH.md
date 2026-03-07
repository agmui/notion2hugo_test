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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDOMGQVY%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDM6JVZBLw7Ij%2F44xX8pmqzaQkaQjXreEjLIw2Kzblt9gIgXN4XQBpitI0i11vBQyXAAX%2FmVAausn7JKK%2F5IVsLumUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9vg2hmjvkDns6hKircA8%2B1sO4W4rQ0vlOa3pj679rhttrtgP2Nkj9VuR2ozFgpxYIQrKqi0ACx7TjZV%2FILvv0RUSYgZvU7GfYrp6yZBn28YRJipbyD6yh10WWYa28rDvokrVP1weMNqvfNWU1MG7asEgFn5ww2YoeXrSzahazinwH0pjb4ASgaAuTI3GoBjDClnOuw%2B57co7BpzOl%2B3csZmhjPUtLWtqRJSBX8HGATnVlkuFVOpdBpWQAyVWjKyNdkfiURc117XRsg1Q0qJDyMBS5d7tjvmi8XQ2%2F6OJye9V4YEopjZMVrEl75Qcy3jZPQXdMTjsXHpZNhrKSNsapRNJ4wYMZYDTgAKIG9YX8wOhNtj4rwBshzbh0p04IyjwHa4G%2BJqruN%2BAAniZA508ELITIFdLfIVBX2Unlt2lRi2LsU%2BM9Q0wwdqiLZlTIvO9df0rNJchhOlAFS7vTrN7ZQij%2FctJxFSDCQZnymVu%2BilHXQlWzoJwvN4oDaePr1yjpA%2Ba9j%2BBuTt4v7jMJ%2BdvX4WDfu%2FCdzCWKTR%2FynlBMO5fEMGymHAoyLlExJxh4pItNGchts2DqQ55dOH0a5z8bEYsxN2j6slQsv0ETnFwFCZHfE8YJ6u%2FpULcL2oIXS29P4u1Dpv5K22M5eMPnorc0GOqUB74SqtwWSpcE%2FUzw1t7Ts5MVGHSePKT2NdFsfoECYMomXyyLD5YgD%2BkcPae%2FsRUWwnPeuAJNSAID5zR6GNIGR931NEpCslUEyTGYU%2BBygKz4dUXHQlbMrQsZpErALFCXfqCIio6LZmmxNKtJXM7H2w5LTgz2TlNomNrWnSu2EYXEMZIdxv8CLVsNQZ1nWCpEvku6pFhU%2BtQkVzD5tBkQw6MTvOJQM&X-Amz-Signature=3a94c5ca2fc7fd812bf95da6ed23c7311700716b405f2a4ad912de853bce27a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYQKXFD%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDXjYsYtF9vNswsdRuKVbn0VoxAwnIPOu4S41%2F6R8C%2FkAiAODGDUoDp4ZpH4mpWzS4lTV86BYK%2FYXXIfSAisQ47uvCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirE25Lic85pVGejrKtwD%2BRPdtskqfeyfbxC8GMcOw97HQTXGmS5AfW0Yi%2BMuQ38ygo7kCB3fOFTTEASguoaDbnrKZn7gIsGxnvNnJSHVTaGpAe3aqNNSiJI3cHuNoof%2B6jB%2FW6k2ZjVq0K2jJdEK%2BILB5O1eYLo%2BwYpUf%2BvnRvl0tTPxoxcoi5Wqnie14DMKNNW8YcEbdNcc63b5nYy1M3eqgkQQ9EFgMDI%2FZaEC4f%2BKdxYNPu8QGtkb684qCEui93fRIWDqJ%2FHpV8VJQRnZtvfvFx%2FNU3bFaMaHD3%2BPJKDdM1hcFYh9sZTwaScA5s5zycelSCXtgJfTE1pDqKhGtrVTS8ZM0QFqaEKh7LH7BKHkvFsQaIkX1dYk3MT56v4zJLCIrcRMJ52XS6%2FH5cTYlQ3KUCkQuUbom2yQ88kr9nLlNbTdciWlnV838Rm5E0x9FBk30wTLswMSsoDbwoxlsoZ7l26TBxAJ4sE1%2F8D8Dk2amCFehPLTnYT9FAPV1MiXv0ARZpuTwCB91dknE4iJFWX4HE2ldzhrb50laduFCbojjkJVO6MDHa1apZs65RbvQYPnCq90BWm1gGbP3PIAjdfxrGiBwaf845sNHjlmTSU3fKzVzQaXCW%2BoqB7DdKka657VvNIt4DYKzBcwt%2BitzQY6pgFrM1sngS7JtlMyXImq6zcB7nmprvKcDGgzC2KL2LSJKGalblMncXTkzwuLLSjGB%2Bu4iX2lC8XTnJEoyOXR3t%2FVG2xXKglcVDY2fTTQ7dniUjjTF9Kjkwbd%2Fxdw%2BHeueUIRH5P5BIMYoMb7gYmug%2FAtwlD8COd39Sgk8mE5%2BDCZWne0JCshdmCd2ryyUExIMeVd%2B6QBlrWDwP0vqgNu13v5OokhDbk3&X-Amz-Signature=b2c6b75e9ac7c1221f8c438228e89c6ac860f9101a9b4ad8038548e2b7ebeba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
