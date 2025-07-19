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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAB2PY4L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf1o623EE4Nh2v7SZS10vx1FRGQzDaKbp1BQcUzNndxAiEA08ncn33OFh5byjoYk9jrRUNNrh%2BbyGINWiChEHyx9KIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgGa%2BrTAFRrDc4O8yrcAyduFIt7j15ZRq0CH1iZ8ZEtHhpDO32tVkqyatuwuy7VWSJPPa54a2sG4gI0klVzvP0CMg5gfS0sUYC%2FnXlMd1%2Bj5%2BVnQAyTPnytN3iAzQfakwuh%2BDemyrRh0BqdSBdII15cgREs1LTqWplZfUMwU3cUGdtBwhOwFmW3LxTCiHdcx30aXLqbZcz5x7ftx%2Fty%2B1PGlJTESU%2FE6DBpZZtd8AGU%2BBSGzn219t6%2B7Fh7fYWn7IDRorcV2R0Nd9IniUFljvJPsK%2F4g%2BalDPoHX4EUka5XZRxRgf7GxFcvieZivKASsFXhwWcu5bMVrg6dYGeyCZb%2FRG8LaXsTnBUO%2FNVk5oUtkaSEVUnbJUSMp5gpcBKwQ02cj%2FZB8EuQoYuMKs%2BK1OKVnM54Kizw8Ump2Qqwc3y9BwxXqp9RJMVa8Gcb1TgwhOxsiuen%2BoHG99w8Xc%2FsTdjo62MiyrPgZpUEvXUG0rpACPjRrSX%2FeJGiAmHRLbnGug0iSPfl7O%2B5Vpy4rot%2BuTHc6bcF%2Fhv4G6irlJ3vhIuqtqX8qCW2iRV2zl29LNfvc9uKSrZFXwRrcexyhjVGE4C30gvSjMU%2BXTiH9LQrK87ubk0zfIb%2FmNX6c8tcECj7SL8ghx%2BpqeOnjDrxMKTF7MMGOqUBbCLW11Q6vn97wPDNG3WSgR5kmnoeNgxhja0VlFbTgb97HILbzquiM%2BswuUEOKOaxhwejKTKviAKShwLGM1XH8zRLJ3JckaCdxAhahwyOcoew%2FNLD76lqrCv%2Brw6qidkaqZlKDT1Xq2793S69tloY%2FeUIlsIbkrKQBp3IVWlZ4vYQOtZ335ukXoEfxL3IxSybwfy%2FwlcZQ%2FUIaO2zB%2BT%2B%2F%2BromIj2&X-Amz-Signature=a9277d3eb92d363fc43437d80a9cb0a887bd28d137b6ac99ba319c36e64cc2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAB2PY4L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf1o623EE4Nh2v7SZS10vx1FRGQzDaKbp1BQcUzNndxAiEA08ncn33OFh5byjoYk9jrRUNNrh%2BbyGINWiChEHyx9KIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgGa%2BrTAFRrDc4O8yrcAyduFIt7j15ZRq0CH1iZ8ZEtHhpDO32tVkqyatuwuy7VWSJPPa54a2sG4gI0klVzvP0CMg5gfS0sUYC%2FnXlMd1%2Bj5%2BVnQAyTPnytN3iAzQfakwuh%2BDemyrRh0BqdSBdII15cgREs1LTqWplZfUMwU3cUGdtBwhOwFmW3LxTCiHdcx30aXLqbZcz5x7ftx%2Fty%2B1PGlJTESU%2FE6DBpZZtd8AGU%2BBSGzn219t6%2B7Fh7fYWn7IDRorcV2R0Nd9IniUFljvJPsK%2F4g%2BalDPoHX4EUka5XZRxRgf7GxFcvieZivKASsFXhwWcu5bMVrg6dYGeyCZb%2FRG8LaXsTnBUO%2FNVk5oUtkaSEVUnbJUSMp5gpcBKwQ02cj%2FZB8EuQoYuMKs%2BK1OKVnM54Kizw8Ump2Qqwc3y9BwxXqp9RJMVa8Gcb1TgwhOxsiuen%2BoHG99w8Xc%2FsTdjo62MiyrPgZpUEvXUG0rpACPjRrSX%2FeJGiAmHRLbnGug0iSPfl7O%2B5Vpy4rot%2BuTHc6bcF%2Fhv4G6irlJ3vhIuqtqX8qCW2iRV2zl29LNfvc9uKSrZFXwRrcexyhjVGE4C30gvSjMU%2BXTiH9LQrK87ubk0zfIb%2FmNX6c8tcECj7SL8ghx%2BpqeOnjDrxMKTF7MMGOqUBbCLW11Q6vn97wPDNG3WSgR5kmnoeNgxhja0VlFbTgb97HILbzquiM%2BswuUEOKOaxhwejKTKviAKShwLGM1XH8zRLJ3JckaCdxAhahwyOcoew%2FNLD76lqrCv%2Brw6qidkaqZlKDT1Xq2793S69tloY%2FeUIlsIbkrKQBp3IVWlZ4vYQOtZ335ukXoEfxL3IxSybwfy%2FwlcZQ%2FUIaO2zB%2BT%2B%2F%2BromIj2&X-Amz-Signature=f5d80d9cc9842c7544bd1b93bca6dc5b07309981c361c49f6a5ff13edf8b69fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAB2PY4L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf1o623EE4Nh2v7SZS10vx1FRGQzDaKbp1BQcUzNndxAiEA08ncn33OFh5byjoYk9jrRUNNrh%2BbyGINWiChEHyx9KIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgGa%2BrTAFRrDc4O8yrcAyduFIt7j15ZRq0CH1iZ8ZEtHhpDO32tVkqyatuwuy7VWSJPPa54a2sG4gI0klVzvP0CMg5gfS0sUYC%2FnXlMd1%2Bj5%2BVnQAyTPnytN3iAzQfakwuh%2BDemyrRh0BqdSBdII15cgREs1LTqWplZfUMwU3cUGdtBwhOwFmW3LxTCiHdcx30aXLqbZcz5x7ftx%2Fty%2B1PGlJTESU%2FE6DBpZZtd8AGU%2BBSGzn219t6%2B7Fh7fYWn7IDRorcV2R0Nd9IniUFljvJPsK%2F4g%2BalDPoHX4EUka5XZRxRgf7GxFcvieZivKASsFXhwWcu5bMVrg6dYGeyCZb%2FRG8LaXsTnBUO%2FNVk5oUtkaSEVUnbJUSMp5gpcBKwQ02cj%2FZB8EuQoYuMKs%2BK1OKVnM54Kizw8Ump2Qqwc3y9BwxXqp9RJMVa8Gcb1TgwhOxsiuen%2BoHG99w8Xc%2FsTdjo62MiyrPgZpUEvXUG0rpACPjRrSX%2FeJGiAmHRLbnGug0iSPfl7O%2B5Vpy4rot%2BuTHc6bcF%2Fhv4G6irlJ3vhIuqtqX8qCW2iRV2zl29LNfvc9uKSrZFXwRrcexyhjVGE4C30gvSjMU%2BXTiH9LQrK87ubk0zfIb%2FmNX6c8tcECj7SL8ghx%2BpqeOnjDrxMKTF7MMGOqUBbCLW11Q6vn97wPDNG3WSgR5kmnoeNgxhja0VlFbTgb97HILbzquiM%2BswuUEOKOaxhwejKTKviAKShwLGM1XH8zRLJ3JckaCdxAhahwyOcoew%2FNLD76lqrCv%2Brw6qidkaqZlKDT1Xq2793S69tloY%2FeUIlsIbkrKQBp3IVWlZ4vYQOtZ335ukXoEfxL3IxSybwfy%2FwlcZQ%2FUIaO2zB%2BT%2B%2F%2BromIj2&X-Amz-Signature=4d8b6082608584387acbc7058b8cdb3c7f63eebbdef4660f59a70684218fe84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX6VHAK3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELfWOVgZjsEdQlk9Fv3RowKnhmpEUffDY9byOg9fhDDAiEAtHHxNZW6Ix1l05jF1Rj8FM5NrUWDWTFGwpFAYgqAr58qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtOAq8WDI3z9lHv9SrcA3BoOs2Y32TKJEd%2BEAIuAa%2FzqJp6gppoBS7zmHyP40VNV1fvlWJGZJpoZV06cUbIT%2B5ptLwrZfzA97OlMft5HA6rxdsgk4Yd6F7zlvE%2B4X9XlhEQTtJZ3KgJfEfiUyktLiq06oV9uyZy%2Bf0Fok6Q2BokC8VP0BBI6Y0bGWvfjSCxTYRylxhhY2vceFgqQW%2FDywqwCbqqpEyBMZDRt2%2FNnrmTntnz2gRqsuKKyq5lciyXT1vTjuhrhd20R7%2BJyfErZ5WgJ1zYVvSbV%2Bzs7Av1NetKwu4B1VQb%2Fjxp69M9xCz5mdg3UxqUWubb8ne0B08coYKww1h0EK48%2BKRg%2B3wwoEPbn5%2F0%2F07uVtKQJLnblt1L35%2FWMKpSbojNVcJf2E2ETczQ5pkQ1Q4IDk5hm0eDMjFnSGr8L1FSVU8r8DZx7M6cV7tkAxjAeqCaewRj46VIkgiPeuAyPIkzizIFMjn83M8DwyDMyKJw7DIrClz9w0SKRatdtKB8swRd%2FaxAsxu4MgfGGrdZzsBvrf73U%2FugZ4T5PHBD0lreK1XbSe%2FFpVunmRcQiY2I6vP9WiIwfFPfxucRmDBE4MFYbuOCjCQw3N%2BrbfhOEyeMHCr16wxbaInmNR2B0koqferMxM6aMMPF7MMGOqUBVF1PFc%2FL0oiyL2IvN70iG76125Tfb%2FSHvY5TClsAWGW%2F%2BJUn6HWwvdYraNrjyDFhWPnWmZ1L2yR8w004Zc0JX9F5i%2FgXRB3%2Bx5EexpvZ7f77rZcQBHlH5FrBmpZxyqimwc%2B7YxW6erLk31%2F68DnuK76JNNrUL%2FvSlultqhD9zA0GhveggI9aTafa9KWIigpgJBQHLR1PjbbRFSXcdiQQJDqurKRl&X-Amz-Signature=ff5a864291aff381f05b4d3f82c1be528e7a78617f7851b287740203be49d730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTTK6FI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBVZGIIf1TnRFrP0J4n8c03XK7KFpr0PyNfqIdJQtCyQIhAJqri7eOslZRC6zSztPaMW5ElzzQpT3bteBdeNa7MjxLKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzwNlwgt8ETCCAjFAq3ANPxvudfCjWQWN1iqU%2BFNEfd9kn93j7EthCLl0%2BEoF3VkYdSfh%2BDJhOOsQPSLAMVhOlw60CL4Qnc%2F27eMK6scudC%2BAD54HYUK32fhStc%2FaA2Uuag61BYkCk9HYNJkWAJyYUa%2B7emT2juhtwCCp7moiiI7LfOqRHbzr1AuLwQICuyWFRml2KPwvL%2FJCwie%2FTgru%2FXS35Au%2BHpiMGXlgn4kLmMu4szXqXPhKBBgcq8D%2BcipXEhKQEiS1EBFELy6Vb8j5G10y94Jbg0jh8HiJFcMTIbKMkAMlyl1bu%2FMYvn%2F332TlnwmECPz%2FSDYDCS1aWUL%2BhWWs5B%2F3FkkU1dKdODyfGzZdbJD%2FmoH%2BDJVaj1vSYsJs%2FqRx%2FONW4UMPMavQjWkzLF7ng3pYeORWsXve9JdL4aX%2FigbYUcJOetUNNHVjx2PtejBdRoYIFkausN7cupVnlLogbN6S2SZ8BecVzWi%2BOigKTHWfxLeGoXJ7YIAOiKSbvP6uqvBNBobDuM9aGG3GNoCB05woPf86KRsfAfzrVZ9iHQzienewjCmlx4BuntwoSXoeGDRirjbffJDOB8yk3Z780DacQHqKGTc2fMeaWvqr3qjdOzevH67dq49xlmSJwaNKXvMEyM%2FiWZDC%2BxezDBjqkAfcH4lyI2Ckyt2RzK1xUSuG7ly8nJacdcihpvRu6CZ%2BehSXNdEfNzLN7%2BfI2vIUevgjq7bQv%2BOYZ96LzUdOrTLYFvQcrhZ%2FlxwAfCSETUi8nxkpcqcJBobcUlMOD8J6akKd9LAP%2BYPFm%2Bn8izjVYMD2%2BoAbmdKsm62wxN3AeFjPJ%2Fke7D3D2H%2BaeAG6IG%2FeXg6gmK9NtH41Akj3VKWFBkxf2Y5HL&X-Amz-Signature=08fcbfe92e91cacc96e40f89ecc32a03d3d697374d2315caff629d1509a1db9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAB2PY4L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf1o623EE4Nh2v7SZS10vx1FRGQzDaKbp1BQcUzNndxAiEA08ncn33OFh5byjoYk9jrRUNNrh%2BbyGINWiChEHyx9KIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgGa%2BrTAFRrDc4O8yrcAyduFIt7j15ZRq0CH1iZ8ZEtHhpDO32tVkqyatuwuy7VWSJPPa54a2sG4gI0klVzvP0CMg5gfS0sUYC%2FnXlMd1%2Bj5%2BVnQAyTPnytN3iAzQfakwuh%2BDemyrRh0BqdSBdII15cgREs1LTqWplZfUMwU3cUGdtBwhOwFmW3LxTCiHdcx30aXLqbZcz5x7ftx%2Fty%2B1PGlJTESU%2FE6DBpZZtd8AGU%2BBSGzn219t6%2B7Fh7fYWn7IDRorcV2R0Nd9IniUFljvJPsK%2F4g%2BalDPoHX4EUka5XZRxRgf7GxFcvieZivKASsFXhwWcu5bMVrg6dYGeyCZb%2FRG8LaXsTnBUO%2FNVk5oUtkaSEVUnbJUSMp5gpcBKwQ02cj%2FZB8EuQoYuMKs%2BK1OKVnM54Kizw8Ump2Qqwc3y9BwxXqp9RJMVa8Gcb1TgwhOxsiuen%2BoHG99w8Xc%2FsTdjo62MiyrPgZpUEvXUG0rpACPjRrSX%2FeJGiAmHRLbnGug0iSPfl7O%2B5Vpy4rot%2BuTHc6bcF%2Fhv4G6irlJ3vhIuqtqX8qCW2iRV2zl29LNfvc9uKSrZFXwRrcexyhjVGE4C30gvSjMU%2BXTiH9LQrK87ubk0zfIb%2FmNX6c8tcECj7SL8ghx%2BpqeOnjDrxMKTF7MMGOqUBbCLW11Q6vn97wPDNG3WSgR5kmnoeNgxhja0VlFbTgb97HILbzquiM%2BswuUEOKOaxhwejKTKviAKShwLGM1XH8zRLJ3JckaCdxAhahwyOcoew%2FNLD76lqrCv%2Brw6qidkaqZlKDT1Xq2793S69tloY%2FeUIlsIbkrKQBp3IVWlZ4vYQOtZ335ukXoEfxL3IxSybwfy%2FwlcZQ%2FUIaO2zB%2BT%2B%2F%2BromIj2&X-Amz-Signature=07f390501a79d62fa552fffe7cbc8a447b540a89dde67898e7a88d6f3dd80276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
