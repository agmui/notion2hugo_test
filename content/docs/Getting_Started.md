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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFCWRP2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsGdNMGJwpikVT89cthSzI1gNxF8PXTDPt9agAYNd8AIhAPuLWdVgGjRKyyf9XAUOfuAVuuCsk3otSX8yaTdtPCp0Kv8DCCUQABoMNjM3NDIzMTgzODA1Igz7ocVuoSW80mm6i%2F8q3APW8YTn%2BL9j2h9dbFeIvc2zt3DnZMTxSNrtRcFPz19JH45yzw16R1gLxKI9kFa4Et9Tb3sYf8byn1e37JHuEVD86Z%2Ft0C3KXVjauUbD3yiyzueySUvyZ4hBaPvrE7IgsJUlrEsWVToP1bYbWkrF4LtF%2B0JHoTzUmgxeXTutFHcpcqFK%2Fopje8fsjwa8M3Qs9gcY3S0NkUqapdot%2BcaYcuoS50N6Va4eFGOjpWl0EUm2zILt3iiK8wWqoMGaIaW6QSlWyDqQYGZ8rspZ1jxUVL7YHiL%2BWo%2F6rFsLSaXlSolvE97UEO7TKVy7tA2HKDL%2BazT1HmNFWsogwPK6%2Btvv%2FR%2FowcmXBYp1DOw1jQlhQK3jrdEBtbfeAZIvw294byz9kDCzeZiN3Thchzrc6kHsXjLS%2F%2B5BJdnxZnosxD3JzCPVH2IYaNFQ5fCLDqz3LKdSoHz9baNbxRGfu%2BGr6Hd2kT13%2F%2BuxgWGulkrKEwkoL2vRWWVAQq%2BQxLxlKeJylzzRxyZ2SRejjvXo%2FuXWXscIII0FOY16PmTLvo1w1vWRS8qkLqnL6NylH0o8v6diL2qSPrV1uZYMB%2FVggoUCp3B8u21l8bQHRNvdXZTKetmngJ6E8eRXydhco972TrmAvzCPlazABjqkAYOaACliMg8LnGJD3zrPB5tC2OKX%2F57Wgm8vkgadNIwPjraI2LHvjbwCP%2BZkqOr9aApL1xM1RtnGGaWrf7hc%2BcOB%2FVQX%2FXsJ76ls0vmIjk0R8yosegwTVpixbxXgotg8ZhOBp90L0qCsVMNATmspZfFH6ZKq4K%2BOC7bGZXO%2BJt5eNCrqbQq21HwoPsr1wAjFMAiflpfQ7pTSxEo%2Fd2TQF%2BITj8eL&X-Amz-Signature=8576b3bcb569e30c3a37e01c89d59dbdf7f0742da983f5179d3c10dea1db5a02&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFCWRP2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsGdNMGJwpikVT89cthSzI1gNxF8PXTDPt9agAYNd8AIhAPuLWdVgGjRKyyf9XAUOfuAVuuCsk3otSX8yaTdtPCp0Kv8DCCUQABoMNjM3NDIzMTgzODA1Igz7ocVuoSW80mm6i%2F8q3APW8YTn%2BL9j2h9dbFeIvc2zt3DnZMTxSNrtRcFPz19JH45yzw16R1gLxKI9kFa4Et9Tb3sYf8byn1e37JHuEVD86Z%2Ft0C3KXVjauUbD3yiyzueySUvyZ4hBaPvrE7IgsJUlrEsWVToP1bYbWkrF4LtF%2B0JHoTzUmgxeXTutFHcpcqFK%2Fopje8fsjwa8M3Qs9gcY3S0NkUqapdot%2BcaYcuoS50N6Va4eFGOjpWl0EUm2zILt3iiK8wWqoMGaIaW6QSlWyDqQYGZ8rspZ1jxUVL7YHiL%2BWo%2F6rFsLSaXlSolvE97UEO7TKVy7tA2HKDL%2BazT1HmNFWsogwPK6%2Btvv%2FR%2FowcmXBYp1DOw1jQlhQK3jrdEBtbfeAZIvw294byz9kDCzeZiN3Thchzrc6kHsXjLS%2F%2B5BJdnxZnosxD3JzCPVH2IYaNFQ5fCLDqz3LKdSoHz9baNbxRGfu%2BGr6Hd2kT13%2F%2BuxgWGulkrKEwkoL2vRWWVAQq%2BQxLxlKeJylzzRxyZ2SRejjvXo%2FuXWXscIII0FOY16PmTLvo1w1vWRS8qkLqnL6NylH0o8v6diL2qSPrV1uZYMB%2FVggoUCp3B8u21l8bQHRNvdXZTKetmngJ6E8eRXydhco972TrmAvzCPlazABjqkAYOaACliMg8LnGJD3zrPB5tC2OKX%2F57Wgm8vkgadNIwPjraI2LHvjbwCP%2BZkqOr9aApL1xM1RtnGGaWrf7hc%2BcOB%2FVQX%2FXsJ76ls0vmIjk0R8yosegwTVpixbxXgotg8ZhOBp90L0qCsVMNATmspZfFH6ZKq4K%2BOC7bGZXO%2BJt5eNCrqbQq21HwoPsr1wAjFMAiflpfQ7pTSxEo%2Fd2TQF%2BITj8eL&X-Amz-Signature=4bda48bdf99ad1a9a918e821e6041b3a8ad62e1d9909b2f40140f54f6635fb90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UEDTB2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYfs9SnYcvecpIie1Q3g4S2vs%2BHardCqq4Ql6rw6KiogIhAPVhm3%2BHDdw71LrXZwWm9%2F5G0yeSTd9QJFBZgGZVKPNUKv8DCCUQABoMNjM3NDIzMTgzODA1Igz2VdjkhxADMNBiFjAq3AM07gwHHFHQBx7mqwX0Polo4wXMM1%2BujjRrLKB%2BK3jwnW6KfFNXpFZKMHWvwXsjh8lc14FwnaOWvVXsNf6Zx0i8NHWfmnIQjKKpWoc4fsGunElPfs8sfk3QiF95dZGOjshyvk7OM0zTWf9XATWATi3fLN7idh8e5BOVYcFoQjTBEkw%2Fr5wL8gHs1SlDNqxLAlWv9cV2KmL7TuoQPkGsUMZhm8xsMHFhY7ZjizNwabxi%2Fw5QnV2tr2nJq532qi%2FUojtgn2VUByna%2FabOggDXzbH9x4nx1zbAKidZIRkJvlMuz54EFUbmpkLJO9jwyIC87UYP0UILn2PHf8mC9qvDqC%2F8zEuSJhU8lgz0%2BjIOgTckwL6nrnhhq72BwJlgVwM3BpXYhI56V63g%2B8Jos%2B0051K3bA07s0ziohPXmq7apTTW68BvV5YEvVM9KZxJBY8xJC5Q5ziuOKA1wzc8b%2B%2FB5BFmya0Z7HU3BHpyxfi2EovEP%2FZfO9hNWqNa2fz3IReUIfUrBEEIDU8g88Mk1wg%2B5IDUK6ErqdGhNbZ1Z0ks%2FxYzEA4BTSuXkczdpM%2B9zW%2Byg9EBcQr0%2F7Vq2aZoUYsSVdzsDGd98wzWmdx4PN3hn8ncHnQ8O4Fm51JwY7BWmTDZlazABjqkAX0RiUeV1eRxZGzSP43X6zCdFeyowlKKt0bQ%2B%2FLNltAUQBc96wNiuDEQ7opwTXvy6C6himz0NHar8rFJMYzx0kBkD7Bxxw6fm6UaFO8SO1Z5gccMUQCgQkF3765%2FH2vvAyChN%2FSxekWf6EnzLGSgYPbDIomcX5MXgZAkQUsThrh%2B3gIH74t2kzEEGTUbTHH10AIjhcEW7QDyDU%2F%2B9exM7ZKDS7pV&X-Amz-Signature=18f22f11fe7beb036eb6790246c19c0f0ccd9c34f6ae5cf094d137d9c1b58ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6WJ5V5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMaAUFMscFT1b1tGLE%2FIALQs8UgGZd3wYuo%2B4vd649QIhAPiky7NePO5iwbHkCuQYgh74tLJnP49GQt2rKfCs8rsnKv8DCCUQABoMNjM3NDIzMTgzODA1Igw0SM9NLjuFSul41pQq3AMobsPT5aUWGJmxeSJqg16EaSFWb%2FEpyFhUhKIrtAb6pj4XZbFUyd7d3EaRJjVjsMfvf7lZw1kMxbzGcC8y%2B%2FPDeal98vT2iziBVVZOoUVaht5d23dU%2BQ2j9w14gxr7FVSxY4NakzD17DNEKCziuGPHivApw5yvoZJwHjxaJCFAiawaeA7z6VB%2Bjgd7YHU9W4pu9j2CgVQFSD2COMNiMVduHFjl2fRHLyphNKBTRgxolFKa3B19xxDLlZaYX92vy5u6BKHEtmlyHEEllDP0FlZkYKN7YNswZ07oBiknKJbju%2FFMzbskms%2ByVXIhCbXYKXh0afl3CWDWeha9Wdy62c1nS0j580QsoT2iSgPcjzGC1ED2meMqJfZjKPIFE3f%2F4gu7hh6Iu%2BPcCt7W0Vqo8zhtYZperlO56TZHcba4t3%2BTBLMWf5nV9RtKQ3zVSrtkNDWNHLL%2Bg5xVNvFi8RnLDQpZCPDekeCsk74OCAp5huR%2BDNRtd3m1obEB2deJLxZVvWtkyIzTmxQdbZojDFdIwVjuNdsjKYKm3GxBgp6QEK3BXZC8Syzj4jvnpAqDmvAFybx6PQhoThdc24Cek4DFkmuMksoWuYiH9mhlsGzH62k7xBHGH76jR5w4APaszTDHlazABjqkAS2dlwjVDaU6tassOzxKGokUi4ZU2bpaljEZ8PZUq3UimkZ5HESVpHf0k7vs7R8YC%2FD74v%2FKZCYnxcRfwpHDyFzqFCGvXM%2BBSUALDoj5AMSeuVIHKLe2DOuziyeWPWcvy2zVYSfC8Ui0t2pGVTAV%2BWSZ2gdleg4j0bii7Dn4l2vfI7CNp2mHrSKrLqf0No9Tv5C4Gr18hezCQfeFUFhynY7qdp6d&X-Amz-Signature=fd65d44ff29e381c40c78ae6b9cb990f6567abdfa44f750f4ecc55a8989a9a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFCWRP2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsGdNMGJwpikVT89cthSzI1gNxF8PXTDPt9agAYNd8AIhAPuLWdVgGjRKyyf9XAUOfuAVuuCsk3otSX8yaTdtPCp0Kv8DCCUQABoMNjM3NDIzMTgzODA1Igz7ocVuoSW80mm6i%2F8q3APW8YTn%2BL9j2h9dbFeIvc2zt3DnZMTxSNrtRcFPz19JH45yzw16R1gLxKI9kFa4Et9Tb3sYf8byn1e37JHuEVD86Z%2Ft0C3KXVjauUbD3yiyzueySUvyZ4hBaPvrE7IgsJUlrEsWVToP1bYbWkrF4LtF%2B0JHoTzUmgxeXTutFHcpcqFK%2Fopje8fsjwa8M3Qs9gcY3S0NkUqapdot%2BcaYcuoS50N6Va4eFGOjpWl0EUm2zILt3iiK8wWqoMGaIaW6QSlWyDqQYGZ8rspZ1jxUVL7YHiL%2BWo%2F6rFsLSaXlSolvE97UEO7TKVy7tA2HKDL%2BazT1HmNFWsogwPK6%2Btvv%2FR%2FowcmXBYp1DOw1jQlhQK3jrdEBtbfeAZIvw294byz9kDCzeZiN3Thchzrc6kHsXjLS%2F%2B5BJdnxZnosxD3JzCPVH2IYaNFQ5fCLDqz3LKdSoHz9baNbxRGfu%2BGr6Hd2kT13%2F%2BuxgWGulkrKEwkoL2vRWWVAQq%2BQxLxlKeJylzzRxyZ2SRejjvXo%2FuXWXscIII0FOY16PmTLvo1w1vWRS8qkLqnL6NylH0o8v6diL2qSPrV1uZYMB%2FVggoUCp3B8u21l8bQHRNvdXZTKetmngJ6E8eRXydhco972TrmAvzCPlazABjqkAYOaACliMg8LnGJD3zrPB5tC2OKX%2F57Wgm8vkgadNIwPjraI2LHvjbwCP%2BZkqOr9aApL1xM1RtnGGaWrf7hc%2BcOB%2FVQX%2FXsJ76ls0vmIjk0R8yosegwTVpixbxXgotg8ZhOBp90L0qCsVMNATmspZfFH6ZKq4K%2BOC7bGZXO%2BJt5eNCrqbQq21HwoPsr1wAjFMAiflpfQ7pTSxEo%2Fd2TQF%2BITj8eL&X-Amz-Signature=4dde14e3dd1ad70b077d76507560d056a254d27758016430d35daa6ad3387be9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
