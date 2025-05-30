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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF5VZZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NyjqcKBJXTIpxG%2BxrJDP4M5myMo8m7XBhuyER93LgwIgWlvYO8cL%2FuRAMJhjEY8VxoJKMeSfD%2BWietWqaUfBVWcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnaEjEdj98b6cJCryrcAzhylGpKG0D%2B6i%2BdYBA0zYCspT2L1DS%2BW4XYxgU8mB1IrGMN9pNiTBI07S8pVLnZWGAWQvs9k4Mnd8aDXU%2BE9MzhsP%2FkaTiCsO8pjix4FGI%2BiZCDEFmROYpHSZ%2B8S%2BO7%2B9T%2BmrcLXuEkwt77hiATLDufR7jbiekMW5m4cgJZtHWkBGPSyyd4XWlcBIU6cZIHfbKFadWYjtGE4%2BjRJlcr8Yh1wiG8Nrry2pxhW4yNEOmULZwISm%2Bq0ekyEAOvYBHd6%2FMJ4d%2Bj8mi26vp%2BK5VpokilmA4ER4ceWB1Qo4DCrAzd81AdP2%2F12MbQj4U1n4HasOmniyw2S6Xzjg%2FhEOCilMt2TfOOnyUrNw0EXkiBSseL3HGCZRYtJwhDSaV1Sx4An3lNdoKDGp3DejRqn87kRObrKgmiqXC8AI8F3lv8U%2F45ZH%2FZuKyIZ5nhlR68yBdDFG9VIklWKFJnpP%2B%2BNQfaJPmeTBylkGk3OU9j6f7T%2FuchblcIHzK9pjAHfc6LLVAXWDfN9Xa5m6OmWVhPnVZJPry%2F%2B%2F2lRvhjv9ZpM8YPreymLgNsbqgC%2BpxYoI%2B%2Bn8cE6hY10nt67BX2uNJTUWDZ8Dy6rkeW8qGmuf0HHy0uZhpVJe9%2B3COKUukObeZ8MPHd5MEGOqUB6kuMp5uLm3XiFVga89ZWIVFnMSb%2BTjMoGORipWmLo1kfHspuoM0ekWZtm6MnlRHXYJLcB44wXGA3H7OkeMJVvFa6Mi8qIfsE15XrCva7S9uxozfs19G7eRNalTWVbRR5gBRqtf%2BAT36%2BBSXhPGFyMx9S9lGAKWV5E7jlC%2BC1yWYX7I51H0zyC%2FhgD8AdZ45vI0BMDyYqZOT3Mr1AwlvKDHlJAo4x&X-Amz-Signature=c857f379e048c3cee760c4c5bca647f33c172ceeedf81ff68a6260636210e0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF5VZZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NyjqcKBJXTIpxG%2BxrJDP4M5myMo8m7XBhuyER93LgwIgWlvYO8cL%2FuRAMJhjEY8VxoJKMeSfD%2BWietWqaUfBVWcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnaEjEdj98b6cJCryrcAzhylGpKG0D%2B6i%2BdYBA0zYCspT2L1DS%2BW4XYxgU8mB1IrGMN9pNiTBI07S8pVLnZWGAWQvs9k4Mnd8aDXU%2BE9MzhsP%2FkaTiCsO8pjix4FGI%2BiZCDEFmROYpHSZ%2B8S%2BO7%2B9T%2BmrcLXuEkwt77hiATLDufR7jbiekMW5m4cgJZtHWkBGPSyyd4XWlcBIU6cZIHfbKFadWYjtGE4%2BjRJlcr8Yh1wiG8Nrry2pxhW4yNEOmULZwISm%2Bq0ekyEAOvYBHd6%2FMJ4d%2Bj8mi26vp%2BK5VpokilmA4ER4ceWB1Qo4DCrAzd81AdP2%2F12MbQj4U1n4HasOmniyw2S6Xzjg%2FhEOCilMt2TfOOnyUrNw0EXkiBSseL3HGCZRYtJwhDSaV1Sx4An3lNdoKDGp3DejRqn87kRObrKgmiqXC8AI8F3lv8U%2F45ZH%2FZuKyIZ5nhlR68yBdDFG9VIklWKFJnpP%2B%2BNQfaJPmeTBylkGk3OU9j6f7T%2FuchblcIHzK9pjAHfc6LLVAXWDfN9Xa5m6OmWVhPnVZJPry%2F%2B%2F2lRvhjv9ZpM8YPreymLgNsbqgC%2BpxYoI%2B%2Bn8cE6hY10nt67BX2uNJTUWDZ8Dy6rkeW8qGmuf0HHy0uZhpVJe9%2B3COKUukObeZ8MPHd5MEGOqUB6kuMp5uLm3XiFVga89ZWIVFnMSb%2BTjMoGORipWmLo1kfHspuoM0ekWZtm6MnlRHXYJLcB44wXGA3H7OkeMJVvFa6Mi8qIfsE15XrCva7S9uxozfs19G7eRNalTWVbRR5gBRqtf%2BAT36%2BBSXhPGFyMx9S9lGAKWV5E7jlC%2BC1yWYX7I51H0zyC%2FhgD8AdZ45vI0BMDyYqZOT3Mr1AwlvKDHlJAo4x&X-Amz-Signature=858c40f978311ccc6966a44bd39c66e291faf7dee1611b19519aa7665ece9c73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF5VZZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NyjqcKBJXTIpxG%2BxrJDP4M5myMo8m7XBhuyER93LgwIgWlvYO8cL%2FuRAMJhjEY8VxoJKMeSfD%2BWietWqaUfBVWcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnaEjEdj98b6cJCryrcAzhylGpKG0D%2B6i%2BdYBA0zYCspT2L1DS%2BW4XYxgU8mB1IrGMN9pNiTBI07S8pVLnZWGAWQvs9k4Mnd8aDXU%2BE9MzhsP%2FkaTiCsO8pjix4FGI%2BiZCDEFmROYpHSZ%2B8S%2BO7%2B9T%2BmrcLXuEkwt77hiATLDufR7jbiekMW5m4cgJZtHWkBGPSyyd4XWlcBIU6cZIHfbKFadWYjtGE4%2BjRJlcr8Yh1wiG8Nrry2pxhW4yNEOmULZwISm%2Bq0ekyEAOvYBHd6%2FMJ4d%2Bj8mi26vp%2BK5VpokilmA4ER4ceWB1Qo4DCrAzd81AdP2%2F12MbQj4U1n4HasOmniyw2S6Xzjg%2FhEOCilMt2TfOOnyUrNw0EXkiBSseL3HGCZRYtJwhDSaV1Sx4An3lNdoKDGp3DejRqn87kRObrKgmiqXC8AI8F3lv8U%2F45ZH%2FZuKyIZ5nhlR68yBdDFG9VIklWKFJnpP%2B%2BNQfaJPmeTBylkGk3OU9j6f7T%2FuchblcIHzK9pjAHfc6LLVAXWDfN9Xa5m6OmWVhPnVZJPry%2F%2B%2F2lRvhjv9ZpM8YPreymLgNsbqgC%2BpxYoI%2B%2Bn8cE6hY10nt67BX2uNJTUWDZ8Dy6rkeW8qGmuf0HHy0uZhpVJe9%2B3COKUukObeZ8MPHd5MEGOqUB6kuMp5uLm3XiFVga89ZWIVFnMSb%2BTjMoGORipWmLo1kfHspuoM0ekWZtm6MnlRHXYJLcB44wXGA3H7OkeMJVvFa6Mi8qIfsE15XrCva7S9uxozfs19G7eRNalTWVbRR5gBRqtf%2BAT36%2BBSXhPGFyMx9S9lGAKWV5E7jlC%2BC1yWYX7I51H0zyC%2FhgD8AdZ45vI0BMDyYqZOT3Mr1AwlvKDHlJAo4x&X-Amz-Signature=644bf12a4c3fe1782cd44c47fd5b9938a7a2cd688b97c0397e44962b59e12020&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWIWHA2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpMgUU8aXFTeI4JBVj8RdNvMiFiyQ39ViwxxfKe9VCiwIhAMS8OucxpFSXVOLJN84dDppcf5MiF5EZ9ftA3k9ebsyKKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuqaKmWe9V%2BQUTySAq3AOqA5Qc1K3bgLFOooR5jACohsjxib0tVoVblfNJMhdWwtV%2B8EN3FkwWcs1sRL0d2XIePOdn%2B30V5xZKA3CmKPLYIv4IiBEk7quX0oMznGQK9WbqfhbA%2FGqNN7cOTJgts5ysjzVE%2FUcEXZTXk1wJKsJxGuMJR%2FuvgyvhiAcdwhgCW%2FoEsxiq%2FQItYASJWpX0z4VokyFDjqemxbdOOSKE556h%2FvdTmHCfN6Ki0XPeXNWXRDukGiG11cp4B7z7kNKBD146h0IfYDvXjCcd9djSZ1WOppsBai%2FgSoe4i3hbWHehB%2FQJddeRH4H%2B2PPpU1zTCvi%2Fa6d5d8VxfJUf2i2S3MqlrO%2FHESO9Pier7qwuvYlzAIp9e5BNhDCKXM7i4V3Z7DbkGLARmiB7W7TBKDhu6fv%2FLOfKiRdm54hr7P1g6%2FiAG10ScYUp6ruy6KZ6gB2laeUdrvT07chpJ7vd1IxtVi841xz7G4PyDkgNGgkJoWsDts5fjT%2BFlPSwRnhUyCqMuGQQo2nIO3Mj9O9U9%2BXc%2BekDLR3ejBEuOqo3H2y%2FYYfOcwBeSuqikqnU%2BIp1QxY9u%2BbMAhR%2BiTudjMcQICeWpo4hBVYVscOVEw3hA4ecl1X05XjmHiVLGYhP%2BqwvUTDV3eTBBjqkAZZM1om3Ekf9oRZGmQrwkhkG667OVAZ7ZMh5s9n1hhje2rDVwoQEKBYNwb5FxuJp1BI9O5DM3Bgw%2BxG0ENgy1s1OwxKuLGEJQ%2BfjvTmRKKUEeQQ1Ol8E3x2cXJ%2BhrVeLo2FihW24%2BV0%2BgxShHbpSjSpnrKPSltr9yap6oTEJJxHwNFJADIPLcQh5J9bSGi7bmBJtigDHLvYgfP84bpLbgYLm7nO8&X-Amz-Signature=8b57b0dbef566202ab4f94bff1a3cccfefa46ec36541ee2d50c044ebcb7c3037&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AII46J%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxvk%2B4UFdv2lOLlMoOzTSTqALdAYlTBow5ybKeWTgxdQIgR0ay2OkqIPyxuT4IXR775c5Za6jT8VxpkJiE0CuU%2BGMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe4fmVoUamYeBOI%2BircA83l49zOJ5x11EXG6tc4SrXShdrbBFrw5uShAB9Qkf1K8%2B6mSbuniQvh4MvSJMLOhqmjVo3Q7CnySQVF5XLp38XWu8HH3XZnyiPDNX%2FO%2F11peOuWZKXz1aY%2BOFAqGJc3oVJFsd9OseyxncQWHhZU0k9gWZDW8E3oG5DLX6Uy2koeDF%2F1vA%2Bu8fI%2FqbZx4xnWkR7qxDLhpIN7Qs3H2tKwbFiuFghxHmCwJBi9xdWckLBpkJ2wGeOSpxpZRpJrN2kQD%2B4ODq4KZ3fG8dxTF3t9MyRJPgy1zH7W1fbRuNMvb8vHoyhZRb7PwZip5DwEh2eH%2F2sZpqcQ9yq90ne6YCAc%2BQPUJuKGgVISm1a8hkfE%2BTAGDgfi7TI0YNzLJkDXMBLjNGa68sf3MrrKBhjxfWMkJeRIcxuv5pMxr4xnwr04wifHMn6EwxRhgz%2B0NgHdb6F5raD%2BCXUB2BA%2Fhqt35IGbVCIMDFvTARc73jnHu3Yu6uD08%2B7zeDzIYtjWl5U3H1S%2BljFj8m43s3%2F82O6cPE9Ij92yMBIt2uTldydM66cD7Ub5g1hHfICCw%2BKldSJM7cPf%2BBDq8Hm9OmDpw4qAZuo3Q6Apw2KDnhfnEWfEtwLucSKH0MByPOdumuLp88lbMJDe5MEGOqUBceN1S60fSkJhYTv%2F6CImEDdlVtirwMJv02pm8USG0IsJjppTaW%2Fl5HTmlCi%2BYUaEjBF652YeZKokBQ1hm3BTzOm7sA9g6iUiGekhZzDq2uDxhh3guP%2FaxSaK8PtiMGGLbeuFbP%2FSQ5h%2F8SG1OR5KU%2BEPgnFsFNbwt2hL2xdqicCvZSCJlpXsAbGzWOnLwbW0VoEvpqSIaYOPdZLDzOX9txZtkn8I&X-Amz-Signature=392095665b819973af9f4d02371f54fa48ee3103449f20958ef6970c535c4321&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF5VZZY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NyjqcKBJXTIpxG%2BxrJDP4M5myMo8m7XBhuyER93LgwIgWlvYO8cL%2FuRAMJhjEY8VxoJKMeSfD%2BWietWqaUfBVWcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnaEjEdj98b6cJCryrcAzhylGpKG0D%2B6i%2BdYBA0zYCspT2L1DS%2BW4XYxgU8mB1IrGMN9pNiTBI07S8pVLnZWGAWQvs9k4Mnd8aDXU%2BE9MzhsP%2FkaTiCsO8pjix4FGI%2BiZCDEFmROYpHSZ%2B8S%2BO7%2B9T%2BmrcLXuEkwt77hiATLDufR7jbiekMW5m4cgJZtHWkBGPSyyd4XWlcBIU6cZIHfbKFadWYjtGE4%2BjRJlcr8Yh1wiG8Nrry2pxhW4yNEOmULZwISm%2Bq0ekyEAOvYBHd6%2FMJ4d%2Bj8mi26vp%2BK5VpokilmA4ER4ceWB1Qo4DCrAzd81AdP2%2F12MbQj4U1n4HasOmniyw2S6Xzjg%2FhEOCilMt2TfOOnyUrNw0EXkiBSseL3HGCZRYtJwhDSaV1Sx4An3lNdoKDGp3DejRqn87kRObrKgmiqXC8AI8F3lv8U%2F45ZH%2FZuKyIZ5nhlR68yBdDFG9VIklWKFJnpP%2B%2BNQfaJPmeTBylkGk3OU9j6f7T%2FuchblcIHzK9pjAHfc6LLVAXWDfN9Xa5m6OmWVhPnVZJPry%2F%2B%2F2lRvhjv9ZpM8YPreymLgNsbqgC%2BpxYoI%2B%2Bn8cE6hY10nt67BX2uNJTUWDZ8Dy6rkeW8qGmuf0HHy0uZhpVJe9%2B3COKUukObeZ8MPHd5MEGOqUB6kuMp5uLm3XiFVga89ZWIVFnMSb%2BTjMoGORipWmLo1kfHspuoM0ekWZtm6MnlRHXYJLcB44wXGA3H7OkeMJVvFa6Mi8qIfsE15XrCva7S9uxozfs19G7eRNalTWVbRR5gBRqtf%2BAT36%2BBSXhPGFyMx9S9lGAKWV5E7jlC%2BC1yWYX7I51H0zyC%2FhgD8AdZ45vI0BMDyYqZOT3Mr1AwlvKDHlJAo4x&X-Amz-Signature=dd1300206812976794ea6488fc6e8dda1cd6f649e9bea0f464cfc2212cf82baf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
