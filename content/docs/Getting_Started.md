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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHPPCUM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRRN0Qm%2BRkrs4HHrs9MztG%2BQI0JDaI%2F%2BqydY7jwbASgIhANUlYRWmelhCbW7E7BJ%2Bl%2FPxDqVFbFTCgkymBlZCGwxMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZJj%2FxDuUiojyiCb0q3AMFTqGx5kKVzD1N2IYu7Y1Iuk97peKLUnIp6BYU%2BvfDtu8zf3oGfiIQAze9OD0o3o6t9%2BkOmskB3NQIxAfBBcKYwHIoEFWkbzluE3rdCbJ6pbsFOGyLmq3SL8f0mLbAjGQkBjSaEmdX8TifqhCIgV08rYTsZA%2FGswN0D%2Fz5oBFHdox7dYocTOksFaTWQsdRERnuXoCr5UEXylqVp5pIlvZ7yUUfTPnYgl4gUXcwOZQO6%2BOLJlZV8NqZmSJJboSBDR89zMKvIG27Um5txm7MVLKLGBGITBwQGcuvj72xO6f7GoE6DM8FIzph8cXKYFH%2BTUYz5Z1dsa5P%2FpoSsNgSJOMAYXd5RfYLeWVDwU8xbEMIqA6Jshf17x9d5%2BkrKR4I4DOjKliEo2ijrGu3VSHcghhvhTEMIwmV5JRqHHeTgQF%2FMZJgXMTVOuUVaZ4r0PErb%2FXDuH4tx%2FHNrTFruVFiXMc9P3D%2FWO0RcaQa856VUIx4N54rmGCUIQOdzXIs%2FwgHSKgbsq5FdfW60m6fZtxh%2FDWWknxqg7tf0ATIHIIN%2FErkQ%2BUCq2%2BrRVlDC9qfHrdASTIX43%2FPbU2Hgvfc99FhcnoaIXZawoF6H5Crpg2yM%2Bu0NBemFlEV2KwgG0NLlDCsopjCBjqkARI8SdBBWglibwDz%2FvEwMA%2FbqBpVv09fTls56TnPL16IDxTAXNIaSYG042PZUAAya3kTzCmfb7oockixIVDhc9ylSalWkmmpy2hCxZmwEZqPPLI9lUulAgtbIBc30CYev%2FHgI9j3qPsEogaT1ZYBREuw5D%2FvuNGRpknBZLYB%2F%2BU25sCHjnFPW1FFDrgBODr5ePZq4aMWajwkUbW4RLDh5rVM5Uum&X-Amz-Signature=915ca4ef22e529d5040d79f2f01b850f82bd7f6be85515eb41b0752edeff340b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHPPCUM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRRN0Qm%2BRkrs4HHrs9MztG%2BQI0JDaI%2F%2BqydY7jwbASgIhANUlYRWmelhCbW7E7BJ%2Bl%2FPxDqVFbFTCgkymBlZCGwxMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZJj%2FxDuUiojyiCb0q3AMFTqGx5kKVzD1N2IYu7Y1Iuk97peKLUnIp6BYU%2BvfDtu8zf3oGfiIQAze9OD0o3o6t9%2BkOmskB3NQIxAfBBcKYwHIoEFWkbzluE3rdCbJ6pbsFOGyLmq3SL8f0mLbAjGQkBjSaEmdX8TifqhCIgV08rYTsZA%2FGswN0D%2Fz5oBFHdox7dYocTOksFaTWQsdRERnuXoCr5UEXylqVp5pIlvZ7yUUfTPnYgl4gUXcwOZQO6%2BOLJlZV8NqZmSJJboSBDR89zMKvIG27Um5txm7MVLKLGBGITBwQGcuvj72xO6f7GoE6DM8FIzph8cXKYFH%2BTUYz5Z1dsa5P%2FpoSsNgSJOMAYXd5RfYLeWVDwU8xbEMIqA6Jshf17x9d5%2BkrKR4I4DOjKliEo2ijrGu3VSHcghhvhTEMIwmV5JRqHHeTgQF%2FMZJgXMTVOuUVaZ4r0PErb%2FXDuH4tx%2FHNrTFruVFiXMc9P3D%2FWO0RcaQa856VUIx4N54rmGCUIQOdzXIs%2FwgHSKgbsq5FdfW60m6fZtxh%2FDWWknxqg7tf0ATIHIIN%2FErkQ%2BUCq2%2BrRVlDC9qfHrdASTIX43%2FPbU2Hgvfc99FhcnoaIXZawoF6H5Crpg2yM%2Bu0NBemFlEV2KwgG0NLlDCsopjCBjqkARI8SdBBWglibwDz%2FvEwMA%2FbqBpVv09fTls56TnPL16IDxTAXNIaSYG042PZUAAya3kTzCmfb7oockixIVDhc9ylSalWkmmpy2hCxZmwEZqPPLI9lUulAgtbIBc30CYev%2FHgI9j3qPsEogaT1ZYBREuw5D%2FvuNGRpknBZLYB%2F%2BU25sCHjnFPW1FFDrgBODr5ePZq4aMWajwkUbW4RLDh5rVM5Uum&X-Amz-Signature=d8a5fd78c51faa02021ab92a9ecd619a66bf15fc4a5917784b4309ec96712348&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHPPCUM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRRN0Qm%2BRkrs4HHrs9MztG%2BQI0JDaI%2F%2BqydY7jwbASgIhANUlYRWmelhCbW7E7BJ%2Bl%2FPxDqVFbFTCgkymBlZCGwxMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZJj%2FxDuUiojyiCb0q3AMFTqGx5kKVzD1N2IYu7Y1Iuk97peKLUnIp6BYU%2BvfDtu8zf3oGfiIQAze9OD0o3o6t9%2BkOmskB3NQIxAfBBcKYwHIoEFWkbzluE3rdCbJ6pbsFOGyLmq3SL8f0mLbAjGQkBjSaEmdX8TifqhCIgV08rYTsZA%2FGswN0D%2Fz5oBFHdox7dYocTOksFaTWQsdRERnuXoCr5UEXylqVp5pIlvZ7yUUfTPnYgl4gUXcwOZQO6%2BOLJlZV8NqZmSJJboSBDR89zMKvIG27Um5txm7MVLKLGBGITBwQGcuvj72xO6f7GoE6DM8FIzph8cXKYFH%2BTUYz5Z1dsa5P%2FpoSsNgSJOMAYXd5RfYLeWVDwU8xbEMIqA6Jshf17x9d5%2BkrKR4I4DOjKliEo2ijrGu3VSHcghhvhTEMIwmV5JRqHHeTgQF%2FMZJgXMTVOuUVaZ4r0PErb%2FXDuH4tx%2FHNrTFruVFiXMc9P3D%2FWO0RcaQa856VUIx4N54rmGCUIQOdzXIs%2FwgHSKgbsq5FdfW60m6fZtxh%2FDWWknxqg7tf0ATIHIIN%2FErkQ%2BUCq2%2BrRVlDC9qfHrdASTIX43%2FPbU2Hgvfc99FhcnoaIXZawoF6H5Crpg2yM%2Bu0NBemFlEV2KwgG0NLlDCsopjCBjqkARI8SdBBWglibwDz%2FvEwMA%2FbqBpVv09fTls56TnPL16IDxTAXNIaSYG042PZUAAya3kTzCmfb7oockixIVDhc9ylSalWkmmpy2hCxZmwEZqPPLI9lUulAgtbIBc30CYev%2FHgI9j3qPsEogaT1ZYBREuw5D%2FvuNGRpknBZLYB%2F%2BU25sCHjnFPW1FFDrgBODr5ePZq4aMWajwkUbW4RLDh5rVM5Uum&X-Amz-Signature=97ae8bf93d9eb22fd1f633a094565d4025b4941069656e3fa3784baa0044a831&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23677IU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdOiRLNF0siFEEJEV7Zk57dz%2B9o8rUBDR%2FMc98f6e%2B%2FAiA86JSDARoOG0jivXApr5diEuEFPJEaRG%2F96KRvb%2B4mJyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0SlxpDlaKTxwTJaKtwDJCY5EZNZF4%2F%2Bn8c%2BsZjuubfH1UGaPZX0nljS8CrEzgLGFYUfQXhqVUlMPrUUMcS9q7zDV8JKZg1AbQM4kRVBVJRrIq%2Bk1hAxp47rdVRhjvkMbLDTFS80E2vhzOJfwOezMmud5TZfnf4EvM691v53Zr31nQkKf0zUSUHqprK5vlBpci47dv5jG7ZI8vGkibuEKz%2FjsQOchXLri%2Fs4G5t3E1A%2Bikmr08HfaOGdho5lIyztCJpfkIan93u6BTxBsZ2uIZva6zJfajONIYFJNjE8ZoOWmS4OvVE5MgMm3uXGnXyNIgW7JFxS2%2BtTLgieWOt9K5bE4DI1CKRhN%2FxxcVNpQypP2Q3%2F%2Fj0zvXgX%2FRumwkxYpqx%2FVOooTqIDahIyJA8Vu763q%2Fzp1EZczJcLBAbN3KI7ssXRGTRSOFrmZdH%2FS6oB%2Br0wdprjITOsdRRIGucEknmdsQBujRszxF0UqI52df2zVnXF8BXtFtP3MSOpD79uEsr2nvdSpsFkSzGSz2nIBgdU065CbrBFeneTYitzgONbfFLP4cnSs%2BBqHyBn8eDJlyuTN9fgEUDSlc2gyWTyxXAED3v65bVqYpy6G9AgvmN8QFB6sWB2o7D01RLyy401Oro9xON9%2F506rEYw5qKYwgY6pgHfVTuKLbX3WPvGOnpcz81hEEaSZ%2BguS%2B4EZfsvIPxBDNum9U%2B%2BOexMSf%2FdZR2c%2Ba0kv%2FxeL4hfeYthOmbwzboqhcG1pQ9l3YEuosUwmqWEqwGnw4VxDrjIUtYvMIQw2BYs9%2FKrAKQuNL0Lz0ywkU%2BL5VDGNVC3ryvadtjgtWh4y%2FJMw8kZVgcFI%2BDS1%2FTWam%2BN4u7NSyOV6hXNKZNGKxmTn0JphS7U&X-Amz-Signature=409a9d0df9e10d00f0117b079ee8b61459f91fb66a6b61209875915dbb03013c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2GNXME%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiJUOspzWnTaWNtehDts8UCw8o%2Bcz05SKL3xP9sCgcXAIgBpm%2FYU3xflIeNv%2BGSpKqGbDPSFmlVu%2BILlz1YLm3TP8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuN%2F1%2BaX7gZ63xHfSrcA7ceMQTeRe2GWz9fE9tmkvf%2FWd7fnSIPoig6NAz9S8kZIBpxAG2wh8mePwbbu2Gm5dXuRKZfzbsUAfnjf%2FVgUdNWIjcQqOyaNxLOwzb1n%2BtTU6YHPVCnAK3UBcgvm9mk%2BN3%2FHXwoZO2CuvLw9%2FOBMcFUfgyBHLFQ22bzp4rnSW%2BX98cfJfcrhIM8hdRdT2POn9%2BZ9hS1969sCgbbB2FkQEXoDvXAnVYbAczEgmoCIrOyXdzzl8y9oQIeByG1IyrEzs3%2FnZiNKpBRp2nSzuEkbAp9dwJzJDAS7k6%2B4Q5lbTyiY5mSidnzdZzaX0a8X6k98v6%2BSdzLod9wO3kevD75kJ3olMdfMJOEyBhWKea4CiTVU4YZxfdJS0QsBuFwB%2B3dGM8%2FUxFwnbgiyFeLcPjW1L0FkgpKms20Q1AghUfTliKqEIyesS899JsGjuRB9nXTjEcFzxxvXEozxWC%2BQbDCVYzLqMdAH9v1Q9wfnoy6jcbgVsZZAOARHgW21XnUY9YJg02%2Bj9czH22mpyzW00R0atq0UjA%2FR8TwzLAKtQu8qTRIeE%2BxyUYEbaEummlW0Kl%2FOoV3TmNJJ%2BG8jLTCy1YK7uAwnIZdel3xlwa54qViqQSSgsig%2B6X9PZuFMVaBMIeimMIGOqUBgGLhG%2F3HqnMc3Iwd7bR0aOA6uG7YISnmnrASUFRwgkeQeiDxsuvgQLhi1NLzgLx4NRkRFfP5BTL8WYbXwowvvD%2BuAbfCMKVwTqkIfgW4Ss7%2Bgghh6AGC2Ep7gD%2FZ%2BwEUlmz%2BCfIIYTuwaEK5zz%2FJZRe%2BuxXx2u8EGD34HkRKA16k2Hbl3XNyrfePlaK%2FGRbaJvzE8ny%2Ba0I7vT%2Bs91Gf2tV0XRFf&X-Amz-Signature=c193c01acff95401c277ce617c68eb2179057af26a9a2e60bc59fe9da2be0be2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHPPCUM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRRN0Qm%2BRkrs4HHrs9MztG%2BQI0JDaI%2F%2BqydY7jwbASgIhANUlYRWmelhCbW7E7BJ%2Bl%2FPxDqVFbFTCgkymBlZCGwxMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZJj%2FxDuUiojyiCb0q3AMFTqGx5kKVzD1N2IYu7Y1Iuk97peKLUnIp6BYU%2BvfDtu8zf3oGfiIQAze9OD0o3o6t9%2BkOmskB3NQIxAfBBcKYwHIoEFWkbzluE3rdCbJ6pbsFOGyLmq3SL8f0mLbAjGQkBjSaEmdX8TifqhCIgV08rYTsZA%2FGswN0D%2Fz5oBFHdox7dYocTOksFaTWQsdRERnuXoCr5UEXylqVp5pIlvZ7yUUfTPnYgl4gUXcwOZQO6%2BOLJlZV8NqZmSJJboSBDR89zMKvIG27Um5txm7MVLKLGBGITBwQGcuvj72xO6f7GoE6DM8FIzph8cXKYFH%2BTUYz5Z1dsa5P%2FpoSsNgSJOMAYXd5RfYLeWVDwU8xbEMIqA6Jshf17x9d5%2BkrKR4I4DOjKliEo2ijrGu3VSHcghhvhTEMIwmV5JRqHHeTgQF%2FMZJgXMTVOuUVaZ4r0PErb%2FXDuH4tx%2FHNrTFruVFiXMc9P3D%2FWO0RcaQa856VUIx4N54rmGCUIQOdzXIs%2FwgHSKgbsq5FdfW60m6fZtxh%2FDWWknxqg7tf0ATIHIIN%2FErkQ%2BUCq2%2BrRVlDC9qfHrdASTIX43%2FPbU2Hgvfc99FhcnoaIXZawoF6H5Crpg2yM%2Bu0NBemFlEV2KwgG0NLlDCsopjCBjqkARI8SdBBWglibwDz%2FvEwMA%2FbqBpVv09fTls56TnPL16IDxTAXNIaSYG042PZUAAya3kTzCmfb7oockixIVDhc9ylSalWkmmpy2hCxZmwEZqPPLI9lUulAgtbIBc30CYev%2FHgI9j3qPsEogaT1ZYBREuw5D%2FvuNGRpknBZLYB%2F%2BU25sCHjnFPW1FFDrgBODr5ePZq4aMWajwkUbW4RLDh5rVM5Uum&X-Amz-Signature=05387b945e94af3b23c6b3b751d67b7042f97f63a05d0fb119f5df38d17b08d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
