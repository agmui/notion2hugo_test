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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTQUPWU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUb5saFPgJoflZqHDj3WrRizIJCQ%2FjOFGQ3KetV3YDJgIhAOOSNsSXWSc%2FE364SFoFUSoINAmuJjBiIIRdFuL9KQ8iKv8DCHAQABoMNjM3NDIzMTgzODA1IgxpoxENKc4GGneEeDMq3AO4zLbRkF7v%2FoPjUfyVfYYBbPIJ7RabDYRV9Oco6WgOa3OVMvxQZcneR3Yt729kFss0w6SXLoFL9%2F%2FXAoqtcWpfeoZpXIGfgWEifE4Qri3Iunni846ncLE4fgfeNSNmpAb7aDqTKcUngWnPA8DnCw9PsC9n%2Fn4puEwD4QX9QRcu2bnm%2BzRhdypNL3vwHoopLOHt6x%2Bp4JjCBvtFU3zHkL5jB5m8oghbxshvIls1AOVchTIhr6OGrYOek4YXAo4UcJsopBuTwXZSXjiLszRxYuGR2wLantAhl3IDOwfjB5mXLIws3vqcacQC1DdzgNnddQ7kprGRb2IRAeAtbo1m5o%2BL1qo58WPToI9LxiZsM3pXBnr77gjFDSeG1MZIBnugiYNm9Jtqb2L%2Fhr%2FLjBEfwTb2FzvFVmyqN%2F6Tso3hWk5NmpsERqTvPHNjk7HPiZp5mmkm8mkO3meLhxz7kvapa7lWGob4rgfKx7uLtNOqy3v4M821L1KufRK%2Bg25bKPPac5iqczz3%2FciPuuM2Sk6Kii8zme1wyuEtSepDyf8Zj8qsfAyO9pjuH5K3RXur3%2FhU5BJoxLovGjLNmk%2Fx1rwSaCkPC1iB%2FtK%2BPjn3%2FeEaBtb5BsooOpc8RkGS6p78%2BTDBk8TCBjqkAfHl3WAohC2IwTByl%2FBZuGQwtJrY5QB29556JnArYYEdv9tSkuoqYngFcI3nREyXFbmB6k6lfutUz4oK7KokIKrQrR2kHjHJyWbO7j%2Fiula7M26sIv6J643Hsqdrt9fujy9hOuYpu6QdzIPYLv9DB4JTAimnh6K6QuLRzrCRuznc3Ck0kMlCDCFUEKi3i1AWutUtd7EqtQ1keObE5APQ6OVnniwu&X-Amz-Signature=23768afe03c8dd9dfebfa51f197588d42a83084aefc224a81e804cdb39ee85d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTQUPWU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUb5saFPgJoflZqHDj3WrRizIJCQ%2FjOFGQ3KetV3YDJgIhAOOSNsSXWSc%2FE364SFoFUSoINAmuJjBiIIRdFuL9KQ8iKv8DCHAQABoMNjM3NDIzMTgzODA1IgxpoxENKc4GGneEeDMq3AO4zLbRkF7v%2FoPjUfyVfYYBbPIJ7RabDYRV9Oco6WgOa3OVMvxQZcneR3Yt729kFss0w6SXLoFL9%2F%2FXAoqtcWpfeoZpXIGfgWEifE4Qri3Iunni846ncLE4fgfeNSNmpAb7aDqTKcUngWnPA8DnCw9PsC9n%2Fn4puEwD4QX9QRcu2bnm%2BzRhdypNL3vwHoopLOHt6x%2Bp4JjCBvtFU3zHkL5jB5m8oghbxshvIls1AOVchTIhr6OGrYOek4YXAo4UcJsopBuTwXZSXjiLszRxYuGR2wLantAhl3IDOwfjB5mXLIws3vqcacQC1DdzgNnddQ7kprGRb2IRAeAtbo1m5o%2BL1qo58WPToI9LxiZsM3pXBnr77gjFDSeG1MZIBnugiYNm9Jtqb2L%2Fhr%2FLjBEfwTb2FzvFVmyqN%2F6Tso3hWk5NmpsERqTvPHNjk7HPiZp5mmkm8mkO3meLhxz7kvapa7lWGob4rgfKx7uLtNOqy3v4M821L1KufRK%2Bg25bKPPac5iqczz3%2FciPuuM2Sk6Kii8zme1wyuEtSepDyf8Zj8qsfAyO9pjuH5K3RXur3%2FhU5BJoxLovGjLNmk%2Fx1rwSaCkPC1iB%2FtK%2BPjn3%2FeEaBtb5BsooOpc8RkGS6p78%2BTDBk8TCBjqkAfHl3WAohC2IwTByl%2FBZuGQwtJrY5QB29556JnArYYEdv9tSkuoqYngFcI3nREyXFbmB6k6lfutUz4oK7KokIKrQrR2kHjHJyWbO7j%2Fiula7M26sIv6J643Hsqdrt9fujy9hOuYpu6QdzIPYLv9DB4JTAimnh6K6QuLRzrCRuznc3Ck0kMlCDCFUEKi3i1AWutUtd7EqtQ1keObE5APQ6OVnniwu&X-Amz-Signature=22cb5201d773612fec270594d93084acf833348d72e082ca2075509744404144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTQUPWU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUb5saFPgJoflZqHDj3WrRizIJCQ%2FjOFGQ3KetV3YDJgIhAOOSNsSXWSc%2FE364SFoFUSoINAmuJjBiIIRdFuL9KQ8iKv8DCHAQABoMNjM3NDIzMTgzODA1IgxpoxENKc4GGneEeDMq3AO4zLbRkF7v%2FoPjUfyVfYYBbPIJ7RabDYRV9Oco6WgOa3OVMvxQZcneR3Yt729kFss0w6SXLoFL9%2F%2FXAoqtcWpfeoZpXIGfgWEifE4Qri3Iunni846ncLE4fgfeNSNmpAb7aDqTKcUngWnPA8DnCw9PsC9n%2Fn4puEwD4QX9QRcu2bnm%2BzRhdypNL3vwHoopLOHt6x%2Bp4JjCBvtFU3zHkL5jB5m8oghbxshvIls1AOVchTIhr6OGrYOek4YXAo4UcJsopBuTwXZSXjiLszRxYuGR2wLantAhl3IDOwfjB5mXLIws3vqcacQC1DdzgNnddQ7kprGRb2IRAeAtbo1m5o%2BL1qo58WPToI9LxiZsM3pXBnr77gjFDSeG1MZIBnugiYNm9Jtqb2L%2Fhr%2FLjBEfwTb2FzvFVmyqN%2F6Tso3hWk5NmpsERqTvPHNjk7HPiZp5mmkm8mkO3meLhxz7kvapa7lWGob4rgfKx7uLtNOqy3v4M821L1KufRK%2Bg25bKPPac5iqczz3%2FciPuuM2Sk6Kii8zme1wyuEtSepDyf8Zj8qsfAyO9pjuH5K3RXur3%2FhU5BJoxLovGjLNmk%2Fx1rwSaCkPC1iB%2FtK%2BPjn3%2FeEaBtb5BsooOpc8RkGS6p78%2BTDBk8TCBjqkAfHl3WAohC2IwTByl%2FBZuGQwtJrY5QB29556JnArYYEdv9tSkuoqYngFcI3nREyXFbmB6k6lfutUz4oK7KokIKrQrR2kHjHJyWbO7j%2Fiula7M26sIv6J643Hsqdrt9fujy9hOuYpu6QdzIPYLv9DB4JTAimnh6K6QuLRzrCRuznc3Ck0kMlCDCFUEKi3i1AWutUtd7EqtQ1keObE5APQ6OVnniwu&X-Amz-Signature=2602f85280075039a223cd0f79b49e5a4ab3f0194505294e812d44a8a1643850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV6LAH7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Xjb11dL7dJ2AC12a9DguI%2F3u1QjEzFnKatj2ufiweAiBC1rAsyokT620m8b2YU1WIzyNqprWfXuxpOCFDUuH%2BAir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNYWLNcgzd3cd21ZpKtwDUfFZw7ttpo5mVfz7nAksI1TfVnBkbJkFwAIMjeHBA1lghSbBD14nE9us9%2Bt1WlqF30yz99WZZg7SGYODksaz89tL%2FrHoPjwb%2FSjlUWb0ASGTEjzf9JjLj9rNLO3r%2BzYB5DtFYcCw%2BTYm%2FdvyyKArdhvJHKUcd3hipuCsc3GME4NbEdp6aOt0JdIuhjF6Bl5lmqu74P8YBU4ZpmsCgb5829RZDmLGj%2Bcnzs6o9mzP9mOexWGYsrE2n6DCVlLweHH%2FugEyFOwXXDRF4PnKvHQxwU%2FhTwQlyXrbZySwAdhLmznJ%2B8kQwCgJLHCzLMgw0%2B1zczI%2B8sQvs1MuPBy26GvRdyz%2FRkBFLVJTSf%2FGwfOEk3wH014U%2BqNs0fWx3JzdZvVsEQLu%2B8NrLaJLnZsgpfe47Ug9OIBXk6t4otppUk1C%2FGXAwdQj7tDQvodsoUuZd1F96oZwbLDq%2Fws%2FDsHVxgMmCmMubRx%2FbV%2Foi5Yv3%2FGL5JfuV3x66u9lUqNQoGcEDwUckkW8uJ3AFish1OqSEaex243HOpm1uxJ86wrXmRXxbiigcg6mbH9BvO7l1asMHJccXSFdhc66LfeFn74AHPY1fJARFAhV3nsjz1ps%2BkmSCt4lMk0hylLmZj2H5V4wnJPEwgY6pgFbfUX3pCpi0mG6wsR3kiZFulHgSuI3zFK%2BnYIjLIbiR68OgR4rECyLR0GUeRYo3nnQzTSrwT71SrAjCDH%2FS8m%2BWrMPjggKbak8SuEH725zPRa9Ykux4nRh7NaoqWkOO2SFBg0JoxJdrDEIPUomoHbMiy3GjgkdQ3ZqxDsQWabLFR9KcuFEkgNjxx29IqHoLay%2FTeRp93BVqUJfhbu1CxTZwkRZNsa4&X-Amz-Signature=e376eb6a8c670751f11abc5d33216d955c119388c88512495e3e4be66df159eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHO6IYR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjtJoWL0UTo4Fm%2BrUjTlXFP0udAbI24bS9l13ujz%2Fw0AiAIXD7LP8HQ%2BAb0wW%2BztpDJjSsZEmjpgO00%2BlwYrafGXir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMNuQIfI4Aj%2FIJytyeKtwD%2FTynHLR0w1%2F82aMeJczeVDcZYCTeS%2BLnUfLRleWGD85BaUVITaRGP8cC0mQimLUVS3kCS4O%2B05ixm8wmXUXDYICR16UVbhJOYZUg0ta845mijU%2FpCFK7PV2IjSfSf0j9IDSzr5N%2B1l24%2B9xl5p9DYUIfbB%2FLK%2FRZN2gG0VBhwfb%2FFQocheKpge9fMTnhYSInfM5dgfPVy8%2BL5A8HFkxztv74oOD%2FdHSzj5CBOJebBqUm2RL8jw%2BOXmlnCDjoVVUVOJ22THEmImxtNf9JPtPTHubvFKyFBXm4rZTibDKR6x73MM%2Fwc7S5HA2GohQ07F9ZXkVoKGwstyLKFcsRtzav1%2Fse0ubqHR%2FNVILAlHYBLJC7PNpv6z7EFWc6L1%2FC2DOpGtXLem0PGwcDN4duXL6TRWlL86zT12SInbRrvAC4Lc4j22iFNy8vLpeJ6HIOPYRZ6SS2eJkxDKVMI6J0aT3vCYi8NNAHuIP2eWMOKd6Tpx80K5kr9XfmPvicwlcAe1wzObuHmmHaU%2FLu7%2Brj1Zm9c2hdOTMhTh%2B9kk5f%2F2yM2p1ZasZwlCSqvvqSuGnn2V4gS1bLBMizCY40uENeZ6cQVJRzKlwYBHoqmrVKaIn7F1pxLoKcE9WoyGqJQwUw5JPEwgY6pgE2dFg12A09W8wXnIRJEudhjlMHl6aOyPJHO7upHmtmQM5z6%2FAZdLpmja%2FotLnKqdelEcf4zksyg79uMGRvXDDFKwjPpJpKeSPyJfP6PubXGSmQa7PE8HjdL%2BHMsV9PsH%2FokgDTJXx%2BzdKfalB3s40CTdv46W6Deo%2FaWuNFCzPHSAC7va2487rYMbesrwYwxm95OYwf34Qst7QNIlXFooFQn2mAP%2FgF&X-Amz-Signature=d5262c9a9d08a5754a2d246fa90eef606b87acb0cf74c071d3307dff8e9f5041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTQUPWU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUb5saFPgJoflZqHDj3WrRizIJCQ%2FjOFGQ3KetV3YDJgIhAOOSNsSXWSc%2FE364SFoFUSoINAmuJjBiIIRdFuL9KQ8iKv8DCHAQABoMNjM3NDIzMTgzODA1IgxpoxENKc4GGneEeDMq3AO4zLbRkF7v%2FoPjUfyVfYYBbPIJ7RabDYRV9Oco6WgOa3OVMvxQZcneR3Yt729kFss0w6SXLoFL9%2F%2FXAoqtcWpfeoZpXIGfgWEifE4Qri3Iunni846ncLE4fgfeNSNmpAb7aDqTKcUngWnPA8DnCw9PsC9n%2Fn4puEwD4QX9QRcu2bnm%2BzRhdypNL3vwHoopLOHt6x%2Bp4JjCBvtFU3zHkL5jB5m8oghbxshvIls1AOVchTIhr6OGrYOek4YXAo4UcJsopBuTwXZSXjiLszRxYuGR2wLantAhl3IDOwfjB5mXLIws3vqcacQC1DdzgNnddQ7kprGRb2IRAeAtbo1m5o%2BL1qo58WPToI9LxiZsM3pXBnr77gjFDSeG1MZIBnugiYNm9Jtqb2L%2Fhr%2FLjBEfwTb2FzvFVmyqN%2F6Tso3hWk5NmpsERqTvPHNjk7HPiZp5mmkm8mkO3meLhxz7kvapa7lWGob4rgfKx7uLtNOqy3v4M821L1KufRK%2Bg25bKPPac5iqczz3%2FciPuuM2Sk6Kii8zme1wyuEtSepDyf8Zj8qsfAyO9pjuH5K3RXur3%2FhU5BJoxLovGjLNmk%2Fx1rwSaCkPC1iB%2FtK%2BPjn3%2FeEaBtb5BsooOpc8RkGS6p78%2BTDBk8TCBjqkAfHl3WAohC2IwTByl%2FBZuGQwtJrY5QB29556JnArYYEdv9tSkuoqYngFcI3nREyXFbmB6k6lfutUz4oK7KokIKrQrR2kHjHJyWbO7j%2Fiula7M26sIv6J643Hsqdrt9fujy9hOuYpu6QdzIPYLv9DB4JTAimnh6K6QuLRzrCRuznc3Ck0kMlCDCFUEKi3i1AWutUtd7EqtQ1keObE5APQ6OVnniwu&X-Amz-Signature=a55323ac635cbbae585db2aea886df21bf28a046b55f197350b7a5b455d2150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
