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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMUEV2I%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDhbqke51TB3reiAejtqR9noY%2BuZADZYWbPEGV6BLxlpQIhANl4vAJNaX0xzd8lM5GLnQsZk6Uasb8oX0P1vIwx8MhUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl%2FcTFcar78uZhku4q3AOQXFFHkgZsekJVh9WXK0OgRhF2%2BVWDgd%2BJjuClF4pUOkblMkIpEmD%2Fmmf7ebydnWb7W%2BFQvBC1h3nJyNUxNcZ9H6ygN77Ftov3h0I5whpyYDyLFASSQJYMS%2Fgzm78ApG%2FtOu%2B7GS97SFrWMvOsH6R8wKxMEGksb8%2BZBxq2EohNvLL4PM7fMwBCRhmrL%2B5EDmyaYgzRhE5bUJkzXOzeINdwC3xCm5p0MeIFcMMkuLsBDytzHeN%2FIEXtlgS9%2BwgSSDi5zcuklwDy22nHAyVbz8d01d%2FmieZmQGXYY6mDeBYNaAUtmXTMhRgngOlzBymzuUMsVRV9gMdFfMfmnE45SLUw23AzJjhe5xUoUUV0TyZoVWAof170mqDekqIELjW3%2FTgbLA48dXPJRp%2BEyE8T%2FWlhxmF1T9Ja2FYceOSQHVQPjCDS5n5RpUi1kZaMWDpwmhvEG%2BuLE%2BrZ04%2BUgFdpGzaRafpjdZqzeKaSi5%2B3djIKbmGmAMv5TqREPx2BZAvJg%2Fu0SLtxmpnazXwOX9h4pyZuiRbPVd5vp4HvTBIRMh95c6dXzUfpK3fhM%2BbP1m7ZAGgdIhfy%2Fyb8GI8zRpEsc0bl%2F%2FrQzLgZyUInN1PAokhCLPNsWx87Z6fn1eQzHDDnn8a%2BBjqkAfnTFfs7JGKknF%2FBBruX5PmaFr8X%2ButpyEvQwXTjSaHNOqt2CUXrIllfPXPNmJvhVvrrbmNO1w%2FM4%2FCSL%2BTRnhWl1y7s3owo8N%2B1RvZHgJ553eaG4BDpeIJNTJ2S5h8Aq01yiWOBZUhR3P%2BttlQ%2BtqmDTkNQUtVKynq%2Bkq%2BTYxh7SjZo3wtN2HEpsWrFqmTrDwAUMDyKX1ZWX%2FUnL%2B9%2Ft6QcpiQr&X-Amz-Signature=f231a07999a9e8740159bd5cab45c6eb8640da4860023bb7da5c3a5587a82857&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMUEV2I%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDhbqke51TB3reiAejtqR9noY%2BuZADZYWbPEGV6BLxlpQIhANl4vAJNaX0xzd8lM5GLnQsZk6Uasb8oX0P1vIwx8MhUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl%2FcTFcar78uZhku4q3AOQXFFHkgZsekJVh9WXK0OgRhF2%2BVWDgd%2BJjuClF4pUOkblMkIpEmD%2Fmmf7ebydnWb7W%2BFQvBC1h3nJyNUxNcZ9H6ygN77Ftov3h0I5whpyYDyLFASSQJYMS%2Fgzm78ApG%2FtOu%2B7GS97SFrWMvOsH6R8wKxMEGksb8%2BZBxq2EohNvLL4PM7fMwBCRhmrL%2B5EDmyaYgzRhE5bUJkzXOzeINdwC3xCm5p0MeIFcMMkuLsBDytzHeN%2FIEXtlgS9%2BwgSSDi5zcuklwDy22nHAyVbz8d01d%2FmieZmQGXYY6mDeBYNaAUtmXTMhRgngOlzBymzuUMsVRV9gMdFfMfmnE45SLUw23AzJjhe5xUoUUV0TyZoVWAof170mqDekqIELjW3%2FTgbLA48dXPJRp%2BEyE8T%2FWlhxmF1T9Ja2FYceOSQHVQPjCDS5n5RpUi1kZaMWDpwmhvEG%2BuLE%2BrZ04%2BUgFdpGzaRafpjdZqzeKaSi5%2B3djIKbmGmAMv5TqREPx2BZAvJg%2Fu0SLtxmpnazXwOX9h4pyZuiRbPVd5vp4HvTBIRMh95c6dXzUfpK3fhM%2BbP1m7ZAGgdIhfy%2Fyb8GI8zRpEsc0bl%2F%2FrQzLgZyUInN1PAokhCLPNsWx87Z6fn1eQzHDDnn8a%2BBjqkAfnTFfs7JGKknF%2FBBruX5PmaFr8X%2ButpyEvQwXTjSaHNOqt2CUXrIllfPXPNmJvhVvrrbmNO1w%2FM4%2FCSL%2BTRnhWl1y7s3owo8N%2B1RvZHgJ553eaG4BDpeIJNTJ2S5h8Aq01yiWOBZUhR3P%2BttlQ%2BtqmDTkNQUtVKynq%2Bkq%2BTYxh7SjZo3wtN2HEpsWrFqmTrDwAUMDyKX1ZWX%2FUnL%2B9%2Ft6QcpiQr&X-Amz-Signature=f3f197a3533ba9046f04b863e66ed32195c50a72d515b999f3c2ab67636ec589&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLGJCTL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDjDERUIXL%2BIC4UowRKS%2F30wD6bW6yfLBgJtLa0OS%2FmTwIgOMSsnhIGBpHr1sBauxPBgoduG6THnXTDuu%2BB4%2FbUAmsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCgaYecoRA3rF2tkyrcAxUROhzUlbLScZd1A7uQi9jQm9DLWJsbHZNdmn0e%2F5s7TVUlH%2BhIsd2r%2F6I%2FH1KPOnKzSyVy0uxyU4tc2NSSA1vpq8%2B1YejaLF7TS1%2BrBVBBQkuhjrjvbWnQjBRyLpRTqmXrccTD7zxLpmcODwJbSIkDV38QCE49IRMm4kk1Q9rUk9VNExzTGwPmztPxqifM5CyN7eC9fGrQ2H5L%2BFKs1SF6xqm31Im2%2FfyG%2BTcxs1vD%2BjSasC%2FX0aI4VacexeTKTKpjI9GMkzDanHHjzjj4DfHuLybKrxtGwLEuozZFiB0Sm%2BV6zUw1vk9O7c1q%2F7uolCKFqq6mOtoA8CONSPtTvkakKMd4VkEenDjOktJJzy2K8eg3WSAVtIw4pbMyiXq6xFfg1i6Zd5%2BqJ8XWc5Hpja1Kc3sNuX7WMAFKvsJgHu7Ax4sXpk37Yrf2ZPuj4afJb5wkYNlRF2pVixx2tYbbuRtodujgOQe%2BSOBsqlKzKN6V%2FBau7ku5MqP1kloa2ZpFuWxT1epuKRCEYn2cqBIp3HodiHTTxYONZpg3hqU8yv0KI%2BxwlFgzAMFOurGsHDvlmeXLEL8f%2Bv%2FUFaxugjNoN4%2Bv1GHgDefmsmDoEPitpAMx77oih8gJVMvgnyEVMPeexr4GOqUBXP2ZFdqcZNG3ZXi7%2FVJgBtzOXJr772fyj0KlXCfH2E0%2FJ7Ld%2FBMruqO946Q4Qpvjtb5oF1DDP8prWX0su7zXlIMb1Wy6IuUFa9od0lpBosbIJFZooKbCLuHFy6yeIyivJK%2Bx%2Bhmlnh27HydsIJWosJ0cyuhC1gcBu0z9hfotGiimheDg%2BM%2BpA%2BQHJOBEx69cXpIzcEkF%2BpIWIl%2BPs95MzMO8nFr0&X-Amz-Signature=9ab38b9c793b24212e1889c9adb514d7eb4357f3bc4e17b915f5005ae8631326&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76BPJC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD73jC4Ub45h4b9RLnWTBLJIIJ8xpwtc5r5laCO%2Fy3n4AIhAM5XSHkfLWsLG9%2BWjhHoPgWrJL6IdCZWjQKrRQar9LRDKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjDp5qzXwviOeJc3gq3AMjl3VuTRgcMi7UsCXETVy2o%2Bsl2FQkrPk8YfkEW7cecSFx4emvpw%2BdqrVrSpnEV4V%2BcV7SfWqmHGS8%2BAsGXoDdlojNL9evmZRLTXqCDnbfG8OpxYWP4Szm0XCXhfIM1TpbJXshkL%2BCwzasMCEFUloCdQVmUJzCgV55lrtzPeIPF7Maky%2Ft6MK2NVFRuU6K90%2FST1cBqnWuxTvnfPI9y9UqoroYNsmmkpQBPrmQM2VkhLK35lE9DVdaJlKmTW7qk%2BWoYf6a5gnxGMWSEPdUTxAa7y%2F2bWqmwurdxjQEjOTQ7%2FkiYmOme91KEw0PeHQ4WsXatUSVqQMEorEHb7rk5FJGKIrS%2BBuE1f%2BmXoiXxKwduga2xyyzGc51JIQrLBn6fVR0ROkRT7NjLm67uVsR%2B12PzZxGHPrHX9zP%2FQJd%2F4bnM3CYWlw%2B9Kiv3TqWPLkbhBVb%2BpZNo2aYhg8tkBzL0rfm1xZD%2F7F9pBB4ZbLMSB9t6IW4yEKOuPRDGQ6WET0%2FqyvA15aX5zZr2yxMg8kSXvo08iO2T3fcehHGVAjkLjZl8fUl0NeKabvKjQL78eUuakNZz%2BhSDib8Hpy650ZlTc15S4zDs1DcuF%2FGoUhPWa5GRrYzFruCdhEYJ%2BbXJjDtnsa%2BBjqkAUaG8uG8PN3U5yz7jXA2dkZ5gNxOfRe05biuVN9gds79iyX1qhoPcFb7ucBkdbq0sh0lTV7xsQrIojuQXO9KsIeba%2B2r17loL2OZHM6JXoPbPebaZzhclfGz1rLfNcMHMsgiUpqrmFrzmARA164qgfKis6CnI9fi6q5du3bWaiyA34ZM18kDHvgC3BCOGCMlt2%2BMa7KB%2BWdWw49m6Nm4J2CvHGdz&X-Amz-Signature=55cdb429a5eb8b6e3b197410c21a042b1df00d895f739830cf18ed10b98f664d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMUEV2I%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDhbqke51TB3reiAejtqR9noY%2BuZADZYWbPEGV6BLxlpQIhANl4vAJNaX0xzd8lM5GLnQsZk6Uasb8oX0P1vIwx8MhUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl%2FcTFcar78uZhku4q3AOQXFFHkgZsekJVh9WXK0OgRhF2%2BVWDgd%2BJjuClF4pUOkblMkIpEmD%2Fmmf7ebydnWb7W%2BFQvBC1h3nJyNUxNcZ9H6ygN77Ftov3h0I5whpyYDyLFASSQJYMS%2Fgzm78ApG%2FtOu%2B7GS97SFrWMvOsH6R8wKxMEGksb8%2BZBxq2EohNvLL4PM7fMwBCRhmrL%2B5EDmyaYgzRhE5bUJkzXOzeINdwC3xCm5p0MeIFcMMkuLsBDytzHeN%2FIEXtlgS9%2BwgSSDi5zcuklwDy22nHAyVbz8d01d%2FmieZmQGXYY6mDeBYNaAUtmXTMhRgngOlzBymzuUMsVRV9gMdFfMfmnE45SLUw23AzJjhe5xUoUUV0TyZoVWAof170mqDekqIELjW3%2FTgbLA48dXPJRp%2BEyE8T%2FWlhxmF1T9Ja2FYceOSQHVQPjCDS5n5RpUi1kZaMWDpwmhvEG%2BuLE%2BrZ04%2BUgFdpGzaRafpjdZqzeKaSi5%2B3djIKbmGmAMv5TqREPx2BZAvJg%2Fu0SLtxmpnazXwOX9h4pyZuiRbPVd5vp4HvTBIRMh95c6dXzUfpK3fhM%2BbP1m7ZAGgdIhfy%2Fyb8GI8zRpEsc0bl%2F%2FrQzLgZyUInN1PAokhCLPNsWx87Z6fn1eQzHDDnn8a%2BBjqkAfnTFfs7JGKknF%2FBBruX5PmaFr8X%2ButpyEvQwXTjSaHNOqt2CUXrIllfPXPNmJvhVvrrbmNO1w%2FM4%2FCSL%2BTRnhWl1y7s3owo8N%2B1RvZHgJ553eaG4BDpeIJNTJ2S5h8Aq01yiWOBZUhR3P%2BttlQ%2BtqmDTkNQUtVKynq%2Bkq%2BTYxh7SjZo3wtN2HEpsWrFqmTrDwAUMDyKX1ZWX%2FUnL%2B9%2Ft6QcpiQr&X-Amz-Signature=5338a4562c2796cdc42c5f6346016a57af5c1ad350bc6a2631bf34ccaff3b4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
