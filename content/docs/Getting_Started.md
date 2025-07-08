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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDFPQ5T%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkB2M2q5NeblHh9r%2BrTTfdNVSnEUQ%2Bp2V3vBXqtsHbAIhAJ0cl7K%2FLRXmkhGTdc%2FiLnF4yVXuNLXpNrqi4qihVyIaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvt3giY%2BuyqKUj9M8q3AO48RFjII34WAH8rYbn6IgEly15bKfEXI06a41c8fqing9Pt78DnVTqlO%2FqDyI41PVd3eB6Cs3%2Fxk%2BnIVxQcet%2ByjHHNHPLH8HYr2YkNSr0IUjI2CxM%2F%2FBCBiLk1%2Bvd5b0cbe7BSdiFlxYOYY%2FUrDEU9H7Qh0jaPfJq2di%2BncO0a6bTQ1eYUK%2FixB1IGnBh5TVPlcDLonAs7gUptKURAwnPdk9fRJcdjrix9mUHV1GVRGfFSk%2FYyRnq6UH7xim85whdQ%2FJyPb8w9Jeamnt3MaxR%2FRDtv4qnI3mw6JVIiVUrLM9f%2Bvb7LXyOwWY1O4LdIrPt8e0N3Sqbm0uWSmCj%2FwYTJNzCXa2Q8G9d%2BiySgTRM5m%2FtFQel9tZaun%2BOKjZ8Z11GRzTGEN4fB9HqmSWh2AGELbO8vsNNMNKRauvR4oKxdnAbIsXUQ7SHWIlLDUpKKRgx%2FUTOKNDT%2Bj98yR7STicciiIaKp6eAIjpJjgVB4zRrp5idydpOseg3l28WFfHaCOb2qT1H3x3btWZBAYggKt2HP8JHA6f1Fpi%2B%2BMTUCY6hFooODVo%2Fuq%2FnE0ExGpgpi26Vj%2Bxgwm0OqtETFRryWivt7Et4F%2B5ybm6CPwO4Dt8wDP%2BgmwLTJqBDUhmqzD%2Bx7PDBjqkAbDW30my6Z5o1fjmg78MNaBKMCXKN4%2BoWiAc%2BZy7OOXNF99yVEGspZDeXUqJzWbviuG1uKqmo7k6yn%2FTjkLNch6S9%2B1zRWA2s85v6T7xPkSXDC1qIjbrEixZ57JurFAsW5aR44dttbSniTWD3VSFpr4tCuX7QyxUAYW5U%2BSSOwc%2FHQSwN4gm7cq1U8eT8KTlu5%2FEx4xPIkViv9sB1Nx7aAIIqihM&X-Amz-Signature=3106fa6718552969403eeb660b2b32b065aff2009775942493753c9440aeb936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDFPQ5T%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkB2M2q5NeblHh9r%2BrTTfdNVSnEUQ%2Bp2V3vBXqtsHbAIhAJ0cl7K%2FLRXmkhGTdc%2FiLnF4yVXuNLXpNrqi4qihVyIaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvt3giY%2BuyqKUj9M8q3AO48RFjII34WAH8rYbn6IgEly15bKfEXI06a41c8fqing9Pt78DnVTqlO%2FqDyI41PVd3eB6Cs3%2Fxk%2BnIVxQcet%2ByjHHNHPLH8HYr2YkNSr0IUjI2CxM%2F%2FBCBiLk1%2Bvd5b0cbe7BSdiFlxYOYY%2FUrDEU9H7Qh0jaPfJq2di%2BncO0a6bTQ1eYUK%2FixB1IGnBh5TVPlcDLonAs7gUptKURAwnPdk9fRJcdjrix9mUHV1GVRGfFSk%2FYyRnq6UH7xim85whdQ%2FJyPb8w9Jeamnt3MaxR%2FRDtv4qnI3mw6JVIiVUrLM9f%2Bvb7LXyOwWY1O4LdIrPt8e0N3Sqbm0uWSmCj%2FwYTJNzCXa2Q8G9d%2BiySgTRM5m%2FtFQel9tZaun%2BOKjZ8Z11GRzTGEN4fB9HqmSWh2AGELbO8vsNNMNKRauvR4oKxdnAbIsXUQ7SHWIlLDUpKKRgx%2FUTOKNDT%2Bj98yR7STicciiIaKp6eAIjpJjgVB4zRrp5idydpOseg3l28WFfHaCOb2qT1H3x3btWZBAYggKt2HP8JHA6f1Fpi%2B%2BMTUCY6hFooODVo%2Fuq%2FnE0ExGpgpi26Vj%2Bxgwm0OqtETFRryWivt7Et4F%2B5ybm6CPwO4Dt8wDP%2BgmwLTJqBDUhmqzD%2Bx7PDBjqkAbDW30my6Z5o1fjmg78MNaBKMCXKN4%2BoWiAc%2BZy7OOXNF99yVEGspZDeXUqJzWbviuG1uKqmo7k6yn%2FTjkLNch6S9%2B1zRWA2s85v6T7xPkSXDC1qIjbrEixZ57JurFAsW5aR44dttbSniTWD3VSFpr4tCuX7QyxUAYW5U%2BSSOwc%2FHQSwN4gm7cq1U8eT8KTlu5%2FEx4xPIkViv9sB1Nx7aAIIqihM&X-Amz-Signature=2a68b2dc06d000308b2a30da4755c8c37966070ae4df5565bb27c9ceb5fb5a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDFPQ5T%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkB2M2q5NeblHh9r%2BrTTfdNVSnEUQ%2Bp2V3vBXqtsHbAIhAJ0cl7K%2FLRXmkhGTdc%2FiLnF4yVXuNLXpNrqi4qihVyIaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvt3giY%2BuyqKUj9M8q3AO48RFjII34WAH8rYbn6IgEly15bKfEXI06a41c8fqing9Pt78DnVTqlO%2FqDyI41PVd3eB6Cs3%2Fxk%2BnIVxQcet%2ByjHHNHPLH8HYr2YkNSr0IUjI2CxM%2F%2FBCBiLk1%2Bvd5b0cbe7BSdiFlxYOYY%2FUrDEU9H7Qh0jaPfJq2di%2BncO0a6bTQ1eYUK%2FixB1IGnBh5TVPlcDLonAs7gUptKURAwnPdk9fRJcdjrix9mUHV1GVRGfFSk%2FYyRnq6UH7xim85whdQ%2FJyPb8w9Jeamnt3MaxR%2FRDtv4qnI3mw6JVIiVUrLM9f%2Bvb7LXyOwWY1O4LdIrPt8e0N3Sqbm0uWSmCj%2FwYTJNzCXa2Q8G9d%2BiySgTRM5m%2FtFQel9tZaun%2BOKjZ8Z11GRzTGEN4fB9HqmSWh2AGELbO8vsNNMNKRauvR4oKxdnAbIsXUQ7SHWIlLDUpKKRgx%2FUTOKNDT%2Bj98yR7STicciiIaKp6eAIjpJjgVB4zRrp5idydpOseg3l28WFfHaCOb2qT1H3x3btWZBAYggKt2HP8JHA6f1Fpi%2B%2BMTUCY6hFooODVo%2Fuq%2FnE0ExGpgpi26Vj%2Bxgwm0OqtETFRryWivt7Et4F%2B5ybm6CPwO4Dt8wDP%2BgmwLTJqBDUhmqzD%2Bx7PDBjqkAbDW30my6Z5o1fjmg78MNaBKMCXKN4%2BoWiAc%2BZy7OOXNF99yVEGspZDeXUqJzWbviuG1uKqmo7k6yn%2FTjkLNch6S9%2B1zRWA2s85v6T7xPkSXDC1qIjbrEixZ57JurFAsW5aR44dttbSniTWD3VSFpr4tCuX7QyxUAYW5U%2BSSOwc%2FHQSwN4gm7cq1U8eT8KTlu5%2FEx4xPIkViv9sB1Nx7aAIIqihM&X-Amz-Signature=e5f4397d95d4a3b2e656fcab2c55db3898b3082144f6022b7c4809122f2d2136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5IFV2G%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcInXCiBys1ubCWq1itpM5frdsm9R6XKm4IisYceEjNAiBI6KknXCgcQBo1uI445dzhLdmVpxdB3LamR5Qa1m4DCiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0brTUZJg4S7iI30nKtwD3mUB5XhU6fNjZklm2shSvyKB0zbf2yNleBgWshSVjgtLsANJeo9YFnXX5CdPQv9RnyQW04kU49Il8MrcnuAGcRBHrZPbEEA%2F9xUoASILrY2EZ7xHTllH312AOJ%2FA%2FuIXZW9oSuFDMKpSl9pUeQqlWroADhp03WzvaYFLjY8DXkIGM0weBZKMUTZddERlAlmGQmSBKk%2BBtEPNgG8hj7A8wDUl4%2B2sz0CgGLw85SRMVZX4Bp%2FBQfbad8h6mrRSvfIOTa%2FCdbreyyUJjigEKZqrSWyAGSnq2%2B7CfLl6Kw25DHyQpgeqYjbqqiRqfW%2F%2F3e5MrkOvIY5exlmHsvdVRS5Qv%2FDgmRiML6BkACeindQFSgmHu9O0ylRBgDilLdQUD9%2BbbylULFcZ%2FMsmPxr0xXrzRskxoPdK%2B%2BsrCvbQ4X7p%2Fi44uL%2F%2BIVAQEKGi5e3Tl7ksFunsHb09YsO8a1tl9ugRQV3YZiHeD7%2FKXptttXB1IAZwtLR9w13ROSeGFJGiuUxfICZ%2BA%2F0tEPMxoXomKxtu2rVHOEDVxrXUYLr3nHT9xSKZPnHVFSknCLi0Mm172bLvO89ujHEO2wUkx%2BSflgXqe0gsbiI1XzT65N2rlo80%2F9%2BIn1tYribIE5VRIQ4wvcizwwY6pgENB9oeW%2BbdgEdr%2Bcg9EaVnBvSwdQkdCDa8fYjIj9iJxrHrrQKi4z1xcdkslHz2hOHqC10ljRkfYrV%2BkFcAZnuG2illP3tepaiq%2FI0hIxpRWRTRQHJuIbYCGXWj8rprhDP2BFxnzJ%2BFdybiC32A9cSpmNygF%2F9YgQPBt6QRsauyWgdgQc4tjatQnaO%2Byyf5k6Pf7dylBZA6HJNlFw3o8oGvMHVpYNoX&X-Amz-Signature=d1e2bcbc6964e6af7a4d2f6415629e97171622505cf57073fe23a854e95519ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRW4MFJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG0eU4FRq38JfWKq%2F%2Bsnbr7BRj8SnLjJleFCkAzf%2FKKgIgMn1zxbpNme3ebrORRhR7Fe6LUkQs3M%2FgajRczS8NMcYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEed5jwrIWCUMLPP6SrcA5vj0eLbQNVrMu4OKZwbmZ%2FyCEg5Owhszwnorh0DjySHB3D%2FkmwBXgnM3bxiBtVgwOoRHK%2FpNUx%2Bv7fy%2F%2B7RarZupBhXb7KuNWizlRQjg3X3EI8vFJ13CaposJ24HR%2FotaiuDvqxVyGDGY%2BzH9%2FrCTcMkqJeimG5hjr%2BOEoZ9pyjW2Y36aQle0zN%2BNJv4K%2FWbZnWPw3r7eTta9lUF68HTl58Bap%2Fs%2BZ%2FbfX02L%2BYE8Clu0I8Bx4JPRsNFOtGT%2BjHSbGfVeXE0lbs%2FV7F3GFpjtE12ZD4WCRVf6ykSg2CGA%2BTuFp2G1ldPcEaK31absGXb3C6m0vlpsmMCg7I9yGycLP8cZpXp%2B8F%2BmPZpmJ%2BWsnriHh%2BuhJuWrEysUpYqcmL8vGGFjveB1OH511hgpzMifkYwI8MqKDAK5mCjPXrCjxwZrMkJYp%2BGN7V8zmyIb5fP3BGuTNns0QBjCEMxA7ZYemYzFr6CwJbjM1GX0X965O8aNFXnFbYAUXJtzrABf6tn4qWHTGRbfCEf2N2ti6oF9iYJ2E70SB6pargw5N5xyluqKgnSrG%2B88l%2FnoyQkTXGD9B9BEfRokIHoZIVPBdO03vE61agSqubxODnUs9fZv40YtFWFASo3M%2BnedUTMKPJs8MGOqUBFdt029kLmeYilwYhzbtEQBPERoO6jbtITS3Dbw7%2Beaoxx9PA8O1CqiSrzdfOX5WzD76wL%2FLQo%2ByNDT1QS2nDZaiZXalc4yXTI4HXqV2gmRfu1DbGV3a%2Fi0Ue58GQi%2BDcZWLvyhfHLVVPgbWQf8hCE67pIyfdK%2F0a4p1beYe7OJEk0FFWWCU0n%2FEl1YpXewL%2FTLdO3ODpTSl2W%2F5gF577ES0MMxHj&X-Amz-Signature=7812e814bcb308034b666c6a7d147580606c722b11d557aaca7362b3df53cc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDFPQ5T%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkB2M2q5NeblHh9r%2BrTTfdNVSnEUQ%2Bp2V3vBXqtsHbAIhAJ0cl7K%2FLRXmkhGTdc%2FiLnF4yVXuNLXpNrqi4qihVyIaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvt3giY%2BuyqKUj9M8q3AO48RFjII34WAH8rYbn6IgEly15bKfEXI06a41c8fqing9Pt78DnVTqlO%2FqDyI41PVd3eB6Cs3%2Fxk%2BnIVxQcet%2ByjHHNHPLH8HYr2YkNSr0IUjI2CxM%2F%2FBCBiLk1%2Bvd5b0cbe7BSdiFlxYOYY%2FUrDEU9H7Qh0jaPfJq2di%2BncO0a6bTQ1eYUK%2FixB1IGnBh5TVPlcDLonAs7gUptKURAwnPdk9fRJcdjrix9mUHV1GVRGfFSk%2FYyRnq6UH7xim85whdQ%2FJyPb8w9Jeamnt3MaxR%2FRDtv4qnI3mw6JVIiVUrLM9f%2Bvb7LXyOwWY1O4LdIrPt8e0N3Sqbm0uWSmCj%2FwYTJNzCXa2Q8G9d%2BiySgTRM5m%2FtFQel9tZaun%2BOKjZ8Z11GRzTGEN4fB9HqmSWh2AGELbO8vsNNMNKRauvR4oKxdnAbIsXUQ7SHWIlLDUpKKRgx%2FUTOKNDT%2Bj98yR7STicciiIaKp6eAIjpJjgVB4zRrp5idydpOseg3l28WFfHaCOb2qT1H3x3btWZBAYggKt2HP8JHA6f1Fpi%2B%2BMTUCY6hFooODVo%2Fuq%2FnE0ExGpgpi26Vj%2Bxgwm0OqtETFRryWivt7Et4F%2B5ybm6CPwO4Dt8wDP%2BgmwLTJqBDUhmqzD%2Bx7PDBjqkAbDW30my6Z5o1fjmg78MNaBKMCXKN4%2BoWiAc%2BZy7OOXNF99yVEGspZDeXUqJzWbviuG1uKqmo7k6yn%2FTjkLNch6S9%2B1zRWA2s85v6T7xPkSXDC1qIjbrEixZ57JurFAsW5aR44dttbSniTWD3VSFpr4tCuX7QyxUAYW5U%2BSSOwc%2FHQSwN4gm7cq1U8eT8KTlu5%2FEx4xPIkViv9sB1Nx7aAIIqihM&X-Amz-Signature=7c3c3446f7f2f6667e4378a625fe5eb9cf1d1462595b38ccdf8da879ebb89784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
