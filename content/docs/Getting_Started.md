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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOHA4DO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAciK%2FzZXra8gzG1fUaMcnKERHL7wBXMLvgHqc6mCvtlAiEA%2BgngSW8FVKwji2AfHHu7HQdcYQJRxt%2FKJN2AgHKQgdYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMtPsJBGFITaE9kU7yrcA%2FckS8EcUzKvP9kS2pVD%2FOGtoTXQY79o8TOGwN3y4zD2nHMYXsIh8MSmKJL24a%2BqOMvHiKoA0ilvqpwbqcg6NhBrtNx1C4alfOAziRN6t7Hm48nogB6y1KV5Jv4imwv6W6rS1q%2Fpsdu3Dgtnl5NdQGZ94gZKLCIHlY47N8AfA2gIaZaujRG6txgE7KaZcututfd33QvO3S%2BJ2jSSzibYDts8u%2FoBW8DVsnR4HUOniI9TlQB6UGT7Y04V4mLhjxB85rhyPOURgtYhlQM5f9lZpNpssGNDfVDoCsYTGo%2BYtDFe%2BhgMWaGyO24BSbsnWGgwzjhZj2l6UtyLFo4Ic5%2FUpBy6lxv7PU7kEFKjyrpzZtLc5Vlxmm%2BCQhn1A7q7oswP5SKD3YvFCt8HEcRCIzLPuo4EWbUtWpbuQI8LaKJYk8rcoQGZaeYCRPnVgzqCxoxdWen3RN%2BGofrZVgi%2FHSBNN%2FjmmDQzU5np%2Bv06CH12iFiIXzjba6DCdEn1CSZB8tfhuAqDvuFabaMfTYb6UCTI14kBXArQ3Y3q6kv6VpT91sMsgN2TYzGzn09YHReSer%2Ffy938FkR6Nn%2BWP6VJsVRU9gt5B%2FGmgxjlElxkTzelZVqZiPRblD%2FZfJjcjq4WMPPfgMAGOqUBNyUYPrNwwJN1Vp7eS42IipUh0o8O5xgk%2F0PFMIXULmky0VAhdjR0CI4XmzN%2BD1rueUoje0U1vSjRA6my%2BYnMStIcKFURpekGHO7H3JIMGRskUax1TKrtMqkrfj7Cer5YBr1RofeU0%2BAHJOwbpa3jMn5xKBxaBEAcL%2FUyLpV5v8Kq%2BuxnoyAIUhfFLX%2Bq1Ue9cPpIBOw2tsyo3Q0G8NF9s27%2BZw8q&X-Amz-Signature=1270d7d1d67eedb1daa295772168871e66f36d34663a803ad67e390a4d92f994&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOHA4DO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAciK%2FzZXra8gzG1fUaMcnKERHL7wBXMLvgHqc6mCvtlAiEA%2BgngSW8FVKwji2AfHHu7HQdcYQJRxt%2FKJN2AgHKQgdYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMtPsJBGFITaE9kU7yrcA%2FckS8EcUzKvP9kS2pVD%2FOGtoTXQY79o8TOGwN3y4zD2nHMYXsIh8MSmKJL24a%2BqOMvHiKoA0ilvqpwbqcg6NhBrtNx1C4alfOAziRN6t7Hm48nogB6y1KV5Jv4imwv6W6rS1q%2Fpsdu3Dgtnl5NdQGZ94gZKLCIHlY47N8AfA2gIaZaujRG6txgE7KaZcututfd33QvO3S%2BJ2jSSzibYDts8u%2FoBW8DVsnR4HUOniI9TlQB6UGT7Y04V4mLhjxB85rhyPOURgtYhlQM5f9lZpNpssGNDfVDoCsYTGo%2BYtDFe%2BhgMWaGyO24BSbsnWGgwzjhZj2l6UtyLFo4Ic5%2FUpBy6lxv7PU7kEFKjyrpzZtLc5Vlxmm%2BCQhn1A7q7oswP5SKD3YvFCt8HEcRCIzLPuo4EWbUtWpbuQI8LaKJYk8rcoQGZaeYCRPnVgzqCxoxdWen3RN%2BGofrZVgi%2FHSBNN%2FjmmDQzU5np%2Bv06CH12iFiIXzjba6DCdEn1CSZB8tfhuAqDvuFabaMfTYb6UCTI14kBXArQ3Y3q6kv6VpT91sMsgN2TYzGzn09YHReSer%2Ffy938FkR6Nn%2BWP6VJsVRU9gt5B%2FGmgxjlElxkTzelZVqZiPRblD%2FZfJjcjq4WMPPfgMAGOqUBNyUYPrNwwJN1Vp7eS42IipUh0o8O5xgk%2F0PFMIXULmky0VAhdjR0CI4XmzN%2BD1rueUoje0U1vSjRA6my%2BYnMStIcKFURpekGHO7H3JIMGRskUax1TKrtMqkrfj7Cer5YBr1RofeU0%2BAHJOwbpa3jMn5xKBxaBEAcL%2FUyLpV5v8Kq%2BuxnoyAIUhfFLX%2Bq1Ue9cPpIBOw2tsyo3Q0G8NF9s27%2BZw8q&X-Amz-Signature=1004cb9d813f6abba9b7060b298106f9212c0287433eed923d16abe87d5567ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2ZXFFFP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1pSr2H4kO44QS5D5n2Fwk9Gwcwk%2FOc9MTlOnnDFzaKAiAVTl5H1wHS6DwvKWRElWZuInpKwbW2Miu9v2%2BPCNEfSyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMu%2BwByoSMuf0OyjfOKtwD%2BA9jO16cpXKna%2BYL%2BN%2BR6HYki5UV10x7ylU8M3a5ws%2FzpQZiEqu7Kqra1EwKUoqYKc1hFnBtDzaDxEYfZwyWiPxOS90LtV65hNVX8qtMayQchvb8Yku%2BlYqAWi8QfYBC82HpQqeRix23YUIaEys%2F6713U0pqviurhDvuSaHknCapQnoydVcrAqFG3dQmNGkjxGJhA3nOWLXU%2FSjW8Ydx2fUmJFJcBQcG7%2FlnZ8tp75htxlo5zMYx81YqpHAyu2p6tnk2L0h55Qevp6HGt9eHMkWLcYBB3sYZ5TbP7D2xPtfRkd0e6VqGL%2FU4lPFFL%2FmwnY4eY9%2Bu8n%2FRNuFtJwNa52O%2FxPTL3vfnNZjLtCbC4gNjTpCtWtBAphHxc45phpJuMfRq8obGXgVR%2FHovouXTbsv%2FQjOfuVzsQmZBeaXgT%2Flqu8LI5mVuzDLv8IY5XE7e1lubLqnoxnwTFGotGY3C0qtpHYYB3FyjKuoW3W3zneSBpgoykcWkwo%2BVc2Putm0%2Bn5nojtyjcr4rH4WIy352MTdzrIR%2BKEwzZV7ikbxkZhG8cleRdYG8PG9Z2PDpE2Az8If%2BD5XxDy1QF4zKJkygKe6hFrHGIonOwtLXJWOURBiPbaUM8wa8FxWT5S8wzt%2BAwAY6pgHgYYW3FzxuxgsnTSPkNXHB56a7EM%2BxzBrowQlu48bKyBzFm5qT9W7s34OlIh%2FJczAd%2FDxWYo9g%2B2SrH4ISmIAYN6AQiv5KiETY%2F24uCd18ZrDGIPvP2H09C3J5aHW1X8Y5bRV%2BXw7zaDHpZ1hsYd779KfWb6cfEyxO%2FJDhhQdR72MarXGL8Fz166R9QjMdAhkC8P%2BL8Ewj6yMm8yeXEZNwokL%2BpCUq&X-Amz-Signature=776c51079a4102d37330a24c57d05c1fa98d52be8bcb22d2ab4a85d28cab11f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZBSZHVT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCeKmhEWj3ikR5sXvHWXymj3KTeU4hCFo7cBpEuIoLKAiBkwW01hhz56iMABRs7oBVmzDWXdlHVGVJmfpMpAZuaOCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOaUi8gd7poepzyoQKtwDsk7tQ8HiiSsz%2Feu0N0c1lCRc7MQKiFlwpzjwKaDA0yoJDuhyknLey2dn5dNTdvIcn%2FxqUxqzjP7dsvOO3VKsn6zU1tQ74V%2BsH94JzPZqp8lfa%2FeMIuiZqJWzAmKg6lGY5DTH%2Fqv12GLk6CicYlwK%2Fe4lh5s2wmmcBP%2Bd1Ovem%2BRAm%2BDEPxNoYqIgGWaxX6ad75iJCI1ZWZ0Seag9iiYW5CqwaOav04zvmM3ijrrILyfvQOLHQBLnxPFsXFBSAUEa8YrTxqlkdsZATvQXxG4LAOYFJKdBlDVGNolN0eeOb2xz05bo%2FQCH0h0UrCT%2BAS8m%2BcnNN9IEFfW9HRDQnyvUDi%2Fr%2F%2BIq6L2iQH98p2exOOIwNkanfIUQbEnA5yBuVLV46f%2FyfRDOcrywB3PRt63GujiXYWPbGW4jmIpMIr0JgiiJfFxIf7tejZgNpa9a7cdiwp1uz4J0pWSm4zs%2FR4uW8bx1C9BkS6n%2FF48nv%2FyRmXZWtonMSRQvoKFWj%2FtS9RqPXnmSid0WF3qXQu0Z9jxW%2F%2BpyGTSt7YJoZaCTnxH5e8VxEtbX8KJ99SVgxBWObAEcnIjErOt7QfdA6dPq1XNuR8AbeXATF48YJjHKdM%2FX7A%2FLZCrGnxDd%2Bodgb3Ew19%2BAwAY6pgFXcYZ3GTLEKe9yfQ4sCAh4t3EK34Ek5yiVgRSzwy8mKdTRFfUqfNkje3EmI8N3NzreJsZ6raSW6wgi%2FHA5nIyIs2zjS7JVyH1ckJxIetukOZTArdNOi%2BstvDgmChe9XhUc6pKkK%2F%2BVfsSQ7V8oZadcgo3Qb7PrropFW4eI2yGESJ0mAUcij03ng6Ew4cGax6CkrqU3dMkiicoYrx6RSRsDmpejymLz&X-Amz-Signature=5c8af452459a09eafbf08fbf814cf8f89f5fd48eda4373d6fca8f201a71b86ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOHA4DO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAciK%2FzZXra8gzG1fUaMcnKERHL7wBXMLvgHqc6mCvtlAiEA%2BgngSW8FVKwji2AfHHu7HQdcYQJRxt%2FKJN2AgHKQgdYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMtPsJBGFITaE9kU7yrcA%2FckS8EcUzKvP9kS2pVD%2FOGtoTXQY79o8TOGwN3y4zD2nHMYXsIh8MSmKJL24a%2BqOMvHiKoA0ilvqpwbqcg6NhBrtNx1C4alfOAziRN6t7Hm48nogB6y1KV5Jv4imwv6W6rS1q%2Fpsdu3Dgtnl5NdQGZ94gZKLCIHlY47N8AfA2gIaZaujRG6txgE7KaZcututfd33QvO3S%2BJ2jSSzibYDts8u%2FoBW8DVsnR4HUOniI9TlQB6UGT7Y04V4mLhjxB85rhyPOURgtYhlQM5f9lZpNpssGNDfVDoCsYTGo%2BYtDFe%2BhgMWaGyO24BSbsnWGgwzjhZj2l6UtyLFo4Ic5%2FUpBy6lxv7PU7kEFKjyrpzZtLc5Vlxmm%2BCQhn1A7q7oswP5SKD3YvFCt8HEcRCIzLPuo4EWbUtWpbuQI8LaKJYk8rcoQGZaeYCRPnVgzqCxoxdWen3RN%2BGofrZVgi%2FHSBNN%2FjmmDQzU5np%2Bv06CH12iFiIXzjba6DCdEn1CSZB8tfhuAqDvuFabaMfTYb6UCTI14kBXArQ3Y3q6kv6VpT91sMsgN2TYzGzn09YHReSer%2Ffy938FkR6Nn%2BWP6VJsVRU9gt5B%2FGmgxjlElxkTzelZVqZiPRblD%2FZfJjcjq4WMPPfgMAGOqUBNyUYPrNwwJN1Vp7eS42IipUh0o8O5xgk%2F0PFMIXULmky0VAhdjR0CI4XmzN%2BD1rueUoje0U1vSjRA6my%2BYnMStIcKFURpekGHO7H3JIMGRskUax1TKrtMqkrfj7Cer5YBr1RofeU0%2BAHJOwbpa3jMn5xKBxaBEAcL%2FUyLpV5v8Kq%2BuxnoyAIUhfFLX%2Bq1Ue9cPpIBOw2tsyo3Q0G8NF9s27%2BZw8q&X-Amz-Signature=af0b548efd4ec5eca844241689ae417f318c70160b061baa6b249f6c0d279d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
