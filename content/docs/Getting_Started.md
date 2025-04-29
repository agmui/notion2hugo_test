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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3XEB6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqLPdIAH2in2kdvthtju%2BhOZzz%2B6t6Frlw6j%2B5kLL4zAiAc3Jrs5sfmWMQDhtoST8PXzc8i1NJ4JSAStdZ6eU7ehiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwvLIfxCyHKxjcSAKtwDzPbY7ahqNm5kXR6ni%2FHmAVXG%2BKW%2Bl8%2Bw%2FtXw5EBLuM9cPLnZ1aIEY8D9GBpvWA5byjWgs4BlLxk86HgQ%2BEUpYe2m2PG5ogaF%2BxufaZKbT83sREuZ3XEcOblUjHeqCgu%2BarXMnm1gNgbJ56NMprFdvOsjesYUYyryiHCsQ7EaVAM47Rq%2BrAMSmjy6xyiP%2FtDVZE9sXFm5AfBH7doBm0y2qQea%2BDyS74OjfGPHSQ4i19dcGQ39CTeyHXRIeVJwUtnheruJf5gq9WDLjgg9UlZD20Ln2KIZDGui75pnS4VYIGJsHGyIxHDM6faYffebjBCSekXv6EzZ3eK0lKPKwCgKdkDwYLUyQurqI5yrgGunaBrRalTvRX%2B7ua0PufFXC3s4YovL12tK5H9%2Bc%2BF2LA%2FT4uOd5wSNvknucKgx4kuCSWBJoqUoLH93I9UCYKrZnMj%2BjuCONd6yrTneQuid6mtxW38eE5OTJ0ewoKC2l%2BwkQcDDc%2FNY8ERxFGpV%2B6qYauwvs1pV1lTWiCEwDRxE5ugM1zV3QbMb4rj28evF4wjP%2BY7wIO4s8arBUB1zCoBI5QWh6nO28zd8ITVKk8Ey0NwOHTQ%2BrEGOBpLMw%2Bon2s7WqJyYZ8SM1hK7uGPMAmowj7%2FAwAY6pgHzZ4dnAam86IutRXAug1tRRC526G3BGgL%2FLInWPh%2FBlLXUmHdkJokbI1%2F5Uo%2BOCBzpVKKhEhtcMjqnivtWnbi8%2F3ia4FudVVTEksYtNf%2FwfryFhoy1rNuTeQi0YC0fqapjfv91IMhw%2FpJ568ovM1epCXLPPLkTro8F3ZDNPaU1EeZo2FT6XDF4VJ1YI5esbRsSZFsOKBr%2FSBzuWpXRePFQCTV1Hx6L&X-Amz-Signature=c3c6f8496ce3277ab15f98cd0b477c47e4b46f7c3f15948ff92de5f4266ed321&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3XEB6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqLPdIAH2in2kdvthtju%2BhOZzz%2B6t6Frlw6j%2B5kLL4zAiAc3Jrs5sfmWMQDhtoST8PXzc8i1NJ4JSAStdZ6eU7ehiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwvLIfxCyHKxjcSAKtwDzPbY7ahqNm5kXR6ni%2FHmAVXG%2BKW%2Bl8%2Bw%2FtXw5EBLuM9cPLnZ1aIEY8D9GBpvWA5byjWgs4BlLxk86HgQ%2BEUpYe2m2PG5ogaF%2BxufaZKbT83sREuZ3XEcOblUjHeqCgu%2BarXMnm1gNgbJ56NMprFdvOsjesYUYyryiHCsQ7EaVAM47Rq%2BrAMSmjy6xyiP%2FtDVZE9sXFm5AfBH7doBm0y2qQea%2BDyS74OjfGPHSQ4i19dcGQ39CTeyHXRIeVJwUtnheruJf5gq9WDLjgg9UlZD20Ln2KIZDGui75pnS4VYIGJsHGyIxHDM6faYffebjBCSekXv6EzZ3eK0lKPKwCgKdkDwYLUyQurqI5yrgGunaBrRalTvRX%2B7ua0PufFXC3s4YovL12tK5H9%2Bc%2BF2LA%2FT4uOd5wSNvknucKgx4kuCSWBJoqUoLH93I9UCYKrZnMj%2BjuCONd6yrTneQuid6mtxW38eE5OTJ0ewoKC2l%2BwkQcDDc%2FNY8ERxFGpV%2B6qYauwvs1pV1lTWiCEwDRxE5ugM1zV3QbMb4rj28evF4wjP%2BY7wIO4s8arBUB1zCoBI5QWh6nO28zd8ITVKk8Ey0NwOHTQ%2BrEGOBpLMw%2Bon2s7WqJyYZ8SM1hK7uGPMAmowj7%2FAwAY6pgHzZ4dnAam86IutRXAug1tRRC526G3BGgL%2FLInWPh%2FBlLXUmHdkJokbI1%2F5Uo%2BOCBzpVKKhEhtcMjqnivtWnbi8%2F3ia4FudVVTEksYtNf%2FwfryFhoy1rNuTeQi0YC0fqapjfv91IMhw%2FpJ568ovM1epCXLPPLkTro8F3ZDNPaU1EeZo2FT6XDF4VJ1YI5esbRsSZFsOKBr%2FSBzuWpXRePFQCTV1Hx6L&X-Amz-Signature=15f3a419eae93883f39bcd28a7f05b73312544bed02ce4a11b73f0914cdad110&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKLSMIYK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCxqnKQlC8QB7n5iquoQmzAGyenQlWaNRJxH7c5I45AIgKkqNgtGcvModMdrgsmHnh4FSYFwH5JCuJhntnqnkcFUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAu0T7P1yK2NQ6VJhSrcA6boRLEfuuEbNkQuOJSoJtbVSRVzft3pkGnZwx9eZbcxMNUnTRMlir61hB0TGP6zeCDcL7Ly0Zi0CDiyYo1BwFTMfyp1SEGXbNYiAk7a1b1iSbyFKSCnntcx5fdZbNfCixkJuIHWD0436nD0n31Q22xknKDtRVjayxRk2JSeORVtWcMe7sgSI0GUtJQ5FAbEtyxej5e323kWHaAZB8nz%2FTVYGMNRvxBt5RWTglZgQ%2Fscq9hOsJIIte5nnhvQ%2BA63nsNuwgYz5pXcevb54M4NcuCTuNYeUT3bgfi3GAnnszladtL66h%2FI5y8xvcT8mgM9oplmpHduC%2BoWKaWYhfPHuKd1YRZ28fHSKYnIKbt5SwhGHtc3psEEdFtIpCc2v59PpYbocHQVeJiOLstxZINYPoPxa4Y7Ol7gJkgG8NRwrll1GXKMgeD7lRLTUSvokXymXQoyo2Er2u2D%2B2s%2F0PVafbb5HxB7AYg3d%2FiuklVWOKpzzhEBCxfb3MYviwtMfZuavH6oYR%2F14Dszsv2fP9YdBUVJuHJiIELab1xdGlQ%2Bz7JVDxelGLyAaDCB%2FRluiTeGNBPD2BWW3b70fFVdQt%2BFxO7Mx9hjoNtDasQP2%2FQV12eU0IRlsUq%2BkeeoffVzMKC%2FwMAGOqUBtWdCGM0PKNJmExtlWEHb%2FfbQMTa2wGl2ZAYx7vAByv8OxPfFZAUni0H5QgbcGpicAA2Nw7Qqgv6gnKDEU9T1jecgq2oZtEL6H7mDMNLG%2BpMKP8zcxbbzILXbTHphQEs6Dv2AOZvGuE%2B0cilcy9%2BOlEbbvTtXW0uxOBy%2FsOjt3wQcQWhNFsyhqprLu0XzOLR%2BpDFMs5IUgvNfiLBF%2BwEzldiMwjFM&X-Amz-Signature=cbbdc0814100594b4845f32860360fbbabeb753d16a70df295501475f0fe0d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNEZL44%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeG%2BqzzrX5p5Y8dO90ENApMxL4vcZ8Awu3vGDa3gk2UAiEAikmq3qozUPzYX%2Bam4beYZx0EgCjhIgAjujgzNQTDa1MqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4cTebiFM4NArG37ircA1imYdswH%2BPtEqR7pYZQx%2FV7gTCTF44lTwh1qkFrdZjx2yGUQAoQ6XPxPlYqR8GOX6FiavB0JDgT4Wkq85Zz6nRZhEZ9ajC5%2FgOAIQSE%2Fuk%2Fjo6DnEWgN9YWIL6R6Kgbz%2BiC3LMwlU2yY5FSaTvA9RBypWCA4g0c4tboFzuccKJw71R0DrUBArEd%2BS3HE2IkHIjpXU92uocYOZ8aOOVsrdgDoh8mKSIPCCc5jVtLbkWxYl%2F9F0FNU%2BeZs51iJtwDnCev8OpTOj3K4wc3uWrt7hsEiMmGfnUjLJtF9%2FUHGpv%2BtNigxEhEa2JfPYVf%2Bava%2FyqxVm3o7zXQ64gDued5Ay6TVQlNJy0im1Kb%2BW8dZtLeAXvp9iHmDZxr9mCOEeWxrJ39HYy5fmEIQkrahHFkKxxB2gAJA0MzABukJ9fQNWjB%2B8%2Bu9MwK1mLtRsFDrKJ9YQeukVCUbu0HyaiDk4sw5XndvbSYHXhTtAQN325MV73bB1sLhEEsk4Z3%2Fun6wNuX5zakBzw0ITGQSreCZUQzQTY7aFzV1Z6FegnOYgf5np5WzBalLfDwRTE%2Fe2vhmSRSF%2BEG3akpd83V%2FNHm6Wb%2FM4sZ3ZJtk3FV9vDWPId3kyA72wE1t8mHIm1nrIisMJa%2FwMAGOqUBvTH7BicB%2FIBPU%2B85W3BV%2FHLtZsO10HcgWj6rvX5dqx7Hr7XN6ak4%2FSrSt9mZMRLln1Tbxokj3mywS2lv%2BSQzesh4Tjl4eWM%2F5lJbB7%2FJw96fZaPkAhpYYaDBxG%2FwntxMZ6KqRE3B1WgdZzrzSfQAvHXJkVQZcS94Kw86cz8YWcJWym%2Fjv7eRI4We8p3m9sULSzmDhGZTUr%2B%2Bp%2FvdFAhbhEwk5zn6&X-Amz-Signature=f5610aa30a636177a32c8fccfde017d6e8449faf17b8c1f9645b89c26b59ccfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR3XEB6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqLPdIAH2in2kdvthtju%2BhOZzz%2B6t6Frlw6j%2B5kLL4zAiAc3Jrs5sfmWMQDhtoST8PXzc8i1NJ4JSAStdZ6eU7ehiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwvLIfxCyHKxjcSAKtwDzPbY7ahqNm5kXR6ni%2FHmAVXG%2BKW%2Bl8%2Bw%2FtXw5EBLuM9cPLnZ1aIEY8D9GBpvWA5byjWgs4BlLxk86HgQ%2BEUpYe2m2PG5ogaF%2BxufaZKbT83sREuZ3XEcOblUjHeqCgu%2BarXMnm1gNgbJ56NMprFdvOsjesYUYyryiHCsQ7EaVAM47Rq%2BrAMSmjy6xyiP%2FtDVZE9sXFm5AfBH7doBm0y2qQea%2BDyS74OjfGPHSQ4i19dcGQ39CTeyHXRIeVJwUtnheruJf5gq9WDLjgg9UlZD20Ln2KIZDGui75pnS4VYIGJsHGyIxHDM6faYffebjBCSekXv6EzZ3eK0lKPKwCgKdkDwYLUyQurqI5yrgGunaBrRalTvRX%2B7ua0PufFXC3s4YovL12tK5H9%2Bc%2BF2LA%2FT4uOd5wSNvknucKgx4kuCSWBJoqUoLH93I9UCYKrZnMj%2BjuCONd6yrTneQuid6mtxW38eE5OTJ0ewoKC2l%2BwkQcDDc%2FNY8ERxFGpV%2B6qYauwvs1pV1lTWiCEwDRxE5ugM1zV3QbMb4rj28evF4wjP%2BY7wIO4s8arBUB1zCoBI5QWh6nO28zd8ITVKk8Ey0NwOHTQ%2BrEGOBpLMw%2Bon2s7WqJyYZ8SM1hK7uGPMAmowj7%2FAwAY6pgHzZ4dnAam86IutRXAug1tRRC526G3BGgL%2FLInWPh%2FBlLXUmHdkJokbI1%2F5Uo%2BOCBzpVKKhEhtcMjqnivtWnbi8%2F3ia4FudVVTEksYtNf%2FwfryFhoy1rNuTeQi0YC0fqapjfv91IMhw%2FpJ568ovM1epCXLPPLkTro8F3ZDNPaU1EeZo2FT6XDF4VJ1YI5esbRsSZFsOKBr%2FSBzuWpXRePFQCTV1Hx6L&X-Amz-Signature=aea90adc6d47b05b25f742b54d39a533457ba25725299ced2778a140be52ac25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
