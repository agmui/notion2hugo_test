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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4GULHG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCF15vOGDyEphwkgamkHNiBkXRr%2Bjw6z43PGWzXQ96PJwIgaOOVOW1kIInUaf8Rg0z8MpWeX%2BkzxL%2BwmbtURpJVGNwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKpykJoKQzm8%2B%2BqLyrcA7SMSBTOG4wByJ4nIM6Y0wi4Dk4M%2FEMnkXk1WU8d8qSZRW9xSKsy2UlRTB276SU7N2MJlsz0LymBpqB65rJ3WPY28aJEEFfdwUg6CpaUkIUuB%2Fm5Z5yMCjg%2BOODbNK0VZsywzCpVyq7IaVoNGJDoMyUQnWm9aU5D1yJD4Du%2FyTL5mxRz35a7sJpAhu4iyL5vNdimakEGCgLAewW2VgynaUlpSJ5rsE7LBGe%2BAa4rBVsL%2F7oIXPAovYez%2BE8%2B%2BZb43ZeAXX8g%2FUvfy45LPuge85zGfkq%2Fl3G5fofdph8zQ4s5atx8PYbAl1rQyvJcQVa6%2BGpHZk%2Fhvz4JFgJLqsKAYc%2BH1CM2KrVus79Iwu0ujXVO0EAOoKE1bUEM8xTNjHkV6%2BNzQUDeS6cR3LISbW4EgAN%2FYKVFnMKOVTAc8SSRoG863JjnCGWCq0cIZ%2BS%2FRfqq%2B8T0ad2r4Km7xpBhOMtOqe8%2Bhbc1hJp%2BlWSgHdrBe%2Be18z%2B7RcknAOmlpMURBxDDXVtJhejnktIFCfE%2FmJiqI9UtykuripgtNepN5v2cDrDCBbTetuSAJuwdv%2FPlxagAVY0UGFyOZOE8SCaavxhybxw%2B%2BDP0dawuuW1KntbU08hRVVNHnmdYN6dcl%2FncMNWI%2F8EGOqUBm6p98B2xG3BqkOgwPMhufeteQFOCSLY1zVOhYD3NfolAbHtxBaSIpiyXGMIDUXuIl4DRvzs1qxJKSDau0jB%2B2fk6EZN8GCQ4Q%2B0umQWT8wvk7njsdxcIfyTU1fuB%2BL4Rzrc1ZDh%2BwBUVqVncmtLi7yu53z2AIuA06PBa2N7ZiV%2BFK%2FiwDalTUObVMDUrD23ZrsGbL6YqsZ3aeJO2fy4xn1EVRuPX&X-Amz-Signature=f80a3aced7a07b3eefa87d5eeffb028bccdcf2d94f496a0f698e05a2b3f9c240&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4GULHG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCF15vOGDyEphwkgamkHNiBkXRr%2Bjw6z43PGWzXQ96PJwIgaOOVOW1kIInUaf8Rg0z8MpWeX%2BkzxL%2BwmbtURpJVGNwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKpykJoKQzm8%2B%2BqLyrcA7SMSBTOG4wByJ4nIM6Y0wi4Dk4M%2FEMnkXk1WU8d8qSZRW9xSKsy2UlRTB276SU7N2MJlsz0LymBpqB65rJ3WPY28aJEEFfdwUg6CpaUkIUuB%2Fm5Z5yMCjg%2BOODbNK0VZsywzCpVyq7IaVoNGJDoMyUQnWm9aU5D1yJD4Du%2FyTL5mxRz35a7sJpAhu4iyL5vNdimakEGCgLAewW2VgynaUlpSJ5rsE7LBGe%2BAa4rBVsL%2F7oIXPAovYez%2BE8%2B%2BZb43ZeAXX8g%2FUvfy45LPuge85zGfkq%2Fl3G5fofdph8zQ4s5atx8PYbAl1rQyvJcQVa6%2BGpHZk%2Fhvz4JFgJLqsKAYc%2BH1CM2KrVus79Iwu0ujXVO0EAOoKE1bUEM8xTNjHkV6%2BNzQUDeS6cR3LISbW4EgAN%2FYKVFnMKOVTAc8SSRoG863JjnCGWCq0cIZ%2BS%2FRfqq%2B8T0ad2r4Km7xpBhOMtOqe8%2Bhbc1hJp%2BlWSgHdrBe%2Be18z%2B7RcknAOmlpMURBxDDXVtJhejnktIFCfE%2FmJiqI9UtykuripgtNepN5v2cDrDCBbTetuSAJuwdv%2FPlxagAVY0UGFyOZOE8SCaavxhybxw%2B%2BDP0dawuuW1KntbU08hRVVNHnmdYN6dcl%2FncMNWI%2F8EGOqUBm6p98B2xG3BqkOgwPMhufeteQFOCSLY1zVOhYD3NfolAbHtxBaSIpiyXGMIDUXuIl4DRvzs1qxJKSDau0jB%2B2fk6EZN8GCQ4Q%2B0umQWT8wvk7njsdxcIfyTU1fuB%2BL4Rzrc1ZDh%2BwBUVqVncmtLi7yu53z2AIuA06PBa2N7ZiV%2BFK%2FiwDalTUObVMDUrD23ZrsGbL6YqsZ3aeJO2fy4xn1EVRuPX&X-Amz-Signature=15c50f97b7d802f013aceda902fe73ce9451173a9bae52ed39f88047df87725b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4GULHG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCF15vOGDyEphwkgamkHNiBkXRr%2Bjw6z43PGWzXQ96PJwIgaOOVOW1kIInUaf8Rg0z8MpWeX%2BkzxL%2BwmbtURpJVGNwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKpykJoKQzm8%2B%2BqLyrcA7SMSBTOG4wByJ4nIM6Y0wi4Dk4M%2FEMnkXk1WU8d8qSZRW9xSKsy2UlRTB276SU7N2MJlsz0LymBpqB65rJ3WPY28aJEEFfdwUg6CpaUkIUuB%2Fm5Z5yMCjg%2BOODbNK0VZsywzCpVyq7IaVoNGJDoMyUQnWm9aU5D1yJD4Du%2FyTL5mxRz35a7sJpAhu4iyL5vNdimakEGCgLAewW2VgynaUlpSJ5rsE7LBGe%2BAa4rBVsL%2F7oIXPAovYez%2BE8%2B%2BZb43ZeAXX8g%2FUvfy45LPuge85zGfkq%2Fl3G5fofdph8zQ4s5atx8PYbAl1rQyvJcQVa6%2BGpHZk%2Fhvz4JFgJLqsKAYc%2BH1CM2KrVus79Iwu0ujXVO0EAOoKE1bUEM8xTNjHkV6%2BNzQUDeS6cR3LISbW4EgAN%2FYKVFnMKOVTAc8SSRoG863JjnCGWCq0cIZ%2BS%2FRfqq%2B8T0ad2r4Km7xpBhOMtOqe8%2Bhbc1hJp%2BlWSgHdrBe%2Be18z%2B7RcknAOmlpMURBxDDXVtJhejnktIFCfE%2FmJiqI9UtykuripgtNepN5v2cDrDCBbTetuSAJuwdv%2FPlxagAVY0UGFyOZOE8SCaavxhybxw%2B%2BDP0dawuuW1KntbU08hRVVNHnmdYN6dcl%2FncMNWI%2F8EGOqUBm6p98B2xG3BqkOgwPMhufeteQFOCSLY1zVOhYD3NfolAbHtxBaSIpiyXGMIDUXuIl4DRvzs1qxJKSDau0jB%2B2fk6EZN8GCQ4Q%2B0umQWT8wvk7njsdxcIfyTU1fuB%2BL4Rzrc1ZDh%2BwBUVqVncmtLi7yu53z2AIuA06PBa2N7ZiV%2BFK%2FiwDalTUObVMDUrD23ZrsGbL6YqsZ3aeJO2fy4xn1EVRuPX&X-Amz-Signature=97306eedeb1c82019a90d8add1614c3eeb6eb7781ddb930289466f607968d5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4YVTAX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIBxHJclrLaz4VjRbpuYSoNbxNQnYEu4zCH379Ki3rfLQAiEA%2BYaEiHwdflz6aUaMpzBgc%2FBypWoq%2FFCb%2BEhG5lHcDvcq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAbwsyycKKFTtEr32CrcA63ewcQzyJAkNApLRQPgjGzllWftit%2BEw%2FzUl5%2BU6jusvN2X1yy43OkVUByYzC83D4%2BzVzgUVZKTstVSse6pP%2FbMq0pm3jYL8S1FLZmUsnL5BsthKI8pHHFzTxteSOVWvSFg%2Bpvq1XaBP7zJfepGpQtFbWHpqcHaPySF%2B5kbrAabBme9gdfFkpM5kwmg0RA%2F%2FRPtmdTV0cWrngnNWYw67DFkTziVM6kjBAl%2F3GsT437YkkD%2B7EMi3HkjUc74Dj9s19XUZwcx8YMUmW%2BJmnKaqAMU1Hu6FaWAtEm52BTbyCUBLZJnPtDxNymtTCZ8gOT%2FVUcA6IV7%2FYirIja%2B6ERHonGHmpPn9rralsbYrJhr51IO0EbiO9sk6hkmb6YDEoaYdeQlia%2FtpRL8DMD0lfRvcHVptS4caRZU2hJA2V4HXNqW8n0fMgW7TYT5yLU6n9OEgfu4jU5P0%2FgW791IuDZgGbS6NV3Qm4P%2BAymIoGvZNf5pgaYbIVIlURPebcHZkN2xGiOoPK6imuvg6h8QQ9LxcvDoYEz86comZiyyku7xcMmlk4jAzHgNLgoU%2BHZWkvvxrOsiK80r3WTiN2uG8mewpsCz41LYp%2BsX%2Fm6y0%2FpspEyt2wXQbfAdCpglKj7aMLuI%2F8EGOqUBUFop%2FEyd045NIQwYO0z350pd6OdM719%2FLpUU0agOLvYKdJT544MKVQPm3VhOw9TdUXhtTlMLWK5heFFIqanFG5UiAxyiZyUsdtPDynyOghm9viv4tN5WOYb3DQypZhGtM5phh1%2ByYMRNGgJyv%2Fbfs6CWdhuJROVGJNTQ3N18D1cdVeLmPBvsiDwyyxQSa3hsnKU%2F2bvLDMUfBznoI4uDg1RkQxFy&X-Amz-Signature=fd000ee362c51904ddb6cd9f710d22bec2b13e59c87961fb607a4dc709ecf8ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCIMYYL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDWhUpi3D%2BaBsrgXZxwHOYiLJ%2FEA5w1gsC56WNKSkP7hQIhALkQJKx4kTWxDXF5Ei0y5C3nzITIeYoOmpJfKaJmKZBZKv8DCCYQABoMNjM3NDIzMTgzODA1Igxniq8RWnFffOByPdUq3ANMA3inj1%2Foc%2B0orNHOXAoFIXZMVcixueJS%2F3c6k2t7KyQkfcfULNAnjrESn3P5jdTJW4ZsT4%2B7%2Bhr%2FedmNfSRwKPdFizNsEGZJRbDHgXQh8yPnUbFfQVammfgriO3kydl%2BFnic3fiY2hPu2FpJIkb2XU4M0ocIZWW99RhRXokybO6B%2FQmYVyCYQ46vfamFaWvRm%2BrUui8IxA324CCCBgiqH%2BMaKl5hguurO2WSRUxBlovZ8xv%2F85CZg%2Bif5L%2FiZJykoQiXpA6l7%2BRGnruQFPyj8QfJsltYIa%2BYphXnX%2FPlc4iU5yh7sCTz928GC8wy0dlwir73%2FypotcbprFXGJGxMuKbTcFqkSRR0F5HfX85t1r8OD%2FPI7kcj2xiVKjsXBYUhAed3aPotbMfZx1K7OunWdYy7TuwVJ%2FkyuX3qGTnOBKlvdn3%2FlqJPiASBaotU7GFzQFC6Z9XlAoHrBwCJQo93969DZBFVhEe%2B1hRslm0AkHswqEeFP9RnPSETelZB%2F%2Bsw84vIJv0SDN16B8Wq1EFWUeVJK6rFfHXL%2B%2BCxodNg8QScCBser8bww4WOwqh0LTtp01UmYLxU5iTVytsX5JSCXdabEEVDW43WnhdXjTxOxeVaVgb2TKNfPl56cjD0mv%2FBBjqkAQVcBWfqDh2khRbrjMZ9zQTrSsd99JnXDbfNSVICY5jKSWnUI9TSXrel6XRuC%2BL%2FzyYeLstu%2FSZ29aLIUYVKMOOuLA5uI4KlOD4sD5pvn7YHvSZmuqc8chUJPg0iHJDU%2FCVO%2FBg7tYDHs3o5emkd9jywJYGh1tZxVR5e3ds1KOlsU0Sx00cVIljqZI2ou3iZxzB8Q7TOI70JSdcRPwrCzaFn5dPJ&X-Amz-Signature=7e4d80d2ce892f16a89efee299578cadc171a020bb8c1d6127f4c9910a39d88b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4GULHG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCF15vOGDyEphwkgamkHNiBkXRr%2Bjw6z43PGWzXQ96PJwIgaOOVOW1kIInUaf8Rg0z8MpWeX%2BkzxL%2BwmbtURpJVGNwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKpykJoKQzm8%2B%2BqLyrcA7SMSBTOG4wByJ4nIM6Y0wi4Dk4M%2FEMnkXk1WU8d8qSZRW9xSKsy2UlRTB276SU7N2MJlsz0LymBpqB65rJ3WPY28aJEEFfdwUg6CpaUkIUuB%2Fm5Z5yMCjg%2BOODbNK0VZsywzCpVyq7IaVoNGJDoMyUQnWm9aU5D1yJD4Du%2FyTL5mxRz35a7sJpAhu4iyL5vNdimakEGCgLAewW2VgynaUlpSJ5rsE7LBGe%2BAa4rBVsL%2F7oIXPAovYez%2BE8%2B%2BZb43ZeAXX8g%2FUvfy45LPuge85zGfkq%2Fl3G5fofdph8zQ4s5atx8PYbAl1rQyvJcQVa6%2BGpHZk%2Fhvz4JFgJLqsKAYc%2BH1CM2KrVus79Iwu0ujXVO0EAOoKE1bUEM8xTNjHkV6%2BNzQUDeS6cR3LISbW4EgAN%2FYKVFnMKOVTAc8SSRoG863JjnCGWCq0cIZ%2BS%2FRfqq%2B8T0ad2r4Km7xpBhOMtOqe8%2Bhbc1hJp%2BlWSgHdrBe%2Be18z%2B7RcknAOmlpMURBxDDXVtJhejnktIFCfE%2FmJiqI9UtykuripgtNepN5v2cDrDCBbTetuSAJuwdv%2FPlxagAVY0UGFyOZOE8SCaavxhybxw%2B%2BDP0dawuuW1KntbU08hRVVNHnmdYN6dcl%2FncMNWI%2F8EGOqUBm6p98B2xG3BqkOgwPMhufeteQFOCSLY1zVOhYD3NfolAbHtxBaSIpiyXGMIDUXuIl4DRvzs1qxJKSDau0jB%2B2fk6EZN8GCQ4Q%2B0umQWT8wvk7njsdxcIfyTU1fuB%2BL4Rzrc1ZDh%2BwBUVqVncmtLi7yu53z2AIuA06PBa2N7ZiV%2BFK%2FiwDalTUObVMDUrD23ZrsGbL6YqsZ3aeJO2fy4xn1EVRuPX&X-Amz-Signature=512ee1ef402a6cb319c36ee985e97f88cae957b88ae6fa8abbf68bdffbfb9962&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
