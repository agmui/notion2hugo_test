---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPLYKUWR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzpq79eCRSY52z%2BqboL8%2Bibbvg2ZrjmFUtI7cU%2FP1ohgIhAMKQKkKqI5dZ24ZoOpwT%2Bsp3ScpheiOmaPTQvqZ8HKaVKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrET9mEXpAhFHq9yQq3AOGHXue4UixiQPWpefOZfoXpQQhfnfvxH81LpREFNlZKDcsUn0I3o07HyKtsbXs6%2F8jAHcOWXZpStHVylF5ikL0wx%2BYQV2hh1CWPovL4q1qq1cyj7F3BtQ9ef9AZ0MjxSy5lDwEYPc34KMClSYRInbIOP7bgkzS8rOSeY3wmlLGh5R7A4gpKewupGKvPx%2Fu0ybNHmhbMDltH%2BBhVIhqJ5S0phg%2BoLCVhqcGbrKG90AU7Ib%2BYivQTUW9a01SyMb3qMU1SBcDcn0s%2B7x8BsZKwtgK81NEK8vUQ03Lg52U5VqFkw4j5A%2FYY2LTLaneg3Elp9CmUIFmbcdSinptYpcNhw491u1Z79r5YgyNu22jDwA0QGmGJW11KReLYsCFwwnILOe3zkK7NYmg7P89aln4HU3%2B5j8FC1jF5TJovwtYXSQzUVXogZjB9v%2F5o2f%2BkBtwf4K%2BrK8pM2gsUKLN1YhoTkUWoM71RV%2B9TiBG4UcAT%2BTwAScXcOpG2aNYpgcEc9TySTLScGv%2BqyQdy1gn5MIgWQdCIVWBhAZhXSOV%2BnuSIgpkpL%2BVlJ%2BL8jL7rf9lSsI3d5fHlrjNFIoMFG7b0dBRLbreveWVInb6Mt%2FwM09rMm2%2FrQCRn9g4nUFD0lTZUzD3pJfSBjqkAQwgyYdgLWt0bxoZU36fAV7kWiras8NrZgPc0QPXNQJyRrYc1bLJR2VBkYp9LN9rb7jf8LJ126ndVDSXquPvXkPBePRT9MourbbIn7HwmC2UYwumklWnk1dlrPTdHj4S9NyvHbFSTrCG2mEF4awLrHvaNAW%2B9De%2BM5ve8ZWDJpXSlmH9Kfg1dAM23%2FqhA8xs3xOCW847N6nLxGJUDsjRqkjOf5VL&X-Amz-Signature=bda0d5aedea7b0fea45eb7c36abdda59ca60ee1167067ed594dadd0c778216c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPLYKUWR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzpq79eCRSY52z%2BqboL8%2Bibbvg2ZrjmFUtI7cU%2FP1ohgIhAMKQKkKqI5dZ24ZoOpwT%2Bsp3ScpheiOmaPTQvqZ8HKaVKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrET9mEXpAhFHq9yQq3AOGHXue4UixiQPWpefOZfoXpQQhfnfvxH81LpREFNlZKDcsUn0I3o07HyKtsbXs6%2F8jAHcOWXZpStHVylF5ikL0wx%2BYQV2hh1CWPovL4q1qq1cyj7F3BtQ9ef9AZ0MjxSy5lDwEYPc34KMClSYRInbIOP7bgkzS8rOSeY3wmlLGh5R7A4gpKewupGKvPx%2Fu0ybNHmhbMDltH%2BBhVIhqJ5S0phg%2BoLCVhqcGbrKG90AU7Ib%2BYivQTUW9a01SyMb3qMU1SBcDcn0s%2B7x8BsZKwtgK81NEK8vUQ03Lg52U5VqFkw4j5A%2FYY2LTLaneg3Elp9CmUIFmbcdSinptYpcNhw491u1Z79r5YgyNu22jDwA0QGmGJW11KReLYsCFwwnILOe3zkK7NYmg7P89aln4HU3%2B5j8FC1jF5TJovwtYXSQzUVXogZjB9v%2F5o2f%2BkBtwf4K%2BrK8pM2gsUKLN1YhoTkUWoM71RV%2B9TiBG4UcAT%2BTwAScXcOpG2aNYpgcEc9TySTLScGv%2BqyQdy1gn5MIgWQdCIVWBhAZhXSOV%2BnuSIgpkpL%2BVlJ%2BL8jL7rf9lSsI3d5fHlrjNFIoMFG7b0dBRLbreveWVInb6Mt%2FwM09rMm2%2FrQCRn9g4nUFD0lTZUzD3pJfSBjqkAQwgyYdgLWt0bxoZU36fAV7kWiras8NrZgPc0QPXNQJyRrYc1bLJR2VBkYp9LN9rb7jf8LJ126ndVDSXquPvXkPBePRT9MourbbIn7HwmC2UYwumklWnk1dlrPTdHj4S9NyvHbFSTrCG2mEF4awLrHvaNAW%2B9De%2BM5ve8ZWDJpXSlmH9Kfg1dAM23%2FqhA8xs3xOCW847N6nLxGJUDsjRqkjOf5VL&X-Amz-Signature=76d46d985e39af875888129e9bd876e1e29a864d9dba56b818eb541d657f0b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPLYKUWR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzpq79eCRSY52z%2BqboL8%2Bibbvg2ZrjmFUtI7cU%2FP1ohgIhAMKQKkKqI5dZ24ZoOpwT%2Bsp3ScpheiOmaPTQvqZ8HKaVKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrET9mEXpAhFHq9yQq3AOGHXue4UixiQPWpefOZfoXpQQhfnfvxH81LpREFNlZKDcsUn0I3o07HyKtsbXs6%2F8jAHcOWXZpStHVylF5ikL0wx%2BYQV2hh1CWPovL4q1qq1cyj7F3BtQ9ef9AZ0MjxSy5lDwEYPc34KMClSYRInbIOP7bgkzS8rOSeY3wmlLGh5R7A4gpKewupGKvPx%2Fu0ybNHmhbMDltH%2BBhVIhqJ5S0phg%2BoLCVhqcGbrKG90AU7Ib%2BYivQTUW9a01SyMb3qMU1SBcDcn0s%2B7x8BsZKwtgK81NEK8vUQ03Lg52U5VqFkw4j5A%2FYY2LTLaneg3Elp9CmUIFmbcdSinptYpcNhw491u1Z79r5YgyNu22jDwA0QGmGJW11KReLYsCFwwnILOe3zkK7NYmg7P89aln4HU3%2B5j8FC1jF5TJovwtYXSQzUVXogZjB9v%2F5o2f%2BkBtwf4K%2BrK8pM2gsUKLN1YhoTkUWoM71RV%2B9TiBG4UcAT%2BTwAScXcOpG2aNYpgcEc9TySTLScGv%2BqyQdy1gn5MIgWQdCIVWBhAZhXSOV%2BnuSIgpkpL%2BVlJ%2BL8jL7rf9lSsI3d5fHlrjNFIoMFG7b0dBRLbreveWVInb6Mt%2FwM09rMm2%2FrQCRn9g4nUFD0lTZUzD3pJfSBjqkAQwgyYdgLWt0bxoZU36fAV7kWiras8NrZgPc0QPXNQJyRrYc1bLJR2VBkYp9LN9rb7jf8LJ126ndVDSXquPvXkPBePRT9MourbbIn7HwmC2UYwumklWnk1dlrPTdHj4S9NyvHbFSTrCG2mEF4awLrHvaNAW%2B9De%2BM5ve8ZWDJpXSlmH9Kfg1dAM23%2FqhA8xs3xOCW847N6nLxGJUDsjRqkjOf5VL&X-Amz-Signature=697926213df29e45ee5f18b8c26174a9b1a24710f620f0c3914689e94449ed29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVTYZL6%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBUIvpJp8CpFcA7%2F%2F69MNHA5HUBx6QiMMQlaCOPjjraeAiEA3X0kNj47vIDEaLQeR6aR38yrrLJhCZorEUqW8Pa8jd0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi9uJ3CqhRZinanOircA6I7s1weObacQO9SBnmTR1xDorzCAN1xkdX2UQJXacZxGPa0zYZ4ZSwjMOnYdbYwyxeNHx7xT3i1jpjwhItAMSrtXqwJRDSHhOly95yXhGxGnDADppOKM%2BRCyRtwA%2BXEidXNRvzZXOe7tFwIgjnQy9FfJAwhrI4%2B3O3%2FC80Awup13sTOnaJ1eWWyp4Lc83J9l7RRzOX9kzhSX91PjBdtD%2BsVhcEhFG3QzqGH2QrCI5ldbi6vsxeJM2YJUWFjhYoJh3mKGZiZHUNh9V3agBDnrcxVOoc5YhQD5R%2BYv29FiNNwfgIDKNQG3jB4GlLGoUDJfNEgSZc%2B%2BgIpuYCuQhWrTXOgRODnNlNRyXTKhLFoTAWGXJHmdJT73H%2BSoyf3tiend7wlX1ljlF5MH3cKRzSVzihry72zSxnebjT%2FqOLJpAYo3bMXV4Ki7b1Nyr3OAueuoU%2F02o18DUqbI%2BKMwRSrwKFtR9QpCiR%2B2eR%2BVtMCliZXwtL0zyncPySYM0W%2BJhymCueRldn4G8yaJWUteDVQTLlxeqZ4OMVMX84IP4gY%2BNrLEKjTYPSwIjO%2F5mZKniUANV5oHmx4ElzPfldc60Fvy%2FYcS%2BMglektKC16t5%2FXdYy514vCee9oy%2BdCk6ueMOOml9IGOqUB0pm0DlUtFDrPjguxmcNkZg1xdCL5j5tZ%2Fpfq6mD0FRfC8y1JzSvQUjCoQ%2BlQIvF1CPbsW2VrY2CgKaZvqw50jVnEG%2FRhYkjDzbdEq%2Bzkc1xdNwdc9UZ5d%2F9dTZG%2BGvRU8f8OMzJmQ%2BkHD3NGfeDdfObACBDT%2FHF5BTRC39dKVBX5ePE3FAYUhMHsl4OZB6GWIiNpTq7%2BcGXmxTTcKlXybJmR%2BLoS&X-Amz-Signature=6978b8160ef145a212afe22e44e6eceb090f7353c083d85b18fd4b3999285b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LR474B%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIESLA8CaPx8rTKKtf5vGLtTZONftrVV7wHhcXYN%2BGtzXAiB73ByI%2Fiz9mrM%2Fn6Iee%2BClJYJq15s5nn%2BE%2B7RJ7ZKBWiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKS6BR2p1Z79VL28nKtwDM8JqByTu3q4RKXQM4sBnHLSKXY4tXUBRLdIYbc0Fe4SGEfm6ODYHK8ZB5cJnouprdeHmembHDwfFxMu8CrfXnzjgR9hRD%2Bgqsj26mK%2BdmnrnWekE7kw8exgUZsp%2BnXLU2OXsyTt3ledEl58zbosuU2fUrVshWpYQc%2B9jNtyfaTNqfQ6u9p3sd%2FXhHw85h4YrTQh2bo4fhsrFSViu8PRubLwRzduSmWnxJ3LbHvIOwM%2BU5LLyJ5037UHXwjvZWkeOxPzbNF%2BqSR%2B1UdPRlqUZvGO%2BeWcaLsK9Wjvj6RTWc89JRK3wOhtL5GaMFS444G6o8aF3%2F%2FHo1Z3O04XgJH%2BOQT7k%2FR2jY%2Bln%2FMGIZ9pPv1qc5U%2BdaT3jjMiZXvunCFRlzlFMUxCtsWGSiOpHxefaix31uiOFcyF3UWnyyP9g4V1BTDfG1iYA4bjgubwmbN5vnCG4w2XhsV3cT2QFM7lp9cFaD3cbKTh5mkWrG9KQebK0T5%2BlzdMLSeGSxnY%2FF3fk4HpFpUdkibi0PvzU1Fiud4subAn4XH526xQhvjl2xbajisBCMzuv1RMJyqUwreeQzm0p9zNXQc5ttqmp5EqETz3e5dJhQ4GqwhvodeuWXGCF6sHD5lXOIkZq%2B38wj6OX0gY6pgEl4Gbtpn3q%2Fd5ewFpjET4WApmxynk2i0ZYgxSeyQ6yANskqXHb5vkDAh0jTnBBUTBgkmqYzJdIpuDU4fvnldptRF5JbVZ07JOmFHFDHgRNWEZ6GB4GEXMDlSXiGWyScPADkPAPzZ7v4xM%2FXX7GCaOvB%2Fq8bReSo8iyLPEHNvrKnWWwkdGJv7N11noVxYe8ycmpg%2Fzz%2BmkhbCfcXtCQJxhpZb5hJikw&X-Amz-Signature=569ebfbc7e233112b8d43ac7bb4d1121fb82b2da2268d50805ae4ef64929db47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPLYKUWR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzpq79eCRSY52z%2BqboL8%2Bibbvg2ZrjmFUtI7cU%2FP1ohgIhAMKQKkKqI5dZ24ZoOpwT%2Bsp3ScpheiOmaPTQvqZ8HKaVKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrET9mEXpAhFHq9yQq3AOGHXue4UixiQPWpefOZfoXpQQhfnfvxH81LpREFNlZKDcsUn0I3o07HyKtsbXs6%2F8jAHcOWXZpStHVylF5ikL0wx%2BYQV2hh1CWPovL4q1qq1cyj7F3BtQ9ef9AZ0MjxSy5lDwEYPc34KMClSYRInbIOP7bgkzS8rOSeY3wmlLGh5R7A4gpKewupGKvPx%2Fu0ybNHmhbMDltH%2BBhVIhqJ5S0phg%2BoLCVhqcGbrKG90AU7Ib%2BYivQTUW9a01SyMb3qMU1SBcDcn0s%2B7x8BsZKwtgK81NEK8vUQ03Lg52U5VqFkw4j5A%2FYY2LTLaneg3Elp9CmUIFmbcdSinptYpcNhw491u1Z79r5YgyNu22jDwA0QGmGJW11KReLYsCFwwnILOe3zkK7NYmg7P89aln4HU3%2B5j8FC1jF5TJovwtYXSQzUVXogZjB9v%2F5o2f%2BkBtwf4K%2BrK8pM2gsUKLN1YhoTkUWoM71RV%2B9TiBG4UcAT%2BTwAScXcOpG2aNYpgcEc9TySTLScGv%2BqyQdy1gn5MIgWQdCIVWBhAZhXSOV%2BnuSIgpkpL%2BVlJ%2BL8jL7rf9lSsI3d5fHlrjNFIoMFG7b0dBRLbreveWVInb6Mt%2FwM09rMm2%2FrQCRn9g4nUFD0lTZUzD3pJfSBjqkAQwgyYdgLWt0bxoZU36fAV7kWiras8NrZgPc0QPXNQJyRrYc1bLJR2VBkYp9LN9rb7jf8LJ126ndVDSXquPvXkPBePRT9MourbbIn7HwmC2UYwumklWnk1dlrPTdHj4S9NyvHbFSTrCG2mEF4awLrHvaNAW%2B9De%2BM5ve8ZWDJpXSlmH9Kfg1dAM23%2FqhA8xs3xOCW847N6nLxGJUDsjRqkjOf5VL&X-Amz-Signature=46cad1aa74822c566425467267db93373a7a7627158c12f0be7771a19df2e45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
