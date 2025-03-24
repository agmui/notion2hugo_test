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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4O7GT4T%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYbmwB5nV3a%2FsD6KFm4UOpndwwPrfyS8oKzBAPc5wBUwIgXm1g7LCl%2Baq%2BFJWaeaE%2BtXg2i8kiDFudH%2BUTcwwdA8UqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4vZQ5KNwcp8G%2BoHSrcAwwcRcMMXDj5lNo2jfYNyVXWRg0eC8VtyHwz%2FV5KlL17N2bU1grrn1Ds0XcCyTeSTRoYScICphhv24WgVcmMt1xwhuPsOBlrknVe%2FDmaGZfaEpC4sztSoQQvLQrCgcgTO5BBYE%2BGJkCjEs4tP8ZOetjExKReJNno5gGIFb199J0jJG7a62HPQCg1rnPPyGor05%2FZGpNlF4V5s1VNIJO5IIQKoh2eoHBecX6EKZlM4ROjvWVtK6nU18ZLWYk1%2FWYKtHjQq9xoreX9iwr2cbWd0KikV%2Bu0mAHDTDF9E8bk%2ByDKrd7mm4j2bRFp0N8sUWQ10W8bvu65UV%2Bd1Eg%2F0yG37QrWESOXW0zGkxkmHgFaDn0DES4gFVclwzvi6Cltqj9nOK09Y%2Fn65HodalhBfNLzeTzHcznA5%2FAyiFTwdek27wVgtywEt6f4M%2BWBTr5oHSBb%2B2xuVsRKH9%2FIYaYvoSngTV74tWAKWM%2Be5J6EU6b4tMXGroc%2BpFWu9lISKO9b8ZeKA9SVLznYmdt8HNm9Vgm3o1IXzYJPSUNU22j%2FAW%2Bi1jfJXxtIMtaxBFz2leTLfalACdRK4AuPTVMnMWAiKMk22l4tkB3TT9B8p0%2FFjjnivA3mVSY43W3uTS7y6YrDMM6Phb8GOqUBS3rbJELZLdoD8aultU8OOTjQjpEe8tBXeqF9G9wlcRdRIdN2y%2FBWSSRCBkARB3SdX746iuBxe2oEWCDLpNpN%2BAs%2B5RU6gxxQFCYM%2BfGg7bJnHlgsB%2BcVGJh3HPMS3oALYz4a0aaQj5T8kbGsbujoG6wvzPwPHLQcIVHeeOIOvA%2FT3oz%2BL9FFZEbk9PjE0hrMd97RrUqkeEELsr5q%2F%2Fi5n4e%2FYpx7&X-Amz-Signature=be009f13993fa8ba1bc077be03e6605def6b55f5efed46c85a4410602fa4040a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4O7GT4T%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYbmwB5nV3a%2FsD6KFm4UOpndwwPrfyS8oKzBAPc5wBUwIgXm1g7LCl%2Baq%2BFJWaeaE%2BtXg2i8kiDFudH%2BUTcwwdA8UqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4vZQ5KNwcp8G%2BoHSrcAwwcRcMMXDj5lNo2jfYNyVXWRg0eC8VtyHwz%2FV5KlL17N2bU1grrn1Ds0XcCyTeSTRoYScICphhv24WgVcmMt1xwhuPsOBlrknVe%2FDmaGZfaEpC4sztSoQQvLQrCgcgTO5BBYE%2BGJkCjEs4tP8ZOetjExKReJNno5gGIFb199J0jJG7a62HPQCg1rnPPyGor05%2FZGpNlF4V5s1VNIJO5IIQKoh2eoHBecX6EKZlM4ROjvWVtK6nU18ZLWYk1%2FWYKtHjQq9xoreX9iwr2cbWd0KikV%2Bu0mAHDTDF9E8bk%2ByDKrd7mm4j2bRFp0N8sUWQ10W8bvu65UV%2Bd1Eg%2F0yG37QrWESOXW0zGkxkmHgFaDn0DES4gFVclwzvi6Cltqj9nOK09Y%2Fn65HodalhBfNLzeTzHcznA5%2FAyiFTwdek27wVgtywEt6f4M%2BWBTr5oHSBb%2B2xuVsRKH9%2FIYaYvoSngTV74tWAKWM%2Be5J6EU6b4tMXGroc%2BpFWu9lISKO9b8ZeKA9SVLznYmdt8HNm9Vgm3o1IXzYJPSUNU22j%2FAW%2Bi1jfJXxtIMtaxBFz2leTLfalACdRK4AuPTVMnMWAiKMk22l4tkB3TT9B8p0%2FFjjnivA3mVSY43W3uTS7y6YrDMM6Phb8GOqUBS3rbJELZLdoD8aultU8OOTjQjpEe8tBXeqF9G9wlcRdRIdN2y%2FBWSSRCBkARB3SdX746iuBxe2oEWCDLpNpN%2BAs%2B5RU6gxxQFCYM%2BfGg7bJnHlgsB%2BcVGJh3HPMS3oALYz4a0aaQj5T8kbGsbujoG6wvzPwPHLQcIVHeeOIOvA%2FT3oz%2BL9FFZEbk9PjE0hrMd97RrUqkeEELsr5q%2F%2Fi5n4e%2FYpx7&X-Amz-Signature=a90e4a950c943d346c5f47e32d304e308618cd15b0b252a8b9e3dc90d633e5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVY6FKI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHAhzY6wkfivTD%2BEK6U%2FQXhke%2BEwPCfrZolYY%2BAr6zjAiBzpzx4r%2BY0Ch7YnrJ2awLQT%2BH%2F18wo1HXfRg7WXGMq%2BCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6L4YcUr3k3BskBrKtwDg1Ca1mC5Y31j%2FOX5lJv4LDNkr%2BFPRDdAGu%2F2TYs4HEJJLzLyCAotJX7EpemMEtZEKQUlZo36cEMz2CD5NIcV6rGwdppyDezUn%2F6vPsU6GwhbuwycJColr4XRxehs82AqxdXcjjA9ecxyKYQF5EBCa0qFKs0%2FMWr9eZ68MYX%2B4rNb9ex9sAjE%2F0P0dnMcPCC8ptdMnYTBSuZguOaWUo49IGHKPHdpX4570rcMqV45186HKn5WV6h%2FlHydzaGw%2F0qKM3bUNt%2BXXLfXnaUnnYD4FLErKrL0F5anz%2BxLriKMsU6gVHNJ%2BK8lbYi65WESwwfZUTaBd5Ro3vt5pb%2BFpG0o4R2r67Z%2FSX9k9mcdyz9a%2BCrHRQYnh0ysUpbZWs9PSSyfjHoALtClta1mVQNtDt8%2F3NJs527iou7Q3SrwAs0cL%2F2qHsND2P12I0y4b0Z3%2BoFsMyxDBXEtG4VJqAd2QD7YsHvgF9yrVwto1EJgjZvZvsOkbhhZ1IbcJbmm4Oso%2FDMQ4mCDY%2FB7SmKHiqpO2AYAw9LMIY8fMLjntjGHDUsms7Ydo6z9EY5OphbZ932Ke9fadH%2BZ7C7j7U75Ksjhyh4d39qAfD2sG7n2D0uQSbuoo6PU2RxrHLAFK2nje4Awoo%2BFvwY6pgFoBOLUJx38KnRNNiGxr35yR%2F%2ByxMO0esXK%2FXAfchNqdWVamEj6FCWZm6WBVhPJVCYFc0mVc7t8M2CRqf4A3YsGrMSGSmNXJpigFQAjQS1yKmS8JFOWrpE%2B94%2BHOA7AWRgdCUKTIrbG0vqUqM7yi3F2wUVkWeIr9pFc63KjmKndun7OaVhNa9KL2EJ33kTCQhoplU2BzZWQEKLzcUW18RAmgdLDLcMy&X-Amz-Signature=b658fdb2d90130d27987a36cc909d2ea7000e5a7a3f1ec37d06ccc86ba81096e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TAZS5FB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4u4qN2TLshRemtxa7jX8yNzvlJXcj4aYY%2Bu0tVbwIdQIgXQ5hMRWlz8YnSkQDCf8OY3wV6ef7YCbHPKnmCHxPXlkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJnZpeyi7MPc4P4rSrcAxYwsTYWytxrMalQDwg2ag58GV7h2oMojKQ7mzZKQ9gw4maAbLIwb2%2BYiArBhWJgv2Bm7zzn9Mslch38yPpgXZOjIrQtDMI6EBTvzFUVzDepwsCX4JGrnWtrcxm%2Bmb0A32EBTEjVRDV0zab1zQQcf6t6J9f1iMKlRM2AarxUbBox5EpfGTkIgT%2BZua%2F3ZQaRnD%2FYhWrBt66l0bsdEWHfnuvjS33t9O4%2FsnEqHJC3lSd%2FuU6UZZUm4Ke2eg0cdpztU9VPBxAq4NfpMh5UqkiLP50AR8u0uiPkLwXIWWXP1BoDGIMSlWv7kVKtcwhb5AbOC4MdM9R67VYaPaVF%2BzJEBr5OWGYYeZD53T7x0guvxrKw1Mgf77dkhwYCiY%2FkECJ7VooLzvL33c0HTDTjInjnu7CAwSAlOWo6P4buUAwC3XHfYB%2BSrQRitH0u2kJCPzjM3ijPJJNlTn7xvoPpjQS%2FfysaCvyWbZQZuaXZgHo%2FiP5sdgvcaWfnmQoehZZU3Kfc5lRS6%2FeMmvTeg0sIq2V5lJnQE9MXnnbaLqPCyhdeUFsdfy4dFq%2BG5JnAl%2BxAmLyu92jf%2BNiR6sk11EoR7g28xDYY3EN5lqo94qgEp1H12hFb57qUeIR7RqltHeINMK6Qhb8GOqUBhlWsssEN%2BI%2BvUEQV7KMyy4WsYtPB%2B%2F353nki4D1UuR3p5F0wCckA2auN5D1O5RE%2FGIl4tgMPstNSye0Gpk7gNRtyDFKNXPBgTx%2F78aWUNSy1p72GRammtgC3R0v4AUqYvnjuUehpxa6DPPD%2BI76p2TaHK%2BdhUzulCDcC3Y20fhgADezT8dp5tYCD%2BeidUeo%2BqmuWKr0OLr86IHl2t66wRje4kukG&X-Amz-Signature=0a2b7cd09b6c312d32209317916e1cd71aa4c43d9469c0fdf491892569351e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4O7GT4T%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYbmwB5nV3a%2FsD6KFm4UOpndwwPrfyS8oKzBAPc5wBUwIgXm1g7LCl%2Baq%2BFJWaeaE%2BtXg2i8kiDFudH%2BUTcwwdA8UqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4vZQ5KNwcp8G%2BoHSrcAwwcRcMMXDj5lNo2jfYNyVXWRg0eC8VtyHwz%2FV5KlL17N2bU1grrn1Ds0XcCyTeSTRoYScICphhv24WgVcmMt1xwhuPsOBlrknVe%2FDmaGZfaEpC4sztSoQQvLQrCgcgTO5BBYE%2BGJkCjEs4tP8ZOetjExKReJNno5gGIFb199J0jJG7a62HPQCg1rnPPyGor05%2FZGpNlF4V5s1VNIJO5IIQKoh2eoHBecX6EKZlM4ROjvWVtK6nU18ZLWYk1%2FWYKtHjQq9xoreX9iwr2cbWd0KikV%2Bu0mAHDTDF9E8bk%2ByDKrd7mm4j2bRFp0N8sUWQ10W8bvu65UV%2Bd1Eg%2F0yG37QrWESOXW0zGkxkmHgFaDn0DES4gFVclwzvi6Cltqj9nOK09Y%2Fn65HodalhBfNLzeTzHcznA5%2FAyiFTwdek27wVgtywEt6f4M%2BWBTr5oHSBb%2B2xuVsRKH9%2FIYaYvoSngTV74tWAKWM%2Be5J6EU6b4tMXGroc%2BpFWu9lISKO9b8ZeKA9SVLznYmdt8HNm9Vgm3o1IXzYJPSUNU22j%2FAW%2Bi1jfJXxtIMtaxBFz2leTLfalACdRK4AuPTVMnMWAiKMk22l4tkB3TT9B8p0%2FFjjnivA3mVSY43W3uTS7y6YrDMM6Phb8GOqUBS3rbJELZLdoD8aultU8OOTjQjpEe8tBXeqF9G9wlcRdRIdN2y%2FBWSSRCBkARB3SdX746iuBxe2oEWCDLpNpN%2BAs%2B5RU6gxxQFCYM%2BfGg7bJnHlgsB%2BcVGJh3HPMS3oALYz4a0aaQj5T8kbGsbujoG6wvzPwPHLQcIVHeeOIOvA%2FT3oz%2BL9FFZEbk9PjE0hrMd97RrUqkeEELsr5q%2F%2Fi5n4e%2FYpx7&X-Amz-Signature=d2d5b4303c844d67203424694bb42e18cf9a7247e9defebc38509b07c86e8a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
