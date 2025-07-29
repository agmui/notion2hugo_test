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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQMBEDX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrtWi%2BbPMgY2xnz56qquuEoH07dDZ%2FOoU1f7maml9vjAiBNgBSSZTDxs17TpI0p6UQWVEY0KLe9GpuAo5lsILwizyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwWq9q1mONeIAs5sKtwDZj4Lb0uP3SV%2BdzG%2B9sl1Ws5GNHmGSH2h7BRlGChazp%2BSe%2BDf4fsBlEFWx%2Bw2kq8tsQGWolGR3vdFM2Z61NxdB8YpkuXGE4lEBfQBRTMarNVdqauzfWk4%2BZH7hk6AK59QESuDKbkLbdmDrAWbf%2FCLgdc0yTfvCYjtd1qT3%2B%2BTWFcvoWXBeLDYYeKCvBJVn6dp7s3171GagjvzmvWuSOaN1dHW7G638%2F8Llbl00Q4l5JJSU7ZAYoO7JutqcdF7miZF5jm2UaWPcD3gHaVhTeYqFYNJ%2FPWX7ZZx5TtUybI%2FviIw6V65L%2BqesmWvR%2FSFqbNPgjE7rd9rz2fyjs8%2BfrfmsuynkBhEeHKzoq9Iv8AubSGK2CKVPuN2p3X5E6vvYA8SpDfFBTgtEeQH%2BUyybGckYtPrrVwx1G41EiknCntCXJh1wLqeFIJPyTdOFK7p5H7M7k%2FcHvhjdtICnMtbsCatA3J6xnMcXOKcvdUHk%2F3TaU9Um%2BTcmwEpFgpRr%2BaGWnLo1%2BDVcnesLYfF4NxlvG8WzEeiwRJPQ%2FBdhOtgWqZFkq4ilOzc%2BzM0J12IvQ%2ByAiZ2BTduoT11Zl4yQ6mSB1aajEvwT7JhvGxs93MAI8MoFxg23iMSzHnZdhAWEM4w%2Fq2kxAY6pgHGnDFvHJ0GQo68r5fh%2FJvr0ksDj1RND6CVDqmAh1OKjEi%2FF1lACU9R6wQZqlBYhmYWwi2U124yjrBOe52ttK2l3m7GREVv2HHabqRFchjz5YJDfp%2F2G0gjP8KZIrHGxKq8MpkXI%2B%2FSXjExrNZdgqQVie8kZ6nIBjQxdwnmakto8E6qU1cwSwjlS6tA5TR3NmHPYWp69ddbzfZdb6cyCssGQBp95w0G&X-Amz-Signature=282deb63b34ea85bd443a380ad8a2a1a97834a20a298a1707b73586eb5c0dac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQMBEDX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrtWi%2BbPMgY2xnz56qquuEoH07dDZ%2FOoU1f7maml9vjAiBNgBSSZTDxs17TpI0p6UQWVEY0KLe9GpuAo5lsILwizyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwWq9q1mONeIAs5sKtwDZj4Lb0uP3SV%2BdzG%2B9sl1Ws5GNHmGSH2h7BRlGChazp%2BSe%2BDf4fsBlEFWx%2Bw2kq8tsQGWolGR3vdFM2Z61NxdB8YpkuXGE4lEBfQBRTMarNVdqauzfWk4%2BZH7hk6AK59QESuDKbkLbdmDrAWbf%2FCLgdc0yTfvCYjtd1qT3%2B%2BTWFcvoWXBeLDYYeKCvBJVn6dp7s3171GagjvzmvWuSOaN1dHW7G638%2F8Llbl00Q4l5JJSU7ZAYoO7JutqcdF7miZF5jm2UaWPcD3gHaVhTeYqFYNJ%2FPWX7ZZx5TtUybI%2FviIw6V65L%2BqesmWvR%2FSFqbNPgjE7rd9rz2fyjs8%2BfrfmsuynkBhEeHKzoq9Iv8AubSGK2CKVPuN2p3X5E6vvYA8SpDfFBTgtEeQH%2BUyybGckYtPrrVwx1G41EiknCntCXJh1wLqeFIJPyTdOFK7p5H7M7k%2FcHvhjdtICnMtbsCatA3J6xnMcXOKcvdUHk%2F3TaU9Um%2BTcmwEpFgpRr%2BaGWnLo1%2BDVcnesLYfF4NxlvG8WzEeiwRJPQ%2FBdhOtgWqZFkq4ilOzc%2BzM0J12IvQ%2ByAiZ2BTduoT11Zl4yQ6mSB1aajEvwT7JhvGxs93MAI8MoFxg23iMSzHnZdhAWEM4w%2Fq2kxAY6pgHGnDFvHJ0GQo68r5fh%2FJvr0ksDj1RND6CVDqmAh1OKjEi%2FF1lACU9R6wQZqlBYhmYWwi2U124yjrBOe52ttK2l3m7GREVv2HHabqRFchjz5YJDfp%2F2G0gjP8KZIrHGxKq8MpkXI%2B%2FSXjExrNZdgqQVie8kZ6nIBjQxdwnmakto8E6qU1cwSwjlS6tA5TR3NmHPYWp69ddbzfZdb6cyCssGQBp95w0G&X-Amz-Signature=517c6ed42088af5d6805eb1fe66fa8875e97cf7bd9b7aec14c6a5fb5677a3557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQMBEDX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrtWi%2BbPMgY2xnz56qquuEoH07dDZ%2FOoU1f7maml9vjAiBNgBSSZTDxs17TpI0p6UQWVEY0KLe9GpuAo5lsILwizyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwWq9q1mONeIAs5sKtwDZj4Lb0uP3SV%2BdzG%2B9sl1Ws5GNHmGSH2h7BRlGChazp%2BSe%2BDf4fsBlEFWx%2Bw2kq8tsQGWolGR3vdFM2Z61NxdB8YpkuXGE4lEBfQBRTMarNVdqauzfWk4%2BZH7hk6AK59QESuDKbkLbdmDrAWbf%2FCLgdc0yTfvCYjtd1qT3%2B%2BTWFcvoWXBeLDYYeKCvBJVn6dp7s3171GagjvzmvWuSOaN1dHW7G638%2F8Llbl00Q4l5JJSU7ZAYoO7JutqcdF7miZF5jm2UaWPcD3gHaVhTeYqFYNJ%2FPWX7ZZx5TtUybI%2FviIw6V65L%2BqesmWvR%2FSFqbNPgjE7rd9rz2fyjs8%2BfrfmsuynkBhEeHKzoq9Iv8AubSGK2CKVPuN2p3X5E6vvYA8SpDfFBTgtEeQH%2BUyybGckYtPrrVwx1G41EiknCntCXJh1wLqeFIJPyTdOFK7p5H7M7k%2FcHvhjdtICnMtbsCatA3J6xnMcXOKcvdUHk%2F3TaU9Um%2BTcmwEpFgpRr%2BaGWnLo1%2BDVcnesLYfF4NxlvG8WzEeiwRJPQ%2FBdhOtgWqZFkq4ilOzc%2BzM0J12IvQ%2ByAiZ2BTduoT11Zl4yQ6mSB1aajEvwT7JhvGxs93MAI8MoFxg23iMSzHnZdhAWEM4w%2Fq2kxAY6pgHGnDFvHJ0GQo68r5fh%2FJvr0ksDj1RND6CVDqmAh1OKjEi%2FF1lACU9R6wQZqlBYhmYWwi2U124yjrBOe52ttK2l3m7GREVv2HHabqRFchjz5YJDfp%2F2G0gjP8KZIrHGxKq8MpkXI%2B%2FSXjExrNZdgqQVie8kZ6nIBjQxdwnmakto8E6qU1cwSwjlS6tA5TR3NmHPYWp69ddbzfZdb6cyCssGQBp95w0G&X-Amz-Signature=13057e49b6d50ea108347faf61362012de33d8423d9a34f8cfe20244c41b20b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMNJWQEO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBydK7En0J5ulj2G3yW6eGIFircUl%2B2JoA%2F9G8ssgMEjAiEAxJ4tC8lC1yxJqQuTpH36%2Ft9ch1YA5IGDTYGiGeJd6uUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHjPNxkSu9t2YEyWCrcA4yc7wTN9OCPxV56m8eOhUfo1CJ2u%2B4fZEXz96fkM%2F7uyUosKdMJ4rQ7nQ1C5klQjWCJBfr%2FcIC%2BIsHIjTJZq%2BZrPuD8XQDaEUKSAPs5ZHXYKr8iPiDT83A%2BordlCkVR1neVF0AmwOvhKpTaJOMjVihL2DMLHNl1yQpoLZJbKu2e9%2BS3Qvznx5XgWC%2Bja5XgyjdrTj3L1nriKKQf16s%2F%2Blatf4zKxEXmfpFS3u4OAvDXHmhIKxRa4kDiOIUUnlWBZ6JgnNakfaS%2FPinmD%2FTcoD8u6NopeEIzfPFHD8ASQVxxn2vR3ZlM9rjSTnBis7jRCQ4WUcu8cg7IgXfaaYORWHlfvPEq9vc%2FBbsnmxJXOamw133eIBg%2FP6vTaWkZPb7Mi5868LiRAPYhKlo%2F3TWF%2B919modgAmJVXWQzLPtJy85%2B6gPv7%2BOHeQCi0LvgD9qQi23cEruMO%2F2bOg640LluXJQx0E2URsXRdu9vqa2c2UWe0sN9KC7c1wU5shxM0n4nSdgGNSKpSgBObfqdAdqv6swELPUogIdFKXCBn8PxYO3qvm%2FNov4ONV3QufStSsnXYM68X%2BSbMCC28GkBTlOOTtHwe7OzSmCkF62gkDP50ystJb5wtsb79b9574RpMOitpMQGOqUBSvT1ZlUJzIuGEp50zjHIoGzt9r6qe9WYEPeG9iaAZP7kLXsNPD6bemfsEp6i0NejoUqmpIxEMkVtGdtNsuw3vKfDIZsYrS9rGYrhpqk0R5EjdZ5PFtT1HfzF09qJbKH3XGvn3BKsz2HEaZlCHGaCzQH5Zexa06r8kApWO%2BlK9qc64xVE0beP0of87lU%2F%2FpPt%2Bu6soWUsgZr3931L1C6hY7ufOJmE&X-Amz-Signature=42c2676440bff2d17c21073b2b78f22040c76fcdb842c43cba009ed29e54aff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWQLLXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH47%2F%2FCw1FWHgIljlLz9ky9hG23j0BnyC2L%2Bv76RgEzMAiEAgJi4pRqO5Zpolh1HDwQl7zu7E%2FbJzdTf2FHTwwuOF28qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhJ84RP%2BIejr%2B5lPCrcA%2BlUawb9vqzmJana8YWVaIKuMghwGC59%2FVOqjfz01xjYSiOc2JpnL7RuZklXRTzgXEqAaS%2FSvTTKOrVd8%2Bp0ZwgXe4b93odieigVlUEH%2BkrUJ2c%2Ba65DGlKVrkkQXsCq9tRPypLs2LPCLGDZRKKGEdc4AQRxI%2BuK1bgtDm5YJ0TUM3D2ZnEtjkOLYESQkenB0BoZdH8upjtZxMeRyLUML%2BSZacjUUtM%2B5g3xNCYLM95wQL38zG3Cue2tqbNRBGJi6fi9hzOn2nE%2BeYWGfARCuKM%2BNJwqcg3yDKAaaUH6SPIGgbvOo0ty9XIaDBWq43BpLN8CLAUz2UkrlfBMQUQ%2FhD3w%2FMgYfugPSAz2A3cdOt%2BkEWMdUpbLQWvbCfp%2F0pyklsLtlQFR9mTTeOzEBXNf13w1H1xl1tlUIeWnBQHTUyMa9m8vc7Wz%2BWxwx0NR8cAF4iP3VPh7Zri9wIqPlJOkgDatp1mSWLkEG%2FuDVGXnZyMigwbDhpf0khakxwNFWdGPnyV1blrXy%2FlA8v6HwkdIOnADAXv1hpj8Xyk6yZv46Gl71R9CNA%2BxG%2FJQeNO39VqhnkP%2FYpZuHMkKa9T1lehQvN%2FNJzRFFmymwesanOlp1lWCmFNa1gIG3Z1ZlUYEMOetpMQGOqUBnwZu%2BuND9LfAC9xyJ10lr981H87yGIWNC8B0A4VctnvkreUpcQIrEO%2Fpn1Q6nJocEjBjiXj8YrOuot4xtOjFKjP2gkjvAy6nc%2BXgThzX43gjUvN8oqmqSb9WQznLxifNvRYKJR5EihPRN1igJ8a1phn5TrM8oD%2BqLl9A%2BdhND8%2BorE%2FolUdyE6ZM5PhM3%2FPBmbttieQQiv7N%2BNBdARdX37hk8x83&X-Amz-Signature=46f22215e13125eb6302e05882a41a20556d9783bdcf5dd6d2c87d97e4f91e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQMBEDX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrtWi%2BbPMgY2xnz56qquuEoH07dDZ%2FOoU1f7maml9vjAiBNgBSSZTDxs17TpI0p6UQWVEY0KLe9GpuAo5lsILwizyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwWq9q1mONeIAs5sKtwDZj4Lb0uP3SV%2BdzG%2B9sl1Ws5GNHmGSH2h7BRlGChazp%2BSe%2BDf4fsBlEFWx%2Bw2kq8tsQGWolGR3vdFM2Z61NxdB8YpkuXGE4lEBfQBRTMarNVdqauzfWk4%2BZH7hk6AK59QESuDKbkLbdmDrAWbf%2FCLgdc0yTfvCYjtd1qT3%2B%2BTWFcvoWXBeLDYYeKCvBJVn6dp7s3171GagjvzmvWuSOaN1dHW7G638%2F8Llbl00Q4l5JJSU7ZAYoO7JutqcdF7miZF5jm2UaWPcD3gHaVhTeYqFYNJ%2FPWX7ZZx5TtUybI%2FviIw6V65L%2BqesmWvR%2FSFqbNPgjE7rd9rz2fyjs8%2BfrfmsuynkBhEeHKzoq9Iv8AubSGK2CKVPuN2p3X5E6vvYA8SpDfFBTgtEeQH%2BUyybGckYtPrrVwx1G41EiknCntCXJh1wLqeFIJPyTdOFK7p5H7M7k%2FcHvhjdtICnMtbsCatA3J6xnMcXOKcvdUHk%2F3TaU9Um%2BTcmwEpFgpRr%2BaGWnLo1%2BDVcnesLYfF4NxlvG8WzEeiwRJPQ%2FBdhOtgWqZFkq4ilOzc%2BzM0J12IvQ%2ByAiZ2BTduoT11Zl4yQ6mSB1aajEvwT7JhvGxs93MAI8MoFxg23iMSzHnZdhAWEM4w%2Fq2kxAY6pgHGnDFvHJ0GQo68r5fh%2FJvr0ksDj1RND6CVDqmAh1OKjEi%2FF1lACU9R6wQZqlBYhmYWwi2U124yjrBOe52ttK2l3m7GREVv2HHabqRFchjz5YJDfp%2F2G0gjP8KZIrHGxKq8MpkXI%2B%2FSXjExrNZdgqQVie8kZ6nIBjQxdwnmakto8E6qU1cwSwjlS6tA5TR3NmHPYWp69ddbzfZdb6cyCssGQBp95w0G&X-Amz-Signature=28dfda4f3595e1889b166ee74ac6cd9d8135df9ad7d2f59f868b6f6e72a46429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
