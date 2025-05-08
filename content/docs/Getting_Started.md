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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAYWU2N%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2FKeMsz1UtwDdTZc%2FGFJYPmM1LXO9pOnOKvsytoVkEQIhAISaJZfVRNZY0qL%2FDXsocjaUM6bDF5LrJgLWEMPRZIdEKv8DCG8QABoMNjM3NDIzMTgzODA1IgxN0zEWiwDVYin3U2Mq3AO%2FeGmY2zCw3kEvct6jLI9F3orugebQ0rbr%2BIEbvaH2QsuY4yDUDGeN3mt5DaAVVY5jAfybVBnyvmSFrUMFQfxPmSdh9DAWpj8SO01fsVkGoobV4NHzS4y854JCSGIyrHyq8kBXTWZj5H9hMGumCmGpainmKePtfKvRyqoIyPQkNpfQQUVcjiD0ZZz%2BKjUifWj8cW3GXkLihmD6VNrbUMwd1tvNUWGlqN5LmJP8%2F3jOZNtRM7X7tg1ho427yrtUtCI82Wuoy13erC6W92uuBjaPcXo%2BYLmPD3otmT3TiYvBAsBLO2%2FfwRkyxL%2BvMgXytDX%2BpgvajMGx6U5qEBTmJlvVQyxlBttUpZGkwLY%2BtGcvjpL3RoFfyyqFIQzaqqE3SK%2FVHTmAKABZynrcSPsOWTIoOiCANF0mduOnpj7bxhcCj4UT8BMjwBOlltRh7RMBl2PdYQ91Qny5WGvfioFoG2Nj6TmTdtSOfBM4Z%2F0kuF1PfZFh%2Fw4yzdau2EaYccQrSnBHk%2Bwv61eZUrlH2LikFDT9bqQ9fAiO3Wn389dtDvfR9qQqL4Mm2xlzNgcu5Jqr%2FzRHJexMv8uZSEOMhIPdvgOd01Q4xsjQGsttolXQIu9RaRw0PBBR8CqM3mV%2F9jCRlPHABjqkAaXQL2BaERPlW4XwjaNe6FTWs56UqbsMDnFy9HNNBbrUyE5Pcq2FQjhRHZ249svth0aE06syFwmvEyfU25M3UHmHm9Ct04mq1S09CMNWrXfDZylaFw1aYWlMYV%2B9GD8SDfzYBi8Mo4q0DTO8nQYYAXA0cDVkTU4SIiyeNfzXRTVP%2BGtvFFPh3aDzKFzV2Xokq4Awsyh7pCy6ATQ9pU%2BnbUdFSdS8&X-Amz-Signature=b97bb39a9d1dfcc7ed156703e138a3fcd47aa19f1e2fdd8e5060fcaebe3f82b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAYWU2N%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2FKeMsz1UtwDdTZc%2FGFJYPmM1LXO9pOnOKvsytoVkEQIhAISaJZfVRNZY0qL%2FDXsocjaUM6bDF5LrJgLWEMPRZIdEKv8DCG8QABoMNjM3NDIzMTgzODA1IgxN0zEWiwDVYin3U2Mq3AO%2FeGmY2zCw3kEvct6jLI9F3orugebQ0rbr%2BIEbvaH2QsuY4yDUDGeN3mt5DaAVVY5jAfybVBnyvmSFrUMFQfxPmSdh9DAWpj8SO01fsVkGoobV4NHzS4y854JCSGIyrHyq8kBXTWZj5H9hMGumCmGpainmKePtfKvRyqoIyPQkNpfQQUVcjiD0ZZz%2BKjUifWj8cW3GXkLihmD6VNrbUMwd1tvNUWGlqN5LmJP8%2F3jOZNtRM7X7tg1ho427yrtUtCI82Wuoy13erC6W92uuBjaPcXo%2BYLmPD3otmT3TiYvBAsBLO2%2FfwRkyxL%2BvMgXytDX%2BpgvajMGx6U5qEBTmJlvVQyxlBttUpZGkwLY%2BtGcvjpL3RoFfyyqFIQzaqqE3SK%2FVHTmAKABZynrcSPsOWTIoOiCANF0mduOnpj7bxhcCj4UT8BMjwBOlltRh7RMBl2PdYQ91Qny5WGvfioFoG2Nj6TmTdtSOfBM4Z%2F0kuF1PfZFh%2Fw4yzdau2EaYccQrSnBHk%2Bwv61eZUrlH2LikFDT9bqQ9fAiO3Wn389dtDvfR9qQqL4Mm2xlzNgcu5Jqr%2FzRHJexMv8uZSEOMhIPdvgOd01Q4xsjQGsttolXQIu9RaRw0PBBR8CqM3mV%2F9jCRlPHABjqkAaXQL2BaERPlW4XwjaNe6FTWs56UqbsMDnFy9HNNBbrUyE5Pcq2FQjhRHZ249svth0aE06syFwmvEyfU25M3UHmHm9Ct04mq1S09CMNWrXfDZylaFw1aYWlMYV%2B9GD8SDfzYBi8Mo4q0DTO8nQYYAXA0cDVkTU4SIiyeNfzXRTVP%2BGtvFFPh3aDzKFzV2Xokq4Awsyh7pCy6ATQ9pU%2BnbUdFSdS8&X-Amz-Signature=1841b0c852288258a292c257773f8fe82855f0c113b6e955594fd2733b8e2ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAYWU2N%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2FKeMsz1UtwDdTZc%2FGFJYPmM1LXO9pOnOKvsytoVkEQIhAISaJZfVRNZY0qL%2FDXsocjaUM6bDF5LrJgLWEMPRZIdEKv8DCG8QABoMNjM3NDIzMTgzODA1IgxN0zEWiwDVYin3U2Mq3AO%2FeGmY2zCw3kEvct6jLI9F3orugebQ0rbr%2BIEbvaH2QsuY4yDUDGeN3mt5DaAVVY5jAfybVBnyvmSFrUMFQfxPmSdh9DAWpj8SO01fsVkGoobV4NHzS4y854JCSGIyrHyq8kBXTWZj5H9hMGumCmGpainmKePtfKvRyqoIyPQkNpfQQUVcjiD0ZZz%2BKjUifWj8cW3GXkLihmD6VNrbUMwd1tvNUWGlqN5LmJP8%2F3jOZNtRM7X7tg1ho427yrtUtCI82Wuoy13erC6W92uuBjaPcXo%2BYLmPD3otmT3TiYvBAsBLO2%2FfwRkyxL%2BvMgXytDX%2BpgvajMGx6U5qEBTmJlvVQyxlBttUpZGkwLY%2BtGcvjpL3RoFfyyqFIQzaqqE3SK%2FVHTmAKABZynrcSPsOWTIoOiCANF0mduOnpj7bxhcCj4UT8BMjwBOlltRh7RMBl2PdYQ91Qny5WGvfioFoG2Nj6TmTdtSOfBM4Z%2F0kuF1PfZFh%2Fw4yzdau2EaYccQrSnBHk%2Bwv61eZUrlH2LikFDT9bqQ9fAiO3Wn389dtDvfR9qQqL4Mm2xlzNgcu5Jqr%2FzRHJexMv8uZSEOMhIPdvgOd01Q4xsjQGsttolXQIu9RaRw0PBBR8CqM3mV%2F9jCRlPHABjqkAaXQL2BaERPlW4XwjaNe6FTWs56UqbsMDnFy9HNNBbrUyE5Pcq2FQjhRHZ249svth0aE06syFwmvEyfU25M3UHmHm9Ct04mq1S09CMNWrXfDZylaFw1aYWlMYV%2B9GD8SDfzYBi8Mo4q0DTO8nQYYAXA0cDVkTU4SIiyeNfzXRTVP%2BGtvFFPh3aDzKFzV2Xokq4Awsyh7pCy6ATQ9pU%2BnbUdFSdS8&X-Amz-Signature=5751210c866d2df720737e706f01dc4bef2bd24770619ca4ec5a0fa77681bf0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMG4O45O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfswCYztRCv7AwDTa%2F0JJu21QMkM%2BZs6xkm9k3vHt5nwIhAIhX1Jc8DrtidVGlck%2BsE6Hzvu9FSmzwmWiXqHwDs%2BJGKv8DCG8QABoMNjM3NDIzMTgzODA1IgwVXGt%2BiYh%2BuXzh1ZYq3AMHfc4ECOAJ1sqWLwHVsikR6sLmvJsUiZC6OUOGEGsaYxsXORYD6t07XyoWlVA2Vqg495NvOcV6TOy1FWK7KwtXWU2pJI42qTzCcNTWLzvPYxTRfKv9C9rEJ3oaZYVyuB%2FPC0aLTU4bK4xdNlsBya%2BdDR%2BbM2GEq4djdgs7GpycL%2Br240glD6nYW0Kbr5eM6jHyrVWGOL7fQvbTEDOdm2DPSDHcVEOapagAEp7kQKTSQo8ZeiIpJzU8mv1CGyWfy800TeET7ve6vc%2FxSxQvDlveF9N618fJUy5Z5JcroXMur3meoLhgGW2zJaVJaZcA4KYM3suubyKeWT76gvQHRdGbaDjI8WZvQT7T%2BBdKe0yOwSsNzYxBqAhdsfSmiz7LrmnCUdRlvCgj3f0Y66tjVzSHeKTJSjEXx1CQxUJ6jCnIzm2cUmKf7djFUX%2BqERXQfQzoKZuq5kC%2Bk1sP4itYc4H%2B3joEz69mJUDTEyLgc1%2Fc7mMNRevmxYxunipiPEfd%2FvZj%2F%2F8fOIqXO9U%2BrfQ8CVgYQJMMVgXJol7qfD%2FYsA14jF6AkN9WFlkpapm1gF8YMdvTy2RTSE4LQr%2BTOrDOADC9AP3t9dAvyDuQ8F8krbb7IuXSVBIk1Vkb5sRuGTCelPHABjqkAdZQiCfamozf3yq8v24XFYA0a2D%2Fnbc0gEmKu07%2F5tqY1LXbooYkAA2N%2BqauHIHGOcXwGhTjLX01sslCmEbOkm9qzDyiP5aEc60Aso3Nucba%2Fx%2FglaXYEJvaYWwix%2FMCx6%2FrOFr0kZQxqR2fiJX2OO%2BQmG2pjd%2BDgG9hxqAqlr1dCjpvnibWZd4ETndaJZFUz349VwYncEDEDd1BJeMH3dZoqXJi&X-Amz-Signature=ef98ef1cd4685869ad10ba8dfd3a8d3cb69148c05d4daca44378c923bcb7fa67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZIYWW4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE5t%2BDLeeMEV3do8PbbikTK2Z9OhMVtno9MLe2J%2BSsDgIgA4tDiJPJvLzjDFmE6MBTf9ekHD%2FuXuwuv0GBFd14rVsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKpLLGND4qrebChXfSrcA9OkEmLJlBRI2YUH5utC8zIlxbVlXEyGT2YmHuJXtI7%2B%2BijCS22PRl5wVnbXhoHbprSZHOGZ2Xon%2FbFcELprPtWlHe8nL9qCBNF5IRHaZjEH%2BC%2FYQ8ZP0gndwwMWoMPZjsan6u%2Fhyqzr3sNTJoJLTKlvw4PZ%2BY89RR5FTKVRajRLUjKAZEPRpEMLaozPtZsq2%2B878I16mSO5bYJ16TJ9Jm7I8cnCU4VIkZnXlL9em3vWi6VghXTO4uqmHmUo6Z3LdoLZT%2FyYazfLHnkray%2B2Zx2ZE48dE4cOnghx%2FCshVkKOf8vb5YQnnaocwTscb3sXLOegyiwbBL9WBdfewUPPLwpCMRLOAuexoRq%2F1aT1PNNyaxwKtgDs4ACMl9ekwUmpin2BvvoQ0pbe0xoXVSqWF%2B4NuIuvuxCqM0kk6SMnWYtac%2F5zDiO8BGfYwlld1j3sD4TYA92iKNxTH6wjQ3u%2B1zmvJkw%2BN8meyg0yLWJYgOLIClFO%2F824eb3s9azxWIbt6uvIZjub8qkhq%2BH773oiTJIUEoiKUzwSQrQciFiPtSL%2FR6RMlc6270qMnYCgiN4SgpwTsmVkyrTEoPbeZW2ipfApRUjJPvXApoYvGtIaGCAWJ0ZN9Am4OlXLk4yfMIKU8cAGOqUBq%2Fcf6p1mR7ROf7ilkYXyxpahKrrC%2F13SBLWHFM%2FCg2cR0bVZg9Wweq%2F08dREqW6eNlZIpEU%2F1ge6qpY85VrT%2Br0JhsvIE2%2FarWFfkMDbBNnZ1i6VGfe7Lr6w%2FxLthDc6pIbaUKdxcvT4siYXIwCHYf9Q0evX7U%2FCm3pT7qu1VoRohwqpoEagEwB98w9oWCk%2FELiSRo5L8ZVlMqrB6X7AI%2Fz1VMxh&X-Amz-Signature=febc0a12410124094002b784d6f822fc6ea030e9e3377cd08a2aadf912f7f524&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAYWU2N%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2FKeMsz1UtwDdTZc%2FGFJYPmM1LXO9pOnOKvsytoVkEQIhAISaJZfVRNZY0qL%2FDXsocjaUM6bDF5LrJgLWEMPRZIdEKv8DCG8QABoMNjM3NDIzMTgzODA1IgxN0zEWiwDVYin3U2Mq3AO%2FeGmY2zCw3kEvct6jLI9F3orugebQ0rbr%2BIEbvaH2QsuY4yDUDGeN3mt5DaAVVY5jAfybVBnyvmSFrUMFQfxPmSdh9DAWpj8SO01fsVkGoobV4NHzS4y854JCSGIyrHyq8kBXTWZj5H9hMGumCmGpainmKePtfKvRyqoIyPQkNpfQQUVcjiD0ZZz%2BKjUifWj8cW3GXkLihmD6VNrbUMwd1tvNUWGlqN5LmJP8%2F3jOZNtRM7X7tg1ho427yrtUtCI82Wuoy13erC6W92uuBjaPcXo%2BYLmPD3otmT3TiYvBAsBLO2%2FfwRkyxL%2BvMgXytDX%2BpgvajMGx6U5qEBTmJlvVQyxlBttUpZGkwLY%2BtGcvjpL3RoFfyyqFIQzaqqE3SK%2FVHTmAKABZynrcSPsOWTIoOiCANF0mduOnpj7bxhcCj4UT8BMjwBOlltRh7RMBl2PdYQ91Qny5WGvfioFoG2Nj6TmTdtSOfBM4Z%2F0kuF1PfZFh%2Fw4yzdau2EaYccQrSnBHk%2Bwv61eZUrlH2LikFDT9bqQ9fAiO3Wn389dtDvfR9qQqL4Mm2xlzNgcu5Jqr%2FzRHJexMv8uZSEOMhIPdvgOd01Q4xsjQGsttolXQIu9RaRw0PBBR8CqM3mV%2F9jCRlPHABjqkAaXQL2BaERPlW4XwjaNe6FTWs56UqbsMDnFy9HNNBbrUyE5Pcq2FQjhRHZ249svth0aE06syFwmvEyfU25M3UHmHm9Ct04mq1S09CMNWrXfDZylaFw1aYWlMYV%2B9GD8SDfzYBi8Mo4q0DTO8nQYYAXA0cDVkTU4SIiyeNfzXRTVP%2BGtvFFPh3aDzKFzV2Xokq4Awsyh7pCy6ATQ9pU%2BnbUdFSdS8&X-Amz-Signature=15a5f8d4a9c7f26ecde4e6f4a89f4cd764b214a846e57451ae5a0c45cbc77e76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
