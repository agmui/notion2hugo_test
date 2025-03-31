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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7F3DZU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICee8w96156IRPdP9dLSxv4gK0lxD8%2BjWhUr2rRIh4GMAiBohn5d1iwxdNpCR7Y6lzBZNcMV1kim1uE9zZkaKudq4CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuiHLtg%2FOzexsn53PKtwDjPJQM%2F1FcCPgb4JGjEkqntkQKlAPVgHGkKe%2Fjng5mUVImCgAL290bqrj2mowqfnnyRsB9mWou1MppEF01Iwss5Vx8XrjgmMZS%2FQAZNLJQTbCu4Zq6M%2BXs%2B0p7ID9mnTeyEVSsgTBEPOnEVTBPuGxT8WmiPrRITq%2FHOHfBH2RHwhAqCYSRQXKLASufzTiJsbQRq9jSdnZILsiMExfca0Mt%2FBQb7gntGxhllGEO0RAYyDBJl%2B0BYJWVcw2g3eTX05kzqGc46VCq%2FRGmunD%2FsilBZxnqqN5WSHYkOxtG0gMUFI8gotevaX213au8QqmRMGNJ3QmDW5UtZPy5zFgwwhqu4OzqTIXqxa7MErvo9tj7Z%2FQn3gEcahv1FPbse2pGb5vf2PeE6%2BCvwkAKT6Y80ju2fgDGGoL65Vyh%2Fb71NYbXaR%2BRTZyFqCAwK9XBjK6PqWmWl%2BTLFO0B2tWsSPjP2g90wvb3ofkK9kST%2Fwdrt1LIG5yesP38RM2mfjpDWQp0ZO0WYOwVWxtXA9cxGZsp4g3l31nyfPQmkAosXQ0hyqNAH0%2Bf9H4DhAfN2pNJsRXN%2BZmJPq5FfIVTMRYjdtvPozVuOzhz0uREopaFbaUz6yv9J31P8Wkf8q0z2EG%2BBIwz82qvwY6pgHeUe1Gx58qXRCkWAPegvQjBqEb9DTsLcq78T6vOazfvHm%2BahJnMOyeMOYqh5U9R16SB06tGk4IcVfitxckh1oX3xMeZIx8panJBjT6jko4tD6XE0DJi8Rp6wYQEygjrckLBkz7RQ24YcsNEHPEn1JrBm%2B%2BTBXFg6X2wSbc36R2Jw5s%2FjRUGrPiWvOyYRRHjDlEBCMBi36mabyi%2B%2BfH4K2K4upM7sNm&X-Amz-Signature=986d3d3f0a12977081997c4872343a5a60aacfbd48f0b5379241bd7675dc52c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7F3DZU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICee8w96156IRPdP9dLSxv4gK0lxD8%2BjWhUr2rRIh4GMAiBohn5d1iwxdNpCR7Y6lzBZNcMV1kim1uE9zZkaKudq4CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuiHLtg%2FOzexsn53PKtwDjPJQM%2F1FcCPgb4JGjEkqntkQKlAPVgHGkKe%2Fjng5mUVImCgAL290bqrj2mowqfnnyRsB9mWou1MppEF01Iwss5Vx8XrjgmMZS%2FQAZNLJQTbCu4Zq6M%2BXs%2B0p7ID9mnTeyEVSsgTBEPOnEVTBPuGxT8WmiPrRITq%2FHOHfBH2RHwhAqCYSRQXKLASufzTiJsbQRq9jSdnZILsiMExfca0Mt%2FBQb7gntGxhllGEO0RAYyDBJl%2B0BYJWVcw2g3eTX05kzqGc46VCq%2FRGmunD%2FsilBZxnqqN5WSHYkOxtG0gMUFI8gotevaX213au8QqmRMGNJ3QmDW5UtZPy5zFgwwhqu4OzqTIXqxa7MErvo9tj7Z%2FQn3gEcahv1FPbse2pGb5vf2PeE6%2BCvwkAKT6Y80ju2fgDGGoL65Vyh%2Fb71NYbXaR%2BRTZyFqCAwK9XBjK6PqWmWl%2BTLFO0B2tWsSPjP2g90wvb3ofkK9kST%2Fwdrt1LIG5yesP38RM2mfjpDWQp0ZO0WYOwVWxtXA9cxGZsp4g3l31nyfPQmkAosXQ0hyqNAH0%2Bf9H4DhAfN2pNJsRXN%2BZmJPq5FfIVTMRYjdtvPozVuOzhz0uREopaFbaUz6yv9J31P8Wkf8q0z2EG%2BBIwz82qvwY6pgHeUe1Gx58qXRCkWAPegvQjBqEb9DTsLcq78T6vOazfvHm%2BahJnMOyeMOYqh5U9R16SB06tGk4IcVfitxckh1oX3xMeZIx8panJBjT6jko4tD6XE0DJi8Rp6wYQEygjrckLBkz7RQ24YcsNEHPEn1JrBm%2B%2BTBXFg6X2wSbc36R2Jw5s%2FjRUGrPiWvOyYRRHjDlEBCMBi36mabyi%2B%2BfH4K2K4upM7sNm&X-Amz-Signature=a10e42972bc65dbb82ee2914634907708898e7627023893dc241c82e37c74c99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KWOM4V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDlsOxOHXl4tLTIKgywDj9BzIOA8JI8Ilzx%2BNJnv4RbhAIgNWag%2FarQNbxr1jVsQZHUauqo7uV1BzrDeESDroH80UwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuz3HGiL0gHOHlcuyrcAw8QxPpgyHeAK%2B8O0W5l03Ymh1E6f2v61msHAZV8jNoBCIP9dmxqMy5Dpzv1psBMQ%2FY7RBqQekTEmS03dD4GTTo%2Fcp9os2qp3KlhpuJ2ca71zP%2F8toJpxMI8Gt3i36rXy583eruUiM2Q5S0hLAiZ95Cyyjy71IxQ%2B%2BSbdzN%2FSbAIaBZ%2FZPsbIfCWBdUFt3aJdoJIFvpAKUS%2BLWV7o7h8wmUt8Dp7WZrN7VPLr6gxHkoyYblUIHijJNrj1oL2VXpMNW1J3EyKlzv23O6SXFWUIKWjEwFNS0MbObS3l78ePYi8qLSqPiR8I2yZBustwTu48nB%2Fw1O2TIAwdnHbmRRwYVGDMvoFlFN64vHqqbkpgK%2FToEXRMRmW8wWnpYju9iWZIpzxXz2XEn3RBJzjNgKcuez8WvEMpreYbviNbmsLC%2FMKx6qR2oNPS3QR7Xaa8rwt2C%2F4rOvsBIbKYi%2F8TDmAgv98rvg%2F9DLksyd%2BMyFo72hqbh0k0urCQztvd13GzKgwH2NRA%2BblBhGO1BrXI1dVAc0A1cwFb%2BKkmo1KRJ2WfJDM4hXI4%2B3eggjL0LL8bc1g9yRdw16s9fS9bfkLFMcswQJdkWefpYr0%2FpKgJ4gKfIdPvERy9JuJIQzhrId1MPjNqr8GOqUBQJriZzvtVTK%2FMTZbMaJCNAWKGGrUho5TEZWzJu5zWich%2BJ%2BD%2B%2FMt9UWmi3l4eClQa%2F9tztBVYVzCpaQgIOgbKGUd%2B69rcWgs1cV27TFmVPzyfl0IRatLpQcXOkNv4G4%2BupePcjteQ1HKEpD5YhA6j7lGbjcN4gwzyC9vuszAztSJsIDxLIT%2Bq7RvZSR9KV%2Br9SPhyERKSNxFunteDrSYfGQQuIdI&X-Amz-Signature=0d253a225e1a6a50f51be25416bd1c72c696a20144b26543297eb0394d70b989&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642QWQ34S%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF9Mj%2BZtg88s437KAHnP%2B2TijlGsFoAZWOsIQ5e9UY8%2BAiEAzivZ47EyKEQF%2FJle9zQjejRnfYVH1kK8VQ1fcCtLR4cqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHswdFLNt%2F6Ai7R%2B5yrcA1Dg60UY4x653%2Fzxyw53CyzAaLA%2Fz3TrMvetveD0d4WTu%2B8RdyoTgSDrXks9Te9ASeg6%2BeDQ%2FcEJY%2F%2B6YVQ3QDpwrELhplhlotsIn%2Bnyr81L7vvKwqFZXF5AB0fbgYHXVf3lWju7x2%2FxzkzBaRUTEmDe5Nlkf7bMYZQIPUxxP%2F3NTiJXyj4VV0j7HeAFwxVCJjYUghlfB7JCcR6C5CaGFTPaHovYlrLli5x1%2F3hjVg7tmaZGdDCCvlzFDi7y60WV%2BnDco7Dz5a0yBS5G1HwdeWQfN76pxrfR4hP8JJCGMgVPo%2Fe7x8h9j6oh%2FDINX1zqINIY3%2B0DFbrwz6S8mljkRVmsOemoITW6n175bcqNQOJtZmurfFEyvND2Al%2BUKwDesltc%2Fe5ulvF8WM%2BDW2jGnKGNKMzS2%2Bmmgpmas8w3RPW90kIaI2PIesGhuDBfyUk8ubpCW%2Bl7Ve7Jq8EfC%2FKrMLUiNwK3VLOtEvewv5vWhmqMPvy%2FkrLXen%2FVqDQmEj9syM0Vz%2BeSXyZWH2KMW2RcSe8HctjjJTekKuc67psvv4jHkrNEyfW6ZH%2BJlHRks6oofdhiFDINrDcpkuLR32cjv3Xku0CYLaRBIh%2FekiltszVVvWWXb0JL2%2FXn%2B0o%2BMNbNqr8GOqUBHhMZqcyXFplN3o4HLXTo9VSvzpWNToywBAgit%2FFoBJ%2BC7nPNPGktqr8i5bnfuz92EL372GWe2exH6cHxYhfOGW4KjbZX4xtb188cl%2B87g%2FoNsJBrXyxD9qvp3ltb%2FkOrWpdhBcm9VYmsgwyAgjxp%2FjC70gIGneWPb5reyHAvcKj43QSb9eRDulb9Zp8vdpcVjjhU62nWAhP%2BKFHK1cAs%2B34UIZiy&X-Amz-Signature=78418b75c38baa2a1d4903145664f6e7b568ecd8d94b6f799e26e287f9885828&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7F3DZU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICee8w96156IRPdP9dLSxv4gK0lxD8%2BjWhUr2rRIh4GMAiBohn5d1iwxdNpCR7Y6lzBZNcMV1kim1uE9zZkaKudq4CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuiHLtg%2FOzexsn53PKtwDjPJQM%2F1FcCPgb4JGjEkqntkQKlAPVgHGkKe%2Fjng5mUVImCgAL290bqrj2mowqfnnyRsB9mWou1MppEF01Iwss5Vx8XrjgmMZS%2FQAZNLJQTbCu4Zq6M%2BXs%2B0p7ID9mnTeyEVSsgTBEPOnEVTBPuGxT8WmiPrRITq%2FHOHfBH2RHwhAqCYSRQXKLASufzTiJsbQRq9jSdnZILsiMExfca0Mt%2FBQb7gntGxhllGEO0RAYyDBJl%2B0BYJWVcw2g3eTX05kzqGc46VCq%2FRGmunD%2FsilBZxnqqN5WSHYkOxtG0gMUFI8gotevaX213au8QqmRMGNJ3QmDW5UtZPy5zFgwwhqu4OzqTIXqxa7MErvo9tj7Z%2FQn3gEcahv1FPbse2pGb5vf2PeE6%2BCvwkAKT6Y80ju2fgDGGoL65Vyh%2Fb71NYbXaR%2BRTZyFqCAwK9XBjK6PqWmWl%2BTLFO0B2tWsSPjP2g90wvb3ofkK9kST%2Fwdrt1LIG5yesP38RM2mfjpDWQp0ZO0WYOwVWxtXA9cxGZsp4g3l31nyfPQmkAosXQ0hyqNAH0%2Bf9H4DhAfN2pNJsRXN%2BZmJPq5FfIVTMRYjdtvPozVuOzhz0uREopaFbaUz6yv9J31P8Wkf8q0z2EG%2BBIwz82qvwY6pgHeUe1Gx58qXRCkWAPegvQjBqEb9DTsLcq78T6vOazfvHm%2BahJnMOyeMOYqh5U9R16SB06tGk4IcVfitxckh1oX3xMeZIx8panJBjT6jko4tD6XE0DJi8Rp6wYQEygjrckLBkz7RQ24YcsNEHPEn1JrBm%2B%2BTBXFg6X2wSbc36R2Jw5s%2FjRUGrPiWvOyYRRHjDlEBCMBi36mabyi%2B%2BfH4K2K4upM7sNm&X-Amz-Signature=ceecb766d514718edd26e46ee08f67708c2789dcf720e1b2d11c8e95b0712d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
