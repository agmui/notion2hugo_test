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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESW67UN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5uGODgMRgoTRf%2FRW2W0nFlgI1sCy2aQA6jxqOPN6WYAiAraarIh0yB4airAJ93RbTnnet81nQE3rj72VbodPQoiCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM3daoNQQ4HUpN6huqKtwDb%2BT9j7x4PoLyzQlsxXzAcSxspoN%2FSIwnY1iKRUAqPCzdJt03mjbXwAowmJEXRLFa0hA8%2FqCbllzER1SNdenbIlLQPf9aZq5oUeJskLfI%2F%2FpuetXJU1FNp%2BNte4zNyAEVLW1E9uOvPqUFWKZwnFWRdFvNDL781lF8jXmJHfAxSgcD4MVYYSlLPnm9O5kglUv7az4tzrKlf2PZHsawUHyS8Xjs9q6d2bNKep3VLfLWIjnNNZfJ7wCLEZ%2BQLQfECPnNx3CEP%2BGxlz1Af0L3H2SEMCL5k2paScO8EgD%2BNtJ4wjPyMGIebfd%2FoTDo9MFP%2FQ5Gd2Lne9CNfAJ4gBlrKGqZaw73WVt%2BsDl6yMucLF9Uy%2BE83cgIFiN7iVcQBjBkA5H%2FT5P%2BNTjjHutDfRRaqqp1cMVj1iZhEqyRLbPwBypU5L4IMTcaA%2FtYVLSS7PiBePnm7wIR%2FR3aCW%2Bwa7ulQfXieZFbkrZtubXi%2B2dJNJ0oSmEUK43SOGRfqpyg2MDSLEEmRdTlgEfu9pZSBYATzi%2F8JbjwoVEShGouLI0Gxh5rWgWqnX%2BY8jak%2BD1j48w3xBtE9l%2FsLJev6y4T5VOmvVr3b9nYmUg3gVEeINTRHUCvl%2ByySuvApw7fI%2F9ef84wiMuNvwY6pgESK40V9rHH4wLDbjDPPZtr3Lm6a%2FxiwxwxE6uOrY4isiSF2cLfZCej03g1NWXhicXIzR3RSOF36SjVKNUsM5Z1Vj%2BYKJn4aY4tNj3A8CsH%2BH%2F4Nd9%2BsaweiVqgkM62higFc6yMLCkS4qYxBJjzsuTbFO4GVwW7hpp1uS%2Bsc%2FE68ty3tHzYeFqv40dQDmk%2FygDOqVzCNgfSA1gF1lzwV6p8i1ZtrwTR&X-Amz-Signature=25c013d2d551143a325954299e05f9b80fd773728ad7a28653a2cbcd344ad415&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESW67UN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5uGODgMRgoTRf%2FRW2W0nFlgI1sCy2aQA6jxqOPN6WYAiAraarIh0yB4airAJ93RbTnnet81nQE3rj72VbodPQoiCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM3daoNQQ4HUpN6huqKtwDb%2BT9j7x4PoLyzQlsxXzAcSxspoN%2FSIwnY1iKRUAqPCzdJt03mjbXwAowmJEXRLFa0hA8%2FqCbllzER1SNdenbIlLQPf9aZq5oUeJskLfI%2F%2FpuetXJU1FNp%2BNte4zNyAEVLW1E9uOvPqUFWKZwnFWRdFvNDL781lF8jXmJHfAxSgcD4MVYYSlLPnm9O5kglUv7az4tzrKlf2PZHsawUHyS8Xjs9q6d2bNKep3VLfLWIjnNNZfJ7wCLEZ%2BQLQfECPnNx3CEP%2BGxlz1Af0L3H2SEMCL5k2paScO8EgD%2BNtJ4wjPyMGIebfd%2FoTDo9MFP%2FQ5Gd2Lne9CNfAJ4gBlrKGqZaw73WVt%2BsDl6yMucLF9Uy%2BE83cgIFiN7iVcQBjBkA5H%2FT5P%2BNTjjHutDfRRaqqp1cMVj1iZhEqyRLbPwBypU5L4IMTcaA%2FtYVLSS7PiBePnm7wIR%2FR3aCW%2Bwa7ulQfXieZFbkrZtubXi%2B2dJNJ0oSmEUK43SOGRfqpyg2MDSLEEmRdTlgEfu9pZSBYATzi%2F8JbjwoVEShGouLI0Gxh5rWgWqnX%2BY8jak%2BD1j48w3xBtE9l%2FsLJev6y4T5VOmvVr3b9nYmUg3gVEeINTRHUCvl%2ByySuvApw7fI%2F9ef84wiMuNvwY6pgESK40V9rHH4wLDbjDPPZtr3Lm6a%2FxiwxwxE6uOrY4isiSF2cLfZCej03g1NWXhicXIzR3RSOF36SjVKNUsM5Z1Vj%2BYKJn4aY4tNj3A8CsH%2BH%2F4Nd9%2BsaweiVqgkM62higFc6yMLCkS4qYxBJjzsuTbFO4GVwW7hpp1uS%2Bsc%2FE68ty3tHzYeFqv40dQDmk%2FygDOqVzCNgfSA1gF1lzwV6p8i1ZtrwTR&X-Amz-Signature=2e8622896a616ee93ba26a0cd08b4c77882d3d8ba74a761a0438644dd29132de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PV5HYFS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcnCW7NFyQSvNoTPW8q2WgMEokIDnMIH1YoP3ao0SP9AiBCwnvqGmr1X0uAShHMEAFIKg9N9oaHh5cz9XZpzxwfxir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMRdrw9tUfEKehbA9yKtwDfAfZDbx3CCGQi1nD8oQ2PE95ARjcXWGPnuw57RCOuVV7oPLRd78e%2Fep4luKqsn%2FhyjZ%2Bt7%2FzoNy91AsHXUZq%2Bb5W58OK7jcADd%2Ffb6%2B7iWfnH8awU2dhi2w327NpQJOGJKlwBGOD67sJLtpEzeJdRlxEndnT78BWsklbhLRz1MPZhM7J%2BdCRuxhQdwzGiWvdD1Qf9%2Bg3xDYzLvpwET%2Bbqq0C2xPSEZHufPo7Uf%2B1Z%2BTwsX7iN%2FiuRyH1zIvKcvM38cT4SXJx6ilZGZC9U0xrxjj1zIaU4VlJx22MamQqXMVN85EFkFWl%2FtbW6P1%2BTuUG4kgEvJkd55ke9Sgf%2ByVvuk%2FeKwiKVniAiQFKkIlsz%2BULqn3jZnenrhcG4Q5svuvly9R0Ns12jeYuHrh%2FU3RlZCvS1L1MpRvE4qIftqOqGfWQF%2BvoJUfUeXNoJcQITKBTT2F2YNm79VwN%2B1lGtNXQ%2FETIXxdzQZolvBFm%2FaCtt97ByPNxS0Vsxytk%2BxYhDPuPm%2FCVIvpHWBH8OWqRMS1NyHPlO6SAh9A%2BVSY7TiR%2BLcD3fJtvWJJRRmO1STVb1Y0R%2B%2BjLwzBVJnTNOcMhRToH%2FGNceIpP7dRI95zCn7OVMKF6%2F3a9BREeB8HC2BIw%2BsqNvwY6pgGKKerDTRCdRTrs8mT1kMwLpt8nfYyj38sQHvfySviWSPdxM6rSPhP1UJUC8RTLIkQ5igt6YYh6TSgDnFfSr%2FtedahRdX4b0ZD3rME7Nv2DesA8Srnb904liKy67rjGbN4yQ0KL04SZi%2BEqatlY6Aa0WkPqwHHJbWcOpyxugxP0QDJDLtEDVS4WOY8FPk49kyJhYVv9ZAw6mOpCLyhUlMCy%2B2bhotYr&X-Amz-Signature=0d9eb8c1dc2cadf1bf61cad4dbbcc040a2e3dd6887a2c9ea79d48b3c9bf614ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTUECNQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmGBVKjDSYW49tt6ZpSNdP18r2rxI1RPILXO3oLaPPwAiBko0s%2BEOvCWGBUhRc7Sw%2FbyifwpN4u4f6WoUzTmyrdByr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMC0ItaapkYDzsKzZMKtwDR3jctXVrH3wp5VIGanUokJWGmL8DvBNYCgrebhWdBOUdDumLTUBGvdiRfmtNFNwdHV%2Bg0M8GvkHwxwHaOGoXBjtabam0cCIA3BvnlZdRemS%2BgxqdeCL40e2UUhTFrTKhKE4Q9qlk6%2FADlwtVnZfsyo%2BK6t7pnndf8MOQbRCQmSsVD7Zh08sywgI9bukUSr4D53WNHFspoiQWCZ5xLrTzKm3fxC4HFwhAm7cpaiD%2BemlkGa7CkgA%2B5veFu1DbAWv4fEyHHqo5TSgbS9cfsj1Iz0RhZKHI7Q%2B8zBUs2NySjyBv0Hs%2B%2FspWrmcp02WEHcklY27iB6I42gVmVhXwU6Xai3QIcdFj61sBo3q2qOc%2FFnP%2FcXkT8x9wfLg5g7vJBJXEv7WLUVuDiQ8SceKrIlhW6O3a68TAofY%2BdOzwWKazxM2Bd8MhvLWsn8efx%2Bm1D9G8j20MI8kwFOcK37%2BrzWrEVW9s4vJ%2FAC1uKg0f8XdlP2cbJmh%2Fu3ZtKtkEXYD9NXewuIVkSk1PiXfcoOlvQR%2BQ4EmKNElHeC2lkcXpGy3EvwerHv5BuDT8POtIlVMaAaMDxbN3tkImIl36Y6eVZMx2ZUopodVVIxwyaOcvuczeXXFfMSfLB2%2F76IoeXjYw8MqNvwY6pgEw0sKhsCKSMSHK%2FTvQxV3U3C%2B9oh594POIlwlfCAUOFEYRjYRNKeLMd%2FCYOzFx%2BkHUIteBHUnwYsWVY4eSrUbV2Hi8nDTLXZdc38CgHUIHA%2BRxLoAAa7EKnUVYKz2y3fWAFmMNMndyDxgy4VEM9vYnNzGRzk8zpkVCx9%2FdgBn0in%2B%2FZXPedsRYk%2FaDJifUOr5OhAVZ4gMyxf010fFEnTzKYvfksiKG&X-Amz-Signature=789e60ce8aa42d765e7e13f8dee26decfd2c3092775b9ae4e83ee92ee7b23157&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESW67UN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5uGODgMRgoTRf%2FRW2W0nFlgI1sCy2aQA6jxqOPN6WYAiAraarIh0yB4airAJ93RbTnnet81nQE3rj72VbodPQoiCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM3daoNQQ4HUpN6huqKtwDb%2BT9j7x4PoLyzQlsxXzAcSxspoN%2FSIwnY1iKRUAqPCzdJt03mjbXwAowmJEXRLFa0hA8%2FqCbllzER1SNdenbIlLQPf9aZq5oUeJskLfI%2F%2FpuetXJU1FNp%2BNte4zNyAEVLW1E9uOvPqUFWKZwnFWRdFvNDL781lF8jXmJHfAxSgcD4MVYYSlLPnm9O5kglUv7az4tzrKlf2PZHsawUHyS8Xjs9q6d2bNKep3VLfLWIjnNNZfJ7wCLEZ%2BQLQfECPnNx3CEP%2BGxlz1Af0L3H2SEMCL5k2paScO8EgD%2BNtJ4wjPyMGIebfd%2FoTDo9MFP%2FQ5Gd2Lne9CNfAJ4gBlrKGqZaw73WVt%2BsDl6yMucLF9Uy%2BE83cgIFiN7iVcQBjBkA5H%2FT5P%2BNTjjHutDfRRaqqp1cMVj1iZhEqyRLbPwBypU5L4IMTcaA%2FtYVLSS7PiBePnm7wIR%2FR3aCW%2Bwa7ulQfXieZFbkrZtubXi%2B2dJNJ0oSmEUK43SOGRfqpyg2MDSLEEmRdTlgEfu9pZSBYATzi%2F8JbjwoVEShGouLI0Gxh5rWgWqnX%2BY8jak%2BD1j48w3xBtE9l%2FsLJev6y4T5VOmvVr3b9nYmUg3gVEeINTRHUCvl%2ByySuvApw7fI%2F9ef84wiMuNvwY6pgESK40V9rHH4wLDbjDPPZtr3Lm6a%2FxiwxwxE6uOrY4isiSF2cLfZCej03g1NWXhicXIzR3RSOF36SjVKNUsM5Z1Vj%2BYKJn4aY4tNj3A8CsH%2BH%2F4Nd9%2BsaweiVqgkM62higFc6yMLCkS4qYxBJjzsuTbFO4GVwW7hpp1uS%2Bsc%2FE68ty3tHzYeFqv40dQDmk%2FygDOqVzCNgfSA1gF1lzwV6p8i1ZtrwTR&X-Amz-Signature=38268c555cb392009b0d841fc37c7393b4b524e1e319fb852d1bfc8eca7e64eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
