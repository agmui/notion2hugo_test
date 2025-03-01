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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZLMTUN%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGv5mc7zJL1%2BOiLs8tCO6h4HzzmV5r6gOjmB282j5%2BzWAiBmJdbLvRJ4Hcfzjjtc4lmoRwV5L6fq8CJLS2F9ggvzQSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRJWl%2FdXiAPay0GPcKtwDkG0eQUx3I1rbOQr0d%2BekKVFjo5OEfbbjjauHJI91wN7nDrYl6bLnOEeH%2BicLFE6dS47L5kfk7vpPweWF6S91DGVecgdgP%2BJo2gOnMgYFb29hkvQCe5j9uEybmJpkF25FdbXhQQgrF%2FEWleN6%2Biq4E0RQRa4wLfDyY0yXRjY7fjbXUbUgQEeBmIHaKf6D3Qbck4u29y7G14JgB0hiuP3xZ6RE1AOUftO23iwh%2Bxg7jt%2FWWPAIbuJTuVflSLN07GTQJd2CW1hUDXnNhuJQjwgHhnRWUhDSUMQcPR%2FjQl%2FQtY8k%2BTq1YYrz8plz0H8c5x2RGXUaELdgKzTt%2BCSX%2Ff3mWRTOCKkIsu9dd5foXMlQaS%2BBRwEc2JWGOSLKhOhw5jaIfmlW8NjTDYZUPrUuGb4n3ahD0GSvwa%2FyDuahYvSYiZQVYtUdir2DE48%2By2cOVqNnbEIdn%2FqrX1sP%2BpeavXPSye%2FsXbjRPnON5HEBckpzyHnK%2BUU9yHCsbsu%2B%2BDNCE7WyXMtRdSrDFWfDEcbKv5lReWJ5JblR3NfRrpUadXEsCRfwfE0HMEsbFajDqbTwu60d%2F9Rje7rHQnCYOFlqxzOSeiGLub0US7fiueHEeEoL9R1771Zf0t5T8ytglGIwtJCKvgY6pgGsA%2F%2Bnu%2Fx7XE25XIa64rbRfpM6x4zmFM9eGI62t3Zs7aheH4L6sw2yeC9td1lCSIN%2FyNK3BGb0rZr5jyJ7X64Hzi%2FSwQ%2Bb78hMSHgyJZNCy4nURuqDX2yD9KVudB3DOCePK1eOOjJV7Dh78CLbod34C%2F6pb4Rgvz21rYV4LBu1cujawbK4CpZVpG6YdkCIJea3Snc861x8IM7iHVyO0aZlnf75hqVk&X-Amz-Signature=339d75d255eb41bd425e0093e474ccc7b49b982a9d6d95900576dc7f79ab685a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZLMTUN%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGv5mc7zJL1%2BOiLs8tCO6h4HzzmV5r6gOjmB282j5%2BzWAiBmJdbLvRJ4Hcfzjjtc4lmoRwV5L6fq8CJLS2F9ggvzQSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRJWl%2FdXiAPay0GPcKtwDkG0eQUx3I1rbOQr0d%2BekKVFjo5OEfbbjjauHJI91wN7nDrYl6bLnOEeH%2BicLFE6dS47L5kfk7vpPweWF6S91DGVecgdgP%2BJo2gOnMgYFb29hkvQCe5j9uEybmJpkF25FdbXhQQgrF%2FEWleN6%2Biq4E0RQRa4wLfDyY0yXRjY7fjbXUbUgQEeBmIHaKf6D3Qbck4u29y7G14JgB0hiuP3xZ6RE1AOUftO23iwh%2Bxg7jt%2FWWPAIbuJTuVflSLN07GTQJd2CW1hUDXnNhuJQjwgHhnRWUhDSUMQcPR%2FjQl%2FQtY8k%2BTq1YYrz8plz0H8c5x2RGXUaELdgKzTt%2BCSX%2Ff3mWRTOCKkIsu9dd5foXMlQaS%2BBRwEc2JWGOSLKhOhw5jaIfmlW8NjTDYZUPrUuGb4n3ahD0GSvwa%2FyDuahYvSYiZQVYtUdir2DE48%2By2cOVqNnbEIdn%2FqrX1sP%2BpeavXPSye%2FsXbjRPnON5HEBckpzyHnK%2BUU9yHCsbsu%2B%2BDNCE7WyXMtRdSrDFWfDEcbKv5lReWJ5JblR3NfRrpUadXEsCRfwfE0HMEsbFajDqbTwu60d%2F9Rje7rHQnCYOFlqxzOSeiGLub0US7fiueHEeEoL9R1771Zf0t5T8ytglGIwtJCKvgY6pgGsA%2F%2Bnu%2Fx7XE25XIa64rbRfpM6x4zmFM9eGI62t3Zs7aheH4L6sw2yeC9td1lCSIN%2FyNK3BGb0rZr5jyJ7X64Hzi%2FSwQ%2Bb78hMSHgyJZNCy4nURuqDX2yD9KVudB3DOCePK1eOOjJV7Dh78CLbod34C%2F6pb4Rgvz21rYV4LBu1cujawbK4CpZVpG6YdkCIJea3Snc861x8IM7iHVyO0aZlnf75hqVk&X-Amz-Signature=180fb7097fa3f0c8de460b7636ff3b2e1133c590e841d9f42cd93065673e02e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5ZNCRG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDfAUcveLW29DFbY3fm25qjQir643bRh6utevLWmN2SqQIhAOZv9Pb74xluoondfcnJmxrK3Ildh2j%2FeB0IJaEMOw%2FhKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqQcsWW2qQqL97t0q3ANK2iZiCVJV3POkb1sg5UI0mIbGtZ4MMl2griW7fkOmMwvYB0tN%2FQM2fzHVrF7trak%2FfEu7jdlYRWzow00GpMHYM7d2peh1ayEBNWEEntG3zNlc6Q44bhpfUGUcS0R2bdS1aVMOb5eHkbtroFHfwG8ASS4j4ch%2BBX026x%2BQXIeNLk84QlnfdqvFSqfPbWryTx3B6bn6D68oVT1%2Fi9ZNVVbyoi3FMjsNeIX2%2Fup7%2Fl3%2B4AENrXp7u2qC6ZSwtin25RvIqaEdTgAIbzrlevkWGwX0RsT%2FxoRtUzhfqnWTW9gYVVvMx2gJFzEpNZVngbcjgKqVxIo4IRuTguvnfyn05aumcuzojrHzdJajhliO75DrJ5LAaOfuZjbw8DjjP8cCAIT4qDMQU0ZkmQvnum7sDNBG1PJ6TabtIK8PEni%2FEXKfEYEjvGCTqs3lh4%2F5QOshSfm658%2F3oAHt3A0vpGpclqiIN%2BKyf%2F84fikzTxFdBTjlJd32HthNi1IRQMX5RkFMFA%2BlcE%2BSN0KwSD%2BUCjZNbCojmTsuuIWsJayzYCao5UvqxjZ4%2Bak7NG2aB3jPEUitN87WBBZjwYoCTnPmacVNM7oAEE4vbk%2Fhgt%2Be2u4J7siIh0IcT7hkjWNFBcFLzDDbkIq%2BBjqkAd6qsO%2B%2FhCf8dLi%2Br4FNzLpcM7tEQdGJVuvK5IDk9GykBEeBPeNvYnUlF5%2FZtjKMJy1iPsB7Vlw4lbw1TzCzcAWKU0wS3p%2BnLrBRkq4cthuhocAcHkzZrdCHmA%2BbMgJIZKA3xkIO6TWZZyqRwFNbnttS7kXOUpLMsec%2FvLqZcf9PhT0sWf0%2FS11W7GPw3Gg53g1tu2sEVLXicOBgW6AE0GdA0BJA&X-Amz-Signature=94079622051f95ea99984f406dc6217d45e37d9893dc3bb06ebd3733d42bd7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSFTI74%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeDIC8HHNWJQFlWoVdDagAmNPk%2FnkU8smWa5UWSrb60gIgBZL%2Fc8SAjpPINrc9bzn2aOZ%2Ff5TbDvTgu3XBtnKrtu4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHa2TGV6rEh0%2BWMSyrcA5hukoMo1MrbKJ9UlpLB64bS7qJ3rRhzSQXLTJp9fjOoqV1pxcTyiGE1CRPXdxsc2JnoENcsTgaCjG38f%2FLvIUqua25AVbOIK61mAtWMsDOduREy%2BhQ9dbxKtysf7OXQ2A34vYu9d0ExRnOBgy%2B%2FJGIWLX8mIPUWO1INCwsgQOmExcN7efNwEc9MxQQypIJCMGwMrB53MrFJ26%2FIZQJkjeI4S39cMnUT%2F6jG01OAry4NSnQRS9jKie6ntUao0hC3mhjUuVVSLhENzI4Y1IVcmd5GpC0AGFEz1ooAlKPFWxKYr5toygcdxS2ZkwXhiPLa9xAsRojo2joAWxlJcYeVeNmsFwTt4byz50HOa1uE3ybGS7IgxS84oMaCTeCVHIFEcN5gV3rjdXS%2BIMzmhXyu5SGxe%2FERWPkY8k4bMtMHSHxb%2FCRrt%2FFt%2FwlEhzQ6Wz80U1YfJIVR6VjoQrMixdf4ijOLxozh7E9BAkzb0msSDbuiCRh1Eo4eAifK9FAIRj7Zf1aImHERGHkI30y1d%2Bsd7OTaKvP25OrQ9U4uhxFZYu7doC1D7aZW05QXcKu%2Fe89zMMTuiYRos%2BJ5%2FDaWVrjUTjzd5C%2B7L5pcOHMrBTlVeFga9JoNRD3qy4fEgXdSMLSQir4GOqUBOR%2FaPn6K7pbFbTRwAu0xmcH8%2B1681Fc99S2h%2BU0LfonvqZKGLkjspdnPOkLYNCoc65jPa8HUG%2BR1tKOuZ9V25U2F%2BHdaFGUdGjPbDxfj94MkUQRUomjqOxW6h3lQe82P7U0OHSqfziP8FT6HGgga3kO3%2B6t4CJD0lLclsckahA0GlIg4v8HUY%2Fy22uobRFPOJmGgWNPgTfXIJSAyEe%2BsDoecJ8GC&X-Amz-Signature=1d699e9d988c665b24bea8a3d4a445f6bf4891e7b1207071713b85ace264ac08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZLMTUN%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGv5mc7zJL1%2BOiLs8tCO6h4HzzmV5r6gOjmB282j5%2BzWAiBmJdbLvRJ4Hcfzjjtc4lmoRwV5L6fq8CJLS2F9ggvzQSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRJWl%2FdXiAPay0GPcKtwDkG0eQUx3I1rbOQr0d%2BekKVFjo5OEfbbjjauHJI91wN7nDrYl6bLnOEeH%2BicLFE6dS47L5kfk7vpPweWF6S91DGVecgdgP%2BJo2gOnMgYFb29hkvQCe5j9uEybmJpkF25FdbXhQQgrF%2FEWleN6%2Biq4E0RQRa4wLfDyY0yXRjY7fjbXUbUgQEeBmIHaKf6D3Qbck4u29y7G14JgB0hiuP3xZ6RE1AOUftO23iwh%2Bxg7jt%2FWWPAIbuJTuVflSLN07GTQJd2CW1hUDXnNhuJQjwgHhnRWUhDSUMQcPR%2FjQl%2FQtY8k%2BTq1YYrz8plz0H8c5x2RGXUaELdgKzTt%2BCSX%2Ff3mWRTOCKkIsu9dd5foXMlQaS%2BBRwEc2JWGOSLKhOhw5jaIfmlW8NjTDYZUPrUuGb4n3ahD0GSvwa%2FyDuahYvSYiZQVYtUdir2DE48%2By2cOVqNnbEIdn%2FqrX1sP%2BpeavXPSye%2FsXbjRPnON5HEBckpzyHnK%2BUU9yHCsbsu%2B%2BDNCE7WyXMtRdSrDFWfDEcbKv5lReWJ5JblR3NfRrpUadXEsCRfwfE0HMEsbFajDqbTwu60d%2F9Rje7rHQnCYOFlqxzOSeiGLub0US7fiueHEeEoL9R1771Zf0t5T8ytglGIwtJCKvgY6pgGsA%2F%2Bnu%2Fx7XE25XIa64rbRfpM6x4zmFM9eGI62t3Zs7aheH4L6sw2yeC9td1lCSIN%2FyNK3BGb0rZr5jyJ7X64Hzi%2FSwQ%2Bb78hMSHgyJZNCy4nURuqDX2yD9KVudB3DOCePK1eOOjJV7Dh78CLbod34C%2F6pb4Rgvz21rYV4LBu1cujawbK4CpZVpG6YdkCIJea3Snc861x8IM7iHVyO0aZlnf75hqVk&X-Amz-Signature=f5ad9b64af3ca83b5e9b8b5878fd48c326b7b1f70dfb6a5ec9f91ab6a616162b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
