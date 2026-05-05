---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665A5EDKU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorWBPsHFl7s%2BSd4rm0e9Rm4v8N%2BZ8CObuiyUxGK2K6QIgfdNNcxKRkAujxIzY707u3rOqRI08KtjbPUq7cC5lHl8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDUFmSY3SZNT9ZAwzSrcAwtZhfwjo0Uf4SEggX3fCi2qf%2FIIVfKSpXaDJTsm8y39hmtgDOfi4ept%2FEJf%2BMWH6DleQ889HsN1BydUBrM9IP9hCZOl8JzpxwE6WPb9z%2BlFp0IXvxgNmQRUyEwlVtFH1aMlH%2FrMZ0K45mcri%2FkgsLCFjEGgk6PfHBoET3QYCozc%2FDQYhk2OonRKMW7jZRjGBYPjPCeOfKyzEP7Rx27aU%2FqvsQcDNUmT82rSxDm55JsJCLewqE8K8%2BywDmjuOnuLYpdofpFx3oWPJCkkRjJG9ieOrVGsPjh0hmWF%2BuR6PtwbaEho9rdyyeu0pHbFi%2BSdZ6mrYaLUBuMQb5fjlc7SWA33pEsTnUeYQxYUZutuldWomj5uQGuBY0tZp9Ixxeg%2FUyX6tviBLb%2FSnGnJFOj7gqDsI%2F2UUXuzWnbTWPQ8dwxELBpNbfToOcpWkjgKx0ZG1VCTpR7Hfhp6%2B60Chs77Mwh5Iq30mx0rg9lexzhIqYvZzCQU%2FJc5wsLBmzVLSE4K7y1KgfLLZQDS9ZTMVfym0jf6fcWs8HBmaVCVnghsmqKhN6MFKU2wRIAmmVMpoTHfXPKZkARglrYprzEPMCSzMAdF4N%2FwOXcWKeNMSqK4Uns%2BI2E%2F6vln2qATVsMTMK%2Bl5c8GOqUByUOX%2FudzugC5N9jAgBZJtedTOKj8a190koQY6vdxLm2AVDM84SFNATfkQz%2FYNda8pH%2BzE%2BUPZaEkM%2BCqX0o2b2ysagMjrdfdI%2BP6dO8q%2FpEZLW1gvE3em%2BZq5Dks1JBiDhCV37FXJALR1IWXEEHh0c4ep8EW1qtmKWPq2aeJynIACMqXVt%2Fhjd14oSCVM66qdxLzbipJuyWs2MCRBOCK5Y7EK11g&X-Amz-Signature=b235cf697135566a17c29a83f6b03e5f7f635be3ca22a5d99a9943552a1590b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665A5EDKU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorWBPsHFl7s%2BSd4rm0e9Rm4v8N%2BZ8CObuiyUxGK2K6QIgfdNNcxKRkAujxIzY707u3rOqRI08KtjbPUq7cC5lHl8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDUFmSY3SZNT9ZAwzSrcAwtZhfwjo0Uf4SEggX3fCi2qf%2FIIVfKSpXaDJTsm8y39hmtgDOfi4ept%2FEJf%2BMWH6DleQ889HsN1BydUBrM9IP9hCZOl8JzpxwE6WPb9z%2BlFp0IXvxgNmQRUyEwlVtFH1aMlH%2FrMZ0K45mcri%2FkgsLCFjEGgk6PfHBoET3QYCozc%2FDQYhk2OonRKMW7jZRjGBYPjPCeOfKyzEP7Rx27aU%2FqvsQcDNUmT82rSxDm55JsJCLewqE8K8%2BywDmjuOnuLYpdofpFx3oWPJCkkRjJG9ieOrVGsPjh0hmWF%2BuR6PtwbaEho9rdyyeu0pHbFi%2BSdZ6mrYaLUBuMQb5fjlc7SWA33pEsTnUeYQxYUZutuldWomj5uQGuBY0tZp9Ixxeg%2FUyX6tviBLb%2FSnGnJFOj7gqDsI%2F2UUXuzWnbTWPQ8dwxELBpNbfToOcpWkjgKx0ZG1VCTpR7Hfhp6%2B60Chs77Mwh5Iq30mx0rg9lexzhIqYvZzCQU%2FJc5wsLBmzVLSE4K7y1KgfLLZQDS9ZTMVfym0jf6fcWs8HBmaVCVnghsmqKhN6MFKU2wRIAmmVMpoTHfXPKZkARglrYprzEPMCSzMAdF4N%2FwOXcWKeNMSqK4Uns%2BI2E%2F6vln2qATVsMTMK%2Bl5c8GOqUByUOX%2FudzugC5N9jAgBZJtedTOKj8a190koQY6vdxLm2AVDM84SFNATfkQz%2FYNda8pH%2BzE%2BUPZaEkM%2BCqX0o2b2ysagMjrdfdI%2BP6dO8q%2FpEZLW1gvE3em%2BZq5Dks1JBiDhCV37FXJALR1IWXEEHh0c4ep8EW1qtmKWPq2aeJynIACMqXVt%2Fhjd14oSCVM66qdxLzbipJuyWs2MCRBOCK5Y7EK11g&X-Amz-Signature=9cc910becfc5d8f3eba66f68f1e76a974b3587ebafd8b795face887eb4c49b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665A5EDKU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorWBPsHFl7s%2BSd4rm0e9Rm4v8N%2BZ8CObuiyUxGK2K6QIgfdNNcxKRkAujxIzY707u3rOqRI08KtjbPUq7cC5lHl8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDUFmSY3SZNT9ZAwzSrcAwtZhfwjo0Uf4SEggX3fCi2qf%2FIIVfKSpXaDJTsm8y39hmtgDOfi4ept%2FEJf%2BMWH6DleQ889HsN1BydUBrM9IP9hCZOl8JzpxwE6WPb9z%2BlFp0IXvxgNmQRUyEwlVtFH1aMlH%2FrMZ0K45mcri%2FkgsLCFjEGgk6PfHBoET3QYCozc%2FDQYhk2OonRKMW7jZRjGBYPjPCeOfKyzEP7Rx27aU%2FqvsQcDNUmT82rSxDm55JsJCLewqE8K8%2BywDmjuOnuLYpdofpFx3oWPJCkkRjJG9ieOrVGsPjh0hmWF%2BuR6PtwbaEho9rdyyeu0pHbFi%2BSdZ6mrYaLUBuMQb5fjlc7SWA33pEsTnUeYQxYUZutuldWomj5uQGuBY0tZp9Ixxeg%2FUyX6tviBLb%2FSnGnJFOj7gqDsI%2F2UUXuzWnbTWPQ8dwxELBpNbfToOcpWkjgKx0ZG1VCTpR7Hfhp6%2B60Chs77Mwh5Iq30mx0rg9lexzhIqYvZzCQU%2FJc5wsLBmzVLSE4K7y1KgfLLZQDS9ZTMVfym0jf6fcWs8HBmaVCVnghsmqKhN6MFKU2wRIAmmVMpoTHfXPKZkARglrYprzEPMCSzMAdF4N%2FwOXcWKeNMSqK4Uns%2BI2E%2F6vln2qATVsMTMK%2Bl5c8GOqUByUOX%2FudzugC5N9jAgBZJtedTOKj8a190koQY6vdxLm2AVDM84SFNATfkQz%2FYNda8pH%2BzE%2BUPZaEkM%2BCqX0o2b2ysagMjrdfdI%2BP6dO8q%2FpEZLW1gvE3em%2BZq5Dks1JBiDhCV37FXJALR1IWXEEHh0c4ep8EW1qtmKWPq2aeJynIACMqXVt%2Fhjd14oSCVM66qdxLzbipJuyWs2MCRBOCK5Y7EK11g&X-Amz-Signature=9b582836ef90a2ebf7fe3d76929b0f8bfb9efdfeac06fa9ca2348b4862a80bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOVHD3I%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQp8XM1WOhveC4MoVM1TMM2F%2B35EkZv8Twy5GdG2PTcAiEAjN1AxcBQ0p%2BwCrYaMKiPyv%2BXEvLSt5iNzQ94J7DGCB0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDK%2FmRT0V5IXZ0SV49ircA31BvX7hZzfzRkXH1wZkOc%2FttxxGHHeqoQB85uHX3RKqyjNKYEXa6LbauBWk7DKbGKpFxWEL0hoDWkre%2F3lpxTUxe8lP07LI4LVztzrLESZLCciHpIkT%2B7EyFf1jSRkxPPXqGiknw77QUz4dhyJGMWCP8Sqz1JL5910iqQGZk4NPX8wBKAkAjkeURfqP9U2PNdxB5mzAN3ClZOKtMgOvo5OWWjBL7clOZGfZhJanqUVCCkY5tm9OCIjibz7SXex8%2B3Gq7WAaWgquuimvp6DQUEo59DtbLZOjeWsR0xr9Tdpz3ZnxIgm9C56qMaPHnTVoyEMhEuvMX6GwbdGfdZ1ZMKZoMu4%2FOzrtB4g0SJm%2FQ1Nqvmi9%2FwTtUnW22j0RD87CJM8bECTwJMZIIRLUzw7N9kr6GLFMtBfN6xLTl7yGG50GnWOrzrx%2FNiG1gZoeD%2FkqmN%2BZRLa7u5ugX%2FpeUZUg%2FgqkS8VhqRdsRMKV8kPmz2LnRqnNrFgg7rGWB14X7yqRTRuHJnUbPeduXga14tmf9MaI%2BybL0v8FqExG%2FZ%2BCHsd66sakeSGszV3HEHPYwDlZ5kdBHxeH5WK1SQhAseBJRfeKLeaXPkC5ohLh2khHxv8S96jsXS23RoGO6MFgMMGo5c8GOqUBajVVYtmreC5SEfRh3RBvH%2F6uhi2rz0NbdLH5HZq3xgDTN5WySH7k0KBtoPNPJkKrzVZ306V%2BVv%2BR7IlQniiBmZPxa8lWBSE3HEsVPcwaucA8nS4EraP7ltOqQxCgF5my71UOG9pjVUmylzs8oek8%2BXW9AcAYRthA%2F0y%2BTDpCTaLaFuRk%2Bo6kd4qmk2fZAbLnby98hl4%2Fe7ostGOCr2fmbJr4Rabc&X-Amz-Signature=1b5a458d8dba098ce769f0f84ba6ce0d88408bb057ad9a88224d3ab770a1533e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KEU2CUT%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCof5QNZInCUZC%2Fc1YSxPKuzBRfPU4bTWP4bJN5lhM%2BYwIgPZmsVN9HbVt8eWjnVuNeWs6Bx4rNERCRaLuXEu5AVHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNIyV4l%2Ff8ahdDDMTCrcA33sqGwiPA5Ndmqq54CVffm3%2FqsJP1v7gkPou9eLWal4lerWzuPRxFw%2FeiGLU9QVR6dE6fU0oo76dZzLe1X5YNXQeX01%2Bo2KdwUq3PxDpS82tvKcF4KEOp0Daj2ohZG%2FAXZlleeVs9heI0u5ib2gY3AAKRONZXyVgvyx0Odg6MBz49KPZ4MkJIfe7j7762xny7CyAd3uemNbwJcr%2FvP2ZxvFX%2FMspJQZM7xhK81%2FD2mVubQCfJuywxm2zuUxz2BVjwBCwLJ6YkblClTgoMa9AZjluOVqyLxU%2B48Y1OoW4FPajMgNHFVpsQj5PyMKg%2FNNA1oJwfnRTEO6P9RZArirdknbW80rfhQxlfoe0zAZjU6kh0QMBvSAsBqeKecS%2F28efEdqe9u8pW4UHuhCX%2B7NL8hdpOvqeXoAnZ%2FIS8mTS196g0CBsQUJcHB7RDCDEtE4TgCS4VYApy0coIUTs7yqxElFCrjsyMw%2BgXdGp31sHOUHOUuKXNLq9Pv0rsop8Y0KriFzMakBBDi1d0Or0jr2J0lMx8z9n9MvUg8s0scwi2j%2Fp7vNdMNYN%2F4RheVWngsqaSN3M%2Bapl%2BIqA68CqkCWhMJRJrGk8uHpqzb8I9ZmiTpBD8MICileGfxBMW%2BBMM%2Bl5c8GOqUBBznJtSNec5G%2B6p3iqWInObUEi92GxIFzdiYgfxo6xbi24lgEWTLjGHFJoUgkKLFdpOt46NYcIYKmmYSu7wJOAAJe0Yp%2FAVhRqQiy%2B8vjfFvNVH2YWn%2FzOPQfnezZHF8XttmCCh1BSAquhi9JHk%2FSwhYj8S9D%2BjemPz9kkDIkN6t%2F4%2FeIWKNJG%2B8SAUAW9iBzZoSZs8B7wOxk%2BQfa2GDayTHUcUXe&X-Amz-Signature=d8e18e9cc2198ab47b377cd744bd8ffefec891825bca841da0c915afc94d47e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665A5EDKU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCorWBPsHFl7s%2BSd4rm0e9Rm4v8N%2BZ8CObuiyUxGK2K6QIgfdNNcxKRkAujxIzY707u3rOqRI08KtjbPUq7cC5lHl8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDUFmSY3SZNT9ZAwzSrcAwtZhfwjo0Uf4SEggX3fCi2qf%2FIIVfKSpXaDJTsm8y39hmtgDOfi4ept%2FEJf%2BMWH6DleQ889HsN1BydUBrM9IP9hCZOl8JzpxwE6WPb9z%2BlFp0IXvxgNmQRUyEwlVtFH1aMlH%2FrMZ0K45mcri%2FkgsLCFjEGgk6PfHBoET3QYCozc%2FDQYhk2OonRKMW7jZRjGBYPjPCeOfKyzEP7Rx27aU%2FqvsQcDNUmT82rSxDm55JsJCLewqE8K8%2BywDmjuOnuLYpdofpFx3oWPJCkkRjJG9ieOrVGsPjh0hmWF%2BuR6PtwbaEho9rdyyeu0pHbFi%2BSdZ6mrYaLUBuMQb5fjlc7SWA33pEsTnUeYQxYUZutuldWomj5uQGuBY0tZp9Ixxeg%2FUyX6tviBLb%2FSnGnJFOj7gqDsI%2F2UUXuzWnbTWPQ8dwxELBpNbfToOcpWkjgKx0ZG1VCTpR7Hfhp6%2B60Chs77Mwh5Iq30mx0rg9lexzhIqYvZzCQU%2FJc5wsLBmzVLSE4K7y1KgfLLZQDS9ZTMVfym0jf6fcWs8HBmaVCVnghsmqKhN6MFKU2wRIAmmVMpoTHfXPKZkARglrYprzEPMCSzMAdF4N%2FwOXcWKeNMSqK4Uns%2BI2E%2F6vln2qATVsMTMK%2Bl5c8GOqUByUOX%2FudzugC5N9jAgBZJtedTOKj8a190koQY6vdxLm2AVDM84SFNATfkQz%2FYNda8pH%2BzE%2BUPZaEkM%2BCqX0o2b2ysagMjrdfdI%2BP6dO8q%2FpEZLW1gvE3em%2BZq5Dks1JBiDhCV37FXJALR1IWXEEHh0c4ep8EW1qtmKWPq2aeJynIACMqXVt%2Fhjd14oSCVM66qdxLzbipJuyWs2MCRBOCK5Y7EK11g&X-Amz-Signature=05d966c23d390162a5bb98a03c14f2eb1f2f8a34b4ee6f8a3562c44452343a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
