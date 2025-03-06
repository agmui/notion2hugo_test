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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRBRQ2X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaLdkGpkWXJwxPkMulCTuevylVmyXjGaXjij4GGjQkmAiEAxBjAG9j3sAycGwuL8ml803jblAY%2Ff4D2MNUSmwVI%2BW0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHenAsa9K8U05G4F0SrcA8oPOIIdgiJ1kEQFzhRgul168WzF31HUcJ98zrkOJVDims0VwPUBFGR5INhS%2FJVju8HgjQycUdmI6py%2FnjfmggvDJYqiCamb%2FRahmi0xVt3zgoUs9rn%2FO3Uj1fHRRlOLPW8drUvM0y%2FdWjuoBPt7lDvRcaAd0y1XrDqlQdsOj%2FECbI%2F3Gzin9%2Blm7c2Vnwj94z6MDWmyGyWVa63zY9Va1TxxrpkaK3kDD%2B69pHFINbAwrj13xLiaPQ4HTiKgKyBIbSRjb1MgLaxjyv4ayjXADQ0efhAw%2BgD8wAESlewo6ZlZAO63IADnZ4I9TLrlc6gMEg3HOzqFzVokWUZ6mi%2B2GAxWS%2Ft5qeGaE4XpWf9mAMdOtKow%2BOGdnTh%2FUHddaHrBWc2hLzU9H9lZOXWiErLnmWeONvAA65ACgqJQjN8%2FcRWq5jEteRMMbfFnW3asS01uZbuVl%2BAeW73wpUb4dzPXks57KBtpK0BQqCr2%2FQuRT8kXDD4nwXMqvW%2BfRVP6w%2FrKiKs7zCXcIcYkSndixG8E4WS5VdCDnB7VK2GHuTcI6qMb5E6nafqp%2BsaED6I3CoA1JhJUu8YwSE1CdRh%2Bw7UZfxs0afBhBWobBe1GB7pwYvYeiF4eRXEwiDXG6oj5MOH2pL4GOqUB15egI5a9a2H40bYBl7YYtJNHOSYl887dTNqOP3xzShnTZXxhAUjZ3A3c70yuDroY93k7nArEJwBpTF7kOn3gskxhL%2BfEatLFcuSWVTOCmSf8YhCPbq6MIMCcdSPVOUOM1qOK4TUYTIUUvof%2B%2B3bG%2BpYkQlY1ijLpT4pIa0N0f58CHWlk1VVHJ%2BC9fBgrlp%2Bri4Ngmt2Tnt4FwXWYRPP1bcwkfQgS&X-Amz-Signature=5dab98b2c2a3bbd876df50313d2a78904fb95c8adc61cfa92a3774643a4fc19e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRBRQ2X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaLdkGpkWXJwxPkMulCTuevylVmyXjGaXjij4GGjQkmAiEAxBjAG9j3sAycGwuL8ml803jblAY%2Ff4D2MNUSmwVI%2BW0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHenAsa9K8U05G4F0SrcA8oPOIIdgiJ1kEQFzhRgul168WzF31HUcJ98zrkOJVDims0VwPUBFGR5INhS%2FJVju8HgjQycUdmI6py%2FnjfmggvDJYqiCamb%2FRahmi0xVt3zgoUs9rn%2FO3Uj1fHRRlOLPW8drUvM0y%2FdWjuoBPt7lDvRcaAd0y1XrDqlQdsOj%2FECbI%2F3Gzin9%2Blm7c2Vnwj94z6MDWmyGyWVa63zY9Va1TxxrpkaK3kDD%2B69pHFINbAwrj13xLiaPQ4HTiKgKyBIbSRjb1MgLaxjyv4ayjXADQ0efhAw%2BgD8wAESlewo6ZlZAO63IADnZ4I9TLrlc6gMEg3HOzqFzVokWUZ6mi%2B2GAxWS%2Ft5qeGaE4XpWf9mAMdOtKow%2BOGdnTh%2FUHddaHrBWc2hLzU9H9lZOXWiErLnmWeONvAA65ACgqJQjN8%2FcRWq5jEteRMMbfFnW3asS01uZbuVl%2BAeW73wpUb4dzPXks57KBtpK0BQqCr2%2FQuRT8kXDD4nwXMqvW%2BfRVP6w%2FrKiKs7zCXcIcYkSndixG8E4WS5VdCDnB7VK2GHuTcI6qMb5E6nafqp%2BsaED6I3CoA1JhJUu8YwSE1CdRh%2Bw7UZfxs0afBhBWobBe1GB7pwYvYeiF4eRXEwiDXG6oj5MOH2pL4GOqUB15egI5a9a2H40bYBl7YYtJNHOSYl887dTNqOP3xzShnTZXxhAUjZ3A3c70yuDroY93k7nArEJwBpTF7kOn3gskxhL%2BfEatLFcuSWVTOCmSf8YhCPbq6MIMCcdSPVOUOM1qOK4TUYTIUUvof%2B%2B3bG%2BpYkQlY1ijLpT4pIa0N0f58CHWlk1VVHJ%2BC9fBgrlp%2Bri4Ngmt2Tnt4FwXWYRPP1bcwkfQgS&X-Amz-Signature=8032326e50d4008ef3a60d85f695b218da4e470057f8462fb9ffbf2f51eb5596&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BE2XIR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDggYLIBXZvXoqov76anED9a6D%2FsbnXmDnbGY%2BlouVPyAiA1bgF1uZZVvbNNXkUKrvUZKNivYxCfGj%2FTE%2BG10ULfhyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMc6%2B2qq5ZSoyFeBDpKtwDMrn6rTT0l5vkaSlZVzGFizuT4H%2B52UOoPWIKQusJUG2jCbK4rYlAB7rqkUqhIAvybjdF2DMAs6x3ZkaCzYJrWXVbFwaDrCQSTsNlgHZmJOqqTnz1bEz4qrGX%2Bel3Yeov1KDSV6OsC%2BNdT%2BHCMwyxJ3mRMwsp2oHXr99sGYKwVqUTvcYJxhtEPXTEtRU0oOMJcruHUEESvZ4poip8uV7gEYZH%2B39uJgJNybBHIWiRpbwFLbRdWprZWvZn%2BikVxigXY0P%2B7UEe7Ys6dCAAWL1YC7z88e49v1vehagwrF3eWqoIxkLQraCeUd2i6F%2B9m8WXKkOKORwcA5zSgAT2d6WvZF%2B%2FiZqP7j5LgNipbn5YG%2Fn0rICsRF7xfZK2oI%2FViAD7EqJ218C97IwgfY3OzGkpi1N17L39miU0wmuTy%2FveuK9zKcfa8ZAuPDLIA28bAciRtMKwylB56tIknJzy1Lz6LGmiDE%2FDvKhcrT0sdrOp2z2yNHqrKbUZxcLXyb%2FjeB2HysWnV8BXsJFqRlGD75B3vk6fdF4kM8%2Bb4wRiXYN89Gswr%2B3Y%2B1VT7uUR%2FiDC%2BPH8Vm62OUUGGNslKRnq%2Bcp3cIJJL3CrTNLmg%2FjFWCO%2F0GkdNHKnH46n2ef0O6AwkvakvgY6pgGhjzcKKnHNRSatfl7q6R5NlKgvvuJvDUPrddeYWfF2BMjX3SOx%2FtkU1Iq8LgS3WDZXpImgmBHuO%2BYCzfPmYi%2B3OMJBCHVzlCHPQcMvJf3fYnMwI4pQSUH6LMW9LWZo88OSlnNahVAEV3MzoI8maskwFNEMR3ky8af%2B4qJGG9SR7zlTP0gsbZP2xQs%2B%2BK%2BEFXC9jdkYplqHBlmFx8yMYRZMfUBLSTQx&X-Amz-Signature=52abce8a75b1aee97c0d7f1a46a1864f53d0503ecca7740315300edb0da2fe56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNKDJMK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGC3XQytnOwqNKkcVFvnBZATEhj1gl6GVJAoJRldNV7AiBurWXfY04Qyy35RwlaPBoaz7Bf%2Fnd970FO9%2Fz47IRCYCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMojAI0C7gv%2F5l69%2FlKtwDxiyQfmc0PQCtTMZV10GcCV2fQ416ZCAtjcemmXSWypwslTJrcC%2FxiVstqXubgggy67Xjo3%2BeuT%2BAZi5j3EyZiqgAydLkWM2LTddTrOZTe9GNu%2BHbmw6Zhc8v%2F8mIIe7HBwEHsYNTL%2BhgEJ2Spyl7SZSKFJ3afb%2FfdMjt18Ut1IRU53ZvO2uj8k%2FzyLXbBtq4E83OBTW5wm3rW9q08NFikDi2ijR8edtK13wJOzOqI4gfg45xlIaSFM3p7rmWDXRKo5XYQk3Lb0sgDgtYbIL2o%2FuKiY253a9O3bfFKN6aLEo2ocaH8wz8InrLA9M%2Bf1pDnbo9ozqM%2B1LAUqjJfQO7eTNgaSeBnMJzKrrv2ZyHJnWh7h%2FMgmJKrFivuoPaoCOR5ju430V0vVyDeoACi9BN%2F1iYQg3F9aSEKDfnJR%2FMTNG4w%2BDmj%2B0wtg6vh9B%2BXw32VjInCtgIz2GdsCEIJOXj78M48Mkb8ZeFUMo%2FBUd0SNnZHXNeOHKuC%2BeMwhZdZv%2Fquo4xonSOEXn3gZbKnjqd8RNVh%2Bxuzz%2B0fVTcTB5W8RVCRO6RPdjD23dHFyKQ8%2BCdseClONUTiE1siL9uUGIG%2FhUu9MRi9JT%2BTK54ms%2BmxrkdaEgc4GDcWs5fZ3sw3%2FakvgY6pgGw76eH%2FY5GZ2QRFiEt1hG69QJGDT3%2FZuYT1RK3%2BRVvT%2FwLQAIy6Rw8nxVINBZmZmOmDpsgDJQCaipnzXf4X4AIXLkacqDR5qgXavM5FmRCYW6%2FLLeI6tQ4dzrG0liAEnDMmoTCDfW5mIFThhLFmo8J72o3W%2B8IWxjpOTOwRxuJd%2B1%2BQXZDBlOrXVGZuUiELsNAYkb7jW58Fwqh0G8WZkGJCEi05hjl&X-Amz-Signature=c27c3a82c6555acdc47640c4eeabf241e6022220b6022b1863f2b99b473bee20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRBRQ2X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaLdkGpkWXJwxPkMulCTuevylVmyXjGaXjij4GGjQkmAiEAxBjAG9j3sAycGwuL8ml803jblAY%2Ff4D2MNUSmwVI%2BW0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHenAsa9K8U05G4F0SrcA8oPOIIdgiJ1kEQFzhRgul168WzF31HUcJ98zrkOJVDims0VwPUBFGR5INhS%2FJVju8HgjQycUdmI6py%2FnjfmggvDJYqiCamb%2FRahmi0xVt3zgoUs9rn%2FO3Uj1fHRRlOLPW8drUvM0y%2FdWjuoBPt7lDvRcaAd0y1XrDqlQdsOj%2FECbI%2F3Gzin9%2Blm7c2Vnwj94z6MDWmyGyWVa63zY9Va1TxxrpkaK3kDD%2B69pHFINbAwrj13xLiaPQ4HTiKgKyBIbSRjb1MgLaxjyv4ayjXADQ0efhAw%2BgD8wAESlewo6ZlZAO63IADnZ4I9TLrlc6gMEg3HOzqFzVokWUZ6mi%2B2GAxWS%2Ft5qeGaE4XpWf9mAMdOtKow%2BOGdnTh%2FUHddaHrBWc2hLzU9H9lZOXWiErLnmWeONvAA65ACgqJQjN8%2FcRWq5jEteRMMbfFnW3asS01uZbuVl%2BAeW73wpUb4dzPXks57KBtpK0BQqCr2%2FQuRT8kXDD4nwXMqvW%2BfRVP6w%2FrKiKs7zCXcIcYkSndixG8E4WS5VdCDnB7VK2GHuTcI6qMb5E6nafqp%2BsaED6I3CoA1JhJUu8YwSE1CdRh%2Bw7UZfxs0afBhBWobBe1GB7pwYvYeiF4eRXEwiDXG6oj5MOH2pL4GOqUB15egI5a9a2H40bYBl7YYtJNHOSYl887dTNqOP3xzShnTZXxhAUjZ3A3c70yuDroY93k7nArEJwBpTF7kOn3gskxhL%2BfEatLFcuSWVTOCmSf8YhCPbq6MIMCcdSPVOUOM1qOK4TUYTIUUvof%2B%2B3bG%2BpYkQlY1ijLpT4pIa0N0f58CHWlk1VVHJ%2BC9fBgrlp%2Bri4Ngmt2Tnt4FwXWYRPP1bcwkfQgS&X-Amz-Signature=aa512139bb90eca945bac26c468c0ca59d388e9c176aeb425162da0f332de7b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
