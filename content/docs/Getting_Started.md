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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DFLBH2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBxO6axUFGmtvaVv8JLzVTqH3bz%2FnSh9S4DY7yZ8y8kyAiEAqWessZubr184WDe7wZ06ZPMOUo6mAJ17IjqeHh5TYNAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcesUW40ozJiC%2BC%2ByrcA1m96vwnDesK1d4YX3YjBLHJ37WLfLjYSayTDweAJy%2FljvQ9D4QgivXINDNXROoegNc6NWEm93h15dR2nKZ0cf4x7bB3JvDZowpiX84PJhytSmtumv1O0JychubCNldLePdiv3QjY4sa7dceCuMdB0bdQjQiaHvYiJsJUom%2B4088F3JwYl82jSG%2FBRzyKTdf5vwqot67jhR0LXgoeazX6l%2FU8w5aG%2B3yVN063iuPYfosi6y0hXuNUFM2ktByh6jLwV52Mj%2FWXdglBOL44gEEPBYFPcUJeTSLSgLbSfSeCv5JiNuIrqWMcvbAt233B1lgdpfIsOiq4wTbTEDL%2Fa%2Bk%2Bw9lreXHZhFl7oUF0TCQoL%2Br4V37LuiyBlbSzgZF6DmNP1YLrysqGyM%2FQupJjTvU2Gizl2jbvDSIeHSEVwZv1uu9aYyS4VJh8a%2FbrGibbIwsPdRfGSgjI1Bbv37VidKHPMJ1RqVP715DoKTMOTcR%2BmHaK2%2FdZIuVzBODrwgC1eZfvlWHZK3nZntwatCeabXg35FErO%2FKG8d5TgLdk%2FWbPmbEWyo%2Boae5grzFYf9RyXi4iU%2F2OUD3Tt9y6cxNmpnKcj6O24rG37uojoYsWgtNqnZZO1JuOKpwUUYlUkHIMIXR2sQGOqUBAKEwDUMvvg0W230ev7UnujT%2F25Hu7lOl2HEvF08a865%2BXRECH7q6R6c%2FlxLFKI9cZyaJB0yR5lyoYDtRKy0xOl5rnQVToQSN9IbvYbtM75UfRUjzXSnHTHLd%2BtSbhXpPPhzM3jaQd6lwQ%2FyRyjqUcpvi%2BW5A7NgT7V3zigL5cqWgY%2Fj49jWn7rQ1fw2nEuXwpLAeLZgImskeBj1Y9FeCtMnO%2FxXI&X-Amz-Signature=bd833366bc34dc8e7e23ff9bb33cea5395ae94d14430e3ff39dc62118b5a4120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DFLBH2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBxO6axUFGmtvaVv8JLzVTqH3bz%2FnSh9S4DY7yZ8y8kyAiEAqWessZubr184WDe7wZ06ZPMOUo6mAJ17IjqeHh5TYNAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcesUW40ozJiC%2BC%2ByrcA1m96vwnDesK1d4YX3YjBLHJ37WLfLjYSayTDweAJy%2FljvQ9D4QgivXINDNXROoegNc6NWEm93h15dR2nKZ0cf4x7bB3JvDZowpiX84PJhytSmtumv1O0JychubCNldLePdiv3QjY4sa7dceCuMdB0bdQjQiaHvYiJsJUom%2B4088F3JwYl82jSG%2FBRzyKTdf5vwqot67jhR0LXgoeazX6l%2FU8w5aG%2B3yVN063iuPYfosi6y0hXuNUFM2ktByh6jLwV52Mj%2FWXdglBOL44gEEPBYFPcUJeTSLSgLbSfSeCv5JiNuIrqWMcvbAt233B1lgdpfIsOiq4wTbTEDL%2Fa%2Bk%2Bw9lreXHZhFl7oUF0TCQoL%2Br4V37LuiyBlbSzgZF6DmNP1YLrysqGyM%2FQupJjTvU2Gizl2jbvDSIeHSEVwZv1uu9aYyS4VJh8a%2FbrGibbIwsPdRfGSgjI1Bbv37VidKHPMJ1RqVP715DoKTMOTcR%2BmHaK2%2FdZIuVzBODrwgC1eZfvlWHZK3nZntwatCeabXg35FErO%2FKG8d5TgLdk%2FWbPmbEWyo%2Boae5grzFYf9RyXi4iU%2F2OUD3Tt9y6cxNmpnKcj6O24rG37uojoYsWgtNqnZZO1JuOKpwUUYlUkHIMIXR2sQGOqUBAKEwDUMvvg0W230ev7UnujT%2F25Hu7lOl2HEvF08a865%2BXRECH7q6R6c%2FlxLFKI9cZyaJB0yR5lyoYDtRKy0xOl5rnQVToQSN9IbvYbtM75UfRUjzXSnHTHLd%2BtSbhXpPPhzM3jaQd6lwQ%2FyRyjqUcpvi%2BW5A7NgT7V3zigL5cqWgY%2Fj49jWn7rQ1fw2nEuXwpLAeLZgImskeBj1Y9FeCtMnO%2FxXI&X-Amz-Signature=5ab3dc81754a6b19637c2f34234d5d61c04983c8276c33ccc362392dea81716d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DFLBH2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBxO6axUFGmtvaVv8JLzVTqH3bz%2FnSh9S4DY7yZ8y8kyAiEAqWessZubr184WDe7wZ06ZPMOUo6mAJ17IjqeHh5TYNAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcesUW40ozJiC%2BC%2ByrcA1m96vwnDesK1d4YX3YjBLHJ37WLfLjYSayTDweAJy%2FljvQ9D4QgivXINDNXROoegNc6NWEm93h15dR2nKZ0cf4x7bB3JvDZowpiX84PJhytSmtumv1O0JychubCNldLePdiv3QjY4sa7dceCuMdB0bdQjQiaHvYiJsJUom%2B4088F3JwYl82jSG%2FBRzyKTdf5vwqot67jhR0LXgoeazX6l%2FU8w5aG%2B3yVN063iuPYfosi6y0hXuNUFM2ktByh6jLwV52Mj%2FWXdglBOL44gEEPBYFPcUJeTSLSgLbSfSeCv5JiNuIrqWMcvbAt233B1lgdpfIsOiq4wTbTEDL%2Fa%2Bk%2Bw9lreXHZhFl7oUF0TCQoL%2Br4V37LuiyBlbSzgZF6DmNP1YLrysqGyM%2FQupJjTvU2Gizl2jbvDSIeHSEVwZv1uu9aYyS4VJh8a%2FbrGibbIwsPdRfGSgjI1Bbv37VidKHPMJ1RqVP715DoKTMOTcR%2BmHaK2%2FdZIuVzBODrwgC1eZfvlWHZK3nZntwatCeabXg35FErO%2FKG8d5TgLdk%2FWbPmbEWyo%2Boae5grzFYf9RyXi4iU%2F2OUD3Tt9y6cxNmpnKcj6O24rG37uojoYsWgtNqnZZO1JuOKpwUUYlUkHIMIXR2sQGOqUBAKEwDUMvvg0W230ev7UnujT%2F25Hu7lOl2HEvF08a865%2BXRECH7q6R6c%2FlxLFKI9cZyaJB0yR5lyoYDtRKy0xOl5rnQVToQSN9IbvYbtM75UfRUjzXSnHTHLd%2BtSbhXpPPhzM3jaQd6lwQ%2FyRyjqUcpvi%2BW5A7NgT7V3zigL5cqWgY%2Fj49jWn7rQ1fw2nEuXwpLAeLZgImskeBj1Y9FeCtMnO%2FxXI&X-Amz-Signature=905c9a58d9cab17f1c8fdc60c1820edafadbca3a738139e517e2b801c5b4aa81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOHJZMW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC2%2BjxtC7PC29x3CtLTz4PMPTCy6hbfTMubzcoEonjpXwIgJ8bMKFr6SYSeJib%2BVq9l21gd5ba5vmlbPUDSaQ9ptkkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrJL6YD%2F7byYAoOiCrcA3yCNrDhmWUn2zr8QyO%2FVywShCX1e8BlEMEUcynBub%2BzQrEHpKPmzm1ohh5LzwJ%2B7owI40UwfS9duG6qaI6RVnsoSSwDR7DpmLomjFuH1EiORjWDMIekZfwph%2BtxeeodksFJBDxXRWOruQrhAtjxm5Wt6ezD7fN4lYxAaEHeX444pUSJssoj7Q3n4jglujlYjiPUmtwOnx9Ta%2FVlwQWKMwFNFsTwLGgZcl6kejvUuES%2B7iZXzcW3iekH6LPF7o4E7b34pROeV7KH8Ad%2BlEXvz%2Fy81lK2fowXV0Fq5Lbv%2BDreAQlqR5exH4MkRmzv17JFIYVtKZTvQiFxjpIj84V78hB0HpRrVxVbNuK6C0HZ0c9h7fWXd2R02ebSCPN1JfcRQPSawQ7lq6DJEylKm%2Fy8l02VX%2BNxMl%2Ff3YQjQgEEC4D1m%2Fh5MnbVgarWhTXvJP63yTWPR62fjxeQNGI7gHFbgSXaRHGkfcrTfLkpzkIrM2PbQogjUjy35vTpXqmK0maACam8C0HlaIYXTt7FxiBoQdh1Sh53v%2BbjTHaUHHFyEzCbh4geZNNorhcB%2BU%2Fg5LCkt71YALp%2BdCvvr2orSfYeVkiebrHaECLRAJDkD574eWHxPGJDMmcSiN0pCh6gMNrQ2sQGOqUB%2FSr27aOGNAHFQxHSDSggHWu8a8ta%2F%2F2mp%2FyLlLziXdZUdS%2FXC%2B5aWzNh8MlC%2B%2BTy%2F3IMWRN7Vo2KkiISMdBdpiUzb2CumjgenrbdAMgT1iBTdEnQYYVuQrhaeMsrE%2F8vt%2FJuUyDI%2B2qD4rolSy%2BxvwjPSDHGf1TUsZiWn0M0GVLVoUtze29Q0vancygYpvFec1ngTrFl2SZu4mT6HoIXP4vhUesp&X-Amz-Signature=b145a948ae921a9f6071f41bb2c38d5ffd23feb6dc3860b66bc4a0c3ebc123f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4FD6LG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDaMahPa%2BUCMhnU1x8u3lU9f5NVxyPiFoqBGRY8LJDVOwIgMiUu674JdnGvUw41eyu%2BGeArKGF%2BjtHBTaJVuXBVm2IqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJM%2FV4PRAPkdgdjAyrcAx2DcFrGEyOqlQFT%2Bg4Rm%2FPDcP2%2F7um9uGzfsUi0Hy2WZsDmVtPfrBL0yfmlRzWJGV%2BLUomKnlOVp%2Fh8OdhT5fWuER1SwOXmFDMoIhviemGbHLbeeOAZIHF7qnXJN9zav6NHhHRv4x9L8G3hjFXtxKFTmGa8zWGI1sZoGbQAPQPmKio911LAz7O4LG2kwEsV8ge7bOhbgJv7VBkDMjvEMAzsdtdzvyrjjsdm06kNfw4idPpAjA4mQ7WE9P%2BFzBW70KDaMW%2Fa6CrjhhpkQzWJxCUsjEt3h2qwLxzOvxIpFuyG1uFc5x3Jjo9RShXkALV4NzZ03TQSEVal8jJy54ZbrQp0OZ0mlJp9E8cQ7jyk1PWx7jyLbvMkTLxo8B0i1nAFGulYW%2BVCHXq7Irca5iar1BvUVyb9baMFTabZ0VW%2BlXyLeNZHevlAxwf60voeuXDeazKd%2BmACGsj9a0ly4gpKGZ%2FHb%2BE0EB5%2FuzQV%2BMvxQ5f1ppUiJ6o2UMNgPBsxYOMoresshfGw0TK5W4z7eNa%2FXm88Imf%2F0%2FJX8wu4QHaYTWuEgIV27qPYxLtQS3WVnoH7iB50j%2FZb%2F1uE6YY8qYXIj14uiknwU24b1x9J%2FC9%2FB6szdHpaz07hRIEuOEiWMOzQ2sQGOqUByhOVxs5oMJHlezN1IeGXXY%2Fp1w5lJoWivMTL3F%2FLd1oSYMQUutjDdBt1sS%2BiRnQgkCLw2covPsNJlwE5XdkF3zRxSAfq8xdTVq5dOnx0JrC9D3UNTk7bLO%2BHlNMLDyRRk0WuLzbWRhJlNP7%2FTAPoBYELaBFH8XrWzmr6vuZUUCT9pOGfj%2Fx28GKAPHI1dSaJO4lsVBDXORvLSQveycVTlJzwOlpK&X-Amz-Signature=593df5107e4b9dc67ff25bbf632bcb66cca91708c6996817c3c30320d0e8b771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DFLBH2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBxO6axUFGmtvaVv8JLzVTqH3bz%2FnSh9S4DY7yZ8y8kyAiEAqWessZubr184WDe7wZ06ZPMOUo6mAJ17IjqeHh5TYNAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcesUW40ozJiC%2BC%2ByrcA1m96vwnDesK1d4YX3YjBLHJ37WLfLjYSayTDweAJy%2FljvQ9D4QgivXINDNXROoegNc6NWEm93h15dR2nKZ0cf4x7bB3JvDZowpiX84PJhytSmtumv1O0JychubCNldLePdiv3QjY4sa7dceCuMdB0bdQjQiaHvYiJsJUom%2B4088F3JwYl82jSG%2FBRzyKTdf5vwqot67jhR0LXgoeazX6l%2FU8w5aG%2B3yVN063iuPYfosi6y0hXuNUFM2ktByh6jLwV52Mj%2FWXdglBOL44gEEPBYFPcUJeTSLSgLbSfSeCv5JiNuIrqWMcvbAt233B1lgdpfIsOiq4wTbTEDL%2Fa%2Bk%2Bw9lreXHZhFl7oUF0TCQoL%2Br4V37LuiyBlbSzgZF6DmNP1YLrysqGyM%2FQupJjTvU2Gizl2jbvDSIeHSEVwZv1uu9aYyS4VJh8a%2FbrGibbIwsPdRfGSgjI1Bbv37VidKHPMJ1RqVP715DoKTMOTcR%2BmHaK2%2FdZIuVzBODrwgC1eZfvlWHZK3nZntwatCeabXg35FErO%2FKG8d5TgLdk%2FWbPmbEWyo%2Boae5grzFYf9RyXi4iU%2F2OUD3Tt9y6cxNmpnKcj6O24rG37uojoYsWgtNqnZZO1JuOKpwUUYlUkHIMIXR2sQGOqUBAKEwDUMvvg0W230ev7UnujT%2F25Hu7lOl2HEvF08a865%2BXRECH7q6R6c%2FlxLFKI9cZyaJB0yR5lyoYDtRKy0xOl5rnQVToQSN9IbvYbtM75UfRUjzXSnHTHLd%2BtSbhXpPPhzM3jaQd6lwQ%2FyRyjqUcpvi%2BW5A7NgT7V3zigL5cqWgY%2Fj49jWn7rQ1fw2nEuXwpLAeLZgImskeBj1Y9FeCtMnO%2FxXI&X-Amz-Signature=53dbb23749f1a81bbaf2ddf3eda8af829e7082bbc086b8a7bc66d9208b5ad42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
