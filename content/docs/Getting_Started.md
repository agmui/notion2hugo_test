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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XFNAM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCBOm7quIXhZ4eGj3wo4JdI98nMUtrvWrB%2Bm9MzkSxX%2BwIgPVXHDGaf81KfRaTBvbY4hI0of1L1f%2BxNzWwwlVle9coq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZ4Zd5GT70zN5OfyyrcA3XlxRKqqpeC4M02BrS%2B3cKFp8I4VZfcqpjz3HbEUW4MwOzTuSZ1AX4jocZzJuirtzpINDWaYY8X4O4ht3s0W%2FhFvhHspLyU5Zd0pyUrCSl%2BOJBWWg0eGKiJ3Y9LgiyAHffEh4qqwVb0KnNm3o3hSNZ9kwqNLLi4f4orif9eLZYXnAOdliF%2FrWy095bOJXwf3WOVuo%2BLhVVEg7qVwg4Ivnyr8iWBCAECqCKFQfxlOKD3ryZKp93RG7AP8Fqk5Swa592z7pw%2B3A5POLh8UTqHfEnI3xT3Ct6TAl9s6d%2F8AEMRLTuNar2Oc1Ur0O76jBaM3cwWZt9FgRysQNhFqeYCVeWVwx%2FrTGhaZKmexGC4EX6Bs0lLn6g0UdIlMBUaPRmrKGK6Nkqs%2FSixN573PRShVTchED0OTP2t47skyZutUR7Q4SVyb6ODg87qLooF9MiaxBjfJc0Oh87odNWYwDc87%2BC%2FiK7CCdjd5wxqYn7Y9skmMcGsBFYGBbGPFhzPQfoJeqZklOiIcvUaQmCBU9XjL5P%2F5Yr8EgDgTAuguzvLQYRdSaiR3saazzYs2osPo5eI5EmrttCThDnzDmNL8NwGAICistCXeDT1i8Le1cDksCVUnTDRposATasbN1dWMLjrh8QGOqUBK8ZFJfE77MyJnXlKEAyVxop5Mvr0SPtIgLxqhGx2eJNU0rbBTD187rLEgUVp07GlmDEOb9S90KdPDe2Fa358kSWBonPyHPKH6mj3AjxxZSgxXHHxgqbuOnqoP%2BNsQWEr3lnM4d4F%2BbQTz%2FFYbjllb9ujUjgrS8BAH5e8yTGmEvLLXTA8e%2FBXs2qxg4HI5rDKs%2BwNxNQs6C7p7lsK%2BEC6NDP72BZm&X-Amz-Signature=61d25448fcc1cf00d2713b807912f9b890260d340947cc0cdda004f05a9ecaed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XFNAM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCBOm7quIXhZ4eGj3wo4JdI98nMUtrvWrB%2Bm9MzkSxX%2BwIgPVXHDGaf81KfRaTBvbY4hI0of1L1f%2BxNzWwwlVle9coq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZ4Zd5GT70zN5OfyyrcA3XlxRKqqpeC4M02BrS%2B3cKFp8I4VZfcqpjz3HbEUW4MwOzTuSZ1AX4jocZzJuirtzpINDWaYY8X4O4ht3s0W%2FhFvhHspLyU5Zd0pyUrCSl%2BOJBWWg0eGKiJ3Y9LgiyAHffEh4qqwVb0KnNm3o3hSNZ9kwqNLLi4f4orif9eLZYXnAOdliF%2FrWy095bOJXwf3WOVuo%2BLhVVEg7qVwg4Ivnyr8iWBCAECqCKFQfxlOKD3ryZKp93RG7AP8Fqk5Swa592z7pw%2B3A5POLh8UTqHfEnI3xT3Ct6TAl9s6d%2F8AEMRLTuNar2Oc1Ur0O76jBaM3cwWZt9FgRysQNhFqeYCVeWVwx%2FrTGhaZKmexGC4EX6Bs0lLn6g0UdIlMBUaPRmrKGK6Nkqs%2FSixN573PRShVTchED0OTP2t47skyZutUR7Q4SVyb6ODg87qLooF9MiaxBjfJc0Oh87odNWYwDc87%2BC%2FiK7CCdjd5wxqYn7Y9skmMcGsBFYGBbGPFhzPQfoJeqZklOiIcvUaQmCBU9XjL5P%2F5Yr8EgDgTAuguzvLQYRdSaiR3saazzYs2osPo5eI5EmrttCThDnzDmNL8NwGAICistCXeDT1i8Le1cDksCVUnTDRposATasbN1dWMLjrh8QGOqUBK8ZFJfE77MyJnXlKEAyVxop5Mvr0SPtIgLxqhGx2eJNU0rbBTD187rLEgUVp07GlmDEOb9S90KdPDe2Fa358kSWBonPyHPKH6mj3AjxxZSgxXHHxgqbuOnqoP%2BNsQWEr3lnM4d4F%2BbQTz%2FFYbjllb9ujUjgrS8BAH5e8yTGmEvLLXTA8e%2FBXs2qxg4HI5rDKs%2BwNxNQs6C7p7lsK%2BEC6NDP72BZm&X-Amz-Signature=204edcab3cfac030acb82492d6c75bbcc9885c885f00b4f17b2d11aa540c863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XFNAM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCBOm7quIXhZ4eGj3wo4JdI98nMUtrvWrB%2Bm9MzkSxX%2BwIgPVXHDGaf81KfRaTBvbY4hI0of1L1f%2BxNzWwwlVle9coq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZ4Zd5GT70zN5OfyyrcA3XlxRKqqpeC4M02BrS%2B3cKFp8I4VZfcqpjz3HbEUW4MwOzTuSZ1AX4jocZzJuirtzpINDWaYY8X4O4ht3s0W%2FhFvhHspLyU5Zd0pyUrCSl%2BOJBWWg0eGKiJ3Y9LgiyAHffEh4qqwVb0KnNm3o3hSNZ9kwqNLLi4f4orif9eLZYXnAOdliF%2FrWy095bOJXwf3WOVuo%2BLhVVEg7qVwg4Ivnyr8iWBCAECqCKFQfxlOKD3ryZKp93RG7AP8Fqk5Swa592z7pw%2B3A5POLh8UTqHfEnI3xT3Ct6TAl9s6d%2F8AEMRLTuNar2Oc1Ur0O76jBaM3cwWZt9FgRysQNhFqeYCVeWVwx%2FrTGhaZKmexGC4EX6Bs0lLn6g0UdIlMBUaPRmrKGK6Nkqs%2FSixN573PRShVTchED0OTP2t47skyZutUR7Q4SVyb6ODg87qLooF9MiaxBjfJc0Oh87odNWYwDc87%2BC%2FiK7CCdjd5wxqYn7Y9skmMcGsBFYGBbGPFhzPQfoJeqZklOiIcvUaQmCBU9XjL5P%2F5Yr8EgDgTAuguzvLQYRdSaiR3saazzYs2osPo5eI5EmrttCThDnzDmNL8NwGAICistCXeDT1i8Le1cDksCVUnTDRposATasbN1dWMLjrh8QGOqUBK8ZFJfE77MyJnXlKEAyVxop5Mvr0SPtIgLxqhGx2eJNU0rbBTD187rLEgUVp07GlmDEOb9S90KdPDe2Fa358kSWBonPyHPKH6mj3AjxxZSgxXHHxgqbuOnqoP%2BNsQWEr3lnM4d4F%2BbQTz%2FFYbjllb9ujUjgrS8BAH5e8yTGmEvLLXTA8e%2FBXs2qxg4HI5rDKs%2BwNxNQs6C7p7lsK%2BEC6NDP72BZm&X-Amz-Signature=74e9c1b0f4a602e1b5c0263a08991f10de8aca8669ab7c5ededf265d06a5a3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USOL2ZKP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQD0yXE60O4jir1kNLlbPf2vmzL9D2lsSfmV3Z8ta0bCLgIgMqMQ0H%2F4Zi9sLuhL18x88QkzPf5SPdaDZwsYEQ9MLMQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLeBdqnItQL%2BR8y8circA3cEkj2%2BSWu4C6eEc602LDkFa%2Bq4WSKRoH0%2B7PS3YtkHDcGausuAP6DRO9WfNuB%2Bja97bzCMTf61AjuQKiWxAX2uaUElsZAa1hiBMiSDPjomz7tW7mha1Lj4iJenWtIfLOKuoHWhe9Oh1cL%2FCtTs7%2FOcZZJwKh7zsKBjcFpY0ctae662gwhS58ED0M375n4oqJL%2FnSxtr1PR%2BTl4ecYXYHSs9jpKenTRqhB0eR75U8%2FvBM0MFosXMwhJRv9U8g1lW4ou4qsHGwV9E2rhLpqSmZiaEcfz5Qr4%2FgPpcTuMQEg4Qf5LL%2BHkyhB%2FOrXfhvoDohfbUxAgd53CNNFUtvt8H1W0irzlSMjJKwu0581HB9SQOQIVk%2FhAIH6ICJ%2FVkPbMsEjhp2WjC3WU2SV3VjwoyB%2Bhxn%2BOZQL2%2BHqa0ANmk62nNJo2i5UL0ef0c5sh%2FzDXb8InYZmauw%2BHa4oNw%2Bp482LLin2YOPc9ewEFYM46Wzw0EPuevVSrjjJ8locOC%2FVAnBZSa9JzvuOHd9v4i%2BotZ5qte6meNqcqfnealXmh5S88n4Z%2FH%2BoZ%2B9bAN1%2BEGeql7MLknd2zibZrnl6b68yAyti6WxLzYwhmLGkwXure2sjLHrmyQ%2F0b4nWBj0RrMKTrh8QGOqUBF5uTZ8hKfthBcleWz7%2Bt4E80BRoe0m3y%2FBHf%2BfKvfOUTzB680GU8kLBJcTDqideojV2VzbM0y%2BmphaBY%2F2ydS3zMPaJgifS16rJb1kR%2FMTM8tx%2F4FfUkSqGw23UAD92OvSlPnIVsUZgvqdc3EsBsQgD6Q6PPAxWCQaoDKsdfwP3JyMaJlVMDbSYvJQ6Ox7aBjpAaKIyWCvkqgy73RyWzrkW6T1TU&X-Amz-Signature=5949ce6f67eb835a9a18e6e95c998e9cbe317d8aaee86c076d21008e9a0ec481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SY2CL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDbCTXixNGxzdV%2Bdmkyh1PEYsfVyZiQ8YgNkwNYB30A2AiAGmd4WjmdRJZR%2BvVnnfo39x3PnMtUladKpbUqeBR%2F2Pyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2Fw7Mn%2BjUICTdRVn3KtwDfg7mryvO29ZTwFH9bvHnKzc2bAATdFsVAlgSjJYP9SeAdrxLvzkRyFLQIPb%2BDj2IeStfRP%2F4XhoGQqk7C3qeNvmML5xy3fyX7a7pYveV4L9CrVgUNjQ7Ueu8Yqtvs%2BnmyCEAzOrJ5BqubxAvPdhopQr%2BQoC4JunscZHbQtlBPvTPxqTEiSqlWIec2ZDlFTdboYj%2BtEeehF3EFfq0t5R7G1rrV2FIDwjd%2FsuY9ZrZhxFaq0%2BSrttXE4tJmA1et28a5ZDoHLJWgUB2moyoDdZlFNAOtwnf2op3MXVL3IJlc70MVXO0fWPonUrfWAl2D0HOZ9444w%2FC%2Fbt4Fp7DojxhVld5B8psqNBB5P5wMyr0oem52y2HpaoosjPNypTgKbMCQW9W3Y4WcNKnyy%2BVoxvCumzA%2BeaGXqYxICCxbMZzLmH9pA3CvUUcbuM9KUgA4Uuya3P7doiisP8mYhH6c%2FIKL3e2m9AeqcLeuXH2GZmiehZ0W0Nu0bXHieSn1uA4HsWJlxxuK2u%2BzP3bveQhZk6VHDVWUHGdIzE0ejiI%2BbrtSAVGpbwYJTg4oj5VZY7KBz%2BXfStyFXpBjTig8Q1bEroAk4kNRm0Zh0Udqp6XTv9A8LIeIwhuYv39Ow%2FLukIw8%2BqHxAY6pgEhfHE5WTuG%2BMjaWAjDPEZZ7a5WrOOQ%2FG2JhV6DFPT9OggGK02R0afgeTyRmJYz4yog3pGp%2Fk%2B%2Bg72VIHzBGxzvNuUtsjfG%2BQT3199WbG91hbAchB%2FEdHCdnjy2DXLB27RglNbncvo7nCSeRUOMvPlrgKd%2Bg7tSjphNkOKultEA0YGwIBf1RsNDKwdESVVdVq85x%2Fh9i%2Bl4ZmrxvO6eQAycWCe0sjsF&X-Amz-Signature=bc4e2fb2b4899cbf8057459a9da4fcc2457ac44d163b133f5523e1e6947c6921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XFNAM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCBOm7quIXhZ4eGj3wo4JdI98nMUtrvWrB%2Bm9MzkSxX%2BwIgPVXHDGaf81KfRaTBvbY4hI0of1L1f%2BxNzWwwlVle9coq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZ4Zd5GT70zN5OfyyrcA3XlxRKqqpeC4M02BrS%2B3cKFp8I4VZfcqpjz3HbEUW4MwOzTuSZ1AX4jocZzJuirtzpINDWaYY8X4O4ht3s0W%2FhFvhHspLyU5Zd0pyUrCSl%2BOJBWWg0eGKiJ3Y9LgiyAHffEh4qqwVb0KnNm3o3hSNZ9kwqNLLi4f4orif9eLZYXnAOdliF%2FrWy095bOJXwf3WOVuo%2BLhVVEg7qVwg4Ivnyr8iWBCAECqCKFQfxlOKD3ryZKp93RG7AP8Fqk5Swa592z7pw%2B3A5POLh8UTqHfEnI3xT3Ct6TAl9s6d%2F8AEMRLTuNar2Oc1Ur0O76jBaM3cwWZt9FgRysQNhFqeYCVeWVwx%2FrTGhaZKmexGC4EX6Bs0lLn6g0UdIlMBUaPRmrKGK6Nkqs%2FSixN573PRShVTchED0OTP2t47skyZutUR7Q4SVyb6ODg87qLooF9MiaxBjfJc0Oh87odNWYwDc87%2BC%2FiK7CCdjd5wxqYn7Y9skmMcGsBFYGBbGPFhzPQfoJeqZklOiIcvUaQmCBU9XjL5P%2F5Yr8EgDgTAuguzvLQYRdSaiR3saazzYs2osPo5eI5EmrttCThDnzDmNL8NwGAICistCXeDT1i8Le1cDksCVUnTDRposATasbN1dWMLjrh8QGOqUBK8ZFJfE77MyJnXlKEAyVxop5Mvr0SPtIgLxqhGx2eJNU0rbBTD187rLEgUVp07GlmDEOb9S90KdPDe2Fa358kSWBonPyHPKH6mj3AjxxZSgxXHHxgqbuOnqoP%2BNsQWEr3lnM4d4F%2BbQTz%2FFYbjllb9ujUjgrS8BAH5e8yTGmEvLLXTA8e%2FBXs2qxg4HI5rDKs%2BwNxNQs6C7p7lsK%2BEC6NDP72BZm&X-Amz-Signature=58bdc202b94b7d07e8213e3bbc48e841a3ab62645d86e3976b3646d50f50ac96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
