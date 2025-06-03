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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMJVYJI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD0phshmdo33AfjjvxQnLhdVyvNsVIpjnV2HiCUseL%2FLgIhALxxAzyvbBiKARyR7RoZb1OgYuwyIB5GhAI1S1ZBTPPoKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGVTi1syAalCHbLvsq3AP5OcEDIEm4%2B8HxrdzvRIDbmaUGhpTmQOsIvGSEh417pM3SNMWa9Zc%2Bq%2BW8WPYR9edr9E7Q%2FxDNWyX%2Bv9UtAOdrYhMNYqIIIMcIlLy%2F34llSSVytY3%2FVxp00svA5lHGgD3QPVqiNgea%2BxD60ge1%2FPqL%2BuZVkUB5PolPKZDft63qdj8OEZCcwYzb4%2FwBQYhNxPRYn64K1v%2B3UHWXrJM1ktNfQnxh7H1CVduDPrJa8lig1ynOrCwCERwiuWhajQR9k3lOrzMuQHumvgXicAYZvKuhwhC7adtDzdXYqlAXbXBY1wDzkFC9VQA1wMaR%2Fx2xxUUo0XEzOEPcWcutUv5%2FLBf2ZDZkK6qytB10K%2FTHzyg6vkEFdK11BfOdIDzvx2uSsgwobJOSM%2BY%2BWLs5D%2BsJipoedCAUrLom%2BwLVrF7x3uL%2B0wDSXW1fxcraFyJ44o842Xgsb2I%2Bdei6sbEL8sN6OGj6DGz6CclNRmGgdaGbUmt9EaF62FTO5nuAgo0sKRLeZQhxHwmV476NWh9B9tjrazao%2BDhGD6q3WEnnF9znPSAOwian3stbI1yIxPSKdD7ldLDRYktSzr%2FtcdrvWY7z%2FUtX9zkUHD9Cb1zK1gMoSp16acyLDVELhgm%2BoxNBnzC1gvrBBjqkAbzD9VklkEe%2F8aJezykj7s4f%2FmawBO1JKQiRVq3850fBifCUpVCtCl8tBuBJ20A4XyMknQ8uitrqtFdhbgpsJGEmfh9SsGtK0QIHbufCKRhw%2F009w38z4RaiYBhH3NeRpE%2FX62llny8ooCD8DoTQQtduC3yD9dY97JHsKYDrIggmrmtrxadGOZdr%2B0EDkxKJMlaciwZ8nJq0bLIop04e6Ie6J5Sv&X-Amz-Signature=48cbed905789ed9ed56224c88580a8cdf5abcad43d0e15c6abdc401e0e8851d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMJVYJI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD0phshmdo33AfjjvxQnLhdVyvNsVIpjnV2HiCUseL%2FLgIhALxxAzyvbBiKARyR7RoZb1OgYuwyIB5GhAI1S1ZBTPPoKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGVTi1syAalCHbLvsq3AP5OcEDIEm4%2B8HxrdzvRIDbmaUGhpTmQOsIvGSEh417pM3SNMWa9Zc%2Bq%2BW8WPYR9edr9E7Q%2FxDNWyX%2Bv9UtAOdrYhMNYqIIIMcIlLy%2F34llSSVytY3%2FVxp00svA5lHGgD3QPVqiNgea%2BxD60ge1%2FPqL%2BuZVkUB5PolPKZDft63qdj8OEZCcwYzb4%2FwBQYhNxPRYn64K1v%2B3UHWXrJM1ktNfQnxh7H1CVduDPrJa8lig1ynOrCwCERwiuWhajQR9k3lOrzMuQHumvgXicAYZvKuhwhC7adtDzdXYqlAXbXBY1wDzkFC9VQA1wMaR%2Fx2xxUUo0XEzOEPcWcutUv5%2FLBf2ZDZkK6qytB10K%2FTHzyg6vkEFdK11BfOdIDzvx2uSsgwobJOSM%2BY%2BWLs5D%2BsJipoedCAUrLom%2BwLVrF7x3uL%2B0wDSXW1fxcraFyJ44o842Xgsb2I%2Bdei6sbEL8sN6OGj6DGz6CclNRmGgdaGbUmt9EaF62FTO5nuAgo0sKRLeZQhxHwmV476NWh9B9tjrazao%2BDhGD6q3WEnnF9znPSAOwian3stbI1yIxPSKdD7ldLDRYktSzr%2FtcdrvWY7z%2FUtX9zkUHD9Cb1zK1gMoSp16acyLDVELhgm%2BoxNBnzC1gvrBBjqkAbzD9VklkEe%2F8aJezykj7s4f%2FmawBO1JKQiRVq3850fBifCUpVCtCl8tBuBJ20A4XyMknQ8uitrqtFdhbgpsJGEmfh9SsGtK0QIHbufCKRhw%2F009w38z4RaiYBhH3NeRpE%2FX62llny8ooCD8DoTQQtduC3yD9dY97JHsKYDrIggmrmtrxadGOZdr%2B0EDkxKJMlaciwZ8nJq0bLIop04e6Ie6J5Sv&X-Amz-Signature=d8bd58072c0b3a7d7dfdf20651573f8fda3ae7fd05fb45ef85dea68a22feca29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMJVYJI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD0phshmdo33AfjjvxQnLhdVyvNsVIpjnV2HiCUseL%2FLgIhALxxAzyvbBiKARyR7RoZb1OgYuwyIB5GhAI1S1ZBTPPoKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGVTi1syAalCHbLvsq3AP5OcEDIEm4%2B8HxrdzvRIDbmaUGhpTmQOsIvGSEh417pM3SNMWa9Zc%2Bq%2BW8WPYR9edr9E7Q%2FxDNWyX%2Bv9UtAOdrYhMNYqIIIMcIlLy%2F34llSSVytY3%2FVxp00svA5lHGgD3QPVqiNgea%2BxD60ge1%2FPqL%2BuZVkUB5PolPKZDft63qdj8OEZCcwYzb4%2FwBQYhNxPRYn64K1v%2B3UHWXrJM1ktNfQnxh7H1CVduDPrJa8lig1ynOrCwCERwiuWhajQR9k3lOrzMuQHumvgXicAYZvKuhwhC7adtDzdXYqlAXbXBY1wDzkFC9VQA1wMaR%2Fx2xxUUo0XEzOEPcWcutUv5%2FLBf2ZDZkK6qytB10K%2FTHzyg6vkEFdK11BfOdIDzvx2uSsgwobJOSM%2BY%2BWLs5D%2BsJipoedCAUrLom%2BwLVrF7x3uL%2B0wDSXW1fxcraFyJ44o842Xgsb2I%2Bdei6sbEL8sN6OGj6DGz6CclNRmGgdaGbUmt9EaF62FTO5nuAgo0sKRLeZQhxHwmV476NWh9B9tjrazao%2BDhGD6q3WEnnF9znPSAOwian3stbI1yIxPSKdD7ldLDRYktSzr%2FtcdrvWY7z%2FUtX9zkUHD9Cb1zK1gMoSp16acyLDVELhgm%2BoxNBnzC1gvrBBjqkAbzD9VklkEe%2F8aJezykj7s4f%2FmawBO1JKQiRVq3850fBifCUpVCtCl8tBuBJ20A4XyMknQ8uitrqtFdhbgpsJGEmfh9SsGtK0QIHbufCKRhw%2F009w38z4RaiYBhH3NeRpE%2FX62llny8ooCD8DoTQQtduC3yD9dY97JHsKYDrIggmrmtrxadGOZdr%2B0EDkxKJMlaciwZ8nJq0bLIop04e6Ie6J5Sv&X-Amz-Signature=81ebf64b0aa0ddb914f1a6ac9a88ca3d371528c176d71705df642d4f5d0b6897&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KS3NEA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIC3xyp4x0DaEXOydQiaTMLsTRSSiJPht8%2FaOLBkVD0HOAiAstSgxfj86LFmJKbN6a8uYn9qY8Ly2esb42ig%2Bk8nTaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwPrThU2UuXGvL8wKtwDns12ymHACZHeP%2BuvaELB%2BLtUWbtP12HrywwmUjRGGzgcfcDp4ZPaIOhf7klJ3iCvy8aataRfya5PK9UDnOAE8TUJcFKQx%2FhalhYnYtMlDAzNkyaTmbXWIFL81lrN9XtoUTqngyt45igd2KD0CCwFGwufA%2FgUgniVE21pM145qbZ%2BMOhKO%2BMdeLqd5fxOWVzmBLY7In53BZ35fLaVfMCaFmXV82NI88Vbxzzb33Z67V6mrb22QltfjOAYq7Fu%2BsSSD6V45EtITim%2By%2F7jMMdfiGklGooUL6K3mR%2BRRHJ2nyx1MEVAFNcMCkTnkqq99wi0RGjBt5c%2B9hwaxMAruWXDNy4IBkWBe5C8mkNL0loPfSIoWP9MjrevPU1sHvlCdKS4rbVfjme52mt1dxqeGlgFqraRWnp0GMzt%2Bq5QJWYtapEf6rxKXd72O%2B%2B6brqhwffyCJ51VeWUVno811NbnzVOvrltSX4JOmTJxfKKQk1aIac0koad1HfaqjUVfImr7rwG1se0gIZ4jJ4%2B6%2FQZ6DgkVsXFbBDJsHEr%2BEhhgy%2BBgQQlkwsBYoFpINA4Zh1ch9CWoVqO9%2BBwoDTy0MxGScjlP5YXT2WsaOMLVDm4ZACLxGeppeaTm5D7Vb%2Bnma0wqIL6wQY6pgEMsOi3AGsl4gpEr2ROQ8PO732CpdBUuikELuKwXSaDEPgodnt3RoVJys2xZFXBU0KlH9nRmuTdHcmToX4Ka8ngrKVtzp09p32k%2Br%2Fv8ALebrTjl9pFOg891cVwZfla%2Fn%2BsXsMqq7an0XZVn97kE3wIfkhHs62Hgo%2Bw6snbILc7aGQ1v0NqQYk37lYJ5tCTjgPYOjmjux39kX7nI3eDDytB8a39n8t1&X-Amz-Signature=7504574ba81260a3cb4c63f0285ed2a3eb3231bd19c6fc1cb774c59b631b59f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHQYS66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDnBqom4E2Q%2FAIY40j1mOSR2N7suWbYecq5q92CY4620gIhAO5YntoiX7h42pqgIB4%2BvAfnKqz0ONgzyLDEJTWJANWEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIraoY%2BGXD%2B4CuIZoq3APJgOS1iZypSsh3YxV5SP0R%2BRK97H0kGlrCi%2FPKiXw9yUw9SqXHCrY4rjGRrkyVk5fy6%2Bvc8atBmW%2BJW%2BUILFMS0Gx9eygVn1ul5KNQqBlK5TSS0I9oZ69UqXLmGQN%2F5cQ4dd%2Fjf8%2FPKOmykw8eLMhCkLdOYu4XTwWV5ZlcTwRbaFKnzfPI4CZC8ygrbBLb%2FOEIt3sN17eqZvaC0eCUJQjo%2FUS0n%2FfH78AcHIPO5SIC6VIneQYa1q77DT5ByjM4g6%2FjfIJe52w%2BOKeZE9ecZGMR7BA60UU%2FGf3ANy9rwoMF16lApp0T6m%2BSRzZfvT6bgJbsGbMV9DDkGZw9MfjpjMLpq%2FWKE63McN7C2BdOmEMIRva2pzRA9KB8EhKZcPmoPPuf48YQdI1EzIQkGWdPCJ8ig7eH91Lr9yxE2L6DiH6KSJTLShGaNuVNbrsqmSpZ1GUbyP6%2B4tyC79P79f3%2BQOKnVRkoIgx6%2FZjfU4syGSKMwfHWS%2FxeKdatHj1VOMg9mZ2npLX%2BdXuTvk9itgq26u6jX6gWRrUgmaPSe6da149ADhLdeXn7r9YR6WiV0hiTCs1cv%2B7WPbucbKwPNZKU4XM14BM%2FQHXSE%2FnwNY7YEaW4h%2FmL86YlPcEd10PKuzD%2BgfrBBjqkAbpnOdHpT7Zf3rR6EXp%2FzafduOr4Y5yxGtbIRgZMgu%2FTlYR4mvyY8W84%2Be4f97YFEV7OIRyxNC3N8AFj%2Fkz7WEThPqUn4swJXmc1FC1vfgo2bA0T7Yw6tJALnVP3pYwkUkVVywPjv8ltgKquqEV%2FloP%2FjRNtIYP3fMINtXY7KQGoW3HhZOits8zh%2Fv3Q8dHmxHt%2Foanj%2FT4Y5wgBGeLGnY7ctb%2Br&X-Amz-Signature=cbe2f6bc13d554dab05cfac4b330f2b613548e1058c5b67b5309ace83fc22c68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMJVYJI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD0phshmdo33AfjjvxQnLhdVyvNsVIpjnV2HiCUseL%2FLgIhALxxAzyvbBiKARyR7RoZb1OgYuwyIB5GhAI1S1ZBTPPoKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGVTi1syAalCHbLvsq3AP5OcEDIEm4%2B8HxrdzvRIDbmaUGhpTmQOsIvGSEh417pM3SNMWa9Zc%2Bq%2BW8WPYR9edr9E7Q%2FxDNWyX%2Bv9UtAOdrYhMNYqIIIMcIlLy%2F34llSSVytY3%2FVxp00svA5lHGgD3QPVqiNgea%2BxD60ge1%2FPqL%2BuZVkUB5PolPKZDft63qdj8OEZCcwYzb4%2FwBQYhNxPRYn64K1v%2B3UHWXrJM1ktNfQnxh7H1CVduDPrJa8lig1ynOrCwCERwiuWhajQR9k3lOrzMuQHumvgXicAYZvKuhwhC7adtDzdXYqlAXbXBY1wDzkFC9VQA1wMaR%2Fx2xxUUo0XEzOEPcWcutUv5%2FLBf2ZDZkK6qytB10K%2FTHzyg6vkEFdK11BfOdIDzvx2uSsgwobJOSM%2BY%2BWLs5D%2BsJipoedCAUrLom%2BwLVrF7x3uL%2B0wDSXW1fxcraFyJ44o842Xgsb2I%2Bdei6sbEL8sN6OGj6DGz6CclNRmGgdaGbUmt9EaF62FTO5nuAgo0sKRLeZQhxHwmV476NWh9B9tjrazao%2BDhGD6q3WEnnF9znPSAOwian3stbI1yIxPSKdD7ldLDRYktSzr%2FtcdrvWY7z%2FUtX9zkUHD9Cb1zK1gMoSp16acyLDVELhgm%2BoxNBnzC1gvrBBjqkAbzD9VklkEe%2F8aJezykj7s4f%2FmawBO1JKQiRVq3850fBifCUpVCtCl8tBuBJ20A4XyMknQ8uitrqtFdhbgpsJGEmfh9SsGtK0QIHbufCKRhw%2F009w38z4RaiYBhH3NeRpE%2FX62llny8ooCD8DoTQQtduC3yD9dY97JHsKYDrIggmrmtrxadGOZdr%2B0EDkxKJMlaciwZ8nJq0bLIop04e6Ie6J5Sv&X-Amz-Signature=d5380f1e73091fdb478381b2dd78ab2763d644726e8858bed2a18bca1401ab5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
