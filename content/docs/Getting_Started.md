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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54B7NO6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCmnonF87njQPHhzifijLR8AaRk92OPAlPXtvems7XlrQIgBDryXFP0rbmyWUFDX%2BkUHAscMgftcfiPPjtz9pqCBl0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEIlL%2BW%2BTsain19ZyrcA6LaUh7SV%2BW3j6XOEAI%2BrWkOQErv3icjo2RRLUyhb18iTt6%2FmOrAXEkK274B%2BFxSq7DofZUlm4u%2BwcEcflhITiDwbM1JYMVzxB8wlw%2BihS2y%2FDJCvPuOplBfiNGzv2DTOTELlkhrxTBLg241Cte0KKw%2FJBKPXqqrqPFT7YPxBuKhB6fJAXzQ1gTPYckyxfGe9cGvl%2FMldjWc5J6mSWtKhAm1HiFOt6jNacogonj11UDlCcs3sdMBRUxp0p6%2BC%2FCGXbOHUkgkT%2BBYb7Mn%2Fhj5x101wkTa1HMu0aHt8EyL2NQSwULf3Yvh4dS8moIQvbw7oUmhZ9d89z3J9Gmxc5%2F3QrirF%2FTRzx9SZsk%2FubLADZ8mlW97HOj0Vky%2FS6EQG3EnX0xNMGQe283O8%2BXjPHvK4cp1OthxV%2B8hFaVcrjHFupmw1ZxB4sh1K0k3Tq%2F6xI5tD2OqBTTYzq9vC28x2bYCgjYDtJFXbFAYlKhWVJY%2F6j70jor9lp5spW7vxJ5snG2WraU1Ob6ceiWWkCiegeEl3HSIPGBGqvhcNRWc1zQ28UPnnHHm3kQjTAXQ%2BrYxHoEV4Ep7m7%2F1XcVGjOmOyyYT8YknNvBqF17lG2jpREC5JWRSX%2Bs0Q9hQLlA7uUF5MN6P9cEGOqUBCZpovEuxen%2FAoP49mJl%2FC91T8X2uAZiiGgL%2FXb6LlEdkxI8peyMwLPFLh2BGPCtgvTorLAIpqVdE42Gk3vBhljBS0x2cbizGtgWCR0mQDBm0F%2Bqz30JVkdePzdb6lFJnxA99Y8D6IUsQ3GShzy%2FCvN95W6E9eraTPpdX6gApbmxXs6FHPEERKTVrGkA6wBCyh9LuH8GrTCtv4y2UHqIF1%2FlSCmXa&X-Amz-Signature=c8586eef4fa37efec39fcba7986fb635e32a94ab24a251f857c4e9747b6b3458&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54B7NO6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCmnonF87njQPHhzifijLR8AaRk92OPAlPXtvems7XlrQIgBDryXFP0rbmyWUFDX%2BkUHAscMgftcfiPPjtz9pqCBl0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEIlL%2BW%2BTsain19ZyrcA6LaUh7SV%2BW3j6XOEAI%2BrWkOQErv3icjo2RRLUyhb18iTt6%2FmOrAXEkK274B%2BFxSq7DofZUlm4u%2BwcEcflhITiDwbM1JYMVzxB8wlw%2BihS2y%2FDJCvPuOplBfiNGzv2DTOTELlkhrxTBLg241Cte0KKw%2FJBKPXqqrqPFT7YPxBuKhB6fJAXzQ1gTPYckyxfGe9cGvl%2FMldjWc5J6mSWtKhAm1HiFOt6jNacogonj11UDlCcs3sdMBRUxp0p6%2BC%2FCGXbOHUkgkT%2BBYb7Mn%2Fhj5x101wkTa1HMu0aHt8EyL2NQSwULf3Yvh4dS8moIQvbw7oUmhZ9d89z3J9Gmxc5%2F3QrirF%2FTRzx9SZsk%2FubLADZ8mlW97HOj0Vky%2FS6EQG3EnX0xNMGQe283O8%2BXjPHvK4cp1OthxV%2B8hFaVcrjHFupmw1ZxB4sh1K0k3Tq%2F6xI5tD2OqBTTYzq9vC28x2bYCgjYDtJFXbFAYlKhWVJY%2F6j70jor9lp5spW7vxJ5snG2WraU1Ob6ceiWWkCiegeEl3HSIPGBGqvhcNRWc1zQ28UPnnHHm3kQjTAXQ%2BrYxHoEV4Ep7m7%2F1XcVGjOmOyyYT8YknNvBqF17lG2jpREC5JWRSX%2Bs0Q9hQLlA7uUF5MN6P9cEGOqUBCZpovEuxen%2FAoP49mJl%2FC91T8X2uAZiiGgL%2FXb6LlEdkxI8peyMwLPFLh2BGPCtgvTorLAIpqVdE42Gk3vBhljBS0x2cbizGtgWCR0mQDBm0F%2Bqz30JVkdePzdb6lFJnxA99Y8D6IUsQ3GShzy%2FCvN95W6E9eraTPpdX6gApbmxXs6FHPEERKTVrGkA6wBCyh9LuH8GrTCtv4y2UHqIF1%2FlSCmXa&X-Amz-Signature=8e46fb0c56d1d1ce66c9b0d3cde09ca6f179cf5fd71f0c85c8610253a3061644&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54B7NO6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCmnonF87njQPHhzifijLR8AaRk92OPAlPXtvems7XlrQIgBDryXFP0rbmyWUFDX%2BkUHAscMgftcfiPPjtz9pqCBl0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEIlL%2BW%2BTsain19ZyrcA6LaUh7SV%2BW3j6XOEAI%2BrWkOQErv3icjo2RRLUyhb18iTt6%2FmOrAXEkK274B%2BFxSq7DofZUlm4u%2BwcEcflhITiDwbM1JYMVzxB8wlw%2BihS2y%2FDJCvPuOplBfiNGzv2DTOTELlkhrxTBLg241Cte0KKw%2FJBKPXqqrqPFT7YPxBuKhB6fJAXzQ1gTPYckyxfGe9cGvl%2FMldjWc5J6mSWtKhAm1HiFOt6jNacogonj11UDlCcs3sdMBRUxp0p6%2BC%2FCGXbOHUkgkT%2BBYb7Mn%2Fhj5x101wkTa1HMu0aHt8EyL2NQSwULf3Yvh4dS8moIQvbw7oUmhZ9d89z3J9Gmxc5%2F3QrirF%2FTRzx9SZsk%2FubLADZ8mlW97HOj0Vky%2FS6EQG3EnX0xNMGQe283O8%2BXjPHvK4cp1OthxV%2B8hFaVcrjHFupmw1ZxB4sh1K0k3Tq%2F6xI5tD2OqBTTYzq9vC28x2bYCgjYDtJFXbFAYlKhWVJY%2F6j70jor9lp5spW7vxJ5snG2WraU1Ob6ceiWWkCiegeEl3HSIPGBGqvhcNRWc1zQ28UPnnHHm3kQjTAXQ%2BrYxHoEV4Ep7m7%2F1XcVGjOmOyyYT8YknNvBqF17lG2jpREC5JWRSX%2Bs0Q9hQLlA7uUF5MN6P9cEGOqUBCZpovEuxen%2FAoP49mJl%2FC91T8X2uAZiiGgL%2FXb6LlEdkxI8peyMwLPFLh2BGPCtgvTorLAIpqVdE42Gk3vBhljBS0x2cbizGtgWCR0mQDBm0F%2Bqz30JVkdePzdb6lFJnxA99Y8D6IUsQ3GShzy%2FCvN95W6E9eraTPpdX6gApbmxXs6FHPEERKTVrGkA6wBCyh9LuH8GrTCtv4y2UHqIF1%2FlSCmXa&X-Amz-Signature=ab8c5236e8017d7dbede1768fdede20a19aee83bbb5607d1bcf8980fe49b1403&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJLIKMT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBlFqz9kp1w76UzILsuG60VedEfQsjL96%2BNBehr6SErrAiEA%2F2RP8BhQCrpJBBqdy7sILMeKVC3vttJVX5Cj%2B2ILHYkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5hJX2S8fL4%2FAD%2BvircA%2BU3wyTWzUMeFkiU2IHMb6vCUO8IcJ34HYL3BTz54BkTPWo2XGser3acmY7GnCQ4CWx1%2F2mZLzzc0XcVo7h9Ec7svMrtCy8HwX%2BTBGTsBBBbrWsx08oyY%2FQ88dqYRli7sY6dxO%2B3GaN5VBtaPlFr0XqjgsMds7SPZLRGKL4SaLwDwfLwHvHBpB9HLcL5%2Fc5ZalEexB8t%2FCB%2F3Zpm5KWthRmcMMNOOvFvt5ExNAH07iRFaZ%2BD%2B4HaGaKd%2BSJNGQohoUVIM5VLqzmUGeOmx64uxVqtDS2aA0c06UPp9xkkLQd1CBk4nMglS0Iq3ZoDSGReq66%2FtiME8z6nMlN5sZk5Eca%2Fpm5v4E7Gd50DKRi0wgQwgRvXsPdxiC4A7mzEYi56AMch5LRgLYstsszU42WaoWDzjwEzpdiRH0s20wFKvvPUJTG9FD3wYzXnryw15OPi%2FqrMW27fUoF4%2F5%2FevxEkVpF51ncfoE5uSlCtzuhbdGvM%2F2mabceEQBm2WWQas5KY1uvecEIw2QLYgr8urKZ%2Bah7xSW2abE%2Bkj4tvMvqfzDZ2KOsaZ9kYcTn1XmbsOkEzM6TSRUBEoNEirWeutTEtEUoXhjvG5xXvlX0I4WMaCeE%2FQL6GavLxhgRr089NMLOP9cEGOqUB7TjRrQ%2B2bJCDst7cE2tga0KClxZapXGlU7Uf97u5ENVdHdJNsMmLa70cIijiYdDzoG3TskhvoTkSh99bmFIWNjJmGJwYMDBGD%2ByQ9yMEMMU55%2BNvzckL0wulca%2Bmu%2FIbidIZHJhfL0peHJfmNyv%2FTdHzOcYKgQ7h%2BTByVLv%2B3pG8kWX3R9%2FDM%2BS7fRTxx7mrP%2BwlxJh9cWGyae9oVnpCiopzsa0W&X-Amz-Signature=4220e790964fefb366f7354710d5bb4020e1e2ae49300e9d92b702d748b4e6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFFJGNT5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFULMDLGDJEWZ5IY7A42HqCLH%2BIneG%2BF%2F%2BvxL7920MRoAiEA3P4WWFGTxWzxDApYOcC8BZGXsd0j6yAyRJrOiVlzPUgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXtkgX7gfnAntztNircA1a6l%2B2Qjk8tAcrAZJnzJ4z7NzUGN8eQsy0MxxCgrXG6fWkPtDfEGR%2FzMrPZBj92R9MVbWa3gHcf9ASYGcFZTnKwOFNgumIDhZCzpaRDvzgFdu1WOKuvF7WbrtKEHOaCvoBCTd%2FZopDa85UCY1Ly%2FDlU88j8ddtk7Uz3pH3KDSko%2BOsIBlexoiA2BgLvVjgdyOIaDIG1gdYx1J6a4n7sWTzdpXPPps9nvDfAdnVdBofFurzA5TC4DHiZ7rpLFcVN871vKL1%2FOZOfsCh2SS0d5RmmFLUBC35sT%2Biub9k%2F8yH%2BTa30HFlYuf%2B5XUYq45H0NU80eTxFLa6Dz6pq0Ks0cgsLLPKtku04Bs%2FdGcQvbUuAHQeANHh4XgvHn1vgzaiRC4S3Dan00dQMhm4hoE%2B%2BvOQvnoqLJ6qODqA2bnvsxWuFfRJILFKfTPJ7%2Bh%2FRXEqX5zdB16TnE4CoLNyvaxzARao4I%2BzVZIBYQTLvRUfyEtwEyp8RrVxt2QaJo8FwAp%2B92p%2Bt0Mj533f34Fxd5R3O25MWElFhElT96Zv4pkD4WvSIibVy56WlI5PqQkor%2FFRkbeWIbBK8F2wSbHIfESGjpi9gRm96vniT6Gj618%2B8HqOpti7Hdq9Yk8wxdvsKMIiR9cEGOqUBWt%2FDgCteZT4D0Fi5Gtm8ckcq2nMfu9Hihr6V%2BGPPu%2FHxgT6aqUXfZoz2sULpNhi5HAibC5osE8i%2FihBs4oLQFKDkTQb%2BiNvm2QhLBLs%2B%2BCJ9%2BbotZkvqdEi9ThRJedzghXIDVGgQwPWtlNY5vDfQkF89CSKI3xkbz3fG9JsBFrAMMcWnA65aAoY66RnGeeOL77b0udUTnomgeuBtTVUKScgUuk%2Fw&X-Amz-Signature=d61e48f8baa88a8043ef96f2a5ec1dd4461e6f5ac36d1fe79d04da03b676839a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54B7NO6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCmnonF87njQPHhzifijLR8AaRk92OPAlPXtvems7XlrQIgBDryXFP0rbmyWUFDX%2BkUHAscMgftcfiPPjtz9pqCBl0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEIlL%2BW%2BTsain19ZyrcA6LaUh7SV%2BW3j6XOEAI%2BrWkOQErv3icjo2RRLUyhb18iTt6%2FmOrAXEkK274B%2BFxSq7DofZUlm4u%2BwcEcflhITiDwbM1JYMVzxB8wlw%2BihS2y%2FDJCvPuOplBfiNGzv2DTOTELlkhrxTBLg241Cte0KKw%2FJBKPXqqrqPFT7YPxBuKhB6fJAXzQ1gTPYckyxfGe9cGvl%2FMldjWc5J6mSWtKhAm1HiFOt6jNacogonj11UDlCcs3sdMBRUxp0p6%2BC%2FCGXbOHUkgkT%2BBYb7Mn%2Fhj5x101wkTa1HMu0aHt8EyL2NQSwULf3Yvh4dS8moIQvbw7oUmhZ9d89z3J9Gmxc5%2F3QrirF%2FTRzx9SZsk%2FubLADZ8mlW97HOj0Vky%2FS6EQG3EnX0xNMGQe283O8%2BXjPHvK4cp1OthxV%2B8hFaVcrjHFupmw1ZxB4sh1K0k3Tq%2F6xI5tD2OqBTTYzq9vC28x2bYCgjYDtJFXbFAYlKhWVJY%2F6j70jor9lp5spW7vxJ5snG2WraU1Ob6ceiWWkCiegeEl3HSIPGBGqvhcNRWc1zQ28UPnnHHm3kQjTAXQ%2BrYxHoEV4Ep7m7%2F1XcVGjOmOyyYT8YknNvBqF17lG2jpREC5JWRSX%2Bs0Q9hQLlA7uUF5MN6P9cEGOqUBCZpovEuxen%2FAoP49mJl%2FC91T8X2uAZiiGgL%2FXb6LlEdkxI8peyMwLPFLh2BGPCtgvTorLAIpqVdE42Gk3vBhljBS0x2cbizGtgWCR0mQDBm0F%2Bqz30JVkdePzdb6lFJnxA99Y8D6IUsQ3GShzy%2FCvN95W6E9eraTPpdX6gApbmxXs6FHPEERKTVrGkA6wBCyh9LuH8GrTCtv4y2UHqIF1%2FlSCmXa&X-Amz-Signature=cc765bfeea8ee60eac2d991b436a302b3933a151df95f829bddcd3affa0bceff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
