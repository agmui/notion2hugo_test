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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6IOYBMK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGquqalYtK4%2Fc0E3BG%2Bpi8i9%2FKnDr%2FfXeZfI3Owmx8p2AiEA9dEAEaW%2BSvFdyqn%2BT6lrzEbJULH%2F6Xx5iuZJoJoryL8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7efiKJiurwSRyvHircA6zrTM2qYhhKX5Vp2VhpnkK8ib9isqBDNfKsIy13VJkPsERGK0V3qhGJOmfw2GwJHypNfxpJBgaEufifJewf4lAoM7ERZdmBZFHzJyoZWILbuL6K38qXAmv7mRGjOk2yBUnnGFAYdfCbsfTDWms%2FqX3Pr7uQZEXEivGWSHrprjwxMiU6PzAWRlKpdxfOxP1Rbar8D8u14gYxpmjWyyyA1V1%2Fy48sRQrGwndbHpX6Pc9PyorYo%2Bbe85j1DPuyI%2FLEUbDVBlz%2FKxXcUl1S1qSfP%2BYfNkC3yDoP8ya54F2dhudqS2ohFhaBncKbR8m1Hc7ULdCEU5Zz%2FJfh7XAhuBte9tk2zTCBWo9WWvsrDVXiLij0bNsnQUmL9BlLj6laUmFE691x05hWSNglc0br%2BSI7bI8URDapaVvlOnDZY3O5EUE2vPXyAZdPytg4enGH4g%2BbM5hMG80J%2BHOXCB3boYV9rWgxBt9dQUEHHWcDsdh8ZWtdxRVANcR8Ez3g0I8hvhDC9JoywIxIYLGjLhO7yflzmrKsZ0TEwp0UIGWHAZQot2O30RKcKM4jN%2BqoTNL0WGmpUoPhO7hqWjWHvoR%2FIxeGo5oDLNz%2BNEi7O5vIBTeck8IBjsiwsGDTdfxBNdyyMMLxhL8GOqUByHSIzfJBUoj80vnzkTqESoQJn83YG4kH0fyTHR3M8zMRusGY7SYSwfXtNbT%2Fk4TOtGdjMMQpF4HQNHjtVkwTjEVHeDdRFnHASTJzgNRhfC73E1%2F%2Beq6h7w%2BtNnVTmpeyLh2df1wjvr6FTF4LVvbT%2FCrBfx9RnL197LEPGOSevwUniiwxgP%2FPdbQrLNaBWUXLO%2BBnmHUszkabZ3N5ai0Nu1D%2FuhDt&X-Amz-Signature=d5cf447a8bcefe9034158ecc37f2093a46e38f0847dede3453a865d3435cd327&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6IOYBMK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGquqalYtK4%2Fc0E3BG%2Bpi8i9%2FKnDr%2FfXeZfI3Owmx8p2AiEA9dEAEaW%2BSvFdyqn%2BT6lrzEbJULH%2F6Xx5iuZJoJoryL8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7efiKJiurwSRyvHircA6zrTM2qYhhKX5Vp2VhpnkK8ib9isqBDNfKsIy13VJkPsERGK0V3qhGJOmfw2GwJHypNfxpJBgaEufifJewf4lAoM7ERZdmBZFHzJyoZWILbuL6K38qXAmv7mRGjOk2yBUnnGFAYdfCbsfTDWms%2FqX3Pr7uQZEXEivGWSHrprjwxMiU6PzAWRlKpdxfOxP1Rbar8D8u14gYxpmjWyyyA1V1%2Fy48sRQrGwndbHpX6Pc9PyorYo%2Bbe85j1DPuyI%2FLEUbDVBlz%2FKxXcUl1S1qSfP%2BYfNkC3yDoP8ya54F2dhudqS2ohFhaBncKbR8m1Hc7ULdCEU5Zz%2FJfh7XAhuBte9tk2zTCBWo9WWvsrDVXiLij0bNsnQUmL9BlLj6laUmFE691x05hWSNglc0br%2BSI7bI8URDapaVvlOnDZY3O5EUE2vPXyAZdPytg4enGH4g%2BbM5hMG80J%2BHOXCB3boYV9rWgxBt9dQUEHHWcDsdh8ZWtdxRVANcR8Ez3g0I8hvhDC9JoywIxIYLGjLhO7yflzmrKsZ0TEwp0UIGWHAZQot2O30RKcKM4jN%2BqoTNL0WGmpUoPhO7hqWjWHvoR%2FIxeGo5oDLNz%2BNEi7O5vIBTeck8IBjsiwsGDTdfxBNdyyMMLxhL8GOqUByHSIzfJBUoj80vnzkTqESoQJn83YG4kH0fyTHR3M8zMRusGY7SYSwfXtNbT%2Fk4TOtGdjMMQpF4HQNHjtVkwTjEVHeDdRFnHASTJzgNRhfC73E1%2F%2Beq6h7w%2BtNnVTmpeyLh2df1wjvr6FTF4LVvbT%2FCrBfx9RnL197LEPGOSevwUniiwxgP%2FPdbQrLNaBWUXLO%2BBnmHUszkabZ3N5ai0Nu1D%2FuhDt&X-Amz-Signature=308736ed5f65534426050bc0d791e5bbbbeba65a670b9a6cc6d6ca92d00e6389&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSTANV6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192zdxfEfCb0vH3hMIVjuULwNNRW8FPRPDTqeuLyJmAIgIcpJjdpe1NJCzH8F4NYZuQr%2FxY5Mka6s92ezmeChbogqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZw1lX9VXJc9eo1UCrcA44zKoSxEp%2Fv9iAk7%2F3jp5YdRV0Ezw8qD%2BdOZMaE48TynoNLF%2FPBk1KYzeepGbQaokVIv5iySrVFF1W0Lz%2FS8xl8VZ6m1ZCHxuAqgUMeL4O8ZDO14WY%2FHjbJqqdwkUcaqkoMLrlcc0k15yZrMBzdc%2BejSHcyR04IN36W8TqP4O0BktYnUgP93Ex5AicmiIHXpIR19TS5OY65AUQA9HbDdYtDQYSVUt4YIfYFqyHGTKLzw9zrH6F%2FVlihngTQs60kqd6GVp3LpEdXJTl1Fgvi27%2BpxFnuittasEyRxJTmHU3IDOw0ieBprLB9UWuQ%2BUURJoCI0HtxLgQ18kf7Yps3o%2FffujbrsnUzyzlGSrVxSIhCu%2FJhQTFEbfH35vosyvePPRoH3rqvw%2BdI1AFvaVesOTolHL0ubRHNq7DuOtc36z2dTy0jeggFfrDKXogPMzcSDWYruv8xtbWeKQG5sr03xfAkwEgrAAjDMzDywBOfLdHRDBz2N%2B0yXVivgRfNZogT3dMukiJ1M%2FPO9nIycD4fdoLG1DYsJ%2F40zLUy%2FH3Hd6HFbs1Wy0A3SeIQwKUMuem9gi1iYUk21gbU2DEtOzHC0rUdUFODpmjrjYUfiiPfRVZokcIA5whA6ccRwZ9sMNrwhL8GOqUBVr4rrAP2J4edp6wuVyybBl6X8bfNuDvNxGa%2Bn0%2FEDzJpGEylZOrxVthaKO7lAxf6FOxakWeBJXzdE11X8%2BvmZWuGwyE43V8GmI0n%2BDoE7GHsN3vlZO3gD6Cn7yo803oCfdTbZ%2Fbj0%2FKPo0exY3fXZKVCz7QVsMKneKjcI%2B9HQSTcPs0iwuyY1fJOeYfK5KIGc88GkhFH9Psq%2FY8WYd735mBvther&X-Amz-Signature=85cc7eb28a9767bcf7a782e6ad22840349430c488b5f80d5a1d347a66dee7e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLH3YPC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNkpU0H0Q0Dul%2F7VMUgLlI3YScHYwxiHv3pVHAAQjiwgIhAOEqAFjcNp5Pkfa9dkjhrkW7LLaONPLuBWArHkPqhXJ7KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkH0Od71pbgVBZTFMq3AM%2Bo2%2FVks6tUM4MZ47vzCJlM54KL5HjIX%2FyeuINqp%2Bvo%2FIX7BuLVghejtNZhqUqKU8gEK1h5E8sCHnKafl%2B0Lw7DViTTExEPyklon%2FUbt5LpBNaurWpUKZxkvMrMThcT6aap%2BJhg1lSlxq7HRWeiLZYcnv2fr7VeRrhMnFmZ6CNH3mgv7JjADcNbNPQx%2F%2BZ28mqKVE2qFDV5zJLmS%2Fj8NABsFnpbEWgi0%2BHLroeSgCgBEoJ2mXKV8iQtZLqIE9SF1V%2Fy%2BsWvBV%2FwiIVkLyHwGav82qCalUuomnD2f2YfZIuK7LC6WKciZqza9wBJHYtasD5m%2BKWAzCMIjv5Mo%2B%2FlJ50OckQE72XB7x7i%2FAwnUNnnSZFa%2FY%2B4i57IEqqJNLco9y8h%2BsC1QnsffbjVS8ryvw3ell2o%2Ba4UWJER23L0CzIMMR27UaDKqSUwNsoEmQ6ERhTkzPQy8ZX8jU6%2BW%2FBXm4kPtuR4oJ5Esf5OkK%2FrFxS4W%2BRnrsnDsBAj5QYucCr232pYOl5sG%2BEOFrtS0gyUHvRkZQX7OmWzWv%2FwRyc%2Bd0CIpSwxGPgvMfRlTQCf9pM5xJrKAgGxG47JPHx%2Ffm5N%2FsHrEPW8AoRlEcaIt5qrwJvQZ5InkV5%2BBbstpOYYjDO8IS%2FBjqkAfPGGWC4cuxlhiLytsOoj918qbAgYnwLX1hA2sTclRAKIKDSs1NWym5WuoqYj7rVNWKyrAoL5Gdygq47IfbsqiOpg9%2F1vpE5MQ7c0AXoLFzlCqoB%2BGBkL18z8TsPzjVL8imDEbtKsJ%2B8z%2BRJbd%2FIyYeyPb02%2FJRzRfgDZYz3WsLpGqsU30yYGD2kABBOVdSJpusypJfZ9Hx8J2rQLlMOaKkW9vLt&X-Amz-Signature=98cfc7c42c10e351bf420e5d14387b6c0bed27a6799509edc9c7e00fbb6450d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6IOYBMK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGquqalYtK4%2Fc0E3BG%2Bpi8i9%2FKnDr%2FfXeZfI3Owmx8p2AiEA9dEAEaW%2BSvFdyqn%2BT6lrzEbJULH%2F6Xx5iuZJoJoryL8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7efiKJiurwSRyvHircA6zrTM2qYhhKX5Vp2VhpnkK8ib9isqBDNfKsIy13VJkPsERGK0V3qhGJOmfw2GwJHypNfxpJBgaEufifJewf4lAoM7ERZdmBZFHzJyoZWILbuL6K38qXAmv7mRGjOk2yBUnnGFAYdfCbsfTDWms%2FqX3Pr7uQZEXEivGWSHrprjwxMiU6PzAWRlKpdxfOxP1Rbar8D8u14gYxpmjWyyyA1V1%2Fy48sRQrGwndbHpX6Pc9PyorYo%2Bbe85j1DPuyI%2FLEUbDVBlz%2FKxXcUl1S1qSfP%2BYfNkC3yDoP8ya54F2dhudqS2ohFhaBncKbR8m1Hc7ULdCEU5Zz%2FJfh7XAhuBte9tk2zTCBWo9WWvsrDVXiLij0bNsnQUmL9BlLj6laUmFE691x05hWSNglc0br%2BSI7bI8URDapaVvlOnDZY3O5EUE2vPXyAZdPytg4enGH4g%2BbM5hMG80J%2BHOXCB3boYV9rWgxBt9dQUEHHWcDsdh8ZWtdxRVANcR8Ez3g0I8hvhDC9JoywIxIYLGjLhO7yflzmrKsZ0TEwp0UIGWHAZQot2O30RKcKM4jN%2BqoTNL0WGmpUoPhO7hqWjWHvoR%2FIxeGo5oDLNz%2BNEi7O5vIBTeck8IBjsiwsGDTdfxBNdyyMMLxhL8GOqUByHSIzfJBUoj80vnzkTqESoQJn83YG4kH0fyTHR3M8zMRusGY7SYSwfXtNbT%2Fk4TOtGdjMMQpF4HQNHjtVkwTjEVHeDdRFnHASTJzgNRhfC73E1%2F%2Beq6h7w%2BtNnVTmpeyLh2df1wjvr6FTF4LVvbT%2FCrBfx9RnL197LEPGOSevwUniiwxgP%2FPdbQrLNaBWUXLO%2BBnmHUszkabZ3N5ai0Nu1D%2FuhDt&X-Amz-Signature=e988def9588c1f9fcfe65d7b687dda6658bfc2d0195b1c05fea80d51fdce4498&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
