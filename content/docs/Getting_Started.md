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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF74SV5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3DxhBy1OjGgXp3yt70C8Ab9E3UiJjkicHuvgE1vemAiEA9EaXdNkdG0BoWg03zIbd5GDJgCmsJW%2FBd532OAJJaAIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZlK121k4jGOMU40ircA6GXbN2VYt%2FHozj4tr81yMzc3vwsx9TyR6X3EWmx1rRSUdTM1j4bFrUwg3MSXTbZVYmNj%2B15QZPse1JhZc14TkvdT%2FEnoI0oAoxtjzQuauNoOl%2B6r89uYy%2Fw72bj7czrlbDQMNXg0XYivMDfd5a9fiRIigytXsAfGy3Eh0o4rB1K5wHQtrM7dTj3JeNEKSu8zrOOznp8Rs5XV2rPtLgxLxRp5OIDYEuMXU9GV8Py6H74lToJ%2FfxbnqhxsHvixP8jwjlv%2BFwTV%2Fy46n99qKVGe7E6WESIvhNreVMK5UxGLjBEUm4q44jHyvsbVt0dcnj1Zy1IXYJIr%2BgoXmicKKnRYqOSQligC0JMDrwCvDwGn3Byf5j9QXiRH6i%2FAvDNC474l0id74EievAIHGGEiBG6Q%2FuCD80W174M0u22x2evz1%2FB%2BSXRTk%2Be5jWbG9ppELqFb77T6NPxiWbk10cB4m7To70CGCH3CncakoW1s7HzDHwuhQJjRPhZTRpGAqdW31UhFA0gH4BSlo5UNZBruHYr2F5Z%2BhuPgUzNg481kMG8kBaSnb8PoglMge%2BOaUFHuCUH0PtuWw6E%2FPzhLNn3FaKz81i3dvt8TTMc4UTvIwyOviHYW2voHP919K5fwx0OMPmZkr4GOqUBz234Jxmp0S5MwUJq1A6lmPGMsW7Tf4Kb%2B6fFECVvDsHJJf2Q%2BZ52Y4k%2BJJrSbyB%2FTfHiQNaPcmeL30dyNNkHUBGqhdi6FAPF%2BNSg5EXTaCp9hsmqrlxi4Df%2FZDtks%2Bmqdeu3Tr3feW3YE9qUcat%2FvUK75l14zw6GmzZd313%2B5H6wuumwK%2BOGpoO3TGmIiVanWYcP3tQP0cHuf%2Fi3xkz49qCz3AZm&X-Amz-Signature=1daa0e08e41fad012c791a1bb92b5e10ff1560f27ebf9b67f6416421dea1db19&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF74SV5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3DxhBy1OjGgXp3yt70C8Ab9E3UiJjkicHuvgE1vemAiEA9EaXdNkdG0BoWg03zIbd5GDJgCmsJW%2FBd532OAJJaAIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZlK121k4jGOMU40ircA6GXbN2VYt%2FHozj4tr81yMzc3vwsx9TyR6X3EWmx1rRSUdTM1j4bFrUwg3MSXTbZVYmNj%2B15QZPse1JhZc14TkvdT%2FEnoI0oAoxtjzQuauNoOl%2B6r89uYy%2Fw72bj7czrlbDQMNXg0XYivMDfd5a9fiRIigytXsAfGy3Eh0o4rB1K5wHQtrM7dTj3JeNEKSu8zrOOznp8Rs5XV2rPtLgxLxRp5OIDYEuMXU9GV8Py6H74lToJ%2FfxbnqhxsHvixP8jwjlv%2BFwTV%2Fy46n99qKVGe7E6WESIvhNreVMK5UxGLjBEUm4q44jHyvsbVt0dcnj1Zy1IXYJIr%2BgoXmicKKnRYqOSQligC0JMDrwCvDwGn3Byf5j9QXiRH6i%2FAvDNC474l0id74EievAIHGGEiBG6Q%2FuCD80W174M0u22x2evz1%2FB%2BSXRTk%2Be5jWbG9ppELqFb77T6NPxiWbk10cB4m7To70CGCH3CncakoW1s7HzDHwuhQJjRPhZTRpGAqdW31UhFA0gH4BSlo5UNZBruHYr2F5Z%2BhuPgUzNg481kMG8kBaSnb8PoglMge%2BOaUFHuCUH0PtuWw6E%2FPzhLNn3FaKz81i3dvt8TTMc4UTvIwyOviHYW2voHP919K5fwx0OMPmZkr4GOqUBz234Jxmp0S5MwUJq1A6lmPGMsW7Tf4Kb%2B6fFECVvDsHJJf2Q%2BZ52Y4k%2BJJrSbyB%2FTfHiQNaPcmeL30dyNNkHUBGqhdi6FAPF%2BNSg5EXTaCp9hsmqrlxi4Df%2FZDtks%2Bmqdeu3Tr3feW3YE9qUcat%2FvUK75l14zw6GmzZd313%2B5H6wuumwK%2BOGpoO3TGmIiVanWYcP3tQP0cHuf%2Fi3xkz49qCz3AZm&X-Amz-Signature=040e337d69546566ccb43eceb8d9cbed615cbe6bc8c5bbf7d71de04e13433a44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHUH4GT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0vGTFwKi%2F9OaDbhxdfWmW50Km5n4ivRXEOP9PS9BqMAiAsB6JwACpdzUGwtgXtOOG5a44qA7hXmLrE1f7ZF28F7SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMajBacyeuwmbu8LjpKtwDkwUIcUtLR65uvP0zc8WajDynFun%2BqwqOrDMwGvX%2Fg9S6%2FeeKQ9kP3ph%2FGct3%2FNDYWGEPixJU3zjFA5%2BT0jV4kT0SddkyzSlqQk162q03uGftfBX067lpKOzHKhNtmUaks3sFEKL1cjS5rVcN%2BJKGjXZxw1KVNBzSSxmbEMHz7jpkwdmYaUZDkyqXlprmNrRPXzRNS24CNuEZoK6jSTmFPgZTS8rtX0f9%2FL0dHQvm6nHk2BYvc0b%2F4sAOXZbfJZHhq17XNuf3xcX%2BZRtyJOENcxu6j2F2wREek0Bt1d8KZHua0zqKlKpmYsT2%2B1OTnBnV0xyg10YMmt%2BQGLzWiz38Koy4%2BR9hMYDHa%2FTyIpC8Zi%2B9KDr4YUJ6Y1DVPvBg8z%2BXeDod2nzW%2Bw0%2FfdunB%2BN%2F%2BWOzCNkr82HkFLuN1EYKtVVrtCIUvRqSaS2OxC4vmqVfnYi%2FeZC81Tsixto%2Fo0JtfDhcaBy6ZP7Zs7bjTk5WseFz9pT3Fo9vIS4EnRwz4M1D8lWbAhkTJWn06fJCptcFIg3t4si4vYCdsjWtHCYqx%2Ff%2B9PtVe0xfbJdGcLciko3HOGrQM3hknSC6r2Avf6ch1ohwLZR9qlyA0i6Ool%2BHUfARHz0MiVUCb8ScmfYwwKCSvgY6pgFaH0EKpjeysR%2FQttPBdEOc7dQHB56yooB5HPoNKIZe1yjlJ8KvTgB43mWW6b79kmxQjpgUZt50kXDJ9SIlBG0XESWUYQB31V1qNLwqAAxyIVFe6G0xiTtdxs1L%2BhLau4oTZglm3uccwy8oI2qCNpYdSpSjFOP6aWU%2F6%2BZ0ThzVQn7H7mMDuQcF8T%2BoteAQdlR6SKgEb6ZMAeuXFciA%2B9id3smLavgB&X-Amz-Signature=89f992cf68365e9d794da17b31db5e07570caabf4716cc5012204435bfb50141&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUQTWLI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw2cBR3In4F6Le3VSRCdEkoF9zImXdn3%2BS4g3j2QHqCAiBLyXcJo7mgDI3PLOS%2Ft3iQbgiuhcfxweGItDrzqZSOiCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIfdn7l%2BZg%2FRNu8QKtwDVx8UJfvnHVIxVMggj77bUGQcvM6KtCuwt1m%2F75UaZ1EQMlaSCRMMvotBkT7qVpA6j8grSWp6qgX4qB9hVTzjzfNmVTD%2BFWpBxtRN3wGsr%2BKulxFu6FfPPSNgrB83N8M0M7yNucr4LKWsyHiWN0T23WSonlv9B6ufWUUipDuBOKQ30K9HJsa%2FtnCgfVhc%2FXYz7jmp8PhTmxtS2OgmLAsItmmpBAmUaGW7Bs4eaIjinpkO4XMFsGKQnb%2BcxfwucZXXPFckLv8WE7aQBNLOYdVBEXeWlJctPKGJJ%2FoM24HU62d96iWIArVjxIUL6O8yeC0VMzVxzxIg9n0Ch20s%2FluKpfGf6FqWH90aBGx1i5zb1QYXfrhwGTC2wjnMDJy2iJKccKMDNNY7TVX2YZUzRXKnPz1Fkcl84d2NbntCSjmgwB6vZIV6RfrxLW2iKHSfEyOzoqxMYWjmRDbwpmf1TYpecIdjbVILwLBXFHUjLhQwH5AILTYelZjrvvY9XxFB4Lliyl6HuQ6W0PLWPZWkObJEUwRPVl%2F8e0Row3OJaGQw2aD3hUaR7aZD23b2vInBYgZqmtqK%2F%2BqHOPwlrAxbT5JdO0Qslmgk%2F7VIdY085VwgfDeF50Js4mbOpcVh%2FNowp5ySvgY6pgGnnA1TTg7VIsFcWUCuGsoJhDpcUuTgvpL6K%2FahphfuQ3iro1smLcMbMSH87zN%2FVqnVzpEjdnobYTt%2BWdV%2Bv6DaNm%2BFYnG7513kObJxzVEcvYOZt8SAAn6ktVIedjhAuR69BPthv5VaBpfTDBPbyrDyTpb4R1yRM15KfMgyRRSYCG%2BiKyUzIVfHjkQSw7n5pSbqBa86mb8hy7%2FiKumQnaPmn4UXmB1z&X-Amz-Signature=337e38567a936a8757a778bcf54a92dd665bd801eb02d522da71e0c3a7d76ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UF74SV5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq3DxhBy1OjGgXp3yt70C8Ab9E3UiJjkicHuvgE1vemAiEA9EaXdNkdG0BoWg03zIbd5GDJgCmsJW%2FBd532OAJJaAIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZlK121k4jGOMU40ircA6GXbN2VYt%2FHozj4tr81yMzc3vwsx9TyR6X3EWmx1rRSUdTM1j4bFrUwg3MSXTbZVYmNj%2B15QZPse1JhZc14TkvdT%2FEnoI0oAoxtjzQuauNoOl%2B6r89uYy%2Fw72bj7czrlbDQMNXg0XYivMDfd5a9fiRIigytXsAfGy3Eh0o4rB1K5wHQtrM7dTj3JeNEKSu8zrOOznp8Rs5XV2rPtLgxLxRp5OIDYEuMXU9GV8Py6H74lToJ%2FfxbnqhxsHvixP8jwjlv%2BFwTV%2Fy46n99qKVGe7E6WESIvhNreVMK5UxGLjBEUm4q44jHyvsbVt0dcnj1Zy1IXYJIr%2BgoXmicKKnRYqOSQligC0JMDrwCvDwGn3Byf5j9QXiRH6i%2FAvDNC474l0id74EievAIHGGEiBG6Q%2FuCD80W174M0u22x2evz1%2FB%2BSXRTk%2Be5jWbG9ppELqFb77T6NPxiWbk10cB4m7To70CGCH3CncakoW1s7HzDHwuhQJjRPhZTRpGAqdW31UhFA0gH4BSlo5UNZBruHYr2F5Z%2BhuPgUzNg481kMG8kBaSnb8PoglMge%2BOaUFHuCUH0PtuWw6E%2FPzhLNn3FaKz81i3dvt8TTMc4UTvIwyOviHYW2voHP919K5fwx0OMPmZkr4GOqUBz234Jxmp0S5MwUJq1A6lmPGMsW7Tf4Kb%2B6fFECVvDsHJJf2Q%2BZ52Y4k%2BJJrSbyB%2FTfHiQNaPcmeL30dyNNkHUBGqhdi6FAPF%2BNSg5EXTaCp9hsmqrlxi4Df%2FZDtks%2Bmqdeu3Tr3feW3YE9qUcat%2FvUK75l14zw6GmzZd313%2B5H6wuumwK%2BOGpoO3TGmIiVanWYcP3tQP0cHuf%2Fi3xkz49qCz3AZm&X-Amz-Signature=f3ca4a67a5c9e476a371b98a48765e3bc1865b270a44f82912e93029e0c86959&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
