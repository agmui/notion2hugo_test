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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3ZEIV5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzC%2BVEY81WtN9BK3CSmSusAOG8k9HjNOKfX7DxlmY4YAiBidnFrgXALqvofFnV9TGR8lXk6qrnfbgWez%2B3I%2B%2FRNHCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMVOX%2BrK9UsvA%2FGVEDKtwD68H5p196DueWSHxqZWGXSQkC9qLa0IdfthZ1wSw%2BYlwybGFWa83JSHc3pSuV7cjqa6dkFuvAQs4G6o7wjCGHwu2aBd6nk2aCWoacHuwM04ZpaCyFivoOmjweMBeNoy7WWd3Uc6Xw9hUDl3LyGEsQLF4pUbh5TzwasBYJJGdPfk6W1nnlZ2OMFjMMEJhU0YpTe8B4tE6nQRisF0d832X9isDpX65qwSbFFBFd2qQl%2FkOark%2BPZBJS8Bex8QHGM9UsjFrneCfpztYPFXXvFycjgFIqdEoqcg03tVafoSTE0LpLlM5eXO4GdqD1BgVy1gFl2rN0lgG2jTjqsOSen42r6YQlv8G4NNE5ISwCUjVESNg7%2BTjAL8C%2BtHu4KOV4hRL33%2Bq60%2Bi9IOJ9JUWPc6T4ztZYoqE7DQ2ClZPFLh1g4QLnhytFNWJ06NpB6Feey8vatMHi7JGSRW7Py3Uuh4DrB3t%2FQ2IEoJD1iBEvXTfGmk3OBmoJbFNb%2FXr%2FVP%2F6NdUdUVfIfHIV2iFXj6JmmSegoZJaG5iD3qcvjZREbTdKKSLNVxq%2BlxJgyuVF4qRbgMGbhJoS28GaZ1wSTUWh%2FgPGsX9NAMRFrPg8e5Hd8k%2Fd9cHI8hwq%2F0sz16Sr0zUw%2B%2FikwQY6pgEPRhdATp54mWWMB5YlLQsHgk%2BJ98aSraif%2FthU2rJdWonuEYdPKkJXBWVvrqM%2F1%2B4tJS9mU1Y7vP8IIIX3t%2Flftu%2Bzr5EDqIvrNR8QzGnfGRDWT4KekIYQceRmQHft5jNOcdWqFVTaW0OR5ll29f%2Bx9DmjZM%2Bku1KIuo0DiRObZeprhGUrBbVwB%2FSGTYpyfvvc2VqdjSaA4G3nYq09DhbGueWOziOE&X-Amz-Signature=c80da453e38e795f16a28520f4698300647d0bdc1870dd67883d3b4af2161d15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3ZEIV5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzC%2BVEY81WtN9BK3CSmSusAOG8k9HjNOKfX7DxlmY4YAiBidnFrgXALqvofFnV9TGR8lXk6qrnfbgWez%2B3I%2B%2FRNHCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMVOX%2BrK9UsvA%2FGVEDKtwD68H5p196DueWSHxqZWGXSQkC9qLa0IdfthZ1wSw%2BYlwybGFWa83JSHc3pSuV7cjqa6dkFuvAQs4G6o7wjCGHwu2aBd6nk2aCWoacHuwM04ZpaCyFivoOmjweMBeNoy7WWd3Uc6Xw9hUDl3LyGEsQLF4pUbh5TzwasBYJJGdPfk6W1nnlZ2OMFjMMEJhU0YpTe8B4tE6nQRisF0d832X9isDpX65qwSbFFBFd2qQl%2FkOark%2BPZBJS8Bex8QHGM9UsjFrneCfpztYPFXXvFycjgFIqdEoqcg03tVafoSTE0LpLlM5eXO4GdqD1BgVy1gFl2rN0lgG2jTjqsOSen42r6YQlv8G4NNE5ISwCUjVESNg7%2BTjAL8C%2BtHu4KOV4hRL33%2Bq60%2Bi9IOJ9JUWPc6T4ztZYoqE7DQ2ClZPFLh1g4QLnhytFNWJ06NpB6Feey8vatMHi7JGSRW7Py3Uuh4DrB3t%2FQ2IEoJD1iBEvXTfGmk3OBmoJbFNb%2FXr%2FVP%2F6NdUdUVfIfHIV2iFXj6JmmSegoZJaG5iD3qcvjZREbTdKKSLNVxq%2BlxJgyuVF4qRbgMGbhJoS28GaZ1wSTUWh%2FgPGsX9NAMRFrPg8e5Hd8k%2Fd9cHI8hwq%2F0sz16Sr0zUw%2B%2FikwQY6pgEPRhdATp54mWWMB5YlLQsHgk%2BJ98aSraif%2FthU2rJdWonuEYdPKkJXBWVvrqM%2F1%2B4tJS9mU1Y7vP8IIIX3t%2Flftu%2Bzr5EDqIvrNR8QzGnfGRDWT4KekIYQceRmQHft5jNOcdWqFVTaW0OR5ll29f%2Bx9DmjZM%2Bku1KIuo0DiRObZeprhGUrBbVwB%2FSGTYpyfvvc2VqdjSaA4G3nYq09DhbGueWOziOE&X-Amz-Signature=4588002dae35080cb90abae08e2bc5af8db4d1f5dd6a49af8193a386111a050c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3ZEIV5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzC%2BVEY81WtN9BK3CSmSusAOG8k9HjNOKfX7DxlmY4YAiBidnFrgXALqvofFnV9TGR8lXk6qrnfbgWez%2B3I%2B%2FRNHCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMVOX%2BrK9UsvA%2FGVEDKtwD68H5p196DueWSHxqZWGXSQkC9qLa0IdfthZ1wSw%2BYlwybGFWa83JSHc3pSuV7cjqa6dkFuvAQs4G6o7wjCGHwu2aBd6nk2aCWoacHuwM04ZpaCyFivoOmjweMBeNoy7WWd3Uc6Xw9hUDl3LyGEsQLF4pUbh5TzwasBYJJGdPfk6W1nnlZ2OMFjMMEJhU0YpTe8B4tE6nQRisF0d832X9isDpX65qwSbFFBFd2qQl%2FkOark%2BPZBJS8Bex8QHGM9UsjFrneCfpztYPFXXvFycjgFIqdEoqcg03tVafoSTE0LpLlM5eXO4GdqD1BgVy1gFl2rN0lgG2jTjqsOSen42r6YQlv8G4NNE5ISwCUjVESNg7%2BTjAL8C%2BtHu4KOV4hRL33%2Bq60%2Bi9IOJ9JUWPc6T4ztZYoqE7DQ2ClZPFLh1g4QLnhytFNWJ06NpB6Feey8vatMHi7JGSRW7Py3Uuh4DrB3t%2FQ2IEoJD1iBEvXTfGmk3OBmoJbFNb%2FXr%2FVP%2F6NdUdUVfIfHIV2iFXj6JmmSegoZJaG5iD3qcvjZREbTdKKSLNVxq%2BlxJgyuVF4qRbgMGbhJoS28GaZ1wSTUWh%2FgPGsX9NAMRFrPg8e5Hd8k%2Fd9cHI8hwq%2F0sz16Sr0zUw%2B%2FikwQY6pgEPRhdATp54mWWMB5YlLQsHgk%2BJ98aSraif%2FthU2rJdWonuEYdPKkJXBWVvrqM%2F1%2B4tJS9mU1Y7vP8IIIX3t%2Flftu%2Bzr5EDqIvrNR8QzGnfGRDWT4KekIYQceRmQHft5jNOcdWqFVTaW0OR5ll29f%2Bx9DmjZM%2Bku1KIuo0DiRObZeprhGUrBbVwB%2FSGTYpyfvvc2VqdjSaA4G3nYq09DhbGueWOziOE&X-Amz-Signature=c73ad8cf6f8590fd07e36db910a4c6cf96c39562705eae2f816bf8522bd04dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFW6KA5L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSX1LjbaeqwCKgreoilZweDXBBnBjFzTn3cQQLAdB4jAiEA1KuTVOsAr4Mjocw6oXs7AN%2B4gJ9NkZvl7EbmOU7Znjoq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF%2FCKWhu%2BefesyGG7CrcA1KdZvfrY%2Fy801apabIGL5weeKqnKX9%2FfbR6j6gesPe61Z8h7QiskKBC8a35e43tvK5vZAYni3%2Bzakqbc9zh5098zpqyZbHYrd6Jbz1OzxNefz7ksz02U9p3uBJNqqwxyBt2C17ZVSC6rGCSn%2BcFwIRe4c3H4VSYaUo7ZjCjt2obqw96Vh%2B0rdXt1%2FMPe9UAGc%2BleIqara4YqrkeLDIcCpdJkTh77F2qHjyBI870Rux0eKf4ZkAbFz7N2SsZ2b04F8liX9hdeQ386LCYXuGyGCCikOU3vYm1By5xSgCgrrfBbWDi1YuoXDbq3pgK9ZHx0qr6%2BxEchpeQs2JRHl3R7V%2BmPN1eS7VWjHqJUKg59UGQ6zAZb1k6c4S%2BJEnm1RytUrThNvr3ixvNqkA7%2Fs6ZM0Lwr4aFnAztby9BRa0K5tLWDKgRPpA4KNe%2Bjr1%2B0zw1FZC1cwmy%2B2ilF%2BpU2GhGC4SIOdu%2FBta%2Fkd8ubx2krGra%2F5fTL118mT4qPRxZs8pJbwk0YfH%2BYD3sDakj9XWdP%2F0HMdGx2P%2B7dI0uLWCU05EEE1V7376%2FFClw%2B7lWdQIRaYXTQhzw2wUO5ycb1JCAyXwDifnhUMzwlfkkBb3Sibhn08vNbFpNQ0TvrvGnMLvXpMEGOqUBCMgZfNjaBi1TI%2FNvKCicDJ6F%2Be0QHh%2B22Q79rruedl9iNscoM%2BgJk7m7fnx6Jmyw82oihilf8ZHgGnLT%2BDkBbL0qAQvseM1jW1wBT3TPi%2B%2B7sQfAwV5Ipxyzr1Y8TaSoliX%2F%2FXmqO43q%2B9R6uVsBLsyAkFJKeCbXVE8kWIRocTZOY7lQe91h%2B4qX79UOcOuMsFsyvjFBLtCUJxqVNZFZXMtER%2FAl&X-Amz-Signature=af644640772b1e676059cd4939a94f674f7329f42ec5052add83c13ea80a787b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJRUL65S%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbZVpNPt0dgunXlRCaUHF2dmnNMRenh82FwYwJ9rJPKAiEAlHpbNmg2dHWsBK3tKE5Z28NN0zhcd0DMF5V3zxNAT08q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCeJ47Widwx795pulyrcA8VdCjHp089HrcozVbuX92OzKn41bT9xhwR5PC8JEtLQgWCq46XVXuXPk7sI3t6L2UQggLsoFCSBDcTdk9bz8ZDiv6jY8jlEGW5Hozu5fz8k4xStdpCjKbXmCSVw27CCeCC1ddAO%2FQaiGFwxwb9j7qEXqO2J31KcmWZArUcWiEcvZKuM2zVeK0wxVkJW9%2BOoYs%2FoSPlYCl5E7bh3YK48jFNV8BdlRKtqzlf0TRbGktp4hcAOhNM%2Brl8l3TWxQHNFL%2FE%2FqxUeymEZ1cqH4P0t80PWWOcmpaNVKJ6vElKOUZ30%2FdH5%2FV87BT%2FONzu8x1zz4%2Bp1UzLWdC2GwI3DKR26RkiQ%2FSEKqXJwarDLHbhIR1aAfWqomeKi0UF6t5FR0RdJOhABJMDKxnY4FwuBmESJdUB3n52IkSDQBZ8Oan0GqIlpHkGCNNEmrGQ7pLTs4Dyrhb6Lb2zKDXgU7in5q3n0Uc57ovKyClBawfsjthVdaAX6wadPKR9wcKZLdd2pNVvBPGTrZHyScS20VWUJUlRg0qSu9JtNZu3203d0UvQrpd0FalXEC4SSGXTzWr4RIUMs0%2BNLTb4yg%2BWodSeugLTEsYqeMuEe%2BsVaGs6kwRuN9qqkqEke5PL06XzP6nrHMLzXpMEGOqUB9BbAQco7NLkfDl%2Bd4GesaWF5GQnoTSeResxFOTgx2QJXtnxl0iCwvzHrZpeMwCoElcwqFT1Z6kMaDNI5ZszW87W33z29E0Tv62y3QY%2B82sJkFgSS2EGnSmH1bXLXwpXIRcnQBRStE9MGgRawmGkRFxfHW6lr8ReJCyOtj6FHHs7QTRUGo2VxIOfoSnCAgNuGt2L9dnt%2BaAWaClGEf4vk9dgGQADW&X-Amz-Signature=085fa8daaebbb2a5825abc5f6ab7aff3fce849d451148cdf83c1ffdadb45c60d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3ZEIV5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzC%2BVEY81WtN9BK3CSmSusAOG8k9HjNOKfX7DxlmY4YAiBidnFrgXALqvofFnV9TGR8lXk6qrnfbgWez%2B3I%2B%2FRNHCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMVOX%2BrK9UsvA%2FGVEDKtwD68H5p196DueWSHxqZWGXSQkC9qLa0IdfthZ1wSw%2BYlwybGFWa83JSHc3pSuV7cjqa6dkFuvAQs4G6o7wjCGHwu2aBd6nk2aCWoacHuwM04ZpaCyFivoOmjweMBeNoy7WWd3Uc6Xw9hUDl3LyGEsQLF4pUbh5TzwasBYJJGdPfk6W1nnlZ2OMFjMMEJhU0YpTe8B4tE6nQRisF0d832X9isDpX65qwSbFFBFd2qQl%2FkOark%2BPZBJS8Bex8QHGM9UsjFrneCfpztYPFXXvFycjgFIqdEoqcg03tVafoSTE0LpLlM5eXO4GdqD1BgVy1gFl2rN0lgG2jTjqsOSen42r6YQlv8G4NNE5ISwCUjVESNg7%2BTjAL8C%2BtHu4KOV4hRL33%2Bq60%2Bi9IOJ9JUWPc6T4ztZYoqE7DQ2ClZPFLh1g4QLnhytFNWJ06NpB6Feey8vatMHi7JGSRW7Py3Uuh4DrB3t%2FQ2IEoJD1iBEvXTfGmk3OBmoJbFNb%2FXr%2FVP%2F6NdUdUVfIfHIV2iFXj6JmmSegoZJaG5iD3qcvjZREbTdKKSLNVxq%2BlxJgyuVF4qRbgMGbhJoS28GaZ1wSTUWh%2FgPGsX9NAMRFrPg8e5Hd8k%2Fd9cHI8hwq%2F0sz16Sr0zUw%2B%2FikwQY6pgEPRhdATp54mWWMB5YlLQsHgk%2BJ98aSraif%2FthU2rJdWonuEYdPKkJXBWVvrqM%2F1%2B4tJS9mU1Y7vP8IIIX3t%2Flftu%2Bzr5EDqIvrNR8QzGnfGRDWT4KekIYQceRmQHft5jNOcdWqFVTaW0OR5ll29f%2Bx9DmjZM%2Bku1KIuo0DiRObZeprhGUrBbVwB%2FSGTYpyfvvc2VqdjSaA4G3nYq09DhbGueWOziOE&X-Amz-Signature=0aa123b8f9d26b7a2116d83771ef0af5c17585a4e374bc6b94ffa60cd5d8c6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
