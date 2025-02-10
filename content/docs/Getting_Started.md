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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXROTP5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLn3Hi8GjTbvXeh%2BcMF16q5SBlOGfSOQqGxR%2BiKsuW4wIhAMK3xrU4roAfI3%2B6bbDzt756CdL1djPKoICOQs3V%2Bn2PKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOk36sWRa6EPSiTRYq3ANeNMMdlkcqyKuXDWId5tDLFjqidh7zFrUS6xefw3Zi%2BsbE6V5QaLYEnQgGpD%2BZXRDS6IujRDSa%2BHo7hs0iZpKvnhiIQyN485JeB%2ByMqE002wYJcOPEFqFw0CUsrh9%2B4O5504dlf48R1bxJy02idjT4n55KIRkpRbtlXyEdHrApxKxaqMpiW1%2BgX43cIbr6ts%2BfegMDLppQfuB3dSMeRlAjD7HqMYweBAvDuTDdD1zt9MTTx9W0yEA2Ea4gxv3A1UwRAGwfjKgxUlyRqpR8gZGeLhLNLOOdOAtnIYZH9qmsBJYYZpiD19Jqyb1gzltaHlMu93Xi%2B9QNDQ2eA%2Fye%2B40dQg0f6HhRVVKA83i%2B5luu1WOwECxOB1TIG7kvAxP7uZThilDfJQuUwVpmwwVqZLCx6mYX4KtUBleWIGFBr4znQisPuv5E2t%2BGy90gLWkSRRaA%2FkXK0wSXYr7C%2FIxAKoUE1pUMFlmblX2UYm5x5%2FdK191Oor1L4HBI03AIl%2BPHpoUYtMiQv%2BY%2Fuo6b6TUmZVJJKYCR8zlf6W%2BGZmPDq7LLXjCP4SD6XP%2FADuh%2FiwxM40phknDpKrup02X9%2F%2B750DzmRTC%2B%2BSMf8QI2v8MlvJahJICjuf4ww%2BQS89no8DCN2aa9BjqkAVYr0Yp97XQIK%2Fc6QE9SVy1G4HA7uUS7iR73iR2FHALvzCZULpi9i%2FcJvLy2Tkg55Fhyy%2Fbb1x6BaTBDBRGi2HoWqZLc0cLEyJV%2BJLRKtPgqTCbt6nMED4InYH5NWgoTo7a3roucmrSi1phNHDFTZfPZBorJQxXAJ730DfbnSMrXhUZ1hoZIz7Z8Z9H8ZpyuToqbuy2G4I3%2Bt%2F2LyrtfkJEvype5&X-Amz-Signature=bbe612b163ab10f148eb0edd7f2e650d0645c4f866048adc0cdd14464a96ed12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXROTP5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLn3Hi8GjTbvXeh%2BcMF16q5SBlOGfSOQqGxR%2BiKsuW4wIhAMK3xrU4roAfI3%2B6bbDzt756CdL1djPKoICOQs3V%2Bn2PKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOk36sWRa6EPSiTRYq3ANeNMMdlkcqyKuXDWId5tDLFjqidh7zFrUS6xefw3Zi%2BsbE6V5QaLYEnQgGpD%2BZXRDS6IujRDSa%2BHo7hs0iZpKvnhiIQyN485JeB%2ByMqE002wYJcOPEFqFw0CUsrh9%2B4O5504dlf48R1bxJy02idjT4n55KIRkpRbtlXyEdHrApxKxaqMpiW1%2BgX43cIbr6ts%2BfegMDLppQfuB3dSMeRlAjD7HqMYweBAvDuTDdD1zt9MTTx9W0yEA2Ea4gxv3A1UwRAGwfjKgxUlyRqpR8gZGeLhLNLOOdOAtnIYZH9qmsBJYYZpiD19Jqyb1gzltaHlMu93Xi%2B9QNDQ2eA%2Fye%2B40dQg0f6HhRVVKA83i%2B5luu1WOwECxOB1TIG7kvAxP7uZThilDfJQuUwVpmwwVqZLCx6mYX4KtUBleWIGFBr4znQisPuv5E2t%2BGy90gLWkSRRaA%2FkXK0wSXYr7C%2FIxAKoUE1pUMFlmblX2UYm5x5%2FdK191Oor1L4HBI03AIl%2BPHpoUYtMiQv%2BY%2Fuo6b6TUmZVJJKYCR8zlf6W%2BGZmPDq7LLXjCP4SD6XP%2FADuh%2FiwxM40phknDpKrup02X9%2F%2B750DzmRTC%2B%2BSMf8QI2v8MlvJahJICjuf4ww%2BQS89no8DCN2aa9BjqkAVYr0Yp97XQIK%2Fc6QE9SVy1G4HA7uUS7iR73iR2FHALvzCZULpi9i%2FcJvLy2Tkg55Fhyy%2Fbb1x6BaTBDBRGi2HoWqZLc0cLEyJV%2BJLRKtPgqTCbt6nMED4InYH5NWgoTo7a3roucmrSi1phNHDFTZfPZBorJQxXAJ730DfbnSMrXhUZ1hoZIz7Z8Z9H8ZpyuToqbuy2G4I3%2Bt%2F2LyrtfkJEvype5&X-Amz-Signature=7f396bfc5a75777248a420ebd5c5d4a36cce333be44c6ba20a29305569f08a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGOMU5US%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoD8o65bYFtuT8BcpPuDORnJyjlNdwUYLcL4UuTF5fCAIhAMIfpV9Ck45xpg5YA966cAddBw8H6zTsT4VUA%2FzqJj%2BBKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1eegrSrFxHH64RJoq3AOdvlaiFzaT8II3HE0Vp6R%2BwB7O35A0N0KCrrZDhCvqIyl2xSob5fbEdsk9%2FeJ3xfFQGQJSYS29KlnrYntfjoNZwBXoSa0l15QWRkIzAbQOnWLmlMM6LgsCO%2FgRsF0Bud9n67SSuAdl%2Fp4K8dWjEfl%2BIxMvTp9Z1eqG1l1k9zeasyhyzmFZBPdTmF0yAphTfY6uhxgLPcPf1I9yPbrIICbNtaSz%2Bmp6QI%2BhSGq05hETxI4gBL3iAWKnhRNv7Afm8K1Kgtt6TGbHqR0cE6WX9zwzcKQFiRHHOE0c%2FIIK8TCgUuQR%2Fh956I5B1kqJ6ncIiFf5tcwEFFwt5K4BRZDTd2Eqo42Ztfl32vSHdQF9gm9KYmri7%2BlWyKNWisSTC2Qg5Nbcv6C3nSiUV%2B0ra5HUUKccj9UoYPaYdQhzHJYUwWkC0s6%2FhYau0EVSePFpgYIeNhU5JeHakqMgA0l%2Fd93MQa2E7nBiPGsjvxvK1mQcc5HZDoPc9qYlIL7dqsAZH%2BYgFFy5oE5cynCG%2F8rilDXBMs6oYjhsJbJCYJmbXU9k4YjSVEZJNYm7cPaJbSvoKqquGlwrbUzy55v9z%2FW4l4zsQSTPStmV8rA4dOqJHQoRu8zMwHDzm58DihxFijL%2BIzDw2aa9BjqkARoAnUf%2BgkgUMr30iRSd17KVlTqlUikxBQT1IzuyrP8NBkBn1S7MQiBpJXvdawuaZ7KcnTOmzyQZU%2F4VREpqm39cpFHX1x4EGUYIn7HTGRVSkB5iRWPjUyFDH6FmNAcpo%2BSuZmv7zEP1IUySqwbMOKDv3dARTmY0oZ2LVtqBK0ix00CIK80g3UNcSJd4jBQgT%2BCMp34fctKvag5o9TaA1wyIYAoh&X-Amz-Signature=b66fa766bb32d589e4487270fb152157c56785b969f2d1028ddd146c5487e7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMJAKJR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwhxAFdo232F2IuARnq78vUmi6QP3Ta22i4uAskQizMAiBrdU%2Bwkv%2FO9pmYFWGoy6KlgwSAfk8wWGBaaYAT9o%2BmGSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpOjSQkvdEXDEPTjSKtwDynU2r8qjfZvE5NML6B1UQ2Sxacsqk1KFJCQwHeueLAUoul7NmlJaGTZGYnqM5LTHpHYbW4yEaHHl1WW3%2FkJgSfKw086UqZNOz77tCTiawZWMYRH7cBb3P5ZuRuSESnfF2Ef%2B1POZ1ltDb4BbIVTaoWN0fZNaHHBN%2FdS%2Be3u9cGf5BKGPi7soNq%2BTQvFPWyGeebkKqqnqEo41h4jK6JDOlqTVnDrmHezXcKJ3XV3iXir8W2RPJoWgQkRd%2BfvOJmqzE5xdI2hVFfu%2BNCf1PbkZrh9oEkpu35GEv3g5PYkJ2wS1BWBuScO3hb4soBjgpIXskSlXOcUBgcPcW%2FYTiX%2FHKtL63%2BUVX5w3K3nwehJziwqnxmvcA0JvkLCzGhPBDEjkikh5BNE0FNvPF3S9VFsZfklLtqj267km95xfntFKZENXb%2BREkoLG5%2B52pAJvbboV19YulNpPnyGDO9bbi30bdeDY06KALRwtoMUiJNaPEk7UrF3x1Avfyy7IF2gXlKYBnd%2FQjBsPUn5W%2FenDxtrOHffdycVYUHpF2ZAc%2BGznafhnWrN%2F%2FlCSRF23lRaYoLYjux2TEoHtdlbCBNHhWLOb9%2BS1%2B7vmZv%2BminA6wqV3s5USga%2BdjZklK0w2QhswudmmvQY6pgGhXFkRpyHO5o4Swh8c4vEqfJkklNnJy9MQeC31YvZxxrNXqvD%2B%2BVqOlHup%2BFeCJF7KtYQH97DQiCo9POQa%2BEHe8R3p03K3v1nmNBfhsOmGRy1ZLo4erCv%2BjNWRuQo4HBFyzr6jnUy0tzKXV8%2BvV1LEjOrq2M1Ll1pnN6bFQRLhfFkmTPqCJHkz8ZV2EMVCaRjtzOBftDi3eOU03kQUUIpMJ5%2FdNsIl&X-Amz-Signature=9b4e24c7cb288260924b36071463f97770df703c35291360738218de17b12e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXROTP5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLn3Hi8GjTbvXeh%2BcMF16q5SBlOGfSOQqGxR%2BiKsuW4wIhAMK3xrU4roAfI3%2B6bbDzt756CdL1djPKoICOQs3V%2Bn2PKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOk36sWRa6EPSiTRYq3ANeNMMdlkcqyKuXDWId5tDLFjqidh7zFrUS6xefw3Zi%2BsbE6V5QaLYEnQgGpD%2BZXRDS6IujRDSa%2BHo7hs0iZpKvnhiIQyN485JeB%2ByMqE002wYJcOPEFqFw0CUsrh9%2B4O5504dlf48R1bxJy02idjT4n55KIRkpRbtlXyEdHrApxKxaqMpiW1%2BgX43cIbr6ts%2BfegMDLppQfuB3dSMeRlAjD7HqMYweBAvDuTDdD1zt9MTTx9W0yEA2Ea4gxv3A1UwRAGwfjKgxUlyRqpR8gZGeLhLNLOOdOAtnIYZH9qmsBJYYZpiD19Jqyb1gzltaHlMu93Xi%2B9QNDQ2eA%2Fye%2B40dQg0f6HhRVVKA83i%2B5luu1WOwECxOB1TIG7kvAxP7uZThilDfJQuUwVpmwwVqZLCx6mYX4KtUBleWIGFBr4znQisPuv5E2t%2BGy90gLWkSRRaA%2FkXK0wSXYr7C%2FIxAKoUE1pUMFlmblX2UYm5x5%2FdK191Oor1L4HBI03AIl%2BPHpoUYtMiQv%2BY%2Fuo6b6TUmZVJJKYCR8zlf6W%2BGZmPDq7LLXjCP4SD6XP%2FADuh%2FiwxM40phknDpKrup02X9%2F%2B750DzmRTC%2B%2BSMf8QI2v8MlvJahJICjuf4ww%2BQS89no8DCN2aa9BjqkAVYr0Yp97XQIK%2Fc6QE9SVy1G4HA7uUS7iR73iR2FHALvzCZULpi9i%2FcJvLy2Tkg55Fhyy%2Fbb1x6BaTBDBRGi2HoWqZLc0cLEyJV%2BJLRKtPgqTCbt6nMED4InYH5NWgoTo7a3roucmrSi1phNHDFTZfPZBorJQxXAJ730DfbnSMrXhUZ1hoZIz7Z8Z9H8ZpyuToqbuy2G4I3%2Bt%2F2LyrtfkJEvype5&X-Amz-Signature=21d903e36a97efa618906f7a42b1b0eb6be2426f61fcc6dcc674e6f7f7332b06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
