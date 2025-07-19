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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVBCJSK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcAvHCTXuAq%2B7tWYzZU%2F10rTCTFkPDw7ugeIFDb5ALgQIhALkTwVn9KjvWkHB9O8cChLJ36QeyF10C5C36jR9N0rSeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmX4HoJr49Klc%2Fo0q3AMY6sTb9aNynqJFV%2FxiiaOCBx%2BuR8gdU8CbwXEQpO59SdD8Pbh%2FOLWSZZYMaRwKyTXqUifoGECGLlykxrPhBryajnCJsRm1xfOJpShi%2FEhZK%2FVfH5rcG6e3XsnSM0lyPn9jo1h%2By419K%2FrdJHA9acuB6NuSZ9qkiyx56h69wEYuBKrAjvXpg4D8gJQ8VV0LqqiOojnb7%2F72OgAXTTZbDaMiJ4nuPPmPDaKCItw6nMM09JqVXKVvhp4A2NvOIj6sZ9%2FWzjcI9cncP%2FS%2F%2FdYj1u15w8SnD93PtF7d5UWJ2MMeanRkLHLOCv7YuJEEa%2B7pg77SjD8wpJ%2F0np3DhqVzb%2FbgCus8ISA4ZtBV1rsRb0hofwoUUhMj%2BdavoF2RjTyn8Hw3mVmZDuHfeW7NAAF0PRgvons3wFOaTkR4yCwGDnk%2Fs4ZwK3nFy8d5Hi2%2BINHvFhu5pjmx%2FNcLVthN6xgJ4DPSlR1so3L7pAuWlY7Gdt06ZC6NFyxQCW8FqYNOS8ViXOEFkYBCGN%2Ba7sNGYM8H3s%2F4pCyeQpqQoylUVuAGSRsdsBDbcILc%2FGpR3nKJr6wGsDYX0m%2Bp8gIjmuJNqMT17vBYnX8nmrtzwhH2RvF%2BkWpec2qnMNxPgMawRVLeKTCd5%2B3DBjqkAQ3jvdn5mjtINgwdTM7RFS8kA1pmFGWgoT6UXeHHK3GxfCcaCSvaKtO4gRM%2FBPJ6l9AhAfa17Tnwgi0w5PRSW0OiEB3%2BY1hRUrkLEMNP9djMVImGQJcZUTPLIfpG7k6TPr6C%2B1DMlcCgI4V2%2Ba2yNpBrkZyvLdVLsQpR6kf8W6Z07o0YevTTwuPXwU3gKtUyUpq%2BuMZBXsVC5K8vaQziWhI0Pyb%2B&X-Amz-Signature=2a933bca46f3d413e170472ad1d9f53125886666dc9bbd574fd0882fc6678194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVBCJSK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcAvHCTXuAq%2B7tWYzZU%2F10rTCTFkPDw7ugeIFDb5ALgQIhALkTwVn9KjvWkHB9O8cChLJ36QeyF10C5C36jR9N0rSeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmX4HoJr49Klc%2Fo0q3AMY6sTb9aNynqJFV%2FxiiaOCBx%2BuR8gdU8CbwXEQpO59SdD8Pbh%2FOLWSZZYMaRwKyTXqUifoGECGLlykxrPhBryajnCJsRm1xfOJpShi%2FEhZK%2FVfH5rcG6e3XsnSM0lyPn9jo1h%2By419K%2FrdJHA9acuB6NuSZ9qkiyx56h69wEYuBKrAjvXpg4D8gJQ8VV0LqqiOojnb7%2F72OgAXTTZbDaMiJ4nuPPmPDaKCItw6nMM09JqVXKVvhp4A2NvOIj6sZ9%2FWzjcI9cncP%2FS%2F%2FdYj1u15w8SnD93PtF7d5UWJ2MMeanRkLHLOCv7YuJEEa%2B7pg77SjD8wpJ%2F0np3DhqVzb%2FbgCus8ISA4ZtBV1rsRb0hofwoUUhMj%2BdavoF2RjTyn8Hw3mVmZDuHfeW7NAAF0PRgvons3wFOaTkR4yCwGDnk%2Fs4ZwK3nFy8d5Hi2%2BINHvFhu5pjmx%2FNcLVthN6xgJ4DPSlR1so3L7pAuWlY7Gdt06ZC6NFyxQCW8FqYNOS8ViXOEFkYBCGN%2Ba7sNGYM8H3s%2F4pCyeQpqQoylUVuAGSRsdsBDbcILc%2FGpR3nKJr6wGsDYX0m%2Bp8gIjmuJNqMT17vBYnX8nmrtzwhH2RvF%2BkWpec2qnMNxPgMawRVLeKTCd5%2B3DBjqkAQ3jvdn5mjtINgwdTM7RFS8kA1pmFGWgoT6UXeHHK3GxfCcaCSvaKtO4gRM%2FBPJ6l9AhAfa17Tnwgi0w5PRSW0OiEB3%2BY1hRUrkLEMNP9djMVImGQJcZUTPLIfpG7k6TPr6C%2B1DMlcCgI4V2%2Ba2yNpBrkZyvLdVLsQpR6kf8W6Z07o0YevTTwuPXwU3gKtUyUpq%2BuMZBXsVC5K8vaQziWhI0Pyb%2B&X-Amz-Signature=0ae35b02127dad4774403aac0bdf5c558e443f564d4444d70129241e984daae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVBCJSK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcAvHCTXuAq%2B7tWYzZU%2F10rTCTFkPDw7ugeIFDb5ALgQIhALkTwVn9KjvWkHB9O8cChLJ36QeyF10C5C36jR9N0rSeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmX4HoJr49Klc%2Fo0q3AMY6sTb9aNynqJFV%2FxiiaOCBx%2BuR8gdU8CbwXEQpO59SdD8Pbh%2FOLWSZZYMaRwKyTXqUifoGECGLlykxrPhBryajnCJsRm1xfOJpShi%2FEhZK%2FVfH5rcG6e3XsnSM0lyPn9jo1h%2By419K%2FrdJHA9acuB6NuSZ9qkiyx56h69wEYuBKrAjvXpg4D8gJQ8VV0LqqiOojnb7%2F72OgAXTTZbDaMiJ4nuPPmPDaKCItw6nMM09JqVXKVvhp4A2NvOIj6sZ9%2FWzjcI9cncP%2FS%2F%2FdYj1u15w8SnD93PtF7d5UWJ2MMeanRkLHLOCv7YuJEEa%2B7pg77SjD8wpJ%2F0np3DhqVzb%2FbgCus8ISA4ZtBV1rsRb0hofwoUUhMj%2BdavoF2RjTyn8Hw3mVmZDuHfeW7NAAF0PRgvons3wFOaTkR4yCwGDnk%2Fs4ZwK3nFy8d5Hi2%2BINHvFhu5pjmx%2FNcLVthN6xgJ4DPSlR1so3L7pAuWlY7Gdt06ZC6NFyxQCW8FqYNOS8ViXOEFkYBCGN%2Ba7sNGYM8H3s%2F4pCyeQpqQoylUVuAGSRsdsBDbcILc%2FGpR3nKJr6wGsDYX0m%2Bp8gIjmuJNqMT17vBYnX8nmrtzwhH2RvF%2BkWpec2qnMNxPgMawRVLeKTCd5%2B3DBjqkAQ3jvdn5mjtINgwdTM7RFS8kA1pmFGWgoT6UXeHHK3GxfCcaCSvaKtO4gRM%2FBPJ6l9AhAfa17Tnwgi0w5PRSW0OiEB3%2BY1hRUrkLEMNP9djMVImGQJcZUTPLIfpG7k6TPr6C%2B1DMlcCgI4V2%2Ba2yNpBrkZyvLdVLsQpR6kf8W6Z07o0YevTTwuPXwU3gKtUyUpq%2BuMZBXsVC5K8vaQziWhI0Pyb%2B&X-Amz-Signature=90936c3cea2f9013ced36f8a51a7d5ee75f02d3f7594550b276bd6cd0c1eca05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HAQ7WN7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItdN0uT847zgXbz3IEFgOum%2BnEM%2FJjwllua%2B0arYGmQIgHr4ZH2JFR4APWpxrOhwEEhmQRMQcjGFfR%2FrrRS7S6nUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXmb52em5ZAdy1qPircA6z34tkqXkFM6ESn%2B6wodam%2FnkLIrQzC9gjjcAxby8D77beCIwfLcYVIGPK4BY%2FclLwxcAnurNTYwJ7F%2FHJjL%2FDbkLmrpHoggPAzsHwKdm08YqMrgdCTjwhJu%2Bm4k1JkjbiKk9OIvZNaHEuAXsmquwZHQW9hlrSLX1WoI5%2ByAjW0Mxhg2%2B%2FDk4BbRJa%2B5dnY9Z7kKOfKMSabdk6%2F%2BSoG40%2FYhuS2hFCZz%2FXdezvw6oyEsfbctBMCmQhoR5QtfC4fxtBeEXYUSJpo17%2BvPFvBpvw4H5J8%2FHaP0IviiPGq1mktGq5an4LAPNSfTcLHI%2FMBiuEXdSGOaTUjW7vy%2BNRNl17Z6G0pskZ1me9ccunnojX3oMmqKvICIyZTnTXbeg0hdqtzENfeLJjJhCkXVT8BIMAGEm2xdmrj59Te4HvgHCbuAJ1V0T4Wl2DjH2wUk77f5mQVNK6zWTifjGPttYQ7dUd0dGJzUt1qI4ec%2BfEYaBrfpPBKIorbPiboUACnZ6HSpJNTx7Qdlov%2FYosu9YbwjIhUVngOcO2EK%2F%2F%2FrjDQl7IfJ9AHPABzyraWdTKTX05WP8OAhditdWTZHDbExfEXupq83gVcVYZL7axLrlj8he%2FmwR6Gb7P%2FS2QwqbuvMIPg7cMGOqUBYHQInSNd6VijvEVSqMVVrbKOv4n9BDwm1K4bh4Wc%2F4UpRnYM8ptLqozRrOTHhWkYuL9P44grapJQQJoGS4kybj89woHoPu%2FSVZjjyIgFk4dhZAt0diSZYq223EGOghrU1rJ5vhxbYHWJh3c1Gx8ZIFg2POLHT%2B%2Bn9A6xCra08iisZdstvtqGqoUDygQeXIG5bO%2BUqzBTCZxoxzbBnsiA8sLHJRaY&X-Amz-Signature=f31cec05c86438a3f71d0be250c016f1c6dd5f802bc9f0ade431a98789e94c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27Q7Y5C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNepA9qI4zLw5xY8cm0eUb0UPU93TGj4cPk6Xt%2BvHWAIgGMd5PfsqhNu6caQ0M2AgrSFDj3%2B1Qfw1vEpdT%2FFM2hcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa6BNxwrvEQYnh5nyrcA1IL75QG8vwuVF1FKzFT2s%2BrulhWJfQlPqng7d1rPfi2MyImaJxbtGiH79hbHMF9gpZvRFPWCO1XztWEkHZ4OA%2F7fzp2YRVpmpQ5cdd4%2FZcTsVUMkOFmy9ZULPnJ1PFxdVXUQCJ2MM6GHu7OTaYER7y0A2m8Sac72MzhXmTisvSU81ZuriVNXUZFiq7qiWdEahaekWuiGdI%2Bo%2BJXste%2FOKll0N2C6MZs76d%2F0hgEq3T3P1DbyfDQwVPHcysdlVz8qPiDt0a%2Bd9caNbEcPMfKutw8gmYoO%2FgQFXzXs4TkpBafy60uFGUuuamhquSe4a2cSA4XqnvWFcMhgyKn9Sz2ODgEtvP1d98qgTdmasWndKnpK3LeThJ7gCwX4NoRiA8Y066PbQEClzXL5Ry35Y%2FKjK8Gdw%2BqqUr0SgC2Uf1cWaCGlC7OtHqsQmsMDtFFFSSGY%2B%2Fw4QxcWVo9wzRIEb4828WyHxVyVk407dtcAvWSsgkfYra%2B5FNcP83r5fymmfiWz98%2FkDn6OwN6lR46YlETTBRp79AOygPVzCvdVvd2IdsFsadmSbgbIqpz8H9vhLj8aq5HIfvjgkfWW5jO1L5HvWVMxPSQcZks9mINtCdYuyqs%2BJOEkaAckwF5GxqQMLLq7cMGOqUBg8I%2B0EQnAaejx9p8LUDAtHxZRfhkj1i8gRUpAJwwtgMw43q6UhVgbIndvFp17aNk1jRfMu52Z1mf%2BLSya7Mc896VhC0rId%2F0iBX3ZK%2FFfEdcKBOHlgjyTY3wZfzvPer%2FfD%2BNIJtlgn8U6%2Bini8XPeESD390caOKOkPDemkrzgcsENX%2B2aTiqB%2FHgs5NgxYxj8dKa%2Fj4O2pPzgvlWDqcwqhsLEjuR&X-Amz-Signature=7bb8d8e6e9a0b60da54d0ad966620b9a5f7803f0dac4ec9932128a2f041f2e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVBCJSK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcAvHCTXuAq%2B7tWYzZU%2F10rTCTFkPDw7ugeIFDb5ALgQIhALkTwVn9KjvWkHB9O8cChLJ36QeyF10C5C36jR9N0rSeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmX4HoJr49Klc%2Fo0q3AMY6sTb9aNynqJFV%2FxiiaOCBx%2BuR8gdU8CbwXEQpO59SdD8Pbh%2FOLWSZZYMaRwKyTXqUifoGECGLlykxrPhBryajnCJsRm1xfOJpShi%2FEhZK%2FVfH5rcG6e3XsnSM0lyPn9jo1h%2By419K%2FrdJHA9acuB6NuSZ9qkiyx56h69wEYuBKrAjvXpg4D8gJQ8VV0LqqiOojnb7%2F72OgAXTTZbDaMiJ4nuPPmPDaKCItw6nMM09JqVXKVvhp4A2NvOIj6sZ9%2FWzjcI9cncP%2FS%2F%2FdYj1u15w8SnD93PtF7d5UWJ2MMeanRkLHLOCv7YuJEEa%2B7pg77SjD8wpJ%2F0np3DhqVzb%2FbgCus8ISA4ZtBV1rsRb0hofwoUUhMj%2BdavoF2RjTyn8Hw3mVmZDuHfeW7NAAF0PRgvons3wFOaTkR4yCwGDnk%2Fs4ZwK3nFy8d5Hi2%2BINHvFhu5pjmx%2FNcLVthN6xgJ4DPSlR1so3L7pAuWlY7Gdt06ZC6NFyxQCW8FqYNOS8ViXOEFkYBCGN%2Ba7sNGYM8H3s%2F4pCyeQpqQoylUVuAGSRsdsBDbcILc%2FGpR3nKJr6wGsDYX0m%2Bp8gIjmuJNqMT17vBYnX8nmrtzwhH2RvF%2BkWpec2qnMNxPgMawRVLeKTCd5%2B3DBjqkAQ3jvdn5mjtINgwdTM7RFS8kA1pmFGWgoT6UXeHHK3GxfCcaCSvaKtO4gRM%2FBPJ6l9AhAfa17Tnwgi0w5PRSW0OiEB3%2BY1hRUrkLEMNP9djMVImGQJcZUTPLIfpG7k6TPr6C%2B1DMlcCgI4V2%2Ba2yNpBrkZyvLdVLsQpR6kf8W6Z07o0YevTTwuPXwU3gKtUyUpq%2BuMZBXsVC5K8vaQziWhI0Pyb%2B&X-Amz-Signature=39d065d05385dd01ccc974889949c67e18fe1093a48a49e21a741831cd6ba0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
