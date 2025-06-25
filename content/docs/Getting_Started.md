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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S522PVJY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC60i5Xo9zpVJtYadZo6Rw9AiowKNPMG6DmOKGZsQ9AugIhANZ3Fj2LWqT0MxnjTn1GpMPFjDnobJysKGnfldCrgrUIKv8DCEoQABoMNjM3NDIzMTgzODA1Igwt%2FRm15uNpiMdUyiEq3ANv%2FgTl5zJpkfxRz9iCW8y9IXOFRb9RDfPilITSsUvCa07ejo%2Fzy1I7nNyn4NDjaNN1O3wEmfekiqTNFG%2BREV0NKVe%2BQWRC9Xyt3zAI0W%2BbycfmhOmBsa971yob6XlMrjOciOCp9UN9ckPp29H%2FJl1fkpCD2PGx3nYafYu%2FFTafBSnOfAOq6i7mjhH2TaqjT7oIrLXW%2FHLS7sd7OfqTZo0rOousa2VLFx8gg4a0pTmVyU8j52iZjmeym0KE3vKdfOdpJnwLFdKbGZ0RJzfdNDXXRMKrFjltdZ6kzMW7boJ5Na%2BAECycBlFYwVMQ7QSd9z1q5EkX%2FOH2D6uFmZ5jxX8Nl6%2BkxRn%2F%2FWbwVjUZujv6Q2XPGgQdajA5P4k4BRIO9m5Vrl81e5LvF6fWHsy4BLLeJgpEmN%2FMnyR3Lu2zBtyT3FNcwrdZ1LzAoPZYbZdxde5HPGgk%2BuM2MA9PW8%2F42WFBDbr8rY%2BVXbu5KfzWK1JzdjmH6D%2FsV3p7%2B1Xstx9qE7gN5QWupYcoMV%2Bw%2B5Ob9jvnyNVhRiQ4V1URhzx4F2aWvqYDSS0LoSR%2F9IDHP1iXRpvA2gv66ZDF%2F%2BSVIhhdgjTHSUm96PVQ16HReIAGoY9cV9M0g2l7xVS2Y%2FtSzjC44fDCBjqkAeDPBG3CXiFn91%2FWJ%2B2KgPvuFmgHQF%2BjF8GDgEioJvhozjZodmoOCUzRAwstPWfY%2B%2FWSp7UVij9SI6ERr5XBjicTF3uq0iRQFhvdYFUM%2B1G5X1LKhF470HmxnSMMTxeTsDARLbpC98Q4A%2FRMfoCdeBcyDlDP6yUSxAu8b0T81qq9PFYHyEDZi1bKnPhihxF3mRzZroQpbZlMNgjSrkV0Z5WWdiEX&X-Amz-Signature=af8c2b649ad2dd50f836f7cd99d000c2c3b92b301c38e6b2e5a337cf342bd0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S522PVJY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC60i5Xo9zpVJtYadZo6Rw9AiowKNPMG6DmOKGZsQ9AugIhANZ3Fj2LWqT0MxnjTn1GpMPFjDnobJysKGnfldCrgrUIKv8DCEoQABoMNjM3NDIzMTgzODA1Igwt%2FRm15uNpiMdUyiEq3ANv%2FgTl5zJpkfxRz9iCW8y9IXOFRb9RDfPilITSsUvCa07ejo%2Fzy1I7nNyn4NDjaNN1O3wEmfekiqTNFG%2BREV0NKVe%2BQWRC9Xyt3zAI0W%2BbycfmhOmBsa971yob6XlMrjOciOCp9UN9ckPp29H%2FJl1fkpCD2PGx3nYafYu%2FFTafBSnOfAOq6i7mjhH2TaqjT7oIrLXW%2FHLS7sd7OfqTZo0rOousa2VLFx8gg4a0pTmVyU8j52iZjmeym0KE3vKdfOdpJnwLFdKbGZ0RJzfdNDXXRMKrFjltdZ6kzMW7boJ5Na%2BAECycBlFYwVMQ7QSd9z1q5EkX%2FOH2D6uFmZ5jxX8Nl6%2BkxRn%2F%2FWbwVjUZujv6Q2XPGgQdajA5P4k4BRIO9m5Vrl81e5LvF6fWHsy4BLLeJgpEmN%2FMnyR3Lu2zBtyT3FNcwrdZ1LzAoPZYbZdxde5HPGgk%2BuM2MA9PW8%2F42WFBDbr8rY%2BVXbu5KfzWK1JzdjmH6D%2FsV3p7%2B1Xstx9qE7gN5QWupYcoMV%2Bw%2B5Ob9jvnyNVhRiQ4V1URhzx4F2aWvqYDSS0LoSR%2F9IDHP1iXRpvA2gv66ZDF%2F%2BSVIhhdgjTHSUm96PVQ16HReIAGoY9cV9M0g2l7xVS2Y%2FtSzjC44fDCBjqkAeDPBG3CXiFn91%2FWJ%2B2KgPvuFmgHQF%2BjF8GDgEioJvhozjZodmoOCUzRAwstPWfY%2B%2FWSp7UVij9SI6ERr5XBjicTF3uq0iRQFhvdYFUM%2B1G5X1LKhF470HmxnSMMTxeTsDARLbpC98Q4A%2FRMfoCdeBcyDlDP6yUSxAu8b0T81qq9PFYHyEDZi1bKnPhihxF3mRzZroQpbZlMNgjSrkV0Z5WWdiEX&X-Amz-Signature=b34689c456b984451494820a19ea71d067bbda9f948d332d23030b6d0763eaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S522PVJY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC60i5Xo9zpVJtYadZo6Rw9AiowKNPMG6DmOKGZsQ9AugIhANZ3Fj2LWqT0MxnjTn1GpMPFjDnobJysKGnfldCrgrUIKv8DCEoQABoMNjM3NDIzMTgzODA1Igwt%2FRm15uNpiMdUyiEq3ANv%2FgTl5zJpkfxRz9iCW8y9IXOFRb9RDfPilITSsUvCa07ejo%2Fzy1I7nNyn4NDjaNN1O3wEmfekiqTNFG%2BREV0NKVe%2BQWRC9Xyt3zAI0W%2BbycfmhOmBsa971yob6XlMrjOciOCp9UN9ckPp29H%2FJl1fkpCD2PGx3nYafYu%2FFTafBSnOfAOq6i7mjhH2TaqjT7oIrLXW%2FHLS7sd7OfqTZo0rOousa2VLFx8gg4a0pTmVyU8j52iZjmeym0KE3vKdfOdpJnwLFdKbGZ0RJzfdNDXXRMKrFjltdZ6kzMW7boJ5Na%2BAECycBlFYwVMQ7QSd9z1q5EkX%2FOH2D6uFmZ5jxX8Nl6%2BkxRn%2F%2FWbwVjUZujv6Q2XPGgQdajA5P4k4BRIO9m5Vrl81e5LvF6fWHsy4BLLeJgpEmN%2FMnyR3Lu2zBtyT3FNcwrdZ1LzAoPZYbZdxde5HPGgk%2BuM2MA9PW8%2F42WFBDbr8rY%2BVXbu5KfzWK1JzdjmH6D%2FsV3p7%2B1Xstx9qE7gN5QWupYcoMV%2Bw%2B5Ob9jvnyNVhRiQ4V1URhzx4F2aWvqYDSS0LoSR%2F9IDHP1iXRpvA2gv66ZDF%2F%2BSVIhhdgjTHSUm96PVQ16HReIAGoY9cV9M0g2l7xVS2Y%2FtSzjC44fDCBjqkAeDPBG3CXiFn91%2FWJ%2B2KgPvuFmgHQF%2BjF8GDgEioJvhozjZodmoOCUzRAwstPWfY%2B%2FWSp7UVij9SI6ERr5XBjicTF3uq0iRQFhvdYFUM%2B1G5X1LKhF470HmxnSMMTxeTsDARLbpC98Q4A%2FRMfoCdeBcyDlDP6yUSxAu8b0T81qq9PFYHyEDZi1bKnPhihxF3mRzZroQpbZlMNgjSrkV0Z5WWdiEX&X-Amz-Signature=1793ca0cdbb7965b264ca01015e968d9718fccad43ab5fe2b78079c077b3fcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RXZFLU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDPFbjhU%2BIOiN97HY4bWneAayBg%2B%2F1yhFyVJFAzkxUQ1wIgME84UQtnwrWqB7AG%2F%2BAdYG5XXsCSNIWtDWuphczFKaIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCgAl8Pr%2FCQzVlZvrSrcA6lS5Qd7VGqVV091n6%2FE7zKlY0BoOJrv92pPPX2nm2ReDPLeuWemQIyANNU0B%2FY1Z9iMQc2d5wRJg9hw83VKkYiE7xyu9latel%2FObYiTtAmifQYzB11unXd4hajYLkf3jWp4Jsa6kS7a33bhgsozRiRC8PcnnIVatv9yxWuVTsm6yvd4R%2BL0snoXJb9F1LL4nEQB8WcTxYQ4hiegGDt6V4%2BcY6fuwe16lIRd7a%2FBRrZYo%2FoN5C9OGGarkFdLPOXLpLuinaeM4fyHGUJgkoDz%2F8vFVmNTAM2FqJv%2F%2FAJWXiT1k%2BYhTGX5nFXPxOay3HZ9TxXfjoyVx%2B5%2FDHT0ecwh34PavUqhH8%2Fqu%2FWOAM9ICzAV7F8HnPMFYnNwhh63j3sx6pq2TcHNtH%2FG10gSJkiblst%2FtMrqNZVY5jbZCyuf4TjaOr0Y%2Fiw25DNyInQqFuw%2FvT4e4mVb71TVSErEZIm%2BCbwlIM6ThnEvbNpUDzULPXjDMwE6WnVpu96OOKlD0907lpfmZ2UD2Yc05OEu8M1hj2fz76QJ%2Bro5sgEJAg3WH9BVRzFM471WT1%2BSmcT3YGRewDUt6qr%2BLjCG7TpeW7R%2Bu1gDyEe0eqohkZKBxW8%2BQKrcJI%2Ftdvl43duN7BxgMNXg8MIGOqUBZXt9VA41y%2B6v0Y4b95rGmwxIF35QvCeuYPag%2BdKGxksNQwvqLJMTZ4vor3cu6bvMWbztN6cUr55ITcV6%2FeVN34jGelWyrC7K3MIoQwsP%2FhG5xNjy7YZ37wa4QxjnfF1S9mHIGjhVpVo5%2BdczjRVph7hHzlrh%2Bma%2Bh6yObg%2BhtuNX9nUI20qQ4xE4I7tZ%2BImpJl1jFUnfMXstmNVtpEpjHai2CXGI&X-Amz-Signature=3f0b26543e30164a5e816574748e4e344c16252760fd03b88f2645a1ae47697c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBBRZO2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDceqcHBopgE2bHjjsf0LfyRiStLj9BrE%2BkuXi41iqhoAIgAvx3KpZJJUChmb%2FM8znFSzWU2K428quZdebi6A%2FTB08q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPzBGPJ0TwVqtcjWqCrcA0N5MsGGT34kI7S1ycyTyLjmGl8HXG3Bk50YumeO14Hcve6KZnm40nYZw0mwgoilt0JP1IkbR2HrLVsiMHv9wzjsyBbhsB91nOlnJVMXk%2FNfJ320ZEaiPtj7EFVk0OM0bbMWgazLSXsy%2Fy0x4EQMwfZFGjgAn2L19d%2BeyrHY%2B29mKOjxtNNOTWZQxMRvP8JS4BecMCuS910h0zCvEVaNIsKUYZ7r9D0D5rXukGWWPrpb2CtTEM8fM%2BchQk08pR%2FDdlmlaqse4HN%2B4qv94WTtjmquKjutzCgNvg6%2Fn372DRH0xKMlBlXoAavNU%2FguY2KKNEE4dEGW6TlEYSk5oN44IZ6X%2BjsG99mZEfeLeZCIbwB1lTwZXrUP6DRsOQTRaKhINVgw%2FjDYx3wLad5EcG1MQeTmHb6EDAm5soPlPNP6nHv%2FdVlyflF5JButPVuvzbgZcQZOGiLdiGsshQh22Ihs64gGQmNnzZj1aLI3ZsMZ8uNbCeGALgUju0acpWnr3ygWVGmIXikGb9QJgSeiKC%2FA8N%2Fhj7xiXSG2sJR3uaWuilNXRBGsSfdlIf5gKjEBUy7H%2BSliYNvlFgoa9qyV4AJwQLVR6cOiv8AQOtviSxxs%2FwXNucvS9ZBI2SIs34QvMKrh8MIGOqUBywlbmvTKGB%2FM7d%2F9r89p98lrgIlDTX2ioSwEgeiNsfp5fTEcDiAdfCNdqxPDCtZq5vKjgEAwReo5w6LGkKdsfkMtVdj4f7xztVEYvlqQbVbvWROwzUPfnZgrklk%2F5sILTySKeZ64viiIJ0y1Ma7DUYxBb9Dx7ndVcbKoatucNxlfKjlSaBRmKqut785kFmV2ZshnaukZl3NqK2ZqDFGEBFUYB3R3&X-Amz-Signature=bf15b27a5b802596f1d9750b683bb234ba0f7024ef1cedf85eba27a72a8ce4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S522PVJY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC60i5Xo9zpVJtYadZo6Rw9AiowKNPMG6DmOKGZsQ9AugIhANZ3Fj2LWqT0MxnjTn1GpMPFjDnobJysKGnfldCrgrUIKv8DCEoQABoMNjM3NDIzMTgzODA1Igwt%2FRm15uNpiMdUyiEq3ANv%2FgTl5zJpkfxRz9iCW8y9IXOFRb9RDfPilITSsUvCa07ejo%2Fzy1I7nNyn4NDjaNN1O3wEmfekiqTNFG%2BREV0NKVe%2BQWRC9Xyt3zAI0W%2BbycfmhOmBsa971yob6XlMrjOciOCp9UN9ckPp29H%2FJl1fkpCD2PGx3nYafYu%2FFTafBSnOfAOq6i7mjhH2TaqjT7oIrLXW%2FHLS7sd7OfqTZo0rOousa2VLFx8gg4a0pTmVyU8j52iZjmeym0KE3vKdfOdpJnwLFdKbGZ0RJzfdNDXXRMKrFjltdZ6kzMW7boJ5Na%2BAECycBlFYwVMQ7QSd9z1q5EkX%2FOH2D6uFmZ5jxX8Nl6%2BkxRn%2F%2FWbwVjUZujv6Q2XPGgQdajA5P4k4BRIO9m5Vrl81e5LvF6fWHsy4BLLeJgpEmN%2FMnyR3Lu2zBtyT3FNcwrdZ1LzAoPZYbZdxde5HPGgk%2BuM2MA9PW8%2F42WFBDbr8rY%2BVXbu5KfzWK1JzdjmH6D%2FsV3p7%2B1Xstx9qE7gN5QWupYcoMV%2Bw%2B5Ob9jvnyNVhRiQ4V1URhzx4F2aWvqYDSS0LoSR%2F9IDHP1iXRpvA2gv66ZDF%2F%2BSVIhhdgjTHSUm96PVQ16HReIAGoY9cV9M0g2l7xVS2Y%2FtSzjC44fDCBjqkAeDPBG3CXiFn91%2FWJ%2B2KgPvuFmgHQF%2BjF8GDgEioJvhozjZodmoOCUzRAwstPWfY%2B%2FWSp7UVij9SI6ERr5XBjicTF3uq0iRQFhvdYFUM%2B1G5X1LKhF470HmxnSMMTxeTsDARLbpC98Q4A%2FRMfoCdeBcyDlDP6yUSxAu8b0T81qq9PFYHyEDZi1bKnPhihxF3mRzZroQpbZlMNgjSrkV0Z5WWdiEX&X-Amz-Signature=3cbe12f136db5fa2b5e90a00cb21bd1ddca5a3fb2026b38b9cd0f6d2630299e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
