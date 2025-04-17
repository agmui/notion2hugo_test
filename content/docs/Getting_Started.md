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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVJQL2R%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWG3v%2F1kYDEKo2KQj0L94rU3iO5nc615XYe992Jl2C3gIhAO364VeTxTIV7WRgWZ6rTBUyHdneRR7w49kwbtmr4SznKv8DCFcQABoMNjM3NDIzMTgzODA1IgxyXj3PjQSHuTfMqeIq3AMZSuFAENdVenmjFbzXUV1KZNkDdIuuS5q9ubqN9IYDJU6HkHbrDzjKsddoAGeoLCAspHa8QZo9tz7pput71EVSe57n%2FlfNLg1vI1khZLXYeIAIxKGzlL73x9CkO3ptUel88%2BUCr53bZIjgtihjKDHFIFsrJhmeLtIW7vFB2%2Byh3b8nu67jzx%2Fnaaj4O68rE%2ForK8Hysdip0rL4W9oq9lovSfdS6rsJABMruxupwYImlDZdoiEuCLUd0l2ocREPuJNd7iGAEstP3NU%2F8xfAmGchWa1Iwch%2F%2BxSn3y73Os6Y3H13WEAn0K4vHuSKdvxmz2OCf2SDeTBn%2BXFy14SDBheD8Q0dOu%2FQA6yHIvrZfoi%2BNcJs0%2FQVNZjfQfo0v7VD3R7Df50ulC7Om%2F22JbPz8bAyFwauSVH%2FfszA%2FbF8aUk%2B64M2ebZhjAh5IvrDYpCLE%2BxOxEvLccQBEhPTdYIl5vBkNVwOi1i1%2Fu8EB3OiBbC4XyvpKlysja3DeOWuzqsUEBoc8xYt%2F1VnDfNBTzjpusJhXCchKRzNATrNDT6Lf6bFuEp1P04%2Fr%2FjoZ3VhdgnLLJzdef07XKEFNIWWOxbTkCpHdPRAcq%2BJQKF%2B3RQusB8Rzi7ZlH18INvObMeKrDCTroLABjqkAdYiF39s6DK3Jp5FWUlqKEnI75cJpliZbjpK67scpo%2FdLyY95qHUcs0UmAYVCz9UlDwKTUixDs7L7778yHUx1JkAwoLquGAzz7YrKXfCv6mIDaJHuK29DzWH7BjABwz6NQWpNMgiKlq3h0o1s32urANzZy9wov0Xy2gGjLh9B%2Fb9myWa1YRqBE85YUMRP4IgX%2Bqwg8WuYKL2tfC3mE6gakGeTrr0&X-Amz-Signature=4eddf5b3a9abb5c43230c10306598ec7d239af3876626c8f6a20f154cd54da83&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVJQL2R%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWG3v%2F1kYDEKo2KQj0L94rU3iO5nc615XYe992Jl2C3gIhAO364VeTxTIV7WRgWZ6rTBUyHdneRR7w49kwbtmr4SznKv8DCFcQABoMNjM3NDIzMTgzODA1IgxyXj3PjQSHuTfMqeIq3AMZSuFAENdVenmjFbzXUV1KZNkDdIuuS5q9ubqN9IYDJU6HkHbrDzjKsddoAGeoLCAspHa8QZo9tz7pput71EVSe57n%2FlfNLg1vI1khZLXYeIAIxKGzlL73x9CkO3ptUel88%2BUCr53bZIjgtihjKDHFIFsrJhmeLtIW7vFB2%2Byh3b8nu67jzx%2Fnaaj4O68rE%2ForK8Hysdip0rL4W9oq9lovSfdS6rsJABMruxupwYImlDZdoiEuCLUd0l2ocREPuJNd7iGAEstP3NU%2F8xfAmGchWa1Iwch%2F%2BxSn3y73Os6Y3H13WEAn0K4vHuSKdvxmz2OCf2SDeTBn%2BXFy14SDBheD8Q0dOu%2FQA6yHIvrZfoi%2BNcJs0%2FQVNZjfQfo0v7VD3R7Df50ulC7Om%2F22JbPz8bAyFwauSVH%2FfszA%2FbF8aUk%2B64M2ebZhjAh5IvrDYpCLE%2BxOxEvLccQBEhPTdYIl5vBkNVwOi1i1%2Fu8EB3OiBbC4XyvpKlysja3DeOWuzqsUEBoc8xYt%2F1VnDfNBTzjpusJhXCchKRzNATrNDT6Lf6bFuEp1P04%2Fr%2FjoZ3VhdgnLLJzdef07XKEFNIWWOxbTkCpHdPRAcq%2BJQKF%2B3RQusB8Rzi7ZlH18INvObMeKrDCTroLABjqkAdYiF39s6DK3Jp5FWUlqKEnI75cJpliZbjpK67scpo%2FdLyY95qHUcs0UmAYVCz9UlDwKTUixDs7L7778yHUx1JkAwoLquGAzz7YrKXfCv6mIDaJHuK29DzWH7BjABwz6NQWpNMgiKlq3h0o1s32urANzZy9wov0Xy2gGjLh9B%2Fb9myWa1YRqBE85YUMRP4IgX%2Bqwg8WuYKL2tfC3mE6gakGeTrr0&X-Amz-Signature=a912fbf1c569a3d0d6cbe823e1f0b4b2f46172214284881b8d84f8637040b003&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWSO34J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEmz7kpyk%2FA%2BvuVb0%2BXQFXxc3H44ny%2FtBQxzIWnRywgAIhAKSFkE3p%2FbNW5hmvwpj%2BH%2FTIVOe5Xg7CbSTpparrlvYOKv8DCFcQABoMNjM3NDIzMTgzODA1IgzvoBFYVC%2FsZU8JoJgq3AN8sEMrKOyD15UEhFr6E6ZSPtypdeef%2FC5wSMPORjWBX%2Bj8ZTf8mxKENemOpQmLlt99b6j6sFknMnUKN8e9%2FzgWNboJhZZymFo0Xg4wTsZ63LlYQLr1iFoSVEhN4%2BXr%2B%2F8a9%2BP3GvH5GhVW7dTfQDIeqFG8T5mHafo0MYxoezeyvsuka9K0kusGnhKzZPz43Ua4ysrjaObtYyJ%2BIeMjPmvAKXpq7DszaY%2FbrsdQMc5WZCh7Pk%2BFbwnluu0Gqj90qSdop2eDatshbfcqvoULFkadz%2FvpdwZ%2BoZyWqkHacE62ti9F1%2F3MSgY0vvXTR9gCEzRiL7PCFx3fzQZh9zOzg1uD7Lbg1Bc8%2FbF8hptvTPtdEtwxbJ5murgYEF4ALlEbas8YQIEhfKkEOVCYrZIMvPun5mEqJs559jSkOEhZo%2FOOQxeC4%2FzY%2BlgLnuUvqk%2FMbx3Qf0S1WR4s8LF3%2Fe01PYHfkHHLRI0RoO%2F6kGg2l0EnILuRnDyu354TwG%2FWiMbjzDNG7V4dC9e8jXEOjFsV%2BAtdTkbQ2Zlqo%2FpwwceU2%2FrrP8WrdglohbMPEO62L7ON9xVUrRDTcs7kx6xzjIEvjWRtYFkHJt7ESvplShsHXXgsD7I36Bv5GjN%2B1DiamDCrsILABjqkAQbu4Cvw%2FKgjKRx4ZvVIz1%2FtLGsApPyzkUVo9KkKj0I6AdVaUkW280tVPcJDelbxoYHDIugirx8poeCJ43P%2FcRLuwLWDydCrkFqSr699MU5NcNy6sKXq1s9LyNnRo0o5t3tqjdRuu%2BRM6Wyi%2BwzLk6M5xNGsZD7AGU4VmFghRBQMOI6eUb%2B%2F4kgRnCgQxaOHbTVD6NPmzHhM4H2esJn9PfAyj0GE&X-Amz-Signature=3613d579543d6693f045312e5c2414baf86a20aca29c303b726fdf54dc6c083c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSYR22G%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbq8GCrfUdC448dShsRtGTdwpbIwolbHSbKXu5l8nsiAiBPSfoZJe02XJD87Ab2OCxZ%2FgYjcv%2FVfONGkCa0FJhChyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMTe46IY4ITxv0m9QmKtwDL8rcP8s7IdHERnZ%2FJnvzEwzDPWSZtEE%2Bqk07IPPcYtsvBy7CB6mHPUF4sPfvvGLD5DcY%2BZjESvzK74drpFHD8NwJTV9CiJM44XictS265sACRD%2F7sEiwpxZ4um0nbwjPiwvjQQ7nEqI0EQMKxFZMGyIL1CDX%2BMF8TAfr28g4DumRNXUAJPWXJp%2F3q0NLL6GwlnVbnEeImZoSoMBnteM9IFrffdbxg8WeCwnuBqzVE8luV1pGcI1HiBfd1IidTWseXYDP0lV0lkbCEIfvpQapDL%2BvBR461T7cCz%2FqidV5YTZusG3x7sQmc%2FNkA%2FF%2BWfhcy4FkaU2FNHPwcOuXzAHd1vK0L3wIa40W4d4LwWr3C2AYm3CzRVKD0PBklt1KPHMj6p3SMBdT8fsEfLVNm1BKCYTvbTcqgHE3jJ3zNR%2F9z7P70jRMWWrnRcaQUiTeBbbiXgdtklFkr41ysU3f7%2BouTG9zBNKewBvqmRTyZHlGOxH9GLMkDJ14%2BHrloZJDy85vl0Jbp8ssIEZB8zg%2BmC2fAdeRFhz%2Bc8p18sijJw11SSteWU1WYvO3cviHFPAWhnBsrzIHzMW%2FPsjNOtp3NxS18oMNXx5Q8rW2GWWImP%2BftxKRr6lhlXPZePaUdk0wh66CwAY6pgEH92wbFTquxpl4dqt%2B3XZIy32QAfyV5cM5y0oxH1jbl3mszpsSUKGdvKphuKEQaI8YVl8v7UghnjA40SqIF7DEfLe6aS0MBx%2BxonIWWdbnwI0I5dPTgBJ6ns9nv8WeTOhnOShX2d6pTgzN5iG%2FcOUgxiKz7jtNFU3F%2FNHSeLr4NIwmg818STp4MMacWbwWRjd8O6A3L%2FDF7qxutfWgnOnsuYqhnvGD&X-Amz-Signature=6dace3aa6fdacf0ba3a19b3c4fb6fed693ed415f94688b21fe7e6d687e8fe2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVJQL2R%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWG3v%2F1kYDEKo2KQj0L94rU3iO5nc615XYe992Jl2C3gIhAO364VeTxTIV7WRgWZ6rTBUyHdneRR7w49kwbtmr4SznKv8DCFcQABoMNjM3NDIzMTgzODA1IgxyXj3PjQSHuTfMqeIq3AMZSuFAENdVenmjFbzXUV1KZNkDdIuuS5q9ubqN9IYDJU6HkHbrDzjKsddoAGeoLCAspHa8QZo9tz7pput71EVSe57n%2FlfNLg1vI1khZLXYeIAIxKGzlL73x9CkO3ptUel88%2BUCr53bZIjgtihjKDHFIFsrJhmeLtIW7vFB2%2Byh3b8nu67jzx%2Fnaaj4O68rE%2ForK8Hysdip0rL4W9oq9lovSfdS6rsJABMruxupwYImlDZdoiEuCLUd0l2ocREPuJNd7iGAEstP3NU%2F8xfAmGchWa1Iwch%2F%2BxSn3y73Os6Y3H13WEAn0K4vHuSKdvxmz2OCf2SDeTBn%2BXFy14SDBheD8Q0dOu%2FQA6yHIvrZfoi%2BNcJs0%2FQVNZjfQfo0v7VD3R7Df50ulC7Om%2F22JbPz8bAyFwauSVH%2FfszA%2FbF8aUk%2B64M2ebZhjAh5IvrDYpCLE%2BxOxEvLccQBEhPTdYIl5vBkNVwOi1i1%2Fu8EB3OiBbC4XyvpKlysja3DeOWuzqsUEBoc8xYt%2F1VnDfNBTzjpusJhXCchKRzNATrNDT6Lf6bFuEp1P04%2Fr%2FjoZ3VhdgnLLJzdef07XKEFNIWWOxbTkCpHdPRAcq%2BJQKF%2B3RQusB8Rzi7ZlH18INvObMeKrDCTroLABjqkAdYiF39s6DK3Jp5FWUlqKEnI75cJpliZbjpK67scpo%2FdLyY95qHUcs0UmAYVCz9UlDwKTUixDs7L7778yHUx1JkAwoLquGAzz7YrKXfCv6mIDaJHuK29DzWH7BjABwz6NQWpNMgiKlq3h0o1s32urANzZy9wov0Xy2gGjLh9B%2Fb9myWa1YRqBE85YUMRP4IgX%2Bqwg8WuYKL2tfC3mE6gakGeTrr0&X-Amz-Signature=8fe3bf2204e5a1306cd91a851b9528ae750cb5185e1e0e5b30c327b2298367a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
