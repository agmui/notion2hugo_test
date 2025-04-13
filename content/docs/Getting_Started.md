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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ULQDHE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC3LT8X%2Ffl2nqwauX1x8fdMNyFqPpTx1BfWBbnI6Qt8ngIhAL91dHR55777oB6ZfQMpqu7iXlIwOrVUdMvw%2F4w6pKwvKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9eRbEPQaZqKly6Mq3AOUEnCONvppQHs5xxBXD8jaNkum%2BaO%2FZE8906gkRP3K7Jn46FVYgp8jisE5xhzdg%2FuznOeIY6MhJKvB99W5rWlplzIedncq%2FICVyc8tlyfzRY1P%2BFPdYd66opeu3feAsjyppYwYLrGQJbT%2B8Ot%2FiFSXLEHKTkFH8%2FUjTMM7B6tvcCOm91cfrjDaZVeLW3Z2ctjDkaWjFa3dYtxdPOLsYGyPTPj62Y2pOus5C3B8PAKn0B%2BG8V6hq9Dphcv%2BjMdFkhgfmLR3q5tJLUXBVpdNXAfe6nRqjYRWlhuFPZz%2FK4laRRbwiqve3sWO4XvJ9mIScbBIrvcehrENKX3pw1yS0gQcI2tzpJC%2F7dxMXIJZBFWU2%2Fm6zftoIdWz0YDTwfFIEaW7rvGtdDBlxPJudwy0%2F3NzUmuP5YOQyXouotWnDz1WQvOZhPC6eDk5wjqZe5eSvx4XLpailDKykZ6JFTdpHBfwue7IczRUeOM6wC3Jse%2BFiHWIIr%2BnFqjKv%2Fyz5DhjiMZURSkONNNoUjSVZlzPMTc62Kc5RHDzsg01zoLBuuvk6nARzx1RVQbAJShV2F3poi8WQ6Huz8o83QEaXBWgyCBP2WTs8jQyRR9GW%2BNJ2uP36Bt6i%2BhaW0Ao0BHfzjCrju%2B%2FBjqkAat3eLVsIAnipeUmHAsXZZIQjlR5huKBVOwzvDQczSnS9xsQ9le3fdOfRl2snQ%2FFiLicgJNBOxBOLWqiHCZ%2BSnE02q1oR1VwyiCI%2FAS96D3nIqgc3Unh9%2F2Wrguw8x5vaFwG%2B6vQaEvAWWgF9R73AgdYAZMoxOWWMx6g%2FxtMrrfxZm%2Fa4ql%2F1R%2FSly0yxnd606kJ%2FthNYX%2Bcd2ayaLSk%2B8A46HlK&X-Amz-Signature=fad5fc9248536e89b7bd4000b7011616b82035da2545e63c7d667e6d1ce33e54&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ULQDHE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC3LT8X%2Ffl2nqwauX1x8fdMNyFqPpTx1BfWBbnI6Qt8ngIhAL91dHR55777oB6ZfQMpqu7iXlIwOrVUdMvw%2F4w6pKwvKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9eRbEPQaZqKly6Mq3AOUEnCONvppQHs5xxBXD8jaNkum%2BaO%2FZE8906gkRP3K7Jn46FVYgp8jisE5xhzdg%2FuznOeIY6MhJKvB99W5rWlplzIedncq%2FICVyc8tlyfzRY1P%2BFPdYd66opeu3feAsjyppYwYLrGQJbT%2B8Ot%2FiFSXLEHKTkFH8%2FUjTMM7B6tvcCOm91cfrjDaZVeLW3Z2ctjDkaWjFa3dYtxdPOLsYGyPTPj62Y2pOus5C3B8PAKn0B%2BG8V6hq9Dphcv%2BjMdFkhgfmLR3q5tJLUXBVpdNXAfe6nRqjYRWlhuFPZz%2FK4laRRbwiqve3sWO4XvJ9mIScbBIrvcehrENKX3pw1yS0gQcI2tzpJC%2F7dxMXIJZBFWU2%2Fm6zftoIdWz0YDTwfFIEaW7rvGtdDBlxPJudwy0%2F3NzUmuP5YOQyXouotWnDz1WQvOZhPC6eDk5wjqZe5eSvx4XLpailDKykZ6JFTdpHBfwue7IczRUeOM6wC3Jse%2BFiHWIIr%2BnFqjKv%2Fyz5DhjiMZURSkONNNoUjSVZlzPMTc62Kc5RHDzsg01zoLBuuvk6nARzx1RVQbAJShV2F3poi8WQ6Huz8o83QEaXBWgyCBP2WTs8jQyRR9GW%2BNJ2uP36Bt6i%2BhaW0Ao0BHfzjCrju%2B%2FBjqkAat3eLVsIAnipeUmHAsXZZIQjlR5huKBVOwzvDQczSnS9xsQ9le3fdOfRl2snQ%2FFiLicgJNBOxBOLWqiHCZ%2BSnE02q1oR1VwyiCI%2FAS96D3nIqgc3Unh9%2F2Wrguw8x5vaFwG%2B6vQaEvAWWgF9R73AgdYAZMoxOWWMx6g%2FxtMrrfxZm%2Fa4ql%2F1R%2FSly0yxnd606kJ%2FthNYX%2Bcd2ayaLSk%2B8A46HlK&X-Amz-Signature=8c17c40b408fa4cb2f6f5f0e25d014c936ac1f374613a884583f870d8f3b958e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEWRSXF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6%2BlZdS0YEQUzx0CzQukII0zZMD8LbBeOPVGmqzQz7sAIgQ%2F8IOKmnvDF6B0sbUnGY6WHXm4vd2WywjJw7vtUWmlgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYCKh4Wvo%2F%2BJONiWSrcA8s4CHpeu8MX%2FD2xtJZqFTkqxymeyQdGcm%2FbDtaDoEt8GMTvqi7mh%2BKpmdhXjl%2BaX3ZgzEnHJaSH%2Bn27zVDZrxmGc%2BLk9lDOO2%2BkjKL%2BPrh%2BYAaK6a47lo9sQcf4bjGAnZLIMa6SbJXU9jrSN1FQBjETf%2Bg2CRubE1QZWBtMAt0iJw1VYdRWRuqnXLiSbVc58ElSb8Hvc6zCB3hsUNApBg%2BVAvFuJcUZKUd8RnS%2BwIw4KaVm8TKEh0UlwUICgx7sbuylgAUllB5iLJeZ1%2BGKWftmhefxYEfa2BHaMZ1FT5cjKX4lTjA5URM2tgrywQ%2B23mU56UwOi6wB0tq4310cVoQqUGNliEIxE7EuD%2FkNF4IukA6NbKQCV%2FVwdR0VYnXMNsidEeKMLBgWdC%2FbVDaNmao7bQF0MFojNFKNy5wGhyniVvOo2A4h84FFb9nBd46lbncLH%2F4h36YqU2wTayHPAUZz8AD87O6egE2rdp2P4mgHCXDQqSogQNDyXlLeHHtHY%2FTVZH9x%2BdIdy5k7B9b59doNA9UjbHe0HZXV9fEEP6BxqTFMPqwXNKS6ymoYhrisu2KYksgyXPYsfgxb6rNTLj%2BUyi%2BsRf9wPetYsm90nRLeqbXITsjddUVBkM4EMIi97r8GOqUBqLaZF7%2BxOHseY2wUKWLY74yD4ViBBTTKv0Ls5pLPVvLLTaBYQdv%2BnLR5iMQnj1l9PJD4vIhekAfraKpQH8IO7KsY68v%2BQiKipQwS%2FKOGK07K8XDKDh%2BmRT1606FhV%2FmFNJ5nksufckHFke5sYMoJohGVYnkqXQGP3pT86LM%2BdJNMNcv4dUmEBKfn2uvQPgZ1OkiOCoSFWJGXDJ9%2FEboZCWaqW0vC&X-Amz-Signature=05298e763717bce0a20e022942b529d374b7cd5dec6e83db995ce45a02a8a0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MIITESP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH840CReqMGREZ0R7z%2FxtZlux9TtHItSn9HtEmw287sJAiApAYJGGpR%2FuiRUZzFWz3M3X5pQMMQN6hLFgtNBBrDvEyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzTrSb%2FWpHKuhsbI0KtwDL778r9tTdXzZLXkQeQ4%2F6sA1qfHQRul79TMWmEuH1cE8X9oNMiJ0JGltCiU8Ud7TZOn2rBxB5QW43sFIhtnAZ6VJMseL8mLFThNcyMqtmnxpp2J78a3dTRZ3Epx4bcLG7xpSaO%2FZdSRnkPC%2B601xaUet0CA532YNe2bzDm2kiuMHrkESAnob9H9Yprd6yIMjTTMT0Pbbg91COyazxlOdX8MII5Ve1%2B%2BvBC9PXlOMmYI%2BvpW22q4CpCNfUcpigoREFWWYogVV9yISksJEEKk5mpiiEbC6eRyLFP86WiQxhXM9MGkzU%2B%2FZNhCbky0xCedk1YlfidnNB%2BxAQyYuqi0WyYM4QSd5MT4gIYrz3RNPjqfFa%2Fpz8tJn%2FNKIb6KbFYfF7%2FmnvuR4MNNGK2uwf%2BGkhWZlHd3OHyO0APtyZWxASmcaA%2ByOKU3HGHtSllgyuZ0SPOSzuYmSVPrCsXAjl9aFmlBgONyz2FfWnWqPqiNLaJX8qFz4WaHDRnUw6K8cmqTeC6BB5D0PEetjD39W8KdUCe1fP1kmRGFXLXFGjruKCjZ4jn%2BoViP8jGRG%2BE1gQ%2BQc3gm4cmIEj%2Bv9Fkvf1iDXKHYvKbpx8U5sIdpAnE9uIZwVY9SqwkqTolbolXAw8L3uvwY6pgHEW2WiLpmCofbWnWeqOjKWqIpNsdvoEUqn7uXDbzUSH9gLi7Pqb0GtCOeZUGSeNc%2Brt%2BZzdYpI%2FAIchYbonaxh14h880YJnTwCptTcsHGDotEP8LdpH7f8RdCY4viOisXhEV2Klo9W9GNwNVe5MpKBevUagYuKaSbR0nBGN6KzWsKlSKXlD%2F0L%2BA%2B0U9IeOl7OCfkyaugLdrYnTJ7wyoR4l9tU9UQA&X-Amz-Signature=3816b01982cfddf527b9b20a7273ea85cc927af3c65b88a7de310032bc09fe85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ULQDHE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC3LT8X%2Ffl2nqwauX1x8fdMNyFqPpTx1BfWBbnI6Qt8ngIhAL91dHR55777oB6ZfQMpqu7iXlIwOrVUdMvw%2F4w6pKwvKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9eRbEPQaZqKly6Mq3AOUEnCONvppQHs5xxBXD8jaNkum%2BaO%2FZE8906gkRP3K7Jn46FVYgp8jisE5xhzdg%2FuznOeIY6MhJKvB99W5rWlplzIedncq%2FICVyc8tlyfzRY1P%2BFPdYd66opeu3feAsjyppYwYLrGQJbT%2B8Ot%2FiFSXLEHKTkFH8%2FUjTMM7B6tvcCOm91cfrjDaZVeLW3Z2ctjDkaWjFa3dYtxdPOLsYGyPTPj62Y2pOus5C3B8PAKn0B%2BG8V6hq9Dphcv%2BjMdFkhgfmLR3q5tJLUXBVpdNXAfe6nRqjYRWlhuFPZz%2FK4laRRbwiqve3sWO4XvJ9mIScbBIrvcehrENKX3pw1yS0gQcI2tzpJC%2F7dxMXIJZBFWU2%2Fm6zftoIdWz0YDTwfFIEaW7rvGtdDBlxPJudwy0%2F3NzUmuP5YOQyXouotWnDz1WQvOZhPC6eDk5wjqZe5eSvx4XLpailDKykZ6JFTdpHBfwue7IczRUeOM6wC3Jse%2BFiHWIIr%2BnFqjKv%2Fyz5DhjiMZURSkONNNoUjSVZlzPMTc62Kc5RHDzsg01zoLBuuvk6nARzx1RVQbAJShV2F3poi8WQ6Huz8o83QEaXBWgyCBP2WTs8jQyRR9GW%2BNJ2uP36Bt6i%2BhaW0Ao0BHfzjCrju%2B%2FBjqkAat3eLVsIAnipeUmHAsXZZIQjlR5huKBVOwzvDQczSnS9xsQ9le3fdOfRl2snQ%2FFiLicgJNBOxBOLWqiHCZ%2BSnE02q1oR1VwyiCI%2FAS96D3nIqgc3Unh9%2F2Wrguw8x5vaFwG%2B6vQaEvAWWgF9R73AgdYAZMoxOWWMx6g%2FxtMrrfxZm%2Fa4ql%2F1R%2FSly0yxnd606kJ%2FthNYX%2Bcd2ayaLSk%2B8A46HlK&X-Amz-Signature=5ba78236e8bb5fbf3ac49389dbf5e2d31e923c92d306de8d1496e12cd0676b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
