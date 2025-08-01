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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY7C74J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc367hmggTvuk0mAkvDbKcjAwW%2FyeiS56jq%2BXYe8wD%2BAiB%2BmlGolSPIFcGZmyttvKtxCjawpqZ5%2FLH0Gps4DdnrrSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ3tstnb4DIO1G%2BGAKtwD%2F8eNtH2lQ8ChK3zx19bmZjP%2FGjXHj%2Frx55o6r2s6BXi2MaCdLOfEdgUwyEuq1ea01W0XEYEjpsMFL3UNW05faZJdnaKU4VgguagE7tN33HmrPW1ua0AS2ALiky8c%2BTarV6CeIWlKRO4otjkdulwVkS5rR8QjBCuPkx5ATJWniw6tuOtD%2Bd%2Bk3DPvYcLghLvkSwyy%2BfLZGlV7ehOGIYt9M8YhcFaUP81As7%2F7c5sekIr5kUShUNHHp%2F7RJlKMIbS9eJ9BYaVte%2BuJm%2F2pBFfrl7LJQpL4vfkbpuIsk%2BB3HF09FYzt7K9Yz4U%2B7Y3DSFpqh8o18hPq8kkgI2o4N%2B3nAsdq0u%2Bb7%2BydsuqRa37q8f7MABPGS95K82PhMx2sAfSwhheJtO16%2BcB2glJW0lH5bY2sd62whheqpUbQGs5FD7VQOKhZxgrwycLedOGYfFxFRJeuElZADzUv%2FzlRe1isRPMdnlk%2FwHoSxj5OxVoE%2FfE4hpsQEePxQVY569wuImgMwiqAy5m04kcu%2FFv7IwTrhCXeAXPmYx0b7JlpzPE%2BbI6muBPABKXNTWNToxB09%2B2KQsegp2v2UmogH1ujUtGw9xDS6x%2FOElZjU208%2BJ6vkYwGl%2FVAuSCKUMfa2xUwk%2B60xAY6pgH4Fcrf7sPlqYGsu3A4OJH5XCzw9y%2Fik9wwWrW9rcDnxlN89M%2FdjxGZ7hJXS5xsagp1ChbIK2s7pmZzV%2FeZSVRV1dlajr62qrTdWQpAQhbE1VMlJJKSrlEorb6MXr2hnqEbkT2mwHYsU%2BK3Z588LmavvbTFVg316pzbNlf7cxpaiHgFg8gZth6Pg4az0Tl8niJerLtLRPaOW8r0tjS2VX6NG2ZfhQnj&X-Amz-Signature=7ab75ebf2da549e4ba550cbd52ede98ccb686b6ed626b3c03ff13b73dcf5704c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY7C74J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc367hmggTvuk0mAkvDbKcjAwW%2FyeiS56jq%2BXYe8wD%2BAiB%2BmlGolSPIFcGZmyttvKtxCjawpqZ5%2FLH0Gps4DdnrrSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ3tstnb4DIO1G%2BGAKtwD%2F8eNtH2lQ8ChK3zx19bmZjP%2FGjXHj%2Frx55o6r2s6BXi2MaCdLOfEdgUwyEuq1ea01W0XEYEjpsMFL3UNW05faZJdnaKU4VgguagE7tN33HmrPW1ua0AS2ALiky8c%2BTarV6CeIWlKRO4otjkdulwVkS5rR8QjBCuPkx5ATJWniw6tuOtD%2Bd%2Bk3DPvYcLghLvkSwyy%2BfLZGlV7ehOGIYt9M8YhcFaUP81As7%2F7c5sekIr5kUShUNHHp%2F7RJlKMIbS9eJ9BYaVte%2BuJm%2F2pBFfrl7LJQpL4vfkbpuIsk%2BB3HF09FYzt7K9Yz4U%2B7Y3DSFpqh8o18hPq8kkgI2o4N%2B3nAsdq0u%2Bb7%2BydsuqRa37q8f7MABPGS95K82PhMx2sAfSwhheJtO16%2BcB2glJW0lH5bY2sd62whheqpUbQGs5FD7VQOKhZxgrwycLedOGYfFxFRJeuElZADzUv%2FzlRe1isRPMdnlk%2FwHoSxj5OxVoE%2FfE4hpsQEePxQVY569wuImgMwiqAy5m04kcu%2FFv7IwTrhCXeAXPmYx0b7JlpzPE%2BbI6muBPABKXNTWNToxB09%2B2KQsegp2v2UmogH1ujUtGw9xDS6x%2FOElZjU208%2BJ6vkYwGl%2FVAuSCKUMfa2xUwk%2B60xAY6pgH4Fcrf7sPlqYGsu3A4OJH5XCzw9y%2Fik9wwWrW9rcDnxlN89M%2FdjxGZ7hJXS5xsagp1ChbIK2s7pmZzV%2FeZSVRV1dlajr62qrTdWQpAQhbE1VMlJJKSrlEorb6MXr2hnqEbkT2mwHYsU%2BK3Z588LmavvbTFVg316pzbNlf7cxpaiHgFg8gZth6Pg4az0Tl8niJerLtLRPaOW8r0tjS2VX6NG2ZfhQnj&X-Amz-Signature=17165411865ad7d5686ba39a11fe5ace9575470d9ed06137b0a180aa46630575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY7C74J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc367hmggTvuk0mAkvDbKcjAwW%2FyeiS56jq%2BXYe8wD%2BAiB%2BmlGolSPIFcGZmyttvKtxCjawpqZ5%2FLH0Gps4DdnrrSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ3tstnb4DIO1G%2BGAKtwD%2F8eNtH2lQ8ChK3zx19bmZjP%2FGjXHj%2Frx55o6r2s6BXi2MaCdLOfEdgUwyEuq1ea01W0XEYEjpsMFL3UNW05faZJdnaKU4VgguagE7tN33HmrPW1ua0AS2ALiky8c%2BTarV6CeIWlKRO4otjkdulwVkS5rR8QjBCuPkx5ATJWniw6tuOtD%2Bd%2Bk3DPvYcLghLvkSwyy%2BfLZGlV7ehOGIYt9M8YhcFaUP81As7%2F7c5sekIr5kUShUNHHp%2F7RJlKMIbS9eJ9BYaVte%2BuJm%2F2pBFfrl7LJQpL4vfkbpuIsk%2BB3HF09FYzt7K9Yz4U%2B7Y3DSFpqh8o18hPq8kkgI2o4N%2B3nAsdq0u%2Bb7%2BydsuqRa37q8f7MABPGS95K82PhMx2sAfSwhheJtO16%2BcB2glJW0lH5bY2sd62whheqpUbQGs5FD7VQOKhZxgrwycLedOGYfFxFRJeuElZADzUv%2FzlRe1isRPMdnlk%2FwHoSxj5OxVoE%2FfE4hpsQEePxQVY569wuImgMwiqAy5m04kcu%2FFv7IwTrhCXeAXPmYx0b7JlpzPE%2BbI6muBPABKXNTWNToxB09%2B2KQsegp2v2UmogH1ujUtGw9xDS6x%2FOElZjU208%2BJ6vkYwGl%2FVAuSCKUMfa2xUwk%2B60xAY6pgH4Fcrf7sPlqYGsu3A4OJH5XCzw9y%2Fik9wwWrW9rcDnxlN89M%2FdjxGZ7hJXS5xsagp1ChbIK2s7pmZzV%2FeZSVRV1dlajr62qrTdWQpAQhbE1VMlJJKSrlEorb6MXr2hnqEbkT2mwHYsU%2BK3Z588LmavvbTFVg316pzbNlf7cxpaiHgFg8gZth6Pg4az0Tl8niJerLtLRPaOW8r0tjS2VX6NG2ZfhQnj&X-Amz-Signature=cf63907350b9feeb4cca67444d71c7b8bd1abfad427c93f7dcb323c446c237c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AYJWOF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYiKHEv84i8orhzdbTZTrEoACQN7IqxZO13b4o%2F%2F0EYAIgfPRnkWqzqihhT1e8rZEF5YRKaDkhd%2By93m0ns%2FbvUwsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBNJNNDAvrFabnVjSrcA9Gt3qA5QGr%2FXw%2FYsHhjTpEVlH%2BWmv37VfXxoH%2BzvAEbN%2FKDz2%2FJSTs%2BTvcAM6JLR40gDNtOpV9Ixwbx7DGauoCocuKmJ%2BtJVsY2Nf%2F12nq1tgltkv5xMgRroH4cltx3XgJi0n3BSzehrJuVNzIu2pzHVd1%2FtJ8ov6GYtYqkn1toMmHBEGx1xwOOLPsW8%2FMKr4ws4AVkhR4c4nZk55jL%2BUeKuLqwgnvP9oeozcZJxGJcytzeP1FSg0WkeYV4wBUwtq%2BGJnr%2Fj1x5CZjhiZYf5JyX2gbonsD6%2FWEcIo2yvnF3%2B%2BW7jR03n8GsA1fMsrAMPsvdUEq9TMJc5BDp9Ltg%2FxTBgIBN8Cs2DXbcvMlQuWL9F1w9T3Ffq%2BA3TCNtS3cqBg6q0irkOc9xhIivHGQnMrKDEYjGIPxMkvowWfbLGxNGeRGZ302p%2BGof6j7G3RXD7cXHDqx6ecsC%2BRpNCRcCwb4KyXXk77Eu9bxYgwSqqUTcHqwEymZpcbKXRfGw025HronTjxPKfrZeOF3UcQfaRa5LZNYOFub4fN%2FQa4BymsElACmDmFvRLEFVCHadHxf76O88a15wJAZvl0cUkIfWjuEPTqGDUSrr1NxWPHGJh5h3L%2B%2FoUb0eJ8B1xUToMLHutMQGOqUBa7lQ6dvqh5QE2nlIzPTwh0btDShBKLgAjmStxq2FYxxx91Z%2BhuiNFQsk6PXjM345m3MehgsD0IX7%2BiQYedihGF9P4acbIzZ07R0niDyHpmmURU2SkS51Pb8V2OK6Kp9t0gX%2BvX7LowGg06f6yGpdaH0CR%2F8PY4wpivtOcnWESeDAbqVES8%2BS4y4jgKVMhipaI3%2BoAar5JK5T6BA27IENFx%2BLch%2BJ&X-Amz-Signature=297886fd0d343b14daea38b99a785504c06300d986c173fd0ca4ffd8293ff940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBUVXAT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM%2BEQax8ujQBmNdBvU9Ncqk8XKMJBUIw9dsEUJ8u2ILAiEAlWDfL5gx5%2Bv8QZvxbk931kcNFjYavfSxj4A4GE8uuIcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8OBD%2F8839dAarHyyrcA%2Frr%2FJjH1azQ4snjVsAhZbpx59tLRPsXskZUfdMmmSvGgnVy55aHXj1RwSs3xNAoEwiVb%2BSQHnWY%2BLyOyFgzWUBWTdfunPgQbtxij3SK0DNKHBW26jDfpvo%2B0et8jU1YjUHkLKCque7yg7e21eDDk4nYVtNqoHHWtQpLPhR7BRK8fU5FHHqXAheEPwzkP%2BPhBVo40N%2BeFyS%2BdV2nTPNEHV8kTlSM3pEhAgJhN7VDaIh1qZBHGvp%2FidAI1FKkPmTPPbqPG%2BV48d0Wf5tEhqFuCtS3RTJIBTI%2BRJ63oE1141aFn1eCVFeiQ81hyUebE5sht3GJcsfJCgUeV00TsEcJhCqglP1kQpSOdB%2FGEUHrHAX%2B4DX5D44NaRRFzIY0pj32YwnM2oiK6nB6UsP%2BILBHRACSYuNp0lQFnpE4TCncIGrCQ6u4ISdjfCuXh%2FjvD9HuEOFfFHZdmpvSfrC7fQCll%2FG6ZkSUfT%2BbrHkakxdI6bAnIXD%2FVTr851kXkaFGC7iv6u9R7UwCja2GjbIc9UgsTe%2F9Op5PBVixesvIA6h6ZC5AIlalAR2tjl1h8f%2FChH1E6BEgHMLu1guInXMe7evwpmWv5pMduanoMRLXD4daje5oDnH7kNJ8JnaD7FH7MI%2FutMQGOqUBM1kXQ5t2AS%2Fo1xHpKHqNWu8OEYb6zpUcuw0d2Nb%2B21%2Bstk2ZuG%2FUt%2B44zoYC2rcJFix%2BKnAyZnlPR1QI6NsBHy0BaaEDO%2FkkBjvlXh4f5kuaIk%2Fp6%2BWuwtj6lhHs9RHsBuZAM91g%2BVamzo6Rvu%2FhvfvCqPb%2BtTzwzrS7J5%2BsiXFtXv2sZSC2VnEgAqnnRbT8kH2LOPflyHAKXhYfh6uHUfWV4QkB&X-Amz-Signature=409074eb7f307de798006eca3757e88be1bb23104d169ad3d7996a7f34297276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY7C74J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc367hmggTvuk0mAkvDbKcjAwW%2FyeiS56jq%2BXYe8wD%2BAiB%2BmlGolSPIFcGZmyttvKtxCjawpqZ5%2FLH0Gps4DdnrrSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ3tstnb4DIO1G%2BGAKtwD%2F8eNtH2lQ8ChK3zx19bmZjP%2FGjXHj%2Frx55o6r2s6BXi2MaCdLOfEdgUwyEuq1ea01W0XEYEjpsMFL3UNW05faZJdnaKU4VgguagE7tN33HmrPW1ua0AS2ALiky8c%2BTarV6CeIWlKRO4otjkdulwVkS5rR8QjBCuPkx5ATJWniw6tuOtD%2Bd%2Bk3DPvYcLghLvkSwyy%2BfLZGlV7ehOGIYt9M8YhcFaUP81As7%2F7c5sekIr5kUShUNHHp%2F7RJlKMIbS9eJ9BYaVte%2BuJm%2F2pBFfrl7LJQpL4vfkbpuIsk%2BB3HF09FYzt7K9Yz4U%2B7Y3DSFpqh8o18hPq8kkgI2o4N%2B3nAsdq0u%2Bb7%2BydsuqRa37q8f7MABPGS95K82PhMx2sAfSwhheJtO16%2BcB2glJW0lH5bY2sd62whheqpUbQGs5FD7VQOKhZxgrwycLedOGYfFxFRJeuElZADzUv%2FzlRe1isRPMdnlk%2FwHoSxj5OxVoE%2FfE4hpsQEePxQVY569wuImgMwiqAy5m04kcu%2FFv7IwTrhCXeAXPmYx0b7JlpzPE%2BbI6muBPABKXNTWNToxB09%2B2KQsegp2v2UmogH1ujUtGw9xDS6x%2FOElZjU208%2BJ6vkYwGl%2FVAuSCKUMfa2xUwk%2B60xAY6pgH4Fcrf7sPlqYGsu3A4OJH5XCzw9y%2Fik9wwWrW9rcDnxlN89M%2FdjxGZ7hJXS5xsagp1ChbIK2s7pmZzV%2FeZSVRV1dlajr62qrTdWQpAQhbE1VMlJJKSrlEorb6MXr2hnqEbkT2mwHYsU%2BK3Z588LmavvbTFVg316pzbNlf7cxpaiHgFg8gZth6Pg4az0Tl8niJerLtLRPaOW8r0tjS2VX6NG2ZfhQnj&X-Amz-Signature=2d9a4f0e233b94b8bfeee7451810addeac0f0f05a6c761973bd4970022a81395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
