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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45ME62C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFUnxwIwYkwmlnGdNkWSZ70ALPA6xH9PyFTTYI6pjax7AiEAikRNFeo%2FN8pqi8nO3JqvnFMYlxwR3Jt6EdtZZ%2FIABkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5gScuONb8%2FE1vLNircA2u9wUVzduyJ%2BxQJ9NhOR824USbGa9bKAhG%2FJGIc7lSmy5alRuKvDtIkeVi%2FsFwyZC4%2FQ4N1HlWpTpno4%2BUxNdf%2BVray5r99NxKbAuTojGYNrY5Q8js%2FzaHdskxHJTOjenhbh0AgQEVvCbB3GiexWT8TyNWZzg5bY4k2bxLhGMX1M8k4Kx7F6ZtwnvCjhn9vH2Vtu13hfOQZ1lB%2FPCHz3A0egS0lv536gu5udbCOUlzmTOk6WJdT1Op%2BM8%2F9p0aVroNfWNnM2GUrmq7Mrx3qozZUV0zxr%2BP041n%2Bm1yqvQJPRcx%2FK71wmRJRdyAgi3TI72OTRIIyvGNFsb2ew40D6nfnvnaE4Rltb71MDdGJBlqhYg%2FhUmGtJDZhFAFAw7UkVK%2BeffmyVB%2BB83obkcO9oTlelRzfdKkMTn%2FlEO1Gh0d5Kx3cxXy2BK1jWoegUA6A%2BRKA%2FprCTrjbnxWR3pt7rdZ8S%2FWvZMJI4WmnCMH9NNa%2Fby7xxQEDTAp7kfn4H3s%2BG5x%2BGJWxh8Zze7fFhhzBbxKP3MLygsg%2Bx6DRtpP%2FWePj9VR24atkgUISnENOgwX2F2qbIxAUI6YG0Nd9f%2BVGBlwaCBlfcv3b%2BCXLQaUcwrGIy7nbmnpsjc%2F48SpLMOqgy8AGOqUBLHvHogkyEuG6fnOaqINRdy%2BAC5wCeRF6GKMd97XPRx%2Bzu1z%2Bx2Q%2BfvNkl4FEwJ2xohw21GNSwUr5zl3lK6g83JVs9eUn%2FJT9wy8yRCvOXAO5wMaFUX8NoZTNZZh%2FqjIgCU9OR43AfVMWgHreZuf4hC8mBFnRLe27Ep8A4ueoFnFD9ZXa9e6gowNG5EYPDguqDah0pqKU55g1O1K%2BCR9Jiqe8cgA5&X-Amz-Signature=05566a22fcd3114e911776fcf5678997b19e61b9007dd0d335460da8b5b75c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45ME62C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFUnxwIwYkwmlnGdNkWSZ70ALPA6xH9PyFTTYI6pjax7AiEAikRNFeo%2FN8pqi8nO3JqvnFMYlxwR3Jt6EdtZZ%2FIABkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5gScuONb8%2FE1vLNircA2u9wUVzduyJ%2BxQJ9NhOR824USbGa9bKAhG%2FJGIc7lSmy5alRuKvDtIkeVi%2FsFwyZC4%2FQ4N1HlWpTpno4%2BUxNdf%2BVray5r99NxKbAuTojGYNrY5Q8js%2FzaHdskxHJTOjenhbh0AgQEVvCbB3GiexWT8TyNWZzg5bY4k2bxLhGMX1M8k4Kx7F6ZtwnvCjhn9vH2Vtu13hfOQZ1lB%2FPCHz3A0egS0lv536gu5udbCOUlzmTOk6WJdT1Op%2BM8%2F9p0aVroNfWNnM2GUrmq7Mrx3qozZUV0zxr%2BP041n%2Bm1yqvQJPRcx%2FK71wmRJRdyAgi3TI72OTRIIyvGNFsb2ew40D6nfnvnaE4Rltb71MDdGJBlqhYg%2FhUmGtJDZhFAFAw7UkVK%2BeffmyVB%2BB83obkcO9oTlelRzfdKkMTn%2FlEO1Gh0d5Kx3cxXy2BK1jWoegUA6A%2BRKA%2FprCTrjbnxWR3pt7rdZ8S%2FWvZMJI4WmnCMH9NNa%2Fby7xxQEDTAp7kfn4H3s%2BG5x%2BGJWxh8Zze7fFhhzBbxKP3MLygsg%2Bx6DRtpP%2FWePj9VR24atkgUISnENOgwX2F2qbIxAUI6YG0Nd9f%2BVGBlwaCBlfcv3b%2BCXLQaUcwrGIy7nbmnpsjc%2F48SpLMOqgy8AGOqUBLHvHogkyEuG6fnOaqINRdy%2BAC5wCeRF6GKMd97XPRx%2Bzu1z%2Bx2Q%2BfvNkl4FEwJ2xohw21GNSwUr5zl3lK6g83JVs9eUn%2FJT9wy8yRCvOXAO5wMaFUX8NoZTNZZh%2FqjIgCU9OR43AfVMWgHreZuf4hC8mBFnRLe27Ep8A4ueoFnFD9ZXa9e6gowNG5EYPDguqDah0pqKU55g1O1K%2BCR9Jiqe8cgA5&X-Amz-Signature=92e2b016a5322bfc28fff1c3dac29109fa12f044c5548ee3c6d356cbcd33caf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45ME62C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFUnxwIwYkwmlnGdNkWSZ70ALPA6xH9PyFTTYI6pjax7AiEAikRNFeo%2FN8pqi8nO3JqvnFMYlxwR3Jt6EdtZZ%2FIABkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5gScuONb8%2FE1vLNircA2u9wUVzduyJ%2BxQJ9NhOR824USbGa9bKAhG%2FJGIc7lSmy5alRuKvDtIkeVi%2FsFwyZC4%2FQ4N1HlWpTpno4%2BUxNdf%2BVray5r99NxKbAuTojGYNrY5Q8js%2FzaHdskxHJTOjenhbh0AgQEVvCbB3GiexWT8TyNWZzg5bY4k2bxLhGMX1M8k4Kx7F6ZtwnvCjhn9vH2Vtu13hfOQZ1lB%2FPCHz3A0egS0lv536gu5udbCOUlzmTOk6WJdT1Op%2BM8%2F9p0aVroNfWNnM2GUrmq7Mrx3qozZUV0zxr%2BP041n%2Bm1yqvQJPRcx%2FK71wmRJRdyAgi3TI72OTRIIyvGNFsb2ew40D6nfnvnaE4Rltb71MDdGJBlqhYg%2FhUmGtJDZhFAFAw7UkVK%2BeffmyVB%2BB83obkcO9oTlelRzfdKkMTn%2FlEO1Gh0d5Kx3cxXy2BK1jWoegUA6A%2BRKA%2FprCTrjbnxWR3pt7rdZ8S%2FWvZMJI4WmnCMH9NNa%2Fby7xxQEDTAp7kfn4H3s%2BG5x%2BGJWxh8Zze7fFhhzBbxKP3MLygsg%2Bx6DRtpP%2FWePj9VR24atkgUISnENOgwX2F2qbIxAUI6YG0Nd9f%2BVGBlwaCBlfcv3b%2BCXLQaUcwrGIy7nbmnpsjc%2F48SpLMOqgy8AGOqUBLHvHogkyEuG6fnOaqINRdy%2BAC5wCeRF6GKMd97XPRx%2Bzu1z%2Bx2Q%2BfvNkl4FEwJ2xohw21GNSwUr5zl3lK6g83JVs9eUn%2FJT9wy8yRCvOXAO5wMaFUX8NoZTNZZh%2FqjIgCU9OR43AfVMWgHreZuf4hC8mBFnRLe27Ep8A4ueoFnFD9ZXa9e6gowNG5EYPDguqDah0pqKU55g1O1K%2BCR9Jiqe8cgA5&X-Amz-Signature=a14c8e2b327fc7910a42d3e672d6da33382733e2228ace751d70c92b82049a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7DTP5J%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEtDfcJa65C%2BWRDCP6tA2SEm864xjXLKnypS4SVQmZuEAiBCw7CIb5YeTPdF3QlibMqhsKUuKppiGoPWXoFIDRXsdiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Do2BIZJDitTaLg5KtwDTiI%2FbGDxR%2Bg52rd6yNnky1h7gqHd8IPN0y4mma8eOxfG7GvQbkCKxVlrivYhVzdTzQXMtK4oxCwQIHLZ0mB4NmJPQKjc1qwH1MEyiZUtNJNJBNDAtBlWaiYko7rVdKBoN1dFt7pcwESxizSPtYAn7CYcDnbMpfxTSj44ehn2XVxQXA5EzEE9UPFCkpE6zhDZ3Y52hxB2wLVIZSlf1FADzzkr%2BweQF0md6wXizNtxqospsiIW4Nnigfxp%2FKDVH6wKffaUAoNDX1MR6VQGowIjD3ScZNiECAR%2BjcgNOvduy0g8%2BA%2FUQ6R2LVIjuM0KajXVhTSFmmb6v%2FZMYiaVGYy5IoOekBcf3%2FPGAPKjJ03Iu4rqtzZrgnHFe7%2B4fACwd7T29sZnW9dTHv%2BwYg3tYDlzIzsaws4Q78W8uxN7Xty9CporoqnPyZoqItuQ3UiY8eNMHk%2FjOJ%2B2g1%2BAM6NhmYvh%2F%2F0KtDBPtgwr5KV7uz%2FcOHabt1PVoSTJtCPIFXk2CBYVyrJr1ObeggKipHpWr%2F4W4dYTEcEACsA7OfRWexUYVGsCiVNxtIIApSNm7hLIBye%2BDascvUi7hJn9qLz59Dz8gJ29sZCAQA20nGlKYQtdTWMMyDjQXyen5VcVtiwwtKDLwAY6pgGmdEQDuhs4BNPTP0oj%2FyKuzXkN%2Fg79I0x%2FTTgbLBtKFAPXDyqOQ9HXM%2BA2nSiygpBIUsn1c0CDbHi3tR3Lno8LhagDTATaJDh75W1%2FyTkN4ssuXRMf5HAYFSDt8Ei7m%2BaA7UeTogXrk7WvE7mWQ8z1eAsUlhfRfTpEpIBLVkfgYfg1X09Qt%2FNTpGoXcDy14G1TaZ1zvP%2BzB0HbPPsyUsnpTRPpxt0D&X-Amz-Signature=6bb20aa462e9e57c6640f30ea83722181ea80e8145be3f495cfe3285674ac8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCDHJDYU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCINeIIbJAVL4bxiBhlKNYK72VO8o7AG8h5qs5PpU85uwIhAO29j7I6u%2BnZuqabd2LXkpz1fYpt3LFgHiaq2iVHEISJKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkvtbmY8oS6okptcq3APrzH%2BEw3GjWLI9YzHqHH9zT3OmDip2u5Pyq2wC3b%2B%2FJ9Qe%2FtJQuX7BcQSNVCWp7GTFopkYWr5TPkJYkMPaZJNHU3nDY6TariztCSmPcUCmJWORhytc9IUww0kNbesNKCE4wX5Lac2ZTwRZGkN9O8JfSQSaiq8Q2T%2FmIhycWEcBvdvvY1Xi4LdNBD69Wz802kuGJvTJ7Xqe%2BcDeosaych4NPRG%2B2mPLj1C8rqsXMbXwfHgE14tLQ8ld%2BKuaPA%2F7BHjH%2FnJlZu2ie3%2B%2FY7ViyKYP2%2B%2BOSJUiVGZ%2B0ja0J6VLVVdYCseNl56e5dPsKR0XEZK04Dq5eE6vw%2BhFd2CgubgRYeqb7o5HfalR3TvHO9bA4MZubxdLpRNRW1Y9fVc4StjW2o%2FUq%2FPsV9AEuk11Pt8836mxAsiXy3mxBEZQEVCwk3UOnAYFy1sHQru8g99Z8STgj9CqoOk0pG5O1sb9X%2BATLMC4CZB%2FqjCCUilKzFDj7pfndsOxe7Xq0I2GWG0XnljmygqlUU3FNs4nFj5V2UKHL%2BpnPFPIlYb74y61CJBK148%2FmDlOIpl3fkVIkzcFR80hiSALmuOa5PLudPO1tfImGN9c1GYMFcyxTjHKbV67Rj%2Bry%2BOEPuHg00i2jjDgoMvABjqkAbQSvVrUgFr4bP2BcbwVgytaVpAXlmCsE5j3WMwPPFO%2BavbWhL8yy6OWpPdXUsGHw2WOXGu8tfLyA9hup7mwfXAD8d23rYqB%2FLvIm%2BCqV9xigAfMunEE3Z6YFHmVGVbIjw1dyiDr5LPKMZCwnOK0bQv5eCjc3eQF8zsZZ2tVRlDGxbPvAI14nVl7DNjKJ%2FAiSwCJa%2BcH1LOd2AoYbdsXeDxTNUZj&X-Amz-Signature=a0458a4dc1d71fed97b483c2e2782c89363e3e0aca932ad82aeb374f46956501&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45ME62C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFUnxwIwYkwmlnGdNkWSZ70ALPA6xH9PyFTTYI6pjax7AiEAikRNFeo%2FN8pqi8nO3JqvnFMYlxwR3Jt6EdtZZ%2FIABkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5gScuONb8%2FE1vLNircA2u9wUVzduyJ%2BxQJ9NhOR824USbGa9bKAhG%2FJGIc7lSmy5alRuKvDtIkeVi%2FsFwyZC4%2FQ4N1HlWpTpno4%2BUxNdf%2BVray5r99NxKbAuTojGYNrY5Q8js%2FzaHdskxHJTOjenhbh0AgQEVvCbB3GiexWT8TyNWZzg5bY4k2bxLhGMX1M8k4Kx7F6ZtwnvCjhn9vH2Vtu13hfOQZ1lB%2FPCHz3A0egS0lv536gu5udbCOUlzmTOk6WJdT1Op%2BM8%2F9p0aVroNfWNnM2GUrmq7Mrx3qozZUV0zxr%2BP041n%2Bm1yqvQJPRcx%2FK71wmRJRdyAgi3TI72OTRIIyvGNFsb2ew40D6nfnvnaE4Rltb71MDdGJBlqhYg%2FhUmGtJDZhFAFAw7UkVK%2BeffmyVB%2BB83obkcO9oTlelRzfdKkMTn%2FlEO1Gh0d5Kx3cxXy2BK1jWoegUA6A%2BRKA%2FprCTrjbnxWR3pt7rdZ8S%2FWvZMJI4WmnCMH9NNa%2Fby7xxQEDTAp7kfn4H3s%2BG5x%2BGJWxh8Zze7fFhhzBbxKP3MLygsg%2Bx6DRtpP%2FWePj9VR24atkgUISnENOgwX2F2qbIxAUI6YG0Nd9f%2BVGBlwaCBlfcv3b%2BCXLQaUcwrGIy7nbmnpsjc%2F48SpLMOqgy8AGOqUBLHvHogkyEuG6fnOaqINRdy%2BAC5wCeRF6GKMd97XPRx%2Bzu1z%2Bx2Q%2BfvNkl4FEwJ2xohw21GNSwUr5zl3lK6g83JVs9eUn%2FJT9wy8yRCvOXAO5wMaFUX8NoZTNZZh%2FqjIgCU9OR43AfVMWgHreZuf4hC8mBFnRLe27Ep8A4ueoFnFD9ZXa9e6gowNG5EYPDguqDah0pqKU55g1O1K%2BCR9Jiqe8cgA5&X-Amz-Signature=d43fa6e1273a05ead4f0076f1168fb085870d518e5060a733748e0a789d33128&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
