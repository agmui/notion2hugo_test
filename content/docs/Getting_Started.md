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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UNJTKF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCVZPlNxwpV406YoNXYCZioFqRRy12BHyxXnCiC7at6ygIgddIE22AjywR%2FXMhax6ohIsrpZypLKPlNRKpMd4O%2FuFsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiG0hD%2BeM%2BeL12cZCrcA%2F6nYZ%2BkHlq%2FPoTwUEGimQCf1sly0pSTj38LA9bGErlTLwA4hdZvDOrkLrBO%2BFqlSxc7lZ6suRlOVp4xzyeMFQeLDztkAfcvI5NsBJ0g2OU9onG1ydvVPdXvSiM1Fqmnkp7l5pKZujJmEwEn0cllMu%2BsaWfsuxE8Mhy8sNlKAEtAnGLisOCq19RuND13aMAkFY4Lv%2F1doFGMf7lGwbKyWiqnyGgjgA7D0%2Fmut87EH1jTW7eOGakgeJyuixdIszyUJ%2BglQgkB%2BmKwtECFo2NLmcpw3XnnDvofUPNmJ5yirxUPtqSZa9rIMSNCOqHem1KNs7w%2B3g55q9RnzNAK9b4YipF2YECCCzOItWE1ZwC5bydYB6VVGiWEfFzQW8%2FDFvkJUmFK8mdOD6nvGv0nxnkS%2B4a%2BPGiQ4WHHQpSLnq92Zb0aliZTyHMUxDye9TvCcejKzuXVqdkbVQRqv2wTxTdNdTPdrjS3l7J44HsVzACDc3sz7zv5k6%2FJCiYHFZVrYSgWt%2B%2BP1ohxFgNwG288IEXegZw1ZRGBAUkNTsfi1gb%2F8fJAlIMZxhqD7PQvA7EtYn5MhRBbsgbhoplJ2P%2F1qEETpXSel1WSTTHf9hQHc6WZGxnJ2n%2B0ALThHtUIcAV9MOev8L8GOqUBU3%2B0Rwq%2FwFAwTbvpCW2bt%2B6SGt6HnYT6ljLiKIriGZK9LsHcyBkESRQbmIQ5dYdH8gMUfB0xkVImhSDWlORbvOyWOFY0zfStULewEAWU4ODbRvpJZ9zIxqkBC58QmM7JtLO1HG%2FnPiXgaco2fn2FaNkERqx%2FNLnhWkk8d2mDxR7dU%2FOD6m%2F%2FVp9sF1nEAW5GCKPb%2FtqP%2Fdg3Rc1Ml7wBKCpk%2BLIm&X-Amz-Signature=46571916b6c89a18f93d87a534d2f73f7bb5904c8f834895e71619665a098749&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UNJTKF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCVZPlNxwpV406YoNXYCZioFqRRy12BHyxXnCiC7at6ygIgddIE22AjywR%2FXMhax6ohIsrpZypLKPlNRKpMd4O%2FuFsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiG0hD%2BeM%2BeL12cZCrcA%2F6nYZ%2BkHlq%2FPoTwUEGimQCf1sly0pSTj38LA9bGErlTLwA4hdZvDOrkLrBO%2BFqlSxc7lZ6suRlOVp4xzyeMFQeLDztkAfcvI5NsBJ0g2OU9onG1ydvVPdXvSiM1Fqmnkp7l5pKZujJmEwEn0cllMu%2BsaWfsuxE8Mhy8sNlKAEtAnGLisOCq19RuND13aMAkFY4Lv%2F1doFGMf7lGwbKyWiqnyGgjgA7D0%2Fmut87EH1jTW7eOGakgeJyuixdIszyUJ%2BglQgkB%2BmKwtECFo2NLmcpw3XnnDvofUPNmJ5yirxUPtqSZa9rIMSNCOqHem1KNs7w%2B3g55q9RnzNAK9b4YipF2YECCCzOItWE1ZwC5bydYB6VVGiWEfFzQW8%2FDFvkJUmFK8mdOD6nvGv0nxnkS%2B4a%2BPGiQ4WHHQpSLnq92Zb0aliZTyHMUxDye9TvCcejKzuXVqdkbVQRqv2wTxTdNdTPdrjS3l7J44HsVzACDc3sz7zv5k6%2FJCiYHFZVrYSgWt%2B%2BP1ohxFgNwG288IEXegZw1ZRGBAUkNTsfi1gb%2F8fJAlIMZxhqD7PQvA7EtYn5MhRBbsgbhoplJ2P%2F1qEETpXSel1WSTTHf9hQHc6WZGxnJ2n%2B0ALThHtUIcAV9MOev8L8GOqUBU3%2B0Rwq%2FwFAwTbvpCW2bt%2B6SGt6HnYT6ljLiKIriGZK9LsHcyBkESRQbmIQ5dYdH8gMUfB0xkVImhSDWlORbvOyWOFY0zfStULewEAWU4ODbRvpJZ9zIxqkBC58QmM7JtLO1HG%2FnPiXgaco2fn2FaNkERqx%2FNLnhWkk8d2mDxR7dU%2FOD6m%2F%2FVp9sF1nEAW5GCKPb%2FtqP%2Fdg3Rc1Ml7wBKCpk%2BLIm&X-Amz-Signature=94ad1a8b35e6e0334fd5ddb1bd1ae15a5f1d68f756732b76967c7d3500b55a60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VNICI4B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBOBAuUp%2BB0A%2FtNsUfBglSDEPoPnl4dMpPuo5ZoClKHTAiEAiXLWODQjDlttBQ1BWAtmt8W%2FXKuCInyflvUcDxKE5ykqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkyuY9bOoKdsfPrSrcAy8%2BZylyFkQc5y650Yrar9GX5JRnNmxWdlaVfiRFnUCnmPcbUr15Pg3167ut0ZuTkF8LLUUC2SW5qTTy5RGRJTyvd64gl8sNeQksCGxFpojyFepDeDKojTBcnsLpH0B30%2BAWMjpBv4hm%2F4bo4QTsG0G%2BDV51BpX2EUMVCGv1rzfzvbT4%2FBeppHhA%2F8xHvh2In%2FY7wZpW4bYAdn5WTeO6tzODCi0UI61DtlEQCvkPoBt85hcS3n925Vt0i2gyKRaY5N07qxssJ1YOf2tyw81pqPOTLQosf6F0pmbXgt28xmr6PlyZMKqIEXSCNB7w%2BNVu8CiCoo9zIPeBuUJsIPImZFGZqv0UdQdRZxYY7dtjduXYycidrSMwH9aB8v4xjj4uB4wFuI6CkeTYokRVY%2B%2BM99DqCZdf9bzTn4Cb%2BiFo%2BLGhAAT%2BLnepV1%2FMe29wZJwVy3gFoc5EQmgS1fBSLMVKkIeYBh1oEboLd1mF5iothWYjV7G8%2Fu8%2F2ouUcC8k63gLIcD57uigO5okgye4A9%2Fk%2BG48GhBmPJl5wY6PMrupH5W0L6lTacwy4cbWcd8E197mjFXvqE65gi5l2wkFFepeTcqb8CM8zEYm%2BPUUHjJMb1jRCg3UkF8rmIZ0rAtlMJSw8L8GOqUBJPlVbsw3qG9UY1MoVSbagbrAgmtkqdZ5xHPfajeRzKkLf4s1iU3XKFJ5e%2BEhRWBe1mM5qo45cxJ8%2F85Vt9UwSwqEsuulRG2QnvuTlr1VQWyAkJfHjC36g8kVM8XG6ryfoGt9bMnBxOQ5pTb30duwZ88BMQwMMS4sP%2BY0FrUY%2F5zYtSZo459Qrr6FXRIdempiFFkrzvRZtAZ%2Fh0QXIqtW3mULxoMD&X-Amz-Signature=264df27d32191a1f670a3b0f32b553e922ac7072735232819bc1eea88275163f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=0abc4c7fb448a59817108d30aa19ce8e7801e760cd2e0c0c7a7b9d5f8b21f83e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UNJTKF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCVZPlNxwpV406YoNXYCZioFqRRy12BHyxXnCiC7at6ygIgddIE22AjywR%2FXMhax6ohIsrpZypLKPlNRKpMd4O%2FuFsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiG0hD%2BeM%2BeL12cZCrcA%2F6nYZ%2BkHlq%2FPoTwUEGimQCf1sly0pSTj38LA9bGErlTLwA4hdZvDOrkLrBO%2BFqlSxc7lZ6suRlOVp4xzyeMFQeLDztkAfcvI5NsBJ0g2OU9onG1ydvVPdXvSiM1Fqmnkp7l5pKZujJmEwEn0cllMu%2BsaWfsuxE8Mhy8sNlKAEtAnGLisOCq19RuND13aMAkFY4Lv%2F1doFGMf7lGwbKyWiqnyGgjgA7D0%2Fmut87EH1jTW7eOGakgeJyuixdIszyUJ%2BglQgkB%2BmKwtECFo2NLmcpw3XnnDvofUPNmJ5yirxUPtqSZa9rIMSNCOqHem1KNs7w%2B3g55q9RnzNAK9b4YipF2YECCCzOItWE1ZwC5bydYB6VVGiWEfFzQW8%2FDFvkJUmFK8mdOD6nvGv0nxnkS%2B4a%2BPGiQ4WHHQpSLnq92Zb0aliZTyHMUxDye9TvCcejKzuXVqdkbVQRqv2wTxTdNdTPdrjS3l7J44HsVzACDc3sz7zv5k6%2FJCiYHFZVrYSgWt%2B%2BP1ohxFgNwG288IEXegZw1ZRGBAUkNTsfi1gb%2F8fJAlIMZxhqD7PQvA7EtYn5MhRBbsgbhoplJ2P%2F1qEETpXSel1WSTTHf9hQHc6WZGxnJ2n%2B0ALThHtUIcAV9MOev8L8GOqUBU3%2B0Rwq%2FwFAwTbvpCW2bt%2B6SGt6HnYT6ljLiKIriGZK9LsHcyBkESRQbmIQ5dYdH8gMUfB0xkVImhSDWlORbvOyWOFY0zfStULewEAWU4ODbRvpJZ9zIxqkBC58QmM7JtLO1HG%2FnPiXgaco2fn2FaNkERqx%2FNLnhWkk8d2mDxR7dU%2FOD6m%2F%2FVp9sF1nEAW5GCKPb%2FtqP%2Fdg3Rc1Ml7wBKCpk%2BLIm&X-Amz-Signature=1dda0a9ea32f080670c18868254200a351839df53dd8f24b2642cea3277c41f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
