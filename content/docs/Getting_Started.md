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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKBNF5V%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6LXOXFcqg%2F%2BRKeie9uG8ZDAb4wNgu4zkDe0EW9QCPZAiEAubligxUGs8%2F1XFNjXQYI5EWXU6X8DELme3YCX9s4h1gq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIRoyH1JEBN3a%2BJpDyrcA8iSd%2FCCV0j%2BRcMW7rEs2CZbwel1P3ZEVh7sLMFsaKWnzj1RzhroUX4syq6%2F8keFhAHaisGuvNdWASAcyIHKzoLOITHX7GKqogVJ9IGkZN7KJK3NUNzjYSk0CYQnAOhcjdenPACNM6Jy5YfDy77qR%2BHxrOj6viyMCha8%2BRsecpgqINX%2Bjp40iVEI2FDsZEM%2F51mWOoJdrgdtfXw0kGvh4D4Uo6zSXeF6hyCn%2FGGT5%2BZGP1Lvksf6TgX7nmB0mOAZWgn%2FxfS52ecYE%2FtlUHsZz0A5D63L3IBc7iziDG%2Fw9pq6LwOBa6QKxZGVLtezI2V4VegJXj4JrYxi4xx2SbRMFyBuKqBAhb3dZYmAb2FcSkK9aFX9JR6%2BaOQqCfGIQi1cHYwQaruTF7Xr68YiZx5RGSe%2FoF5BHfsqlYeT%2B2WJEN3Sfckw35PW4zqcLtpgzVaGxUHrOdoanSG8%2BkrNYjJlCk0vlOz1CAGg%2FlXFotTi2OKt424QFkjIrGHsv0XxKsZPtOTSNoTrM26B8jDiiB6Hsk67g8zZKRCQH24%2BaTSIH1bjCi6aHtStaQX9b5Nv0z9tHU7BGo7xt6JvV6YMBLRR3XKJbHr2weX47nOZqUOySyv0%2ByRe7MZsMGmCBp%2FFMPLj4sAGOqUBQRVirGdVq%2BJVCLmWJW4aV6tMRHD2Jnt35C0yT5lVLSifRJCDl0SyIy7EfkUDWWJxbfZcOFZdlySQ1%2Fb3tWaR3a4VEWRQwUbtc0WkW7HKMX9OHY%2FLpFFi3El9cs8oDIZmjt4qJ2peoRkOTHbGiR5g9LWOKvrNriJqu83QaASpxM%2B2JY%2FFN26c6sdJBU9dJb7OPE2LGwuLlGfElDToos2veQwp%2BHjX&X-Amz-Signature=04b87a6b6b7e512315ca750eea3d14f5fca622fc7a1e01471927d6bab5475c76&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKBNF5V%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6LXOXFcqg%2F%2BRKeie9uG8ZDAb4wNgu4zkDe0EW9QCPZAiEAubligxUGs8%2F1XFNjXQYI5EWXU6X8DELme3YCX9s4h1gq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIRoyH1JEBN3a%2BJpDyrcA8iSd%2FCCV0j%2BRcMW7rEs2CZbwel1P3ZEVh7sLMFsaKWnzj1RzhroUX4syq6%2F8keFhAHaisGuvNdWASAcyIHKzoLOITHX7GKqogVJ9IGkZN7KJK3NUNzjYSk0CYQnAOhcjdenPACNM6Jy5YfDy77qR%2BHxrOj6viyMCha8%2BRsecpgqINX%2Bjp40iVEI2FDsZEM%2F51mWOoJdrgdtfXw0kGvh4D4Uo6zSXeF6hyCn%2FGGT5%2BZGP1Lvksf6TgX7nmB0mOAZWgn%2FxfS52ecYE%2FtlUHsZz0A5D63L3IBc7iziDG%2Fw9pq6LwOBa6QKxZGVLtezI2V4VegJXj4JrYxi4xx2SbRMFyBuKqBAhb3dZYmAb2FcSkK9aFX9JR6%2BaOQqCfGIQi1cHYwQaruTF7Xr68YiZx5RGSe%2FoF5BHfsqlYeT%2B2WJEN3Sfckw35PW4zqcLtpgzVaGxUHrOdoanSG8%2BkrNYjJlCk0vlOz1CAGg%2FlXFotTi2OKt424QFkjIrGHsv0XxKsZPtOTSNoTrM26B8jDiiB6Hsk67g8zZKRCQH24%2BaTSIH1bjCi6aHtStaQX9b5Nv0z9tHU7BGo7xt6JvV6YMBLRR3XKJbHr2weX47nOZqUOySyv0%2ByRe7MZsMGmCBp%2FFMPLj4sAGOqUBQRVirGdVq%2BJVCLmWJW4aV6tMRHD2Jnt35C0yT5lVLSifRJCDl0SyIy7EfkUDWWJxbfZcOFZdlySQ1%2Fb3tWaR3a4VEWRQwUbtc0WkW7HKMX9OHY%2FLpFFi3El9cs8oDIZmjt4qJ2peoRkOTHbGiR5g9LWOKvrNriJqu83QaASpxM%2B2JY%2FFN26c6sdJBU9dJb7OPE2LGwuLlGfElDToos2veQwp%2BHjX&X-Amz-Signature=c0bfcc379300cd44ada0dcf7920ffe632679ddda403531c95573ae66b9b5d242&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKBNF5V%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6LXOXFcqg%2F%2BRKeie9uG8ZDAb4wNgu4zkDe0EW9QCPZAiEAubligxUGs8%2F1XFNjXQYI5EWXU6X8DELme3YCX9s4h1gq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIRoyH1JEBN3a%2BJpDyrcA8iSd%2FCCV0j%2BRcMW7rEs2CZbwel1P3ZEVh7sLMFsaKWnzj1RzhroUX4syq6%2F8keFhAHaisGuvNdWASAcyIHKzoLOITHX7GKqogVJ9IGkZN7KJK3NUNzjYSk0CYQnAOhcjdenPACNM6Jy5YfDy77qR%2BHxrOj6viyMCha8%2BRsecpgqINX%2Bjp40iVEI2FDsZEM%2F51mWOoJdrgdtfXw0kGvh4D4Uo6zSXeF6hyCn%2FGGT5%2BZGP1Lvksf6TgX7nmB0mOAZWgn%2FxfS52ecYE%2FtlUHsZz0A5D63L3IBc7iziDG%2Fw9pq6LwOBa6QKxZGVLtezI2V4VegJXj4JrYxi4xx2SbRMFyBuKqBAhb3dZYmAb2FcSkK9aFX9JR6%2BaOQqCfGIQi1cHYwQaruTF7Xr68YiZx5RGSe%2FoF5BHfsqlYeT%2B2WJEN3Sfckw35PW4zqcLtpgzVaGxUHrOdoanSG8%2BkrNYjJlCk0vlOz1CAGg%2FlXFotTi2OKt424QFkjIrGHsv0XxKsZPtOTSNoTrM26B8jDiiB6Hsk67g8zZKRCQH24%2BaTSIH1bjCi6aHtStaQX9b5Nv0z9tHU7BGo7xt6JvV6YMBLRR3XKJbHr2weX47nOZqUOySyv0%2ByRe7MZsMGmCBp%2FFMPLj4sAGOqUBQRVirGdVq%2BJVCLmWJW4aV6tMRHD2Jnt35C0yT5lVLSifRJCDl0SyIy7EfkUDWWJxbfZcOFZdlySQ1%2Fb3tWaR3a4VEWRQwUbtc0WkW7HKMX9OHY%2FLpFFi3El9cs8oDIZmjt4qJ2peoRkOTHbGiR5g9LWOKvrNriJqu83QaASpxM%2B2JY%2FFN26c6sdJBU9dJb7OPE2LGwuLlGfElDToos2veQwp%2BHjX&X-Amz-Signature=884c90485499983b0b8ec0722350701b43a35f17766ed8632e427a1ec9cac38e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLOFBQQ4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYVOGU61apphONvPGcacTvSmG%2BTddRdFF8SRB0yNjA%2FAiA%2FkknsAZ%2B9qIsgCzuuqPHAHIjf%2FJB3pL4l%2FoocYiRbAyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMaJAnVs8PKCLE3ih%2BKtwDAOjR9tnRyW7qJaQ9hVlxiqFtrvqWx6FONYqBwC0Bag4Rpmh%2B544nHswcnJ2cUOlDGL5Z57LjBTVLYDtG84Z0U%2BuGzF%2F7cNc%2FolynEkt36XRTJCIj4dTmQnPNxHkRZsC41rmpb7AYkAWMy3EAOiStcGaZ4oPBl5tcINKAT5W6geYsRRUMsZZ%2FxQskzu7Lm8bn9%2BdelFJqCB75wFCYN4m2jvbMh1CvijmRFAtNRiTVPdstaZjpJHQwS9DVzmiyacCcvzR%2BpYriJro4wCHMIJ2rNKFpdpo8Dkz%2B0BJpYvS7ofot8WCxyXxOUBSwXtB9a1WEv%2FnFzBN%2FimzZdH1vZveNtf1%2FsYhhkatHzWlOg7NePZwuQOTodgeDW%2B8mHRbnx6IEuPYFR3v5x1B4X61KvH3KB6UEIU65N1Ng5WhxwsT9%2F0emGeKqFp5mZIcTYslPR6DvkqK25wpah4nDWUeI1jy8Etlw7kj%2FZuIT8JTTGpliGK2zKyYgu2eo05%2B8Sk8asf8IL4YfQgV8HuNSUjryi96C3f8Z%2F%2BC%2FEtrkbARRjnPWlTXtBgbvxPD8w41lvF7xi4pL3Mp7KPiceYmqm%2Feaamp9IFbyI0XdycEETdHyAmSmopOJyYO%2FPFVO70tWRn8w7ePiwAY6pgH9tEVBl6ozfhegCk0qvD4wGGKijRjH2LAh9Lli4elMb0AHJkUjFXKdpTeIGs2C46MK5WK4MQO%2FQuHxVW8VkusVx12J7gkraNNNwGTRsxMxRJSdYzn%2FvId9sSIHXP7fQYTJ7yWpUUqYylaJTQAd2HRoKyRFV8Z3xYUxRhBu3Y3E3MxgXx5S02I8yjgtI5tg3fVaoHvOhdz%2FAvXeiERbkMvog1wsUAml&X-Amz-Signature=aa13003f876555e93762a691d659271d632def385a784bdf410e1dc5ede31dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2MJDWW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn9ePsQLq6JULa%2FMxdc70UQgTMHvMuXnSDnUVsLjitDAiA%2F9LAdM8aPNT%2FvK2%2BOebkZC3UvrfLVF3bD95nndhZVCCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMhD%2FCc0pWCdZMF9amKtwDRtIn4ge8Zw6Z6cnWlFkjuhUcFuNhnflX3xCdN9qYX7PXbtLuWOt4Jfk50jsBtPZR3BD1KTyG3S%2BF3BRX5DE0leIbjbQfHjwCFOWKY5UoVuCE%2BzJxz8N1%2F3kb5dG0HjC8r6pOXUCgc64TrLAPqFLP728a1J1BqWU5V8RhWRaty%2FPzA4h6541ZrJFxLD6CRlkcI8ZSk1Ecik0J1dhJdsD%2BcHcNYSkjlF41t0FOrfLcg7VlyH6z5jboSjF%2FzNlvgeZ5ajy9fwsGMNjFLaydd7r%2FiRS%2Bor6LB%2FNz9yYPkc9XiWikRercYcmTrOMy0QEWGp2fnfDSo3Z66JGY%2FNbiX4kzUUIALvkCnIyj8PcrFU5LiZZy0A7AwYBvHiwmClr4iZ6kHlSDmKKhm5Dvd21JMLO7CbDF%2B1QXk20sUD5EGY%2BU0daPm2sVTFs36AWCu8YGbCbmCzr89mpuRphzlLd0oYdBlAUuoH4cHTLB%2FmGsJjSHW7egOA3sNd0Mu3XnsoVz1sDMh7nTEN%2BfuwsfANgFvAU6R2oaNjTS2RKemRXek64n8dV6K7qA4LwhVr%2FwuzeItkCfNAGhGw23lzSnnnEMd83mYGlWG%2BCdFBYLDYa5z3nvvjOZXXi%2B%2Fp4FCbu9dhgwmuXiwAY6pgE7M1xyxaTlNIxCcuJ8E%2F%2BZekK1mbgryf4NwNB278Sjc1Wqe1NzmtCsdXinr61PM4A120QiEHZQ7HebBVWfRl%2FBjhIeM6m1XFcsFO7vs5WStwh2ylwur0VJQBL8%2BT5XGxPw55NrWGmbmSMnlZO2acSs9CS91HqytDo3FcK3VHBIveb52vPJi2ecG8zhru093IDhYIz5h15Avm9etPTw3wyuX0TdGz%2FU&X-Amz-Signature=70986a1bb4125f2aacd25d2c6ae7a6f0da122384bab7256770431337fabf62fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKBNF5V%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6LXOXFcqg%2F%2BRKeie9uG8ZDAb4wNgu4zkDe0EW9QCPZAiEAubligxUGs8%2F1XFNjXQYI5EWXU6X8DELme3YCX9s4h1gq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIRoyH1JEBN3a%2BJpDyrcA8iSd%2FCCV0j%2BRcMW7rEs2CZbwel1P3ZEVh7sLMFsaKWnzj1RzhroUX4syq6%2F8keFhAHaisGuvNdWASAcyIHKzoLOITHX7GKqogVJ9IGkZN7KJK3NUNzjYSk0CYQnAOhcjdenPACNM6Jy5YfDy77qR%2BHxrOj6viyMCha8%2BRsecpgqINX%2Bjp40iVEI2FDsZEM%2F51mWOoJdrgdtfXw0kGvh4D4Uo6zSXeF6hyCn%2FGGT5%2BZGP1Lvksf6TgX7nmB0mOAZWgn%2FxfS52ecYE%2FtlUHsZz0A5D63L3IBc7iziDG%2Fw9pq6LwOBa6QKxZGVLtezI2V4VegJXj4JrYxi4xx2SbRMFyBuKqBAhb3dZYmAb2FcSkK9aFX9JR6%2BaOQqCfGIQi1cHYwQaruTF7Xr68YiZx5RGSe%2FoF5BHfsqlYeT%2B2WJEN3Sfckw35PW4zqcLtpgzVaGxUHrOdoanSG8%2BkrNYjJlCk0vlOz1CAGg%2FlXFotTi2OKt424QFkjIrGHsv0XxKsZPtOTSNoTrM26B8jDiiB6Hsk67g8zZKRCQH24%2BaTSIH1bjCi6aHtStaQX9b5Nv0z9tHU7BGo7xt6JvV6YMBLRR3XKJbHr2weX47nOZqUOySyv0%2ByRe7MZsMGmCBp%2FFMPLj4sAGOqUBQRVirGdVq%2BJVCLmWJW4aV6tMRHD2Jnt35C0yT5lVLSifRJCDl0SyIy7EfkUDWWJxbfZcOFZdlySQ1%2Fb3tWaR3a4VEWRQwUbtc0WkW7HKMX9OHY%2FLpFFi3El9cs8oDIZmjt4qJ2peoRkOTHbGiR5g9LWOKvrNriJqu83QaASpxM%2B2JY%2FFN26c6sdJBU9dJb7OPE2LGwuLlGfElDToos2veQwp%2BHjX&X-Amz-Signature=03fe67424cc809aaab84b1647388aeabfd44ed9da75edc98452b2032385b7054&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
