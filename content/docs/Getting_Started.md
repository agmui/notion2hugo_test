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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHA34IXM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi41E4YpqjJe3jmv0UTymKLqlLXrLpG1Rk9uKIbS2MoAIhAPiIs7Eu3N3V03E9WL0bE1mSOz0tyaScdPURyJ68rPiBKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHYtwz%2BK%2FHQca%2BMdMq3AOxhl6sN93dJol2ABEPvRLjl3ezd41ngt9So1CuQieoOzYVsCg2gDElxky%2F68bg6QyzoOyjfBDRTnWk%2BkrqsExnSENgXosDHicCO%2BO7nkm1PfAfbj9yMN3LU%2FN0g8PFsQeh3%2BSDPCtCODGF7ucaZH%2F1cOtlgXhj492aJp99fdji%2FX5X1CGI36CXcPTIWxWXAD2wvpVhtVeO0YUtGwA6HdTaWoLBK%2FumxUtvh1j9eEQkAdL8RS01ZbkypA8kFE3DPLBTZMKMBNvC%2BtR8QyMDc5y8ul1UsEmw3nV6Yj06dXgvj%2F2v6%2B9gl1nHXzTFPdNUZGXM9J9dE3iro8R3GPeLdxIfHaYcutmGYq7McjRztYKmG3wEBbAxh4zAjQ%2F7cNwyRTeU6wtS35R2XrOnQbYRzIzBZSItzp%2BsnUJfnsMesMHHhjR42iyZBNiIIIabjDFobJD%2F5dJKGkpnBlFtI%2BuSwtwMpqR8pyh3Hv9cB1rL17Re1AL61ZH%2F4r1k6%2FDdAWMefXOf5QFFkViIuxqrqTK4Er7Pt1eNVRiKt1s7vGekLizC5fuOfbBSFWgfKpo8AXG4D6T6l1H27nwIP%2BC5QEsmc9zQ5Eoc3d9%2BBzyh4fOrzfzJmOpOhIim53nZjUmTnDDcxb2%2FBjqkARc7FCxi%2FqYAgPt3eXw8Gdzf7YgESp9x93I8chBPDaVOUm9elaVxC9LnA0uxNy3YUSpKrH9bmH4Z3LUdC%2B2eQE7c8YOKN5gBkvPFH2NqpOUsj393FM5eGDjFWlT7nVPrRcHYzNTSKuiG0sckEvCO2llck0Qspr8%2BrjnDMxZwA5EgnTRy2%2FFCF4cgJj6qvcTVolUJYHjJuu2i0MMopHm2vSRabMvG&X-Amz-Signature=a06f5659cf618c2cbd9ad4b705bc54edb87eab045ea37a683792e2327e633a46&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHA34IXM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi41E4YpqjJe3jmv0UTymKLqlLXrLpG1Rk9uKIbS2MoAIhAPiIs7Eu3N3V03E9WL0bE1mSOz0tyaScdPURyJ68rPiBKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHYtwz%2BK%2FHQca%2BMdMq3AOxhl6sN93dJol2ABEPvRLjl3ezd41ngt9So1CuQieoOzYVsCg2gDElxky%2F68bg6QyzoOyjfBDRTnWk%2BkrqsExnSENgXosDHicCO%2BO7nkm1PfAfbj9yMN3LU%2FN0g8PFsQeh3%2BSDPCtCODGF7ucaZH%2F1cOtlgXhj492aJp99fdji%2FX5X1CGI36CXcPTIWxWXAD2wvpVhtVeO0YUtGwA6HdTaWoLBK%2FumxUtvh1j9eEQkAdL8RS01ZbkypA8kFE3DPLBTZMKMBNvC%2BtR8QyMDc5y8ul1UsEmw3nV6Yj06dXgvj%2F2v6%2B9gl1nHXzTFPdNUZGXM9J9dE3iro8R3GPeLdxIfHaYcutmGYq7McjRztYKmG3wEBbAxh4zAjQ%2F7cNwyRTeU6wtS35R2XrOnQbYRzIzBZSItzp%2BsnUJfnsMesMHHhjR42iyZBNiIIIabjDFobJD%2F5dJKGkpnBlFtI%2BuSwtwMpqR8pyh3Hv9cB1rL17Re1AL61ZH%2F4r1k6%2FDdAWMefXOf5QFFkViIuxqrqTK4Er7Pt1eNVRiKt1s7vGekLizC5fuOfbBSFWgfKpo8AXG4D6T6l1H27nwIP%2BC5QEsmc9zQ5Eoc3d9%2BBzyh4fOrzfzJmOpOhIim53nZjUmTnDDcxb2%2FBjqkARc7FCxi%2FqYAgPt3eXw8Gdzf7YgESp9x93I8chBPDaVOUm9elaVxC9LnA0uxNy3YUSpKrH9bmH4Z3LUdC%2B2eQE7c8YOKN5gBkvPFH2NqpOUsj393FM5eGDjFWlT7nVPrRcHYzNTSKuiG0sckEvCO2llck0Qspr8%2BrjnDMxZwA5EgnTRy2%2FFCF4cgJj6qvcTVolUJYHjJuu2i0MMopHm2vSRabMvG&X-Amz-Signature=8ff3cd99b49a5b1732e873380d4689d0132bd06493bf5141e1dcb3a2a6d9d193&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLATO4P%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7d9d94H2LbUg65kY6n4ZRbUfyCzpGZREAE8QKY5beJQIgRK9q7xYR6bi0PFvCvGiTFzoaFfKMK1xufJk1fTFawoQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVPZOYYVxT%2FXnBdBSrcA5TXYsDem10%2F1WjTMAWVa3CB%2F%2BwNEX78bv2CNFPJFEyqxti2gmJoPfgFqX8AAfUQ%2FjV3OkweIbnTd8SiyWvZr6SnFlFlFOvwS97BaTj2UcJEhqbqIY%2FGNRqbs%2BB6cLoihfE1D5Ab5oBH55xMTjvy44ZlUIpphgdOlM8bsTCiRrAAQu6UPCcBAjktZ6u33By94hVxYin%2F202QmoNHzsQc7iYX4sOoofQeMmPmpANPr7MmIgVkfsWAUZnwTmJGdT1Wo45iXQpLKcHG9IthhjFdbt9ukzymh4wWMbqTKXTqp0T2hMd2qOKGBC72rFcfz5wGHZFZeohXQZyS553khdveCU3Pe5%2Bjlw%2BG%2BFAY2tn%2FXIysaR%2BWolpQnKIy3lcGgap1RnKF9yZ0bDC%2BXbQVhvuBRW3r6Idds6DQEXoBsUvfrryWAmzUP%2FbolUfYKKs8%2Bb%2Bydmrt%2BgVIXE%2FR3UkL6xNhD4DkZ3tFdXDrHGXv%2F99ljf140I2RwsnO2DT%2BWlRzMh3nQrdbgfmzlTHYKIc9mjmS2iXvZDFGbPu4cmJHbpKv5QNVkkQqBLwx2AVITTZPLipo8N85rT3%2Bqhk7QAuDbE34jPvBfQ7VbBNYYa7QKQKCMKhyfPk5qra8avgM%2F6%2B8MIfFvb8GOqUBAv1MtHKz86b1OuKuBOR9%2FUe9twLFBgx6%2F7rMJ7Jwzm%2FkK6Dzc79G8cW1d0akVV3%2FOtpFuz1f11u0RLmecgvoodKnz%2Bf789n8OBKZcERCRmnOxLUS2%2FnOE45Wfk07vr2RgFis0VVIE8NT3kLrr8DCuExua1Ka2IHsRtE8f1qP%2BiPJVzPbkMPd6McgKnnEBZBgxlMxPzBxVFiewTkda0Vf3NsiQX97&X-Amz-Signature=6564577e539f75617628e9bbb4914e72a69c9fab7c1f23e31b29b7d4334d0113&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VO2XAQ6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fh1duVQgy8OZ%2FJbY1NurtEEh46ASXUQZEucJTYKoClAIgJ5nNayd%2BPgPJMc%2FrVzVrFVJctH%2BG55MJBrckGJGhoEAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsT8nP7x%2FUkSR3DRCrcAzlZSsFwgQMqEi9GFWryf8%2BD6ujcWDe1PRUs0u%2BzT1r4hw0y1qLcWpUGoWbHu0wXILI0y2evP2QAlfDH828pkshz6OvFTi%2FRUyjlizAsNKScglV37vNCob5m23iGA1xs%2FOS3jIN2r5D0ybH9Hy7QuK1T3qXpo2pVmzF6%2BF6K6OLQCBoEQdkvq5kP88lAECIYT0MOfE9CJz1y0R0ne%2FRJujm3HcPPBY9s0IRz18LWilr2RNfI%2BfHvqHTwuOdaze2aGm3PG6pRp9Yx%2BbfYDDKX%2Ftit%2BPqg96hhKZu1Js8O%2BFVg3hLompmiYqEkfOqc7vqdny9p6Ruz9000OJqb%2BvYt7khWqEr0yIVyTY3EqBYd6JvC3NDXYCwtq1R4%2BXJd88HhLWWadRO%2B5hUG1FBaAdSqmd%2FPnwLEdyKsGW3jt%2Bne22khQdMcAEz7stY6ALQgsRoSEGhF3qepQWBm4Q%2BaiW9kowmM5XZBh8TWsFttFnPpRy8gZq%2Bbt1gC9UzLoBk3Non4FLsdhNTc%2Bm4h5awrrIPVXa51k6EPi7f41bdd1Bb7ri4PqqY0HqR4f3xpA6EnuyfnYTfXPhWsHvhbyTexEu7vHj8qYdpSMQqxOFDWN%2BA8gs5bWuwv5VeqocVFhKJ5MMTGvb8GOqUBFT0Na5RsBJmyztFYMoklzzTzNW1osF3L7jbpIGmZWSG4g%2FTvYbwX7VmiNMfoRpHz8uvLMPIfNWyKs0eCufOWTAnq2ukStBB%2BmaHmRSCdu7dCKl%2FxV9uVizcSmEVgTF80r2%2Bpgyvp%2Bmvrb%2FD%2B0Nk%2FA0Gxu480lIK5ENgJpvDjhN%2FJNeE%2F8hXskPILskgogQrBueu%2FmJGJjigPm7HRjgiFOQKysHAL&X-Amz-Signature=5a1590d10aac8984bc629abf3a526d4e7f1f958a715e2db5a7dbef3ab5ed2ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHA34IXM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi41E4YpqjJe3jmv0UTymKLqlLXrLpG1Rk9uKIbS2MoAIhAPiIs7Eu3N3V03E9WL0bE1mSOz0tyaScdPURyJ68rPiBKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHYtwz%2BK%2FHQca%2BMdMq3AOxhl6sN93dJol2ABEPvRLjl3ezd41ngt9So1CuQieoOzYVsCg2gDElxky%2F68bg6QyzoOyjfBDRTnWk%2BkrqsExnSENgXosDHicCO%2BO7nkm1PfAfbj9yMN3LU%2FN0g8PFsQeh3%2BSDPCtCODGF7ucaZH%2F1cOtlgXhj492aJp99fdji%2FX5X1CGI36CXcPTIWxWXAD2wvpVhtVeO0YUtGwA6HdTaWoLBK%2FumxUtvh1j9eEQkAdL8RS01ZbkypA8kFE3DPLBTZMKMBNvC%2BtR8QyMDc5y8ul1UsEmw3nV6Yj06dXgvj%2F2v6%2B9gl1nHXzTFPdNUZGXM9J9dE3iro8R3GPeLdxIfHaYcutmGYq7McjRztYKmG3wEBbAxh4zAjQ%2F7cNwyRTeU6wtS35R2XrOnQbYRzIzBZSItzp%2BsnUJfnsMesMHHhjR42iyZBNiIIIabjDFobJD%2F5dJKGkpnBlFtI%2BuSwtwMpqR8pyh3Hv9cB1rL17Re1AL61ZH%2F4r1k6%2FDdAWMefXOf5QFFkViIuxqrqTK4Er7Pt1eNVRiKt1s7vGekLizC5fuOfbBSFWgfKpo8AXG4D6T6l1H27nwIP%2BC5QEsmc9zQ5Eoc3d9%2BBzyh4fOrzfzJmOpOhIim53nZjUmTnDDcxb2%2FBjqkARc7FCxi%2FqYAgPt3eXw8Gdzf7YgESp9x93I8chBPDaVOUm9elaVxC9LnA0uxNy3YUSpKrH9bmH4Z3LUdC%2B2eQE7c8YOKN5gBkvPFH2NqpOUsj393FM5eGDjFWlT7nVPrRcHYzNTSKuiG0sckEvCO2llck0Qspr8%2BrjnDMxZwA5EgnTRy2%2FFCF4cgJj6qvcTVolUJYHjJuu2i0MMopHm2vSRabMvG&X-Amz-Signature=1baa4eb4e11be14a7808e865d976bd4fade3f84716fdc1b533e7e928cc1d1367&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
