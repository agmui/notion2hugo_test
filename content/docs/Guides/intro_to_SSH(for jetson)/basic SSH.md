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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4YWDHH%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHZOb%2Fn4t0xHBxLb8AU0bGbm9sHHQCQ9Oys7%2B7onKMsxAiEAvMVYDAGzZkyAe53yMCRU2NkW5Dy%2Ba9%2FKDbmsed327K0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8h63xAoN5YVrTEdCrcAwN%2FZyQVnwfUOUT6Jh0x7V4ucttBwq0SlQk0CXFwsxWjtdgj6el%2B5JbxoUL895wk%2B3AytFssKFyirSiU8jCx55902xf1JSf5G7gSXGu0TPFEiGGD5wfhbU6ByNowPPq3b%2F6Oz%2BV1d5qoqpbjX2P8RIDq1VZ2GAk1fNYFnfAzB4zQApxBcG8QusbrOkh59KZIuvv4xbxM6TWuMLr9EdpvJNc8yq%2BUXieUiZ%2Bzm2ULAWwg39QM2wJqv1gpgRUsXftIQE7%2Fsd3LpM0uj2Ec1WpxW3nfk2TSPAZ6%2BhlwRC%2FaDvHIgqldblWGBRvS5Mb8wOMKFZSoCqJxzMbDyjJYgSo6KPLMI4DCmiNOnOSrxXn8sG3b2%2B%2F6XF4%2F3qfaIxaoOjzogcyYHB1ds1wdZiejxBdIEXnLfP7oKF8JDvsRtmZ2ld1Lv7MhPPzGY8M41WLd0ixQ99Gn1mfNGaB4vyFzZZPNVKHSG%2Fy5Oo4l5FzE%2FvlB2y6JoOOjuHSXRW%2FThphUsuBCCu%2BfrfdfQHncvvoydhYEvcOwsPC31N%2Bq2GgqI2FAZq%2FaCTuxMCgHv8PbOD2jkL3TP5syv0vAvoxZjw1xg0A1UJEi1Z0g3MoTjozfe7zQhw8qhkUca5WbV%2BukoxXvMOfNtMwGOqUBLofIgmaDXyKsjuKiMTnZd%2FkA%2B0Rp04QezY5xfXHbSna5s2oK6O8sWYoroOMxGvmKTjWVdqBQRiUmbb%2B5tF7GkA9Bav41ZsmSxlGdf2O1vKNAnIwNNR70EQJVbhIaaDPgPMlPZAq9JCt8wbQ6T7ReRdbcIygPGdAcp1LU6QIGdtwasowoPQSlutjCBbJO0P%2FN%2BgQDGOTUoPcrtyAyQQ20cYlfmNsp&X-Amz-Signature=69778934952949ce39111bb0a8e860610ef9e557972e5228870248162d798bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7KEZLX%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICN4OLHFi3w74jsgoHbNUIEiehlDRhTgyT%2BAyzpvNB7ZAiEA0Jh0dQX1h3YkXqcj0g2E78Z%2F%2B%2BsL1rGG%2FsAErSTJwsEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFkfl1bB13FZ5HjJyrcA28WRfKBaiBT%2BAKlwBnNvj5dsZwzqlEdaooFSrFIjuGR8PqjgIZ4CaNf6ka9iWzBpH0XHOohqW%2BVsaQ07szsFIXORmXDx4xepoqeMyh7PPqC2xHLyyjQLQPSUyqaOz%2BqfzcvlDaD5v%2F9zBXTSD1BCR3kn7DYLBM4PrfiLJBVgOci03kuYIcr9ok43U095IWa1YvyfIbcpyeEQkHYmQxg3n0MNpqpCUrr3XZEvnezpGlwKA7LxuoAmNPna6IT19SER6F7q%2BnDC8G8JLv4hua9PPZjgCBhNkq0dx5IT9qmodmg%2FYxpLzSznDTUBnzAgG4bj%2FI9vX3p8av4Ak2deCp7zBHMw0ong6ZrcfiEsfsDRG9ZZY5pnKLo4Sujhyw5s3VG4AUpCGN3JRPO6KMCZzeA4Bqk0SOxoNC%2Bl%2Fm%2BC8G9dFe2eeuISKqXkADQGo2D4QNhTxtM8WGYTpK3eDwX%2FeowwK7u3Wt%2FmS%2FG%2FZzXMweUNQUGBp%2Fejp0NmgTTN%2Feo2jakM2%2BiMkMe8Qu3wwOYBr%2BLOJiElgie4oWmyGL4LazFy5yuBAc2ZPNrrO%2FYQ4t50nPaAvT3GnXKQimHD23tFlrezY4Bs%2F2dnzOfEDQ9GnHs7f8w10H8bRQhGfBkLGGpMJ7NtMwGOqUBO2WO1T4umbhooIAT3SUxyy3ehdbzs3v1ZjcbfjMQ%2Bnr3HvesAy9DWz8gab%2Fur8U8C9iMGyvDoZy7XNI0XCnnu38WNVEc4XNcIOHZ9paz%2FuBtQUgNsr2UpUbUxhh4uYYOMeAEaxFnznpZzhQgfwJ9LXfKg5%2BVhWODGfNmeVqrdwZ%2FJmN1SJsfbjkZSyEq%2BygFPbOClbJk6YFMU7HZ8fabSWGmGZMc&X-Amz-Signature=af90b28a09213143c37fd1eb3d6b4c73e948bc6eb60c804ae5165f66c869058c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
