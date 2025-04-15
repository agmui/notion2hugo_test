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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHBRRNI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPf%2Bhtfkm0LGjVkbi2XWFYGMsseSNfId5wzl%2FsVpc6WAIhALBpQfVEX%2FxZN3Cpiu1mf9Rh2rheE9PIjYXVG%2BOJDJHpKv8DCCgQABoMNjM3NDIzMTgzODA1IgyDtDqJ0GADn8qKhjEq3AMLi88GEuVAUAnQXsSbaHHlVKj%2FFltZDYk7Pe2WtqPi77e%2Bm4Q7Mr84k%2Bc6SeAkx6ER8BKwzn9JhaB10U7OaxCb9WszmNSTCJmcHyQnvmRBiNPXBqZOvI0Hnb5W%2B5fH9NrLQr300nmTRDVfmmfUic3gPp9oarK3Oe0BM44BF4JkX%2FhMKsC3YeOHIBoRnGWQxxClmUGPY4MMXb8iuIb2EkUq7SmwFx1KXLV6%2BGZumiW55BVroIQoG0GPbRi3at93AALm7LfuQrJRJaVehFE5alJ10rkrLKQ86kG0I3S9GPpYmOSbN9JYr0%2FscGhieMn5JDxQxg51hGDFXteFODykCP2zWOLIC5vh%2FZKmEd1%2F%2FwsInnEy%2BMmaWYtphziikUmW4Cck4hUHiZK6yE%2FIEL6BafLjH2pGfsKpPigf0yYs7DgPugFrHViyhRdzJAlhTLEt3vHmeLuU05ap0789tr2NFlSfSO%2FizYy2zdJtboCnmjvsi4cdCs69nB2rilWud%2BTYq1H7wJOl860McMJIdThJTPrtm55b77h5Y2N0TVW3ixfHGPLNwtnXSxIkinFS5yQuTd%2Bl52ESl%2BrBALzDWXcbI66lwc0iaJUM3DfykNdb2%2B9wqRZwPrQ94sG92qyQsjCpgfi%2FBjqkAaSmTNuB2maXqtE7uEMQLMFI7gyr10QLoVCzI80wnwnaDeBYNqykRRZYCeJT9P1YrlLO%2Fh3NAdfqD8zLzzgfaUcfimYooVx8G7KZTtT7ClJPJ1SxBnbniRoj%2BgCFBxKaToqGZ2%2BSFQ054xKRcGeebCKobrsS%2BtYNTAdTCVm73P9ZY6K%2BCVy%2FsR7R2Uj%2FslUQIudYMBIQhteDgCqX4qpUmGe3s7jB&X-Amz-Signature=5857bd172d2fd07f5fb66edc4c72d738b33659e72e9d881f37ad818ea37ed90b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHBRRNI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPf%2Bhtfkm0LGjVkbi2XWFYGMsseSNfId5wzl%2FsVpc6WAIhALBpQfVEX%2FxZN3Cpiu1mf9Rh2rheE9PIjYXVG%2BOJDJHpKv8DCCgQABoMNjM3NDIzMTgzODA1IgyDtDqJ0GADn8qKhjEq3AMLi88GEuVAUAnQXsSbaHHlVKj%2FFltZDYk7Pe2WtqPi77e%2Bm4Q7Mr84k%2Bc6SeAkx6ER8BKwzn9JhaB10U7OaxCb9WszmNSTCJmcHyQnvmRBiNPXBqZOvI0Hnb5W%2B5fH9NrLQr300nmTRDVfmmfUic3gPp9oarK3Oe0BM44BF4JkX%2FhMKsC3YeOHIBoRnGWQxxClmUGPY4MMXb8iuIb2EkUq7SmwFx1KXLV6%2BGZumiW55BVroIQoG0GPbRi3at93AALm7LfuQrJRJaVehFE5alJ10rkrLKQ86kG0I3S9GPpYmOSbN9JYr0%2FscGhieMn5JDxQxg51hGDFXteFODykCP2zWOLIC5vh%2FZKmEd1%2F%2FwsInnEy%2BMmaWYtphziikUmW4Cck4hUHiZK6yE%2FIEL6BafLjH2pGfsKpPigf0yYs7DgPugFrHViyhRdzJAlhTLEt3vHmeLuU05ap0789tr2NFlSfSO%2FizYy2zdJtboCnmjvsi4cdCs69nB2rilWud%2BTYq1H7wJOl860McMJIdThJTPrtm55b77h5Y2N0TVW3ixfHGPLNwtnXSxIkinFS5yQuTd%2Bl52ESl%2BrBALzDWXcbI66lwc0iaJUM3DfykNdb2%2B9wqRZwPrQ94sG92qyQsjCpgfi%2FBjqkAaSmTNuB2maXqtE7uEMQLMFI7gyr10QLoVCzI80wnwnaDeBYNqykRRZYCeJT9P1YrlLO%2Fh3NAdfqD8zLzzgfaUcfimYooVx8G7KZTtT7ClJPJ1SxBnbniRoj%2BgCFBxKaToqGZ2%2BSFQ054xKRcGeebCKobrsS%2BtYNTAdTCVm73P9ZY6K%2BCVy%2FsR7R2Uj%2FslUQIudYMBIQhteDgCqX4qpUmGe3s7jB&X-Amz-Signature=6cf81bcf51a39c15a760f3dc4a628117642238b7634634389c357c2f4a6d798c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMS5TM4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2UYu1FJgQh3c5Lo5F5hgKBTU%2FplXMM2ka7nifXxAilAIhAOt7gxf%2FvcLH7x4ikxBBZWMIe6iFTGQfVZeNNCdtsLwTKv8DCCgQABoMNjM3NDIzMTgzODA1IgwCTgihH4JW7Cb5l6oq3ANw9rIK0uKQ6KzumnDRv54qZc%2BBwXq6BlteOZkbiK24Boi2Qj6wXQr%2BSS6ezJpasZdzvnpEz6rX8krtzNUdROHvYSAtxa%2B%2B6IYMQS8u7thym%2B%2BedNmvqd2JU0CH9Fl63ZL%2B2D07u%2BaSsUI90wdam1D3LsU9ttkFOE2Sbshs5aKErBXzGYQKwUJxCR9AstNHXUYYIri2MzBJLj5EiVVxoyw0rw0aHJpk8mfrRKwLcmwH93PEHN0BTcnmcJJ5Tft31uDfqxk3apTKbuOVRgMgtoFsyZpDaCPS1zTER8WPJTu7oymq3GrAPrPGooi1L7OM7ZphJdU60sVRFXYJF502vDnX0Qi%2B7eqeWlf%2FK1h5VA8JcfnZyvNahPJUzMGZoHdgv%2F4gl4yXgRiaN0slMQngCLWX%2F8uOybLUwW%2FwVLXVrGBeXnTGjD38wAIukttaVDUR3wjcCrUBGIEjCLrlCmHv4eEz2anlWfYnmIJkNiu1ZCg0WiX4wXbbGZ6IzNCrwcHWdtmAToe9i2GqG%2B54WA7GRQJIudFgzRkdkQei67zYAgWz53TNu36aZY3lyRzFLXybrWo530sjlzJ%2Fxhl50HG%2FWqK6kqDnxUtTH198cRkzteT95jY1q%2BWfw%2FEnhk7m7DCUgvi%2FBjqkATACx3DzBhvIr0DkPVv125bw2pvUHD3FdWZ%2BcCsZv7j3KeoNK371ztS5at74pSE07PXKDACNpxuFoKVZtQ67rIQMzZ0TSC%2FWhmAMJmf1hn2K0goGVoqpExBmTGaQdqyx%2FlXB4xQWLXDJaSrradboZ1uMwweJ75h7J6bLdph%2FEH05M05nNhF1R8MruggHjQLXZ4Cglj0wA5PHVEzHg4TaDHB5n1SA&X-Amz-Signature=6081d0911a74f1065849d81db9d31d96bb87c00b318bec2d7e8af53676abda59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSA4EAPZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuj24%2Fd8KIzTyDnS%2Bzkxg3jsszV6KFgjJUWHK%2Ble1b7wIgPOhVq91772iD%2FH1RYeOg7MKiaTMeM%2BDdaxtQZd7SdbUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFhuvPMszEflquDSuSrcA1onnw77%2FZDBxMX%2FXNRioAbwBO33jgMSsLAFiDdQ6hCPu0OMtqSEz6nTmz7vnVI%2B%2Big5zSa6Yr6NzLM5eY%2FVtzOH3m%2Bxh1bCnu2l3dqm5g5IhVzX6IZ0Y%2FCsZyOrV3G5LtxZO7sU9FGBAqqcgEt58vuLHC32gLGLHiU%2FyPb9CZfmJYYaRsSPedA9Hj3PPyu6jFsOyCROSDD1gDlwlsfFRhfWrg1fkCopKpcWZ%2BXsLV8cuSZJREbioqE81wiyHygr89fFTOzOby0frujh18JqZ8Rg%2BeZjggDXwvoVewXimI1obTspnyE%2FaqADARH7FRCVJD0EqaS3YtNBfEHepit2H6Ti8TOMyy0lu%2BKwN1M4bhnEkGMAyXxPBI33706F38D6E5GxeIBaDN4j9EFStcnDKRkPLiO15U70S5SiC59h4wcSNEd1s%2BmSJc7ubc3SVedZninM4f%2F4DDyFJV5eLJtp46pWAhmnh2QHSuLFiHRQOAeC3wGCzwzs3km5CRbcmsb9GAamPzLkYVMNuprCy1qwtdL6hubmnpkidO4eWlpsVNxJfi22LT%2BmdElN%2FXJeqp1NERB2%2FHgLKL%2Fwf6Cj3qWE78qHa29bYaptD28Zjf30Cq%2BWEz2qY4eaaz9qnJ58MIOC%2BL8GOqUBc6Ep1QfQnwqoLI7dv09OvBz402p3r80RgUQlK%2FxQUb3Ie22mqHvslVOnmTRy8EXp%2FjCP4We5Jj6aYkhcmfXIAyb9bNbWjS7Oe9TLWpV2oT0Qdm%2B3Nt9gDHEjtM4g2FV%2FBMXK3AwLuWMfHzRgSw8yeZ%2Bmq5OkOLB2tOWshC3UFj9I5f9Dpxa8ML9TDehlUZMxYDYcioU7g%2FeqyKt50BR6%2BICd%2Bwv3&X-Amz-Signature=c77406801833c6579b28f390658e4a93887cca255be203e6f39d28e3d7be831c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHBRRNI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPf%2Bhtfkm0LGjVkbi2XWFYGMsseSNfId5wzl%2FsVpc6WAIhALBpQfVEX%2FxZN3Cpiu1mf9Rh2rheE9PIjYXVG%2BOJDJHpKv8DCCgQABoMNjM3NDIzMTgzODA1IgyDtDqJ0GADn8qKhjEq3AMLi88GEuVAUAnQXsSbaHHlVKj%2FFltZDYk7Pe2WtqPi77e%2Bm4Q7Mr84k%2Bc6SeAkx6ER8BKwzn9JhaB10U7OaxCb9WszmNSTCJmcHyQnvmRBiNPXBqZOvI0Hnb5W%2B5fH9NrLQr300nmTRDVfmmfUic3gPp9oarK3Oe0BM44BF4JkX%2FhMKsC3YeOHIBoRnGWQxxClmUGPY4MMXb8iuIb2EkUq7SmwFx1KXLV6%2BGZumiW55BVroIQoG0GPbRi3at93AALm7LfuQrJRJaVehFE5alJ10rkrLKQ86kG0I3S9GPpYmOSbN9JYr0%2FscGhieMn5JDxQxg51hGDFXteFODykCP2zWOLIC5vh%2FZKmEd1%2F%2FwsInnEy%2BMmaWYtphziikUmW4Cck4hUHiZK6yE%2FIEL6BafLjH2pGfsKpPigf0yYs7DgPugFrHViyhRdzJAlhTLEt3vHmeLuU05ap0789tr2NFlSfSO%2FizYy2zdJtboCnmjvsi4cdCs69nB2rilWud%2BTYq1H7wJOl860McMJIdThJTPrtm55b77h5Y2N0TVW3ixfHGPLNwtnXSxIkinFS5yQuTd%2Bl52ESl%2BrBALzDWXcbI66lwc0iaJUM3DfykNdb2%2B9wqRZwPrQ94sG92qyQsjCpgfi%2FBjqkAaSmTNuB2maXqtE7uEMQLMFI7gyr10QLoVCzI80wnwnaDeBYNqykRRZYCeJT9P1YrlLO%2Fh3NAdfqD8zLzzgfaUcfimYooVx8G7KZTtT7ClJPJ1SxBnbniRoj%2BgCFBxKaToqGZ2%2BSFQ054xKRcGeebCKobrsS%2BtYNTAdTCVm73P9ZY6K%2BCVy%2FsR7R2Uj%2FslUQIudYMBIQhteDgCqX4qpUmGe3s7jB&X-Amz-Signature=c66b59379f2343591694cdc2a1104d0469ee7cafb8923e15c6532d32ccbdb25f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
