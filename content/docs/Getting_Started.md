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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECI26GD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyT9W6UI5IvJYpXPS6eMF0BmAnJZpaN0gaIcFByEKBSAiAE9ux%2F44mOmVS6pD2eysocCwgA1RWJshnYoIkwMHeA%2FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2BIBNtcubcbhkdtKtwDjyZx%2BcyhV61%2BOCCx8kKD%2F49UNvSAQ0zZSnmzhNB9SmLrm%2Ff3dMikfa1OHlpN1vUFKoDvdxmNhMrHAueR8eMTPA5KeqzxNDmv%2BhE4Y%2BEFAS0Dz0ghbrAKPUvL76pI2w86Eb%2FKM7kdzkOgGrmCl%2Bs0nfxyQb4YQxrvFbWWtc3I%2Bfp428iQ6i%2BuGD%2BslIfl9VCGIfapcs37I3POCGQy%2BhnVuf9e%2BhXkTBQi%2BeXf6Q02ULVzrB4gEx5kC7%2F3LuJ8zH4al2dwmVNxCRc7QqODqbPmEkUAHc2IEj7Ab1%2BYZbD52MOJi1bXJInrJvtKplp6KU%2FuVZQe%2BaLbi%2F4XLX9kuVyccV5Snyfu%2FZnl5a5ceob%2FXh4GcLxuwrW81%2BovMGfMar8chYNLiL6zTib%2BCe6VnMB8plWBqenEnChAUw9b0adlWbHKTbnN0cCafHyHno2EjyjSBdGv0AquVcynqqSRat75h0fRxtAA3kDlG8%2BkbRThdiXkMgBhRqGBexgajj738n9K6oD0qigfGIOyq1uzJOxkHpNClC3dXL24o1K%2BmK1dK22i0RH33W3sTSVXPVrm%2Bq%2BR0hQsD7sxDN6ekGtUAXrTjsBGx%2BAbZjAsondHH5cIG0hr8oLIndhLMT5b7rYw55nBwAY6pgFbDF3zAoSB2HqEALp5mJkY71Hjv0YxP5n5Y6%2FW2eySowls2vq49ns%2BgfeKAtTArhwtxciqeyHXPJR%2FSSXljDGAN2Je3y4TdjWGdX1WYC8MSPr4fEI1SWeSk2SAk0M%2B3MLiezAGCD9capgAz7UaC0DjAQQ5xB51138lqBl8QJqFiS0pAkH66byJ2ZWBlJJtKTP2ukZ1aT6GuwJ2PRl19ns%2FxB7WuMkQ&X-Amz-Signature=e97fc9fdcc30fb0c5a38459d897c3c87ebd1f74f30d72247b1e3968442c5670c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECI26GD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyT9W6UI5IvJYpXPS6eMF0BmAnJZpaN0gaIcFByEKBSAiAE9ux%2F44mOmVS6pD2eysocCwgA1RWJshnYoIkwMHeA%2FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2BIBNtcubcbhkdtKtwDjyZx%2BcyhV61%2BOCCx8kKD%2F49UNvSAQ0zZSnmzhNB9SmLrm%2Ff3dMikfa1OHlpN1vUFKoDvdxmNhMrHAueR8eMTPA5KeqzxNDmv%2BhE4Y%2BEFAS0Dz0ghbrAKPUvL76pI2w86Eb%2FKM7kdzkOgGrmCl%2Bs0nfxyQb4YQxrvFbWWtc3I%2Bfp428iQ6i%2BuGD%2BslIfl9VCGIfapcs37I3POCGQy%2BhnVuf9e%2BhXkTBQi%2BeXf6Q02ULVzrB4gEx5kC7%2F3LuJ8zH4al2dwmVNxCRc7QqODqbPmEkUAHc2IEj7Ab1%2BYZbD52MOJi1bXJInrJvtKplp6KU%2FuVZQe%2BaLbi%2F4XLX9kuVyccV5Snyfu%2FZnl5a5ceob%2FXh4GcLxuwrW81%2BovMGfMar8chYNLiL6zTib%2BCe6VnMB8plWBqenEnChAUw9b0adlWbHKTbnN0cCafHyHno2EjyjSBdGv0AquVcynqqSRat75h0fRxtAA3kDlG8%2BkbRThdiXkMgBhRqGBexgajj738n9K6oD0qigfGIOyq1uzJOxkHpNClC3dXL24o1K%2BmK1dK22i0RH33W3sTSVXPVrm%2Bq%2BR0hQsD7sxDN6ekGtUAXrTjsBGx%2BAbZjAsondHH5cIG0hr8oLIndhLMT5b7rYw55nBwAY6pgFbDF3zAoSB2HqEALp5mJkY71Hjv0YxP5n5Y6%2FW2eySowls2vq49ns%2BgfeKAtTArhwtxciqeyHXPJR%2FSSXljDGAN2Je3y4TdjWGdX1WYC8MSPr4fEI1SWeSk2SAk0M%2B3MLiezAGCD9capgAz7UaC0DjAQQ5xB51138lqBl8QJqFiS0pAkH66byJ2ZWBlJJtKTP2ukZ1aT6GuwJ2PRl19ns%2FxB7WuMkQ&X-Amz-Signature=f02499767bd79406f3b7c3f1aa016bede63e01f26c6b590eb7a5191723fa200c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF5FGZY6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECWzmrTJP7O8h%2FOA1326PRnoF1CjeyRQceytzOeZT4XAiEAwSJLfJF9PKqTv%2FbCtHuyBUksWTIoWYqk%2FXj5c5%2FdYsAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvZ1bvVp%2FnfaofcQyrcA3VUkVkzS3x%2Fvw6C1017Dl5zdWKpfxmXDRzg%2BnSyF3t8Bg6mqTbtsrZXsyIKsC4DKJ1MoZaZuzntsfj3ZajjYj98gVGNJHix6jmb6aqRjy1lgjcmEfk90oKaEUqnlb7aJgxC%2FSmiIcpvpnHWr5qih638Q7h%2FEPVprwdccPuIrX85RgJdNrcMKRr6Uwl6A70Q9IyspN4ApzSnvx%2FK5aahf9sBdTsgxhTZKtyi6ybYcdZxCGp8mFw1bPvOfPhLBRwkNaFDEDd2MzrRzoL7dMCdNY9ejLLSCExPsgBJQPsmORdblo71Evkjg0buWVt%2FcsEKUovlaZoI5VJ4vjhEW8oqHSweRGoj0NJHpUukVP%2FPxnElfD7dQrv%2BJKDW6yb6h0OCZfOD%2Bl6xg4yWVrmkS1UjwoaspknDCgN7QSYIMtlSdzTkcmEBupBXURqK5uI1cHL79sBjs5HmevtsSSg4Z6ycFI9LiogwxFkcS1ccv6uTH4hRk8spWJIqOyY1cJdzHU7e3nz7tCxPnxnpzGqCylPmOgyVGBXZA6XFP2fNjPY2t93LuzfZwzFfL2xwG1DnauUV4YcsUix2U5%2BnIwseuNYNqjbgG%2B38J25NXbCRYZJxVfeP%2FDoSgxetEeya6LH6MOeZwcAGOqUBgaYJZFyOPqLMgN%2Bqqen6Ws4sBps1IHNydVNtaD47GFxkXnsVg1BHLMry5m967L58D%2B6RVBfp2eNtD4VG7V1AzZpib3fVV3qRHW8grcOMoEMUF431jkT5zhqvWX0iAdv9MUpu0pa0ooU15NoevptMou2KpgjOC5Ar%2BeO2synwI%2F6G7V90K0RHaYIqOnIB3Ti8paJ%2FPqG%2Fn6buQDV8u74620O7FXkx&X-Amz-Signature=09be4ac6b5482a4c27713c04d1e1cac63b0474f292e0adfc850f86b923df9f79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTWGZHW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4kDi9MH3vJGvbXU1Sik9GSM%2Fn5KsEa1FAkaLUyAE%2FNAiBD%2BmVtXnERVF93rcAmKulKxRQBrRwyyUKzzfoFrcW8%2FCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79kk13PxqznZLVBcKtwDCCquyAaHtpUwwX%2BLBxtNudQYrAOOiwIGjCxfVp5OJkmTP8ptEyqPvvFcm%2FPQc6Ju4ugxJn02SfD7pd9S82JJJk8F6QNgXKGFMVwc%2BsZbcEa6ymV83Fw9T6yQM%2F9RSA%2Fb2uqgMb%2FpCqvwOQvagMWz2%2FnxbEpByRZr%2FzUa3Suf9%2B0%2FJkJCC3VDOOB%2BFUPt0u4uJd60f52hyV6ffIQAlXW6AqLNmonSLjlYwS%2BLTYO%2FRXWow%2Fn%2B5SGNBcWtxnOP09aAo14EOR%2FviI93wBcKaoa3DNx6xzO34xkoyIPZE%2BJ8eiqt3v4ejU%2FLwYup8fNxNbktpzWvBUpCGDFLbCrsdM%2BSbB9v7QuUezXtlB78W1g7n%2FC6UBCZBxVTVlMps4%2Fe%2Bhle%2B7JT1sCvSPwv5YfbRXbhRY5hn0q2p0OwwM9naj8xiH3j%2BsaHflde0lTxj4b2QGcxF%2BMZDWGChW6fWs2X6jKkrAJp30vLbIpc9uSs4nFQe2PNQ61E%2Fr%2FWpxVaR8zuQVD4v0zcWVhF%2FBpn7tyULLpT1wgY3TYAJkb%2Fxy2IkimgKUpI%2FVjM1xaZDxEkm2nfuNSO%2Fkkoj6yLapzR5Kb1Lu8s6ORxX12TkBHrn0tRMD4ldQjxouBRvKvEQXvlNXcwoZrBwAY6pgEjmleLUISCCe14mH8mzFPrCvocx1OF%2BaqaIt0Hr5MzNvytC%2BqQPfEUCohplUc2V7VASEtHgJM%2F3UNes%2ByLv%2BxjW%2BziH%2F7DEi7xA73WHEuJMlm0mZ76G93Xx6LJ8jkIZReqajMFYGMgqprll4lbJXWuNBtZG6kfv6C%2FE91om6Q3katMqreEsuZnJJ1OCJ0Vq7usoBmBFgKhh0x1B3sKKxtZiO6Qn8%2Fj&X-Amz-Signature=022743071d222449b010b86cc9f28ca299addbcb0a430bed59b3b99a10c6695c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECI26GD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyT9W6UI5IvJYpXPS6eMF0BmAnJZpaN0gaIcFByEKBSAiAE9ux%2F44mOmVS6pD2eysocCwgA1RWJshnYoIkwMHeA%2FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKT%2BIBNtcubcbhkdtKtwDjyZx%2BcyhV61%2BOCCx8kKD%2F49UNvSAQ0zZSnmzhNB9SmLrm%2Ff3dMikfa1OHlpN1vUFKoDvdxmNhMrHAueR8eMTPA5KeqzxNDmv%2BhE4Y%2BEFAS0Dz0ghbrAKPUvL76pI2w86Eb%2FKM7kdzkOgGrmCl%2Bs0nfxyQb4YQxrvFbWWtc3I%2Bfp428iQ6i%2BuGD%2BslIfl9VCGIfapcs37I3POCGQy%2BhnVuf9e%2BhXkTBQi%2BeXf6Q02ULVzrB4gEx5kC7%2F3LuJ8zH4al2dwmVNxCRc7QqODqbPmEkUAHc2IEj7Ab1%2BYZbD52MOJi1bXJInrJvtKplp6KU%2FuVZQe%2BaLbi%2F4XLX9kuVyccV5Snyfu%2FZnl5a5ceob%2FXh4GcLxuwrW81%2BovMGfMar8chYNLiL6zTib%2BCe6VnMB8plWBqenEnChAUw9b0adlWbHKTbnN0cCafHyHno2EjyjSBdGv0AquVcynqqSRat75h0fRxtAA3kDlG8%2BkbRThdiXkMgBhRqGBexgajj738n9K6oD0qigfGIOyq1uzJOxkHpNClC3dXL24o1K%2BmK1dK22i0RH33W3sTSVXPVrm%2Bq%2BR0hQsD7sxDN6ekGtUAXrTjsBGx%2BAbZjAsondHH5cIG0hr8oLIndhLMT5b7rYw55nBwAY6pgFbDF3zAoSB2HqEALp5mJkY71Hjv0YxP5n5Y6%2FW2eySowls2vq49ns%2BgfeKAtTArhwtxciqeyHXPJR%2FSSXljDGAN2Je3y4TdjWGdX1WYC8MSPr4fEI1SWeSk2SAk0M%2B3MLiezAGCD9capgAz7UaC0DjAQQ5xB51138lqBl8QJqFiS0pAkH66byJ2ZWBlJJtKTP2ukZ1aT6GuwJ2PRl19ns%2FxB7WuMkQ&X-Amz-Signature=95366f9eb39b02d9a8ecd45d4c635e422e4e0fb0e0bb98f08bd494616165eb25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
