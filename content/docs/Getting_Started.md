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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7DA7AS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxJWZw02%2FARuZ64Of%2BCP2zawQb4bkFJl6J3eOB59R2wIgAjaOK5DO1eCYAcrAE1C1eKd1TC8JS%2B40UNkBp8IVHwoqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwwxFrUlE3%2FQ5K2SircA6IsP%2FdlyDJvNltQT%2FBKQoDvUYGS9aPFwua37HTkN96366fVS0uu7oGrzERuvb9SklnyQD7SkeiDz3qkHwpLFsV91IU8hQRl7dubpP52FNdVREEml6DmBDJ8vzAY8NHQI5KXd6%2F01xiRj4ny7tMFG%2FJomlnmcCaHF1MO6FjpM5kOF5%2B4fW2o5hzria5VQJjni1UZGEvNSgkIFqmBkQWP1rXkkVq68Uhe9dFM1C%2FZGrcXC3z6OKekcUe6BSqumF%2F3bEoYHLzn6NYDbAdgX2SZQ6r8KrMgUEtM5edNEX%2FMiceUhS3oeHThDUvF2cEO1cP%2BTWwRWPeWDLjXPTSVU2vffUOm6jmDRecL5HrYdvB2iZ3F7cOVSsaj%2FlK5yY2RH%2Fb%2BYgBCR5oWpLnBWHigujJZrnRkJ2AXttw5jvPX5kkqLHG7ikopG8HoZV%2FTmrgsCnQOgl5gbyi9goyTXbpQpuwcmcvmUblG9OHSGVHdfKrFYThf%2Fd7qcD9J74A2a7z9jT8owiy7R9Y2UhcOQBq5PWVcnlrVvacJa78MRKDXTr1Eoio6rCT1fpH%2FEBFnKSnkNl73oVqlc5CsO2x%2B4bcgQL0EHvxJ73c70EkZ6375AzMGvbSVBkmLc%2FHZOY46CWCQMO67gb0GOqUBTUddYvDkvyg%2BB%2BdDEZhI2uwrRoSAKYDizhgY12EWy8pRqsu1mHw%2Beio80Q6qb%2BIYN%2Bo%2F1c1tkJ%2F8SWGOsdXMfVpdxvQ3gxbDNMVkCVwLB0hqtqW6QDcsGiN4frFGeI4ggxdnT2P52IzwjVwAGtcgmtghRqsylW0blfcI3WsDOG2QlZ9%2FPDMHeAMtQVPKYpuN%2F299ubnIZBaXuOCZA8z%2By8gm%2FNU0&X-Amz-Signature=d3b47ea4df3dcd97079b51716d3ebefce1f53afeb4bf6a2727cc50c7b4861360&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7DA7AS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxJWZw02%2FARuZ64Of%2BCP2zawQb4bkFJl6J3eOB59R2wIgAjaOK5DO1eCYAcrAE1C1eKd1TC8JS%2B40UNkBp8IVHwoqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwwxFrUlE3%2FQ5K2SircA6IsP%2FdlyDJvNltQT%2FBKQoDvUYGS9aPFwua37HTkN96366fVS0uu7oGrzERuvb9SklnyQD7SkeiDz3qkHwpLFsV91IU8hQRl7dubpP52FNdVREEml6DmBDJ8vzAY8NHQI5KXd6%2F01xiRj4ny7tMFG%2FJomlnmcCaHF1MO6FjpM5kOF5%2B4fW2o5hzria5VQJjni1UZGEvNSgkIFqmBkQWP1rXkkVq68Uhe9dFM1C%2FZGrcXC3z6OKekcUe6BSqumF%2F3bEoYHLzn6NYDbAdgX2SZQ6r8KrMgUEtM5edNEX%2FMiceUhS3oeHThDUvF2cEO1cP%2BTWwRWPeWDLjXPTSVU2vffUOm6jmDRecL5HrYdvB2iZ3F7cOVSsaj%2FlK5yY2RH%2Fb%2BYgBCR5oWpLnBWHigujJZrnRkJ2AXttw5jvPX5kkqLHG7ikopG8HoZV%2FTmrgsCnQOgl5gbyi9goyTXbpQpuwcmcvmUblG9OHSGVHdfKrFYThf%2Fd7qcD9J74A2a7z9jT8owiy7R9Y2UhcOQBq5PWVcnlrVvacJa78MRKDXTr1Eoio6rCT1fpH%2FEBFnKSnkNl73oVqlc5CsO2x%2B4bcgQL0EHvxJ73c70EkZ6375AzMGvbSVBkmLc%2FHZOY46CWCQMO67gb0GOqUBTUddYvDkvyg%2BB%2BdDEZhI2uwrRoSAKYDizhgY12EWy8pRqsu1mHw%2Beio80Q6qb%2BIYN%2Bo%2F1c1tkJ%2F8SWGOsdXMfVpdxvQ3gxbDNMVkCVwLB0hqtqW6QDcsGiN4frFGeI4ggxdnT2P52IzwjVwAGtcgmtghRqsylW0blfcI3WsDOG2QlZ9%2FPDMHeAMtQVPKYpuN%2F299ubnIZBaXuOCZA8z%2By8gm%2FNU0&X-Amz-Signature=382aef687128ada795047df666598ae20a4ebbcc7e3517bbd31f486c4f0e7e09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLQ24O7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIVRe%2F0ZnpXCWFXr3aTsXZSt9K4HO%2BZ5wJy1Qv7HNmhAIgBGkxa415e6E96DEmZIT9TwpJIV9P%2FMHjmPc09fHX3DQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBvoewg23iwcj8zeyrcA6Y1ZKEYSxUG%2FZBDdp1gZ4WQZe3G6X7y3RrfHjRoEknfNzN%2BZMwNaSo3Md45aSgvWN%2Bh30VqO3Pji42ZP7GUe6lrJEXt%2BPYnWpIBna06rs1LtOVhFZ0ZRkp3O1LBRHfW0hCgBwzRZ4ZbgkNfe82lws2zho%2FZ4I9feDNBYowqITsadP4Apu0jPb1KUq26NaGKp8QAV54yWwB%2BNodCsLUd05DFI9wDcwID9n6XwbB3bbcq8TImiIdgyMskJYOt%2FrPMn8rhQ7iVud1ixxR4K%2BSXMxRPtRysBlGS5Z5bDy7RrH867MSz55uuOtkB9mohY5HVs55Czj0694TVgnxRTTmUKKvOXS%2BkTJw%2FgPkGej2NcOfL6dwI0IExrUZpxHX1daQim%2FDr1sQuiOtm18Qjmg18zHrPnH3cm2x6q7GgLZxJ7N5r5fu9hy7AsLRDW5R4dgLuc8w9%2BKKnZY%2BZWd1%2Ftt4j%2F2uXiU0mw%2FQS3dXyDM56H2WrJ05HUpb2cUopkYC0DwVYpQ%2BF9%2B64ziT9f9wMSMPQsj4rVaLRdjNgYY8%2B6p3EM%2B8ftpKjpK4BNUbftN7XHsCiVVplWgfNdNK4e9wBnQ4dB9SqpHM4v9f0Z7OTHB6QXb5fIycXXoufbeBo7HteMLW7gb0GOqUBg02C%2BFdqt96Iq59DbNkwpGpHiIGbR%2B5ZAH4GkzWdJQmQR0j6qEETgLgtbQJGYo5OCNcl%2FkkB2giZqFWQzY%2Bgaa782sR92nqwjy1FW337mw78pof6I3%2FP6jQRThap%2BqByNIwu7%2BiTaGmNnCh9ntDwNanPbHfJFOCwNlM1gu2X3oSKlL3KDn0kHm%2BpT25I8MsnF97qCIGh149YH7fOI%2FvPbLECCniU&X-Amz-Signature=b394697a642f0dc4433f659d3395efe139c44eb851b114392394ea825ab3ae93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6V4CBL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiBOOQ7z5SAPcgYVdi2xh61nO%2FTmlUH9FOG8ROqoiKWAiEA2N96VkZT64ZRAebS1EvmUhQC%2Fce6ziEgbcgSiukhwwEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQQs0h7eVdKHO81YCrcAyQBYsTG2ohj7Ubz3WkvJOGOQ2OdTSt0IQqu5q6IFiS5GBRRohnUWipAhaCZyZAZyXkVdEzCnXAPwajXSn5JmclaNs0upJGvePkMCYLB8b7QozuoTnx2sgSHmCtl%2BT9GJUB9xNitn249qu%2BXugdXLwuoYepWAVp89swoUDMP%2BRacS1ajIqWL7cQlE5nZ7tfqT3HwpzJEEsOrJ9FJhaf3%2FUAZPwqT0mL1GABWob%2BplUO%2FT3mLbmSyV0LYIYYwptyIdNElOAOUAeoP3UexI9xquu596hoUCQdB7usSvapMVrbphmCJS%2FSJXeDnn2QmLomzlVBOAxdNmhqHMXOrEwKHNDHPHI%2BaNJda79EYjBOqrVc1U20W4ZVeMFxM68QjK9khJOSKn9J9SZrvrylhN4RiCRGQvdfXsTsJg5vAOP%2BTYXaZ%2B09nz3493GxhoDfCG%2B%2FOVkNnj4%2BaHBsFXQYY3sIfLZLG763MuXnsbrn5u%2FZjzQf7HuMeFPnRveENLJ%2B8aIbnCAfU89m2A0aeBickCg32M7rrqQSOIbACigJTkns1msFfWVXfhVCcaCrxuMrqoepRPTHaNOkOlBy6fd850xT%2BaiuvmFOrAkVJ6MwpW2acytcIQe0zSglfTJSg9vWGMNi7gb0GOqUBOgpYjSC8%2BVaTug3a0oExbbz74MyebGTwZ4c24yINkNS5cdxOk9HNQRO20etrbcyXT1cn0g3a4FZmT2IWfUhme94RtZ1FWoDDk1pXEBl%2Fa8P%2F%2FcSOMLgsZPVhMmiXy68aSKq7aBP%2BYaFlTE6jLv6gUUrfpz%2BDGosF%2BiuJU42iZqUCKQ0LA4X6RMmvCe5czqU9e%2BQ53y8BZzbEFlbP4EEN%2Fh1tn1hh&X-Amz-Signature=4f7a09cc8c28222bf1ce23db9e110d32e2c5c54cd1d2f4dedc5e38c1b053efe8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7DA7AS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxJWZw02%2FARuZ64Of%2BCP2zawQb4bkFJl6J3eOB59R2wIgAjaOK5DO1eCYAcrAE1C1eKd1TC8JS%2B40UNkBp8IVHwoqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwwxFrUlE3%2FQ5K2SircA6IsP%2FdlyDJvNltQT%2FBKQoDvUYGS9aPFwua37HTkN96366fVS0uu7oGrzERuvb9SklnyQD7SkeiDz3qkHwpLFsV91IU8hQRl7dubpP52FNdVREEml6DmBDJ8vzAY8NHQI5KXd6%2F01xiRj4ny7tMFG%2FJomlnmcCaHF1MO6FjpM5kOF5%2B4fW2o5hzria5VQJjni1UZGEvNSgkIFqmBkQWP1rXkkVq68Uhe9dFM1C%2FZGrcXC3z6OKekcUe6BSqumF%2F3bEoYHLzn6NYDbAdgX2SZQ6r8KrMgUEtM5edNEX%2FMiceUhS3oeHThDUvF2cEO1cP%2BTWwRWPeWDLjXPTSVU2vffUOm6jmDRecL5HrYdvB2iZ3F7cOVSsaj%2FlK5yY2RH%2Fb%2BYgBCR5oWpLnBWHigujJZrnRkJ2AXttw5jvPX5kkqLHG7ikopG8HoZV%2FTmrgsCnQOgl5gbyi9goyTXbpQpuwcmcvmUblG9OHSGVHdfKrFYThf%2Fd7qcD9J74A2a7z9jT8owiy7R9Y2UhcOQBq5PWVcnlrVvacJa78MRKDXTr1Eoio6rCT1fpH%2FEBFnKSnkNl73oVqlc5CsO2x%2B4bcgQL0EHvxJ73c70EkZ6375AzMGvbSVBkmLc%2FHZOY46CWCQMO67gb0GOqUBTUddYvDkvyg%2BB%2BdDEZhI2uwrRoSAKYDizhgY12EWy8pRqsu1mHw%2Beio80Q6qb%2BIYN%2Bo%2F1c1tkJ%2F8SWGOsdXMfVpdxvQ3gxbDNMVkCVwLB0hqtqW6QDcsGiN4frFGeI4ggxdnT2P52IzwjVwAGtcgmtghRqsylW0blfcI3WsDOG2QlZ9%2FPDMHeAMtQVPKYpuN%2F299ubnIZBaXuOCZA8z%2By8gm%2FNU0&X-Amz-Signature=1173861c87ec57a16f857cb54599e24412fd2cb0ae29bdb75ec85772752c03d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
