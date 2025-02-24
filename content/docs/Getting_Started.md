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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEAFCHKH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmRwhPbVy%2B3NrfHG5TYQvyb%2FVhAUTZ4MkDDlX03IwmnAiEA8MSlMo8EO7W%2BghVd65vnixsAB74hf0sL5lqsAqjwkDkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO1e%2FPWezTOT%2FxZwwyrcA5qYJ0WM9v2ckE6rnalyBrLkco6mufSfP8kWRpPs%2FvG1j7tuvxWkoCfiNRZ3iKqRoSHCYI6yomKrl75F14AH620bfAjXw3boC1WJMePnObvbnqUa5g55yodEh1rnHL8X7%2Blweld9bGhhNs8HPuh2CzDda08h5bE3pAnbQ6H3kqwut0g2ab6WFHxecpQ%2FzkjYNF4uob4%2Bf14Yw45Q8KtAlj%2F7OK10okBFtj11IAU1VpR0nWYQplUoSXlPKhUUKfAAkyDJb91l%2F1Aa%2BSB9JN2DdBGLeDgsaX78Cypi0OdHDJwowNdVIwu7k3OEgqGzyUuXUii%2Bv%2FDdXmmlboJIZozZty6KMKyNFf8cNPxA46jPRGKlWrKLr4JssIz%2F5YpjCo0f8Ys1qw1afXYO2dUdTf9ZS%2B61uplDq3G6EqQrzGovL%2FKfUyXNxL%2FJBIW5NpP8CHNMo1j%2BPa%2Bydp7yyOavpVXi8F9Fbv1D7IjGR%2FX49vkHdEgYHzBirbtGKd%2BA9JYw3KBQ%2F8EoKte9AzNx1QR13hS6RwLJ6otJ0nHPI6SvHZUnITaqqVeabhjc7on9jHBaD9b7K%2BrflnlBqSQfdX%2F22sLP6V5h24GhWRlxzpUaYMlUsH03uM3h8JOtX2Y360CwMIC%2B8r0GOqUB2mLk3qMgaB7j1RCv8v3ZXeYpcveoaIq3U2Cg812j%2B8TEAEI0UBvP1sNuXaN3jZ8sT4siwvRE38D%2Bcm1d%2BQ1n4ba6ko6AcYT%2Fl0m4CoLXoCYTbe01Fjy55tI6%2BnaCis0sMtEqIfOxhNM9OcmOd2Ah0z2MU8h8WIigo64iuC1NcVxl%2FqFN0xn5YrkrRY3VQPJTXs0kZPtUiV5CDhGbiD5RiLSsaQ5o&X-Amz-Signature=28bb3f1e2d2383bf5c99bdb134e5e7ae7e445d0fdbc9c0a38b5a0d2a5e53e90b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEAFCHKH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmRwhPbVy%2B3NrfHG5TYQvyb%2FVhAUTZ4MkDDlX03IwmnAiEA8MSlMo8EO7W%2BghVd65vnixsAB74hf0sL5lqsAqjwkDkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO1e%2FPWezTOT%2FxZwwyrcA5qYJ0WM9v2ckE6rnalyBrLkco6mufSfP8kWRpPs%2FvG1j7tuvxWkoCfiNRZ3iKqRoSHCYI6yomKrl75F14AH620bfAjXw3boC1WJMePnObvbnqUa5g55yodEh1rnHL8X7%2Blweld9bGhhNs8HPuh2CzDda08h5bE3pAnbQ6H3kqwut0g2ab6WFHxecpQ%2FzkjYNF4uob4%2Bf14Yw45Q8KtAlj%2F7OK10okBFtj11IAU1VpR0nWYQplUoSXlPKhUUKfAAkyDJb91l%2F1Aa%2BSB9JN2DdBGLeDgsaX78Cypi0OdHDJwowNdVIwu7k3OEgqGzyUuXUii%2Bv%2FDdXmmlboJIZozZty6KMKyNFf8cNPxA46jPRGKlWrKLr4JssIz%2F5YpjCo0f8Ys1qw1afXYO2dUdTf9ZS%2B61uplDq3G6EqQrzGovL%2FKfUyXNxL%2FJBIW5NpP8CHNMo1j%2BPa%2Bydp7yyOavpVXi8F9Fbv1D7IjGR%2FX49vkHdEgYHzBirbtGKd%2BA9JYw3KBQ%2F8EoKte9AzNx1QR13hS6RwLJ6otJ0nHPI6SvHZUnITaqqVeabhjc7on9jHBaD9b7K%2BrflnlBqSQfdX%2F22sLP6V5h24GhWRlxzpUaYMlUsH03uM3h8JOtX2Y360CwMIC%2B8r0GOqUB2mLk3qMgaB7j1RCv8v3ZXeYpcveoaIq3U2Cg812j%2B8TEAEI0UBvP1sNuXaN3jZ8sT4siwvRE38D%2Bcm1d%2BQ1n4ba6ko6AcYT%2Fl0m4CoLXoCYTbe01Fjy55tI6%2BnaCis0sMtEqIfOxhNM9OcmOd2Ah0z2MU8h8WIigo64iuC1NcVxl%2FqFN0xn5YrkrRY3VQPJTXs0kZPtUiV5CDhGbiD5RiLSsaQ5o&X-Amz-Signature=a383f760e95fb237eb91e31ca5ea2b3e72c39d003384ab8ded06d4237a5985b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAYRFQ7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4vEk%2B%2B4D43mLPlPnzgfEE5C88fWxB3vBcOvvuPBRhXAiApnvdJo0fDVoC14ytMDtclIvis22CXPOWx9ihOUBnatir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMA5fnDJTH75m83tQJKtwD3WifGen424RvZv6J1dfdSvlO%2FC0Y049y2pcXUjZ%2Bk6GOa10NY88qMcFZp9kPE0tUrWqKBfDs%2ByEWGJTZi4MWr7qw7dz6n%2BRMcZtQFCDwaKqOCDFjIBepWvO90sMvg3dcJbvfmKkgEbFGt76gBs3w%2FpJuaf5fh%2B3ys7q0Zxen31xhNl1tU4KcSFQj8YkX7EjgruQegBQcb3oGAjx1%2FcZ0%2F%2Bgl7O7Ro3wlbJU1a0%2FxgOVOYNMfFqAN9PHgqRgNFGYwcvrFhUI7YyqlfZZMWbQl5uDcfi2gZuFTeRHFkX8449mZ%2FNQMlWZUANoQ%2BGwKTxUoJf%2B%2Fi4R%2BdKjeHRMdV8F0ry7YgUmhiDeOaVZxx6n9yGDEt0KRioJ1SL9INADNLsJwxibovJrpViYLwuJ88%2BXAFnu60g3hR%2BFRJYCz5JPud3gnc4mvTr%2FlYRK%2BEgZcMB%2BWnDGQ3HEn6LS6G%2FHSI1PzCgEv0v97R4eliih%2FG6uxf8idNqOZNFrDKpNiObks8Phn0TPby2jqcOahocN7%2Flac8iwNodMREFtSeoJMv8lpOUS0unLuV14h8W1ax8qPP1Xf22uk9G5Bt9z1KG0O5LhFpD8ndv56nb6%2FIoa2wJN0abcMMwQmumJaJRP4VR4wkbzyvQY6pgFnHSafc9%2Fe7byzWh4I8LGRthY0R5kBFzHr6XF08M69oZvWu7ZkmUyNUbB4msFu9i8uWUHDRIhA3VybIsoAMBdtM1Eya%2B%2FYilqLu6rk1%2FzAEdp%2F7blm8P8MPQ0vRoHQkQRp0bc3ELyIauxpXjWw%2B%2B%2BRrrSsyNCp6UDDMjw5YbuNAlMyY57T60HKqozSZrJSlJCECWYRZSLsMdlqhzDCwjSCFUzRrH2n&X-Amz-Signature=a02de5c0d77344d820a56891074b3a4883a15b4d7d241321928d62a7be3352e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVOKDH7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4hkU4OyhHa9C2sF%2BCfSw8CwKdI7BOMBFL6Hwo5Sww5AiBEpv8R5MZa%2BlQ2MBCeJaSlfGbAMSf7DaY7RYLaETqz6Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMspdzS9MSaX9YK8d5KtwDDZtdjuBo%2B5vgDo9XOTpjSasyaXIOkKtvx6RzMyCAGbA69buSDUu%2Bf0EfoqkwmOTmFWnP4cjY9%2Fl98J98JVxxyCQf2kLJz8UafET8HLZmRnRLEsYqUm5WGdLqHLxoswZIBdafQ8gboGNISpj%2FDG0N7q3N1xg7of4fuaPT5Ioggh%2F8j2he9FL1v170TeEBYhbIWkwvs1Go4PqOGDZsQfBBYRwGjX%2FAFhUTYrCpPfuirut2tshyPGFK0CsXRnWOj2S056V34TGd0eH4LFFr8S2RvSQTbNv3q92YzKqstWAvUMSMRJxccJe7N2bRGUhoOnAETldbMctjes49XP55Q9ARKjZBtMWUZke8NdVGatGICYsrshFLxWSk6Q8zBJlxCvX4Yc4KNhUbryIi4IMO5nhAp%2FS8hi%2FRf1CO5bYk%2B%2BrNotGD1eSU7KB%2BbCYYJJo5WRTIy81x5OMr3T5on1AZbX%2FQN22wl3VQVV6TTu%2FBfdWFbWxUTK%2B6qC3fmAbVAOFlHgXmc9QW3XftrWlVlznBlGXHqKUS3oiVgeZfyYDcBJUmHdoureaj8it2N1a4kGDLPhN4BqzjRMwnq2%2Br0Tj1dVNk0DoaFBI3ce7fFgikHrg2Rv0zF9Bzbg%2FFRPOyjLMwkr3yvQY6pgEOShJjaF2PKcMEBp9okuAILX%2BodenNiqlgW3fHfcrIYt7bcPO2dfNcQKwcAoifGYbjkFcXdhxKY5ZKFmXoXArVbLDJTIYr87RCzsz%2B0QiC%2BoQ4%2BMoL5gL76QuLBHQPijqEiNWzY0jV%2FZujyJZ%2BpDfloD7HTLegCGZJHW0q23emhmyfk%2FEdfmPY%2FzP4Tt0DPc%2BrLn2a7oWNuJIVXiEHPsCOkQzADxGa&X-Amz-Signature=ee225215bd3b0b02e5783e424a2cc36e7b55516dcf3f55fd917ebe0684a06e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEAFCHKH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmRwhPbVy%2B3NrfHG5TYQvyb%2FVhAUTZ4MkDDlX03IwmnAiEA8MSlMo8EO7W%2BghVd65vnixsAB74hf0sL5lqsAqjwkDkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO1e%2FPWezTOT%2FxZwwyrcA5qYJ0WM9v2ckE6rnalyBrLkco6mufSfP8kWRpPs%2FvG1j7tuvxWkoCfiNRZ3iKqRoSHCYI6yomKrl75F14AH620bfAjXw3boC1WJMePnObvbnqUa5g55yodEh1rnHL8X7%2Blweld9bGhhNs8HPuh2CzDda08h5bE3pAnbQ6H3kqwut0g2ab6WFHxecpQ%2FzkjYNF4uob4%2Bf14Yw45Q8KtAlj%2F7OK10okBFtj11IAU1VpR0nWYQplUoSXlPKhUUKfAAkyDJb91l%2F1Aa%2BSB9JN2DdBGLeDgsaX78Cypi0OdHDJwowNdVIwu7k3OEgqGzyUuXUii%2Bv%2FDdXmmlboJIZozZty6KMKyNFf8cNPxA46jPRGKlWrKLr4JssIz%2F5YpjCo0f8Ys1qw1afXYO2dUdTf9ZS%2B61uplDq3G6EqQrzGovL%2FKfUyXNxL%2FJBIW5NpP8CHNMo1j%2BPa%2Bydp7yyOavpVXi8F9Fbv1D7IjGR%2FX49vkHdEgYHzBirbtGKd%2BA9JYw3KBQ%2F8EoKte9AzNx1QR13hS6RwLJ6otJ0nHPI6SvHZUnITaqqVeabhjc7on9jHBaD9b7K%2BrflnlBqSQfdX%2F22sLP6V5h24GhWRlxzpUaYMlUsH03uM3h8JOtX2Y360CwMIC%2B8r0GOqUB2mLk3qMgaB7j1RCv8v3ZXeYpcveoaIq3U2Cg812j%2B8TEAEI0UBvP1sNuXaN3jZ8sT4siwvRE38D%2Bcm1d%2BQ1n4ba6ko6AcYT%2Fl0m4CoLXoCYTbe01Fjy55tI6%2BnaCis0sMtEqIfOxhNM9OcmOd2Ah0z2MU8h8WIigo64iuC1NcVxl%2FqFN0xn5YrkrRY3VQPJTXs0kZPtUiV5CDhGbiD5RiLSsaQ5o&X-Amz-Signature=6a8a8d6c8e216158bdeb7b50208145face94934563225502184c1ad399f00b92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
