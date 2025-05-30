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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCVAFKK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVd52rB1ZEpVA1AG19%2F3TZX33TNILMbysGvEu801v43AiBQeOhyz4W6b%2FILX4jcYj1i4kQYry1wWk%2F%2Fw7Ot%2B6uGvSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbQjZyMSFj%2F4sYv2aKtwDS7DsYoGCE3df7An9hhPxOYHwflJsFgF%2Fl7rDRSzqxdm7JLF5PpmjR866K1GFIVaDVueogJ8rle3G0xmxWwvcXb%2B8lnpQGX80%2FkG39I1YA417r%2B3NmZ8S%2BWff761PV7TOwS%2FJOJHA4%2F%2BDuGvTb07tHFkdT6I354TPnzzC90vlYvB9pHX%2FH9ShzoZg34UZSb%2BU3xqUfmyVpS%2Bvg9kholUh2uod0f2Ea8Gq3GgcKpQxurgTKyvHNdsdlFj%2BJgNkTLbZuDP%2Fp5LwXjoSh97%2BL3AMl%2B39DptLQC4fw0QnXofEVTmLI%2BIm%2FtghJ1%2FQKOyz8FKPTRf2DZtFMzhLKI%2BI8VS%2FkL02DLwfT9fYRDBLGnEVDiNxQYJMhb3DzuBxhUUugd65wH12vqj8DQ6ogX5CvaiSAu1bM2r244TUFpsP6uBfZD8OC%2FnZPSkedq%2FP3TPwxZu6hTbQSQYJQmi9xnO4B7CK%2FS7TogoVeWz1glPVlSC8gsfTVgxlUbzupvdp5C5byjSLt3w%2Fj3jvqHS7gMqZeOrjcGDdf5QpyAFazrVclWCh2GSi%2Fw%2FNY%2FpnDd8rqRfekYv3VNoqgd05lYutaId%2Bh%2FkZc0gg31LjbdqSbtkAeC7AVa6bs6Cn9eQH4ECqE7Iw4NzlwQY6pgFDe1Yd94O%2Bsk22Ih%2FVSXpzBMGC2aepo%2B5KwngHm4EYQ0GiZ6kFoSDQYL3FDNw%2Bc%2BfijDI2Be4vYzvwkQKInsMSlMxLkf4WRxyPbDetdCdt5nN3PVX8aM%2FdgVcDDpqJvP0160e6eoSlT%2BPuwGhOBCFQi1wZuaijUUfH4VYW0R8EHMNOdDpZV2aQAqhIUb2a8z%2FVZZSwxzVC8h2yFHiOUJYPFMXzIkK3&X-Amz-Signature=2eb78b842c1af365e0e0f6452e2953eb7901912ecade445fa7d40cfab2e70ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCVAFKK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVd52rB1ZEpVA1AG19%2F3TZX33TNILMbysGvEu801v43AiBQeOhyz4W6b%2FILX4jcYj1i4kQYry1wWk%2F%2Fw7Ot%2B6uGvSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbQjZyMSFj%2F4sYv2aKtwDS7DsYoGCE3df7An9hhPxOYHwflJsFgF%2Fl7rDRSzqxdm7JLF5PpmjR866K1GFIVaDVueogJ8rle3G0xmxWwvcXb%2B8lnpQGX80%2FkG39I1YA417r%2B3NmZ8S%2BWff761PV7TOwS%2FJOJHA4%2F%2BDuGvTb07tHFkdT6I354TPnzzC90vlYvB9pHX%2FH9ShzoZg34UZSb%2BU3xqUfmyVpS%2Bvg9kholUh2uod0f2Ea8Gq3GgcKpQxurgTKyvHNdsdlFj%2BJgNkTLbZuDP%2Fp5LwXjoSh97%2BL3AMl%2B39DptLQC4fw0QnXofEVTmLI%2BIm%2FtghJ1%2FQKOyz8FKPTRf2DZtFMzhLKI%2BI8VS%2FkL02DLwfT9fYRDBLGnEVDiNxQYJMhb3DzuBxhUUugd65wH12vqj8DQ6ogX5CvaiSAu1bM2r244TUFpsP6uBfZD8OC%2FnZPSkedq%2FP3TPwxZu6hTbQSQYJQmi9xnO4B7CK%2FS7TogoVeWz1glPVlSC8gsfTVgxlUbzupvdp5C5byjSLt3w%2Fj3jvqHS7gMqZeOrjcGDdf5QpyAFazrVclWCh2GSi%2Fw%2FNY%2FpnDd8rqRfekYv3VNoqgd05lYutaId%2Bh%2FkZc0gg31LjbdqSbtkAeC7AVa6bs6Cn9eQH4ECqE7Iw4NzlwQY6pgFDe1Yd94O%2Bsk22Ih%2FVSXpzBMGC2aepo%2B5KwngHm4EYQ0GiZ6kFoSDQYL3FDNw%2Bc%2BfijDI2Be4vYzvwkQKInsMSlMxLkf4WRxyPbDetdCdt5nN3PVX8aM%2FdgVcDDpqJvP0160e6eoSlT%2BPuwGhOBCFQi1wZuaijUUfH4VYW0R8EHMNOdDpZV2aQAqhIUb2a8z%2FVZZSwxzVC8h2yFHiOUJYPFMXzIkK3&X-Amz-Signature=6c4e8c5a3f5b6d6ba8e2a1a9377a2595d33f333b2c5a1d13e3b31ed4b71d73f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCVAFKK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVd52rB1ZEpVA1AG19%2F3TZX33TNILMbysGvEu801v43AiBQeOhyz4W6b%2FILX4jcYj1i4kQYry1wWk%2F%2Fw7Ot%2B6uGvSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbQjZyMSFj%2F4sYv2aKtwDS7DsYoGCE3df7An9hhPxOYHwflJsFgF%2Fl7rDRSzqxdm7JLF5PpmjR866K1GFIVaDVueogJ8rle3G0xmxWwvcXb%2B8lnpQGX80%2FkG39I1YA417r%2B3NmZ8S%2BWff761PV7TOwS%2FJOJHA4%2F%2BDuGvTb07tHFkdT6I354TPnzzC90vlYvB9pHX%2FH9ShzoZg34UZSb%2BU3xqUfmyVpS%2Bvg9kholUh2uod0f2Ea8Gq3GgcKpQxurgTKyvHNdsdlFj%2BJgNkTLbZuDP%2Fp5LwXjoSh97%2BL3AMl%2B39DptLQC4fw0QnXofEVTmLI%2BIm%2FtghJ1%2FQKOyz8FKPTRf2DZtFMzhLKI%2BI8VS%2FkL02DLwfT9fYRDBLGnEVDiNxQYJMhb3DzuBxhUUugd65wH12vqj8DQ6ogX5CvaiSAu1bM2r244TUFpsP6uBfZD8OC%2FnZPSkedq%2FP3TPwxZu6hTbQSQYJQmi9xnO4B7CK%2FS7TogoVeWz1glPVlSC8gsfTVgxlUbzupvdp5C5byjSLt3w%2Fj3jvqHS7gMqZeOrjcGDdf5QpyAFazrVclWCh2GSi%2Fw%2FNY%2FpnDd8rqRfekYv3VNoqgd05lYutaId%2Bh%2FkZc0gg31LjbdqSbtkAeC7AVa6bs6Cn9eQH4ECqE7Iw4NzlwQY6pgFDe1Yd94O%2Bsk22Ih%2FVSXpzBMGC2aepo%2B5KwngHm4EYQ0GiZ6kFoSDQYL3FDNw%2Bc%2BfijDI2Be4vYzvwkQKInsMSlMxLkf4WRxyPbDetdCdt5nN3PVX8aM%2FdgVcDDpqJvP0160e6eoSlT%2BPuwGhOBCFQi1wZuaijUUfH4VYW0R8EHMNOdDpZV2aQAqhIUb2a8z%2FVZZSwxzVC8h2yFHiOUJYPFMXzIkK3&X-Amz-Signature=ea60aae9210771f5a0ac501cdfa82cac314ef3e5a91a64ad76d85445f6f873ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLCQANN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXhxEBUUwOUM0JNutbGZ3NyNIT1%2Fh8yC94bAw4YuyXZAiAnfzgdrbhl6aRnL7PfCrULaaUkiALoIiQSgDFDBwjgXSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXCMRIswnMlyO0o1ZKtwDk6zItI087aah6ezNZbadxM0pFqnLBMNSdyDWpcnTL8FpZiSPRZai1dqJn28T8iq7Z5UQgXcctiuqrTn3%2BPBtjWYW5o83RlpdQiucM89grBVPU%2FsDbBTJOgs28stbDhJ83Ha7lfWlQTMCCtDchwMPVIgu5SLc%2F4%2FIxEcctCV7rH2rg7%2F7xoe9%2BHszq3zb56KT%2BfTIZ98isbgOL%2FtXb9eDDreCx7W92cqCQLtRyg8gA8bCwsrnDaxcxFb4rf5Zhkg5mrGIYMRdVA4TNCQ%2Bjn89wbVpZZ256bYVZkQGexZC0hSCZhhnyKs%2FQNSNmMT7po8BcP8BHW9EQhdlBfK7%2B7kvdhaXkOIsQdUxWtTC5xh7oAYqXy9NrPEkem1sFjOaJB3whhyBEHgvVy0oz5pW7XDMFVox0Lz0ntktHOvOJPKlFkGfgPGgBlbl0fqHCrKr%2BmrEXlVmGAaHg7yKMx0yziJD%2BWUB4KpLCZxQCVeCUeJoUF7xRA9gRBsB2K9qckV1B0TL2qjQSGM5Q1v5grZiumMH3c0Ua0TORUyi6wKF98GaXFrvUN7fgDkJWtEA%2B8W9nIz9mCvwF56CLJHmYPHvOk4Z%2BBIYrkzs1OYqnGfcmxMzsDwZl6zBCcr92F6S0iUw5dzlwQY6pgH9vSwFIz%2BHlWwmuZnWqOeqgwZ2%2Ba1W2ith%2F8weVeKhAxnBsM2vHA3D%2Fsgr3urdo4tPk%2FhIPG8Nw7YXGqQKjYe8WAIMLMsFnj1b8wkaKweofZcj2Z9JIEc2N2Q23Rju8%2BWXrghQLqapzLN6uok4z7QE3TqigxvwPSPc5X04tFZB1j9KIUJrqapNt1vFi3wYE6nDCPNl5ucyAJuU7x5mRw1phUCe5j7S&X-Amz-Signature=0dc7475605ca06f6a2add91556a30cb2b63e471ad8b3cc696a95d37119165b32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SOBFYR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLG0mQrppTp%2F%2FEaI32t8yrvU6cyEhLkua5lLdQvrmbVAiAU7otHuilcKC8ZALpaHtHYXsaji4J4IdzqNjIH%2B1fN0iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2Ji9%2BVRq42oYNiTKtwDHwe1cfIjxo5L%2BHr0XCYwvYOG10vq8H05A%2FgfSRbWt%2Fm%2BbZppNYf6ekdiF7bvYHTo0xy1U0rmXVziC3fG6A4fQsOToqQbkY9%2B0M16Qmv07FPgmr%2Fi1gYnxi%2FVEtlZNaWvqJDB5VWsIacjjmep6LC8wIDnp9ZVvFKra7kSnOVmQmOZe8zYRQ3mUSu8jR6SoJJkFKiy82IsuJ8BYIqa5SbAVSHK8vH5%2FKfe%2F%2BYg0ToHXHt2BVGb2KdO2M%2BN9yNZRYdwS%2FdPBOrQm%2FYtyXAF5GdWZff7GpiTREGwIa0Cy7l2I4oMmOw9nOGFkOCEU5rfJ71kNGE6KRKaD8ZFRBIRThFe4kLApL0YqxvuS7hKaTmrNnibgagebhBWJSea71iNnSDAjpcNURyfmbA%2FUIIk%2FdsS36JuVY6NFgrbOJysJWTRDKYI0xEGZ4%2BjwAP4LpI22f8tXobxsts4NFvAZhy2EkMjvI80b1%2Bsqt8mATuLss%2FY3rQK5qL3zmTP%2FxwDyDDJLq7wztLtyjxrEw4wEh9iIPBPrQrLuvL6zp7GEr2R04b8nnfjgwyTAS4MjRmvGfFhDQ31hx2qK6k8xoCTPs0oZLouCEzRuSkCNBw5Gm2R2xqwmpLn%2FLyComQbP%2Bpmy7Awx9zlwQY6pgGVChpSwtTpNZqECkaKJ9V4XouViyQeL1vdGCjddFm%2BRHPDFMZYkwmpceXmZpXM54GyMmYoRpAKcjQz0iLxwbB2e57Rkaz6wENWYsMvWyARv6qj3%2FWUv2QArXJm8ry%2BZQ7PtTnjRQ70f%2FlctfcNkA7EHsh9MFwljpufbmZx2u63rSfcKG1DFVTF%2FWyhnhUpFw2KcGmm0pX%2FaLBs3UJ41GmhLOaAX8nE&X-Amz-Signature=55cadc8bea59af9a816889914e38cd1305abf8d1090c0c8c818a9d8f8db74399&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCVAFKK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVd52rB1ZEpVA1AG19%2F3TZX33TNILMbysGvEu801v43AiBQeOhyz4W6b%2FILX4jcYj1i4kQYry1wWk%2F%2Fw7Ot%2B6uGvSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbQjZyMSFj%2F4sYv2aKtwDS7DsYoGCE3df7An9hhPxOYHwflJsFgF%2Fl7rDRSzqxdm7JLF5PpmjR866K1GFIVaDVueogJ8rle3G0xmxWwvcXb%2B8lnpQGX80%2FkG39I1YA417r%2B3NmZ8S%2BWff761PV7TOwS%2FJOJHA4%2F%2BDuGvTb07tHFkdT6I354TPnzzC90vlYvB9pHX%2FH9ShzoZg34UZSb%2BU3xqUfmyVpS%2Bvg9kholUh2uod0f2Ea8Gq3GgcKpQxurgTKyvHNdsdlFj%2BJgNkTLbZuDP%2Fp5LwXjoSh97%2BL3AMl%2B39DptLQC4fw0QnXofEVTmLI%2BIm%2FtghJ1%2FQKOyz8FKPTRf2DZtFMzhLKI%2BI8VS%2FkL02DLwfT9fYRDBLGnEVDiNxQYJMhb3DzuBxhUUugd65wH12vqj8DQ6ogX5CvaiSAu1bM2r244TUFpsP6uBfZD8OC%2FnZPSkedq%2FP3TPwxZu6hTbQSQYJQmi9xnO4B7CK%2FS7TogoVeWz1glPVlSC8gsfTVgxlUbzupvdp5C5byjSLt3w%2Fj3jvqHS7gMqZeOrjcGDdf5QpyAFazrVclWCh2GSi%2Fw%2FNY%2FpnDd8rqRfekYv3VNoqgd05lYutaId%2Bh%2FkZc0gg31LjbdqSbtkAeC7AVa6bs6Cn9eQH4ECqE7Iw4NzlwQY6pgFDe1Yd94O%2Bsk22Ih%2FVSXpzBMGC2aepo%2B5KwngHm4EYQ0GiZ6kFoSDQYL3FDNw%2Bc%2BfijDI2Be4vYzvwkQKInsMSlMxLkf4WRxyPbDetdCdt5nN3PVX8aM%2FdgVcDDpqJvP0160e6eoSlT%2BPuwGhOBCFQi1wZuaijUUfH4VYW0R8EHMNOdDpZV2aQAqhIUb2a8z%2FVZZSwxzVC8h2yFHiOUJYPFMXzIkK3&X-Amz-Signature=2859b8f2797499ce4e2f962cf010e2ef265b28a1b46e20e6e8a065cdf46c5c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
