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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMNU7LYF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDRWeO5bR6jvCWY3%2FVJQEJTDuNCgHk6xsU3Dc7RY0G5qwIgFKKzVv35JmHB51vK0NfaJvAkrr8Dbw%2F2DO3A71mcvLoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGFwyyiFWojwpOBSvSrcA8lw4paCOKpRExIngnIPHlhb1Xs%2FTWOv1dd1CewTfMNLobx4JzI8dF%2FmhhhCU7TVS%2Ba101wwd6pJAzcuoT88ib5wB3NCX%2FuFaMEr2P7AfXNfFrnmVE1E9wA1HeuCGQeh6uWVD8M44HQlQmYtot%2BWmkIr3XqV8y99%2Bfqp%2FrTxE%2BQ8gdr1FHiSIgA38lSwDpyYZM4kxQXuHtc2XDmcUBnm0tWG42sR2ClDFHk6YiGkCiMrr%2Fzf9tQSO9N9ucdxXPZljPA%2FQllqHQOdsbXQP4j68LJZjtv4sLVgEBGl4sqfwzQ6x7AWvW1vBsKOE64CcUGagv1%2FFz5f3lWKJNlErnXaDLjeno3CK6xSLT0dLDxzR%2Fm3MuL5q3o%2FoK%2B%2B9sF8GoK%2BU1yay8THM4Mgt5Byor0u3%2BRaxv7seaUQKwl97TfeBHGQkDCRBHYme7zaoFumazDVK19%2BqQLCOwDy5qmTIyLmm07mx2lrwIPt7QeiO%2B5xKw0xQV6nd2O2JYwbKiEyzwQZp%2FTt9UVXnOh1hUxJ%2FmswHXc4WhZXz%2Fug3nBf7jWBWW9NIM9snwP83l66R8zk%2FMuvvRCfd7neftXYQqL0Z5YDJMDKFhezKIC5piWJ5D4pepEnPLNu8QUlVTICP19sMMeC9L0GOqUBGfhp%2Fuh%2B8UaEZbFHtoLfVSgqWs5kFbVZWDsTEj3IJQ3ANtVXlHPUaitljP9oHaYKLKkp14Gl2h93RD6vdZ9%2BHHBuMeDEEzL6I%2FuIAuBgBAdHoJiX63GIY%2Bk%2ByoScyGalkql1EjSyfDemKfagTbB2AEH24tQthJyU5eXYgr6yqy%2FWld3IttkdbeiI6n4wZha%2FRcqGon7ofgzM%2FmDtnCKRk9xnKOnD&X-Amz-Signature=83d4f74068dd9a67ab3227483d2417a6e0813c7784d8f804c8caa716ee609cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMNU7LYF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDRWeO5bR6jvCWY3%2FVJQEJTDuNCgHk6xsU3Dc7RY0G5qwIgFKKzVv35JmHB51vK0NfaJvAkrr8Dbw%2F2DO3A71mcvLoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGFwyyiFWojwpOBSvSrcA8lw4paCOKpRExIngnIPHlhb1Xs%2FTWOv1dd1CewTfMNLobx4JzI8dF%2FmhhhCU7TVS%2Ba101wwd6pJAzcuoT88ib5wB3NCX%2FuFaMEr2P7AfXNfFrnmVE1E9wA1HeuCGQeh6uWVD8M44HQlQmYtot%2BWmkIr3XqV8y99%2Bfqp%2FrTxE%2BQ8gdr1FHiSIgA38lSwDpyYZM4kxQXuHtc2XDmcUBnm0tWG42sR2ClDFHk6YiGkCiMrr%2Fzf9tQSO9N9ucdxXPZljPA%2FQllqHQOdsbXQP4j68LJZjtv4sLVgEBGl4sqfwzQ6x7AWvW1vBsKOE64CcUGagv1%2FFz5f3lWKJNlErnXaDLjeno3CK6xSLT0dLDxzR%2Fm3MuL5q3o%2FoK%2B%2B9sF8GoK%2BU1yay8THM4Mgt5Byor0u3%2BRaxv7seaUQKwl97TfeBHGQkDCRBHYme7zaoFumazDVK19%2BqQLCOwDy5qmTIyLmm07mx2lrwIPt7QeiO%2B5xKw0xQV6nd2O2JYwbKiEyzwQZp%2FTt9UVXnOh1hUxJ%2FmswHXc4WhZXz%2Fug3nBf7jWBWW9NIM9snwP83l66R8zk%2FMuvvRCfd7neftXYQqL0Z5YDJMDKFhezKIC5piWJ5D4pepEnPLNu8QUlVTICP19sMMeC9L0GOqUBGfhp%2Fuh%2B8UaEZbFHtoLfVSgqWs5kFbVZWDsTEj3IJQ3ANtVXlHPUaitljP9oHaYKLKkp14Gl2h93RD6vdZ9%2BHHBuMeDEEzL6I%2FuIAuBgBAdHoJiX63GIY%2Bk%2ByoScyGalkql1EjSyfDemKfagTbB2AEH24tQthJyU5eXYgr6yqy%2FWld3IttkdbeiI6n4wZha%2FRcqGon7ofgzM%2FmDtnCKRk9xnKOnD&X-Amz-Signature=4cc333b5c13d6cef2f5f2d083ef6c362a138f1a9ed557991db497781623e5fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2LQNF4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDBvcdhsRfzMSQcj2cQ0i2rBPPic5DOrRe31GFXeJMh2QIhALoOCJFqpyqzb3lM1UGl3hJprc2au%2B9zT4G1s73MUa9%2BKv8DCDwQABoMNjM3NDIzMTgzODA1Igye8dInQ1LEQOT%2FM64q3AMk7xvhalVIBgsBbnTljpk9FqQbmQFeAH5p0CFANsR6ZB5VpgMua2JCWBrzrQhO82X9jBrw%2FysABgMpA5lple%2BDPNIIW95SQUsZsXONLeON%2FyUgNAOFPM2Lxewzn0juOByeDT9xJqLlj%2B3sK%2BJE0xKybSaAGSGKkKls%2FxhBHRoheMjC2lstg1m0yO50AAuvDlmLMI0Tj2R%2FI2SYUmRWGd7UT0lWreYWS09wCwYqgbW3yQviX9wP5UAQI2lwnN4HjRdAwRETLjhSdg9Qod6ecv9g53xRnyzXGJsT%2FuF3Txg3ZEUnfU92YCvVBmDeXHSwaGovI8Lh90V5TmYVVXuQlo%2FPRxQwAucG7tZYDfttrEw5FWYVoCaUho0r3WThbqGojsJHurhkl8sPnchJK3c%2BgB506%2BVDI5N2VKBIETWdSv3FMoCM7hD3L2LnnRaWJkcNB4zNxuEt9wRUX0kSEuVCcrpDIsFCsqfdWWbtUxQVa6zUWop9rtzAKiyhKhCe91RwnPlBzo6lAAxXlcP4H9R8U1v869PXgyd12K%2Bk6pA3V3i8W2YiyCfU7Sddg3r8FzhqnTMA9U24JblfJm8vylzsmGgF%2BduCGXvV1pGwaX%2FsaJHxifzGplGrNN%2FJTrUC%2FDCf1fS9BjqkAQjVKk5bAY5CfbwHbDcUSuvGMtdVH1sCI8q50a%2B36uqJgankWY1gVPpC2SJfJKCai9YqCD%2FP60pI4o%2Ful0DEKIIy4Rje0MLlAdprTHSkzJYSYRbQEmxegFXI2ihoDAgdTSewKvJVCprqW8ioOHACqNZ9lmoC1kxDIlrM5mNz%2BWyMJkAsze9%2FfdgIXhWWZ177%2By7GkiY%2BntuZp5hFtN1SjY%2BY%2F7MP&X-Amz-Signature=4815092908ff4151270281c0bc2036453fa976875b05a82c182cc7a4d2307d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAWPVCG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCzHo8hRczGQZIUmgCNsJdyQsQIRDYHvcYymofybizOCQIhAOiKuiAdA1ymhZ3LLHHYPN6orxP1UbOhMsDzgtOhj%2B8NKv8DCDkQABoMNjM3NDIzMTgzODA1IgyV2WnyO7EsqVjZvyoq3AM4yYFqHhaPYEi2jxVUUXUhtoV%2F%2F0Yh1Y7mLiB65c9G%2FxEZP6S8oZsYAofbKThGigzV1hN0lgE%2FgPDr2Zb52FZHvGpZRAGk03HgI%2BYJ0sJrg2nnb3ezwnGQzNskU93JI3lKANTwMM4o4ikXEUEa46FqEjbNkRrFIeZt0KtSU%2BFC6sQ7h%2BNBhhrhhvRPekXehHnRje8r7ITtDdmAVPNT8x%2BzVKL8OyAYtUlxMdyd8Ec0MYbRXfDPFb%2FZWWHPuwUkt0GA8mC1wEjXiWf%2B37UJ%2FSTfTC1gHEqACdhXKomdJWlq9jRTphpboT4wpp%2FGj1HJGV9l6PL66NZZLWasR2tw%2FL17wtIOUYqkjeWGU3Obd827seMgEmV5cbMIOtOZKA%2Fwe%2B5Dcig5qLqGrpAjwENdMnOnvMUe9KQb1k3M89SyqAS4uSW%2FEDE7w0HjOktMrE6kymH8jTPl1yMRYUvN4PaH9Kal0GUD%2FBSuaR97oDzoSXqaNheoWwwgDHTYEUWYSn5Yy0hdCshtgqndsjRkoxIvJVYG7bYzj5G12P5eolJqd1uDC7XV8Vi8MiQd70JGbbY7%2FG1bAMLk3WVpSgKxZTxSfWEAwOEKCf97N4Wt%2Fc5bp2A%2F1M4ORpWXx2SWQLx0EzCSg%2FS9BjqkAQAxWrmZvm1w9%2Bn%2FwkCy2IezA3ti42z5dN5RLQDV2fYcg1zzV3MPqDVWQAaUwzt3UHwv%2FRenIYxUyowFtv6KuPeck05txQuoxVK7DgpTK598WeXxQRAyJ0yz88ca0hhp1Q8ODrFXqv3PTq%2Fuaj93PLvxbNF2nnLly8Hhorin6z9ckYNPvehXXanjvCuMnwh3RBb6rOhUg0SKn7A9rpXolTBdXRFM&X-Amz-Signature=d6b0933d0747edf99fe45c88f4967d561204a153efecd05a6ad079b875184ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMNU7LYF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDRWeO5bR6jvCWY3%2FVJQEJTDuNCgHk6xsU3Dc7RY0G5qwIgFKKzVv35JmHB51vK0NfaJvAkrr8Dbw%2F2DO3A71mcvLoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGFwyyiFWojwpOBSvSrcA8lw4paCOKpRExIngnIPHlhb1Xs%2FTWOv1dd1CewTfMNLobx4JzI8dF%2FmhhhCU7TVS%2Ba101wwd6pJAzcuoT88ib5wB3NCX%2FuFaMEr2P7AfXNfFrnmVE1E9wA1HeuCGQeh6uWVD8M44HQlQmYtot%2BWmkIr3XqV8y99%2Bfqp%2FrTxE%2BQ8gdr1FHiSIgA38lSwDpyYZM4kxQXuHtc2XDmcUBnm0tWG42sR2ClDFHk6YiGkCiMrr%2Fzf9tQSO9N9ucdxXPZljPA%2FQllqHQOdsbXQP4j68LJZjtv4sLVgEBGl4sqfwzQ6x7AWvW1vBsKOE64CcUGagv1%2FFz5f3lWKJNlErnXaDLjeno3CK6xSLT0dLDxzR%2Fm3MuL5q3o%2FoK%2B%2B9sF8GoK%2BU1yay8THM4Mgt5Byor0u3%2BRaxv7seaUQKwl97TfeBHGQkDCRBHYme7zaoFumazDVK19%2BqQLCOwDy5qmTIyLmm07mx2lrwIPt7QeiO%2B5xKw0xQV6nd2O2JYwbKiEyzwQZp%2FTt9UVXnOh1hUxJ%2FmswHXc4WhZXz%2Fug3nBf7jWBWW9NIM9snwP83l66R8zk%2FMuvvRCfd7neftXYQqL0Z5YDJMDKFhezKIC5piWJ5D4pepEnPLNu8QUlVTICP19sMMeC9L0GOqUBGfhp%2Fuh%2B8UaEZbFHtoLfVSgqWs5kFbVZWDsTEj3IJQ3ANtVXlHPUaitljP9oHaYKLKkp14Gl2h93RD6vdZ9%2BHHBuMeDEEzL6I%2FuIAuBgBAdHoJiX63GIY%2Bk%2ByoScyGalkql1EjSyfDemKfagTbB2AEH24tQthJyU5eXYgr6yqy%2FWld3IttkdbeiI6n4wZha%2FRcqGon7ofgzM%2FmDtnCKRk9xnKOnD&X-Amz-Signature=fddb0ac31a87b7dc01fc32e34f39937af9e52d6cbbbac6852fba21fd31d97d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
