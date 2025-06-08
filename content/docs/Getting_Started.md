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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7UOX2D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERP2Zt%2F6ohetHBqgiHVDuBzKQetkftBXJWLYhhkEmj3AiBeFD2S%2F47HtbmIHIchk7hc%2FER13DDY%2FhIJq8MfJ5CzxCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKsl3ccpf6KNsY61KtwD692SEo4Y%2FNIvVOCNFcZj5Xv1OzDBQTcfig%2BdhVAoj4o%2BW2ubT6y7aDKtBTjlV0CPMBI2%2BuAnEPIvjJj72%2FoYyI0F0cg4rxI%2BBzryE6KL2g%2BYRT31l3wEAhwAkp8uO7dlCJZ9964nmTM6eUU33Am7oDQorbUkPDBCrA6YqctqShKjC1LqLRZYMU9YIGdQUN24P%2F6I%2BE0vCQDVyEsoT6o0Wp28YdEMasXXVZJkiKko67it5Ljzf11S72ACeMc%2BEfJxRZ0Gd6Fk8NjBsF8RNETsAYAhqrbFyoqj2vyJFNH%2B2Dy%2FnBmMjF%2BokkjXud2NS%2B7m7UdPlWqJUIQ%2BBfZLV0YPl078eXARaeZgvN2y72Na0pLCFLXmz%2BjjCWyC%2Fjj2BjUvidJWdZpDldVFc%2BgXMyIpg3%2BjgkT16sUk2vV0Bfnz8Ji9QTIymig35O5R1r%2FHlrsbt5Hmx6mADKuEVUgYGbHcUo7IpEREc%2FQS3xoxyrEGXFGR3zkGgOGQS1pJ1JU37A%2Fg3KF%2F1JF6w7THo5NEQSwHiB%2BgyAgGe8LR94ji%2BMSoGL0xsdoFhLnEy1lUAZSkZZ9j%2B9u5%2BxH6XXa37Nu9fGI1lLMYlDc3LE91hnCJlYqWhFD4e%2FjPLc%2BgggKTe64w7JyTwgY6pgGqtmtq9m40lDg6I146wpsQDf56JXtj4av2co1zMupVyf1%2BjVP7xGMz2mCcr%2BWQc%2FBm6VSxmtWVsNmLqgNuKF22mJmh9hsY7RyTVtahklRSX0IELh7rM2xN5gf2CmXS2wXQLJrXr%2BuQ4aAqMpQbmHzUFpzGlTcjaDzFjXdgptyJoc9C9stWRIBhJtMEu3UWeKs5Gm50KDMm8et%2FB1jg0kjXE2O2k2gB&X-Amz-Signature=d6677f985390e050cafa7ffff28448e7b687b01aacb3185b5fc0c4de6f16cb77&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7UOX2D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERP2Zt%2F6ohetHBqgiHVDuBzKQetkftBXJWLYhhkEmj3AiBeFD2S%2F47HtbmIHIchk7hc%2FER13DDY%2FhIJq8MfJ5CzxCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKsl3ccpf6KNsY61KtwD692SEo4Y%2FNIvVOCNFcZj5Xv1OzDBQTcfig%2BdhVAoj4o%2BW2ubT6y7aDKtBTjlV0CPMBI2%2BuAnEPIvjJj72%2FoYyI0F0cg4rxI%2BBzryE6KL2g%2BYRT31l3wEAhwAkp8uO7dlCJZ9964nmTM6eUU33Am7oDQorbUkPDBCrA6YqctqShKjC1LqLRZYMU9YIGdQUN24P%2F6I%2BE0vCQDVyEsoT6o0Wp28YdEMasXXVZJkiKko67it5Ljzf11S72ACeMc%2BEfJxRZ0Gd6Fk8NjBsF8RNETsAYAhqrbFyoqj2vyJFNH%2B2Dy%2FnBmMjF%2BokkjXud2NS%2B7m7UdPlWqJUIQ%2BBfZLV0YPl078eXARaeZgvN2y72Na0pLCFLXmz%2BjjCWyC%2Fjj2BjUvidJWdZpDldVFc%2BgXMyIpg3%2BjgkT16sUk2vV0Bfnz8Ji9QTIymig35O5R1r%2FHlrsbt5Hmx6mADKuEVUgYGbHcUo7IpEREc%2FQS3xoxyrEGXFGR3zkGgOGQS1pJ1JU37A%2Fg3KF%2F1JF6w7THo5NEQSwHiB%2BgyAgGe8LR94ji%2BMSoGL0xsdoFhLnEy1lUAZSkZZ9j%2B9u5%2BxH6XXa37Nu9fGI1lLMYlDc3LE91hnCJlYqWhFD4e%2FjPLc%2BgggKTe64w7JyTwgY6pgGqtmtq9m40lDg6I146wpsQDf56JXtj4av2co1zMupVyf1%2BjVP7xGMz2mCcr%2BWQc%2FBm6VSxmtWVsNmLqgNuKF22mJmh9hsY7RyTVtahklRSX0IELh7rM2xN5gf2CmXS2wXQLJrXr%2BuQ4aAqMpQbmHzUFpzGlTcjaDzFjXdgptyJoc9C9stWRIBhJtMEu3UWeKs5Gm50KDMm8et%2FB1jg0kjXE2O2k2gB&X-Amz-Signature=b9b71eca200a1a5e4cbf6c9b73bffcf522fdf4f59b740677e0229787e80a6ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7UOX2D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERP2Zt%2F6ohetHBqgiHVDuBzKQetkftBXJWLYhhkEmj3AiBeFD2S%2F47HtbmIHIchk7hc%2FER13DDY%2FhIJq8MfJ5CzxCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKsl3ccpf6KNsY61KtwD692SEo4Y%2FNIvVOCNFcZj5Xv1OzDBQTcfig%2BdhVAoj4o%2BW2ubT6y7aDKtBTjlV0CPMBI2%2BuAnEPIvjJj72%2FoYyI0F0cg4rxI%2BBzryE6KL2g%2BYRT31l3wEAhwAkp8uO7dlCJZ9964nmTM6eUU33Am7oDQorbUkPDBCrA6YqctqShKjC1LqLRZYMU9YIGdQUN24P%2F6I%2BE0vCQDVyEsoT6o0Wp28YdEMasXXVZJkiKko67it5Ljzf11S72ACeMc%2BEfJxRZ0Gd6Fk8NjBsF8RNETsAYAhqrbFyoqj2vyJFNH%2B2Dy%2FnBmMjF%2BokkjXud2NS%2B7m7UdPlWqJUIQ%2BBfZLV0YPl078eXARaeZgvN2y72Na0pLCFLXmz%2BjjCWyC%2Fjj2BjUvidJWdZpDldVFc%2BgXMyIpg3%2BjgkT16sUk2vV0Bfnz8Ji9QTIymig35O5R1r%2FHlrsbt5Hmx6mADKuEVUgYGbHcUo7IpEREc%2FQS3xoxyrEGXFGR3zkGgOGQS1pJ1JU37A%2Fg3KF%2F1JF6w7THo5NEQSwHiB%2BgyAgGe8LR94ji%2BMSoGL0xsdoFhLnEy1lUAZSkZZ9j%2B9u5%2BxH6XXa37Nu9fGI1lLMYlDc3LE91hnCJlYqWhFD4e%2FjPLc%2BgggKTe64w7JyTwgY6pgGqtmtq9m40lDg6I146wpsQDf56JXtj4av2co1zMupVyf1%2BjVP7xGMz2mCcr%2BWQc%2FBm6VSxmtWVsNmLqgNuKF22mJmh9hsY7RyTVtahklRSX0IELh7rM2xN5gf2CmXS2wXQLJrXr%2BuQ4aAqMpQbmHzUFpzGlTcjaDzFjXdgptyJoc9C9stWRIBhJtMEu3UWeKs5Gm50KDMm8et%2FB1jg0kjXE2O2k2gB&X-Amz-Signature=f52ccb900e61e8ecb53deb10fab7250f8bd0dd9ef929b3d38ab058b26b1ebeed&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLASAKTK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQHKvWUmsPeGs9puE4q%2FhKKEAQFNDKbNiVsQ%2FEn3P2VAiEA6P3ZZrCxHiN50ErESOfVqNSs1WFctU8Y8lCCSulsNhMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNbTf2D8Chjix3sMyrcA4qFuJwswWToP0SOWPrRvkuzbvaaCmPxuKRR6kYb8Qge%2BWx6pV4egVPotd1yzgzDF%2FyDzAYuulnKqSb7lJ1UJLgwGd4qcniOTkb6jEggpZn0gpCTrleLmAtOw%2BLFO7v%2BEjt7bImBSzjdZlQdJ7MP2irqRVmXMcMMhDqqEd%2FjsIcHEe0EeM5iPpbh3Fq4C%2BQyMOxEo7c7LS71I1eRg5UYrGBCZAvG4hfxB9y2QlsqmH2neX4byOkHihgSHz1FLi%2FNTedlQfVA4zFkiFAOV8clwtb9yD6G79Dt8fnyqHTd9616BvTkRwaYja6J20Nk9CJcVWwHbNIDFPAqJM7tPj%2F2MA77ccaBxl2IHacnHKUDdr%2BhBwMFGbNsXoawlZVk20fZ60ZxiW8HuDLg%2FjYd3UAKbRItKypKzNW%2Bi%2Fw3ElS%2FmLjk7xHLue8dOsCQ1M12o1S77xqK0wWZsdKBUUtph0ZytdAaGic3XmShmFe93y989tLdCK10O9%2FidVgnh2zC9RHm7hIyAhX56AOtzYbZWK2tymrVL8q45Wq93qjmxASluKgS7z3glDAbBk5NgLGdHJfDk%2FqJRXOvtAEafnm7147wh5K66iezJYs24v5McMNqyDyRgtM7tUSWIFdzYLc1MOKck8IGOqUBkPQ2xoKC6dZ8PJXHEzGiVayDNniAGZ6hj1pOLlDB3DOTLfs%2FHmDiWliHExFdIuD0BE5D07Gav%2Bki1x6kiAT10mMrb7JcG5br8BUN%2F2sLPkhuDM5BkXAtWCopUyDyBDJsWi%2FCjvFwS6spdhFq1fU5etnrReaMjQaBBQ8DpW%2FI5Ubz6hB9g9LtvfKK1xNOPxrvB99jcjbk4FLNK5AWG%2Bv%2BfsLFgZIF&X-Amz-Signature=905ad2bfe1865c00ecc927308630a962c4f13c61ecea7a861c0ad1644258a154&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CDUPVR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtbBdyN7jHg2UzjJAxJgEsph%2BzI87SHcGA3Dx4u%2Bax8AiEArSWHD9mkvNj5HTlIY7lQybOu%2FccCvuHqjeMGNUJsa5wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsu4e3RqaCXf9RBFircA3Uc2n%2F8o1YuT87JssqtWTNw%2BqnWEsTOrlQQ53a%2FcIqFilmcy89Cz61zZ47p5T%2F4KPhLkc5yz3m%2BXFo2qPPeB8nTQ%2FqRgonNzTJmjm75kFT8kOVEdVFY9etTPVhgLJhAlyLh98GdBNOEOfXM3hpkO33eItA7xeDVudAEHehmBbtuFa9p%2BBuaOvAajO27YzApnXsrcOKhnHT6J1odvKzXqPJLV6lw2fmdxWw2gpHXN7VUyV93WGRJFvmFxT%2B7dZjpx%2FRvnoNdvluj8PJdZuYrT34TXb6ZnmOYd1KH6kqpC8%2F5t2i2hh2ASDyc7LPxr%2BjxcSAlk0NxTNxXgJIvdhlvsQuy%2FefE0HHvm8o2pBGKykHs3CJqhquaZYaIjE%2F%2BG4xNnKQXfxKStXO18T0EnDo8T5WdABFVqY16UlJKB5w8pc0DPIn4xWS09Br08WMH0aaKR5pHs0NpxEdsOYyzQpFFi3sBooUm6jItktF40UWIj4cCgUcjNlXVMDfXZp6c%2Bil3P38SaVXvZWhxy3GgLDi1zaJosOVZrCxDzTpDSm3ytCKUbOZ7VMzVakvHE8zzVmuX4D2TGXfbDmPMisga759faX4Aru%2FWzBLJFOiCjpg2BA3e0t0vTKFeq9zI6qQCMIydk8IGOqUBBmpuWPEhlUo3wmBM52fX9eReed8zRClrp8qbHAxCEt7MNL%2FYou127Z6Rrk03W5%2BsHD5NvDG1BB978qFsYfK7K7FMoj4bStTTnNSBIJbjzR0s4AfYUeec2KeniNyHUTEa7Hsg%2Bz2sapSgqetV3kM78UeqgPkI2%2BWwZkm%2BPwzOYhxeYDVqRgHMzxBuogUPhrllqdz5X741psRr7Qu0M1PooWoHuaO1&X-Amz-Signature=1661ee62d53537fead03258af2c4f68c97d95be68994201c6add28e830bf7075&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7UOX2D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERP2Zt%2F6ohetHBqgiHVDuBzKQetkftBXJWLYhhkEmj3AiBeFD2S%2F47HtbmIHIchk7hc%2FER13DDY%2FhIJq8MfJ5CzxCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKsl3ccpf6KNsY61KtwD692SEo4Y%2FNIvVOCNFcZj5Xv1OzDBQTcfig%2BdhVAoj4o%2BW2ubT6y7aDKtBTjlV0CPMBI2%2BuAnEPIvjJj72%2FoYyI0F0cg4rxI%2BBzryE6KL2g%2BYRT31l3wEAhwAkp8uO7dlCJZ9964nmTM6eUU33Am7oDQorbUkPDBCrA6YqctqShKjC1LqLRZYMU9YIGdQUN24P%2F6I%2BE0vCQDVyEsoT6o0Wp28YdEMasXXVZJkiKko67it5Ljzf11S72ACeMc%2BEfJxRZ0Gd6Fk8NjBsF8RNETsAYAhqrbFyoqj2vyJFNH%2B2Dy%2FnBmMjF%2BokkjXud2NS%2B7m7UdPlWqJUIQ%2BBfZLV0YPl078eXARaeZgvN2y72Na0pLCFLXmz%2BjjCWyC%2Fjj2BjUvidJWdZpDldVFc%2BgXMyIpg3%2BjgkT16sUk2vV0Bfnz8Ji9QTIymig35O5R1r%2FHlrsbt5Hmx6mADKuEVUgYGbHcUo7IpEREc%2FQS3xoxyrEGXFGR3zkGgOGQS1pJ1JU37A%2Fg3KF%2F1JF6w7THo5NEQSwHiB%2BgyAgGe8LR94ji%2BMSoGL0xsdoFhLnEy1lUAZSkZZ9j%2B9u5%2BxH6XXa37Nu9fGI1lLMYlDc3LE91hnCJlYqWhFD4e%2FjPLc%2BgggKTe64w7JyTwgY6pgGqtmtq9m40lDg6I146wpsQDf56JXtj4av2co1zMupVyf1%2BjVP7xGMz2mCcr%2BWQc%2FBm6VSxmtWVsNmLqgNuKF22mJmh9hsY7RyTVtahklRSX0IELh7rM2xN5gf2CmXS2wXQLJrXr%2BuQ4aAqMpQbmHzUFpzGlTcjaDzFjXdgptyJoc9C9stWRIBhJtMEu3UWeKs5Gm50KDMm8et%2FB1jg0kjXE2O2k2gB&X-Amz-Signature=8b44057f6fc1f96c7dc4c2a63f6e797cd30f9e8846c19f836d96846fb5fc8692&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
