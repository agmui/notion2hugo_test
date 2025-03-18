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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INW2KJY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICpNTacYC608snyUHoml8ykwVn7tynX7otbkglzwL4edAiAEgvXYY6HMo4D0VgwN6Ehgy6xZScovfEUMqCeTimJsQyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMUeeLymOFDJvaTC9SKtwDFVXo1ZUCMGITct42AJ9jO6L%2BjwzKAQTx%2B914%2Bmkoyn1JWs3XQONrQMziab8N9EjCg1oWwum28TNS08Pku%2FkEtZr8PSdlJiGcA%2FZlXG2BijhmCTuMvbktOfQwB89W5yGu0MP1BBRfRyAjMBaGHNu%2B2v%2BoH0GhJWt0JD9phY3%2FigLQjGMyzLea8zZTrk3HApxE5LYqFEp8kFMBEKgKd8Ho7U5%2BmP3bVy%2F%2BDhHd59iJuVgin%2FyPAKDGcOvEa0RbqFPVQHepClDWZmixWEsBvM34LBbPHWPQDUOXfrhdlQwVJsjmOn1FVcWe8T4eZa9qO9l6X02j7tYbykCEuAqfalHFOpzf0xv410s7k2yJguIwzf1TjP6%2BMu8X6bW6Kpmbe0Bfjgegnl4BChxA9nHJ9M7vAHo5rlIeNSoBcoQrM8ZO1gFUDvUVduTD7mKLvSIdjBA9%2BpBKA97ijYL67e6zFfWhFiTw3zdCPJnBxAoc335we%2B6qFDJjqOdthohL%2FXz3oXfg%2FtKEVVd7fuxEnJ3IJ%2BaI%2FPmO3Czv1OUhYiFJR63tkhNA91rwgVUrNbAn2YrntleYe7SXM77YThAxYFPeUmWHXCsBsQbgfUW%2FsnjuKIZwYQJckrC6slxr%2B%2B%2FkXMMw87XmvgY6pgHBMO%2Bl9%2FnLNstq7%2FXdPuSFjz484zgoypNBTnoSNQyRMwewk8P3uVQwTuGQdNW%2FebHKq%2FgtFqWFngD1Yr70YAGWedJZT8Ie%2BB5OXpvGUrVE5RXU38SCtbR7RBdE0IcMiFR8KicJY82Wy9Par%2Bq7uLHRCijLynruomRaMBdLJYTjtrTxZZoEJXFPybgwB45B7if2KGanOgdWhOo7GxZ91ivFM%2BxOOVGi&X-Amz-Signature=3506ba31cbe06c0f59b3ec11bac26b059dece60f19b297c341ac140b47cc8a52&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INW2KJY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICpNTacYC608snyUHoml8ykwVn7tynX7otbkglzwL4edAiAEgvXYY6HMo4D0VgwN6Ehgy6xZScovfEUMqCeTimJsQyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMUeeLymOFDJvaTC9SKtwDFVXo1ZUCMGITct42AJ9jO6L%2BjwzKAQTx%2B914%2Bmkoyn1JWs3XQONrQMziab8N9EjCg1oWwum28TNS08Pku%2FkEtZr8PSdlJiGcA%2FZlXG2BijhmCTuMvbktOfQwB89W5yGu0MP1BBRfRyAjMBaGHNu%2B2v%2BoH0GhJWt0JD9phY3%2FigLQjGMyzLea8zZTrk3HApxE5LYqFEp8kFMBEKgKd8Ho7U5%2BmP3bVy%2F%2BDhHd59iJuVgin%2FyPAKDGcOvEa0RbqFPVQHepClDWZmixWEsBvM34LBbPHWPQDUOXfrhdlQwVJsjmOn1FVcWe8T4eZa9qO9l6X02j7tYbykCEuAqfalHFOpzf0xv410s7k2yJguIwzf1TjP6%2BMu8X6bW6Kpmbe0Bfjgegnl4BChxA9nHJ9M7vAHo5rlIeNSoBcoQrM8ZO1gFUDvUVduTD7mKLvSIdjBA9%2BpBKA97ijYL67e6zFfWhFiTw3zdCPJnBxAoc335we%2B6qFDJjqOdthohL%2FXz3oXfg%2FtKEVVd7fuxEnJ3IJ%2BaI%2FPmO3Czv1OUhYiFJR63tkhNA91rwgVUrNbAn2YrntleYe7SXM77YThAxYFPeUmWHXCsBsQbgfUW%2FsnjuKIZwYQJckrC6slxr%2B%2B%2FkXMMw87XmvgY6pgHBMO%2Bl9%2FnLNstq7%2FXdPuSFjz484zgoypNBTnoSNQyRMwewk8P3uVQwTuGQdNW%2FebHKq%2FgtFqWFngD1Yr70YAGWedJZT8Ie%2BB5OXpvGUrVE5RXU38SCtbR7RBdE0IcMiFR8KicJY82Wy9Par%2Bq7uLHRCijLynruomRaMBdLJYTjtrTxZZoEJXFPybgwB45B7if2KGanOgdWhOo7GxZ91ivFM%2BxOOVGi&X-Amz-Signature=2e15c255d5d9e8f22f5d0598c998863eae338bc2fa411959b2d7b8bddcd960cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3JQ7VG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFqXRveEA5cKibIIo8%2F363UXlvdmiM0d2pmpTb9wRnwGAiAvlJuYsVdJGXlzx4X0YJRKBIGAb2%2BmFmzhdixGm%2BYXTCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMTB72keDuMZXks%2FNsKtwDMfduRAhICk2uTlTs7fNDvsxm1uHsXHCsSboU2ULUrJ1VpIv818dyPnUkp%2F30gfmF%2FL4ycsIF%2Bxw9QpSa%2BcXO%2FIGS6zWcBKBVBpfhEu86Xw5Xy5E%2FkqpVWGRSbulp%2Fd6T5zI3%2BKCA9BXb%2BtZmnqE2veAbuLuGw9ld8JXMdOReyYHRAsCsTzD4WtKsWlDpy1yb%2F2udOMsOU%2Fexqo963nzOU3bDiv%2Bxnkh3sicw6b7%2FoTfoCG68qK0FcpdjKEntyFMU0CsBKLQqxpa3rNShbP9FMOxxIJnN9SQq81vPUfJVT1MQXAitvU%2BMsdPOidYIQlg8BScbrWDbH9ZFhIlTTHQXYdfItuuxXfB%2FhexYyVV3dAsydF7HUDMblXECd3p8OLhv4P1V3qXqtmuLT9etK5IlAquLDLWBvqJyHW3i0vpyay0pREy0GWMqX3hAEJbi2v0D9POVdy6HD9PujYL1qCwKi8GO7XLohuobL6%2FwjMsnYd%2FxpkzRL8H7Wf3y88Ko7Cn8vcqNNUiwc2ULO6vZ%2BEV4ryao9pPjSXIqqV3zkLY8oVyJXPu3b%2F3NH0eVLgZOKIEi9Q6l7mLY1jWVDCSwODgzGJWq1qMwn8fVlW0MmV9gSmxfHtwQCvJFfDdZItcw9rXmvgY6pgHF4T3KSrQ0gnVYQ5xkRNfc34XkgcaR8%2BnrkjLOWofA45pL9z1slXwGuGcu%2F8wS96OaNCSXhV0GUZpuxXZuz7AF6zcLsDJWOw%2Bdiv5sMKinocEeoP1BVQEnTfBqlTbiNxYBIV0FoQni9JVXLQWu%2BFOwXY%2BbCg3dLtoMnL702meZ%2FN6hwnKt58xHbZl2DGw5zZ%2BCydnRidk34xwXUmObpsgwfzlMZvsR&X-Amz-Signature=c3562109138461b3910109c3fce02006662da7d3dca8845a8d740860d9d51ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBQCGJA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCXgvx%2FTheO5yBhDp57vdistUer%2BvfQq79S2R3plntecwIgEMoRmmaiGRDo6K3X8BzAlC6w4guTc3jRiy7WgfErIMMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEyv9ygVlC4gQnWGYCrcA7zr3Z7WNjJbwLkaiwsh6NbFKp8qDcNAkQGBohF8nWjATFLR9cTevgPD2tw8KQ0%2B2sZNF6GPQJzOgv1%2F6DhmcRjgIe%2Bk%2By%2FdtJkPtO58Z05q0edgIskai7POZroG2jzLGgbnbRY1OPVXTqFOEwGbDSPXKgPDkakryMK0Ayd9d7SrQovGbIW00F3HpB5N7Tw4gyLzVY9pumirAgvNvaPFsHoQrdX49WVydkITxtJPySGj57xaxAkh6NFkSJQuIPMk0jss7kho9r2dosRdbRGumFwZgt3KClxs%2FrF9%2B8UxBTFW3P1uzlY%2BYao5eruh8O7NWoIFXT6MzOOAXIEo8mAm1RMO%2B9Jig5M%2BW1rgbWnwsVdn4LAr9S7r9wxZty3XmNwR1Kj%2FIHhq9sab%2BtxptZ2nixe0PHbIrAVSoHT1hG4AJaXL%2F1Xd7lKu6QmNSWGgQAOd5BPeJQvB6IdgWLNpfxh61Q0nNFl8Paa8i7SVworeDGHdnFtjcuxHjuzr5Fq%2Fa3IbiPRxC1lBAznXM1OJ4ONVUX5iycYa2bhPD0zdeLDosbFlLQyheJn9mFLxWhOEZIX1jV77HVEfrD4HwHF9i44440vh9shj1i1UJMx9r4L5bibG2zwSLz7UOic5XpQCMO605r4GOqUBUhYdSwovDSozfIuD3c1UIWMAI%2FCPqsCMMI%2FKN4ZDVsX0YA8Eh04G2kF89p%2Bf4VMF%2FWSyrS1PxVk%2FKHhtp%2BlwtBFp%2BpISHw8Bw%2FF5ywGDFKb6DCu5E340O2cgdHfXy1mZJrINP9%2BFko0fyUXtRFKr4t7dSbFBE8ZJsGq2Mt%2BirqLwPXueJ3H4oWRVpQ2VUmwXVlZ7AZUvgqoRf7eVHdO3MaoZltJu&X-Amz-Signature=7dda757d77b511763c8831276b53ec6e72caa4066a653b401a00411578a0a7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INW2KJY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICpNTacYC608snyUHoml8ykwVn7tynX7otbkglzwL4edAiAEgvXYY6HMo4D0VgwN6Ehgy6xZScovfEUMqCeTimJsQyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMUeeLymOFDJvaTC9SKtwDFVXo1ZUCMGITct42AJ9jO6L%2BjwzKAQTx%2B914%2Bmkoyn1JWs3XQONrQMziab8N9EjCg1oWwum28TNS08Pku%2FkEtZr8PSdlJiGcA%2FZlXG2BijhmCTuMvbktOfQwB89W5yGu0MP1BBRfRyAjMBaGHNu%2B2v%2BoH0GhJWt0JD9phY3%2FigLQjGMyzLea8zZTrk3HApxE5LYqFEp8kFMBEKgKd8Ho7U5%2BmP3bVy%2F%2BDhHd59iJuVgin%2FyPAKDGcOvEa0RbqFPVQHepClDWZmixWEsBvM34LBbPHWPQDUOXfrhdlQwVJsjmOn1FVcWe8T4eZa9qO9l6X02j7tYbykCEuAqfalHFOpzf0xv410s7k2yJguIwzf1TjP6%2BMu8X6bW6Kpmbe0Bfjgegnl4BChxA9nHJ9M7vAHo5rlIeNSoBcoQrM8ZO1gFUDvUVduTD7mKLvSIdjBA9%2BpBKA97ijYL67e6zFfWhFiTw3zdCPJnBxAoc335we%2B6qFDJjqOdthohL%2FXz3oXfg%2FtKEVVd7fuxEnJ3IJ%2BaI%2FPmO3Czv1OUhYiFJR63tkhNA91rwgVUrNbAn2YrntleYe7SXM77YThAxYFPeUmWHXCsBsQbgfUW%2FsnjuKIZwYQJckrC6slxr%2B%2B%2FkXMMw87XmvgY6pgHBMO%2Bl9%2FnLNstq7%2FXdPuSFjz484zgoypNBTnoSNQyRMwewk8P3uVQwTuGQdNW%2FebHKq%2FgtFqWFngD1Yr70YAGWedJZT8Ie%2BB5OXpvGUrVE5RXU38SCtbR7RBdE0IcMiFR8KicJY82Wy9Par%2Bq7uLHRCijLynruomRaMBdLJYTjtrTxZZoEJXFPybgwB45B7if2KGanOgdWhOo7GxZ91ivFM%2BxOOVGi&X-Amz-Signature=ff15a88a5df80c96428fb8f6e8ff4c72f51e56bce7288766080466f27199b185&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
