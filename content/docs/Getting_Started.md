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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443B7PAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrzviHP%2BTUQtp7WxafWyVi8h0SOOxE7XtSERK6Lt7wpAiEA%2BbI7RO2hTJADeXr9LuDdYZHExD5p12nKG%2B2VVYC853IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVfVXR%2BdZJ8uneNJSrcA%2F2Vr3454fo8pHOgFJEP%2BdbJdKne0uUwluDe%2BR0tiKv8LIHY2dxCtYcTFOoziiJWvwjStdv7ItI96kAHcCMlVwL3ccvTmjyu5aRDEk6idfdQYce05sxeh7XYOYxqrrNZgM%2BqQA5KuQGLLIBZohymizOErhPGUKJyEPI3BY1fNr2wRz8oVLgsZiDFraaRAxnm9YWHDzCQqQrltVf0PuwBW9FbWqKujx5m%2Fz%2FAS3ctI928jJsoWfFzAwoiG93o41F720GJlJIojltj9zdsekmqK%2Fs%2FVlZVTJ1hSUfmkamaCFZIeckQ%2FuMsrYqJR0SHEYR32eoLMz1GBHA%2B1fwupQnwp84gldP4zqS3%2B7f%2FQKYhBgSpveZ3LrzdApgVDCSISVaUSL2fPk6iA2EwTTYJ%2BbIvbcX0zybblKbQwly5Iu5v8ZsqBRYwEW0HHRYd%2FefVA0gYmdn6J1jWlPE73zh%2FROynPcu16AuVNoJ4QAnPZ4vyluxTx613xGW3wTM9caYmTowVfNGm30iB7Eclc6LUanryINXCeJ5zsCKhnjDXxXitWOb5xxfiU7j3sXNd976ZsZAnypWSWIBeae4neAImc0L%2BCzN03jqTWGv5pDwo123dWvEu1adK%2FBH5RaewzFrAMNyD3sQGOqUBuMUUpx3BKIhYt0GcPkQWz%2BQvV5pv7T%2BaKtXcAfZwjagsGLjHFbJvkX%2FhI7WFRhT%2B66BHTY04GCDXtNLsqWykts8hso9QestI4x%2FOdDk%2BIxIUe6OK9%2BUDvRBmcGf%2FT8kLctjaQLinzLyH3IOaWrTuqC0lgYOduNf7nMhLkIFsiHldVgGOrRLsFx%2FLj3%2F%2Bjlto5VXwS8%2BxBWBJGf%2FUi2uV6eQwPzsr&X-Amz-Signature=98a28dcda9b7b0df0a6412427fa473b7b700a235d727f0b5bd5743858828b76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443B7PAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrzviHP%2BTUQtp7WxafWyVi8h0SOOxE7XtSERK6Lt7wpAiEA%2BbI7RO2hTJADeXr9LuDdYZHExD5p12nKG%2B2VVYC853IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVfVXR%2BdZJ8uneNJSrcA%2F2Vr3454fo8pHOgFJEP%2BdbJdKne0uUwluDe%2BR0tiKv8LIHY2dxCtYcTFOoziiJWvwjStdv7ItI96kAHcCMlVwL3ccvTmjyu5aRDEk6idfdQYce05sxeh7XYOYxqrrNZgM%2BqQA5KuQGLLIBZohymizOErhPGUKJyEPI3BY1fNr2wRz8oVLgsZiDFraaRAxnm9YWHDzCQqQrltVf0PuwBW9FbWqKujx5m%2Fz%2FAS3ctI928jJsoWfFzAwoiG93o41F720GJlJIojltj9zdsekmqK%2Fs%2FVlZVTJ1hSUfmkamaCFZIeckQ%2FuMsrYqJR0SHEYR32eoLMz1GBHA%2B1fwupQnwp84gldP4zqS3%2B7f%2FQKYhBgSpveZ3LrzdApgVDCSISVaUSL2fPk6iA2EwTTYJ%2BbIvbcX0zybblKbQwly5Iu5v8ZsqBRYwEW0HHRYd%2FefVA0gYmdn6J1jWlPE73zh%2FROynPcu16AuVNoJ4QAnPZ4vyluxTx613xGW3wTM9caYmTowVfNGm30iB7Eclc6LUanryINXCeJ5zsCKhnjDXxXitWOb5xxfiU7j3sXNd976ZsZAnypWSWIBeae4neAImc0L%2BCzN03jqTWGv5pDwo123dWvEu1adK%2FBH5RaewzFrAMNyD3sQGOqUBuMUUpx3BKIhYt0GcPkQWz%2BQvV5pv7T%2BaKtXcAfZwjagsGLjHFbJvkX%2FhI7WFRhT%2B66BHTY04GCDXtNLsqWykts8hso9QestI4x%2FOdDk%2BIxIUe6OK9%2BUDvRBmcGf%2FT8kLctjaQLinzLyH3IOaWrTuqC0lgYOduNf7nMhLkIFsiHldVgGOrRLsFx%2FLj3%2F%2Bjlto5VXwS8%2BxBWBJGf%2FUi2uV6eQwPzsr&X-Amz-Signature=8d6e7b035b82e62795a5ded20ef364a505cf4a16cce2b16e0d32f351a7199313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443B7PAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrzviHP%2BTUQtp7WxafWyVi8h0SOOxE7XtSERK6Lt7wpAiEA%2BbI7RO2hTJADeXr9LuDdYZHExD5p12nKG%2B2VVYC853IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVfVXR%2BdZJ8uneNJSrcA%2F2Vr3454fo8pHOgFJEP%2BdbJdKne0uUwluDe%2BR0tiKv8LIHY2dxCtYcTFOoziiJWvwjStdv7ItI96kAHcCMlVwL3ccvTmjyu5aRDEk6idfdQYce05sxeh7XYOYxqrrNZgM%2BqQA5KuQGLLIBZohymizOErhPGUKJyEPI3BY1fNr2wRz8oVLgsZiDFraaRAxnm9YWHDzCQqQrltVf0PuwBW9FbWqKujx5m%2Fz%2FAS3ctI928jJsoWfFzAwoiG93o41F720GJlJIojltj9zdsekmqK%2Fs%2FVlZVTJ1hSUfmkamaCFZIeckQ%2FuMsrYqJR0SHEYR32eoLMz1GBHA%2B1fwupQnwp84gldP4zqS3%2B7f%2FQKYhBgSpveZ3LrzdApgVDCSISVaUSL2fPk6iA2EwTTYJ%2BbIvbcX0zybblKbQwly5Iu5v8ZsqBRYwEW0HHRYd%2FefVA0gYmdn6J1jWlPE73zh%2FROynPcu16AuVNoJ4QAnPZ4vyluxTx613xGW3wTM9caYmTowVfNGm30iB7Eclc6LUanryINXCeJ5zsCKhnjDXxXitWOb5xxfiU7j3sXNd976ZsZAnypWSWIBeae4neAImc0L%2BCzN03jqTWGv5pDwo123dWvEu1adK%2FBH5RaewzFrAMNyD3sQGOqUBuMUUpx3BKIhYt0GcPkQWz%2BQvV5pv7T%2BaKtXcAfZwjagsGLjHFbJvkX%2FhI7WFRhT%2B66BHTY04GCDXtNLsqWykts8hso9QestI4x%2FOdDk%2BIxIUe6OK9%2BUDvRBmcGf%2FT8kLctjaQLinzLyH3IOaWrTuqC0lgYOduNf7nMhLkIFsiHldVgGOrRLsFx%2FLj3%2F%2Bjlto5VXwS8%2BxBWBJGf%2FUi2uV6eQwPzsr&X-Amz-Signature=ef2c28fc48312b1bce20dfa8b7f1f8708aa5dd08a2de79fad645f895d5810f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNRKA5S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhgjZxG65Ni1UnLSUpxa3P6paOqHzASQnsXVsn%2F0rNMAiB9WrAyhDk8GsCQ%2F4%2FASnH6MUSbVzhevtmASTpsfhmp3iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAekzEbAjo%2FqGosUFKtwDD2Wpoxbs%2B3jN2h0m8lEPi1T4eRykiLtRvzojG%2BS7sB6nT51ZV3h2PXfihdtaCLslCDT09X2nbTUIAwhtcSoYSo9mQ2JshoENFBc5tX%2FpjPg6VFUjqM9lxXC4rdoiKrhRcd0WPAJbSXOzy7UwSxAMdK4tYhjEU02FxHRNK5H2zsmG7kRBb8gbcF1gbjaEPEbFv%2BWAetIj2IjHVgHCguXGuNwJMxX4URn14ArLlpRXamyTCyalMIKzVlRrUOFE3zt8p4ept40GUUZor70aNm2zsI5m0WjQLh23xJSlUmAORl7HcN3EtcS8rA%2FItIb0NQdg0f2koSojbmU9dwyey9onByhrBdR1bhUB92Xw4pRX%2FuT%2FqxvJ1LQFCtDaA5cblCTrYhLSUawk3rzuNg4qqQscEDGbEv25iqyowkOb7%2Fk2wnrx7D6gEJD9ay0nGZ%2BhqCt%2FmzbUoLa2%2B2rpj7jh76gAF39buh7Dq9i1GLlkh0UxMYwrTfjjq%2FiAEMz0aWS2xY0LS%2FSvL6J%2BPCbN44mBn%2B81UbOPSI8S5%2FEJXf2APr9RibXP%2BKUa%2F8CUKSdnM43HKfDT%2BERrOQ8mdPCA8iR%2BR%2FKdl5Ud1f80GkLlJv9iKwcNijj%2FpogJiVG7j%2BUBKEUw1onexAY6pgEpTUTPSXWbYzoJw7UK8TAYbHuYekdcw3KIsquBrhd4QeEb7f%2Bvk%2Bbr9QK4iGIQgo8Nl6RolIuoz9UNtCHNrV%2B1iDplqLrcdCRtT2%2FrmKzezl7no1JPlod63vfIB9DOg06Cdd2C%2FeFMdOqahzAi23i1Qm3dFPFHXsyOCSE3LZ8qWKjCNeroW9fGomaXmbALjehi%2FzxS6jhgvURezhfd5lZ9prR3E90U&X-Amz-Signature=927e8a05507477b279af5a9d046be0588fb36dee59115d87b31771f6a2188030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDNEEWU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG0%2F2w1qhSlvmUF7hSy1M1HC2DLKQy9VKMpkIKrOgv%2FAiEA94%2BNwD%2B2XRhFq21j0y6cQjL2e0%2Bi%2FsKMyXikqm8HNksqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJTxMw7DAlKfeMIVyrcAyQYVelxaPDGaCHvJsa4uM6qG0dqwGVfjsSV9XX7MPHlqvhWcEQ7aNVJiIAE%2FRWSEQzXhrr3cJ%2F7Z9qxiVIasZILbkmTUidds2CxittZhQ2Q0S0%2Fy6lRVyjjN20PWhkCzM%2FOxHifoRBU7JqGQK51XSxPuPnyexz08OVQRCuU8wPBYM1c2V3Nms4vyfcP2ucvxMfJvLyr%2BUw8K9j6Jmwrt%2F%2BT%2B32IJNEn0RH3Rb9ZT1WzpWzWeAuLWZg27Bd%2FmLgvDulgE4dNYCPWz0F0AV9ndlaBU7gWk2VZgxDXAjvo6EWULQcV4ErxC5TYbOhUMtVYMJbSjkm70nyr7RxX1J%2FlE14mga4tFlLEo8kr0oCvjoQIfgrek530LrfOwwChTnAcehWK7KfYS2w1BZ3Cj4jI%2BG2MmRRLYfvPBgCgjFLJGtfTON2af%2FVbfzajtQBxd1PuTrAlp37EsZ%2FDzqjnRZzaz9gFmdiLR1TvtX2zsLZtTRhzj31U2aL8ZRS1G21RnY7PkmuAAfGe9hRat3bCt%2BPesvgd5b%2FVo1quD6eNzLIpgu1IensCqjVRJS0CMEONVos0MVs9FcYo4WblDDo%2Bz3I%2FeXpNQnBgK%2FsjsVWQrgCfDp6ZAkyM0A3ucMEUCwMiMKaL3sQGOqUBqEtirezOSMYlPzQRfAlhrS%2BoHjeSV8DECAnUF6bqMEu1WwNiIXhlsNVbviu9h%2FOMWvJes3ak1RkE7v4WIupsVmIv60R3jyl8yJ%2Be5fpCNWTvMXYuWcTOumTwtHCNoRULE4Oq3qDcBMSZNwdgWZkkydVjwIv0C9N6xd3NX584mNrfxu83EcruG7zwvM6oAsP9S3u%2BraVQvEHMrCiFi1QL%2BdTu194y&X-Amz-Signature=1564c2794e0594454cd633589ac367e4e30909a14b4c78965b49869a39b9c7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443B7PAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrzviHP%2BTUQtp7WxafWyVi8h0SOOxE7XtSERK6Lt7wpAiEA%2BbI7RO2hTJADeXr9LuDdYZHExD5p12nKG%2B2VVYC853IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVfVXR%2BdZJ8uneNJSrcA%2F2Vr3454fo8pHOgFJEP%2BdbJdKne0uUwluDe%2BR0tiKv8LIHY2dxCtYcTFOoziiJWvwjStdv7ItI96kAHcCMlVwL3ccvTmjyu5aRDEk6idfdQYce05sxeh7XYOYxqrrNZgM%2BqQA5KuQGLLIBZohymizOErhPGUKJyEPI3BY1fNr2wRz8oVLgsZiDFraaRAxnm9YWHDzCQqQrltVf0PuwBW9FbWqKujx5m%2Fz%2FAS3ctI928jJsoWfFzAwoiG93o41F720GJlJIojltj9zdsekmqK%2Fs%2FVlZVTJ1hSUfmkamaCFZIeckQ%2FuMsrYqJR0SHEYR32eoLMz1GBHA%2B1fwupQnwp84gldP4zqS3%2B7f%2FQKYhBgSpveZ3LrzdApgVDCSISVaUSL2fPk6iA2EwTTYJ%2BbIvbcX0zybblKbQwly5Iu5v8ZsqBRYwEW0HHRYd%2FefVA0gYmdn6J1jWlPE73zh%2FROynPcu16AuVNoJ4QAnPZ4vyluxTx613xGW3wTM9caYmTowVfNGm30iB7Eclc6LUanryINXCeJ5zsCKhnjDXxXitWOb5xxfiU7j3sXNd976ZsZAnypWSWIBeae4neAImc0L%2BCzN03jqTWGv5pDwo123dWvEu1adK%2FBH5RaewzFrAMNyD3sQGOqUBuMUUpx3BKIhYt0GcPkQWz%2BQvV5pv7T%2BaKtXcAfZwjagsGLjHFbJvkX%2FhI7WFRhT%2B66BHTY04GCDXtNLsqWykts8hso9QestI4x%2FOdDk%2BIxIUe6OK9%2BUDvRBmcGf%2FT8kLctjaQLinzLyH3IOaWrTuqC0lgYOduNf7nMhLkIFsiHldVgGOrRLsFx%2FLj3%2F%2Bjlto5VXwS8%2BxBWBJGf%2FUi2uV6eQwPzsr&X-Amz-Signature=9658280db9ad1cb258140384924d3b4782ce3267f2bd1d78d0fa10673143682d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
