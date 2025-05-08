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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEKTBKN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2j77yzDq%2Fp876WqrkuwcyHz6uwGjPEGMW7RCyrZXAZwIgZWdRRHclwGIvYYPqeWRWVGiD6UL6Lre5UKFIyukaP64q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ9%2Fu0UiP8jR28zNaircA8e%2BpyWIhUMMuZ5%2F4OevrYvlnTlFKc%2FIXFqKQ0h0Nxi59WdJ65%2B6%2BE1QyQsRnhe95AAIJVHgdE0IaHDmKF%2Bg0fIqgZ4ff8%2Fby%2BAl%2F8b45zeQTQfZR2KZGrO8I10tz0Jgvo8A1EwClNN9BFm9Y2xjO6x7NjEOWVf%2BM68G9sv2Hemy9R12OgeSfxl9HO4Nybh98Tu%2Bu3tvjCGDGDWfPgYk2PdCIgSvU0Jfa1OfJd8dgzF6ICeRWhY3oX5c%2FJ0HJoQniN9Rh8jGmeWqg8xP6DbHVFc%2BBLG7LnPKbq%2F2vvybri94e6flc8CKJH75mBY%2Fiqe5nlyLuT09eSJFBbaNfOTiIN8xJ%2B2RcdRQMGADYH%2FmX7MqcLCzcIGiaOu1%2BXJv9q9m7ct9fK52ke%2BV4bVfB6JFu1gOWKo1KUg69PV%2BzqjalRSe1pDoWr%2FlC7j3uc9ENPQD0%2F3sE4FP1DjI4KpZkCwuRxD%2BZbWeWNIqiLFhiSaFl0qTGfe%2Bz1b2rF%2B83q17IlBZx%2BNRwEl%2Fc9ug19jSeGWfb83RL42GG3KQcNyKM4Mq9u0j5h4eFKnCAVTw14n7mzU7lZtE8RGvH0HAZ7fE%2BnuNSzdCoSV6ZfWvr5DzBU133jE283TVotzpmHSqa1YoMLLF8cAGOqUBGiZOyu8e0yskFdpGHI5qQpopM56ed9WBJP0zpsB2UdDQX3uffT1LFj5vS1faeV9sroRDLzvSplGpkCLnXqQAVq3js05c9hoZThdajBotPwYaSklYNMPEdk%2BAFMJ4g4VbeSTXkbICQ90cftxQqYpqV2tPR%2BoJiw%2BHPt9I%2FVbGdeG%2F1Ru8vQa9BsQCTeyBiYDcUpyySesY6Mki0FU3OomViwQbr%2FDL&X-Amz-Signature=891a40f3ec6c08e8416abd9ae3390fa9d4954741dbd95478074231a2adabb37a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEKTBKN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2j77yzDq%2Fp876WqrkuwcyHz6uwGjPEGMW7RCyrZXAZwIgZWdRRHclwGIvYYPqeWRWVGiD6UL6Lre5UKFIyukaP64q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ9%2Fu0UiP8jR28zNaircA8e%2BpyWIhUMMuZ5%2F4OevrYvlnTlFKc%2FIXFqKQ0h0Nxi59WdJ65%2B6%2BE1QyQsRnhe95AAIJVHgdE0IaHDmKF%2Bg0fIqgZ4ff8%2Fby%2BAl%2F8b45zeQTQfZR2KZGrO8I10tz0Jgvo8A1EwClNN9BFm9Y2xjO6x7NjEOWVf%2BM68G9sv2Hemy9R12OgeSfxl9HO4Nybh98Tu%2Bu3tvjCGDGDWfPgYk2PdCIgSvU0Jfa1OfJd8dgzF6ICeRWhY3oX5c%2FJ0HJoQniN9Rh8jGmeWqg8xP6DbHVFc%2BBLG7LnPKbq%2F2vvybri94e6flc8CKJH75mBY%2Fiqe5nlyLuT09eSJFBbaNfOTiIN8xJ%2B2RcdRQMGADYH%2FmX7MqcLCzcIGiaOu1%2BXJv9q9m7ct9fK52ke%2BV4bVfB6JFu1gOWKo1KUg69PV%2BzqjalRSe1pDoWr%2FlC7j3uc9ENPQD0%2F3sE4FP1DjI4KpZkCwuRxD%2BZbWeWNIqiLFhiSaFl0qTGfe%2Bz1b2rF%2B83q17IlBZx%2BNRwEl%2Fc9ug19jSeGWfb83RL42GG3KQcNyKM4Mq9u0j5h4eFKnCAVTw14n7mzU7lZtE8RGvH0HAZ7fE%2BnuNSzdCoSV6ZfWvr5DzBU133jE283TVotzpmHSqa1YoMLLF8cAGOqUBGiZOyu8e0yskFdpGHI5qQpopM56ed9WBJP0zpsB2UdDQX3uffT1LFj5vS1faeV9sroRDLzvSplGpkCLnXqQAVq3js05c9hoZThdajBotPwYaSklYNMPEdk%2BAFMJ4g4VbeSTXkbICQ90cftxQqYpqV2tPR%2BoJiw%2BHPt9I%2FVbGdeG%2F1Ru8vQa9BsQCTeyBiYDcUpyySesY6Mki0FU3OomViwQbr%2FDL&X-Amz-Signature=3a417d8340c3625cc5fdf2e0f9de4799cb928dba9226080ec33b1b55f0c4c0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEKTBKN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2j77yzDq%2Fp876WqrkuwcyHz6uwGjPEGMW7RCyrZXAZwIgZWdRRHclwGIvYYPqeWRWVGiD6UL6Lre5UKFIyukaP64q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ9%2Fu0UiP8jR28zNaircA8e%2BpyWIhUMMuZ5%2F4OevrYvlnTlFKc%2FIXFqKQ0h0Nxi59WdJ65%2B6%2BE1QyQsRnhe95AAIJVHgdE0IaHDmKF%2Bg0fIqgZ4ff8%2Fby%2BAl%2F8b45zeQTQfZR2KZGrO8I10tz0Jgvo8A1EwClNN9BFm9Y2xjO6x7NjEOWVf%2BM68G9sv2Hemy9R12OgeSfxl9HO4Nybh98Tu%2Bu3tvjCGDGDWfPgYk2PdCIgSvU0Jfa1OfJd8dgzF6ICeRWhY3oX5c%2FJ0HJoQniN9Rh8jGmeWqg8xP6DbHVFc%2BBLG7LnPKbq%2F2vvybri94e6flc8CKJH75mBY%2Fiqe5nlyLuT09eSJFBbaNfOTiIN8xJ%2B2RcdRQMGADYH%2FmX7MqcLCzcIGiaOu1%2BXJv9q9m7ct9fK52ke%2BV4bVfB6JFu1gOWKo1KUg69PV%2BzqjalRSe1pDoWr%2FlC7j3uc9ENPQD0%2F3sE4FP1DjI4KpZkCwuRxD%2BZbWeWNIqiLFhiSaFl0qTGfe%2Bz1b2rF%2B83q17IlBZx%2BNRwEl%2Fc9ug19jSeGWfb83RL42GG3KQcNyKM4Mq9u0j5h4eFKnCAVTw14n7mzU7lZtE8RGvH0HAZ7fE%2BnuNSzdCoSV6ZfWvr5DzBU133jE283TVotzpmHSqa1YoMLLF8cAGOqUBGiZOyu8e0yskFdpGHI5qQpopM56ed9WBJP0zpsB2UdDQX3uffT1LFj5vS1faeV9sroRDLzvSplGpkCLnXqQAVq3js05c9hoZThdajBotPwYaSklYNMPEdk%2BAFMJ4g4VbeSTXkbICQ90cftxQqYpqV2tPR%2BoJiw%2BHPt9I%2FVbGdeG%2F1Ru8vQa9BsQCTeyBiYDcUpyySesY6Mki0FU3OomViwQbr%2FDL&X-Amz-Signature=c1e15934ffc58e03c9478e7f85f09c6650b825e5b67fc5c36223d21dcdcd1b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EFAB3B%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXiyTdGN68pcnOWnPPy5OcthnQzN9uQt35sDoWeyXlBQIgHo%2FpdwtpiNemOQz9fMVHrDsVXCFHUj0U35lawF0hEc0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ6NBEEqmRMHA1YlGircA0ta2k7VAhtuZTCusbIYJpSzIs8j5Sgh2YyRwzVFof%2FGGkeZiddkvjKMeS9ASsTo2RWyAvhWms7h%2F%2FKyYISKbQ2teouMrT%2FXk0mH7ofkvXO57wx6zLs9Hu4DTPkD26S4zYp3Jl7xxffeFtgAAd6ilBykh6cshgJXJLeYEWZUrA%2BDq0M%2FdtaV97mMhgTwe1uIxTrfq2aHSiO13zEiYMyS4ZOXcZFazLvufk5cz3ALODAg%2F9YW4Zqoj%2F2uskQbiYSgU6dZPupF9k3A5HcRk8ErD2b1wfGdSLqFOse5m%2BGrJqgOQSFTWlTiKdtm0kYbAiqw%2B3h2ZWicFuU9WGC5QPxrrghXd4ENywGQJLZO0e%2BmMmiaiuw2kHZxtj6uTMEX3tHHnJl9qZJ8v17n2r7Sr3lxdr06lIq6ELpb90aZWtz%2B8s3zlt3DehOe4cOqDT2Ij%2B%2BC6xDNRRioNWtlGNIdEpp7Wmf4mcwnp4S0c8Gk1aBgCAq7htW%2FLlTWozOK9qSM6xWwDio5XyO0BU0ttmYzm2hRjUZVa5QKfZHRHG9dkKrRGkGR6BoPh9XIQJjLwAYNUnRbzPF8lX7o8i9Vc1yfy5ry1bKaPWUzalC5j5fpaD0OgjBRa2%2Ft9SQoO4N6ERYeMIPF8cAGOqUB71aCEIbOb%2FxK55NXxNleXFbaxBP3H0GTlfw0x8Geg9Rtq4BOsc%2B23gTmWmylBM3mvOVbBGrimEBe2Gq6UK9%2FGDpx5QfNFFoM4BWTvRSuXrArri24r2hSTHjEtVrOYudXs5zzcCKJ2x%2BtNCEtUMc44gxBBxjJ1JeSrZ3S6ltPz7Egyvi6NiQOqBXuLRYeLwC%2BZmqP%2B80QlB22HPxExlSHIi2m3z4F&X-Amz-Signature=2e27869961150a3dd2ff0bed99ee54f8df569673e4329b3e63a08ec32c58c8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPGQIV2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcnUqjHk8AU%2FOWNfs75bTeKSEaL00OQ6ctvYpReqEmCQIgXlEVfb3b1StfHSwYHPCbfyawmLpcTq4qOt5WZVz2d6Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO%2F5jZBb%2FWmUK90R4yrcA19mgxzJBP0BEcDhKpAhJVL9sOh8L81DjlNxp2A%2BjzEdQ5QzUEBfgTSsMwrm8PvVzwWkSbkq2YSzIh7gDS4V7oc7xH7%2BlekTbQ3UpJZo2juwnbzkBNOc61SHwMHJFwlGaE08U87RdlbTDzrg9DTKcOg%2FDQ7Nc%2FUo600hST6j79WDyq07mc9pOPmBgdLC1sJFiJLEbTWaKrp3Wvgi%2FsCarphTnNDhBXgMf32Uc0b5USF5FH286BOBX%2BQaKUko2erbBtNAdVj%2BxfBi4dKEFPqAUOTTGfwLnYKnOxLxl0uVLXHX6coRHT%2FZc%2BhSM5fGdVP7Gkl%2FbqyWulPqgjhRwBqLVpZoVtm1KIFz9XsDxHl0NLg19saH2CA18eApORY65Qxu7UWlrvLWPjbqKHnnn9C0NIZTKHweYlSZK%2Bk5AHsI8mo3fsbzp7gnU3u%2BqlBK26hvKdDT7dc2b2%2FtH45T1yOV777w3gD%2B3St%2BinauShW%2FaNGDSJPtpXrisa9ZlPBCaSc4m%2BbrsKk5heoZasPfoXCbnBreb1Q%2B7R4VqrlhQzJqUHKZeIwfQHVKTf5JhbMo3fJ%2B0aVxb0Jn7xoupNQWvFarTvzvph7sQz8k5UZaJFJ6FGBvnTMXo8PiK5JAYIEtMKjF8cAGOqUBlwKldTIEJrApANTqpT%2Fz5n%2Fk1l9jKGoW6TzF%2BHuHqK3UxxBpQL%2B%2BWb7deLCzmtVrY84ZOOH6gHJw%2FEUlHfW0yvnmAZQRk%2FP9%2FudgnkMBk5F24LAkamFIPwUognHSxfw4gP4sC1QknckHXw%2Ft5viIfHkf3ZIX5sm8bWQL2U0gnolhtbKH0MCkIrRj8FIJ1Ub2l3dZTcOXzUoZOSDnRAfOIYrEpmsg&X-Amz-Signature=75dc25bcbbb03db1f79c741e21df914f606d24b201e2346166d52c3fd2029817&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEKTBKN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2j77yzDq%2Fp876WqrkuwcyHz6uwGjPEGMW7RCyrZXAZwIgZWdRRHclwGIvYYPqeWRWVGiD6UL6Lre5UKFIyukaP64q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ9%2Fu0UiP8jR28zNaircA8e%2BpyWIhUMMuZ5%2F4OevrYvlnTlFKc%2FIXFqKQ0h0Nxi59WdJ65%2B6%2BE1QyQsRnhe95AAIJVHgdE0IaHDmKF%2Bg0fIqgZ4ff8%2Fby%2BAl%2F8b45zeQTQfZR2KZGrO8I10tz0Jgvo8A1EwClNN9BFm9Y2xjO6x7NjEOWVf%2BM68G9sv2Hemy9R12OgeSfxl9HO4Nybh98Tu%2Bu3tvjCGDGDWfPgYk2PdCIgSvU0Jfa1OfJd8dgzF6ICeRWhY3oX5c%2FJ0HJoQniN9Rh8jGmeWqg8xP6DbHVFc%2BBLG7LnPKbq%2F2vvybri94e6flc8CKJH75mBY%2Fiqe5nlyLuT09eSJFBbaNfOTiIN8xJ%2B2RcdRQMGADYH%2FmX7MqcLCzcIGiaOu1%2BXJv9q9m7ct9fK52ke%2BV4bVfB6JFu1gOWKo1KUg69PV%2BzqjalRSe1pDoWr%2FlC7j3uc9ENPQD0%2F3sE4FP1DjI4KpZkCwuRxD%2BZbWeWNIqiLFhiSaFl0qTGfe%2Bz1b2rF%2B83q17IlBZx%2BNRwEl%2Fc9ug19jSeGWfb83RL42GG3KQcNyKM4Mq9u0j5h4eFKnCAVTw14n7mzU7lZtE8RGvH0HAZ7fE%2BnuNSzdCoSV6ZfWvr5DzBU133jE283TVotzpmHSqa1YoMLLF8cAGOqUBGiZOyu8e0yskFdpGHI5qQpopM56ed9WBJP0zpsB2UdDQX3uffT1LFj5vS1faeV9sroRDLzvSplGpkCLnXqQAVq3js05c9hoZThdajBotPwYaSklYNMPEdk%2BAFMJ4g4VbeSTXkbICQ90cftxQqYpqV2tPR%2BoJiw%2BHPt9I%2FVbGdeG%2F1Ru8vQa9BsQCTeyBiYDcUpyySesY6Mki0FU3OomViwQbr%2FDL&X-Amz-Signature=c5887257fd48ebe3f42851ca26c1e15dfa587a2aa2eaaa0f9932e485418e7553&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
