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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC3T7HM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FtSlYxGNmXOWSFfBYCl0Vms6ee1TThD6b30KwN09K%2FAiAt21vmvPGN3tAbbDdXVJTjxQXyZiibqoPYHF0ktcX7dir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BiGQPi5p6Gvw9zKhKtwDZRiHOqZ1wNtX9olRxef5HtteJJu655oxUbzCh1%2FE%2FHM8d7iO9GJCz1snNJfjfHGmYcjOcS9DVBr0ilOfbJbiEuI7OYDfyOQGtc6Q59fVIJuj4tQIosJw4c2R5fXMxP1GySrMRzVilztRng7aqqu419SkK%2Bg72oIubEbcnc2HZsuX4FjTh5fLvxCQVa4jPEN%2FkubBtUsarc0oHxMxaQ3usWFHPXfeijRYfz0OfrNW6IU3Y3jLYUDg9kjGTKwYc3PQJmt0CwqVLdJ9hV6Ixkhu1QQ3NUIW5i95MGAU5yatiSa%2B7ww7UGD2Zp7LLz2tXCiUlR8Yvp46iKYYAJ7wxcnwbsAk3yuEQ%2F%2FgvaKWX8ImDWxZhF%2FN6Xk9pxF%2BitaYzVHPv85zhH5ZhfOW%2FRfWIn0e%2FY9RIW5trZQiUP7UGDHxUUb96b4dYZgZBVojcVV6k7LSkWVXfrSpjUjkVobW5zrOinZQS1F66OZfo9OYu4p3K6yp2MOJVQmw97IZ43NWpnZmHB6wH7cc4qXNVBvBjTCUImYiw0pkiAXHGVm8WqveZubuPaEaKrOxHzDw%2BqfegE2UjtQg9kQ6%2Fh3xEG6N3yppprLFLOyU%2BCmUbODuuTLExZrTKW2S5VUAZkJjtvkw4PqOwgY6pgHuNtJr7pQnkwRu2tZNm%2BlEiKYPaBmaMar0623iEt0QeOlKuQ6Eunw3JZ3mtlu%2F9A5%2FTc34S5I3zVaJOZEmE6lvWmq3ZrHUqCJRWa6CLY1w06EHDET8cKSos3zF2w2WKzwdVVuIvw6YTBHD5ZqXAYnJrDffU%2BFrlLSlzTM3ESXkPRfGOSx2SOo3q0WSZfHQBYJ2CCcF%2BlsBH%2BUoWMlHqPG8vHQHEJG9&X-Amz-Signature=40fc33dd80b64189f8b398f9c36af1b6924e7214cb4707f056466381a819fc95&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC3T7HM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FtSlYxGNmXOWSFfBYCl0Vms6ee1TThD6b30KwN09K%2FAiAt21vmvPGN3tAbbDdXVJTjxQXyZiibqoPYHF0ktcX7dir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BiGQPi5p6Gvw9zKhKtwDZRiHOqZ1wNtX9olRxef5HtteJJu655oxUbzCh1%2FE%2FHM8d7iO9GJCz1snNJfjfHGmYcjOcS9DVBr0ilOfbJbiEuI7OYDfyOQGtc6Q59fVIJuj4tQIosJw4c2R5fXMxP1GySrMRzVilztRng7aqqu419SkK%2Bg72oIubEbcnc2HZsuX4FjTh5fLvxCQVa4jPEN%2FkubBtUsarc0oHxMxaQ3usWFHPXfeijRYfz0OfrNW6IU3Y3jLYUDg9kjGTKwYc3PQJmt0CwqVLdJ9hV6Ixkhu1QQ3NUIW5i95MGAU5yatiSa%2B7ww7UGD2Zp7LLz2tXCiUlR8Yvp46iKYYAJ7wxcnwbsAk3yuEQ%2F%2FgvaKWX8ImDWxZhF%2FN6Xk9pxF%2BitaYzVHPv85zhH5ZhfOW%2FRfWIn0e%2FY9RIW5trZQiUP7UGDHxUUb96b4dYZgZBVojcVV6k7LSkWVXfrSpjUjkVobW5zrOinZQS1F66OZfo9OYu4p3K6yp2MOJVQmw97IZ43NWpnZmHB6wH7cc4qXNVBvBjTCUImYiw0pkiAXHGVm8WqveZubuPaEaKrOxHzDw%2BqfegE2UjtQg9kQ6%2Fh3xEG6N3yppprLFLOyU%2BCmUbODuuTLExZrTKW2S5VUAZkJjtvkw4PqOwgY6pgHuNtJr7pQnkwRu2tZNm%2BlEiKYPaBmaMar0623iEt0QeOlKuQ6Eunw3JZ3mtlu%2F9A5%2FTc34S5I3zVaJOZEmE6lvWmq3ZrHUqCJRWa6CLY1w06EHDET8cKSos3zF2w2WKzwdVVuIvw6YTBHD5ZqXAYnJrDffU%2BFrlLSlzTM3ESXkPRfGOSx2SOo3q0WSZfHQBYJ2CCcF%2BlsBH%2BUoWMlHqPG8vHQHEJG9&X-Amz-Signature=1acacb9a46894344a8e2a9197701fbf0d64dd57c6da89e782d38e72585264956&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC3T7HM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FtSlYxGNmXOWSFfBYCl0Vms6ee1TThD6b30KwN09K%2FAiAt21vmvPGN3tAbbDdXVJTjxQXyZiibqoPYHF0ktcX7dir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BiGQPi5p6Gvw9zKhKtwDZRiHOqZ1wNtX9olRxef5HtteJJu655oxUbzCh1%2FE%2FHM8d7iO9GJCz1snNJfjfHGmYcjOcS9DVBr0ilOfbJbiEuI7OYDfyOQGtc6Q59fVIJuj4tQIosJw4c2R5fXMxP1GySrMRzVilztRng7aqqu419SkK%2Bg72oIubEbcnc2HZsuX4FjTh5fLvxCQVa4jPEN%2FkubBtUsarc0oHxMxaQ3usWFHPXfeijRYfz0OfrNW6IU3Y3jLYUDg9kjGTKwYc3PQJmt0CwqVLdJ9hV6Ixkhu1QQ3NUIW5i95MGAU5yatiSa%2B7ww7UGD2Zp7LLz2tXCiUlR8Yvp46iKYYAJ7wxcnwbsAk3yuEQ%2F%2FgvaKWX8ImDWxZhF%2FN6Xk9pxF%2BitaYzVHPv85zhH5ZhfOW%2FRfWIn0e%2FY9RIW5trZQiUP7UGDHxUUb96b4dYZgZBVojcVV6k7LSkWVXfrSpjUjkVobW5zrOinZQS1F66OZfo9OYu4p3K6yp2MOJVQmw97IZ43NWpnZmHB6wH7cc4qXNVBvBjTCUImYiw0pkiAXHGVm8WqveZubuPaEaKrOxHzDw%2BqfegE2UjtQg9kQ6%2Fh3xEG6N3yppprLFLOyU%2BCmUbODuuTLExZrTKW2S5VUAZkJjtvkw4PqOwgY6pgHuNtJr7pQnkwRu2tZNm%2BlEiKYPaBmaMar0623iEt0QeOlKuQ6Eunw3JZ3mtlu%2F9A5%2FTc34S5I3zVaJOZEmE6lvWmq3ZrHUqCJRWa6CLY1w06EHDET8cKSos3zF2w2WKzwdVVuIvw6YTBHD5ZqXAYnJrDffU%2BFrlLSlzTM3ESXkPRfGOSx2SOo3q0WSZfHQBYJ2CCcF%2BlsBH%2BUoWMlHqPG8vHQHEJG9&X-Amz-Signature=7454952e161c51a39e2a1e48d382b922ebb5a5442de4adfc5d9c05cee045ee0c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXOELUS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYaMr53Mg2vQUG9rcWPEXjqAVajPB8Oeoe6up%2FosX9sAiEAofu46K8L0H6jucc4or43jWqUmLTSiTd7FZkfXuxKfgEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOEw0tHl%2BAiZOwhmhCrcA%2FDHHFmJqp7EeRXjeScPY8jnlimqvSYW2llDmVWZsZ0iMkS%2Bd44DeGM%2FIkacAM7rOOPA7KTb7KgXMuRVnXWVoxMLWLkKAlLPH%2F42K5G0BHxMv3vsbpN5FRgmmyqb8xP0oeR1C62KZgMZutI7gemkaAZJ8aaHyBFpHa0GZ8djhFHG8M%2B1jfJcCQFfRL35sHlRdLwxaGfnwtSfqHwr6UbQVR5hmb28obi8JpXjGjm2HI%2BsODEW2n8F%2BdBNaASfk7Tq28jGJWTki%2FA93GhJkE9NgkeLLxX3%2FQgJsCty%2BxXYqVVlNmbh779M80VmMfQ8XardibZYF%2FYzQpwcOaerV35zQwForX5w8NUOXeHxa3UrDUgW1idEiJc6zBzmv12i2ycSkSDEGIeYah3VCmYPC11cHw0tFb1AzNxzA4B5nEFHV3d655qLRmgOeF9SybxA3SF1cQTHZ7tbzwvpa%2FchdesTolF0TUPzS9XxgyaaypTDDBMGhAqjTbjn06EdTiPsAtF9dvGvA5Ae6yLiRA56Q2xHbSZq0CA6w1PpF9FgGoGv1T%2BJ3tm7LbTrL5d77XxDsXy045xQU6dEzp0syjEs%2FJwmLLvn9QlLmaAWONM3ko6VDFWV8iNg2O7p8DIiSfuUMLf6jsIGOqUBSHb%2F3CwxBXG7J2VXmD%2Fo7XJqivTVdlMEhoha0aY8Bbi75H4%2B5SOHi%2FKFPSuLmWtjSX1y5bcBOuoCBgmQEgOfgykQzFGUxeo3q%2Bx6eUfJXWNr%2Bxm%2FPpus%2FOZL%2FXH%2F0Z%2F5%2FAcJ7s483ODLxklcXvcms5jCCOVlK%2FxsmOwQRfcOQkkLKhg5StD2ar7hLCiTDu6UVY00EsV3T7%2Bu3BLQBVfPsdXX%2BAqT&X-Amz-Signature=5495f39566f46a023278fd856f6fe879849244f06ed16ff60e870eb95994f49e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WSXF45I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR4JxyNMhlQ3mDTBjlmhIn6f3LqzvgyV6QjliJEpmEmgIhAKoqQnKyCYhva%2BuPrTM94Zg%2FXxxPLv4WAhlMbT8S7O6oKv8DCG0QABoMNjM3NDIzMTgzODA1Igy1OAiXxdNG9K6yOf0q3AO1sbNJJ44uG%2BUEcbk6%2FzsqGy3NJaZcsYlz64AYbz51Fpebq5eCvZQCL4yPQgmOyrpPpa4Wn37xNxabXjFoJHLQ7ZcKsKiyoyWz1kt1fg4iXWD6kLZBptvo%2F3PivosKanGYnX8fQACzJPNCdVrsG%2BorLJEGdM3KTuN9i4kD4CrJKRLQF%2FTw3Alt08Xq1exCl1URXXmmuM%2BhAW9boAQbvdzJvB7pN2wp%2BZq%2FygXPlDrN6EnaqBvNrTouPplQ%2BHbRjnCV2d%2F7Qx6p%2BEaAaErLzp%2BeJDiTVoguVejUrOlusXvCQIYu7mcHkGmH5ZSk9%2B3RWt7Ngf0m5FWIdY7jmfEa73Bui4GehrFJSq28befYNzATBoPJKw9kad5PyCaiCD9TtFfieXkh1JKGso0ywRveq%2FuRfvwcVfc4KC3%2BH5RMnqr22%2BGE00yT5FS7LO1B8P0TkAi6FbhnvM1T1xqE%2BKFQqAR%2BebuMtSBYjMP5J7GHzQOnMqTifEa4I7%2BsFmyVRhnoA%2FqmSgs1o4OhZJKDgYj6ReUiZPICIwUBE%2BOFt11JZMc6cXhRW6en5mTzBn%2F7uGDJMYWR3xZ%2Bb6vTPG0ibmTeEaeEirbNqHx%2FNkcXJQubTeNoZXW8lx0CkT4U%2Bs8oMTCo%2Bo7CBjqkARKgX52scFQ0yunNS98CmjdEFPNDCiQwMbdY0HCZa7EykMZQAnf%2BgJWihj9qIYr6RDIp3AIbBwnNWtnNB7rJN7g2ab7vqyEesK9Vr3qlvvDCy5NAYdqWy%2BOcb8OpEWO3oXXzLTKcXCd1RhWenQYszCCg5OBDQKhCwFK%2FIZqW38TJ8iQhFclYRsYx%2BGGIO0Fg3zjE3g%2BhvcANKqYaFrLQHzC9%2BLrs&X-Amz-Signature=cd47b14e45dc85bb9e95d46ad927081203c0c4615b9a98ce9de45d5195ef353b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC3T7HM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FtSlYxGNmXOWSFfBYCl0Vms6ee1TThD6b30KwN09K%2FAiAt21vmvPGN3tAbbDdXVJTjxQXyZiibqoPYHF0ktcX7dir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BiGQPi5p6Gvw9zKhKtwDZRiHOqZ1wNtX9olRxef5HtteJJu655oxUbzCh1%2FE%2FHM8d7iO9GJCz1snNJfjfHGmYcjOcS9DVBr0ilOfbJbiEuI7OYDfyOQGtc6Q59fVIJuj4tQIosJw4c2R5fXMxP1GySrMRzVilztRng7aqqu419SkK%2Bg72oIubEbcnc2HZsuX4FjTh5fLvxCQVa4jPEN%2FkubBtUsarc0oHxMxaQ3usWFHPXfeijRYfz0OfrNW6IU3Y3jLYUDg9kjGTKwYc3PQJmt0CwqVLdJ9hV6Ixkhu1QQ3NUIW5i95MGAU5yatiSa%2B7ww7UGD2Zp7LLz2tXCiUlR8Yvp46iKYYAJ7wxcnwbsAk3yuEQ%2F%2FgvaKWX8ImDWxZhF%2FN6Xk9pxF%2BitaYzVHPv85zhH5ZhfOW%2FRfWIn0e%2FY9RIW5trZQiUP7UGDHxUUb96b4dYZgZBVojcVV6k7LSkWVXfrSpjUjkVobW5zrOinZQS1F66OZfo9OYu4p3K6yp2MOJVQmw97IZ43NWpnZmHB6wH7cc4qXNVBvBjTCUImYiw0pkiAXHGVm8WqveZubuPaEaKrOxHzDw%2BqfegE2UjtQg9kQ6%2Fh3xEG6N3yppprLFLOyU%2BCmUbODuuTLExZrTKW2S5VUAZkJjtvkw4PqOwgY6pgHuNtJr7pQnkwRu2tZNm%2BlEiKYPaBmaMar0623iEt0QeOlKuQ6Eunw3JZ3mtlu%2F9A5%2FTc34S5I3zVaJOZEmE6lvWmq3ZrHUqCJRWa6CLY1w06EHDET8cKSos3zF2w2WKzwdVVuIvw6YTBHD5ZqXAYnJrDffU%2BFrlLSlzTM3ESXkPRfGOSx2SOo3q0WSZfHQBYJ2CCcF%2BlsBH%2BUoWMlHqPG8vHQHEJG9&X-Amz-Signature=63716dbc8283b84d666e08a197464e5c3011309937fdd03f316be76dcfc26b88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
