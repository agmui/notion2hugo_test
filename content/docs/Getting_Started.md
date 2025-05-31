---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVEH73P%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbXR4DCl8cwW0yM0ijwaXyhA7N%2BYwsHN%2By%2FY1wxE0%2FQIgLuYRs0AASqIuskoPBRCNHoYzeWQHc5EcUNa2j0KDLYcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfCYfifvh0kWNWmJCrcA8esxfMJWc4HertLAqEEIG4js7jpdkAxxCBXNYE7ECSLQX2nsQjmLrAUw7crFMO79768AldzDoHCS60hAYu0yifxcfOtuBsrJueUl1oJR4cSsklrNAX8kdq%2Ftv6udJ45rV%2FeNNbmNkhiHnKyv9A5aOWB9A0V04WdSyd49hG1Clmgwe6QglAHG%2B%2FI7BfZJJ1v2b%2BBtxpADCXOT%2FUKcAF2UWsGyktxdR20dWveUwZAz6Lfe0IlecCn2k9%2FEt%2F%2FzGRqriMDvawVHNAWru8viEYxFYkKLqo%2BxTo0%2Buqqx%2B4Ejgb%2Fr2%2Bbm6ARXfLCT1PTVWn5L2QlnBC%2FAIK039xUSbRMsMZRRjlys88Evg20dGpjQF2bOH7oJ8zIxwMouc88dIGcg1f6F7QZ3IR9Mni9e8SmVEUfdWlqQ4tPBhmUHGJoBUQc96ArIeKlAAoh5GTY5lbIH9bNaYf5GuoRoALEKMGJFDvsRmer7O%2FiWKQwOb6xWfOAPzmvOJzFE6RlDl5DHapv9xn%2FIwWKVqaTy31xK0CqlVA4NHCAbKwE5d75%2F%2BAeXgd%2FmrsEMZufDKXoTb57FyoXewv6O7JB1P82nWu%2FdGqQ3wsGzHjWgVRZGiQf1z4wYcqtgNJa0NZ7xr0Xv5vhMOSD68EGOqUBK%2FXg9vvzN32K5XlRpyGPwZbdu1c8pFw8dJukTtFBqY0SKLnQ1nLZmANIoS9OzGs5bLIgsBMem38hdqNZ%2Br%2FEV375Ulc07ejfE9jkniHI1iR5Fbu8voM3DOJkSah8iVGzKrU4WlCvEu8pUQ574woxNxa8HEXf%2FEZMPjsteqkK7Z5qCo3oCVCOrXuGXAxuBk0zfWCGKYy8%2BH8McQ%2FVtl7zwt5Uq0S3&X-Amz-Signature=8019449d8c9d9df8dfed8ccd6a4282569c66e953441ff522d08b2cee73d34e79&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVEH73P%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbXR4DCl8cwW0yM0ijwaXyhA7N%2BYwsHN%2By%2FY1wxE0%2FQIgLuYRs0AASqIuskoPBRCNHoYzeWQHc5EcUNa2j0KDLYcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfCYfifvh0kWNWmJCrcA8esxfMJWc4HertLAqEEIG4js7jpdkAxxCBXNYE7ECSLQX2nsQjmLrAUw7crFMO79768AldzDoHCS60hAYu0yifxcfOtuBsrJueUl1oJR4cSsklrNAX8kdq%2Ftv6udJ45rV%2FeNNbmNkhiHnKyv9A5aOWB9A0V04WdSyd49hG1Clmgwe6QglAHG%2B%2FI7BfZJJ1v2b%2BBtxpADCXOT%2FUKcAF2UWsGyktxdR20dWveUwZAz6Lfe0IlecCn2k9%2FEt%2F%2FzGRqriMDvawVHNAWru8viEYxFYkKLqo%2BxTo0%2Buqqx%2B4Ejgb%2Fr2%2Bbm6ARXfLCT1PTVWn5L2QlnBC%2FAIK039xUSbRMsMZRRjlys88Evg20dGpjQF2bOH7oJ8zIxwMouc88dIGcg1f6F7QZ3IR9Mni9e8SmVEUfdWlqQ4tPBhmUHGJoBUQc96ArIeKlAAoh5GTY5lbIH9bNaYf5GuoRoALEKMGJFDvsRmer7O%2FiWKQwOb6xWfOAPzmvOJzFE6RlDl5DHapv9xn%2FIwWKVqaTy31xK0CqlVA4NHCAbKwE5d75%2F%2BAeXgd%2FmrsEMZufDKXoTb57FyoXewv6O7JB1P82nWu%2FdGqQ3wsGzHjWgVRZGiQf1z4wYcqtgNJa0NZ7xr0Xv5vhMOSD68EGOqUBK%2FXg9vvzN32K5XlRpyGPwZbdu1c8pFw8dJukTtFBqY0SKLnQ1nLZmANIoS9OzGs5bLIgsBMem38hdqNZ%2Br%2FEV375Ulc07ejfE9jkniHI1iR5Fbu8voM3DOJkSah8iVGzKrU4WlCvEu8pUQ574woxNxa8HEXf%2FEZMPjsteqkK7Z5qCo3oCVCOrXuGXAxuBk0zfWCGKYy8%2BH8McQ%2FVtl7zwt5Uq0S3&X-Amz-Signature=8ef4e4885b287676a817dde870f4a27305461b0eb0e02a0bc7d14ffd0983ea62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVEH73P%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbXR4DCl8cwW0yM0ijwaXyhA7N%2BYwsHN%2By%2FY1wxE0%2FQIgLuYRs0AASqIuskoPBRCNHoYzeWQHc5EcUNa2j0KDLYcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfCYfifvh0kWNWmJCrcA8esxfMJWc4HertLAqEEIG4js7jpdkAxxCBXNYE7ECSLQX2nsQjmLrAUw7crFMO79768AldzDoHCS60hAYu0yifxcfOtuBsrJueUl1oJR4cSsklrNAX8kdq%2Ftv6udJ45rV%2FeNNbmNkhiHnKyv9A5aOWB9A0V04WdSyd49hG1Clmgwe6QglAHG%2B%2FI7BfZJJ1v2b%2BBtxpADCXOT%2FUKcAF2UWsGyktxdR20dWveUwZAz6Lfe0IlecCn2k9%2FEt%2F%2FzGRqriMDvawVHNAWru8viEYxFYkKLqo%2BxTo0%2Buqqx%2B4Ejgb%2Fr2%2Bbm6ARXfLCT1PTVWn5L2QlnBC%2FAIK039xUSbRMsMZRRjlys88Evg20dGpjQF2bOH7oJ8zIxwMouc88dIGcg1f6F7QZ3IR9Mni9e8SmVEUfdWlqQ4tPBhmUHGJoBUQc96ArIeKlAAoh5GTY5lbIH9bNaYf5GuoRoALEKMGJFDvsRmer7O%2FiWKQwOb6xWfOAPzmvOJzFE6RlDl5DHapv9xn%2FIwWKVqaTy31xK0CqlVA4NHCAbKwE5d75%2F%2BAeXgd%2FmrsEMZufDKXoTb57FyoXewv6O7JB1P82nWu%2FdGqQ3wsGzHjWgVRZGiQf1z4wYcqtgNJa0NZ7xr0Xv5vhMOSD68EGOqUBK%2FXg9vvzN32K5XlRpyGPwZbdu1c8pFw8dJukTtFBqY0SKLnQ1nLZmANIoS9OzGs5bLIgsBMem38hdqNZ%2Br%2FEV375Ulc07ejfE9jkniHI1iR5Fbu8voM3DOJkSah8iVGzKrU4WlCvEu8pUQ574woxNxa8HEXf%2FEZMPjsteqkK7Z5qCo3oCVCOrXuGXAxuBk0zfWCGKYy8%2BH8McQ%2FVtl7zwt5Uq0S3&X-Amz-Signature=fada9f7a211b05e669ed3c8c82f7372b9625e1f319c19edc3d344d0da1f310e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44553TW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDU1IGCdpHIEZj0KsmjWgbqa1rsd4dSTlzAffeFFGh1IAiEA7RjcEwj3%2B5tOlC0KNvw3lsGSQp%2F9vGGAJoFodoJWAYwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqFeRA8M9ImHu%2BNQircA6yXgce8tMqhA59pM6FOHRfr8%2Bi6x1ugPNYFTZE%2BtGMNo5Qd53wCKSTvauSC7qREqRjtGMh%2BUbQ2ZhFnAUaMfzhkU4mYrPQcIxwrYKP6HEPr9dQ7b4kbEN88dDnIUwyM4NOpDMffj6JgO0ID%2F6%2F7%2BgQv6v8R9nby7RxrthBm%2BiK4nbB%2F8imDDnQ%2Fjtvil63kgkj9G3IF5IDw9AJqsrIeT6uD8jGN8%2BejXKZQNI5Lb7o45Z5pG4brxn9Jl0cQpkRT3aPsmHscNuMtkTpvJKRfO5GHuo8TJ7HuxqC9qKfVsomuleyBrfjm%2BmlB0Er5pV4yWoX30V8ahOeddCVCXhGLogjqIpa9mxjvryJS30RwDaLFJVDyWSisl%2B5%2BScDRHQhPTVgGjovXRe2OivlZE584nWi4TfoW%2BIOUQ0pPZeaSvSmgfhqm31wx1HePUD4zHMhcC1tmNnkHXgLl8enOeK%2FQHMXD0DClmqZSo1L8wRLX%2BPBiHKqsnlZvwM0b3%2F5RvCyYQDSKUIuEcULryyFLDwam2LSGof0f0DBmkiF18xeltEnEJFjGBvK2kysB04gZ2vD7k9qd4EMLIYC83xUNEkZTGdN4W8rwkPBddLEjRPShp8m8LmUXGIQ7cjPGEDDoMNCE68EGOqUBdnPPGpC%2BVCIObANoBgamyYVhg91LzdH%2BGeedzR0rrjWwQPxoCbJm0fyLjeHo%2B4Gk0f6IkQsX7UdeCWRm%2Bc%2FnLlQbAyJ%2F5NyBsA3782q%2FtL7EVehWILKlVwkcCuVvK8JdM%2F7NAYzpfZHdBUuldEnRjU%2FRFwGQDrl42hAnw6%2BCodOU7lFJg6iWs6fkmw%2Fzxlj8uZmEIOEWH1d8tmgnaQOuTrPBtNia&X-Amz-Signature=389a6b0a8f7112bfef639eb9e40dae788a4ca5c585ca69b5eb892643a2ebacc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYY6RNTN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM1VC6Fefh0E5NswQTCSUWhkNfDF2cANOodLX3jCqWkAiAVnBWl%2FnktvUtBEtR%2BoaJyRSz41QzSs0GTYTLMynpA7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2FEvqZIJNIRM4IhGKtwD2xZiOoeU4aqHbE7smbJJA7fGlGYDq97fcQWJJOnHhPFTWROuxrFR7cKWBm1L4oixULC0Sh1oG9k1f%2F233ZinZ3XkRUzpYV%2F4f2uNAWzYGrppE%2BJXx%2Fq1xRHbtxZbv2eIUYgLzLVLzOhvolG4GwmONBjhL0Qpop6I03GQVuaOWAb4PopPNATbDfNWJ3l4i3%2B%2B%2Bs%2FivHHaERZlDYg%2FxbBN19UU4xOwlJdYXxSEl0Ih52LW4Rdi2K5wrMtyhGr%2F81b%2FXx6iUOHyzceyA5xV89RdnQ4wlyyVgXOm%2B4JeDYFuTEVpuw%2FyEJI0dYMMtyBdhQM%2Fh7%2FAybtfbCNVX68T%2FblXCqwyoZ4pyPI5wSC06Dy3784%2F%2Bmesjn0zZ%2B9TYp16iOM1jry8Fg9OVoyce1Ui%2BFDzChJ4PL6I5CSGGqpF4syxYkRcHc3BvPtOII9IB6DO3w5Acq21QRAONcVleIbdNjk2s203vRtB88%2BUFoSZIglSO5o3Is7CblWs1L7LKoXNDMT4yIscF5f8Dxyk%2FdvUYdkxS%2Bb9V76KT5GkUsg3u3J2GZUEzQ4xt5NG9hHs%2FT9UPct7LGkaAMLCPIAU55tOuqjqDCc7KVwkZP3ZGNxIfCkJbeJwlczsjh5pS0EEEL4whsrrwQY6pgHGRbgtMCvkvcNW8I5olx5KpepoGQWaLa8LL%2BuY4bPM6v%2BGaRt7nF75%2Bl1wqaFtWkQPgXHsw93c9pc2xJrz9UrI5LCQVSaSIG2y%2BfIRUmfWX1zHjfgB6xeVKWt3PyiRcJKd9qWNDxTZNtEHHNHiecrDwLJsVAx78WPnexdZZhdmeVBRyjPPR9ddwChkbbi7y7hx141kkyhsgNRaHzS9vlsJkUqqivWX&X-Amz-Signature=7fed692a561de8d070451b5f2614707874b4aac21a9aacb5d71aac3bd7e0edef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVEH73P%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbXR4DCl8cwW0yM0ijwaXyhA7N%2BYwsHN%2By%2FY1wxE0%2FQIgLuYRs0AASqIuskoPBRCNHoYzeWQHc5EcUNa2j0KDLYcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfCYfifvh0kWNWmJCrcA8esxfMJWc4HertLAqEEIG4js7jpdkAxxCBXNYE7ECSLQX2nsQjmLrAUw7crFMO79768AldzDoHCS60hAYu0yifxcfOtuBsrJueUl1oJR4cSsklrNAX8kdq%2Ftv6udJ45rV%2FeNNbmNkhiHnKyv9A5aOWB9A0V04WdSyd49hG1Clmgwe6QglAHG%2B%2FI7BfZJJ1v2b%2BBtxpADCXOT%2FUKcAF2UWsGyktxdR20dWveUwZAz6Lfe0IlecCn2k9%2FEt%2F%2FzGRqriMDvawVHNAWru8viEYxFYkKLqo%2BxTo0%2Buqqx%2B4Ejgb%2Fr2%2Bbm6ARXfLCT1PTVWn5L2QlnBC%2FAIK039xUSbRMsMZRRjlys88Evg20dGpjQF2bOH7oJ8zIxwMouc88dIGcg1f6F7QZ3IR9Mni9e8SmVEUfdWlqQ4tPBhmUHGJoBUQc96ArIeKlAAoh5GTY5lbIH9bNaYf5GuoRoALEKMGJFDvsRmer7O%2FiWKQwOb6xWfOAPzmvOJzFE6RlDl5DHapv9xn%2FIwWKVqaTy31xK0CqlVA4NHCAbKwE5d75%2F%2BAeXgd%2FmrsEMZufDKXoTb57FyoXewv6O7JB1P82nWu%2FdGqQ3wsGzHjWgVRZGiQf1z4wYcqtgNJa0NZ7xr0Xv5vhMOSD68EGOqUBK%2FXg9vvzN32K5XlRpyGPwZbdu1c8pFw8dJukTtFBqY0SKLnQ1nLZmANIoS9OzGs5bLIgsBMem38hdqNZ%2Br%2FEV375Ulc07ejfE9jkniHI1iR5Fbu8voM3DOJkSah8iVGzKrU4WlCvEu8pUQ574woxNxa8HEXf%2FEZMPjsteqkK7Z5qCo3oCVCOrXuGXAxuBk0zfWCGKYy8%2BH8McQ%2FVtl7zwt5Uq0S3&X-Amz-Signature=7d11f71da2c0c5d788031386bfe34762fe9f1bd45072a766f6007a6be4615bef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
