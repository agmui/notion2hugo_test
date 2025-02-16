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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZMG7FD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIB2AATWwqQIDleXQuAJX1fJOalUusaPkwJ4P7I%2FtgMhoAiBWVdAQVbKNT%2FDdmJkM2c6wRhGpdPpiSo0qgn%2B1Z2VQESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMISi3Z0FSGQzPtlQbKtwDjym8qMgtzWJuGpwgrJYx4POPfVDjSApAIGsNnB%2FzYSdU5LWfXaR2fd2ks6yi29BIdPq3BP7rVd4585c1sOQSQLd0chJDPMKcqhwB8LPj9B5dFJT%2FY48cCfkQKuhn1FOg0iwTQAakrt57rwxr7rIEgVd4Qtok36l5itublj7ci9S56mOhS07l%2BxIR9iYrGUr15fdZPCQO8dUYD8o1taijvaqA5Hnmes26VOGVsE2AY8aqBapiHuTs3VaaL4ahQL0G0plJTs42ACkjvjWR11ulF8WUVN85u%2BND3S2Zt%2BYcn7gGzuQF8Wn098HcE17Uy49qwolglMSD5bBAtgBk1l3KHy5eraMAd9kGQ7naYg5D7gt3Mt6MExzqA8dmWW7SM%2FIbfJgHhwlpnx4GbDts1XmvhzgHocSvNdo3Rf7QCrOT7YEpQfaPCxcAhbwPuUrMYrHcNs0qlG74gmAEfEoBIKNKd2RDgKBNVzAEWlnQPUjZKo5Fx342r%2BbiIrX6TXpJDRXOOxcZwGs4t2aFQ5WMdWZwYA8Yy8AaS5DjGTlkzDXllRch5l9EmThuN66lv90lrFyqKtNTyYZQc%2FNpkxbEHuhzioJL%2BZ4n0jywcVHeTl%2FPUQedh7XK769xjBiIXHYwlcHIvQY6pgGZkGRtTvviXwHT1yEyFXKLcrv%2Btzj5aVRm7cD0G8CLulvsTwcWapWkS%2BbelACgxLlBaf8zr2c0fS2G4onuoc0dHqMEHDNL2StYu1qHg%2BcG50CFCiWvG29vfPfnSJ5Nhv%2Fpdo8vIbhzsWWlsAy4fRDSTPF%2Bzk%2F5w0t%2B06OqHfunK4HGRuQtpLGJIl6RDOeRiWpyN1kM8ciXtcY4LicFzXHE6dqfCDEl&X-Amz-Signature=4c2c657a7dd220437e623ed097e415665a6337de802a2558f4f9d062cfe4da4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZMG7FD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIB2AATWwqQIDleXQuAJX1fJOalUusaPkwJ4P7I%2FtgMhoAiBWVdAQVbKNT%2FDdmJkM2c6wRhGpdPpiSo0qgn%2B1Z2VQESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMISi3Z0FSGQzPtlQbKtwDjym8qMgtzWJuGpwgrJYx4POPfVDjSApAIGsNnB%2FzYSdU5LWfXaR2fd2ks6yi29BIdPq3BP7rVd4585c1sOQSQLd0chJDPMKcqhwB8LPj9B5dFJT%2FY48cCfkQKuhn1FOg0iwTQAakrt57rwxr7rIEgVd4Qtok36l5itublj7ci9S56mOhS07l%2BxIR9iYrGUr15fdZPCQO8dUYD8o1taijvaqA5Hnmes26VOGVsE2AY8aqBapiHuTs3VaaL4ahQL0G0plJTs42ACkjvjWR11ulF8WUVN85u%2BND3S2Zt%2BYcn7gGzuQF8Wn098HcE17Uy49qwolglMSD5bBAtgBk1l3KHy5eraMAd9kGQ7naYg5D7gt3Mt6MExzqA8dmWW7SM%2FIbfJgHhwlpnx4GbDts1XmvhzgHocSvNdo3Rf7QCrOT7YEpQfaPCxcAhbwPuUrMYrHcNs0qlG74gmAEfEoBIKNKd2RDgKBNVzAEWlnQPUjZKo5Fx342r%2BbiIrX6TXpJDRXOOxcZwGs4t2aFQ5WMdWZwYA8Yy8AaS5DjGTlkzDXllRch5l9EmThuN66lv90lrFyqKtNTyYZQc%2FNpkxbEHuhzioJL%2BZ4n0jywcVHeTl%2FPUQedh7XK769xjBiIXHYwlcHIvQY6pgGZkGRtTvviXwHT1yEyFXKLcrv%2Btzj5aVRm7cD0G8CLulvsTwcWapWkS%2BbelACgxLlBaf8zr2c0fS2G4onuoc0dHqMEHDNL2StYu1qHg%2BcG50CFCiWvG29vfPfnSJ5Nhv%2Fpdo8vIbhzsWWlsAy4fRDSTPF%2Bzk%2F5w0t%2B06OqHfunK4HGRuQtpLGJIl6RDOeRiWpyN1kM8ciXtcY4LicFzXHE6dqfCDEl&X-Amz-Signature=97f9d2ffdd183200e190a71d856977eb51f29a6d754c70529a173711c56be7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELWLMGK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCt0nlmddFA%2F3m5O57pGAUhv9rO4bvDYtyzcuYY%2FqbyggIhAP1HqVkbGx9WR5recpBOKDmHrGGHBf27U17ZR3GSAztpKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5wHEDlQHtQNzoSFgq3APftGIm%2B9EnA4Yk3igHPQ2BsBbNOzfzMjaiJVhse0pdh%2BMKAgKEzOCVfzKBbAW7W3i0U2fULUdhgkhgjSsULtDf3gdG3x7PryY%2B5tWKqEH5OA9RC7lE2xrqRMEDjuVSUNXakitgmSxUrYHANFtFSySjlOVxzg4vFnjtfppaTOvNpRyhZQtwK95oTWrWx%2BNU1SHR%2FeiSRU18Z5G9lfcOBb7vt%2FhQAgED%2BvMhrgH2ZYTEZjmgJqANCIC8LkKccNYVDyjBvQWaWmrL2h1PA7L%2BM7tZmxtgDB%2BV1jtqEEXwuqNDmgWfhKVZ%2BC2GWjAQL1vhR2DuJsq1np3v1OuXlM%2FJj6rSyIqr6x6VXnZqK0dkZO%2BaLsoVtJdbHByj2rL5JRyLkFRf0Lcj6NS%2B%2BGAz1BVORWPNU8E6s4UFyR15SkBu6uLtHv720E9hFdOpIe4jMAtbt7Jx8C%2BDjCs2SqRP2xS4WAjVmtRXKIvLfhjtNVzkrXbwj%2BYQ3Veqtnfm6a9jcRYY6lscDeng4SzIHto0l%2BnPWUu2%2BSpTrWjZAN6Koe0m0V%2FV9RYN9OIp92N9%2BIpXGMyrkSENT6umj8ZFMRYyOueJB%2BGC5DxYpBheUp1mYrJ6PwZz8GdoYEpaJleHqnV2RDDjwci9BjqkAT%2B0VKK5MhL0dIm274N1JbRdXImf%2BH6050xAPC8y62ZxQ32VlFhwp2pzKgWyWyxEmsiOidaJGil5a%2BS6zeeSLHqRNhHOEsK1oNIAbDZjsEDPLKPrRweUkClC9LdNCso1%2FxvpkoPdWBOa%2BCLRVc%2BWk5lJEX2uR7F5CqkCXOElXNBnlBI9cSIfq%2B7HTrBgki2vzj0FQrjBVpk9Wkb2sJX8xL%2F4CIei&X-Amz-Signature=ea3b82efa38c2b268c920194ec514ae880e8d8a27a15713df03806b9e52a4087&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633PD4C5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCGpxx%2BmkzFfkWQp12GwdeE1LJWJSCBUmIwcKd2l0lEiAIhAKzUgGiuS2S8f8AgOqYCcl%2FNqOYKAm%2FK9LhXxGRIg5cGKv8DCGMQABoMNjM3NDIzMTgzODA1IgzFKiBLb3ijJNBqRJoq3AODqF0RVTLLVVvgaai6n0xNkWE03dNGNcP9QA2YbwYvM1U92zNYv6FHHeL59YKg7T6wahcknl0ry1zj2FUAYvLb09Tlj1exfuISgl3luVATyjxMUqCBhWNszeuHbaCjJM51eTlKDwIWyzbdWPpMFwcTnVOFKDkn6RjszM9BJ0z01KqAnYMHssN2kH5TfxRvu5YP0L0QlbuS66vsNDAoEwht5BQHAXVjGf2gNm660DYdKPZ7i%2BXTX%2BhbMkzKdIBkyd0UIgnlx3RiJCPmtR4zeraaR8YCGX1I9I6fBE6PsFYN9ETzKQLd1Y2ik3H3xxBSQKIAJLF52n%2FwWKe6zL21zO14PO6wed9Cl1r2bFG6rQV91NoypsR%2F8fi2iax%2FZecJg3XzZwdj8XFifpnmqGM2d1ZFO445CrBw76DZcnpoWzXfoZU9oTjO%2BQUjo0E1ClR3ByIRVDFZLdbuc7RkclvrFPtxalcuJhgOH20pJgRgO1NF4mtKRQR9W2lFnrKmcHNNQQOkoYmNePwHgpLW02hvLqBOoLYrLChBO9jqHcC7Q2CHZp1ivZt%2FSkJQCNhe4%2B6hzIDqCgpQLR9Sa6Qa7YwbKTjlA8Z1%2BTWwY1K9qcYgdkEAfokpXeQSpsdVs%2BFEbTC0wci9BjqkAUspqsVrrh8l9QIs2vBFC2pL5oVX655GahXnL66ujxVxnAMvSnABHb8Qd7D2GLGuTT3TFGU4JP59w07I%2FNmy6rTiMumJ7hwr28rlj6LxBPbICY0j%2BxBNzVa0XEfaibAuty%2FvklpttPdw0Dj781tgDUqccLsjrx3f0lpt9F1BaPXnxxycIPrHhkhFkD0PLLGIfjlxjrycMaLNddhlHLS0j65S9Xva&X-Amz-Signature=70586fd137cdcd5b6cf9101f04eccc019c6db243e271c8d6210dc1e2390bda5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZMG7FD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIB2AATWwqQIDleXQuAJX1fJOalUusaPkwJ4P7I%2FtgMhoAiBWVdAQVbKNT%2FDdmJkM2c6wRhGpdPpiSo0qgn%2B1Z2VQESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMISi3Z0FSGQzPtlQbKtwDjym8qMgtzWJuGpwgrJYx4POPfVDjSApAIGsNnB%2FzYSdU5LWfXaR2fd2ks6yi29BIdPq3BP7rVd4585c1sOQSQLd0chJDPMKcqhwB8LPj9B5dFJT%2FY48cCfkQKuhn1FOg0iwTQAakrt57rwxr7rIEgVd4Qtok36l5itublj7ci9S56mOhS07l%2BxIR9iYrGUr15fdZPCQO8dUYD8o1taijvaqA5Hnmes26VOGVsE2AY8aqBapiHuTs3VaaL4ahQL0G0plJTs42ACkjvjWR11ulF8WUVN85u%2BND3S2Zt%2BYcn7gGzuQF8Wn098HcE17Uy49qwolglMSD5bBAtgBk1l3KHy5eraMAd9kGQ7naYg5D7gt3Mt6MExzqA8dmWW7SM%2FIbfJgHhwlpnx4GbDts1XmvhzgHocSvNdo3Rf7QCrOT7YEpQfaPCxcAhbwPuUrMYrHcNs0qlG74gmAEfEoBIKNKd2RDgKBNVzAEWlnQPUjZKo5Fx342r%2BbiIrX6TXpJDRXOOxcZwGs4t2aFQ5WMdWZwYA8Yy8AaS5DjGTlkzDXllRch5l9EmThuN66lv90lrFyqKtNTyYZQc%2FNpkxbEHuhzioJL%2BZ4n0jywcVHeTl%2FPUQedh7XK769xjBiIXHYwlcHIvQY6pgGZkGRtTvviXwHT1yEyFXKLcrv%2Btzj5aVRm7cD0G8CLulvsTwcWapWkS%2BbelACgxLlBaf8zr2c0fS2G4onuoc0dHqMEHDNL2StYu1qHg%2BcG50CFCiWvG29vfPfnSJ5Nhv%2Fpdo8vIbhzsWWlsAy4fRDSTPF%2Bzk%2F5w0t%2B06OqHfunK4HGRuQtpLGJIl6RDOeRiWpyN1kM8ciXtcY4LicFzXHE6dqfCDEl&X-Amz-Signature=c6e128bad9c96ce55b333dc6aa7b401630760c6da12176244746776eb877a5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
