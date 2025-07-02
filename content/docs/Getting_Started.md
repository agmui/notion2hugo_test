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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6I433EW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8JM0q8%2BW%2FfwicoPFmlAR0EJRRFpudsuN5px%2FZxB3SRwIhAJ5a49clXojTX1WLVLV%2B4W5u3e8emioNYdkLs361TfcFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8Xgt7Crt9PPbdKBYq3AOwlaOg1i1IWf8efdg04d1ns0c2o6tdO76klEu6uv8cKe0BUtrPi0NDEuiaOCYKpiH4lJeaGYx4zPU4qc6rPHU3ICYrzRpuhbZuP3dkUsXLDsLyQnqwjLyjyg6gSTu9gsr6yelwSz2HeI4OMrd3nxHvkTXn76ZhFguJXUTQ6YbsiVG3IolY2SquuqkeCy5IW4R5%2BasepLvzEve7QKcvHVv96mfK3cPoi9dvlpxTLNZwk4logpj93jeWE3oyfm%2FqnrnXX%2Fj%2BIa1LSq%2FF7FS5vi9vw2lY8v1TS39KO%2BILsUHaggRRX8A712UzrUC6sjGrnfVZ%2F0Cxl9rJCfHvoKLCexyXi2NZ2qTKDaPDs32JoUbQyq1XI2T87aX67d3MSXjD0qhp3Fgv%2Fi8ZHKPD0bJGWzTMsKvTnnZ9%2BUHCGp0YbohfkvM1fAboURdEPRN0SDrgD%2Bcwth%2B73sq2ivhCLMSUIajfaJ2A80QHa2Rcxuzr2X2S9szPaKCfQew7Raz6ts7Ia8dlPqEnzZpi2rJzd7PeT%2FEDO%2BKZewV4ryN9NyQVoJ76OV4NNoaNsQhDbMgnFf4OQMqXCWe8cVeyJ9sO6tSSssgSTO9xuqWYGcOhmRvfhvsmjXnArSJC54OBK93yOjDz6ZXDBjqkAQ223QINx95rmW9jddA0wqIXZXRLwkF%2Bt%2FHOmID2iMF1xCOXUtQb2%2BHc6JzMVHXZ6inSAluStSBuu3qndEIjeuz9siXnUbtSqmoKmPmNdZ6qm%2FLFc2rLd0KvRCZ8ELFCTKkxbD530oc%2Fyo4tPYoVcSNjETStot%2FGHom90gU9lUkS%2BR2ETdPOYfzVEz1nn5L1gkLIZKW%2F%2BsH2mcTv6%2FyLtmW3nR%2FC&X-Amz-Signature=ca79dc0c359c0cd3263cdc8fc7eae859062ca8aaab62ec0058c356ba1425c49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6I433EW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8JM0q8%2BW%2FfwicoPFmlAR0EJRRFpudsuN5px%2FZxB3SRwIhAJ5a49clXojTX1WLVLV%2B4W5u3e8emioNYdkLs361TfcFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8Xgt7Crt9PPbdKBYq3AOwlaOg1i1IWf8efdg04d1ns0c2o6tdO76klEu6uv8cKe0BUtrPi0NDEuiaOCYKpiH4lJeaGYx4zPU4qc6rPHU3ICYrzRpuhbZuP3dkUsXLDsLyQnqwjLyjyg6gSTu9gsr6yelwSz2HeI4OMrd3nxHvkTXn76ZhFguJXUTQ6YbsiVG3IolY2SquuqkeCy5IW4R5%2BasepLvzEve7QKcvHVv96mfK3cPoi9dvlpxTLNZwk4logpj93jeWE3oyfm%2FqnrnXX%2Fj%2BIa1LSq%2FF7FS5vi9vw2lY8v1TS39KO%2BILsUHaggRRX8A712UzrUC6sjGrnfVZ%2F0Cxl9rJCfHvoKLCexyXi2NZ2qTKDaPDs32JoUbQyq1XI2T87aX67d3MSXjD0qhp3Fgv%2Fi8ZHKPD0bJGWzTMsKvTnnZ9%2BUHCGp0YbohfkvM1fAboURdEPRN0SDrgD%2Bcwth%2B73sq2ivhCLMSUIajfaJ2A80QHa2Rcxuzr2X2S9szPaKCfQew7Raz6ts7Ia8dlPqEnzZpi2rJzd7PeT%2FEDO%2BKZewV4ryN9NyQVoJ76OV4NNoaNsQhDbMgnFf4OQMqXCWe8cVeyJ9sO6tSSssgSTO9xuqWYGcOhmRvfhvsmjXnArSJC54OBK93yOjDz6ZXDBjqkAQ223QINx95rmW9jddA0wqIXZXRLwkF%2Bt%2FHOmID2iMF1xCOXUtQb2%2BHc6JzMVHXZ6inSAluStSBuu3qndEIjeuz9siXnUbtSqmoKmPmNdZ6qm%2FLFc2rLd0KvRCZ8ELFCTKkxbD530oc%2Fyo4tPYoVcSNjETStot%2FGHom90gU9lUkS%2BR2ETdPOYfzVEz1nn5L1gkLIZKW%2F%2BsH2mcTv6%2FyLtmW3nR%2FC&X-Amz-Signature=37215bec2f3861a5c8aafc9779cd38154d0a75b4332f1f6ff78c6265dc5503c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6I433EW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8JM0q8%2BW%2FfwicoPFmlAR0EJRRFpudsuN5px%2FZxB3SRwIhAJ5a49clXojTX1WLVLV%2B4W5u3e8emioNYdkLs361TfcFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8Xgt7Crt9PPbdKBYq3AOwlaOg1i1IWf8efdg04d1ns0c2o6tdO76klEu6uv8cKe0BUtrPi0NDEuiaOCYKpiH4lJeaGYx4zPU4qc6rPHU3ICYrzRpuhbZuP3dkUsXLDsLyQnqwjLyjyg6gSTu9gsr6yelwSz2HeI4OMrd3nxHvkTXn76ZhFguJXUTQ6YbsiVG3IolY2SquuqkeCy5IW4R5%2BasepLvzEve7QKcvHVv96mfK3cPoi9dvlpxTLNZwk4logpj93jeWE3oyfm%2FqnrnXX%2Fj%2BIa1LSq%2FF7FS5vi9vw2lY8v1TS39KO%2BILsUHaggRRX8A712UzrUC6sjGrnfVZ%2F0Cxl9rJCfHvoKLCexyXi2NZ2qTKDaPDs32JoUbQyq1XI2T87aX67d3MSXjD0qhp3Fgv%2Fi8ZHKPD0bJGWzTMsKvTnnZ9%2BUHCGp0YbohfkvM1fAboURdEPRN0SDrgD%2Bcwth%2B73sq2ivhCLMSUIajfaJ2A80QHa2Rcxuzr2X2S9szPaKCfQew7Raz6ts7Ia8dlPqEnzZpi2rJzd7PeT%2FEDO%2BKZewV4ryN9NyQVoJ76OV4NNoaNsQhDbMgnFf4OQMqXCWe8cVeyJ9sO6tSSssgSTO9xuqWYGcOhmRvfhvsmjXnArSJC54OBK93yOjDz6ZXDBjqkAQ223QINx95rmW9jddA0wqIXZXRLwkF%2Bt%2FHOmID2iMF1xCOXUtQb2%2BHc6JzMVHXZ6inSAluStSBuu3qndEIjeuz9siXnUbtSqmoKmPmNdZ6qm%2FLFc2rLd0KvRCZ8ELFCTKkxbD530oc%2Fyo4tPYoVcSNjETStot%2FGHom90gU9lUkS%2BR2ETdPOYfzVEz1nn5L1gkLIZKW%2F%2BsH2mcTv6%2FyLtmW3nR%2FC&X-Amz-Signature=3e0895e0de4e4aa2b1f2cae400956eb5595ec41266b081ada370036a8c59487c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7Y7I3K%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgVphJISnx7TuN%2FOYw1sFZhamgLviwN0%2BOTF01EGTY1AiB9WZtLGZSHhe4WZcWbAvfpT%2F3TKiVaVzi4t096Zr8lfiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp69Fn9GAFd%2FF9EAeKtwDJGeMk4OYOfgxUVxe5W2jRV0JCVURlARpn1n0plYwkwGA8AbxmrFYE94KlfT1QldTnVj7k5qrjAVsQkiBxy7dvjsyzOlakzJisj%2B8RWTfARwx63%2BXWorfYabuD8o1f7Z%2BJdjpKWufFlN5Vna3%2BsM7lzEIC2Np5KYJbECnn%2F%2F9tC2nBg98eIQvHti4imvck55mYNpefIw0t3fQ9M2LFMAyHOIIzQ8u%2BOsnC894ngTtw%2FPEUpJc5t4N7gYhT1xMo51s%2BhUmRFA9A894kH%2BjJh26dPiNA8D%2Fv8Q4J%2B2yecjpxYtV6E6iUrrRx%2Bzgjgn0t1nYONjZWvsBqIf5k%2B92vlf443MqELcOvVeFTUkRCFe45bFa3%2FdN9%2BBX1kpOauxBN82ZjdpFSsF0%2FEj%2FEBeyLZzYAm9UN%2Bc4vGct5nWywbxYzpI2G1%2FQ97UTdDpiNzMBt4Qi2fuKJ1oa07CSIM2KIDuo42MHLw7pzSw6CkQ%2Bb69f9woJfVf0kqF1BL0QGCjIAypbNFGZxxpoOq4LTBh2tSLempWFXyOBPX3ByDkE3VXI59WDAvz%2Fqqy2zgNUvSJhUJFpN2ic%2FPovnf3oiIrxMvv1fkMrLoSk0D8XYpoRA6cLOzT2BM0Q7ipY%2F7N3EYswzuqVwwY6pgG2UcjiJYLt5I54RIrGrQd2ATUt8n7bDicQQMOYb7eDGDHNsqmpkERBvvPiz5HDd30oiH0zXAxOtd2ZY7Lmd%2F%2BehYd5CP08F1s1eZcoDmSy7OOgJ90KvWhI6BQUV4kpnSO5ChFlh8GS7nd4LhiHB80LBn5HqAPTU9F%2BINNR65yezWfRWTTLsKqlInL0wNh%2FlVGb7I0Ip8U1ExKSjQbsgjKrmUZlHmRG&X-Amz-Signature=c9f9b5936d0b6abffc7d8c6c452a1413b4b36094b3252e999b6ca7166300e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFMR7FD4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu%2B9QeZMor2VzE%2FmDM1jqh7u9UR66PDjHPtaY9i8LvMAiEA1PaRmQOaa3oGziU0ptWwtUxaOGloqcCGQh7p%2BKKHAZgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjrKe2RuFbKgitXkyrcA57ixAfoS3L94Gxz6l4lXnevgzFRGrJqxrSsWH4Z%2FooBpsQaoqk9JfnYFkHaCMHo%2FNb3IGtrrWrJOyDfqM97nHxRxvHxL3pR9x%2BvWhjytgTGIJh%2Fi79Rcg1DZiPSl8XaWYyGzeVq%2FS6V1bMTah%2F3ADVsYZp8IEiDwteGdgnaRQoPMbMEcrsBb3EEOvkqFdcXIl2cpnFUmQLD106W6QdXmCueNpdTsD6dVOuWCVJOQZjZM78bmQeA%2FCVIWkrtRcfqqhq3uQqGi2zi97pfIuWTLRfO44ek7m0Q%2F4HXB0eDAETmuNPGFc9Q7mOH0J8khmw73bG9Nl07wg3UfCgb2zX8jmCOUF5X5Bju%2F%2B6zvnfIVghdxsZBTBQsTvY%2F6ZHKuKKuOTy454URiTCoNFI%2BCZ9g6VPqHMEeVqor2Bl86Q%2FMxoteZ%2FFowRZ5UM%2BENdnm%2BItRYKY5OI2TuXArMEll%2BIZ%2F3by8hMsfr1paN3GjP6OJc0pYzsNySK1YvzPGtgngD3xfEvn9vQXkjv%2BOiLmXfCdDZDNczBEp4sXtkfRHvXPlzRwxjOHrOvj2s5tkZ02cT6LtQ7Q42Qlcj90%2FvzX0lzSg%2FcC1Nm3q8O5zqHtTmVHnhf1UU0kHneHZk2uHYpv%2FMODplcMGOqUBXT2av2071eo2uOyEl2IlP%2F0mhsBH%2F88Ju%2Bied2O16iUSJP9tQOAbGHtaBlbMzvs79%2FBWtqxFO9Chhk8WX2JOe8DbsywgjhyhunJcmZOwCmtTW%2FXmIPU9QwoC6bBwOvXLrMIc98ksDg0euDTzM1bJI3IUsRHMeiqBmo6lUJUdAi%2BZRPMMnVlVbYmfENprjHdNdFqqMHI7pXpwpxxVSIb7skpy%2Fu3N&X-Amz-Signature=f81c081f1bba2eb4e026064755de590da8a2db3c6b2b21acfa5ceda4df326315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6I433EW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8JM0q8%2BW%2FfwicoPFmlAR0EJRRFpudsuN5px%2FZxB3SRwIhAJ5a49clXojTX1WLVLV%2B4W5u3e8emioNYdkLs361TfcFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8Xgt7Crt9PPbdKBYq3AOwlaOg1i1IWf8efdg04d1ns0c2o6tdO76klEu6uv8cKe0BUtrPi0NDEuiaOCYKpiH4lJeaGYx4zPU4qc6rPHU3ICYrzRpuhbZuP3dkUsXLDsLyQnqwjLyjyg6gSTu9gsr6yelwSz2HeI4OMrd3nxHvkTXn76ZhFguJXUTQ6YbsiVG3IolY2SquuqkeCy5IW4R5%2BasepLvzEve7QKcvHVv96mfK3cPoi9dvlpxTLNZwk4logpj93jeWE3oyfm%2FqnrnXX%2Fj%2BIa1LSq%2FF7FS5vi9vw2lY8v1TS39KO%2BILsUHaggRRX8A712UzrUC6sjGrnfVZ%2F0Cxl9rJCfHvoKLCexyXi2NZ2qTKDaPDs32JoUbQyq1XI2T87aX67d3MSXjD0qhp3Fgv%2Fi8ZHKPD0bJGWzTMsKvTnnZ9%2BUHCGp0YbohfkvM1fAboURdEPRN0SDrgD%2Bcwth%2B73sq2ivhCLMSUIajfaJ2A80QHa2Rcxuzr2X2S9szPaKCfQew7Raz6ts7Ia8dlPqEnzZpi2rJzd7PeT%2FEDO%2BKZewV4ryN9NyQVoJ76OV4NNoaNsQhDbMgnFf4OQMqXCWe8cVeyJ9sO6tSSssgSTO9xuqWYGcOhmRvfhvsmjXnArSJC54OBK93yOjDz6ZXDBjqkAQ223QINx95rmW9jddA0wqIXZXRLwkF%2Bt%2FHOmID2iMF1xCOXUtQb2%2BHc6JzMVHXZ6inSAluStSBuu3qndEIjeuz9siXnUbtSqmoKmPmNdZ6qm%2FLFc2rLd0KvRCZ8ELFCTKkxbD530oc%2Fyo4tPYoVcSNjETStot%2FGHom90gU9lUkS%2BR2ETdPOYfzVEz1nn5L1gkLIZKW%2F%2BsH2mcTv6%2FyLtmW3nR%2FC&X-Amz-Signature=cd8578d90233156bc0fc1a14285d171103c0bc4d43d95fda2b5cbddcf4857459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
