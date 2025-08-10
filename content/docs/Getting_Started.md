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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KDU7NE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPnFudtCKYRDwrr2r5jxZZrSs7b9sO9u9QHckXaPHn4AiB9crqVBeJaLB%2FyegiVv1LuHIYgW8oNXM1IBJDFucl%2FbSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD68c9O6bhpu8on%2FlKtwDqsrz2joVgW0rKuINYrzd7rD%2BAAtPbusc6RX1IyN00ldZlPPr0gCMj0LgZ4xQuG3VCIDPfMvrK0x5b5Ki7X669dBbXZJxW%2FfWp6ob5Xj6%2Bw447VNTWFi5piSYFVe49WCCGDz83WGhiojXhYrz4bqjNKorsD0cJseRh4ufX1XbFA%2BAFHiQQu1B%2B1hffXrxtmaoqhrQelHp4E176lvsrt4gnGU7%2FIDz47jLgJZsULx5nd8aQYXmLicqDHE3yMtzFYrGbLkkDH204bh3g2AqJxzczzE%2B2Ic8kxe9zk0PLHFbWTJ7V0aOYYKV8CW%2FtgvZhbtJQa28K9Smv8G0zeNVGU5DiRT8xRuCfWbPNo%2BiCsSArTLKrZ4vAOWKTxHdUFdQ5FytSm4T6l7u%2FNZV9TiMcrSBRyBtdalbqvMFgQSgvLb4U0Z27srXOEZEyUXsQHQ3DPlIn3rqAGpln%2FijgLtMu0oAiQkQABHtR3EpNxLQQ8bmnoZ34%2BO9CjdSyd%2BmIVYnpyiboh%2FfyzVGOw%2BBFiOTWV28NvpzDIohhHNqtxDDp6tZfIfMiPDI%2FUrn3L2u9zQW57u6tii80zHiNKZWDdrdc0E2CcV1z7758WsLMb5SHWZMtZX305gJUvjd2EgB1WMwzbLfxAY6pgHj7C6LtePfbQ%2BYM%2FeEvrUShEzvipokm8vdgZL3Xh6uRXnzuuKyP106PNs%2FO9QEG1KVnC5%2F9ceEK%2FcvCYgfDRVX2GlNRIH%2BrtaIEeojpqGPvAvUHXzLJWARTTPMqDE9TRGYVHS2SR%2FUOOqA2OfMTN9V8yXEriQut97gPX4Q1mFGljvRNLhlll6XX%2BW82KssXI5NDQKz6LI6Aj%2BlOU1hRyRJqUxWgNVf&X-Amz-Signature=4de710186713fcabf6646c4597948bfda733b16ea4cee673f9570c247d9cc5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KDU7NE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPnFudtCKYRDwrr2r5jxZZrSs7b9sO9u9QHckXaPHn4AiB9crqVBeJaLB%2FyegiVv1LuHIYgW8oNXM1IBJDFucl%2FbSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD68c9O6bhpu8on%2FlKtwDqsrz2joVgW0rKuINYrzd7rD%2BAAtPbusc6RX1IyN00ldZlPPr0gCMj0LgZ4xQuG3VCIDPfMvrK0x5b5Ki7X669dBbXZJxW%2FfWp6ob5Xj6%2Bw447VNTWFi5piSYFVe49WCCGDz83WGhiojXhYrz4bqjNKorsD0cJseRh4ufX1XbFA%2BAFHiQQu1B%2B1hffXrxtmaoqhrQelHp4E176lvsrt4gnGU7%2FIDz47jLgJZsULx5nd8aQYXmLicqDHE3yMtzFYrGbLkkDH204bh3g2AqJxzczzE%2B2Ic8kxe9zk0PLHFbWTJ7V0aOYYKV8CW%2FtgvZhbtJQa28K9Smv8G0zeNVGU5DiRT8xRuCfWbPNo%2BiCsSArTLKrZ4vAOWKTxHdUFdQ5FytSm4T6l7u%2FNZV9TiMcrSBRyBtdalbqvMFgQSgvLb4U0Z27srXOEZEyUXsQHQ3DPlIn3rqAGpln%2FijgLtMu0oAiQkQABHtR3EpNxLQQ8bmnoZ34%2BO9CjdSyd%2BmIVYnpyiboh%2FfyzVGOw%2BBFiOTWV28NvpzDIohhHNqtxDDp6tZfIfMiPDI%2FUrn3L2u9zQW57u6tii80zHiNKZWDdrdc0E2CcV1z7758WsLMb5SHWZMtZX305gJUvjd2EgB1WMwzbLfxAY6pgHj7C6LtePfbQ%2BYM%2FeEvrUShEzvipokm8vdgZL3Xh6uRXnzuuKyP106PNs%2FO9QEG1KVnC5%2F9ceEK%2FcvCYgfDRVX2GlNRIH%2BrtaIEeojpqGPvAvUHXzLJWARTTPMqDE9TRGYVHS2SR%2FUOOqA2OfMTN9V8yXEriQut97gPX4Q1mFGljvRNLhlll6XX%2BW82KssXI5NDQKz6LI6Aj%2BlOU1hRyRJqUxWgNVf&X-Amz-Signature=9d152b94c81c4de5c5920545c404ba1ecc386e894849763da6bf0948ca98823a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KDU7NE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPnFudtCKYRDwrr2r5jxZZrSs7b9sO9u9QHckXaPHn4AiB9crqVBeJaLB%2FyegiVv1LuHIYgW8oNXM1IBJDFucl%2FbSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD68c9O6bhpu8on%2FlKtwDqsrz2joVgW0rKuINYrzd7rD%2BAAtPbusc6RX1IyN00ldZlPPr0gCMj0LgZ4xQuG3VCIDPfMvrK0x5b5Ki7X669dBbXZJxW%2FfWp6ob5Xj6%2Bw447VNTWFi5piSYFVe49WCCGDz83WGhiojXhYrz4bqjNKorsD0cJseRh4ufX1XbFA%2BAFHiQQu1B%2B1hffXrxtmaoqhrQelHp4E176lvsrt4gnGU7%2FIDz47jLgJZsULx5nd8aQYXmLicqDHE3yMtzFYrGbLkkDH204bh3g2AqJxzczzE%2B2Ic8kxe9zk0PLHFbWTJ7V0aOYYKV8CW%2FtgvZhbtJQa28K9Smv8G0zeNVGU5DiRT8xRuCfWbPNo%2BiCsSArTLKrZ4vAOWKTxHdUFdQ5FytSm4T6l7u%2FNZV9TiMcrSBRyBtdalbqvMFgQSgvLb4U0Z27srXOEZEyUXsQHQ3DPlIn3rqAGpln%2FijgLtMu0oAiQkQABHtR3EpNxLQQ8bmnoZ34%2BO9CjdSyd%2BmIVYnpyiboh%2FfyzVGOw%2BBFiOTWV28NvpzDIohhHNqtxDDp6tZfIfMiPDI%2FUrn3L2u9zQW57u6tii80zHiNKZWDdrdc0E2CcV1z7758WsLMb5SHWZMtZX305gJUvjd2EgB1WMwzbLfxAY6pgHj7C6LtePfbQ%2BYM%2FeEvrUShEzvipokm8vdgZL3Xh6uRXnzuuKyP106PNs%2FO9QEG1KVnC5%2F9ceEK%2FcvCYgfDRVX2GlNRIH%2BrtaIEeojpqGPvAvUHXzLJWARTTPMqDE9TRGYVHS2SR%2FUOOqA2OfMTN9V8yXEriQut97gPX4Q1mFGljvRNLhlll6XX%2BW82KssXI5NDQKz6LI6Aj%2BlOU1hRyRJqUxWgNVf&X-Amz-Signature=76abcd6bc6129155533a69eb0c45ff63f846bf7b5d6fe35f296011e7968e768b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBWNUWI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNoDAPHo6FfyIGSvP9vEor1b8fhYiYdxpRJKPP9E6OYwIhANmKpVgt1NqcK8QNWPBoSrYjVH4uJZ2JnzTYNgug%2BxN1KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFEmo6yKmPcySSWoq3AP3%2FdZ%2BxF3%2FgetCtoXZqiGpwThEjIJE7DqHLn7YiLeixkMEnKjUTeB0JO65j%2BgUTtvVSZR3McIm1miyF3%2Fg%2B3MbXONTRLqB3R3RQJ2YiR7dp2EKo1Aw4HxnQ39Mz1Bu0GtBEnjJaVYR7TzOT0gCeUOWdGp38NWB7A3pW7vW4oE2SNfAOIatLRSEn75aOdav742jbQmk%2B%2Bh4ZhtFIFGLkhdG0Fg3psJsWBMHjp7FIbspw3MMDpxxnqSt50wP8iahGkq0QUznOV90MOuz9%2BL%2Fcp2rMS2lI7lpu9x%2Fp9v%2BZm40VGMUtljnMXTPkim%2F39JNgfQtA%2BOS4wD07mcmS1%2BG11PwB0fbdfUD0YCBWQ%2BrN5KiEi%2Ft%2FisymVL42xhoK9TUgfVTm50t4aWxAPKzDuhDi3gdgCVeGKg3zA6IL0smiDqKfyI8C8aHLxK4WbqJGYIq44N%2F36VkIUCLWTUJd06PCYjv0y97E5NPrfp6YQrHJElYEVOLPKI0PyyxswF2NElDtjKKWxPcpLuEpC3Dm4GYHvi7tKu2vryaVzUvK%2BQxN%2FtLrJgKvnPjJPl3%2F5ZOVTNQMIadkk9HvTCMjmD4LxW7Ra9WQmoZgNOuqI7VZ3XyXVIpjRVo09hfWDNLU0eolzChs9%2FEBjqkAbLZQWPwUgzRm7d9zw%2BllDnm2GhtbigP6gB9LAHZ3LFMkhkIjiuJDBsLSHa7NCo%2F9WwujrZUgw9FjYro8iIAnmcFVxN6dpXkevezfhhzmUD%2Fi9zTcUrEhR77xjZeJY8Pnzncu3egzWYutzDo9SPcdFnLOIhdIhuuXMAi5pYLpA%2BnTcoX7z2uuw6omGWSgUVJZDHD7PdPJhw8mp5IjMnY7Qk2f5VT&X-Amz-Signature=191bf8d302908c75318a0b2c48326174d32da3221d670adb1c33fde01c58d118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVFZ3LX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVczyNxyNewdkSTPY2qwQw8mfKTY2ppgN%2BAg%2FpQVZBKwIhALn43d97NDRNUMZDFPAXKhwtmpima82u2LohJC5YUKsgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbhPjC6DJ9Mg1e96oq3ANEhvjvFj2fz2pG5bIHx1JGdrwhIRrMCYiW%2FIyxeBY9RBJHS4SSqrjwhucS%2B7qSVygXdh0DE2ZCzPnSdB3L1yTcyWpEM64f6NHXasaa0Pm1NWwIo9%2F6nPjfRSX3%2FxwgGxrhGSDJFtmbDX5VoPjtTYglg64zlFEkhQjQ%2FMTP0Mai4A1gAQ2yGP%2Bz4pTVxvsQ%2FKJKCGkSflXGZc%2BfXf5fN%2BaAzqaqrufbZLvbZhjiZz0Qsn%2FgRn78hVV4o8LMwbVp5I1%2FVqEraYKjlD%2BFhOTcECTOKLH34x9dwOoEnDUtU9eiBwsnXo4yCFlBeysIeFWbkGn%2BX0sP%2BwihJCZKwMw%2BOunG5ZjSOWIMlOHk%2BbG5CnCJHzi8dYBtEQw1rzUcBqXbZLuK5jVpNMY08djPUdSddt6ysSSklOtjvJLeI6BqGkXA1inzHWssB1yIu2EzI43wNwhw4m7J0sDVIIZsjNWGWye%2BM6Gui2VWZdU5igkOfAvAI4wKxnxzfczNd%2BwIC76Mm2aTeaOyEBXkp7tOXyTddxJ6A7KrnezkTgCtU7Dc0%2FzRvdWpwDT8NGVSCIfAyHXeIVnn%2F%2Fi0X%2BnTh%2FtqwFg%2BUn3vE5H13Y7M2GkIK1WL4e%2FcVoAJufRIitVYGeGuaTCsst%2FEBjqkARCxBlqLOhvNdpIZbzwBnC1XXZNYeNDXZUv8ENz4mw9thBigcui%2F%2BJH6VL%2BPTsVbxBvN3VNdPaGCsEU13WYQF7DWS%2B07U7jK%2BcDTeOf8sPncAIN2FU%2BZriQcorbQyYmQz4aUB%2BDSIRFd0oELQECsPNAvToAqVetOBtiVM0zkIhljswVYtaxOZtmvTVqBvVlPPr7uubFodwgmjF7G9Egv0UBGGZTp&X-Amz-Signature=66ce8404594100b2a992505ac026b38a87bd330713d2fe3645ccf2aa5e0cb82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KDU7NE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPnFudtCKYRDwrr2r5jxZZrSs7b9sO9u9QHckXaPHn4AiB9crqVBeJaLB%2FyegiVv1LuHIYgW8oNXM1IBJDFucl%2FbSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD68c9O6bhpu8on%2FlKtwDqsrz2joVgW0rKuINYrzd7rD%2BAAtPbusc6RX1IyN00ldZlPPr0gCMj0LgZ4xQuG3VCIDPfMvrK0x5b5Ki7X669dBbXZJxW%2FfWp6ob5Xj6%2Bw447VNTWFi5piSYFVe49WCCGDz83WGhiojXhYrz4bqjNKorsD0cJseRh4ufX1XbFA%2BAFHiQQu1B%2B1hffXrxtmaoqhrQelHp4E176lvsrt4gnGU7%2FIDz47jLgJZsULx5nd8aQYXmLicqDHE3yMtzFYrGbLkkDH204bh3g2AqJxzczzE%2B2Ic8kxe9zk0PLHFbWTJ7V0aOYYKV8CW%2FtgvZhbtJQa28K9Smv8G0zeNVGU5DiRT8xRuCfWbPNo%2BiCsSArTLKrZ4vAOWKTxHdUFdQ5FytSm4T6l7u%2FNZV9TiMcrSBRyBtdalbqvMFgQSgvLb4U0Z27srXOEZEyUXsQHQ3DPlIn3rqAGpln%2FijgLtMu0oAiQkQABHtR3EpNxLQQ8bmnoZ34%2BO9CjdSyd%2BmIVYnpyiboh%2FfyzVGOw%2BBFiOTWV28NvpzDIohhHNqtxDDp6tZfIfMiPDI%2FUrn3L2u9zQW57u6tii80zHiNKZWDdrdc0E2CcV1z7758WsLMb5SHWZMtZX305gJUvjd2EgB1WMwzbLfxAY6pgHj7C6LtePfbQ%2BYM%2FeEvrUShEzvipokm8vdgZL3Xh6uRXnzuuKyP106PNs%2FO9QEG1KVnC5%2F9ceEK%2FcvCYgfDRVX2GlNRIH%2BrtaIEeojpqGPvAvUHXzLJWARTTPMqDE9TRGYVHS2SR%2FUOOqA2OfMTN9V8yXEriQut97gPX4Q1mFGljvRNLhlll6XX%2BW82KssXI5NDQKz6LI6Aj%2BlOU1hRyRJqUxWgNVf&X-Amz-Signature=765180cc07630663c6ae1b85f65eef2e261220b37ce391a94531c1aa8ca88a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
