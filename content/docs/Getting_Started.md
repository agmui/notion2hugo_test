---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YAPWPX%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBnmTGuO8P2RUriUNtW3PhpX3V1uBX0tIKKj%2BzjMlH32AiEA2i684ehRpVa0u8OqdrPIFz4EfkTVHYVd2UQ4cgPjBAUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2mEQ7YOht2Z1evMSrcA5VkhOTuZ%2FCexn7a9agBPg5uDruAagmiR2cHWYOA3rb0JceSPj6NJMG3LcwmnFt5GxWNa7YV0%2Fe2RQHd7lwfvaBGhE84Ckx0%2BS8xnVddZ2fjsGdPCYsxMXE6V36tQQLRDXrT2juf7PJ9wq9rs6prfGeRaRl9WU4gO7BmzKVxyYi82FHubObKZanR6L0dCMc11Dzkn%2BFBo3Gr9M7Eqo2QuYie0b8%2FUvrlLiBIIP3OSjFf5NifFBKuT7%2B6E%2FECfajTYSNB1W48Kr2h3Ldx9a9UESGhR4%2Fsl3Am7ZCIxlsjYo52v1365wgX99WXtCnQgXFZJ9KGjQhkvc6TRFaMEmUML%2FVAQrl01DVHUGekrBNRcUgE%2FF4Fi%2F6l7Q6IUzMcN%2BOa0g04wflxlvAVtNVJVtQgLthYNDkIVyO7HESXexDqzsV6PVURvRD2pmMTCZ0JcRy8U3gnlR43XGedTgS6wxUtrVxMLkN3yd9NFu5gMJXSmg8DVpbnn%2FW3eA1f2m44C4Evte5f6TgeKYbn%2BMvBceDHrdH3ciqzjPxepbaIcAj5J1QdIA0suG37b4bNiZzUGv%2FSd112SWCKsghO5ZfouH7ceb0yXIJYeMZjo%2FtJSTdZSLxgxASOz8PEkLJlNOchMM3ols4GOqUBzXnTLb5Rpbaz%2FP9UGxtqzQXR5NZX%2B%2BH99sHnGGqKEdURtUyZ2EwcZOL%2BD9h8T60fT02vjlXpLcuS%2FEVMZL6guXuk3c5ql8p856ZD9Zbx8kfdnoOoL4gIA35cL4r8xKC%2FZM%2F2wuJnSAd0K2VjwK%2FGqkx09jzlKL6axC4lsvSQVsNKlCSgEHFC7gNyX22HX8mDDxEfAoMpmslyEBBQIc7blTyIFQYD&X-Amz-Signature=e9add066962f1f883b5de75a4d180fe5377294e9ad45da780426169ede2b2adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YAPWPX%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBnmTGuO8P2RUriUNtW3PhpX3V1uBX0tIKKj%2BzjMlH32AiEA2i684ehRpVa0u8OqdrPIFz4EfkTVHYVd2UQ4cgPjBAUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2mEQ7YOht2Z1evMSrcA5VkhOTuZ%2FCexn7a9agBPg5uDruAagmiR2cHWYOA3rb0JceSPj6NJMG3LcwmnFt5GxWNa7YV0%2Fe2RQHd7lwfvaBGhE84Ckx0%2BS8xnVddZ2fjsGdPCYsxMXE6V36tQQLRDXrT2juf7PJ9wq9rs6prfGeRaRl9WU4gO7BmzKVxyYi82FHubObKZanR6L0dCMc11Dzkn%2BFBo3Gr9M7Eqo2QuYie0b8%2FUvrlLiBIIP3OSjFf5NifFBKuT7%2B6E%2FECfajTYSNB1W48Kr2h3Ldx9a9UESGhR4%2Fsl3Am7ZCIxlsjYo52v1365wgX99WXtCnQgXFZJ9KGjQhkvc6TRFaMEmUML%2FVAQrl01DVHUGekrBNRcUgE%2FF4Fi%2F6l7Q6IUzMcN%2BOa0g04wflxlvAVtNVJVtQgLthYNDkIVyO7HESXexDqzsV6PVURvRD2pmMTCZ0JcRy8U3gnlR43XGedTgS6wxUtrVxMLkN3yd9NFu5gMJXSmg8DVpbnn%2FW3eA1f2m44C4Evte5f6TgeKYbn%2BMvBceDHrdH3ciqzjPxepbaIcAj5J1QdIA0suG37b4bNiZzUGv%2FSd112SWCKsghO5ZfouH7ceb0yXIJYeMZjo%2FtJSTdZSLxgxASOz8PEkLJlNOchMM3ols4GOqUBzXnTLb5Rpbaz%2FP9UGxtqzQXR5NZX%2B%2BH99sHnGGqKEdURtUyZ2EwcZOL%2BD9h8T60fT02vjlXpLcuS%2FEVMZL6guXuk3c5ql8p856ZD9Zbx8kfdnoOoL4gIA35cL4r8xKC%2FZM%2F2wuJnSAd0K2VjwK%2FGqkx09jzlKL6axC4lsvSQVsNKlCSgEHFC7gNyX22HX8mDDxEfAoMpmslyEBBQIc7blTyIFQYD&X-Amz-Signature=b2061d955eb87af4030ae5ff69ceee82c390539d5198930895302ff650a19f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YAPWPX%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBnmTGuO8P2RUriUNtW3PhpX3V1uBX0tIKKj%2BzjMlH32AiEA2i684ehRpVa0u8OqdrPIFz4EfkTVHYVd2UQ4cgPjBAUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2mEQ7YOht2Z1evMSrcA5VkhOTuZ%2FCexn7a9agBPg5uDruAagmiR2cHWYOA3rb0JceSPj6NJMG3LcwmnFt5GxWNa7YV0%2Fe2RQHd7lwfvaBGhE84Ckx0%2BS8xnVddZ2fjsGdPCYsxMXE6V36tQQLRDXrT2juf7PJ9wq9rs6prfGeRaRl9WU4gO7BmzKVxyYi82FHubObKZanR6L0dCMc11Dzkn%2BFBo3Gr9M7Eqo2QuYie0b8%2FUvrlLiBIIP3OSjFf5NifFBKuT7%2B6E%2FECfajTYSNB1W48Kr2h3Ldx9a9UESGhR4%2Fsl3Am7ZCIxlsjYo52v1365wgX99WXtCnQgXFZJ9KGjQhkvc6TRFaMEmUML%2FVAQrl01DVHUGekrBNRcUgE%2FF4Fi%2F6l7Q6IUzMcN%2BOa0g04wflxlvAVtNVJVtQgLthYNDkIVyO7HESXexDqzsV6PVURvRD2pmMTCZ0JcRy8U3gnlR43XGedTgS6wxUtrVxMLkN3yd9NFu5gMJXSmg8DVpbnn%2FW3eA1f2m44C4Evte5f6TgeKYbn%2BMvBceDHrdH3ciqzjPxepbaIcAj5J1QdIA0suG37b4bNiZzUGv%2FSd112SWCKsghO5ZfouH7ceb0yXIJYeMZjo%2FtJSTdZSLxgxASOz8PEkLJlNOchMM3ols4GOqUBzXnTLb5Rpbaz%2FP9UGxtqzQXR5NZX%2B%2BH99sHnGGqKEdURtUyZ2EwcZOL%2BD9h8T60fT02vjlXpLcuS%2FEVMZL6guXuk3c5ql8p856ZD9Zbx8kfdnoOoL4gIA35cL4r8xKC%2FZM%2F2wuJnSAd0K2VjwK%2FGqkx09jzlKL6axC4lsvSQVsNKlCSgEHFC7gNyX22HX8mDDxEfAoMpmslyEBBQIc7blTyIFQYD&X-Amz-Signature=64f0eff470208693df44b7aeb80aa4edaaada2c7aea4f5ce84d2b62139fd3cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2NLUB%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIE8TC93cBbozCUvTSAGm2TlUegnLmQ5V5p8hTVmCw996AiEA2nyoEHYVmLnGM6peRMvtWl%2FXhuysuZLlQDvw3FjrCeQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8ZAhkJHLcSuuzheSrcA7FS8DXrW1MlKVle26cfJoj5qUxfDPDqlNjxxHVeQg2U2gKQvIFsOgLjn76fhKGt3bPW0L1voBVq7Kvmvtp%2BirpfGlidZeGR67hU60QEX%2Bi6vy4mjHBPd8aasAq3f7JlVKudrE14y5eTF40gLAOZdmrJaJPqiORsFndzzzvn8GBFT%2BSKQARtz3wp%2BxEGnqfnScHk1zcNJwUnfEc4zzWRWEVXB%2BzWQ7%2BYsJXANaUi%2Fp3vqvOMBLZ1g%2Bm5eUGrqvbYV8Gv5omU4nA%2Fqw4hWADNktFa57MG3MIJ%2B%2FJIsX0pb%2Bs1H1OzFB2jPZLQTdSS%2F4T98SdsWmLLh%2FteowObAV1WnRkAOqnXzcKltJnlsACITixSidJm97TyAwVlalwyoomiiKPGyElXom96zQ0T%2BvD%2BEGCi18YiIVKoD97PlqJZapeM909oQ9ajtmYtXxQIwdHCiKjhxAqor0bQosSobru6Nvkim%2Bsf%2B9ujjvTOzurgvmPrdKiXAUYvEUpxZcn5qtACiE9VzAfcQa72s8Azrq8Gxtrt%2B32WzpksACYtG9NpyRoW9zo4BAJJSnJTaN4a18fvbiXmNZw8i1WYcKfozTOEs%2Fb6XjuXCakKc8n3DzL87lGOGFf%2FDak5xXh%2Fms7XMMDpls4GOqUB10MNHJleo82FmDtzc2%2FkZ2Z9ggWtxGwdJ4fkwehqYS9HHv%2FcoIo9h9jZ1m7lUsrikrzxt2CrdLd8Dj%2BBsDwxJYFS657AYVylUGf62Z8K%2BySeZQ9O8aPRyLRWum0ccShRcKiEJc36XzZtAR0NvXLPY9Ej9Rpa5ZdtplTl81K2i5kF5G5Y%2FYWNu9DEQK%2BvT8e5oBSY323gORm7OucAUR07GkMNZImv&X-Amz-Signature=14271ea68633e176acc3f86dfefc04d41e9c5b1f1821ef76c846c6a26d426fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FZ53OKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDoouBial8hs91B0MJPv6CO5MfVQznZAlDosljuSxgLAwIgbbvdO6PaeJ1TAunjZPvLd4Wse0J5jUh92Kijqtdxvo8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLyzd7fMHeqqxemyrcA9GIClWgaAqvOiMhukT83PdlljceDxaauSSXmW6o9ckyDx0Kv7lsxOBWgy%2FGoTDRtn6HoT3xSLEoatNZNKPWX2UGoWsH2reUjSqWUXMylpQp5hoEoD88z9qjCDz8%2FJvWvkZ9Z9kekx9yMjZVND5ysrIfAm2oMztGJihsQhlPMTauX1Y0NKwGEcGKZCggiBcbtrM0xx1MWqD%2B4oDG3dvRJVeKWBtZ89%2BQGEQ6sD5xN%2Bmd2gJnLhdbhN0ERUW8yCZia%2BgJcnK9zdjgaq76gXSfe3%2BgcWqI6tWN9cJR3JWdKA2xXotqx770Nj3g9gkf%2FWoau0TcUJuCPp1x%2B9FNZLPbHCqMVU29wTq%2FVfvtT5%2FM7GH%2BqvFnrLmYr%2BlsdLCM24Tz6GttGM31zkWb3mPHjnO%2BWXbGBwDxVfgYOA4615tizMBPSqiM%2B1pz5THBAmZr1Je3pxMtwJxzW4yNM4tkgTX%2FrfpJXo2tqpla2j6k6JQm39tOLka1kHEGTk9L6SM186JcJeO9RX5XmqEHxB68JzGIeMfhdXNRAAzsYxwsBirIcC5vl9ppilqA7LmdQVb%2FbATCeOaLAKH0EtBVCY6nGl6RwSvAM93Q%2FfsHhPcqHZ%2FxdvCqtatRoxnMX4%2BhL%2BxnMO%2Fwls4GOqUBOogPu4uvbX25RdJBLOvOybXINVLx1TcT1Sf8RwTQBy7FM4NMr4lLius2wVP43Mjd3z4Mv8y8J3DeJ9M9vqYti9%2F6k1WEEy71dVBE0ddcTHflcHx5z9N0Fu9sfyDb4I9s2zwj0IlA2ElfZ0il2lpJSb8RoYIdmqc4Eb2sjPqv4hpoSmPCygHGCH%2BABdWhqw1mkqbfarVn2tyqUtOXhczx%2FHjyerZF&X-Amz-Signature=b29412f7d22bee1864e91272126a2d4de6b5ab69ed766ee3af5fedb75e091de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YAPWPX%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBnmTGuO8P2RUriUNtW3PhpX3V1uBX0tIKKj%2BzjMlH32AiEA2i684ehRpVa0u8OqdrPIFz4EfkTVHYVd2UQ4cgPjBAUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2mEQ7YOht2Z1evMSrcA5VkhOTuZ%2FCexn7a9agBPg5uDruAagmiR2cHWYOA3rb0JceSPj6NJMG3LcwmnFt5GxWNa7YV0%2Fe2RQHd7lwfvaBGhE84Ckx0%2BS8xnVddZ2fjsGdPCYsxMXE6V36tQQLRDXrT2juf7PJ9wq9rs6prfGeRaRl9WU4gO7BmzKVxyYi82FHubObKZanR6L0dCMc11Dzkn%2BFBo3Gr9M7Eqo2QuYie0b8%2FUvrlLiBIIP3OSjFf5NifFBKuT7%2B6E%2FECfajTYSNB1W48Kr2h3Ldx9a9UESGhR4%2Fsl3Am7ZCIxlsjYo52v1365wgX99WXtCnQgXFZJ9KGjQhkvc6TRFaMEmUML%2FVAQrl01DVHUGekrBNRcUgE%2FF4Fi%2F6l7Q6IUzMcN%2BOa0g04wflxlvAVtNVJVtQgLthYNDkIVyO7HESXexDqzsV6PVURvRD2pmMTCZ0JcRy8U3gnlR43XGedTgS6wxUtrVxMLkN3yd9NFu5gMJXSmg8DVpbnn%2FW3eA1f2m44C4Evte5f6TgeKYbn%2BMvBceDHrdH3ciqzjPxepbaIcAj5J1QdIA0suG37b4bNiZzUGv%2FSd112SWCKsghO5ZfouH7ceb0yXIJYeMZjo%2FtJSTdZSLxgxASOz8PEkLJlNOchMM3ols4GOqUBzXnTLb5Rpbaz%2FP9UGxtqzQXR5NZX%2B%2BH99sHnGGqKEdURtUyZ2EwcZOL%2BD9h8T60fT02vjlXpLcuS%2FEVMZL6guXuk3c5ql8p856ZD9Zbx8kfdnoOoL4gIA35cL4r8xKC%2FZM%2F2wuJnSAd0K2VjwK%2FGqkx09jzlKL6axC4lsvSQVsNKlCSgEHFC7gNyX22HX8mDDxEfAoMpmslyEBBQIc7blTyIFQYD&X-Amz-Signature=0193da06c3229146407ac78529d5d3734ae5529ef6b67128068dc1e14b1d1e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
