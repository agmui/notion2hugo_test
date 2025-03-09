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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEFMZWN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeRH1esbCvVWuzzxuWdta%2FZ4uEm8TmwgoRBF%2BAiPNGbwIhAIyAxzY7QJ%2FbNEJcIiYyy%2F2kpc7k9%2BzwAPuYHyaKG7LaKv8DCH0QABoMNjM3NDIzMTgzODA1IgxrZDP8aPwuFby5QsQq3AOTYVXhSJp4TV16TQNZtVjyOQesRwccXwW6GsUmxeyRGc%2FiGaZRh1q1bqY90SPqknb4ebVuyg7UZqq3Ran0lyN5tLbo9YTPFftGEVrxvX6cM5daGshcrgcBJnF1b2f4zEpiKXoVYPCaFYSThpLZaHe8pa5LPwSC%2FZgJGfzkigbI6CqYkAlmqa7whr35Zdy40%2Bd%2B2ULxLC4DRCSIqkz8VuOTA5F3c1NswUUGl6k0LxIkJXAatH7S6k7cNV2soRPD2VAI2w8OfQ8fjc6U03XtW0sHBPdvY6pLlZn2U1LnS2XEfo40dYRrsrYThnYkovRrTjVCQq9c9R2PrL4FQqvNzvikIQGcfzkFxlFyPqsxlXHj2Bkv9cxDfcOzX8wZtKdN70FlqT1D4ktqO9jppqXIPW3H%2FxxggSMWOmiWBWWcOYXA0ViCOO%2FDfI%2B5CWqQOGEks9FA91P31%2BIHSzwFaE0C6hyHWrPnA%2FV1WM8KBO0QA6HjC2yjP%2BK%2BreGKvQDlT%2BbM6nUmYD8bYJnAt%2FOeNCOaNsbwN%2FfRZfO2GjD%2FMV1Xz70NqpU9pn6Kw4UwYr1CB3o8oJXifdrBHH%2FnVRgudHHSc9PCshLMYPBhQqGkj%2F7GSMdLpjYQIK2ak9LnufYr6DDI4Le%2BBjqkAbc%2BRL1gXmqgWwQ0ZP5v%2FGpNwWHLYei2rVb8wIsj79Nbt6WFwzY8dBoEuZbgkCCGGj3E8fcO1C736WK5DKNfGozx1JcLGEQxOwDV%2BoY38ESYnzZEpb3fRKUwc1dcWIgu7e6A2IaX5LuyfRATVudtkFJ1mhBx3Ze5Okaks4f86BhRc4PHJhfgpNLlmqeYRqtMg59vljyEoZ7j70klRca16dKH9Q%2FL&X-Amz-Signature=9c7c6661cab2c61d6105f891861af1f1b91371369e1281069f2a6730a874a181&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEFMZWN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeRH1esbCvVWuzzxuWdta%2FZ4uEm8TmwgoRBF%2BAiPNGbwIhAIyAxzY7QJ%2FbNEJcIiYyy%2F2kpc7k9%2BzwAPuYHyaKG7LaKv8DCH0QABoMNjM3NDIzMTgzODA1IgxrZDP8aPwuFby5QsQq3AOTYVXhSJp4TV16TQNZtVjyOQesRwccXwW6GsUmxeyRGc%2FiGaZRh1q1bqY90SPqknb4ebVuyg7UZqq3Ran0lyN5tLbo9YTPFftGEVrxvX6cM5daGshcrgcBJnF1b2f4zEpiKXoVYPCaFYSThpLZaHe8pa5LPwSC%2FZgJGfzkigbI6CqYkAlmqa7whr35Zdy40%2Bd%2B2ULxLC4DRCSIqkz8VuOTA5F3c1NswUUGl6k0LxIkJXAatH7S6k7cNV2soRPD2VAI2w8OfQ8fjc6U03XtW0sHBPdvY6pLlZn2U1LnS2XEfo40dYRrsrYThnYkovRrTjVCQq9c9R2PrL4FQqvNzvikIQGcfzkFxlFyPqsxlXHj2Bkv9cxDfcOzX8wZtKdN70FlqT1D4ktqO9jppqXIPW3H%2FxxggSMWOmiWBWWcOYXA0ViCOO%2FDfI%2B5CWqQOGEks9FA91P31%2BIHSzwFaE0C6hyHWrPnA%2FV1WM8KBO0QA6HjC2yjP%2BK%2BreGKvQDlT%2BbM6nUmYD8bYJnAt%2FOeNCOaNsbwN%2FfRZfO2GjD%2FMV1Xz70NqpU9pn6Kw4UwYr1CB3o8oJXifdrBHH%2FnVRgudHHSc9PCshLMYPBhQqGkj%2F7GSMdLpjYQIK2ak9LnufYr6DDI4Le%2BBjqkAbc%2BRL1gXmqgWwQ0ZP5v%2FGpNwWHLYei2rVb8wIsj79Nbt6WFwzY8dBoEuZbgkCCGGj3E8fcO1C736WK5DKNfGozx1JcLGEQxOwDV%2BoY38ESYnzZEpb3fRKUwc1dcWIgu7e6A2IaX5LuyfRATVudtkFJ1mhBx3Ze5Okaks4f86BhRc4PHJhfgpNLlmqeYRqtMg59vljyEoZ7j70klRca16dKH9Q%2FL&X-Amz-Signature=27692fb1f1101c04bea0936f10c5a3555e025e2a533bfa56b94cff1303539f44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJQZC6P%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCKj%2BB7ZZrYOg6g2r3D33U8MsYK6e8GRGAd2CaZNcxONQIhAJiF5FndjODAFeRUTQ1%2F%2BMeTwmp0F593HjXeHACM0rvcKv8DCH0QABoMNjM3NDIzMTgzODA1Igymvo%2Fk1UNA4YdDmv8q3AO4uT3Q1nt7ctqbE2gJfwRHFmqzbN7Ac6cQL1YFuLagGU0j%2FidYLs9vpnDhNjsOVGR0GzCIcx6V%2BPwht6Hnf%2FPREIMn61zcPpwjVcxF%2F0kJ3%2F6KNHja5D8TLIJR3fyuzHGMzzRI4WIerjBCC%2Fvgd5WDA8ccnY%2BrbT4yrGxCCzGCgC8U14pYMoUO5WG7l8NfjpjY5zH3Tpz6m26tF9NTLKIVHH5Wi8RBjElCAvAKJr1aYb%2B1Mx1wnjIRzPe06wU%2F6rFHQj02z2LBOguwx8Lq7nz6Ja6j4tu1cFUd7IAImXxv5uyJWVLjyq5MBH%2Bi3OfoPEHKyxt2h4dOk6FNyM9UcsTdQJAHIqkRE7%2Fv7LNwx%2F87%2FILnntlrch0mm4kqXYYWCya7joopzCyJveCHgvhwlcIPJdA%2FYpnPSO6qzMZmAjavjZ1cQ61D0veXU3CVX4Mu9wuAJhvT20FeWbdx0RO3XekIENbq%2FpsfkZgizGUjSANbRUh33HiqIpDq2BodWKM%2FiDLHFPDoM8PwLv57%2FBqUw43TSr28Nb7PwMDCofhJTQ%2BnLeH2%2B3vG6IzCILBp38zZxkzVSQCL37e7MjBRPNhMlLOurV%2BpcvYJhAnrmNepLh5NIDV5xDjXEhKaoF1L%2FTC44Le%2BBjqkAZVC6BbMEbkTnbGQZG2hojYEYrJdrcLHDdlOVt6Fsq9v%2B8PQmoge7zeKAXPPGwBY77x0XE0w%2F9D%2FTfrmdfDSU7QTt2uskwJnQzycN51jvXOv9JDVeuvgy1dF%2BuLrtxTWnjArjrM51VuRJUOG5X%2Bc5OTmosZCDAayg9ho9MtdjYddWWVQyHMIgGWn8g0bhfR3rAYufDISr2R8dM%2FQwMPPN8%2FMIY6X&X-Amz-Signature=bd3b62006bedc24abd0c98664f099fdc04a52734f1563a2c4d5302ff1cad9f86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDULOOSE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICrSEVfRFBdF%2BhJkWmfsY4WzGIg%2FqWdGyYATB2Bp4tE3AiEA2daqjW2K07%2BqfEdplddABK2ouUJtyQqLHey5FajNlJwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC%2F1IXHQyPOVgxLuryrcA9lV1OZ5gaUM6%2BncmNiVEfJqLvBWIcoHx2d%2FgQkChYpsBIF37nKY9r%2Fgxqtz6dRFZZbL4%2BAHyOZf3ORg2CWDHf%2BIm3C4ac9ovvP18JtEAoR%2BiwQzpGRUcTWI7szkSwnLBbTIrKgswOIYnKbcfy8ax5rh9GJYivBfiFZWPbHSxw43jotmAPnYv1o0IFFfcuyAT%2FGHRpv1551Vgs7FyxNi3IIw9iNRGupx%2FpLd99%2FVOY6BP7zxgFm7e%2FfU15CzauqqFWUyozwVPnuqCE7H5zMK4iVVElr9rGHNoytMhufiAQU1lWJVH13YtLIrgtDjnb%2FGzdWdFjeu6wNgyzTjBGih8g%2B5Bi6iGkK%2B4kkykbwwlDu9rnChsofpGuAmUI%2FpHfTJs0uJDJdzZyMV%2BC67mTzy63aZOc1eLtuzJf0t01jrLh%2F6aq5x3zrHvt21xK%2BNJtnkCWhu6Obr1hHoYJoNCKew3P8Ud%2BSEONyP2htkRBtBbXqfe1MXpAwA6vugK86ZSBUN0YLIQTaSHYoH3E5QO1DykGyCDN%2FD2zdLm6RGzpJiae4QaHN3E6e%2B9V3fO1hXNQyc%2Fl4KkqWX4GQOjq6gbA%2BdyU7QNf9%2Bs3tV0KUFVmNpaUUOJHZRMYEVd7uWjAL8MOfgt74GOqUBTdBkLmpGCtZ1%2B3vHIsNJ%2BDVb7xhXh%2F4Qy3lBbqELPOMfHpfnPqLWjy5YnMUsZ5sZt9pqGE68Knu2qn6i52WhR9o02k47SrKfpJGNE5oI9DVGGISIgrLMQuoMw1fdDWCkj0g9UX4shWo%2F3Knzl1ifblPeqXB3vTpDVkJhvzpNgmoI19hYWir4c2O8zuXqs3ST8JcN4Ai17Mgq0faPQtrNjxA34Tta&X-Amz-Signature=7b6c707fb93f4aef435142b038de1e057441a365fba74f4b79f33083ee363672&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEFMZWN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeRH1esbCvVWuzzxuWdta%2FZ4uEm8TmwgoRBF%2BAiPNGbwIhAIyAxzY7QJ%2FbNEJcIiYyy%2F2kpc7k9%2BzwAPuYHyaKG7LaKv8DCH0QABoMNjM3NDIzMTgzODA1IgxrZDP8aPwuFby5QsQq3AOTYVXhSJp4TV16TQNZtVjyOQesRwccXwW6GsUmxeyRGc%2FiGaZRh1q1bqY90SPqknb4ebVuyg7UZqq3Ran0lyN5tLbo9YTPFftGEVrxvX6cM5daGshcrgcBJnF1b2f4zEpiKXoVYPCaFYSThpLZaHe8pa5LPwSC%2FZgJGfzkigbI6CqYkAlmqa7whr35Zdy40%2Bd%2B2ULxLC4DRCSIqkz8VuOTA5F3c1NswUUGl6k0LxIkJXAatH7S6k7cNV2soRPD2VAI2w8OfQ8fjc6U03XtW0sHBPdvY6pLlZn2U1LnS2XEfo40dYRrsrYThnYkovRrTjVCQq9c9R2PrL4FQqvNzvikIQGcfzkFxlFyPqsxlXHj2Bkv9cxDfcOzX8wZtKdN70FlqT1D4ktqO9jppqXIPW3H%2FxxggSMWOmiWBWWcOYXA0ViCOO%2FDfI%2B5CWqQOGEks9FA91P31%2BIHSzwFaE0C6hyHWrPnA%2FV1WM8KBO0QA6HjC2yjP%2BK%2BreGKvQDlT%2BbM6nUmYD8bYJnAt%2FOeNCOaNsbwN%2FfRZfO2GjD%2FMV1Xz70NqpU9pn6Kw4UwYr1CB3o8oJXifdrBHH%2FnVRgudHHSc9PCshLMYPBhQqGkj%2F7GSMdLpjYQIK2ak9LnufYr6DDI4Le%2BBjqkAbc%2BRL1gXmqgWwQ0ZP5v%2FGpNwWHLYei2rVb8wIsj79Nbt6WFwzY8dBoEuZbgkCCGGj3E8fcO1C736WK5DKNfGozx1JcLGEQxOwDV%2BoY38ESYnzZEpb3fRKUwc1dcWIgu7e6A2IaX5LuyfRATVudtkFJ1mhBx3Ze5Okaks4f86BhRc4PHJhfgpNLlmqeYRqtMg59vljyEoZ7j70klRca16dKH9Q%2FL&X-Amz-Signature=08d87371075203e0e0aca6c42b27e458ceab5a29f92bef9d092dab50cfeda85c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
