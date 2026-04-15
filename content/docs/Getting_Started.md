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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQMNC4C%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf3a7PX5mo3Wa5U6ONv0p1TlEFhpvuhkpDtzqir%2BWe5AiEA2dzAeWSsPg3s%2BwPUvGNvgf91ZjYO7SYfiIUeL6dM9VwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9jpr3E4yA9yq82ircA7mjrUfzJcsjahJ2IE4MVg5CR5dWKigFDAF6mcWKGSv8uxILOXDlNC%2BHQVh%2FDlth2XpTWjdt08vdEolj6VVx01NszoRrMfOAbnk9u28b3ByqHNuKC7WxRoMU%2BFfP7t5S3fccn%2ByJeuxFVZFfSmPqCSluksRIfcaQphupZn4El7miC5mQ8JOPy8VVRcO0NkvfqWM3ER%2F%2BvmGmYi%2BYQgdzDTiS%2FN2PPad%2BRJ2gGRFmoLBAbLpP5Whyco32yI2Az0wrPyt4g0FTrqodcQ5M6leV6r45X0xjINbUfMnfOuaXKbEfiztJkPiQgzJNAu3YYcvImQsdJKGEAqtOhrBt7Gj62j3ABU3DRK8Z%2FQ1QeR3425VJ9GR%2F%2FgwaD2ipcW7cz1nguxFP15ueDypU1duslHPLL1OsIH1KIUMjNtrMJqg4Ii1Vf0M%2FG7PhsUPHhaGPvvd15PGjzEaRPIIN0y4HivtGpxl%2BKOTUgzc1yNORl%2BkDPNVlSaiuLguDvjH2QLYpK4xzwHjjRdJJIaZvNSmJ4OxBYLWnTZjV7X1U6DHf1kjf3MMOcLt%2B9i7T4cwuJQUlg2AiijEOK3NHMOVRvObfdED4nNnq5uJIlZZbWO8OaHUi2%2BOl8rIUwb0vE4LjF33hMI7i%2B84GOqUBEn%2BtnigrIzt7OsSiu%2F4KYA0GWhvru1MAGJ%2BJTSg1K%2F42MCKkq%2Boq3%2BmPFNZrwSdt5eUI0ueGU3Irtm3pAqn8yCJyDrFD9tWq2GIDq6HxashCBOoUSnLxIaWrpDX7HRKnx9a6zbM6Por%2BiGzmT5j7jXYfKUbxNeNsfm5YqRG%2FmicZwdC8S5iS0IiecpxjfPzT7kccZtvC4bAIDI7KNzQNEkJvbyIs&X-Amz-Signature=2c22302c5255708dffc9026f1de2c5e5a45f6293522a75e9af20fb133cc6cb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQMNC4C%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf3a7PX5mo3Wa5U6ONv0p1TlEFhpvuhkpDtzqir%2BWe5AiEA2dzAeWSsPg3s%2BwPUvGNvgf91ZjYO7SYfiIUeL6dM9VwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9jpr3E4yA9yq82ircA7mjrUfzJcsjahJ2IE4MVg5CR5dWKigFDAF6mcWKGSv8uxILOXDlNC%2BHQVh%2FDlth2XpTWjdt08vdEolj6VVx01NszoRrMfOAbnk9u28b3ByqHNuKC7WxRoMU%2BFfP7t5S3fccn%2ByJeuxFVZFfSmPqCSluksRIfcaQphupZn4El7miC5mQ8JOPy8VVRcO0NkvfqWM3ER%2F%2BvmGmYi%2BYQgdzDTiS%2FN2PPad%2BRJ2gGRFmoLBAbLpP5Whyco32yI2Az0wrPyt4g0FTrqodcQ5M6leV6r45X0xjINbUfMnfOuaXKbEfiztJkPiQgzJNAu3YYcvImQsdJKGEAqtOhrBt7Gj62j3ABU3DRK8Z%2FQ1QeR3425VJ9GR%2F%2FgwaD2ipcW7cz1nguxFP15ueDypU1duslHPLL1OsIH1KIUMjNtrMJqg4Ii1Vf0M%2FG7PhsUPHhaGPvvd15PGjzEaRPIIN0y4HivtGpxl%2BKOTUgzc1yNORl%2BkDPNVlSaiuLguDvjH2QLYpK4xzwHjjRdJJIaZvNSmJ4OxBYLWnTZjV7X1U6DHf1kjf3MMOcLt%2B9i7T4cwuJQUlg2AiijEOK3NHMOVRvObfdED4nNnq5uJIlZZbWO8OaHUi2%2BOl8rIUwb0vE4LjF33hMI7i%2B84GOqUBEn%2BtnigrIzt7OsSiu%2F4KYA0GWhvru1MAGJ%2BJTSg1K%2F42MCKkq%2Boq3%2BmPFNZrwSdt5eUI0ueGU3Irtm3pAqn8yCJyDrFD9tWq2GIDq6HxashCBOoUSnLxIaWrpDX7HRKnx9a6zbM6Por%2BiGzmT5j7jXYfKUbxNeNsfm5YqRG%2FmicZwdC8S5iS0IiecpxjfPzT7kccZtvC4bAIDI7KNzQNEkJvbyIs&X-Amz-Signature=87a8d753bbfab9d88a4504ed72d07269f9b226393c1015d7a4e0d8fedac0a228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQMNC4C%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf3a7PX5mo3Wa5U6ONv0p1TlEFhpvuhkpDtzqir%2BWe5AiEA2dzAeWSsPg3s%2BwPUvGNvgf91ZjYO7SYfiIUeL6dM9VwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9jpr3E4yA9yq82ircA7mjrUfzJcsjahJ2IE4MVg5CR5dWKigFDAF6mcWKGSv8uxILOXDlNC%2BHQVh%2FDlth2XpTWjdt08vdEolj6VVx01NszoRrMfOAbnk9u28b3ByqHNuKC7WxRoMU%2BFfP7t5S3fccn%2ByJeuxFVZFfSmPqCSluksRIfcaQphupZn4El7miC5mQ8JOPy8VVRcO0NkvfqWM3ER%2F%2BvmGmYi%2BYQgdzDTiS%2FN2PPad%2BRJ2gGRFmoLBAbLpP5Whyco32yI2Az0wrPyt4g0FTrqodcQ5M6leV6r45X0xjINbUfMnfOuaXKbEfiztJkPiQgzJNAu3YYcvImQsdJKGEAqtOhrBt7Gj62j3ABU3DRK8Z%2FQ1QeR3425VJ9GR%2F%2FgwaD2ipcW7cz1nguxFP15ueDypU1duslHPLL1OsIH1KIUMjNtrMJqg4Ii1Vf0M%2FG7PhsUPHhaGPvvd15PGjzEaRPIIN0y4HivtGpxl%2BKOTUgzc1yNORl%2BkDPNVlSaiuLguDvjH2QLYpK4xzwHjjRdJJIaZvNSmJ4OxBYLWnTZjV7X1U6DHf1kjf3MMOcLt%2B9i7T4cwuJQUlg2AiijEOK3NHMOVRvObfdED4nNnq5uJIlZZbWO8OaHUi2%2BOl8rIUwb0vE4LjF33hMI7i%2B84GOqUBEn%2BtnigrIzt7OsSiu%2F4KYA0GWhvru1MAGJ%2BJTSg1K%2F42MCKkq%2Boq3%2BmPFNZrwSdt5eUI0ueGU3Irtm3pAqn8yCJyDrFD9tWq2GIDq6HxashCBOoUSnLxIaWrpDX7HRKnx9a6zbM6Por%2BiGzmT5j7jXYfKUbxNeNsfm5YqRG%2FmicZwdC8S5iS0IiecpxjfPzT7kccZtvC4bAIDI7KNzQNEkJvbyIs&X-Amz-Signature=52a0af84dc170ddc5e70d174aab0542b4bbb2cfbfaeb6f3e9612a1b150828f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4U2RA5L%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUFQQKGxHStuxXn67ku8lq3oSjG9wTg%2Fqdq1m61a1Q9AiA4PO6uRCMnXSsAdFL8MwoU9ifFyXjBcu9wEfotfmp4BSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi6s%2B2M2agqG%2BDaOKtwD4orfHKbOMsxRv7U%2BTjA%2FSYIhEInAtI9wpBO2xpYRMy9MhatRZRmRtU%2F27ykrRR3WHD10YO%2F0zMnc5fwpx6LaUU4uNohiVvnDI04B6Ij19C%2FhQOAUf2lVh0QfHyaWF0iW8%2B9yE0gxwSr71lGVYjmpr0FKZ9F0cwp7mx2fteCpN8XD10eGmK822WyJs96UAcRKiG2uVt3B4J2ECsVCjBzfuaOe5LgnX0FDTKizI%2Blkgzgt1xVBGlqj%2F%2B6W4QgJngBQraWdpQWzukvEFA5E2XzOhrKDp58tQO2StW4AlSXyihz5IMLExbwA7N67gW1ERGdj%2BwvuKeFPrxVTk54X72Kx%2BNDR836RuA6ZaVzpl4bgSk0RIaAseheUM74Diz4nlpCscw8oOaRAJHmrKwRDHQS%2B6ydaGpT6zthCftdX%2BDTSutRvHmD3J2FkPXMUt44%2BiSvPrrfyEzJPcPBZ0WP3BMjzPAbzoVJ4LnTvmB6kfpXVetGGG7jUVVbNe38%2Bwql6SuHbaFECV7RtmvLpwfQ%2BdCRaa1PNsaFgS7dN%2FoGa1dunmajioZQpi648P5kWOC46LL19Ry5dVOmf4ipE3wV0ciMN%2BU%2BENcwt8AZvnCdWqyQxjRcvlnEsrkc1WrawgBUw5uH7zgY6pgFR2%2Fu1LeXgheWykbXbkg%2F5gNw%2BIwU17vkRTSlSnAayU5%2BOfSd1vVnceoNYXm1QR2XzWmdLPDUatCUmcu8A2NN6tOt6mTz1w2qRCUGI4bICBiLeEVMf%2F5pgyCILX8zWIs1zomkqr16sJf6bgieZ62GEtu5Brx3CQbOLliWQO88ZXzGHYNUOdD%2F8TA3XvWQnbRAV7RMz%2Bb4HadUXpXpsOftcPHT8p0M3&X-Amz-Signature=8404f0a65eeb03e27f7235ad00351008a8d36979316fd5319eccd9369a029c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PONNHJD%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9IGMlX6rISThL8uh5c%2BAoEl6SjwZ0acJ%2BrgY5djr%2FNAiEAtQu6bDgTbU9ihrpdoq3B5GpqyLgO9ENrmTe0qawgc6wqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpZWJj0IRdOm5hB8SrcA%2FCx5NpqL9%2BO1acPW0hKWil0MW614xJrSNSHF7NG%2B1UvMAfT2HGbFmueFdPxK8CUi1ZxgtaULGTI8PDdSA%2BfP4pACqoyR3%2B%2BwZ8aozLHU1E9MYRdPuBK6cKfE256%2FYb%2B%2BUygtvrP9ru9YyYTnY%2F3CJ6lowKkkOlSFpcEZLO0fpnxiLMnbpLcVkuk95uy2rZxluBlXPZmQWaM6RwNH0nSdABOy4o0kqtrRQKmr4a440kneVFTiJNEHiV4Wu%2FtHknf%2FDB4B%2FxGENSpBiYV%2B6zKvV3sCMfH5OwqR6YmU3xzu2nBRzfj1eHq9a9DSjZQDgnMw8mZCVcn6bZMoxg%2FuwceEcYuj5cFPYKpfaKsuyeLpXP9gLqrt3wUd3hHMeqldqckV%2BKqshow6Pb4oZ59q2w2RB3gJK8uwhQiyFkBBZF6317zmTQXuBZpcBEC0%2B7m2WEYO38WEx7BWcPPCqShq5j8aDiAugMVromvW2DuDZNXRYHluSS6p72AY2Ce8T279NldmW89Pg6AuwPKX2l3sgvYi5HQSvSnbhSyrQzs8D14SAYlRmC3DeYZFORgLJtjai9hGYwAoqKI8zu8lL6lbwl%2Bv5ko03UsUjnVvsCBqix6VjXRFCCe%2FU8Ae8oegaBDMIvi%2B84GOqUB3x67HTapFriQGAVruTJ03T8jpHPFBiQXS3Qn6SfB2F5PfeWJJcdIcFl2gHC2ynqmr8VzAbqM6eKjVaKO9jnrmwD3Hx%2BHa1O21CLpJxgnHbz%2BT5KZ2v%2FIhvvlLdI1CVeDyueoQJqipiBsa0yl3gZJwQOVgEWQg7wQiP27hmy3R0dnyVzpK0ydlz%2BPWVkfdpSR1myyJV3OK1fiyK%2F4rFRa5WGdIYEW&X-Amz-Signature=e976b60c4cb3c0a5d4609cdc3341ea00084f02a30ccd47ca72e35ec277f126a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQMNC4C%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf3a7PX5mo3Wa5U6ONv0p1TlEFhpvuhkpDtzqir%2BWe5AiEA2dzAeWSsPg3s%2BwPUvGNvgf91ZjYO7SYfiIUeL6dM9VwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9jpr3E4yA9yq82ircA7mjrUfzJcsjahJ2IE4MVg5CR5dWKigFDAF6mcWKGSv8uxILOXDlNC%2BHQVh%2FDlth2XpTWjdt08vdEolj6VVx01NszoRrMfOAbnk9u28b3ByqHNuKC7WxRoMU%2BFfP7t5S3fccn%2ByJeuxFVZFfSmPqCSluksRIfcaQphupZn4El7miC5mQ8JOPy8VVRcO0NkvfqWM3ER%2F%2BvmGmYi%2BYQgdzDTiS%2FN2PPad%2BRJ2gGRFmoLBAbLpP5Whyco32yI2Az0wrPyt4g0FTrqodcQ5M6leV6r45X0xjINbUfMnfOuaXKbEfiztJkPiQgzJNAu3YYcvImQsdJKGEAqtOhrBt7Gj62j3ABU3DRK8Z%2FQ1QeR3425VJ9GR%2F%2FgwaD2ipcW7cz1nguxFP15ueDypU1duslHPLL1OsIH1KIUMjNtrMJqg4Ii1Vf0M%2FG7PhsUPHhaGPvvd15PGjzEaRPIIN0y4HivtGpxl%2BKOTUgzc1yNORl%2BkDPNVlSaiuLguDvjH2QLYpK4xzwHjjRdJJIaZvNSmJ4OxBYLWnTZjV7X1U6DHf1kjf3MMOcLt%2B9i7T4cwuJQUlg2AiijEOK3NHMOVRvObfdED4nNnq5uJIlZZbWO8OaHUi2%2BOl8rIUwb0vE4LjF33hMI7i%2B84GOqUBEn%2BtnigrIzt7OsSiu%2F4KYA0GWhvru1MAGJ%2BJTSg1K%2F42MCKkq%2Boq3%2BmPFNZrwSdt5eUI0ueGU3Irtm3pAqn8yCJyDrFD9tWq2GIDq6HxashCBOoUSnLxIaWrpDX7HRKnx9a6zbM6Por%2BiGzmT5j7jXYfKUbxNeNsfm5YqRG%2FmicZwdC8S5iS0IiecpxjfPzT7kccZtvC4bAIDI7KNzQNEkJvbyIs&X-Amz-Signature=2de59b0da7c82fe9811f013f8f2e4a9b787a87833f2f939f406af4b50b42ca32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
