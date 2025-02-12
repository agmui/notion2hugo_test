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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXI4X5A%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYcoTC%2FwJRU8ecI3M%2BKHrUt0Glj3UbGNY2VOAZgDK2xAiEAyybDmg2Zw2huiepaPaj6va40v5ZyLFBtfueMiRuMI%2FoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BqFBYtDIubTCRs%2BCrcA2w7EdD6TbK3wDYrsn2U3mr7zcFNKfdvyB3zMYvgrQAr872Vp4NAxhxSHZmK87S31rvTeepKsUvsYQk%2B6vue3pbHj2erh%2FQVsGdVLkcSAiyLB4VPWxJ4rRXukKWtcjIeiFtwzRkeBNMJPnSn0mRcH4oFVXi88H2TJ%2BODgaQR7Rjw7lf1Gvipgu%2BJnd3tyvv8pdjlyDhxPDFxkk8d05MKIrN%2Fwhot0lu0EkFxec9wpJO5aUL7lF%2FKbFNEJs4Sim43%2BojrJazNG%2BZwzXBhD%2F3HTsx6RqdHTfAlluy6SReJRbW84VfJqkrhJJDo6FV7TmsgaEqTGGuM0hDq%2BvOg9l72oDv7jfugAr%2Fa3yNkw%2FPf%2FMm8ZCAVsJogxUWO7RzEdfC7Hn9lJzvCGmrV8iKSDElPIyBVc%2BrQ4ew1ojubmVaPMcoQVdeHXsJaK9fpR0zlVg6fA9MsdgjswnDC1N9YAjgzNdxJtFHGHBHt6GgP72I2fmAjSgezRDS%2F6iiPPA%2FxLVTiI7WFlcYSIC3ntm4xIL0CmnGGow3b3mH%2Bi7%2FTTOucLzPdLsLBCUFOdcqnHuP9cgeVsgOTIVPWmNdodu9%2Bht0PG6lYb5VyMQCu%2FLvL6Ss0muZkriFCLyjUx9uDfgSkMOTTs70GOqUBGftv0cVAG0i9bKLkWbBSFLlHGUMt326CiMlnFczNDP5fYJ6WxOsc0UmGX1WS3rzoiz0b7w23yfSIZOMj3ib8dDLrYE9pGg5dfJ5ciJ%2FFGgcttzkSV4wZQabx6mGEzKtqOu3RfXq6MJ1rjJRXMS3QFIn34z2BQbCD6YeVr4v3i4BuTqp2bsyx3liR0oX2%2Fdm1eZb45VMhui1qIpQR6DXt9Edu5srG&X-Amz-Signature=4d597cd113d448513e08c9cc0f0090df4662cb7467b86f11d4b759f1a885f16a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXI4X5A%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYcoTC%2FwJRU8ecI3M%2BKHrUt0Glj3UbGNY2VOAZgDK2xAiEAyybDmg2Zw2huiepaPaj6va40v5ZyLFBtfueMiRuMI%2FoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BqFBYtDIubTCRs%2BCrcA2w7EdD6TbK3wDYrsn2U3mr7zcFNKfdvyB3zMYvgrQAr872Vp4NAxhxSHZmK87S31rvTeepKsUvsYQk%2B6vue3pbHj2erh%2FQVsGdVLkcSAiyLB4VPWxJ4rRXukKWtcjIeiFtwzRkeBNMJPnSn0mRcH4oFVXi88H2TJ%2BODgaQR7Rjw7lf1Gvipgu%2BJnd3tyvv8pdjlyDhxPDFxkk8d05MKIrN%2Fwhot0lu0EkFxec9wpJO5aUL7lF%2FKbFNEJs4Sim43%2BojrJazNG%2BZwzXBhD%2F3HTsx6RqdHTfAlluy6SReJRbW84VfJqkrhJJDo6FV7TmsgaEqTGGuM0hDq%2BvOg9l72oDv7jfugAr%2Fa3yNkw%2FPf%2FMm8ZCAVsJogxUWO7RzEdfC7Hn9lJzvCGmrV8iKSDElPIyBVc%2BrQ4ew1ojubmVaPMcoQVdeHXsJaK9fpR0zlVg6fA9MsdgjswnDC1N9YAjgzNdxJtFHGHBHt6GgP72I2fmAjSgezRDS%2F6iiPPA%2FxLVTiI7WFlcYSIC3ntm4xIL0CmnGGow3b3mH%2Bi7%2FTTOucLzPdLsLBCUFOdcqnHuP9cgeVsgOTIVPWmNdodu9%2Bht0PG6lYb5VyMQCu%2FLvL6Ss0muZkriFCLyjUx9uDfgSkMOTTs70GOqUBGftv0cVAG0i9bKLkWbBSFLlHGUMt326CiMlnFczNDP5fYJ6WxOsc0UmGX1WS3rzoiz0b7w23yfSIZOMj3ib8dDLrYE9pGg5dfJ5ciJ%2FFGgcttzkSV4wZQabx6mGEzKtqOu3RfXq6MJ1rjJRXMS3QFIn34z2BQbCD6YeVr4v3i4BuTqp2bsyx3liR0oX2%2Fdm1eZb45VMhui1qIpQR6DXt9Edu5srG&X-Amz-Signature=5660006af4b509b154863ea57f004454d43973a32a7874ccdfdfe8a59e629e07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCGKJIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvvLQmzaFBvAynVnOF5GTG0VqtYR2IgHf35HlbL%2FrhqAiBKKNWuIO0g%2BYru7PJdh%2B0rWbuQgJJQ9FiAfp3DZebhjiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9QMavR6LzrdIXs6pKtwDmn1GiUmjHL69xMF3cPmaEHCF%2BHA96ZYUrGoup4ZZm8T8r9spDpUnTM0gwQc1Hc8IAMLZCdPFWM04Dy7y0C5jHr63GmVoVvBzDT4GP8pvQwDAQ5MnTrH2DBfRAYNrq19T%2BwSyGrptAG7faXfkuT4lmRqfxm0RP%2FXokUarSKNX0H0k0pcIZiRpQk%2Fby3HC4f5QqfQA8Yrn947diYd6YZDzdpdpXAW3D59PTiC4pj71uju7tVcHvtmkLg%2F5Zy3zSrpmYJrL20VlFc%2F9LheqSzbDBku1cnDjK6ztHQHpItHkNoc0SUj5sc4unF9aDZIaMx7IHK7qcpgfL0tI6TJrAZyayRIqOWzIJ3dPrwgvAL4ZWCWfDbbf8KGyhzXRn1mZpOEsEzXuYTr%2B4nopz8Dwmth2jzzth3im9myTpvfseIOK3GSWfubiu1ybOlPhRG3I2O1GyeBteWTcN5qdzjIkChaDPw8pDgGaKjxiDRzjLEneSxieDQ3Xn8pQ9SHiv4Dzwd0AMTp83%2BAWdQYFPPqQ4YJN6GtNNjF4nfdxidGFJ4e19LqJY9%2FbX4ua58CF%2B7XkSglXq5SCetiujUeZVpAn1cw8C3gieAwMgR2LBGSqVWV1CYTqR8B64A8JQp7Pnzow9MmzvQY6pgHp6otKWmRH7gLcTg9bHgur9E8xPVp1DK3UFKWEmvOErDt8CItJSItrCVVQ5Fw%2BfPu9eDGjI73sNm2lgAyY%2FSrnqQeDRbYZGMkkCbltIUQR1d%2FQy1ELbWbiqDHe7PSPVnNwP2kXD7nYfGxt4lwWu1So%2B4Rbhy0KQQ0zhN44WGFuYk7Cxh%2FNJyzIDvL5bZiyQx02NetjA3oUsLCkek8ej2U%2FZJSXhzgM&X-Amz-Signature=83874c7ff2023fadbf93dd9c8f69ab47e516c5129faf0afdde769fdab09eae99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCL6U3X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAZeCkYL0It1jNJ5nu6%2FqQtNy1MQNsQMObs5A7yILUWAiAwOPawKjTuX569bvst1LAG9g%2FqRJjahxPINuch51hHuSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ne5Hzd%2B28XZP9i0KtwDqkZo%2FRY6HUqgpaHYIx%2Fyqw3nxs2PcC0fnW%2BVoGv2uWvFQJwbLJpPekYccoIV0lrRLilwoMcamM8IEfycT6qIaOrz6c2o%2FO2Ilglz5T%2BPFpqi0xajjgiGPaj5lPqJtxiJPxfgPWL72I%2FLdZxd3F2xrGOcDhKDn7BgOZSSdqminwwaHj7jWsBzxJji%2FjwTijB8hTXpm68%2F%2FqIO4Mw0kCr7sfT2Vs2SOg0YMP6ARbS25bY1BLj2XZpdhjaPE1FRdmqcBBXmc0QMw4L77K%2FHXqvGdspUcnCpXqf1YLhWzEeLFPc2dZcrA2AOwEKdxjquQ%2Bq6rTzp1vEva8VKOQB3TolYqho2a%2BhmOgkrfZRtR7SFL5PGptZg4BlFS29V2JE5X2IftYq939oZbDFnnNzBn8UPByQ188aVvdnpedaFO%2Ff7xYyYU5Q4H9gGUiOoNmnLmUeDZP%2BfB9p%2BQ90sFiOxVGKhwEpxpu4pEZdnKD5mm3jpFUgSnFotIglISkLtuN9z1EWrx3PTyTsk55qvwApbrncgKzbe%2BFQUcZ8WlmCIXAfXpttAJ6Ckul2cBx7hYU1m725AWvEf2eJdIL50xT4ybWdcJ%2FktIwrYs5I599t8KWK%2BwIyRL4NMDibimrDB8sAwoNazvQY6pgEv1G7d74lsqsKIYCG2urZyFBdOJm0Kqg%2BMxXJVhzF8inomnS9KS8iZSZRfFH31utBW48KwueJzo4ynzsFo6B68PWJPy4%2FQgkcRMRGpmDMBpghEuLLh4l4dhEo3TnTc8F10lVraePJJIojVMAzW5y9wvIDn6eEHJ56sqmLpSjvjdg8iZdlUpT6%2F44cvVN%2FuccTqkrsG%2BRFGlnNAwg1MarSgWIW1Kh1M&X-Amz-Signature=d34efdf24da0863dcd316aead379ae6430c40960989edc0827b49330cd812f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXI4X5A%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYcoTC%2FwJRU8ecI3M%2BKHrUt0Glj3UbGNY2VOAZgDK2xAiEAyybDmg2Zw2huiepaPaj6va40v5ZyLFBtfueMiRuMI%2FoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BqFBYtDIubTCRs%2BCrcA2w7EdD6TbK3wDYrsn2U3mr7zcFNKfdvyB3zMYvgrQAr872Vp4NAxhxSHZmK87S31rvTeepKsUvsYQk%2B6vue3pbHj2erh%2FQVsGdVLkcSAiyLB4VPWxJ4rRXukKWtcjIeiFtwzRkeBNMJPnSn0mRcH4oFVXi88H2TJ%2BODgaQR7Rjw7lf1Gvipgu%2BJnd3tyvv8pdjlyDhxPDFxkk8d05MKIrN%2Fwhot0lu0EkFxec9wpJO5aUL7lF%2FKbFNEJs4Sim43%2BojrJazNG%2BZwzXBhD%2F3HTsx6RqdHTfAlluy6SReJRbW84VfJqkrhJJDo6FV7TmsgaEqTGGuM0hDq%2BvOg9l72oDv7jfugAr%2Fa3yNkw%2FPf%2FMm8ZCAVsJogxUWO7RzEdfC7Hn9lJzvCGmrV8iKSDElPIyBVc%2BrQ4ew1ojubmVaPMcoQVdeHXsJaK9fpR0zlVg6fA9MsdgjswnDC1N9YAjgzNdxJtFHGHBHt6GgP72I2fmAjSgezRDS%2F6iiPPA%2FxLVTiI7WFlcYSIC3ntm4xIL0CmnGGow3b3mH%2Bi7%2FTTOucLzPdLsLBCUFOdcqnHuP9cgeVsgOTIVPWmNdodu9%2Bht0PG6lYb5VyMQCu%2FLvL6Ss0muZkriFCLyjUx9uDfgSkMOTTs70GOqUBGftv0cVAG0i9bKLkWbBSFLlHGUMt326CiMlnFczNDP5fYJ6WxOsc0UmGX1WS3rzoiz0b7w23yfSIZOMj3ib8dDLrYE9pGg5dfJ5ciJ%2FFGgcttzkSV4wZQabx6mGEzKtqOu3RfXq6MJ1rjJRXMS3QFIn34z2BQbCD6YeVr4v3i4BuTqp2bsyx3liR0oX2%2Fdm1eZb45VMhui1qIpQR6DXt9Edu5srG&X-Amz-Signature=74922f70206bfa3f346bf0b1a50d78d64a86b6775f4a16e666a87b3e5c1876db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
