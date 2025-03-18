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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFIJD4D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGD1V3gBMt5tFJX9x8jZBKmuabLesn9yLMaomjNv2CRAiEAl34EMzOwS7P7vWFaJ74x3VNSYHhIRT7vY9ADEGMJs1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH7A0Ty3limciOLXOircA%2BK0BzDtAwRvo5XWHWSBaiKdNBYcIs6%2FuUY1v76rpJKRlnbij5F015B7SMN8GvOE9cIIguGEYU7RHuacn8Xthd%2FoRDfeZCjsTAF0mUx9156rYz2LVJeLG660eqEWdpVNW06TSW2tV58UBefCm%2FSEormL9XuMVZc5Dxx49PSqh0Yr1Vo1o6Wz6IqzTzUWQfhiIE4mQrn1mjGvbCthu7prc9eYTijP7EhmTt0apSHitiEO5ZwfV%2BKbZhCQTMyGn7Lm36JK8LgrjFHyq2CHbwTknUllr0HToEgXx2nRJwSErijyaV%2FwNDb7VWuBK%2FhXax3AOaVmIsIAefDhOVxwcpb3io07qUGJrT3WXV6%2Bhk4xR7TKJqG3dbK4Mw4gh1rZ8McE5HCBRrstkv7otlrrsF%2FFcRGiZTj7QiX67xwM%2BxDqkjNejVHMLT795tQSQ%2Fo%2BD0UlqBJ0LE7YioY6qUl40bygCkFypMVO%2Fja46uO7%2FwQ89T%2FjWyXJTiUsKdTLzgl87MeHL%2B0trROq4HtJKuzPMfASsbnwuAmTySmGV71JUPvDh3uUCmBFlhMtv%2FUPlUnLLEDcs6VyxAxSUOHxn%2BSuwCwoqpGE10vUkfOb1%2Bj%2FwGdcU9ODhyugvqFv1QqQoiXrMPr15L4GOqUB21vRaogQqI9e9J%2Fe78uvT6VwLPXA9WhYvPeoanUa0BMge3HppcGHQTHElAhJTGG5CpzE48KWESn68%2BjXm6eexzCBjNZidZpXi7RVZJ%2FpHxZ0nxOGwXlInHtXckbMWUUlaSZrzM7zn2yBeY%2Fd0LO7QvoQW0kGWD3%2Bx%2FKa8yin%2FJuxQU0BAYbqKeJbZSr0jekE%2BW%2BCPvbtENYcHulMnCxD%2BVlUqQjQ&X-Amz-Signature=fe05d32a48a37a34fa9187d5dbec20fc6dacb763eaf728014c9f5376c91428fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFIJD4D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGD1V3gBMt5tFJX9x8jZBKmuabLesn9yLMaomjNv2CRAiEAl34EMzOwS7P7vWFaJ74x3VNSYHhIRT7vY9ADEGMJs1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH7A0Ty3limciOLXOircA%2BK0BzDtAwRvo5XWHWSBaiKdNBYcIs6%2FuUY1v76rpJKRlnbij5F015B7SMN8GvOE9cIIguGEYU7RHuacn8Xthd%2FoRDfeZCjsTAF0mUx9156rYz2LVJeLG660eqEWdpVNW06TSW2tV58UBefCm%2FSEormL9XuMVZc5Dxx49PSqh0Yr1Vo1o6Wz6IqzTzUWQfhiIE4mQrn1mjGvbCthu7prc9eYTijP7EhmTt0apSHitiEO5ZwfV%2BKbZhCQTMyGn7Lm36JK8LgrjFHyq2CHbwTknUllr0HToEgXx2nRJwSErijyaV%2FwNDb7VWuBK%2FhXax3AOaVmIsIAefDhOVxwcpb3io07qUGJrT3WXV6%2Bhk4xR7TKJqG3dbK4Mw4gh1rZ8McE5HCBRrstkv7otlrrsF%2FFcRGiZTj7QiX67xwM%2BxDqkjNejVHMLT795tQSQ%2Fo%2BD0UlqBJ0LE7YioY6qUl40bygCkFypMVO%2Fja46uO7%2FwQ89T%2FjWyXJTiUsKdTLzgl87MeHL%2B0trROq4HtJKuzPMfASsbnwuAmTySmGV71JUPvDh3uUCmBFlhMtv%2FUPlUnLLEDcs6VyxAxSUOHxn%2BSuwCwoqpGE10vUkfOb1%2Bj%2FwGdcU9ODhyugvqFv1QqQoiXrMPr15L4GOqUB21vRaogQqI9e9J%2Fe78uvT6VwLPXA9WhYvPeoanUa0BMge3HppcGHQTHElAhJTGG5CpzE48KWESn68%2BjXm6eexzCBjNZidZpXi7RVZJ%2FpHxZ0nxOGwXlInHtXckbMWUUlaSZrzM7zn2yBeY%2Fd0LO7QvoQW0kGWD3%2Bx%2FKa8yin%2FJuxQU0BAYbqKeJbZSr0jekE%2BW%2BCPvbtENYcHulMnCxD%2BVlUqQjQ&X-Amz-Signature=272efcad88a004c3687b835ae2290abb83aa1f31b543eafbf0f13dc43f551c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64KXPY5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDDwxhPF03MhfISHmSBBQT2BaI8tFIdvrOgtt%2F1BC0P%2FAiBomonkDV1KV%2BjU23NjJsyhnf7cPGvYRF5XkyVcpp%2F2ZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgMwGlkt8YQLMbU4bKtwDe9BxtgIny63mCQC7jv7qNwxU1NlpMIMlFWGPFCLPCKuqM6fkJhKeWygLzw%2BXt%2BqX9%2FUu3TFwahJzexOcRzx24MmsBOipBovrqkt1JYn1GxWj%2FIZi7kcqutTFqeBPKT9fp0%2Fx5AuoCAq1C7AyHBeyJrxZFmX4NZt%2Fw0NFNHF8Qu3OY5dathpj9Pw2%2Bhqcr8zgiiT2FKqsCE%2BxwSjcHPqCrK0Zys3BAcbMiTne9k8JuQwcjJWeq9CWETvH9VuZ3XokcxN6EsylskkJs2GeJSwIxbgoAfg0GIb9nFzZc%2BDyzibJzBqL%2B76z7QqKYlm6ERx5iNHmCsD1hL%2BnGYPkKHjpxTo1mZR5IjCz2AjT87hi%2FKmM8NQHCDjhrzKQEbt5JbTDXeeKPKMQl4nYgowc5NVtB6j%2FfnmKIaN4UEHrqOTRWuR2mSqve3pApKmtFQWkOV5lAMtnUeLp%2FaMk4MEbRnfAWeV9iYk66YKFx7hPJrQMp7KHRIwjopsHUV5gUeTuYS7ni0ycPQbdAVdlwgAJiFNplMUf5Y8F55Wh868Ic%2B1sDeN2OIhqtOkiR2aleGFflMJY2cmPd1VfaoQ5vG1Og87G71IihFZs22mkNnSukTyxVALMYYC5mBOJl40%2BA3Aw9%2FbkvgY6pgGHBvATDlZU92LHlhicKkEHso1x6CWxhhXQD6%2FcdM2yufq58j2lvQVAReyq6UjcffvfaeYZMpYau1ZcDh0lsPo8p%2Fur5b%2BPWp55QcBuJt%2FdXtLFlJ3aHK6PofoRoT0ixfWDekMTh7tqZt3srZbcTIYzn3cWQ5ZZPesfG3dzgdMsFOeQxSiywP9Ahj6QWkULinWGdStEOJkrA8plEifWQJD38%2FBxMXgm&X-Amz-Signature=584e4bf0225583dac8a5b9af16f60069c995be39c963435e3d261ee526087da0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J3Q6JT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDZn4AgAjKfTGlJqK61EdDFtAQMCJxlcXNaVISrQg1M3AiEAk9pl6PGEUMi7NA%2BDDl7uPa1IkHu%2FMm7PZ1XiZVUJwh0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEiZ7MIu9Zv7sGwz%2BCrcA074T7vanl0mpq9wn87QD56xmD5cvty2GAW5ok74hzGr%2ByB4ilMwSHrpanMvdDSG69LbAoQKSvqd8hESUao1NBp2Z3swuU%2BY%2BvN356F%2FD8TDZo1Lgs82uPq%2FMuFlGIuNHgywK3RVr8FAb1qDLvSi8avEYMH9JfrAnAHFgBm9EpoXXDyPDEl5kNctKuaLw1WxMe4B%2FO4nM1IeGHBEi9Cvs35k%2BtFKBN8pO9UvI240WIhuiYzMVub5hALZRrKgo8xkoYduT6iJ4dYEdSJP5mQFhYICFYlGLy340IoTxzgNx0M54G10LXOAgMk5lgoTpcEeSh3lnmDoIy86Hoq4kQwKfeMMPt7ApGtaZK6sUcPEpJbn9ixqLK5DqNZAhFPmq5JBpjcdsfZyBFrLH8TSbkdnDJ3abpTRkITVGlA0NX3fO4pSN3N6aHSfar2VXCnSfvGBKsSk9Ny%2Bqd8Qdq41lwE7yepSvgu3RiZ04OuT%2FIyZVer4VTABM8qefrLmlsyallHg6xggOeb42vIE2c3lmytlYf3oKkXDFR9obus0Tww1rJl1d5em5izvPzP5wVpmBtL%2BOuPgGxl8%2BE5zC6ZY%2B7ZuX3R%2BafpIVYf0QbIZLPyGA5qdrkEDKcca1Tm7LiDzMJr25L4GOqUBYEi3B7ef5E9Lj7iN9GSui8Mcn67KEss6h0h6%2BVP9QDwUGCTrn0BFoQOyoUUInEeKbajHDjFVGI%2BzdhjTpDz%2B7txEdUD0YLMIdsBrn5EujXOwbzs6VQukaaUmDobWfivMnoDshkaKMfN%2FPljijR3CmoD%2FJqxfohLRC7Xidaolc%2FidbccynwiroHXsnWn4%2F1ecdbiyTgduQqB%2Be0wIDm5FAwRWsSXu&X-Amz-Signature=0c315ebe1942b8050a2baeaa2442e37e555223bbc892de09fa1c29e1b0537286&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFIJD4D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAGD1V3gBMt5tFJX9x8jZBKmuabLesn9yLMaomjNv2CRAiEAl34EMzOwS7P7vWFaJ74x3VNSYHhIRT7vY9ADEGMJs1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH7A0Ty3limciOLXOircA%2BK0BzDtAwRvo5XWHWSBaiKdNBYcIs6%2FuUY1v76rpJKRlnbij5F015B7SMN8GvOE9cIIguGEYU7RHuacn8Xthd%2FoRDfeZCjsTAF0mUx9156rYz2LVJeLG660eqEWdpVNW06TSW2tV58UBefCm%2FSEormL9XuMVZc5Dxx49PSqh0Yr1Vo1o6Wz6IqzTzUWQfhiIE4mQrn1mjGvbCthu7prc9eYTijP7EhmTt0apSHitiEO5ZwfV%2BKbZhCQTMyGn7Lm36JK8LgrjFHyq2CHbwTknUllr0HToEgXx2nRJwSErijyaV%2FwNDb7VWuBK%2FhXax3AOaVmIsIAefDhOVxwcpb3io07qUGJrT3WXV6%2Bhk4xR7TKJqG3dbK4Mw4gh1rZ8McE5HCBRrstkv7otlrrsF%2FFcRGiZTj7QiX67xwM%2BxDqkjNejVHMLT795tQSQ%2Fo%2BD0UlqBJ0LE7YioY6qUl40bygCkFypMVO%2Fja46uO7%2FwQ89T%2FjWyXJTiUsKdTLzgl87MeHL%2B0trROq4HtJKuzPMfASsbnwuAmTySmGV71JUPvDh3uUCmBFlhMtv%2FUPlUnLLEDcs6VyxAxSUOHxn%2BSuwCwoqpGE10vUkfOb1%2Bj%2FwGdcU9ODhyugvqFv1QqQoiXrMPr15L4GOqUB21vRaogQqI9e9J%2Fe78uvT6VwLPXA9WhYvPeoanUa0BMge3HppcGHQTHElAhJTGG5CpzE48KWESn68%2BjXm6eexzCBjNZidZpXi7RVZJ%2FpHxZ0nxOGwXlInHtXckbMWUUlaSZrzM7zn2yBeY%2Fd0LO7QvoQW0kGWD3%2Bx%2FKa8yin%2FJuxQU0BAYbqKeJbZSr0jekE%2BW%2BCPvbtENYcHulMnCxD%2BVlUqQjQ&X-Amz-Signature=97b02d08d0af27f6808f9ae0e78dd6d427e46408acf2608d41a8ed935220d75f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
