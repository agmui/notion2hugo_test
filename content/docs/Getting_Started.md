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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5662WAX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGXBne9Ng88%2FQ62tj2eGS%2BiI44RNUCuAEZ9EFkhB32NKAiA3mb%2BI%2FhkYmAPLUzLXaJIvA5Zw2qNwXHR0sBfD6j%2Bxhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTUMM5SzJAQY35hqZKtwDwP5m82d9ntBrCFbduaFOF7lj9p8DtXH6%2FKIhXRhTHPFEXfAeLCTzphn2dBQBQIplbrOeLmu8Ojj2T67DPHzRoIPLD%2BiQ2OgCUI4P06JteK2A40Ay5iN%2B%2BRQ1f4Iq%2Bi6EihRQTnD4SO%2Fe8coJViWQqpV2yFsx8ipxmcHQ%2FnHUgiR%2BVse6GwY5SMMv0eHE%2BKdZfrFZ7ENLTObi%2F6wtpMBhmsU34XkUn9j%2FXZMC%2Bb%2B5R7DdhN%2Fniy24Si7G%2F12CgPQjJqKSRpLSsJnbCFNDUhOQie7HNeqNtzAsXGjwOR88xCAi5GG%2BuhBBn363POd4wWfq4Gdq7Iu%2BMw51%2B0JLGUovZ1x8HubGmUoxEoC9e%2B%2BeOYcs9uRP3FxLlCmPNAzK9DMTshYKTsIGg18z627%2BYZlJK7sRFO6k5WLHYpjryxb7Y95OZUiL1A7xtis6oDZD%2BYQ7vEoZ1OQAZrC9WawtyvuPVjHBVtmvJs5hGrkzZsYs8eZPJI1HTRUcvaHd5FMBKCsPsmSg%2FivU5zoevGKsIcr1c92BnvdwHzSyiD85Lldy6wJqKsTWKA%2BC%2FITmscgSBzbRmNtsQHGQ%2BnsbhST4sjFUwA0r%2BvtynXtDVk72xKirYG2WFTkyrNpxyliA%2BsEwu%2F2YvQY6pgFVMgMjDDtHEdTw3XZvTywNQiFyJkXNExR8niUvuotbNWF4D4D3BGyBcCW51awVwFkmGWJ%2B1sDKqOGtyHwKAkRdOmQIdAnb%2F66fOElTWy0RjYZbNsdp25f27s%2BF3sPD7b0Eu1nuqBqENXxAxxJ1lr3JLtCpctoI5%2B8f%2FluylIHLN1WoILgLqmGVHlngK%2BY9nbrk%2By5W8qVBY3TmPV9%2FfFGQn4xq5fKl&X-Amz-Signature=907772e97637699b8947e0368395033ef5db3066b16dcb914537b0fe0e749889&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5662WAX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGXBne9Ng88%2FQ62tj2eGS%2BiI44RNUCuAEZ9EFkhB32NKAiA3mb%2BI%2FhkYmAPLUzLXaJIvA5Zw2qNwXHR0sBfD6j%2Bxhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTUMM5SzJAQY35hqZKtwDwP5m82d9ntBrCFbduaFOF7lj9p8DtXH6%2FKIhXRhTHPFEXfAeLCTzphn2dBQBQIplbrOeLmu8Ojj2T67DPHzRoIPLD%2BiQ2OgCUI4P06JteK2A40Ay5iN%2B%2BRQ1f4Iq%2Bi6EihRQTnD4SO%2Fe8coJViWQqpV2yFsx8ipxmcHQ%2FnHUgiR%2BVse6GwY5SMMv0eHE%2BKdZfrFZ7ENLTObi%2F6wtpMBhmsU34XkUn9j%2FXZMC%2Bb%2B5R7DdhN%2Fniy24Si7G%2F12CgPQjJqKSRpLSsJnbCFNDUhOQie7HNeqNtzAsXGjwOR88xCAi5GG%2BuhBBn363POd4wWfq4Gdq7Iu%2BMw51%2B0JLGUovZ1x8HubGmUoxEoC9e%2B%2BeOYcs9uRP3FxLlCmPNAzK9DMTshYKTsIGg18z627%2BYZlJK7sRFO6k5WLHYpjryxb7Y95OZUiL1A7xtis6oDZD%2BYQ7vEoZ1OQAZrC9WawtyvuPVjHBVtmvJs5hGrkzZsYs8eZPJI1HTRUcvaHd5FMBKCsPsmSg%2FivU5zoevGKsIcr1c92BnvdwHzSyiD85Lldy6wJqKsTWKA%2BC%2FITmscgSBzbRmNtsQHGQ%2BnsbhST4sjFUwA0r%2BvtynXtDVk72xKirYG2WFTkyrNpxyliA%2BsEwu%2F2YvQY6pgFVMgMjDDtHEdTw3XZvTywNQiFyJkXNExR8niUvuotbNWF4D4D3BGyBcCW51awVwFkmGWJ%2B1sDKqOGtyHwKAkRdOmQIdAnb%2F66fOElTWy0RjYZbNsdp25f27s%2BF3sPD7b0Eu1nuqBqENXxAxxJ1lr3JLtCpctoI5%2B8f%2FluylIHLN1WoILgLqmGVHlngK%2BY9nbrk%2By5W8qVBY3TmPV9%2FfFGQn4xq5fKl&X-Amz-Signature=1f06b52194515aeaf26d247331671db380e90f107512be16b5f4ff3722bd0402&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WCL74S%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIF645WNU%2B2azHDMjrm6uJYhGfEzPMxzq%2F01CFCn3UerlAiBXZvxlwY%2BcKzuOjTrJDt%2F1zkuOpwgehglcpfspTOX9syr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMlFjAASlmNlU4fTOLKtwDIGZdmYTtJEYFuAQEKfQh335gtwuo08lFr%2Bsy1a4vYuj2%2F0TJM51h5AiM59k8ipdUtj4J5fj%2Fbx2Vy6kuR4zpp1rBt5x5IjQlZ7%2BqhZNYKgQjWgPYeQJYDGuaoyyr7rJnndAQ39Np7%2BXcnTgA%2BZfmtNsIBw8HF2qcqIEHj6lBYtbJZ2oWPae9DhOfmitBkgcN1AP55ohxvJBcR0B0FUF0Gf%2BhLMCl9eVPDZ2mGI2OvHkh6HA0bNnb3uBIUq7SjXz0XuUB2ldmOMAxR4h6Y1WjwIAgcutckZWp2OzKT8dvErBBe7oHeAr3AwTIdn6m659uDMVb7tTEdVRi0CEfMXVOzTLpOfDYqlw%2F33YaLW%2BvGCoQIZb6VO6SadC8PVAshjgIcjuCZG8BgzGzDURWFQ9h14nPAzztlI9ax5%2FIhCTE2%2FaFgM1VrrAcQNh61jtelR%2FPcqqD3Ci9dtFqMWUFFaoBkr4VcEttnTCm8TtWsVlZYcClC3esfuEux8e5%2BAuNEOWMrewwnjQHkmWmtOOKSKiPm7TxY5m7zwptcWytTexWeyH8ceV9XIK%2BxWj7Y0BIofTvwhrq7%2BFLbFHl8xm8kwnUyj0oqT3hAYNiP2H9oNyOqZwV8czL1zXr4ZIiXsswgf2YvQY6pgFo7MEN%2Bm309EizwgLzRIm9Alu0hjXRjedxmgIWadodJNoRQiz8qGF02fJXSN11IzWnm98qPl7bR9iIF8pZKmpftPfYpKX0WVEyQEpmYDoPjZE8EL0eqwGPS43YiOSv937Aup9jd68xO6FmSAEH5s8cL7%2FpNYosiEvVKQZXAvu%2BYeVSGuI4wx9Php9RFhH5jA1v8vZfmTzZg4I76mzPAVeuozMljf%2FM&X-Amz-Signature=304ada6393f864969f1164f15bc154af16ddbc7e99522c12762d9326e7cbde09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOFE4VR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCgYvPEty4iDCXeZlXX8ALkJlAWkUZPa9eVq0rbgVIcSQIgT%2F55x%2BS7X0oU1R8BZ%2BmW16KY8XKy5%2Fh9IBR2g9osQqAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKKX%2FmEQLNKcuHhELSrcA5vODCJ5pkT%2BjE5%2BVxkdFc6tX4AV1%2FDPiEq9zRhJxeRXV%2BK%2BOUtkoy0tgQtrLEe7NjxOnXAeOmcohOVuh9HAH96ka%2BcOI9OI7VqCGnlVjNA%2BpM7PDAcFd1Jr9ke3YBwnG%2FNL8JN%2B%2BePLnDH1zrU8aMIKGzdi05zYhj72hZ3sMkSYmz5%2FR0xZ6%2BQ5v9bNIMFpb%2F6IuQUgObrIu7frIlOsmRCsS6mYXEKScsAw5ojmajz%2B%2Fd22VQtl%2F9AE67j0g0yLEpBl%2FESeYVIl2Z5RTEiXs%2FONSEcBrTWQviSYqOUUGop2iEpP%2B56MoIx2TojN9ZRSy0i4IY%2FHmqM7xy%2FOj3%2FJu%2Bm3gF%2B0YBQsyD7jnCUoF%2F1fw3jydlgAa1QJkRQec7Cf8HVEDryOM11gGtK%2B1ITaaPsW%2Fx0XeK%2F8KCFzc%2BNGdRlxnVqIkAI43uKfRY4U0aZZn33rXhBS4jbsnmyFhrc8Z1CvszC5i5O16%2Fp%2BwDkBQO8VhiRu5PXxYthyGERCSgsAxC7sG5SqvsKBybiWZ559Qj5z2NVC8KBAt3hMeugEa2TxOqEAkh%2B%2BBI%2BX9G0Ay3u22eyZufKqzsRJdouE2cZH2JzP6Yt6jyw0jt%2BTh70WRHDtJemDygkLWb7qhSSIMOT9mL0GOqUBduCBqIROsSKK%2B1%2F2PPy3rYOvoXkXZzzU86ifuofV7%2FlXzj9udznUgSItGJNksTZZnmanI3pI63%2BaOQja7FKKjaVYMU4YHaQGBhv%2BjCEf5vwpltUqGD8AnybHQhdNO0IqjXQZVBnsIjRsyxvULRtAJVjf5HUr1ILPPzacntvrW6y334fhmgJqc%2FHl2rvVNCqmKN4cEXYy1zcXHB4VWC2X3BZ4Z4ak&X-Amz-Signature=db98cb59f943b9f6a5d2bc9667fcdf42413f5dac59a301ffee0c4efcb21a4cab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5662WAX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGXBne9Ng88%2FQ62tj2eGS%2BiI44RNUCuAEZ9EFkhB32NKAiA3mb%2BI%2FhkYmAPLUzLXaJIvA5Zw2qNwXHR0sBfD6j%2Bxhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTUMM5SzJAQY35hqZKtwDwP5m82d9ntBrCFbduaFOF7lj9p8DtXH6%2FKIhXRhTHPFEXfAeLCTzphn2dBQBQIplbrOeLmu8Ojj2T67DPHzRoIPLD%2BiQ2OgCUI4P06JteK2A40Ay5iN%2B%2BRQ1f4Iq%2Bi6EihRQTnD4SO%2Fe8coJViWQqpV2yFsx8ipxmcHQ%2FnHUgiR%2BVse6GwY5SMMv0eHE%2BKdZfrFZ7ENLTObi%2F6wtpMBhmsU34XkUn9j%2FXZMC%2Bb%2B5R7DdhN%2Fniy24Si7G%2F12CgPQjJqKSRpLSsJnbCFNDUhOQie7HNeqNtzAsXGjwOR88xCAi5GG%2BuhBBn363POd4wWfq4Gdq7Iu%2BMw51%2B0JLGUovZ1x8HubGmUoxEoC9e%2B%2BeOYcs9uRP3FxLlCmPNAzK9DMTshYKTsIGg18z627%2BYZlJK7sRFO6k5WLHYpjryxb7Y95OZUiL1A7xtis6oDZD%2BYQ7vEoZ1OQAZrC9WawtyvuPVjHBVtmvJs5hGrkzZsYs8eZPJI1HTRUcvaHd5FMBKCsPsmSg%2FivU5zoevGKsIcr1c92BnvdwHzSyiD85Lldy6wJqKsTWKA%2BC%2FITmscgSBzbRmNtsQHGQ%2BnsbhST4sjFUwA0r%2BvtynXtDVk72xKirYG2WFTkyrNpxyliA%2BsEwu%2F2YvQY6pgFVMgMjDDtHEdTw3XZvTywNQiFyJkXNExR8niUvuotbNWF4D4D3BGyBcCW51awVwFkmGWJ%2B1sDKqOGtyHwKAkRdOmQIdAnb%2F66fOElTWy0RjYZbNsdp25f27s%2BF3sPD7b0Eu1nuqBqENXxAxxJ1lr3JLtCpctoI5%2B8f%2FluylIHLN1WoILgLqmGVHlngK%2BY9nbrk%2By5W8qVBY3TmPV9%2FfFGQn4xq5fKl&X-Amz-Signature=ee493000f16ba78a51d35e4d23834f1bfefeb955ced93a8ce36d598c011fb2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
