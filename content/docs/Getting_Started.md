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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGFCKPD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp4WD9UmItbDETCqDHcEqsFn0Jkv867Kt9FZmf2xiMNAiB3%2BdNbZNfZ5HHNxH960M3rVjs7iwyW7AqOBpGXy9uYLyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxVz8Ekxab9AUq5IKtwDJ3aBSCsxfay11CJIDbtGrndXYpw%2B%2FVYLozuDuGEyVGMs8E4wGLWUQY%2BgvecAFmPsJue2UnOplQjbnTcrDw%2BbR4e%2FzNuJRNzMKH5QnxM1VOCnX2SzdgN6wwWM7kEB2Gufc%2FC03%2FlwMwHYbtXxQcvEyIDGxKNbLPWZTzvXKFMt1sAVQ8lfEK1IEm5oPeGRJTmyySSD1CdDyrzPL%2FFTl%2Fwt0q77oQ%2BH72HJUR3xFL5vPmLoaoCXzB9MhJj7w%2B%2FMocnQaS6oYs0k8G12LsXhqvWh5f24oygaGjCZQI2Akbw9DWaYSrXT1IuW3c11vPTNKkTQJhlphOM%2FXEphlyUAfdxNEijNPYfqNqRjVcnQQ58OMKexWvkBXFowox%2BgA5QraQJm7tozkutLD3bsjii4etWH6lDGDg6NyQRUMFapkwdI97g7JyH3EQ0UrmUZrVRq5d9gjilY7Kp2n20ypLxyorQ7xFYgcnrsD4JhCfNoNljyVdRgYuheGkxkx1LeU8fXv59Iq%2FFRLOSKo%2B7l0If9eAjO6noMLVc8F0nzQhi4hi%2BPf8DKKn4gb4yYtZv0VbYDDn6vD9x9YHKRt%2F9DSquYUdcq5gFAr%2BG5DzCrLhqtK7rXgBK6Lof%2FarP8S6WL7BQwodKIvwY6pgFQyksbKi9%2BUJwIgBCH5XVv1Jv3N2xOV9PmO6SH41Hi4nybiTEbUxqNkEABdRAK9%2FT%2Bj5IQ%2BT8LtgrK7W9kShm3zSAYQCKbY4BUfsd%2FjT10cOhS1VSHvLVlXIYJhUFOSZI6uznfgu539lpHr%2F0VyeHkgxWFkPlJs99nN6owQggO7yoYgtrVm98jdzj2i5%2FbCRnwyCrv5z1aR0b2FXQ8tn3Zxp%2FxqlbM&X-Amz-Signature=9f1266b2244a50118f3cef310bcf3f3796fa720a0f920a92053782d053f4b13a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGFCKPD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp4WD9UmItbDETCqDHcEqsFn0Jkv867Kt9FZmf2xiMNAiB3%2BdNbZNfZ5HHNxH960M3rVjs7iwyW7AqOBpGXy9uYLyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxVz8Ekxab9AUq5IKtwDJ3aBSCsxfay11CJIDbtGrndXYpw%2B%2FVYLozuDuGEyVGMs8E4wGLWUQY%2BgvecAFmPsJue2UnOplQjbnTcrDw%2BbR4e%2FzNuJRNzMKH5QnxM1VOCnX2SzdgN6wwWM7kEB2Gufc%2FC03%2FlwMwHYbtXxQcvEyIDGxKNbLPWZTzvXKFMt1sAVQ8lfEK1IEm5oPeGRJTmyySSD1CdDyrzPL%2FFTl%2Fwt0q77oQ%2BH72HJUR3xFL5vPmLoaoCXzB9MhJj7w%2B%2FMocnQaS6oYs0k8G12LsXhqvWh5f24oygaGjCZQI2Akbw9DWaYSrXT1IuW3c11vPTNKkTQJhlphOM%2FXEphlyUAfdxNEijNPYfqNqRjVcnQQ58OMKexWvkBXFowox%2BgA5QraQJm7tozkutLD3bsjii4etWH6lDGDg6NyQRUMFapkwdI97g7JyH3EQ0UrmUZrVRq5d9gjilY7Kp2n20ypLxyorQ7xFYgcnrsD4JhCfNoNljyVdRgYuheGkxkx1LeU8fXv59Iq%2FFRLOSKo%2B7l0If9eAjO6noMLVc8F0nzQhi4hi%2BPf8DKKn4gb4yYtZv0VbYDDn6vD9x9YHKRt%2F9DSquYUdcq5gFAr%2BG5DzCrLhqtK7rXgBK6Lof%2FarP8S6WL7BQwodKIvwY6pgFQyksbKi9%2BUJwIgBCH5XVv1Jv3N2xOV9PmO6SH41Hi4nybiTEbUxqNkEABdRAK9%2FT%2Bj5IQ%2BT8LtgrK7W9kShm3zSAYQCKbY4BUfsd%2FjT10cOhS1VSHvLVlXIYJhUFOSZI6uznfgu539lpHr%2F0VyeHkgxWFkPlJs99nN6owQggO7yoYgtrVm98jdzj2i5%2FbCRnwyCrv5z1aR0b2FXQ8tn3Zxp%2FxqlbM&X-Amz-Signature=95036dd85d99fb6a0c074cfb5fdd13304b4fedbd4a2322c0b72a37725193da96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHABU7XI%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRWH92f4IJIAshQLLfeMKxS6Q3HNUdeMXChaHtkByDNgIhAL4YIUbs0Nt2RaB0puYJe3f4XIjEmeqvX3fWXR4Vmn7AKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuwuRBQoHKphmpxOgq3AMWOv9fU9vR5pDyWBgkdHLkvY86x0%2BaTc9S7TpYIpaLPOnmB7GyUWt94k81WurM5X76ZOnjB8%2FXjBP9zzOJGvFkpzkpV%2FAfwVCr2qMR1LZC%2FOW4vhe7IAnTJlaU%2FaVUMKCPSbTZOo1NehYsdcl3sGNAtgiSL5%2Bfa1chp3uEXaQhMMygsUOLuM24aw97kWpe5iECQ2IOofM2i9Gpdxhe9MI2KV2OSoccBn4SjpOCzdyt4u9GqXiRwzWcF3YYUVyExw1BSF0hcCBZssX7GWHXMSTwcXpmPqBwTDgF5YxW%2BXxfbhtfw9QDKL%2BgoGhFzSWKLp2g2inZTQFDih591CgQBdvcmDFjVDlUUlFn1GwY8F2JQ3%2FGz3bZAqqn1EtyHISoc5yif%2F4F4uj1wMRvJqC5mHGqVAkGjrXnNmsRWP7BS4e5uuf1AoGm3GSj8u4VGls1qB8OtBkw%2FAEIw88IWIWjZHnPFnh1voN8ZsVqXF%2BSmYt0uiXiRu4tF45dTPF4Zcfg55HYo%2FGJfZ1fOsfmytr9ffWDdDSh4LIixbcFirE9s0xC4tKgDHvOYqc6nINcOv5cJSTBIA3ytlJf3qwyUJrlkfVX9syDreQ3lyd54eKRx95bQF2YZS%2BFsoIuh475TDCO04i%2FBjqkAVz%2BkTvlsKp%2Bmw%2FnKhCCRrDbGushRr4vthg5MGcWMDuRh2KKMum8aqGKGClU9kV1ZxZ6PUmjRde1FjM6jdwedtDcx1ZnQZsu%2FNQyvAxR1p1Q1B0fPCjQC9P1VAQEkCYqao1JXrZmUhX0enXbW4eopFn%2FBHiQ78U7dMzQ6rDy9IXksrRkLTc0k4EMa%2FnixZ6CL2ka%2Fa2B5uaS4Yc%2Bwm4CyqvqEtpe&X-Amz-Signature=1471dcbea2947d23a1ec753382015315de57a596f78f0fe6a7c7edebdad90fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMWPDBH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsnMzntPydDHBvhV34tzOw8zvsmMOR%2F4OP4YipFGQULAiEAswjZn8%2BzD4IW%2BZvO9R4V3%2FdeKQWu%2FUFoRZSTCvktnE8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKNDLStOnQEHwrp3CrcA6tex9xFRUlzudOj%2FjIhVFVLGaoFMhhx3eS5vhYhAC%2FGLzekAEnLB5D1S4lIfAzI9tQK0VwHkY71zgCcK5turIPX6cC9O6QdwNxe5Otba8cBorlvwNV6fqnf4CJkIBsmqL4h9ykyytgHn9sWQwydES2dVYnK%2FDJG4XAgYyp3o6OeT%2FWxFGQpD2mgsjF5GWeoI94et9FhM8fKI2q2jT5lOC7qctjkEpb1btMG%2F85acYPz3CMcDTrW8RrhW6f%2FN%2Bi5maRCTkPE%2F6WOLVEzwELqpqu%2FVNO%2BlrcwF8C%2BNm9LD1pB0MKEkX27MrSABf%2F%2FhDJ1bzlPFBXMHcGyausSgj99AtUSesUzx6QDOzwYELyyk7IQDMz%2Bw0BIicVht4hDkSOVWyRrfiQJy%2FF8BOgtibNzwsKW3X1yDws9lkHuJs9ofphIH%2FN1lyHh%2F3tz8zjzimKkrbLOtq9bwz7XGNNghIJ5rdDaU6nrI%2B67GnKxOG1ZKq1aC8dCRmmHgpH6UGpO6nPEJ6KYQ%2FySCqs0ZJGAc6v9fvZUuF087swKeZj1IwCd3Y5qIAjjuFXhoGwfdPAC%2FDUuj6yAEwOkpwkOrmyVYba6ivrLUKtOu8FUkBu3ocwm5L0aVrVZ%2BvWTcM3UTNLWMJzSiL8GOqUBSBAYGxRoaC3UA1cN9mkwaAlgr5yUn0pd7Uj5q7AyMhar5rd1FS6wPCZjcovDoIAlyfLOVHs4H%2FfdSwVPjaU3KViaONIFD0RyxevYqKH2sv9WigHVwHqSA%2BlaZOy9ghLSvBdUxpD3yelfDRaRKSER94rScHJe%2BRbS9z7ZMxNgzFH8bAiuD%2BnTj6MPO8Nsoqo%2Bwp9swqr70ctT4wmLgFErIOgG2%2F3G&X-Amz-Signature=bb489bca5a5d27f88ea97bc46e9520a6c1ba501b14d4592aeebc3cec6ca65078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGFCKPD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp4WD9UmItbDETCqDHcEqsFn0Jkv867Kt9FZmf2xiMNAiB3%2BdNbZNfZ5HHNxH960M3rVjs7iwyW7AqOBpGXy9uYLyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxVz8Ekxab9AUq5IKtwDJ3aBSCsxfay11CJIDbtGrndXYpw%2B%2FVYLozuDuGEyVGMs8E4wGLWUQY%2BgvecAFmPsJue2UnOplQjbnTcrDw%2BbR4e%2FzNuJRNzMKH5QnxM1VOCnX2SzdgN6wwWM7kEB2Gufc%2FC03%2FlwMwHYbtXxQcvEyIDGxKNbLPWZTzvXKFMt1sAVQ8lfEK1IEm5oPeGRJTmyySSD1CdDyrzPL%2FFTl%2Fwt0q77oQ%2BH72HJUR3xFL5vPmLoaoCXzB9MhJj7w%2B%2FMocnQaS6oYs0k8G12LsXhqvWh5f24oygaGjCZQI2Akbw9DWaYSrXT1IuW3c11vPTNKkTQJhlphOM%2FXEphlyUAfdxNEijNPYfqNqRjVcnQQ58OMKexWvkBXFowox%2BgA5QraQJm7tozkutLD3bsjii4etWH6lDGDg6NyQRUMFapkwdI97g7JyH3EQ0UrmUZrVRq5d9gjilY7Kp2n20ypLxyorQ7xFYgcnrsD4JhCfNoNljyVdRgYuheGkxkx1LeU8fXv59Iq%2FFRLOSKo%2B7l0If9eAjO6noMLVc8F0nzQhi4hi%2BPf8DKKn4gb4yYtZv0VbYDDn6vD9x9YHKRt%2F9DSquYUdcq5gFAr%2BG5DzCrLhqtK7rXgBK6Lof%2FarP8S6WL7BQwodKIvwY6pgFQyksbKi9%2BUJwIgBCH5XVv1Jv3N2xOV9PmO6SH41Hi4nybiTEbUxqNkEABdRAK9%2FT%2Bj5IQ%2BT8LtgrK7W9kShm3zSAYQCKbY4BUfsd%2FjT10cOhS1VSHvLVlXIYJhUFOSZI6uznfgu539lpHr%2F0VyeHkgxWFkPlJs99nN6owQggO7yoYgtrVm98jdzj2i5%2FbCRnwyCrv5z1aR0b2FXQ8tn3Zxp%2FxqlbM&X-Amz-Signature=4e0d3189c615deebe646dfebad908a2b1249295c46dc4ec69ced8d1af5cbca7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
