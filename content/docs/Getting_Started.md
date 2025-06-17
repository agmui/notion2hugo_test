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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOFNQD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMHTeHpHa%2FJSQ%2BJo%2Bq5ZgPng4J%2FVu7pEd30Rb5PgG4lAiASTv8LWE3LaiKX7ChiAdGR67UWNMMMZqRWER8aO8oQ9Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAFSSaVfQDNS9Hwf5KtwDxN6uuJur%2BaqLrX8pdLzPuICKsr3TgcIekoIjoOVkHWquOKof7%2BiIC7G0WPUf9lAqgYtVmnoApijnmXzzt%2BbVbLqrhVuib0jH6plNOcB4lt9nEIYFboMnIdDgEzb6jqU7jmDF9RqQ3l%2FlIBX2C%2BkdKAPSFFEXWzLaVmCsx%2BJ%2BjpQPlMAUQyUYv1yJGeG3XzGj0u7HS%2BlFEMtP1J1Nx5j78lgYw3R%2F5sSM068srQSMmXcLTnLDF97SBvPfC%2FgMYn9Z92AqWvAOvMWT82dlmcdqwGxdRnRr2Bs1SdqYBhEmoAmd5WTT1yQGO%2BbEG0WAod01ZTe1hko6ULpU3CTxvWVKZeucLXFc1Dhm2uBqGOObMfU2A0rJVHgOV0%2FjKsnbNGO8DVV6ojbLQ5%2FfxIWDBcTXHvrFOGM7igZPesD6sfUwI5bJz%2FT%2F%2BEfnd%2Fpsw0ImeXZnpcsvvoftD4BcQmpXI32w%2BKVl4n6%2Fdbvxdq04IhokTntMVl2U7n8i0cREtse1ifsB29l%2BGIL7oMGZiwY9gTf1FhcLUl1Rs3n73fTiBChEpa4db6Nha68lb2rsRUAZK%2Ftvbm9th0K%2FrkMsG27EKkHWO0xKxi0kOL3mLAozeBpgh6bmmK0JOlTZROnLkXkw7qbFwgY6pgHkRu0str%2FkyWRYm%2BMCvYHWEIm6YXUD9I1Ih5OnuYLk3ynVCJD4aIwxARFrCUglVww1x0GhwOm3UypuvF0hyp%2FXxLNPAx5Ixck020Ll8ST0I6ic2L450ql9gB9e5y3ZwCC1Vz8uXDIRIK4WgQwnY%2BYVAaMPGkdT2E8eb6agA0RRRXdec%2FnMTQx9AobKsjr6GXLV%2B2xYEe7Qrgb6Iz6s5mN%2Bc8HCo5vK&X-Amz-Signature=044874db9ba395f2acbd625ca6c1cf9a4ef072ff706a31707716354a47c07df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOFNQD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMHTeHpHa%2FJSQ%2BJo%2Bq5ZgPng4J%2FVu7pEd30Rb5PgG4lAiASTv8LWE3LaiKX7ChiAdGR67UWNMMMZqRWER8aO8oQ9Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAFSSaVfQDNS9Hwf5KtwDxN6uuJur%2BaqLrX8pdLzPuICKsr3TgcIekoIjoOVkHWquOKof7%2BiIC7G0WPUf9lAqgYtVmnoApijnmXzzt%2BbVbLqrhVuib0jH6plNOcB4lt9nEIYFboMnIdDgEzb6jqU7jmDF9RqQ3l%2FlIBX2C%2BkdKAPSFFEXWzLaVmCsx%2BJ%2BjpQPlMAUQyUYv1yJGeG3XzGj0u7HS%2BlFEMtP1J1Nx5j78lgYw3R%2F5sSM068srQSMmXcLTnLDF97SBvPfC%2FgMYn9Z92AqWvAOvMWT82dlmcdqwGxdRnRr2Bs1SdqYBhEmoAmd5WTT1yQGO%2BbEG0WAod01ZTe1hko6ULpU3CTxvWVKZeucLXFc1Dhm2uBqGOObMfU2A0rJVHgOV0%2FjKsnbNGO8DVV6ojbLQ5%2FfxIWDBcTXHvrFOGM7igZPesD6sfUwI5bJz%2FT%2F%2BEfnd%2Fpsw0ImeXZnpcsvvoftD4BcQmpXI32w%2BKVl4n6%2Fdbvxdq04IhokTntMVl2U7n8i0cREtse1ifsB29l%2BGIL7oMGZiwY9gTf1FhcLUl1Rs3n73fTiBChEpa4db6Nha68lb2rsRUAZK%2Ftvbm9th0K%2FrkMsG27EKkHWO0xKxi0kOL3mLAozeBpgh6bmmK0JOlTZROnLkXkw7qbFwgY6pgHkRu0str%2FkyWRYm%2BMCvYHWEIm6YXUD9I1Ih5OnuYLk3ynVCJD4aIwxARFrCUglVww1x0GhwOm3UypuvF0hyp%2FXxLNPAx5Ixck020Ll8ST0I6ic2L450ql9gB9e5y3ZwCC1Vz8uXDIRIK4WgQwnY%2BYVAaMPGkdT2E8eb6agA0RRRXdec%2FnMTQx9AobKsjr6GXLV%2B2xYEe7Qrgb6Iz6s5mN%2Bc8HCo5vK&X-Amz-Signature=0dc6f6e9c3d254bbb942ca1bfd93272be1c10d47cbbc33bb727174f510196c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOFNQD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMHTeHpHa%2FJSQ%2BJo%2Bq5ZgPng4J%2FVu7pEd30Rb5PgG4lAiASTv8LWE3LaiKX7ChiAdGR67UWNMMMZqRWER8aO8oQ9Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAFSSaVfQDNS9Hwf5KtwDxN6uuJur%2BaqLrX8pdLzPuICKsr3TgcIekoIjoOVkHWquOKof7%2BiIC7G0WPUf9lAqgYtVmnoApijnmXzzt%2BbVbLqrhVuib0jH6plNOcB4lt9nEIYFboMnIdDgEzb6jqU7jmDF9RqQ3l%2FlIBX2C%2BkdKAPSFFEXWzLaVmCsx%2BJ%2BjpQPlMAUQyUYv1yJGeG3XzGj0u7HS%2BlFEMtP1J1Nx5j78lgYw3R%2F5sSM068srQSMmXcLTnLDF97SBvPfC%2FgMYn9Z92AqWvAOvMWT82dlmcdqwGxdRnRr2Bs1SdqYBhEmoAmd5WTT1yQGO%2BbEG0WAod01ZTe1hko6ULpU3CTxvWVKZeucLXFc1Dhm2uBqGOObMfU2A0rJVHgOV0%2FjKsnbNGO8DVV6ojbLQ5%2FfxIWDBcTXHvrFOGM7igZPesD6sfUwI5bJz%2FT%2F%2BEfnd%2Fpsw0ImeXZnpcsvvoftD4BcQmpXI32w%2BKVl4n6%2Fdbvxdq04IhokTntMVl2U7n8i0cREtse1ifsB29l%2BGIL7oMGZiwY9gTf1FhcLUl1Rs3n73fTiBChEpa4db6Nha68lb2rsRUAZK%2Ftvbm9th0K%2FrkMsG27EKkHWO0xKxi0kOL3mLAozeBpgh6bmmK0JOlTZROnLkXkw7qbFwgY6pgHkRu0str%2FkyWRYm%2BMCvYHWEIm6YXUD9I1Ih5OnuYLk3ynVCJD4aIwxARFrCUglVww1x0GhwOm3UypuvF0hyp%2FXxLNPAx5Ixck020Ll8ST0I6ic2L450ql9gB9e5y3ZwCC1Vz8uXDIRIK4WgQwnY%2BYVAaMPGkdT2E8eb6agA0RRRXdec%2FnMTQx9AobKsjr6GXLV%2B2xYEe7Qrgb6Iz6s5mN%2Bc8HCo5vK&X-Amz-Signature=a4371f75e7353f093de0721d6eb042a8a5d96c9b5c0e92079f944df2bfed8de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYX4REQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BkrgxkcJlPdNqbqajvvfuC8skfBHB9qM9N7gSwwmXXgIhANdfk%2BmlgSRJrgq8jAom9oVWLEdIjsSr8TUwTO%2BQQNZ%2FKv8DCHUQABoMNjM3NDIzMTgzODA1IgyQ1TcusLLCbH9ZvGgq3AOS8ZE9SJHoaXr9j%2FX6NMWB6LZ0owda4SBbO9RcrwwjCTQl5gw%2BZigMzymCkDf26fRShcPKY%2FvoR4pXHlmVQGeKRztmFwgOfWT1KQIBTMBn07vcztXDKxe5rfHsi8NC1GiUfVA3i8FqL5O7L4KG2LI0nc7GREA8e5BisGE2mNli07dFsQvnDt2L5jZ%2Bqv0bJIBT%2F5GZvKJCmaT%2Fa35Sf5xGZzeA%2F8MAgUFumC0ZVhgMnfnSzLbXmHyKfLgQbOLqDaMZoTnW21bwpzoBFois1EcT%2FlgGuXaadVDNQkZ9jrhhHSh708wGAjd5fw88w05RnBKVkWGFVGo1EGsjVqpeztAn9SDiWaJ088MKb35E09e73VMjaNS%2FTPFfj7NM6IkfkqPCAPiijurXr%2BdvnBvq4pYvEYs3gAmjC4oWuKSjnimzy7jB2JBMILbm4WH3%2F3mCTxxU8AA3vhZaoXUlOPFDVO0lOAip9WJKlVuF5HdZBacxhLHu7VCmOuXY6mNlP1eAjnIQelzCiiRK6vgWdxVNJpwbTQ2vZjc16duHY27r09CfN50ONKbIZxddcONVZOBRJK3SILLU%2BgKmnUtE8O9SSBZMjccyow8JTQgDevkPt3XLEWncbQRg1g1Xo7L%2FKDCgp8XCBjqkAQuIVhMfVMmS7EZREDE0ykdIKEMCnrmpbPy84y%2BsS4VfIw7lbXJTqSpr0XMbr7FYNz2Nop4cWDPVLNGql4xz9DWw3ykHBjz4rXsVFO1ROuQekaFC%2BNfEDHWdhrlQLieFRhjQWYcd%2FYG0mMqiNh%2FKHPHjn0nvIV6HnEfnzra2SunDwwaON3oJUzTkQSth2Ii4CIEbDwJsIt1fPWaOvorlN0rbNiQF&X-Amz-Signature=ebc2532679b7b37b8c9d42cb30dd1af40d9a5ef636599813b8745b5333e7a67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLLABYH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQA8Nr9o%2F2nr1C4Orki5AsF53SIbryS3%2BsECmZ1txo7AiEA0kcAkk%2BQYDQiqJeL33Lz6cNI0r9pbRGpncn7d5VLM1Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBOhMjzxH6puucfBnircA6WJ0Bw90N%2F81GTegO%2B4oqJqy8MH6r89eSn9gRdeZaoUMktvoXzohEmtWdAat2LoXqKxqCboUoZC%2F3r9zP%2FBMbCTkMniNAAFDvqHtNkhK72Nklk3g9hO5slC1o7PAuT2BzDwHtOZdKlA%2BIGOPSKO%2F2g1xaKEqUydHZwXrTBSiMubRzhOM%2FNyvjKyqzlpYBivbqJK1yleQC46vG1HnxAivP1yeQ82fZSBo%2B0UA7uls80sq4gxryA15S3H9KtCNpIKn7HH0qJLEcrhA7mGgSSWPdcnfgQFoaqVMkRrDVtfZ3nB94ImbqR934%2BuC7pOk9bYhsISSOMRb115HYTgyGVSpoGh8UpHaMIZMkCzYQv4Rlp%2B6vXrWq1DLk1SwyMGUnZJ52sBPkqJ1M5bSUFwQk5lqF2QswrFPbO7A%2FcdFDBTDL44tsizEOiD32%2BVtHi1TZnLlB28stouXWuQREwHYAkUGe4MA4R0KwQYlVoaDxSh1HDfatmMWyi%2BifNGYjCLnL5IU2YQp0fGNiZkQwYcdyQwqfFpxmYnlC1Pxqrujr6xtxEKiqy4U9dNwH%2F5YLvRiFBH7b0YaVmycPP1OKYSBgxC5vNj6JvsBcw2xWVlrSwauQZl5U%2B6L%2F1sN%2FnOd4HBMKSnxcIGOqUB2Mm8LBxWFKrBXGOkesg%2Fv9s3YlCvy3NqffP38v3J8oiToGEHZTAmQqQfdFD0lhrn1tRulVu6eX9rISbVW2Utxqdrnv60AbYy%2F6iY2OmvtdzGQcwkyvMkJFp3ZUZ2H7bhacGfl7Qu%2FRZjz8kYdIrwLjdG%2BJr2Axrklp2KXQ9m546Lct8A2UrqA68UxPEJZzxzSBRbAoZVO%2FPeBZlVyzRtXQznQ19b&X-Amz-Signature=ee5c7e08de506f729a82a0f4f371104ebdca7c6b53a845c8e225ebb702fac6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOFNQD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMHTeHpHa%2FJSQ%2BJo%2Bq5ZgPng4J%2FVu7pEd30Rb5PgG4lAiASTv8LWE3LaiKX7ChiAdGR67UWNMMMZqRWER8aO8oQ9Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAFSSaVfQDNS9Hwf5KtwDxN6uuJur%2BaqLrX8pdLzPuICKsr3TgcIekoIjoOVkHWquOKof7%2BiIC7G0WPUf9lAqgYtVmnoApijnmXzzt%2BbVbLqrhVuib0jH6plNOcB4lt9nEIYFboMnIdDgEzb6jqU7jmDF9RqQ3l%2FlIBX2C%2BkdKAPSFFEXWzLaVmCsx%2BJ%2BjpQPlMAUQyUYv1yJGeG3XzGj0u7HS%2BlFEMtP1J1Nx5j78lgYw3R%2F5sSM068srQSMmXcLTnLDF97SBvPfC%2FgMYn9Z92AqWvAOvMWT82dlmcdqwGxdRnRr2Bs1SdqYBhEmoAmd5WTT1yQGO%2BbEG0WAod01ZTe1hko6ULpU3CTxvWVKZeucLXFc1Dhm2uBqGOObMfU2A0rJVHgOV0%2FjKsnbNGO8DVV6ojbLQ5%2FfxIWDBcTXHvrFOGM7igZPesD6sfUwI5bJz%2FT%2F%2BEfnd%2Fpsw0ImeXZnpcsvvoftD4BcQmpXI32w%2BKVl4n6%2Fdbvxdq04IhokTntMVl2U7n8i0cREtse1ifsB29l%2BGIL7oMGZiwY9gTf1FhcLUl1Rs3n73fTiBChEpa4db6Nha68lb2rsRUAZK%2Ftvbm9th0K%2FrkMsG27EKkHWO0xKxi0kOL3mLAozeBpgh6bmmK0JOlTZROnLkXkw7qbFwgY6pgHkRu0str%2FkyWRYm%2BMCvYHWEIm6YXUD9I1Ih5OnuYLk3ynVCJD4aIwxARFrCUglVww1x0GhwOm3UypuvF0hyp%2FXxLNPAx5Ixck020Ll8ST0I6ic2L450ql9gB9e5y3ZwCC1Vz8uXDIRIK4WgQwnY%2BYVAaMPGkdT2E8eb6agA0RRRXdec%2FnMTQx9AobKsjr6GXLV%2B2xYEe7Qrgb6Iz6s5mN%2Bc8HCo5vK&X-Amz-Signature=3813183ab41154a642118d2c0ca9fc77f347cbfd277745e6cc1f59747d0d6947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
