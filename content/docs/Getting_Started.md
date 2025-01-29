---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVYOSRB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG95HbOEKpjppgBB2Vye%2Bvbij%2Ff%2Bl%2BHomhRAhlWUEKo7AiBx13axATl1eOrTtJMagxG7RVTDrdhbeDhAhZjzMWjD1iqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ4Y%2FFmRC%2BeFtc79NKtwDijrq%2FskrHL2cZzTJQK4f21aPAx6vwiJcB%2Bc3NWjRsqwLlx%2FXjlBZ0Nx4BhZ%2FQaPgAFkTsp%2Btq6LRxPYfOyA6grrnKA8Fvw6qXfnsffr5ATuzodRDrGKpcCcUymagOE22nn%2BQhy3Gd%2Be6FavwWmQuqgAdReInXlNilbv6LBCnVJUlbEAOMyTf%2FH%2FZkrzCExHFBKPYYodX%2BpMtUt1oEzg4SG2pkiM0Uo%2FnXJ%2FS8HHmFYsJt%2FxxUdC306QhTQYwVjL0Etv2kLS6gop%2Bi94k%2BzyqwQmd%2FpGkb6fWNx7lGNSAhmc2nHGihZ9FCmvdRKz4%2BN7IYlIB54GcMc9LAWNR49lcnnLNdquni5%2FIbdbD4R3Cc%2FlXiqrxS9M1LUMec3BPxrXbdUBjhKwEgB6Z4jsa%2Fwt96O%2BvkSGCKeoUwoCRtPRvmXj2u8G8nuIP%2BT4dhdpWQhyy7d2xCIZSP9dTGbr2O9EQGN2IMULijiD%2BRixK%2B2YpntyZb6fwlhic7vuMBG7vv6vPLSBk0v2JQ99FHAtZQki%2FDllfbk7JD65kMYAukWnJe2dnM3w2c8%2FNc1bL%2BQxDcf57pyGAW4%2FVg2JwipMB3Xu18uboRM73VXVwnS2tdOZNrB6KztotmYvknbNbQmYwr8zovAY6pgHzu0bpQRLW%2FaXLPaaClsuaDomcg7fQD73w5ciCrtimkTCM8wJZ7FEKVBCE5rq9et8a0RnI%2Bep1KzmCjJSfosBtFrhJJ02v%2BFelJuykIws8taJwXpq55%2FCj7chOzL745PYhXFVu%2BOLDJGeZYSUYgy16guJ1XPl07byhwPFVfvOB7R%2BAgVN5Nr7O9tOQDpGikNsH3syMR2wGgDVZl2IaBb%2FWnvqycUUP&X-Amz-Signature=7ca301cce5bfe29dac33c77762abe63e09147ba33e1c6f88ea738a27a3d37c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVYOSRB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG95HbOEKpjppgBB2Vye%2Bvbij%2Ff%2Bl%2BHomhRAhlWUEKo7AiBx13axATl1eOrTtJMagxG7RVTDrdhbeDhAhZjzMWjD1iqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ4Y%2FFmRC%2BeFtc79NKtwDijrq%2FskrHL2cZzTJQK4f21aPAx6vwiJcB%2Bc3NWjRsqwLlx%2FXjlBZ0Nx4BhZ%2FQaPgAFkTsp%2Btq6LRxPYfOyA6grrnKA8Fvw6qXfnsffr5ATuzodRDrGKpcCcUymagOE22nn%2BQhy3Gd%2Be6FavwWmQuqgAdReInXlNilbv6LBCnVJUlbEAOMyTf%2FH%2FZkrzCExHFBKPYYodX%2BpMtUt1oEzg4SG2pkiM0Uo%2FnXJ%2FS8HHmFYsJt%2FxxUdC306QhTQYwVjL0Etv2kLS6gop%2Bi94k%2BzyqwQmd%2FpGkb6fWNx7lGNSAhmc2nHGihZ9FCmvdRKz4%2BN7IYlIB54GcMc9LAWNR49lcnnLNdquni5%2FIbdbD4R3Cc%2FlXiqrxS9M1LUMec3BPxrXbdUBjhKwEgB6Z4jsa%2Fwt96O%2BvkSGCKeoUwoCRtPRvmXj2u8G8nuIP%2BT4dhdpWQhyy7d2xCIZSP9dTGbr2O9EQGN2IMULijiD%2BRixK%2B2YpntyZb6fwlhic7vuMBG7vv6vPLSBk0v2JQ99FHAtZQki%2FDllfbk7JD65kMYAukWnJe2dnM3w2c8%2FNc1bL%2BQxDcf57pyGAW4%2FVg2JwipMB3Xu18uboRM73VXVwnS2tdOZNrB6KztotmYvknbNbQmYwr8zovAY6pgHzu0bpQRLW%2FaXLPaaClsuaDomcg7fQD73w5ciCrtimkTCM8wJZ7FEKVBCE5rq9et8a0RnI%2Bep1KzmCjJSfosBtFrhJJ02v%2BFelJuykIws8taJwXpq55%2FCj7chOzL745PYhXFVu%2BOLDJGeZYSUYgy16guJ1XPl07byhwPFVfvOB7R%2BAgVN5Nr7O9tOQDpGikNsH3syMR2wGgDVZl2IaBb%2FWnvqycUUP&X-Amz-Signature=ca6c072881cd22124e25123ffb231659b7c1e6f2e08e81eac6e519d72a4ccda8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUZJ2DQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIajeEkzoUXSNUsc%2FxLktDVGr43lg5QoIyMdwiH9ryoAiEArDmMAeQWTZ2HOzb3FwQAU3U3c4P37pFDMC%2Bu8vCgsD0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsXAlNUxjBAPmHU1ircA%2BQPwnKvd03WAfAzGTJ07zooTvEWUa5aY6ENMGbr4rWstBsC5fS5xDpr10W2%2B81FBwTxnUw27oGsNBT8JL2LgIE5D1zyR5T0e4wfhe3USWpXiF%2BtQpIzdbz0H7bPwTebLK2rSTm0sA8KSFx6n5%2F%2BuBP5WhzOegADWB1QJBk6bxXi5YCeWGbFs3c9WFRevOw%2BO7wwItwnaEpW1vXnVaM8iWew0mDvd3%2B7EVKFx575jF9iGmqh0lzW%2FnwbeLe4lt2zk%2FQLEreUxXbajFRV7olSqlhCQ12QaRzoCjBbYGcgF6IXwVC22%2FxE1vqEEYK2HeA%2B%2FPS34XADn68shBScaTqFdlmEP2sfgltrTYIAQaMAjk6hGnNJ0bdvzTYw28kruY74wo3Iq8oPXonCSQfoPm9m%2FSCx2cW5tPSwZPKQ9mHBW2DYFvxx5pmEEJTfydB89WpkKVUOED5w8s8nliJPLGpwbqxy8YgbiviSgGhQPXagscbJ2FkAkbwzsAs9BfhHIZkEmREes5EiY8HVNPE%2F3fNhhoG8a2sX8TJOjDMo%2FsXHBZ0dRPG9Gh1yK%2BBBqFNnq4Q0fQX9hQuHLX5bjG0wWFXPOzX2FGYxTE1RyrnrJjGnMn10D2i0Hy5hA3GSir2AMM3M6LwGOqUBhP8Ll97sSxAVr3uB4o00CyQgGQAoV3VYpok0fl3DI4Iojiqxu7SL3HbiRqrqkdNMLphRBkpDpctelSjp3T7yx01brNW%2FWFxVHU4UymWMrVQPk503ErdY%2FKIp64HUQ4CENup0kITF950gA9ACQuldc9qFz%2FUeYzQ5FH9QTqXJK2yMejyjnuMcOQh4QQBKa0ZjaGBtn7JW6K37dX3zMOyteLkMd5WD&X-Amz-Signature=9247786442e53b8a6112f8bfe3738150bd2669f21a66819c150ba2eea7521e69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJOBUAZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjMBT6X2Fjf90uJz2a%2Fg%2F0Mcnpnka87sTkVDblQQvoUAIgHbdrBEFwv7bbyq7Q0t1ZsegBQwiUK9eq2vxS3S0Z1rUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeWsAGnd%2BQmI0UQvircA%2BSfZEdq7IOQkICMNIhyBHt5%2FQ0w31u17M6Nm50mqGMKHLb5eshmmc12L%2FXk4AF90pWYJBgoa0gqyYtgOy5ubzDAp1%2BCR8vTfTSHFbexEmvjvX2z1%2B1T7y%2FXFLpxgMPCxlfeRvSdfy881eHXCwGZNRZoYw3AWyiYCIKzrHIo2RcE6tzO2FlzJRdYlL1i2BQjcIESk8xc0MyVPREXpHWqR%2FEb8UdCrGuCQwwmpzU6kp7i%2FE55ScOb1pxZRaMnVpYiskknvzzRc0ld%2Bk0BeDWkClc9ziFh%2F%2F3Xc2KgrFo0BpWho2IqZXv1RR97C9eVvTkW3DVhhksfosfjirAXUDVcVB4qg3OLNOAK0PdwpVSGY2FFiUQlua5RcF0FiRo22h2EpZzlV38DRT0%2FPj7beACTnJn66%2B5yMBiDOxcUG7l8XQSkuoVuP3RsN3wFsBNHJu715LC08QUupkgKkVNdRRH1ptu5Vgm0%2Bus08fJ8sWIE8QgJuN532geHoHoDbOsszL5NnwyqM7tA73D9y8i97r%2FFoUJSD8AFkhxAU2DmrY7PEn1ttDSRPXt7PiEi6RjQyjUsBWwLDobfTmWiqeNPMmqD2c8DHKk8piVwKSIZe199xDsdO%2BPbVgKqidMn%2F%2Ff2MNfM6LwGOqUBEoDRd69S2y6aJP%2FOpmVcFL%2FFNZGdExkYLMXDWl0xlS8vIuOv%2BliIsldM5IMLjB8okwXWyFYZik0IAtC6csF60PkovMMxSgp8a%2Btjx%2BBLeVDvVHYKhOW0Hxone5feUh2WgXxnOOLSqDhTY6l2mujmRuGLcLfwKWF41VVJZr6P%2F2RUL3n%2FM7PKUX%2B%2B448HMPP9LfdfSCgmKHJYE6LABScZE03qdQnx&X-Amz-Signature=d93527b0ea2d6505fa0a9bdfbef745d5ea3ed2f7bb6981f13b4a380bfeb1afdd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVYOSRB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG95HbOEKpjppgBB2Vye%2Bvbij%2Ff%2Bl%2BHomhRAhlWUEKo7AiBx13axATl1eOrTtJMagxG7RVTDrdhbeDhAhZjzMWjD1iqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ4Y%2FFmRC%2BeFtc79NKtwDijrq%2FskrHL2cZzTJQK4f21aPAx6vwiJcB%2Bc3NWjRsqwLlx%2FXjlBZ0Nx4BhZ%2FQaPgAFkTsp%2Btq6LRxPYfOyA6grrnKA8Fvw6qXfnsffr5ATuzodRDrGKpcCcUymagOE22nn%2BQhy3Gd%2Be6FavwWmQuqgAdReInXlNilbv6LBCnVJUlbEAOMyTf%2FH%2FZkrzCExHFBKPYYodX%2BpMtUt1oEzg4SG2pkiM0Uo%2FnXJ%2FS8HHmFYsJt%2FxxUdC306QhTQYwVjL0Etv2kLS6gop%2Bi94k%2BzyqwQmd%2FpGkb6fWNx7lGNSAhmc2nHGihZ9FCmvdRKz4%2BN7IYlIB54GcMc9LAWNR49lcnnLNdquni5%2FIbdbD4R3Cc%2FlXiqrxS9M1LUMec3BPxrXbdUBjhKwEgB6Z4jsa%2Fwt96O%2BvkSGCKeoUwoCRtPRvmXj2u8G8nuIP%2BT4dhdpWQhyy7d2xCIZSP9dTGbr2O9EQGN2IMULijiD%2BRixK%2B2YpntyZb6fwlhic7vuMBG7vv6vPLSBk0v2JQ99FHAtZQki%2FDllfbk7JD65kMYAukWnJe2dnM3w2c8%2FNc1bL%2BQxDcf57pyGAW4%2FVg2JwipMB3Xu18uboRM73VXVwnS2tdOZNrB6KztotmYvknbNbQmYwr8zovAY6pgHzu0bpQRLW%2FaXLPaaClsuaDomcg7fQD73w5ciCrtimkTCM8wJZ7FEKVBCE5rq9et8a0RnI%2Bep1KzmCjJSfosBtFrhJJ02v%2BFelJuykIws8taJwXpq55%2FCj7chOzL745PYhXFVu%2BOLDJGeZYSUYgy16guJ1XPl07byhwPFVfvOB7R%2BAgVN5Nr7O9tOQDpGikNsH3syMR2wGgDVZl2IaBb%2FWnvqycUUP&X-Amz-Signature=daf96e88ce0ebc3d30c5ac760365eb030600d3cd9dedc4733bbac9e6af5f5c12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
