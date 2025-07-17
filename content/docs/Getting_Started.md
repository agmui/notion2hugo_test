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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPXNV22%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCwc99Fy556rYRq7DLYdUoGpMdn9pFi7RaAQaTTyJiuIgIgcZrnL%2B0jvpNYR7gOkvSuFEB%2BekhQL6Au35xLABVDeSYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKu19wHJSzObTK3JCrcA%2F2mwRDiCqjnKutqDmxvVGZFx8hyJ46yRQhTODCmvJIbkWUrf7JFi1mP6KWzc2l654CdVb35cjs8bBTrEc5VNv8R9QUyRF7vqpTPVyiCE3PA3oSOq2veGFlR%2FBQUXiyCfdRKRz5%2BgnFbvmio0NZKsUr5DK2JAN1%2FZYQAtcO97Xq2k0brJTxZ5m8WUTv2je%2BL82QQlf%2BepQ2oAvL7cS0GtC6ppH8hcCSXCO9mIKwu9mNsqp3bsRzkO8wnxHpYxLu4fPm5CWbucf9kx7Rm4dO4c1RXgU554c8epcAD%2FBiTAN95DGrAKHC16byOoAVBqz20BI90VBTQNJTtbSSTv9rz1IGQZIY0kTaQBZHpumYSFWxHnGGcTUxfA6DRCz0NKaz0N89tamGU%2F7wVyKa%2FkhY%2BxEtY65AoalWQRXmtH1Hkbk8a3UI7k5cCVH2sGg2X0MYBJBG6AKDs4KpWsUoAXlRgmiWykpDGRItnFBpm%2FRrzhL%2BenjuVFOvYPeJDP1TJJwzuQMNzi8L%2FY4VYwUGG%2F6J3pkLmQUA5XvQCWaFG8JC4alwth0S%2Bc%2F0Cwc5hwynuMNkQ9JXYg75XgMnw7p3CP4QAdBwYUkP6q4mY1n%2FvdJRjTTQpHK3THWkrEC%2BR%2BjOWMOOR48MGOqUB%2B56Gwk31BUvJtD01V%2BPR4WEypl7PabfT%2FdKfvib0yDfxiFXXDeoxM%2BKQn3pSOHpz%2FOKM6z4JQXOkkDTHvPoRbsEfVUou6m7X5wMSBbqnk0LaF%2BQFkY6FWkuyvzn5SJmoMMETvX11fXPwamFdNXtp9GbTCR2UiU7lectpPz3zD58MGpy20h1O2dT%2FTu8VjOhl58vLjjvz3ygKTN8%2FDY7b%2FykhEnhI&X-Amz-Signature=2a7fa408f8d0cd52b97e6445c7c72adce4eec3ade1cfff338f79b97de1a64965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPXNV22%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCwc99Fy556rYRq7DLYdUoGpMdn9pFi7RaAQaTTyJiuIgIgcZrnL%2B0jvpNYR7gOkvSuFEB%2BekhQL6Au35xLABVDeSYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKu19wHJSzObTK3JCrcA%2F2mwRDiCqjnKutqDmxvVGZFx8hyJ46yRQhTODCmvJIbkWUrf7JFi1mP6KWzc2l654CdVb35cjs8bBTrEc5VNv8R9QUyRF7vqpTPVyiCE3PA3oSOq2veGFlR%2FBQUXiyCfdRKRz5%2BgnFbvmio0NZKsUr5DK2JAN1%2FZYQAtcO97Xq2k0brJTxZ5m8WUTv2je%2BL82QQlf%2BepQ2oAvL7cS0GtC6ppH8hcCSXCO9mIKwu9mNsqp3bsRzkO8wnxHpYxLu4fPm5CWbucf9kx7Rm4dO4c1RXgU554c8epcAD%2FBiTAN95DGrAKHC16byOoAVBqz20BI90VBTQNJTtbSSTv9rz1IGQZIY0kTaQBZHpumYSFWxHnGGcTUxfA6DRCz0NKaz0N89tamGU%2F7wVyKa%2FkhY%2BxEtY65AoalWQRXmtH1Hkbk8a3UI7k5cCVH2sGg2X0MYBJBG6AKDs4KpWsUoAXlRgmiWykpDGRItnFBpm%2FRrzhL%2BenjuVFOvYPeJDP1TJJwzuQMNzi8L%2FY4VYwUGG%2F6J3pkLmQUA5XvQCWaFG8JC4alwth0S%2Bc%2F0Cwc5hwynuMNkQ9JXYg75XgMnw7p3CP4QAdBwYUkP6q4mY1n%2FvdJRjTTQpHK3THWkrEC%2BR%2BjOWMOOR48MGOqUB%2B56Gwk31BUvJtD01V%2BPR4WEypl7PabfT%2FdKfvib0yDfxiFXXDeoxM%2BKQn3pSOHpz%2FOKM6z4JQXOkkDTHvPoRbsEfVUou6m7X5wMSBbqnk0LaF%2BQFkY6FWkuyvzn5SJmoMMETvX11fXPwamFdNXtp9GbTCR2UiU7lectpPz3zD58MGpy20h1O2dT%2FTu8VjOhl58vLjjvz3ygKTN8%2FDY7b%2FykhEnhI&X-Amz-Signature=0d71f1d1c43a1967599dcdc44ea08a7a342a3f42f2751c11f136390fad293ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPXNV22%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCwc99Fy556rYRq7DLYdUoGpMdn9pFi7RaAQaTTyJiuIgIgcZrnL%2B0jvpNYR7gOkvSuFEB%2BekhQL6Au35xLABVDeSYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKu19wHJSzObTK3JCrcA%2F2mwRDiCqjnKutqDmxvVGZFx8hyJ46yRQhTODCmvJIbkWUrf7JFi1mP6KWzc2l654CdVb35cjs8bBTrEc5VNv8R9QUyRF7vqpTPVyiCE3PA3oSOq2veGFlR%2FBQUXiyCfdRKRz5%2BgnFbvmio0NZKsUr5DK2JAN1%2FZYQAtcO97Xq2k0brJTxZ5m8WUTv2je%2BL82QQlf%2BepQ2oAvL7cS0GtC6ppH8hcCSXCO9mIKwu9mNsqp3bsRzkO8wnxHpYxLu4fPm5CWbucf9kx7Rm4dO4c1RXgU554c8epcAD%2FBiTAN95DGrAKHC16byOoAVBqz20BI90VBTQNJTtbSSTv9rz1IGQZIY0kTaQBZHpumYSFWxHnGGcTUxfA6DRCz0NKaz0N89tamGU%2F7wVyKa%2FkhY%2BxEtY65AoalWQRXmtH1Hkbk8a3UI7k5cCVH2sGg2X0MYBJBG6AKDs4KpWsUoAXlRgmiWykpDGRItnFBpm%2FRrzhL%2BenjuVFOvYPeJDP1TJJwzuQMNzi8L%2FY4VYwUGG%2F6J3pkLmQUA5XvQCWaFG8JC4alwth0S%2Bc%2F0Cwc5hwynuMNkQ9JXYg75XgMnw7p3CP4QAdBwYUkP6q4mY1n%2FvdJRjTTQpHK3THWkrEC%2BR%2BjOWMOOR48MGOqUB%2B56Gwk31BUvJtD01V%2BPR4WEypl7PabfT%2FdKfvib0yDfxiFXXDeoxM%2BKQn3pSOHpz%2FOKM6z4JQXOkkDTHvPoRbsEfVUou6m7X5wMSBbqnk0LaF%2BQFkY6FWkuyvzn5SJmoMMETvX11fXPwamFdNXtp9GbTCR2UiU7lectpPz3zD58MGpy20h1O2dT%2FTu8VjOhl58vLjjvz3ygKTN8%2FDY7b%2FykhEnhI&X-Amz-Signature=d97ea687b2b1290eafbddb820babd9fce3d0387aac52ee8ae0896a411f7c3e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVAE6Q3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAtExpJMakXyVIEOIDGD8KCleNY8OjUdz6QMfByYPnavAiAlnGt%2Fj6R08sx3vLOZw%2F4YhzOh1nfW3jvvyzH%2BKLtTKir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMuJTFfUcQp52QVlQ0KtwDosAL95CEsXoVusJRo9YBikafBfISnmbiloNqe2BlKfyWpu10MYae22SDgyBzXN6HlAxPy4bx65mz9kIkt9%2BciNRdLWQLgo08%2FXK3sqhZ%2F8lkaR8HU7pGroGIP%2Fd%2FZFCHgd642HG2gchHH4PUy4XOL46kLyWVLV90DsE0DeoVaA5GNX%2FXP1TVVpWnolICZLqcGkwAcgvAZb8GfFu%2BtkZICEZpAF0L0IM4jaEVG86FnQk3jdEHrReOnE58OcUHvmLR5YhdoKarN%2FbFqmm1LpHlyTtxF2kTVtgoKwRi8J%2FbV1uLD8xobytD3OoC2i1DYGMoxhtHcd8AeM1hVDvbOZU%2BMtuFR4PRy7QhlbcJaqM9hf7jWpccyfNOgWL40nChjfF1TjoFggl%2F0hyRgr0zgN3jlLH9IKMB4vFXST0quegCPI9gPSDAV22ZIBHznpcuBKLxxzFQU6Wk4X8p0ayrxUIXDiFGhFZNPn%2BFq2ujO91GYpzHnV4X%2Bi1%2FRo9YVGMSk1E%2FIrtKn7mtNNGjtAvzSYi5dIcgSxG0u3yL7cjHkk6ixWId84t8titzINlSmiL8PUbAj0tNgM4mlVbJ7j2bC3Cvh8tLVjCHGlMKK87IkdAHCo77%2BUhqDbH0IyBLsyMwopLjwwY6pgFUNd8HpLuPkvXu0h9rmI6APgJjAuKHEOnpZuJMOBRg029SXOGx8FsxmL8ka8ULOi8rHRsDGPhF98UQhlNb5ryKBKax6Ksi4ncPpButN12CiRFKrkFBzBXxbA4d5UliE7YakbLMk2QB5EKC%2Fv5K0zvSxX4SFQ2LFyhrocMK4h%2FqfBujOYbWOafB5efuZqo2TxJivfto%2F7%2F%2Bo2GqWwmAGhVVShVbnTrj&X-Amz-Signature=9fe1e9c0a50f50592ac1cccb7305ea8a5e2ead2ab39c51cf4f5fe329d209ed03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDTVD4G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGPx4o6rOMGK3jgniv83tjXH%2FTHIxheFABEqhvqlc1DQAiEApZ1ANrzq0Et1gAht6q8zc9OjUD0ytOaONt0OLYfmvmUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDC%2Fyc%2FAxsB2U9E8INircA2THpCoHAOAZ%2BuOmECpQ52XfhvbZznMYv1Nx4Q9KjX3EqtA2NzrsOq99KG0i0z6BwXiMpuf4OjoCCe80LoZgo0k7VLjI0St8Vyx44%2BMesGUjU3XUuE3OL9XNWjWcMuDJ60JSVkp1Y33nktSFbiWUSjtHpkj%2BTo%2BRmsiCsu0IbDzEaaxO3%2BoyqGf3%2FFvwY1yr%2FeKLxh0R0%2Bt12%2BDRq2%2Fo9KyJtbh8UpIDrd%2Fq70cmtsWVXAjC1BML6B2wfNM1DJRoycQvwJBW7gwkRHXw0o3b3Z2OJF97rq0Y6yf2PJ6nfC5J8NEKfptz1cDADEM3BjWZbndzZT3g9fOCeYGSPRW8gzB3%2Fnpx%2Bxb%2F3tfp276I%2BURiYRE4j%2Bg2NqM4zzywZQEJQUM8FMWfV6pgxwOSyyDll8zDJe4YeLrW5qbkE7%2F1SAraTbl88EqOofKqrScPzChzm9bzHb8NuVbForTf2rmyFo8225wAsR4lksyFpS%2BaGyAyuq%2BiIgj%2BoUq2Rvq4M3Undl13PZj3ho1GcuP5zpJbJ8nM1pUGOGJQRBPfC3J%2BEuN1cPxDd6%2FbjH3nlPbcDdzoBRUe6ZjMjWgiJ4%2B5YBwlXm2pfeOg8ANJMkI0llS0b%2Fm7Qs%2FZysn54icT02gaMMqS48MGOqUBuN%2F7og1VoGyRoUZb5Y9ae3Mi2a9%2B4ywOhFsUOJwSZ8zKpqLwTTSpesy4wKgRD8wkQ3yB9KSavfzAK8WGsSOyW02zEw9yUaNB8XOJadZlnlIIaNgWjmc%2Bjj6LxKRV%2FLNmZkRtO3GiORbCMURMSax5h4odjyvHbbQgROapP8la2MlorL2XtZpq5ma1AX1iMhASjhhuw9R68YpjE1%2BudTm6ZFY3t2Hd&X-Amz-Signature=0681cabb99b8e2d2e0d75d292312ace4c1fe080c26cca170352f160139ccc14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPXNV22%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCwc99Fy556rYRq7DLYdUoGpMdn9pFi7RaAQaTTyJiuIgIgcZrnL%2B0jvpNYR7gOkvSuFEB%2BekhQL6Au35xLABVDeSYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKu19wHJSzObTK3JCrcA%2F2mwRDiCqjnKutqDmxvVGZFx8hyJ46yRQhTODCmvJIbkWUrf7JFi1mP6KWzc2l654CdVb35cjs8bBTrEc5VNv8R9QUyRF7vqpTPVyiCE3PA3oSOq2veGFlR%2FBQUXiyCfdRKRz5%2BgnFbvmio0NZKsUr5DK2JAN1%2FZYQAtcO97Xq2k0brJTxZ5m8WUTv2je%2BL82QQlf%2BepQ2oAvL7cS0GtC6ppH8hcCSXCO9mIKwu9mNsqp3bsRzkO8wnxHpYxLu4fPm5CWbucf9kx7Rm4dO4c1RXgU554c8epcAD%2FBiTAN95DGrAKHC16byOoAVBqz20BI90VBTQNJTtbSSTv9rz1IGQZIY0kTaQBZHpumYSFWxHnGGcTUxfA6DRCz0NKaz0N89tamGU%2F7wVyKa%2FkhY%2BxEtY65AoalWQRXmtH1Hkbk8a3UI7k5cCVH2sGg2X0MYBJBG6AKDs4KpWsUoAXlRgmiWykpDGRItnFBpm%2FRrzhL%2BenjuVFOvYPeJDP1TJJwzuQMNzi8L%2FY4VYwUGG%2F6J3pkLmQUA5XvQCWaFG8JC4alwth0S%2Bc%2F0Cwc5hwynuMNkQ9JXYg75XgMnw7p3CP4QAdBwYUkP6q4mY1n%2FvdJRjTTQpHK3THWkrEC%2BR%2BjOWMOOR48MGOqUB%2B56Gwk31BUvJtD01V%2BPR4WEypl7PabfT%2FdKfvib0yDfxiFXXDeoxM%2BKQn3pSOHpz%2FOKM6z4JQXOkkDTHvPoRbsEfVUou6m7X5wMSBbqnk0LaF%2BQFkY6FWkuyvzn5SJmoMMETvX11fXPwamFdNXtp9GbTCR2UiU7lectpPz3zD58MGpy20h1O2dT%2FTu8VjOhl58vLjjvz3ygKTN8%2FDY7b%2FykhEnhI&X-Amz-Signature=fe0e7e6d43f16cd57612ca7567ca91db5bab0aa1170e95f6061f4d1038e2dc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
