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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKXNI6H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDnSQkKsIetLD28cN9%2FMKcsnTZPI%2FvAkdoGciSFB1djxQIgGom8ku4HAAorTC1TykP%2B7aUAh5KnoS%2BYeuylK%2BouiiYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLnn7vnKrgYiUV6sTircAwYlBvfiGjJSXkNhKR%2B%2Fss0Kk7ymJxuwvLYcjp6MGsl74vSsR%2BAO3oIWutYCTCcqfFVgSukQDHobA%2F7GH9Fb6TdITeuwXBYQ83dxi1zzdmFMOvZ0YrK7ckhAwv8C2fI4d0P2BeaHGj%2BgNDOKOAEErpqzb%2BBrW44rjoPGaEuy4C5dMs7qaavBX9LBP20HTGx7OO9LNW1RgXRr2L4C2JKFGu090%2FNpxQOt9tqeQou4l%2ForlCnQxpRnFCEs7QaEcBzcwTKchr5e9Rk%2FxMhk4hz64YlefN9PF%2Bkz%2BTY0OSceJkWJueVqXMCdqDiluOp27K3m%2BsqXj%2BdNeEZld9RyutDrzlT%2BJe1ZQQBSz4ZDl%2BPTHg406WQKGpJaYEtvWQGWKBVuwic%2FMsu4zMY5qdDm%2F3u64aT2W3WOYGAQVaZBNJ6AryIkZBtDwA8kK2aazD39h7H8Vvf4wcN4j8tMZPqopofWHYKkW8O6MFkwEWY3cpspDxTlhdCLAq6kaT1cOQ9yA1CpRabrjmE%2BAY3Si4kcrGJNcuV9xJDod1C%2B0FFSNpGpepx0IMMr9stKkB%2FzsPELMYyGoZHIKXXHIvastLo%2BF%2FhVY%2F1SGaVIke16cfWtlKT2Dgx0jjV3vAjeiuR62V5rMISxo8MGOqUBThoIXWH7C7Lv7CmCkGsFRYG2HYVNmM%2BmspRLe6U2feu2eSJjyfYwFI%2BGhIKdTzma4NNblth5QRRmsIELsrMCAnKuqxZ8rFgMnYDeKZclpsIMxOJo94IQ5KVF6qSbcnWvTJ%2BUYjKKg46NygyyP%2Fvk%2FpAgSBk34avIRjAA0eIuo%2BTimqoQVT%2FMxRc%2BuBBDjU7MYM%2Bm4z1YljLKuQy%2FnIUtClmIgYla&X-Amz-Signature=55c517339dfcb0d68922a65609b70d1f74bc1d985b1e2b2468f2c02c8c16e14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKXNI6H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDnSQkKsIetLD28cN9%2FMKcsnTZPI%2FvAkdoGciSFB1djxQIgGom8ku4HAAorTC1TykP%2B7aUAh5KnoS%2BYeuylK%2BouiiYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLnn7vnKrgYiUV6sTircAwYlBvfiGjJSXkNhKR%2B%2Fss0Kk7ymJxuwvLYcjp6MGsl74vSsR%2BAO3oIWutYCTCcqfFVgSukQDHobA%2F7GH9Fb6TdITeuwXBYQ83dxi1zzdmFMOvZ0YrK7ckhAwv8C2fI4d0P2BeaHGj%2BgNDOKOAEErpqzb%2BBrW44rjoPGaEuy4C5dMs7qaavBX9LBP20HTGx7OO9LNW1RgXRr2L4C2JKFGu090%2FNpxQOt9tqeQou4l%2ForlCnQxpRnFCEs7QaEcBzcwTKchr5e9Rk%2FxMhk4hz64YlefN9PF%2Bkz%2BTY0OSceJkWJueVqXMCdqDiluOp27K3m%2BsqXj%2BdNeEZld9RyutDrzlT%2BJe1ZQQBSz4ZDl%2BPTHg406WQKGpJaYEtvWQGWKBVuwic%2FMsu4zMY5qdDm%2F3u64aT2W3WOYGAQVaZBNJ6AryIkZBtDwA8kK2aazD39h7H8Vvf4wcN4j8tMZPqopofWHYKkW8O6MFkwEWY3cpspDxTlhdCLAq6kaT1cOQ9yA1CpRabrjmE%2BAY3Si4kcrGJNcuV9xJDod1C%2B0FFSNpGpepx0IMMr9stKkB%2FzsPELMYyGoZHIKXXHIvastLo%2BF%2FhVY%2F1SGaVIke16cfWtlKT2Dgx0jjV3vAjeiuR62V5rMISxo8MGOqUBThoIXWH7C7Lv7CmCkGsFRYG2HYVNmM%2BmspRLe6U2feu2eSJjyfYwFI%2BGhIKdTzma4NNblth5QRRmsIELsrMCAnKuqxZ8rFgMnYDeKZclpsIMxOJo94IQ5KVF6qSbcnWvTJ%2BUYjKKg46NygyyP%2Fvk%2FpAgSBk34avIRjAA0eIuo%2BTimqoQVT%2FMxRc%2BuBBDjU7MYM%2Bm4z1YljLKuQy%2FnIUtClmIgYla&X-Amz-Signature=70a6117c52c2d0539d6bb64eb458040604c71fd4b04e02ed8275c59e30cf7fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKXNI6H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDnSQkKsIetLD28cN9%2FMKcsnTZPI%2FvAkdoGciSFB1djxQIgGom8ku4HAAorTC1TykP%2B7aUAh5KnoS%2BYeuylK%2BouiiYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLnn7vnKrgYiUV6sTircAwYlBvfiGjJSXkNhKR%2B%2Fss0Kk7ymJxuwvLYcjp6MGsl74vSsR%2BAO3oIWutYCTCcqfFVgSukQDHobA%2F7GH9Fb6TdITeuwXBYQ83dxi1zzdmFMOvZ0YrK7ckhAwv8C2fI4d0P2BeaHGj%2BgNDOKOAEErpqzb%2BBrW44rjoPGaEuy4C5dMs7qaavBX9LBP20HTGx7OO9LNW1RgXRr2L4C2JKFGu090%2FNpxQOt9tqeQou4l%2ForlCnQxpRnFCEs7QaEcBzcwTKchr5e9Rk%2FxMhk4hz64YlefN9PF%2Bkz%2BTY0OSceJkWJueVqXMCdqDiluOp27K3m%2BsqXj%2BdNeEZld9RyutDrzlT%2BJe1ZQQBSz4ZDl%2BPTHg406WQKGpJaYEtvWQGWKBVuwic%2FMsu4zMY5qdDm%2F3u64aT2W3WOYGAQVaZBNJ6AryIkZBtDwA8kK2aazD39h7H8Vvf4wcN4j8tMZPqopofWHYKkW8O6MFkwEWY3cpspDxTlhdCLAq6kaT1cOQ9yA1CpRabrjmE%2BAY3Si4kcrGJNcuV9xJDod1C%2B0FFSNpGpepx0IMMr9stKkB%2FzsPELMYyGoZHIKXXHIvastLo%2BF%2FhVY%2F1SGaVIke16cfWtlKT2Dgx0jjV3vAjeiuR62V5rMISxo8MGOqUBThoIXWH7C7Lv7CmCkGsFRYG2HYVNmM%2BmspRLe6U2feu2eSJjyfYwFI%2BGhIKdTzma4NNblth5QRRmsIELsrMCAnKuqxZ8rFgMnYDeKZclpsIMxOJo94IQ5KVF6qSbcnWvTJ%2BUYjKKg46NygyyP%2Fvk%2FpAgSBk34avIRjAA0eIuo%2BTimqoQVT%2FMxRc%2BuBBDjU7MYM%2Bm4z1YljLKuQy%2FnIUtClmIgYla&X-Amz-Signature=c0d7c6a2ce8ed19293343a86127ee203607151111b54521db7c7a91557c54957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BSKOOO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICqsbWIHTyASPNI2Qg37lIFAu3yJozYPh1DHZuJY5V5xAiEAmHbB0Z%2FPrj%2BqAFFT%2FxB%2BDeIuuQOcc0i19ItpH2JYgXgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIR4ysPXgvkYFYi6xyrcA6Lh4Jt9DblyJXCHK%2Bfl6PodthDe9vK9pk5A3VqgwQEdWQN%2BEYeeCqaYrOTQanUFNfHbe4mj0u8lMQum3%2FtYLboCGSUGcroZcPHNYa2VdawYOvz1CtC131jY6Snf86Qi4NN9OP4kb7ji0FdrloJcWwiO7ettxHZA5KmvuP%2FZcS0oe%2FjWwuvn20NHkALzkOHfg00Tlwm3xCpDzxXHencBDpNVT8xi%2FR3Pzr8eG8J5t0tgF9YyRAP7Spu3JbmjDKpteWdUSVCo%2FnRM82gaKAdf1lyom2RydHV8khKBzbegSoHWdd3txdxIpBl0TqytfSstEmG28p1XHAOqx7XpYFOMZymlCk%2BlMpx5fvkQuugno1vvIRmwUVatz8gN%2FA2bTV3Zg3zfD6pEav%2FR0y64qsm54G%2BzseHktuFLFkdf%2FZzSZ4EojBNAq5MIzW80cbLqlmNHeKIEMiZkvdHpACcQMihpdEYuSjhgSzv4o36oMcwtRuEQvsEzMdehKYcJwC4rYbXHMPCwpgFBTiyx5ULgOzwobXXmESDWbVp7Rp4%2FtZX0JHMxli3thcg1MW7nPCTfwdvwmpNuqHSF9lvY%2Bmp64iULqgjHUq%2F8uh4JCQH3ZdNlZiHCo1ikAZEwmimM9VnBMP2lo8MGOqUBXKSnT9h2KXlZDT%2Bhk9mthMmaIupEuHLBAfLl8XgLKQd2eAxvyZvouYSJhbKg%2FgEq7V6ZhEqynlk%2BHceRC7u1fXFr5fYLsgrlzzBTufv1w8AJ590WiCKXOqKa5Y52PBcRwuvxa%2F%2F5Z%2FBs%2FZqQqdEv64ZdOlPNvXf1D7NSOrJ0JN8wvunWaumkfCglT6ulxGF1jILLvEkhswv64DV9h%2BbZUD3NbrLZ&X-Amz-Signature=41ea920d77e816e9fc049d296b59b13d4761742e3d0ee9a0f197a313eb61beae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEXKDDO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCCAKHsaYhU62RR6%2B72%2FbuBiXT3P%2Fq8fi3sye626XbtnAIhAIMKZkA6HZBAYscXwqfTDf4SSZw9sa02dHLTilbaBwvxKv8DCEEQABoMNjM3NDIzMTgzODA1IgwbZDQrzmcR4yh%2BMC8q3ANKuoCETMV%2BS%2FKn0ZdeT7P8POGdsn9yy5WUKI%2FIm2XWc7lcK47ORf4KUr5x8mi13pRqte%2FwCLy4suHprqUGLDgUlYFXTWwyGNlKFYZAw5e0hfhYTKsoo1VEAEPWiiMkhI82L6ONiXGRaxaD%2FBwiyUqeVQxxXshJMDhvL3WCjNG0kXV8VxJ%2BjJwuGwT4PxWLQlh%2F9UsLQTH5yDmk2TNrYmsAAlJ0fqjxrxr6oj%2BSiMAATMFdRuB3Cjrj84t4QPzoDR0dZcyXLv%2Bt0fxFGUb%2BE7Wr%2FcNdk0xWBipDdWL6Pd3SUJxF4fToI2ok4xuVRSGrcotyBNtwnHF1ix1Bnyw6n%2BAzqNkXqVGGp0Yduh4LqoZRTA0fgGi2HMjsxbd63ynDoicWgsC5dVLAz6uTcpoxR0ncu8DdTpSuQZcL1vD5kWyQZ0XvzPe52eplRje7JypG8Altc%2BY%2B3OEUDckCvfE4RFJvgJ%2BB94nvZFM5c5XinrqKatpw5hzGFHVWvGNV4tVsJ2gcDsSS9CZB5PWdvFJ4cxngrfidmOWYry6vpQwuHhLI8c8yFZGn78ZirTqUT%2Fhdo6gwNK1n269CgmWxg7zXhvS5Pyqf2eslVCHAorPYC0LmIqqFAvfZtfz%2FtHdWZzCjrKPDBjqkAapFs%2BJ5dnfoHavTCtgF9bfAumiRyy4T46LaGZQzl%2B7vJ9%2B2AHpGPDjDJMuWUm2cBhtime7Ri3%2BiNJd7LuQpa1wjoIMGWvWQdbJ7MaLyUgxHjADN0Ib3raJDQBaZ%2Bx62%2FpnjvVzraVhnqK1vOaIVVxMG%2B9gnTCAYdvm479g2spuniF%2Bhubxopm0qTckkYX7CZ7v90J2qEnY5HBlkGqdUM837yQBD&X-Amz-Signature=9bcee08acf01d7d1158d74af78943b683bc77f5dcb60ad0d7c43d56f180896d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKXNI6H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDnSQkKsIetLD28cN9%2FMKcsnTZPI%2FvAkdoGciSFB1djxQIgGom8ku4HAAorTC1TykP%2B7aUAh5KnoS%2BYeuylK%2BouiiYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLnn7vnKrgYiUV6sTircAwYlBvfiGjJSXkNhKR%2B%2Fss0Kk7ymJxuwvLYcjp6MGsl74vSsR%2BAO3oIWutYCTCcqfFVgSukQDHobA%2F7GH9Fb6TdITeuwXBYQ83dxi1zzdmFMOvZ0YrK7ckhAwv8C2fI4d0P2BeaHGj%2BgNDOKOAEErpqzb%2BBrW44rjoPGaEuy4C5dMs7qaavBX9LBP20HTGx7OO9LNW1RgXRr2L4C2JKFGu090%2FNpxQOt9tqeQou4l%2ForlCnQxpRnFCEs7QaEcBzcwTKchr5e9Rk%2FxMhk4hz64YlefN9PF%2Bkz%2BTY0OSceJkWJueVqXMCdqDiluOp27K3m%2BsqXj%2BdNeEZld9RyutDrzlT%2BJe1ZQQBSz4ZDl%2BPTHg406WQKGpJaYEtvWQGWKBVuwic%2FMsu4zMY5qdDm%2F3u64aT2W3WOYGAQVaZBNJ6AryIkZBtDwA8kK2aazD39h7H8Vvf4wcN4j8tMZPqopofWHYKkW8O6MFkwEWY3cpspDxTlhdCLAq6kaT1cOQ9yA1CpRabrjmE%2BAY3Si4kcrGJNcuV9xJDod1C%2B0FFSNpGpepx0IMMr9stKkB%2FzsPELMYyGoZHIKXXHIvastLo%2BF%2FhVY%2F1SGaVIke16cfWtlKT2Dgx0jjV3vAjeiuR62V5rMISxo8MGOqUBThoIXWH7C7Lv7CmCkGsFRYG2HYVNmM%2BmspRLe6U2feu2eSJjyfYwFI%2BGhIKdTzma4NNblth5QRRmsIELsrMCAnKuqxZ8rFgMnYDeKZclpsIMxOJo94IQ5KVF6qSbcnWvTJ%2BUYjKKg46NygyyP%2Fvk%2FpAgSBk34avIRjAA0eIuo%2BTimqoQVT%2FMxRc%2BuBBDjU7MYM%2Bm4z1YljLKuQy%2FnIUtClmIgYla&X-Amz-Signature=5d52136fa7ec436bc9eccaec31098e0ef4c16e23567c0f45c8a0b85a6a458a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
