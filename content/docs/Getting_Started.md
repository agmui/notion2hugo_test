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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMARWUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIH1isePi49hl%2BtRtQezibgN5aS%2B9xhjR5Pf%2B%2FEPf1k2DAiAD9uoUwBSRmphPO89%2FRZhbi3H5jqxfivVCUA7Y2pauZyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtnzpBAEl24yyWsDYKtwDIlV6Lmil4%2FzvpjkH8ULYF%2B%2FKunOjOZkEDP0jq9lUFd%2BOvqDovZ5IMBe1C0SuL9Cqg2L5moS0c6shn297VGoJOesslfXiSbY0POVacNMpLWRqLiLUCbp6tBUcORERRCTp9iIEubBaBEZJm8BGDbUuOSbRLG0W7ifqgO40YTgk%2BAq%2BDt5BzirDRDCqybEN8fMHGY3bxJi1a7X7W5hBMeM2vMLfaqyjyJ29enJuVVIgOoSRL6DUqGd8Y3LpwZJxqPdX9FkRGjRvsef7f4PyDnfp0p0NJHTvaaUcfL4MiOkw6cWwnsRezFHtoN9gqBiJf0HFDYwCQig1hl0ZJpHm2cLiXF%2FjLAoaO2yg2bvt49tCIE6VRI7oe6M0%2FSar1lnbfrOtxLEz%2F63LOIKK0wHNrOJIyhJ8SBeezvTDzqZXTUtVJreZvLnGR8oKSK8Use7GsgbZcITDhSzAkkdagzYF5OBdIiE4AYcD8Ek1l7PiYsYlLNUobZYNAfGwY03AGoUPpTpngvksKUHbwpyJTXCbzN52m0Wy%2Bc%2B%2BslYizn6%2B8Zkem728EHIEAoXxdPFSrezqBexZ3bcdYp2Dzoa5tFci%2BdZe2%2BL4FX1A84vDnCt2tvgX0FK0EUAGg0a3cwQldF0w%2FfaQxAY6pgHnUXkKvHdm3YacXp7wV%2Fk3CkFFEb96cEJy6J0xDURG5y8Bc0a2%2BAOSDbaJx%2F0%2Fzu3u3QVAY67tpdTgu7PoW29%2FIbHdPjN2vMysn7Yp%2Biu3ER7YS8NwrREEYB8JIfHYuoQhlnmxYQkK8a1ZFgri7EUjxVphPiWKORzrwE7e5pHcTeJtwms83TsISj6hcWFSstpCcTvJn7sf1AYjziGKiUSpOhPqdiyV&X-Amz-Signature=3bec0ba84098b6ff8c079e43b320392937704f0eb8cdc6819c323347705c9467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMARWUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIH1isePi49hl%2BtRtQezibgN5aS%2B9xhjR5Pf%2B%2FEPf1k2DAiAD9uoUwBSRmphPO89%2FRZhbi3H5jqxfivVCUA7Y2pauZyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtnzpBAEl24yyWsDYKtwDIlV6Lmil4%2FzvpjkH8ULYF%2B%2FKunOjOZkEDP0jq9lUFd%2BOvqDovZ5IMBe1C0SuL9Cqg2L5moS0c6shn297VGoJOesslfXiSbY0POVacNMpLWRqLiLUCbp6tBUcORERRCTp9iIEubBaBEZJm8BGDbUuOSbRLG0W7ifqgO40YTgk%2BAq%2BDt5BzirDRDCqybEN8fMHGY3bxJi1a7X7W5hBMeM2vMLfaqyjyJ29enJuVVIgOoSRL6DUqGd8Y3LpwZJxqPdX9FkRGjRvsef7f4PyDnfp0p0NJHTvaaUcfL4MiOkw6cWwnsRezFHtoN9gqBiJf0HFDYwCQig1hl0ZJpHm2cLiXF%2FjLAoaO2yg2bvt49tCIE6VRI7oe6M0%2FSar1lnbfrOtxLEz%2F63LOIKK0wHNrOJIyhJ8SBeezvTDzqZXTUtVJreZvLnGR8oKSK8Use7GsgbZcITDhSzAkkdagzYF5OBdIiE4AYcD8Ek1l7PiYsYlLNUobZYNAfGwY03AGoUPpTpngvksKUHbwpyJTXCbzN52m0Wy%2Bc%2B%2BslYizn6%2B8Zkem728EHIEAoXxdPFSrezqBexZ3bcdYp2Dzoa5tFci%2BdZe2%2BL4FX1A84vDnCt2tvgX0FK0EUAGg0a3cwQldF0w%2FfaQxAY6pgHnUXkKvHdm3YacXp7wV%2Fk3CkFFEb96cEJy6J0xDURG5y8Bc0a2%2BAOSDbaJx%2F0%2Fzu3u3QVAY67tpdTgu7PoW29%2FIbHdPjN2vMysn7Yp%2Biu3ER7YS8NwrREEYB8JIfHYuoQhlnmxYQkK8a1ZFgri7EUjxVphPiWKORzrwE7e5pHcTeJtwms83TsISj6hcWFSstpCcTvJn7sf1AYjziGKiUSpOhPqdiyV&X-Amz-Signature=688cc92e1ad6b3e6aa325dd093db820927330ca3319c95c14a47a049707fe891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMARWUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIH1isePi49hl%2BtRtQezibgN5aS%2B9xhjR5Pf%2B%2FEPf1k2DAiAD9uoUwBSRmphPO89%2FRZhbi3H5jqxfivVCUA7Y2pauZyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtnzpBAEl24yyWsDYKtwDIlV6Lmil4%2FzvpjkH8ULYF%2B%2FKunOjOZkEDP0jq9lUFd%2BOvqDovZ5IMBe1C0SuL9Cqg2L5moS0c6shn297VGoJOesslfXiSbY0POVacNMpLWRqLiLUCbp6tBUcORERRCTp9iIEubBaBEZJm8BGDbUuOSbRLG0W7ifqgO40YTgk%2BAq%2BDt5BzirDRDCqybEN8fMHGY3bxJi1a7X7W5hBMeM2vMLfaqyjyJ29enJuVVIgOoSRL6DUqGd8Y3LpwZJxqPdX9FkRGjRvsef7f4PyDnfp0p0NJHTvaaUcfL4MiOkw6cWwnsRezFHtoN9gqBiJf0HFDYwCQig1hl0ZJpHm2cLiXF%2FjLAoaO2yg2bvt49tCIE6VRI7oe6M0%2FSar1lnbfrOtxLEz%2F63LOIKK0wHNrOJIyhJ8SBeezvTDzqZXTUtVJreZvLnGR8oKSK8Use7GsgbZcITDhSzAkkdagzYF5OBdIiE4AYcD8Ek1l7PiYsYlLNUobZYNAfGwY03AGoUPpTpngvksKUHbwpyJTXCbzN52m0Wy%2Bc%2B%2BslYizn6%2B8Zkem728EHIEAoXxdPFSrezqBexZ3bcdYp2Dzoa5tFci%2BdZe2%2BL4FX1A84vDnCt2tvgX0FK0EUAGg0a3cwQldF0w%2FfaQxAY6pgHnUXkKvHdm3YacXp7wV%2Fk3CkFFEb96cEJy6J0xDURG5y8Bc0a2%2BAOSDbaJx%2F0%2Fzu3u3QVAY67tpdTgu7PoW29%2FIbHdPjN2vMysn7Yp%2Biu3ER7YS8NwrREEYB8JIfHYuoQhlnmxYQkK8a1ZFgri7EUjxVphPiWKORzrwE7e5pHcTeJtwms83TsISj6hcWFSstpCcTvJn7sf1AYjziGKiUSpOhPqdiyV&X-Amz-Signature=d03bfc85b2cea06360af6a64c1d03cf03457da70bcf1429c5a785abd23b8ba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEZG6DXJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD%2BVMCQRPPq3V%2BZGGFY95rMPjtpqFharUVaCpr5pdvj%2BAIgBwPmZhGiCZ%2BpW%2B9B0CprQ6n5UcTkvx%2FwgVjGwD50rNgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGrjPcgE%2Fd0wXT2ZjyrcA2%2FJtJt%2Br7vo2WZd230qXTL9hhL5zmRB68KNDr1okqEdRxxCggmeeTf%2BCQnYXMlVTgZw0SPhkuGeEwhYVh3MYUlNJxPYbQDoY5XpokSaP1xM5mJkan6LdX1QRHJr5Zy0UijflHRgrG%2BYkRolKfOaVDJPwU5XOPsy4MYYX%2FaUJG1aupooZp%2FggngCVyEGP%2BiEJTJp9ygDJFsGM6Er1KbCWV%2BYRxcXA1vXdv2Vs%2FwRsbu5BdSU%2BRiFBK%2FvbErKuHFE5zJv2%2FiDDjrEeCimnCVBJGAZ61p09RC9B3KIPQL0DF%2F4%2FogCRUcpQHYRVR33DdTJYtwZd43ljCMkrK2plv%2F2xgG7ddbGPcwO4PIyFGYDKLKUOAKI5Zay0%2FFHNjBJ4ny0B5Nu5XgMqHE2aTq7zppCUhvDczhX1x1mhXHI3e0O%2B1vQq98L6SRJd4p%2FFJ6LYwVtY9s0%2BqXSTHI7dn9iN9lyUeHpC5fYfRObn1rnJCsuxcBZkMslRdE%2BgZEDqT57lpmt9Ktpb1kjRUOWf66Rx2V9uJHSfEFy%2FRg%2FLepW6rs3dgdaaQQMHljf9yxKt%2Bs0psoPWEuJn4%2FkEMXzb5gk9oFMFwX%2BePkpsQOwtRWMvYKoioQkoagNeNXhN3niWjBxMPj0kMQGOqUBGrZF2Zka2xZ1fxefOQszmBzgwKFFPpYnmYuYbnScW92pp0MruGYObi4ziFePQQpTlr%2B85mBalFEuv0MfiBmUgdHZSj9c4PFNYuDA39csa7bv1jXWy%2B%2FpO2JTQpUKCltfZhwr2w5iGlGlMslaVr5yNWL2F%2FO%2BhvNBtqlU70xnJb%2F%2FBG%2B7W1ACvw7QBCv5gzW58e1JY%2BKJUOfl7w0S6oLOZF4BF%2F2u&X-Amz-Signature=9f9851532d9c1081a2569c1d1d98dbdd359a8bdbb34be879a66a32bb06aa2c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ETQ7Q7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDnfhkynRZ%2Fb3Jm7%2BBbJkEwDa%2FCW25dAxn262O%2BegqfPgIhAMKgYjbB8dAqvFfUXnAj5uC8k5M2rvAn8BXGeoTHX5DXKv8DCFMQABoMNjM3NDIzMTgzODA1Igw4FL1Fas90Jc9T%2Bowq3AORvng%2BB%2FF4jVDU1qC1przLEbZdt6dQtXfG6enoKHzpwg%2BZeE6ik4AED%2FbfUnv46XxnYQzeWEOj9jWO5JwIVcAZz%2FfH%2FUv2UH2cBaeu3WGIIewhpQkEUqCoV2yb1w6NEFL0rG4QqivVVqUhGdKkv%2FEzi6BzQYBlqYuCWVzRa62Sg1SVtgfQ0KHzjKb86yDk8%2BIWSmTS54b6XzRZF7TNNbKA9hNwYxCnWCyL8JvuARDKCSsHtUZ1Fg5ekWztYJq7z04f26Q%2Bx4y8iCqJFzb60AyLLEOFzzJZ7UOdvjnRa4NK1cnZmLtaN8VGBcaySagZtBRDgM0h8dpcs9w7Q5yKxWxg%2FSahUTo3Tdvhg1Zt09fsCPR0aNqMQAzrJSvAmuubKd751DrpzNMtU1WYfD1GyIVtn52sUQQDLVIfQr8B8KYWJ9uO1c5PqLqWqeWCgQ6NztF7vu%2BV9tDOi7HZrOCDaDqNnDmRo0kHj2oCxvAPM%2FaXaFSBkvT2F606wnk6i8zAKfsC7SvDd3%2F904PKyB9HlJ6LD0UD1skHzCtyjPJHDY%2FOdc64OWaGrn0g%2Ba1C28USsgrOedPEHWQ4h5aihuD31P7vN3ZiT%2FTvzyaoQ49yww2huIqTiAzuNuO0rfKaTzDE9JDEBjqkAcc9cPu%2BkcBhKo2ItpaeoYUsWuYuMPmAFbZMV5o4VeeYbve2qL0bN4pXWayPg1G4NizpdjLKk1wJmFj9lgXfexPRXSAh96RvvKXbPNJfeGX996ktz7rZPJ4vS5KuInETgtSI%2BAlJNUukMQ%2BCuJAvaBCCpnsNhBiNPQFEhRyB25XKaV5itm6RKiy37TVsOgnHzTCsqpx0%2FuGSyN8nvzAA8SgPYZJt&X-Amz-Signature=6ac77037dcd899332ca7f5d24ae32e2c2501341d4dca1f8c63aff0537a3892f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMARWUK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIH1isePi49hl%2BtRtQezibgN5aS%2B9xhjR5Pf%2B%2FEPf1k2DAiAD9uoUwBSRmphPO89%2FRZhbi3H5jqxfivVCUA7Y2pauZyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtnzpBAEl24yyWsDYKtwDIlV6Lmil4%2FzvpjkH8ULYF%2B%2FKunOjOZkEDP0jq9lUFd%2BOvqDovZ5IMBe1C0SuL9Cqg2L5moS0c6shn297VGoJOesslfXiSbY0POVacNMpLWRqLiLUCbp6tBUcORERRCTp9iIEubBaBEZJm8BGDbUuOSbRLG0W7ifqgO40YTgk%2BAq%2BDt5BzirDRDCqybEN8fMHGY3bxJi1a7X7W5hBMeM2vMLfaqyjyJ29enJuVVIgOoSRL6DUqGd8Y3LpwZJxqPdX9FkRGjRvsef7f4PyDnfp0p0NJHTvaaUcfL4MiOkw6cWwnsRezFHtoN9gqBiJf0HFDYwCQig1hl0ZJpHm2cLiXF%2FjLAoaO2yg2bvt49tCIE6VRI7oe6M0%2FSar1lnbfrOtxLEz%2F63LOIKK0wHNrOJIyhJ8SBeezvTDzqZXTUtVJreZvLnGR8oKSK8Use7GsgbZcITDhSzAkkdagzYF5OBdIiE4AYcD8Ek1l7PiYsYlLNUobZYNAfGwY03AGoUPpTpngvksKUHbwpyJTXCbzN52m0Wy%2Bc%2B%2BslYizn6%2B8Zkem728EHIEAoXxdPFSrezqBexZ3bcdYp2Dzoa5tFci%2BdZe2%2BL4FX1A84vDnCt2tvgX0FK0EUAGg0a3cwQldF0w%2FfaQxAY6pgHnUXkKvHdm3YacXp7wV%2Fk3CkFFEb96cEJy6J0xDURG5y8Bc0a2%2BAOSDbaJx%2F0%2Fzu3u3QVAY67tpdTgu7PoW29%2FIbHdPjN2vMysn7Yp%2Biu3ER7YS8NwrREEYB8JIfHYuoQhlnmxYQkK8a1ZFgri7EUjxVphPiWKORzrwE7e5pHcTeJtwms83TsISj6hcWFSstpCcTvJn7sf1AYjziGKiUSpOhPqdiyV&X-Amz-Signature=23fcdb1414ed78f408c3d1ccbbebf94a470111d2cfe6c965a3099827eb6f76ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
