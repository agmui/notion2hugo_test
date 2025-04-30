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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOHCZWN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAfsTvVTBytTEEkf2R6aw6oS0LnwHowqd8lErQCd9oP2AiEA2a9VRRe6bm2wpwjqQdlAZhpt4APO7Dg%2BGL2Z5U2zNfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFPG8V4yiRf0WOOXCrcAxrrrG6BL3fJGy%2FKmLrIXzZoeWHv6u4dHZvR7vKCnXjAfEkYvsv5XGCr2T%2FD2xhij5yMFqVEgfqkN531gN%2BWNDKSJFnFj25PFraSGADqZW92kjmte7qDftWn6n8X5iL3xGLTjU4P3HDVJc%2BpVFQM3EWqY7taLW5t9vH%2FTEbsiHIfqVJ3ibBUjQ%2FLzC0DbRxF%2F2xK2FcNMXXIjSzrFXIEU%2F2vl0IWJFfZWcE%2F5DjUmAnMKi1%2Bl88nNlWQWq0RepXfn6HxNiHpA2D679GXjFNNGSnfsK21AL7eINC0h5JCxgd%2FLQrp2N3DRNU5lH3D%2BGWjuEne68CkZ02BzIfx%2Bx6Zqs3k99En5ezT29WdUsplK4bRfSINdL0oBdeO1AZDzsukJ7aGlF6xnfee6OqbDxINxvSKTBe1peyaXLkMD3lr6FoEvknoGw9iInqJ%2F%2Brgzo8ahCLAopo9YAJuDYRVKA%2Bp8MVBziZdUcsyQXmNOx%2Fl24HJs3fkDo8swUCmik%2FI%2F%2B9gIz8bKiR9in9cz%2BsbSxORq%2BkFX%2BS2WvFxF1PpXgrHlK3ieydCzT9L3DJRMCr3RG2jwDt%2BIyQj9smCl5l413R4sYecMv3Nfu2PXqhHJOgvChPhIYxbPyymeOz14GNyMP%2B%2FxsAGOqUBg5w5wknpxL6bsGwviz26pvH%2FK5v6PCugWzQiqORawkXR2qgm733ZlGRmmAm7FQsG7p2AmGGe3SAeWmCB6AduqhtYW4BfAlJKmOQsI2J3PtnEaD9P%2BT4FPNkkxuwO61kvvBIcnUYm%2BOgIdTODDkRBzC%2BewQID4NbZbPuXE3JaelgAg6KF%2F4ZFR3dC7ynVRg2KxIP7V3waPpgNz4lEDIfCoB2jzKpe&X-Amz-Signature=6a5fc220dd51db60db664738a95cd386f0cca63a06e17e07d5b24600ccf96f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOHCZWN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAfsTvVTBytTEEkf2R6aw6oS0LnwHowqd8lErQCd9oP2AiEA2a9VRRe6bm2wpwjqQdlAZhpt4APO7Dg%2BGL2Z5U2zNfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFPG8V4yiRf0WOOXCrcAxrrrG6BL3fJGy%2FKmLrIXzZoeWHv6u4dHZvR7vKCnXjAfEkYvsv5XGCr2T%2FD2xhij5yMFqVEgfqkN531gN%2BWNDKSJFnFj25PFraSGADqZW92kjmte7qDftWn6n8X5iL3xGLTjU4P3HDVJc%2BpVFQM3EWqY7taLW5t9vH%2FTEbsiHIfqVJ3ibBUjQ%2FLzC0DbRxF%2F2xK2FcNMXXIjSzrFXIEU%2F2vl0IWJFfZWcE%2F5DjUmAnMKi1%2Bl88nNlWQWq0RepXfn6HxNiHpA2D679GXjFNNGSnfsK21AL7eINC0h5JCxgd%2FLQrp2N3DRNU5lH3D%2BGWjuEne68CkZ02BzIfx%2Bx6Zqs3k99En5ezT29WdUsplK4bRfSINdL0oBdeO1AZDzsukJ7aGlF6xnfee6OqbDxINxvSKTBe1peyaXLkMD3lr6FoEvknoGw9iInqJ%2F%2Brgzo8ahCLAopo9YAJuDYRVKA%2Bp8MVBziZdUcsyQXmNOx%2Fl24HJs3fkDo8swUCmik%2FI%2F%2B9gIz8bKiR9in9cz%2BsbSxORq%2BkFX%2BS2WvFxF1PpXgrHlK3ieydCzT9L3DJRMCr3RG2jwDt%2BIyQj9smCl5l413R4sYecMv3Nfu2PXqhHJOgvChPhIYxbPyymeOz14GNyMP%2B%2FxsAGOqUBg5w5wknpxL6bsGwviz26pvH%2FK5v6PCugWzQiqORawkXR2qgm733ZlGRmmAm7FQsG7p2AmGGe3SAeWmCB6AduqhtYW4BfAlJKmOQsI2J3PtnEaD9P%2BT4FPNkkxuwO61kvvBIcnUYm%2BOgIdTODDkRBzC%2BewQID4NbZbPuXE3JaelgAg6KF%2F4ZFR3dC7ynVRg2KxIP7V3waPpgNz4lEDIfCoB2jzKpe&X-Amz-Signature=196ed39439b75dfde172ecb1db22713592e5481f2663cdd0bb1de972babe8bad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOHCZWN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAfsTvVTBytTEEkf2R6aw6oS0LnwHowqd8lErQCd9oP2AiEA2a9VRRe6bm2wpwjqQdlAZhpt4APO7Dg%2BGL2Z5U2zNfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFPG8V4yiRf0WOOXCrcAxrrrG6BL3fJGy%2FKmLrIXzZoeWHv6u4dHZvR7vKCnXjAfEkYvsv5XGCr2T%2FD2xhij5yMFqVEgfqkN531gN%2BWNDKSJFnFj25PFraSGADqZW92kjmte7qDftWn6n8X5iL3xGLTjU4P3HDVJc%2BpVFQM3EWqY7taLW5t9vH%2FTEbsiHIfqVJ3ibBUjQ%2FLzC0DbRxF%2F2xK2FcNMXXIjSzrFXIEU%2F2vl0IWJFfZWcE%2F5DjUmAnMKi1%2Bl88nNlWQWq0RepXfn6HxNiHpA2D679GXjFNNGSnfsK21AL7eINC0h5JCxgd%2FLQrp2N3DRNU5lH3D%2BGWjuEne68CkZ02BzIfx%2Bx6Zqs3k99En5ezT29WdUsplK4bRfSINdL0oBdeO1AZDzsukJ7aGlF6xnfee6OqbDxINxvSKTBe1peyaXLkMD3lr6FoEvknoGw9iInqJ%2F%2Brgzo8ahCLAopo9YAJuDYRVKA%2Bp8MVBziZdUcsyQXmNOx%2Fl24HJs3fkDo8swUCmik%2FI%2F%2B9gIz8bKiR9in9cz%2BsbSxORq%2BkFX%2BS2WvFxF1PpXgrHlK3ieydCzT9L3DJRMCr3RG2jwDt%2BIyQj9smCl5l413R4sYecMv3Nfu2PXqhHJOgvChPhIYxbPyymeOz14GNyMP%2B%2FxsAGOqUBg5w5wknpxL6bsGwviz26pvH%2FK5v6PCugWzQiqORawkXR2qgm733ZlGRmmAm7FQsG7p2AmGGe3SAeWmCB6AduqhtYW4BfAlJKmOQsI2J3PtnEaD9P%2BT4FPNkkxuwO61kvvBIcnUYm%2BOgIdTODDkRBzC%2BewQID4NbZbPuXE3JaelgAg6KF%2F4ZFR3dC7ynVRg2KxIP7V3waPpgNz4lEDIfCoB2jzKpe&X-Amz-Signature=902358e1c0ffa9efd9996e47048af2f181272a51ef21a4ef58bdd028c2ab61ad&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMX66W2J%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHJaOPYy9mJsKZPblKoacCHzms2AIi%2BcMYZJVPYhm3ilAiBRAZr%2F4hDMgRVVEx5LDNtRQAtWK%2B0W%2BG%2FfvkL0dFxotyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDeXWJ9ZrHeh3NNSuKtwDeNwY0BVIPn%2FeD7yVGADZosV0aq4XgPmYB%2Bz9bzlwdRMkF%2BZ%2BSp899CV5PHyCcCc50y5AuxLo3PrKMQbq4lmXKCCrM%2FUQiOBZNXAIxIYLwPYu6rbrjyUznqc1Zlsc0o%2BGT1lBupbLppIJ%2Fd7y9v2YsPpN3lR9zSjSZdGifczkslL1uK7aaL5KPbULIt4EHXbknNERe9hWzcSb5xpXJcXCvdBGU7B0oWJCBrUu4YykKnTWf9apqDqzBazYo2ejNNqPCBzyfIdranz8o7c%2Bk4XxDy7EbybTYhF5vRRczAKw%2BWMy6iCrpUCtZOoNGbc5E7I7e20O8dbjOGNFOKhri1fQl3PddunzSZhi9okDgctmLQouKL46ZYgpA9Zr9UuD3HF593Tu0clLFVGDaqJKCz0AoPlEiBLxndRzH6TDvpu65BXXqdr7hEVKoadfOA0PtQvZB9wbKF%2FSOU9q%2FuYqhifMR4VV4Op1u75pTfAd4McSSP1n3YHPv6kFt%2BjHyp6mviCuDQQURzRuSBz%2B4FPD9TFyG0Igr2IEo64puaPfqDKZLH%2FXU%2FbwdNg2mLH8ebwqY9qLuUhVkcvgMIEET892pIf0upCFn%2B8znby%2BG%2Bqsa2%2FqMASexHvzChsASHfDx%2Bcw4b%2FGwAY6pgGBxBpLgUv7KpHN2Mgz%2Bvss3mo4IgPchKP27PVm%2FE5qJ8UykYf6tTUlADoVv3MSpf5t8noiLBUGbrYpe%2BwtdRB3aF1dVcQMiVDlYkgXnCK4%2BRrBc2KHeRnnXCLgT4%2B%2BfI%2FSV9n5PhygvDTUWpA80OSDk7CK2ulNIzLPXgv6QLIQsBjjFp%2BjIQKgYsvbr91%2F8RLtxWFtGzbDu9mpmKLuytXv9Fh3ibqV&X-Amz-Signature=7d9bf8f57a946607b913ddbfc9bc434b8e889b0297ce5c13a0aad0243fafd031&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3US4R2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBNbToHW0%2FHuPYtdK9lVpq8YxXSnQkl2R3vZ4%2Fq4TlfgAiEA8gDcn%2BvqOah1NQFq0%2F0r%2B7dnSokU88KCwh6kyYqoNAkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwQQ8hPScL3ECsC2SrcAyWLC4JGMvgw6Q6qpYcHFWyuwdakITFKCEtUnYT1%2F0Qs6KtA2LSRzNaPcgrOU5HiAsFAYARGx3FTiatcJjHftX2N87yJRfYhRyFCTFhU8hXbl0HgFVkHvEKcrq%2FSfNlwfSLHbXtEPj7ezzIm9lM6kl41AqCMvYAaePKpdcLCkAO7KGP5liQGaxdamXTza4CBWe6C%2BCXDycBRtHJsPht0iRlHb6IXm3cYU5Eg0Yezy2GedM88kcik9GbnCprCyDuIG5JxrKScTZnBbbKOwGT9kbMppKmWfVA25nIdwZzvuJk8enS7bttGwovsIgXZ7JGi6UzvskMlF9vVmdKwVzONQioWi7L6TJf0L0YylpivSwN%2BaSzIYAOllUvT6TuxzOmA%2BBL9mmYT5fEQ%2BbKp2ip1SEWEPpi4ZllahIh4QbypRa2EIbqaZf2Rt3mql28KwXUWPGUJWzgE%2BJzWz3PjB1hH0q8AgQhfwO8CcF8HasLriPAlXa1N5XGxJAt0ODEduj%2FKP1NNarQuyYJs4kr6wY6oUsJd90N9N9OL%2BxVUX8Z9XLq6eoEklFVrM%2BOyQ3OpZ5l%2Bg2SVvt1zQWrvI6KdtoYaQ4KUrZMCz00dcSs%2FkeDb0UW6M7jm99TfG8ZRKqnLMK%2B%2FxsAGOqUBBMXx%2BLc%2BQirw%2FPgAbPd96QJppyzw0Vrm5v4HzPtYD0qL66is2Ezs98Apkep5LtHps31DGDOEG4pSglg9ZxIv8%2FcNQYn7BkR%2BaEMsGjBf70zRlRaN6opMG5FrOflNJVlVJ%2Fd6AinHe44bhbCDCFzALgAEKzVNZpHIYgv9xarCv%2FkQNfLsVTbYbPqy4rm2cHDIYnCrewQmGJrkSX5BanXQMECJs5TT&X-Amz-Signature=0f445e992fa7045fa8b07a50c27ddf3d735c8e96e30159206b161d0803940ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOHCZWN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAfsTvVTBytTEEkf2R6aw6oS0LnwHowqd8lErQCd9oP2AiEA2a9VRRe6bm2wpwjqQdlAZhpt4APO7Dg%2BGL2Z5U2zNfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFPG8V4yiRf0WOOXCrcAxrrrG6BL3fJGy%2FKmLrIXzZoeWHv6u4dHZvR7vKCnXjAfEkYvsv5XGCr2T%2FD2xhij5yMFqVEgfqkN531gN%2BWNDKSJFnFj25PFraSGADqZW92kjmte7qDftWn6n8X5iL3xGLTjU4P3HDVJc%2BpVFQM3EWqY7taLW5t9vH%2FTEbsiHIfqVJ3ibBUjQ%2FLzC0DbRxF%2F2xK2FcNMXXIjSzrFXIEU%2F2vl0IWJFfZWcE%2F5DjUmAnMKi1%2Bl88nNlWQWq0RepXfn6HxNiHpA2D679GXjFNNGSnfsK21AL7eINC0h5JCxgd%2FLQrp2N3DRNU5lH3D%2BGWjuEne68CkZ02BzIfx%2Bx6Zqs3k99En5ezT29WdUsplK4bRfSINdL0oBdeO1AZDzsukJ7aGlF6xnfee6OqbDxINxvSKTBe1peyaXLkMD3lr6FoEvknoGw9iInqJ%2F%2Brgzo8ahCLAopo9YAJuDYRVKA%2Bp8MVBziZdUcsyQXmNOx%2Fl24HJs3fkDo8swUCmik%2FI%2F%2B9gIz8bKiR9in9cz%2BsbSxORq%2BkFX%2BS2WvFxF1PpXgrHlK3ieydCzT9L3DJRMCr3RG2jwDt%2BIyQj9smCl5l413R4sYecMv3Nfu2PXqhHJOgvChPhIYxbPyymeOz14GNyMP%2B%2FxsAGOqUBg5w5wknpxL6bsGwviz26pvH%2FK5v6PCugWzQiqORawkXR2qgm733ZlGRmmAm7FQsG7p2AmGGe3SAeWmCB6AduqhtYW4BfAlJKmOQsI2J3PtnEaD9P%2BT4FPNkkxuwO61kvvBIcnUYm%2BOgIdTODDkRBzC%2BewQID4NbZbPuXE3JaelgAg6KF%2F4ZFR3dC7ynVRg2KxIP7V3waPpgNz4lEDIfCoB2jzKpe&X-Amz-Signature=6df4a0d2c40fa861ebf68bcceaccc992dbe4367065fbbbe9635c4a5f110145f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
