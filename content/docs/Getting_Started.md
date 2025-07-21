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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRVGFS6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0CagFR58%2B6VgN1CWQaIx%2FUT76WcQV9BCOHn7HHE9CgIgMOOvk3VLtgpwqJNeQHWTB2UUXTtVbamRpNcfH793qKYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9ZjyFd%2BGJXvI2uyrcAzsLRi7i1MTzHpPrpH7uLksXejgGC0cZ%2F9Q4ggkyBkORs61MgpN2na7J7sSdtdlQinS0cnBwt7CYuodXuRp6lbKNtlq3nAbi00rN%2BG%2Fe1o0R07sNVWfnTTpT1dM%2FAsgsfRA24uEvXz%2BDNtkOnYtopPEwUoWf3fnIGUXKEhDRJWyF2Xf9Ivn4tjNuj%2Fr8UJBAQsLb4UEGz%2BiY%2Biq23wWfvzGSUt%2BLm5vnOT8GDCt2%2F7TlFbfLe7aMQFzAe23MOwHXNdISmq9ZikLGPD5pwFkSiAsuJ5cyUAT0gLRu%2BjvDD4DiDtPUNw2PibkwTZghHYHK4O5irGd0htluf8NglHbM8PRXNLJPK6hAhIKByudvc5ti9nPmJArTux%2BTvGNEMp766wgMP1xQuUnoH%2FMTV7CXRRTEcbCR%2BpZdIrlxy377ZCTBMSl%2Fxo6el06wJX6ZSIrPvGgntIcIKLpdpGMc0PlTR%2FTr9ku3po71WZ5BLT4hz3deAyv8TKtScqAoYMke3FpF2GHVhgTOsrw4XyopAYr5IeWpSgML18tGO3qnaKyXshz437MmWGuZtcuIJFRHRixrKMwS%2BTk8Q4IrLi%2FA69kfF%2Bw6KQ6oKfOXBveIJoSLxQMMzchQX4FJHx%2B1HGVCMJ6P%2BMMGOqUBBpnDuG5l3tC3k5Gn%2BgmMclT0WpX9YfWadmsCOw2FlGZhEHLUBdxITSxCjQfHEOSFXKyAX0E176EvBOCNdHPkfY0Dm99pWYyfXf4kvBsRc6Xp6C7V0x6VdGNZMGNPXF8QNJ5x0yI2HDkIqsaa0e8SzRQqdls2gD%2FxBZS49g67KvyoXZwVGIUNAnJ4pPhosL3pePA9AuB1hGpVhPAefPU6D5BkLB1r&X-Amz-Signature=f2b4caa00e8237b66c86a8ff2de8cf02708f7a67ae19aaed5b7dc74fd20e2e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRVGFS6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0CagFR58%2B6VgN1CWQaIx%2FUT76WcQV9BCOHn7HHE9CgIgMOOvk3VLtgpwqJNeQHWTB2UUXTtVbamRpNcfH793qKYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9ZjyFd%2BGJXvI2uyrcAzsLRi7i1MTzHpPrpH7uLksXejgGC0cZ%2F9Q4ggkyBkORs61MgpN2na7J7sSdtdlQinS0cnBwt7CYuodXuRp6lbKNtlq3nAbi00rN%2BG%2Fe1o0R07sNVWfnTTpT1dM%2FAsgsfRA24uEvXz%2BDNtkOnYtopPEwUoWf3fnIGUXKEhDRJWyF2Xf9Ivn4tjNuj%2Fr8UJBAQsLb4UEGz%2BiY%2Biq23wWfvzGSUt%2BLm5vnOT8GDCt2%2F7TlFbfLe7aMQFzAe23MOwHXNdISmq9ZikLGPD5pwFkSiAsuJ5cyUAT0gLRu%2BjvDD4DiDtPUNw2PibkwTZghHYHK4O5irGd0htluf8NglHbM8PRXNLJPK6hAhIKByudvc5ti9nPmJArTux%2BTvGNEMp766wgMP1xQuUnoH%2FMTV7CXRRTEcbCR%2BpZdIrlxy377ZCTBMSl%2Fxo6el06wJX6ZSIrPvGgntIcIKLpdpGMc0PlTR%2FTr9ku3po71WZ5BLT4hz3deAyv8TKtScqAoYMke3FpF2GHVhgTOsrw4XyopAYr5IeWpSgML18tGO3qnaKyXshz437MmWGuZtcuIJFRHRixrKMwS%2BTk8Q4IrLi%2FA69kfF%2Bw6KQ6oKfOXBveIJoSLxQMMzchQX4FJHx%2B1HGVCMJ6P%2BMMGOqUBBpnDuG5l3tC3k5Gn%2BgmMclT0WpX9YfWadmsCOw2FlGZhEHLUBdxITSxCjQfHEOSFXKyAX0E176EvBOCNdHPkfY0Dm99pWYyfXf4kvBsRc6Xp6C7V0x6VdGNZMGNPXF8QNJ5x0yI2HDkIqsaa0e8SzRQqdls2gD%2FxBZS49g67KvyoXZwVGIUNAnJ4pPhosL3pePA9AuB1hGpVhPAefPU6D5BkLB1r&X-Amz-Signature=d18d0994508671634c14916d811949941d7cbd2125d978ae91471649bda590e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRVGFS6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0CagFR58%2B6VgN1CWQaIx%2FUT76WcQV9BCOHn7HHE9CgIgMOOvk3VLtgpwqJNeQHWTB2UUXTtVbamRpNcfH793qKYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9ZjyFd%2BGJXvI2uyrcAzsLRi7i1MTzHpPrpH7uLksXejgGC0cZ%2F9Q4ggkyBkORs61MgpN2na7J7sSdtdlQinS0cnBwt7CYuodXuRp6lbKNtlq3nAbi00rN%2BG%2Fe1o0R07sNVWfnTTpT1dM%2FAsgsfRA24uEvXz%2BDNtkOnYtopPEwUoWf3fnIGUXKEhDRJWyF2Xf9Ivn4tjNuj%2Fr8UJBAQsLb4UEGz%2BiY%2Biq23wWfvzGSUt%2BLm5vnOT8GDCt2%2F7TlFbfLe7aMQFzAe23MOwHXNdISmq9ZikLGPD5pwFkSiAsuJ5cyUAT0gLRu%2BjvDD4DiDtPUNw2PibkwTZghHYHK4O5irGd0htluf8NglHbM8PRXNLJPK6hAhIKByudvc5ti9nPmJArTux%2BTvGNEMp766wgMP1xQuUnoH%2FMTV7CXRRTEcbCR%2BpZdIrlxy377ZCTBMSl%2Fxo6el06wJX6ZSIrPvGgntIcIKLpdpGMc0PlTR%2FTr9ku3po71WZ5BLT4hz3deAyv8TKtScqAoYMke3FpF2GHVhgTOsrw4XyopAYr5IeWpSgML18tGO3qnaKyXshz437MmWGuZtcuIJFRHRixrKMwS%2BTk8Q4IrLi%2FA69kfF%2Bw6KQ6oKfOXBveIJoSLxQMMzchQX4FJHx%2B1HGVCMJ6P%2BMMGOqUBBpnDuG5l3tC3k5Gn%2BgmMclT0WpX9YfWadmsCOw2FlGZhEHLUBdxITSxCjQfHEOSFXKyAX0E176EvBOCNdHPkfY0Dm99pWYyfXf4kvBsRc6Xp6C7V0x6VdGNZMGNPXF8QNJ5x0yI2HDkIqsaa0e8SzRQqdls2gD%2FxBZS49g67KvyoXZwVGIUNAnJ4pPhosL3pePA9AuB1hGpVhPAefPU6D5BkLB1r&X-Amz-Signature=1ee2f6967efccbed75cd86498b66c25bd5c7a59811140aacfea2f1e4c80ce944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MROCVAV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMmIrWHZJME8H39hHpCncPBqK8jIb6Agj9usGpQUxB9wIhAPnpaqqTPUUkhFiJytyp9b7Zz6jAGM0b0Wgl9hJkCRDaKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybTiHVrvqIZZQrBcAq3APGxjsjk5EbrQTxc93AWF7q9bn%2BqER%2BknKTq1ebO8986HDcZt5Dgk9QT5eSolIVDIbpxfdGaMX1PHc0YSqh6UWjVz43T0dXAekYYuBiP3PphW13M5l%2BcUJ8UggBOkQdlAPlx0jfyubMe3PskRDUbGG8RQaWJk1IL41XSs1I4%2Fz34%2BAd%2B%2FIko246nsGKGMD%2BBOSCEN4Ad368SCEPLEZFHx4Jbdd2XlBn0b4g%2FfCHFpagtdvDH7hcznxVC3v27inOEal3BXCx1tOWMivRrLCbfiv86TefL9jjeN6%2BcHDaCs8r4Ur%2B58idWSDFcyNx7TWwomN9E106kOAhmilkgAtpYz8uh7jiHWWzxFS3aAmPNESWfrTTC38alOX1I21qCu%2B80BSmrfv%2Bt3TD%2BYWSvfTM7dXHL2ImUKKy3tx1Lbj0Mxy0P1ZesLtjrDCLQqau81Nq%2FIOOGr7f5cHKglbqjkT1gEtQebOCSCvUqQHNaigw5mL46C0rNRgLSXWc3d7hWBFupbAOX2HHjsGSrsOAS9RWjUZoLlRc4LHuKsD5jZWKXu%2FHNSaLRsl8UnHpYCO%2B6MJBbw4mcG11LgcYj%2FV%2FM1WYH8%2FzjyHBBLy5bJ8x%2F%2FT9VNkorqi008IJaskXtuAmFDCkjvjDBjqkAVspZMXOzkCN6As5oscau77EyJYJ%2FtcbzjnJXBLxlay8eLLnYIfiU9FL6vTmWaAhfJRoegxb31vLXkHrlHz9pRVS7RyJOJopbFaCm3ygXf%2BhuJ1fNXapbndiw%2FWV%2BE%2BWe%2BRrB4zaddHdFzt6vHinNrifpI7%2BvZjrL%2B7j%2F8kIYxl%2BcjzpRx3kjaBSKskdKXUE08mXXQxfKGCI8dCSFRTjIbn5kw1w&X-Amz-Signature=7e1d99e19d85f6c905be769912d7f5fcfc9cad6e795b6d352a4ad9a1ff639a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKX6D4I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3k48PgwMyg3MRs7mgyMSe9BDDXSKEOiaOvI5MOstCNAiAzAYFHxW7Ulb%2FHCleCaMWc%2FXltiIB4O%2BuOdFuAgJrDqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarwssp4fIGpQs6S5KtwDpxMn0H%2BAvaKGlfi%2FqCkpNrfcNAGKytfsWqzgKB5C%2Bi7ZMPYR6zEmX7uYsh8vFobKPLq0j1lYei6CZDuahu1%2BBhNDTr4T6740HO%2FPItZKEyoC4bkP3o8hon5WLVAuG9OZLdp0TB3wPp%2BJ3VxGXwO21R7ZRGM3BZkB7dPmk%2BrBlq3KmSkv4J5uSGEr6%2BmcZcDK8%2FMd%2BOMikyzfB6nrENtJwtinX2M0KzufsKxIj7REyLIZfrSPm%2BjnDP%2BlVTlzf26cjwUM2P8WvRplIwPWjbDEwmPl0NanTfoY%2F%2F%2FXomAkdImPk%2BjBmeFU%2FW3u2iSJZnT9UOkwE1IdODcfIrwF3B1xJctW%2BwIs0CD1QpenPOhkDaEP7x7kvXsUqnslcJ8ISIc9IFKOP6gaHOUgMIwogud3LWnKj0SBVHGkD0cWuQSWFB1DmYcmPmFqKZJrQ83PucVHAJXuobHXsq2%2BnPQMRIRB7AbQws%2BlkJyw7HgOx5%2FjDEp2atEQiTrqb%2ByNuB8DHq8RqL6%2FkUriOpY7UAWZWRP1errqMtG%2BjoJQlMCk%2F3hOnIb6PFRUVnjni8ZnuPrqPmLiGG3ZLLCXwMagg52dVbJP0Ir3c4DkQNIJ2ly%2BN0pcQfMe1J2SXVQILvKc%2BfMwy434wwY6pgG8fvY%2BZN%2BwTxjnls8dsmoofqRCmKE1mE0HdmzKCfmlqCsw%2FLYCbdgoulxMHMcc2IFomuACNr8IW55dsWLx6eX%2F0vu%2FROjhLrCycVuxc9ZD7U%2B3d15FyqhDAwT6Q3TELTPoFoTUxVtr79sebWkjYm6sabySxDP8Dl8FwagW%2BWPzoCYN4%2Fwub3wkraFDj8Qz%2BMGQzUTWdyFjB%2FXfY4QNEf5qkJOJn4Vc&X-Amz-Signature=864685274e83579cd7adbca7888e1a159fb172f896655c60f30637a2bb2c3cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRVGFS6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm0CagFR58%2B6VgN1CWQaIx%2FUT76WcQV9BCOHn7HHE9CgIgMOOvk3VLtgpwqJNeQHWTB2UUXTtVbamRpNcfH793qKYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9ZjyFd%2BGJXvI2uyrcAzsLRi7i1MTzHpPrpH7uLksXejgGC0cZ%2F9Q4ggkyBkORs61MgpN2na7J7sSdtdlQinS0cnBwt7CYuodXuRp6lbKNtlq3nAbi00rN%2BG%2Fe1o0R07sNVWfnTTpT1dM%2FAsgsfRA24uEvXz%2BDNtkOnYtopPEwUoWf3fnIGUXKEhDRJWyF2Xf9Ivn4tjNuj%2Fr8UJBAQsLb4UEGz%2BiY%2Biq23wWfvzGSUt%2BLm5vnOT8GDCt2%2F7TlFbfLe7aMQFzAe23MOwHXNdISmq9ZikLGPD5pwFkSiAsuJ5cyUAT0gLRu%2BjvDD4DiDtPUNw2PibkwTZghHYHK4O5irGd0htluf8NglHbM8PRXNLJPK6hAhIKByudvc5ti9nPmJArTux%2BTvGNEMp766wgMP1xQuUnoH%2FMTV7CXRRTEcbCR%2BpZdIrlxy377ZCTBMSl%2Fxo6el06wJX6ZSIrPvGgntIcIKLpdpGMc0PlTR%2FTr9ku3po71WZ5BLT4hz3deAyv8TKtScqAoYMke3FpF2GHVhgTOsrw4XyopAYr5IeWpSgML18tGO3qnaKyXshz437MmWGuZtcuIJFRHRixrKMwS%2BTk8Q4IrLi%2FA69kfF%2Bw6KQ6oKfOXBveIJoSLxQMMzchQX4FJHx%2B1HGVCMJ6P%2BMMGOqUBBpnDuG5l3tC3k5Gn%2BgmMclT0WpX9YfWadmsCOw2FlGZhEHLUBdxITSxCjQfHEOSFXKyAX0E176EvBOCNdHPkfY0Dm99pWYyfXf4kvBsRc6Xp6C7V0x6VdGNZMGNPXF8QNJ5x0yI2HDkIqsaa0e8SzRQqdls2gD%2FxBZS49g67KvyoXZwVGIUNAnJ4pPhosL3pePA9AuB1hGpVhPAefPU6D5BkLB1r&X-Amz-Signature=147ece21f278c076fec015e3b18625e4ed731b0c517de90b21ba3909943a0372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
