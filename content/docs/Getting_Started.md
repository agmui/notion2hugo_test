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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MPRH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAebA8c6w%2Fu%2FdXrny6VrnXMOCb73%2F6YqXjMmokds%2FgjXAiAMwL5X2LCd2EqX7R9lT4f8h07bs88hD3JhsRBcY9szuCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPUPFOw7RIK6Tv5WXKtwDsXpDxVRl2H9MubPiu5wmP4qhEgCMSArmpWdoKii94ih3iJ2dxS24ZcSdjkuqCqT%2F6TBF8vJgS78sBtZ%2FSbFIpboB6pC4c0BijI71EKCi5nL1F36TRZrB%2FYvwuPF0fOLAwkvfMm4avE5ifk4vCH6J9ubwUi7sL2aP6PzEMkSvCKMswH%2Fg3BzTYq7QioAQS%2FQMHgqnSBdXisqZOsJQ2VhJseV8AIFxYBrCd3yf6o8nLJ21UAreErP8s3iYFCcaEgzjmNfCMKIj8w%2FbnPkzxug73%2BFbhGnn9hePcJiYL7FdEB3HvcZAs4riGYW0uGXdc3TVwAafFGHKfVif8Bevo6XQG3YKxrRiP%2FY944%2BWljL0EDMVTGJzomUIYN0QbHQ5e%2FMhMN1aNcMhn%2BI4FfHHVG0G0KpOSbUZrBlXHuDJ585XxIEf5qFuN26slppAvPeUfurDHnh4QG%2FZc7euiagImiO5VzN38anm31Xx%2FViOqxuNBIiuxWCCrPxohac%2BNYMVNBx9I0tiT5Oeev8PszfS3lBMn8kVloex5kPX75j0C9rp0ApCTxda2m%2FP7peuv6ytArwRu%2B1FKuUsKsZnEX7qkhsj0ghYBT4HPhmvuEyIA9ZiqtDwMMxAfSjpDihKin4wr6%2F2xAY6pgHV5rjYXpPCTPAb%2BZJHQYvXb4K19RTLsl1MS%2Bo%2FdztOQtMAcOwmdEKkTkkNEjsbBfEkd7H9TT6qrwztUinhjB%2BPVL5HQRSCKgdXW9XuXdijQBHdDfA6okos2e%2B412VoQnM4Jqji9anCWsUAJP2rH37IKrr3WWKyX%2FSvafmm2eoDnIlg7tb%2BPOenFz0sv1gbbqlmLXlX0hAMlyP94En11OlSpiBFdybL&X-Amz-Signature=d58b3edd830f4b3483fd7fdc0067f644927f182a02e63d446ab2177ec20951cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MPRH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAebA8c6w%2Fu%2FdXrny6VrnXMOCb73%2F6YqXjMmokds%2FgjXAiAMwL5X2LCd2EqX7R9lT4f8h07bs88hD3JhsRBcY9szuCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPUPFOw7RIK6Tv5WXKtwDsXpDxVRl2H9MubPiu5wmP4qhEgCMSArmpWdoKii94ih3iJ2dxS24ZcSdjkuqCqT%2F6TBF8vJgS78sBtZ%2FSbFIpboB6pC4c0BijI71EKCi5nL1F36TRZrB%2FYvwuPF0fOLAwkvfMm4avE5ifk4vCH6J9ubwUi7sL2aP6PzEMkSvCKMswH%2Fg3BzTYq7QioAQS%2FQMHgqnSBdXisqZOsJQ2VhJseV8AIFxYBrCd3yf6o8nLJ21UAreErP8s3iYFCcaEgzjmNfCMKIj8w%2FbnPkzxug73%2BFbhGnn9hePcJiYL7FdEB3HvcZAs4riGYW0uGXdc3TVwAafFGHKfVif8Bevo6XQG3YKxrRiP%2FY944%2BWljL0EDMVTGJzomUIYN0QbHQ5e%2FMhMN1aNcMhn%2BI4FfHHVG0G0KpOSbUZrBlXHuDJ585XxIEf5qFuN26slppAvPeUfurDHnh4QG%2FZc7euiagImiO5VzN38anm31Xx%2FViOqxuNBIiuxWCCrPxohac%2BNYMVNBx9I0tiT5Oeev8PszfS3lBMn8kVloex5kPX75j0C9rp0ApCTxda2m%2FP7peuv6ytArwRu%2B1FKuUsKsZnEX7qkhsj0ghYBT4HPhmvuEyIA9ZiqtDwMMxAfSjpDihKin4wr6%2F2xAY6pgHV5rjYXpPCTPAb%2BZJHQYvXb4K19RTLsl1MS%2Bo%2FdztOQtMAcOwmdEKkTkkNEjsbBfEkd7H9TT6qrwztUinhjB%2BPVL5HQRSCKgdXW9XuXdijQBHdDfA6okos2e%2B412VoQnM4Jqji9anCWsUAJP2rH37IKrr3WWKyX%2FSvafmm2eoDnIlg7tb%2BPOenFz0sv1gbbqlmLXlX0hAMlyP94En11OlSpiBFdybL&X-Amz-Signature=90a97fe94cb3e1bc2761297ac6bd79c912f88342512d0830ff3781c4a529a0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MPRH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAebA8c6w%2Fu%2FdXrny6VrnXMOCb73%2F6YqXjMmokds%2FgjXAiAMwL5X2LCd2EqX7R9lT4f8h07bs88hD3JhsRBcY9szuCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPUPFOw7RIK6Tv5WXKtwDsXpDxVRl2H9MubPiu5wmP4qhEgCMSArmpWdoKii94ih3iJ2dxS24ZcSdjkuqCqT%2F6TBF8vJgS78sBtZ%2FSbFIpboB6pC4c0BijI71EKCi5nL1F36TRZrB%2FYvwuPF0fOLAwkvfMm4avE5ifk4vCH6J9ubwUi7sL2aP6PzEMkSvCKMswH%2Fg3BzTYq7QioAQS%2FQMHgqnSBdXisqZOsJQ2VhJseV8AIFxYBrCd3yf6o8nLJ21UAreErP8s3iYFCcaEgzjmNfCMKIj8w%2FbnPkzxug73%2BFbhGnn9hePcJiYL7FdEB3HvcZAs4riGYW0uGXdc3TVwAafFGHKfVif8Bevo6XQG3YKxrRiP%2FY944%2BWljL0EDMVTGJzomUIYN0QbHQ5e%2FMhMN1aNcMhn%2BI4FfHHVG0G0KpOSbUZrBlXHuDJ585XxIEf5qFuN26slppAvPeUfurDHnh4QG%2FZc7euiagImiO5VzN38anm31Xx%2FViOqxuNBIiuxWCCrPxohac%2BNYMVNBx9I0tiT5Oeev8PszfS3lBMn8kVloex5kPX75j0C9rp0ApCTxda2m%2FP7peuv6ytArwRu%2B1FKuUsKsZnEX7qkhsj0ghYBT4HPhmvuEyIA9ZiqtDwMMxAfSjpDihKin4wr6%2F2xAY6pgHV5rjYXpPCTPAb%2BZJHQYvXb4K19RTLsl1MS%2Bo%2FdztOQtMAcOwmdEKkTkkNEjsbBfEkd7H9TT6qrwztUinhjB%2BPVL5HQRSCKgdXW9XuXdijQBHdDfA6okos2e%2B412VoQnM4Jqji9anCWsUAJP2rH37IKrr3WWKyX%2FSvafmm2eoDnIlg7tb%2BPOenFz0sv1gbbqlmLXlX0hAMlyP94En11OlSpiBFdybL&X-Amz-Signature=a8bd18122d87f1e921c47b2dc2a8a827786515529859ec0aeaa8a350e2fab6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ7BEXZN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4x7TzGIWZjHDFarCCS%2BROU%2Bz8faETJhr%2B293bJ5Hb%2BAiA6gFJ1ukx5L7JQM0ZZpStT4E0dC8piNUNvnM1r3%2BO63Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMRVxYgiFAycVJxx6KtwDJGMxvBdoFz%2Fs80bdNoYN53e9IXMe5R3SBaqdXPOb5pjV5Fror6Gqdh8V8EUAE2ClB3YtRjKb10w8u0xUHmcMBVbk%2FCi39OtEL5Cq2Sj7oEvLFiPWG4pKcNrvod1eP1prfx4I7wTyldOcmZOOxCYSSEMHAZk9Cef9soUu18Z7CzMMG4PIYqdbAfG2UjHgspLHNcTZT5o7kynGBt%2FPqqEenIIaC0Fwb4L5KRoKIBgbEfQ8LjF%2Fd2wQhW8KaMwVuwzRl%2BJzKbh8ERP8TF4cMTXQ2alna163QjSzxjjkTrynpkAPd%2Bv2ueAwIhZErDvU160gBTWjMFHjh4YHf61BSLt8tnQi0v%2FTbTmXhM5E3UKOcyXgPH%2BSMOWetCb8zwpJv6QsQ8%2FVwFIEWJdjQvAvWtINrxyk%2FVpL1E3y7RYJTtR6dSH707Jx%2BEPCz6%2BUFT7WioMXh7yEF6njSpWKVL5716tXBwE1F6M7VerPNT5NUhhiHKnR5c1PwkTGtrj075R0XiyaKKIt9gDRy2kEWPPNnS8bgdtr0MMdH5C%2F5M4U66049W7eS79BJ5HYHYLXfU04yVxkTcyY1OGNlCqUV77lnWSjj61g1XzOLACiro9J06THfCopksmrnfvDwESzR%2FUw4a%2F2xAY6pgF2b0%2BOc6XH1zgFA1AG0eri0opbkAUNKaViy5I%2F%2B4Sx1cVK4E6d7bhhnPsokjCDVggh9ZPcsEd9K658%2F7LxKrgeGTgdcBUt3UGNjRaCVd8gPUOsyTMwpt6IohSAwz%2BZGxcrGB9w0zyukPsOdlkacNDVySdN6qza0scE8oghpModzjsZFbJd8Y%2FiKAc%2BVJcb9M7qYUwIsnZvs4%2FRVouCrp9Aly%2BXB836&X-Amz-Signature=5876942f0710c194c35743852ab419f452f15e78c0e53e873110d11ae9ebc426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N6F36R%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1AxjMDNUl2ZLU7k0ob5u9%2BnU0Ksfu6pz7T0gfnbngJAiBUYQd87xyYjgZy2dB7ed9fq19m5rLF%2BHtRvjieipl04Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMXKGeToNrUN1RJs79KtwDqYb7gcDU8B2mlYMOxD50ZYviM%2Fh9CGGDOqGtGnuAx1K33qPw7TOC%2FxirhWf5PQx1mGEJciQ7Pg6Phkcs086ovA3GJe6oep6sI99yUd2GY3Pp8TOb2wpbV2JpkRnY7MGYSnvBGBrtZzs8fuTO3UuHsVI71aGBqCajs%2F%2Bd6VJbsh%2BP1PKpkS%2FEioNNeIKYoX8Tf27cbTX28ESR%2FbUUPcU94T%2FqKg2CcHW6woh7qQ1K7Enlnc0ZCItLOO%2BkfDf%2F7R0ZcWKsM79X6lAQLkAjY06VH0B7WINKxdCWBJkZf4PM0koIwJnuQ8sKbEclHzET6gEaZ7e0E6vk3luQSoAwapfUcT8%2Bn87pT6oFKuTQJnj7BCj%2Fy1AILh%2BFI9LWT%2FoksBcNvOw70CKVxY%2BfN4NZQLpUNiyxfug%2F%2FlLegEooP0k3VgWsYXnyRjr%2B%2Bv%2Fp%2BI0WZKJq05l7RaAeJmwvhSFBaGAwtcz439aFWa3M8RvCIORmWIYxeaof28u1ITGvMHkEQpI9yQk4k628VEO6TPujF%2FkSMfrZk7fJ7v%2FOu%2FwAQ8S80oOap0tfdJieOojA01lwWFu512N3t0CcF%2FbvT30ujFiK%2B98Pd0Nh9MPDGyOZ2Fk2R%2BwRodrNUaKH8773JM0wgK%2F2xAY6pgFMlzhRugkCm2hz1EA8eM0VWCjOd%2BIZKOq5IMFVQjftQ9JWG70kW%2FBapr4TW7TrhuLtqk5hVs6%2BJf9R0tMB3s9aXZBSEW2GAAbRMQxIRMqNTPxdSNhXjTF%2F8mrElgMSFwy5ml6cJeaUtHcCZU%2BrydwNluspDj4mynFL4pjCSHFgfZ8u54bF1cLutfSmUOc1rwzg7rPTAGn45w%2Fc1xGyT9aO5%2BnDShqd&X-Amz-Signature=b659ea103a7dec3a83bc712f4c9aab4ee5da52c63f315b90851aa981b4de44eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MPRH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAebA8c6w%2Fu%2FdXrny6VrnXMOCb73%2F6YqXjMmokds%2FgjXAiAMwL5X2LCd2EqX7R9lT4f8h07bs88hD3JhsRBcY9szuCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPUPFOw7RIK6Tv5WXKtwDsXpDxVRl2H9MubPiu5wmP4qhEgCMSArmpWdoKii94ih3iJ2dxS24ZcSdjkuqCqT%2F6TBF8vJgS78sBtZ%2FSbFIpboB6pC4c0BijI71EKCi5nL1F36TRZrB%2FYvwuPF0fOLAwkvfMm4avE5ifk4vCH6J9ubwUi7sL2aP6PzEMkSvCKMswH%2Fg3BzTYq7QioAQS%2FQMHgqnSBdXisqZOsJQ2VhJseV8AIFxYBrCd3yf6o8nLJ21UAreErP8s3iYFCcaEgzjmNfCMKIj8w%2FbnPkzxug73%2BFbhGnn9hePcJiYL7FdEB3HvcZAs4riGYW0uGXdc3TVwAafFGHKfVif8Bevo6XQG3YKxrRiP%2FY944%2BWljL0EDMVTGJzomUIYN0QbHQ5e%2FMhMN1aNcMhn%2BI4FfHHVG0G0KpOSbUZrBlXHuDJ585XxIEf5qFuN26slppAvPeUfurDHnh4QG%2FZc7euiagImiO5VzN38anm31Xx%2FViOqxuNBIiuxWCCrPxohac%2BNYMVNBx9I0tiT5Oeev8PszfS3lBMn8kVloex5kPX75j0C9rp0ApCTxda2m%2FP7peuv6ytArwRu%2B1FKuUsKsZnEX7qkhsj0ghYBT4HPhmvuEyIA9ZiqtDwMMxAfSjpDihKin4wr6%2F2xAY6pgHV5rjYXpPCTPAb%2BZJHQYvXb4K19RTLsl1MS%2Bo%2FdztOQtMAcOwmdEKkTkkNEjsbBfEkd7H9TT6qrwztUinhjB%2BPVL5HQRSCKgdXW9XuXdijQBHdDfA6okos2e%2B412VoQnM4Jqji9anCWsUAJP2rH37IKrr3WWKyX%2FSvafmm2eoDnIlg7tb%2BPOenFz0sv1gbbqlmLXlX0hAMlyP94En11OlSpiBFdybL&X-Amz-Signature=af8572f3bec7875056b1615fb478aa3ce0bc716ef4203f82b2003dcfe071bd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
