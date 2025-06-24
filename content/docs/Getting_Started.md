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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMXTYFN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBVuqsolyJI%2BJUTH4bS0c4hdWwOcVe%2BJoiyQHqrqA%2Ff9AiAoo7VY2yklGwTB3h8gHvmWL%2BVyBp0xDAYcWhQwoTnyMCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMDO2xzE7DP%2FdNQHeIKtwDB9sC3T1IEeKGWAqI%2Fm%2BOBi%2BQjubbFR3EyEiqCsMR5190MwrcOW4JXBqwFr9Et9OZwTn45MJvPj0Do0DMnqVe7ha9Gtm2NO%2BPl8ijA5ONyWbwKaTdWAptHSh67kwJ7YhRLRyGQcOWALxY91jfSjLD%2B4LRcEBxCNEenVqRb5%2BD3grp%2Blv0qXvsAO6ud68%2FDMnneCtYFhfYunNUMeB49sr5Fgnjy4%2FpYN%2BsuVIPJr01IEuZ5qq4feOHRLDUHX%2FxH%2BGs9uHX1Id1WFH8MKMpOEyDABb4AavGWeU%2FAA73at2C8a2jOwXMoRGy6T0KUwVs2k4ht0ykN38oul1CNt1ZoC6jjjxCDQ45qDJgzeWJx2mx2QGqoTyNmHKp8H%2F6yRhqbGCmds0NCQDBl%2F2mAMcbG3en5g8LxJaDzotj4FbhYtrYOLQG48MjNwCUSfITZeFz5BSFfDZva2S66JztsMaOY%2Fwn4meRYkO01OHW8D8GJNbuurTlErONw%2FrjYqi3QdDkR7W%2BzWTWdLgPxi2uO%2F89oa6idQ124GlFKR2q6wZiXoc%2FGhMQgCaNtSWnto2IxgRnckXHLfwgYUIBtZZZ6mDnF0%2FxnFvmhYFCxPtm8%2FfUuBjJf5fA5INi0VQn5yrba6QwovnpwgY6pgGXKhQF2O%2BHznUE%2F7vFE60QX9YRovAyHQD8v2TEBBfbktiJMt4o%2Fj2lkheVNvuk%2FwPK05TrtolwW%2BGL8FXLzkcWW1CWV6pOIUmNtbu8Cde2LQ6UILftnROgpIYbl5QO1Key9VXbR8nX2q61e2TfL6Duiipg0HrnmBMEFB3hIRzx3%2BuLyXMGDhpzEA3jztrMUBhP3SSTLnFjHOJ4BWxfUE9VoYARx1rG&X-Amz-Signature=cbda8330a2b3a8da4cac73db6176d85c9548d9728308677efa33afb186af1876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMXTYFN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBVuqsolyJI%2BJUTH4bS0c4hdWwOcVe%2BJoiyQHqrqA%2Ff9AiAoo7VY2yklGwTB3h8gHvmWL%2BVyBp0xDAYcWhQwoTnyMCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMDO2xzE7DP%2FdNQHeIKtwDB9sC3T1IEeKGWAqI%2Fm%2BOBi%2BQjubbFR3EyEiqCsMR5190MwrcOW4JXBqwFr9Et9OZwTn45MJvPj0Do0DMnqVe7ha9Gtm2NO%2BPl8ijA5ONyWbwKaTdWAptHSh67kwJ7YhRLRyGQcOWALxY91jfSjLD%2B4LRcEBxCNEenVqRb5%2BD3grp%2Blv0qXvsAO6ud68%2FDMnneCtYFhfYunNUMeB49sr5Fgnjy4%2FpYN%2BsuVIPJr01IEuZ5qq4feOHRLDUHX%2FxH%2BGs9uHX1Id1WFH8MKMpOEyDABb4AavGWeU%2FAA73at2C8a2jOwXMoRGy6T0KUwVs2k4ht0ykN38oul1CNt1ZoC6jjjxCDQ45qDJgzeWJx2mx2QGqoTyNmHKp8H%2F6yRhqbGCmds0NCQDBl%2F2mAMcbG3en5g8LxJaDzotj4FbhYtrYOLQG48MjNwCUSfITZeFz5BSFfDZva2S66JztsMaOY%2Fwn4meRYkO01OHW8D8GJNbuurTlErONw%2FrjYqi3QdDkR7W%2BzWTWdLgPxi2uO%2F89oa6idQ124GlFKR2q6wZiXoc%2FGhMQgCaNtSWnto2IxgRnckXHLfwgYUIBtZZZ6mDnF0%2FxnFvmhYFCxPtm8%2FfUuBjJf5fA5INi0VQn5yrba6QwovnpwgY6pgGXKhQF2O%2BHznUE%2F7vFE60QX9YRovAyHQD8v2TEBBfbktiJMt4o%2Fj2lkheVNvuk%2FwPK05TrtolwW%2BGL8FXLzkcWW1CWV6pOIUmNtbu8Cde2LQ6UILftnROgpIYbl5QO1Key9VXbR8nX2q61e2TfL6Duiipg0HrnmBMEFB3hIRzx3%2BuLyXMGDhpzEA3jztrMUBhP3SSTLnFjHOJ4BWxfUE9VoYARx1rG&X-Amz-Signature=d8273a60aee6c3c28cfb420a5ebb56077739ba278a97a98b734892a99157e9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMXTYFN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBVuqsolyJI%2BJUTH4bS0c4hdWwOcVe%2BJoiyQHqrqA%2Ff9AiAoo7VY2yklGwTB3h8gHvmWL%2BVyBp0xDAYcWhQwoTnyMCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMDO2xzE7DP%2FdNQHeIKtwDB9sC3T1IEeKGWAqI%2Fm%2BOBi%2BQjubbFR3EyEiqCsMR5190MwrcOW4JXBqwFr9Et9OZwTn45MJvPj0Do0DMnqVe7ha9Gtm2NO%2BPl8ijA5ONyWbwKaTdWAptHSh67kwJ7YhRLRyGQcOWALxY91jfSjLD%2B4LRcEBxCNEenVqRb5%2BD3grp%2Blv0qXvsAO6ud68%2FDMnneCtYFhfYunNUMeB49sr5Fgnjy4%2FpYN%2BsuVIPJr01IEuZ5qq4feOHRLDUHX%2FxH%2BGs9uHX1Id1WFH8MKMpOEyDABb4AavGWeU%2FAA73at2C8a2jOwXMoRGy6T0KUwVs2k4ht0ykN38oul1CNt1ZoC6jjjxCDQ45qDJgzeWJx2mx2QGqoTyNmHKp8H%2F6yRhqbGCmds0NCQDBl%2F2mAMcbG3en5g8LxJaDzotj4FbhYtrYOLQG48MjNwCUSfITZeFz5BSFfDZva2S66JztsMaOY%2Fwn4meRYkO01OHW8D8GJNbuurTlErONw%2FrjYqi3QdDkR7W%2BzWTWdLgPxi2uO%2F89oa6idQ124GlFKR2q6wZiXoc%2FGhMQgCaNtSWnto2IxgRnckXHLfwgYUIBtZZZ6mDnF0%2FxnFvmhYFCxPtm8%2FfUuBjJf5fA5INi0VQn5yrba6QwovnpwgY6pgGXKhQF2O%2BHznUE%2F7vFE60QX9YRovAyHQD8v2TEBBfbktiJMt4o%2Fj2lkheVNvuk%2FwPK05TrtolwW%2BGL8FXLzkcWW1CWV6pOIUmNtbu8Cde2LQ6UILftnROgpIYbl5QO1Key9VXbR8nX2q61e2TfL6Duiipg0HrnmBMEFB3hIRzx3%2BuLyXMGDhpzEA3jztrMUBhP3SSTLnFjHOJ4BWxfUE9VoYARx1rG&X-Amz-Signature=b72c1f9408b62afb6dcd044e3b9c0aa5982b8ffe484fc1ff9329702bb7bf61e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSIH7H65%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCpQfricP9jUb8WwVXEZhs7aId8XsRhno4EHyySFc049wIhAJ%2Fg7kUL%2FatALD2tWK6DsdB9mX%2BYvZ9fWthvGkwoTBUMKv8DCCwQABoMNjM3NDIzMTgzODA1Igz156KrhziEIo5eKjEq3APzORfwtuOn6I7JVr5UTHBz0Dn%2BaA50zU%2BrCGcGqbZol1mmIqiTvrmvYJwOV0u4GAj1NXh2cMpBy%2FCzMBfwEfDhbucaNIY1pj2A3lllhkJ92PPnkmpBKLhZjYMhV0wWUpO7h4vr3NFN00IMtgU1%2BzTOJAakomaThLbPbpSAJsoRKk5JGaTC5L8Fy1%2B6P6RhWA08wn3QYJnD8X0TpX7%2By5aXRXl%2Fd%2FW1zB%2BBcFn%2Fn%2BM0UKvpjqVBf3UR5w5megO2bMbz8%2FdQGK5ju%2FcFD%2Biup75Q6TTdqsuAeF%2B3H%2F%2F59lXjlYtVc7xSz7TYI72CRLqH83NpVwGg7SmmXNazHkewf8CwXtMvoDjYTVbPU4WFE2OCn3IdBehVR2xNBvE%2BV2sY07VZUgN31nvnG5BTdCWHsg5%2BFpTBWziHK6ixrPk5bVxEnklHCMqMZeszF80uDmSyCkJO%2B%2F%2FpxSLE87H1LRkk78rmPA4B6s75vSQdhJJfu1MgOGKfx2RHbVL71FHJ3SNLEkERJbXF5WaXu1Cr7OOwfUSezew95Xk8BLkdxw%2FZaGYUhJULXG74t3wqgI7RIQ75l3HyV1dqN%2FaXOUGD7cLijjlR4vPPhGM04bEuv6coPkvktvmrF28GSp5AcLN9TjDX%2BOnCBjqkAVGO3mgGjNkAEMqQSxqQsgkX6sE7I9ZvVJRX4MJEC298X0fEo%2BHB519X4hJnNydH%2FMe%2FYmRBrQCtvKrKbzIZI02TRObwH6wgQZwpJNBEYPHkbh1ZSb63r3HZHq4Kr%2B8qsh8wOcyLyuTbpOMlqSds557IsaOhQnUJjRRi3xd2ygZ85clLH7UOgnKx4c7NksIplZPeWPnChcMcSA28Qt0xeY5A%2FmNa&X-Amz-Signature=1f051c73ae021f25cb6eb79ead7cf31d0e4c6fc01920a8554121b3be7d4c3891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCNCJNV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDxXtkOGF6aw6LkILF9ipI8M%2B5vFHOggugJX9pW8pNaegIhAOLIGhjQyXkjcYrQmvZpgaF1uSgms%2BEpnlwlEeiqLJN%2FKv8DCCsQABoMNjM3NDIzMTgzODA1IgwnJNe7kBjhJ8%2FthXcq3APVApca9ZXJelsvy%2FgbEOH2ayfosLAJCAVhLR5Ishbg%2Bqy%2F64ldAkpeB9nxg8x41JiP%2BslGqBjB3m3Bjpp52iRHVGX8m2ERX8HEz0VwvTXKVblK9Yqt3lM%2FGjb6Ob8SEiqqOns5vJZA2DQ2RfWumOOG8S1tHdUq2CXp%2FPV117sMjvjkPZgG3GYKdjXX7uw0cJDuh46LIoEeTCs3DgonFfhwKqoB8QZRbiHBG6LQBzN2htU54YPvnnDGcSWWS%2B4X4l1YL2HSVkF6%2B8jy7Wo5Z5n4RT3GySDH0NNbgeCTAfTV4L%2Fm%2BJ%2FR9Dj6zeY9Lx1XZqNP1TjKGkaKkbcmj3S5hLEK0njy1V%2Ffud53rQE0rBhoLXsX9a6QsB%2B11aDA43se1otk1AoY3WRY7PlMuHGWLB1jENugfhJVvnbMF17BpHE8zTylXtxtCQks%2F1ir9KCPIG3YPFinzsYqKjlnRJAfcp3ntwj%2FAtvmnWO9h%2FujbuyYKFkq7bzhyGsh7tvcHwWKOo0pcatviGCAQINYbBQX6fhywWxosPy%2FAjoqsU6C4wBjCEnzGJd2rvi1IXjXy2dNX%2ByAcGOGSp4%2B%2FFaqR6P6rDyyNV1tqLouKGlwsiVcZEBoBnssfmqOu89CXgz2AzCm%2BenCBjqkAcnYcpdXMop1nV2QG5guRAqlJ3LHM7GQZR%2B092YL6xvwX2vAXnHIz7QdTPvO8lrfRMOWBMnvRjRQN50jZe580ar9xX5BGYHSOuICI43sOWNuQO97PX1byOzHzVDaI7JZe3XeBGU%2Fom%2FXe3%2BNXqu5RWS3nFcBWufPzmQmv6Wbgx7hbDbZeE0wYxxVZY6oXJqeNKN62pM2PP1C47ewGKYES9z1b0d2&X-Amz-Signature=b660d0d7a24d29ff4a5cf8a33b6b8f0b64b63f4a9ee877cacd7f7f4771d630dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMXTYFN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBVuqsolyJI%2BJUTH4bS0c4hdWwOcVe%2BJoiyQHqrqA%2Ff9AiAoo7VY2yklGwTB3h8gHvmWL%2BVyBp0xDAYcWhQwoTnyMCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMDO2xzE7DP%2FdNQHeIKtwDB9sC3T1IEeKGWAqI%2Fm%2BOBi%2BQjubbFR3EyEiqCsMR5190MwrcOW4JXBqwFr9Et9OZwTn45MJvPj0Do0DMnqVe7ha9Gtm2NO%2BPl8ijA5ONyWbwKaTdWAptHSh67kwJ7YhRLRyGQcOWALxY91jfSjLD%2B4LRcEBxCNEenVqRb5%2BD3grp%2Blv0qXvsAO6ud68%2FDMnneCtYFhfYunNUMeB49sr5Fgnjy4%2FpYN%2BsuVIPJr01IEuZ5qq4feOHRLDUHX%2FxH%2BGs9uHX1Id1WFH8MKMpOEyDABb4AavGWeU%2FAA73at2C8a2jOwXMoRGy6T0KUwVs2k4ht0ykN38oul1CNt1ZoC6jjjxCDQ45qDJgzeWJx2mx2QGqoTyNmHKp8H%2F6yRhqbGCmds0NCQDBl%2F2mAMcbG3en5g8LxJaDzotj4FbhYtrYOLQG48MjNwCUSfITZeFz5BSFfDZva2S66JztsMaOY%2Fwn4meRYkO01OHW8D8GJNbuurTlErONw%2FrjYqi3QdDkR7W%2BzWTWdLgPxi2uO%2F89oa6idQ124GlFKR2q6wZiXoc%2FGhMQgCaNtSWnto2IxgRnckXHLfwgYUIBtZZZ6mDnF0%2FxnFvmhYFCxPtm8%2FfUuBjJf5fA5INi0VQn5yrba6QwovnpwgY6pgGXKhQF2O%2BHznUE%2F7vFE60QX9YRovAyHQD8v2TEBBfbktiJMt4o%2Fj2lkheVNvuk%2FwPK05TrtolwW%2BGL8FXLzkcWW1CWV6pOIUmNtbu8Cde2LQ6UILftnROgpIYbl5QO1Key9VXbR8nX2q61e2TfL6Duiipg0HrnmBMEFB3hIRzx3%2BuLyXMGDhpzEA3jztrMUBhP3SSTLnFjHOJ4BWxfUE9VoYARx1rG&X-Amz-Signature=943e5b6fd054304026214816e8ec8cb56ec04362995de9bb28b32c76e82109fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
