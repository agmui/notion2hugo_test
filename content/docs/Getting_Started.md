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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IKAWDW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwjGoFOWTchg37XFj2PoQpj6qUEZ1wl%2BEYfzGa6EU0tAIgWnPHztgtz7j3XoVnrApkpS%2FlkkHuYmCujwq50eHdBrsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJaSmm94QA7NB%2BOSrcA2Q3Fq4tcbOBdDsfAjOWDuk1j%2FHXkf0M4ErA4ZoLCkt5p%2FGH1ewh7Ha76dboqApy4JM9nH7z%2BpxpDaPtI9DslOofDQmQNMhy5HP1pp8rnTL0nfB4F6RZXR2DTxoG8deTkQZmjfzzIMorM6UV45jzVAQ6K1VOlbnVqshIWdJrmkLatdfAGo%2BNRw6XmCNYrXSGKiwucXNaovW5AuGTTO68iM9gGF1g%2Bc3VTcs99byFdx3DkhR6jRVZEDo6HDLyQdJse3YtpAj7Y%2B0EvnuFKlQKRwjpV1QPldT6EgBi80xXMr4vq3YcEWd4emRWDzThHgVgb9OX2VsR7rM7V%2Fg0n1Rkqwk%2BAjbiGtwvNjSmKyC01XlPk6DOG1lkSj7AO%2BIyQZ3flWYQJ%2B6W3bj4vEwEiRNcU7p%2BadDuuMhfdLKU5yibcZpkW7RJD9qNBnyF2kJEBbBViu97ezfUHBUmhDCkHSZj2peM%2BV%2FPEECjGZK7WWxnWmVrxbP7UpriXYV4gNYzwipjqO9TWB59CMJu35zdWoOpQ6r63QAvaL4Ymh1VWniSL5cZzI%2FlmYoEP0zmFDf9l4dEoRUKcxCChGdcIg%2FDYkPz2Zr30uaxGyuhhGuzvEmfxNhLazLok0eKM%2BHXOKrAMPjwh8MGOqUBX%2Fj5UuyM6j0zIpwvmRFQPyOB8%2B70rLKs3WcxVshviUTdjhioS%2F0aA0%2FJI3xz7ZoJIi%2FMUXX4wSZhEKTxrDNR0j%2FDDmwjgeKQVa5sURXg2usdnpdnIDSB2F3sWhPi%2Faix1u335pDYJwoWi%2FuuorDGWr5ebwUOSmP%2FmE55q5S5Y49AuSi12xUYfUS8pWlyXyiZdBHjqWulcsAy6lExC5K1FPKz4NrU&X-Amz-Signature=dbf9c9227f0db3dbcd4e7d646985900f8d618507ce02faade02366f58006bb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IKAWDW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwjGoFOWTchg37XFj2PoQpj6qUEZ1wl%2BEYfzGa6EU0tAIgWnPHztgtz7j3XoVnrApkpS%2FlkkHuYmCujwq50eHdBrsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJaSmm94QA7NB%2BOSrcA2Q3Fq4tcbOBdDsfAjOWDuk1j%2FHXkf0M4ErA4ZoLCkt5p%2FGH1ewh7Ha76dboqApy4JM9nH7z%2BpxpDaPtI9DslOofDQmQNMhy5HP1pp8rnTL0nfB4F6RZXR2DTxoG8deTkQZmjfzzIMorM6UV45jzVAQ6K1VOlbnVqshIWdJrmkLatdfAGo%2BNRw6XmCNYrXSGKiwucXNaovW5AuGTTO68iM9gGF1g%2Bc3VTcs99byFdx3DkhR6jRVZEDo6HDLyQdJse3YtpAj7Y%2B0EvnuFKlQKRwjpV1QPldT6EgBi80xXMr4vq3YcEWd4emRWDzThHgVgb9OX2VsR7rM7V%2Fg0n1Rkqwk%2BAjbiGtwvNjSmKyC01XlPk6DOG1lkSj7AO%2BIyQZ3flWYQJ%2B6W3bj4vEwEiRNcU7p%2BadDuuMhfdLKU5yibcZpkW7RJD9qNBnyF2kJEBbBViu97ezfUHBUmhDCkHSZj2peM%2BV%2FPEECjGZK7WWxnWmVrxbP7UpriXYV4gNYzwipjqO9TWB59CMJu35zdWoOpQ6r63QAvaL4Ymh1VWniSL5cZzI%2FlmYoEP0zmFDf9l4dEoRUKcxCChGdcIg%2FDYkPz2Zr30uaxGyuhhGuzvEmfxNhLazLok0eKM%2BHXOKrAMPjwh8MGOqUBX%2Fj5UuyM6j0zIpwvmRFQPyOB8%2B70rLKs3WcxVshviUTdjhioS%2F0aA0%2FJI3xz7ZoJIi%2FMUXX4wSZhEKTxrDNR0j%2FDDmwjgeKQVa5sURXg2usdnpdnIDSB2F3sWhPi%2Faix1u335pDYJwoWi%2FuuorDGWr5ebwUOSmP%2FmE55q5S5Y49AuSi12xUYfUS8pWlyXyiZdBHjqWulcsAy6lExC5K1FPKz4NrU&X-Amz-Signature=51f194d4b25ed9a3f04fe2045b3f1339b29649617e7f40861cb18d9abb01537f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IKAWDW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwjGoFOWTchg37XFj2PoQpj6qUEZ1wl%2BEYfzGa6EU0tAIgWnPHztgtz7j3XoVnrApkpS%2FlkkHuYmCujwq50eHdBrsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJaSmm94QA7NB%2BOSrcA2Q3Fq4tcbOBdDsfAjOWDuk1j%2FHXkf0M4ErA4ZoLCkt5p%2FGH1ewh7Ha76dboqApy4JM9nH7z%2BpxpDaPtI9DslOofDQmQNMhy5HP1pp8rnTL0nfB4F6RZXR2DTxoG8deTkQZmjfzzIMorM6UV45jzVAQ6K1VOlbnVqshIWdJrmkLatdfAGo%2BNRw6XmCNYrXSGKiwucXNaovW5AuGTTO68iM9gGF1g%2Bc3VTcs99byFdx3DkhR6jRVZEDo6HDLyQdJse3YtpAj7Y%2B0EvnuFKlQKRwjpV1QPldT6EgBi80xXMr4vq3YcEWd4emRWDzThHgVgb9OX2VsR7rM7V%2Fg0n1Rkqwk%2BAjbiGtwvNjSmKyC01XlPk6DOG1lkSj7AO%2BIyQZ3flWYQJ%2B6W3bj4vEwEiRNcU7p%2BadDuuMhfdLKU5yibcZpkW7RJD9qNBnyF2kJEBbBViu97ezfUHBUmhDCkHSZj2peM%2BV%2FPEECjGZK7WWxnWmVrxbP7UpriXYV4gNYzwipjqO9TWB59CMJu35zdWoOpQ6r63QAvaL4Ymh1VWniSL5cZzI%2FlmYoEP0zmFDf9l4dEoRUKcxCChGdcIg%2FDYkPz2Zr30uaxGyuhhGuzvEmfxNhLazLok0eKM%2BHXOKrAMPjwh8MGOqUBX%2Fj5UuyM6j0zIpwvmRFQPyOB8%2B70rLKs3WcxVshviUTdjhioS%2F0aA0%2FJI3xz7ZoJIi%2FMUXX4wSZhEKTxrDNR0j%2FDDmwjgeKQVa5sURXg2usdnpdnIDSB2F3sWhPi%2Faix1u335pDYJwoWi%2FuuorDGWr5ebwUOSmP%2FmE55q5S5Y49AuSi12xUYfUS8pWlyXyiZdBHjqWulcsAy6lExC5K1FPKz4NrU&X-Amz-Signature=acbe66a1d3434bef8da40c643b8a1d3644172fbddea70358cedcbbebd658c948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDZUTMS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZOJrTwXw2IwJZ3mXw3hQ%2FQEzLe%2FJCsuUp3sg9XgFHgAIhAJVVGnMEgwIsKN55NHp6gqde7F7tSnVV4lYQN3leVhkhKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiaKtZnhNGIpSVW%2Bwq3AOsZReVXdBFK5LdFJITFdg26pXEymvaovzkfMbPOIxTjf2b2YrjRIeEniF50AawYdUlXf90FMjoSMFISC5rr8oQIH5EHVB73182yaEChuZfDiDmkjzB9ntFZhuPjGXut1bBs8JZbITRe2WCT8JosjropcsVlVpdXlnbBbLpWhdV7lZVRbmJXvpIv35K9uxsI8v6mhtTGB0PmlpHyMcmletop22zIahwB7nftyLsXdz3SJLLqwUtW2TkjZP1R0NZdJ9urxTGkmnWKJYpf%2Fk6ckLwYRJ3ayEa4goD%2FuyDddhkLwtIEZ3rX3s9LKofz72vXA2HOktJR0rw%2B13rtQ4jQQI%2F9njuFpAzW9vfbZ1ZuqDPHcJPp8fGL81Z%2FrraA86z22U5fqe6FhrOSf%2BAy9gQVjwMKI63eAvsoauUHG%2BAyOfxJVt4wpqt25DG1aaeSpx16qY5OjpTgrnWys3za9Xw9qIJtdnUJ7lPFGP2G0NY8IHMVpABxB976BMxhwYnZ8MPxBKTJdm5C40z3nQ4Tv8tvKLFQVgLZmkefXy%2B%2ByxGcSB%2FeNPxLhiHWvttGvcEndphh5vKiEJHqBqp9%2BvrYs2WdWCWcT05gh8%2Ffn%2B0RPKvNloH6xcND5%2FdH%2Bl2F6fcJjCy8YfDBjqkAWZmQY4HGiIxK2AScc26lJHy5PdZRB2ZMGomVzIHCCRQ3u2jtJ6dNAI928dsCneet6ON1Zt5wgzR85hwgiU17U6L%2B1q2xG%2B0ReI22WRVCvsKJbe2PsUoZUCvsL%2FLOtS1Jk3q%2BzntZTqZDxckgsdPuupwgZ1%2B9y3lPoL8ttR86K4BeA2aVzH%2BjEXEI%2BRitIIQL9QibBU7qQn8Qx4nuFcuYufIGp9b&X-Amz-Signature=f1c92469af05eee6783708a582dbc129bc6fb35fbcb60a098895d03ef1a0d6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYQ27TW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwIQdOlWFH2zZNO0MEo7dho9uRQRvrr4x9umrGpFQS1wIgSeVhL9CffmASWIVHdqrEZPYEWlz6Q7YuTPNRh9AuupQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhIcbeoEjWAx%2FsiJCrcA6ovacjThc2nbQ%2F2%2B6Ugv68h0db7zjQGo4hpFDNajc2L2B8qRqApJZ1C0t9XJffIVt4vJbj2Liai7iSAm%2BBJz%2FrLgi9NEljGLePftdkMT%2FsTCe9dpPmxo%2Bxc%2FCadgQL5l5KD7F%2BH23%2BdgMnr1n4qxfm%2FsJxy38EEBM%2BV1sOrRfSetWFRGb%2BHu4WMajz7S0ZrGNjwNYpVccbQ8JPjdWzcxGnnHBn6PBV1v6j2UX%2FltpAdJp4AceiJOth3Y4TuIx5DcS%2F0crbVAGQuwv9BlwGzBpz4wQD9aGYOybYbSswbxQrrn1zyq9lqHtYcQSu9%2FgJiwe7EnMfEKqOk0HBaS4gFtLFOTOpkmAkEHgDC1rUuca3w6Ktq%2FXNOiOlWNqAHmojoaeD%2FtGXXcydUaR31c9AjxA%2FtwgejFCH07jy1SUmuuL478i0UcaRIVRbalgHbDi%2FHu8625%2F0WOSrWiziRXWxfyC0MspJUu32HBFfhtuH5v9rE28S4LaB%2F123i0b%2BwE2oJ90URUx%2Bz2u7xo0GCtghJvE1De13IxZBRLRVdMpCUnPEKwp1IRSXbugdPEPP9VyqdV4yAKcNS4pObp%2BM6%2BEpKkHGwFD%2FBRoi6afrZESv4lTWOMUAwdyfQQEEGO%2FIGMI7uh8MGOqUBsQWMjT1W3HnOyDzdpbjTiCKm65mA2Vtuu1VqEuX%2BkAF%2Fw44ZVuoTMEtyF%2FiHGt69W2e0Y19oxi3w0ZeU3dIWQVfLxImlMRvqc1d2aoulc%2BbnokVwflsNmAgXBxOQymfWggXwgze4lCoivH%2FBGN2S1bKmXrufCuNK%2B954Nx10A2ef%2BSKo%2FaUMfKAQuYH%2FC444EZ7ltfs%2FKZTrI5Iiy9W4KaSLXaht&X-Amz-Signature=b7f0f571328cb89a55fbf6fa625394a5cc924f7bfe208b3371b3fdb0f192940d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IKAWDW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwjGoFOWTchg37XFj2PoQpj6qUEZ1wl%2BEYfzGa6EU0tAIgWnPHztgtz7j3XoVnrApkpS%2FlkkHuYmCujwq50eHdBrsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJaSmm94QA7NB%2BOSrcA2Q3Fq4tcbOBdDsfAjOWDuk1j%2FHXkf0M4ErA4ZoLCkt5p%2FGH1ewh7Ha76dboqApy4JM9nH7z%2BpxpDaPtI9DslOofDQmQNMhy5HP1pp8rnTL0nfB4F6RZXR2DTxoG8deTkQZmjfzzIMorM6UV45jzVAQ6K1VOlbnVqshIWdJrmkLatdfAGo%2BNRw6XmCNYrXSGKiwucXNaovW5AuGTTO68iM9gGF1g%2Bc3VTcs99byFdx3DkhR6jRVZEDo6HDLyQdJse3YtpAj7Y%2B0EvnuFKlQKRwjpV1QPldT6EgBi80xXMr4vq3YcEWd4emRWDzThHgVgb9OX2VsR7rM7V%2Fg0n1Rkqwk%2BAjbiGtwvNjSmKyC01XlPk6DOG1lkSj7AO%2BIyQZ3flWYQJ%2B6W3bj4vEwEiRNcU7p%2BadDuuMhfdLKU5yibcZpkW7RJD9qNBnyF2kJEBbBViu97ezfUHBUmhDCkHSZj2peM%2BV%2FPEECjGZK7WWxnWmVrxbP7UpriXYV4gNYzwipjqO9TWB59CMJu35zdWoOpQ6r63QAvaL4Ymh1VWniSL5cZzI%2FlmYoEP0zmFDf9l4dEoRUKcxCChGdcIg%2FDYkPz2Zr30uaxGyuhhGuzvEmfxNhLazLok0eKM%2BHXOKrAMPjwh8MGOqUBX%2Fj5UuyM6j0zIpwvmRFQPyOB8%2B70rLKs3WcxVshviUTdjhioS%2F0aA0%2FJI3xz7ZoJIi%2FMUXX4wSZhEKTxrDNR0j%2FDDmwjgeKQVa5sURXg2usdnpdnIDSB2F3sWhPi%2Faix1u335pDYJwoWi%2FuuorDGWr5ebwUOSmP%2FmE55q5S5Y49AuSi12xUYfUS8pWlyXyiZdBHjqWulcsAy6lExC5K1FPKz4NrU&X-Amz-Signature=a9d21977c7ce1ecd7bc969c5ea60a7b03015ed94bb0845f94175992af73d7e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
