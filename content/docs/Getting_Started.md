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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663EFYZ6O%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZSL5M26xwLErHa4dNbtgLhOhUXL23C6y1SzlfOIm7%2FgIgKEe08%2BtgIS9gLpvyTNrtojHJJFYu6Ec37rcL3g95jqQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN68igK37qPlUkmfbyrcA1KKATPzkdw4ssLbO2MME%2F4jcUAmdpnHBlZAh%2BWN4kEueEXyL8hFCtpYjprH%2FviyV56A0%2BWpqxSJXh7Sb4H9Tbyuq3%2F7B1Sa6XA9Xn9P99T8iH8lQt7bS5mwf2QyfKvGfY2%2BTfZoMQt5Pe3n9HoXgX6DkfelrfQQmajmsQ59t5UzP5WYxwCPMXiSmX0POoI8%2BhFnrxTh7iO2jRrbuhJluDcYgEvFmGwj4Uwmg6ob%2FM02LP5rF1ROPyfX6XG7Dre8x5PbraPLWN8vl6oXUDPZKYUFcXOsvVNP0HfKF9uIGsiE7AtBAAnJ%2BKuliSDOghwDzmBmyRM0c623KIsIB%2B%2B5RZXufeZOCQSjK65t4Ylu1BaJNq6KN7hA0U4mS%2FPplzf9pVnSnMdQALb4OFCp7yhKEa6eMqMVYh9RiQ7cxCaJ%2BuwUYTkm4zy0adzArPfcc9weYmdK%2BkK7UsAL8KFqQorVmGPd%2B%2BidBhw%2FhNc0RLRokEJUWmeJgqwJZd6385HJMJzoT269d5dML79y3Epw%2BhLupMhVHyd4WqMXAroxTMMo6%2Fh2l%2B%2FEuLsafQOu2kuXNilDgoMC69HLO2KJLMZE%2FJtaNT7htMFoY%2BdyrEsyBB8t6QmWebRlOhYfUQ9pYC92MM6T98MGOqUBbsZUHMNC5nA1AxHHWX%2F6e%2Bvoi6cOElVoFRgTLRYCgN6I7QhMBN%2FdahX6mVyr%2Buj4OrwXwRtvliD%2F6t3sJK84t%2FIpN3WqY2PSHP9PbXrOzj0nvuH%2FK5P4GP80EPV5G2KXwh3gDU79XKPzF7XR%2Fw%2BiRVQqGd5RYeRablQfVOpcEgEB%2FB%2BDwaOGqCDbDEDrDmv4qRP8Ak86TXgaAz6%2FtM91vJ0HHbZ7&X-Amz-Signature=bdda9e9a4d2bbf37275df8d257baa0f392deca51e6ddc6362ec2aa3794057498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663EFYZ6O%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZSL5M26xwLErHa4dNbtgLhOhUXL23C6y1SzlfOIm7%2FgIgKEe08%2BtgIS9gLpvyTNrtojHJJFYu6Ec37rcL3g95jqQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN68igK37qPlUkmfbyrcA1KKATPzkdw4ssLbO2MME%2F4jcUAmdpnHBlZAh%2BWN4kEueEXyL8hFCtpYjprH%2FviyV56A0%2BWpqxSJXh7Sb4H9Tbyuq3%2F7B1Sa6XA9Xn9P99T8iH8lQt7bS5mwf2QyfKvGfY2%2BTfZoMQt5Pe3n9HoXgX6DkfelrfQQmajmsQ59t5UzP5WYxwCPMXiSmX0POoI8%2BhFnrxTh7iO2jRrbuhJluDcYgEvFmGwj4Uwmg6ob%2FM02LP5rF1ROPyfX6XG7Dre8x5PbraPLWN8vl6oXUDPZKYUFcXOsvVNP0HfKF9uIGsiE7AtBAAnJ%2BKuliSDOghwDzmBmyRM0c623KIsIB%2B%2B5RZXufeZOCQSjK65t4Ylu1BaJNq6KN7hA0U4mS%2FPplzf9pVnSnMdQALb4OFCp7yhKEa6eMqMVYh9RiQ7cxCaJ%2BuwUYTkm4zy0adzArPfcc9weYmdK%2BkK7UsAL8KFqQorVmGPd%2B%2BidBhw%2FhNc0RLRokEJUWmeJgqwJZd6385HJMJzoT269d5dML79y3Epw%2BhLupMhVHyd4WqMXAroxTMMo6%2Fh2l%2B%2FEuLsafQOu2kuXNilDgoMC69HLO2KJLMZE%2FJtaNT7htMFoY%2BdyrEsyBB8t6QmWebRlOhYfUQ9pYC92MM6T98MGOqUBbsZUHMNC5nA1AxHHWX%2F6e%2Bvoi6cOElVoFRgTLRYCgN6I7QhMBN%2FdahX6mVyr%2Buj4OrwXwRtvliD%2F6t3sJK84t%2FIpN3WqY2PSHP9PbXrOzj0nvuH%2FK5P4GP80EPV5G2KXwh3gDU79XKPzF7XR%2Fw%2BiRVQqGd5RYeRablQfVOpcEgEB%2FB%2BDwaOGqCDbDEDrDmv4qRP8Ak86TXgaAz6%2FtM91vJ0HHbZ7&X-Amz-Signature=470587931d0618a777314a47baa82d2a25cf1e21e94368ca4498dd76be16a2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663EFYZ6O%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZSL5M26xwLErHa4dNbtgLhOhUXL23C6y1SzlfOIm7%2FgIgKEe08%2BtgIS9gLpvyTNrtojHJJFYu6Ec37rcL3g95jqQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN68igK37qPlUkmfbyrcA1KKATPzkdw4ssLbO2MME%2F4jcUAmdpnHBlZAh%2BWN4kEueEXyL8hFCtpYjprH%2FviyV56A0%2BWpqxSJXh7Sb4H9Tbyuq3%2F7B1Sa6XA9Xn9P99T8iH8lQt7bS5mwf2QyfKvGfY2%2BTfZoMQt5Pe3n9HoXgX6DkfelrfQQmajmsQ59t5UzP5WYxwCPMXiSmX0POoI8%2BhFnrxTh7iO2jRrbuhJluDcYgEvFmGwj4Uwmg6ob%2FM02LP5rF1ROPyfX6XG7Dre8x5PbraPLWN8vl6oXUDPZKYUFcXOsvVNP0HfKF9uIGsiE7AtBAAnJ%2BKuliSDOghwDzmBmyRM0c623KIsIB%2B%2B5RZXufeZOCQSjK65t4Ylu1BaJNq6KN7hA0U4mS%2FPplzf9pVnSnMdQALb4OFCp7yhKEa6eMqMVYh9RiQ7cxCaJ%2BuwUYTkm4zy0adzArPfcc9weYmdK%2BkK7UsAL8KFqQorVmGPd%2B%2BidBhw%2FhNc0RLRokEJUWmeJgqwJZd6385HJMJzoT269d5dML79y3Epw%2BhLupMhVHyd4WqMXAroxTMMo6%2Fh2l%2B%2FEuLsafQOu2kuXNilDgoMC69HLO2KJLMZE%2FJtaNT7htMFoY%2BdyrEsyBB8t6QmWebRlOhYfUQ9pYC92MM6T98MGOqUBbsZUHMNC5nA1AxHHWX%2F6e%2Bvoi6cOElVoFRgTLRYCgN6I7QhMBN%2FdahX6mVyr%2Buj4OrwXwRtvliD%2F6t3sJK84t%2FIpN3WqY2PSHP9PbXrOzj0nvuH%2FK5P4GP80EPV5G2KXwh3gDU79XKPzF7XR%2Fw%2BiRVQqGd5RYeRablQfVOpcEgEB%2FB%2BDwaOGqCDbDEDrDmv4qRP8Ak86TXgaAz6%2FtM91vJ0HHbZ7&X-Amz-Signature=b7f00ba4742a7c3b3e19ced9b6da16790bf170a8d44604a5bf693f453ca01c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUVLJJ3F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFDsIlOsroslHHaSD6J2hCSkxoj0D2lH85R9UjX4oPUAiEA9pBfxbyf7DNZMVEp%2B8o7m5%2FCbga67X3ZbHKOXhGiG4EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVi2OixfU1LMGIq8yrcA4eoN6HK49Tcgtah5%2Fybkx8yoltHqeg%2BU9pDxmMlHz7ME5OxgOb3E1g0YgPJM6XpBQMjbxWMWRhFRYd0p%2BD6gkehaxLLvu3fATpclbCZ2d%2FoDxnrql3vXIznq%2F4pGwELPUbbJcGhHdP2LAVzzIrbszEe%2B6fpghdwDQcFyD8zhb76cpa0yTQQQt9FL9CWB32eBciGV%2FQcWOSeMEMhnegSpEh59LkjNiIx5%2BTvD6WHwtcIRjYqvW3KeboDr8bOFsmdZtfusMh1ghRaN54R7QVPknI%2BZf0M4ut4774AyJiE9LI2XGTKUWEHOOtZTEglShgxCNDutu5qge13qHWIQ7dRh%2FhBUqvMokvM0QefN9%2BFuPDWa%2BI%2BY4CGxL4f30gdCC%2FeXiK6vbFEWBWW5zO1Yl0%2B4RyFdW7TSwbWXURRWvN2v9nEx4GyoPptHEWgkTrMNkzn3EZtUb3%2FZZiZxhm648PobaG%2FqBvf0h5KrTXj8js93gPmD1vpqYjHYKr1GHEMjbe8zgLZIBRmrQV5lCmk4TElrC1L%2BiM1vF43u1dqUcj%2FUuXIsSTMe%2F6u620RxdidYmJk4dFxId3MpGQ51HKdAIcDGSWvCw9UeRT7o6nT8tZcMNBj2QrW9727BbjcY9IpMN6S98MGOqUBRwWmL8QHCt%2FQKrvH3Rh96A%2BzySOA8VuTzU8tS8qHMjlAM9IYhDrFfYSWpnkw03H9uKpgJUcl7RbT9fRUQzhW7vcj7lZdchF2vOozdj5bo4%2Bh2VbMYhgODt05TRQpk50Yvnn6Z6UDPJ%2BdVj27GQ1D%2By0zj%2FHVlq%2BLNt2NTX%2BkjvpgxJEwwbzLufYpoYG28U0atQVoZ2FLQ8WZgRdTAUAyOxCg458B&X-Amz-Signature=f013a4fead9a887ac968be9b96eab198684d2cba3d0f82437f1d5dff707317cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URW64FBJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtHG6uGqhrPECRwi%2BNpLNnmKT59YNsZmHQ%2BkEPjk1RqAiBXuhinlHT2duOoR0aTu%2BdgB3FGtv7IgB29Z0hZMjlpNyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVb%2Bo1XiFXDERh116KtwD%2FRp0X75anEcvpoTG4NrPesisJNsRuNcLFGHUVDFCd9xFEqZCeDyA0BHcNNx6l3eyiEQGWM%2B3rpIbWgrhK9ds2Z1wgUH049dyja366ps9BiijF2AX7iZc2JPoK9oGuxRbFnqLNN9E8zsse9BzLFq%2F%2FSndD1fyQce%2FUL0r7kDwdfWnCzWwHiHgpieSoMIXraSUumnHOrag7sNc5AD0rOpJpcqS5HeGCfRHR3ftzr%2BoBriiqtHp0HAaMTxoVSLYXN75CLMIpiW8YNZ%2BihKBPi3UwLlQ9Y%2B3eNLJa5dL5Ds71ANQBd6VI9W98t4cIn9SuDDeoB80BpFV0l1w05xCPEfnJ6%2FXI46AExiU%2FLsfw%2FzTMCurAvus0g7DwbzwAdMAlkJE7IN8eSfzHIqMXc%2Bl5VEIABeT9z5RcCkHMyxDvSPrSBRMfICsy1nrWa%2F%2FHj5Sai%2BdVjEcZNTyf%2BHeLe4Jk83VN%2FO%2Bm1%2FW1xdqhCM0Wth%2BYtI72M9nQV7i1cGHKjMuDZAusw5iIh4ny5UZl6TOfxqx7Q%2BzmSBipl99EvoY7pDzJcnViAH6DBjJQgW%2FlQzYFbj%2BV0fzvmv2bOGJHKLgJ%2FLtMw%2FepI8qgkOqXozisqdY9FYWu55UVyjfplOZYE4wnZP3wwY6pgEwRP88BAi97FiC2Frr6bnOowIyqUDn6cxE%2Bqnu4tCcHgWbJ0xGepndIrzqb5F%2Biq8mmzqpSZ9Qehd%2Fhv2vslseOQiK0gOZmtRy1xbD9Js%2BTH0CkII3CcMakXNEbATvFeYWH5KYzWPNtivyQOSFeaDDXfP720nQv73hi8aFdGtlOxLFp334Q0RRgkNTG4r4LVRNXNUIAYqbFm%2FWoPoYJ8XGV9xVNJyv&X-Amz-Signature=f026a949029b62205d5fa0c5a9cec30e8459d1f3cec22aa4acd26ac3fe48bbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663EFYZ6O%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZSL5M26xwLErHa4dNbtgLhOhUXL23C6y1SzlfOIm7%2FgIgKEe08%2BtgIS9gLpvyTNrtojHJJFYu6Ec37rcL3g95jqQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN68igK37qPlUkmfbyrcA1KKATPzkdw4ssLbO2MME%2F4jcUAmdpnHBlZAh%2BWN4kEueEXyL8hFCtpYjprH%2FviyV56A0%2BWpqxSJXh7Sb4H9Tbyuq3%2F7B1Sa6XA9Xn9P99T8iH8lQt7bS5mwf2QyfKvGfY2%2BTfZoMQt5Pe3n9HoXgX6DkfelrfQQmajmsQ59t5UzP5WYxwCPMXiSmX0POoI8%2BhFnrxTh7iO2jRrbuhJluDcYgEvFmGwj4Uwmg6ob%2FM02LP5rF1ROPyfX6XG7Dre8x5PbraPLWN8vl6oXUDPZKYUFcXOsvVNP0HfKF9uIGsiE7AtBAAnJ%2BKuliSDOghwDzmBmyRM0c623KIsIB%2B%2B5RZXufeZOCQSjK65t4Ylu1BaJNq6KN7hA0U4mS%2FPplzf9pVnSnMdQALb4OFCp7yhKEa6eMqMVYh9RiQ7cxCaJ%2BuwUYTkm4zy0adzArPfcc9weYmdK%2BkK7UsAL8KFqQorVmGPd%2B%2BidBhw%2FhNc0RLRokEJUWmeJgqwJZd6385HJMJzoT269d5dML79y3Epw%2BhLupMhVHyd4WqMXAroxTMMo6%2Fh2l%2B%2FEuLsafQOu2kuXNilDgoMC69HLO2KJLMZE%2FJtaNT7htMFoY%2BdyrEsyBB8t6QmWebRlOhYfUQ9pYC92MM6T98MGOqUBbsZUHMNC5nA1AxHHWX%2F6e%2Bvoi6cOElVoFRgTLRYCgN6I7QhMBN%2FdahX6mVyr%2Buj4OrwXwRtvliD%2F6t3sJK84t%2FIpN3WqY2PSHP9PbXrOzj0nvuH%2FK5P4GP80EPV5G2KXwh3gDU79XKPzF7XR%2Fw%2BiRVQqGd5RYeRablQfVOpcEgEB%2FB%2BDwaOGqCDbDEDrDmv4qRP8Ak86TXgaAz6%2FtM91vJ0HHbZ7&X-Amz-Signature=f0eb5caf1db44a1bc746fa7be2b897ff39368d88b057ec4d39c13d16eb0ca843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
