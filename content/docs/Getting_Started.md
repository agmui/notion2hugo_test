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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NT2QVK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0RY764cDB0KLLPveZiwezns7YaNKMKAuuA0Kz7CBxbAiEA5DFeoPc%2F8MoRECzmj1LdNdp0jT4f3SCCw%2Bopl%2B8HN8MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHg1Vp0onwQgrQLircA3ah1Szss%2Bm3f0Sikkf6wVMWCY%2Fs3KaU5S8STVmzQA64GRDlfMrfd6xuYreaHyKOM5dhVJ9vXFe51niIvv3wQYWJMt%2BMwjt%2BHVP1Iwo0bEbocSGyLYQIbIZsZgXKKr7I26WWXEvISOB7rChEZA8HOthcCqI7jwr4jL7TGfhykR239T21WQaik3NTd2N3bcNt%2BdFW7iO0WPOAYvZQwc57t1hs2EqzF1AUEE%2FSPts49b43r%2FVMCEuKlv53X75NxrMKFSNsQb%2F5iOX1ITm2gt4RUMTsbHhMocRlbXocNMaVnWjjjMYakJ5gzkTZv9nU4ybszXhMHf8BbEzTpjumvXK0Kt%2BAlTDK4azzfXat0ELAT6Z3MoUXGnGmtDwilJd2LwyH9cDkROnY4oga9AlV3ZkDelUNQjzk%2B4mpmn9z0bCtWLVLjieEFnrouoPJyJT7zqUX%2Fkulov%2BRIlz3yLOfPoOgOZNPbdJ%2BaqpbJnmAU%2B5pQORn00fOoh%2BcciZp70K7VHkkOSIF5KoH0bB54yGyK%2BmRsOebuKboVGZBxmck4MSN4FxgSMGX609SWxCQzTlWVuwfZIBx0taVg88%2FQS5ydho7oHTfrs6KszusOZhRnbsq%2Bm3WI1LNhQkze%2F1IEZlPMKXOlb4GOqUB5BFztFgXLLlO%2Ff5OyXqnLR9Snt7R0HxlxwcFsJ5w81ZJLv5Q6hmC5kcI7Nfikw%2FH3ARMUIlTadI%2BT97n0kXWdQL%2Bwggzgp2R6927F79uePbBBemaEbVwZJG6MKxMtCi6JhNwIvgNzTaAO9jIcfURzheTtjWKW9FmsQMpAXE2OulaFD3DS0Skpi3ds%2BjYrF39R992YN%2BLWf7JVxxnG5LT2CGsoauZ&X-Amz-Signature=a21f75d9ae0d941a10e34cf185ca00211167ce7fd0c99fd44e940277b8e7756e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NT2QVK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0RY764cDB0KLLPveZiwezns7YaNKMKAuuA0Kz7CBxbAiEA5DFeoPc%2F8MoRECzmj1LdNdp0jT4f3SCCw%2Bopl%2B8HN8MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHg1Vp0onwQgrQLircA3ah1Szss%2Bm3f0Sikkf6wVMWCY%2Fs3KaU5S8STVmzQA64GRDlfMrfd6xuYreaHyKOM5dhVJ9vXFe51niIvv3wQYWJMt%2BMwjt%2BHVP1Iwo0bEbocSGyLYQIbIZsZgXKKr7I26WWXEvISOB7rChEZA8HOthcCqI7jwr4jL7TGfhykR239T21WQaik3NTd2N3bcNt%2BdFW7iO0WPOAYvZQwc57t1hs2EqzF1AUEE%2FSPts49b43r%2FVMCEuKlv53X75NxrMKFSNsQb%2F5iOX1ITm2gt4RUMTsbHhMocRlbXocNMaVnWjjjMYakJ5gzkTZv9nU4ybszXhMHf8BbEzTpjumvXK0Kt%2BAlTDK4azzfXat0ELAT6Z3MoUXGnGmtDwilJd2LwyH9cDkROnY4oga9AlV3ZkDelUNQjzk%2B4mpmn9z0bCtWLVLjieEFnrouoPJyJT7zqUX%2Fkulov%2BRIlz3yLOfPoOgOZNPbdJ%2BaqpbJnmAU%2B5pQORn00fOoh%2BcciZp70K7VHkkOSIF5KoH0bB54yGyK%2BmRsOebuKboVGZBxmck4MSN4FxgSMGX609SWxCQzTlWVuwfZIBx0taVg88%2FQS5ydho7oHTfrs6KszusOZhRnbsq%2Bm3WI1LNhQkze%2F1IEZlPMKXOlb4GOqUB5BFztFgXLLlO%2Ff5OyXqnLR9Snt7R0HxlxwcFsJ5w81ZJLv5Q6hmC5kcI7Nfikw%2FH3ARMUIlTadI%2BT97n0kXWdQL%2Bwggzgp2R6927F79uePbBBemaEbVwZJG6MKxMtCi6JhNwIvgNzTaAO9jIcfURzheTtjWKW9FmsQMpAXE2OulaFD3DS0Skpi3ds%2BjYrF39R992YN%2BLWf7JVxxnG5LT2CGsoauZ&X-Amz-Signature=12c112483e2eabb8235995372fa3569348df3135efeff3803a897ed75a5ec8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VTKR4E%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3PyUlJwxgbEITyDC%2FUlmxWp27caKRWs0PGODruEBYYAiEAiEomn9wsnx6UOPr8cNGtW9qSjr4Bq915HZM9c%2FKefHAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVU%2FlE2%2BbFZeqfS%2BircA%2BIARd4O9f8ydL8fd7g6O77DPASUO7fGUe8Nkg%2FgUlExZ91g23xxE0iWmkM%2FPmUIv7XV619yZ1iYjDeYKMPF3D47ljjc7t5pmLU0spMFrLsfH2wQGg5%2BiduvXFUzrpHT2%2BQZ1OK4WZLNFpuch7tEr1Ba%2FWhZdBLyqeAi7NidTzpJJH03aGQte14rUtmWEThvlW70f5FGarRrwsCVZ2bdYI1AYuhpZUe9N7uOxEgXV9SYoiVbdePh9fqIE4L2pLoAdPzcwyA8Hd07qrhNM9ND%2BggTDJ3kzpiNn2eJmsBhU7whWI%2BxmJOF2cu2BWjNjh1Ndscs5Hde7cIi7HLkfmRqN15gXfqx23UNIy%2Bpcnhw4%2Fb4SjcTKmiAs7DZUjHopvHeGjIOTSvXACcZoyc8uY8jqE8cTqex3NDPzH1g6xMkBAqgVLN6ly5m%2F4SAR%2FZO2TUzRcuXxfCJQvC%2BgJh56PXSyMI4JlEoJIIBPgRctvqa9HosxXacaNUnhFV2XBnsobOyr5VjR3LmWk%2FJjbgWnTZ6SbIUjWzfdRDhMGnh3MVvrQl4bf27i0s31bdf1iDDZZs%2BxYEmOhDroCVtcE3C3KwN1a18jYmb8AqPiFI%2BTpSvMtTs%2BWUBNdPamDmY7XdQMLzOlb4GOqUBLkhKvXx8lMZcOEGPYsGUC67SvJsoG%2F228wN5ntGCKbzwpaQezo5zd1nNeeAX%2FDXyDQ%2BUFaSTgV1O0RNfI0uTPdQ3AYSbC7gkWT2A93IbJ9iXdFWBkl9qtJwy9kziOcDEqD3%2BmEdjUrSU1kvLPcOT8Xlxtiy1DH2f25jcnR%2BR1UMTvGyV5k9%2FvIKMoJ%2BazONgpKzlF2LiNvCPC%2F4ubg2jyKahxEQ2&X-Amz-Signature=c49c5f24c2cb3b28bde63cb5f9b91ec6ed0956b41880e80c0d0e7fb43965d95e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RJVIN2T%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsFtrX9I%2BvKGgAB7ZUOQEHM5XfrdmqnijIwKFQEnZIAAiBPPL0XNInu8MVoXhO2VHX62ManLvHCB6rZO%2BMbkBEjDCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpKPR3Zgu8dVz4hZtKtwDu769BvWXpFBzgf8PcTBfmyw%2Bu2AdWyS3mbammH3bzcwHpXxdn4RW6S3Fpf6whPUTGQKlHBCjzEvZK2uaBT%2Byh%2BgdqENsDhcYuDHnt5IVy5RYogpjlMOkF%2BWo608QnvP5GMb8iMgF5PcdygcAfdeyLKNDBCDz9cMe914OKd1NGmJEsF9v6tsDGOLNnepOjfTUa2K73%2BgD31NTSXSsFqqPZd4heWp4hu6Rw8Jwb6GHynsOCHmwgXRhQKrle5hMU76FMKyNR355y3KG%2BP2%2BxT5FroufFcAZq28jVQ1cccbnME5gCSmvJbFrDAxJyiZaVeiYEoAAfkfaor%2F7yVZk16lLwl2e1u7ZAhI4w0WUeJf0eVyEfSAXbF7%2F1HcOfFqlWc%2F9QtltD0bAv8F6PT%2FsimJcSfCmVnpoFx8UhvL1iEvNQrPNBp9v0lm9Fbbe%2FM01ZBTt8ILpAqyS9FDtc74W%2FJSazy7Lemv7%2BA%2Br4qnqZKSh0FHkq80xhHyB9Q7ZmINGXPvt%2Bu2zFaoOgvadjm7XMs8MDxEZ2ZpcD0fd59XPyzBwpLZtdogkwNezPyt4hhYvQKwNBZTNYhRv76EC7%2F%2FpNARRkBe07PH30gjBskVSYyr%2FBmzPGctC9y%2B0hhDxYOMwq82VvgY6pgEv2gbPgmO%2Fkvw3lSt5Ay4iNNfChRk4K3B80rBQlJ7OMx3bbNWY4RF5XrFt9CbS8uqQM7rA3vnG7mv81fCkPKoJZWBsqxK6C4sKyGAuMJOet537k%2B00b%2BiSZuxBuf5ZQUqn9JRjZPOV37lsSYAkzvhasfJFaRpf%2FTSV2Bgt1KbFOhR5kd1eoZ7kIpBMzdhGvOS3wtrfBzIYI%2BDuepnX10w%2BxRilOUw9&X-Amz-Signature=960fde991c349a20180fbdaa6e625861aa35ff64477167ab0febc8ea645344f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NT2QVK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0RY764cDB0KLLPveZiwezns7YaNKMKAuuA0Kz7CBxbAiEA5DFeoPc%2F8MoRECzmj1LdNdp0jT4f3SCCw%2Bopl%2B8HN8MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHg1Vp0onwQgrQLircA3ah1Szss%2Bm3f0Sikkf6wVMWCY%2Fs3KaU5S8STVmzQA64GRDlfMrfd6xuYreaHyKOM5dhVJ9vXFe51niIvv3wQYWJMt%2BMwjt%2BHVP1Iwo0bEbocSGyLYQIbIZsZgXKKr7I26WWXEvISOB7rChEZA8HOthcCqI7jwr4jL7TGfhykR239T21WQaik3NTd2N3bcNt%2BdFW7iO0WPOAYvZQwc57t1hs2EqzF1AUEE%2FSPts49b43r%2FVMCEuKlv53X75NxrMKFSNsQb%2F5iOX1ITm2gt4RUMTsbHhMocRlbXocNMaVnWjjjMYakJ5gzkTZv9nU4ybszXhMHf8BbEzTpjumvXK0Kt%2BAlTDK4azzfXat0ELAT6Z3MoUXGnGmtDwilJd2LwyH9cDkROnY4oga9AlV3ZkDelUNQjzk%2B4mpmn9z0bCtWLVLjieEFnrouoPJyJT7zqUX%2Fkulov%2BRIlz3yLOfPoOgOZNPbdJ%2BaqpbJnmAU%2B5pQORn00fOoh%2BcciZp70K7VHkkOSIF5KoH0bB54yGyK%2BmRsOebuKboVGZBxmck4MSN4FxgSMGX609SWxCQzTlWVuwfZIBx0taVg88%2FQS5ydho7oHTfrs6KszusOZhRnbsq%2Bm3WI1LNhQkze%2F1IEZlPMKXOlb4GOqUB5BFztFgXLLlO%2Ff5OyXqnLR9Snt7R0HxlxwcFsJ5w81ZJLv5Q6hmC5kcI7Nfikw%2FH3ARMUIlTadI%2BT97n0kXWdQL%2Bwggzgp2R6927F79uePbBBemaEbVwZJG6MKxMtCi6JhNwIvgNzTaAO9jIcfURzheTtjWKW9FmsQMpAXE2OulaFD3DS0Skpi3ds%2BjYrF39R992YN%2BLWf7JVxxnG5LT2CGsoauZ&X-Amz-Signature=e5a8ac7112893d3076153474724b2de56fbe293229b578f13119c2691dabceec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
