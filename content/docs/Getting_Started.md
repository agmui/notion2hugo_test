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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VA2RZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIAGfE7oo%2BAd%2FnjNJ%2B1edpo6cDlBxAeCHCDcnYYmTH1KfAiB2nBeKBrWtqiMg4%2Fr6fcCQUhNT%2B%2Bpc3ALjkAeD1%2B%2Bghyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMHVjM0fb0Dj6%2B7DZmKtwDyi6zA%2F2QWIfAKn4CImB43ZNodByMa2ZTeok45z6A4S6V7WCS%2FC9g14mmg6i4TrRP87jwNq%2FylYYdMZWCRIXGWFKqWSrOfuVxNtAVHXrImN77%2FNoFbjko3Da8RyGjf9etUSLfLIqPv0M9buUtNUOl3PdNThAdvND9VcCkiss4xvEu79WpTKacF80vjbLKvGQERC0u4bZi66gbffSiQtSQwvH1wZ%2FNn278HX0g%2BHL1jzy0F9%2BNQjtn3uNjxcu05K73N%2Fcan0MN74jSZT1QD%2B3C0yyE%2B%2B6eMpFF%2FeGhYnXoedZcI3zAja%2Fb0Iqbg2IqBMjHVv2tdCgHvnLwQ7JeImcLErg7rS7fJ1QUTGTrhhH5vuyBrKiBA3RL2SpfJntLyucSfhGa7J6NcyYQ9w5FBKj7RmQaUy8fpPiag7Kzj7ZC4Gu%2BGMF%2FTFsV3eSKWMpag9QNrtQJiu69qaazCV0fOvjp92PlQ%2F%2FIUAtMAAU1F1tklHiXf%2Fl3c%2FzAp2OjctKQ%2BfVaxJIBUTUYFE6br7nXznO6%2FcnCIIStu1R6Snq2JWLmYgTz9yzMqfBx%2F5Qgvjc9ld6p0h2BvqhXvzTcFYUAukcTPcBElaCBWygPdAvug%2FitW5izRxWtSWQEC0lDM40w67DSwwY6pgFtamkkHqoF2Y%2FVve%2FYHF%2FAEND6zBHvAlY2lot2SBQ7jvda9rTrV2rihOanQZVTR6ycaMXQEpNwVzDJXvcbd6MPWYOEyHByYuB4UX9IXkFAYYoZFtQtQPcOXNoID9QLOVWoo56Ff%2BXehpbEYHEgUCCkbMbfIZja%2Bh2w9StXSWjWzfzoTirbkQWH0858rmvtFh9gOoI3CCn9cSZ1j9KGwmA3BkAPlXjr&X-Amz-Signature=6f00ed06fedaa3cfaaa06914d1d91b95950255f513ec94c1b572366c169f1b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VA2RZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIAGfE7oo%2BAd%2FnjNJ%2B1edpo6cDlBxAeCHCDcnYYmTH1KfAiB2nBeKBrWtqiMg4%2Fr6fcCQUhNT%2B%2Bpc3ALjkAeD1%2B%2Bghyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMHVjM0fb0Dj6%2B7DZmKtwDyi6zA%2F2QWIfAKn4CImB43ZNodByMa2ZTeok45z6A4S6V7WCS%2FC9g14mmg6i4TrRP87jwNq%2FylYYdMZWCRIXGWFKqWSrOfuVxNtAVHXrImN77%2FNoFbjko3Da8RyGjf9etUSLfLIqPv0M9buUtNUOl3PdNThAdvND9VcCkiss4xvEu79WpTKacF80vjbLKvGQERC0u4bZi66gbffSiQtSQwvH1wZ%2FNn278HX0g%2BHL1jzy0F9%2BNQjtn3uNjxcu05K73N%2Fcan0MN74jSZT1QD%2B3C0yyE%2B%2B6eMpFF%2FeGhYnXoedZcI3zAja%2Fb0Iqbg2IqBMjHVv2tdCgHvnLwQ7JeImcLErg7rS7fJ1QUTGTrhhH5vuyBrKiBA3RL2SpfJntLyucSfhGa7J6NcyYQ9w5FBKj7RmQaUy8fpPiag7Kzj7ZC4Gu%2BGMF%2FTFsV3eSKWMpag9QNrtQJiu69qaazCV0fOvjp92PlQ%2F%2FIUAtMAAU1F1tklHiXf%2Fl3c%2FzAp2OjctKQ%2BfVaxJIBUTUYFE6br7nXznO6%2FcnCIIStu1R6Snq2JWLmYgTz9yzMqfBx%2F5Qgvjc9ld6p0h2BvqhXvzTcFYUAukcTPcBElaCBWygPdAvug%2FitW5izRxWtSWQEC0lDM40w67DSwwY6pgFtamkkHqoF2Y%2FVve%2FYHF%2FAEND6zBHvAlY2lot2SBQ7jvda9rTrV2rihOanQZVTR6ycaMXQEpNwVzDJXvcbd6MPWYOEyHByYuB4UX9IXkFAYYoZFtQtQPcOXNoID9QLOVWoo56Ff%2BXehpbEYHEgUCCkbMbfIZja%2Bh2w9StXSWjWzfzoTirbkQWH0858rmvtFh9gOoI3CCn9cSZ1j9KGwmA3BkAPlXjr&X-Amz-Signature=2d13aede9ef57d8d8347dcf87017c6905ce569a8ac3f7aafb51907a454dc1db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VA2RZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIAGfE7oo%2BAd%2FnjNJ%2B1edpo6cDlBxAeCHCDcnYYmTH1KfAiB2nBeKBrWtqiMg4%2Fr6fcCQUhNT%2B%2Bpc3ALjkAeD1%2B%2Bghyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMHVjM0fb0Dj6%2B7DZmKtwDyi6zA%2F2QWIfAKn4CImB43ZNodByMa2ZTeok45z6A4S6V7WCS%2FC9g14mmg6i4TrRP87jwNq%2FylYYdMZWCRIXGWFKqWSrOfuVxNtAVHXrImN77%2FNoFbjko3Da8RyGjf9etUSLfLIqPv0M9buUtNUOl3PdNThAdvND9VcCkiss4xvEu79WpTKacF80vjbLKvGQERC0u4bZi66gbffSiQtSQwvH1wZ%2FNn278HX0g%2BHL1jzy0F9%2BNQjtn3uNjxcu05K73N%2Fcan0MN74jSZT1QD%2B3C0yyE%2B%2B6eMpFF%2FeGhYnXoedZcI3zAja%2Fb0Iqbg2IqBMjHVv2tdCgHvnLwQ7JeImcLErg7rS7fJ1QUTGTrhhH5vuyBrKiBA3RL2SpfJntLyucSfhGa7J6NcyYQ9w5FBKj7RmQaUy8fpPiag7Kzj7ZC4Gu%2BGMF%2FTFsV3eSKWMpag9QNrtQJiu69qaazCV0fOvjp92PlQ%2F%2FIUAtMAAU1F1tklHiXf%2Fl3c%2FzAp2OjctKQ%2BfVaxJIBUTUYFE6br7nXznO6%2FcnCIIStu1R6Snq2JWLmYgTz9yzMqfBx%2F5Qgvjc9ld6p0h2BvqhXvzTcFYUAukcTPcBElaCBWygPdAvug%2FitW5izRxWtSWQEC0lDM40w67DSwwY6pgFtamkkHqoF2Y%2FVve%2FYHF%2FAEND6zBHvAlY2lot2SBQ7jvda9rTrV2rihOanQZVTR6ycaMXQEpNwVzDJXvcbd6MPWYOEyHByYuB4UX9IXkFAYYoZFtQtQPcOXNoID9QLOVWoo56Ff%2BXehpbEYHEgUCCkbMbfIZja%2Bh2w9StXSWjWzfzoTirbkQWH0858rmvtFh9gOoI3CCn9cSZ1j9KGwmA3BkAPlXjr&X-Amz-Signature=1f7eab5d5f46f063dbe98032af6d8999a38072452be061a07eb474178d74f4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRMOJPS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBmdr3ROH5h5pDqdUoydd8dEQJk36%2F4Py%2BD9qd90wAA%2BAiEAnfcXOu47HwoCjUWwcMP8t7M2RCtRJmuag0%2F%2BnDYcwCEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLkaL9D4QkNFEHpT7yrcAyzxCgrmL3JWhSP1b%2B%2BAGkqPPQAJl69Mabc%2BkkLQJPlz30jaDDke4wgd9vfl8uQ3vMDotXgoYjfhpKfZx%2FZKmYmzCVGlPvCvwK%2FVobB55Pfs9Jh%2BUoywnqqtT3ROC%2BN%2B8QHgqVruXkD9v8oi8u808DZ%2Ff8D5dEPnhblcU6U9Zs3mWwyKhqNFmC0T9VLHhleK4ibVrIWHracg98uqc2JMbt0THHpB9SN0Sl%2B4GHm0pHl%2Fjo%2Fr18zbFUcDlNBRWFivMqWflu2LZFJPzFAV%2FOgP%2B23j5j5VB%2BSG8yT18AFu6K%2Fmsdnbg0NjDAYBaqnelWiLbeFQYk7x2IATnOadK5scaJM9bhdxhOgM1d9slMOaaPC3DMZJ4PNiWHVjOkzuEyBaTpwVu51%2BdtYlnCShWV3jotZVP3S8ehiIgzLx7XOUr6IBYiNEyBG525ucc1%2Bpma%2BrZNplCybh7qRgtB7Dhdp9n%2FI3BCV78iCPWrD%2BqnZnAr0ezX3j%2FyOPLw8O0jO6vCw8RPUvpPJtQjZXKfEHxJM6O3eNy%2FT4praBqVWL6n%2FSfOqfmQpjNnWLNZ2nyO1c9uAahGbrwcxpIJaOZujhxJ2ZW9MHGto9hOYHx9EOMkaeXQ%2FVeUcaETc3y6rtQ4BxMOaw0sMGOqUBkmyl8uLuafSN5vTnS8KYIwmX5GI%2F2FwWOkCTW%2B1KbFOPYo2XBD4wY4SVpfVVreDUWCGlbbAr7BWD2IGrbAmgYPH6G4z1RhqKbAJBhYhp8Ef6SFriKpdsNLx5ZW7ipge%2FqOX0f2CBd%2Fdc1tOYZFa9WvRY7fs4UmExFnHR8AG3fERsYwT4jFDDSW4eOQvW0AIl5nr8XshyuW%2BkCiKDUIFKzE8meCUW&X-Amz-Signature=5c07f649062d249378edc2cb7bb54d5c220deab14444cff7eccbd6eb4091ff57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP4JF2NR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDtDEyM4iTBdxumSzqL0qyKsZ6WYtL1fDOwLOVJnE1k7QIgAkbbPDoNlTt3iZ7LIAEyAqdDRQ%2BFLKjQv5a7XUJL5S0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEW28g2zm3sxl1MGDCrcA2M3IW84oeAsVU7NGjRk4ajivim1dCd8v7q1L3IZFrpvUEzp%2FERZAJsVfTgWePNbg3N%2B2vNvhHlbWS3gV0ceL1YbgMai4%2FrWrY7qL20s9ySNqHkDGANz1aK7a1qTJiW8IxuFC8xxFd%2BE8Vn6E1qIRFHEJuUIx5%2FD3%2Bmpp7JYz9TM%2FAT4pPf4HB67J8znDU%2FcX6VZtkcbFVKS22L89NQObp%2FxnVbS7ua%2BXnK46TKjiEG540WuUsfoXuZOL3AyH1iW1TdCZyXCI3OwM2rT9SbiNb%2BwrnvI2HmgK7KkBWligiMMkCxHuCg4jriJZ1hjRlstqQvWJX7VCkD7kN6ENoE7ATsQTJy41f0GHt%2FEBh0rvIYB6Pav9mHd3R1SJ2xI14FfnQ%2BdqA3cIKwLeZVF8%2FdmryxYgOe%2Bx4EAQN4aqZDlV5oG5k2rz7pcj9jpR9KiQvPXfvgbe09dWTw13S6hnzWB5BZvJ%2BApyu89KwWfXTWOJIGcSdFBf51ixNWTKac9jtyEVPF365nCRm90%2Bn%2Bd%2BDGiIhQ5227FOjZz2z5eLaETn2Gddf%2BN%2BPj7adX4id%2FQx76WNKiIeSk4mZHt7Bp%2FlfwGtyvHzRmZIakk1PI641l1cZjW1oN1Rh3Mh%2Bmc1z39MIax0sMGOqUBPBSfVfwYiX3BnsRTliu59V3id%2BnzAXuBPr3u%2BhYcqHENifonhSDSyZEnbGSapWDNqDL5zWfXiUnasVL6ilm3f%2FZsr7qTHTClQbS1fRdCtiWMjkNdhYLA6DcMFNdziXtuhYgTY0fQTMUJuGEoOxswbDn%2B6BgX3PDu78%2Bm5P7TQAZdAi5iqOStLIsmloKifc0XrOCDgSj9vbj3QSxcEik0R0epSgyE&X-Amz-Signature=6b5b61c6c3d39d0a266754a81d521d78bfd8499af7e96d35091f97a5f0188f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VA2RZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIAGfE7oo%2BAd%2FnjNJ%2B1edpo6cDlBxAeCHCDcnYYmTH1KfAiB2nBeKBrWtqiMg4%2Fr6fcCQUhNT%2B%2Bpc3ALjkAeD1%2B%2Bghyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMHVjM0fb0Dj6%2B7DZmKtwDyi6zA%2F2QWIfAKn4CImB43ZNodByMa2ZTeok45z6A4S6V7WCS%2FC9g14mmg6i4TrRP87jwNq%2FylYYdMZWCRIXGWFKqWSrOfuVxNtAVHXrImN77%2FNoFbjko3Da8RyGjf9etUSLfLIqPv0M9buUtNUOl3PdNThAdvND9VcCkiss4xvEu79WpTKacF80vjbLKvGQERC0u4bZi66gbffSiQtSQwvH1wZ%2FNn278HX0g%2BHL1jzy0F9%2BNQjtn3uNjxcu05K73N%2Fcan0MN74jSZT1QD%2B3C0yyE%2B%2B6eMpFF%2FeGhYnXoedZcI3zAja%2Fb0Iqbg2IqBMjHVv2tdCgHvnLwQ7JeImcLErg7rS7fJ1QUTGTrhhH5vuyBrKiBA3RL2SpfJntLyucSfhGa7J6NcyYQ9w5FBKj7RmQaUy8fpPiag7Kzj7ZC4Gu%2BGMF%2FTFsV3eSKWMpag9QNrtQJiu69qaazCV0fOvjp92PlQ%2F%2FIUAtMAAU1F1tklHiXf%2Fl3c%2FzAp2OjctKQ%2BfVaxJIBUTUYFE6br7nXznO6%2FcnCIIStu1R6Snq2JWLmYgTz9yzMqfBx%2F5Qgvjc9ld6p0h2BvqhXvzTcFYUAukcTPcBElaCBWygPdAvug%2FitW5izRxWtSWQEC0lDM40w67DSwwY6pgFtamkkHqoF2Y%2FVve%2FYHF%2FAEND6zBHvAlY2lot2SBQ7jvda9rTrV2rihOanQZVTR6ycaMXQEpNwVzDJXvcbd6MPWYOEyHByYuB4UX9IXkFAYYoZFtQtQPcOXNoID9QLOVWoo56Ff%2BXehpbEYHEgUCCkbMbfIZja%2Bh2w9StXSWjWzfzoTirbkQWH0858rmvtFh9gOoI3CCn9cSZ1j9KGwmA3BkAPlXjr&X-Amz-Signature=2ce94aef9b99fd4b251f82517b3d7fdbf0f15582e73b3fd6a6db7bf343509871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
