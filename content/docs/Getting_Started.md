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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7JTRDQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXsZBPlwAeA0trqhzMkYiHcnjlsGVkiitIgEqPupVYgIgTKsdOPrZ8F0edR4H%2FSxrrNcadqssp6TZtav1ucupX0Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCQVazqfAHg5RAmsqircAzw1mueT2y61g92fLQXkn%2FKXvCtFW8k0nZVJP4EKPl1jZ%2Fa%2FaQM4hOOrQAHd9TbS1JKwK8blLRTvOz7QywGlDEqLWHGFqR%2FTQqUT%2Ff375t31EyAVvvMB9XEciok5VM8IVoSSWg5I0mNYG1BoZKhnIJtjC2%2FgunQ6qBTxvWEBXxAmcyVh3oT5eOdA8arjJnFFKXZ%2FN5XyYMUbMp5v0amIhHD5oE93y6YJKJdhcFQIwd0O%2FmGXYbAttW8XWjT0WHlCb9Dx%2Bbi0CLvfnPN9h1y9JCD4Alp1M%2Fll3cZAD4MIq%2BDK7SpSnia2TvBW%2B5QisoUOE%2Fs3vQiHFPMDTPKsQ9cawzYM%2FRQKkKTXa3kcfTVbpeMQFXTUKyfangqXpbsGdu3ImB7tqpm9NQGNEcykbXhEWH0TIu0X27sH8PFbLE%2FxppgQ1L3v7ADc2rJs5Rj6zzBMHUvLmngWuxx3QncmkmqrNpeQuR9CQEM7u4yo3XXE%2F%2Bjv7sm3oNkKi1AKKwLex87rhK67QvPI1I34boXwFbZapur9hWZxzoLnvfRKFg7hW5vnTM1ve69NMNox%2BgXnhqn%2F9QYMJnPveUa8s%2F2cy%2FiX88ms4LUTiDhgVLyP2nL8WK066%2BNh3JPZR32gH66FMOzh1L4GOqUB6niQ6NIRr%2Fs5tkAwpCsEbtGYOv5cum9bWtp4G3ptEoDEQUJEvcC4xhTygHTuykkUxUEiWv%2FxvY6%2BLFRoVODdK%2B2dma4w9XJOJTRjt5UK%2B8U5ss03R8UsHarI9B8gnPMAE1bjQQKGMmIV%2BZVJxF71PlQ4k4T1MBx%2Fni3o2WOa9ku%2BxU8Xr2Pvv2LZ827oiY1v3FymGspj4q2bm7RVp4PsQaEjRcbK&X-Amz-Signature=b2ff1d24c36014b5de3cee173e63d854e1f3e0e1de4543de39fbd8255cbc3df8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7JTRDQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXsZBPlwAeA0trqhzMkYiHcnjlsGVkiitIgEqPupVYgIgTKsdOPrZ8F0edR4H%2FSxrrNcadqssp6TZtav1ucupX0Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCQVazqfAHg5RAmsqircAzw1mueT2y61g92fLQXkn%2FKXvCtFW8k0nZVJP4EKPl1jZ%2Fa%2FaQM4hOOrQAHd9TbS1JKwK8blLRTvOz7QywGlDEqLWHGFqR%2FTQqUT%2Ff375t31EyAVvvMB9XEciok5VM8IVoSSWg5I0mNYG1BoZKhnIJtjC2%2FgunQ6qBTxvWEBXxAmcyVh3oT5eOdA8arjJnFFKXZ%2FN5XyYMUbMp5v0amIhHD5oE93y6YJKJdhcFQIwd0O%2FmGXYbAttW8XWjT0WHlCb9Dx%2Bbi0CLvfnPN9h1y9JCD4Alp1M%2Fll3cZAD4MIq%2BDK7SpSnia2TvBW%2B5QisoUOE%2Fs3vQiHFPMDTPKsQ9cawzYM%2FRQKkKTXa3kcfTVbpeMQFXTUKyfangqXpbsGdu3ImB7tqpm9NQGNEcykbXhEWH0TIu0X27sH8PFbLE%2FxppgQ1L3v7ADc2rJs5Rj6zzBMHUvLmngWuxx3QncmkmqrNpeQuR9CQEM7u4yo3XXE%2F%2Bjv7sm3oNkKi1AKKwLex87rhK67QvPI1I34boXwFbZapur9hWZxzoLnvfRKFg7hW5vnTM1ve69NMNox%2BgXnhqn%2F9QYMJnPveUa8s%2F2cy%2FiX88ms4LUTiDhgVLyP2nL8WK066%2BNh3JPZR32gH66FMOzh1L4GOqUB6niQ6NIRr%2Fs5tkAwpCsEbtGYOv5cum9bWtp4G3ptEoDEQUJEvcC4xhTygHTuykkUxUEiWv%2FxvY6%2BLFRoVODdK%2B2dma4w9XJOJTRjt5UK%2B8U5ss03R8UsHarI9B8gnPMAE1bjQQKGMmIV%2BZVJxF71PlQ4k4T1MBx%2Fni3o2WOa9ku%2BxU8Xr2Pvv2LZ827oiY1v3FymGspj4q2bm7RVp4PsQaEjRcbK&X-Amz-Signature=fa608ea58ee06b1dfe54c71956403363a6545f519e2c1437a655f5c2be8587b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674E64DFP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKlWL7DmlrcC3zFLyb1rgZ4EGBUr11oraOMs7Z90rmngIhAL61dE4mdJa8x0KD5B7uYAXjx13NvBlkGZIPdrhBX8OCKv8DCBEQABoMNjM3NDIzMTgzODA1Igw4zLQKDbMZStd%2Bu1Uq3AOPtjWHq602TGmEhvjCzsIc1vBShOJZmlnt0VBZf2jhv%2BJjpIYMraKj%2Barvyc59MekZIbgG5r9dhkVw%2BXHRZYLMRh3sfhGhsmm0amzEf%2BKLlRtYPFAr05nthc3mHb6LaIn4jCUlfbt6HyUH0pDlPVj1X9TdlOdIvHTziZurL51WyFueRrwzK0WR5sASyu6LowiP%2B4A8eWApwK3rCI7JNCzueAijLUBZbpWv1fWf77lwLI092KyuOrmG09BQy4W6vfoQCCMcyh23bezPEp0kmiaesXDObOG%2ByiIyX8Oy7ajyf7Cw9JT8fdAB2zittkcJiS2Z2vbTw6DOTkzkXKjYxpQMupGNKCiu%2BVbYmsCB%2BHmAfTVT953J6P3lM98u0TSsvePMIYRzd5C4b%2F9jAKM%2FuvB5cmA03MAQHJHalMeqASlmfXEZN%2FkaRuORBVihkmU1NUCWxkJL2QH17yQGVEpTodDWgUlDp2bVRFrPRTXcPnwhAZzD0vJObh%2B9dwj%2FRiTpE6WWDqui487n%2BFkFFnTZxX0A0Wvg%2F16NWyU6IOFttcrKS6VG5XaHn9l115Mq%2BuoaP5jeRmkYLRDWPhYy7XLLBP1OKXjy%2F%2F7UA55f8OxnWLsoZemUBFZTmDERasFgfjDs4dS%2BBjqkARZjz9dEalJBkPs7kXtCxmgnby82CfFmRkxEmMkj6nvEPWwgOOAV6mun4DZs9wqxVnXU0qBLTQZbopbTv0J8Vgz3MGKUmDuKROOfvms4l03f5rW%2F7FXq77pT5Zago7BkiFjW9JjMAVMFtAsOES0X1o5rZ%2BieJEbjMTxERQ3pnKZShQH0RY2x2NzDq0Jd59L1kdHRYf%2B%2F612LVzVYF9samvEygy8g&X-Amz-Signature=90bc0a9abb465c81673ee7e58be3b8537686aa77d4a24e5592c0312ff6238e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WYJBYN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFWxTEs1P1BERbxaBsHo%2B19NdafV2B5FtMdPbtSEJOAIgYf3WfLCUYn%2FmRCbHgBNBOrdMW8iht%2BXGFpHBD1o6trsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPBhJTEJjP4aN3TR%2BircA18HJjd6ZxiXUOXzLS7tONEEStgiNsaRBaY9V31MpWEb9lEyzZpRN5Aeud%2FfgAF5DbDq4ZDQtGjbwMbtcNq5FMl4BX3UxDe%2FgpVsnX6R2Tr6D1erP7y%2BcwY87EiGFKC7xAnAdvRBd9MZ%2BgO%2BNsbcq8GXpl5tnVGxbsVMfp81MaRxZ1yszNmsN46UWAysFDn8pN3LMosJ8BYJODZWuGwCks7ECxr0CG%2FgdMIGn7TIKv80whilrSgrJ8FvYV5I6%2FkojB6eJbmr5AMhvolhJfkRUhEbP1D1POlryZ6ycdG3yBkwBjPng0FOOlzca719A6GQ1PMFAi8b8W58baJj%2BQlEylfoBF%2BxerBwegIslIPcdKoFRd2ZzU%2B8I0sy0gc94FsDyivX%2B%2BgeNM6%2Frd3yN1YwsIZHIm7ulGpg4vzGonysKRgR0uC%2FjF8KZxpO2ahOeNfY9dYvXpAS69oHrQusfdC9yt%2FkKk7w9civlsw3NH3BrWl%2B1MPFWKA9moqTxCV988O0ILpMmcUBSsy1Qo5Dy7qWmndaj3M6EyYHFscBGZL9nz%2BKw2Clpj9LsDoWCxXVIo3G%2BgL1UxQC96zfxLslh6d87PbbmRzDyTw8qd46HF6uru6Jk5DXMl4fv%2FBqZkm%2BMOzh1L4GOqUBJiygaunLSfZKtHVBGNvl20GTZqEaEvSN%2FZ7gYpPAiohiJ%2BuevfzaWsgnxBs3ErDBvmQz30tmfp6Ewx4G64cf3qgYzJiF1tNyk8U0ACsFZhxd%2BOcvNdElVj10Q%2BhiEcIyUAC6nH65sT6OHKIzRifxCoibM%2FMIbGqnAcWoeAaNI%2FpTBo3rWM%2BIEZPJU7AHBkSlOoz4FgMADIEtijW3yoDEt%2Bcs5oVW&X-Amz-Signature=cc1e7361635c7ca030230494c72a6c6d24d54390673397eb442872f58c8396d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7JTRDQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXsZBPlwAeA0trqhzMkYiHcnjlsGVkiitIgEqPupVYgIgTKsdOPrZ8F0edR4H%2FSxrrNcadqssp6TZtav1ucupX0Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCQVazqfAHg5RAmsqircAzw1mueT2y61g92fLQXkn%2FKXvCtFW8k0nZVJP4EKPl1jZ%2Fa%2FaQM4hOOrQAHd9TbS1JKwK8blLRTvOz7QywGlDEqLWHGFqR%2FTQqUT%2Ff375t31EyAVvvMB9XEciok5VM8IVoSSWg5I0mNYG1BoZKhnIJtjC2%2FgunQ6qBTxvWEBXxAmcyVh3oT5eOdA8arjJnFFKXZ%2FN5XyYMUbMp5v0amIhHD5oE93y6YJKJdhcFQIwd0O%2FmGXYbAttW8XWjT0WHlCb9Dx%2Bbi0CLvfnPN9h1y9JCD4Alp1M%2Fll3cZAD4MIq%2BDK7SpSnia2TvBW%2B5QisoUOE%2Fs3vQiHFPMDTPKsQ9cawzYM%2FRQKkKTXa3kcfTVbpeMQFXTUKyfangqXpbsGdu3ImB7tqpm9NQGNEcykbXhEWH0TIu0X27sH8PFbLE%2FxppgQ1L3v7ADc2rJs5Rj6zzBMHUvLmngWuxx3QncmkmqrNpeQuR9CQEM7u4yo3XXE%2F%2Bjv7sm3oNkKi1AKKwLex87rhK67QvPI1I34boXwFbZapur9hWZxzoLnvfRKFg7hW5vnTM1ve69NMNox%2BgXnhqn%2F9QYMJnPveUa8s%2F2cy%2FiX88ms4LUTiDhgVLyP2nL8WK066%2BNh3JPZR32gH66FMOzh1L4GOqUB6niQ6NIRr%2Fs5tkAwpCsEbtGYOv5cum9bWtp4G3ptEoDEQUJEvcC4xhTygHTuykkUxUEiWv%2FxvY6%2BLFRoVODdK%2B2dma4w9XJOJTRjt5UK%2B8U5ss03R8UsHarI9B8gnPMAE1bjQQKGMmIV%2BZVJxF71PlQ4k4T1MBx%2Fni3o2WOa9ku%2BxU8Xr2Pvv2LZ827oiY1v3FymGspj4q2bm7RVp4PsQaEjRcbK&X-Amz-Signature=a23621f37a64310a13b3e3295e5150091ed0d33c218afd7e7f8054f49f02c795&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
