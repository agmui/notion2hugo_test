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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7MNHZA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGeyXmvS6pL6EGOB3u8NNn%2Fy8GT4edPtWHXg4RgqplJjAiEA00fSRBCnXIetbOpUngm9bue%2F%2FL%2BLYbhWIjRWSZ%2BPZtYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLa1%2BBm8ZnsH0JaCrcA6jhTYQv3Vjtg4QfOFshq5W6yTEXCh1xrTgO6DcPE4urSviU8RPrhi50R1ZpN6wopK9Ppsz6%2BDqH1C9JEM5GxKwUEju8SYp7MXtfFcCdv%2BOmUtG4YdVASFlKKGq3MK9pg6YZmg7C%2FTz2r4vkS5CsVuK8RngyoLJqckiqxhqqQT4m6rbfZWWE8aztVyh9k2Iz%2Fkf1y0YETQ0U6NUVWQe2w1mEPHqOz7EDE0ddN8sTc1OVvHBkidaPeMixedR3%2BcSqoFWzO2yL4TMIz7rvOBCnYtrseCYGDEYRxrP%2Bm7kPXnUSNnruMHgWgA%2B%2BCYQQB48Z38S5%2F4JqWvmPHfK9ulPxqIWg8dDSQmVEFOGoNokPsXfzNjGJ7wAMoB6nbvJX6lhOgNVFv9ZpW56Spkvc19HE%2F4mScmlc8y0DZez%2FrW49o3Zbjvhja0K1aF18W9YU0pc9T2OOlumU33oxzMLvZLQZjmAkypC9qE8PWYheo8asN8WulOVram91i0p2CD98ng3nJFyLvtKfQPelKGdaevCeA9C6MdV9Q%2FW%2F9pSLfPoBHGvNlzQaVEQbEzyb40SWYap9wwH0Blk96z%2FLpuiUKOLWgEKXbXsubJli4E0SyTacars6YDn5XttZ1jJJ7L08MMHd3L8GOqUBQ%2Bcyazdt%2FzRvAcMDpLGL42nPpgEdOdaFuAvqEokKhHxNr3PDBks%2FKGpQ30RRUpzN%2F0Q8zBX%2BmYeT7%2FhuKWyaeOF2LqoKs6E%2Fcr2hU8hqvytNkx8tsqjb0i%2Bv%2F2YpOJfJNR6I4VlB9Al48hNxGeTUJFXJL9X3rkc0NVtJ4ZqsBgZ7p1q49gXMe%2BAnA3wQhXztD64vlJ%2BPFESGAbzvcz6r1Egqa%2Fe6&X-Amz-Signature=a8a2ecba61f386f3b84aa98d710609c97109104b06a3a63fa21794df7354fb0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7MNHZA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGeyXmvS6pL6EGOB3u8NNn%2Fy8GT4edPtWHXg4RgqplJjAiEA00fSRBCnXIetbOpUngm9bue%2F%2FL%2BLYbhWIjRWSZ%2BPZtYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLa1%2BBm8ZnsH0JaCrcA6jhTYQv3Vjtg4QfOFshq5W6yTEXCh1xrTgO6DcPE4urSviU8RPrhi50R1ZpN6wopK9Ppsz6%2BDqH1C9JEM5GxKwUEju8SYp7MXtfFcCdv%2BOmUtG4YdVASFlKKGq3MK9pg6YZmg7C%2FTz2r4vkS5CsVuK8RngyoLJqckiqxhqqQT4m6rbfZWWE8aztVyh9k2Iz%2Fkf1y0YETQ0U6NUVWQe2w1mEPHqOz7EDE0ddN8sTc1OVvHBkidaPeMixedR3%2BcSqoFWzO2yL4TMIz7rvOBCnYtrseCYGDEYRxrP%2Bm7kPXnUSNnruMHgWgA%2B%2BCYQQB48Z38S5%2F4JqWvmPHfK9ulPxqIWg8dDSQmVEFOGoNokPsXfzNjGJ7wAMoB6nbvJX6lhOgNVFv9ZpW56Spkvc19HE%2F4mScmlc8y0DZez%2FrW49o3Zbjvhja0K1aF18W9YU0pc9T2OOlumU33oxzMLvZLQZjmAkypC9qE8PWYheo8asN8WulOVram91i0p2CD98ng3nJFyLvtKfQPelKGdaevCeA9C6MdV9Q%2FW%2F9pSLfPoBHGvNlzQaVEQbEzyb40SWYap9wwH0Blk96z%2FLpuiUKOLWgEKXbXsubJli4E0SyTacars6YDn5XttZ1jJJ7L08MMHd3L8GOqUBQ%2Bcyazdt%2FzRvAcMDpLGL42nPpgEdOdaFuAvqEokKhHxNr3PDBks%2FKGpQ30RRUpzN%2F0Q8zBX%2BmYeT7%2FhuKWyaeOF2LqoKs6E%2Fcr2hU8hqvytNkx8tsqjb0i%2Bv%2F2YpOJfJNR6I4VlB9Al48hNxGeTUJFXJL9X3rkc0NVtJ4ZqsBgZ7p1q49gXMe%2BAnA3wQhXztD64vlJ%2BPFESGAbzvcz6r1Egqa%2Fe6&X-Amz-Signature=72d3ff97f2f5ab127ee59e9f3e65553d11248a05336ee5610f1c8c5c577c5733&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDP6X7B%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAJ%2B4cF5SMF%2BtlhjfCJLkIEh%2BiTJmkoT%2FsuFr%2FE%2BC2PhAiEA0BsHO9TFAEFgktKOiM9nNg2BnjCOfrTf0AzESTkqwmAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Mg52KSY4deQWUYyrcA5XUpJ31B02xIxN7iJD%2FhVroXlLb3ja%2FaOiHpMfm4%2B%2BOfIZzoe5CtbhX9RzMfRNU8sM1DzqKlYFIPAOnW2Jf%2FcBxMI9DuqHkk6LoBQy%2BIbmznOfkDMAi0fJycxlje0AiQv%2FoU%2B%2F6%2FrQAnrvRDvOxPcnrKeZLKWS%2BUK1XexXEtra0iEFinS5jFpVeIXOjeWtQnXI7U3CZbIGK%2B40VxNytWxCwMvikW9iHn9xdXPJgCKMn45cx8ZSIdXE9EeuPBGqDhMAP5x2rh04ZY%2FtQ5c4Da4TluaHeb5VeccoqbZsTAidhTnLwrRAy5mNfrlonv7qYW11mFvlZXrl8a65BZdjuMyToY8qr8tHQh0UYy%2Blr0qKez%2BTNJYmZ3mcEhgEa8yNgB9fl%2FKKLOqnk6kYnjeVLwmymkZ620J%2Fdi%2B94AfrWIAzIIHfPXZQQcNufaJ6W4PiZJrMwQMtDOA7Fr0p45Sadh4c12jgRyjcROVQuegVuiZm5ZTSVAOHo03y7pQ8gkUI5SC2JZBW%2FjsOTApe0rBKVhejPB%2FgqKG4RvakMSTQhnxgD3%2FmAIdkhB%2BoBlAFhGc9cyaWW%2Bsl1MzVDcveDRt5%2Fw1nfCC5e5D225XZRt7B%2BX%2FuVzdqrtroYT0Su%2BhTkMMbe3L8GOqUBjPteQ82uOCzdDIj0LhMLc8zNMfUmeeOQW%2BFs4vnkKknvcxiQXHP9JGfXalDu0GJ2uLY8obc8R6f%2FU4FgtAQbOV%2B4aHu1QwVcNe2L7UNC0630K%2BJ5iX6Fx7AR5vYr4eyi6jY1vtKriM6zlYU%2F5HpcLUH9ALkAwXCQhYei6LotbCTXnEn3iELkbGCxQsQ49IQdYC0lk989U9pE0AjHPYFDSPI9Bo6a&X-Amz-Signature=ddd30710ce8027adbe62aa7b669f378e8b7fd0ade1d8c7dc73a7c76bce9f2572&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIPNUERQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2FtYl4wiyaAccOJvUImeVnHsCYvAYs3zbAJOIw6fQDdwIgYrUNvKoDeZ%2FwFYO%2BU%2BfuLRSLghyAfrckPitiXKid7VUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwPkmfMRhYwrzjAQyrcAyJBBoafYeIj1%2FtEIRxbLtzTyBPBXMv9YHeyPKsiDpXy8%2Bc8DOGs6w%2FoVFin47rGWZ92uoA7a9SFB9PMtN%2BMDQ4zskEqikNPHcVwgIKeV39mcpYYjUCZO5yAYB8zA6kJpIGeMrBwyeH4H8J3NdY0VZjRt%2B2vUU4naQdZcYjUgX0xyt0u94UDmKKOixw376oCg9ng7nSpq%2BbjkeUki9ZqC28dNihxfOUW1WdYDalVaEEHWTFDZWh2aJ5yzHTM39XOcMsFBWb0xzV9jTxVz%2FaY%2FAmDu9ty47SUQ%2B1uGGAW0OLQXdbV295CHcn%2Fmhso%2Fd12D7SEgUkC0R%2BUMups%2FpJEZJEfAlpiIqUvKepZIg1lENGZqnUIHlIId8vs1MBA12t9rDHxgJeIXa5a7wfkGsXv0fEOQNOWJ%2FS76BTKVAnwEYyHpflYc6Urq0%2BElAqGTNYVmXoO3zHvuOQu0IJ0QURGpTvfDkRtUJE1zAZR8sU5RWzGOI0oRizANTy780ppE%2BPTCb%2FTD6dRaJ2%2F2Vp%2BXTGsaXWlXdkVRU0pVJXsJMIhl2EQ%2ByNvTFDxnK7XN39UUd6YyL8dnbT3D89i5DlUAnFWwoqeiGdfVsXSGcQFQWLLeJWmfI4Yffde9gwv3iNUMMLd3L8GOqUBa0o%2FdHp4XKprimDA52910WpER3rfwPaUwEDqgVH8Fpz8%2Fsf1n9J1rkaXPAcNLSNH4n3Ap1MlROgz5yvBFwXNKgyjrwFs7d4UV4O3WUjAiUkPANi4j%2BU6RlpMMKDfyjaOtHlj3Y6L5xwg0y1T8OnfEDUoz78eg7h1GlpCjGdM3AJG0jgJh8kWx6bDPaUkK6pJ2ggme1UmVialSVrT1ZRo3t%2BGl5JA&X-Amz-Signature=c24335f4d07215e8c3a96aad7a034b3effb16684287384a9eb22128a019f4547&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7MNHZA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGeyXmvS6pL6EGOB3u8NNn%2Fy8GT4edPtWHXg4RgqplJjAiEA00fSRBCnXIetbOpUngm9bue%2F%2FL%2BLYbhWIjRWSZ%2BPZtYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLa1%2BBm8ZnsH0JaCrcA6jhTYQv3Vjtg4QfOFshq5W6yTEXCh1xrTgO6DcPE4urSviU8RPrhi50R1ZpN6wopK9Ppsz6%2BDqH1C9JEM5GxKwUEju8SYp7MXtfFcCdv%2BOmUtG4YdVASFlKKGq3MK9pg6YZmg7C%2FTz2r4vkS5CsVuK8RngyoLJqckiqxhqqQT4m6rbfZWWE8aztVyh9k2Iz%2Fkf1y0YETQ0U6NUVWQe2w1mEPHqOz7EDE0ddN8sTc1OVvHBkidaPeMixedR3%2BcSqoFWzO2yL4TMIz7rvOBCnYtrseCYGDEYRxrP%2Bm7kPXnUSNnruMHgWgA%2B%2BCYQQB48Z38S5%2F4JqWvmPHfK9ulPxqIWg8dDSQmVEFOGoNokPsXfzNjGJ7wAMoB6nbvJX6lhOgNVFv9ZpW56Spkvc19HE%2F4mScmlc8y0DZez%2FrW49o3Zbjvhja0K1aF18W9YU0pc9T2OOlumU33oxzMLvZLQZjmAkypC9qE8PWYheo8asN8WulOVram91i0p2CD98ng3nJFyLvtKfQPelKGdaevCeA9C6MdV9Q%2FW%2F9pSLfPoBHGvNlzQaVEQbEzyb40SWYap9wwH0Blk96z%2FLpuiUKOLWgEKXbXsubJli4E0SyTacars6YDn5XttZ1jJJ7L08MMHd3L8GOqUBQ%2Bcyazdt%2FzRvAcMDpLGL42nPpgEdOdaFuAvqEokKhHxNr3PDBks%2FKGpQ30RRUpzN%2F0Q8zBX%2BmYeT7%2FhuKWyaeOF2LqoKs6E%2Fcr2hU8hqvytNkx8tsqjb0i%2Bv%2F2YpOJfJNR6I4VlB9Al48hNxGeTUJFXJL9X3rkc0NVtJ4ZqsBgZ7p1q49gXMe%2BAnA3wQhXztD64vlJ%2BPFESGAbzvcz6r1Egqa%2Fe6&X-Amz-Signature=e39094e27bf1ed5a474d15a0d7781084e6633e8d9c2fb41a331771f02c5892e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
