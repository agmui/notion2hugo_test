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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDXYN65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHIjIZtljFTn9c7m6NUp5ugE%2BWo2mpfHBnXgYIRopKuvAiEAyin8nrEail8qW5JDiQf29n6ClrQ3B4jaA%2BxlkxsDya0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI8PUhuWSMWLPlOr3ircA6Ffx3lJAPEBH4RUh9VltjCx6%2BaZahZ687VBvsM4izeJFPDv8PuKkm7td0iwUHHAN%2B2lg9nEFJaMdPyR5ecAPI06YTZR9Jm6QOv2MKzVc8GoIsJR%2BoisxPf0X2dKkHPdGkRJRjBPPH0gCR639BRH5jBO86vdBab2q2S8dCSF0Ya59FoSJH5JFgbdb6UJQTQqJa08Fymqph129lOYakix%2Bl4oG72vLUXNOOT7SkE6ZuvMfGh7XHVbBoZS7aLBbvaLknvv%2F3KTMT0%2BUrKV2g1nAva4kCfq1paZHzB4QDH%2BNL%2FB7List5Fqw4EHliJLNi73Ed2IVXeu9lFOhdeCXgzukR1ZDb3lMLD22RY5odqvVg8suBH9hmVefj4zqawEd4dRitwywdzUibKLceCKBcy4G9QRiylBIDjhpxLWFc7WELfXzkuatCOw43bb42EBRFJOd55l6cAJJQFh3F9gDyue6Qjqs3tjCxs7qWy1J1wDiZbmTiVQz8D1VgX4dDCtHQosdr0XGxtZ2%2FxWUjOk1mSLxYTdK%2FIcFCx%2BcymqfauOptD2YmrtN%2BydgB0sKY2f86bP3q2RKKnLWjEaijk7rtyiH8rVp%2BE5TD%2BHyBVWpTtxwQ1MkBZ1Y6HM1u%2FuHX2HMIeWyMEGOqUBv1NN7k08gof0r033MIZGYSxwbJgPHNIMfS0GYoG1CJ8nQjDBAHeNEhuDNVeutdhycBg0B250%2Bwk6tCiYhZ1PVQcOxZqn9Wij5LzJCAN6Fbxqf4yrqIcxF1UxA6X%2Fs7a4l5M2%2B4vLGcBebSK%2Bbqmu6RDd6tjTwiNqrl4oq2Q63Vxj1Nb9G3Sp8ukL0enLPyDEvK4%2FlEK5RIA1QIq3zGYDmEJtHW6m&X-Amz-Signature=f2ae314d15834dbd90e3950de0d0380df989a75da9b1ab83d220bbfd48f9396e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDXYN65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHIjIZtljFTn9c7m6NUp5ugE%2BWo2mpfHBnXgYIRopKuvAiEAyin8nrEail8qW5JDiQf29n6ClrQ3B4jaA%2BxlkxsDya0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI8PUhuWSMWLPlOr3ircA6Ffx3lJAPEBH4RUh9VltjCx6%2BaZahZ687VBvsM4izeJFPDv8PuKkm7td0iwUHHAN%2B2lg9nEFJaMdPyR5ecAPI06YTZR9Jm6QOv2MKzVc8GoIsJR%2BoisxPf0X2dKkHPdGkRJRjBPPH0gCR639BRH5jBO86vdBab2q2S8dCSF0Ya59FoSJH5JFgbdb6UJQTQqJa08Fymqph129lOYakix%2Bl4oG72vLUXNOOT7SkE6ZuvMfGh7XHVbBoZS7aLBbvaLknvv%2F3KTMT0%2BUrKV2g1nAva4kCfq1paZHzB4QDH%2BNL%2FB7List5Fqw4EHliJLNi73Ed2IVXeu9lFOhdeCXgzukR1ZDb3lMLD22RY5odqvVg8suBH9hmVefj4zqawEd4dRitwywdzUibKLceCKBcy4G9QRiylBIDjhpxLWFc7WELfXzkuatCOw43bb42EBRFJOd55l6cAJJQFh3F9gDyue6Qjqs3tjCxs7qWy1J1wDiZbmTiVQz8D1VgX4dDCtHQosdr0XGxtZ2%2FxWUjOk1mSLxYTdK%2FIcFCx%2BcymqfauOptD2YmrtN%2BydgB0sKY2f86bP3q2RKKnLWjEaijk7rtyiH8rVp%2BE5TD%2BHyBVWpTtxwQ1MkBZ1Y6HM1u%2FuHX2HMIeWyMEGOqUBv1NN7k08gof0r033MIZGYSxwbJgPHNIMfS0GYoG1CJ8nQjDBAHeNEhuDNVeutdhycBg0B250%2Bwk6tCiYhZ1PVQcOxZqn9Wij5LzJCAN6Fbxqf4yrqIcxF1UxA6X%2Fs7a4l5M2%2B4vLGcBebSK%2Bbqmu6RDd6tjTwiNqrl4oq2Q63Vxj1Nb9G3Sp8ukL0enLPyDEvK4%2FlEK5RIA1QIq3zGYDmEJtHW6m&X-Amz-Signature=a34e8323e946442353ed71fd677e368c784474060b7cd96d212f8773e16e4e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDXYN65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHIjIZtljFTn9c7m6NUp5ugE%2BWo2mpfHBnXgYIRopKuvAiEAyin8nrEail8qW5JDiQf29n6ClrQ3B4jaA%2BxlkxsDya0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI8PUhuWSMWLPlOr3ircA6Ffx3lJAPEBH4RUh9VltjCx6%2BaZahZ687VBvsM4izeJFPDv8PuKkm7td0iwUHHAN%2B2lg9nEFJaMdPyR5ecAPI06YTZR9Jm6QOv2MKzVc8GoIsJR%2BoisxPf0X2dKkHPdGkRJRjBPPH0gCR639BRH5jBO86vdBab2q2S8dCSF0Ya59FoSJH5JFgbdb6UJQTQqJa08Fymqph129lOYakix%2Bl4oG72vLUXNOOT7SkE6ZuvMfGh7XHVbBoZS7aLBbvaLknvv%2F3KTMT0%2BUrKV2g1nAva4kCfq1paZHzB4QDH%2BNL%2FB7List5Fqw4EHliJLNi73Ed2IVXeu9lFOhdeCXgzukR1ZDb3lMLD22RY5odqvVg8suBH9hmVefj4zqawEd4dRitwywdzUibKLceCKBcy4G9QRiylBIDjhpxLWFc7WELfXzkuatCOw43bb42EBRFJOd55l6cAJJQFh3F9gDyue6Qjqs3tjCxs7qWy1J1wDiZbmTiVQz8D1VgX4dDCtHQosdr0XGxtZ2%2FxWUjOk1mSLxYTdK%2FIcFCx%2BcymqfauOptD2YmrtN%2BydgB0sKY2f86bP3q2RKKnLWjEaijk7rtyiH8rVp%2BE5TD%2BHyBVWpTtxwQ1MkBZ1Y6HM1u%2FuHX2HMIeWyMEGOqUBv1NN7k08gof0r033MIZGYSxwbJgPHNIMfS0GYoG1CJ8nQjDBAHeNEhuDNVeutdhycBg0B250%2Bwk6tCiYhZ1PVQcOxZqn9Wij5LzJCAN6Fbxqf4yrqIcxF1UxA6X%2Fs7a4l5M2%2B4vLGcBebSK%2Bbqmu6RDd6tjTwiNqrl4oq2Q63Vxj1Nb9G3Sp8ukL0enLPyDEvK4%2FlEK5RIA1QIq3zGYDmEJtHW6m&X-Amz-Signature=de370de91b9fad3466cdeb39d1ea14d99cd16b13b3c7fd8eb698be1de41f66c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSL7VBU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBf6428iuVgvZ5mCk%2FcjvpCoTfiHNz%2FpbIP4oL0RaVK2AiBYIkjXSIj%2BQ5fL7l%2FqwEmbj%2Bq2CwsyTvh9mgoccJCfDCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMFSp3%2B83TzboVozh8KtwDiQVenmW%2BopRZ7CEgc6TiHyImB3zkA6adcZY574VgJAyWzYI3bDX1LN0h62QXCvTSJzz7VgCiUlfisKjFA3uSOzlPq8cKLxUJmZaN5akVB9EfZ933x7LetU%2BD9m9LjF7Pv8HZ5WXu506WndBAu6%2FOjrK%2BZEA6Lb%2B%2FuCpAK1XJmyXOvCGd3iRlqIbFPKRqy2ea7%2B%2FwXuI2eM6XeJnRJ1rw7OJneRi0XFla%2FWAE2AlAC68xwqSBkEObazfzmh9fDlFPL62a2hakIFf9QztS81ddr9%2FGXqkkdnWx61o55KgQTsEKLL%2F456uy15k99aCYVxwx9KMaCbmT1p6FYT73qrFvHBfayWYqJoafEYXwMCei%2FSB5ca3NLtwhluBX%2B1Gdbzsw%2FyTIH34nixBDV0JmVVhC%2B9LnYMGq1pzRr0S3uB9vZeHh0VQT2XhFXQBEZvP4ybB5cFYCnTmQ8d3YY61TQQMXonQfZm4SxhjrpSudOG6fX5alFx0f6%2FyKL4s081WDloKilLGPyCRRMOnyPnAvTJ035ELVrgTnxg7SCw50fdkWa0Mza1mBTJYfdlK2a0zk%2BX0U0mzWBHfeDBIafWXm4%2B7xTsU0j3EOYu6pD2Fw2gFRw4RF8H3oLxJZIyQKaHswtZbIwQY6pgFAZl0BKV0MsLjLPHKpW2RL%2BUyWyyagu7Gd0UyM0nk6N2Su99w2hotDE4FaGI2TWd6wGwXfBG4W4lefOi9nxb4bQBPpQS2mYFS6yOvoazPBzjFNk4oPgqb7CTJNQN1iMIjC%2BhI9nxRCECTuYkhoJN2bO4WtWqUohuROQbEbuEJMPC9arG3lpQueKyiQJn2GqVCO6UlqCttHq3G0SiCaM4vW%2F3tQj%2Bzi&X-Amz-Signature=ad2e88834662f9791c943ce74054efa985acec333e185caad5868f1472fef040&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUWPFDB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC4%2FKeNKNdOH8%2BS9lYksInwzXGkhrkMrs48zkOGI4wUfgIhAKHz%2B8ivPCWk9jQdDa3DPQMrG1qgEsXHyiDZXZNaZvYiKv8DCB0QABoMNjM3NDIzMTgzODA1Igy3qB2cO1panHEQRssq3AOo8gHyrK02Df5995NMEwvjUm56Ry9%2FdwPTdpGrJe3S%2BGZGbZowjZiCUeiqvsXi93N%2Bsr%2FejYcglpsOQ8RLHF6lodpdDcvx2tBusH5OQlgQmYl1XjTaN7y1%2FW0rtrQ9f9TuyXyuXuBB78ep35jcCHnl%2FyUat8VNfmtzKONR8%2FWMmnjsvWH%2BrePTiIVyrC7JxEaQyYUhqu%2FNE%2Fshyr9vpDM3jdqIqlMFDBDZDWcoSJVVZy99l%2FjL1Z7VuSTCuDR9853ordqCs%2FjNktIjeHbM5z3GZdwzQlMd8%2FrsZVkYXfZM7%2BxgcSf18DphPH37uNJHbLb7vBrGStjlCoazzreXzjM3nx7KKMZUjTtuoVNjWDbnfGCmxEyjdsPiU8MLG9Zczg97bjs8IKrXAOeqUWZx%2FFr4DgsWGN8M2jIwnKrbsLLsMeZ7WhlczwOkkr3OkBOkH0Pm8cGT%2Bi%2Fg42z9nzl%2BIRUYAJUxVlm888yt05zXvy%2FSj80Io5ZlnzXj0p7MR1OHMANYudpeaNiAlUZaKPi%2BehT9Sh957OeA4329IgWz3P6Vyw0dC5zuJPoyQx8MPLZB7b2%2F16TE9puIj1Bfb3WOKfOVBmcNxz4B%2BfYbNcEtdZNFcF5mBbiroHvGLdhYMzDSy8jBBjqkAZNfJQhRxRjTXo97WyzMxnZPuzgQVxwAVzU%2B9nnOs8eUXTZ4KxOdf6MkCCdK4uQw9lv%2FtOxV1MXVT9qsUSRkHxhqzR5hgfWr%2Fhv50W10BTzs5iKfHWfNy8SOp9FdyH%2FGjnWe0bjBtQ%2F9ZLySLHuYjc90OzLbYsh8sjzNxpcuyPLlHJqrvdaIAjmzNtMmsZn4Ah1byKOotj9HDlZ3Vnqcq5kZqk9X&X-Amz-Signature=7a78830d55d551ee953ef290689ab005c811d0028f900cc12a509964355c3f91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDXYN65%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHIjIZtljFTn9c7m6NUp5ugE%2BWo2mpfHBnXgYIRopKuvAiEAyin8nrEail8qW5JDiQf29n6ClrQ3B4jaA%2BxlkxsDya0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI8PUhuWSMWLPlOr3ircA6Ffx3lJAPEBH4RUh9VltjCx6%2BaZahZ687VBvsM4izeJFPDv8PuKkm7td0iwUHHAN%2B2lg9nEFJaMdPyR5ecAPI06YTZR9Jm6QOv2MKzVc8GoIsJR%2BoisxPf0X2dKkHPdGkRJRjBPPH0gCR639BRH5jBO86vdBab2q2S8dCSF0Ya59FoSJH5JFgbdb6UJQTQqJa08Fymqph129lOYakix%2Bl4oG72vLUXNOOT7SkE6ZuvMfGh7XHVbBoZS7aLBbvaLknvv%2F3KTMT0%2BUrKV2g1nAva4kCfq1paZHzB4QDH%2BNL%2FB7List5Fqw4EHliJLNi73Ed2IVXeu9lFOhdeCXgzukR1ZDb3lMLD22RY5odqvVg8suBH9hmVefj4zqawEd4dRitwywdzUibKLceCKBcy4G9QRiylBIDjhpxLWFc7WELfXzkuatCOw43bb42EBRFJOd55l6cAJJQFh3F9gDyue6Qjqs3tjCxs7qWy1J1wDiZbmTiVQz8D1VgX4dDCtHQosdr0XGxtZ2%2FxWUjOk1mSLxYTdK%2FIcFCx%2BcymqfauOptD2YmrtN%2BydgB0sKY2f86bP3q2RKKnLWjEaijk7rtyiH8rVp%2BE5TD%2BHyBVWpTtxwQ1MkBZ1Y6HM1u%2FuHX2HMIeWyMEGOqUBv1NN7k08gof0r033MIZGYSxwbJgPHNIMfS0GYoG1CJ8nQjDBAHeNEhuDNVeutdhycBg0B250%2Bwk6tCiYhZ1PVQcOxZqn9Wij5LzJCAN6Fbxqf4yrqIcxF1UxA6X%2Fs7a4l5M2%2B4vLGcBebSK%2Bbqmu6RDd6tjTwiNqrl4oq2Q63Vxj1Nb9G3Sp8ukL0enLPyDEvK4%2FlEK5RIA1QIq3zGYDmEJtHW6m&X-Amz-Signature=fc0369fd4d5019b77dbbd27ea49d009c9c680e45755995ebc53d86be2336f37d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
