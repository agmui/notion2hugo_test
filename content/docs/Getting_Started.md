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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAM3GGET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA9Lv%2B%2FNJOiFHz6NtvTsmK%2BxCzBKMwo4SnAbldx1AqvfAiABG3vEPcjKvQSIOwKMt0mGd9%2BbPrJ9ob1dnICcwPypMCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrRpUiULMK7%2B9jynzKtwDtMCab%2BrsCsvFHKFAdsMTMpWXGtqIHNR4TyXFOX2KXaZxRKt8zOVZRcoN%2BFEOrr0A9pkJTzqsB%2FNiPDzQetBm08RqATRBly2WMqLExMFaRjfSJoe7AMgym%2BtxGLhVqHPIF8zYx1U%2Bz13epVI1xplebVer5MR6ofbICLWe1eDG8fuiXMWBbmEeBqlBXubYfc%2FIiFhZ0sbc65ljDQsv5gZ3jsu7RZFhfciVZFl9KkqnRdcWDp%2FvCW%2FSpj3GH3ZLEYfmZk2Za%2F3TS8mguHMEcEEkHTRWjDWTavW%2FcwvxdGE77kvTefNa3F1GugyK3QAoqfAIJ7CBOJ3IUlSfwOAL90Aht%2BNpugz8gvuyBCI%2F1eAfcvKwk2wSBa0g1kor27aR6%2Bq5Aab2MRtqyF9X%2F7l4%2FP1elW3xelBk9rgmco%2FOXksXipBWhRmeifdEiF5dA79OYzmXkYBaLP37uk4ZXjlzE3GcW2Eh2cBJfVX3BzCqsqdYlHKpHCOxp37zIH77SK8lDV%2FzYGszfq2bDWNCwUqaBOSfl2mtUdEfuQHLQZZxs7RDC162HwMwh%2FnAx4WP5m39s7yLwHQc6QhlkcxQCcWzuEt4YFEqIOZtPB93L2fBFXJWz2q3K5ch5uC16COfnOAwtJvAwgY6pgEBmvPGSbrrKVA6WRYVJvUgUZKC5aNWAYu8Yl%2B2Zd%2BjUAX0rx%2B3s9osbUi00UYksoQt607vaobQ2pYnRm2DZXgFPST%2Bu4f6FGe4h6I807Ploj2Mit9cpyiIKvcG%2FXJDtNdjHhPvez2Z5htSXJhcdNyW1pGRmFoFqnH%2B3lepHI5JoCN4LgKiP4%2BJUuMcsemT5TZKpq1HlNXhkiYEuRcBRmeFvsej6pbK&X-Amz-Signature=a8c495304ab5cb27ad5590370a43c2885e17bc8235f9dea64c779b16e125ba76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAM3GGET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA9Lv%2B%2FNJOiFHz6NtvTsmK%2BxCzBKMwo4SnAbldx1AqvfAiABG3vEPcjKvQSIOwKMt0mGd9%2BbPrJ9ob1dnICcwPypMCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrRpUiULMK7%2B9jynzKtwDtMCab%2BrsCsvFHKFAdsMTMpWXGtqIHNR4TyXFOX2KXaZxRKt8zOVZRcoN%2BFEOrr0A9pkJTzqsB%2FNiPDzQetBm08RqATRBly2WMqLExMFaRjfSJoe7AMgym%2BtxGLhVqHPIF8zYx1U%2Bz13epVI1xplebVer5MR6ofbICLWe1eDG8fuiXMWBbmEeBqlBXubYfc%2FIiFhZ0sbc65ljDQsv5gZ3jsu7RZFhfciVZFl9KkqnRdcWDp%2FvCW%2FSpj3GH3ZLEYfmZk2Za%2F3TS8mguHMEcEEkHTRWjDWTavW%2FcwvxdGE77kvTefNa3F1GugyK3QAoqfAIJ7CBOJ3IUlSfwOAL90Aht%2BNpugz8gvuyBCI%2F1eAfcvKwk2wSBa0g1kor27aR6%2Bq5Aab2MRtqyF9X%2F7l4%2FP1elW3xelBk9rgmco%2FOXksXipBWhRmeifdEiF5dA79OYzmXkYBaLP37uk4ZXjlzE3GcW2Eh2cBJfVX3BzCqsqdYlHKpHCOxp37zIH77SK8lDV%2FzYGszfq2bDWNCwUqaBOSfl2mtUdEfuQHLQZZxs7RDC162HwMwh%2FnAx4WP5m39s7yLwHQc6QhlkcxQCcWzuEt4YFEqIOZtPB93L2fBFXJWz2q3K5ch5uC16COfnOAwtJvAwgY6pgEBmvPGSbrrKVA6WRYVJvUgUZKC5aNWAYu8Yl%2B2Zd%2BjUAX0rx%2B3s9osbUi00UYksoQt607vaobQ2pYnRm2DZXgFPST%2Bu4f6FGe4h6I807Ploj2Mit9cpyiIKvcG%2FXJDtNdjHhPvez2Z5htSXJhcdNyW1pGRmFoFqnH%2B3lepHI5JoCN4LgKiP4%2BJUuMcsemT5TZKpq1HlNXhkiYEuRcBRmeFvsej6pbK&X-Amz-Signature=290cedd161bd6b1c710257ee54bc11198398ab372a984a2f97132d8231c1ff44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAM3GGET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA9Lv%2B%2FNJOiFHz6NtvTsmK%2BxCzBKMwo4SnAbldx1AqvfAiABG3vEPcjKvQSIOwKMt0mGd9%2BbPrJ9ob1dnICcwPypMCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrRpUiULMK7%2B9jynzKtwDtMCab%2BrsCsvFHKFAdsMTMpWXGtqIHNR4TyXFOX2KXaZxRKt8zOVZRcoN%2BFEOrr0A9pkJTzqsB%2FNiPDzQetBm08RqATRBly2WMqLExMFaRjfSJoe7AMgym%2BtxGLhVqHPIF8zYx1U%2Bz13epVI1xplebVer5MR6ofbICLWe1eDG8fuiXMWBbmEeBqlBXubYfc%2FIiFhZ0sbc65ljDQsv5gZ3jsu7RZFhfciVZFl9KkqnRdcWDp%2FvCW%2FSpj3GH3ZLEYfmZk2Za%2F3TS8mguHMEcEEkHTRWjDWTavW%2FcwvxdGE77kvTefNa3F1GugyK3QAoqfAIJ7CBOJ3IUlSfwOAL90Aht%2BNpugz8gvuyBCI%2F1eAfcvKwk2wSBa0g1kor27aR6%2Bq5Aab2MRtqyF9X%2F7l4%2FP1elW3xelBk9rgmco%2FOXksXipBWhRmeifdEiF5dA79OYzmXkYBaLP37uk4ZXjlzE3GcW2Eh2cBJfVX3BzCqsqdYlHKpHCOxp37zIH77SK8lDV%2FzYGszfq2bDWNCwUqaBOSfl2mtUdEfuQHLQZZxs7RDC162HwMwh%2FnAx4WP5m39s7yLwHQc6QhlkcxQCcWzuEt4YFEqIOZtPB93L2fBFXJWz2q3K5ch5uC16COfnOAwtJvAwgY6pgEBmvPGSbrrKVA6WRYVJvUgUZKC5aNWAYu8Yl%2B2Zd%2BjUAX0rx%2B3s9osbUi00UYksoQt607vaobQ2pYnRm2DZXgFPST%2Bu4f6FGe4h6I807Ploj2Mit9cpyiIKvcG%2FXJDtNdjHhPvez2Z5htSXJhcdNyW1pGRmFoFqnH%2B3lepHI5JoCN4LgKiP4%2BJUuMcsemT5TZKpq1HlNXhkiYEuRcBRmeFvsej6pbK&X-Amz-Signature=4130fe55e6c348fe553d973d4d686088ebfc37813d24c64f9b644c6cd48fa9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOU3MEC3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDiL5%2FXVhZl7Y56vRUOrAQqb1c548JawdWgdZPg%2FMYOqAIgHqXHbeYYoDE75nepbDpDLEtJDsohJ1voQrH0dTVbkqoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHqDiJyDKPdBUzrfGyrcAw4xioSQvgPsj0ATnootdVlrphzRxgBi8yt1YuUuMHn%2FyPjXKFw2CMxGCPv0CoJgjGl2v3fix3k05np1WH%2Ftl7UQsX5vPr3ee5cXeB7SKgvJmgdNUuWrhEcSVZ9bdBQp%2FKHdhcSP5G3WjNP03LLF8NaVuBO6ZW%2BZlzTQ2XVmN%2FJmvIhYiFtKz2f%2Bh8NuOrpK4U7RO%2BDy0cCfp0gmTdICGZeXGUS3ZFh60c6DGUxpV5wstnjW9ohturIPgASIGISNluB3WYj7KXo2jfphGn9CBCSsbwAvVER%2B%2FXbWtuHIElMtCvyLPGlvcjo5t8iHygtY6tBlG2HH9ZNDDx69ypJ3xahfZQnrXKJn%2BV8SmuD1nBruYX7OsE6SffwfuuFdkS32eJQ5sy5LhUPD1dW63ywkPtM32rRESxq9FpE8GglCvmKOP4b9WejgxY9jdMQBe1W5%2FD2gyLP2iBZa5VZlu111oz0T9urEJsY5vOuii0hW5gQKJlfCX7c8GN%2F4gOkpudhew3qwQmspQMLw97aV0OyZw6pLF2LFnKTKIWsmfiIqLGa0ibUPuOMUR5CuN8fnXjj5rRjsqDscpg1E39WgG3nnHhIrx3MRthS%2FoB1IpJF9wUbMLCPAuXoOKwCBKfgbMMaawMIGOqUBWuTHBTW8ki3NGt5danHDhGst%2Frgewku9ep99QmED7iiEFw3CJ7Gl9QNKxGe2L9HoVd56ZLyIIC%2FTOD3CLIacpf0E3Wgk78lZ8uT2oSV7DEc4GyrvzPbgM7aiw2ConMXDQJZ2e53LgKubVXxSjjA%2Bhr5OSVmNWwYEBZhO84RaKYDcRzhz7ZjsxLGRlJQNF0jQCeLBQ%2BXdrSFPmwliFRXB5jD72rSN&X-Amz-Signature=aacb9de61d912e832bd9fae3f36f7b831ac7639b04632ec3b0729ddbaf2f715f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUZ4SKO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDBy1Vo5nTSum9esaXj2qf47iiarLj2g3kySLvRoJuLlAiBXUvz4ir9OgqPxCcVC93RNyjOUaGBiP4SjBCJ2RzrCdyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMDigAk0Z8gLut7fbmKtwDGyX2NLboLQ76CV6U9LbFhqZUrbQmz0x%2FVjQuJKM644VLCeNPYXmS4Cc4pfr3Ir%2F6m8PrUUeNKhFtlUyGjnvWGzXlvliAvOv1tuL3zAO18anFb%2BhHqbS2VebmAxyqm3Bdd0Q%2BxUIVGmFvq%2B5JFttARfql7g7yPJTj8wpri6mlMHMrljZvcOl7xqJXXogDjydoVKHh1IHud4H2QgRsa2vr9qtWgegBDKcTKY0Brw9cQh8hMTOOSgeodss31%2BFLpwVEHsPf5bUYW95cuvWidVxnF%2BUhF4kxFu4LXqsHzQGDG9k1LJBtL5WZhINb4IfbCxasThgmSOwzB4jQ0p1ey1LjGTDI1FXWy1ENsTOqDpSfG7wyZA3oMz%2FmP7pV2kQjsbLv4UPaKisRdgqiOdo7UdMmu9lvOV4iTmqyiOhYBQ0FkPjmS4HASsM5lRnOzeNH6AyZqzUArL4UmzasZwHMAQKBMmS%2Bvk6Bf%2BOAdIr08FoRG2x%2Bl79KwIbdOVD4rWyQkX8o8pvj5nO8KMMcFmpS3XRxpRUrXJskc1J5tcziLVBG96oAoP5RTkgjMAlL7dRExAupsdTk2AzalRQJ7ef%2FPbahgJAlKGQgud3jBcixiukE%2FcQzeD8NljnBZbUQSckw7JnAwgY6pgHdRNkzp8TYn6yGABvJQ6ZUGvSPmWNaQeiZQ5LZ%2FKyvxQgmNfNzyjcE0cRDVH1NDngVr8V0BTtWjALSDzq1e5L7fLb3UxrX%2BWjagsabBvyJH1ZWh%2B0zq1poIQJYRVplQjL%2BuB521i3wTIYTK2oHpyTBd%2FdaH3RKI3k34KQQxCcVDKuzKMolvp20vTNKivPhVT8lW83VNEzY%2FXYnNiYhS4JDIaU9ZMKf&X-Amz-Signature=80a96e6a8e9270f4d844e0cd7da80e7c2c76e63c5f962667cf44141dc9aec39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAM3GGET%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIA9Lv%2B%2FNJOiFHz6NtvTsmK%2BxCzBKMwo4SnAbldx1AqvfAiABG3vEPcjKvQSIOwKMt0mGd9%2BbPrJ9ob1dnICcwPypMCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMrRpUiULMK7%2B9jynzKtwDtMCab%2BrsCsvFHKFAdsMTMpWXGtqIHNR4TyXFOX2KXaZxRKt8zOVZRcoN%2BFEOrr0A9pkJTzqsB%2FNiPDzQetBm08RqATRBly2WMqLExMFaRjfSJoe7AMgym%2BtxGLhVqHPIF8zYx1U%2Bz13epVI1xplebVer5MR6ofbICLWe1eDG8fuiXMWBbmEeBqlBXubYfc%2FIiFhZ0sbc65ljDQsv5gZ3jsu7RZFhfciVZFl9KkqnRdcWDp%2FvCW%2FSpj3GH3ZLEYfmZk2Za%2F3TS8mguHMEcEEkHTRWjDWTavW%2FcwvxdGE77kvTefNa3F1GugyK3QAoqfAIJ7CBOJ3IUlSfwOAL90Aht%2BNpugz8gvuyBCI%2F1eAfcvKwk2wSBa0g1kor27aR6%2Bq5Aab2MRtqyF9X%2F7l4%2FP1elW3xelBk9rgmco%2FOXksXipBWhRmeifdEiF5dA79OYzmXkYBaLP37uk4ZXjlzE3GcW2Eh2cBJfVX3BzCqsqdYlHKpHCOxp37zIH77SK8lDV%2FzYGszfq2bDWNCwUqaBOSfl2mtUdEfuQHLQZZxs7RDC162HwMwh%2FnAx4WP5m39s7yLwHQc6QhlkcxQCcWzuEt4YFEqIOZtPB93L2fBFXJWz2q3K5ch5uC16COfnOAwtJvAwgY6pgEBmvPGSbrrKVA6WRYVJvUgUZKC5aNWAYu8Yl%2B2Zd%2BjUAX0rx%2B3s9osbUi00UYksoQt607vaobQ2pYnRm2DZXgFPST%2Bu4f6FGe4h6I807Ploj2Mit9cpyiIKvcG%2FXJDtNdjHhPvez2Z5htSXJhcdNyW1pGRmFoFqnH%2B3lepHI5JoCN4LgKiP4%2BJUuMcsemT5TZKpq1HlNXhkiYEuRcBRmeFvsej6pbK&X-Amz-Signature=2cbcb3331bb2ed910d25a8615a2d6cd7620ef86409176eed50b4662ea0587881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
