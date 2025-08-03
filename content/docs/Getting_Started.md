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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK6W4JX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSVY%2FaSYC7dOh%2F2Jh1DTCMO24PtGKXCzV%2FIhuYfaTeGAiEAyCHjoWz6aOIyvwxwSBS9DrNAtbpvcLSTum%2BVFzbLxl0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMIGoSY0z37Iis3c8yrcA5DSSm%2FCqVV0eEKJ372BImpCd5RMj%2B%2BL63p2%2BIY92UmcPqQ6idhvpS1jnoJMpaAODS7%2FSVfZkeWuyY8IPdA815FQ0hA8p0UWw53HIKwuHTg0devr7QBSmVlJzVcJ%2FScfqgySq55vs5gHy1zNM7CCC8sSR7WdJ4de7TKxcBoHFvOMr6SGQz9AybUv3vKMEXHBeEXL6H%2Fk6RWzv6zwE0cRkW0ZRC7kCY%2BNOM9MvwkudLuo4DfZWM32crVLLKhtxwnhWvxNqCUm1uUhgpMKKHF%2BQvZlfk53tWUFBRvIc7yALsTOnmp8LH%2Fjpce7qSWil4ipFAel2C%2FmXP6ZcLknInzeVgNIIQFkI92QzFfva2hbdRHwuF3W9e0V0hjTE6EIzgq%2B1XQCvO5ezpQH95VOpyvcDdVUctsoMX1TIBb6Jmj1Ihhvv7UTpz7kSWJ4McWsjUvOdbzd41I3ahWZEsnDUhFPX7m0%2BT%2BatBWeAbEo0eMjc2X3%2B%2BfkypWeDw7yeREI0S%2B%2Fn%2B0pyijx4RSEYMbU%2BqMdZItd0kqxqegDlf6107i539cT2LVxwLbGYRqK3f9fs0UiuY%2B4lrwb54aLRSAum9ej2O6ZI2OMkyXz1iRprdvOjdDx%2BSRG7XemGFPRioHwMMvSvcQGOqUBpA90G4W8q%2BAU%2Bw8FPMIKXKzKpmAdlpYWvSYqZScTbdXlwcmJ0deAHYLpffo3y5uCfXP3jWDaOSPCdRF3uli48Wy%2F0Pd6%2B4BlY9Xcm3vAv6Tr6rxZPtnGIeQUOogNFaALOvX%2BvVbdWf1cBsw4zJjo4NLz164Cq6nX44CLp3PNbyazuTWKNXZIJ6XpYM0Di2SvamaNNjwl4FJTw2oByZ56h%2B0qfn6h&X-Amz-Signature=b06aed0cae29bf13e11d9c7e08ebcb3f2ac99d662ecfd107b1478980e7df52d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK6W4JX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSVY%2FaSYC7dOh%2F2Jh1DTCMO24PtGKXCzV%2FIhuYfaTeGAiEAyCHjoWz6aOIyvwxwSBS9DrNAtbpvcLSTum%2BVFzbLxl0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMIGoSY0z37Iis3c8yrcA5DSSm%2FCqVV0eEKJ372BImpCd5RMj%2B%2BL63p2%2BIY92UmcPqQ6idhvpS1jnoJMpaAODS7%2FSVfZkeWuyY8IPdA815FQ0hA8p0UWw53HIKwuHTg0devr7QBSmVlJzVcJ%2FScfqgySq55vs5gHy1zNM7CCC8sSR7WdJ4de7TKxcBoHFvOMr6SGQz9AybUv3vKMEXHBeEXL6H%2Fk6RWzv6zwE0cRkW0ZRC7kCY%2BNOM9MvwkudLuo4DfZWM32crVLLKhtxwnhWvxNqCUm1uUhgpMKKHF%2BQvZlfk53tWUFBRvIc7yALsTOnmp8LH%2Fjpce7qSWil4ipFAel2C%2FmXP6ZcLknInzeVgNIIQFkI92QzFfva2hbdRHwuF3W9e0V0hjTE6EIzgq%2B1XQCvO5ezpQH95VOpyvcDdVUctsoMX1TIBb6Jmj1Ihhvv7UTpz7kSWJ4McWsjUvOdbzd41I3ahWZEsnDUhFPX7m0%2BT%2BatBWeAbEo0eMjc2X3%2B%2BfkypWeDw7yeREI0S%2B%2Fn%2B0pyijx4RSEYMbU%2BqMdZItd0kqxqegDlf6107i539cT2LVxwLbGYRqK3f9fs0UiuY%2B4lrwb54aLRSAum9ej2O6ZI2OMkyXz1iRprdvOjdDx%2BSRG7XemGFPRioHwMMvSvcQGOqUBpA90G4W8q%2BAU%2Bw8FPMIKXKzKpmAdlpYWvSYqZScTbdXlwcmJ0deAHYLpffo3y5uCfXP3jWDaOSPCdRF3uli48Wy%2F0Pd6%2B4BlY9Xcm3vAv6Tr6rxZPtnGIeQUOogNFaALOvX%2BvVbdWf1cBsw4zJjo4NLz164Cq6nX44CLp3PNbyazuTWKNXZIJ6XpYM0Di2SvamaNNjwl4FJTw2oByZ56h%2B0qfn6h&X-Amz-Signature=596ab793965f4c246ab49d0e66f02cd675acf09d3b90e2a8abb73b5de6352f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK6W4JX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSVY%2FaSYC7dOh%2F2Jh1DTCMO24PtGKXCzV%2FIhuYfaTeGAiEAyCHjoWz6aOIyvwxwSBS9DrNAtbpvcLSTum%2BVFzbLxl0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMIGoSY0z37Iis3c8yrcA5DSSm%2FCqVV0eEKJ372BImpCd5RMj%2B%2BL63p2%2BIY92UmcPqQ6idhvpS1jnoJMpaAODS7%2FSVfZkeWuyY8IPdA815FQ0hA8p0UWw53HIKwuHTg0devr7QBSmVlJzVcJ%2FScfqgySq55vs5gHy1zNM7CCC8sSR7WdJ4de7TKxcBoHFvOMr6SGQz9AybUv3vKMEXHBeEXL6H%2Fk6RWzv6zwE0cRkW0ZRC7kCY%2BNOM9MvwkudLuo4DfZWM32crVLLKhtxwnhWvxNqCUm1uUhgpMKKHF%2BQvZlfk53tWUFBRvIc7yALsTOnmp8LH%2Fjpce7qSWil4ipFAel2C%2FmXP6ZcLknInzeVgNIIQFkI92QzFfva2hbdRHwuF3W9e0V0hjTE6EIzgq%2B1XQCvO5ezpQH95VOpyvcDdVUctsoMX1TIBb6Jmj1Ihhvv7UTpz7kSWJ4McWsjUvOdbzd41I3ahWZEsnDUhFPX7m0%2BT%2BatBWeAbEo0eMjc2X3%2B%2BfkypWeDw7yeREI0S%2B%2Fn%2B0pyijx4RSEYMbU%2BqMdZItd0kqxqegDlf6107i539cT2LVxwLbGYRqK3f9fs0UiuY%2B4lrwb54aLRSAum9ej2O6ZI2OMkyXz1iRprdvOjdDx%2BSRG7XemGFPRioHwMMvSvcQGOqUBpA90G4W8q%2BAU%2Bw8FPMIKXKzKpmAdlpYWvSYqZScTbdXlwcmJ0deAHYLpffo3y5uCfXP3jWDaOSPCdRF3uli48Wy%2F0Pd6%2B4BlY9Xcm3vAv6Tr6rxZPtnGIeQUOogNFaALOvX%2BvVbdWf1cBsw4zJjo4NLz164Cq6nX44CLp3PNbyazuTWKNXZIJ6XpYM0Di2SvamaNNjwl4FJTw2oByZ56h%2B0qfn6h&X-Amz-Signature=ef224d22d774df906fa0595731046245625cf304a84e56e6b5e449de51fcdb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWVO4SZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApXnPOtjmuodmN0bdor5jeqvY7fXOIpozCmXo0CYGaQIhAJIvZ4aFdDk05om0UEtyP%2BqVYVlH0JyearKtpve2JmQHKv8DCC8QABoMNjM3NDIzMTgzODA1Igw1NqhpoH4mDLPLZZ8q3APzqxoql8Q84tRLa%2F3F%2FNo5opKiDMwVUrXKJVbe2vnuVESKlB2KsE0Zof%2B2N4gdyjlkyZim83RIFWDy2vNQdQIUZYvtfoxiBFUb0rRrVmVxMMdpDTPckXievlQ34%2FmGtKVfU4%2FSef3K31s9DfkH07S5H8pHcjCnPsB7iIqJsLZjSGXECbVi0lEzccQmPdkm5HxXAQo%2BJL%2FsYyK2PbhtypAHNTWlZ5958e7k98IsGHHYUad1U7yjBR991yX%2FK38HdlePBfyptXh4%2F1jyJf%2F6MzScjWzNVkt4MlRSbQhNXyzdvTb1abDJ%2BKViGesuj9R539GFD80%2BNfAlDjZy3fmpEeJJSGDHmg3TdnXC%2FVaY1fXMEfjz8oVeSZ4f4lCQV4S%2FTyejF6U7secchhkUzVgwPVhgk8kGgAnHJ9MCO4XSb55IF61IIIBHMIUJP0QpEAC12WM%2BLcYejyFM%2FwVyi5zWnzY7NtM2ox7xENEEHBlVj35L3ZjZ6C1%2BZKsX28Sj1USF1c9dPaCG%2BsYvC1BWiHPsrax4FQVy8yMT2sUw8y53oQ%2FWpHsYoZdQJp5kC6uXO%2FpYeHj50KKMbnZi1aeboKpRX73xTvc8U0jW3kC7Wgk1%2BwKMSkBMUzGYknCNZ5i4eDCN0r3EBjqkASDU1xYwRakXfXTnMdfP3n7PW41TsoEA9GsiXoXPlIIr8z4YuwknaQX3nNGuC3SCeHEoc6IACM5rgopccsbxO2ybxLeZH9ZEL3JGj3yN1CIKPjBkcsFrnbotr48E0SAhW%2FwXNy77oiYHS1ogRO%2FSN5dDzf6RDgVF750HA5yu7FwxPAvI%2FHuU33YutJtv5QvNKksGW5FAnaXVnroV3RnevBMsCLzp&X-Amz-Signature=0972e8bf494943e021d5ec17d6558af41da019388a24ed7ef00aeb7e5c6c73fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CX7EN27%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcl4TY%2FMe3LrbYPuVkXmH1ffAk8ccRnth36FWExnAKwQIgMQ2F1yeox9%2FZggmO5%2B8zRwPwwYlMy67n%2Ft9aorCGISQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGjVnrJ13hGUBLHtHCrcA%2FPTIZPdhRCqskCmZeu70%2BO5MHMLsq0bc9bLq99CSQiAIcMyAmsFcxULlg%2ByrPv5R%2BaRRHV7KnvyKEYmLDmIhZTVlGFRIS9eWDI0cOOPKLPQqLmtmrb1RHJP88wmc9I5aamCnEx5zyziFV5zB%2BnYLIkGYx010VUjgtXc%2FdyMfKtpHN%2F1dx5eeFF5SjW8lppu4hGRxHuJJ2w9iCh0yKCFhSNwFbdPyLaFHlP9HjZ7TTIlGipPKBo3GBjqujsD0ursfHghSLr0iivlVBBERNzWXguVbFdBh09d9FbanSwJTLp%2BmsZsPYSP5KKap7ZnLxR%2FDGwirX%2BYHfqdxQDkhq8HdJKfZuu76hY2%2BbT7CdmGjeGrXRHQfQRxBbifqlCwdswADdCffsC0244Mbt8jkTBMsAzb1gbfDRdHVO7lp1Q66x92TGBgyk4B7CgxtMSDsI2n50HXwuIKSeSm5iAf%2FA%2BN%2FXSqLLQHbMKoP2qW0Jqe92iLl2MfGaEGA1scuvgQ5gnqICxI9qK7yM19q7iZHFdtHh5gcviF0GYWew0nmcxjCFGwg6tTfUR%2FwX0PnZDs9wPgoEYKCmI12vogh9R0sd%2FH9zvFW9tSb5hnMeYilf%2FMuMFzd7p0JcFKC6sfMx8qMPvSvcQGOqUBxlDyYQ8C2PDWUDNKkpgKuLQCDFlxT5xgJPVd7MTWYjZYSQFZ%2FIHftklFkFKzmuHrZHsgVQedQC4NYJ7momrkjnUwEsgTGd90%2F0j9hX9QSrgTvHZKbWAGfq3DEbFrUa0%2FcmHACd40s5akqcMW%2FEpYcil39G3z6cccstOLWTHiKvlyGtQKYMJWGktL%2BGmZzrlavZSW2p9yjC4O1Hx5j%2B2Jk52E3uTd&X-Amz-Signature=30bb9baa2a1d68f30ec22daacbd04d6b5fe0f5af292395b02912c7b6b732fc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK6W4JX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSVY%2FaSYC7dOh%2F2Jh1DTCMO24PtGKXCzV%2FIhuYfaTeGAiEAyCHjoWz6aOIyvwxwSBS9DrNAtbpvcLSTum%2BVFzbLxl0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMIGoSY0z37Iis3c8yrcA5DSSm%2FCqVV0eEKJ372BImpCd5RMj%2B%2BL63p2%2BIY92UmcPqQ6idhvpS1jnoJMpaAODS7%2FSVfZkeWuyY8IPdA815FQ0hA8p0UWw53HIKwuHTg0devr7QBSmVlJzVcJ%2FScfqgySq55vs5gHy1zNM7CCC8sSR7WdJ4de7TKxcBoHFvOMr6SGQz9AybUv3vKMEXHBeEXL6H%2Fk6RWzv6zwE0cRkW0ZRC7kCY%2BNOM9MvwkudLuo4DfZWM32crVLLKhtxwnhWvxNqCUm1uUhgpMKKHF%2BQvZlfk53tWUFBRvIc7yALsTOnmp8LH%2Fjpce7qSWil4ipFAel2C%2FmXP6ZcLknInzeVgNIIQFkI92QzFfva2hbdRHwuF3W9e0V0hjTE6EIzgq%2B1XQCvO5ezpQH95VOpyvcDdVUctsoMX1TIBb6Jmj1Ihhvv7UTpz7kSWJ4McWsjUvOdbzd41I3ahWZEsnDUhFPX7m0%2BT%2BatBWeAbEo0eMjc2X3%2B%2BfkypWeDw7yeREI0S%2B%2Fn%2B0pyijx4RSEYMbU%2BqMdZItd0kqxqegDlf6107i539cT2LVxwLbGYRqK3f9fs0UiuY%2B4lrwb54aLRSAum9ej2O6ZI2OMkyXz1iRprdvOjdDx%2BSRG7XemGFPRioHwMMvSvcQGOqUBpA90G4W8q%2BAU%2Bw8FPMIKXKzKpmAdlpYWvSYqZScTbdXlwcmJ0deAHYLpffo3y5uCfXP3jWDaOSPCdRF3uli48Wy%2F0Pd6%2B4BlY9Xcm3vAv6Tr6rxZPtnGIeQUOogNFaALOvX%2BvVbdWf1cBsw4zJjo4NLz164Cq6nX44CLp3PNbyazuTWKNXZIJ6XpYM0Di2SvamaNNjwl4FJTw2oByZ56h%2B0qfn6h&X-Amz-Signature=6eabed8d2a76f48761a516d7181582f775a4a390768eb87dbb3da918bb26a50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
