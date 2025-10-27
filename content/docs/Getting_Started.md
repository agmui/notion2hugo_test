---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526TMLFE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJa%2BiouneYXM7bGeCeJK%2F6rhJykNR9hwnPl1xV%2FrndQIhAPEKNYnIftOE16xI9AW1gnmcli0bM81YT7uNg%2BX%2BvUgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuZaBC5AB%2BDQlzlXAq3ANS5X0mTH7j5k%2BIi0o1jIkylE81Js83O1Tjt0VHQ6RUM7yjCC9oDUFk4pQ6d2Hk2kkJdSjVHmv1XlrsHZ03B4Ci5OTL4vt11kG1XyFXodDAEaNwFL%2BA9aQreA48ZcMo8G3w9LtUpiDWr5RbTDGAETAq%2BKgPSeKg%2B%2B%2BgTkiHWVeQR2s2pBKpc6tmJcxwM04oYZ8VyfnKufU9DWbTXU3uEgAp8TwjfmZlAGT1ddAi6MQbAZZK0a5KBc724qEIX6gGa%2B%2FKidwzcL1k9HlBAUPqt2Qnlmx2xIVDYc9uLdxYTZe0v4GIr4Ply6w5C0NHK8kXvdnOxrRIjtgsqpkMGAy7%2FS4wusluZidodiPjX5%2BSrNjzEpkG7Oi5jVtFHOYhpZzukHehWyjBFmPwXs1xIGcEi03ixqinHIMwXUy6f7%2BwomLbn4FTfiI4A4X3CBDkBQxXRIMYUcz6s8zNsl8ntgAxaOHwpFQUnB80NJWPqsAYZ2%2F1PZSpQWS5FaU7GxDgfMfTidnQL6OTpw6%2Fxnhc4MnE22b1eiXE3J8fR%2Fd%2BIlAcFN3q2IyWA4n30T4ZKKb3blaD0w96dG2UFCgN5PaAigD%2FE80Va6F34EYRrRsYzwjnSZIP5bklZBL7tsRrlTJVojCrj%2FvHBjqkAeHKDOLBsFkOkJ%2B2ICl6brqThUXnu9JJg1qsC0ULnBKaBRqO1nTbT0YLWFgqn%2By3xnZHo91LvDkQ%2BcBe8Cng0lbyOWSO8sYYfyvrS9WI4lK%2Fo%2F7E4pzqeeqXmgGQreEXAe95x38zkfie9ntaULudSucddpbYwTwd7gKvQoD3YY4BoGoAyNNExe8KEaY0qKv%2FejuUCxFq6BN%2B%2BlZuMkBOiT8bZq%2B6&X-Amz-Signature=1ff4bbef90039712d105de7d212972ca67e10bfba10760d1cae4929e320bcf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526TMLFE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJa%2BiouneYXM7bGeCeJK%2F6rhJykNR9hwnPl1xV%2FrndQIhAPEKNYnIftOE16xI9AW1gnmcli0bM81YT7uNg%2BX%2BvUgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuZaBC5AB%2BDQlzlXAq3ANS5X0mTH7j5k%2BIi0o1jIkylE81Js83O1Tjt0VHQ6RUM7yjCC9oDUFk4pQ6d2Hk2kkJdSjVHmv1XlrsHZ03B4Ci5OTL4vt11kG1XyFXodDAEaNwFL%2BA9aQreA48ZcMo8G3w9LtUpiDWr5RbTDGAETAq%2BKgPSeKg%2B%2B%2BgTkiHWVeQR2s2pBKpc6tmJcxwM04oYZ8VyfnKufU9DWbTXU3uEgAp8TwjfmZlAGT1ddAi6MQbAZZK0a5KBc724qEIX6gGa%2B%2FKidwzcL1k9HlBAUPqt2Qnlmx2xIVDYc9uLdxYTZe0v4GIr4Ply6w5C0NHK8kXvdnOxrRIjtgsqpkMGAy7%2FS4wusluZidodiPjX5%2BSrNjzEpkG7Oi5jVtFHOYhpZzukHehWyjBFmPwXs1xIGcEi03ixqinHIMwXUy6f7%2BwomLbn4FTfiI4A4X3CBDkBQxXRIMYUcz6s8zNsl8ntgAxaOHwpFQUnB80NJWPqsAYZ2%2F1PZSpQWS5FaU7GxDgfMfTidnQL6OTpw6%2Fxnhc4MnE22b1eiXE3J8fR%2Fd%2BIlAcFN3q2IyWA4n30T4ZKKb3blaD0w96dG2UFCgN5PaAigD%2FE80Va6F34EYRrRsYzwjnSZIP5bklZBL7tsRrlTJVojCrj%2FvHBjqkAeHKDOLBsFkOkJ%2B2ICl6brqThUXnu9JJg1qsC0ULnBKaBRqO1nTbT0YLWFgqn%2By3xnZHo91LvDkQ%2BcBe8Cng0lbyOWSO8sYYfyvrS9WI4lK%2Fo%2F7E4pzqeeqXmgGQreEXAe95x38zkfie9ntaULudSucddpbYwTwd7gKvQoD3YY4BoGoAyNNExe8KEaY0qKv%2FejuUCxFq6BN%2B%2BlZuMkBOiT8bZq%2B6&X-Amz-Signature=c921173c845b45d40c27b10c17d688147d017595b4c6f411fab649527a6db7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526TMLFE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJa%2BiouneYXM7bGeCeJK%2F6rhJykNR9hwnPl1xV%2FrndQIhAPEKNYnIftOE16xI9AW1gnmcli0bM81YT7uNg%2BX%2BvUgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuZaBC5AB%2BDQlzlXAq3ANS5X0mTH7j5k%2BIi0o1jIkylE81Js83O1Tjt0VHQ6RUM7yjCC9oDUFk4pQ6d2Hk2kkJdSjVHmv1XlrsHZ03B4Ci5OTL4vt11kG1XyFXodDAEaNwFL%2BA9aQreA48ZcMo8G3w9LtUpiDWr5RbTDGAETAq%2BKgPSeKg%2B%2B%2BgTkiHWVeQR2s2pBKpc6tmJcxwM04oYZ8VyfnKufU9DWbTXU3uEgAp8TwjfmZlAGT1ddAi6MQbAZZK0a5KBc724qEIX6gGa%2B%2FKidwzcL1k9HlBAUPqt2Qnlmx2xIVDYc9uLdxYTZe0v4GIr4Ply6w5C0NHK8kXvdnOxrRIjtgsqpkMGAy7%2FS4wusluZidodiPjX5%2BSrNjzEpkG7Oi5jVtFHOYhpZzukHehWyjBFmPwXs1xIGcEi03ixqinHIMwXUy6f7%2BwomLbn4FTfiI4A4X3CBDkBQxXRIMYUcz6s8zNsl8ntgAxaOHwpFQUnB80NJWPqsAYZ2%2F1PZSpQWS5FaU7GxDgfMfTidnQL6OTpw6%2Fxnhc4MnE22b1eiXE3J8fR%2Fd%2BIlAcFN3q2IyWA4n30T4ZKKb3blaD0w96dG2UFCgN5PaAigD%2FE80Va6F34EYRrRsYzwjnSZIP5bklZBL7tsRrlTJVojCrj%2FvHBjqkAeHKDOLBsFkOkJ%2B2ICl6brqThUXnu9JJg1qsC0ULnBKaBRqO1nTbT0YLWFgqn%2By3xnZHo91LvDkQ%2BcBe8Cng0lbyOWSO8sYYfyvrS9WI4lK%2Fo%2F7E4pzqeeqXmgGQreEXAe95x38zkfie9ntaULudSucddpbYwTwd7gKvQoD3YY4BoGoAyNNExe8KEaY0qKv%2FejuUCxFq6BN%2B%2BlZuMkBOiT8bZq%2B6&X-Amz-Signature=ce0795d0b9ae39b8cb5e7c1e5c838b8a5e4c7f68254453fb37759050cbbeb4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5LFFXL%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FK5ma39duyBAIfLEcDGAcnxRFus4uE8XMzX5XeOI9lAiEAs5%2BA9jmJRBdcgSowr3I5t46PKMEJ9j0tYnQ8EBrOrY8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu4SDcrKnp7%2BEN5PircA6RnI6aLveCbUH7JkIPpoLMBYU08hE13L75wkjEt8cnHxl%2BjytLlSZhet9dDcJbT8%2Fylva2Q7VIInduMHQhIlMrKOTDIfbPLSMAF6ZKdMlR1OoiQ9uJSsM7lm4iX3lf3wG3mpAhj7Vq%2B7kYZAJbQd0DG3nrTr8JPDbxZhCD9SVI0ViJhfcYTJ9zhawrJal4jmOVMjWudUFm55EOsrXArWCk7bGD3tVzStVh58nXofHrMsMjFmwrEpyJAhe1GuQgxhkFMt3G%2BHwmeOGmdyem6USBci7xK7oJMkbGyHZvUjI3i%2BuYq2b8nBNKKAmS8qNTWFewIRLHRfRVu8pnWL%2FpM2HNY9Icv%2BYMJeLM9IdUorM9COuup5pi%2BQq9UnbIwTuN3sEY8SNg5LAZgB0rDA%2F3E2amV3SDw4xV5bgfP3VSRM7h9PZYzBmCYW%2Bf%2FKmO%2BVWI3KgR4WLqiRcP3H%2FhsLKD1PYr4xxk7IFFtdI7k%2FAgzaW%2FbMBh%2BCioRyfoQbIQTGm5joEopDrM08RLsIUt6qLCPcwaugflp15nrRkfwLuNiZbo6CjvhK3pJkALnRTcH2OEkuambYL74oTfojadww9mHtiZI7u0l6e7U8sCF7NONpIY14AWjdoYrRNxkYGWVMMGO%2B8cGOqUBG0vTRK7f8G50ZUr3kjjDeL83OmwAj%2FZjpMEymB8zmqdV%2FgGaaWPc6t2gwGpNyo%2B6TiWV4XzzbIUdEHuTeTmYdgqcwriiJ0J03ImpRJ%2BEpKDjqcspMZnsRa5d370Zj8llImKUb7O%2FEsGhAvJTcKy0%2F%2Bc354cBhYjdzCi8NoKSV3V8ZNgZ4%2FjDicAWMW5BYWVPkOYC6GXowCDM%2Br05qZYOT1KBj%2BXG&X-Amz-Signature=8be9e9ade2ce33b0afc69237fc10264896acdb1554c962c8b89d719359014424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7474HD%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBDWkt6543Fhe9eIDAJBah%2FP%2Fygo76lv45qyOj7cBl2QIhAKfTnbs4QIBvk6bjpN61%2FUVqSz4I9JdF82mYwVmHx%2Bx4KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoOL1XDwgu%2FtjZZRUq3AOkPoTjLS%2FKa%2FGJaLDW6HlqiPPWvvNn0jdYLxwI4AYptzg2J0L5in1o21QzcJfjjlZmRn0RK7DihB6A%2Br%2F10lIFQHt4ERXQL85Yn3OubH%2FnWtFhKI0dCzAja41cwUQhVpCeZctwJ2VGFbREaSp9cutKMbxBPFUd%2BYcCeIUmTMv%2FOdpM3YL1Qrntjx77VthEW4DVrgT6dXvd2W%2FBl0Nisv8FXYLQ6XINdG25Pu%2FxRVMlw9rHZLSw8XN%2FpiVMSV%2FHd4JmVlGN%2Fi2aGOKBryG9t%2BurY88N%2Foi6%2FUySXioE1mUr1pS%2FwpMwmNSpzCETFDwtNmX8zxnB3eeeKCH2IV3AYDczgSoQ8SssfHK%2BgwbaeqXjL1YcA7e0ALbnCCDgk0k6nVTEN7fgpcxwAA86TXWvOkrKEbzgj3%2BTl4xtiMCdw%2F%2FVpXZfJAXs0UUf9m4lexYkQFXXV4vqxhq%2BCsKiIsuN%2FQyG3qLEh%2BqTF0pQRleYeQ5ZsRK63EZ295eVBNa2mQyMtYu2xqOQ2T%2BIzQzeZaaCkHuiOJttXd02GTGPv43sG9mbeKMgoMj3QMiz7wAq47dE8iZktFAz3E0cy7krgWQGb8UjcHkJIyy0hgA%2B2%2FQY61qGBRE7OgUUtuQ7SLmB7TC9j%2FvHBjqkAVG%2BTDrbu1Udkgiw3SIFVdOVbeu0MTa%2BY%2F26pQDBa9UF7RaNH%2BajYLBZsxVn%2FPFjMjANpi%2FbrLgpp7vBq8alCt1MbIsmH%2FLPC7H3KxT0RHxF2QivY77Pth90Y%2BZE1fZDyYowjLYjnvf0RxrguJ%2BkY4wwmA33AElbuRAq%2BYUG11f6mfKmuNv%2FBnSHFTLExz3uv6Fhpm3w8jirx75gSnh8qU8cRdHK&X-Amz-Signature=98429f16c96c6695820962b6146a7704962c00097500e3520f9061367822189c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526TMLFE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJa%2BiouneYXM7bGeCeJK%2F6rhJykNR9hwnPl1xV%2FrndQIhAPEKNYnIftOE16xI9AW1gnmcli0bM81YT7uNg%2BX%2BvUgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuZaBC5AB%2BDQlzlXAq3ANS5X0mTH7j5k%2BIi0o1jIkylE81Js83O1Tjt0VHQ6RUM7yjCC9oDUFk4pQ6d2Hk2kkJdSjVHmv1XlrsHZ03B4Ci5OTL4vt11kG1XyFXodDAEaNwFL%2BA9aQreA48ZcMo8G3w9LtUpiDWr5RbTDGAETAq%2BKgPSeKg%2B%2B%2BgTkiHWVeQR2s2pBKpc6tmJcxwM04oYZ8VyfnKufU9DWbTXU3uEgAp8TwjfmZlAGT1ddAi6MQbAZZK0a5KBc724qEIX6gGa%2B%2FKidwzcL1k9HlBAUPqt2Qnlmx2xIVDYc9uLdxYTZe0v4GIr4Ply6w5C0NHK8kXvdnOxrRIjtgsqpkMGAy7%2FS4wusluZidodiPjX5%2BSrNjzEpkG7Oi5jVtFHOYhpZzukHehWyjBFmPwXs1xIGcEi03ixqinHIMwXUy6f7%2BwomLbn4FTfiI4A4X3CBDkBQxXRIMYUcz6s8zNsl8ntgAxaOHwpFQUnB80NJWPqsAYZ2%2F1PZSpQWS5FaU7GxDgfMfTidnQL6OTpw6%2Fxnhc4MnE22b1eiXE3J8fR%2Fd%2BIlAcFN3q2IyWA4n30T4ZKKb3blaD0w96dG2UFCgN5PaAigD%2FE80Va6F34EYRrRsYzwjnSZIP5bklZBL7tsRrlTJVojCrj%2FvHBjqkAeHKDOLBsFkOkJ%2B2ICl6brqThUXnu9JJg1qsC0ULnBKaBRqO1nTbT0YLWFgqn%2By3xnZHo91LvDkQ%2BcBe8Cng0lbyOWSO8sYYfyvrS9WI4lK%2Fo%2F7E4pzqeeqXmgGQreEXAe95x38zkfie9ntaULudSucddpbYwTwd7gKvQoD3YY4BoGoAyNNExe8KEaY0qKv%2FejuUCxFq6BN%2B%2BlZuMkBOiT8bZq%2B6&X-Amz-Signature=ee1b08517bc3e009ffece5223228e6d207c697e93348f99dcf89a1e09de36214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
