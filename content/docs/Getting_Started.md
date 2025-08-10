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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYKJ6OH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmiftVxx43bWox8qYBamFWAd2IBAwcpyJCgXDDjZ%2B28AiEAp8am71vDd09e8iFk%2BvPkQ1bnEIH6eqDnhuhxXSE6ylYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl1UyWrHnb7sSeVySrcAxiiWwSKIXEDKwq0bHovXXmBPXpCbSyUrmfLGFqzRw%2BPxWeCnmojXoTdJSP42Gey3s64YAwg3ltu%2FoFFNuePg%2BSYpUJ02WtsIi0wSm7Le6QDGUXnHyizdyMbrN2Lw5mI%2B5C%2FRdglYjXR%2Bv39jbde%2FpJ%2FbI7kHbJHgI25w9ONpE%2FIIp6jRdQZ9d40f0IsOfFlArIVo7Bei5Yi1ABkLmySVEgxqOTkGLMiTjJ3FzhMqTNPQa9kS5VB1heUTuKU9a%2B8t13bkIhgQPn9B%2BWcJlgIZiov%2BYNZce8c6jP1qqDKymJnMykmqh5NKslQzgr4dRGcICtVuqqOH0ahUVycnW9xH4PWhi904qrWN3%2BbsDr7WP9kxxKzz3m9EeUzMJc6zBfUXW6KwqlFr2NVdKVOxZTLY15URGI5JXqPZMyUrx4gjJrcaajhkZnd0%2FxfSzSXEwNtDUhpoIccXpv5KHsfKEp3aIZRWX5MM9KtFR07%2FlYcNbPGnrag0MGEk2ieSGVdXsp%2F7%2FZmMv3fmEDq9hWWVOlydplwcTpJHDZMd6xAe6HXbLjyu3hUnzWYASS%2BExbokIZnkp7a%2BvRe35DmzUr0Wj65KewRaN4J5%2BhTeAEN8NMDub36gJwuiWjjUQ3xLXX8MP6Y4sQGOqUBgzT4NDKb596NTRkwGP%2BXjYokLQtZfUhRU0bpguMbI6a0yl60dH2kFE3GIHZoyJ83Tk4Hff3%2B2vHPtxgA3Dk8TD0ayLfqhKVU%2FK8taEkHC72FQPefi5RrAeWvCb2RzJlC8%2FpATFd0iKpHmnovGwZ453IeAmflXINgrDhuNrzqob7%2FmZK8ovKGCpZ7LeIurps66yy7Go%2Ft73Akuc8fx5pnzoXvXaU1&X-Amz-Signature=6731b07735ef09f30d3bebd2d25ff0b4222c6425fd078bb854cf7ece10f74300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYKJ6OH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmiftVxx43bWox8qYBamFWAd2IBAwcpyJCgXDDjZ%2B28AiEAp8am71vDd09e8iFk%2BvPkQ1bnEIH6eqDnhuhxXSE6ylYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl1UyWrHnb7sSeVySrcAxiiWwSKIXEDKwq0bHovXXmBPXpCbSyUrmfLGFqzRw%2BPxWeCnmojXoTdJSP42Gey3s64YAwg3ltu%2FoFFNuePg%2BSYpUJ02WtsIi0wSm7Le6QDGUXnHyizdyMbrN2Lw5mI%2B5C%2FRdglYjXR%2Bv39jbde%2FpJ%2FbI7kHbJHgI25w9ONpE%2FIIp6jRdQZ9d40f0IsOfFlArIVo7Bei5Yi1ABkLmySVEgxqOTkGLMiTjJ3FzhMqTNPQa9kS5VB1heUTuKU9a%2B8t13bkIhgQPn9B%2BWcJlgIZiov%2BYNZce8c6jP1qqDKymJnMykmqh5NKslQzgr4dRGcICtVuqqOH0ahUVycnW9xH4PWhi904qrWN3%2BbsDr7WP9kxxKzz3m9EeUzMJc6zBfUXW6KwqlFr2NVdKVOxZTLY15URGI5JXqPZMyUrx4gjJrcaajhkZnd0%2FxfSzSXEwNtDUhpoIccXpv5KHsfKEp3aIZRWX5MM9KtFR07%2FlYcNbPGnrag0MGEk2ieSGVdXsp%2F7%2FZmMv3fmEDq9hWWVOlydplwcTpJHDZMd6xAe6HXbLjyu3hUnzWYASS%2BExbokIZnkp7a%2BvRe35DmzUr0Wj65KewRaN4J5%2BhTeAEN8NMDub36gJwuiWjjUQ3xLXX8MP6Y4sQGOqUBgzT4NDKb596NTRkwGP%2BXjYokLQtZfUhRU0bpguMbI6a0yl60dH2kFE3GIHZoyJ83Tk4Hff3%2B2vHPtxgA3Dk8TD0ayLfqhKVU%2FK8taEkHC72FQPefi5RrAeWvCb2RzJlC8%2FpATFd0iKpHmnovGwZ453IeAmflXINgrDhuNrzqob7%2FmZK8ovKGCpZ7LeIurps66yy7Go%2Ft73Akuc8fx5pnzoXvXaU1&X-Amz-Signature=8d1ce0fef4cf58c4816f5af81056138ee19b4e5aa485821f0bdc0d77a4d79684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYKJ6OH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmiftVxx43bWox8qYBamFWAd2IBAwcpyJCgXDDjZ%2B28AiEAp8am71vDd09e8iFk%2BvPkQ1bnEIH6eqDnhuhxXSE6ylYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl1UyWrHnb7sSeVySrcAxiiWwSKIXEDKwq0bHovXXmBPXpCbSyUrmfLGFqzRw%2BPxWeCnmojXoTdJSP42Gey3s64YAwg3ltu%2FoFFNuePg%2BSYpUJ02WtsIi0wSm7Le6QDGUXnHyizdyMbrN2Lw5mI%2B5C%2FRdglYjXR%2Bv39jbde%2FpJ%2FbI7kHbJHgI25w9ONpE%2FIIp6jRdQZ9d40f0IsOfFlArIVo7Bei5Yi1ABkLmySVEgxqOTkGLMiTjJ3FzhMqTNPQa9kS5VB1heUTuKU9a%2B8t13bkIhgQPn9B%2BWcJlgIZiov%2BYNZce8c6jP1qqDKymJnMykmqh5NKslQzgr4dRGcICtVuqqOH0ahUVycnW9xH4PWhi904qrWN3%2BbsDr7WP9kxxKzz3m9EeUzMJc6zBfUXW6KwqlFr2NVdKVOxZTLY15URGI5JXqPZMyUrx4gjJrcaajhkZnd0%2FxfSzSXEwNtDUhpoIccXpv5KHsfKEp3aIZRWX5MM9KtFR07%2FlYcNbPGnrag0MGEk2ieSGVdXsp%2F7%2FZmMv3fmEDq9hWWVOlydplwcTpJHDZMd6xAe6HXbLjyu3hUnzWYASS%2BExbokIZnkp7a%2BvRe35DmzUr0Wj65KewRaN4J5%2BhTeAEN8NMDub36gJwuiWjjUQ3xLXX8MP6Y4sQGOqUBgzT4NDKb596NTRkwGP%2BXjYokLQtZfUhRU0bpguMbI6a0yl60dH2kFE3GIHZoyJ83Tk4Hff3%2B2vHPtxgA3Dk8TD0ayLfqhKVU%2FK8taEkHC72FQPefi5RrAeWvCb2RzJlC8%2FpATFd0iKpHmnovGwZ453IeAmflXINgrDhuNrzqob7%2FmZK8ovKGCpZ7LeIurps66yy7Go%2Ft73Akuc8fx5pnzoXvXaU1&X-Amz-Signature=c52fd2bd6c3dfd1a439ef623112294e46c19459e95e21cbc3f4c466f7294671b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6SYCPT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXJvuAYJRNEM0I%2BwlqhFrZ7%2Bop833XTJFKZ1JEeEV0jAiEA%2B%2FuleGNM62iioNsJ5ZXL%2FUNmycLRjQAlx%2BRaktOBjPIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON%2BYb7%2FlEdXHOHCeCrcA4JCMZgAwqcjL2uuQSPuJAD46htyCbkWlhaZMyP9mnHcUPazJB5mEmAvBoGjHsg9sBHcRXKVohTVFkMVX8hJi%2FNq8amU5eA%2Fx5DX1TDcfCnCE0Fe1tvV0EiJ02%2F%2F%2FIaO4FzYbCAY5KX4oysMdWJBPhBGLcjyyVWQhVYcPCv7Q0IZx4M41%2BGkiqwIGtu7kwyoOOI48fOR59cd0z9m3Twcf%2FfU%2F1BLyuTLNs8SfyDf3oE0ycjNVbTx%2FhAvHmH%2B3kKtSKUW2daxCHQCxm%2BRMSO4U2jjNzXq85LGpXsV8nJ1HxRDDdP4LSGejKSIESfG4j0biuK7z01OCSIN3gcKTMhtpkOy92nozFGnctE%2FzwcWPF1jo1gSbwc1kDlSSE9afUbBHqsCWvqdnj6MEclVCTWZn8H4PV4oXLss7ihCcGMFFH8Z9dWA%2F2HGNRThQt5K3xZsY4V9aU7IXK86huc9r2udq2acybDrQhGmeaveI7Jd1J2q92qE9geOdxL%2B9PZA7Xuu%2BtCuSSo702a9%2FEAeuv0mtuQ2GCjj4bJX%2F2dl97FcqXaF1ulU6jQJya3%2FLAA8q6XX7cYe8wDEVvxBMvinpRbe9748KoBDrVSBC9NCmOycdj1CAc09kUjVoIcN6fcLMO%2BY4sQGOqUBOa6nB2bK7JSscMfuRQavy9tq38RN6rlNVESKDvr389cTt3Uq54U8J0BEiDt2darm03SbQBtoFQtqDpa53kPuphHUJcrPIe9eYM2irDtZhGduUyrwD%2Bo8TQbXjKTV0%2F6ekR2mQU5oQvBfmJ4zVLd46CoNKd1WBA0GTC74MACoUXq2R1%2FEPxWzCwNhfuHaaAOgqLYxct65Gc3kvDDX7kr9L5Vok4%2B4&X-Amz-Signature=f3f7390ffe079491230c628d5f98b3babd8fb96e5be2a3badd8addccd983845c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNOQ7D4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFs7cfTCrWQoSwjn0YxTLXaSmc0UammqR9lHF5gKq2NqAiB%2Fj%2BPWmVCiQiBpYfkaD13hklaHQHKGMydT1vjXGLWqdiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU8YQWur67djHW149KtwDVfXQ6a%2FCJN0Md0wtWnk4RG%2Fp0qi%2FJkcUf40psQGD4BDK%2Fm1YjFRFnziTgcP%2B6CLs84LfQ%2B6Ft36XhUcjOWoLVTnPf35AQ1lceybdSOKU2hlAc8g0Abkx7CmnieJU%2FccUSawnpSPpgbkcJ7EwydD%2BtaTQDoYezHxMGbh7idTbCAGH7QemL1afnyJKjx2Uh8bKMwHe5pwu9%2B5gizwJSDDVIct27dWfXe7Mw%2BzvF7FEt7Fjd8wit6Sat5SOE%2BqqFrlTQ%2F%2BPzJw%2F%2BhQZ8KlSYPvT7GdFxycw4R2kWP7H8gtjw5uSBePFzGCNeQw5OT6yvpEz%2FIGOfga8dKl3mdhYSyt6ziw6Ivvu593MqcIAS6z9kwikCH5sg13Ugmf38MhQqXESyfTH0Y4N8HGrOOJ2ldrj0X71kttUuSfMQx4V9qwxRL51Nlk2stTszhGkMeqf5i6%2F55dbr4nu9ic6GpJQCq%2FiFuix3p3iikGWzLFNVPWN28jqPoORNvAUE3%2Big4owzTKpcV9UclEQez5vq%2BA1qmkw1qxExYDCzfOcJwVM3DF1%2BrohGhTVyVJtQb3s7KWmlHYjDbRNpYLFPmSV1f8lZ2FrN8I1OGmTFLGJreVFi58u5A1lxV4G3yahxror4powrZnixAY6pgGfx9aUua8qWXBzHGWP63ptEH2g%2Fh6wWVlI8vpR6hmFi4qvuo3468Cxq7QaKvl%2FBFLojX98x8Hv8MmDVCoeiGeW%2FImhWDuU90J68OE5ZsZLpLD42T9E5cNw583u8zj5tv7k4poVkeOg%2Brq7Xqo%2B%2B9il3%2BpyaQmibMp8t5F1ajxpDtFH3goRQSZRFs8nwX94CSZfb5yjMla89XMBZEAzpoeaU%2FBoJacs&X-Amz-Signature=600dec4f882f1208a40f9ccf7c972239775f28dd15e882ad1b1885d93425587b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYKJ6OH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmiftVxx43bWox8qYBamFWAd2IBAwcpyJCgXDDjZ%2B28AiEAp8am71vDd09e8iFk%2BvPkQ1bnEIH6eqDnhuhxXSE6ylYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl1UyWrHnb7sSeVySrcAxiiWwSKIXEDKwq0bHovXXmBPXpCbSyUrmfLGFqzRw%2BPxWeCnmojXoTdJSP42Gey3s64YAwg3ltu%2FoFFNuePg%2BSYpUJ02WtsIi0wSm7Le6QDGUXnHyizdyMbrN2Lw5mI%2B5C%2FRdglYjXR%2Bv39jbde%2FpJ%2FbI7kHbJHgI25w9ONpE%2FIIp6jRdQZ9d40f0IsOfFlArIVo7Bei5Yi1ABkLmySVEgxqOTkGLMiTjJ3FzhMqTNPQa9kS5VB1heUTuKU9a%2B8t13bkIhgQPn9B%2BWcJlgIZiov%2BYNZce8c6jP1qqDKymJnMykmqh5NKslQzgr4dRGcICtVuqqOH0ahUVycnW9xH4PWhi904qrWN3%2BbsDr7WP9kxxKzz3m9EeUzMJc6zBfUXW6KwqlFr2NVdKVOxZTLY15URGI5JXqPZMyUrx4gjJrcaajhkZnd0%2FxfSzSXEwNtDUhpoIccXpv5KHsfKEp3aIZRWX5MM9KtFR07%2FlYcNbPGnrag0MGEk2ieSGVdXsp%2F7%2FZmMv3fmEDq9hWWVOlydplwcTpJHDZMd6xAe6HXbLjyu3hUnzWYASS%2BExbokIZnkp7a%2BvRe35DmzUr0Wj65KewRaN4J5%2BhTeAEN8NMDub36gJwuiWjjUQ3xLXX8MP6Y4sQGOqUBgzT4NDKb596NTRkwGP%2BXjYokLQtZfUhRU0bpguMbI6a0yl60dH2kFE3GIHZoyJ83Tk4Hff3%2B2vHPtxgA3Dk8TD0ayLfqhKVU%2FK8taEkHC72FQPefi5RrAeWvCb2RzJlC8%2FpATFd0iKpHmnovGwZ453IeAmflXINgrDhuNrzqob7%2FmZK8ovKGCpZ7LeIurps66yy7Go%2Ft73Akuc8fx5pnzoXvXaU1&X-Amz-Signature=7374218b3324cd9223ca0100dfe97866a9282cf439117a85e3b07ca558baca66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
