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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4TZCIE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC779I55B4vU1W5Dl8Jyk5zgDvW93Hd9IhvWtiny4pSUQIgMGO0jodgFjlqGJvlLn2T2jPlPMl%2Fqmj50tvRiyhPJswqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo555IsuWuoGzLzDSrcA%2BVdozOV0TChiu1PTukTc0lnv1Ie5BmJJn74hxIq%2FaxyNju%2F1zjew3O%2FD%2FfWuSl9kIwFu1KVRfAEHGCyX4N09capM1tBzXziCjRjlGvw4NU5rSSmc5aGvN2VBaAlArj%2Fv9586KFGhgK7mhTswc5rj2NpAavkNPFPgsMWnh6Kw7UVftbqKuWdbL%2FdLyhXwhU1Iua3IIt%2FyEPKYLba6quk%2BnqP4ZgHwTH5beL27sh2eIXHWyjY7ySHW6fCSVBUAP34%2Fo2nWUMjboYR4MyUemKt3iX2Gw6UHZ%2FDNVaUo4VAsFdBIsnSyOexULgpCg4YNZrVLMdrEYIMAfVK3d3jQ6NLHZ7E2uhhg3sMSk67JNMT%2FnikiaBoKuMy%2FTkbRucpvtsdfnH3O1qjbAg5Wx8ACYLPWXlo899OjirxakH%2FyTftEhcNuobt8ziEoWTWXZpPFcA1x9y7gHvY6mxeonPk6nOAt%2FVVoWvOlUpXPyFkUKf3ipKZSJmYJPh9X9mPWRRKkz2q1FpGS7XfDG3k562K1R34SsTDs1Az6eaA%2FTF6u5oVkG71bV%2F9gq1Y7y5bqtvPoplwGebk14UtmJkpyy5tczSXkmYR6ULhZKwf7iwdEl12ncy7WXQQz2mC6sTjdLZoMO6JmMAGOqUBJve01dETYOFke81nxLy6nwOwRtNpGhkFVyAfJW7IDSLun9JTNHqKdeK9pJdOrmeuz5xSpFB27Isr%2BoP5KIk%2F4JYdYBOViu4ZTjSaYtagErGSwWR3yA5knBtfzEdQj94lSwHN8o0DSMOV6qHmL64DNQmQ4W7jFcS73M9SHuaPqRpZttBW4hw%2FXcvrMFXvTzVZCKrQU%2BmAuqHjxg4nPVk5ZZALxMB%2B&X-Amz-Signature=470252becbe6f1f15477694dda0a79e55fd78d2e42248e24dc98f85bcd6316d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4TZCIE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC779I55B4vU1W5Dl8Jyk5zgDvW93Hd9IhvWtiny4pSUQIgMGO0jodgFjlqGJvlLn2T2jPlPMl%2Fqmj50tvRiyhPJswqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo555IsuWuoGzLzDSrcA%2BVdozOV0TChiu1PTukTc0lnv1Ie5BmJJn74hxIq%2FaxyNju%2F1zjew3O%2FD%2FfWuSl9kIwFu1KVRfAEHGCyX4N09capM1tBzXziCjRjlGvw4NU5rSSmc5aGvN2VBaAlArj%2Fv9586KFGhgK7mhTswc5rj2NpAavkNPFPgsMWnh6Kw7UVftbqKuWdbL%2FdLyhXwhU1Iua3IIt%2FyEPKYLba6quk%2BnqP4ZgHwTH5beL27sh2eIXHWyjY7ySHW6fCSVBUAP34%2Fo2nWUMjboYR4MyUemKt3iX2Gw6UHZ%2FDNVaUo4VAsFdBIsnSyOexULgpCg4YNZrVLMdrEYIMAfVK3d3jQ6NLHZ7E2uhhg3sMSk67JNMT%2FnikiaBoKuMy%2FTkbRucpvtsdfnH3O1qjbAg5Wx8ACYLPWXlo899OjirxakH%2FyTftEhcNuobt8ziEoWTWXZpPFcA1x9y7gHvY6mxeonPk6nOAt%2FVVoWvOlUpXPyFkUKf3ipKZSJmYJPh9X9mPWRRKkz2q1FpGS7XfDG3k562K1R34SsTDs1Az6eaA%2FTF6u5oVkG71bV%2F9gq1Y7y5bqtvPoplwGebk14UtmJkpyy5tczSXkmYR6ULhZKwf7iwdEl12ncy7WXQQz2mC6sTjdLZoMO6JmMAGOqUBJve01dETYOFke81nxLy6nwOwRtNpGhkFVyAfJW7IDSLun9JTNHqKdeK9pJdOrmeuz5xSpFB27Isr%2BoP5KIk%2F4JYdYBOViu4ZTjSaYtagErGSwWR3yA5knBtfzEdQj94lSwHN8o0DSMOV6qHmL64DNQmQ4W7jFcS73M9SHuaPqRpZttBW4hw%2FXcvrMFXvTzVZCKrQU%2BmAuqHjxg4nPVk5ZZALxMB%2B&X-Amz-Signature=cd4e8fe5c8bbde81516e27699f7d2288677a1fd4f9d71999bc4a93f506f0ecd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO5YF24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCNX6fZmTV79FZX4e27MFCHYQKlEyFl6dUuzoIToYoC7AIgRxC0UfAt5lBGFpQO39kldiObSru3%2F2DyawiJOQN%2FRWsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLeVa52893Toh4NyrcA7GXKQdmTrHXXCy3llYts271l%2BWCiWHn7RPphP0wtUGp065aqk0FzN1Hq%2Fo8HmrTSuyc0V9%2FIYbZJvaV%2FREkoyO8Igi2ATgrFfjhYxmEK6szDt%2BaLAYmGhgKsBg3NBDwvDFqForGHjYMyfCvJztZfLcclarpNxZzQCF88MFLsam6c7ejOQw%2F91yr9Eyx9NrKXI7SkiqBLaNTZw9rxiC%2BvWZMevTgAlf%2BJjD3fW0IODBUiU%2BubRPMIxBI53XlTssrlEuoLwjJYGNCN3xgbBWp41rnpapr0SRVPiHOzfVVaLvbdKNj2oPA3bc0kQJtiwEWogXLTBEbuMwATJJ6dzCx3cgEA0Xw027BJbZImuyu%2F1lIYIjgakbYAm5Dg%2FMEKLXz6QYjUdLdQdS7nOBIIVEgD4aSPAWCgNdX2B3mTRFZh%2BD4Hf1eqTNiiTqNYVgPr9OauUt3tN1JT%2FsLJW0fHwzYrRbbsNS6Ta2h0LmTRpeMiJrJGAe6MnTsxpYxzf0TILq6umu3WUpcJQic3rMd%2FKJjk2H9ez4jvun4Y3Wvo27QSOkMUaA16mFzVO8D6%2BcxFpTHQbEvlHEMu1jDJArvyetSaovR%2F6CQoErP%2BiVs5M%2FeDpLpTI9S6qlpFcGArZfgMIiJmMAGOqUB5X1ETeMTBfuJWbWYDirtYboOo%2Fc%2FL1l2q%2FRuP4uUPJMVC4p4BfKXfmYIN3WRQ0B2MHg%2BvspCkkuc%2BfG2ysM2tdjzaQ25SvJED455m5eRJWZ4z8kEj1h3ZOuasklBjQDO%2F4tUIakRkzummhSSLhHxJH2AX%2BR%2F1nmpppwPTgqBLHRNiIAVATy4twQUMgR%2FggN8omcf%2FMY7a6WK5ARC7lVDlYA3brID&X-Amz-Signature=b5b597b801d7e2e8597697b82b0f5cec5fdd5a98d11c5b5a8775f8393b587338&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXXJMP5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE9tuOyCvTFKnm%2FKI6n1L7yG3aNql22ry52p9Yxml55VAiAmjBTgQt84%2Br00693tZ%2BdswcQ8NwMvyHCji%2BQnOTWGxiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXyhiVXU%2BAeqWvEtKtwDlpbkJlYOrqCSa92kDNCfKcl6MsGMoYfj5o4a8Ie1jR9tvgoUy4g6rj%2FsUpWMSByAZJi3WsPzTTBvEQas7RAmYlABxOAf1JcTAPtSPz%2Bi1zHNFhfPcj%2FlCksVa9eYhkYVzSRW4ZIsl8ZC8Y4hPYhmMemyWCOdT%2Bq4vpQ5a6F4RBsYvRkWibGGoCqZUSyBI5gNThsCERQtN2J%2B8iW5CP21fJL2tJkSvAcpl%2FlvKy79o8e73glVMMPEilhbT2VagJDANHh6Vovm7eTB%2ByVXdtlwlYYRVuvsKOLumMFDCKI1K%2F2KXzkie%2BblIP1cOqWTTvlP%2FsiFX6Dt%2BbF1AU02SPCixfWPlpxyUjrstD2Xx8f0dhWb%2F6gp9VlPyNkvEimvR14DnIIr5CIh4WohUp3px7xRfdEwcqFkojOCUkqEZaA0o5NuLJ7hpbVYMoZoALxLlOd1%2B97hzvihs2lyuYSJg4yblTVZnO7Mlg%2Fo25YNuqM4l%2B1QgW4LxAX87vxIlXBXSA5JswvaeUY9jBa9zMsF%2FmqD%2F4HibVDD4ReKnrKMhK7RECqsSrm%2B0kOQjB%2FuZOTUQ6OEIWDlQjcp%2BlMIEigXvYvWkC7BDOuEKa%2FKV0EQv84ANvFMba1rUcom9awJpyYw7YmYwAY6pgFVHaMOOZltKFYd4byC72fV00%2FeWVBFqfTUXQ5FTTVhpvvQjff5x3TRDmvVbBGPMTF4DCsbUftItFfLDFu3v%2F16mdgjatihWcDziiTjuCyU1rg80X%2BAFnXF0fF4rFLE2ffpXBVo7AWYoqY7zRGN1%2Fwygp9ARyhOt8KS4hBXEU5XgV3lXBsMr5YPCmnicHMos6uECXY%2FiHd6stzR%2BYdSVnbPFuZas%2BJM&X-Amz-Signature=8615afbea8b6b4116543ecdde18a8b8498423e2cb345308d2833b1e92c78cd25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4TZCIE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC779I55B4vU1W5Dl8Jyk5zgDvW93Hd9IhvWtiny4pSUQIgMGO0jodgFjlqGJvlLn2T2jPlPMl%2Fqmj50tvRiyhPJswqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo555IsuWuoGzLzDSrcA%2BVdozOV0TChiu1PTukTc0lnv1Ie5BmJJn74hxIq%2FaxyNju%2F1zjew3O%2FD%2FfWuSl9kIwFu1KVRfAEHGCyX4N09capM1tBzXziCjRjlGvw4NU5rSSmc5aGvN2VBaAlArj%2Fv9586KFGhgK7mhTswc5rj2NpAavkNPFPgsMWnh6Kw7UVftbqKuWdbL%2FdLyhXwhU1Iua3IIt%2FyEPKYLba6quk%2BnqP4ZgHwTH5beL27sh2eIXHWyjY7ySHW6fCSVBUAP34%2Fo2nWUMjboYR4MyUemKt3iX2Gw6UHZ%2FDNVaUo4VAsFdBIsnSyOexULgpCg4YNZrVLMdrEYIMAfVK3d3jQ6NLHZ7E2uhhg3sMSk67JNMT%2FnikiaBoKuMy%2FTkbRucpvtsdfnH3O1qjbAg5Wx8ACYLPWXlo899OjirxakH%2FyTftEhcNuobt8ziEoWTWXZpPFcA1x9y7gHvY6mxeonPk6nOAt%2FVVoWvOlUpXPyFkUKf3ipKZSJmYJPh9X9mPWRRKkz2q1FpGS7XfDG3k562K1R34SsTDs1Az6eaA%2FTF6u5oVkG71bV%2F9gq1Y7y5bqtvPoplwGebk14UtmJkpyy5tczSXkmYR6ULhZKwf7iwdEl12ncy7WXQQz2mC6sTjdLZoMO6JmMAGOqUBJve01dETYOFke81nxLy6nwOwRtNpGhkFVyAfJW7IDSLun9JTNHqKdeK9pJdOrmeuz5xSpFB27Isr%2BoP5KIk%2F4JYdYBOViu4ZTjSaYtagErGSwWR3yA5knBtfzEdQj94lSwHN8o0DSMOV6qHmL64DNQmQ4W7jFcS73M9SHuaPqRpZttBW4hw%2FXcvrMFXvTzVZCKrQU%2BmAuqHjxg4nPVk5ZZALxMB%2B&X-Amz-Signature=408956f1c13b98d284ba6e2e528fbecfea4f968ad2c5d6d2e88521d31361eb95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
