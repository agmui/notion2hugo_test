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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JL7HSQP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQZXbF5bAw3UmfjWpyF6QxOgWg4d54rJ9he0MIpEcxawIhAJ8KKBPiB1RuA4TSgetnN0wdmA7zhsBnnvo5yJA%2BOWauKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUUreYo9vPLKecPHYq3AOdO85Ba7rW1OEX2x1xm7ZURmnj2ywzMWvVGAvwiyd4r%2BE5t46epFDg%2B2S1tDZabQglPH2GJk5x6%2B%2FRimtG24mXs8Daijjwuo60cicrfVqfmsayKLT9RWAwoRPkDaYK1DrP%2BIIZPr0lPNvKH34DtksIDej6mllPX6vX3lmRSsY3VnVUH%2BW7drslB1NJqS0ZToGP161sPT8j3qkY%2FmVZUgcl2R%2FZCqGw8KI9p9M8B2Zgo%2BkcUiyHsIDsY3VTo385QR87ruCZoM8iXpRTK%2FGOVz1zd5nijPvwNymUyLVShI%2Bqg%2BfAkX5vA9gYsNdqi0LdYoQ%2FEdR8Rtr7EfmPdbbM%2B%2FpUmlrDAUlXNs5rJDapKHR99bxl8553tEPPj3RQzW2E%2BzYziu%2F1Dxs4z%2FzpFvxa%2FxCZctJh8xZpSxaMPNAsO1bRVc%2FF1t8%2BbA5UWhnB75wfAmph%2BeUKbW%2F8K7HDpUhV6ABwh4ZjnzPk%2BeYS1sj75HyYQk53sn59ZNikABIwDipNyD3nX2GRf1U4oAFTMcXmk5z8qAduq4H%2BKLEgsl5P28LDJDrnNw9O4a%2FAihcgZDUIapK%2FZl0OTU1396GyZD9YihU5BF9ndQVFeMQ37mHnKiVtot3%2FDM5%2BImqnSasemTCG0p7EBjqkAZjPk4xxHOjgBpkSx4%2BgAxR0S%2ByzoBG7fMmBXx1PVNdec9ktGXShX%2FY4FdAjfDDwqZemMk4%2B%2F9dnkp5HPHOho4toyLYT6u8IRZvnSLLftAIDSlp2dCmw2t977OD6Ft8jhw20Hc%2FbDf0Qm6M80fRJniVCR%2BSDEugIbL6EiduFNLuMkN97FbJMidfLKEFVi%2BKhe0ywYVVClRJNwbI84m0EG9WkzLzN&X-Amz-Signature=405f7f0826bc9570269071423d452ba11bf5d8661956d9cf59011ba33ba0bb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JL7HSQP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQZXbF5bAw3UmfjWpyF6QxOgWg4d54rJ9he0MIpEcxawIhAJ8KKBPiB1RuA4TSgetnN0wdmA7zhsBnnvo5yJA%2BOWauKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUUreYo9vPLKecPHYq3AOdO85Ba7rW1OEX2x1xm7ZURmnj2ywzMWvVGAvwiyd4r%2BE5t46epFDg%2B2S1tDZabQglPH2GJk5x6%2B%2FRimtG24mXs8Daijjwuo60cicrfVqfmsayKLT9RWAwoRPkDaYK1DrP%2BIIZPr0lPNvKH34DtksIDej6mllPX6vX3lmRSsY3VnVUH%2BW7drslB1NJqS0ZToGP161sPT8j3qkY%2FmVZUgcl2R%2FZCqGw8KI9p9M8B2Zgo%2BkcUiyHsIDsY3VTo385QR87ruCZoM8iXpRTK%2FGOVz1zd5nijPvwNymUyLVShI%2Bqg%2BfAkX5vA9gYsNdqi0LdYoQ%2FEdR8Rtr7EfmPdbbM%2B%2FpUmlrDAUlXNs5rJDapKHR99bxl8553tEPPj3RQzW2E%2BzYziu%2F1Dxs4z%2FzpFvxa%2FxCZctJh8xZpSxaMPNAsO1bRVc%2FF1t8%2BbA5UWhnB75wfAmph%2BeUKbW%2F8K7HDpUhV6ABwh4ZjnzPk%2BeYS1sj75HyYQk53sn59ZNikABIwDipNyD3nX2GRf1U4oAFTMcXmk5z8qAduq4H%2BKLEgsl5P28LDJDrnNw9O4a%2FAihcgZDUIapK%2FZl0OTU1396GyZD9YihU5BF9ndQVFeMQ37mHnKiVtot3%2FDM5%2BImqnSasemTCG0p7EBjqkAZjPk4xxHOjgBpkSx4%2BgAxR0S%2ByzoBG7fMmBXx1PVNdec9ktGXShX%2FY4FdAjfDDwqZemMk4%2B%2F9dnkp5HPHOho4toyLYT6u8IRZvnSLLftAIDSlp2dCmw2t977OD6Ft8jhw20Hc%2FbDf0Qm6M80fRJniVCR%2BSDEugIbL6EiduFNLuMkN97FbJMidfLKEFVi%2BKhe0ywYVVClRJNwbI84m0EG9WkzLzN&X-Amz-Signature=b911caf64bd3b77239538ef1427251fc74b41f448bc25d61f99ad3916ffab664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JL7HSQP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQZXbF5bAw3UmfjWpyF6QxOgWg4d54rJ9he0MIpEcxawIhAJ8KKBPiB1RuA4TSgetnN0wdmA7zhsBnnvo5yJA%2BOWauKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUUreYo9vPLKecPHYq3AOdO85Ba7rW1OEX2x1xm7ZURmnj2ywzMWvVGAvwiyd4r%2BE5t46epFDg%2B2S1tDZabQglPH2GJk5x6%2B%2FRimtG24mXs8Daijjwuo60cicrfVqfmsayKLT9RWAwoRPkDaYK1DrP%2BIIZPr0lPNvKH34DtksIDej6mllPX6vX3lmRSsY3VnVUH%2BW7drslB1NJqS0ZToGP161sPT8j3qkY%2FmVZUgcl2R%2FZCqGw8KI9p9M8B2Zgo%2BkcUiyHsIDsY3VTo385QR87ruCZoM8iXpRTK%2FGOVz1zd5nijPvwNymUyLVShI%2Bqg%2BfAkX5vA9gYsNdqi0LdYoQ%2FEdR8Rtr7EfmPdbbM%2B%2FpUmlrDAUlXNs5rJDapKHR99bxl8553tEPPj3RQzW2E%2BzYziu%2F1Dxs4z%2FzpFvxa%2FxCZctJh8xZpSxaMPNAsO1bRVc%2FF1t8%2BbA5UWhnB75wfAmph%2BeUKbW%2F8K7HDpUhV6ABwh4ZjnzPk%2BeYS1sj75HyYQk53sn59ZNikABIwDipNyD3nX2GRf1U4oAFTMcXmk5z8qAduq4H%2BKLEgsl5P28LDJDrnNw9O4a%2FAihcgZDUIapK%2FZl0OTU1396GyZD9YihU5BF9ndQVFeMQ37mHnKiVtot3%2FDM5%2BImqnSasemTCG0p7EBjqkAZjPk4xxHOjgBpkSx4%2BgAxR0S%2ByzoBG7fMmBXx1PVNdec9ktGXShX%2FY4FdAjfDDwqZemMk4%2B%2F9dnkp5HPHOho4toyLYT6u8IRZvnSLLftAIDSlp2dCmw2t977OD6Ft8jhw20Hc%2FbDf0Qm6M80fRJniVCR%2BSDEugIbL6EiduFNLuMkN97FbJMidfLKEFVi%2BKhe0ywYVVClRJNwbI84m0EG9WkzLzN&X-Amz-Signature=4fced137666f5ab3ed97d4383916d2d7d43228ac646c52ae9a53f3ac673a329b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSTTGPU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB3v6G2%2FdJrHa9XvWawGOlshl4t0fYyAfliIRIZJApxgAiAONuyd2FijN%2FH84ABe9Skuj58eG4rXgfjD2avkpPzJtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zd5Sm2Rr27FClVhKtwDHsuPkc4AFkfy08Y6%2BaUYaRdBpaitJ60bsRFqg75KE%2Fc9gTbE89qCvyM9GBsT%2BJg7umJ2xDir7yCnLrdrzUtIh8iFfUtbYyREXNMubQLAbSb20AogFhrbccbwFnwgmKwnIZ6eNux%2BPhyz0hbdaTJq9%2BgqZWnHIS8x9IJauMGXl3NhsWzWgr3lik8pl4Luw%2F%2F1xQdrtZgGMBska3QbYOHV8gsTmW0kxPRyYWZonDXRV2NNrxrwtVmPjifC4wktsA1LcTcrb7JgIKMv8ZgoIIQNmfh8rO%2Bbnvn9GGVFX1JYSerpuZ%2Fcd8nnc9VE0pBKujMtLJy3sMC1DC95rnMab8BOupH5aDaFxdBPktdCr3B%2FfxaBNhcbU%2BwVOqA5epHOeaW9FdmL2t3EzcjQ95G5FnGJaxZ1DXcErpqp8eHMHTXFknd5WJQRA39%2F2YfD3Uy%2B%2BA4vMVy%2Fuk1eD%2F2wWmqENnNeyr6XNr6yyE2BoO9jaznK3w%2BJvEbyeMNR5IVJTL8HxiGCGUmoGvNss%2B4bHTQC9qVUm9YBpVaL6ruiO7OojAshOaMMSAFLNhFIr7dYMT3lgKDlfPV3IR9G6cGVsJVVwDw0CVvjxgtxq7%2FCdu8M6MWT7QHuzXERsgXeMyXb9Csw8dGexAY6pgFV0yqR7bA5qBz0allNZEHfoXsMk8wu%2F3rRNbDEPSicqyyOfgBoeyJptWzH3IHJVl0o0ZMS6cEf%2FDf95iM9Q2eLWBjOXRbciFVDHADH1TfCQIvQ5RWBP1sGRZGSnzXv3h3bQnBDck1c%2FWpQALpdfQAjXD5e7oLkXhY%2BfqzMMiFUpVlvX%2BdkF8gKvo69ETCsVoq%2BaaExKWGjLW3%2BHmr91lQmctoJyglQ&X-Amz-Signature=c39304cdada6a6855b54981d548ee8d09d08ac1d73d7a0213afc3ed6c757307f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5AGDTEX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFIB0lba1iA9hPJtxL7Jw9qSJ63flAoV9aPiQaXVc11zAiBqx719vHsPQBqIMSrmKj2IEDQnxoOWbkOC7LocvQCORyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZPp0trC1HrCwMGsaKtwDy2zJCIWh3aPjixaGGzwiQi4Vssq6GH%2BVJKwIn7YwjYDc7dt06C1PbmpM2dqAvK4s2ufYWA7mWCMZAdTRT7MbYuWqO9e4BM5HyGzuP8LONI0csZ1hEGIZjE5IlNpHoT4cS28PAvtd5hWw17DAcTn5kCbW0gF71ZjFEUbXO75y35R2CMceZdLpRHvKBujBjOQ5aUK2wjvzOF%2Bu19jGkIRTw8saLpEhCxbk%2F%2BL2P7yKmot3wkcxRAdwY3PyuLx4D4GlYRuyrumDZn%2BHfh8qIPCHaNfficTklMPgO1r0HjOFCjU4n%2FNOx5jKQcTAxOAd82moCRzKB4xbPZl0OdAv3ngWVbsg1Q8Kjv7CDQFIdzs3dJwgR%2FtJ87DQhMd0wNEhvfio%2FWjw1u2fge%2BjKmTi26yg784velPFHXRsg2oNKXeLKYUuwcQWXkFUpM2eKEEWlRI20W0oZXsT8WwKLr7EtLDxm0W65uwOECNjc7QeDNL6ei%2BFCx1t1AA%2BJc4BUtNqS7L57AttCD9086yl4eABQnyucr5dmDr2kTjJw%2FO93GuFadm0H4RSjsAyK3iYBSpzIyovsa7rC7IBupidfmZeGCEn54ZEvw%2FMMd%2BeWGkzA3j62oKd8s16wEe9E7TxKw8w6dGexAY6pgGir8a%2FX0q4fM6Z44GGL3dXtGaFqErDtyZmscr%2B21vZFsYA851VHNuKA8ymfKtFiN2iC25VQVIlIyebMu%2F9KVobNJ22mt7gnzU4NsfLrqocH30qQ5jU0i4vN9%2BsdIaFvPD9hzQo0MWUH09hLwbBXXpucXoo4VQYG8Xo8Vy0iVD6z3YEFn1jfLI0eX%2FND96TAnSHqiw3ZY7r6ihtnAh9gYotO5augj88&X-Amz-Signature=27d75b63665349a4ac2e37b0ef7f762867cff0617193a44859feba1954b3814a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JL7HSQP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQZXbF5bAw3UmfjWpyF6QxOgWg4d54rJ9he0MIpEcxawIhAJ8KKBPiB1RuA4TSgetnN0wdmA7zhsBnnvo5yJA%2BOWauKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUUreYo9vPLKecPHYq3AOdO85Ba7rW1OEX2x1xm7ZURmnj2ywzMWvVGAvwiyd4r%2BE5t46epFDg%2B2S1tDZabQglPH2GJk5x6%2B%2FRimtG24mXs8Daijjwuo60cicrfVqfmsayKLT9RWAwoRPkDaYK1DrP%2BIIZPr0lPNvKH34DtksIDej6mllPX6vX3lmRSsY3VnVUH%2BW7drslB1NJqS0ZToGP161sPT8j3qkY%2FmVZUgcl2R%2FZCqGw8KI9p9M8B2Zgo%2BkcUiyHsIDsY3VTo385QR87ruCZoM8iXpRTK%2FGOVz1zd5nijPvwNymUyLVShI%2Bqg%2BfAkX5vA9gYsNdqi0LdYoQ%2FEdR8Rtr7EfmPdbbM%2B%2FpUmlrDAUlXNs5rJDapKHR99bxl8553tEPPj3RQzW2E%2BzYziu%2F1Dxs4z%2FzpFvxa%2FxCZctJh8xZpSxaMPNAsO1bRVc%2FF1t8%2BbA5UWhnB75wfAmph%2BeUKbW%2F8K7HDpUhV6ABwh4ZjnzPk%2BeYS1sj75HyYQk53sn59ZNikABIwDipNyD3nX2GRf1U4oAFTMcXmk5z8qAduq4H%2BKLEgsl5P28LDJDrnNw9O4a%2FAihcgZDUIapK%2FZl0OTU1396GyZD9YihU5BF9ndQVFeMQ37mHnKiVtot3%2FDM5%2BImqnSasemTCG0p7EBjqkAZjPk4xxHOjgBpkSx4%2BgAxR0S%2ByzoBG7fMmBXx1PVNdec9ktGXShX%2FY4FdAjfDDwqZemMk4%2B%2F9dnkp5HPHOho4toyLYT6u8IRZvnSLLftAIDSlp2dCmw2t977OD6Ft8jhw20Hc%2FbDf0Qm6M80fRJniVCR%2BSDEugIbL6EiduFNLuMkN97FbJMidfLKEFVi%2BKhe0ywYVVClRJNwbI84m0EG9WkzLzN&X-Amz-Signature=816e512ad3899e03945f2aa31d6c89c2fb01a63bb73a88733096aa18bd62607e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
