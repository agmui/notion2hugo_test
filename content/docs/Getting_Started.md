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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB4USXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqyKTgzjaI%2Fm%2BRPsVGL8V8wI88GDQhjuQwTCOs2abAlwIhAPQ71CmiluZbFSBO%2FnW6PyDD4qrHOUmBc5kz%2BlgmnQ5JKv8DCEAQABoMNjM3NDIzMTgzODA1IgwlH81vpEQ6mWkrNOYq3APG1Fh81fl1OZqI3CjcG7UpbgqeH4Sqvjnz%2B55Bn%2F5aJnIHpiEJV9N7RQ2dyxJ4Z0enU8PR2R9Xlffxs5G4M1UOn3oGy0%2FCT8tA94CBF%2FGnTou9S%2BW4BbM1nIWdQvRGSil5d2fjhXonMV%2Bb3w83%2F4mgtMvi%2BleOCUXOgcXAQQJREFURFcVPiDFqAJrGKJgQDFvXiC5lp%2BbY1jKhjujN%2FpsEqov0%2B9BQ80x%2FY%2B9vNbhH%2B81epJ%2BhOqHPaTdyZQ%2FNgvwaQaSwWzfQvBUjYgXQa8yBRwrFqhmlbuiB%2BVodRTe4VGT29i8qYxNcn%2F%2FDXxpa6G7xa9GRySfm%2BxUxzuDhShKbqnwreF1LhFD783%2FrBYfmK1mknbQXIxqiKLgv8TW60jMjSd2ufcpDpDqr7AI%2Fk7%2BfjW0EtiMMHOYpH9HtQm1J7Omo6GE8s8%2F5N%2FzC40GtuIZ0CmjU%2Bky5yZAQ3tULXOaMJyDGF4HWb4azd4WNmwMNfhLFPXa9C%2F0ixlEV1y8fqQ04YkPOJZtAXwZmPCwabiz2nfv4vJTRNniWKbyFUHVcaHlmADqcMRFfKFSNC5ng8TUdkLXGIkuw4rL6RPbYI04lH8pWt5dZjhmOyai6z%2BbGv%2Fj3v5levhn5%2B9goEzDkov2%2FBjqkAU1XwfUHXt5MY33QLPnTIP3hmS7iyMc%2BNeyeTokT6SeXa%2BfYde4h0TuarYpqYajatpE4igaIzFkgHGdMrVxVTQc5oatvIJbyPn%2F5SQDlahR%2FsS%2BazhjihB%2BpzLvWGVTxovcJCiDmtOV2MUVkEpbfdpcm%2BOuJf%2BItwIKiFtHFPB%2FjowBDGeZLdQzlZdbbGz3p%2FJLLdffXC%2B8eOSmAwIKKjp6KFO1%2F&X-Amz-Signature=5748fa2ba69bf7eb0f44245efa3830d94632b78736b980a7ea5ded4147530750&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB4USXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqyKTgzjaI%2Fm%2BRPsVGL8V8wI88GDQhjuQwTCOs2abAlwIhAPQ71CmiluZbFSBO%2FnW6PyDD4qrHOUmBc5kz%2BlgmnQ5JKv8DCEAQABoMNjM3NDIzMTgzODA1IgwlH81vpEQ6mWkrNOYq3APG1Fh81fl1OZqI3CjcG7UpbgqeH4Sqvjnz%2B55Bn%2F5aJnIHpiEJV9N7RQ2dyxJ4Z0enU8PR2R9Xlffxs5G4M1UOn3oGy0%2FCT8tA94CBF%2FGnTou9S%2BW4BbM1nIWdQvRGSil5d2fjhXonMV%2Bb3w83%2F4mgtMvi%2BleOCUXOgcXAQQJREFURFcVPiDFqAJrGKJgQDFvXiC5lp%2BbY1jKhjujN%2FpsEqov0%2B9BQ80x%2FY%2B9vNbhH%2B81epJ%2BhOqHPaTdyZQ%2FNgvwaQaSwWzfQvBUjYgXQa8yBRwrFqhmlbuiB%2BVodRTe4VGT29i8qYxNcn%2F%2FDXxpa6G7xa9GRySfm%2BxUxzuDhShKbqnwreF1LhFD783%2FrBYfmK1mknbQXIxqiKLgv8TW60jMjSd2ufcpDpDqr7AI%2Fk7%2BfjW0EtiMMHOYpH9HtQm1J7Omo6GE8s8%2F5N%2FzC40GtuIZ0CmjU%2Bky5yZAQ3tULXOaMJyDGF4HWb4azd4WNmwMNfhLFPXa9C%2F0ixlEV1y8fqQ04YkPOJZtAXwZmPCwabiz2nfv4vJTRNniWKbyFUHVcaHlmADqcMRFfKFSNC5ng8TUdkLXGIkuw4rL6RPbYI04lH8pWt5dZjhmOyai6z%2BbGv%2Fj3v5levhn5%2B9goEzDkov2%2FBjqkAU1XwfUHXt5MY33QLPnTIP3hmS7iyMc%2BNeyeTokT6SeXa%2BfYde4h0TuarYpqYajatpE4igaIzFkgHGdMrVxVTQc5oatvIJbyPn%2F5SQDlahR%2FsS%2BazhjihB%2BpzLvWGVTxovcJCiDmtOV2MUVkEpbfdpcm%2BOuJf%2BItwIKiFtHFPB%2FjowBDGeZLdQzlZdbbGz3p%2FJLLdffXC%2B8eOSmAwIKKjp6KFO1%2F&X-Amz-Signature=4f489e760a9c86e5d5787646b43242f3445c7095aa3b58f084f7e36947cd114d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIFLLJK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe%2BMNP5SQDsY3JACNrUdFlFq0Kcpp6UV%2BXwKaxl3g9pAiEA8X8mfcDlp5dodbbvkRkZuRjJYh1Ad1lVBCPM5a99gOQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMXoS3IFOQKZoCZiySrcA5SsVnPg1gVdJnh3OonoNpqjg88qnlYfkpHPmNT8Uhjio5An3lIAuyHuhKAME8Y1S%2Bg0pLXj9W4y7OvBqlQGvsfyzDS2kYYMmhcXebUlHObeOW%2BzNnOxSPJXcyU8D12UiaIPBNMrAZ665W8lXoPvNwyLuNJpmuyEsaZ5Vuymv2cI7CmKHn6ciqSUJeHrsxAoawCtV974EJY327YY9Y7S4DWT8%2FSEVOeJ32ABAJyc59ZqRtITAmpTPDypa2lNf7%2BqTgfyF%2Ft96647wf0P3mCak2v8vAko4P0rMEJ2gl9Qd1Ho77fyPUkzVLATvAIGKEdhsmQZv2FiPCbcMMu4%2Fk1iARkQ4JVXuGsDpHlPi%2Ba2LnGkjHgihNvAsxvOA5eaSGb%2BoxYqeeFBe%2B3jKp1maggtQb952BikoNTygipFpbXhRFGKYn17wK0Xwqie2sPmqBozuJ%2F%2Fo4Yulg9kVBMVX9IYiNrAdCLpTQgE5pBCnZrQyTqDSG5GDpJa3NsaXHmUU%2FOvva4x6jfOQ9U5%2Bizv%2FtL84hg%2F4yKhkEa8lXGiM2QMzq1p2Zhfo6ym1bupIMp8H2d978aA4FFApsFhBj6gLbFi8FfA0HIPpmSVpL1lR4awWrok1dp5fDfS0lAPYFnDMLCj%2Fb8GOqUBFBL19x0DWAOCc9j0V%2FKB6MmvHit6SzYr7NOVTrdWerg8ARr%2Bhr27t0McZDqV4BH6FiWmHPr8kStBY1e6m0TKmEtt3QF9TKGrQ5zf%2FD7lChOBCdm84Y9uv2xVkF1rHD05m8yvVt%2FN7tjKEW6EiF6LOL0aCC7ZXhCTxUSmZF7vk9cAM4%2B7IdM83zewD5T5xYlJWAOFzd%2BGnYNTKsbfKsw0C9qgQ4o2&X-Amz-Signature=8ed07a9d018fd19faa70b4231d3ee59b69971a72cdd1cfa1ec29b20772831a94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=6e15baf09ea5663b2e1a8e3058381a5084f49b2a4d3ed57a0baaff85b33cef87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB4USXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqyKTgzjaI%2Fm%2BRPsVGL8V8wI88GDQhjuQwTCOs2abAlwIhAPQ71CmiluZbFSBO%2FnW6PyDD4qrHOUmBc5kz%2BlgmnQ5JKv8DCEAQABoMNjM3NDIzMTgzODA1IgwlH81vpEQ6mWkrNOYq3APG1Fh81fl1OZqI3CjcG7UpbgqeH4Sqvjnz%2B55Bn%2F5aJnIHpiEJV9N7RQ2dyxJ4Z0enU8PR2R9Xlffxs5G4M1UOn3oGy0%2FCT8tA94CBF%2FGnTou9S%2BW4BbM1nIWdQvRGSil5d2fjhXonMV%2Bb3w83%2F4mgtMvi%2BleOCUXOgcXAQQJREFURFcVPiDFqAJrGKJgQDFvXiC5lp%2BbY1jKhjujN%2FpsEqov0%2B9BQ80x%2FY%2B9vNbhH%2B81epJ%2BhOqHPaTdyZQ%2FNgvwaQaSwWzfQvBUjYgXQa8yBRwrFqhmlbuiB%2BVodRTe4VGT29i8qYxNcn%2F%2FDXxpa6G7xa9GRySfm%2BxUxzuDhShKbqnwreF1LhFD783%2FrBYfmK1mknbQXIxqiKLgv8TW60jMjSd2ufcpDpDqr7AI%2Fk7%2BfjW0EtiMMHOYpH9HtQm1J7Omo6GE8s8%2F5N%2FzC40GtuIZ0CmjU%2Bky5yZAQ3tULXOaMJyDGF4HWb4azd4WNmwMNfhLFPXa9C%2F0ixlEV1y8fqQ04YkPOJZtAXwZmPCwabiz2nfv4vJTRNniWKbyFUHVcaHlmADqcMRFfKFSNC5ng8TUdkLXGIkuw4rL6RPbYI04lH8pWt5dZjhmOyai6z%2BbGv%2Fj3v5levhn5%2B9goEzDkov2%2FBjqkAU1XwfUHXt5MY33QLPnTIP3hmS7iyMc%2BNeyeTokT6SeXa%2BfYde4h0TuarYpqYajatpE4igaIzFkgHGdMrVxVTQc5oatvIJbyPn%2F5SQDlahR%2FsS%2BazhjihB%2BpzLvWGVTxovcJCiDmtOV2MUVkEpbfdpcm%2BOuJf%2BItwIKiFtHFPB%2FjowBDGeZLdQzlZdbbGz3p%2FJLLdffXC%2B8eOSmAwIKKjp6KFO1%2F&X-Amz-Signature=7ad2fca01bb32b1caee71a3545cf37480e993bbfa70bf919a0c6f02e9b324dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
