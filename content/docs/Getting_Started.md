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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC67SANE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK73%2BXv6V5lBBXtFH8SZyGcMvqGeoGk0DtLoILHHFBaAiEA7EyZuya3%2F5qe%2Fj2as2R5Lk1yFK%2FtbO0GTCh6dsh0Q7gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE6rJbtkaljNgpT0MircA6S0SuCsbAdsXhskw1UiggAMIiBXzrunaDramRGYXmpcOf9rofnwFZDZM1IZmFI2NMR5q9PgDqK%2F%2FCjVrsWNYn%2FwcT83JXYSFEyey9bm%2BAKfOCcS8MKKAQWUeYJJcfsLrvZqSDeG4jM0%2FuzLSPiBUenWRUHyXwPJf7AWtyMW6eraGo%2BW1acF%2F8D83O6oo%2FI7yoSZyosN%2BYkVI%2Fh33L4k%2F8U8p0bPhk31ZS3IWLK2oqWFaP95%2B40UDcrCrXLzi%2F2Z9dk3xA9J8IPLbrGXSbTWszPy%2Ba86sy8aFO7eawef4ZTR4uFsBjJwE46P4MjYtYIovJg7FHNfQ5u6iVbk3GhrctkaLDvR4vKFKfaWUXN8sr6JWhIG5UmSx%2BjSBJT0sD%2Bdixa1%2FR7%2BGrYFt1%2BNz1kdnI0S6A91OQ68Arkn8eZyLCXGWSR4mEM%2BZvxdAnIh7zrZ0AdGZxbPwRdPT4JUa8s65bnOF0NjgJdnOQqaYMMzz9wp6Te1fpsBn8KpzWnLAytYuaaa%2BUGGiIzW7i5rH7UQKc3AOZHDRD6u8WUdMULx6h5b7egNhEvWNctwvUEEYhQm%2BAL4U32ORypa4RPjGm5aUqcnypEMuiGN42awDH%2BC5iwmhDPIjeGY9PuywQRQMKndt70GOqUBYQj5MPT64MjzbKw6bXMu7L2Uhx7hcUsV6rYN3lLRMmjogztad135bf7xPHHC4ESbLfwFFFyFOn0gPl3flz4MMZTcE3czTrpF7hnnyowGtQANnGeN5k8Ds%2BKjlFWcEJ1E0ZVtSR63pZg8BHOokf08evYlexW6THxd901J1JMBVCetN4f1NCLliNNwDrAINw3HLp%2FkrYlhkk2QKYs2HMQkJ4dIlrA8&X-Amz-Signature=9be4aa9bd8fd1f6c76d4ee65cb95835dc190c0de8118c34d526c94aa59a819b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC67SANE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK73%2BXv6V5lBBXtFH8SZyGcMvqGeoGk0DtLoILHHFBaAiEA7EyZuya3%2F5qe%2Fj2as2R5Lk1yFK%2FtbO0GTCh6dsh0Q7gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE6rJbtkaljNgpT0MircA6S0SuCsbAdsXhskw1UiggAMIiBXzrunaDramRGYXmpcOf9rofnwFZDZM1IZmFI2NMR5q9PgDqK%2F%2FCjVrsWNYn%2FwcT83JXYSFEyey9bm%2BAKfOCcS8MKKAQWUeYJJcfsLrvZqSDeG4jM0%2FuzLSPiBUenWRUHyXwPJf7AWtyMW6eraGo%2BW1acF%2F8D83O6oo%2FI7yoSZyosN%2BYkVI%2Fh33L4k%2F8U8p0bPhk31ZS3IWLK2oqWFaP95%2B40UDcrCrXLzi%2F2Z9dk3xA9J8IPLbrGXSbTWszPy%2Ba86sy8aFO7eawef4ZTR4uFsBjJwE46P4MjYtYIovJg7FHNfQ5u6iVbk3GhrctkaLDvR4vKFKfaWUXN8sr6JWhIG5UmSx%2BjSBJT0sD%2Bdixa1%2FR7%2BGrYFt1%2BNz1kdnI0S6A91OQ68Arkn8eZyLCXGWSR4mEM%2BZvxdAnIh7zrZ0AdGZxbPwRdPT4JUa8s65bnOF0NjgJdnOQqaYMMzz9wp6Te1fpsBn8KpzWnLAytYuaaa%2BUGGiIzW7i5rH7UQKc3AOZHDRD6u8WUdMULx6h5b7egNhEvWNctwvUEEYhQm%2BAL4U32ORypa4RPjGm5aUqcnypEMuiGN42awDH%2BC5iwmhDPIjeGY9PuywQRQMKndt70GOqUBYQj5MPT64MjzbKw6bXMu7L2Uhx7hcUsV6rYN3lLRMmjogztad135bf7xPHHC4ESbLfwFFFyFOn0gPl3flz4MMZTcE3czTrpF7hnnyowGtQANnGeN5k8Ds%2BKjlFWcEJ1E0ZVtSR63pZg8BHOokf08evYlexW6THxd901J1JMBVCetN4f1NCLliNNwDrAINw3HLp%2FkrYlhkk2QKYs2HMQkJ4dIlrA8&X-Amz-Signature=e33b2e523f39f11743034ae86882e5507e8c16065f61375eb562c411ddf24b20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYRWO4YJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2FUCLcTeQujqLwCXFZDrLra%2Fa%2FjYQ0EXo%2FGGzpFHFrAiBsSUPcyT8vDyzU5zkBfC%2Blb4K1b8S07mrgfjB3HpHilyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BYUdRNLcYfDfJ49aKtwD4bqeI33Dpnur5%2FARDk%2F0kOPEZqMuYFnUWmiO5X3oajjRXgBHniAUJnzrEDvchk5X1pAT7u4LYW1jxQ4Z0H7n3EnD%2BnjF0jxK%2FRvzwf0KuU3Nn0g2wbESsxneOTXMNVpyJbRTl8rYVIZzWRAYaNnA9NwWRiOiEEnsOZVfsqW2mfh6O%2FtzvkJR8u5e4uureMkWkcGPQttBF%2FM1xaUt%2FuOxGVuaLMmOLSVnK82ZQeBIIdl8RBN6VN903cTatyyQZlP36UZRu7fOhzUvD%2Fzx3CHidXzHMfurzuLSmMTCd8aSR%2FYHAr9hJvuhgA6LwDJIZSPLTBklbpI3Zn9TEaFOHvjgn6ig1krNcG3Tfvf2CEXwIokAY57xmHZml%2Fkvo5bvD6p18l4aZZ5FviPYLJhb%2FizUacbeiiNK9Ki0gBMYp8exTTMyYlRsh8j%2FO5ZpIXLk%2BMVCaTyo19j%2BiWfAUbt8sVTiEe1yUyeiSWKmxnr%2BM09e2sdRQm%2FqVmr6lvMz7IRu22bkhTUUCEwh%2BenMLFrwwxJAXbemmEn1nm%2Bc1HdG3cRHD8fPSLNpnFRbI6Y7phrBrljyek3eCpdnfRUhvViYyuBE03CG1alUGgsU8Y3dd2zWzN%2BYl2cdq52x1OAplgwwhd63vQY6pgHcQGm46AjLdgN0aIu8dX4njcskFRRQ2UZ3ketyiomnHRRnRNdNICTZUsS2x9JKUxemY0XOMvY6vx%2BUa1zKUGG%2BrKV3CAfbdccs92Tpa97b%2B1FjhGyHYr8bsh5SHkv4zh35LErVT0DJtTxbbsZDaLHNxh5s6JuNLfmAtaoEcpGNS7DcU9HqQpDlcQ8mWAoEEzXqhrMmHCAqYLGZmPXKukFdv9BZ5sr6&X-Amz-Signature=98d8d443b9634e60cae1be7fc52de50cea22d442aca362c5b813844e703e42a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEUJOT6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCOHChDXGw3k6LWDc3sPMn90hOHCgdFo5EyYjg91OqcAIgdPr4i60gRbTqW62ApXqZW0JzM2Fiudpi0kXmO3dHJ2Mq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDHDUBcBqMBbDDAziSrcA2Pp3Kn%2BnWnKLU4ZgtOdJLv5ytL69z%2FVudShAJi8F2Rk2xwrAkX%2B751o0Unktxm11hHrc%2BVljHobvfCMTmJXDx1hg2TXkFyTze7koZFKiEZyF4gOcl2pgYLy0UXkaOjRaYnplHMHAd0NIp2LC9tqtApWN3YUblw6ZMPyU4fVz2%2BvEDYAF6C6hTa4mUvX1aTxbnVjZw3upWa%2Fed2lrCIJ%2BovXI0bSNJpV7qtw37H14QvloeCBYTuBRlFkVvfo%2FFc1MSbwi954g5UgsNpogW2AA64LFI5L9v26a%2Bp0%2BdH2O9NRROIVXSw7P5MuIpDNuo95En72Wl3DeDB43k1Flotcm6D8sgbgluaJiIvOLiC7v%2Fay%2BQManV989cP%2F1tkQhC81XQbQYMlCG2zkNjugn3iFB13e4hsu%2BtN59ElRXZGDy0Oqgan1roZNXMvw%2BBNF9lkdXteFFZo4GX7k7Lbkdl7i%2BzkdMhzeYV06qnsgrNoA4OkUEgtIjAShJzIjuU%2BBQPIl3EciJWQxRjPZBo48PzeLg5Fy%2F555ZtSfLVCWGBS6ROcnkNSsgnxLOzcffr3n4Y0cBEpsjmG6TbYklqqb1dyTFqjgdPbUsx4Hi5iTGbgjpPfxsV%2BuavdsAkp6rbCQMKnet70GOqUB2G2RicI3NB0JXF5i49AeoRc2RCQPq9UPb5%2FB09aAG65mVAFynivaQFceDnmTa3c9akwubM%2Bibud5J%2BpAdr0PeP8629dfkcx2orIqJiYCzcLFLiSu6kLUZXonzDASYjULUOJim1q2oPj2uyZaX4%2FDxneN01fVGwdULJAWKjmcYlKK5cIwUu%2F90wQCe71RHR3Y4ZPVkeeVt6krMz22y8GF%2BLHHWuq2&X-Amz-Signature=278fa711c6dca1cca6eafe32e2a29fec92e0ea9eb6dfd5bc5d8a4b76a50d883f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC67SANE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK73%2BXv6V5lBBXtFH8SZyGcMvqGeoGk0DtLoILHHFBaAiEA7EyZuya3%2F5qe%2Fj2as2R5Lk1yFK%2FtbO0GTCh6dsh0Q7gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE6rJbtkaljNgpT0MircA6S0SuCsbAdsXhskw1UiggAMIiBXzrunaDramRGYXmpcOf9rofnwFZDZM1IZmFI2NMR5q9PgDqK%2F%2FCjVrsWNYn%2FwcT83JXYSFEyey9bm%2BAKfOCcS8MKKAQWUeYJJcfsLrvZqSDeG4jM0%2FuzLSPiBUenWRUHyXwPJf7AWtyMW6eraGo%2BW1acF%2F8D83O6oo%2FI7yoSZyosN%2BYkVI%2Fh33L4k%2F8U8p0bPhk31ZS3IWLK2oqWFaP95%2B40UDcrCrXLzi%2F2Z9dk3xA9J8IPLbrGXSbTWszPy%2Ba86sy8aFO7eawef4ZTR4uFsBjJwE46P4MjYtYIovJg7FHNfQ5u6iVbk3GhrctkaLDvR4vKFKfaWUXN8sr6JWhIG5UmSx%2BjSBJT0sD%2Bdixa1%2FR7%2BGrYFt1%2BNz1kdnI0S6A91OQ68Arkn8eZyLCXGWSR4mEM%2BZvxdAnIh7zrZ0AdGZxbPwRdPT4JUa8s65bnOF0NjgJdnOQqaYMMzz9wp6Te1fpsBn8KpzWnLAytYuaaa%2BUGGiIzW7i5rH7UQKc3AOZHDRD6u8WUdMULx6h5b7egNhEvWNctwvUEEYhQm%2BAL4U32ORypa4RPjGm5aUqcnypEMuiGN42awDH%2BC5iwmhDPIjeGY9PuywQRQMKndt70GOqUBYQj5MPT64MjzbKw6bXMu7L2Uhx7hcUsV6rYN3lLRMmjogztad135bf7xPHHC4ESbLfwFFFyFOn0gPl3flz4MMZTcE3czTrpF7hnnyowGtQANnGeN5k8Ds%2BKjlFWcEJ1E0ZVtSR63pZg8BHOokf08evYlexW6THxd901J1JMBVCetN4f1NCLliNNwDrAINw3HLp%2FkrYlhkk2QKYs2HMQkJ4dIlrA8&X-Amz-Signature=1f8d7c2c12902da1a630cb205c241c565f7e3a1f8252218840afdcfb32b8d1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
