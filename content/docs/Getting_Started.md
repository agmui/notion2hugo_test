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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3UWUZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCQPmyKbyTTzJ7aGfmQq6UQ6SuRO7pI2V3wYOLQti0QBQIhANUD6THtt%2FKBgT98rNKsLQR1WDBlUowwuOsn5G2m3unRKv8DCBsQABoMNjM3NDIzMTgzODA1Igy5OGqYW4V7C5uH3T8q3APcOjD%2B5wAvH%2B32hH9uuokb9AIGi8vK4gECRYzXqbzeya0wbSeQ%2FYs9MQDQgAzViVZZzqoZFWxBKOWUiNg9tJwvfzNBX0rU2AGuVsNLMHVj8%2FzND104NhD10tv8jJoj3S34ycMn9NmZgZ9arZdAG0VwZacQIX8iQLuYswOY%2Bqq5viSNLZwLd5ld200CAM%2Fu4xr4TxHTBdCb5QYaRbvBXR%2BIQLHXUL72m33yCM6tbdpiS2WOumC8XLQ3UpCGEEU1LBv1tuXXJA6TZClIgpz9VVQusBrl5mMFlIGDBaYzNPbDzHWcraik0LYNfKLCfF1wu1iXYBrNr0V3XAUcdkyy3DJJpFpvQa5Db11YXYA4NL1%2Fj6BrYueJ%2BsUUHuHE8%2BGccMX65%2FV2DnLz3oCCgyJOofj2T09H%2BFcohb3TojZ9VYKC32Nta3g5n1qCXnDbwcayxLMTLdIqVxlPVRXTZMXAv8DN2bVZ1vwfSkZTgwtO39daecTmg2MpvkOQHGll49oR%2F2rvS4GGGMuB2PoRjLa9Y8Lx9Du3%2FjYOn93luUBuy0YIcB9GGWKB%2FzpkFVGIwBs91lyLdOz0XGYDLc8quUW9C5dxllH%2BQG0n8Z6qGWD7mM3yNSpxc0WvMX%2BvyJiqdjCX58%2FDBjqkAZH%2FLZD04VPbYRVThj2hwGhm8uMhSzQQHOTjjZ3Mq5c4prW5lr%2FzvPbS9QB3R%2BxUNc1KeXJgMjHPmOSkyVkdTegl2g8IN43srVADo5R9qA470LE365fvrzD6chRLOWYD%2B%2B77d0S%2ByLnOWqO9a9eS%2FEKwHMnuPZaS0A9iaXyRr%2BFW2j1oecAUf6I99RQUN7%2BmOP5mTuRvxZOFDWBCbCGnux2F2rZ0&X-Amz-Signature=b0a85743da9ebf1b411075f73bcebb2b96d5d923f5b53e874522167a28f87c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3UWUZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCQPmyKbyTTzJ7aGfmQq6UQ6SuRO7pI2V3wYOLQti0QBQIhANUD6THtt%2FKBgT98rNKsLQR1WDBlUowwuOsn5G2m3unRKv8DCBsQABoMNjM3NDIzMTgzODA1Igy5OGqYW4V7C5uH3T8q3APcOjD%2B5wAvH%2B32hH9uuokb9AIGi8vK4gECRYzXqbzeya0wbSeQ%2FYs9MQDQgAzViVZZzqoZFWxBKOWUiNg9tJwvfzNBX0rU2AGuVsNLMHVj8%2FzND104NhD10tv8jJoj3S34ycMn9NmZgZ9arZdAG0VwZacQIX8iQLuYswOY%2Bqq5viSNLZwLd5ld200CAM%2Fu4xr4TxHTBdCb5QYaRbvBXR%2BIQLHXUL72m33yCM6tbdpiS2WOumC8XLQ3UpCGEEU1LBv1tuXXJA6TZClIgpz9VVQusBrl5mMFlIGDBaYzNPbDzHWcraik0LYNfKLCfF1wu1iXYBrNr0V3XAUcdkyy3DJJpFpvQa5Db11YXYA4NL1%2Fj6BrYueJ%2BsUUHuHE8%2BGccMX65%2FV2DnLz3oCCgyJOofj2T09H%2BFcohb3TojZ9VYKC32Nta3g5n1qCXnDbwcayxLMTLdIqVxlPVRXTZMXAv8DN2bVZ1vwfSkZTgwtO39daecTmg2MpvkOQHGll49oR%2F2rvS4GGGMuB2PoRjLa9Y8Lx9Du3%2FjYOn93luUBuy0YIcB9GGWKB%2FzpkFVGIwBs91lyLdOz0XGYDLc8quUW9C5dxllH%2BQG0n8Z6qGWD7mM3yNSpxc0WvMX%2BvyJiqdjCX58%2FDBjqkAZH%2FLZD04VPbYRVThj2hwGhm8uMhSzQQHOTjjZ3Mq5c4prW5lr%2FzvPbS9QB3R%2BxUNc1KeXJgMjHPmOSkyVkdTegl2g8IN43srVADo5R9qA470LE365fvrzD6chRLOWYD%2B%2B77d0S%2ByLnOWqO9a9eS%2FEKwHMnuPZaS0A9iaXyRr%2BFW2j1oecAUf6I99RQUN7%2BmOP5mTuRvxZOFDWBCbCGnux2F2rZ0&X-Amz-Signature=245b139aa7b3e2aca16d63cd2382b22b4ed983a0fb00716cb6fb801bb36d1caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3UWUZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCQPmyKbyTTzJ7aGfmQq6UQ6SuRO7pI2V3wYOLQti0QBQIhANUD6THtt%2FKBgT98rNKsLQR1WDBlUowwuOsn5G2m3unRKv8DCBsQABoMNjM3NDIzMTgzODA1Igy5OGqYW4V7C5uH3T8q3APcOjD%2B5wAvH%2B32hH9uuokb9AIGi8vK4gECRYzXqbzeya0wbSeQ%2FYs9MQDQgAzViVZZzqoZFWxBKOWUiNg9tJwvfzNBX0rU2AGuVsNLMHVj8%2FzND104NhD10tv8jJoj3S34ycMn9NmZgZ9arZdAG0VwZacQIX8iQLuYswOY%2Bqq5viSNLZwLd5ld200CAM%2Fu4xr4TxHTBdCb5QYaRbvBXR%2BIQLHXUL72m33yCM6tbdpiS2WOumC8XLQ3UpCGEEU1LBv1tuXXJA6TZClIgpz9VVQusBrl5mMFlIGDBaYzNPbDzHWcraik0LYNfKLCfF1wu1iXYBrNr0V3XAUcdkyy3DJJpFpvQa5Db11YXYA4NL1%2Fj6BrYueJ%2BsUUHuHE8%2BGccMX65%2FV2DnLz3oCCgyJOofj2T09H%2BFcohb3TojZ9VYKC32Nta3g5n1qCXnDbwcayxLMTLdIqVxlPVRXTZMXAv8DN2bVZ1vwfSkZTgwtO39daecTmg2MpvkOQHGll49oR%2F2rvS4GGGMuB2PoRjLa9Y8Lx9Du3%2FjYOn93luUBuy0YIcB9GGWKB%2FzpkFVGIwBs91lyLdOz0XGYDLc8quUW9C5dxllH%2BQG0n8Z6qGWD7mM3yNSpxc0WvMX%2BvyJiqdjCX58%2FDBjqkAZH%2FLZD04VPbYRVThj2hwGhm8uMhSzQQHOTjjZ3Mq5c4prW5lr%2FzvPbS9QB3R%2BxUNc1KeXJgMjHPmOSkyVkdTegl2g8IN43srVADo5R9qA470LE365fvrzD6chRLOWYD%2B%2B77d0S%2ByLnOWqO9a9eS%2FEKwHMnuPZaS0A9iaXyRr%2BFW2j1oecAUf6I99RQUN7%2BmOP5mTuRvxZOFDWBCbCGnux2F2rZ0&X-Amz-Signature=c70de85114f7385c90ab3f5a33e2b0ff85a4439fce0f51d8043372cfdaa30d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKBVSX6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCOFjT74NXtwkElM05f14FSJ3XHZZWVOF65LNTPq5TU6QIhAP6kvnLRlg8c0kgz15MT1xGKGaKk6NCVqmcPvs93g6j8Kv8DCBsQABoMNjM3NDIzMTgzODA1Igy180KtzDD0nPpkOSEq3AN10U2%2BXOR%2B0VtBWPFRo4mbTkaeH%2Bbhhf6YieV3EGi%2FW6gDi5DSuChPnwct83rTpiLPGzkSSPyAlc0cfVwplPQ3G1j6uzI0J1%2FIXv3Z%2BKR5%2BJN0mJuMTqd40hH3AxNLsCQhNfcA%2B2dNT5ITBzXpB8Zv8NtdSfqcBEr6%2F24ipB1pZ7khkDxsY6okhdxs62KsAgTIa%2B4DLZPKkkkrwgFxIDjYO%2BLO32rUhe3TItu10h3s1p2TDsdOrq7DR4CtCZwyqMdWW9PI9nkj44TeblI8HbLPtPPKvsSG7AmDv3xv9X1dQfe7X5QcQhVmiszP6F84izSGfLKNw%2BLsEWlFPr94hcgt%2FOeNf%2FmgWFFeqMZ333MhuJOpP568zYKkRVMKsIBMgEZCJhYM4lf9xcdVNcnocZm%2F%2Ftyu%2BeZQDRotjK%2FDKMtadHqGfTPkzmAePGq4adh0AtRa1mGBEYK3m73OdbLczRHJHcEa79aFwOue%2B08hD8gwL1L57%2F0KqlLsOO00lZdEh1BouQl9psSf5KR4f9fQZFYPMOqBcNbHyi8OV0hh4ZgcANQRc9W%2ByPMoWlJ8Wkix2CAklIsiu1zY%2FQi3Xt54D8PysUx4y1bcpsgTMY36hZzdUy2FhmvVgWXU4q%2FXojCi58%2FDBjqkAWygDeRhxEPTr%2Fg5jYMlYykDMB0NtPpDmdBepUWYETqHSlSfHMxFUHnY4xORVIiVIWGROGydfQVgYw6tuBY%2FG7bqV09R0927vU4cDuKp1IGg8pi1FEON%2B0PDiFMAjlrsZyJwn%2BmFx17hewKR7dxlJaFnOt%2FYRFThTu3YbSlCCyyA4smGmQQLvzZb59AUS7zcXT9xX5RjtYZYrIHVxxCULi8WMtaK&X-Amz-Signature=919d721b77b0ec630019be0e0ad2100045bb94f81dab16d7edd50ba453bb8d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGX7WUYV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAJhIs1BTu%2Bzvo%2BHZB5M7o6gaijcsPJVYMinicq4PKIlAiBBnVUCCy3LhKIKUUr504uOBG%2BLtKVJZ35m0yjFfmP%2FUCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMy8pvrl5TFBsCWrvBKtwDECu6wG9EWD%2F4wcWJE1upHC5QMToq0yUqEGAmNUcC2zrztkSQ%2BtJqDY5wyZd0n%2B%2F9CV5J50yjrU8yH6%2FMCM5oIQd%2FZdEC2k6D%2FaOHIx7ETpgU9LLkm6%2FDHUwURChtTXbXpAm49t%2BbwKGiWM6JSivVYsolchcacXWQJVBwwhj8hPkbE86Xk8yRZ9O3ngPZw%2BVtPUZiujT7A%2BrG9OJIQXUSoRia3ILc47elNrbuBx9NIq7k3Pm0sR3EuwQaOIZlN3pn4tdneV1Cw9ZRQcm%2BEkyx5bIVkomy3pcL%2BdX5NoZ0nVtvmXqY2%2FR8DmwJTL8CrS1ZoKgs1Xsz%2BI1caxFmT7TSJDneKwjG8jbzO%2FFGDKv1Tua2sYMugiMT4cyszsLeUIwJjttcOozr1NsyNN0JLWCbzCrU1zIg84cV92fJvAQ9WOaZ4RLiWKVfWg07rXlbczL8%2FAn5r%2Bjn%2FFfeR8v0jlo60ntAF%2FlfbGUn%2FiqcC9fRHzP9p0aSU6G3al%2BVj9XJF2yUjuhcDypLwveIEjS%2B%2FRDhM%2Bi%2BUl2vzPatYbrkXUqLnGZX5ooePS6x7FYISbr5U9ryF0YaiMc6BnESrEvqnVWh1DXtXon%2B%2Fvz9OKiLbNJ42FgHoZou17JokBYkycMwiufPwwY6pgHC2SW66BwMiFmLk4HRT%2Fn9SelvdPWLA2Xha5n1%2Fo6pnh729MQ9FQfH6IfALD6%2FO%2FGGlTVdlQPJg%2Fzm75wwNx7yEsl9Gpemz4wKgHW05WrP4QTWGLF8FExCwymVGFmmN15G6hIo%2BDvoYRY80At9e2cnujNuTN6retvOLjGD7elsMVKEGrDtq3%2FivtQjV9CybMBxc7ltW5byHftNxQD3%2BV0oGLFvCSBB&X-Amz-Signature=70018ab8dc462d49b6f5b0bd5544069f9f3a7a28f20c6e61fb31fc65bdafb03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3UWUZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCQPmyKbyTTzJ7aGfmQq6UQ6SuRO7pI2V3wYOLQti0QBQIhANUD6THtt%2FKBgT98rNKsLQR1WDBlUowwuOsn5G2m3unRKv8DCBsQABoMNjM3NDIzMTgzODA1Igy5OGqYW4V7C5uH3T8q3APcOjD%2B5wAvH%2B32hH9uuokb9AIGi8vK4gECRYzXqbzeya0wbSeQ%2FYs9MQDQgAzViVZZzqoZFWxBKOWUiNg9tJwvfzNBX0rU2AGuVsNLMHVj8%2FzND104NhD10tv8jJoj3S34ycMn9NmZgZ9arZdAG0VwZacQIX8iQLuYswOY%2Bqq5viSNLZwLd5ld200CAM%2Fu4xr4TxHTBdCb5QYaRbvBXR%2BIQLHXUL72m33yCM6tbdpiS2WOumC8XLQ3UpCGEEU1LBv1tuXXJA6TZClIgpz9VVQusBrl5mMFlIGDBaYzNPbDzHWcraik0LYNfKLCfF1wu1iXYBrNr0V3XAUcdkyy3DJJpFpvQa5Db11YXYA4NL1%2Fj6BrYueJ%2BsUUHuHE8%2BGccMX65%2FV2DnLz3oCCgyJOofj2T09H%2BFcohb3TojZ9VYKC32Nta3g5n1qCXnDbwcayxLMTLdIqVxlPVRXTZMXAv8DN2bVZ1vwfSkZTgwtO39daecTmg2MpvkOQHGll49oR%2F2rvS4GGGMuB2PoRjLa9Y8Lx9Du3%2FjYOn93luUBuy0YIcB9GGWKB%2FzpkFVGIwBs91lyLdOz0XGYDLc8quUW9C5dxllH%2BQG0n8Z6qGWD7mM3yNSpxc0WvMX%2BvyJiqdjCX58%2FDBjqkAZH%2FLZD04VPbYRVThj2hwGhm8uMhSzQQHOTjjZ3Mq5c4prW5lr%2FzvPbS9QB3R%2BxUNc1KeXJgMjHPmOSkyVkdTegl2g8IN43srVADo5R9qA470LE365fvrzD6chRLOWYD%2B%2B77d0S%2ByLnOWqO9a9eS%2FEKwHMnuPZaS0A9iaXyRr%2BFW2j1oecAUf6I99RQUN7%2BmOP5mTuRvxZOFDWBCbCGnux2F2rZ0&X-Amz-Signature=f1af886850d96111dfd8b70f1b98c6e744f05a3612bd544a6a2491681e9df03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
