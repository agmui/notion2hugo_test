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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MODD5CL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe0EuC3BbwQUVcBxch3%2BM9zQPn36pED5vb9e6n3f8ZtAiEA3Xze8s2uXBt6VZKWMOX7K%2Bd6br%2F3xq2x2lZoHJGnGFsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAtKUIdFY1VwHc0qUyrcA1kwnYbXjwKmjh%2FXLcYOz32BJdGrpA8YLAreODnzFWlRDwgB4Nj5Ic3mMTUs%2BwLXGVhpW3kXe%2BOsTEe8Ho%2FKEkTJVEvqE%2FKp9%2F1AKaJhFR%2FkKL4lag29XGiCvgdd9g5USrYGsG8BzXfGlXXwsvACbrlItV8Hv%2F73eEMPWdxpb2LBcImKvK0wyqfSPMSWC5ka92rOK4bFHBDg6LSlpl5x08YbfrthUPzKD0lwfVs4tAcyKd6%2Fm%2B38vywgEcJN0gKxGQWYoTHcg98g7hDYzloi42pZGIsespfIDxRix2pGfFy78sw1lcAdlYAUd8w9L0h1luVn9a32w5M877IrjuiwJjvShGUp%2BALJIxUkBOuMo6QH0PpeEXq%2F7a8jOmANP54284FHQLNwg5vsV9D08dLI0Mu0MiQoFbJwxhfDtcUp38eN0Au6LM5szTTD7QedxQ831CoMwlnLI%2Bpj%2BnihoufaaFdyTPNaKL7lBpULGUPLyn%2FIkIyPHI1OWQdDozAOVUw%2BORvIyq6WRgtJrjyzG9W9FEl2IZba3IQDyEhGhN0QV4DcYrSEPtVRGz0eR9pS4KSvP7R%2FptToIcHJOqyJeHGdp0Uge7gh5Geghyew7%2FOXxvMvPKz7mYi184mdNRCLMN%2Fsv8AGOqUBWR0FVeWPVSEh3XVmA41H3AKCrWUaK53wTrUVnHnHTctZBiOQVS8SU1VJVgTc%2BBR3Q8F%2F5JDTiwFpmmHmm%2BNJ5P6fzg1%2BP%2BvFWY0idIewpnGJRzYpcEpyoOLvLIrAAwVptF38IiYgabJwFWPaZsVWIgOHAoKgHFzvaT6nCoAac05wpRNYJGNLU9BnKce1tFXtpLnEp7OHQM4y2sEa%2BMU0i0wa9vaB&X-Amz-Signature=2326b4e6e1ec0352e563a954bc7a4e3c368a3a8001415c693298de71afe348b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MODD5CL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe0EuC3BbwQUVcBxch3%2BM9zQPn36pED5vb9e6n3f8ZtAiEA3Xze8s2uXBt6VZKWMOX7K%2Bd6br%2F3xq2x2lZoHJGnGFsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAtKUIdFY1VwHc0qUyrcA1kwnYbXjwKmjh%2FXLcYOz32BJdGrpA8YLAreODnzFWlRDwgB4Nj5Ic3mMTUs%2BwLXGVhpW3kXe%2BOsTEe8Ho%2FKEkTJVEvqE%2FKp9%2F1AKaJhFR%2FkKL4lag29XGiCvgdd9g5USrYGsG8BzXfGlXXwsvACbrlItV8Hv%2F73eEMPWdxpb2LBcImKvK0wyqfSPMSWC5ka92rOK4bFHBDg6LSlpl5x08YbfrthUPzKD0lwfVs4tAcyKd6%2Fm%2B38vywgEcJN0gKxGQWYoTHcg98g7hDYzloi42pZGIsespfIDxRix2pGfFy78sw1lcAdlYAUd8w9L0h1luVn9a32w5M877IrjuiwJjvShGUp%2BALJIxUkBOuMo6QH0PpeEXq%2F7a8jOmANP54284FHQLNwg5vsV9D08dLI0Mu0MiQoFbJwxhfDtcUp38eN0Au6LM5szTTD7QedxQ831CoMwlnLI%2Bpj%2BnihoufaaFdyTPNaKL7lBpULGUPLyn%2FIkIyPHI1OWQdDozAOVUw%2BORvIyq6WRgtJrjyzG9W9FEl2IZba3IQDyEhGhN0QV4DcYrSEPtVRGz0eR9pS4KSvP7R%2FptToIcHJOqyJeHGdp0Uge7gh5Geghyew7%2FOXxvMvPKz7mYi184mdNRCLMN%2Fsv8AGOqUBWR0FVeWPVSEh3XVmA41H3AKCrWUaK53wTrUVnHnHTctZBiOQVS8SU1VJVgTc%2BBR3Q8F%2F5JDTiwFpmmHmm%2BNJ5P6fzg1%2BP%2BvFWY0idIewpnGJRzYpcEpyoOLvLIrAAwVptF38IiYgabJwFWPaZsVWIgOHAoKgHFzvaT6nCoAac05wpRNYJGNLU9BnKce1tFXtpLnEp7OHQM4y2sEa%2BMU0i0wa9vaB&X-Amz-Signature=e40896a8bce5488b312a2f14fe3aaaa7c7081456912579cb632909f54667c4b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS473OSU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuy8HvJevVRdS0sbU1C5VeuVBH4yPHjFeyai12MllqAQIhAISUV0Hrz2xBXfrSPwtzWD5OmQWikKJ2KkezmsIPJ0MCKv8DCH8QABoMNjM3NDIzMTgzODA1IgyIpp3S2xOlbgoHQNcq3ANufPPeosRSg5Erd7oh8nwDDI5MNvIzNEp9kWpYju%2FhHsVr7QUripmwxq8u8z9ufu7W1s3hv%2BYQKWIcDY%2BK1vVPdHOukKx9VnJPPfzDRJg6h91pY1MNZXWXXaOdDEaKI0dYPIlwsb5AO97SuVPnDisEKJk7HZSOd194pm3heCtRcCPSrdPLTFv57f4DnlJ4C47tZxt2vL%2BbrjbsV2u7C45eYnDKyI42UP5EXMjmQOLmtl2iuCX2ZSyAQ7Ci8uaLMBhjHxV4gdsVRCQ7Cnk9uishTehKI3m9qahkMs304%2FIr%2FXVlaM05nQFQ9Kwy7DvhfgJbUtmBZmKDAKHAtLb5jKUHwdCL4%2BHPOaz6oEghNeuF0oXi6bNPPP04bS7T0WKAI%2BaoZUMFCjLT4uOJkecgWA9lFZoTWqOH%2Ftw%2FoIffa4sRxX%2F%2FHDJPsQZODEgETkbRfQqwkuLLPfOJs2IWo5hwifzdRKa%2FlJnROSD%2BlCQNVDFgJX74feM0rY2LOl%2FcH%2ByzbKcLB3o6qJ2%2BPAsaiQl1lJz87BM3saTvt%2BefXD1sW9IntHjAKCBmDC%2BdY09z7CrGsbBnQAZa9Wdgh5lq%2BoHMDUe3zMxot0gpS9Jw82AsCf%2FYdQq7dGay0oS56WOOlTDC7L%2FABjqkASmKdoJQL%2BMTB5BFcwhsQNTvVMQjkaed0HzL4pZgtd2IscBXQDOHUcUO%2BIUN5cKrM0qHVGkPzLktq1wogmFNHUrthX577SCpgxErxt2AWoehfZ3CWWrt%2BXF8Ro%2BeWFm9VJSA5CxX%2BJuXliBTTcwCRzlo2MlwYsk7ReGVEtzs%2FceUFNp24KA0%2FQzc4OlAFUETqE2mE4mj9NGn9FuWKaUXNtcbRXct&X-Amz-Signature=f5fb5e5704b42282d0341be196ba09ea300ab630e7cc37aee6ca50e5beeba83c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RROYAWQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzVckxvPeBpKLw0g55OWGuppl2eMA%2BpQ7aonBcQma8vQIgA4fKW3eqEzQixkQQelHglSyAnFLvEVnmqhxA1LphM94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLf%2BtxKlRMHgOZejxCrcA1%2FtDvuCZ2sHeT9EIYIMKQtgitEtztGO%2BJJB%2BnhcfDN%2FkBYFt7VjfOFic3%2FBLE4c2EImpdroj3Vlr1TRY3hN2s7cMIHOI%2FRUTbMcTu34L1F5NQ6jU2kAqg9eNyRCjxemdGD8DFJF69ZCLN20OYhACbCPQLQs1qmTg1A7L8xM86hpRGPNGfk6kJUIXYlSmad%2FPQPDjMioeP45kdRMseM74PPUsUdUVToXBYacqT2Ud5mHlwztPelbNxwd65vpygbf5%2B9%2BJNBpu2ReRrSGlGFJ%2BbFUBIDfbSkkJej56d%2Bpa1od0mz%2FvzB4FPRFe1WrQqYVjPb7g0JwrI6DLchefaijGnjkGlwhj9GXc%2B0hrBjjNsqgBX%2BVt5Gxr1hog8z61qPxlnGmh2w2BKzemlSvQJAPd%2FjJTkGB7fD5gFmwZMZetd68g62JjjgWaqGOgLv9beyxgi6No5fbuiZouLwIi1Wgw4kYiWtxhKYkGhvuXLHRIUDk4dzg1e3ET2CtI4G0QCQyqkz%2FISZklmqpSoqw9o6qb4O4DS3tn1cYN7K%2FJaQl%2BUQeasqjLhA4A7T3qnlCkONOCJhgnb%2B3IU5zOl802XBRbvMIFJSkYd9CLEcmfhLrGbUy5iqoHogXH5F7Md6VMMPsv8AGOqUBKPPRG4YCaDw02GSoQFS32MawrwIBXqnOclYvly7%2FWbft6LcrzZOXWPiXJSc219HWM3wtkf3WL3zpsQQBkNPe3GZTrNQBYdaZa%2BKU9bhNTmftzgVaLbNzBZFfkvMHMUS0TAzK%2FnFqC%2BlZhu4Fg2kpy4%2B7XE7A%2FmPvrFOfeK2J1pv61oSLy%2FvYjwvaeDQOeoJA8xDzlVJwEOPayhJjTyz%2FDcjeQQxM&X-Amz-Signature=e09db14c669da0d99f447224f22576244a0405b308e498060b05c855610f3d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MODD5CL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe0EuC3BbwQUVcBxch3%2BM9zQPn36pED5vb9e6n3f8ZtAiEA3Xze8s2uXBt6VZKWMOX7K%2Bd6br%2F3xq2x2lZoHJGnGFsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAtKUIdFY1VwHc0qUyrcA1kwnYbXjwKmjh%2FXLcYOz32BJdGrpA8YLAreODnzFWlRDwgB4Nj5Ic3mMTUs%2BwLXGVhpW3kXe%2BOsTEe8Ho%2FKEkTJVEvqE%2FKp9%2F1AKaJhFR%2FkKL4lag29XGiCvgdd9g5USrYGsG8BzXfGlXXwsvACbrlItV8Hv%2F73eEMPWdxpb2LBcImKvK0wyqfSPMSWC5ka92rOK4bFHBDg6LSlpl5x08YbfrthUPzKD0lwfVs4tAcyKd6%2Fm%2B38vywgEcJN0gKxGQWYoTHcg98g7hDYzloi42pZGIsespfIDxRix2pGfFy78sw1lcAdlYAUd8w9L0h1luVn9a32w5M877IrjuiwJjvShGUp%2BALJIxUkBOuMo6QH0PpeEXq%2F7a8jOmANP54284FHQLNwg5vsV9D08dLI0Mu0MiQoFbJwxhfDtcUp38eN0Au6LM5szTTD7QedxQ831CoMwlnLI%2Bpj%2BnihoufaaFdyTPNaKL7lBpULGUPLyn%2FIkIyPHI1OWQdDozAOVUw%2BORvIyq6WRgtJrjyzG9W9FEl2IZba3IQDyEhGhN0QV4DcYrSEPtVRGz0eR9pS4KSvP7R%2FptToIcHJOqyJeHGdp0Uge7gh5Geghyew7%2FOXxvMvPKz7mYi184mdNRCLMN%2Fsv8AGOqUBWR0FVeWPVSEh3XVmA41H3AKCrWUaK53wTrUVnHnHTctZBiOQVS8SU1VJVgTc%2BBR3Q8F%2F5JDTiwFpmmHmm%2BNJ5P6fzg1%2BP%2BvFWY0idIewpnGJRzYpcEpyoOLvLIrAAwVptF38IiYgabJwFWPaZsVWIgOHAoKgHFzvaT6nCoAac05wpRNYJGNLU9BnKce1tFXtpLnEp7OHQM4y2sEa%2BMU0i0wa9vaB&X-Amz-Signature=45895e1b01960335b4c76e714b0aaf47ff1f8fe72b9dea3b24273a3db0ea4dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
