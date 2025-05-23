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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CI5XVEL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDdyp1nk48C5ige23Zs5263ZVlUInOLrSh%2BJFh54iqQxAiEAndYo7UeRatqcNhqsb82pP8WtM%2B53%2BBX1ITbfnBveBAoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNEuQoMJ3dHju9VSrcA4xITRX4btc5h8deyPrEM0cppA4Y9o0GCydKS5ouYC%2BzE%2B7IgUTFRx7xC8on3UrXPT7oVuxnFLokcFGxc1h36QU4kYyGYarlFET1lF%2Bh3EvUbnIAu8toyxjp2a4PnG27%2FTCVOW%2BGAanNS0SxoV9YXcFPrt4ogj5dFLATbLlTBUWsUxanXUFhX3IllOnNbAhygyWLKamcZPH5yRezPK9V0dGobaZO8wu0zZAlbODiKuJpLUbsnVnAJHalykiTKBjD1elqA2oHYRs1W4Hx%2FPGUUkjOluT%2FqnopPQ8CJ6WON%2FZOtvK187PJtoiJ4SVKINaafiiyr%2Bf68%2FZunb%2BUy8Hhgc%2FvHyomi%2Bg8uwF0kdbJFItQas%2FU3YV8sinNXrKaAPBkiWkhV0OyuhLGYV4FBG%2BNEce0u7P1qiflJMA6qGuIiXyHhNW2KCrGErL55ynmU02VeIaw0ZoSu4zmgk72moyqhUdhekIqPAzmDd6wuy0x41p9W8wjMce2xZY0qx%2BKBPyOXAh6yu3MvLyMxEZuDvFnCTjD1E8J957o%2F6pyEoQivj0y37HTzuRTg3H6nh6I2K91lF62%2F56QWWWJKHYWSUvYPYrHNa3bEgB82Q2KhQ4%2B%2FhLh6ZJ07qxj%2F5CNNNyhMMLCv8EGOqUBDlPJc%2BvFMy8h0Mq0Obhb%2BzVUpFG%2BPczK0X77h%2FR2kSq8Jp7P3ZeHIAgmRpiLBRIv3IEyja0DoJHFANgP8BZnKe4ExvNbKWEYTksPv7Z4CBhoCHJBRjkQW5U8hyaNjZ%2BfholSpHFnbP5S7%2F7GO4QkfVqIHrdEM%2FHikdqpJlUXxezwy46Ak8bo4DNmdAXxQ9osraKoPLhK5cD0BT9wq%2FDWzfB7LrSb&X-Amz-Signature=e00457bc0f2843ef1f2111a84e3600ec94d1fa0d54a23b2277ba8faa6116d994&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CI5XVEL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDdyp1nk48C5ige23Zs5263ZVlUInOLrSh%2BJFh54iqQxAiEAndYo7UeRatqcNhqsb82pP8WtM%2B53%2BBX1ITbfnBveBAoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNEuQoMJ3dHju9VSrcA4xITRX4btc5h8deyPrEM0cppA4Y9o0GCydKS5ouYC%2BzE%2B7IgUTFRx7xC8on3UrXPT7oVuxnFLokcFGxc1h36QU4kYyGYarlFET1lF%2Bh3EvUbnIAu8toyxjp2a4PnG27%2FTCVOW%2BGAanNS0SxoV9YXcFPrt4ogj5dFLATbLlTBUWsUxanXUFhX3IllOnNbAhygyWLKamcZPH5yRezPK9V0dGobaZO8wu0zZAlbODiKuJpLUbsnVnAJHalykiTKBjD1elqA2oHYRs1W4Hx%2FPGUUkjOluT%2FqnopPQ8CJ6WON%2FZOtvK187PJtoiJ4SVKINaafiiyr%2Bf68%2FZunb%2BUy8Hhgc%2FvHyomi%2Bg8uwF0kdbJFItQas%2FU3YV8sinNXrKaAPBkiWkhV0OyuhLGYV4FBG%2BNEce0u7P1qiflJMA6qGuIiXyHhNW2KCrGErL55ynmU02VeIaw0ZoSu4zmgk72moyqhUdhekIqPAzmDd6wuy0x41p9W8wjMce2xZY0qx%2BKBPyOXAh6yu3MvLyMxEZuDvFnCTjD1E8J957o%2F6pyEoQivj0y37HTzuRTg3H6nh6I2K91lF62%2F56QWWWJKHYWSUvYPYrHNa3bEgB82Q2KhQ4%2B%2FhLh6ZJ07qxj%2F5CNNNyhMMLCv8EGOqUBDlPJc%2BvFMy8h0Mq0Obhb%2BzVUpFG%2BPczK0X77h%2FR2kSq8Jp7P3ZeHIAgmRpiLBRIv3IEyja0DoJHFANgP8BZnKe4ExvNbKWEYTksPv7Z4CBhoCHJBRjkQW5U8hyaNjZ%2BfholSpHFnbP5S7%2F7GO4QkfVqIHrdEM%2FHikdqpJlUXxezwy46Ak8bo4DNmdAXxQ9osraKoPLhK5cD0BT9wq%2FDWzfB7LrSb&X-Amz-Signature=e3e884ca04244eeb9823f725b84e07c6d5a7a575e410eb82a1706fa28544dff6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CI5XVEL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDdyp1nk48C5ige23Zs5263ZVlUInOLrSh%2BJFh54iqQxAiEAndYo7UeRatqcNhqsb82pP8WtM%2B53%2BBX1ITbfnBveBAoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNEuQoMJ3dHju9VSrcA4xITRX4btc5h8deyPrEM0cppA4Y9o0GCydKS5ouYC%2BzE%2B7IgUTFRx7xC8on3UrXPT7oVuxnFLokcFGxc1h36QU4kYyGYarlFET1lF%2Bh3EvUbnIAu8toyxjp2a4PnG27%2FTCVOW%2BGAanNS0SxoV9YXcFPrt4ogj5dFLATbLlTBUWsUxanXUFhX3IllOnNbAhygyWLKamcZPH5yRezPK9V0dGobaZO8wu0zZAlbODiKuJpLUbsnVnAJHalykiTKBjD1elqA2oHYRs1W4Hx%2FPGUUkjOluT%2FqnopPQ8CJ6WON%2FZOtvK187PJtoiJ4SVKINaafiiyr%2Bf68%2FZunb%2BUy8Hhgc%2FvHyomi%2Bg8uwF0kdbJFItQas%2FU3YV8sinNXrKaAPBkiWkhV0OyuhLGYV4FBG%2BNEce0u7P1qiflJMA6qGuIiXyHhNW2KCrGErL55ynmU02VeIaw0ZoSu4zmgk72moyqhUdhekIqPAzmDd6wuy0x41p9W8wjMce2xZY0qx%2BKBPyOXAh6yu3MvLyMxEZuDvFnCTjD1E8J957o%2F6pyEoQivj0y37HTzuRTg3H6nh6I2K91lF62%2F56QWWWJKHYWSUvYPYrHNa3bEgB82Q2KhQ4%2B%2FhLh6ZJ07qxj%2F5CNNNyhMMLCv8EGOqUBDlPJc%2BvFMy8h0Mq0Obhb%2BzVUpFG%2BPczK0X77h%2FR2kSq8Jp7P3ZeHIAgmRpiLBRIv3IEyja0DoJHFANgP8BZnKe4ExvNbKWEYTksPv7Z4CBhoCHJBRjkQW5U8hyaNjZ%2BfholSpHFnbP5S7%2F7GO4QkfVqIHrdEM%2FHikdqpJlUXxezwy46Ak8bo4DNmdAXxQ9osraKoPLhK5cD0BT9wq%2FDWzfB7LrSb&X-Amz-Signature=9b271f3d584a56eb31507e0ee0ba950c3da77f050bb1aecb16191cff1da1f430&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT3LS27P%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE%2F2r93Nfk%2F5v0k8UbGwx3kGYJQGl%2FwLSPEzvbYU8lkfAiEA0%2B%2BEnbSTUwlNlHvTI0I7uiKhmiI2hF4hoUdLI7x31UUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIjTSt2u7EYkl85xCrcA1EmmL56bF0y%2FL1o1E%2FXqIgXoCyM86ENRGzndxXbzbS2KkPOxdObAG7a0pavOkpiLWJzHUGpH0ApiLOclgQlbRw2EiYnfVQXEtx6Z9C9sGaL3VAZWyGwPSDaMpb0%2BJMtIXLxd%2F7j8YTl7y8uOXjoc1w7JkYWaKGWra3UUxOOLgSkMQeZtVe%2BkWKycaIbM7%2BmeQk1XXtXEIaGeWdrdR717VA2EuSLDgGxYzUbB4yZ7wbMu5Df%2FdHqPAyZwWl68xr89TTeTR6Z1V4TNuArn0z4X7ghJZM428Yz4QVL9YWvGjEntGavgZMLRo8fuyHGM1e2iuHOHMGIjWtL8V4LqZKPzHXsykXJhkXtsGFTEwZRaV7yQ32OIJKA%2FcqWblCSvqLjHTik0S98FUaK3hhVNUQML%2BypBrf679Wn9gUkOQl3YzctSclkzBi3w5dRbN%2F%2BcoO%2Bh8IvsgYdVaa%2FC2K0iuUsTOWf%2BoVqxl%2BFdZgOkkXVWwU%2Bcs%2F%2BCct3p3pNTdDrzCjPDgWhIAYPS6a6U5y%2FW7DJJLhYGo3VyQb2x3I8qp1f6DvfgEaDHVTphcW9djrGR4VOpgqOFzdgDuphvpE%2B9OFI7QaNf2f6saUCWRfUmXiB2JgrCgDjWOCRB6xcWgrUMP%2FBv8EGOqUBwyVhZV7Y%2FMWxYfp7mlJb1Ucuxl7MkIpjVygQegjr720V%2BmatVT2lQWCqo2NL78oAiMqIUwVzweyN6Pim7ofZt6JLNWSVPLuN7hC7uTsblI1DxrFRhCOdkhJZ2uldxoJ6BQnrJWMdORdJrZHVWfPnW5Nm0Y8MqEUfFvxFqnTJAUB%2B%2FwehhzunPxPeL%2BBCJPIeU7OaEdRAe03wk5zmWmuEotyWamCY&X-Amz-Signature=604827b007c6a0841dfed3ce8c11b923d26b3de9ee13efa80bfd6f080f88473a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRVEVFC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDJE9HiwbpobuaNZKAPXPJk4RUlpP0Lxrkix%2FONfWvY0QIhAIY4AVNR9brDUZuE%2BYRCM0YiWya%2FE%2BNOXIU2ztf0FAvnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykLR%2FVZXrK5Fx39Koq3AMv69hTSfM1gyrt3ZW%2FquEHkh9YSy4SjZx7F6EmDvUUeFg8GE2%2FDm5muvu9Gs3pYgbWrDzLzfzOdhJ2eLJmFI%2BTZLgzbRIu5JLmVSmaE25ZKSgfgjJlsu184E7IlBQYcR6yygj4i7W%2FgOYbmR6fhHGpAwZZKUOB182dTbcZbAiDz9gSNXReLVGJmFfX4ePKK%2BiC4BB1tfEpu203PGZBDh9DH6xxwj4SeM50uO394u29SNnzUbZfKu0UrEuLaFx4oriMaUJLVdZt1Mo8p231p46jCKnGC0VwHAVyoGMeMM3CYSqBcw%2FfWUPneeo1hVW13vGbT8hp9um8cALbNezjyzz0Qa5I00VcZLUH0A4r9UKP8ek71AGB9J%2FwIdVHqwl%2BLfxKIb8xvVkjOSRUFL1j9QRV9AKX12XTAfWXfjOL2SqjvHFVKUJdM2iH7RKIWbyCAx3ZhyrEDUjzCUkpPPm5X%2FOM7PoDUnhRrrBm6Rg48zfGaP5b46encPqtiSooGsRX0FObuqY8pp9xjw6lcuyUP8nbVoxFDrGH4Gufxk08%2B4A13AKMbXhcv17I9ADbgq7vVMD%2BBDMWKsDL2QWWhKAfkOSdsIgDlxqtNNVOXFmLuXBRQyLG6C22cEalJJxkmDDbwb%2FBBjqkAQN%2BKyFDXF8tqCML9ip1K4hCjIViEMLrLqD0%2FmsdTRd08Fd%2Fo85vAusjdy8ZDgG%2BYor46x%2B5j3frcIH3ElR2CIbGJl6%2FK%2Bivz%2B%2FV%2F%2B8VNjBO2PP4spNhRn1x7pcsinnbyOasMKLNaJRPk1SH9n8fzNDeLG3n1%2BhOcOQN92f1LGJMNQgaoNYRYxhOdTXq7giiV%2Bl98hCRZMh9VqqpCrSM6EULZ4mt&X-Amz-Signature=21888f3a8ce113a89853f58393d3be69b70f071f68a8fa156ec885b4972dd88b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CI5XVEL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDdyp1nk48C5ige23Zs5263ZVlUInOLrSh%2BJFh54iqQxAiEAndYo7UeRatqcNhqsb82pP8WtM%2B53%2BBX1ITbfnBveBAoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQNEuQoMJ3dHju9VSrcA4xITRX4btc5h8deyPrEM0cppA4Y9o0GCydKS5ouYC%2BzE%2B7IgUTFRx7xC8on3UrXPT7oVuxnFLokcFGxc1h36QU4kYyGYarlFET1lF%2Bh3EvUbnIAu8toyxjp2a4PnG27%2FTCVOW%2BGAanNS0SxoV9YXcFPrt4ogj5dFLATbLlTBUWsUxanXUFhX3IllOnNbAhygyWLKamcZPH5yRezPK9V0dGobaZO8wu0zZAlbODiKuJpLUbsnVnAJHalykiTKBjD1elqA2oHYRs1W4Hx%2FPGUUkjOluT%2FqnopPQ8CJ6WON%2FZOtvK187PJtoiJ4SVKINaafiiyr%2Bf68%2FZunb%2BUy8Hhgc%2FvHyomi%2Bg8uwF0kdbJFItQas%2FU3YV8sinNXrKaAPBkiWkhV0OyuhLGYV4FBG%2BNEce0u7P1qiflJMA6qGuIiXyHhNW2KCrGErL55ynmU02VeIaw0ZoSu4zmgk72moyqhUdhekIqPAzmDd6wuy0x41p9W8wjMce2xZY0qx%2BKBPyOXAh6yu3MvLyMxEZuDvFnCTjD1E8J957o%2F6pyEoQivj0y37HTzuRTg3H6nh6I2K91lF62%2F56QWWWJKHYWSUvYPYrHNa3bEgB82Q2KhQ4%2B%2FhLh6ZJ07qxj%2F5CNNNyhMMLCv8EGOqUBDlPJc%2BvFMy8h0Mq0Obhb%2BzVUpFG%2BPczK0X77h%2FR2kSq8Jp7P3ZeHIAgmRpiLBRIv3IEyja0DoJHFANgP8BZnKe4ExvNbKWEYTksPv7Z4CBhoCHJBRjkQW5U8hyaNjZ%2BfholSpHFnbP5S7%2F7GO4QkfVqIHrdEM%2FHikdqpJlUXxezwy46Ak8bo4DNmdAXxQ9osraKoPLhK5cD0BT9wq%2FDWzfB7LrSb&X-Amz-Signature=0dcff75698d7f7250a9dd0dbf6d8a3d4aa0e36f421d22a5fc81f031c582d452e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
