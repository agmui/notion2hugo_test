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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYLVXO3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSINberdHJP%2B2WlvphSML5zgyiQyHQbuK6tigddYt7CgIgKuAWMJZ5ihFhPFa4aktt%2BazjoifZ9hEvnrKXHssuVL0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK6ru%2Bjl8m%2FDEHFoCrcA%2BLUg1K7PssG1i2Czd0HuVzBdW9vbxf2veJdkb1QakLMxMmZBdehSgT3RD2KOtarGEgdU1%2BUznMT0k2gau6uhIFCuElwUqNZX8zesV4k48YlzmCqs8rqiCP2nqphHT0PsFqhTR%2FvfNt4Sx0Vh6a20mB7K%2FrCVA2gDmpXalBz9JXAfXCnmTJVSImWkgQciI%2FhVPAWwspl4u%2Fo3OP%2B%2BoYObwd2cm%2B3VMcBUNfQN6vfFgjwZ4DUAW%2B5zq0VwKmoTPc8km2r8OA%2FlpHYhjEBGNsU8ej8V2tJSNzXeS4Ogtg9Y1MDaWIZeDSHn6ZCkso1WtGfns7gZWUskpQQoCuOiGurX3ekHVpukReCodGN05zyDTjfs3RS3BDYXFBdXuLlNbRnES3BmeQRRBuGVDLCX6EkgKSBDhQ6pYxGwrk7aS23L%2BEXX92F71Evqvz149QsDYUHYUQKCZe5R3GU1Hx14dmaRgV6U%2BJiFUJxNorSMKx%2BoqEAMhzfTU3zAIz505NchPF5kPWrgWDz%2FCEWVayLWXbYJkihUT5kc%2F4xNjthAc4%2BzX3deIF4SWJKeobHUOyj7KqEvqeMCT8x0MrCL6JUuVkIFC5KhdcV47vYM2r%2F3OMdjVQc6kicPzzGqKI6vR0vMMqxgr8GOqUB%2F2hPNk80yimDhFEH5ZCsuXDwR6TkYVanh6U1yJjIgTjw6knFCQ%2BqzVcynWGTkZoTbrkRFEbxnVY83dkB75MaA4W92pYJ7WZig7S%2F4QGBF7hcjPS%2BnbrREoyj5ryHDAD2EafFGWwCSPqeHqwm7u1nMwzKUjTish6LKyEJMIGOaKdL77haLw2DmzGKfjcLMJpkE6PxArzuHwH7ylu%2F8HkfFdI5cVj0&X-Amz-Signature=39faf2acadcc4fd41d0d8bd4faab9c1538585d83725a8ef3cee22fbbbf950e12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYLVXO3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSINberdHJP%2B2WlvphSML5zgyiQyHQbuK6tigddYt7CgIgKuAWMJZ5ihFhPFa4aktt%2BazjoifZ9hEvnrKXHssuVL0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK6ru%2Bjl8m%2FDEHFoCrcA%2BLUg1K7PssG1i2Czd0HuVzBdW9vbxf2veJdkb1QakLMxMmZBdehSgT3RD2KOtarGEgdU1%2BUznMT0k2gau6uhIFCuElwUqNZX8zesV4k48YlzmCqs8rqiCP2nqphHT0PsFqhTR%2FvfNt4Sx0Vh6a20mB7K%2FrCVA2gDmpXalBz9JXAfXCnmTJVSImWkgQciI%2FhVPAWwspl4u%2Fo3OP%2B%2BoYObwd2cm%2B3VMcBUNfQN6vfFgjwZ4DUAW%2B5zq0VwKmoTPc8km2r8OA%2FlpHYhjEBGNsU8ej8V2tJSNzXeS4Ogtg9Y1MDaWIZeDSHn6ZCkso1WtGfns7gZWUskpQQoCuOiGurX3ekHVpukReCodGN05zyDTjfs3RS3BDYXFBdXuLlNbRnES3BmeQRRBuGVDLCX6EkgKSBDhQ6pYxGwrk7aS23L%2BEXX92F71Evqvz149QsDYUHYUQKCZe5R3GU1Hx14dmaRgV6U%2BJiFUJxNorSMKx%2BoqEAMhzfTU3zAIz505NchPF5kPWrgWDz%2FCEWVayLWXbYJkihUT5kc%2F4xNjthAc4%2BzX3deIF4SWJKeobHUOyj7KqEvqeMCT8x0MrCL6JUuVkIFC5KhdcV47vYM2r%2F3OMdjVQc6kicPzzGqKI6vR0vMMqxgr8GOqUB%2F2hPNk80yimDhFEH5ZCsuXDwR6TkYVanh6U1yJjIgTjw6knFCQ%2BqzVcynWGTkZoTbrkRFEbxnVY83dkB75MaA4W92pYJ7WZig7S%2F4QGBF7hcjPS%2BnbrREoyj5ryHDAD2EafFGWwCSPqeHqwm7u1nMwzKUjTish6LKyEJMIGOaKdL77haLw2DmzGKfjcLMJpkE6PxArzuHwH7ylu%2F8HkfFdI5cVj0&X-Amz-Signature=94b6926dd51f6c22897b0566df6473e01ef0c07685acb1f09561ab78f39d7f73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC7JEPY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBrmxoay1wWh8q%2BmKWcizRyexOtHKUfXHmXphnOt0eYQIhAKSJbmX5Xck1Tv9rLdVsdlMqchSlG0FoRHVPHTGtBnPMKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVQsXDvKRidL3IDT4q3APtPh06qXcBii5GTa4llGQdMmu8tWNim07O0EXADWmB%2FULKrbHFCqXwL%2BAHBWiP%2Bj6KTJzvCewEVArQHzu8lE5023w9GCeBs7Cbm29w0egOt1j5b%2BW5kRhV0AU9WMLjB5qT1IxRX7sFDf8e3gHachTcrrhZfDT7IFLabbk9s%2B%2FxRzjqcHnq%2BbpwTvxE1e0e5Q%2FoKuvQb%2B%2FEJOwW7DNToiqOD%2Fb75Pu6%2BTb6MI2PlHgRp%2B93mZVYQa9pwWOosHmYBPuYrPjc%2FNZU9U9AnvPu1BBILKbfq18Nz31jC6mBS2Vp%2F4lJWrifgJf3BB8WztX0zZEf%2BtdFmM6jqS7lw7QiSYii8hCAjDO6d1MjZOOUcuhOYD7w2LALtWcIWcHis38I5a6CBw1C0mv2Zzx4WwNsxR9QuSv772zI1T0g7PgX6tsDRe6ISUQ%2BfI7siZGMBImYVDNfPb%2BTflbrDW5nTafYhN8FWKpefNobrMWWQiemANNX76oggdAsZPI9qD2Py1Co38d1j%2FWNfWC%2BP%2BCBpNP5%2BT2PA6yqfNgcvkNL19ABiEE2RVFY8UxAZ6FWHTbq14VwjvUI%2Bsd4iZ4mDBmu%2FMKIMYr0rgf44uVAWsXGitg65MdvPs7uYdzeogM2aQYzdjCMsIK%2FBjqkAQs4beE3FMsJNmb8KOp8DjQrAAHWz9RReq%2BqKA1rZ9Gf57QHJayQARsuD9bpQk%2BEebbOQ6JqYnWPzFoqZfu%2FDQcg%2Fkjuq9Qlhks89b%2F5s%2Fmi9Hy5vLsuD%2BvqZMGG%2Bim4Pl8UrKgvX06p1BkNV2kGBsi23q1u4b4L5pG%2B5WpGGgwf3suhh7%2B36O0gQ9t4onEEOKbK7mE5OXKBhLOX7GtB%2FGeW6Ed6&X-Amz-Signature=5f58ae389f30cb15cd43a55a3054d8e631b04701f3ee927501bd0bed55e31d64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRC7JEPY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBrmxoay1wWh8q%2BmKWcizRyexOtHKUfXHmXphnOt0eYQIhAKSJbmX5Xck1Tv9rLdVsdlMqchSlG0FoRHVPHTGtBnPMKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVQsXDvKRidL3IDT4q3APtPh06qXcBii5GTa4llGQdMmu8tWNim07O0EXADWmB%2FULKrbHFCqXwL%2BAHBWiP%2Bj6KTJzvCewEVArQHzu8lE5023w9GCeBs7Cbm29w0egOt1j5b%2BW5kRhV0AU9WMLjB5qT1IxRX7sFDf8e3gHachTcrrhZfDT7IFLabbk9s%2B%2FxRzjqcHnq%2BbpwTvxE1e0e5Q%2FoKuvQb%2B%2FEJOwW7DNToiqOD%2Fb75Pu6%2BTb6MI2PlHgRp%2B93mZVYQa9pwWOosHmYBPuYrPjc%2FNZU9U9AnvPu1BBILKbfq18Nz31jC6mBS2Vp%2F4lJWrifgJf3BB8WztX0zZEf%2BtdFmM6jqS7lw7QiSYii8hCAjDO6d1MjZOOUcuhOYD7w2LALtWcIWcHis38I5a6CBw1C0mv2Zzx4WwNsxR9QuSv772zI1T0g7PgX6tsDRe6ISUQ%2BfI7siZGMBImYVDNfPb%2BTflbrDW5nTafYhN8FWKpefNobrMWWQiemANNX76oggdAsZPI9qD2Py1Co38d1j%2FWNfWC%2BP%2BCBpNP5%2BT2PA6yqfNgcvkNL19ABiEE2RVFY8UxAZ6FWHTbq14VwjvUI%2Bsd4iZ4mDBmu%2FMKIMYr0rgf44uVAWsXGitg65MdvPs7uYdzeogM2aQYzdjCMsIK%2FBjqkAQs4beE3FMsJNmb8KOp8DjQrAAHWz9RReq%2BqKA1rZ9Gf57QHJayQARsuD9bpQk%2BEebbOQ6JqYnWPzFoqZfu%2FDQcg%2Fkjuq9Qlhks89b%2F5s%2Fmi9Hy5vLsuD%2BvqZMGG%2Bim4Pl8UrKgvX06p1BkNV2kGBsi23q1u4b4L5pG%2B5WpGGgwf3suhh7%2B36O0gQ9t4onEEOKbK7mE5OXKBhLOX7GtB%2FGeW6Ed6&X-Amz-Signature=952098ffe5fed97c5ae10b6ff80ba6ef37a6091090451eb7a00bc2afdc175180&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYLVXO3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSINberdHJP%2B2WlvphSML5zgyiQyHQbuK6tigddYt7CgIgKuAWMJZ5ihFhPFa4aktt%2BazjoifZ9hEvnrKXHssuVL0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK6ru%2Bjl8m%2FDEHFoCrcA%2BLUg1K7PssG1i2Czd0HuVzBdW9vbxf2veJdkb1QakLMxMmZBdehSgT3RD2KOtarGEgdU1%2BUznMT0k2gau6uhIFCuElwUqNZX8zesV4k48YlzmCqs8rqiCP2nqphHT0PsFqhTR%2FvfNt4Sx0Vh6a20mB7K%2FrCVA2gDmpXalBz9JXAfXCnmTJVSImWkgQciI%2FhVPAWwspl4u%2Fo3OP%2B%2BoYObwd2cm%2B3VMcBUNfQN6vfFgjwZ4DUAW%2B5zq0VwKmoTPc8km2r8OA%2FlpHYhjEBGNsU8ej8V2tJSNzXeS4Ogtg9Y1MDaWIZeDSHn6ZCkso1WtGfns7gZWUskpQQoCuOiGurX3ekHVpukReCodGN05zyDTjfs3RS3BDYXFBdXuLlNbRnES3BmeQRRBuGVDLCX6EkgKSBDhQ6pYxGwrk7aS23L%2BEXX92F71Evqvz149QsDYUHYUQKCZe5R3GU1Hx14dmaRgV6U%2BJiFUJxNorSMKx%2BoqEAMhzfTU3zAIz505NchPF5kPWrgWDz%2FCEWVayLWXbYJkihUT5kc%2F4xNjthAc4%2BzX3deIF4SWJKeobHUOyj7KqEvqeMCT8x0MrCL6JUuVkIFC5KhdcV47vYM2r%2F3OMdjVQc6kicPzzGqKI6vR0vMMqxgr8GOqUB%2F2hPNk80yimDhFEH5ZCsuXDwR6TkYVanh6U1yJjIgTjw6knFCQ%2BqzVcynWGTkZoTbrkRFEbxnVY83dkB75MaA4W92pYJ7WZig7S%2F4QGBF7hcjPS%2BnbrREoyj5ryHDAD2EafFGWwCSPqeHqwm7u1nMwzKUjTish6LKyEJMIGOaKdL77haLw2DmzGKfjcLMJpkE6PxArzuHwH7ylu%2F8HkfFdI5cVj0&X-Amz-Signature=9b904c7a92be547706e2f4af79e7ee223804f58b5eb92a1d2e5a5ae0e8282576&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
