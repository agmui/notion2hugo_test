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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAGOBKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDaT%2FYYaWOiuHp2vL7XqtiSJQbcu9W7Ei733P6zLlssVQIhAO%2BzT1FdbxpTv2SHaQMsXSclSGKj606hdJDPUmN1WuSrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSSIsD%2BeGHXDthkQUq3AMr7jDt5h9vR%2FxN%2ByT3WS4FX7Gr%2BeishxlpzbTBf1ECMrNBuKoeUJfSykfbyE8NGnm%2BCAJreZ1U1mMDra0YXfWV6vzDGt6e%2BMGfudnYbQfQhdXNyLuUgVbqbHJhyJ8SsP9HCGMe9MwLbTgPOzBorR77W6Ikdxl%2BKBvcoHPZdnRVQWNniDt%2Fu1zl1Hy5JHtPBr57GnLMrxLTmUWRJWxtCb%2FU2kecUK7PWovXGD%2FadgOapIYMv89oggNfY4EKcZZ5jwJ5mfo2cWB9Sq2ZJrLlWnWWQkWHLv22gUN9pz6SSgvyLRKITjrkigKRVuAVWKh0sm9bHhMmbeV68V6QLY4%2BZKzJdYZaBX24O6FOqA9WjNUEXv0U8Iru%2B1EI9SapJPPh5s5tPfi2GemqNulH9YJafbzGWmXLmfUjsyzwq6HZPacilRYBdj2XzMQye0IhqRQLk%2BwTlN9c96x5E5q216aIlEf9MV9qT45oTpddjwtVX1NbsWM88dePtjuaxxMIbyQ0ucsPUEoDexElW3%2F04j3SqxzFqszLiEtH%2BsP8G5BwcBkqMnVa9qw4etIoRA1o%2F%2FovU4UXmgzyDm6dOkSKoWqFOhO4N62Mvbd4myvhfEPGVF5rYSH681fZqZ8M56mqDDCvwpPABjqkAdRyAW14HefIoebEMvRxsoMFa5vvo1EgnjGQJT4S7fQTO0T7ah%2FdZNkpgpCKz49TCGKQqjJq37aXoxxT9UsJt0GED8kwkR26%2FQPPYNDpn9heGj2XRuFmUT2lo2rlb0BHGGBOfycVSr%2BxfewJNQ46aarFiKE2vp10ckmjP%2ByVGqv89kks0zqhX0iM5VtRwyd%2Bc6cr45hylO1rgPGdNThFDEp28gFi&X-Amz-Signature=94de20df456e5dd164997b55d1825b97ed2293a13239e935c88a1d41ad006742&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAGOBKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDaT%2FYYaWOiuHp2vL7XqtiSJQbcu9W7Ei733P6zLlssVQIhAO%2BzT1FdbxpTv2SHaQMsXSclSGKj606hdJDPUmN1WuSrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSSIsD%2BeGHXDthkQUq3AMr7jDt5h9vR%2FxN%2ByT3WS4FX7Gr%2BeishxlpzbTBf1ECMrNBuKoeUJfSykfbyE8NGnm%2BCAJreZ1U1mMDra0YXfWV6vzDGt6e%2BMGfudnYbQfQhdXNyLuUgVbqbHJhyJ8SsP9HCGMe9MwLbTgPOzBorR77W6Ikdxl%2BKBvcoHPZdnRVQWNniDt%2Fu1zl1Hy5JHtPBr57GnLMrxLTmUWRJWxtCb%2FU2kecUK7PWovXGD%2FadgOapIYMv89oggNfY4EKcZZ5jwJ5mfo2cWB9Sq2ZJrLlWnWWQkWHLv22gUN9pz6SSgvyLRKITjrkigKRVuAVWKh0sm9bHhMmbeV68V6QLY4%2BZKzJdYZaBX24O6FOqA9WjNUEXv0U8Iru%2B1EI9SapJPPh5s5tPfi2GemqNulH9YJafbzGWmXLmfUjsyzwq6HZPacilRYBdj2XzMQye0IhqRQLk%2BwTlN9c96x5E5q216aIlEf9MV9qT45oTpddjwtVX1NbsWM88dePtjuaxxMIbyQ0ucsPUEoDexElW3%2F04j3SqxzFqszLiEtH%2BsP8G5BwcBkqMnVa9qw4etIoRA1o%2F%2FovU4UXmgzyDm6dOkSKoWqFOhO4N62Mvbd4myvhfEPGVF5rYSH681fZqZ8M56mqDDCvwpPABjqkAdRyAW14HefIoebEMvRxsoMFa5vvo1EgnjGQJT4S7fQTO0T7ah%2FdZNkpgpCKz49TCGKQqjJq37aXoxxT9UsJt0GED8kwkR26%2FQPPYNDpn9heGj2XRuFmUT2lo2rlb0BHGGBOfycVSr%2BxfewJNQ46aarFiKE2vp10ckmjP%2ByVGqv89kks0zqhX0iM5VtRwyd%2Bc6cr45hylO1rgPGdNThFDEp28gFi&X-Amz-Signature=8759e1bb0c97daa9fa38a2c44c9db38f30cfaf0a51caa47232cd7daf6d30141b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK46KYJX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIACcvJ2U9vIK5ccQtxLuPjsfvd17MpQFhBbWfTIRcjgeAiAJ9ipqYm1LF1fRAYVWR6K2o20vwnj%2Bq6HxgRj2dbmjCSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF9iA7rBsx3BsAxeFKtwDE3qABNPIRpQo3hsQtVjAz3i0tVoaqvyKV9ADnRVjg6FWlfsRhenLyL9ZoK6%2FY60mSHKnT0LtfIGWUqIc13N%2FVmBJPD0nq8ZcSCL4Hy6UC5aRal1Tx3MmKR23o0%2FA2nTh%2Fxvjbez%2BWvbuPO%2Fka%2BEXP8X%2BWCcovPTz6OQ%2Fi650JMUUxXHhfWJFPRBROY1BwMRT5THci2RW5PXy7HViSFX10Fla9bqN%2FEn3ZyZZUipivZM%2Fj%2FuovsX%2FkY3yVESjfPSGe9IlV93AIoJKvMuSuUQCedQG06OcxYWV359Kr1h0hIApF0RI8hvKC63rYt1yFOYUFc8WGDeKzHtCwTgdXnU2DjvnjwhRGHyIZ0SkuCe5ybE2CXMycDok%2FjO8s%2FFzL2kQAc3JdZvymTZz5FfKm8efR%2F7sIfD0ndtSKl8gRytXPnaCjgnYqXTvYvJ0dvl6l164BcjiHWY8147E2KN8Rzev7VSR18fJ%2Bx6El8%2FkCHd5SBZRGp0kR9tT%2BZhQUUEVRUaZLNjjNWjSYRrlc9hS6tnaeL%2BOQQBAAZjyf%2Bm5PS0sDjM4NpqQoUtzas1oBL%2B44ld2VwIic%2Fo2esmK9mL03K%2BCcE05kr6yEI5wSnWOfirqBTkHZR0pK0dgpTzzODgwp8aTwAY6pgExqUAA7BMFnGe%2BX%2FonFuZ2U%2B0scQ1O5D55GfOkrw0lHLoLklVMJbRj4qo9TZ5LXJt0w6DecNjELhl2LIapOKS%2FB3JyAIQh0UF5T4PbgNaYRSuk5UFbEKfZ5WsxOyhZ2nSuT%2FLtkj%2B7zhrLX3HEsNwlGfJjUYaktHqXwGFqqW8DrwzKySNQJb02vRCooJ7MY6gdI%2FXLP9azEAVNbSJfxFiPSdq2SmiX&X-Amz-Signature=bf94fdb7f80c3ecf32d27aa80967565a3a030c15790e94fd76dbb5ded87392e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTPQGSJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBr%2BrCkKQQVyVDGyTSqq8jBbu1ldmxD1H80Dg2PNXFhKAiAufBOFCo4JiCFbUIeGSkNHH5IRRo3Fa%2F%2FyGSdfCsJ8fiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2FxfWXs0WO1pwQePKtwDRyfA0HQsvb6hlcw9feMka2xhOoSwRAZwV8w5ogda8SlyZxFhGN2cGu8WUALbnw2Jyx8XMk1cmB9rz%2Fxuy5Cn7t5zuIfYX%2BwWZz2qnRxjnNxXZFsGwrhZ%2Bm7lwU%2FAH3zWlBWnM8Di8E79uVU2UoTKrMts2lO0YGDN%2B8j%2BwGFZ889Ouers8E5kbydyVfvQN4ngPQ89kC%2FwcmJcDvRVF2xTCTxfK%2FAztce%2FNoy93Mft4pDKoFrSUGJPnstL8pA3E59exNkQP90a5AZogNIPwiy%2BOMtBJdQ%2BWPF5F4BuP8t5DnQv0EAZuFkurEG9SSzg1ObLYKfdCdWWYbXHusO3m5lQlrIGXXKVrEZ24x%2BD0eCRt0XG2fD9l1UaqosHf0ZfP%2F3N1TaMMqFdVlUPXht3%2BXO5qyJOtSl%2BCT3a8%2B%2BGsoaJ2BQjdOYDtjUg6%2FOiRiiZnxAnPaedJCWBk4UKURDkGQFQiV4114oxvzkfYd%2FpJvluW3NT8GAhasZ%2FKcEcooA7kAeXc0%2F0OkJu9jmE2wIbh7erSMXjGQ0k5tE5A9EHsf%2BikpXRnJ7KiPT9sS9KF5pMr7CERtQHDuTsq9Fdvlqi%2BjTYRm1LJv4OiU1okarayGpQkTXWFNd1N5v9AQadwz4wjMqTwAY6pgF8G30QM1S69RYuy9hgIT8630q9MhBnFlWKs9AdkBfDBMMGfR6StyO5J2r0b%2F3Ni4iQTnaUDdaGM2TKxzjcqgmWwzYt8xzyHXR9RHxG1fIFkYnGGmcJOHTio9%2BL4pft9BnIX3cUwpaCvGEuc3XVUAdPzDHXdHKi8FEhUVuAG7q3lrmQx7YvqEWqngGyzMuEVxyRFnKWbdo%2BHrKtbKEVIdoAHTPWwSme&X-Amz-Signature=332ce98d0747281944a6f7bbf14eb969bb1ea9b5b56db42db4009d545c5318eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAGOBKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDaT%2FYYaWOiuHp2vL7XqtiSJQbcu9W7Ei733P6zLlssVQIhAO%2BzT1FdbxpTv2SHaQMsXSclSGKj606hdJDPUmN1WuSrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSSIsD%2BeGHXDthkQUq3AMr7jDt5h9vR%2FxN%2ByT3WS4FX7Gr%2BeishxlpzbTBf1ECMrNBuKoeUJfSykfbyE8NGnm%2BCAJreZ1U1mMDra0YXfWV6vzDGt6e%2BMGfudnYbQfQhdXNyLuUgVbqbHJhyJ8SsP9HCGMe9MwLbTgPOzBorR77W6Ikdxl%2BKBvcoHPZdnRVQWNniDt%2Fu1zl1Hy5JHtPBr57GnLMrxLTmUWRJWxtCb%2FU2kecUK7PWovXGD%2FadgOapIYMv89oggNfY4EKcZZ5jwJ5mfo2cWB9Sq2ZJrLlWnWWQkWHLv22gUN9pz6SSgvyLRKITjrkigKRVuAVWKh0sm9bHhMmbeV68V6QLY4%2BZKzJdYZaBX24O6FOqA9WjNUEXv0U8Iru%2B1EI9SapJPPh5s5tPfi2GemqNulH9YJafbzGWmXLmfUjsyzwq6HZPacilRYBdj2XzMQye0IhqRQLk%2BwTlN9c96x5E5q216aIlEf9MV9qT45oTpddjwtVX1NbsWM88dePtjuaxxMIbyQ0ucsPUEoDexElW3%2F04j3SqxzFqszLiEtH%2BsP8G5BwcBkqMnVa9qw4etIoRA1o%2F%2FovU4UXmgzyDm6dOkSKoWqFOhO4N62Mvbd4myvhfEPGVF5rYSH681fZqZ8M56mqDDCvwpPABjqkAdRyAW14HefIoebEMvRxsoMFa5vvo1EgnjGQJT4S7fQTO0T7ah%2FdZNkpgpCKz49TCGKQqjJq37aXoxxT9UsJt0GED8kwkR26%2FQPPYNDpn9heGj2XRuFmUT2lo2rlb0BHGGBOfycVSr%2BxfewJNQ46aarFiKE2vp10ckmjP%2ByVGqv89kks0zqhX0iM5VtRwyd%2Bc6cr45hylO1rgPGdNThFDEp28gFi&X-Amz-Signature=cd344582a848c45f20b6105a88696777ab2792bb04d259c7e5977ff1fe5e8120&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
