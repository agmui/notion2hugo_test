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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YDD35L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCYwdwRvzJz7bF2%2BZXisWhcy4PZnX%2Fp%2Bis%2FsX3gsFh%2BewIhAIPoMgdwFJkvIDnUWl0AiC%2BJj8FkTCJ7CrO3J3M5vuuRKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQI%2B5H%2Bo4EOrkeTVkq3AOzRg%2FnDjitcDvH1xPXnaaYqIMKI8HAxk%2B1V%2FY7S8fzI2kK0OZfNom4rbZ8LxB1E%2Bmsccc8mufEn6pwmKzZsaIiHf1PmtEEL3qB%2Bk2uGy7ZtEXiqPJVmVDaSFSMks8VGpDxLYpebyBAuBr9JxlRZJH2ZOJfgj6MXE%2BNonYmBu66OKlzp%2BCOd576FAyrQ87bA98ICa2xtUrLVad9ZydMkEJHDby54uPIOroGQv6QvL67y%2FxAKi8RoJqPy36xYnxJEIrU8kmEcNy6%2B%2Fu1DOLunVFDrOuRcB1uvA74qHTOU%2BornSUMJtL%2BYwBx%2FouXULiGwcVP7n5FhA0BjWCl3cTUgS4otJETQ%2FlSuw2QM0tAVwNeRBP5ILhMU%2FlGwN1tlrWofW0SuE5OvcTlTigyjiv%2FnDqFCsnuf8ocJC94CJgkwsEwI4OK2%2BR79Fy%2BsEeo2760oIRw700jzNlTXjGW6ktml%2BgZz8MYZp9SSUkU7i%2B4Xvtt%2BR3sllXwYfjol0FngK1KQeYXm1ul7RC32nBWwGJyaC2k3xMc9RxmUgldFmryDeYiNjL7M%2Bd2EDPhZtDyZv8ojATj%2BS4tkiEaDA%2Bo%2BCPryKBXnRxD85r0Bv%2FBfzUn2yfj98rQcil7YntKJTGJUTDu3bvBBjqkAY0D4EX66GOyduL1FZ2nch6xAMdomVFuB%2B8eOG8skqOEUrTomQu%2BzJMDI28vEVjOfqzJOW6FrgMVhyj02Y6eKoD8VqlC3bBC5JLE1adXIVrHcRNG7UyFNan%2BuKp2xwxQNyxm7BGgGUBTmgfSabNqPcU%2FYsZ2u6yWmpWlQu9uT865q%2BrmIPmTZ68yK8wPv6jixmx4x4VRrDdKbjq6V4oPN6eiTjCM&X-Amz-Signature=4d8f775ffb9264cfb99c8a3a39a89877e1cfc00b8c7ffebfc5792cdb0cf3f61d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YDD35L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCYwdwRvzJz7bF2%2BZXisWhcy4PZnX%2Fp%2Bis%2FsX3gsFh%2BewIhAIPoMgdwFJkvIDnUWl0AiC%2BJj8FkTCJ7CrO3J3M5vuuRKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQI%2B5H%2Bo4EOrkeTVkq3AOzRg%2FnDjitcDvH1xPXnaaYqIMKI8HAxk%2B1V%2FY7S8fzI2kK0OZfNom4rbZ8LxB1E%2Bmsccc8mufEn6pwmKzZsaIiHf1PmtEEL3qB%2Bk2uGy7ZtEXiqPJVmVDaSFSMks8VGpDxLYpebyBAuBr9JxlRZJH2ZOJfgj6MXE%2BNonYmBu66OKlzp%2BCOd576FAyrQ87bA98ICa2xtUrLVad9ZydMkEJHDby54uPIOroGQv6QvL67y%2FxAKi8RoJqPy36xYnxJEIrU8kmEcNy6%2B%2Fu1DOLunVFDrOuRcB1uvA74qHTOU%2BornSUMJtL%2BYwBx%2FouXULiGwcVP7n5FhA0BjWCl3cTUgS4otJETQ%2FlSuw2QM0tAVwNeRBP5ILhMU%2FlGwN1tlrWofW0SuE5OvcTlTigyjiv%2FnDqFCsnuf8ocJC94CJgkwsEwI4OK2%2BR79Fy%2BsEeo2760oIRw700jzNlTXjGW6ktml%2BgZz8MYZp9SSUkU7i%2B4Xvtt%2BR3sllXwYfjol0FngK1KQeYXm1ul7RC32nBWwGJyaC2k3xMc9RxmUgldFmryDeYiNjL7M%2Bd2EDPhZtDyZv8ojATj%2BS4tkiEaDA%2Bo%2BCPryKBXnRxD85r0Bv%2FBfzUn2yfj98rQcil7YntKJTGJUTDu3bvBBjqkAY0D4EX66GOyduL1FZ2nch6xAMdomVFuB%2B8eOG8skqOEUrTomQu%2BzJMDI28vEVjOfqzJOW6FrgMVhyj02Y6eKoD8VqlC3bBC5JLE1adXIVrHcRNG7UyFNan%2BuKp2xwxQNyxm7BGgGUBTmgfSabNqPcU%2FYsZ2u6yWmpWlQu9uT865q%2BrmIPmTZ68yK8wPv6jixmx4x4VRrDdKbjq6V4oPN6eiTjCM&X-Amz-Signature=2271452afc191792199751129aaff56bbfe246db7117bbfe976a6b797dfc8b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YDD35L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCYwdwRvzJz7bF2%2BZXisWhcy4PZnX%2Fp%2Bis%2FsX3gsFh%2BewIhAIPoMgdwFJkvIDnUWl0AiC%2BJj8FkTCJ7CrO3J3M5vuuRKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQI%2B5H%2Bo4EOrkeTVkq3AOzRg%2FnDjitcDvH1xPXnaaYqIMKI8HAxk%2B1V%2FY7S8fzI2kK0OZfNom4rbZ8LxB1E%2Bmsccc8mufEn6pwmKzZsaIiHf1PmtEEL3qB%2Bk2uGy7ZtEXiqPJVmVDaSFSMks8VGpDxLYpebyBAuBr9JxlRZJH2ZOJfgj6MXE%2BNonYmBu66OKlzp%2BCOd576FAyrQ87bA98ICa2xtUrLVad9ZydMkEJHDby54uPIOroGQv6QvL67y%2FxAKi8RoJqPy36xYnxJEIrU8kmEcNy6%2B%2Fu1DOLunVFDrOuRcB1uvA74qHTOU%2BornSUMJtL%2BYwBx%2FouXULiGwcVP7n5FhA0BjWCl3cTUgS4otJETQ%2FlSuw2QM0tAVwNeRBP5ILhMU%2FlGwN1tlrWofW0SuE5OvcTlTigyjiv%2FnDqFCsnuf8ocJC94CJgkwsEwI4OK2%2BR79Fy%2BsEeo2760oIRw700jzNlTXjGW6ktml%2BgZz8MYZp9SSUkU7i%2B4Xvtt%2BR3sllXwYfjol0FngK1KQeYXm1ul7RC32nBWwGJyaC2k3xMc9RxmUgldFmryDeYiNjL7M%2Bd2EDPhZtDyZv8ojATj%2BS4tkiEaDA%2Bo%2BCPryKBXnRxD85r0Bv%2FBfzUn2yfj98rQcil7YntKJTGJUTDu3bvBBjqkAY0D4EX66GOyduL1FZ2nch6xAMdomVFuB%2B8eOG8skqOEUrTomQu%2BzJMDI28vEVjOfqzJOW6FrgMVhyj02Y6eKoD8VqlC3bBC5JLE1adXIVrHcRNG7UyFNan%2BuKp2xwxQNyxm7BGgGUBTmgfSabNqPcU%2FYsZ2u6yWmpWlQu9uT865q%2BrmIPmTZ68yK8wPv6jixmx4x4VRrDdKbjq6V4oPN6eiTjCM&X-Amz-Signature=a205319cf39a1cdd16ad821cf584f30f2877c25944ace1f0d42f68bd6eb824c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIR3P3X%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFFttJjbPyUawINB2VbfQdg1hOHK3OL9u%2F0HDH7BZx0AAiBOcm5WTZgUU6wXBmIUHTP7E%2B%2BDV6NJPuN7izJWxt83fyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSBfPObgZqpnQHoMmKtwD2dzlEEyKSRDjHs3VWtGbudelNt08iwjZggwbA4Vvb%2FV5BAzpUu4S3%2Bppx%2FWM9SeC%2B2QC0wQrM0tRN06TuYYkINE7ytvtR%2BoGzZtN0j8nacYqh7anH283ceF6%2Fb7IjmodEaKJKbxHvOTmf0eI2J3MxylUxzEeDaOdQe7894cOrdR4OP6BN%2FWGkFFHPAp0CR16Q5XJ%2BSHmQkn5rlqdt1G7XXipzUw%2FNW7jeF6MoNIKWCKUaBC3QKVy%2FMEcmjYFyNbkQMHOaXbRKQOa2ndoMlJgKdyd5RuiTcVHByFEho6SRaYlwSSMN53ZhdprpaNN%2BcXgbQPUu7kQCn2JTA70wWH3DOAswhb%2B3DPoYJru3NNq5Mm3y45bVTEeFSmRx8ZAgokWlQn%2BuRVBGWSotxgTpvRMpQ%2FR4PF5r4M%2BuaPRFJXeGV7g5m2JK75HsSMfbNbIy4f2We0BZ32OZS4jlWOKEzxAj3arxczbuE2SZ7T1C00WbKk3bn7kpIYdo5853bur94tKTe28Ec6U%2FkQZTmGrLzg4heN6hMV0CN9oSpxoOEFWLB6JMF3GIbea%2BbZ6ytxDi19WevmHhKUqrfZSPsJjgzEQZtPdKdxp9lMzjB%2Bwhgg%2BzJDgxZ1xAWTbhWD0YKYwtN67wQY6pgGgFLSPUDF4sxiEGapHJua42Xapw7ynd7qkiDEH4zdBWv131S0GRdFi%2B%2B4kDyEcfLaAJHnAXaI0hqxHfmll%2FLbAVoEHsLA6%2FXVpBZPt4Svqz7%2B9A2vbgVeTwhlK%2B2R0c13ogOu3GmXWWZUkgHzAkBOcLt%2BPUrjGdayrIDOM34WJE5ZRogwvZbDjqQmfo8ssfVxGYypAhFLF8TaS0ictIRaxEOUSMMgU&X-Amz-Signature=0566b7a89ccc2b1de61dd2ef6f87ef78ddaa6bc5247047d75767ab0af9f1ab4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S63EZ7WV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCkJxttb%2Bd0nSuiBtrqXI3CPFrWcEY7Eo2lFAHW39h%2BPgIgL%2BUyew7v9AEK3HsU33WJEo9DR11M6RGgSK8ETjDIVVQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6BYaaskJurtuFzJSrcA2X2jziAaOyf6FkIEAP3WvYNfhxJlTK6N5pQvrI8Kj5lVhdTS%2FGrLr7xTD4HOeIHMkslXPUJWSJL4%2BgQvxWIuYiGNfQahhxyhd0NYOTrHr7vxuBcw3ESZp6dE%2FsYWf4uz2mDz%2B96VFG%2BiIDxLkMUuLcJtEwFCANC4gKTshVuGS5Q3krqzbq4atduXpUt1NhY3v3d%2BOc1R6uo03ZLM%2B7yuJ3CZNOAM4ScVo%2F4Sb%2Fafnlw%2BUn%2FYYOnVkC6FoogQGQAVc4jqzjadDUGnpBQ4feLIlL%2BaBgcdMchOq5CVp34h1XlBoAmgj0kwNydWIMeWRu60%2FTw37%2Bw%2BGq3iw%2Bx3sd9Q4YdtOMB40apyOcXkzT5igb3RLcv994sla1D%2BM44tTjCtYL4DTtabLkzIgZgzXsZNekRWszFd4zsCikr3ZZzQWlV07K1dCp73fFjp0jaNLNErdxLyL80skoXGlWg2vBle5HotrjlE0erHRg8GrePegb7LVJxEAqRsTbv5SCdY9UbEWBLEPcs%2Bl9gKE6sH7%2BcCJxiT2%2BeMEPQzSBX0FzTdWx1skiw2C7Ft01kGBHW35INEpGz8vVmkU%2B%2BKfSl1bwmUMzjKh0j7ytvonJrJ%2FkVNfyvkdS9RyNwju74Yv7wMOvdu8EGOqUByR655bvluqDdTRI0MKWf0fYrmssdi8i7hL7mtemenIndQWh9taATmE9mI6BC9GQfUNTXUKqLkTHZj0wl81DOZckhrcSVqdb7sGAAFAoq4vC%2FVgc5MrNTE9cMJb3O57Z0IgXx8%2FSIkcJxxaaAMsAFiwhGYUumOKyM%2FUMrrA%2FKQjjKTxfK3yL1%2Fw52MAtqu%2BB2EHUrYNvNntw3Ujkml5hNjhVg17ML&X-Amz-Signature=07ba7e1c13ac605297a1a78d893b26eee5d2babd4cca828e65c7e0e7c3bf3046&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YDD35L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCYwdwRvzJz7bF2%2BZXisWhcy4PZnX%2Fp%2Bis%2FsX3gsFh%2BewIhAIPoMgdwFJkvIDnUWl0AiC%2BJj8FkTCJ7CrO3J3M5vuuRKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQI%2B5H%2Bo4EOrkeTVkq3AOzRg%2FnDjitcDvH1xPXnaaYqIMKI8HAxk%2B1V%2FY7S8fzI2kK0OZfNom4rbZ8LxB1E%2Bmsccc8mufEn6pwmKzZsaIiHf1PmtEEL3qB%2Bk2uGy7ZtEXiqPJVmVDaSFSMks8VGpDxLYpebyBAuBr9JxlRZJH2ZOJfgj6MXE%2BNonYmBu66OKlzp%2BCOd576FAyrQ87bA98ICa2xtUrLVad9ZydMkEJHDby54uPIOroGQv6QvL67y%2FxAKi8RoJqPy36xYnxJEIrU8kmEcNy6%2B%2Fu1DOLunVFDrOuRcB1uvA74qHTOU%2BornSUMJtL%2BYwBx%2FouXULiGwcVP7n5FhA0BjWCl3cTUgS4otJETQ%2FlSuw2QM0tAVwNeRBP5ILhMU%2FlGwN1tlrWofW0SuE5OvcTlTigyjiv%2FnDqFCsnuf8ocJC94CJgkwsEwI4OK2%2BR79Fy%2BsEeo2760oIRw700jzNlTXjGW6ktml%2BgZz8MYZp9SSUkU7i%2B4Xvtt%2BR3sllXwYfjol0FngK1KQeYXm1ul7RC32nBWwGJyaC2k3xMc9RxmUgldFmryDeYiNjL7M%2Bd2EDPhZtDyZv8ojATj%2BS4tkiEaDA%2Bo%2BCPryKBXnRxD85r0Bv%2FBfzUn2yfj98rQcil7YntKJTGJUTDu3bvBBjqkAY0D4EX66GOyduL1FZ2nch6xAMdomVFuB%2B8eOG8skqOEUrTomQu%2BzJMDI28vEVjOfqzJOW6FrgMVhyj02Y6eKoD8VqlC3bBC5JLE1adXIVrHcRNG7UyFNan%2BuKp2xwxQNyxm7BGgGUBTmgfSabNqPcU%2FYsZ2u6yWmpWlQu9uT865q%2BrmIPmTZ68yK8wPv6jixmx4x4VRrDdKbjq6V4oPN6eiTjCM&X-Amz-Signature=6e0b7b25fb25454877882f518ac11c7e188eb73c742bb4bac36554f8740fe74f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
