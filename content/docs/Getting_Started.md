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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWJKT2K%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxDk6HvlXtbRlOiJCcQrG3f3Jy0yP8h%2BO7ZFq1wu1DoAiEAnwLWOouLZIGdxgzyKTwxEkCiV3hbsX8IpMgoTY%2BXrcsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMph5B%2FPND%2BGWcIkoSrcA9KBuCyMu214Xq3SGyCRzeGhs6gASghjHS51jA%2BRgpSNB79Y5Sz4mGQl6AcbSgGsbbdFm6y65g5QP36FngvQAkryZ2PGf05BkPYzLjnwY44pqwKmrlD956%2BHuAV%2BnRr8b0R%2B0ajU9KMWDY622CzK0QzMJ%2BAIEF1kMiy%2BZy7woogB%2FSMF58fzEYZdyTZyE%2FnEajJCMTOenu9dxhChI3rkNKDuMZzmYRVZwvPfyUWKwrH%2BddS%2FkEUWsehw3bsLw5EVTo3M5LUkPmiN5IiAdmXqu9xg0sFlZezKurvE9%2BIm8U2yojaP8aJJod%2BycWCQjfpiG%2FZQd%2Fa5gjaXlolvBZPHccfDlRlXSDLvBnT800dxn7OjGHqaFfcTjS4P1zSElIRXylw5%2F2aOQD2pPn%2FfMBC00v%2BuQin9lBFQflIDJscBd7Sk%2BNSzWDAJNnFGacbTvYH3vqjvIg3yz62S4YSnExENatAc%2FseyK3gyoJwQMpQOGkIxd54EBq3pG60EXBew1o9x0h4LCXlbrZ2%2BbL%2FR%2FZ9hBmcUpLcXTxmCUGhVKYAmF71WInNS4q%2FdWQUHaxwUjROOWf1buJc2B%2FCv9iCro76o47WjkB4XKTeDyllgeoigHzmyw7j%2Bk%2Fccv8b81D1BMI7Q6MMGOqUBNddbZaVvjI7GgJb5Anjv%2BHqFEXWc2a2ujL%2B13CWc%2F5qip8BqS6xckcZ%2BH93rPyzJ596%2F5LRwAK5qIvDgwc%2FnsUJfeMz1DxJ2HelDq2ztsnQzacBnM3808me8MXi6VcphO90JcF8fPuBBBErrJ7HJdkYcibbV%2FuOLbdFcyIa%2FysZk264VFwlF5vLf5tUMR7T2lZN0asE4Qr0pfIw4K8ULVjm4rN5o&X-Amz-Signature=6f4f1349cf5a4b6233b72efcf4cfa09f3dd1d7489150b0a42c37f993de10f220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWJKT2K%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxDk6HvlXtbRlOiJCcQrG3f3Jy0yP8h%2BO7ZFq1wu1DoAiEAnwLWOouLZIGdxgzyKTwxEkCiV3hbsX8IpMgoTY%2BXrcsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMph5B%2FPND%2BGWcIkoSrcA9KBuCyMu214Xq3SGyCRzeGhs6gASghjHS51jA%2BRgpSNB79Y5Sz4mGQl6AcbSgGsbbdFm6y65g5QP36FngvQAkryZ2PGf05BkPYzLjnwY44pqwKmrlD956%2BHuAV%2BnRr8b0R%2B0ajU9KMWDY622CzK0QzMJ%2BAIEF1kMiy%2BZy7woogB%2FSMF58fzEYZdyTZyE%2FnEajJCMTOenu9dxhChI3rkNKDuMZzmYRVZwvPfyUWKwrH%2BddS%2FkEUWsehw3bsLw5EVTo3M5LUkPmiN5IiAdmXqu9xg0sFlZezKurvE9%2BIm8U2yojaP8aJJod%2BycWCQjfpiG%2FZQd%2Fa5gjaXlolvBZPHccfDlRlXSDLvBnT800dxn7OjGHqaFfcTjS4P1zSElIRXylw5%2F2aOQD2pPn%2FfMBC00v%2BuQin9lBFQflIDJscBd7Sk%2BNSzWDAJNnFGacbTvYH3vqjvIg3yz62S4YSnExENatAc%2FseyK3gyoJwQMpQOGkIxd54EBq3pG60EXBew1o9x0h4LCXlbrZ2%2BbL%2FR%2FZ9hBmcUpLcXTxmCUGhVKYAmF71WInNS4q%2FdWQUHaxwUjROOWf1buJc2B%2FCv9iCro76o47WjkB4XKTeDyllgeoigHzmyw7j%2Bk%2Fccv8b81D1BMI7Q6MMGOqUBNddbZaVvjI7GgJb5Anjv%2BHqFEXWc2a2ujL%2B13CWc%2F5qip8BqS6xckcZ%2BH93rPyzJ596%2F5LRwAK5qIvDgwc%2FnsUJfeMz1DxJ2HelDq2ztsnQzacBnM3808me8MXi6VcphO90JcF8fPuBBBErrJ7HJdkYcibbV%2FuOLbdFcyIa%2FysZk264VFwlF5vLf5tUMR7T2lZN0asE4Qr0pfIw4K8ULVjm4rN5o&X-Amz-Signature=f906b4b95f7a9c74ae5fec2712fec923ea1ba5f244f37370ba93c548fc746a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWJKT2K%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxDk6HvlXtbRlOiJCcQrG3f3Jy0yP8h%2BO7ZFq1wu1DoAiEAnwLWOouLZIGdxgzyKTwxEkCiV3hbsX8IpMgoTY%2BXrcsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMph5B%2FPND%2BGWcIkoSrcA9KBuCyMu214Xq3SGyCRzeGhs6gASghjHS51jA%2BRgpSNB79Y5Sz4mGQl6AcbSgGsbbdFm6y65g5QP36FngvQAkryZ2PGf05BkPYzLjnwY44pqwKmrlD956%2BHuAV%2BnRr8b0R%2B0ajU9KMWDY622CzK0QzMJ%2BAIEF1kMiy%2BZy7woogB%2FSMF58fzEYZdyTZyE%2FnEajJCMTOenu9dxhChI3rkNKDuMZzmYRVZwvPfyUWKwrH%2BddS%2FkEUWsehw3bsLw5EVTo3M5LUkPmiN5IiAdmXqu9xg0sFlZezKurvE9%2BIm8U2yojaP8aJJod%2BycWCQjfpiG%2FZQd%2Fa5gjaXlolvBZPHccfDlRlXSDLvBnT800dxn7OjGHqaFfcTjS4P1zSElIRXylw5%2F2aOQD2pPn%2FfMBC00v%2BuQin9lBFQflIDJscBd7Sk%2BNSzWDAJNnFGacbTvYH3vqjvIg3yz62S4YSnExENatAc%2FseyK3gyoJwQMpQOGkIxd54EBq3pG60EXBew1o9x0h4LCXlbrZ2%2BbL%2FR%2FZ9hBmcUpLcXTxmCUGhVKYAmF71WInNS4q%2FdWQUHaxwUjROOWf1buJc2B%2FCv9iCro76o47WjkB4XKTeDyllgeoigHzmyw7j%2Bk%2Fccv8b81D1BMI7Q6MMGOqUBNddbZaVvjI7GgJb5Anjv%2BHqFEXWc2a2ujL%2B13CWc%2F5qip8BqS6xckcZ%2BH93rPyzJ596%2F5LRwAK5qIvDgwc%2FnsUJfeMz1DxJ2HelDq2ztsnQzacBnM3808me8MXi6VcphO90JcF8fPuBBBErrJ7HJdkYcibbV%2FuOLbdFcyIa%2FysZk264VFwlF5vLf5tUMR7T2lZN0asE4Qr0pfIw4K8ULVjm4rN5o&X-Amz-Signature=235a2bdff272869541c50adc68d62f8be96da057dd3e5885a3f16222688747a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAKGKGX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDWnMdJlLcInoFKOTfTa16yW%2BhL4uMvBEp9a3GYphFK%2BAiAwf6OyY69Q8o%2B2dRpk%2BA0avDjhiCZ1sijZ67M2HefttCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXsCLk0TneUA%2BuyLKtwDia%2F3ixW0p9Sm2niJGxT2khW7HE4IUbleeu%2FXgEdRDf8ONFsX1tYBHpB0U8iC1tWJpKbyX%2BBI6z9B8eNEXfcMIEayfvYQq0K6fPH7A%2FfKsB9K9k4YVEEtZJBqjUFS%2FKwkxabTTbgsDUNfoJHe6s8FyylKECt175fXXPljziJVR1L7xPBuUxoJHtOlbHB6YeKQlsq9eitE7cuLTjkRw3T4kYAOaXjfeS1C1rORzixywMyrozr6c0KHD%2F4ZDOyEI%2FK%2Bu3Y1z2aKDaRSHFYz9zFevC37cMl2zTJlfUsZV%2FVR8r3Gbg76naM%2F0uxqVP8P4leUDK3%2BjQH0b4%2B8WUdua4gMKah2WQODaJ8uhZgCf7lNvRVWh%2Bet2DtZngNfTvhPdgPCZUzGvJJ9hllTliQhAlk9gu80WnuzUCMGY48VG15Fy2EM0CkH07iDCDjsElm4pFO0159adJrfIQ12WQf4F6Pq91KCZWGPcREI5bWVM1B5WVXsmz%2F7bl0jRYdPjRCfSo8zvJtNzUAJwZvCv441fYObn1p2UUprkp3P1EbBzDiwL1YU2W%2BiipfpDdVehmEhk9a72mKcumO08wNji1h9xnH5kwKuEbBJrVB5M2qGnMYav4xWhNKFjkJbaNaR2fAw3c%2FowwY6pgE03KoTtr9P3MJ3SGkETUGwN2t5bupq96vVAmvEI8GxOlST30sEJ4MuFt6k3LJjKIcQRhqQb78mbBFCuEzDgDahaW6YBGpQbFD9WOO1Ayw1jkhMMi%2BBjLM5zuWUUcSLnM8ush0VCFD%2Bxck3rWIx8AveojLB5Y%2B65jGWP5h7CrJQoCKhRL0U595kVpQHnk7E9KS9m2N%2BmVBLsnBtcU%2FQC1hFbnAl%2FhqF&X-Amz-Signature=ab36f2b63e7fb8424c49596229acff1a8e670d10dc99c86ba098a2be1d84e295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTQ6HBW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDzQSNQn2K4zkkscpT25daYOzYzzRe%2BR9M0VVHvt4rceAiALiqc48211HmCf4538UfpeLzLq6XiZQ8%2F39ryJDLJSCCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFBePEo4Z6Fq%2F%2BqJ%2FKtwD5GLmaNEB0k6yQsXIhuetGIsjcO1HQuSnC1lgB2LhjZ9l7WHrvzWRSeWFcpWBLAI7KVqFwGzClZALCbPumiECsSBcnP6PyKd54bl1ZH6I4%2B9DeXhz90P8rt3JUx6WImTNKC7MgRoE17K9CwdsCZeibSjHjrix33ULx7DwQG%2FsiV9sdKqpvBaQxEs%2F4Q%2Flfq1WcN06Ebg%2FeUgFst1csYVePN0TDsWMbK28K%2FlM3KgPtWUG8hsf2wnLo6uYE7ZbfbIjpTj08im%2FcYicyOfrOiv%2F7lZhRoqVL9meJ2QXhHbrGl2UFCkQ6pgA%2BdPeVlMYckXHv7VLHD7iBDJQxmw%2BCnbdkqeu5GGWd67RpZompueP0QvFX4xrYGZsOibk%2FoItmB686bfINYIGhPCb61u20Es16pS73y2unMQ5aIivTlgHVxR7Iwq1JFaBK6b0Upl1QejAJ2h4Zu17j0tlJcZEYPPs9gbS0KWx70aMhpsikSNvqeREtvyLMC8rsLFzqc%2FlvCt2QnpSMMRZMeBshIXc6gGzPc%2FElgtEcUGN%2FQ3XAqgG2WMSUC1aIwC1DHyTiW1f0Gs%2BEd4XDiWGAcCo%2B9TeciFGPECJ424PZud4DlSh2SsRdZ6z4q59qosS%2BWJzHm0wm9DowwY6pgEC2sMTaSAN96lhcyagpu0R%2BGPaJJRFli1h3q5Lsh9yqbL6ksNzNrBRhwSUfNIohZlUJxHn8XlOlooP19K5S7VA6NEJxB0Nmz8vOYQRdfFeHfiEiD6HAIIKLV9yJvFLetKtsXfiIu8rujhmg84VqkaoJxTNVw7yiqTBNRXitTuS9XeQcJ7ikZdgWNsj15t6BAAtqZRAo1B990vQ6E0i1257cigj93OR&X-Amz-Signature=11eb2f61b1bd401ea0f36dec2624005c1d416677b814a036c2b812d77411435d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWJKT2K%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxDk6HvlXtbRlOiJCcQrG3f3Jy0yP8h%2BO7ZFq1wu1DoAiEAnwLWOouLZIGdxgzyKTwxEkCiV3hbsX8IpMgoTY%2BXrcsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMph5B%2FPND%2BGWcIkoSrcA9KBuCyMu214Xq3SGyCRzeGhs6gASghjHS51jA%2BRgpSNB79Y5Sz4mGQl6AcbSgGsbbdFm6y65g5QP36FngvQAkryZ2PGf05BkPYzLjnwY44pqwKmrlD956%2BHuAV%2BnRr8b0R%2B0ajU9KMWDY622CzK0QzMJ%2BAIEF1kMiy%2BZy7woogB%2FSMF58fzEYZdyTZyE%2FnEajJCMTOenu9dxhChI3rkNKDuMZzmYRVZwvPfyUWKwrH%2BddS%2FkEUWsehw3bsLw5EVTo3M5LUkPmiN5IiAdmXqu9xg0sFlZezKurvE9%2BIm8U2yojaP8aJJod%2BycWCQjfpiG%2FZQd%2Fa5gjaXlolvBZPHccfDlRlXSDLvBnT800dxn7OjGHqaFfcTjS4P1zSElIRXylw5%2F2aOQD2pPn%2FfMBC00v%2BuQin9lBFQflIDJscBd7Sk%2BNSzWDAJNnFGacbTvYH3vqjvIg3yz62S4YSnExENatAc%2FseyK3gyoJwQMpQOGkIxd54EBq3pG60EXBew1o9x0h4LCXlbrZ2%2BbL%2FR%2FZ9hBmcUpLcXTxmCUGhVKYAmF71WInNS4q%2FdWQUHaxwUjROOWf1buJc2B%2FCv9iCro76o47WjkB4XKTeDyllgeoigHzmyw7j%2Bk%2Fccv8b81D1BMI7Q6MMGOqUBNddbZaVvjI7GgJb5Anjv%2BHqFEXWc2a2ujL%2B13CWc%2F5qip8BqS6xckcZ%2BH93rPyzJ596%2F5LRwAK5qIvDgwc%2FnsUJfeMz1DxJ2HelDq2ztsnQzacBnM3808me8MXi6VcphO90JcF8fPuBBBErrJ7HJdkYcibbV%2FuOLbdFcyIa%2FysZk264VFwlF5vLf5tUMR7T2lZN0asE4Qr0pfIw4K8ULVjm4rN5o&X-Amz-Signature=34b251b46cafafa819d9a084f4174be86a392fff957a70f55c69f2e02f11138d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
