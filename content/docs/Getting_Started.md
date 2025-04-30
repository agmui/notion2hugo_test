---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDJSN5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJi06LTCAas68wQuAgzjq9FzQGXmbt0koDRlJMvvqJkAiBF%2FF94F2FjSCNrqwbcQPoM1VeZNqLy4UeVlPcmQMJ9QiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtid2Xq8kxSSVf82ZKtwD44j%2BFFrOQhUTFj6qSVQPf7ACWlawDYLVWUmRUXhjD4%2BKR0ObjkRXnSQ0rZ5oiV7%2BKskdXPrRRjuoG2R6YXvTd0B3UsqT9CISc0ghJiLtJK2%2BPCMtskxyfgd1DOpAahewe3sIP%2FAZd98Ha2%2FMqhXdgzbmohGXKtxFX4uDGkgqKyEP9hH0y99FPgl1uj1LwIGXlZ%2BXHxdMtXbqhAqyWqfjHpjLZ%2FO3z2k6sPmhGXwiqt%2FxRp%2FpGLhiP918jvpEBLN%2BKSXwJa6Y3QR2%2B2FTbiHAqEtCwvDT372%2FutF5UqtzeQKlC36e5dmfFEgMsTBy6QiDF6X5CRIR9dYDtFIOJvTAwJ3uX0G9nmI9oTqfiO4Dx1AkifJz3QvfaoATaKEwkLD5E1ALegHfFgRz7R24W0sO3x676J56Gv00Y69LLZfX2XBoxuF0PW0VvBJpIs1ppLAJkLBP2rcj414wsg4Sy%2BUqSRoWFCPobUKsPeF28jZLyF%2BUwd22wrh3Zkvutiq7siQMFNzvyMB4n%2B2IJL16VM5RR5lRaikfN8HAl%2B%2Fb4tgm9ht0DddN4HC8nDcn5IXbxtHvAXNr8gReO1peFortSLSMm25jdyTJndSJb21L7INKmKpSH%2B4iS6yf4t6V3Z8w4dvGwAY6pgHgFENC%2BOXuC6caL533EabdKSAmyF8Ba6%2FGR3Wpiottenau%2FlxV6flVH9pfWjoe2X7tXhs8U0bHNvVRznb75VOVzqMeRyv%2BZxgq0H5Bb2FSbQ%2BzNqLU3jo342jFY%2FcAFlQ63iUt6DHY1zmkv59sk5t2jNngSAPP3mx7ZNybrYBlLeiF%2Fyun9PrVRvmejdutn7HRgfsWdX9ejtzDNVUeqeEekDXmUHqH&X-Amz-Signature=f1a07ab99883eac1531dc07427e9bfe50d38ca7acf325ccf41ed90da5eb673d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDJSN5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJi06LTCAas68wQuAgzjq9FzQGXmbt0koDRlJMvvqJkAiBF%2FF94F2FjSCNrqwbcQPoM1VeZNqLy4UeVlPcmQMJ9QiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtid2Xq8kxSSVf82ZKtwD44j%2BFFrOQhUTFj6qSVQPf7ACWlawDYLVWUmRUXhjD4%2BKR0ObjkRXnSQ0rZ5oiV7%2BKskdXPrRRjuoG2R6YXvTd0B3UsqT9CISc0ghJiLtJK2%2BPCMtskxyfgd1DOpAahewe3sIP%2FAZd98Ha2%2FMqhXdgzbmohGXKtxFX4uDGkgqKyEP9hH0y99FPgl1uj1LwIGXlZ%2BXHxdMtXbqhAqyWqfjHpjLZ%2FO3z2k6sPmhGXwiqt%2FxRp%2FpGLhiP918jvpEBLN%2BKSXwJa6Y3QR2%2B2FTbiHAqEtCwvDT372%2FutF5UqtzeQKlC36e5dmfFEgMsTBy6QiDF6X5CRIR9dYDtFIOJvTAwJ3uX0G9nmI9oTqfiO4Dx1AkifJz3QvfaoATaKEwkLD5E1ALegHfFgRz7R24W0sO3x676J56Gv00Y69LLZfX2XBoxuF0PW0VvBJpIs1ppLAJkLBP2rcj414wsg4Sy%2BUqSRoWFCPobUKsPeF28jZLyF%2BUwd22wrh3Zkvutiq7siQMFNzvyMB4n%2B2IJL16VM5RR5lRaikfN8HAl%2B%2Fb4tgm9ht0DddN4HC8nDcn5IXbxtHvAXNr8gReO1peFortSLSMm25jdyTJndSJb21L7INKmKpSH%2B4iS6yf4t6V3Z8w4dvGwAY6pgHgFENC%2BOXuC6caL533EabdKSAmyF8Ba6%2FGR3Wpiottenau%2FlxV6flVH9pfWjoe2X7tXhs8U0bHNvVRznb75VOVzqMeRyv%2BZxgq0H5Bb2FSbQ%2BzNqLU3jo342jFY%2FcAFlQ63iUt6DHY1zmkv59sk5t2jNngSAPP3mx7ZNybrYBlLeiF%2Fyun9PrVRvmejdutn7HRgfsWdX9ejtzDNVUeqeEekDXmUHqH&X-Amz-Signature=8eeeece2b1130cee99915abaef5c0ff314ba7f98760030fc24e9be69c9a62127&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDJSN5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJi06LTCAas68wQuAgzjq9FzQGXmbt0koDRlJMvvqJkAiBF%2FF94F2FjSCNrqwbcQPoM1VeZNqLy4UeVlPcmQMJ9QiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtid2Xq8kxSSVf82ZKtwD44j%2BFFrOQhUTFj6qSVQPf7ACWlawDYLVWUmRUXhjD4%2BKR0ObjkRXnSQ0rZ5oiV7%2BKskdXPrRRjuoG2R6YXvTd0B3UsqT9CISc0ghJiLtJK2%2BPCMtskxyfgd1DOpAahewe3sIP%2FAZd98Ha2%2FMqhXdgzbmohGXKtxFX4uDGkgqKyEP9hH0y99FPgl1uj1LwIGXlZ%2BXHxdMtXbqhAqyWqfjHpjLZ%2FO3z2k6sPmhGXwiqt%2FxRp%2FpGLhiP918jvpEBLN%2BKSXwJa6Y3QR2%2B2FTbiHAqEtCwvDT372%2FutF5UqtzeQKlC36e5dmfFEgMsTBy6QiDF6X5CRIR9dYDtFIOJvTAwJ3uX0G9nmI9oTqfiO4Dx1AkifJz3QvfaoATaKEwkLD5E1ALegHfFgRz7R24W0sO3x676J56Gv00Y69LLZfX2XBoxuF0PW0VvBJpIs1ppLAJkLBP2rcj414wsg4Sy%2BUqSRoWFCPobUKsPeF28jZLyF%2BUwd22wrh3Zkvutiq7siQMFNzvyMB4n%2B2IJL16VM5RR5lRaikfN8HAl%2B%2Fb4tgm9ht0DddN4HC8nDcn5IXbxtHvAXNr8gReO1peFortSLSMm25jdyTJndSJb21L7INKmKpSH%2B4iS6yf4t6V3Z8w4dvGwAY6pgHgFENC%2BOXuC6caL533EabdKSAmyF8Ba6%2FGR3Wpiottenau%2FlxV6flVH9pfWjoe2X7tXhs8U0bHNvVRznb75VOVzqMeRyv%2BZxgq0H5Bb2FSbQ%2BzNqLU3jo342jFY%2FcAFlQ63iUt6DHY1zmkv59sk5t2jNngSAPP3mx7ZNybrYBlLeiF%2Fyun9PrVRvmejdutn7HRgfsWdX9ejtzDNVUeqeEekDXmUHqH&X-Amz-Signature=68eae76549a6f6a30d3877153698059fced71abfbd366cad664330880fcfa59d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QWJJGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA7FQr2m7QOK7VzrNu0epasmaTLMJWouCTMuUSyvQ1mfAiB1OUY7eC0LXZcs%2F3C2dvsLcXHlzUR1pT4rqP72G%2F%2FOSCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr5eCNf0%2F7kDyIj4KtwDRfO9M4apowBRiL5oJOCgxjYLkCHy3g%2FG7obZe40CVqqyN7xjBhxHxoYAYxXz9R7RvGvE7kiKWfEow3nEbGp0oa8Sqsat39rsSgOforzmTI04Wg0LuGcItMCrhuxSdNWmwmRqGkkiRpQZBrGNPlz5IJhGtlRY4Qsu1pvNdLRlY2ZK2picR9XA7TJ3MuOvhO1mofO1hxuOAnTFL5XeTi97RXuwZPUme%2B19bvCyEoN3ySNhNrTXFTpw%2BJ6fvxrP2P9UqBe7HNWkmCgHT0y7%2Bc7clVEzvTISdAy2KqGfWPtMHqKmbXadS93aWztXR%2BVHmeFOryBXFkSux1ScOcDHF9eUJWrnW%2F5YKhSU%2FAMM6w%2BaRO%2Bh2PPZTlSC%2FesAu0LyJ3fw7mjsjSkEY3j805KEmu514pBg7YK7QegVmilHbJcH2u2endFn8qE%2FqicIQCZDBr5to5pBqgGvzb6tBnCTev8uUk0GgZ9tJbP421K%2BLdkXmWEvuADseYpdkEFzklGjKwUxq16dCTuHhCPupaAz20qWQ6rrYCNBBTtZp9RFb%2Fh1gc7Wa3xRHT2xFQQOKG8JFBtHGhZcCSTs78DVm4EQLXNgxEVmBD6dOCvYtbrAKXqwUPdfoP%2F4QlAezyP%2FDtkwrtzGwAY6pgGun2lOmQVaVdM%2ByWoLdIDQFPdqTiEYsYU0%2BgU%2BjAj%2F4WrnI3%2FbfFvX7EWZnrVDl0q6gCzaMFpUq7xQt%2FwSVYfLD%2BNwzZxZ13SUeoeQAQrT2yO5AzQa%2FcRoV%2FH8vq1qknfVYyzC4c51NHsi%2Be1fNAYP3pGtvNK5B5sa0PbsGznUbKhvNQaTYECxVVSL1KY6KFWvfhNkJowWblaVZW8glytTtlrNgIab&X-Amz-Signature=a3db60d60bde1d86c7900f3fcfe11fa225b6aabf66fa2d026e9395d6e580678e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD5QORS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBroVnKcLh%2Flii1OYjbVv0HqXop2NFuUchBcQWu3YLQPAiAfj9Wuqn0c7dwUpxcBKX7FC62UUW2XwbY0EqBO85QHliqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqnhiLieNo7PetCb%2BKtwDscPR3631sHfo8%2FtfJdK85NcfR3xDCIeerYvDMilqgTd6ufs6LN7uLyqgbuPbxT1u2fp5wadtBVUwQCun%2B2lDar%2F8zZDSWRQNqPLc%2FKvYq5IhwWAzJre6NUIbH%2BJH40xXXYFsqeBW%2Fr0yy%2BPGjsYF9Vgt%2Bq%2BVM0eRxVvPducp2rrRcbWC7XTUYLVK%2BTXwTcoktoJR%2FWP6czubnpsjIko4Lc9R2YNcw5gaNL0PBBFAO%2FYiLcNPdMDmcp9qoEP%2F5Ak1%2F%2Ffo%2BuUiSa6SGxUopAjY%2BMLHQUFtUAlUGtroGV8fHaNsMumtj6MDraIqiF%2Bj5ZGHHZmJp8%2Fl%2BU5O6YdUwnaHL%2BsFGKQcGxwgkhEjOwHZgOWuIa5gO7Dww0HE7HsVGaqtyFT3PRyG2Oje9cHjz8N8o0x1g9zNVXy52f1a6gxAE%2BvpEu2QnP%2BCZnBiUpZhflBENpMvjKjCKF2zmS%2FQa4bH5taKZ9Ac6KJL%2Bfc31pmqy2XVZ11C7swDFLPf7BjpWCM2cfPoQP9AIa7Bwt0ReE7mEnfZ02mxvRl7n4DT9IBOgjgyTcPKhZP%2FSthHKBGx8yxsqhgGNGnasD2GUAJxte2A95NRld6Q2XvqpIZXIOl90KYFVZxZ179D3vaC2NkwktzGwAY6pgExJQzIdkYsme1dtRH7jyCKWB%2B3ZQx0ivzlxLqdfBk8beMWhIAXpRY9zOUsBiBH%2BgiCq2n3SW9cm4Yi0iIGCU51IKY%2BJeR4DxQ0P794vEZJR5wp03soPnxhTCoa9PVCQwQgK%2BNxzFkd3RAaxgPAYBfCIhkcwlO5A3kB55yo4OSK7X50F%2FqS2RKhIUpDYN%2BpSI2lRycK8yaFil2fvi70OLAL4TQXzLxN&X-Amz-Signature=19d0e477f3f78d2c827c2fdc0a006437d87dd5ebdeb925150330f92238255fde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDJSN5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJi06LTCAas68wQuAgzjq9FzQGXmbt0koDRlJMvvqJkAiBF%2FF94F2FjSCNrqwbcQPoM1VeZNqLy4UeVlPcmQMJ9QiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtid2Xq8kxSSVf82ZKtwD44j%2BFFrOQhUTFj6qSVQPf7ACWlawDYLVWUmRUXhjD4%2BKR0ObjkRXnSQ0rZ5oiV7%2BKskdXPrRRjuoG2R6YXvTd0B3UsqT9CISc0ghJiLtJK2%2BPCMtskxyfgd1DOpAahewe3sIP%2FAZd98Ha2%2FMqhXdgzbmohGXKtxFX4uDGkgqKyEP9hH0y99FPgl1uj1LwIGXlZ%2BXHxdMtXbqhAqyWqfjHpjLZ%2FO3z2k6sPmhGXwiqt%2FxRp%2FpGLhiP918jvpEBLN%2BKSXwJa6Y3QR2%2B2FTbiHAqEtCwvDT372%2FutF5UqtzeQKlC36e5dmfFEgMsTBy6QiDF6X5CRIR9dYDtFIOJvTAwJ3uX0G9nmI9oTqfiO4Dx1AkifJz3QvfaoATaKEwkLD5E1ALegHfFgRz7R24W0sO3x676J56Gv00Y69LLZfX2XBoxuF0PW0VvBJpIs1ppLAJkLBP2rcj414wsg4Sy%2BUqSRoWFCPobUKsPeF28jZLyF%2BUwd22wrh3Zkvutiq7siQMFNzvyMB4n%2B2IJL16VM5RR5lRaikfN8HAl%2B%2Fb4tgm9ht0DddN4HC8nDcn5IXbxtHvAXNr8gReO1peFortSLSMm25jdyTJndSJb21L7INKmKpSH%2B4iS6yf4t6V3Z8w4dvGwAY6pgHgFENC%2BOXuC6caL533EabdKSAmyF8Ba6%2FGR3Wpiottenau%2FlxV6flVH9pfWjoe2X7tXhs8U0bHNvVRznb75VOVzqMeRyv%2BZxgq0H5Bb2FSbQ%2BzNqLU3jo342jFY%2FcAFlQ63iUt6DHY1zmkv59sk5t2jNngSAPP3mx7ZNybrYBlLeiF%2Fyun9PrVRvmejdutn7HRgfsWdX9ejtzDNVUeqeEekDXmUHqH&X-Amz-Signature=b64530733204c180dfa546ee61764d93f17bcf817f5af360d9c216b931409663&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
