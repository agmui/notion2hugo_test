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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTS4MER%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC50Z13tVB8j9p5xEM2smHwJ8NamW4970mxOPMjFU3V%2BAiEA4Ot9ta4GB1TThW76hOW3alsRp%2FjcBOSoyJ%2F5HYn8p7wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOExoYd7d81bbT8PCrcA50YYkkOXkXPHLNdL7XyFxGRmhSj8NpbE6gz1aD2u7DzBTOtbVew42FoE3RT%2FX90nX%2FK7NVUTXlDDPh91GUaAo4aWNJYI%2BOJg32VcVoWX%2B85DFDzakBgGbfOhsDWgNbQ%2FoEMjKY0OagqerSkcvfdgWfQiahy2c%2FJ0HT3H8uMUsdX5dAEMwiLC9rbEpeCtNu3BMRRPWwMMvGPDdacnUoHwQc1XpHQgeGRdWEzg70NGmswSzazUIhN4dGM5refRffUByPvnnP0x34exrZLACyLUV2DVnqf6Cts4vo%2FjbDBOpF1FvTxBVARSZ6YP56r35sqiBFST0RxyP0lBtup1EfVp%2B%2BVj3UhkZu0DXj7YBypTrplftYkPz6wAoHrrHy66rayoLyRhrxZec3MLgPXZEh%2F70ZUSOasRw8gY4efvQRIN%2Br70utIRs%2Bu7PDEtWBwhF%2Bjtho%2Fxj6o29cD%2BwrKkPlnir6miQtXUBWPUpBnovXYcAq1GVzCGJltivQYpNwRGT39V5QJ17Frdi6nXHvoTWwRbyqhNbs3Zl4HFLfVEVgr%2BX5Sa4a%2FgkzJ1zwNIF0fQjq4vY1XIin4WW9k%2BPEwPaml5rbiKd99J%2B0av7cs2S0MarXmu8EnTdVf6D5qFhQxMKPO0cIGOqUBAwfWJvRjnTPn7Le50oHgFy2lOzkrwaeqspNWtO%2FgM2PzLWPgj17kS%2BEoEA8AcwnqZRZzvlRSlywJHUX2Q4mJHNqjDvDjrBoBQU1oRqatrPB0WfM5TIne2RRldenzSFZ1wn2U2%2BxkuWMeMAeA7c4JGKBAur0K%2FeeBTiPrVy7OOll5Qj5bdAgpR5rqkx2UoqKPf8zn6dp9J5iT8FCG8LE3uDU3Lo7Q&X-Amz-Signature=1baa965b345a65de51be93c478a65d4cb133d4d8aa3303161e2b5f2662a98cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTS4MER%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC50Z13tVB8j9p5xEM2smHwJ8NamW4970mxOPMjFU3V%2BAiEA4Ot9ta4GB1TThW76hOW3alsRp%2FjcBOSoyJ%2F5HYn8p7wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOExoYd7d81bbT8PCrcA50YYkkOXkXPHLNdL7XyFxGRmhSj8NpbE6gz1aD2u7DzBTOtbVew42FoE3RT%2FX90nX%2FK7NVUTXlDDPh91GUaAo4aWNJYI%2BOJg32VcVoWX%2B85DFDzakBgGbfOhsDWgNbQ%2FoEMjKY0OagqerSkcvfdgWfQiahy2c%2FJ0HT3H8uMUsdX5dAEMwiLC9rbEpeCtNu3BMRRPWwMMvGPDdacnUoHwQc1XpHQgeGRdWEzg70NGmswSzazUIhN4dGM5refRffUByPvnnP0x34exrZLACyLUV2DVnqf6Cts4vo%2FjbDBOpF1FvTxBVARSZ6YP56r35sqiBFST0RxyP0lBtup1EfVp%2B%2BVj3UhkZu0DXj7YBypTrplftYkPz6wAoHrrHy66rayoLyRhrxZec3MLgPXZEh%2F70ZUSOasRw8gY4efvQRIN%2Br70utIRs%2Bu7PDEtWBwhF%2Bjtho%2Fxj6o29cD%2BwrKkPlnir6miQtXUBWPUpBnovXYcAq1GVzCGJltivQYpNwRGT39V5QJ17Frdi6nXHvoTWwRbyqhNbs3Zl4HFLfVEVgr%2BX5Sa4a%2FgkzJ1zwNIF0fQjq4vY1XIin4WW9k%2BPEwPaml5rbiKd99J%2B0av7cs2S0MarXmu8EnTdVf6D5qFhQxMKPO0cIGOqUBAwfWJvRjnTPn7Le50oHgFy2lOzkrwaeqspNWtO%2FgM2PzLWPgj17kS%2BEoEA8AcwnqZRZzvlRSlywJHUX2Q4mJHNqjDvDjrBoBQU1oRqatrPB0WfM5TIne2RRldenzSFZ1wn2U2%2BxkuWMeMAeA7c4JGKBAur0K%2FeeBTiPrVy7OOll5Qj5bdAgpR5rqkx2UoqKPf8zn6dp9J5iT8FCG8LE3uDU3Lo7Q&X-Amz-Signature=62c91576552a3d191184ed4ac29064f2769fa8c54620ac294d6502c74bf8816c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTS4MER%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC50Z13tVB8j9p5xEM2smHwJ8NamW4970mxOPMjFU3V%2BAiEA4Ot9ta4GB1TThW76hOW3alsRp%2FjcBOSoyJ%2F5HYn8p7wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOExoYd7d81bbT8PCrcA50YYkkOXkXPHLNdL7XyFxGRmhSj8NpbE6gz1aD2u7DzBTOtbVew42FoE3RT%2FX90nX%2FK7NVUTXlDDPh91GUaAo4aWNJYI%2BOJg32VcVoWX%2B85DFDzakBgGbfOhsDWgNbQ%2FoEMjKY0OagqerSkcvfdgWfQiahy2c%2FJ0HT3H8uMUsdX5dAEMwiLC9rbEpeCtNu3BMRRPWwMMvGPDdacnUoHwQc1XpHQgeGRdWEzg70NGmswSzazUIhN4dGM5refRffUByPvnnP0x34exrZLACyLUV2DVnqf6Cts4vo%2FjbDBOpF1FvTxBVARSZ6YP56r35sqiBFST0RxyP0lBtup1EfVp%2B%2BVj3UhkZu0DXj7YBypTrplftYkPz6wAoHrrHy66rayoLyRhrxZec3MLgPXZEh%2F70ZUSOasRw8gY4efvQRIN%2Br70utIRs%2Bu7PDEtWBwhF%2Bjtho%2Fxj6o29cD%2BwrKkPlnir6miQtXUBWPUpBnovXYcAq1GVzCGJltivQYpNwRGT39V5QJ17Frdi6nXHvoTWwRbyqhNbs3Zl4HFLfVEVgr%2BX5Sa4a%2FgkzJ1zwNIF0fQjq4vY1XIin4WW9k%2BPEwPaml5rbiKd99J%2B0av7cs2S0MarXmu8EnTdVf6D5qFhQxMKPO0cIGOqUBAwfWJvRjnTPn7Le50oHgFy2lOzkrwaeqspNWtO%2FgM2PzLWPgj17kS%2BEoEA8AcwnqZRZzvlRSlywJHUX2Q4mJHNqjDvDjrBoBQU1oRqatrPB0WfM5TIne2RRldenzSFZ1wn2U2%2BxkuWMeMAeA7c4JGKBAur0K%2FeeBTiPrVy7OOll5Qj5bdAgpR5rqkx2UoqKPf8zn6dp9J5iT8FCG8LE3uDU3Lo7Q&X-Amz-Signature=4d62960f25299463d7d244a898f1c74c33c816e66a74ae04088c6e5eeabe5ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H4AE64D%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYQZkKMk9KKLyB4N0skefYXH3cU32SmOcbQYMR6XEXUAiEA%2FUpQRNjxGjszod4bkT9%2FbykulRVXfXaf9GYNZImtRoIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRM9iBUR8WNLEeusCrcA7%2BQcT0IpKSB8%2FFzEU6mDE7WvSVL64NXjsLlfPJrA7%2B3wSe2r2ZQb99HvFogovVhne8jJU3zLSf4LxDOiZ2U0tri3ZxwJuoeEDO%2Fb3Hb4CCrO53TWJbbnVDgwL2dGQmmjur6j9diYN7ceL2%2FNmCUkA5q0kMRXHkvADkAy4B5lGi1vg9NuQ2CtBjtVn5IDsj79u1jteXj27aUK564u0vVkgkc0AQ2BNHH5FbaWiYZTOofXAWKT6Z9AEmDI1zODFesdQJjDiGkT4UmYpF88ih7%2FHudEKjs6sm4m%2B%2Fw4el55PaWLKlsfi%2BWZUBGIIOcXgUbZXYmEIDlmZ3LFshA21%2Bt3wrfzMDjaKjQTFHD4%2FtM9YIrsVrigPbJJnmVFYBtpkNBbz5XE4JHFJZQOFB62BTcrOpb7k0uxJI4TKRRdZMWBjcpiNEiPTNS5wfpJ428%2F4Y1C0BpNHhXiwLQ1QWizOx4A14ObEhMYumS1oBYzVTA4sryB3lbr1GvDtRy6V1gE9zRYA3rVXD%2BHpJDzNzX2MrIo4Q9CxnnVp%2Fg6dBFULHc8NyARyHKSWuaklmak7ptqwEm4UieDCM%2FGxlaQHJjfNx3EEefbhSYdQDB6y0%2FSVh2hB8P6ToXJUoB1PekJgLoMPe10cIGOqUBXv54jcmnbkEhC24iw5BDB6J34neL4QlODJWqIo75ofTQOluS0ei4wwe7CLpNKyxcEq1kcp6FaNRr6CFllxgtPsPRR4%2B0l%2FF%2F4%2F8BAZIVk5cIVvbpyOZRXZNhvLw4xuj5UNvReKrxV%2FEnmiuubRAan6UnJzXmWYdUzPcivB7dBlUUtcX9bS%2BogQr6Gnoo4rVjagBDX4eHmO%2F%2BgEj9MMrqp82j9DE2&X-Amz-Signature=4eb7c81af9902937916605c30706e33ca2e5bc1741c69a98f7d0089375bb0d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBIUIAUY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUSgfR0mt3ikfzfL4nM3oj%2FjtT7tL8%2FTMq60C%2BZx32kQIhAOjSa1vGGe9FL%2FrS088VEgKy6oozvlh%2FQBE9IOSM5rgWKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK92llELQkQ4QrqbIq3AN2AX%2F3EU339wOMf52ETM4g7dii1%2FuLbkVXxuu6Eb%2FbeFg8n%2FtdhHDCpB7dHUxyHcGVzqgLgCis1vu77MjqLUCmBPruVK3JBr8XmH4x90gNpOQEOADVg0dmdROB2yGn95imJjiX3Do3RTe9G8Hm%2FRElrBwmAK%2B2By%2BN5zX1D3q%2BRT0WskDli62mZMml5h2pq98mQZ8OwBhKd%2FnJL2mndO8Ry5d6A4bp%2BwXin96Wr4p%2B6d%2Fo05EeUlLn2FcpTS38%2BNYpDyj1aiddA5C%2Fzui9op4yvWLBb8Bvs1XWCRmZZvhj5LJfiOu12KxAaU%2Fjf3UWu7vuza56hem1eG07SoMSDK4Hetzf2mUc0VnQEzQRw4htw1IRTT6GL047H%2B%2BWhgQ%2Ftdh6mnkGylTX1WFpNpte2BtvxV%2FImQmQM2iJIe5d4qzsGqI%2FC1a3b3MzYEDgFPARRQvk3xV4XM%2By3ciXJqBPXYTgMnmWUdlbf3gGNwpDLN%2FuBQNzJYEWDAjxDoggR55gkhz6DLRp2r8PQSyOFyMT7z0fl%2BPS69c7ajMMsG3kzNENDV2Sa%2BcTMUZ1NVpR4vaAOspqOpCHCkc30wwD642SbEycgLOJmjPs%2BB1UIIzhWsACjGTjlwBKyqNUKZVr%2FDDWtdHCBjqkARTZ9BU%2FpM32HwdCblMPkoYwdbe22gbhQyzwQZZdoHdNg4gv7iJDOBSEq9tWp2iYVGtgUG6i8ZUHUL6OTkspfnh1dYWLkYM2WqKrqI5LX6UuLkwn7bQIK%2FJXZcDi3OH77YaqQ%2B1zSThuB3ZYYv%2BfBDnYlP2TaOGxlGE99WizMqB6p%2Fid5SkQT1orElfDFwQtSFwZRb20OLTv4qzbGj5DYqwTgEXQ&X-Amz-Signature=c1978b72aa3cafdd8af958d72ff7de8eb4fb01b910016b6d3f6377e90b218c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTS4MER%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC50Z13tVB8j9p5xEM2smHwJ8NamW4970mxOPMjFU3V%2BAiEA4Ot9ta4GB1TThW76hOW3alsRp%2FjcBOSoyJ%2F5HYn8p7wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOExoYd7d81bbT8PCrcA50YYkkOXkXPHLNdL7XyFxGRmhSj8NpbE6gz1aD2u7DzBTOtbVew42FoE3RT%2FX90nX%2FK7NVUTXlDDPh91GUaAo4aWNJYI%2BOJg32VcVoWX%2B85DFDzakBgGbfOhsDWgNbQ%2FoEMjKY0OagqerSkcvfdgWfQiahy2c%2FJ0HT3H8uMUsdX5dAEMwiLC9rbEpeCtNu3BMRRPWwMMvGPDdacnUoHwQc1XpHQgeGRdWEzg70NGmswSzazUIhN4dGM5refRffUByPvnnP0x34exrZLACyLUV2DVnqf6Cts4vo%2FjbDBOpF1FvTxBVARSZ6YP56r35sqiBFST0RxyP0lBtup1EfVp%2B%2BVj3UhkZu0DXj7YBypTrplftYkPz6wAoHrrHy66rayoLyRhrxZec3MLgPXZEh%2F70ZUSOasRw8gY4efvQRIN%2Br70utIRs%2Bu7PDEtWBwhF%2Bjtho%2Fxj6o29cD%2BwrKkPlnir6miQtXUBWPUpBnovXYcAq1GVzCGJltivQYpNwRGT39V5QJ17Frdi6nXHvoTWwRbyqhNbs3Zl4HFLfVEVgr%2BX5Sa4a%2FgkzJ1zwNIF0fQjq4vY1XIin4WW9k%2BPEwPaml5rbiKd99J%2B0av7cs2S0MarXmu8EnTdVf6D5qFhQxMKPO0cIGOqUBAwfWJvRjnTPn7Le50oHgFy2lOzkrwaeqspNWtO%2FgM2PzLWPgj17kS%2BEoEA8AcwnqZRZzvlRSlywJHUX2Q4mJHNqjDvDjrBoBQU1oRqatrPB0WfM5TIne2RRldenzSFZ1wn2U2%2BxkuWMeMAeA7c4JGKBAur0K%2FeeBTiPrVy7OOll5Qj5bdAgpR5rqkx2UoqKPf8zn6dp9J5iT8FCG8LE3uDU3Lo7Q&X-Amz-Signature=a2f551b1df8db8e237bcee6130dffc8c5e69affc0dddbbd9c5d299cc4d7510c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
