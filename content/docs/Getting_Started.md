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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEPKU3Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdH0eg%2F5Mfd28l6ZWFrOhlSyMaGF%2FpsHny8NuloAIlCgIhANgG7uZbd3bhhc5Jsos7DkvVZjfRaskM3J94inTTqx6cKv8DCH8QABoMNjM3NDIzMTgzODA1IgxvFhzc4Ec%2BfpIiGocq3ANFKiv4QGrdgr9BDZpK8qhKNRUTajzKbh02dw9a5J2H82T1kwSg3s5eLDuf6zIRFxr6B7vHKEMs%2BbHZnt0GCu2FU7iAlGhLAjwSDDLYHARj5KE%2BuyzBgDpReIpER2HUgMflhdGAJ8f5oUlNsQJ5D5RYaT5FAgPhJnEOMbnZAJb9fuV9A2BrffciD1ofcIZwDq1N1wqG9yd0FvFSvdr4zqgu9jwGWW6pexCLShDib%2FBrL%2BoACcxhDF8DNSMTtM%2FnbeqAZ%2FpEZ7U%2BlL%2B5IibUpjAjduYf59rp9LsWTfTw1Q2HgsHXbKfK%2FDk5pvpVapQCHo8PEEMXFt3ng%2FVXFaUvN4c3RhvMVdPBBq4NAO6%2FLkE0ibv81IYtQ4AIhwNrKaYo7qpu5rvxJ2pmdejH37I7QkklsC00bwVnclvUKBGL0D%2B7wjVUGNGfLrb3I8P6VlFqbKiYVbusxrYieDOF0hJBU78ewStxK2w2HxQLB54qE6GS4c2yVXsk7znj6ti0sfiXUQnplPIlvOocU%2B80Vv6c9dgMkZEXOTzO0fAWvQLPN9GO9JxuxAkphwyHrN6Csud59FarnfUhLVFvYWLIu%2F2YOn1bo7uDEKcOoQHVWnHxFMYupT%2FTN%2BGUdhniCrc%2FTjCUkd7BBjqkAeE0qVfy0LPzmFi8eX06zehc3vL%2BJc5FuzHWjSdvC1u20OcLDABQs%2B1f3HGPk0B52s9Aefy9Vxg9STTgsltLN%2FGbjaW72nsST43V%2FP6FXHLSJ4%2BroOzzoKScUmKgqhNs9%2FrewR7GuuM5DLpdr7Dpt7mNPVCRxUh%2B1WFZHrsSOLXNSoFOtak7EqHmCcKvrL6notCfoKhNoutlOWimWumYPOmKWDP6&X-Amz-Signature=fcbf606c43dfa77459965a6d708b4e112eb0571ab5a7534d3df333b6d1039b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEPKU3Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdH0eg%2F5Mfd28l6ZWFrOhlSyMaGF%2FpsHny8NuloAIlCgIhANgG7uZbd3bhhc5Jsos7DkvVZjfRaskM3J94inTTqx6cKv8DCH8QABoMNjM3NDIzMTgzODA1IgxvFhzc4Ec%2BfpIiGocq3ANFKiv4QGrdgr9BDZpK8qhKNRUTajzKbh02dw9a5J2H82T1kwSg3s5eLDuf6zIRFxr6B7vHKEMs%2BbHZnt0GCu2FU7iAlGhLAjwSDDLYHARj5KE%2BuyzBgDpReIpER2HUgMflhdGAJ8f5oUlNsQJ5D5RYaT5FAgPhJnEOMbnZAJb9fuV9A2BrffciD1ofcIZwDq1N1wqG9yd0FvFSvdr4zqgu9jwGWW6pexCLShDib%2FBrL%2BoACcxhDF8DNSMTtM%2FnbeqAZ%2FpEZ7U%2BlL%2B5IibUpjAjduYf59rp9LsWTfTw1Q2HgsHXbKfK%2FDk5pvpVapQCHo8PEEMXFt3ng%2FVXFaUvN4c3RhvMVdPBBq4NAO6%2FLkE0ibv81IYtQ4AIhwNrKaYo7qpu5rvxJ2pmdejH37I7QkklsC00bwVnclvUKBGL0D%2B7wjVUGNGfLrb3I8P6VlFqbKiYVbusxrYieDOF0hJBU78ewStxK2w2HxQLB54qE6GS4c2yVXsk7znj6ti0sfiXUQnplPIlvOocU%2B80Vv6c9dgMkZEXOTzO0fAWvQLPN9GO9JxuxAkphwyHrN6Csud59FarnfUhLVFvYWLIu%2F2YOn1bo7uDEKcOoQHVWnHxFMYupT%2FTN%2BGUdhniCrc%2FTjCUkd7BBjqkAeE0qVfy0LPzmFi8eX06zehc3vL%2BJc5FuzHWjSdvC1u20OcLDABQs%2B1f3HGPk0B52s9Aefy9Vxg9STTgsltLN%2FGbjaW72nsST43V%2FP6FXHLSJ4%2BroOzzoKScUmKgqhNs9%2FrewR7GuuM5DLpdr7Dpt7mNPVCRxUh%2B1WFZHrsSOLXNSoFOtak7EqHmCcKvrL6notCfoKhNoutlOWimWumYPOmKWDP6&X-Amz-Signature=29a11786c410700b126035ea5835d78a5578aa9b533eec0499a79278aa837fce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEPKU3Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdH0eg%2F5Mfd28l6ZWFrOhlSyMaGF%2FpsHny8NuloAIlCgIhANgG7uZbd3bhhc5Jsos7DkvVZjfRaskM3J94inTTqx6cKv8DCH8QABoMNjM3NDIzMTgzODA1IgxvFhzc4Ec%2BfpIiGocq3ANFKiv4QGrdgr9BDZpK8qhKNRUTajzKbh02dw9a5J2H82T1kwSg3s5eLDuf6zIRFxr6B7vHKEMs%2BbHZnt0GCu2FU7iAlGhLAjwSDDLYHARj5KE%2BuyzBgDpReIpER2HUgMflhdGAJ8f5oUlNsQJ5D5RYaT5FAgPhJnEOMbnZAJb9fuV9A2BrffciD1ofcIZwDq1N1wqG9yd0FvFSvdr4zqgu9jwGWW6pexCLShDib%2FBrL%2BoACcxhDF8DNSMTtM%2FnbeqAZ%2FpEZ7U%2BlL%2B5IibUpjAjduYf59rp9LsWTfTw1Q2HgsHXbKfK%2FDk5pvpVapQCHo8PEEMXFt3ng%2FVXFaUvN4c3RhvMVdPBBq4NAO6%2FLkE0ibv81IYtQ4AIhwNrKaYo7qpu5rvxJ2pmdejH37I7QkklsC00bwVnclvUKBGL0D%2B7wjVUGNGfLrb3I8P6VlFqbKiYVbusxrYieDOF0hJBU78ewStxK2w2HxQLB54qE6GS4c2yVXsk7znj6ti0sfiXUQnplPIlvOocU%2B80Vv6c9dgMkZEXOTzO0fAWvQLPN9GO9JxuxAkphwyHrN6Csud59FarnfUhLVFvYWLIu%2F2YOn1bo7uDEKcOoQHVWnHxFMYupT%2FTN%2BGUdhniCrc%2FTjCUkd7BBjqkAeE0qVfy0LPzmFi8eX06zehc3vL%2BJc5FuzHWjSdvC1u20OcLDABQs%2B1f3HGPk0B52s9Aefy9Vxg9STTgsltLN%2FGbjaW72nsST43V%2FP6FXHLSJ4%2BroOzzoKScUmKgqhNs9%2FrewR7GuuM5DLpdr7Dpt7mNPVCRxUh%2B1WFZHrsSOLXNSoFOtak7EqHmCcKvrL6notCfoKhNoutlOWimWumYPOmKWDP6&X-Amz-Signature=716bfb0070907ff2f6c5978c5489634240ef4f44eab2a95896660f6da20388a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYR2VBMB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlcnAvHD9AMOSJoYiRMtbK3JC17OOnazNOsryKzu%2BvgAiEAu74tuY%2FD2SRw3QbzboA9Vs%2F30rfgm5xdrQfHEexiTLIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIUcbVFHT4UL4qC6wyrcAyVWzu25tf2cJgfcQedTvef0JX6ftADMMRqc5Kf56Kaa4DjTIvlXK4UkS0MqjMsxN53gMLAnQVdBXQUvsn7eXZXCRQV5SfeuHwDZZHk18%2BDq9RrmYgT0uKb9W%2BUSAIP9j3d4lVokBW8u7%2FhGM1ygb%2F2yAvXu5I3s39WQQpzBK32T0g47edOBEYZEV4KwA9g6PcCWzqBLPHSIfkG%2BpICx523JyBiThRX4qRpa%2B3Z8%2FvCoacD5Sdhts8F1AWgGaUFvKyvFkawObrVOobllHuJcsjolZZmsTBldNFN2xMJe9UKhLFBLsZOf2jaK%2B7XT2Vwj%2FKvHSLsAXweHhiagWG%2B86CHIMXF%2BK0FZ4%2BwNWQ3oyZsNaLyfFgmC53wIMNQC97jYErJ839jJOY%2BlC%2FXlBw0vQHsyI9wZh7PHS5KfnglqWgNJiWuAMbw1Hk1Z7s%2BGWMoxe6FmtP86YnSt615OMkvlVgPGusK7jhnJNmHpIRPdznRm%2BsnixjcOyaDHErgxQmRp2goVO11SQu%2BiafQ0EgSgtt37nWspSQhJZ6qzEErzl53Q8vXCmyi82DNcwgwKJ1GP6PrePhdC3%2FrN21N6GNFKhkv5KCK3mexw%2B7GZ0JJEmbXGluUfs7RDJiyukY7VMOOQ3sEGOqUB0AsFdxaxVqCGVMyxYoJ6RXyETrHKURU2XYVa8ejKUMAJADVc949q34o0GrMWeke9%2BPiR1kkSVYFqzgCC2YHolahAA%2BU869WDNza6ZPiuR7AJ8QdCMFFPxvr%2FAy2JM2l4fa2rr5ITTD5WGHpuMS119EUFuCQOoZm4gbwxVTWa3kIXwsfxasdmj9PfSNBSz9kSWpFsxIkdC76FKdxPPnD6pD0OGmhJ&X-Amz-Signature=d040af95507b2ef6dd52e21b8a585bb97dd361ea35c86bc5bb30260433afd2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAJIYHF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFws2eYRXN%2F36WZ1SHEUvYk2MLV0Jm2hrS6NVfcZcrmAAiA6Xs3qwjjYHi3TbMT41yE4rkQl65VK0gxf9qpgefl98Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMMTBXm7g3VMyV6CDTKtwD0hT18%2BgMZt90EzmKYXnn%2BGgvhnUQWgmNLyFa6LZctBhb8d2zJPhmpAihOHKI%2FJpLNcpp%2BsTdpyc3ZrLNOZ00J5%2F8d9nGsFzk0EmZeUn4zMhMuzHWsuTO%2BXDrYYIZFE9MunodJ0%2Fd08SOIC8VKM1MQUYeZkYphGTzwVRjWcVFJxzw%2F%2FJglzL%2F6zQsuXSls6Yh60w1Sq%2BFrrswuICZB9%2BHpEopQZhkfh3wQPZ95UbM6%2F3kVg8c45i02V%2FHDJAjfTIeYs2lrOfC12UYlAd4KNrAyZPAIBwxKPpOAG%2F3Egvr5bTkORTmN8xuSE08a3S%2Bg5SEtHshYxXXRFFHtn9Rwgjz8%2BgoEav4aVchy74cYymyaEiCb%2FlHGajOmUrUv%2FL3nAhAM6JXpaChTTqqHHA01AIS0Acfpm1pRCOP38m6pZ54ZLCK6Op4CKh6ai8ZgJRSyg%2Fk9%2FrCn2W9P93LR0R5XS9fzayLSXzNCvpAcPzY5a5zyfaohrEXOOERHwO1SL5ZGqFYTEuGFg57VaUaFodp9Qo%2FWZstlfAAS7h1%2Bg4LN%2F9h9fLUIOf9Gd9K34KmwCEGyEjD9WNQ0hjScFO6HdAWwo89%2Bdj6z1ENDrqdZV3bmwkhyzqjErRf7%2F8QDJi7GsMw6ZDewQY6pgF82MlC0EuJn%2BY1thGCXcPBBC3HT7pTMdD9L8u0lHBJqrfUI9M1wDyAyUHQO%2FWUaw5q3I%2FBnb6MOwiYaujay8A3iJ%2BPnUpogg4jcTm9wFvJF4xHIzOdx1IidJU93iWaoExP9MjDMjDyre3AK6PzP%2FXpkVhqxgnhAHe6joPRU0cxbnM%2BJMbcl%2FgUkAP8dBr2RJX6LP%2FVufFBD6o9prBKwk%2FtzCSusa1N&X-Amz-Signature=46b102da7f194a7090a32bdc64a5858b24789438fbae4e8c81709008564aad51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEPKU3Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdH0eg%2F5Mfd28l6ZWFrOhlSyMaGF%2FpsHny8NuloAIlCgIhANgG7uZbd3bhhc5Jsos7DkvVZjfRaskM3J94inTTqx6cKv8DCH8QABoMNjM3NDIzMTgzODA1IgxvFhzc4Ec%2BfpIiGocq3ANFKiv4QGrdgr9BDZpK8qhKNRUTajzKbh02dw9a5J2H82T1kwSg3s5eLDuf6zIRFxr6B7vHKEMs%2BbHZnt0GCu2FU7iAlGhLAjwSDDLYHARj5KE%2BuyzBgDpReIpER2HUgMflhdGAJ8f5oUlNsQJ5D5RYaT5FAgPhJnEOMbnZAJb9fuV9A2BrffciD1ofcIZwDq1N1wqG9yd0FvFSvdr4zqgu9jwGWW6pexCLShDib%2FBrL%2BoACcxhDF8DNSMTtM%2FnbeqAZ%2FpEZ7U%2BlL%2B5IibUpjAjduYf59rp9LsWTfTw1Q2HgsHXbKfK%2FDk5pvpVapQCHo8PEEMXFt3ng%2FVXFaUvN4c3RhvMVdPBBq4NAO6%2FLkE0ibv81IYtQ4AIhwNrKaYo7qpu5rvxJ2pmdejH37I7QkklsC00bwVnclvUKBGL0D%2B7wjVUGNGfLrb3I8P6VlFqbKiYVbusxrYieDOF0hJBU78ewStxK2w2HxQLB54qE6GS4c2yVXsk7znj6ti0sfiXUQnplPIlvOocU%2B80Vv6c9dgMkZEXOTzO0fAWvQLPN9GO9JxuxAkphwyHrN6Csud59FarnfUhLVFvYWLIu%2F2YOn1bo7uDEKcOoQHVWnHxFMYupT%2FTN%2BGUdhniCrc%2FTjCUkd7BBjqkAeE0qVfy0LPzmFi8eX06zehc3vL%2BJc5FuzHWjSdvC1u20OcLDABQs%2B1f3HGPk0B52s9Aefy9Vxg9STTgsltLN%2FGbjaW72nsST43V%2FP6FXHLSJ4%2BroOzzoKScUmKgqhNs9%2FrewR7GuuM5DLpdr7Dpt7mNPVCRxUh%2B1WFZHrsSOLXNSoFOtak7EqHmCcKvrL6notCfoKhNoutlOWimWumYPOmKWDP6&X-Amz-Signature=72e1358e7346c35de70b8d044f4295fe832204544827fd937c3d4364b958e33a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
