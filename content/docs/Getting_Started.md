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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEABX5R3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJZJpQ%2BOi8FdG4cy2JTJv0QFw7NqPlJDh4FAWl9eySPwIhAL%2B8XazgL0RfqOv4rJbulPW5oHMJazh%2Fnr%2FWorUecP9jKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyteZ930Nh9SxbSuBoq3AN4Ibu1ZeGpehzxlvMQUFE%2BJmM47%2F%2Fws%2FaxgEKo8rlKGwVTLJQA6MQS7mAGHsPpkjQMg9f2CX6ryy83bChXhJrDDkxMiQ064aW16kNMsAjlcWY5SuZhnEwjOkN581eZXPJpfsLUK%2BTj7qAuzXeahtxEwngHcwSNWzymvCAoHnAJwxuWPZqUXn2w8uICMMYZb0gQ0SOhSAl4F4bSBo0wkXaiKIb9dV2v8auzfkF%2BVmmhN55IKkep3Xyspc0Q4cQ9CAAsc8zrNbBjM1FkeZWVghd4RjOhy9mYGpPmj0i0tzCNdBpdFI5954r5Dx6NkDwVk3Hl0Ut0gF1eR%2BwcLs5SYlu3XaM9DL9DcrpMOvq8jJWMDQLTU7iI2ytScjWO6ITSLCeEpQD6KZ1vRaYPyRyihIJhTrm9Hf8pFe7xrHbO6An1XOXnunTNzWlXBV0Xc6yFxPN%2B%2B6rtI%2BMBJgpAzCp31G16Dlpx65yk4cD1w6aOJ4Xndd9z92AhAKcJF9sYhbDePMVbLl2oiRjS%2FJxIGUQJW0a%2BIVa%2B3YJv8KmdPONsqu8olwsUWeGHABwpnpBWHuZkwd9kMtcXwyut3sbTb5YU%2BoraF7eCzz6MY98z2uDgOe35OGbOpaczP5XJmSzK9TDJ2pXABjqkAcKaCgExM2%2BLfkjaTImXIBTb5dM2Zo9ROpRbankpAvfzmsQxRm30%2FqRrjFD13hUa6b9Qx3eqYZkvjGGg1FXITAo9gHKUcGPlzVMrGnbzFViFBo3zfzHVS33n15p9Uat8rCTClRD5ynffpCC96LGEQV2DTFiG%2BTwsU8UPOo1coYSRBmSlI%2Bbf8fRP7zCmGfo7h5kqaQu5323%2Bd8v%2FzCn16pnOH0oI&X-Amz-Signature=bbee3b4e2da98acbb745affd95b68677a41185667d65d1e9a98c5511d96ee61d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEABX5R3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJZJpQ%2BOi8FdG4cy2JTJv0QFw7NqPlJDh4FAWl9eySPwIhAL%2B8XazgL0RfqOv4rJbulPW5oHMJazh%2Fnr%2FWorUecP9jKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyteZ930Nh9SxbSuBoq3AN4Ibu1ZeGpehzxlvMQUFE%2BJmM47%2F%2Fws%2FaxgEKo8rlKGwVTLJQA6MQS7mAGHsPpkjQMg9f2CX6ryy83bChXhJrDDkxMiQ064aW16kNMsAjlcWY5SuZhnEwjOkN581eZXPJpfsLUK%2BTj7qAuzXeahtxEwngHcwSNWzymvCAoHnAJwxuWPZqUXn2w8uICMMYZb0gQ0SOhSAl4F4bSBo0wkXaiKIb9dV2v8auzfkF%2BVmmhN55IKkep3Xyspc0Q4cQ9CAAsc8zrNbBjM1FkeZWVghd4RjOhy9mYGpPmj0i0tzCNdBpdFI5954r5Dx6NkDwVk3Hl0Ut0gF1eR%2BwcLs5SYlu3XaM9DL9DcrpMOvq8jJWMDQLTU7iI2ytScjWO6ITSLCeEpQD6KZ1vRaYPyRyihIJhTrm9Hf8pFe7xrHbO6An1XOXnunTNzWlXBV0Xc6yFxPN%2B%2B6rtI%2BMBJgpAzCp31G16Dlpx65yk4cD1w6aOJ4Xndd9z92AhAKcJF9sYhbDePMVbLl2oiRjS%2FJxIGUQJW0a%2BIVa%2B3YJv8KmdPONsqu8olwsUWeGHABwpnpBWHuZkwd9kMtcXwyut3sbTb5YU%2BoraF7eCzz6MY98z2uDgOe35OGbOpaczP5XJmSzK9TDJ2pXABjqkAcKaCgExM2%2BLfkjaTImXIBTb5dM2Zo9ROpRbankpAvfzmsQxRm30%2FqRrjFD13hUa6b9Qx3eqYZkvjGGg1FXITAo9gHKUcGPlzVMrGnbzFViFBo3zfzHVS33n15p9Uat8rCTClRD5ynffpCC96LGEQV2DTFiG%2BTwsU8UPOo1coYSRBmSlI%2Bbf8fRP7zCmGfo7h5kqaQu5323%2Bd8v%2FzCn16pnOH0oI&X-Amz-Signature=7a75cbc51ef8126ee6aa8824782dbdd5c2f465f35d14b038f251297c70270b56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZ6DU2Q%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCm0N7fyKRZ7Y92M8Sse%2BdF1HL7HltE9uzS3o5zmkIKOQIgJzu6kKapuI%2FMPI9uKxeLpt4NTTsIfWfA%2FaM8p4qKwdYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSz%2FirWR6y%2BVDFFuyrcA2JnFgYLUfdv33OgGQo22SWvzPv59pdGLvGiweMc%2B%2BJk%2BixTKyxbp18nLRoghqqYsBU0edkUUhveoSDjwIzZn4Ikbrq0prYvJ4b8HJ2At%2F7UGZJLwXZeLun%2Bhnlnm3BvfPAXGcbilymzYq6nkjOUBuqhwhbUaT7SXPeUXBzVpqr6%2FY9WG9MTZZ22k3cD2I1%2B1dH1XXvttQrglBNXrk8EiBTzQu7fNpnD3V7ahLJquNyWiFwe3qMCOIAGSXP5cxI34JIJeLyw5eslvImsJN9UCagC2321AZ6yH3eXo6uj6eWUeo4KEbMZhYDRqU8ZRhJhuwyMwmlyVUVbj4ZjK7%2FXCoJwo0E0SCi6OFugcmLx5rS7Vfrx2no6m44NAF4QlV9Awj5yvrakHFm66FXDg37Quilqu0ODeHEAUlAg%2BPz5CgNZdkSZNdnayloAjG96BXCD2z5KFLDsqWPcJGAshuybVH1SbXiq42MhiD4QCqR005sJNsSP%2BnPoXEv%2FwzWfn9AOjZm%2FoKDodi33YJjb%2FXjfbm4bf%2FghmvqlaItQARXVZWcdwJPS8gUv3J45xajTeJeviog6Z2I8MNHdNtlXPmMIGSa%2FH59TGBLx0qNNDrXeergaGcEFjtv0lHYF%2Bw4kMOjhlcAGOqUBhsYtMSXSTxzpzblY9odxP5x4vt5T%2Fb%2BhXnnVCe5EiU%2BX6hxSaKYuR%2Fe0QUaqQGYkCZutOPliOt0QLbCGBexO2SWxwgPdodliWRK%2B5cY8DVSuT8h8UrQiP5ePiAy1BPlUYRHJQ4rxCnPuMxKEk62yNtwR59kdi4l3hjNv%2BJnmeqUnvRQPo0CDOGPMqBlFRkSx%2By5zpG6xFUl2ENWo6cb%2FSsWCokN7&X-Amz-Signature=09a6e5d70d899c7d285b30161a05a0b0914195f9457218cca113b53c4646abae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJHINB7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCICnerk59BxMlXWpVGBrQ%2BRtd%2BwlGgGBllnCBA5EJQwm5AiEA7xT2xa%2FALCdhF9gjcIWFpNuzoyOP1hxBBOoXEvzurGMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGw5A9X4PIedKCJPNyrcA%2FW6Ow6s5VXBJOeuqiddaHbAbqvP%2F2PczGxXJiOuczC0NBrTtGDeoDzHHKjfKxr9rwim4obEiOBG0vUY6dAiplQeoILf6N%2FtTFVWVNx83wgIynmJf1tPbhEmINeEJuwPDOllKZdcbCeJw9S54MN6PJ9dehTWM4oMtchULpEUI0NNjFnx4SsWA7C1Ua%2F4mamHXpnA%2BhKWPdohjlayOxn6zuylUrTe9W9Ubr3sa%2BgVJFdsFo9xyle1okjH%2BO2BntacuAe%2FXZMCa9wyf8fdh785eAT0%2Bi3P%2BKMIn9iKanfsprYm9lCojEc42nKX9KiD0vZl376TwnIJJ7UJKzOJs548BX%2Fq2VzLREQOvAb%2B8T7K%2FUZGVyzM42nwDWPoNAv7FDXJTFv%2BVsFH6kwioUWVh4omK4Yx3SrsrBbWXdUmuo6nKsWwPvX7v%2FhLR%2BPFJi4Ng6UD8hgompmBcZJx3D3UbWyf7PqFrVVCDcxKiiBTNFt3%2B22QzBQloMlmb25kXodMlnADH8WAJQhVC%2Fay57767PVtqodR18kiKpjM%2BMzkGOwrhoUfwh%2FG7jqkt1u%2FHKUwkbxvPgDEMa3eCUeLu8AprWH7Ogg0PMxM0MNwLX%2BeFzpU8E1aAEig94fKiAWWBxcLMMDalcAGOqUBr2F5XOFI2cGXYQHhqzC6WiTshIX1Mo1XuKPnJB2E0hVRIrn%2F0CNaBmX4D%2BM0qhjF17b6cGDd6DC4E%2FYMplPGLpSuKPGZS0Sj4WiYIky23TyS6eobIFd7mxOuraVH%2B8VAPWCSH0kOd4ACrURAviEOsS05c5FGxgc78%2Bbud%2BToHZWWXfSMWdnt0D8esFH238HuixaYDsC1BsMGwv59B2ffxt70BH03&X-Amz-Signature=6d765dc32cd3924fdce807ce72c0b89f34b3260f1f88ed5839733d7c7b2b8b95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEABX5R3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJZJpQ%2BOi8FdG4cy2JTJv0QFw7NqPlJDh4FAWl9eySPwIhAL%2B8XazgL0RfqOv4rJbulPW5oHMJazh%2Fnr%2FWorUecP9jKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyteZ930Nh9SxbSuBoq3AN4Ibu1ZeGpehzxlvMQUFE%2BJmM47%2F%2Fws%2FaxgEKo8rlKGwVTLJQA6MQS7mAGHsPpkjQMg9f2CX6ryy83bChXhJrDDkxMiQ064aW16kNMsAjlcWY5SuZhnEwjOkN581eZXPJpfsLUK%2BTj7qAuzXeahtxEwngHcwSNWzymvCAoHnAJwxuWPZqUXn2w8uICMMYZb0gQ0SOhSAl4F4bSBo0wkXaiKIb9dV2v8auzfkF%2BVmmhN55IKkep3Xyspc0Q4cQ9CAAsc8zrNbBjM1FkeZWVghd4RjOhy9mYGpPmj0i0tzCNdBpdFI5954r5Dx6NkDwVk3Hl0Ut0gF1eR%2BwcLs5SYlu3XaM9DL9DcrpMOvq8jJWMDQLTU7iI2ytScjWO6ITSLCeEpQD6KZ1vRaYPyRyihIJhTrm9Hf8pFe7xrHbO6An1XOXnunTNzWlXBV0Xc6yFxPN%2B%2B6rtI%2BMBJgpAzCp31G16Dlpx65yk4cD1w6aOJ4Xndd9z92AhAKcJF9sYhbDePMVbLl2oiRjS%2FJxIGUQJW0a%2BIVa%2B3YJv8KmdPONsqu8olwsUWeGHABwpnpBWHuZkwd9kMtcXwyut3sbTb5YU%2BoraF7eCzz6MY98z2uDgOe35OGbOpaczP5XJmSzK9TDJ2pXABjqkAcKaCgExM2%2BLfkjaTImXIBTb5dM2Zo9ROpRbankpAvfzmsQxRm30%2FqRrjFD13hUa6b9Qx3eqYZkvjGGg1FXITAo9gHKUcGPlzVMrGnbzFViFBo3zfzHVS33n15p9Uat8rCTClRD5ynffpCC96LGEQV2DTFiG%2BTwsU8UPOo1coYSRBmSlI%2Bbf8fRP7zCmGfo7h5kqaQu5323%2Bd8v%2FzCn16pnOH0oI&X-Amz-Signature=c1897b3f56a65056ba7103f08f0a010fc9b973e0ab27a94ed1a5018fb403aad2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
