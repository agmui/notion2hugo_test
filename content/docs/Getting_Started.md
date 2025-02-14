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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ4I2V2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsJ7wi%2BSalPWFr8rvw8qz%2FeQ9me2yB3z1%2FpY5TixSE5AiBWN3yaqnxY%2BiBQIjarKa14uteqIPMVgdDkKWw9qekrYir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMTrEh4fazy8nxEXuyKtwD2G64QO%2BxbUuBCCKZkoAds%2BwLiHx3JS2HD8lDceV2tG58uSt2pS061SHezoc1yC8%2FionrYN9mQxgVxfSzxBgl8e4lTha%2BrhfrPA%2By4FhbbQpIIf86Vy%2FrYFI5ZS4aN2hJTLJYkpq4ReKn1ZW1enveX1WeQbmQX97xLdS4XHH4WIqcFSPCA%2ByHs%2FNrPix%2BiVlCh1V0eAfq%2BhIudgC69RTlVa8CakXm%2Bdx%2B1eizruVkaDEwhxl7E%2BT%2FmOnsmxwiGHepqcF57g01dkhUw5sGvHrr8ON1Z2vkPeoUBIRRsxHn%2F064GLonjH6zloj2dPlBA7JTJYdkaA3PL0LfA8fMYqLXorvNTlJASh2KdQt9Sf33%2B11%2FT4xutM584b49OYeU8LOTJcFNyuIVXx%2Bg5aPZAUK0svfq7adIEG2gLmgNXxkuPNw2kNdL0dZIWm6SUDP5%2Fx%2B23iJZ4jnFFcAup9fYM%2BiVkfGGh1PgvxD17Cma3FkSPOL31dI5hv0Tc4MlBgY%2Bvsps0%2BJxsQl8cmhU%2FqDzkkiryj7dkqYOBQ5jkVsFM7ySlNCbQanYEWqYuAEcNGkZoKSO2%2Fv4YYuZNzch9DZpw4iBtK97Y2M9GQYLUZEFmJJF1Lsplmbj5uJGU56gcpAw%2F9G6vQY6pgESLiUl7nWKUaHgo%2FeG8R3NbK7OApoxLQSawBgBb1jUmmUu1%2BOj615yFbYvXxQgLA%2FKHpOW%2BlVN0nQpuGXYpxjVej8WgFqe5cnfJIReFMeG53Ive6W%2BN6Kc0BWn8brhT3Buwty0hSrHC%2BFxZwRic31ga5poEl8rNf1VGZxOjmWtLh8waeVBHARovrLLD%2F0ngDBAgDR0G9UyEd8MpxmZGKU6N1oYTDcc&X-Amz-Signature=b436c703c790e21038a7f0908af10834bb3a04274f6b8f2980d5a89dad5f4e06&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ4I2V2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsJ7wi%2BSalPWFr8rvw8qz%2FeQ9me2yB3z1%2FpY5TixSE5AiBWN3yaqnxY%2BiBQIjarKa14uteqIPMVgdDkKWw9qekrYir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMTrEh4fazy8nxEXuyKtwD2G64QO%2BxbUuBCCKZkoAds%2BwLiHx3JS2HD8lDceV2tG58uSt2pS061SHezoc1yC8%2FionrYN9mQxgVxfSzxBgl8e4lTha%2BrhfrPA%2By4FhbbQpIIf86Vy%2FrYFI5ZS4aN2hJTLJYkpq4ReKn1ZW1enveX1WeQbmQX97xLdS4XHH4WIqcFSPCA%2ByHs%2FNrPix%2BiVlCh1V0eAfq%2BhIudgC69RTlVa8CakXm%2Bdx%2B1eizruVkaDEwhxl7E%2BT%2FmOnsmxwiGHepqcF57g01dkhUw5sGvHrr8ON1Z2vkPeoUBIRRsxHn%2F064GLonjH6zloj2dPlBA7JTJYdkaA3PL0LfA8fMYqLXorvNTlJASh2KdQt9Sf33%2B11%2FT4xutM584b49OYeU8LOTJcFNyuIVXx%2Bg5aPZAUK0svfq7adIEG2gLmgNXxkuPNw2kNdL0dZIWm6SUDP5%2Fx%2B23iJZ4jnFFcAup9fYM%2BiVkfGGh1PgvxD17Cma3FkSPOL31dI5hv0Tc4MlBgY%2Bvsps0%2BJxsQl8cmhU%2FqDzkkiryj7dkqYOBQ5jkVsFM7ySlNCbQanYEWqYuAEcNGkZoKSO2%2Fv4YYuZNzch9DZpw4iBtK97Y2M9GQYLUZEFmJJF1Lsplmbj5uJGU56gcpAw%2F9G6vQY6pgESLiUl7nWKUaHgo%2FeG8R3NbK7OApoxLQSawBgBb1jUmmUu1%2BOj615yFbYvXxQgLA%2FKHpOW%2BlVN0nQpuGXYpxjVej8WgFqe5cnfJIReFMeG53Ive6W%2BN6Kc0BWn8brhT3Buwty0hSrHC%2BFxZwRic31ga5poEl8rNf1VGZxOjmWtLh8waeVBHARovrLLD%2F0ngDBAgDR0G9UyEd8MpxmZGKU6N1oYTDcc&X-Amz-Signature=a37eca7b32059f563cb2a33e8ad4a677a31a4af92e786d094d27b3d8bd369d15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMOQ5NSR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx95fuyDGCMFPzx%2BNBsGuAuZU5Cn%2BseOLtZZiNM0cJ7wIgJ6k3PL3pbQSpAYGGa3UqgQjet6Buk4fGrv5BA8ON6hIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL%2F0GTjan1m1Y8ULXircA6UNNPEGKdFq2kpMVxk21eny9SRibLbTkkoZBZW9CGee3XV%2BtLmNnjMeEnlAbGBo5id63agc%2B9VTZDmedhpJ8b8JP4KOERVMtZ7Yjpor7oYoQXzMx9bUA7TpFN5JVYWXUlIuyOFS6B5dto50%2B%2FumGgm%2BAQFbZNsB1NS9W%2BsPyEDlsf1TmlgHiTNObFSCBQnl3O9sM142quPWt9gzQG4mQ6dOu%2BzljnR0JvbFg5H7pd2YK0YnK0qb54m1ncTpZ73fxF7sa4q5z730%2F4tNchImtogTxQWUZZgKdDnGt1C8rMKFJ9%2F%2BLEuQjyxoVw2m%2BmMIifXyQw0HYs4TiP%2BezWugob1sZk3lDX998hnFYxF%2BP%2BM8%2F4znHKLuHvl6XmCrOGZnjz8B%2FwhxZ7DbfZhJbYOMxSWaTgjxOGFTx8eetvz6rqfp%2Bf7UPtRrsx7SvPfAfp1Sfp5Vuv2ZVuUF6DhwaNBqmVzyqt%2FIIzybrzcYDl4gQ2T47PzzsrKHx3dPUhFOQVmEZgEzXertobv5zKo01Vnptp8MU8g%2B84gNIw4NFYncC0skohjJGBWZBBO8njJbbiwKYwmpjDOr4RJ0%2BCjKW7ZSf2zBK%2BlFld2gqm6OQubnVoJA%2F7BIDfwjL9wl1TaoMIXRur0GOqUBiAoxkiYU428m0%2FqAK5CbJIXksq4iH%2FDNwVzxbZSiJ8oAtJVJlt%2BT0GCO8lgwf5bhcEyM2YXkMuRKuEYA3upM6CdXVSmAjtLD08w1fxxjEgXmcO%2BGos1V8rdZVLLX7DMcSVkqn0emN9ilktvYQMiUZIXxozkhb7BU0XVC0lhyncFSsRmXyK58u5%2Fg8jkSHvmohQ0H%2FPrIhX%2FC9ZnAdqTLXDzYcPNb&X-Amz-Signature=796dadd8c5dc970eca2b0771c1395e851ae418f24da0e7a6ed839e3806cc1c14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNB3Y5M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiUWlpAK%2Bnd4BoomVu61JWB%2FHqu6bQP7Xz3gtOrBcziAiAnflamBezFNwwzIkGOe8KA8k2RNWSDXwXmdx94UaUYOir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJgTO1t2Dkel5ICepKtwDjKAp7gSeIQdgr8bIzSENXuArOwh8skYqq0LnPxpjhZsf19rulHM1gZIMuCCG53zLiZfanr6IxGv4UgivEYP7t4qXskY0jjdl0zuOV6n80YjgP7HVOrJ3Y9jS5kPpKKcTSjATlp4Wnd58dxAS1rT3Bk0RbM1r8%2BzfTZRZoA8Y6SpllupUGeeCFJgeDhEpHEZP2dGbbNeIllG0p%2Fe4zyCFR2NO6FJ8zVlIe3E4lzcRMVxf8faawqkCp0TJ3U6ZQih%2BdBBif%2FCWv5sAWbjF24NTmC86MUj2vYg9nLwSSowghcXWHbS3nA5BsTKkcDL47Hst5mSSQx07Hd0fmjIKr%2BqkHjSvlW3EySizpFFCQJ7lr2aC%2FObRpc2M%2Flv9DHTNQhhJ%2FdKoMoyW72EvHEHsKnP5NcNWGpJWIfcOMIkm%2FhsHFHvD%2BmoLLS0KCfk9kQMzYdq7i4ubI7CLB7oqV11dOPhbKIKzPHmjXLGkZfbEfSPjPbPZySYNgVB78nemf2ecxARwhXk93GCMnV8ZvB60naoG7w78jWv6y%2Bf4NtzybJo0xAQc3ip3BW73ABdqDhbtN7RlC7yzUE3PiLWOHmvSGMNtu0m4b4FNChUeK%2BazagjIgToyHVO6SEgf5%2BGiNhUw%2F9G6vQY6pgHHyl4O8bJUs3MA%2FJfINZdNIEldfzX5V5xMR6iMk1AgTfLIoWX3%2FQnBDltBcfyr0T%2BmEm0K4VOIgoxx5Fou0yMfqeyJ%2Fsk3qOVk5gf9dOGNKPJ5Pu%2FKz5MqhGlxb%2F8p9Khy7I7VHhn1cjrmsftLPzXSPKncEVpMEU9Fqflw58%2F0uDqF%2BwOCoY9raOelHI1Hd%2Fs3IfWwtLkEcs60NTMrIc9HPMwK3eyR&X-Amz-Signature=6b4b10ceda059e9c04375c37f14cd5c59835207e6ab34eb5b935a0a1219d4193&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ4I2V2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsJ7wi%2BSalPWFr8rvw8qz%2FeQ9me2yB3z1%2FpY5TixSE5AiBWN3yaqnxY%2BiBQIjarKa14uteqIPMVgdDkKWw9qekrYir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMTrEh4fazy8nxEXuyKtwD2G64QO%2BxbUuBCCKZkoAds%2BwLiHx3JS2HD8lDceV2tG58uSt2pS061SHezoc1yC8%2FionrYN9mQxgVxfSzxBgl8e4lTha%2BrhfrPA%2By4FhbbQpIIf86Vy%2FrYFI5ZS4aN2hJTLJYkpq4ReKn1ZW1enveX1WeQbmQX97xLdS4XHH4WIqcFSPCA%2ByHs%2FNrPix%2BiVlCh1V0eAfq%2BhIudgC69RTlVa8CakXm%2Bdx%2B1eizruVkaDEwhxl7E%2BT%2FmOnsmxwiGHepqcF57g01dkhUw5sGvHrr8ON1Z2vkPeoUBIRRsxHn%2F064GLonjH6zloj2dPlBA7JTJYdkaA3PL0LfA8fMYqLXorvNTlJASh2KdQt9Sf33%2B11%2FT4xutM584b49OYeU8LOTJcFNyuIVXx%2Bg5aPZAUK0svfq7adIEG2gLmgNXxkuPNw2kNdL0dZIWm6SUDP5%2Fx%2B23iJZ4jnFFcAup9fYM%2BiVkfGGh1PgvxD17Cma3FkSPOL31dI5hv0Tc4MlBgY%2Bvsps0%2BJxsQl8cmhU%2FqDzkkiryj7dkqYOBQ5jkVsFM7ySlNCbQanYEWqYuAEcNGkZoKSO2%2Fv4YYuZNzch9DZpw4iBtK97Y2M9GQYLUZEFmJJF1Lsplmbj5uJGU56gcpAw%2F9G6vQY6pgESLiUl7nWKUaHgo%2FeG8R3NbK7OApoxLQSawBgBb1jUmmUu1%2BOj615yFbYvXxQgLA%2FKHpOW%2BlVN0nQpuGXYpxjVej8WgFqe5cnfJIReFMeG53Ive6W%2BN6Kc0BWn8brhT3Buwty0hSrHC%2BFxZwRic31ga5poEl8rNf1VGZxOjmWtLh8waeVBHARovrLLD%2F0ngDBAgDR0G9UyEd8MpxmZGKU6N1oYTDcc&X-Amz-Signature=fe9dcc56a380eb09164b9a3fe5d6af9a2e09fe2af7484b7a7edceaa8d48d7a74&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
