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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7CGASW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGnJb6EEf%2BkCxJSuFQDFDkMPcG27%2BClP%2F8pe1Fegit8IAiEAiBetjOI7HHoemVy4r5gjxXMjsUtHmMJoicSaktc4tcsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqATPNNZ4WLfy0DyyrcA7FTkkb5YKatAvtu223cL%2B4hD%2BgR35XTURPmxBFvw%2FdAEi8LMeU2hk3BzsgxxoAgYgqw6wQIGaVcP19utQ6FcCTL%2BZgWc6sH5HfYehFsTQQiXr9L4UQkiXSBSGDIec510W4s%2FiAaNg9q%2B3p0AVYpwcc19ALajccHMfyb3Z9HAgvWc%2FusaaTbwW3JLpzncjME3QRvfpWRCrk%2FB6UF9Ng336FXu5whdkouOdDwIvvjzUHBtRPtTsKUMTBx1RooQQ9AjmQsMdnCS2WV34huJKHrBpGOg4mm4eBZc8DGr3OzqYZzjGMjBAIIeLdVoPep7Au%2FVYLWj8y3q1xL1XR1F5%2F%2FJLYzIrevvoYxXdU1AqXqd9JgNcqa6T%2FJO%2BB%2BksNAT9qxSeYW70d0HGF2eNHhFYkRquz8ZBFznKAUGtTr9lBALFQyPA%2F6REaBPEHsbZRixS7zBT6zF%2BGwzMMqpCwvL88YbtH0d2J3AGgzpNv80FwU3vbiM1Kw8m0q8iSH7wtYdapeDOQTt1Jaon3SwE3N2jEVBYmPnohAXmvhCzdoCX%2BcCI5Gg54x3L7VWeM2WtoXrwyF4Z8EH3nJNlY%2BM8J1W8AXJZEzynJ9st3rP1cygTRrxCWGBxkwM6rYD5N7agTeMOyx478GOqUBsoJv%2BoN13ZFFYtcaGMEJKLkCj4Cj71d0tI3V2Y6Flbs%2BnNeHhUX78IFqsIEznNwZhEosX5J%2FKaMYIQR4RPp4uTg1vJfvXjpJr%2BIeoUDk1A%2FGh89fTx41iQt77q4Pc%2Bs6LFpawmRODlfFCw4%2BLSkTR%2BkDqbk8yYudspGMFFAE%2FAt0vlkD84t2QFUfWgMjNG7abrrtUJ5cY0FlPiDE0gI1eOcBK0bQ&X-Amz-Signature=5a583bc7af6eaaa71162f028c6cd3c7c292fb2507cc51fe650a7488fd057f0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7CGASW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGnJb6EEf%2BkCxJSuFQDFDkMPcG27%2BClP%2F8pe1Fegit8IAiEAiBetjOI7HHoemVy4r5gjxXMjsUtHmMJoicSaktc4tcsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqATPNNZ4WLfy0DyyrcA7FTkkb5YKatAvtu223cL%2B4hD%2BgR35XTURPmxBFvw%2FdAEi8LMeU2hk3BzsgxxoAgYgqw6wQIGaVcP19utQ6FcCTL%2BZgWc6sH5HfYehFsTQQiXr9L4UQkiXSBSGDIec510W4s%2FiAaNg9q%2B3p0AVYpwcc19ALajccHMfyb3Z9HAgvWc%2FusaaTbwW3JLpzncjME3QRvfpWRCrk%2FB6UF9Ng336FXu5whdkouOdDwIvvjzUHBtRPtTsKUMTBx1RooQQ9AjmQsMdnCS2WV34huJKHrBpGOg4mm4eBZc8DGr3OzqYZzjGMjBAIIeLdVoPep7Au%2FVYLWj8y3q1xL1XR1F5%2F%2FJLYzIrevvoYxXdU1AqXqd9JgNcqa6T%2FJO%2BB%2BksNAT9qxSeYW70d0HGF2eNHhFYkRquz8ZBFznKAUGtTr9lBALFQyPA%2F6REaBPEHsbZRixS7zBT6zF%2BGwzMMqpCwvL88YbtH0d2J3AGgzpNv80FwU3vbiM1Kw8m0q8iSH7wtYdapeDOQTt1Jaon3SwE3N2jEVBYmPnohAXmvhCzdoCX%2BcCI5Gg54x3L7VWeM2WtoXrwyF4Z8EH3nJNlY%2BM8J1W8AXJZEzynJ9st3rP1cygTRrxCWGBxkwM6rYD5N7agTeMOyx478GOqUBsoJv%2BoN13ZFFYtcaGMEJKLkCj4Cj71d0tI3V2Y6Flbs%2BnNeHhUX78IFqsIEznNwZhEosX5J%2FKaMYIQR4RPp4uTg1vJfvXjpJr%2BIeoUDk1A%2FGh89fTx41iQt77q4Pc%2Bs6LFpawmRODlfFCw4%2BLSkTR%2BkDqbk8yYudspGMFFAE%2FAt0vlkD84t2QFUfWgMjNG7abrrtUJ5cY0FlPiDE0gI1eOcBK0bQ&X-Amz-Signature=60b114396b75abdca5e32a60079da5a28a0a15ba208ebe6dcafc47cd844a65db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6GHVN4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDk3rCUEQk9H0h6319tFcrFGdRNIDWI9GnKGdUhOCZHeAIgPK8UsEawpyCUasUJy%2FCyRYwW9UR5uFvsL2sHHUllQbIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0GwZpGDj7MLXDTrSrcA9ZxJBK1HAbQ%2F5rJ0%2B3jpuTnHbZQfNaH5l8YZzFl3DgL03jGSMAmtazYLWhtF7k%2BVnvFKv8fUp87lDMytaU2Odb57LPSqtZ4CBqBG6C%2FUwfHayVWBame4qex6oW6xv6nm5UPXV4Y5aHnVLG0WJv6wIt%2FcwsZICdLo7aa%2BKZWbcLJfTZHsPfLi2OXZoq%2B97krguFRQkdiD%2BqFQkVeb%2BwvFrHL6CmUZr0v6gd9BkupwPgF69M3h4mIPVJDR1gafHaPcZbpp3x%2FepbI50akKvGwlk2Qy5i6V0GfWVvnapiO3dbJ%2F%2FIZmeOleh3YVXlyG1v3%2FvWx9hbhWa5xONDoo5OxmELG7qJN6L8t%2FTfjBgWU8MoYz7AggA2X5hmUJhiU7Tv4R9YQVJAYnYE%2FtS6L%2BR23KsWeC7aNG8jgwsSgnXa2VRhg6uB9gHWk83Js%2B7sBddBUqwDzSONh3L9kPaunNQWRKgHuRKMoc%2Fety5S3HiEFc7im5f9tRg8ymqKaoxgbiKj03K6PqGkHWqBmEarONipBkwqDPJaR3cQd08H60wTNUKosDiYSt8i%2FuXT8rqh4hmUHlwsaBsKHCjM6RE7ArIgS64qfhNpklg23aGeb0SHsOIx68gLyvMt9TlBZGwJ%2FMLay478GOqUB6d8H1caOjCntN8Xm3fX2wjCRKzRa5gV3fEQboQUzyAOBcydNBIe%2FAelFTs8kljSpEdKwovY77hjGlyiOxy6QrLsa%2Bdhd060WiYZXBIGpj3iYw3wOQFghnbRPiqa9x5Q0VcmYXZWtVgFyXp%2BkUTQBDg7I4qV83acT0yCXZ7D9oD2TpygHMSKtWem4vbXVQDnVab7tv%2BkyORFS58cRdbwgo2t3HxOb&X-Amz-Signature=238de5d42df5e8927f618986a8233a420eeaad1de7857d568bfb69ed142d6152&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWPKXE6P%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJFMEMCH3LyVKnIb6Dc57GUDq5JlE7Emj984fZs3gnAyCbIAL4CIFU9jOH7JN0guANfDiMEM9ae8McWjRLOd9xZqHEpn%2F7gKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUi8ZzGYDRNGqIeeIq3AN8%2B6uxyYgkMzAsy24rzBalsdUDszMtZHv5MtwW5zi3d2rQZC9Gxb5CERGAAN42vpDwj%2F99Bmdk2qS2%2FbQbo5qwS2byR4%2BfWPYBmip%2F0vO2%2BknYxo9sMx2BHa3ojDjDgfdJGMjHdsxQcNsHBeEx%2FbMFVeKfXWse%2ByTjOObHcMrk8XqJLsqv80UmiFMZAJT6NvtHnJa2Ubur0W5q9YOEEcgdeFrjllywPusJ0YoOIWO0f5At0BVyGqZgPvjDfAU9YyuG26evKD4PdH3SMKVil40oLKTBmLKelEUpoCdwHplCYDDxrnoCkayASn6xedGy9xU%2B%2Bc927tmQS4hQuc79Umdt01mJUhCcLit6Vf4aEt%2FvU%2FuUEbvIYmpbUMqQx8rKloTZxBQuOrkdd3cSG%2B%2FQHLHGrKvyv8Uf6OGuMfJ%2FNzGdlxHxghxQgkCzmARU%2FWsauI42YWEqT%2B%2FHJ4n8laDEwUUeO3A2ipyAcLiYyXG5uXbHcLNiKReHxwPBYLfZT%2F69lZ8TlpAOncd%2Bv5kjbggHcJT5DNgtw3oWot7y66CjIH8vuqkgNW0629CSFRO5oludGZWORW2mYJCtDPi9CZ2Qlat6YSgRKcv%2BfQ6yibZhKyJHL447QJbEpxpeIOtqYTDcseO%2FBjqnARQAoogDZQ%2Buc3XHUMsc8xSlThQckpUEtf%2BTSKhb0yn3FPh0ufRaBttwEXZlFMGMicqmbTTbICAvsEq04NEoKrxB7OIvzQAoYl7GCTK8%2Fs0MEhEqRWsir5StojV68LH7ZpALxeGKz8ypMvQunmayxzFjbVYPI%2FarbH2RPaEFHtMRa7JVox4wVDSr8Y5FX0w%2BpDpuVb45ShKFP%2B0hqY%2FhUiA2LnsMFx8B&X-Amz-Signature=7bfebc42d7019d08613168f202ff1e69c04d1e9fc5a9c27a552d01956944b67b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7CGASW%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGnJb6EEf%2BkCxJSuFQDFDkMPcG27%2BClP%2F8pe1Fegit8IAiEAiBetjOI7HHoemVy4r5gjxXMjsUtHmMJoicSaktc4tcsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqATPNNZ4WLfy0DyyrcA7FTkkb5YKatAvtu223cL%2B4hD%2BgR35XTURPmxBFvw%2FdAEi8LMeU2hk3BzsgxxoAgYgqw6wQIGaVcP19utQ6FcCTL%2BZgWc6sH5HfYehFsTQQiXr9L4UQkiXSBSGDIec510W4s%2FiAaNg9q%2B3p0AVYpwcc19ALajccHMfyb3Z9HAgvWc%2FusaaTbwW3JLpzncjME3QRvfpWRCrk%2FB6UF9Ng336FXu5whdkouOdDwIvvjzUHBtRPtTsKUMTBx1RooQQ9AjmQsMdnCS2WV34huJKHrBpGOg4mm4eBZc8DGr3OzqYZzjGMjBAIIeLdVoPep7Au%2FVYLWj8y3q1xL1XR1F5%2F%2FJLYzIrevvoYxXdU1AqXqd9JgNcqa6T%2FJO%2BB%2BksNAT9qxSeYW70d0HGF2eNHhFYkRquz8ZBFznKAUGtTr9lBALFQyPA%2F6REaBPEHsbZRixS7zBT6zF%2BGwzMMqpCwvL88YbtH0d2J3AGgzpNv80FwU3vbiM1Kw8m0q8iSH7wtYdapeDOQTt1Jaon3SwE3N2jEVBYmPnohAXmvhCzdoCX%2BcCI5Gg54x3L7VWeM2WtoXrwyF4Z8EH3nJNlY%2BM8J1W8AXJZEzynJ9st3rP1cygTRrxCWGBxkwM6rYD5N7agTeMOyx478GOqUBsoJv%2BoN13ZFFYtcaGMEJKLkCj4Cj71d0tI3V2Y6Flbs%2BnNeHhUX78IFqsIEznNwZhEosX5J%2FKaMYIQR4RPp4uTg1vJfvXjpJr%2BIeoUDk1A%2FGh89fTx41iQt77q4Pc%2Bs6LFpawmRODlfFCw4%2BLSkTR%2BkDqbk8yYudspGMFFAE%2FAt0vlkD84t2QFUfWgMjNG7abrrtUJ5cY0FlPiDE0gI1eOcBK0bQ&X-Amz-Signature=230ce6e9e50d08db11027e2bf4531b11b0ccd3adc9d153425a8b82e2d95c2383&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
