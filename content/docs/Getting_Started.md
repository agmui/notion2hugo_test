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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NT3KY5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACigedbzo5PL8C6xmjlo9DqTBXbPJ2z9xhiGDbbd1YtAiBy6NZ8iKYDrPkLkwE8buSOeKpWuvNJON68Oiaj9%2F2DoSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMC1lY6DfsdPef0iH1KtwDLn8802MZmI5TEcR2uqPI8nguY4uoQvW1bQST1zZG7rCaLDlf77P8Rogm%2FYwlR3j07E%2BnzQnaG3t6Y6W6ikq9w9n6C6mcdXiFsd7ewkOtAfTSskhwrADHQMO6J%2BeeIZLed2irFxTff6Hq%2B%2FP8yk445Qv6%2FaoZmQQouH%2Bv%2FB5Y%2FXP8xGGzhMDF66mZMZURvU8nCuOXG1%2ByShhZQ6A6yw0w7n%2BTR46DgGBJYLwtsdFH165jOjNcn4PBfJ%2FcmCAUjN36F8IJin1GBNd5nKGSYVBj1rvn0FxjDCGcWE0vMN2uz6rJfOlwHAP97Rt3%2FdWFL20L0CoKT7MyNLXU7QIa4x1ikCnMSntchB69xDZs1OBzkT9BBS4a4HK2Tfm5WrLM01dTehpoFRVyUDvoKOTI%2FLVOntiJNjlzYlucIcSAc7sXVSz%2FjTbdaoblYgYINJwGpkF6HlF%2FteFLIbq4B%2BwmgFKueSth3YwvTVgcq1J6ytcIxdzEq2SSIxFgOv1fLZOrfVgTtwcqWGfMop0isBgPj4bVL%2F4nwIui8Uodv4N1fzhLdIYK%2Fp2cspwjXDHlHKfYW4g9xmNBwiUHyURgj67kqbB1sa0m5LT%2BHO3jX%2Bg1ZcqPuLey4fwrM6TzVvQ21i0w9%2FDrvQY6pgFOmHl4pneJIhw8TUeLSG8%2FoRfLjv915RbQxhbJ904y94wC3k3T4KA06MG%2FYvSKr7Pn7ATXs1eKfNMlKPXFJV9o6dR02LjJSbQk51d2lwTdk%2BPk%2FhVFRV5swyuNqf6cdnQRlKPFft6To8BIND317CROnuPjdkx%2BdT%2FiSCDGUwvGR8n9xpUPrCfoZgRhhP9qJIYtgasqQtG3icwfpxbyJCMtOuEL1I6c&X-Amz-Signature=5e34c69ca27def89e0a5996e340c66d2419fa43e172ae8113c4921a84f8bd216&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NT3KY5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACigedbzo5PL8C6xmjlo9DqTBXbPJ2z9xhiGDbbd1YtAiBy6NZ8iKYDrPkLkwE8buSOeKpWuvNJON68Oiaj9%2F2DoSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMC1lY6DfsdPef0iH1KtwDLn8802MZmI5TEcR2uqPI8nguY4uoQvW1bQST1zZG7rCaLDlf77P8Rogm%2FYwlR3j07E%2BnzQnaG3t6Y6W6ikq9w9n6C6mcdXiFsd7ewkOtAfTSskhwrADHQMO6J%2BeeIZLed2irFxTff6Hq%2B%2FP8yk445Qv6%2FaoZmQQouH%2Bv%2FB5Y%2FXP8xGGzhMDF66mZMZURvU8nCuOXG1%2ByShhZQ6A6yw0w7n%2BTR46DgGBJYLwtsdFH165jOjNcn4PBfJ%2FcmCAUjN36F8IJin1GBNd5nKGSYVBj1rvn0FxjDCGcWE0vMN2uz6rJfOlwHAP97Rt3%2FdWFL20L0CoKT7MyNLXU7QIa4x1ikCnMSntchB69xDZs1OBzkT9BBS4a4HK2Tfm5WrLM01dTehpoFRVyUDvoKOTI%2FLVOntiJNjlzYlucIcSAc7sXVSz%2FjTbdaoblYgYINJwGpkF6HlF%2FteFLIbq4B%2BwmgFKueSth3YwvTVgcq1J6ytcIxdzEq2SSIxFgOv1fLZOrfVgTtwcqWGfMop0isBgPj4bVL%2F4nwIui8Uodv4N1fzhLdIYK%2Fp2cspwjXDHlHKfYW4g9xmNBwiUHyURgj67kqbB1sa0m5LT%2BHO3jX%2Bg1ZcqPuLey4fwrM6TzVvQ21i0w9%2FDrvQY6pgFOmHl4pneJIhw8TUeLSG8%2FoRfLjv915RbQxhbJ904y94wC3k3T4KA06MG%2FYvSKr7Pn7ATXs1eKfNMlKPXFJV9o6dR02LjJSbQk51d2lwTdk%2BPk%2FhVFRV5swyuNqf6cdnQRlKPFft6To8BIND317CROnuPjdkx%2BdT%2FiSCDGUwvGR8n9xpUPrCfoZgRhhP9qJIYtgasqQtG3icwfpxbyJCMtOuEL1I6c&X-Amz-Signature=b688c9bab42f3386dba5d604f01f37551cbc3515625f6ba7bb5208befc23c081&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4JAJ5O%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKC9FieG1afwWPnBu3TxdqXNM9iirVqrX2a4dbpr%2FyHwIhALuYWGLBpPxNBoB6gKkGkxQikQuheSnbYvnbhT7%2By8W3Kv8DCBQQABoMNjM3NDIzMTgzODA1IgxayMiD1FIh18ryq5kq3ANeieUgTK9WPAg3Z7oXz9Vsz2tAW911cM4780MaMAQrWIFKC02e59UIv6Z5S70DtBjoaDX%2FEddjXl9rr0hMrMVmySwzf4k5m17ZfH0MualpLEhWoDhJXiZr06AqX98DhhQKfBz4JGpqL7EkBC4lfBdDJk0UZ4BS3jxZ2PD%2F5gA7%2BJXobZuuQW40%2FEnTMtwKcd%2BqUKvqK6ApypggZuUvRV7aublGFQYog%2FEDQCJiucaLo6fUEuqITRDjhGfUK77UDPLLDnx3fdBs%2FRsoDH4taM9T0zDlCbvJypHZLt1Rx0PcA5VXxE2qUlxYv%2ByAOKgz7ukG8%2FUuNhaOZf%2FA1fdEz%2FY0XGkJqqY7hDDLd2oU58dkmtnA9Y0tp8z3rbR2XK2o2QawH2TvjG6c3TDuDyyAbSauPHDZiFi38dI95K5dL3KvL3bzZ3%2F40C9oNGJ2ZhSczsB5sKfnRzHaXJ%2Fk8HQCEoHUvzgpJcrvJ0wEAtPU6jmPrGRDq2gLiGJALM97vVpjSPYa2uqrmg92GvT6FDshQxxkFmrJsTZwFxCSxXeQpyk0AWznVO97ih%2FxkwUngdBnD8cQaHaP8qfG872tQdCjPMwkT8UACglUAIrBurHErFCGgPf7neURhFu8X5tZ3zD%2F9Ou9BjqkAXqJ2342gbfcyeK2JeB6wJZTQjiLi7KS4h8biCsMSN6tYVNgOojVVyMUbvP58ojcOkGz%2FAHqYqpd%2BlpiZaH%2BHGd6k2HaerqFF6zle1IBQIhoYBKkIZTAiSoglIrz0EgKX0T1mUIXbWPphoi3D1VTMP%2Fjpka%2Faxe6mYElgA3msKNfCuMUEsw%2BdP%2Faa7G9NMEyG3NBchNQ5sJWoAFLsH4WKKjNEMhW&X-Amz-Signature=44b14bdda53ed31d74a72f1d1f1abe2d5a1e64838dfb2ab6cc2a6ac1d5b322d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6BU6F4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO8jRGxAe87Xv7SQ13Vd%2BD6aQfXGjikQYzut25S8H3jgIgJURiHDmFW2W1lhIm2asEl2LtenODgCtbMk6ELq5aGHMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJH6tuvrAC3DE76%2BMircA94i64AdU1XhxS9KhXTidosJJ1rPrxUhz3H5ohewA7p9y04YD3fiLJIz7YgzVSTd%2BUA4kWOD4QlpK07hJfbcHTEQ9edbfxwtljp28x%2FjdZ6vzI8yPEWW8TjpcG3Xu1uQBc8c0wk80t0rob9p8EvbkjVbN7RCFJx0%2FTRIa52VvVMw41tJqDNtWf4NQJdTGCXUNrMsTL1ak%2B%2FePjLXFs2SNFE0Kd78gK0ocpTm2BqdyWTD17HbN%2FtENWvggoWBVh0R2N4TGNbBBMV7Op94qUEPi5jh7bQWc9iurOlPiNaZ7wwfwaudsRBKkPdi%2BdM5EjpEYW4NaqjcPVnjz9yRFFgeBDX4Eck6ZiaiU%2F7X%2FDX3uDc4O8Uo2jtNnavVTuifltHOcyVonryg130cg3ofTK5D5VfMYZPhh%2BH3a%2Frjd9XFMxdXMU3rOA4%2FzA4sEseqUHROnrn2FaTrDg2%2Fh2bVZ2FDHxH1qNygT3zL51RZgG%2BEWYxJNStVXm%2BqNuzDVu8sOoe9ed0S4dpqZYAnlG3m0IjF7lvxXgFqFerl%2BEmvv2XP07VX8rwqKk%2Fmg45VPZS5XDrvjSLGhynFA9HQ44GqFi6SWzlvp36YVzAqjeUu6JYZuIUJvQu09q%2Fr37Gg%2Bnd3MPWT670GOqUBQFPSJ0t5iN8NCHP496rR90%2ForKPr4CoAVTjXQieYYamYGbBhFE48gDc%2FVqCKq7PGjVS1gEx6Wegj04uiuki9wShwldGSp30J99MadavGe4tLx4WDL5xmTP9JB7ZWt8cVG2r%2FV9Q9cxIiaa2bgO%2FNeOXFFGFyiARSXAJBgDb2ukXmIS6NxQiqYPBRUT5QpkNz7l0E7WBRHz%2FZmgsofUFsz1XleXMY&X-Amz-Signature=1e474fa7ff5859ee74281c2f91499f8c2c5c7c8fd67f12b7037d20d48e8d5e14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NT3KY5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACigedbzo5PL8C6xmjlo9DqTBXbPJ2z9xhiGDbbd1YtAiBy6NZ8iKYDrPkLkwE8buSOeKpWuvNJON68Oiaj9%2F2DoSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMC1lY6DfsdPef0iH1KtwDLn8802MZmI5TEcR2uqPI8nguY4uoQvW1bQST1zZG7rCaLDlf77P8Rogm%2FYwlR3j07E%2BnzQnaG3t6Y6W6ikq9w9n6C6mcdXiFsd7ewkOtAfTSskhwrADHQMO6J%2BeeIZLed2irFxTff6Hq%2B%2FP8yk445Qv6%2FaoZmQQouH%2Bv%2FB5Y%2FXP8xGGzhMDF66mZMZURvU8nCuOXG1%2ByShhZQ6A6yw0w7n%2BTR46DgGBJYLwtsdFH165jOjNcn4PBfJ%2FcmCAUjN36F8IJin1GBNd5nKGSYVBj1rvn0FxjDCGcWE0vMN2uz6rJfOlwHAP97Rt3%2FdWFL20L0CoKT7MyNLXU7QIa4x1ikCnMSntchB69xDZs1OBzkT9BBS4a4HK2Tfm5WrLM01dTehpoFRVyUDvoKOTI%2FLVOntiJNjlzYlucIcSAc7sXVSz%2FjTbdaoblYgYINJwGpkF6HlF%2FteFLIbq4B%2BwmgFKueSth3YwvTVgcq1J6ytcIxdzEq2SSIxFgOv1fLZOrfVgTtwcqWGfMop0isBgPj4bVL%2F4nwIui8Uodv4N1fzhLdIYK%2Fp2cspwjXDHlHKfYW4g9xmNBwiUHyURgj67kqbB1sa0m5LT%2BHO3jX%2Bg1ZcqPuLey4fwrM6TzVvQ21i0w9%2FDrvQY6pgFOmHl4pneJIhw8TUeLSG8%2FoRfLjv915RbQxhbJ904y94wC3k3T4KA06MG%2FYvSKr7Pn7ATXs1eKfNMlKPXFJV9o6dR02LjJSbQk51d2lwTdk%2BPk%2FhVFRV5swyuNqf6cdnQRlKPFft6To8BIND317CROnuPjdkx%2BdT%2FiSCDGUwvGR8n9xpUPrCfoZgRhhP9qJIYtgasqQtG3icwfpxbyJCMtOuEL1I6c&X-Amz-Signature=719661a9c6d6f7afa54da12689a4dd5e20941b9cb750986942078f504259c6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
