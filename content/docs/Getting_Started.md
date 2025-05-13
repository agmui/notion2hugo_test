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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQFMMI7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGJdmegA1KcF%2BgasRh%2FxouKgh06BsSqgj0Qc4%2BleJR0fAiB9adwNjOM43WkllFfLjtO%2BgXoBn33T2hmDNmxhfFh6VCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGY%2BU1ClaG0M14J1KtwDXGLlaW%2FmQjOww2uK43cM98w9ABpgJhJv1nb7seOHgl9Vw4dKMK6%2BD38%2Bs8l6nXUbnL%2FjS0IKwoc4ahMiWWHBvJ0fvgLBs9HQo2ufbzO7s51jqQ4S%2BdtjIBhfzYyCdPDUjtjExqtbsaiBFCI4Frasx9Ch9nvCNJ3j%2BjSMcNPXBJhcIBlqwfveH2hCVR1BdjJFQNqVp8ud8c5NSgGij4VhFl9aEFMNTfhDNPNdHIIiV0mHQDjj7QEihvqTuFetbD1c0dg8f2DGWEDrf7N7sDSn440smgTxJAs73ebdVmG3zP7iwJ%2F01PWb7BPRWB2VvUdzrYFTBzcymU8VPlyJFDeQJ0N1w7ArJp7%2BFTQL0tFII4TxwCWxcziF8fIPUy5toEWBWO8a1WppudXMBzY9ijt193JBsC1p2QFpjmX9Yjz9YcDo6SkzRMh2XdqBf%2Bvg4onHVCcZDSNzTCNFPH1yQY2bOf%2F9g%2FnMFisCyet2CjdQpmUJioY%2F0lgfzeWrJlEsNX6JTD050dTQzZrkIzG1Q9KJ7YdXbGCQkQJyX7AkNd2%2BW1MRoetSzzT9c7C36phsD0n8vqTC16nVc6w6nKCwHukfVEdQpGoy6bxI%2BCuV333%2FWxP%2B2%2BIsISKXYlqaLHIwuveKwQY6pgHCReDWsfrBIo6O1%2BGbJ4xJ95newI4nm%2Bl1S%2BBsQ%2F47gjSfn%2BCITNhfiskAfBkl1HT8fQ1p5QqbmmR1bwV2rQ5EiRM8Eta2B7WyNICsUl%2BqNrCtcp88cIGQyo3CDyIZNf9rRvaf3Ea%2FblfsOEmGYXOwmnmAKFUQszLypwd9sU9LZ7eXRgFrGByvciPgp02vg0HNpNNsQfqU3HA3nhYR6gZj9ko%2FPi7g&X-Amz-Signature=7748d633b98b4ecb4d350754b5d3ac34ed60b71011a24f4761c0d04895116ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQFMMI7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGJdmegA1KcF%2BgasRh%2FxouKgh06BsSqgj0Qc4%2BleJR0fAiB9adwNjOM43WkllFfLjtO%2BgXoBn33T2hmDNmxhfFh6VCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGY%2BU1ClaG0M14J1KtwDXGLlaW%2FmQjOww2uK43cM98w9ABpgJhJv1nb7seOHgl9Vw4dKMK6%2BD38%2Bs8l6nXUbnL%2FjS0IKwoc4ahMiWWHBvJ0fvgLBs9HQo2ufbzO7s51jqQ4S%2BdtjIBhfzYyCdPDUjtjExqtbsaiBFCI4Frasx9Ch9nvCNJ3j%2BjSMcNPXBJhcIBlqwfveH2hCVR1BdjJFQNqVp8ud8c5NSgGij4VhFl9aEFMNTfhDNPNdHIIiV0mHQDjj7QEihvqTuFetbD1c0dg8f2DGWEDrf7N7sDSn440smgTxJAs73ebdVmG3zP7iwJ%2F01PWb7BPRWB2VvUdzrYFTBzcymU8VPlyJFDeQJ0N1w7ArJp7%2BFTQL0tFII4TxwCWxcziF8fIPUy5toEWBWO8a1WppudXMBzY9ijt193JBsC1p2QFpjmX9Yjz9YcDo6SkzRMh2XdqBf%2Bvg4onHVCcZDSNzTCNFPH1yQY2bOf%2F9g%2FnMFisCyet2CjdQpmUJioY%2F0lgfzeWrJlEsNX6JTD050dTQzZrkIzG1Q9KJ7YdXbGCQkQJyX7AkNd2%2BW1MRoetSzzT9c7C36phsD0n8vqTC16nVc6w6nKCwHukfVEdQpGoy6bxI%2BCuV333%2FWxP%2B2%2BIsISKXYlqaLHIwuveKwQY6pgHCReDWsfrBIo6O1%2BGbJ4xJ95newI4nm%2Bl1S%2BBsQ%2F47gjSfn%2BCITNhfiskAfBkl1HT8fQ1p5QqbmmR1bwV2rQ5EiRM8Eta2B7WyNICsUl%2BqNrCtcp88cIGQyo3CDyIZNf9rRvaf3Ea%2FblfsOEmGYXOwmnmAKFUQszLypwd9sU9LZ7eXRgFrGByvciPgp02vg0HNpNNsQfqU3HA3nhYR6gZj9ko%2FPi7g&X-Amz-Signature=80b939d6dc54b49557dd1b1491bba39cf3bbd63dd1e85bbc3287c13265c3471f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQFMMI7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGJdmegA1KcF%2BgasRh%2FxouKgh06BsSqgj0Qc4%2BleJR0fAiB9adwNjOM43WkllFfLjtO%2BgXoBn33T2hmDNmxhfFh6VCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGY%2BU1ClaG0M14J1KtwDXGLlaW%2FmQjOww2uK43cM98w9ABpgJhJv1nb7seOHgl9Vw4dKMK6%2BD38%2Bs8l6nXUbnL%2FjS0IKwoc4ahMiWWHBvJ0fvgLBs9HQo2ufbzO7s51jqQ4S%2BdtjIBhfzYyCdPDUjtjExqtbsaiBFCI4Frasx9Ch9nvCNJ3j%2BjSMcNPXBJhcIBlqwfveH2hCVR1BdjJFQNqVp8ud8c5NSgGij4VhFl9aEFMNTfhDNPNdHIIiV0mHQDjj7QEihvqTuFetbD1c0dg8f2DGWEDrf7N7sDSn440smgTxJAs73ebdVmG3zP7iwJ%2F01PWb7BPRWB2VvUdzrYFTBzcymU8VPlyJFDeQJ0N1w7ArJp7%2BFTQL0tFII4TxwCWxcziF8fIPUy5toEWBWO8a1WppudXMBzY9ijt193JBsC1p2QFpjmX9Yjz9YcDo6SkzRMh2XdqBf%2Bvg4onHVCcZDSNzTCNFPH1yQY2bOf%2F9g%2FnMFisCyet2CjdQpmUJioY%2F0lgfzeWrJlEsNX6JTD050dTQzZrkIzG1Q9KJ7YdXbGCQkQJyX7AkNd2%2BW1MRoetSzzT9c7C36phsD0n8vqTC16nVc6w6nKCwHukfVEdQpGoy6bxI%2BCuV333%2FWxP%2B2%2BIsISKXYlqaLHIwuveKwQY6pgHCReDWsfrBIo6O1%2BGbJ4xJ95newI4nm%2Bl1S%2BBsQ%2F47gjSfn%2BCITNhfiskAfBkl1HT8fQ1p5QqbmmR1bwV2rQ5EiRM8Eta2B7WyNICsUl%2BqNrCtcp88cIGQyo3CDyIZNf9rRvaf3Ea%2FblfsOEmGYXOwmnmAKFUQszLypwd9sU9LZ7eXRgFrGByvciPgp02vg0HNpNNsQfqU3HA3nhYR6gZj9ko%2FPi7g&X-Amz-Signature=580d34697e571809b36e40a4db81a79972dfa97117fe63646c9547520d9d7178&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJMKZMT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDcCf0j%2FXAbbodBdhL7joSbdnLsMNG7t4zqUhQr21C%2BXgIgN4djfv5F0I1EHhWiBct5tnOEO4BPEIlQmFQSN4iW9GcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDhOk1bsoUu%2F7ltUSrcA3U4nLpUi1Y6vwnZ1TOH%2BPGb62%2BbVEUxdQsB%2FsSFCh%2FCyDD2RY3TTQWOZoH7bdQJOVBfZ0NpnW6rCQqYIfCTyXiTxAs3z1T8d0f%2FdqJHpocKwDg1S9tPRslpRN%2F1mteqQXyqhXi8Hfy42xwDPAe12Bmk1eefx4o%2Fp3QiKW1WSW9slHnppW1YNp4ITwlNYWfpy9zujF5S4P%2BloCeyF53118jPlq%2BWtJTH0RPhe6NcbJkyD%2Bce9rFBfKcOln08%2B50%2F4o%2BnVhsPLSCXFGvE7wGXMPycrtm2bQVY0loFCHgh8yqgUd1G9dWkamuUBwDTleHsXxSQMeaUadyiakR5ZpYF7wRJbFXpl97IrvoS0WKth6D31LFU4BsKyTi7y%2BhH%2FyDENU%2Bj3Vp2SV18tfSaGoNqcoOZS0VgNUYUDDDikt7X9EsgdCtngvlJ2q513DcJ36PBVo3XBuc%2BG3wZ%2B8ahRyJULWRH0enEaMeWsCKQh30euuxEHobJFW8WkQT6KXlQ5QRVYoNFYRuu484JPsVp%2FlH2kk3pmJYaJ3oREWHFTsQZXXZdcodtJK8L%2BUP2i3xwFuTUTGSnUCVqzBYT8moEumR6XXJ4AY03AIT4NtzQiNm60KXhOW7IXApkW%2BzFvMA9MPn3isEGOqUBQNgMknjZI%2FQzgqC38IBxW7sQBBkcJY64h%2FnFYKAtia9R0E1NEXFYx4cep19t1%2FPlkL5PO%2FRY%2BA9ynINn1NBhnVU%2BCpRbbJ31mEGMcvOw8sAfVPFHrDXBmIbIyBbkaCqprhatU%2BGZmYOkBTt%2BkstDkg6R5sCxjyBZPvz9uIY7MzMAS2FnTpJn3IPjqgm6N5spuDOfXcVvOf%2FtIAsm8GrOH58rDuxk&X-Amz-Signature=39dd4238da87f2ef3646d087a502675400cc82c1ca79f8e638f0d06ef0ff4c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622TWP4CH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCnRqjmpQ9EUIhl3VeoYNH0f%2BOjxH%2BSOSEyJpLITxRZIQIhAOaNo%2BrP5BXkygactEYMpMS2PslpMyLT7B2wCiiHK1HZKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhy442%2FOGn1na%2BjOoq3AM2Z6oAg7xYSQpQx039%2FMZH3S7F6gHX7p8KTEeYuFSO13ZFc%2BcxbFX8HijSRMY3NyGiPBwKv6VB7SxnxrgmuJ3GiMkuZFNfAExQEjmvmE27P19eJDwSANv41d9qFEKtVEvxQ8pLnLAY8P70P%2FlyshQMIb8t4Dm20Wgt7p0ace72jLrwY6j%2F1kE889mEH%2B%2BCBysynSa5tjZ4%2FuUM1Hb6MTdODcl8ofdAsvOKJNdp53Soat4Ut953gW1c8iP%2B2aH022SqbFBUTWG3uUDMc5LasfvyuYDZdPfUXEzyYR2VScmtw72z%2Flu0q%2Bp96xxpWZqJKTn6UTee8io7uCNIxFQ1Ib8dnq8muyIamnyxPKqvrISo4%2FHUD3OTdWYu2sLA1aG1agxPUwwy6Ybx%2Fmy7vrtPLeX71d3BnCD7pUDivuDA2fHMxVNiif%2Foc%2BtMSfmHuQK7gmhs8NjbBhmQlKUq%2BhdbPjf2xa8gqS07OM%2BdKJAAgAoCpPzJj3VhGBCTl6N9qGkrOM55KY9%2BFqsbkZL6LNlL%2BI3m%2BfbW7EEq8XRK5KLeF1JaAuh%2FVih%2BVhEaTtdREDduTtd2H5wXmzziXNV9w4sorosL5JXhXbUEtzwcCeNB3LxY3D6hmMeUwZkANb3wajDA94rBBjqkAd96tBQvkRglIKL4OhMns3doORWMqJHuQzXxjTxFPI9vnQJC16JfTUh6YMAImGhnGgJN0j1kcwi2WFFgl5EWXZWUGgAiSAjJrwVBahUcAnLehqjXOYaOeYnLtrdnS6el1gFLQPndskeulEwBr7%2FkoYvYvtCikxAGO5s%2BtteujPfxSLLw8TE5%2FxjCEfgIbQ6vB1XLrKNj%2FVCrFf97rMlxRsZ3kioz&X-Amz-Signature=226b7aea68b9101dbdc697bbb03e386f0f828e960ffa58188db45540d8f10f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQFMMI7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGJdmegA1KcF%2BgasRh%2FxouKgh06BsSqgj0Qc4%2BleJR0fAiB9adwNjOM43WkllFfLjtO%2BgXoBn33T2hmDNmxhfFh6VCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGY%2BU1ClaG0M14J1KtwDXGLlaW%2FmQjOww2uK43cM98w9ABpgJhJv1nb7seOHgl9Vw4dKMK6%2BD38%2Bs8l6nXUbnL%2FjS0IKwoc4ahMiWWHBvJ0fvgLBs9HQo2ufbzO7s51jqQ4S%2BdtjIBhfzYyCdPDUjtjExqtbsaiBFCI4Frasx9Ch9nvCNJ3j%2BjSMcNPXBJhcIBlqwfveH2hCVR1BdjJFQNqVp8ud8c5NSgGij4VhFl9aEFMNTfhDNPNdHIIiV0mHQDjj7QEihvqTuFetbD1c0dg8f2DGWEDrf7N7sDSn440smgTxJAs73ebdVmG3zP7iwJ%2F01PWb7BPRWB2VvUdzrYFTBzcymU8VPlyJFDeQJ0N1w7ArJp7%2BFTQL0tFII4TxwCWxcziF8fIPUy5toEWBWO8a1WppudXMBzY9ijt193JBsC1p2QFpjmX9Yjz9YcDo6SkzRMh2XdqBf%2Bvg4onHVCcZDSNzTCNFPH1yQY2bOf%2F9g%2FnMFisCyet2CjdQpmUJioY%2F0lgfzeWrJlEsNX6JTD050dTQzZrkIzG1Q9KJ7YdXbGCQkQJyX7AkNd2%2BW1MRoetSzzT9c7C36phsD0n8vqTC16nVc6w6nKCwHukfVEdQpGoy6bxI%2BCuV333%2FWxP%2B2%2BIsISKXYlqaLHIwuveKwQY6pgHCReDWsfrBIo6O1%2BGbJ4xJ95newI4nm%2Bl1S%2BBsQ%2F47gjSfn%2BCITNhfiskAfBkl1HT8fQ1p5QqbmmR1bwV2rQ5EiRM8Eta2B7WyNICsUl%2BqNrCtcp88cIGQyo3CDyIZNf9rRvaf3Ea%2FblfsOEmGYXOwmnmAKFUQszLypwd9sU9LZ7eXRgFrGByvciPgp02vg0HNpNNsQfqU3HA3nhYR6gZj9ko%2FPi7g&X-Amz-Signature=b8d3292155c1095b0a791ff4292c70273dac7c59607a0b05c2bf72075904556d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
