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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO23JLO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID0aGz%2FZd1qFf72d3NTUeI9VlpDbN4DKVNPHZAxvaXuVAiAFhCAoqCM%2FB2uyqZWIoPJD6%2FuT1TRMFpNUU8BsrmcI0yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMUKDqi4vBigzE6gUkKtwDqcfimAZEPhpMvNpcI4k9zYBEqHnoLPi3eYFcZVAmJFGC0bt8oOnRG416ILXVBRwS3YU12Dzbc6bZEKL8YRw0eoW8AoWA7qLWVCZlVetokUpk7dilXrnZkqzsb%2FeeLLUMgg0vapJ5latQcIQtv5zfY%2B42zBgx56%2FGUmjkpG9ntMk3bAkgKS%2FiTX4izGaxb6jEQDcbl7kE9BQ010gt5tAN7xcAyDBP7reRSCh%2Fb6lHiCCJ2BVP4GmBnU55DhXTaGpS7LG6tMnRdYJBqltJbby2nxLUatWcbRuDaeRs8%2FF7OfBzD6RGvwYVad9yRHoww6yhHrk4QXR%2BWRXP6zldN2iWyzGuYhVdLugKUXBY9vI8pVrR0f2o%2FcplAUjSFjdy%2BoAl1Y1NPjFrzTOe1nJZJ9iqkct%2FOF8APD5nYMv%2FWo5kMyShLiCh1B%2BVppGL3iLHHiC1Vg8RDQaLJR8U%2BpXk8n6oHBNBTrY2fopYzrRS1sX15o5Kwai1I%2F0SFrk16hkw6QdbwbonBMkm9bu8JVKVbu7mD5IxmfXHFIT%2BL6WBCFEcCUTUc5rGlLnfnxRutWffmfLB8zjYZonu34pWgeSnTQeGeIQ4rFxaoxkW%2BCtyRNvj2lD10ejFWia%2FfeZRAsQwjp%2BgvwY6pgEC8SnyoktsYaDMObiu%2BA%2Bg%2BrXxTWCYU%2BURrnprtSlImmv75FahK1faQdQPjTVR%2BEdt8Q83I%2BCUquNptVc4h%2BmG4y7Ro0lqfDIk%2BkemoJyIDxlk1VeygRIFEZVjAYlNCOctuALSfc%2BUrK95X6AKQxQc%2FFVoUbv76THStIQen%2Fxqnv2enlKSp0iECRVeQnPvjda6EVsjPQb5O1BdmHh6dD91TncTg2xC&X-Amz-Signature=ed490b9b17bbf4ec9df51f710829aaf7dca851cf3dcf6787353a9eaba08e604d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO23JLO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID0aGz%2FZd1qFf72d3NTUeI9VlpDbN4DKVNPHZAxvaXuVAiAFhCAoqCM%2FB2uyqZWIoPJD6%2FuT1TRMFpNUU8BsrmcI0yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMUKDqi4vBigzE6gUkKtwDqcfimAZEPhpMvNpcI4k9zYBEqHnoLPi3eYFcZVAmJFGC0bt8oOnRG416ILXVBRwS3YU12Dzbc6bZEKL8YRw0eoW8AoWA7qLWVCZlVetokUpk7dilXrnZkqzsb%2FeeLLUMgg0vapJ5latQcIQtv5zfY%2B42zBgx56%2FGUmjkpG9ntMk3bAkgKS%2FiTX4izGaxb6jEQDcbl7kE9BQ010gt5tAN7xcAyDBP7reRSCh%2Fb6lHiCCJ2BVP4GmBnU55DhXTaGpS7LG6tMnRdYJBqltJbby2nxLUatWcbRuDaeRs8%2FF7OfBzD6RGvwYVad9yRHoww6yhHrk4QXR%2BWRXP6zldN2iWyzGuYhVdLugKUXBY9vI8pVrR0f2o%2FcplAUjSFjdy%2BoAl1Y1NPjFrzTOe1nJZJ9iqkct%2FOF8APD5nYMv%2FWo5kMyShLiCh1B%2BVppGL3iLHHiC1Vg8RDQaLJR8U%2BpXk8n6oHBNBTrY2fopYzrRS1sX15o5Kwai1I%2F0SFrk16hkw6QdbwbonBMkm9bu8JVKVbu7mD5IxmfXHFIT%2BL6WBCFEcCUTUc5rGlLnfnxRutWffmfLB8zjYZonu34pWgeSnTQeGeIQ4rFxaoxkW%2BCtyRNvj2lD10ejFWia%2FfeZRAsQwjp%2BgvwY6pgEC8SnyoktsYaDMObiu%2BA%2Bg%2BrXxTWCYU%2BURrnprtSlImmv75FahK1faQdQPjTVR%2BEdt8Q83I%2BCUquNptVc4h%2BmG4y7Ro0lqfDIk%2BkemoJyIDxlk1VeygRIFEZVjAYlNCOctuALSfc%2BUrK95X6AKQxQc%2FFVoUbv76THStIQen%2Fxqnv2enlKSp0iECRVeQnPvjda6EVsjPQb5O1BdmHh6dD91TncTg2xC&X-Amz-Signature=e52df19d167d306db3fbc82a1d53216611add8e174bf5aa64cee424b6656a111&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHOG4TR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDKFk%2FU7Q0vW53R55FG9mzCncazmfGMooMafqHZ0i39wAiEAjl3SKgxEtBOFqs2Yy7Z4QLxNYdJEMc7SQWa11Hfgl4sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDFHuIJ9z2QSrK%2B8sSrcAxKbj9wo8bE6exGEhN1dc401kZ5a6lH8yNnsGvdfV8VvZAu%2FXpOhA4qoIlQ6hf8pDN3ArWjTgjoFzjUZGnSPIQNnEo%2Brb6ZHwdkf2yVkHeYRkzteLnmVUKwunkmebIjVNLvpzm4v9dS1F871PAfPkWplVB8jG7wfemIvlnWOT9HF%2FgcudxtQfEf51jk%2FjocRhEJ0Plv35wx8RhpPQw16xkF63T0Oz%2FUrc%2Bh6O4Ei6UFv%2BWmAOdlgC0W2EFwSeUTtjPlKpwjOtLp046a5vOKdCiycLqS2CzgHle3NJLApBLQuGpY43%2FSHdGN%2BHwbEBIThlvYmLZYnIYGKW6E2cc2yeDDjwgMexTXSQN8WyEwjXo%2BIrV8bmAHMyhXgfPleHCe%2BgMf87Leqx9BHw5hmgr%2FYiwbtnpFH4m%2BZ6YbjWxzYb%2Bef9n5bt0vTudkddgaHT%2BbEQ4FfhtVNzaqIB4inFi%2Fgjs73NQOvH9Uw549CUqEarT6lu7k74%2FbTKM6FnR2czOezAwJ5HaMF4Ogs2J5%2FiRakgocw2wVLmyh5QmEyEMJaSPMJXSVzw7rlgFyfU9lJBGym0nPpwigzOYUhGQ6NIBwTDPeJqasemnFguCxqqMITGZVBdev%2Bk0c%2F6wszIJHVML2foL8GOqUBK2sRHB3579Ga86BcOrtPOJi73hvnE352RT4NKfvtaodHQqkoXRU67fhkA9oP%2B4plbMpZdrZS9sWApVX38j3dk%2BmmxcHHZKztpQB6f%2BM5DdeI4v6eQF%2FaohUzsxCI%2BERtIuVITZmvFGz5yJVHx8irGi7phCEfRx2LIJ5AmiBdNCKyk9sEuk7rVk4TRE%2FnG7WHm6WV6iNMQ%2BosDzuhCIgRZCYiCJt9&X-Amz-Signature=1f3a7c2a78f8a5fb96fbf6bb3190520c63946e5e7db53ac43ad77e400f7e25b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2MHMYR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGUvgFPp%2BGMwDlCAyRB1BPeR20JxWzwVE7tXeULSBRL9AiEAhd2F34xUnRiF9PNw7xrKseIcuQilFZ0L7sdL1QPhshwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLWkrxtoGQKNbSwopyrcA5mrO7p%2Bhd34%2BhJpn5BeZKKfr%2FG%2BiDUbdHjTZxr3cAjJKsNvll5zyc0W%2FvgyFx9Evg56jX%2BN4Tc%2FGOYWevlhWEQ%2FuK4aEbQFhQZ7gYPGgwv41PcKjckDqLPZ9li8sY7vF7Tg7q93rRI%2F2dAcBUy6qaW3g2up6Q%2BIM6T9YOQ3bOpfwl33E%2Bd4bqzlu9LYF5EjvOXbYS66FJ2YWrsRCayPddxN%2Fkd33hIHbhScN3NIMpD9vFOKADSCaVdo7DhFIrxc3odfnI4jtDxu3cNbyH%2BFod0itoPwmaQaZnXoR56B86G2E0TWSTy4IhH07wGSFQxYNVTIaTCBW8hu6s9xOCKl1H65l%2FIgPL6mKGzyGmRAjXun8XAyUSOpwhkuiVhRZZuXNC4H8M2R2d%2Boi4o7aCzGYzILUZ26bznyYYfmwrsJkPehTsbD%2FSUkGgfeWIutDNA8Rhfv7MY3wXB2qtwUc%2FOOXwYEhp2xsk1iRENYr0MvZhI%2ButwHQtryVpm6fOHIKBYTUI3goNPg9YedffCRIw5j%2FtT0BDjLZZMPBE3msadCG2AA%2FT%2FFA4JRzIvkfIgzWyHiMbvY6Y0l1jPf2Sb%2BmFBv%2Fjvuobl7J34VyKsfkDW1OmOzwAM6TQPTFDho3EY5MPqfoL8GOqUBjY3XgvNfrVmnmxUx6UhTqrIMx6qCr1bwiY5M%2FkYAbQL%2FJCE1aNzUkelw26OZoHuIzd9%2BXKGlDF7t1KPTlBM3PEWpzaZ87AZvIuTmhk8Tg457uj1VjpUUuJu7C%2Fy22QWrgswWPxbJfU3zDJ7TyjKeJdmE2WTU5R3Mqk%2BV8t7KRIMgwWNHGy2BzIijeq%2Bhys0lJ6J1FSv6%2BUunHo4YixKDvQSni%2Fu0&X-Amz-Signature=d0ed1c816c3f38ec53f67d651fb331bff6de8269fb37b7b340a513e63ccafa35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO23JLO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID0aGz%2FZd1qFf72d3NTUeI9VlpDbN4DKVNPHZAxvaXuVAiAFhCAoqCM%2FB2uyqZWIoPJD6%2FuT1TRMFpNUU8BsrmcI0yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMUKDqi4vBigzE6gUkKtwDqcfimAZEPhpMvNpcI4k9zYBEqHnoLPi3eYFcZVAmJFGC0bt8oOnRG416ILXVBRwS3YU12Dzbc6bZEKL8YRw0eoW8AoWA7qLWVCZlVetokUpk7dilXrnZkqzsb%2FeeLLUMgg0vapJ5latQcIQtv5zfY%2B42zBgx56%2FGUmjkpG9ntMk3bAkgKS%2FiTX4izGaxb6jEQDcbl7kE9BQ010gt5tAN7xcAyDBP7reRSCh%2Fb6lHiCCJ2BVP4GmBnU55DhXTaGpS7LG6tMnRdYJBqltJbby2nxLUatWcbRuDaeRs8%2FF7OfBzD6RGvwYVad9yRHoww6yhHrk4QXR%2BWRXP6zldN2iWyzGuYhVdLugKUXBY9vI8pVrR0f2o%2FcplAUjSFjdy%2BoAl1Y1NPjFrzTOe1nJZJ9iqkct%2FOF8APD5nYMv%2FWo5kMyShLiCh1B%2BVppGL3iLHHiC1Vg8RDQaLJR8U%2BpXk8n6oHBNBTrY2fopYzrRS1sX15o5Kwai1I%2F0SFrk16hkw6QdbwbonBMkm9bu8JVKVbu7mD5IxmfXHFIT%2BL6WBCFEcCUTUc5rGlLnfnxRutWffmfLB8zjYZonu34pWgeSnTQeGeIQ4rFxaoxkW%2BCtyRNvj2lD10ejFWia%2FfeZRAsQwjp%2BgvwY6pgEC8SnyoktsYaDMObiu%2BA%2Bg%2BrXxTWCYU%2BURrnprtSlImmv75FahK1faQdQPjTVR%2BEdt8Q83I%2BCUquNptVc4h%2BmG4y7Ro0lqfDIk%2BkemoJyIDxlk1VeygRIFEZVjAYlNCOctuALSfc%2BUrK95X6AKQxQc%2FFVoUbv76THStIQen%2Fxqnv2enlKSp0iECRVeQnPvjda6EVsjPQb5O1BdmHh6dD91TncTg2xC&X-Amz-Signature=5ae3ad07fb76691b433810cfb070e11bf0e8f45141d34fc042d54e96de0a360a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
