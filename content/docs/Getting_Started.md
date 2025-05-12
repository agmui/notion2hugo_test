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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R6XBL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGaBDWavOMtIY9YiJ5bFc05Fsr2S%2B0lt%2FV9NLws60lKzAiEA3uiCPHBfD7TYSbyy7tZUkXuVp8gUJRrNjAUXo0AE5SUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuHOXeHjKKQtC1y3ircA%2FpHFTA8XxO%2BW6QYfqtf0r1TI0TTAXcJsE99gFGZO4oOBJe42%2Fgb7UauJ9VXIy0HjkO4OFS2kp%2FStjUYnkTMmOGZ3Yi%2BlWj2dHQuFFnAobP6U8T5VL%2FqguMi0K2nAQh4prBSPKMwHwdD%2FzFW2URkG8sDMKtLmydQxCxPCy7IcINc2Rl2tZCTw9mjZozDqbS5AA%2BsmDgyzbkKeBLsezLnfHfEsWfor5QzEv2nvZzzPsFSUkkoOKF64sG8zLkqJWay0Jb7XtaSOoIr3j5wDAODpz0OKtD%2Bqg6neCyre5k6d%2BHbFCp4ndSuljf%2FN8QltFFcoPYsQkGv50bdpCQlKsmI2DYTeAErsZqE5wzyGIbZokIpgiX79T%2FdIpnVAcP0ToG85lbie9CyXl2UH2yV8cfXzxQAbWdpVewLWBcCMHeQJu7003Ocl8fcIvLSERFJfJE1x%2FEB%2FWl3f0TxV0nxJUm%2FnmKTHtsq2dwpHOWbJHwqOY234qlG9qOk4C%2Fciws657qBD1FRyi8%2FuiXjoe%2FkJOLoOjWQbj6kLF5f2z3AeV5vIEoxy8SYF%2FBS%2FANG5E8i8HoGnSYlKdKPV4BAwds71%2F%2BK9%2FwSA%2B5f%2BS6ROsy1Ir9rjtew1fVhKQ5iZw3Hh7BCMMGdiMEGOqUB16aaCd3m3nDODOEpaglzAiV%2FsiM459F38Ucr%2ByEU6vnEYCx1VpkZ7PHFXDhCdtxqRr7C%2BlybtunCv%2BtRv8aLIQoGvBri1HbBCb9UKmINd2vbSruP7rYmkNeG85VhRj3YhRQ5Nf43POnknvvW0mQZJwYOWoY%2BUdtZdZu8blrSBpR4zCoaY3PF89cq9d3OlDSzPQWZis7ircFDFF8A04JinMxALKOC&X-Amz-Signature=dfe1cb8b40e2f7fb52fcad0564c211ab776d56c4817b0e8f46a4f620cace33b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R6XBL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGaBDWavOMtIY9YiJ5bFc05Fsr2S%2B0lt%2FV9NLws60lKzAiEA3uiCPHBfD7TYSbyy7tZUkXuVp8gUJRrNjAUXo0AE5SUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuHOXeHjKKQtC1y3ircA%2FpHFTA8XxO%2BW6QYfqtf0r1TI0TTAXcJsE99gFGZO4oOBJe42%2Fgb7UauJ9VXIy0HjkO4OFS2kp%2FStjUYnkTMmOGZ3Yi%2BlWj2dHQuFFnAobP6U8T5VL%2FqguMi0K2nAQh4prBSPKMwHwdD%2FzFW2URkG8sDMKtLmydQxCxPCy7IcINc2Rl2tZCTw9mjZozDqbS5AA%2BsmDgyzbkKeBLsezLnfHfEsWfor5QzEv2nvZzzPsFSUkkoOKF64sG8zLkqJWay0Jb7XtaSOoIr3j5wDAODpz0OKtD%2Bqg6neCyre5k6d%2BHbFCp4ndSuljf%2FN8QltFFcoPYsQkGv50bdpCQlKsmI2DYTeAErsZqE5wzyGIbZokIpgiX79T%2FdIpnVAcP0ToG85lbie9CyXl2UH2yV8cfXzxQAbWdpVewLWBcCMHeQJu7003Ocl8fcIvLSERFJfJE1x%2FEB%2FWl3f0TxV0nxJUm%2FnmKTHtsq2dwpHOWbJHwqOY234qlG9qOk4C%2Fciws657qBD1FRyi8%2FuiXjoe%2FkJOLoOjWQbj6kLF5f2z3AeV5vIEoxy8SYF%2FBS%2FANG5E8i8HoGnSYlKdKPV4BAwds71%2F%2BK9%2FwSA%2B5f%2BS6ROsy1Ir9rjtew1fVhKQ5iZw3Hh7BCMMGdiMEGOqUB16aaCd3m3nDODOEpaglzAiV%2FsiM459F38Ucr%2ByEU6vnEYCx1VpkZ7PHFXDhCdtxqRr7C%2BlybtunCv%2BtRv8aLIQoGvBri1HbBCb9UKmINd2vbSruP7rYmkNeG85VhRj3YhRQ5Nf43POnknvvW0mQZJwYOWoY%2BUdtZdZu8blrSBpR4zCoaY3PF89cq9d3OlDSzPQWZis7ircFDFF8A04JinMxALKOC&X-Amz-Signature=442e88ef315395e5dd46ab7da1182eefed1961fb640432bf1656bfc790224304&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R6XBL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGaBDWavOMtIY9YiJ5bFc05Fsr2S%2B0lt%2FV9NLws60lKzAiEA3uiCPHBfD7TYSbyy7tZUkXuVp8gUJRrNjAUXo0AE5SUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuHOXeHjKKQtC1y3ircA%2FpHFTA8XxO%2BW6QYfqtf0r1TI0TTAXcJsE99gFGZO4oOBJe42%2Fgb7UauJ9VXIy0HjkO4OFS2kp%2FStjUYnkTMmOGZ3Yi%2BlWj2dHQuFFnAobP6U8T5VL%2FqguMi0K2nAQh4prBSPKMwHwdD%2FzFW2URkG8sDMKtLmydQxCxPCy7IcINc2Rl2tZCTw9mjZozDqbS5AA%2BsmDgyzbkKeBLsezLnfHfEsWfor5QzEv2nvZzzPsFSUkkoOKF64sG8zLkqJWay0Jb7XtaSOoIr3j5wDAODpz0OKtD%2Bqg6neCyre5k6d%2BHbFCp4ndSuljf%2FN8QltFFcoPYsQkGv50bdpCQlKsmI2DYTeAErsZqE5wzyGIbZokIpgiX79T%2FdIpnVAcP0ToG85lbie9CyXl2UH2yV8cfXzxQAbWdpVewLWBcCMHeQJu7003Ocl8fcIvLSERFJfJE1x%2FEB%2FWl3f0TxV0nxJUm%2FnmKTHtsq2dwpHOWbJHwqOY234qlG9qOk4C%2Fciws657qBD1FRyi8%2FuiXjoe%2FkJOLoOjWQbj6kLF5f2z3AeV5vIEoxy8SYF%2FBS%2FANG5E8i8HoGnSYlKdKPV4BAwds71%2F%2BK9%2FwSA%2B5f%2BS6ROsy1Ir9rjtew1fVhKQ5iZw3Hh7BCMMGdiMEGOqUB16aaCd3m3nDODOEpaglzAiV%2FsiM459F38Ucr%2ByEU6vnEYCx1VpkZ7PHFXDhCdtxqRr7C%2BlybtunCv%2BtRv8aLIQoGvBri1HbBCb9UKmINd2vbSruP7rYmkNeG85VhRj3YhRQ5Nf43POnknvvW0mQZJwYOWoY%2BUdtZdZu8blrSBpR4zCoaY3PF89cq9d3OlDSzPQWZis7ircFDFF8A04JinMxALKOC&X-Amz-Signature=64cf4cc7ec85a80876ac4886de48e5f6ef130e034fcc7854d7ff6351cbea1f36&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJLUX2W%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHsIBOgL2z7ldM7gesGDWcvWEpSPt9Y49Z9e%2BEnPQVV0AiEAr%2FynLwY%2BnGaafIWfDKoPADF6IRNd%2BcSiM52YQ0FXuUAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLK5xE1EY%2FqCvvlSCrcA2LP3BORNd96UJAsfjpieOtzKJPOjAf64FfZ0O6N2FMtUxhtPkQDX%2BbTyx3z%2FcWhJEagOh%2BDt7n03i%2FUkw%2Ba4VB4NjjmjynUYV6rjUJoMJ64LSNiDUvw2hVEiiG%2B%2F%2BCzpR%2FfX32ccwxoKgSHpz3agoWIId2ZXImqvjUvoavaBOTfqAPRMTwuyvSr6B%2Br0v06EXK0SXehz20GSjqTM4D52izh3L%2BDvbNWRPNQg6NskCEWKFFzIROghWBzerLfTPFzgY%2BLrnL6680CTVCKzz2Pln%2FG2%2FQ8aTdrawFxED80SuWqXJ%2Fem2zwlbyVWumIZsb%2BFHppSjhgp2zFUd1pZczyBAndh%2Bi0l%2B5U4XBdFbzxNWcBRHES%2Fx7J7qi3XmRlt6%2FCNx5qAOwdbmByj1PGEcMfXGfqWRWaYO04LTUl5oiLBd3rRTd2MKE0QeFIRJRBZZeUE1mwIHzA4IvGv%2BPdNFrKRtNoWEX2xOQIRRcvnOfV7LOwbsvAAlhf%2BBb4RwOyy6N22S6iLNzMrUSeuynuIMpySCys1VGnDs5Su0O9R58ViXkTqQCK0%2FVY%2FGVZd%2F47A%2B%2FqggdGbeM%2BV%2BpCapgZEJUJ2jcy0%2FlGGuwmGqUJJFK2eB0EnfAoeNCICM0vcX3ZMPydiMEGOqUBljx9DQGcIL%2BRapcWGd3xyN1Gm0hcIRu%2BK%2FLJWv4bXkzE3mvd5U24%2BMfp9cWkGJzwJu5uZbh4boPoVqqAfa4vSGqhX9mYWnjIqSIJo9jkpkl%2Fv1KiTvWyRgod8z380d4twblUmTXI16c0utdPqoR6%2FIhjlwNgPT8AW7sG9M4ldtPzIDcjokwOJ0lSVfmdFE517Xn2ucH3EkFwMuLDdz7oBIQ2YOhT&X-Amz-Signature=582a3bc93ae8ea0ceb419bda0ff59b3886e089127d6b3f73e455512ea6686373&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH3XIROR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAxyh2VasqQgooFR8hhYxP0PaHgFaAcsA2C3MsjImIk8AiAY075Z7X%2Ba4WcvHu99FJvVc485KzTT6hp44r0AcyhW4SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYTw06yoFhmM7V7bFKtwDEorjqX%2Baf9aX0qjr2%2BsaqS5A%2BupIbTTojidA%2FFOSwhkZXYPJ4wi9Uvf5OZET7IomcbplvSJ3MtM8G6Nh%2FwVoa00%2BczBNZpA6ZCycDlAA7pdRc7ikRwfCuTSV2ljHeVQpf1UEifL6QxUnZyQi%2FuOxspy3KPty7Ff4OYpRxrsBG4ykUbCJmheyvWEMjFA%2BoV%2FdvshhFZxydrWjpjmQ3ohUHj6on0vtaqyBad%2FWDrdd5rtanimFyhMNVTu0oXPrxJEeZtso2fDDU0%2Bgn7B5AemTjOf0r3%2FyqRnQDaMWYrg5Cnix7QpbQARf1huF8JkbNh4UnilsbjS6qFlfVda97bXDdDa8Jh9obCj9OA8uOsGPDu4chiqyxB6LycSG8wBafT6xBpL1cxqoU%2FN9S1xfApe6XkGAqsduwaMHg7JfMexiGd7D3iF2ep7JNwbq3gBrCIitfiC1hw9gYQAxm8ET8jXopPrnNjKvgQWWzpM5dgfW36tAM8VxYxBBi39N%2BHcWEEPUqY1pBEexRUUaDoHxHMCWV8RaGsyyhUM4Np51usUhsHo988vxCFIA%2FNu9fSyrxiB4GZISd6RLtNrrrjbz0DtNx%2FqaQixrQr0we0OAJ6KCPpuUCq7pXaGWhza5yoYwnZ2IwQY6pgG6BebTC6TzKk%2BgU9rJ%2B7LYBHTOJoIvErIAZBb0usHf3o%2F71lPHsRWWoM%2BDoUwyODc7dVo6Z4HT1El9%2Fkz38UeEpjrmZQcizCNtOPHuguVnCgyjrLhzpwLmZG9A0tv4BXyuY2mdsiw7x0Qe7tov231FlqIJ8Otb8VshP9xFoyU3RsM3M0F3JI94W%2Bjwf0wb8nuAdWoUkBj4heixsqI4jMLNPP97jWTa&X-Amz-Signature=c783c1e9995b5c169097dde22899de6b35910a55796833ae8774713eec0f7b82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R6XBL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGaBDWavOMtIY9YiJ5bFc05Fsr2S%2B0lt%2FV9NLws60lKzAiEA3uiCPHBfD7TYSbyy7tZUkXuVp8gUJRrNjAUXo0AE5SUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuHOXeHjKKQtC1y3ircA%2FpHFTA8XxO%2BW6QYfqtf0r1TI0TTAXcJsE99gFGZO4oOBJe42%2Fgb7UauJ9VXIy0HjkO4OFS2kp%2FStjUYnkTMmOGZ3Yi%2BlWj2dHQuFFnAobP6U8T5VL%2FqguMi0K2nAQh4prBSPKMwHwdD%2FzFW2URkG8sDMKtLmydQxCxPCy7IcINc2Rl2tZCTw9mjZozDqbS5AA%2BsmDgyzbkKeBLsezLnfHfEsWfor5QzEv2nvZzzPsFSUkkoOKF64sG8zLkqJWay0Jb7XtaSOoIr3j5wDAODpz0OKtD%2Bqg6neCyre5k6d%2BHbFCp4ndSuljf%2FN8QltFFcoPYsQkGv50bdpCQlKsmI2DYTeAErsZqE5wzyGIbZokIpgiX79T%2FdIpnVAcP0ToG85lbie9CyXl2UH2yV8cfXzxQAbWdpVewLWBcCMHeQJu7003Ocl8fcIvLSERFJfJE1x%2FEB%2FWl3f0TxV0nxJUm%2FnmKTHtsq2dwpHOWbJHwqOY234qlG9qOk4C%2Fciws657qBD1FRyi8%2FuiXjoe%2FkJOLoOjWQbj6kLF5f2z3AeV5vIEoxy8SYF%2FBS%2FANG5E8i8HoGnSYlKdKPV4BAwds71%2F%2BK9%2FwSA%2B5f%2BS6ROsy1Ir9rjtew1fVhKQ5iZw3Hh7BCMMGdiMEGOqUB16aaCd3m3nDODOEpaglzAiV%2FsiM459F38Ucr%2ByEU6vnEYCx1VpkZ7PHFXDhCdtxqRr7C%2BlybtunCv%2BtRv8aLIQoGvBri1HbBCb9UKmINd2vbSruP7rYmkNeG85VhRj3YhRQ5Nf43POnknvvW0mQZJwYOWoY%2BUdtZdZu8blrSBpR4zCoaY3PF89cq9d3OlDSzPQWZis7ircFDFF8A04JinMxALKOC&X-Amz-Signature=8fed15b4f4407472787e15b70fd4695d1cbc65805572a9b07158f4c4d5991208&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
