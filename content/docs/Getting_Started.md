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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVYUXF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIENIFULdJd01FF9aK5uRVA9TaBV2JFZTQjObdTH5%2B2KOAiBdKdI%2FaBEejyVS35JBurEcpNJGV84Lg4NeXGhkW4dTISr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMEVX7Mgh9rJgUAwJdKtwD2Dqy%2BVT7ShbREp%2F7t2v3L6nED3LPA0t1VjCb2HD3kIXswUOyCxHJXsY%2B5J28wnwjkuxS2lqt%2BJY0D2xb%2FMO8mlx2FvlH26uRXTEKrJOnMPm4FuIAG3MmY4emVQkckqJxSBtaA9x59vGrJ8DtsJvV5gPpCjaLBvVQEuCIKoQnuIY20P6VvQ7yxFjQOg6ktpeAJKsj6FzgnqJlj4E0L4PlfbftWnVayHTct8ReHq2SMYCFKlcGYh7aQX0Yt6hRarcMWlFoVDMo5uT4PWXkzGOYVGvO3b6kY9Q%2FZj%2FHNPrRn2fzER9AhQLAfr8jEo8GmB1GsKcMa6Kx0fIUE30JIHFEtC2BQFgTdSVehcneOEauhUB9%2BhPZmdZg7I2sKKc%2BxXIq4GPZqnzllD%2BMrhUxj30KWJJ6wZtYZIYnpVJ9nsFTSigNWti6wtRvaeZvIdMpUOEBzfxd%2BWQ2FDb9xBc1ROXn%2FPHq%2BgHhEnFMCKA13GdLQ77ucZ9Kz9Fa%2BEQTp6Gz8oD5lXp41sW4H0kZJLXKXeO07Xa3G%2BGbpVn%2BQA8zxgwE74BTKS5HG%2Fi1VbbIfDkK3qun0IwxddRiYESS1dtYflh0Md5IVS7kHps0nNAB5CaCgTCge6stZwwV5QVdd4Ew8OnAxAY6pgGnwF2bJTgExT3NmyTH9YvAuIs9btvuOYNbZnMwsy92gkVmCGV%2Ft3Mb24f%2BRZzxqTtdId8w6D0j9OepAAzHpK%2BXruJroMiYb4rNQk%2BTEPLwliAVpyIeX%2F2pxGyAfn0VayNOUSrhsEfGDrDXeyiT9CQXNavnvrqD9bF579Ft90yTRHNlOsXX3NzfvuL2meIS3mopJZg4%2BIAcGAaPJ8ZXdPbinMsKd4xO&X-Amz-Signature=ff46f119238341f88f2c650f116f1fa72dc5918bada6b8c1fbca3bbd93437cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVYUXF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIENIFULdJd01FF9aK5uRVA9TaBV2JFZTQjObdTH5%2B2KOAiBdKdI%2FaBEejyVS35JBurEcpNJGV84Lg4NeXGhkW4dTISr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMEVX7Mgh9rJgUAwJdKtwD2Dqy%2BVT7ShbREp%2F7t2v3L6nED3LPA0t1VjCb2HD3kIXswUOyCxHJXsY%2B5J28wnwjkuxS2lqt%2BJY0D2xb%2FMO8mlx2FvlH26uRXTEKrJOnMPm4FuIAG3MmY4emVQkckqJxSBtaA9x59vGrJ8DtsJvV5gPpCjaLBvVQEuCIKoQnuIY20P6VvQ7yxFjQOg6ktpeAJKsj6FzgnqJlj4E0L4PlfbftWnVayHTct8ReHq2SMYCFKlcGYh7aQX0Yt6hRarcMWlFoVDMo5uT4PWXkzGOYVGvO3b6kY9Q%2FZj%2FHNPrRn2fzER9AhQLAfr8jEo8GmB1GsKcMa6Kx0fIUE30JIHFEtC2BQFgTdSVehcneOEauhUB9%2BhPZmdZg7I2sKKc%2BxXIq4GPZqnzllD%2BMrhUxj30KWJJ6wZtYZIYnpVJ9nsFTSigNWti6wtRvaeZvIdMpUOEBzfxd%2BWQ2FDb9xBc1ROXn%2FPHq%2BgHhEnFMCKA13GdLQ77ucZ9Kz9Fa%2BEQTp6Gz8oD5lXp41sW4H0kZJLXKXeO07Xa3G%2BGbpVn%2BQA8zxgwE74BTKS5HG%2Fi1VbbIfDkK3qun0IwxddRiYESS1dtYflh0Md5IVS7kHps0nNAB5CaCgTCge6stZwwV5QVdd4Ew8OnAxAY6pgGnwF2bJTgExT3NmyTH9YvAuIs9btvuOYNbZnMwsy92gkVmCGV%2Ft3Mb24f%2BRZzxqTtdId8w6D0j9OepAAzHpK%2BXruJroMiYb4rNQk%2BTEPLwliAVpyIeX%2F2pxGyAfn0VayNOUSrhsEfGDrDXeyiT9CQXNavnvrqD9bF579Ft90yTRHNlOsXX3NzfvuL2meIS3mopJZg4%2BIAcGAaPJ8ZXdPbinMsKd4xO&X-Amz-Signature=06e4b88588f583318d7cfb0281da8c0cf0385da1987fe093e281f4eef02db855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVYUXF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIENIFULdJd01FF9aK5uRVA9TaBV2JFZTQjObdTH5%2B2KOAiBdKdI%2FaBEejyVS35JBurEcpNJGV84Lg4NeXGhkW4dTISr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMEVX7Mgh9rJgUAwJdKtwD2Dqy%2BVT7ShbREp%2F7t2v3L6nED3LPA0t1VjCb2HD3kIXswUOyCxHJXsY%2B5J28wnwjkuxS2lqt%2BJY0D2xb%2FMO8mlx2FvlH26uRXTEKrJOnMPm4FuIAG3MmY4emVQkckqJxSBtaA9x59vGrJ8DtsJvV5gPpCjaLBvVQEuCIKoQnuIY20P6VvQ7yxFjQOg6ktpeAJKsj6FzgnqJlj4E0L4PlfbftWnVayHTct8ReHq2SMYCFKlcGYh7aQX0Yt6hRarcMWlFoVDMo5uT4PWXkzGOYVGvO3b6kY9Q%2FZj%2FHNPrRn2fzER9AhQLAfr8jEo8GmB1GsKcMa6Kx0fIUE30JIHFEtC2BQFgTdSVehcneOEauhUB9%2BhPZmdZg7I2sKKc%2BxXIq4GPZqnzllD%2BMrhUxj30KWJJ6wZtYZIYnpVJ9nsFTSigNWti6wtRvaeZvIdMpUOEBzfxd%2BWQ2FDb9xBc1ROXn%2FPHq%2BgHhEnFMCKA13GdLQ77ucZ9Kz9Fa%2BEQTp6Gz8oD5lXp41sW4H0kZJLXKXeO07Xa3G%2BGbpVn%2BQA8zxgwE74BTKS5HG%2Fi1VbbIfDkK3qun0IwxddRiYESS1dtYflh0Md5IVS7kHps0nNAB5CaCgTCge6stZwwV5QVdd4Ew8OnAxAY6pgGnwF2bJTgExT3NmyTH9YvAuIs9btvuOYNbZnMwsy92gkVmCGV%2Ft3Mb24f%2BRZzxqTtdId8w6D0j9OepAAzHpK%2BXruJroMiYb4rNQk%2BTEPLwliAVpyIeX%2F2pxGyAfn0VayNOUSrhsEfGDrDXeyiT9CQXNavnvrqD9bF579Ft90yTRHNlOsXX3NzfvuL2meIS3mopJZg4%2BIAcGAaPJ8ZXdPbinMsKd4xO&X-Amz-Signature=c6e28e014b3450c6c9c7106ac4c3e06e82c52f3bb09c5b4819aaf566a4586976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOOW37M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBT2z1xHA7CmvRa6lE8F8%2BVxbYYZlXFou4XriOKgVoVrAiBav2kJv9k88Vg%2BZyZ5r6Z%2FK0gnfYXlwY2wHSJeyAa4ayr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqYFNxldHHh3NIVVkKtwDgHbgMfVtHHwC2wFeQk2GHG8%2BRAajcaTPrt7mFLB2y991hAZO8%2FbvJsmmTspfJKxRBDo31ZCXUimXzM0zKTvJ0DpDMt0BlE2pXdAhQZynWRuDir4xacrAyyIlejN60EfeURUE4APV713xcWnBZUkSUHQjTZ%2FwBTVb2xkN4fj04seRIjN5725kuzD8OtTCHyPNx%2FrKVA2i%2Fl0bVrDFW%2Fd6ZV1UIYc95k2IEvhbZqbOFpxFYr8ji%2FWYhPC3sXd6phMkepuL5JONUiugiykZMBFR5%2F%2F194BPZNsXXZiAOBQiExrQFVGGdyrnZOQ7rrnBer%2BrkgQpLqr5xIbpdPuJCCjqmm4e55mrPJZG40hG%2F3mUBOrdmtNld%2FK3HONzwrJyMVb0zPS%2FyA5vHo7AuBkJEIv3ndG0b9ot2i3uygF1ShUhW%2Bj7quBwpkWqp4RbjFybycke9eoNU0FtEGm8gVaFIYYsHy3abqTWnJrsPjuQ6oqotBSk7xHsxwytByViWBNNcfXOQ8mth28Cs8k91UrlckGGeL27gDkQBPdQo2V%2BlXJXeu7pohJa7Xil77Dv8gdLmjqhWLjGSgckDMGb0bYQ5VEe3tfAr2D7SG%2F1qoq%2Buv3A2w71VvJRBe576O%2BQ2Xsw7unAxAY6pgEMqrG8CrOC1Bff7kDUIzvyUq8E2HicbzFDgts%2FKLv9fzqFsLYjWQ49ukp3ppX%2Fp239p11hJJbypPQcOHgijFso7dLe9sWojUmCkWaBlehgA4ZVmBqEVii3q82DRu29n0lJRHO4yadeqEsQ0siwe%2Bye779oInItAvVYmhtCB4yrtEqMz%2BHejOgNoSs%2F6ZIgKSmPZY8%2ByJ%2BIqkrFvXecThlj7qUFxQq0&X-Amz-Signature=5119471e2f2f2d64e32d66629e89eddc8804081a6f7a211f234edc2f78073f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KRHBRI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCAwC4k0F8f5zrnzPiaNCzkSoicxcRUru2q79hy9%2BDNSAIhAIwLdoXrkjGmDTYKMd6AUONYnE8MyFf6%2BUhIDVhjQIsNKv8DCD0QABoMNjM3NDIzMTgzODA1Igxllw5s1QlHO02RUbkq3AMv8cu3AE41U3%2FXfr2qAPf2P54Z6z0%2BNKebtHhdghWmoBB6EcHZ4mmHM%2B8rkZoOjlFO5ErjxDfkjz2PK7OcixpPf1Lp67rk0IEUU0qFpdWAwXLRO96TxRzhIOuYe9DrhqAMcTulBnLPR4jeDmbunj5W%2Bm%2BCAOl%2BdjWEzTk%2FUUp4IcGS3JxJ5MfNHtup0Jbz84%2BaRkG0Ic1i0i87yCaK4H0f%2B%2B8jzkJNp6dBsYfUZrAsfURp16f96chJRRs8%2Bpqt5eM5qEY2uIWjndVAoz79JcrRfkoPHKisEUkfWyesWdhqypD2iawodKQ%2FI0OhqHXKeaeHBZeqLG%2Fuu0bNZ4tWjNnM%2BHaiqYl6%2BHJVeVZVcvAy6UNzYSf%2Fbv2sC8nORq8CceoUIYifoJeH%2BUYcLldGJUl%2FGs7TfCvMr88LANH6edDArJM6fSfNbRausC%2BiAD0MOj8Bb0LamteP4GqGXzm0iNwNsuGZjMjzz5Mss7h8QHEMV9r0ZyG5rmfReHINvn9o%2FgdYDZP1vKDBWdG8jK2eqxUa7YWZbI9OXGf1sEPjyp5FaHLaH6qsnMu5hXz8nAMSGKNhKmOkqLx4bhVYMaLiBIJNtsXj8%2BxOHrb1YngXL7vP3oFOgXFA7Iwhmp0IRjCi6cDEBjqkAfn%2BOa2RHISXZewP0tp2OnYuvWHQZ52w9AHIJnPSfjGOkmSQUlKypXCT9MyBA9k8bzRzKY4UZPIC%2FoELST0Mr1h3GdXAWRueiJwVEFGREYq1HgTtfADC0%2BvN%2BQ0JBGY0JANnoNooVZ9NtIVEMzXjIpuZNiSFzqph01FRapcrreRigdn35SCYM%2FpbgpPOdOtW3dvzE7ZffcMcykT2CFcc8I1YV865&X-Amz-Signature=c08209d6906f6a5d000736009bdb458a4218c7b5a3c0a4409b32c709d50f9d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVYUXF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIENIFULdJd01FF9aK5uRVA9TaBV2JFZTQjObdTH5%2B2KOAiBdKdI%2FaBEejyVS35JBurEcpNJGV84Lg4NeXGhkW4dTISr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMEVX7Mgh9rJgUAwJdKtwD2Dqy%2BVT7ShbREp%2F7t2v3L6nED3LPA0t1VjCb2HD3kIXswUOyCxHJXsY%2B5J28wnwjkuxS2lqt%2BJY0D2xb%2FMO8mlx2FvlH26uRXTEKrJOnMPm4FuIAG3MmY4emVQkckqJxSBtaA9x59vGrJ8DtsJvV5gPpCjaLBvVQEuCIKoQnuIY20P6VvQ7yxFjQOg6ktpeAJKsj6FzgnqJlj4E0L4PlfbftWnVayHTct8ReHq2SMYCFKlcGYh7aQX0Yt6hRarcMWlFoVDMo5uT4PWXkzGOYVGvO3b6kY9Q%2FZj%2FHNPrRn2fzER9AhQLAfr8jEo8GmB1GsKcMa6Kx0fIUE30JIHFEtC2BQFgTdSVehcneOEauhUB9%2BhPZmdZg7I2sKKc%2BxXIq4GPZqnzllD%2BMrhUxj30KWJJ6wZtYZIYnpVJ9nsFTSigNWti6wtRvaeZvIdMpUOEBzfxd%2BWQ2FDb9xBc1ROXn%2FPHq%2BgHhEnFMCKA13GdLQ77ucZ9Kz9Fa%2BEQTp6Gz8oD5lXp41sW4H0kZJLXKXeO07Xa3G%2BGbpVn%2BQA8zxgwE74BTKS5HG%2Fi1VbbIfDkK3qun0IwxddRiYESS1dtYflh0Md5IVS7kHps0nNAB5CaCgTCge6stZwwV5QVdd4Ew8OnAxAY6pgGnwF2bJTgExT3NmyTH9YvAuIs9btvuOYNbZnMwsy92gkVmCGV%2Ft3Mb24f%2BRZzxqTtdId8w6D0j9OepAAzHpK%2BXruJroMiYb4rNQk%2BTEPLwliAVpyIeX%2F2pxGyAfn0VayNOUSrhsEfGDrDXeyiT9CQXNavnvrqD9bF579Ft90yTRHNlOsXX3NzfvuL2meIS3mopJZg4%2BIAcGAaPJ8ZXdPbinMsKd4xO&X-Amz-Signature=5bce31fa5fc0eef724274630b838231740af39e7f7e7cabc39ef7bf46004ae59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
