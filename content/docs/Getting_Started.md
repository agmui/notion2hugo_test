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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAMWLOE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC3%2BRvbOA%2BgRLyhVMBvqfoYl5aBv5EwoNlVNwmmOO86BAIhANzHGa3Sn4vqJ5Fj6uWowClh3VgWUrecf9HcGB6GbtrNKv8DCCoQABoMNjM3NDIzMTgzODA1IgzcyU67JoUWc8tTcHkq3AMSCDZ5uvDO7Fk3PUFTjwBE3G2PTEPlLVVoxiEH%2BonDJTLDr2O2XnzJaBONahgfU6tJf64I55vTA1eeiaU%2BzN%2BDyVqsp40WM8y3IbjBiK9p37e2%2F5gGSNGb9NH9By51mxqGlQlMsQ%2FkILeToX1EIM2KvIvoOdguM2W4Ex48LTLdCvFev27%2FvwGtt2rm2467XwrOwBd3dMj4xFytoxz5giZocIyMY9bVIVa%2BlVzdm%2BcEotnGvPf7DfKIXpSr2raThsHH%2Bcolo98cjBQNrvDgx5VgpNhF12OiWbhSHucHm5d5Y8ayiCGu12n75mwQquWH1l7g2ob%2B%2B2r%2BZ2p5DHmYbiO1fF5s9VA5hePYSZe6uHTEjn6pLSfS7jFFS353tRZcPa1cpbwYbfREFLoj77B%2Bx1yRf34xcemP1jXhicSzh%2BNIvq3Y%2BGTRzLhGiy6iuBiV7c8b7BX9mdRBxXUMHOsDavGblplNObXKdnyAKTqFrKpNPmNKzAqk0xjBVFeX2WCaPUtAxB7thA%2FNpiiZ3Odinm3CPlGhtfVuZ6ZDVhSr87ZgoARZTXyALk%2FvBpPvvXqdB7Rc5JXnnl8KOCNMlndet4ECDfnj%2FAx0WBFJ8%2FtJM%2BbdjFghLs8%2FdkDLYhHH2jCLvp7DBjqkAd%2FwRRZF0OhMN3Jg4ngc8qGE%2FLkn9%2FXORqDw5q5UOrf4LtqIodXKX%2Bb1TUxSzgVyqz3Ro4pKIcn6paYJay14rRW7aCtljLWT6CyY%2BN4gFG4RBIgWxH6HbJ%2FR18GKEqXXIrZ6g2AWGQAOyFoixMkUK3z9nlzlwNYH9RbxhrVeOlmPNgNKqkE198gMorMVFOrX7ptmpj%2BB%2BUkVwiPxDvpoP%2B2TT2ni&X-Amz-Signature=154490fbb40a28a11b4a8694fe90ddbd3e7d327b2f94e8e653fd6b1503cdd306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAMWLOE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC3%2BRvbOA%2BgRLyhVMBvqfoYl5aBv5EwoNlVNwmmOO86BAIhANzHGa3Sn4vqJ5Fj6uWowClh3VgWUrecf9HcGB6GbtrNKv8DCCoQABoMNjM3NDIzMTgzODA1IgzcyU67JoUWc8tTcHkq3AMSCDZ5uvDO7Fk3PUFTjwBE3G2PTEPlLVVoxiEH%2BonDJTLDr2O2XnzJaBONahgfU6tJf64I55vTA1eeiaU%2BzN%2BDyVqsp40WM8y3IbjBiK9p37e2%2F5gGSNGb9NH9By51mxqGlQlMsQ%2FkILeToX1EIM2KvIvoOdguM2W4Ex48LTLdCvFev27%2FvwGtt2rm2467XwrOwBd3dMj4xFytoxz5giZocIyMY9bVIVa%2BlVzdm%2BcEotnGvPf7DfKIXpSr2raThsHH%2Bcolo98cjBQNrvDgx5VgpNhF12OiWbhSHucHm5d5Y8ayiCGu12n75mwQquWH1l7g2ob%2B%2B2r%2BZ2p5DHmYbiO1fF5s9VA5hePYSZe6uHTEjn6pLSfS7jFFS353tRZcPa1cpbwYbfREFLoj77B%2Bx1yRf34xcemP1jXhicSzh%2BNIvq3Y%2BGTRzLhGiy6iuBiV7c8b7BX9mdRBxXUMHOsDavGblplNObXKdnyAKTqFrKpNPmNKzAqk0xjBVFeX2WCaPUtAxB7thA%2FNpiiZ3Odinm3CPlGhtfVuZ6ZDVhSr87ZgoARZTXyALk%2FvBpPvvXqdB7Rc5JXnnl8KOCNMlndet4ECDfnj%2FAx0WBFJ8%2FtJM%2BbdjFghLs8%2FdkDLYhHH2jCLvp7DBjqkAd%2FwRRZF0OhMN3Jg4ngc8qGE%2FLkn9%2FXORqDw5q5UOrf4LtqIodXKX%2Bb1TUxSzgVyqz3Ro4pKIcn6paYJay14rRW7aCtljLWT6CyY%2BN4gFG4RBIgWxH6HbJ%2FR18GKEqXXIrZ6g2AWGQAOyFoixMkUK3z9nlzlwNYH9RbxhrVeOlmPNgNKqkE198gMorMVFOrX7ptmpj%2BB%2BUkVwiPxDvpoP%2B2TT2ni&X-Amz-Signature=e6786a46524b78d530dc80c8f173c6b74fba5cf48cb78c8f1d1c1bbe9cb3a84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAMWLOE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC3%2BRvbOA%2BgRLyhVMBvqfoYl5aBv5EwoNlVNwmmOO86BAIhANzHGa3Sn4vqJ5Fj6uWowClh3VgWUrecf9HcGB6GbtrNKv8DCCoQABoMNjM3NDIzMTgzODA1IgzcyU67JoUWc8tTcHkq3AMSCDZ5uvDO7Fk3PUFTjwBE3G2PTEPlLVVoxiEH%2BonDJTLDr2O2XnzJaBONahgfU6tJf64I55vTA1eeiaU%2BzN%2BDyVqsp40WM8y3IbjBiK9p37e2%2F5gGSNGb9NH9By51mxqGlQlMsQ%2FkILeToX1EIM2KvIvoOdguM2W4Ex48LTLdCvFev27%2FvwGtt2rm2467XwrOwBd3dMj4xFytoxz5giZocIyMY9bVIVa%2BlVzdm%2BcEotnGvPf7DfKIXpSr2raThsHH%2Bcolo98cjBQNrvDgx5VgpNhF12OiWbhSHucHm5d5Y8ayiCGu12n75mwQquWH1l7g2ob%2B%2B2r%2BZ2p5DHmYbiO1fF5s9VA5hePYSZe6uHTEjn6pLSfS7jFFS353tRZcPa1cpbwYbfREFLoj77B%2Bx1yRf34xcemP1jXhicSzh%2BNIvq3Y%2BGTRzLhGiy6iuBiV7c8b7BX9mdRBxXUMHOsDavGblplNObXKdnyAKTqFrKpNPmNKzAqk0xjBVFeX2WCaPUtAxB7thA%2FNpiiZ3Odinm3CPlGhtfVuZ6ZDVhSr87ZgoARZTXyALk%2FvBpPvvXqdB7Rc5JXnnl8KOCNMlndet4ECDfnj%2FAx0WBFJ8%2FtJM%2BbdjFghLs8%2FdkDLYhHH2jCLvp7DBjqkAd%2FwRRZF0OhMN3Jg4ngc8qGE%2FLkn9%2FXORqDw5q5UOrf4LtqIodXKX%2Bb1TUxSzgVyqz3Ro4pKIcn6paYJay14rRW7aCtljLWT6CyY%2BN4gFG4RBIgWxH6HbJ%2FR18GKEqXXIrZ6g2AWGQAOyFoixMkUK3z9nlzlwNYH9RbxhrVeOlmPNgNKqkE198gMorMVFOrX7ptmpj%2BB%2BUkVwiPxDvpoP%2B2TT2ni&X-Amz-Signature=290ef97822e47700cf196684ade4b5f5e740e1c597de40a09a32bdac87559579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIKRIIK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCT7JA4317zkSbdbITmq4txp1t3jGriq01Gwpr8XpQAlAIhAML4nYPTismHs8TMV278iLWxQuXHrr1yOf4zUWxf1UUCKv8DCCsQABoMNjM3NDIzMTgzODA1Igz%2Fvu%2BTaE0fWvLJvZQq3AMjCFJtN9bOEjMD5vzN9%2F8sfbJuNgVPmor5C0faVVc3w2vRCFMr7bZkfOIjMXr307qcD9lfsXmd6iwyGNYJ91IvaW2pF%2FA1kC9fPS3T7Edwup9Gr78KPuiyfZ%2F9h9oFS18kcZIikm0jn6lYJXIzvTYkPdj9%2BEoqByUF18clmDTHwJ4XomHiRJ21BjrxO%2BMS8V%2BRmqkHWvrh2YATVX8YP8Nlvgo1qVsrCOHGOBNsJ9k6EwHHKvJqqFM82IIgLCWe4kvdXBh2to4X4wNE13vppkxSmVvgtvmgIILvASdBEROObFSk0ynAxiph4Sw2b8rDe%2BXParXQRu3kOoJtO1vtN4UemTGAvZB4ZS3BpwyynAGuyVDipgfAqq0fyny0ln4g8VuUSgJIVKfapNWpgeVJnGdiONBfV71aXiJwIu%2BuA66DBblS6vbup1szHAykQSJHb1frH5F9S0IkcDiFz3F%2B3p7OyZScoZvkrPkMYKvp5CgYes7Wmkp35jUfJ%2F1CRmqWtOD7AOvn%2B%2Bh4MNLTWkmcV8pCnnAYpHcHOQzpvqVV%2B0hBTS9BZkEPbtlhTR5leeOdN%2FQEeBWvuWLewStfQt43otXpQ7WEZAkGVdwCt%2FljKaM8Yyieg%2FeaRNAiEk4SiTDtvZ7DBjqkARIRJrJVSfSQvz7%2FSlTfxXWdwd0fXqfrp1Hd4ULmvcSKAC3udIa94ojvmpHwdVcEzkOxEDd9cCYldqMJr2yZq8F9FGHlbeExMZbwKOESm7OBH%2BmWl0YcPtFJkit6EutpfZwz5yytEn6iyG7TngIARMlZQrhTqUcJVTpI5%2B5WpT%2Bc%2BxykHoa8pBL6rBQFLghNLR%2BIP8tv0cW4IxdcBQgT9Wos8qBa&X-Amz-Signature=0c37fd15665a2b53bd479a4f9ae46ed238c37dc591286989c472ebec1dc7edc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWL2AEXL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHmhiaW0jQWBFxTRrLSOPBHTYyrGy3mMZhpia5seVRbtAiEApiuPSYY%2F%2FjdlmNK7oKeISqYOZ%2BbbMNZHLuxpxlaAKnUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNPqmD0kHn4kqBGflyrcAwcLZCO8QTXVQl8mL%2Fr2cjAkLg%2BtycnAHLOBH9MNzWc%2BKyN3AHhNLXzoFu4Y8ZvGNswC5O3oEOPaF5sx3pjE51Ri7Bz9MVPzokooaFyGIu2hysDGLhbFzEgYyHSMp4TC%2FAZcQw3G%2BDAZJHv4fsvmpBMPcpo9wn0EbH5j7vIn1bm1IBkC6u%2BPPBWVtL%2FX%2F0gpyTPTGqcGQr10ryJ6glRMyXXG65vfX543ZH6kwGasuNGpZcx0K00OZFiFoNwmh0hfprSG4RCp2%2BZO40IQV9CD2%2FhC%2FCvSS%2BC7Of721TuFDEGz4sgQ%2Fo1RyWnxl7D%2Bvnxl9%2BTPSHEImwOMsPSSo6yP3cEyI%2Fez1YgZv505YO6ULqF%2Bl1RBJc51NG6aYl1oDKIrzufncVfuXftXgA%2FnYRNtqtmxSECUw1iC2N1EfBMLko8jQFe55LKvCI9DX4jbBu7QpV87LsojOmq0w%2FDMif9csRbSBI4x6Ix6VX20QtmDWgxlk5M%2FT4md%2Bmtl8lu4eT259IjfGwXGaKQj3JSiuKhZyxgisVGb0do%2FXs6Mb96BBI3x3%2FzdOQMvJ93%2F7KTaiE0lglD%2BIGsc3Tk8yvJfEiaYKUmUDcH9y%2FDULsNY9B0nBZEhfZHSQKgWdZCmNQelMKq9nsMGOqUBezmIJp6Kmw0kFx0w1o8sd1AEo%2B0mCZud2YXpMzqK59b3ZZldNBEcf6hLoI2cIOQuA4TWObckxzRqWC5qrABtD2AxuJJv55geO5T0KiCYmet%2F6aDYJIWZfWHoqXD8NO9E29ymlePbH3vv91B9QiGL90aUACzAXnp2QRyNGoT4jJEQVQ2uy83nGyd85ZOxTN5OsBKpyFbGP05M1wf0JSul4AzZ9Ksd&X-Amz-Signature=a1b8b7d5d8e366c5dd886eb7d45f9ec3d13da6f1171e110927a4cc870592d6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAMWLOE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC3%2BRvbOA%2BgRLyhVMBvqfoYl5aBv5EwoNlVNwmmOO86BAIhANzHGa3Sn4vqJ5Fj6uWowClh3VgWUrecf9HcGB6GbtrNKv8DCCoQABoMNjM3NDIzMTgzODA1IgzcyU67JoUWc8tTcHkq3AMSCDZ5uvDO7Fk3PUFTjwBE3G2PTEPlLVVoxiEH%2BonDJTLDr2O2XnzJaBONahgfU6tJf64I55vTA1eeiaU%2BzN%2BDyVqsp40WM8y3IbjBiK9p37e2%2F5gGSNGb9NH9By51mxqGlQlMsQ%2FkILeToX1EIM2KvIvoOdguM2W4Ex48LTLdCvFev27%2FvwGtt2rm2467XwrOwBd3dMj4xFytoxz5giZocIyMY9bVIVa%2BlVzdm%2BcEotnGvPf7DfKIXpSr2raThsHH%2Bcolo98cjBQNrvDgx5VgpNhF12OiWbhSHucHm5d5Y8ayiCGu12n75mwQquWH1l7g2ob%2B%2B2r%2BZ2p5DHmYbiO1fF5s9VA5hePYSZe6uHTEjn6pLSfS7jFFS353tRZcPa1cpbwYbfREFLoj77B%2Bx1yRf34xcemP1jXhicSzh%2BNIvq3Y%2BGTRzLhGiy6iuBiV7c8b7BX9mdRBxXUMHOsDavGblplNObXKdnyAKTqFrKpNPmNKzAqk0xjBVFeX2WCaPUtAxB7thA%2FNpiiZ3Odinm3CPlGhtfVuZ6ZDVhSr87ZgoARZTXyALk%2FvBpPvvXqdB7Rc5JXnnl8KOCNMlndet4ECDfnj%2FAx0WBFJ8%2FtJM%2BbdjFghLs8%2FdkDLYhHH2jCLvp7DBjqkAd%2FwRRZF0OhMN3Jg4ngc8qGE%2FLkn9%2FXORqDw5q5UOrf4LtqIodXKX%2Bb1TUxSzgVyqz3Ro4pKIcn6paYJay14rRW7aCtljLWT6CyY%2BN4gFG4RBIgWxH6HbJ%2FR18GKEqXXIrZ6g2AWGQAOyFoixMkUK3z9nlzlwNYH9RbxhrVeOlmPNgNKqkE198gMorMVFOrX7ptmpj%2BB%2BUkVwiPxDvpoP%2B2TT2ni&X-Amz-Signature=2f1673abc3f680dd5e7ff43e79a6a5bd6c2ceabe3960c3e12cdcd1c8d6aa26e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
