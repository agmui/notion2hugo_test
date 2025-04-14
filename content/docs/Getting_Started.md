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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4663FF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FXr%2FE8H2nxRuPlVk3tv0Lg0%2B5s%2FXElgDX1eV8EaAeOQIgCqZv3dA0IQ0XJuKovwt6uX%2FeiuAv0ceyB29D2%2FJZiGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFAQrGQLqKxQSPEwoSrcA4Z9J0b6Smdv0z6siQNrZmSCWdeC7GXmEzHsSFY0NOiF2DoVgOAM2NFmmcan6ivUx7PyJ8mSsRKGHkUhGsh4a42PxSPYuTzY1SdAT5TfLmEpexhS740n08tv8wSgVzBg%2BDIB87LgGYBleNpkh3GqWhyBqocGOHfyfqsrQeM%2B7ZGbp0zIdjudEXZLG1zm7aAp1USU8mdA6TAQedNrZtY7dd2FDKyPoSJhRIBIur%2FRbeWNwT%2Bp7efn8mwTfzc5yJrwVIDozp9ZAks798u8XvMED9ptsSSsfUGsxCuqSWkbO3CFQZH5r1tynQxBGwZEkfF5ji8WbHJJjC55ki6V82MRggKY%2BZ5mQt0GYXSh%2Fgyo90Q0LpGz75a%2BNKi2eAn9XN8Ujs1TCILtFSrXUju8PZrCEufQw5QfByBrwsI78qA%2B%2FQhXNo3Zhu0XzT%2Fa%2BS9JmWGM8YU50gzl09tG%2FmCGwfM8MjexEk1HidxWBKGJnV2hEPDSuL09L5POg4IzvPjRqL6rg0tVVMEpkfLQ7myYyuCervgPVJmFKaBMrGDhxLCeXxNn20XHzpCBsoeDI13oqI%2FdWBHFwEZj%2FU2CZN%2F92xoaKzu4xJzWy8mGnUdKHLFVM%2FYnQm9Ek3av4MPTHjFoMMnj8r8GOqUB8ccmCTQ%2FNSbXSnS6hqThGkst%2BcXQItcIZAvKj8t%2BdeOTZScv%2FHBhjht8WzGuBwgyVDp0Jnz9PSDEjMhVigyj%2B6n%2FhvTrERpD2aG9RsWV6dom8CGNYT05EyMp2aEvf7e%2BDqhJfx9p%2FamO06hhFqtg6RSd9zAq3btUybURmI7wlD4HGW2UEtnT4WrPu9CEzEYDu6%2FpK8ePGmBSg56HO2%2FfuPYjcyW3&X-Amz-Signature=036112b6167a756619071003bf9abb2a0e9724728fec62a6bc47df00655bba1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4663FF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FXr%2FE8H2nxRuPlVk3tv0Lg0%2B5s%2FXElgDX1eV8EaAeOQIgCqZv3dA0IQ0XJuKovwt6uX%2FeiuAv0ceyB29D2%2FJZiGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFAQrGQLqKxQSPEwoSrcA4Z9J0b6Smdv0z6siQNrZmSCWdeC7GXmEzHsSFY0NOiF2DoVgOAM2NFmmcan6ivUx7PyJ8mSsRKGHkUhGsh4a42PxSPYuTzY1SdAT5TfLmEpexhS740n08tv8wSgVzBg%2BDIB87LgGYBleNpkh3GqWhyBqocGOHfyfqsrQeM%2B7ZGbp0zIdjudEXZLG1zm7aAp1USU8mdA6TAQedNrZtY7dd2FDKyPoSJhRIBIur%2FRbeWNwT%2Bp7efn8mwTfzc5yJrwVIDozp9ZAks798u8XvMED9ptsSSsfUGsxCuqSWkbO3CFQZH5r1tynQxBGwZEkfF5ji8WbHJJjC55ki6V82MRggKY%2BZ5mQt0GYXSh%2Fgyo90Q0LpGz75a%2BNKi2eAn9XN8Ujs1TCILtFSrXUju8PZrCEufQw5QfByBrwsI78qA%2B%2FQhXNo3Zhu0XzT%2Fa%2BS9JmWGM8YU50gzl09tG%2FmCGwfM8MjexEk1HidxWBKGJnV2hEPDSuL09L5POg4IzvPjRqL6rg0tVVMEpkfLQ7myYyuCervgPVJmFKaBMrGDhxLCeXxNn20XHzpCBsoeDI13oqI%2FdWBHFwEZj%2FU2CZN%2F92xoaKzu4xJzWy8mGnUdKHLFVM%2FYnQm9Ek3av4MPTHjFoMMnj8r8GOqUB8ccmCTQ%2FNSbXSnS6hqThGkst%2BcXQItcIZAvKj8t%2BdeOTZScv%2FHBhjht8WzGuBwgyVDp0Jnz9PSDEjMhVigyj%2B6n%2FhvTrERpD2aG9RsWV6dom8CGNYT05EyMp2aEvf7e%2BDqhJfx9p%2FamO06hhFqtg6RSd9zAq3btUybURmI7wlD4HGW2UEtnT4WrPu9CEzEYDu6%2FpK8ePGmBSg56HO2%2FfuPYjcyW3&X-Amz-Signature=10fd896856b7676a0d6d6211e6027aaaf194209c6ad8d6e3f3499df1cb4404fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJJAJQCO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA4VbwPk1nraPuluoHaCfvRFZVQzpIW7Aln%2Frw2%2F29wAIgKLbeT7pSaO7IgEvXW8n5oUc34cmKDVm4%2Fo3hR%2FN7Ymkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJVhyalv5IVdN%2FEGSCrcA5gIgyMfsQtU9TZdBWpASWev6FsgopuYHOp0vR24uPlSiGl6DiBRhavInSwP6RqQPzALbcHNMEPC68JM56dh%2FzGVWjxEt10PKD4poJHHc%2FmLBEeY7RLIanAdAf4Ismg4okcCFAMXlxi%2F8So07c4JC%2BJVfEtQ3G8dIYPRa6lL0I1bASG63GYs2hLWacR7BxK%2FFg14TzCqKIBBDxGCznSHH%2B9JpPEpXM%2Fs%2BL%2FTyubfbfYWfn4zTVy%2Ba2OGcMEP425ZA%2FDntT%2FvULCdba1uu%2BwtFx8N90P7n724YE0hsF9p6v%2BwlheB0T6CpRt9aA6MWSvEtj6LhrFim88Xgmc%2BR0S50yBuwMZWUGxy0eGLDj4QVna%2FrUs3%2FnwzPCuLVoM4S2y2n3Is7eiS8RvR8D03wsXEIAh7XBCd3Mr8qRxGtIGDVKGagZ%2BkKLlrqvG%2BYSCZ4VJdqTU62UscH18910LUFjCmP6MJzioTxnS5cbzNlRnSogQojbHrXXN7zX0swJsuBU9bddlqi44JPcrtbyoDuNGnnTzrAjmpCNJ246NAIOTXaZV06DRT8N3k7Z%2BjnK09rNBC%2F%2FWQJsD3AIsOHgYkvmX5Ru8iwQgCHAD%2BlO2ZWuNR5vYNjQsJlwdsnnWR9MdlMObi8r8GOqUBDr1b7RO%2Bhi0vbgLoHJ2mJAM4gA4ib6vYyshlt%2FXIiiZnAUxMKco7DMaA8TYK%2BT1fhYHXWQDm9Jo2FI3LAuOF09NM%2Blken7Wh86IDp17%2FTw7yMtj%2FlXCRQRBvSgvrMecu9XHE8XSWxa7Mg2Db8QIjDT8c%2BnSZIDWBPQxNfueZ5cNqW%2FHZ%2F7MiCJjKps2hxIEtMuqNmnXW2yFsZnwAk10uNn8AX%2BYG&X-Amz-Signature=ee94700d31fc8af3fb69db1e0cfefc7f2f46be3e2eeb3f15c875e651ba940743&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672K6T26D%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN1wm2DQbqF57mIFjeWBzwPhav2U6XJdfuQCuxNqkUnAiEA3PhoPTnGp%2BaLqJe9WSEEaJ5ksJWr6ezLizyW2ZFTExEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDOXXjPdUcS8WD0JxircA6EC7ayGXUmL19%2FSFtYYNxEE5naGY88aYeJM%2BOb3ZCW4WZaEL8U5XGSiE%2BgxibsQHCX3nWa%2F%2FNBdEbRz4NXdyz%2B%2B1MmVrZekxyDrPKSVrAcOsEtM0eVJpUdYcKXa7mdQtAEIbgDRDIXwQ2xl%2Bgb%2BS5SA1zBbCmLWLHHZsdboA7aShisZ7VhTNLjS6SDIO06aY0TpTvp0NXRhjcMWoIByTiWWNoa9D7ZYbN%2FmK5HiwhZQq3ZWtkOH1TejShe7XpVUi6cKP7GizmnrGjTJ4dG5D%2FcWokjcv36DFk70LCEbe81wLv8%2BPxhEtK1gH1KjP4F1y3RnZW6QSqnD6tlHcLKrGJddI%2FrixnloeWghvdbyF%2FE6NDWGLGXyX3PUwWoPLsuCUaaZjePWsMiLpRf6od7o5Jc442mlbIQiqReQJRp6KXmsjnYaV%2BNLHwxI4Lj6%2FBC08nfqbL%2Br2%2BpKXjs06UF%2BKRwP5yd7iVCAutLabMGiS0Sw3q6eE4O7S2GoZqiBFHumhVRKlO0IB7z9FXtW8pyQNqDbfwmnAYj3rgozV9b1DUGFZpRzVL3wSDpfCWMEOgvDpAycV9JxFfxD%2F1S7j1wK%2FquYIiTBG4F2LGvy4v%2Fh71jWuyga0lhMNewcSN2sMLnj8r8GOqUBOFJlVpcLb8lg%2FgzII0VyA4FYWOU0xO5bpDCjU38iEoL8klUSjtHQYJKmrNDSMIrBM%2B5Vtw14iCNzGz3lbRtzwwwtyPXqQxxEeL9x0o1d8B64D89B7KgQ9nx9mp9nU2JFufqyQVDlr%2FDIgvGcK%2FeGze0PySKkcihnyekasiuDHOn%2BHNabbcaqTJbR8krjZlHPXSVw4OP0PKNHtXGD06no8XdaPS2m&X-Amz-Signature=de0c72e839db43f5d338170ab2bf519334d058c05ec0fadc9bc48d88c17cdf9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4663FF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FXr%2FE8H2nxRuPlVk3tv0Lg0%2B5s%2FXElgDX1eV8EaAeOQIgCqZv3dA0IQ0XJuKovwt6uX%2FeiuAv0ceyB29D2%2FJZiGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFAQrGQLqKxQSPEwoSrcA4Z9J0b6Smdv0z6siQNrZmSCWdeC7GXmEzHsSFY0NOiF2DoVgOAM2NFmmcan6ivUx7PyJ8mSsRKGHkUhGsh4a42PxSPYuTzY1SdAT5TfLmEpexhS740n08tv8wSgVzBg%2BDIB87LgGYBleNpkh3GqWhyBqocGOHfyfqsrQeM%2B7ZGbp0zIdjudEXZLG1zm7aAp1USU8mdA6TAQedNrZtY7dd2FDKyPoSJhRIBIur%2FRbeWNwT%2Bp7efn8mwTfzc5yJrwVIDozp9ZAks798u8XvMED9ptsSSsfUGsxCuqSWkbO3CFQZH5r1tynQxBGwZEkfF5ji8WbHJJjC55ki6V82MRggKY%2BZ5mQt0GYXSh%2Fgyo90Q0LpGz75a%2BNKi2eAn9XN8Ujs1TCILtFSrXUju8PZrCEufQw5QfByBrwsI78qA%2B%2FQhXNo3Zhu0XzT%2Fa%2BS9JmWGM8YU50gzl09tG%2FmCGwfM8MjexEk1HidxWBKGJnV2hEPDSuL09L5POg4IzvPjRqL6rg0tVVMEpkfLQ7myYyuCervgPVJmFKaBMrGDhxLCeXxNn20XHzpCBsoeDI13oqI%2FdWBHFwEZj%2FU2CZN%2F92xoaKzu4xJzWy8mGnUdKHLFVM%2FYnQm9Ek3av4MPTHjFoMMnj8r8GOqUB8ccmCTQ%2FNSbXSnS6hqThGkst%2BcXQItcIZAvKj8t%2BdeOTZScv%2FHBhjht8WzGuBwgyVDp0Jnz9PSDEjMhVigyj%2B6n%2FhvTrERpD2aG9RsWV6dom8CGNYT05EyMp2aEvf7e%2BDqhJfx9p%2FamO06hhFqtg6RSd9zAq3btUybURmI7wlD4HGW2UEtnT4WrPu9CEzEYDu6%2FpK8ePGmBSg56HO2%2FfuPYjcyW3&X-Amz-Signature=c13a1961e047c93964b54540b8018cb37694fa856c8c8a8cf9ff46c1e8afeb58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
