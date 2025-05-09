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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FISQCZJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCN2%2FrzGlTlpniev%2Fswvuvfm7zttj1gBAwf3y3byzovgIhAMzrRN9nLGe96blN8UuRyk04QngcMEh4hj18BaNE5lqIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6CFGDFAKKDo2CtW0q3AP1ITNeSqbz7DS9vUHEVADIAOj4bTgnT8dYPHHiwK4RDgwQ6ZcqIQx4j3s4eiJUiCj46AL3kr21yy9FI9OHX%2Fb2HSYG03WPqMu%2BSdbhBP%2BCskh1lQBCWJCgDB%2FYpEQLMhKUt%2BeI8RF15zNC1Q1VKUwH%2BBxmLEKXEY0r7mCYgcKAv752WFA%2BW7U2DUQkTouyQkpo7tcXBUfyRpXeNWmQt%2FJop%2BIhyfpahehvCW7AUbX5Xe7PeHmb0wBQkWgzp1slyG00TfsNSYh%2FOl8eS7lRF5RgoN8HZPpKb%2BF9J%2FPQN7h9epYem73ESkiNpEK4CX2nTL%2BrQly1OMEpN1LCxMxSfZ%2F79w%2FmqEqeZLMWA%2BvpFLCb0hb3MVl05Tb4nO6WCe3wmKSOxMyKRbMNulNqt2drWrUlyHI8sHpsMLz2Jt7SAf22BpYCXYcz8qdLxDcjuWhxQGS7LBlC4Mxof4XP%2B%2Fk5uH8br5qgLOTP4u5qHCfVX%2BTvZXWvCzLHZ5j7u1y%2Fre7U7UvWR%2BEAIk8vdz%2Bti%2Bz%2B5zCeRnIazhHtf86YGzGxRWEucoZh0vD5jFsNHyt8B0BorKza2yYjsaglhbW14hTJTss%2FN7HXKmU3lxDTfQxSlcmp1%2Fbt9Ps%2FXuHqm5VnjzCgzPXABjqkASGJr5D8zyarg%2B%2BQZTpIbxGjnzOhpvO7QfzqzGGkjETc8ZJMmqSuT1l3CcqVjN6G2ViKHKrrWOSf9%2BGgS%2FFLDNiauMsZLbIIHTiv%2Byp3xhxsU%2FnvA%2BWo0VZlWmhTXkqa%2FXvS5PH3L2wYVnipK30X%2FQlym8%2BNWWpvIozXpfok8gImPbDmMFLnby5O2hlYfkboolPe4CrDGDyun9CStdwUHaQnuEWF&X-Amz-Signature=6f8d0ab47edd5fbc3b309ea8ad07a02047f1ff56e40fed3542dfe9bb9d7935b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FISQCZJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCN2%2FrzGlTlpniev%2Fswvuvfm7zttj1gBAwf3y3byzovgIhAMzrRN9nLGe96blN8UuRyk04QngcMEh4hj18BaNE5lqIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6CFGDFAKKDo2CtW0q3AP1ITNeSqbz7DS9vUHEVADIAOj4bTgnT8dYPHHiwK4RDgwQ6ZcqIQx4j3s4eiJUiCj46AL3kr21yy9FI9OHX%2Fb2HSYG03WPqMu%2BSdbhBP%2BCskh1lQBCWJCgDB%2FYpEQLMhKUt%2BeI8RF15zNC1Q1VKUwH%2BBxmLEKXEY0r7mCYgcKAv752WFA%2BW7U2DUQkTouyQkpo7tcXBUfyRpXeNWmQt%2FJop%2BIhyfpahehvCW7AUbX5Xe7PeHmb0wBQkWgzp1slyG00TfsNSYh%2FOl8eS7lRF5RgoN8HZPpKb%2BF9J%2FPQN7h9epYem73ESkiNpEK4CX2nTL%2BrQly1OMEpN1LCxMxSfZ%2F79w%2FmqEqeZLMWA%2BvpFLCb0hb3MVl05Tb4nO6WCe3wmKSOxMyKRbMNulNqt2drWrUlyHI8sHpsMLz2Jt7SAf22BpYCXYcz8qdLxDcjuWhxQGS7LBlC4Mxof4XP%2B%2Fk5uH8br5qgLOTP4u5qHCfVX%2BTvZXWvCzLHZ5j7u1y%2Fre7U7UvWR%2BEAIk8vdz%2Bti%2Bz%2B5zCeRnIazhHtf86YGzGxRWEucoZh0vD5jFsNHyt8B0BorKza2yYjsaglhbW14hTJTss%2FN7HXKmU3lxDTfQxSlcmp1%2Fbt9Ps%2FXuHqm5VnjzCgzPXABjqkASGJr5D8zyarg%2B%2BQZTpIbxGjnzOhpvO7QfzqzGGkjETc8ZJMmqSuT1l3CcqVjN6G2ViKHKrrWOSf9%2BGgS%2FFLDNiauMsZLbIIHTiv%2Byp3xhxsU%2FnvA%2BWo0VZlWmhTXkqa%2FXvS5PH3L2wYVnipK30X%2FQlym8%2BNWWpvIozXpfok8gImPbDmMFLnby5O2hlYfkboolPe4CrDGDyun9CStdwUHaQnuEWF&X-Amz-Signature=41cc1c6af8c457433fdf7af22ef17bc40b8a093bc28888d41aff27fc72c588ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FISQCZJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCN2%2FrzGlTlpniev%2Fswvuvfm7zttj1gBAwf3y3byzovgIhAMzrRN9nLGe96blN8UuRyk04QngcMEh4hj18BaNE5lqIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6CFGDFAKKDo2CtW0q3AP1ITNeSqbz7DS9vUHEVADIAOj4bTgnT8dYPHHiwK4RDgwQ6ZcqIQx4j3s4eiJUiCj46AL3kr21yy9FI9OHX%2Fb2HSYG03WPqMu%2BSdbhBP%2BCskh1lQBCWJCgDB%2FYpEQLMhKUt%2BeI8RF15zNC1Q1VKUwH%2BBxmLEKXEY0r7mCYgcKAv752WFA%2BW7U2DUQkTouyQkpo7tcXBUfyRpXeNWmQt%2FJop%2BIhyfpahehvCW7AUbX5Xe7PeHmb0wBQkWgzp1slyG00TfsNSYh%2FOl8eS7lRF5RgoN8HZPpKb%2BF9J%2FPQN7h9epYem73ESkiNpEK4CX2nTL%2BrQly1OMEpN1LCxMxSfZ%2F79w%2FmqEqeZLMWA%2BvpFLCb0hb3MVl05Tb4nO6WCe3wmKSOxMyKRbMNulNqt2drWrUlyHI8sHpsMLz2Jt7SAf22BpYCXYcz8qdLxDcjuWhxQGS7LBlC4Mxof4XP%2B%2Fk5uH8br5qgLOTP4u5qHCfVX%2BTvZXWvCzLHZ5j7u1y%2Fre7U7UvWR%2BEAIk8vdz%2Bti%2Bz%2B5zCeRnIazhHtf86YGzGxRWEucoZh0vD5jFsNHyt8B0BorKza2yYjsaglhbW14hTJTss%2FN7HXKmU3lxDTfQxSlcmp1%2Fbt9Ps%2FXuHqm5VnjzCgzPXABjqkASGJr5D8zyarg%2B%2BQZTpIbxGjnzOhpvO7QfzqzGGkjETc8ZJMmqSuT1l3CcqVjN6G2ViKHKrrWOSf9%2BGgS%2FFLDNiauMsZLbIIHTiv%2Byp3xhxsU%2FnvA%2BWo0VZlWmhTXkqa%2FXvS5PH3L2wYVnipK30X%2FQlym8%2BNWWpvIozXpfok8gImPbDmMFLnby5O2hlYfkboolPe4CrDGDyun9CStdwUHaQnuEWF&X-Amz-Signature=bfaf6833a81379a75f876b1311fe913523020f6076e54d3d1fa368ad8099591e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4EKYL2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4vEpnYlJx92qhzUAvllCRYEGIpwuJaCkA7Jo2DNYOKAiABwpZAs0BIN7KAej4xnMi4%2FiJ8pCUaVuy4Gk%2Fi9bfCnCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSL3BoZA5qb2mg0gKtwD99%2FswmiO5ciRv2KDwlv3vBUuje4zpCdu%2FXihJpTk%2FeywXXSX9uO4Fjalpjbe2Mdgc3DmICf%2Bh4Aq1k6caa3CAbZ8wL7AW9PiruPyTI1MfbxUY969yzlqeyUln6nF%2FaB7OUF4mfb%2Bf0ajFPwriuRiCjPXmq02xLMY1CFUumCsGcaW6JgTgHuQvrLudFyjb2on36w%2Fw6807QxCDi4CSrtyBksXYXYjWpYDUFzQGTGyTLoMNRB9%2B0mRqqRos%2BQeOajhv78jx5VOf%2F3IAIXi62oQb%2B%2Fj499cIyA3xbfMfKwHKKKoU8u6Wr4GRZFxiPkzWQjbgOLv4YPtxWV0dl7lqI4pMdaapE0XefGn3xzDPfsWoO3ASeRJhjG3laz%2FC9qt58HSvYowiM95d1O93IV1QJFmH%2BVStoCCtjfCyrutPD6okOCJKUecuJxkmi74cfPcqtUa8rqhZklfRPfnGwZNvsdlBegDa0IPGK%2F8JQdWA4ElgsoQaxurgsQ4DVmctjZ1TKm5G845xuvtQxgL3c1Iop%2F4DF%2BxWk7CExuS%2B5vA6bu9rGGWkc3bG%2BRK53FPvUk2JqIHsgtClbNnIpUUWxPz1fI24%2F83qgBQlOuIy0usmc77iJTAT%2FqttcTmyVKxGRYwicz1wAY6pgFCudGhw7d5p9iAnejcwqQj10oRtKR7VAcqVZehwFQ3fyd3LNs3zfXauEwteXTzSV3GTuwA2l0GSbRTA9FbvZwMhj%2Bv3pePws8bUQ7vcgs7e5h%2FUyszQHleYBLXlVScVtzNkoFJBsLElvIeYW%2Fyvkmm0fdSH7tOs1fpKqV6jj%2BQIWMxCyQvU0PzLizs4Vax318b1Og%2BTWfhD%2Bze8qaGnrthaM6W7bN8&X-Amz-Signature=14376035197c18e7026f9f572d0502498f3bd38e91e3124871dbd4ee4978e6ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTLVAOV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIYL%2BpwN%2FGmVtTRPvyf9lmDD5CAPDzSIpgqWtoKDwdNgIgNO1wf2pLLtRIWKVsMy9Gd%2B4mghoz%2F%2BPm3SsxRATNysQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9gY67hNN4G665spircA0suJxMGy8NYMhxFfiFkKJtFERlluGjiP4RvvWGwtv005Bh9DnP2ln%2BcsQZHlEoFdQ4qbfgY%2Bf7k%2F6FrFOGObVthvhZAUas2PPKobzFcZXP0YPgOER3%2Fodk0gvQfTPdX8Wky6l0rX4fZba8M47iUKf7je3XH3if1t2KyKYXXkhiYiK6QQgJHjwScj%2B%2F0k8rHShpVrOPSDbQr2zBDJH%2BwnenHYusIJiX8kb72Gr%2FBD5wLO8%2BxVVSV3HPnFQj5wikJuMkrryzaLjxXDgQgBpQwP8XsPSXUO67e1%2BRQXRa4I3I5nZLb5VkfDqyJHFlY3mGAljAynsKcIF8x5tKT2FLvvZ10Br02J2QRCsx%2BnDOtT8i8fklJkh6AgkpGCpKCROA6OLkAcgioeuhuU1BCoV%2BMqWg%2FtkRdLU%2BbZHA7pnJNW6G1SqKJIjYJAUqGp7TQw6EQJpMGBICM8jp%2FwXDMy0UDgCHJ3IUGpaaUwB32CWRTi9PW2w5EtobxX0SEa210U6cM8lIjXPnXZK8ltYmDr6bcL75jUBVL3nnfv1xq%2BzFTLT7mOa2lVmMCYBOQqT%2FCVSWdR2ngy2J6l8vqBgnfz8CkcjKMYY03LEzooX6CLVm9cXY8nXGVgTkuj7eyjjoZMOnL9cAGOqUBqrMuryyt2FV%2BxMgc4rZ3OfueqUanI1N%2BLwcfehb1xtXyFiLomx3jXrd6LLFd%2BtvrABw8CDsGym526qvc4%2F9VFy8WA%2Bxr67oO4sDwlgDZcBkNg9iHKcSchjqwAvh%2Fktc6yp4pK5%2BQ0ptUjKIUdJjneqvZBNrTGEMs3bQHxTU0UPrY5MdW52mfJ5%2FfxZ7Y51Sxtzgjn7%2B7RgeQ0ZZmODJfHLZyF7bm&X-Amz-Signature=2711a37577e3e955fd745a6b9cfe2fe5ada4a107bfd979a8372d8e5b348504af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FISQCZJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCN2%2FrzGlTlpniev%2Fswvuvfm7zttj1gBAwf3y3byzovgIhAMzrRN9nLGe96blN8UuRyk04QngcMEh4hj18BaNE5lqIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6CFGDFAKKDo2CtW0q3AP1ITNeSqbz7DS9vUHEVADIAOj4bTgnT8dYPHHiwK4RDgwQ6ZcqIQx4j3s4eiJUiCj46AL3kr21yy9FI9OHX%2Fb2HSYG03WPqMu%2BSdbhBP%2BCskh1lQBCWJCgDB%2FYpEQLMhKUt%2BeI8RF15zNC1Q1VKUwH%2BBxmLEKXEY0r7mCYgcKAv752WFA%2BW7U2DUQkTouyQkpo7tcXBUfyRpXeNWmQt%2FJop%2BIhyfpahehvCW7AUbX5Xe7PeHmb0wBQkWgzp1slyG00TfsNSYh%2FOl8eS7lRF5RgoN8HZPpKb%2BF9J%2FPQN7h9epYem73ESkiNpEK4CX2nTL%2BrQly1OMEpN1LCxMxSfZ%2F79w%2FmqEqeZLMWA%2BvpFLCb0hb3MVl05Tb4nO6WCe3wmKSOxMyKRbMNulNqt2drWrUlyHI8sHpsMLz2Jt7SAf22BpYCXYcz8qdLxDcjuWhxQGS7LBlC4Mxof4XP%2B%2Fk5uH8br5qgLOTP4u5qHCfVX%2BTvZXWvCzLHZ5j7u1y%2Fre7U7UvWR%2BEAIk8vdz%2Bti%2Bz%2B5zCeRnIazhHtf86YGzGxRWEucoZh0vD5jFsNHyt8B0BorKza2yYjsaglhbW14hTJTss%2FN7HXKmU3lxDTfQxSlcmp1%2Fbt9Ps%2FXuHqm5VnjzCgzPXABjqkASGJr5D8zyarg%2B%2BQZTpIbxGjnzOhpvO7QfzqzGGkjETc8ZJMmqSuT1l3CcqVjN6G2ViKHKrrWOSf9%2BGgS%2FFLDNiauMsZLbIIHTiv%2Byp3xhxsU%2FnvA%2BWo0VZlWmhTXkqa%2FXvS5PH3L2wYVnipK30X%2FQlym8%2BNWWpvIozXpfok8gImPbDmMFLnby5O2hlYfkboolPe4CrDGDyun9CStdwUHaQnuEWF&X-Amz-Signature=7d88de0e741a640934993a70c6b0796ee564a15987161c58f81dbfa9be46caf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
