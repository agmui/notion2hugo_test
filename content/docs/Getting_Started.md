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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=c3d52f2c6367a9352d28a2133e95284ed713cd4e83b1f638c06e5152e4990056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=03859026231d54db3a7b7499e79c49620c5b81fc7ee7c24e4f9b0910ee46b45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=17138af5e5bb61efc5b1f9b746934dfe76561d3f0b5d7f1b5fd7b7769fb599a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMUQ4AV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdibcKljJAEy6u0AXJ2CEKFVBnkPx36Cl912NTARpn9AiEAnie%2F395xFzFRe9kQ2yWWAjbM5Tf2rhFKV1sjkz2ZCcIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH76%2BCopQvVTSujXiSrcA2DQwFIdiTgvHhXccwiX4Z809tPoNc2rFnuWVrxuKfJqwdn90DVl1MCtLLlNC%2Bq1mW678zQjpfBlEsTR1LeBbR0cfIxDFu8hgXrOkJHe91LNpIF%2F%2Bb4wTY8h4rNJBswgZgSxdy2%2FDPneWKxg7izuOZDiLGpFiDj0KEBhC%2BfMqJP5cSxnd%2BJEgRmtgTScOK6S0X2xoxOEopcIoCSX9HNck7szlLfpaxSaEC%2BcsHfbBXFANepWw1ZpmAuEXVkRye7Zi4wY9jxS2M5xlTK%2F%2FO0nFPgI0J19FHEv1uPRSiPJEl36%2FSAmLxjG%2FHm9RfhEiySzd7V8P%2BOCQbzLOq2OJSlpVh2W12cgIAxfDJ3mgsd2yhiPwvve28y4TctMp1K3%2BLYFEsqsktqnhydwkz4Qqdbz9lj803EMxlakSosTUnsR2rWMFLJOGfnXf2E8%2FTN4nZ87TIU%2F3mlVzjWzlvUYVvjqCh9hgLh22HfZwINGNnE8aN78yQQ8xK4UrV2ynUcgbkGf9Rxff05C25isDFV6daHjIGcMe8HK7TvjccoucPXeKyS4UeC0oYbPk2NfujO1WwZq5aWwX0AmL6wKPNxX3Ps2HDrGabDz%2Fq0lPkYhyjhkIUI0NkgNDY68XVdyle67MJKNqsQGOqUBTIhv%2BwidZH6Y20aKfErKIW37EGxl56YyuygNk8wcraCNeIc4hGamwh36tIw0XdFYN7UpBfZWPE23R9fkmIkGeTc4RmDm6p5yGZ7u%2F1qd16BffHFwVRAWJMe3XaU5M175jgqaZuJff%2B3GgOoPgkzTiWyeJqSU%2F1yo6tiqiONGl92btSvN6wShi9BxrvP4LbJyT2yJR%2BrZUS7Vbv8HdxdhQf%2BDoZ3K&X-Amz-Signature=d7effc0eb5dd1717ca3c4fecdfa6ebc384377572e18d9d7260726dd8be65b771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B43DGXV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR84sjng39BqJmnRMz7q7oo5S1Ure5U%2BYhVtM2871BjQIhANfBK8UB06h2FPU6bDqVatfXk3g11PWPO9aq9hjqpIpzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQaqNxhIB3c02Fnroq3AOirjHYdBahkDnOyREiCXM8tI8eyk%2FUut7VbxuT206kb1y4v2qdszaQ0qvBvE%2BLDx8u348jHUi8OYeqj%2BO0uzQ5YCOKHYMweYOytMjCarbma15KH7akVVXMvJBRJqfVYYIyAiziaExVTmSzWuXjFt8DBxwOW9bDzh0vQAvIG1zCPvzrtueaMqpIaP3%2FhvG22XkgMV5mXK0OqSgQdScIYX0fGjD2D0JhmYIVhMsY4tOkPDvXgczgf4bNWiLeat1D4bhCtQqB5fh%2FppcnG9JdXgTJW5cyUsWBfElZWwZm3svk5V40wSRagOqQUMBP4hWrNqwd6N2MrcdK5t2JyYj1PjpRm9AY3MczzxAMwC8Xi69lPuvqMRAc4f8JhSmlLrx1%2FdMKPZgF6YWnQvwMBj7PcA45xrKIarOV%2B2NdlwiYnUoID5BB88PhZcBk4knt0yWsvSzHRC4Di91NJVR9ncC0zp%2BfB%2FHPwKltBjVhbbJG2TSWq9QTXbdbAvhwIkgeGOVxZdKnR6c%2BzK3fSAgL79PlZmtS2UfqM6DkYjX%2FhftG702pxzq35dyk2eJuA7HrD1AWveCcoXGXUtqWquGMTilvxmW4L1CPvVopFiCwbK6cnzhEM5AJHRQleExZ24fT5zDK6KnEBjqkAXpjVt7SpJN0uQ218bKuIhMdxZgUcNEN4gax6cbWvDdkdqfx8R5Un7yc%2FjTwNMVFmUoybBN4PDDdKkyCnUsv%2B%2FFvXhNDmklx2JV0gZEHjGdbhBvrInU5KgjSwHu2a5IXI5EiGASsiLajt6zYYdUQw1760dF4MguwjX34JUiLo47duob7k%2Bl2w9RxahIYmx5LdCE77SCNxebcsjuIzhEz96g1WIKg&X-Amz-Signature=91d8373d45f3c0a56d978520fd12ac132a1d19ff8b367613ca72078504998829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXOPWWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B8qJjsBO8pPqF3ftwLszV6HlKyJbaQOrRXuRIKWvpzAiEAvja1UkVV0GFRYTIgTFVrDJHih83n3h4fzJDJa0d0XIYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc%2BHZRowCdp3wuYeircAw9wWm%2Ftqj6n31Y1mOOhx%2FPXY%2FrmpP2mRtH9pbW6uuzxiK4JxAzQiVpQImtC7l1VY1bUYB3lWc4wPMC8LeBP%2BYj8m6Qjs5b2TI7F5j0i%2Bm24O64SXBmz80Xmmczb8uMvJmdmmbML9jrI9pEWJi%2BHUHr2iSXeCkw3oas1mLUb5Uv7vjOOYZK345oDpQ0xWfpe%2BEFyQly2UR91JmcoeZZQd83ov%2FID2c0di%2BVgReNn9vS%2FSPypd21rXe7Kv4usZdZfP7uCftwpbme1kPbU4njmGRMvqPBfv%2BuHCTpYl4sdM5J2BY275oC1b1wdnFZz6BFWXWWtelYYlxm9D%2B%2BWN1VbMVPmS2qCsdJmk4j%2F5zultQxhN9S6C4ZtKQLCelsnaC1EptOLloCr1WET8uFLCvUibYKlLN2T7JHvEfLXKngoFf6qT1IkIR7XIWHhJ%2BvjvhV3lXuic7Duej%2B478%2FEbAKoejTiu3ZDZTbWEeQzAUdOl%2F9a3Y22MltAwgIUOPLtCbCc4C8PQUg%2FP2tDNzImfOASYOCZTKK9mvDQGu5%2Bo5tLoCzdzofAtxzec8xfU4gnOWfQ8AH9xrw68xmBDh310jPacrJW98U6jLwEgfTplKYnX7y0RK4DV0vnwRLHy0I0MKroqcQGOqUBo4p%2BXTiHbOez%2B5SIsxx8GxoaOiRiiNcAE6lg4GIfSo15UHNNQsQnFV5AFDHV9Uu22IaejwFtaTpl4uHcvtiFLnjd93xR%2B8EZl7kraT6ZQR86A2594EGKTKVIZEwIMoNKyssYchiGUqUxj8Q5XX8lYtq3v6l3wPUYODDZUdptHG0GzKcZj0LOWkeEK9KpU3UrRbA83b%2FZeSfhVwRkeVS6OCRkfJdb&X-Amz-Signature=bfc0bb26a855584a0f8b2af50f06076df866f20414f0ec1f75868149812c928d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
