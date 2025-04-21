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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNBDKGH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDZ%2Fq1Xq1SQNoqUnulNZ4E3l49vmCGTpUeN2fjdg5ap6gIhAO1BXYS1HI4qvvQ%2FJ%2BCXr46XZe3knrILSeZdRkFNXvpzKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbhKtcqH7xwxDt%2Bmkq3APblcaRuI%2FNZEYOLUggnIaFAY%2BRuYDs%2BrL8OZLHl90zDfvkdzYPotcp%2Bnywv5YwMIX%2FGeDcxFYfdgYZzLFOkvHbEXNRHip5kCIrWuwemg%2FBGVHzTniIiovpPesQW0RVqc5HttP8CnBydbtT575K3IoVzu562pJBuR5YtHANxfLey6%2F8ODAarn%2FY5W0XxlYxT7BGyUASjYnVwAvYhLqT%2Fe1%2F0Yz1mhwaFH%2B31HzoLUa4uK0cXC4i28rV1JAYCw7IG1NhVeCsM8V%2B1Q5L4WV9Z9msDEYk4Q4yS7qKMAQEnS21nxz%2BbG0VfRUT1o8lHXIEi4Lh9llrBbrdXCcgAtMY1Wa%2BFmT0b6jVElJk8uh4OCU%2BzhL8k611pVz5mrGML7%2BIK4pN7zFK%2BOTTb9KW2PjFuqmi0VZihJhKACtxOm74vfjU6jiJlpJzNlHjZA6NfoViIx3KSa4eT0CpiZ%2FROChgezvzsVIfC5sgIlnn1wGo1bCvUThdKY8rEibs3Hun3fQGOnHfff2dSX532whk895lRNSfiF40SwsOxcdkQpil0MMyh5B3iNlH1NwaVyz2V02gjSY8BlEoefdryq9l8pLG1JDxBiF%2FTftBEZC7iMWpjb3kuLh5lz8j7sLv%2F52eXTD2hpvABjqkAWjLCCQQT5X6oOoaOHyOtO2mtz5H48ZsFG%2BxxyfmmTzVdXrrUhgs3WlT%2BbVWA9gkeigmOtFnMuTf7KERFpe0p%2F46dwRgxpRiI28owMXXQkLtFX%2BtG2bEoIW7MAzXo%2Bm312iasm0qR1VDLJtXvTAQufLS57tii8EBB4Wu5prPvwRzSqkXc2%2FfVHPLEIm81B%2F6Ys3cFh6xHR9hAAt6%2BxQabCcx%2FfX6&X-Amz-Signature=2a233c1db33679fbd45286dcdf6605f57ae85c0dbcfdda21426130835f974c21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNBDKGH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDZ%2Fq1Xq1SQNoqUnulNZ4E3l49vmCGTpUeN2fjdg5ap6gIhAO1BXYS1HI4qvvQ%2FJ%2BCXr46XZe3knrILSeZdRkFNXvpzKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbhKtcqH7xwxDt%2Bmkq3APblcaRuI%2FNZEYOLUggnIaFAY%2BRuYDs%2BrL8OZLHl90zDfvkdzYPotcp%2Bnywv5YwMIX%2FGeDcxFYfdgYZzLFOkvHbEXNRHip5kCIrWuwemg%2FBGVHzTniIiovpPesQW0RVqc5HttP8CnBydbtT575K3IoVzu562pJBuR5YtHANxfLey6%2F8ODAarn%2FY5W0XxlYxT7BGyUASjYnVwAvYhLqT%2Fe1%2F0Yz1mhwaFH%2B31HzoLUa4uK0cXC4i28rV1JAYCw7IG1NhVeCsM8V%2B1Q5L4WV9Z9msDEYk4Q4yS7qKMAQEnS21nxz%2BbG0VfRUT1o8lHXIEi4Lh9llrBbrdXCcgAtMY1Wa%2BFmT0b6jVElJk8uh4OCU%2BzhL8k611pVz5mrGML7%2BIK4pN7zFK%2BOTTb9KW2PjFuqmi0VZihJhKACtxOm74vfjU6jiJlpJzNlHjZA6NfoViIx3KSa4eT0CpiZ%2FROChgezvzsVIfC5sgIlnn1wGo1bCvUThdKY8rEibs3Hun3fQGOnHfff2dSX532whk895lRNSfiF40SwsOxcdkQpil0MMyh5B3iNlH1NwaVyz2V02gjSY8BlEoefdryq9l8pLG1JDxBiF%2FTftBEZC7iMWpjb3kuLh5lz8j7sLv%2F52eXTD2hpvABjqkAWjLCCQQT5X6oOoaOHyOtO2mtz5H48ZsFG%2BxxyfmmTzVdXrrUhgs3WlT%2BbVWA9gkeigmOtFnMuTf7KERFpe0p%2F46dwRgxpRiI28owMXXQkLtFX%2BtG2bEoIW7MAzXo%2Bm312iasm0qR1VDLJtXvTAQufLS57tii8EBB4Wu5prPvwRzSqkXc2%2FfVHPLEIm81B%2F6Ys3cFh6xHR9hAAt6%2BxQabCcx%2FfX6&X-Amz-Signature=de9c9c293696384b30906a19696995dc9da9cfbdc507825bc0343468e5906b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M3Z5TA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD9TbMcjwk7jVp4rQPfF04PflNtz6jAe2tZf%2FKnWQgk1gIhAL6fRVzaAEJIYTdMmx3Ig%2BeCkUZ1py%2BO4DiF1%2BvCIbacKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpioGI72rCxD9XvbYq3APZcSZlPRYhMoLw%2BiLrhDA3MPtRZXqnm5kn4yJCwaZtH62tLVQj85uVAgZzNP9CcoCdyFosHNyLz54dopKUdNmAMMDFGvRqEUmMxKPdwv6G1q%2FVyUqYzhs4TeQWgkJAMv8QnFKOwozTmjK8NTMsg4CXvN70TCN%2F%2By7rZEpscEl%2FmxpOnovd5GXoM%2BNDnUJ76a5NZzS7M5O1ttUxe8hTOTioguWQ9NS6pk8wAuot3ornonOLKrkiplBT%2FRs%2BZLhOENP%2BePbn7zu0Ahmr6j9JAX7gs13XgACxxgU79VjBg%2Bh1RBxIS8K6bWSXHm55hl%2FEV4Nb0yF7nltb1hrgtQvMUW6%2FU6El5lHrJsgWhJcBLjSPdmfIE905sMJhw7r5u6QQxXIcybkf2vSjwErzLOSevnBbgA0yxEtcD4%2B9FQ%2BNG9xNk013yZull7HqNl4D0zCd%2FFGGJusJVnpi3qKhPt2hy2uIMUutYvkPqM9FXJzelJSxTugN7X86lmBwoZyhh74oJABoWJpA3Xxukq9tE6ChueXFu34VsV6Lvw%2BxE9H%2BBVUSkkbtADCt63qQR8oC1i11UWJxpP1mfXMTX3pwjz%2B7aAgEOWbWgDKQqRmDwUizG7CXIWzlJneaxNltT4pyqDCXh5vABjqkAYxQ7tJ6UAuW%2BHErhxzcFHJIneVXF70PGuwrgT1JIQYf2gHYJS3s8g680sw25gZyD4Beb2PncQd7Qd2r5%2BfFh7ydLE7sZSVjdZKxy1BKTocwheZUAeP1OdXCehjHg09w4Bdb301kOjG4Yk3Gk0d8Vo0G0vc0rZMPD77Kd%2Bd0AhrW4SJF61elm90oTUhIXA0Hd%2FHw64HiHJ%2B5RAL8xvtnbkuFlELt&X-Amz-Signature=c1ecc8795d61f3c10759b03a358348d7b2d65f44755e995c22733a5a91abda0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2S3X6I%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDi3zDeWkopuTyucOCNEoxIaZ6irwxZzf5OMIPqAx9gyAIgIDTMtj1XRuFFgv40hpCA0e8C16uCNfKhbO4gWJuilhwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzZE%2BkPoQ0WlEoEQircAwG52wObp2gvP7uTT3sO8c1t8cgfCAtZGxOUNWabNhazF5gd1hk80m5O5LnECAR1KjMiLWeV%2Brz1zMHPo2VIqtOx0YzqoYiQNCW8vxdrgPezjvpot1lL2ZU4G1QHPBKLCtBnf11bbiBaTmqDhSlBIHN37rQtgT9fh%2Bfow%2BSFIuYy5EdqiECPYcXaqur1X1j8jN1pk6xdut3gYXFBi68xY4GV7sJI%2BZGnlgP06q%2BBsDLwG8YrfzyShDxR1uzT9Vg87RnRUC4%2F1gggZb81ggJc2gxj0vvXe1TYQQpGgadKzrEshn7i7MBb2fnvfkY7xTjckEd%2BRkIPFCJnOkExOAzccL7SN%2BTcA1J7u6Kr27B2CsChhVTCiT1%2BL3ik96qoDkgRCkod9Ruy4NS0v7e7xlRmbjRvNMXOPOpu9MN4fedVv4f%2FbapzqnZM%2BqhPkRG%2Bc3ltWmrZ6jX8TKz00j72hfJWXRidtS03TozopECRzUog5KcGa%2BqNAes4E34JjLnrZBX3j3oxBEzvJZOx4onD0kGxD62Y6SHKeaf4ku7dZB54WkW3Z8%2BYVPNB9I6oPnxUdsi0qZLIII7k5av09jTd%2BPJcasQw6xeyZ2ppmfyFQiohtJ23nujDLIoCjlG7exA%2BMJaHm8AGOqUBhbAyKLIK7oTai32ZvaPO%2F%2BVMzupGKdbpmWy0y86VUlSnZT%2BCzPyU0LXwSLVYstU31vT%2BfY50hdrL45PzCD2neJa9acHawus6KKSCLOJozp7zuGX8BxJQ%2B6V842zL01Y4S8S%2FmezyzslSYfbDVIeRECCKGEYY2zjZwPHzvjHMxpzihJCgMlji%2FtWcJvnq940kvPF2wlYHjj271KNlOKWw7baq%2FeBc&X-Amz-Signature=b939a024646338573c2cbb2e87d095054291c63f61234b8e5c45a0fecdb355dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNBDKGH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDZ%2Fq1Xq1SQNoqUnulNZ4E3l49vmCGTpUeN2fjdg5ap6gIhAO1BXYS1HI4qvvQ%2FJ%2BCXr46XZe3knrILSeZdRkFNXvpzKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbhKtcqH7xwxDt%2Bmkq3APblcaRuI%2FNZEYOLUggnIaFAY%2BRuYDs%2BrL8OZLHl90zDfvkdzYPotcp%2Bnywv5YwMIX%2FGeDcxFYfdgYZzLFOkvHbEXNRHip5kCIrWuwemg%2FBGVHzTniIiovpPesQW0RVqc5HttP8CnBydbtT575K3IoVzu562pJBuR5YtHANxfLey6%2F8ODAarn%2FY5W0XxlYxT7BGyUASjYnVwAvYhLqT%2Fe1%2F0Yz1mhwaFH%2B31HzoLUa4uK0cXC4i28rV1JAYCw7IG1NhVeCsM8V%2B1Q5L4WV9Z9msDEYk4Q4yS7qKMAQEnS21nxz%2BbG0VfRUT1o8lHXIEi4Lh9llrBbrdXCcgAtMY1Wa%2BFmT0b6jVElJk8uh4OCU%2BzhL8k611pVz5mrGML7%2BIK4pN7zFK%2BOTTb9KW2PjFuqmi0VZihJhKACtxOm74vfjU6jiJlpJzNlHjZA6NfoViIx3KSa4eT0CpiZ%2FROChgezvzsVIfC5sgIlnn1wGo1bCvUThdKY8rEibs3Hun3fQGOnHfff2dSX532whk895lRNSfiF40SwsOxcdkQpil0MMyh5B3iNlH1NwaVyz2V02gjSY8BlEoefdryq9l8pLG1JDxBiF%2FTftBEZC7iMWpjb3kuLh5lz8j7sLv%2F52eXTD2hpvABjqkAWjLCCQQT5X6oOoaOHyOtO2mtz5H48ZsFG%2BxxyfmmTzVdXrrUhgs3WlT%2BbVWA9gkeigmOtFnMuTf7KERFpe0p%2F46dwRgxpRiI28owMXXQkLtFX%2BtG2bEoIW7MAzXo%2Bm312iasm0qR1VDLJtXvTAQufLS57tii8EBB4Wu5prPvwRzSqkXc2%2FfVHPLEIm81B%2F6Ys3cFh6xHR9hAAt6%2BxQabCcx%2FfX6&X-Amz-Signature=91ef6471d571f28512c238df77fdfbf4a84a58466edff3d0923d5a83f4cd394d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
