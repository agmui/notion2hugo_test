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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DYHQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXO8o0vi9SFjDszXpPQW5g5vtpoaBnl6R02Ifljl0KwIgKpyWlAlXvSD%2FeuVtDt5X%2BCBigZcEwz%2FsVyU38eXY3PYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7OqQPIXqHvGa03kyrcA%2F3rqveqMmJ%2BfGFX4ShITE%2B92j6oikRs3GIMMySm8u3%2FIptV7Zwj1KnkRY7919lq9OvHNuyeACcW3KaO0aukk1cMttwjpQpc5bfipB32iCrvdMCAg%2BOSsrUkFml%2FKt5kpQ0jBljNs%2Fc9JtoxlyOA1NAZXM4iiDFBIjTHVFZS1NvcwijCuUdn5GtLN8vPL5YqHz7mtMLNmRvcCtChoKHxo9%2BfkE4%2FD0jXrjqHU5j6mupktReuUxLYp%2BMLS5cmIrf8lhB1LFcNwpk%2FM6duGHKW%2Fe2PI8txlszb9a6DXIRUFREMDfQ0B5CCLszT5xHtKpsGd8rIxZcRilaUfXlLhfufeljft4fnbu%2B%2FiurIER742U8uuNtzPQN6EgrqBGRyoEMrJclRnvAbP%2BpesG6VFRVWjDOPV8LGakLO7De7wtwk1F18j%2BPC%2BMmk%2B0xJXn8Fq7%2BEGMctrOaqzgSothHimhmRgY6LF8M%2Bek5Lh9yF4Z%2F4dbYz2tcmzf5F1KC2%2FGHZ5Bo3XxfB4fAPn%2BezOks%2B4eV%2FWckMx6FSCwk4WAyvHH5LBPi1lf08%2F6Nqcl882QTaPMVMGWZiwfqSqmmIY59Ca6e21XNRrL04K3su8wUqpOvy7H%2F9ymI8ZEB%2BbPOdzVWOMMeP%2FMAGOqUBRS3aoeUnwFBFXWN07LD8oie0vaZkScg4RLmehNgH990R6B1SxNQsxvOHZX3LUjVfEBpwXMMkwSq5IBd7aC8bYlH5U0LhJS8nmyTRO769j39G%2Fwr%2F%2BTRAnBMmiVmY%2FfK%2Fe7AdcRGx3OgYl273vqbM0LuDhURq7uopGBIUo0h6gl%2FU70%2BRXGYIgIi2QJnDUUkl2EhO9Jv09KR7j5l%2B44x5YeSmjvzs&X-Amz-Signature=9c7dda346301b5c217b9bcd1e3878cb47d32ab61171f6e94c27c4ea298317b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DYHQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXO8o0vi9SFjDszXpPQW5g5vtpoaBnl6R02Ifljl0KwIgKpyWlAlXvSD%2FeuVtDt5X%2BCBigZcEwz%2FsVyU38eXY3PYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7OqQPIXqHvGa03kyrcA%2F3rqveqMmJ%2BfGFX4ShITE%2B92j6oikRs3GIMMySm8u3%2FIptV7Zwj1KnkRY7919lq9OvHNuyeACcW3KaO0aukk1cMttwjpQpc5bfipB32iCrvdMCAg%2BOSsrUkFml%2FKt5kpQ0jBljNs%2Fc9JtoxlyOA1NAZXM4iiDFBIjTHVFZS1NvcwijCuUdn5GtLN8vPL5YqHz7mtMLNmRvcCtChoKHxo9%2BfkE4%2FD0jXrjqHU5j6mupktReuUxLYp%2BMLS5cmIrf8lhB1LFcNwpk%2FM6duGHKW%2Fe2PI8txlszb9a6DXIRUFREMDfQ0B5CCLszT5xHtKpsGd8rIxZcRilaUfXlLhfufeljft4fnbu%2B%2FiurIER742U8uuNtzPQN6EgrqBGRyoEMrJclRnvAbP%2BpesG6VFRVWjDOPV8LGakLO7De7wtwk1F18j%2BPC%2BMmk%2B0xJXn8Fq7%2BEGMctrOaqzgSothHimhmRgY6LF8M%2Bek5Lh9yF4Z%2F4dbYz2tcmzf5F1KC2%2FGHZ5Bo3XxfB4fAPn%2BezOks%2B4eV%2FWckMx6FSCwk4WAyvHH5LBPi1lf08%2F6Nqcl882QTaPMVMGWZiwfqSqmmIY59Ca6e21XNRrL04K3su8wUqpOvy7H%2F9ymI8ZEB%2BbPOdzVWOMMeP%2FMAGOqUBRS3aoeUnwFBFXWN07LD8oie0vaZkScg4RLmehNgH990R6B1SxNQsxvOHZX3LUjVfEBpwXMMkwSq5IBd7aC8bYlH5U0LhJS8nmyTRO769j39G%2Fwr%2F%2BTRAnBMmiVmY%2FfK%2Fe7AdcRGx3OgYl273vqbM0LuDhURq7uopGBIUo0h6gl%2FU70%2BRXGYIgIi2QJnDUUkl2EhO9Jv09KR7j5l%2B44x5YeSmjvzs&X-Amz-Signature=f6fb3fe73767b3d31cb5b16f796c055870c24865ee9b2d48f3e26117163bdb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DYHQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXO8o0vi9SFjDszXpPQW5g5vtpoaBnl6R02Ifljl0KwIgKpyWlAlXvSD%2FeuVtDt5X%2BCBigZcEwz%2FsVyU38eXY3PYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7OqQPIXqHvGa03kyrcA%2F3rqveqMmJ%2BfGFX4ShITE%2B92j6oikRs3GIMMySm8u3%2FIptV7Zwj1KnkRY7919lq9OvHNuyeACcW3KaO0aukk1cMttwjpQpc5bfipB32iCrvdMCAg%2BOSsrUkFml%2FKt5kpQ0jBljNs%2Fc9JtoxlyOA1NAZXM4iiDFBIjTHVFZS1NvcwijCuUdn5GtLN8vPL5YqHz7mtMLNmRvcCtChoKHxo9%2BfkE4%2FD0jXrjqHU5j6mupktReuUxLYp%2BMLS5cmIrf8lhB1LFcNwpk%2FM6duGHKW%2Fe2PI8txlszb9a6DXIRUFREMDfQ0B5CCLszT5xHtKpsGd8rIxZcRilaUfXlLhfufeljft4fnbu%2B%2FiurIER742U8uuNtzPQN6EgrqBGRyoEMrJclRnvAbP%2BpesG6VFRVWjDOPV8LGakLO7De7wtwk1F18j%2BPC%2BMmk%2B0xJXn8Fq7%2BEGMctrOaqzgSothHimhmRgY6LF8M%2Bek5Lh9yF4Z%2F4dbYz2tcmzf5F1KC2%2FGHZ5Bo3XxfB4fAPn%2BezOks%2B4eV%2FWckMx6FSCwk4WAyvHH5LBPi1lf08%2F6Nqcl882QTaPMVMGWZiwfqSqmmIY59Ca6e21XNRrL04K3su8wUqpOvy7H%2F9ymI8ZEB%2BbPOdzVWOMMeP%2FMAGOqUBRS3aoeUnwFBFXWN07LD8oie0vaZkScg4RLmehNgH990R6B1SxNQsxvOHZX3LUjVfEBpwXMMkwSq5IBd7aC8bYlH5U0LhJS8nmyTRO769j39G%2Fwr%2F%2BTRAnBMmiVmY%2FfK%2Fe7AdcRGx3OgYl273vqbM0LuDhURq7uopGBIUo0h6gl%2FU70%2BRXGYIgIi2QJnDUUkl2EhO9Jv09KR7j5l%2B44x5YeSmjvzs&X-Amz-Signature=d30165131a442ecf2c34a3f6f9eaea98cc9436f72d954f58c819fef12d1bb009&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSIFCRU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5N47L%2BamfPksJNUykgLS852HW9XFrZ%2FvtY5AEWonaDAiBDGY%2BO27yfIFiP0KpTcCujTY987SbZ8tl9PwAFlT0P0yqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqwWvE2IYuSXchWBKtwDYXvx8vul4rht3rZR5eR8Y07iNzWT0XDrEgctcYyT2CuUzfim6L7ZJyaMzUMq4jEK%2B1bftyFlA9bvuEmIrfsGCzgJg87EoqkU9AjRFcsOms9zrSoKaN1FYW4NnLJFGXpdLWEFROd2b%2B0NS4l2Es0jiIhu4tdaOQsyBFH61lKVR7rTpgNebLvXl1Kx4W08Cf6s%2Bx9aV3ZGOiAzS2jTl%2BzM0GQaIA7LGmzmab%2Bp55ENFDlBfzcBwXlfMWnI4WaBQShzzvkIEm421hlUA%2BMYRZyoovJjzOP6MoWdmuKfE5VkZK22Ts%2BmS3%2F3jbuJm6M7H9h3bnglVoFTJHSoCWuSaFHLFWlcjdCKcOUZJChnnoxWamMsMVUBYNMu0X9B47fOrKc3cp5GdxeCjnsUaiZbDs6XOm6%2BqMazNO%2FkQHqkjMsejTas5AMGalaA%2BVcKhR9yg488ZzGYmcl3hO0oR1kbDxpfERyvDfNZPirY198GOsQ2HLm%2FqKWBpiJqxGZPmUOwc85vch6pKSSlcR1Qyzw0sGYp1rqh7PTyk3Yiw1hAruBs%2BvusIqA2R9YNujKSre4O5woar4ZIrKakB%2FsdukhLka9ieqqTUY07XuqyFdit4ccCQQsYCmLMUqR8bYj6er0w74%2F8wAY6pgH8%2BebXAYz6Hwkf6g2Sh2ZpxpSBgWwXgANvqjzlO5FYYguKV2LKqNZ5HYbUw8exVHjlhVe7Q1sGLRBGDkn8kHDVYNtRXr%2Fo6%2F9H7BVqKsPUvBwWMM591qCWDFcqmd%2BkKTs5le%2B3ix27tgtj7K1jrbZitxiS2redOw2oZ342jmraYr1qTE7YpjRKANNJVVTBi7RXSWqBKLg7M7IM%2F38aWspT8b%2F8J7ID&X-Amz-Signature=74bafccd24083825cf79335bdfe38493fe68815681ef0559bea7646a70a92b41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4CXJQX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBT13n4yGRHlKi8c1cw9nyWAUkkGgG7zVvfibGsB7JxAAiEAs2VEiXWLQ3oKL%2BsmNownA%2BmnnYoVG3hFpxsSHMAdVpkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuh%2FhBCBYiuk%2Fj3JyrcA2sgQ%2BCb2YK8OPK1bWLy1QpJF44GwDStkzpJrtfnsY6Clvg2Xv08cmDhGyzGmiupMdvamgMpysFZfjF1LCxuWJ%2BpePeILb%2FDuLGWv8toGa4M%2B%2FiyTwg5cYAveTk742D3qR6d3hCrDU2nxMTkKuuSrEC1rsS0gCrFwYKyZA8un7A2aZbq3zjTjz34rsFFjbywfgdNsyrTaeaRysSP26Jrp1k9X9OUDBQLwnnY1cnwzrdvJll1FDx7dHlqCzBGtY42%2FCqfmq6ZLQ3DM%2FksmxZKoUIEE%2BfUy4GLTPm%2BL%2FDzoEu%2FnoLpiWEjp8khQMFN6SGEVqJxsKsKwskKnNgBrGwvBENkrY0ETADrRx68YFezaZqdz9L8hdjCksd8WtJw8N%2BaKbLZ99Y%2F%2BIsS2XGgNdmd%2BqIhAaxQTZXxRaLNqX8uqFPHGS8tw06VjGUUOGeXCCqCRxa3KqrTm2kj89zIUZflz8Xqxa9aUMyeK%2F80WU2ToGhvaGHCnA186Mmbsf%2FkBZ2VN9KFYrhEQBudMqpw8%2BOCcPC6QcACD0OxO6O2zTywFY7L3vjDQKDSYNEN19tydlVTBKtafvWHkWIZc%2BWFcO%2Bluby8FNTfsjA7TsmYzO37DvVtw5zdr9qsn6FnLb5XMLWP%2FMAGOqUBTIbiu0buZAdo3G6QEvMYIeaHjzN0sMUnO1v6YDIXY7O2Dd3Jp8Ev3uVLsyXa5H%2BulkYjXm85%2FhadQEDuciWj2ELOyCKLw8tiyhKzQiiuxaVSikkXYv20%2BzSuNU6Tj3Rzh1%2FGiD2NJW6ln2Qu3jKlg1qTBPmAET%2FpGrzVfqMCkK0ONdJW%2BU2TyTc4obdclEjZX0X3JgD1qYxxi2B52BNaC4eaUvVD&X-Amz-Signature=03718548348657296d318f097420ec3ee6a84d6b5c6e4493b86846b13e35a050&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DYHQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXO8o0vi9SFjDszXpPQW5g5vtpoaBnl6R02Ifljl0KwIgKpyWlAlXvSD%2FeuVtDt5X%2BCBigZcEwz%2FsVyU38eXY3PYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7OqQPIXqHvGa03kyrcA%2F3rqveqMmJ%2BfGFX4ShITE%2B92j6oikRs3GIMMySm8u3%2FIptV7Zwj1KnkRY7919lq9OvHNuyeACcW3KaO0aukk1cMttwjpQpc5bfipB32iCrvdMCAg%2BOSsrUkFml%2FKt5kpQ0jBljNs%2Fc9JtoxlyOA1NAZXM4iiDFBIjTHVFZS1NvcwijCuUdn5GtLN8vPL5YqHz7mtMLNmRvcCtChoKHxo9%2BfkE4%2FD0jXrjqHU5j6mupktReuUxLYp%2BMLS5cmIrf8lhB1LFcNwpk%2FM6duGHKW%2Fe2PI8txlszb9a6DXIRUFREMDfQ0B5CCLszT5xHtKpsGd8rIxZcRilaUfXlLhfufeljft4fnbu%2B%2FiurIER742U8uuNtzPQN6EgrqBGRyoEMrJclRnvAbP%2BpesG6VFRVWjDOPV8LGakLO7De7wtwk1F18j%2BPC%2BMmk%2B0xJXn8Fq7%2BEGMctrOaqzgSothHimhmRgY6LF8M%2Bek5Lh9yF4Z%2F4dbYz2tcmzf5F1KC2%2FGHZ5Bo3XxfB4fAPn%2BezOks%2B4eV%2FWckMx6FSCwk4WAyvHH5LBPi1lf08%2F6Nqcl882QTaPMVMGWZiwfqSqmmIY59Ca6e21XNRrL04K3su8wUqpOvy7H%2F9ymI8ZEB%2BbPOdzVWOMMeP%2FMAGOqUBRS3aoeUnwFBFXWN07LD8oie0vaZkScg4RLmehNgH990R6B1SxNQsxvOHZX3LUjVfEBpwXMMkwSq5IBd7aC8bYlH5U0LhJS8nmyTRO769j39G%2Fwr%2F%2BTRAnBMmiVmY%2FfK%2Fe7AdcRGx3OgYl273vqbM0LuDhURq7uopGBIUo0h6gl%2FU70%2BRXGYIgIi2QJnDUUkl2EhO9Jv09KR7j5l%2B44x5YeSmjvzs&X-Amz-Signature=2b3a8cfc7fd200b86249115e927fb1ecfa8970e9cd33b54a7148e24d6a0aae09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
