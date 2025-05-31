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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDYTMXM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3SHXiXea5798kXtyquTF42y%2F%2BNWK4GTSh1swVyh1OEAIgZNN9rviUbhPzrlqsZIiuKCOdZRolI5YqlTZTzxdW7AkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FfgR1DbgSxbKymmircA%2BU9MmpSO%2FRwYueA7GXlX20mxfBu%2BLM4OmwRKoouOvYWl4XRj7KvzuHYcrPxm9MiXbrjn4sxsbhH3rVJ6%2FdyLAJbNBVlD2gRfbPg6eodqvuVEGpxV2Aclaa4EqTN8SziqeHSFaUujt2JS9xRm5243JtlPPJt6q5PR3SqPn4nyQIwVoPCEaIuyXMLec7h%2FrcalwCeayBw2QTVFCd9deslV7lNtIUnmNJDz7hccom3C0IR66krRwhYGsYpdkpLVNUpXM0yedk%2FCismRxuIXNWT5FJzulVNcZgkSA6JkxkeLxzxR2kpSPwLjDGPiWT8M9xQHoFs3IG3CSsKcoItcwXk3cN4VsJKvemlEBLa0kvrKdS1Jz%2Fsx%2FRa8AjejuP6U4zEEzxbz918yIii%2FP%2BoBrnFb91yDSMytup5npIkgNUFWHgwIzduzZJtnNJFAyMcNoxXkysJruBF0quBiZ0IcxjKbmXa2G0jhMQtAJTmC8aaZKLVZ%2BFBshmbIg8CV%2FAdU%2FHVnJbSXO1yRHfF1vPbJO0lrSoUx5D0EhcraAUDldgJEG%2FxouFJ1ZYJAou%2FOfo%2B6Ai5mhqfbqrIpiomDUd2%2Br8bgPXeFMEW2lXvyqYjgBFmCtYWPMYssJsuk7QsRL9yMNKD68EGOqUBHQzXNvbniUDl44x6Fx04Wak8FJd7kha%2Bo54X%2BxyWdAASM2UGwnGuNusARGeDBm5l13eVAj%2BhbLud1HHr5ouCQbzeleJ2dNJYXk2M4WeSYVDn94c45julNrw%2BaAAYLV8hp3V1Uw7GT4TS3s6Zf4Hp5CQ8%2FCVtbSNix9V%2BtFmEbFsv3NbdebVxV6tDfCO%2F%2FdRf0jLWm2BUM67hVsTPPEwWSGUIyDog&X-Amz-Signature=e038fdc07a00fd4bd1c17903ff4bbefdef404286ed5fd3253782e0c4f16b26e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDYTMXM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3SHXiXea5798kXtyquTF42y%2F%2BNWK4GTSh1swVyh1OEAIgZNN9rviUbhPzrlqsZIiuKCOdZRolI5YqlTZTzxdW7AkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FfgR1DbgSxbKymmircA%2BU9MmpSO%2FRwYueA7GXlX20mxfBu%2BLM4OmwRKoouOvYWl4XRj7KvzuHYcrPxm9MiXbrjn4sxsbhH3rVJ6%2FdyLAJbNBVlD2gRfbPg6eodqvuVEGpxV2Aclaa4EqTN8SziqeHSFaUujt2JS9xRm5243JtlPPJt6q5PR3SqPn4nyQIwVoPCEaIuyXMLec7h%2FrcalwCeayBw2QTVFCd9deslV7lNtIUnmNJDz7hccom3C0IR66krRwhYGsYpdkpLVNUpXM0yedk%2FCismRxuIXNWT5FJzulVNcZgkSA6JkxkeLxzxR2kpSPwLjDGPiWT8M9xQHoFs3IG3CSsKcoItcwXk3cN4VsJKvemlEBLa0kvrKdS1Jz%2Fsx%2FRa8AjejuP6U4zEEzxbz918yIii%2FP%2BoBrnFb91yDSMytup5npIkgNUFWHgwIzduzZJtnNJFAyMcNoxXkysJruBF0quBiZ0IcxjKbmXa2G0jhMQtAJTmC8aaZKLVZ%2BFBshmbIg8CV%2FAdU%2FHVnJbSXO1yRHfF1vPbJO0lrSoUx5D0EhcraAUDldgJEG%2FxouFJ1ZYJAou%2FOfo%2B6Ai5mhqfbqrIpiomDUd2%2Br8bgPXeFMEW2lXvyqYjgBFmCtYWPMYssJsuk7QsRL9yMNKD68EGOqUBHQzXNvbniUDl44x6Fx04Wak8FJd7kha%2Bo54X%2BxyWdAASM2UGwnGuNusARGeDBm5l13eVAj%2BhbLud1HHr5ouCQbzeleJ2dNJYXk2M4WeSYVDn94c45julNrw%2BaAAYLV8hp3V1Uw7GT4TS3s6Zf4Hp5CQ8%2FCVtbSNix9V%2BtFmEbFsv3NbdebVxV6tDfCO%2F%2FdRf0jLWm2BUM67hVsTPPEwWSGUIyDog&X-Amz-Signature=a2a51a2a3f5eb5f32218145c532891f7fc35c28cfd9b241f9943a1e82d32de1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDYTMXM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3SHXiXea5798kXtyquTF42y%2F%2BNWK4GTSh1swVyh1OEAIgZNN9rviUbhPzrlqsZIiuKCOdZRolI5YqlTZTzxdW7AkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FfgR1DbgSxbKymmircA%2BU9MmpSO%2FRwYueA7GXlX20mxfBu%2BLM4OmwRKoouOvYWl4XRj7KvzuHYcrPxm9MiXbrjn4sxsbhH3rVJ6%2FdyLAJbNBVlD2gRfbPg6eodqvuVEGpxV2Aclaa4EqTN8SziqeHSFaUujt2JS9xRm5243JtlPPJt6q5PR3SqPn4nyQIwVoPCEaIuyXMLec7h%2FrcalwCeayBw2QTVFCd9deslV7lNtIUnmNJDz7hccom3C0IR66krRwhYGsYpdkpLVNUpXM0yedk%2FCismRxuIXNWT5FJzulVNcZgkSA6JkxkeLxzxR2kpSPwLjDGPiWT8M9xQHoFs3IG3CSsKcoItcwXk3cN4VsJKvemlEBLa0kvrKdS1Jz%2Fsx%2FRa8AjejuP6U4zEEzxbz918yIii%2FP%2BoBrnFb91yDSMytup5npIkgNUFWHgwIzduzZJtnNJFAyMcNoxXkysJruBF0quBiZ0IcxjKbmXa2G0jhMQtAJTmC8aaZKLVZ%2BFBshmbIg8CV%2FAdU%2FHVnJbSXO1yRHfF1vPbJO0lrSoUx5D0EhcraAUDldgJEG%2FxouFJ1ZYJAou%2FOfo%2B6Ai5mhqfbqrIpiomDUd2%2Br8bgPXeFMEW2lXvyqYjgBFmCtYWPMYssJsuk7QsRL9yMNKD68EGOqUBHQzXNvbniUDl44x6Fx04Wak8FJd7kha%2Bo54X%2BxyWdAASM2UGwnGuNusARGeDBm5l13eVAj%2BhbLud1HHr5ouCQbzeleJ2dNJYXk2M4WeSYVDn94c45julNrw%2BaAAYLV8hp3V1Uw7GT4TS3s6Zf4Hp5CQ8%2FCVtbSNix9V%2BtFmEbFsv3NbdebVxV6tDfCO%2F%2FdRf0jLWm2BUM67hVsTPPEwWSGUIyDog&X-Amz-Signature=119b0a2dd4380b89fa3b079a90b3ae607c6b014ad4d02d938a303f24adb5d145&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFOZGQLV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVHc3XCKGQ9i4s%2BSmIgjkg%2BAU6XYqEV1pdN%2BHoZp2h9wIhAJECYhW4CGix%2BzCERvPbIk9bKnUTdK5I9cHA5U5tPAgjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrWm8HbT55jVhu6NIq3APuriC3h3bAjPyaJCcDU%2BOaLQ2MaKRmG3gE660lDl9rKWZYuqMO0j%2BoB%2FS%2BPrWoBFTWwhfdpMhR8KK%2F33YVPipRk2cfE8PrJyS7DkqhBDrat3bajC54sB2wPjLuTXDiESkogSYGmE%2F1RN6aynVrIiYzRVP%2BzH6YJH7aN1EtrjGfTGWL%2BbXuddXEejX7vcwMsJfpwijjfwJj4UP74pr6CRGYE4ZBHUxYM9zuawT6vu3OiqQqU4UNfU1Uu5FneSX8SNWt0VBssyvyYJZk0PeOLw9uKc0kx4o771f%2Bv7P5w3Q8xR8KQcwM8fhZ8Q2%2BXKM%2BuOVNdb%2BJO%2BwSyS1dGAeBQFB3HfteBXkYkUdvc7ZbnjOzyCml4lWg58hngs%2FV5RnwpWnvzyYqIVJQ03GWmA802lJyGkDa%2BEVbQuT5KYvQuh20kb8MshVktyysFhIxLPOsg5mJ6cstIG5wn41F9e%2BDBfAL8ebFQDPRx5aCXNs9XmAIazHdOW60fS4%2BZTCZgg2GD4qT5d%2BxCWvuwUoMFvuN8sjUrq8hClAx3YaYQXcs8LmV7hJjKmWaA%2FvSm6ap4fbyUKH%2BZrM%2F29ljZnurLhxkU4KYnLTX66XumHVaTiCM2hcqzf3bBfDVbfqNm1LwATDrg%2BvBBjqkASvWprjdUM9WsCAvAkoZkHjGcp3LkB%2BTO7VTVF%2BjsMtDNXheisJfybjAV2SR5bWwE1PHd8krer6jfUu2F%2FcNRhIOJFp%2BsLutTdHunmF%2FYDrtfx3EmK7%2BuMpoZqDdcLWEDxxrZlPUigho5eJtJKf5TXl9Swh167uWdi54wV5eAigRSINgCw3d9pATbSy%2BqALyjOHIN5X4J%2BhMp1FMNaxa0gCb8b2z&X-Amz-Signature=4c182991910a4b1878cc83086e1ab3582d83857b301093ecc33eae12b5d53037&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QOZNE6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx3W1QwE5ZA%2Fh1%2B%2FmBaco9KwCUhrAlSuI7yDBhlHGssQIga3ojy%2F9WofLDV31m926ErU8OepY3c1SFg8JTavdEbaMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLju2Ad%2Bo25aEELrryrcA%2BR6aCy21FtLdlI5qoAQTd%2FrqM5tCZmAzTG6%2Fu2o36Jp7vGBkd%2F%2FHSJUD2vlFQ6nxLchwI5C7NBmhARz8MDi5YkvXwYjMnVkMQVOf77pg9FCUCKP%2FeB5gVWZWc0TvdsBNHyIxbC5mgQ6Yoyl8dIbuCzLF67te3rVONEzO9EwGJjXuB7du3qY4x24zyALjJ3lqzE8NbOwLFqg0W3aUEBM7%2BkCv1Hf%2FD4%2FaZg0KK1ZYNbJzhxGQqcJjDcnelb%2Fo7XZHwSXNLSSIyBkv1ba%2B29%2BmmeVqvEqce0sCVSJjpgwRq%2BkxfME2oRRuLmvRicNjjVux0pme8y8uimBkxINumDg1%2BJZit8xvajbQirP4%2Fcagvbi1tGiXCTmPhe2OJTkG0aqPKto5h6yHavWTeOleUmc7xy5QOzdq3tz%2FaAFfWT4ga3NTofjaHD1ShBcKF7RJ8gLsfrk%2F%2BCLptcqGUH3yfsNSELCh8Oo7jv48pfaKcKeRF2MhUtwnpWahsueMaXR6jjqICHUmr44qY%2BMzpEjgwg8OSoYnYkbbK9bTcOwGXutYiuabPwzlMTcAhiZkOd0UGW4nbY1WxH2ViGnsy90poa7TKithzpNqzC%2FHEvsulkPBgkiLy7x9DQUWnt7QbP4MK6E68EGOqUBg8UQf%2BWjLAjaNYuNsWQ24kHvrg2E75FiA1o48cuSQk5%2F2crLoYFqJs37sOcfaf5%2FGCqrV0eZS4B2d%2F35x4tg22NHY%2BzfMg7eAw5bzbY8sdzAJuaAam%2BwdCez13PwsgG%2BsAiwdNXQL6LGcbhTDW1xvUDzlEzIFFTu2ER97Dj75UY7UR23qWWkhrnmWvAoRQ5GqATMY9NVwJ7WNSHygNTIzzXVdfWh&X-Amz-Signature=0f9c638502149628a93c0884ab23ee17a2260d5f128e06aa0ee62f739e43916d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDYTMXM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3SHXiXea5798kXtyquTF42y%2F%2BNWK4GTSh1swVyh1OEAIgZNN9rviUbhPzrlqsZIiuKCOdZRolI5YqlTZTzxdW7AkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FfgR1DbgSxbKymmircA%2BU9MmpSO%2FRwYueA7GXlX20mxfBu%2BLM4OmwRKoouOvYWl4XRj7KvzuHYcrPxm9MiXbrjn4sxsbhH3rVJ6%2FdyLAJbNBVlD2gRfbPg6eodqvuVEGpxV2Aclaa4EqTN8SziqeHSFaUujt2JS9xRm5243JtlPPJt6q5PR3SqPn4nyQIwVoPCEaIuyXMLec7h%2FrcalwCeayBw2QTVFCd9deslV7lNtIUnmNJDz7hccom3C0IR66krRwhYGsYpdkpLVNUpXM0yedk%2FCismRxuIXNWT5FJzulVNcZgkSA6JkxkeLxzxR2kpSPwLjDGPiWT8M9xQHoFs3IG3CSsKcoItcwXk3cN4VsJKvemlEBLa0kvrKdS1Jz%2Fsx%2FRa8AjejuP6U4zEEzxbz918yIii%2FP%2BoBrnFb91yDSMytup5npIkgNUFWHgwIzduzZJtnNJFAyMcNoxXkysJruBF0quBiZ0IcxjKbmXa2G0jhMQtAJTmC8aaZKLVZ%2BFBshmbIg8CV%2FAdU%2FHVnJbSXO1yRHfF1vPbJO0lrSoUx5D0EhcraAUDldgJEG%2FxouFJ1ZYJAou%2FOfo%2B6Ai5mhqfbqrIpiomDUd2%2Br8bgPXeFMEW2lXvyqYjgBFmCtYWPMYssJsuk7QsRL9yMNKD68EGOqUBHQzXNvbniUDl44x6Fx04Wak8FJd7kha%2Bo54X%2BxyWdAASM2UGwnGuNusARGeDBm5l13eVAj%2BhbLud1HHr5ouCQbzeleJ2dNJYXk2M4WeSYVDn94c45julNrw%2BaAAYLV8hp3V1Uw7GT4TS3s6Zf4Hp5CQ8%2FCVtbSNix9V%2BtFmEbFsv3NbdebVxV6tDfCO%2F%2FdRf0jLWm2BUM67hVsTPPEwWSGUIyDog&X-Amz-Signature=34220ebdc7f253bf28455192b0deb9ab4ea463e4614db2a6c6299eaf3853e636&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
