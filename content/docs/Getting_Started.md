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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EOIUEK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDYVp1alxe9tC8VeW5ksjOc5THwt%2B3lBKvbNFblnOnipwIhAMjAJFvHEdZnRanHafnO7ubKsnUxbotId31J9OXn1qnTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzDJJlCmiP8SH%2FL%2BFsq3AOVrk8bWeU%2FVX3Qxs8FN7WLyjVfJM2zcgTqp%2FJvqrkRBRXF8sETBqxpbwBWOo5luo3DhSLJFS74C5Zr70mtpc1B5YB6r6JbbQO1ZXfVCrWSpBlAcUIdC1YYnD7EVB0pbDaod9NspFesIQxZ%2B1IJGqU0%2BG8y6cKsFEsd0V1iw%2FZta0OfNCAt0s5KGw0X86mFFrE3sD9pgx5Cosh8OcO1DMSw955Zk8MbTG6mnSVvVujWZcS2YEcX3%2Brp50fH0JXr6T%2BeKAu4JxBEAQRXg7wXkoVs6yxWtNuZ0meXeZgWOCJaPJx2NuyGmQTbnYQmoXDyvJLWSXTZqQh5hOPS6wNAAJGmu6HmjIGopk5uBvn%2BKI9AD4b%2BFajqJVDgxfbMDOnzl0HR16zH%2FlvxeKLVXRSM4yzu8z3FrgY7ffpoXHUXC9L4yJiA68k7QJzpa%2BEoMTtvDGMkhAVNnCTyBy1QYBpWbivKrejd0P3X2ryKf6Z6G7yahACCwpgtJA%2FkBMR4S49zjbAsGccFdRXAmbHWXk%2F6qIqKM%2BUR3eBfus5SdVk4xv5frBIiO%2BUtj58nntU4ahSwnBc8kfwbjQW7ezesmcKrley70MU1nelmI6mzWN2CaP8LJ2T038vpsd9qmMvd4zDyjuXDBjqkAWJ%2BeqoO9fyRREerLeIzjtejFfngyI8BB6yQEp9cV1tg1WuyqTz%2BCXEdqOJw5asKw%2F0nAA0LOklHHoSGa3qVE01%2F0HwpvY3SYNnWhLTHgloHktjQXrIMdoR4%2FYG71%2FeimIjJ6tJVfzyUG3n6bsUYVNEiQmOCuWMT6cqpHl%2FkC89Y6P6XbDb3yOrdz1X5uiMjiU1mxEiB3Cm9rw9s3UBippo8JjKV&X-Amz-Signature=c2b73a276e2bb3d784d32a7136261b7b5cae4ac39b1dc372cd8cf40d94fbc779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EOIUEK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDYVp1alxe9tC8VeW5ksjOc5THwt%2B3lBKvbNFblnOnipwIhAMjAJFvHEdZnRanHafnO7ubKsnUxbotId31J9OXn1qnTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzDJJlCmiP8SH%2FL%2BFsq3AOVrk8bWeU%2FVX3Qxs8FN7WLyjVfJM2zcgTqp%2FJvqrkRBRXF8sETBqxpbwBWOo5luo3DhSLJFS74C5Zr70mtpc1B5YB6r6JbbQO1ZXfVCrWSpBlAcUIdC1YYnD7EVB0pbDaod9NspFesIQxZ%2B1IJGqU0%2BG8y6cKsFEsd0V1iw%2FZta0OfNCAt0s5KGw0X86mFFrE3sD9pgx5Cosh8OcO1DMSw955Zk8MbTG6mnSVvVujWZcS2YEcX3%2Brp50fH0JXr6T%2BeKAu4JxBEAQRXg7wXkoVs6yxWtNuZ0meXeZgWOCJaPJx2NuyGmQTbnYQmoXDyvJLWSXTZqQh5hOPS6wNAAJGmu6HmjIGopk5uBvn%2BKI9AD4b%2BFajqJVDgxfbMDOnzl0HR16zH%2FlvxeKLVXRSM4yzu8z3FrgY7ffpoXHUXC9L4yJiA68k7QJzpa%2BEoMTtvDGMkhAVNnCTyBy1QYBpWbivKrejd0P3X2ryKf6Z6G7yahACCwpgtJA%2FkBMR4S49zjbAsGccFdRXAmbHWXk%2F6qIqKM%2BUR3eBfus5SdVk4xv5frBIiO%2BUtj58nntU4ahSwnBc8kfwbjQW7ezesmcKrley70MU1nelmI6mzWN2CaP8LJ2T038vpsd9qmMvd4zDyjuXDBjqkAWJ%2BeqoO9fyRREerLeIzjtejFfngyI8BB6yQEp9cV1tg1WuyqTz%2BCXEdqOJw5asKw%2F0nAA0LOklHHoSGa3qVE01%2F0HwpvY3SYNnWhLTHgloHktjQXrIMdoR4%2FYG71%2FeimIjJ6tJVfzyUG3n6bsUYVNEiQmOCuWMT6cqpHl%2FkC89Y6P6XbDb3yOrdz1X5uiMjiU1mxEiB3Cm9rw9s3UBippo8JjKV&X-Amz-Signature=de74e5e78b932925d89e56e7520e9f31d07029832c17b17eaad4452bd39d3a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EOIUEK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDYVp1alxe9tC8VeW5ksjOc5THwt%2B3lBKvbNFblnOnipwIhAMjAJFvHEdZnRanHafnO7ubKsnUxbotId31J9OXn1qnTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzDJJlCmiP8SH%2FL%2BFsq3AOVrk8bWeU%2FVX3Qxs8FN7WLyjVfJM2zcgTqp%2FJvqrkRBRXF8sETBqxpbwBWOo5luo3DhSLJFS74C5Zr70mtpc1B5YB6r6JbbQO1ZXfVCrWSpBlAcUIdC1YYnD7EVB0pbDaod9NspFesIQxZ%2B1IJGqU0%2BG8y6cKsFEsd0V1iw%2FZta0OfNCAt0s5KGw0X86mFFrE3sD9pgx5Cosh8OcO1DMSw955Zk8MbTG6mnSVvVujWZcS2YEcX3%2Brp50fH0JXr6T%2BeKAu4JxBEAQRXg7wXkoVs6yxWtNuZ0meXeZgWOCJaPJx2NuyGmQTbnYQmoXDyvJLWSXTZqQh5hOPS6wNAAJGmu6HmjIGopk5uBvn%2BKI9AD4b%2BFajqJVDgxfbMDOnzl0HR16zH%2FlvxeKLVXRSM4yzu8z3FrgY7ffpoXHUXC9L4yJiA68k7QJzpa%2BEoMTtvDGMkhAVNnCTyBy1QYBpWbivKrejd0P3X2ryKf6Z6G7yahACCwpgtJA%2FkBMR4S49zjbAsGccFdRXAmbHWXk%2F6qIqKM%2BUR3eBfus5SdVk4xv5frBIiO%2BUtj58nntU4ahSwnBc8kfwbjQW7ezesmcKrley70MU1nelmI6mzWN2CaP8LJ2T038vpsd9qmMvd4zDyjuXDBjqkAWJ%2BeqoO9fyRREerLeIzjtejFfngyI8BB6yQEp9cV1tg1WuyqTz%2BCXEdqOJw5asKw%2F0nAA0LOklHHoSGa3qVE01%2F0HwpvY3SYNnWhLTHgloHktjQXrIMdoR4%2FYG71%2FeimIjJ6tJVfzyUG3n6bsUYVNEiQmOCuWMT6cqpHl%2FkC89Y6P6XbDb3yOrdz1X5uiMjiU1mxEiB3Cm9rw9s3UBippo8JjKV&X-Amz-Signature=1b1852cf0ebc825c9d643eac90a745fcc690cb4b769c714f568524920a88ccdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KT7C4L%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDML7BqtkFg0Eqb%2B1mcD%2FYeJ%2FF%2B1cNcLSiKIygitI2zmAiEAsyhXsck6V6oNe%2BDWpRoyi9KMZObf2qwL2N8Efdhexs4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGrCzxytgV%2BlN5AgsircA06%2Fw59%2F37e%2FTMxTeMkKr4IsLdWnZDqB1FvvZkXEv%2BxFvp8TdAaWcnVpoCsi71YN2ghBYfSYlLE5ufB7o7YI2dwNJoT5fdfRSdddsP81kiYO52E8TrzEmWyUJuVChC46fYO3lbBXV%2FcRSp7NQtRR9hMK8zGtBizOc7Qe5C5V9eXcFYWt7cYGeWWiZebJY%2F6h5i3Dh9QuLV478WNAG6soFpvV6HHWoXjL2UTUACMjxtFdKbejLPwyPKMxC%2BD7Ee3PBJ8NOu2cVWvRo%2Fi78ksLjkZt8USL9k%2BokgY5UB4MdcUYBeIZQhWwQjWhW%2BAs7PM4nF5FZV7VrMSIYQ99izjqMDYvLx7%2BCYLftAJEFjtIAcctA2O5x%2BDmj7RIMHJtnHWV811lGc2F0W7b2baFPQHU1Qvcvq0%2BNvpwmBTdmIcvkdwC%2BhO5hzdnkJylZ1t4xauH%2FpFFsgcmCOmsr7QzmfFQO5IeKoqi1KmQAvFbKBU%2BUblUcCqJ6LmndImHR96rYir8JzqhnDD4wGA2Yla2ZewcDiWM4LJVP5IzwNz%2BcS6vTZMxfi7NAl7NQ974pb2KMFvLmkEOY8C%2FnA1UR0byUZjelq2dd5bYxeNKrAVCGKF2kpN4nZ%2FAynj0ygSV83z8MNSN5cMGOqUBdCA0JePrZR3s%2B0B8VRZx3bbDH1qzDArpN2qWxOBNJa0XWxNtXa%2B0DRcCfouO36OoLgQKtglm4%2B63QzLeblx%2B7I8veaJXkPKqS%2BelNRBIDkHfGz%2FnHwgZkxtXjnP2AT3S%2F%2BIdlDzT1Icdh7wYBjHtPjM%2Frdt3dSBDeEBBhwwhQk2wuZHXaVGtcB2IOTFeAw0NAMl4hAfWq9tvzr4cjRn%2B5Y8MvacQ&X-Amz-Signature=61134070d66a0aa482775beff8125cb5bd5b42942e8e3b676c701613b0bd758e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKHUMP5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDk7WEm1%2BF%2BEXzuiy2IHJFs7DL%2F2gLzuIfXASSoZfrppQIgLDcjbeN%2FjDnhosqFVJiaaDkouAqjNnnfSP4NK%2FQ%2BLqUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB49Sl1WAl3qPEmVFSrcA5T30aVdLg3N%2Fkd8Hy%2BFDyUMmY4W30%2F1ILEX1CahaXKWOzO5dnW4%2B0%2BhoxC31Vs1xIMH3iyYzV%2B%2FcwXaDhMhj525kI0shmejXljQU%2BpacFJQFQM1RKWsKWmkaL9VlCbgd2Zjm364UdFapv%2Bb5b9QZXqAhZ8xroCCTFoIQlOMiF%2Bgn6yd%2BcCu1P99K8YUAJD2OQihZC5mnvCLS0DCFEemyivGD8BFqwzPZbMuXLdQ10eH8h6R%2BMBX99PY83X%2Bkrul26qye4xg%2BqUpFlQhSngpxXq7q6pq4uDDbyXlnmg14nHqA6Y6YbFoWtHxSRNR1uF6U7p0d6ez38cksbD0yyZ5IlwFIN4wVMzzckSt5WltTdostkaV%2FE5HsoFpDkB%2B%2By9wphymitImXjBwGXHXqUy1SpgBuZfT1kCZb8Trp6Y46rXTzEjICyS7QXmDR%2FE%2FA0B%2F85saG5j4LTXn871kMTxwfT%2BRAUO1sLQCsoY3iy1vL2QS6mQ6B4NBddBeycybS56Q3q1ej0Cm%2BFBWqK0MGK1FyvKoh5jwB6d7J0VVW1wn4LoRDTAiHFVaOCePrzL%2FFO6S71d%2FgRa%2FjuMHDTvJ2gYg1lj0IaAlZtTeg9NZq9JF9UHzo9bS7t1DYqgLSPEXMNqO5cMGOqUBWOgz43fzLwy0XoYGuAu9UbZXlpXgQbzposk1Mq4q5htJyYiavM6Et%2BaLL6VnZgvkkHDVr2bWPotif9YxXlN1GlQcpCyIWNyFBfjaq5fqbMb1Ctswe3I8MarUZrVSCAkkwomeGb5V1CbcQUaEFtON2l%2B7HduTN4GKoiBg5JsuDAcVEiB%2FE0jFaPi8DaQnf4%2Fyxsd7ZKX5BFzBHuDQSxD1OI%2FmDP8i&X-Amz-Signature=307ab0c445605d21ce13480e1df193798a09232ab2d30fa37cbd66b55910b1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EOIUEK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDYVp1alxe9tC8VeW5ksjOc5THwt%2B3lBKvbNFblnOnipwIhAMjAJFvHEdZnRanHafnO7ubKsnUxbotId31J9OXn1qnTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzDJJlCmiP8SH%2FL%2BFsq3AOVrk8bWeU%2FVX3Qxs8FN7WLyjVfJM2zcgTqp%2FJvqrkRBRXF8sETBqxpbwBWOo5luo3DhSLJFS74C5Zr70mtpc1B5YB6r6JbbQO1ZXfVCrWSpBlAcUIdC1YYnD7EVB0pbDaod9NspFesIQxZ%2B1IJGqU0%2BG8y6cKsFEsd0V1iw%2FZta0OfNCAt0s5KGw0X86mFFrE3sD9pgx5Cosh8OcO1DMSw955Zk8MbTG6mnSVvVujWZcS2YEcX3%2Brp50fH0JXr6T%2BeKAu4JxBEAQRXg7wXkoVs6yxWtNuZ0meXeZgWOCJaPJx2NuyGmQTbnYQmoXDyvJLWSXTZqQh5hOPS6wNAAJGmu6HmjIGopk5uBvn%2BKI9AD4b%2BFajqJVDgxfbMDOnzl0HR16zH%2FlvxeKLVXRSM4yzu8z3FrgY7ffpoXHUXC9L4yJiA68k7QJzpa%2BEoMTtvDGMkhAVNnCTyBy1QYBpWbivKrejd0P3X2ryKf6Z6G7yahACCwpgtJA%2FkBMR4S49zjbAsGccFdRXAmbHWXk%2F6qIqKM%2BUR3eBfus5SdVk4xv5frBIiO%2BUtj58nntU4ahSwnBc8kfwbjQW7ezesmcKrley70MU1nelmI6mzWN2CaP8LJ2T038vpsd9qmMvd4zDyjuXDBjqkAWJ%2BeqoO9fyRREerLeIzjtejFfngyI8BB6yQEp9cV1tg1WuyqTz%2BCXEdqOJw5asKw%2F0nAA0LOklHHoSGa3qVE01%2F0HwpvY3SYNnWhLTHgloHktjQXrIMdoR4%2FYG71%2FeimIjJ6tJVfzyUG3n6bsUYVNEiQmOCuWMT6cqpHl%2FkC89Y6P6XbDb3yOrdz1X5uiMjiU1mxEiB3Cm9rw9s3UBippo8JjKV&X-Amz-Signature=24ca0fcd9ba3a4c72e1eb9c79c4081bebba201b0bff44d03fdbd69649f214357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
