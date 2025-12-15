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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZU6KCZ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgxY1e51%2BKZAyje4aE4uza%2BVV9UPi%2FrvqU%2BV06%2F1s41AiAsKrYa7033FA8oMqAFm2P16fmboF6%2Bb6hlkwUvjKWfYyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMPxk3Ry2D84Jjhod8KtwDfE8hpmxAHfJ6q4yfuUOIlwIwx2FnekHKUMdIpALo%2BURezKDexvvRBgPVoIySPJdKS9urzwL4ufz%2BlFcF2BjZl6NsCLLYUU9RmRnII0MrBSOzdjzLlgG3dHBUeLCYmo5xuXHjDPJnC90WHiKLMNaEtzCgGa5ndgp0y%2BjD%2BPUU0GjC2qSicOIKQAttB0PSZNDGO%2Ft8TgGMK8REVSBs0t2T2C0%2FOE1ZeFjBDErP1lcQ6qE9KICZn0DEAYxrzANk%2BPRZM%2F3mFZxu2Sv2uaUkFQpwKDypqhYq5XgkhHnXUQchAikuwQx%2FzLbGzl5pesGP%2FJnhOgBR4EyfjZRWyKD7NPakec6NKM3p4qfAvKnZvs%2B7VB5A%2BzWeASOtvDn3OKQc2fRPAvdmLk1fQ3478%2F4%2F95s8JMJ8Kwg5qt6ryMKX7kLwMc1%2BOVr5mEUzpPe%2F7GZFPGnGMQ9hFJZuk%2BKxbltK5toq3BeP87u0juCtf1N%2BCNTcQ%2FfpeS%2BsWxu%2BOTaJto10jDSBXCeQbKHgiCCW5ihVcTCEPxyhyXHqECKKq4u%2FKeIi%2FLNbR2W%2Bdv6gqTg8XLm3Og%2BhLeQ8y77TF7SmnFkfk1sv4aS6G0M2cX9eg8T34G1hsRZr1FQ%2F8pnyodLOZ%2FEwz9r8yQY6pgElJNJLlBTLMUw9W%2FGtYgo21zkDEiNwKNKRa28f8XeRIt2cTyInoKL2VVNuk8NFTlzJqSRLZ%2ByWENJs2wtuvoMFgaVcZQWtiELDCVygdl6Zq%2FVCugTwnyd2ClO5PuntfunZ%2BdxwHBMuIMrFfyfsljn8SL0SRrzPIsO%2FKqOyHegVf6Pe5zXAqSdEl6CSGBUSOuCvNwkxLMoqARXFwGWLehJKIJamrFuL&X-Amz-Signature=e9fc7e652586c825bf33a62d022b5c3e1f39996e37932024feaa2f1479cc0ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZU6KCZ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgxY1e51%2BKZAyje4aE4uza%2BVV9UPi%2FrvqU%2BV06%2F1s41AiAsKrYa7033FA8oMqAFm2P16fmboF6%2Bb6hlkwUvjKWfYyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMPxk3Ry2D84Jjhod8KtwDfE8hpmxAHfJ6q4yfuUOIlwIwx2FnekHKUMdIpALo%2BURezKDexvvRBgPVoIySPJdKS9urzwL4ufz%2BlFcF2BjZl6NsCLLYUU9RmRnII0MrBSOzdjzLlgG3dHBUeLCYmo5xuXHjDPJnC90WHiKLMNaEtzCgGa5ndgp0y%2BjD%2BPUU0GjC2qSicOIKQAttB0PSZNDGO%2Ft8TgGMK8REVSBs0t2T2C0%2FOE1ZeFjBDErP1lcQ6qE9KICZn0DEAYxrzANk%2BPRZM%2F3mFZxu2Sv2uaUkFQpwKDypqhYq5XgkhHnXUQchAikuwQx%2FzLbGzl5pesGP%2FJnhOgBR4EyfjZRWyKD7NPakec6NKM3p4qfAvKnZvs%2B7VB5A%2BzWeASOtvDn3OKQc2fRPAvdmLk1fQ3478%2F4%2F95s8JMJ8Kwg5qt6ryMKX7kLwMc1%2BOVr5mEUzpPe%2F7GZFPGnGMQ9hFJZuk%2BKxbltK5toq3BeP87u0juCtf1N%2BCNTcQ%2FfpeS%2BsWxu%2BOTaJto10jDSBXCeQbKHgiCCW5ihVcTCEPxyhyXHqECKKq4u%2FKeIi%2FLNbR2W%2Bdv6gqTg8XLm3Og%2BhLeQ8y77TF7SmnFkfk1sv4aS6G0M2cX9eg8T34G1hsRZr1FQ%2F8pnyodLOZ%2FEwz9r8yQY6pgElJNJLlBTLMUw9W%2FGtYgo21zkDEiNwKNKRa28f8XeRIt2cTyInoKL2VVNuk8NFTlzJqSRLZ%2ByWENJs2wtuvoMFgaVcZQWtiELDCVygdl6Zq%2FVCugTwnyd2ClO5PuntfunZ%2BdxwHBMuIMrFfyfsljn8SL0SRrzPIsO%2FKqOyHegVf6Pe5zXAqSdEl6CSGBUSOuCvNwkxLMoqARXFwGWLehJKIJamrFuL&X-Amz-Signature=47d14670d24486a22e751ac5d4ce8bf14d5f5a9ae1a246202e8eca215522b62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZU6KCZ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgxY1e51%2BKZAyje4aE4uza%2BVV9UPi%2FrvqU%2BV06%2F1s41AiAsKrYa7033FA8oMqAFm2P16fmboF6%2Bb6hlkwUvjKWfYyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMPxk3Ry2D84Jjhod8KtwDfE8hpmxAHfJ6q4yfuUOIlwIwx2FnekHKUMdIpALo%2BURezKDexvvRBgPVoIySPJdKS9urzwL4ufz%2BlFcF2BjZl6NsCLLYUU9RmRnII0MrBSOzdjzLlgG3dHBUeLCYmo5xuXHjDPJnC90WHiKLMNaEtzCgGa5ndgp0y%2BjD%2BPUU0GjC2qSicOIKQAttB0PSZNDGO%2Ft8TgGMK8REVSBs0t2T2C0%2FOE1ZeFjBDErP1lcQ6qE9KICZn0DEAYxrzANk%2BPRZM%2F3mFZxu2Sv2uaUkFQpwKDypqhYq5XgkhHnXUQchAikuwQx%2FzLbGzl5pesGP%2FJnhOgBR4EyfjZRWyKD7NPakec6NKM3p4qfAvKnZvs%2B7VB5A%2BzWeASOtvDn3OKQc2fRPAvdmLk1fQ3478%2F4%2F95s8JMJ8Kwg5qt6ryMKX7kLwMc1%2BOVr5mEUzpPe%2F7GZFPGnGMQ9hFJZuk%2BKxbltK5toq3BeP87u0juCtf1N%2BCNTcQ%2FfpeS%2BsWxu%2BOTaJto10jDSBXCeQbKHgiCCW5ihVcTCEPxyhyXHqECKKq4u%2FKeIi%2FLNbR2W%2Bdv6gqTg8XLm3Og%2BhLeQ8y77TF7SmnFkfk1sv4aS6G0M2cX9eg8T34G1hsRZr1FQ%2F8pnyodLOZ%2FEwz9r8yQY6pgElJNJLlBTLMUw9W%2FGtYgo21zkDEiNwKNKRa28f8XeRIt2cTyInoKL2VVNuk8NFTlzJqSRLZ%2ByWENJs2wtuvoMFgaVcZQWtiELDCVygdl6Zq%2FVCugTwnyd2ClO5PuntfunZ%2BdxwHBMuIMrFfyfsljn8SL0SRrzPIsO%2FKqOyHegVf6Pe5zXAqSdEl6CSGBUSOuCvNwkxLMoqARXFwGWLehJKIJamrFuL&X-Amz-Signature=dac7ad239222d91eb845d8a63d5a2e1647fa4461ded4faa7ce4961cd68398696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7XXPCT%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC9iSBmAO8IDxSFukzIkxVN44F3e20YztBStOxcg0vK1gIhAJF83Wgxrcxs5l%2BBoXLLx1o9GPRCp4mEP%2B8dsxnja8aaKv8DCD8QABoMNjM3NDIzMTgzODA1IgwzYc1x8M0dy6%2FtOV8q3AO%2Fhsn7Xf%2Fo3374RKJEJW8j%2BOP9DpcstmJbRFPoqnsP7R15FsfZn2tYDgfjeKOBu48xk4idfZGxm6iuY8Vd%2Fid8cB4dj7IObUXktt8RVF9%2BE0L6J0gpqrv8AwXoDPAmT8Migd3UAKKvDqMZlj46k4MUbRn2EAJpZiATmuGg1jnaKv4pxlbSqtX73cUWgLJl9uSqhir16yH2MAfD%2BZ3hc5OthCZKNHjTofcJ0D%2F9H8Mc7SIJJPrj41W35JyjxP9MqhF88vCSNovv2LpBTvnyqJ4THo6kRtZO04ytwVCZc3JsMeSn3X%2BAZSLFFGdS2IZ2NCrJvwALGcp6ML8QdSUtq4JHbucJCPjr4thAAd9ruF6iOwo3QycMG6%2FMlo9o47YyvnJuMAGkjw3CiJJ0P5ZlzBpEL84StvFCgoa6u48qgMI4R%2FKaDogmrYqniVeMZqoY%2BukBJmF6vhC9pCJFykbb9j3rMhoHc3iK655VLq3cz%2BM25UkvfnHU2kjXq6%2BagJnFW3XN1f05fDUWvVgVvguZeBb5Ee5bbjB5pwHOI6sjbCAmTN3o5FSQib678CgjA%2F6q4SlDQODsRdfR9TvvXVeXiSPDieJxojb%2BDViUf54Z5UmyxU92nlnLhpdEB2h0OTD22vzJBjqkAS2%2FgVXv%2F2BFRZYqhdySm4xh8%2BpLo9y5uP81uMekfoIy7VsXqJlKSDGXfSBk%2BlYtoKmyNvDM8gb8fdL%2B%2BwScwjKMjI8egscOxOEeiillrWRCimPj4OwzCqPxp%2B%2BdohsaIk0DJtAkUnJxKlfv5wB9NGvpBK7bH82T04GPEii0F8eKHEV04YO6jhq1b59gWFAI8hx9kPWx%2FQOGhNJ%2BQzEj61%2BchXwi&X-Amz-Signature=0667703bfa1b9f933ace683d24215ad0a55f1ea034888dc2ff9aa1520831e6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URIHCLJZ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGak457IsP5Af0woLwIzJGB2q42%2BFGO5bUmO746%2BAWayAiEAxvS7RDRAK4dx7LfRBY87VegwAecm%2F5S30zAX9xIHJL8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ%2Fkqpt9Xpjm%2Fo6%2B2ircA9VrBvp7vaydU%2Fhp0kIEriKyawPLncQVwEC4Ki55LJMF2wEl1gUSS648aD2iXgw4XR754D82vGmqMjnsOnDfDhZZyyOGEl2eMjClhnL3xM%2FFMDqyNs1YJkGfRDNInL5t0g1VQy5hdGS3JDZmpX1U%2Fc7507c32zzuubGmOKyeNbL47lZlAMiyaJB2zhIFuF8xApd7r6DAureTthRO5TXug4Ge6M1d%2BJY09%2F8WwKeNQGtflMDhup2kKgaBexn8TDJ1kcnh90LDjoQUaZsS%2BShyV2iecdmgDRKuq37cir2yhPsFfYhiyk1iQElPCGQDqv1vUd8lYuSVhd2j%2F1RKBDGfyabcy%2Bf0yd%2F7YEVzSZS4%2BaVb4q2dB%2Bk3EeuIzsdX8aM6Rio9iX8WXbfIih2keL4GiyC7hFr4NQS%2BgKZOE9k1e%2FlNH3b1%2BRoRvQIlG4tgQ%2BZ6oLlIPRdXBV0iAkJDHloZO6ohPEm43w6eZF1hLam42cARk6g7cT%2FJPE3JZ5zfOKsBcj1CPvBQwl1cKFBs%2F5Qztm2jAzGkFSSBVCHGuBRLJw9QynXbPRasLXKi%2BwfSqHdEdpR1lWaxPv7Y3dlI0YTy%2FDBy1H8HaN%2FPq0A5HceHBaaANs7AYBv%2FaGagOksMMM%2Fa%2FMkGOqUB6OCSYWKKsh8M3gqttxU5UH4tA%2BJechfS%2B2Bg69ljCBG2cOwxsR90xaroddOXBBbXEhoIqvAHpKJd4Zz2GYo6Fh%2BuzjdEuYJA3l1eMUFQ0Vs2qKNdxzgFUZkQBBmbLi8KWUWk3ElOCeiHnX9Ce1VxohseWZfuyiWBvdVAmeojqS2ggkosB3L2YMoSJrcfY5K8VD2tRsQdQhLNVkiTEVEokf8Dh6U4&X-Amz-Signature=764d1cee9ef411f06f8362bccd5fef845288cd84e8cd3ee3bf261106c5b38ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZU6KCZ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgxY1e51%2BKZAyje4aE4uza%2BVV9UPi%2FrvqU%2BV06%2F1s41AiAsKrYa7033FA8oMqAFm2P16fmboF6%2Bb6hlkwUvjKWfYyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMPxk3Ry2D84Jjhod8KtwDfE8hpmxAHfJ6q4yfuUOIlwIwx2FnekHKUMdIpALo%2BURezKDexvvRBgPVoIySPJdKS9urzwL4ufz%2BlFcF2BjZl6NsCLLYUU9RmRnII0MrBSOzdjzLlgG3dHBUeLCYmo5xuXHjDPJnC90WHiKLMNaEtzCgGa5ndgp0y%2BjD%2BPUU0GjC2qSicOIKQAttB0PSZNDGO%2Ft8TgGMK8REVSBs0t2T2C0%2FOE1ZeFjBDErP1lcQ6qE9KICZn0DEAYxrzANk%2BPRZM%2F3mFZxu2Sv2uaUkFQpwKDypqhYq5XgkhHnXUQchAikuwQx%2FzLbGzl5pesGP%2FJnhOgBR4EyfjZRWyKD7NPakec6NKM3p4qfAvKnZvs%2B7VB5A%2BzWeASOtvDn3OKQc2fRPAvdmLk1fQ3478%2F4%2F95s8JMJ8Kwg5qt6ryMKX7kLwMc1%2BOVr5mEUzpPe%2F7GZFPGnGMQ9hFJZuk%2BKxbltK5toq3BeP87u0juCtf1N%2BCNTcQ%2FfpeS%2BsWxu%2BOTaJto10jDSBXCeQbKHgiCCW5ihVcTCEPxyhyXHqECKKq4u%2FKeIi%2FLNbR2W%2Bdv6gqTg8XLm3Og%2BhLeQ8y77TF7SmnFkfk1sv4aS6G0M2cX9eg8T34G1hsRZr1FQ%2F8pnyodLOZ%2FEwz9r8yQY6pgElJNJLlBTLMUw9W%2FGtYgo21zkDEiNwKNKRa28f8XeRIt2cTyInoKL2VVNuk8NFTlzJqSRLZ%2ByWENJs2wtuvoMFgaVcZQWtiELDCVygdl6Zq%2FVCugTwnyd2ClO5PuntfunZ%2BdxwHBMuIMrFfyfsljn8SL0SRrzPIsO%2FKqOyHegVf6Pe5zXAqSdEl6CSGBUSOuCvNwkxLMoqARXFwGWLehJKIJamrFuL&X-Amz-Signature=d1d37769ad2cf0944725cd68f255e1104eed10225e6d938fd2bed9557302b1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
