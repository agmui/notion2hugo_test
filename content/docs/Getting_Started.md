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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RFUMD6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDntEsEn9q%2BKJvahF3lGtk4nFUT9FdgNmJ4HArXJWTA%2FgIgWZeV8zfXd%2BiPqf%2BnjalslXdhVGNde1SQXZ9J1R9vR74qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0DAhPCNgq2ewa1LircA7hQLEeLFuqfvpkt95rIrDbuDd7GJXVqSs5U9dl47UcgsABdy8DQJSPwtl4MpFEFLkhwBMw4vMbD0v9TosCUtTxVuPhT516dnBTEzya1A3WhZIFZ9Xz0iuweO6fC7CBruiWvVeIlMxezWlTO9sB%2F2d4caNwBuhRAoSyBks43hE67mzDZ%2FDfPVpkJQnKYlhjmG%2FTK3CMULJPSWvApKhBacsNM2sa6aVtRjQ9FIVP1f%2FS6dZFwSb7OnX8zwc76arVTkcjGplWLR8m5l5Df8xFXM8eTT%2BMbQ%2FujP%2BHaxO%2BG69nEKxYryC3s0fZQQ5VeCOzrk497DiADQKSoPptzn4v6ikWu%2BXeRNqQykNeEWY6ma3JfaODBchw%2BofOrgQSZGUqpT0OLGnPtch%2BV4BCPpNMxTHTDDd6FYNMVvWzZ5wtJBMCTBuOb6zyzWvXK63DUzLGtC05IulEcj0E9nuuWaiNT%2Bk4m7XeUoVu0NTq%2BnlXglRG%2BZQPkgNEAkmiMJWsJHC0BFZHAJOFx4KCcPkVxWIilm%2FXCE%2BYRQ%2BK9BE0qdVKodkbGKpHK1QGR2sUNobMzqynV1h514lo3kdC7HPk0IgA%2FSZ%2BjQlwMQsLgNJNAhWRs86HrgGHuTOxGbboPryNuMNiG1sAGOqUBYY%2FuCTMotTVxup%2FsJbTpULHF45yRKPrr8fy%2BU7dA%2BpvWK5FfYB4wQtZrgFzNnp%2FtMBeLRtvfbUGx7k4FnmybR4ci%2Bk1lnpMFR3kXYM6%2BRKoVj%2BsszRMFfrL4PbwptvIP%2BqZWi%2FvWCk0NDBbEotJvSFCkMs6IlnTchXe%2F1%2BQtmJC4JAIgZ3BU7boctAJWduWaOF%2FRH7xxGPgU5QINLbzQJFotIjrt&X-Amz-Signature=3fc9a7448e6767d5128eb2952b7d27dee247dc6830910f968b6be2e19c69af05&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RFUMD6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDntEsEn9q%2BKJvahF3lGtk4nFUT9FdgNmJ4HArXJWTA%2FgIgWZeV8zfXd%2BiPqf%2BnjalslXdhVGNde1SQXZ9J1R9vR74qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0DAhPCNgq2ewa1LircA7hQLEeLFuqfvpkt95rIrDbuDd7GJXVqSs5U9dl47UcgsABdy8DQJSPwtl4MpFEFLkhwBMw4vMbD0v9TosCUtTxVuPhT516dnBTEzya1A3WhZIFZ9Xz0iuweO6fC7CBruiWvVeIlMxezWlTO9sB%2F2d4caNwBuhRAoSyBks43hE67mzDZ%2FDfPVpkJQnKYlhjmG%2FTK3CMULJPSWvApKhBacsNM2sa6aVtRjQ9FIVP1f%2FS6dZFwSb7OnX8zwc76arVTkcjGplWLR8m5l5Df8xFXM8eTT%2BMbQ%2FujP%2BHaxO%2BG69nEKxYryC3s0fZQQ5VeCOzrk497DiADQKSoPptzn4v6ikWu%2BXeRNqQykNeEWY6ma3JfaODBchw%2BofOrgQSZGUqpT0OLGnPtch%2BV4BCPpNMxTHTDDd6FYNMVvWzZ5wtJBMCTBuOb6zyzWvXK63DUzLGtC05IulEcj0E9nuuWaiNT%2Bk4m7XeUoVu0NTq%2BnlXglRG%2BZQPkgNEAkmiMJWsJHC0BFZHAJOFx4KCcPkVxWIilm%2FXCE%2BYRQ%2BK9BE0qdVKodkbGKpHK1QGR2sUNobMzqynV1h514lo3kdC7HPk0IgA%2FSZ%2BjQlwMQsLgNJNAhWRs86HrgGHuTOxGbboPryNuMNiG1sAGOqUBYY%2FuCTMotTVxup%2FsJbTpULHF45yRKPrr8fy%2BU7dA%2BpvWK5FfYB4wQtZrgFzNnp%2FtMBeLRtvfbUGx7k4FnmybR4ci%2Bk1lnpMFR3kXYM6%2BRKoVj%2BsszRMFfrL4PbwptvIP%2BqZWi%2FvWCk0NDBbEotJvSFCkMs6IlnTchXe%2F1%2BQtmJC4JAIgZ3BU7boctAJWduWaOF%2FRH7xxGPgU5QINLbzQJFotIjrt&X-Amz-Signature=2768613e2139a1fc266a2b89dc9be5091a234c0f6bc089f90929fb04a28f533f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RFUMD6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDntEsEn9q%2BKJvahF3lGtk4nFUT9FdgNmJ4HArXJWTA%2FgIgWZeV8zfXd%2BiPqf%2BnjalslXdhVGNde1SQXZ9J1R9vR74qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0DAhPCNgq2ewa1LircA7hQLEeLFuqfvpkt95rIrDbuDd7GJXVqSs5U9dl47UcgsABdy8DQJSPwtl4MpFEFLkhwBMw4vMbD0v9TosCUtTxVuPhT516dnBTEzya1A3WhZIFZ9Xz0iuweO6fC7CBruiWvVeIlMxezWlTO9sB%2F2d4caNwBuhRAoSyBks43hE67mzDZ%2FDfPVpkJQnKYlhjmG%2FTK3CMULJPSWvApKhBacsNM2sa6aVtRjQ9FIVP1f%2FS6dZFwSb7OnX8zwc76arVTkcjGplWLR8m5l5Df8xFXM8eTT%2BMbQ%2FujP%2BHaxO%2BG69nEKxYryC3s0fZQQ5VeCOzrk497DiADQKSoPptzn4v6ikWu%2BXeRNqQykNeEWY6ma3JfaODBchw%2BofOrgQSZGUqpT0OLGnPtch%2BV4BCPpNMxTHTDDd6FYNMVvWzZ5wtJBMCTBuOb6zyzWvXK63DUzLGtC05IulEcj0E9nuuWaiNT%2Bk4m7XeUoVu0NTq%2BnlXglRG%2BZQPkgNEAkmiMJWsJHC0BFZHAJOFx4KCcPkVxWIilm%2FXCE%2BYRQ%2BK9BE0qdVKodkbGKpHK1QGR2sUNobMzqynV1h514lo3kdC7HPk0IgA%2FSZ%2BjQlwMQsLgNJNAhWRs86HrgGHuTOxGbboPryNuMNiG1sAGOqUBYY%2FuCTMotTVxup%2FsJbTpULHF45yRKPrr8fy%2BU7dA%2BpvWK5FfYB4wQtZrgFzNnp%2FtMBeLRtvfbUGx7k4FnmybR4ci%2Bk1lnpMFR3kXYM6%2BRKoVj%2BsszRMFfrL4PbwptvIP%2BqZWi%2FvWCk0NDBbEotJvSFCkMs6IlnTchXe%2F1%2BQtmJC4JAIgZ3BU7boctAJWduWaOF%2FRH7xxGPgU5QINLbzQJFotIjrt&X-Amz-Signature=ccdd714f4db0f0fe0777d2001a6c4283c3654baa3a502c608a1b01e664186922&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY5E7YA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEHpZbj%2Bu1M%2BoMhWeekPKpb90C%2BjfKJdlsGbAL%2Ftrw%2FmAiEA1X2mEsEGbk249Gex%2FrHf6MDBmyWZlt2oGRpsJuK8L2EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtfy5V1Yu743wZltSrcA%2FFhNwOGPiZg%2F2MPJ4cNAfngRycV7WXhjiJnFV9FpqVCH9%2BEtvWxHxaJFw%2FVqKBhm0LxuEYQ9zO80o%2F2XmRTmOcX3%2B55hALAy3C2vc0OnONkg8tg97AyXr8OxNSIBUTtKZf%2F3cLxAHwpgiF2ybDCPNIiOLwdJrG9L61pY9iCBbKVV8ZIjyioWgpGlhoRhjkAiiWCLX0rCkySCwW6Fasy3hx65bIqI3nPZ8f83vOlNmxK7DMIC4SCQmvFC6VzdJ4gxULRIAyg16fPEP2mQPF3gR3Ec6zmogOvZhxrDEskfiGxqOvIcV575fsQ3jsp90B82TD5mF%2Fxs%2FV%2FZayoyKJfZHa4FZWIq2NDiVrgkvwO5KcaUTIcXJw4h1yRHsh5JMOz0nMO9KbCzSUPddwqNfqPZddnQguvstfLB3XNJ1ngF6Tb1eOLoAEv74ZRRdFn4D7%2BDafYI0GzLS4p1K0eJLPUhqhM%2BIqfbKc3l1JAAljKbJcMQAsPulWmkdMPUidHTca6C4FcYgJLZaoxQABiEX83JlUOF38bGswizWteFMRo7i4VW8JWHCd%2FOCMDfw3ubbKe9kmeWn2d4cLPbCEstgtWJU9L%2BPcUsi4Fj4uMY79V8g2SDN%2BK3u1SIcei40ERMO2G1sAGOqUBh3fWprwcPdOn94ruK0Nn%2BZTCi6uZ%2BEiVXCztFG%2B4A1kwQKofaaiz4ws8mTWqfMo1MVk5sokwk9iqKIlseJ25A74SZ1lSDLg6umbdhTt81IuTymds0b%2FxiTLzGtxxplPICz%2BVpD4mEegI2rXkPemCpBogcUzzoh%2FKYXN1gwYW7ec6TIZVS4Ple%2BXTNg%2BYFbh7vnpie4YGzOGhLCBYVRuBycVvKDDZ&X-Amz-Signature=37d54d126eb7d2afbe962da867cdf12715c13f0a1f17c166924e41d1f3c8b833&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2ET2BQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FiuEKsEY528jcQ41%2FpcXFk43CH32oDSMEi5BfEWYOdwIgMbO623wK9iYUf9MwqNLttBjZ070dVewW60jOeiPDT6kqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsFi99zpbSN8s28nSrcAxVby7MGRbVbMaoIRDsXqM0fKcBtA%2BtvMRADFVhUiaUxnx%2F5qH9QOPmwvNxeeVojV1CHn900IQj1fE%2FSVLDxgy0Pox3kYGbleaCkw44ec2JlgkhkVD8ksTK7Ak9EdCUNWbRj0XqJXIFnkXVmP3rnNTx%2BIIAY4AeIBjfZOwx0Hp%2Fy%2Belaq8P7d86VyPHeqYVJe7KFgMdXhC2GWTJwD2%2FRLac0II5p2m5Mdvgg3dM0RCVgPumexZ%2FeFUgVq214T33PAhykLPR6GJ3%2Fo%2BGnOoktqfF9xeSD%2BFTswLeTS53eF3vp6%2Fqw9OHN9psslmXdZ3wmRH%2FVY9wtNsJu3NDYmjtVpOqgpapmU59BRyoOeXTKOjbPGXxXb6LM5bDUHJLrDnobhZ4z46oGJQaO8ooZOjY722zqN0ezKU1ZV5KVgiDeEpWRyppXpYNAmU2dtRYgr4oYcKw2h3b7mGeegMDs1EeDh9zSFv7sx9uihmvULnaKmn%2Br4VHHq%2BL%2BDw2ZXLnDSudBoCHM9Y03wjoQ9NyHPrS9rAFUY0vYkg9YvwK18QsUPbhI%2BggAJBwUwrVsuFsDz4a0w7TWScMknwrlzDN41Rw4gZJMtmRtPhvc2cFItQ6xxST5ZsZgvSqx0XxQJ8o%2FMNKG1sAGOqUBBHRE%2FcxxYq%2BG4MUb8b57lBm8Is5V0VaWPmpaun9ZZ9Jput4misokoxGlEFY0%2FYvXicFTn4blUha0j5M6dJLSdqm9mKubKAnLIpxHn5vL%2BLiY6a228l5GUMuX1%2FHMPjK3wOMslcHn72hOoMQE8PnqQkId2Mh4MytuLTDc4ITRaj5LsPOFDFpB8Ry43QDDJ1beGmMi6dwl%2Fwo%2FfH6Tg%2BdE8Xig7s2v&X-Amz-Signature=6d30e6b1cf887f2b4bcb744dc0badbd83e3c4814cf2f0af12c6475470e09f1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RFUMD6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDntEsEn9q%2BKJvahF3lGtk4nFUT9FdgNmJ4HArXJWTA%2FgIgWZeV8zfXd%2BiPqf%2BnjalslXdhVGNde1SQXZ9J1R9vR74qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0DAhPCNgq2ewa1LircA7hQLEeLFuqfvpkt95rIrDbuDd7GJXVqSs5U9dl47UcgsABdy8DQJSPwtl4MpFEFLkhwBMw4vMbD0v9TosCUtTxVuPhT516dnBTEzya1A3WhZIFZ9Xz0iuweO6fC7CBruiWvVeIlMxezWlTO9sB%2F2d4caNwBuhRAoSyBks43hE67mzDZ%2FDfPVpkJQnKYlhjmG%2FTK3CMULJPSWvApKhBacsNM2sa6aVtRjQ9FIVP1f%2FS6dZFwSb7OnX8zwc76arVTkcjGplWLR8m5l5Df8xFXM8eTT%2BMbQ%2FujP%2BHaxO%2BG69nEKxYryC3s0fZQQ5VeCOzrk497DiADQKSoPptzn4v6ikWu%2BXeRNqQykNeEWY6ma3JfaODBchw%2BofOrgQSZGUqpT0OLGnPtch%2BV4BCPpNMxTHTDDd6FYNMVvWzZ5wtJBMCTBuOb6zyzWvXK63DUzLGtC05IulEcj0E9nuuWaiNT%2Bk4m7XeUoVu0NTq%2BnlXglRG%2BZQPkgNEAkmiMJWsJHC0BFZHAJOFx4KCcPkVxWIilm%2FXCE%2BYRQ%2BK9BE0qdVKodkbGKpHK1QGR2sUNobMzqynV1h514lo3kdC7HPk0IgA%2FSZ%2BjQlwMQsLgNJNAhWRs86HrgGHuTOxGbboPryNuMNiG1sAGOqUBYY%2FuCTMotTVxup%2FsJbTpULHF45yRKPrr8fy%2BU7dA%2BpvWK5FfYB4wQtZrgFzNnp%2FtMBeLRtvfbUGx7k4FnmybR4ci%2Bk1lnpMFR3kXYM6%2BRKoVj%2BsszRMFfrL4PbwptvIP%2BqZWi%2FvWCk0NDBbEotJvSFCkMs6IlnTchXe%2F1%2BQtmJC4JAIgZ3BU7boctAJWduWaOF%2FRH7xxGPgU5QINLbzQJFotIjrt&X-Amz-Signature=b3c1485e26a3f3466201f8d428f111fda8f1d0af9193af76b2ce0ae65885d8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
