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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CQHRPV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERcp%2BBTglVq7ZWthNeOfp7xIl20m99%2By6v8DiCmEpJZAiBX0EkdwttbKrcy%2FicOKpDvn486a86Wo81iqGuSYgMwsiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUbyPRaTrL3EGuTleKtwDRAsS%2FNBdCpTs0JmSJdq3KQRpBCVTPJ2M2h5cFb1m%2BKCvgAVpItYcc6Y4EVUck%2FIumgx9fiIW0Kqape58hiCPfZlOuOLN8Wc4I7ZH8wAj7Xl0pFGpmAr3w4u8rvPbeA0NLuApCFojLsRWLoZ%2F8nS4a9QbH9F95lK2%2F7PWPFAFHIkZUjBgvkegkV%2BouXtfoSXE1TxiD68dcESu594KgDCUF2btrZua%2B8LBHHw1c1l2w%2BTcV04JIZ84aINYpXhLq4wTwKk0650FxmQGgXG7ZxU5HcAGW4gyvKms87fY0%2Bntp370Yswswq8WpOXEBhSGaKGYQYK07W4xaa3C8TzHeAvs1KYwqMvQqy4vB%2BSKGdBPMpWLHJs3ehGlXTK5f5pWhpDP1ycvsL6kjslaINQaHDNe72ofxV2wCVyW8h5WEmmsVuni0hJXB4709ynH3DOvKTpfkox60ys3MSAMs7Fa4RQMcQs4MVnAQvB7RoYcH5QEcH9QTApdAloB6aB%2BmEM16OCxFGfwwbYReP9h4y0eRppcjoIdnJngKTmxD%2BIXT4LnBXlNLloWojaDSgKqsnhbgfM%2Bf1m1OtQHdfciGC7KlqQaPfVBusocogLUcf8vdBstAPUOexD4xvNwGKED3PAwkoyQwwY6pgEDw0NoPSIhs8rrEpGbPKqBhhB5N3%2FIZQsxBuptOccgZ9GNy7Asu6qeeuanTf3ZyIzhsvMO%2FJKygcXo1q6QiAcXeBmNzVUjX73GN0TgDM%2F7uxOitoOQSzwUo8R4i12Qv01MMrotoyMOnTwQhepBX9mHbVIDj7ERlYCx5xylLhBeBfH5uDDQSpP455dXVynUy8g8ITySs3Na7myvj8iIUcmjDT1oAu7W&X-Amz-Signature=3b7acba29629abf7f4387c692992c3b19269c41a546f2a09513c7e75a7737e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CQHRPV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERcp%2BBTglVq7ZWthNeOfp7xIl20m99%2By6v8DiCmEpJZAiBX0EkdwttbKrcy%2FicOKpDvn486a86Wo81iqGuSYgMwsiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUbyPRaTrL3EGuTleKtwDRAsS%2FNBdCpTs0JmSJdq3KQRpBCVTPJ2M2h5cFb1m%2BKCvgAVpItYcc6Y4EVUck%2FIumgx9fiIW0Kqape58hiCPfZlOuOLN8Wc4I7ZH8wAj7Xl0pFGpmAr3w4u8rvPbeA0NLuApCFojLsRWLoZ%2F8nS4a9QbH9F95lK2%2F7PWPFAFHIkZUjBgvkegkV%2BouXtfoSXE1TxiD68dcESu594KgDCUF2btrZua%2B8LBHHw1c1l2w%2BTcV04JIZ84aINYpXhLq4wTwKk0650FxmQGgXG7ZxU5HcAGW4gyvKms87fY0%2Bntp370Yswswq8WpOXEBhSGaKGYQYK07W4xaa3C8TzHeAvs1KYwqMvQqy4vB%2BSKGdBPMpWLHJs3ehGlXTK5f5pWhpDP1ycvsL6kjslaINQaHDNe72ofxV2wCVyW8h5WEmmsVuni0hJXB4709ynH3DOvKTpfkox60ys3MSAMs7Fa4RQMcQs4MVnAQvB7RoYcH5QEcH9QTApdAloB6aB%2BmEM16OCxFGfwwbYReP9h4y0eRppcjoIdnJngKTmxD%2BIXT4LnBXlNLloWojaDSgKqsnhbgfM%2Bf1m1OtQHdfciGC7KlqQaPfVBusocogLUcf8vdBstAPUOexD4xvNwGKED3PAwkoyQwwY6pgEDw0NoPSIhs8rrEpGbPKqBhhB5N3%2FIZQsxBuptOccgZ9GNy7Asu6qeeuanTf3ZyIzhsvMO%2FJKygcXo1q6QiAcXeBmNzVUjX73GN0TgDM%2F7uxOitoOQSzwUo8R4i12Qv01MMrotoyMOnTwQhepBX9mHbVIDj7ERlYCx5xylLhBeBfH5uDDQSpP455dXVynUy8g8ITySs3Na7myvj8iIUcmjDT1oAu7W&X-Amz-Signature=7b209a3bd0d5fdcff398aef4ba8fae8f35a6e83f8230fb110078e2ed9031a3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CQHRPV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERcp%2BBTglVq7ZWthNeOfp7xIl20m99%2By6v8DiCmEpJZAiBX0EkdwttbKrcy%2FicOKpDvn486a86Wo81iqGuSYgMwsiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUbyPRaTrL3EGuTleKtwDRAsS%2FNBdCpTs0JmSJdq3KQRpBCVTPJ2M2h5cFb1m%2BKCvgAVpItYcc6Y4EVUck%2FIumgx9fiIW0Kqape58hiCPfZlOuOLN8Wc4I7ZH8wAj7Xl0pFGpmAr3w4u8rvPbeA0NLuApCFojLsRWLoZ%2F8nS4a9QbH9F95lK2%2F7PWPFAFHIkZUjBgvkegkV%2BouXtfoSXE1TxiD68dcESu594KgDCUF2btrZua%2B8LBHHw1c1l2w%2BTcV04JIZ84aINYpXhLq4wTwKk0650FxmQGgXG7ZxU5HcAGW4gyvKms87fY0%2Bntp370Yswswq8WpOXEBhSGaKGYQYK07W4xaa3C8TzHeAvs1KYwqMvQqy4vB%2BSKGdBPMpWLHJs3ehGlXTK5f5pWhpDP1ycvsL6kjslaINQaHDNe72ofxV2wCVyW8h5WEmmsVuni0hJXB4709ynH3DOvKTpfkox60ys3MSAMs7Fa4RQMcQs4MVnAQvB7RoYcH5QEcH9QTApdAloB6aB%2BmEM16OCxFGfwwbYReP9h4y0eRppcjoIdnJngKTmxD%2BIXT4LnBXlNLloWojaDSgKqsnhbgfM%2Bf1m1OtQHdfciGC7KlqQaPfVBusocogLUcf8vdBstAPUOexD4xvNwGKED3PAwkoyQwwY6pgEDw0NoPSIhs8rrEpGbPKqBhhB5N3%2FIZQsxBuptOccgZ9GNy7Asu6qeeuanTf3ZyIzhsvMO%2FJKygcXo1q6QiAcXeBmNzVUjX73GN0TgDM%2F7uxOitoOQSzwUo8R4i12Qv01MMrotoyMOnTwQhepBX9mHbVIDj7ERlYCx5xylLhBeBfH5uDDQSpP455dXVynUy8g8ITySs3Na7myvj8iIUcmjDT1oAu7W&X-Amz-Signature=42b504b42b137e42e6bf5805f1c80694a943779c33f512f2145004f303d5e9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQDR3FJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKH7eErZzELjRCWBHxcN%2FWMs0y%2FPwgQp7c%2FaDhz3WS9AiEAiQKfqpPbmH7ttFdjrCGBovjl8QVhe30TEvGlHG8OK5kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzKYC77tvsy7zXiyrcAwnkY3%2BbC5OxzFr%2BJlrSUdLFUFVB%2Fd955kqRkC8c09b09NRyH2DbLLOnVOp%2BqYeBd1jnkvcXyQNylpPioi6fXWUeuNRN8odgq3SvXq4Y2qUGDAbnROfHK5Cj3weFu5a5vvs6%2BW4ib1be1%2Bfs8E36%2BlMjlSaGEdu8z%2FmftjSwGpnPXt5JagVOorq6lH0AEZSKFPjgwBRpYOxhFMe8o6HX9fAKwe2j%2F9sRTTKSWqphrLx2rlwtJSdzsF4BVPObueFy1BqDAYrsAYmxEv4RW57kiLrjTl9q%2BWt%2FI0jDryNqNM1gBbqyX6Gewyy0z3%2B3MSJPMpbP%2F%2Bk6Vl1zgq098fUgesUXRumEAzeNyAcUjIweqrDJmRN5FsAp99AosUmJrJyv4dGkGEV73daHBZGDFqcIMh3gMtH0JZ39GF38%2BCJpJdmzDNVuXlP%2Fy1LWqtGhdZ9uV3MTQsJgBpkzH9DrM%2FhfRdRpsRePnMXdmVzDbmWMcilSVSQ%2BwZt4D%2BfeR2yPKOy6kgXHGIw6bPWsj3cQYtdhmo3%2Biz%2BEsg8xb%2B2sEHaygCSc3bVyjYgAdSHF2Mh%2BArND5a5a43xyGMj%2BeHa%2FeE7K20VsO7iNixSYmgAaRf%2F2gEDNvHFHUDjt9tStLs%2FcMIKIkMMGOqUB0vbUYGKGyG2GCDEWJ2lyFhB%2FTFncfqk8FFaNlGNRvDQ1nRfiT3w09bcz5ajEvSlO6WEe1JVlzH%2BYU%2FCWVLAnz5w9fAK37rolLxCBqaMqoq8oS%2F4n%2FlDIQiq%2BJwCOXY5%2F%2FzE7mRv%2Fz99LJTKE6Rsker74WZaLgOPEA41qi6Tv2jG0063897Hg97VEnwO3R8MXnYL6UzLssw5ldSy2lz39KoU8rI5Y&X-Amz-Signature=f2e12abfa99037e9d0f8293175fcb8061644ffc456ecadf1ae0eb0c6b9552983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2YX2JN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7Syeguocz%2B%2BMXYWDcC%2BFs%2FR1MyX6TlY6cc7wXs%2BIXhAiEA9DsFn2Gd6kS7sydpqyV3zCKjMg5s5BGRTAVM%2BChQzeQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhFszNQ7Hq5o2J11CrcA2zSEJC8dSuS8ZI9i6tc5SIbwv0QQrAvNkHaH6Os2moCiCGgs9JQ%2Ff4FrYkKBvzcLo0xh6G71eWGeFFC9C0I59oeHnBCGuFWNp4wuV%2By4KKgXXtHzuTy82NS1y2UuueafKx5NwaIjk6dLDPt%2FBforrNZZ56rdlr9uP1WhEZyOt%2FypP4EpFUjelWM5zdTAEoAqop%2BntFpaH3sSxxGpmSfR5UBParPV73DS87Ys%2Bay7H8%2F8zrAE5YwQVEW8CE3ZobCTOWdeivzClSzjw%2FxH4MVH08HnWhQkMGd3dly0nQgSdslh0kq%2FBYzG%2BqEvbJPYq7C9juWdZmG4vZWnTycoUYTTdXiwFIXoOvLHIQLB3utg8nhHbjhvTnbQ6ETO%2F98Ql2u2rRdthWmHKxOPLRTlwEuSfWLwq2mdoxzYEVL%2BMJShrnmIDaSIJPQQyHuKA30T%2BqrIyFXkp5l%2FFnjdISlUpbaFW5pBaTjxH%2B1b1OiG2BH6Cit8TJelPtVtrn077Oxp2LVa6q4Eex%2BoOUjK0i58e0ozG6DNrCmnLAW%2BkYROhpbLXvMOrbzFtnsQbMUTMChNdDxhhBnpPnoH%2F8G%2FAGsDAwo%2B%2FD7izonzKu%2B9Nm2w%2BFLWaDqzWFdvP%2B%2Bq7XWNlfDMMaHkMMGOqUBwrgYFhOy3x9hS1F3%2FEsxoxMM%2BQI1FT%2BiWdz%2FrKdEA2DS1g7F6e4FjPtRelx2jIr1UJOYxMGRVi6q0eJt6VZpbGfmNj4K88nkIrxa%2Fb3dtnhiTXCGznR9MUSc%2BKqMR3tQKBRL0P2jImOTgNTRmJgahsfok5msnLXn6FNGSAfDG6XqQrj5s54OhYqO4OBFwu%2FfC45EBnmqsdrNeAQ1sD3xbfXDl%2Bw5&X-Amz-Signature=1b7fdc042d5c6d8be60f7c3973806f16d8cd52da1c56f4d02d7d47e9a1b930c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CQHRPV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERcp%2BBTglVq7ZWthNeOfp7xIl20m99%2By6v8DiCmEpJZAiBX0EkdwttbKrcy%2FicOKpDvn486a86Wo81iqGuSYgMwsiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUbyPRaTrL3EGuTleKtwDRAsS%2FNBdCpTs0JmSJdq3KQRpBCVTPJ2M2h5cFb1m%2BKCvgAVpItYcc6Y4EVUck%2FIumgx9fiIW0Kqape58hiCPfZlOuOLN8Wc4I7ZH8wAj7Xl0pFGpmAr3w4u8rvPbeA0NLuApCFojLsRWLoZ%2F8nS4a9QbH9F95lK2%2F7PWPFAFHIkZUjBgvkegkV%2BouXtfoSXE1TxiD68dcESu594KgDCUF2btrZua%2B8LBHHw1c1l2w%2BTcV04JIZ84aINYpXhLq4wTwKk0650FxmQGgXG7ZxU5HcAGW4gyvKms87fY0%2Bntp370Yswswq8WpOXEBhSGaKGYQYK07W4xaa3C8TzHeAvs1KYwqMvQqy4vB%2BSKGdBPMpWLHJs3ehGlXTK5f5pWhpDP1ycvsL6kjslaINQaHDNe72ofxV2wCVyW8h5WEmmsVuni0hJXB4709ynH3DOvKTpfkox60ys3MSAMs7Fa4RQMcQs4MVnAQvB7RoYcH5QEcH9QTApdAloB6aB%2BmEM16OCxFGfwwbYReP9h4y0eRppcjoIdnJngKTmxD%2BIXT4LnBXlNLloWojaDSgKqsnhbgfM%2Bf1m1OtQHdfciGC7KlqQaPfVBusocogLUcf8vdBstAPUOexD4xvNwGKED3PAwkoyQwwY6pgEDw0NoPSIhs8rrEpGbPKqBhhB5N3%2FIZQsxBuptOccgZ9GNy7Asu6qeeuanTf3ZyIzhsvMO%2FJKygcXo1q6QiAcXeBmNzVUjX73GN0TgDM%2F7uxOitoOQSzwUo8R4i12Qv01MMrotoyMOnTwQhepBX9mHbVIDj7ERlYCx5xylLhBeBfH5uDDQSpP455dXVynUy8g8ITySs3Na7myvj8iIUcmjDT1oAu7W&X-Amz-Signature=7cffefd9b1dee76e0af295c74b8179d939b2f3372245be1451434569084c49f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
