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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRESEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCT%2FkPPMvWmaXPSbnl%2FWGkVk6axjEVLCWH4OQ0O4kn2WgIgJ87g0jUxMwUvgjAHvjslCiZndFsO9a9VCQKFbVuH75MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMIohu9iKf2WwdyyCrcAy3eFM3jaEcdEW1vpXixyKlow6Bz8xQTPzGL%2BL7z2SA9mrTjNxFxubOfzHt%2BgtubEpxEW5rGUaDujpH2zZ%2F0ikqHlGCIpZQGD7VLnj9Vwh85LGscRzKE7IUy3jCMvrw8tkjfFdqf%2Fp5nK6GRVsCunW%2Ff8Zc2jPkeArPkIG%2Fvj01X%2B%2BNVoYqbCxAYW5EjPRXKKdHKsONtf1SqxIMsnIUFm6JFEqm58NUNZfq7NiPKn4RFVkdJFwFdJMkYOwNqLIflIGeBnYZ5w6gKKPqJmbTrpZshzr7q9BBZNL1%2BQKXgR7Jg94Sf27lfE%2Bsc%2FU6Q9fi12beiWg8cDw5JZfdCnrLFtZ654S%2Fx34omiq4bI0riMh7MGHE1cezQPeDxfrUnriDXv75DOupuO1WUR%2Fr8BKxnaMzbhoyiMdso6tup6xpAhgKUanERLcL6CM%2F820hTVq0FP9BTCMsiVy9MIKI%2BswNWKNUgHaYGwaVbkhnkJdicXx9VYn8nqoc8o%2BUUQuin5%2Fi19gTzFPHZa54lfF%2BC3OD3qU5ReSbAlqNVw1%2FVCKYZr1Kv50%2Ft6VxcLSDOjaIC96yj8idVYeSrDsgzodZ8AJZ1hmvbOySuyB8AVv9PkQQm62lIW2K2uXTgbrFSyRLTMMeSvMEGOqUB%2FFQvnjjiJvRk5J1imvvTSGSPMHct%2Bod7mGU5xwiZV9Ac1UpSfpr%2Fjz6kcNo5uSCwigrd9epJ6pAP7Yp%2B5cAYemeA%2BgQ5uLSTgSpuZnGLzkYFi1bzbIWnjTrZ0%2FaMSOOaqs0aWqDgaRyRnMGoNLk0yxz9YrePhV0iYbbeHsUjlQoz1o%2FHKUlxJhLbvoelG6ZHuoPphUivCClDkhJzJLUNKPwGqRqS&X-Amz-Signature=685cf0038011cea749f05ff1dc3703e0614a64d0335581caca658df614a65880&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRESEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCT%2FkPPMvWmaXPSbnl%2FWGkVk6axjEVLCWH4OQ0O4kn2WgIgJ87g0jUxMwUvgjAHvjslCiZndFsO9a9VCQKFbVuH75MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMIohu9iKf2WwdyyCrcAy3eFM3jaEcdEW1vpXixyKlow6Bz8xQTPzGL%2BL7z2SA9mrTjNxFxubOfzHt%2BgtubEpxEW5rGUaDujpH2zZ%2F0ikqHlGCIpZQGD7VLnj9Vwh85LGscRzKE7IUy3jCMvrw8tkjfFdqf%2Fp5nK6GRVsCunW%2Ff8Zc2jPkeArPkIG%2Fvj01X%2B%2BNVoYqbCxAYW5EjPRXKKdHKsONtf1SqxIMsnIUFm6JFEqm58NUNZfq7NiPKn4RFVkdJFwFdJMkYOwNqLIflIGeBnYZ5w6gKKPqJmbTrpZshzr7q9BBZNL1%2BQKXgR7Jg94Sf27lfE%2Bsc%2FU6Q9fi12beiWg8cDw5JZfdCnrLFtZ654S%2Fx34omiq4bI0riMh7MGHE1cezQPeDxfrUnriDXv75DOupuO1WUR%2Fr8BKxnaMzbhoyiMdso6tup6xpAhgKUanERLcL6CM%2F820hTVq0FP9BTCMsiVy9MIKI%2BswNWKNUgHaYGwaVbkhnkJdicXx9VYn8nqoc8o%2BUUQuin5%2Fi19gTzFPHZa54lfF%2BC3OD3qU5ReSbAlqNVw1%2FVCKYZr1Kv50%2Ft6VxcLSDOjaIC96yj8idVYeSrDsgzodZ8AJZ1hmvbOySuyB8AVv9PkQQm62lIW2K2uXTgbrFSyRLTMMeSvMEGOqUB%2FFQvnjjiJvRk5J1imvvTSGSPMHct%2Bod7mGU5xwiZV9Ac1UpSfpr%2Fjz6kcNo5uSCwigrd9epJ6pAP7Yp%2B5cAYemeA%2BgQ5uLSTgSpuZnGLzkYFi1bzbIWnjTrZ0%2FaMSOOaqs0aWqDgaRyRnMGoNLk0yxz9YrePhV0iYbbeHsUjlQoz1o%2FHKUlxJhLbvoelG6ZHuoPphUivCClDkhJzJLUNKPwGqRqS&X-Amz-Signature=ebc1a234b925c1468e046d612cc9ac7bdf1a7a283255a976deb98eb4854d8995&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRESEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCT%2FkPPMvWmaXPSbnl%2FWGkVk6axjEVLCWH4OQ0O4kn2WgIgJ87g0jUxMwUvgjAHvjslCiZndFsO9a9VCQKFbVuH75MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMIohu9iKf2WwdyyCrcAy3eFM3jaEcdEW1vpXixyKlow6Bz8xQTPzGL%2BL7z2SA9mrTjNxFxubOfzHt%2BgtubEpxEW5rGUaDujpH2zZ%2F0ikqHlGCIpZQGD7VLnj9Vwh85LGscRzKE7IUy3jCMvrw8tkjfFdqf%2Fp5nK6GRVsCunW%2Ff8Zc2jPkeArPkIG%2Fvj01X%2B%2BNVoYqbCxAYW5EjPRXKKdHKsONtf1SqxIMsnIUFm6JFEqm58NUNZfq7NiPKn4RFVkdJFwFdJMkYOwNqLIflIGeBnYZ5w6gKKPqJmbTrpZshzr7q9BBZNL1%2BQKXgR7Jg94Sf27lfE%2Bsc%2FU6Q9fi12beiWg8cDw5JZfdCnrLFtZ654S%2Fx34omiq4bI0riMh7MGHE1cezQPeDxfrUnriDXv75DOupuO1WUR%2Fr8BKxnaMzbhoyiMdso6tup6xpAhgKUanERLcL6CM%2F820hTVq0FP9BTCMsiVy9MIKI%2BswNWKNUgHaYGwaVbkhnkJdicXx9VYn8nqoc8o%2BUUQuin5%2Fi19gTzFPHZa54lfF%2BC3OD3qU5ReSbAlqNVw1%2FVCKYZr1Kv50%2Ft6VxcLSDOjaIC96yj8idVYeSrDsgzodZ8AJZ1hmvbOySuyB8AVv9PkQQm62lIW2K2uXTgbrFSyRLTMMeSvMEGOqUB%2FFQvnjjiJvRk5J1imvvTSGSPMHct%2Bod7mGU5xwiZV9Ac1UpSfpr%2Fjz6kcNo5uSCwigrd9epJ6pAP7Yp%2B5cAYemeA%2BgQ5uLSTgSpuZnGLzkYFi1bzbIWnjTrZ0%2FaMSOOaqs0aWqDgaRyRnMGoNLk0yxz9YrePhV0iYbbeHsUjlQoz1o%2FHKUlxJhLbvoelG6ZHuoPphUivCClDkhJzJLUNKPwGqRqS&X-Amz-Signature=f663df54d79323b13ccc1421a81aa4ddeb78879c1038ca07157cac115885f77a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7G542G%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC1LSzT7tJPubOETRAsRuZBYlbGQ68VZU4XsaamgW9ubAIgay9m1rFdvQc9oDmBU39wCPrHQfQZvEerVIAp28L9FVUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9%2FIk9zFakiXRG3lSrcAxV%2BEzNucBlXZp8ZopgWn4GYyHO4AL0iNlZdDWHwlaciRQid6D52K1zbPzm0xJf4lJ97Y8GXBwgO18ijqBVj45ukqrTkxBkDf%2BGWnk8BdSRNCrluO9GWe7Hk2u1cYrlLPLVMfmdlVse5zSLqOAG6h0tmQH4UKy7gowxboo9Qzu7S2FXd6bAUgDai1Ryi8aLxev1Dq3kCuE3o48PmnE7yDCToI6pVr5W8volyuOKwnHTAT6c5qTSLXerZ1GvVnsVkgKFVB7WSaFVvga1VGX7K7hiSD6OWjS5Ykusd3uerWnPimXs1CBr0pHzlcHjBxncH1xmTyF%2Bk7EOrui90r7glgLUCrdRkNHm3DVKVwbfjWRU%2BJM%2Bm8Nxelxydq2tXYdKig8mfs4S8p0o1PkW8Q7kqOvJ%2B6GUgR2e94566z2LMUEeRLMkkw456CpZuVZXh0wB1WUwLwIVRNK6dvHD34%2FwN5gaH8k1N5B8cviiz%2Fy8tYxMtGcDEW994O4ixD%2FXr609wdSl%2BDgElJnV9MsoIabUCCXYQRS9XGMngPhEDNubWA%2BnUMX8MxGEEu0IXAMgEfz%2B4ytbOjAvsxpU0CcpWO3QGlaQiaGdJ3xMc5LZGeAYjvDLE7YVoi%2FETPIZmYHm3MMGSvMEGOqUBLiHg69nRsKJHGNRl5h4AT7kVVhkmoH9dB5KTNagL%2FsTTOHsJXJs%2B05eZfEgZyw9T3SRpQ17628KfxlwrhOUvaQutqfO4k9Wp%2F0pXo3wt%2BTFuni8Ew0HkKT1DfEwOwysoVm3cVSzab0u%2Fb9rADOB0zaYaNpv%2F%2FjcKwRvftGZ01Td6sR5VtTJTSROHiGPA4Va0IHjZNQBpyavP8skkiBOaIUeP5RvJ&X-Amz-Signature=3202b1aa4696bd1837bed91b5d551d83c799a33217323b826767fa0bf47d159b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKRQKFE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC0xrOrRsKoNgMjFGXIBQbcNPK%2FMZhK7FFHV26KIe4KDAIgKUb1bSTSnk4PQbxkl4hrCCVohtKKNmVYS8Jqg86MZQEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW5oSfOQcwD1e0uOCrcAy%2FwEbsicj9%2FY5yF%2BDSplscj2yNFUMmoTXlrM64Vo%2FhpRc9MBhcz%2F2gQDnSYEv8MWns%2FFyIr0aBWOfhEvfHN83%2FGS979lG6oM%2FaKQHDB9wIWQLJNz%2BAH%2B1ZwPYxI9ATUieMkSOtxCpAhyDvD5oXEaZsxlQ5Gk4pBiEQtIFt8o557v3RdIp%2BpD1ZE2MJ3FJZSkF1jJZV%2BwWnM6Fad6jg7jB8xybUWkmGvkQE6W6U6C2%2BHhF4JkGqkithSt4SO6AwToFLJ72jPo1hbp2J04i8KY3xFN4vIKKPt85coC0gPLnMfLWrZGNLJ%2F3oniQ5x4YYbvz9QlXlOAFX%2FpuAdEHz%2FIWUl%2B68wH%2BVsS91yx42EDckO70IhpmfJeBYwZCw%2FVfdiza29Te6MddrC6gFxjwbip63BDNDxPbQtrM2MMkt2UKEKRJce%2BQOST%2B3UyCVn3mVBOVf%2Fa9ERufRlSDMGD7%2B%2B1GlfAWIQ88xvkUbooUtzCp5a0S37R42WZ6AwwFzOPtEPOIgbOWmEE0k03m%2FpYoRfBk2cZp4ir87h2vke9syaJjIPqvxY0%2BKYeE%2BxueZ6%2F5Vu5lR4DXcXUVx6TLDK7Jj9xYem1vm1g5gnsqt1y%2FcbEmdBCWaAn4FDagxv10DXMPORvMEGOqUBQouS69h7OVZ2mLspfY1T5%2BRNjO2LRzehZQWlQ93k6APD9o%2BbycVFRSp2bNRYrHCK2gc2ue1Cq2I58i2xuv4UfwFHBMPmUbyZ0ImmVC5N%2FbLokptmXZiGqT5PeGVmzvtsN08S9jPTdczs%2FfzmaFfd%2FtuXdHs1hkCAmkov74NFFe8eUULwzwRhLHyhihZGg4aMxZ3%2FZddw60L9m1jXGagg%2BOqBR5O0&X-Amz-Signature=bcb6c2f50338ee7b6bd916366e75ff0eddb45bd8d1e813a013f73bc08612a203&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRESEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCT%2FkPPMvWmaXPSbnl%2FWGkVk6axjEVLCWH4OQ0O4kn2WgIgJ87g0jUxMwUvgjAHvjslCiZndFsO9a9VCQKFbVuH75MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMIohu9iKf2WwdyyCrcAy3eFM3jaEcdEW1vpXixyKlow6Bz8xQTPzGL%2BL7z2SA9mrTjNxFxubOfzHt%2BgtubEpxEW5rGUaDujpH2zZ%2F0ikqHlGCIpZQGD7VLnj9Vwh85LGscRzKE7IUy3jCMvrw8tkjfFdqf%2Fp5nK6GRVsCunW%2Ff8Zc2jPkeArPkIG%2Fvj01X%2B%2BNVoYqbCxAYW5EjPRXKKdHKsONtf1SqxIMsnIUFm6JFEqm58NUNZfq7NiPKn4RFVkdJFwFdJMkYOwNqLIflIGeBnYZ5w6gKKPqJmbTrpZshzr7q9BBZNL1%2BQKXgR7Jg94Sf27lfE%2Bsc%2FU6Q9fi12beiWg8cDw5JZfdCnrLFtZ654S%2Fx34omiq4bI0riMh7MGHE1cezQPeDxfrUnriDXv75DOupuO1WUR%2Fr8BKxnaMzbhoyiMdso6tup6xpAhgKUanERLcL6CM%2F820hTVq0FP9BTCMsiVy9MIKI%2BswNWKNUgHaYGwaVbkhnkJdicXx9VYn8nqoc8o%2BUUQuin5%2Fi19gTzFPHZa54lfF%2BC3OD3qU5ReSbAlqNVw1%2FVCKYZr1Kv50%2Ft6VxcLSDOjaIC96yj8idVYeSrDsgzodZ8AJZ1hmvbOySuyB8AVv9PkQQm62lIW2K2uXTgbrFSyRLTMMeSvMEGOqUB%2FFQvnjjiJvRk5J1imvvTSGSPMHct%2Bod7mGU5xwiZV9Ac1UpSfpr%2Fjz6kcNo5uSCwigrd9epJ6pAP7Yp%2B5cAYemeA%2BgQ5uLSTgSpuZnGLzkYFi1bzbIWnjTrZ0%2FaMSOOaqs0aWqDgaRyRnMGoNLk0yxz9YrePhV0iYbbeHsUjlQoz1o%2FHKUlxJhLbvoelG6ZHuoPphUivCClDkhJzJLUNKPwGqRqS&X-Amz-Signature=737cbd387b2b85d47b1f1e918f52d02dcf1ffae53faf33aa361f5688a9352124&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
