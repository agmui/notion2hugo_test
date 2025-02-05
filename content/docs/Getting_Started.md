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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6XEID4O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH6teWzWN1k4alUV20WO1DkN7jC8seKHlHnuDxpoygMKAiEA1GiEC5eaVVCAL1U3mRkYZpBOhCew0v2IQipZTuxTKj8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDtNaJaxzwmox8nAhircA3iigUEP0IKI2pWszRSk6jcFOFS2GDUlRTEp3HrojRrtUfXgcb74xqFQCEXPpd5K6odih4%2FExRoTXlpkRZ2lh9jUZUru3%2BbDBPFWgnsytr8X%2BmKYUFN60%2FLpRlxXJmeglDM%2B%2B7dnB3zvG%2FCFybbJNhboQ1f8CrgTtUKbmUEGMXbbkGixGgVu3NwxZq%2Ba8sO21jj8%2F5z3zfyTQToHv4eXBygH6PiijlNwGs7FLp7k62bY3HBnPiT2Euhv9E6x3bgKoqHZg9syCVXZfe7XhCZrhTXNLt8NCBRaJAEdD1DOkqYWCNAu2Z9pgg3GRW%2FYFlIzj1XbrjZh9KDL68Uvf3qp5bs9caac1JeIRN%2FdUjFL7kIx6fJZzTKD2Ft46wU7a3evEzFX45%2BT1De64zgcLbrZLFgHfHuculwK4ahAA4h5As7LMwi6ITGLU6PChW26By%2FpQk3psgHFihfXw76PsQrA7qlydp3hSj4z5FRSDA5pnvo77xiEH7U3PLR55a49oZzzbmccBSOVXqOH2977s%2Bhjv6K816LZGI0HR5GZZpLZLG%2F5bLanPihhupGJ5zThiRq9opDhWT5xu0eCYL%2F4LF%2FExvtdlGzutwWE3k8Rc3ph1vcv0WCooEalCrRxWP95MOCBjr0GOqUB6g%2BfH%2BqjLRyG9DBYLYYm1sbURL5prajzZCqP%2FoL5EW%2FXKeKzvyeCOBLMoUh7J37Z6IiXEiZoHCx83oCWekXMhNzG%2FZLgS82xo6vePhQQt5qDX5jfrVPAJZM6kHm2uJEyqNsNoZ7c142NiEExpfhYcOPJuXtYZ55oXj99UH1lsSPoLWMhMitTqsyGOjY1IaA127XRhUnwV4Z6m2aL9DQm5FW%2FsIt9&X-Amz-Signature=72173f0a0d40605a444eba2bc9b7f91778e9bb2ebefcf5284cdf9a46f7b2d236&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6XEID4O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH6teWzWN1k4alUV20WO1DkN7jC8seKHlHnuDxpoygMKAiEA1GiEC5eaVVCAL1U3mRkYZpBOhCew0v2IQipZTuxTKj8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDtNaJaxzwmox8nAhircA3iigUEP0IKI2pWszRSk6jcFOFS2GDUlRTEp3HrojRrtUfXgcb74xqFQCEXPpd5K6odih4%2FExRoTXlpkRZ2lh9jUZUru3%2BbDBPFWgnsytr8X%2BmKYUFN60%2FLpRlxXJmeglDM%2B%2B7dnB3zvG%2FCFybbJNhboQ1f8CrgTtUKbmUEGMXbbkGixGgVu3NwxZq%2Ba8sO21jj8%2F5z3zfyTQToHv4eXBygH6PiijlNwGs7FLp7k62bY3HBnPiT2Euhv9E6x3bgKoqHZg9syCVXZfe7XhCZrhTXNLt8NCBRaJAEdD1DOkqYWCNAu2Z9pgg3GRW%2FYFlIzj1XbrjZh9KDL68Uvf3qp5bs9caac1JeIRN%2FdUjFL7kIx6fJZzTKD2Ft46wU7a3evEzFX45%2BT1De64zgcLbrZLFgHfHuculwK4ahAA4h5As7LMwi6ITGLU6PChW26By%2FpQk3psgHFihfXw76PsQrA7qlydp3hSj4z5FRSDA5pnvo77xiEH7U3PLR55a49oZzzbmccBSOVXqOH2977s%2Bhjv6K816LZGI0HR5GZZpLZLG%2F5bLanPihhupGJ5zThiRq9opDhWT5xu0eCYL%2F4LF%2FExvtdlGzutwWE3k8Rc3ph1vcv0WCooEalCrRxWP95MOCBjr0GOqUB6g%2BfH%2BqjLRyG9DBYLYYm1sbURL5prajzZCqP%2FoL5EW%2FXKeKzvyeCOBLMoUh7J37Z6IiXEiZoHCx83oCWekXMhNzG%2FZLgS82xo6vePhQQt5qDX5jfrVPAJZM6kHm2uJEyqNsNoZ7c142NiEExpfhYcOPJuXtYZ55oXj99UH1lsSPoLWMhMitTqsyGOjY1IaA127XRhUnwV4Z6m2aL9DQm5FW%2FsIt9&X-Amz-Signature=6334d3f655a86ac7c897388171b98af09d584ee87ea12bddb12631ab04e683b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPO2YNTA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCw6jZD39PV3QRCxud0eYcfMg12bCcVhPbkRELmBGILhQIgcz1If47EQdKA0gGnTpXgjzxLhD3etPY8pevCY4utdjQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPoYmdibeKP95%2Fa55SrcA9OOra1FOa%2BW6GyTsNhejoKGdiP8%2BoMrsFl%2BkzP07Gv2MEYQpDgre6spTe8qXMMJjzphVbKzVoe0%2Biia7RCVhPRCiXYbkOIUWxbIAXkPJ7S42oEaPrGHbyR1T6EzOg%2FnMMZKCFdkwJ2KC%2FrRbLnijLI2TsicOSBqp7XSlJ6VmKfxQ3%2BMgAQtni5B1fmzxeT3fLiKWytMi1SuWxFdC2NqBmqh3ispN4QuAE5rOZSzJIwB7TLBJuByCSDEzKcLn4uVMsJunPbmqu6NF%2BuRBgHytoTQHRVeOEOqj5eRZ1SEX%2F4NOYvp7BM8HUg2mK1d2z7W0gY2UoFd1GGrUidTyN7cYDjNkIRwXcJGdVs9h2oORoyJPwfogWdaqB8m6Cxw0Ti7wN%2F4tygOuiLLu4t3I1Z1eETpLpbq%2BJ7xEcEQdIE%2F4ynfg3GemPg8In9CxRDiNPAm%2FZwnMnkDGWk1az3MYXzzFS3Iw8C7Y3ZKuln6vYv8JbKjWVPEhsHey6LHUMcbgPqOq2ZD65AtQtMCD8ARpuO2IyvtbHxcNfi%2FQ%2FsNVnaTenkMJNc1daZcxfq0fLyQIkxzZ50HgQzf63kn3wSbHXg1i0UQfARTkLRD%2FeTX6XYyQ8wJksIQONyZCuNpeKd6MMeCjr0GOqUB2h%2BD919Y%2FfxKJRNBvzpGyNFb1Cp2TTTF5VyOEWTihz1tIYcTqb7EUMkVAK1BtDxvekQDKYLFmMC9%2FvoYtORYcAVsODYrfcGuILY2k2Wrycm%2FVLIX08%2B3%2FTPCu2CMDNogTDJ9ror5%2Bi2RmfC9MRgDYCemtMpqgsspiVQhGt%2BRL3jbCqJ4iuAiO2JscklSKPI%2BCcJWv5St2N%2F6suT6EoCThkMJ4O6t&X-Amz-Signature=841a6e6db1a5399a832e3f846a0e45a45ac19344a68896ec44d55e82fd59d775&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PJZBDW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCTcRQPK5cJoQPPJFKaj4wlzOWId%2BnXgGbsuF%2FEAEEHCwIgPOc%2FXl%2F9M894FQY7H88dxCyFT7f53IePlwrf4xoXMG4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOo2MsW1B8VXXNh4iSrcA1W9h16%2Bqw%2FJyGMO0EwAKqM1wZqNRa6xpL2zTqrbX8vtwx%2BVOSuQgfdZdScDXmFfEmkhkwmkt7GQyupfLFJiMoD79n5UgunOpxO3ToIDxWjjU4e2GjX5QS8qHG7q1Emf38Zktqjayjd%2B0hVN2j1BKIQDb1QpS2HULCNRuMKZKJe3%2F1SH%2BKroGfxVKtKXLlpacQpZDoXUjX6knslENj26e0RvRnOrMYTcBed%2FAJQ0hb%2B%2FXMIFDjfUlMthDevEpXzFXGHd%2BYD78vpHxhBlM43yenkdkNsjfBlFe7BmM7lfOjKoDQ0GL%2FogD3yA1RTDznFBhDgY2P9xz9%2Fsj7ixBd8ob6DFD91hzqEB6S3jBiCTBQD22fTii1lUlrPIqlCdYUv4%2Bpt3XlHeGb1%2Fwjp%2BqrLUusoiAI3EP%2BYHtA8KDfU0rJJ%2FqRn7Elm%2FMe6Xrat1ePUeyJyz%2F%2BLSJqYGqdsi7%2FsP8%2B%2FwJK8CuUVouQfPps0OcX%2BUuKN7X2KW%2B40FJDcsyjvEzRwu7jdb5JGPbQH7MmQGZ7BoRZNym3eeq4vds589PKYSpYFALkey5GQ89av8aLp10UD8uCueXHi35Ts8yp6A%2BQVq3%2FhZb1pP5HnCGLBgPw1NZsCHUHq3Q7XKswCwMMeCjr0GOqUB1MbFqHI1WMqp1dwCwR2aVocA8x2xKg7MeWLxmgpsChI8hdMMzU7%2BcLgoUThygq54aJpBlX5yeAcQg9sgzPaJ%2BdqzAPnZKQbtyp0FTk3msIdRL95fdEomLMlwe9rPRfkoIcIPxHqf3x8S9zfsLJpYNlMJmH9ulhoJ%2BJFRNEh4cOa7LjXjM70Ib4zcI4tn1Kk4PJtIYVvClIwzsa4uVye41GuotASu&X-Amz-Signature=35ca6d50f5e17ffa6198bfb8ebf7939e731ca9e78bf77eeede84e4fb10dc17d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6XEID4O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH6teWzWN1k4alUV20WO1DkN7jC8seKHlHnuDxpoygMKAiEA1GiEC5eaVVCAL1U3mRkYZpBOhCew0v2IQipZTuxTKj8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDtNaJaxzwmox8nAhircA3iigUEP0IKI2pWszRSk6jcFOFS2GDUlRTEp3HrojRrtUfXgcb74xqFQCEXPpd5K6odih4%2FExRoTXlpkRZ2lh9jUZUru3%2BbDBPFWgnsytr8X%2BmKYUFN60%2FLpRlxXJmeglDM%2B%2B7dnB3zvG%2FCFybbJNhboQ1f8CrgTtUKbmUEGMXbbkGixGgVu3NwxZq%2Ba8sO21jj8%2F5z3zfyTQToHv4eXBygH6PiijlNwGs7FLp7k62bY3HBnPiT2Euhv9E6x3bgKoqHZg9syCVXZfe7XhCZrhTXNLt8NCBRaJAEdD1DOkqYWCNAu2Z9pgg3GRW%2FYFlIzj1XbrjZh9KDL68Uvf3qp5bs9caac1JeIRN%2FdUjFL7kIx6fJZzTKD2Ft46wU7a3evEzFX45%2BT1De64zgcLbrZLFgHfHuculwK4ahAA4h5As7LMwi6ITGLU6PChW26By%2FpQk3psgHFihfXw76PsQrA7qlydp3hSj4z5FRSDA5pnvo77xiEH7U3PLR55a49oZzzbmccBSOVXqOH2977s%2Bhjv6K816LZGI0HR5GZZpLZLG%2F5bLanPihhupGJ5zThiRq9opDhWT5xu0eCYL%2F4LF%2FExvtdlGzutwWE3k8Rc3ph1vcv0WCooEalCrRxWP95MOCBjr0GOqUB6g%2BfH%2BqjLRyG9DBYLYYm1sbURL5prajzZCqP%2FoL5EW%2FXKeKzvyeCOBLMoUh7J37Z6IiXEiZoHCx83oCWekXMhNzG%2FZLgS82xo6vePhQQt5qDX5jfrVPAJZM6kHm2uJEyqNsNoZ7c142NiEExpfhYcOPJuXtYZ55oXj99UH1lsSPoLWMhMitTqsyGOjY1IaA127XRhUnwV4Z6m2aL9DQm5FW%2FsIt9&X-Amz-Signature=5ebdbbfdb5c5daf6d3cac7e12bf8a6d574ae45624635bc7c7de7364392416816&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
