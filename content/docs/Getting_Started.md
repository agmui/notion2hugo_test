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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JEV6QMW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3gVopcv1QDxQJBSFXN3CGhV6UVAg7mRid%2Bv0xZSkaAiEA6ijalCLOoisTZGgBJftrqChfSbC7wYqU6t7wCIPJAbcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKzgaGXcIN8rJwtV5yrcA2yLvvp9NvtGfDXVAkdEeUm7mNyvcVKCpb3IBOffNPGiuKF%2FhBV0bDPcD9QPVwVWcZFglqGGy%2Fka9P7keglFdqRBgFGti5XE27nSBYr6hsMhlRITReegKULK0RLT8RmlOjGDbG8mY1eVj4djKZXykM6IU8It9C5UrELsuLInJOSPt8Bo2gJcZpZKe%2FYhoMJnGy%2FSNAe%2FHgb8%2BDuiOsekc%2BzGaKovzJKtCkJTUh9R%2BT1j8Koa%2BGYEbVFXD0X%2BVyQfBOz2W14TcfgG8XUw8GKyW6tv0m2r%2FhWaXfH8TQvAmk2U6WJzLSSFiL%2FvXUvR4TWKyQo%2Fkvwb%2BN0%2FOm6YXiU0QLSzOWnuURmPeM%2FEL%2FHzcCOghq3TEWHXy2JKNZZuszpkIj3anWC%2FkalNmCOsLXxP2I4RkW%2B42d6yIc3XgAuwTk5DHZJ41i5FDlx8EywuUuRzmdxuhGAQt7XJs9B%2Bqxm7n%2BTPB%2Fub%2F4eahPJ8ZdzDSS8DN%2FdQQvs8AvRd0pLlI9mhRpYn8RtG5WNLmzW%2BmOhP2hGij691P4HPB9RDMbxptcIQbw8bwDUj9OkZK0wvMe0KpFu9tdr%2FWJVn6w5oDgREPKJW%2B7Wae40roSb9gNZk3ykv5lJWGbFO96%2FrpjQ%2FMPyu%2FMIGOqUBFa3xEJzrix6qDQHTpp6fhtwxZLYGK3ak2LDJJ17I%2FDpphfZ1E8Uv5k9k2H0bpLKKaDn7%2FigCXtPrsRWRujxKuwMlKG4CcoKwIPq5aVz6oTDdh3w%2FAfWEtHVQbjn%2BvqUbvx%2B7Khssgg%2FExPzb0ZE%2Bv%2FvOqvYrWpZkjeUaBy08VpJLEe5tdXybBUVjVPnfYgICW%2BjIMTZIPYdoqNZNcu9jwqv3XCNR&X-Amz-Signature=0d5b7de289dc5fd51cc2055c63674caf7782cc392eef73bfc8c8f086afc448e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JEV6QMW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3gVopcv1QDxQJBSFXN3CGhV6UVAg7mRid%2Bv0xZSkaAiEA6ijalCLOoisTZGgBJftrqChfSbC7wYqU6t7wCIPJAbcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKzgaGXcIN8rJwtV5yrcA2yLvvp9NvtGfDXVAkdEeUm7mNyvcVKCpb3IBOffNPGiuKF%2FhBV0bDPcD9QPVwVWcZFglqGGy%2Fka9P7keglFdqRBgFGti5XE27nSBYr6hsMhlRITReegKULK0RLT8RmlOjGDbG8mY1eVj4djKZXykM6IU8It9C5UrELsuLInJOSPt8Bo2gJcZpZKe%2FYhoMJnGy%2FSNAe%2FHgb8%2BDuiOsekc%2BzGaKovzJKtCkJTUh9R%2BT1j8Koa%2BGYEbVFXD0X%2BVyQfBOz2W14TcfgG8XUw8GKyW6tv0m2r%2FhWaXfH8TQvAmk2U6WJzLSSFiL%2FvXUvR4TWKyQo%2Fkvwb%2BN0%2FOm6YXiU0QLSzOWnuURmPeM%2FEL%2FHzcCOghq3TEWHXy2JKNZZuszpkIj3anWC%2FkalNmCOsLXxP2I4RkW%2B42d6yIc3XgAuwTk5DHZJ41i5FDlx8EywuUuRzmdxuhGAQt7XJs9B%2Bqxm7n%2BTPB%2Fub%2F4eahPJ8ZdzDSS8DN%2FdQQvs8AvRd0pLlI9mhRpYn8RtG5WNLmzW%2BmOhP2hGij691P4HPB9RDMbxptcIQbw8bwDUj9OkZK0wvMe0KpFu9tdr%2FWJVn6w5oDgREPKJW%2B7Wae40roSb9gNZk3ykv5lJWGbFO96%2FrpjQ%2FMPyu%2FMIGOqUBFa3xEJzrix6qDQHTpp6fhtwxZLYGK3ak2LDJJ17I%2FDpphfZ1E8Uv5k9k2H0bpLKKaDn7%2FigCXtPrsRWRujxKuwMlKG4CcoKwIPq5aVz6oTDdh3w%2FAfWEtHVQbjn%2BvqUbvx%2B7Khssgg%2FExPzb0ZE%2Bv%2FvOqvYrWpZkjeUaBy08VpJLEe5tdXybBUVjVPnfYgICW%2BjIMTZIPYdoqNZNcu9jwqv3XCNR&X-Amz-Signature=622207ab5541a4c07779fbec566da46d7e83f65d6ed89da35bb5a003272b9ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JEV6QMW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3gVopcv1QDxQJBSFXN3CGhV6UVAg7mRid%2Bv0xZSkaAiEA6ijalCLOoisTZGgBJftrqChfSbC7wYqU6t7wCIPJAbcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKzgaGXcIN8rJwtV5yrcA2yLvvp9NvtGfDXVAkdEeUm7mNyvcVKCpb3IBOffNPGiuKF%2FhBV0bDPcD9QPVwVWcZFglqGGy%2Fka9P7keglFdqRBgFGti5XE27nSBYr6hsMhlRITReegKULK0RLT8RmlOjGDbG8mY1eVj4djKZXykM6IU8It9C5UrELsuLInJOSPt8Bo2gJcZpZKe%2FYhoMJnGy%2FSNAe%2FHgb8%2BDuiOsekc%2BzGaKovzJKtCkJTUh9R%2BT1j8Koa%2BGYEbVFXD0X%2BVyQfBOz2W14TcfgG8XUw8GKyW6tv0m2r%2FhWaXfH8TQvAmk2U6WJzLSSFiL%2FvXUvR4TWKyQo%2Fkvwb%2BN0%2FOm6YXiU0QLSzOWnuURmPeM%2FEL%2FHzcCOghq3TEWHXy2JKNZZuszpkIj3anWC%2FkalNmCOsLXxP2I4RkW%2B42d6yIc3XgAuwTk5DHZJ41i5FDlx8EywuUuRzmdxuhGAQt7XJs9B%2Bqxm7n%2BTPB%2Fub%2F4eahPJ8ZdzDSS8DN%2FdQQvs8AvRd0pLlI9mhRpYn8RtG5WNLmzW%2BmOhP2hGij691P4HPB9RDMbxptcIQbw8bwDUj9OkZK0wvMe0KpFu9tdr%2FWJVn6w5oDgREPKJW%2B7Wae40roSb9gNZk3ykv5lJWGbFO96%2FrpjQ%2FMPyu%2FMIGOqUBFa3xEJzrix6qDQHTpp6fhtwxZLYGK3ak2LDJJ17I%2FDpphfZ1E8Uv5k9k2H0bpLKKaDn7%2FigCXtPrsRWRujxKuwMlKG4CcoKwIPq5aVz6oTDdh3w%2FAfWEtHVQbjn%2BvqUbvx%2B7Khssgg%2FExPzb0ZE%2Bv%2FvOqvYrWpZkjeUaBy08VpJLEe5tdXybBUVjVPnfYgICW%2BjIMTZIPYdoqNZNcu9jwqv3XCNR&X-Amz-Signature=81ffcb2689c6c19cff4f21cced9d445e65df9e93adc3c6d840769837513aee4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVQPZYJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMH6I%2FUc%2FPvoXQvkhjyJrcCBHpHY5%2Bk7EC%2Bqtt224QFAiEAhSJm7aoytq5%2FuN%2FLaXWUEywKP3Y2Xo4G%2Fb9wlJKwhq4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCNK47S8uZBKQTW1SCrcA1Ef3Q7CFCNvBo82BZmNPz1wk3M0vl4K5jbI%2Bjixfe9Mfv4zBfho1Wejy%2FcJopk%2Fe5u7N4YAkbMGLOyvrBD3SiLao5wbMHFbMz75yqo50UxhJJRVmmIBZ5LjElE7JohrSoR852YG1DzBaEWuguckN66VH91LDikEAzOu8LyNw2rD6ocNSPc2lBFQxw9JbcrEaFUenMd1l4Lk3f7d0oAb5yDMynyxq38yfKbxC1TcHC9bu7Nxu4TS7fKLRHAXgwS53MJTigrXj%2FSyUM39W70srJX8%2FS%2BGi%2FbISb%2BUKKo8lqhxZiyVcaC5lbh2W7lSshumo6z8y%2FxIgXI58ifbdVAGeaJE84RAgJ5h4sb%2BN4P8dvGLYjtBxT1gHeqbkMthGz63rXk17o84546ydESm4IOF%2F0rR%2BrKlCOufkAJw0TiibiLAC7DHLvp4S%2BrUwibYid1p6INJ%2BeCFQIeoitU9paEBges3VV%2BiqEHvymAY36pm0zF4%2Fm9qzdOaiuQTipaIKsu%2B45gVJELWGYMs2upH%2FzA66sTksXWHk1GZg50KWUCAQUupvREzWJAqihOrhWWdTKMktmS8HvioMUrPYKtU%2FMmXDPR33rMkdKDZ9iTsheThmBre%2FCzFOhZb%2BlkyZKlVMImv%2FMIGOqUBZ37giuW%2FoCkpffDrf932zFLdriQ%2B4sWTRN0CudFGzlUouDhM%2BvsiMbjU0NbP0CMUFdXz1BcThhXBP9YnUg5%2BAU0trWTsbGCg28LVHEUDL3dxbk7tVwoQI3ErgEO9e%2BRCAqPqZINkGXAS7g%2F5yjvAt%2FmSIAusANHjCje9NLzfuC9zcoqJifRmJYXFV%2BsB0JNDlBwlc0YD30yFiHR%2BP4jfe3ofCtev&X-Amz-Signature=1b941c9ca8c978f5b3f1a1ff7eba7e68f1f2488ab80753e85674b9511b3d1e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3MDBKG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMcMQ2u2JfNvpa5tMIy7e9HDlwCXyOeggo8TBF10y%2BPgIgdy2NnNmYRuoNDbM1tFTCAy6f8bF%2BCLPu2%2FTACpVG1cEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpfKqvyW2jKWuvjqyrcA7xZ%2FjxZP4VdARdI52kDcHCu%2BnE7nBC9KeKgpJdyI5A8cKemnuCM5rx9kJV8b74XYp4RldlwPiEodiWZxFUlUXGuTBeyx1B28ftbl9W%2FXzR70enYS6lJtTVH1qh9m9I0uh8a7gyV7PWqYgZ6JRWm2TCtfoy%2FafgOLBOFYDOmtcr7Zs%2BD3eYm%2BjtEr%2F4siTA5EHtzHZYvccqu0Zcj5JG%2BOi8gIcDbQ9YSgdI2TV2PqELMMuWD%2B5mOxKsSVVx9Fu2%2B7I8HCtq%2BaX1%2FBdYj8isxivwEQ9z3Qn2GMc0AYsb1WDggdNR%2BVg%2BeIzfgbr52VmcnCh6JboiAHU8M3ilBvWOMul5sBqXFWBzv48eGl%2BtLk87prZHw0jFrB69SD5XQp5kz0xMyAlLndwsHZcA8dbgkP3WcUYsIodms0NhvJJlz2rCLUIFPlLpD6fKESnzyRlmcfqlWtJG7BB9f43BOrbTnwG2WhrcgVH26om3kYlnMHX3caDtmdav1UlG%2FKanC%2F93cZm6lnbF2bSPLIkYBixbWbkMLIG99MR0SL%2FBFSCOD5nzGEJziuXElA7tYCv%2B1TLbknmFxci%2FRq5akqNfZG4BfIJxBaA44VEkfrd%2FkJtTYmvGvLR5Q%2BbSnFDt9yKjUMKDB%2FMIGOqUBRgBHc4lpD1kA03ARXYOM2Nyggtk%2BnrA2vXciSE%2F31vWpee%2FF%2BweeaNUeKhqsqYVcxd6rwtlUMcw%2F5plFZBOFeigvqruHU47Mt07PKGlTmSG%2FvuWKUq%2BKu32WicW7WZytQezycP7QFJfjlznY6phL7ds1cxIZDkT4CQe8WwTQdwVsdSR40QMzmKyHHcmOEC1inLBRoekuZoQbxaJJpTEI1TUZnggO&X-Amz-Signature=1609ccc95b0fcb10ffbbfff2189f6e3c14bdcb91fc2468ebf0daea42b9090526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JEV6QMW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF3gVopcv1QDxQJBSFXN3CGhV6UVAg7mRid%2Bv0xZSkaAiEA6ijalCLOoisTZGgBJftrqChfSbC7wYqU6t7wCIPJAbcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKzgaGXcIN8rJwtV5yrcA2yLvvp9NvtGfDXVAkdEeUm7mNyvcVKCpb3IBOffNPGiuKF%2FhBV0bDPcD9QPVwVWcZFglqGGy%2Fka9P7keglFdqRBgFGti5XE27nSBYr6hsMhlRITReegKULK0RLT8RmlOjGDbG8mY1eVj4djKZXykM6IU8It9C5UrELsuLInJOSPt8Bo2gJcZpZKe%2FYhoMJnGy%2FSNAe%2FHgb8%2BDuiOsekc%2BzGaKovzJKtCkJTUh9R%2BT1j8Koa%2BGYEbVFXD0X%2BVyQfBOz2W14TcfgG8XUw8GKyW6tv0m2r%2FhWaXfH8TQvAmk2U6WJzLSSFiL%2FvXUvR4TWKyQo%2Fkvwb%2BN0%2FOm6YXiU0QLSzOWnuURmPeM%2FEL%2FHzcCOghq3TEWHXy2JKNZZuszpkIj3anWC%2FkalNmCOsLXxP2I4RkW%2B42d6yIc3XgAuwTk5DHZJ41i5FDlx8EywuUuRzmdxuhGAQt7XJs9B%2Bqxm7n%2BTPB%2Fub%2F4eahPJ8ZdzDSS8DN%2FdQQvs8AvRd0pLlI9mhRpYn8RtG5WNLmzW%2BmOhP2hGij691P4HPB9RDMbxptcIQbw8bwDUj9OkZK0wvMe0KpFu9tdr%2FWJVn6w5oDgREPKJW%2B7Wae40roSb9gNZk3ykv5lJWGbFO96%2FrpjQ%2FMPyu%2FMIGOqUBFa3xEJzrix6qDQHTpp6fhtwxZLYGK3ak2LDJJ17I%2FDpphfZ1E8Uv5k9k2H0bpLKKaDn7%2FigCXtPrsRWRujxKuwMlKG4CcoKwIPq5aVz6oTDdh3w%2FAfWEtHVQbjn%2BvqUbvx%2B7Khssgg%2FExPzb0ZE%2Bv%2FvOqvYrWpZkjeUaBy08VpJLEe5tdXybBUVjVPnfYgICW%2BjIMTZIPYdoqNZNcu9jwqv3XCNR&X-Amz-Signature=564a073a48f142f1e67ae3cb6334f24f593c88ff70cb39b57acc25d9283ed0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
