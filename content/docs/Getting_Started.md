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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTDIPZM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDbvKLsYUhfdT8ExFOeteKfdHWKvcgU799xtEBeRiB4zAIgEOK692H064p1%2BVMzL5vz903Rv9iwRv2e2HT%2FFhQynSgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7u2PXHXz2tTJ2TCrcA4nRY7PQtBfph%2B8Pvv0TzLhlA9p7LiO5LJjNrwNy7XeKS1rwNrjuVKsudB5Qc%2ByZKUyKSsMloT6WdS9H7CCfZ8Djx3IzLXBe%2BwhybtJBHfGRdwyq6Ub91rv%2BiI%2B89AXMI8PH9nqkS0C5%2BRUA4C7zTpHEY7YDzNWCNk0fxeaeEz5auKQtAS8BufK%2BKwXts%2FIX9yN3KxEBBk%2Bw310pVbZz78gc5Y1B4%2B%2FDvEzYrl4hfht0L2W7ar9orClLivf2qz86G6eX5akh94fni8Gu6uxDe%2FlwlZzGWJy44OwOCoC95ATrp7KxuDP%2BlSFdQ48XH0otzE2eEdxMHJHRDVjs6yeYb%2BCNaoUi11t00bVlzCE4R0iA10QHGKX0q8%2Fln%2FR2afhCyzUcFh1h12jWTiXp9BOFAZaCGSlL1mgPP6tMbZsOK9YYC55XXp2FIyDShDEmKih3h%2Fo46pdxTM2D4qYiLu7HGyQhjI2iW5%2BaX5mJk3bUg6i6T53t2CDtu3qOGEcqqdkOgWuYvyjr5nQgafvxJU3iWkYgziM8Ttgu%2F7GbclJ4W8pUFnU8GK1M3tgpjy6ewxp5xXkjpaUNFLh0m6VUyxmUQGOSyStCZmnLPv6MTXIbpbGO8E8RUFwUOvCQryjkMLGXx8AGOqUBdFa1QRdnB6s3jJPKRQb1m6szOhi%2B7Z8ri07abxk4yxgE%2BZ7vbi6pZ8itPvjJ2onkzg%2FyRESFBUlr%2FWLdpqS5OdDwm5Fkr%2FBbU60lxmE8GtP8SqVoERTcXncJ86M89CB6RYvCuAZw5vcfhDe%2BXMdLnJ7dEMWGtEag4lRaqLP2OdcuNrfIcefdTwQ0MyNhret6%2Ba20pt7OfR9r8tOgo7C2JD2MdOgQ&X-Amz-Signature=09ec376837357395b87bd0c6c6ad00feccdd5da0ec3bb2a57095dc3a904e4c68&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTDIPZM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDbvKLsYUhfdT8ExFOeteKfdHWKvcgU799xtEBeRiB4zAIgEOK692H064p1%2BVMzL5vz903Rv9iwRv2e2HT%2FFhQynSgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7u2PXHXz2tTJ2TCrcA4nRY7PQtBfph%2B8Pvv0TzLhlA9p7LiO5LJjNrwNy7XeKS1rwNrjuVKsudB5Qc%2ByZKUyKSsMloT6WdS9H7CCfZ8Djx3IzLXBe%2BwhybtJBHfGRdwyq6Ub91rv%2BiI%2B89AXMI8PH9nqkS0C5%2BRUA4C7zTpHEY7YDzNWCNk0fxeaeEz5auKQtAS8BufK%2BKwXts%2FIX9yN3KxEBBk%2Bw310pVbZz78gc5Y1B4%2B%2FDvEzYrl4hfht0L2W7ar9orClLivf2qz86G6eX5akh94fni8Gu6uxDe%2FlwlZzGWJy44OwOCoC95ATrp7KxuDP%2BlSFdQ48XH0otzE2eEdxMHJHRDVjs6yeYb%2BCNaoUi11t00bVlzCE4R0iA10QHGKX0q8%2Fln%2FR2afhCyzUcFh1h12jWTiXp9BOFAZaCGSlL1mgPP6tMbZsOK9YYC55XXp2FIyDShDEmKih3h%2Fo46pdxTM2D4qYiLu7HGyQhjI2iW5%2BaX5mJk3bUg6i6T53t2CDtu3qOGEcqqdkOgWuYvyjr5nQgafvxJU3iWkYgziM8Ttgu%2F7GbclJ4W8pUFnU8GK1M3tgpjy6ewxp5xXkjpaUNFLh0m6VUyxmUQGOSyStCZmnLPv6MTXIbpbGO8E8RUFwUOvCQryjkMLGXx8AGOqUBdFa1QRdnB6s3jJPKRQb1m6szOhi%2B7Z8ri07abxk4yxgE%2BZ7vbi6pZ8itPvjJ2onkzg%2FyRESFBUlr%2FWLdpqS5OdDwm5Fkr%2FBbU60lxmE8GtP8SqVoERTcXncJ86M89CB6RYvCuAZw5vcfhDe%2BXMdLnJ7dEMWGtEag4lRaqLP2OdcuNrfIcefdTwQ0MyNhret6%2Ba20pt7OfR9r8tOgo7C2JD2MdOgQ&X-Amz-Signature=7b7552a639e1c47903869649e027e30c13de891a846d84bcb8a6d7411e42c42a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTDIPZM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDbvKLsYUhfdT8ExFOeteKfdHWKvcgU799xtEBeRiB4zAIgEOK692H064p1%2BVMzL5vz903Rv9iwRv2e2HT%2FFhQynSgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7u2PXHXz2tTJ2TCrcA4nRY7PQtBfph%2B8Pvv0TzLhlA9p7LiO5LJjNrwNy7XeKS1rwNrjuVKsudB5Qc%2ByZKUyKSsMloT6WdS9H7CCfZ8Djx3IzLXBe%2BwhybtJBHfGRdwyq6Ub91rv%2BiI%2B89AXMI8PH9nqkS0C5%2BRUA4C7zTpHEY7YDzNWCNk0fxeaeEz5auKQtAS8BufK%2BKwXts%2FIX9yN3KxEBBk%2Bw310pVbZz78gc5Y1B4%2B%2FDvEzYrl4hfht0L2W7ar9orClLivf2qz86G6eX5akh94fni8Gu6uxDe%2FlwlZzGWJy44OwOCoC95ATrp7KxuDP%2BlSFdQ48XH0otzE2eEdxMHJHRDVjs6yeYb%2BCNaoUi11t00bVlzCE4R0iA10QHGKX0q8%2Fln%2FR2afhCyzUcFh1h12jWTiXp9BOFAZaCGSlL1mgPP6tMbZsOK9YYC55XXp2FIyDShDEmKih3h%2Fo46pdxTM2D4qYiLu7HGyQhjI2iW5%2BaX5mJk3bUg6i6T53t2CDtu3qOGEcqqdkOgWuYvyjr5nQgafvxJU3iWkYgziM8Ttgu%2F7GbclJ4W8pUFnU8GK1M3tgpjy6ewxp5xXkjpaUNFLh0m6VUyxmUQGOSyStCZmnLPv6MTXIbpbGO8E8RUFwUOvCQryjkMLGXx8AGOqUBdFa1QRdnB6s3jJPKRQb1m6szOhi%2B7Z8ri07abxk4yxgE%2BZ7vbi6pZ8itPvjJ2onkzg%2FyRESFBUlr%2FWLdpqS5OdDwm5Fkr%2FBbU60lxmE8GtP8SqVoERTcXncJ86M89CB6RYvCuAZw5vcfhDe%2BXMdLnJ7dEMWGtEag4lRaqLP2OdcuNrfIcefdTwQ0MyNhret6%2Ba20pt7OfR9r8tOgo7C2JD2MdOgQ&X-Amz-Signature=c7b8a85752ff74028c1910a9f852a2f1ef6c4a9da64cba1f358699a0ed3ee86b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5M6PZWB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCvLhOBVuabIGfNXhYwHTJGV4%2FKKzN00eG1XIolTqhzfQIgJYP8xC0emj7yoyzrxsHZyNWH536j7tAElqpPssgO4MEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBg3RGpv8Vfo%2BgY5yrcA5F%2FGZxb%2Bjax6kmQzEYXZmqF0o5PzXoZs%2FU%2F4%2Bk1i%2ButmSb%2Fger4XVmcmkN%2FsNJTGqPIpyXTFNWzCei4TmcrlQAnkMI4eCTZAw2Jmp5JCNadqytQfTPjet7O6ru7TeVNOn2Pertx74DWlUrOP5jVLyTE%2FNp%2BsbizTW1YRlzijCWKZQItpFXlgXr1tbn7nNkzIieJ3ryLeS0xwyFfpgvf02qVU2etmc3saUqRGjPJ5SNpe6DUw6o%2BSvxBfDIaYSLNUrnmkivNPmopPr0uM%2BDzA1Rt2tFFiOqn5dqHW25m8%2B8igo1RO4iSsa14fJUn4Iljs4S9eXkcMDNTkVPabbh005eCsQcCwczfuzjHAJ1AKWPULkhtRnYkjLq4L90oEvS9aa%2BMwpGsHLvoY7WIJrd3Idv70kB57G5jS%2BxguiCkSvyDlmGKuuxfaLuv6%2FGWwmjKcI8VMoYxrFZHlqwwHlDNQXQqgdtfOby%2Bfzy0%2FWgSVX64HenItG%2F6YdKZRm9VOcVL3xgR8ktveGV13S%2FPTWgfl%2B%2BsvdBYceql%2BtHbBEypX5TJwN2n4RYhZeC031n7fex4eEt8X1LbLkAWnPIn86BM3KCu8EvZ%2B81gRj4GLXust%2BPnoqnzsR0Mjkfh7I86MIWXx8AGOqUB5fSm9qutvAnLjy%2BD5qRurm4sWyJGRy6gRFzxWjnZC5tsOh8gMlddfIp3veILH1JsOv%2FSEmiLtfpKH0jCyc6v%2BkQjOwyxBgNOc4f40081cF2cq55Iy7kSauliOL8dTrVCVJX0X0WgDiQjtc9AZTyJ9C5yYLLgRZQetq1qgI%2Ft9XCscb%2FiAbZa9HLDAqigz5te%2BAEY%2FHeCA5grz1A0WWBgXukQDlQ2&X-Amz-Signature=0d436757c2917283d7e47a17aa5d628e7b3091f1d947134df016695255416e21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHYIBI5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDVeTuBocTC66e%2F4YB6Ncx%2FwmQ%2FjX7rax19ntLNGEzwiwIhAOB9hXSfr8BFtdcxzkIYO4onGzfTDakZ1f%2BswoM5FU0mKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm1Ta07w7qcBzdW5kq3APXjFlgDkLwXTH4sqVHP7WgmJYzFEVyVtFnUL949PvgkIFLo43ozMrW2Whw7XyXqSR4nqRfgcJTnewt5mdDgjuNcKMkOnu2rJYvUhK2chsq5xqdxTAUNHM8fi7hK%2BzSpdYyRVROLO6hg%2FxA8UL0M4%2BjJLkM7tqvjEYXr4AVsV8CYLV5UH02UM2tDszXfc0m%2BUl05YBRUJ%2BWLhqD7uiAryxqw%2FgszTHnuudHtQhlveEAntGc%2F8fOr7ZITWE4k1%2BDUj%2BVPzrUd%2BJzeXXE3dLQW8AjzXTsxdCx%2FD%2Fq%2F3N7JFvcwRdUe4P8jU252RXONl5uVs%2Fpf%2FExZlV4vrgYSB0SuBdD4BWigJlpqYEWqC8E4fFLEsb8UD4voygvfQo2LWrHcQSLtP1Kglb%2FUyxt42l%2BDX2XaahkO0w9Sc%2BBmiphzE%2BuNvEmgvX9SzxeMccjRd8%2B1NST%2FouTtgU7OCeMxYMUQiPOM9Z77VAyoPw5nYOajvfjGFbz4UqiFLkExt9QFtpcVV08RAbxPjonmKAcS4tb2PDWtZduFzYDikKVeNudxOQrJgkBp8Uu%2BvS%2FCK9Zid7VsyBgJn6MWNbSNRk8ksq%2BoHxgf9Xc%2BN8VBIVa6mljACkULxG%2FyneHZ%2FMACymhpzCslsfABjqkAY4tQrs87xjWOJEr8l5X8Ly050nKBsBwWDWtzrZE8RtPCtadh2rzCR%2FPwpttIr20GWQrnO6DsUPuY4PxCVfmlXEICeq768P1ITeqYvArsJXLdS9A6XTQe1UtR9x4v6zUJAmXo8%2FLXm1bZ%2BH9%2BS5PqRb3%2BCGF5NC3T8eP8PMo3Hh2sUIre5tS5G83Y%2FgGj1GG5ccNZoPQf4zEMjI1%2B1GEg%2BuCIE%2Bw&X-Amz-Signature=7f26b42b392016e3040eef33b6a76fb86ad1980d6d3c49aa8c73ba89ed06ffde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTDIPZM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDbvKLsYUhfdT8ExFOeteKfdHWKvcgU799xtEBeRiB4zAIgEOK692H064p1%2BVMzL5vz903Rv9iwRv2e2HT%2FFhQynSgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7u2PXHXz2tTJ2TCrcA4nRY7PQtBfph%2B8Pvv0TzLhlA9p7LiO5LJjNrwNy7XeKS1rwNrjuVKsudB5Qc%2ByZKUyKSsMloT6WdS9H7CCfZ8Djx3IzLXBe%2BwhybtJBHfGRdwyq6Ub91rv%2BiI%2B89AXMI8PH9nqkS0C5%2BRUA4C7zTpHEY7YDzNWCNk0fxeaeEz5auKQtAS8BufK%2BKwXts%2FIX9yN3KxEBBk%2Bw310pVbZz78gc5Y1B4%2B%2FDvEzYrl4hfht0L2W7ar9orClLivf2qz86G6eX5akh94fni8Gu6uxDe%2FlwlZzGWJy44OwOCoC95ATrp7KxuDP%2BlSFdQ48XH0otzE2eEdxMHJHRDVjs6yeYb%2BCNaoUi11t00bVlzCE4R0iA10QHGKX0q8%2Fln%2FR2afhCyzUcFh1h12jWTiXp9BOFAZaCGSlL1mgPP6tMbZsOK9YYC55XXp2FIyDShDEmKih3h%2Fo46pdxTM2D4qYiLu7HGyQhjI2iW5%2BaX5mJk3bUg6i6T53t2CDtu3qOGEcqqdkOgWuYvyjr5nQgafvxJU3iWkYgziM8Ttgu%2F7GbclJ4W8pUFnU8GK1M3tgpjy6ewxp5xXkjpaUNFLh0m6VUyxmUQGOSyStCZmnLPv6MTXIbpbGO8E8RUFwUOvCQryjkMLGXx8AGOqUBdFa1QRdnB6s3jJPKRQb1m6szOhi%2B7Z8ri07abxk4yxgE%2BZ7vbi6pZ8itPvjJ2onkzg%2FyRESFBUlr%2FWLdpqS5OdDwm5Fkr%2FBbU60lxmE8GtP8SqVoERTcXncJ86M89CB6RYvCuAZw5vcfhDe%2BXMdLnJ7dEMWGtEag4lRaqLP2OdcuNrfIcefdTwQ0MyNhret6%2Ba20pt7OfR9r8tOgo7C2JD2MdOgQ&X-Amz-Signature=3341f88f17c2a4f9a7d3416c7f8530b0fdaea86615a41644bb0d05db2e794ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
