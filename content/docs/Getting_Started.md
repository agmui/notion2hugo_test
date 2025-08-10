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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNM7OHK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6QZ%2B%2BE%2F8os1h%2F7NjqmWSEOGMUBOD9ByXj5%2FqAC7oksAiEAyWYmPCXbIhJKURtSNpaYgwcKB8dwq5%2BX3OpEN%2B%2BEpckqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwlS8tCdQU%2B57NLSrcA%2FYO8OsbJq%2FsZTWFTbUBABKjyE1j%2FrKzdDBmREhx58ZPF9GvUjovCu4P5U9nkc2UbNAInia8QywNMqBG2ilgXIxQKq2Aczt3gku1XmnlumH3tRFsv2UDwqe5wrdawuVcg0slctw0NPDcs%2BIGFKPm9%2FfQtsg8lQ76b%2FPtaRQnFSmcnFH4lg%2Fkc%2B29EOreA9BvTOtQ9MI%2BGN2tS3m1qejJtbHJpBHx591%2FY3LYHCfqg%2BC5x85krbXEET%2BSjoFtMcVdm%2BNh%2FKMi%2FUyb520Wea7zJNzprnyPWQu8QeXWOCwW8BlpX2KdDCVETa1z6vEbW7L82ZwSt4AFodx%2Fw5J59uaF8IWuNeIPatK2v6Q2Q7iDJljZnJSoSeNtjML3OMrUj3Eg6vWkZUYZs4nHLf%2B7eOJwkElLW%2BCa7I9ymP08Pojw9iUQSQCAVlxoTSC7QbLTKnyt4NfhzrlVVzgOn9L8EhFDLVQ%2FRyBsIyGk2yLNDSrZXKTfVx9NsGikjVx4MbAS2WMUZ1JsWviaMa78QV9YS8Pc8rdBa22yEh6ZFSFjiquxMiMul1Zo3oDu3xrmyR4wyUNU9gL4x4L%2BmHXA7ZALhEoQUOv%2Bo0yZuPJg9eQ7W5BqG2SQwWPa7Zp0G7skbuhHMPqy38QGOqUBJvw01b6Q4%2BjublI3cw9d2Y%2BvZIQ%2FbCd2aMd6NmOG0zqeHw9wXg7ABaMKBR9ZUbqIpwdGLGgTrgETYQYInzBJ7TDI%2Bl%2B%2FuUys76Wc0VjcZwtz99X0ITAEIPV7Op7WV7%2FE5%2FIaJm2a%2FkMXqbfJ%2FAUypA35gJjYP9PrOZSzShyqfRT9ib9XgUkhDHtUTF4OMkX9eEWUMc8CUn5gMMQZvye2IATLxMsZ&X-Amz-Signature=6e107004318e82ef101614d77df36462cf56b845d10a201df0bd84315b9f67db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNM7OHK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6QZ%2B%2BE%2F8os1h%2F7NjqmWSEOGMUBOD9ByXj5%2FqAC7oksAiEAyWYmPCXbIhJKURtSNpaYgwcKB8dwq5%2BX3OpEN%2B%2BEpckqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwlS8tCdQU%2B57NLSrcA%2FYO8OsbJq%2FsZTWFTbUBABKjyE1j%2FrKzdDBmREhx58ZPF9GvUjovCu4P5U9nkc2UbNAInia8QywNMqBG2ilgXIxQKq2Aczt3gku1XmnlumH3tRFsv2UDwqe5wrdawuVcg0slctw0NPDcs%2BIGFKPm9%2FfQtsg8lQ76b%2FPtaRQnFSmcnFH4lg%2Fkc%2B29EOreA9BvTOtQ9MI%2BGN2tS3m1qejJtbHJpBHx591%2FY3LYHCfqg%2BC5x85krbXEET%2BSjoFtMcVdm%2BNh%2FKMi%2FUyb520Wea7zJNzprnyPWQu8QeXWOCwW8BlpX2KdDCVETa1z6vEbW7L82ZwSt4AFodx%2Fw5J59uaF8IWuNeIPatK2v6Q2Q7iDJljZnJSoSeNtjML3OMrUj3Eg6vWkZUYZs4nHLf%2B7eOJwkElLW%2BCa7I9ymP08Pojw9iUQSQCAVlxoTSC7QbLTKnyt4NfhzrlVVzgOn9L8EhFDLVQ%2FRyBsIyGk2yLNDSrZXKTfVx9NsGikjVx4MbAS2WMUZ1JsWviaMa78QV9YS8Pc8rdBa22yEh6ZFSFjiquxMiMul1Zo3oDu3xrmyR4wyUNU9gL4x4L%2BmHXA7ZALhEoQUOv%2Bo0yZuPJg9eQ7W5BqG2SQwWPa7Zp0G7skbuhHMPqy38QGOqUBJvw01b6Q4%2BjublI3cw9d2Y%2BvZIQ%2FbCd2aMd6NmOG0zqeHw9wXg7ABaMKBR9ZUbqIpwdGLGgTrgETYQYInzBJ7TDI%2Bl%2B%2FuUys76Wc0VjcZwtz99X0ITAEIPV7Op7WV7%2FE5%2FIaJm2a%2FkMXqbfJ%2FAUypA35gJjYP9PrOZSzShyqfRT9ib9XgUkhDHtUTF4OMkX9eEWUMc8CUn5gMMQZvye2IATLxMsZ&X-Amz-Signature=fbfd7c2b324d072f443a4b9216412d722333fb7bc539729944fc44be10eb3c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNM7OHK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6QZ%2B%2BE%2F8os1h%2F7NjqmWSEOGMUBOD9ByXj5%2FqAC7oksAiEAyWYmPCXbIhJKURtSNpaYgwcKB8dwq5%2BX3OpEN%2B%2BEpckqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwlS8tCdQU%2B57NLSrcA%2FYO8OsbJq%2FsZTWFTbUBABKjyE1j%2FrKzdDBmREhx58ZPF9GvUjovCu4P5U9nkc2UbNAInia8QywNMqBG2ilgXIxQKq2Aczt3gku1XmnlumH3tRFsv2UDwqe5wrdawuVcg0slctw0NPDcs%2BIGFKPm9%2FfQtsg8lQ76b%2FPtaRQnFSmcnFH4lg%2Fkc%2B29EOreA9BvTOtQ9MI%2BGN2tS3m1qejJtbHJpBHx591%2FY3LYHCfqg%2BC5x85krbXEET%2BSjoFtMcVdm%2BNh%2FKMi%2FUyb520Wea7zJNzprnyPWQu8QeXWOCwW8BlpX2KdDCVETa1z6vEbW7L82ZwSt4AFodx%2Fw5J59uaF8IWuNeIPatK2v6Q2Q7iDJljZnJSoSeNtjML3OMrUj3Eg6vWkZUYZs4nHLf%2B7eOJwkElLW%2BCa7I9ymP08Pojw9iUQSQCAVlxoTSC7QbLTKnyt4NfhzrlVVzgOn9L8EhFDLVQ%2FRyBsIyGk2yLNDSrZXKTfVx9NsGikjVx4MbAS2WMUZ1JsWviaMa78QV9YS8Pc8rdBa22yEh6ZFSFjiquxMiMul1Zo3oDu3xrmyR4wyUNU9gL4x4L%2BmHXA7ZALhEoQUOv%2Bo0yZuPJg9eQ7W5BqG2SQwWPa7Zp0G7skbuhHMPqy38QGOqUBJvw01b6Q4%2BjublI3cw9d2Y%2BvZIQ%2FbCd2aMd6NmOG0zqeHw9wXg7ABaMKBR9ZUbqIpwdGLGgTrgETYQYInzBJ7TDI%2Bl%2B%2FuUys76Wc0VjcZwtz99X0ITAEIPV7Op7WV7%2FE5%2FIaJm2a%2FkMXqbfJ%2FAUypA35gJjYP9PrOZSzShyqfRT9ib9XgUkhDHtUTF4OMkX9eEWUMc8CUn5gMMQZvye2IATLxMsZ&X-Amz-Signature=946d7f215480a8cfe52dda60b909bf6af8f82b8703e96348a5e0fc4fcaafae6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YS5FTS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7GBXygyPwD9phyXOk%2BeYDzW%2BPGmYEiRJRiuTxTr79YwIgWXsdu5uJnTzz9%2F7KybxbKFwr%2FYfQymh8sZ91lzl8KgUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2TdpJdmQ8Yt9kSjircA%2BJ64Moorhj31T1Vtoc3WziZimvjsWF%2BoL5OlTsD%2BkUsMH3MWV%2Bf1VbXLMW5oNaLHlu%2Fv7%2FItNRuWILTjcFL8%2FnnMBxf5%2FDFAwBbYeyV4rM4rtHY%2FLL9DNGACBP5O3oZaSM871tIWOuzgIvbrU%2Fhr8td1xmCHEGFvawqZluIJM%2Bt27rLtAA5HyQRReL2Nn8Xwksl88P9DKmEn09NiBM1dNnWErkTIc5AXjEnYOyuhhPs21QyeDqStZ3YPcQtqg7EN%2Fr6zgYuB7i2ACSiWZcsO5sMF1R34y2SxQjNfwpH4pGqSTVDf5YWaneaIQF5A13CaliExqE38LG71tVTa1gksuAbmtOhrkEadUh%2FiLOAKPfe7nuFk6S4EwVHqyAf4FP9IYwyPWLYL19%2FfpVZ1yGG3btN%2FMsogrLV2n5T9VKiZuNtT4OGhacncxEPrAK2RNAtGWB%2FzTUJ1h6QjIE4UkFimFE%2Fem1DyO4TfPb%2FNux5tnbc%2FmB4pZZoRxiP6Poy3x4VETE6tq70%2Fp8EBbgfDmqY0WOese%2B0S223CgGSXL9rsG3erYazYL9qEFwtVLuQXCDQ8a%2FXSt9o3oMHopVf40N9wSnSPabOloKdvQEIE42bya7dt5DclNiMylDHpYGsMLqy38QGOqUBVpqu1e%2FDZnNeMB6bczrEOGkF2M71vB%2BCxxBbDg5sk9Zkl%2FDapgqgwCBABZXldmBIkmB0bZMuO9EWEQQm6hAy%2FRTsFHXOVBelklwIhKIq0p4Q7lylI%2B9IxK9TjQfYJcs3O2rnY50HNHiaNa%2FufxhDK9bp1n9cAXjTdUqwHitbrpgyQK4LhFqu67j3TrDeVg7d2tY3z5z65dW02q5c3opv8%2BUleUif&X-Amz-Signature=9b4f83a87cb72509c1d9f553d81ca906e13356f131ba08e9c5ed55d0f0e4b0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDLXJRZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvh7QvyqJp8bZWzgyK8lxw9ApUVcRZ4oPKHKXibBL43AiEA%2FilPZgstbyoxXsr7rrxEHGxdPnEhIs3y7gGyWqt9oEgqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsJPrPARuSiq6Q%2BNircAw0EYNtbX%2FdRKK0Oe%2BVKVawhtDeIJCUAKUdGeAZlF4qn9RqLM7%2BCG2l0pOwlq6huVIE3P%2Fv%2FC0agZtdGYD0adz%2BlF1lSf0%2B3Cm9Dno4svkgo5vyj9J%2FiECWJTQym7uq%2Bp2xj9bYO85GcDJ%2Fk2EZNwdklfZx74kCnM75YZjJldnFw7Laodx2lNn8w%2FgJ6l74oVwEZH%2BGqGfiBwp78HjCCZniJy1JADnIjsXrt4Nd0OmgkAU1pkoU%2BX0A%2FlBkfC%2FruPau2aZJiGtbkasGHvAzadkA%2BD1EJ7AgDjy225fOoLhdCArwXnK4yBX4numnY%2FoyhE0kVeKX6wM78qE1Ew%2Fts0emnwHi%2F53Bmh5YknsYkOFxsseofx0bUf6f%2BHFGhPcUXPTg9EBl9GTh0tlbJKGDkKMNWPBfMEM8oScJ9YtgoB7sv%2Bo4Cc2FLu915B%2FPRfDFplpPhnLFGhDrIr9Yw2cUnyUITGzGCVMHaYWW%2BhDB6qHNJV8%2FTH5dg7GBwrQXjer%2B1%2BfY8kC1TcUmXbYs3LwIu38J7kD6%2BjZGgmLE9Vj9Z7qSZctU%2BmGEkpzgoOXrfU7rBu18B8bCKu1mW79c9ikME7BFZ%2FegyaEkt7RgJa8LlqhHYWmFyNsAY13y4ECvBMJKz38QGOqUBL75I1p%2Fqv4v8FgHQTzOrVtlBmQhBMI%2FwtpxaP65s3zy7sPsC7TTZcZw2yif6oUwxoY4ARf%2F7p3nRbJxXNaEeMfNkWfm1C%2B%2Bya76SgwrVmQoKDHRi98t0PVxR%2FkKRIf3HhpC7EsxrgSserHV7GCfD9biZawkvjF3TtKyfWlWixOj6nivVloUVgAcGVF2ut%2FDgXM0UExc97BtouoB8lI8FX0YWbeLt&X-Amz-Signature=44240e3de0101918da98cda62ebeb4a026dbc1ec63a6db4d1a45deaa274c1236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNM7OHK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6QZ%2B%2BE%2F8os1h%2F7NjqmWSEOGMUBOD9ByXj5%2FqAC7oksAiEAyWYmPCXbIhJKURtSNpaYgwcKB8dwq5%2BX3OpEN%2B%2BEpckqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwlS8tCdQU%2B57NLSrcA%2FYO8OsbJq%2FsZTWFTbUBABKjyE1j%2FrKzdDBmREhx58ZPF9GvUjovCu4P5U9nkc2UbNAInia8QywNMqBG2ilgXIxQKq2Aczt3gku1XmnlumH3tRFsv2UDwqe5wrdawuVcg0slctw0NPDcs%2BIGFKPm9%2FfQtsg8lQ76b%2FPtaRQnFSmcnFH4lg%2Fkc%2B29EOreA9BvTOtQ9MI%2BGN2tS3m1qejJtbHJpBHx591%2FY3LYHCfqg%2BC5x85krbXEET%2BSjoFtMcVdm%2BNh%2FKMi%2FUyb520Wea7zJNzprnyPWQu8QeXWOCwW8BlpX2KdDCVETa1z6vEbW7L82ZwSt4AFodx%2Fw5J59uaF8IWuNeIPatK2v6Q2Q7iDJljZnJSoSeNtjML3OMrUj3Eg6vWkZUYZs4nHLf%2B7eOJwkElLW%2BCa7I9ymP08Pojw9iUQSQCAVlxoTSC7QbLTKnyt4NfhzrlVVzgOn9L8EhFDLVQ%2FRyBsIyGk2yLNDSrZXKTfVx9NsGikjVx4MbAS2WMUZ1JsWviaMa78QV9YS8Pc8rdBa22yEh6ZFSFjiquxMiMul1Zo3oDu3xrmyR4wyUNU9gL4x4L%2BmHXA7ZALhEoQUOv%2Bo0yZuPJg9eQ7W5BqG2SQwWPa7Zp0G7skbuhHMPqy38QGOqUBJvw01b6Q4%2BjublI3cw9d2Y%2BvZIQ%2FbCd2aMd6NmOG0zqeHw9wXg7ABaMKBR9ZUbqIpwdGLGgTrgETYQYInzBJ7TDI%2Bl%2B%2FuUys76Wc0VjcZwtz99X0ITAEIPV7Op7WV7%2FE5%2FIaJm2a%2FkMXqbfJ%2FAUypA35gJjYP9PrOZSzShyqfRT9ib9XgUkhDHtUTF4OMkX9eEWUMc8CUn5gMMQZvye2IATLxMsZ&X-Amz-Signature=39182132576fabfb6d5ae8f03fa71e3865b3e2783f3521ac3c5ab5942c6c4c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
