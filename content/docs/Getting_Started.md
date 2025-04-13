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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPEQPK4N%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCePlZgyU2KvgAGzYIFsz1KnT7Q6va4iGTff1Qrj%2B%2BV%2FwIhAJpMzXVE4Ruvzn%2Bj%2ByDO3bi8GC3v0AyBGBQS80%2F52hQrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTN4ZRCdfiOph4uEq3AP30HxUX50Dn4zBS%2FcKxEcJkBn7Z16ub%2FnXTw%2FSxPX2Aa%2FJWOO8gd74A0N8WEEVblzEv8nskPvzL%2BajYkjdbXzpdae5l6ipVlqAhnRnZCbyJuHInSrdilEBGcJhl5cALtKNsAI7uPa8XZVqoGpq4B3W7F9q0jONTcgJXraUxxaxyzUszyjVC6VpYMylS97spgY8yGEuJGSK0Yyx3%2B6CBk3oLh1MgFrSfBcIAj38ehOoRDVSr6c5lmiND9vv7V62U7WJnLni7Oy32PsGuJvMEA3Vy0nQY3aqHRXQrBAaOoyN2BejlxieVtJ%2Bg%2BP5fQd%2FUZDu6m39QSbI48%2BOR%2BH4mQyT%2BC8mLaNa77hJCw4k%2Bdd1PU2tB8whTF1yPMUx2mYhOAJF4ZFPNOgTsGZLcNrzGsUizUXa2WULUw1kHg0sWpFjM2LwYDZXYgFkpIa3tm0AgYAA4AkZsdESYONaV1HZbqEvbaGav%2BiZuWNW9wVg52%2B3Av71siOCkVhWM3epvWSYBb6woTmdLKcVJXKLnGpD1uNvdceFwlDhIdsixWKSF0IqhSbWR9XdhUtXnj72ETnP1QGljkl22XFER971TixUtPAb%2BbX2hVu%2BQNlQYcfowmLnftMyLzihyoldKG%2BIvDDU4O2%2FBjqkAerdbfsIFQtIWhTB2%2FeupUC2t0sm0KfUZ9tS0m0IDUcwIJoQcztQ7MHITq2IJDHVp55Kp8KK3oXuHQBj0gqRzi5sJeGfWOw1rvpTnkh9Bv%2FTkBzJsS%2BBRse7kAiztT6O72xphUbMPJndYo28pJpUGmH5ujQT%2BXtxGOCgFP%2B3faPcYoZU8VAHXhKhyeSaA5%2FfezACBMSPuop63P1S%2BKFUWqnrF6Hh&X-Amz-Signature=0f4bea60a05944a772b28e8b3fa4f4c37612b64008ab4e7ef1cfb1e9190fe1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPEQPK4N%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCePlZgyU2KvgAGzYIFsz1KnT7Q6va4iGTff1Qrj%2B%2BV%2FwIhAJpMzXVE4Ruvzn%2Bj%2ByDO3bi8GC3v0AyBGBQS80%2F52hQrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTN4ZRCdfiOph4uEq3AP30HxUX50Dn4zBS%2FcKxEcJkBn7Z16ub%2FnXTw%2FSxPX2Aa%2FJWOO8gd74A0N8WEEVblzEv8nskPvzL%2BajYkjdbXzpdae5l6ipVlqAhnRnZCbyJuHInSrdilEBGcJhl5cALtKNsAI7uPa8XZVqoGpq4B3W7F9q0jONTcgJXraUxxaxyzUszyjVC6VpYMylS97spgY8yGEuJGSK0Yyx3%2B6CBk3oLh1MgFrSfBcIAj38ehOoRDVSr6c5lmiND9vv7V62U7WJnLni7Oy32PsGuJvMEA3Vy0nQY3aqHRXQrBAaOoyN2BejlxieVtJ%2Bg%2BP5fQd%2FUZDu6m39QSbI48%2BOR%2BH4mQyT%2BC8mLaNa77hJCw4k%2Bdd1PU2tB8whTF1yPMUx2mYhOAJF4ZFPNOgTsGZLcNrzGsUizUXa2WULUw1kHg0sWpFjM2LwYDZXYgFkpIa3tm0AgYAA4AkZsdESYONaV1HZbqEvbaGav%2BiZuWNW9wVg52%2B3Av71siOCkVhWM3epvWSYBb6woTmdLKcVJXKLnGpD1uNvdceFwlDhIdsixWKSF0IqhSbWR9XdhUtXnj72ETnP1QGljkl22XFER971TixUtPAb%2BbX2hVu%2BQNlQYcfowmLnftMyLzihyoldKG%2BIvDDU4O2%2FBjqkAerdbfsIFQtIWhTB2%2FeupUC2t0sm0KfUZ9tS0m0IDUcwIJoQcztQ7MHITq2IJDHVp55Kp8KK3oXuHQBj0gqRzi5sJeGfWOw1rvpTnkh9Bv%2FTkBzJsS%2BBRse7kAiztT6O72xphUbMPJndYo28pJpUGmH5ujQT%2BXtxGOCgFP%2B3faPcYoZU8VAHXhKhyeSaA5%2FfezACBMSPuop63P1S%2BKFUWqnrF6Hh&X-Amz-Signature=4a590ed2f97dc9733efadb1297a637408daddb4e01f17a0fff0c81879b0ee74c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROL6L36%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEXASuH4RoIFN81j059AuCb0XH%2BatOuABKcr6BMrK2U5AiBKYa5lqLg%2FqzkKanR%2BDwiGVx%2BeFm%2F4i0CSOVokD5qCKSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEJSYmP9HbOaesi9RKtwDJzckxla46hfB1qVppza%2B2rg0ZzQy6WGL4x%2FEvGEd%2FBYqgHMTe6Mzde7k6%2FIHhERU%2B296UVb2K8LuxO8FjDXWBb%2B6HhD6O0pE3DPVHUFqsGsBqqeK5ebWI8nFI7Gak8l0qvfZoLUCDK1INoguQ7pMoDV3ODnQgQgEaGllklEDovI%2Fm5JZSN7X7tN0anqPpQ2Ww6Okb44fFxV%2FCk5cs%2FeLr0%2B3hdtljcG6GR2lovrxfSSi%2FfMAPflWJ0RDohpt8Obr8wtNp6dxGHPAtVMRb3NCA6831Jt%2B8RHh6F4Lx%2FVISX0BafjD691k4KHssMdVX0%2BYkg%2BmOJGLcThUFC2LfSMlisZzeA%2Fca64oYpTOjycB%2FjwWXbREvMkZtR85%2B4%2FW84vLL4WGMVKwkl34D%2FGlE%2FNVv5eLbVDMAisrzjubdyy2xGQ8fFeGrn5G7nt%2BuSfBsPQfoWE2waReY7Az0SmJFjBIlaTZF4gqWHiVgafuprSUntRcLumIEsNUepXhZXInWwO0DlC%2B45t9iZ5nN948X0Lnvv9txw984WSCFqNBwUfmhmPzSCo9DcAhFM2GJ2CuKejZ%2BcO0G9GVO3opd3lxjHgDd7dzaCwXZHFoydoPDfg8eVEJgXuf%2FbdHCaLsGbMw0uHtvwY6pgGYF8eFvGt72rWJoMxcqymOIT7wIv1rk4SpAXXixNskPCfG9KxCCyuanXXoYtNfzSPD%2BUV66t%2FGNS6rz2VgZYiFr32vY3v0fPBw56ansupCEgUGPyREUBKRjJrU1lkdzSloICdktN1iaIqHJGecEGO5tDkZZRfq3JtpvMi1POsOZ3JCP31uJSB7qm53fmhddLFTb10NFm4pPJACXyfN80AqUJNGPheU&X-Amz-Signature=1194bbab058cc0b7564f34f8d93f644cc2a6d31cf32a1f043a4a36fba1c6bd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P2NRTD3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDatbUiNOszHjnU6l%2BKE7Afuln8cc27Mg54HVDgSYsGzQIgTXNCQFDFlBKKeB7jIC%2BIX4k%2FbQh5M93X9vNKqtWMsRoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNroJShnCNslMu%2FrbyrcA56mFcI1xJ%2FtDSMXzbxkYISKxxABODaAfH4ujbqlJVsxC29Duh2OKZ1GRUaGbFudgqwrvTdGr339go3SPVH3MvMmEOCo2djow8UHjLfwFDajMOedbFyZHvHNIGoP0hYsFXwTQ69V5cCXgVqSkYjPZXi%2BYSYNoJw97eWduWeYMCsjj%2BIudLE4OrUgcvsmt9w07A9mEl6A2bMijuHxGj6fh5lMpeWQF8iSxKLKzupYKgbifCeai3ZJzkqucfpfP92Ym1dKQdKO5pi%2FaAyg6w1DU9qDvceD8%2FlW%2BUnaHX58olhU5Fqmg%2FiiiFJBYAqV0DddzzsHQ4ssrU5rnGluhd8qPQeP%2BXidiPRm%2FjTLTMiyOwhWiN0%2Bc3VZ7rKrKPRlEhUrj6opZHiBRUrlbQUx5i22NpZwZl%2BLZS2jHn5oVc9cw7%2BbOJkxAH%2BhKKkDDrkVB9rmt2pi61tcbpB7nhCfm4O4GRvq%2BTYlMT0hGtOSpeKuyT3NAB%2F8nPjltYbhNB08sgdPoGt0%2B%2FwCjsCNxV0ACIQISCQigxKEOE0qLMTi3FeMBlTDhCb1l6B2%2FTrSc7SmSFt9zbzBLLXc6tI1ri0bvOHta5EUCByeQ6xj8ikAcLv27CZUgCowifUCwZpLPaDFMNjg7b8GOqUBSpltUhe0faAJehik9qu1Cci4LChh%2Bc7F6hoTGW8pM6NVLnjoZ1Un48KTWW%2FJvwduwwOODsfeKJKf735Bd9WUEuUG9mSMAqI9MaLnEbRnA2AVGMJxUu4mOS8pPePHx80dz4qvVrCyfv9uSGPcHH09oPcJUpCFCsjfAn1jd6Gd7N%2Fay0MMdc27zLlkXmHJkdRGDk3h7ZrUV%2FkuK%2Bl6xkGqJ%2BmOZOlK&X-Amz-Signature=266c43b2868b44a2ab12cb0e72689840cffc10769cca3f5b3c5e4645ea03d430&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPEQPK4N%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCePlZgyU2KvgAGzYIFsz1KnT7Q6va4iGTff1Qrj%2B%2BV%2FwIhAJpMzXVE4Ruvzn%2Bj%2ByDO3bi8GC3v0AyBGBQS80%2F52hQrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTN4ZRCdfiOph4uEq3AP30HxUX50Dn4zBS%2FcKxEcJkBn7Z16ub%2FnXTw%2FSxPX2Aa%2FJWOO8gd74A0N8WEEVblzEv8nskPvzL%2BajYkjdbXzpdae5l6ipVlqAhnRnZCbyJuHInSrdilEBGcJhl5cALtKNsAI7uPa8XZVqoGpq4B3W7F9q0jONTcgJXraUxxaxyzUszyjVC6VpYMylS97spgY8yGEuJGSK0Yyx3%2B6CBk3oLh1MgFrSfBcIAj38ehOoRDVSr6c5lmiND9vv7V62U7WJnLni7Oy32PsGuJvMEA3Vy0nQY3aqHRXQrBAaOoyN2BejlxieVtJ%2Bg%2BP5fQd%2FUZDu6m39QSbI48%2BOR%2BH4mQyT%2BC8mLaNa77hJCw4k%2Bdd1PU2tB8whTF1yPMUx2mYhOAJF4ZFPNOgTsGZLcNrzGsUizUXa2WULUw1kHg0sWpFjM2LwYDZXYgFkpIa3tm0AgYAA4AkZsdESYONaV1HZbqEvbaGav%2BiZuWNW9wVg52%2B3Av71siOCkVhWM3epvWSYBb6woTmdLKcVJXKLnGpD1uNvdceFwlDhIdsixWKSF0IqhSbWR9XdhUtXnj72ETnP1QGljkl22XFER971TixUtPAb%2BbX2hVu%2BQNlQYcfowmLnftMyLzihyoldKG%2BIvDDU4O2%2FBjqkAerdbfsIFQtIWhTB2%2FeupUC2t0sm0KfUZ9tS0m0IDUcwIJoQcztQ7MHITq2IJDHVp55Kp8KK3oXuHQBj0gqRzi5sJeGfWOw1rvpTnkh9Bv%2FTkBzJsS%2BBRse7kAiztT6O72xphUbMPJndYo28pJpUGmH5ujQT%2BXtxGOCgFP%2B3faPcYoZU8VAHXhKhyeSaA5%2FfezACBMSPuop63P1S%2BKFUWqnrF6Hh&X-Amz-Signature=e1dc7435034003fd524cff6f5ec3c5a7f57248e39877900c98207dddb199b38f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
