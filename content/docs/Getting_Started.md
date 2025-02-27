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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NZ66SK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDy51J1TMswU%2FdOClSaeXaLKNJ6v%2BfaPh0AeiVZtVKTTAIgROIr2vMbXZ3tePA0HyloGA0zgpcwMXz6TwnUy%2B5WFwMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHR3POcqrLdCU%2B5FDCrcA6ej%2FTCKlmXyYFwcbuv9%2F%2BhqPsZGLRfVHUFPnB%2BoeNshuFDqAsSdt%2BZQe%2FHmb06NMwasE00q4ce1jwHRWfaxON1599xKNnouPB6ONwbzt8GvDkUCE1rpk%2BhgMxJvB1R89DTJsbxh8OaBszJbuewa2LZzm7rdmKO%2FZ3AuzJOnd2qnNb18UrFd69PyI7a2zSKJwREksSWP6rLzNSwpwNMdB8vK1ugOBc%2FZXdVe49fFj1iidynpT5XZyGOFJ1iOV2kvy%2BgPCVvS89BQEmPoVioHAB%2B6cWK4Ju5UP7SeqIc8zNiG%2BO%2BPRLj%2FC8NxhAIvwfDJBAUkp8%2F7bt%2FjtRIGf48Qni3iMX9M7YXyqQYU7YHfXBYKRYrvEPN6NMvR5S50l6fcxpvKdOqMs%2B%2BwL4yN38bVyKbn3g5JspgWa9QVzcw2GdWGrbr3%2FtBlqep4k0WH17Za0ZDffs%2B65dMVOw9kWxbLZ1O%2FIQOHPXeVhXZOmuvIby0XwFqu0QJVHnTZ2sHLnb8gKTNaf%2BgoVb4wU%2B1SV73vW61mByO0xqcjuTbVmSzTt8kIa1S6zXIRPon%2Bpu%2B2BIJ8n07IZ1E1HlNJw%2BFYz%2FYzDCWDZT%2BAqvvWtftS7JKAf%2BiVVUt9vw8w3RaT%2Bc2sMLetgb4GOqUBW6wWhlNjIJlbAxgKCWkBBSTlY9fcOYP3rBy1DKfJFuWb5q6nmQ06vgp2I5X8CFrtl%2FQbiD3M%2Flzg1xGMMMQrVH1XBbXTZQV6FYifDGilNR1zk5EcRSUlMQYOWKFC2fZBBf6sPy83P5nmAZfZCb3WXrjq0zEnpkfFs8V7fN%2FfGCeuIFmN2DMtGAhlI7E6pQxap7F4KRK90YSnyUGxLx%2Bhc9krYOJO&X-Amz-Signature=b75a3a5e16166fbef57acf47e5f37fbbb3aacc4c527e260c905abb1cc8bf7801&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NZ66SK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDy51J1TMswU%2FdOClSaeXaLKNJ6v%2BfaPh0AeiVZtVKTTAIgROIr2vMbXZ3tePA0HyloGA0zgpcwMXz6TwnUy%2B5WFwMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHR3POcqrLdCU%2B5FDCrcA6ej%2FTCKlmXyYFwcbuv9%2F%2BhqPsZGLRfVHUFPnB%2BoeNshuFDqAsSdt%2BZQe%2FHmb06NMwasE00q4ce1jwHRWfaxON1599xKNnouPB6ONwbzt8GvDkUCE1rpk%2BhgMxJvB1R89DTJsbxh8OaBszJbuewa2LZzm7rdmKO%2FZ3AuzJOnd2qnNb18UrFd69PyI7a2zSKJwREksSWP6rLzNSwpwNMdB8vK1ugOBc%2FZXdVe49fFj1iidynpT5XZyGOFJ1iOV2kvy%2BgPCVvS89BQEmPoVioHAB%2B6cWK4Ju5UP7SeqIc8zNiG%2BO%2BPRLj%2FC8NxhAIvwfDJBAUkp8%2F7bt%2FjtRIGf48Qni3iMX9M7YXyqQYU7YHfXBYKRYrvEPN6NMvR5S50l6fcxpvKdOqMs%2B%2BwL4yN38bVyKbn3g5JspgWa9QVzcw2GdWGrbr3%2FtBlqep4k0WH17Za0ZDffs%2B65dMVOw9kWxbLZ1O%2FIQOHPXeVhXZOmuvIby0XwFqu0QJVHnTZ2sHLnb8gKTNaf%2BgoVb4wU%2B1SV73vW61mByO0xqcjuTbVmSzTt8kIa1S6zXIRPon%2Bpu%2B2BIJ8n07IZ1E1HlNJw%2BFYz%2FYzDCWDZT%2BAqvvWtftS7JKAf%2BiVVUt9vw8w3RaT%2Bc2sMLetgb4GOqUBW6wWhlNjIJlbAxgKCWkBBSTlY9fcOYP3rBy1DKfJFuWb5q6nmQ06vgp2I5X8CFrtl%2FQbiD3M%2Flzg1xGMMMQrVH1XBbXTZQV6FYifDGilNR1zk5EcRSUlMQYOWKFC2fZBBf6sPy83P5nmAZfZCb3WXrjq0zEnpkfFs8V7fN%2FfGCeuIFmN2DMtGAhlI7E6pQxap7F4KRK90YSnyUGxLx%2Bhc9krYOJO&X-Amz-Signature=9b9f0dc218e14a5a63124093bd76b099d0c536c00e487705439f07d8e511dee9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELLXUNC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDe0SNiamzEJXK35ZBmHpJfoelBWZJ%2BdCwf8TU8kkJR5gIge4VI0WK2E6AT4L9USXqtXLaTAmYDpuyCUHaXkTavinoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBolkxrgUQA1jeUKdCrcA3ZI7UqTBDHGeXQXSMef4K%2Fz37QNFdj5BsA4jI3gNHceCBHd95J8yTMSip4bhEz9E1E0TUF6ieWyWgrt3JTvWbMJrZRccZQrNdE3WosxxfeR%2FGsdsY%2ByKuh49jXAl37QZeDJMbJV5jl0h0q6pSoTMr8aDsy2EZtjBoWs3hqU%2B2vhnbuykCIzaddjJOmips9KdEjyAJxlyMZL%2B0ca5ywg3uAyy3OYyKZgQTPZY7l9dS6cW%2BXgpjc0bqkSxrcuuIUqitGu0VNSGPTpK%2BLgAIu6D%2FH7YDo%2B8sOMkrzBBDfUFivRal3qLGl2G%2BoV0EbROoMTMe%2BaVT3RDgCxQQW0z7ZZ7qJQK8l3va7%2BawVxDrzbRJuBrfa5U3fUWbYpBcaehMaSybv3mno4CQrG1L5UuYv07tDn6bdbKemrSHelZNOTF6LuTr780wNZ8qN3Obl6z1b6BD2%2BOfAT%2FqjKT%2B1xtbdhhWygXEXDQeREPzqyIXW6bisRggyW8vJRIz8KcH3%2FVluapzC%2FrsIQTNym1BJg92EbDGGBGdx1FLTxtw4u77eCuiQkvov%2BCPAz7A%2FHQPiwyylwUDPmcWmgOVR%2BWfI3rcX7avqXXBCWyIGnxED082tfx3KYb5T%2F%2B2rwxS0DlzMHMOKtgb4GOqUBGeB%2BjcLNoeuGnK8hD91kEv6vzTNqwQ9MWtS5dEg5frKBwZoiIO8%2FrOy6ToWfz9O7c8Dq4A1JT%2FJiCNrkybY7xMqJHEFSXYOKkaknA3GaPsB6yo4QWm1%2BN%2FFQSg8qc4%2FsR7GuB%2F%2BESJinK2Gq%2FxtqHgBHFCy8nIADCKSxKTNttsH8vBygCjI0VWOkKvUmUnMQkYvHmWD5wtLJhW27uCHV6aSDavwC&X-Amz-Signature=ea5fb652aa083a640fec78a418cd760d31216acbde153ee886489308e9fc39d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHJ2UAL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDcBL%2F%2F%2B0kHpzWqydt9xC99drsWJ19%2BIz0xnXon7w6R4QIhALcsSGBxj6j4yDQEA92UMJTuVKKppZUXRDjfQA%2F7W3OgKv8DCHUQABoMNjM3NDIzMTgzODA1Igx6BUw7CITSRbSwXJIq3ANgoHjX4HudBsA8V%2F8K%2Fuyj7Q2NXtGq9YdzAYoxP3aqlKMdPSFKpCgrGEjxsr0yJ5jm1YSIbAH7Tej%2FbcsDDeyl8vBjqjuWZQTfXJb742nS7XwWldWHHbvXmbUSgYhr%2FCdhO8SuwIxDidmc1JblEM%2BQUJro6qZXvin%2F8AL0hqX3qOqOdZvJRWz4Lomhhm0vRNp452T759SUU547LMF81qvb69uxqzf65u9UNarM8D2rRa5qfMHkOtpakM%2Fn7T5frWTllu4VYC%2FfDshCmulrUoEXw029coCghxKdiu%2FLrCzotr3LMyzOew9YmQsQf%2B3vEPshAM%2FxtmxrgAdtCXVVCif%2F6mkQ5aru%2Bb5hDAWt5l1Lnwyetf936n3017MRTaFwuKapOxtxMmIVuQB1MAyh8hRCGPwu%2Fl2eYPWBCwVDpeut5pGRDkoNGtv7v4i1%2Bb6KuFe9%2Fi%2F%2BRi15LQe0Ct8aYxNTO1lo5BtWUJcL6ZqUxUAzLZB4cj%2BA6dKZU4O0dwvIm0AjihZdAY8c1IA2D02sQA2t2VShiywyCq1dHcGHk7DCsb1YxASSbUrbKxFoc1zyu%2FTsZk6pz9K6OtNzFX1Xqd1V02%2BjxmP5Ca%2BlurKs2LUG5bIOp%2BkGPaWq635fSTDCrYG%2BBjqkAfDwGSzi3zY1EzNbz32x9q7%2BYBWrQ%2Fs7wsHs999xL%2FPLiRckjnu%2BF1BOL3ZPtzvby%2B3BwDNQ3Twfct3wXo4IAgk4JGqOo6Rg%2B01yoGyiEX6jc%2FTzUGubiIUIm7K0QU3XZzXhb3ePR%2BE0nOiYkezmIznTR5IonIifPn4P9YwX9XTHmksJTwdV%2BLgW1Aebi%2BUsAPh7FrF549hzPW70sehbeTwOPZSE&X-Amz-Signature=9bd23dad3579d7bc1ad5786786c6ba9d45e39e7b63a02f4ee9de0be5ef2fefcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NZ66SK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDy51J1TMswU%2FdOClSaeXaLKNJ6v%2BfaPh0AeiVZtVKTTAIgROIr2vMbXZ3tePA0HyloGA0zgpcwMXz6TwnUy%2B5WFwMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHR3POcqrLdCU%2B5FDCrcA6ej%2FTCKlmXyYFwcbuv9%2F%2BhqPsZGLRfVHUFPnB%2BoeNshuFDqAsSdt%2BZQe%2FHmb06NMwasE00q4ce1jwHRWfaxON1599xKNnouPB6ONwbzt8GvDkUCE1rpk%2BhgMxJvB1R89DTJsbxh8OaBszJbuewa2LZzm7rdmKO%2FZ3AuzJOnd2qnNb18UrFd69PyI7a2zSKJwREksSWP6rLzNSwpwNMdB8vK1ugOBc%2FZXdVe49fFj1iidynpT5XZyGOFJ1iOV2kvy%2BgPCVvS89BQEmPoVioHAB%2B6cWK4Ju5UP7SeqIc8zNiG%2BO%2BPRLj%2FC8NxhAIvwfDJBAUkp8%2F7bt%2FjtRIGf48Qni3iMX9M7YXyqQYU7YHfXBYKRYrvEPN6NMvR5S50l6fcxpvKdOqMs%2B%2BwL4yN38bVyKbn3g5JspgWa9QVzcw2GdWGrbr3%2FtBlqep4k0WH17Za0ZDffs%2B65dMVOw9kWxbLZ1O%2FIQOHPXeVhXZOmuvIby0XwFqu0QJVHnTZ2sHLnb8gKTNaf%2BgoVb4wU%2B1SV73vW61mByO0xqcjuTbVmSzTt8kIa1S6zXIRPon%2Bpu%2B2BIJ8n07IZ1E1HlNJw%2BFYz%2FYzDCWDZT%2BAqvvWtftS7JKAf%2BiVVUt9vw8w3RaT%2Bc2sMLetgb4GOqUBW6wWhlNjIJlbAxgKCWkBBSTlY9fcOYP3rBy1DKfJFuWb5q6nmQ06vgp2I5X8CFrtl%2FQbiD3M%2Flzg1xGMMMQrVH1XBbXTZQV6FYifDGilNR1zk5EcRSUlMQYOWKFC2fZBBf6sPy83P5nmAZfZCb3WXrjq0zEnpkfFs8V7fN%2FfGCeuIFmN2DMtGAhlI7E6pQxap7F4KRK90YSnyUGxLx%2Bhc9krYOJO&X-Amz-Signature=9fdbf6b33d3d605fc393a32f0284dee89d0e336d5cb1c0c10b903f4b4aa5612a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
