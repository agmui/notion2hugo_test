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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRBJYK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgG6Igpy0sSApKaI3cqiD8XVezdEVwtKduHw0X71hTcAiEAx36ygsaFb99tOftiBut%2FP3GgLpJT9VktZoxs9%2BIDhdcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvbA3L6Rq1T3wOLSrcAxtgSK%2FbpEtNVdvBBU3Mn2DMTmVFXl%2FxszH2FKWLdsUEEVSRvDHeGyGN6rsuBMWBF%2BHKH2i7xuekT2griRGy065SM5Ngv9bet9zDj170BV4VlaqnBLGoT0188yB8KhsSDZnY7KBztNbeeqWXFd71VJaCHf5eL%2F4t%2BJSS3c7ckU7oTxD2ENJjoaw3kKnuY6PHjEJncnF%2BoryauSLgKpOMWjSFf41JNda9tHmz65pGa3FErv7fzk0sXlefAAxqLHjGxdTcCr6cS1dbErf0EJT4tbv%2FwZhgN%2BBkG91i5ucN3DqVXd1n8c2MIO85rs1v0iFejq0XUPoHanUqfgcE2oB73czaO03QZqf1hoHRGo2dK6ETBGauZHhYuuu4iuK1JIhCqmCemDFS2Rww6KkaJ4qT7e%2FO5qeqqrENojqPnwc0wxE0yjA%2BHj4hQt2aR8rp5m0wd9srU0gJ6lsVA4IgIrusWgue9IHZozL1FLWQLZvRj%2BgzSyVgLOLmt8T5kj4ggX5%2BrLsTsHTrfvoebutSLZGXd8uKaZDeJW6IdMopLuQrsPLwF0mYT5QB0cOBiH9TM4mzCRsKw2DXOqTEMmeNxnfhleA43%2BdFV%2FU%2B1Uhgr6SKqnM1bOMIGSo%2BogwG%2FZlJMJ216r0GOqUBbxTxcEUl6Kz1Rt438VIf3A9zBZjTSA4ez6FNjxq1XNtQ57eODk577B5GzSw42oQXDjVGQpwr1%2FiIq5n%2F6kqYwlr%2BhNoutGf8Q70GXDKVU2r8M85IGw1TVm4bYhrU2MwgVGcRtlYAAfciuzFIRKZb48lcPHz%2Bv7FshZNgqMde4E9Wt8kzm9iHTrliTB3FWiRNjWKcGSi7P%2FLW%2BSE9GFVam8cFX1Vj&X-Amz-Signature=25d7d681f9dbc786cd36600a9f491dd70770d76abd0ed329a29eb6d5ffbda535&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRBJYK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgG6Igpy0sSApKaI3cqiD8XVezdEVwtKduHw0X71hTcAiEAx36ygsaFb99tOftiBut%2FP3GgLpJT9VktZoxs9%2BIDhdcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvbA3L6Rq1T3wOLSrcAxtgSK%2FbpEtNVdvBBU3Mn2DMTmVFXl%2FxszH2FKWLdsUEEVSRvDHeGyGN6rsuBMWBF%2BHKH2i7xuekT2griRGy065SM5Ngv9bet9zDj170BV4VlaqnBLGoT0188yB8KhsSDZnY7KBztNbeeqWXFd71VJaCHf5eL%2F4t%2BJSS3c7ckU7oTxD2ENJjoaw3kKnuY6PHjEJncnF%2BoryauSLgKpOMWjSFf41JNda9tHmz65pGa3FErv7fzk0sXlefAAxqLHjGxdTcCr6cS1dbErf0EJT4tbv%2FwZhgN%2BBkG91i5ucN3DqVXd1n8c2MIO85rs1v0iFejq0XUPoHanUqfgcE2oB73czaO03QZqf1hoHRGo2dK6ETBGauZHhYuuu4iuK1JIhCqmCemDFS2Rww6KkaJ4qT7e%2FO5qeqqrENojqPnwc0wxE0yjA%2BHj4hQt2aR8rp5m0wd9srU0gJ6lsVA4IgIrusWgue9IHZozL1FLWQLZvRj%2BgzSyVgLOLmt8T5kj4ggX5%2BrLsTsHTrfvoebutSLZGXd8uKaZDeJW6IdMopLuQrsPLwF0mYT5QB0cOBiH9TM4mzCRsKw2DXOqTEMmeNxnfhleA43%2BdFV%2FU%2B1Uhgr6SKqnM1bOMIGSo%2BogwG%2FZlJMJ216r0GOqUBbxTxcEUl6Kz1Rt438VIf3A9zBZjTSA4ez6FNjxq1XNtQ57eODk577B5GzSw42oQXDjVGQpwr1%2FiIq5n%2F6kqYwlr%2BhNoutGf8Q70GXDKVU2r8M85IGw1TVm4bYhrU2MwgVGcRtlYAAfciuzFIRKZb48lcPHz%2Bv7FshZNgqMde4E9Wt8kzm9iHTrliTB3FWiRNjWKcGSi7P%2FLW%2BSE9GFVam8cFX1Vj&X-Amz-Signature=2f9dfd7ca0f972846ce54ea8e6b72fa50ee6280456490bdc31e7c988c9b7cb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOOSDVS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCskVBUW5HHXJj%2FWhrFTJCnPb4PvAUQ9jdJc2b2PGfU6QIhAMpQbgrL9DBz7mVrMVAaQDa%2Fph3PxkM8%2FqjQeFAGxOPyKv8DCBAQABoMNjM3NDIzMTgzODA1IgwEnR7ZdFsy2tbC1gUq3AOluMdVvsj5JKme3DLBphUwKhMIdP9xpmPHaq0kecTGV6KDHiD7VC03v2xTluJ3FC5d0%2BpoRtY6cpErXbD56Mt2%2B93ROiRhmP9HsF4lqm44xnzIxeUnWicU6turpQKKcoPTCBpHn5hnDgM6uhRj1dqF18c8QpNX1TbHU9%2FWzHG%2F4Lr3GIBN%2BbAWDLT9UqWG3r7RgUeMv%2Bhxd8OKp%2FjP8Zpyy04ACTBKbNjMUkkHexu%2BBM107e7fDpcuPqMsMEigvNQ0lK2OB4rjvUvmCyK2PhTWSsg7rPJ04ZWgAXxxM%2B%2Ffey%2BISx8a6C1EPHQTDdclg0bBn8dy14cywG66j50G8jzr3PzNVYUkjPhEr0vtvJY8Hg6Ut2HAOPvisR4VFunTzlggFfUZLsfYPoEMfAyjJOh2ig%2BV2zQnZxZQrIeHU8cRwAlCn%2BVQf13dGm7RxOHKEjVRQkgTCUD3U4JsMKxZDqB86pT%2FWcZjsbCOXDXVJPgMg344%2BNM26GH0TMlM1r2CNLT7vAX5Qeb2VosWNCnUPL4ltgteSxESeXzGj2Xw77p%2Fs0wAKZuVzuRD9qTv4qcZFnigfAJ2dzEajtp2mKx9YlMfau357F8HSH8E77mo%2FGx9jPyUhHluTp3Hio3wUTCah%2Bu9BjqkAX85dVMHG33Ee%2BWp7Fc32ruif%2BL6Z2onTXvvWmBeEfQ9RPBiX6CNxJyNJwH8wV6C%2BFUpdo6Vs6ASH5L4tgqAU%2FrtpQupuo7e6XtcXHYiHClblTjFtrEhfWrFe4WqZg07kwu%2FvV4TGGnVtDTkrT%2BG3NNtTtel4mpz8o4iizr%2BAkE5II2ozQWCsYbze0ysaemfU6oJDpmZntgSlR5xkq2ti6cgtvBq&X-Amz-Signature=ed3216e6b7c8b06e98d0a7a80e3b3aff81bb012fdac26c9d1a850aeb1c52d790&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DFPMWZV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFraSUZ%2FkTCXPUa9WmViowzqBYBBq3RFoTaO9opKL1I8AiEAw%2FQh1L7xqxiF2p1r%2FwIg1IeRgFbElmN0K7X3BGBoykkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA73fqpK1CbpU6wuSrcAyVifQUnV83k3cKeovl1nMFaT3kjzgIUtP2fshwgHXSatkH1nGqXuwOs%2BkImZBIpgJlA9coS9F7lTI%2F8xq%2BkgxFg0q9%2BuTU0WdsUWavPYn0PPcnlb%2BTLow3GgL9idqUoIpXhIN%2Fc8SWHDHpdIj0lOmV9%2Fk6%2BnX0Bba3v%2BoPgLDftJJlOGMHM2%2F8mrPH%2B47BLUlFUAgoaH7gfnDOGIDVbjtC4Maxa5olYO5vkDdjpOKsU9yPCAMKDDTFytprxii7PeYOfavEYc%2FiWyAzIsTCsxqHH1Ns4fyAVOIyT2KaS1RQYgb3kMZhCL3zPV97T3M6iuhj0BahbDsvOQucl%2BwMLCYWBrcJQu%2FuNx722YjcLqqzjTAndbvQjouH3qpvspQlcv56cGr9YDIzZ9c9TOJ16cX%2F7lemn2K6OIbHIqCaM0m%2FsvP9xcNdUgqkTKHpaQBcf8WIQTbDF74I2Fb0i7xOXN1dodqFfdnpAvxqgPs3DuEgilIx%2BLRNBh9lCHcD4kNcrI2lVEB71qSvmBLrh8VPXAC0fczUhxlRPdEm5Z071A%2FRkDD4xzXaIVnmk9c5nri%2FzROWMbYWiDiCK3p4IGU01eYkg98gaip%2BOLybINMFFWlhxYJ28XkRNBUjPMUMGMNPS6r0GOqUBRZMXcB0jikQUfn5GtsLRobX2ixc96GblSAJTIBAuH4aDdrCQAYVv5CvrzKejvjE0lORGboNRAx2wEayI95PE8%2BwpWALwvRGPHZV8NLQUtvwK7ryRn%2F7DGsV6%2BskdaADFs9tL%2BzxpNZ1ifa3yWnYuHDS%2Btnzs9OI7m6R4kVntKDtCpT%2BKQmZfpksmwxI6ui76sLdwNo8l%2FWSG7YccV9CJ5dk95Xmz&X-Amz-Signature=768c7e101105e1838b8e8a2e0a00139d71c76eabe4e9457ad8709878dc8c0e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBRBJYK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgG6Igpy0sSApKaI3cqiD8XVezdEVwtKduHw0X71hTcAiEAx36ygsaFb99tOftiBut%2FP3GgLpJT9VktZoxs9%2BIDhdcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvbA3L6Rq1T3wOLSrcAxtgSK%2FbpEtNVdvBBU3Mn2DMTmVFXl%2FxszH2FKWLdsUEEVSRvDHeGyGN6rsuBMWBF%2BHKH2i7xuekT2griRGy065SM5Ngv9bet9zDj170BV4VlaqnBLGoT0188yB8KhsSDZnY7KBztNbeeqWXFd71VJaCHf5eL%2F4t%2BJSS3c7ckU7oTxD2ENJjoaw3kKnuY6PHjEJncnF%2BoryauSLgKpOMWjSFf41JNda9tHmz65pGa3FErv7fzk0sXlefAAxqLHjGxdTcCr6cS1dbErf0EJT4tbv%2FwZhgN%2BBkG91i5ucN3DqVXd1n8c2MIO85rs1v0iFejq0XUPoHanUqfgcE2oB73czaO03QZqf1hoHRGo2dK6ETBGauZHhYuuu4iuK1JIhCqmCemDFS2Rww6KkaJ4qT7e%2FO5qeqqrENojqPnwc0wxE0yjA%2BHj4hQt2aR8rp5m0wd9srU0gJ6lsVA4IgIrusWgue9IHZozL1FLWQLZvRj%2BgzSyVgLOLmt8T5kj4ggX5%2BrLsTsHTrfvoebutSLZGXd8uKaZDeJW6IdMopLuQrsPLwF0mYT5QB0cOBiH9TM4mzCRsKw2DXOqTEMmeNxnfhleA43%2BdFV%2FU%2B1Uhgr6SKqnM1bOMIGSo%2BogwG%2FZlJMJ216r0GOqUBbxTxcEUl6Kz1Rt438VIf3A9zBZjTSA4ez6FNjxq1XNtQ57eODk577B5GzSw42oQXDjVGQpwr1%2FiIq5n%2F6kqYwlr%2BhNoutGf8Q70GXDKVU2r8M85IGw1TVm4bYhrU2MwgVGcRtlYAAfciuzFIRKZb48lcPHz%2Bv7FshZNgqMde4E9Wt8kzm9iHTrliTB3FWiRNjWKcGSi7P%2FLW%2BSE9GFVam8cFX1Vj&X-Amz-Signature=ecd284b00b0eb8f96d90445e8d63ae563ebf03794b257337653ecd02c0059d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
