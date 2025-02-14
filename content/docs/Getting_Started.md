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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADBOJB4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDfiy8%2BUxVaKGdxT9O1EajwevYJK8Qy2DoPJuD51tp9IwIgaP%2BgS7DYj2gz2yztbMrI8cEYu1wnffPmug8BaLj1as4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGT2%2FhLCPjjT%2BB2xOSrcA8SUD67zLK2VwwxCba4H3Xj2tqKMV36K%2BkWmn7HIoRP8FjoMNuE2syL22sD1hUaGbP4HBm9gTo1k2AfTKshodMBhW5%2FlRNrDT%2FjB3OJNgNS86SA9zGGZDsd9yF2Mg%2BL%2FsALrQD9h2OHzWWJqEJ1fVl011LzkY5l7FKZr1B5p3SZyCzI4QvbcJ7tYLWJs%2B8P4qpfVWkbjQkn6pkJ1HeUygzwVCk6Ogc1qwma7I8WEB%2FQtuMxZk%2BLTJXQ3pA0Zd7hfS8Uv776v2oT6se%2Bum4kjhxJrgLCrfpMIT4ZgEnbLp36%2FIe9mJmBaDaJ5BoJZJ8ixeTrozFgE6bklkwPwdXG2FRBKnX%2FT3qxXobEybSyrFJlPJjIasaJRsKkqKFmDH9IcZIr0t0O5FcuCQK4P0VcZ7cfJlX%2FIHcsi6rasiejxI1zYMEPe5WmBrUOiDdaovj0KQhIQDIkYrvklnIPJttTFaQrq9NPxisfI76cmRkQ9aRLyUd3urNfVMQTKxRI81OL7PIRKSAQcN%2BPL9XedfI%2Bsy22pQ1x5Fh60KH6SQFumEV7aLrFQULEgrKfq89zCEi9sLg7MFjQk9TxLz%2B7zGsBQLXJ1egFMY0QkLeo%2FYNh2sa9eHf4MeZJr7V9LY79oMM7pu70GOqUBFymNcwhdtX1u%2B84OSBU2jvILLs8kh836mvp62osfGnGcp3MHLVCZ0682opePBBPbfSo%2BDM%2FL19WO7DEpLkBLGlqoY6Jpz8jAt1BaXVIlQS%2FYyIlV%2BUS4fw9sC75VFQHVA%2FycsHy%2BgRvsqvCbsJgC8xlIcI7gAfIGjCIJXdrjzLWWHokvD4mD%2FqPjTm%2B9tBNVSg98dyzT2aiargn9No0eH%2BWNLIZs&X-Amz-Signature=e0435bf989e90e74e0f4c948fa8abc1607b37afa969e3a08311e71225d8dd3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADBOJB4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDfiy8%2BUxVaKGdxT9O1EajwevYJK8Qy2DoPJuD51tp9IwIgaP%2BgS7DYj2gz2yztbMrI8cEYu1wnffPmug8BaLj1as4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGT2%2FhLCPjjT%2BB2xOSrcA8SUD67zLK2VwwxCba4H3Xj2tqKMV36K%2BkWmn7HIoRP8FjoMNuE2syL22sD1hUaGbP4HBm9gTo1k2AfTKshodMBhW5%2FlRNrDT%2FjB3OJNgNS86SA9zGGZDsd9yF2Mg%2BL%2FsALrQD9h2OHzWWJqEJ1fVl011LzkY5l7FKZr1B5p3SZyCzI4QvbcJ7tYLWJs%2B8P4qpfVWkbjQkn6pkJ1HeUygzwVCk6Ogc1qwma7I8WEB%2FQtuMxZk%2BLTJXQ3pA0Zd7hfS8Uv776v2oT6se%2Bum4kjhxJrgLCrfpMIT4ZgEnbLp36%2FIe9mJmBaDaJ5BoJZJ8ixeTrozFgE6bklkwPwdXG2FRBKnX%2FT3qxXobEybSyrFJlPJjIasaJRsKkqKFmDH9IcZIr0t0O5FcuCQK4P0VcZ7cfJlX%2FIHcsi6rasiejxI1zYMEPe5WmBrUOiDdaovj0KQhIQDIkYrvklnIPJttTFaQrq9NPxisfI76cmRkQ9aRLyUd3urNfVMQTKxRI81OL7PIRKSAQcN%2BPL9XedfI%2Bsy22pQ1x5Fh60KH6SQFumEV7aLrFQULEgrKfq89zCEi9sLg7MFjQk9TxLz%2B7zGsBQLXJ1egFMY0QkLeo%2FYNh2sa9eHf4MeZJr7V9LY79oMM7pu70GOqUBFymNcwhdtX1u%2B84OSBU2jvILLs8kh836mvp62osfGnGcp3MHLVCZ0682opePBBPbfSo%2BDM%2FL19WO7DEpLkBLGlqoY6Jpz8jAt1BaXVIlQS%2FYyIlV%2BUS4fw9sC75VFQHVA%2FycsHy%2BgRvsqvCbsJgC8xlIcI7gAfIGjCIJXdrjzLWWHokvD4mD%2FqPjTm%2B9tBNVSg98dyzT2aiargn9No0eH%2BWNLIZs&X-Amz-Signature=ca89e5df111b92570048ae9e48e89df311f9f0f52eec58e1df6cec94e3859076&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VGPG3XF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrGICAsO7xAj6VSMBT97r1VXYB%2FfmVt7tCTmMYDBdMMwIgAwVxnvkBA%2FXRE8Zb5ypvCV097nryT8jJNT5JGynAgZAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNbtS6jPf1DDuDrRdircAwpIxutrieBD9V%2F7kPKTKMaGNl%2F7%2F%2F9h4JgpdGvx9gmQyuEhEBzvVAK39F04de%2FCXQBf5c6eo8JHzt3cw0U9ucedNmFGrH03i923C4%2FGSNvtB3bLOAZ4Co6XBjcd%2BuE%2Fwhx4Kfx72zOVkWimnIg8VK9bWdCvqJOM5LozUECBQ8QQhBLZZvzYPm2NTcA30QQVkUF8n%2F%2BFWM6SEmEk6p6gnho3t3sAw6d25FlLeIio9LOmXpJwK0N%2BSS5UCil7oI2NhGLuN3%2FVjwznNa%2BCBQWaSBFZlc9dDbtfOsRpxVncJ5AsO7hWwgJSq%2BhCxE%2FMrrn5IQyhR6Q0XoIvrzKLMij%2F9VJxwvCKkow%2Bt9gfqWb6IKQz%2F5RZYmz5bLVJg5IozTNrydtDADaC%2B1gY%2FykrjDXJz%2Fqzs1xXGPbrd1fxC8nEE3BvQz0%2Fui01g5a%2BeyxOYLHf5N2mWlkYeDlyO86mshxmE%2BJKfh%2BwJUc7OdottwoYsyFTgPfE2woHJF%2BfKNv58BxdvobMjCg8PhZ0im4wkzaklh59gLIeF4GJHBHtsAqtErMHG3jPSs9FaKuAJ1jQxCcXiLkhUwBDr4II5xHjrbx53M2yGSsJ70NRJulVt9vT%2FpTQwBxWErp2X7QBXEreMJ7qu70GOqUBQmkZ%2BZ7eDLAYhWe4IYnrbcBQx6j4hBbhkiSOS8hZqJh1BWRyqKPsMLUPDsu2GqjDwDo9dOK08TSKN7c%2Bs2WUK%2Fo4EQdKHZmFF%2F7lelpkvfzXdZf7GO4Qg3ffOaNiFpnR9y12FfcmXANqYUdJo5kESQNyHSov3TKn4fyFEvGY0maxs%2BBAC2FV7UY%2B5uHo3UNLIPTxMV6uKmtE5n%2FnqBwWV%2F8JYe2B&X-Amz-Signature=8fd33f60afbe2436499728409aed85a69e45deb9cb3c62ad7194ce48d9e7fb98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2Y6DFP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHkxT83tDbwnpBGr6DVZd9qFmt%2Bxtr%2BgFfT2XCjO8gDmAiAJpuHBc1Vv5b9lrAvzF9IH7Gg%2B5HPtMmy%2FhR3BbBMqcSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwShxDIOcsA2nEIjGKtwDTn9fQvpLoHO0hTOPDSwIPff3MskLm1eTXV2NPvDQMvIXI6M4imtZXrHa7gpLIFAlvsVOkfIgnFKKamWPT%2F2nQk3dnNOcffBwEIEqZpzxecDlO%2FeAvl6jFr%2BTZya0o%2BnAjob5z7jq7oBMoLl9Lb1VoS4zlDcbmsYY%2Fc942FqsVd5SLLtJbSSMGtUsIarYYrG1A9cqV9Dauwc9%2BbWbpg3H1sk80Ex0TWGdRnHs6vr%2FzdULnuok1SIOm9ulewdfp2J7F8kfrMAKSGkx8Q%2FEzjMS1X3a3GSu8L9I%2Fr8D4u6GqDuqe9TRokgXSHWAO7mo9%2BlmR3gBBzkyU34gOWf%2F3mGDGmxj7W83rvcdZUI%2BkgJJBoO1bMQf9L2qpLWPEIwhXX6%2BSIbvnqAb0cbIA9d3P0zAOvzxnpKiJLLIpLRyBUSScXuprdpsKZ7QEiyUYKhdRtwN%2Bn2Ezrf3qo1xp%2FchVe%2BhltLFOnujeIWeyGT9eGZsZm9X6Kk1Wl%2FE%2Fxk%2FHCES4Nz1K3f%2BcjJJVOWy%2BYB%2BKKlWVXM0dq4os9zqJydFgmbOwQWfV%2FyxZ6zaAIUviajfy69ImdgXLC753urvaVB0JABOPsSOmdiL6tSTOW9tieN78vL7CNuqoGrr40BuDGYwg%2Bq7vQY6pgG%2BWaTRzd23L1uBsf3jDrCg0G5%2FzCZzMw8hVTsNZCHUOqvDXctkv%2FrymkBZpTYrUI4tf8hsYl1w1rs0X%2Fba2O8WE%2BHVqtERSxEDZJqzn9%2BoT6XGR5%2FqulMUIgN7foFR%2BQqoyM8Syj1XCVzTEMjlv9FN4%2BgAWqmDHaGBzXcrD1gPpKKOUlOHWqElPsqOlF5uZ2%2BDXMX6%2B8TQOxa%2F0r8uXga9Je6fKxIV&X-Amz-Signature=43007629ee5be2e403562a24944d3040a7c5ac0e9b43bc69176f482894a29450&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADBOJB4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDfiy8%2BUxVaKGdxT9O1EajwevYJK8Qy2DoPJuD51tp9IwIgaP%2BgS7DYj2gz2yztbMrI8cEYu1wnffPmug8BaLj1as4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGT2%2FhLCPjjT%2BB2xOSrcA8SUD67zLK2VwwxCba4H3Xj2tqKMV36K%2BkWmn7HIoRP8FjoMNuE2syL22sD1hUaGbP4HBm9gTo1k2AfTKshodMBhW5%2FlRNrDT%2FjB3OJNgNS86SA9zGGZDsd9yF2Mg%2BL%2FsALrQD9h2OHzWWJqEJ1fVl011LzkY5l7FKZr1B5p3SZyCzI4QvbcJ7tYLWJs%2B8P4qpfVWkbjQkn6pkJ1HeUygzwVCk6Ogc1qwma7I8WEB%2FQtuMxZk%2BLTJXQ3pA0Zd7hfS8Uv776v2oT6se%2Bum4kjhxJrgLCrfpMIT4ZgEnbLp36%2FIe9mJmBaDaJ5BoJZJ8ixeTrozFgE6bklkwPwdXG2FRBKnX%2FT3qxXobEybSyrFJlPJjIasaJRsKkqKFmDH9IcZIr0t0O5FcuCQK4P0VcZ7cfJlX%2FIHcsi6rasiejxI1zYMEPe5WmBrUOiDdaovj0KQhIQDIkYrvklnIPJttTFaQrq9NPxisfI76cmRkQ9aRLyUd3urNfVMQTKxRI81OL7PIRKSAQcN%2BPL9XedfI%2Bsy22pQ1x5Fh60KH6SQFumEV7aLrFQULEgrKfq89zCEi9sLg7MFjQk9TxLz%2B7zGsBQLXJ1egFMY0QkLeo%2FYNh2sa9eHf4MeZJr7V9LY79oMM7pu70GOqUBFymNcwhdtX1u%2B84OSBU2jvILLs8kh836mvp62osfGnGcp3MHLVCZ0682opePBBPbfSo%2BDM%2FL19WO7DEpLkBLGlqoY6Jpz8jAt1BaXVIlQS%2FYyIlV%2BUS4fw9sC75VFQHVA%2FycsHy%2BgRvsqvCbsJgC8xlIcI7gAfIGjCIJXdrjzLWWHokvD4mD%2FqPjTm%2B9tBNVSg98dyzT2aiargn9No0eH%2BWNLIZs&X-Amz-Signature=eef00b7d9d1da374bf6e1143453495003d56210fd41aed82c2c7c4b2196c0492&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
