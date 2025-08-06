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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7DNKHA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDU%2FtdbuO6Tdlsl7m6CobEHZGGdsGr1S%2Bqfv7eQhxqMNQIgYZuGY32B4G5hYpjx%2BKdt%2BAKJf4cbGCM9t1NCFPc%2BSygq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMQ9LA4IT52%2BimXsnCrcA48Cirpggla0S2TriOAm1GEArC8YESM5s0W7dq9tkppF%2FPzt09cBmJjXWg6S35xn4TLzen%2BBbJBLKV44bgVGj9jaJaOXvEZDKkwgWBeZaAlzT0Hgd%2F0UXzl2yUlygyUmXkpWde9OW1hA72M1r3ZiZsmM66RHGR8XpwyxXKTxJXkNcGSWy5uNbsN%2BfAAM7RdXzK0bNNELS0ZHB8JVhPzGv3lc2YdOxuouAQfkVcBxw3jS4TjvYtRDbJg9LCnjsRKc9q4Kz2JZ6%2BGMfBxtofoCpxL0iBN6jngPnLKI68ggnYW20dNP9hThoeSxmA70VvVxWAHW0icYcMt%2Bgumvt4NxevQ%2F4a2%2BGPOoJmIINRJIueBTPtnEk4yhk0G4HoKiTVQ4qB9APdx83RF354AeZq2PTzDaonmksdthZFE7zqnddgtKn5%2Fns3Iign8Z%2BsVTJ7JLBIcVCv8nip%2BwjFSnBrRiXzX%2F9Ob5crDn4xgue5SJXIfXaKyNM93%2B1pvjnmzB2kexmWMuaCIMYFnlwoIQd8rWe%2BTLXL02X0JDRqzpxw8LqX0cqOAqBrckzj2M1sUuZG7NunHblk5KhL89oOcDxHbHsIO22sAL9e61AocE7EF%2FdrnJcqyaf7SlLvHzEcuFMPaOz8QGOqUB6P%2BZKoK1s4Ei1VLHeWDaiGGbpZ%2FW4qTgROiavuZxsB61yfwaaAGGpOv0IfXMg3lzmGnUJzCg2i7AQHZaSHKP4pt%2FKfYnghidcS0tvMVPVWPepq4thSUyG%2BtPsxQQM6wCvZaUYpQgZyZpK9%2Bu868ZbeCXFeIn2Ap65O%2Fnt4YejzKxxTs8GR1SBE0wiiIR5e1MhI06VoQbzuhYdPZMsB%2BTHQ18JVaj&X-Amz-Signature=026055907e7bff80fe1f00caa52382cea402a6d98ec136763551492c9af1e65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7DNKHA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDU%2FtdbuO6Tdlsl7m6CobEHZGGdsGr1S%2Bqfv7eQhxqMNQIgYZuGY32B4G5hYpjx%2BKdt%2BAKJf4cbGCM9t1NCFPc%2BSygq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMQ9LA4IT52%2BimXsnCrcA48Cirpggla0S2TriOAm1GEArC8YESM5s0W7dq9tkppF%2FPzt09cBmJjXWg6S35xn4TLzen%2BBbJBLKV44bgVGj9jaJaOXvEZDKkwgWBeZaAlzT0Hgd%2F0UXzl2yUlygyUmXkpWde9OW1hA72M1r3ZiZsmM66RHGR8XpwyxXKTxJXkNcGSWy5uNbsN%2BfAAM7RdXzK0bNNELS0ZHB8JVhPzGv3lc2YdOxuouAQfkVcBxw3jS4TjvYtRDbJg9LCnjsRKc9q4Kz2JZ6%2BGMfBxtofoCpxL0iBN6jngPnLKI68ggnYW20dNP9hThoeSxmA70VvVxWAHW0icYcMt%2Bgumvt4NxevQ%2F4a2%2BGPOoJmIINRJIueBTPtnEk4yhk0G4HoKiTVQ4qB9APdx83RF354AeZq2PTzDaonmksdthZFE7zqnddgtKn5%2Fns3Iign8Z%2BsVTJ7JLBIcVCv8nip%2BwjFSnBrRiXzX%2F9Ob5crDn4xgue5SJXIfXaKyNM93%2B1pvjnmzB2kexmWMuaCIMYFnlwoIQd8rWe%2BTLXL02X0JDRqzpxw8LqX0cqOAqBrckzj2M1sUuZG7NunHblk5KhL89oOcDxHbHsIO22sAL9e61AocE7EF%2FdrnJcqyaf7SlLvHzEcuFMPaOz8QGOqUB6P%2BZKoK1s4Ei1VLHeWDaiGGbpZ%2FW4qTgROiavuZxsB61yfwaaAGGpOv0IfXMg3lzmGnUJzCg2i7AQHZaSHKP4pt%2FKfYnghidcS0tvMVPVWPepq4thSUyG%2BtPsxQQM6wCvZaUYpQgZyZpK9%2Bu868ZbeCXFeIn2Ap65O%2Fnt4YejzKxxTs8GR1SBE0wiiIR5e1MhI06VoQbzuhYdPZMsB%2BTHQ18JVaj&X-Amz-Signature=9f5ccac389b6311a96e72e21133b52a4524c941a7f3eda5b627875c20f863220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7DNKHA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDU%2FtdbuO6Tdlsl7m6CobEHZGGdsGr1S%2Bqfv7eQhxqMNQIgYZuGY32B4G5hYpjx%2BKdt%2BAKJf4cbGCM9t1NCFPc%2BSygq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMQ9LA4IT52%2BimXsnCrcA48Cirpggla0S2TriOAm1GEArC8YESM5s0W7dq9tkppF%2FPzt09cBmJjXWg6S35xn4TLzen%2BBbJBLKV44bgVGj9jaJaOXvEZDKkwgWBeZaAlzT0Hgd%2F0UXzl2yUlygyUmXkpWde9OW1hA72M1r3ZiZsmM66RHGR8XpwyxXKTxJXkNcGSWy5uNbsN%2BfAAM7RdXzK0bNNELS0ZHB8JVhPzGv3lc2YdOxuouAQfkVcBxw3jS4TjvYtRDbJg9LCnjsRKc9q4Kz2JZ6%2BGMfBxtofoCpxL0iBN6jngPnLKI68ggnYW20dNP9hThoeSxmA70VvVxWAHW0icYcMt%2Bgumvt4NxevQ%2F4a2%2BGPOoJmIINRJIueBTPtnEk4yhk0G4HoKiTVQ4qB9APdx83RF354AeZq2PTzDaonmksdthZFE7zqnddgtKn5%2Fns3Iign8Z%2BsVTJ7JLBIcVCv8nip%2BwjFSnBrRiXzX%2F9Ob5crDn4xgue5SJXIfXaKyNM93%2B1pvjnmzB2kexmWMuaCIMYFnlwoIQd8rWe%2BTLXL02X0JDRqzpxw8LqX0cqOAqBrckzj2M1sUuZG7NunHblk5KhL89oOcDxHbHsIO22sAL9e61AocE7EF%2FdrnJcqyaf7SlLvHzEcuFMPaOz8QGOqUB6P%2BZKoK1s4Ei1VLHeWDaiGGbpZ%2FW4qTgROiavuZxsB61yfwaaAGGpOv0IfXMg3lzmGnUJzCg2i7AQHZaSHKP4pt%2FKfYnghidcS0tvMVPVWPepq4thSUyG%2BtPsxQQM6wCvZaUYpQgZyZpK9%2Bu868ZbeCXFeIn2Ap65O%2Fnt4YejzKxxTs8GR1SBE0wiiIR5e1MhI06VoQbzuhYdPZMsB%2BTHQ18JVaj&X-Amz-Signature=fad31c5cf1799d83eee4a51ebc8978a7b49a407047f7a0966e571997e7ba86ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMRFOC7H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIA%2BudOGlFEjb8rxIzRY3mCxrFLpVHw0gSk0A%2BBTk2T2WAiEA0YuGFffdGQ%2FkfaWdjAvxZNcHuJE1JF7klcurQyML3fAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMeooIyCaQjMtqVRmSrcA19UKVYwh0AeVMvwglYuZWYc3ymDzRsxPJRP2GrK9VKq55JodZ2%2B3%2BK03iPUXbUM4F3Lah3rlbi8VvkNs2dAIvDJV2pKgDBFrT6vQOBaDUIO3sibrYTAOVkXC8sA%2F6LBOYpQRcEUk5cedyoa%2B9aZ940DKW8j%2BRRD1sGpqgnhdMjlPOLZOsxlBbNdQwJG7rTq%2FQRLav24L2aRzkgoTrsknIZbntEvnBi%2BsDoxb67HPhAGJ%2Bm8ku0mVd%2FSewLDPglEepp7DmGYpuxLYBtOzDsMxGs6wtW2k9014rFjNPdxiiX%2BBEKdNKeC9%2B66G6gS20VB7kwuHJrpswgyC8ALRV4RzZOMoayKn3zXDZfNXinTEoi60bbGtWS9HC0CRIuUcmmMS35A4Ijz7xjBOBzqJKPErTXDXjUVW7dRB6aQ6IX7UeiW46pUj3EQAmzfwe2TuBRwCzzKLCuD4TO%2BasViDd2BAgAZr%2FvNOe8ZA0mP1209%2FNFl9Fn5CP8sCfIinNlSTrhrvctsjW%2B7CeCHrI9DaKJuv1dwG4xvsnkAdNK74hahu9yfOkQ7Uhs5FkPW4cA9YXrmFbfUKdK6l6mfUua6tp1yfNm2c94InGz5pDOGb6QNh9a4IRfNx47irjjHv7urMLyOz8QGOqUBCCkCkKeUsWlh6wfCayF8kVim9uvPQfaLbgjlpbo%2FG4zpHqY1b0CcM0U43AP%2F59S3VrZII0p0nYuvlsrE6KYqzenIdPMhEOXUD3ufyyfp88J0tqKJ3TBsVuSEvJnV3u913SfnYSCpnevUF6OYT5y8FgtLu3cszSh%2BP7qwLMh8gc7qKHzF1I8LBn14yb%2Fx%2BZWHAl6RPbRdsX%2FVzCTXXC%2BprsWjGrDi&X-Amz-Signature=9f6793976baff0bbad1ab1e97565d01b2405a3243e91e7f40040f96b7da90e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOBQHEX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHeDRuFFCxWRpUsKsHt4cSPFn5X5t5CRKScgMSPdNU3%2FAiBRmG84%2FVuPZDr%2BbDxGstRsiv9zX8oKTT4HYJvMvKujuyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMHMzUjWUlQydsEL%2BEKtwD3JukFbRi6OT3TUY6H5gX6NxTYA%2FVo1x0A4gwfhnIfns8ygqg14jGFGQBy7oXT0XBJwvNLn%2BUU8L1FQ3HV2mwqGMa7XhBEXrdk8iglP%2F4S1U%2FIZanBhAJx6lbUkHjqk%2FsiQdOs91NUcp9Z7NeibieRiQ9XwVc%2BLMmZm3AXk4QchQO73EwaFdZ1bimZ%2FqQQKnPhS18FigDXVxKxWmEc8SMuhlHUIlxdAobWtsTXEZ1BUVzwFSd4VpuQCHwqD6cfDHYbBrz%2Fi3DTqNJOpGMbdIBi7ekVkA72EuglTJPTmG3B%2F9njWMPKbJTWl2MQiU%2BcTr6Y2nXDMjcihNphQw2FO%2Bu%2BHzcLuu4qMrWyz%2Fd6k1SyTMiO7N0isvVTbFRPsx7NMNHz%2FIaTbAfZexZ70P%2Bq4ayFJcQeR2qHrWD4pM7xEnnFc0ejugdJx%2By3WonGY%2FWv%2FSYA4VFXIVVcA5DSd85RJXz268ETd1j4wIKZDgKE7Q7Q7RccaIUp5PK27AUK%2BfqlcI1C4%2Bmh5gTfNcP17Jm1WOSbYX%2BoyDiDUTTgBgN%2FFxAjTI5P2zPt8XKS03p%2B7i02IrgNZ%2Bpjzv%2Fbfm3%2BvVnhqoyhhau7d3Ccm8p5s55WVMtFByqjtpNmCzN4tm45Jww1Y7PxAY6pgFYWBlNBMlges2%2Firz90dzh2t5IPXgtfKR9rZp0znJn1nB8scDKC7prSFpkwjycIaN4vA3PsJiSCIFyr8GpbRjeUbQVyQiVba3ka0ppdCfm3Iiyw9XGsoCockVysmTbHhZK5pIHj1z2JXrBwOa2afh9tNk6mkrIp5TwzC4kIPdZXEku2eTCqJa5coTnsyGDIbkFjZKDZh97WJj7sxuYqf61BEfKYhws&X-Amz-Signature=e17fd805797566c4d4f5994abd7961cddf9fb4177c55db497fc5d1b58b2171ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7DNKHA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDU%2FtdbuO6Tdlsl7m6CobEHZGGdsGr1S%2Bqfv7eQhxqMNQIgYZuGY32B4G5hYpjx%2BKdt%2BAKJf4cbGCM9t1NCFPc%2BSygq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMQ9LA4IT52%2BimXsnCrcA48Cirpggla0S2TriOAm1GEArC8YESM5s0W7dq9tkppF%2FPzt09cBmJjXWg6S35xn4TLzen%2BBbJBLKV44bgVGj9jaJaOXvEZDKkwgWBeZaAlzT0Hgd%2F0UXzl2yUlygyUmXkpWde9OW1hA72M1r3ZiZsmM66RHGR8XpwyxXKTxJXkNcGSWy5uNbsN%2BfAAM7RdXzK0bNNELS0ZHB8JVhPzGv3lc2YdOxuouAQfkVcBxw3jS4TjvYtRDbJg9LCnjsRKc9q4Kz2JZ6%2BGMfBxtofoCpxL0iBN6jngPnLKI68ggnYW20dNP9hThoeSxmA70VvVxWAHW0icYcMt%2Bgumvt4NxevQ%2F4a2%2BGPOoJmIINRJIueBTPtnEk4yhk0G4HoKiTVQ4qB9APdx83RF354AeZq2PTzDaonmksdthZFE7zqnddgtKn5%2Fns3Iign8Z%2BsVTJ7JLBIcVCv8nip%2BwjFSnBrRiXzX%2F9Ob5crDn4xgue5SJXIfXaKyNM93%2B1pvjnmzB2kexmWMuaCIMYFnlwoIQd8rWe%2BTLXL02X0JDRqzpxw8LqX0cqOAqBrckzj2M1sUuZG7NunHblk5KhL89oOcDxHbHsIO22sAL9e61AocE7EF%2FdrnJcqyaf7SlLvHzEcuFMPaOz8QGOqUB6P%2BZKoK1s4Ei1VLHeWDaiGGbpZ%2FW4qTgROiavuZxsB61yfwaaAGGpOv0IfXMg3lzmGnUJzCg2i7AQHZaSHKP4pt%2FKfYnghidcS0tvMVPVWPepq4thSUyG%2BtPsxQQM6wCvZaUYpQgZyZpK9%2Bu868ZbeCXFeIn2Ap65O%2Fnt4YejzKxxTs8GR1SBE0wiiIR5e1MhI06VoQbzuhYdPZMsB%2BTHQ18JVaj&X-Amz-Signature=5cd6bf11e925a122e5a0dcfc3b00e67a3b45f32a96c04c606060b24cedd59fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
