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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB6UDK5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAtaIxNVTxu7e9UiXgPVbguAOFRbmLyouGipAeDm8wsKAiEA%2Bib42RWBVKHXEceCkrGNNdMqF54CzwlDYPbHj2zRpo0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPL7YXU6jZi7SSmSyrcA%2BKVVvcWamj9Z51AgajkTMTWzZObvSo0GDbaIXADVbgjVWlHDODa8Sw%2FsdWUBonEql%2BKtURWw6Z9bvM64CZPLqvmHmnG%2BO7WxyPvCV4rUTbilzy6R91Ex8tr67JEcrWevGxxllJXHjP7v%2BmFbkxJGtpPo2OKpj4ilMVcnum6jBpAshAp2GhfzbrDBRV5607mRYVoo%2B0A%2BNUDXKQpuvkv9MTa5TuUbXA69nxvYwHhcsKJHLzdKbVJzLXir7s1ztIq0EV2i951828tIMXkfjpWmEmOuAVY0BPr7msWQpDTv0vrNq%2B3Z5TuqlOiP%2BAv%2F3IpsVi7SepHooApZ1vxKS1lyTYd5j8ZFJ4T5kA%2BlTbq5wvhVGSg%2FKWCWz6lXx6bVny2ZTVDxobYJnQVm%2FFbRs0mNV0iYGcFCMuC1BSl4wgJ1%2B3SpvNndOtGMM3GLMWJk0r0ROf3BXWHyBu6TNZapR%2FYN8hk6mAArvaQxoPSxKo4vdhNd2RVFUYt%2BBCw1VKYGtJy3iKO34ADGUThtPM7jsREgVoE1aiJDotdMyCbZRwjifwxdu0D%2BHiiTp%2Fz1AZuuIOse1cmDvJAYIMoWJ2sdFicjJOXHurT3%2Fz6Vt0IbgIh6PMJswW8W%2F8rsTyu6%2F8yMOOG774GOqUBbRQ0kP0EAz%2F3oaE1nm1a3Bvt66Kv9Tr%2FuHbjlL%2FlcoygPAQXJxPa1fsDJV7bVYu7dKtRZyrTfKJfUjx%2BgSVdmQX%2FwRzqJbNoQnNRtxUDNXRiPK2eNcq8uzvzi8ijNAiYj7BHCDrcn3y8uIHJnIrjpz2p9UZFJNNeXeNUM3U%2Fjnl4366GfOBfgsWCUB%2FgDLJIbkqV4mH3LX5yPmE5COvuUpq%2Fqs2Z&X-Amz-Signature=86df7da44d53461826409202bb0f6bc2b3bfbecc5c376ee0613a2da7096b9b93&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB6UDK5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAtaIxNVTxu7e9UiXgPVbguAOFRbmLyouGipAeDm8wsKAiEA%2Bib42RWBVKHXEceCkrGNNdMqF54CzwlDYPbHj2zRpo0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPL7YXU6jZi7SSmSyrcA%2BKVVvcWamj9Z51AgajkTMTWzZObvSo0GDbaIXADVbgjVWlHDODa8Sw%2FsdWUBonEql%2BKtURWw6Z9bvM64CZPLqvmHmnG%2BO7WxyPvCV4rUTbilzy6R91Ex8tr67JEcrWevGxxllJXHjP7v%2BmFbkxJGtpPo2OKpj4ilMVcnum6jBpAshAp2GhfzbrDBRV5607mRYVoo%2B0A%2BNUDXKQpuvkv9MTa5TuUbXA69nxvYwHhcsKJHLzdKbVJzLXir7s1ztIq0EV2i951828tIMXkfjpWmEmOuAVY0BPr7msWQpDTv0vrNq%2B3Z5TuqlOiP%2BAv%2F3IpsVi7SepHooApZ1vxKS1lyTYd5j8ZFJ4T5kA%2BlTbq5wvhVGSg%2FKWCWz6lXx6bVny2ZTVDxobYJnQVm%2FFbRs0mNV0iYGcFCMuC1BSl4wgJ1%2B3SpvNndOtGMM3GLMWJk0r0ROf3BXWHyBu6TNZapR%2FYN8hk6mAArvaQxoPSxKo4vdhNd2RVFUYt%2BBCw1VKYGtJy3iKO34ADGUThtPM7jsREgVoE1aiJDotdMyCbZRwjifwxdu0D%2BHiiTp%2Fz1AZuuIOse1cmDvJAYIMoWJ2sdFicjJOXHurT3%2Fz6Vt0IbgIh6PMJswW8W%2F8rsTyu6%2F8yMOOG774GOqUBbRQ0kP0EAz%2F3oaE1nm1a3Bvt66Kv9Tr%2FuHbjlL%2FlcoygPAQXJxPa1fsDJV7bVYu7dKtRZyrTfKJfUjx%2BgSVdmQX%2FwRzqJbNoQnNRtxUDNXRiPK2eNcq8uzvzi8ijNAiYj7BHCDrcn3y8uIHJnIrjpz2p9UZFJNNeXeNUM3U%2Fjnl4366GfOBfgsWCUB%2FgDLJIbkqV4mH3LX5yPmE5COvuUpq%2Fqs2Z&X-Amz-Signature=8f4ce1726dc419a8b7306f22a207e994b40289564296eca7566bdda6e68f293d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQTGT3L%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFAgQDqNe2wwXxlUUMVZY0FofEaVbqovftB3nCLsdbmUAiBXAyyLj1Fe61qsCgxaDSpAfWpPFuS%2FNQvswS1iblh1NCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB62ZZPrxk758PVvFKtwDyPX8qf8CpPtwI4CRGMC7bogBvPxj2wVf5HaGouVRj3yoxlcxl8ySmx6f1oSmpCB%2F9ZDT6tTmwlcpytSICjU%2B7Cf%2BuuoNIPJgOqnoQLHJHOU0GkCITi%2B4dHQr2ct4pdPSssvWuyAX03JK3gLiXk4KpX7xS1ASlkoetDPwQEwWaECKrfCagIakQO9eJEeLSoJk%2FLHAjim3j13JmrQcTRFnHlhc2HIh2XdeATPZw878%2FbRtxB%2FKpyA9G%2FkUpvhbvaBpWRVpaik9bKZR%2FhlzikUV%2Bf%2BO1DOvl%2FZhRkmCOzwjD2UsBK8G2AcoCkqNw8QGNNknwuCKIQkohIqAjcfu5lZmRpNMDKpQm1%2BIOkwHgq4oDoXMqFM9oGpvfFlhZc2oIJ7IecJ%2F0gP1Zg4ow8OTA7x1Ef3KQcRnzBntOlTbp8flBEFitAVIzn5rwfCdxT3Q249aOKLLrFKtVhzqjP7uoWCnSkSq0xNY6Z0U8HR8rrys6mibTHE1S67jkIAwLJ%2BzbXJUkybvfvtRZfoBmlOk8YYCiJGI0WwWguAED3TY3F01FSSfm0eZUrbnP%2BwjAKQUNjJ09ATunRqm4Yz%2F1bQT%2FFIr7epVfMfS%2FJMMpGsLKSP0e6p%2Brl%2BWiXpEIGqm83Mws4XvvgY6pgHLsAtdJ1Tjlu6C2UV8g9TLTYQjoI4k8rBs0e4Y4U%2BI2VwpGxBfUYPExZQWQL2Hv2IxuFaAbi6nv6KSxFYpj2NZos9N1zc83VqYBx9cE14ATfQebA8PZAcre%2FVRfAn8p0UtNKV%2Fcw5qGmp4s%2FovEPdiu%2BnqpMA4Bt0brUqx4VK5dQ5MpAXDSAQHVHZ4p1dp35B7aesKOaoElRv35ycOZit0FSq0v1Xw&X-Amz-Signature=a3c081b200a74db4ebed736b7013b859334b45defe5799bf08825b9e019ad17a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJ744OK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH3wGYWlFiiPZgJBNYahDxXjEE55VQFPyq7lK5Zablw7AiEA8BMXBTjTNPcWQo0IkuyNzyfqB9xrWOpIzcJWhFElQZEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh%2BshjlEr88YxHMDCrcA8m%2BtehZGH5fYtru1FouodHSIgWBYVMBktqoEI5LFE3EKYV0EpJJfA9iUBX%2BbW24c2wzd37Aqau3nq2sSWyY9p43S7EXSSCxZ9w9L266Rg3rAqINLE7rEKHjCxlismG9aohzpJI%2F4ifyV1fsUsMhvqR%2BcfaF%2BYG1u10S9taApD6U05DtCT8d5uW2zSJPOxK1J2Cjw2ljdEDAWypn3fBxeQqUhEe3zIuIySHb2BKjtaPZXnJntVu%2FKOYW74Re0VPlovzaiXaxcgUsexEnazHOreCmournZNx72ArlrriB7%2Bn8Uj2i7dg5xIPVkpiQ03kG9o%2BOMr1L2oDLEDals8iYrKNqPeM6VRSRI7W7y7APGjds3ScfNjpxSg0Zt5ZXa8a25Eq2CUaK%2BukD7zlWqQNeXn5aT779%2FigF6DQFD7RREocsyfPIKoMQRWwEKIt5bhPrBsgpYvkEF2OSpiRrvaKZI53rVTJPt%2FrZS2yrzYKcBN1prsiZ0fLGGomZvWRNSzM2YeMT7%2Bp6B9343sjdg%2B%2FtpO9anYPyzJDQJpEkaTLZvPae5HMFxoxAnS0Qs1gKZ1c9lKIsFscXQ%2FwNArVl8kNprQiz9cbt0TB0y2%2FIM4fh%2Bzzxs8TPc%2BYyFUy7jYJ%2FMLCF774GOqUBRw8gZ7JHww9Zcohx5R%2FgoJn1XFljNob9i4coQ%2FS7h1SH7Oho2FDA5iQgy3UEc22EKZWoxbLyWoYkl%2Ftzj4djsBD5C2p73uRKdpoUD4s8K1pI8RUJgmsFzM3fG9fmfztNeZNFfnfDf1io%2BJ2ziAcPSB5%2BVbfHGrFuiieEutrGSCpDP2VNvWIoNYhMcR37Tf%2BAkY5Lw%2FrPSy4wuUai%2FhQxbmXhRnoO&X-Amz-Signature=97ed8d93c9d523d28f6c1b4fa655f980b5922bd5dc13103bbed0a0c5e9561d21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB6UDK5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAtaIxNVTxu7e9UiXgPVbguAOFRbmLyouGipAeDm8wsKAiEA%2Bib42RWBVKHXEceCkrGNNdMqF54CzwlDYPbHj2zRpo0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPL7YXU6jZi7SSmSyrcA%2BKVVvcWamj9Z51AgajkTMTWzZObvSo0GDbaIXADVbgjVWlHDODa8Sw%2FsdWUBonEql%2BKtURWw6Z9bvM64CZPLqvmHmnG%2BO7WxyPvCV4rUTbilzy6R91Ex8tr67JEcrWevGxxllJXHjP7v%2BmFbkxJGtpPo2OKpj4ilMVcnum6jBpAshAp2GhfzbrDBRV5607mRYVoo%2B0A%2BNUDXKQpuvkv9MTa5TuUbXA69nxvYwHhcsKJHLzdKbVJzLXir7s1ztIq0EV2i951828tIMXkfjpWmEmOuAVY0BPr7msWQpDTv0vrNq%2B3Z5TuqlOiP%2BAv%2F3IpsVi7SepHooApZ1vxKS1lyTYd5j8ZFJ4T5kA%2BlTbq5wvhVGSg%2FKWCWz6lXx6bVny2ZTVDxobYJnQVm%2FFbRs0mNV0iYGcFCMuC1BSl4wgJ1%2B3SpvNndOtGMM3GLMWJk0r0ROf3BXWHyBu6TNZapR%2FYN8hk6mAArvaQxoPSxKo4vdhNd2RVFUYt%2BBCw1VKYGtJy3iKO34ADGUThtPM7jsREgVoE1aiJDotdMyCbZRwjifwxdu0D%2BHiiTp%2Fz1AZuuIOse1cmDvJAYIMoWJ2sdFicjJOXHurT3%2Fz6Vt0IbgIh6PMJswW8W%2F8rsTyu6%2F8yMOOG774GOqUBbRQ0kP0EAz%2F3oaE1nm1a3Bvt66Kv9Tr%2FuHbjlL%2FlcoygPAQXJxPa1fsDJV7bVYu7dKtRZyrTfKJfUjx%2BgSVdmQX%2FwRzqJbNoQnNRtxUDNXRiPK2eNcq8uzvzi8ijNAiYj7BHCDrcn3y8uIHJnIrjpz2p9UZFJNNeXeNUM3U%2Fjnl4366GfOBfgsWCUB%2FgDLJIbkqV4mH3LX5yPmE5COvuUpq%2Fqs2Z&X-Amz-Signature=83d08338bcf80a459eb76dbf64969102e1fa0d0ea0c877859bbdda883dbbaeba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
