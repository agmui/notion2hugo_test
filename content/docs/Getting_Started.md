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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3D6ZNU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCHM5nBOeidgcG9GWwx3zPRFCB8hvxgjV5rSvekAjkwjQIgdU4w5tBwCtfshUL2qAp0i1IifwbNN5P6QzeJfLRf%2Fd4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCqMHNsTYfIb%2BFKTQircAzTq9d4Qg0RnWrsARNay70ZCD%2FkGXTrVqIliMgiZtdTj%2Fn11CSRmHYwxkdwZKdpLL%2B6HPSwhpzO%2F%2FIQH9VpnNCFTD%2FmmJdu46XaBwIbud9ZtyB9SlMthwISB74H35Hv3MG67zVfQqW9zLRzu2U0E6IxKScAO32UpeJCDNcIGd1muwMMXmIO9leRHiyEZCjJPCuwv7pwFFpTPdvKKCLbUAcLjGjWoZESgzhZbxO7B%2BFSfOaaJ7L7y9DntFPXFOf3H3%2F%2B143ObtcIkv4k06SEW66Zxt1UeEpFJYHyRPYttvJZtmjRcMxelsUW4KfgVqivRD7zj8jtfo1YS5tmbbQ0MzzpZl83r5U6Zt444L8SBYG4HmFdTvU27QNnEk2JYYXGKH4T3HOq%2FjROkyAbyrB6YymmeaxTnjddgKRXOb64xeaNAgKCfdc3zW3xyJblxoTJ51byUfe8eIlpCqB6CI7kcczsMRdQYQb2FJwY49n5yCzWrVr9e7jhz1r0x7Wo0dUKL78OVW9D9q%2FSgRhIl9I7XIfSdeYDg08NpirPOQK1dUviQ1bCrOT%2Bi%2B8nUnbMycgHs4Ec80q0pnDWMWZkIMGTvj3TMwEvBjjHEdtwHtXBK8Ono3FBF5%2FWKbyz2CbAjMNqfoL8GOqUBEyPSNqiNFAu8%2Fuu78i8%2BnSxWgAoihBop0sU3LRPvy8%2Bkukn6jL1rslUwaZheFnCZjuY5s8UBsPGmZjqzFeHbWO9oSHDPzwikWzS7iPQivCStjT30wYxsNjZZWGrtKrM0YaJr2vlrGZaBtzuHINaQpsk2EvAN83d1EvgftIIFixB7etniVwCf04ECaBWerhk4CRu7JaAw6LxJmcgS1WTNQizDZ3w%2B&X-Amz-Signature=39f8b35be433a91d497c7129cc83fc7400327bb410d0b6514817558a099d724a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3D6ZNU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCHM5nBOeidgcG9GWwx3zPRFCB8hvxgjV5rSvekAjkwjQIgdU4w5tBwCtfshUL2qAp0i1IifwbNN5P6QzeJfLRf%2Fd4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCqMHNsTYfIb%2BFKTQircAzTq9d4Qg0RnWrsARNay70ZCD%2FkGXTrVqIliMgiZtdTj%2Fn11CSRmHYwxkdwZKdpLL%2B6HPSwhpzO%2F%2FIQH9VpnNCFTD%2FmmJdu46XaBwIbud9ZtyB9SlMthwISB74H35Hv3MG67zVfQqW9zLRzu2U0E6IxKScAO32UpeJCDNcIGd1muwMMXmIO9leRHiyEZCjJPCuwv7pwFFpTPdvKKCLbUAcLjGjWoZESgzhZbxO7B%2BFSfOaaJ7L7y9DntFPXFOf3H3%2F%2B143ObtcIkv4k06SEW66Zxt1UeEpFJYHyRPYttvJZtmjRcMxelsUW4KfgVqivRD7zj8jtfo1YS5tmbbQ0MzzpZl83r5U6Zt444L8SBYG4HmFdTvU27QNnEk2JYYXGKH4T3HOq%2FjROkyAbyrB6YymmeaxTnjddgKRXOb64xeaNAgKCfdc3zW3xyJblxoTJ51byUfe8eIlpCqB6CI7kcczsMRdQYQb2FJwY49n5yCzWrVr9e7jhz1r0x7Wo0dUKL78OVW9D9q%2FSgRhIl9I7XIfSdeYDg08NpirPOQK1dUviQ1bCrOT%2Bi%2B8nUnbMycgHs4Ec80q0pnDWMWZkIMGTvj3TMwEvBjjHEdtwHtXBK8Ono3FBF5%2FWKbyz2CbAjMNqfoL8GOqUBEyPSNqiNFAu8%2Fuu78i8%2BnSxWgAoihBop0sU3LRPvy8%2Bkukn6jL1rslUwaZheFnCZjuY5s8UBsPGmZjqzFeHbWO9oSHDPzwikWzS7iPQivCStjT30wYxsNjZZWGrtKrM0YaJr2vlrGZaBtzuHINaQpsk2EvAN83d1EvgftIIFixB7etniVwCf04ECaBWerhk4CRu7JaAw6LxJmcgS1WTNQizDZ3w%2B&X-Amz-Signature=c65976601c2dc82d4447fa9cd8cb40fb307f0867e73e957f96cec74d4d20046d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAIAALG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCuwzakXIcBCV2KO074LyD2wUBpZuB28LPo5HO2isRcGQIgIvWg2mlWazIy4nh5Gs4DX1XARAm6r2EosTvzCvoIJHkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNIXx2E8kjqwrVLf3ircA%2FZLYRA9lm8mFn3s0J5KzVobSiOa%2F4ZvhDnjdK81dSombltdSb1xQzY%2BSYh5ijcibxV9hdedRUO9pH4WomvO%2Fy80IqV7glDpn6hXlAw6oAW3R4GlOZ6YGonl58o4x5CHGPxQDsYaUOva%2F7CBCbR7IhPhN%2FNV5S9oMWi%2Bb4%2BBOs3biqTHT92NmFEGpEU5pijkMfN4URaQKyoqxncGpC%2Bz2dZGnHff%2F3lAz7uHmDnQfiLQzR%2F8cm2bfAtK%2FB1PIuvqY3ovMyGHZ5wORatB7%2BO3UzDgoIyve7VVoUS7J7G0WpEQYIjaw3pmNmn%2B0Q5defwJwYLjZdpkmY9Gax7PXAKBXt0V%2F1xibutfhjIQS209JQhYI3c%2B8pUZCz%2Fq6EPp29iZOLCf90o2eNsDwN9oJdpFjSDeQkLDhqQ2%2F2E78ncBoE9FtwZ2ah0WMvuZOBdTW6tHqYc6RYCKA4q4AT80XcgWPOEa0whii0ZLsI6hAuD0NPhdDUZT%2F41%2BCmrT8KgGB2qLvp6CTpQONAsHgEePr8jQhyh3ZyMM7zTl90BBR3ZKTxDuemUCwRVhm%2B4XDWXMBUfDaKEjkY6veoPFO19vC6ae%2BT34J31woJ6JrTpGG8o%2FsjDJkqckfJ8DLpxM3PJ2MPyfoL8GOqUB6tE5MWrhGIX75kcyf9Nh%2Fy%2F10it74u0Ra05h%2FgK3bdMbNbdK3%2B%2B%2BOgxuSZ6DCrXn5D4SdrntaKxd0Fp5FA7oJVlRImzRuvKLKKRUoowh7TsXUvQ%2FRCr0tZJZvzUtMFkvA8s1WHIgMPwZc%2BcOvOZv1H17C9aowBXV28HE9U4U3Map8U6CUngzMOjqW7hCko8U1kTnP1%2Fd8C0NJjbFcc53ZZBxefbS&X-Amz-Signature=142265fa1cbf9be9f3a37b10b79ff9b0f76ce19c5465f5a40b6262b951972f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPR6XP55%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCdVYJ9luAXvoh3dUmR6OdEM2c2gLBmO3s%2BO4i3Jw6XigIgOGO3ZZ6XALg%2FToR6BC6KeCtbdH9tMGME6m%2BZKf%2F%2Fb7kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP%2BFmVIZXWeqxQtSrCrcA%2FxiOB1u7742cYxmr6BOeqahJAseUJOfrIlUxmS1LrbMqaBwRpdgn33bKUPuZquGzFdR2yveGc8kVpAXZufFoZnEjfJeJ5AO1jdZrUAKj7FkkEX9rilWiA9cKegFxITS0q%2BFZi09VVJEzsZ%2FYyKxgBxf3RpjVxB97622nAOlAE4FjjmSCpvdQGMcSKhZ5qy3%2FYs1hcxabMEf3DgBqLGTeB0be7v14taGHfd2PPlafaN7ukblWM%2Bz1UP8s%2Bgy3kJBdF4jlgh0otllf5zTSAv4EQnhU9FmNfujcu92I2fM3ic9aXequfmsp2a92pfGlKXF3I5mRkB49GykDcrax8Ulob06a%2B8ro6RNDmdCwxgNGTdZuqFiYjv0FKG8KQUGi5MhhzO7hw0yWglpWYLFhDxoDrIQbnqzFG0REKZjSuoFYvwnm0s1OhXqt86vgMY4Lb0GNurPjc5drkI2gsndpdm7GgnZ76%2B8ir9cnQizlMYZor8zQtyLIix4MWZ3iI2djqOuOvjBu8IBpldSBRNO4icSBqHnxa1wUtz55cxbsGKNVIzhmoBrBG2YkSkqbrFIeo5EJiUmKxskwOTuba944I91PK1aJ12GzTM7ZZ83LVGOL2dnSZmFB6BNdc45hpbXMNefoL8GOqUBhuNx5l9gI1YARqZPd2agMk1PTPz88Q7mBXYYL7aa2B2FterkzSLeZ%2FEg2LdC%2F2Xlz2dz4hiUzWv398twezTXEzhHFSSuOAaYiTS%2B5jv8tqvr23QEAw6bONbCmm9%2Bzq2L58jHvW6bMl%2Fba2RZ%2FiewBtUBGEsZej4VAHGEbrF1f87iAg9IX2QCc5L7vE76je81b1OtISXD94U1YSyUAn2VWXqvMux0&X-Amz-Signature=de7313b875b7083c009647eeb7c21c1158f9d18f8f8e7945444bdfc73ae4c939&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD3D6ZNU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCHM5nBOeidgcG9GWwx3zPRFCB8hvxgjV5rSvekAjkwjQIgdU4w5tBwCtfshUL2qAp0i1IifwbNN5P6QzeJfLRf%2Fd4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCqMHNsTYfIb%2BFKTQircAzTq9d4Qg0RnWrsARNay70ZCD%2FkGXTrVqIliMgiZtdTj%2Fn11CSRmHYwxkdwZKdpLL%2B6HPSwhpzO%2F%2FIQH9VpnNCFTD%2FmmJdu46XaBwIbud9ZtyB9SlMthwISB74H35Hv3MG67zVfQqW9zLRzu2U0E6IxKScAO32UpeJCDNcIGd1muwMMXmIO9leRHiyEZCjJPCuwv7pwFFpTPdvKKCLbUAcLjGjWoZESgzhZbxO7B%2BFSfOaaJ7L7y9DntFPXFOf3H3%2F%2B143ObtcIkv4k06SEW66Zxt1UeEpFJYHyRPYttvJZtmjRcMxelsUW4KfgVqivRD7zj8jtfo1YS5tmbbQ0MzzpZl83r5U6Zt444L8SBYG4HmFdTvU27QNnEk2JYYXGKH4T3HOq%2FjROkyAbyrB6YymmeaxTnjddgKRXOb64xeaNAgKCfdc3zW3xyJblxoTJ51byUfe8eIlpCqB6CI7kcczsMRdQYQb2FJwY49n5yCzWrVr9e7jhz1r0x7Wo0dUKL78OVW9D9q%2FSgRhIl9I7XIfSdeYDg08NpirPOQK1dUviQ1bCrOT%2Bi%2B8nUnbMycgHs4Ec80q0pnDWMWZkIMGTvj3TMwEvBjjHEdtwHtXBK8Ono3FBF5%2FWKbyz2CbAjMNqfoL8GOqUBEyPSNqiNFAu8%2Fuu78i8%2BnSxWgAoihBop0sU3LRPvy8%2Bkukn6jL1rslUwaZheFnCZjuY5s8UBsPGmZjqzFeHbWO9oSHDPzwikWzS7iPQivCStjT30wYxsNjZZWGrtKrM0YaJr2vlrGZaBtzuHINaQpsk2EvAN83d1EvgftIIFixB7etniVwCf04ECaBWerhk4CRu7JaAw6LxJmcgS1WTNQizDZ3w%2B&X-Amz-Signature=34e56f2c744f112fedc35fb825a76ee5e2d5546adf91b234de4197e9dd253852&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
