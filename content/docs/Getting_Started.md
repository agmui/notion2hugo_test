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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABDTLWU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH32ZxVuk6sG5EE09kWTZDxSwZqmQBkpL1kIl1nvJZzAIhANyr7HDEclAy4ETT7ywvA55gBoF19m%2FdBAxjwxd%2B%2B0l3Kv8DCEsQABoMNjM3NDIzMTgzODA1Igy1%2Fkt8AgYXNh%2BcubIq3AMTBYS%2Ft5Lw6B3NFrhasbqsiILuVcOp0Iu%2FwsDNfYDkIQ8%2Bjo6ENPPUCxdyBKfib2ozQe6GBkN%2F3%2BFHInPoztmp6g%2BIZnAGajTl9jWyyUfdteQ4PtSO8P%2B%2F4IvBQSRdGOlfr%2BO2T%2FWHDqg7ZLegIbdwt9TJHbmZXAKJai8VepeBg4gsaQiv14cviZmkGrearDf7Hra92FHTCpZ2JwZIl8eWcGAoi40OV5%2B06UbDN2y4Y32OGP3h1%2FP7ZsCiWjR4cpXdM2omtw4e49h8cSFQI9%2FQYcDaD4kggq%2FFNdc2YGIUQlD4z60A0p9sV7J6W3kkh4hFEwe494MX8NeFF8vNV2tp6qAdIKUoB9UVmfmrIAunUy%2BEpnpu2q1GJByjzwDE4POf3Qhz3645izvkXfceLdYrPYRnLmq9%2FBBaW3JB%2FuGWZ2FMG8NWWEeQ4%2FjsudnwDTXF8gCFAh3X%2BzRgm53BenRvIOP2uyKHNkzRKLihDj%2Fx4WSGsUm3PM3BBMQIQETm7w5panUo1uYNf1RaZJ3omvONrOoOCM9N3C0kG4Ta4AgDDxHDFeHy2MAYeSHwgDIZT2FbYauTi%2BeXmT8DBKOphT7cLoXEFMA9mVqVcxSFBIUhnajlNWcJQSCbWAHrATCesuDLBjqkAY6AH%2BDfTwIeMcuSpg%2FkWT8WbrRywkk7E9ex%2F3wpa1bDeN%2FzPyp88T4oTjLHVvK8KVzJxKpgP1zYKuNzR2n3zvbysjn8wTUGRsPBpG8C38jcfj%2F8LF%2FdFK6iMxBliUYiWzfCdj9EIGLU%2FyRjo615C6Kg3uzSUZXMq1a2a5C%2F3CHwkC%2BtgCuId3Uay79%2FBQ612hzEOTH1b8%2BGu0bSZUflK6TRfiNW&X-Amz-Signature=0425b34785c30e41c288c80d6e7a7f767017cad8f47e055542cc8a9698d7591a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABDTLWU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH32ZxVuk6sG5EE09kWTZDxSwZqmQBkpL1kIl1nvJZzAIhANyr7HDEclAy4ETT7ywvA55gBoF19m%2FdBAxjwxd%2B%2B0l3Kv8DCEsQABoMNjM3NDIzMTgzODA1Igy1%2Fkt8AgYXNh%2BcubIq3AMTBYS%2Ft5Lw6B3NFrhasbqsiILuVcOp0Iu%2FwsDNfYDkIQ8%2Bjo6ENPPUCxdyBKfib2ozQe6GBkN%2F3%2BFHInPoztmp6g%2BIZnAGajTl9jWyyUfdteQ4PtSO8P%2B%2F4IvBQSRdGOlfr%2BO2T%2FWHDqg7ZLegIbdwt9TJHbmZXAKJai8VepeBg4gsaQiv14cviZmkGrearDf7Hra92FHTCpZ2JwZIl8eWcGAoi40OV5%2B06UbDN2y4Y32OGP3h1%2FP7ZsCiWjR4cpXdM2omtw4e49h8cSFQI9%2FQYcDaD4kggq%2FFNdc2YGIUQlD4z60A0p9sV7J6W3kkh4hFEwe494MX8NeFF8vNV2tp6qAdIKUoB9UVmfmrIAunUy%2BEpnpu2q1GJByjzwDE4POf3Qhz3645izvkXfceLdYrPYRnLmq9%2FBBaW3JB%2FuGWZ2FMG8NWWEeQ4%2FjsudnwDTXF8gCFAh3X%2BzRgm53BenRvIOP2uyKHNkzRKLihDj%2Fx4WSGsUm3PM3BBMQIQETm7w5panUo1uYNf1RaZJ3omvONrOoOCM9N3C0kG4Ta4AgDDxHDFeHy2MAYeSHwgDIZT2FbYauTi%2BeXmT8DBKOphT7cLoXEFMA9mVqVcxSFBIUhnajlNWcJQSCbWAHrATCesuDLBjqkAY6AH%2BDfTwIeMcuSpg%2FkWT8WbrRywkk7E9ex%2F3wpa1bDeN%2FzPyp88T4oTjLHVvK8KVzJxKpgP1zYKuNzR2n3zvbysjn8wTUGRsPBpG8C38jcfj%2F8LF%2FdFK6iMxBliUYiWzfCdj9EIGLU%2FyRjo615C6Kg3uzSUZXMq1a2a5C%2F3CHwkC%2BtgCuId3Uay79%2FBQ612hzEOTH1b8%2BGu0bSZUflK6TRfiNW&X-Amz-Signature=f93fe4a94d6c8da324e526238813569511f67a6c11c62a9c62ed458250a94219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABDTLWU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH32ZxVuk6sG5EE09kWTZDxSwZqmQBkpL1kIl1nvJZzAIhANyr7HDEclAy4ETT7ywvA55gBoF19m%2FdBAxjwxd%2B%2B0l3Kv8DCEsQABoMNjM3NDIzMTgzODA1Igy1%2Fkt8AgYXNh%2BcubIq3AMTBYS%2Ft5Lw6B3NFrhasbqsiILuVcOp0Iu%2FwsDNfYDkIQ8%2Bjo6ENPPUCxdyBKfib2ozQe6GBkN%2F3%2BFHInPoztmp6g%2BIZnAGajTl9jWyyUfdteQ4PtSO8P%2B%2F4IvBQSRdGOlfr%2BO2T%2FWHDqg7ZLegIbdwt9TJHbmZXAKJai8VepeBg4gsaQiv14cviZmkGrearDf7Hra92FHTCpZ2JwZIl8eWcGAoi40OV5%2B06UbDN2y4Y32OGP3h1%2FP7ZsCiWjR4cpXdM2omtw4e49h8cSFQI9%2FQYcDaD4kggq%2FFNdc2YGIUQlD4z60A0p9sV7J6W3kkh4hFEwe494MX8NeFF8vNV2tp6qAdIKUoB9UVmfmrIAunUy%2BEpnpu2q1GJByjzwDE4POf3Qhz3645izvkXfceLdYrPYRnLmq9%2FBBaW3JB%2FuGWZ2FMG8NWWEeQ4%2FjsudnwDTXF8gCFAh3X%2BzRgm53BenRvIOP2uyKHNkzRKLihDj%2Fx4WSGsUm3PM3BBMQIQETm7w5panUo1uYNf1RaZJ3omvONrOoOCM9N3C0kG4Ta4AgDDxHDFeHy2MAYeSHwgDIZT2FbYauTi%2BeXmT8DBKOphT7cLoXEFMA9mVqVcxSFBIUhnajlNWcJQSCbWAHrATCesuDLBjqkAY6AH%2BDfTwIeMcuSpg%2FkWT8WbrRywkk7E9ex%2F3wpa1bDeN%2FzPyp88T4oTjLHVvK8KVzJxKpgP1zYKuNzR2n3zvbysjn8wTUGRsPBpG8C38jcfj%2F8LF%2FdFK6iMxBliUYiWzfCdj9EIGLU%2FyRjo615C6Kg3uzSUZXMq1a2a5C%2F3CHwkC%2BtgCuId3Uay79%2FBQ612hzEOTH1b8%2BGu0bSZUflK6TRfiNW&X-Amz-Signature=9b72e7356148a427da8cc1f58b7c04d08aab21503666c58ae885b9494095aefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4RAVHAV%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpeVl6Cdg4qKQgJlm34a2plbm0TdlGJvYNYiB%2BEWUXqgIhAIb6Gt8psh7%2BUvpdWqYfMRO6J2IxJrMZV9OHXCTH9aH3Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyZbIiYym%2FBJmsSDCIq3AOgE2eYU7OF5rV%2BpRHI9m7gdIswNXSPoda8j76uQisaGeOH4ss%2BR0Hs%2BzJ33%2F0QBt4jItDrSH8KH47cguD7naCdqh5HzuMbKoS%2BHY0oqfedVTDyXnWWdNKJfnbqCB%2F7FwJxt1fJQAdMR2FVdfbsZcx2yR93JgS7HO%2F3i9sFiju4DCGKgtYlNudacbuTuoRjHrXwKhDtCRPLY4AEcXXqXdxPPCKouG12%2F0BHkhRZmC%2Fktjv1WjM9ShHNcHKrA3DrryAhcs%2Bg9JIpqtnuv2XhKOpvvthNKSCXFJiKQW6hulngDXp2WLH1TqcS1B6mdoEOZ%2B%2BLxYvenr34%2FGR6Gs2E93jrnAHZZqFzIzXcvJpXynTeuNvvHbhz4hvfj77x7NM4%2FEEWxlYFF4vdGKiYdn6Z3fq4tpxGC%2FNQo95LgRP%2FtagC1fb%2B1Xz3R2ku0C6BhajPnEDQkkT66nhoKOcuHcATUdn5uY0WF%2F%2Bpvmq2aYEljy6iGqs9SluJ9rZcIwq4bSRcmePJ43CSFnKzU%2FLBYH1hWIT9kxFnmkMfjZ8S4smN0Oq%2FnwxR1CY%2Fk%2F1bFNbMsb01jVtF2B%2BS%2F%2F4rxnvGLscx3xQV%2BihXy%2BwquPQaCXeUe41ta%2FLo9kb4MTfnmLVItDCusuDLBjqkAUKRtz15fuVvsNZ6LGZARb%2FU3bvsdk1%2BWpenxaCeT9NdZDvZu%2BJnQoGIWk2XeszMtksyzeXPyf8p%2BtpVy9NQ%2BGl6jqB8iJILEUqnBDHxJYNUuZo1xmggJL%2B0v0YcYDTUn1Q6NBXCzZl1UtTdjobh5PTxIRd%2BbnHHdYU2iC3Je%2FBAGELSl1cRcCFwuxveC4cbIcDgdewoM9OsB9cOzHc3dwr0y1pr&X-Amz-Signature=338101c08dcb6caa40ebc71becc2ac9136ad9dda63dac24b1ed18316b91ad403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNXEPFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEibbjSwQQoGL1Ye0K16EMzjx%2FXSW7aDk4eehZ0NQzaYAiBtJPDixs9x1zqA5MMKZvhZFQT%2B4DmQATbf5e0BDpkJsyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMIRYxglkAspT4HBy5KtwD%2BPNWk9wofl0Bi4rHc9i2GUoArDvWZEIyRUeQM%2FdhcWUY3v2XKzGulP5zfGPgUfs%2FkheCOhmREUlz%2BR6iDB4pyh%2BbkDEQExxRcz5biHdJ1xU4R9vrlEAGP%2FhQ1Ax658gAu%2FyJ1qlvrx7Lm9k%2BGf9LiJtpoicIvVrcshpb74WlmsuLAi3v0rL0PK49gewdspd6wKNO9cHDXjRlKHd9VyZjp5zl9Zl%2Fo3VbGdrwcwCM8FzS%2FKdxkZRCbbryIBeMhhZEigiGL1YQ6YnrX%2Bvf3oTi0HisSqfsS9itz0NPj5AJAKtgLvO9C8bOb3IGJFjOzRHheXs76FyTyR2FVaUFNvuGHAvpF%2BB27q9KkMTB6uCPaEyG4A3ANCj8DRexG3mUXqYDOkHtsBuIZaV27vyYO3yf%2BCpJmM%2BMcO1kD9OTnPAa6qwNj6N4ChDmPcJWPnVURvg4ydrOm6S0%2FbnYTQBmPLePCTXKPKnlM7g4cw4k3CW%2Fg2ks%2FLRc1sDkwC6UyWKJdC87kl%2Fl1SxNkkbBZsUCF5vVfPsK6eMZ0LH%2B75a1uU3kE1Dsi44X0XVqidqEC%2Fu0XAzds%2BVj9%2BdDYFioVCg3jmpwWdputNoJZnEbAwJA904I56YQLTqaims1vtQwvR4wtbLgywY6pgFTxX4RMJnl9b9BFRIkNF9i1iip3%2FnWzhwD00PPqhnzhTon9eFHLysjMx187r5v2pgfaJGW7YyGDdvC%2FGkktkga4OsUJR%2FeAVg0wmwbXiH46ApKRZ1ilMX1mnroWACJMRHGMYShdkV6JKFZ1S4pF%2F6Sys01PkblUsJCVmQDUI6c%2BoETVbRl%2BhhbOihEOEMbtr%2F%2F5DbqTivNaWlNZpHwX4Wmn1Yx2cJV&X-Amz-Signature=c6fc4a632242ded2290f365180ebfa4ee8562195e58aeda599ae6d25793fda4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABDTLWU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH32ZxVuk6sG5EE09kWTZDxSwZqmQBkpL1kIl1nvJZzAIhANyr7HDEclAy4ETT7ywvA55gBoF19m%2FdBAxjwxd%2B%2B0l3Kv8DCEsQABoMNjM3NDIzMTgzODA1Igy1%2Fkt8AgYXNh%2BcubIq3AMTBYS%2Ft5Lw6B3NFrhasbqsiILuVcOp0Iu%2FwsDNfYDkIQ8%2Bjo6ENPPUCxdyBKfib2ozQe6GBkN%2F3%2BFHInPoztmp6g%2BIZnAGajTl9jWyyUfdteQ4PtSO8P%2B%2F4IvBQSRdGOlfr%2BO2T%2FWHDqg7ZLegIbdwt9TJHbmZXAKJai8VepeBg4gsaQiv14cviZmkGrearDf7Hra92FHTCpZ2JwZIl8eWcGAoi40OV5%2B06UbDN2y4Y32OGP3h1%2FP7ZsCiWjR4cpXdM2omtw4e49h8cSFQI9%2FQYcDaD4kggq%2FFNdc2YGIUQlD4z60A0p9sV7J6W3kkh4hFEwe494MX8NeFF8vNV2tp6qAdIKUoB9UVmfmrIAunUy%2BEpnpu2q1GJByjzwDE4POf3Qhz3645izvkXfceLdYrPYRnLmq9%2FBBaW3JB%2FuGWZ2FMG8NWWEeQ4%2FjsudnwDTXF8gCFAh3X%2BzRgm53BenRvIOP2uyKHNkzRKLihDj%2Fx4WSGsUm3PM3BBMQIQETm7w5panUo1uYNf1RaZJ3omvONrOoOCM9N3C0kG4Ta4AgDDxHDFeHy2MAYeSHwgDIZT2FbYauTi%2BeXmT8DBKOphT7cLoXEFMA9mVqVcxSFBIUhnajlNWcJQSCbWAHrATCesuDLBjqkAY6AH%2BDfTwIeMcuSpg%2FkWT8WbrRywkk7E9ex%2F3wpa1bDeN%2FzPyp88T4oTjLHVvK8KVzJxKpgP1zYKuNzR2n3zvbysjn8wTUGRsPBpG8C38jcfj%2F8LF%2FdFK6iMxBliUYiWzfCdj9EIGLU%2FyRjo615C6Kg3uzSUZXMq1a2a5C%2F3CHwkC%2BtgCuId3Uay79%2FBQ612hzEOTH1b8%2BGu0bSZUflK6TRfiNW&X-Amz-Signature=b3bc471d519751cd57dd50630568a2233d09bad50277152ebb91ee9c5f60811a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
