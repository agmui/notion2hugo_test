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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJZ35KB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClA%2Fxt9MRF80j2YT0MfGeB03S%2BW21SEYumR3QLyDJwbgIhAITZ8Tpn67wiWWNlBEoC9W2qfrluX6LAma9lOWYS5hhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyMptapOfzdY8caq4q3APzsisHphxwVrVaWzRZUWMj2IJtnF23dLIpcLp136%2FQShTBRMx%2FNZ8Na3RuFLAVlugGFGX5vAFmqbcKT8VgLWXbaC6WVadlUsErulK0auAmLx9%2FOb97U4C0AxscV%2FQJa3GYwfK0%2BUkXbuPyrQW7KeSr3a7bx9N3d9DRSGD9Z56K7KoD%2BgR4S174I8JWyZ4VsdVc0%2BISUlWzANmUQg7J6slLtbUUTgmqve8WYr%2FNH0dRJrUzydD3O%2BVtz3lAQDNgDv92hhfS3ykjUDjtnLB9ZwHFVo92WNCzHw8rCpJqo%2B%2Bhl9nmR100H4MwkPw1fPHuYtPWi%2BC%2FOIGSpsPxye6Lygo0c2kjOv2cjf3pWYDo14XK31SKaBLvRl%2FEG%2BC5%2FJTol4aMyuKEqmxovRn58T5flW7znplp%2Foe7njRa2s%2FFa55xHvI6yoYKbdYC6EqBKI9YS%2FL5Niofn%2F3rRYHnbeLs%2ByHj1hyh2etlBpNcX2I6%2B0m7Hm5NZqDapjgVBIQBZ18VVwGXVHLJyjrhyGXx2aeEruHjM2fuY27HUNszW%2B6o69rVM5dP8FKh6RMojUlfsQTnFOnz14QeW4ygd4%2BwJH7rdLIYp1O7gfyjLv8PCMpuBwJ%2BN1df8mKm4Lfx%2B9NBkjDVr4TABjqkAU1OPRSanHlwlnISAu0hFqdjivmAUWItoxJ7RFAzQqMvMATk4QCvFj6JlHaYmTd1l67OY8KcVqBaOQjp4ciR45Dyfky3TyEos5p0h9y7z%2F%2Fc6USDUjUc70pbK1IFr9XxyBGy0MJ6LfavUXCtwx34RtIu%2BxHn%2F1uNTeaB05BMbVkgYJ2ChHKyC6gxhWKWjzxTN2d9kI3YE26w%2ByldAIQU7I5XYxMd&X-Amz-Signature=fd64781b83e8cc67a04d778a3fe39c83dbbeba6fd67c5d33f82142e1f1c83518&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJZ35KB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClA%2Fxt9MRF80j2YT0MfGeB03S%2BW21SEYumR3QLyDJwbgIhAITZ8Tpn67wiWWNlBEoC9W2qfrluX6LAma9lOWYS5hhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyMptapOfzdY8caq4q3APzsisHphxwVrVaWzRZUWMj2IJtnF23dLIpcLp136%2FQShTBRMx%2FNZ8Na3RuFLAVlugGFGX5vAFmqbcKT8VgLWXbaC6WVadlUsErulK0auAmLx9%2FOb97U4C0AxscV%2FQJa3GYwfK0%2BUkXbuPyrQW7KeSr3a7bx9N3d9DRSGD9Z56K7KoD%2BgR4S174I8JWyZ4VsdVc0%2BISUlWzANmUQg7J6slLtbUUTgmqve8WYr%2FNH0dRJrUzydD3O%2BVtz3lAQDNgDv92hhfS3ykjUDjtnLB9ZwHFVo92WNCzHw8rCpJqo%2B%2Bhl9nmR100H4MwkPw1fPHuYtPWi%2BC%2FOIGSpsPxye6Lygo0c2kjOv2cjf3pWYDo14XK31SKaBLvRl%2FEG%2BC5%2FJTol4aMyuKEqmxovRn58T5flW7znplp%2Foe7njRa2s%2FFa55xHvI6yoYKbdYC6EqBKI9YS%2FL5Niofn%2F3rRYHnbeLs%2ByHj1hyh2etlBpNcX2I6%2B0m7Hm5NZqDapjgVBIQBZ18VVwGXVHLJyjrhyGXx2aeEruHjM2fuY27HUNszW%2B6o69rVM5dP8FKh6RMojUlfsQTnFOnz14QeW4ygd4%2BwJH7rdLIYp1O7gfyjLv8PCMpuBwJ%2BN1df8mKm4Lfx%2B9NBkjDVr4TABjqkAU1OPRSanHlwlnISAu0hFqdjivmAUWItoxJ7RFAzQqMvMATk4QCvFj6JlHaYmTd1l67OY8KcVqBaOQjp4ciR45Dyfky3TyEos5p0h9y7z%2F%2Fc6USDUjUc70pbK1IFr9XxyBGy0MJ6LfavUXCtwx34RtIu%2BxHn%2F1uNTeaB05BMbVkgYJ2ChHKyC6gxhWKWjzxTN2d9kI3YE26w%2ByldAIQU7I5XYxMd&X-Amz-Signature=90aa5b8eb5663d665592ece4f7754e76fb2cc456de05c47c8ff5ad0ae51dede3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7RVYSE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3lxe3hUdlT0j3INczZWnoVgxyS5w4Y%2BPiqNEu1yDRFAiEAjfqBsnfAwS9Y8vLyHPBAdG7wz4tmRYC1A6E%2BmXGXNmIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIskBdtHoW4njc774ircAyUr0mWFko9FSfF%2F2MC7%2BTEpYFRaoUudpzS5RTcPE22TjgOZyOZtfk%2Fssmv4X2IFMeDv4R8msOa4kQ76Fe%2B%2FTI77FytcLqbLj4Os0oOZDUOmQlvzZq1c3lAbTnX%2BxT6Fr0Kz6psqKV02XW8m1gTRQJnGk6MYZom5iVnCKqVk%2FU5fjofq4OzGrCDIZ0jrjPuJDjqvvGWXeIGY%2F%2BDdMT4QdE%2FHlV5zujUUvK0woe3x%2F5YUxwfWDnLKFx%2FPiPV8DkLnyt8y7LmUvB8TgfiQUEvaYhqRT5%2FuHvC%2FEYi4oBbszWznNmX3TRkQYsRjq8X6rWXlu2zQUXuTsr%2B3m6eq1hTWRrv2FK4juHSyQNZ9Hla0d0XI91Nrk5U3KLWNdRjiVevR93NP%2BipFYkfiOLHgwiDFyfZPO%2BAg9Q22oHfY2XX%2BuFHWIoq0WcrVAlJfgiLjDDDkjlys%2BZK5KiORIQExBybhbtLVNwWNksZpYZcrQ9%2FTBBRvqorxi4jWNWdAAep3607n7Ojkb5JdvjBNNpzdQ2jXQujcPILgoCwJkXaUmuSaKANZmLVCLaWQi%2B2i7hQwYicXF%2Fz2thz0KX3llRqLq4r5q08u24Pej71ule6bbgwsYklHxJbAoMCMYmPLYJKeMLavhMAGOqUBWmVwG1QWYpcLtntvzVgx3iK4mUFFUz6WKiQp%2B6oJ5NSkQnKjPsTZ68QzEzTG3a3s%2BnxnXjOPsHk%2F%2B%2BXXkfbICtakmxzKeOFYm7%2FovSzjpgABwcwf2rGnBFCkue8lV7LkSa7AD7F1ZqvqO2RVG1SysSp3Gt1BYleN%2Bms7TlTVlmAQYY87VTHNSJ%2FINhY7hRvyM0yWUKWG%2BiTo484xLc1aFMIKg9Et&X-Amz-Signature=9c8c994809e4631afc538535dbbcd9a3b2c512f3cfc2d28bebae00163fc12f15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI77OHZL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUmk4O3v%2FzwTW5bvOHkPnUn4elvPhGYa%2B8JO7NCiQp0AiBeLxn%2Fi1HeMN2Fu42Hsu9%2BrASyhSfVsAFUljBdJjs0pSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWGl1JmMStgJLdLQPKtwDBYBwUIbzfxg8fKp7J2WOzT6zvnr3banBf0Xy38eErduQ1QwFJf6bVf9b7YI6l5WAQ%2BdlwtqhQpP87mA2fyIIQReg%2B4yNpEpFh%2BbsJjGrazHEwhkkb5gnfvdcSoy7mqb1Mt6wSj5izawUZfycpnAxyI%2BaPDo7sB%2BsITleVnBEap1UlB9W7KntVBO8jzKYpENPlnnKZupZtiqrNPk0Zvuq%2BRVLx0FEgK7dWO2CvSe6hPZ3UCdL0pCg6YA5JWcu%2BDJB7lKrCGywJtp87rBVEibPJte%2BBTYSS9bg0e0A%2FCY4tchvyGn1btpptAA7UZCp4QS6MXHWYV7asAdy4GPQjW7rdOGy4gRgozTbvDFjBD6uP59yTZhPkO%2Fo6O2cLFdGW%2Fq3RvsYREYsI9pTi%2Bcd6TKRuKL9GWGyLrUOf2Xn3raIfkNVGcpumjvjmqlvtqcuUgqpzaSJ5uVlmI2FUFEzs92sy%2B7IIx5DdhZSogZFhmQ2DgPXAA%2B3%2B6ZfXsqmjeTDH7Igd815goL2VVXuoYQIRpL6bu7IKjr50roiyEwUhyFSVrpcNqfuKkTGOtvoAx34VBAVNVIFhCCWd%2FwTJcou15ArQ9uMSGhkgfMihBDMCVNOsvVFnn6RyAr9qkloLZYw2bCEwAY6pgG26wiyk3dj4Pm2Z6XkeIPjoEuOWhPMInNucUiO4WwU3idOvRJIzC3l000bTTY6wjufLNQ2r2nBOrsVj%2Fsw%2Fbt4f6OLDdcuIuRQ2fur5Bk0enjG%2FoH7zxwnmcPI%2Bm72eD13U4ObjjVmJnz3DPceNqyNGRaIW2o%2BP6XLe1MmdUGRTrIonfgMBV%2F01ZfjgWCIKHMQYLomBdwnna2X8dB1M9NvtmxtaQzB&X-Amz-Signature=f5ad6d895bd85fa2599733f062ed5589f14736ed3594292e2fcf43c21dd41dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJZ35KB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClA%2Fxt9MRF80j2YT0MfGeB03S%2BW21SEYumR3QLyDJwbgIhAITZ8Tpn67wiWWNlBEoC9W2qfrluX6LAma9lOWYS5hhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyMptapOfzdY8caq4q3APzsisHphxwVrVaWzRZUWMj2IJtnF23dLIpcLp136%2FQShTBRMx%2FNZ8Na3RuFLAVlugGFGX5vAFmqbcKT8VgLWXbaC6WVadlUsErulK0auAmLx9%2FOb97U4C0AxscV%2FQJa3GYwfK0%2BUkXbuPyrQW7KeSr3a7bx9N3d9DRSGD9Z56K7KoD%2BgR4S174I8JWyZ4VsdVc0%2BISUlWzANmUQg7J6slLtbUUTgmqve8WYr%2FNH0dRJrUzydD3O%2BVtz3lAQDNgDv92hhfS3ykjUDjtnLB9ZwHFVo92WNCzHw8rCpJqo%2B%2Bhl9nmR100H4MwkPw1fPHuYtPWi%2BC%2FOIGSpsPxye6Lygo0c2kjOv2cjf3pWYDo14XK31SKaBLvRl%2FEG%2BC5%2FJTol4aMyuKEqmxovRn58T5flW7znplp%2Foe7njRa2s%2FFa55xHvI6yoYKbdYC6EqBKI9YS%2FL5Niofn%2F3rRYHnbeLs%2ByHj1hyh2etlBpNcX2I6%2B0m7Hm5NZqDapjgVBIQBZ18VVwGXVHLJyjrhyGXx2aeEruHjM2fuY27HUNszW%2B6o69rVM5dP8FKh6RMojUlfsQTnFOnz14QeW4ygd4%2BwJH7rdLIYp1O7gfyjLv8PCMpuBwJ%2BN1df8mKm4Lfx%2B9NBkjDVr4TABjqkAU1OPRSanHlwlnISAu0hFqdjivmAUWItoxJ7RFAzQqMvMATk4QCvFj6JlHaYmTd1l67OY8KcVqBaOQjp4ciR45Dyfky3TyEos5p0h9y7z%2F%2Fc6USDUjUc70pbK1IFr9XxyBGy0MJ6LfavUXCtwx34RtIu%2BxHn%2F1uNTeaB05BMbVkgYJ2ChHKyC6gxhWKWjzxTN2d9kI3YE26w%2ByldAIQU7I5XYxMd&X-Amz-Signature=99d6f6f1d57d9940135de90bdc44da92c0e29ef56a81837c8f7013ee4244c73b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
