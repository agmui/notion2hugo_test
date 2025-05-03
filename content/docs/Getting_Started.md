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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTYB6GU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD1QpRs5l81RSCRTphsf3Kz1VDGyvuIJYlDGHOyjPhtcQIgcWXJwobZgGN%2Bv5DO4fBzN4mg1CyNjvWgWI%2BVN8jyIEIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWOgzo4qufkKHyv4SrcA9LH4Lo0sj5Odxct7dGVMvP7mq1xmEpQZRnITyxPzL2P3EWE2O0u3JKziIiyDmJcGRhNf1nWM9zc%2ByqIuljIJHC1LWNOU8hMwVchmVv4tV256yDet9Sf%2FhMY3oruBZGHVsxUTD8P59miXJPQmAS4yoSF57%2Bi2rmtXCy%2FRGBaLSeAzTSLS5knpOizzpnAQVuUgDChZgx3QycBq0o8eU9%2Bd83a5y3kIAyFA25QmGFg0ln09q%2BileIKS2vK%2FyGy2bcJO3uNgS24Xq1HW6G%2BZkYnao%2F6VQCkhxk5hdTYpORAbsEuZeA%2FT3aFmo3O7TdRSS8UjsDr%2FqgAy4Q8qb8gs9PGHkgQQu1jlFk8pdzDnq%2FtcrQ2OTe7HUQDdco2iajmrFdyR50b6weh1NrR9H609O%2FfdvuGt%2BnptvriELIpzt1qY8AEdgjKFRZcYpL94a8Y%2FkiBO9IXwDwD8GKOPZNQ7RhgleAb7n6CFKGI328p0Z2KeG0q8r8dtGWOz9na4BKHCPLD%2FfHPj%2Bd%2BFd7jZVuRl4EcQ6ULBHe%2BVrlzNJfE0ZxAYFMnu2YPJQzScVl5RcWrI1ceTkpM7Z70c6cfsahEcx7mHSE5Yg2eeGQWDxSAH7FCMsVsj2Hp3yh3NtnbNmL9MN%2FR18AGOqUBLZ%2BEtEdqdBOWmdi10db4FgUyS7lRG%2FMLwFdNBZNBike12%2B9HkYYAwgpnFIUT3IEHXu0QT2hINz%2BqD6HMNGJP9keAOrAUpgxb0CidRmb%2BFD%2BGJYDPY%2FSzyYNvJD83Lk1D8HlQoG8xhl1qmdUCnP4TzTE07CEwOxWMoz9Rbdrj1OTsgTxJ4zwJ%2BVT09VAthRe8K3bHfeau%2B8RjPvcKFBzhicOdXTNd&X-Amz-Signature=48e98ce1370bfaff73206f5f489a3ccfb4648f4d1bed4089dbd0f3aa4a7bca33&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTYB6GU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD1QpRs5l81RSCRTphsf3Kz1VDGyvuIJYlDGHOyjPhtcQIgcWXJwobZgGN%2Bv5DO4fBzN4mg1CyNjvWgWI%2BVN8jyIEIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWOgzo4qufkKHyv4SrcA9LH4Lo0sj5Odxct7dGVMvP7mq1xmEpQZRnITyxPzL2P3EWE2O0u3JKziIiyDmJcGRhNf1nWM9zc%2ByqIuljIJHC1LWNOU8hMwVchmVv4tV256yDet9Sf%2FhMY3oruBZGHVsxUTD8P59miXJPQmAS4yoSF57%2Bi2rmtXCy%2FRGBaLSeAzTSLS5knpOizzpnAQVuUgDChZgx3QycBq0o8eU9%2Bd83a5y3kIAyFA25QmGFg0ln09q%2BileIKS2vK%2FyGy2bcJO3uNgS24Xq1HW6G%2BZkYnao%2F6VQCkhxk5hdTYpORAbsEuZeA%2FT3aFmo3O7TdRSS8UjsDr%2FqgAy4Q8qb8gs9PGHkgQQu1jlFk8pdzDnq%2FtcrQ2OTe7HUQDdco2iajmrFdyR50b6weh1NrR9H609O%2FfdvuGt%2BnptvriELIpzt1qY8AEdgjKFRZcYpL94a8Y%2FkiBO9IXwDwD8GKOPZNQ7RhgleAb7n6CFKGI328p0Z2KeG0q8r8dtGWOz9na4BKHCPLD%2FfHPj%2Bd%2BFd7jZVuRl4EcQ6ULBHe%2BVrlzNJfE0ZxAYFMnu2YPJQzScVl5RcWrI1ceTkpM7Z70c6cfsahEcx7mHSE5Yg2eeGQWDxSAH7FCMsVsj2Hp3yh3NtnbNmL9MN%2FR18AGOqUBLZ%2BEtEdqdBOWmdi10db4FgUyS7lRG%2FMLwFdNBZNBike12%2B9HkYYAwgpnFIUT3IEHXu0QT2hINz%2BqD6HMNGJP9keAOrAUpgxb0CidRmb%2BFD%2BGJYDPY%2FSzyYNvJD83Lk1D8HlQoG8xhl1qmdUCnP4TzTE07CEwOxWMoz9Rbdrj1OTsgTxJ4zwJ%2BVT09VAthRe8K3bHfeau%2B8RjPvcKFBzhicOdXTNd&X-Amz-Signature=8ac7828e32b296bdcfbc6db9ff4e9245cb645d94442cfea13c600a6b681e253f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTYB6GU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD1QpRs5l81RSCRTphsf3Kz1VDGyvuIJYlDGHOyjPhtcQIgcWXJwobZgGN%2Bv5DO4fBzN4mg1CyNjvWgWI%2BVN8jyIEIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWOgzo4qufkKHyv4SrcA9LH4Lo0sj5Odxct7dGVMvP7mq1xmEpQZRnITyxPzL2P3EWE2O0u3JKziIiyDmJcGRhNf1nWM9zc%2ByqIuljIJHC1LWNOU8hMwVchmVv4tV256yDet9Sf%2FhMY3oruBZGHVsxUTD8P59miXJPQmAS4yoSF57%2Bi2rmtXCy%2FRGBaLSeAzTSLS5knpOizzpnAQVuUgDChZgx3QycBq0o8eU9%2Bd83a5y3kIAyFA25QmGFg0ln09q%2BileIKS2vK%2FyGy2bcJO3uNgS24Xq1HW6G%2BZkYnao%2F6VQCkhxk5hdTYpORAbsEuZeA%2FT3aFmo3O7TdRSS8UjsDr%2FqgAy4Q8qb8gs9PGHkgQQu1jlFk8pdzDnq%2FtcrQ2OTe7HUQDdco2iajmrFdyR50b6weh1NrR9H609O%2FfdvuGt%2BnptvriELIpzt1qY8AEdgjKFRZcYpL94a8Y%2FkiBO9IXwDwD8GKOPZNQ7RhgleAb7n6CFKGI328p0Z2KeG0q8r8dtGWOz9na4BKHCPLD%2FfHPj%2Bd%2BFd7jZVuRl4EcQ6ULBHe%2BVrlzNJfE0ZxAYFMnu2YPJQzScVl5RcWrI1ceTkpM7Z70c6cfsahEcx7mHSE5Yg2eeGQWDxSAH7FCMsVsj2Hp3yh3NtnbNmL9MN%2FR18AGOqUBLZ%2BEtEdqdBOWmdi10db4FgUyS7lRG%2FMLwFdNBZNBike12%2B9HkYYAwgpnFIUT3IEHXu0QT2hINz%2BqD6HMNGJP9keAOrAUpgxb0CidRmb%2BFD%2BGJYDPY%2FSzyYNvJD83Lk1D8HlQoG8xhl1qmdUCnP4TzTE07CEwOxWMoz9Rbdrj1OTsgTxJ4zwJ%2BVT09VAthRe8K3bHfeau%2B8RjPvcKFBzhicOdXTNd&X-Amz-Signature=37a2e973c7018b6377a55dc006faed554b7b510b001d422ee0edbe6014ced3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUS5BQF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCFqv8mbLBiDlOghjVj9Sslde4Sgyi%2BelNGPTLTcHL3JwIhAJE%2Ft7R8wd%2BfaABnTxD1Hg6fthk0aE43QcsCNEeBxNarKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0zaywtvfzjUdBf24q3AMI%2Fh%2FhKp31CynwG%2FBt%2FCJl%2FvMOtGR8Bbfqt2gvEoyCzensCOM57NFg%2BCa7DsIlbpNQcQ2ZAracDHkVOfvWp39d7brtwCiC%2Bmq6Qe%2BsR8UntGxZ%2FPfE8vG5KEMMuIV2ku%2Brurt4TB0COWNr%2FL%2BRzL80Vxd%2B5qWrzcQWJXuRS2NFVMgZs%2BLtFkyBDaaXl2nFXS02hdVirA0xTadVymGBWOMjqOSoB3m6NrSOMIF7lOSGZVJy0iBrPIxYJ6k578z%2B9sp9WuHVBK%2FNv96UxhEi%2F%2FUTQMY5eZ1YcNZa0Rx9f7rkofo4NU4OeYIVIz3WJqkNZ%2BbzbSIedRKzg6qOs5%2BjPxjYWfGluRvRex9VPfxuYV76Xw03MctdHYSGhTCJPyHMdySsTmAyJxPNBs2WYECFUyuZMd9OmbYwMy9xaVu9S2dbKftTeSetwFmroDg1%2FZ3woZegKtUMgcvnyLMtZkC5YiIc%2BB7NQIbafsTkVp7U36pm6itJSXy%2B59FFyJmjnhz8%2BAeQa0275u6o5SRTBLNZPD6%2FMinszp4UHrI%2BdDz1IsX6uLcCxgNd%2FvYS9crScZVqxE9BADVzseJd652oFOzX%2BRVzUKAI%2FDHkvDDdD6175jEDMNctfEUBArSs8kDAVjC%2ButfABjqkAerL8yTfgaGHHeX8mNM7WktHRrMf0Q966TzHcyMnH5Ms%2BVgLMb0s0LdXIwEw4jL%2FALZsmwNkCGmiqPCdmRgF8VfdD3gQWPaHOoQoI32lJjWsNNPodt3z%2FvB6fEjkMGrie9r9FkPeyQO2PrcJJYUS8l9ikRJwHBHSInoEmH3FByci7OZZf6wDyD76waH1r2axWeNgRAQQ08Wp2SqCpdH%2BUl9FDVDR&X-Amz-Signature=e5e676f693c32f666bfa8f2ca45bc672ee7718904d8b10e027d912fa8292b8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW653OG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDzJSQWaS9qMJPOzQmGBULK7YyLrROG2aoTh7DUl7yzMwIhAM6AEa%2FmcX1SZ2GdMmnkOEvzLriPgSQi1t3u1mD1dx6gKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fTxAzNSqd1bMiBMq3APAaWl%2F7FcsNYc6JYrY%2FNW%2BUSfSUNbTpRxuWQXAaGeTqIw4eWbELMnwZrqqqchD1xVDiNQ7k71xeULtl8bk9OyliFz4RBeX4MWR0PYVq%2FPI5uibU3d8BoRrtIZkOZuXZMnnnsAjxVGN5MPbqDmzHVHSMgZhV8FaRtTRVvmaB8yqu6BHL30JfQHVDpVspTxacjzD2IIXhm79aOcwthHIGT5qQvTRhVeF3uUQWSuYqRAt3pOJe7YMRfRSnrCUlk42DWidekrVzdgoQEOxRs%2FnsJGKl6LbF192Zb%2F%2FlEJKdoevRfbR1GCiRpBId9VcyLhJh1sExJ%2Bc082USm9wcv2TOvDyPTNOzckZ3M4IoE42YZAkViRvNQLKLn68vfYRHN0jHSc2ig2WbDy3zCWiVFi6a6JgDG0l6kpiynT83BTwXh0Lu6BdU2L8qrlShc9ki9br%2FXBsKcjHln3go%2BiD905rg4UAMNxBMmaVPuNfjWvhjOvLkBEVZP83MbaNtHlJd%2Fftq%2BnWKYWqRvChwqsyGc506Lu4Y%2FYQ4D6Od8j%2F992ngyUWSieUjwXi3eb1MTSlCN%2BMa1dCufGpnk7jpSFbG7Bw6DVlJXgUpKSwzcQV5FUK0TYseUi%2FoA4IYcuSjqxiiTCHutfABjqkAeZhClaMUPl4UHkEqP%2BzDQcwJk35yvUAdBdZPmSHb2diGl%2BC1s%2FFDd4hwWPu%2FMsrtTusX69Nt8BCuqtmiXkARUQZwtUvouPAhAXauvxM9FZH2HtKhoIPbjcVyEfxlCO6sToxWsvgJ%2FqLpmXw9cHZg24UtnSyM91vgrbFyf012sEAydIzA%2F4%2FXRu9EcQpPsUwFHsJyi08fSqBrKaykF207fmfnVR2&X-Amz-Signature=832e5c64713ae8c45eda3b3b2c271ded9819c293d6fc71940b81f1165e4a359c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTYB6GU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD1QpRs5l81RSCRTphsf3Kz1VDGyvuIJYlDGHOyjPhtcQIgcWXJwobZgGN%2Bv5DO4fBzN4mg1CyNjvWgWI%2BVN8jyIEIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWOgzo4qufkKHyv4SrcA9LH4Lo0sj5Odxct7dGVMvP7mq1xmEpQZRnITyxPzL2P3EWE2O0u3JKziIiyDmJcGRhNf1nWM9zc%2ByqIuljIJHC1LWNOU8hMwVchmVv4tV256yDet9Sf%2FhMY3oruBZGHVsxUTD8P59miXJPQmAS4yoSF57%2Bi2rmtXCy%2FRGBaLSeAzTSLS5knpOizzpnAQVuUgDChZgx3QycBq0o8eU9%2Bd83a5y3kIAyFA25QmGFg0ln09q%2BileIKS2vK%2FyGy2bcJO3uNgS24Xq1HW6G%2BZkYnao%2F6VQCkhxk5hdTYpORAbsEuZeA%2FT3aFmo3O7TdRSS8UjsDr%2FqgAy4Q8qb8gs9PGHkgQQu1jlFk8pdzDnq%2FtcrQ2OTe7HUQDdco2iajmrFdyR50b6weh1NrR9H609O%2FfdvuGt%2BnptvriELIpzt1qY8AEdgjKFRZcYpL94a8Y%2FkiBO9IXwDwD8GKOPZNQ7RhgleAb7n6CFKGI328p0Z2KeG0q8r8dtGWOz9na4BKHCPLD%2FfHPj%2Bd%2BFd7jZVuRl4EcQ6ULBHe%2BVrlzNJfE0ZxAYFMnu2YPJQzScVl5RcWrI1ceTkpM7Z70c6cfsahEcx7mHSE5Yg2eeGQWDxSAH7FCMsVsj2Hp3yh3NtnbNmL9MN%2FR18AGOqUBLZ%2BEtEdqdBOWmdi10db4FgUyS7lRG%2FMLwFdNBZNBike12%2B9HkYYAwgpnFIUT3IEHXu0QT2hINz%2BqD6HMNGJP9keAOrAUpgxb0CidRmb%2BFD%2BGJYDPY%2FSzyYNvJD83Lk1D8HlQoG8xhl1qmdUCnP4TzTE07CEwOxWMoz9Rbdrj1OTsgTxJ4zwJ%2BVT09VAthRe8K3bHfeau%2B8RjPvcKFBzhicOdXTNd&X-Amz-Signature=694732f9e3f921f482b9fbf97ff2b050bbac313f59351f8ba0f43730e96b10a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
