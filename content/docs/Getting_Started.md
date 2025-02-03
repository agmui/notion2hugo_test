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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW77VOT2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCGBdSRP%2FDBBsXKVHuX5XqO8vuGJzFY2sOTuuDdg6Bp0QIgd4iCoV5d35%2FpJnMxKO1ivlUN%2FF9Q3Zt5UBSkoRTiZ5sq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEKSSdqaK%2FCsaCW1SircA26485nRgOvdxLFz%2FgOW4UhFyilEy4gbr6QbeY9qcDM8fub0EqkPxsNKdwI25UIenYTB716igri77LNPHKyJGts8%2F9arBiUHswAbMWSZjfA5QVyC4IG6dPoH6g7mH4ae%2FavJf03NR1fUPfuWlDKZQpOuwag7x%2BzzpS7zCjcQIBj%2F6GDMFSJ68Kfk%2FpFPwm%2B%2F0zhjHfZgo7NZVFEsztT94O97FNcO1jnQ6neJ3uwEib%2FpVszEKoyd04cbwgedifOCdDNR6z2%2Bh2ghm%2FfQbbc%2BS7a8A3%2FP9X3xnkUmsx0twR1E%2FZ7UHyuLictSjBEdodTTGoA8nGyYmDmqdqHchBKPtH3cM6O%2B9g0bn12BtsJeMJ2gffoNCVjPK02L1LWH4VWR8hWwtT8vILBN%2BCi5rAUB2nu68STyrhFfmvbANWa%2BtItLTbsbvzzunzLE7wJcowW0w5UH5s3DPZWS5H06vhPjU4XezUmXs29hy6DlBMKfoVlK4ZRrkxCPCKmMGSFFvMzhL7kQBGEYS5G6%2FAnwtoCTQeYHQtRqFLA39X5P4leIxg5vE%2BAToKqK6Tkt8RJeM8JX5vROCKMMg35ypfFmKTkdVdevhyofNYLGhC%2F0LjwBOZsyWMcvZE%2FvTHdRfAaIML2%2FhL0GOqUBq3GjdLX9CGbXpCngFp%2BrCiDFtf9mdBwYZ8ymrcH2UEgsAX9hVZuVTkF4fbOVJREC3J6nbPCLSAUOVtZGm8SGfO1u0Vk2k9wpOyMt4taGja1NrXqSHrGCDViFDDKWRT5l9oAzmNOUvxO5Wp4c5CuTiqFPOtuAX44r%2BziQJgg0lodMqRmjRswsMHUmut%2FtLmE7TFPnVhQTp2ymFyXEAtVjQoK%2F%2BzjG&X-Amz-Signature=7f9ca2e37dcaca7d1d0ec1cfc58391f6dce35bab5ddbfa3ad0d568090e01b755&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW77VOT2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCGBdSRP%2FDBBsXKVHuX5XqO8vuGJzFY2sOTuuDdg6Bp0QIgd4iCoV5d35%2FpJnMxKO1ivlUN%2FF9Q3Zt5UBSkoRTiZ5sq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEKSSdqaK%2FCsaCW1SircA26485nRgOvdxLFz%2FgOW4UhFyilEy4gbr6QbeY9qcDM8fub0EqkPxsNKdwI25UIenYTB716igri77LNPHKyJGts8%2F9arBiUHswAbMWSZjfA5QVyC4IG6dPoH6g7mH4ae%2FavJf03NR1fUPfuWlDKZQpOuwag7x%2BzzpS7zCjcQIBj%2F6GDMFSJ68Kfk%2FpFPwm%2B%2F0zhjHfZgo7NZVFEsztT94O97FNcO1jnQ6neJ3uwEib%2FpVszEKoyd04cbwgedifOCdDNR6z2%2Bh2ghm%2FfQbbc%2BS7a8A3%2FP9X3xnkUmsx0twR1E%2FZ7UHyuLictSjBEdodTTGoA8nGyYmDmqdqHchBKPtH3cM6O%2B9g0bn12BtsJeMJ2gffoNCVjPK02L1LWH4VWR8hWwtT8vILBN%2BCi5rAUB2nu68STyrhFfmvbANWa%2BtItLTbsbvzzunzLE7wJcowW0w5UH5s3DPZWS5H06vhPjU4XezUmXs29hy6DlBMKfoVlK4ZRrkxCPCKmMGSFFvMzhL7kQBGEYS5G6%2FAnwtoCTQeYHQtRqFLA39X5P4leIxg5vE%2BAToKqK6Tkt8RJeM8JX5vROCKMMg35ypfFmKTkdVdevhyofNYLGhC%2F0LjwBOZsyWMcvZE%2FvTHdRfAaIML2%2FhL0GOqUBq3GjdLX9CGbXpCngFp%2BrCiDFtf9mdBwYZ8ymrcH2UEgsAX9hVZuVTkF4fbOVJREC3J6nbPCLSAUOVtZGm8SGfO1u0Vk2k9wpOyMt4taGja1NrXqSHrGCDViFDDKWRT5l9oAzmNOUvxO5Wp4c5CuTiqFPOtuAX44r%2BziQJgg0lodMqRmjRswsMHUmut%2FtLmE7TFPnVhQTp2ymFyXEAtVjQoK%2F%2BzjG&X-Amz-Signature=ab03f7f1e0e53398f0784a8ebd3175f9c3a29a6f28182e1f371c827e04ae3d38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTVBZLH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHpPtQqTcSz1zwXpF41r3eoWNjWmKdNEqf7aff29WTWLAiA4LfOp3RkbETis38Hno3p5VcukCzL0BV8R3GDmSi%2Br7ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM3r%2FodM4Zd4s6%2FHSRKtwDUGjJi0rvH5nHy0ZHmpBO6L5AsynVK6ia%2FaaM%2FIDYyiDtbFWnu4VKBawgyteOOaS%2FE%2B2LSmtNTSLeJ23UM4IsU0b7Yb9uqDrfHyCLSbPgBwkAPKXMrOm815um%2BDwVCzh%2FV%2BxrMef9xY812w5mkeMgkXVh8hdnSe90yGMiQQHTVW3fZf3PQjhlTPGjHObvHe06KuZwEcx95nzleQj8gsWTkr4hDmX9Jz%2FRuKfZNYdwYZQGvdQPf62ne9T1QpGh7vfGEtwxe3%2FOBP3j%2FNx9O1Ff6FJBIQ6kgc4z77qj92UxR1L9gg7LrB%2FymqdjPAiy8V%2B%2BnbhXFah2udPlSsg6GbUIe6ImIklMk1tbbqkRXgN1LTaIwbnXnTd%2BV%2BNHk41nY%2BKM3s3Z8wH3K4QJXkPny5r59dM%2Bi6D6MYqQ64qH3OQ6IReZ4CkjhZnytVwBeDSlTeCqnlLMnzfIjTdx9nfsj8rdkDsJNmq8oi1t%2FSyXKUxiCKw22eCeYH%2BWxgoL2Id8Kv5JOpGMjPDrnZLlCHB%2Fjro98AZJHlS9Q50qy36fBfJJeVbjYhjayuxYTfwfIiFFKq71%2F8PbrCGJ7ExPAnt5%2BjGNUSm5XKQkub8uGSOUSLqiJnHn0mX%2F2uqKsgAQVtswmMCEvQY6pgHaoKYTFk5g%2BgOqR9TBBejiu1XXG8%2FgEEOs87vAHqhQREv8a0SD%2BfY3MbtpdpyeBLrQ7aeE3kAEgR%2FUHknbO28kZMcqR9BW2jqkqQp5Kvkec4iepjjYZKW%2F0lodkhh8OtRntNeAYUFACkwUHqDthZDqjAhfspmWPxtX2lHBM3LB03RWBQGV5beEgxXHRXp%2F6iTyMlCWwnola6MD0tz9cNLbUILtN17j&X-Amz-Signature=606bdcfe317f184547f8ebd5e9a89864dd65c66fbe417a51d44b8addddcc4e18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G63SVGJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCxEYsm7AswSAm7OBSwChTVfZxKT3EUed6yFXl%2B4ex6pQIhAMjRv9C8w9wb3XFXA7RiHnfUwC0wteGzrMgYjNn8bqc1Kv8DCB0QABoMNjM3NDIzMTgzODA1Igyrq%2BpqaAQyaJWClFsq3APSAW7EER2HIctMD%2FNIYSY9uVsEWfFAE3UOgS8X8hKOg0oPHanA1NN67pGuge1I9%2BOhu4lZ%2FhqCA9FDTW8l8Hbpf7AmYuyfVke5ZXFlo88V16Jgp7IV1LHLATrX9dW0QyFIW5%2FbpBoTuyl5EuNTyrcaVDERdumX7xcKjsoh88c813Equia9Svz5K6zea2nU2b%2FryCQ9nH6yd2i%2BguUqWiJ77F6STTmz06l4MOHlr8kIKxzlOja1WYk3qy4ByjubjN4Qs9C3N8aihXc8PcM7OXdW5JOVil0S1AWsxve4YJJKPbjt54BUWQzB0jLVY1WT9wGIcoW16LblGUVPaTmDhoXznyLLf99oQ8K0lyVedOUI5psjQkeE%2FEzSwWbMwO4bSzSUuRpsKatFv0xw6x6pw79bi4mambQdiFOLmMcHPl%2FB5F%2BdBgDsaqHgByKCErEOrjnTe3ivlcxd7VIaacCmdWEcnzKvDl2%2FplGDUVbeOgAHTmUsjUwa7p5Y5Mj0bv%2FwhZEQHNUGfJjk1%2FvsVskmi78xTY6ws%2BUPNAtXQY4yK4kPAM3hFhZPQZt5%2FW%2BOs7zfCMKXVTLuwlHq8F0R392alNax%2Fre7nOmMTCUlu8zUypgKxBqr%2FppsOfMQJAesqTDXv4S9BjqkAQdD4bsT57XOGdFqYMOAzZadHQ4%2FJWQIok1xnJ4KJzPDLMecsiq%2FfQHuD0hbsTX0wstBDk5Ok%2F%2FecbpidtHjiHq2DNlu7LOQBZflSxTznXX3qC39HdsV734h3l%2FacGUHmjKSLgW%2BPLl%2F887hb2oVKDWb38B5ow4IhH4hR%2FJ7Dc6DLXy3kFgEuxo4nmYuGnL%2FXIz8jeedW%2FP3jpIPTthIglRvkM%2BN&X-Amz-Signature=112ddb13382b6506818e0ce5bf0134c0f6c6dc63e6da0abc77488a3ab2810f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW77VOT2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCGBdSRP%2FDBBsXKVHuX5XqO8vuGJzFY2sOTuuDdg6Bp0QIgd4iCoV5d35%2FpJnMxKO1ivlUN%2FF9Q3Zt5UBSkoRTiZ5sq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEKSSdqaK%2FCsaCW1SircA26485nRgOvdxLFz%2FgOW4UhFyilEy4gbr6QbeY9qcDM8fub0EqkPxsNKdwI25UIenYTB716igri77LNPHKyJGts8%2F9arBiUHswAbMWSZjfA5QVyC4IG6dPoH6g7mH4ae%2FavJf03NR1fUPfuWlDKZQpOuwag7x%2BzzpS7zCjcQIBj%2F6GDMFSJ68Kfk%2FpFPwm%2B%2F0zhjHfZgo7NZVFEsztT94O97FNcO1jnQ6neJ3uwEib%2FpVszEKoyd04cbwgedifOCdDNR6z2%2Bh2ghm%2FfQbbc%2BS7a8A3%2FP9X3xnkUmsx0twR1E%2FZ7UHyuLictSjBEdodTTGoA8nGyYmDmqdqHchBKPtH3cM6O%2B9g0bn12BtsJeMJ2gffoNCVjPK02L1LWH4VWR8hWwtT8vILBN%2BCi5rAUB2nu68STyrhFfmvbANWa%2BtItLTbsbvzzunzLE7wJcowW0w5UH5s3DPZWS5H06vhPjU4XezUmXs29hy6DlBMKfoVlK4ZRrkxCPCKmMGSFFvMzhL7kQBGEYS5G6%2FAnwtoCTQeYHQtRqFLA39X5P4leIxg5vE%2BAToKqK6Tkt8RJeM8JX5vROCKMMg35ypfFmKTkdVdevhyofNYLGhC%2F0LjwBOZsyWMcvZE%2FvTHdRfAaIML2%2FhL0GOqUBq3GjdLX9CGbXpCngFp%2BrCiDFtf9mdBwYZ8ymrcH2UEgsAX9hVZuVTkF4fbOVJREC3J6nbPCLSAUOVtZGm8SGfO1u0Vk2k9wpOyMt4taGja1NrXqSHrGCDViFDDKWRT5l9oAzmNOUvxO5Wp4c5CuTiqFPOtuAX44r%2BziQJgg0lodMqRmjRswsMHUmut%2FtLmE7TFPnVhQTp2ymFyXEAtVjQoK%2F%2BzjG&X-Amz-Signature=f34fc0d2ce9681cdae2476198f1321064d3814fe139394987c160955456175ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
