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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6TM3BZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoNfhqK%2FGVQrJra9hsXLO27cpRGCoyp8S5DuwRGLQnWgIhAN%2BS%2BenngrJzpXsiiWo2AdxsQiJcrT4jYgWGQRXhj79lKv8DCDAQABoMNjM3NDIzMTgzODA1IgyZ0GAHavSHZOvwrs0q3ANk9vu6%2FRS8daaC9xqkQaqjHRHvzmJjFeS%2F7RB04dtobkviIGYILeez2VUaYOWxfnrKC%2Fn1OfGEqs6MtxP7uJ%2FHyqR4TS4EGUzIry9qM5YU%2FRqBtn1qmXm4%2FYhcH4vpoM1sj2%2FZhCDvuG5ETvNFCKV9gHzM7B6Ju9reYoRik7LHmcQMDkXW4wei5cnZzmZr40R3k0zabu2fDEX99Cc6ZI8LHCB%2Fln1GKadyQK221%2B5A8uO6QqPS%2FaWz17AaYn0kuNLiT4m6tSysvwq8bagi4vp60p%2Ft7EJx9AKzCLVUiy7qMc56jpLcuQ2cR6kz6cKoJZfngvxRely%2BKSHC%2FnUKZ3WN6jmuQzB54RnW7LzuuWXPruk33rqQShy7ycEStjf4%2BdQyYXrIu8oMq9CABfS1jwxrZKHI1k1u3idq5CFU4%2F1NY9mhP2FaWCydbd7At6mWhqMxPYTnCLZFRQY%2FRpZJc8lrZsBVLhsSZ5d84Gdl0RWYwwg2bgeWPtNjfXv5%2BMR7aHM6t8rRPpHTLvTub2WpWnWt3HQf%2B613yK26FH3XZlA9tkHfyT01ICEOOM6AY1paWp32xwMd%2BQnYhq3E8nSsGA1%2BoaPboRIy9KGqZLC6a5%2Fl9fhMd8WIPh5IFmdIbjC43Pm%2FBjqkAW5gMG4Bj1u6Nv6IG11m8BOb8%2BNUIcKSZzckWyuhLSQjH6rBqwzvQ17IHZrfuOORpV0s%2B99rOQ04wjzeAqrU82uDhLecfeA%2FBtMTlAIkEJETHNjtOUSYoCRWVko135Ty5WQ0kIZLgH2piZyGE7BK%2B%2Bo%2FGwwTdRL3ZZhoRF9%2F3xOhro7psozyloi4L5DmkSvRUkwH4MHkfcCEOkwJ8%2BA9p%2B0z2lnc&X-Amz-Signature=f3da15fdddc0cf2f1c3b8d948e6d7db637dcd9ea2da97f4a05e6c20a07e1227a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6TM3BZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoNfhqK%2FGVQrJra9hsXLO27cpRGCoyp8S5DuwRGLQnWgIhAN%2BS%2BenngrJzpXsiiWo2AdxsQiJcrT4jYgWGQRXhj79lKv8DCDAQABoMNjM3NDIzMTgzODA1IgyZ0GAHavSHZOvwrs0q3ANk9vu6%2FRS8daaC9xqkQaqjHRHvzmJjFeS%2F7RB04dtobkviIGYILeez2VUaYOWxfnrKC%2Fn1OfGEqs6MtxP7uJ%2FHyqR4TS4EGUzIry9qM5YU%2FRqBtn1qmXm4%2FYhcH4vpoM1sj2%2FZhCDvuG5ETvNFCKV9gHzM7B6Ju9reYoRik7LHmcQMDkXW4wei5cnZzmZr40R3k0zabu2fDEX99Cc6ZI8LHCB%2Fln1GKadyQK221%2B5A8uO6QqPS%2FaWz17AaYn0kuNLiT4m6tSysvwq8bagi4vp60p%2Ft7EJx9AKzCLVUiy7qMc56jpLcuQ2cR6kz6cKoJZfngvxRely%2BKSHC%2FnUKZ3WN6jmuQzB54RnW7LzuuWXPruk33rqQShy7ycEStjf4%2BdQyYXrIu8oMq9CABfS1jwxrZKHI1k1u3idq5CFU4%2F1NY9mhP2FaWCydbd7At6mWhqMxPYTnCLZFRQY%2FRpZJc8lrZsBVLhsSZ5d84Gdl0RWYwwg2bgeWPtNjfXv5%2BMR7aHM6t8rRPpHTLvTub2WpWnWt3HQf%2B613yK26FH3XZlA9tkHfyT01ICEOOM6AY1paWp32xwMd%2BQnYhq3E8nSsGA1%2BoaPboRIy9KGqZLC6a5%2Fl9fhMd8WIPh5IFmdIbjC43Pm%2FBjqkAW5gMG4Bj1u6Nv6IG11m8BOb8%2BNUIcKSZzckWyuhLSQjH6rBqwzvQ17IHZrfuOORpV0s%2B99rOQ04wjzeAqrU82uDhLecfeA%2FBtMTlAIkEJETHNjtOUSYoCRWVko135Ty5WQ0kIZLgH2piZyGE7BK%2B%2Bo%2FGwwTdRL3ZZhoRF9%2F3xOhro7psozyloi4L5DmkSvRUkwH4MHkfcCEOkwJ8%2BA9p%2B0z2lnc&X-Amz-Signature=a42a38ab7c6ea678d3d34109a368b487d1baec3d0616f6ed30d44947bfa61114&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666243WCYF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPtthDMJLBkiAAV0R28WiR5hzl6PXFB2xTBfpGJFNBTAiEAs9EFqTuhV5hMMYnMAyHcaA49Wte2K4bnmnTr1dMPRv0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFPXYFLldA5Un2%2FQwircAy7V71MO2gIQyGfuwCAl3j1FJK6pXe97DBf%2Ba8WjZgdll3XsevW0NcIKYltjpc92r63FlZior8z92Q4PoIKrHHGRYDm09JVrNhcW0S0wussZ7oC9W6UKJ7lgeTJpPkgjBJbLVrhjMWYlVYqjq0uZtAABY1tXLhgDRfJ7pd1J5ldQu2C2jzWbs4B8wYLm5yonSRUyyLLUn7M%2BPwXT2ezj2nE0wkK32uE%2BFFgjLJ483C8v54I3KLMszpgVFd4%2BNA2qM0hmVuhFUUlR61vB6hdTbDGgyyNnImSjkp2Z0vk4U8K1iUNhImTa08xVEW%2BanXdeNAGRsucueHC6jA2ls6xeDDdF8eoCf0%2BiTvqtPRnXTSfu1EyVhcd25IuwZah3MIciGKTbeemj0m80Zw6fj%2FS%2B1dLrYudJNlsuGDXe%2FHZCUEJYqwu0CaCVt0okmZFCb7db70Te57khAvgNl373GIj4aLie0qfmV1Qm%2BEbH0ROlP0uI%2BjdTblW4oGOlKiUDQ5kB9R4Cx89TU2QY6Q%2FRusS%2F1vv%2Bjf26uS3rjZs9VPJTRYaUxwZHE4Vt9DfJPJ%2BUWl%2BuV7cFfQV0uwOCqHAeWWYjIvRNyM6AnqT5wh9LpdIznPovNmEJfJXEPkEKaarZMM3c%2Bb8GOqUBflFehq2LMbP4jVFNeruWWW0G%2B9tYNdJClySpYFEDXnyG7NllZeoDR%2BX3LX3lqmrdcxwMTisTm%2BN6BUyDdvCHrvaQLe9%2BjyFN07qdAhzf%2F8diHyROCeTlz5E%2FX6m2S6StLFiThMppDciLvK5UJIRrzTABZ2iRhhGUWzD5IlhEBDzKBNbLX3L306CgRzecxua4UJh5ByzhALAaENr8cqwTNT17lQBF&X-Amz-Signature=6acbe6d09a201f09b21c0bc5df119dd8bf1c02dd316ad12a601a07c600741666&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657RGS3UH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyHOkny7YAAy2FDO3oXMz4gQ8Y9TCQ8bIq2ZOQsHuBUAiAsFc0w4iJyNLx9O%2FNrVhAQDZKkROWU0ZU0jjJCWuJLUyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMp4EC4sAdENbJTX5eKtwDQJt6veh%2BMdUfTT8dDqfckqecwGZ5CLXJp%2FNsyGCmiiQW8vYnvauSR86FKzDQ7scm3GzU4f77M8OSHh4Whc0BgVFjqhYOoKvsLv73fWzTeWxqhmqPhRtNIO7mrp7FYOe32CnFbbRwY9Jg%2B9HfcMdWr%2BlpZ6j4HarCsfAdPuANIEjqfiiBlsMJeSMrEDlhw5VyB2CREvSV43fopHYKHNocblOp8mvEvl2LEvnB0oeBtqwZm0PVbajI%2B5%2F9oWnLyboasP8sQodFA1vNvR%2Fq1prga3xy3ZZFpltDV3ic6q3%2BLU2IRFwbj4XVX%2BXIkCuOwVAcWgE5V%2FLxPLdnV3S59IQJJURyRrR47BLYxbs2zp8Rn3rWNrsrIsXznj%2FwYdm8DddDb8ipAxcDJ6WIU6o3Z8XhbmaHKUoaNMc0pPjWqS%2BLuHqGHNgzESrhE7NIFPr%2BnRMdWWykB0i7WbseYxpdro4gNQkWXiZCON33%2B6r4kFz7M6CuYp55ZtSLaVgI%2B06ZXts%2FsknBa2Cy3%2BVa4x5hMnicDm1LHfYvMM7pMu0QAJIu9ihCr8e6EY5vayBVKC9vuXMHYncrI67VU0eJXerGUczBuMoCUt2ReK3IzbfiNoVEcNETnpj52rTeTT5PPVAwrtz5vwY6pgFp8F7eqiqZk55w6T1T6bu5JSbRRIXqGn50Mgzb%2FJObpILXVWPsScVK0WUxEdutQ3vuZJkPIJ63l3hskZpOHmSnKVxn5HBWC5urwAGgToL6%2BQ1TxudIHmt%2F6t%2B%2BfeXSOr1zPyOOxBhJcBHR4hqnvnCoGEe%2FDDU2pNKJjVUGRI3ltaXW%2Bv2WBPpgCpm9tTaCDmzpqf89lr%2Bi0mKk8KiMe4Yen8DsK1OR&X-Amz-Signature=e22b3145bc6557ec5597f740846e59e78e72a744ee4b86323e656c9f4cf25b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6TM3BZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoNfhqK%2FGVQrJra9hsXLO27cpRGCoyp8S5DuwRGLQnWgIhAN%2BS%2BenngrJzpXsiiWo2AdxsQiJcrT4jYgWGQRXhj79lKv8DCDAQABoMNjM3NDIzMTgzODA1IgyZ0GAHavSHZOvwrs0q3ANk9vu6%2FRS8daaC9xqkQaqjHRHvzmJjFeS%2F7RB04dtobkviIGYILeez2VUaYOWxfnrKC%2Fn1OfGEqs6MtxP7uJ%2FHyqR4TS4EGUzIry9qM5YU%2FRqBtn1qmXm4%2FYhcH4vpoM1sj2%2FZhCDvuG5ETvNFCKV9gHzM7B6Ju9reYoRik7LHmcQMDkXW4wei5cnZzmZr40R3k0zabu2fDEX99Cc6ZI8LHCB%2Fln1GKadyQK221%2B5A8uO6QqPS%2FaWz17AaYn0kuNLiT4m6tSysvwq8bagi4vp60p%2Ft7EJx9AKzCLVUiy7qMc56jpLcuQ2cR6kz6cKoJZfngvxRely%2BKSHC%2FnUKZ3WN6jmuQzB54RnW7LzuuWXPruk33rqQShy7ycEStjf4%2BdQyYXrIu8oMq9CABfS1jwxrZKHI1k1u3idq5CFU4%2F1NY9mhP2FaWCydbd7At6mWhqMxPYTnCLZFRQY%2FRpZJc8lrZsBVLhsSZ5d84Gdl0RWYwwg2bgeWPtNjfXv5%2BMR7aHM6t8rRPpHTLvTub2WpWnWt3HQf%2B613yK26FH3XZlA9tkHfyT01ICEOOM6AY1paWp32xwMd%2BQnYhq3E8nSsGA1%2BoaPboRIy9KGqZLC6a5%2Fl9fhMd8WIPh5IFmdIbjC43Pm%2FBjqkAW5gMG4Bj1u6Nv6IG11m8BOb8%2BNUIcKSZzckWyuhLSQjH6rBqwzvQ17IHZrfuOORpV0s%2B99rOQ04wjzeAqrU82uDhLecfeA%2FBtMTlAIkEJETHNjtOUSYoCRWVko135Ty5WQ0kIZLgH2piZyGE7BK%2B%2Bo%2FGwwTdRL3ZZhoRF9%2F3xOhro7psozyloi4L5DmkSvRUkwH4MHkfcCEOkwJ8%2BA9p%2B0z2lnc&X-Amz-Signature=ac38844eea1f380c51cfecf0fc3167eb9a51c8f8396b442795fa9193dfa4c7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
