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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MYPSJP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnyk801jOiXO6VfefA581kAil9ZWUovQdwiGXEawuntAiEAq%2B%2Fj8kBeP2VunYoWdWF7TAFbBYUJ93ihoxvhHlaHQKIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF2ALT7vNYjLGju8KircA1LylGJlwtfUWfnd4yvob3QssVC6H6IYpPLdMzdOTFt9aCYdkE4oJeM4e8NXpoK2gqOKOX5QTP%2FfHMhbkyb%2BMhXx7eTigiClJ8%2F36CKklEe10YrBBoprWCUlCv%2BqqqZC8F1ZN1lBZuCE321mfdBZUfXi7m%2BDv14v9%2BlpZ01SRvUAJm0BOCr76gOg7XGajtT9NAtR16Lnk3O9MVlQwISXUbmsAZzxVrjW2Iv41nJBZCQoiVs8GNF7dyIruLHogF81n%2BkcSLCTdtDv58a3UUoWhdA6K4Q6zUGAHOcRA%2FiTQ4GBsh6OLq1V1PUTwapFd4uAt%2BwVJgEh%2FEKJbyAZ%2FXFEPOhhWbrberPml1TBVTvxYE2bkw13Ix9zMdDwoML6CItXM3fmk%2F5i1T1QVjrUadfZhUVy%2F%2BBnsDElFM1G6IXexSiBp%2FOzQx5cnoeEavizsXLUQXo%2B9awv79s2UHI16%2Bt5T0VQKh9l63HGvkw5xWdj19T0LBqTqqBUqI8Ets5%2FEEzSa7%2F%2FhHZLV%2BJPMRbCT8x5ymF9SO0ByHaaVXyeV%2FE%2BmtSYqdo%2B4qLLCzOK3z9YpWlKWuZRJbmBNWXTVsc00BHccEsFCvIn3ju3MyC06SRSVPPtRAP%2F1eY%2FKw%2BLHB38MPfCiMAGOqUB2wJFyqim5sdBSTKneKzzjU3V6KRced4y%2BsfO%2BjV4SNORI6jR6UhHsBgFgKIEM4KHcN4NgHa5MbPsRgKZITNGtFrpZVLowxLqEhAUxR9CbighXje%2BYc4neRBjuBV0NKmtSlqAEY4%2FJ28qZ2gZiZl1UTp59CBbgxO8U1B4j3hDl%2FviwEFHkSf5GswegBYvL2%2Fm3Nh%2BrNLZF5yXyje9yPS2VKyUIaQE&X-Amz-Signature=9e595fadd3fb0b9c3327d11fe376599a0b4f1acd055c7218483ff2dc27b3c940&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MYPSJP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnyk801jOiXO6VfefA581kAil9ZWUovQdwiGXEawuntAiEAq%2B%2Fj8kBeP2VunYoWdWF7TAFbBYUJ93ihoxvhHlaHQKIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF2ALT7vNYjLGju8KircA1LylGJlwtfUWfnd4yvob3QssVC6H6IYpPLdMzdOTFt9aCYdkE4oJeM4e8NXpoK2gqOKOX5QTP%2FfHMhbkyb%2BMhXx7eTigiClJ8%2F36CKklEe10YrBBoprWCUlCv%2BqqqZC8F1ZN1lBZuCE321mfdBZUfXi7m%2BDv14v9%2BlpZ01SRvUAJm0BOCr76gOg7XGajtT9NAtR16Lnk3O9MVlQwISXUbmsAZzxVrjW2Iv41nJBZCQoiVs8GNF7dyIruLHogF81n%2BkcSLCTdtDv58a3UUoWhdA6K4Q6zUGAHOcRA%2FiTQ4GBsh6OLq1V1PUTwapFd4uAt%2BwVJgEh%2FEKJbyAZ%2FXFEPOhhWbrberPml1TBVTvxYE2bkw13Ix9zMdDwoML6CItXM3fmk%2F5i1T1QVjrUadfZhUVy%2F%2BBnsDElFM1G6IXexSiBp%2FOzQx5cnoeEavizsXLUQXo%2B9awv79s2UHI16%2Bt5T0VQKh9l63HGvkw5xWdj19T0LBqTqqBUqI8Ets5%2FEEzSa7%2F%2FhHZLV%2BJPMRbCT8x5ymF9SO0ByHaaVXyeV%2FE%2BmtSYqdo%2B4qLLCzOK3z9YpWlKWuZRJbmBNWXTVsc00BHccEsFCvIn3ju3MyC06SRSVPPtRAP%2F1eY%2FKw%2BLHB38MPfCiMAGOqUB2wJFyqim5sdBSTKneKzzjU3V6KRced4y%2BsfO%2BjV4SNORI6jR6UhHsBgFgKIEM4KHcN4NgHa5MbPsRgKZITNGtFrpZVLowxLqEhAUxR9CbighXje%2BYc4neRBjuBV0NKmtSlqAEY4%2FJ28qZ2gZiZl1UTp59CBbgxO8U1B4j3hDl%2FviwEFHkSf5GswegBYvL2%2Fm3Nh%2BrNLZF5yXyje9yPS2VKyUIaQE&X-Amz-Signature=f2124b8023b617fb25af427917004a05230f087e5dd7c36542da67ff24b97993&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2KAZHD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXec4rUcVOzjhFl1n%2B0nvm7DZOuPbrnpcl0WROujiiKAiAwErbVw5e8n%2BD34eKR%2FRIKb0FHzsd4yEhHALOz0MLj7yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMe2%2F1aZSXu%2FEjaDnRKtwDG55dNK%2FzRGVq%2BVhCESd%2FXL63aoM8Y48DXrptkSs1fOrD4F75cSaiQ%2Fbj8me43Vr%2BXi8DR7%2FCEfBCSBekcArAf%2Fi%2FsJI4MpUsgW4B7vqRenSh7CqvWMKhoWm4IJcvlYnGzxaToXTo0aFFTtYD8IPf4lIu4%2FUYzoaMxxypf2%2BUaimrfl29eKUeClRlKyLlMSbaKyDByEOvbN%2BZ6r27Yg3FHjJyVvMsGFpDCQfCkPfpwPJmUoZhaNT%2F%2Fu70IfM3tblz%2BcudRI62%2FVbKwjtjZvHVmdBL1y3wOvOPew9JZ7FaJIgmwC9kEphOoqbrI6hVgEq20I6rXOjh7vh9vZSj3Z5lz0eVX0e8EWjZoI4OYAB%2BrZC52cdHeagBaVgv2tTsVvQr6pPeflxP0snpii7BECpev%2Bxm%2Bea8783NRnWCyTZmGp%2BaNn%2BBSUeNGmb2S8s9SFlNSP6MtXPL5M5mp3nGiMwmgyYwVTyw65tfrrWNLipIvVaIdfAC8pyuDg%2Fhg2i%2FFVvrI4QQc%2BN%2F%2FE0bWOXVRkZHHQOAsQc80HNTLjmZCLyfJOQIjQeiXrn%2Fm2MPDwH5MwHiuXNejTqsvZvZ9%2F%2BuH4eYC3BKXDuk4DTTxlssrZwXv8hJREgivriZOcBNP8cwgq2IwAY6pgFN65zyDRDy4DVpqDC5DR5ZMDlX8dWal4130vOqeSICi9rkHrLMB8zhXsKmkP3M%2FVn%2F2lSQHxWs0ro3zUja3SCZON6%2BRZJ%2Fm4UYIUK8cwwLoX38rqmzuK7pXYMrbgCNE9MK09ao7hayuOlbKqnt7%2Fyq0H3tHHDWv5NZZmCWldKSjtZpwauNxqOvOmy8VRfKiurRGVEil3AWN2%2BslO36RdaY8o%2BxRCdf&X-Amz-Signature=b5994ee8b2e899916676f1c1d0aabd6ebb838e69d573aae769daebdd54dac9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BKH4IG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6SZR6VRkMiM57K5SlimzFOodtyqzF9rXgHbm20xm9wIgbzdTAY08qTT%2FrT5w4IdpLAoV%2FtamTDPwwjMiG82kXbgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKX5OBZAJM6Kpxn8NircAyx9J1A7YOc5hNoK7aNJEoBWTIyxHp5HyFAte9ATE1ROyglj3Z4cwu4lWoOWDLgi2620Tyzm1FzMmdza%2Fdd3kn2uEsRL90xdFsHrSIHVUbAvcm2t6txvSo0%2BlLoKNV5AFmX3QrHKYqA2nZw2WeOGJXF6Gfdq%2BAobHRn40eKAVjqpaqhZXSBG5%2FZWW73qG9Ep9z8kRsJOGCUL8snPOlQJ6pqHiD6egI2FcKWPm1Wvl5KO2ajmNzhJd9Exp1fmdigKXW92pRSWHBqe9smDIUvutm6aY114ajKI5SWm28heokylZLPpe2Uec%2BsdMlMdQkO3yQ1PJpMIhjwAiNhzweRp25R%2FTIHcvXSdQAlToXc%2Fa0Rmm3sdVBr7hEsLpHFrtIGBANDh8FRKk2iJze%2B569zhzNSSOMD6Ae6Xc8vUEbJwbOHRfrMElmWQhjvlyFflMYGeNiUvhm7Y0ytGzq4NqVEnk8JmXODYX%2B%2BwtQAr3mf11oCgNX5ug03DfXF5Hk2ps4HlE6e5mZOykh1HVlIO3LLwOF4emzPiHwUnDxKBVwzyBKGEIT8rJYoFg1tOG6pyBQpRHqXXq5yRe6AHGIsip8hAc3V3unSAQnD6trYj2BDOpQ4xcUEABYQg0v7qn18OMJqtiMAGOqUB1%2FMOa8vx%2BGsqDcSw4Jbxhjnw6Y1024fN0e4dbIYB11Tciv0vayHcvXwjcsTPEiadjmg%2BgraZkquaYdYyo1sUDbpmFgUQiDRJ7TYbPMhHdsAcQc4dZoKKQiCrBshn9VCksMnnRt2gSQNB4BWdGNsOF2T20qPCGb1Yq2pj%2BrRIrv%2Fnie8AiayjT9lrzTFTA03ENFHTbFeyt%2FivP9zXzrXRY6sbm9hY&X-Amz-Signature=8d93fc5d641578528cd132a225af7e84e04bd8cd33450dff92b7d35e260f8c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MYPSJP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnyk801jOiXO6VfefA581kAil9ZWUovQdwiGXEawuntAiEAq%2B%2Fj8kBeP2VunYoWdWF7TAFbBYUJ93ihoxvhHlaHQKIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF2ALT7vNYjLGju8KircA1LylGJlwtfUWfnd4yvob3QssVC6H6IYpPLdMzdOTFt9aCYdkE4oJeM4e8NXpoK2gqOKOX5QTP%2FfHMhbkyb%2BMhXx7eTigiClJ8%2F36CKklEe10YrBBoprWCUlCv%2BqqqZC8F1ZN1lBZuCE321mfdBZUfXi7m%2BDv14v9%2BlpZ01SRvUAJm0BOCr76gOg7XGajtT9NAtR16Lnk3O9MVlQwISXUbmsAZzxVrjW2Iv41nJBZCQoiVs8GNF7dyIruLHogF81n%2BkcSLCTdtDv58a3UUoWhdA6K4Q6zUGAHOcRA%2FiTQ4GBsh6OLq1V1PUTwapFd4uAt%2BwVJgEh%2FEKJbyAZ%2FXFEPOhhWbrberPml1TBVTvxYE2bkw13Ix9zMdDwoML6CItXM3fmk%2F5i1T1QVjrUadfZhUVy%2F%2BBnsDElFM1G6IXexSiBp%2FOzQx5cnoeEavizsXLUQXo%2B9awv79s2UHI16%2Bt5T0VQKh9l63HGvkw5xWdj19T0LBqTqqBUqI8Ets5%2FEEzSa7%2F%2FhHZLV%2BJPMRbCT8x5ymF9SO0ByHaaVXyeV%2FE%2BmtSYqdo%2B4qLLCzOK3z9YpWlKWuZRJbmBNWXTVsc00BHccEsFCvIn3ju3MyC06SRSVPPtRAP%2F1eY%2FKw%2BLHB38MPfCiMAGOqUB2wJFyqim5sdBSTKneKzzjU3V6KRced4y%2BsfO%2BjV4SNORI6jR6UhHsBgFgKIEM4KHcN4NgHa5MbPsRgKZITNGtFrpZVLowxLqEhAUxR9CbighXje%2BYc4neRBjuBV0NKmtSlqAEY4%2FJ28qZ2gZiZl1UTp59CBbgxO8U1B4j3hDl%2FviwEFHkSf5GswegBYvL2%2Fm3Nh%2BrNLZF5yXyje9yPS2VKyUIaQE&X-Amz-Signature=9fe7e28b582fb4a6dba8a139536a63a4315c7b4d132f029347b0b755469923e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
