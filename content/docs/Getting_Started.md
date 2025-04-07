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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU5VYW6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FOg593lCM0pYL75JWOqCzDbmf3utOfWtTARUroKi7wAiBOrFTbQY3h6bWDmW6IH5MPQGAKgV089Mrh2tgpGlxCPSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMG%2BLhT0gFEE3jY5H1KtwDCxaV7zvtO3CP51yVtvkPqH%2FX%2F2tDHw%2FBErTr%2BRSvbtHWUzw7qbs1CIfesmt9fTChtQi%2B2HKLUjdqlKPxyTIvefcUZuNo0oYYaS362u8JiAgli4PYtv4qhaRe3Pp2di%2FrrA9G8jKApE08oi86EoJQcHHvaHg5CdLw%2FLbeXJ4QwmAdUUqHmwYtAZgYrFmxxkqOsF%2FH%2FCCxc3UJ0mD9%2B4%2F03yP3AoQ2nJx%2FST2lpb59GHigIgxJ0ZvaN7bI7XhDfLtI99HRYME6%2Fpg8yKzN0vmSvS%2F2EfMsbVNNsZ2IkYplFOi6%2By74rtZeABx%2BB0t5gnybh%2B8rjqHsjqSXATT4i8EvhTG4zpGddY427rs4uzkRIAoVqTCMNMDUO%2Byuo%2FCK7oum2yzqxBfqeiHFbhSPvXPmqN%2FV%2BXrXFpyrgeP1Yu981jn%2FkYEKRDCMwdvavyYT6Hoa%2FZ%2BPw%2Bax2jFHYiaqf3a0sQbnrjJOISP3eEL%2B%2FXSQn1dnPU0DjZHs7s1aU8z0p0IOdHQrcLPwl%2F7DDOe7i8d8GI7%2F%2FmEvBLa4PKt1HsHmK0aX5UQZ2lqAQzx4CbQ60gdi3YtVgr%2FHUSRiNdqWcPawtNG6sLdcb%2B1tpym0OlzdQlgZ2siVG9zdgF7feAMw2unMvwY6pgGvW0w7EuBZUpepR2cjPTFCjCYCrTbFbqRtNLiBw6oKrII7bI8L0M6z2Q0fO6EYPo7wHOWRT2kUlccrlWv2%2BDoQDWX4MUMvvYTmCG5XKmwI%2BvZfJW%2FiQLwjkiiFfzRlJxKLbdndmt7i7oMJvZLO6byGXLvkl8tYTig3uRCfVphzWdF0uc82eGvpZXkP17WqfEdY9JfPqZeGCCaGuVObp6CL%2Bz5T%2FKNf&X-Amz-Signature=cf2b45f946458d09dc585a9954c34cfe2a1cc8bde708e4da45030a8c95c8d35e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU5VYW6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FOg593lCM0pYL75JWOqCzDbmf3utOfWtTARUroKi7wAiBOrFTbQY3h6bWDmW6IH5MPQGAKgV089Mrh2tgpGlxCPSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMG%2BLhT0gFEE3jY5H1KtwDCxaV7zvtO3CP51yVtvkPqH%2FX%2F2tDHw%2FBErTr%2BRSvbtHWUzw7qbs1CIfesmt9fTChtQi%2B2HKLUjdqlKPxyTIvefcUZuNo0oYYaS362u8JiAgli4PYtv4qhaRe3Pp2di%2FrrA9G8jKApE08oi86EoJQcHHvaHg5CdLw%2FLbeXJ4QwmAdUUqHmwYtAZgYrFmxxkqOsF%2FH%2FCCxc3UJ0mD9%2B4%2F03yP3AoQ2nJx%2FST2lpb59GHigIgxJ0ZvaN7bI7XhDfLtI99HRYME6%2Fpg8yKzN0vmSvS%2F2EfMsbVNNsZ2IkYplFOi6%2By74rtZeABx%2BB0t5gnybh%2B8rjqHsjqSXATT4i8EvhTG4zpGddY427rs4uzkRIAoVqTCMNMDUO%2Byuo%2FCK7oum2yzqxBfqeiHFbhSPvXPmqN%2FV%2BXrXFpyrgeP1Yu981jn%2FkYEKRDCMwdvavyYT6Hoa%2FZ%2BPw%2Bax2jFHYiaqf3a0sQbnrjJOISP3eEL%2B%2FXSQn1dnPU0DjZHs7s1aU8z0p0IOdHQrcLPwl%2F7DDOe7i8d8GI7%2F%2FmEvBLa4PKt1HsHmK0aX5UQZ2lqAQzx4CbQ60gdi3YtVgr%2FHUSRiNdqWcPawtNG6sLdcb%2B1tpym0OlzdQlgZ2siVG9zdgF7feAMw2unMvwY6pgGvW0w7EuBZUpepR2cjPTFCjCYCrTbFbqRtNLiBw6oKrII7bI8L0M6z2Q0fO6EYPo7wHOWRT2kUlccrlWv2%2BDoQDWX4MUMvvYTmCG5XKmwI%2BvZfJW%2FiQLwjkiiFfzRlJxKLbdndmt7i7oMJvZLO6byGXLvkl8tYTig3uRCfVphzWdF0uc82eGvpZXkP17WqfEdY9JfPqZeGCCaGuVObp6CL%2Bz5T%2FKNf&X-Amz-Signature=ccfac6df5004fd0058014d67deafd322d3e30cbf38d6f4c0486ce65790e4f326&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLT4FYU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5yiuc2dRBWp49Ti7GatuajOGrBwS7YPBKedsdr35VWQIgIsUGAOOABO8MIP5YVhcU7aqQbfnGhCdd0g8vFQ5RpXoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPaOX1b08WxyuWdnTCrcA5FlAie2boLSqAEeRKyhC4IIiGU504yXvhKMDGHdiMJrX9f7x9ltRq68tCRMqwPi4HyrZY6gRRPPkmrHLiDo%2B58yx9sD5XORhbth3lYWMWXdOvtVB0fbvKFPEye2I2mH17KBdVBojWZmgiRqO8xIUqjBxI2gNgCOwqSJ8YhQ4y1n02mT82oeFbBdvNkIetNDSOmqT9s%2FCLWY9AywzE6NmJ5Gdkt6oH6s4gIelr%2BpnFdt3pajoTTmRVDzSCB%2Fqfd41n4Astj%2Fj1lPbx4id8hqqF6M1sbWHPCmeN92FvpP%2BSgaWxLMMKGqoHRJNsZAtxFYSIhT09tLz0QRaPcvMDPmb%2FWLGS2ZtvUwp0QpRLUi2PRgViX8F%2FeJ6iRy0Jyps2WnQaD0%2BHPT4li72XdGlmKPOfLaW0%2BSAPveiLgh%2F9SmaqZivnbFvDZvj9eWYDP1J6vJtQ7%2FFOYXBxpOxXzg0NPm8sPoxWWIYBIMhIQaCmvZaIytzhEyh%2FnbD%2FqkL46Ip32eKlpk%2BUTe7K%2BBEXdop1RVSInydZe%2FOYa%2BNtFdtYpwAe7d1x%2BFS7R3mqPlvQfSLWTZ%2FzdGvG4xbKaMcXkYteFqBR7mQjKnX2z%2BmIiq%2FikF4AEsTJPUFCuNTecCUPteMOvpzL8GOqUBl%2BjdofTGfiTEV24wrOZI6xK6xQfdoV5%2F9esSq1FGgKkCA9OOVPrOfn0%2FGwtiOc6P3vXi%2Fl0Ak8R6ME2g80OafHPcPLn8jzw2K%2BQ4EhsLnk4fAePrk5YGITMcZ6aZ4yBf0Oo9r8O2DKbkUP3cw%2BOFBND8iSCb46kTcqmtAQKCqI5eArMALTjM6ZAnZ%2Bh8ltZaUpa2Rq%2BspojZDlv5CUX29Aw8KNPH&X-Amz-Signature=cf916983abee042829186c715fb3562fe85e52d7429f67676d5b040749b7d291&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVJ622R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlwZi%2FUslKj0tvw7REWyvannv3WHi1GjfgmTak2q4GfgIgGXdsTeGTdFrTJeo5Y3yzPvg7%2F%2FaQGPe0lUXfdfNEmrkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNYI8hsNmF2pDPhadSrcA5kVDWAVrG3Vmp1cMyx41GwVW0I16ew1lNSTvV0DR6jkdDDRey%2Bb8xDoO8DeLojIZLkW1FtvtW%2FY7ijH28c2igfpcNI7FHuol29fLbKQ8fq4WxPhdte8M8VofV7J6ACghVJepzZ%2BQgi4nXt6OSAxgj5k9oSsr9dOTcxg5G223Vfy0i2%2FNQ%2FhHItBcSo7smKfzaUyVMltTHdtgHfNgLLkGt6T42%2FB3okMlO%2FGRuQpLu%2B%2BOcQBFd2RvFbtS2gf1Oy5pRBMgfGVth8sow3HyqSRbh9d4EJ3KKa72Bbsm595jIAuaLJOEuTI%2FWhkxs4WwhIPNQ6fx%2BfBJghIet7GWLlU2kwCJEcXtE12ZrQ3QDlAtU47QQd6OZ%2B6JpdhDmcxjgYv8MnuJn3tP%2BmS5tF0A5cXvxHyz4X0kBB4qvRxoqI6ubK3UP5o8LOvBn4OBIFEczUXH4fQ%2BxXyFMAg3XSf7ulAG4Y63Ji3Gg4D%2FIcNp%2B4Iv4IwKliTtnbzcFIUK7QbK1ok6rzhbQe0QnXFZEs9JZeDqwUyC%2BzUYnzbCNOpm4xuh30%2Fc4slYLLSl6pjEowfQ45WmyNytyHC7sY%2FvPjGnaUNJinuR3KIbltfD5Doot9tkpeWScKNizUd3SLb%2BhizMObpzL8GOqUBL2AD6IlHngvx0ryRpZWba%2BdIjalAto2U0a%2F7TfaxRy9HtkhLMAkycoVjeCX7xfONvCynY7j3P8BmqICH4zf%2BVqDvGSNcCRD%2F0saOlK5cYwyAoGf2LNnzlPx2KC%2FfWRuZKXZvehBmXWerA7BM5FiLDkqsSIogTlwfRW30oSWrpybKfFKwNigCkyf3vdw%2FigM6ZdVPvRJhFARyiOSXxw0iNH3KSJWs&X-Amz-Signature=34426ab304fd2cf3c4d5378419f92cd641a888231ab8b2e975591926a5e479b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU5VYW6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FOg593lCM0pYL75JWOqCzDbmf3utOfWtTARUroKi7wAiBOrFTbQY3h6bWDmW6IH5MPQGAKgV089Mrh2tgpGlxCPSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMG%2BLhT0gFEE3jY5H1KtwDCxaV7zvtO3CP51yVtvkPqH%2FX%2F2tDHw%2FBErTr%2BRSvbtHWUzw7qbs1CIfesmt9fTChtQi%2B2HKLUjdqlKPxyTIvefcUZuNo0oYYaS362u8JiAgli4PYtv4qhaRe3Pp2di%2FrrA9G8jKApE08oi86EoJQcHHvaHg5CdLw%2FLbeXJ4QwmAdUUqHmwYtAZgYrFmxxkqOsF%2FH%2FCCxc3UJ0mD9%2B4%2F03yP3AoQ2nJx%2FST2lpb59GHigIgxJ0ZvaN7bI7XhDfLtI99HRYME6%2Fpg8yKzN0vmSvS%2F2EfMsbVNNsZ2IkYplFOi6%2By74rtZeABx%2BB0t5gnybh%2B8rjqHsjqSXATT4i8EvhTG4zpGddY427rs4uzkRIAoVqTCMNMDUO%2Byuo%2FCK7oum2yzqxBfqeiHFbhSPvXPmqN%2FV%2BXrXFpyrgeP1Yu981jn%2FkYEKRDCMwdvavyYT6Hoa%2FZ%2BPw%2Bax2jFHYiaqf3a0sQbnrjJOISP3eEL%2B%2FXSQn1dnPU0DjZHs7s1aU8z0p0IOdHQrcLPwl%2F7DDOe7i8d8GI7%2F%2FmEvBLa4PKt1HsHmK0aX5UQZ2lqAQzx4CbQ60gdi3YtVgr%2FHUSRiNdqWcPawtNG6sLdcb%2B1tpym0OlzdQlgZ2siVG9zdgF7feAMw2unMvwY6pgGvW0w7EuBZUpepR2cjPTFCjCYCrTbFbqRtNLiBw6oKrII7bI8L0M6z2Q0fO6EYPo7wHOWRT2kUlccrlWv2%2BDoQDWX4MUMvvYTmCG5XKmwI%2BvZfJW%2FiQLwjkiiFfzRlJxKLbdndmt7i7oMJvZLO6byGXLvkl8tYTig3uRCfVphzWdF0uc82eGvpZXkP17WqfEdY9JfPqZeGCCaGuVObp6CL%2Bz5T%2FKNf&X-Amz-Signature=543d9562a3c5a50633692d2acf0b12dced5d44ec772fb1a8333a59d73e37712c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
