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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHJPWDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCyd4SPstTOv2ErzVfMsBTSW3ztmZdPC%2FYgPPlpjBMHMQIgPlFICRN3eN3S2ufq7qqhzIpc62%2BZfFsdJsN5EtwIAP4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5l6ZKN73KkwuTNtCrcA5%2F5gXD74tg9KIBy9oUrhCZD2%2F3hxD5P%2F5DDTOB4cVDzoqgqzpG7r61ig%2BOdVQF0Pdf%2F3Hq008hpWf65rKefMITOkma8ZF4YuQS49kaDwEP48h%2BL3LrdoKloOzbnle0UK7b%2FfADCQZls68B0NjC7BnnKbVkM93PkXRHS8jSZE8y2RWLMrit39eM%2FLFa71ItcQUXb0VzCDzVYykcSYDmy%2FdZFdmUeVhL4tUP6wfUkmdzyMfDZB2GsjgfFon0qEu%2F0MSMMAFwQQW6luEtKjO4NiEYHRBJDgctreVk0GI2vGtqx%2FbnJ6hUuKIaeTvYhR9RW6QqJ2hnSKLANQaZ6J%2BUVG17Bl9Tfv4rkJq4N%2FtT%2FSUCYHUFeHAd%2B6A3pJpT9W8cqxW4XmGRwM4yZNlllGLTqq7vl5Hc9pnkw1XnMLUghMofJim8zFSzWiibk%2BG9yqKxW0byXBqyJakmLWBidbLcCCdgPji6UjHOH1v88UtXQujM3yiUvbq6qdRgkPT2TdorSq7cAtMv5Td3HbKVu6oCu90uods1p7xgpssKUKr4637ELH0wtBNNMbt9Gg29D04oTwPrUOX4IIhXV%2BHu1Q1rzWHmrqK51zdEfvjNZj07YcVVjs4w4sw15MFVOCDHmMJ2P3b8GOqUB0YtCKb0fDkn8virYvp%2B0CZBaffDi4LU8pezOXqO0LL7KY57QNp2C96KSZr5UXRQ0mGBE6uMh0cfVZYVSsOYi%2F0wzfZgerD2GZJNRfDx0J6CdZq9OkuPUmQ%2BGTTw0LsETWjgvyhKTk1Bi5pPLo3eftipuIskyxHl3k%2Fo5TH%2FGKHiptdoJfIEIYPbNM2rCUhk1axbsgE4oU%2BXHQffdh5cEI7ej%2FCl%2B&X-Amz-Signature=7a45232264203626a7ef852ce18e73856f10189f87504ff445a3b89e461ad1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHJPWDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCyd4SPstTOv2ErzVfMsBTSW3ztmZdPC%2FYgPPlpjBMHMQIgPlFICRN3eN3S2ufq7qqhzIpc62%2BZfFsdJsN5EtwIAP4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5l6ZKN73KkwuTNtCrcA5%2F5gXD74tg9KIBy9oUrhCZD2%2F3hxD5P%2F5DDTOB4cVDzoqgqzpG7r61ig%2BOdVQF0Pdf%2F3Hq008hpWf65rKefMITOkma8ZF4YuQS49kaDwEP48h%2BL3LrdoKloOzbnle0UK7b%2FfADCQZls68B0NjC7BnnKbVkM93PkXRHS8jSZE8y2RWLMrit39eM%2FLFa71ItcQUXb0VzCDzVYykcSYDmy%2FdZFdmUeVhL4tUP6wfUkmdzyMfDZB2GsjgfFon0qEu%2F0MSMMAFwQQW6luEtKjO4NiEYHRBJDgctreVk0GI2vGtqx%2FbnJ6hUuKIaeTvYhR9RW6QqJ2hnSKLANQaZ6J%2BUVG17Bl9Tfv4rkJq4N%2FtT%2FSUCYHUFeHAd%2B6A3pJpT9W8cqxW4XmGRwM4yZNlllGLTqq7vl5Hc9pnkw1XnMLUghMofJim8zFSzWiibk%2BG9yqKxW0byXBqyJakmLWBidbLcCCdgPji6UjHOH1v88UtXQujM3yiUvbq6qdRgkPT2TdorSq7cAtMv5Td3HbKVu6oCu90uods1p7xgpssKUKr4637ELH0wtBNNMbt9Gg29D04oTwPrUOX4IIhXV%2BHu1Q1rzWHmrqK51zdEfvjNZj07YcVVjs4w4sw15MFVOCDHmMJ2P3b8GOqUB0YtCKb0fDkn8virYvp%2B0CZBaffDi4LU8pezOXqO0LL7KY57QNp2C96KSZr5UXRQ0mGBE6uMh0cfVZYVSsOYi%2F0wzfZgerD2GZJNRfDx0J6CdZq9OkuPUmQ%2BGTTw0LsETWjgvyhKTk1Bi5pPLo3eftipuIskyxHl3k%2Fo5TH%2FGKHiptdoJfIEIYPbNM2rCUhk1axbsgE4oU%2BXHQffdh5cEI7ej%2FCl%2B&X-Amz-Signature=736b1f2927c105b3c1e8f5e05cb843ba23c2fb2f878b61bf9a34beece8baada0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVKSBKL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIC7wKPh8L11zcXJL5g1JvGyJ6qyGqdGo0CyP2I6kJwvfAiEAp%2BBYRxkA55s5B%2BIggQ177YjoA6nSAlXBCOirhoF7OyYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSNyaCRHAEGvu9M%2ByrcAwkVz6F0%2BsorP7JLxwn1EeCfIfsxIU9JCMnkEXRy0SOcuggjI2Po3SNp%2ByNV5zblpFYUvHGtbzacy2ENRlaoFGv%2B58pKycDwER2koF3sVgvTB3OOvhjqbJMuvP61YpDQBlyCaEshqwj7V%2FBN%2BW%2B37osLkBXtJF1B%2FaGZ8B%2B5BRzpn%2FnRdoSHBNtme2Hi3Gqna1oyuVLjSOg8Pr6ShuhnhCfJl19Twsot%2BsiiHKXCDFdqkKonbnX67Ij7HNQQNybdoAvbcWx0%2BkJkzpoLPZLrems2BSLL3OqiZ4NRhDjFXbp8ZFTpOgap7nrwFXGn1G7zeaknIDLHGDmZM86VGPkPMpWYPqocjuds0y%2FWUUYqu78PM2uiKWtegZN0Pdbpx%2FeK6lSzkswqoIZQ%2FU9PAfurUiTZPajqlkTBLx13A%2FUPW7zhCtZpM5tq5yr4qcKJDNGw77ZgYEVTwxEeBysUBhWCcoFBSgVxw3nSASkFiI7jhHN%2Bmy%2F6Wfu7MmflG5RdjI2%2FUngBqT24DxsbYjtx15EEOF9UmneyNmAsHw4OMRQUMEUUVf4GS%2FO0F5hjvb1GJPR7FSUJwsAImS29mL1crRdjWl21pwrKigMoz9Zf72I5jXyA0g7w9dUnPgzqL0t7MJKP3b8GOqUB2Ch4b8d7fFvV4RqweIXsWVvYydv0hi8WDZ%2BJ4rCZRJ7mNGOFuiaFhwT1ewncmt0aMUzg%2BMMvi8wGFPYu%2F7axkyJlkHWewUbSegmLcgyCfhxiBbcqYlQs8%2BydkDwo0U1CywVtl580U5%2FifB0p786GF7ZQ2XxK%2FqlEIcdQlydtaOd9uXbETMPAYBg4Xp6TkITczYW%2BeTuJ4Pvh0lZa1GIuOq8eb8Ru&X-Amz-Signature=3d00db00d339ddbb57357393ff32cdaa231b4d096add1c750689a84dd58ad048&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJISSG7A%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlJD72t3DZ6LIV3k2fnBzIeYUWuZnC9qpBP2jB%2FU9W2AiB%2F6zKABV6mciC74AqoJL7DMNupVa9J4gkAQwhKkkbCmCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxiWosrIufzRXsrdiKtwDSfQgkVzWGFRtwdDiYn%2FnB5NiA9Pj6EcIFcJvC%2FiC3JIWkUe8TASVF6Cp4IT%2FBeUAlPx3qlmInplOGDCpciGmURFj1MO%2BpU4O5rTMMIyw64jsWnODbLSebd1FMB%2FWndwpqGCPJNzdV%2BhlPPMQqDA4wcJfCuXcVTCWonPw2Y1WEeDRrWhKALUOeJlSMPwiDXOrO5UkH2n2xMoGHjfufhVsKGsAJoAlyiFpQ9pALWUSOpDIlln4G%2Bk7FDv4ZGOnuwEWaQLzlgKvayjjSXO3o8G682yU%2BG3YcQnfmXi9T5sTfUWwjlG6BXg9P6SfdgA6qKb%2BGA39Uu%2FY446M549GdXLErg4sVU8eTfw7Yxn%2BjkKV%2B9D%2F2OnVuy%2B4AFv2S%2BNA2xcRB7TQI6j5MiA8vQM%2FESabQ%2BFrQ91SVlEh1K6ipX2hYoWmdaFCd35eLQdjMvm%2Fgl4Fw4gh8uearItGa7%2Fku8C3Bi%2FhWEj7ms4%2FDE%2BU2f8CIdPNheXEtWfmiTiqc6niX9jXTSZrV%2Fa%2BI8nTdZiqgbVfjsIvvFMx3K5nA9s9utd41pVcOL%2BFXk9rK%2BNUHTT5J87Q2kmVSgfE2onYPNxridBqCreTKMFExnETAWThqCZR2nGk6uANcmeCX3Fkuo0wgo%2FdvwY6pgF%2FfhazU230z6ufWwYEVwDQLo4qX%2F7szucChUyL8PZVlTOSBxUe2UWmyarVCmmcyCy%2FbZd6CSdZTWQoyJMXelmYwJdT0z03r4%2Fm4CuD2y5FaEdWKYE0Ae1bRrV%2FZtvktQZGfFZ7t7wta9QUF8a6FsQWfeXRX%2FWkk9k1qWd%2BdXHft8kShKkDG1bPV10DVTwruiCOS2Jk%2FuZUlv%2FmscuZqLxhroVH0CL2&X-Amz-Signature=7d2b8910819899a2a6c93202068c99da7b14868f39131eea9bb9289100c62402&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHJPWDK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCyd4SPstTOv2ErzVfMsBTSW3ztmZdPC%2FYgPPlpjBMHMQIgPlFICRN3eN3S2ufq7qqhzIpc62%2BZfFsdJsN5EtwIAP4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5l6ZKN73KkwuTNtCrcA5%2F5gXD74tg9KIBy9oUrhCZD2%2F3hxD5P%2F5DDTOB4cVDzoqgqzpG7r61ig%2BOdVQF0Pdf%2F3Hq008hpWf65rKefMITOkma8ZF4YuQS49kaDwEP48h%2BL3LrdoKloOzbnle0UK7b%2FfADCQZls68B0NjC7BnnKbVkM93PkXRHS8jSZE8y2RWLMrit39eM%2FLFa71ItcQUXb0VzCDzVYykcSYDmy%2FdZFdmUeVhL4tUP6wfUkmdzyMfDZB2GsjgfFon0qEu%2F0MSMMAFwQQW6luEtKjO4NiEYHRBJDgctreVk0GI2vGtqx%2FbnJ6hUuKIaeTvYhR9RW6QqJ2hnSKLANQaZ6J%2BUVG17Bl9Tfv4rkJq4N%2FtT%2FSUCYHUFeHAd%2B6A3pJpT9W8cqxW4XmGRwM4yZNlllGLTqq7vl5Hc9pnkw1XnMLUghMofJim8zFSzWiibk%2BG9yqKxW0byXBqyJakmLWBidbLcCCdgPji6UjHOH1v88UtXQujM3yiUvbq6qdRgkPT2TdorSq7cAtMv5Td3HbKVu6oCu90uods1p7xgpssKUKr4637ELH0wtBNNMbt9Gg29D04oTwPrUOX4IIhXV%2BHu1Q1rzWHmrqK51zdEfvjNZj07YcVVjs4w4sw15MFVOCDHmMJ2P3b8GOqUB0YtCKb0fDkn8virYvp%2B0CZBaffDi4LU8pezOXqO0LL7KY57QNp2C96KSZr5UXRQ0mGBE6uMh0cfVZYVSsOYi%2F0wzfZgerD2GZJNRfDx0J6CdZq9OkuPUmQ%2BGTTw0LsETWjgvyhKTk1Bi5pPLo3eftipuIskyxHl3k%2Fo5TH%2FGKHiptdoJfIEIYPbNM2rCUhk1axbsgE4oU%2BXHQffdh5cEI7ej%2FCl%2B&X-Amz-Signature=53cb4ad51c6f1b7fd00a5aea09844565e3f62b00ea983737c94df31d7c0bf97a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
