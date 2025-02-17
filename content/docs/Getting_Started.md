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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQSVXFS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDlMzYVg9ifCXgxPfg6HwFJEMY2qyHKYPeCMfAUT0OgJAiEAtA1Yz3ZlqhpbfDLmWgVHMG7j3mfcU7fbU9QmDIpCXm8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL6%2B9jcqnUe%2Fe0on0CrcA4kjwdAVy0zaT52X8iJt8md5mQ50tbVcuYdxkTy%2Bo8yQIM3jsYRyxuGCyb8MIwfczQArsBo%2Bvfd5sUGfaNi9n8r2m7ypwqZv%2B1cKId%2BwFpx06EVt6IBt8G0QOmilFZAfSz7GjbVPhj4VQ2gRb6Vt0ljLKp2FM7wUS7wFFTYc%2BbCDCJn%2F%2B5LfRtGV6k%2FmccXrpZcqv%2B%2BtZ%2B4RVM5NYcKFnowsKvaRg%2FemDF2x6RXoi2Q14qe2vfB5Khf9ttQvCVl1R3GzqKjicaEijBHRwcFHpmzBGuD859kqGBPk6b35sWXzcJidQQEzhpiYi%2B8%2BjaswQigLqyVVf0KGxWPY4hkYFIFH3cOTKDQdSZuOQr9AORow3P609%2BoAv4ZcypfScPKN7x58nXRSTgxa9rxPWbdu1fZRyLo14qOKP8imDDkjm4868N91RGk1Hpqn%2Bwf4ORt9kbfmy4QltDCgSphqtApt0jMz8Ism63E40o8D2JbDG6JlNsRLiTGCxalf72t8B6GMZcNFVjqB7UwNXPq0bWLV29ojQFH%2BR569jXrQQhjHofNDEllB3XPToD%2B067msgkhVNoYrQh8LEOG1tkggr9%2BvOWQ3daKH35Nh%2B%2FpL7oNIi5dWzX%2FpwpTgOjObbik0MLC%2BzL0GOqUBNqLguJ2ZP6kHIWkM0tPAEABqhAgOCZBHN4Y%2BrKE5SjkmoHW836sR2w58fkD2ERiYRg%2B1e%2BF3p77CHObky9PXdPu%2F%2FfT%2BK5UEKALqjtlYECFLOszpjBm1cRgy9VlHtdAvsVd5DUDaM2geUgCDkBBSpCMsuwqi5naY541mSsFaLQj0UI5yUq1ySW5L82LL0xE4NldoWYcFUe3l7%2FlcUVAJt3%2B8SDj9&X-Amz-Signature=9fa5e7fba04a9dfe36e438d642b0008effb899e61087643788616f49061a186b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQSVXFS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDlMzYVg9ifCXgxPfg6HwFJEMY2qyHKYPeCMfAUT0OgJAiEAtA1Yz3ZlqhpbfDLmWgVHMG7j3mfcU7fbU9QmDIpCXm8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL6%2B9jcqnUe%2Fe0on0CrcA4kjwdAVy0zaT52X8iJt8md5mQ50tbVcuYdxkTy%2Bo8yQIM3jsYRyxuGCyb8MIwfczQArsBo%2Bvfd5sUGfaNi9n8r2m7ypwqZv%2B1cKId%2BwFpx06EVt6IBt8G0QOmilFZAfSz7GjbVPhj4VQ2gRb6Vt0ljLKp2FM7wUS7wFFTYc%2BbCDCJn%2F%2B5LfRtGV6k%2FmccXrpZcqv%2B%2BtZ%2B4RVM5NYcKFnowsKvaRg%2FemDF2x6RXoi2Q14qe2vfB5Khf9ttQvCVl1R3GzqKjicaEijBHRwcFHpmzBGuD859kqGBPk6b35sWXzcJidQQEzhpiYi%2B8%2BjaswQigLqyVVf0KGxWPY4hkYFIFH3cOTKDQdSZuOQr9AORow3P609%2BoAv4ZcypfScPKN7x58nXRSTgxa9rxPWbdu1fZRyLo14qOKP8imDDkjm4868N91RGk1Hpqn%2Bwf4ORt9kbfmy4QltDCgSphqtApt0jMz8Ism63E40o8D2JbDG6JlNsRLiTGCxalf72t8B6GMZcNFVjqB7UwNXPq0bWLV29ojQFH%2BR569jXrQQhjHofNDEllB3XPToD%2B067msgkhVNoYrQh8LEOG1tkggr9%2BvOWQ3daKH35Nh%2B%2FpL7oNIi5dWzX%2FpwpTgOjObbik0MLC%2BzL0GOqUBNqLguJ2ZP6kHIWkM0tPAEABqhAgOCZBHN4Y%2BrKE5SjkmoHW836sR2w58fkD2ERiYRg%2B1e%2BF3p77CHObky9PXdPu%2F%2FfT%2BK5UEKALqjtlYECFLOszpjBm1cRgy9VlHtdAvsVd5DUDaM2geUgCDkBBSpCMsuwqi5naY541mSsFaLQj0UI5yUq1ySW5L82LL0xE4NldoWYcFUe3l7%2FlcUVAJt3%2B8SDj9&X-Amz-Signature=8ea65fd0f2c5a457ae3d2a9e9eb0db4c1005386677a2f7e1955b82b5e97b066e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS53HS44%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQChi9YuoVMJPwLtLJv74KdsXSudMfML9S%2Fczwk68%2B46yQIhAOJloE%2FASy98xrdSgSs%2FTGuThcYUSRdW0tYYErM19PDbKv8DCHUQABoMNjM3NDIzMTgzODA1Igy9xrnbMkdHI28WUq4q3AMxJj3U0XGyFdiTAjlms0S5VvmFbtMHcMx22xcmy%2Bjib3lz5mPyXG1%2BxSZVjYOU%2Bw5xUayYioMB4qfBB11jUwzEclI5GegHnhu6QmDaXcCWU727dhL2%2FB2bU%2BVoP1T2zxfcl0vKXlk9kvQuW2j1VoczEkVPZDWc6L%2B%2BsvJ3d9Ig7dDIkuez42Y7mvkjoVWIkcNfqgyn8EFevLoADUF66wbLqSf8%2BYpyZ6ye%2FPYh0aWGehkj6tZ%2Ba%2B93Xz1RxFdRRshIRdBeLZGDs9eLu6kPMXxuvRtNPAQ6AmYPhCXZJ86CCOJ4L%2BirAiIw0zxEtCJo4WETDr8%2BPiK1n7sAlQUYthEDIyJmeMNjpDSDr9izLxysBe5h1k7XimptttPkGml%2B55AB6MFDk7FnWa5dDi4U8Xnhxqy4pui%2FT%2BWPgU1cB0pmGVLys9sx85zRInbpqIJ4eFaNAJybBPKvhzZn7ZCMRR160jkLL8w3MpBttIKpb0Ods0fHhE1FWmGfTcpltrmhdOtBBA3h7bwP2XR63t5tNVKed%2Ff91R1tiMYlsyZvw3d7eIr%2FZuTSeKgexMp1MGrSlj8xxeO6IYziWtE1%2BR4%2Badhei274oNldp89dWup8rej9GYNyHdxmNFVQdbURJTCuvsy9BjqkAYeW3L9GGQOTSZkw7%2Bf2CUfIhg6OxrLDtAmvSjwIbwdi9jda3AXPMJg%2FBvUI1uFA4szm7bo1%2BOXE%2BlFlhEa%2FqCHbCC649DMWSyHl7UpEmbddE8Z%2FnCrrTIz694fCegowhKv5oUEWi3om8lByt8dgZOQeEAjchf2KWf0iZHwaR37ZiyYaKOUilEfLS%2BLxkEsm79MhlHI2aYJwrxRycIqo18t7Y76T&X-Amz-Signature=0a3e856943f6fa65e90f4fa69f093926b58cf199bfcf96ed51966dc697c97149&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPET6CS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFpcr4vHB4Ch%2Bxd9zEBebRj66DaekvxaGHSgKxYCeoLSAiEAo3LSxk83I6Mde1WluHk5pWWgnxjzbvu8zi4vH%2BieIGUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBI8%2FXFpJbVy8OiKYSrcA0GqIFWSQpCqjU2CNaawuQ9hQbjxAW7WVns2mJ3%2F%2BcDXHHBe%2FH%2BH%2FR7xJC74PbAq%2BGGkg5CQIfZHEv9zQZDl7LGgIuwDW1WXzx4skbp5b%2BvJ2qo2SKoOGVd0zjsHFbvp2hlg95N4346okjqE6izDGKd5C66zUZ4sndjqAdjissg9DmjR3a9NKmIEkq0Co8yl1Adlh5pkMWuxnyG4Scm7tiQSo3vbAeKOyyQ5oa%2BpvaVor7MsltGuWwwdnvFi0AmhHuS918kSXtkrRpergJvKyictA2m3pd%2BvqoaaPifSaymk17phBXy6sM4fqLYLYV1Lu34Kr7bw%2BSkU8nBGjbPcYGDG5i4PMV46GfeRwIbH4RI9LqWkTqPyW7%2FQ7gF%2BQ3KF27xaQUdazaGQT32yhGzNoT6Z3Qk0zSbh9zx%2BjcK%2Bp0YIopkzvG1NdPIFt581TVEYeiOJlRcozUyvaCVM6t9SpkA9nbLavkaUIdkbbaIe83uTmDpMi1NLIPiqH5H2Fw8MqZ%2BcItP8PP6irhv%2F2R6fOU2yNaNaH9%2BdO0jEagxfVEDLmSfKvsvbfiQjwzqAhrIFYhKKVx0GOHIX%2BvBlpJjZT5yTKvrdS4gU6ra3Y5xCf8eoExHIPPivgmETPkFcMKW%2BzL0GOqUBnkSiUF31sWEcypvW8nHUi5LagzsbE7Q7B8A2f3ijVZXB3En%2Bz6S6gSpR0RI%2BZ%2BFkZ1GcWLeKuBIWblvZF0IoDilVhrSccZLJ66MQwTYAAKbBZ9xSZOeb%2FIY3UBHWxjJoDLfCycHIPgVWhiCxlNulFhKAapY%2F%2BRC1Cno%2B9mBBONT9MtuOTJr%2B0SCvHkSqC8zMpHPUtpmevW5m8RGjLh98AzrE5Y5L&X-Amz-Signature=0a30dda7b38e9d63ae7e88ec649611219d6d061493dec30ef4304b099247146b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQSVXFS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDlMzYVg9ifCXgxPfg6HwFJEMY2qyHKYPeCMfAUT0OgJAiEAtA1Yz3ZlqhpbfDLmWgVHMG7j3mfcU7fbU9QmDIpCXm8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL6%2B9jcqnUe%2Fe0on0CrcA4kjwdAVy0zaT52X8iJt8md5mQ50tbVcuYdxkTy%2Bo8yQIM3jsYRyxuGCyb8MIwfczQArsBo%2Bvfd5sUGfaNi9n8r2m7ypwqZv%2B1cKId%2BwFpx06EVt6IBt8G0QOmilFZAfSz7GjbVPhj4VQ2gRb6Vt0ljLKp2FM7wUS7wFFTYc%2BbCDCJn%2F%2B5LfRtGV6k%2FmccXrpZcqv%2B%2BtZ%2B4RVM5NYcKFnowsKvaRg%2FemDF2x6RXoi2Q14qe2vfB5Khf9ttQvCVl1R3GzqKjicaEijBHRwcFHpmzBGuD859kqGBPk6b35sWXzcJidQQEzhpiYi%2B8%2BjaswQigLqyVVf0KGxWPY4hkYFIFH3cOTKDQdSZuOQr9AORow3P609%2BoAv4ZcypfScPKN7x58nXRSTgxa9rxPWbdu1fZRyLo14qOKP8imDDkjm4868N91RGk1Hpqn%2Bwf4ORt9kbfmy4QltDCgSphqtApt0jMz8Ism63E40o8D2JbDG6JlNsRLiTGCxalf72t8B6GMZcNFVjqB7UwNXPq0bWLV29ojQFH%2BR569jXrQQhjHofNDEllB3XPToD%2B067msgkhVNoYrQh8LEOG1tkggr9%2BvOWQ3daKH35Nh%2B%2FpL7oNIi5dWzX%2FpwpTgOjObbik0MLC%2BzL0GOqUBNqLguJ2ZP6kHIWkM0tPAEABqhAgOCZBHN4Y%2BrKE5SjkmoHW836sR2w58fkD2ERiYRg%2B1e%2BF3p77CHObky9PXdPu%2F%2FfT%2BK5UEKALqjtlYECFLOszpjBm1cRgy9VlHtdAvsVd5DUDaM2geUgCDkBBSpCMsuwqi5naY541mSsFaLQj0UI5yUq1ySW5L82LL0xE4NldoWYcFUe3l7%2FlcUVAJt3%2B8SDj9&X-Amz-Signature=73c64cb9a45fd5f3713f70b1d8ea9410a3134a44381d2c7ec250421b29ae1e79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
