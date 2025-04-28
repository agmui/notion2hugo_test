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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN4GF7WB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXDjJmhx5n6QwSPnZIMCF1p3MItEb7PZw17taNJ%2BS1CAIgP684h84S8fKRLDlksvAPDQLpQuK7njJWFqCw6EQa%2BwIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIwLtkf%2FV2OKn46wyircAyYiZ4t3SVLLmORyAf6sGimgawmhYwxK1VYm0MSL%2FzBkfzZIIv3nUZLP1%2BQPyOn57pxiea2kmhM96639K4lL6FbJV%2BzeS5JUojHeRf3JDsJqY7NyjxkTEh%2FAY1NyrgCRulwIUjcsCK5tSfRy8bLEtVVt5ZnN21YvI9xUJ0ektKaShDspUUQ%2BTb7bRQfUpIPMcixBTRM4i5Bj%2FT2OmNv6veLIE%2FQIoSRrjwuO6K8joNvUXcrGTZgLP4xKRa6MG%2BoX3czuxCUi7Lz3tF6qdREVQIN2qAD3ZDgeG9s82ix8%2BfF4aEaH%2BgX8l1b%2BepoY2B5rqSBQQD1sfwrF51kYUgYQXRfwCW7FLQ4sF4CYO6VjgdkkCnwbjKDHJCHXCvEeEdkUZDQNR7IYQLuoBRbVHuwMYNoDmERoJ%2B7cgr8cHztcYDX7qoA11WXahjCjRv1gflFj8odPG2LeXlIRPPCRESKsNfn7zg5JrIKeGHmpmEikY6wC0yVQF82XdwJ7mm6GBLm5OPDugjiRxV6o4XqVhbzGOYRWJsSmAa%2B4gi25x5LAfdgf6p9zdn%2F9x%2FHHatBm2LDRFE%2FjSBP0bqhIKHBd2nLpoSDqHhYXnbFk3tnJKFuq68qEAXsmYjrRDeG%2FNnSTMOaOu8AGOqUBRgLT2bLx9HKR%2FNUfWtA5%2B%2Btd3yV5UNYStAZ9K5UHHGtxzgj%2BG%2FbTtcZLh4wuYX6uJ3Zl7M595fwtzG1yhHR4QtmU0kFZkYpFTKsW%2FODTRAVW1x4PzVZaS%2FQwQj5NRp4b1lbq0OEEBv2I9Q%2BgdWXLtLaNfuk7kmIYc3UPkx4fjpCqcT74J4OaeIdkZrSj1W9mHh3CCSOWe3fOI4iCJ3AWjPYEr%2Bv3&X-Amz-Signature=d73da3a0ddf5778979d580fcfd04073a930089f752a34dd10c82e7569b887a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN4GF7WB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXDjJmhx5n6QwSPnZIMCF1p3MItEb7PZw17taNJ%2BS1CAIgP684h84S8fKRLDlksvAPDQLpQuK7njJWFqCw6EQa%2BwIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIwLtkf%2FV2OKn46wyircAyYiZ4t3SVLLmORyAf6sGimgawmhYwxK1VYm0MSL%2FzBkfzZIIv3nUZLP1%2BQPyOn57pxiea2kmhM96639K4lL6FbJV%2BzeS5JUojHeRf3JDsJqY7NyjxkTEh%2FAY1NyrgCRulwIUjcsCK5tSfRy8bLEtVVt5ZnN21YvI9xUJ0ektKaShDspUUQ%2BTb7bRQfUpIPMcixBTRM4i5Bj%2FT2OmNv6veLIE%2FQIoSRrjwuO6K8joNvUXcrGTZgLP4xKRa6MG%2BoX3czuxCUi7Lz3tF6qdREVQIN2qAD3ZDgeG9s82ix8%2BfF4aEaH%2BgX8l1b%2BepoY2B5rqSBQQD1sfwrF51kYUgYQXRfwCW7FLQ4sF4CYO6VjgdkkCnwbjKDHJCHXCvEeEdkUZDQNR7IYQLuoBRbVHuwMYNoDmERoJ%2B7cgr8cHztcYDX7qoA11WXahjCjRv1gflFj8odPG2LeXlIRPPCRESKsNfn7zg5JrIKeGHmpmEikY6wC0yVQF82XdwJ7mm6GBLm5OPDugjiRxV6o4XqVhbzGOYRWJsSmAa%2B4gi25x5LAfdgf6p9zdn%2F9x%2FHHatBm2LDRFE%2FjSBP0bqhIKHBd2nLpoSDqHhYXnbFk3tnJKFuq68qEAXsmYjrRDeG%2FNnSTMOaOu8AGOqUBRgLT2bLx9HKR%2FNUfWtA5%2B%2Btd3yV5UNYStAZ9K5UHHGtxzgj%2BG%2FbTtcZLh4wuYX6uJ3Zl7M595fwtzG1yhHR4QtmU0kFZkYpFTKsW%2FODTRAVW1x4PzVZaS%2FQwQj5NRp4b1lbq0OEEBv2I9Q%2BgdWXLtLaNfuk7kmIYc3UPkx4fjpCqcT74J4OaeIdkZrSj1W9mHh3CCSOWe3fOI4iCJ3AWjPYEr%2Bv3&X-Amz-Signature=dc6fe4c8ccc5702d853e0ea7b200c851747db2fcc71456f2566d12e3258e9a92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFI5IORT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCxRDk8NT0cRMnptC0o9YfKRJXpv6ft8wqWuEqD58TGAiEAnxJ%2Fj3M1XHVHZx9Uc2DiUMCgq%2BPXkQyRclcQk51QgJsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJ5qI2%2Fin7nVim2zuSrcA9Ia634FXE%2F0zfMJfKczvnTSgJGoNMv7yi2hC58TQtCx%2F7odcnaYbhV9S48KRli%2B%2BWUIhxBqsY1EWobXD3VPXlg%2FHSvhglJh7k3IP3CbZ9OHF5%2B5RI%2Bg3aKoER7JiPDoVR9LXZCWjpR0xAdH0MPlrGrljmflYNOvbs3h7%2F8wbovaqhELw6o6PTVWabNnYn3MFnuNot0OmsIBDwOpXQPl9NB87S3EvAGsL1OKqDJGiWfQj9Q59AY1qyPFLzgqWj%2BqkCSeF7%2BoIO4j4Jg6WGLIEB4EeMste7YAz0tolhXNsxNfQBSaHTm3PusO64OE7FqOnVB450N%2FwnnnQ%2FDEVqbh4kvPvkwZ4BsUT7h%2FrFfI%2BcGEiTGvEOCTiXBOsZI0jTW5XCL%2BZ84J5R5dsAHFiE6RJJ%2B4Fhcstep0Un9i5W5COP8HH216D96EmkXUe8r0T%2ByqqgD0nRz0V6MmNi539yivJbwow66v2ZbHK0YFwev9iPF8HhywI24xh%2Bu%2FrRMww0iBSA5ddPlNgGddytDLsprn58DemDtzo9Z1m%2BHN6RNPXyKH5gcFPA67dA27k1n%2BfyEfAcivRT9NAMtKsuyb1IWnRT%2FyEPdOuxRO07yiyPrNV827byyDl8h4rBItXVfPMP6KusAGOqUB4pTYPbF7vhommQ0yjr%2B25JWg4Wp3qI2V2uDgN989p5jH%2BzkSE1Q%2BAFZ52EFZfSVoRTr5Kr6dUuIh0lY3d4XUvs7oKUO8XMlhtKnib0OBnCQSWbSioOHZLrFcoU%2Fd1fpoSF2RkPBWncMdCmioLJp42%2FDeb4Kr7VbyfvZbn%2FIaiodu0FIJblHEi%2BBwuISnVVq7D2IbcLtgyR7t322ANIfKW%2BSpqBw2&X-Amz-Signature=c00db0e57b2aadb6206ac30dcff0c981b5a867ed5610f1bd2c8c7e38e6f5af63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKNXGLW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa4sBgiKIBwexJ3suM%2BwiafGf9pWsmrk3jlk92jh6SHwIhAPyvV6R18G0dWjBaZDnYE9%2BuwfuRpT8Ko9jc4FrU29beKv8DCGUQABoMNjM3NDIzMTgzODA1IgyX7p2TOkogJyTGHrgq3AMgpgbtPPArtNZMXNVlRKHw7wA%2BJuk1Gv7aMFiMTpzeAtoN3AhkBCzGlsaPmlydGyS6E9whTsyFHkLwtaDen0TA9o40i3AIIKXyyo%2FTHwQh%2F7aUclTZTxg9VXXfmf8IVIrUic1XOGUoM1xSDY%2BRDqp%2FES3Mi28Q8BpgdUFBOZS%2FTKaaDXCqtIWElBN0x9Tnp27jVnLMg2Bwq7zE1s0koxYLxdY0rK21OXSNUCcdQbnugBa3VjgnYagxS2EhzYYc1Eg7dMyD1S1%2Bbz9vHJx59ogpEUiNDJUTUDt7th93c19OF9zLA%2BkUBQLnh7mdc101%2F2r9oXFYpecZdFzej1%2F7ezFkMNCv%2F%2BHhamCe%2BVZgOeIk27ocunagqyelhvr%2BzKJrYolAMe2U0xEpYlyZZNq3ppc%2Bv2%2BEASNYPAbGv%2BLpYETMsB1YdymjugFYHe0ekOLQKsDxhxMyY9JYzt2qxC6pONU3iJ6ajDmc29t0Mwy5NMYvdMr3L2sc62Rvi2WwS3STqBOIHLEa8MV5j5uTp2vjWFYvfQ7RvQwwuW%2Bw9eXOmdNmY4II8O9ywOg230TM7IUuwgZSV2D5xaiAKNyM0XZC3oorzGv8gnia3phYrLWkXI4sf%2Fhh%2Bld9tcMNHjGTODDyirrABjqkAVjiXG4XTSDNqvVK9vB6%2B1UYZgFCnwAw38daELfXZJGvrBQ9Cx2i2kPoBLVvrmCszCTfTeOOGBiMGGeNgTPpv8vZzW5HrRx1MuoBfvfbFlNNdt5dxHPon%2B5CvsgbsVrCM%2F4Q1TC7VUN9fwgovWBHPMy3KV8Pk%2F%2BYSMDs3vNABkKxAPVd7b7%2Fyzf7eNodYSNBAbtoagxpnJnV65vfwU2pPvo538w3&X-Amz-Signature=af749ef5a616f4debe91b30f9e92728c40ed40147a3bd22158e6c7ab9cc80f59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN4GF7WB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXDjJmhx5n6QwSPnZIMCF1p3MItEb7PZw17taNJ%2BS1CAIgP684h84S8fKRLDlksvAPDQLpQuK7njJWFqCw6EQa%2BwIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIwLtkf%2FV2OKn46wyircAyYiZ4t3SVLLmORyAf6sGimgawmhYwxK1VYm0MSL%2FzBkfzZIIv3nUZLP1%2BQPyOn57pxiea2kmhM96639K4lL6FbJV%2BzeS5JUojHeRf3JDsJqY7NyjxkTEh%2FAY1NyrgCRulwIUjcsCK5tSfRy8bLEtVVt5ZnN21YvI9xUJ0ektKaShDspUUQ%2BTb7bRQfUpIPMcixBTRM4i5Bj%2FT2OmNv6veLIE%2FQIoSRrjwuO6K8joNvUXcrGTZgLP4xKRa6MG%2BoX3czuxCUi7Lz3tF6qdREVQIN2qAD3ZDgeG9s82ix8%2BfF4aEaH%2BgX8l1b%2BepoY2B5rqSBQQD1sfwrF51kYUgYQXRfwCW7FLQ4sF4CYO6VjgdkkCnwbjKDHJCHXCvEeEdkUZDQNR7IYQLuoBRbVHuwMYNoDmERoJ%2B7cgr8cHztcYDX7qoA11WXahjCjRv1gflFj8odPG2LeXlIRPPCRESKsNfn7zg5JrIKeGHmpmEikY6wC0yVQF82XdwJ7mm6GBLm5OPDugjiRxV6o4XqVhbzGOYRWJsSmAa%2B4gi25x5LAfdgf6p9zdn%2F9x%2FHHatBm2LDRFE%2FjSBP0bqhIKHBd2nLpoSDqHhYXnbFk3tnJKFuq68qEAXsmYjrRDeG%2FNnSTMOaOu8AGOqUBRgLT2bLx9HKR%2FNUfWtA5%2B%2Btd3yV5UNYStAZ9K5UHHGtxzgj%2BG%2FbTtcZLh4wuYX6uJ3Zl7M595fwtzG1yhHR4QtmU0kFZkYpFTKsW%2FODTRAVW1x4PzVZaS%2FQwQj5NRp4b1lbq0OEEBv2I9Q%2BgdWXLtLaNfuk7kmIYc3UPkx4fjpCqcT74J4OaeIdkZrSj1W9mHh3CCSOWe3fOI4iCJ3AWjPYEr%2Bv3&X-Amz-Signature=73e71382097bea158453df433a8fae536d067aaccacbc6a7ce94d97d72ff0388&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
