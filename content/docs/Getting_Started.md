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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QAC3PV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpzsozgxbVIoZ5iU9FWyr%2BFZSpP2mYh1LqgnpamcOG6AiA42yOUCvmoCpdM9xMGoUMQxgEvXicPJIroT8kzFd4GrSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMQHXEW0KAlNboBbvRKtwDiZ54IsEQzb6jBqCbrazQnvtTcm%2BP5INqXViz1IoZZ5uqpzJbUPg2yfb5OF72xAzspeyCfiL2ysNP9DQPajC4vQ%2F8MvBiJoRQEpFcrndZZ4D3520j%2FU%2B45bJM2eBaygezx%2FVkzur1b%2FgskJf%2B8%2FB%2BLEzZBOHaHlhoI7BhQ7pBiaxOnu%2Bih3LmwwpN1BslMO2HuJBzv1rRld54d2LmTnDp%2Bb%2FLVHrvZYXWAdTLVGOa62tqwPEX%2BsylEHDV5sHrDqjlqv0w6bcxbgTgc8kJNf7a0NXGovYaadcb5lodlSxojhZgtrEVNlzJ%2B4MrmaVSAH6aVZOTbeFUQ4qGE4kP0%2B%2FwC8sqSYT9awTLtqJu%2FCEzo4iXsaASQI5fL2orNPPU2IrxgqwbFYm8LEtKjLujeZpdsDHOU253cSd4b6%2Fr5cxQvTTQdTcoRmyGRE7eSlsq1nO3WFqsF0b%2BPGqVQiVy1mhv%2BL0CszUI9q9Z1Cyv5RhKfwga%2FUyZN7sPA94nsEiZ2zUuetNLpLZaX2L8DrJSwThOJds%2FhwV1fjxgwqrd5Ej%2BjrkYk178KGyYW%2B6GUxZOfugJMwaUvfOnws%2BBbsYtedew64KTM3s6WL%2F%2FOnjLwj91DojvER8W3quWEVaApY4wnq2%2BvwY6pgGURCjBBOOiLB1Pf9ZKlzl4JzyEoMAYlQ62E82qwwxkQMqT8OPqFW%2BvQWNoShm44oEk9Qqq6iDl2TMPAFYCNKmZ8K%2BXjEv%2FtrfrsWVpqhX33JrFD8N9hfSrAC6f2azfSK%2F2OYChB9dK7SPKGVRyJUh3ESAKjTP8YVw5YISDTdv4Mg5lr3kuLFELFOzL8znLQujLl6H6WjRuMj%2F8TZA0GHhmgi3hZ7kU&X-Amz-Signature=6a1a55d866a0b42f3bc62203069438bddc2c9ce211e674b9ee2b1acf3f5474e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QAC3PV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpzsozgxbVIoZ5iU9FWyr%2BFZSpP2mYh1LqgnpamcOG6AiA42yOUCvmoCpdM9xMGoUMQxgEvXicPJIroT8kzFd4GrSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMQHXEW0KAlNboBbvRKtwDiZ54IsEQzb6jBqCbrazQnvtTcm%2BP5INqXViz1IoZZ5uqpzJbUPg2yfb5OF72xAzspeyCfiL2ysNP9DQPajC4vQ%2F8MvBiJoRQEpFcrndZZ4D3520j%2FU%2B45bJM2eBaygezx%2FVkzur1b%2FgskJf%2B8%2FB%2BLEzZBOHaHlhoI7BhQ7pBiaxOnu%2Bih3LmwwpN1BslMO2HuJBzv1rRld54d2LmTnDp%2Bb%2FLVHrvZYXWAdTLVGOa62tqwPEX%2BsylEHDV5sHrDqjlqv0w6bcxbgTgc8kJNf7a0NXGovYaadcb5lodlSxojhZgtrEVNlzJ%2B4MrmaVSAH6aVZOTbeFUQ4qGE4kP0%2B%2FwC8sqSYT9awTLtqJu%2FCEzo4iXsaASQI5fL2orNPPU2IrxgqwbFYm8LEtKjLujeZpdsDHOU253cSd4b6%2Fr5cxQvTTQdTcoRmyGRE7eSlsq1nO3WFqsF0b%2BPGqVQiVy1mhv%2BL0CszUI9q9Z1Cyv5RhKfwga%2FUyZN7sPA94nsEiZ2zUuetNLpLZaX2L8DrJSwThOJds%2FhwV1fjxgwqrd5Ej%2BjrkYk178KGyYW%2B6GUxZOfugJMwaUvfOnws%2BBbsYtedew64KTM3s6WL%2F%2FOnjLwj91DojvER8W3quWEVaApY4wnq2%2BvwY6pgGURCjBBOOiLB1Pf9ZKlzl4JzyEoMAYlQ62E82qwwxkQMqT8OPqFW%2BvQWNoShm44oEk9Qqq6iDl2TMPAFYCNKmZ8K%2BXjEv%2FtrfrsWVpqhX33JrFD8N9hfSrAC6f2azfSK%2F2OYChB9dK7SPKGVRyJUh3ESAKjTP8YVw5YISDTdv4Mg5lr3kuLFELFOzL8znLQujLl6H6WjRuMj%2F8TZA0GHhmgi3hZ7kU&X-Amz-Signature=17baafe8a160725b7934abb54ec4c6b67e1ad7a931ce1cba042e674d7485f62f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2BSFDC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv5BhVNrtVpnbUdg7jvFNwP8NnP%2BjocHn1SdnloZYCawIhAO7b7SH8WamdGQEj%2FiT4wu7g8SJbGksQcfrpntrtj3ozKv8DCBEQABoMNjM3NDIzMTgzODA1IgzEuHLLXiH8cDKFJYAq3APK7c4d6OTQALjL6k%2Fa1v0a7aB99qbxP7MOBiFVPkgC17%2FiROp22mIHR2aIDoaSE6KwWh2tuOnfXPWY2qK59mCQbCflPhiTf8jW8AirsNBLNNM4Cc2oumTVVniz4VZg36OvcUFqVSgDSu6%2BFXkmKjNpOX5mbu3RcHSJ0gmWfTLDSf60XXQbqdYDPVqIeLWyfXmIsUWTt0Btdjh0%2FspmTLlVf2sgfDIujik4x3OcWDwe07mPambpJjwa74OIQxelCGyYqSaTrbhUikN8Kg9zkIWP%2FyLfifBcmzUZZroqR5ierdLEJT%2FjpTbWydv7yO7jD9hrkS5bO2NBXdr6obNAmT3SAkwBFLdgyGBUtmvrYGF7aNMf2oz40R0Jd%2FDybNIfBx8JsSFMPE%2BX%2FITpEuP3cJg%2BW%2BBzQfqthEveEVI7K3kfJMQk2lut81SaIBg87N0wGN1enMTh42w%2FiStGb9PVCSaRUciIiYgfSD0bEhKoqc3vHhffIWcEyfxsY5ShE9Gll9Bswctzjjpsbkfed0V%2BCqpmwLbNBo%2Bjr4AE0Od%2BScvqoaCHGwuIRChaU00AtbnH%2FdHU6uFhVlaGx2sz6f%2F%2BoacYqok%2F88QxTDN%2Fbgkpb9qxBoqLwlCuLccJlEda5zCrrb6%2FBjqkAQ8oniuCJ0Ev2uYCGhEv7%2Bi9tlzA9%2BMYv6o00sJ2E0xDOKj1%2Bq0boCmFQORl%2BvyxLPWAGAU5H%2BDGboxwA%2FWTAR1NI52qCrvU%2FFzQ1SdJkKb3fPwEFwuxNHcfN3KK217McQMyeLshK6%2B40sUwoZ5vG%2BwybMYCvlIYI%2FCBNQ4j%2BuMVEi2GSduSSYqVhj9Dnwx3H7yM3InyXKzf4lmZLDSRuLC0hCt%2B&X-Amz-Signature=7e287c6daab93035a1e16da5217ea663c730545b811bfd86508987a6dd3554d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJL5D7N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B2NmY2F5OMccJuYxwue5PVhIDug8CHIxvvSDnsotligIgNux%2FUxdfb4lArUzwkJkpe3xQ7keTpU6UR3ewcX4C31sq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJToCy%2B1y3Q%2BLiPmbircA2upoOie3HLE6lAo%2B%2FtgAVGKr0o6jw%2FJb3xrdPzO30eW%2F14DBpRCj98r7u8up5XajKq%2B4NclIfBzdolXtkcKOi3JFBjaPl6EyGPy4qVMksYCsY0AJuJfi6cpuW%2F4DmE781%2BHPdaa%2Fx0fHLLjJU3wEFvGgrrSN1xiBEMHacj6MYnTfzdlI2O1YlYQ3jvW02nYN8%2FHf%2BGDZnF6zWJleIOtz4fK7eelWWq1EurpyP%2FG8oaIVYM4ki38mpWAJZ9fO%2B3cz%2FK%2BsehzzcDeTFhfdmVBBkOJm%2BP35nOFjGnaj7TiX4inEP6FkAYIScfp2ICRGrCZSj0FOrgP5W%2F7C6EdovwuAJVRxVdRyBc8veCHhqVnr3ZyvNEjfgoh0mXv61wUhAiHo2CFkyHD8ojK7vQUF4vMw8SSy62ku2ppRMGqFK%2BCHDPANkFMto%2FX8C5I0VPyOrd%2F54xU%2BgGRV1njlRhHrMS7aGSo58zTsxc8jFttR8fFs3fBQ6iE6ZSvevNQXGBR3AXAknOKau5nAS5A48J9N%2B0UwK8Tj3mXD35MN8esMSrn0OW7VNzQeZaaP89PBS%2B2lulT4p1J1OM1rJMeLNqATp0wt26afNYPzLrP7nD%2FEzN0yBnrEenKbwm8avwr5u7EMMuuvr8GOqUBrK%2FNy2BokbwidDyQe2xQMWeYALLx9BsH7dW%2BD5jfERoIWCgDYRbPTnsv4KjKGQyxqtQgVxeLFIr%2BJXVtP4%2FV8O6uXl71FnnplXBtmBu8cjsyywbH6DslY%2BWvYu3mEnXyAi7Tk6pmKgcq5cE4em3V12Sdcf00yghRpr9WuY3ylHd9KGoVrFesz4k5Lw8Vga175HjxekZaOjCKy%2Fw4XfAE1dy%2BVt8i&X-Amz-Signature=680a3d8dbf317456afc0854bccb1011fc647d176527bf58902a79a9866ed710d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QAC3PV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpzsozgxbVIoZ5iU9FWyr%2BFZSpP2mYh1LqgnpamcOG6AiA42yOUCvmoCpdM9xMGoUMQxgEvXicPJIroT8kzFd4GrSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMQHXEW0KAlNboBbvRKtwDiZ54IsEQzb6jBqCbrazQnvtTcm%2BP5INqXViz1IoZZ5uqpzJbUPg2yfb5OF72xAzspeyCfiL2ysNP9DQPajC4vQ%2F8MvBiJoRQEpFcrndZZ4D3520j%2FU%2B45bJM2eBaygezx%2FVkzur1b%2FgskJf%2B8%2FB%2BLEzZBOHaHlhoI7BhQ7pBiaxOnu%2Bih3LmwwpN1BslMO2HuJBzv1rRld54d2LmTnDp%2Bb%2FLVHrvZYXWAdTLVGOa62tqwPEX%2BsylEHDV5sHrDqjlqv0w6bcxbgTgc8kJNf7a0NXGovYaadcb5lodlSxojhZgtrEVNlzJ%2B4MrmaVSAH6aVZOTbeFUQ4qGE4kP0%2B%2FwC8sqSYT9awTLtqJu%2FCEzo4iXsaASQI5fL2orNPPU2IrxgqwbFYm8LEtKjLujeZpdsDHOU253cSd4b6%2Fr5cxQvTTQdTcoRmyGRE7eSlsq1nO3WFqsF0b%2BPGqVQiVy1mhv%2BL0CszUI9q9Z1Cyv5RhKfwga%2FUyZN7sPA94nsEiZ2zUuetNLpLZaX2L8DrJSwThOJds%2FhwV1fjxgwqrd5Ej%2BjrkYk178KGyYW%2B6GUxZOfugJMwaUvfOnws%2BBbsYtedew64KTM3s6WL%2F%2FOnjLwj91DojvER8W3quWEVaApY4wnq2%2BvwY6pgGURCjBBOOiLB1Pf9ZKlzl4JzyEoMAYlQ62E82qwwxkQMqT8OPqFW%2BvQWNoShm44oEk9Qqq6iDl2TMPAFYCNKmZ8K%2BXjEv%2FtrfrsWVpqhX33JrFD8N9hfSrAC6f2azfSK%2F2OYChB9dK7SPKGVRyJUh3ESAKjTP8YVw5YISDTdv4Mg5lr3kuLFELFOzL8znLQujLl6H6WjRuMj%2F8TZA0GHhmgi3hZ7kU&X-Amz-Signature=6e586bf089430db92b096cc1e1c787b2ad7cad4c1a3f92c0be0fd0ebfd6a8e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
