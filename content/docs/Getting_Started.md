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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIAVCPQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICA3kKzQLI56CslqqPg1PrAtTK%2FB0mmJ6d3slFsUGrxoAiADvsXUJC2QBpHvugxhquG9KhQKOY37HPhiC9BQcrfW0Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMszCj2DaKw5bpSJBYKtwD1lf025eUgubNTHvZsoHJ4enRoyir5qvce7AZ2h5rb2%2FJ4x%2BFv9rMKF3Fd6jJovUeDEuun0eBQfYTzhWAOBUF5brjqehYexVaP%2FpCiG9%2Bqj%2Fpbnr3SFiaz5kC9AVPXR5xYuw%2FsM6qr3Bd5gnbPf9cyaPNQOJmMleo1f9IdpsK5lSByT8YijpZBWkUkpGcPGOht55kYRGEdq%2FUhaOBoTt2%2FcBmHCmvxMDlbrzlRXcfNNAuhfFwp0j0tWLFLCmxzXZcXjqoIrJd%2F%2FSIgS80CPWyyI5b%2Fe2JMSZzPxeOm%2FBQgE7kpiCuZQyynDvsx30kk9vmuTf0WhtCeXIpZFD9bbT0aJI8LSHwKa4M7v8S4fn8u6NiyU3N3FeoPIaG9NQjKPesXGbbR%2FoTfH34FjSCsnO5AibiTZL0staJEQd2EYw83Y%2BdjUAcsBh9fawaZLvJo8Bj4IMNn79hs5HEWavqZM%2Bar6qcrdztUX2JQO0P8WC%2FYddE0L8m6R3v8Me7rRgxUSw7SN1Lfd6%2FxNM2ItmOkKZabzs%2B3BhgkfM1unO0J8SBY7kZwH92zvAelHDWBtm%2FAuh4Lv1fsNkT8eNANFDnTwcCPL1gItsy1zxBpZC1QcfufJW9iDqhOvctYYsaA0owo637wQY6pgGvQqhjpeq3j%2FBZC%2F%2BvATG%2F2cfT%2Beu0QlHCCDmonKFaBllrQMxJtiZ6QgfGcQZnDNRyubQrUN6TXVWSQO162Ryq7vgYHEk1gTa%2FrKZWETM8Q%2Fm8bh8G%2FNJW6IOiRfCpovJ5xLnqOTjKeA3FOsMu4uxR50LKRq1X%2FbYiK%2BXPznBm57YXIzk8EMdz4SB6wGf4LJ48THFAwOYV4lkTMTAUf19HpW14YSS5&X-Amz-Signature=e928443c99be359798dbe7db639eb7eb7991f94d0e1680fdb851b007622f8175&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIAVCPQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICA3kKzQLI56CslqqPg1PrAtTK%2FB0mmJ6d3slFsUGrxoAiADvsXUJC2QBpHvugxhquG9KhQKOY37HPhiC9BQcrfW0Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMszCj2DaKw5bpSJBYKtwD1lf025eUgubNTHvZsoHJ4enRoyir5qvce7AZ2h5rb2%2FJ4x%2BFv9rMKF3Fd6jJovUeDEuun0eBQfYTzhWAOBUF5brjqehYexVaP%2FpCiG9%2Bqj%2Fpbnr3SFiaz5kC9AVPXR5xYuw%2FsM6qr3Bd5gnbPf9cyaPNQOJmMleo1f9IdpsK5lSByT8YijpZBWkUkpGcPGOht55kYRGEdq%2FUhaOBoTt2%2FcBmHCmvxMDlbrzlRXcfNNAuhfFwp0j0tWLFLCmxzXZcXjqoIrJd%2F%2FSIgS80CPWyyI5b%2Fe2JMSZzPxeOm%2FBQgE7kpiCuZQyynDvsx30kk9vmuTf0WhtCeXIpZFD9bbT0aJI8LSHwKa4M7v8S4fn8u6NiyU3N3FeoPIaG9NQjKPesXGbbR%2FoTfH34FjSCsnO5AibiTZL0staJEQd2EYw83Y%2BdjUAcsBh9fawaZLvJo8Bj4IMNn79hs5HEWavqZM%2Bar6qcrdztUX2JQO0P8WC%2FYddE0L8m6R3v8Me7rRgxUSw7SN1Lfd6%2FxNM2ItmOkKZabzs%2B3BhgkfM1unO0J8SBY7kZwH92zvAelHDWBtm%2FAuh4Lv1fsNkT8eNANFDnTwcCPL1gItsy1zxBpZC1QcfufJW9iDqhOvctYYsaA0owo637wQY6pgGvQqhjpeq3j%2FBZC%2F%2BvATG%2F2cfT%2Beu0QlHCCDmonKFaBllrQMxJtiZ6QgfGcQZnDNRyubQrUN6TXVWSQO162Ryq7vgYHEk1gTa%2FrKZWETM8Q%2Fm8bh8G%2FNJW6IOiRfCpovJ5xLnqOTjKeA3FOsMu4uxR50LKRq1X%2FbYiK%2BXPznBm57YXIzk8EMdz4SB6wGf4LJ48THFAwOYV4lkTMTAUf19HpW14YSS5&X-Amz-Signature=9d4c51328ed50d25dcf24fabb7c2914cd5d9cb29611c5abb5b0f8578b0014ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIAVCPQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICA3kKzQLI56CslqqPg1PrAtTK%2FB0mmJ6d3slFsUGrxoAiADvsXUJC2QBpHvugxhquG9KhQKOY37HPhiC9BQcrfW0Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMszCj2DaKw5bpSJBYKtwD1lf025eUgubNTHvZsoHJ4enRoyir5qvce7AZ2h5rb2%2FJ4x%2BFv9rMKF3Fd6jJovUeDEuun0eBQfYTzhWAOBUF5brjqehYexVaP%2FpCiG9%2Bqj%2Fpbnr3SFiaz5kC9AVPXR5xYuw%2FsM6qr3Bd5gnbPf9cyaPNQOJmMleo1f9IdpsK5lSByT8YijpZBWkUkpGcPGOht55kYRGEdq%2FUhaOBoTt2%2FcBmHCmvxMDlbrzlRXcfNNAuhfFwp0j0tWLFLCmxzXZcXjqoIrJd%2F%2FSIgS80CPWyyI5b%2Fe2JMSZzPxeOm%2FBQgE7kpiCuZQyynDvsx30kk9vmuTf0WhtCeXIpZFD9bbT0aJI8LSHwKa4M7v8S4fn8u6NiyU3N3FeoPIaG9NQjKPesXGbbR%2FoTfH34FjSCsnO5AibiTZL0staJEQd2EYw83Y%2BdjUAcsBh9fawaZLvJo8Bj4IMNn79hs5HEWavqZM%2Bar6qcrdztUX2JQO0P8WC%2FYddE0L8m6R3v8Me7rRgxUSw7SN1Lfd6%2FxNM2ItmOkKZabzs%2B3BhgkfM1unO0J8SBY7kZwH92zvAelHDWBtm%2FAuh4Lv1fsNkT8eNANFDnTwcCPL1gItsy1zxBpZC1QcfufJW9iDqhOvctYYsaA0owo637wQY6pgGvQqhjpeq3j%2FBZC%2F%2BvATG%2F2cfT%2Beu0QlHCCDmonKFaBllrQMxJtiZ6QgfGcQZnDNRyubQrUN6TXVWSQO162Ryq7vgYHEk1gTa%2FrKZWETM8Q%2Fm8bh8G%2FNJW6IOiRfCpovJ5xLnqOTjKeA3FOsMu4uxR50LKRq1X%2FbYiK%2BXPznBm57YXIzk8EMdz4SB6wGf4LJ48THFAwOYV4lkTMTAUf19HpW14YSS5&X-Amz-Signature=1709e6f144b686cfc4ad75852245ebe2ac98b4b6087f781db562519bd6d5aeb9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBGHXT4O%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIAiA4YxJEhaeETePov55uzprwMBtF%2Ft0JQWTy7aRlPigAiEA9LqhBp42Q4iWfomUnkerErLHb%2BJ1ljdzhO3qCg5P2x4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDM5YbyJqQay75RL4ZCrcA01u4atviFQNcp%2BIRsPJGDx1Tcidi9zYUSKxm2UG55w3EIWk1%2F0rYUsZRW2uv5s4FbZl9pQEjLdnEXTPJ7mLTjBC8kF4U%2BPgvT2C7moALwMTyGZxGeCQkw2V%2FmJKAzu%2FMY8RuHbGmpvgWLqeAaIXLumRlU6u%2FDZpTDKFQWan7GWZxOSrYoYwzGSS0x8G%2Fx%2BUrPZMV6cryjQ9TNFCzBYMyxIOI5kPMT5XH4nr0DlbWnaxKs8ghtyS6jxhPYdJmJWQwpIBwV%2Fj3k84MgY%2FPeEEAkM7%2BfpRyET1QGCqCtEBhfPhTNtMDWPH9RFY6amnDd1f7hGtZHULtzN0XRIl4D48hveyjAAfbKHkM%2BlGUsVznfCK1CVQkPrMidfk5gtecWhd4ZPVp9Qc2vS2fUiJKbwf1P3DqaPMZTuV20Oix9mAvT%2BhbqrEQ4zgies3OuleY0ANUBLwHH3lChWs8YsKKULQCOHbSKYOxVm1YBM0sw1iUSpi4dUXMasxSMCEl23fxl%2B63b3kNR9FlsPJHRQC01yIGM2TKauK2UiOdhPIxRLgcSyNsV1rBJ5b4Qlf7OB2dl986rMI2AjzwkPesMOtUz0trUVciwS1kcozwNznopf%2BGaf8zmEtE6c5gWe9mhbUMJit%2B8EGOqUBRajDAQdi0SpfAfxM%2FgowXipqCfhxPrYF4B2gKz18s1uOlgn5txqE5aF3gwN%2BZn5Tdd7dEtu2gjBPqLjWL%2FLgVUbcrSm%2FucwhOAzkh7EaV7fpsDLhRUb%2FJCGc5QRNdn84znd%2FNxtmnUyjGYJxUPeKOUTU1%2FxDOt%2FAsHtjXex98WBPmKF9iidnIxnAAAaurqkO7uMtH%2Fe66CXKy9uBLyzo5%2FI5lu3n&X-Amz-Signature=8b4625b23a4f7e67b383d644b6401c4a59161330e2c732857eadcf49d7c2f266&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3KMVMD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDZtu7F2msUBwvYO4upgNJu9v4pr1LAVMjCquAzo%2BK0BAiEAlpSFg5RgCW5Y3qEeHjkUvXK3bEecJwgqtXnw%2BfYqdY0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBOT%2BxrZpuUGuxUDfCrcA4pNKsZl2OJNRPJCVi4o2fgfOvLlQ9lU4L8ch%2Bc6jfrPeXy9Hw2T6%2FOt9bR6bHZdCOCgvRlLIxbiAkQDJRQWKLdziDyb0VbEPgY6b21qcolGSi2bSv2jsGFbXEotk9DMACWHV7Of8Bz11lBem0uBW%2FCAoA26QGWLmsDYJc%2Fp0Gffr8wVRg9oXQEkknB9RQFtgpDdLaz2JjRcOA4Gd9xpnHQX9edumhgs8Jqfja3YG0i5OSPle3bl7xBMjJh3g4T8XpenD7Zw94zKYQRMCreaQOHITDegLxrErwXb3znyZPF%2BgNlc6KTA0oTuP%2FOMZMix%2FhSyMnSQwjYy%2BKJAgdR8fIFeXoXIKvPrZurOtw75z9lBtXevb2LgYWBkrQ6tFb0C3dt9qX9LxW8JS37h4Sjigd%2Bt%2B47S2Le1KtKOnxqdOCjHOSAAksDLcpjL9Cf0bx6LNkzjq1ZnbrWHZGuYwBXdBxjxD5EgS5XJIwnm%2BycFNWkpWR%2BzL%2FAtuzwUkiJxb27ipKcC7Ao2N6pznxOZ00BFdMICl3y5LQgT6ZwQNEGRt2AYafNDzgiRbupJvgSQrr30vmHsAYU6%2B4yJGpv9r99L9VspJP6t5i1kC6TaVz1%2Bvqjeiyn1i8lEbB7i4qA6MNus%2B8EGOqUBUiZURL%2FF%2FVVqjkSqoHgLkXzTFNAko1SYWNO%2BqNCHSnRZSEVhQo6R3uEce7bnnkxRwyxGK5aHOlkF6U%2BlLGAkus1CU5utqPEWKCbkKxnATyDCJ03xGX%2FItQicl%2BbtSKNMoMSZnBgYaRNpZPa9xSNupYdCLFSK%2B4GLgg9MvHupsLVorfJ5KTh0ntaN179ywrvrRJxhYFR2UDC0h%2FEcXGaPLmwisCUM&X-Amz-Signature=3fbc096ddd0a3dab240de8185b6b9cd2f22fce065bf571e94eb23b82ade4498e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIAVCPQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICA3kKzQLI56CslqqPg1PrAtTK%2FB0mmJ6d3slFsUGrxoAiADvsXUJC2QBpHvugxhquG9KhQKOY37HPhiC9BQcrfW0Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMszCj2DaKw5bpSJBYKtwD1lf025eUgubNTHvZsoHJ4enRoyir5qvce7AZ2h5rb2%2FJ4x%2BFv9rMKF3Fd6jJovUeDEuun0eBQfYTzhWAOBUF5brjqehYexVaP%2FpCiG9%2Bqj%2Fpbnr3SFiaz5kC9AVPXR5xYuw%2FsM6qr3Bd5gnbPf9cyaPNQOJmMleo1f9IdpsK5lSByT8YijpZBWkUkpGcPGOht55kYRGEdq%2FUhaOBoTt2%2FcBmHCmvxMDlbrzlRXcfNNAuhfFwp0j0tWLFLCmxzXZcXjqoIrJd%2F%2FSIgS80CPWyyI5b%2Fe2JMSZzPxeOm%2FBQgE7kpiCuZQyynDvsx30kk9vmuTf0WhtCeXIpZFD9bbT0aJI8LSHwKa4M7v8S4fn8u6NiyU3N3FeoPIaG9NQjKPesXGbbR%2FoTfH34FjSCsnO5AibiTZL0staJEQd2EYw83Y%2BdjUAcsBh9fawaZLvJo8Bj4IMNn79hs5HEWavqZM%2Bar6qcrdztUX2JQO0P8WC%2FYddE0L8m6R3v8Me7rRgxUSw7SN1Lfd6%2FxNM2ItmOkKZabzs%2B3BhgkfM1unO0J8SBY7kZwH92zvAelHDWBtm%2FAuh4Lv1fsNkT8eNANFDnTwcCPL1gItsy1zxBpZC1QcfufJW9iDqhOvctYYsaA0owo637wQY6pgGvQqhjpeq3j%2FBZC%2F%2BvATG%2F2cfT%2Beu0QlHCCDmonKFaBllrQMxJtiZ6QgfGcQZnDNRyubQrUN6TXVWSQO162Ryq7vgYHEk1gTa%2FrKZWETM8Q%2Fm8bh8G%2FNJW6IOiRfCpovJ5xLnqOTjKeA3FOsMu4uxR50LKRq1X%2FbYiK%2BXPznBm57YXIzk8EMdz4SB6wGf4LJ48THFAwOYV4lkTMTAUf19HpW14YSS5&X-Amz-Signature=e3e3bbec7f1c34bed6a3c72dfacee60b9c8cecf5a03b23726deb411f2208b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
