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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJ6CUE2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClGzVqY7baI4mnS8wpgIFWDLXaSbHw0rFd6t7oQoFOBAiAEdjjSXM1XyEf%2B0sDZRGAp7cv4n6B2rnSAgyKJ66fubSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMgQtSGpzIGAukXv9HKtwDLyBBdAY8oIc1WXQYyZ7qnbRgFGy3zdB9dioGxIiH9VqekdhkYkvFULyVSJSnd4IXDqf6EG9472K%2B%2FFccG4t%2BG6Qb7pvwPDk0NckgNBPq8ZorDtdSUPgXc4riy68nuDS1pIFYUBNOLqIR0PEKe15G0iGoFxWE%2Fei3iJUas8lJUwfGo8ph9Sq7H5bsST56zc6SIC8a5OmUufR%2FKPCWiB438H3FwsOrtEUGT1m2s7ZMPI77BFNqS96QhYfk1Y0BJYkt%2B317mbq8RIZ32LkdA29qUQ5298jAZ9ZX9eodvFkyGgO0u6d4S%2Fxlbwvi8gVRmCMoDK%2BVvZiFxdzoQvnRPUvJnBVJf%2ButYA6fiHeiGw5RyDJFLkIcPCRf%2BcILslnr3UuuodWOEthOZn1AzIS2khk5uQmRQV3hlacmUyv3HmC%2Bptrg3t%2B2bhOs4zzfnlQRRlPU37gAsQlyGaPWOvX97CAnY1gsC80aCtS2QLWpn2zsiRi0lXoWtx6o%2FhJnVRYXNdPmXY8dV1maSriffm7fcu22Zjd4AgcVtHkMD3gsdtjTkmN45D6KY1H2SOEwSPJXdkCoQMqBIHE4%2Fr7XnEhNh%2BHVkFKv%2FplLx4NVS77B95BT5YqaCgiH40Xx9vh1ohcwi8rgvgY6pgGAbiUCsRGBtsOZeSKQW6gbQHA4kc%2B1AsBDwW7fVl4TAYNwpIMmlSmE7T2sOQZwKsOqmS1buDZwHvJruh2%2FIuP4Mlxgp7MbEHHo3cixB%2F9E%2FxZztVboD8NG1bzZAVx2zxPrJ5v%2BAWFkOg%2F1QUpaDndg0uCUc8vA0Q%2BQKOdWGxre1xSCjqIuygWcH4o1lnuiP8K6LUvmk7zoBqE8Z9FGSk8ATvzSSnKI&X-Amz-Signature=d07dd7f85e98ae57b3263d0a0e49065d00a81e5ce051af40b70eae4426975815&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJ6CUE2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClGzVqY7baI4mnS8wpgIFWDLXaSbHw0rFd6t7oQoFOBAiAEdjjSXM1XyEf%2B0sDZRGAp7cv4n6B2rnSAgyKJ66fubSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMgQtSGpzIGAukXv9HKtwDLyBBdAY8oIc1WXQYyZ7qnbRgFGy3zdB9dioGxIiH9VqekdhkYkvFULyVSJSnd4IXDqf6EG9472K%2B%2FFccG4t%2BG6Qb7pvwPDk0NckgNBPq8ZorDtdSUPgXc4riy68nuDS1pIFYUBNOLqIR0PEKe15G0iGoFxWE%2Fei3iJUas8lJUwfGo8ph9Sq7H5bsST56zc6SIC8a5OmUufR%2FKPCWiB438H3FwsOrtEUGT1m2s7ZMPI77BFNqS96QhYfk1Y0BJYkt%2B317mbq8RIZ32LkdA29qUQ5298jAZ9ZX9eodvFkyGgO0u6d4S%2Fxlbwvi8gVRmCMoDK%2BVvZiFxdzoQvnRPUvJnBVJf%2ButYA6fiHeiGw5RyDJFLkIcPCRf%2BcILslnr3UuuodWOEthOZn1AzIS2khk5uQmRQV3hlacmUyv3HmC%2Bptrg3t%2B2bhOs4zzfnlQRRlPU37gAsQlyGaPWOvX97CAnY1gsC80aCtS2QLWpn2zsiRi0lXoWtx6o%2FhJnVRYXNdPmXY8dV1maSriffm7fcu22Zjd4AgcVtHkMD3gsdtjTkmN45D6KY1H2SOEwSPJXdkCoQMqBIHE4%2Fr7XnEhNh%2BHVkFKv%2FplLx4NVS77B95BT5YqaCgiH40Xx9vh1ohcwi8rgvgY6pgGAbiUCsRGBtsOZeSKQW6gbQHA4kc%2B1AsBDwW7fVl4TAYNwpIMmlSmE7T2sOQZwKsOqmS1buDZwHvJruh2%2FIuP4Mlxgp7MbEHHo3cixB%2F9E%2FxZztVboD8NG1bzZAVx2zxPrJ5v%2BAWFkOg%2F1QUpaDndg0uCUc8vA0Q%2BQKOdWGxre1xSCjqIuygWcH4o1lnuiP8K6LUvmk7zoBqE8Z9FGSk8ATvzSSnKI&X-Amz-Signature=de6b9624450038c2aca8b46276f38d83e83866152a60a4f4fa8336976f2f5509&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2E5B2KL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fjdAfoScF8e9Wx1aOSwg3u3r7uexdstrXg%2B3SbJAkgIhAOSrLvNPKK2cR4GbyJg3Ftzcn7l7HWZpbvWHYBv0K%2FAlKv8DCEcQABoMNjM3NDIzMTgzODA1IgxkaaE4YVFlCiHOeL8q3AOvzbtf8%2Bmw3akaH%2FoouIO02%2BRhPSSPQks5b3J797ztbyESYN%2Ff18MhLTQTZd8XjyLRxVKCqtuPTAp6u81Qc0F%2F%2B1LW5QnfZ46s9QAXPsteXCOo9%2BnMRDaDoy3RkrE32h6%2BpA83FdKVH3msxBjGnVuomk7%2BrN0KZPyxoSCXsOv064BK7tLrudfvxkuKDyWN5lfubktaQOrqrLR5bwrP2gqN0T%2BwBVKWC%2F9bjZb8LJW6BmSqgKsrax%2BMEjGdtNJJSwtxr0XJRGqNCfPxNUVFS7i5YwUYlBSMQFbHxWggddSF30YkUpAWL%2BeIglcRY3JzuQiAEoLjDeMty4QYBMtS6YfPJt1C09Xr%2FZhWK%2FKufuQ8VPfOK8dHnGuIzTpopx8J%2B2OLs400O4BwXisW8lVV2%2BFjpYnp2tAyoAtcWu8%2ByOH9O5kzXa4bD7LGMxAXejwaIjepxiVlLTlAjluV3mhgEK%2B0dRQQ%2BpUSpeD2xwwQDhw39kMV8x4ZlfNAOsUuvhOEoD9Hid%2FghsXsDr8zepGMUETf3tC%2BKvU%2Bm6ETX5c0FTkn8o15JuSPlDlDSsACriyz4vm63SHUjU4oSDA2VWLIpAkVFeIASIctvJoJw20dnrhU0hUWskm9Lq363MBEsjCXyuC%2BBjqkATihiQw5pTKXr%2FGFrvaHFh7nqWiHUnu27r%2FJGGavXV%2FGcYuiq0TyFUMDIEg8QH6FqwtKwwVInOnxE63PeWo2MUgXY%2F3h6bS47ch66Nee8Zqr%2F92VsIj%2FNCQJY3mTRinfjTCy0aiuT6rTAO0oqi90Iylxbpp9EdLyUJVPl1Y%2FqMido3ivdA%2BWMm81YFS2sDcUByx2EeYTfNIJ4ZEUgRAhNg3RnleL&X-Amz-Signature=dc0cee5f63a52038c7cea8aae13ef6d2432c42876f2d62ea709d7fa845022502&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BYSIKU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwvKhK64gf5r0DuaYnHWswJp6iXUV1HtToUPZhdLnYcAiEA2h6OwsCv5rAz3XsW%2BAJf%2BM87Eq9putvt7GHtcQtgM%2F8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDL7JblPLGd1qWaCCMyrcA0GeGZVQGjMQKEkRvztl%2F6rZXr%2BOA1ZwCjLazBskyyS04sM6jO6sgUqzbKBN7gJDaJFZio9ux0UM%2BfGmmeTIgn7dhPMlLPM1C3ibcvMxBgogGoIdCg78j7mEpovCmRytc8iVYi7%2FaK3idCJ6akrYbjv9fBh2jJFAcDqwHMxzp9mMIfJ9DPcVdmGSFjDuQAcAIyg2BG2nGcziutvDpwQ5%2FpGe0LMU96UuWvBtIkt5owB4F2u04FSrVqe5KcEW9PVBr55Ay%2B0hSXnQvyWTHPU4eT%2BRGCbycToCEr9K0HHxjjN3WKtfMgDx8QeqoGh2phpf2MMfgcX%2BP%2FIrUZMdpxN5356G8leayDF20J1boL4SdyMITtnehfPiEu4hDxxwWfOZLPMOxxF7GACWcvzC7gIhns6z3%2Fay4%2Fd0qeTnqq8Nxh6HSCND%2FJONk0bc574aXbpn7eMynNqNHgf1JsROwkqt7tJm7XtRUTBsOHh49bHT%2FuGNVom7ktm04xWKCGciZeqLa%2Ba90rqWyeLht57gfttYjKKJTMHWOxVuxZyDl2F6WYsu8xlLeafdDU5Hg5XOMPP2RiuAASxbUmXpYi7bXdfTplf5t18WAvJv2wxofb3ow4tlKq33sG3RzXGkX%2F0TMM7J4L4GOqUB5XcDJF0doYbRmaTCXjihN9UAtFDFoSMgU%2B97G2oyVEYICrbFMm%2Bh4Y2BolBDVWk9KjtLSvpLwgTAJCB7ayM5PabCkdDkXHQiwFrA3N63CYcQJ%2F3XW7iXSbxcZkIEe4bXhoq5Pmxp4DiPqLReqZ2TYjnPU5Eb7qIqVV1Of46xv%2F4QOuV1v11NUQhWrwv0X2aXUkTzRmugf3BbikBJsHCCLnj3%2BiRY&X-Amz-Signature=108c3f15c133545743f7f5400691bbfa97a4030627994a432035a0bf849454ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJ6CUE2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClGzVqY7baI4mnS8wpgIFWDLXaSbHw0rFd6t7oQoFOBAiAEdjjSXM1XyEf%2B0sDZRGAp7cv4n6B2rnSAgyKJ66fubSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMgQtSGpzIGAukXv9HKtwDLyBBdAY8oIc1WXQYyZ7qnbRgFGy3zdB9dioGxIiH9VqekdhkYkvFULyVSJSnd4IXDqf6EG9472K%2B%2FFccG4t%2BG6Qb7pvwPDk0NckgNBPq8ZorDtdSUPgXc4riy68nuDS1pIFYUBNOLqIR0PEKe15G0iGoFxWE%2Fei3iJUas8lJUwfGo8ph9Sq7H5bsST56zc6SIC8a5OmUufR%2FKPCWiB438H3FwsOrtEUGT1m2s7ZMPI77BFNqS96QhYfk1Y0BJYkt%2B317mbq8RIZ32LkdA29qUQ5298jAZ9ZX9eodvFkyGgO0u6d4S%2Fxlbwvi8gVRmCMoDK%2BVvZiFxdzoQvnRPUvJnBVJf%2ButYA6fiHeiGw5RyDJFLkIcPCRf%2BcILslnr3UuuodWOEthOZn1AzIS2khk5uQmRQV3hlacmUyv3HmC%2Bptrg3t%2B2bhOs4zzfnlQRRlPU37gAsQlyGaPWOvX97CAnY1gsC80aCtS2QLWpn2zsiRi0lXoWtx6o%2FhJnVRYXNdPmXY8dV1maSriffm7fcu22Zjd4AgcVtHkMD3gsdtjTkmN45D6KY1H2SOEwSPJXdkCoQMqBIHE4%2Fr7XnEhNh%2BHVkFKv%2FplLx4NVS77B95BT5YqaCgiH40Xx9vh1ohcwi8rgvgY6pgGAbiUCsRGBtsOZeSKQW6gbQHA4kc%2B1AsBDwW7fVl4TAYNwpIMmlSmE7T2sOQZwKsOqmS1buDZwHvJruh2%2FIuP4Mlxgp7MbEHHo3cixB%2F9E%2FxZztVboD8NG1bzZAVx2zxPrJ5v%2BAWFkOg%2F1QUpaDndg0uCUc8vA0Q%2BQKOdWGxre1xSCjqIuygWcH4o1lnuiP8K6LUvmk7zoBqE8Z9FGSk8ATvzSSnKI&X-Amz-Signature=06d995fc65f58b5bc85d2874ac197962086123e04ce6c736cd99a402a4b8d28b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
