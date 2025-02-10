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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYXDEKV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6p9fnbk26YdVuTHj%2BF4n46KgbxU6ub4SKSNNpqoZufgIgaQCcT7S1HwsSHtu7kHd%2Bvdqm4eEhpT01%2BdalYKdVebwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDNxHc62jZoUF07ySrcA2TxxXMkpDrCBWYu1Dk3Snrhcrw2oav6XPZIzO%2F71kWrL0DwtaJO1B7w6oN4BedC4%2Fex5KYkHPAtY4uvlmXOPdw9V5hahQI%2FZzZ6s1FG02rLW6Iyl%2BCPQO%2BZ2osaODKGJSwOalnJ74hHY2cf5I%2FUr4oQinV%2FylAo6ZA7kkfSQWv7ZqQ63C4gIKhcPSD64qsqRUQ6CMBYl2cbGJCppR7UIiSpn20gcQUUwJEJtb0f5YMvEWWW%2BcXCzEmWTpDcK%2B0UrQXohTtSGnmn6OIVaAVDmR5eU3sm2868cgMMgbUz0dNKdIMKrHy%2BxXrVQN5KG4gvLVmQ2wGSMvZM64rjoLCLom4gW%2B%2BteAs1%2BwI4k%2BJYLSdn9qH7BMeE15gFumr9DgWTaCNOSLpo2%2BWGwGzhGH7EBAJgZ4XcxfhJ9%2FSUFA7fsDSlQ4CjyPBpYwXJtD3zmeVEk%2FK74QHjzyrMguWwitAaSD9CfHN%2FSpP2P1dtitawOgUNrY3gNtHfrImZEz%2FNaTjvUlzeYlpmyif64Pt%2FRgAt9hVNWhEyV1QF3AC95LFt%2BWdPsF8YwLmNOF3sCQqAEwqD0WeC32%2BGIwRNtvUFf%2Bv8g9SR7Dq6OBY5MskxwZX3XpC%2BhgJsGtPHRuYqJZalMO%2B8qL0GOqUBP6HHCrA96O7Fahnz0qqm9OeHOGpFp6Nznb7VQUhHddAGvI1jbeGthnou6hdv7sDkrewGbpMg%2FbcvZm4lThJkrxkJLl7syTG4hbzIpQykKMqhiZFu%2BTCUMMfw6ztRdBsUSm7%2BWCFncDutNbBKNXZWHZDBNmP4e2pMCv4af5Xl5LX0Twfh65gc9iG0BMw3t6CUT1v9Kxe3kzGB1MSLOwO6Er1xwqJr&X-Amz-Signature=1103f6c1bf256ea90326aa5940340f1c246787a49c7b1e8d973cf7c83bb1f76b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYXDEKV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6p9fnbk26YdVuTHj%2BF4n46KgbxU6ub4SKSNNpqoZufgIgaQCcT7S1HwsSHtu7kHd%2Bvdqm4eEhpT01%2BdalYKdVebwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDNxHc62jZoUF07ySrcA2TxxXMkpDrCBWYu1Dk3Snrhcrw2oav6XPZIzO%2F71kWrL0DwtaJO1B7w6oN4BedC4%2Fex5KYkHPAtY4uvlmXOPdw9V5hahQI%2FZzZ6s1FG02rLW6Iyl%2BCPQO%2BZ2osaODKGJSwOalnJ74hHY2cf5I%2FUr4oQinV%2FylAo6ZA7kkfSQWv7ZqQ63C4gIKhcPSD64qsqRUQ6CMBYl2cbGJCppR7UIiSpn20gcQUUwJEJtb0f5YMvEWWW%2BcXCzEmWTpDcK%2B0UrQXohTtSGnmn6OIVaAVDmR5eU3sm2868cgMMgbUz0dNKdIMKrHy%2BxXrVQN5KG4gvLVmQ2wGSMvZM64rjoLCLom4gW%2B%2BteAs1%2BwI4k%2BJYLSdn9qH7BMeE15gFumr9DgWTaCNOSLpo2%2BWGwGzhGH7EBAJgZ4XcxfhJ9%2FSUFA7fsDSlQ4CjyPBpYwXJtD3zmeVEk%2FK74QHjzyrMguWwitAaSD9CfHN%2FSpP2P1dtitawOgUNrY3gNtHfrImZEz%2FNaTjvUlzeYlpmyif64Pt%2FRgAt9hVNWhEyV1QF3AC95LFt%2BWdPsF8YwLmNOF3sCQqAEwqD0WeC32%2BGIwRNtvUFf%2Bv8g9SR7Dq6OBY5MskxwZX3XpC%2BhgJsGtPHRuYqJZalMO%2B8qL0GOqUBP6HHCrA96O7Fahnz0qqm9OeHOGpFp6Nznb7VQUhHddAGvI1jbeGthnou6hdv7sDkrewGbpMg%2FbcvZm4lThJkrxkJLl7syTG4hbzIpQykKMqhiZFu%2BTCUMMfw6ztRdBsUSm7%2BWCFncDutNbBKNXZWHZDBNmP4e2pMCv4af5Xl5LX0Twfh65gc9iG0BMw3t6CUT1v9Kxe3kzGB1MSLOwO6Er1xwqJr&X-Amz-Signature=402bde1055e48c61e5c3e5fad814cde1189163d9c720b0a10053133ee373edfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWGGR7U%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoSBiPMVa8kisPg1i96B8aW8dShPH300t36AZjpP62ZAiEAsS7rO6zqdEI22sww6bbMxTi5kuB72US%2BKTDFTvddvHAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8UG0bspp3nfht0sSrcAx9UcpgFXMPktzfclP%2F9Ah0eKt3NppyrOc3HnjJEFPKvhj6naLEUP8U%2BAm3q6CmwYTu2RH5eueC9QvSSaM%2BG42s8uPeXKGBKu4%2FO9xIShKYDJP3h3a7spOs898MacNlHNrYU966N5E1TjcareQkRiEaPlw2F4UbxKASSdqEdeMbYjpMO%2B07XWYI7rPkWISIGQunLKLv3wfeFY3JSejts8mPhYK%2B8ZjqJ5mmhVu7Z8lSBt5075KQxcCr3sXt1rrnVE%2FxcXVZ0TSQv2oPKGMbzC03%2BmnTWrPk8Iz8wWn6q8QfYIk9V50U8Bd1biIMAPi6LWH9U9NKDUZG4LZKhgyowRzJtknCCelrSWZIoz50xNiM3iPE69mzhPaV2%2BjfgHC8qSDr7HO9pa55V%2BaWu87ab0bLfyuF1gCc4B3ccAqIMVyVsR04oMwhOgyrywZb%2BtcW%2FTI7jzLmACR1I%2FpaBALMAdnLFpnnfoB2QLG3Z6HJ%2BNJpykhbpJ3H2EOfIbCZApmSTbPqaC1PPH0i34ydhD1HQMkCseIvfv8JQ9WRy1LXs5%2BUkgWOBLgjUNmcRgsUHZOaLH9IcCZQaBT4VOSKS0Vgn6fIATnnzyw%2FXV33kE%2FExfBYXTDJyRSBPLJuP7nkhMKS8qL0GOqUBuqPD%2BdSWK7FMpXrPr6TxS1NEpiqAeOt3Hx8ljBlHMKe5ncD%2Bi0JQnYw6cZAl9Y3vLAZ8E6O2uxbSQh%2B%2BFyW5FEdUXxO9ROU3qzcF9FrYSaVCyTRa4SRSXxWFeQgdoQnjT9hC4rViyNdglR7QiHzrImoFBV%2BRPzlA4u73zsa8CKoZ4nuy6BhIby7mIo7SHKz%2BQJ%2FHGj%2FX4XLp2ALk3Gfecu792kRv&X-Amz-Signature=19386cc120e231f8592e03792a465b5074032ff172ec3224b4ca93ec282e3d85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBG3ALR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd81h7s5qzQcX2U5lZm9Ynu5HKUpKVaOI9CGUr7DASggIgXCRh1%2BlkQxTZuTs0Im731So0rUNfRQE5OhJF57IREZ0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNLldJNtPZXMLxWYCrcA9AVN1N29klw6xNw%2FgxtFzcZjtffqYEcNuaqSdkp8YM%2BmNkuH0Og4jcJyXfK8rMmBwGG6kLgNGkDVWpdSqjm6o8JBo%2F1XJqADOZXq6jY8sWjazR9QUbTk8oepWJyaUdlV43CVGFS8DMlN%2BLr83A2FRP49Jf%2BELmNCDSCOylZhZNr72o2rGOFIuEjpeu141vSXqfUbfm4mQr5y4xqU%2BXTulLRVtdfPfBWv1VBqHcDXxP7wPzYrWbDlncdaOaQyhUgjPp54xMwDGa5b1SOafituqE552CuB%2BeURsEAqaKqMjvPpsyu1H91frPGqqLy2cwfGCdHCuG6mhv6wEOrwqmy3ZgttBB%2BwLkwL3QD%2BRf8GnducMhyIE71OBpBKM0nRFvxmzP3T5KwMuCbIMnUCSb8dawxfSPKztOawDLvJ3U06StGJQ5sv1VqDAJcj9QIs46wYT5uOjr8%2FbOjmcRnuYmEnaIYOth1V%2BDdDGwfColVV%2BPxdYLwPZgw3KO4UY5qt4%2F63R%2FBiXxJ2%2FiXGU672DTMpr7taIouXeDmsQrTfy2HqSLrD89P%2F5e6EfdmkmuxlWCz%2BAyC9kHWM8jke8%2FYe9G%2BmSqC74neJxUB8SDMc%2FwnwSEVB%2FxArESkT2A7ccMuMIG8qL0GOqUBWI0h07e82NsoUBgRtR8WLgxU%2F5mXtUYLi%2BDnXBQe2Mh63ZmRdspWy%2FHxjCqSLQslMnmUkksmGEUIcuykbGcJYCGNFirW7iLXUysv5RybhR%2BtmOFVyF3QYGYBrXFXwnvc2O%2Bi2oUAY3vIvqFWy8PeGefqgeNIsQi0Gj4WxFbCbFwNW59Dv7LxPW7vdI4Q54F5iKSOaltuJntu4o9cIiwdRjn3Vlen&X-Amz-Signature=4ed52562882e08cedcfea957df2782ec052bfc6baa5fb67f8c6a7a5c33ef73e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYXDEKV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6p9fnbk26YdVuTHj%2BF4n46KgbxU6ub4SKSNNpqoZufgIgaQCcT7S1HwsSHtu7kHd%2Bvdqm4eEhpT01%2BdalYKdVebwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDNxHc62jZoUF07ySrcA2TxxXMkpDrCBWYu1Dk3Snrhcrw2oav6XPZIzO%2F71kWrL0DwtaJO1B7w6oN4BedC4%2Fex5KYkHPAtY4uvlmXOPdw9V5hahQI%2FZzZ6s1FG02rLW6Iyl%2BCPQO%2BZ2osaODKGJSwOalnJ74hHY2cf5I%2FUr4oQinV%2FylAo6ZA7kkfSQWv7ZqQ63C4gIKhcPSD64qsqRUQ6CMBYl2cbGJCppR7UIiSpn20gcQUUwJEJtb0f5YMvEWWW%2BcXCzEmWTpDcK%2B0UrQXohTtSGnmn6OIVaAVDmR5eU3sm2868cgMMgbUz0dNKdIMKrHy%2BxXrVQN5KG4gvLVmQ2wGSMvZM64rjoLCLom4gW%2B%2BteAs1%2BwI4k%2BJYLSdn9qH7BMeE15gFumr9DgWTaCNOSLpo2%2BWGwGzhGH7EBAJgZ4XcxfhJ9%2FSUFA7fsDSlQ4CjyPBpYwXJtD3zmeVEk%2FK74QHjzyrMguWwitAaSD9CfHN%2FSpP2P1dtitawOgUNrY3gNtHfrImZEz%2FNaTjvUlzeYlpmyif64Pt%2FRgAt9hVNWhEyV1QF3AC95LFt%2BWdPsF8YwLmNOF3sCQqAEwqD0WeC32%2BGIwRNtvUFf%2Bv8g9SR7Dq6OBY5MskxwZX3XpC%2BhgJsGtPHRuYqJZalMO%2B8qL0GOqUBP6HHCrA96O7Fahnz0qqm9OeHOGpFp6Nznb7VQUhHddAGvI1jbeGthnou6hdv7sDkrewGbpMg%2FbcvZm4lThJkrxkJLl7syTG4hbzIpQykKMqhiZFu%2BTCUMMfw6ztRdBsUSm7%2BWCFncDutNbBKNXZWHZDBNmP4e2pMCv4af5Xl5LX0Twfh65gc9iG0BMw3t6CUT1v9Kxe3kzGB1MSLOwO6Er1xwqJr&X-Amz-Signature=e98d9762231e3773f42cebacbaa4fcf521bf9f34c625a515171beeaaedeee4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
