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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47NDOF2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBndLxDtTYhDIS2%2BdKZzgSFEhqkxbbe7OPnvI%2BUPeCxOAiB4Rb3Ch11lrjXwnjrc%2BmwwBto4jvP9Kafec0mt5uuRQSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMn%2FXxQMMBYXqe0zFWKtwD6HUq%2FX91MPFtLAjkMQ4BORqGcahGHrGN661mxJsAe767eW8eGRJ6bORZloHA3qqD%2Btty5SOdGZPoidsKdaeTm508pPRxeT0LgtpCrGocaOhyDzgGYOR%2BTMzOsiOBEQWxcwVxmOJdxJuLuU4j5mDLrPolfgyx61GHQIzu8%2Bdk4DvbEorH1c0Q7NSYsrYiPPxC58X%2Fb9RorRBryXgQ6Y4%2FmNqI%2BWiw7cvS9zMa0XC1l%2Bmlyh7tkofI4XP1r0xyZ3DgRjZarKuGI4AwABfOsAEPCR8CQOCwJ%2FNzsZ%2FixkWowvDRtoHjdMSkxz3%2BP%2BWnZGBSFRPAigmdUCF5K4wHkFmcK0nLHlrp7QRIJhDNes1%2B4B%2FsbtqSyzO5jTCwvfbAj2lQCPefSf0esQCIc1C0rhkxiCjEtH3PlBchDzh5NMGboQOgsfzZnKxECWvebosKjRZhy22g%2BxMM%2BkJMQPzRCVRsQpTP4DqI4SYYI%2BYjuj6mSc4enTtaqdFBwABss1uvdYSaKGGfcaHPol6unGQDRYt%2BJtqw1R00%2BTfDSaetYTo1534Du2S%2FLoTgZitIEPnyJFZgEnsPMDHWUGhv0Npvh8n%2B%2Fd4gzM5y0FAXeirukTSg8s4t85bNHU5FA%2BzwilYwnY%2BIxAY6pgH5XYp6mWeUsk0t7IfgXF0R5k5pDTMYMJhlI0Ex1DUMYUiffjK2ezwpU2%2Bw%2FZ%2FGiDfoKW9bIn%2BpUNEioEbXl23xAucBE55T6MNuuDmmzx9tc0Qr4gjlF%2F7X6alv%2FNiLbZCyzUXLq1M8OJvxoB5gSq1EGA1kWnlCvfGR7MeXa14asMvSePODGXOxUuLbrd06F8w9mMyJYn7%2FAlab8F41YgpqSqxYdFvy&X-Amz-Signature=bffe76010d37fb8de45da74f765b56daa4c0f1554708a62552e0f90a974bcc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47NDOF2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBndLxDtTYhDIS2%2BdKZzgSFEhqkxbbe7OPnvI%2BUPeCxOAiB4Rb3Ch11lrjXwnjrc%2BmwwBto4jvP9Kafec0mt5uuRQSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMn%2FXxQMMBYXqe0zFWKtwD6HUq%2FX91MPFtLAjkMQ4BORqGcahGHrGN661mxJsAe767eW8eGRJ6bORZloHA3qqD%2Btty5SOdGZPoidsKdaeTm508pPRxeT0LgtpCrGocaOhyDzgGYOR%2BTMzOsiOBEQWxcwVxmOJdxJuLuU4j5mDLrPolfgyx61GHQIzu8%2Bdk4DvbEorH1c0Q7NSYsrYiPPxC58X%2Fb9RorRBryXgQ6Y4%2FmNqI%2BWiw7cvS9zMa0XC1l%2Bmlyh7tkofI4XP1r0xyZ3DgRjZarKuGI4AwABfOsAEPCR8CQOCwJ%2FNzsZ%2FixkWowvDRtoHjdMSkxz3%2BP%2BWnZGBSFRPAigmdUCF5K4wHkFmcK0nLHlrp7QRIJhDNes1%2B4B%2FsbtqSyzO5jTCwvfbAj2lQCPefSf0esQCIc1C0rhkxiCjEtH3PlBchDzh5NMGboQOgsfzZnKxECWvebosKjRZhy22g%2BxMM%2BkJMQPzRCVRsQpTP4DqI4SYYI%2BYjuj6mSc4enTtaqdFBwABss1uvdYSaKGGfcaHPol6unGQDRYt%2BJtqw1R00%2BTfDSaetYTo1534Du2S%2FLoTgZitIEPnyJFZgEnsPMDHWUGhv0Npvh8n%2B%2Fd4gzM5y0FAXeirukTSg8s4t85bNHU5FA%2BzwilYwnY%2BIxAY6pgH5XYp6mWeUsk0t7IfgXF0R5k5pDTMYMJhlI0Ex1DUMYUiffjK2ezwpU2%2Bw%2FZ%2FGiDfoKW9bIn%2BpUNEioEbXl23xAucBE55T6MNuuDmmzx9tc0Qr4gjlF%2F7X6alv%2FNiLbZCyzUXLq1M8OJvxoB5gSq1EGA1kWnlCvfGR7MeXa14asMvSePODGXOxUuLbrd06F8w9mMyJYn7%2FAlab8F41YgpqSqxYdFvy&X-Amz-Signature=dd2926576d844b96660958b9df8874efca1eaf76392f0de6f25bd786b17a0bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47NDOF2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBndLxDtTYhDIS2%2BdKZzgSFEhqkxbbe7OPnvI%2BUPeCxOAiB4Rb3Ch11lrjXwnjrc%2BmwwBto4jvP9Kafec0mt5uuRQSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMn%2FXxQMMBYXqe0zFWKtwD6HUq%2FX91MPFtLAjkMQ4BORqGcahGHrGN661mxJsAe767eW8eGRJ6bORZloHA3qqD%2Btty5SOdGZPoidsKdaeTm508pPRxeT0LgtpCrGocaOhyDzgGYOR%2BTMzOsiOBEQWxcwVxmOJdxJuLuU4j5mDLrPolfgyx61GHQIzu8%2Bdk4DvbEorH1c0Q7NSYsrYiPPxC58X%2Fb9RorRBryXgQ6Y4%2FmNqI%2BWiw7cvS9zMa0XC1l%2Bmlyh7tkofI4XP1r0xyZ3DgRjZarKuGI4AwABfOsAEPCR8CQOCwJ%2FNzsZ%2FixkWowvDRtoHjdMSkxz3%2BP%2BWnZGBSFRPAigmdUCF5K4wHkFmcK0nLHlrp7QRIJhDNes1%2B4B%2FsbtqSyzO5jTCwvfbAj2lQCPefSf0esQCIc1C0rhkxiCjEtH3PlBchDzh5NMGboQOgsfzZnKxECWvebosKjRZhy22g%2BxMM%2BkJMQPzRCVRsQpTP4DqI4SYYI%2BYjuj6mSc4enTtaqdFBwABss1uvdYSaKGGfcaHPol6unGQDRYt%2BJtqw1R00%2BTfDSaetYTo1534Du2S%2FLoTgZitIEPnyJFZgEnsPMDHWUGhv0Npvh8n%2B%2Fd4gzM5y0FAXeirukTSg8s4t85bNHU5FA%2BzwilYwnY%2BIxAY6pgH5XYp6mWeUsk0t7IfgXF0R5k5pDTMYMJhlI0Ex1DUMYUiffjK2ezwpU2%2Bw%2FZ%2FGiDfoKW9bIn%2BpUNEioEbXl23xAucBE55T6MNuuDmmzx9tc0Qr4gjlF%2F7X6alv%2FNiLbZCyzUXLq1M8OJvxoB5gSq1EGA1kWnlCvfGR7MeXa14asMvSePODGXOxUuLbrd06F8w9mMyJYn7%2FAlab8F41YgpqSqxYdFvy&X-Amz-Signature=a760ac626fb9f374fce89bd20a85bc4181cc7525a1f0e47f3c410791d14af056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKPJ75N%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDLl71t2867t2ArQXxTcU4p1DQkJrqcDAwbu%2BT5eApH%2FwIhANKkFu2EozvFS8C1mMbrm1JO9IUzkAiVcENUdQc9LtA%2BKv8DCCsQABoMNjM3NDIzMTgzODA1IgwKwJz4Vm88ZE7YtLwq3AMJAJ0GFmXIK0w%2FEPd%2FeV9ZlowYsOmhMH9cLof%2BA%2FEZ%2BQcl7rqlzNI8xaDq0YSMziyn0%2FvrfLA9V9TvsgEreUNn%2BGiOzIva1AOA0AirVBLVYAzHeQj8eAuPYQFZMf2vq%2BMafYAn%2FkiBYStdCcWE1EQLzdr5Nh0dcKOp6qA0d8KG0DrKCeeGIeD6YSrQS399WxPzBYDVLwAVBBFjnJX6zGYnUQV2W6hZbcGFoHSeS9uYrh4p8EQgjKa9%2BWJhfvP5QnXOhLVryVVYBCEKhUld9woLOam6K9tymXxBgIY6cvYcWTTbAxvthkuD2q3e5t6I8FzcNCMhYoNBUekjXG0MDIuQBvHOFcofeU6luqroTGaDdWIqRG1x%2BeeqAHblN2U4aR6AYf%2BhHoKDmWvJlcuXOeEH9fnKLkENjwswXLw%2FCV0h7w61f86lwZ%2FtSdM5Zuutlh1dDZNriIcisgBbM4jfRNOdpNcXYwix5t1sdCCe7U3QZnbd6zw4eoPazg2L15lVcnjCf7PhK8s6y%2ByqRL%2FjXg6OHmw2zugVOi%2BmKgubzkG%2Fm148lritYLyIIjzC86ol%2Fj94I43tqdJ4Idu2HvY85I%2FlK7uVj%2B%2Bw%2BtldyHxZO3aEeVHG9r%2FMSq07fAnqkDC5j4jEBjqkAftfy9rbPdy2kLmW9vtRl4FXFAkf5VbV10sE%2FTif%2BaBr0Rq%2FhBDsAg5LntjiovWT3CUdXCyCHUMM7m7ZkAev0QzJXlL5swl40XhtLeReYM4LaUuT7vgWqC1jTJIr60WkOo2ieX3nt5rmlOPqjS%2B%2BzErt6lzA5SaYUiVsMcv2tCFetykMGyCjBkiPsGcnpfR2W1Qz0FVSr8cY1LpNbbwP6HVipf2Z&X-Amz-Signature=3df78295b915dd26622eb2c5440692519e4aae53401c86c582760c04ad8677c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVQ2XVC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFPY8LC4tuvKMzEwTWMx%2FDwrJ3vOQu82lDdT8fVhjQYhAiBG3Ohjx4QfBgK3mUnQ0CyhAnZWMzEpPJmSOWK%2BZdNp4yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMSLfO11T7Ig2gymqqKtwDN%2FZXnkM2oBfs6265UYSlNmSjtJ8p8%2BvfQ6QHE7m7kwg56JF1o31EuiFNYcOfCVsgvQdsDNuSBEkGB1SCYtmkFp3uMhPnzQWXDiN3nOzVq%2BEnQWpww08wzmeztinOjTZ57W7ZEb5qpLz5ndRVH1BxN6fccL8GaT94I6%2B9Slanc1FQbaHbU0oVa9aPI%2FXIqcPfV8D85L%2BcLG%2BIjcVh9y2HvphiePd1jL4Y0UFZsqmnsmfYHwI6L9OtW0LlSHioY%2F3Mm7HDOE1GTA5l3x%2Fvs9fCNg8JJ3tIEQAfFERfsvtZc%2BrDcCUWIdw01kEOntDJUEiJanupPIFkMlM%2BJEtzNd5QvEuWZfyt04eROMQlB%2FMQM%2FDrW%2FmKiOzasvOzNjTbF6jnBt%2BZA44TlcrdiG8P2tuHJxtY6Xnsy46jnMdV8z7EssjfBTByoYUjZ6qvm34CjQRSFHm%2BicvPZZ27RBgOPncD8wizOwkSQfbXzHMN2bETmTSeyua%2Bh9Ir5a8tVzus2bJyzHaPAKhQmBNQWs%2BSA70lxIUNuduszoJp7TlWPSCSzu4wCmdFmpH4TGvh6Kcw9%2FwCikc6VCJUEk8K%2FlltPFeipamgVpoCTwT1wOh%2B7x%2F9ZnfKDEZ%2Fd9pQuBseGjMwzY%2BIxAY6pgG3ahfXZYv5RXYfokrJK1cvCJ9pOzvNoX6ZzRlFs1XWbVREHGdsdTP%2FrX93vo7ENrjiUKIIq6drr76d7VpjDdCS5UuqFNzmqjh9aW1Lu21GDJapfUZ5aLv%2BsaNjJ4U8o0ltOPA5%2BpcplITueDx6G1dfvTSbevXw%2FGDyIoafVg5QuyjikwMAvmuH87RGhWGV7Dj2iEvPS9ZMpT59jSSQTA4bw1JXfy%2Fz&X-Amz-Signature=22e74f9c2b5a283de49f2d6c9e67565650b3fbeb1ffeff5f370d948b00ee1424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47NDOF2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBndLxDtTYhDIS2%2BdKZzgSFEhqkxbbe7OPnvI%2BUPeCxOAiB4Rb3Ch11lrjXwnjrc%2BmwwBto4jvP9Kafec0mt5uuRQSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMn%2FXxQMMBYXqe0zFWKtwD6HUq%2FX91MPFtLAjkMQ4BORqGcahGHrGN661mxJsAe767eW8eGRJ6bORZloHA3qqD%2Btty5SOdGZPoidsKdaeTm508pPRxeT0LgtpCrGocaOhyDzgGYOR%2BTMzOsiOBEQWxcwVxmOJdxJuLuU4j5mDLrPolfgyx61GHQIzu8%2Bdk4DvbEorH1c0Q7NSYsrYiPPxC58X%2Fb9RorRBryXgQ6Y4%2FmNqI%2BWiw7cvS9zMa0XC1l%2Bmlyh7tkofI4XP1r0xyZ3DgRjZarKuGI4AwABfOsAEPCR8CQOCwJ%2FNzsZ%2FixkWowvDRtoHjdMSkxz3%2BP%2BWnZGBSFRPAigmdUCF5K4wHkFmcK0nLHlrp7QRIJhDNes1%2B4B%2FsbtqSyzO5jTCwvfbAj2lQCPefSf0esQCIc1C0rhkxiCjEtH3PlBchDzh5NMGboQOgsfzZnKxECWvebosKjRZhy22g%2BxMM%2BkJMQPzRCVRsQpTP4DqI4SYYI%2BYjuj6mSc4enTtaqdFBwABss1uvdYSaKGGfcaHPol6unGQDRYt%2BJtqw1R00%2BTfDSaetYTo1534Du2S%2FLoTgZitIEPnyJFZgEnsPMDHWUGhv0Npvh8n%2B%2Fd4gzM5y0FAXeirukTSg8s4t85bNHU5FA%2BzwilYwnY%2BIxAY6pgH5XYp6mWeUsk0t7IfgXF0R5k5pDTMYMJhlI0Ex1DUMYUiffjK2ezwpU2%2Bw%2FZ%2FGiDfoKW9bIn%2BpUNEioEbXl23xAucBE55T6MNuuDmmzx9tc0Qr4gjlF%2F7X6alv%2FNiLbZCyzUXLq1M8OJvxoB5gSq1EGA1kWnlCvfGR7MeXa14asMvSePODGXOxUuLbrd06F8w9mMyJYn7%2FAlab8F41YgpqSqxYdFvy&X-Amz-Signature=404dde1c5d86c91c65e5550326467bbb2145c5957f974c3ab49de815fad31db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
