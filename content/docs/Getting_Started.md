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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7HAX2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCe6mbhvUhlbwjHAeuxek4b4GGPEb2Qx7R5IveizD9FxQIgbTqk%2FOYqp%2F1kbeWkC%2BZJ1rNEhjyYjmJCzUbqozNTHO8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArCbalEggnm5kK6yrcA6ZtZv009j%2F8KzvT9SgHTX%2BcsRDm8RpTMtEKk2HOMNZwU3W9UE9GD5EmGXvvpnphzFetnmBoMSd5NWZaA1CHFtJ9nYsOta%2FeITnfHCfD4sjBJ%2BKlzj8%2FZbFjIQVLuFfIbUsc7KGvgxSAy%2FIFPCdz%2FxBAQFmS9ZoARs0lAu0ezk8PAXijSG3Vz7oJ1y%2FB%2BfKRQLDmtjZi1N0KD1ccC44mKxZhRaWRs%2FTsIFTYDnk6RXupNiWX95h8LNzHgRPAsEiH9J7I1qzfDEg4IEYZe4TJRAWlbqnQIzQNmPVaxvMstDivwvyc4lu2IM577VOJz%2BIQk1CJM99KtizixbtK%2FgWDy68Rbtx0MV4iyhUF6VkKhCGZFlqKa6lWuOwSXxstBtrq9uAhQjkRSQ2%2BOUgeu4RyKlZ7UVtZ%2B9NbuGJa%2BIr4zFOl8Ac8NDBBddnLRLc3RBKC%2Bd7cckZOm0irniItxb1e6y7YUu9%2FM9WPriEJzob5ttKgK9L4hmep%2B06e5OjdP4x%2Ftsu1sx3I%2BuMXLRfmCARc38AZ06jSdWwYAw6KoI72O2dQ4pORNba2jp9RLEjJWa7XMuTPoHBq%2BClHMNxV05NA6vZBsw54Spfeyprpxe0oojgyJxg%2BxAzj%2B7m1R8ZuMKODj8AGOqUBQoyPH4GjUP4timNDGG0UybPWNjxZk4eyXEmVsNcS9F0%2Fm4%2BRZClaVDveK3vBnpZ%2BQ3AUbk7vcOZVb3iVI%2BwTCvE%2BTMddThSdASAx5tsTNySzu6pDrTdfmXLUw1ns2alQR%2FQsbcNeco9%2BfWHs8Io96aVmbc75OU5XvGmtHFnqHpVtsHo49bo%2BCGpqTx7MqsjSXzn7UgP6ROIgP%2Funycm%2FoZV%2BD9Dg&X-Amz-Signature=396bee023e061bcb8313e909369ec980465f582db527518e3181f8ba90b0b9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7HAX2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCe6mbhvUhlbwjHAeuxek4b4GGPEb2Qx7R5IveizD9FxQIgbTqk%2FOYqp%2F1kbeWkC%2BZJ1rNEhjyYjmJCzUbqozNTHO8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArCbalEggnm5kK6yrcA6ZtZv009j%2F8KzvT9SgHTX%2BcsRDm8RpTMtEKk2HOMNZwU3W9UE9GD5EmGXvvpnphzFetnmBoMSd5NWZaA1CHFtJ9nYsOta%2FeITnfHCfD4sjBJ%2BKlzj8%2FZbFjIQVLuFfIbUsc7KGvgxSAy%2FIFPCdz%2FxBAQFmS9ZoARs0lAu0ezk8PAXijSG3Vz7oJ1y%2FB%2BfKRQLDmtjZi1N0KD1ccC44mKxZhRaWRs%2FTsIFTYDnk6RXupNiWX95h8LNzHgRPAsEiH9J7I1qzfDEg4IEYZe4TJRAWlbqnQIzQNmPVaxvMstDivwvyc4lu2IM577VOJz%2BIQk1CJM99KtizixbtK%2FgWDy68Rbtx0MV4iyhUF6VkKhCGZFlqKa6lWuOwSXxstBtrq9uAhQjkRSQ2%2BOUgeu4RyKlZ7UVtZ%2B9NbuGJa%2BIr4zFOl8Ac8NDBBddnLRLc3RBKC%2Bd7cckZOm0irniItxb1e6y7YUu9%2FM9WPriEJzob5ttKgK9L4hmep%2B06e5OjdP4x%2Ftsu1sx3I%2BuMXLRfmCARc38AZ06jSdWwYAw6KoI72O2dQ4pORNba2jp9RLEjJWa7XMuTPoHBq%2BClHMNxV05NA6vZBsw54Spfeyprpxe0oojgyJxg%2BxAzj%2B7m1R8ZuMKODj8AGOqUBQoyPH4GjUP4timNDGG0UybPWNjxZk4eyXEmVsNcS9F0%2Fm4%2BRZClaVDveK3vBnpZ%2BQ3AUbk7vcOZVb3iVI%2BwTCvE%2BTMddThSdASAx5tsTNySzu6pDrTdfmXLUw1ns2alQR%2FQsbcNeco9%2BfWHs8Io96aVmbc75OU5XvGmtHFnqHpVtsHo49bo%2BCGpqTx7MqsjSXzn7UgP6ROIgP%2Funycm%2FoZV%2BD9Dg&X-Amz-Signature=1d1580a4a08a574b9d1f8765a7b7ceb96de8443e59dea4d264ffe4c6ae12b63c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663277YMDB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD2DI%2B44%2F5b4%2F0e8PGZgy0J5mBMSkKH2YCtjbR9uijt2QIgGyLobSS30IeRryNvJuPSzQpB5DGnFBvXyy%2Bip8%2BZ%2Bi4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FlyHCuT6A0UTWXlyrcA6mOU1PSu3HZQUuZ4FaXFeeWAeKQvvQuGLm2QOtKWDcm8K%2FR7n%2F1d5IVX0P2spf%2FndFk7mMb6bOLbsdylSk1r3RJEY8WUvg3kzXJtmJPpjMFGHw7lT0Z12VlboHw2kx3VPHE34ibzdqzkIEfA1C%2BmE7TTqBabA9C7TxCU2Z0KNwJU4Jz8R%2BnBXl4%2F0NjmKgeeFzLutLfc5A6EfqqxZbR9hJbZVN44%2BOASF81ixUj2fpI6%2B%2FVNqD8cxUtbhyRfn4gDguTcw1fXfKw1Wie6zTIvnLwilWKe7e2bJbQw%2BxsL7Tnhdc642Y7o2F9JD4q3BkQi9k6%2FVEDe2xQfdI3b8moRkgtKGD81q9bHdvmgitq7OEwiS41J2vydUfNeThx4rdK9AM5AtItgrVrRkh96HKSQBX4XeDygm1vC90%2FpwzGnDD6MiJy%2By2CWMPUccgvwy5DPbiypB1Nzyh0tac2krqeLmtrF9tuzhqQSrTboJmRQNIXqD1KblIy0p86hGmNRDnGjL26n2GPZ%2B%2F4R%2Bm7Itsv7IhbcP2MaJv%2Fdm5FUWm%2Bo%2BUGESdK6qo6gs5XUoEXEc3cf0YOeANf9NDeNch01VX3vIxjMs8oxIqKqr1QWdz3%2F3kGTK1IYRtdcN04gZl%2FMNOCj8AGOqUBn4RR6aMHd0JF2Sd65Arr7Q41fI%2F1%2FLa0H%2FuEyAD0z%2BENl24%2B7%2B9af8z12OgC4XkPJAyRIalIje%2FsefVQbPg4OTes2u9pEMkQW4mkiTybezezwP9cYJmgjIBEjfoQg8mwdwCaw5tkmJu6f9AhI6KE7eSWDSn8GK%2BhZgrqHL5uD%2BDb04qneyAE519XUO%2Bs%2F63xVmezvUTeeRN7oGUjbUsWgHceIZy6&X-Amz-Signature=3aee08d63e3174a215b230a0ff77e1f2f35305981708ff25f53dcdd4fa585a96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBRGVE67%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDr4cd4ahzivouaE25D66MvjIw9pnYAnJPTHgHNk0NbawIgBAtQ463%2F%2B3Z1J4BnRKBda4FM2LioCgUqXjeE5WeAuKIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRwdnmumvuz8WJLiyrcAw5zeIJHYYMRTSsjXSOnDD8%2BqZWaKInG%2F2TzLgdRFbMsCvhDcSXycQifjpTgapgRe0c4dheiwfBCOLd7CelsO%2BIiZjYVc937hsbzNRStrRjmwHkRnoXGaJPYXHn80ZagvhkLr654086b39oQoWLjM1NLpmDD6KTyu4OBVFkhdivTXpC%2B1G967UmNO%2Bow%2FrC%2BulUeHl7LaOja44dexV2w2IfPZu72n0ZYOG1QwMnFNq7OTAB3e3D7cTOXCnc3xAWTu6doiBC%2FT1UArjwBBcE%2B5XovlNBePvtKHihKkRqo55WT11wBYSCbpnSAn0bgECOQP59Kbwyr%2FkPO74FDUegWe0IUW%2BcQSdJYmQE1h3hXERS6b17nfJ1JjhrDW2Yj1U9u%2BgdMkHCj4AdfP6psgnVc61iIhCUUImzHTETmRIPLFeE3%2Bs7nr9275zHpH02u4Dw61W0BQCI90XSOE%2F3OtbHeytWZGm6QwRLRTPu9Vwcqrkp1ovntfSy%2BlIeynxpH7vWehm2Si1qDQHabMYCMHFv9us2j8ai3qc1L7BPnU9WywXdIyorhedgJG6CDY8dF4R%2Bqu9SNOiGwfSkCt%2FQbypqz3Au%2BdqUYVS9XH1dJh3R2YM%2BEvkbx9JXx6vdP7zyRMKGDj8AGOqUBpysR8rvKXu%2FkNzoYfTqobBCLH7PGgDv812UC3cRpDjleE0agm7xgZ9Hd9rO9utqcD4O2DDjj9JPG54vUP7qtlWEblZEQ%2B9%2F1mN3Ce30O8AVecbP3hfzBvMPI1bK%2B1c%2FHb3zO7Bk3qk65Dn2GNgVfxI4TiFESyNFcdIMfnd4Y3%2FAHR5e2pr0KPPKLIetGMcD6HKhUZm0myT2TjfCvWQZaCLyp%2BWgD&X-Amz-Signature=f285e29d3b45549f570d6053b64dcc0442dcdef663cecc359d0c07172bf4d5af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7HAX2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCe6mbhvUhlbwjHAeuxek4b4GGPEb2Qx7R5IveizD9FxQIgbTqk%2FOYqp%2F1kbeWkC%2BZJ1rNEhjyYjmJCzUbqozNTHO8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArCbalEggnm5kK6yrcA6ZtZv009j%2F8KzvT9SgHTX%2BcsRDm8RpTMtEKk2HOMNZwU3W9UE9GD5EmGXvvpnphzFetnmBoMSd5NWZaA1CHFtJ9nYsOta%2FeITnfHCfD4sjBJ%2BKlzj8%2FZbFjIQVLuFfIbUsc7KGvgxSAy%2FIFPCdz%2FxBAQFmS9ZoARs0lAu0ezk8PAXijSG3Vz7oJ1y%2FB%2BfKRQLDmtjZi1N0KD1ccC44mKxZhRaWRs%2FTsIFTYDnk6RXupNiWX95h8LNzHgRPAsEiH9J7I1qzfDEg4IEYZe4TJRAWlbqnQIzQNmPVaxvMstDivwvyc4lu2IM577VOJz%2BIQk1CJM99KtizixbtK%2FgWDy68Rbtx0MV4iyhUF6VkKhCGZFlqKa6lWuOwSXxstBtrq9uAhQjkRSQ2%2BOUgeu4RyKlZ7UVtZ%2B9NbuGJa%2BIr4zFOl8Ac8NDBBddnLRLc3RBKC%2Bd7cckZOm0irniItxb1e6y7YUu9%2FM9WPriEJzob5ttKgK9L4hmep%2B06e5OjdP4x%2Ftsu1sx3I%2BuMXLRfmCARc38AZ06jSdWwYAw6KoI72O2dQ4pORNba2jp9RLEjJWa7XMuTPoHBq%2BClHMNxV05NA6vZBsw54Spfeyprpxe0oojgyJxg%2BxAzj%2B7m1R8ZuMKODj8AGOqUBQoyPH4GjUP4timNDGG0UybPWNjxZk4eyXEmVsNcS9F0%2Fm4%2BRZClaVDveK3vBnpZ%2BQ3AUbk7vcOZVb3iVI%2BwTCvE%2BTMddThSdASAx5tsTNySzu6pDrTdfmXLUw1ns2alQR%2FQsbcNeco9%2BfWHs8Io96aVmbc75OU5XvGmtHFnqHpVtsHo49bo%2BCGpqTx7MqsjSXzn7UgP6ROIgP%2Funycm%2FoZV%2BD9Dg&X-Amz-Signature=be7601c0975b3667f08f404b927d31161d2a41ad966e5c8596deaffe4f07ee36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
