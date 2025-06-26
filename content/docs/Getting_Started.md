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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDR32C5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUBUiWkpNf8ZxQaoUokzaHhcDgrN%2FWZ6tBwutvD6GHmgIhAMaQfoRNR8a8khnKoao2EOL2j0O%2B9RylBSpb2YR74VBnKv8DCF0QABoMNjM3NDIzMTgzODA1IgyY3CCvdpVPqegD580q3AOEw108yD009LLs60S%2Bu2zSF1IPZTgO%2F9nnSIsEawlr1u%2FM07%2BrFLHLQhOTc9rKWRPE5nInADsTmEldmul9xB27SKftSUO4bSDGdXQg70%2BQXZYluBhQetN8EVKXUn2%2F8nhZyut%2FAxv%2BxaN6rQiTB2HT%2BnXLYUejKPQ2iT5ZSZAoAxtuGmwWqeXO3SC6qlgO%2Bz2pn5Qb8EPECoKs0tmmRs0AtW7roXvxkuovjV%2Fa5uuj%2BvykbhE%2BhQOfzWwl8ux6tJfPTlN6gc1JelO%2Bq%2BBrdwDnP85qjmb0Bs49%2BI3827kJqtewqp1glTxfsYx3BAhJn4BabjZajaznE7e8QkaU3RisDfbBGOFbvEbQzWDyePjRajvJf%2FrbjTg74cWhV%2FiXmy2dxs%2Bkyif7rrPFy0av6qIcDdHpy8hIUv%2BSxGhRyezphJszm%2BNqwiYpBtb%2FKYU3Zot1jCXGW5MwHs08Za41%2BMHmuobb5yY7zOrOVqsWxKw0UM1dB1AUwl1KPVSKD1wPWFv2bTb2r1Yq5tb%2F8RYA0XrsaSpyrrNNcOx79bFbArxZUDvt5YNvvOAz8mHl3cnRQlIXg0QuDnosA6Cz7%2BDx04T93BQSmUlJZxaeFqs5p7OcbljehDaLgaWS%2F429HTDl8vTCBjqkAdRzcrE3KLzbMMnr6hTXamixcIsvtqgAInVUcZEVh8IxPXedd%2Bzu7X0OBpQgXEfVWngW9oL9%2BO8y24BykMYS%2B6zo99WBfGquh9hzGt3j8dJ7UyOPBJoZhMKO22IyCbZhk8dEsApbEJronWOYQZ7sethuYEcYKtIz1k0TUanECeqONEsDDtlMDGJz5q9narUed7WRSLmbIluThIFQZByQtQnXuiS5&X-Amz-Signature=8b298f60cf7f92af6d2a9bd79962ff528389b83276021272b7fda07aeca9690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDR32C5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUBUiWkpNf8ZxQaoUokzaHhcDgrN%2FWZ6tBwutvD6GHmgIhAMaQfoRNR8a8khnKoao2EOL2j0O%2B9RylBSpb2YR74VBnKv8DCF0QABoMNjM3NDIzMTgzODA1IgyY3CCvdpVPqegD580q3AOEw108yD009LLs60S%2Bu2zSF1IPZTgO%2F9nnSIsEawlr1u%2FM07%2BrFLHLQhOTc9rKWRPE5nInADsTmEldmul9xB27SKftSUO4bSDGdXQg70%2BQXZYluBhQetN8EVKXUn2%2F8nhZyut%2FAxv%2BxaN6rQiTB2HT%2BnXLYUejKPQ2iT5ZSZAoAxtuGmwWqeXO3SC6qlgO%2Bz2pn5Qb8EPECoKs0tmmRs0AtW7roXvxkuovjV%2Fa5uuj%2BvykbhE%2BhQOfzWwl8ux6tJfPTlN6gc1JelO%2Bq%2BBrdwDnP85qjmb0Bs49%2BI3827kJqtewqp1glTxfsYx3BAhJn4BabjZajaznE7e8QkaU3RisDfbBGOFbvEbQzWDyePjRajvJf%2FrbjTg74cWhV%2FiXmy2dxs%2Bkyif7rrPFy0av6qIcDdHpy8hIUv%2BSxGhRyezphJszm%2BNqwiYpBtb%2FKYU3Zot1jCXGW5MwHs08Za41%2BMHmuobb5yY7zOrOVqsWxKw0UM1dB1AUwl1KPVSKD1wPWFv2bTb2r1Yq5tb%2F8RYA0XrsaSpyrrNNcOx79bFbArxZUDvt5YNvvOAz8mHl3cnRQlIXg0QuDnosA6Cz7%2BDx04T93BQSmUlJZxaeFqs5p7OcbljehDaLgaWS%2F429HTDl8vTCBjqkAdRzcrE3KLzbMMnr6hTXamixcIsvtqgAInVUcZEVh8IxPXedd%2Bzu7X0OBpQgXEfVWngW9oL9%2BO8y24BykMYS%2B6zo99WBfGquh9hzGt3j8dJ7UyOPBJoZhMKO22IyCbZhk8dEsApbEJronWOYQZ7sethuYEcYKtIz1k0TUanECeqONEsDDtlMDGJz5q9narUed7WRSLmbIluThIFQZByQtQnXuiS5&X-Amz-Signature=7bfda4a8328b85c99a4fce8eb7df64d2f5a4a32bcbae6949425843cf6a0345a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDR32C5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUBUiWkpNf8ZxQaoUokzaHhcDgrN%2FWZ6tBwutvD6GHmgIhAMaQfoRNR8a8khnKoao2EOL2j0O%2B9RylBSpb2YR74VBnKv8DCF0QABoMNjM3NDIzMTgzODA1IgyY3CCvdpVPqegD580q3AOEw108yD009LLs60S%2Bu2zSF1IPZTgO%2F9nnSIsEawlr1u%2FM07%2BrFLHLQhOTc9rKWRPE5nInADsTmEldmul9xB27SKftSUO4bSDGdXQg70%2BQXZYluBhQetN8EVKXUn2%2F8nhZyut%2FAxv%2BxaN6rQiTB2HT%2BnXLYUejKPQ2iT5ZSZAoAxtuGmwWqeXO3SC6qlgO%2Bz2pn5Qb8EPECoKs0tmmRs0AtW7roXvxkuovjV%2Fa5uuj%2BvykbhE%2BhQOfzWwl8ux6tJfPTlN6gc1JelO%2Bq%2BBrdwDnP85qjmb0Bs49%2BI3827kJqtewqp1glTxfsYx3BAhJn4BabjZajaznE7e8QkaU3RisDfbBGOFbvEbQzWDyePjRajvJf%2FrbjTg74cWhV%2FiXmy2dxs%2Bkyif7rrPFy0av6qIcDdHpy8hIUv%2BSxGhRyezphJszm%2BNqwiYpBtb%2FKYU3Zot1jCXGW5MwHs08Za41%2BMHmuobb5yY7zOrOVqsWxKw0UM1dB1AUwl1KPVSKD1wPWFv2bTb2r1Yq5tb%2F8RYA0XrsaSpyrrNNcOx79bFbArxZUDvt5YNvvOAz8mHl3cnRQlIXg0QuDnosA6Cz7%2BDx04T93BQSmUlJZxaeFqs5p7OcbljehDaLgaWS%2F429HTDl8vTCBjqkAdRzcrE3KLzbMMnr6hTXamixcIsvtqgAInVUcZEVh8IxPXedd%2Bzu7X0OBpQgXEfVWngW9oL9%2BO8y24BykMYS%2B6zo99WBfGquh9hzGt3j8dJ7UyOPBJoZhMKO22IyCbZhk8dEsApbEJronWOYQZ7sethuYEcYKtIz1k0TUanECeqONEsDDtlMDGJz5q9narUed7WRSLmbIluThIFQZByQtQnXuiS5&X-Amz-Signature=3f3fbb7e4c338f8d7f24f2c2d085ca44f339649ce531a2c284731cf9ae282c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662OY3IRF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCmDkM3GqgeAeLwhSGN6KKu%2B4dLv0VFE3XHA2NUW3t5YwIhAN%2Btdy2jVrPTZ1L3TCf8XcOssPFn2rFV4forgPqpwlNrKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZ4LOnuQZZmuGKtmkq3AONHtWTQJBk3O2izsHPRq%2F%2Bj0vJNrtZzm9j5SzLunkU3tGGJJZUx58XEwunTopU%2FnF3hCUVSjw3fEYEjTJJMJ0rDrS4nu%2FnydwV%2FugJUPMgyoUVtqvzAQrN3p%2BBBLmx64qrIwR5ze%2BohlCk2SdD14lPLjrBIgmPv5F3zcVHMZeuOvtURuePGPopu9MPpcZJ0k4ZsMU1LacqhPjMQadBLWbDRXcSzVxCUI9fJnoOXdJeqXO1U3cX2TVhjIgsMx6sDT3eHH1dfak8jhN00EAEGi0%2F3R5nvJg%2Fbw7hejpbskl2bQlc2chi%2FiPaEx3btZhQbqkjUt9%2BVgkjnnz7UtrpQRDYZYuYcjk3YrulrAUyD%2BbGkGSMb8fb4bFLxGvC2%2FT6b4LwBRcx6TLikAmnWTiwjpEQ06piuODZr%2FJw%2BI%2BnKGeU8azO5v6iZbmTxlPb1gJ9lS%2BvtKC3iIN6bN7KpQqSqLFhpXdcjCaebk6t2vRtFXN9qcvHhh%2BndngZMunWJBUhj1MJPOQENoewocVIPhAMmv7U1zqnUqlRagtmmqwHNRzKbrg2xpS8N23KLU7SONBCU2erUptby%2BF3UGbklgG9Hv%2FQez%2Fw6CtOHEXLFxULpHTF1SMn6e7iJlHKXIKijjCO8%2FTCBjqkAQYBSlRRCwr5WycdGo%2B%2BMgH0IGO0LZw7meu4gnXz6j4Jg3jvsgdKBCvDX8x6GGVMmnA%2Bfk7Noeu7aB%2FKJJsqCgy1YiD4bBqxxyNDz6CYBBd155xmSzMNf2weS5V2o0X7ZpOfuyFtNqqnqiB%2BWB7Xl%2FMV3%2B5uCKk%2FntAIsHyXoUZOqAE8JiRZPtb%2BigjkphqjBmdUDxMgaawShen7xTZhPGfut%2BAF&X-Amz-Signature=8869936948e924b3207105df750842697d76b13c12cebb3b36f7feb778c533c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVXLNEW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICtEhDi7s132LG2yfWS0X7Pwa%2FPgpiq3CwsPs51PZTTCAiEAppE39agetY0a8%2BAaojk6hJPdmSIBeRzCNB3AuaBy4hYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJZRrLYqYGx9CfLjzSrcAzcenL9mwHtSTJzaW2QzzT8v%2B8ALI2EBH9ilnbUdCEZe1ypKMZDx9kglX9kktilwXP%2Fv3hP1fb6uiuj933JuEj2EzESeFhhc1r6t9rxUrU4Yfx5K7kuv8JJGH%2B3P1vhyRyAzegiu1qBiUQXBfP89lF4j%2F4DMLAvHS9ySv4xMtDcHT80OfRw75CJX7UfQDDGMMp5XpaA%2FnX%2Fi1lFoYcFOqOlB1l2v05e0rjYlgsndzWrEp0IKUaJ0hW393C%2FnVcLy0kmh1EGyZL6Cb%2Bk6wNaMAShp7cc4VNsCsWiKHwWQtCuFAyk0oUhQqH2hBcM7b6urlCLzKKlrRHMra8h87nRO7SS8GMUXU5wf9prTzikIRLK66Z6Ko8Y5Gl6hFazquwJtiB2USiuZyAhdMKaRwweRgcKCh0YmjaKELJ%2FafiWJb0TQxZLKTvz5q1QB39BmElbGfEFmRQaQSVtXgyVWl8u1NkbqtL1Dj6Xt%2FUPi3e0hUglU%2FbAwJe8cqbg%2FdRx%2FB2Df72sxcbjSVWpcH1VQLHFMYQW4Zj5QssBy48bo0v8wv0rcVLhsdsr88p7%2BRGb7Rc9R4OfchsHUfhid4inKyITCaAdL8nm0xJTgA7DcYB%2BbLgDPYUGySjHMDsAHHRnXMOny9MIGOqUB3sy3wRHMsHzMpDM851JeSLyO6JT5QwoaXIi%2Fu8py7fMnbJsQZFJNhHdtHiQaB1ME%2FzipPBzBi9MXHRrirXZtdYufibMGXtpTp%2BBOez0pXZQt47EFIgUBZJ8gIEuakE1BR6rRN6KC6IGAo6QDDwoDzN4h0Nm7txPdcw1o%2Bz3ZE4xG%2BIkluG93GzUXfLeB6EWy78%2Br7tWozYzz1%2BqBrHGiuoY%2BqMT%2F&X-Amz-Signature=ba58257c03fc84a841d6967fb713afb7bde7b7912372958404b769a585c9e816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDR32C5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDUBUiWkpNf8ZxQaoUokzaHhcDgrN%2FWZ6tBwutvD6GHmgIhAMaQfoRNR8a8khnKoao2EOL2j0O%2B9RylBSpb2YR74VBnKv8DCF0QABoMNjM3NDIzMTgzODA1IgyY3CCvdpVPqegD580q3AOEw108yD009LLs60S%2Bu2zSF1IPZTgO%2F9nnSIsEawlr1u%2FM07%2BrFLHLQhOTc9rKWRPE5nInADsTmEldmul9xB27SKftSUO4bSDGdXQg70%2BQXZYluBhQetN8EVKXUn2%2F8nhZyut%2FAxv%2BxaN6rQiTB2HT%2BnXLYUejKPQ2iT5ZSZAoAxtuGmwWqeXO3SC6qlgO%2Bz2pn5Qb8EPECoKs0tmmRs0AtW7roXvxkuovjV%2Fa5uuj%2BvykbhE%2BhQOfzWwl8ux6tJfPTlN6gc1JelO%2Bq%2BBrdwDnP85qjmb0Bs49%2BI3827kJqtewqp1glTxfsYx3BAhJn4BabjZajaznE7e8QkaU3RisDfbBGOFbvEbQzWDyePjRajvJf%2FrbjTg74cWhV%2FiXmy2dxs%2Bkyif7rrPFy0av6qIcDdHpy8hIUv%2BSxGhRyezphJszm%2BNqwiYpBtb%2FKYU3Zot1jCXGW5MwHs08Za41%2BMHmuobb5yY7zOrOVqsWxKw0UM1dB1AUwl1KPVSKD1wPWFv2bTb2r1Yq5tb%2F8RYA0XrsaSpyrrNNcOx79bFbArxZUDvt5YNvvOAz8mHl3cnRQlIXg0QuDnosA6Cz7%2BDx04T93BQSmUlJZxaeFqs5p7OcbljehDaLgaWS%2F429HTDl8vTCBjqkAdRzcrE3KLzbMMnr6hTXamixcIsvtqgAInVUcZEVh8IxPXedd%2Bzu7X0OBpQgXEfVWngW9oL9%2BO8y24BykMYS%2B6zo99WBfGquh9hzGt3j8dJ7UyOPBJoZhMKO22IyCbZhk8dEsApbEJronWOYQZ7sethuYEcYKtIz1k0TUanECeqONEsDDtlMDGJz5q9narUed7WRSLmbIluThIFQZByQtQnXuiS5&X-Amz-Signature=15114490049cf0b5bbf7a3d99d8d9575ff787528b44ad6e59ca8518cf47fb296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
