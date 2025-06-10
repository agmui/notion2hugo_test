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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634T6KEK2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExHXpVCzQ7O0x%2FGhettvmuZXkZi1HfYtsv9miCYGuwoAiA2EnWCYR38XxeAM%2F5Ywee814WGcbY74y3OhyFxaidzuyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLTVBHqBdfAr1YnaKtwDYTP9GMEatjEbFlwwZYSmLaHDJOGLkRxwNx5ujKaPuib3dE8UMR%2FPeorwZsgUfiZ8hDtv7Ssyupidd4nZdTfpGKcQQQ2CxPqmsuNktthnURU5XFrXBTONTeYVrB1VeddEkfvHz1v957gd8%2BwSxcxsLK2QtJ6rI3GURgYLn1mt%2FV4TNTjjXizPISx764RhGAvSwb9E3ur2xwF5Oj2m%2BXQq%2BD5JwzL9pVh6TthYycn1QQXSM1BKyLFoIa7AvK%2FQm9hzD%2FTGRwJsO3p3x3vWJLJdKkMKdhDhKi6jLpEeA3xUwz6O1YrNA1iRcbbnWD5wfbfTvWMZywwu%2B5Cjo2w1DYE8cX7vSpALBCeOKTLQT7%2FgePGGLxNLa6rN4KczjmZIcfyEjHg%2FT4O4tkkY08YlBJU5oLv7lDdlXeDhXksl87GDtCo7KVGxLE5pa2lKDTEW0sUaHKlFpmwAdvB%2BY8peUXGUfsVqd90uwXDm90qglPqRheSRKrZ7wwKw5wuHMKPQWKAIro9nq6b4tQnf%2BCKIVxgyzo5DWw4j1rOMq25KjBi08Y6awuIsUpLzmyKD%2F%2FuAOOZfWAX%2BQgKzEwwwf5hF9MyxE8AzyJnZBJ4krijxydXvtWbEoRJ%2Fb65%2BaBNHEQYwq8qhwgY6pgFRS597LSyC1oFdIFRGUvuhClIdTo3G%2BUUQHyO5wfBUl5rK5NPfROiffM2A3MhGnXyr6eGvftdpb1DGGqyrW3XwghQNOAA2o65pxbJWzmJ0So0IZQpSPei6QXLMfKeEeMw4ZC27HwwBSm6SWYjTc7KRgTPxw9NhPLeHZ7gmNpv5WAae%2B81BjZZompXJEj8ENwHavct2B3isj1ryzyh95l6N4btnv%2FZw&X-Amz-Signature=9096f106b4c999822d269304d177c442cb3abfdda0caa6cedb1b18031732e41a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634T6KEK2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExHXpVCzQ7O0x%2FGhettvmuZXkZi1HfYtsv9miCYGuwoAiA2EnWCYR38XxeAM%2F5Ywee814WGcbY74y3OhyFxaidzuyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLTVBHqBdfAr1YnaKtwDYTP9GMEatjEbFlwwZYSmLaHDJOGLkRxwNx5ujKaPuib3dE8UMR%2FPeorwZsgUfiZ8hDtv7Ssyupidd4nZdTfpGKcQQQ2CxPqmsuNktthnURU5XFrXBTONTeYVrB1VeddEkfvHz1v957gd8%2BwSxcxsLK2QtJ6rI3GURgYLn1mt%2FV4TNTjjXizPISx764RhGAvSwb9E3ur2xwF5Oj2m%2BXQq%2BD5JwzL9pVh6TthYycn1QQXSM1BKyLFoIa7AvK%2FQm9hzD%2FTGRwJsO3p3x3vWJLJdKkMKdhDhKi6jLpEeA3xUwz6O1YrNA1iRcbbnWD5wfbfTvWMZywwu%2B5Cjo2w1DYE8cX7vSpALBCeOKTLQT7%2FgePGGLxNLa6rN4KczjmZIcfyEjHg%2FT4O4tkkY08YlBJU5oLv7lDdlXeDhXksl87GDtCo7KVGxLE5pa2lKDTEW0sUaHKlFpmwAdvB%2BY8peUXGUfsVqd90uwXDm90qglPqRheSRKrZ7wwKw5wuHMKPQWKAIro9nq6b4tQnf%2BCKIVxgyzo5DWw4j1rOMq25KjBi08Y6awuIsUpLzmyKD%2F%2FuAOOZfWAX%2BQgKzEwwwf5hF9MyxE8AzyJnZBJ4krijxydXvtWbEoRJ%2Fb65%2BaBNHEQYwq8qhwgY6pgFRS597LSyC1oFdIFRGUvuhClIdTo3G%2BUUQHyO5wfBUl5rK5NPfROiffM2A3MhGnXyr6eGvftdpb1DGGqyrW3XwghQNOAA2o65pxbJWzmJ0So0IZQpSPei6QXLMfKeEeMw4ZC27HwwBSm6SWYjTc7KRgTPxw9NhPLeHZ7gmNpv5WAae%2B81BjZZompXJEj8ENwHavct2B3isj1ryzyh95l6N4btnv%2FZw&X-Amz-Signature=b9171ee3b3889360db19f3647be10f2ca07efbe220ed4a6b6c9b6edaacd2fd7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634T6KEK2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExHXpVCzQ7O0x%2FGhettvmuZXkZi1HfYtsv9miCYGuwoAiA2EnWCYR38XxeAM%2F5Ywee814WGcbY74y3OhyFxaidzuyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLTVBHqBdfAr1YnaKtwDYTP9GMEatjEbFlwwZYSmLaHDJOGLkRxwNx5ujKaPuib3dE8UMR%2FPeorwZsgUfiZ8hDtv7Ssyupidd4nZdTfpGKcQQQ2CxPqmsuNktthnURU5XFrXBTONTeYVrB1VeddEkfvHz1v957gd8%2BwSxcxsLK2QtJ6rI3GURgYLn1mt%2FV4TNTjjXizPISx764RhGAvSwb9E3ur2xwF5Oj2m%2BXQq%2BD5JwzL9pVh6TthYycn1QQXSM1BKyLFoIa7AvK%2FQm9hzD%2FTGRwJsO3p3x3vWJLJdKkMKdhDhKi6jLpEeA3xUwz6O1YrNA1iRcbbnWD5wfbfTvWMZywwu%2B5Cjo2w1DYE8cX7vSpALBCeOKTLQT7%2FgePGGLxNLa6rN4KczjmZIcfyEjHg%2FT4O4tkkY08YlBJU5oLv7lDdlXeDhXksl87GDtCo7KVGxLE5pa2lKDTEW0sUaHKlFpmwAdvB%2BY8peUXGUfsVqd90uwXDm90qglPqRheSRKrZ7wwKw5wuHMKPQWKAIro9nq6b4tQnf%2BCKIVxgyzo5DWw4j1rOMq25KjBi08Y6awuIsUpLzmyKD%2F%2FuAOOZfWAX%2BQgKzEwwwf5hF9MyxE8AzyJnZBJ4krijxydXvtWbEoRJ%2Fb65%2BaBNHEQYwq8qhwgY6pgFRS597LSyC1oFdIFRGUvuhClIdTo3G%2BUUQHyO5wfBUl5rK5NPfROiffM2A3MhGnXyr6eGvftdpb1DGGqyrW3XwghQNOAA2o65pxbJWzmJ0So0IZQpSPei6QXLMfKeEeMw4ZC27HwwBSm6SWYjTc7KRgTPxw9NhPLeHZ7gmNpv5WAae%2B81BjZZompXJEj8ENwHavct2B3isj1ryzyh95l6N4btnv%2FZw&X-Amz-Signature=180337fbc4fcee50e323c35b752721d1f175add4776b578e9a5725a98590dcf8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MRPKQR4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNl2utZ9RZHFuITiPnidokN8sLTxgyW44QeNUTeDezlAiAwDcr91Im6dhx97T%2BHoi3g4V4DPBZRewlz9TJOXwX8tiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoU%2F7zNU48MvSQ7oKtwDHpjCrOEYvTMuvPzX%2FEF8p5rkQX0jLcg8bAcKY0xQ9v3B2kqQLNqXaH7dSo5t6RgSKHnU993alfPQUKq39egMUpIq3rJcY50HAeJxsUmBXOzAQCf3iVGhRDTcKb%2F%2FwZuTCuXHRYbayvWVzXkQv6v4XfvjTIxBIRkKFLOjUAf1Rd5vqmBLx4q%2B9iZjfD8c825A4gRw4rqGMOcJBqDplgAdBTMVWjgRY7Nr5x3ms3NXUDzFnu71k9IA4Qb%2Ba%2BJvcOLDlAy%2FxXjqQrLT%2F3TaJqyuYs2PH0p7NI6QM4jLsSDRsRpgiKZqYxXHOMvt7XWR%2BCkTrS5DGjNMeNh6NDErjlbBptaAI8imV%2B1PcQk8cGPxqRLh83jujSpWhm7Pf4qbqIdXzuHdk%2FVG1SM7gaNzTVjsjSVjurVm4B2Thw3%2BQwlHjhf5ZNB2kpf2XkiCGzL%2FH%2FvVJQjTTtNEb%2By31cDt4mjkuRNyuD28R5zYBN%2F7pSG0ettUCA4IRzhu7WxC0b%2FJxHoSN2xG4H8avwCqBMhoYU7Mb%2Bd8uIUQVdfB8k7VSCTcMo1lfGg8Q4wvG%2BCgtEv%2FrH5LgvZDaFtEhnaQQDYuy16KAj61F2j47D80jxpkOXQnITPC1ysbFa8fu%2BAvZUMwgcuhwgY6pgHoDk2Tr6UQz%2FUFa0AqOQt%2FGGYn9dXHqrix%2B8eI2GxwOHSllcv%2BXzyay%2BUxD7PfKpp3WpTNB%2FuMAGwwLj4HmsS4huHHNRr0uchjljep8ND%2BeXj5U%2B5PHr2slHH1RYBY9FV6oVNaWx%2F57wPKsZSt%2FmWXdVHWxf2NWuT2hHQAwbFHKoWsyre7dxL2kAp1i%2B%2BrONjx32QRboIHh0FYthheAsv03TOpslwV&X-Amz-Signature=681f55b2472002e1a9c092324f27f5bbd90db5066186de475aa63243fd0bd41c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QXA5YV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDutn6GVoww6whPgjwdBEz6vwuzMQ4P6Ev4T5EBiW5FBQIgavmQxZsz6g2tJyqiws4jVHtwlzXJUaY560%2BH1g7PErgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlD%2FKkKvrA3QhMLSrcA1wIR5bYmtIAtMyDnLFB1VB6SoBD%2F1R%2F3%2FMEAkewLDWnqTjATOx22JCHi1WMcsTz0OlXBFO2Xm%2F87vBZUBe4Ndu%2BOopeu%2By%2BVNM0l1XnP8uLJLNVp0UbwnokbSl5JYB%2BrxevLQQzX9Txw5XbMrF9%2FxOv7VNuwh5eN2v1xzL7sHNRwsVTfhFRvLOZpmzJPcOmIueD1o7aoX88a2d7m7z8ZbuxuMGJyrlZrCMmr5lW%2Fxm2VDHhYKkiRghs%2BcmpqAZz2vyJ8K25%2Bb2B%2FlBw1%2B3Bj9RfXuG7m3KwTHG9e7MUl24ZNsBYtfb75R8CShogKV1wbxAOKFwtgxCS97KtrH8TiBCzgBS7Px6ZvHPOyus4L6328NRm%2BxVEVEUSF%2Bt3WeatepWAW4Ssg3riKDsLzqaIB1SPa7uAsnXdwF9DiTeyp3O27Mxck4GyaRm4N1leHvyRIbsTw0KqD7OOAqCXy76nFr6aOwiYxAO0w6WlOJ%2FZagH8jiepDCf0qTNbFX%2B2itDlPGL2Np5MPId3LeP04%2FJYnlYQNlvqrzEE%2FZ90%2Bu19jAzj0Z97h4hcQyZCGM1Mc97Ug9z3oUH1b63Esg%2FHfeCOxQCbDLHwiLnZCj2ikoQOADno7YFnC75O2c65WqbxMLXHocIGOqUBMD2HKx3POPBZk89dJSvD1QRKvQKluskNrbxYe34oRgp37T8Suo%2Fho83ql9JlNxunitCtDFLHIbgpPUV2s4XQY3QEBXE8PQxQayEuaBdQWn4qkrbif2iXEjX%2FiR8h6IljuOAGn2REA%2BFnjm1iwDRgHaq5ZR3APipKmJBCAV%2FLnZfiD9B%2BK0HJ2ZOKOiCVKjssraojb8YVV0YAEzvWpwVR0O7JLXZp&X-Amz-Signature=c91d955e10d976d02fb5430aeca64e03d9911b71b26debc00aeff49b13bdae44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634T6KEK2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExHXpVCzQ7O0x%2FGhettvmuZXkZi1HfYtsv9miCYGuwoAiA2EnWCYR38XxeAM%2F5Ywee814WGcbY74y3OhyFxaidzuyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLTVBHqBdfAr1YnaKtwDYTP9GMEatjEbFlwwZYSmLaHDJOGLkRxwNx5ujKaPuib3dE8UMR%2FPeorwZsgUfiZ8hDtv7Ssyupidd4nZdTfpGKcQQQ2CxPqmsuNktthnURU5XFrXBTONTeYVrB1VeddEkfvHz1v957gd8%2BwSxcxsLK2QtJ6rI3GURgYLn1mt%2FV4TNTjjXizPISx764RhGAvSwb9E3ur2xwF5Oj2m%2BXQq%2BD5JwzL9pVh6TthYycn1QQXSM1BKyLFoIa7AvK%2FQm9hzD%2FTGRwJsO3p3x3vWJLJdKkMKdhDhKi6jLpEeA3xUwz6O1YrNA1iRcbbnWD5wfbfTvWMZywwu%2B5Cjo2w1DYE8cX7vSpALBCeOKTLQT7%2FgePGGLxNLa6rN4KczjmZIcfyEjHg%2FT4O4tkkY08YlBJU5oLv7lDdlXeDhXksl87GDtCo7KVGxLE5pa2lKDTEW0sUaHKlFpmwAdvB%2BY8peUXGUfsVqd90uwXDm90qglPqRheSRKrZ7wwKw5wuHMKPQWKAIro9nq6b4tQnf%2BCKIVxgyzo5DWw4j1rOMq25KjBi08Y6awuIsUpLzmyKD%2F%2FuAOOZfWAX%2BQgKzEwwwf5hF9MyxE8AzyJnZBJ4krijxydXvtWbEoRJ%2Fb65%2BaBNHEQYwq8qhwgY6pgFRS597LSyC1oFdIFRGUvuhClIdTo3G%2BUUQHyO5wfBUl5rK5NPfROiffM2A3MhGnXyr6eGvftdpb1DGGqyrW3XwghQNOAA2o65pxbJWzmJ0So0IZQpSPei6QXLMfKeEeMw4ZC27HwwBSm6SWYjTc7KRgTPxw9NhPLeHZ7gmNpv5WAae%2B81BjZZompXJEj8ENwHavct2B3isj1ryzyh95l6N4btnv%2FZw&X-Amz-Signature=2a3f41b7bb7d0c561ac49769a709a62d0c8bbb87c74aa205de7488ab28edddc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
