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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZI6QFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDd2RYAp2Hr7Km47wM2KWRfIn0TvNxlOJoVMU1S51lQIhAK4rCnyrdpJv61PKfOT6GypEz3w3ih6vH9W%2FeuIrINrlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmGN%2FLt75uvrUGCcq3ANSCmUDHVtGkwCmmM7MjaFIqi%2BM0dqcrcYvtoI%2FMJch%2FY%2FwG%2FLG26pzRPqG0fMXAXYOiVA2l73KCosfWI%2FlmEcRBqiQxB5qWetdOQMaeuPRbIAk5t93hAwUx3rLCeJpZCcQUGogOKbIdGNv5uAfaOq7U1whzacJQ8Oqfoy9SSNh5EkdqY%2B%2BDO%2F%2FFtKvbkWovRgAjMDpeScAlXqydufJrGoc43t7Wd4cmNRSqltps%2BlMBEA%2F1wuuJYOirBagWJRLFj8yRMl5Pj9fPQjBHkygOtK0rVl3OEr6Lh6GJbm6adRlBYV1OG%2FYwflMkRcx%2FmAByKBnymDYh%2BvCy6BUTYZTOUuZBf5c2pFI7PxICKEfZQheJUKpBpOBHzPg7qTjx1qb%2B1F3A1bFTOT8rrjIKlWOHheiWg1dbi2YABseJbaaeNFYV5U6xK1hdWzjrfCMoJa23kut%2B%2F28cCOTlDDP6N9178abkaATXK7e56Z%2BPT1m9ob5Z3FcXdIT%2F3sjlOks%2FQHG5m%2FR6Jdu8tf9xvdMdqUKa2ZhYn3vk7driXWFY0rmpYmhtIZLIQOxlj%2B18ZaRve4FAWJ%2BvoJvXWA8SipR5Ag4KE7kIahu%2BX6BhpSKSpZmf7LPrHp8NNPwpk%2FO0RpjUTCptvrABjqkASfHXAajAZvi7kj80%2FdDw%2FzaFE2yAzxe89dPVY8L0FgXfxbhlzplOW84puMkM6YNqhzOvNfYlmoGp5hvtJtkHUAiZ5IrV7V8Ah7DPe%2F18yeBJj59vuLkA6Y%2FWmcEcBQLK99uQzke74VEt63ZwfG8fMowOFr8xatsTF0PLsLJeuV7AxivbAzJlv9LKzj8xNKa9MqR6JK2iCaTCKHwMdgZJBPvtQ%2Fm&X-Amz-Signature=0165e7fe8e8f80b6b12e2c1a453b372615e04e86b7f5e6efcecdb120b6de43d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZI6QFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDd2RYAp2Hr7Km47wM2KWRfIn0TvNxlOJoVMU1S51lQIhAK4rCnyrdpJv61PKfOT6GypEz3w3ih6vH9W%2FeuIrINrlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmGN%2FLt75uvrUGCcq3ANSCmUDHVtGkwCmmM7MjaFIqi%2BM0dqcrcYvtoI%2FMJch%2FY%2FwG%2FLG26pzRPqG0fMXAXYOiVA2l73KCosfWI%2FlmEcRBqiQxB5qWetdOQMaeuPRbIAk5t93hAwUx3rLCeJpZCcQUGogOKbIdGNv5uAfaOq7U1whzacJQ8Oqfoy9SSNh5EkdqY%2B%2BDO%2F%2FFtKvbkWovRgAjMDpeScAlXqydufJrGoc43t7Wd4cmNRSqltps%2BlMBEA%2F1wuuJYOirBagWJRLFj8yRMl5Pj9fPQjBHkygOtK0rVl3OEr6Lh6GJbm6adRlBYV1OG%2FYwflMkRcx%2FmAByKBnymDYh%2BvCy6BUTYZTOUuZBf5c2pFI7PxICKEfZQheJUKpBpOBHzPg7qTjx1qb%2B1F3A1bFTOT8rrjIKlWOHheiWg1dbi2YABseJbaaeNFYV5U6xK1hdWzjrfCMoJa23kut%2B%2F28cCOTlDDP6N9178abkaATXK7e56Z%2BPT1m9ob5Z3FcXdIT%2F3sjlOks%2FQHG5m%2FR6Jdu8tf9xvdMdqUKa2ZhYn3vk7driXWFY0rmpYmhtIZLIQOxlj%2B18ZaRve4FAWJ%2BvoJvXWA8SipR5Ag4KE7kIahu%2BX6BhpSKSpZmf7LPrHp8NNPwpk%2FO0RpjUTCptvrABjqkASfHXAajAZvi7kj80%2FdDw%2FzaFE2yAzxe89dPVY8L0FgXfxbhlzplOW84puMkM6YNqhzOvNfYlmoGp5hvtJtkHUAiZ5IrV7V8Ah7DPe%2F18yeBJj59vuLkA6Y%2FWmcEcBQLK99uQzke74VEt63ZwfG8fMowOFr8xatsTF0PLsLJeuV7AxivbAzJlv9LKzj8xNKa9MqR6JK2iCaTCKHwMdgZJBPvtQ%2Fm&X-Amz-Signature=25f3446efb84a2dd498c34f0521c7341325336274e0d9e9fbe6dde45b8cb6482&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZI6QFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDd2RYAp2Hr7Km47wM2KWRfIn0TvNxlOJoVMU1S51lQIhAK4rCnyrdpJv61PKfOT6GypEz3w3ih6vH9W%2FeuIrINrlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmGN%2FLt75uvrUGCcq3ANSCmUDHVtGkwCmmM7MjaFIqi%2BM0dqcrcYvtoI%2FMJch%2FY%2FwG%2FLG26pzRPqG0fMXAXYOiVA2l73KCosfWI%2FlmEcRBqiQxB5qWetdOQMaeuPRbIAk5t93hAwUx3rLCeJpZCcQUGogOKbIdGNv5uAfaOq7U1whzacJQ8Oqfoy9SSNh5EkdqY%2B%2BDO%2F%2FFtKvbkWovRgAjMDpeScAlXqydufJrGoc43t7Wd4cmNRSqltps%2BlMBEA%2F1wuuJYOirBagWJRLFj8yRMl5Pj9fPQjBHkygOtK0rVl3OEr6Lh6GJbm6adRlBYV1OG%2FYwflMkRcx%2FmAByKBnymDYh%2BvCy6BUTYZTOUuZBf5c2pFI7PxICKEfZQheJUKpBpOBHzPg7qTjx1qb%2B1F3A1bFTOT8rrjIKlWOHheiWg1dbi2YABseJbaaeNFYV5U6xK1hdWzjrfCMoJa23kut%2B%2F28cCOTlDDP6N9178abkaATXK7e56Z%2BPT1m9ob5Z3FcXdIT%2F3sjlOks%2FQHG5m%2FR6Jdu8tf9xvdMdqUKa2ZhYn3vk7driXWFY0rmpYmhtIZLIQOxlj%2B18ZaRve4FAWJ%2BvoJvXWA8SipR5Ag4KE7kIahu%2BX6BhpSKSpZmf7LPrHp8NNPwpk%2FO0RpjUTCptvrABjqkASfHXAajAZvi7kj80%2FdDw%2FzaFE2yAzxe89dPVY8L0FgXfxbhlzplOW84puMkM6YNqhzOvNfYlmoGp5hvtJtkHUAiZ5IrV7V8Ah7DPe%2F18yeBJj59vuLkA6Y%2FWmcEcBQLK99uQzke74VEt63ZwfG8fMowOFr8xatsTF0PLsLJeuV7AxivbAzJlv9LKzj8xNKa9MqR6JK2iCaTCKHwMdgZJBPvtQ%2Fm&X-Amz-Signature=7b1733f06f76343cdf2979ae9b9f44af3591fc66e74ecaf8b5a755a0c1d2d2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVIF3DR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpBfMOOMy2o26kBjy%2F8S6Bm1i76enw%2FX9qXHGD7KV5BgIhAIX35zybf0nzVM52Ibi%2BtR5YoAGCp6yQo3q0mgVjBQdlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrjd377eq9684%2FRN0q3AN2ceKrKyGVUn4f4fpamBXeThsRpeCTFyYXIKZ3lhGxv53uDaR2LTLV5i6AWYsQhN8Mcet1w20NQSF0rUvEG2q9V2dkXjTevk9hq4YKgCtAziaZaC56Al%2BlXXIcI6feIfgSPFMIPzxCp5hBkv%2FG5bm9WWX9PmASM7gcbdUULetypQLbXOdvdKzC9AWUsHoFvg9sOliLPfXPZORKeG6SkQD8wzqu%2FS5LnS56%2Fpb0518Zxh9qwTDXTL3OlRCIp%2FdCu6qWAEFua2Xq43TwRweZ968QeYfc5%2B6hyGhOBaFU%2B64QR4HZsmn9kU9O%2BvB0QYIp7RXEz1JgT4H1jcj%2Fzza%2FL9H60UkRYOJGJNlJ9wZ3sOuE65GNx6JtjMZUgu4pJlP%2FpkePSeG4n%2F%2B78eXASjlT%2BOJ8krqGvwl0kcsJQyTURNp5BEgiDw%2FIRMdP7j5v4Dt5Pr3bTDvib%2FaFBuyAgoz5%2Fh12vKpywXpSgo03OXeMFJQ1%2BlLip1oUGnSK9K2EF9vkd3AuomWO%2BJmiEI%2FcGfakdr%2BnVpzdCPXERFZ3GR0UwtubfHRKzs3mxq2PkxpJbmzjFOxE48vMAJROmYsY5esWJga4Lmpz9GrnmAQGSxQ5pDgFc0YH3CFXUqDU9E62zzDrtfrABjqkAa8SS%2FPr6CDV3uPsFW7JhDJdOiOR3TyV7pcNs7K0cdk0ZsdhHVRr4c2uUCj7jHdVvdfliatgeG858ZGnJyKbFtRHrPRAJ%2F0QKsD8gICHmzVoMLUYN%2BeZZiLZe%2B1N21TH2fkpAfJVJcj0yquYJo8MBwPCikpdEHIRYGioGK4LmxHfwneRmarnR4pImNf97DZeQOVrwnS0%2BCxKyV%2FqRy887VJ0PO%2Fi&X-Amz-Signature=269a9d0317a93999fb5cd4d2a5994a4e4a8ab2095cd3cb47b6a2dfda956bdeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YSY5W7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMsRSXrDv0QCgWHBmDgjTNQdjbxTPaLXNYW2cE4l%2BKwIgAe%2FcpcVfvyZMGGi%2BXmyXwm3djraLaTJZWb1UB%2FHnScIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOv72Eo8CyCNPsAwircAwOp55sM9Z4%2FVsYh9sI%2BynwW8gCLx6dgt9%2Bnvt149lAAFASUCPJoaeHA9XFHsjggi%2F4Zc7P5L7pB0qFFX2tOFYGRbyICyd79N9Kt72%2FE7WDN5Xzx3fsXWvLrYZiFSV5sudRPA3segYVLRb6mT9D2O01GZxQNE4yrKeVI1mHO3WlOLMS4Jy3TEgWDlIFZ4Jzbvk1QclxCqDkntQfwAcwxP8MtxhYCZVaFR4Yb2S1oPZQPoQ4fN9p40ogrPPNg0KjDKxXZJgrgTf5sZsLNCM%2BTbFaXT82sXQwzeP9Mbq7VSQIVAUiQ9gXk3Qr3qtuuQGaMxjj70ZOYnFB0Qo84Z%2FEVnBr%2F%2BwQtWju%2B775OJSIntoKgzxLOg%2F3xEp6v6Vzf7l6XP4jWzf%2FQKOh1pXauVYECxBX53ajlMsuKcNWkgddC35V9z5BSY%2Fw4jjEFsOvtuE1fESX6T7NJJz9azUbNtU%2FcRH5RTbghfJnMMLeeNF2%2BoRuSfZtHw6ZOG%2BqsYF99i%2FZ5KxijsHuD5KXm2YNIt%2FO96FOHtVN5PDk4nd0JOv5dZhtbW2x%2FFA652cjd0XZVk%2B0jb4aIb0zy4w6Xp9AK7X5zfdHMojZBsPeRULkh0EjugulmlGIl7GhhFUKRHxBzMPC1%2BsAGOqUB8UBPtxtIBIII8jQG%2Fb9M8FCoa2JjmVOUpVv3vdej%2BDgljPIIgeb%2F9yvOuP7XOOlmsl1HwURXYGacuEi2%2FX6HQuFTKLiJ8eufKxzMBxS%2FHm%2FW8039GLZ5sNtQEdUxdUCNrn6NEzk69hHDRH7q93H3BjwVb2flkW4p6lsXGLiIIdTxAzuJlvQyP0PuCezQTvm7lajaBBpgvHKryGZjuK8InVuTV8m0&X-Amz-Signature=ce2c98e4d7a81166eb850d71ba30e886bf45237848ff3f608739487b0617b089&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZI6QFV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDd2RYAp2Hr7Km47wM2KWRfIn0TvNxlOJoVMU1S51lQIhAK4rCnyrdpJv61PKfOT6GypEz3w3ih6vH9W%2FeuIrINrlKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmGN%2FLt75uvrUGCcq3ANSCmUDHVtGkwCmmM7MjaFIqi%2BM0dqcrcYvtoI%2FMJch%2FY%2FwG%2FLG26pzRPqG0fMXAXYOiVA2l73KCosfWI%2FlmEcRBqiQxB5qWetdOQMaeuPRbIAk5t93hAwUx3rLCeJpZCcQUGogOKbIdGNv5uAfaOq7U1whzacJQ8Oqfoy9SSNh5EkdqY%2B%2BDO%2F%2FFtKvbkWovRgAjMDpeScAlXqydufJrGoc43t7Wd4cmNRSqltps%2BlMBEA%2F1wuuJYOirBagWJRLFj8yRMl5Pj9fPQjBHkygOtK0rVl3OEr6Lh6GJbm6adRlBYV1OG%2FYwflMkRcx%2FmAByKBnymDYh%2BvCy6BUTYZTOUuZBf5c2pFI7PxICKEfZQheJUKpBpOBHzPg7qTjx1qb%2B1F3A1bFTOT8rrjIKlWOHheiWg1dbi2YABseJbaaeNFYV5U6xK1hdWzjrfCMoJa23kut%2B%2F28cCOTlDDP6N9178abkaATXK7e56Z%2BPT1m9ob5Z3FcXdIT%2F3sjlOks%2FQHG5m%2FR6Jdu8tf9xvdMdqUKa2ZhYn3vk7driXWFY0rmpYmhtIZLIQOxlj%2B18ZaRve4FAWJ%2BvoJvXWA8SipR5Ag4KE7kIahu%2BX6BhpSKSpZmf7LPrHp8NNPwpk%2FO0RpjUTCptvrABjqkASfHXAajAZvi7kj80%2FdDw%2FzaFE2yAzxe89dPVY8L0FgXfxbhlzplOW84puMkM6YNqhzOvNfYlmoGp5hvtJtkHUAiZ5IrV7V8Ah7DPe%2F18yeBJj59vuLkA6Y%2FWmcEcBQLK99uQzke74VEt63ZwfG8fMowOFr8xatsTF0PLsLJeuV7AxivbAzJlv9LKzj8xNKa9MqR6JK2iCaTCKHwMdgZJBPvtQ%2Fm&X-Amz-Signature=d1ce4a0be801ec05b343a6741e11adec7314fd8e1e95316eb4b33a6581e2b2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
