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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXV4XOCP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiNILL81eol9BbZKMQ0AM75psgZNyhg0uWBOY1IZN%2FLAIhALI0so7%2B7PLCNYaDGbF0r7GdumDCnSPec2SvFAE%2FCYAJKv8DCDAQABoMNjM3NDIzMTgzODA1Igwk0UkwZO%2F2RTmMzuEq3AN9RD%2FkRQaMIHqIXeyr7xZAu2AqE9H4KdiYTqxaR06lG11o0wp%2BxukaMX8Zs7KhTcjHQFhZPUzsNmYR7Y66wi1HL4GeQm%2BoKZr6CAZY4sPmI2o1kun7K%2FfHUem1oN54Eu5CuYbuLKgnWpOaSifF36vwQXdjJkObBcMyqYjZYcQaQU9TLSPdUL9eSKRg8OZgzokE0%2BxpayM0HUhJNprF%2FREfcO96pNwvV%2B4sZN9AdXb2VfSan0OZjWpcK0jrjDrZqYAUzBkog7kwd0AY5djiW34qEdLQoYpKXndL8pojasLPMFG%2FR7BKJyZoE78gtif%2Fb8IGjBs7aPjmKSZTvJ2947mzWWLnFeu5qYYgQvIcwXt23Ba8l%2F0kZVOnSvU6TfdPqjRBsSkueHwjYQ5me6wrAs5bf%2Fsdafn0MU2AFfIQLrwiuRG7h6OxIECd8ShNAGqFfltlkhOVf3uSAvEVSEHN8vPHM%2BkEbD6X6%2FcyzTUKMOcw5RWIE%2FsfywG%2FM5r4YxXotvVtUSWxVlg2UUkXT%2Ft8K67uk2vrYO2OCGdSyZAig6nlL35D3P%2FV4ma%2BZU6aAkjuK0Psfh8CS0udckWcZw1XxzetwK0TuBQRyaoKmQWsn6PRixzAgqZBPQpeNueTiDDa8Ka%2BBjqkAV7C97cYbfv1p90IvT%2Fqr7ZMkT79cxwAO827eWGky923HcWI8I5ZoXbpoG9RPDakEeaVoC7eq0zpX9C5Utm6H7zzfarZeawnKNC8ay6FFMP5HBnj4IvTAZN9PvH9hCogKcTWFUTJ9owEsBj8miakgZNYBxkTdQ3cX7CT1yZuBw2wVQKCnk2k8d0OZ63yjBdhgNHKCpDkL9H8nniOMXpcNzmsM0o6&X-Amz-Signature=2aa03d45ab9443713bca202e1c706fde7ffe1530268366d5c64c6a1d118fa894&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXV4XOCP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiNILL81eol9BbZKMQ0AM75psgZNyhg0uWBOY1IZN%2FLAIhALI0so7%2B7PLCNYaDGbF0r7GdumDCnSPec2SvFAE%2FCYAJKv8DCDAQABoMNjM3NDIzMTgzODA1Igwk0UkwZO%2F2RTmMzuEq3AN9RD%2FkRQaMIHqIXeyr7xZAu2AqE9H4KdiYTqxaR06lG11o0wp%2BxukaMX8Zs7KhTcjHQFhZPUzsNmYR7Y66wi1HL4GeQm%2BoKZr6CAZY4sPmI2o1kun7K%2FfHUem1oN54Eu5CuYbuLKgnWpOaSifF36vwQXdjJkObBcMyqYjZYcQaQU9TLSPdUL9eSKRg8OZgzokE0%2BxpayM0HUhJNprF%2FREfcO96pNwvV%2B4sZN9AdXb2VfSan0OZjWpcK0jrjDrZqYAUzBkog7kwd0AY5djiW34qEdLQoYpKXndL8pojasLPMFG%2FR7BKJyZoE78gtif%2Fb8IGjBs7aPjmKSZTvJ2947mzWWLnFeu5qYYgQvIcwXt23Ba8l%2F0kZVOnSvU6TfdPqjRBsSkueHwjYQ5me6wrAs5bf%2Fsdafn0MU2AFfIQLrwiuRG7h6OxIECd8ShNAGqFfltlkhOVf3uSAvEVSEHN8vPHM%2BkEbD6X6%2FcyzTUKMOcw5RWIE%2FsfywG%2FM5r4YxXotvVtUSWxVlg2UUkXT%2Ft8K67uk2vrYO2OCGdSyZAig6nlL35D3P%2FV4ma%2BZU6aAkjuK0Psfh8CS0udckWcZw1XxzetwK0TuBQRyaoKmQWsn6PRixzAgqZBPQpeNueTiDDa8Ka%2BBjqkAV7C97cYbfv1p90IvT%2Fqr7ZMkT79cxwAO827eWGky923HcWI8I5ZoXbpoG9RPDakEeaVoC7eq0zpX9C5Utm6H7zzfarZeawnKNC8ay6FFMP5HBnj4IvTAZN9PvH9hCogKcTWFUTJ9owEsBj8miakgZNYBxkTdQ3cX7CT1yZuBw2wVQKCnk2k8d0OZ63yjBdhgNHKCpDkL9H8nniOMXpcNzmsM0o6&X-Amz-Signature=4f37430b2f5ae012363707ed2b9d1a1855d3ee499a7aacaf038320badcaad3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOZGEKE%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjwcfzApF8A1aGt6%2Bmk2JNf%2Bs73e%2BDBzE5htjkRPUEwAiEA%2FhEudabSNuSMBal4vOFLa25hs7mx9YuAjIiWmUgEzlIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKDKRX4tUJl7K3a1xyrcA33GALUaPZG16zcxjDYFlRTTYEIkJIpuNeY5StKvigUSvWC10%2BeKfqfGJgzeWIUga4GmdVDJdhqDuJ1bQKAAZr9cB0jlmW%2FVKsFbOaWujJWTUxrEZ%2BKA2bmsdW2XTkhHOhFMpRk3w1Uh%2B8XL0f%2F%2BMCeLb81%2Bn1OZsVDeztxkVKeiederArwxqD2rCAbL5u6EqvfF%2Bx9KbXn9xFwpHBTtL3PCJZThccpMdDuKUZ5qGdVOsOI%2F46IUailtLgBZHFzexSfcI3hn5JQnbZe5fTmLCVlcK7P20lsXomrKHQwdyLbfww%2Ba%2BCrYz6WtGOD7KF94cfvyfed2gxfwna5f%2FVIvnN5X1ukaX4lDb%2BpSW9dq39ZqUizB92gkZnRrCyEt3KgBrVx8yeAE4DRd3CJHGXeiEH2nR3Ac76ofFV0pKsHcxLKbJgNmZm2%2FGhJ1SQRS7vkP0S8JmAdDtYcP8xOtsX5i9eF6WF%2FZaVQxotO84CNKwT1fdyyG2B0yWlTClJLprrEXAWPgzd9z6%2FVhHL3lu3DUkm%2F8gR3mlYKnmGloDNaqtBRHCyeq1EQFY1RzAgaXgpGpzhEwRr7H6Zc7EabPSmhydFhgHvi4jUkOrLOiaIeM1xcpPzCaAAIc%2BFmiys2xMKnwpr4GOqUBFfS3%2FdBfsCJSTJiLsd%2FtMfiOwsRUQUTlruXAQP4FspTPx0eIxMENizR2yFHqCsvuHoayY1gGT%2Fu%2BV5h1suXXIqXfKKvsmbclpFQI1Cdzs9OKrN%2B%2BUtpz0OqluT%2BySbayRY%2Bs1LvLkDXkO9Di32H8hBp4bBFJbKIaSzKOV%2B7LgtI8I1dd%2BlkhbuHdf%2Bi7kAp7gvS%2FtFwD8f7a8D6%2BoI0xrJY2OLEG&X-Amz-Signature=abf40fe51f0c4be0e4161106bb5e39509b536a0c73f28f946b101efa9c8159a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK3CN6RV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8MDq1U7gjDXPcOPnYEWjMe0nM9Y8QACjyYhkcUcDdEAIgBep8lLQXxQUABeNxd1pXuKZ1KfbP2dwE5i6aklC9MMsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDAoqImuAx%2FARBjDb5yrcAxF8hqfVmnNX9jFC3dTFZTElfpYlBUGdAZY7b6ikCEAQoDRHVcgirNqnTkEc5D%2Ft1cJuMBIlsWIyJyhRjYq%2B5TBW%2BUSVZ5tZW6BI4d2nK041zkQISiqeAQlVgCzTsE5TB%2BVZw4uIGilRIa0GjDpGhIFSDs%2BFIT57xsE3O4YoKF7OebXxkrLUZlVyNoB614aGx%2FIIOew04IjnIyOEOaARGR7monTUwMGuz1z4ne3Um%2B6lvGBcSEj89TTq9cx6bvAbi9SwSuSCg194wJofD%2BtGzMjUqQrIHWi%2F6J73j%2BITpRddUM9galQeoYw6jKpNQuvi11Q43HF6XCykojI81bxJAWbWq00VH%2BNy1qaaBoT%2BnjVyH5t3Txq0p16SGEDrSCqIN6x%2F5smNzSBK4pPzM55gr3hJ8J98BrFeKF2YMXTe7aU8nrC98VPfFaymgAi6ju1RX4lOXdFQB3Jns94pySXu2uHPotx1UkTxEkUusCxGIXqndKqDGxRd3lU1j58uz%2FHXw0BncZPTlw%2BOzHuaCZQfVlTSi0CJFff7FHkuUgi%2FjzbsxODPARAJ2X91UjbVWFUX28cx1wG9fy3B50njn44h%2BuPR2sjuo6LswDUR2o9dmsqdt9%2F86QLfjFTA%2BM7OMNrwpr4GOqUBmgtbkMRkSIXq71mU1l3C%2F8FDNGKLWQk8aELbocuv2aPR8sfqwoPm9WCGr0%2BgcqNvlLLke2J6QiS0cO%2Flh4mUWkokBt6Ya7RWfaJjX%2ByNYj1BcUv%2FuT%2FoOArh%2FouJJ%2FE6MmuslPZkDUcbGkT%2FLC99oe%2Fm7VLwzG3dJsC4fHBF0Iyhd6NCT1onPM%2Foo1OhXAl6KRqWuMF9bC1GbVNmKacnxAUnF73S&X-Amz-Signature=d4b9b28e9dadd242ab199a97414e67bc2b7f6048ee0c702e6724e1fae155e67f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXV4XOCP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiNILL81eol9BbZKMQ0AM75psgZNyhg0uWBOY1IZN%2FLAIhALI0so7%2B7PLCNYaDGbF0r7GdumDCnSPec2SvFAE%2FCYAJKv8DCDAQABoMNjM3NDIzMTgzODA1Igwk0UkwZO%2F2RTmMzuEq3AN9RD%2FkRQaMIHqIXeyr7xZAu2AqE9H4KdiYTqxaR06lG11o0wp%2BxukaMX8Zs7KhTcjHQFhZPUzsNmYR7Y66wi1HL4GeQm%2BoKZr6CAZY4sPmI2o1kun7K%2FfHUem1oN54Eu5CuYbuLKgnWpOaSifF36vwQXdjJkObBcMyqYjZYcQaQU9TLSPdUL9eSKRg8OZgzokE0%2BxpayM0HUhJNprF%2FREfcO96pNwvV%2B4sZN9AdXb2VfSan0OZjWpcK0jrjDrZqYAUzBkog7kwd0AY5djiW34qEdLQoYpKXndL8pojasLPMFG%2FR7BKJyZoE78gtif%2Fb8IGjBs7aPjmKSZTvJ2947mzWWLnFeu5qYYgQvIcwXt23Ba8l%2F0kZVOnSvU6TfdPqjRBsSkueHwjYQ5me6wrAs5bf%2Fsdafn0MU2AFfIQLrwiuRG7h6OxIECd8ShNAGqFfltlkhOVf3uSAvEVSEHN8vPHM%2BkEbD6X6%2FcyzTUKMOcw5RWIE%2FsfywG%2FM5r4YxXotvVtUSWxVlg2UUkXT%2Ft8K67uk2vrYO2OCGdSyZAig6nlL35D3P%2FV4ma%2BZU6aAkjuK0Psfh8CS0udckWcZw1XxzetwK0TuBQRyaoKmQWsn6PRixzAgqZBPQpeNueTiDDa8Ka%2BBjqkAV7C97cYbfv1p90IvT%2Fqr7ZMkT79cxwAO827eWGky923HcWI8I5ZoXbpoG9RPDakEeaVoC7eq0zpX9C5Utm6H7zzfarZeawnKNC8ay6FFMP5HBnj4IvTAZN9PvH9hCogKcTWFUTJ9owEsBj8miakgZNYBxkTdQ3cX7CT1yZuBw2wVQKCnk2k8d0OZ63yjBdhgNHKCpDkL9H8nniOMXpcNzmsM0o6&X-Amz-Signature=bc57800bef7e66c0d1f02be2ca4cb317954b13894438eead763f7662545b66c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
