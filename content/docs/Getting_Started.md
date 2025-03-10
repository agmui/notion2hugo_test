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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMA3YYI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCpieGL8kXLsHzRUcEsPt3kAHYH0DFpPRrTBlUCxSYzWgIhANi78KGEjtSnOR%2BeKt7IPy2721%2BJSThJnlYil64DfTALKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMngvWmVNJ6SF5lBYq3APrQwn1RfeGj2pynPdR2x5HbI5W5qFXGDJjxI5I5HcvFX0BEwJmYGB23wnAaL8VlKUpoyN%2Fv%2BNdgn1fF%2FOMACq3HNnnwknqsB3UlNh8%2BOZ86SKoHELDw08wk0lieC8DXP%2BoTkgvXjoR59f0iY8cUyF3KG%2BcpiRZfxK9%2B%2BoLM9ara4xfhAUqfN8zt1pUhnJNCHMkC%2FyS20BPbM29dVGt9iv4B4Baf7zgDwoffRV41IbI6ZwRUxPi5n5U6ZRu7GsLxpstkxAJtOEjnHX6%2B0LLxxfhsctxELr1LXp3s%2FWcxKVDKaqKBizkfqgMgzIbu2Y7uIxSfxDmQUsmmWyftXXDa8VaiXHo%2FX9NdkmahG7wJP73O2jsrttKtuYHO%2BzI3sAGMkBtXQNoouSJOMty31BkLw41ydHB6EC50Gu4cEk1QcWA3cMIx1Tcuh%2FeaGXwo9GwoBT7L8WGOHCfsn9NKs2H5SV0ii7SnyfWXJhzrqlrgLtmtDvDyFFCK3%2FcQbQLWBg6JBGITiQ9QwhQV0esrSAbZOgJwq7HDcB%2FiZA%2Bj%2B3YO7a%2Bn8kbt%2BLuT5wVv9CvWaker4hd4eLIv4D1lR5Law2%2Fz2F6ScivQqbw0RTLfC4kuQviuPW7%2F14ku7SP3W7%2FnDCRi72%2BBjqkAV4fUtve%2ByPyDPtDv1d5Ml%2BE00Gh1yb1EejPb%2Ft%2Ftdmh71LD2E2v5B9LWuEvDIeJDmD%2FqqpZxwHC2i9S3LafB%2B6bYRp2oG0BmTObiMvyiawuX9Sb8phmAb1eaREOOuoMgha%2Fv8LtXlL2dIPgazZyrCcLOpRaX6UsSVIZgcR9GC1MJzCTs0G2lOhB6jx%2FJKnA4FDq%2FvuYmbuKrBcybO6JnWm5loFV&X-Amz-Signature=6196acfe8c0b6d6c99e4f751b462e05ecaa8973406004ca283c935029d1d4ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMA3YYI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCpieGL8kXLsHzRUcEsPt3kAHYH0DFpPRrTBlUCxSYzWgIhANi78KGEjtSnOR%2BeKt7IPy2721%2BJSThJnlYil64DfTALKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMngvWmVNJ6SF5lBYq3APrQwn1RfeGj2pynPdR2x5HbI5W5qFXGDJjxI5I5HcvFX0BEwJmYGB23wnAaL8VlKUpoyN%2Fv%2BNdgn1fF%2FOMACq3HNnnwknqsB3UlNh8%2BOZ86SKoHELDw08wk0lieC8DXP%2BoTkgvXjoR59f0iY8cUyF3KG%2BcpiRZfxK9%2B%2BoLM9ara4xfhAUqfN8zt1pUhnJNCHMkC%2FyS20BPbM29dVGt9iv4B4Baf7zgDwoffRV41IbI6ZwRUxPi5n5U6ZRu7GsLxpstkxAJtOEjnHX6%2B0LLxxfhsctxELr1LXp3s%2FWcxKVDKaqKBizkfqgMgzIbu2Y7uIxSfxDmQUsmmWyftXXDa8VaiXHo%2FX9NdkmahG7wJP73O2jsrttKtuYHO%2BzI3sAGMkBtXQNoouSJOMty31BkLw41ydHB6EC50Gu4cEk1QcWA3cMIx1Tcuh%2FeaGXwo9GwoBT7L8WGOHCfsn9NKs2H5SV0ii7SnyfWXJhzrqlrgLtmtDvDyFFCK3%2FcQbQLWBg6JBGITiQ9QwhQV0esrSAbZOgJwq7HDcB%2FiZA%2Bj%2B3YO7a%2Bn8kbt%2BLuT5wVv9CvWaker4hd4eLIv4D1lR5Law2%2Fz2F6ScivQqbw0RTLfC4kuQviuPW7%2F14ku7SP3W7%2FnDCRi72%2BBjqkAV4fUtve%2ByPyDPtDv1d5Ml%2BE00Gh1yb1EejPb%2Ft%2Ftdmh71LD2E2v5B9LWuEvDIeJDmD%2FqqpZxwHC2i9S3LafB%2B6bYRp2oG0BmTObiMvyiawuX9Sb8phmAb1eaREOOuoMgha%2Fv8LtXlL2dIPgazZyrCcLOpRaX6UsSVIZgcR9GC1MJzCTs0G2lOhB6jx%2FJKnA4FDq%2FvuYmbuKrBcybO6JnWm5loFV&X-Amz-Signature=c4a2def349d225cc1b96c37def3892acfca98f7c0539b6e1f3d1750355469378&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHIDCPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHWWzdqHsLyc0IO%2F0bjnjs26rNerQ9d%2BUF0A7RVU4YtLAiBIEd5bEizR%2FXdEUdGsdg%2FaeBU2wkelAdIPXzwCxnxRlSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYF1z4FBwFCtBFd5gKtwDta7C%2B%2FKuUSoE6Ft95TTdbswHDxXY6VVCYCm4BWpeQdCm8Vcp2dugHqF1UIta2wX%2F1NWea75AfVWUYOGk8JUpFIf43srfqSYHVPHHtPS9EC9XS1pdAGngV8TBPpd58Zdv%2BDCTItCpfhBpwUKY6GjduXKVaKiOeHoM4YGSQu5eFG%2FKuAyNGWBLznEa2f1GNmsbrzUY5vklH%2Fyhe6rjDtM1oRTO99PKClINn7M6WaPChFIHHOoMhx0aTMcvBTJQSE%2FfwVzqyY%2Fz%2Ff9BIbM0NHivuasblhctxNc6LCBOk%2BRptwZkY8O5YmnG7Ma6DPyUilIqr1ppt07DkxdFGdb2TolAJYIJH%2B6blCy3nuY%2BKw8nU5RJc0MLBianaiGbkOjxnj4q3lAXx4gxMPET9S3JXLft3YWsSIqxdNAhsYcT6QQEz2j5%2Fl5SoAQ9S8bWmQPCscc0PoWsV5f4sw1KskQmjD2wOJz6yKCaaBbFZkAhPhi8lsF0KQGQCPpHYgybGNeeOo%2Fno0tl0CaAcsMlhN02JQ3KBQauxTdKsHgja0qny%2BsWYqh7T%2ByUBxDt6rfcTbzEmkVv8fO33g3RV1hE%2B37tmKzs%2BJWqnLJLy1Ftq%2F8Pgs02qeH1AchdsbDjU%2BxOkj0wvou9vgY6pgFuFqPfB245fwNlb3QG9y4mTEgO5ptPqt%2FYUvRJQeCZN%2FXiMi8snnswEgZVg2QFPItBX5KF1oJdROTqwLEvA%2Be20ambrCYsS2x2cnyLCjeAUj0gqZU7MXZdhr1wWOqlJD9UtAKe4Du2rTLLyDlIDbhFP10ljejpDJKshTckE4tCBTQGaKkYExDblI9%2BM1HDC2uBWZIW5gVh69UDqIevuV8Zb2DuXvEs&X-Amz-Signature=5d16267815c36dac333fb67241220a5ae43c1d82d556c700f4a84756eb3aa8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGVKRGV3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDSkBoMzBg8l%2FUTOz8SMhyBkUS2%2Fzb79w5y7Brr1RQ03gIhAIFVQ3hrIkjMyNx3Wx1RjgRYk6SvgmkfYWDte1%2B7Wg7%2BKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJiu18YcShp9Ko7xEq3AM6I%2FctXS0iw1FaS0gqaq5ibM%2FxFVVCqclcb8OZ3jp6YUf6X%2BPe5urINNqCRYviyqWizzv6nIPxkqKtE9cRVgfncDdbm2yydn0tYD1CGYaDBcxSUNhZ8TiwogDHkaDOg6Cy33Gs2VpIOcVAfoaYQI3Ae1%2Bn18otZmHm%2FkiNSuI5wA8zzyejOrK5cD%2FQmfp86lHunKx4orwhHuh%2F1H9ENkBUots7lGVlahC9KZ2DODDazx4sjkbS4ed9gR0fJM9veR3rW0KKHS3ZHyIpwm1BA9sriwiDap4ELvyO9aAJQsS2Zm%2F9DxZctHe580BpeiKmRgYpsRZ8t4l9NiVqQLCt%2FNesCMmO4pvRJ4lnauoboCKkAKAmvlyHnJyQj5fPTs1P7rCufrzQocGiH0VxGxun56O0ZfMX8fqGEcY0xXJEmJm17mCEjkAdix6ZM5SAAPwG6ecuooXjEiWNYq802QFgG3fO%2Fp%2FbH76LFhch4o%2Frgn0s1E%2BF73HbKTmpDFwxk0kAHJoCW5PvoKvFVnR4DILKbjchVaiXDFKvjmt%2FxPoC40q%2F8BPokh1sH9WpV4rJziSvk%2BnfOojFcUPPBYulyLGqqRyD6786T0j5ie7Ybx7%2BpU24miTNljV9Khr8p%2BNwyzDqi72%2BBjqkAcnonPS1tyAgWBTIAHN6lDYN3x0AlBaTKHVyKbLxlCrx4x%2FoiC4IBdHpcrmm%2F%2BxLBDX0OV%2BTXFQ0SgQxbYoxTPTtrsdwoypagHnq%2BlHoM2tvOKhDghJ80oh5d%2FfNvNdT7NL0nYxiTgk2QBRcFbfnqR7fiflhDK2d5Z1CsXBWZGdZ4%2F4PGdVjPzBmRkwiME9KRw5t59Na27ZXYrRhhN5fyhoGk2uw&X-Amz-Signature=0d69b0797bd1238368d4a21f2ac50a90aba33e5786304043a5c9992d518c6041&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMA3YYI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCpieGL8kXLsHzRUcEsPt3kAHYH0DFpPRrTBlUCxSYzWgIhANi78KGEjtSnOR%2BeKt7IPy2721%2BJSThJnlYil64DfTALKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMngvWmVNJ6SF5lBYq3APrQwn1RfeGj2pynPdR2x5HbI5W5qFXGDJjxI5I5HcvFX0BEwJmYGB23wnAaL8VlKUpoyN%2Fv%2BNdgn1fF%2FOMACq3HNnnwknqsB3UlNh8%2BOZ86SKoHELDw08wk0lieC8DXP%2BoTkgvXjoR59f0iY8cUyF3KG%2BcpiRZfxK9%2B%2BoLM9ara4xfhAUqfN8zt1pUhnJNCHMkC%2FyS20BPbM29dVGt9iv4B4Baf7zgDwoffRV41IbI6ZwRUxPi5n5U6ZRu7GsLxpstkxAJtOEjnHX6%2B0LLxxfhsctxELr1LXp3s%2FWcxKVDKaqKBizkfqgMgzIbu2Y7uIxSfxDmQUsmmWyftXXDa8VaiXHo%2FX9NdkmahG7wJP73O2jsrttKtuYHO%2BzI3sAGMkBtXQNoouSJOMty31BkLw41ydHB6EC50Gu4cEk1QcWA3cMIx1Tcuh%2FeaGXwo9GwoBT7L8WGOHCfsn9NKs2H5SV0ii7SnyfWXJhzrqlrgLtmtDvDyFFCK3%2FcQbQLWBg6JBGITiQ9QwhQV0esrSAbZOgJwq7HDcB%2FiZA%2Bj%2B3YO7a%2Bn8kbt%2BLuT5wVv9CvWaker4hd4eLIv4D1lR5Law2%2Fz2F6ScivQqbw0RTLfC4kuQviuPW7%2F14ku7SP3W7%2FnDCRi72%2BBjqkAV4fUtve%2ByPyDPtDv1d5Ml%2BE00Gh1yb1EejPb%2Ft%2Ftdmh71LD2E2v5B9LWuEvDIeJDmD%2FqqpZxwHC2i9S3LafB%2B6bYRp2oG0BmTObiMvyiawuX9Sb8phmAb1eaREOOuoMgha%2Fv8LtXlL2dIPgazZyrCcLOpRaX6UsSVIZgcR9GC1MJzCTs0G2lOhB6jx%2FJKnA4FDq%2FvuYmbuKrBcybO6JnWm5loFV&X-Amz-Signature=e1effecea6ecd1b402925849e243fd9b74943b943b47dc6e8f16be659a2427ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
