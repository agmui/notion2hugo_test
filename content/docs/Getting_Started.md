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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UILRRTJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDds0E%2BUeL%2BxsWWKNwAuGlXz%2BhPHuA6XhoF0FNz16t%2F9QIgTS9YnMWHEhZyMz76X%2BqkKZEzJla2ZfA459qkWBqBnIQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGaUE92%2Fi8GHSwnaESrcA4cCtm6iF6tw6FsgCS%2BYsd5Ma8BB62RAs2cekHwqBonqjMP7ca1ym9INEBPz5EUQ7l3AMD0LijkwNHjGf%2FcPdi7wuml7%2Fvt%2BVnoVPum2fThS9bxhOY9%2BvkU8LRZjexg8cYkUkfryPGuR%2F3oHFhWkr%2Bwx%2F0P%2BVo7Li%2BYXq3By4AbvIEUw3YAHYtW2TON9xlGCmFexI9ySgjvdUMTzW%2BKVILo3lm0xthjURobWJSkvs2esEIZ18rF7uUT0uCzqCRoaABDRmlx3pg9axqwDVhQvYexF3W%2BgxAMKCw9XrLwdmADTl98F1IX8zWlo%2F1jbWE9ra3z7DQ3ZjN5vYkXaDez0CJC5%2BVbPRZx7ovI6xUxaPjtmCXPwtpmtLW9fajELCP4OCjZ9F7pT%2Fm8tj7kMrO1R9mNslO2bKdR7egxHvyDgvKbCOw1oKFYpyxygtusEaOx6u7oJxupUbmuaL7qk9yvBRn%2FvaXDioh06fSPwKeza%2BuowmGGh%2Fm44fVrEw%2BIKk2czzytji5NCw%2FiaNJPTtyIs2oKuF1%2FS2vnHsWKenpjNxwSpCf7wMAsteSmKaYbdwll70KVswJgKcneYibGyuIl77cjw0QZBdEhI8Gr%2BNOsgX41WPJF8zIMDD%2FriVxxUMNrTkb8GOqUBwhY28mS2GbcoGzJ3pUMSalcXQF%2FjCvuN8Q%2BfakRgFyUHW9%2Ba%2B%2FmYWo0rExDSZwzYbN51ZrHJISqfIQZ%2Fy2mFWMtxAC9fmWWIzc6uAeAZzrpEo3lfJvcxa2waNNzb0oKnq52slenAvpg15%2BI%2BtVonoifZ5GtWpA4gpTtfk5dtyMYq%2BIam0U3TmW%2B0qP5SLXCTAql6x3PJKuStlUjI4qdYplx4obIT&X-Amz-Signature=100d0d359977e7ce960251df64a284929e6017b0392eea16b808baec82590440&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UILRRTJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDds0E%2BUeL%2BxsWWKNwAuGlXz%2BhPHuA6XhoF0FNz16t%2F9QIgTS9YnMWHEhZyMz76X%2BqkKZEzJla2ZfA459qkWBqBnIQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGaUE92%2Fi8GHSwnaESrcA4cCtm6iF6tw6FsgCS%2BYsd5Ma8BB62RAs2cekHwqBonqjMP7ca1ym9INEBPz5EUQ7l3AMD0LijkwNHjGf%2FcPdi7wuml7%2Fvt%2BVnoVPum2fThS9bxhOY9%2BvkU8LRZjexg8cYkUkfryPGuR%2F3oHFhWkr%2Bwx%2F0P%2BVo7Li%2BYXq3By4AbvIEUw3YAHYtW2TON9xlGCmFexI9ySgjvdUMTzW%2BKVILo3lm0xthjURobWJSkvs2esEIZ18rF7uUT0uCzqCRoaABDRmlx3pg9axqwDVhQvYexF3W%2BgxAMKCw9XrLwdmADTl98F1IX8zWlo%2F1jbWE9ra3z7DQ3ZjN5vYkXaDez0CJC5%2BVbPRZx7ovI6xUxaPjtmCXPwtpmtLW9fajELCP4OCjZ9F7pT%2Fm8tj7kMrO1R9mNslO2bKdR7egxHvyDgvKbCOw1oKFYpyxygtusEaOx6u7oJxupUbmuaL7qk9yvBRn%2FvaXDioh06fSPwKeza%2BuowmGGh%2Fm44fVrEw%2BIKk2czzytji5NCw%2FiaNJPTtyIs2oKuF1%2FS2vnHsWKenpjNxwSpCf7wMAsteSmKaYbdwll70KVswJgKcneYibGyuIl77cjw0QZBdEhI8Gr%2BNOsgX41WPJF8zIMDD%2FriVxxUMNrTkb8GOqUBwhY28mS2GbcoGzJ3pUMSalcXQF%2FjCvuN8Q%2BfakRgFyUHW9%2Ba%2B%2FmYWo0rExDSZwzYbN51ZrHJISqfIQZ%2Fy2mFWMtxAC9fmWWIzc6uAeAZzrpEo3lfJvcxa2waNNzb0oKnq52slenAvpg15%2BI%2BtVonoifZ5GtWpA4gpTtfk5dtyMYq%2BIam0U3TmW%2B0qP5SLXCTAql6x3PJKuStlUjI4qdYplx4obIT&X-Amz-Signature=3d500c119b82975f5091293265e9ceb19e81b20ddf993a2d992c7cff4ac0c1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3P4AIV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf5gw%2FSj8vjfRCwgigEUcTWbktp%2BGn08J8utA%2BibWMTgIgVUF18JF1ERgjJkKz321SysHqodBT%2BabMPQCaudNZo6Aq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDB1REfdeQxdXZEgkyrcAyVAW5bHii4Czb7jxDo8K06eDN62asN8u98ekVNAgnv4UHLe4IqrP7RmgN2htPNp2avodhrBEUbk66Xyj%2B%2Bh9dmdt%2FLcbPEpsAMoyYjWXULtXsT6fUI8ZU1qe%2F7YjLGeDCX1CsW%2FdypXkyXgl%2Fgfo6iSIc1O6c%2FNnflSe93sHlGx2pWi4uNcZi1evg%2B5W6BmDqevIKpt8sjJ%2Fk8foDv1qXcoYoZvgEY2Q67lxKAgwBK1wVqflD8m5kmMg%2FP%2B0TaKmGNrUh0pt9TzNNKQbsHXuQC9OmnwGJb5V1GfWR4ih%2Bv8sHc%2BNflZp9381V%2BM8oUIiJFIyA4D9Fa5AEl9EuJMP2F1TjP61vIvi5RPV66CqY2%2FtnYVMrLKoV%2F81se%2BKNyBp%2Fy3V%2FLMpPRSSFoZSADrtDUGMbRWMnACMmOqWx5i6VgzpMPqMDWbCDccypr%2FS7WaagwQ0kDzGgNm6x9IdPY1Rqq6Dlgg2z%2F3ExDE4kbk4m3Nq0PmM8Wv2Hp6X6YQ6hPOm%2FPsrPB7SVyyxbuqb4JeEbj%2BnbZmUgCSyDyrVFc2euVsnX0kyFQirmYdH1psbWIU4AySHk5hEJyDxLWxThJO618KS1SK1QpDYZ2qXKtmpzRVX33BjTRvZukOW%2BQEMK7Skb8GOqUBb0%2F0WuLLm5EqwlINHh1mMcaWa5LZ0IRTKtIb1OBEMVOBeHqMHbS50YSnsMhhqgZOJrXQQRl7%2FCre9tWE53iODHUxTrnavJppMGcJqSXhjYBKZW1g3Vzga1EfFMmzxqFS1lH8Lk5as7qw5o%2FDzkmnk05LmFsiqt9B5C2fYl5oRN3tCDRLJdqj5G1IIczefyIOJFBEbokw87PCGbk1i1xK8DIQhU7Y&X-Amz-Signature=2a336641b37509962a602ec60f78728f4e08aa70b7c787245ff11fa14f64b92d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCLA27Z%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHXdWVXQaDEa81dVGbMyoBNayr0AdjNieIb6h0WrAQfAIhAMag7vSmFFtt8xPsss5ZDmYogqRjAWgZIYWs9CAlbii1Kv8DCDYQABoMNjM3NDIzMTgzODA1IgyLql9X6ILQXC81Y54q3AOuYaEVi4XHIVz%2BpAhPOV1mbyF7%2Fn8KhaOLGVOBSSDKmktnIil3RdwGc4qBWzW%2By5B7MlC3lMTkSaY6y6Y8ZLoW9mMY5NCjXVpm34HXAZt%2BfthLwmbsb24A86oblf2xL3ErBVokZHxi9gP7dZv2ZuQaIfqxgqTWuQ8w3VUsOIvW9yhjk0lSPNNV0iEZiuDoalRAfbHP8GYoPRu6y2LOlFCBl%2BX3yC9Bt6o2GaYr8O8KZgesaQ5Dp0md1%2FQ0c7g67jzoya5MYwNYTDBWkxCvUpgNnzDl1ufnGm1wuDRktRSZlx6gRBy%2FcbmSpWZVzTSGcM3KzobJK%2BlPMg%2BvhTp2m9OVYRzVH%2F5XILMEgvbjpHsmnL7YLDBKzMu481CXvOrltDKFwSNbl3UxcYo%2FYxKzVV2U0UefI5jKza9Hww5AtW3qt8TQp6iWKEcdxjTfb8TeM9O73M2VlHc4%2B6ASigQ35cgIZ7E%2Bih8h2FRZlV1ZSu0RGOZmWscRFJDCQezdBuDrSOKxHAKc4EfvbTEGeMA7bHMUj%2FBa13BPEB%2BE4i5hgFWT7ygXQjeu9TlRtocLc%2FxBCMHfv4MTDGLSzhM2G16eEQgPOpUPuS3YmVKFV9BaQtqK%2BydZZdghzpnwjr7EDDCq0pG%2FBjqkAYrNbK%2BLGJFbrQPoH3Ogu%2BtS0Tk8JXUpUgA%2BLCDUQC4DlgzPyRZP7u%2BGYdsLpuZa8dv2dB5fWFpLgkw%2B9vOYWf1SkFAnUgvoKUNugv0FEvgu6%2FhBi%2BGr5xJb8itnz%2Bv5OKvlJLTXA7NkG1W4KqUesNzXJPSxRkbECMzI3vSpnmrfR92DhmzhfbADwJGgdfVMDGjK98gMkLoloV3jVAHnE%2BgGBpFS&X-Amz-Signature=a18caf675a66e1d7a28cd4ab78f1cb9bfd8f97ab7b96f5f0e32fef90034c7fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UILRRTJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDds0E%2BUeL%2BxsWWKNwAuGlXz%2BhPHuA6XhoF0FNz16t%2F9QIgTS9YnMWHEhZyMz76X%2BqkKZEzJla2ZfA459qkWBqBnIQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGaUE92%2Fi8GHSwnaESrcA4cCtm6iF6tw6FsgCS%2BYsd5Ma8BB62RAs2cekHwqBonqjMP7ca1ym9INEBPz5EUQ7l3AMD0LijkwNHjGf%2FcPdi7wuml7%2Fvt%2BVnoVPum2fThS9bxhOY9%2BvkU8LRZjexg8cYkUkfryPGuR%2F3oHFhWkr%2Bwx%2F0P%2BVo7Li%2BYXq3By4AbvIEUw3YAHYtW2TON9xlGCmFexI9ySgjvdUMTzW%2BKVILo3lm0xthjURobWJSkvs2esEIZ18rF7uUT0uCzqCRoaABDRmlx3pg9axqwDVhQvYexF3W%2BgxAMKCw9XrLwdmADTl98F1IX8zWlo%2F1jbWE9ra3z7DQ3ZjN5vYkXaDez0CJC5%2BVbPRZx7ovI6xUxaPjtmCXPwtpmtLW9fajELCP4OCjZ9F7pT%2Fm8tj7kMrO1R9mNslO2bKdR7egxHvyDgvKbCOw1oKFYpyxygtusEaOx6u7oJxupUbmuaL7qk9yvBRn%2FvaXDioh06fSPwKeza%2BuowmGGh%2Fm44fVrEw%2BIKk2czzytji5NCw%2FiaNJPTtyIs2oKuF1%2FS2vnHsWKenpjNxwSpCf7wMAsteSmKaYbdwll70KVswJgKcneYibGyuIl77cjw0QZBdEhI8Gr%2BNOsgX41WPJF8zIMDD%2FriVxxUMNrTkb8GOqUBwhY28mS2GbcoGzJ3pUMSalcXQF%2FjCvuN8Q%2BfakRgFyUHW9%2Ba%2B%2FmYWo0rExDSZwzYbN51ZrHJISqfIQZ%2Fy2mFWMtxAC9fmWWIzc6uAeAZzrpEo3lfJvcxa2waNNzb0oKnq52slenAvpg15%2BI%2BtVonoifZ5GtWpA4gpTtfk5dtyMYq%2BIam0U3TmW%2B0qP5SLXCTAql6x3PJKuStlUjI4qdYplx4obIT&X-Amz-Signature=ca7203c29a7fad53001e593931288a5164e3b5cd81fa19054924fda1de8c277d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
