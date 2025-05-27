---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEOZPYQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA33Oj0Ak10zSqrUXcb%2F%2Bq4yrPCaFtDOrZF8qqsgf7MAiBzmNFqiP0MBTa0H6P7T%2FfdUcE16ojh0h1PcvR3jtUF7Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMB6ENlJikDQarhs6pKtwD3WtMR9d1pRbW5L5A3Cs1kaUQM0SGn%2Bps945ihO4LKI7WRU5oTsHaJO15k9FAmKFAMIVhjOqRDVr5jjsI2l86yRyICyh0EX6yArUgKEwUrd4MkVN5ou7dD5a0cqNEkZysEToz9gCmruidtOB%2FPNltpgBaRJ%2FbdtHLY7PmON%2B9YTN3qG1um7Dwtg%2BNhTu3R%2FjLDh%2Bx5dKuEGtwuDjMQHdBhW3ogh%2BeHFtJ9YMMNQcAVxK9nGQSOuxVog%2Fm7IN18XU%2Ft9bVMYv8RVsvRSoDxbDZFHi%2BHYfsi5McZIp4Y0nI3oL6ktg0KUjaX%2FcCGEefA3kz1QcF6R8CdQYpitm3ERT1Q6yq6%2BRRrKpBmHC9SIj%2BMr33DSf2%2Bv7QZoZKGvgi3%2BEkN7Vz2NYJJa%2FuVoAfk5VpBfPmdXMmUKr3xMzM3q1yfX%2BDHoEQKY1e7JmRZh9ViowmZHzIKbgXSJJx0%2BbzUyky3gaxfEjACyP6ghZOejFKS3yYvE3OGyBgXgem62yVSdPibJn%2BhUislA4O1zhl1pUehsbWyyCSThgFeMvS%2Bgr57LrA0gdL8rt1ZF%2BlZayLFbxhTpW%2BLR81V75zNY1Aj2w7mb2DS%2FZl7WB2gI9sf9wbigN9%2Fret%2FMi1anSNUcMwy8nYwQY6pgEiL%2Fow5gTuQmSvW0nM7AVwLijIkYryY9AC%2FTuQ1Seoh70xOSswVJIBMF4EpcrZLvXMNntNygi5A4HAfRpfAZ2Nk9%2BbP%2FG7TLK%2B%2BWu1tbJLt0e347x8fCZfzIo16ynbPw3iCeQLgih71FnkkQtJEU%2BJnsRDB4vH%2F8uDLmkPGseI6PNrO9EbWBSDvET3JC0IUUfDtY%2FUFTK%2BtUdKubGC2l%2B2R45Rru13&X-Amz-Signature=a87a6338cb0511b29ce90e87e168a89e4a17eafa1a411effc26fbde078e6cc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEOZPYQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA33Oj0Ak10zSqrUXcb%2F%2Bq4yrPCaFtDOrZF8qqsgf7MAiBzmNFqiP0MBTa0H6P7T%2FfdUcE16ojh0h1PcvR3jtUF7Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMB6ENlJikDQarhs6pKtwD3WtMR9d1pRbW5L5A3Cs1kaUQM0SGn%2Bps945ihO4LKI7WRU5oTsHaJO15k9FAmKFAMIVhjOqRDVr5jjsI2l86yRyICyh0EX6yArUgKEwUrd4MkVN5ou7dD5a0cqNEkZysEToz9gCmruidtOB%2FPNltpgBaRJ%2FbdtHLY7PmON%2B9YTN3qG1um7Dwtg%2BNhTu3R%2FjLDh%2Bx5dKuEGtwuDjMQHdBhW3ogh%2BeHFtJ9YMMNQcAVxK9nGQSOuxVog%2Fm7IN18XU%2Ft9bVMYv8RVsvRSoDxbDZFHi%2BHYfsi5McZIp4Y0nI3oL6ktg0KUjaX%2FcCGEefA3kz1QcF6R8CdQYpitm3ERT1Q6yq6%2BRRrKpBmHC9SIj%2BMr33DSf2%2Bv7QZoZKGvgi3%2BEkN7Vz2NYJJa%2FuVoAfk5VpBfPmdXMmUKr3xMzM3q1yfX%2BDHoEQKY1e7JmRZh9ViowmZHzIKbgXSJJx0%2BbzUyky3gaxfEjACyP6ghZOejFKS3yYvE3OGyBgXgem62yVSdPibJn%2BhUislA4O1zhl1pUehsbWyyCSThgFeMvS%2Bgr57LrA0gdL8rt1ZF%2BlZayLFbxhTpW%2BLR81V75zNY1Aj2w7mb2DS%2FZl7WB2gI9sf9wbigN9%2Fret%2FMi1anSNUcMwy8nYwQY6pgEiL%2Fow5gTuQmSvW0nM7AVwLijIkYryY9AC%2FTuQ1Seoh70xOSswVJIBMF4EpcrZLvXMNntNygi5A4HAfRpfAZ2Nk9%2BbP%2FG7TLK%2B%2BWu1tbJLt0e347x8fCZfzIo16ynbPw3iCeQLgih71FnkkQtJEU%2BJnsRDB4vH%2F8uDLmkPGseI6PNrO9EbWBSDvET3JC0IUUfDtY%2FUFTK%2BtUdKubGC2l%2B2R45Rru13&X-Amz-Signature=97f7a2438a3cb590f13c240e097d2944a50b30cc56fd640a06d537a82233970f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEOZPYQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA33Oj0Ak10zSqrUXcb%2F%2Bq4yrPCaFtDOrZF8qqsgf7MAiBzmNFqiP0MBTa0H6P7T%2FfdUcE16ojh0h1PcvR3jtUF7Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMB6ENlJikDQarhs6pKtwD3WtMR9d1pRbW5L5A3Cs1kaUQM0SGn%2Bps945ihO4LKI7WRU5oTsHaJO15k9FAmKFAMIVhjOqRDVr5jjsI2l86yRyICyh0EX6yArUgKEwUrd4MkVN5ou7dD5a0cqNEkZysEToz9gCmruidtOB%2FPNltpgBaRJ%2FbdtHLY7PmON%2B9YTN3qG1um7Dwtg%2BNhTu3R%2FjLDh%2Bx5dKuEGtwuDjMQHdBhW3ogh%2BeHFtJ9YMMNQcAVxK9nGQSOuxVog%2Fm7IN18XU%2Ft9bVMYv8RVsvRSoDxbDZFHi%2BHYfsi5McZIp4Y0nI3oL6ktg0KUjaX%2FcCGEefA3kz1QcF6R8CdQYpitm3ERT1Q6yq6%2BRRrKpBmHC9SIj%2BMr33DSf2%2Bv7QZoZKGvgi3%2BEkN7Vz2NYJJa%2FuVoAfk5VpBfPmdXMmUKr3xMzM3q1yfX%2BDHoEQKY1e7JmRZh9ViowmZHzIKbgXSJJx0%2BbzUyky3gaxfEjACyP6ghZOejFKS3yYvE3OGyBgXgem62yVSdPibJn%2BhUislA4O1zhl1pUehsbWyyCSThgFeMvS%2Bgr57LrA0gdL8rt1ZF%2BlZayLFbxhTpW%2BLR81V75zNY1Aj2w7mb2DS%2FZl7WB2gI9sf9wbigN9%2Fret%2FMi1anSNUcMwy8nYwQY6pgEiL%2Fow5gTuQmSvW0nM7AVwLijIkYryY9AC%2FTuQ1Seoh70xOSswVJIBMF4EpcrZLvXMNntNygi5A4HAfRpfAZ2Nk9%2BbP%2FG7TLK%2B%2BWu1tbJLt0e347x8fCZfzIo16ynbPw3iCeQLgih71FnkkQtJEU%2BJnsRDB4vH%2F8uDLmkPGseI6PNrO9EbWBSDvET3JC0IUUfDtY%2FUFTK%2BtUdKubGC2l%2B2R45Rru13&X-Amz-Signature=31709b7bdcc3289ec704f9092034c41d747974b49c6d72f5bcb16cb1a9446469&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6QLBA6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4mXNGiNxtSlzmKOl5hqh3Tq4f1bBHe7vljEDYh87XAiAyhkHNxPgkPOxL91yR%2Fccl5JSo%2Fqq9KRdURGdvIf7VbCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMBZqaYpDlVXVLcZKIKtwDc%2BCcazerUBoggSWp%2BhNKX6jo10REQhNOgtCauwS5DS%2F9YFREFNOn9rGi0rwDeGex5O1C9sEkshKSNpvPXcILJR7yDynR6CtFnWanSCxnj1stAryne3fbKvIKTIRgWsYUc62GESgWLEVm1wLgEY32NV%2FoRgKN8eTizMQ6jSQ6pl15TvaE2YKBsAHEgway4Ok9AZ%2BI64d%2Bwe9%2FDeZH1vn3YQGyGFZvIXWHO9Vdqcy%2B3WoyVmPB9K90dXrdpX7TniiW4GW29nP28QQ5VWTudmdnjJDzkTyCeUWVZESN%2FvLCBwBwC1gUIcPl2M3DHK4C5CaJvHsIHnsCiUJWhY5CZb2IUEW4a4htD7TP9wK8wx8NqVWYwKK3XNAmEncyG3uYsmb9T93x0TfShCIje5oAb%2FXXZuuBsX7cbvgKlDkW9QRVOXIREw7TXWW27zi4G2d60SnTU5K14%2F0BWfPsxfKCaDcRzaS%2FDVCwi1VfgqRdXqA%2FTAt%2BkurCRYE%2FxKzpDxJ2E10XfI4UrJgofnAdatvKM1o56ZYe%2FnTQ1eYXT3e4X2YkwQ4Y69IDJjiyhR1Uq7q5pOpuxBuoX8o3dcGPFpvzhS5pgsT3fui5EEb8JCs6VkNwLnRMYzeeZlDXbeSRyPow7cnYwQY6pgFKlCird5X5YC4Rb34D51NTvNW8%2BAbfbSy%2BTaOA5DgedvKcQW0TSLG2PtfvubDyz65Xp5Ak2JD%2BNfXHkgx5jDNR%2FpTBHTUvl0rGJkKnBy43GLhWJZ8QYOAQUk4VrFzXcsrTA4W2ZGXrV8Ldv746afAIQJ0pdJ%2Bx5acDxMpNOrCni8ucPwblaKHHrPYdVov%2BNnupr1%2FmPlZV4M%2B2o1Fr%2FE1o4x%2FuCHgY&X-Amz-Signature=aea6aba5a37f13b100c03cb0cb9e80172a567096c19164442c7578ac8a5f9a27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIBIUVX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDb7wEiPzEWLVY0PuQnISYAyXhcVFhUxzuEtslrUxTmsAiBsDtn9vOcTpPSMRCSOLzdt6jr74AKLbNwBCLsHuTfFeir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMhzrrLk2JoYIGm2XiKtwDQQzbtKa6b6wsFVzpw2edWWiH1japZl51mapPVDA6y%2FhxPIdnZbPntawGwraX1TDrVRLs8bUfAvdXXmZenaM9AfB8sCBBMx2ydJOhHL570j4b1R7QcPxebsT%2BgT8sddxbg9GgFcr0gfXPDfqD6Qi5nJy%2B8FQtiy2LK1VJNhcrCGXVzhQFtFduqmv3aJ03PfuSXz7sIiLluNB%2Fmb6y%2FxvUvdcsVkoZKqtM85iAMT5f0a3Rp0kKZhi0PvmP3%2BDEDTJa5SQUqLReUdhlFTlQuWVFR1PNhlWQxzjD0%2F0neTSr2bMbqDeA5nZzC8iQyCHGQa%2FC4JdTXcbhbz%2BZclMDDrDlcrpvTv4fkSM8LIt%2BoQsZ3G2XyBTVzXjcJuj9UwrXkBIsZPhyuQ13YqROgkl3gQg6g59BLtNdQCpwSudUONZMNymrqcY2cbPl7jmq8VvfWZSoThdQM4ML6JN7sHf4qgDJORyLowRjLMTpzofbmreaHfM4nPu1dKWOQzi2tPGM73mxw%2BZIIQR3FZM6cehw1pwhn3zxqvt%2Fh2AR102%2Ftu7tI7JATsxfU3i6vbUqk09vKM%2BXjy7hQkruEE2Qmco%2BrtOiWQY3SV6UbhKGNFBkQsr2cUBBDlI5F5WHY8X847kw7snYwQY6pgHSH%2Bi5QdIVH5p7izGWaeA%2FdGAr%2BEdTaU02fmIPf9tYqawgezQkV1kyhV0aNsLzwGyEM7Hh4qMnVF6O%2FNEf%2F6dcrimrFDJhYIkEfQC%2Ff%2FCIRy8QfLhKWMBW9jDEbVJa9htOmem1QSynjIGpmh8KYHK5yHT3b1rOz8yzSs2xUHwtGR2B80pZGIPsxuBa5cA1arIpTr83M9FCDq2qBmCCkkGCQC4JYr7d&X-Amz-Signature=fbb7f45093d3f99e24d432733c06b6ca38d8262ed334a9ce311c91f742f0bbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEOZPYQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA33Oj0Ak10zSqrUXcb%2F%2Bq4yrPCaFtDOrZF8qqsgf7MAiBzmNFqiP0MBTa0H6P7T%2FfdUcE16ojh0h1PcvR3jtUF7Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMB6ENlJikDQarhs6pKtwD3WtMR9d1pRbW5L5A3Cs1kaUQM0SGn%2Bps945ihO4LKI7WRU5oTsHaJO15k9FAmKFAMIVhjOqRDVr5jjsI2l86yRyICyh0EX6yArUgKEwUrd4MkVN5ou7dD5a0cqNEkZysEToz9gCmruidtOB%2FPNltpgBaRJ%2FbdtHLY7PmON%2B9YTN3qG1um7Dwtg%2BNhTu3R%2FjLDh%2Bx5dKuEGtwuDjMQHdBhW3ogh%2BeHFtJ9YMMNQcAVxK9nGQSOuxVog%2Fm7IN18XU%2Ft9bVMYv8RVsvRSoDxbDZFHi%2BHYfsi5McZIp4Y0nI3oL6ktg0KUjaX%2FcCGEefA3kz1QcF6R8CdQYpitm3ERT1Q6yq6%2BRRrKpBmHC9SIj%2BMr33DSf2%2Bv7QZoZKGvgi3%2BEkN7Vz2NYJJa%2FuVoAfk5VpBfPmdXMmUKr3xMzM3q1yfX%2BDHoEQKY1e7JmRZh9ViowmZHzIKbgXSJJx0%2BbzUyky3gaxfEjACyP6ghZOejFKS3yYvE3OGyBgXgem62yVSdPibJn%2BhUislA4O1zhl1pUehsbWyyCSThgFeMvS%2Bgr57LrA0gdL8rt1ZF%2BlZayLFbxhTpW%2BLR81V75zNY1Aj2w7mb2DS%2FZl7WB2gI9sf9wbigN9%2Fret%2FMi1anSNUcMwy8nYwQY6pgEiL%2Fow5gTuQmSvW0nM7AVwLijIkYryY9AC%2FTuQ1Seoh70xOSswVJIBMF4EpcrZLvXMNntNygi5A4HAfRpfAZ2Nk9%2BbP%2FG7TLK%2B%2BWu1tbJLt0e347x8fCZfzIo16ynbPw3iCeQLgih71FnkkQtJEU%2BJnsRDB4vH%2F8uDLmkPGseI6PNrO9EbWBSDvET3JC0IUUfDtY%2FUFTK%2BtUdKubGC2l%2B2R45Rru13&X-Amz-Signature=05b83c1eb736d9f6f1680e2bef5f06bf4c35fa7fcb17a050c0fbbaefebe496fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
