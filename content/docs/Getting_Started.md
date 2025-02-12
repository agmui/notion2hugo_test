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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4ZKTLO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7abz1ng6YxLw02grIPKUYGxRsCqOzMa%2BcCTtzGNTpkAiEA831VaP%2FrPntFVHfl4L%2FiBX10nMopAs6s0IQ1SGu8ISsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuaMcACI2jiRMTPOCrcA2NIELzgEzcMhxO6kKAWhGze%2F4OwgHTjyXsoZxrGfuqEn017C%2FR9qPiwzuf2kuiUYdNEEE%2Bgh1JnqIMUz78wb1bhT2ymzdzJEGzr%2BitHROaW6T4YgDH%2BOxIf8EJqgJpxtCLCWhrbyH61UWtKvEm%2FMhDi%2FsBbUWqO2XCcm5JKPysIddP5D1FNg6vj5JRJJIsvJZn%2Fajf1kxPiBn2tCvixpfm8u70eeW%2BVxSaeLR5cpAsSw9debIm70VNg1TAIlEVcpEm%2Fr1OcSo6wnbnluZBtDo%2BLvk1e4dgeLlAg0cU5yx5cY1phcm5bAecV0lynaCsqczEvuSCrUhTDr6GGSRctcIuVdLQtvPnDiDPG4Z2duqIplG4IxWS9Zzuzkb0%2FlVPr%2F7gAWdkxAvexYCu%2Bzkkg2OOb02D%2BgdWvhqKKujaYJFGxFGUNt1Ike91jv3tOndoGDxV5hH7%2FAM5XO%2FHN%2FTr%2B7IVhI8LyiJv%2B4tnEGSiyMELpxj4IAVsbjqbOtLvScyPjVljY0wEgMnGLH9OTcQ1CbBX8Nr0szZB5xp0QaaLvDhFM3z%2BTrUbCldy0YaFVtyyG7Hoq2BLVOoQEPbOtwU6IO%2FaJym2mGkx64F7hsuY6smJSnNhQQPFdxXnEqzxBMKjzs70GOqUBPQvctimA5G7nV41aQjRgwVi75LvaOZBkvQ1Pgej%2B%2Fqna3YnY8sgSqc9e4ojX6b%2FDhsbBEJ3aDydtQKHyc5%2Fm7HAne%2FKfYn5segyrS6AKFKhVEiEiKWv9H2eOlPKBeLMkkS2kzJBLQID0nOnF7mpFYB2JvkE0373uqjZHyHzzOklFrcVyKCkUlhLPMt9DekIPncGMDrSZq%2FRN2ZmM3xEyvOGEs6L%2B&X-Amz-Signature=222fa48bd7a30f5691c9ce9dc2e4f84f3f73757ef3ac4d9ce22d8a7e9441e0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4ZKTLO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7abz1ng6YxLw02grIPKUYGxRsCqOzMa%2BcCTtzGNTpkAiEA831VaP%2FrPntFVHfl4L%2FiBX10nMopAs6s0IQ1SGu8ISsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuaMcACI2jiRMTPOCrcA2NIELzgEzcMhxO6kKAWhGze%2F4OwgHTjyXsoZxrGfuqEn017C%2FR9qPiwzuf2kuiUYdNEEE%2Bgh1JnqIMUz78wb1bhT2ymzdzJEGzr%2BitHROaW6T4YgDH%2BOxIf8EJqgJpxtCLCWhrbyH61UWtKvEm%2FMhDi%2FsBbUWqO2XCcm5JKPysIddP5D1FNg6vj5JRJJIsvJZn%2Fajf1kxPiBn2tCvixpfm8u70eeW%2BVxSaeLR5cpAsSw9debIm70VNg1TAIlEVcpEm%2Fr1OcSo6wnbnluZBtDo%2BLvk1e4dgeLlAg0cU5yx5cY1phcm5bAecV0lynaCsqczEvuSCrUhTDr6GGSRctcIuVdLQtvPnDiDPG4Z2duqIplG4IxWS9Zzuzkb0%2FlVPr%2F7gAWdkxAvexYCu%2Bzkkg2OOb02D%2BgdWvhqKKujaYJFGxFGUNt1Ike91jv3tOndoGDxV5hH7%2FAM5XO%2FHN%2FTr%2B7IVhI8LyiJv%2B4tnEGSiyMELpxj4IAVsbjqbOtLvScyPjVljY0wEgMnGLH9OTcQ1CbBX8Nr0szZB5xp0QaaLvDhFM3z%2BTrUbCldy0YaFVtyyG7Hoq2BLVOoQEPbOtwU6IO%2FaJym2mGkx64F7hsuY6smJSnNhQQPFdxXnEqzxBMKjzs70GOqUBPQvctimA5G7nV41aQjRgwVi75LvaOZBkvQ1Pgej%2B%2Fqna3YnY8sgSqc9e4ojX6b%2FDhsbBEJ3aDydtQKHyc5%2Fm7HAne%2FKfYn5segyrS6AKFKhVEiEiKWv9H2eOlPKBeLMkkS2kzJBLQID0nOnF7mpFYB2JvkE0373uqjZHyHzzOklFrcVyKCkUlhLPMt9DekIPncGMDrSZq%2FRN2ZmM3xEyvOGEs6L%2B&X-Amz-Signature=62127e6baca76c0505cd89c2e893a7907c61da3474ba849f99c32dd3fe57586b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXBQ7ZFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqWrDyi3ZGYNfmTzPiC4m2G6gcibkdsLCWBSizikCuiwIhAMBsxcpUFqKFLemeXUHnJCcKqYKWkh7SkFTliAa1X6GDKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJ49%2BGDjGZh1RqY8q3ANAzYvlDTSMy17fNBvO6f3NoByooRGSgZxuFvQMc1hV%2BUhon11frqAFFWFFYBj0OBp0UxGsIMiHsZIlpUdyPQoKELpqY8KmCggIqTP12xf%2Bmf8nJKJs%2Ff0eNTQSFBBFY3uWCuZMfdhzVzrSjVf%2BnXVuqBdcccjGbZNt4GaWaaXbVlunRWy0W%2FRZH3orxFDcE0QRnRQeGR8UhrYUphBWfXpCd4rsi8j0I7qqR24NCkbtoKJb9ID3tcCnGcBtR5OcTfrc9tlqpMia%2B3onX%2F%2B3CRJ5Dyjtwend59wdWDfKdx80f3C1UsgCQXVi5u5UwMgeHz7rfzjdrn4mlQqByHWqK%2B8%2FKfPZAuXPNsXFbaASYunuqWDfzZNDLqslJQFjdDNYSbN029%2BCVlsrA9bpnmpEX5S7u7oO4UaQoJaePK%2FMSqZcRfz9axOBjqBrWMplQ9qlP1r%2BuCxS1ZAehrV%2F4wA%2BcQe3fn9u9hsHWgYYPAQDPkpDDc2vWLQWl8seRr3VE8fjH%2BGLT%2BkycUVgn4Hkh4pdLD%2BEwgYY5mS3yCm0ZW3O1izKnsoWCSj0XRHYdxaSL3vH0jH9EVK0SMO7RvuAdzaeV%2ByvQHXZRJ731uqjWTIp1fJMXhl2wxVg16p2ZYwFRjDb87O9BjqkAWtjV%2ByG3oqWbnMyI162Nzz40i95ENtWfdZfGjnHCYDjfOzwTbn6qbbovF5z9f86b7ML80LibkRLahjTv7APTvOYhl4zgn5hu%2BCmtE1IuNKEfpYyJLz4I0huSAsbpDMY2EVxRYE8PchuKhXD8MJF2%2Bic5nyhxnZr13HFbwBE0V2sJmgsBKkTqdbDhNx3ta%2BH6v3QI2M%2FaGZQY0FKoBIiaqMBaOXW&X-Amz-Signature=b8d77559fe0473bf1fe7470cd0801c02f382f2ffd96f6fb682af47c5b55532ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3D532DQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGilIxdBFh7PEGmBHNXKnexK%2FimY%2F%2BZ3DCSXsPiBeMRwAiAjoHHL3pTMsqTTfzidwUjtX0EgV%2BKorSdZ9ucihBUg%2ByqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbsBoWGErd%2BS%2BXxOZKtwDKY%2B2GkZYsHjrZtOnOnQg3f%2BY1dqTbeQokdtnJ66q9HNf2O0dxwW14gr7f66WN3r4nZd%2F63PlVwok7dnM7lWT%2FA%2BoahPgRYFHgehpdL9X9dt0piph4vYx1ZkfijeJIQOap%2Fw280xDkX0feOa9bs8bmrNqeAyvCl%2BfeUL%2FHZqLlD9CY6nXGuNpY7xqK%2FoThVycyuIKieHg1hqNTAvroOXmlIPPc2Nv26x51%2Bv%2BTLVVbEHA4AJXtlE4KKPDoPjfh8hCFwqtEB2a9f8gW8ehpXnv%2BOdq%2FYip08%2BtjSMInxr5v49IG%2FHBre1MTGquG3SGm5TcyzVc2VixTKOuCzSinFVHKJqi7HAzwYNgEvOK%2F6KIx5ctcfor6fX3zIlXk%2BNdaaHF%2FJ%2FgGMusUE76qa4HysjdLi3B3l4rJYJgNc6%2BHLkBnjI6NV92gDNWDC7Vy6rN7m5b02R2NHAG78gQIKISlGbE7DFG9j11g8x7OFmArTlY0f%2Fp1BO9BRfcqULdxGhfil%2BG7VrHzr87fRBhk0iDENzMszrQ2zMgg7dTbnxW9lfx5YrfTXDcYr721KkU8FbtKd0BeKl62Vs90I8BllYz1DRXWVk3lgeRvb3Rdko%2FniczHlPgbWw4dNn0YKc00AcwkvOzvQY6pgGdB4TnQdcfU6saYdI05xRzbsAlPKvXim4t9FmCwp%2F3Ug%2FGPriGG8pOh1i2b0l0tVPLpAk%2Bqs1kFVYkaRZtPIZ%2Fc0dUxfnDdQGn%2Fk4F%2FYGfBpsGyL7fuN6XDoiHltRKm1NGPaie9s0lDgP4xpK%2BTqsCTjvb3NPqkXgVIaVqBClrCwiPW8%2FGy%2FxCr898hvHiFEaivJKAkjRhgUt7wAhi%2B9bmOL36IWzH&X-Amz-Signature=45ac082d5bbe20b2d29f3068439106ae700a1e0234b34d8dacc7862fc6446776&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4ZKTLO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7abz1ng6YxLw02grIPKUYGxRsCqOzMa%2BcCTtzGNTpkAiEA831VaP%2FrPntFVHfl4L%2FiBX10nMopAs6s0IQ1SGu8ISsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuaMcACI2jiRMTPOCrcA2NIELzgEzcMhxO6kKAWhGze%2F4OwgHTjyXsoZxrGfuqEn017C%2FR9qPiwzuf2kuiUYdNEEE%2Bgh1JnqIMUz78wb1bhT2ymzdzJEGzr%2BitHROaW6T4YgDH%2BOxIf8EJqgJpxtCLCWhrbyH61UWtKvEm%2FMhDi%2FsBbUWqO2XCcm5JKPysIddP5D1FNg6vj5JRJJIsvJZn%2Fajf1kxPiBn2tCvixpfm8u70eeW%2BVxSaeLR5cpAsSw9debIm70VNg1TAIlEVcpEm%2Fr1OcSo6wnbnluZBtDo%2BLvk1e4dgeLlAg0cU5yx5cY1phcm5bAecV0lynaCsqczEvuSCrUhTDr6GGSRctcIuVdLQtvPnDiDPG4Z2duqIplG4IxWS9Zzuzkb0%2FlVPr%2F7gAWdkxAvexYCu%2Bzkkg2OOb02D%2BgdWvhqKKujaYJFGxFGUNt1Ike91jv3tOndoGDxV5hH7%2FAM5XO%2FHN%2FTr%2B7IVhI8LyiJv%2B4tnEGSiyMELpxj4IAVsbjqbOtLvScyPjVljY0wEgMnGLH9OTcQ1CbBX8Nr0szZB5xp0QaaLvDhFM3z%2BTrUbCldy0YaFVtyyG7Hoq2BLVOoQEPbOtwU6IO%2FaJym2mGkx64F7hsuY6smJSnNhQQPFdxXnEqzxBMKjzs70GOqUBPQvctimA5G7nV41aQjRgwVi75LvaOZBkvQ1Pgej%2B%2Fqna3YnY8sgSqc9e4ojX6b%2FDhsbBEJ3aDydtQKHyc5%2Fm7HAne%2FKfYn5segyrS6AKFKhVEiEiKWv9H2eOlPKBeLMkkS2kzJBLQID0nOnF7mpFYB2JvkE0373uqjZHyHzzOklFrcVyKCkUlhLPMt9DekIPncGMDrSZq%2FRN2ZmM3xEyvOGEs6L%2B&X-Amz-Signature=223d3d6b93680ef39c48d444511dd7dd455ee3f2ee5f775b8acaaaca9e6ba815&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
