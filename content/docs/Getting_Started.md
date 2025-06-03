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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM7LJNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFqHkrMYScAqkRmkIc%2FgUThDLz3esRjjfuTrbOkH7ZTWAiEA%2F9wXeLzFlglD4tJ1YfPNB46G66kNqvkzHi0gwIcF4tUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxZwwpvddCqMKJj8SrcAwL%2BCWS1cksIDI1RHogSL5gP9smdL3nrEsOlrCiiYUTYqQTYK2ek7JnBSpi1goENjlO8fVFkBTc%2FSm9h%2BsmJ%2BZy9PIFf%2FJVNp9%2BXH%2FOGzq6Tgei8Q1Uz4%2B386wmNn%2BU9vV7nXWGQ0aTjvn%2FaeVYFpYu0B8CFWpwD5swlkXjZHUpndqNbWvZuDG29u%2BP6sBDFSVAQaGItnz5bxu9SRpmLY%2F5XaYqVhXokSMFa7yFy6ruLp%2F2u3dLqRBsHYThkXV8FS9tt8devwL3OHGWv5oqYivp%2FUL7B%2BY%2Bto8LukoA0O6mS%2BeCqveRZfPnJYlTIR5eORf7TsZtpeiI39rd%2BjcP7diXLPSsklA18ckXZyl%2FsJEzjL3pnZ7tl318qi57Mr6lcznULNOQBTHb%2BBBdXodhCxwdxnTo4HbV2a8D6HNWJE8B6QqdRGpI7eo9IKpv9%2FUXAcQlbovMrHr6XEbsFMKtU7gUnnIm23%2F2GDB9%2FL6eCtSrTzNuQYTpmNsLBQFae2mgjq15AjkclSoVrUP9Guwnk5k3437PfSszGZvqRzk1UFYNRQJNW1CRP4PM9qvei%2F1YbVoqd5I6dZ3OKEVt4kKIcsQyC86VMPnlzqVVDfdV96eJuyvibq2oqeR5uRFhzMKeM%2BcEGOqUBYJg4AfqapF3GfPUNjbWwSIQ8VGS2nZHpV04j9EXhNHweCNCy84kJ8Sqa3GczlyJHqO%2B0IWUg18eh4kqhJs%2FAfo3OdVB2NADec0Fce4uV4RDltnMWgIeqynf6vYVacF%2FeTAIPUQT4nlDZ0qkSoZQ2R1%2Fz6VKGConIhepi6piEKw2WFl%2BBoeOht9MT38Pe6CJKaBgbHHMJLvHaKgbyisXKiF2Ot78p&X-Amz-Signature=32c020d0792fb90a0fcd98cbc13090ddda7b40616e1e8cb3304f2f4a999d487f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM7LJNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFqHkrMYScAqkRmkIc%2FgUThDLz3esRjjfuTrbOkH7ZTWAiEA%2F9wXeLzFlglD4tJ1YfPNB46G66kNqvkzHi0gwIcF4tUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxZwwpvddCqMKJj8SrcAwL%2BCWS1cksIDI1RHogSL5gP9smdL3nrEsOlrCiiYUTYqQTYK2ek7JnBSpi1goENjlO8fVFkBTc%2FSm9h%2BsmJ%2BZy9PIFf%2FJVNp9%2BXH%2FOGzq6Tgei8Q1Uz4%2B386wmNn%2BU9vV7nXWGQ0aTjvn%2FaeVYFpYu0B8CFWpwD5swlkXjZHUpndqNbWvZuDG29u%2BP6sBDFSVAQaGItnz5bxu9SRpmLY%2F5XaYqVhXokSMFa7yFy6ruLp%2F2u3dLqRBsHYThkXV8FS9tt8devwL3OHGWv5oqYivp%2FUL7B%2BY%2Bto8LukoA0O6mS%2BeCqveRZfPnJYlTIR5eORf7TsZtpeiI39rd%2BjcP7diXLPSsklA18ckXZyl%2FsJEzjL3pnZ7tl318qi57Mr6lcznULNOQBTHb%2BBBdXodhCxwdxnTo4HbV2a8D6HNWJE8B6QqdRGpI7eo9IKpv9%2FUXAcQlbovMrHr6XEbsFMKtU7gUnnIm23%2F2GDB9%2FL6eCtSrTzNuQYTpmNsLBQFae2mgjq15AjkclSoVrUP9Guwnk5k3437PfSszGZvqRzk1UFYNRQJNW1CRP4PM9qvei%2F1YbVoqd5I6dZ3OKEVt4kKIcsQyC86VMPnlzqVVDfdV96eJuyvibq2oqeR5uRFhzMKeM%2BcEGOqUBYJg4AfqapF3GfPUNjbWwSIQ8VGS2nZHpV04j9EXhNHweCNCy84kJ8Sqa3GczlyJHqO%2B0IWUg18eh4kqhJs%2FAfo3OdVB2NADec0Fce4uV4RDltnMWgIeqynf6vYVacF%2FeTAIPUQT4nlDZ0qkSoZQ2R1%2Fz6VKGConIhepi6piEKw2WFl%2BBoeOht9MT38Pe6CJKaBgbHHMJLvHaKgbyisXKiF2Ot78p&X-Amz-Signature=bc66719ec3e7b8a7d03c737adab696f24ae6ece068c0202edf01fc939191ff88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM7LJNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFqHkrMYScAqkRmkIc%2FgUThDLz3esRjjfuTrbOkH7ZTWAiEA%2F9wXeLzFlglD4tJ1YfPNB46G66kNqvkzHi0gwIcF4tUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxZwwpvddCqMKJj8SrcAwL%2BCWS1cksIDI1RHogSL5gP9smdL3nrEsOlrCiiYUTYqQTYK2ek7JnBSpi1goENjlO8fVFkBTc%2FSm9h%2BsmJ%2BZy9PIFf%2FJVNp9%2BXH%2FOGzq6Tgei8Q1Uz4%2B386wmNn%2BU9vV7nXWGQ0aTjvn%2FaeVYFpYu0B8CFWpwD5swlkXjZHUpndqNbWvZuDG29u%2BP6sBDFSVAQaGItnz5bxu9SRpmLY%2F5XaYqVhXokSMFa7yFy6ruLp%2F2u3dLqRBsHYThkXV8FS9tt8devwL3OHGWv5oqYivp%2FUL7B%2BY%2Bto8LukoA0O6mS%2BeCqveRZfPnJYlTIR5eORf7TsZtpeiI39rd%2BjcP7diXLPSsklA18ckXZyl%2FsJEzjL3pnZ7tl318qi57Mr6lcznULNOQBTHb%2BBBdXodhCxwdxnTo4HbV2a8D6HNWJE8B6QqdRGpI7eo9IKpv9%2FUXAcQlbovMrHr6XEbsFMKtU7gUnnIm23%2F2GDB9%2FL6eCtSrTzNuQYTpmNsLBQFae2mgjq15AjkclSoVrUP9Guwnk5k3437PfSszGZvqRzk1UFYNRQJNW1CRP4PM9qvei%2F1YbVoqd5I6dZ3OKEVt4kKIcsQyC86VMPnlzqVVDfdV96eJuyvibq2oqeR5uRFhzMKeM%2BcEGOqUBYJg4AfqapF3GfPUNjbWwSIQ8VGS2nZHpV04j9EXhNHweCNCy84kJ8Sqa3GczlyJHqO%2B0IWUg18eh4kqhJs%2FAfo3OdVB2NADec0Fce4uV4RDltnMWgIeqynf6vYVacF%2FeTAIPUQT4nlDZ0qkSoZQ2R1%2Fz6VKGConIhepi6piEKw2WFl%2BBoeOht9MT38Pe6CJKaBgbHHMJLvHaKgbyisXKiF2Ot78p&X-Amz-Signature=10290557c84da8d5e6ba850578f77fec44b8b9a0ac374365ddaa7d41028718e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEO47N3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD4vtNtXurFLMyPvwkTzps5RTpPdxBNQYhxPOSP%2BSXfjwIgCCII6yzFXsVJtFvnhE3c%2Bu8h1mtuHUda9MOtPpyK8ggqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwnFjn1y1BDiLT4gircA%2FdZ6JkFeZWD703iEs1zNPviTkS2JfQAeP8uRQMidKxkbSvYZR0mwcVdw6WUXSDOUmM7zIKveogHobblF9tOiso6Hy%2Bv9Spy8GvYFaYjHWoOOtGLIuNWLZ%2BgljoL8LIaHU77DI%2F7c87688p2XY0AOshVsCHFR%2BgTKyoXgP%2FOCvyrZE8CeDJ39rgaClH37ZacUBRQlzJoX2S%2Fm5GmRx7jRBc9EzjUBac0izg7nnA6y6dXD%2Buj6B5icvS9LuOxqnd4%2F3tirnBEbsCEtHHuJO2vAQrAz3Y3%2B9qywvCGF1L8aesdpNU7bTQRU8aw57xkJlEVslJ3%2BuZOpjyjXnabxihsZ7O4N3z%2FvUoClcISpHQY4hJMNrPSrsHQPagz4rin3AwN1UzkpSrDG6iA4itDhrMLA66fk6ivXGgss9iiMP9D7om%2FulDO5otJjDQrrB1jjTzAVsbo0z3RU47Nm6j%2FoYETMKmxrOomoZWpvQuCA5P5T7DlF%2FNvbXeJ0VyaC0kM0YDNhxxa6aoE%2BS37txYKJn6l2Xi2dUU4QSnpPCV5HR%2BfbxMgvQ2x1laR%2F37xO24HaGAf0X1zFBbS4gU%2B9myiCuURc6J14r5anSGoKUJCm%2BCj1p6vLTe5N%2B11vZ%2BRuepBMIKM%2BcEGOqUBw6PJBMRLZ90UHHkDX9DKVip7TWNrHJx5tsBNJpMHzp9jOhMaNrpYaEnGMfuntv48n4epB1vFzqjM18m3iyKdMLj0nQfLfTq0n8MsnbWOd0IWCgX84kZPhd3XDd097mFSRgz%2FXHCEBYhpEDQVuvsdT6t5XOUzFb%2F3QiJg7yx7mNL2ktJUWdMRRIY9tC7oRfXC8oUMQdFP9eQmRFr2lwVH6%2F0SS8H1&X-Amz-Signature=b4abc62d789e3837a206b3a511e63012f8e9b8aeb8dc9348a28c36c9cefabc52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEOIAA4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCv5ZNTPcYrpG%2Br5UUCn%2B5X7GIIr2DN%2BlR6hezeEQwWqQIhAL2m72At8DhNGMmB6xhtZhvJO5aeK1kbo6dkA2RLCWtdKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdVc5PJ8iuSxRwZLkq3AN56Tm0gJLa%2F0rIHbu5wgCH7mXP%2BPz%2Fw7ucdxs5XpJHulxUFZtHYD%2F6a2dT%2FrQpm7s1DHBUZ3lVVy3lHxQbNUNd70nspxwp4u7bPb0wCNLWssyTBI%2F5IaqMcQT9uB2j3HYcyCZk6ZuEPXzERmzT%2BxiEwmpPxYCb3hbwxL8IRQddvU6HF%2FH4FSwq65xk%2F8xmDqsamCmDQPt0p7lPxw822lQ22Xa6SGVelS%2Flcm%2Btfx6UMCWF9kAzh6GzxhAWFsLgPpGkp9QILgjNo%2FQztxmVTPUq%2FIhHM8XPCreDXf9s7LMNwpD0adMpvNSrY%2BMkld0q%2BSga6VxtDP%2FEJiPo0JPZ%2BHLpaBkbixhBKqiqrszlE4fHejgJKK5NOh2ahL%2Bjlxb6lXqfJByEEgalxjXjMGN7NxtMNywRw5DcqClXnM0RBGHul%2BZ1srEvjj97Z0NfG%2FxgVesGiBdnMIf2pwdz9wYuZAxwcVthcSUIJKIfZZs6Zo6KU5agsUbop7q2ibj26%2FenQlsIirVoEXCTCiCtz9qM%2ByOSUoU704nROa29fxuV%2Bgqq4OQvf6H4QnV6Varkz1eo%2B%2BSg5ZhUF6VsB8hZfTM1Ynxjy%2Fv%2B5WrtuvmbcdXGxd5UXQDj0q9%2FINKaKc6klzD2jPnBBjqkAQSVGIAKilBVGGqB%2BjZTRcuDsQKrRF1byNJLDAqoU%2FkrBvdIbgf8shP3wbvTlgqyiwHElt7H%2BTDC28OrsKocrWy6LwfE2BxE6Pk%2BEh0%2F%2FV0B9nFuQUjFW5qinvYAllLdJzH4pGcyZtKJ4L3McQz7MR%2FiNFoZe4IPx9H6ZwDLu9lAbaCf%2B281mPIaX2bLVLqRsgY1vLoq8I6vMN8i71PuNdxGWuI2&X-Amz-Signature=01c182dfa2fc8a84876ef70174e8e5e6038ea816d09891ec9de0d60f635293a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM7LJNI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFqHkrMYScAqkRmkIc%2FgUThDLz3esRjjfuTrbOkH7ZTWAiEA%2F9wXeLzFlglD4tJ1YfPNB46G66kNqvkzHi0gwIcF4tUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxZwwpvddCqMKJj8SrcAwL%2BCWS1cksIDI1RHogSL5gP9smdL3nrEsOlrCiiYUTYqQTYK2ek7JnBSpi1goENjlO8fVFkBTc%2FSm9h%2BsmJ%2BZy9PIFf%2FJVNp9%2BXH%2FOGzq6Tgei8Q1Uz4%2B386wmNn%2BU9vV7nXWGQ0aTjvn%2FaeVYFpYu0B8CFWpwD5swlkXjZHUpndqNbWvZuDG29u%2BP6sBDFSVAQaGItnz5bxu9SRpmLY%2F5XaYqVhXokSMFa7yFy6ruLp%2F2u3dLqRBsHYThkXV8FS9tt8devwL3OHGWv5oqYivp%2FUL7B%2BY%2Bto8LukoA0O6mS%2BeCqveRZfPnJYlTIR5eORf7TsZtpeiI39rd%2BjcP7diXLPSsklA18ckXZyl%2FsJEzjL3pnZ7tl318qi57Mr6lcznULNOQBTHb%2BBBdXodhCxwdxnTo4HbV2a8D6HNWJE8B6QqdRGpI7eo9IKpv9%2FUXAcQlbovMrHr6XEbsFMKtU7gUnnIm23%2F2GDB9%2FL6eCtSrTzNuQYTpmNsLBQFae2mgjq15AjkclSoVrUP9Guwnk5k3437PfSszGZvqRzk1UFYNRQJNW1CRP4PM9qvei%2F1YbVoqd5I6dZ3OKEVt4kKIcsQyC86VMPnlzqVVDfdV96eJuyvibq2oqeR5uRFhzMKeM%2BcEGOqUBYJg4AfqapF3GfPUNjbWwSIQ8VGS2nZHpV04j9EXhNHweCNCy84kJ8Sqa3GczlyJHqO%2B0IWUg18eh4kqhJs%2FAfo3OdVB2NADec0Fce4uV4RDltnMWgIeqynf6vYVacF%2FeTAIPUQT4nlDZ0qkSoZQ2R1%2Fz6VKGConIhepi6piEKw2WFl%2BBoeOht9MT38Pe6CJKaBgbHHMJLvHaKgbyisXKiF2Ot78p&X-Amz-Signature=1ff98c5c8fbc4a296297d28da0ba069d94d9c09e27bde23d49e95f4a73a544ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
