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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D67E3WF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDxOTjS%2FqMa9WmPsncAk1BBZvX%2Bulb2cwUiMteriKDbqAiBXWGZGPfy8fFknO3nmQ8lYbF90G2HSBqAQFVfrHg3Qwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMlBBI%2BiVh6lFM%2FQufKtwD2JVAy%2B2ExCMIC3Koo9He9gyuQGsEMG6BL7lkH5ndpwz13KOznRn2mSflk6ycJT8a57rtGz91dH8HEXw4l2w34srASESqjRpw6EMhirp09y6AcS62cxp5xTYU%2B5GjLbdDbLVTZtLUkK2BegnhrKqji11yYE84emxJG4UP1AcEs%2BB%2FmVjYnkEE9oELYdfCjQ9Kqpm59WNlAag3Yg%2Buwh4sZIwymESULRC%2FPfzz7Q9HhnD5PPTk5GTxE1ngbboNF0CYJ0ZE1tWC1zkXLEHqNBmInoaIiDh2ab7VxY3VoePG9hZNFyXUMFWvEdE995YjCih%2Blgt0XwKrLZ2ds1C5BopVuUbj5UFMiGSp9eHXw0H%2FDZ43dKEK9IojuX100ctfHJdhC0RSys6Ln%2FSS3Bv3DQejKsC89%2FWH%2BjH64OjQu0GWwAsWbPIHMnorY9he6rfGElsKoH4rXHAMk%2BRTd6jWgN2DS7mJ4rmZeTPZJYLLjeSxI3i24BFqdSRS4JdN%2FKdMEYgiYPpWwuT8%2Bog5lOsTS%2FBUhe63SjEokhC%2B87g1LXBgNSqiURQ8%2FGvjlSik94Z52Cdqaj7oZZGj5kblGAjtVL4NlCZWa3auewZytin8qtnNbKrOfil7%2B%2B9JVSr8pCown%2F6UvQY6pgGqaCC9j1ta2N6w1X%2FDQGCFxqVWRxWMQsErGPtBAO4S%2FD3%2FuRbiBAM3L9djduLoc9g3haK1FYpmcaz6ow9U%2FcL2K7odDJN%2F7UJ2mYj1kN%2F3bDBHoDJExR1m%2BXzqv%2FvUpqDSyDyT%2FT5kkmP0KgJRYYXpy0lucE62qcPbVWdzrVRkjRw6tyiCjmZJH%2BoU9Tze1tdBc%2FxdZO6IT757Pqazjb%2Fr5QwOBFvl&X-Amz-Signature=90242155969a4cc59d734154d0695f66741353a0e0c2db13e5998c8eab6a6c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D67E3WF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDxOTjS%2FqMa9WmPsncAk1BBZvX%2Bulb2cwUiMteriKDbqAiBXWGZGPfy8fFknO3nmQ8lYbF90G2HSBqAQFVfrHg3Qwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMlBBI%2BiVh6lFM%2FQufKtwD2JVAy%2B2ExCMIC3Koo9He9gyuQGsEMG6BL7lkH5ndpwz13KOznRn2mSflk6ycJT8a57rtGz91dH8HEXw4l2w34srASESqjRpw6EMhirp09y6AcS62cxp5xTYU%2B5GjLbdDbLVTZtLUkK2BegnhrKqji11yYE84emxJG4UP1AcEs%2BB%2FmVjYnkEE9oELYdfCjQ9Kqpm59WNlAag3Yg%2Buwh4sZIwymESULRC%2FPfzz7Q9HhnD5PPTk5GTxE1ngbboNF0CYJ0ZE1tWC1zkXLEHqNBmInoaIiDh2ab7VxY3VoePG9hZNFyXUMFWvEdE995YjCih%2Blgt0XwKrLZ2ds1C5BopVuUbj5UFMiGSp9eHXw0H%2FDZ43dKEK9IojuX100ctfHJdhC0RSys6Ln%2FSS3Bv3DQejKsC89%2FWH%2BjH64OjQu0GWwAsWbPIHMnorY9he6rfGElsKoH4rXHAMk%2BRTd6jWgN2DS7mJ4rmZeTPZJYLLjeSxI3i24BFqdSRS4JdN%2FKdMEYgiYPpWwuT8%2Bog5lOsTS%2FBUhe63SjEokhC%2B87g1LXBgNSqiURQ8%2FGvjlSik94Z52Cdqaj7oZZGj5kblGAjtVL4NlCZWa3auewZytin8qtnNbKrOfil7%2B%2B9JVSr8pCown%2F6UvQY6pgGqaCC9j1ta2N6w1X%2FDQGCFxqVWRxWMQsErGPtBAO4S%2FD3%2FuRbiBAM3L9djduLoc9g3haK1FYpmcaz6ow9U%2FcL2K7odDJN%2F7UJ2mYj1kN%2F3bDBHoDJExR1m%2BXzqv%2FvUpqDSyDyT%2FT5kkmP0KgJRYYXpy0lucE62qcPbVWdzrVRkjRw6tyiCjmZJH%2BoU9Tze1tdBc%2FxdZO6IT757Pqazjb%2Fr5QwOBFvl&X-Amz-Signature=5b5f5976228c4e10e4e5755b38ffcdb36129e32a480e40db800238c755bca705&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCHKVBC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpbiZ3UOKQUSzjnt0uS%2B%2B8tIC4eeBdq7LgIOmaX447ewIgLH08lVbE7Oib9lNaa1uiVztU6ENJrUXXbrnackCPp9Yq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDN0hvQ8JckAXvoBm6CrcA0754Y6At2UwwdQL4fs4rjz17IryNqZ2awsgL9znnSNKTGBfoOxN2a08t1NSj0T9gdn8nEhqKRc8zlkSzVQG0MvP9Jxab%2Bflki28DW4tLhqnSVtISBUuOOsrmhdsakfILehGIhLvMki2KJ5mjultC1Sv1KK3U7ayCuZfXliDOtsNnpix5E8G%2BxSMIdM84Sw88ob%2F1zQn6nzdAmJs5uq0Ikya6Q8tPEOCb4GYkrE2Txqex9mKW0f4qXJCaqs2j1S9spU4LhoUH43QSKl4fBkdZltrldD8Bc6vYMj0ffvmdx8HiRV4ZYoCp6l%2BE5HQcH36vPvtfncjAi8cDkreg7ZgEf%2BLEQITXyzcT%2BpWjOfEtWN0JMncL0M7G0%2FADPyOZP5MLD0%2FFvfwZhfsDTdDj1H0cir%2Fzx0doUxih9MP%2BDG2GsvKFo6dOOq5Rxr3pWvijXV5s%2B4fX4M%2BK7lE7zp3y%2FQpyBQ%2F6coZIEukwad73NwPvvv8%2BbY5BMDv4%2FOGh9%2FKhalvhXEk5SMtFH93cqGyFIFNxpcTE%2FLOn1E%2BIIR6ReHhRIxkGBK4vBBCXmoGFMekN16IIjbHUN21tR2U3Uwdwdqck27iyBFUig4eRlcQtaJURDxxG4bF3qRJGUU5oAkxMPn%2BlL0GOqUBxAbhFKFUFMP%2BkFY92auk8HVdkIwxfjerr4cERBBFlB01JVptlJ7M0Cq2Vdk6SXmbD9A3fgJHopHltE4%2F4zDd950rKRw0mLGAJJvboDnX2F99GDSHvdVD3Kb2jB3mkJNl0Y2anuRY1jg%2F48zz0XW5%2BxPuFjihpft0Mnr0UWM0kAO7QSD1wa3LoMR9hnAFBPsg8lZdIVPrPCLZKITD93eYF6k%2FsDS4&X-Amz-Signature=e0fac4e567e5f1c14e79e7bcc97adcd80e3c96ba178afec44461ef794632e8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FYUBRA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEQgHH8kpN32%2F7WmKmbe7h%2FwD%2BgoMss8TcFSsnRxtImaAiBzhCbATIUu9OwxeHRgKhFdPVdfOjT78WA1jzZ3q8ymQyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMv5iFSB2TWXhC8wg2KtwDtJZ%2BqSruGnd%2B5sL0m%2BYLo2CyPeAUaWSh%2F7Ua5LMTNe%2FQd0xg06MQyaxw3qTUrCpGYW8o9mOTNzOcPuF3u%2Bx34fI30wdBdcp3Rt7pO8T4H1so9vO8lrPotL8pRKmKUN6YrtAw2F5bfns4HT%2Bh1ysn1j7DErsnd9pOlc3NWgP9Qd9FGiQwElrNxjimsTpk5nu3DHFgRcH8%2BKtvGjulZZZswtuVvBeX3z2TsBH8nveiFdvzMdQ%2FubxKawR2%2FgVrOXZn9sqmchJ%2BRZ6soInZR12d5AuoBOnDgtHtjHi0uvaTqhi%2BjcZ7Nfj34KOy5EHermObdy2Wm8jq2JlobB2YcL%2Fb57yxgkhT2UcO9eZTUXfy0%2B95RrftV2PJQ%2FUbjRJWLBbrD6wY7D4afQ8F1s42%2FCKoQFusLW1AUk%2B%2BAws8OAWRygl0c2AM6YA9j9YEAKitoGYrJmDPUqIHWlGGQUaRK3xJlJDjWQ6rCnRZenKNH8bMQQqRuwqeHCbt4RjTXOZ8pqN2EYUoJz4blQCaEl4LGT77alCTcBbFK6rv6l2uwqIOHOpNTp4PRmbDIOHECDvsFl%2Fet27MMUnr%2B5f0Py265R7FylmiwguDPb8l3VJvWyfg6C96gKlP08p0nnLVtKIw%2FrmUvQY6pgEPf0kvB%2FYoYNxO0D21bgZyFz4hV%2Ff5yEGzU1mSBqSN%2BN%2BlozeO1PozsUkhGxWySNnTAvRHdq96d%2FmwdoZ7%2B2fcx5VXeHHnMjEkhr9LQl%2F9rTVA5HHBXEMVTRUo9NoxeHJhzlwUf0U4zhRdGbdqrupg2%2FbySGIWVZmRITzDFQyNPCkNZWtfD%2BhwRJqUizBAgXirBat08k%2B7rZa1ApPW2Cr6eahkWHps&X-Amz-Signature=5edc7c4a12f8e4725424c4410c4fc8afaa4eafb7e99fe2972dc1e88a89cc40db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D67E3WF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDxOTjS%2FqMa9WmPsncAk1BBZvX%2Bulb2cwUiMteriKDbqAiBXWGZGPfy8fFknO3nmQ8lYbF90G2HSBqAQFVfrHg3Qwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMlBBI%2BiVh6lFM%2FQufKtwD2JVAy%2B2ExCMIC3Koo9He9gyuQGsEMG6BL7lkH5ndpwz13KOznRn2mSflk6ycJT8a57rtGz91dH8HEXw4l2w34srASESqjRpw6EMhirp09y6AcS62cxp5xTYU%2B5GjLbdDbLVTZtLUkK2BegnhrKqji11yYE84emxJG4UP1AcEs%2BB%2FmVjYnkEE9oELYdfCjQ9Kqpm59WNlAag3Yg%2Buwh4sZIwymESULRC%2FPfzz7Q9HhnD5PPTk5GTxE1ngbboNF0CYJ0ZE1tWC1zkXLEHqNBmInoaIiDh2ab7VxY3VoePG9hZNFyXUMFWvEdE995YjCih%2Blgt0XwKrLZ2ds1C5BopVuUbj5UFMiGSp9eHXw0H%2FDZ43dKEK9IojuX100ctfHJdhC0RSys6Ln%2FSS3Bv3DQejKsC89%2FWH%2BjH64OjQu0GWwAsWbPIHMnorY9he6rfGElsKoH4rXHAMk%2BRTd6jWgN2DS7mJ4rmZeTPZJYLLjeSxI3i24BFqdSRS4JdN%2FKdMEYgiYPpWwuT8%2Bog5lOsTS%2FBUhe63SjEokhC%2B87g1LXBgNSqiURQ8%2FGvjlSik94Z52Cdqaj7oZZGj5kblGAjtVL4NlCZWa3auewZytin8qtnNbKrOfil7%2B%2B9JVSr8pCown%2F6UvQY6pgGqaCC9j1ta2N6w1X%2FDQGCFxqVWRxWMQsErGPtBAO4S%2FD3%2FuRbiBAM3L9djduLoc9g3haK1FYpmcaz6ow9U%2FcL2K7odDJN%2F7UJ2mYj1kN%2F3bDBHoDJExR1m%2BXzqv%2FvUpqDSyDyT%2FT5kkmP0KgJRYYXpy0lucE62qcPbVWdzrVRkjRw6tyiCjmZJH%2BoU9Tze1tdBc%2FxdZO6IT757Pqazjb%2Fr5QwOBFvl&X-Amz-Signature=1343193c1f6ec150ceb2fcacb406b1c05fd8b44736338252323a02a5ff358f12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
