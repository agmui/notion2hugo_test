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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2I5DZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr0AYDnrVAswBHacnKjuPHdkU0r%2FB%2FEUYBzJGhrHvaOQIgfi1gVcnKgDz1afWs8t89mFuqkrmS7mB3s1Gk0ZbMK3Eq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGi9LJaJUh9DUyL0ECrcA%2BefNEA5McUrskFWn09zA3pA6JItggy0KB%2BQs6uFqPyU1%2Fk6o4nryidmVpH0gEWLWkp3KI3dmDxb%2BW%2BuME4FwIg253wFTdk1rbntmGFGr%2BvEsnPI%2F0lIGRIn8vwK7WNX7Z%2FWHXl%2FOCpy8qHw%2F0Lnp%2FumfrbxI5E2H2rgQ6yVMMUnUtaNHNFdfpQqnMhIz4sn3pJ1TTcuV%2FDx3YimJLgTQlpFrAXqZQErCMZKeL14F3Swa3cmHwvYmhGfcZyA%2FbwtEYDgI%2FFhqkaMXyYk%2FHZdT6m6b1fX%2BlC%2FwFy5S4d8ivGbIAm%2B%2FLqko5Zcj9AGqNhCf0P%2FxLVeR%2FYCGHOuHeWQZEAWNanlLJL3Qs%2BA%2BseGPaIZ3YOMZKNrllZEAhLlxb02z3aDeJrLBXdpVsGn2H%2B0vCUZHNMUCeT%2BNynwTenoDpeY7rob7CRulPy5l0f5kueCIIURijqNwrnD8ynd4ungDMT89sdvNYcWVcbIkf8cYIrLI7zRTTboabjWLcm%2F1x8TG5qgD9qwUNc7SawxHWx6trQAKiNDM3qpsIu%2FY5%2FCZ9fKbmzocS4thHoAvPvFGxMCNujbbtAmbDpswar%2BFBU0Ir3ycdlcNWFcLplqYGExeZugjgAIOoDf68%2FlPts%2FMM6Dor4GOqUBcBn0xRsEyyARP3VCc8c6XBmcdimRNK4SxbEhbJ7h7QSiGVpV2HPoxFSI9r83xwwf7xkdP%2F%2BCsUkHzrbOCEfNnc6cxfbgmOTSZhKLQRlSRGagn4WaDjl%2Fph8trX6QD%2BSHN8%2F7GcBD3QA0zGq9t6%2BKnCl3f6je5qxetuZfoDWW4wO80a%2BD23p5gJDYopo9Q68R9HnxdYO2UhCme%2Fn7wmKA9Bmhu6BI&X-Amz-Signature=bde0e3d7176dd704b0d770c715fe56aa865daedc2420983c815d6e150d95dcd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2I5DZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr0AYDnrVAswBHacnKjuPHdkU0r%2FB%2FEUYBzJGhrHvaOQIgfi1gVcnKgDz1afWs8t89mFuqkrmS7mB3s1Gk0ZbMK3Eq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGi9LJaJUh9DUyL0ECrcA%2BefNEA5McUrskFWn09zA3pA6JItggy0KB%2BQs6uFqPyU1%2Fk6o4nryidmVpH0gEWLWkp3KI3dmDxb%2BW%2BuME4FwIg253wFTdk1rbntmGFGr%2BvEsnPI%2F0lIGRIn8vwK7WNX7Z%2FWHXl%2FOCpy8qHw%2F0Lnp%2FumfrbxI5E2H2rgQ6yVMMUnUtaNHNFdfpQqnMhIz4sn3pJ1TTcuV%2FDx3YimJLgTQlpFrAXqZQErCMZKeL14F3Swa3cmHwvYmhGfcZyA%2FbwtEYDgI%2FFhqkaMXyYk%2FHZdT6m6b1fX%2BlC%2FwFy5S4d8ivGbIAm%2B%2FLqko5Zcj9AGqNhCf0P%2FxLVeR%2FYCGHOuHeWQZEAWNanlLJL3Qs%2BA%2BseGPaIZ3YOMZKNrllZEAhLlxb02z3aDeJrLBXdpVsGn2H%2B0vCUZHNMUCeT%2BNynwTenoDpeY7rob7CRulPy5l0f5kueCIIURijqNwrnD8ynd4ungDMT89sdvNYcWVcbIkf8cYIrLI7zRTTboabjWLcm%2F1x8TG5qgD9qwUNc7SawxHWx6trQAKiNDM3qpsIu%2FY5%2FCZ9fKbmzocS4thHoAvPvFGxMCNujbbtAmbDpswar%2BFBU0Ir3ycdlcNWFcLplqYGExeZugjgAIOoDf68%2FlPts%2FMM6Dor4GOqUBcBn0xRsEyyARP3VCc8c6XBmcdimRNK4SxbEhbJ7h7QSiGVpV2HPoxFSI9r83xwwf7xkdP%2F%2BCsUkHzrbOCEfNnc6cxfbgmOTSZhKLQRlSRGagn4WaDjl%2Fph8trX6QD%2BSHN8%2F7GcBD3QA0zGq9t6%2BKnCl3f6je5qxetuZfoDWW4wO80a%2BD23p5gJDYopo9Q68R9HnxdYO2UhCme%2Fn7wmKA9Bmhu6BI&X-Amz-Signature=ff32b48546a61a549d960b091b002b590f87db610616ea1151217f1843b3959b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLTZILM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVX59WxHqPjcPDBJ1B21BCa7LVMQ3zdGuIeLIcs3JYawIhAPYYJdlJQZykveV5e3CtzBwjfJxONExeeEZVitHNy5zyKv8DCBoQABoMNjM3NDIzMTgzODA1IgwPB8ngucSWZZBZfWYq3APYxFahatG7IBceX12kQRS2uHciAX8pmUmxPpJFS59pd2g8mTwY3FW9n053WeuJb0A35EQxQ9I8tMuSQLn5fBSSOl7wzPIlH6ZKvK8g%2FEk9Cbh9WEmk9Pu5AYeTqJdaFHShvb%2FnHgfqoOE59T%2FvLGz%2BghGct1rCb2OT1pfwFROLe2DDljEsX%2BSEZINq3fgWdAXRtnlapBPLfh18hbzPq0ZLKBh7AW536PdYyPVhh7PD4lTmqoDxT7vUHj%2Fh541%2BIXzBRFWuSnexqnQ3w5U6jWBtIFVlizxT2zqxIOsl5ZO6tcgL%2BxSdKhePeuMSxwteFpPw%2FmKfsvbbjqE3JSxiTKJWP0l6HylqusnXTulzgw7l140hEcC97yktEdBLcyY4yzWUKJPvO7njn0JDP8O06GEt1OMvmJmpHzkPPykBCUihygm1sJPDR1D0WMoRL%2F%2BgHCYIba5bXBwIXiJ7KZkoNG40pJug6s%2FU5cWaeThbrLRxIHUGX4iNyC07tP%2BW7DWb5EXjYgKjGcJcIxCIKRPkht8B22ZqqY%2BeyHahA10PWKNB7bnv7YPJ1BxzaLd3j4zpLSLH9obSMUO0nvYOB7es2O9FYC9MHnUZC%2BZnDVzAUQydXgd55heLtqUMOM%2BpUjCPhKK%2BBjqkASJNSjj5ltRItFngXoAa3rTPP7tPqLqJf20qIH2oL0Vx3nyD%2FSgfXFsZogSivIGr4ezgYOGioRT9q6uVWwCAkfJRMrTDv%2FCz7PAA%2BeHitVAyBHdQxwWZ5v4KrQlNbD7HMQcno9faY6eoEzF8L6v0I%2BbNL8t381e8pm%2FbOsL9Uj63sNHEy%2F8JKbGxrpJG2y7AQXIJBvuNUB96rdOHXMi9VdZJH%2FMj&X-Amz-Signature=d8f15ab62634f71281e540056aa3cc595c4c268edb2b3c210539ac22b3fa552c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTGBLCL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk%2F8HlwETq4JoA7lAz2yYVqQ8Qh%2BR6OONWMaUWOdaCbAiAzG7EmKCSRwjazKhhTOStHeE6NVNU8B%2BzE%2FF40Fiu5Tir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMW4cHJHud%2FXQPredsKtwDVlCozP%2B1u7noF0wKSq46Lc33aaUTlQZKpE%2BWRbjun8mfWOJ4z23iis1rflVAom%2FRWpWDwuuwllqltvzVp9J0CPvUX3FY%2FMD0M8dY%2FX0RLPFgGjfv8UYHrrVX36g5l3aM3oOhRERmSJ9FRqXH2qHAT6z96guYBjQlSKe70eX4UkChBCtyrU%2F5iR0ApAYfkaxh2JIE8KXA8IJ9uo4vfS3wlGxVUxYutYwByxiJPhj0EcQjoTB3gvLQPsL0h%2BKtpIwjFe%2B4X207Wspt5txLSIVclxIzQW%2FC%2BXh7Mv9SqRHx15uGZIircZhyWqWV47H0IviprpScFTwXwSquJzTeF%2F9D0nwf%2BV4Eh7xYuUWg92n9Km4uX5jUm8gcRfHjKhlXF9660Fv4OwcezaxksGEa0l7SO4dOq0W1EPuEi%2FZOWrMml6V%2Fl4QR5OIUodSaPcstd6lMumFmweOTLuHu%2BhhElzBataDYrlb1vV%2BOFes0%2B1Dyc5yCLJQqemAyAXhVyKxaxKXXoRnajfC%2FigQALDPIld0qglD1s0TVRsGnxNZZ9%2Fo1eheBVjT74FBi5JaVJrc77QcFIT%2F7%2B4NzxkGw281Ljh2cubBv2evaGAtRv9OgZUV0bpKkagCBbof6SXaK5tAw5oOivgY6pgHN4KwwOQnrqeA2JdSKNKBCxAE%2B2GEdu7MS28mA4oIctG1vzVMz3UrnPNKNii9uI9ziM5LNtvkxDQAX5hZABJ9HpwfRg%2FeztBwN9cZ%2F6bPfr0R0I9yRTOfA7KoP0BxH4qwlBU1Uq5gFB5AmBRkYVnB%2FWDzl3NB1LA7dvi%2BhqeBx9KPVY66y9y0bplGSmLdbpI%2BWioZZEIWXTgWvICvZ62d%2F7jYj8faK&X-Amz-Signature=b4f3db905d130d3c53f810a093fbea51f1c2e8c1f957d7518d123891e9b6e9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2I5DZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr0AYDnrVAswBHacnKjuPHdkU0r%2FB%2FEUYBzJGhrHvaOQIgfi1gVcnKgDz1afWs8t89mFuqkrmS7mB3s1Gk0ZbMK3Eq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGi9LJaJUh9DUyL0ECrcA%2BefNEA5McUrskFWn09zA3pA6JItggy0KB%2BQs6uFqPyU1%2Fk6o4nryidmVpH0gEWLWkp3KI3dmDxb%2BW%2BuME4FwIg253wFTdk1rbntmGFGr%2BvEsnPI%2F0lIGRIn8vwK7WNX7Z%2FWHXl%2FOCpy8qHw%2F0Lnp%2FumfrbxI5E2H2rgQ6yVMMUnUtaNHNFdfpQqnMhIz4sn3pJ1TTcuV%2FDx3YimJLgTQlpFrAXqZQErCMZKeL14F3Swa3cmHwvYmhGfcZyA%2FbwtEYDgI%2FFhqkaMXyYk%2FHZdT6m6b1fX%2BlC%2FwFy5S4d8ivGbIAm%2B%2FLqko5Zcj9AGqNhCf0P%2FxLVeR%2FYCGHOuHeWQZEAWNanlLJL3Qs%2BA%2BseGPaIZ3YOMZKNrllZEAhLlxb02z3aDeJrLBXdpVsGn2H%2B0vCUZHNMUCeT%2BNynwTenoDpeY7rob7CRulPy5l0f5kueCIIURijqNwrnD8ynd4ungDMT89sdvNYcWVcbIkf8cYIrLI7zRTTboabjWLcm%2F1x8TG5qgD9qwUNc7SawxHWx6trQAKiNDM3qpsIu%2FY5%2FCZ9fKbmzocS4thHoAvPvFGxMCNujbbtAmbDpswar%2BFBU0Ir3ycdlcNWFcLplqYGExeZugjgAIOoDf68%2FlPts%2FMM6Dor4GOqUBcBn0xRsEyyARP3VCc8c6XBmcdimRNK4SxbEhbJ7h7QSiGVpV2HPoxFSI9r83xwwf7xkdP%2F%2BCsUkHzrbOCEfNnc6cxfbgmOTSZhKLQRlSRGagn4WaDjl%2Fph8trX6QD%2BSHN8%2F7GcBD3QA0zGq9t6%2BKnCl3f6je5qxetuZfoDWW4wO80a%2BD23p5gJDYopo9Q68R9HnxdYO2UhCme%2Fn7wmKA9Bmhu6BI&X-Amz-Signature=ba06a1fec083df36b885e4d0f4a97eb749638e74d9d5ca7a8330a1e56af8013f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
