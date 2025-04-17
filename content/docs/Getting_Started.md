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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6TFFN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlBbzZnMc%2B%2F5L8iUR9Gvo8NAPUIsdEBLkbTayTNqTnqAiEA7%2B%2FX3CafBAQCNzPjD1OTVUsuncLuynpLmJXEH1xHEWAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI9iKngJHi6I08SYkSrcA1NHtF49dwpjdqS12yQGW7uTm8JFxi%2FV57xuaQFYGfoHng%2B6HlQAIYeArXmUp6CcWEuzWvZlBWFoG%2FFU3q%2F6n3%2BSrmUwJTD6JkDiFYBie2Ab4gF%2FxeBhiwoEHgTpo8opXw3v%2FVZ6MN1TAE%2FHWpQRjEiUnnkE9uNGpyrl4jFpw1Or3KEU95Rboji9s5rXlQh1OuDVbB1sfONvw9vqhILOAlVh0d3CaRja0cXv1O1oc2SBQiqy%2FGboT6ePTqvPjveGHs96BotFDMwcaNpGWiPExIBxtdnPn6XTwglBqaDjj9AQ3R5OyieNmK4aVzkolwa5YzqqsnXFXlbLeX22Je%2BLM3CCP%2FolpPJyGXmyGeNpg0V9QvTMEwVh21ai%2BS8iOcgvAq4un5F6rWJBqf8UHBzyzzlqCxzKAbfUaGFPVwVURvC7stKyW4bLVu2v1fdwQgH8D6zFtrupyDxJv4zziVm4v%2Blxv1lmUnVQxBFqUZku%2Fp7Stm50Tpa6xYMJLvLutFA%2FVcz5KkcyYzDAX7RmqaleA8i0VX96V9%2BbGJgEhbD3BbzaQG3UEmW1%2Bw27no3w8jtRibrtPFq%2Bsxrd2EpAemivuOxpB7zYdoVJIMsCnfiAqICTCgt%2Fr4Hu8pN8tvq5MLT6gcAGOqUBkgoI3I4I2ktY92siu%2BKNfSHMgCtnceTb1i63G0S%2FrAU7KNe%2Bx%2BTExpoJxe8eWOn5kJSQazuDlcgX6uoGwIz6zpAFUEJSBIc30eNExDWF76g%2BjwGgYcw7AZUcmQJ6ltaas9OVH4iJ9QPrTbWkKSJiZVJklMluprZyiARiMntmLMUYmR1uACUcMJh%2B%2B%2FYG1EOdOi2SbwK7azSWTi9FMjN%2FPA16tyT%2B&X-Amz-Signature=77af467cc0cd0a616746ee6c15271f8b6a7581ad5b04ea11de42ab5e7323379d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6TFFN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlBbzZnMc%2B%2F5L8iUR9Gvo8NAPUIsdEBLkbTayTNqTnqAiEA7%2B%2FX3CafBAQCNzPjD1OTVUsuncLuynpLmJXEH1xHEWAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI9iKngJHi6I08SYkSrcA1NHtF49dwpjdqS12yQGW7uTm8JFxi%2FV57xuaQFYGfoHng%2B6HlQAIYeArXmUp6CcWEuzWvZlBWFoG%2FFU3q%2F6n3%2BSrmUwJTD6JkDiFYBie2Ab4gF%2FxeBhiwoEHgTpo8opXw3v%2FVZ6MN1TAE%2FHWpQRjEiUnnkE9uNGpyrl4jFpw1Or3KEU95Rboji9s5rXlQh1OuDVbB1sfONvw9vqhILOAlVh0d3CaRja0cXv1O1oc2SBQiqy%2FGboT6ePTqvPjveGHs96BotFDMwcaNpGWiPExIBxtdnPn6XTwglBqaDjj9AQ3R5OyieNmK4aVzkolwa5YzqqsnXFXlbLeX22Je%2BLM3CCP%2FolpPJyGXmyGeNpg0V9QvTMEwVh21ai%2BS8iOcgvAq4un5F6rWJBqf8UHBzyzzlqCxzKAbfUaGFPVwVURvC7stKyW4bLVu2v1fdwQgH8D6zFtrupyDxJv4zziVm4v%2Blxv1lmUnVQxBFqUZku%2Fp7Stm50Tpa6xYMJLvLutFA%2FVcz5KkcyYzDAX7RmqaleA8i0VX96V9%2BbGJgEhbD3BbzaQG3UEmW1%2Bw27no3w8jtRibrtPFq%2Bsxrd2EpAemivuOxpB7zYdoVJIMsCnfiAqICTCgt%2Fr4Hu8pN8tvq5MLT6gcAGOqUBkgoI3I4I2ktY92siu%2BKNfSHMgCtnceTb1i63G0S%2FrAU7KNe%2Bx%2BTExpoJxe8eWOn5kJSQazuDlcgX6uoGwIz6zpAFUEJSBIc30eNExDWF76g%2BjwGgYcw7AZUcmQJ6ltaas9OVH4iJ9QPrTbWkKSJiZVJklMluprZyiARiMntmLMUYmR1uACUcMJh%2B%2B%2FYG1EOdOi2SbwK7azSWTi9FMjN%2FPA16tyT%2B&X-Amz-Signature=f41349a66899b6ca98980d560ef9d9b749106bddf31ce259da308b7333b18dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GQDYK3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgIfTV1yJpALWlgONVDOAQEhK9ka5IXC8nUDzltcKqDQIgDg2A1I9nngQFbfuaAX7YVvH61z17bPJDhQ9xcJpJolAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNQWPX3NIosnDm5DyircAzTSdwk8r6nMEqPwWDqqByU14GK0nCDxgt4nilXwr54HTn0uei4mv2JrA6Un78VUmtgO4nDJdeu0lPFwrA7os495Oxha%2BMIjkqP0u9AEqkpJWW7xaUgYwuZuOFoZswxrpZAjrqenN5pGCxV9613kiVCQHchUVcV13H5l05PACWLN3dX8ccOQey7eos%2B5PU1qXfJ3roYn9tB%2F2RQtkrd82y1bB3SNmOmGOY91Q3xP%2FneGdK%2FhhEqCLkYwDy9aGNbNWm%2BK3LCh%2Bq8hHz1vgMTj61aXVBiOFOYlGP%2Fcv0ta%2FXswolzIQkVufal8b9sHiiZaP3CrF%2B7nPMyPetItu6%2FnQRZEfji%2FWddeZSOb06rU3mSZ8n0JsFA0cxHlEjRr43INqui%2BCnDzYQ0uX%2FXzkIJdYw0G47acJLO%2F%2BvxL881YeSci0yCzALo8noy49PTtYyl%2BSWo3Yp1bX5zMio9nGr1RaxiwdwN4dn8paXPUmexphZ6yguxGnxrvbA8DXh%2FQ7ohXpAi9XdZmPOMA5LFID9B75HG2p3rzMNwe7ZWFQzuvhX7r3yselaQpoYXp9hwIHBYkuCv9wQ5shVs0p4AzNz4pw1Hp0r4PZz8ngoykjAsZUqMMLwZu%2BatXi4c5%2FgsJMOf6gcAGOqUBOviy1Y0ZlQziVb5IAAskRyDMxS4Aq8dy5UtmF%2BNt3bx4sRt4WpSNQddwRwHUrA4GiZUIK74idgNSecmxLRdqQ9uJlttNatM7q545%2FhxayT%2BbacqMOt7bydg4A2VYQU5MfMb4Ws0%2BM7PP8t6hlohfqbm539Wdpy3aqgXI73yHCVWaZBN5KVNFzugIcJ6oGP%2F1WpurGalS%2Buc%2FbUUK13kcXWoexOvS&X-Amz-Signature=18e9bc5350345a634866d8c566b1c974a2cc807d8b18fa4e685b42a0e4f93d98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSESQMNM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5f0r2vwaTZ6sPfu0UFmA9cdh1misZj62QwW%2Fg037IFQIgZP7eMPNy4dOHiBthiQAA9Cozt4WGdUcWNmvblbOH57sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDcTvcDRyh4X%2F8Pa2yrcA%2B6F5ZzeOOaKHvxI9xUgUIC7QcfJ%2FuTZdStvxsGhftHdjYAE28nwNEySlaE2zY3HM4aawcSAxiBBXAhg4gop1Tt%2FAVq8PpL5uf4qmj15KppEEpj%2B%2BkXy7O4nZJAtPJQ67IY7w7IPJ9nahWZ5By%2BvOipmNXFFfHz2GSJNWr%2BcAZzFrSn5%2Bpc%2FfO7diIV7k%2BWTDJqqlAih2wWTYZCcSGsqbyoOCtC8Sks3wbQO%2F1NcWEZG9zwlfpE8zOeSKONd0sB6260i5%2FLTYxXF4CPAoq%2F4Xk50%2BbVOjSIAAbQlpD%2B6TKCeY5MtYAVUjQBSx3Z10JV0Id5Wxx0exHOqUpI8ILndyEM92iG7OysYRKfUr%2Bv8gOZdH6IlhOnVMwgvsTvOBFj0yBVdpeMIsbFaXrWkFQEmavAzdyqRgLpbcSb97m08p%2FaFi2TqYmHHK6u0IkPs%2BTa8n5LT5KOnyY%2FoukerxZnFyfyIyoNU42woMKdaPhgYvv09I9aP2YvN7eIEMruhuoBg5Hh9M%2Bs3%2FqVcZLbp1L%2BRGo0J6m2ZLL%2FmKVwO7%2B9fNz9CbaR6VHa8M77eTodS4W3vF%2F%2F0htoW1bC8xgmgo4HJeBZIgYUCK46xRV2gxmyXWse9ogt4o0iyI2BJ69y3MLD6gcAGOqUBW6Q8g5O%2FKw0PNaF6UvQ9ihG2nqEXgYVWB0yehM92%2BdntoawywaxTnlGKUwxdGWmjJsAO%2BGi7J8zIlphveDKtTPaxe4U7Fxs0e9NezbcQ6yiTwgWNzyLbD2DV7a8m26A%2BT%2Fb7HZPBUKIfzvhnTJisSPHH%2Ft4Cw34mskIVxA2sj3bv0NJP774nIY8Edv%2FoEpIxyHNfUKr9WOepEsj8ZrNalirgMgGS&X-Amz-Signature=5a07ade93978238479fe5aac55c8bf60708353fcd67663c2e091954e4004daf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU6TFFN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlBbzZnMc%2B%2F5L8iUR9Gvo8NAPUIsdEBLkbTayTNqTnqAiEA7%2B%2FX3CafBAQCNzPjD1OTVUsuncLuynpLmJXEH1xHEWAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI9iKngJHi6I08SYkSrcA1NHtF49dwpjdqS12yQGW7uTm8JFxi%2FV57xuaQFYGfoHng%2B6HlQAIYeArXmUp6CcWEuzWvZlBWFoG%2FFU3q%2F6n3%2BSrmUwJTD6JkDiFYBie2Ab4gF%2FxeBhiwoEHgTpo8opXw3v%2FVZ6MN1TAE%2FHWpQRjEiUnnkE9uNGpyrl4jFpw1Or3KEU95Rboji9s5rXlQh1OuDVbB1sfONvw9vqhILOAlVh0d3CaRja0cXv1O1oc2SBQiqy%2FGboT6ePTqvPjveGHs96BotFDMwcaNpGWiPExIBxtdnPn6XTwglBqaDjj9AQ3R5OyieNmK4aVzkolwa5YzqqsnXFXlbLeX22Je%2BLM3CCP%2FolpPJyGXmyGeNpg0V9QvTMEwVh21ai%2BS8iOcgvAq4un5F6rWJBqf8UHBzyzzlqCxzKAbfUaGFPVwVURvC7stKyW4bLVu2v1fdwQgH8D6zFtrupyDxJv4zziVm4v%2Blxv1lmUnVQxBFqUZku%2Fp7Stm50Tpa6xYMJLvLutFA%2FVcz5KkcyYzDAX7RmqaleA8i0VX96V9%2BbGJgEhbD3BbzaQG3UEmW1%2Bw27no3w8jtRibrtPFq%2Bsxrd2EpAemivuOxpB7zYdoVJIMsCnfiAqICTCgt%2Fr4Hu8pN8tvq5MLT6gcAGOqUBkgoI3I4I2ktY92siu%2BKNfSHMgCtnceTb1i63G0S%2FrAU7KNe%2Bx%2BTExpoJxe8eWOn5kJSQazuDlcgX6uoGwIz6zpAFUEJSBIc30eNExDWF76g%2BjwGgYcw7AZUcmQJ6ltaas9OVH4iJ9QPrTbWkKSJiZVJklMluprZyiARiMntmLMUYmR1uACUcMJh%2B%2B%2FYG1EOdOi2SbwK7azSWTi9FMjN%2FPA16tyT%2B&X-Amz-Signature=8b2ec8d0ccafcc85dead4c00f1bdb33e35efeeb27c65d59ad110046233a0d5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
