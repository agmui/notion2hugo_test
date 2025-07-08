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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626V3ITTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwN39RNjbrBWmyJCRvZ3IJ3W2zshGuizOPFpH5SeY9gIhALbgQfUreVJiGCw6vrER1ePc67nC3Ko3Z1wlJtExhMi6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxtKUyNrgIrMlRpjMq3ANL8JQlEw2M9uNwoQDW2WMhcufiH9Hfo02RUxF3bQUFzyONUN2zUs8lvuseEX%2BNgf7dEUToqmeujsjRIkRAReSrQCoLt%2FA8DOJOzUltHJ4PFcurneA7FtpGPTbJAAqSh70G6MWa4rYtt%2FYIZtqGaAUMGwmCIBSjQULF7cDXSQVPfRJJN4CNbV%2BWV2CFXj3ppmEs72M3ZyFG9HUPDCUH5y3lb80RjfG5UCBtD5TyK51lDjyeducbx3rLcR22L4efu7Qpixz%2ByH3ytx11Kd%2BjiZbY5oWXHGUGKmyx45qtT2e5tZ%2FWR2bmuzlwjPQSEdrvNHt4O9AvvDqXZJv2uA0gllv6eytS1RAYgdR7PbMY9liPcNpkmcr8vqGOoCDtFWB8OIUDVmyH%2FxH9MZLBejFJ2x2H4a74qkRoPyn5b0LL%2F2R%2BtQDBEMbw1Wm%2FfQ555nPQ9In94x2QOahGwFoViJjoWd%2BIsStm2XLkj%2BPt8NEukCnANgCVJmF0IInDdYWuo3T2IREvzNc2Jngh2iQkfsEo2rQN0aCkmOdhUs9qVkz1HKkJNzZmlQe24RIwUBZyFO1zepQmbooTnx2pmiYS7la0TFnq9WZWfLG0BZIurnF4EJUjWT0AcZKSYHoTWwIS8jDmrbXDBjqkARBBB6A%2F%2BfTRQtXGcx%2FqOEKdIaueA4W%2BwZldNVpu0rhybBa4dPzJnfk3P9NudUKk90oKm8vMabm%2FAu9%2BKiZNmqngW6w%2Ftg0iJghjWaqzrVBPh1UWx8its2LZj3pADOT7mFosOdc%2BeFNyA8afg1iYsSh6D7WwE0IIJfz%2Ba26pHybqbSFmmmjh2yMEfIAKYwEUOolfv0bjENDQTnycUGZcdkCMT9Tc&X-Amz-Signature=449727b520b5ef39add2a78fadc1c8c68a1a7045520e5ae49a6fe464ac1c7388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626V3ITTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwN39RNjbrBWmyJCRvZ3IJ3W2zshGuizOPFpH5SeY9gIhALbgQfUreVJiGCw6vrER1ePc67nC3Ko3Z1wlJtExhMi6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxtKUyNrgIrMlRpjMq3ANL8JQlEw2M9uNwoQDW2WMhcufiH9Hfo02RUxF3bQUFzyONUN2zUs8lvuseEX%2BNgf7dEUToqmeujsjRIkRAReSrQCoLt%2FA8DOJOzUltHJ4PFcurneA7FtpGPTbJAAqSh70G6MWa4rYtt%2FYIZtqGaAUMGwmCIBSjQULF7cDXSQVPfRJJN4CNbV%2BWV2CFXj3ppmEs72M3ZyFG9HUPDCUH5y3lb80RjfG5UCBtD5TyK51lDjyeducbx3rLcR22L4efu7Qpixz%2ByH3ytx11Kd%2BjiZbY5oWXHGUGKmyx45qtT2e5tZ%2FWR2bmuzlwjPQSEdrvNHt4O9AvvDqXZJv2uA0gllv6eytS1RAYgdR7PbMY9liPcNpkmcr8vqGOoCDtFWB8OIUDVmyH%2FxH9MZLBejFJ2x2H4a74qkRoPyn5b0LL%2F2R%2BtQDBEMbw1Wm%2FfQ555nPQ9In94x2QOahGwFoViJjoWd%2BIsStm2XLkj%2BPt8NEukCnANgCVJmF0IInDdYWuo3T2IREvzNc2Jngh2iQkfsEo2rQN0aCkmOdhUs9qVkz1HKkJNzZmlQe24RIwUBZyFO1zepQmbooTnx2pmiYS7la0TFnq9WZWfLG0BZIurnF4EJUjWT0AcZKSYHoTWwIS8jDmrbXDBjqkARBBB6A%2F%2BfTRQtXGcx%2FqOEKdIaueA4W%2BwZldNVpu0rhybBa4dPzJnfk3P9NudUKk90oKm8vMabm%2FAu9%2BKiZNmqngW6w%2Ftg0iJghjWaqzrVBPh1UWx8its2LZj3pADOT7mFosOdc%2BeFNyA8afg1iYsSh6D7WwE0IIJfz%2Ba26pHybqbSFmmmjh2yMEfIAKYwEUOolfv0bjENDQTnycUGZcdkCMT9Tc&X-Amz-Signature=835451ff2e3100849a0c07bac867ddf9c1f07e472b4762654ec4cdbd71237380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626V3ITTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwN39RNjbrBWmyJCRvZ3IJ3W2zshGuizOPFpH5SeY9gIhALbgQfUreVJiGCw6vrER1ePc67nC3Ko3Z1wlJtExhMi6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxtKUyNrgIrMlRpjMq3ANL8JQlEw2M9uNwoQDW2WMhcufiH9Hfo02RUxF3bQUFzyONUN2zUs8lvuseEX%2BNgf7dEUToqmeujsjRIkRAReSrQCoLt%2FA8DOJOzUltHJ4PFcurneA7FtpGPTbJAAqSh70G6MWa4rYtt%2FYIZtqGaAUMGwmCIBSjQULF7cDXSQVPfRJJN4CNbV%2BWV2CFXj3ppmEs72M3ZyFG9HUPDCUH5y3lb80RjfG5UCBtD5TyK51lDjyeducbx3rLcR22L4efu7Qpixz%2ByH3ytx11Kd%2BjiZbY5oWXHGUGKmyx45qtT2e5tZ%2FWR2bmuzlwjPQSEdrvNHt4O9AvvDqXZJv2uA0gllv6eytS1RAYgdR7PbMY9liPcNpkmcr8vqGOoCDtFWB8OIUDVmyH%2FxH9MZLBejFJ2x2H4a74qkRoPyn5b0LL%2F2R%2BtQDBEMbw1Wm%2FfQ555nPQ9In94x2QOahGwFoViJjoWd%2BIsStm2XLkj%2BPt8NEukCnANgCVJmF0IInDdYWuo3T2IREvzNc2Jngh2iQkfsEo2rQN0aCkmOdhUs9qVkz1HKkJNzZmlQe24RIwUBZyFO1zepQmbooTnx2pmiYS7la0TFnq9WZWfLG0BZIurnF4EJUjWT0AcZKSYHoTWwIS8jDmrbXDBjqkARBBB6A%2F%2BfTRQtXGcx%2FqOEKdIaueA4W%2BwZldNVpu0rhybBa4dPzJnfk3P9NudUKk90oKm8vMabm%2FAu9%2BKiZNmqngW6w%2Ftg0iJghjWaqzrVBPh1UWx8its2LZj3pADOT7mFosOdc%2BeFNyA8afg1iYsSh6D7WwE0IIJfz%2Ba26pHybqbSFmmmjh2yMEfIAKYwEUOolfv0bjENDQTnycUGZcdkCMT9Tc&X-Amz-Signature=3fdd0b3430cbc56aad07e6f3f40900c2e66c0c5b890c50e6c54b144c1e646517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQCNCPFK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKZWIA%2FzCnzhRpvRdjH5dcUZNqOcDrPtELn44eoKVeywIgbI%2FB1PhsuvyNufkosA49NbkX74sq%2BIvX7VYKDEU3qVEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyBamn8zywnwerVSCrcA5en4Eq2Nkw9m%2B5nIIznlgXYYR3h%2FVrq55tofBweLHUh7EYbgBR22cb%2Bq7JyfrK1wkDGwo7tQ2XQKaebAfufAv7MwBMpCglqHQj2hHZkLW841Xb0Yf9jFxFpI%2Fg8KVXJDgY%2FVjbG9sDLF4UTZS68YvMH669QyKdV9xanYMZS2knffalsYYfCJULpyORud0OMitEWeRVHbBB6wN9PPzp5SN6WxOSRQKG1V92loR08pdqXtc8GnNBZntjnaAL%2BgG3zLywuej5AG8QATiFdCazxLviDrzUguVMEGLbZie%2F7jhlVMACjxBxsEOPO%2FfYOeQ1J43SHIg5BMYaWA9EX%2BUUjcEvDl5g0wX7l1ocU%2Fpa%2BoM7ivmgNhCHg3WabavKIuUQgDIKy1TwdudC62eFFCu6RYyXSaIPbd2o1rUv4L2VJm%2Bc%2Br4cvx7ooVCb4jgBsfvEuu3Rs9n%2BnJ7eSbXGg7fyAT%2F9e19qAxsdS9lhliSd31Gh0UpGC1ctylJlDbA3N1aL9KGBtQplKEFVd6stojSd3zTUKOAnrOX8tHoSUv0eV1ycbBF9Q4ZEBizklPqik4ZWMcX2o1ExGTaXLzh7dYJ%2FFDxekQm19d0RUOKwHdvYF8jJFbCA3N%2FW7m3M5qO%2BXMMuttcMGOqUBAtrtv9WsjGNziIURdfwz05vg0WMXKFlwpdd%2F81FYWSsSbe2Emsw7wvHXd4kzgo9ytPp4UokG%2FjZGzjrILtIf6gGRPmxPR74WypcIam6HbMQ%2BA0pvXuhZ1VpwPc%2BQZXQW%2FJz1Qfe%2FG2cdVfQiNOmaZxya0Lef6Xrr6yVULGU9fIu0kGnkptdBCowc1PJG8TUFADOhdJNvp7QJOig3CG62vLLbNoqb&X-Amz-Signature=910179f15ac367bf1792bacac2ae26d4b7f4be571881ba503b468afb5fe18fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBJXOPH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEveYAoj%2BTW%2BrP8aBr8ZrQ83PG8Ju4yKKaOW9Vg7idSWAiEAoniTmbn4F24E5JsYiH8t7zzYjuDFikc1J75w0r51tL8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINMMPRtGP9diocQHSrcA9E%2F136cOKWvsGGNjNRWao%2BfTrxgMGjR5WWTNyXdbww1OmGgiHwl23iKnJHiouYAUMdBhHXa7%2BepA4juZGiHPL1aQfvGScwUrZh98XW%2BI1PBkwTdE5RRymBvzg1CQMFdA%2FzeYBNwK0VKa8Vhr81CsYWVuOqaLZDwmJsyF1WOVLF5tp%2FlkowW4z3TC5AD6YEBD8laBaXOdKYSwV%2FZ53ck6TUgGPiaMYAnlO%2BN0LekPG5QKYthk1JwzT22oB3g8dKWdMY94D6IuWINDBP1pHbBjPryLgHTyp3cROdQ4jHo83g0bxmPOWdxemfYH2fJj6lSmVsLdtanA%2BiQT5SiZ02Y9tydHn8%2FEHCkORoc3cSjRNQmu3J4v%2Bob%2FfnpIYdLOJ8NBX5SD0OKamQfuwcEyPkmnChVcZdQoGVZZszJV4iRpCCznew3jRkZtdNtkWNXULfcT%2BaogyQpNN%2BR6UT2AynQ4v1cii%2Fr%2BaoyDZUeGE%2Bl4WQkzVdLNthqWGHcyCgK8%2F4CzcidG6YynGY2cDde2DFuBK2ls6210VTVvz36G1s7fvT8u5JKjSSPRkhpzseIZ5Im0mevhHWYJGs3MyNSSMNBKL4g85dpfgdg44ueGPeFy9uVvouq9rRxiHrdLxHnMNuttcMGOqUBiHVitlU%2BeJuaaqBam0JQQhh4b2%2B3Y75MkNoel9AsM%2BM6NEGoU2y0OkDvrHCteoZ3EiW5LZkZ30%2BvECns7du9WOTGAcJVxFGeAXi2YUfL79iTaaudyYQP8uSk0tXeBwCc9%2FvwyZcrgJFf%2BHor%2BriRW%2Bv0Nu7XSftXkJx8lTkp%2FkwBmsAIO0aJyB188MGhD00ikxNFFN35FR7eCc8elEWOcGRIszB8&X-Amz-Signature=9c51b7198a67b5dd3253f196f1481753508cb3d275abe2e9d845e7f3a0a7803a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626V3ITTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwN39RNjbrBWmyJCRvZ3IJ3W2zshGuizOPFpH5SeY9gIhALbgQfUreVJiGCw6vrER1ePc67nC3Ko3Z1wlJtExhMi6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxtKUyNrgIrMlRpjMq3ANL8JQlEw2M9uNwoQDW2WMhcufiH9Hfo02RUxF3bQUFzyONUN2zUs8lvuseEX%2BNgf7dEUToqmeujsjRIkRAReSrQCoLt%2FA8DOJOzUltHJ4PFcurneA7FtpGPTbJAAqSh70G6MWa4rYtt%2FYIZtqGaAUMGwmCIBSjQULF7cDXSQVPfRJJN4CNbV%2BWV2CFXj3ppmEs72M3ZyFG9HUPDCUH5y3lb80RjfG5UCBtD5TyK51lDjyeducbx3rLcR22L4efu7Qpixz%2ByH3ytx11Kd%2BjiZbY5oWXHGUGKmyx45qtT2e5tZ%2FWR2bmuzlwjPQSEdrvNHt4O9AvvDqXZJv2uA0gllv6eytS1RAYgdR7PbMY9liPcNpkmcr8vqGOoCDtFWB8OIUDVmyH%2FxH9MZLBejFJ2x2H4a74qkRoPyn5b0LL%2F2R%2BtQDBEMbw1Wm%2FfQ555nPQ9In94x2QOahGwFoViJjoWd%2BIsStm2XLkj%2BPt8NEukCnANgCVJmF0IInDdYWuo3T2IREvzNc2Jngh2iQkfsEo2rQN0aCkmOdhUs9qVkz1HKkJNzZmlQe24RIwUBZyFO1zepQmbooTnx2pmiYS7la0TFnq9WZWfLG0BZIurnF4EJUjWT0AcZKSYHoTWwIS8jDmrbXDBjqkARBBB6A%2F%2BfTRQtXGcx%2FqOEKdIaueA4W%2BwZldNVpu0rhybBa4dPzJnfk3P9NudUKk90oKm8vMabm%2FAu9%2BKiZNmqngW6w%2Ftg0iJghjWaqzrVBPh1UWx8its2LZj3pADOT7mFosOdc%2BeFNyA8afg1iYsSh6D7WwE0IIJfz%2Ba26pHybqbSFmmmjh2yMEfIAKYwEUOolfv0bjENDQTnycUGZcdkCMT9Tc&X-Amz-Signature=f32f321d8182e2a98a3e55d876641d23a4e671b674a7544cf47c5c9ef2561439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
