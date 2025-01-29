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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFZYTL2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuIv%2BMCDXHxZSyXt7yQHjVGiVMPLBnEhpZpjhoOvtRgAiEA7%2BJcQJGQP7bjoMujS140IeOFeg31fdUvGII9Rcfr5jgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMUr8EfsJLqcWUNWCrcA3O1TivdsZfyQP1lT%2BN%2BhDfsYScE0mQTf05aRi5I3lOUYLq%2F1zzDmCYBO5DfzH9wgfEvSxUcK2IKzKyb9xCh5q%2FBLRHG3AaJi6tf1CHKftdl5MXSxs7B80uNKT0t1tgwdLqPdR5g3DzXNRPYo9gIIN77g7x43dartO6K7ob3c27YYtfuYYSfOWOsoAzX913gOY4ro9Ft5A5uaqYoE5euUlBMWYVJXi7bwfli7JuaFFpzo3FrGfDtuZ6NVnx8aBSjHEbbC0kQAN09Zn8vZGvAanaCjH0lgSAdCb%2FczIkQrtkEgL0r%2FYoprqYEi5DBQ1hSzhkRONUuoEg8vEjBhuCFqCHhDYvdFhXwAfzRV4UJZKsWqZxQXL2YeGA8EY0EqLwgBwJ5t6ZuwSDyoB9hJFvaPaCc4tBh4UrS2QU1vVzndf%2F0afsXVHDLcAuJDNqlzSBjOsnyzTUSwzYi0AZ1dCInanWG2HtnFXsjv2wv%2FO35wIZ1xGyGDw2JNDgOK8bqqi0Di3ckU1MpjadDpbXEwoqa7zfRVwwDuplpex%2FB0w3zNtuA6y29Ep72LlUn0%2BPZin4rK19to1shxy7WbAkpdFIu0dUAE3DmGranRCkwV6Ypxrw0n5IPZX3Vt3LDT3e6MLKu57wGOqUBJc1Ug%2BSkOvJkQzcA%2BduY0fJcy6DkYhcTMQ7%2BnaNbi2dCjo6gVYY2raCLRMiKFNx1wh0Jm4kUE7uYWq9mV3GzQRU5AVJf1yvdNInpej9lMHTgL4OCcihiKWXLhE2vR%2FZqbOMHPHVBIQBpC00CbyhGIV68ZCU400I47RsiXx%2FgAZR5igUulZBLi8sdR4l56y7cIP7DqjPN3s8fMM5sQu0haCo3fW%2BO&X-Amz-Signature=68da3f6693c22315896d95d0bdac8ced803aba29511749658d68492539a26307&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFZYTL2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuIv%2BMCDXHxZSyXt7yQHjVGiVMPLBnEhpZpjhoOvtRgAiEA7%2BJcQJGQP7bjoMujS140IeOFeg31fdUvGII9Rcfr5jgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMUr8EfsJLqcWUNWCrcA3O1TivdsZfyQP1lT%2BN%2BhDfsYScE0mQTf05aRi5I3lOUYLq%2F1zzDmCYBO5DfzH9wgfEvSxUcK2IKzKyb9xCh5q%2FBLRHG3AaJi6tf1CHKftdl5MXSxs7B80uNKT0t1tgwdLqPdR5g3DzXNRPYo9gIIN77g7x43dartO6K7ob3c27YYtfuYYSfOWOsoAzX913gOY4ro9Ft5A5uaqYoE5euUlBMWYVJXi7bwfli7JuaFFpzo3FrGfDtuZ6NVnx8aBSjHEbbC0kQAN09Zn8vZGvAanaCjH0lgSAdCb%2FczIkQrtkEgL0r%2FYoprqYEi5DBQ1hSzhkRONUuoEg8vEjBhuCFqCHhDYvdFhXwAfzRV4UJZKsWqZxQXL2YeGA8EY0EqLwgBwJ5t6ZuwSDyoB9hJFvaPaCc4tBh4UrS2QU1vVzndf%2F0afsXVHDLcAuJDNqlzSBjOsnyzTUSwzYi0AZ1dCInanWG2HtnFXsjv2wv%2FO35wIZ1xGyGDw2JNDgOK8bqqi0Di3ckU1MpjadDpbXEwoqa7zfRVwwDuplpex%2FB0w3zNtuA6y29Ep72LlUn0%2BPZin4rK19to1shxy7WbAkpdFIu0dUAE3DmGranRCkwV6Ypxrw0n5IPZX3Vt3LDT3e6MLKu57wGOqUBJc1Ug%2BSkOvJkQzcA%2BduY0fJcy6DkYhcTMQ7%2BnaNbi2dCjo6gVYY2raCLRMiKFNx1wh0Jm4kUE7uYWq9mV3GzQRU5AVJf1yvdNInpej9lMHTgL4OCcihiKWXLhE2vR%2FZqbOMHPHVBIQBpC00CbyhGIV68ZCU400I47RsiXx%2FgAZR5igUulZBLi8sdR4l56y7cIP7DqjPN3s8fMM5sQu0haCo3fW%2BO&X-Amz-Signature=ba87605800a303883d93b58eeddbe78dcdc85429c65e70d705d417af90df0cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROY6HHGI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmgAjcY0HMelpL5H%2BgHgVoiZMFjYUV1mkcsBpUIt8HAiAaTOlnGRUVUjhG4aacnYKaJepxtdMDyjDGZYSZ7987qSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0i7ZWnTKj7cPqHHNKtwDAL0EVTjod%2BlEWAXX28gxZhhf9jY9J6%2Bp3GDy1ILrUF2CwPwpgCsOXJ2c%2Fe7xWxSsnM6KQCZZxQSFq%2BaR2KKxtc%2Bh9g2tpyr5lexkHy6ZjPu2UYtnCemCGP9xztaVDRVMgctRl4QSZsieIwQwQzPxLVdKic8Q26qoQ0TpZb1QvB9bUbw6kBZHtPuSRI7ppRjPmA4XUxrD11SrVRxX%2BY4RZNt3EpkRRP867EEQryzWP%2B1D%2FfjEEFPIOfzkk0xtgi5bhFrdayV85zznBGJTPIFfCXNGN3uQB0pYwuCnuStrS02XGJpSkgaDLAmNsel275dJjzFPkayvvRG7pN2FmonCclZoHvTcPgYmeYhiU47v3556GY6OFlYOadj5EmiNDUjB7IQs%2FEWDWjxkcNoVBqHAhma7pDVZDwAS5NUtVj2Kr%2BCRS9UNbuk4ybJ2x%2Bihc%2FdBjsY8hcArr9HPUrGQG%2B%2Bl5zY6s7KZEWMq%2BZi%2Bz7m7JWslPuJqF73z%2BgTxbdoUQuWnpB0anbUiR%2FzZ8C3StH%2FNZJyjC6P2LpYDJGaZEVIfnQtTimUfS4J75uV%2Fb31hmefo1xCrdNN0WPnGyi%2BhAKAE353QjbbQIXX8dbcHoWqtkgEqQGzlMmG0Jd3uGgAw3q7nvAY6pgFKGzOa6%2BvrjHih%2BOMWPT%2ByMm8mC%2BYJL0IvBmQLV7%2FKT6uomwlSJerKE%2BvoVYXyJkTtn6tbwYQrDrHL7s6N%2FfSMeg%2BUKwaOpWz6ljEOL93m55lEcTaQGgEp2OmyWqrpTUgL00RwYHyz%2Bg7GkkXUycge2EkEwQ3ciJDwg9Bd6Oh%2FqTumorYRD7G5cHUOb7zkdO47fR0cO9fe2JoZtnTPO%2BsoqY1JI51d&X-Amz-Signature=10aed0fd9b21b3e8a03903d68e75a9673776eb8da14d29b02531589733f5069d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVM2WHU%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVJFxW%2BDMzxXSpi1GZv61Yi02MjVlh%2F4hIdCECVas5oQIhAK1dZ7UtsfQNUqNZ5NT8gjdDs9HfOec8ByvAcHE%2B%2BPiwKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg8e%2BJqSsaOpDgNsAq3AMPxYuVd7vuzK8tb4tWpsc9iy2guHqRNy4RB1tKVfNVWVHPriaQ4NE3GPCXz5YNACUzg72OWiT26N5pe5oUXZDzomNQThr8vEJyWAW7ToeZDE2OvFz%2F7Eo7U2G3liNmSejqAX0hp7xZDqMtNhnPyVwpG4igAsFcALqAdYws3iqjLRdN9b39LSUzWxgc9ibEXmRX4NLLrIoRcnFHKfCrUYS%2Ff%2BVT6nEtBVIvPwKE2JAMWlAHiddzy7CdWjzZIpAUKJQq1zz45dRuG8RAsmIkrhD93WDFRoGgEgciP3h0Yas3eGG4kxqZloTEvweBw6Egtsl9MQNBOHBAlUFU0jE8k9mFPfrARr74tulr5jNguG0JkFBQsaDd6hEJM46zqWAvqda0G%2BOSnI9P1HSzvn4LwQFnsbq%2FUH8bQB7O7LD4509UxL33An7f2d7cl0XoGlN%2FvRpLMzY34F7uiAAeWTahZplph8t4EsJA5gbygSn5wybXujKWrXf1YlGR5FCN17T33Zc%2FgYzF4MAuoj9xWQyEaQK%2Bnv97MUaBFqEmkC7v8IH0l5b7AbwFfE8svNXhhsDVC2uVUvcQmgnOCApv4k6i%2FHaVvh37LWQrmRsbXwwrKzUtQ0QM5vLQUQV7WnihYjCnrue8BjqkATYE3gxipGDalnSu66LVmaou0AjQBrs04IPc%2B2ibFNc3Rtb2lUVgLmzxxrM0ISQIwaLHmz9Kbw1OZDYqod7fdjoUdAjjma%2BgqBEcQavq4ndxnHh27BVprJeZhXTXbxvaTEvlNtHh0e2x1Tc8fUPphPcFsbHtV%2FPqoNwIJRpVpTFKOuTFYpFob9RAjyYvpccsom0zIeUy7Cb2wJx3KaAM1pQBBv6c&X-Amz-Signature=5d8ce20075aefc914870fc05c3fae92404354bfc12ef45f2e3b39adb122c5b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFZYTL2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuIv%2BMCDXHxZSyXt7yQHjVGiVMPLBnEhpZpjhoOvtRgAiEA7%2BJcQJGQP7bjoMujS140IeOFeg31fdUvGII9Rcfr5jgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMUr8EfsJLqcWUNWCrcA3O1TivdsZfyQP1lT%2BN%2BhDfsYScE0mQTf05aRi5I3lOUYLq%2F1zzDmCYBO5DfzH9wgfEvSxUcK2IKzKyb9xCh5q%2FBLRHG3AaJi6tf1CHKftdl5MXSxs7B80uNKT0t1tgwdLqPdR5g3DzXNRPYo9gIIN77g7x43dartO6K7ob3c27YYtfuYYSfOWOsoAzX913gOY4ro9Ft5A5uaqYoE5euUlBMWYVJXi7bwfli7JuaFFpzo3FrGfDtuZ6NVnx8aBSjHEbbC0kQAN09Zn8vZGvAanaCjH0lgSAdCb%2FczIkQrtkEgL0r%2FYoprqYEi5DBQ1hSzhkRONUuoEg8vEjBhuCFqCHhDYvdFhXwAfzRV4UJZKsWqZxQXL2YeGA8EY0EqLwgBwJ5t6ZuwSDyoB9hJFvaPaCc4tBh4UrS2QU1vVzndf%2F0afsXVHDLcAuJDNqlzSBjOsnyzTUSwzYi0AZ1dCInanWG2HtnFXsjv2wv%2FO35wIZ1xGyGDw2JNDgOK8bqqi0Di3ckU1MpjadDpbXEwoqa7zfRVwwDuplpex%2FB0w3zNtuA6y29Ep72LlUn0%2BPZin4rK19to1shxy7WbAkpdFIu0dUAE3DmGranRCkwV6Ypxrw0n5IPZX3Vt3LDT3e6MLKu57wGOqUBJc1Ug%2BSkOvJkQzcA%2BduY0fJcy6DkYhcTMQ7%2BnaNbi2dCjo6gVYY2raCLRMiKFNx1wh0Jm4kUE7uYWq9mV3GzQRU5AVJf1yvdNInpej9lMHTgL4OCcihiKWXLhE2vR%2FZqbOMHPHVBIQBpC00CbyhGIV68ZCU400I47RsiXx%2FgAZR5igUulZBLi8sdR4l56y7cIP7DqjPN3s8fMM5sQu0haCo3fW%2BO&X-Amz-Signature=9e6b9042cf989c8c93b374081eb86f6930b33a146a523cdf4d83826107f0ba6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
