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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHY4CB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVn92pitKqlXFKRbkhZePNFnbZSWWvg4Y7KrsNH8e%2BNAIgPkro3eSbhZVtPGE97QIM5YfxFek%2FjAWRb9rlGhq5exgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnr4AhFVw9CaXrhsircA3%2ByUFBXNpsO6tAJ%2FA%2Fmu75z4wvq2fD48rZdwhSpV4exOlBlgN6HTJklNZy4ffo9AaBQHa7yixoe3yPn41NlH7%2B8%2BvQRQUYgSzakImlVG9uWB0FlX%2FMtf1mtL0FXN7pcTrTlsMJLoMkA7bQOfo3njWt54KT%2Bmv5J6N9IhRHzr8II3NBAAkQrNuZRwrJKOuyuWVfA%2B2xBAEUmGA87NA0efaXk%2FfvjOof3DBgk5V4kiSvucaxfP7SGhcwfNilNPLqHGTgFEOGrBqyrJ7Mf3U%2ForiGijWyxeIgEowNDayo3nNdEproYAjeHnWMq0ePfB7PRWja7SnxW7Yv37I4Jm8%2BuByXuKCEF6bfsXLM%2Fu7%2BNO3sSAeC5KvnetezINiSMBsaZ%2FMaFbv63HvfUOkGsQsFUpZ%2BqkAVNQ1WW0VrLahF%2BuTYDabyg1fe2rlyJla9fL%2Bz2h%2Fe09hGwJJ3dqEEPoN%2F9s4oYCvLSZ06gxmXggRrVNO8r2EaR0lCSHCFHxpuU7%2BVkL%2Fk2IdJurvaBnMNcQUVnMMtErKR6OsnB5ol6mezW8sLD%2Fss6Tk5pQAggcZyhn0m15NImMMvyUPDjLMUp0A4%2FQOKicYNUu5QLyVCnINV2cJ%2BrnycgcM8BEfGUNhCsMPeo6b0GOqUBajyqFe0%2Bd9bFHqFA2HKYffjJNHz%2Fj%2BwdabtBRlQz%2FFv%2F6lFGGd%2FunWbhCscaPv%2F0tpqCaelSToBlisDQCfH1Z%2BkAEet2AYgcVTR0f2E%2BZVecusmeP%2Bm0Aod9HYrKsc9RDoepxslHVLoxE2IDgalW6kzSNnY4%2BhMbkqYqNgIyXvOjDhw9Df3GAHyvSvOTivDwmFySA0s6q0JXEs5WgZubxiMvkj2o&X-Amz-Signature=a1a0007461bc8c46ff16d67181c7a776d8f78b15cb9fe24541b4bbcabdf1d373&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHY4CB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVn92pitKqlXFKRbkhZePNFnbZSWWvg4Y7KrsNH8e%2BNAIgPkro3eSbhZVtPGE97QIM5YfxFek%2FjAWRb9rlGhq5exgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnr4AhFVw9CaXrhsircA3%2ByUFBXNpsO6tAJ%2FA%2Fmu75z4wvq2fD48rZdwhSpV4exOlBlgN6HTJklNZy4ffo9AaBQHa7yixoe3yPn41NlH7%2B8%2BvQRQUYgSzakImlVG9uWB0FlX%2FMtf1mtL0FXN7pcTrTlsMJLoMkA7bQOfo3njWt54KT%2Bmv5J6N9IhRHzr8II3NBAAkQrNuZRwrJKOuyuWVfA%2B2xBAEUmGA87NA0efaXk%2FfvjOof3DBgk5V4kiSvucaxfP7SGhcwfNilNPLqHGTgFEOGrBqyrJ7Mf3U%2ForiGijWyxeIgEowNDayo3nNdEproYAjeHnWMq0ePfB7PRWja7SnxW7Yv37I4Jm8%2BuByXuKCEF6bfsXLM%2Fu7%2BNO3sSAeC5KvnetezINiSMBsaZ%2FMaFbv63HvfUOkGsQsFUpZ%2BqkAVNQ1WW0VrLahF%2BuTYDabyg1fe2rlyJla9fL%2Bz2h%2Fe09hGwJJ3dqEEPoN%2F9s4oYCvLSZ06gxmXggRrVNO8r2EaR0lCSHCFHxpuU7%2BVkL%2Fk2IdJurvaBnMNcQUVnMMtErKR6OsnB5ol6mezW8sLD%2Fss6Tk5pQAggcZyhn0m15NImMMvyUPDjLMUp0A4%2FQOKicYNUu5QLyVCnINV2cJ%2BrnycgcM8BEfGUNhCsMPeo6b0GOqUBajyqFe0%2Bd9bFHqFA2HKYffjJNHz%2Fj%2BwdabtBRlQz%2FFv%2F6lFGGd%2FunWbhCscaPv%2F0tpqCaelSToBlisDQCfH1Z%2BkAEet2AYgcVTR0f2E%2BZVecusmeP%2Bm0Aod9HYrKsc9RDoepxslHVLoxE2IDgalW6kzSNnY4%2BhMbkqYqNgIyXvOjDhw9Df3GAHyvSvOTivDwmFySA0s6q0JXEs5WgZubxiMvkj2o&X-Amz-Signature=1df88c35594ea4a6e5f6b9c83a1d3a545a8f61c23af87b30793db77809cf5eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6T3SM2V%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAySmWJVcDORU5kfxrDvC5UBACF%2BQXBvYRhKyMrW3L9gIgMa9MmZ%2B9iAPMCYAkbFrUUqIxqGe4yBYOBop8gTPxYqwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJn%2BmS2rlpFh%2F4W0sircA97gC0wrFdhvErMpd%2F1443c%2BmqxrjmNCT803fhQr1053xiwqD4cdVUAurzXr8aXGJRhoIjSBySZkm7a6ZZipAwPa0Tu4kRYs0pHwmImOtwX7dOEZTEEaKclyQGmbAcTR6Qrkj8BdqP7Syge%2BTM36EzskS6G08Sv%2BrMNM0Ml4cU3ulz8q39Xr6joRi9xyR3Qq4HZwVm1xnkUbx7wSv67%2BLW5N2PUe7NYxKAOkmHvtcznobXCbW776ght5l3vSHu23X31Nct58qkTb7Xdrl0hOYYuyol0d3l%2BQ2oqEknABXaGaQUvs4a50KFDZijyKJspDJa8fgUe16hpeYKahr5Bn7GnlwqAixKr4Lj2Spzy5ed3Y9D56SfmJxSj4vylUWnUxyoQXB8w8%2B73YTsPxVr%2BbT0iKLmDGuJrLB6ZvF90vU9WPTCDPu0kHDs5Sos53qQEzQ9oKKDwcUGQ55siH95nyn8L0j8wxGudOwsU0DURAR0H4U3N7XlDkvXR4I%2BwUFVIoUj4sN6eTJZ6UkBXMTKVHL8G9D8b2Pm2WxBpV4QMGQilXaBl5q068ed5w%2FY0cTZjRrYTsfV1newvLu94VFjfSoRZ%2BocAjAGrQOLJ5yknxEOQGEa2nKrdkzixGqcGSMLmd6b0GOqUBKt%2Fa9maDBTA0ATbn2f7HZ4Hk8Z5I1zObX5o1SF5iiTExHzn4HwNE8yn9ZGJuVRIkPYiMZTWSVEHcaFT6SnfEBunHyBZdRWf62H6Hk5yQJ53%2Fk%2BTPz2fqTLDWaAFxmHvDBvDKnREHSAC82kIUZVJMcLy0X4MctQSC564f6piInhorr%2BDYYcph5VPx9H%2FE%2F34KVmu%2B8YfJYSIZ235fYaXOhORB7rFm&X-Amz-Signature=1706441b57f69d974b858161be56699eb0fc2461eefdfce32c7bf8bae0145723&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSHH5IQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpI2GqjjgwDTOTuvl7HudogBIMPwzshx4HC%2BCw8aBQGQIgOA9XGVmi%2B7oaKzRJz%2B2sBc4440J7fztNhBQAIbDMg8UqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4xVjTZXAPL6BvK8CrcAxQ5pUDhE6QkwsHIhb3W2SptNLRKGRpM6XFLryeCrZ19Kxq%2FXF6MxbJm%2B0pYtFBFTLWN0ACXV%2BOcCU6B4rsLCOcYd88XjN512T3u3Eldkbile5mkWjOKvMPJGDbNn%2FXP4kXNiJgbS6fbnNMUmun28FX9Jsshp048DxkoYY1Ry4r0KfZuu6QHzVIou1EANKt6yFPB%2F3l%2BkYdQNmJz70ygccQjI9Gm%2F%2B4X682cndRZKBiICoBgdyvLWadO8ZF6K5RymCw7zvSd5DWL2DMoU%2FdPnXjmTokRrSjFOqcXndHNbMKBinVLKs1g%2F80LWXMrugknYsFAxBJwK%2F3Yf8s53Y7%2BXfO0i%2BQURWTn9d8q7G6zCxvfRQMa2mmmifqZoV%2BRu5j8pB8GczXey%2Fn8T%2BThY2qAdRnNLHhEfegJp8%2Bkh4SbiKcgezhryPY3mzHhJRIS8ZWaLthQe8BuwNCzw64WwTKLoHc1A8UA87uyMzL%2BsquUz3Crw1dWQ8SRAjhCaNyHesBYUv%2BuCHxOWU40Z%2FxcJJPUk8W0PGelay7tazstjNozEzSTGq%2F2zLbUcHW0v4jlfCNNvIJmp6ptm7NcnboOmqUtlQ1RppISsWoRDLprjy80honRKf0rBpukDn%2FrPEfkMMfj6b0GOqUBkgJfAHo6VQu%2BrBhA%2BrrS96I%2B6xxBMouzB%2Fs1eTytgLdLQFa6V%2Fj0cQnp65OLgZ6s0%2BlM4RMs%2FgO64HO3RbN5Rafl0yDhYIq8wGRfFVz09Ad%2FZ3tuj8YPOJ%2FYLA1ylyWcpve5reBYF7c%2F6YM42s9FiwOvzChh%2BqvhLEq%2BCy%2B3IZJ6su9r61Xq%2BHlp44EFYANWn9GR4uBSbyMfJf5BkiA8qfwIw%2FVu&X-Amz-Signature=ef91d3e41ca76f25aa4c9959c0d1c16e0673ff4eae1050bae072f4bdfe6db2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHY4CB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVn92pitKqlXFKRbkhZePNFnbZSWWvg4Y7KrsNH8e%2BNAIgPkro3eSbhZVtPGE97QIM5YfxFek%2FjAWRb9rlGhq5exgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnr4AhFVw9CaXrhsircA3%2ByUFBXNpsO6tAJ%2FA%2Fmu75z4wvq2fD48rZdwhSpV4exOlBlgN6HTJklNZy4ffo9AaBQHa7yixoe3yPn41NlH7%2B8%2BvQRQUYgSzakImlVG9uWB0FlX%2FMtf1mtL0FXN7pcTrTlsMJLoMkA7bQOfo3njWt54KT%2Bmv5J6N9IhRHzr8II3NBAAkQrNuZRwrJKOuyuWVfA%2B2xBAEUmGA87NA0efaXk%2FfvjOof3DBgk5V4kiSvucaxfP7SGhcwfNilNPLqHGTgFEOGrBqyrJ7Mf3U%2ForiGijWyxeIgEowNDayo3nNdEproYAjeHnWMq0ePfB7PRWja7SnxW7Yv37I4Jm8%2BuByXuKCEF6bfsXLM%2Fu7%2BNO3sSAeC5KvnetezINiSMBsaZ%2FMaFbv63HvfUOkGsQsFUpZ%2BqkAVNQ1WW0VrLahF%2BuTYDabyg1fe2rlyJla9fL%2Bz2h%2Fe09hGwJJ3dqEEPoN%2F9s4oYCvLSZ06gxmXggRrVNO8r2EaR0lCSHCFHxpuU7%2BVkL%2Fk2IdJurvaBnMNcQUVnMMtErKR6OsnB5ol6mezW8sLD%2Fss6Tk5pQAggcZyhn0m15NImMMvyUPDjLMUp0A4%2FQOKicYNUu5QLyVCnINV2cJ%2BrnycgcM8BEfGUNhCsMPeo6b0GOqUBajyqFe0%2Bd9bFHqFA2HKYffjJNHz%2Fj%2BwdabtBRlQz%2FFv%2F6lFGGd%2FunWbhCscaPv%2F0tpqCaelSToBlisDQCfH1Z%2BkAEet2AYgcVTR0f2E%2BZVecusmeP%2Bm0Aod9HYrKsc9RDoepxslHVLoxE2IDgalW6kzSNnY4%2BhMbkqYqNgIyXvOjDhw9Df3GAHyvSvOTivDwmFySA0s6q0JXEs5WgZubxiMvkj2o&X-Amz-Signature=e34e385bd7beec4549cde2b28ab4c214891dd3b6a899f4c21b321c5afc608163&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
