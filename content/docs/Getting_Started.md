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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOR5KJ2W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDfHggZkgdcf8Tmx8mrn6v8ya59xq7%2FIBExBGPlRmtC7gIhAPig6XYFuyiRlTWgZppc6en33khFll5AIJDZr%2FjGTPpaKv8DCFYQABoMNjM3NDIzMTgzODA1IgxVVaB9Dhg6q4FGKK0q3AMNmW3UlMN%2FTPai%2FOdafEv0%2Fm6YF777JPXSp%2FlbWQc7wzGcbvmSBrP1vbEzdBMqhWVdqESwe%2Bc3FRSgV1tUj0bzCD6CrJO2nJys1wibIYX2BD79kGs%2BNW35D9Ncvgym6KNGH0z25WWySZXqfmWxCwRGqriS0IKzrRPiGH223L831gDU3%2BxjqwNVbiw74v1whsrwCuYR5123Anqds05aY9WElOfGlFV7On95xvVXWbEZp0Igut%2BhjhsJwCLGRSFO6j5Zw3gU7hCh2pim%2B5FU80ttCEwp%2BQrHZ31lLXTbelOeyo2Sb40h5xhSma9n0c77SnSPQ%2F9b7QOJOiJMjVszewAMrA8d4O9R4p8%2BVMYuhj9rCJYDc8R1VlCVQ3vztz%2BYxa201zUchUmoxeN7%2BE4Ap1utUz5crl0ov58UGBSFQ7FrMTJxbU5hEZF0aHYHbefxfPbNHQeoe9sbk%2FZXNhqnzRID2BHqpbbTPTeIXUXD0QbUzZPhNS72q1Ir%2Bfj%2BqA9T5f2cborfuTudoqqCj%2FPzP6PdJiGMy5BQQk2CQYjL31oZocs%2BJaFjBwfYDXGugqAn67UNOZPXAZoCTUHD1vL2%2BKnEKMjtXY99S%2FxM3rg1VRJGBvXt%2BHflEejQ%2FwyckjDksvPCBjqkATHrryNCkS7GcJiPWlkqb0fAZp5ls8o3dCMdvYkhqDMikedibN61k7s4UgHasxgsAwjLP4B4QCFYzlPntN3fciRWgGYbgkjq20%2BCLCuAL5RX9%2FR8s6hYTLXwPweS5lXMrlROE7ivToj%2BxHOMa%2BkREbeEMY%2FqaeI3k9yD4IBfFQ8ATUsUbl6Q4yiyUbKTS%2FhvQMwZJCNsKeR5%2BXgOyfi5r9p2s5oy&X-Amz-Signature=c0aa1a24a5da5e38a9019c7082be98151c06f530fbeb4a164cda1756f6122805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOR5KJ2W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDfHggZkgdcf8Tmx8mrn6v8ya59xq7%2FIBExBGPlRmtC7gIhAPig6XYFuyiRlTWgZppc6en33khFll5AIJDZr%2FjGTPpaKv8DCFYQABoMNjM3NDIzMTgzODA1IgxVVaB9Dhg6q4FGKK0q3AMNmW3UlMN%2FTPai%2FOdafEv0%2Fm6YF777JPXSp%2FlbWQc7wzGcbvmSBrP1vbEzdBMqhWVdqESwe%2Bc3FRSgV1tUj0bzCD6CrJO2nJys1wibIYX2BD79kGs%2BNW35D9Ncvgym6KNGH0z25WWySZXqfmWxCwRGqriS0IKzrRPiGH223L831gDU3%2BxjqwNVbiw74v1whsrwCuYR5123Anqds05aY9WElOfGlFV7On95xvVXWbEZp0Igut%2BhjhsJwCLGRSFO6j5Zw3gU7hCh2pim%2B5FU80ttCEwp%2BQrHZ31lLXTbelOeyo2Sb40h5xhSma9n0c77SnSPQ%2F9b7QOJOiJMjVszewAMrA8d4O9R4p8%2BVMYuhj9rCJYDc8R1VlCVQ3vztz%2BYxa201zUchUmoxeN7%2BE4Ap1utUz5crl0ov58UGBSFQ7FrMTJxbU5hEZF0aHYHbefxfPbNHQeoe9sbk%2FZXNhqnzRID2BHqpbbTPTeIXUXD0QbUzZPhNS72q1Ir%2Bfj%2BqA9T5f2cborfuTudoqqCj%2FPzP6PdJiGMy5BQQk2CQYjL31oZocs%2BJaFjBwfYDXGugqAn67UNOZPXAZoCTUHD1vL2%2BKnEKMjtXY99S%2FxM3rg1VRJGBvXt%2BHflEejQ%2FwyckjDksvPCBjqkATHrryNCkS7GcJiPWlkqb0fAZp5ls8o3dCMdvYkhqDMikedibN61k7s4UgHasxgsAwjLP4B4QCFYzlPntN3fciRWgGYbgkjq20%2BCLCuAL5RX9%2FR8s6hYTLXwPweS5lXMrlROE7ivToj%2BxHOMa%2BkREbeEMY%2FqaeI3k9yD4IBfFQ8ATUsUbl6Q4yiyUbKTS%2FhvQMwZJCNsKeR5%2BXgOyfi5r9p2s5oy&X-Amz-Signature=cbbbcde96a22bd2d72a676a357b938805d63401fd5291ee5cd6946b13c20dd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOR5KJ2W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDfHggZkgdcf8Tmx8mrn6v8ya59xq7%2FIBExBGPlRmtC7gIhAPig6XYFuyiRlTWgZppc6en33khFll5AIJDZr%2FjGTPpaKv8DCFYQABoMNjM3NDIzMTgzODA1IgxVVaB9Dhg6q4FGKK0q3AMNmW3UlMN%2FTPai%2FOdafEv0%2Fm6YF777JPXSp%2FlbWQc7wzGcbvmSBrP1vbEzdBMqhWVdqESwe%2Bc3FRSgV1tUj0bzCD6CrJO2nJys1wibIYX2BD79kGs%2BNW35D9Ncvgym6KNGH0z25WWySZXqfmWxCwRGqriS0IKzrRPiGH223L831gDU3%2BxjqwNVbiw74v1whsrwCuYR5123Anqds05aY9WElOfGlFV7On95xvVXWbEZp0Igut%2BhjhsJwCLGRSFO6j5Zw3gU7hCh2pim%2B5FU80ttCEwp%2BQrHZ31lLXTbelOeyo2Sb40h5xhSma9n0c77SnSPQ%2F9b7QOJOiJMjVszewAMrA8d4O9R4p8%2BVMYuhj9rCJYDc8R1VlCVQ3vztz%2BYxa201zUchUmoxeN7%2BE4Ap1utUz5crl0ov58UGBSFQ7FrMTJxbU5hEZF0aHYHbefxfPbNHQeoe9sbk%2FZXNhqnzRID2BHqpbbTPTeIXUXD0QbUzZPhNS72q1Ir%2Bfj%2BqA9T5f2cborfuTudoqqCj%2FPzP6PdJiGMy5BQQk2CQYjL31oZocs%2BJaFjBwfYDXGugqAn67UNOZPXAZoCTUHD1vL2%2BKnEKMjtXY99S%2FxM3rg1VRJGBvXt%2BHflEejQ%2FwyckjDksvPCBjqkATHrryNCkS7GcJiPWlkqb0fAZp5ls8o3dCMdvYkhqDMikedibN61k7s4UgHasxgsAwjLP4B4QCFYzlPntN3fciRWgGYbgkjq20%2BCLCuAL5RX9%2FR8s6hYTLXwPweS5lXMrlROE7ivToj%2BxHOMa%2BkREbeEMY%2FqaeI3k9yD4IBfFQ8ATUsUbl6Q4yiyUbKTS%2FhvQMwZJCNsKeR5%2BXgOyfi5r9p2s5oy&X-Amz-Signature=56b5d94b0c0046d08a06d915a6e2427d9824d9fa6bc952fd4f013a27800acd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJG2UJD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD2cTGdLFGpBW%2FUlGD50Sl%2FjhQGZBRAyXDCiDBXxUCGcAIgZBRTLgbXwKXBSKmaqCDNjSTJ4PdWZvu4ktu18Xk6IxAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMyAW0Ss0S5Ph2feyyrcAyaja4eW%2FbLrGCuD1nTkTUU9PglOHYxHQwfZYJL59vcU%2B0CVkHzRxXW9ITTIxl9Sab01tz6fHW7tpBFAbNT%2BlwHmzFKE1pHtIEv4sjd8vHrahJXmiviTwecR7UGHEa%2BWUiw%2BjLpYIYD2GtvLnqgSRvKo0%2FO44VaYTYNCcRpgbqZEIKVmE0GTUR5NrMf1SNUsRvgilybOLEhVI6a9FdAbJc%2BF4esUZiVRZeruDXGFrC133YvCqFRRijC9shqQjW8HK6f65Wh%2FcMF13VeuLZxIdNCxHSpZyCpanSVqc7op8uEcWibIql9sT1OUlBJmx5mBj7KXmr9duT5IWX8TQXm9wkDN7ErsVmG1IG143VYQC9kNHPEOdsqtiKo1W2mVm13xoTVOws5lpwiu%2FeFTyXFyXmRxgM1VOzUC%2FD6qNC%2Bdr0wUXLIFjcGmQG6%2FaDic6zxCvcsNq%2Fg7unvgTUxmIWUOKsAyHlFMukULk7VYJGiDK3AuHrgwc0e45sNhD85oiJijVEUa9Jg7TRw%2FnhCT0vz%2Fd9JcCX3%2BiLhcp1eot52RV47gGLvxNYANxREPpzQDgMrrIfXrpVNLOtkSbGS34thqnZIh4dALhZQjg4csbSJ4KGiqNvatU77QlCnl%2FgVMMPPg88IGOqUB58%2BP7IQUCcWqdg%2FfO%2Bl9I%2FHKRktPFPstC2kIjaTaWb7rB3fc1uvm4z4UhelcMR1wCB9B9L%2FgFyKd0jtz57ssIqQoq4JnphiomOX4h7OgLheRvVgCLJW%2FzRgB9XmYPP7InM90I4SZBHjnFm7aWuJKCgadYB5xmXewr7eT%2FvsMmzWfJP94qqZBIPe4dVa8sFmitWeI2f4ov%2Fm1EmUfcswvAsRD7Dgc&X-Amz-Signature=2c4fe5802e229d058dfb9b7c33d292e135a5b2e5510b4c2a1bf45498086d6a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3XCMK2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCt7tNxkF%2BUSaKFstPK2AsMto87pbh4RhG4clN%2FPlB89QIhAJoPep46iNd5rknjtn8XjYtCKPUd8h%2BBevDYveDKL8IJKv8DCFYQABoMNjM3NDIzMTgzODA1Igwmck65ZLnN%2FKqaNrYq3AMKrFzIquoA6QNttdCM4qExWiuzys6SkQ3l0uO4fGH1KTPR1k%2FG7C2aOWQBVscVigX2DRETV%2FGcX%2FZftPuQVMI2vBTzmIgEorH%2Bayf1VmxriNFTGtlANyDamOPuDLTkgf0UCyt5dkQrSGYM5skIi1voqnm7UmLdHZnfK%2FARAC5TRmEnevg2QFqzei0bfMuEfORiyIX2gDI3A5EqQZY6ecsM4ZRiYVCts86FbV4XjnAYVbZ8N2HsTuCiaIUavN8N3dLZ0h0q6BGEgwrprsipW9Ijyl82zbQq7unHSvftHkg2Ho2d1TA%2BPodKEPaaQ8RBW71E9z92TrLqJIiEvPX8B%2FUpXGADjRC6JfJRWJ9dj3HzpRx7odhZOH16BjZQ1nbWGo7%2BOKMCCbCxyp4XMXkQfy7czINk8xQs4RtUFPlqXb1VPzuPDnBR3CadziWQa7TeOnF1C4kBPb7sWvo0eXkvGhhhewQrNhWsrkzIkxDE0UMCRoN1kxGafhKElFriOo5Xa77Zk6ARVNlV92vSbWMSOTMdWPZDMIoDAyYYUQLexWGr1TGToUW511NH6EHqUhEGfgWGffIzTqEEeWLn4SI7t1XUr%2FhJPNGFDwj1X4Dk5ZTfgAyGinjifH6jHX6nhDDssfPCBjqkAURG57wlhuqO0ykqg%2BZ95SdF7bnOZ3G2LX1fE5njM7Vmbra7JmHRCyFCuTD4i72aVAUeknBOfUCPA2GV2FLPxFwGwuyoKVKW5WAo8lAtG%2FDU9qB%2BXCBPNY%2BmJbJDWh3LITMcm6xv9AyMM5qJHcvgFyustv4B6fck%2FbUVDEN8JAka28vTIxor5Yl45mPne54CsZodr8Kqh97IHiLpxj4OSOvJDhs3&X-Amz-Signature=696c42ffb0203bc0bbbf11a8831a9770010a13d8e185b9f6de695395f224f617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOR5KJ2W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDfHggZkgdcf8Tmx8mrn6v8ya59xq7%2FIBExBGPlRmtC7gIhAPig6XYFuyiRlTWgZppc6en33khFll5AIJDZr%2FjGTPpaKv8DCFYQABoMNjM3NDIzMTgzODA1IgxVVaB9Dhg6q4FGKK0q3AMNmW3UlMN%2FTPai%2FOdafEv0%2Fm6YF777JPXSp%2FlbWQc7wzGcbvmSBrP1vbEzdBMqhWVdqESwe%2Bc3FRSgV1tUj0bzCD6CrJO2nJys1wibIYX2BD79kGs%2BNW35D9Ncvgym6KNGH0z25WWySZXqfmWxCwRGqriS0IKzrRPiGH223L831gDU3%2BxjqwNVbiw74v1whsrwCuYR5123Anqds05aY9WElOfGlFV7On95xvVXWbEZp0Igut%2BhjhsJwCLGRSFO6j5Zw3gU7hCh2pim%2B5FU80ttCEwp%2BQrHZ31lLXTbelOeyo2Sb40h5xhSma9n0c77SnSPQ%2F9b7QOJOiJMjVszewAMrA8d4O9R4p8%2BVMYuhj9rCJYDc8R1VlCVQ3vztz%2BYxa201zUchUmoxeN7%2BE4Ap1utUz5crl0ov58UGBSFQ7FrMTJxbU5hEZF0aHYHbefxfPbNHQeoe9sbk%2FZXNhqnzRID2BHqpbbTPTeIXUXD0QbUzZPhNS72q1Ir%2Bfj%2BqA9T5f2cborfuTudoqqCj%2FPzP6PdJiGMy5BQQk2CQYjL31oZocs%2BJaFjBwfYDXGugqAn67UNOZPXAZoCTUHD1vL2%2BKnEKMjtXY99S%2FxM3rg1VRJGBvXt%2BHflEejQ%2FwyckjDksvPCBjqkATHrryNCkS7GcJiPWlkqb0fAZp5ls8o3dCMdvYkhqDMikedibN61k7s4UgHasxgsAwjLP4B4QCFYzlPntN3fciRWgGYbgkjq20%2BCLCuAL5RX9%2FR8s6hYTLXwPweS5lXMrlROE7ivToj%2BxHOMa%2BkREbeEMY%2FqaeI3k9yD4IBfFQ8ATUsUbl6Q4yiyUbKTS%2FhvQMwZJCNsKeR5%2BXgOyfi5r9p2s5oy&X-Amz-Signature=61e65ad530cc47fa6f9106934a1bca85857340308f2d63f903721836c28e3828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
