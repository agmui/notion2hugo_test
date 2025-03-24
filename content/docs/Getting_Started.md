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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PNDHRSL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7o5Z8d6u87h45fbIJiRUMAXq8t%2FI7So5xnI%2BSsxBYbgIgUlP2X1GWGuCE8tl7WQvZJz9sBDRgPw7Ido8v0e9ypRQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrboBd5rOmIVdCiSrcA2Gezh%2FIWHY0WWgBDz5F2W4p9zpNTHhj%2BebMZaPlK%2BlXU8jnE9JRgHo1%2Bi78vMyz%2BnzPphPVOvPspV%2F%2BSnp2l%2FGOqOAppTERT7M7ScgFN5kCYy7dvxgDgQe%2FPS8RdeloeUIGkY9htXBIEPlil43W%2FfOlWAumiZbkvVdZmezPzVimAfKumJ0hLoUvQ5UNhiXr9alm5rQMjzwnfksUpEF4Wo8%2FBashGXcza4ptGZjqxkAX5FcLgRWUMajdwa7FiP559bG%2BBO41ygVOiPBwwJG9QILIkwuHbJ7OCDODSUmVMXzTQ2bbqMcMsy8JHObRYQytCe2rxO1P%2BoHfMTcsJQz%2B02wU1SJfUG2Vwyx71QMl3bmRTtW2TqpDCGnXzQtegk0PRIQtPBko378S573bYCU0Hkw2KfCVUIwca8tgtGF1Uj%2FUHW58DY3EXbHr6%2Bg%2B4jNPGfJecwYa6YAWOEV%2BnwEvbGSnTVCL6sV0RivxqQOmX1EGH6id%2BDEkDBa1d9Gfw42FmRLe3u%2Bp%2BY9RmfHxVFMMEYlP4vkYayLOx8o3BwsLdP5DiI80k67UFmfN9xMnd3cyGCI1OMdjfRenrSixNivuVB4S5YxpmgMzXJfDopx%2Ft2%2FXOX5CXC6mzBEJZvRPMJ6Sh78GOqUBd2ZxHD8CgqqnAL9eh4i6NDKRd8JcwY%2F6k7jR1kEK%2FledfjZ4aaGaf%2BeWQ%2FEChyBcWl1XrzV6VxshllOAFEms5YOqYDFjBm%2BftbfXG4tvY%2BBl9iQHeR8uTAVfqOrgBcNngKeB8lgfjqPC1tf%2Bk%2FXhMETo7Z6Vlxk%2F0Gh6SMwL5TP9qeDXA59rqX0s4dixpiAn%2FPuadXggBBxmxONCoxLRmR8p%2Btlk&X-Amz-Signature=07e5bc3f3ef0207c39542c748db2f310cb48f9d082af36813d3b41295795812e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PNDHRSL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7o5Z8d6u87h45fbIJiRUMAXq8t%2FI7So5xnI%2BSsxBYbgIgUlP2X1GWGuCE8tl7WQvZJz9sBDRgPw7Ido8v0e9ypRQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrboBd5rOmIVdCiSrcA2Gezh%2FIWHY0WWgBDz5F2W4p9zpNTHhj%2BebMZaPlK%2BlXU8jnE9JRgHo1%2Bi78vMyz%2BnzPphPVOvPspV%2F%2BSnp2l%2FGOqOAppTERT7M7ScgFN5kCYy7dvxgDgQe%2FPS8RdeloeUIGkY9htXBIEPlil43W%2FfOlWAumiZbkvVdZmezPzVimAfKumJ0hLoUvQ5UNhiXr9alm5rQMjzwnfksUpEF4Wo8%2FBashGXcza4ptGZjqxkAX5FcLgRWUMajdwa7FiP559bG%2BBO41ygVOiPBwwJG9QILIkwuHbJ7OCDODSUmVMXzTQ2bbqMcMsy8JHObRYQytCe2rxO1P%2BoHfMTcsJQz%2B02wU1SJfUG2Vwyx71QMl3bmRTtW2TqpDCGnXzQtegk0PRIQtPBko378S573bYCU0Hkw2KfCVUIwca8tgtGF1Uj%2FUHW58DY3EXbHr6%2Bg%2B4jNPGfJecwYa6YAWOEV%2BnwEvbGSnTVCL6sV0RivxqQOmX1EGH6id%2BDEkDBa1d9Gfw42FmRLe3u%2Bp%2BY9RmfHxVFMMEYlP4vkYayLOx8o3BwsLdP5DiI80k67UFmfN9xMnd3cyGCI1OMdjfRenrSixNivuVB4S5YxpmgMzXJfDopx%2Ft2%2FXOX5CXC6mzBEJZvRPMJ6Sh78GOqUBd2ZxHD8CgqqnAL9eh4i6NDKRd8JcwY%2F6k7jR1kEK%2FledfjZ4aaGaf%2BeWQ%2FEChyBcWl1XrzV6VxshllOAFEms5YOqYDFjBm%2BftbfXG4tvY%2BBl9iQHeR8uTAVfqOrgBcNngKeB8lgfjqPC1tf%2Bk%2FXhMETo7Z6Vlxk%2F0Gh6SMwL5TP9qeDXA59rqX0s4dixpiAn%2FPuadXggBBxmxONCoxLRmR8p%2Btlk&X-Amz-Signature=fcfb8a901dd2eb130ef69ae87355208eabae930dc0fb9f3f08de1dabf038f6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS5FB4BM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv6Da%2F4tZMfqqQ%2FqsWyF1hVq2HaX%2FFj8g01%2FPDG%2FOFUwIgUXQqRNzXgxUk1vwSi3VSKtQ6I5U5aOgWTpczObKqJyQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmAWAXu2WgSAWSKiyrcA7dXY8R1puLCD8bETUQOVJ%2FKURlDGdkDMoFP88eUTD31zu%2BL5vDkEdJW6op88uXNdSgJ1vIQUI7sX3QWaPpNwNXdbdsA8Fc6tuYv0SxqhNlGDSFEICe%2FLdPZDGyuLeKZ9bKqX7eMRxQ5A9KehER8HGeFRdeYRkwvID4PdQvQ%2B9hGqsmkQQh%2FTGZ4%2BpdxcERMI3UHPiRXtG0i6t1q90SdRnOeMO4UJJTMu2Waqr1VMVpTsCq9cYXisKUAKchDfelmLZ14P7wz5%2FXX8TczwYBaq1dniQzlcPLi3iLWZBDJ24Ay1qPB2pbJOZvdRUxw3uQl%2BIGZSRnk%2FDXUwQ9NPgqJF1vacM7%2B5m4SchPXp6he3J0m%2F%2BGhg1jxgSF%2BlCBuwXJJt%2FIQpHhJ78mNwBpC9DUbtm5cqyZ2FMRVDjrzC%2FUYFl0uWrnXGIrwRmkydFOYQ%2BRFRKl%2BH1S5wcp0JcrlBLAUhQ9AwxbpxrrCNH1W4Yne2X%2FdrGi6gsmYuFbvEgqnQUP7QUVYHEoP0jH9PQkH%2BPyy8J%2FdpxZ5QmjVrgT%2FyhQGvEDFWiFyUvcYOQEjscpskJNL0BlES6rWmZNHuco9auJB9f9bq8nRdmaIQb1%2Bm7qJjXldUd2U%2BgKh2%2BrJM%2BJeMJSSh78GOqUB9GaJRe59Hmo873VflODIxvmTbPoGZokwQ57qz0DAXyDTJibFkmdqC7BOeJlgEzvrOLYpx5ultxgQzdQiYQN8vLK3d7tov1YjboiCnU3BeFS%2B4aRldxfOQrjKh9jSdRc67ci2CyplI1k8CX39vWpS5tFiusc5pd%2BtOWNjFL%2FAXB219R3LBnlNL3R8Mylxpv3oMmfIrNzmPWowfslpZIfNoYn5gYtD&X-Amz-Signature=0c3dfb9e21309517c602264897648ec095956edd3bb6b11c0bf80abee13fa1cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL27Y5YF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0fNnjgESK8vU0glG9O3RwdAozd%2FjZ%2FYbYEoxsupn7UAIhAOc26pFsBlcikYF7LhUWcGyHe4Vn8rUC92%2B2xvxhUjdFKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhPxCuuxx8YkMXz94q3AMD5xQ75rMgtqo%2FEvsQMcgqxqjey%2FYiAMD%2FxtbmjdYYVYiQ3VDQDPFCSUxRI04xqEX8iQxD3U63pGru56TSiaA5ObzBowHhfwLJOAs5%2BjLqPH8GKc6BrOwyNnj%2F0mM4LlyP5%2FF8efoadLOZ28jODKECUPg%2BUl0B9YLesMoonYFGijlZEoZoQdcHNLH%2F%2F7oD%2B9%2F29yRwft2LKze0zNHt8kbWv9BYnsRUU1D1RVP0jXQchM2IvP52eYfcummaexA6ZjKNFYDON3rJpjoY9QEmUUeU0Os32UIZDD6kbrXSm%2FLP55VXTVX%2F2XZ6zvQ%2F8BAdFEp%2BfTfQxnHoA3Tj6vA%2B8XPLiwBtzQOlOohf5oCXQA1VNCGIkymdhibePjFjVHRqX6WqxcsKtZcdMRnYyorFY2ngprbIE9B8r50mLvK5SqYgknMCMcjMetDv7%2F0v5%2BZVxNBVXtW53MLslWR9ITWmY9%2F%2FCZYHqqGxlxUCp43aMqtrq0OhGqzX%2FsAK4GmyLs6Zjn98LfCrq8%2B8yx9FzGJhqb84kXnFjbKFJimiNCMPSfyvVDKCvxsH8h2zN1tegLof0DEoUo24Qga0I01j9%2FC1Y%2BFe2DIHKIxaBLGIKIz%2F0FKppeO5oTypPf1drsnUuDDbkoe%2FBjqkAaS8bxggdkn2lqS89CFHyJ1xM0WRFO6bxA8wvVw9egcKxwhpts6dRd6GwCZCm1aulZvoVUygYJSAmsirzNh3wiThkeMfEQhtv1xo4zgdedLqocm5ZD5kXf3chET7tF0GS%2FAdKFgdyHHTF5iI09MbShknHJkWhItyDmrz5WGKJfKre2xffwzX1j6XDAgKHQjYoOvgcNfqHQWw2V%2Fe4y3Y%2Fcmrq4Lx&X-Amz-Signature=e39f8e94876a3d2f327d724e645bc5d039bca90aaa45a17c2d7c39d23c7b4112&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PNDHRSL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7o5Z8d6u87h45fbIJiRUMAXq8t%2FI7So5xnI%2BSsxBYbgIgUlP2X1GWGuCE8tl7WQvZJz9sBDRgPw7Ido8v0e9ypRQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwrboBd5rOmIVdCiSrcA2Gezh%2FIWHY0WWgBDz5F2W4p9zpNTHhj%2BebMZaPlK%2BlXU8jnE9JRgHo1%2Bi78vMyz%2BnzPphPVOvPspV%2F%2BSnp2l%2FGOqOAppTERT7M7ScgFN5kCYy7dvxgDgQe%2FPS8RdeloeUIGkY9htXBIEPlil43W%2FfOlWAumiZbkvVdZmezPzVimAfKumJ0hLoUvQ5UNhiXr9alm5rQMjzwnfksUpEF4Wo8%2FBashGXcza4ptGZjqxkAX5FcLgRWUMajdwa7FiP559bG%2BBO41ygVOiPBwwJG9QILIkwuHbJ7OCDODSUmVMXzTQ2bbqMcMsy8JHObRYQytCe2rxO1P%2BoHfMTcsJQz%2B02wU1SJfUG2Vwyx71QMl3bmRTtW2TqpDCGnXzQtegk0PRIQtPBko378S573bYCU0Hkw2KfCVUIwca8tgtGF1Uj%2FUHW58DY3EXbHr6%2Bg%2B4jNPGfJecwYa6YAWOEV%2BnwEvbGSnTVCL6sV0RivxqQOmX1EGH6id%2BDEkDBa1d9Gfw42FmRLe3u%2Bp%2BY9RmfHxVFMMEYlP4vkYayLOx8o3BwsLdP5DiI80k67UFmfN9xMnd3cyGCI1OMdjfRenrSixNivuVB4S5YxpmgMzXJfDopx%2Ft2%2FXOX5CXC6mzBEJZvRPMJ6Sh78GOqUBd2ZxHD8CgqqnAL9eh4i6NDKRd8JcwY%2F6k7jR1kEK%2FledfjZ4aaGaf%2BeWQ%2FEChyBcWl1XrzV6VxshllOAFEms5YOqYDFjBm%2BftbfXG4tvY%2BBl9iQHeR8uTAVfqOrgBcNngKeB8lgfjqPC1tf%2Bk%2FXhMETo7Z6Vlxk%2F0Gh6SMwL5TP9qeDXA59rqX0s4dixpiAn%2FPuadXggBBxmxONCoxLRmR8p%2Btlk&X-Amz-Signature=df2ad5d318e115fe9c2b6f32376e4cc60bcc7609bbeaf6190b9b471e5c765f60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
