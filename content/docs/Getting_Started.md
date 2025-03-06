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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWHJI5V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqMiowUht9lrzSxGi1jH7Z9D0Mf7RQHPdOKU5Qypii4AiEAx8ESVFlm7TKfo%2Fq1Y4z1HJ%2BoF8KLUwjzBlfcouLqdWcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJATpPfne7SVSE9PnircA%2F5Q23ffDnoyzFKwbniX7eSJ4BsypFFUXY01uMe55Jn59SQ9Yqj3fJ3bDThLGSy3OItcuqd%2BNOCJvrm5StwWWTQkTBZPTpcvDbBBXAyoCrox5qwvQIAc%2FEsYtNBPoDOTQ7hSc3%2Fq7x%2FV08cAexiiP6Hj2k4Zjhj2gCV7YJprXoBrtVjN8eb3bMovwxQwbYDlwdWPlCQ%2BP8StkwXR3KfJzWOTD6Azam%2BuZfE%2BR79Y0%2B%2F6Jrd8sDakS0uCch%2BA1laHmQTBnkwxE%2BFRoquFHuwpKXElfOTUD%2FIijALuvWS8bKrlll%2FKYXO%2FRYHuZy46lJ6eLF1Ptad2O6G6Yavap30FfBqMPSwuktUhW1LOIkc2SkOmPDMW1rubtVwr8UhOBD%2BlFLI9bFU0HFGidNJNK0tDV3HoSMY2o2D8lBn5wIC%2BelVPF%2FKvNtOSNFQNwa5Z67sj8HgJHU81O98Mkbnvrze%2FcIx%2Fr%2Fx9XbNpsDbpfN2q2DfObaosqviSa3J2l2vWKRBNAF7fb6dVB2QuThq87SZnIMwiT6LBZJZ8HhMrQEGcBpj2Ja%2FmVFLwaJ%2FETCOfNCECw95LJ2v0iT4gz%2FlEy4s9YOmcQn3tPZ1f1X1aE8nMnvQQ%2BJ3MLkA%2F4vbo0xg2MIDZpL4GOqUBhTsuOOoPwE5rtdONyOi20B0WqkC9%2BwY%2FDT4%2B9Ghixz3lFQuJT%2BJHTa9Gc5RXyfYSi9XyKgStOcx83tvP1R7aURhFTAno0IDuYJ%2Boo6NjZeLBOkp3IHgmkFyC2cm6LbUL97000MIpBnWNDCM10xQb0D%2FVOPrgMO%2BfhFfj4%2BIOWPU4UQknFfX%2ByJJD3%2FsR0AapnSHAGdj4mnaYZDpBGMpgJTsogiSs&X-Amz-Signature=61f5f6339b8924e8f9321622a9ee03a8bde9ee43b5b7df892189d842dbce065f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWHJI5V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqMiowUht9lrzSxGi1jH7Z9D0Mf7RQHPdOKU5Qypii4AiEAx8ESVFlm7TKfo%2Fq1Y4z1HJ%2BoF8KLUwjzBlfcouLqdWcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJATpPfne7SVSE9PnircA%2F5Q23ffDnoyzFKwbniX7eSJ4BsypFFUXY01uMe55Jn59SQ9Yqj3fJ3bDThLGSy3OItcuqd%2BNOCJvrm5StwWWTQkTBZPTpcvDbBBXAyoCrox5qwvQIAc%2FEsYtNBPoDOTQ7hSc3%2Fq7x%2FV08cAexiiP6Hj2k4Zjhj2gCV7YJprXoBrtVjN8eb3bMovwxQwbYDlwdWPlCQ%2BP8StkwXR3KfJzWOTD6Azam%2BuZfE%2BR79Y0%2B%2F6Jrd8sDakS0uCch%2BA1laHmQTBnkwxE%2BFRoquFHuwpKXElfOTUD%2FIijALuvWS8bKrlll%2FKYXO%2FRYHuZy46lJ6eLF1Ptad2O6G6Yavap30FfBqMPSwuktUhW1LOIkc2SkOmPDMW1rubtVwr8UhOBD%2BlFLI9bFU0HFGidNJNK0tDV3HoSMY2o2D8lBn5wIC%2BelVPF%2FKvNtOSNFQNwa5Z67sj8HgJHU81O98Mkbnvrze%2FcIx%2Fr%2Fx9XbNpsDbpfN2q2DfObaosqviSa3J2l2vWKRBNAF7fb6dVB2QuThq87SZnIMwiT6LBZJZ8HhMrQEGcBpj2Ja%2FmVFLwaJ%2FETCOfNCECw95LJ2v0iT4gz%2FlEy4s9YOmcQn3tPZ1f1X1aE8nMnvQQ%2BJ3MLkA%2F4vbo0xg2MIDZpL4GOqUBhTsuOOoPwE5rtdONyOi20B0WqkC9%2BwY%2FDT4%2B9Ghixz3lFQuJT%2BJHTa9Gc5RXyfYSi9XyKgStOcx83tvP1R7aURhFTAno0IDuYJ%2Boo6NjZeLBOkp3IHgmkFyC2cm6LbUL97000MIpBnWNDCM10xQb0D%2FVOPrgMO%2BfhFfj4%2BIOWPU4UQknFfX%2ByJJD3%2FsR0AapnSHAGdj4mnaYZDpBGMpgJTsogiSs&X-Amz-Signature=d3d60aa45a039a8316a8fd322a5b990208829bc03b0ef2e666888ed8b6bc2ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFUNXHYB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmvIJC9c4gcZ8t%2BW9h8SeYDh4JUKBQNMrHKUuVI6zTfAiEA3P5s6fDrX%2B%2B2WMFSkcctInAxpOLGAACgnA7VYp%2FdrE0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDE7wMTBq%2FoLWjweVKCrcAzK9COa9wBrUg8UwiTvNDbLjtXqch4SeqG8aElshjrTqZwUQaetLTsxK2zXltilDxkzICS3uNgBZzXnj39QYrKq56gmAkhGAKDlk9MeT4rw5NJ8SPZSB29IhSvOeQoSkgAKl1nb5A9igqD6LOFofRJntNwOxD2t%2BkA0QPNsFcVwXS2FlS7shLK%2FvSCmqzjuMglCDt9vKxJ8CT7b6IuLZ9n6kSh%2FkAgErKtfHdO%2FMO5pHcM%2FVx1A2PjxK5DqUlIiQS%2BQcZlkYn3wWI4A%2BoZ1J4Pz0jxEFAuKa0JYePcTfCorf7AAwZXe%2Bh1fWZLedc6bkw4nY7SjmDyE1g7B1FJ39aRl9Deq7W5C1BrecdW2ePBIWiUc95r9S93qmS3YU1W70OA%2F0Wa8zyypHK3EB0Bk1a8vphYqPQnbOFRyBvt9VvtWwYG25m2Ks9K84P%2FLpfh3nfZk7xg22CZCK8vZSRADeR2hlm9tCF%2BFhifPqDk55AmTPXoOIrvPJBW%2BZ00ncuOWdeDrnNyk6UgcVshp5lql70Kj6zoKxWVGVURUcRq9Mm9EupG1RfVUzmVg%2Fscm9EPL0AqxOMhW1COXjmcHjOkyJceQNJ6i3qxmznJd%2FHGevqAzFjcGjNzLKyylnOqjnMInYpL4GOqUBwkZ1I2V6%2Fa5u%2FJ8utNu0QF95%2FJL21PtjdW%2F9tLyzG2gJ1vQM8n3FBfNc6HS0Jqu9WddLTaQBFBravikvrYf42scnrRjyruUOY37UYQ1JsaBLUhy4zHJ8s4lK0IV%2BA%2BMVI1%2FK2DfuMqECS1x5FOmwa2AAmqmksa7zuoeVYe09Dq%2FLvwtpoK57N5ScYuhJQ%2FuRaJtx9Oxut5RQWdtbQP9PDrUyk%2FuU&X-Amz-Signature=5775b0b0c39ac72596c5e61c5d30b28f9d8e4fe4da8126131ca90f2d0d5e761c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIBY57M%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM%2Fr1VIJrb8wvk%2FxcIRC%2Fym3yrFQDatCam%2FGCaI0Wx5wIhAP1xBjnhit7R%2FsJLn4tRX2GxyDyTgaYuR9QLearC3YFKKv8DCCYQABoMNjM3NDIzMTgzODA1IgzMw9T2eeiROt8kWjQq3AOpVD%2B63bv8xQM4REcvV90RNQXFgw4p5pljSPR3XNO6F%2BraT8DtJIIGmV7SnMkuNAv%2FvNQo2ez1CE%2BadBoDHm5JL%2BbHyCx1Jf8AfOCLZU3HCATiCY9ufJ7d0zQI3He%2Bk%2FI%2BYlG0a%2BUC9DvupvP9LRz3qajm%2B9ve3mYVrWxQjADUi6%2FHXt54c1FUJBQPqw4W2nZJgcDLdOwwiTP1tDRPJHhZRMxM3kRT8JnoLR8X7tz9k95cuJRK1tGtJlIz3mAwkLacGyN0v%2Bdt%2FLGQW2hMd0KYNsdefWqeYEoxXh2CdwTHs6AuY8gZNu8WS3AnwawRa7o0wQ5GLHxwigAX7C5plFPSV9F%2Bd%2BCBQrjX%2FXOhgZCvWp6G7tRlsK9UIaKINXvKuUsZhDAlMcemf7xmooIQUZLAK7vztUsioLFTRJ1OtSL7%2FNyM%2BDn474r7RBIujh4EmN9zex6IaA%2BOX0wQGx6yI%2BXY98VKQw0FUVGp5AD7zP8MW5NJ%2B%2BFtN9OQkzS1ZiN%2Bow5jv7KQZ3KCNsBrBf%2FtjFtxCcnY7IZWvRI9NJbKh9ZYC19KlY0MFbkVMhzPSRIUe3xhDgfozrC3ZiKc2X8Cl0Zwz52%2Bu1AzcTWcxfD4ghDeEvrKa7%2FZ4C6pWRNApjCA2aS%2BBjqkAez8AMWK8FV1uon1%2Bv2oKn82ILdoBK5fL938zw6cyKSHoHGVhrQG1UTOR8Rjlt%2BRTVsTI53El59aNa29lK7dyrZBqZZZfiLF4buaQjkeTKlmWYXw%2BRWQO6y%2BnRONS2EwnR0LPc8ND%2BIzjTgyZwkkseQwVF%2BahZzqo5XPDf0zEv3ZK6YK1icop%2FDHDN4Hc%2BTSkZa7NKyhQco8t4E%2F%2BJx4tmzLoqL7&X-Amz-Signature=507fb899b17bf1cbeeae53a17cadc1db7cdf920548434505c3a45c7f279222d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWHJI5V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqMiowUht9lrzSxGi1jH7Z9D0Mf7RQHPdOKU5Qypii4AiEAx8ESVFlm7TKfo%2Fq1Y4z1HJ%2BoF8KLUwjzBlfcouLqdWcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJATpPfne7SVSE9PnircA%2F5Q23ffDnoyzFKwbniX7eSJ4BsypFFUXY01uMe55Jn59SQ9Yqj3fJ3bDThLGSy3OItcuqd%2BNOCJvrm5StwWWTQkTBZPTpcvDbBBXAyoCrox5qwvQIAc%2FEsYtNBPoDOTQ7hSc3%2Fq7x%2FV08cAexiiP6Hj2k4Zjhj2gCV7YJprXoBrtVjN8eb3bMovwxQwbYDlwdWPlCQ%2BP8StkwXR3KfJzWOTD6Azam%2BuZfE%2BR79Y0%2B%2F6Jrd8sDakS0uCch%2BA1laHmQTBnkwxE%2BFRoquFHuwpKXElfOTUD%2FIijALuvWS8bKrlll%2FKYXO%2FRYHuZy46lJ6eLF1Ptad2O6G6Yavap30FfBqMPSwuktUhW1LOIkc2SkOmPDMW1rubtVwr8UhOBD%2BlFLI9bFU0HFGidNJNK0tDV3HoSMY2o2D8lBn5wIC%2BelVPF%2FKvNtOSNFQNwa5Z67sj8HgJHU81O98Mkbnvrze%2FcIx%2Fr%2Fx9XbNpsDbpfN2q2DfObaosqviSa3J2l2vWKRBNAF7fb6dVB2QuThq87SZnIMwiT6LBZJZ8HhMrQEGcBpj2Ja%2FmVFLwaJ%2FETCOfNCECw95LJ2v0iT4gz%2FlEy4s9YOmcQn3tPZ1f1X1aE8nMnvQQ%2BJ3MLkA%2F4vbo0xg2MIDZpL4GOqUBhTsuOOoPwE5rtdONyOi20B0WqkC9%2BwY%2FDT4%2B9Ghixz3lFQuJT%2BJHTa9Gc5RXyfYSi9XyKgStOcx83tvP1R7aURhFTAno0IDuYJ%2Boo6NjZeLBOkp3IHgmkFyC2cm6LbUL97000MIpBnWNDCM10xQb0D%2FVOPrgMO%2BfhFfj4%2BIOWPU4UQknFfX%2ByJJD3%2FsR0AapnSHAGdj4mnaYZDpBGMpgJTsogiSs&X-Amz-Signature=de7c50e1ca7c5bff94497b9c47dd88ec921fa1aae9dec867040ab2e30ce33fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
