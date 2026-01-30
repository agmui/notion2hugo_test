---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663457KU2B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtNzyYfKEj27IW%2BkZDUCWpp67lH%2B5JSrliwK2tbzE3AIhAPW2rbjAs00UbPvvhZDsEYleVqgtaegccL8sjfx1JAZXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFM3rf1xy7q4vPXe4q3AP699IiYNqMY7zw8kGHx4nX5awK3AI2J0ZIl0Qoh2nHtxjQdWCXfDzWr3qUu9KYGMwBIdx2YRRbMtChE3V1sL%2FO621swSyOLxKiLHi0tfijfGiUmONSOIO8VY9Atf5kf2xsMCIEqOMh1yahW%2BDIutZetYg47B9R5EiVUV8pV34hLUQd0grXEzWmjMs5dIfK0oWO2qtNPBP2XqyOORMJ5JbyQce2F0mlplFrFu4N%2BMPT8XE5hJtcvGBpfeOR92BmKaTKMtTWBKdVRrRrqnA%2FdwGtRuA8uorMKkeSOOj%2FpI3rqJpWa22Fh64FW%2BWeXQ4ptFThG%2BG0HC18JcBImhIP0HjyBDKEN%2FV1V6%2FbxeZ8%2BwC%2FheVKsm%2B1MtsFvB84m%2F%2B3mSZCd59sX2vCO%2F3NYg9dkLLfUk1P%2FMKKpZdtjkpHlHGXpkXjLEpgeGh%2BtTe%2BKl%2FXndwIF2EzwUEPZuIAOuklzL5yI28acE6jIzZaGFOPz530SEqtTY6ktvsQqzXuF%2FgposTACgbV4THFiwwvwzyjeCs%2Fbm%2BJpX%2BjRrN1NUghUA5DmeMvneQ8Bf6%2FUROxYVJCJEjF4XzWzdxt45P15ekSFxy1YVastNbu8IysXXVNxutkG3SMXmbIFA0QvpYxTjCQgvDLBjqkAa5469jGXGx0ZsXMhgSOWF%2BJZuESuIiO7LTKXijW4ntRqgP1%2F6S%2Fa7EGANnc3Rnf%2BhVW6kZUiQed5nHNTHaxB0FL5%2BnUQsEhrYfWAvgm6GFinmRqm7Ok1kzscuLxVq6Iv0XSy0EO1EV%2FqcRbR1CO6VNtsV81Pv6Teu0Bx6fMN5jxLVUS2UIS9uJYZFfBNzHA6xf%2BGyyeFxGkDwZesHXGTzKhaj50&X-Amz-Signature=4ffddc681646d2cef7f617bf16ed5360995c974cc865b9ab9f9e314f3828252f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663457KU2B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtNzyYfKEj27IW%2BkZDUCWpp67lH%2B5JSrliwK2tbzE3AIhAPW2rbjAs00UbPvvhZDsEYleVqgtaegccL8sjfx1JAZXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFM3rf1xy7q4vPXe4q3AP699IiYNqMY7zw8kGHx4nX5awK3AI2J0ZIl0Qoh2nHtxjQdWCXfDzWr3qUu9KYGMwBIdx2YRRbMtChE3V1sL%2FO621swSyOLxKiLHi0tfijfGiUmONSOIO8VY9Atf5kf2xsMCIEqOMh1yahW%2BDIutZetYg47B9R5EiVUV8pV34hLUQd0grXEzWmjMs5dIfK0oWO2qtNPBP2XqyOORMJ5JbyQce2F0mlplFrFu4N%2BMPT8XE5hJtcvGBpfeOR92BmKaTKMtTWBKdVRrRrqnA%2FdwGtRuA8uorMKkeSOOj%2FpI3rqJpWa22Fh64FW%2BWeXQ4ptFThG%2BG0HC18JcBImhIP0HjyBDKEN%2FV1V6%2FbxeZ8%2BwC%2FheVKsm%2B1MtsFvB84m%2F%2B3mSZCd59sX2vCO%2F3NYg9dkLLfUk1P%2FMKKpZdtjkpHlHGXpkXjLEpgeGh%2BtTe%2BKl%2FXndwIF2EzwUEPZuIAOuklzL5yI28acE6jIzZaGFOPz530SEqtTY6ktvsQqzXuF%2FgposTACgbV4THFiwwvwzyjeCs%2Fbm%2BJpX%2BjRrN1NUghUA5DmeMvneQ8Bf6%2FUROxYVJCJEjF4XzWzdxt45P15ekSFxy1YVastNbu8IysXXVNxutkG3SMXmbIFA0QvpYxTjCQgvDLBjqkAa5469jGXGx0ZsXMhgSOWF%2BJZuESuIiO7LTKXijW4ntRqgP1%2F6S%2Fa7EGANnc3Rnf%2BhVW6kZUiQed5nHNTHaxB0FL5%2BnUQsEhrYfWAvgm6GFinmRqm7Ok1kzscuLxVq6Iv0XSy0EO1EV%2FqcRbR1CO6VNtsV81Pv6Teu0Bx6fMN5jxLVUS2UIS9uJYZFfBNzHA6xf%2BGyyeFxGkDwZesHXGTzKhaj50&X-Amz-Signature=302d7169578ab25b4d06b38d05a01bc322d39e66636f29518e643f7cecd704e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663457KU2B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtNzyYfKEj27IW%2BkZDUCWpp67lH%2B5JSrliwK2tbzE3AIhAPW2rbjAs00UbPvvhZDsEYleVqgtaegccL8sjfx1JAZXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFM3rf1xy7q4vPXe4q3AP699IiYNqMY7zw8kGHx4nX5awK3AI2J0ZIl0Qoh2nHtxjQdWCXfDzWr3qUu9KYGMwBIdx2YRRbMtChE3V1sL%2FO621swSyOLxKiLHi0tfijfGiUmONSOIO8VY9Atf5kf2xsMCIEqOMh1yahW%2BDIutZetYg47B9R5EiVUV8pV34hLUQd0grXEzWmjMs5dIfK0oWO2qtNPBP2XqyOORMJ5JbyQce2F0mlplFrFu4N%2BMPT8XE5hJtcvGBpfeOR92BmKaTKMtTWBKdVRrRrqnA%2FdwGtRuA8uorMKkeSOOj%2FpI3rqJpWa22Fh64FW%2BWeXQ4ptFThG%2BG0HC18JcBImhIP0HjyBDKEN%2FV1V6%2FbxeZ8%2BwC%2FheVKsm%2B1MtsFvB84m%2F%2B3mSZCd59sX2vCO%2F3NYg9dkLLfUk1P%2FMKKpZdtjkpHlHGXpkXjLEpgeGh%2BtTe%2BKl%2FXndwIF2EzwUEPZuIAOuklzL5yI28acE6jIzZaGFOPz530SEqtTY6ktvsQqzXuF%2FgposTACgbV4THFiwwvwzyjeCs%2Fbm%2BJpX%2BjRrN1NUghUA5DmeMvneQ8Bf6%2FUROxYVJCJEjF4XzWzdxt45P15ekSFxy1YVastNbu8IysXXVNxutkG3SMXmbIFA0QvpYxTjCQgvDLBjqkAa5469jGXGx0ZsXMhgSOWF%2BJZuESuIiO7LTKXijW4ntRqgP1%2F6S%2Fa7EGANnc3Rnf%2BhVW6kZUiQed5nHNTHaxB0FL5%2BnUQsEhrYfWAvgm6GFinmRqm7Ok1kzscuLxVq6Iv0XSy0EO1EV%2FqcRbR1CO6VNtsV81Pv6Teu0Bx6fMN5jxLVUS2UIS9uJYZFfBNzHA6xf%2BGyyeFxGkDwZesHXGTzKhaj50&X-Amz-Signature=6c8d5280633de77b67ab72ba4e409aadd0086f4e5d5be6cd85cfa0283d31b3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y32YWGG%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FR3fiqSk1Mhq8FBDvKS%2BwhwYrJOnAMzS3TFyCLPPeEAiEAh9U7TaycacN5cOFKcy2NaGhxPf%2BIi8oAo3lhdof27bQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5lAW%2Bo4Wgmk6wlPyrcA3OuF3lImgW4lM3lrjvuTYMvszIMoVi%2FRsAS8KAudugh87zwVf5s%2FLecEvokjgDOq4oTu2AnSlk2LRAm7vcKKUmHf%2FUlqjcakAzwr6YkB%2FOeiPX8IUKPLukMFlhITi5WUsMPLqA7NQH1XXFvsI9FcU05VmJKv2nulrcOiA21Vt5DJ77IgQ4%2FofeV4Aes2%2BY2wNyIe3RKFCqy%2FnV2rvw%2FqavCZnZGXDSYidoZBqHOPXj8fzq%2B%2Bb2seVg6dJEj3jwECNqKSmvt5dI0D%2FYBwzQowF%2FNKtP9u1ULzEckKq3Zas9yCrL%2BWRWeB4ndMvBl2QjvFbxboPh%2FYb%2Bw1Z5%2FKVJkhsW81bWemPw0NGVERqPZJQTkI4JrD6CpcYHtNENrdQGCXY4Fcu64advAi%2B7oe28aqSHEcUD2ruLoKGNuQRFczfPtQTOUIl6Cp0neYx1EWuRNglRYOI0S8krQdH4FUZxlUhEqIBf3tmUrdQGN7P6KG%2FJPAtVssucBl%2FbVZJCYHl%2F%2Bh2RWUpXaSZBK%2BbVWo%2FGXa6txtB1UBdOip2JqE2wkwXHkSQghOFjfRGE%2FBtx6FVTZnRy9Gad0%2BFAptlLlOO%2FUoOwQV3apBBlChBqsDYovosgpC%2FKXyuyLVuLp03u8MJaB8MsGOqUB1rrLDLhOms688bQ9ggQSCfLM%2BWTfjCsNo6NHXKit%2BFvI%2FkwKadWi%2BfjsedhSYIsug6DgxVR%2FSgwqQoiXqmWCU8QnMp2r4%2Fam8Tt0smi6mmVMuVPPsHrAbl3JPHw2RcdMyJUxvbzqyg%2FbxYyN%2FAyPqtHliZQHvMoKnGPFnra2YqLDqQBik40vXt%2Bg5MPy77XpqzGk%2FtL2%2Fp5wI8C7s7cEn7givw0A&X-Amz-Signature=4a7045dd05f253d6e73ade09bd1962fe27acb9e30f8438ed6d628446bce59b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RLN3EY%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bt5dNF%2F3BlBUeDpr4vHLM8U8U0oGW0PgAypNiZDVPIAIgSeH7tas3W0IxaNDlCNE95UdE1yDf6USReR7Y5%2FThuHsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdh3ru2zaWCEai43SrcA3i7B%2BNpMlYKPWIS5qtxmmNDOHTP05rtE7pOd6Mqbgv8%2FDeG0zrD10P6m1PUhpRwNLGJ3i8Nnex8NCyhihbg1ODpC5Aitzk1BH5z%2FEyiuivd12%2FGBYvKRt2KCwxzI6v2ZNJiFPxFzOMBTuqkBo6gLy5OWkJV4BImq8uy73IfVDj%2BUjdk9Rty1Enqy22YO%2Fw5mpRUvLD8jlXoFkq4hnY9bEKxarwvwfQ8wM6K6jpJ56jjAIYKehKfae6qNw4pfMkfZfyu18yoNOopa%2BE1hID8kN44SBZ9blEpJLB5805EAHn9OpBQfihgKXUo0y8H9PGPia2eXEYT6YwRY%2BQPnneWzkuHjREFTI08765b%2BqXSC71iVrdh8FSiqta%2FmcOVR1XpP50hM69aJXsLtOYtexeASZCTEdFciPWDyPBLT%2Fh0kcRccEIOZZluZ70UC5gmFMjFfu643gdmPilEsHUw6cQSbFV8%2Faw5VQp5NF8fRdQtvMXZshbK%2BehSdqnZZA1f3dEWmm6v8ACKGLAJv%2FIZtwuuePbS8%2BLUWzVuQAF8vQ1Fd43aBoPSIuLYlxenIZAeQlCb3g4BYUxd64SBcL8hvr39ocV%2Ffcd8P6s4laMgUKu282a3vqZ1%2FX9DvVybkVerMMqB8MsGOqUBUKgrqZDt27T%2FughQIqR8yBieuNBStGGDeYOoLfpalaNnJ7eQ6PfEUX9e4j26hT3MjpuZx8Opzsys5pXC8RarwAMd9OYh7RsVfu8%2BNVD72GkkK5yo1%2BQtSHwZoKyDGS89slbueSxl4uH4sSZ65YCyNbSJr%2B%2BQw6VnzbCZL6BJcg29O262bg87CB%2FsOiH3Qe4AuQxhTIlkBkjFkTobadDBIEVvzb7g&X-Amz-Signature=d4d2a075848246b51e78aad49173281f897f29409517a59c855354d0318d9dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663457KU2B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtNzyYfKEj27IW%2BkZDUCWpp67lH%2B5JSrliwK2tbzE3AIhAPW2rbjAs00UbPvvhZDsEYleVqgtaegccL8sjfx1JAZXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFM3rf1xy7q4vPXe4q3AP699IiYNqMY7zw8kGHx4nX5awK3AI2J0ZIl0Qoh2nHtxjQdWCXfDzWr3qUu9KYGMwBIdx2YRRbMtChE3V1sL%2FO621swSyOLxKiLHi0tfijfGiUmONSOIO8VY9Atf5kf2xsMCIEqOMh1yahW%2BDIutZetYg47B9R5EiVUV8pV34hLUQd0grXEzWmjMs5dIfK0oWO2qtNPBP2XqyOORMJ5JbyQce2F0mlplFrFu4N%2BMPT8XE5hJtcvGBpfeOR92BmKaTKMtTWBKdVRrRrqnA%2FdwGtRuA8uorMKkeSOOj%2FpI3rqJpWa22Fh64FW%2BWeXQ4ptFThG%2BG0HC18JcBImhIP0HjyBDKEN%2FV1V6%2FbxeZ8%2BwC%2FheVKsm%2B1MtsFvB84m%2F%2B3mSZCd59sX2vCO%2F3NYg9dkLLfUk1P%2FMKKpZdtjkpHlHGXpkXjLEpgeGh%2BtTe%2BKl%2FXndwIF2EzwUEPZuIAOuklzL5yI28acE6jIzZaGFOPz530SEqtTY6ktvsQqzXuF%2FgposTACgbV4THFiwwvwzyjeCs%2Fbm%2BJpX%2BjRrN1NUghUA5DmeMvneQ8Bf6%2FUROxYVJCJEjF4XzWzdxt45P15ekSFxy1YVastNbu8IysXXVNxutkG3SMXmbIFA0QvpYxTjCQgvDLBjqkAa5469jGXGx0ZsXMhgSOWF%2BJZuESuIiO7LTKXijW4ntRqgP1%2F6S%2Fa7EGANnc3Rnf%2BhVW6kZUiQed5nHNTHaxB0FL5%2BnUQsEhrYfWAvgm6GFinmRqm7Ok1kzscuLxVq6Iv0XSy0EO1EV%2FqcRbR1CO6VNtsV81Pv6Teu0Bx6fMN5jxLVUS2UIS9uJYZFfBNzHA6xf%2BGyyeFxGkDwZesHXGTzKhaj50&X-Amz-Signature=13bf25b053f1f84dca76a79b218e350c974e65a3f870ec87acefa690e45f278e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
