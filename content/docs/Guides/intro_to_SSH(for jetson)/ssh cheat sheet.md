---
sys:
  pageId: "253da3bc-6297-80df-aed1-c0cd9dfd6fa3"
  createdTime: "2025-08-18T10:41:00.000Z"
  lastEditedTime: "2025-08-19T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/ssh cheat sheet.md"
title: "ssh cheat sheet"
date: "2025-08-19T23:33:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 197
toc: false
icon: ""
---

## SSH command

```bash
ssh <username>@<ip of computer to ssh into>
```

---

## SSH flag to pass windows

```bash
ssh -X <username>@<ip of computer to ssh into>
```

---

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

### getting username

</div>
<div>

### getting hostname

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```bash
whoami
```

</div>
<div>

```bash
hostname -f
```

or

```bash
hostname -i
```

</div>
</div>

based on the two responses on another computer do:

```bash
ssh <username>@<hostname>
# or
ssh <username>@<hostname>.local
```

depending on your set up you may or may not need to add the `.local` part

---

## getting ip of a computer?

```cpp
ifconfig
```

---

## checking connection

```bash
ping <ip of jetson>
```

---

## connecting to wifi with cli

```bash
nmcli device wifi list
```

```bash
sudo nmcli device wifi connect <Wifi name> password <wifi password>
```

---

## Jetson ssh over ethernet

```bash
# on jetson
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0 up

# on laptop
sudo ifconfig <ethernet port (use ifconfig)> 192.168.1.1 netmask 255.255.255.0 up

#on jetson
ping 192.168.1.1
# on laptop
ping 192.168.1.100

#on laptop
ssh username@192.168.1.100
```

---

## Jetson VNC

[https://developer.nvidia.com/embedded/learn/tutorials/vnc-setup](https://developer.nvidia.com/embedded/learn/tutorials/vnc-setup)
