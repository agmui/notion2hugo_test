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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJKQF5D%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEvnE0DC%2FHCODQK09cE1xrPKz%2BoVhmMfFRvxVmw6GGrQAiEAlQKi5a%2BBj3P5gi7eESBu8ZRJdSmp4Ff0joQbkEKg97AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyW3PgFp7jnQInPByrcAxQYB5PCVU6GatJnxbTuVR%2BH207ag5z2wxtqRcf%2FZoZB7T1%2FTNk1mLPSlFxypmw6g4bzWpg%2FCO6RtxN4pspFNQriYo9QLb8K3VFAU%2BwJiQaUvqbOb4CFw4%2BntDFAN3AxWFSdSxVMfqb1%2FiVc%2FwjfDWohNIkpKJ5H0of2iaVa5lbxGNPwWaTCuLYYd07nCcE06UDSodAOGlFC9NUx%2FIJDaMxmuS2S%2BqrJFl%2F4uvi4%2BOWysWTc5gf9ZKkPCZFjf3v0A%2B9dQb9ZljpUKKnpjsSaLWHNw0vo38FnwiPnAyzuqwV0o35BGQIAq3feR%2Bg341I7Ci9DwfY3h%2BEzbX1B8rELJRHGC3g%2BXcqMRwhHzpwFmOrHi%2FBz7nojhMV3bypVvLvBRwHZkueJM0H5b%2F9bYDUKFjsdoIcr658%2Bk0bg25w1wW3dsK%2BaVKn549f5g1ubNdZ%2BCvN0IFNgbaQ1htDoOLkxPI9GGJ8HlosYQG4Rxa0KGDOdCj3f%2FCdkeFx0tG4IlKNXqpzVlycl7Vy%2FN7knWwVFiUBtEPbD2Vfhq9vNJVZ9mZ5p939jMjM%2FNVXf%2FVC4RRIHywUzHH%2BsbOOj0yfqsu4WikO2RKRpEURdOBVnpwlyQcUhpI%2BKcMdBQjEALKzPMLyp0L0GOqUB3aTijxILfVr2srnomPKW1xmnBN07mg%2BbsmbXB5JHtdqSrCGVHsmtdjH5PBuPuIUrZz5zggHA5mKyHeLo2jkymDSuRdBn2Htq1Pzc1wIsVgL%2ByWHn%2FcooUvraGJxnoDokq1tgXEPRzHa0JzbNLkRQaSF0nU4Ply9sRikG%2BJtreeBofU8rdglMQhlQM9%2FDsVALZmsLsbTS2MdL9W%2BlRlQmm9AYcxuB&X-Amz-Signature=cdccaebb1fa7b1476e8f47ea7e6da6bae92a8a98e2964f21cb9ceb0072ef98f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJKQF5D%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEvnE0DC%2FHCODQK09cE1xrPKz%2BoVhmMfFRvxVmw6GGrQAiEAlQKi5a%2BBj3P5gi7eESBu8ZRJdSmp4Ff0joQbkEKg97AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyW3PgFp7jnQInPByrcAxQYB5PCVU6GatJnxbTuVR%2BH207ag5z2wxtqRcf%2FZoZB7T1%2FTNk1mLPSlFxypmw6g4bzWpg%2FCO6RtxN4pspFNQriYo9QLb8K3VFAU%2BwJiQaUvqbOb4CFw4%2BntDFAN3AxWFSdSxVMfqb1%2FiVc%2FwjfDWohNIkpKJ5H0of2iaVa5lbxGNPwWaTCuLYYd07nCcE06UDSodAOGlFC9NUx%2FIJDaMxmuS2S%2BqrJFl%2F4uvi4%2BOWysWTc5gf9ZKkPCZFjf3v0A%2B9dQb9ZljpUKKnpjsSaLWHNw0vo38FnwiPnAyzuqwV0o35BGQIAq3feR%2Bg341I7Ci9DwfY3h%2BEzbX1B8rELJRHGC3g%2BXcqMRwhHzpwFmOrHi%2FBz7nojhMV3bypVvLvBRwHZkueJM0H5b%2F9bYDUKFjsdoIcr658%2Bk0bg25w1wW3dsK%2BaVKn549f5g1ubNdZ%2BCvN0IFNgbaQ1htDoOLkxPI9GGJ8HlosYQG4Rxa0KGDOdCj3f%2FCdkeFx0tG4IlKNXqpzVlycl7Vy%2FN7knWwVFiUBtEPbD2Vfhq9vNJVZ9mZ5p939jMjM%2FNVXf%2FVC4RRIHywUzHH%2BsbOOj0yfqsu4WikO2RKRpEURdOBVnpwlyQcUhpI%2BKcMdBQjEALKzPMLyp0L0GOqUB3aTijxILfVr2srnomPKW1xmnBN07mg%2BbsmbXB5JHtdqSrCGVHsmtdjH5PBuPuIUrZz5zggHA5mKyHeLo2jkymDSuRdBn2Htq1Pzc1wIsVgL%2ByWHn%2FcooUvraGJxnoDokq1tgXEPRzHa0JzbNLkRQaSF0nU4Ply9sRikG%2BJtreeBofU8rdglMQhlQM9%2FDsVALZmsLsbTS2MdL9W%2BlRlQmm9AYcxuB&X-Amz-Signature=61f292f75cd26279bdf242f95600660fbe85a1de201786853c3c84bcfe8d3fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP3TZWIE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEDQGvo0Lg4NTL%2Fq7i1ghoHIr6Cw2%2FTys2tbm3s2%2FzmAAiEAt0hPhpJifTxWKL7TiD%2BeNOoh3eBD9IS2rRNqGRKBcb0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL9ppEYhzfrEu93fircA8aF38%2B73HsKztdKC3dT3bXrnBgBwGrTm%2F4xLqjg6l%2BVpL5hO58dPy%2BbfKjCzv8wvP%2B7t1CdwsRB%2BXQ8JET5RO8MKSTVNIDLmIzZ56lv%2B8vk6thmp04nONmWGMVI5Jh7A6HzfFjw2m5llisnf2IOEgi18fwWYjLw5CQj5Yu7mjY2kceOppLJrgqRz6lCKQ38PaIiSGepFR2GY0L9psx8G13Au7DlP2%2FVxj2dmdUuTzy0yORmF2tiXmd55wg4ga%2B7iKoAS%2BsqujGLV%2Bk6850edKrV%2B6Ze3u2N1%2Fm6JwRk9KxRhdgjO5Vhg0q%2B%2BN9yIKWxhEJF%2Bd22%2B1YDYa8eEguEqOm7nvoEsg1DLvIRlalBwHBlHezcmlebtGFT8ErhMfV4ESIuDnHS8lWEMERwAakYbV4qsq14epWoPP8FIbKa2bAud2y7v2j4ui2YDePCoYrW%2F05mk0ribLXkQ7ZVkQEj2pbYpyv8gqUyWzMwU6CtnmGJpBRWghyRDk%2BEnI%2B9NDGgpcRA8XOorlFKc9RyB%2FMjSg1fyvuP6hZIrM8%2BC0KnVbZZQ3Gx%2FHm6KoonmeqhabL%2FJX%2FTMmgS0axw7HdXACIQ9sCcMUTX0mcPOQG%2BrEjsgzxSNQbGN5t3YtvGnFVOMNep0L0GOqUB8Rylh9RnYg1f8GzceNs48%2F%2FO9zCoTnTKe5%2Bl3bNbTyyahtcW7WpRjnq%2FyjJBw5RwMeE2dYYpwGmEKBIR81%2BKmIcGzvo%2FmiXvPiZBky%2FN4AJBaeoT26%2BotSIMWIy81do26GoZDQTnu8NoyQUmm5rCN%2FahsjxSooGB5qNmzyw41MDw5FTW8uukz%2FjMkXZaoAK8K4OybgOtHDet6w2sSVguWJsQcraJ&X-Amz-Signature=47a61dfdb749ddcc12cc616dcec92478451688f46ce306560720907d08b84e03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YGB4ILX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGTG%2BU3zSJHkfqO%2FpsqZMhMii0oTvvDgwz%2FuEK96%2FZLgAiB2e44STajkDUD4SqHMzU4RRNAmzGZP1ng%2FADvXWf%2BaFiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTzMtCgW4f%2F7%2FKGe2KtwDpCj3OUtbXso6wxsZbnDFb0TT8BaCEY2i5YpkVBtKhh%2FKqEbItML%2BqsxL6%2FrDiRZ3yKh3FJxX%2BOYia4FrazEkET8ftsMTfr2vz9JudkmWnlLMgKRPCtX%2FIYNKO5%2Bmn7N1ivJjBJVRVI8BuZCMaedi%2F7qMlfOdqtqLgbOVL6rOhGHvFdzkEDZlZzIXXe9dg8zIoBHjCwDXnxLS7L2q3vIvljxjGrvb0qhI0m7MRgm4mzyoKn3ZhKqFGCJnn9lTisFNbfhIclNNteye8mfk1tmur9oBsxJ2xGynmokgKbamRaTCpQmxcSGZ6hgD29%2Fm0QPOjsIjOJo5lt3AQ3eQL4NBJ35VqetI5qVBlh9q6%2Bjr1D9wV876KjgclTtuAdfrpFPsKirhcufFtoVLEodslJruBb%2BpfCE9012zj%2Bin9qvDtaa28AOyTOz61XZllcelMcHoPpGNgDCi5shxeh74ERbke50gptYH8sVe247%2FgugATtvWCjrNXJyX3zFIg4kdZiFgc0vgqz5%2BKZeMtkHPqM%2Fdi4nCGS8BKOFdrS1WmMKAt1ylMOwIes%2FDMnq4EIIUpa5%2Bj4odHJDAw4T%2FMcrZLFblE5Ev%2FkaXTZMrE2QhLqhGB%2BqTHn89ooy1B6%2BK540wzIzQvQY6pgFa4Wnqd0NTSC%2BjzBiUYtU2hgZWeusuIYFoRnkEe%2BWgi%2F8evzaX4ZaBGoF5d4EWoDzJ95T0Ra37Kcb224nKsxYHjY8XcGX3YyZYu7x4ZvJucvA5g71%2Fq0rf7JylTIOds1cX3RMzuOp%2F%2FOg29WipLtrdPM8efa0TQA3DWksHil74qyFGbyNdEOScPSWh3f9W8KA0B2lEySiYvXP8bJ7e05l9fxjJThZe&X-Amz-Signature=869267fa90f09cc96385948d9a524326be55764ae815ca3b685db676f6bc4f27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJKQF5D%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEvnE0DC%2FHCODQK09cE1xrPKz%2BoVhmMfFRvxVmw6GGrQAiEAlQKi5a%2BBj3P5gi7eESBu8ZRJdSmp4Ff0joQbkEKg97AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyW3PgFp7jnQInPByrcAxQYB5PCVU6GatJnxbTuVR%2BH207ag5z2wxtqRcf%2FZoZB7T1%2FTNk1mLPSlFxypmw6g4bzWpg%2FCO6RtxN4pspFNQriYo9QLb8K3VFAU%2BwJiQaUvqbOb4CFw4%2BntDFAN3AxWFSdSxVMfqb1%2FiVc%2FwjfDWohNIkpKJ5H0of2iaVa5lbxGNPwWaTCuLYYd07nCcE06UDSodAOGlFC9NUx%2FIJDaMxmuS2S%2BqrJFl%2F4uvi4%2BOWysWTc5gf9ZKkPCZFjf3v0A%2B9dQb9ZljpUKKnpjsSaLWHNw0vo38FnwiPnAyzuqwV0o35BGQIAq3feR%2Bg341I7Ci9DwfY3h%2BEzbX1B8rELJRHGC3g%2BXcqMRwhHzpwFmOrHi%2FBz7nojhMV3bypVvLvBRwHZkueJM0H5b%2F9bYDUKFjsdoIcr658%2Bk0bg25w1wW3dsK%2BaVKn549f5g1ubNdZ%2BCvN0IFNgbaQ1htDoOLkxPI9GGJ8HlosYQG4Rxa0KGDOdCj3f%2FCdkeFx0tG4IlKNXqpzVlycl7Vy%2FN7knWwVFiUBtEPbD2Vfhq9vNJVZ9mZ5p939jMjM%2FNVXf%2FVC4RRIHywUzHH%2BsbOOj0yfqsu4WikO2RKRpEURdOBVnpwlyQcUhpI%2BKcMdBQjEALKzPMLyp0L0GOqUB3aTijxILfVr2srnomPKW1xmnBN07mg%2BbsmbXB5JHtdqSrCGVHsmtdjH5PBuPuIUrZz5zggHA5mKyHeLo2jkymDSuRdBn2Htq1Pzc1wIsVgL%2ByWHn%2FcooUvraGJxnoDokq1tgXEPRzHa0JzbNLkRQaSF0nU4Ply9sRikG%2BJtreeBofU8rdglMQhlQM9%2FDsVALZmsLsbTS2MdL9W%2BlRlQmm9AYcxuB&X-Amz-Signature=410b52bc52806f6f20a485534c134c8cd8ebb3ec677aad586154f2cc0be28621&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
