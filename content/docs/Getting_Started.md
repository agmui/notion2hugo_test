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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOXMCU4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCKPDu11WhEs5NP%2BaLVUr%2B7tkFUnmRU%2Fi1B4kPp1kUL2AIhAIrYKn%2FdTLV9ngva%2FFBTyW6ABpHFRsWHc9Oim0BlulM6Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxX6HB%2BfmrFpPvwP7wq3AN3Vdd6jPwpR3%2BhihVoU2sU0Ni%2BiRB925xVJvpTRsO9BzsdL6fc4Uz6ZiWlt3H8nSoPGWFL0A35sxnqCb00Ku6MczglQcVkaXtfa8DqPLECHPe%2B7a2xaaB9YtOW65OPQGVVWMiedya7vrs6BrKXiPb%2BrCmjmZUgzl4DAzzhJzoAViDKlVdjlX%2FsnkRBG%2FDcAV8gDyYtJmTKOsSlkyh1zy97Sxx8QsNfQEsOK%2BEvUyGwF%2BkJ9x4n36pme6BFjNkrOxY4jFxefLm7AVtp%2BW7hnnkeqePXiJ5ZK2vK24dRyszmLePYUD6xVE5yfhBZ7EZ52%2F8EF92g50i4Blqs%2Fdd6jWRbV47xQBtWi8P2Q%2Bw7uQ4ejQ7KsdGF6sHTOs3FX7to682d8wDZQzSKi7eD3gA4N8tjF5UAT2%2BsnQZJ4B90m3wD18CNbLzA2rTMSFppPmqC11rFPFCgzj%2F6DMlN4B%2Brrrc%2FaScK58OtphEc7VIVLYApRC2%2FkLEu5dUzbojnpC3MXtXk6W42NMQobTgwfavqvk%2Fz9uEgCkxtYH0UGQkwnz9DGhGdKCk594FspHzenUzfaz9XvW2Ckqm5s%2F22lfgMCOg8sRIqKQzVIRPo2cW0nT3GbiN4aT0760CMHkFfbDDR6cu9BjqkAW1FkIl2ViUf6xIXGnm5Urd0omn4fJ6wEEfaVdg41cYm%2BhkaS6ZE7q%2FRQuoBQE7kBM4mns2zGCJn3Jc9GOIbAyywTMX6CEkAI6Wsmm8CAFIq35dLgz2sBn9UC79aoRuwpdwcjNEGFul55wkq7Z4CuQ5rJM8ioSBd51q2X3D1g9N5tN8qox3zM2Sf9D0R%2BfYiDh6F1gJw8bEl2KvfT9x9%2FDifwhAW&X-Amz-Signature=c404a6338d68ac6227538d8fcb55da7821fb52c2973bf8a24b3abcf28ba3d38b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOXMCU4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCKPDu11WhEs5NP%2BaLVUr%2B7tkFUnmRU%2Fi1B4kPp1kUL2AIhAIrYKn%2FdTLV9ngva%2FFBTyW6ABpHFRsWHc9Oim0BlulM6Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxX6HB%2BfmrFpPvwP7wq3AN3Vdd6jPwpR3%2BhihVoU2sU0Ni%2BiRB925xVJvpTRsO9BzsdL6fc4Uz6ZiWlt3H8nSoPGWFL0A35sxnqCb00Ku6MczglQcVkaXtfa8DqPLECHPe%2B7a2xaaB9YtOW65OPQGVVWMiedya7vrs6BrKXiPb%2BrCmjmZUgzl4DAzzhJzoAViDKlVdjlX%2FsnkRBG%2FDcAV8gDyYtJmTKOsSlkyh1zy97Sxx8QsNfQEsOK%2BEvUyGwF%2BkJ9x4n36pme6BFjNkrOxY4jFxefLm7AVtp%2BW7hnnkeqePXiJ5ZK2vK24dRyszmLePYUD6xVE5yfhBZ7EZ52%2F8EF92g50i4Blqs%2Fdd6jWRbV47xQBtWi8P2Q%2Bw7uQ4ejQ7KsdGF6sHTOs3FX7to682d8wDZQzSKi7eD3gA4N8tjF5UAT2%2BsnQZJ4B90m3wD18CNbLzA2rTMSFppPmqC11rFPFCgzj%2F6DMlN4B%2Brrrc%2FaScK58OtphEc7VIVLYApRC2%2FkLEu5dUzbojnpC3MXtXk6W42NMQobTgwfavqvk%2Fz9uEgCkxtYH0UGQkwnz9DGhGdKCk594FspHzenUzfaz9XvW2Ckqm5s%2F22lfgMCOg8sRIqKQzVIRPo2cW0nT3GbiN4aT0760CMHkFfbDDR6cu9BjqkAW1FkIl2ViUf6xIXGnm5Urd0omn4fJ6wEEfaVdg41cYm%2BhkaS6ZE7q%2FRQuoBQE7kBM4mns2zGCJn3Jc9GOIbAyywTMX6CEkAI6Wsmm8CAFIq35dLgz2sBn9UC79aoRuwpdwcjNEGFul55wkq7Z4CuQ5rJM8ioSBd51q2X3D1g9N5tN8qox3zM2Sf9D0R%2BfYiDh6F1gJw8bEl2KvfT9x9%2FDifwhAW&X-Amz-Signature=2f6a5798c8218cc6fff221653c0a7232e103ecea309ba6dfb52fc0ccfdfd383c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWS7RCZV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAVyrLr28niW5izWonG9VZUfaam%2FXguIzy1pwQxkN1K6AiAIQyiK7gZ1cQgNDv27v2mVRWztfLExW1vdWLodmn40LCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMnLS0qD%2FXPtMcqTk5KtwDfYeAMgbD13ufGY6rxMWV%2FzygCotlU2iM4KsYTBw8H7jLHw0mvHYMXpzGFf%2BOraC%2FEz5EF%2B8j7QU2oLe1HMRtfxHftcDayp6OgeNiz5NcLG1nq%2BvhT%2Fw39Gub7bTVepU0BwtpnZnJQvib6udmQlbxN0cyDT3yCdYp4MZs7M8RnLKfuWLEJunObE%2FjB2bRnTVHp66WilRXlMbKZwkPRPnQyyqLDbVYAZe8uVr894%2B11FRPl6Wgehk%2BOKDua4XJejrXgaQ%2F8LcE7qOxkX0CW8Rs2QXgeiKu1ayWFTKB7Ht%2FU8MAf7oAr31y0GFKDTche5%2Bi5vJhS%2FXrWCKQ7dn2p6R6pOaj8AHRlw2NfHqEdC6KxjEmv%2FDN%2FLXg1eFE72kKP8RAr6G42XE15yZXX5WzK80FCkwRc2HFamLCttpnaoDJU2jq%2Bu7lnkSON8RLuEKW9l5zXj173DdgZAZbWnmRIrb85ugM7NN%2BUxMoWQ0N17YPc3faeKCGG4XNOvItOS3Re9rsvv0kSwyY5jqAeS5EBYSkcWDFyP4biq6irqifbuTqAU4Z9lnXQyS2KLbg8QELLRgueibz0R5saMqC9xZWzqQHLBd4swbQUqYg2RdYGMUq26iaJVnBlBp9if2cL6Ywn%2BnLvQY6pgGAwui7o92P3soy3RdklCjz10zViM0VjRQy8L%2Bh60qcuijBWWVaVcDhKnwMkO%2BCtpsYjCt34qypqm3jglNdynmx27hGOkxjJqh5OfxoPSqrBY1%2FHyeKfBul8sXxxx2BhExZ07y%2BfZz43QnkJ0WiOWxutLl39ROtyOWLzGlYtnqFZAmDJvVuNTGTd1cA%2BjNNUcFByc7RxMEmIvfz84pPwwCR5KcTxvMz&X-Amz-Signature=0d4ecfe76cc325ec0e720ac5b9e4ee3fcacc33b42034680e8440fadd6de0c044&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ2NEOX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDrf%2Fw8W0fGQWOvfTiG3TeVGApumENPSb4zO6qMELOpwIgSyECVDjdxdjOMLV2LtyzgxKCCmLfNyL2illk1uFdNIUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPks%2FMjaaT4RgfFvvSrcA%2B0ub3jhyEj2V5cazlEeuNymN9ZUITTJe9q4SrAHTmz3ViWk2dD123ZTu0ciobhyLq3LXuzWw9WjTjuSj7K8DEXreN%2BlOQjJYcHpQMZHrZDtP2EZzqIzfFpQbwiKpFr%2BPAPcZABl7TTfpQ4MWeICMY5PBnIlJ2bZAD7MfALKnSiQYaFZrsHqnVQpohr5frNW6W5z2jjU0QMbTchnVY%2F4eDUES8yNJFlPQkvXkwm9vX0Sf79M4CFmkHhHYkSVURWBW8%2FmCqFsbPbCvOLUf6efzME2JPeKAa1ucgGTHHTvpFRwnCNM3BFuJ4M6qcK6YuxwrJi%2B8DO4wS5YBl8BJ8BVN6Sn1xLlQDz1vpxrjc1bQcfLLUoQhifqPTo8gu7RriayDhTgPnhLx57J1qvg3KVG%2BLDdSqXPq2RR7VXgtnXP6SLOnny6eU0L5V93teQzl%2BcjLU31RM%2FhUXuMsvNUcg1cO5Wms28%2BihKbGaMUJM5Irfcaf9G0mc%2FNFhqMbZ97Ow6GD9CdMaBVghkScxg%2BKVsfW94PSIRzPwcB62i5d3w3ONlC0cyEWI1sUCqcXFPhylPQt77%2FxtQlxiA8JILMONKZHgSeCu1qCOsalI7CAxlugQDyhTChyC0bEzvxgIAWMO%2Fpy70GOqUB5b0%2BOMBgyWCgKH0Q6Qa%2BTUQSqVqDw%2BVn9gPO9yXXMtDgtw%2FCWYuug5k12PYF6BwQxpRQZlgdBeSfcDyyaHyDHH1vWTP74eebULcw10u%2FEUymn8q0dQlRmkWipzCh6IBotXPezRrb2LxTP6WvsSWNy6LaDtewZ%2Fk8cP8XFbRkFdXlrlTEAH3QGpFQFGwJHKxVj3QreL02CDFkMN5cs%2F2du2llf6oI&X-Amz-Signature=bc96bd3d588b870cd64d700cd7a1c37ac2a0f6caef0109c2b577d8fafb8926ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOXMCU4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCKPDu11WhEs5NP%2BaLVUr%2B7tkFUnmRU%2Fi1B4kPp1kUL2AIhAIrYKn%2FdTLV9ngva%2FFBTyW6ABpHFRsWHc9Oim0BlulM6Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxX6HB%2BfmrFpPvwP7wq3AN3Vdd6jPwpR3%2BhihVoU2sU0Ni%2BiRB925xVJvpTRsO9BzsdL6fc4Uz6ZiWlt3H8nSoPGWFL0A35sxnqCb00Ku6MczglQcVkaXtfa8DqPLECHPe%2B7a2xaaB9YtOW65OPQGVVWMiedya7vrs6BrKXiPb%2BrCmjmZUgzl4DAzzhJzoAViDKlVdjlX%2FsnkRBG%2FDcAV8gDyYtJmTKOsSlkyh1zy97Sxx8QsNfQEsOK%2BEvUyGwF%2BkJ9x4n36pme6BFjNkrOxY4jFxefLm7AVtp%2BW7hnnkeqePXiJ5ZK2vK24dRyszmLePYUD6xVE5yfhBZ7EZ52%2F8EF92g50i4Blqs%2Fdd6jWRbV47xQBtWi8P2Q%2Bw7uQ4ejQ7KsdGF6sHTOs3FX7to682d8wDZQzSKi7eD3gA4N8tjF5UAT2%2BsnQZJ4B90m3wD18CNbLzA2rTMSFppPmqC11rFPFCgzj%2F6DMlN4B%2Brrrc%2FaScK58OtphEc7VIVLYApRC2%2FkLEu5dUzbojnpC3MXtXk6W42NMQobTgwfavqvk%2Fz9uEgCkxtYH0UGQkwnz9DGhGdKCk594FspHzenUzfaz9XvW2Ckqm5s%2F22lfgMCOg8sRIqKQzVIRPo2cW0nT3GbiN4aT0760CMHkFfbDDR6cu9BjqkAW1FkIl2ViUf6xIXGnm5Urd0omn4fJ6wEEfaVdg41cYm%2BhkaS6ZE7q%2FRQuoBQE7kBM4mns2zGCJn3Jc9GOIbAyywTMX6CEkAI6Wsmm8CAFIq35dLgz2sBn9UC79aoRuwpdwcjNEGFul55wkq7Z4CuQ5rJM8ioSBd51q2X3D1g9N5tN8qox3zM2Sf9D0R%2BfYiDh6F1gJw8bEl2KvfT9x9%2FDifwhAW&X-Amz-Signature=d955b2fbf7871656761a4d9f3c6429caad0a06af4b637ebad9d141ad54046d20&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
