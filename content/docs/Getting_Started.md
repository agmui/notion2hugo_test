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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WKD2X7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBnvS%2BqT%2BgMro0d3sHsouDJfyFX9sWZXogBerw0APUrgIhAO3X%2FayDIidTmN14S%2BJZcDpNQUmER60icsARQ0d9ddXrKv8DCDQQABoMNjM3NDIzMTgzODA1Igyln3VmNaCfOeqNi2wq3APxFtmf7UNJNF9YXOA%2FURweccTxjpWFN%2F8HHkEZLfcj6tejXf4%2FvyuddnvLiNFbcoUVE6VDlbAoAQwKENIvqU%2FVGAy6O2usdnNqiVs0mGsjRvGoBmFt5mA0flP2geCzyHMJiNZoYnXAeVuBOcdal7UtQcPNyFVPEdo%2BT8laCvKOC2kBpR3c12YKDLshuc4OuxvHP4s1t6ikjdUGUqjF69ewiL9ZrUUVt7rb8L3VzXJlYnpI%2F1qsPSNVOCzaoB0t22xalnEk908sNlw5kImaJnEvw6BFjwTHCBtqg578I7QICzXkoTM58oHdQiCNfztEqVLXXaaYrj6XtfW%2FFG9jIinP3A9GqFySlQst8KTmAMlNd86NjMoFqLZz6SHVGF%2F6DkqFojtrrw53zGyw5nwDbGl%2B0WkSIlfp74aYa5vdhGamki4rDxoyDKY0jpnlOciEooHMXss3Uq33OLDM%2FZQ0FNUyaQ%2FD8kBvdxwU1iEstTjdOyhkT%2BqnZxuSCynLwoTC%2FEmZ3i8bIlh%2BTiB6iJl7qh%2Fnkj7mQRbiFqTAuiHIaNadFwmHigZrZU3pKY6QPQS2jZbSekHzWRhuIHeWRTPiR1RDBwu80bW0Qtc%2BPAsjdkcCZrK0sCRQiVR4ht3VBTCsxvPEBjqkAZMiJQGpwsWbaJV8bPVk1mJN1yxpmV%2FK7urIDXuVUxrKjzFeZqBq7BmoNFetdV8vD6f7OMH%2BDVyN5KdKwLE1CF7sLZwX7T6LazmH0wtxgi6R474kJLL%2BvPaCx%2FUDUhQuH4ZFcmY1XlK4wZKIUO8Ut9uLaBfrd9Dwy1B7rw8W7dOpKVUjYD2lJ%2BCN2etXQq4kgHZ%2BAZfXWszwgF4qPg%2FVOJlxP07j&X-Amz-Signature=e8cafa75c6756818de89b89fdb38f55d28343fd65e00558cfaf646b7a44d51a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WKD2X7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBnvS%2BqT%2BgMro0d3sHsouDJfyFX9sWZXogBerw0APUrgIhAO3X%2FayDIidTmN14S%2BJZcDpNQUmER60icsARQ0d9ddXrKv8DCDQQABoMNjM3NDIzMTgzODA1Igyln3VmNaCfOeqNi2wq3APxFtmf7UNJNF9YXOA%2FURweccTxjpWFN%2F8HHkEZLfcj6tejXf4%2FvyuddnvLiNFbcoUVE6VDlbAoAQwKENIvqU%2FVGAy6O2usdnNqiVs0mGsjRvGoBmFt5mA0flP2geCzyHMJiNZoYnXAeVuBOcdal7UtQcPNyFVPEdo%2BT8laCvKOC2kBpR3c12YKDLshuc4OuxvHP4s1t6ikjdUGUqjF69ewiL9ZrUUVt7rb8L3VzXJlYnpI%2F1qsPSNVOCzaoB0t22xalnEk908sNlw5kImaJnEvw6BFjwTHCBtqg578I7QICzXkoTM58oHdQiCNfztEqVLXXaaYrj6XtfW%2FFG9jIinP3A9GqFySlQst8KTmAMlNd86NjMoFqLZz6SHVGF%2F6DkqFojtrrw53zGyw5nwDbGl%2B0WkSIlfp74aYa5vdhGamki4rDxoyDKY0jpnlOciEooHMXss3Uq33OLDM%2FZQ0FNUyaQ%2FD8kBvdxwU1iEstTjdOyhkT%2BqnZxuSCynLwoTC%2FEmZ3i8bIlh%2BTiB6iJl7qh%2Fnkj7mQRbiFqTAuiHIaNadFwmHigZrZU3pKY6QPQS2jZbSekHzWRhuIHeWRTPiR1RDBwu80bW0Qtc%2BPAsjdkcCZrK0sCRQiVR4ht3VBTCsxvPEBjqkAZMiJQGpwsWbaJV8bPVk1mJN1yxpmV%2FK7urIDXuVUxrKjzFeZqBq7BmoNFetdV8vD6f7OMH%2BDVyN5KdKwLE1CF7sLZwX7T6LazmH0wtxgi6R474kJLL%2BvPaCx%2FUDUhQuH4ZFcmY1XlK4wZKIUO8Ut9uLaBfrd9Dwy1B7rw8W7dOpKVUjYD2lJ%2BCN2etXQq4kgHZ%2BAZfXWszwgF4qPg%2FVOJlxP07j&X-Amz-Signature=682e36e318e7e52b3b63970867963f50eca20d46e48e44f3482c9f948d5fed0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WKD2X7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBnvS%2BqT%2BgMro0d3sHsouDJfyFX9sWZXogBerw0APUrgIhAO3X%2FayDIidTmN14S%2BJZcDpNQUmER60icsARQ0d9ddXrKv8DCDQQABoMNjM3NDIzMTgzODA1Igyln3VmNaCfOeqNi2wq3APxFtmf7UNJNF9YXOA%2FURweccTxjpWFN%2F8HHkEZLfcj6tejXf4%2FvyuddnvLiNFbcoUVE6VDlbAoAQwKENIvqU%2FVGAy6O2usdnNqiVs0mGsjRvGoBmFt5mA0flP2geCzyHMJiNZoYnXAeVuBOcdal7UtQcPNyFVPEdo%2BT8laCvKOC2kBpR3c12YKDLshuc4OuxvHP4s1t6ikjdUGUqjF69ewiL9ZrUUVt7rb8L3VzXJlYnpI%2F1qsPSNVOCzaoB0t22xalnEk908sNlw5kImaJnEvw6BFjwTHCBtqg578I7QICzXkoTM58oHdQiCNfztEqVLXXaaYrj6XtfW%2FFG9jIinP3A9GqFySlQst8KTmAMlNd86NjMoFqLZz6SHVGF%2F6DkqFojtrrw53zGyw5nwDbGl%2B0WkSIlfp74aYa5vdhGamki4rDxoyDKY0jpnlOciEooHMXss3Uq33OLDM%2FZQ0FNUyaQ%2FD8kBvdxwU1iEstTjdOyhkT%2BqnZxuSCynLwoTC%2FEmZ3i8bIlh%2BTiB6iJl7qh%2Fnkj7mQRbiFqTAuiHIaNadFwmHigZrZU3pKY6QPQS2jZbSekHzWRhuIHeWRTPiR1RDBwu80bW0Qtc%2BPAsjdkcCZrK0sCRQiVR4ht3VBTCsxvPEBjqkAZMiJQGpwsWbaJV8bPVk1mJN1yxpmV%2FK7urIDXuVUxrKjzFeZqBq7BmoNFetdV8vD6f7OMH%2BDVyN5KdKwLE1CF7sLZwX7T6LazmH0wtxgi6R474kJLL%2BvPaCx%2FUDUhQuH4ZFcmY1XlK4wZKIUO8Ut9uLaBfrd9Dwy1B7rw8W7dOpKVUjYD2lJ%2BCN2etXQq4kgHZ%2BAZfXWszwgF4qPg%2FVOJlxP07j&X-Amz-Signature=0e1a7c6d02c7f32b49bfe4e46a9123435cdc9f2818e842036757607d580a4918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLPHRUH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQjrqL2gimCOOXWsixv3MDiLYM09z2wq9Zfbxe72%2FqvAiEAw4EjC85rjAkuwdW3iNuAn8yBlymDO3TjMndtg6MacMUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMuTXlZLzs3xROWlWircA9vxAu3OGtOGOYnG0PvSEckyS%2B%2Fgl6q6QGj8DIKIPhk7Bjrtk2KsZyopL47jyoLxwpn0imjUhOLWoxr50VBHt%2B44mN%2BBGSAxhGyFY5YWGN44Y04S5h%2BB5zKXktl3qnSnNfSuwjTNQFFp5YcT6TjKyuQb7pPw0JHLY5mv%2Fqh%2F%2F4TWvG5quScO%2BXpUqxkWDXHzdyZGifDxfs060MoYL3MnwFOxsMxRj7%2Fj5yp5JaQAFgb2AGMqlZL5iavLdgfay5BkwzZMttGv7oBSPR08piIG5DoK7su2uVpNMTbAbSlFIAszFJmBG1hLtOeRhSPdosHVKSOuaWnO1useupO0xfcneqmpMl%2BjSVx%2B3dDvkoGWcWFxGLfDDIStkmsuovzxViFZ%2B4%2FntsCM7ljzVAOYmBtyS7QI065N5oOBlm2VtSvXxlQVUn8MCHqA71W4%2Bo0FXQGhZg4g%2FjCFXyjqG5n%2BuzkQOEQA9te9t0rTPHNrDmuXqMTzSBBIPxh2oG5cR0T%2BQNIGACulpZvpOFXGX9U3v6xuDExTH%2FaUIgjwGljB%2FlJ7snqNSoVrx6IrmygEA6cQ3lXAGiwpE2aQBJJWUILuQxvMOWOGKDFeQZNXJsAM6q4tEWwrl94T8J3YmKRXMLGnMMfG88QGOqUBhLdgu0pKtzMx4BwJ9sb7FHX%2FfViZkFnxQ0W5ikhgG6Um2m3xctZvHDszSD%2BJ1Fo8j0BntXUxPACUTVk1L%2F%2F2XNTpCnySiL1VJSCxcuZ3x9qGYOC0maTOPFWHWWa803BeAzdTmzv1kBCLvXhTUVCJZmHRzeN%2Fc06muFVW5mplutVtXEnwh5nMbZnRrecMs%2BlBAirgFFeJVwuTd9x3sfnzDg8dfDUo&X-Amz-Signature=b1fa5e4cabcdf98e3fe2bf2e53093da0064facfc0c4a40e3960114b6c93af86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF2356CO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2FlSOkquOvV1bknvf3MfZnyjKnv%2BCMPDZMnLF24c0DAiEAhwCleBf9dIJl39c6afeKVNf39NOg5Ua920o2Y7vjCTwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF54l3hK7ilyfS0rxCrcA460FFuG%2Bj75zw3t%2Fmzzv75YAFrCjMkqXL4AZaRqiaAJ817pqNOZ2vRvYOlCCrtLF1i%2BRX33W8j3bMKMmPk%2BvQm063i5%2F89eYPd5sYgt87hePOh7Yiwac3F%2FqJLhgpcV0mu8gH%2FR0xdBOUsKGAAOgynuk8lYfmJcXbMBdvjdBjphSkJx7UeXnDbSrW6NkKzZxqa16YXjCQERim4OCA5IVeaGKp5etta%2BoRj7ZIdFZooTP7K6vI%2BgN53fwxl8zPOIK9UdsQUN0rLSMr3LpP4y%2B9gZinDZh1AjtlwFlpGveLnSuxz9mYVH87QJLdL1oRVR7jfnUufhK1X%2Ba4ViAQxVWX35yzNJwp%2BWcbKcxzq7lvrIVx09GrpI8YiXwxMEveXgvXedz7BehWqaryCSn2%2FkN9J%2B0fwIjqEHUaIbgyVz1d2nUalcR2Ch3R5Vm2i%2BaXYISICrjYUK6Bqa8TYtdhFxxtEo3XUrP8uGchl2kAO2bFEFpvfVRlhXZRLAx%2BLpIoKXa0cd8bAhr%2BqWWguG2V2zTpEmCcsuhAvpxo%2F1ajIPNF3nYeih3KNfPsj1rmwkWcbyY4ZHjeFjcR3EOGM7UGVKE8KCxtGVTduKWV%2BKyCG09Bj%2BnDpmuJhVblae4YRyMKHG88QGOqUBxT3CNJbmhKMOFz5PF7oxZgHSDDsfCajLrN%2FA84473RUsRaT0TvF4XmAKipS6aSK5ufm5gaW8t0874nSAukCyTIWRNtaAmbR9z4J8Y2bUypVcf5fPgIOTjAoj9mBBviLiABpftP%2BbXtJC1Sj%2FlIYKmu1HaBxp1lc127DkoishmWK2NGpesWune8%2FgQWP%2Brjc2vC1H1WDjyvmFDqsZbchmA%2Fvjuu0q&X-Amz-Signature=7fa1eb7af4a90f03df464ef59ae46427b458ebbe4f63e1eba7c4fcae1c616dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WKD2X7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBnvS%2BqT%2BgMro0d3sHsouDJfyFX9sWZXogBerw0APUrgIhAO3X%2FayDIidTmN14S%2BJZcDpNQUmER60icsARQ0d9ddXrKv8DCDQQABoMNjM3NDIzMTgzODA1Igyln3VmNaCfOeqNi2wq3APxFtmf7UNJNF9YXOA%2FURweccTxjpWFN%2F8HHkEZLfcj6tejXf4%2FvyuddnvLiNFbcoUVE6VDlbAoAQwKENIvqU%2FVGAy6O2usdnNqiVs0mGsjRvGoBmFt5mA0flP2geCzyHMJiNZoYnXAeVuBOcdal7UtQcPNyFVPEdo%2BT8laCvKOC2kBpR3c12YKDLshuc4OuxvHP4s1t6ikjdUGUqjF69ewiL9ZrUUVt7rb8L3VzXJlYnpI%2F1qsPSNVOCzaoB0t22xalnEk908sNlw5kImaJnEvw6BFjwTHCBtqg578I7QICzXkoTM58oHdQiCNfztEqVLXXaaYrj6XtfW%2FFG9jIinP3A9GqFySlQst8KTmAMlNd86NjMoFqLZz6SHVGF%2F6DkqFojtrrw53zGyw5nwDbGl%2B0WkSIlfp74aYa5vdhGamki4rDxoyDKY0jpnlOciEooHMXss3Uq33OLDM%2FZQ0FNUyaQ%2FD8kBvdxwU1iEstTjdOyhkT%2BqnZxuSCynLwoTC%2FEmZ3i8bIlh%2BTiB6iJl7qh%2Fnkj7mQRbiFqTAuiHIaNadFwmHigZrZU3pKY6QPQS2jZbSekHzWRhuIHeWRTPiR1RDBwu80bW0Qtc%2BPAsjdkcCZrK0sCRQiVR4ht3VBTCsxvPEBjqkAZMiJQGpwsWbaJV8bPVk1mJN1yxpmV%2FK7urIDXuVUxrKjzFeZqBq7BmoNFetdV8vD6f7OMH%2BDVyN5KdKwLE1CF7sLZwX7T6LazmH0wtxgi6R474kJLL%2BvPaCx%2FUDUhQuH4ZFcmY1XlK4wZKIUO8Ut9uLaBfrd9Dwy1B7rw8W7dOpKVUjYD2lJ%2BCN2etXQq4kgHZ%2BAZfXWszwgF4qPg%2FVOJlxP07j&X-Amz-Signature=f1c108e6c2125999c44c240b5a11cce5e021ad24d6de1a90e28583d49242d439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
