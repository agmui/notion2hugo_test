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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZY4HQK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYwGm2kLKaZp3sVjgCsLnQVCqHPzfKy2KlR%2Bry%2FLb9hwIgP0V1SXcgdhVCI2Vy57lqdP49O0N4J1BO7AThrloeZ70q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA95ghgyDhx%2BCyzC8ircA523sCUvk%2BOJQvz13CAWCJ6ZRL30OR8aGaUF1da1qjczyydYhQgyjoKVgSNlcOdWyUwDRpds0kBSzWz%2F8DvkrfGnmIFLOj3toBYDIFHfmN%2FrOM9uT%2Fg2EB0F00vUtMMQ2IySK18nH9My9VJqjU5U5Z61i9QHAGg4XUfcE6oi3xIwPdJA%2BBeGqTKtQ1fPFBiyaBMvmIr9RK57cm%2Blea7S94HtUkXbHM8zDQ8Cfyzmh2PHJWyQ5w6DTRWsS3IzDFvccgeFF34YrOkuLhilVgOs63FSJaxelf1wWG2Iqd3AC6WarXp3ff0aY2i0eYBvdvblB%2BG2qeahM0FopaMZJLNEBa7f9rt223Zg6z6iGZHKhgBubLrD9joUd8TPNwAZbCEpWPM1SBKNpjhZjhyO7%2BH0lbJqGU7ectrDQx19Vm%2F%2FAemfxygBqVqAHMHbcZ80ZLdA0XbEXPZv%2BoXBxwu%2ByzdQKKk7BBq31cdWKUzJCXGwahedoMiVRbSxo0xW%2Bpz8MeMOgzxe3TvWjrVx5GhXkLjyEposJEg7kH87GCX6o%2BMjmreTyAl%2FhS5flRIuYu6n13C378T%2F5ZPHut8XfszuXbMb531VbhsLmqfMaqdqEzc5VLo7JhT2jfqzidEMm%2B3SMPbg38MGOqUBAs7AYJWCYy%2Bd76nYhKhMe5i%2BIPl68Mv%2FF6permKRF8%2FfOXUNMBrHHlsek1Fyc24nINzj2uou1caZ36JwluBmspv%2Fn0wRXxnlizZbO6d7LkzYGvEAGJenbR3Efg%2Bo8mzdbI7NzZ%2BTrPxmwd6fO5fSo0aNM57bLGCT0s2EWQgNpGch1VmEDAMnlkq%2FtqBlJ2ljlyZVCb3ZbQOlCKKRrEYP6v1r%2FVjq&X-Amz-Signature=b1d4b51888ab1276491ed6dfdbf6dfe23dc2b2ae5cfa0d4a848a6f7825f192a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZY4HQK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYwGm2kLKaZp3sVjgCsLnQVCqHPzfKy2KlR%2Bry%2FLb9hwIgP0V1SXcgdhVCI2Vy57lqdP49O0N4J1BO7AThrloeZ70q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA95ghgyDhx%2BCyzC8ircA523sCUvk%2BOJQvz13CAWCJ6ZRL30OR8aGaUF1da1qjczyydYhQgyjoKVgSNlcOdWyUwDRpds0kBSzWz%2F8DvkrfGnmIFLOj3toBYDIFHfmN%2FrOM9uT%2Fg2EB0F00vUtMMQ2IySK18nH9My9VJqjU5U5Z61i9QHAGg4XUfcE6oi3xIwPdJA%2BBeGqTKtQ1fPFBiyaBMvmIr9RK57cm%2Blea7S94HtUkXbHM8zDQ8Cfyzmh2PHJWyQ5w6DTRWsS3IzDFvccgeFF34YrOkuLhilVgOs63FSJaxelf1wWG2Iqd3AC6WarXp3ff0aY2i0eYBvdvblB%2BG2qeahM0FopaMZJLNEBa7f9rt223Zg6z6iGZHKhgBubLrD9joUd8TPNwAZbCEpWPM1SBKNpjhZjhyO7%2BH0lbJqGU7ectrDQx19Vm%2F%2FAemfxygBqVqAHMHbcZ80ZLdA0XbEXPZv%2BoXBxwu%2ByzdQKKk7BBq31cdWKUzJCXGwahedoMiVRbSxo0xW%2Bpz8MeMOgzxe3TvWjrVx5GhXkLjyEposJEg7kH87GCX6o%2BMjmreTyAl%2FhS5flRIuYu6n13C378T%2F5ZPHut8XfszuXbMb531VbhsLmqfMaqdqEzc5VLo7JhT2jfqzidEMm%2B3SMPbg38MGOqUBAs7AYJWCYy%2Bd76nYhKhMe5i%2BIPl68Mv%2FF6permKRF8%2FfOXUNMBrHHlsek1Fyc24nINzj2uou1caZ36JwluBmspv%2Fn0wRXxnlizZbO6d7LkzYGvEAGJenbR3Efg%2Bo8mzdbI7NzZ%2BTrPxmwd6fO5fSo0aNM57bLGCT0s2EWQgNpGch1VmEDAMnlkq%2FtqBlJ2ljlyZVCb3ZbQOlCKKRrEYP6v1r%2FVjq&X-Amz-Signature=ff6a5a6ced0c48fb6489973668079c8ce6d376c15f7d7130c144c5f3529344e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZY4HQK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYwGm2kLKaZp3sVjgCsLnQVCqHPzfKy2KlR%2Bry%2FLb9hwIgP0V1SXcgdhVCI2Vy57lqdP49O0N4J1BO7AThrloeZ70q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA95ghgyDhx%2BCyzC8ircA523sCUvk%2BOJQvz13CAWCJ6ZRL30OR8aGaUF1da1qjczyydYhQgyjoKVgSNlcOdWyUwDRpds0kBSzWz%2F8DvkrfGnmIFLOj3toBYDIFHfmN%2FrOM9uT%2Fg2EB0F00vUtMMQ2IySK18nH9My9VJqjU5U5Z61i9QHAGg4XUfcE6oi3xIwPdJA%2BBeGqTKtQ1fPFBiyaBMvmIr9RK57cm%2Blea7S94HtUkXbHM8zDQ8Cfyzmh2PHJWyQ5w6DTRWsS3IzDFvccgeFF34YrOkuLhilVgOs63FSJaxelf1wWG2Iqd3AC6WarXp3ff0aY2i0eYBvdvblB%2BG2qeahM0FopaMZJLNEBa7f9rt223Zg6z6iGZHKhgBubLrD9joUd8TPNwAZbCEpWPM1SBKNpjhZjhyO7%2BH0lbJqGU7ectrDQx19Vm%2F%2FAemfxygBqVqAHMHbcZ80ZLdA0XbEXPZv%2BoXBxwu%2ByzdQKKk7BBq31cdWKUzJCXGwahedoMiVRbSxo0xW%2Bpz8MeMOgzxe3TvWjrVx5GhXkLjyEposJEg7kH87GCX6o%2BMjmreTyAl%2FhS5flRIuYu6n13C378T%2F5ZPHut8XfszuXbMb531VbhsLmqfMaqdqEzc5VLo7JhT2jfqzidEMm%2B3SMPbg38MGOqUBAs7AYJWCYy%2Bd76nYhKhMe5i%2BIPl68Mv%2FF6permKRF8%2FfOXUNMBrHHlsek1Fyc24nINzj2uou1caZ36JwluBmspv%2Fn0wRXxnlizZbO6d7LkzYGvEAGJenbR3Efg%2Bo8mzdbI7NzZ%2BTrPxmwd6fO5fSo0aNM57bLGCT0s2EWQgNpGch1VmEDAMnlkq%2FtqBlJ2ljlyZVCb3ZbQOlCKKRrEYP6v1r%2FVjq&X-Amz-Signature=877b8bef91cbd98f8ebcb502880bc09c1722dc57b44a853dddfc36126b2ea382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTEKXWWU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC7UC9Ya4Tp4fnFz99EszlGUcvv9RA7hfNK72%2BkdkEFfwIgLy7AyLe8B0RQ8JuGZkS3EHFmufJN0gM6NHaVbyLzz0oq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDPC3eZvirUvoNzTGUSrcA1DHL6QCMAzoWIBrr%2FbRlMyVz4vAzLg5ovDcrt9BNr9SSSptsY4zeeE8veBWdq7aruveVTvY8LHq2KgG%2FGg%2BnW8VNwUVT6aUpXn2k%2B%2BWUGZD%2FiAI225VDlEWG%2FgVqBRODgpoE8LHVD4EmS%2BkT1wOsYWrYiOyQTqN1GRWtBzDw1e9rGPSQO8pICC4Hg%2FUPiv1D3X3aL2%2FZ5HdG%2FZ9DicGjFVYzt9QJQO2cNUT0%2BNWSWLKkvbWkgUfxifdgAU6n1oktAzViiB7ccgrDfRoUQeUYwKEsWJ5l%2Ffpz065g%2FiT7pBaBk0UDv5G8naFFptwPI9FPdUeHg439jzoCGNUddPf06D%2FH7RewLW2wul41GM7nyHH4G1sXgtGNZgqtBvhW155rr%2FmWDh80R8W%2FZiUVEjAqRrgn0%2FrG1gSADnSNYsDtwsmsts%2B%2FyIcg%2FzIb9Me3i%2BVJcHzLpKAyX88BOSOvgHeiDcZgv7q4pI6KGSMwbb%2Bil8o%2FCp4EaC4B4tp8Ax48NJc8r6p9QHusj5SRZYT%2F%2ByAu1RXhPajAfZNjRsH82DrYowrR6Z98YK1XfTUgIb1pFDGhsxP32OVcb%2BtbAmjgSHz%2BEqcZbkRDsXCI82bN9M9dxoALUNDWxcfULz1k22eMPXg38MGOqUBFYvcZyvTE0Ul5o6OwilNujYNWYoSxwhZzPM7HJ4%2BcXJSkaIISidDXan31nGH3blQM086fGltwXqzJ7rux7L4rayn0fu6Sfu%2BYzm8rjmkvdaUSoxtENnpEwSWPlI8P3ktE2EvaBN3xZAM%2Bd3nx8qz5JPItGvzI1DYO08%2BxWjyQs6xY%2BnqfxtjRLO7J6K3OcSSUWKaM0fJWFJI5uWZKMFwk%2BLT8DFD&X-Amz-Signature=329e106d8d2a9657fa7df821ed11a3c4ec215ba0eed5e589f6f53816928c4b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMFGYDP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FbMctxP%2Fvpam8PyOcNutqWel2l1RhpP7pWGFOEiiP4QIgL8tuRNaQ9%2FTu%2BKBvt6zjKskjDx9JbRY%2FB93HAxKAi3gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGlbGMoWwNOK8L2TMyrcAwfXFM4LrhUH%2BW2aVNdO8HTRBD%2FV%2BPg8d5e6adZ3do6JL4xK4Jl5vO1akyHtTXlSt9sMIHlru3RgQNZ1rZqpzjuOojI1uRGw9fIZ%2FOhsrSpoFLH00xUpI1kaLuCK%2FXCfYy7WWFhva5yqSKV6AvAO2bQdglnS02A8lf9KVIanCtHiqEd6S8CyycQXWAb2u3Ut3CSWAeFx6gMA9WGNdFO3KDFgzy56eEkl5WkTWC6%2FGaOgBdZko%2BPtQHwidHE%2FVJkKzf7qKoGDjpFEnSoQk3euJvoBKQeD5%2BYiWeGysv3XNcfNIB7%2BxMdcjmmA8uDm%2FWkkI9QXQwjVPb4wbhAZv4apfAzhowOqVEu078nshfD9ZN7IgE8%2BHhFst1HgfBOLLkpPjhGGQMTaoECCoV1YTFlBFL2048Spj5fGw9Qflf7UITm2oDhos%2Bid3OUyZT3aZeyj1zapERmriFyCXYvkYL8BTCa7%2BwQ7y5gxaWcbugw9VaouPSHfeXQwQjPE3klEbdIbpBhhzhM%2FwkrZ%2B7t0b9aYXWrO%2FxI662KqLK0to6Qj3NXD1x3fqcdfe7mKSMTtVXoQNsvMWhB7X5x8z%2B7GFdbkGyMnwTcd1ANokSZKP5vGIliwh0caXAjlm9MQ%2FldOMNLg38MGOqUBXXd%2BXTdFq4ucDF3zzjIb8pCs4FxHxygiZCZSq%2BtKOLsVDluTfTlTO4%2FnXc5THL2XX1hN%2Bm00FJliNBE3V1%2BTniYUNlHMQgR15DaxIhCSLCdnl1kOEeVD0pt4fofhOLUzjRuiYK9mBQ3K4KmoiPRL%2BdBNWCTls2VwLYJ1h6e7OV9Cvio8lamKgMudF%2BXkNGkeNW5YBMjDxX8zdXt%2FLXd35%2BvHmoPk&X-Amz-Signature=5a2be9fc498fe41a2f7203a9ee032bfcfd745cdd05effa704ef9cc38108577a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZY4HQK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYwGm2kLKaZp3sVjgCsLnQVCqHPzfKy2KlR%2Bry%2FLb9hwIgP0V1SXcgdhVCI2Vy57lqdP49O0N4J1BO7AThrloeZ70q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA95ghgyDhx%2BCyzC8ircA523sCUvk%2BOJQvz13CAWCJ6ZRL30OR8aGaUF1da1qjczyydYhQgyjoKVgSNlcOdWyUwDRpds0kBSzWz%2F8DvkrfGnmIFLOj3toBYDIFHfmN%2FrOM9uT%2Fg2EB0F00vUtMMQ2IySK18nH9My9VJqjU5U5Z61i9QHAGg4XUfcE6oi3xIwPdJA%2BBeGqTKtQ1fPFBiyaBMvmIr9RK57cm%2Blea7S94HtUkXbHM8zDQ8Cfyzmh2PHJWyQ5w6DTRWsS3IzDFvccgeFF34YrOkuLhilVgOs63FSJaxelf1wWG2Iqd3AC6WarXp3ff0aY2i0eYBvdvblB%2BG2qeahM0FopaMZJLNEBa7f9rt223Zg6z6iGZHKhgBubLrD9joUd8TPNwAZbCEpWPM1SBKNpjhZjhyO7%2BH0lbJqGU7ectrDQx19Vm%2F%2FAemfxygBqVqAHMHbcZ80ZLdA0XbEXPZv%2BoXBxwu%2ByzdQKKk7BBq31cdWKUzJCXGwahedoMiVRbSxo0xW%2Bpz8MeMOgzxe3TvWjrVx5GhXkLjyEposJEg7kH87GCX6o%2BMjmreTyAl%2FhS5flRIuYu6n13C378T%2F5ZPHut8XfszuXbMb531VbhsLmqfMaqdqEzc5VLo7JhT2jfqzidEMm%2B3SMPbg38MGOqUBAs7AYJWCYy%2Bd76nYhKhMe5i%2BIPl68Mv%2FF6permKRF8%2FfOXUNMBrHHlsek1Fyc24nINzj2uou1caZ36JwluBmspv%2Fn0wRXxnlizZbO6d7LkzYGvEAGJenbR3Efg%2Bo8mzdbI7NzZ%2BTrPxmwd6fO5fSo0aNM57bLGCT0s2EWQgNpGch1VmEDAMnlkq%2FtqBlJ2ljlyZVCb3ZbQOlCKKRrEYP6v1r%2FVjq&X-Amz-Signature=ac5cc180ce5944d6122aeb2672e69c4bcd575f9b1d451a484b6d991348667a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
