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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2GSYI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRV1lV9DGMq0776wt7T0Y53YwLdNZMQmSip170k93eugIhAOJkAXchdeeSG4nmmG7lrFelgQ8wNaF4Cm6fklW%2BHvOPKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8OeMmieMmcuSxCMq3AMayxWg4%2BBtOaw8TDsMojsNXqbtMXt8x2R8v1oS5V5yDROlbhDMws5FGAZOy%2FtnRtJkj2Yxg5F7gapK1abQo9Dor0Y%2BVu2hQ565Pirj59qiUpSypqutqslqkTPg5glLJnHfIshLa%2BZyMO%2FuWxdA%2FoItz%2BMcMNzs0EDcuCxALCq%2FCz8Eo3TUHCeXGMB4Aqj866oRiw5B4FoXC%2FUXSkO7xObXOnMxg%2BxdG5SFlbCtcSX7QD6YFh7oce6lBalCKM9gA7UMJVqPKEhtVGtyAT%2BigQfkyCGWr4z2wruJgOa2rVpMsaX5QCWi7BH8MZjnv6D%2F%2Bx40pt8zkzwWNqMeU2HqW4FErUSYVKOZaTb1BB2x3pPu8ivxXNGwBiw9%2FTidPL6ioavr9YjCQG7PE9vlBj8SNTxHmSSCdjv6OH2CXnQD3cVXjC%2FVvvqZweEiehjZHO0ng2GzI%2FTBXTDlLtLGpqsFEfDBMPXIeFAZSJqJ%2BY1cbNjMZFRRjEJqhym1FBP3Dc%2BxtKTqrkQZ6bTnPWYFi4lnTAfxwx2T3wUMHDU1NYIvz4k%2FjF5QnrMBsWxuiyh3xl2g1eik4oDcZbKDp7KarLdWJd%2FbhNe5AjtSzWDoQLCqFkV4blT3dYh76074nV1JxjCN3%2BzBBjqkAUTsOzMFjjKAdw6Sfh7FHwk%2BrBemb6s%2FVoXUy%2FEQrHo4g7x%2B4z0ljnmjMCmgvbU3xg%2BkGM%2F%2F3Km8T8gDrrO90PcYVPVpGwHEtvmqdr1aXMQCUC5hxp9W5MIL8clKJyyxPoS0uNqWxEZwAwOHtfuXNY2Q9y4OAe9eQ4MJhcytvEkshA65gEy9i%2BcuOdJShD1CycwPeFQfiO%2BhBWhM3F5mQrredpUD&X-Amz-Signature=d94a2851aeb1f9b073e207035196e88ada7180cca1a9b985a962826aa23ec28a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2GSYI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRV1lV9DGMq0776wt7T0Y53YwLdNZMQmSip170k93eugIhAOJkAXchdeeSG4nmmG7lrFelgQ8wNaF4Cm6fklW%2BHvOPKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8OeMmieMmcuSxCMq3AMayxWg4%2BBtOaw8TDsMojsNXqbtMXt8x2R8v1oS5V5yDROlbhDMws5FGAZOy%2FtnRtJkj2Yxg5F7gapK1abQo9Dor0Y%2BVu2hQ565Pirj59qiUpSypqutqslqkTPg5glLJnHfIshLa%2BZyMO%2FuWxdA%2FoItz%2BMcMNzs0EDcuCxALCq%2FCz8Eo3TUHCeXGMB4Aqj866oRiw5B4FoXC%2FUXSkO7xObXOnMxg%2BxdG5SFlbCtcSX7QD6YFh7oce6lBalCKM9gA7UMJVqPKEhtVGtyAT%2BigQfkyCGWr4z2wruJgOa2rVpMsaX5QCWi7BH8MZjnv6D%2F%2Bx40pt8zkzwWNqMeU2HqW4FErUSYVKOZaTb1BB2x3pPu8ivxXNGwBiw9%2FTidPL6ioavr9YjCQG7PE9vlBj8SNTxHmSSCdjv6OH2CXnQD3cVXjC%2FVvvqZweEiehjZHO0ng2GzI%2FTBXTDlLtLGpqsFEfDBMPXIeFAZSJqJ%2BY1cbNjMZFRRjEJqhym1FBP3Dc%2BxtKTqrkQZ6bTnPWYFi4lnTAfxwx2T3wUMHDU1NYIvz4k%2FjF5QnrMBsWxuiyh3xl2g1eik4oDcZbKDp7KarLdWJd%2FbhNe5AjtSzWDoQLCqFkV4blT3dYh76074nV1JxjCN3%2BzBBjqkAUTsOzMFjjKAdw6Sfh7FHwk%2BrBemb6s%2FVoXUy%2FEQrHo4g7x%2B4z0ljnmjMCmgvbU3xg%2BkGM%2F%2F3Km8T8gDrrO90PcYVPVpGwHEtvmqdr1aXMQCUC5hxp9W5MIL8clKJyyxPoS0uNqWxEZwAwOHtfuXNY2Q9y4OAe9eQ4MJhcytvEkshA65gEy9i%2BcuOdJShD1CycwPeFQfiO%2BhBWhM3F5mQrredpUD&X-Amz-Signature=8188b1785bde62cc79fa7b99b25d18580b47bc2f8d7f5f098cd30cf602cb74f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2GSYI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRV1lV9DGMq0776wt7T0Y53YwLdNZMQmSip170k93eugIhAOJkAXchdeeSG4nmmG7lrFelgQ8wNaF4Cm6fklW%2BHvOPKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8OeMmieMmcuSxCMq3AMayxWg4%2BBtOaw8TDsMojsNXqbtMXt8x2R8v1oS5V5yDROlbhDMws5FGAZOy%2FtnRtJkj2Yxg5F7gapK1abQo9Dor0Y%2BVu2hQ565Pirj59qiUpSypqutqslqkTPg5glLJnHfIshLa%2BZyMO%2FuWxdA%2FoItz%2BMcMNzs0EDcuCxALCq%2FCz8Eo3TUHCeXGMB4Aqj866oRiw5B4FoXC%2FUXSkO7xObXOnMxg%2BxdG5SFlbCtcSX7QD6YFh7oce6lBalCKM9gA7UMJVqPKEhtVGtyAT%2BigQfkyCGWr4z2wruJgOa2rVpMsaX5QCWi7BH8MZjnv6D%2F%2Bx40pt8zkzwWNqMeU2HqW4FErUSYVKOZaTb1BB2x3pPu8ivxXNGwBiw9%2FTidPL6ioavr9YjCQG7PE9vlBj8SNTxHmSSCdjv6OH2CXnQD3cVXjC%2FVvvqZweEiehjZHO0ng2GzI%2FTBXTDlLtLGpqsFEfDBMPXIeFAZSJqJ%2BY1cbNjMZFRRjEJqhym1FBP3Dc%2BxtKTqrkQZ6bTnPWYFi4lnTAfxwx2T3wUMHDU1NYIvz4k%2FjF5QnrMBsWxuiyh3xl2g1eik4oDcZbKDp7KarLdWJd%2FbhNe5AjtSzWDoQLCqFkV4blT3dYh76074nV1JxjCN3%2BzBBjqkAUTsOzMFjjKAdw6Sfh7FHwk%2BrBemb6s%2FVoXUy%2FEQrHo4g7x%2B4z0ljnmjMCmgvbU3xg%2BkGM%2F%2F3Km8T8gDrrO90PcYVPVpGwHEtvmqdr1aXMQCUC5hxp9W5MIL8clKJyyxPoS0uNqWxEZwAwOHtfuXNY2Q9y4OAe9eQ4MJhcytvEkshA65gEy9i%2BcuOdJShD1CycwPeFQfiO%2BhBWhM3F5mQrredpUD&X-Amz-Signature=87c3d93d4d94971192c6ce1b4b138c826efcdd8ea089f869a613bd05edd6508f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GE4K64%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJWLhWf8wyEckQuqJ%2FbEDBpAroa4VZ%2FRSXd%2FA40wDrIQIgXrqpaKrKUhgruROd4Hk893uT%2BYvfoPBINaQYk58ieb4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW6Qbwmd3UfZy%2FdeSrcA57mvDb7NJcPbTrlGPpeNKYiPLhOgtiU2U3q9uWf8BSKBfLONHF4U0byqU5TX60rUcHxPJP%2FT%2FCJpqaBNL51p3YE9vP%2F49wPxoplxJ53a2zLvHcbEwhr9YeUVxsdRJ0WEGUJIXipLlY8zucfRLqyjZ0ZE60eqacJ%2FOUDuT0pUK18uJ5hS%2BJrdw68Fxvgax%2F%2FNQ%2FH22gm2BYLK%2BMdjCZWCjH2Qh%2BEJnORJ3wARjZ5JmuSHJEklWBXKIasYgX4w4z8RLdcJmyO5393Gwa76vOIGi1xnQ429lKB7qzvPGwmMpd63%2FMmqAblMF27P6RYaCC%2Fko%2FBRVSM7mM6jrPdgEfUgN%2BGdXEmUxnfHDK2c6YHp77s%2B3DWG7CIJOczBSWJ0oi9J7jucqurgJxl1Z4vQxvPvF8tMhLIP%2FKphiUXL1w8lA27i9m9bN7kg2zXAtbeKowCuHuZ45R3Lsj6OfT93MqsGvhBj2Ge4VT8KPYfJutt2L8a2VxBWwD9z1xuphLv%2FT%2Fuj%2FXqAkCWq5sTP7u880oFRtGXW6SlhBwDhruEoJC7HikL3zGCWXnag1Zyv%2BBgIoCjOQlX9Fvflsh%2F5%2FEEthKucsVI35hReK%2FMDx5DvEqAFpQtxEMBJ9Vh%2Bk%2FRasj9MJmn7MEGOqUBMNMr2JoeCBXcvi06cIyV2bzLcKKmBJ%2F0N3IxvKD56DxlHwDj6QwPXIojvhkAe7gvC1jLinEXbMoroRfdXJZp2b8x2P0rkpTcQzvFb0ch%2Fzc0e27XNIUd85PhJq8jWOWlk88hHNkTgExxVcbasPyn6YDyOT8v6oDr4XkcNtUNNMU4bfTSqF%2Buleg24qFf6sYy3D%2FqV%2FzJ%2Fjba5QLHEzhpXkzO0MpW&X-Amz-Signature=fa5f48feb2ce39a5dfe468a7ed826f1920804778495378d9fbf4760de639983e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMNKEKP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMdF8fmGKg8eo2RqW1j8dKoZmm0qgesnBajvBNGhtQ7QIhAPHQwfGmpjsojf3hFEcEdkEecQWXzZplXnC9yHlE7UfnKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD4TcloRl03NAF38Mq3ANnDBGuwazxqWr2OVypESd73TPfFxrZbkqB8KL60YsEoC%2BrgGfO3FBR205uTSLSw5DxVmj49FfuIyDBee6pyrVKcn98k49mRHU4BwX6kxSZJAouoNOJ99goLwEQAGb4fXijjjsUoBCt9spmSbx60yrsuQ7uyGhyqU%2BSJjalgVNHa5e%2BjneuJZbm8rj1BM%2BB0sp3jymdvDQS3wARIcsntQ7ZlPt6o1cbU98cl3TUT3fAJOyJG7Ws7g1qeeMPCAv9GRqdwtIlZgmEpFl3vZLd%2BYKK4ZrXfwDJZGj%2FaPHSMU3oebFPqtyQ735RZZTHpHtAzjNEDmX6%2Bv9dNn2Uh3hrITpI2IE6kncwtdlzLelftI%2BolkqcOVD%2BPDtspBqX8pkqrhm2C%2FmDnpoqe8VeES41bPUXMvpzm0Zig9nqvBhtwCF2s2XrNmco6WiN5TSNlYT0TQz9To0ZXp5ZHbtuc%2BQhhk6elTl%2FHBFyX9fHB%2F9n2uGjWIHLOaIKcO6%2Btbi6%2BDFfS0OD1ffbCeudV5DyLsMkWXLt81ED2qQet%2B52oQWjF2QjtS13t7v%2FUyWaXcVeI1077xg0ium45m15f7WgchNAeiU%2FabXSlUMX47IZH84RG1i8%2BNba5TEf0oZK6%2FTejTChouzBBjqkAVEr8zq84jDU5pm3m07gKDcBT%2B3IZZoBNtFsGSNzkgUGTZyuUcVEaEmaGL1tEL5fGpZR5ZU1BBj8bPOyN%2FmuJcvtRZ3YYn5k8iBEaX8TyuGoi9EiMcj5Qni5zvhM8mOU2eoEjYbVmnx28%2FqyFFF8Roksi3brBrmpAEpt1ad6HdX%2Fkg0dTiiZK5xjcOgLFQyLEfJSLWIsLmD%2BEcr8W365EQ8PSGlz&X-Amz-Signature=de2b68da5918923c6728fa118f9a24c24deac3306f8c6d2c77f0cab32e9e5e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F2GSYI6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRV1lV9DGMq0776wt7T0Y53YwLdNZMQmSip170k93eugIhAOJkAXchdeeSG4nmmG7lrFelgQ8wNaF4Cm6fklW%2BHvOPKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8OeMmieMmcuSxCMq3AMayxWg4%2BBtOaw8TDsMojsNXqbtMXt8x2R8v1oS5V5yDROlbhDMws5FGAZOy%2FtnRtJkj2Yxg5F7gapK1abQo9Dor0Y%2BVu2hQ565Pirj59qiUpSypqutqslqkTPg5glLJnHfIshLa%2BZyMO%2FuWxdA%2FoItz%2BMcMNzs0EDcuCxALCq%2FCz8Eo3TUHCeXGMB4Aqj866oRiw5B4FoXC%2FUXSkO7xObXOnMxg%2BxdG5SFlbCtcSX7QD6YFh7oce6lBalCKM9gA7UMJVqPKEhtVGtyAT%2BigQfkyCGWr4z2wruJgOa2rVpMsaX5QCWi7BH8MZjnv6D%2F%2Bx40pt8zkzwWNqMeU2HqW4FErUSYVKOZaTb1BB2x3pPu8ivxXNGwBiw9%2FTidPL6ioavr9YjCQG7PE9vlBj8SNTxHmSSCdjv6OH2CXnQD3cVXjC%2FVvvqZweEiehjZHO0ng2GzI%2FTBXTDlLtLGpqsFEfDBMPXIeFAZSJqJ%2BY1cbNjMZFRRjEJqhym1FBP3Dc%2BxtKTqrkQZ6bTnPWYFi4lnTAfxwx2T3wUMHDU1NYIvz4k%2FjF5QnrMBsWxuiyh3xl2g1eik4oDcZbKDp7KarLdWJd%2FbhNe5AjtSzWDoQLCqFkV4blT3dYh76074nV1JxjCN3%2BzBBjqkAUTsOzMFjjKAdw6Sfh7FHwk%2BrBemb6s%2FVoXUy%2FEQrHo4g7x%2B4z0ljnmjMCmgvbU3xg%2BkGM%2F%2F3Km8T8gDrrO90PcYVPVpGwHEtvmqdr1aXMQCUC5hxp9W5MIL8clKJyyxPoS0uNqWxEZwAwOHtfuXNY2Q9y4OAe9eQ4MJhcytvEkshA65gEy9i%2BcuOdJShD1CycwPeFQfiO%2BhBWhM3F5mQrredpUD&X-Amz-Signature=4bd3153ea72fd0768a61c56f8d396cd8325c35d3056c6e9e86e11b1debf408de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
