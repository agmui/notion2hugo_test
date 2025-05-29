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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITDDF45%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHig1ujf8otJ%2FYNtJpzc6W3NBZgAyMD7fSE3U1zEgszpAiBr9on%2B%2FVF3nxwr%2BLs6hDD8ry4kVRUg8NR0KhaHJVaVaiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJV1ZqpixsnUJF12YKtwDhIIeyA4mgpUKKZfZ%2FZvSL6RaUncAkCOn2WIIbHpv%2F6ximG9GyT11hjYENpvdEJFv%2BR99YiM1A4rmN349fwv8ERoagsg0PF3lPa16HYz6askAcFP%2FpPZ3MPElNi2e3%2BKsnfRCPqX53U9ceB%2FM7I%2BJ4dNRgaTeI0aAuW8ga3ghxOiyZ%2FZNhgmQPxfgyFCnaH55O4pVjAy7g1F2AlpH9R1MK0hxpD8j0wu6Be6F52dDpYvj5rZbWQIKy10tq6BpX0iFpPh4BrzKnMDuKCAiz7My7%2FwCJJqL6IVFKk%2FxFgX27%2BUcANCf0ws%2FyrquCHfV5Ulhq1DrrM1Qt0MUjZPOr03%2FZApcbspaZ3KTZpqS3WR%2FtfaEXbOID8spY26qcjCwF%2FpEwSYSIK30YGfmUGG9nG4YlH8dD3cSMxmLXPuX0ao8Agsh4BHTzOVISE%2F76Ion4Bk8Kk4ay7%2BJeO9NGAz3eJTqILQeAlRskG7qIDeErOyHvvDdT5UQP%2F8c7nP4qBgVuLuD4oDB1R7umi06AWZdz8myDHk3Q0an2v2rTUwRvijmNZExpkfn75J38%2FCzBiGMpeMvURODkbP0qVVWWwJsYXAXcXmmO9mrGtk5ERiBcyz7z%2BJcarkoJPNBbe50rUQw2P3fwQY6pgEz%2FnnBnGaW0ZuGPFiWQrjOKAdQB3xnkrjOlFrMDvanM2UcSvr89hmGFqIv%2BAU9iLAUnxU%2BFfs3Fv8XTX7ozV0B%2B0RoKxw2OpGos90syXs5MMSxRjTfJTsKuzklzH%2FJU6xyNnxZ1ye7MfDdi7L8aULzYuOnpgdKjFyaL9PEpzMt6hPbHjOuDGsTQME1313ovwlKebg0CApogBGffj2wVcJlYywntndX&X-Amz-Signature=aa6799d22ce06e6fce1d895e126080aad379bd1d91ac2086ee53faa8bae9d85c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITDDF45%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHig1ujf8otJ%2FYNtJpzc6W3NBZgAyMD7fSE3U1zEgszpAiBr9on%2B%2FVF3nxwr%2BLs6hDD8ry4kVRUg8NR0KhaHJVaVaiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJV1ZqpixsnUJF12YKtwDhIIeyA4mgpUKKZfZ%2FZvSL6RaUncAkCOn2WIIbHpv%2F6ximG9GyT11hjYENpvdEJFv%2BR99YiM1A4rmN349fwv8ERoagsg0PF3lPa16HYz6askAcFP%2FpPZ3MPElNi2e3%2BKsnfRCPqX53U9ceB%2FM7I%2BJ4dNRgaTeI0aAuW8ga3ghxOiyZ%2FZNhgmQPxfgyFCnaH55O4pVjAy7g1F2AlpH9R1MK0hxpD8j0wu6Be6F52dDpYvj5rZbWQIKy10tq6BpX0iFpPh4BrzKnMDuKCAiz7My7%2FwCJJqL6IVFKk%2FxFgX27%2BUcANCf0ws%2FyrquCHfV5Ulhq1DrrM1Qt0MUjZPOr03%2FZApcbspaZ3KTZpqS3WR%2FtfaEXbOID8spY26qcjCwF%2FpEwSYSIK30YGfmUGG9nG4YlH8dD3cSMxmLXPuX0ao8Agsh4BHTzOVISE%2F76Ion4Bk8Kk4ay7%2BJeO9NGAz3eJTqILQeAlRskG7qIDeErOyHvvDdT5UQP%2F8c7nP4qBgVuLuD4oDB1R7umi06AWZdz8myDHk3Q0an2v2rTUwRvijmNZExpkfn75J38%2FCzBiGMpeMvURODkbP0qVVWWwJsYXAXcXmmO9mrGtk5ERiBcyz7z%2BJcarkoJPNBbe50rUQw2P3fwQY6pgEz%2FnnBnGaW0ZuGPFiWQrjOKAdQB3xnkrjOlFrMDvanM2UcSvr89hmGFqIv%2BAU9iLAUnxU%2BFfs3Fv8XTX7ozV0B%2B0RoKxw2OpGos90syXs5MMSxRjTfJTsKuzklzH%2FJU6xyNnxZ1ye7MfDdi7L8aULzYuOnpgdKjFyaL9PEpzMt6hPbHjOuDGsTQME1313ovwlKebg0CApogBGffj2wVcJlYywntndX&X-Amz-Signature=31010e728e2e0ccf533c67d09003fa0d7d605609745aeaba26b35fa0c277ab64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITDDF45%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHig1ujf8otJ%2FYNtJpzc6W3NBZgAyMD7fSE3U1zEgszpAiBr9on%2B%2FVF3nxwr%2BLs6hDD8ry4kVRUg8NR0KhaHJVaVaiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJV1ZqpixsnUJF12YKtwDhIIeyA4mgpUKKZfZ%2FZvSL6RaUncAkCOn2WIIbHpv%2F6ximG9GyT11hjYENpvdEJFv%2BR99YiM1A4rmN349fwv8ERoagsg0PF3lPa16HYz6askAcFP%2FpPZ3MPElNi2e3%2BKsnfRCPqX53U9ceB%2FM7I%2BJ4dNRgaTeI0aAuW8ga3ghxOiyZ%2FZNhgmQPxfgyFCnaH55O4pVjAy7g1F2AlpH9R1MK0hxpD8j0wu6Be6F52dDpYvj5rZbWQIKy10tq6BpX0iFpPh4BrzKnMDuKCAiz7My7%2FwCJJqL6IVFKk%2FxFgX27%2BUcANCf0ws%2FyrquCHfV5Ulhq1DrrM1Qt0MUjZPOr03%2FZApcbspaZ3KTZpqS3WR%2FtfaEXbOID8spY26qcjCwF%2FpEwSYSIK30YGfmUGG9nG4YlH8dD3cSMxmLXPuX0ao8Agsh4BHTzOVISE%2F76Ion4Bk8Kk4ay7%2BJeO9NGAz3eJTqILQeAlRskG7qIDeErOyHvvDdT5UQP%2F8c7nP4qBgVuLuD4oDB1R7umi06AWZdz8myDHk3Q0an2v2rTUwRvijmNZExpkfn75J38%2FCzBiGMpeMvURODkbP0qVVWWwJsYXAXcXmmO9mrGtk5ERiBcyz7z%2BJcarkoJPNBbe50rUQw2P3fwQY6pgEz%2FnnBnGaW0ZuGPFiWQrjOKAdQB3xnkrjOlFrMDvanM2UcSvr89hmGFqIv%2BAU9iLAUnxU%2BFfs3Fv8XTX7ozV0B%2B0RoKxw2OpGos90syXs5MMSxRjTfJTsKuzklzH%2FJU6xyNnxZ1ye7MfDdi7L8aULzYuOnpgdKjFyaL9PEpzMt6hPbHjOuDGsTQME1313ovwlKebg0CApogBGffj2wVcJlYywntndX&X-Amz-Signature=0f3c547babe22c1ffdf9d77b792c77cc773cd6df1ec8f62da3b0454636eaf822&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4H3EQB3%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcWF0Q2Z0%2FfFEpwxPn6BQdrdzoZnSJQEj17%2BaO7%2B8rqAiBQYhDTpw50Il7y0DDmY3q2iwNj0Hp3A%2Fz8U4YS6YJfFCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXmLCuSVo5eYpNKLKtwD9cCxl3%2BMVSKYMb0AopXdfR11m%2BIjHwHfi6ogjrw6tjrEpYLUss52vlZwPIeP0DwVP2SQJIhTvk7NYO6BxbKAoekWhq9un9RWoS6u4afLu2sFhVuk%2FFpfsCtopd1PaxdRnST0S%2BLuh2BZNT8Ak8SFf%2FB1rvKKKciaNM%2Bu2XqND5VCGYv1xBBO%2FjbaRkRsEtENNJgrwXR9bXwBD99xLYSWqjb1pXaNyL9q8msFUBBqgZ1vRmIKskwk%2BvqeNrffgxxYoC8FrAo38S6vDDbvRVA9b5k%2BOL9vAvM4l5qgyf6llcPsiLmusmDa1yiuBYTrzrQ4Axt6GigpQtDpThgmCpcGtliXt6g6t77473cQjfOPEScPCUSSfrHSS3XyJTuxE7PHFb56aCp2UtUq6OpdxtSQRq3zR0Xm1yRqagsvj%2FuxvGWTXAlSJiVtQhdG9v3z9GAI1EPlQOWIEiv80cl6TmAqSjgvzS7cYan%2FhEyE4iYgW5eiHwYXQAJ0aduBaJcCspnxBSi8ALrIxWBSEbu2nN7fORuZq4zmv8UayYvEtz6bXw%2FN0mgYF5oudioiGKmdDlStTJqWwW7tthmBXiOXBha7dpIJXhMcRLwhy6xsi38CJ%2Fmhamzj5ergvSW%2FuNMw6P3fwQY6pgH1mL0NK2ST56cMA%2FYj%2B2YQT%2Fr9eOaYxJRVXToiwVehbcrBdyp62PnKWSjvH4L2YOcu4tb0p3WqionhYVFSEReR20lDUDEWgqKzw28y6WN%2FIAzGPR03xtZ4gcRy4RSKwwee2wjOSPijiD1ABlBuOc5OI7I3rqLowaI6eedIRuIhz4p6hrPyT3pV2dMxy2Ji2x%2FnZg0zpTxqrcBQgU%2BC6hvBuJtKLX0A&X-Amz-Signature=3ae7b19be8147863e3956dbacac75e77b4e3b87fd90f6aa23029885ee7d95606&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RB65NJT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGQ5SgfuvWUD00hsWSjJGTMim7qK6MRZP4ddyfQ%2B%2FSTQIhAI%2FHchwYv6GEWAH0Ejnv5u9IvO9Fx9MekMAmxLQU4lB7KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUr0FvRVe8hO1va9kq3AN73BfatyLyl9NbsKWw7abwakE8CRadsNmXM0XfNlWmjlOvS1itZaFtRNdiimfwskdfx96CKCDjeLNRJYWpfLbBnc7tjePGK%2Fa48joBgzC79DOeUAt3agDY3BlQhQUAaw4BXsKUH%2FQQ%2FKT4qD8Q5%2FjlSKAdRQdNtNvcllP57ixj4plgioc243ZPST3928DQmjQ1HkpvMsmFrxtYOSFSDQFBQiopX%2BXdhMUOatmyvWs6%2BEsgAvFm5qF8O802ZVCNeE1Glll2vOG%2F3FBgm3gsgtxs7n3V2KQydaTzNmWVT9YHMQ5or1crFIfPjJ%2FZJZdYJIePMAK2EuP1zc%2B30hshLwdQX0fpkW2JagD2%2Bdag%2BYzDOf%2FAnI582VMM%2BjINhQ9QHTYCxPPfVBGSkOy2IxD8Sps2iQuM1KVuC60kgrfzHEzW%2FNt1VcHVFXoxPZDiJxfVXE%2Fp1%2BcPJnBHEjnZK0Hcg96sJz7J2mfAKN4IGIdi5jUrEU28MmiroPj06fXdh%2FvFEN65RH8kURE2iQzr2nfoPd1mfW1GcFOqNhdsx%2FC0hU%2FRtE3kZ6GKZD5SFTOOkqyNzpugGBMYDc%2Bvsyh1tEqIiAqEivEyt3xAi%2BJYsNF8%2B6M0jZtChxCHrWgzO%2BV0gDCT%2Fd%2FBBjqkAXeroBfBhVJr41Vbu0zn4NWVPvb%2F7iVurINHfEz%2F8ZPQMG1%2Fc3%2BllZKtN%2FOiTBjrKYSi2aOrCIvEIDESmZs5GAq350ezkH188kb069e2EoGbhh9siG4RFYXNIPZijIwMtilZm%2BxDkcO1j9uVIAW4gW9WK4Qek%2FCp1wk4tJauZ0d4CvisV1W8dutjMXpGsKbi7ZK22mI4Y4bkSauqCcYeUbDh7zWz&X-Amz-Signature=cddb0775764ea91bdffa0337f69924e5ca9b5d883dd35c3f5e9ba27aff332c78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITDDF45%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHig1ujf8otJ%2FYNtJpzc6W3NBZgAyMD7fSE3U1zEgszpAiBr9on%2B%2FVF3nxwr%2BLs6hDD8ry4kVRUg8NR0KhaHJVaVaiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJV1ZqpixsnUJF12YKtwDhIIeyA4mgpUKKZfZ%2FZvSL6RaUncAkCOn2WIIbHpv%2F6ximG9GyT11hjYENpvdEJFv%2BR99YiM1A4rmN349fwv8ERoagsg0PF3lPa16HYz6askAcFP%2FpPZ3MPElNi2e3%2BKsnfRCPqX53U9ceB%2FM7I%2BJ4dNRgaTeI0aAuW8ga3ghxOiyZ%2FZNhgmQPxfgyFCnaH55O4pVjAy7g1F2AlpH9R1MK0hxpD8j0wu6Be6F52dDpYvj5rZbWQIKy10tq6BpX0iFpPh4BrzKnMDuKCAiz7My7%2FwCJJqL6IVFKk%2FxFgX27%2BUcANCf0ws%2FyrquCHfV5Ulhq1DrrM1Qt0MUjZPOr03%2FZApcbspaZ3KTZpqS3WR%2FtfaEXbOID8spY26qcjCwF%2FpEwSYSIK30YGfmUGG9nG4YlH8dD3cSMxmLXPuX0ao8Agsh4BHTzOVISE%2F76Ion4Bk8Kk4ay7%2BJeO9NGAz3eJTqILQeAlRskG7qIDeErOyHvvDdT5UQP%2F8c7nP4qBgVuLuD4oDB1R7umi06AWZdz8myDHk3Q0an2v2rTUwRvijmNZExpkfn75J38%2FCzBiGMpeMvURODkbP0qVVWWwJsYXAXcXmmO9mrGtk5ERiBcyz7z%2BJcarkoJPNBbe50rUQw2P3fwQY6pgEz%2FnnBnGaW0ZuGPFiWQrjOKAdQB3xnkrjOlFrMDvanM2UcSvr89hmGFqIv%2BAU9iLAUnxU%2BFfs3Fv8XTX7ozV0B%2B0RoKxw2OpGos90syXs5MMSxRjTfJTsKuzklzH%2FJU6xyNnxZ1ye7MfDdi7L8aULzYuOnpgdKjFyaL9PEpzMt6hPbHjOuDGsTQME1313ovwlKebg0CApogBGffj2wVcJlYywntndX&X-Amz-Signature=4c000284699648db14ce2343c390fcb4e9913c365a38b2c3dbf6db7db8f87e93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
