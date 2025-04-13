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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV6XZZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDTurg5AEyQwCLPZ%2F79Bd5nWlEl6MRCClcRIduyKmZuSQIgUuijMlBf7zIMD2WhHQmdH1OfrJj%2FxB38G1%2FXWhBo%2BTsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuMiLInxppxUrSXzyrcA%2F5Ez3wgarsKLsFbo%2BXma1noobeiTKW4cmzhQ05GSdrQj4xavba8JCunf9oXJVNlhI7PDuv8L2A%2F4nKmM%2FpalWpWXkgBPIXxOtBA1761xoEnajB1sy2htP2KoFwku4E3oKcqUuZlEZaRhtazgoi3VQE%2FV8vh47KT4zrtq8UrsMgoGGQqbJr6UnRhlz2UqUeEVcWWc9rbGnlpG2c8JBiOCcu2SsygYbonPEbueNgSpjprbLD0bCrqT30PVQ6nN6kND1S%2FpGSnkH%2BG7ORuw5PC741lhlDnFiDLjJalIh4p8gS68aXjvX%2BTWke4%2BTdVzHxUJp4J%2BBMDmcqcI3UsgbhjihpwnaCjvvi6z05r%2FE7N4wKuh27C15jBKcMPpuyeHS7yOIfOCoP%2BJUGWqRL29AMmi70eNzP5FWF%2FY8OzUgbLv%2FkXUHMy16EO3jxSWHzoNmDM65kC7TA9fPcOa7n59jeI5iINmtWMoyALnbbmnYns6PmeSmfFv%2Bjw%2BkNLXnASxo3q%2BHuwumXRJtxA9jC1y2pGA%2B%2BuRZzOFuKfb4BOS2nBgaw4rMAlhjytZnokhtAHc7hMUro8Ie6oEAz7wMqLiEeAlPA9vNy%2FnF72ogZgmB5JCF2TwF1%2BXLgchT%2Fb3KdFMNnh7b8GOqUBkZPyHkakr4CI5GU%2FOYvtiVoWTAJ4LCkLAUDkAZBXpwOqw7%2FqTEp7zlEHPK9gqzvxDotP073SXQzid7SN7aNoOgR33IsYBnL34E8Lz%2BxD8vc4j%2B%2F8eia4zLO2aDDr4GCpFBslOEG7eCQBucrfPJy2VcXhMjLbMUgL43CiE%2BcAodj%2FHMogwSjV%2FsFF25U4UHa27RcIgwGPwjqz5ENIpJZfpk%2FCVjY0&X-Amz-Signature=8dc603f939478d9e8eb68c81041be6e4d2f1ee3d8e3c17e3730d0573d90d55fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV6XZZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDTurg5AEyQwCLPZ%2F79Bd5nWlEl6MRCClcRIduyKmZuSQIgUuijMlBf7zIMD2WhHQmdH1OfrJj%2FxB38G1%2FXWhBo%2BTsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuMiLInxppxUrSXzyrcA%2F5Ez3wgarsKLsFbo%2BXma1noobeiTKW4cmzhQ05GSdrQj4xavba8JCunf9oXJVNlhI7PDuv8L2A%2F4nKmM%2FpalWpWXkgBPIXxOtBA1761xoEnajB1sy2htP2KoFwku4E3oKcqUuZlEZaRhtazgoi3VQE%2FV8vh47KT4zrtq8UrsMgoGGQqbJr6UnRhlz2UqUeEVcWWc9rbGnlpG2c8JBiOCcu2SsygYbonPEbueNgSpjprbLD0bCrqT30PVQ6nN6kND1S%2FpGSnkH%2BG7ORuw5PC741lhlDnFiDLjJalIh4p8gS68aXjvX%2BTWke4%2BTdVzHxUJp4J%2BBMDmcqcI3UsgbhjihpwnaCjvvi6z05r%2FE7N4wKuh27C15jBKcMPpuyeHS7yOIfOCoP%2BJUGWqRL29AMmi70eNzP5FWF%2FY8OzUgbLv%2FkXUHMy16EO3jxSWHzoNmDM65kC7TA9fPcOa7n59jeI5iINmtWMoyALnbbmnYns6PmeSmfFv%2Bjw%2BkNLXnASxo3q%2BHuwumXRJtxA9jC1y2pGA%2B%2BuRZzOFuKfb4BOS2nBgaw4rMAlhjytZnokhtAHc7hMUro8Ie6oEAz7wMqLiEeAlPA9vNy%2FnF72ogZgmB5JCF2TwF1%2BXLgchT%2Fb3KdFMNnh7b8GOqUBkZPyHkakr4CI5GU%2FOYvtiVoWTAJ4LCkLAUDkAZBXpwOqw7%2FqTEp7zlEHPK9gqzvxDotP073SXQzid7SN7aNoOgR33IsYBnL34E8Lz%2BxD8vc4j%2B%2F8eia4zLO2aDDr4GCpFBslOEG7eCQBucrfPJy2VcXhMjLbMUgL43CiE%2BcAodj%2FHMogwSjV%2FsFF25U4UHa27RcIgwGPwjqz5ENIpJZfpk%2FCVjY0&X-Amz-Signature=b0b621a97379ffdd81fc2e750851791a0acedaa7577ee9984c6e3f26a60ffaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7PEW6M%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEohjQTy%2FSvAX%2F9yqcuz5IfPgXb02v1%2FHpOiTYkw%2FFZOAiBondzjCKlY2pzxPFUTTni3iZV93TZZcPmcW9hMBXrWCiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8H%2FKNsbachPxV%2FFKtwDEqIkUjfEE94CbHt%2FgniRHsH75UH0nAZ0LTk7vUt9X9sIjxsHgcIAsPeMzg1o7z%2BbMuG1pKTQB5DodBZnDMRRXnAm7c27DTSPNTNvyEU9ceUrzK25SpMSh8K8u%2FK%2BP4FWAe4%2FmKSlvpnzLHIjlhuf4NxVzH1uzc05mekEKGtC%2BYVV3ZyHpzjUaHkxJapYukIQrIsw5PKqzMO3RD9ni73zMen8AYg%2FsgsjN8uB4v7o9TyErErGQNbrkFQFJf2mEjKud3uDJCDl87mtYU4ybrKwBGiExtmc%2FQe7N9Bg7gT2oJLibtO5DJVGGExi2Tab7f7avw8rIlbbc65wDkvPAzP2Eo49jxtFEV3Mc%2B3yq8tqSQIA3wk05l6xfYFqKhCTgZFip4I5NaARLIt4rrNZ0QbRfbZm860%2F%2F0GPvEyGm%2F8bPAQhV41vKRWy0PN1yWvDuhOXJeUP3p9uqDO2ws7CvlEm1yp%2F6F2Z8u%2B63GaYLsP9UBZL0dkMY4u9tZ%2B0jXiRFLOhwtLTQQzEfssiq%2BGwZV9bn4S0btF3dKu2MYnq20t7Dyq897shUG%2FJ8fonyYadThGqePbYnEnDahX6CwJn8aEcJBXnME%2BaCoyqwExo6qbgHqDH4z2%2BxHzanhyx8zYw6ODtvwY6pgFTuEbOwUzdqjIoNNourXZYXu6RJCoP%2BHqhVueiKE%2Bd36NOLOo5OVfOAqTA9u2tHIveArhi%2Bs9u99uFL3G6ohbrWarfTz0DvOGoRV2iIZPmgvz97uZeosvjN1xyrIIu8u5pyNZiN9TdybytEKJxPQ12ymWsp8RSBiIHXCj3o9NUmNtRXiVM75CbdiHoy3Qklct%2F71MyXM%2FAFfL7gJabMm9LWsxOepsG&X-Amz-Signature=3815f00f5173effed0f60ada125cd2b60467c1875873f9287b94f6497256f45d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFZD5G6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCOSuRV9oAht5x0EeEUf2J9Pn86UxhEjaWcKgyoyqOgtQIhAIVh5XaUvZ7RRlsL2UYDsMtGz38dowvu0TaRhI8CENrxKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5tNPK%2FUya6uWsuQq3ANYRNV%2FM4RNEq1rQFLC1B%2B0b1kF1CHRJh0otNa1h0uCoMk2GrOCor4KXIpzyHijOdmfP%2F3kNzat4e4EqOrfritsU23xcA7dxIgs1JYrjAMzBTWsX30LskbfcGt8cVeckh90a%2BQMWhoT%2F8uWdTOmjd5sMGBO05XoPBMC6jc54VMbEJh3Vxsk9hL3o2M2ujM4DOh8OBmysYFVOwSiH8l053jq5CYFndMkqP7oCCdCAm2zOkpgXPlsmFMX1eUVoDSzjlr0i4anEc16QAVx%2FvozDR3wSh7dmqyQf3chGIDCW%2BI7uo5deHFmGtOYvR7oKAsEVZ%2F9QGtW9bhNT%2BFlfQ6%2B3E%2BdEx2v4FFipRJaSSU0cyPJty9s1YYmIm2OwFSCMjcW%2B3Xv2TpIvM5ebZdOPRmjx6EsrLr3yj%2FyvCoE3tbvlTEk%2Fj2bZw1txbs7%2F3BNrqvJlPfz%2BB%2BRyC5hUeoIs9WcN8JetImdrAs0eRaxXJmDLkKAc7419tfQYa4l3yOVRgXQFtT5cpq08e5bU5xkJD%2FY%2BG4SqegPI6TP6bQFSmCtBdoXdd%2BwXQbuX3R4RXbdLzrp1PeiEWTRJEFGjl14hhynML6XbfNWMAzPStP9%2FoN%2F1OEzPWWd%2B%2FWTf4IMCVgk6jDS4e2%2FBjqkAXjPJjky%2B0doMmh8%2FBs%2BpJSgpcS0P1D1SU2gN9CYXSZrKUg8DtyQm4f5btY6Jqm%2FDIrjJWHNSfL3KxGdyaDrRqfGwfELGlevNSEh3vWYsrlxEqFlIyB7ANOXhmK6hhHug3%2Bip3MtIqQocPdys3bZ0yDVTvrGHAr%2B6KFBsB1S88jqPBFOP%2FbCurdKNVXM6WNrZOFq3ZBfd%2FcEvec2zDH3utK%2B0FW0&X-Amz-Signature=8edeb93f66d6afd873b5670efe696c699184aacb0da56c280b631ad9fd03db65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV6XZZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDTurg5AEyQwCLPZ%2F79Bd5nWlEl6MRCClcRIduyKmZuSQIgUuijMlBf7zIMD2WhHQmdH1OfrJj%2FxB38G1%2FXWhBo%2BTsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuMiLInxppxUrSXzyrcA%2F5Ez3wgarsKLsFbo%2BXma1noobeiTKW4cmzhQ05GSdrQj4xavba8JCunf9oXJVNlhI7PDuv8L2A%2F4nKmM%2FpalWpWXkgBPIXxOtBA1761xoEnajB1sy2htP2KoFwku4E3oKcqUuZlEZaRhtazgoi3VQE%2FV8vh47KT4zrtq8UrsMgoGGQqbJr6UnRhlz2UqUeEVcWWc9rbGnlpG2c8JBiOCcu2SsygYbonPEbueNgSpjprbLD0bCrqT30PVQ6nN6kND1S%2FpGSnkH%2BG7ORuw5PC741lhlDnFiDLjJalIh4p8gS68aXjvX%2BTWke4%2BTdVzHxUJp4J%2BBMDmcqcI3UsgbhjihpwnaCjvvi6z05r%2FE7N4wKuh27C15jBKcMPpuyeHS7yOIfOCoP%2BJUGWqRL29AMmi70eNzP5FWF%2FY8OzUgbLv%2FkXUHMy16EO3jxSWHzoNmDM65kC7TA9fPcOa7n59jeI5iINmtWMoyALnbbmnYns6PmeSmfFv%2Bjw%2BkNLXnASxo3q%2BHuwumXRJtxA9jC1y2pGA%2B%2BuRZzOFuKfb4BOS2nBgaw4rMAlhjytZnokhtAHc7hMUro8Ie6oEAz7wMqLiEeAlPA9vNy%2FnF72ogZgmB5JCF2TwF1%2BXLgchT%2Fb3KdFMNnh7b8GOqUBkZPyHkakr4CI5GU%2FOYvtiVoWTAJ4LCkLAUDkAZBXpwOqw7%2FqTEp7zlEHPK9gqzvxDotP073SXQzid7SN7aNoOgR33IsYBnL34E8Lz%2BxD8vc4j%2B%2F8eia4zLO2aDDr4GCpFBslOEG7eCQBucrfPJy2VcXhMjLbMUgL43CiE%2BcAodj%2FHMogwSjV%2FsFF25U4UHa27RcIgwGPwjqz5ENIpJZfpk%2FCVjY0&X-Amz-Signature=fc4d8268abe5822142388326c276b6b5877562e13214be1fe63a052282190edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
