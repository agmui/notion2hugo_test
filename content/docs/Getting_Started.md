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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYM4XAB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDJeM%2B%2B3F93pNbzXy3jqdRJjLgreHH8kUc3Cj%2BRG6e6kAiEAiLfI5qolrMxItMEonoIZklZpiVSeLC2jkti%2B7qhYQmsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd9DnBRHVTKQYJZwSrcA6RWJAKxym4CdHS%2Bz1e5lByTGAncozxAUuVMzJeyReQhkwxJLezDi58fpcAVWYCWieUKYWZnWRvdZMyGPTevvXhvfIWW%2FqUZmU0PbXwXph7MSAeuYsUcWAvuzn%2FE8kFpO5xUgDuSQ4b1w9%2FaS40SmtzR1AXA0ZpFajGYy8eEg25Obc0r72Ze%2FsjriJUPDPlNmyQkCga9iJp73uffyUIww2PgQQyzTytH96KkWf24GWuQfDTvPHZDkg4zDtkTSilmgOfrKD%2FwG7UsdENxzIJkt%2BYsEBRHubE68oG6Q3Ahmn3527yrDsPLUUpy6niAto11IstaojUGJtrwZ%2Fafe8XWQRGbusL%2B8Z5FAcgZuBDiNo4G1u%2F2f7LskJenIfa%2F3QsZoqkpHtPCDSTYuynuku5KkOlt06cmCEFulIcZtfnIQJBIoMlDoxGciQrrzkVOBEMGtuoowsh5aNIojN01V6%2B%2BFTT6x8wwqqmaGOE5xhuDn%2B9PeCgakOAY30%2FkeGhPf9m5H%2F%2F%2Brt%2Bz6FkCHgVmmlOvG65160sygZ2g%2BXyfIlERzU8PJji3zTgwZizYvdTqlwqD8sGD8n2loQmymsnQXLfcO7Z8NfR2WI3yIkkvNJDJpkAJ2TFmcGhB8FZJoHFOMLKHnb0GOqUBF03fdm5MnxzIpLiATieSrPdD496rVeSJcDNljfeUWAqsbSJZYKLRNDxu7GIl0tMg2LyMKepCLXNTB%2FEdK6mF8%2FO6HYArYKAI9GSxCozYOKY5jHN2Xk7XqTBmgsWZ8IhUP%2BGILyb9U1tfy%2BO9OXe11cjb%2BTxE%2FMjqijeFID%2BhMYDQcESbFb%2Fxldkv8jDUzydED0XkZEzX3GzZ7IUFqG1%2BdR0UQAo%2F&X-Amz-Signature=b2c16fed5f0d05e2e8ed1bc701aa62ff42326e069b1e991fab30e9e4546bf14d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYM4XAB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDJeM%2B%2B3F93pNbzXy3jqdRJjLgreHH8kUc3Cj%2BRG6e6kAiEAiLfI5qolrMxItMEonoIZklZpiVSeLC2jkti%2B7qhYQmsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd9DnBRHVTKQYJZwSrcA6RWJAKxym4CdHS%2Bz1e5lByTGAncozxAUuVMzJeyReQhkwxJLezDi58fpcAVWYCWieUKYWZnWRvdZMyGPTevvXhvfIWW%2FqUZmU0PbXwXph7MSAeuYsUcWAvuzn%2FE8kFpO5xUgDuSQ4b1w9%2FaS40SmtzR1AXA0ZpFajGYy8eEg25Obc0r72Ze%2FsjriJUPDPlNmyQkCga9iJp73uffyUIww2PgQQyzTytH96KkWf24GWuQfDTvPHZDkg4zDtkTSilmgOfrKD%2FwG7UsdENxzIJkt%2BYsEBRHubE68oG6Q3Ahmn3527yrDsPLUUpy6niAto11IstaojUGJtrwZ%2Fafe8XWQRGbusL%2B8Z5FAcgZuBDiNo4G1u%2F2f7LskJenIfa%2F3QsZoqkpHtPCDSTYuynuku5KkOlt06cmCEFulIcZtfnIQJBIoMlDoxGciQrrzkVOBEMGtuoowsh5aNIojN01V6%2B%2BFTT6x8wwqqmaGOE5xhuDn%2B9PeCgakOAY30%2FkeGhPf9m5H%2F%2F%2Brt%2Bz6FkCHgVmmlOvG65160sygZ2g%2BXyfIlERzU8PJji3zTgwZizYvdTqlwqD8sGD8n2loQmymsnQXLfcO7Z8NfR2WI3yIkkvNJDJpkAJ2TFmcGhB8FZJoHFOMLKHnb0GOqUBF03fdm5MnxzIpLiATieSrPdD496rVeSJcDNljfeUWAqsbSJZYKLRNDxu7GIl0tMg2LyMKepCLXNTB%2FEdK6mF8%2FO6HYArYKAI9GSxCozYOKY5jHN2Xk7XqTBmgsWZ8IhUP%2BGILyb9U1tfy%2BO9OXe11cjb%2BTxE%2FMjqijeFID%2BhMYDQcESbFb%2Fxldkv8jDUzydED0XkZEzX3GzZ7IUFqG1%2BdR0UQAo%2F&X-Amz-Signature=281dffbc13a4313bbe6460414e3e532ab7744b809d8f79b4aab9abe4386bb0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYYMFLJV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHVEDlvpIHZ1EM0PpdiVqeL83ipFvMAWoZpIyog0tFwsAiEA%2Byv1FemlEnXv3OJeZbsFjZsdjICao%2B0KEOtJXzYKvacqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHc2lWEFVbrDzCDxircAwZ2vTzP7FUH9N9XaP%2BuwbSEOEb4Iwcc5hRODbijXK8SBoh2qTOlpr886MbpwUusX1G3AGDtu%2FvQrqqAW%2Fp%2BG8K4HcvIypKeAEV2JIfm28pRq5HaxF7C7le%2F6cqno0ObwS5%2F12unlvXKpUHv8irSM0a77xlXCeeRRG40d9CIJlcI0u%2FuO5yW2%2BlMrCFr9Kg8UNleljxpXEJzfFIVplvZ9KG%2FtRSQEVcnR9Pq73BZRYP7tO83IjQQCY4FGcoThCHEs85F0qIi9%2BDe9Rxsn%2BullvsRQ0coquGg7IOErGa1zdIz0bH05gl5taNFgO6X7aABo9KD7m%2BWuTS0yYCTyRLrs%2FX%2BTWHW2WWjmPlWTZ0qmC%2F6F1D9oeHnctE0G7yvQPwNugWeyCl6h7dj3mymJiWsnY9ixAc3pvUOOD66U8RmucLaW%2BX4JIZTLY8ElsVUj2eS4gmuRWy7Pa9BiHt%2Fxj7N3fkptmY9CbUP1d8ofshaaGK%2FuBVp040E7iGMTvFR3Gv0f9cU4%2F0UguL0M1RnF8QtIvZvXt1yrei8o3zlU1QOTRUXxKmjfsnK7siauXtVitSm7kNLpUn3mEFa%2FaXwq8TfBcC%2BxE%2BBeapxl4U%2BtTEi2YPlO1lg5rAQ9A68VzJSMKSGnb0GOqUBjbsu1zqjBrAbWfGtirsHFmc3EkaXTGxCDChqV9yKbSx%2FD4lHXAxpz9KaqWTK7ggj5r4CIsRkYl%2BKYYNf1WrcSJ045uAkUtHNLfWiwlYBWPyb45Z2qzgx9GLm65QaNh1a8ocloD9L6zy6F15VViqARXRavtpUdHvoafbpcLkKTOTW7wVT5Gr8MdYmzEQSSeCqDw38WZInGOAaINqEkz4W0ZFo0yxC&X-Amz-Signature=025368a0a7a21ced1fd6c9a3a5b070872d8e63d2a126396e0d5a56eb7e88fcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PB6WA3O%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1LWE%2FNZU6a7B%2BfxuOdMavPCpQzcmmgYo2towLP9II0QIgd06Wt0AJJuvqKqN9iLuAk%2BDEx4px%2BdX8FE54cezLLoUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeHqS6WISrLzimmcyrcAw1ajRoOGyJztpdzFEgXfh9SsRCccW5qUiHlzaTO5mBUdSH5Kco36qopyXKlA6nCFQmEx5JFhqeHM93WZdK0vyOKX7FUPCDJZK5QBI0XQhIdr6utqzF4Y21b%2F0iZ%2B4CDD3DdZ6HXXETu4U2TWAHLmn%2BCTnVuzT7Y8ydA%2BsdLw6myVuxSwR68u1id%2FAvIEB%2F%2BQ8%2Bn5d4diTnOxsKPCH1WvXvr3oaWFJb2pnSWmNmeGS3c4v5zqhvCAM8xyfVVm2fbUk9Ux32xMrQbXuAI6EmKVq%2BQn1NtShPr%2FaxDtBavSpugipgprMxr2VyYbIk5MyTDJdZw1xA8%2BbpT9DKa%2F6kjoGhn6iaR4puN82D95kNx1lVUthl5MKkpgH534ze45AghF7Zh%2BwsDhV%2B6XIVqQfTEMN4p2PDndU6aJBtt4F0SLl3bxbZVnRIxA8Nw8jzsQf6Y70fuN0EzSds3dJo6AmCcMSvXalWrfBCt1H0EBtjWjL9CT1XsruH%2BaCAo1nV92ZQkpwWbyTS%2BdI2TlipJSogcbGoZ1k6xDnlhs75KLa%2FFu2YT0fUEP4Yz%2Fa9T3rkYf2lHKbrKS9vASyKrvDFajuOw%2B4sOqLVOYll0afEyCNepjhw33JbAlBC4c%2Bc6NkBBMK2Gnb0GOqUBm7TOFEEveb1KM1Lq8I%2BtEMtgIZs0fPD16Q8N%2BFginPaSq3PjvrEsBuAGt7ADNxehXPS2KO%2B0fQQyEaa7UiB9GBO1AuuMF2VqRSd1MsCgvcSTlOAqCVdPZMxmQ2ZN8gFEKvfOFvuoez8jc18G22eGDADmfYr7oyRQbYBTBYZgbr2ta7G48VqBZxCT6aZPq2NqpRvU0%2Bt211QmyBfLattyxXnIttVM&X-Amz-Signature=6f4732fb9ee5d138f63377ed0d697be20685c93ef3f7c62f4f682fee64eefcaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYM4XAB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDJeM%2B%2B3F93pNbzXy3jqdRJjLgreHH8kUc3Cj%2BRG6e6kAiEAiLfI5qolrMxItMEonoIZklZpiVSeLC2jkti%2B7qhYQmsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd9DnBRHVTKQYJZwSrcA6RWJAKxym4CdHS%2Bz1e5lByTGAncozxAUuVMzJeyReQhkwxJLezDi58fpcAVWYCWieUKYWZnWRvdZMyGPTevvXhvfIWW%2FqUZmU0PbXwXph7MSAeuYsUcWAvuzn%2FE8kFpO5xUgDuSQ4b1w9%2FaS40SmtzR1AXA0ZpFajGYy8eEg25Obc0r72Ze%2FsjriJUPDPlNmyQkCga9iJp73uffyUIww2PgQQyzTytH96KkWf24GWuQfDTvPHZDkg4zDtkTSilmgOfrKD%2FwG7UsdENxzIJkt%2BYsEBRHubE68oG6Q3Ahmn3527yrDsPLUUpy6niAto11IstaojUGJtrwZ%2Fafe8XWQRGbusL%2B8Z5FAcgZuBDiNo4G1u%2F2f7LskJenIfa%2F3QsZoqkpHtPCDSTYuynuku5KkOlt06cmCEFulIcZtfnIQJBIoMlDoxGciQrrzkVOBEMGtuoowsh5aNIojN01V6%2B%2BFTT6x8wwqqmaGOE5xhuDn%2B9PeCgakOAY30%2FkeGhPf9m5H%2F%2F%2Brt%2Bz6FkCHgVmmlOvG65160sygZ2g%2BXyfIlERzU8PJji3zTgwZizYvdTqlwqD8sGD8n2loQmymsnQXLfcO7Z8NfR2WI3yIkkvNJDJpkAJ2TFmcGhB8FZJoHFOMLKHnb0GOqUBF03fdm5MnxzIpLiATieSrPdD496rVeSJcDNljfeUWAqsbSJZYKLRNDxu7GIl0tMg2LyMKepCLXNTB%2FEdK6mF8%2FO6HYArYKAI9GSxCozYOKY5jHN2Xk7XqTBmgsWZ8IhUP%2BGILyb9U1tfy%2BO9OXe11cjb%2BTxE%2FMjqijeFID%2BhMYDQcESbFb%2Fxldkv8jDUzydED0XkZEzX3GzZ7IUFqG1%2BdR0UQAo%2F&X-Amz-Signature=0252e760602f1f563aece94e1e6f46c1a64871b2cddeecb153992abc6eecc70e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
