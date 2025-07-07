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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS7RRKB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhrMYYy%2FOANnyvqOg5jCdklupMSqHaYKcLT94GJ6OO5QIgR%2BtncQXtyv8MzYkTzvJF4EqTq7teIyCCRjyIZ%2FkCNNkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDB%2BMqYAibwuKyM53FircA4WdqoShuvU3vRZsyLri9WGaYU7L%2B%2BYOfGHQ%2BoydKV4EBdUqnMmQ8xKm%2FVwj6uqfLZKnGAnYzRybQfe1fXlmqaeZgvIXzTugnQW8Z%2BEbc%2Bvx0V8IHYnqrbmsfjotGKUDFdWxpfueOfRKrkmaRviW%2F83oIBl4buw9h151OEPEODY2S9O5CqojfI9KVbOFDhWfTtIZScNvo65AWXvsHJJVc1rJWc12EN96qhAli1MgzG6unVX%2Bss6muB7lwAfD6DF70jnKAkb7aDRMGLcK%2BZIHUQ0ZKQFmbLzZrPeA9ZyIK3tKz51V%2FwUYUiroyoCj1rdJfniInuIMAmYtqEpX7%2B8Q%2BMQ4bxcy%2F8Nz9rMY%2BlgvXLXqn%2Fmr%2FZoPrlqoaYZGaR5KH2ywMlroIs46xTaTfIhNfEX3nuo%2F2KPtF%2Fi414Sy5pPwkbqPXuyvL0LXh8WaOTdrnV2MB9OCCxsoClLtpwk3ORan6agHVd957tLVDECBDssO06fxFd1GSQPY08c0ErvWhq1%2FK9h8XNFF9twDl5w%2BYP4Eo06l1YCKkDP1Ek%2B42WEvmoaavfSJvG3mgVGFosBZVgeetg4%2B%2B2%2F03PgqPLcQ0H66PzGHaFkiwQpZafqFRmWHrsNWy1Wen%2BtC4JxLMNytrcMGOqUBhXVJBpg5rON0lHNU58Nt8dnyq8C4HSb0cTY%2BC1m18GNe8P1sFBFWsCEZQ603fFFP5EhmOgCquGRJdCSlqPkdcjJRLX3f%2BQ7p%2B8ro%2FxswHgmlAVtckypwjZq%2FwIY8j%2FUNFDJh3yd7cQ5hKG8VcHNDnfNrOi6h9E8DpFG7K%2BYCrSrO6V%2BxL5J6hxX%2F4RkW8AbJEJZoQCeQYCHyc9d2XnU8Lvon6TxG&X-Amz-Signature=50a1b2107980b8759a892a843bccbafb5ad3009a38e254dc071906b2eeb276ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS7RRKB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhrMYYy%2FOANnyvqOg5jCdklupMSqHaYKcLT94GJ6OO5QIgR%2BtncQXtyv8MzYkTzvJF4EqTq7teIyCCRjyIZ%2FkCNNkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDB%2BMqYAibwuKyM53FircA4WdqoShuvU3vRZsyLri9WGaYU7L%2B%2BYOfGHQ%2BoydKV4EBdUqnMmQ8xKm%2FVwj6uqfLZKnGAnYzRybQfe1fXlmqaeZgvIXzTugnQW8Z%2BEbc%2Bvx0V8IHYnqrbmsfjotGKUDFdWxpfueOfRKrkmaRviW%2F83oIBl4buw9h151OEPEODY2S9O5CqojfI9KVbOFDhWfTtIZScNvo65AWXvsHJJVc1rJWc12EN96qhAli1MgzG6unVX%2Bss6muB7lwAfD6DF70jnKAkb7aDRMGLcK%2BZIHUQ0ZKQFmbLzZrPeA9ZyIK3tKz51V%2FwUYUiroyoCj1rdJfniInuIMAmYtqEpX7%2B8Q%2BMQ4bxcy%2F8Nz9rMY%2BlgvXLXqn%2Fmr%2FZoPrlqoaYZGaR5KH2ywMlroIs46xTaTfIhNfEX3nuo%2F2KPtF%2Fi414Sy5pPwkbqPXuyvL0LXh8WaOTdrnV2MB9OCCxsoClLtpwk3ORan6agHVd957tLVDECBDssO06fxFd1GSQPY08c0ErvWhq1%2FK9h8XNFF9twDl5w%2BYP4Eo06l1YCKkDP1Ek%2B42WEvmoaavfSJvG3mgVGFosBZVgeetg4%2B%2B2%2F03PgqPLcQ0H66PzGHaFkiwQpZafqFRmWHrsNWy1Wen%2BtC4JxLMNytrcMGOqUBhXVJBpg5rON0lHNU58Nt8dnyq8C4HSb0cTY%2BC1m18GNe8P1sFBFWsCEZQ603fFFP5EhmOgCquGRJdCSlqPkdcjJRLX3f%2BQ7p%2B8ro%2FxswHgmlAVtckypwjZq%2FwIY8j%2FUNFDJh3yd7cQ5hKG8VcHNDnfNrOi6h9E8DpFG7K%2BYCrSrO6V%2BxL5J6hxX%2F4RkW8AbJEJZoQCeQYCHyc9d2XnU8Lvon6TxG&X-Amz-Signature=7fc36f6021d6ef6edb0ab4cba87e7c03c627224a189c01c0b058408dba788060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS7RRKB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhrMYYy%2FOANnyvqOg5jCdklupMSqHaYKcLT94GJ6OO5QIgR%2BtncQXtyv8MzYkTzvJF4EqTq7teIyCCRjyIZ%2FkCNNkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDB%2BMqYAibwuKyM53FircA4WdqoShuvU3vRZsyLri9WGaYU7L%2B%2BYOfGHQ%2BoydKV4EBdUqnMmQ8xKm%2FVwj6uqfLZKnGAnYzRybQfe1fXlmqaeZgvIXzTugnQW8Z%2BEbc%2Bvx0V8IHYnqrbmsfjotGKUDFdWxpfueOfRKrkmaRviW%2F83oIBl4buw9h151OEPEODY2S9O5CqojfI9KVbOFDhWfTtIZScNvo65AWXvsHJJVc1rJWc12EN96qhAli1MgzG6unVX%2Bss6muB7lwAfD6DF70jnKAkb7aDRMGLcK%2BZIHUQ0ZKQFmbLzZrPeA9ZyIK3tKz51V%2FwUYUiroyoCj1rdJfniInuIMAmYtqEpX7%2B8Q%2BMQ4bxcy%2F8Nz9rMY%2BlgvXLXqn%2Fmr%2FZoPrlqoaYZGaR5KH2ywMlroIs46xTaTfIhNfEX3nuo%2F2KPtF%2Fi414Sy5pPwkbqPXuyvL0LXh8WaOTdrnV2MB9OCCxsoClLtpwk3ORan6agHVd957tLVDECBDssO06fxFd1GSQPY08c0ErvWhq1%2FK9h8XNFF9twDl5w%2BYP4Eo06l1YCKkDP1Ek%2B42WEvmoaavfSJvG3mgVGFosBZVgeetg4%2B%2B2%2F03PgqPLcQ0H66PzGHaFkiwQpZafqFRmWHrsNWy1Wen%2BtC4JxLMNytrcMGOqUBhXVJBpg5rON0lHNU58Nt8dnyq8C4HSb0cTY%2BC1m18GNe8P1sFBFWsCEZQ603fFFP5EhmOgCquGRJdCSlqPkdcjJRLX3f%2BQ7p%2B8ro%2FxswHgmlAVtckypwjZq%2FwIY8j%2FUNFDJh3yd7cQ5hKG8VcHNDnfNrOi6h9E8DpFG7K%2BYCrSrO6V%2BxL5J6hxX%2F4RkW8AbJEJZoQCeQYCHyc9d2XnU8Lvon6TxG&X-Amz-Signature=2bbf4c2fc826f26a898dfa2f3359ffec4d9faf487d2010ebb89cc4af61d2229f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JANHKX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCPlrTxRjoHOLWbMULNJmLWer2QwW8OorDoC2oLe12bLQIhAMh1lF8GFYD9F8%2BVoEBXQAXnCXIuUcV4P0AlCqtqS%2FnvKv8DCG4QABoMNjM3NDIzMTgzODA1Igw5SnHYQBqAUW2Hoqgq3APRRnL6TwP0h7yrZMTM6iYl7mfcR6PIt9XzFNbOl%2FXHZ%2FUHpQqPDboZVMYGPJsMUt114RCA80%2Bm7auUdlF9%2BjH%2FMTN2zaCZtjwOhwboJxeO0Hv6p%2B7cezKIbvEAYbdNMyjGYzD7lun30t7sm667edHCnZhfVbXuX0dvwgp%2BuGxxYf3iKGT0jUMnLFYtIgHFwXoeV7Bd8f%2FcLv3cTzJhO06k51jbaimsIeHWHS0Aopj0JME2h78N9DRHeJK9HNaa%2FUEWt04QfwYlRs8YWYq6japMvRYbQiLqa4tBLOHgnKIv9gwINoz2ZM1%2FGgH0Tz8EHgiSQpAXOs7onDJ2lCv2w5hvwe0wWnCLNL0vhw%2BWbJNxDoIE7mG3Qy0UXmubQPSAQPl73h%2Br88dAheJ8Clx6IuNaZc29%2B8Thn0lpaCwqIaL0zzGvP7%2BvhsdfSQN0Lk6vKbBH%2F%2BMAL4aMjSb8Aaikse2UFS3fGtCZ%2BeWgsBS8%2BnH1jAawV5xgjHDtSnNAEsAMx4bz2VZmVc5PYuwHyO4QmGWPJDq86DAKWYqAv3VGw2OIc9y7JjXrkVjJc22wuP3YjGzDR1HP6arVO9Nz7KYcvk1CQLBgrOg49cJkz6wo946jZHI7g0SzVz15kGp1JDD4r63DBjqkAbxeNEuOs3G9Zwlb76koI0y81xz%2BrYRLzGgeDOnak8S%2FJ7kBLdXYsk6yl9vc%2FyREW%2BaAvjDSxmvF6dCRLCAqXXNhyUDxRuxcCxgqkp%2Fo7vC6AAYxAyoFiXe1%2B1dFyBE5xRUp6AAIFHn5g5FHjfZQuTi5vYOZuhlAZrjZeQqGcUSNxO5GGMW%2BK8hO8n8%2FbSnTot7yxYp8pUAn7H0kXQSi7GbDP63z&X-Amz-Signature=d283dcc568b12e0df4addf1d11a41957fc02ee87bfd14569b3b7a8dea3c048c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUTOADR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC6r2HEhi6G%2BTNsG8%2BQsEQEHpMyzUcg3sA4cvLInpDLCwIgFUHnLieG10Qzk0OgU05Bmg9d3MAPbi1fA3nsLpDvmZoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPdYjmJdqV4RbKtoIircAxDuBFVDNRTScxJvh1NSBzdO5rXr%2FebcJH8ytLMp56Tk1yHwK5%2FCaGwuhPJXp2elxMkumPWgR8qb%2FU7KgjrhaoFLKqZyrnVgI%2BqxXh07qcOlSIUW3AHpVzGL0mxt%2B9m%2F1jS889nfx6SisfOfRH4uK0eTE5Y%2Fk410Q303pZsIDQPtt2hgMpa%2F7cd2kH5XOs9%2B3a8C7%2BRZqAs5DtFmG9jkEdQbagYtkPMMIT%2BZphkzTnlDsTkbWYVAAIJ1MTOd9AGt6M3ca7m5dMKMUknYgeztSeuBLiGaQdWvuQOWzlJNc0SlcGPGsjUg5TD6qYuFrvUDnwSxJVeY9sM%2FZOs9n5XvWTw1obcRsxGCa9u%2Bqidgs0zjAOVnWUZNQTpMRtUjMHJLyfHWP3pNZUlYQFj9DbkCcJ9TGSVE5zCTNDGcRV4IRm%2Flw7sKs9zY3zknemn3gCqxZqvGW0%2BLuT092DlTooYu60WZ2MILYOPvmGE9k%2BAu2inFGg9ye8mrtphcem%2BChn981To68FNu8N8evWe4SzO2tIivneaJdqWrgwUCMu62Sd99dLKsiD%2BvY7xw9wF8wx2a5DOhzw9oTxq8oznpj1pnddClWUdjlDw%2F4mcR5Zai2WLOKHWxvCMv16k2%2Bjf6MLW4rcMGOqUBTqDme8ybYGEpAi9Xk1%2BkLk6XsHMaG7DUMu3XvXsHk%2FAkUsTDYawxA7qhIirIUZVL09R9JqIFX0ZNROGBrdofYTpKQG5BUvDHZAqtQc5lMjQVcUrKVE%2FS63m06jYzEJmVObzhcUR44x4fwDgA2sTNElJ7Td7egdFQu4A%2FfxREpC%2BdkPLREpVf5%2BGGXNN8p%2BwEBCwQMScWcHM5bQJc38kkkRwp8onI&X-Amz-Signature=38bc39e39d5bf9b6b4375f94b0dc275a55b42dba335be6afe97c12cdd36b61c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNS7RRKB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhrMYYy%2FOANnyvqOg5jCdklupMSqHaYKcLT94GJ6OO5QIgR%2BtncQXtyv8MzYkTzvJF4EqTq7teIyCCRjyIZ%2FkCNNkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDB%2BMqYAibwuKyM53FircA4WdqoShuvU3vRZsyLri9WGaYU7L%2B%2BYOfGHQ%2BoydKV4EBdUqnMmQ8xKm%2FVwj6uqfLZKnGAnYzRybQfe1fXlmqaeZgvIXzTugnQW8Z%2BEbc%2Bvx0V8IHYnqrbmsfjotGKUDFdWxpfueOfRKrkmaRviW%2F83oIBl4buw9h151OEPEODY2S9O5CqojfI9KVbOFDhWfTtIZScNvo65AWXvsHJJVc1rJWc12EN96qhAli1MgzG6unVX%2Bss6muB7lwAfD6DF70jnKAkb7aDRMGLcK%2BZIHUQ0ZKQFmbLzZrPeA9ZyIK3tKz51V%2FwUYUiroyoCj1rdJfniInuIMAmYtqEpX7%2B8Q%2BMQ4bxcy%2F8Nz9rMY%2BlgvXLXqn%2Fmr%2FZoPrlqoaYZGaR5KH2ywMlroIs46xTaTfIhNfEX3nuo%2F2KPtF%2Fi414Sy5pPwkbqPXuyvL0LXh8WaOTdrnV2MB9OCCxsoClLtpwk3ORan6agHVd957tLVDECBDssO06fxFd1GSQPY08c0ErvWhq1%2FK9h8XNFF9twDl5w%2BYP4Eo06l1YCKkDP1Ek%2B42WEvmoaavfSJvG3mgVGFosBZVgeetg4%2B%2B2%2F03PgqPLcQ0H66PzGHaFkiwQpZafqFRmWHrsNWy1Wen%2BtC4JxLMNytrcMGOqUBhXVJBpg5rON0lHNU58Nt8dnyq8C4HSb0cTY%2BC1m18GNe8P1sFBFWsCEZQ603fFFP5EhmOgCquGRJdCSlqPkdcjJRLX3f%2BQ7p%2B8ro%2FxswHgmlAVtckypwjZq%2FwIY8j%2FUNFDJh3yd7cQ5hKG8VcHNDnfNrOi6h9E8DpFG7K%2BYCrSrO6V%2BxL5J6hxX%2F4RkW8AbJEJZoQCeQYCHyc9d2XnU8Lvon6TxG&X-Amz-Signature=9724bc38003b47dd98525685546970725504014d4da899617f7514e2ea45b693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
