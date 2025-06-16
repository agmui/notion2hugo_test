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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPTJP7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCN3zKFFZeraKBZUhEr74HcdB%2Fo5iZGhXm1o1NepdKIcgIhALtt0YSMbhL9q%2FjDJQqfRjkdooi1XTkbuwg5yJmkj2%2FwKv8DCFMQABoMNjM3NDIzMTgzODA1IgwxMGvTa4m9xO%2BkblEq3AOw6OheOWoR0ANxWwkiigllg7clm9ino4RwAhzY66hHPy5uvxacbrt22xUHXlf0P6vtMXmIM00AELIXskILtpDgWFhcYQW5BoiwDJwGOb1DSx87K0E2q8MKo%2BwJYVO693JFpdXfki3SagUWTe9wHhXz7K1LISMvLRLoayX14P5zRencObDJNB1toomeWsORJDch1vjuzGgGDqG7zP8mNZU7z13BE5FXG%2Bf8G1ZwYoIcB7CYSQglzmPeYDyt8OZwF82Mvf5K18oxpsC03%2FaMvgY%2B72qKUX3OfmgpByr%2BvOBJrqOKHcBcaQsxHnm5PQdAOVSKFLlRUPwgZMdpmOnIE%2FPUHxA9C5cvTKQ0uH6NGyg2N0FT4ttOrMXGLbElBBuavWWSlD7I9zOcxR24CtSEg79jE1WDECkfc7fb9Ym9SzUdBLLhXGOObOJPMdzPGKS1Bc%2BH4qV91fVer5V%2FSB83t3DS1ePzRvaVZXPt%2Fi96r5m2LQI5v1%2FNlfg0i9K%2BWRGwof0HlQxi9xWSxmpnzaAM3r4Mfd9zaEaqtlOmrm1hEFmvq9V7jGcc7ngRuty8gB%2Bpq3%2BTrty9Z7oAZdYRrh%2FowYJNGgiUjvuRyxKcsqlbVykWKSRECVEkJT1o040E8TDi%2Fr3CBjqkAUfVaPbi3Ts49l9u36KZUzujrYblWogDPKFIVahe%2BRKtIbCwrRPdxOFxdopSSZ7QYsrZmjeJ6GL%2FV1F34DG%2BvNiwObfvSFMMGwTNovxKVZ5d4a7f2Lv2dCRCp%2FqkZlwOBlWpnJ0VmhsY7RPmpnLCRK6ZsbUoF1TaNRLd6UzsbUaBbX4t37EED%2BK1ZTyt%2BZyE%2Fw%2FHUOVBTgcx30y6adY%2BFiSQI9TJ&X-Amz-Signature=eeaa71556e6fa737a872d35d022cfbd5fc669dcd1eb597ee9f47269c03c31007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPTJP7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCN3zKFFZeraKBZUhEr74HcdB%2Fo5iZGhXm1o1NepdKIcgIhALtt0YSMbhL9q%2FjDJQqfRjkdooi1XTkbuwg5yJmkj2%2FwKv8DCFMQABoMNjM3NDIzMTgzODA1IgwxMGvTa4m9xO%2BkblEq3AOw6OheOWoR0ANxWwkiigllg7clm9ino4RwAhzY66hHPy5uvxacbrt22xUHXlf0P6vtMXmIM00AELIXskILtpDgWFhcYQW5BoiwDJwGOb1DSx87K0E2q8MKo%2BwJYVO693JFpdXfki3SagUWTe9wHhXz7K1LISMvLRLoayX14P5zRencObDJNB1toomeWsORJDch1vjuzGgGDqG7zP8mNZU7z13BE5FXG%2Bf8G1ZwYoIcB7CYSQglzmPeYDyt8OZwF82Mvf5K18oxpsC03%2FaMvgY%2B72qKUX3OfmgpByr%2BvOBJrqOKHcBcaQsxHnm5PQdAOVSKFLlRUPwgZMdpmOnIE%2FPUHxA9C5cvTKQ0uH6NGyg2N0FT4ttOrMXGLbElBBuavWWSlD7I9zOcxR24CtSEg79jE1WDECkfc7fb9Ym9SzUdBLLhXGOObOJPMdzPGKS1Bc%2BH4qV91fVer5V%2FSB83t3DS1ePzRvaVZXPt%2Fi96r5m2LQI5v1%2FNlfg0i9K%2BWRGwof0HlQxi9xWSxmpnzaAM3r4Mfd9zaEaqtlOmrm1hEFmvq9V7jGcc7ngRuty8gB%2Bpq3%2BTrty9Z7oAZdYRrh%2FowYJNGgiUjvuRyxKcsqlbVykWKSRECVEkJT1o040E8TDi%2Fr3CBjqkAUfVaPbi3Ts49l9u36KZUzujrYblWogDPKFIVahe%2BRKtIbCwrRPdxOFxdopSSZ7QYsrZmjeJ6GL%2FV1F34DG%2BvNiwObfvSFMMGwTNovxKVZ5d4a7f2Lv2dCRCp%2FqkZlwOBlWpnJ0VmhsY7RPmpnLCRK6ZsbUoF1TaNRLd6UzsbUaBbX4t37EED%2BK1ZTyt%2BZyE%2Fw%2FHUOVBTgcx30y6adY%2BFiSQI9TJ&X-Amz-Signature=2e5fa4ab83526604d292ce79808d2d67d526c8b684afd9b0d044066bfb8081cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPTJP7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCN3zKFFZeraKBZUhEr74HcdB%2Fo5iZGhXm1o1NepdKIcgIhALtt0YSMbhL9q%2FjDJQqfRjkdooi1XTkbuwg5yJmkj2%2FwKv8DCFMQABoMNjM3NDIzMTgzODA1IgwxMGvTa4m9xO%2BkblEq3AOw6OheOWoR0ANxWwkiigllg7clm9ino4RwAhzY66hHPy5uvxacbrt22xUHXlf0P6vtMXmIM00AELIXskILtpDgWFhcYQW5BoiwDJwGOb1DSx87K0E2q8MKo%2BwJYVO693JFpdXfki3SagUWTe9wHhXz7K1LISMvLRLoayX14P5zRencObDJNB1toomeWsORJDch1vjuzGgGDqG7zP8mNZU7z13BE5FXG%2Bf8G1ZwYoIcB7CYSQglzmPeYDyt8OZwF82Mvf5K18oxpsC03%2FaMvgY%2B72qKUX3OfmgpByr%2BvOBJrqOKHcBcaQsxHnm5PQdAOVSKFLlRUPwgZMdpmOnIE%2FPUHxA9C5cvTKQ0uH6NGyg2N0FT4ttOrMXGLbElBBuavWWSlD7I9zOcxR24CtSEg79jE1WDECkfc7fb9Ym9SzUdBLLhXGOObOJPMdzPGKS1Bc%2BH4qV91fVer5V%2FSB83t3DS1ePzRvaVZXPt%2Fi96r5m2LQI5v1%2FNlfg0i9K%2BWRGwof0HlQxi9xWSxmpnzaAM3r4Mfd9zaEaqtlOmrm1hEFmvq9V7jGcc7ngRuty8gB%2Bpq3%2BTrty9Z7oAZdYRrh%2FowYJNGgiUjvuRyxKcsqlbVykWKSRECVEkJT1o040E8TDi%2Fr3CBjqkAUfVaPbi3Ts49l9u36KZUzujrYblWogDPKFIVahe%2BRKtIbCwrRPdxOFxdopSSZ7QYsrZmjeJ6GL%2FV1F34DG%2BvNiwObfvSFMMGwTNovxKVZ5d4a7f2Lv2dCRCp%2FqkZlwOBlWpnJ0VmhsY7RPmpnLCRK6ZsbUoF1TaNRLd6UzsbUaBbX4t37EED%2BK1ZTyt%2BZyE%2Fw%2FHUOVBTgcx30y6adY%2BFiSQI9TJ&X-Amz-Signature=152d6da9f1a7731136fc32e86b7315ffc1758e6702c6f6b8d22486fd6e07857c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVXXPUL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIB3vQNChAZRd4%2FVZan7uXRNLBLBcD154RA4EoBHhWXcaAiEAqm64DWCrvRFpC7w11%2FI3IUM2IvExzISGoyX21l2un94q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHn3PyqWAGEU4GJkkyrcA%2Fs3NB3J%2BYY3UhsMyJJ1VHzrI%2By0DHzDrXdO%2B54ZhMyKb%2FiFj1TQsMFyeDYyJbxnY5JisLNFm7MFY5wVvXOxRHYnVQXqeMXyFFiDMoiP1B3%2BDgrzWp93XkVXwo6bzoH2TJohvcJfY1dNuSf0TOhqya24uOQcX3YLZzlLVDVlIq7Q3mHvI301qVANsAKUM4oyhtcgHp%2F8yQ6wHfcu5Xt5spCJDwydyPktf%2FOsFk1J%2B9X%2FRjQr67rvryeYrAxc4y47gt%2F5M0HXq3ipOeHcOvniIz0dvz704m8kaJnbMgr1aEhyhEpAhPSw4OwGsmwk7dSO5GK9giBMZYt2SnGRzJDDaXUhAW4z7ASPAcIoHKAXsVS8DQeeVm32NkFxc1BATJNoJ8%2FY%2BoWOkIem2s2USWi6gcokU7ylWdfAVWiGWrRZkLJg%2F7ZJdtYnA1Iu%2FMjwCs2cRKP233EZ5QKD%2Fa5OSaFFf1Wl%2FmTLKhk2eyu36JARgC6hekccukoJDj%2FNn3atk%2FoHgXNiBHSfZaHwB4isYIvN4Rg8zn0yMrcGnV8qYck%2Bak93SOB0OnaeIiv13OLz28RsrTvnUnffqAGFVjtuM0WtXzGSq3P%2BGgrtA8boRz9G8rtih25htf2Fr4DZ%2BZGjMPGGvsIGOqUBaDMcAUJ5pTExqQbD9Q54IbQtIat6KbRJQpssujZw0GOatH%2BoSe0nmtt%2F4zn1u6MP6DUoyO%2FBLEW5yuuWNey%2FB9E3wE1MPJyyB6C1xp%2BLq%2Fyp1o3EptnPAkHWI1guzhwwLJgNcyV09P5nt7yjLQD0czunEKGIi56evxfuAxrQWQFcdc9JyIJRfXqq3K%2Bmd8kEQhHc0PAwwwYNwv2Okmu34eJUG7Hc&X-Amz-Signature=32e65e5dc70bc503269ca931104f31621a843538047704595849a28ed2afca4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YASUXXO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB6i%2Brs48MrQC1XcVwjnDdf79gl9dJjwqYJINdgxmkXAAiA%2BJceupumoDl4nflshKd8IXX3ONDn1DRjn4rr1T2m3sir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMWk%2BHMXZAdpid3Pw8KtwDNCICo5SAaMJZhKEeM1yDhGTLxEmD%2B0xqGqxPxgxeBgA%2BADQX54tAvQhRnypsvfB0AzQ8yXz8qFt9KeiHnw%2BriSjZ0G0K0zOtVnyTIxhrPeedEKy64z%2F3Wl885REBD3QjxwEk0B33fSmcf4Aj589LhZ4T2liOByQO3dn8h%2FqS65C%2FC%2FoGMexvemhev9XSYgYg%2BzEfZFm42RSH6B1KyWO%2B4miYOvMTxLKLT1HsBDXG6R5kO3pDfs6yrjqu2TDHfOk6fqt8CVYBzMkm6ZkrXpGDFz%2FT360lcNBy7JbUtZXZjjAuIO35NoyRnSR85RVmXHjtUbbRZRjA2DrICJB1%2BK7vULd4f0STUQwBBZN%2BVAHLLeQEnyziN7sO0%2BaAC3lZlgyHRr4SBfqEslSmnuaEISeNyVac4XtzypQ3l9eglhaX%2Flo%2BaxkRakenW7LeStcZ6lS8xsn4O2I1ge%2BhgW9F9NUSFTGRJ2s076gKw1RguYQsismEA5dj3HR5P0Z47TTa18eAjv4pt%2BW6XtVbWUlUJcu0UiK1lQ7t3Qtj8Me%2BM%2Fy8YYeMaM%2BAo1bmcNyum%2BvlPkWdr2odFkrto1mYEhbBloFvVbAnNv2ZjZXbziNBBw8RKG4avE7CDtF%2FAJi%2BWQkwu%2F69wgY6pgFUfuJg7T8V%2Bi6yOMrmVpewOrC%2BA2I%2F6xpnfgb%2BplO9iT2LTFuGvI6QmIVp2ilQzafOQeGe7GR5bN6YPPPcLscjn4Eb99FchoWiOUTx%2F2Jv20hKnt0fdyc4mfqYcOUg5w39MDLBz5DbNqgliHxNSo5nCtq%2Bzk3vZOBwRGV59JXnfQ9FK378tRmm3jnBozY0wEP%2F0wcEQQM8SmKFobSO3hMDDcxrnVKh&X-Amz-Signature=07d79e808c862ed09336fd110829e6aee600b84e6e847ec6af3c18c3cf02e0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPTJP7F%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCN3zKFFZeraKBZUhEr74HcdB%2Fo5iZGhXm1o1NepdKIcgIhALtt0YSMbhL9q%2FjDJQqfRjkdooi1XTkbuwg5yJmkj2%2FwKv8DCFMQABoMNjM3NDIzMTgzODA1IgwxMGvTa4m9xO%2BkblEq3AOw6OheOWoR0ANxWwkiigllg7clm9ino4RwAhzY66hHPy5uvxacbrt22xUHXlf0P6vtMXmIM00AELIXskILtpDgWFhcYQW5BoiwDJwGOb1DSx87K0E2q8MKo%2BwJYVO693JFpdXfki3SagUWTe9wHhXz7K1LISMvLRLoayX14P5zRencObDJNB1toomeWsORJDch1vjuzGgGDqG7zP8mNZU7z13BE5FXG%2Bf8G1ZwYoIcB7CYSQglzmPeYDyt8OZwF82Mvf5K18oxpsC03%2FaMvgY%2B72qKUX3OfmgpByr%2BvOBJrqOKHcBcaQsxHnm5PQdAOVSKFLlRUPwgZMdpmOnIE%2FPUHxA9C5cvTKQ0uH6NGyg2N0FT4ttOrMXGLbElBBuavWWSlD7I9zOcxR24CtSEg79jE1WDECkfc7fb9Ym9SzUdBLLhXGOObOJPMdzPGKS1Bc%2BH4qV91fVer5V%2FSB83t3DS1ePzRvaVZXPt%2Fi96r5m2LQI5v1%2FNlfg0i9K%2BWRGwof0HlQxi9xWSxmpnzaAM3r4Mfd9zaEaqtlOmrm1hEFmvq9V7jGcc7ngRuty8gB%2Bpq3%2BTrty9Z7oAZdYRrh%2FowYJNGgiUjvuRyxKcsqlbVykWKSRECVEkJT1o040E8TDi%2Fr3CBjqkAUfVaPbi3Ts49l9u36KZUzujrYblWogDPKFIVahe%2BRKtIbCwrRPdxOFxdopSSZ7QYsrZmjeJ6GL%2FV1F34DG%2BvNiwObfvSFMMGwTNovxKVZ5d4a7f2Lv2dCRCp%2FqkZlwOBlWpnJ0VmhsY7RPmpnLCRK6ZsbUoF1TaNRLd6UzsbUaBbX4t37EED%2BK1ZTyt%2BZyE%2Fw%2FHUOVBTgcx30y6adY%2BFiSQI9TJ&X-Amz-Signature=a52895e9b53c6e8e62ca0216b07c990f5ff70a22d1a13259feadcf0b4b0e2a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
