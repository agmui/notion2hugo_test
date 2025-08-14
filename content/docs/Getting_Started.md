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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFI7AM4U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCDSC7G3hTtxsRrOG2ke8ZosB7z2S0I%2F378txtyQGOYLgIgMxeFzLL4erx3DsabFXbqWVciAAo7OV0oa365n2HSj6sq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLutiUfYDyjWFoAkdCrcA2IiK8yJC4FjZDnUYS5YU%2BLVI9jNn9Dc4UTo0TtdmxtLd4YjpL6r1y05WEYAcrszhlQIv32JzZZqL%2B%2FUiQs4Kjeif6G2JsEFRQHI6gkxvA9Pt2kNqn3MZYP3JDx3d%2F1wfUP1UwK1reQ0iI5iqvRsJ18ViM3L63LA0%2FN8gxuBtBSjg2frUw4uuyMVZONi3P7hqXb2wgtN8DzZZNhnhbuX2%2Fik7bqT5O%2Bk8mBTVz0oCNwqp1itr3%2Bm9vSeeIk5vebOAqpqtGkaFgCzRClQLyYfG3UkJYGJ9uzeplfxRK03ypdq46rn4y%2Boo4i8AsDjhygOUKPLOrQPEw1MVOI7oMQazofsDy3RW41COmIUaIRjeDi8oKRCutCV1t%2FfqjLPhOd17dBEC6e88TmmZ1uk8C8sAQZPqezkU2p1op3SXgpFyYnNyoNQbFfouHM6z8qCcqINNipTS9V61lEjVodbU2FlbkUq42V4rVajs%2F9I0X%2BzGiCVSCvvSKB7Uvz9tYLeMClZJBK0GRrZIGGdP46%2FpukSqHLt2%2FANgTMTsFlwV9IrUkPYCWisxuhVsZZq1FIqweZ8ychk7%2FHt2IG06H2xqXZ3IAn%2FpZ29S1qjndd6Ogn25klFBmaNSNF2S9eSaDuAMJGN%2BcQGOqUBHnC19kvAAX9o%2BKg425FUiX0sRdIwBiO2AuIWglJmtIHo%2BF%2B192req1pGNu4SD%2FR3fsvyzdAQUia4a6tQzrMylgWChxkOxL6DTNUvmzHeeYbwOnkWuD8fUfv7H43A5EKR713mQOPfuLBjzMoPuLEXj5AuGardkuRkAkAVp6uUb4%2FE%2FLTtKGSTXSnyauEyRWE%2BcJ6XTJ2Q3sicgBqqNJxtyLIbwYd0&X-Amz-Signature=dae6b8f2ca2073e3cfbf6cb6ab4b1518521558b0ffc3efb694af0b4251cedbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFI7AM4U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCDSC7G3hTtxsRrOG2ke8ZosB7z2S0I%2F378txtyQGOYLgIgMxeFzLL4erx3DsabFXbqWVciAAo7OV0oa365n2HSj6sq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLutiUfYDyjWFoAkdCrcA2IiK8yJC4FjZDnUYS5YU%2BLVI9jNn9Dc4UTo0TtdmxtLd4YjpL6r1y05WEYAcrszhlQIv32JzZZqL%2B%2FUiQs4Kjeif6G2JsEFRQHI6gkxvA9Pt2kNqn3MZYP3JDx3d%2F1wfUP1UwK1reQ0iI5iqvRsJ18ViM3L63LA0%2FN8gxuBtBSjg2frUw4uuyMVZONi3P7hqXb2wgtN8DzZZNhnhbuX2%2Fik7bqT5O%2Bk8mBTVz0oCNwqp1itr3%2Bm9vSeeIk5vebOAqpqtGkaFgCzRClQLyYfG3UkJYGJ9uzeplfxRK03ypdq46rn4y%2Boo4i8AsDjhygOUKPLOrQPEw1MVOI7oMQazofsDy3RW41COmIUaIRjeDi8oKRCutCV1t%2FfqjLPhOd17dBEC6e88TmmZ1uk8C8sAQZPqezkU2p1op3SXgpFyYnNyoNQbFfouHM6z8qCcqINNipTS9V61lEjVodbU2FlbkUq42V4rVajs%2F9I0X%2BzGiCVSCvvSKB7Uvz9tYLeMClZJBK0GRrZIGGdP46%2FpukSqHLt2%2FANgTMTsFlwV9IrUkPYCWisxuhVsZZq1FIqweZ8ychk7%2FHt2IG06H2xqXZ3IAn%2FpZ29S1qjndd6Ogn25klFBmaNSNF2S9eSaDuAMJGN%2BcQGOqUBHnC19kvAAX9o%2BKg425FUiX0sRdIwBiO2AuIWglJmtIHo%2BF%2B192req1pGNu4SD%2FR3fsvyzdAQUia4a6tQzrMylgWChxkOxL6DTNUvmzHeeYbwOnkWuD8fUfv7H43A5EKR713mQOPfuLBjzMoPuLEXj5AuGardkuRkAkAVp6uUb4%2FE%2FLTtKGSTXSnyauEyRWE%2BcJ6XTJ2Q3sicgBqqNJxtyLIbwYd0&X-Amz-Signature=bde2626014af05b829bb0424a307bee59a1585c2e97f9df1f241a60fdb76af5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFI7AM4U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCDSC7G3hTtxsRrOG2ke8ZosB7z2S0I%2F378txtyQGOYLgIgMxeFzLL4erx3DsabFXbqWVciAAo7OV0oa365n2HSj6sq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLutiUfYDyjWFoAkdCrcA2IiK8yJC4FjZDnUYS5YU%2BLVI9jNn9Dc4UTo0TtdmxtLd4YjpL6r1y05WEYAcrszhlQIv32JzZZqL%2B%2FUiQs4Kjeif6G2JsEFRQHI6gkxvA9Pt2kNqn3MZYP3JDx3d%2F1wfUP1UwK1reQ0iI5iqvRsJ18ViM3L63LA0%2FN8gxuBtBSjg2frUw4uuyMVZONi3P7hqXb2wgtN8DzZZNhnhbuX2%2Fik7bqT5O%2Bk8mBTVz0oCNwqp1itr3%2Bm9vSeeIk5vebOAqpqtGkaFgCzRClQLyYfG3UkJYGJ9uzeplfxRK03ypdq46rn4y%2Boo4i8AsDjhygOUKPLOrQPEw1MVOI7oMQazofsDy3RW41COmIUaIRjeDi8oKRCutCV1t%2FfqjLPhOd17dBEC6e88TmmZ1uk8C8sAQZPqezkU2p1op3SXgpFyYnNyoNQbFfouHM6z8qCcqINNipTS9V61lEjVodbU2FlbkUq42V4rVajs%2F9I0X%2BzGiCVSCvvSKB7Uvz9tYLeMClZJBK0GRrZIGGdP46%2FpukSqHLt2%2FANgTMTsFlwV9IrUkPYCWisxuhVsZZq1FIqweZ8ychk7%2FHt2IG06H2xqXZ3IAn%2FpZ29S1qjndd6Ogn25klFBmaNSNF2S9eSaDuAMJGN%2BcQGOqUBHnC19kvAAX9o%2BKg425FUiX0sRdIwBiO2AuIWglJmtIHo%2BF%2B192req1pGNu4SD%2FR3fsvyzdAQUia4a6tQzrMylgWChxkOxL6DTNUvmzHeeYbwOnkWuD8fUfv7H43A5EKR713mQOPfuLBjzMoPuLEXj5AuGardkuRkAkAVp6uUb4%2FE%2FLTtKGSTXSnyauEyRWE%2BcJ6XTJ2Q3sicgBqqNJxtyLIbwYd0&X-Amz-Signature=3669a3c56449dc11e6bff9f8c6e9cbc602ad574172db4de4942129209866cd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3G2WLE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDue7qC5bYqUnX7QbjZsPPP60ncP5Pq76hVS72vjSZkWAiAXtrfhZYsG4xTBKyC2bxGudVK%2FOXRVi3wIptJPfVSbOir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMBwweZCZnGNvJHbIUKtwDdBo7HUz8ZlOTAJqQgPVVXO2RV1GzbDszbaBNiKWKlLp%2FJLC%2Bx5StfPALKxFur2QunbumbNmZoIO1LJybRYuD8t%2FhCigRKMAZAs1yliinkbzZsBLZO%2FXcp6G4%2BA%2FEbni%2B8MsVhuieblbF6mFG968cu%2BKXBKSMQwYgIPDuNggR6y%2Bg1d67ZLU4P1qJMxdz5ZPewqQXYKTblGEB7G7M8CigRmjxjLOXxrWZd3Z%2BLVDx89qTeNytRbuvl3NZePzTOfA7HYFwTB1bQyJERDfohIWW2HDiNiN6fB6yHUvB7W8c2TvZkQ2JufGX3mhUo6EupUP4a6vG%2BIHVNemPLEZb2LPUiHAaDmihXP0oq0ggPF9lZh1zWhU5Yk3iHgBw8chp0qqQhwpusJ0yf8tjqjgDHra%2F8Iu3FMzOaWvAAO5D925gcHdIjDatMR4HareKlOqoGISUqhDsdf8e1X3pdh%2BptSxAHyAIlIcd4tYlBXRj1zr7PCNxScq%2B3LDAH7rod47Nlurn6FB1QC%2FF1sOSf9SA9fxVM5gL%2BmB4GG1hb4TKnu4Pu5Iejix9rf4tIdSs4rU5qIE8IIKqZldgJcNyHJi3c06yhtLsE4kFzn5ppHskL%2F%2FHHajCRPsXrp76HakpDiQwiI35xAY6pgHtKwgmet0AmAGTcXjnYNIJ5CMrlm8btHpGM1B7vmYh0jbfrwbfUVrh7sp%2FU07Y1QOL8m1Jc%2FJZeOPme398VA2WuMHdlRvEBGg7lBDC1Jxk6iMyxmEwzAdUQM%2FytuWo5fO0jGEPbJeT06BX2bUql%2FEJ%2B%2Bzy446mPKdmQLfreC6eY%2FCkTIZ0a70lKcYsch5aVQ6Kl5CWtS8zo0kFrKUiRs0n88I8%2FZh5&X-Amz-Signature=a44990f0bd6a80826a788604e59b9e83d0dd1d65d76713c0e1aa9c4efc4b82f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGJNDOO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDIlQwTCJjHQzryhwgV%2FscXQ6codSg5so1Yce%2Fg2G%2FiDAiEAmJzpN41lE6AL%2FIcQmAk%2Fb%2FJtPgpLwmwgvuoEK6tzXmsq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFNJyF7OaXWNVLAFkyrcAyhHFFcPHxk1abMMzNsmefdeGBFzLOwNn%2BJ5C0CivV2osGyw9Yfl5b3jIOnhsVaatE4Fg3KB314RwnuN81hkTzd5coRCTTf%2FiP8MDk0B7cb%2F7v0k0L1UADJAAQykg61Uf9vnjb1Rpy1D4%2F7G%2BgU1plMoA0mtHqGAGOl%2FJUiYOn4769Jmsbdc7evHz%2BgSy68Y2PRMA3oPYixLMz0D137NYdwM%2BkxSuKwtBaj59xl8UbvzSPRtSqpeW01sdgk8sd%2FzvYqUfWbtaaDBOCGil%2BLYcjBGd6JbNuwr%2B0h2iI39YeKdBS%2FJfZqktIaMl2cOE8gy8O4uFfXnamD%2ByfRGBmHtwww%2BjP5SbVUJIYdzIgRhg4cOnDKyuZtYa0V6kurlRXf97H3a%2Bhv9iQSPSL3zt7zZsOPSegFGQWqhgY718cSQOF2GmaEtlvb3wBEhesYltuTp4fZRJc5llKhJl2zGvLfrcUBSDmsgW3wbXi1VDvlADhx1IO8BeSsmxO4FvIZLTDOXOeSKsN5hqLE0OLgMo1Iwf2hdFBZFcNFrJowmRcOYg%2BTeaNnDjKd9H3034hZUmwg4VVwzdFmidTOumbsCOIqNrFEovsS6El74BLYJhXZc3N94ivvPSMvUTQ0Jtx4MMPyM%2BcQGOqUBr%2FYK36rcZO2sDn3v2ofLi3OT28bdcO8RWjnjHy%2Bc1yM0WNFLyUD7TmPMKfL1fyvXL2c%2BR0DWvaC73w%2F4oEHY6nqErwmmwboRRMLDpuYgePhiDVZqMlidW3kTzpMsrKRzu%2Fw1xOZ2tLLvaQ%2FyqcWalYw0MQt6TgV48AShqJED%2BtanArbITiZstcBRkB6xZnkEg8IS5kq4H%2FyAfBBgBLrZSvY5ag64&X-Amz-Signature=5ae303dd40fd761b32aba4ac17879411642dc800a9c60e6b203f3ac997556443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFI7AM4U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCDSC7G3hTtxsRrOG2ke8ZosB7z2S0I%2F378txtyQGOYLgIgMxeFzLL4erx3DsabFXbqWVciAAo7OV0oa365n2HSj6sq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLutiUfYDyjWFoAkdCrcA2IiK8yJC4FjZDnUYS5YU%2BLVI9jNn9Dc4UTo0TtdmxtLd4YjpL6r1y05WEYAcrszhlQIv32JzZZqL%2B%2FUiQs4Kjeif6G2JsEFRQHI6gkxvA9Pt2kNqn3MZYP3JDx3d%2F1wfUP1UwK1reQ0iI5iqvRsJ18ViM3L63LA0%2FN8gxuBtBSjg2frUw4uuyMVZONi3P7hqXb2wgtN8DzZZNhnhbuX2%2Fik7bqT5O%2Bk8mBTVz0oCNwqp1itr3%2Bm9vSeeIk5vebOAqpqtGkaFgCzRClQLyYfG3UkJYGJ9uzeplfxRK03ypdq46rn4y%2Boo4i8AsDjhygOUKPLOrQPEw1MVOI7oMQazofsDy3RW41COmIUaIRjeDi8oKRCutCV1t%2FfqjLPhOd17dBEC6e88TmmZ1uk8C8sAQZPqezkU2p1op3SXgpFyYnNyoNQbFfouHM6z8qCcqINNipTS9V61lEjVodbU2FlbkUq42V4rVajs%2F9I0X%2BzGiCVSCvvSKB7Uvz9tYLeMClZJBK0GRrZIGGdP46%2FpukSqHLt2%2FANgTMTsFlwV9IrUkPYCWisxuhVsZZq1FIqweZ8ychk7%2FHt2IG06H2xqXZ3IAn%2FpZ29S1qjndd6Ogn25klFBmaNSNF2S9eSaDuAMJGN%2BcQGOqUBHnC19kvAAX9o%2BKg425FUiX0sRdIwBiO2AuIWglJmtIHo%2BF%2B192req1pGNu4SD%2FR3fsvyzdAQUia4a6tQzrMylgWChxkOxL6DTNUvmzHeeYbwOnkWuD8fUfv7H43A5EKR713mQOPfuLBjzMoPuLEXj5AuGardkuRkAkAVp6uUb4%2FE%2FLTtKGSTXSnyauEyRWE%2BcJ6XTJ2Q3sicgBqqNJxtyLIbwYd0&X-Amz-Signature=32fb6a95f643537807246f793b8648a436e85ea11d82c4a4f4cea1dd6f810524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
