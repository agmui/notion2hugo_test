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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG3QRYU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGE8PJ2Zug85oEBA6JiEARdaaV6Oaz0Mdo5TKuZdTvQIhAP8MC3VCv3TQ50CAqzPZmm4IfT6BzABIZb5Fy9ovytojKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEaX38jJyds32LOOkq3AOF2FXwdVX1qVjsNSmCSsdZtaJ7IU7%2FJSLMDHXUXFbajNoTc8Nvs5MKoENoeLe0mLDVW4uuQyca0a60%2BV2AMEqPgJqJF2m6Wfcuh%2BaT4utb8kEt5MFWr6Hpk4v8Cyvlb94ReDBT7Un%2ByhrhoCna2kj8%2BG9utUBv5lmQrcCDXS8QKVF0MLUDX97lK9zxWLJ9hwFXlbNTPtd4VJFh9azk4ODrheAknI2Kb8oEmIEI%2Ft7C5v02plboRkxupTbIFk7eQsugvXDBEuFSURxEQ7n%2FioFKmQeXmNUfRDqqv9z5M8nObE9pnKzGfysuiBk5AcX527NsfsUrma4jVzlnrYF5TdBL1R3yjeS90BeB9zfSNM1f5zfRNnUwj1jw49tQnTa1PQNmRBngIYAqpev4bsdS%2B4wP46VUlvScfszUxMRe3XoW8O2xnEWoUr3wFeeTAcyKTZ8wPRd7ygS5hvNlRr2tmOVgqonlTiX2cvGKwy1Y5FeSB24sLgRL9535fgVedOXACpq5ZX1r8TeQKmYNblrv0g9Pk1pE8MKrpa45aK77xarnGBPqkQhO6YSHIAJ6G%2BGzHdkRAjvpvihX3khvApGNyizf52s7sMKdrj%2Fjq36h7%2Bmb5mCHEWijUMHA743z5zCriKvBBjqkAXpPSDEX1H4dlDtd%2BgOD%2F1OtYWuWY3Jnnf4uJZvjFS98iZpdt7AeMVdl7r95%2FYz0Ww9AF%2F9pFP0PpHnpftQOK4a5DZxO%2FzgcbTlIemxonu0NdcZzMcu0jqFsj0ccUyRuxvvN42l1l8LA7lqVasX1qTVHG3z9%2BD5Om4uCbhGWIdRYqoDCHyMxtgDVlZk9gtoPFbM0GD52DEimnYPDQ0zG4iilQ3JN&X-Amz-Signature=4e897307dc80435193165502be8e6c7381301206f46cf140f812d1e7b4fe0466&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG3QRYU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGE8PJ2Zug85oEBA6JiEARdaaV6Oaz0Mdo5TKuZdTvQIhAP8MC3VCv3TQ50CAqzPZmm4IfT6BzABIZb5Fy9ovytojKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEaX38jJyds32LOOkq3AOF2FXwdVX1qVjsNSmCSsdZtaJ7IU7%2FJSLMDHXUXFbajNoTc8Nvs5MKoENoeLe0mLDVW4uuQyca0a60%2BV2AMEqPgJqJF2m6Wfcuh%2BaT4utb8kEt5MFWr6Hpk4v8Cyvlb94ReDBT7Un%2ByhrhoCna2kj8%2BG9utUBv5lmQrcCDXS8QKVF0MLUDX97lK9zxWLJ9hwFXlbNTPtd4VJFh9azk4ODrheAknI2Kb8oEmIEI%2Ft7C5v02plboRkxupTbIFk7eQsugvXDBEuFSURxEQ7n%2FioFKmQeXmNUfRDqqv9z5M8nObE9pnKzGfysuiBk5AcX527NsfsUrma4jVzlnrYF5TdBL1R3yjeS90BeB9zfSNM1f5zfRNnUwj1jw49tQnTa1PQNmRBngIYAqpev4bsdS%2B4wP46VUlvScfszUxMRe3XoW8O2xnEWoUr3wFeeTAcyKTZ8wPRd7ygS5hvNlRr2tmOVgqonlTiX2cvGKwy1Y5FeSB24sLgRL9535fgVedOXACpq5ZX1r8TeQKmYNblrv0g9Pk1pE8MKrpa45aK77xarnGBPqkQhO6YSHIAJ6G%2BGzHdkRAjvpvihX3khvApGNyizf52s7sMKdrj%2Fjq36h7%2Bmb5mCHEWijUMHA743z5zCriKvBBjqkAXpPSDEX1H4dlDtd%2BgOD%2F1OtYWuWY3Jnnf4uJZvjFS98iZpdt7AeMVdl7r95%2FYz0Ww9AF%2F9pFP0PpHnpftQOK4a5DZxO%2FzgcbTlIemxonu0NdcZzMcu0jqFsj0ccUyRuxvvN42l1l8LA7lqVasX1qTVHG3z9%2BD5Om4uCbhGWIdRYqoDCHyMxtgDVlZk9gtoPFbM0GD52DEimnYPDQ0zG4iilQ3JN&X-Amz-Signature=cec2e65f70b505694be0657627642d9cb30c534982e47587404a7debefdf7fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG3QRYU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGE8PJ2Zug85oEBA6JiEARdaaV6Oaz0Mdo5TKuZdTvQIhAP8MC3VCv3TQ50CAqzPZmm4IfT6BzABIZb5Fy9ovytojKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEaX38jJyds32LOOkq3AOF2FXwdVX1qVjsNSmCSsdZtaJ7IU7%2FJSLMDHXUXFbajNoTc8Nvs5MKoENoeLe0mLDVW4uuQyca0a60%2BV2AMEqPgJqJF2m6Wfcuh%2BaT4utb8kEt5MFWr6Hpk4v8Cyvlb94ReDBT7Un%2ByhrhoCna2kj8%2BG9utUBv5lmQrcCDXS8QKVF0MLUDX97lK9zxWLJ9hwFXlbNTPtd4VJFh9azk4ODrheAknI2Kb8oEmIEI%2Ft7C5v02plboRkxupTbIFk7eQsugvXDBEuFSURxEQ7n%2FioFKmQeXmNUfRDqqv9z5M8nObE9pnKzGfysuiBk5AcX527NsfsUrma4jVzlnrYF5TdBL1R3yjeS90BeB9zfSNM1f5zfRNnUwj1jw49tQnTa1PQNmRBngIYAqpev4bsdS%2B4wP46VUlvScfszUxMRe3XoW8O2xnEWoUr3wFeeTAcyKTZ8wPRd7ygS5hvNlRr2tmOVgqonlTiX2cvGKwy1Y5FeSB24sLgRL9535fgVedOXACpq5ZX1r8TeQKmYNblrv0g9Pk1pE8MKrpa45aK77xarnGBPqkQhO6YSHIAJ6G%2BGzHdkRAjvpvihX3khvApGNyizf52s7sMKdrj%2Fjq36h7%2Bmb5mCHEWijUMHA743z5zCriKvBBjqkAXpPSDEX1H4dlDtd%2BgOD%2F1OtYWuWY3Jnnf4uJZvjFS98iZpdt7AeMVdl7r95%2FYz0Ww9AF%2F9pFP0PpHnpftQOK4a5DZxO%2FzgcbTlIemxonu0NdcZzMcu0jqFsj0ccUyRuxvvN42l1l8LA7lqVasX1qTVHG3z9%2BD5Om4uCbhGWIdRYqoDCHyMxtgDVlZk9gtoPFbM0GD52DEimnYPDQ0zG4iilQ3JN&X-Amz-Signature=21b99e97f5dd829662b92ad4780a2880225a04a418d756dac452e7f799a222aa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDA3KVLR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENoICB8L0Yr9JY6FF%2FdYrPSiTdgZZoxFT88sizllqZVAiEAvZkZ11UOBcfxrdotF0sXA%2B9AsmR7wHKCdhhD1W7xN04qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVxgy%2F1nesnyN3veCrcAxe5AD0Od912Vv0CoKbYTQzEjavM2KRuBqs1lNsZpEUBO0eWdZkbmqSbcSS8HBnSu7OuMu%2FRCvGpG4G8m4BfAzIDziElSiDoXOKMEOP79f%2Bwu%2BBMByG1JFPoV6XRyp8l1FEwBRqJDv%2FeWRckjCBNb68Dt7vxdn%2BUZa9C8KuLLAD2tFDxhNdFzPhfJeWxa2UHhy6wn7NB8UQpO24N9hoG%2BDO6NpQaPJ3tShPoCO3Ket9sD0SmUmE7XIn3XHS0%2BEEHOv9fNveoLjltNXTa3NuzNvfuoGDQuqxBkSN4wMSVkDeWs%2B%2B5%2FCENe0fTUqN7oNsmbNe1zERmFGZwZ1Qa4ZvPVqwYM0Cpg05x%2BM04PUehBr3zWcJ68PeS3STc4NX44HsGE5mZRZmVpfRTWscatino1spvuUxCsZzMv1c1YFQRnw6PK%2F42LsXtkUod4OVNhXQWeQp2QXoMMvkZsG3DPM1i3uZB705C8FMh44rp0VKhtZQ9hRM0pXCrU5uBNgu1AXGrqNn5gR9LF87pvM5aHIVDGLS3GIKofBOnLq7QTliijZcz5OWA%2FdcMTOpld6%2F6g4JHNM2DxDLgkpSmMUIDdlr%2FB1PA4eaDFa1wJlN5ktqO2WLd6rZJRDai4SZMDh3RMKuIq8EGOqUBBA3ddo6LIbl5vtgbZ1kC%2Bn2m%2BgFNj234bMpLQlXff4XXweqdyNL4YicT5Rpxc%2F6EPzzigz6lviyGNVI43so%2FS3kvtei00g9uMoRFozicVvEVwCRMibKYddBICRZ6KQUv0DYvdoYD1kH9apbzLi3YRfOJbW8%2Bg%2FFnKuy6O2shdbT8rwiYswyhkqEkXwvSpbMJBPmytS8hcYavCiBvGcAxGncNT6jd&X-Amz-Signature=2b58599dfb795533f2f49d33ad43c9da15c1c5345ea2ee831b158bd08de72d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3TCSHZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiVak4cGPajsSf2k6FHtaO3Z2q93AU1AFSNVz0ogs%2B%2BAiEApazaIg962OL%2FjXM2KjWqboWBOZdaMz37IGghd2HNelUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5yjK8TrMsMs5CrQircA%2FOUSodoWIjvElSvjFE6u0kBWENM3293BPECKW8OwkFTZaftQO5mzT7Zrmugb5nZRHSIz3HFeZxA4ch3%2Betbuji9poXNcmYSNodOkzlYGncTiaS7tKfZz3Bf5xPmiBkaySF8m0lRFwgX%2BvCe6YkvaF3ZBnZ9TYXa%2Bp%2BLgrLFYpmwqOicgArOPxh%2BKNXLJ5EIjlOx2bi4bxIHqS%2FI8ceRVOhKZcp7jLK2UqcV3vseCt2JBarlKMvZq4FBLMLcefNQYup6udZ34hjM72Upb4Hod%2BeP2ZpTf15nk5IPMsR%2FlCPWl794OwF8%2B0Z%2Fv1x2Dnk2BLdB3mzVLa2tDGYOfIdTZjrFiqaP35epbBZ7SMh0xbV0XXQhdjksZMJ33gYXIcdOurVFuoNDCrc2Xejjh2usBos3yLNZj73OWim328%2FQg2mz2KoIZZat1KWDNj%2BBnFQTzjW2d2hxkRBsuOSuyCx5eFsTG4bYfMbiHeKWU1VKG%2Fv77ilIShuBF3XTHwk%2B0JR4f39h50Nr2gHrKmfefcGjmTJDXrNbq9odOvYBLRNkvKv2Kx9%2FapzHuXjrkVe%2B5ugFhM7ckMaaZTl5rvfAHPGGdT%2FJsMYCsh1MPUVePpq6BSbkyCy5PZcgiXgxrnjeMOmIq8EGOqUB33QSxCdQJHWRkzl5V%2F0NuoGqoHEJtBw3NN9fps9Pca5xkMu7Sr4zUFb88ECYX%2BGSeOlmzPJDDxgqag5UP7gjC8wp33WRPOncsU5WQGS75H7mJEwMXXmCm%2Fcfaief3zpzkTiQlhq7Pr0dfXxIs3ze3yCxmMYEjDnAz%2Bypyn9%2BjFF1VNYLNvV0K6HlTbVwj7JAi9HBCZKDCgBC4CYcf8aiNu7JrDin&X-Amz-Signature=f8124fef1dff5d4f68057743664d57462ba9aefc47301522b3f4425e78080843&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG3QRYU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGE8PJ2Zug85oEBA6JiEARdaaV6Oaz0Mdo5TKuZdTvQIhAP8MC3VCv3TQ50CAqzPZmm4IfT6BzABIZb5Fy9ovytojKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEaX38jJyds32LOOkq3AOF2FXwdVX1qVjsNSmCSsdZtaJ7IU7%2FJSLMDHXUXFbajNoTc8Nvs5MKoENoeLe0mLDVW4uuQyca0a60%2BV2AMEqPgJqJF2m6Wfcuh%2BaT4utb8kEt5MFWr6Hpk4v8Cyvlb94ReDBT7Un%2ByhrhoCna2kj8%2BG9utUBv5lmQrcCDXS8QKVF0MLUDX97lK9zxWLJ9hwFXlbNTPtd4VJFh9azk4ODrheAknI2Kb8oEmIEI%2Ft7C5v02plboRkxupTbIFk7eQsugvXDBEuFSURxEQ7n%2FioFKmQeXmNUfRDqqv9z5M8nObE9pnKzGfysuiBk5AcX527NsfsUrma4jVzlnrYF5TdBL1R3yjeS90BeB9zfSNM1f5zfRNnUwj1jw49tQnTa1PQNmRBngIYAqpev4bsdS%2B4wP46VUlvScfszUxMRe3XoW8O2xnEWoUr3wFeeTAcyKTZ8wPRd7ygS5hvNlRr2tmOVgqonlTiX2cvGKwy1Y5FeSB24sLgRL9535fgVedOXACpq5ZX1r8TeQKmYNblrv0g9Pk1pE8MKrpa45aK77xarnGBPqkQhO6YSHIAJ6G%2BGzHdkRAjvpvihX3khvApGNyizf52s7sMKdrj%2Fjq36h7%2Bmb5mCHEWijUMHA743z5zCriKvBBjqkAXpPSDEX1H4dlDtd%2BgOD%2F1OtYWuWY3Jnnf4uJZvjFS98iZpdt7AeMVdl7r95%2FYz0Ww9AF%2F9pFP0PpHnpftQOK4a5DZxO%2FzgcbTlIemxonu0NdcZzMcu0jqFsj0ccUyRuxvvN42l1l8LA7lqVasX1qTVHG3z9%2BD5Om4uCbhGWIdRYqoDCHyMxtgDVlZk9gtoPFbM0GD52DEimnYPDQ0zG4iilQ3JN&X-Amz-Signature=fac4caf690673d514f4fa65c3c03403d958765fe6a24e5b0f2ec781b3df0c97b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
