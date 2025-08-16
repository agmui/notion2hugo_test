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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36VCRW5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCUvdvdQ%2BCBj8DLUE55yHTS4ThZ0iZdLxO7hD2dvA%2FhqgIhALp%2F4ZA9pwLGBPQAFSi6iK%2FcFw3vxBUeltqvxqRD1mTBKv8DCGcQABoMNjM3NDIzMTgzODA1IgxnW1R2t7iAhcYWnP4q3APbJLBFled7EnztTY4NhEHAaXG%2FSCQZK7FflTRGrjXQHVndHr4aVdwD0i%2FanUHzREUxehJINm%2FGY0C%2FKL%2F1KKniJADJHyM9srDeeBTPKxV%2BQCRD4OQnWmmRc4Ez2CBCIpmapsoxRqUCXDsw5Eb84vs5AmkKmE2WKfeMKHK6xb949q%2FeVB4M0b17LkLxbxV%2BJ8Og4pX0QPw%2FhbUmJuEn9xQNg3iA9Ae4x11NglLd7Asl5I9796K1K8EbNVERYRLGFmjORZ88JUBQ%2BQo7nqSnHbAWpVvHrhb%2BYQ%2FaXjFx49u2KrEVyq6UrCooWuvcvGQu9DvrUCqIxzb50OE8WQpqciPPIFYmSyU%2BatXVeL8C6i02tHjkfA6DUfQuuRRlVsjlXS0ymMQkRdgQ%2BIT0nA3Solu5mfvKJCR6jA%2Fzqe9Ffec58MBbSsaorDex9sinrKQuzOEqN73RoMBAitNM7NfWObDZGkU9YOw6183zpmaeZ%2F%2BjVH64ex8nWYn8yoGCeZJS7GHJlP%2BFw0uHGN5Uq%2BzOJ8g9kc5BEQopdV%2BI5n56pbGK2hSxqJ8oPVFOSIvNFkwzMFAnWchsavgBevCfyX3nboxL9gLeQwhUKbJORba8Q0AQCE14nXT%2F9oYBwOecnjC%2B2P7EBjqkAabU%2FdhS%2BgAJd8Ya8Liwl%2B2j4VZDI5B3G8g%2BcCidmfV1COcfuGlVNGmZB9wE2l3DXhnpl29dVuZ4U9gPkdJSFgAdblNj7CLzZfOdZgApW%2Fox1aEvW37N49A8yikX28Da4D7Q7mAJjeC4ssBUNJlMtaY%2FdSHEiYUIZwKfmSRP0RZt0M5h%2FnotagfYYBksXxNT5MmTt0Nu0b80g0j39yGk3tW1Z203&X-Amz-Signature=45e19786467f09686975b7e35a201f51be55586a6ba57df9cad9f56762dfb635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36VCRW5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCUvdvdQ%2BCBj8DLUE55yHTS4ThZ0iZdLxO7hD2dvA%2FhqgIhALp%2F4ZA9pwLGBPQAFSi6iK%2FcFw3vxBUeltqvxqRD1mTBKv8DCGcQABoMNjM3NDIzMTgzODA1IgxnW1R2t7iAhcYWnP4q3APbJLBFled7EnztTY4NhEHAaXG%2FSCQZK7FflTRGrjXQHVndHr4aVdwD0i%2FanUHzREUxehJINm%2FGY0C%2FKL%2F1KKniJADJHyM9srDeeBTPKxV%2BQCRD4OQnWmmRc4Ez2CBCIpmapsoxRqUCXDsw5Eb84vs5AmkKmE2WKfeMKHK6xb949q%2FeVB4M0b17LkLxbxV%2BJ8Og4pX0QPw%2FhbUmJuEn9xQNg3iA9Ae4x11NglLd7Asl5I9796K1K8EbNVERYRLGFmjORZ88JUBQ%2BQo7nqSnHbAWpVvHrhb%2BYQ%2FaXjFx49u2KrEVyq6UrCooWuvcvGQu9DvrUCqIxzb50OE8WQpqciPPIFYmSyU%2BatXVeL8C6i02tHjkfA6DUfQuuRRlVsjlXS0ymMQkRdgQ%2BIT0nA3Solu5mfvKJCR6jA%2Fzqe9Ffec58MBbSsaorDex9sinrKQuzOEqN73RoMBAitNM7NfWObDZGkU9YOw6183zpmaeZ%2F%2BjVH64ex8nWYn8yoGCeZJS7GHJlP%2BFw0uHGN5Uq%2BzOJ8g9kc5BEQopdV%2BI5n56pbGK2hSxqJ8oPVFOSIvNFkwzMFAnWchsavgBevCfyX3nboxL9gLeQwhUKbJORba8Q0AQCE14nXT%2F9oYBwOecnjC%2B2P7EBjqkAabU%2FdhS%2BgAJd8Ya8Liwl%2B2j4VZDI5B3G8g%2BcCidmfV1COcfuGlVNGmZB9wE2l3DXhnpl29dVuZ4U9gPkdJSFgAdblNj7CLzZfOdZgApW%2Fox1aEvW37N49A8yikX28Da4D7Q7mAJjeC4ssBUNJlMtaY%2FdSHEiYUIZwKfmSRP0RZt0M5h%2FnotagfYYBksXxNT5MmTt0Nu0b80g0j39yGk3tW1Z203&X-Amz-Signature=895530946e0ea4ce261949ba7377be61c9920caa3730cfca86a51752294b2128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36VCRW5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCUvdvdQ%2BCBj8DLUE55yHTS4ThZ0iZdLxO7hD2dvA%2FhqgIhALp%2F4ZA9pwLGBPQAFSi6iK%2FcFw3vxBUeltqvxqRD1mTBKv8DCGcQABoMNjM3NDIzMTgzODA1IgxnW1R2t7iAhcYWnP4q3APbJLBFled7EnztTY4NhEHAaXG%2FSCQZK7FflTRGrjXQHVndHr4aVdwD0i%2FanUHzREUxehJINm%2FGY0C%2FKL%2F1KKniJADJHyM9srDeeBTPKxV%2BQCRD4OQnWmmRc4Ez2CBCIpmapsoxRqUCXDsw5Eb84vs5AmkKmE2WKfeMKHK6xb949q%2FeVB4M0b17LkLxbxV%2BJ8Og4pX0QPw%2FhbUmJuEn9xQNg3iA9Ae4x11NglLd7Asl5I9796K1K8EbNVERYRLGFmjORZ88JUBQ%2BQo7nqSnHbAWpVvHrhb%2BYQ%2FaXjFx49u2KrEVyq6UrCooWuvcvGQu9DvrUCqIxzb50OE8WQpqciPPIFYmSyU%2BatXVeL8C6i02tHjkfA6DUfQuuRRlVsjlXS0ymMQkRdgQ%2BIT0nA3Solu5mfvKJCR6jA%2Fzqe9Ffec58MBbSsaorDex9sinrKQuzOEqN73RoMBAitNM7NfWObDZGkU9YOw6183zpmaeZ%2F%2BjVH64ex8nWYn8yoGCeZJS7GHJlP%2BFw0uHGN5Uq%2BzOJ8g9kc5BEQopdV%2BI5n56pbGK2hSxqJ8oPVFOSIvNFkwzMFAnWchsavgBevCfyX3nboxL9gLeQwhUKbJORba8Q0AQCE14nXT%2F9oYBwOecnjC%2B2P7EBjqkAabU%2FdhS%2BgAJd8Ya8Liwl%2B2j4VZDI5B3G8g%2BcCidmfV1COcfuGlVNGmZB9wE2l3DXhnpl29dVuZ4U9gPkdJSFgAdblNj7CLzZfOdZgApW%2Fox1aEvW37N49A8yikX28Da4D7Q7mAJjeC4ssBUNJlMtaY%2FdSHEiYUIZwKfmSRP0RZt0M5h%2FnotagfYYBksXxNT5MmTt0Nu0b80g0j39yGk3tW1Z203&X-Amz-Signature=5f1890ba97a0ee13a61734b542852cd88537d893bc042b9217b6896fdf003584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7SABAO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICGNwi3Wk8X7XiYvvOz01Rvkn%2FhVreRKRUFu%2F602bxbIAiBT%2FYfFexgvPaz%2FjKh455dEvf2Bx1gdRkeR1f9L8bMygCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMn0Mi9pFTJJDnrxiQKtwDZmLNL2j4pFb1nFebtdlaZAAoYAXVIsvLut9AHqfhjw%2FEqMLG71lpAYA0xirBOdw0htvkDjy8jJL1UlafbmTdR9CegP6xzM1xuVpbkXLuGD6Sf%2FaRgL0uUJtpO3hwEA043YOtLoNOx6%2FKXH71%2FqsaYjz5zA1%2FM5zdm8t17S74IcLcClZ9UaviKHQyEx692m05XKdUGdMzhXDgx6zT0CdZyZxlzn%2FtnNT%2Bm8AO6SEqc%2B4D4ArfOOQJNs%2B9bDwwkLaqrEl%2F8U6Bwzu7KqZcEmsiz0vfLjQ4fkAzwPaii6jOrEEng1HVn4ULwgfvhYL%2BzYj03SS2PYzwgYv3ldxBGWyYNWruATj0viCdv%2BOkzvg4jo16LfMixFxntcDYRR7w2O8p8KqfsRphzs64%2BunO1mwj%2B%2BTVjXgzmpvs%2BT6FKqHWSVETlmsiJDuk6ZN67QV2WPGr006%2BWJYv%2BdEvosyDqsd%2Fp2Y25x0GNTsHa%2FoT%2F1xsLfod46rfcABcpc%2BuksBwFOU0gOGcvGEVUVEpwNxATmPCMYu%2Fo8d4BMaznqJXm8bVWoK6kTpr8%2BytqIKhmDahtDkRY4MkOyO9lN%2B8w5l1aHDBS1N9%2BTXjOQIqwstxjoZkXLKWm49WuCuKLTPon24wgtj%2BxAY6pgEpDOScvztEZn%2FAkLI8NvQLiadyOpF3nj6PfaMaOTPNUQONG%2F7xFEy6LXpyeQ54%2Fu5XiJ1sOEkqhRMVSsaLofVqcxI%2F%2B7zy7wDojr%2FsAg13nQHNJWbUFQ%2BmSUAM0px9s7nVEs1kKFl1uoapJyb5vfdveULIrERUIc1ztzKiR5hqpb8TB3b0RrVzZqgqTNKIGIakupoZeOIwFK0xF0g8CiJAD2iacN1F&X-Amz-Signature=23cb64f0d978e9cde1ee7d6f754cf3e99ea8105f52ca4326fe5b17aa6d9da450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PDGSE6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEGvAjKY6P3GPc3Db8KW1ichaHQPVW6I1kijcGZLKHPyAiATdXmU5osc6hyTxAdREfWDFohqVMpVytZbP4oJwEAh6yr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMIneCD4%2BFBE5ilTXJKtwD0rpshC2vCuwdlj0jlBYwmywoFskiK%2BXBA3AqqddHECv%2FM11Ywi13jbDlv1jIE78HOVxsqYnNshjDXZpAwElIMXeDV4Cena5L6GnM9fGwUoeHWNpGOJiQD0jTMGNt%2FfU2mfAXQSI3KvAsYZI6MudE8MlpIfHcehg4F9tiorTfeRnPfUYmpGS7uIgfDxg2SEFL58as1ouUZf15t3vhS%2FqT3HIG8TpwVO%2BwYlVy0ffcTKBNVWh8Ypc2y%2FhVOvHi3IRV2j9ixLhldV9xOnzzGISn5kckFWDwVbN2Hxuw8jafcozBgcuuQYNgHCNYDQJtJY9DQUVSZ%2Bo3gxoWljuycTJBDjoB4ZH%2BYRSYja8D5sA9%2FEzTxAF19PuccqhEdBze6rXgbbAA3FBrE7505hEJY1zYR0tGNSiKf6E7xAhVqbLNDtAeVi143mA7T1jpZzBF70UoZFXNRFh0PAYa3QXJJeaSVW6KwBpCXFyD%2F5Z%2BX9%2BB694gbjsoOy1Fq%2BYPeonphlwrKRhyeMMNL4T3AyK4OKVeSxL%2FiCXlyZY%2FDRBfk5UD%2FId5QWcv4ViWezWPE0qZIjTZaXaxr5bWmt7uVykGwkRmXLV%2F2xNPrVrS1kTOMGC1%2Bc9yqr73yKnXGk82lcQw6Nf%2BxAY6pgHtqHifoh%2B8OyioomcGdpV8zmBAsGSCtnQrFDWo5369ldXwODJWAuwBLoPMcilWNk3PMqiMgSqG%2BB0tF6UYC6a%2FUFTIgvJl3mEoisM7zSL2DNBVYqtABAkvqV2o%2BLgeSb8v10uQ59z89NompGKwMSGNY4%2F%2BHTCZMQV7vxaXfzMlYk8HrmxquRo3nSDSeoPC9wmV962Zm4O53EZ1tBvcyyV%2Fgdh3VERg&X-Amz-Signature=d019f90c649a19cea2e45f0da757dbef1b12a4f6b4c9c08264dbf052e3a5bd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36VCRW5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCUvdvdQ%2BCBj8DLUE55yHTS4ThZ0iZdLxO7hD2dvA%2FhqgIhALp%2F4ZA9pwLGBPQAFSi6iK%2FcFw3vxBUeltqvxqRD1mTBKv8DCGcQABoMNjM3NDIzMTgzODA1IgxnW1R2t7iAhcYWnP4q3APbJLBFled7EnztTY4NhEHAaXG%2FSCQZK7FflTRGrjXQHVndHr4aVdwD0i%2FanUHzREUxehJINm%2FGY0C%2FKL%2F1KKniJADJHyM9srDeeBTPKxV%2BQCRD4OQnWmmRc4Ez2CBCIpmapsoxRqUCXDsw5Eb84vs5AmkKmE2WKfeMKHK6xb949q%2FeVB4M0b17LkLxbxV%2BJ8Og4pX0QPw%2FhbUmJuEn9xQNg3iA9Ae4x11NglLd7Asl5I9796K1K8EbNVERYRLGFmjORZ88JUBQ%2BQo7nqSnHbAWpVvHrhb%2BYQ%2FaXjFx49u2KrEVyq6UrCooWuvcvGQu9DvrUCqIxzb50OE8WQpqciPPIFYmSyU%2BatXVeL8C6i02tHjkfA6DUfQuuRRlVsjlXS0ymMQkRdgQ%2BIT0nA3Solu5mfvKJCR6jA%2Fzqe9Ffec58MBbSsaorDex9sinrKQuzOEqN73RoMBAitNM7NfWObDZGkU9YOw6183zpmaeZ%2F%2BjVH64ex8nWYn8yoGCeZJS7GHJlP%2BFw0uHGN5Uq%2BzOJ8g9kc5BEQopdV%2BI5n56pbGK2hSxqJ8oPVFOSIvNFkwzMFAnWchsavgBevCfyX3nboxL9gLeQwhUKbJORba8Q0AQCE14nXT%2F9oYBwOecnjC%2B2P7EBjqkAabU%2FdhS%2BgAJd8Ya8Liwl%2B2j4VZDI5B3G8g%2BcCidmfV1COcfuGlVNGmZB9wE2l3DXhnpl29dVuZ4U9gPkdJSFgAdblNj7CLzZfOdZgApW%2Fox1aEvW37N49A8yikX28Da4D7Q7mAJjeC4ssBUNJlMtaY%2FdSHEiYUIZwKfmSRP0RZt0M5h%2FnotagfYYBksXxNT5MmTt0Nu0b80g0j39yGk3tW1Z203&X-Amz-Signature=0fa128a43e9376d018333c43de1d15cff86d1785457665272b3dc718ea0adb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
