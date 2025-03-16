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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZSV57P%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3pUqcC24rp%2BCj5YIIzw7%2Bf%2Fi6QLKtoSsXv2Yz9uUhAiEAwvL%2BOZosPhlx%2Bgv75zJZatPj1hnatKtR6KPQPvqOcxsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPrbscC8W%2Bs7RzbVFCrcA1RGgGWUlWUhaXDvpnyMSs4MSBaQHSxQzaNwDQ1AfWUu2SC4CTMKmuCy8bszb8RdgD7bPbsciOt6Cxs7abl9n2Cy3XA%2FtihB2ylYTqYnCcFR5OC3fv54D3Q%2FsURC0p%2BogFQ6GyCjPDqnF7YUAXsZ273r8pXI4K21U%2FGS28xpH6WhcnArjyqaX%2BE4K7XFFTpGtH3ST6Ov267CPraQdLghqG7EczAIqWnE6rttcxqALaJrTdb1sDMGb%2BhZv9ZuCKLkSzjnq0ozhpPI2HYJIiO1upXWk6z0FHW7qlDXuDRLJknmiG65OVVfsWA7iKS7BzFlozF8b04YLdbfRIL7EXv9jez%2B2OTQajdHIU79nBgQrYNj9ardSd7LTigQH%2FlGmk%2B2PEdYgrB%2BxLrKT4j8%2BTDUBXJv5B6TT8mxuKAiG9zZXs2Z%2B4inl%2BAFRrImvZ0VQNW6BoKwx7LsBSr1RdYBKHifwIwVgprF7Xk%2FF7I8ENLN8H3jF1AKbtaMsbAhwIjdJVjYdJnwlyaSGezw6zH%2FSS35MhuoH7fV%2FzVuAVJYI%2F%2FLioH6XNcF8228TkDuxmCbO%2FHhjzyjY1%2BvFivVhCK3dSoBgxhJO04xlm6wHUBqbsOPuYdInvAx%2BC8KEKrNdEwfMM3q2b4GOqUBddpGc%2BRU%2F1wRwVSS%2BoYhCGGcXa9oQ2LpKIXDyZuQl0Sy7QpKVyDoeM%2B4SXIApo2N5NGNG%2BPk%2BLPU0dueORRCJNwaXKdroe8s6qO%2BEyCsMZMpytBIFIROLAKYXmflxtQGkjG0SBiBnXf%2FTkSJ78tFSM2WGnehK4%2FQ5NEn0VmaM2%2FZewt42A5XCX3rtFJF6ExTV5PSlkkOu3bM4kZbHwrTReqYPuTm&X-Amz-Signature=d7eca7023ddab85033d0a659c3d0607be437e077b439e74e77faf5a1a57e5ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZSV57P%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3pUqcC24rp%2BCj5YIIzw7%2Bf%2Fi6QLKtoSsXv2Yz9uUhAiEAwvL%2BOZosPhlx%2Bgv75zJZatPj1hnatKtR6KPQPvqOcxsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPrbscC8W%2Bs7RzbVFCrcA1RGgGWUlWUhaXDvpnyMSs4MSBaQHSxQzaNwDQ1AfWUu2SC4CTMKmuCy8bszb8RdgD7bPbsciOt6Cxs7abl9n2Cy3XA%2FtihB2ylYTqYnCcFR5OC3fv54D3Q%2FsURC0p%2BogFQ6GyCjPDqnF7YUAXsZ273r8pXI4K21U%2FGS28xpH6WhcnArjyqaX%2BE4K7XFFTpGtH3ST6Ov267CPraQdLghqG7EczAIqWnE6rttcxqALaJrTdb1sDMGb%2BhZv9ZuCKLkSzjnq0ozhpPI2HYJIiO1upXWk6z0FHW7qlDXuDRLJknmiG65OVVfsWA7iKS7BzFlozF8b04YLdbfRIL7EXv9jez%2B2OTQajdHIU79nBgQrYNj9ardSd7LTigQH%2FlGmk%2B2PEdYgrB%2BxLrKT4j8%2BTDUBXJv5B6TT8mxuKAiG9zZXs2Z%2B4inl%2BAFRrImvZ0VQNW6BoKwx7LsBSr1RdYBKHifwIwVgprF7Xk%2FF7I8ENLN8H3jF1AKbtaMsbAhwIjdJVjYdJnwlyaSGezw6zH%2FSS35MhuoH7fV%2FzVuAVJYI%2F%2FLioH6XNcF8228TkDuxmCbO%2FHhjzyjY1%2BvFivVhCK3dSoBgxhJO04xlm6wHUBqbsOPuYdInvAx%2BC8KEKrNdEwfMM3q2b4GOqUBddpGc%2BRU%2F1wRwVSS%2BoYhCGGcXa9oQ2LpKIXDyZuQl0Sy7QpKVyDoeM%2B4SXIApo2N5NGNG%2BPk%2BLPU0dueORRCJNwaXKdroe8s6qO%2BEyCsMZMpytBIFIROLAKYXmflxtQGkjG0SBiBnXf%2FTkSJ78tFSM2WGnehK4%2FQ5NEn0VmaM2%2FZewt42A5XCX3rtFJF6ExTV5PSlkkOu3bM4kZbHwrTReqYPuTm&X-Amz-Signature=bf5d5ca48fecaf81287a1f2688dff8ec6b3a8fdaa5fbf183079995243b57d715&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYEC7LL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdPEimDiqNcftbLQoiTVRVyFTV1faKGPJcDZ0ps2SUZgIgVt%2BXBR6OfdkZ4JG%2BOZyO8Vmzi%2FTyKq5duzNRiq%2BR6NIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDP9ruDq7j%2Fv6AVFygSrcA4bMpEhr2yyZUP3hG7HGW%2Fb7uEjJ82juxfch10myi06RuC5scUmAwfAqC4A0KlhZSs4MYC2JDELBxHoOkT2SeFWsy%2BvUqdMAmorAuCtz0ai8WgazdVaIdcA5JxOAvaEOo6sPSF0z3yu91ujM3ILGX1MiGYrTgNGKiCgg2D4awDkBCCsaqL28S8Z5A07K2dTYhDuXdLA2lkDHb1hCF2SDfuEKETrnKJJ18%2BOf%2BqiGE%2FXy4PgEwFTecqGwJV6P6UgvTjmoa%2FZi7JZXJRlFjvcYn57giadjvzsseN3CaASZMRrtj1tYPPGNbhbArObHtjdN8LCcnUSTFFU8lgvJhhHxh73RxAsLbb23wr2o%2BKMJTiyd9SvimG2cN%2B0ZScRCVx8VJ3F4yMD5XPPwHRdnk4%2FlSKti6w1j7bf%2F2%2FMS0vPgUigyztWDtIQMH5wfRJffPkLeTiSFSk6Bg8nlZzgJS%2BBTjSox3uZmUBretidrMsgbB7uBDX0GbL4fYLfHatRr8egYl2l61pv2n9FFahhl6KnuNGMfkZhTJdpzW%2B3jcCfRMziyTsTr1SJ%2B3xb%2BZAmcUpZbqcEDcUD4LLPWVQNKFAyPIRAGcD5shJaSQYjCRiYA%2Br09q7m39cGvQCPXbUIpMNfq2b4GOqUB84XQLSzRccr%2FMSBlG1yknRV9YgmzMp3DpQJSnlwolGHbiSahZaCTB8k31g4qchygRokb1uDtnMoiWOCTYNBhX4YduHSrB6HB9p87ynKS%2FR7pC5DEawclZdmjnbqxT3x2yTIQOVtx3QdcdM7xjPCYzh21jqciszBr5pTE5H87SLqSp643qbhi7lREN9mqMHkJ4Akv5izqAINeHhtaLDN7%2F9sXtiow&X-Amz-Signature=855d03560bf7c6bebe52feba9a680d994b97ff5f89a1a5703939d0bad803c11f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCHVMTC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCGq6G7vQGZIFtKZpx06d4pXhWYqUFhf%2B3borNWBK4iAiBEFToT5PkKv3U9M533tCmOqBIxb1rkvrFS7KgciqZ9Jyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMOdkcFDe3ClHWXPFNKtwDKMsEtXn5UOL3ugyC1EMOjwm8CL%2FRHZkFWb6inFWWJlGCHBVT6FJ7BUliGOiUARPl8f14PijBIiCc9hqrAS%2FuKfuscZmA8vsxR%2B9QUk5WKDNweV1fbc831SVsIJ81Wot5jB4zCoplJal5UR4aesnTdJLZ4OC7mqr1NLisG8uPt2I2x4waX067j55%2FdN6FP9i92YR9gfhcLwW9Pi8FmzjiEnYmQSZA0z9X92ydkbEYz%2FCwhXIa73PSLr7QYHbLvgY6BhUBRV59fi%2F4Vk7iGgebkrRVHB%2BUaTZW%2F99Y6YlsPa2QMO6PCGsUAiABn2XoqA1Ri1ckevOy7WBExwoOPuAkqoEiDBQIrrVV2ClIzxam70Vk57N74xThmOewO1dSGLqltIx376Gpb9AdLsXFqXxcw4dVZJg50CiHn7vSlSBx3vCsahOe58%2BayadLvjL1n%2FrHc%2BJJAmQrrc4ep%2F1jDNRYSRNb0LFzjyQqRzy8lQjpYYKDKbCm0r2ATOdFRhp0GmUUzbOaZC7SBZwhFSeOWVbF91YQuH9DNL4ZokOATTjonwBU1O%2B3zboaIBwISHoXBxhiiV1fVbP94xH%2BoVnsVBc1A%2FfnBTJPLETLwQHnJR6Yx8JWwsCZaypSHSycaEowhOvZvgY6pgGqyD9A3oP%2FUCcVwEHPBrvT6SlltQv1qA5nGO0bTpIQOKy9rsqatScsnlkhUv%2FNf%2FCQKebrYSKuxSm3aKs7tpIR5w4UFMzdO7OvdrliBTDPKSGur%2FWEP%2B75qfxLc6frBYZVuj7TjdkpOsrRExLKfsc0UGbxAm0AYpT8o3KYXgBR6tEHtDoIJKkQSTESc24aBXvpZXWXp3j3goWXJ2pHECMfWK0D0imh&X-Amz-Signature=7a99c220f698a860939dbc939788cb17c7105c46d776d840ddd5359e763a4b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZSV57P%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3pUqcC24rp%2BCj5YIIzw7%2Bf%2Fi6QLKtoSsXv2Yz9uUhAiEAwvL%2BOZosPhlx%2Bgv75zJZatPj1hnatKtR6KPQPvqOcxsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPrbscC8W%2Bs7RzbVFCrcA1RGgGWUlWUhaXDvpnyMSs4MSBaQHSxQzaNwDQ1AfWUu2SC4CTMKmuCy8bszb8RdgD7bPbsciOt6Cxs7abl9n2Cy3XA%2FtihB2ylYTqYnCcFR5OC3fv54D3Q%2FsURC0p%2BogFQ6GyCjPDqnF7YUAXsZ273r8pXI4K21U%2FGS28xpH6WhcnArjyqaX%2BE4K7XFFTpGtH3ST6Ov267CPraQdLghqG7EczAIqWnE6rttcxqALaJrTdb1sDMGb%2BhZv9ZuCKLkSzjnq0ozhpPI2HYJIiO1upXWk6z0FHW7qlDXuDRLJknmiG65OVVfsWA7iKS7BzFlozF8b04YLdbfRIL7EXv9jez%2B2OTQajdHIU79nBgQrYNj9ardSd7LTigQH%2FlGmk%2B2PEdYgrB%2BxLrKT4j8%2BTDUBXJv5B6TT8mxuKAiG9zZXs2Z%2B4inl%2BAFRrImvZ0VQNW6BoKwx7LsBSr1RdYBKHifwIwVgprF7Xk%2FF7I8ENLN8H3jF1AKbtaMsbAhwIjdJVjYdJnwlyaSGezw6zH%2FSS35MhuoH7fV%2FzVuAVJYI%2F%2FLioH6XNcF8228TkDuxmCbO%2FHhjzyjY1%2BvFivVhCK3dSoBgxhJO04xlm6wHUBqbsOPuYdInvAx%2BC8KEKrNdEwfMM3q2b4GOqUBddpGc%2BRU%2F1wRwVSS%2BoYhCGGcXa9oQ2LpKIXDyZuQl0Sy7QpKVyDoeM%2B4SXIApo2N5NGNG%2BPk%2BLPU0dueORRCJNwaXKdroe8s6qO%2BEyCsMZMpytBIFIROLAKYXmflxtQGkjG0SBiBnXf%2FTkSJ78tFSM2WGnehK4%2FQ5NEn0VmaM2%2FZewt42A5XCX3rtFJF6ExTV5PSlkkOu3bM4kZbHwrTReqYPuTm&X-Amz-Signature=b25ef433abf87beacbd91c53c428f097fde9559d6dbd3c217582cc3b0cfc1f05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
