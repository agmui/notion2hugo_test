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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RTQLLH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BnLzQ%2Fh9cssZ9DispV1BLywBUyr%2FDJOQlQ6X6eHmgMAiEA%2FiAUDyyDRsjhmqajBco0fOHgZnQqU5NeyqWYGyQnCQ0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIgPWqRQ59isIiRFSrcA%2BUc%2Fue1FH9w1r2N%2By1t5VtY7N8imhFj9tZc%2F0wUIp%2F11cDzv2fzB9cezsEeinmvVXb1YeJs0BJQyylolqt3u6rPUNSzDDO88yoMuHf3acwuj%2Fn5g2LwnEST8RB44grKNz%2B0W2n3TxWc%2BMKkyP2dhvSaXGKMgn7AJQE0HdU6NhH4N7M3MGgxfY8Ayh2JEH9mjb5MMhxOJuc4xM%2FWa1LjO7EAX0ySVkEybur1yhsgMUoAQlJKbxDG8225EabziYEYt8ANNwX3Z6IiDdLVIM37DyJ%2B7mdOi%2FjCkNB3aiHe2XQxAEfejz37Fj%2BFlBG3Yk7kxXrfcMK177%2FAX%2Bj5VD5mG0BtnA4zC7VrM0ieGXdlmnw3g%2BKDhgVlRmooe3tQpWMgVCGK6cmRi%2FoBVv7aUzCNKubRIIpSMTn%2F21y8BtVCmKuYPbc6BBGo%2Bkp9lumFttCulCiHumf93NDmhuuBKD6Zfty13tF4IGsIwxe%2BjVws%2FV8hs%2F0Q%2BHRvAsJaJzgYzW7QYYHWRenU5nibfjOfR%2BP1q5Sg7KDRJLL7Ib%2FZa1C35BQU0TPHG2bi8gpIBjXUt8%2B8%2BfT4ea2OLNht54nz2zYMrogKohb1BAfFs4S7gTRRWx3EsXUOZHjj2WCMdiKeMNi1ssQGOqUBoKzV0S5rpNniW0dLZV558bNYqjc0%2FZjFBIXaVKjj%2F7ThQunjFjrv%2BAqWYrbRg2QH0PEk9IV0oM%2Bcfm%2B5beVJ%2Fuh3%2FclR9q%2BzhIorY4KZahw%2BHHPOWKLlGBMGIvUejq5LSEgglc4DT2joG9bs9%2FdibOZeIllXCajwt3eV58yqFou%2BkIuRjQAotEXRy9i9TNqPdtxCGh9YEsuK8GsDRo3%2F2C7rX7EQ&X-Amz-Signature=f107e5694a4fac62a8d03b7ad8c91804acf4407a2a5e488cb972ded03bce4cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RTQLLH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BnLzQ%2Fh9cssZ9DispV1BLywBUyr%2FDJOQlQ6X6eHmgMAiEA%2FiAUDyyDRsjhmqajBco0fOHgZnQqU5NeyqWYGyQnCQ0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIgPWqRQ59isIiRFSrcA%2BUc%2Fue1FH9w1r2N%2By1t5VtY7N8imhFj9tZc%2F0wUIp%2F11cDzv2fzB9cezsEeinmvVXb1YeJs0BJQyylolqt3u6rPUNSzDDO88yoMuHf3acwuj%2Fn5g2LwnEST8RB44grKNz%2B0W2n3TxWc%2BMKkyP2dhvSaXGKMgn7AJQE0HdU6NhH4N7M3MGgxfY8Ayh2JEH9mjb5MMhxOJuc4xM%2FWa1LjO7EAX0ySVkEybur1yhsgMUoAQlJKbxDG8225EabziYEYt8ANNwX3Z6IiDdLVIM37DyJ%2B7mdOi%2FjCkNB3aiHe2XQxAEfejz37Fj%2BFlBG3Yk7kxXrfcMK177%2FAX%2Bj5VD5mG0BtnA4zC7VrM0ieGXdlmnw3g%2BKDhgVlRmooe3tQpWMgVCGK6cmRi%2FoBVv7aUzCNKubRIIpSMTn%2F21y8BtVCmKuYPbc6BBGo%2Bkp9lumFttCulCiHumf93NDmhuuBKD6Zfty13tF4IGsIwxe%2BjVws%2FV8hs%2F0Q%2BHRvAsJaJzgYzW7QYYHWRenU5nibfjOfR%2BP1q5Sg7KDRJLL7Ib%2FZa1C35BQU0TPHG2bi8gpIBjXUt8%2B8%2BfT4ea2OLNht54nz2zYMrogKohb1BAfFs4S7gTRRWx3EsXUOZHjj2WCMdiKeMNi1ssQGOqUBoKzV0S5rpNniW0dLZV558bNYqjc0%2FZjFBIXaVKjj%2F7ThQunjFjrv%2BAqWYrbRg2QH0PEk9IV0oM%2Bcfm%2B5beVJ%2Fuh3%2FclR9q%2BzhIorY4KZahw%2BHHPOWKLlGBMGIvUejq5LSEgglc4DT2joG9bs9%2FdibOZeIllXCajwt3eV58yqFou%2BkIuRjQAotEXRy9i9TNqPdtxCGh9YEsuK8GsDRo3%2F2C7rX7EQ&X-Amz-Signature=03262283c40ab6c5c4a260ce2c95cc0001da83e421959486870da326cc0943e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RTQLLH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BnLzQ%2Fh9cssZ9DispV1BLywBUyr%2FDJOQlQ6X6eHmgMAiEA%2FiAUDyyDRsjhmqajBco0fOHgZnQqU5NeyqWYGyQnCQ0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIgPWqRQ59isIiRFSrcA%2BUc%2Fue1FH9w1r2N%2By1t5VtY7N8imhFj9tZc%2F0wUIp%2F11cDzv2fzB9cezsEeinmvVXb1YeJs0BJQyylolqt3u6rPUNSzDDO88yoMuHf3acwuj%2Fn5g2LwnEST8RB44grKNz%2B0W2n3TxWc%2BMKkyP2dhvSaXGKMgn7AJQE0HdU6NhH4N7M3MGgxfY8Ayh2JEH9mjb5MMhxOJuc4xM%2FWa1LjO7EAX0ySVkEybur1yhsgMUoAQlJKbxDG8225EabziYEYt8ANNwX3Z6IiDdLVIM37DyJ%2B7mdOi%2FjCkNB3aiHe2XQxAEfejz37Fj%2BFlBG3Yk7kxXrfcMK177%2FAX%2Bj5VD5mG0BtnA4zC7VrM0ieGXdlmnw3g%2BKDhgVlRmooe3tQpWMgVCGK6cmRi%2FoBVv7aUzCNKubRIIpSMTn%2F21y8BtVCmKuYPbc6BBGo%2Bkp9lumFttCulCiHumf93NDmhuuBKD6Zfty13tF4IGsIwxe%2BjVws%2FV8hs%2F0Q%2BHRvAsJaJzgYzW7QYYHWRenU5nibfjOfR%2BP1q5Sg7KDRJLL7Ib%2FZa1C35BQU0TPHG2bi8gpIBjXUt8%2B8%2BfT4ea2OLNht54nz2zYMrogKohb1BAfFs4S7gTRRWx3EsXUOZHjj2WCMdiKeMNi1ssQGOqUBoKzV0S5rpNniW0dLZV558bNYqjc0%2FZjFBIXaVKjj%2F7ThQunjFjrv%2BAqWYrbRg2QH0PEk9IV0oM%2Bcfm%2B5beVJ%2Fuh3%2FclR9q%2BzhIorY4KZahw%2BHHPOWKLlGBMGIvUejq5LSEgglc4DT2joG9bs9%2FdibOZeIllXCajwt3eV58yqFou%2BkIuRjQAotEXRy9i9TNqPdtxCGh9YEsuK8GsDRo3%2F2C7rX7EQ&X-Amz-Signature=38503247c702158665ef5b9346a3ccba8fcbf9a797eab93ed0958241d0938e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSDQ5LF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG1UKFXo8CDiB2SMzLJWxI9PxQswCKg2rcqThzFWprmgIgX78WGk5eHgphQ49NP3pKfpuSMl2EbMRGu3Oxg%2BopangqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEG1xS3UDIe5RcvAVyrcA%2F4sm6QR8slCL7hhXeut5%2FfBWLKHVH4AV32HEgCCECbEMepJnC25ODWwzI%2Fb5gxGqbmHLtsBhO9ruAwdu2OhWRJxIoDj3JXU2lVFmCQHmdmWQP54XKJvvxx5%2FvkJFC%2B1wXot7Hv1ORKfu7KJWYhAaDe%2BbG2J2W6FBwVfDWROFwd8DKZue9C1JFyadkMqhaNlZSpoWh9o11TPR0oTvB4aJO69ezqw0nXqtHWl0bbS163srlfcr3ZyBknCSe1%2BNyvxiwJqDd5DW%2Ff0pxJg4IUXdrLQLzRv7QsraVhuYL3xE%2BMYpnEqX5SE8L9xuuCrQ88E7aIdlrG7Gs%2Fnp9FNGa%2BCAcoveJrN4h2ZrN8wbM0m%2FXxs49Ss%2FoJrZXuEuS0hMtdnDCl2ucDdpNV9DB0F7pYTM7PnJNNWN3Xw6MIityKlYKuylh1UVCszLlaA%2FwjxW1sHtBFp3zMFPwU9pWostsDSt6l31Nb1SZP17HOHa8eEhbTt8Gb%2BDthQbdmkWT0S%2BLQiDUUX%2BTyJ5dwvZ20Oz9Fot2yk8go04tWxAhNR%2Ffm8gOy4coxocbf2gzTEgpQtjKd%2BvYhpDMBJWZBFw3LIA0H5r9EFFPjfYhY6kUB%2B2Y0bET%2FqgBBL3qbGPOtyhd5KMIy2ssQGOqUBrQs67zaBRox0J%2BZeQRkVMC9czu0ST1UqQjr4Zo%2BogSY1beN2ccU%2FLsAvIcxIIxeR4lcd3hmoMCHbxN8nqd0M0Np0R623HJdeVVX324XCrkGyoF4c%2BlbmI4aVzIvJ6Hrc16X1zV8f1o1dCXIQWApAP8fUI3B99zN%2FeLjHfdl5syK2O3%2Bs7TmoSaBobmlzVoiZ78mrv1%2F3a4ahbV3hYJt03nm4eGUs&X-Amz-Signature=25551640ad7819cdb6b58046cb02a00422908169275a0319a252f9f7d6b995ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4OFM2V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbWNG67kFEJt7FC%2FUdlIxo0pmXFVjc89qCPm%2BK4Au7JAiEA0Ap97nCYJwD1jaKXR6d2JOwCEttVDXz0E84pan709eoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIcquDjdYNTBCaX3SrcA%2Btvr7pBgSX7mOmJBOmvtaCS0imPH2EH%2FqPv%2B0gyU01oQ6v5lcEFygTWK5tXmogJfMZ3YqsR41XBhWb2SxDDyShOZrxuBL3Q3vokrUB1d8UdtQtb1VHtSCp0Due%2Bv%2F79fThSjw9o97ad0HydbybwQrN0ngYsnp7IOo%2B0gYNjw5cPvtZBJc4u4rXGKOe5ZXpNg3TZgQ%2F4Recs8oNiJuXJC12dL2%2B%2Fuqdo4cVs3Ps0vTuRp6%2F5837ggpG4LcxX0mMv41e7%2B4pg5ZNcCbamwe3nKHBkDvL8EkqfYRt1PR6D7rBuofxhv4l98zTOh0v2V6cuZCVTSKONUTg9aOrN5c2u4IQ70tQHjkSKa7FHCCXBhdxFakju6f2I83NeH1IfhdufiaQGXKgXNEb550wmYijR%2Bhpnwnw7hmlUOUc%2B2FRFK2d%2B3%2BSrpipNL5PT7mTDOMBISC4akraKlLs1H7bELnL2AIvEyFf0tpL2Eij9yu37YLAKEhRgjXMtQCuQkemUQ%2B11t5tbbdvChh0WhD1sKuX5moofmsUKZNZQr7mkUPwO44TVXulcb6UgCwVFFGfu7iZ%2BkCE2giKBtKkCmc58TLuP6zbbRwOeFuHMLgOJUvc3XEbvSsyije0CGqaBxqhjMJe2ssQGOqUBivAEPwN986JjtgnNdtTIvf%2FbtuDda3%2FBKjni72z1mzoM7vDNbhZIRsiXFWGZCE5VOt1ZNJzqn4vwXBvwgCco%2FG8MUc84NXoLtPvEMwGHwZ4%2FQvS7%2B7HA1zrS%2BXP%2FrOFNFeZEsSEA2haUFyKhjvTiCfjjuwX7M3wroX%2FWKT14go48SNvyMXSO9jPzdHT0f0a%2B3yeBZaIWJxRKDyZor5u3Ym6JZ6Ye&X-Amz-Signature=505cfb6bb6e78a36ceffac5326f802b347aefbb0f51eece2f818927e3b54dd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RTQLLH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BnLzQ%2Fh9cssZ9DispV1BLywBUyr%2FDJOQlQ6X6eHmgMAiEA%2FiAUDyyDRsjhmqajBco0fOHgZnQqU5NeyqWYGyQnCQ0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIgPWqRQ59isIiRFSrcA%2BUc%2Fue1FH9w1r2N%2By1t5VtY7N8imhFj9tZc%2F0wUIp%2F11cDzv2fzB9cezsEeinmvVXb1YeJs0BJQyylolqt3u6rPUNSzDDO88yoMuHf3acwuj%2Fn5g2LwnEST8RB44grKNz%2B0W2n3TxWc%2BMKkyP2dhvSaXGKMgn7AJQE0HdU6NhH4N7M3MGgxfY8Ayh2JEH9mjb5MMhxOJuc4xM%2FWa1LjO7EAX0ySVkEybur1yhsgMUoAQlJKbxDG8225EabziYEYt8ANNwX3Z6IiDdLVIM37DyJ%2B7mdOi%2FjCkNB3aiHe2XQxAEfejz37Fj%2BFlBG3Yk7kxXrfcMK177%2FAX%2Bj5VD5mG0BtnA4zC7VrM0ieGXdlmnw3g%2BKDhgVlRmooe3tQpWMgVCGK6cmRi%2FoBVv7aUzCNKubRIIpSMTn%2F21y8BtVCmKuYPbc6BBGo%2Bkp9lumFttCulCiHumf93NDmhuuBKD6Zfty13tF4IGsIwxe%2BjVws%2FV8hs%2F0Q%2BHRvAsJaJzgYzW7QYYHWRenU5nibfjOfR%2BP1q5Sg7KDRJLL7Ib%2FZa1C35BQU0TPHG2bi8gpIBjXUt8%2B8%2BfT4ea2OLNht54nz2zYMrogKohb1BAfFs4S7gTRRWx3EsXUOZHjj2WCMdiKeMNi1ssQGOqUBoKzV0S5rpNniW0dLZV558bNYqjc0%2FZjFBIXaVKjj%2F7ThQunjFjrv%2BAqWYrbRg2QH0PEk9IV0oM%2Bcfm%2B5beVJ%2Fuh3%2FclR9q%2BzhIorY4KZahw%2BHHPOWKLlGBMGIvUejq5LSEgglc4DT2joG9bs9%2FdibOZeIllXCajwt3eV58yqFou%2BkIuRjQAotEXRy9i9TNqPdtxCGh9YEsuK8GsDRo3%2F2C7rX7EQ&X-Amz-Signature=cfd87d55e4af1613612d4243814cfca1917017344c0da466cbfa60fddc269c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
