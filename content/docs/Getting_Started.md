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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXGUWDP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDEn8fzkRXzvIqKftBAz7gD8ooS1QBHaXTVFdilWYoNiAiA%2BUnR5NW8gpvPn9y6dGftLFfVzNfTNnFfWPUo7mEZSySqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjgzYWMZ1DwbWbwsKtwD9whM%2FZu%2BUMmYzYq1FV2sIZzxZRes7yxYDmw6ossUZIPy9DGPDogeOUXRF03CtblcpAmizye5YB%2FD1h8pHhLht8LY8JuQZjZEnhhqVwkLUVQ%2BoeORqF9hjR53AyW6AQsr8St4RiEIwneAzs7lqWhTvaOqjtAzhhPr%2FceO3SSETyszEbnIMyTRHqRrMvuPwRevQzv0BIFVOJKsMR451qv8MsDYVDAArG3UJHpVc0FnP%2BXoLp1D0oOqq2loQVupXfh7PIgtI0HW9a7GAllg50CLxXFQhEK0l3pNIQqAFyWOx5Ocv2FqAq7VJkg6RjfXUl8hlHfvh%2B2rM6krpTPRL26TfjAtQBhuFvLBvq4SP%2BzvxIUO0hQp64V2lNIYvpN9NpSsfuN3kNWZJOgJCKoES0MsPNRRsZLAgrsg7kzW0Ux3OEBctDQrFAfGF3QQeHl0dljrGyYv%2BRs8dW1hfKJNvjkpNI2jz0fzPrVip3No8IzjvWNYmgJrrZ5YTu%2FNkmaCU4NKg42hIge3pVKugz6IYof73ktWVBqAd4XzdE9DYcaqRd9ewTrdlqgGGxohmNzslvQSdJffyopnaCm6xZzgPJmMh5CGIKHMK3c38bzDezjd6l%2B5F22QB6JpnToHaV8wgte4wQY6pgGA%2F6aM1AhylM5JqbWWJtsKcC%2BzNtU41MJVL%2FmpX9vE2vtnZa8Wx0Ya8AzCUiibGdFOrp68VALz7XzAp%2FXROBgLX%2B%2FehBDczAwfxu%2F7Bu0TWsKA0JV%2Bf2K7XX9lYaXm5Lj2o7sH09YALtTnpAs41XgUC9bERJObeao8DNSpOZZtN%2Bn1psq3PNLKiDOzuQ5OSXQqe2pXRljHNcBinH7jqWZiGzRunZp1&X-Amz-Signature=d34e37aeacf4b1000bd193ad771091769627450f8df163d9bbf714ca8e54f5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXGUWDP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDEn8fzkRXzvIqKftBAz7gD8ooS1QBHaXTVFdilWYoNiAiA%2BUnR5NW8gpvPn9y6dGftLFfVzNfTNnFfWPUo7mEZSySqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjgzYWMZ1DwbWbwsKtwD9whM%2FZu%2BUMmYzYq1FV2sIZzxZRes7yxYDmw6ossUZIPy9DGPDogeOUXRF03CtblcpAmizye5YB%2FD1h8pHhLht8LY8JuQZjZEnhhqVwkLUVQ%2BoeORqF9hjR53AyW6AQsr8St4RiEIwneAzs7lqWhTvaOqjtAzhhPr%2FceO3SSETyszEbnIMyTRHqRrMvuPwRevQzv0BIFVOJKsMR451qv8MsDYVDAArG3UJHpVc0FnP%2BXoLp1D0oOqq2loQVupXfh7PIgtI0HW9a7GAllg50CLxXFQhEK0l3pNIQqAFyWOx5Ocv2FqAq7VJkg6RjfXUl8hlHfvh%2B2rM6krpTPRL26TfjAtQBhuFvLBvq4SP%2BzvxIUO0hQp64V2lNIYvpN9NpSsfuN3kNWZJOgJCKoES0MsPNRRsZLAgrsg7kzW0Ux3OEBctDQrFAfGF3QQeHl0dljrGyYv%2BRs8dW1hfKJNvjkpNI2jz0fzPrVip3No8IzjvWNYmgJrrZ5YTu%2FNkmaCU4NKg42hIge3pVKugz6IYof73ktWVBqAd4XzdE9DYcaqRd9ewTrdlqgGGxohmNzslvQSdJffyopnaCm6xZzgPJmMh5CGIKHMK3c38bzDezjd6l%2B5F22QB6JpnToHaV8wgte4wQY6pgGA%2F6aM1AhylM5JqbWWJtsKcC%2BzNtU41MJVL%2FmpX9vE2vtnZa8Wx0Ya8AzCUiibGdFOrp68VALz7XzAp%2FXROBgLX%2B%2FehBDczAwfxu%2F7Bu0TWsKA0JV%2Bf2K7XX9lYaXm5Lj2o7sH09YALtTnpAs41XgUC9bERJObeao8DNSpOZZtN%2Bn1psq3PNLKiDOzuQ5OSXQqe2pXRljHNcBinH7jqWZiGzRunZp1&X-Amz-Signature=ad376d5d2a6e2d2c61385e6388823dd3c7c5f0a23fe2e834fb8ec551b4f37ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXGUWDP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDEn8fzkRXzvIqKftBAz7gD8ooS1QBHaXTVFdilWYoNiAiA%2BUnR5NW8gpvPn9y6dGftLFfVzNfTNnFfWPUo7mEZSySqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjgzYWMZ1DwbWbwsKtwD9whM%2FZu%2BUMmYzYq1FV2sIZzxZRes7yxYDmw6ossUZIPy9DGPDogeOUXRF03CtblcpAmizye5YB%2FD1h8pHhLht8LY8JuQZjZEnhhqVwkLUVQ%2BoeORqF9hjR53AyW6AQsr8St4RiEIwneAzs7lqWhTvaOqjtAzhhPr%2FceO3SSETyszEbnIMyTRHqRrMvuPwRevQzv0BIFVOJKsMR451qv8MsDYVDAArG3UJHpVc0FnP%2BXoLp1D0oOqq2loQVupXfh7PIgtI0HW9a7GAllg50CLxXFQhEK0l3pNIQqAFyWOx5Ocv2FqAq7VJkg6RjfXUl8hlHfvh%2B2rM6krpTPRL26TfjAtQBhuFvLBvq4SP%2BzvxIUO0hQp64V2lNIYvpN9NpSsfuN3kNWZJOgJCKoES0MsPNRRsZLAgrsg7kzW0Ux3OEBctDQrFAfGF3QQeHl0dljrGyYv%2BRs8dW1hfKJNvjkpNI2jz0fzPrVip3No8IzjvWNYmgJrrZ5YTu%2FNkmaCU4NKg42hIge3pVKugz6IYof73ktWVBqAd4XzdE9DYcaqRd9ewTrdlqgGGxohmNzslvQSdJffyopnaCm6xZzgPJmMh5CGIKHMK3c38bzDezjd6l%2B5F22QB6JpnToHaV8wgte4wQY6pgGA%2F6aM1AhylM5JqbWWJtsKcC%2BzNtU41MJVL%2FmpX9vE2vtnZa8Wx0Ya8AzCUiibGdFOrp68VALz7XzAp%2FXROBgLX%2B%2FehBDczAwfxu%2F7Bu0TWsKA0JV%2Bf2K7XX9lYaXm5Lj2o7sH09YALtTnpAs41XgUC9bERJObeao8DNSpOZZtN%2Bn1psq3PNLKiDOzuQ5OSXQqe2pXRljHNcBinH7jqWZiGzRunZp1&X-Amz-Signature=e2fe97bf9874911fa6c8deabe68f356aaa45d6e095cea2673f99b0d1f451c03d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRFRPC7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIH8qxg%2FeOJlfPghMLyAfWmgXt%2BJQJBoFFFjN26kcaJ%2FqAiBq39ZIsofuLrzOpN0V9JdErNlGg0iWtmou%2FpdBsA7iEiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlkQGvO72Xf%2BeMN7OKtwDQbnf3f6cdYp5%2BQ5JxHar%2BhwvTU%2BsWk7hb9gYANK9rMQ65QzzE7i5UFj5jN0LmBq3DgGO2wGVfKCzEkwHIt5szOVC1UcIzoB%2FjUFMf46SAzN93ihgzPPMswZ7XRIpPpgBxHcr5EAKlFErzRRHUOOGMxBT7kFSpKft99bTC42QrjVRh%2BnkRh2oAFO3bpRVpgj5RBAO5NdpYWPqnmLNtRY%2FjreB9kmMTPMMrPOeu8kWQSSvkUr5JVQX%2FgnumTk10fPQOCDTkUm%2B%2BuM7ICSesdSCBmP8OirXOkSe7zqYsAE6OpHpRPYxBeTOz9%2BzA5CdbWYMMEw4rFFtnXArgtCNqUyclhijZd25V1nKAkOg93xmdTc%2BW8nS%2FdSu4PJEWqOzsrjVX4DeiKCKAxZflVL2DGxawIGf2Nrtn62N3k5Z%2BJjamsj2KVJqaozomjp9f9EjmqePNjoOF%2BrClUFbiVhH5ot%2FVV0hY9rPh9QfcylF6z0v4AUXn1FBmsUNy%2BfIu343GCxYVJi0gn2cLFemBZV7BA7%2BB%2FVDn3qv%2Ff4qijJW%2BaFgxEOrWDaEJZfhi2OZ4exsdlfN0jIkVH7fph285hYuGJmnilewBkUSptSz8jPJ%2BtRZBzggo%2FNOIn6fMJZesP4ww9e4wQY6pgHAPkco55ctVOgPF2KyeYy8CTjrHAwwS6kORDNiELM4juQKg5DOXPr2k1NOMn5EWzlUU%2FOmm5H%2BLk6odmuSE80bSskLmNJfZXyPCp4PRKW%2F%2Fjm8%2FBkKdXEz7%2BK6JwCkYZL2gn479c4GEgVh42PjgdoOKwxG%2BDXa%2FsRuo8cdPvipdtC8T%2FSe3gzb%2Fj%2BexUZEeujQ8ag5ZB3YI1m8jwl4StHYmoUuseA1&X-Amz-Signature=a1f15c22f2f7d6651fef0cafcf8d846180788ff5a7f745197260a89c2aa9e44f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7MEN3I%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFVW4STpyFU0Vg37huztgEykcfPB%2FgKgGUcrTCWeoigMAiEAj9wNY7L%2F8wowWweeMT%2Bmppukd%2FDRKwSr7y6w3Ni5rj0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ijQyg6QPqUyOhiSrcAxJ8XxtNc7C5VKHWI2cUtkinvEMWoCA8xeRjb1iKuYe%2B8OQYM5wMig0pAwZSL8YyhWs9PxWe2ULihTS3w%2BhD7Ycqa2kbskDb%2F394eoK7a4Ux34E63TlZTeqnS%2BSL7JEnqvi34ZG393%2B5QpIitFlPL3c70FZrshBEDHO8H08dRtzbT%2FBK1H4IaUcAW%2BzTlNa05fAknfq8zn43gijJh7%2FmxX3dBQPfAiiP7osNnD2dEKdmNc588gC6I7UnjPqHUXzKjwQtNjqprq97QJLNKI7lgJOLd4GpUXokOgAekNxPHhS8DdLcHZvzlNM7qpYVnV2R3hAaYo80nhN7FG9OC%2FeOexj6cyHHFTz%2BHCpXNT8w1jF7mdMfPNxJZiaLvBqz5tkEVNnjK0HtX9VNaqQSGB9AWG6c3oDARL6r%2BTVJ%2Buw5IQfMi5qKjQ5LDRMLoUzgj9b566TtaJQ05fT%2Bcy0fvpEQtQ6O6JI%2B60q6BvDe6m2c5MkwL8gaibbJqQy8XHPSAIZ1KcP4VcmYfYSbdUAQrdqyqgK%2BYQNXzQ7QFidcAu5KHafhbxEOkSJmUiP2PqvJxN5S0NAyKnUI7wxX2GRBTyzrABadFvHjJuPQbeBEr7ulXi5Q%2Fc9bJuy6FUn8YbrwML3XuMEGOqUBeMpSNArLpUAyA23l6GkTqlPHoPQRoXlciy87me%2F42Z2qD2SQqDaT9lw7wCo%2Bpx6JBXbShdyJk8uRutlKG7GstSuBZuNXq%2BFH4cC0BcckDENHY5ED8TpVIG%2Bi0UZcOtlUV6BQV7yuwSrEEme9A8lJqIzvD5B%2BrYOD3ohrYLeDjOzadO%2FcUK9I4demgSiTnlPWB0UIZHwaorpwYBpZePBIJcLXE5g0&X-Amz-Signature=bbbec50f84354867c482644970c1499b7763b851ee52e1d0a59eb7af205a258c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXGUWDP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDEn8fzkRXzvIqKftBAz7gD8ooS1QBHaXTVFdilWYoNiAiA%2BUnR5NW8gpvPn9y6dGftLFfVzNfTNnFfWPUo7mEZSySqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjgzYWMZ1DwbWbwsKtwD9whM%2FZu%2BUMmYzYq1FV2sIZzxZRes7yxYDmw6ossUZIPy9DGPDogeOUXRF03CtblcpAmizye5YB%2FD1h8pHhLht8LY8JuQZjZEnhhqVwkLUVQ%2BoeORqF9hjR53AyW6AQsr8St4RiEIwneAzs7lqWhTvaOqjtAzhhPr%2FceO3SSETyszEbnIMyTRHqRrMvuPwRevQzv0BIFVOJKsMR451qv8MsDYVDAArG3UJHpVc0FnP%2BXoLp1D0oOqq2loQVupXfh7PIgtI0HW9a7GAllg50CLxXFQhEK0l3pNIQqAFyWOx5Ocv2FqAq7VJkg6RjfXUl8hlHfvh%2B2rM6krpTPRL26TfjAtQBhuFvLBvq4SP%2BzvxIUO0hQp64V2lNIYvpN9NpSsfuN3kNWZJOgJCKoES0MsPNRRsZLAgrsg7kzW0Ux3OEBctDQrFAfGF3QQeHl0dljrGyYv%2BRs8dW1hfKJNvjkpNI2jz0fzPrVip3No8IzjvWNYmgJrrZ5YTu%2FNkmaCU4NKg42hIge3pVKugz6IYof73ktWVBqAd4XzdE9DYcaqRd9ewTrdlqgGGxohmNzslvQSdJffyopnaCm6xZzgPJmMh5CGIKHMK3c38bzDezjd6l%2B5F22QB6JpnToHaV8wgte4wQY6pgGA%2F6aM1AhylM5JqbWWJtsKcC%2BzNtU41MJVL%2FmpX9vE2vtnZa8Wx0Ya8AzCUiibGdFOrp68VALz7XzAp%2FXROBgLX%2B%2FehBDczAwfxu%2F7Bu0TWsKA0JV%2Bf2K7XX9lYaXm5Lj2o7sH09YALtTnpAs41XgUC9bERJObeao8DNSpOZZtN%2Bn1psq3PNLKiDOzuQ5OSXQqe2pXRljHNcBinH7jqWZiGzRunZp1&X-Amz-Signature=9420cf69aa21de74d25b616f4340a363fda76a56efe037b646b6c6daca43517c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
