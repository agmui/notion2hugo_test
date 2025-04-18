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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVWVPKV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaIofIbb2Hqid%2BSsHeKa%2F5PgqU9g%2Ba30g2aYzvvBpnAIhAK078frRQfNADrlzlAPsvjZf1Qzo%2FYTFxseYSAUu3F3GKv8DCHAQABoMNjM3NDIzMTgzODA1IgzmNcMwlsT3wV9%2BkaQq3AMFbo0BilJp2y8n%2FOuyfrIouYVipxGqOgPiR7f8SpypCFRTMO%2FKzR%2BOsCmr97cprM9%2Ffv%2Fh2fMZ6jzXhai0hxusIyYUTMi2zp%2Fr71Yn5Ldsy2jwZuHpYRE68OUvZYxVHKXC3niNSOgB1wxCSkiod%2B41HdEDX8nPzQNuOehZq5alKmW%2FwLWmM9TNY0tgWGT06zgI056mS5cvYfSCYPi35lGJt0Nm70kS9Tk0qLsmYFm3ukdiB8Fhuj7vkBUuKaAyqmkyfjVtFpRaO0JFA09HZfCUph4UK%2FWdc1zhWrGgIinNeacD84fqo2XR5%2FHvujTVTKsGsgxiXZrKJumJSgMTg0ybcuRFDdvarejw24GfVXYPVGySx3fT9lEiAS2ugUUDEAN%2B0Bcuh1nzGoT6qhWTYXAVPnk0BD3k6dCMDlrczrLMy3O2gRE9ODby2JaVEny775KwBQLQVelcT2e5wDCqi1zZBRgbpAIadZweiA4xzhCLd5fzjQEci1rGfgVgAw%2Bw6NPm7O9vzGEkHLbKzbNj0Vo47dumNAhW%2Fb68KSFga1eZ2fkNbC2k9tzOuez3sH0N%2FNvrm4Wgmfvvi1URuU03OSlsHLE8fJEDo4INnHcs5P8WFcPVlBz75fPTVavRTzCE%2BIfABjqkAXsD1Y8IRocaWbfVyiFqYZNIQ7LMV9oHnwTMUCidGPy%2BMfgK0FBlY4Wc5DfQ8qwgzsgtJtXV%2BNNQ3Ov4RIWItLE967qTlR1oFy9o2Pd11W1nEiOOlwRW2ryQdKIelpQ4sHBuirz5DhOKj5p2knliblpXBxSllfm1FEQMit%2FjlZHqsdGPaIX4NNHKjsNKR4tRQeBE5c8RXI9ZiCJAc87%2FmBUlPXYv&X-Amz-Signature=cccf80b8eaf83ef5a8b9d5d354ab07c3d61b2126456274b8971febd88251cb63&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVWVPKV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaIofIbb2Hqid%2BSsHeKa%2F5PgqU9g%2Ba30g2aYzvvBpnAIhAK078frRQfNADrlzlAPsvjZf1Qzo%2FYTFxseYSAUu3F3GKv8DCHAQABoMNjM3NDIzMTgzODA1IgzmNcMwlsT3wV9%2BkaQq3AMFbo0BilJp2y8n%2FOuyfrIouYVipxGqOgPiR7f8SpypCFRTMO%2FKzR%2BOsCmr97cprM9%2Ffv%2Fh2fMZ6jzXhai0hxusIyYUTMi2zp%2Fr71Yn5Ldsy2jwZuHpYRE68OUvZYxVHKXC3niNSOgB1wxCSkiod%2B41HdEDX8nPzQNuOehZq5alKmW%2FwLWmM9TNY0tgWGT06zgI056mS5cvYfSCYPi35lGJt0Nm70kS9Tk0qLsmYFm3ukdiB8Fhuj7vkBUuKaAyqmkyfjVtFpRaO0JFA09HZfCUph4UK%2FWdc1zhWrGgIinNeacD84fqo2XR5%2FHvujTVTKsGsgxiXZrKJumJSgMTg0ybcuRFDdvarejw24GfVXYPVGySx3fT9lEiAS2ugUUDEAN%2B0Bcuh1nzGoT6qhWTYXAVPnk0BD3k6dCMDlrczrLMy3O2gRE9ODby2JaVEny775KwBQLQVelcT2e5wDCqi1zZBRgbpAIadZweiA4xzhCLd5fzjQEci1rGfgVgAw%2Bw6NPm7O9vzGEkHLbKzbNj0Vo47dumNAhW%2Fb68KSFga1eZ2fkNbC2k9tzOuez3sH0N%2FNvrm4Wgmfvvi1URuU03OSlsHLE8fJEDo4INnHcs5P8WFcPVlBz75fPTVavRTzCE%2BIfABjqkAXsD1Y8IRocaWbfVyiFqYZNIQ7LMV9oHnwTMUCidGPy%2BMfgK0FBlY4Wc5DfQ8qwgzsgtJtXV%2BNNQ3Ov4RIWItLE967qTlR1oFy9o2Pd11W1nEiOOlwRW2ryQdKIelpQ4sHBuirz5DhOKj5p2knliblpXBxSllfm1FEQMit%2FjlZHqsdGPaIX4NNHKjsNKR4tRQeBE5c8RXI9ZiCJAc87%2FmBUlPXYv&X-Amz-Signature=282dc1572ea2f3e5648d8ca5bbc7b748168da126df1144ff5cae93943d1cf409&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW522YRK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDNnqBwE53HQybbWfk2iF2pzT%2BIwx2DX8xcqU8lTwGnAiA9VWt59QXyQ%2FH3vKrkwcZ1rhagcwBO0%2BMCXnmfm9BTdyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMy4wrKsLNZcuiPMFaKtwDi3O%2FwbVhXV1SDqxMqqjNloEYmrvgwpvr7xpAMZzxFKsqvfshx3Ai8bhqiOzxVhgDPVofu9ZJ4ft%2Fr0lA0Jifu0pe%2BdXdBz074trUa%2FlGa3XnAsQeQRKIAg%2FLAcdlOdwmHPfLthjOsWqrmWtQKgu%2FvN4LR%2FvxdvUt5sh8Cn2NkEbWxDJ%2B187UgtWWj3VIeSyOZ2nZTC6UtCno2DAxYWkRZs%2BsIB23pao52U4v0xYEebPkt%2F7kK8y80ajJjs09wf1sWYCLsGSz1AwggDJ1PwMryyQtbHVIR6BLRpCeweBQ8VN73NxbEQyhF8w2Xokc7Ip06pW7zz5xm9IEBbeKSzQsf93Wgtw47Z41KSAe91ptpQFtl8%2FrW0HLkkpPmKGw%2BKnssLlbuxEn8F7nDXal%2BX9Q6EfJypsLmSxr%2Bq44v%2BgV19sP66aOf1JT9EDWL1wX%2FL%2FSjOXn5%2Fm5IojtLdJhirUa9EE%2BfAB7inJK1%2BEgu4jI4WaR5GxurTM5oJg%2BGTG7Gn6T%2Ff0rQQUeR7QFoIdScqCDCjJ9aWW9KaRbg4oAd5DwPCgAbaZAt01%2BUb2kP2VKlhgBathXRIsPejE9Fxduu3e1dN96dpf2dwJ9Ey%2BrjZpu9%2F1K2YHw9CsbZzuC3V0wxPeHwAY6pgH8W%2BxYfcCt5qA4ADyfKEWLFPYtVcyRYH58G%2BmMD78wwkVNHFSPQtRcZGal%2B%2BITsvdh00mru9XuEmJN7tL0ePu05xLyoWxnXLmJiiSVFWe7XWFa00U614o3yXEk0rh0UMJJb0A8t53Z5O3%2Fazoa95yPJg0LC%2BP97%2F7sw0gZGi69Luc2ftF4Wann5TQfG6eNyjet5zBVNIHvhUjPW4dm6zyqYKHqviCw&X-Amz-Signature=50f7d8d8e3b6a684b28efb2222d5dd08b6b21b87a569e2e824ae81acb3612c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTCE5VP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICU%2B4irdEh4PomArsoj35QbpM3NNexN1GoQlYntWEg0dAiBirimPGNFmBCGVUt%2BDhZdAHhvyK9LOKOwovoCoylYtQCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM6m%2FZ5umkcnYUCeZPKtwDT%2BcwRwfvYm035URJ5UaeXH9R%2FhI3S1sCjZPsgRZSHgohqKEAKTbvxlvHUkozPWrIKFkNU%2FcSJb8LpW97GhTn0m8g8VFuXV%2FycNLIsVphutAAwBvKE7ZcC6aPhbi0%2Bm1I9yU%2BeWyVKsgvtUalYcpUYmxIE6hX3ZC%2B04MFSTtfzHwDW09F6ePKWGVGaO7pfdbeJZ5UVulBjzuFkhN4pa3u%2FjtZAsDmQJxrk%2FFS74pH6yvpTx%2B30Ws7ZT9uWNMWTafcyjSkAkInTjXWiqYbJ0a4YhdWBxI8JOnr5FP4Lj1Ne5d6QTMac6yBqGa7dDvQ8YjimuVamL8OD%2FUaI3FubEDOp6Jl03XMinqarm6h%2F15Aza928MSbihJB13CA5zQoLUuDmlPJU57y1%2FTwls0sgDFT9dSMLaRhb2KuZZg3%2FlSWCJs9sy%2FgiN0NF5uURFYN%2Fq%2BlLzxWTj75uuFxg00OMnXa9g4NUB%2FtI8nwGYqTLIragNBXk1dWQUom%2FPV7LY0RtKosM8efsytN2QuqI6gFucmFpuKqsoSpO15f4SUzESYaRJ3UluVD1gYvcV9K8%2BVqk%2Ba8SoGpTLDdOUBCMWPeQjS7FVgf5PTD3v0bBb4wxICV7gDCt8Vxo15jeP2jwaEw%2BPaHwAY6pgEkkHVFjXxadVaoMS%2B4lyCJZ8IjcWk6n%2BSQvvkJSIrOXLX%2B4ATtkVowXxD7LiXYLqtps7AfBN5R%2B%2F9TSD4WzNhD%2Fem351pj7EDJPSrl%2FHigTp2Sa8tGjjLIcvrvFyW1neryDafjiigAK8luHUSps3ZqfIH%2BcBE3SN5pmLM5lY7zLCRHFwmOC4CjFlu13TVXBTMLfC4h9%2Be8LMQJjXf%2BbBzJfTAiS%2FTZ&X-Amz-Signature=9b9fef26b002e64300e625ff1341d91f719bbdd173a88cdabade91853d4d0cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVWVPKV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaIofIbb2Hqid%2BSsHeKa%2F5PgqU9g%2Ba30g2aYzvvBpnAIhAK078frRQfNADrlzlAPsvjZf1Qzo%2FYTFxseYSAUu3F3GKv8DCHAQABoMNjM3NDIzMTgzODA1IgzmNcMwlsT3wV9%2BkaQq3AMFbo0BilJp2y8n%2FOuyfrIouYVipxGqOgPiR7f8SpypCFRTMO%2FKzR%2BOsCmr97cprM9%2Ffv%2Fh2fMZ6jzXhai0hxusIyYUTMi2zp%2Fr71Yn5Ldsy2jwZuHpYRE68OUvZYxVHKXC3niNSOgB1wxCSkiod%2B41HdEDX8nPzQNuOehZq5alKmW%2FwLWmM9TNY0tgWGT06zgI056mS5cvYfSCYPi35lGJt0Nm70kS9Tk0qLsmYFm3ukdiB8Fhuj7vkBUuKaAyqmkyfjVtFpRaO0JFA09HZfCUph4UK%2FWdc1zhWrGgIinNeacD84fqo2XR5%2FHvujTVTKsGsgxiXZrKJumJSgMTg0ybcuRFDdvarejw24GfVXYPVGySx3fT9lEiAS2ugUUDEAN%2B0Bcuh1nzGoT6qhWTYXAVPnk0BD3k6dCMDlrczrLMy3O2gRE9ODby2JaVEny775KwBQLQVelcT2e5wDCqi1zZBRgbpAIadZweiA4xzhCLd5fzjQEci1rGfgVgAw%2Bw6NPm7O9vzGEkHLbKzbNj0Vo47dumNAhW%2Fb68KSFga1eZ2fkNbC2k9tzOuez3sH0N%2FNvrm4Wgmfvvi1URuU03OSlsHLE8fJEDo4INnHcs5P8WFcPVlBz75fPTVavRTzCE%2BIfABjqkAXsD1Y8IRocaWbfVyiFqYZNIQ7LMV9oHnwTMUCidGPy%2BMfgK0FBlY4Wc5DfQ8qwgzsgtJtXV%2BNNQ3Ov4RIWItLE967qTlR1oFy9o2Pd11W1nEiOOlwRW2ryQdKIelpQ4sHBuirz5DhOKj5p2knliblpXBxSllfm1FEQMit%2FjlZHqsdGPaIX4NNHKjsNKR4tRQeBE5c8RXI9ZiCJAc87%2FmBUlPXYv&X-Amz-Signature=090a9a698a07536757d9d512e474f9b390b8be70549f0f3fa4a4842d020c7855&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
