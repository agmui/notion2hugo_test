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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELEGO32%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpX3JGY9aPTUNti4NyZSYbIrrKGE81ircG4n1TaPccAAiA5emvulzan5LxWqUnIaaw05ffpgCxW0wo7vM13aKfFrCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UoB357Z%2F%2FVAv3L3KtwDuOT8c%2BHEtatIawyqCqtS84C%2BCmwcaeUh%2Brr4lxREI%2B5L%2BXUsUnWLWgcsGk%2BYzhckz2O13BXBsuqUTQO1YdH9hs%2FFwWVGwugnoSTfuScdOYitJa3zT7K7H%2B83bc39qnOg1aG63JNaFwNAACy%2BlQW1vbtXb4H%2ByshP4LGzzKymsrkcemevbrzWDWsd5e4ujaNQpzZd5JrxogvXF9edUQR9Z50UlEo3KK%2F7kqbBBPFijv8Qba%2BT6E8ZWfQuIPdF1xN%2BM77%2FOzJ7BZ%2BIGwT90DIO3I0ZJLhjjv7UyQvsWgYNvDweUsMQ1ELOIJVfHdv%2BFMZGAIUQ%2F1ALn6JTXTB84%2BqbW2WtPMuUUtCT800Rxw6qHJ4vvIHFtlWQVuaDROTP%2F8dmvv7LMNaofR5JPw08%2FuomeIUrErmAuwTrMFotdWPWJXwyD%2BhNnC4PRTF%2BeNpSCUBWj37d89cd6e7LGiMnW3MbEucJod%2FrLz7ES1M2iU6RW%2BTc5%2FK%2F1SnD4A2HLaUrR3fko44dnfupK7MoL34anUTnwofhBvFFgISsdlGMttL745%2BoeZIAbBK%2BcUZYR%2Fd1LCxq0yb20QhlIx3%2BmdyUIjWzgMkN37chB%2BsQl5LOg5dQNw1GcqH3jqDjGHMZ4vow5syvxAY6pgEv%2BXdiyUP3d6ZldZvING85IktOIY6vOgu%2BrTimJiMpgn%2BnklBqdPyYFqqf%2BUyOGJ1hxkZjFLSOjKQfQ2dfXcyF8i0JQYLjXWFCGoqUVciokf6T9TlCsQgb4PPLKX6X6YHoII%2FLL7Xt7jm5HNHyB08SELja6x9TDTyNtFnfku61nb4CXPwwtD%2FXNo9jLfAqWcJrT0IxvwltrZdW2P%2FIiUa%2BSzI9Rl%2Ff&X-Amz-Signature=221c01c2983e3fe1030c147a4c9aa56e47a572d823dce628c211fc66352e25ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELEGO32%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpX3JGY9aPTUNti4NyZSYbIrrKGE81ircG4n1TaPccAAiA5emvulzan5LxWqUnIaaw05ffpgCxW0wo7vM13aKfFrCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UoB357Z%2F%2FVAv3L3KtwDuOT8c%2BHEtatIawyqCqtS84C%2BCmwcaeUh%2Brr4lxREI%2B5L%2BXUsUnWLWgcsGk%2BYzhckz2O13BXBsuqUTQO1YdH9hs%2FFwWVGwugnoSTfuScdOYitJa3zT7K7H%2B83bc39qnOg1aG63JNaFwNAACy%2BlQW1vbtXb4H%2ByshP4LGzzKymsrkcemevbrzWDWsd5e4ujaNQpzZd5JrxogvXF9edUQR9Z50UlEo3KK%2F7kqbBBPFijv8Qba%2BT6E8ZWfQuIPdF1xN%2BM77%2FOzJ7BZ%2BIGwT90DIO3I0ZJLhjjv7UyQvsWgYNvDweUsMQ1ELOIJVfHdv%2BFMZGAIUQ%2F1ALn6JTXTB84%2BqbW2WtPMuUUtCT800Rxw6qHJ4vvIHFtlWQVuaDROTP%2F8dmvv7LMNaofR5JPw08%2FuomeIUrErmAuwTrMFotdWPWJXwyD%2BhNnC4PRTF%2BeNpSCUBWj37d89cd6e7LGiMnW3MbEucJod%2FrLz7ES1M2iU6RW%2BTc5%2FK%2F1SnD4A2HLaUrR3fko44dnfupK7MoL34anUTnwofhBvFFgISsdlGMttL745%2BoeZIAbBK%2BcUZYR%2Fd1LCxq0yb20QhlIx3%2BmdyUIjWzgMkN37chB%2BsQl5LOg5dQNw1GcqH3jqDjGHMZ4vow5syvxAY6pgEv%2BXdiyUP3d6ZldZvING85IktOIY6vOgu%2BrTimJiMpgn%2BnklBqdPyYFqqf%2BUyOGJ1hxkZjFLSOjKQfQ2dfXcyF8i0JQYLjXWFCGoqUVciokf6T9TlCsQgb4PPLKX6X6YHoII%2FLL7Xt7jm5HNHyB08SELja6x9TDTyNtFnfku61nb4CXPwwtD%2FXNo9jLfAqWcJrT0IxvwltrZdW2P%2FIiUa%2BSzI9Rl%2Ff&X-Amz-Signature=8f29c53403d8aadf17f6f7232489c8a4d9d5170784a45bf8263396b07ebd79bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELEGO32%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpX3JGY9aPTUNti4NyZSYbIrrKGE81ircG4n1TaPccAAiA5emvulzan5LxWqUnIaaw05ffpgCxW0wo7vM13aKfFrCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UoB357Z%2F%2FVAv3L3KtwDuOT8c%2BHEtatIawyqCqtS84C%2BCmwcaeUh%2Brr4lxREI%2B5L%2BXUsUnWLWgcsGk%2BYzhckz2O13BXBsuqUTQO1YdH9hs%2FFwWVGwugnoSTfuScdOYitJa3zT7K7H%2B83bc39qnOg1aG63JNaFwNAACy%2BlQW1vbtXb4H%2ByshP4LGzzKymsrkcemevbrzWDWsd5e4ujaNQpzZd5JrxogvXF9edUQR9Z50UlEo3KK%2F7kqbBBPFijv8Qba%2BT6E8ZWfQuIPdF1xN%2BM77%2FOzJ7BZ%2BIGwT90DIO3I0ZJLhjjv7UyQvsWgYNvDweUsMQ1ELOIJVfHdv%2BFMZGAIUQ%2F1ALn6JTXTB84%2BqbW2WtPMuUUtCT800Rxw6qHJ4vvIHFtlWQVuaDROTP%2F8dmvv7LMNaofR5JPw08%2FuomeIUrErmAuwTrMFotdWPWJXwyD%2BhNnC4PRTF%2BeNpSCUBWj37d89cd6e7LGiMnW3MbEucJod%2FrLz7ES1M2iU6RW%2BTc5%2FK%2F1SnD4A2HLaUrR3fko44dnfupK7MoL34anUTnwofhBvFFgISsdlGMttL745%2BoeZIAbBK%2BcUZYR%2Fd1LCxq0yb20QhlIx3%2BmdyUIjWzgMkN37chB%2BsQl5LOg5dQNw1GcqH3jqDjGHMZ4vow5syvxAY6pgEv%2BXdiyUP3d6ZldZvING85IktOIY6vOgu%2BrTimJiMpgn%2BnklBqdPyYFqqf%2BUyOGJ1hxkZjFLSOjKQfQ2dfXcyF8i0JQYLjXWFCGoqUVciokf6T9TlCsQgb4PPLKX6X6YHoII%2FLL7Xt7jm5HNHyB08SELja6x9TDTyNtFnfku61nb4CXPwwtD%2FXNo9jLfAqWcJrT0IxvwltrZdW2P%2FIiUa%2BSzI9Rl%2Ff&X-Amz-Signature=6a54f5c32c8da9aee0828173e22ffc0efe8200aa8509a597a30f611efcfe5042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DDZDQV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPnYf05uG%2BToZhyPz059ZgFjAZpsxD6cGr7WLn7vKnxAiEAoriCWxgQSSeH9v3CAOxxM%2FMxCDZJGLoKHVKSYe9mGxQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT6i8hGtUnrV06fWSrcAwf9Ei1iY6%2BCgSXjqwZIAWwx15sIgLA8h6nE%2Fyg014pqXNB678bBRMR1rtGG8iR76OiJcOtNnEyGsJu7mPn37gK9DBWOZtwTmN7%2FmBgAiqzXuoL0A1HWklVDBVUm03LhbA1cTp4vKMM0HqCB3EHZ4%2FENg8g7vlfiAuXTfNQM3Epr6fkXN%2Bu0r7AhWsD06CieP5pOG05IKR1aEnBdCW2dYPpDjHu4FzI4aeMJhtUStMMCvolmdp3jhOvL8imV5qINmB7b4wxroOoab1%2F6byknJlqyUAWl39LtH%2FNbFmV%2Bl9wIbnjIHGnJNRT7TEPgDrRoztmyPa7VmSEcOTLA76kO0hiHbfbUWh6T2In0dTEEk7%2BJXc9oBjYe1FL62xWtWegv6bzuq0jtKx6CYJ0ioTvFDYbZo7%2FGOqw4HWRoXyXKByeaaEVQXlawVN6w2fjdR3NAiXxpjiq8xi1J9X8sbgXkCjL5HIlsITa7uKoWhBF4fllLz%2BtzPdnQo76qftO98Y%2BK109IAbKPmYPxZMLfwlyKXlK4az3uvjKiTv4uUX2WGVppfzUIUKM3BmDSko0uP9mbXEixG76mG6oYGv5dDvi8JVgkegm6fx794EHBw1H2urF3BO3ttW5Cew1FP7%2FnMK7ur8QGOqUBFDyGo4PSig4PXGQbq2fBJJzPHcTtH0NXPg00EnYrW849BsA0fvK7yrDOFkI7WaTnNcwmkysro5rDlaLx5juyE0w72vxluEyb7031cl6ZSsy465ZZ3A%2Bx7xhHmjMTDHyYG8TjXsLawNghQxwpZnzoUcVXVb%2BZYD4R2MSS0efUmdpVQLGShEP0j%2FLnPm5mAvb7sDIgkpMAuP%2BJHRc7xccEdYpxRdHB&X-Amz-Signature=083e38ccab5c4e7f5cf103cfa1d38e118494fbeeeca6d713962c3e1037c5134f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRNHFND%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt5ayraDNo2hmyxw5w5wedoTjegssudAgrDKDa79zQVwIgOLz26fyy5ZjI6wYq56Q94ONcgeYVGGI8%2BytmEN3uil0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHB5j%2BFxV0Dgu1yYPSrcA4cFFi737UJsN6r5Ko%2Bmr39%2FFbOtM6ZqqKDgUToQv1ZFobdQGahGojKszvYGFumum5xFT0NGiTvnfxByyMDEQVXfYf0DoEmWWOVTJAhdjG%2BrQrbDk17cy4UgC2SjvwQ8cV6gECrJyiEzh%2BY0AdN%2BKxsNV4oQWtNfR3EwBUEOKJCCR2z4wxsQXXpC3ElXO05S34AM2108Xx%2FZh4OU8lqNJZE0eSRrr44rmU09sfCItjBw9BBoUdCA96p0kDzaOVio1azP4AwbRMPv3Zu%2Bk4A3hrhE%2BoL13mwWQ33a%2F1%2FeEIYJxwm3uK6PeqiCJgyoh2eLjgh6Oac%2FG8%2FRmsF6fezYhJnY4Pba7iLnwRbAjF6xYo3t2rSSz5f13esy8VkJ9CK8FaGTI8Y%2FMdA%2FOk3Vkbd47Ft%2FRdMULqnoK951MdcuxN4LUGtn2g%2B3KLkoIIXl95p70MtdTNVOjaFlpl%2F%2FUVhzLXfQGPJZKPrGRJJ54oMZGsg8JgTXWV2d9%2BsQBzGHcq6nQ0DFNrhBQgrZRjtA3G2OASlzyvvC1%2FYK4WSdqqqf8YCItgzXsZZ9vZeYAKUMraeZKY%2BLzrdKjaakLocnbG5qyZHWnQjk%2FL7h9GtbocZOhQlvqEJQ8YgR8W0ZZzGhMNPMr8QGOqUBsGLth9O2KWVy%2BL%2FJrUNAuCnCeB3%2Bq9HA2k7l8OSWchbrCW1HcIMcepxguhuojPX2oUU0lZndpeyF30LcxFQPiO2%2FdAGXcNypUTDmxgV6zXC6bCZJqinE0eb%2Bc2V3smgeNwhmB%2BOstV02SHdB9Es26AaV0RRirJqmiCAU4aNL2dmGSPYSJ1sjoGByugkieMrypBi%2FyXyrs7J1dAYYg4xzYN9HVueG&X-Amz-Signature=3a6ea39b7f09ff8f265847ba4b4e2eb2ad9e4fadaa28f3efa8c4eed37474d9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELEGO32%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpX3JGY9aPTUNti4NyZSYbIrrKGE81ircG4n1TaPccAAiA5emvulzan5LxWqUnIaaw05ffpgCxW0wo7vM13aKfFrCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UoB357Z%2F%2FVAv3L3KtwDuOT8c%2BHEtatIawyqCqtS84C%2BCmwcaeUh%2Brr4lxREI%2B5L%2BXUsUnWLWgcsGk%2BYzhckz2O13BXBsuqUTQO1YdH9hs%2FFwWVGwugnoSTfuScdOYitJa3zT7K7H%2B83bc39qnOg1aG63JNaFwNAACy%2BlQW1vbtXb4H%2ByshP4LGzzKymsrkcemevbrzWDWsd5e4ujaNQpzZd5JrxogvXF9edUQR9Z50UlEo3KK%2F7kqbBBPFijv8Qba%2BT6E8ZWfQuIPdF1xN%2BM77%2FOzJ7BZ%2BIGwT90DIO3I0ZJLhjjv7UyQvsWgYNvDweUsMQ1ELOIJVfHdv%2BFMZGAIUQ%2F1ALn6JTXTB84%2BqbW2WtPMuUUtCT800Rxw6qHJ4vvIHFtlWQVuaDROTP%2F8dmvv7LMNaofR5JPw08%2FuomeIUrErmAuwTrMFotdWPWJXwyD%2BhNnC4PRTF%2BeNpSCUBWj37d89cd6e7LGiMnW3MbEucJod%2FrLz7ES1M2iU6RW%2BTc5%2FK%2F1SnD4A2HLaUrR3fko44dnfupK7MoL34anUTnwofhBvFFgISsdlGMttL745%2BoeZIAbBK%2BcUZYR%2Fd1LCxq0yb20QhlIx3%2BmdyUIjWzgMkN37chB%2BsQl5LOg5dQNw1GcqH3jqDjGHMZ4vow5syvxAY6pgEv%2BXdiyUP3d6ZldZvING85IktOIY6vOgu%2BrTimJiMpgn%2BnklBqdPyYFqqf%2BUyOGJ1hxkZjFLSOjKQfQ2dfXcyF8i0JQYLjXWFCGoqUVciokf6T9TlCsQgb4PPLKX6X6YHoII%2FLL7Xt7jm5HNHyB08SELja6x9TDTyNtFnfku61nb4CXPwwtD%2FXNo9jLfAqWcJrT0IxvwltrZdW2P%2FIiUa%2BSzI9Rl%2Ff&X-Amz-Signature=e85b63511bf1af661caffc465482f634d191a9eb5a401b94a0eb44e33cf972ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
