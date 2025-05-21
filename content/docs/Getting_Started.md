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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACVTI25%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDju7mDbE5kJbVr5a8WX7wBQryCe0sj4T8Vhge5qlPPgAIhAOKCHV5DJ28ccdNNrGFNnp3aoDULVFGnIsKmVD5teKPYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFlSpEi8oaXnACCoIq3APoJ%2BcKbL9ZcE8kVG5Oxh72tp9P6S44XknRHhj9yba8riq8eJ4w3GXpfhBHbri2nr31HpD%2BGbyPPI%2FwJ7gYl%2BcC1jm9RIfVmmBK5EVgIGzVTU1D4vTtVOGpxhw7zCN1NtQQ%2BDODmeFg%2FggT%2FcpD8qd0iKe1V88pkY3HHMVwFylT455MRUH2NQkRGAmJYXlafrIes97IcyffFv56NGDDt9OCGW6YmsSr%2Fpf3Ua3Z1gaAyZX08AnKfbIKZU427tPFhO41FslL0%2BEFXLyr6E2CHCrPTbfhAE%2B97xTU0Mdo%2F4vKx%2BdhTY7z%2BvuK2noLZ94k1tFQvo3QJss6H4qCWQGl%2FoB3QGasbRl1aAmSkPUw9Mg5hnTAngOEASfngz0W3taE5jYxZRDPA8uEZNtSNbLXNTYvMrTITE%2BLjfjCmzW5bDIlniKiMHussy%2Bn6we0E3YJxUeVFIGZEIHuSnlcyZxU7ZxyXQfD%2FuhWzSNLuC6cMtotg2PXJCdTtYCzx%2FID%2FIWY8zAv8cskJNblP5lVESl5FKj%2FjTkt%2FUpCogh6Pe5dmald0bNp9b3IUJqLxQMuniqBI2hfE%2FSMTnu%2B3sO72ggOTLtPVrSmAFtgh3unPKI%2FxhyA5%2FcPln1hLcWygs%2BB7TD1w7fBBjqkAVjX4uaThIzOr3epiklxK3vNWb%2FUIQAvquCEPzMisISMtBOmQoh%2Bog7Ukdx02a5u3GsO83PVF34OmqSlndVqRVWnKNZHP1a2NUpWTuEfY5wMFgzZiuxwyarabcNsaDkf0iFmHuBw4nEbcUSKYUdqomtl53v4XlR9lDgb%2BlWnvUA%2FXssEHoHzOebIKr2ZQg253DeE3D6nAUvhlN%2Bh4YdO7HcwFtXV&X-Amz-Signature=da67960dbb2aab404d655edb4447a6523b5f20ea0babab617578934dafe7bd12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACVTI25%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDju7mDbE5kJbVr5a8WX7wBQryCe0sj4T8Vhge5qlPPgAIhAOKCHV5DJ28ccdNNrGFNnp3aoDULVFGnIsKmVD5teKPYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFlSpEi8oaXnACCoIq3APoJ%2BcKbL9ZcE8kVG5Oxh72tp9P6S44XknRHhj9yba8riq8eJ4w3GXpfhBHbri2nr31HpD%2BGbyPPI%2FwJ7gYl%2BcC1jm9RIfVmmBK5EVgIGzVTU1D4vTtVOGpxhw7zCN1NtQQ%2BDODmeFg%2FggT%2FcpD8qd0iKe1V88pkY3HHMVwFylT455MRUH2NQkRGAmJYXlafrIes97IcyffFv56NGDDt9OCGW6YmsSr%2Fpf3Ua3Z1gaAyZX08AnKfbIKZU427tPFhO41FslL0%2BEFXLyr6E2CHCrPTbfhAE%2B97xTU0Mdo%2F4vKx%2BdhTY7z%2BvuK2noLZ94k1tFQvo3QJss6H4qCWQGl%2FoB3QGasbRl1aAmSkPUw9Mg5hnTAngOEASfngz0W3taE5jYxZRDPA8uEZNtSNbLXNTYvMrTITE%2BLjfjCmzW5bDIlniKiMHussy%2Bn6we0E3YJxUeVFIGZEIHuSnlcyZxU7ZxyXQfD%2FuhWzSNLuC6cMtotg2PXJCdTtYCzx%2FID%2FIWY8zAv8cskJNblP5lVESl5FKj%2FjTkt%2FUpCogh6Pe5dmald0bNp9b3IUJqLxQMuniqBI2hfE%2FSMTnu%2B3sO72ggOTLtPVrSmAFtgh3unPKI%2FxhyA5%2FcPln1hLcWygs%2BB7TD1w7fBBjqkAVjX4uaThIzOr3epiklxK3vNWb%2FUIQAvquCEPzMisISMtBOmQoh%2Bog7Ukdx02a5u3GsO83PVF34OmqSlndVqRVWnKNZHP1a2NUpWTuEfY5wMFgzZiuxwyarabcNsaDkf0iFmHuBw4nEbcUSKYUdqomtl53v4XlR9lDgb%2BlWnvUA%2FXssEHoHzOebIKr2ZQg253DeE3D6nAUvhlN%2Bh4YdO7HcwFtXV&X-Amz-Signature=09d51c25143a99fb87188815ca501d851624aa9fa64931fc76fed59bf6242a37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACVTI25%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDju7mDbE5kJbVr5a8WX7wBQryCe0sj4T8Vhge5qlPPgAIhAOKCHV5DJ28ccdNNrGFNnp3aoDULVFGnIsKmVD5teKPYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFlSpEi8oaXnACCoIq3APoJ%2BcKbL9ZcE8kVG5Oxh72tp9P6S44XknRHhj9yba8riq8eJ4w3GXpfhBHbri2nr31HpD%2BGbyPPI%2FwJ7gYl%2BcC1jm9RIfVmmBK5EVgIGzVTU1D4vTtVOGpxhw7zCN1NtQQ%2BDODmeFg%2FggT%2FcpD8qd0iKe1V88pkY3HHMVwFylT455MRUH2NQkRGAmJYXlafrIes97IcyffFv56NGDDt9OCGW6YmsSr%2Fpf3Ua3Z1gaAyZX08AnKfbIKZU427tPFhO41FslL0%2BEFXLyr6E2CHCrPTbfhAE%2B97xTU0Mdo%2F4vKx%2BdhTY7z%2BvuK2noLZ94k1tFQvo3QJss6H4qCWQGl%2FoB3QGasbRl1aAmSkPUw9Mg5hnTAngOEASfngz0W3taE5jYxZRDPA8uEZNtSNbLXNTYvMrTITE%2BLjfjCmzW5bDIlniKiMHussy%2Bn6we0E3YJxUeVFIGZEIHuSnlcyZxU7ZxyXQfD%2FuhWzSNLuC6cMtotg2PXJCdTtYCzx%2FID%2FIWY8zAv8cskJNblP5lVESl5FKj%2FjTkt%2FUpCogh6Pe5dmald0bNp9b3IUJqLxQMuniqBI2hfE%2FSMTnu%2B3sO72ggOTLtPVrSmAFtgh3unPKI%2FxhyA5%2FcPln1hLcWygs%2BB7TD1w7fBBjqkAVjX4uaThIzOr3epiklxK3vNWb%2FUIQAvquCEPzMisISMtBOmQoh%2Bog7Ukdx02a5u3GsO83PVF34OmqSlndVqRVWnKNZHP1a2NUpWTuEfY5wMFgzZiuxwyarabcNsaDkf0iFmHuBw4nEbcUSKYUdqomtl53v4XlR9lDgb%2BlWnvUA%2FXssEHoHzOebIKr2ZQg253DeE3D6nAUvhlN%2Bh4YdO7HcwFtXV&X-Amz-Signature=7b9ac587fe809b67be38952d6ffe738bd8c3fbf8fd5efe41513ea539343d3db3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3S547A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCw2wDllFzDfFLmFkbqtlaIonZxhgbio63rTzJ99qDEmwIgf75jOHdDZ9%2FlpnpD9BCq1xUsqQ9v65Eqeuln7pg2MWgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FoVQj0aRtetqOlOCrcA77PLtKsEAaZQWm8GFyPsSwL3mSj68fQHfOVb5kEVc80ojDVtFo8QqiargkLmr7PI6%2FMds%2B1jXivBV1ay9YEXVHPvfL3sdKRbBs4g8ks%2BUbUkzYiErv2Bkvs6KyXyVQ0tqzWLMFkLdWEe6Z613lNyqNR4OfcQh%2Ba20ikISlZdv9Ew%2BwyUOJBtd2oBshQ4vNdXA%2BXa4D2l6rWAuyJEAmD4fybE4C2nA8hyw0dEnLFH1ymLGLIjhKVSHWq5ix%2FLo04efYItqWgvoeBGLDV1PqL9kHnquheOvKMZZOwY%2By3x2kbYT4dCB2QvapC47uf3eyuErQI8I7z%2F%2FvJ3cTiYpTmIC5Uyxmp9KVI5M9EspupqcB9ItQNQ7p4CLqdwvV0c9k4DbGdzYDPgk6KiTR7RNb9fFOYQxrdDLYcwkl6y2Cm7jGzpYQHx34u4ukXtrw7XfUNCodpJVhvyKbxhef1NNzNJa0v5hEBrI0SFSrt9UmmTZC9Y1nZ5Dtf1dJdNKfITwCIyi0AX9wMrbaSdln%2B51R%2FcK9RJFbRNn1XIAjVj9icroJFMWrOMj3QiIIMWZlmM69ZOR%2FcSOkVm%2FZ8%2BIMtaKfWbjyLexqplXPq6QbWYHfOWK1gSubXVmo5EFL7D0fkMIXEt8EGOqUBAdICcHw%2F9bXIUfMjW5n29q%2FlKflY54rcrwjoXfGK3WOAP%2BClBXe7yKzCN0reOX%2FazNLAW988lsGup3wvh42E4XAJecM2EMMwbtpFcSdB8JFGl5PUJ6OAcOCY9QKB4YWJllRjU5GSbcNfL3d11SLnWB9yqBlpXtsM1ldSZUua0kPtQfZ15R4sByJHapcn8xw6xYbVvII6o5lKUSsg%2BJe5rO%2Bl7BuA&X-Amz-Signature=41e8b86ab895a17c22ddac25d7591e9009ee740f3c472cd799888447ff5802a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMTGMLJB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC9lS%2F1li8Z3%2FV2A2rhkAM3ri7yknYmjiHhuJWQ3wxTbAIhANgYInKU3MEyVAK97NntHLZEcdA6qfgrn2Hhy8IbKD6DKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxs0weQSjjHHyFTcQq3AO6vBL66kTJUfp0ALd72AsPWTTqNgY0iu6S6XQoPrKvtyPkxXSL5J0Lc7v6mC%2FZ7q7uI3mbvGtuBS3UJ7nywNJhSJ%2BKH0EpckL9bjcnrq5tBRdRKwEi9E5fiWCqTW%2FashqWQdpHAj4at5wPYNzY48lZGccAv7cobh4ugYk0fDPmcp0FRm8pcdNRruhFyrbvdoPFA8IGR5FjqC0lfAsEO26C6ujlq4oTYfr946BMDCh6d9zkUgAYx58QmFZKq%2FISP%2FzaDnFVpgnehbcrfKWK0SmHfC6NJPURCh3VQ6NeefOSjq64JDcRK%2BsFY2ICBUWFc6TiFF3Tw1KMx3abKmyniD7yRkLvdIxDaFoH3DY7fR0w04zYEeNA4mbYIMUYdShO%2BH%2BzyCmyMi0%2Bum9wjKagNmQVd3Zt7c5GlPdIKT1gs%2BW61S14hH91yZmLCMmhdr6YWgPdsF5hRfgmgs5k0yJs7WKkKPszgjCzZ%2FiW%2Bt8mAJLM%2FbeQYsyayYwZNpWiDVaMYz5Tz3HfrhpsV8TKRoSP4TuZ%2FuFnxbDhuXNTLWd4rDeNil3zUhLgF%2F5ylHLqsaZwnEHdClaRSL%2BwBi7M1GYJja7VVlXmIXskwXt1udVTY1ocu4vloTLuvxEvpPw0YDCyy7fBBjqkAZbBJbvP26th5YojAVURLiBNhrDY5omwRBh0QDCXcLCSrO5BH8i2wRku88WnkUtWn7QwiNY3ET%2Fz3La%2F6x6xbNWbxePzgwC3DNyNq7ZSbqkJZi67MS0G8YYUrDgO%2BKvJGahB9m1nK%2BIgUAgzOnwLYCoMdSVTDR2TZEz%2B6eiestW%2BzRIAGFpi8N%2BVqoP%2BQunatNn3TraavXV4jcWodl%2F%2Bd8%2B0iuxH&X-Amz-Signature=3f2a43020e79f50962cc1a8be016e8edf87a8aa49e4a36d4d1a3d65144216da9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACVTI25%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDju7mDbE5kJbVr5a8WX7wBQryCe0sj4T8Vhge5qlPPgAIhAOKCHV5DJ28ccdNNrGFNnp3aoDULVFGnIsKmVD5teKPYKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFlSpEi8oaXnACCoIq3APoJ%2BcKbL9ZcE8kVG5Oxh72tp9P6S44XknRHhj9yba8riq8eJ4w3GXpfhBHbri2nr31HpD%2BGbyPPI%2FwJ7gYl%2BcC1jm9RIfVmmBK5EVgIGzVTU1D4vTtVOGpxhw7zCN1NtQQ%2BDODmeFg%2FggT%2FcpD8qd0iKe1V88pkY3HHMVwFylT455MRUH2NQkRGAmJYXlafrIes97IcyffFv56NGDDt9OCGW6YmsSr%2Fpf3Ua3Z1gaAyZX08AnKfbIKZU427tPFhO41FslL0%2BEFXLyr6E2CHCrPTbfhAE%2B97xTU0Mdo%2F4vKx%2BdhTY7z%2BvuK2noLZ94k1tFQvo3QJss6H4qCWQGl%2FoB3QGasbRl1aAmSkPUw9Mg5hnTAngOEASfngz0W3taE5jYxZRDPA8uEZNtSNbLXNTYvMrTITE%2BLjfjCmzW5bDIlniKiMHussy%2Bn6we0E3YJxUeVFIGZEIHuSnlcyZxU7ZxyXQfD%2FuhWzSNLuC6cMtotg2PXJCdTtYCzx%2FID%2FIWY8zAv8cskJNblP5lVESl5FKj%2FjTkt%2FUpCogh6Pe5dmald0bNp9b3IUJqLxQMuniqBI2hfE%2FSMTnu%2B3sO72ggOTLtPVrSmAFtgh3unPKI%2FxhyA5%2FcPln1hLcWygs%2BB7TD1w7fBBjqkAVjX4uaThIzOr3epiklxK3vNWb%2FUIQAvquCEPzMisISMtBOmQoh%2Bog7Ukdx02a5u3GsO83PVF34OmqSlndVqRVWnKNZHP1a2NUpWTuEfY5wMFgzZiuxwyarabcNsaDkf0iFmHuBw4nEbcUSKYUdqomtl53v4XlR9lDgb%2BlWnvUA%2FXssEHoHzOebIKr2ZQg253DeE3D6nAUvhlN%2Bh4YdO7HcwFtXV&X-Amz-Signature=c0e9c68ae16e07a0dfd813ff0b2c62796be9fd5f1b8400c0ea47e05ae3b54edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
