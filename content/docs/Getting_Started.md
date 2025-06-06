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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBB5COF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen2c46F%2B8KQQtDXffZChRD%2FshmKT%2Fukm7FmzXr1ageAIhAL%2FMMp%2BYdRokfjzKN4tyyos02HbKSC05Er1xUkm7%2BVUhKv8DCF4QABoMNjM3NDIzMTgzODA1IgzbFuZY%2BH4cTF1RSP4q3AOPqCdgafgIKrcWfnXwulwslFcRw0GQFNxLGqTwQ9L95yazwEOY6eJUGKwIUhfAFgRyaQxHWn69OLv0qy8jdTZM4PA6eezKSxSUNrKTaeqvcSY5%2Buc%2BAYlcbAON85TgA5UKIxtc3eDgDDxyjjjJqe%2FGZHV8YjUtEdcmmSA7A4pyi8kPPK%2B6CRmYZgZNJDdd1YWfuad8U7aGLf0aKn2b5PiER8RUMMnJ8gydpPXwPHSTmDIlJm%2FbA6y8BoJkV7r6s33Emg03LVWljRgLlxEpdGTDJjdBnJeou7JlT7olhMmQ5YiGWksql11LAywa6oNVtSQOqObwfF%2BCrCIgbeDPA%2F3N0uB6rrV2o12pBfXCw2OFajrKmgP4qAI6jn7xKGAkKDT%2BWJ8AQHu78EVi9269kNRqtxqyuTRjdIQ%2Bk802at8fG3Sj659gi3WSP7OAk120ozakrxexqfy%2BVpFf8h2yWVt0x%2F5cje4Yh1cIH5pcUcBJiRosqlMPjAd2qH%2BECN23kjutdmYixrWI12Jxd6rjrEgwPro%2BnubC7nv8%2B0y1x2qUsSI5ieKAHya4LQYXVI3bitKUSaALjmr8KRtz6pm6LJInNmrptMNDppq6QeGDUfvgL7yg0wm83VjwmE%2FkxTDuvovCBjqkAUyjEd%2FLz67O2fBkBTWf0MzKbxRdvBJI6OSGWb5AQqin3sm3zGip45HoGM%2BjKsuknW8XWCu5ittWs4lb0ZlT%2FpBFAm5ujyqtE81BFc8fbHtVJm7eeHhTHGQWuQ1iI%2B%2BPh2JLtIqGZPB4GiBcNzqJIjgSnQce7SUsdXFxmwudhocfTq8MJvocwhkK9DrVeAi0qmctwyB3CAFvD77O1oMb4x3W8c7o&X-Amz-Signature=da254cdaff089294338bb2ca4ec72b668307c51449c2d5cdc264b0c7cec191a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBB5COF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen2c46F%2B8KQQtDXffZChRD%2FshmKT%2Fukm7FmzXr1ageAIhAL%2FMMp%2BYdRokfjzKN4tyyos02HbKSC05Er1xUkm7%2BVUhKv8DCF4QABoMNjM3NDIzMTgzODA1IgzbFuZY%2BH4cTF1RSP4q3AOPqCdgafgIKrcWfnXwulwslFcRw0GQFNxLGqTwQ9L95yazwEOY6eJUGKwIUhfAFgRyaQxHWn69OLv0qy8jdTZM4PA6eezKSxSUNrKTaeqvcSY5%2Buc%2BAYlcbAON85TgA5UKIxtc3eDgDDxyjjjJqe%2FGZHV8YjUtEdcmmSA7A4pyi8kPPK%2B6CRmYZgZNJDdd1YWfuad8U7aGLf0aKn2b5PiER8RUMMnJ8gydpPXwPHSTmDIlJm%2FbA6y8BoJkV7r6s33Emg03LVWljRgLlxEpdGTDJjdBnJeou7JlT7olhMmQ5YiGWksql11LAywa6oNVtSQOqObwfF%2BCrCIgbeDPA%2F3N0uB6rrV2o12pBfXCw2OFajrKmgP4qAI6jn7xKGAkKDT%2BWJ8AQHu78EVi9269kNRqtxqyuTRjdIQ%2Bk802at8fG3Sj659gi3WSP7OAk120ozakrxexqfy%2BVpFf8h2yWVt0x%2F5cje4Yh1cIH5pcUcBJiRosqlMPjAd2qH%2BECN23kjutdmYixrWI12Jxd6rjrEgwPro%2BnubC7nv8%2B0y1x2qUsSI5ieKAHya4LQYXVI3bitKUSaALjmr8KRtz6pm6LJInNmrptMNDppq6QeGDUfvgL7yg0wm83VjwmE%2FkxTDuvovCBjqkAUyjEd%2FLz67O2fBkBTWf0MzKbxRdvBJI6OSGWb5AQqin3sm3zGip45HoGM%2BjKsuknW8XWCu5ittWs4lb0ZlT%2FpBFAm5ujyqtE81BFc8fbHtVJm7eeHhTHGQWuQ1iI%2B%2BPh2JLtIqGZPB4GiBcNzqJIjgSnQce7SUsdXFxmwudhocfTq8MJvocwhkK9DrVeAi0qmctwyB3CAFvD77O1oMb4x3W8c7o&X-Amz-Signature=b8759cd5ad30e86cccc956b7c16a0d32e3bbfba6c8d8076f3199aec58405990c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBB5COF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen2c46F%2B8KQQtDXffZChRD%2FshmKT%2Fukm7FmzXr1ageAIhAL%2FMMp%2BYdRokfjzKN4tyyos02HbKSC05Er1xUkm7%2BVUhKv8DCF4QABoMNjM3NDIzMTgzODA1IgzbFuZY%2BH4cTF1RSP4q3AOPqCdgafgIKrcWfnXwulwslFcRw0GQFNxLGqTwQ9L95yazwEOY6eJUGKwIUhfAFgRyaQxHWn69OLv0qy8jdTZM4PA6eezKSxSUNrKTaeqvcSY5%2Buc%2BAYlcbAON85TgA5UKIxtc3eDgDDxyjjjJqe%2FGZHV8YjUtEdcmmSA7A4pyi8kPPK%2B6CRmYZgZNJDdd1YWfuad8U7aGLf0aKn2b5PiER8RUMMnJ8gydpPXwPHSTmDIlJm%2FbA6y8BoJkV7r6s33Emg03LVWljRgLlxEpdGTDJjdBnJeou7JlT7olhMmQ5YiGWksql11LAywa6oNVtSQOqObwfF%2BCrCIgbeDPA%2F3N0uB6rrV2o12pBfXCw2OFajrKmgP4qAI6jn7xKGAkKDT%2BWJ8AQHu78EVi9269kNRqtxqyuTRjdIQ%2Bk802at8fG3Sj659gi3WSP7OAk120ozakrxexqfy%2BVpFf8h2yWVt0x%2F5cje4Yh1cIH5pcUcBJiRosqlMPjAd2qH%2BECN23kjutdmYixrWI12Jxd6rjrEgwPro%2BnubC7nv8%2B0y1x2qUsSI5ieKAHya4LQYXVI3bitKUSaALjmr8KRtz6pm6LJInNmrptMNDppq6QeGDUfvgL7yg0wm83VjwmE%2FkxTDuvovCBjqkAUyjEd%2FLz67O2fBkBTWf0MzKbxRdvBJI6OSGWb5AQqin3sm3zGip45HoGM%2BjKsuknW8XWCu5ittWs4lb0ZlT%2FpBFAm5ujyqtE81BFc8fbHtVJm7eeHhTHGQWuQ1iI%2B%2BPh2JLtIqGZPB4GiBcNzqJIjgSnQce7SUsdXFxmwudhocfTq8MJvocwhkK9DrVeAi0qmctwyB3CAFvD77O1oMb4x3W8c7o&X-Amz-Signature=c2718a4efb5a129b93280dde52f751adc4d1e9e82d8859da9e44366a5ef5bfb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIM3VBGT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLI8wXklSNrYmmEP%2B5SBt1hDtnod9p1fgN2wVKlRVQLwIhAIFLKwG1%2BLlB%2B6I1CZ7681Ko9RijL6kf6nq8LgGGun2qKv8DCF4QABoMNjM3NDIzMTgzODA1IgzdpmJD%2BlcjmOnl2dwq3ANe%2BG%2FwYjpMK76QLvENvZeX%2FTsYmRWMN9wNCNBX0iBudf%2FsANNuRG7ByaUvf6uk8TLVztlW%2By66n6KL%2B3IULkBJTudwoa7y6IYR04u3h37FHF3o8pUvrFaqvA55WSW07ON8DzIwbe20EDVrqH6Wej%2F5kC0nlm19RbhX5wuKc4Za9VWaOIzK4I%2FANUjqQGPauY3X40tmLQuieZIE7RPABNwi6URDfZiLKrShlAQJikdsYoibTIwDH2Ine4tiOYgxUlL37uGSBWDIvOcm0yRrj52PioQrzb5xCnFiz2IGBaO%2BKsplmUm6ga0bfKjdtbpDPk0uaE0CinC3nUkyC9Y8caSplav2kHta%2BHMFXsBL4Pj%2BtQR7C2%2FD7wid1Io0ro2z05Ql13K3ii77BkFCavDjBNP2eToBB9hO5pSnefKcXOkdwPg9cMYOvIXfsOyIJ3PR44OPVXtveqsseEsjJIkIU1ug6BEVxShAX41NtTpA3OGTjRmgty9257VnskAeKjkiVh5pcbZvoK1%2FaherE%2FPCmfxvtg3LGMRc8zmw4Ak%2BGjvLCWAvY60HZ501MD8uF7vQrpvE9O8In7AA5mYxaH8bpthXnPBTI5WG9j7t6s17JBfrmVcPvPO76jAE6gH4qjCDvovCBjqkAVDRUhzveswgy%2BA9xBFjNtFOT8h5Sa5exP%2BZpJjV2ZN%2FV%2B7s%2FhPXB6BqYqbwPeGStloOsa6bnmztXu%2FvRhKk8Nez7BlXi%2Ff7Jzx%2B4RebZem5RW66cl9wr5aqL%2FiQNMvlQWoxzq71Y465SCyOz58RIVxPOg7mB4zzRtaSogHTSW3H4GkXx6IBg5GBpOWgj32INq9nV91Jp2RX6n3rNaeFRukAFthp&X-Amz-Signature=a478d0c9a3d6451094d56572104509ed817162c89abd53f2004335bf73c773c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDPNJLRJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhPtyPwOcb41RtesMq1MJoJNw1aw1G4phbmJArt8IVgIhAISTbBvO2IAvIzQ5ZIKqY47pOWw0B68xWJW7kSvbAhTrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzmtIBhbzNx%2BRCbQlsq3APOH%2FYgjwfXefXmnc64MWqbnWLJ5kbCriSoqLuCerN97XUfHQ9h85GYdABdmXk0QYEKNRdWTal66tYjqtO%2Fl1%2FtZ7jbcuxX9gm7ymDtm7VYpPyNSiJ4hhmaFty7WW%2F2EGCYeMAXPA%2FzQylkn0lvYkd0%2BA7BmRvDKX0jT83ZMg1WluJlyrluM4BLGnHNFCzR%2FYR4q4mBQtMyr93XyBwqsehdBm0RzpDrcUxTL10aKIfdiHoU6e6kNFgVPlm%2FsPlXa5U1ibwCranLXN2otoyW2WztMDEFQgxd8EF6Ka%2Bhq7dMgyXZ1tMzlmo3LWVhtoH1ditWgMzcvoGFeD0i6s2CKrBjlPOWpyQGe6Dl%2BbcDpOej7aY5Djvjmt%2FIjnA5swJJ3bKrkae5NV80nySpuTxhek226R9Ya35QYezwRe8h0I3l2DxHxgRVhpZwBnh6HBwzaSd%2FtpnlMAIr1DpwkEpVA6o2jXPNiVIxMLFGg3rrfmTaLTbbx5gtRCFS%2FFXd3vF43y51XzA%2FrFeK%2Be%2F%2FTXuWe%2FjZgmDitpITOAKdpvBlW9l%2Bmn4hSNtD9r8zH93952w5CejhLkJjs11kl8ZD7HHjWDNrPLPy9RNjJ14VeckaKRd0D4uZ9tZXzo5MxgIDxjD3vYvCBjqkAVQqI6BRQMNm59PlP%2BQ8AFC4qTk4w1Owdm8v3jrWw9eUewFnayc4Xl4U%2BVTnMv2i2q0dkMKopSdHrCu2xoulZtaRH5mv%2BpLRllJtdsaBpBCowonnyh9A18IqzunyLLN5EH9eyFfcpqG1S7PV1IVx8MrSMOZcu%2B3Rz8Gp3NWOKI3nGnq4%2B2XNvatbiltI8GRN1h%2BvOaZ5e8Iiab1utws8lVllRs2F&X-Amz-Signature=6222dc211ccfd0689f88b9d0755e19ae730beec60be959e0bd8a4c54fe6b0812&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBB5COF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen2c46F%2B8KQQtDXffZChRD%2FshmKT%2Fukm7FmzXr1ageAIhAL%2FMMp%2BYdRokfjzKN4tyyos02HbKSC05Er1xUkm7%2BVUhKv8DCF4QABoMNjM3NDIzMTgzODA1IgzbFuZY%2BH4cTF1RSP4q3AOPqCdgafgIKrcWfnXwulwslFcRw0GQFNxLGqTwQ9L95yazwEOY6eJUGKwIUhfAFgRyaQxHWn69OLv0qy8jdTZM4PA6eezKSxSUNrKTaeqvcSY5%2Buc%2BAYlcbAON85TgA5UKIxtc3eDgDDxyjjjJqe%2FGZHV8YjUtEdcmmSA7A4pyi8kPPK%2B6CRmYZgZNJDdd1YWfuad8U7aGLf0aKn2b5PiER8RUMMnJ8gydpPXwPHSTmDIlJm%2FbA6y8BoJkV7r6s33Emg03LVWljRgLlxEpdGTDJjdBnJeou7JlT7olhMmQ5YiGWksql11LAywa6oNVtSQOqObwfF%2BCrCIgbeDPA%2F3N0uB6rrV2o12pBfXCw2OFajrKmgP4qAI6jn7xKGAkKDT%2BWJ8AQHu78EVi9269kNRqtxqyuTRjdIQ%2Bk802at8fG3Sj659gi3WSP7OAk120ozakrxexqfy%2BVpFf8h2yWVt0x%2F5cje4Yh1cIH5pcUcBJiRosqlMPjAd2qH%2BECN23kjutdmYixrWI12Jxd6rjrEgwPro%2BnubC7nv8%2B0y1x2qUsSI5ieKAHya4LQYXVI3bitKUSaALjmr8KRtz6pm6LJInNmrptMNDppq6QeGDUfvgL7yg0wm83VjwmE%2FkxTDuvovCBjqkAUyjEd%2FLz67O2fBkBTWf0MzKbxRdvBJI6OSGWb5AQqin3sm3zGip45HoGM%2BjKsuknW8XWCu5ittWs4lb0ZlT%2FpBFAm5ujyqtE81BFc8fbHtVJm7eeHhTHGQWuQ1iI%2B%2BPh2JLtIqGZPB4GiBcNzqJIjgSnQce7SUsdXFxmwudhocfTq8MJvocwhkK9DrVeAi0qmctwyB3CAFvD77O1oMb4x3W8c7o&X-Amz-Signature=fae94e1298911e42ac7a899978ed17c3c7cec5d6886139e64fc71a21388e3a16&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
