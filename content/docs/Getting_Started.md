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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPXQVOJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD0%2BbOAQmaR%2BPjFx4QyRYYLLZ7NZwX5EcfcIS42Wa74DgIgLTlBxCjuHwAZVklg04ky8lQ0bDnA12iswzxexJpCiq8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIf3UoxUqL6uN6H7mSrcA%2F2e51O3TI3s91l0JxhzvzOZRc4ccxpJXwAbK9vfvwB9gdrIoRfygGrDBvQ8iV5r9u2uoaLEj3phEaPzGmVnT1Z3TrI6IcMSpw6iPuU%2F30oAle22EVOGWDqWdFytLBfwudFIDBMK46Tz2iSFaN0IKoJI6SAJC3Z9oeoHtmcDhZiS%2B%2BZi81ouPcFmUi3KKG32aY6kX8tlJhCL1sZn6%2FbPzv5ZjJTEvWHSc9EreIAPgare8kQBtfqf9XRS2Y8hqMINKOR9xAgJi01TCtY1giLZsV7dBuxoyeJ8fVXybAS3JdkTDmkCKRGBlrslZ75sr%2FB1p1vVl2e2WK%2FGbVjrIaRDP6KhcHOxnRxVzoAjiiHKbR7qZBSeoVvPDXpHSKQ9klYfcFeKoGi6Eyz4t%2F%2FB1BtVcA68rEEHg6LCBJZu2COGpsNZWcqvPYBTcYagxd07cNVmUBogCyaqnpgbd3ZV%2FjreiBc0vhUEcXa9Q6IM0EcsljR3Ey9LOF5GqfeVKTEuB4OW9%2Fdo3XWcFZu6omt4yGsMtEb57ui6unWoGtWeKK%2BmK8ozNgiW8CO%2B1nkmBCK%2FZ7NnXVIKZv6gyZ4q%2FaBwY1GRGPX7UPrFGscFMMxuIbUcW68ywim56%2FjVs5LHfGJ2MIG1n78GOqUB67AvgYp%2BIHw8CjRWy6D4lWdHiASVaPdLZ6K%2Fx%2FGe1Y%2FSrlbbadCI3Zxk02sMMdBPY6VpMUH05iUtV4yzscSBwmzW3RoqKWKNEPKgfsC4uKKb5COeUq8euACUcuH12CnQpBfkt4H2VvrvbQOqw2sjeggo0rLPPAgoqQ%2FJcjqhIKQ7fKj4K6%2FGsGDWHa56%2FwSzvDhbA9%2BWcOlyIIo8EWkdt0zgdZ84&X-Amz-Signature=7caf1b24107cb0f627ba25f980817123af96d0493a2e7c61b86840c59b07da9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPXQVOJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD0%2BbOAQmaR%2BPjFx4QyRYYLLZ7NZwX5EcfcIS42Wa74DgIgLTlBxCjuHwAZVklg04ky8lQ0bDnA12iswzxexJpCiq8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIf3UoxUqL6uN6H7mSrcA%2F2e51O3TI3s91l0JxhzvzOZRc4ccxpJXwAbK9vfvwB9gdrIoRfygGrDBvQ8iV5r9u2uoaLEj3phEaPzGmVnT1Z3TrI6IcMSpw6iPuU%2F30oAle22EVOGWDqWdFytLBfwudFIDBMK46Tz2iSFaN0IKoJI6SAJC3Z9oeoHtmcDhZiS%2B%2BZi81ouPcFmUi3KKG32aY6kX8tlJhCL1sZn6%2FbPzv5ZjJTEvWHSc9EreIAPgare8kQBtfqf9XRS2Y8hqMINKOR9xAgJi01TCtY1giLZsV7dBuxoyeJ8fVXybAS3JdkTDmkCKRGBlrslZ75sr%2FB1p1vVl2e2WK%2FGbVjrIaRDP6KhcHOxnRxVzoAjiiHKbR7qZBSeoVvPDXpHSKQ9klYfcFeKoGi6Eyz4t%2F%2FB1BtVcA68rEEHg6LCBJZu2COGpsNZWcqvPYBTcYagxd07cNVmUBogCyaqnpgbd3ZV%2FjreiBc0vhUEcXa9Q6IM0EcsljR3Ey9LOF5GqfeVKTEuB4OW9%2Fdo3XWcFZu6omt4yGsMtEb57ui6unWoGtWeKK%2BmK8ozNgiW8CO%2B1nkmBCK%2FZ7NnXVIKZv6gyZ4q%2FaBwY1GRGPX7UPrFGscFMMxuIbUcW68ywim56%2FjVs5LHfGJ2MIG1n78GOqUB67AvgYp%2BIHw8CjRWy6D4lWdHiASVaPdLZ6K%2Fx%2FGe1Y%2FSrlbbadCI3Zxk02sMMdBPY6VpMUH05iUtV4yzscSBwmzW3RoqKWKNEPKgfsC4uKKb5COeUq8euACUcuH12CnQpBfkt4H2VvrvbQOqw2sjeggo0rLPPAgoqQ%2FJcjqhIKQ7fKj4K6%2FGsGDWHa56%2FwSzvDhbA9%2BWcOlyIIo8EWkdt0zgdZ84&X-Amz-Signature=935c0dc231c3f4f5f224bb12a56e87eadc9d257de277adc74f04ec6a988935c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCA22RZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDfA44JdQb08RzL%2FH7jC8ffD9X9plBOZ%2FLaSOIABATj3wIhAK3g%2B1vX09%2FogChqe1MssqVAbPMBrOI%2F8fn1HT75RXIzKv8DCHUQABoMNjM3NDIzMTgzODA1IgwpgcBx51Bha9109yEq3ANEJQaOCA0EizvkVuZGK7kPh5uT5gRABRKcLw9ai9X%2FFfhtVxeKF669Ne0rBtv0MFQqrNBUG8%2BNlCE8leNNUlcx1HrVvtRjrgSehpTOqs3BnapP0giu6vTQzkinqVF1a87%2BCAjaq3jvWGTvYMm8EsO2d4GIfXEMdTIVBKvypGYuWQOiDqUuhWWseavvqONnb4VG%2Bxg%2FQ5oe6AHc0pr8JXKvr5Y5SLueZ4fB55gXzlDNgIbY0gVlKCLSuEzy5Ae0xgJY3LinR04mfM3l1asjeCJHG1VieTQbFdaBjxmZwg80cMKCxaMlGsfmizqdgdftb2QeOCjeA%2BeCyuiAzfBQYwwdZ%2F8GAN2PZW9UvfC1nxRORt30QQcrmbUM%2BlA9Mt%2BBf0O7p9hYXO2b1Oqs1wyR26lGhFQE5ZRv6rb15fIZnc94GQAHTOU0Sp8zvxRRdyO8iKNseEcjq7Ovq1Jrt22CU2fBt4uVzPp3BuBgFuSJCSs1j5lwO6qioX2fiiJkZ5csf3hcTqGyMxVdm6nXSGXolMcKgq%2BKhk6YWPd%2B8tcxiJMKari%2FfteCNi2XKJzRG70sW7aa6%2BNEXoR%2BduVOMv5l0DqRHIszn36sxFMF680ucZC1OHe4WsbRyBVorUCJNDD2tJ%2B%2FBjqkASNecgYmbmXfsQ573IHaLsr94ABvO337%2FEubtD59Es%2Fr84A3YcmQ%2F2KGP%2FlGkjFqrbvtFhsX4ikVOUu%2BE1DoLxTfof4i4WXeHNICgtJIOcLAGy5ICaLHX8MBsFk3y5YiPJwprq911ry4H5KqGhwGunOGAHuRDr6OCtd3yUFIrpBnECQhYFgRv5YgUPIJ9CdTLqaitEUnuI2YZ%2Bq5qTGve%2FpAx%2FLX&X-Amz-Signature=5cafc71f22e599a3f4f84698e871e553d095eb86671a8746d14d297caf751c63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTP3ED6F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCiygmysEeZ3fYJAyUCBURyZTP4T9D6hDjzI61LEzy0EAIgBfM35BLxmwBnBJZB6l4%2BFswUnckcA69GPEtVT63B4%2FEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGBfsafnjjnbPuQ4DCrcA3N6FkqS9x1aSgAfNrgohvxLR39v%2Bv5NYjXtnG%2Fwls%2B%2FVP65U4saIDmXKAQVGrLsogwCI%2BsbcExIpuazrbgYejklITyS%2Fu1Au7Ab7AOoL5NdGO%2Fro0Bq%2BhZD9Vj2kqs4V76UQNsKRLFBTc9rwpYktUHX5l0pMwFJadRYx%2F2jeuszGv7iKZht0R%2BEppi9L%2F37mcQqUQAEauR%2BAuxEmruc4DsCTStOChvAJgEfZq7Y%2FDJDigUBCPT%2Bmw%2BUsILqzigBpRh4b%2Fbio1sm2CudoVEXnjruO7Rv4yOtZxB3fqRijmwkzbHHO2uABFuAZLh2dpMDI340u%2FEv46HjbBZbF2D833JRzTeQxL3naYWd6eWt3vH5G3hlqQIdYnlSFXYBE%2Fk5NqcFF5Ay%2BJJbS2pWl6Y8u%2FCc28Z6PyxD5MPwteF4ArOM8tck3UN1SjOjlMu7Ib8GVNaN4TpwYJ%2FWIXaSUHIKI1o%2BMO%2BXLamGF6T%2BvVZa6nPGxrmVlOW%2BkfFDJxMpkE4jDITU710sY%2BujmwW7GaYTJSBHZnAORgLPJfcZCu%2F33ZXscpfVnneToG2bfTvT6c0goD3RxA0UgvHb7wd5Smb6o9tZ8cLnYZKvk0qrhi8WaE%2FJ4JNUN%2B0TrpnfCkldMPW0n78GOqUBKY9wIhQl4O5mWauUFOd9mr%2FzRWTJ7HQgaYbJ3QcVhiVAZ2ZQPBCQB8pCobNYV3vYxzJJBNK16eWeuvD%2BgM4s4jXimSxuwFj34xgwHkTpNs7VpegYwf8AXrSruZRildgaLyi3gMSWr56raWtx1wWFuAQr1neeGPpeNSrnf8pzQazlKeeXRDKDa4g3kNt%2FSP57kyjHqkjp8Fx3ewTDki8DF8Ujp6G4&X-Amz-Signature=8d7668fd0933b25cbe855c906d1b061967138443252ef37957862a63fb973cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPXQVOJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD0%2BbOAQmaR%2BPjFx4QyRYYLLZ7NZwX5EcfcIS42Wa74DgIgLTlBxCjuHwAZVklg04ky8lQ0bDnA12iswzxexJpCiq8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIf3UoxUqL6uN6H7mSrcA%2F2e51O3TI3s91l0JxhzvzOZRc4ccxpJXwAbK9vfvwB9gdrIoRfygGrDBvQ8iV5r9u2uoaLEj3phEaPzGmVnT1Z3TrI6IcMSpw6iPuU%2F30oAle22EVOGWDqWdFytLBfwudFIDBMK46Tz2iSFaN0IKoJI6SAJC3Z9oeoHtmcDhZiS%2B%2BZi81ouPcFmUi3KKG32aY6kX8tlJhCL1sZn6%2FbPzv5ZjJTEvWHSc9EreIAPgare8kQBtfqf9XRS2Y8hqMINKOR9xAgJi01TCtY1giLZsV7dBuxoyeJ8fVXybAS3JdkTDmkCKRGBlrslZ75sr%2FB1p1vVl2e2WK%2FGbVjrIaRDP6KhcHOxnRxVzoAjiiHKbR7qZBSeoVvPDXpHSKQ9klYfcFeKoGi6Eyz4t%2F%2FB1BtVcA68rEEHg6LCBJZu2COGpsNZWcqvPYBTcYagxd07cNVmUBogCyaqnpgbd3ZV%2FjreiBc0vhUEcXa9Q6IM0EcsljR3Ey9LOF5GqfeVKTEuB4OW9%2Fdo3XWcFZu6omt4yGsMtEb57ui6unWoGtWeKK%2BmK8ozNgiW8CO%2B1nkmBCK%2FZ7NnXVIKZv6gyZ4q%2FaBwY1GRGPX7UPrFGscFMMxuIbUcW68ywim56%2FjVs5LHfGJ2MIG1n78GOqUB67AvgYp%2BIHw8CjRWy6D4lWdHiASVaPdLZ6K%2Fx%2FGe1Y%2FSrlbbadCI3Zxk02sMMdBPY6VpMUH05iUtV4yzscSBwmzW3RoqKWKNEPKgfsC4uKKb5COeUq8euACUcuH12CnQpBfkt4H2VvrvbQOqw2sjeggo0rLPPAgoqQ%2FJcjqhIKQ7fKj4K6%2FGsGDWHa56%2FwSzvDhbA9%2BWcOlyIIo8EWkdt0zgdZ84&X-Amz-Signature=2c7113ffc26d0204b42690ba6bf9d923f7339fccdad610efe6113b1f1acba250&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
