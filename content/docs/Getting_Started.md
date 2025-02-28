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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTURA3GT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCNtW%2Bo05ANwclcT2vLbg5uRjIwgOUJ6FuYDgCgQCCbMQIhAJbzJWh6ax0lTg5H3dh%2FCWXmrypdXA54nXpNJQGAr0AhKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEJEx13KoNhgMiR5cq3AMvTyhcWGbSpfzRIGY2qqIXmU13x9WIMUWXErPth9frHPMyXRma7uAjVSs3RsqxLzxDriYiJloXJPyA7XWc7P7w3YcGYhz2uYEBTY8U7%2F4MHPH8%2FPa81Uqr8VR%2BYPQV7a2srtnfnkITtI2%2FLGBR4Hdu4RCEviHW5RxJ94K8MQ3pF4%2BEjiwZyyBS9iS%2B%2Fe09BzUyQk6UEvWRJtBKhlbnXNOsvbkjq%2Bnu4mh7ML9pjDJg95kEfoCD7dRCtAoxKJ5VjB7jWuoUqCgQc6IDBEsqku2a55tawaHoZBnVC8WksDNTX8KrDekA1SdDl2qGTdzAjjYoa1AgNosG7Lg2J8kiFOidNG1R46aFsgJt%2BuK6h1QSkRODcEa%2Bf61DYmn8O8cWsSOHUxXx11F3ESeDQ%2FhlmrvsmHMu27oejdoCxneCknsO0dbMcV7YWcvl0HHejIQ2wtrMYWXxW3yMkvKzAVFgVAhYx71qm99I%2FK1KTPO6bmH%2Fv3VlwRJNzowU9iRzhqwZpO8A2P1sm8ziEDIKD4M4PWGdRKBCCyUXc%2FUQDcBhaN2xkXrsfnkSjnopsTU7u5IQWLB%2FN4%2BOqP9q3Jz09G48Gt7ocptRTKkXGSSFhcs4EEcEqmpTTSi2BrdpZMhUzDCtsYa%2BBjqkAQIwVrWMSpfF3jAD%2B990B4D6oSkvk9GqkiIFIeAF3Yalp3FJIyS2tvyxFJN7iw1CFq9TwzZxOVcV1t1d7OlTNInl7zJmHCZmGU0cjbcqb6Av9QJF2bSHOou44nYCZQ2VyMZj%2BOQBJYxdGjk0OzBtXLx4okH2j0PwfoyIv7l0z5gl8mYBAVX5%2Far2vJ6WvQu1dXAtyjd0b8trEXiZYi8I%2Btp5wTOR&X-Amz-Signature=8abffc1b16b8555a719c219e4e16240c6a86475e7cc3dd3cf2868c0dcf920ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTURA3GT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCNtW%2Bo05ANwclcT2vLbg5uRjIwgOUJ6FuYDgCgQCCbMQIhAJbzJWh6ax0lTg5H3dh%2FCWXmrypdXA54nXpNJQGAr0AhKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEJEx13KoNhgMiR5cq3AMvTyhcWGbSpfzRIGY2qqIXmU13x9WIMUWXErPth9frHPMyXRma7uAjVSs3RsqxLzxDriYiJloXJPyA7XWc7P7w3YcGYhz2uYEBTY8U7%2F4MHPH8%2FPa81Uqr8VR%2BYPQV7a2srtnfnkITtI2%2FLGBR4Hdu4RCEviHW5RxJ94K8MQ3pF4%2BEjiwZyyBS9iS%2B%2Fe09BzUyQk6UEvWRJtBKhlbnXNOsvbkjq%2Bnu4mh7ML9pjDJg95kEfoCD7dRCtAoxKJ5VjB7jWuoUqCgQc6IDBEsqku2a55tawaHoZBnVC8WksDNTX8KrDekA1SdDl2qGTdzAjjYoa1AgNosG7Lg2J8kiFOidNG1R46aFsgJt%2BuK6h1QSkRODcEa%2Bf61DYmn8O8cWsSOHUxXx11F3ESeDQ%2FhlmrvsmHMu27oejdoCxneCknsO0dbMcV7YWcvl0HHejIQ2wtrMYWXxW3yMkvKzAVFgVAhYx71qm99I%2FK1KTPO6bmH%2Fv3VlwRJNzowU9iRzhqwZpO8A2P1sm8ziEDIKD4M4PWGdRKBCCyUXc%2FUQDcBhaN2xkXrsfnkSjnopsTU7u5IQWLB%2FN4%2BOqP9q3Jz09G48Gt7ocptRTKkXGSSFhcs4EEcEqmpTTSi2BrdpZMhUzDCtsYa%2BBjqkAQIwVrWMSpfF3jAD%2B990B4D6oSkvk9GqkiIFIeAF3Yalp3FJIyS2tvyxFJN7iw1CFq9TwzZxOVcV1t1d7OlTNInl7zJmHCZmGU0cjbcqb6Av9QJF2bSHOou44nYCZQ2VyMZj%2BOQBJYxdGjk0OzBtXLx4okH2j0PwfoyIv7l0z5gl8mYBAVX5%2Far2vJ6WvQu1dXAtyjd0b8trEXiZYi8I%2Btp5wTOR&X-Amz-Signature=43efeff2198bba49a2808c1f1dde5e4c7ac10786dcfaac63f22d3d7653663ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA35TPGC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDm0NdCBok4s3GXWwlSSGXPZHy1C07tbUzpXBBbEr0UHgIhAL3fESZwW4wuCX3jXlyZozMlSwLjK2i9iYUnSUJpyQuhKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIyw%2BuAOV3QEY4kmoq3APS1ckPAb7B%2FQwB4NiMqrjuXUBSEmn5Vt6aN1pRa6gqSlLkVBNBmMgBZpaMDx6JqNt8RH9jgS2MfcGqxb6%2BsEoJtSTpg%2BjOJ0TSQkDUIdlk3MGYXaZ5kDtwMAjpHdSEXhLwTZ13MkcPSEn3SvBxb655WpVAMs4TdieTTK6wnHuyaXCjX7ECyUdjPkrINZfxj6TSovssI2n%2FSCAY7q%2B0%2FutdzQqYEuAkFLIgyOffwrVcQZIwxeabpQKDun6IUhX2NOHA%2BeO%2Fr1dddBUrFdacfRPLLZL0V6xXIZIALQUhVY7szmhxZyHDup1AfaHmC8zMG4IrbPAgTp45jZVqktEVFBANMPO7kyuVhcnjTALeHoX4eZfGJqiXQWfegRGFHIhWjNnyfk7%2FGzwKNI9WWkmxFptoGc290bmCzZ6G25GiSH9AUmjlO6C9tKRtT0e8a5%2F7T3p6ZM1ZQWSXBdiG20CA%2FFkqXlRiegxTUNcpK7%2Bo8CNwVYe3%2BV7umJQ5Eh8x%2FXB6KJRjpD6wMF8QT52EJQABki1nDZQ6XTGgCZHNQVQGvHLxbM16C0hcfhl1tsLCEfiRqT5hfU09IhMygDfdugLphGhRHkmlRHSe1L2uozW%2F9bpa%2Bqqwn1gb88P2r3CkfTCGsYa%2BBjqkASrc0xFZSo%2FjY%2BIjVe47YeJZnIB%2BTme1NaDXoPfqrRKiBWVetPnwY0U5aq%2FXv8L9hTN7KmTZohrlqHMs3DggR7eByFSHV8uTty7mvsbc4D%2BMPb1tP%2FwcYgsdYNIvnCmtpsIYucVEEfbzZrV77vxt7HjsH%2BPJRIph0Qr1lKvXis6QNYMCSirqnxTDyhpWCZp9fC7L0J8XL%2Fpz8X7mnZ5P9BBMy7i6&X-Amz-Signature=a14c1d249620e3f730f20a0fa916a9122326d9f47c14240467bef4ff41345d90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUROCTL5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCQuqdLib5yWDWDgiYG3TsCBjY%2Bt6IwtrWzUcZ4FYNlUwIhAMzmqywr4rjkCS9vye7m%2B9%2B4HNct43iv%2BTyRwedudElIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FrdM9vhe5DAZhzRUq3APyB2xYt%2FU14yp6Y5037bjbTe9LFGL1yM%2B%2BniCEhozx5cnY%2Bwbukc127H91zx0h0mmPjKbRS13UMbSvA774OoWRd1OnOExfzwpU2QMtWMVICUl3RWafE%2BVdBTJT78TRmLOJ0J4UKJYY8NMTb31oqpsg82LIL1BmEaest%2BJk2J80%2F3LXyToc8anCmBrUCg0dRHZ47GVVo%2FA%2BOZA5oMkxsoNysyEAINqY6alefl3neozI%2Bhwx7js2h3Nh%2BSrQ7sEwjVpnsN2CancwMvV84Zc%2B4IB3YFDtLIIRH75UaQbxVbupXtkDpbmlXlPLUME2Iq3vGR6%2BYvu2JADDqiILuqyFMuLyjTus4ttbPFOZHqwNbQJxoA0lbIRwbuKgWv6DAhRYjbgn0%2FKMR8gpIgffaTl1i8%2FfXgl1aSNDaq6rtpaSmNTFftmnsZD%2BVUEJdS%2Bw1%2FqSswJ8nrzH%2BG7parGPbhwvEI4QkZ4%2BTKMpqXGnmkcYJPzCPmXjGTLvmdP9DDvsVappZsAPh9RF4rnlvY9nZCL877PRAzS66l86lpc4gnRGlaqAhi2P19L5NLhnDmHncAQaUYUPdtqYGhFf6TEDYCww%2Bfa2YWGbwP1FF6%2FLPLVuRi4mJPxWKXtRv%2F7EMrDxUDDBsYa%2BBjqkAXUa%2BqGY%2BavUEeUn14yyCBdRjY0bg31LTui0U38WYKZUy1xg86qjLwuwJxQmdZUUrM6oh1HGpv0PD57ATV4NxG1zoD1fFErplLA4XqaF2CyG7RaKjE2JOXpsMshfCxFxdbOScQBu6BWDbc7PK48aFpW8SRwZwvF%2BKQQJC%2Bd8SrNtmwFgJinpLmUftkCqfmMf0aB%2FiQasKi1fisKB4TnysWd3TNTw&X-Amz-Signature=f54bcffc916f6f125cc56f429601ecb8573d1ef8438f51eff1946b05b82bb42d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTURA3GT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCNtW%2Bo05ANwclcT2vLbg5uRjIwgOUJ6FuYDgCgQCCbMQIhAJbzJWh6ax0lTg5H3dh%2FCWXmrypdXA54nXpNJQGAr0AhKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEJEx13KoNhgMiR5cq3AMvTyhcWGbSpfzRIGY2qqIXmU13x9WIMUWXErPth9frHPMyXRma7uAjVSs3RsqxLzxDriYiJloXJPyA7XWc7P7w3YcGYhz2uYEBTY8U7%2F4MHPH8%2FPa81Uqr8VR%2BYPQV7a2srtnfnkITtI2%2FLGBR4Hdu4RCEviHW5RxJ94K8MQ3pF4%2BEjiwZyyBS9iS%2B%2Fe09BzUyQk6UEvWRJtBKhlbnXNOsvbkjq%2Bnu4mh7ML9pjDJg95kEfoCD7dRCtAoxKJ5VjB7jWuoUqCgQc6IDBEsqku2a55tawaHoZBnVC8WksDNTX8KrDekA1SdDl2qGTdzAjjYoa1AgNosG7Lg2J8kiFOidNG1R46aFsgJt%2BuK6h1QSkRODcEa%2Bf61DYmn8O8cWsSOHUxXx11F3ESeDQ%2FhlmrvsmHMu27oejdoCxneCknsO0dbMcV7YWcvl0HHejIQ2wtrMYWXxW3yMkvKzAVFgVAhYx71qm99I%2FK1KTPO6bmH%2Fv3VlwRJNzowU9iRzhqwZpO8A2P1sm8ziEDIKD4M4PWGdRKBCCyUXc%2FUQDcBhaN2xkXrsfnkSjnopsTU7u5IQWLB%2FN4%2BOqP9q3Jz09G48Gt7ocptRTKkXGSSFhcs4EEcEqmpTTSi2BrdpZMhUzDCtsYa%2BBjqkAQIwVrWMSpfF3jAD%2B990B4D6oSkvk9GqkiIFIeAF3Yalp3FJIyS2tvyxFJN7iw1CFq9TwzZxOVcV1t1d7OlTNInl7zJmHCZmGU0cjbcqb6Av9QJF2bSHOou44nYCZQ2VyMZj%2BOQBJYxdGjk0OzBtXLx4okH2j0PwfoyIv7l0z5gl8mYBAVX5%2Far2vJ6WvQu1dXAtyjd0b8trEXiZYi8I%2Btp5wTOR&X-Amz-Signature=ce4342d2004e8042aceaf127384beb26a0df8f87d091ce70a26f3db15ce56635&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
