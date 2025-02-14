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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ65WF5Z%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDAGfIIwsDOei8ebpEeTKSWOTCk2Fe5d7D1k9tfTQxAEwIgYVq0AXDUopUiYlg0Fbm3oys3TNhXwVS9VgGGbPHnw4cq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFsPc1KBeZygJZAXHCrcAzHc8T8c7t1rC0EtjsDUPBGAuCd1dQ7ucahOg9jFs4bmB4qILXbducuULSayuCFlLIOJZi8wYP8HD9M5OAQQoYWLdAjdmUpoeUzQrAF4cNjRQHgry2ULSbcqkGTDQnC24sLyMwIIq0MWiYx4NvibzoVHgb5BYDyv4wOFM0xiLFbjGIcR7GUyLAIWUNQ7LfTjo2cCMRY9dVk4qN638mhvdGAUxu7azsFvIyOChIWgAcSE0gamy8fttZSLw4%2F7pcPv0unu5dogLhtd7GFPwyx3Ma2LMGEUtwIIRAhLgXl%2FAbKXROSvNrSRGyEb7zklQWXyuQFaBHvpF60D8%2FVYZrygmyEzxnNN1S3UQZR2SNcnhJSdCNqtWguraOIpvSc39lhLhK5Cfs024rGUuUj9H6XkTJVNGiYuZ%2BJG1Bfak4JgCY0%2Bv4AYOuGSJbp1OR45L0cC9yrCZZ47XpoqsW24fc7br7TgIvW1MwrKptkB%2F2bGBJ03MktvwM3%2F%2FU8zq%2BRxyO7jQkazMJtmkRS4dx71nHUKX1wip3WsLH1n%2BBbo984rCn4R%2BsRQi5uH1MnGkBjDAwqEJOZRUbKLPFhkoxraX1NQJ9owg4hAQ5%2F27vSDlEKfRSMPIEyiupYL0F3wSd68MOzqvL0GOqUBNkyIX4CdBhSg6TAmra25RwV5%2BeICfKQ7CqTL2dASsBh7EwSdYU6LxjEcJs3wamXmpLFDjFE%2BAmymFWzx9IdVgV8QJhWJziJKs%2FgsGBf5WyNPZhIG%2BXITPj20OMZKXbfRxRjsHOD2JTfLB55hZoAuiMEMfnEOJa%2BdHUTON7kBCwb%2FwgAi%2FPZhsafw3haXVYIBtnrohKDsj%2BZBjwzQLOWI16AJ3PVk&X-Amz-Signature=c3dd3908c709b370c2bed89fcd8495c4bc44516ba1babcda36f68d22ba63057a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ65WF5Z%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDAGfIIwsDOei8ebpEeTKSWOTCk2Fe5d7D1k9tfTQxAEwIgYVq0AXDUopUiYlg0Fbm3oys3TNhXwVS9VgGGbPHnw4cq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFsPc1KBeZygJZAXHCrcAzHc8T8c7t1rC0EtjsDUPBGAuCd1dQ7ucahOg9jFs4bmB4qILXbducuULSayuCFlLIOJZi8wYP8HD9M5OAQQoYWLdAjdmUpoeUzQrAF4cNjRQHgry2ULSbcqkGTDQnC24sLyMwIIq0MWiYx4NvibzoVHgb5BYDyv4wOFM0xiLFbjGIcR7GUyLAIWUNQ7LfTjo2cCMRY9dVk4qN638mhvdGAUxu7azsFvIyOChIWgAcSE0gamy8fttZSLw4%2F7pcPv0unu5dogLhtd7GFPwyx3Ma2LMGEUtwIIRAhLgXl%2FAbKXROSvNrSRGyEb7zklQWXyuQFaBHvpF60D8%2FVYZrygmyEzxnNN1S3UQZR2SNcnhJSdCNqtWguraOIpvSc39lhLhK5Cfs024rGUuUj9H6XkTJVNGiYuZ%2BJG1Bfak4JgCY0%2Bv4AYOuGSJbp1OR45L0cC9yrCZZ47XpoqsW24fc7br7TgIvW1MwrKptkB%2F2bGBJ03MktvwM3%2F%2FU8zq%2BRxyO7jQkazMJtmkRS4dx71nHUKX1wip3WsLH1n%2BBbo984rCn4R%2BsRQi5uH1MnGkBjDAwqEJOZRUbKLPFhkoxraX1NQJ9owg4hAQ5%2F27vSDlEKfRSMPIEyiupYL0F3wSd68MOzqvL0GOqUBNkyIX4CdBhSg6TAmra25RwV5%2BeICfKQ7CqTL2dASsBh7EwSdYU6LxjEcJs3wamXmpLFDjFE%2BAmymFWzx9IdVgV8QJhWJziJKs%2FgsGBf5WyNPZhIG%2BXITPj20OMZKXbfRxRjsHOD2JTfLB55hZoAuiMEMfnEOJa%2BdHUTON7kBCwb%2FwgAi%2FPZhsafw3haXVYIBtnrohKDsj%2BZBjwzQLOWI16AJ3PVk&X-Amz-Signature=29a54f8b68cb8839e5467ef393d7d43b0bbc6b57d398aa4755330e174bc6212b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRI33KX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBfxFYXRH0lf%2Fg4PnkL%2BHRQn4DW3V325qM%2BvSJQOR1DUAiBXbRNU3nOuAss%2BwglIsv9h4nWVh%2FrRdxkv2SrDjg4Evir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMno5UjphvjKfDYIo7KtwDsBjHB5d6Jd5jHaIBo6MaQF9ruOxLKaMvqLZay9V252SpkSATdlBmFeQlGv9r7fg1hA4v4eJhLme1AJn%2FJgVmn58tO6aQiux%2BIV6t5XDfAsABNox87vv7oDr4MbS22mpbnxji6fi2%2FB03iTXhLmMwTUpGMDg6tWX51ccm3rfxNj68qRlNYbTO%2BvvmEKA2oOBXrs1LF5LyOoTJrmSjdLhhb0e8aDEZUgZcQVldfM%2BA8gTTX2Ebe%2Bl1ELlPTc2suMyqR80cxM4nL7oDP0bMiMRGpo5RY8D0f3I3%2FQXK7ZL1w7SLtWGFBoVfIkQ85nMRVKdEziVukwcBbPHXPmWtfTucjE2qz4kIJzkkiHHplRaBcFpL9HwX5BqNUopexnICsVNGhxl3fpE2NkUydwC%2FmWpmd%2Bno4w%2Bj9w4yTo0kmXUIxVU6bSFJ52HKx7nfKdwaxaNmb4R6E2LqekzIPAg3%2BFYCPXWfbFl1BkGvuNnD35KdNp9%2BsTkXetBs2Xa1r%2BbQ9CMy5AyvJPdpPeCBkW%2FdCMzQFBfWlvIJEvLDCqJDRpSfXQpOJdHEeRONOzqnu9akOBKR7mtBKpmu06N7MZ9mU3qm4z8FLma7egQWt6aFizAbs55gsLhSquWMgEgThiYwjeq8vQY6pgGjkfR5ahWAen2YDrbXrA2QucKkDk8cFq8T09FH8%2F0H7u0sAtIXict1baqdxPGxl2HNw0yL0RLNCPDxSjhdj54b6SB0Qe75ZbEmTaTCwijc04I8wyKFTlulG8zy0AQVAmGtJT5qeCfaSCoUzMWG4wMJRXWxwROL4mi5V41xV9vE%2BJLCLk362ssSdyPod5v0sOwvyJKcPbTLs6IPFCZyn4ddstulKVzb&X-Amz-Signature=d89f6ec60d15b3502ca7878a01563530ace77c8ac514d0fd3b9e6023e8def189&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQAA3SP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD2umbev1wehOnPeYVgQr%2BYF5ULzhOaFsHZP0yponadZAIhAPvvRGwjPt8JIOfyZM7DK9jIdeXEFOIR%2FZxqvYlxKjL9Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwR%2FKfMmus9Wu%2B3Gi0q3ANQrh2lb%2BiAUatK4KalkIJ6Lv4G7kK68jobsq7vtRV5OvEpz8jJvjDeQnTn%2Bu9MO3JzRded2TWYeuur5dqW0DGDWEbFkY7ZH9k1owOPdnOSZdAf2SBPNAzc7TzwUYkvrj7MEOutB1ooLUwaons0HJdJObO0QZfpiaMT5Ftl2W5NvzqmKRSYuex7BWVVaxQvU4j2AThgfff2DYfRorGhKofOY%2BMU4iFVmvhTCKXUC9qZeaphid9Qazc5%2F1%2FE8WbvkbsH6A2R%2BfpV%2FdPY%2FrblswPR1aGCqvOFiRHB1t5d%2F7YeXSRBqtK7Y4S3Oj2N9yYnYOkJ2FhmYDTg9LPQf4v5bO1DvY8SzypDdzfhWWAQ4P8BXw%2BuEdmrKmJoPAYr5uaKCWj3b0lNr%2BIe8uAxPJnW3AAG5UsYzRUsx%2Bq64J%2BQBbBYbTGjJwDly7JkGFgyHxZZDOHT27hSU9MMkR0CUlxujjHA6Oz6%2FAm1pz%2FmVVzA%2FMHHJNbCftA%2FS3YqVy0S%2FdvN81Jsco655vuWxfrlAVmDoYDLovlnJ58uAA%2FVL4wE3LGg4f7n%2FyVS7kwQkP1pnPnoYyMzUwyxwOOR5WGldY3tdXLDH8HRXLgqbo18xrjkW8FzfGqb6NIdAk6Mxha8%2FjD86ry9BjqkAbxkZKyaCBphVl7a6a0qceyHgwEiR3VOyMuqJYrQUNWv6UkpqRGN0IonyTRnfv748t5dY4fyJPW%2FLur%2BP2OKPe4rQiElHWTqEmOTtm6lBBNGwwhNENQNpT0jXGoDWRApRD8lweKmiH35%2F24xxLQr03XbrPqqovnk%2Bm9ZneawpkLkuwsZUGMLJ8paoFa43DL8txgxR%2BFw0zR0iC2NAjJz6PRin86G&X-Amz-Signature=4430b9c77e1dd44bd0bea489df7b3a831d00b165e8944ca3f333cab26b0dfbad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ65WF5Z%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDAGfIIwsDOei8ebpEeTKSWOTCk2Fe5d7D1k9tfTQxAEwIgYVq0AXDUopUiYlg0Fbm3oys3TNhXwVS9VgGGbPHnw4cq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFsPc1KBeZygJZAXHCrcAzHc8T8c7t1rC0EtjsDUPBGAuCd1dQ7ucahOg9jFs4bmB4qILXbducuULSayuCFlLIOJZi8wYP8HD9M5OAQQoYWLdAjdmUpoeUzQrAF4cNjRQHgry2ULSbcqkGTDQnC24sLyMwIIq0MWiYx4NvibzoVHgb5BYDyv4wOFM0xiLFbjGIcR7GUyLAIWUNQ7LfTjo2cCMRY9dVk4qN638mhvdGAUxu7azsFvIyOChIWgAcSE0gamy8fttZSLw4%2F7pcPv0unu5dogLhtd7GFPwyx3Ma2LMGEUtwIIRAhLgXl%2FAbKXROSvNrSRGyEb7zklQWXyuQFaBHvpF60D8%2FVYZrygmyEzxnNN1S3UQZR2SNcnhJSdCNqtWguraOIpvSc39lhLhK5Cfs024rGUuUj9H6XkTJVNGiYuZ%2BJG1Bfak4JgCY0%2Bv4AYOuGSJbp1OR45L0cC9yrCZZ47XpoqsW24fc7br7TgIvW1MwrKptkB%2F2bGBJ03MktvwM3%2F%2FU8zq%2BRxyO7jQkazMJtmkRS4dx71nHUKX1wip3WsLH1n%2BBbo984rCn4R%2BsRQi5uH1MnGkBjDAwqEJOZRUbKLPFhkoxraX1NQJ9owg4hAQ5%2F27vSDlEKfRSMPIEyiupYL0F3wSd68MOzqvL0GOqUBNkyIX4CdBhSg6TAmra25RwV5%2BeICfKQ7CqTL2dASsBh7EwSdYU6LxjEcJs3wamXmpLFDjFE%2BAmymFWzx9IdVgV8QJhWJziJKs%2FgsGBf5WyNPZhIG%2BXITPj20OMZKXbfRxRjsHOD2JTfLB55hZoAuiMEMfnEOJa%2BdHUTON7kBCwb%2FwgAi%2FPZhsafw3haXVYIBtnrohKDsj%2BZBjwzQLOWI16AJ3PVk&X-Amz-Signature=bd721cda1b2b4e040cede4dcc918e57d17561f48c11bb2c99c80b916b1f5c49b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
