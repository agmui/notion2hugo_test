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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUHFFCX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuI2pPMw8H5d2z1bv0Qz5OsEAHmceiPwVrz4WrVx53vAiA9wlATpBq9dTIKMFIhujLoWyjgKYHJJLmdmquCZgNpkiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4oP5ZTwoWVYpw8muKtwDksTmw1fYzfccLXLNhWq9lWvy%2FNhmqK7xzeG1SoUlPfVPLG2%2B5jJ2VMAW7XXueenoSJUwykXKqBxZ%2B5b6rWB%2F1N76wu6ZcW%2FSL4ZsITX0JeUY4Mk%2FboTUKisEjktaAxhVlI0Ng8nDlJNYQ6N9APcJAziSn5fhYfbmb1GVi6LEa9L1%2FbagDtV8XzbNosvRzWEFI%2B7E0Ht5LFoZO6H9dL%2FVrOitxp%2BOjiqAJ0KzkEx4LWTFMwfHu2frhyc7FiQw%2FF7Uwq4Xw%2B03%2BXP6Rc96NxOx0P28QbLAKU0ECueDBfAnjeXXQmNYhjoSXvIxmabhHwQ6SkCYeF%2BUfxLr8rAcP12xLSIzjuH8Jnog9OsX3ZT%2F0TIZUQZSIb89QwdCMb%2Bai9WzHwz3Fj6Erm365dawJSoTkXRvFBFsLPOBRHNrXnYNrzyLpi0KPuUP11XSj%2FNcxHrCWYIcCltbfn16sjENJcjKDspkDtlCsgRfc5rWjR70hnN1SvUZwE%2B4gyMeKqZEoJsbPwXCyx6UTXsO8ZWPf5WO91d9ymOCZKOUPGtqPFt5wfuAXeDnpNr1lULF1DZg2JSHarLD6065jknYfWZl0IAX%2BkldxjWJ2UJucGtNXUH01EDomPMMHVdOR1ePB0ownpKuvQY6pgHSJizHUU%2F2qSWDP9cH0LUOGD7DFvXzVir%2FnhOBrLdawo5Qoii7r%2BZW4fDpsJGX0XYRWAKK43mH7QxU2wgy1%2BY9wJo1g4Vut28bGJ55xf2RDob8GSkTwr1vtIZhsMRPFqkZIiiHqSXPdDmigayjbSoD90LFy7U6qBChoCf9GRhasSVsJySNc964z6oxGhP7JhzOimZ5vdKZs15f13TEXUxSpQMElIJD&X-Amz-Signature=932b335b687733246b85ac817b9f28fff2ce5cbbd155f49e1adf23f4f1880b64&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUHFFCX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuI2pPMw8H5d2z1bv0Qz5OsEAHmceiPwVrz4WrVx53vAiA9wlATpBq9dTIKMFIhujLoWyjgKYHJJLmdmquCZgNpkiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4oP5ZTwoWVYpw8muKtwDksTmw1fYzfccLXLNhWq9lWvy%2FNhmqK7xzeG1SoUlPfVPLG2%2B5jJ2VMAW7XXueenoSJUwykXKqBxZ%2B5b6rWB%2F1N76wu6ZcW%2FSL4ZsITX0JeUY4Mk%2FboTUKisEjktaAxhVlI0Ng8nDlJNYQ6N9APcJAziSn5fhYfbmb1GVi6LEa9L1%2FbagDtV8XzbNosvRzWEFI%2B7E0Ht5LFoZO6H9dL%2FVrOitxp%2BOjiqAJ0KzkEx4LWTFMwfHu2frhyc7FiQw%2FF7Uwq4Xw%2B03%2BXP6Rc96NxOx0P28QbLAKU0ECueDBfAnjeXXQmNYhjoSXvIxmabhHwQ6SkCYeF%2BUfxLr8rAcP12xLSIzjuH8Jnog9OsX3ZT%2F0TIZUQZSIb89QwdCMb%2Bai9WzHwz3Fj6Erm365dawJSoTkXRvFBFsLPOBRHNrXnYNrzyLpi0KPuUP11XSj%2FNcxHrCWYIcCltbfn16sjENJcjKDspkDtlCsgRfc5rWjR70hnN1SvUZwE%2B4gyMeKqZEoJsbPwXCyx6UTXsO8ZWPf5WO91d9ymOCZKOUPGtqPFt5wfuAXeDnpNr1lULF1DZg2JSHarLD6065jknYfWZl0IAX%2BkldxjWJ2UJucGtNXUH01EDomPMMHVdOR1ePB0ownpKuvQY6pgHSJizHUU%2F2qSWDP9cH0LUOGD7DFvXzVir%2FnhOBrLdawo5Qoii7r%2BZW4fDpsJGX0XYRWAKK43mH7QxU2wgy1%2BY9wJo1g4Vut28bGJ55xf2RDob8GSkTwr1vtIZhsMRPFqkZIiiHqSXPdDmigayjbSoD90LFy7U6qBChoCf9GRhasSVsJySNc964z6oxGhP7JhzOimZ5vdKZs15f13TEXUxSpQMElIJD&X-Amz-Signature=de3513b3f7d2953907f3f6593337f7a4a22644cbbf52bf77dc714b6566fb3488&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FS43IVX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJt%2Ff1fkCuuaRsdce0uLCQWGUGpThLuzZzSqQQEiSIzAiEAzWqlH%2BICdAuaLHY6ngnKbEPqGKEUnnmr2YTwMqkDXx0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPhnzahNbR%2Ft3x7QircA%2BhOxzAIGsvJOCEhoNZsDSB%2FtDn6N2CJCQbPcw1OSwEutMpWUHXHUkA%2BqHs3lgvX1fhrPa75ACc0gUNNzZ%2FE0Eh15UF3K6iDMj8happo%2F0B7K4hKAlqPkZZMo%2FwOdQRSIbYHKYAVpaxrJgg4V41O4v3caLZlKxIuaM%2FNoSReLe5nsKm3UL%2FpXzEnSfGSmUrsXl2zgQvVOZE0JdDrCFr6%2ByBPf7RFuYdavSWaaor5vK6iNP8R7T2dBk5YVfwXkacymz1zru%2BaryCbdY4ICQt2rGuHYO2udRPPVStDeCqk%2B98%2B4r4QpTCXg8E2B%2BZVbkgL%2BDSbKB%2FGCZ3i2eX3ZkcKdEvc0DxoTuzuDOwzPjGV3FDRMOrnw2KTH8u0uD65rgdT2flAxrobpunydDw31cGFjnhbEj6wQIf%2BxVDI4joNiDh7S%2F8FNE5s%2F5oj4Ins43BJTQSJcNKEVK923g5z7OxA8k5B7ox2W93ErM3HQ4lSusKLFSlg0WS%2B16Ps6r8zYdNaxpiqpkyqF4op%2B7cRPArtvivKoY1huy2GRHWBbXFaEWNSkQVJJ%2FX6LYoMJZUsJFIvnpuqVOxG3xGy3gWZTFa4ZmDJnHGWoa%2FyyErfek7T7f97ButB7SztHr6m6DJxMJSTrr0GOqUBEva%2BtpixK9yQ9Rch27k9rHF%2FtujlmkB4%2B35VoEN2LQraUN%2Bt%2BqKh6VL%2FmcyxWq5QcR%2Bdqoazp3UiJ%2F9UkuLSsbByp%2BmEQFwByAw99EvyH5z4rgEWAhXMXOmez%2BYx8EkzU9N9o8XxN5abrIWVo%2BgRHFJycQak66N37dQix%2FZeH2L2dM%2F%2BLr7env0eskROZFMNFn6QAdfHNYXNyFapy2%2FZ1OTOPUe%2F&X-Amz-Signature=06279fd23337b3e322f93cbc479bd7a76553b12f59952657d2ec13dad1b4354c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRXLYI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2Bwla7hwMciyGtfU1hRJNy6wT5QK4R0xg4D9hHZd6vwIhAJwkiyRXuQLECpQ9G2ruQ0dr8vsyTi%2B29sPDgg9%2Fx7uSKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCgPu3Zc7xLzmWMXYq3APh0NqsouJs3zC7FiTvbYQhHxOpSP%2Bmh6ysXttTbBZxEG20rH9u2ZCGJt3P%2B3TULulSCfLEGNPiciIizrmnBlkDX3yB4IyZ206IK%2BWbY9%2FpOJ%2FcNB3C3A6a98BElk4qxLKIy%2F0z03unSzaLZ4opcIA9nnlHDMrpDJS%2BP%2BbdtN58qm%2FGv%2BMga%2BqsdFB1Fh3NERNrZslVVoRpizJDJn6l%2BFS%2BjwWuxzUQAKqso3lhtePYJKMPQsv%2FRFSufNyWDBOuJmDlHuhnAbzDhxejUvuhagC8qjYEyGQIrbfvXUsRrxSfWGSVdt8bzu%2FqH64UrBdk6OpB0gniHDFdertd0gpMY6xv0a%2FlF3LjOgLwBPDSg6nsRIvvHcie%2B478nvAGVenyJZ8j56nMtMk2PjVYhKSwabqv8Wu5oGQhzmNkQoTR7Q9ynu6LNKiCP3lb1pIfk5O8fwNJHVv1mBpqN8Rs1eeoQwYtUb3I3wGsDHTfkmRSbtYOo%2BMxeLkT0uf5Se4oAwxoHPsxvW4TCOsrbe9c9xhXrVazudVu3WbWEEd1wgQQ1ynWyJAqTaAy8HIzMS7mQ4yoGmTKKPIwpgcaPcyIc4%2BySNAlIZY3gPWXUQuZ%2Ft48DQZjaGRgoa0g1D6wUNN4EjD%2Fkq69BjqkAbX2ax7dAi4SaRPtm1n%2BUwl4sJ6m6iOM7CTcNT2KZhRccaFoaxItvVCNihz%2BT3PTlWzTg5ysEMOXUODZkteB5UlU1pWcgfMWIf5p1KQ6%2Fs%2Fbd25eANGHBkA3YBlPUA39Xm4FwrP7bwLNu5dikXwiaH07VFh%2B2bZX9VWH6SjDo72mZLH%2BqT6LKdACBQERsrpUCohjl1QpqrJWADZJvVyerQlrDchC&X-Amz-Signature=179ff115d9a93516ab0bab6983690e287c0f8739ab37b06fb190b71f0a3ef25f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUHFFCX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuI2pPMw8H5d2z1bv0Qz5OsEAHmceiPwVrz4WrVx53vAiA9wlATpBq9dTIKMFIhujLoWyjgKYHJJLmdmquCZgNpkiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4oP5ZTwoWVYpw8muKtwDksTmw1fYzfccLXLNhWq9lWvy%2FNhmqK7xzeG1SoUlPfVPLG2%2B5jJ2VMAW7XXueenoSJUwykXKqBxZ%2B5b6rWB%2F1N76wu6ZcW%2FSL4ZsITX0JeUY4Mk%2FboTUKisEjktaAxhVlI0Ng8nDlJNYQ6N9APcJAziSn5fhYfbmb1GVi6LEa9L1%2FbagDtV8XzbNosvRzWEFI%2B7E0Ht5LFoZO6H9dL%2FVrOitxp%2BOjiqAJ0KzkEx4LWTFMwfHu2frhyc7FiQw%2FF7Uwq4Xw%2B03%2BXP6Rc96NxOx0P28QbLAKU0ECueDBfAnjeXXQmNYhjoSXvIxmabhHwQ6SkCYeF%2BUfxLr8rAcP12xLSIzjuH8Jnog9OsX3ZT%2F0TIZUQZSIb89QwdCMb%2Bai9WzHwz3Fj6Erm365dawJSoTkXRvFBFsLPOBRHNrXnYNrzyLpi0KPuUP11XSj%2FNcxHrCWYIcCltbfn16sjENJcjKDspkDtlCsgRfc5rWjR70hnN1SvUZwE%2B4gyMeKqZEoJsbPwXCyx6UTXsO8ZWPf5WO91d9ymOCZKOUPGtqPFt5wfuAXeDnpNr1lULF1DZg2JSHarLD6065jknYfWZl0IAX%2BkldxjWJ2UJucGtNXUH01EDomPMMHVdOR1ePB0ownpKuvQY6pgHSJizHUU%2F2qSWDP9cH0LUOGD7DFvXzVir%2FnhOBrLdawo5Qoii7r%2BZW4fDpsJGX0XYRWAKK43mH7QxU2wgy1%2BY9wJo1g4Vut28bGJ55xf2RDob8GSkTwr1vtIZhsMRPFqkZIiiHqSXPdDmigayjbSoD90LFy7U6qBChoCf9GRhasSVsJySNc964z6oxGhP7JhzOimZ5vdKZs15f13TEXUxSpQMElIJD&X-Amz-Signature=33b62bfbffaacc7877b75e591f9613876a1cde6a1c9f3a4e4551aca317427de6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
