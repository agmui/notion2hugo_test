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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRNHBNU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZxUCN%2FAi07e53O%2F56fYOBzdprBFqrHlNob3DX1FZbgIhAOvVU6KX%2FJsyCzfYz9LIcRwrNA2yKU6s6kayh4T4QZdjKv8DCE8QABoMNjM3NDIzMTgzODA1IgycnkGqMIrW9MWkUpkq3ANDlXWReqUonz8OztcJ1i8veQLvUkXHOXfwpTMzD9rlaL13Zgm%2FuR8GA6tg0SyKx8p1%2F%2BfLhm7skv0ayllLYM%2BMJTvP8BS97TGgiCCvGCwqRRj7n8DCCy6vUnXj1abi2bg9lVJiW2k5gzNf3Mm9kLuufuYFyNvpZTD81hQ9zmaH4OtVyVKQ8II7yRmEKR01VT%2FLGbsJaTb9R8qC0TMuy8%2BcBviEvmTTG%2BiDXt9g3AEZmj5aiXdbwtn5MKcxHODFnob49vyv5JIMJBF9gzmX0U1ULWttB6STwPDjfz6xKE3UPOPXkHOr4EmxxKTg2%2FCo90vnhZKkeWFcWHb3GzUywx57%2Bg229ozQoSuA0mXPa1zEayZUkfTd7bX61R8h7nZgoL5lJnwqS9n2gNIuCciHvpkRk9ARrwYlFhUaO5q2ZkQF%2FglznPkbsYlx7erf%2BkjtUURpNXPs1TwjfpSQl8lbbVruyHV6cSTjsvXUzfd%2FOJj05lFKgk66S16sxNGdPjjf8DwaWPswwdH7hFEkKU%2BRYplw1kkI7IHtGeDXjFFSKzoAWc1MKm%2B3yIORnICHHGbfBG5BeT4PrU3Hwi4B%2Bxp0Oilr14wiHU7XAnozcA5eBAb3w%2FWol30auj2xQJErSzDNxoDABjqkAehgo1qMnYpa6QyD9yEMXv32wlUUu9lWjH4nwtAbJATwZXwmYyLFgpQSBT2X6xmVN59TweqYqc8SmAD2VsNE9v0Gogr4VB%2BIlpBcWxQYoSM3Cl09uFi6MWZr0GbpxaTShEwYBLfn5wS1SCHkhPJBD6cs%2BTPs9IE%2BmfffhvvehHRq6WyA1jEobDREdy%2BXWQNWpIMNl6sV56g%2FqEentFLHzlpC%2FBit&X-Amz-Signature=573ed0a8719844e1a4715523c5dfbcd0837c541cb3e8ca6ab8d6c428a6606dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRNHBNU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZxUCN%2FAi07e53O%2F56fYOBzdprBFqrHlNob3DX1FZbgIhAOvVU6KX%2FJsyCzfYz9LIcRwrNA2yKU6s6kayh4T4QZdjKv8DCE8QABoMNjM3NDIzMTgzODA1IgycnkGqMIrW9MWkUpkq3ANDlXWReqUonz8OztcJ1i8veQLvUkXHOXfwpTMzD9rlaL13Zgm%2FuR8GA6tg0SyKx8p1%2F%2BfLhm7skv0ayllLYM%2BMJTvP8BS97TGgiCCvGCwqRRj7n8DCCy6vUnXj1abi2bg9lVJiW2k5gzNf3Mm9kLuufuYFyNvpZTD81hQ9zmaH4OtVyVKQ8II7yRmEKR01VT%2FLGbsJaTb9R8qC0TMuy8%2BcBviEvmTTG%2BiDXt9g3AEZmj5aiXdbwtn5MKcxHODFnob49vyv5JIMJBF9gzmX0U1ULWttB6STwPDjfz6xKE3UPOPXkHOr4EmxxKTg2%2FCo90vnhZKkeWFcWHb3GzUywx57%2Bg229ozQoSuA0mXPa1zEayZUkfTd7bX61R8h7nZgoL5lJnwqS9n2gNIuCciHvpkRk9ARrwYlFhUaO5q2ZkQF%2FglznPkbsYlx7erf%2BkjtUURpNXPs1TwjfpSQl8lbbVruyHV6cSTjsvXUzfd%2FOJj05lFKgk66S16sxNGdPjjf8DwaWPswwdH7hFEkKU%2BRYplw1kkI7IHtGeDXjFFSKzoAWc1MKm%2B3yIORnICHHGbfBG5BeT4PrU3Hwi4B%2Bxp0Oilr14wiHU7XAnozcA5eBAb3w%2FWol30auj2xQJErSzDNxoDABjqkAehgo1qMnYpa6QyD9yEMXv32wlUUu9lWjH4nwtAbJATwZXwmYyLFgpQSBT2X6xmVN59TweqYqc8SmAD2VsNE9v0Gogr4VB%2BIlpBcWxQYoSM3Cl09uFi6MWZr0GbpxaTShEwYBLfn5wS1SCHkhPJBD6cs%2BTPs9IE%2BmfffhvvehHRq6WyA1jEobDREdy%2BXWQNWpIMNl6sV56g%2FqEentFLHzlpC%2FBit&X-Amz-Signature=98bb0696d70f61cc309b433eccb46c3ddaf241054b1304f76a9ada285fe797b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=58caf120b18b28f0371ea26a995495775663bfe214410510575e1abc661f1b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4K6NIEA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSdGg2%2FK3PX5v2YThYz8B5PsF8z9mL%2B3SjkJ0BbvJ6WAiEAm87%2FTmrZ7oDQkQ11LRiK9D0%2F06X%2BpeRfu6vWR7q3gUoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPOU8%2FEKpcotkCqOjCrcA43tXVbAQBr2YeVIYPauOQx4hkX7%2FlkaLVaK15uGTGIkAXLU9YzDxfvqviYDNPMH2%2B8ZtrIY1zD6TFdzFiDmTJOSt%2Ft16Gq%2BHEEZnCXqAu%2BqP7sjO0kpDs2Jt3pQlFs%2B0IvfeJt1C7BA7TsWSDmG4jepVt%2FVZgoLJetAG1uwY%2F%2BY3fzCrD6dqAMf6b8zEh2XqGvu%2B3lPJJ67aryA8JYfCFhFdHlE2Fx4gzXbsmB8jviUFfAEQMCVVIpprhsXoYVuYC9A9WRU1wHualz5Jax9AtQ3TexFcXnr2DeRsKUjEEdm%2FFBfsEvKtDoiYY2N1cpKu88Ki1FmOtYgF4uzxoiH9WD5MHEeb7jY31rMJtBa0x6sUnTwspYxagUmSIGhaaTBKw%2Fco9M0g4ZoNnJnj0e1HiypIgdIK9s2BiCQwPzUwbHsghACbx%2FBO55E1lkHOrNM7TUsikZ30DJKExVRjl1mLkSG8EIZk3A4EUVfwyUWe0mJEjavK%2Fcxt9CUjUvprX51%2F8Uzw1sEbZgn3zD6JdpqnguXWNLL%2FIi3CPMiD05ZMTF5GmCXQKOaAxd9qbnyTyqoKmMteiORI9L3D%2FKumKFgbI7moYl0cCFI7mYnNq7JmCSoT7Wfig9%2BItQs1dZDMNjGgMAGOqUBzDt1m3nL1u%2Fx2NglADs5XqsUQ9tCd1C4kC7voSnpg5dsg5eXmwF3gQHVXqjeT6yG2gMTApT7VgUUBJY%2BElxeNz3iCPDzjd6jb2js8k5fqgw8mpwGqG3ftFfk0h%2BbH%2B1G9gyR7iZJJoLj3fNyvO%2BsjS67zrcl8yEKqA9jxVNPerQvK0q%2BCyjbMfkeB9UU3i4C0Qo0l6pIQKqIX6TIp4ISPlwa7DCx&X-Amz-Signature=3347c3ea5d65b0c4f64fa67359cc20fbe4634db457fbec70c4ffcc6eac976db0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRNHBNU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZxUCN%2FAi07e53O%2F56fYOBzdprBFqrHlNob3DX1FZbgIhAOvVU6KX%2FJsyCzfYz9LIcRwrNA2yKU6s6kayh4T4QZdjKv8DCE8QABoMNjM3NDIzMTgzODA1IgycnkGqMIrW9MWkUpkq3ANDlXWReqUonz8OztcJ1i8veQLvUkXHOXfwpTMzD9rlaL13Zgm%2FuR8GA6tg0SyKx8p1%2F%2BfLhm7skv0ayllLYM%2BMJTvP8BS97TGgiCCvGCwqRRj7n8DCCy6vUnXj1abi2bg9lVJiW2k5gzNf3Mm9kLuufuYFyNvpZTD81hQ9zmaH4OtVyVKQ8II7yRmEKR01VT%2FLGbsJaTb9R8qC0TMuy8%2BcBviEvmTTG%2BiDXt9g3AEZmj5aiXdbwtn5MKcxHODFnob49vyv5JIMJBF9gzmX0U1ULWttB6STwPDjfz6xKE3UPOPXkHOr4EmxxKTg2%2FCo90vnhZKkeWFcWHb3GzUywx57%2Bg229ozQoSuA0mXPa1zEayZUkfTd7bX61R8h7nZgoL5lJnwqS9n2gNIuCciHvpkRk9ARrwYlFhUaO5q2ZkQF%2FglznPkbsYlx7erf%2BkjtUURpNXPs1TwjfpSQl8lbbVruyHV6cSTjsvXUzfd%2FOJj05lFKgk66S16sxNGdPjjf8DwaWPswwdH7hFEkKU%2BRYplw1kkI7IHtGeDXjFFSKzoAWc1MKm%2B3yIORnICHHGbfBG5BeT4PrU3Hwi4B%2Bxp0Oilr14wiHU7XAnozcA5eBAb3w%2FWol30auj2xQJErSzDNxoDABjqkAehgo1qMnYpa6QyD9yEMXv32wlUUu9lWjH4nwtAbJATwZXwmYyLFgpQSBT2X6xmVN59TweqYqc8SmAD2VsNE9v0Gogr4VB%2BIlpBcWxQYoSM3Cl09uFi6MWZr0GbpxaTShEwYBLfn5wS1SCHkhPJBD6cs%2BTPs9IE%2BmfffhvvehHRq6WyA1jEobDREdy%2BXWQNWpIMNl6sV56g%2FqEentFLHzlpC%2FBit&X-Amz-Signature=40ae6edf214ddd609ae1166ac61fc99ac5e6eb7c122669c4e9c39800fc81657e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
