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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VRUXBG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS%2FqzNE2iNyK%2FthdfMIa9aOyXGh7B8YhhvUDbdcN%2FL6AiBf4dF2pXyQqo7BpIfBYw6cYanODpEGFhKtp1KEd68EvCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmBMnyDO%2FjuReF0Z3KtwDBgE4icMSSs1zCRp%2BIYGYsRvcIQyYKgUJpLcmBmDK3WRjAGh%2BC7AgjggZX83LE6p6Ojoa5jBO1nF%2B3jY18w2dfsJZeuUH5ZaUNhbiU9JZdOHeoe4f%2BWWUgtw8ol2mjJCScoz6c3KszAP0MZxTvAUiL%2FV80IhoxGoOhJ4PX2%2FphIJ%2Fco1W8Su%2BUUkP5DuWuq2e33yu3rg4PcYOYzBTCLbxby9tLpthHMUk5OCR%2B812dFTHmFk8h9uM%2FD1vRrnzvDenhWQ5AYmikIocStducs4Kf0%2FY%2BByJPvw20eY3EB5deUB48fQpekGsHe7VCaHbFerhFdkiM%2Fnfp0l0goLTzv8%2BsZoZE10%2B3V2rJ4SyTY49Fexfs3amBFgG%2BQySwjQOWcXrk%2F%2BV73%2F%2Fpw0ZidLpJuiO1dxBZKhB4w7whiuR%2B4L6tSiaEPp7aabwtIGSYd59CzAWf5wA2ukyZG35gPyS6OSKiMi6lW1HB%2F65ouAyXgVugVqQQzg7yZGDrQxx6RkYYgq758Z7DvihNXuANvzA%2FQP05rqJ6FADcLX3pAr6HL9KMEikDUfImmvJ5l5n%2FaewNtCYTR9w9DyrOTxjSbOda9mugA4gka1xCIcA9ZMG0eQjcOCktaiYJqmGgc7ddUEw0eqfvgY6pgHFz63SPGsK9hqjMwUezAmG7f%2Bj50QnE1kGP%2BcHcz1QEAj3GqisNLbvIxlIAyVAZHX7CEosknpRnhomigxHcpE%2FTMCVc55KFWU3C1uxPKClv8oc%2F8ijL9FQX3Vi9hKL5knXATXl73ZTB9E73UiMZJHAVGmkCbKi66qmGR%2FlMe6z4DtHs5cfevxYmsl36bQctaFaPr5pT4B1FzRAS0BJSkpqITGR8gNY&X-Amz-Signature=a2817a88528d9114c7eb18deb29990c1a71df6a3b404bfd55be0e37e2a0044eb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VRUXBG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS%2FqzNE2iNyK%2FthdfMIa9aOyXGh7B8YhhvUDbdcN%2FL6AiBf4dF2pXyQqo7BpIfBYw6cYanODpEGFhKtp1KEd68EvCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmBMnyDO%2FjuReF0Z3KtwDBgE4icMSSs1zCRp%2BIYGYsRvcIQyYKgUJpLcmBmDK3WRjAGh%2BC7AgjggZX83LE6p6Ojoa5jBO1nF%2B3jY18w2dfsJZeuUH5ZaUNhbiU9JZdOHeoe4f%2BWWUgtw8ol2mjJCScoz6c3KszAP0MZxTvAUiL%2FV80IhoxGoOhJ4PX2%2FphIJ%2Fco1W8Su%2BUUkP5DuWuq2e33yu3rg4PcYOYzBTCLbxby9tLpthHMUk5OCR%2B812dFTHmFk8h9uM%2FD1vRrnzvDenhWQ5AYmikIocStducs4Kf0%2FY%2BByJPvw20eY3EB5deUB48fQpekGsHe7VCaHbFerhFdkiM%2Fnfp0l0goLTzv8%2BsZoZE10%2B3V2rJ4SyTY49Fexfs3amBFgG%2BQySwjQOWcXrk%2F%2BV73%2F%2Fpw0ZidLpJuiO1dxBZKhB4w7whiuR%2B4L6tSiaEPp7aabwtIGSYd59CzAWf5wA2ukyZG35gPyS6OSKiMi6lW1HB%2F65ouAyXgVugVqQQzg7yZGDrQxx6RkYYgq758Z7DvihNXuANvzA%2FQP05rqJ6FADcLX3pAr6HL9KMEikDUfImmvJ5l5n%2FaewNtCYTR9w9DyrOTxjSbOda9mugA4gka1xCIcA9ZMG0eQjcOCktaiYJqmGgc7ddUEw0eqfvgY6pgHFz63SPGsK9hqjMwUezAmG7f%2Bj50QnE1kGP%2BcHcz1QEAj3GqisNLbvIxlIAyVAZHX7CEosknpRnhomigxHcpE%2FTMCVc55KFWU3C1uxPKClv8oc%2F8ijL9FQX3Vi9hKL5knXATXl73ZTB9E73UiMZJHAVGmkCbKi66qmGR%2FlMe6z4DtHs5cfevxYmsl36bQctaFaPr5pT4B1FzRAS0BJSkpqITGR8gNY&X-Amz-Signature=4570fe07940d7570e043f03239c12c2dc9305456f19daf7df0826800b89984c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UERWFO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLaXpiMvps9p8BTzfspAyYViNFv%2F5v7BrBHgPDC%2BtIvAIgIC7202YeUG%2BTbSjKvf4BsSc2SzvC7zV1fQRZpvROJL0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPYm7iHkDQEUcCdRDCrcA9J%2BGkvhw2C5yBYa845w1YslUUxrr4o79Xvrzom%2FPB2pQDLPtp8dD7gz%2BlBmOTW3TgbdpnLtN9oeuI7mz3Dk%2FJOPMbQUWQlfK6LeH5eirZFdNZ%2BkjGt60n08v%2FXDTIZJKsLU0UpGf6I0HH63loKQJBvxEe11W%2F%2B2Dy%2Bw7lzkKV1WkCsF4xR1SDQCZZdCwCdmKVmAvd5Lrd6r%2Bvjr0jYwHK1UOUUvzB%2Fu757pfVtH2WkMCYWjAMjDFIhSYwUBWzdXhiC3NzGyD%2BAtDtNESVAqrVkGEEnA0IPGfOUdPlT6prAtuzjBNCEGxDMvjIrpEKkgwjVQLengJcE7w3F%2B%2FVn%2Fa11BNB5SgrEvVVBrpuna8m2X2nzeAWqyhPAE4L5tSocEbMfmOBjXZ1L%2BQBbTkEeJtr5DvQRLYB2yPV28qTrMSVBYTBhA714z8xxc1uOXymRLoK68GFlFxAWWl76r3NZe6unV8sv01sdRF%2FCuUHbzSpjG67bY0LbKzpdbm8d20PaDF%2FeqxnDBZQeqAmTJkzQnOeeN%2F0PQbCU7o%2BNvRv7p%2BdVVeDwsjT39g5goAGqRQf1KXYJ5A1HhgOUc0qZFRxDp%2FXJDjZIVmZb4UysBi5zYDQXi0ppT2uKI%2BY1HgfvrMMvrn74GOqUBL3%2FYW2fnCXvHKFAb7tHuKDiNBM%2FBbAGoXHVNEzdgMBuUVPqAaPJbMhoZ3ChWqFbCZ0cneIFoy5UZryfke1XJDXFNHhkxA2oGL%2FBe4T0lIT5XMi%2Fe6EkzJQAkpOMss54v%2BaX8EhwhFDmapI3YFpyvELVA17NQ4uKTsF3tI0pEH9uupe5JdAJzRH0QGPyvPUiU4q7hix9AyqBvNsZ1z5flx%2BMBiD2R&X-Amz-Signature=7b439613c865683e62669db893b1ead95d0a7ac6964c60ef6aeaaf3af94dbbe5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYNRFJD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzN4VTBtxcvTeqwrQ7%2B%2BNVTxI3Pj95jMwAb8zwNQldiAiBTU7kfrWySxSz1VMiR%2FhVbhU2B9jryg%2BESqtuFr1%2BWFyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMSGkEpKYtFnBaMJB3KtwDRsyiV6dPoPd7f5spqJ2I9DCjqtZgRmQm1pp2ccMnfuGxluqAhESZaHopNnF7dPp3XIqXMK2G7yKWXXzFfua7b2RY7lu5L3OuSs%2BkyB7V%2FNQ7OOm8uNx9RiZUbpw6RSYerkbCU0uDZAPOYi1cV3bT2A6U1UDik27uwaWQgG8QOEJyYvSpp66tCCf9QIChfSb%2F%2BM1FYVlmkaXvehmNHZsXOXZ6tS%2F13j9zB1QXvz2EMNzZ7p0HeacqsY9JIDU1ZgQVgh%2B0S6qKnl22E%2BndAbwyIuz%2Bd5gqRWxU4ft8Ct7BhnTALYAhy4uGd0oiSeQrn89TQ4SIuJAki2x8QbTex6wFCP6EVrwCaGuIIL%2FYujNIMDhNrVOqrmPCAeaRN6NmLAEJ%2FTBGkMkdHXvr05X4NmLwhkoMs3%2FOrFsDvr2NFWWoryHyge7Uv6I8HxM5ioue6NQAHzTrL9rVnBB%2B4q4J%2FLbcCcYRCLTA84lWSgRn%2F3pvkLqI9J6A0b4Hg0ddDTl5xvrgPhhqI70NXUzBor31rXKL5ICvCCtn2%2BPDjSMAYMEPPi9BufYYsF78uh8U4xxBCYhUSty4wqbcHKiMhu%2B4Fy%2BGJFwfFudsj%2FIWSI26H1hJAtCeiu2tZZINhNZembYwg%2BqfvgY6pgFy2mhb6gJlyTfxgnYP2B8mBA8JoC4dtjSYoe1wQwaIKd7HwC%2BIV7GWNZGOKsYzqLMEvKVfHMPJ6XUVw93z8f0sACLHgKbH2gsJw9pnmTGojTFzU6VBIHaZK3eNX81lTM5E%2B02Lj32mddgakzNkHH3PiIyWTHzNZQPjuyn2RuUdY0cgLsC8FRsGRhil6uooyzDJIJGHQWAwHMpkROtiy7eNznhLZVNW&X-Amz-Signature=136834dfd63a7a41e4b34b1ab8cf1142b37d45ee36dc935460a3dddb20c5e4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VRUXBG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS%2FqzNE2iNyK%2FthdfMIa9aOyXGh7B8YhhvUDbdcN%2FL6AiBf4dF2pXyQqo7BpIfBYw6cYanODpEGFhKtp1KEd68EvCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmBMnyDO%2FjuReF0Z3KtwDBgE4icMSSs1zCRp%2BIYGYsRvcIQyYKgUJpLcmBmDK3WRjAGh%2BC7AgjggZX83LE6p6Ojoa5jBO1nF%2B3jY18w2dfsJZeuUH5ZaUNhbiU9JZdOHeoe4f%2BWWUgtw8ol2mjJCScoz6c3KszAP0MZxTvAUiL%2FV80IhoxGoOhJ4PX2%2FphIJ%2Fco1W8Su%2BUUkP5DuWuq2e33yu3rg4PcYOYzBTCLbxby9tLpthHMUk5OCR%2B812dFTHmFk8h9uM%2FD1vRrnzvDenhWQ5AYmikIocStducs4Kf0%2FY%2BByJPvw20eY3EB5deUB48fQpekGsHe7VCaHbFerhFdkiM%2Fnfp0l0goLTzv8%2BsZoZE10%2B3V2rJ4SyTY49Fexfs3amBFgG%2BQySwjQOWcXrk%2F%2BV73%2F%2Fpw0ZidLpJuiO1dxBZKhB4w7whiuR%2B4L6tSiaEPp7aabwtIGSYd59CzAWf5wA2ukyZG35gPyS6OSKiMi6lW1HB%2F65ouAyXgVugVqQQzg7yZGDrQxx6RkYYgq758Z7DvihNXuANvzA%2FQP05rqJ6FADcLX3pAr6HL9KMEikDUfImmvJ5l5n%2FaewNtCYTR9w9DyrOTxjSbOda9mugA4gka1xCIcA9ZMG0eQjcOCktaiYJqmGgc7ddUEw0eqfvgY6pgHFz63SPGsK9hqjMwUezAmG7f%2Bj50QnE1kGP%2BcHcz1QEAj3GqisNLbvIxlIAyVAZHX7CEosknpRnhomigxHcpE%2FTMCVc55KFWU3C1uxPKClv8oc%2F8ijL9FQX3Vi9hKL5knXATXl73ZTB9E73UiMZJHAVGmkCbKi66qmGR%2FlMe6z4DtHs5cfevxYmsl36bQctaFaPr5pT4B1FzRAS0BJSkpqITGR8gNY&X-Amz-Signature=0ddd5ca5e85b5e3c46d4dfc4112ce06d8a5818c7c13c5408b4566e84b7b816ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
