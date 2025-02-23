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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKASCEA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQc3Nx5e2Yz7GG0DFD0m744qM6M6%2BQWf7UpTUQE8pmCQIgD1H7%2BjyuY%2FvGBzC7mWdrznqiPBlDZspbBexOyITqw8YqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpCfJcM6HNfLdWj9yrcAwR%2B46QsEIKhmdFttJvbfkOTb8vPkvFoCDJJtiK5mXvvemx9CoMzv5gnWlWcTzf%2FegQO2XMOQYe44BpZKqOAmca%2FRBH3KmBoBl7ht7u0XGu4ZeblNeWdJyoYXUMYaQYYLFHRRbmXm5KH8tpkrixwX4cQY%2BjL6%2BuRZkxnMWfqkuJf1QyCCRxmiBFuhEk7ci%2FTGXHG43F72mn5gYcredaSUA2z%2FT3a87bWQVWmWUo8KC3Bzyjl%2F6HMa2zMdZB6T1HBFXvQgrlMGBkWDQ0DMpMLYwFYZt4t7muLxpnOuEYD%2BfwrGH0pylWVXYLiCkeKdRuEXGCNmwCrLhkxHPgFh9j3mqALuXziHQ6maew8YbF18yQZKSei4ttrCjErKTRGhD2RUud78AOD3M94%2BPHbORVKIcU%2F84LvMssykVMULNbTeDhcHdHZaR3%2BHtWM0xKhDrqFZxTEeqFc%2BpkIHELVoFHt7Muo1wlBYMEOVayLxhUh%2B%2Fx6woCEdRjLWOk4%2FYoNgtpCr30v212dPSd1mWJkokkeLfwtyJFEq1pGfJhhcY8VEkubO4YLNP3gYd9oiFPcwxP%2FryeqPIcKTaso%2FYPHuyiH%2FOh5uCqliFvL0cKBN0BdPHCeoUGnwzi8v6CYG2TyMKDC6r0GOqUB1h%2BFCT106JX6%2BMaGNPSzH5NOdP4X5l0gjkGgSyIqb%2BjtB2XI4X%2FqmFvAHlovuQ2yqTkIm1%2FeKkNlu0KlV3OmrSQanf1BXXlsHw2TVsdNtx0yVQIkM25rAviz8OMDFwUDibdJ8L9rd2D%2Fno3HG5gPnXZftNejhHhtBs1ExLm7Qa%2BEk2lCQIlnBvzIzwsaIi4PTUeYJIatj%2B3Di4MeShakVWvXdXEw&X-Amz-Signature=3d56dc1ea9bd158b3c73924bcb86ecf317a8a632fb798c9244c897134bc05db5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKASCEA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQc3Nx5e2Yz7GG0DFD0m744qM6M6%2BQWf7UpTUQE8pmCQIgD1H7%2BjyuY%2FvGBzC7mWdrznqiPBlDZspbBexOyITqw8YqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpCfJcM6HNfLdWj9yrcAwR%2B46QsEIKhmdFttJvbfkOTb8vPkvFoCDJJtiK5mXvvemx9CoMzv5gnWlWcTzf%2FegQO2XMOQYe44BpZKqOAmca%2FRBH3KmBoBl7ht7u0XGu4ZeblNeWdJyoYXUMYaQYYLFHRRbmXm5KH8tpkrixwX4cQY%2BjL6%2BuRZkxnMWfqkuJf1QyCCRxmiBFuhEk7ci%2FTGXHG43F72mn5gYcredaSUA2z%2FT3a87bWQVWmWUo8KC3Bzyjl%2F6HMa2zMdZB6T1HBFXvQgrlMGBkWDQ0DMpMLYwFYZt4t7muLxpnOuEYD%2BfwrGH0pylWVXYLiCkeKdRuEXGCNmwCrLhkxHPgFh9j3mqALuXziHQ6maew8YbF18yQZKSei4ttrCjErKTRGhD2RUud78AOD3M94%2BPHbORVKIcU%2F84LvMssykVMULNbTeDhcHdHZaR3%2BHtWM0xKhDrqFZxTEeqFc%2BpkIHELVoFHt7Muo1wlBYMEOVayLxhUh%2B%2Fx6woCEdRjLWOk4%2FYoNgtpCr30v212dPSd1mWJkokkeLfwtyJFEq1pGfJhhcY8VEkubO4YLNP3gYd9oiFPcwxP%2FryeqPIcKTaso%2FYPHuyiH%2FOh5uCqliFvL0cKBN0BdPHCeoUGnwzi8v6CYG2TyMKDC6r0GOqUB1h%2BFCT106JX6%2BMaGNPSzH5NOdP4X5l0gjkGgSyIqb%2BjtB2XI4X%2FqmFvAHlovuQ2yqTkIm1%2FeKkNlu0KlV3OmrSQanf1BXXlsHw2TVsdNtx0yVQIkM25rAviz8OMDFwUDibdJ8L9rd2D%2Fno3HG5gPnXZftNejhHhtBs1ExLm7Qa%2BEk2lCQIlnBvzIzwsaIi4PTUeYJIatj%2B3Di4MeShakVWvXdXEw&X-Amz-Signature=887ce244786604df23a5670af6f138d9e67a37d941a5db6283a667296aed4afb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6FR62F%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZmB7X%2F%2BpiEznusyUT08N6RpfAYHB31k3nQso2QQse0AiAdGPauaqeDW9FieBVhKO4kkARmjv56eZbx9SxPbP6HcSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6TOhwlpade9ncxZTKtwDiKVi7pNeYrJn%2F%2F1R8TnK%2FKfODCKO1YFgBDxR2%2FLE1bM3aSWqBW3Zs7qWz4aNNeUSK%2BRuLD6mqTGLfe%2FlgCTj1CQx7BolqZg9UEU9H0MBSHrrQb%2F2tTdgFlEG5oka5JP3UJTul7h8miAvYYeEtTlvn383wCGwbHMs%2FD6J0iWUbn77427wAJ6UsCI%2Bg887o20pOHFRha0r%2FWSl4SDvTFN7qzlimJm99KDfYJM9FbBHWfv%2BmxwoY%2FGvlEVf%2Bzq%2FMovd%2F2gifg4lVHTD124VxofTtzkb3Y7pFAAWHQgiUGXhiVSU2rXh2mkXhws5AqExa%2Fcgvhe2QP37G9ZxSDeXiL344bU4Ehqv9EJP%2FenSk3HxgNnSwz9Po7Bl2ol4%2BuFK8nxLrnhc8RhLuhgkyemxLyBH0WGfj6su4oGd2STcxNgiYX9dZRiBsrBL72mVmUKDEG1lpN7C40LsD2DMluAy20CELUVrtN7H9jUqgNRTrzND2IXoJGstI6gb%2FpjZlkZH2ZGxbTef581YwFb0OIL1qe0UauGcdGl%2BpTXaF11z7tLKjje3HTacj2szdwKMkESsX9hfOneJKUneKZAgP%2FI53Qf0twnyXGdSqRt%2BChI5S4j2XWbOWvVBNvayWZEcMNYwmd3rvQY6pgHVhmH4d7AsLQbohHW7QyPX4GdNago11vI6%2FdN1kHPQol6Y3Og6buBfNJrcA%2BACDEqGXfZFqq0Z5Q2xpWmrb41YUyOcsaRvGcBHAKaa1IxMrkoye64tlFQUyk19kUOrUNbHNCoHt5TIc%2B6Zd2QLz0DZGMJfc7Urvgyg0Vk%2F22Y6cHUpYyy9PfsvU%2FgllIA1pxFW2IzTzNww6BhkDYuXzbfgFKCGD5PF&X-Amz-Signature=16d7c58b3ec1032593ea35907f3e800358578241f82b8b5672fdba6cd946994f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQGTY4R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7h1G12G9uwfRCWrQqVly6zKaSHBwH0jgpMuBoQAxQtAIhALQMa%2BG7FtzSIchGnWNlmM%2FBrVeMZLQSH5nqcbKZnXj0Kv8DCBMQABoMNjM3NDIzMTgzODA1IgyGlVK1%2FSdUKuPGrK0q3ANDp5X8o%2FAddkVD1qhvERtJQK5znfmHxHwnbIirPglpm34CcL2xWAyEPEl68uSxfYY56nBR5%2FuI5nesI4tfuTD04clNBatm4wHHgFrKgOPwuDvJTy2lUpHnjcV3cl0mPAjl4wyaZ54FMXHrIqm5HqrPW7Xr6ocpzm8CFLOcEWHmOPMDxiEbdrag2ciFs3lfMLGP8s6rLAqYAtO6AMlV9PEqLBL4Fg0m4j78a9wkVrnnkOVNY6H2M11%2FoS6es2Tpm9VmCb3ja3qs3P85iCZShIKcZgfxvbqNz1xVqRaiIludaFQ37P6rkYI0%2FssSEle6fsTGye1pnUDGg4By60P1iovv8d87rEo%2FpIOngeh8rtOOS8%2BHuwmeT1Tbrxcc5AhQsuxhAsG0ei3GSOMaSR8Dbn73coPHq%2FeIEn7U6n6RpIw3u5ve4njCGSn%2Bwt13os9ClQNQ5ZBqNSwbVaPUnesGxKBwqq%2FKqTPFp8MJ5t8etq3Q3dQBvvdC8PbES8edDZWJ8jS5OElC91JtHudmSLWFK5pwKSmwERzk0HgRKY7Xlg4%2Bej6LrA6aaT%2BWkTl3DtOmo3DuUwZtLuDHBjZbtsCOUoTGzSq92KXuNXgTeIKZufuFwxt3Sbywiu%2BADld6%2FzDK1eu9BjqkAeIEQSpa4NK7GV3eLpGFTvUs57nXrlam63bUPiPz9L3nTwx%2BFXB8gGoB7mDRvNNLfdkZhgtVZRJTWv3N%2BXzE09y1CSnaGTK27qTtASGLmPLpbCvsJNAk%2BdLWbqEAuTp%2BgfjSEvCtVFV9wJ46sX3sa%2BNKnRhBpu9fawW%2BTNlkFE3xAsX4y9MT%2B0WW1spwUAeWeKZhpgWrzDjNBIg2YDEW8iQ7jSSR&X-Amz-Signature=c51c0045799fd530396823fe2c98efd43eeb417c3fe6760182677b5f95729f92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKASCEA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQc3Nx5e2Yz7GG0DFD0m744qM6M6%2BQWf7UpTUQE8pmCQIgD1H7%2BjyuY%2FvGBzC7mWdrznqiPBlDZspbBexOyITqw8YqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpCfJcM6HNfLdWj9yrcAwR%2B46QsEIKhmdFttJvbfkOTb8vPkvFoCDJJtiK5mXvvemx9CoMzv5gnWlWcTzf%2FegQO2XMOQYe44BpZKqOAmca%2FRBH3KmBoBl7ht7u0XGu4ZeblNeWdJyoYXUMYaQYYLFHRRbmXm5KH8tpkrixwX4cQY%2BjL6%2BuRZkxnMWfqkuJf1QyCCRxmiBFuhEk7ci%2FTGXHG43F72mn5gYcredaSUA2z%2FT3a87bWQVWmWUo8KC3Bzyjl%2F6HMa2zMdZB6T1HBFXvQgrlMGBkWDQ0DMpMLYwFYZt4t7muLxpnOuEYD%2BfwrGH0pylWVXYLiCkeKdRuEXGCNmwCrLhkxHPgFh9j3mqALuXziHQ6maew8YbF18yQZKSei4ttrCjErKTRGhD2RUud78AOD3M94%2BPHbORVKIcU%2F84LvMssykVMULNbTeDhcHdHZaR3%2BHtWM0xKhDrqFZxTEeqFc%2BpkIHELVoFHt7Muo1wlBYMEOVayLxhUh%2B%2Fx6woCEdRjLWOk4%2FYoNgtpCr30v212dPSd1mWJkokkeLfwtyJFEq1pGfJhhcY8VEkubO4YLNP3gYd9oiFPcwxP%2FryeqPIcKTaso%2FYPHuyiH%2FOh5uCqliFvL0cKBN0BdPHCeoUGnwzi8v6CYG2TyMKDC6r0GOqUB1h%2BFCT106JX6%2BMaGNPSzH5NOdP4X5l0gjkGgSyIqb%2BjtB2XI4X%2FqmFvAHlovuQ2yqTkIm1%2FeKkNlu0KlV3OmrSQanf1BXXlsHw2TVsdNtx0yVQIkM25rAviz8OMDFwUDibdJ8L9rd2D%2Fno3HG5gPnXZftNejhHhtBs1ExLm7Qa%2BEk2lCQIlnBvzIzwsaIi4PTUeYJIatj%2B3Di4MeShakVWvXdXEw&X-Amz-Signature=921f5cbf5ad426dc11b365507e9a4cf092318d83d0d618342395d5289f7a4103&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
