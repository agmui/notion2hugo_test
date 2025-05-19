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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODO4JOT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9ACwzLTJASWFns6HU10gzITKPAuuA3Xx6hVlAyMgRtAiEA2GATSukjrd6Bt%2BjftiyNr%2BGsI%2FHFOcoWxwsWlvdH9lMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCizhDpKEyKwHLxMQircAzOWNGzVnNhMeYKmc39F66M%2FK1kRH6ZVKljjuP9A6zTYrcJ5H3FAE8xz3hJHOOEa0GA2dal6jlHq2xZqs7loMugZHIHLuJUV4TlI%2FHAcv2M0B%2FqJdO1782uv8DsiTFycACkJ4KpSBE6714KhD8Z1ENDspU4ZAe48ZZqXf5%2FhxQgXK4zHv0Bvg9Q2knbItC3T6hrJf4cIUQ%2B4bpqkUzYHAem7HaQL01XVqrNeaqTFrmFI3wC4I9V8b78KRixnRuJxru%2BoSGf0XiZAPfJ%2BrVhstiDQ%2BcsreJFUaG2dyUYeUvPetL0vuG2jMh%2FuScHQksu1kkLLcCfTB7YsFkkA8Flps%2BxWLluz8IJnxc%2BUWwbaubVvV3zNdeCjKNlWArcnSTRNiYsG%2BL%2FmUeZtORtrpfamqOaF3Ycb%2F0IVOADSRYIDXC0pfEKkG%2BUaTbP6WI5XVaNk6xoZ0qXk%2Fd0k8BkHF3nNHJ9Oqr7wk4V6%2B9PT2iAq4z%2FKWNkpcl3n4MD3X4Xg0cuMWllUf%2BC8XgjyGopl4n3Fi5A5TSa7XtWYRHSSSmZArGP2Od6YRdBcl9CDOslmudCvl%2B%2BL3esihDtyiWdgV0TdiikrcG2wJ78PoJ23vteLbQPrg7TSh0MTYrRLO2c%2BMPCWrcEGOqUBbNm%2BB20fP98KIRPleli2EVOenVDzOvEeWb%2FUSp9tl5W5FcgFHq1bRTcto3bk5Y81uG59l3Vj16TxnHRt5CMEL%2FMr5Xw4yUtIxvvGc6dcwMRWXMXl61J9gbX0x6hrvF5nGSTaojFov8UEqqiFp62%2B4mhB0aXln%2BlCHZZbfm2tALhkczk3gGKZakZYRIXIrraSfmw3wR1IE0hlBGFm5x8nOm0hiNNG&X-Amz-Signature=3eb12def8e51d3b222b44fec70a0e85ce91901a352e631a4cf3ce9373b199aca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODO4JOT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9ACwzLTJASWFns6HU10gzITKPAuuA3Xx6hVlAyMgRtAiEA2GATSukjrd6Bt%2BjftiyNr%2BGsI%2FHFOcoWxwsWlvdH9lMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCizhDpKEyKwHLxMQircAzOWNGzVnNhMeYKmc39F66M%2FK1kRH6ZVKljjuP9A6zTYrcJ5H3FAE8xz3hJHOOEa0GA2dal6jlHq2xZqs7loMugZHIHLuJUV4TlI%2FHAcv2M0B%2FqJdO1782uv8DsiTFycACkJ4KpSBE6714KhD8Z1ENDspU4ZAe48ZZqXf5%2FhxQgXK4zHv0Bvg9Q2knbItC3T6hrJf4cIUQ%2B4bpqkUzYHAem7HaQL01XVqrNeaqTFrmFI3wC4I9V8b78KRixnRuJxru%2BoSGf0XiZAPfJ%2BrVhstiDQ%2BcsreJFUaG2dyUYeUvPetL0vuG2jMh%2FuScHQksu1kkLLcCfTB7YsFkkA8Flps%2BxWLluz8IJnxc%2BUWwbaubVvV3zNdeCjKNlWArcnSTRNiYsG%2BL%2FmUeZtORtrpfamqOaF3Ycb%2F0IVOADSRYIDXC0pfEKkG%2BUaTbP6WI5XVaNk6xoZ0qXk%2Fd0k8BkHF3nNHJ9Oqr7wk4V6%2B9PT2iAq4z%2FKWNkpcl3n4MD3X4Xg0cuMWllUf%2BC8XgjyGopl4n3Fi5A5TSa7XtWYRHSSSmZArGP2Od6YRdBcl9CDOslmudCvl%2B%2BL3esihDtyiWdgV0TdiikrcG2wJ78PoJ23vteLbQPrg7TSh0MTYrRLO2c%2BMPCWrcEGOqUBbNm%2BB20fP98KIRPleli2EVOenVDzOvEeWb%2FUSp9tl5W5FcgFHq1bRTcto3bk5Y81uG59l3Vj16TxnHRt5CMEL%2FMr5Xw4yUtIxvvGc6dcwMRWXMXl61J9gbX0x6hrvF5nGSTaojFov8UEqqiFp62%2B4mhB0aXln%2BlCHZZbfm2tALhkczk3gGKZakZYRIXIrraSfmw3wR1IE0hlBGFm5x8nOm0hiNNG&X-Amz-Signature=7724606af299caea2881ad4e8eb9bab4d94dc966b33da09ce19c439f29216846&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODO4JOT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9ACwzLTJASWFns6HU10gzITKPAuuA3Xx6hVlAyMgRtAiEA2GATSukjrd6Bt%2BjftiyNr%2BGsI%2FHFOcoWxwsWlvdH9lMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCizhDpKEyKwHLxMQircAzOWNGzVnNhMeYKmc39F66M%2FK1kRH6ZVKljjuP9A6zTYrcJ5H3FAE8xz3hJHOOEa0GA2dal6jlHq2xZqs7loMugZHIHLuJUV4TlI%2FHAcv2M0B%2FqJdO1782uv8DsiTFycACkJ4KpSBE6714KhD8Z1ENDspU4ZAe48ZZqXf5%2FhxQgXK4zHv0Bvg9Q2knbItC3T6hrJf4cIUQ%2B4bpqkUzYHAem7HaQL01XVqrNeaqTFrmFI3wC4I9V8b78KRixnRuJxru%2BoSGf0XiZAPfJ%2BrVhstiDQ%2BcsreJFUaG2dyUYeUvPetL0vuG2jMh%2FuScHQksu1kkLLcCfTB7YsFkkA8Flps%2BxWLluz8IJnxc%2BUWwbaubVvV3zNdeCjKNlWArcnSTRNiYsG%2BL%2FmUeZtORtrpfamqOaF3Ycb%2F0IVOADSRYIDXC0pfEKkG%2BUaTbP6WI5XVaNk6xoZ0qXk%2Fd0k8BkHF3nNHJ9Oqr7wk4V6%2B9PT2iAq4z%2FKWNkpcl3n4MD3X4Xg0cuMWllUf%2BC8XgjyGopl4n3Fi5A5TSa7XtWYRHSSSmZArGP2Od6YRdBcl9CDOslmudCvl%2B%2BL3esihDtyiWdgV0TdiikrcG2wJ78PoJ23vteLbQPrg7TSh0MTYrRLO2c%2BMPCWrcEGOqUBbNm%2BB20fP98KIRPleli2EVOenVDzOvEeWb%2FUSp9tl5W5FcgFHq1bRTcto3bk5Y81uG59l3Vj16TxnHRt5CMEL%2FMr5Xw4yUtIxvvGc6dcwMRWXMXl61J9gbX0x6hrvF5nGSTaojFov8UEqqiFp62%2B4mhB0aXln%2BlCHZZbfm2tALhkczk3gGKZakZYRIXIrraSfmw3wR1IE0hlBGFm5x8nOm0hiNNG&X-Amz-Signature=0263dd588cdf943aad822aaeb7fac4d71be16ee4e34e33bdf6da60e5eb1ce900&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6CBIMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb%2BmQgk%2BkAJxhyiXcIlwS%2BfHVaZsMpdx7HY7abgKXjkAiBnYZhgKqpo7yeCDnoqVlPSsVcCU52FX36ewBqmPAIx6SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMuVPfbHJikMtzLsKtwDSzXxuFwZFlFmtmkpFcJuNMjvaxwV6ybfd8Psq0PVaFG7ykS39x3EDPBBSFwJ8uhif1pOa%2FMEpCd%2B%2FbHN9%2Fb5aua3M3vdobl1pWJGMIVoX%2Bfd9%2FSlU0TY8Xv3%2Fa9KZMzivmQ%2BYessts1f0UvptgxjmA7PS75eqarQ2n%2BfEhS6isSZMGKkg%2BNKueylKoi6neemidw26SweVX9rf%2Fp%2B9Qs09Se04okvpLyanicuoYxyuVotY01DvuevMYBA37sjEeXskjcFeEGUIALcNtFtDjwsFwIV3MFljN6LhSE7ABXpQv%2Fr2FMhbtSP3%2F4J6o7D8vaJE35E59ymwyNQSQLHZO1kI4NPzEKvNeRnNhtlhDIaL0D7npuqf2DQoi9oL8Rd2e426mLH%2B7wNgWths%2FmKMeKN%2BTYKtwJr3wQpwnjMZx%2B%2BJmEXvDwXnD9wcPVrt6WICzx5muDF8hYXNwTiqtVCrzOvBml1hsQnAXHSJKFfiuiPSlP9iQj9b2hLVMZTMs5P%2BSuw7FPAruQjf3SaTxI4xiJiS0ieSAt4MijYJr1%2FPfTKpNjDua3eKrSwjAjcRjDJGYziavMNecWe%2FkamxvLNKhxkK6MRXLE3yelJf6OpEgKi2dFWN6CFoKike1hOszEwwK6twQY6pgGLh7nk7%2Fv5qgYSGX3ezXjh%2FAEiRD4QcOmuRK6Zr7zph8t%2Foted3%2FsdjAQa12AOW0XZYRm9eWtPQm2h%2BxS%2BWcWdRkieQTRW9kH6I6pmvYPIvZ2xlOUFfUrleY4hWVCyQxWXKRzys1d%2FC1biOW8UEu4YQaql5qB8bVySt5y5t8Yorb4%2BbgRJOBFPgs0RlsbaIpZHoxvcu75xk3%2B6aqWHbTa%2FXBsM7Kz8&X-Amz-Signature=a03a08853f80c743c89057d15062133e63ffa4f258991d248b796dffb154d087&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWAYXIB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWOfmPVIrB11olRuiMFU%2BOHA2sW%2F83r1KsKr1fVXRMgIhAKtb9zj%2BjCAlkm25UCQig1hY6DfV7O%2FlUnTjajQrAjSpKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyfesx06CXvy7rn1OQq3AML%2BcYTGpdyK6oykM5QnblmK4X%2BmPKc14aBMmgUTBarLGizl3abLKXBnViA%2F3klFJ3EXF0jE%2FuNlQBXKkFSWqV3yt3N4%2F5mjfHB9B0aPmzeFxbHvmynp07K83ooxFgyyDVSJdeAYdybQ352pZMSTrfwJ5GT04Re4c%2FD9yjC8tFCledO7R%2FJkUNqsKkY0VFgzoxSDNyRJ6cXLxonGASovS0mvMtn2HHEEkVnghcd7JsZ4bP2LLXMWwJY8Ni08mokKvg56a1GMr6Lf%2B%2FMFBnd9wMA4lowU%2BFZ0F3Dotv%2B3TrTYAFAQYyDWhL99XG%2BPREHKz6PEKE32fbDsCLissiBlmNFlr7gxe625gGRF45s2avkQNUyQhpAaHoIqEnTznjVG3PaAsChiN3U0NnCGcpp5LzZzeO%2B4AI3M7XG03ztatVz7pxWAXOnMquFaoTMLq%2BqWid4umVt43RMQ%2F0FiTUKnLyKZiKOOIGJOR8PUmM1RGzXV1U7iVHF%2FaUs8fdvx8uHyUH36%2BtOyhn9cL6qugzwyV7smfFXVFbURjcSBZhfumY%2BCVNEg%2FRMsu1p06jdHAzLGwslz2djTJ7itwH8nwCNHk6c1cgtTVidbak%2B27TrZW83f4GQT%2Fj%2BOAlz1JFF%2BTCDr63BBjqkAfXXbA8jRxXqrPxhgPM%2FriLxeGSHKv6eAgFmija9lq3%2FJvxj4J99uSXX5A1cCCDbak1tGy%2BDXLPNojW71sxcdpsILul%2BQS2Ze4k8SZqBQ5dfobi8F8Lljk6TX7UaV5WHI46Ttkuhkpg7IrbJfoI%2BeACnYJCtp0uKASpvdL99bVyTtjvNp7qYWAk%2BX66aqw82bdG%2BWa%2Bvguy2i3RaKi27TUzQP0og&X-Amz-Signature=50b11414d8e836818668189bfbc8e9b5ff99902f91e9b46d4d88d29231f2cd1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODO4JOT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9ACwzLTJASWFns6HU10gzITKPAuuA3Xx6hVlAyMgRtAiEA2GATSukjrd6Bt%2BjftiyNr%2BGsI%2FHFOcoWxwsWlvdH9lMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCizhDpKEyKwHLxMQircAzOWNGzVnNhMeYKmc39F66M%2FK1kRH6ZVKljjuP9A6zTYrcJ5H3FAE8xz3hJHOOEa0GA2dal6jlHq2xZqs7loMugZHIHLuJUV4TlI%2FHAcv2M0B%2FqJdO1782uv8DsiTFycACkJ4KpSBE6714KhD8Z1ENDspU4ZAe48ZZqXf5%2FhxQgXK4zHv0Bvg9Q2knbItC3T6hrJf4cIUQ%2B4bpqkUzYHAem7HaQL01XVqrNeaqTFrmFI3wC4I9V8b78KRixnRuJxru%2BoSGf0XiZAPfJ%2BrVhstiDQ%2BcsreJFUaG2dyUYeUvPetL0vuG2jMh%2FuScHQksu1kkLLcCfTB7YsFkkA8Flps%2BxWLluz8IJnxc%2BUWwbaubVvV3zNdeCjKNlWArcnSTRNiYsG%2BL%2FmUeZtORtrpfamqOaF3Ycb%2F0IVOADSRYIDXC0pfEKkG%2BUaTbP6WI5XVaNk6xoZ0qXk%2Fd0k8BkHF3nNHJ9Oqr7wk4V6%2B9PT2iAq4z%2FKWNkpcl3n4MD3X4Xg0cuMWllUf%2BC8XgjyGopl4n3Fi5A5TSa7XtWYRHSSSmZArGP2Od6YRdBcl9CDOslmudCvl%2B%2BL3esihDtyiWdgV0TdiikrcG2wJ78PoJ23vteLbQPrg7TSh0MTYrRLO2c%2BMPCWrcEGOqUBbNm%2BB20fP98KIRPleli2EVOenVDzOvEeWb%2FUSp9tl5W5FcgFHq1bRTcto3bk5Y81uG59l3Vj16TxnHRt5CMEL%2FMr5Xw4yUtIxvvGc6dcwMRWXMXl61J9gbX0x6hrvF5nGSTaojFov8UEqqiFp62%2B4mhB0aXln%2BlCHZZbfm2tALhkczk3gGKZakZYRIXIrraSfmw3wR1IE0hlBGFm5x8nOm0hiNNG&X-Amz-Signature=59645fd1063c2034dbb94cef9db982e9fff59ede8fd4149252436db647b44ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
