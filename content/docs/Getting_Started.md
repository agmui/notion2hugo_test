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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEDN3U5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg8u0R8DfZ3t48X2ueqjbXOOg7pedqehCAVelN0Acu9QIgRO1S%2BbdbkNwX%2FOu2LdWoZSGYgHIRUfTPXLrjwgSaQRQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0gGPXKIgKU32zh%2FyrcA07MJGIUcsEa8ucJamTzhP6xndmXiY9Oe5oyIc5%2BnQXiCPl3YWldvRh8XHIvW5lvCwnCdbI94DBdm%2BqwVBYmQyhs9HWCjnMI%2BXbu4cuh0Jhowmw%2FSCWPgkVsMKqQR3CMjUHUydy8trfgg5e3BjuSo72Zxuaxf2KCPJm4JTu3hL49LWTyTuuWSpTih3ZUZUoZyaGAKxrt%2FanV%2B8q9xv0c42qoWnKswXW8yHmNS%2F6RPk%2FRYZ3P%2FJ42wBvfKgZT9KPvRBh7AjsfomPy9ngm5d3EZGbOEqOALD%2FphgeBCILHv02TxZQgbMvpWxAUzuULdStSwIMbv60WlPiDt30sXKZ%2Fn3FLFM%2B%2F9PWxam5k3GEjXBYaVO%2BEAWcQX%2FUVKae6WtNXQNX66XxuYLid6iS1mFNfHU8qz8u3fTZAbwbRLR83huuxznvKt%2BdbY%2B88eusyxSTw%2BduOQwF%2Bzr3825GLJAGekOhqqXyzEFaZne31UdqNJXQBecff24PntAAmgOo%2FaDCN0RNsuiZcmPSVZ5oWyw4alpvqzvOnjrghcrtOi5IHcpMqWj1ptZZdVZObnZbfN3FKqsmGuCUCUqIawCWhpGY2fSOiT9s8RzwnfmHlZH1p6b1%2F9vqoNV1uQiY%2BERfyMPOwub8GOqUByzEyMb5zgGZUqiMvt7qjO9kazMivhbYHUykk2wGkpqD2kAwUuAXwbD53CRkGI7EB9vezPY440tkWmhZ3UlV4dgTOD1xIvIWL5xOIGy4rSYiGDT9ej%2B2qzTBg27iBxAWimQOH0dN6d1ph2DxHlJOXUHd5ftTAGRnRj0XBifEPgn4sUa%2F74EOd5VVti87NAYCTML59EqofXBFRUeZMDtwXWwDOW6cy&X-Amz-Signature=cd31a2ed18b3f214950b7bcd52ca6ef1b4d8aafcb8bc32d7f995554ef55bcb87&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEDN3U5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg8u0R8DfZ3t48X2ueqjbXOOg7pedqehCAVelN0Acu9QIgRO1S%2BbdbkNwX%2FOu2LdWoZSGYgHIRUfTPXLrjwgSaQRQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0gGPXKIgKU32zh%2FyrcA07MJGIUcsEa8ucJamTzhP6xndmXiY9Oe5oyIc5%2BnQXiCPl3YWldvRh8XHIvW5lvCwnCdbI94DBdm%2BqwVBYmQyhs9HWCjnMI%2BXbu4cuh0Jhowmw%2FSCWPgkVsMKqQR3CMjUHUydy8trfgg5e3BjuSo72Zxuaxf2KCPJm4JTu3hL49LWTyTuuWSpTih3ZUZUoZyaGAKxrt%2FanV%2B8q9xv0c42qoWnKswXW8yHmNS%2F6RPk%2FRYZ3P%2FJ42wBvfKgZT9KPvRBh7AjsfomPy9ngm5d3EZGbOEqOALD%2FphgeBCILHv02TxZQgbMvpWxAUzuULdStSwIMbv60WlPiDt30sXKZ%2Fn3FLFM%2B%2F9PWxam5k3GEjXBYaVO%2BEAWcQX%2FUVKae6WtNXQNX66XxuYLid6iS1mFNfHU8qz8u3fTZAbwbRLR83huuxznvKt%2BdbY%2B88eusyxSTw%2BduOQwF%2Bzr3825GLJAGekOhqqXyzEFaZne31UdqNJXQBecff24PntAAmgOo%2FaDCN0RNsuiZcmPSVZ5oWyw4alpvqzvOnjrghcrtOi5IHcpMqWj1ptZZdVZObnZbfN3FKqsmGuCUCUqIawCWhpGY2fSOiT9s8RzwnfmHlZH1p6b1%2F9vqoNV1uQiY%2BERfyMPOwub8GOqUByzEyMb5zgGZUqiMvt7qjO9kazMivhbYHUykk2wGkpqD2kAwUuAXwbD53CRkGI7EB9vezPY440tkWmhZ3UlV4dgTOD1xIvIWL5xOIGy4rSYiGDT9ej%2B2qzTBg27iBxAWimQOH0dN6d1ph2DxHlJOXUHd5ftTAGRnRj0XBifEPgn4sUa%2F74EOd5VVti87NAYCTML59EqofXBFRUeZMDtwXWwDOW6cy&X-Amz-Signature=f4ef8b91f5d83453d74b51989dbdb7d2244626275627e725b77dca05d0fa8701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQMMW5B%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHPZSpv4yDJHGa7Ul%2BF4e9ZQ%2FwhQHNmmKNCTP0FpGfawIgZhScDKxYqmhObCm2zjmgEDXs%2BumTVYBXY57P6wuFB5UqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUTrQlGZ0c65r7rhSrcA7kGn9sXJgsfUXXd%2Bo12oV8UCGvgYXwU9SJ6v6RZN5HXm1i9jbiELJmsSMU%2FLitXD8WgtRiXjaQ6WpHhGPQujD%2BtzJYmOH3FOfjf6GjIEBisKBywnPTrriss9QJDtPrd7fbIbzVntdteSljd7TtOPT6Ag%2Bg8qgwmIOMYwr8CA6nKBXzS4gZWRF%2Bw34ntPXmUqwdThoeCNPTSy0Vq53Ht7CxGqoY1Jk7P09Es3H%2B0BDV6Ee8HZ2lQ7HTkcpRH7MjMc0wc3CYS9OMuphYqKcbadN3xyX%2BvCe9k7YmR9sdHjnh0QZ2RVApyVtKclnhr%2FCFnx4XK5384MV%2BVV6spouYZlH6yFUBXppO6gmEacq0mWYrPTCfcQSLtj8c%2B5V0aZS5mK138fn5EPkzwV5oZmrCtiUaHpC7kp868RCKl0RBQGrPE1G%2F7WbpGBcs7x4gPLK3gJo0DlUVhQWiHNkiZrY6ZZ8IqC7dN1NiQ7dmROGCgCCx%2FSJPonRljaz3nRq6Ac%2BL%2F5YVUvWcaUiwdtpzXpVctGH%2F3Ch%2FnZrpvzYU1OR509VrMyWbeD92vUQVn1CEnGUd9HG3%2BENfVOMTNljc8FYfAQNNRsiatkx%2FAj5lX1e%2FWcbaI44iWGmimp5oNA5jmMLawub8GOqUBHeVyLIIQNdq1Q0Gnd4qzLhhC7z1NRlzxODjsXWq%2Fd%2F6NEtlXPhUMIQoWaqwSOCmJyJ3AKt%2BONYPXlxMk0UFom5cByT71GbghKozGN6vCEJgCXhLxgrMEqfi7XdOq8EckdY4AHCVH4Ozw66rVJYchRo%2BOg656pf%2B8A7X7Mu1BFMvGMFVzkQYPgCNWKZ%2FnLOKOpoTAQ2yZ71EUZqqcZ5FyDY%2F70UaS&X-Amz-Signature=6282c7690b50883957f2a7752bca47879dce2b320d0446f03e2b609d5f6a99a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5AKD3N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOcm9CAAAni7xwMmQcoAjw9WcBqE7B0YDYABJzhyNm%2BAiEA6naJwFCTcc1W0ShZumZmkRnXmQYt0byW5jeAtJWip0IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX80ZjzMn6xslfysSrcA59CxhwhrYDJg62q3J2XQhBjsjeqyVkCXgJwRH%2FyG6BgH5SCWW3PALOZXPfOHjaGeCUo%2BTnC0YZPIxoOKCpGBLgTK5QXQcAFYG8g9Hw4HfMVUoKQXzRC9ho2nlz0271lH%2FwzduvLjxP7CFqJNf9NTg1P9Jc5vQ2BKFy8TUL0zsAwIdw84%2BW6q9rVWl77M55LEdjIijic5Uw0vNDMi9rJ8I3YrYgbSDc%2BsFQrmZAJ0wFm%2B2VbnPfrHzDabFOCpckgGMZ%2BE610KBvuisSZWUqMUeftFtS1ynshj8qJonNRWXYg0p43I2IeJrk7JUddBWUESjK%2BQKVt13QHemnHoy7GAySqFo7xZ59q7CSZqm6NL57%2FUM8xIggutQoKVyClHyjdMt9J0DDnKWWWrm%2FaJ3w6OfFrdF6DI9CVYli5vU5MOtLaxvTQA5R8rs5dcApMlTMVE8nXzdSunqup3Fa4%2Ftk70cEH5w0yk8Cmx%2FiWysU4qJRGfnEUhxjnDh3Yf6anSzPoZWmJ99o7a0YH%2B0iX8EZf2fp5Rx9CVaZrcvXZEQElgI3Hz%2BN%2BcO1ripr38QSOwYRDA94k5iFzTKFXRtp64wT1Q%2BhIaUfvLvtvmISyJXVQQjdFoh3NRmsW6nG3o5k7MKqxub8GOqUBDOIxChEgFlb%2BHOq%2FnwjNe5Tzh2cfulOnLItaIL99R2nwq5MHGXw3qFg1h0bjjD35W3g0rqMgy6jFGvAAtdDQylvFTrsGhiJbiiiGSohMPGhB5Tvh7C6o7MAFpRex6cT%2FnRISB%2Fo5FO1SpDWJRXgY8%2FUo%2Bq37BV787ebzIDt5u0i46NiaTw3QYT8Lzk7FEbhgB0q8bp0LEOjGTAHF1%2FEwN6NeEF5V&X-Amz-Signature=55a6392731a1b6a75504732c3e09906e9a17dfca29f7967a92e28cf6671eb097&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEDN3U5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg8u0R8DfZ3t48X2ueqjbXOOg7pedqehCAVelN0Acu9QIgRO1S%2BbdbkNwX%2FOu2LdWoZSGYgHIRUfTPXLrjwgSaQRQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0gGPXKIgKU32zh%2FyrcA07MJGIUcsEa8ucJamTzhP6xndmXiY9Oe5oyIc5%2BnQXiCPl3YWldvRh8XHIvW5lvCwnCdbI94DBdm%2BqwVBYmQyhs9HWCjnMI%2BXbu4cuh0Jhowmw%2FSCWPgkVsMKqQR3CMjUHUydy8trfgg5e3BjuSo72Zxuaxf2KCPJm4JTu3hL49LWTyTuuWSpTih3ZUZUoZyaGAKxrt%2FanV%2B8q9xv0c42qoWnKswXW8yHmNS%2F6RPk%2FRYZ3P%2FJ42wBvfKgZT9KPvRBh7AjsfomPy9ngm5d3EZGbOEqOALD%2FphgeBCILHv02TxZQgbMvpWxAUzuULdStSwIMbv60WlPiDt30sXKZ%2Fn3FLFM%2B%2F9PWxam5k3GEjXBYaVO%2BEAWcQX%2FUVKae6WtNXQNX66XxuYLid6iS1mFNfHU8qz8u3fTZAbwbRLR83huuxznvKt%2BdbY%2B88eusyxSTw%2BduOQwF%2Bzr3825GLJAGekOhqqXyzEFaZne31UdqNJXQBecff24PntAAmgOo%2FaDCN0RNsuiZcmPSVZ5oWyw4alpvqzvOnjrghcrtOi5IHcpMqWj1ptZZdVZObnZbfN3FKqsmGuCUCUqIawCWhpGY2fSOiT9s8RzwnfmHlZH1p6b1%2F9vqoNV1uQiY%2BERfyMPOwub8GOqUByzEyMb5zgGZUqiMvt7qjO9kazMivhbYHUykk2wGkpqD2kAwUuAXwbD53CRkGI7EB9vezPY440tkWmhZ3UlV4dgTOD1xIvIWL5xOIGy4rSYiGDT9ej%2B2qzTBg27iBxAWimQOH0dN6d1ph2DxHlJOXUHd5ftTAGRnRj0XBifEPgn4sUa%2F74EOd5VVti87NAYCTML59EqofXBFRUeZMDtwXWwDOW6cy&X-Amz-Signature=e257be1c0e456a3c5a24b004a16db37f725be751fae4e80a3c4eadda953c3966&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
