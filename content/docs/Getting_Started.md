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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNSCZSG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC1X2xNj52rGeTeR%2B0%2FDvb%2F4Pdw03kLWlv1nv5Np%2FOT1gIgMBmFbWmN6azSP7dYkfR62I1N5xD0M5Lza7UmtS74PHkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnSJrWETPAQPC1VhircA64dclX8426YRWqBney2mknulhFzFlXh3RFKXveNQ8VrjZrlaPAZLl4YvOi58F9RiXogIVkHRJgw7UF6lqOfaFdGltHfxZNy9%2FNgu3H5n65iwgk4eO5Px%2FoPipgVbr03eSX2x9fPeUqB8nw3%2FXxbSTZvic6gfHb7ZRFekRXCSSV2tXK3kDiefXBcostP1Jfph6p3ByqX0JXuwulV6uUkXamJm67gbvv4N8NmbSlsc2l3wGJMPNq2KsMePO%2BeGFSbYq5dyRgB3nkkJrTWBMUDcnMXAXU0D87XVlAB8ABJ6v2H%2FS38kcoK2SxEADWIzG1HDf9FAHvhqTy46U1bhUEwMIg9H15GMkTbzaLn14rD9fpGK11IEj2AmrRHHX3MUi33M%2BgS7UJwgB3NMoOUpsHlTI48zMxTS7LISZgLOTgVNi3W9ntvgieLBLBLOW18rY0TUTB49h3M9qOx8jGCm8N70Wv%2Batni5dVDi3xU04HQC4spKqIvKkCKFHCuekkLLPiPPN19MSo2kg%2F61yMzH%2BQLGaWyeb36L%2BKg19m9I%2BmHSYevHB4kmJD2Oca6sYUKpyetQXBiZMncpXG%2FIUi%2B6T%2FYf13G9DrwXWr0VzJhPa0WsPsiwqHx%2Bu5kYbs9KwnxMLW09sEGOqUBp987zPFLK8iTAwnvPcX%2FbXderJmUboc%2F078GmO3kkE3xvGAo%2BDJ%2BlGC33JKUR8RWgLnabSPnRWBY2FCa35m4x4p36SSiP2XeUcCPk2YMtKClVyWFYd8gnRjTmpwRopFefVM0DKxj2t5Nkz9loxNPiCwlgfSUEZpKfZ8O6ZhsQj7HOOVmoVf%2FwsVLwTbwpHqvsYdwJb88lyq3rd%2BYzSYDtIIw9ior&X-Amz-Signature=2e3c3dcaad0d5f188b0628d194779e72cba5c3342709874b06c490e1296c7dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNSCZSG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC1X2xNj52rGeTeR%2B0%2FDvb%2F4Pdw03kLWlv1nv5Np%2FOT1gIgMBmFbWmN6azSP7dYkfR62I1N5xD0M5Lza7UmtS74PHkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnSJrWETPAQPC1VhircA64dclX8426YRWqBney2mknulhFzFlXh3RFKXveNQ8VrjZrlaPAZLl4YvOi58F9RiXogIVkHRJgw7UF6lqOfaFdGltHfxZNy9%2FNgu3H5n65iwgk4eO5Px%2FoPipgVbr03eSX2x9fPeUqB8nw3%2FXxbSTZvic6gfHb7ZRFekRXCSSV2tXK3kDiefXBcostP1Jfph6p3ByqX0JXuwulV6uUkXamJm67gbvv4N8NmbSlsc2l3wGJMPNq2KsMePO%2BeGFSbYq5dyRgB3nkkJrTWBMUDcnMXAXU0D87XVlAB8ABJ6v2H%2FS38kcoK2SxEADWIzG1HDf9FAHvhqTy46U1bhUEwMIg9H15GMkTbzaLn14rD9fpGK11IEj2AmrRHHX3MUi33M%2BgS7UJwgB3NMoOUpsHlTI48zMxTS7LISZgLOTgVNi3W9ntvgieLBLBLOW18rY0TUTB49h3M9qOx8jGCm8N70Wv%2Batni5dVDi3xU04HQC4spKqIvKkCKFHCuekkLLPiPPN19MSo2kg%2F61yMzH%2BQLGaWyeb36L%2BKg19m9I%2BmHSYevHB4kmJD2Oca6sYUKpyetQXBiZMncpXG%2FIUi%2B6T%2FYf13G9DrwXWr0VzJhPa0WsPsiwqHx%2Bu5kYbs9KwnxMLW09sEGOqUBp987zPFLK8iTAwnvPcX%2FbXderJmUboc%2F078GmO3kkE3xvGAo%2BDJ%2BlGC33JKUR8RWgLnabSPnRWBY2FCa35m4x4p36SSiP2XeUcCPk2YMtKClVyWFYd8gnRjTmpwRopFefVM0DKxj2t5Nkz9loxNPiCwlgfSUEZpKfZ8O6ZhsQj7HOOVmoVf%2FwsVLwTbwpHqvsYdwJb88lyq3rd%2BYzSYDtIIw9ior&X-Amz-Signature=b6fb08bb7a63e1175db07de294ece71d614eb84d6d3c8b0dcf7c5a9ce696b26d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNSCZSG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC1X2xNj52rGeTeR%2B0%2FDvb%2F4Pdw03kLWlv1nv5Np%2FOT1gIgMBmFbWmN6azSP7dYkfR62I1N5xD0M5Lza7UmtS74PHkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnSJrWETPAQPC1VhircA64dclX8426YRWqBney2mknulhFzFlXh3RFKXveNQ8VrjZrlaPAZLl4YvOi58F9RiXogIVkHRJgw7UF6lqOfaFdGltHfxZNy9%2FNgu3H5n65iwgk4eO5Px%2FoPipgVbr03eSX2x9fPeUqB8nw3%2FXxbSTZvic6gfHb7ZRFekRXCSSV2tXK3kDiefXBcostP1Jfph6p3ByqX0JXuwulV6uUkXamJm67gbvv4N8NmbSlsc2l3wGJMPNq2KsMePO%2BeGFSbYq5dyRgB3nkkJrTWBMUDcnMXAXU0D87XVlAB8ABJ6v2H%2FS38kcoK2SxEADWIzG1HDf9FAHvhqTy46U1bhUEwMIg9H15GMkTbzaLn14rD9fpGK11IEj2AmrRHHX3MUi33M%2BgS7UJwgB3NMoOUpsHlTI48zMxTS7LISZgLOTgVNi3W9ntvgieLBLBLOW18rY0TUTB49h3M9qOx8jGCm8N70Wv%2Batni5dVDi3xU04HQC4spKqIvKkCKFHCuekkLLPiPPN19MSo2kg%2F61yMzH%2BQLGaWyeb36L%2BKg19m9I%2BmHSYevHB4kmJD2Oca6sYUKpyetQXBiZMncpXG%2FIUi%2B6T%2FYf13G9DrwXWr0VzJhPa0WsPsiwqHx%2Bu5kYbs9KwnxMLW09sEGOqUBp987zPFLK8iTAwnvPcX%2FbXderJmUboc%2F078GmO3kkE3xvGAo%2BDJ%2BlGC33JKUR8RWgLnabSPnRWBY2FCa35m4x4p36SSiP2XeUcCPk2YMtKClVyWFYd8gnRjTmpwRopFefVM0DKxj2t5Nkz9loxNPiCwlgfSUEZpKfZ8O6ZhsQj7HOOVmoVf%2FwsVLwTbwpHqvsYdwJb88lyq3rd%2BYzSYDtIIw9ior&X-Amz-Signature=2d29ffeb4f28e992a9c22be9da650ba50e96d938dc14a79162b166f5fcb8b6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRC2I4G%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDbhC%2FfRgnra65fGK1WUPb6OAyyDKGwqblA2IIi7LspZAiBlQoOvo1ldXdG7dY%2FDx0qg690C8CX6Y3JunPHF3nxWsCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljsFGfGj%2BDgNc4dHKtwDLrcYQjejh2LkLbocnsmcmUZiMjyzsZUpAYthOS0rTRSdhtnjV1Y8S%2FKOIKLq%2FxEDxuYnk%2FVyThet5rP0Jri07HqBiYydGOghmycYMOTYiGbV9doo9l60V3jqe95BY4nEzu5qhL23%2F2Sf2IuwUMjFjEnE1Uh5%2BzlZU6GhDUo9CC9zha%2Bkj3rxabnunJxqaF9ek7a8lMqLGCtiDqoijMp3Acy2i8S5ZQZwsvzEWPtDhK%2FWzQ4kRYv0sL7DANhlPW6oIihaxUsHfLcsvRqadw1vj6D1RtC%2BNK%2B3ExUFlinA6AEZEiUBtnRG7evDFOZKYekUMvfisHf8iW3BeEqSicEXJt8b7IPvn2ejopH1s6Cc6yQyRPxWONHZDRRmXebn8zvkfot1tF1H7tKKdPENX%2FckzPi66JwGY9qoHBKV%2BGmJ8%2FusOy6OwdUxUmgURJUasVuUjfu9VBrWU18S5wNfpNdIvFFhrXfLW8n8g2XFM%2BQB8NSu0bkruuaayCgh1VqD0PaxZW%2BiHw7LisaiXokoKa47PoMA9sJK2uK%2FrnsNyZtpEzXfXmmT3PZmNGt123qeB%2FHSK%2BN5ZB9Y7kLmQOkRJEezRrNJSr0JBKmuDmXiiKq6E8vWduewKu5c6XXdUBswm7T2wQY6pgFFjGkn4Vut9FO9xys%2FY8DKg1f7s4oIACPMR67HRckaF%2FKHJiz0PlOD%2FJk9e66c9lnhDEiYAdxmLh5wBfv9bmtpsZRqOI%2Fahw3oZ53F%2BH3uaaE8e53Rcz37siyz8eU1MkwgQSm83%2B%2B1cSiKBtc4WQ69fx2pUL5oP%2FRylKsM33GFxCtZrTgy8mLobydSIc710QkN0S7u9gaVvp8p5wp5AoIeMq6ECGqM&X-Amz-Signature=b25ec513b529cb6009e4b8fab6eb195d144487ed16cab3a6218b9ce0faf16d23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LGG5DIF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD%2Fv0GZJPqAM0s1d8i6sMzsf07Kaqaft1YHmZopk4rtUwIgBU2gBOK0pcEmeFDzPAmLTYCbIR2p1a9iziR1HxA0rZcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYU4vb3s0XITNbZdCrcA9i2APwSCe0issqCKb8zrbL9vCRK9juQx8n0JgEuoOOiMJaqFmiO5OeAXZtNADxbiLBkTm2kQC3vY2wzAp4KhScubY5U3bMzCGyxPeKNN80s5VnRDCO48dp7EDr8Dw%2BZTeffoVrec750SVbddj6lb7hv7heR7cWRI3KvYKi5dt5%2Fgv9cLmLzw%2FtLQ04hYjBSg%2BHB36emxaxwJ5nrDnXJjHYzhemCUmvMrnwnQbUSmQQ8tcQ37LtbrkNc%2Bc26%2Ba0u%2BRfx7Ks8WrLD01dX6D3CixrkalUMEG5pmCKmsxvU9r72iMWzT5rEuNJGBxNpYxvSDcoz8ZPOZoSVXMEeRp9ewm4LkgcFveq9mqkQNWvguyj3D%2B8rGWkIMlmeGVWKZmhan39EEBAdX9bXx7RgfErLAXG7e94xnkw56qHXWFaBTiSIdm%2BwvspaYShvu7rMAgTmyNYPPdIi2sODEWYnccvKAG8YhsdMO8RRZqVO%2F0WTvnZzGbCPS3jy3xAnhqc4JZg0wxtdU5XfjdKziNrIpBEgSZDa%2B1FqcXMlg1DBGe8l2%2BOi7KiTJT%2BLds4hi1rs84p5ChqVcvYe%2FaEGgyjCjJPWOluvRfzTkAPLGrp73DjTEpZ8KhObDMsGmiKaFCeXMMK09sEGOqUBq5OQ6ylWBV0s8kga0JliMROVwriBWYR1Jq3nPBBXKdEJUnx3Y6t4Elg434WrPbu%2Bc%2Fwp4Ei9CShqyppPK8ELtufilZub6Ft2Iw9mnupBJraTnwLnu9HESnoMz1rpa0sgG%2B3p1addhNBVgm%2Bg2HM05aYaT0rtLjEM%2FFvO9fF3uQi%2FtHN2Tbl8iwk2BTyuggfe%2BI8rZ9Xpnt8jZAznbttsM00MSX28&X-Amz-Signature=95ba82dabd68a87ab5f487710d560fa5c1c2e713edb405f3ca385bc218b443e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNSCZSG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC1X2xNj52rGeTeR%2B0%2FDvb%2F4Pdw03kLWlv1nv5Np%2FOT1gIgMBmFbWmN6azSP7dYkfR62I1N5xD0M5Lza7UmtS74PHkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnSJrWETPAQPC1VhircA64dclX8426YRWqBney2mknulhFzFlXh3RFKXveNQ8VrjZrlaPAZLl4YvOi58F9RiXogIVkHRJgw7UF6lqOfaFdGltHfxZNy9%2FNgu3H5n65iwgk4eO5Px%2FoPipgVbr03eSX2x9fPeUqB8nw3%2FXxbSTZvic6gfHb7ZRFekRXCSSV2tXK3kDiefXBcostP1Jfph6p3ByqX0JXuwulV6uUkXamJm67gbvv4N8NmbSlsc2l3wGJMPNq2KsMePO%2BeGFSbYq5dyRgB3nkkJrTWBMUDcnMXAXU0D87XVlAB8ABJ6v2H%2FS38kcoK2SxEADWIzG1HDf9FAHvhqTy46U1bhUEwMIg9H15GMkTbzaLn14rD9fpGK11IEj2AmrRHHX3MUi33M%2BgS7UJwgB3NMoOUpsHlTI48zMxTS7LISZgLOTgVNi3W9ntvgieLBLBLOW18rY0TUTB49h3M9qOx8jGCm8N70Wv%2Batni5dVDi3xU04HQC4spKqIvKkCKFHCuekkLLPiPPN19MSo2kg%2F61yMzH%2BQLGaWyeb36L%2BKg19m9I%2BmHSYevHB4kmJD2Oca6sYUKpyetQXBiZMncpXG%2FIUi%2B6T%2FYf13G9DrwXWr0VzJhPa0WsPsiwqHx%2Bu5kYbs9KwnxMLW09sEGOqUBp987zPFLK8iTAwnvPcX%2FbXderJmUboc%2F078GmO3kkE3xvGAo%2BDJ%2BlGC33JKUR8RWgLnabSPnRWBY2FCa35m4x4p36SSiP2XeUcCPk2YMtKClVyWFYd8gnRjTmpwRopFefVM0DKxj2t5Nkz9loxNPiCwlgfSUEZpKfZ8O6ZhsQj7HOOVmoVf%2FwsVLwTbwpHqvsYdwJb88lyq3rd%2BYzSYDtIIw9ior&X-Amz-Signature=a561de9e8f9600da40250a20ba964521315301543f7b3eb3951817aaf06d1265&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
