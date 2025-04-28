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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPIHDYD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqa3fg9IOEB%2BZEf84QcD0DP1MkQRoe5oZO02XL1YO5zgIgVqAz1BTCKexbJ1MGRcXQP0LfEbSrcMa7vISM%2BI%2FDKiUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLYz0sPEABoMTp5rnircA%2BRlZnPM32RTpGL0u0dgznfoucOHhN%2BvaSevxu1el5eMfKHyiHFJdSRxfdEDK6pM2Tmtd%2FWvHZb0jCdiGANUO7EwXwStb0OtyIbZl%2FOjgMdePBdkdHjN3IQCD9K5%2B9O9e%2FoSUPhmMIFXVB9kCtMVO1fWWtsKLbwhPPtaI1A8mn7ma67TVLnC%2Faaim4Ohu5WEiBMXIan%2FxOSSyjQzt44GfDbVVLsc5sH4qLoapt%2BkBXYg5xmcMXW%2BQoDogivHAtdfnDOagMFKRJ7lGCsxR7aGbDS2FcxMwQG5S47KibaddZ7eDFyaIshokc8zKDcxP5BF2GVSFdFlcNhBwQonnuzAsUjoKISFCRBE0gJYxZp7TNBHmfL8gFFwfj%2BWn%2BqB00CVptIsz3yb%2FZ%2BO5NpYU0M2AWK%2BJDEC0ga7s%2FDlliWXIMpvNCSjVlb9Z3W8gZsaszW%2F1g9zfiZM8gJbblvSrdLWbrUs4Ll92ZrbSvWDTieQ6syZrGHqY0pa9K1mZrY8Bv8IUl%2BC3qjVgkgmvJXl%2FyDSoE2UYGak2wtxEAjvSdQZ3qHhUUkN1bGNim0A3kkLaEgyImwWuW%2FQZfOrtWbsI6qkBagVIQieWY8lU7xIOgIiAd4hW%2FDM8fCtJNkuR16mMJKbv8AGOqUBNDMos1QEch%2B%2BJIhL6%2B1e4l7mjGU%2B7mpbvTadnCEXsxoTglvIAolIMS0BC1S%2BtdUhR507y5OCecHqHOuA0YPQqme%2F2eeZ8Uc6QHNWDSWKaDL7mMHNjD2Vd7CxCqOgsGVIEX%2B0gGwSLpEWXEkRyR6NK7lcXgWwZpQuIvMB3RFXQSCojd9l1AaHePBZv5JW5rvLSUp1zcBRPhabIHRRuifou275MVHe&X-Amz-Signature=104b23570bdd459276d3dda16d8fd019301a96b8dfa8973fb55a0740852e2aac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPIHDYD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqa3fg9IOEB%2BZEf84QcD0DP1MkQRoe5oZO02XL1YO5zgIgVqAz1BTCKexbJ1MGRcXQP0LfEbSrcMa7vISM%2BI%2FDKiUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLYz0sPEABoMTp5rnircA%2BRlZnPM32RTpGL0u0dgznfoucOHhN%2BvaSevxu1el5eMfKHyiHFJdSRxfdEDK6pM2Tmtd%2FWvHZb0jCdiGANUO7EwXwStb0OtyIbZl%2FOjgMdePBdkdHjN3IQCD9K5%2B9O9e%2FoSUPhmMIFXVB9kCtMVO1fWWtsKLbwhPPtaI1A8mn7ma67TVLnC%2Faaim4Ohu5WEiBMXIan%2FxOSSyjQzt44GfDbVVLsc5sH4qLoapt%2BkBXYg5xmcMXW%2BQoDogivHAtdfnDOagMFKRJ7lGCsxR7aGbDS2FcxMwQG5S47KibaddZ7eDFyaIshokc8zKDcxP5BF2GVSFdFlcNhBwQonnuzAsUjoKISFCRBE0gJYxZp7TNBHmfL8gFFwfj%2BWn%2BqB00CVptIsz3yb%2FZ%2BO5NpYU0M2AWK%2BJDEC0ga7s%2FDlliWXIMpvNCSjVlb9Z3W8gZsaszW%2F1g9zfiZM8gJbblvSrdLWbrUs4Ll92ZrbSvWDTieQ6syZrGHqY0pa9K1mZrY8Bv8IUl%2BC3qjVgkgmvJXl%2FyDSoE2UYGak2wtxEAjvSdQZ3qHhUUkN1bGNim0A3kkLaEgyImwWuW%2FQZfOrtWbsI6qkBagVIQieWY8lU7xIOgIiAd4hW%2FDM8fCtJNkuR16mMJKbv8AGOqUBNDMos1QEch%2B%2BJIhL6%2B1e4l7mjGU%2B7mpbvTadnCEXsxoTglvIAolIMS0BC1S%2BtdUhR507y5OCecHqHOuA0YPQqme%2F2eeZ8Uc6QHNWDSWKaDL7mMHNjD2Vd7CxCqOgsGVIEX%2B0gGwSLpEWXEkRyR6NK7lcXgWwZpQuIvMB3RFXQSCojd9l1AaHePBZv5JW5rvLSUp1zcBRPhabIHRRuifou275MVHe&X-Amz-Signature=22aeb266ff88bc16b9e45e9feb7f8d3b4353776d73f79651a19e966fd3650c66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REU4O2CO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVYviak4VhVA%2FsOH4ePD8nzPykIXcffFbigGivZx2LqwIhAOFkGw1pb4kMNjXeV6mQw%2F3IePvag4Uf%2BlAon3%2BpbAuBKv8DCHwQABoMNjM3NDIzMTgzODA1IgwC4BypUlZ6XHSclpcq3AO94KPfSwMElsao1nDOmxtTbV8iDdD%2FygE8sGu19aSwFubo%2FDYwlL06oYheISI%2Boan0%2B7hB9JWQ1MRTMRRd%2F6FaTyY3iqlw%2FnfWDtOl3P3ivKkSSr3r6Fy04z9T4ShKlkp%2ByhP%2FHxgmRTychwup0M2g5L1AsyM5QIqu%2F%2BUJ10yT8q8tAzmN1ZNANcf1BffzjRbeHspRqbeJ41CngJAGPOlSiQ4dtzph0cmc2JaIDrkigXr2yY4w9aOsAvVszVVOtelomcuyhqKe7X5B0tiCVIra0qaNt9Kg8uNkjInmxPEgnLtIQZcLylqIedNh1iCE9DNbysWxy608CkG031qJJ%2Fv%2B7iOYVlDGyMTMFrXEuTLa%2FmP8nHUW6uo%2BYxAseXasjhebm9ZQaDW5rsBlpi7tOCrkqdidGpzyDjc7VRfUsjDt%2BBC%2ByJYNWJgG6bbifxZDKRBw0PR17dfOwOLgO0OiW8gUn2e5LQ9tW3MXAkhDxz8VWeBdJWrBXF%2Be%2B32cWRZdy96lTbRg0Qt4Mh6tmRmnl7YSO6PpmUdMXfCYuXFNZcb%2Fsg1WTRBdDuFPaohMa0nCYlsvjqrNGkMVnG%2FuYc62jPO6XT6eI7ImxNiTe55NASi8ukWN3MPYdSA%2FLKodwjDmm7%2FABjqkAQaGWqML1BXaSUU2EJTO%2BH1U1Q2nLQpOepmZX3nfJKqqTogfjWs%2BoD2LnEufvNHCjwVKRTSRD0wTv9VViYP3D2yFKjSqxbWGoLDvcX0h82WW1%2BU9m5KW31ucDK4vIlmaPb4zF1NssuIcvKjdoOXvfjs77D%2FSB5SiWBM8IPmUWtrr66mWucv8cO5sdbZodGiZGJsGLsJSOh8Bt53SUm9nMdAL4xTQ&X-Amz-Signature=7ded6da3b71c623b1460619f52c6e31bf317f2ba96db68c00a78297326470b05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZO2CKM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5NJd5JSK6mN264%2Bljx%2FM7gr0MrZgA1tZ2JKZpxJV7dAiAk2ABgz9SP0euHf%2BtS%2Fi679ukaZe7qLtG%2FvauToALuISr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMXbFYqsmBA1jQbFfhKtwDQJnFODAkRrn3CAApUzjAaZBd2qkPI2E4BUpb4BAL8fTilk1UyrAMlcfl6v9REmZHRj3s5RGpgEjNAFRm8do%2B1hIuuACozTpKBQvDHUa8yf%2BdxQVtgzMrgI5TLnO33HP%2FWATj4YmALbS8atAKRGHI95NR%2BjT1Fe%2FJsBtNd8VIWJenVt%2FBP6CLUjRQp%2BYqESOFaNcAYm44%2F%2BbeT8OTe%2FLww%2F1kblJbr2dcJbhN7h8QfpFYC3bOBCuHllbF3Y4D%2BslYDKjDuLEcpUbNVsOvi%2Btk1BjpH0t2yJJ8NbVfKIEbaNGlfYoqizbLk7uQIuSZgLP5fhPwV%2BhiA%2Bza7c5G%2Bg%2BMFOSLH2l6jCUau807D1GiUAQu6Am3%2Bt9lf0AUEM8g6D84Vw0SqRggnCSoPqZHP1Mw4X%2FrJBbZh1QNYuKp%2BRgKYlKL%2BmO8Anz02DEX66LoqwIfn2eoI0dlpbkIfNrElQ0O2J7uJhniwTcF60jLKcliL9ZJDswFKuw4s4BFWEuyEphiGsbXDSZl%2B4XMiKyyb%2BvlDck%2Bw6l3xyFnNlRzUKHC3eioqjdUGCaXxXlUURJFXrIm5cvNAWvDy5Pf8Tx0zRlSo%2BfYV6c0HTEKYdjRKrSz2KaB1pPVSNaAZAiBcp8wwpu%2FwAY6pgFXcaLxoclXMOoCQf48qKk7Nl3ETJJpDCKoDD1R%2Bl7Pv%2Bc8E1mR4PAWY%2BFMHh2IqxEcF6PaerZULHMyKSvLNIlEe9SpvHhi91ICFunNXmBOYRmFL44uBV%2BCraPez9vC9fwF1F7uynnWThM07jQQIBy46XXt1IQxX2A6Z3QW7twwQxNseEEwgD7ENxxRji11eYxD7eoGGcd9HkJDSdoNAb5aTEkMwiiT&X-Amz-Signature=c31c9b45dba9d8fa1877ca1afaeef848d5a7d4003ce5fe7eed9fd94fbb5a562e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPIHDYD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqa3fg9IOEB%2BZEf84QcD0DP1MkQRoe5oZO02XL1YO5zgIgVqAz1BTCKexbJ1MGRcXQP0LfEbSrcMa7vISM%2BI%2FDKiUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLYz0sPEABoMTp5rnircA%2BRlZnPM32RTpGL0u0dgznfoucOHhN%2BvaSevxu1el5eMfKHyiHFJdSRxfdEDK6pM2Tmtd%2FWvHZb0jCdiGANUO7EwXwStb0OtyIbZl%2FOjgMdePBdkdHjN3IQCD9K5%2B9O9e%2FoSUPhmMIFXVB9kCtMVO1fWWtsKLbwhPPtaI1A8mn7ma67TVLnC%2Faaim4Ohu5WEiBMXIan%2FxOSSyjQzt44GfDbVVLsc5sH4qLoapt%2BkBXYg5xmcMXW%2BQoDogivHAtdfnDOagMFKRJ7lGCsxR7aGbDS2FcxMwQG5S47KibaddZ7eDFyaIshokc8zKDcxP5BF2GVSFdFlcNhBwQonnuzAsUjoKISFCRBE0gJYxZp7TNBHmfL8gFFwfj%2BWn%2BqB00CVptIsz3yb%2FZ%2BO5NpYU0M2AWK%2BJDEC0ga7s%2FDlliWXIMpvNCSjVlb9Z3W8gZsaszW%2F1g9zfiZM8gJbblvSrdLWbrUs4Ll92ZrbSvWDTieQ6syZrGHqY0pa9K1mZrY8Bv8IUl%2BC3qjVgkgmvJXl%2FyDSoE2UYGak2wtxEAjvSdQZ3qHhUUkN1bGNim0A3kkLaEgyImwWuW%2FQZfOrtWbsI6qkBagVIQieWY8lU7xIOgIiAd4hW%2FDM8fCtJNkuR16mMJKbv8AGOqUBNDMos1QEch%2B%2BJIhL6%2B1e4l7mjGU%2B7mpbvTadnCEXsxoTglvIAolIMS0BC1S%2BtdUhR507y5OCecHqHOuA0YPQqme%2F2eeZ8Uc6QHNWDSWKaDL7mMHNjD2Vd7CxCqOgsGVIEX%2B0gGwSLpEWXEkRyR6NK7lcXgWwZpQuIvMB3RFXQSCojd9l1AaHePBZv5JW5rvLSUp1zcBRPhabIHRRuifou275MVHe&X-Amz-Signature=755d303c61ad5e85e41c0f82642a52a94505fd93119f0ad30e7e21e62ad4d96b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
