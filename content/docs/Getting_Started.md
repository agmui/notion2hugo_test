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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KLV4P3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpBejgO9GKqUq2pLL9sU%2BFULPSKNG9u3UpRHXY1qzT5AiEA9qRNGpYTF6EV%2BvclHGKPtv4Cp15UylbC2enP5cYyr6oq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAYGfNMo16HSnQ5dMyrcAzSitErTkYXzclgiFMBqS0DOxYjgxqOwxaVbLCq%2FUFEDgaeoMoXvSF7lnUcpuXbibx3umFqKWS6xA8Wjl4d0tsbNHnd%2Fhg1tpzfrg2Zzj1TtGnCpsjEvZanw9Yq18WVCcL4rtGb5A%2B3pld7uKj%2F8KyhaxVLVU7gVn%2B1CL3Oyvg0gyAfEl9lUxffxxgeHKE3lkS8AyXvFGEdHsmBYaKSCVOKpYmmimZuZITQO2FhzHZPWYd8Qtv5YUKVNns%2FwgwjSFhqiTHFThOVv2%2BoUQ79thAavrEpfaqcAZfkY9RGkEjL%2BI8uasLkrMGqb0X0jpugGJN9KOossgGzeJh9dbUr6DIpMN7F%2BNJ%2BRh7F%2FsevSdQEfsJAVDF27G0h75SgrFf9Nh0VxZqPk8htNte32mTRIn5mno5KTdFEf2ykYfL4CRCU92zhc8ZbtxlMRnRKxiGguwz380if0JXPqy%2B6pV3Ls7tDEo0sOTgHOojX%2BDI3xlVo6LTBPkUWgeqc5jnzKQAQLq5ZFkohkaC6N%2FQIJuGxkG3Dz%2FBSWkYDXThbauPvITe2D6qV2cPBSlR3nhCy2aWJFJQW0kWu7MK8jasC39pevDdCb3Q6dzAfo5E9h3Sg6wrI1YeOiaQD0jmhOsnZ7MPmLuMAGOqUBKkk%2FyNFCrs9seyIp1r0BhsGZw45SKlpZMimLkVd%2BIgNxFsWyK2hCubJ%2F9DNHvnIM565N2ARCqpa%2BKq2UfVFLFZBRlTVpVGP7wOPVoR4W%2FlCi4yiE9KA7htLPVw496gnQRUTS%2BU8Hf6tzPIcx1YQcUBhOcba9PdHXVvmiyvd44H8Qr3RsnbvMtGlxfoGUhTrR5791y9%2FHGv8hhTcdIF89zmips8BY&X-Amz-Signature=d99dce79988773f17f0647536da85b41f3b1d8b435306bbc2e4c1cc4c57d1bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KLV4P3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpBejgO9GKqUq2pLL9sU%2BFULPSKNG9u3UpRHXY1qzT5AiEA9qRNGpYTF6EV%2BvclHGKPtv4Cp15UylbC2enP5cYyr6oq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAYGfNMo16HSnQ5dMyrcAzSitErTkYXzclgiFMBqS0DOxYjgxqOwxaVbLCq%2FUFEDgaeoMoXvSF7lnUcpuXbibx3umFqKWS6xA8Wjl4d0tsbNHnd%2Fhg1tpzfrg2Zzj1TtGnCpsjEvZanw9Yq18WVCcL4rtGb5A%2B3pld7uKj%2F8KyhaxVLVU7gVn%2B1CL3Oyvg0gyAfEl9lUxffxxgeHKE3lkS8AyXvFGEdHsmBYaKSCVOKpYmmimZuZITQO2FhzHZPWYd8Qtv5YUKVNns%2FwgwjSFhqiTHFThOVv2%2BoUQ79thAavrEpfaqcAZfkY9RGkEjL%2BI8uasLkrMGqb0X0jpugGJN9KOossgGzeJh9dbUr6DIpMN7F%2BNJ%2BRh7F%2FsevSdQEfsJAVDF27G0h75SgrFf9Nh0VxZqPk8htNte32mTRIn5mno5KTdFEf2ykYfL4CRCU92zhc8ZbtxlMRnRKxiGguwz380if0JXPqy%2B6pV3Ls7tDEo0sOTgHOojX%2BDI3xlVo6LTBPkUWgeqc5jnzKQAQLq5ZFkohkaC6N%2FQIJuGxkG3Dz%2FBSWkYDXThbauPvITe2D6qV2cPBSlR3nhCy2aWJFJQW0kWu7MK8jasC39pevDdCb3Q6dzAfo5E9h3Sg6wrI1YeOiaQD0jmhOsnZ7MPmLuMAGOqUBKkk%2FyNFCrs9seyIp1r0BhsGZw45SKlpZMimLkVd%2BIgNxFsWyK2hCubJ%2F9DNHvnIM565N2ARCqpa%2BKq2UfVFLFZBRlTVpVGP7wOPVoR4W%2FlCi4yiE9KA7htLPVw496gnQRUTS%2BU8Hf6tzPIcx1YQcUBhOcba9PdHXVvmiyvd44H8Qr3RsnbvMtGlxfoGUhTrR5791y9%2FHGv8hhTcdIF89zmips8BY&X-Amz-Signature=3327a9c5c9a98758460fce696a9fcd1dc9b2e73b827e422de7ee7cd40530812f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVTSSCT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC%2Feg604zC6bcoi89H%2FZeSBsli%2F%2BUeUd77pN8ub3CQFAiEA6gRSx%2BPy1YONHldqqjk8m9xTV2H2mxidZPJQ2NYTFDIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKTa2uFEZoKSOCHsKircA%2BJ9LWpkF%2BFnOAY%2FSD8uHB99IJ8RANNjtsrTh7HrPgXWwDfkEU4pAD4desFqY4iU8keTWSytW52EkcvqQAp0gr8BKqmN%2BtYR3ECCtpYzk%2FECJaGkpKmMydc7gm8pnuzkdnQDtWOlt9YdSAehRKyxYLJMHvH187NM1qj3tZkhUDLCdqKtvJ2IVFkqm3nBenzY39JMr0KQ50EsJCNIytYF2wvVzSz1%2B9hmY16wmX9fRqRhF2q4cV8ZyYKdr6zK50bqqBvxkvGw5Gc9RSr1ifmyG4FP7w7i2SNzME2P3jvnmcHZrmGVdYlPkaQRwOZhKqnddrICocnNHfN8Rj%2FzClrs3z7QeStcy9o53w3kJPAg1zmCKw046pfxsfFv6yBXgMjNjBkJ4wS0L%2FDxT8jh5e6pw6hpXcRYfVM6nRUlQ2NDLvrL9N3foK%2F7AzIu8%2BiegyY7b5JSvZ7nQ%2F4ugSa2%2FVPKWdTBIwY7VX13uCNxdfU1G9FwWbwAFyKFOqhEPRUFXU8x%2BquVtahXFq5wpurntJXATxfO21kljMKed0Ns8m9q%2FL3QXH91W1up2kaj1EHY7pY%2BVH%2Fc9gWMp%2FXCvXtgIJakpFRoQZ65FrIrXMhB7hH%2BnygcTs6lQrlVxhQgoGTyMJOMuMAGOqUBcCqf1jTuRIfeiYzYKV0Xz8fcKcIBCPkj85U029EwGwwXlr%2BlkQcZ0At8vwlASqR4ToAMD29xlJESIpltClLcrJIrEpAPRgrxHtHcZjO44YO%2FOuyvDVJ6atKBvKZwhpSYxu9WkbpEhJiiChusoZ%2Bg14FvaqcBlarVuZpiSFlt1%2BV49FAhtFUFXcBRPlrp7h3kkRub2c1I0iWD%2FJpsco96O%2FwfUaSy&X-Amz-Signature=8fae649faaa633fcf1616e4cf8a879f7e66eb6d8e18f79802a2bdbc30478ea64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZCNIU2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYVb6dwfdnPP0DufIH1YVfd6JwNZK%2F4MjSGWnfTr9nOAiB%2BvckjgilKLR36QRpvSJNHAKDkcOi3Zku9V%2BsN2BBUoCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxD6JsioiCed8W%2FHiKtwDYL3mdvMvj1BDl392WuSSCyALrUAWb4Mulq6Ge0KCCG2lmhlz6o8uuu84tl7o7vFfVFgVsABr2GieKN%2F79Bv%2FXBIAY1nBM%2FjNHgRkP62%2F2Xn4oceftPRJ9W9SqgSSJ5tbP4DG1JJO5%2B%2F4qNDJ5xIWYioEjV4tpxLG0wVr4xZFeIgdKJUGReWj%2Fi05HSB8X%2BlRyg8M%2BiZ1U4fhtU9DOXnhYubHIZt5T0fFa7davYs5tfGZFimHzV%2FhgiM1TepeYEvYeMkeTr44tihm1%2F8KIWkhY0rPZP%2FeMjtCLz%2FLhoNbGeUl0yZIk2FcVZ2vOmutOZvoLUMonkQMS3U86dnT4W4yc1lkryHJiMAqXBRmPxv4OJfkEkC8w0EV%2FZpWquVNG4%2FiH%2BSEksg57Adol%2BKvD97T94w%2FxBfMo6lfGkbspp1J74jYL%2FLcWGdxLv20n7n%2BzbIkn7cnX%2BYdUiNs2Sgzzk4HaSGl2UINJZ6quKMlYI0eZXbAeUc7XwehaLl5Kajn5d6B6do3kqtG8%2BRvV2AC%2FRdunN9Yy%2BzE0RW6LiFEKECIgXA1Stn0TYwye6uodB38ow1lGJLgdWV4%2F%2F3YRSJsZQGJhIRUiOpQs3krThcYUDsVT3lbRflXSeXS0x4e8AEw%2FYu4wAY6pgEbQTrPNS%2BbEY4G0NPpxyh0SOFCEy7Qss8TsqcRcjjdXwIS5SVcMucQKSS%2FSzoY5I7S%2Fr3r9ivknHHYx2ilN8wsChdyAdvsdfIbADOI%2FuFqecgEAv%2BBeYyn%2F8VkhiXee48FA%2FFZtuXC3gsyEBf9sWJ7rX7hVRF%2Fr9ohL7ytk31z2VpZTyboScgk19qJbrJjO3aik3UyXW%2F6EV9UKApEnaT%2FZ6lhBUkg&X-Amz-Signature=f0f1fe467c77146e80bebc40a945c68928915600e84ac8da99f2822e7a9ecbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KLV4P3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpBejgO9GKqUq2pLL9sU%2BFULPSKNG9u3UpRHXY1qzT5AiEA9qRNGpYTF6EV%2BvclHGKPtv4Cp15UylbC2enP5cYyr6oq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAYGfNMo16HSnQ5dMyrcAzSitErTkYXzclgiFMBqS0DOxYjgxqOwxaVbLCq%2FUFEDgaeoMoXvSF7lnUcpuXbibx3umFqKWS6xA8Wjl4d0tsbNHnd%2Fhg1tpzfrg2Zzj1TtGnCpsjEvZanw9Yq18WVCcL4rtGb5A%2B3pld7uKj%2F8KyhaxVLVU7gVn%2B1CL3Oyvg0gyAfEl9lUxffxxgeHKE3lkS8AyXvFGEdHsmBYaKSCVOKpYmmimZuZITQO2FhzHZPWYd8Qtv5YUKVNns%2FwgwjSFhqiTHFThOVv2%2BoUQ79thAavrEpfaqcAZfkY9RGkEjL%2BI8uasLkrMGqb0X0jpugGJN9KOossgGzeJh9dbUr6DIpMN7F%2BNJ%2BRh7F%2FsevSdQEfsJAVDF27G0h75SgrFf9Nh0VxZqPk8htNte32mTRIn5mno5KTdFEf2ykYfL4CRCU92zhc8ZbtxlMRnRKxiGguwz380if0JXPqy%2B6pV3Ls7tDEo0sOTgHOojX%2BDI3xlVo6LTBPkUWgeqc5jnzKQAQLq5ZFkohkaC6N%2FQIJuGxkG3Dz%2FBSWkYDXThbauPvITe2D6qV2cPBSlR3nhCy2aWJFJQW0kWu7MK8jasC39pevDdCb3Q6dzAfo5E9h3Sg6wrI1YeOiaQD0jmhOsnZ7MPmLuMAGOqUBKkk%2FyNFCrs9seyIp1r0BhsGZw45SKlpZMimLkVd%2BIgNxFsWyK2hCubJ%2F9DNHvnIM565N2ARCqpa%2BKq2UfVFLFZBRlTVpVGP7wOPVoR4W%2FlCi4yiE9KA7htLPVw496gnQRUTS%2BU8Hf6tzPIcx1YQcUBhOcba9PdHXVvmiyvd44H8Qr3RsnbvMtGlxfoGUhTrR5791y9%2FHGv8hhTcdIF89zmips8BY&X-Amz-Signature=96052a80f8409328f100b416c00be8b37df888a54887701a35bcaf08a0a1d51b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
