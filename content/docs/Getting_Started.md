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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZWMMG7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDIK1LxCASjn3rfjwyWQ32x5EHsBJBsuVR9MH%2B3ZkAHlAiBxG8NNRDosvuFgdal%2F246ky1fDKu8Hv8MrVh6azYxyiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHMMiAO8cW%2FN3fwtkKtwDqsl9BGdKYeQYLlvrLfTNX6QTo42MlrOphCKbP53JiJ22q5GtYrLcyoEfep0uAjrnohsC7%2BBb0KvUIBYQDvTyeH4fOSq93Aw29e7071qaAbMc1TSSdyVsERj7VRKzqb9O525r%2Bjs9eWXKO7xgP5UEqxI141eYM%2FuZFH%2FrMY8WLUShxVr0fderWTK0ieGztmRmstEtgmZXJsKJD15Zr2xVf8jm3SHBurn4oFx79dnUFCoXexdNOIt79LMcpKbM3vNsUD4In4jSz00fA8jBMVIeqXgIbhdSLQzmEWBeEXbXeCzB2pvoZOYWFb0NQHvXOeyPGOSlc3oUe33YHsUsq2A0mVN1FfqWJeuBWxjPomsD0Cnkc6q6vCayVgmvzLUHLV5pXCJCiU8HJVb5Kuid299MCK1yd8mTEKx%2BaA3jzdcdfRZuQu0oJdARd%2F9x%2BvpIum9WANPD6Xfj5sGVLyI2gEyW3BeAZiYFNFBVPLnpZeoJC16TW45CKvcwewLS8gletE8wd9Vh1jahti5ifLYokDDf5Hiy5SDO2GWQ6ZomBfpNJ%2B3Hl4URFoU6QAtB73eIh%2FOg8zXVYzyV8gMILQn%2FL0%2FaE8c5HCbYbA66RSj2xTo34jSFJnKiEEGF8IinzO0w8aTVwwY6pgGRN8NbwxBdY%2BVuS72w9TYI9pp6H5R%2Bk%2Byt3weTypPpeArnntVJqbyByxDwm5%2F6azAyiTCoPpqu208GQ1E5SdTxq9benbfKwQx2hpAeYZN2OKkdzvW09zNst2qIrIa1EE%2Bh7EzGypL9meChYg88BR5D%2F6OShF3bQsxQUtu9xbXb7DCeRG1sC6peNJV5ORZStg1Ar7LsN23WKwVlzhrFihBCVyFVY1sL&X-Amz-Signature=c7dfaebb5cbcb5b69acbbe72d4fc4c79d81b202c2ebaea28de4cf6216564c77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZWMMG7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDIK1LxCASjn3rfjwyWQ32x5EHsBJBsuVR9MH%2B3ZkAHlAiBxG8NNRDosvuFgdal%2F246ky1fDKu8Hv8MrVh6azYxyiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHMMiAO8cW%2FN3fwtkKtwDqsl9BGdKYeQYLlvrLfTNX6QTo42MlrOphCKbP53JiJ22q5GtYrLcyoEfep0uAjrnohsC7%2BBb0KvUIBYQDvTyeH4fOSq93Aw29e7071qaAbMc1TSSdyVsERj7VRKzqb9O525r%2Bjs9eWXKO7xgP5UEqxI141eYM%2FuZFH%2FrMY8WLUShxVr0fderWTK0ieGztmRmstEtgmZXJsKJD15Zr2xVf8jm3SHBurn4oFx79dnUFCoXexdNOIt79LMcpKbM3vNsUD4In4jSz00fA8jBMVIeqXgIbhdSLQzmEWBeEXbXeCzB2pvoZOYWFb0NQHvXOeyPGOSlc3oUe33YHsUsq2A0mVN1FfqWJeuBWxjPomsD0Cnkc6q6vCayVgmvzLUHLV5pXCJCiU8HJVb5Kuid299MCK1yd8mTEKx%2BaA3jzdcdfRZuQu0oJdARd%2F9x%2BvpIum9WANPD6Xfj5sGVLyI2gEyW3BeAZiYFNFBVPLnpZeoJC16TW45CKvcwewLS8gletE8wd9Vh1jahti5ifLYokDDf5Hiy5SDO2GWQ6ZomBfpNJ%2B3Hl4URFoU6QAtB73eIh%2FOg8zXVYzyV8gMILQn%2FL0%2FaE8c5HCbYbA66RSj2xTo34jSFJnKiEEGF8IinzO0w8aTVwwY6pgGRN8NbwxBdY%2BVuS72w9TYI9pp6H5R%2Bk%2Byt3weTypPpeArnntVJqbyByxDwm5%2F6azAyiTCoPpqu208GQ1E5SdTxq9benbfKwQx2hpAeYZN2OKkdzvW09zNst2qIrIa1EE%2Bh7EzGypL9meChYg88BR5D%2F6OShF3bQsxQUtu9xbXb7DCeRG1sC6peNJV5ORZStg1Ar7LsN23WKwVlzhrFihBCVyFVY1sL&X-Amz-Signature=7d7ebd02ee2f4f9d1f651fa6d5346ece2244a896eb3e5e8bb86fd0e7f72ddbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZWMMG7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDIK1LxCASjn3rfjwyWQ32x5EHsBJBsuVR9MH%2B3ZkAHlAiBxG8NNRDosvuFgdal%2F246ky1fDKu8Hv8MrVh6azYxyiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHMMiAO8cW%2FN3fwtkKtwDqsl9BGdKYeQYLlvrLfTNX6QTo42MlrOphCKbP53JiJ22q5GtYrLcyoEfep0uAjrnohsC7%2BBb0KvUIBYQDvTyeH4fOSq93Aw29e7071qaAbMc1TSSdyVsERj7VRKzqb9O525r%2Bjs9eWXKO7xgP5UEqxI141eYM%2FuZFH%2FrMY8WLUShxVr0fderWTK0ieGztmRmstEtgmZXJsKJD15Zr2xVf8jm3SHBurn4oFx79dnUFCoXexdNOIt79LMcpKbM3vNsUD4In4jSz00fA8jBMVIeqXgIbhdSLQzmEWBeEXbXeCzB2pvoZOYWFb0NQHvXOeyPGOSlc3oUe33YHsUsq2A0mVN1FfqWJeuBWxjPomsD0Cnkc6q6vCayVgmvzLUHLV5pXCJCiU8HJVb5Kuid299MCK1yd8mTEKx%2BaA3jzdcdfRZuQu0oJdARd%2F9x%2BvpIum9WANPD6Xfj5sGVLyI2gEyW3BeAZiYFNFBVPLnpZeoJC16TW45CKvcwewLS8gletE8wd9Vh1jahti5ifLYokDDf5Hiy5SDO2GWQ6ZomBfpNJ%2B3Hl4URFoU6QAtB73eIh%2FOg8zXVYzyV8gMILQn%2FL0%2FaE8c5HCbYbA66RSj2xTo34jSFJnKiEEGF8IinzO0w8aTVwwY6pgGRN8NbwxBdY%2BVuS72w9TYI9pp6H5R%2Bk%2Byt3weTypPpeArnntVJqbyByxDwm5%2F6azAyiTCoPpqu208GQ1E5SdTxq9benbfKwQx2hpAeYZN2OKkdzvW09zNst2qIrIa1EE%2Bh7EzGypL9meChYg88BR5D%2F6OShF3bQsxQUtu9xbXb7DCeRG1sC6peNJV5ORZStg1Ar7LsN23WKwVlzhrFihBCVyFVY1sL&X-Amz-Signature=6ec8850e18cbfa08bbe0a066a5692b51911d40517c18bfb40042d5abb5e50794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HRV67Z%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDcLUUHd9CDERlucn1fGexSvYA0tlUpHzoSjX0tUledXAIgNhaudkJrP7GJCRe8Sqo5ciTnP5DNnfz2smOcvulOrlMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGKn1GYbvJXEnAUm7yrcA1VY3PFLqQzakNU5Dlsks566JSLM5ZqFp0Y0EJGPalNAv4kApw9t4fhVfTWTDWs%2BIWgClrpwAOr9SBaFGMYcBKCv8j%2BtPWFuBH0lOJDB%2FkuApHJXgxL07qgmwngB8B28wo3qvXOsgUW4uCxY2zg8mGh1XXxV7O2DHKAkgutLPy%2F71%2BTDNaLFhJhIytMqTv93adLRZriBeCPeZd3iU498z3PUwS%2BRZo3%2FNa5sg%2FtSZP81WYo6pd2RM281fOnVpMKsWAWDctEXFH7M5D3f4nibZvrZ11VAAN4Oe8VeuwQA1bRADKysE03iRtXUnejx045ENRoEcIry6KV8H8tLUjnJmPHQWvz8iRRqgEvut9VcoKxrt%2FsIo%2BLSbBHPb0TDDOuQPze3Q%2F4wEjrRDgW9mjKYMJpT%2FYr50LQ8X5Ya1nptC9%2BnJAhFtMZTgkRobnkX4MHct1%2BKXN54nrV%2BujmpKKi4uu%2FiR0hQVKjMfwNENbO4Vcqm5fjhzf5a3%2B7F6s5k0pCaHf%2Fq%2F6xRnNW8tPLSSWo%2FwiQVPwEdk9v8%2FDkeinqZY4LnvM3mrd4ym1XggzOD0%2FHTYxYt3ZWNusJIrkOlBsnFPDEImSBlUxm%2BT9FIXMZit%2BlHGEz40dVzOIaFwgCaMMek1cMGOqUB8qP5EmsWrW0bAQZOZJbqR4IL11%2BCJXhtKpi6d2WKtdGvIIKUnkDIqw5U5giadzVIj2hXm1kmtwVSe2wVZGKaYymULx2hNlTG8FkhCG7PDHnqNWGCQW59211DXaMm8bsV1Caaamivl7whPsQcNcShQGvs%2FqD49WF6%2FAlTRwkTHV77bsO8QX9zJHga4xH7Y%2BVJSJbYODEwqGoaEDoXYtBD6F25NoWl&X-Amz-Signature=daecd8d053cc184c724bead5aac0026eceb8dda1c979e4e15d50a8210c8b1770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YY6LK4%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2BYoeg0wKhzGwFxB5RyZ%2BNiVp5zP9z8gtvmxR19yh%2FqQIgOwI%2BMX0amRd9lAxNESeiEJczXeHFoxHMDSnn9vYYZF0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNLiqE1Weeqvm%2Fi8eCrcA8QxUnzn%2FfevctYOP7Ozz1f9FHwvistcYOrffSWVQd5HKOftz3MPrhOIg9pvnzNJu08XOgHr%2B1Q3SnrBU9RLd5fI7unju7BQteepYZX9GH3IS2UwA7eGnhsxrD9sKTm5A1Q6TB%2BTfYUxphbukqPsi%2BL%2Ff0tU1CzGDWxxoV4C8Q7hohGvs5EgqBpqB8I4qYQcGsP6E9I704eooHjQ7o5%2B%2BU06lJpFSas%2F0GEwjCGqP0WTibYGhjBa3QVJLHw1DWof2fITNahyLEz%2BYB2tClfgKUYRaPWJfKwtfruZ5L1d5%2BiWvV1nUEVnlaq4zb2vkEI9HbhF1QREd9xG7AFsTRZM%2BxNdsPJLZlRwxJ1o%2FkyTpfuAPBYDBFFpJ1PwHYRDHdUeZ6QW4rhkJmupSRKSE%2BvYOO91Jynw04lh8amz2SihIEk9AJLpZd3482u5dFdyyjq1q%2Boy4vQNy4KzddDpEPRI0uDcTUUPB8BPjB%2BnDeHpznyknhb2ZOR0KwLGx7PfwVfDTg5S4hYUIg7fj49Xhq2X%2Fyk7qMB1bhq2wR3d6fFFrp06sO8MmGeO0jZaKUm5Ff2yaAV3uvkU6p%2FB%2FIH4%2FLZyYIagap1KapgiNDU5VbZg5GCf9hI6pa8Y5ObjmFY9MKek1cMGOqUBhbgOaKoVPX%2B41QDjKq%2BD%2FiZyrkzI6M2VYfD%2BdErjigDonY1b8z0%2FbeTJQJMVRtD8XKILRWgDR4IulTb%2Fj%2BaiLlVTn%2BPRcckmguMKb0qVUZV%2B4ALTc9D319Q8z3iq7udiPNIMjv%2FTgKt1rIjw8R1tsaP1lQCxXPQNWrBNBpqZkuGY782arZguwwI%2FgM0IBH%2FOSm9aU3JvNRzfBpjocA28AYv4%2FYAY&X-Amz-Signature=6dfb0e0269df9d12530254fcd55310e81f876635de0b3fefba716b1abe370699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZWMMG7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDIK1LxCASjn3rfjwyWQ32x5EHsBJBsuVR9MH%2B3ZkAHlAiBxG8NNRDosvuFgdal%2F246ky1fDKu8Hv8MrVh6azYxyiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHMMiAO8cW%2FN3fwtkKtwDqsl9BGdKYeQYLlvrLfTNX6QTo42MlrOphCKbP53JiJ22q5GtYrLcyoEfep0uAjrnohsC7%2BBb0KvUIBYQDvTyeH4fOSq93Aw29e7071qaAbMc1TSSdyVsERj7VRKzqb9O525r%2Bjs9eWXKO7xgP5UEqxI141eYM%2FuZFH%2FrMY8WLUShxVr0fderWTK0ieGztmRmstEtgmZXJsKJD15Zr2xVf8jm3SHBurn4oFx79dnUFCoXexdNOIt79LMcpKbM3vNsUD4In4jSz00fA8jBMVIeqXgIbhdSLQzmEWBeEXbXeCzB2pvoZOYWFb0NQHvXOeyPGOSlc3oUe33YHsUsq2A0mVN1FfqWJeuBWxjPomsD0Cnkc6q6vCayVgmvzLUHLV5pXCJCiU8HJVb5Kuid299MCK1yd8mTEKx%2BaA3jzdcdfRZuQu0oJdARd%2F9x%2BvpIum9WANPD6Xfj5sGVLyI2gEyW3BeAZiYFNFBVPLnpZeoJC16TW45CKvcwewLS8gletE8wd9Vh1jahti5ifLYokDDf5Hiy5SDO2GWQ6ZomBfpNJ%2B3Hl4URFoU6QAtB73eIh%2FOg8zXVYzyV8gMILQn%2FL0%2FaE8c5HCbYbA66RSj2xTo34jSFJnKiEEGF8IinzO0w8aTVwwY6pgGRN8NbwxBdY%2BVuS72w9TYI9pp6H5R%2Bk%2Byt3weTypPpeArnntVJqbyByxDwm5%2F6azAyiTCoPpqu208GQ1E5SdTxq9benbfKwQx2hpAeYZN2OKkdzvW09zNst2qIrIa1EE%2Bh7EzGypL9meChYg88BR5D%2F6OShF3bQsxQUtu9xbXb7DCeRG1sC6peNJV5ORZStg1Ar7LsN23WKwVlzhrFihBCVyFVY1sL&X-Amz-Signature=098dff0ff1db07a6368a487b5ef4dd4a8c4808cb52ef32a83d259f312b95ec54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
