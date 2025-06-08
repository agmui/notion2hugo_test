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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINF7Q35%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OV79n%2F6F%2FJ5YR7DsPZAf%2BcWVZ6jmR4M1s0G5X94TRAIhAIRDdSSAIoPAkBEtQQTSQIu1iKWKMbMCHgFhdiLbH5poKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2QFA2iGqHziR%2FTy8q3AOzS3n2wPZ8j9399t2DuJ%2FKorO3Iic39BlDm1sNoaz5miGOb0leiJ%2F6woLd%2FLqGpQM4dBhJIYAnAMJpkZvWcbY3K6x9t2hzb16Ea4leAUAUF%2BvBk5rj2DdamUZg1gJ1tO4pH%2BXJ0E4UxYPn5HYHvvuI9839jCLQnLE%2FyMkIdreGC9kK4jYkfnwW%2ByUa0UhcivoEBUNOoN%2BOEcftvRpyNbza7PKQFLzSXdMfHc0dQhGDdjNf4L6IMVE%2BTHmcfLeIW45v7Gn4wMTB0Dv7kyG%2Bh1lbuXmIXlwgNuzL7WUsO%2BaAlpP6L9V3Dqj5r2sOdlwGTAI7TzBDHy41qgxRVCT9ZedBLaTU5dt26O6dvbE3aqRIEsq3v4W1e14hpnTrZsTe6C37ZEtOMQdqoJQ81mJGAF4aK2viSZT5TdO1XT45JH5VU7xTs37CPoeAQA%2FIw1fb4Bji9WpRFOOnx%2BlRref6KaQfh2rs0tcJQoiBAIH748MlQVXwwHoqDfkItXAh4bmwPaU6TaygJ0N1fDfI3DS86B2fTYl1qELdYrWS9MLmxflvnCYyFGIbrxYmzaOGw6TBIWEX6T5DDfu4QOSdviy7OEO8foIYZE8uj0hjyYkz2JRjXHQSzE7mVkWGX1m6kDCVppXCBjqkAV91GL1Emq4quZDWSNHLCQ2hvgRIFjr7vLfE8HpgPrBC9GijU%2BajmtH%2Bgcy5UCpbJl%2FKmBE%2Br%2FaoaGnv3OOp%2FQbJ717f6IIc%2B%2Fa26xvoZ%2B11lEwFhDVtsQF5EDMDj1tJul8WLiOrmbHgDvx9O%2BeSZoAo9LQi5xbkqklHrzOwkC6l%2FT%2FMUbw091tv8tXBf7q7TYN%2FMSEnFK9P2iVjOMkBIx66zlrf&X-Amz-Signature=515f511b64231b1e4cd171780f1557b683dc713cf9930016254ddf00796a96f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINF7Q35%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OV79n%2F6F%2FJ5YR7DsPZAf%2BcWVZ6jmR4M1s0G5X94TRAIhAIRDdSSAIoPAkBEtQQTSQIu1iKWKMbMCHgFhdiLbH5poKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2QFA2iGqHziR%2FTy8q3AOzS3n2wPZ8j9399t2DuJ%2FKorO3Iic39BlDm1sNoaz5miGOb0leiJ%2F6woLd%2FLqGpQM4dBhJIYAnAMJpkZvWcbY3K6x9t2hzb16Ea4leAUAUF%2BvBk5rj2DdamUZg1gJ1tO4pH%2BXJ0E4UxYPn5HYHvvuI9839jCLQnLE%2FyMkIdreGC9kK4jYkfnwW%2ByUa0UhcivoEBUNOoN%2BOEcftvRpyNbza7PKQFLzSXdMfHc0dQhGDdjNf4L6IMVE%2BTHmcfLeIW45v7Gn4wMTB0Dv7kyG%2Bh1lbuXmIXlwgNuzL7WUsO%2BaAlpP6L9V3Dqj5r2sOdlwGTAI7TzBDHy41qgxRVCT9ZedBLaTU5dt26O6dvbE3aqRIEsq3v4W1e14hpnTrZsTe6C37ZEtOMQdqoJQ81mJGAF4aK2viSZT5TdO1XT45JH5VU7xTs37CPoeAQA%2FIw1fb4Bji9WpRFOOnx%2BlRref6KaQfh2rs0tcJQoiBAIH748MlQVXwwHoqDfkItXAh4bmwPaU6TaygJ0N1fDfI3DS86B2fTYl1qELdYrWS9MLmxflvnCYyFGIbrxYmzaOGw6TBIWEX6T5DDfu4QOSdviy7OEO8foIYZE8uj0hjyYkz2JRjXHQSzE7mVkWGX1m6kDCVppXCBjqkAV91GL1Emq4quZDWSNHLCQ2hvgRIFjr7vLfE8HpgPrBC9GijU%2BajmtH%2Bgcy5UCpbJl%2FKmBE%2Br%2FaoaGnv3OOp%2FQbJ717f6IIc%2B%2Fa26xvoZ%2B11lEwFhDVtsQF5EDMDj1tJul8WLiOrmbHgDvx9O%2BeSZoAo9LQi5xbkqklHrzOwkC6l%2FT%2FMUbw091tv8tXBf7q7TYN%2FMSEnFK9P2iVjOMkBIx66zlrf&X-Amz-Signature=aed096f77aebf300dfd15b789513fc3429851c665f158fdc325f8fd05baea386&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINF7Q35%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OV79n%2F6F%2FJ5YR7DsPZAf%2BcWVZ6jmR4M1s0G5X94TRAIhAIRDdSSAIoPAkBEtQQTSQIu1iKWKMbMCHgFhdiLbH5poKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2QFA2iGqHziR%2FTy8q3AOzS3n2wPZ8j9399t2DuJ%2FKorO3Iic39BlDm1sNoaz5miGOb0leiJ%2F6woLd%2FLqGpQM4dBhJIYAnAMJpkZvWcbY3K6x9t2hzb16Ea4leAUAUF%2BvBk5rj2DdamUZg1gJ1tO4pH%2BXJ0E4UxYPn5HYHvvuI9839jCLQnLE%2FyMkIdreGC9kK4jYkfnwW%2ByUa0UhcivoEBUNOoN%2BOEcftvRpyNbza7PKQFLzSXdMfHc0dQhGDdjNf4L6IMVE%2BTHmcfLeIW45v7Gn4wMTB0Dv7kyG%2Bh1lbuXmIXlwgNuzL7WUsO%2BaAlpP6L9V3Dqj5r2sOdlwGTAI7TzBDHy41qgxRVCT9ZedBLaTU5dt26O6dvbE3aqRIEsq3v4W1e14hpnTrZsTe6C37ZEtOMQdqoJQ81mJGAF4aK2viSZT5TdO1XT45JH5VU7xTs37CPoeAQA%2FIw1fb4Bji9WpRFOOnx%2BlRref6KaQfh2rs0tcJQoiBAIH748MlQVXwwHoqDfkItXAh4bmwPaU6TaygJ0N1fDfI3DS86B2fTYl1qELdYrWS9MLmxflvnCYyFGIbrxYmzaOGw6TBIWEX6T5DDfu4QOSdviy7OEO8foIYZE8uj0hjyYkz2JRjXHQSzE7mVkWGX1m6kDCVppXCBjqkAV91GL1Emq4quZDWSNHLCQ2hvgRIFjr7vLfE8HpgPrBC9GijU%2BajmtH%2Bgcy5UCpbJl%2FKmBE%2Br%2FaoaGnv3OOp%2FQbJ717f6IIc%2B%2Fa26xvoZ%2B11lEwFhDVtsQF5EDMDj1tJul8WLiOrmbHgDvx9O%2BeSZoAo9LQi5xbkqklHrzOwkC6l%2FT%2FMUbw091tv8tXBf7q7TYN%2FMSEnFK9P2iVjOMkBIx66zlrf&X-Amz-Signature=03a668d5d27bebb233c6571346f27142daf63e0d4f5dd63a0ad06e49dab15df8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCRZ5QOU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrAcRmHdwlo9Rjyco3MvYz8B1DMsy0mAzBspB0IxtgjAiBs85IAjJlKQZtACxqYpUTw9LdQi1nimxpDAaSgsyAI7iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRW8vanxTAok1%2BzdXKtwDdzi9sjDomiYa%2FCnu2gjIzSHofmwgSNM9%2BPg%2F3q76y4QYVqUREPgQQWkd0cNkdvthUbtdYFbUpUiTz%2FQaZDJYrBzrs3smRAqaC9cTmC1q8JOXoxsuaHKnShyPaCO1nK9ulNAaSyX5ftiILxhMQLuWiEftFQ6u2LSZGn8SBrVJmrx1jG9imWa%2Branyc7Wq%2BpkHVmU3fk%2FOefB5sgmA%2BzXssdKT81lgpILVqqfjlYaCCytCeLCiyQOCASuZHVI%2FqtxmuZPSmD7WWnYDN8Cb%2Fv9RvFHWR%2B%2FnQz5%2Fp0oIO3oGKe4eiBt3mkTzeZ54lhnUAUXaUJp5mhXQnVgv68Lf31QhJks9HKBVEhN%2Bs%2F9Y2ptM0m2TzbuPSgiKSfwrQZ7C2sAs766lb86e6%2F3AgIsTQdzzSXRSEs6vImL9uQoZBiF7mquQRwKRlI%2Fhx1G2UKYHcwnITeqU8NakTdzXkVh%2BMrJA40XG6cOpQLlnrqhGBmtfqxgsXQqMp1QTdGOZ9bQ80UuI%2BhuTzj8gz6J74IgXUds3%2B0D0Ny2zeO91lcdTNypHN%2FZKgWK3TvoUnbkZYQEuvhfL5KdD30oPovJqIe8oAkEQCfFbgO%2FXaZY%2ByQAfYqyNG207BsVIW0tXxuyhrzMwxqaVwgY6pgGvas%2Fel3UPzL53Pvce0SkWC5f3RP6BAeoR%2BFwx0%2Bu%2BmXTIyOjFSP1xuSJ0FiDCwBCh2rHQ7HLpw2h%2BWsMdrjD2KHu4q0QdjDBpAqeN6WdJtDT%2F3TMSy9314VC%2ByAzTkUgpW8orwlntZs27V1QJkTJSAv3vQt74XRcBuBzMhUrsVz8Pw%2FSO5tf6nkByMmj5FH%2BNon8oQY%2FIR1HgFyx2aAeBRq23NdxD&X-Amz-Signature=4698db92982456878cb88cb4440b74a2906f961bc1ebc375e33f61ee4eacd5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5FG4XS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mjUfw1ohF5uy%2BAEMFOyhpPPlFh8ialpuqBC2X4FCVQIgSIx2UCiFKZbZbR6BgpTgOkV89JPOrJTqcKZZYuB2FXsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fh5Pf1ihy8NESS1SrcA%2F5GwZBJd6TnyXB4fNAw%2B2uUChcTIccbVr%2BmINeIpZNk8yIfT00JsmJ%2B7s8kVCtHBuvO5N5Iby208j4XTFQhnibyq%2FdiuLL9r%2FZFBBYV0sdtCU4UWFJWPvDoASx6V0Z1W2XiO3AAMw1f%2B63N88%2Fpv4%2BVTF2jyQPRmnbN9EdvNnu2CS5QxnqUdCN8Fc7Lpp3xE4fpcEph8hva51WPnUQ1mEf%2BiP89Mu3lmdqLpx2v9MPGweHg8wuDmz%2BYMh%2BPI04LYxYVIz7PRH0j1aBTn800UASsSBvSuGrfLuRqO4YLkZzqGxz1bctFmh3Vn5hGIYgNWVjiQKiGQvK2uv%2FvlGWPaLyLuBdalzpXNoT%2FOBiK3nJ%2FEl17jVki7dryfXqzbWb1wtbdr6Oq8QtryawrH8jLqu6raEDk3F4rJSPx3Ska2YMSaYcRL3Slp61CS0bxMj5V03NGvoMoLYzYKAiMlU55ZM9Ei1WbrWF2oktEHE8pqTSM5C0lXIs5ImK%2F5afcCHJ71NljSm2kT9DJP10Q12yEzfH91N92a7ilMf2HCtvCVqC0nPP9qKVUDAT2BH3dQCMd73WRAqi6wEZnbVIY9d%2BVPPjq%2Bo%2FdzKfvDDlxqlUejE3HQgOKk8D4xKIQ1qe9MKimlcIGOqUBHKNnVUALH0fKi8fjapdaBlek0r9qPgTBQnyKkdPHYZrEr35rBWpMr4GaEin5I9yp8qy3iHWLq3r6tfGDDmyEMONXST0HKPSysii%2FcwmdYWnIpRNax0BdlxGsHN8szvEyM1AJsaHiuG5XXJWDQ9WRdXCpi841SIJdqz5a8GNPSu0JuwbV1v%2B7knYeVXzpMnIYXoQUk%2FMH15ADASm43Z1s1HaNhhO8&X-Amz-Signature=cfd895d417f55de0a6f24063f023256ba3d226c020679d211055189b60ecab82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINF7Q35%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OV79n%2F6F%2FJ5YR7DsPZAf%2BcWVZ6jmR4M1s0G5X94TRAIhAIRDdSSAIoPAkBEtQQTSQIu1iKWKMbMCHgFhdiLbH5poKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2QFA2iGqHziR%2FTy8q3AOzS3n2wPZ8j9399t2DuJ%2FKorO3Iic39BlDm1sNoaz5miGOb0leiJ%2F6woLd%2FLqGpQM4dBhJIYAnAMJpkZvWcbY3K6x9t2hzb16Ea4leAUAUF%2BvBk5rj2DdamUZg1gJ1tO4pH%2BXJ0E4UxYPn5HYHvvuI9839jCLQnLE%2FyMkIdreGC9kK4jYkfnwW%2ByUa0UhcivoEBUNOoN%2BOEcftvRpyNbza7PKQFLzSXdMfHc0dQhGDdjNf4L6IMVE%2BTHmcfLeIW45v7Gn4wMTB0Dv7kyG%2Bh1lbuXmIXlwgNuzL7WUsO%2BaAlpP6L9V3Dqj5r2sOdlwGTAI7TzBDHy41qgxRVCT9ZedBLaTU5dt26O6dvbE3aqRIEsq3v4W1e14hpnTrZsTe6C37ZEtOMQdqoJQ81mJGAF4aK2viSZT5TdO1XT45JH5VU7xTs37CPoeAQA%2FIw1fb4Bji9WpRFOOnx%2BlRref6KaQfh2rs0tcJQoiBAIH748MlQVXwwHoqDfkItXAh4bmwPaU6TaygJ0N1fDfI3DS86B2fTYl1qELdYrWS9MLmxflvnCYyFGIbrxYmzaOGw6TBIWEX6T5DDfu4QOSdviy7OEO8foIYZE8uj0hjyYkz2JRjXHQSzE7mVkWGX1m6kDCVppXCBjqkAV91GL1Emq4quZDWSNHLCQ2hvgRIFjr7vLfE8HpgPrBC9GijU%2BajmtH%2Bgcy5UCpbJl%2FKmBE%2Br%2FaoaGnv3OOp%2FQbJ717f6IIc%2B%2Fa26xvoZ%2B11lEwFhDVtsQF5EDMDj1tJul8WLiOrmbHgDvx9O%2BeSZoAo9LQi5xbkqklHrzOwkC6l%2FT%2FMUbw091tv8tXBf7q7TYN%2FMSEnFK9P2iVjOMkBIx66zlrf&X-Amz-Signature=7f2376f4e21ab5e93e3a61dba9178a9e11bb58e7aea5a956bec0ba7f58db8e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
