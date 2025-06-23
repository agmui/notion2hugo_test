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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSSZFV7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHU5LI8JthM887vNZ2RdALD4pGnkVeRAVOgVvMYhPRjdAiEA13%2BlC3z8tO7w79UU2KW3%2BsCXmbo2zxtgrVPciBbH%2FQYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNlkV5nmgDgkyW4pNSrcA2IX0ZjBVSWiYyRO06hb91Cj8E2xldL0H7kAwVIVdIY6ABe6KzWqvTZW3JBv%2FotFW1Ej1qN1gFcGqYIaz5kMncMjNVNZtcGeEC47BnKvGFWQITDGzev6EFSeIXPSRp0HNI1VHJPrjgX8NGwr0p%2FYuWD3lO3nxxdXMTPoeVPdvtgnpBervfFVTIKmycJjxT3hzfP%2BU48uHAipPRNyHH1yhWUE5AWdShL0akP9mvElDWuLXtmlfqIKe%2B0256Yc4pWO3PIfOy2ttuJhtf5532JVM0V%2FnTd05CPFGDVFvNCCCqgMO7OqWv2abvK8iYVUlMd4KxvtTilfal%2F%2FbosxtkOn9ZHAiZEwpCWTv%2FuZkcEFUKvSvwJ%2FpGpIxOauGd2lzQcOtVX9AUQ2OhVA4K2QWNmxJG%2FfbJPAdy%2F9myu4zEyijqVdKWn3grlClWrHU%2BIAXLq5JkDuk1Vvw9qHsVxoIfTQ67f6f1aAlBQssh3uVV7sODu9VZ3DH%2BnHL5kL59RvfDRWE121egEuY6z1dWdH3gNOsYYRDoP1AAqAEs8tXDZfzcCQkU5ajtB2qNJ28WWkjvY7QyFJLIzV%2F5bh3Ws9f4VKunFJvOyh1C1F%2Fr6MC8iWIjGxVf9LTfdyNVUrsmYsMMnA5cIGOqUBsSQy04vT4jrDxzZlWqao48B7uKDVHu5SZ2ak8NmCpSmCf8wg7ZWw9l23JZ0aqtFUtbj5wPmd3%2FPvCyi3Ogkprp0nTEqsfvuhsRX%2B75CLBnvX8HKEL2hfR29w03XLqNwP%2Bm%2FvBTVQ8XURR6BvpXtV5koqqdVkP9GEUTCF3gVg2pseAqvuUnJ%2FYNkPcAha8g92Wa7nQR64F6%2BG69ucqbKtXwzjsn3t&X-Amz-Signature=7726719dbc161b725b28b09d01dd3fbe1a45d07168e766b7db6611b02111bb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSSZFV7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHU5LI8JthM887vNZ2RdALD4pGnkVeRAVOgVvMYhPRjdAiEA13%2BlC3z8tO7w79UU2KW3%2BsCXmbo2zxtgrVPciBbH%2FQYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNlkV5nmgDgkyW4pNSrcA2IX0ZjBVSWiYyRO06hb91Cj8E2xldL0H7kAwVIVdIY6ABe6KzWqvTZW3JBv%2FotFW1Ej1qN1gFcGqYIaz5kMncMjNVNZtcGeEC47BnKvGFWQITDGzev6EFSeIXPSRp0HNI1VHJPrjgX8NGwr0p%2FYuWD3lO3nxxdXMTPoeVPdvtgnpBervfFVTIKmycJjxT3hzfP%2BU48uHAipPRNyHH1yhWUE5AWdShL0akP9mvElDWuLXtmlfqIKe%2B0256Yc4pWO3PIfOy2ttuJhtf5532JVM0V%2FnTd05CPFGDVFvNCCCqgMO7OqWv2abvK8iYVUlMd4KxvtTilfal%2F%2FbosxtkOn9ZHAiZEwpCWTv%2FuZkcEFUKvSvwJ%2FpGpIxOauGd2lzQcOtVX9AUQ2OhVA4K2QWNmxJG%2FfbJPAdy%2F9myu4zEyijqVdKWn3grlClWrHU%2BIAXLq5JkDuk1Vvw9qHsVxoIfTQ67f6f1aAlBQssh3uVV7sODu9VZ3DH%2BnHL5kL59RvfDRWE121egEuY6z1dWdH3gNOsYYRDoP1AAqAEs8tXDZfzcCQkU5ajtB2qNJ28WWkjvY7QyFJLIzV%2F5bh3Ws9f4VKunFJvOyh1C1F%2Fr6MC8iWIjGxVf9LTfdyNVUrsmYsMMnA5cIGOqUBsSQy04vT4jrDxzZlWqao48B7uKDVHu5SZ2ak8NmCpSmCf8wg7ZWw9l23JZ0aqtFUtbj5wPmd3%2FPvCyi3Ogkprp0nTEqsfvuhsRX%2B75CLBnvX8HKEL2hfR29w03XLqNwP%2Bm%2FvBTVQ8XURR6BvpXtV5koqqdVkP9GEUTCF3gVg2pseAqvuUnJ%2FYNkPcAha8g92Wa7nQR64F6%2BG69ucqbKtXwzjsn3t&X-Amz-Signature=dd78405ac4a71fa4e427fe3dfb8b8bbdc1f9100bfd5d0a534e3bf97e32114bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSSZFV7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHU5LI8JthM887vNZ2RdALD4pGnkVeRAVOgVvMYhPRjdAiEA13%2BlC3z8tO7w79UU2KW3%2BsCXmbo2zxtgrVPciBbH%2FQYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNlkV5nmgDgkyW4pNSrcA2IX0ZjBVSWiYyRO06hb91Cj8E2xldL0H7kAwVIVdIY6ABe6KzWqvTZW3JBv%2FotFW1Ej1qN1gFcGqYIaz5kMncMjNVNZtcGeEC47BnKvGFWQITDGzev6EFSeIXPSRp0HNI1VHJPrjgX8NGwr0p%2FYuWD3lO3nxxdXMTPoeVPdvtgnpBervfFVTIKmycJjxT3hzfP%2BU48uHAipPRNyHH1yhWUE5AWdShL0akP9mvElDWuLXtmlfqIKe%2B0256Yc4pWO3PIfOy2ttuJhtf5532JVM0V%2FnTd05CPFGDVFvNCCCqgMO7OqWv2abvK8iYVUlMd4KxvtTilfal%2F%2FbosxtkOn9ZHAiZEwpCWTv%2FuZkcEFUKvSvwJ%2FpGpIxOauGd2lzQcOtVX9AUQ2OhVA4K2QWNmxJG%2FfbJPAdy%2F9myu4zEyijqVdKWn3grlClWrHU%2BIAXLq5JkDuk1Vvw9qHsVxoIfTQ67f6f1aAlBQssh3uVV7sODu9VZ3DH%2BnHL5kL59RvfDRWE121egEuY6z1dWdH3gNOsYYRDoP1AAqAEs8tXDZfzcCQkU5ajtB2qNJ28WWkjvY7QyFJLIzV%2F5bh3Ws9f4VKunFJvOyh1C1F%2Fr6MC8iWIjGxVf9LTfdyNVUrsmYsMMnA5cIGOqUBsSQy04vT4jrDxzZlWqao48B7uKDVHu5SZ2ak8NmCpSmCf8wg7ZWw9l23JZ0aqtFUtbj5wPmd3%2FPvCyi3Ogkprp0nTEqsfvuhsRX%2B75CLBnvX8HKEL2hfR29w03XLqNwP%2Bm%2FvBTVQ8XURR6BvpXtV5koqqdVkP9GEUTCF3gVg2pseAqvuUnJ%2FYNkPcAha8g92Wa7nQR64F6%2BG69ucqbKtXwzjsn3t&X-Amz-Signature=7141830b58c7323e9c26c90ea1e211a49bba2b195cb78791b2b2761176e43e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GO6Y3NX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIF0IFXwTbcT%2BFES88MW5Jwd4qaoRKI0L7kotQ2yFCFyvAiAn%2B5EDemTDdjq4V1nSve6tZtHMNaLT8Pg9ZNEp2axVdir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwoFzs2nz5RIOjaxRKtwDPlejbH1P25vc4RBgciFTzo038EhhzXwPU6FIRD3AZFgP9N2GGdQWEr2jnA4tx9Uvl%2FNwBkBnurVuVukY6jqorV0miSIdWP4AF5pspQX%2FBLC3PiZJiW%2F6zGS4K%2FsxBxcocsCeU91zKHArTA2DStKiSZObDssX99kfs1RfjCQNPv0ITOfvkml2iTFoGhwOkl5b1IIk6%2FrSBOXvIi2nqzPof8czdbO6cEESeAlDINGXGZHlt9qEL95G8uBbHhMV8RrceoPbiIIxU6tcG0HT4S%2FNRkBnG9r6WzRlq2emXJiOFpbuKTZauZnC9zxGUT%2FiZR%2Fav0lnpslZPygURHsVvI%2FPEWZlLbW7aYE7JBug64JW9W0NpVlvw5AySExy%2FEMp8cY5zpz5KRRUpgfODy2I2taOyi3swUBKXEU0lIGh99aAmCn6iD66kLxUHBE4l10Y84Q3VSfSiEDYBjIy%2BBN77QUKxq0yTRkHzAJY%2FRk4hFhfdJjj1%2BCFUrISkITb%2FV4R6uMC9g%2F2ss2iFhAWkZWWl9a10j1y3NmY84hlkGtt3nOqiMU8FYIzU98qtpksJHPjTMBpeSVxZLxRyfaLYWn5fgRBD1ZYQa%2BFhgsXANjG3%2BQ9c62mbhk%2FOsHt5nYBFBkwp%2FPkwgY6pgFAdXfaBVUhWVP6SNZLdyp3Qm2uBpUmLnxKmoMYI97fXmj5A02JEg%2FqDaqh%2F%2B%2B0bfDgjlVmNimS68I77AyMvaJhWeqXpUIN9xCwpCP2MPjyYpgDlwLChd%2FvmU%2FCNcAoDQ89BKk3oZt%2BESdMdg%2BC7ljZoTQLwWlwZQ3yZZJo8Xf%2F%2FTYqKGtLDad6sGxo6R9b5frCATeJULbLqpmDv%2BoWYKgNPlD8FgiB&X-Amz-Signature=6ef772c778bbf65ed4cd9431166f8c5bb3aecf49075d049757ee13938afbb377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGOLBA4P%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFCYrlvwvkhxomkX9wSxbNp5L6J5kDt1JhcmB9xHgBP8AiEA5vsI9LuKorQWO%2Fv0vZd6PB0F03mpPi796RW6RyePsa0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMHeBlFWziyK42JuOSrcA4jrfr1dVNxNIUkm5T9Srolv%2Bbyx58M7yyWxhoBvtgzTpw0%2FX9iBujqFPqXSwH5thWxDKqspu%2B8JSZxUdcQZTADTpejqyn39bJ9Pq2huheLOFkHWxIH808hcjQIJ2LADA5Mszkrhd%2Frtpb0q2J5u1u5p6KidoSdjC9hHUDTSiMvnxWLnlh8k8gVWhTKwOS3ifhT9vtKRMK9ZC2ly3T2BNoU73i3TRVCmJa2OYncggrxG6SppsBrgLk8YlvMxlzGqiTM%2BSLRoW03F1wjl4awnoNfQ%2FnV8uZfv8jQQprgEvNPuUHTKG6ORZlS%2B6DkaQD2wBxTvbyDayOhjtEhF2iOTTgM5E%2BCYvNJUU75Lgt8Dn9BQpnBwRmkcT6wDCB8h5%2F21p2yqW9swQEGeptzVn6F5lFjLDHPyrbmlRY%2BP1vsuOEt6ULgEfCC87NnNUuud3kuTEUfOSkkATEkv6KVyNKT9qC21F9tsYC5%2Bf06NUsNcHAfwzk9dHR%2BCYoTZXTfpCcRgd1wQnviRlENqimZ5Xfx5rASbNQ8wrKUi%2FXBczNY3n2NnkU%2BkZhRfsn%2F71QUWQOzbBYT6k2gj0kTCoacAZCH0mRIwyvlkgm23yUI3Zi4qX8OZ7AhaIVAajYmfnayyMJPz5MIGOqUBBdS2YrvYCFWAOOxNMWZq0HcOT2h9cwRhiOUt4uq90Oa6jqzqqta6c7GBl50WksgT9mDtcMVcNhe0yfKGfpe8tZwkzm%2Fw5cuaAuwLENlUBWnclyCBL%2FcSa4j7eevKGB7Fu24vjAAviVcD5qBTI18EgsDSvW54TfVHF0hGrs0PjZJqYiKhlN8zjSTb8JNEYi7BDvzuup73MNJSFr0l8AnZiaRvT9wo&X-Amz-Signature=b97be8c7904b47df3fbca8fe94671a132229a815039147bbb9ed1b8396b3ff59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSSZFV7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHU5LI8JthM887vNZ2RdALD4pGnkVeRAVOgVvMYhPRjdAiEA13%2BlC3z8tO7w79UU2KW3%2BsCXmbo2zxtgrVPciBbH%2FQYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNlkV5nmgDgkyW4pNSrcA2IX0ZjBVSWiYyRO06hb91Cj8E2xldL0H7kAwVIVdIY6ABe6KzWqvTZW3JBv%2FotFW1Ej1qN1gFcGqYIaz5kMncMjNVNZtcGeEC47BnKvGFWQITDGzev6EFSeIXPSRp0HNI1VHJPrjgX8NGwr0p%2FYuWD3lO3nxxdXMTPoeVPdvtgnpBervfFVTIKmycJjxT3hzfP%2BU48uHAipPRNyHH1yhWUE5AWdShL0akP9mvElDWuLXtmlfqIKe%2B0256Yc4pWO3PIfOy2ttuJhtf5532JVM0V%2FnTd05CPFGDVFvNCCCqgMO7OqWv2abvK8iYVUlMd4KxvtTilfal%2F%2FbosxtkOn9ZHAiZEwpCWTv%2FuZkcEFUKvSvwJ%2FpGpIxOauGd2lzQcOtVX9AUQ2OhVA4K2QWNmxJG%2FfbJPAdy%2F9myu4zEyijqVdKWn3grlClWrHU%2BIAXLq5JkDuk1Vvw9qHsVxoIfTQ67f6f1aAlBQssh3uVV7sODu9VZ3DH%2BnHL5kL59RvfDRWE121egEuY6z1dWdH3gNOsYYRDoP1AAqAEs8tXDZfzcCQkU5ajtB2qNJ28WWkjvY7QyFJLIzV%2F5bh3Ws9f4VKunFJvOyh1C1F%2Fr6MC8iWIjGxVf9LTfdyNVUrsmYsMMnA5cIGOqUBsSQy04vT4jrDxzZlWqao48B7uKDVHu5SZ2ak8NmCpSmCf8wg7ZWw9l23JZ0aqtFUtbj5wPmd3%2FPvCyi3Ogkprp0nTEqsfvuhsRX%2B75CLBnvX8HKEL2hfR29w03XLqNwP%2Bm%2FvBTVQ8XURR6BvpXtV5koqqdVkP9GEUTCF3gVg2pseAqvuUnJ%2FYNkPcAha8g92Wa7nQR64F6%2BG69ucqbKtXwzjsn3t&X-Amz-Signature=afaac7e2a5c08c01c5c354a9aceba51bb0b752ddcab2c0895ecee5ce440e8902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
