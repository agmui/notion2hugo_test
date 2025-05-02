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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRIPGY5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHUoy7Jbx8xgeo96JVBbN%2F4mizBhRITmDo9Mh7zdN6XBAiEAnv2ArcG7qE2LqTVc2nOPcdOC6jfVZzYiCINkLLUq%2FGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWXO9ImGAz74UrRaSrcAzAVGroSWV8vA1cDm86%2F3%2F8CHlXdTkrSa%2FS2Wrsm0ZCLoXPzjLUVQ2iHV8bfHzvja7KzlFpOnfmZdfQccCYwKyHccV4teIexrkXB47ua7orZDBl50TvjXg4tXQ0oHrWiRaigFZeh8%2F2t6StDd4dqKwDaf0KgIMkcaJ%2FpYqgmTkb8KGdyEU5Va4aFshx7n865gmDNPycRYEjkRS7xKUVLJ1ygTcgUtjcN2NcXWJwJJ0HyfxpZvO8XKNhsZBVVL0Azai7Eo5XJyr4Bz8hBzpv4WAZkAVUw5XAsLatSd9Zn%2FqWL4T74q2agbJlpaZhR0A0%2FtaGE7AzgV5ENB7%2FPLopU51KSSRc2b87P5rhFoRzd%2BSnJeTxO8CS9ApJsdKH7EEVcDoc64wBYaPWSBvC%2FzJ0fBjQmAHjanBsZYb%2BnljfBO9EL%2FlfduKhHuqnybZlYGsE5HE55tp0A6NwdTNQbyatEKt2RfqVzL2VzyMwnldO7np0SupA97BLkMC8EodwfdhYQIK4U33sF3lq3T7iaxe2FdmDOJc9n68ZQapNW3twhx0OSwe8Vk69NZAUUi9cep3uX0SW8xu32RemwSr0cQvFSVUZvnro9GMQWhNIyrXnzl8IUxeZTZkMGD9zO1ZnIMO%2F00cAGOqUBHSM%2FOK%2BYt5m%2FgOwsUZ0qaXzzHbtMPCyroc14ijtqUFuBdNbp7ySRTahgZAxn5hyiBdk%2BWEzaoPF9Iux8%2Ftnom7GzwMvJV2F8qZ4kT%2F9q1hB7R4kQTpcZkgLxEcBm0nfqHgG43pySfe7ckA7m%2FQ39no344s5pnXRhoXxpBJJ%2BZYX2TumC1EplpmCz6njwQPjRjBpwwMDtRGNAIlAoCwP6%2FNHgoDpM&X-Amz-Signature=4a05a589dd3130981e9fce314fc550e39d8884f98a330f84d16dc8eb58d8d989&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRIPGY5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHUoy7Jbx8xgeo96JVBbN%2F4mizBhRITmDo9Mh7zdN6XBAiEAnv2ArcG7qE2LqTVc2nOPcdOC6jfVZzYiCINkLLUq%2FGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWXO9ImGAz74UrRaSrcAzAVGroSWV8vA1cDm86%2F3%2F8CHlXdTkrSa%2FS2Wrsm0ZCLoXPzjLUVQ2iHV8bfHzvja7KzlFpOnfmZdfQccCYwKyHccV4teIexrkXB47ua7orZDBl50TvjXg4tXQ0oHrWiRaigFZeh8%2F2t6StDd4dqKwDaf0KgIMkcaJ%2FpYqgmTkb8KGdyEU5Va4aFshx7n865gmDNPycRYEjkRS7xKUVLJ1ygTcgUtjcN2NcXWJwJJ0HyfxpZvO8XKNhsZBVVL0Azai7Eo5XJyr4Bz8hBzpv4WAZkAVUw5XAsLatSd9Zn%2FqWL4T74q2agbJlpaZhR0A0%2FtaGE7AzgV5ENB7%2FPLopU51KSSRc2b87P5rhFoRzd%2BSnJeTxO8CS9ApJsdKH7EEVcDoc64wBYaPWSBvC%2FzJ0fBjQmAHjanBsZYb%2BnljfBO9EL%2FlfduKhHuqnybZlYGsE5HE55tp0A6NwdTNQbyatEKt2RfqVzL2VzyMwnldO7np0SupA97BLkMC8EodwfdhYQIK4U33sF3lq3T7iaxe2FdmDOJc9n68ZQapNW3twhx0OSwe8Vk69NZAUUi9cep3uX0SW8xu32RemwSr0cQvFSVUZvnro9GMQWhNIyrXnzl8IUxeZTZkMGD9zO1ZnIMO%2F00cAGOqUBHSM%2FOK%2BYt5m%2FgOwsUZ0qaXzzHbtMPCyroc14ijtqUFuBdNbp7ySRTahgZAxn5hyiBdk%2BWEzaoPF9Iux8%2Ftnom7GzwMvJV2F8qZ4kT%2F9q1hB7R4kQTpcZkgLxEcBm0nfqHgG43pySfe7ckA7m%2FQ39no344s5pnXRhoXxpBJJ%2BZYX2TumC1EplpmCz6njwQPjRjBpwwMDtRGNAIlAoCwP6%2FNHgoDpM&X-Amz-Signature=e378f3d73e2f1efb41d6213b8afbd1a3913c5b06a19f209abdc9c67524201d81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRIPGY5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHUoy7Jbx8xgeo96JVBbN%2F4mizBhRITmDo9Mh7zdN6XBAiEAnv2ArcG7qE2LqTVc2nOPcdOC6jfVZzYiCINkLLUq%2FGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWXO9ImGAz74UrRaSrcAzAVGroSWV8vA1cDm86%2F3%2F8CHlXdTkrSa%2FS2Wrsm0ZCLoXPzjLUVQ2iHV8bfHzvja7KzlFpOnfmZdfQccCYwKyHccV4teIexrkXB47ua7orZDBl50TvjXg4tXQ0oHrWiRaigFZeh8%2F2t6StDd4dqKwDaf0KgIMkcaJ%2FpYqgmTkb8KGdyEU5Va4aFshx7n865gmDNPycRYEjkRS7xKUVLJ1ygTcgUtjcN2NcXWJwJJ0HyfxpZvO8XKNhsZBVVL0Azai7Eo5XJyr4Bz8hBzpv4WAZkAVUw5XAsLatSd9Zn%2FqWL4T74q2agbJlpaZhR0A0%2FtaGE7AzgV5ENB7%2FPLopU51KSSRc2b87P5rhFoRzd%2BSnJeTxO8CS9ApJsdKH7EEVcDoc64wBYaPWSBvC%2FzJ0fBjQmAHjanBsZYb%2BnljfBO9EL%2FlfduKhHuqnybZlYGsE5HE55tp0A6NwdTNQbyatEKt2RfqVzL2VzyMwnldO7np0SupA97BLkMC8EodwfdhYQIK4U33sF3lq3T7iaxe2FdmDOJc9n68ZQapNW3twhx0OSwe8Vk69NZAUUi9cep3uX0SW8xu32RemwSr0cQvFSVUZvnro9GMQWhNIyrXnzl8IUxeZTZkMGD9zO1ZnIMO%2F00cAGOqUBHSM%2FOK%2BYt5m%2FgOwsUZ0qaXzzHbtMPCyroc14ijtqUFuBdNbp7ySRTahgZAxn5hyiBdk%2BWEzaoPF9Iux8%2Ftnom7GzwMvJV2F8qZ4kT%2F9q1hB7R4kQTpcZkgLxEcBm0nfqHgG43pySfe7ckA7m%2FQ39no344s5pnXRhoXxpBJJ%2BZYX2TumC1EplpmCz6njwQPjRjBpwwMDtRGNAIlAoCwP6%2FNHgoDpM&X-Amz-Signature=3393877d449951afe1aa23be3ce0fed74988e6765dfc7ba3c5c8e45119c4a3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNSOU5E%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCqZpEpQQNPw6UjoXKxNeI0hXRcxhC4NeZbWAqhdbYdVQIhALhzQWHddsoc4VcTE0hjc%2FI3FsLybrKXG7%2BRcDqoGLFFKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjnn2GVwG6WbdHq7cq3AOVaq9bN3QHjCfOTYvDXOoOOQdkidxUvD8LTNED2Ae1FxAOEHmpqNbmmf%2B%2FX8QQpNAs6CBEvb%2BMHZ1ea9XEQarNXPcCpf44ZJU19HF%2FEodF8gkggfSqL0tD8S6a1%2BuK9042zhPAEWXgPks3zMbLRHwOG6CiGvmJjKsdQaqqT6CjTtnmUNS%2B%2F4Z9pl8z%2BhpPhVDuZPjScdRwno2C7SeLUGu%2FoIBA8v20XNDa7tOeo8N2B6IIGk6I2AAlrPLYprxrbFtLydx3dQ4NB%2F5wTmenLyCzYqflPtNhPbf0TBJNvULA%2FnQVwBdRZB9b%2BmQlig0ZdkcaDA%2BUXbjZEL9I0Rrzn7GBlg6jEoSLs%2Bvz6g95z0YK23bIBTJ%2BQE%2BYsVLFR7tIM%2BQYR6b9G3TBPH%2BLETEn8KODkMPrvGuA65cifA62tiBFdxSFwrIh33kSQu19KhR2z66um0GfPMx%2FbO6YIUYy2a3gsxwu4qK5F6qzUmyxnprt1KHi2OcxtD6l4wru20y%2B6lFV8XHWLCRLLkws3wvRsaYDeTJTEQx7JZT6aR2wyUklyZWFBtj55nkuyoI4ANApTKEs4CBP9upz54fe8%2B4Ca3jg%2FU96gz%2Bj5V5HQ7AyVxi7eys856jbubdcv8ZwPDDJ9NHABjqkAcTRKC0z9VaA5W42BcRt7kQzNSlRqOmB4SDO5XlHFkaOyTya0JCj%2FGDg7bw5jTjdJXGM3f0UQtqRBKTaJFfZiacoLdcLWIaWm5tCiGAq7XZ%2BxER%2FyAOKYSaaTE2cm%2BuKSgDohvoq9stDNrhcXTwQqSdtJbfwuD6FgDuZcyOyhhA1nsCkpUfmhcRK55RUFFdEmr0wAGdGTsh0cwdsGBn0n6%2FgUqlO&X-Amz-Signature=c170a9587c024c591fa3dc705df23c66c4f38d4eaed202bb2598453f02876669&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJEBJML%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDGDEdwiaMk8eIT0ztiO4kxpdYEmCKHRFuKRo5LOBaQ8QIgXdVJTyBQdDdmS8%2BjnVUv6QqnjIG01PSNOHp2vN%2ByJKoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH3yQ7jom0pqxfupCrcA1%2Fk%2B8XvINUKwt8BgfdBt8fGm9i6J1qTCrWOu3lg7uTFPrE0dZTurST%2Fl2zpUNFLR2P%2BGGZqZTtshHCYEIyRFBFslD6Jg%2Fossbk3yzYbsaw8Kf61QD2hqsbAh0GVCT6XICWGrEZZQlCLbup2E8SYxWVYrxNJvV2VsC7fhYKZcg6%2Bb%2BVclYg4aT%2BFiPN6%2FgBMGg7rmEacTmVGIRSvuN4nqASdZcR4kRTSPqbuBp5mVLbBusAvCO7YevrEFxIDyzpPwLio0KzxgiQoizMCmQ2TwJ0SA%2F9pkcPBMrgFcIrUO926yM2b0gnKvnEZpOEzOvyCLoqtGjDMX7F4tBV9BurH9ooJOr5pbPvIrnUyjv8IGk0Hpm5X1sSvaw%2FOTJx3K6zt9KtYTmm9Qj87hDvDTbDE3qPLqpM726oVv%2BVqLTZNpH0tWLZaiSO%2BdUB7ga3l26%2B%2BqtRNkh%2F2bQSkIiuR0JK2IbcJM27RLuqXDijcmAjag1sBwDEMY6PhbjXnqdWzL54M1OfwRpsbxIhNMVpRllJlX50SNX%2FcPTxgBKm%2BqQzb%2FC%2Bt1fZeQI5es8RliS2mXytk7ckAb3tDXWIbO5qXqNypG8SH7opAOS0B9LyYLlMJXt58YCR2AO%2Fa71uPrAxzMMb00cAGOqUBqpZuVLJf0tUQmwSm%2BX9a24HKKl%2F17vFq1CcOdqsEovAF602qMO7%2B1sZZJ0VdjaEgSP3n0FnDl2Lts7TD2aSp8URhrhQD3uhWQQdDl3M0OepnC%2Fl7y8Z%2BI8RnoNU7rlXIVSYXSnUb1HFKHS6uwhlhR%2F%2F%2F1Px6ysm2j4xyE4O0%2FCVFZhA8YeY0QjuTz25xYzbgvW0upte%2Fi%2B8kwc6OQmjytqP9B6pI&X-Amz-Signature=a37a6a278496f1490bd4b2f6d71f7483d5fa48afbb1a3e50acd7828b87bfcbea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRIPGY5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHUoy7Jbx8xgeo96JVBbN%2F4mizBhRITmDo9Mh7zdN6XBAiEAnv2ArcG7qE2LqTVc2nOPcdOC6jfVZzYiCINkLLUq%2FGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWXO9ImGAz74UrRaSrcAzAVGroSWV8vA1cDm86%2F3%2F8CHlXdTkrSa%2FS2Wrsm0ZCLoXPzjLUVQ2iHV8bfHzvja7KzlFpOnfmZdfQccCYwKyHccV4teIexrkXB47ua7orZDBl50TvjXg4tXQ0oHrWiRaigFZeh8%2F2t6StDd4dqKwDaf0KgIMkcaJ%2FpYqgmTkb8KGdyEU5Va4aFshx7n865gmDNPycRYEjkRS7xKUVLJ1ygTcgUtjcN2NcXWJwJJ0HyfxpZvO8XKNhsZBVVL0Azai7Eo5XJyr4Bz8hBzpv4WAZkAVUw5XAsLatSd9Zn%2FqWL4T74q2agbJlpaZhR0A0%2FtaGE7AzgV5ENB7%2FPLopU51KSSRc2b87P5rhFoRzd%2BSnJeTxO8CS9ApJsdKH7EEVcDoc64wBYaPWSBvC%2FzJ0fBjQmAHjanBsZYb%2BnljfBO9EL%2FlfduKhHuqnybZlYGsE5HE55tp0A6NwdTNQbyatEKt2RfqVzL2VzyMwnldO7np0SupA97BLkMC8EodwfdhYQIK4U33sF3lq3T7iaxe2FdmDOJc9n68ZQapNW3twhx0OSwe8Vk69NZAUUi9cep3uX0SW8xu32RemwSr0cQvFSVUZvnro9GMQWhNIyrXnzl8IUxeZTZkMGD9zO1ZnIMO%2F00cAGOqUBHSM%2FOK%2BYt5m%2FgOwsUZ0qaXzzHbtMPCyroc14ijtqUFuBdNbp7ySRTahgZAxn5hyiBdk%2BWEzaoPF9Iux8%2Ftnom7GzwMvJV2F8qZ4kT%2F9q1hB7R4kQTpcZkgLxEcBm0nfqHgG43pySfe7ckA7m%2FQ39no344s5pnXRhoXxpBJJ%2BZYX2TumC1EplpmCz6njwQPjRjBpwwMDtRGNAIlAoCwP6%2FNHgoDpM&X-Amz-Signature=e26033e9d7b9e20737f7737cc93984961f001830efa920f286fb7e000d335e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
