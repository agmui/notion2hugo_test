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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKNNGDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxFZutMKes1Sdqh%2FMGq9U4EjN%2BroPW9BsVhNDq152p%2BAiBWqVlLwDcKHZmTm3M2JRwkh%2B7QrB81RkIUcwki5kCzgyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzoHDneaBeScVOpzMKtwD6F88tmAe4lLm%2BB3Rea5iaeW%2BYyPLr4NxMdEiRZxQz0JZ3opwyy6dfpXjv4ggF7uW9fY%2BS1IJtf6VQrRAJLaIdhoxu5KWNlxs9AEloyAUuOC6HMk89s0rQT1v3CS6bNiphjYFncc7t2k6dnMITv%2Fd%2FAFcp%2BRqgkUAjOh1ixEx50Z4iSAh1I%2BfTvF4%2FElqmcRebowGHyNQYWHhzSK4ADaKoR%2BF44L3szggFfMizPVQUUgCIU4QeFyWkUmtzBkD4mfqUby801IiyJ74HNvWU09vIxAVqPeUhNpQkG3%2BfF7gd62DULrV1R6jYOCfPBbOL34gdfzXq4Upey8WyyQ1IQQBi4hg4sscqQV%2Fy8sBHnoLYuv99Z6xcsOxpjLcItw7L9vV1veNFvDvWZD92g4MaDBlB9LUyZs7AYnVO6FAIEYxcWsKCTw6frgvjvLj2MBWIMV3cFoGL2gtwRSh1eB4KcbNVNicAOh0ce%2FmMFhYdQsW5Ze%2FwJ6B9hss85ijcprjLIJFCFlvHnE8w%2F7vtl5ASbI4UnGpdF3PTnZenRw8%2BkWXotVGcIwTWF%2FDUVAmepW3%2BvgzRikciuGsEW8f6ndH6Kd7QkUe6%2FVkU2F%2BCYjdNqcw6gds58%2FckTAZZbuHxxYwu8HDwgY6pgGBrTozq1ll%2BJ4%2B7NNmvnqNQXr%2FYbpF9U41pjaScOmJdNrL41cBiOWGt9gNaZrHLgZs3F%2F6jHy8j0cgdba1XwEnDq8xpsKeOrNhxjmeYlmzbnixXkkRcPN9d0s6wLHWP6ATbz0rmWavVFYgZcLij07OxdQ%2Fv1dxk4bbqD0vDKCeqkylQ6US5JJ5igcHtdeRVHgL%2FuHAUXeFqnhLDlIlhGQr%2BWHp6LLl&X-Amz-Signature=250463c097d5d5b8dfdfa5f2271f96782b18f445aacc856c4357b1c14245e910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKNNGDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxFZutMKes1Sdqh%2FMGq9U4EjN%2BroPW9BsVhNDq152p%2BAiBWqVlLwDcKHZmTm3M2JRwkh%2B7QrB81RkIUcwki5kCzgyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzoHDneaBeScVOpzMKtwD6F88tmAe4lLm%2BB3Rea5iaeW%2BYyPLr4NxMdEiRZxQz0JZ3opwyy6dfpXjv4ggF7uW9fY%2BS1IJtf6VQrRAJLaIdhoxu5KWNlxs9AEloyAUuOC6HMk89s0rQT1v3CS6bNiphjYFncc7t2k6dnMITv%2Fd%2FAFcp%2BRqgkUAjOh1ixEx50Z4iSAh1I%2BfTvF4%2FElqmcRebowGHyNQYWHhzSK4ADaKoR%2BF44L3szggFfMizPVQUUgCIU4QeFyWkUmtzBkD4mfqUby801IiyJ74HNvWU09vIxAVqPeUhNpQkG3%2BfF7gd62DULrV1R6jYOCfPBbOL34gdfzXq4Upey8WyyQ1IQQBi4hg4sscqQV%2Fy8sBHnoLYuv99Z6xcsOxpjLcItw7L9vV1veNFvDvWZD92g4MaDBlB9LUyZs7AYnVO6FAIEYxcWsKCTw6frgvjvLj2MBWIMV3cFoGL2gtwRSh1eB4KcbNVNicAOh0ce%2FmMFhYdQsW5Ze%2FwJ6B9hss85ijcprjLIJFCFlvHnE8w%2F7vtl5ASbI4UnGpdF3PTnZenRw8%2BkWXotVGcIwTWF%2FDUVAmepW3%2BvgzRikciuGsEW8f6ndH6Kd7QkUe6%2FVkU2F%2BCYjdNqcw6gds58%2FckTAZZbuHxxYwu8HDwgY6pgGBrTozq1ll%2BJ4%2B7NNmvnqNQXr%2FYbpF9U41pjaScOmJdNrL41cBiOWGt9gNaZrHLgZs3F%2F6jHy8j0cgdba1XwEnDq8xpsKeOrNhxjmeYlmzbnixXkkRcPN9d0s6wLHWP6ATbz0rmWavVFYgZcLij07OxdQ%2Fv1dxk4bbqD0vDKCeqkylQ6US5JJ5igcHtdeRVHgL%2FuHAUXeFqnhLDlIlhGQr%2BWHp6LLl&X-Amz-Signature=4040fbabbd10fbc4d1123673310ae4c0cb80bad31d705eb13481bc87bee38c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKNNGDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxFZutMKes1Sdqh%2FMGq9U4EjN%2BroPW9BsVhNDq152p%2BAiBWqVlLwDcKHZmTm3M2JRwkh%2B7QrB81RkIUcwki5kCzgyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzoHDneaBeScVOpzMKtwD6F88tmAe4lLm%2BB3Rea5iaeW%2BYyPLr4NxMdEiRZxQz0JZ3opwyy6dfpXjv4ggF7uW9fY%2BS1IJtf6VQrRAJLaIdhoxu5KWNlxs9AEloyAUuOC6HMk89s0rQT1v3CS6bNiphjYFncc7t2k6dnMITv%2Fd%2FAFcp%2BRqgkUAjOh1ixEx50Z4iSAh1I%2BfTvF4%2FElqmcRebowGHyNQYWHhzSK4ADaKoR%2BF44L3szggFfMizPVQUUgCIU4QeFyWkUmtzBkD4mfqUby801IiyJ74HNvWU09vIxAVqPeUhNpQkG3%2BfF7gd62DULrV1R6jYOCfPBbOL34gdfzXq4Upey8WyyQ1IQQBi4hg4sscqQV%2Fy8sBHnoLYuv99Z6xcsOxpjLcItw7L9vV1veNFvDvWZD92g4MaDBlB9LUyZs7AYnVO6FAIEYxcWsKCTw6frgvjvLj2MBWIMV3cFoGL2gtwRSh1eB4KcbNVNicAOh0ce%2FmMFhYdQsW5Ze%2FwJ6B9hss85ijcprjLIJFCFlvHnE8w%2F7vtl5ASbI4UnGpdF3PTnZenRw8%2BkWXotVGcIwTWF%2FDUVAmepW3%2BvgzRikciuGsEW8f6ndH6Kd7QkUe6%2FVkU2F%2BCYjdNqcw6gds58%2FckTAZZbuHxxYwu8HDwgY6pgGBrTozq1ll%2BJ4%2B7NNmvnqNQXr%2FYbpF9U41pjaScOmJdNrL41cBiOWGt9gNaZrHLgZs3F%2F6jHy8j0cgdba1XwEnDq8xpsKeOrNhxjmeYlmzbnixXkkRcPN9d0s6wLHWP6ATbz0rmWavVFYgZcLij07OxdQ%2Fv1dxk4bbqD0vDKCeqkylQ6US5JJ5igcHtdeRVHgL%2FuHAUXeFqnhLDlIlhGQr%2BWHp6LLl&X-Amz-Signature=4984ebf2df87449738bf5fcb68acc85f0e22dec57cc36118dbe657745c790883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5SGETO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMFga11cJidaZrhL7%2F7m2IIwAGw66hZexPFo2NQx8epAiAFjC8TmUxu5LolosrzMdgAD9N8CuzbtLb6HSIW%2Fqg7KSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMZRjfDX6ofY%2F7RABFKtwDDLrPc0MVaV5VE9rdRSQTiR45bVUc5%2BRL53%2B%2FBUEPO06yEb2IjkhrN4aoSxm2wh%2BBv7SRnHJXktb%2BmqUmAh%2BQDU2Mf7G5Q7S4LAMJgAQYNPTQClkEtaCuur940%2FyVjLye5sl%2BlxFEMXMoHSs%2BEdaMdAm0hqOAIeOFnUixF1%2Bx%2BsEPMjKG1Kk4hdevKDtwdDQ%2BsEcLlBCm1dNTTgOuhUQsneReUG8bYWtiD0lmchaejSv4%2BFz5noVlVkNwuJUuHq92oxFcWA%2FbmE6NIBK9NSBdTTvRcLWKx2lxXhzkZQEyId05fNxewcgj0estiFHvIXGuDu9Nb1o5sncWZHsOUBBjCB5BF3K7oL4aBHfXMvXIeZW97K%2B4wXm%2FtDB7pBZpBZfJyzGWi22uRC37r01pMY8ue6d9KWjzTSZL4GAa8%2FpPtmZytP5n9K%2FBwTa35CHCEjsFt9Eif5t6oSno6J0bHQ0TQjmGumVHsuZCjRR6LCZSXzXzq4%2FXFPLt2vXbe64XAakkn7DDp1g%2FQchrenXgiAzrHPXpdahN0vxiZJF4JySMFvML2yEwUceAQ%2BzEvrBvgSsBB1KAfOEIXXsmXxTffzNpXUJYzdnI69AJZfgEqnd1UsYhz7BwAqw0tlgmehMwucHDwgY6pgHpr2NK4DQwX2Gs3kF9sZMtH%2F7G8GxeUcgUDjJsDp4XuBz479Zhn6xenbG9vH4vkNRUxr5xEnUqNHPuf1L%2Fjw2999aVztlq1w%2FBoGZJWo3Mrmlc2WM3PyVWDmgJrHA4xoTEYi3NfQz4kHHqM2W4WDVwCMcLjBwNiIktRdK4hlusVOg0%2BCBE2PneWY1cJbxS98xLXahgaQX%2F%2B69Af236VxwUzc8NdORo&X-Amz-Signature=8fd70fa4101ce0de1fbb0abc608de31c209eb416d96bfb2a561e8bc4af7ce62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6WILHCV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDozT5jhjKL6my5pQFZZXfR%2Fi%2BxGdKw8HSQ0XtvZ28DrwIhALFr%2BduWZSmZ8XhVo3JwWnt4mKnM8svSud6RNbo4BUeFKv8DCG0QABoMNjM3NDIzMTgzODA1IgyIRbLSF%2FeAgAIV1soq3AN7G56wmj%2FxQULnvkaIwwX4KlysUQH8cc4OsNK6Y45ooQ4BHwaF0%2BTHL0JrZX%2FL8z6UhlRZXVZ5O2aE5fmjilfSvvjPm0lkJqx0pGMPAuMJ07PDkmC4Eg68saNxlnPKhMUWvrQpsWJnbBkAYRJwyd4PAVHgfjfVrwheIN3e4uGQ3Ek%2BF0LSf%2BOiZyymIohzX4e4djBzNpjWTQ4Zb5%2FXUbGlAW%2F3DVB2XiCEV54In%2BshlCkbkIzCzzL%2FEMEgyy%2FbvQd4vU2GnQLg6J3C75tjIoQwnl0xIXx9v1FuKhhC7Ry8AG3fb%2FrA8vd5%2FbGBXPops3djr8bK7lZAZgihOIvWHCllFnXqy3c%2B8%2BRw92HYimz0rdLPtjnoolUA2Qi7slVT5HdkLvt%2FCZ2GDO9ikmkE18aKeQEk51rt43WtLysvI%2Bl4Uwy%2F7LBZSnZjgRap4utFn97eR0XbmN0wR8bMd1AmR2%2B9plRGw4J27yhPjFc8yFU6%2FpTFS%2FlnqoA8gmOWvXeDcA212%2FUv%2F9slBZMkPLeXFOaNHBVGwiFQ1dfx2MUFPkWRUpG6gBcrjp6z4mZFeZKcAkVYrT78V6Wh%2FOqpkh8h2g8mR1%2BfFc83JEsg9lJxmn%2Bio1QNvlydswwQcDtqUTC5wcPCBjqkASNXTjRcpCsPUWoTjit3GgoapSwjtjoiT5%2FY34z17%2F0ZFydWKnJno6m%2FCWNHMgKS327kbqkDztuij2EG3eq0MTdcCbEePNvWvlmK6VIbWcSppVSVsOZvIpXHHvU%2FmtN37zSbaMaLhawnYpoXepXiv8BUE0z08QTkRJKwJlSBFsQsDrFNls4Pa0ItCKg860JYmXH894rkSgk67Pf2do1xo0QmK4It&X-Amz-Signature=c00d2b9a89e3b43bed8c06047d4adfe2b2f4e7bd4433392a4cd01f9d8b64e052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKNNGDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxFZutMKes1Sdqh%2FMGq9U4EjN%2BroPW9BsVhNDq152p%2BAiBWqVlLwDcKHZmTm3M2JRwkh%2B7QrB81RkIUcwki5kCzgyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzoHDneaBeScVOpzMKtwD6F88tmAe4lLm%2BB3Rea5iaeW%2BYyPLr4NxMdEiRZxQz0JZ3opwyy6dfpXjv4ggF7uW9fY%2BS1IJtf6VQrRAJLaIdhoxu5KWNlxs9AEloyAUuOC6HMk89s0rQT1v3CS6bNiphjYFncc7t2k6dnMITv%2Fd%2FAFcp%2BRqgkUAjOh1ixEx50Z4iSAh1I%2BfTvF4%2FElqmcRebowGHyNQYWHhzSK4ADaKoR%2BF44L3szggFfMizPVQUUgCIU4QeFyWkUmtzBkD4mfqUby801IiyJ74HNvWU09vIxAVqPeUhNpQkG3%2BfF7gd62DULrV1R6jYOCfPBbOL34gdfzXq4Upey8WyyQ1IQQBi4hg4sscqQV%2Fy8sBHnoLYuv99Z6xcsOxpjLcItw7L9vV1veNFvDvWZD92g4MaDBlB9LUyZs7AYnVO6FAIEYxcWsKCTw6frgvjvLj2MBWIMV3cFoGL2gtwRSh1eB4KcbNVNicAOh0ce%2FmMFhYdQsW5Ze%2FwJ6B9hss85ijcprjLIJFCFlvHnE8w%2F7vtl5ASbI4UnGpdF3PTnZenRw8%2BkWXotVGcIwTWF%2FDUVAmepW3%2BvgzRikciuGsEW8f6ndH6Kd7QkUe6%2FVkU2F%2BCYjdNqcw6gds58%2FckTAZZbuHxxYwu8HDwgY6pgGBrTozq1ll%2BJ4%2B7NNmvnqNQXr%2FYbpF9U41pjaScOmJdNrL41cBiOWGt9gNaZrHLgZs3F%2F6jHy8j0cgdba1XwEnDq8xpsKeOrNhxjmeYlmzbnixXkkRcPN9d0s6wLHWP6ATbz0rmWavVFYgZcLij07OxdQ%2Fv1dxk4bbqD0vDKCeqkylQ6US5JJ5igcHtdeRVHgL%2FuHAUXeFqnhLDlIlhGQr%2BWHp6LLl&X-Amz-Signature=ce4e84d253860a86eeb57fb9389944669e2ac9dbbc3375ff85a07406982f3637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
