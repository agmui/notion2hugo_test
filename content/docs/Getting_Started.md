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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOWDVJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDxxTd1XbjlIM%2FWypuYJfwZYB8TKm0EN%2BZsVZLGpwMVGQIhAIHgczUdtHhYaLzFDxXotV5E7duBzQJHYdVpHCvu2a55Kv8DCFMQABoMNjM3NDIzMTgzODA1IgyYth8H3xuyBcYy95oq3APybQoa2380xX6LR2qxyFNo6H4raEklMlZ46zMDxRzAEH2MunQjZcZownJSqFPZ0JIySnkloinTGgekLGvemISuksVfd5p1wS6d9fwDvk4FM0qkc%2F7hrF8SYvrlVcGjyApo33VH6NmR953vroMdhi2sjbA144gyXEtzBV9wBsl%2Bate42yO1eWU83AE3Swow%2B1yPkuFfMMAthCLnzaCnlyiMVafSLlAON5MBpxmiKxxM4b5QVzcK%2B5vYUgJiG2vsj1epbWel2O4d52K6lkVv0zir8Yhu8g6IVAxGn2IG3s86ROBUM1EknXhwn2rYOPbYLEtALl%2F0apw4gbb94QLexFc9sk8lQ5EeyfiWBFZCXHZ21hJLRjZPnZEr2ONiHIHfEyilkbAs%2FBUaO48LwnvXDpuySYgB7m%2FO6e6m1u%2B7AlvJWLkefrlgSb0NCUnRs6PYQFDz96xhrtLwuhCal0lUiVYCaKRy7SRqKp0TRGwxN%2BqnRzHhWNY6Gc7qlZ9b7p6e1lRlbeUCH4F%2Be2lUlcW24OMUz7HTcjvJlATEI0Ekj1Oji5sqLIwBLT7RIjywfJtSLObqwSj%2FllZsVPk4SoWg%2BvjJtBtwIkHmPAPMNRM7uidL9D1GvILhVkCIaTFeSzDZ%2Fr3CBjqkAYoDnNxW2UNXbVYWqncAx0CoM4Pq50z11dRAfUGsbAzzCbwwbQj5x2Zoh9B5R%2FKGBA%2Fwlvq6mI%2FApnIiFWDsszPSLXKJMuoDa3m%2Bopm5Ug7n%2B7Ze%2F%2FKPUiP4CcS%2Bpr%2BB8q9wT3U3cVBdUZ4gA6MP%2B66CZsFwddzXdObyFMvFkywnpZxAGsih6uvpa5ESbM1%2FFlZ5nfvbHV%2BXmsMNDz1%2FlGdO%2BS9k&X-Amz-Signature=d6d5688a89bc2b5f6e3182e4d274438b7fdea1363e0c66398eee71db574c6f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOWDVJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDxxTd1XbjlIM%2FWypuYJfwZYB8TKm0EN%2BZsVZLGpwMVGQIhAIHgczUdtHhYaLzFDxXotV5E7duBzQJHYdVpHCvu2a55Kv8DCFMQABoMNjM3NDIzMTgzODA1IgyYth8H3xuyBcYy95oq3APybQoa2380xX6LR2qxyFNo6H4raEklMlZ46zMDxRzAEH2MunQjZcZownJSqFPZ0JIySnkloinTGgekLGvemISuksVfd5p1wS6d9fwDvk4FM0qkc%2F7hrF8SYvrlVcGjyApo33VH6NmR953vroMdhi2sjbA144gyXEtzBV9wBsl%2Bate42yO1eWU83AE3Swow%2B1yPkuFfMMAthCLnzaCnlyiMVafSLlAON5MBpxmiKxxM4b5QVzcK%2B5vYUgJiG2vsj1epbWel2O4d52K6lkVv0zir8Yhu8g6IVAxGn2IG3s86ROBUM1EknXhwn2rYOPbYLEtALl%2F0apw4gbb94QLexFc9sk8lQ5EeyfiWBFZCXHZ21hJLRjZPnZEr2ONiHIHfEyilkbAs%2FBUaO48LwnvXDpuySYgB7m%2FO6e6m1u%2B7AlvJWLkefrlgSb0NCUnRs6PYQFDz96xhrtLwuhCal0lUiVYCaKRy7SRqKp0TRGwxN%2BqnRzHhWNY6Gc7qlZ9b7p6e1lRlbeUCH4F%2Be2lUlcW24OMUz7HTcjvJlATEI0Ekj1Oji5sqLIwBLT7RIjywfJtSLObqwSj%2FllZsVPk4SoWg%2BvjJtBtwIkHmPAPMNRM7uidL9D1GvILhVkCIaTFeSzDZ%2Fr3CBjqkAYoDnNxW2UNXbVYWqncAx0CoM4Pq50z11dRAfUGsbAzzCbwwbQj5x2Zoh9B5R%2FKGBA%2Fwlvq6mI%2FApnIiFWDsszPSLXKJMuoDa3m%2Bopm5Ug7n%2B7Ze%2F%2FKPUiP4CcS%2Bpr%2BB8q9wT3U3cVBdUZ4gA6MP%2B66CZsFwddzXdObyFMvFkywnpZxAGsih6uvpa5ESbM1%2FFlZ5nfvbHV%2BXmsMNDz1%2FlGdO%2BS9k&X-Amz-Signature=2f7f389e44db2858d7aaedf35367664bac58998ef36ebb6ac9d7732271241611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOWDVJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDxxTd1XbjlIM%2FWypuYJfwZYB8TKm0EN%2BZsVZLGpwMVGQIhAIHgczUdtHhYaLzFDxXotV5E7duBzQJHYdVpHCvu2a55Kv8DCFMQABoMNjM3NDIzMTgzODA1IgyYth8H3xuyBcYy95oq3APybQoa2380xX6LR2qxyFNo6H4raEklMlZ46zMDxRzAEH2MunQjZcZownJSqFPZ0JIySnkloinTGgekLGvemISuksVfd5p1wS6d9fwDvk4FM0qkc%2F7hrF8SYvrlVcGjyApo33VH6NmR953vroMdhi2sjbA144gyXEtzBV9wBsl%2Bate42yO1eWU83AE3Swow%2B1yPkuFfMMAthCLnzaCnlyiMVafSLlAON5MBpxmiKxxM4b5QVzcK%2B5vYUgJiG2vsj1epbWel2O4d52K6lkVv0zir8Yhu8g6IVAxGn2IG3s86ROBUM1EknXhwn2rYOPbYLEtALl%2F0apw4gbb94QLexFc9sk8lQ5EeyfiWBFZCXHZ21hJLRjZPnZEr2ONiHIHfEyilkbAs%2FBUaO48LwnvXDpuySYgB7m%2FO6e6m1u%2B7AlvJWLkefrlgSb0NCUnRs6PYQFDz96xhrtLwuhCal0lUiVYCaKRy7SRqKp0TRGwxN%2BqnRzHhWNY6Gc7qlZ9b7p6e1lRlbeUCH4F%2Be2lUlcW24OMUz7HTcjvJlATEI0Ekj1Oji5sqLIwBLT7RIjywfJtSLObqwSj%2FllZsVPk4SoWg%2BvjJtBtwIkHmPAPMNRM7uidL9D1GvILhVkCIaTFeSzDZ%2Fr3CBjqkAYoDnNxW2UNXbVYWqncAx0CoM4Pq50z11dRAfUGsbAzzCbwwbQj5x2Zoh9B5R%2FKGBA%2Fwlvq6mI%2FApnIiFWDsszPSLXKJMuoDa3m%2Bopm5Ug7n%2B7Ze%2F%2FKPUiP4CcS%2Bpr%2BB8q9wT3U3cVBdUZ4gA6MP%2B66CZsFwddzXdObyFMvFkywnpZxAGsih6uvpa5ESbM1%2FFlZ5nfvbHV%2BXmsMNDz1%2FlGdO%2BS9k&X-Amz-Signature=4e05c55567f3a6cc3d5b8100808dc0141b2e7135f71ed0a776a9cafed403c75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R245VECX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAU%2FJJZToYm6SH%2FhtpUBlemhKxSKj4QEgz8Der09MyPqAiAOkB0%2FTKVzjeB1OUzZbFcWMcx6UTWncOWI5oKMZPl4Qyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMj6i8NsQuDuPh3c5DKtwD1I3rwwKpDwpXoTG9AVUgeitkZlDrkxHzQVP5UUyr8GKmmPjyEKQfv4ReYyp0jGnCh%2FYDp88VG85LBHzkDI%2BVYnq7GfzGW0xgHAKPvRQe8WDOc2uzMRkgf1xbpuJ0DXxm4RtuUyi6g3kQEvOhj16mO9yUnfPcqxyn9IG2IsrbQkQKOZbmlKXX2pdMeJ2%2B7mUxigybElsB14clCNuTh5DrTMRHnAPEztKqLlsAlMRdTV8oBMAQ0MEo189%2BqVrtbVRGCGdluLfAcBZ9ECznlOWvLFUCqPFOdbhA5Cr1um5SWhhC%2FCZFHwhSF686OuRgWIQRT9GxIiwgWjtj0M%2F6QRiwATw8%2BWAFEZa2W5RpQsQ3daKapSUKizy6jmpThs6Sh%2BrR9S0kRPjiwWFjijh7K1vGu2Iq5DB8WyUWu6Zn2TR00h9HLhOtEMw%2BTpBAPcgKGMlnQSJg%2FoJVOjQJkoARyBcUITBi9p9iIvh9WfS9u7R14LPwMyF2zfJPnDHeM3M%2F7lrEQW2o6pdcOrI%2FSrfZkFtyfR43%2FIGSrsD6aN3JSCOmH9H9WfatTJMFQ26FW8SbHw6QCnFINSOiCxHxAi5AV8qF1904%2FLwyEP4bUHugDkkInj38Ug1Q6r%2B0Asl5Ncww1%2F69wgY6pgHnlpKAQCNHvxvD5m6ltSgL6XAQH3qiN8z%2BMkIuNNgJgRnGVl%2BTBIUwuwzbz3X37cq07uglMihLohskk6K5kMJzQ%2BR5ieS4P1y%2BbsZlO9gkmJ7C5aJFRsyQ6HrnCc9InnxNF8wo1OnUag90RDX%2F39weH92IjS04UZJZTL%2FSFU%2FiS4lwlPSWictxKaT%2FpNkgVPB82%2Ba1KCjEnflBycLsatyQOCMtoUk%2F&X-Amz-Signature=83be3188f86ada0786d2f486ebddf2332bdb8130704a931126e23a6ef5d5420b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGNHRUC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD9hAbo9SCG0hxl2OP5uS93JKDSFcYSCJ2fG48CnMHi1AIgPaATSTQcv2TAMXLNbTVxk1QNtcF7bJdjA7l6YYkwWEsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLqamMx0ZPNawpXUZSrcA%2FNCtui%2BvnsBuo06Jfiiefa99mXdoXlNYYi%2BB2rRJ8ZPewoxM84NPfAdWYI7SgC0LisMacRCqNDjFC1PQiXxlSURzipR3vz9SfhCdzjR%2BBsM7zQiO1M73DhcvSKMoOrZLZ75n9Bau0r3WgTP%2BuM9Q6kuGOqkLs46%2FNyAuhslJoCJmHJ6nlyscnod%2FRGeRxbw7CF4ZhtgCB6i%2FKNVUAoq72O9BZBn%2BnwDxuRaVII%2BdzTUpJpsVKv15lH90QHqwOeVRlvmaIRLluy%2F3tYKh823n6sbP3Y%2FgxtpIo35AN6%2BgzL%2B6%2FAmyeV%2FOtIfqXDZ5LpZbkKxhz0MsU9x%2BEW%2BKTbxgG51gUeqfzItJdrdVusFLUoIvtcXIVMA0y5sUPASH5aHkBomm6If5Q11rFQEu4EndCpZ8Y80F8XD5KoJBVJ5qDuZeFJzoTP2OHR%2FB1Po0y4eYJxyHWWO%2Fq9vhWForL1Q8827hxc9CUc4L7iFdaIZfr%2FknzajeNLHdf%2BOKy1o9NzH3kIEedYKsfHutsKG4nFj8BfgCeorjnnoWqoPYn1LjP7krB7rv6glcekGPbbeeDJtEeWBJ4UwNS7c1IC3ft%2FuRLSG3xgB2aW7rZotoj1eY%2F%2FqU7n5tUMRiV%2FEOhCfMJX%2BvcIGOqUBOJ60rI4VR9rZ7ltMyYwLfBGSHnyP5IzYzjlIMns2Wv3JNHElEPXxgkeHmC4B0qmNkzxOh16lsO8TaZlkmhXuGvnITaYoSyBZAAqEhulQKmlI3GMoSUj8n8L30Fmgqez4l2b8Z5VIaLcBqMXg2UI5ahcB0zcao0xq5aBXTI1CVgaHFGZjL8lHIY36lJu0%2FfIiY1xF30mx4p5yx00vN1oFxS22Ex3i&X-Amz-Signature=875b59be841f5ee06ea7cf1dce4bdc6f6ffee1c5a099c1c58875c92575e237a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOWDVJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDxxTd1XbjlIM%2FWypuYJfwZYB8TKm0EN%2BZsVZLGpwMVGQIhAIHgczUdtHhYaLzFDxXotV5E7duBzQJHYdVpHCvu2a55Kv8DCFMQABoMNjM3NDIzMTgzODA1IgyYth8H3xuyBcYy95oq3APybQoa2380xX6LR2qxyFNo6H4raEklMlZ46zMDxRzAEH2MunQjZcZownJSqFPZ0JIySnkloinTGgekLGvemISuksVfd5p1wS6d9fwDvk4FM0qkc%2F7hrF8SYvrlVcGjyApo33VH6NmR953vroMdhi2sjbA144gyXEtzBV9wBsl%2Bate42yO1eWU83AE3Swow%2B1yPkuFfMMAthCLnzaCnlyiMVafSLlAON5MBpxmiKxxM4b5QVzcK%2B5vYUgJiG2vsj1epbWel2O4d52K6lkVv0zir8Yhu8g6IVAxGn2IG3s86ROBUM1EknXhwn2rYOPbYLEtALl%2F0apw4gbb94QLexFc9sk8lQ5EeyfiWBFZCXHZ21hJLRjZPnZEr2ONiHIHfEyilkbAs%2FBUaO48LwnvXDpuySYgB7m%2FO6e6m1u%2B7AlvJWLkefrlgSb0NCUnRs6PYQFDz96xhrtLwuhCal0lUiVYCaKRy7SRqKp0TRGwxN%2BqnRzHhWNY6Gc7qlZ9b7p6e1lRlbeUCH4F%2Be2lUlcW24OMUz7HTcjvJlATEI0Ekj1Oji5sqLIwBLT7RIjywfJtSLObqwSj%2FllZsVPk4SoWg%2BvjJtBtwIkHmPAPMNRM7uidL9D1GvILhVkCIaTFeSzDZ%2Fr3CBjqkAYoDnNxW2UNXbVYWqncAx0CoM4Pq50z11dRAfUGsbAzzCbwwbQj5x2Zoh9B5R%2FKGBA%2Fwlvq6mI%2FApnIiFWDsszPSLXKJMuoDa3m%2Bopm5Ug7n%2B7Ze%2F%2FKPUiP4CcS%2Bpr%2BB8q9wT3U3cVBdUZ4gA6MP%2B66CZsFwddzXdObyFMvFkywnpZxAGsih6uvpa5ESbM1%2FFlZ5nfvbHV%2BXmsMNDz1%2FlGdO%2BS9k&X-Amz-Signature=7cce65d480b3dea5098e1e93762b2539de1ceb8821af6e62e91f963f056075aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
