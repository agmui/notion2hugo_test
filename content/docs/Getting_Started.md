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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWMQW22%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFfOeUZrdEBXDz6x9bGWrtFO8ryZpb43kkowDspv4dAIgbqU%2BtZnc0HmKx5UZHjUwFMTGzv6U3rNBYKOQkahiTQAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLoLk1ScqUFjEY%2BDSrcAw6wskdZD1%2FbuXED0C1o9R7HY8Sto06EtrXqvdYjcxEe1r7Pm7jpd0iPobn3vsCHKV6OSUGYgybBd63DvuBjskUk2ObmrKfXNv6GxitC0SSO4mrUUOT68KcRWJ%2FsKLT4MysymuFDVuwmyNp%2Fhd2oNyh0xk4OQQWM8qZISBwv92j7shJyo4KhFJig14nHBzSIfdQcjx5X8G4VaIUrwWDZ44xq6DghVy6unn9zObEK4MqzDPUVMN3bz2elkoYxtgnkkhY3B5ykYfy5hug1B3Xg8FHLJqPDSrwsxjmBzGGjHHx1uHDmS%2BKmvttS5P0ydo0Vug4WJaHfPPpyoSf2fkO8ouIllIW9GtDB2%2BuzFQK2RKPdlLOu%2BByUSgWCrc7JSBGceacM92Xm9cirznZZHwrtCTBbinrFM6myrk33%2FT4NHEcJL635wd0hDa9J8crV05X2BDdktXGovPJdMqGNYJQGAB3ZjtZ2vw2KPF8%2BwiBPuq6MPM6lSiBcXyTYymZSlxMpHvCZni7HechmNBsXOmN0F6UDK511gnp%2BdFxItTg9XNsSim5TkSha9DI5fA0AMiU%2FtO%2BrN7TjnWTPxuciELSExpmFXE4YVC8tpWYtSVfoNAN33OiO0QaqslM0r7UsMPrrx8IGOqUB1JQzsduyFc6aLlUMkMYbJMiUwdFn2CnwGhiL5LgsF9FNMLFBFZyobmys7rlXPVJ4MQW3ZPyjzaSpqMunadu1sIURzLMK%2B9SqcxR42w9Jt63vW4%2Fnu7OddFgToG4lpWmQqOABbDamm3ZNNlcMKUy8wt6IbCl1St62r%2FoDyM9T2eN1wyYPrhgQWiyeBWlUihJUk4wboAIE%2FbJFyJA5hbYohSdLu79t&X-Amz-Signature=4aec96deb88dcfc777585074994160e4623ef49c1c17b551ea870a495a2f567f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWMQW22%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFfOeUZrdEBXDz6x9bGWrtFO8ryZpb43kkowDspv4dAIgbqU%2BtZnc0HmKx5UZHjUwFMTGzv6U3rNBYKOQkahiTQAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLoLk1ScqUFjEY%2BDSrcAw6wskdZD1%2FbuXED0C1o9R7HY8Sto06EtrXqvdYjcxEe1r7Pm7jpd0iPobn3vsCHKV6OSUGYgybBd63DvuBjskUk2ObmrKfXNv6GxitC0SSO4mrUUOT68KcRWJ%2FsKLT4MysymuFDVuwmyNp%2Fhd2oNyh0xk4OQQWM8qZISBwv92j7shJyo4KhFJig14nHBzSIfdQcjx5X8G4VaIUrwWDZ44xq6DghVy6unn9zObEK4MqzDPUVMN3bz2elkoYxtgnkkhY3B5ykYfy5hug1B3Xg8FHLJqPDSrwsxjmBzGGjHHx1uHDmS%2BKmvttS5P0ydo0Vug4WJaHfPPpyoSf2fkO8ouIllIW9GtDB2%2BuzFQK2RKPdlLOu%2BByUSgWCrc7JSBGceacM92Xm9cirznZZHwrtCTBbinrFM6myrk33%2FT4NHEcJL635wd0hDa9J8crV05X2BDdktXGovPJdMqGNYJQGAB3ZjtZ2vw2KPF8%2BwiBPuq6MPM6lSiBcXyTYymZSlxMpHvCZni7HechmNBsXOmN0F6UDK511gnp%2BdFxItTg9XNsSim5TkSha9DI5fA0AMiU%2FtO%2BrN7TjnWTPxuciELSExpmFXE4YVC8tpWYtSVfoNAN33OiO0QaqslM0r7UsMPrrx8IGOqUB1JQzsduyFc6aLlUMkMYbJMiUwdFn2CnwGhiL5LgsF9FNMLFBFZyobmys7rlXPVJ4MQW3ZPyjzaSpqMunadu1sIURzLMK%2B9SqcxR42w9Jt63vW4%2Fnu7OddFgToG4lpWmQqOABbDamm3ZNNlcMKUy8wt6IbCl1St62r%2FoDyM9T2eN1wyYPrhgQWiyeBWlUihJUk4wboAIE%2FbJFyJA5hbYohSdLu79t&X-Amz-Signature=a8703a419ba3fda4a764205c0fb641e2f7ab60f8b44e715bac121fdaa5e254c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWMQW22%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFfOeUZrdEBXDz6x9bGWrtFO8ryZpb43kkowDspv4dAIgbqU%2BtZnc0HmKx5UZHjUwFMTGzv6U3rNBYKOQkahiTQAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLoLk1ScqUFjEY%2BDSrcAw6wskdZD1%2FbuXED0C1o9R7HY8Sto06EtrXqvdYjcxEe1r7Pm7jpd0iPobn3vsCHKV6OSUGYgybBd63DvuBjskUk2ObmrKfXNv6GxitC0SSO4mrUUOT68KcRWJ%2FsKLT4MysymuFDVuwmyNp%2Fhd2oNyh0xk4OQQWM8qZISBwv92j7shJyo4KhFJig14nHBzSIfdQcjx5X8G4VaIUrwWDZ44xq6DghVy6unn9zObEK4MqzDPUVMN3bz2elkoYxtgnkkhY3B5ykYfy5hug1B3Xg8FHLJqPDSrwsxjmBzGGjHHx1uHDmS%2BKmvttS5P0ydo0Vug4WJaHfPPpyoSf2fkO8ouIllIW9GtDB2%2BuzFQK2RKPdlLOu%2BByUSgWCrc7JSBGceacM92Xm9cirznZZHwrtCTBbinrFM6myrk33%2FT4NHEcJL635wd0hDa9J8crV05X2BDdktXGovPJdMqGNYJQGAB3ZjtZ2vw2KPF8%2BwiBPuq6MPM6lSiBcXyTYymZSlxMpHvCZni7HechmNBsXOmN0F6UDK511gnp%2BdFxItTg9XNsSim5TkSha9DI5fA0AMiU%2FtO%2BrN7TjnWTPxuciELSExpmFXE4YVC8tpWYtSVfoNAN33OiO0QaqslM0r7UsMPrrx8IGOqUB1JQzsduyFc6aLlUMkMYbJMiUwdFn2CnwGhiL5LgsF9FNMLFBFZyobmys7rlXPVJ4MQW3ZPyjzaSpqMunadu1sIURzLMK%2B9SqcxR42w9Jt63vW4%2Fnu7OddFgToG4lpWmQqOABbDamm3ZNNlcMKUy8wt6IbCl1St62r%2FoDyM9T2eN1wyYPrhgQWiyeBWlUihJUk4wboAIE%2FbJFyJA5hbYohSdLu79t&X-Amz-Signature=07e8c9a1499ec94d7888899e976a13aa913b6d3ffecf667f39e66e573cfe09a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T252BOEY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaav4G76mzhC9gpGIwOnUMMnC9HGH0U%2FxLV5XqZbjwgIgQBwagutwXGO9T%2B3lqG%2BoSoLZufLaAlnPCGnlVrTvri4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPDMuA2Y1iGGNqqNyrcA3dcoqvNJvr0u6E%2FTxMh6ZlMg60bHJ310gnzZi8aD6vUtkFY2UUs0VltLX645Fj%2Bzz8C8z0onVwFFtQLlLf%2BsGAybGS%2BgbWpFRY2QVUiRwOQyOlsytYhXm%2BpUjUt%2B9eLFtctNzPuH4Mf2U0xg3N69SVD1ZTxDSX%2BDMXv95t9Y5uEBuec5ZKyBPu8r4MaONPFQ1mc5Sgh26ICflBtR2fGfAg6Edy8NHFj6n07Ldb2avuzoH9agHXGG1JwElPbWz8cfOh1YVRpzCKqjNwv5w0Jhv9L4dfBsv4%2BZrh3cLQ5mEJO%2BjfsHpyOSMJ25LUtNUkGdhUzaf1CCvkep3axosZ8Kf34%2BeNTKCfXIuuWQRJxYZkX8S%2F%2BuEZ07QmuZ0DCVI7HCBFoapesYrxwuMCcvuRe%2BKf5MlI1CReELSV98ePDGcZO0idedqzFJwWTroOgRicZKl88D9Knqy9lo7dAvVrKjHpZurS%2BVmGtvXEF1uepx9%2BZAgXTDoZc8aji4F6kAFvYEoPzsYeNX2eOs48tpT9S627%2FWdjWIFptkQEIHyNq4KfuiSz%2B6LvmtBmzY44PZv9HZcEAHyVMBBs7WTu5%2B0jTt%2Fxvk8v5OwatEg4wg4m679T%2F71SVUtAfwSBet3JXMOjsx8IGOqUBdrg4UjpxPV9%2FhheJ6i9lgBmczze%2B9ya2McIOGEHqc%2BKDBJYLD6TGLHoeNEPPVZ1Jb7UDa9YioGuBj9dUfKckz2DXgowDW%2BrkTdmNbPwzb1TryABVlgQ5qpi9OeCLqLye6LARAmfUMsNR%2BB4tRH4YEnMN6TqI%2BnTnkUMWsRssno8EZMaJj3jhRi46IO8VmatjaRPZe9tA2dctvxj%2Fqt9TWirLYYsi&X-Amz-Signature=ceaa9ac4a8ac6009fc9b026cd8b903d0b7d9c9511ce3633065686d3a6eafddd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PQKGHD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FFwPLUyagTp0lnmGx9Q5zgLzVY4%2F53SQ%2FLLCTy1ilPQIgI4qsiuTa04jIo0fqYR1uT1vbamFdIj8MuwLxejhJZogqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2B%2B6%2BNWOPBgWQdMCrcA5RFSMxcE1B1nzFXja4hgG82xV3CJj5ANniiR%2BzUbElNZTs4fHiXLTsDIiw%2FFb8KwDbR5%2BED5d0b4ZhPf8yxXh4%2FZgsw1%2FNwGWuLyuKep0PtiuVJJ%2Bs4LQddPOfasWGsl1qzs%2BX%2FeLw%2FgSt1MXcZ8254Vsa%2B6pbDxUSX5WCbp35k0kZz9g4yrzpvxYx1T6bkDD9%2Fk1A7y3z0y9mIXzOxHiVQdED%2FVkNxXK%2FrGf8bqO2wvdf2rJkoYI5mybZEsm%2BsQQPUd1WZSwaIoUD88wbVPGzzMLDIepL7VXHy7TRH32nlOb2LsdU0nBorZ%2FP0LUKJY0FfrEJJLo50PQPDWDJJc0LlpKwvfgqXjfVCbg%2BHF0mjRPCcX%2Be1PdtbR8YPAfzeFlrXBDcGT867ZQlbT46u53EPL61p9mdOrX1DXTzmhsBGQa0XVnpKR01QkS9uKOHcohISThiEI1UhecZ9cxXMtO8lJkXk9Xwgqnp30n0nFIUc3LoDhYIEiNOQwajr59K%2FweaaQS8nnY0xObyUIk%2B0wnltJOrIxK9YB%2Br2hCE5sBPMPJOhhmwzG2PEjIz5s0G2vCnRyC3X92hn%2BeN1m2FFq3k%2FeB7zgY7IHRWcIZuF03eIlkNX32pDHVMICGWYMLHsx8IGOqUBpq5KLIRNxwr7W1O8w5drGBuv47Ad%2F0cOZ9cRLHXgci65Une1S73OP%2BVw%2BQsXvHN3iLJ7%2FGCuXfllU61ctMeREtH4nH%2Fayx7u76%2F1eZr0KcwJqW7s8SH2KF%2BEm%2B3exfg%2FRhoa29bczdHhoOMAJF1tmEKjhEVzkZQgVpIhiUlNaVhlmX02f8e65JY%2FFJuBuMiSlSEHt6B4gs2GLqtpU695LqJ%2FxR9V&X-Amz-Signature=84153d630a9dc960f725d2b60eb291f5322ca98c693d79c37e2bf098bc5ae0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWMQW22%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFfOeUZrdEBXDz6x9bGWrtFO8ryZpb43kkowDspv4dAIgbqU%2BtZnc0HmKx5UZHjUwFMTGzv6U3rNBYKOQkahiTQAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLoLk1ScqUFjEY%2BDSrcAw6wskdZD1%2FbuXED0C1o9R7HY8Sto06EtrXqvdYjcxEe1r7Pm7jpd0iPobn3vsCHKV6OSUGYgybBd63DvuBjskUk2ObmrKfXNv6GxitC0SSO4mrUUOT68KcRWJ%2FsKLT4MysymuFDVuwmyNp%2Fhd2oNyh0xk4OQQWM8qZISBwv92j7shJyo4KhFJig14nHBzSIfdQcjx5X8G4VaIUrwWDZ44xq6DghVy6unn9zObEK4MqzDPUVMN3bz2elkoYxtgnkkhY3B5ykYfy5hug1B3Xg8FHLJqPDSrwsxjmBzGGjHHx1uHDmS%2BKmvttS5P0ydo0Vug4WJaHfPPpyoSf2fkO8ouIllIW9GtDB2%2BuzFQK2RKPdlLOu%2BByUSgWCrc7JSBGceacM92Xm9cirznZZHwrtCTBbinrFM6myrk33%2FT4NHEcJL635wd0hDa9J8crV05X2BDdktXGovPJdMqGNYJQGAB3ZjtZ2vw2KPF8%2BwiBPuq6MPM6lSiBcXyTYymZSlxMpHvCZni7HechmNBsXOmN0F6UDK511gnp%2BdFxItTg9XNsSim5TkSha9DI5fA0AMiU%2FtO%2BrN7TjnWTPxuciELSExpmFXE4YVC8tpWYtSVfoNAN33OiO0QaqslM0r7UsMPrrx8IGOqUB1JQzsduyFc6aLlUMkMYbJMiUwdFn2CnwGhiL5LgsF9FNMLFBFZyobmys7rlXPVJ4MQW3ZPyjzaSpqMunadu1sIURzLMK%2B9SqcxR42w9Jt63vW4%2Fnu7OddFgToG4lpWmQqOABbDamm3ZNNlcMKUy8wt6IbCl1St62r%2FoDyM9T2eN1wyYPrhgQWiyeBWlUihJUk4wboAIE%2FbJFyJA5hbYohSdLu79t&X-Amz-Signature=14cdf361cddbc2af015ab40664a213d4c03d37ce888762cb35498e6dd00cc7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
