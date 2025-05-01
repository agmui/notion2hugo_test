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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZI3WO2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGNx4j%2FST4wcGadR1lAvJzOLCAelUS9CmY%2FFuLGYYAW9AiEA21xCZeTvDJEImGY3L1zBUDrI1Dv%2F1kvSrtVnIpuduKYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdbmjeJoV%2FyhcBCECrcA26FMaqfLqNx8ax1HgA0CCn6h2UW1Rego0qMfuzqhjAWfM350IG8red3T7DmtrhmOUwhR3OYeb0%2BPX4yrOuQ7gwa6jLvIHP04NBbf0NRfp44JX9otwi%2BCV38x56Y5axbJ1HwD%2FTiGGh8%2B7uHKf%2BbxOUkf8lCpxmsfjkBPS6KWvEf3ZEfsV%2FTyechcIiKhDWbmzt41dKY0c7ePC2BRkoxXtV4swX8GgD1PNRR%2BJE2xvef%2BSC%2BoIoNMpAaB9MumSPPGV47RfrCTvSXTLKTwCyf9%2BTMHUWd50n1vHOnuU5LX7Lc%2BKCckEOZB651xywbOFuMdYb2ocVFULOFI%2FbIhZPMlyQvzgbNDPHSo3UhBUF0nMnGiDYRtOA%2FIVvsZgFiIYTFpSFpr5nmE9YWSzyQtYFGhEH9oAxGAQD7Lrz3%2F%2FA4BBY5KP965WAXqJxzqOldoICt%2BDok9FTqChGfcQczVdXtGEJQJULEeWJbWohT3FzfQaWLXTSC3ZYxoT8CGT08hbu%2B65nwpXxGVnGVCzjJtWrE57Qo3vquCZdaWraeEsu2oiWvPooepH3Zq4TRbGjY%2FpqrkjzyBuf6I8bcwuV8NeX73WKhf9Yik%2FHB0qK3CYVq%2FRoNi2yN12fhpC1IPp7UMP6wzMAGOqUBCY71AmVCBbRtWBpUWPVwOUQsux5yenik3QYRd%2BFnaK21%2FbxCaPNmYplZqxJwOnQmXvjjdpV8xXZdhWFgt8F18DhrWA0C%2BWrYSO43qwUgh%2BriL%2FZKLGCq1kOb8kaQ4%2FkL%2Bx%2BEyjOuYxGsn%2FJjzRpWw0XtLIX6669C%2BUOeoe93%2Fun5n9Cyl4g%2BoJ2hU8GKgvhyHA73IuFSOsoawJjxrn6%2BLqyAlVtQ&X-Amz-Signature=8cdfae185044265148bae7196c6a46ada2eab7414eb9093f8876d54debbde193&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZI3WO2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGNx4j%2FST4wcGadR1lAvJzOLCAelUS9CmY%2FFuLGYYAW9AiEA21xCZeTvDJEImGY3L1zBUDrI1Dv%2F1kvSrtVnIpuduKYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdbmjeJoV%2FyhcBCECrcA26FMaqfLqNx8ax1HgA0CCn6h2UW1Rego0qMfuzqhjAWfM350IG8red3T7DmtrhmOUwhR3OYeb0%2BPX4yrOuQ7gwa6jLvIHP04NBbf0NRfp44JX9otwi%2BCV38x56Y5axbJ1HwD%2FTiGGh8%2B7uHKf%2BbxOUkf8lCpxmsfjkBPS6KWvEf3ZEfsV%2FTyechcIiKhDWbmzt41dKY0c7ePC2BRkoxXtV4swX8GgD1PNRR%2BJE2xvef%2BSC%2BoIoNMpAaB9MumSPPGV47RfrCTvSXTLKTwCyf9%2BTMHUWd50n1vHOnuU5LX7Lc%2BKCckEOZB651xywbOFuMdYb2ocVFULOFI%2FbIhZPMlyQvzgbNDPHSo3UhBUF0nMnGiDYRtOA%2FIVvsZgFiIYTFpSFpr5nmE9YWSzyQtYFGhEH9oAxGAQD7Lrz3%2F%2FA4BBY5KP965WAXqJxzqOldoICt%2BDok9FTqChGfcQczVdXtGEJQJULEeWJbWohT3FzfQaWLXTSC3ZYxoT8CGT08hbu%2B65nwpXxGVnGVCzjJtWrE57Qo3vquCZdaWraeEsu2oiWvPooepH3Zq4TRbGjY%2FpqrkjzyBuf6I8bcwuV8NeX73WKhf9Yik%2FHB0qK3CYVq%2FRoNi2yN12fhpC1IPp7UMP6wzMAGOqUBCY71AmVCBbRtWBpUWPVwOUQsux5yenik3QYRd%2BFnaK21%2FbxCaPNmYplZqxJwOnQmXvjjdpV8xXZdhWFgt8F18DhrWA0C%2BWrYSO43qwUgh%2BriL%2FZKLGCq1kOb8kaQ4%2FkL%2Bx%2BEyjOuYxGsn%2FJjzRpWw0XtLIX6669C%2BUOeoe93%2Fun5n9Cyl4g%2BoJ2hU8GKgvhyHA73IuFSOsoawJjxrn6%2BLqyAlVtQ&X-Amz-Signature=9caa0911d34f0a07dd12fff61ed22c1f6bb16e7cc6717cc4106c961dc897bf03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZI3WO2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGNx4j%2FST4wcGadR1lAvJzOLCAelUS9CmY%2FFuLGYYAW9AiEA21xCZeTvDJEImGY3L1zBUDrI1Dv%2F1kvSrtVnIpuduKYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdbmjeJoV%2FyhcBCECrcA26FMaqfLqNx8ax1HgA0CCn6h2UW1Rego0qMfuzqhjAWfM350IG8red3T7DmtrhmOUwhR3OYeb0%2BPX4yrOuQ7gwa6jLvIHP04NBbf0NRfp44JX9otwi%2BCV38x56Y5axbJ1HwD%2FTiGGh8%2B7uHKf%2BbxOUkf8lCpxmsfjkBPS6KWvEf3ZEfsV%2FTyechcIiKhDWbmzt41dKY0c7ePC2BRkoxXtV4swX8GgD1PNRR%2BJE2xvef%2BSC%2BoIoNMpAaB9MumSPPGV47RfrCTvSXTLKTwCyf9%2BTMHUWd50n1vHOnuU5LX7Lc%2BKCckEOZB651xywbOFuMdYb2ocVFULOFI%2FbIhZPMlyQvzgbNDPHSo3UhBUF0nMnGiDYRtOA%2FIVvsZgFiIYTFpSFpr5nmE9YWSzyQtYFGhEH9oAxGAQD7Lrz3%2F%2FA4BBY5KP965WAXqJxzqOldoICt%2BDok9FTqChGfcQczVdXtGEJQJULEeWJbWohT3FzfQaWLXTSC3ZYxoT8CGT08hbu%2B65nwpXxGVnGVCzjJtWrE57Qo3vquCZdaWraeEsu2oiWvPooepH3Zq4TRbGjY%2FpqrkjzyBuf6I8bcwuV8NeX73WKhf9Yik%2FHB0qK3CYVq%2FRoNi2yN12fhpC1IPp7UMP6wzMAGOqUBCY71AmVCBbRtWBpUWPVwOUQsux5yenik3QYRd%2BFnaK21%2FbxCaPNmYplZqxJwOnQmXvjjdpV8xXZdhWFgt8F18DhrWA0C%2BWrYSO43qwUgh%2BriL%2FZKLGCq1kOb8kaQ4%2FkL%2Bx%2BEyjOuYxGsn%2FJjzRpWw0XtLIX6669C%2BUOeoe93%2Fun5n9Cyl4g%2BoJ2hU8GKgvhyHA73IuFSOsoawJjxrn6%2BLqyAlVtQ&X-Amz-Signature=e5640dcd8e9782289f827dd15ff94a7d6c3cf118a44161640878575413c7aaa3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNNGLGB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDUy4P0huIkB74Z4Ey0WRB8Ck004bY5eaF42XSH%2BIPrGgIhAKEf%2FLhF%2B3Sz7uTCaRkTJz2ooCMfhqmyeFKKMeZf7a0xKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwa%2BQo9vaq%2ForgxCIq3AMzPn3910lI9KJQ0rez205ufltFQnr6a%2BlHtsGmw2js21OXBS8n1JiF9QMEzHdDZuTSO8pEAAAj%2FWI1zMUQCgdtP3%2FMcP5mzYhdBVs8haGgQ50bi2s6MIAxu3nrc4ciFVVORfA6VTFKZ8EjvjUxftDdZott2npNC7Pq25YBznaE5JbTuQM6G84Nk8yREQZWC2qXnTrNmBuY5Wrn9MZlP60sPxNL7xCatCKIhtmk4EqXh7tngS%2BJUp6YVUUvwYW3N%2FpSBJs4fwqGAQvGUizheoFTlEhlYJqWHwXocyLHxTZNztpb1Ks0LICumpi03uHxnJspaDS77NNUEcan3U1RQ8QWigphHV76D2XTJUXJ9usyjgjOsllN5kzD2ki6TwDRunFLMr1%2BlG9oYhgXHt96ibvwuS7bLhwJa1ItfaMlrPBmoF7fKn%2BUC3AmbPpbMO2zEpAdFf4yTbeLtXp4ofLC60IOdcuBXnRXUT21KG8LAo%2BbknJSNeCVM7GyaUwtTnrOX%2F%2Fth8H8eK5REt260bwSkv6tuhZKpiOcOOybyL59QpHYcL31sW5k6xyCb3RUHhioAY3o7zWzyV8bjmxqLltITEtSV6DFGxo9f282VlgTixHL0DajWUUvvSM7gVSq9TCFsczABjqkAXglVNaqZoVwJ0OqngCWNxL2Df6jjNDLD8n6N%2B4UgPKqy%2B6ifv89tCo710j%2BkyFWemb9TJWzEgotmk7SbdaLnCoONLyDL0QTGbSYrnAL5z8gsuiLOtO5hN5%2Bx5%2FYNTWk04Khk91is2T5CN%2FoRF%2F5M7swwkp%2BASZGJx8fd5c%2BiZizYDt4aZ6qGMaB0NVgnrvQJracX%2FgtRjuggG6QliE%2B8gWT0B07&X-Amz-Signature=ce2760ee6f4436710f142a54a0b736eed48e97c78a48d265bb6b40b290e511a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3ZN6KU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC8uxeJA0B4Hjom6DMaRPmZRB54H0gC9mDQAThSAR4E2gIhAP%2BrW9ZLWlzH0lD59kI9OYnaNw9Bxo1dRjS6vqgAOZ%2BRKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtkivrl7z2U4aFlY0q3ANW5byekBxknw41tLL7aO7nBLNKXrNBdwGAm2VVo7h0Yimm7fnlcHBTw%2F0Qvr0GaQCFVamGfETvDEihKEu6y%2Bnt7egOQE1DPmmF8%2FTfR8NgQJDMS74WXdO49%2Bsg8DNSZCX2mT%2FPIDKJfJfCn6qZUBzcK0OAWYYFF5wg%2BobZMII%2BM6jmrf9sb4aXI%2B3F36%2Fn8gSkzWsDNNZ8X%2FcfdbdoP30JwQUZLyYbI5cnjvFXwIcusUiDQxAIwG%2Fv2PgKzrghpfAwC28ZR2liPh1SB6OHJcfREE%2FqhW%2BSY40xl62r79phh%2FJQFknCpXgG5dXZdjBl3lFbJOBkvpdHSutLq4NZTdOKy2yInz7kmv8AaVJL%2Fl7%2BYnWLViDnWHAMLjhSUYPkX3grVTb4R8jkqKOgRFB%2FfqgxLvA5z%2F0IHbFuDPioeH4GvHjO3Im59gQiXi8mFdSCZV6gncpntDK%2FWffJ7pNyThDotwmB5yadbx%2BvlkS1gWiSOzLqjBJaf9oO4Cj9dIznUdrgW%2FOT2CSw0J9sFgpL0z5z1h7Hp2kN9SLC7V5w01zVXTDpU4PKohiPMQJ38GgJADmZmuPTbFJTsgLRNbyvFmhj0w2qoED%2FnqgOq5LM9gKA%2BP5iHoduf1SuK1tTmjD1sMzABjqkAeEaS7iPIiK3DR6MWuMVkp8b83xu0B4GoDVxb1dk0Khl8AZ2L3fy%2BElLlZ6ZpCBBojNOr5rGjjZvVY1vSnfzKwIaZgXfJTmJu47sKOGX1ig4qhwEfFJXt1fhGH1ejQx%2Ft%2BWUyYTp%2FTOFWOpMp7UZXyfZ0XnJqwCOzrVyyhKrbJosTnICTn%2BbffemnLGVCxvAuVv8LVwJcFlNZ8delHq9Y6huv2Wh&X-Amz-Signature=8f25f5224bbd56b5a4c88a026142643b07f09fd383dbe7478feebcd6de663dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZI3WO2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGNx4j%2FST4wcGadR1lAvJzOLCAelUS9CmY%2FFuLGYYAW9AiEA21xCZeTvDJEImGY3L1zBUDrI1Dv%2F1kvSrtVnIpuduKYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdbmjeJoV%2FyhcBCECrcA26FMaqfLqNx8ax1HgA0CCn6h2UW1Rego0qMfuzqhjAWfM350IG8red3T7DmtrhmOUwhR3OYeb0%2BPX4yrOuQ7gwa6jLvIHP04NBbf0NRfp44JX9otwi%2BCV38x56Y5axbJ1HwD%2FTiGGh8%2B7uHKf%2BbxOUkf8lCpxmsfjkBPS6KWvEf3ZEfsV%2FTyechcIiKhDWbmzt41dKY0c7ePC2BRkoxXtV4swX8GgD1PNRR%2BJE2xvef%2BSC%2BoIoNMpAaB9MumSPPGV47RfrCTvSXTLKTwCyf9%2BTMHUWd50n1vHOnuU5LX7Lc%2BKCckEOZB651xywbOFuMdYb2ocVFULOFI%2FbIhZPMlyQvzgbNDPHSo3UhBUF0nMnGiDYRtOA%2FIVvsZgFiIYTFpSFpr5nmE9YWSzyQtYFGhEH9oAxGAQD7Lrz3%2F%2FA4BBY5KP965WAXqJxzqOldoICt%2BDok9FTqChGfcQczVdXtGEJQJULEeWJbWohT3FzfQaWLXTSC3ZYxoT8CGT08hbu%2B65nwpXxGVnGVCzjJtWrE57Qo3vquCZdaWraeEsu2oiWvPooepH3Zq4TRbGjY%2FpqrkjzyBuf6I8bcwuV8NeX73WKhf9Yik%2FHB0qK3CYVq%2FRoNi2yN12fhpC1IPp7UMP6wzMAGOqUBCY71AmVCBbRtWBpUWPVwOUQsux5yenik3QYRd%2BFnaK21%2FbxCaPNmYplZqxJwOnQmXvjjdpV8xXZdhWFgt8F18DhrWA0C%2BWrYSO43qwUgh%2BriL%2FZKLGCq1kOb8kaQ4%2FkL%2Bx%2BEyjOuYxGsn%2FJjzRpWw0XtLIX6669C%2BUOeoe93%2Fun5n9Cyl4g%2BoJ2hU8GKgvhyHA73IuFSOsoawJjxrn6%2BLqyAlVtQ&X-Amz-Signature=eadf2568b2d92e6bca1f989565fdfdf0088766e26ba0b2886924c93bc62d17ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
