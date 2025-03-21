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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXMEBB4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwySBewMVFigF2ytSSeUE1t8WBGgGz3X3yKy2tz9c%2F7QIhAKE3uAroLlRnxjqSzM2ywN8lJjxlvpI7hgxPwrAHVz69KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1MqsJP49v2%2F2A7mAq3AOPOZHJovC5oNBuj1zICg9bfRi%2BwuEm%2BLrwdNEsyxxepgwsUxBkzlyKFJ9MC9KJWD4xjvw120xWBzxUntpefucG%2Bhn%2FgE82RCn%2FXsH90oTJJfsEO47PSJJr5wZ%2BWGi1L7yf5OBIqDlwsLXBANtYibqcfj4HbcEELxV6nPipcLFmqjWv6m7QgNmYZoZH0w%2FYdCj%2Bfwj3tzWpunWheAAk4aaIt77%2B0h1cf19rVkT2iLU9Jwese57JdCCX5vcDhOFMzuesi%2Fe1aHmdWOPh1JEgz%2BfqkC11X%2Fxinpy4vXlVs3Vtf8igZdY22kdjCIxt%2BYD0%2FC4chh7lC2aS62KNFNLZ2%2FX4qZSss8a0st2zy6zoRsSa%2FZCMd%2BowOiinUKvqxFDlub%2BDcT2oEEZbG2GihnDfazShr85qIKlBRs9hxOtVQhQgdg1SqObVPI19IH8hWSZuqhHC2SV%2BXCs3rXZyl1cCIDCRqppm0Ldc1y3hL3BFG%2Fa%2F4KFj2l4HTClyV6FMd4wKBRZMuL83HIy2Cl1GsKN1UlCS6zq%2BqvsL5y3yVzrM%2FenZidyrHcX9vEUTNmVJtoOBB4R874%2BsZ%2B6oCKxlErvUIEPKSDLP3LV8cj9PYIzK7vjb%2B2tNIEmu0YpSCgh%2BKTDy%2BfS%2BBjqkAabvhauCLl%2BQCD%2FDuqMZ%2BQXj0GjxY573X4bRZQ9frX1mPEiTMFvj4SdD1o1X7Sb9ls5UDw5ERUTQA93AXk3iSoHo1hVvmh8RZIUNXPXjcOodoV4H14qPaxUZY3%2FWsMkL%2FuoE7rhLDzgrYuvlb5W1kQbBGksV3yuE3vN%2BE44cL55PHj9ogIMcubEH9lgAzgQ8Oem33BSRBidEAdT9TdAtRpvyJT5m&X-Amz-Signature=6fb4c9fc9ddd41a12cad6bad236ef4715933c7d05e248eb876e60f4bb2f469a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXMEBB4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwySBewMVFigF2ytSSeUE1t8WBGgGz3X3yKy2tz9c%2F7QIhAKE3uAroLlRnxjqSzM2ywN8lJjxlvpI7hgxPwrAHVz69KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1MqsJP49v2%2F2A7mAq3AOPOZHJovC5oNBuj1zICg9bfRi%2BwuEm%2BLrwdNEsyxxepgwsUxBkzlyKFJ9MC9KJWD4xjvw120xWBzxUntpefucG%2Bhn%2FgE82RCn%2FXsH90oTJJfsEO47PSJJr5wZ%2BWGi1L7yf5OBIqDlwsLXBANtYibqcfj4HbcEELxV6nPipcLFmqjWv6m7QgNmYZoZH0w%2FYdCj%2Bfwj3tzWpunWheAAk4aaIt77%2B0h1cf19rVkT2iLU9Jwese57JdCCX5vcDhOFMzuesi%2Fe1aHmdWOPh1JEgz%2BfqkC11X%2Fxinpy4vXlVs3Vtf8igZdY22kdjCIxt%2BYD0%2FC4chh7lC2aS62KNFNLZ2%2FX4qZSss8a0st2zy6zoRsSa%2FZCMd%2BowOiinUKvqxFDlub%2BDcT2oEEZbG2GihnDfazShr85qIKlBRs9hxOtVQhQgdg1SqObVPI19IH8hWSZuqhHC2SV%2BXCs3rXZyl1cCIDCRqppm0Ldc1y3hL3BFG%2Fa%2F4KFj2l4HTClyV6FMd4wKBRZMuL83HIy2Cl1GsKN1UlCS6zq%2BqvsL5y3yVzrM%2FenZidyrHcX9vEUTNmVJtoOBB4R874%2BsZ%2B6oCKxlErvUIEPKSDLP3LV8cj9PYIzK7vjb%2B2tNIEmu0YpSCgh%2BKTDy%2BfS%2BBjqkAabvhauCLl%2BQCD%2FDuqMZ%2BQXj0GjxY573X4bRZQ9frX1mPEiTMFvj4SdD1o1X7Sb9ls5UDw5ERUTQA93AXk3iSoHo1hVvmh8RZIUNXPXjcOodoV4H14qPaxUZY3%2FWsMkL%2FuoE7rhLDzgrYuvlb5W1kQbBGksV3yuE3vN%2BE44cL55PHj9ogIMcubEH9lgAzgQ8Oem33BSRBidEAdT9TdAtRpvyJT5m&X-Amz-Signature=d0fd117a2c39dc934121aeedfbae5d384b76715ead8a91df7a34ae359a1555f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE3TCQI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIE1wG0I96gn%2FQlK2kvGOjgnF%2BQgK%2FHcdSIQYNvc11hk4AiEAjIbGEOP%2BCDy%2FrgiIl8rAK37aVVAixvrQ5zW4H3P%2F0NsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1miICJAeg16qyk6SrcA6a1oy3HtCjW%2B8lD%2FAKxqPuaqcXybMmbTpa4gmwpJGe09Fa82sycM0cSi23dKs7PVtnM1oETGJN%2FuYm4bPbOZMNRSvw3b1MEAC5xnZc0IiDxPmm8uOK9e1CzaaOLobc24NKW9K3JZyFOfzydP0kB0biZ3%2FXz2yb0Y324zp8XLz0LxephHhBAhLY0O4E4h4tAdiCzHgbXiNZzAW9P6kVAbo24va9R94%2BP3Ln8otWUVebrWRRNnOLaiYVgV8ZODLDm9sp62nNy6AteMVto5O0xu2mxG8jJV7GIYRvORHYcj056QhHXmY8QPmo4ndOrH2BppP1tOXLpqJPRGgaWkGo8P5r0KQkXgbnmB3j%2FKWVdzrX6yDGsIJQL2GfyW6UzaxDCPfwFbFAzLtXbqpPGNfoLw4t0rYkxF6Wm7dhh4qdtdBbXnTytVZzr43DAEWowjAEVdOnUEidyKFByET1VdjULKSyNxY%2BxnZNTKmWQoZYTcmSruTzQ5BhHm9yaCaUPL%2Fy07f%2Bh%2FRfkHqh7Q%2Fla4PTmA3K0DUEjHBi4vTEOAlDQ%2FnCRx4bkOmh%2BYjBNg1JUUc7zjOaSvcb3IuGAsYINreV4CR2Ry9hrSEIJTd5NzC8kSb2kdrAiALUWBCwNI6jvMMD69L4GOqUBZ8gFsv%2F%2FSu79WzHApX9Obctx%2Fmnl0aq%2FZrmujVSSPd2nYa3e2x%2FEmTl1RR7YES04hxbqxqjFwdQQ7u7xqvNUR%2BeDD758BA37%2F27sC5yYhVdEk8F7HSqxevKBk9KioFnKzBbP5Iury6OugFDGK%2FvXb2mbVgxUCezGSHPujvT94ojlgVWxVdOtvTw%2FFntFNVLL88%2Fh0t2%2FRDF1HBTp0mH6b%2ButKlGc&X-Amz-Signature=a367c0f0d9089e65de8d351678acfb6129fcc039488c2044213239ce704d3f60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIK4LTYB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCikvyypPrsOupUMbYbo47kFJ5ub6PtASVF7JhpSrePXgIgALMUO4fPtPg446wSoZae58u8%2BM4nGkOaSB7OvxuF4Z8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAo74k7ZJ0PxPjuM1CrcA%2F58YcdmTszXBSjbsLcX27DP7uC2%2B6GUesJ0286lRDTHvR73FtIeODfNPWZlgBbk1kv8lUS2FqVnWJaMsUAooC2FCmwCVUvEAC8gzX1c3bCCw%2F9KF80%2F1wFgDeIPdGVxv%2BLtr9dMgrxIlEUyq3CVv4tngvoDekz3tnq3r%2B8dTbJhGEkYTFWH3DDekBN3Ci5aSdDTgRdCPoycC3YkQuBqZZXziOlQRJAetJn2DqpRVcn6o5vloDHWfpdnRENgige5zPa3gTUWxJD%2B0MW9aJM2sMQxSrUBOZPn5QdZbASF54hgZq8dy9XBEUcnKjUK0fqLWKJFDk%2BgnoUh7M8ubSG7pdyIw8zbv%2BpRBlZKLHZZ6Vxoh4cHMv26kpYt22uiiank44KQUc%2FkIfqozVr0w8GNdK32CNpGcMK82tIWUwJGxrG2wtJpVmm3DxBH8hVwLYzJhfMXXfeCw5LmYOYHobmvg%2Fu0ereI0gSmHuyt%2FaluDcIvqI5sd6Pnq3T%2FQa0ydFJMMigmYceer%2F%2B8KWwHf%2BGPkEht%2BammG2QjbRC5KbPGB7cYVTZIM%2BzTa9cR263oijAh6QTNFfSopkJqHSr96YUkcinSO72xEkGBXLgXa8wGRwFj3PCnhHcysRK43AzoMMD69L4GOqUBOPtgKhSzrCOSKwu1UZbZQAgpiYDe8vhnbsORpIbP%2Bpbgm9EXPeqb0Wk0tTI5XfO8fScwDP3w%2FQ39RS3LCniB4WItdqQ465Bsh7eGGzOapD4JCNbR%2B%2B7ihQqIWDVjOvByzwLoqRl4KzGIVIB1YYSWt%2FGe6caHYmc8dH%2FbiV9Vl3hmZvRSL0lM6PgF%2BQJCIIOtXwPQX4T2qIWwudOkoFGYwi5q71g6&X-Amz-Signature=9150875441c234f224032169fc9019fe7cf2a00a657d3969fc06fb571ff92ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXMEBB4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDwySBewMVFigF2ytSSeUE1t8WBGgGz3X3yKy2tz9c%2F7QIhAKE3uAroLlRnxjqSzM2ywN8lJjxlvpI7hgxPwrAHVz69KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1MqsJP49v2%2F2A7mAq3AOPOZHJovC5oNBuj1zICg9bfRi%2BwuEm%2BLrwdNEsyxxepgwsUxBkzlyKFJ9MC9KJWD4xjvw120xWBzxUntpefucG%2Bhn%2FgE82RCn%2FXsH90oTJJfsEO47PSJJr5wZ%2BWGi1L7yf5OBIqDlwsLXBANtYibqcfj4HbcEELxV6nPipcLFmqjWv6m7QgNmYZoZH0w%2FYdCj%2Bfwj3tzWpunWheAAk4aaIt77%2B0h1cf19rVkT2iLU9Jwese57JdCCX5vcDhOFMzuesi%2Fe1aHmdWOPh1JEgz%2BfqkC11X%2Fxinpy4vXlVs3Vtf8igZdY22kdjCIxt%2BYD0%2FC4chh7lC2aS62KNFNLZ2%2FX4qZSss8a0st2zy6zoRsSa%2FZCMd%2BowOiinUKvqxFDlub%2BDcT2oEEZbG2GihnDfazShr85qIKlBRs9hxOtVQhQgdg1SqObVPI19IH8hWSZuqhHC2SV%2BXCs3rXZyl1cCIDCRqppm0Ldc1y3hL3BFG%2Fa%2F4KFj2l4HTClyV6FMd4wKBRZMuL83HIy2Cl1GsKN1UlCS6zq%2BqvsL5y3yVzrM%2FenZidyrHcX9vEUTNmVJtoOBB4R874%2BsZ%2B6oCKxlErvUIEPKSDLP3LV8cj9PYIzK7vjb%2B2tNIEmu0YpSCgh%2BKTDy%2BfS%2BBjqkAabvhauCLl%2BQCD%2FDuqMZ%2BQXj0GjxY573X4bRZQ9frX1mPEiTMFvj4SdD1o1X7Sb9ls5UDw5ERUTQA93AXk3iSoHo1hVvmh8RZIUNXPXjcOodoV4H14qPaxUZY3%2FWsMkL%2FuoE7rhLDzgrYuvlb5W1kQbBGksV3yuE3vN%2BE44cL55PHj9ogIMcubEH9lgAzgQ8Oem33BSRBidEAdT9TdAtRpvyJT5m&X-Amz-Signature=d11e955e55a7cea7f9e6162d36d9b62123176a3625ccd914b19ed96ad99fc064&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
