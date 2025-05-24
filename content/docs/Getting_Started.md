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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDZ2R4U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICXRyJfjAKaG7OtfZxehqGZf2y7y3yxUAkluCVkSyXegAiEAhfThcf%2FRKsCTESFOcxRKQNvQHvFBWF3ipfWvcSej2Z4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDuVmskiP%2BSmJsqXACrcA1VGZ%2ByjQ%2BEZo6CjyvCCpSs6DhvpZSpA0lUr0lN%2FJXu8DBoSyO%2B2IzydPJVUMmVgGeCurYWrubr1I7UoWMQZZgcMnreqeOzNHpp%2Bc4vZMq8KpkRq1ITjmjHcRazxGgfOVNdj4SzsGwlldejhB3xuQZ3fDJFA82TAaSxlvwMbLp%2FoAbmXhbJAwmk3PCeY84q4FTXL1fP5xX9TGjYLACZhDSOIn%2FI%2FDvXtPJdn648LMyu%2Fid9j4r04xUL%2FkL7KIq7IUCA3xtRbpN62aVOZT3XhN2uQV40VfMDTODlGTHZv6tKE943xTFiHwc2WcXDryJ70ASvtJ7ju4RsrApf4uVoxRPCfJ4H%2FoORAiO%2FS%2FiSA25Hx9CkamHx5MNyZQnHxXiUNlcm70s7StR38eKQTIR1VFG4wFciaKZA4SKWRmMyivMw1EzDolJeCV8BfbdQNl5ZSh1mSGksJUpkflJTxVCmqY7H8ulb1Q%2FJkAsTWE4Y7wx58UAhMfQCVKt6%2FTsBM82LZNGoxEimu0BGyujC6YnDMU6JTvmgqP9n9Fp9gXuzloW%2Fo7cBXiCbJiNd8BFX93%2Bt7dl4SBNq27aGd0FVNc5AVBEi7WZ%2FZHGyRllck1Fb8W34Mj3SK9VTVCbzxV42jMK6jxsEGOqUBYV%2FCasLgLofS2gH7WzoQ%2FTUlRkdsEPJCTxdgGF0%2B8U4JaXRmV%2BjPYvn%2Bjaf2gwOb75ea8gKVIIgZ%2FnjDtna06mph8r8KvSAvxwRHbJVq52FS8hNDnnc0eSnaQm7MNYX9yhNVt7A0M9USGwCx8KesEaL1grMJn%2BWfmgXoECdmLDZBJ3OZzfVCIw1ugXkr2LQbgPkXOufLv73gQLkYFSn5ss9Y1Fan&X-Amz-Signature=7cedb903174803b89e70a14f7002caeb0b5894a35dbf5fd58d5231dd455afd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDZ2R4U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICXRyJfjAKaG7OtfZxehqGZf2y7y3yxUAkluCVkSyXegAiEAhfThcf%2FRKsCTESFOcxRKQNvQHvFBWF3ipfWvcSej2Z4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDuVmskiP%2BSmJsqXACrcA1VGZ%2ByjQ%2BEZo6CjyvCCpSs6DhvpZSpA0lUr0lN%2FJXu8DBoSyO%2B2IzydPJVUMmVgGeCurYWrubr1I7UoWMQZZgcMnreqeOzNHpp%2Bc4vZMq8KpkRq1ITjmjHcRazxGgfOVNdj4SzsGwlldejhB3xuQZ3fDJFA82TAaSxlvwMbLp%2FoAbmXhbJAwmk3PCeY84q4FTXL1fP5xX9TGjYLACZhDSOIn%2FI%2FDvXtPJdn648LMyu%2Fid9j4r04xUL%2FkL7KIq7IUCA3xtRbpN62aVOZT3XhN2uQV40VfMDTODlGTHZv6tKE943xTFiHwc2WcXDryJ70ASvtJ7ju4RsrApf4uVoxRPCfJ4H%2FoORAiO%2FS%2FiSA25Hx9CkamHx5MNyZQnHxXiUNlcm70s7StR38eKQTIR1VFG4wFciaKZA4SKWRmMyivMw1EzDolJeCV8BfbdQNl5ZSh1mSGksJUpkflJTxVCmqY7H8ulb1Q%2FJkAsTWE4Y7wx58UAhMfQCVKt6%2FTsBM82LZNGoxEimu0BGyujC6YnDMU6JTvmgqP9n9Fp9gXuzloW%2Fo7cBXiCbJiNd8BFX93%2Bt7dl4SBNq27aGd0FVNc5AVBEi7WZ%2FZHGyRllck1Fb8W34Mj3SK9VTVCbzxV42jMK6jxsEGOqUBYV%2FCasLgLofS2gH7WzoQ%2FTUlRkdsEPJCTxdgGF0%2B8U4JaXRmV%2BjPYvn%2Bjaf2gwOb75ea8gKVIIgZ%2FnjDtna06mph8r8KvSAvxwRHbJVq52FS8hNDnnc0eSnaQm7MNYX9yhNVt7A0M9USGwCx8KesEaL1grMJn%2BWfmgXoECdmLDZBJ3OZzfVCIw1ugXkr2LQbgPkXOufLv73gQLkYFSn5ss9Y1Fan&X-Amz-Signature=145c9b3a4fd83258fb4cdf5e0a4aa379b6282b1269b89779363e4846c4245ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDZ2R4U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICXRyJfjAKaG7OtfZxehqGZf2y7y3yxUAkluCVkSyXegAiEAhfThcf%2FRKsCTESFOcxRKQNvQHvFBWF3ipfWvcSej2Z4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDuVmskiP%2BSmJsqXACrcA1VGZ%2ByjQ%2BEZo6CjyvCCpSs6DhvpZSpA0lUr0lN%2FJXu8DBoSyO%2B2IzydPJVUMmVgGeCurYWrubr1I7UoWMQZZgcMnreqeOzNHpp%2Bc4vZMq8KpkRq1ITjmjHcRazxGgfOVNdj4SzsGwlldejhB3xuQZ3fDJFA82TAaSxlvwMbLp%2FoAbmXhbJAwmk3PCeY84q4FTXL1fP5xX9TGjYLACZhDSOIn%2FI%2FDvXtPJdn648LMyu%2Fid9j4r04xUL%2FkL7KIq7IUCA3xtRbpN62aVOZT3XhN2uQV40VfMDTODlGTHZv6tKE943xTFiHwc2WcXDryJ70ASvtJ7ju4RsrApf4uVoxRPCfJ4H%2FoORAiO%2FS%2FiSA25Hx9CkamHx5MNyZQnHxXiUNlcm70s7StR38eKQTIR1VFG4wFciaKZA4SKWRmMyivMw1EzDolJeCV8BfbdQNl5ZSh1mSGksJUpkflJTxVCmqY7H8ulb1Q%2FJkAsTWE4Y7wx58UAhMfQCVKt6%2FTsBM82LZNGoxEimu0BGyujC6YnDMU6JTvmgqP9n9Fp9gXuzloW%2Fo7cBXiCbJiNd8BFX93%2Bt7dl4SBNq27aGd0FVNc5AVBEi7WZ%2FZHGyRllck1Fb8W34Mj3SK9VTVCbzxV42jMK6jxsEGOqUBYV%2FCasLgLofS2gH7WzoQ%2FTUlRkdsEPJCTxdgGF0%2B8U4JaXRmV%2BjPYvn%2Bjaf2gwOb75ea8gKVIIgZ%2FnjDtna06mph8r8KvSAvxwRHbJVq52FS8hNDnnc0eSnaQm7MNYX9yhNVt7A0M9USGwCx8KesEaL1grMJn%2BWfmgXoECdmLDZBJ3OZzfVCIw1ugXkr2LQbgPkXOufLv73gQLkYFSn5ss9Y1Fan&X-Amz-Signature=1a47a7c73af752da7b1fe572a89fc3a392c410bc0a97b3df77878d9f72bc1cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPK34JG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDsd%2BY6nSN7M3KF55OO4mZTPNNIHozsHYyqzLnXVahaJQIhAK3rOIQQkYEyBadq7q%2FjcWMnh8pRmrzxx2YuoELAHvG4Kv8DCBcQABoMNjM3NDIzMTgzODA1IgxxEVZBLgpJQIcTJ6Eq3AO9TF36b8YoKDy3K8YTQSDibp3pxUHhoYpBaK1CBhpu2COG4o6zjH7i79SCdRtQkQAIPYo%2FtjpJOI3Yv4GhPF471agaurKVjmpo8z9sgimTRHlAl3%2BTHwhkZBBCvULuKBO0JUZSl8BhX3fT5e0ygMLy%2Fw1fHZoaOmQ1O4Z4sTG2QOpxJ4KasOEQyRdZq7uOVLajy0mEqTrAyf1wfi0%2Bsg8jGpNsot%2BqJM0sF7w9iDLxJwNBReab073PffPGfaa2nEepwZA2UyyBohJ0PF1nkfflW4ynbKxHg3OZ18JAJCpoDlocYF%2Bsrj9YvANQFWNwPgYqSSCVlgbVRVlx35HlVWSRZlW%2BKPMdkFbMzhll2Xke8%2FyxY3oEj9kgmcjQnzS3N%2B86Ie9oC4xw%2BcOa4RUh8XY33UtlIkjjdps22dkvsjIBywMo%2BybtdLXwX1Nrm2iQ1YqVndEETz9yNemC0em1uIllKM9loSdgARkHulcfJG0wsDtpgQfpACwK3Jv6rEFoayC8ft2djKmhAFAyUUgO%2ByZd62cj4qBTmb4PAu9jMScgh87Ay6Qxo31trChiDYDVv0D4%2Fdr3bhr%2BJTrosVAI3whKkzXeBjR4B4acdzj022wGYQ%2FqGhu1%2FExWRVpXMjDtm8fBBjqkASBuEsy2vOCjGWdzSSTgKqAf4Yc13xyiSgLY0%2FUX8UIWgaOh0c5KcQ6j%2FhKJGX%2BqEaH1qIIBuo22Z8GCYEiNTiMVZkrk8Mtslwg6rHkR7N13G%2BupGKIgSX1a2jiCTOq87GWRmTQijf3%2Bjy3aEbv8uyNwy1OJIr3jwrGDm%2BFQ3a8B3i60kJ%2FEGoYl5LVt0d2usai6dgAEWQ9srAVpInd3toN%2BW%2FY1&X-Amz-Signature=bcc0876631b4bad7c41068652913e3440007655d0d667ee006661e43a60ad6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCES53NE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDXFM7poioa87z5%2B7jfS7KpRSPu53KHOesD11ACervJqAiEA2q3Nu5feqZ6bLvlXLLqnlW6z7%2F4tomQ6objUH3aDUmMq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKRlc9ve5lPGHXtewyrcA21wqxc8RWmucP%2FVHKcfzk50uK%2BUZBuj4k8cddYJ64pUnEIM7DqzHo%2FXY7OB5MxmTaJnVhLmvOMSjjHy6vqhtkqzMWYcN%2BfWGxL%2FO2VSg03KrncuzisWkyRD050CbbdDHuTDDLmBOudiazG3MdbfcKt0dg0pfZWHvlVj%2BZSA24E0IvxBi6FXFycP2sewnLU6GbjgUhpJfzXKeWp1S8YGqedgRZ%2Bbyt9FfZwcck0GCHTJdhqG1WIHoHzI4SH1n1XEYSbCPPNcr6VfbgIzxXFxFoIkGgDYd0fMTn%2FDVeEEACWTcj0A6Dto%2Fxt1uEU6mGuTqwrgb8Cy9gcZN0Rik%2Ba%2BdqkEJwqi9k3EyoRO0w4v4QzmUi6acqr3Pp1J7aj0BBEru3gU%2FCeQ%2FQckcZ4EytxU0LYnWuaPRwt%2FNi0YBpQxfHaNabsLmCpc%2BleDoR3NDm0BWRoZdCUVodZ8UtUe%2BkWsWpD12WBI%2BlDTpkKNW3Bo%2F%2F0jgYFccT9052QwsDELBbEDbMuDqI39tsSGJv%2BNJdu%2FTPNtWx2DySKEA%2F4f%2BqzqUwk3%2BrKI99YxxcJw2%2FKU0NocBwKj0A1mLSeHMUGPcmyBkxWgGCul0q9Rw2gs6vnoNVL0xjDn68O1OHfM77ufMPWZx8EGOqUBuVORQb5f2LjgoZ4AJggi5oUwjSsVTTSH3BiO1rnbk2zLTOm88ZkC0jKL7XPjk5J3e%2Fd71VJ0%2Byqj%2B2dsfnA%2BKRH4g53bBVDQ%2FcKRxi3SDeKvVrPH9AcFjL4IX0bT3U1GGIMYGN7jseYmLsuXXWc%2F5Ufe22E3hjNiH3eiv%2BjEQqBlLDuBJBdkCjBw714s7%2BRRtG2mxrmmmUBUNCDRYxKtwc773k8V&X-Amz-Signature=9816a107038fd76efc8cabac9f9985d8875cadfcf91ed83d1b3f1def8a957e51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDZ2R4U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICXRyJfjAKaG7OtfZxehqGZf2y7y3yxUAkluCVkSyXegAiEAhfThcf%2FRKsCTESFOcxRKQNvQHvFBWF3ipfWvcSej2Z4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDuVmskiP%2BSmJsqXACrcA1VGZ%2ByjQ%2BEZo6CjyvCCpSs6DhvpZSpA0lUr0lN%2FJXu8DBoSyO%2B2IzydPJVUMmVgGeCurYWrubr1I7UoWMQZZgcMnreqeOzNHpp%2Bc4vZMq8KpkRq1ITjmjHcRazxGgfOVNdj4SzsGwlldejhB3xuQZ3fDJFA82TAaSxlvwMbLp%2FoAbmXhbJAwmk3PCeY84q4FTXL1fP5xX9TGjYLACZhDSOIn%2FI%2FDvXtPJdn648LMyu%2Fid9j4r04xUL%2FkL7KIq7IUCA3xtRbpN62aVOZT3XhN2uQV40VfMDTODlGTHZv6tKE943xTFiHwc2WcXDryJ70ASvtJ7ju4RsrApf4uVoxRPCfJ4H%2FoORAiO%2FS%2FiSA25Hx9CkamHx5MNyZQnHxXiUNlcm70s7StR38eKQTIR1VFG4wFciaKZA4SKWRmMyivMw1EzDolJeCV8BfbdQNl5ZSh1mSGksJUpkflJTxVCmqY7H8ulb1Q%2FJkAsTWE4Y7wx58UAhMfQCVKt6%2FTsBM82LZNGoxEimu0BGyujC6YnDMU6JTvmgqP9n9Fp9gXuzloW%2Fo7cBXiCbJiNd8BFX93%2Bt7dl4SBNq27aGd0FVNc5AVBEi7WZ%2FZHGyRllck1Fb8W34Mj3SK9VTVCbzxV42jMK6jxsEGOqUBYV%2FCasLgLofS2gH7WzoQ%2FTUlRkdsEPJCTxdgGF0%2B8U4JaXRmV%2BjPYvn%2Bjaf2gwOb75ea8gKVIIgZ%2FnjDtna06mph8r8KvSAvxwRHbJVq52FS8hNDnnc0eSnaQm7MNYX9yhNVt7A0M9USGwCx8KesEaL1grMJn%2BWfmgXoECdmLDZBJ3OZzfVCIw1ugXkr2LQbgPkXOufLv73gQLkYFSn5ss9Y1Fan&X-Amz-Signature=0c0bd5eb8a8618bb6359d97615e86236b5d248a2f02fd2151d07672fe5bf891c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
