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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3WY4F%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgD1rW6J5H7aCq6Er24w0zHSGPEcUtb9ACmgJI%2FFWIlAIhALgYgFonK%2BuN%2B8s8Ef8Pjwiz2U3gXPfYC15ATJ0N4OQDKv8DCDUQABoMNjM3NDIzMTgzODA1Igw%2BFy7W41YZi6MMeGkq3ANXk5otyFqR0Uf7Q4YZW8TvQ7Hy3lQJx61EVYBwK9%2Bf9SWzzLRfXwam9Ws4iJGLMUKAz5gKWnIJ3fp5VbAmuoI01lhMe13JNPolmsAYH3uoZ7%2BAZdnHGn1gNuTvTgCSQH9PRQfpcFvswWS2rIEGaNdGS6ANXVVtYgzecDPsnMt2Uq4Cf2jujucO8VSIF4I2gHF9eUdmkWoqxbBdfgnyrLk1XiaZAOvEpCPIJwu6niCPKYlDg6xriwFxbWJ5t8uRBPc20UJVBC7KLn0ricP2SN36kfi%2FbKJInyLFQtDCSI215qMVzgZBsNKDAFj7fNdvzumbWVoC7Xae%2F8XoVimd9yz7wbcQHPwalFAZSTzZ%2BZZUL36miNZsHza5wLcQoVpOYrmwIlPgau3bHNRybdFY1Yytv36tZ0gsKMfSiq%2FAwkf1d5ZIQUW4abo4jfYRFKjVy%2F6Z4S1EZfUJJ9JWYsiNsdVtUPkssklTzONVcifbwHyozJnzyJIQGW3VBYiqwMMwZy3wr%2FD4rn7TLgGfTQAOh%2B0wSK7BSjFISZPRTblGThV488YhMXBTwuxYqGqI7zXuw7hxPPxrGe3S8XoIdJmadJv%2BSSKbS5w%2FAE%2FQwHNWYBA6Xlv2f6%2B6bsk%2FvcrttjC%2B3Ny%2BBjqkATFriSIrLrZyR93xw%2Bz2scjNmZ1XHRTQiEGFhP%2FwnhX4oIaZJ8nrjsUjSSXJxzfDrP6rPvXQHuqdM%2FqYZdSNy%2B3D75LXhNiZ2LLWAql2WRKlWAQGyWyh%2BGO82LlJabjNu7eLbk%2BM6Xf70xsVKBIBo22xLG8Qrd62nOs2N%2FYPKwbd9CelWNvGIOCBxqp4ymfAXDUr6zHgDTBKJJmdOhDXtm8ZYjJd&X-Amz-Signature=595ff928040f70eef7af2ddecda7ba363b19f99cf4a4a3b79841f9d30c8d2884&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3WY4F%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgD1rW6J5H7aCq6Er24w0zHSGPEcUtb9ACmgJI%2FFWIlAIhALgYgFonK%2BuN%2B8s8Ef8Pjwiz2U3gXPfYC15ATJ0N4OQDKv8DCDUQABoMNjM3NDIzMTgzODA1Igw%2BFy7W41YZi6MMeGkq3ANXk5otyFqR0Uf7Q4YZW8TvQ7Hy3lQJx61EVYBwK9%2Bf9SWzzLRfXwam9Ws4iJGLMUKAz5gKWnIJ3fp5VbAmuoI01lhMe13JNPolmsAYH3uoZ7%2BAZdnHGn1gNuTvTgCSQH9PRQfpcFvswWS2rIEGaNdGS6ANXVVtYgzecDPsnMt2Uq4Cf2jujucO8VSIF4I2gHF9eUdmkWoqxbBdfgnyrLk1XiaZAOvEpCPIJwu6niCPKYlDg6xriwFxbWJ5t8uRBPc20UJVBC7KLn0ricP2SN36kfi%2FbKJInyLFQtDCSI215qMVzgZBsNKDAFj7fNdvzumbWVoC7Xae%2F8XoVimd9yz7wbcQHPwalFAZSTzZ%2BZZUL36miNZsHza5wLcQoVpOYrmwIlPgau3bHNRybdFY1Yytv36tZ0gsKMfSiq%2FAwkf1d5ZIQUW4abo4jfYRFKjVy%2F6Z4S1EZfUJJ9JWYsiNsdVtUPkssklTzONVcifbwHyozJnzyJIQGW3VBYiqwMMwZy3wr%2FD4rn7TLgGfTQAOh%2B0wSK7BSjFISZPRTblGThV488YhMXBTwuxYqGqI7zXuw7hxPPxrGe3S8XoIdJmadJv%2BSSKbS5w%2FAE%2FQwHNWYBA6Xlv2f6%2B6bsk%2FvcrttjC%2B3Ny%2BBjqkATFriSIrLrZyR93xw%2Bz2scjNmZ1XHRTQiEGFhP%2FwnhX4oIaZJ8nrjsUjSSXJxzfDrP6rPvXQHuqdM%2FqYZdSNy%2B3D75LXhNiZ2LLWAql2WRKlWAQGyWyh%2BGO82LlJabjNu7eLbk%2BM6Xf70xsVKBIBo22xLG8Qrd62nOs2N%2FYPKwbd9CelWNvGIOCBxqp4ymfAXDUr6zHgDTBKJJmdOhDXtm8ZYjJd&X-Amz-Signature=05ec81ec59e6ef604d5e8468edc0561823d182d1797cdf61f863c61e12d38a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGLD4FB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsALLCr7Y02VvXROthIK80HP%2FYbX8eWs1sugfyMoODuQIgSCnV3pYtvCIyctgjZsGShbRYwGc8z%2FdyKUEPmws5Vukq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJHBYbn3DCpWyZIl4yrcA7MNV7auCTbTihVjdHPDQrAfENhsumlZPrOGkB6ZU022Yi%2BZ7ZZ8kgLsASfljmrYeCeu6IQpBD71m%2Fqmo1DEIj3Zp6vMCrRisexutrCLO6s6ABcDcxqm9JS%2Fx9xGRKtHSAMCDw8xYgF4BW6GbTyan6fnk2cNucuIu4m4AbDEh2%2F5Q4TXGyr430pSe206omA7hnqwB%2BNSvBl3T3IcGp7P2216mm7nFMqSd4oy%2BFHP0lT3eL%2F4kjUQNsuYaXTH7AakiEz2UxMu%2B21kFUtzVmmuVlh1Ivs6Vc9HAPqsX8geqTMaRcqfngrpu56W4CWNiP4Y1%2FepWEh%2FdpoUQvt8o4R%2BU3wKiOm9Jw9Nv8pofFs5VTkRAUWf0lYu01dNueeLqu3kLoSKTHL5AIReNL3QWB0b%2FZSYx%2FNWTdQ6yFZyvbJHmt20ntoysIBgoaB1QTmgq7OY33xFsq%2FlDiqWgnU2h7Wn8pmvlwot9bYn3ny1nL9N68Uo%2BrsUJQNBaxcP6hw8AqQlKTe9Dja3Z%2B7UJ0%2F2L4eeNaxLs5DyqDMt7V5WxBQ57Qx0GyUZknBaX6KJljey%2FyJdfu8ZRBdq99MLGg5gRiXvyg66QtjqJUzDMn%2Fvu2sMudSAxLXHUMa85qg%2BBJMxMI%2Fc3L4GOqUBr2KyQ4WxR1HKZ4nG37X42yC36oxBzVkK3InqWw7mgBLcMjU3Npd1hk2cDLMl1AUzD%2BlXJHOd6SaWMSczUzpTlfa2wdGyP%2FDfWTGiQCTP5BMRtRUbU2RJDUUrz%2BFrODsJ9xYuUETzPJRxLfNfJiuotBxX5zzG4%2FKt4bDgC9LIZZUl51jmKCMgWgtYR%2Fj%2F9Gaz%2BzOLMNy9HADBfG3wAHoEklLvAfPz&X-Amz-Signature=1c3e1430d9da9cfe95cd396ef9bb6b89c531e73458b29437e417f3f32554ba6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43MMCBA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMYVzz9GOMOgPG2lvNFFCd4p2D9kIhK4fLg93H43bPfQIhAJPDN9gS1GzOG%2BozC6ZBN3PuL56JuUijIhBnagH9CBSSKv8DCDUQABoMNjM3NDIzMTgzODA1Igyd5kGW6yiDTGmO8lIq3AP9Od5ch%2FwtTHEi5OvTfInPMLH6U8yckRzQ8ta5o6OiDXYJVrouOr070O%2FWXO5qzfYGHmMcfW4FQVJj4RyPZznYpWFlqBmaSmvxYxJFxqPMN9NbSVVnADJGAXXxCNLOmHiELu8S54rnUrG8%2BT3vyAoq7TDmb2%2BuiYacj2FAgIzYo1Y67Mp61UFzv0VoxePkUdJvOcTVwWWc%2BwTeYNnxj%2F26JQnx9lJdXhvmiK1Ba5umb4PrazURA8r%2BdqwaeMTRwacbBYoTdverOl%2Bvkiir4bN8MzXmzba9lyga9%2BiqZ5DKDfcVc1a%2FQs5pepB381t74%2BGF%2B0%2B5JyCw75ZInWkWY3Z1q5McYJODnmJ7mxR%2BhUgHfKUSv6ENyFT%2BqlvsJLbklDS4Br75TtA8TGMKvPTdseRQC5tpUvTX%2FiEjDozklRhJv4JsTyZuYy1GGXQxxO2XXKcMv2ozws5dtJH4iyia4OWZKxjsSQNjH6rBYJsPuRd4Z9mACTFYL92XXnBtGhUzlHnrhZOJ0Jq9Dyd6GSBg73xov2U6BgInPdxW80RxYMil1g8ONKV3vTKcpu5qOq6jwVem7zERkVfmN1l2ftaccMwlDwnEwP5hbj7A26U4Tz%2FGS%2BiPHWKJ1qYuJ3UqgzCC3Ny%2BBjqkASAGablBF5Psumj2b5ysNTHN485S7GAJaP9l4VyJIXaiC%2BRm2pzGBz%2FEXoFQEMxPzTyyUeJ%2Fppvtc4oR%2F36KSaAnhVqnofWwo19aquEQL%2BP%2FDjUyTBetGJF120m0wxeLwuaxGkjSTUyKRB2aNeVNrnZGAzpFY37QwtMjO9h7m4xaYkHdsrK%2BN1%2FGLgClR0MkVhJGN6IPfRRl0HhXk5z3UTAXpe%2FA&X-Amz-Signature=239d7b0d33a31c0bf9171e0edc74558afa04951d53f8b7ffdbdc587e6e356318&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3WY4F%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgD1rW6J5H7aCq6Er24w0zHSGPEcUtb9ACmgJI%2FFWIlAIhALgYgFonK%2BuN%2B8s8Ef8Pjwiz2U3gXPfYC15ATJ0N4OQDKv8DCDUQABoMNjM3NDIzMTgzODA1Igw%2BFy7W41YZi6MMeGkq3ANXk5otyFqR0Uf7Q4YZW8TvQ7Hy3lQJx61EVYBwK9%2Bf9SWzzLRfXwam9Ws4iJGLMUKAz5gKWnIJ3fp5VbAmuoI01lhMe13JNPolmsAYH3uoZ7%2BAZdnHGn1gNuTvTgCSQH9PRQfpcFvswWS2rIEGaNdGS6ANXVVtYgzecDPsnMt2Uq4Cf2jujucO8VSIF4I2gHF9eUdmkWoqxbBdfgnyrLk1XiaZAOvEpCPIJwu6niCPKYlDg6xriwFxbWJ5t8uRBPc20UJVBC7KLn0ricP2SN36kfi%2FbKJInyLFQtDCSI215qMVzgZBsNKDAFj7fNdvzumbWVoC7Xae%2F8XoVimd9yz7wbcQHPwalFAZSTzZ%2BZZUL36miNZsHza5wLcQoVpOYrmwIlPgau3bHNRybdFY1Yytv36tZ0gsKMfSiq%2FAwkf1d5ZIQUW4abo4jfYRFKjVy%2F6Z4S1EZfUJJ9JWYsiNsdVtUPkssklTzONVcifbwHyozJnzyJIQGW3VBYiqwMMwZy3wr%2FD4rn7TLgGfTQAOh%2B0wSK7BSjFISZPRTblGThV488YhMXBTwuxYqGqI7zXuw7hxPPxrGe3S8XoIdJmadJv%2BSSKbS5w%2FAE%2FQwHNWYBA6Xlv2f6%2B6bsk%2FvcrttjC%2B3Ny%2BBjqkATFriSIrLrZyR93xw%2Bz2scjNmZ1XHRTQiEGFhP%2FwnhX4oIaZJ8nrjsUjSSXJxzfDrP6rPvXQHuqdM%2FqYZdSNy%2B3D75LXhNiZ2LLWAql2WRKlWAQGyWyh%2BGO82LlJabjNu7eLbk%2BM6Xf70xsVKBIBo22xLG8Qrd62nOs2N%2FYPKwbd9CelWNvGIOCBxqp4ymfAXDUr6zHgDTBKJJmdOhDXtm8ZYjJd&X-Amz-Signature=a274e5218591649b268326ff97117dd973e16b75703d8feab7291d5f1f76ff38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
