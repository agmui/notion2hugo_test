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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P4RKS2E%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCH1Y16VinLb8xFHapRp0s9WTvrDhT47lqJUdcp3l1rIgCIQChvXa1fLfQAyiPZuvE9Ac7lcU0mMh578SKtSsFlSUAaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzixBJjkXOnDI1LtKtwDO8BXRS85N0M7lp4dWEXrVLC6LzBsJKSPsIjAK5h0zgmEcNvMjf8%2FKN1xToYVcNBxlB%2F1X2uDSu72DTXrQ0wXhnpZeQrNpuBDo8SHnZm1I1UxVuXw73bGY8UUKT7g73JdMp33%2BinEfml618BYGp1gxx0oR%2Fm9NdNyHbgGyKyafzQKBh9bFL1A0LZ6ooFHNWO918clw1Y3QKfyW3TxMrB3qlGlOSDaVMWCHUdAjYAjtWbOmM%2BhlXfJuBJbDTjJ8GTZjtrUqr3sb27HHk5n8wu3GTEdOpugZ1%2BIgTkj5fosi4UUfTfjcJ%2FY5HO41BVoPX7Kwd3iSepVoVOLdzacvgOKCM9XK9A%2BGnNzf6GPcV0X1JB9FBbz8xyFjOhev1tZai0cqcPc6uKCXN%2BXnezTQZlxcDpNqBb9qSbA8K1SYwY4GCkd4PCj4P%2FwIJ3JUw8ueKCrsiygMSUq29eX%2Bcbtb%2BUj2MtonwcJNzucSJLUc%2Ftj614e9xLfEcVUL7fQTLdLrRv9152UrxunbOvgqbm%2FQiBOCZIixU2X%2FshNStin8MBe0V45%2FU59dAsiBv8DxRQI0jTPkYcISxSp5dUW2qbxvMFvT7iPOsx4UulD3TKf%2B5z0xXi5Z9S1ulPycJibYCcwuIr%2FwAY6pgF5WvkMOpJKtQ9YtvVuP9MWtWNULMlUzBFAmMb9CvtcVjs8uEGqGBixDaVmtIsJA5%2FEg%2BynjGkbqWwJkk9DBsz4QSLDnaxJ1f%2BCXCz1zmYf6%2B9IUrXosY%2Fe7YdaH3vH9NX3q7MhN5NOyBRQx%2BgG1s2KUAuen%2B4MTSRgfTW9bz5sH1FL%2FuLXx8%2FtCPro1ivzViYEGuLgS71jDo%2BNSG9Yd8YEsbR3dBMC&X-Amz-Signature=9680596127deaa4fbf0bf262b874dbf29b5ed22eb72db70543fc52b93841c97f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P4RKS2E%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCH1Y16VinLb8xFHapRp0s9WTvrDhT47lqJUdcp3l1rIgCIQChvXa1fLfQAyiPZuvE9Ac7lcU0mMh578SKtSsFlSUAaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzixBJjkXOnDI1LtKtwDO8BXRS85N0M7lp4dWEXrVLC6LzBsJKSPsIjAK5h0zgmEcNvMjf8%2FKN1xToYVcNBxlB%2F1X2uDSu72DTXrQ0wXhnpZeQrNpuBDo8SHnZm1I1UxVuXw73bGY8UUKT7g73JdMp33%2BinEfml618BYGp1gxx0oR%2Fm9NdNyHbgGyKyafzQKBh9bFL1A0LZ6ooFHNWO918clw1Y3QKfyW3TxMrB3qlGlOSDaVMWCHUdAjYAjtWbOmM%2BhlXfJuBJbDTjJ8GTZjtrUqr3sb27HHk5n8wu3GTEdOpugZ1%2BIgTkj5fosi4UUfTfjcJ%2FY5HO41BVoPX7Kwd3iSepVoVOLdzacvgOKCM9XK9A%2BGnNzf6GPcV0X1JB9FBbz8xyFjOhev1tZai0cqcPc6uKCXN%2BXnezTQZlxcDpNqBb9qSbA8K1SYwY4GCkd4PCj4P%2FwIJ3JUw8ueKCrsiygMSUq29eX%2Bcbtb%2BUj2MtonwcJNzucSJLUc%2Ftj614e9xLfEcVUL7fQTLdLrRv9152UrxunbOvgqbm%2FQiBOCZIixU2X%2FshNStin8MBe0V45%2FU59dAsiBv8DxRQI0jTPkYcISxSp5dUW2qbxvMFvT7iPOsx4UulD3TKf%2B5z0xXi5Z9S1ulPycJibYCcwuIr%2FwAY6pgF5WvkMOpJKtQ9YtvVuP9MWtWNULMlUzBFAmMb9CvtcVjs8uEGqGBixDaVmtIsJA5%2FEg%2BynjGkbqWwJkk9DBsz4QSLDnaxJ1f%2BCXCz1zmYf6%2B9IUrXosY%2Fe7YdaH3vH9NX3q7MhN5NOyBRQx%2BgG1s2KUAuen%2B4MTSRgfTW9bz5sH1FL%2FuLXx8%2FtCPro1ivzViYEGuLgS71jDo%2BNSG9Yd8YEsbR3dBMC&X-Amz-Signature=da6f9317556d032309d3313a138efa4fc9ce1a1675001bf75ee5ec31d007891a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P4RKS2E%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCH1Y16VinLb8xFHapRp0s9WTvrDhT47lqJUdcp3l1rIgCIQChvXa1fLfQAyiPZuvE9Ac7lcU0mMh578SKtSsFlSUAaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzixBJjkXOnDI1LtKtwDO8BXRS85N0M7lp4dWEXrVLC6LzBsJKSPsIjAK5h0zgmEcNvMjf8%2FKN1xToYVcNBxlB%2F1X2uDSu72DTXrQ0wXhnpZeQrNpuBDo8SHnZm1I1UxVuXw73bGY8UUKT7g73JdMp33%2BinEfml618BYGp1gxx0oR%2Fm9NdNyHbgGyKyafzQKBh9bFL1A0LZ6ooFHNWO918clw1Y3QKfyW3TxMrB3qlGlOSDaVMWCHUdAjYAjtWbOmM%2BhlXfJuBJbDTjJ8GTZjtrUqr3sb27HHk5n8wu3GTEdOpugZ1%2BIgTkj5fosi4UUfTfjcJ%2FY5HO41BVoPX7Kwd3iSepVoVOLdzacvgOKCM9XK9A%2BGnNzf6GPcV0X1JB9FBbz8xyFjOhev1tZai0cqcPc6uKCXN%2BXnezTQZlxcDpNqBb9qSbA8K1SYwY4GCkd4PCj4P%2FwIJ3JUw8ueKCrsiygMSUq29eX%2Bcbtb%2BUj2MtonwcJNzucSJLUc%2Ftj614e9xLfEcVUL7fQTLdLrRv9152UrxunbOvgqbm%2FQiBOCZIixU2X%2FshNStin8MBe0V45%2FU59dAsiBv8DxRQI0jTPkYcISxSp5dUW2qbxvMFvT7iPOsx4UulD3TKf%2B5z0xXi5Z9S1ulPycJibYCcwuIr%2FwAY6pgF5WvkMOpJKtQ9YtvVuP9MWtWNULMlUzBFAmMb9CvtcVjs8uEGqGBixDaVmtIsJA5%2FEg%2BynjGkbqWwJkk9DBsz4QSLDnaxJ1f%2BCXCz1zmYf6%2B9IUrXosY%2Fe7YdaH3vH9NX3q7MhN5NOyBRQx%2BgG1s2KUAuen%2B4MTSRgfTW9bz5sH1FL%2FuLXx8%2FtCPro1ivzViYEGuLgS71jDo%2BNSG9Yd8YEsbR3dBMC&X-Amz-Signature=822141e26f5bd6827e87f566cead1986bc020159bb5245a493c605c054a387a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL7YFPY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC3wCRy1XHmFUw%2F7BMFu%2B8v3E%2Borb93Gv%2F7TEUuyo6oUAIgKEXnFEACkGN2NPq%2FpDCV%2Fb0pe76WcJI6%2BZYc1jY51fMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhikUrT71ZgM3V4NSrcA2poBkGvyvGaR4QEp2eQeS%2BQ58lKCS8bB9jm24ISOaKY1seZjmrKKwE7wftrt4QzAyTcJ6KRdFtFBO1W294EGpjzNq8d2n7kZmZOAgusY1KXtYa64e0IFqhm8ZGWwDDbqMTvfB1Cd7tlF5Cp2rqH%2FPJnGX3zYSrpUDx0ScMWSpFy7643M2jZm%2BLYE8xo18j9WGFwv3oycaawJ0wj2H7MO3RZ%2FcC%2FK%2FDM3JJ8hk9RtZO%2BhybmPSOq8nQ6gNWlkt8uMRIV6vXIkbjwR8hsG02pJuDno4nG%2FfNZbroxK1nZws%2BnfRYL5Sx%2BC04Gs3QRzKDEjq5qmFkohGDlXfqA%2BLdVac1BmBtjX4KRIQGZmdhvuL9gjuoR4WZmWKg2gdnMGdZwPMAZX7MHqZVn%2FsEWUuV%2FDqIqk%2FkDDjSMl4alD4b00F5j2DQe9WUdGar6WoCc9gPnK54aM8RzJIFk0bELhjY77NqYo8xhgQsBWDP0meh92FyjiDuuLzYRp%2B4CtOq5xRYswQcWdvGnlE2K4yMTE5R8O6EFa07lX4DyApo34Yh5OFb%2BwPPIZneYnds%2FFqB9JV%2FzhB%2FttcaJdG5A2BqdXmp8u08%2FbfSWDoGUqAUPJgb0ehtHv0FgiMLEkwe1Bpw9MM2K%2F8AGOqUBIO3bUcTX2LBoE4T5or9rICmaP6qqE6yrA4UwjML4cgjkt6wl9HySekYkHwKOt19%2FnQijhNcRG8YlWQAG7aTRrxaSpswitcKpR%2BWaS5JvhGpX%2B3pYqq2GxBDYDEsa0Ho89tL9ZI5%2FGkVF7hUKjWvgPkkcCqUyDs9UGs5%2FAit89UGqqt4oJ8%2BbbGACJt5KC%2FqyBl9CCZ5CNbOr7V09UyyCnF1xBGiw&X-Amz-Signature=6832a380ae4c9d26b3f8393735f8e4a46349cf55e0d362ae6fa09e464ddd5f33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KW7J4SP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEicTeCTwCiVIzO%2B5zV%2Bfe9Xs0DZ74SWnq7WpgNovqykAiEA0mfDnFz7uVWE1uMZIkFJOtEfPv%2FrHMr9NQvIrU60AwsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5DHRTxcJ73iTulfircA%2FFP6Zl5jSishHtRMMz79Ehv%2Bj6OZteGQX72cjaWBKZfb0gMteHMoAyV6bu6tcQM7q63XcPdUF7%2BiZs3jGC8nRH3wF033c0FVr3dPPnmszxReomuwWPuXfmSG44z0mGpFtL4NflLpy3z4%2BdTHjQVAkPrDp7ai6Z%2BBRhLYoLRb1GaJepZzlyJZJASC6CRwqcgm37PFs2L7PmUkgh1OXNmmbSuLMF%2BBXXVUUf6jEDauXSV%2B1P6JHD54xdN84FwLMnan6sh897aLnyIzdv9fVkN%2B%2FLKovlJ5KQ7mUNE3pfjF97wEs5Un4kteKPGhLrfoll%2Fra%2BIRCXDM9sK4xhTZPjOfwKdB5teJkS1xcpnYAnhaBXJwuvHibWNhqZ%2BGO7fU7oZ8T6ruTf0DoP8lsXHUVd9Z0EaDHLfvLwNsNu8GiT0uH8V9Lf3bNbU%2FY%2BTjTFsQtymoJUeXmePg%2FkF83N4A2VR6%2FlBfY%2FxVmzpAgtVA7AW9YRTOva86pWOfQLscY85Z1IXi%2BKNADBrkzB6C0F3OPNg4kFcPmJypbJT8k6RVl%2FOs%2FDeqM53Fl9sHZ2Ss1bMREHQn4wA1xB%2BlT8b5whSRLRClkcTX6SGDClma5VXGNJsp3CJEWjmJd8ndVrlBsmGMN%2Ba%2F8AGOqUBGi8Bla3FrKjsMK1ZuoVmcd3os2cm01Og0tkztd962hNVoFHESTIaVnMq3uMAJ%2FAPh9I%2F55TYLtfGGjv5lsq2X49DxBT5DsrY3jA7Ih51P1WOY7yDF9PCYeP%2FGlfLtJQ2i6y9vGdbjk2em1ulvxIVOiLIpOBgAhkiQDsEJO2No3merv19wz31tE4FBED8l48RCSP0CEXFgzm1UTQB6m5wcrDzGBFL&X-Amz-Signature=bbb8c844998592fbac4c39fc164ef8f55351ade059af85a2d804153489f562d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P4RKS2E%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCH1Y16VinLb8xFHapRp0s9WTvrDhT47lqJUdcp3l1rIgCIQChvXa1fLfQAyiPZuvE9Ac7lcU0mMh578SKtSsFlSUAaiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzixBJjkXOnDI1LtKtwDO8BXRS85N0M7lp4dWEXrVLC6LzBsJKSPsIjAK5h0zgmEcNvMjf8%2FKN1xToYVcNBxlB%2F1X2uDSu72DTXrQ0wXhnpZeQrNpuBDo8SHnZm1I1UxVuXw73bGY8UUKT7g73JdMp33%2BinEfml618BYGp1gxx0oR%2Fm9NdNyHbgGyKyafzQKBh9bFL1A0LZ6ooFHNWO918clw1Y3QKfyW3TxMrB3qlGlOSDaVMWCHUdAjYAjtWbOmM%2BhlXfJuBJbDTjJ8GTZjtrUqr3sb27HHk5n8wu3GTEdOpugZ1%2BIgTkj5fosi4UUfTfjcJ%2FY5HO41BVoPX7Kwd3iSepVoVOLdzacvgOKCM9XK9A%2BGnNzf6GPcV0X1JB9FBbz8xyFjOhev1tZai0cqcPc6uKCXN%2BXnezTQZlxcDpNqBb9qSbA8K1SYwY4GCkd4PCj4P%2FwIJ3JUw8ueKCrsiygMSUq29eX%2Bcbtb%2BUj2MtonwcJNzucSJLUc%2Ftj614e9xLfEcVUL7fQTLdLrRv9152UrxunbOvgqbm%2FQiBOCZIixU2X%2FshNStin8MBe0V45%2FU59dAsiBv8DxRQI0jTPkYcISxSp5dUW2qbxvMFvT7iPOsx4UulD3TKf%2B5z0xXi5Z9S1ulPycJibYCcwuIr%2FwAY6pgF5WvkMOpJKtQ9YtvVuP9MWtWNULMlUzBFAmMb9CvtcVjs8uEGqGBixDaVmtIsJA5%2FEg%2BynjGkbqWwJkk9DBsz4QSLDnaxJ1f%2BCXCz1zmYf6%2B9IUrXosY%2Fe7YdaH3vH9NX3q7MhN5NOyBRQx%2BgG1s2KUAuen%2B4MTSRgfTW9bz5sH1FL%2FuLXx8%2FtCPro1ivzViYEGuLgS71jDo%2BNSG9Yd8YEsbR3dBMC&X-Amz-Signature=51698f319d5e7c6a0e2c17eecb8d01bd0f899b953c284ef2cca9b3cf320d4dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
