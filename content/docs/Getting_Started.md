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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2CWGQ4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC4wjbZ3KgAMQNOn2qK%2FA8MwBoa9dXH9ru7dOSiWLEdWwIhAKR%2Fl%2FCOBqHVUVBZOXEcTaY%2BFoZuabtUwF%2BLiuMNm6CRKv8DCFUQABoMNjM3NDIzMTgzODA1IgzYW9CGE4NYp%2FKtVD0q3APUjpwNiW9oXClVcDxfy3TUEoyT7Wv3x2M8mSwAyhjYRYEya%2B8Ckfp2aBN032Nb%2BBRuudSbt8At%2F0ibPPPs0OE85xQZWnzhTJXY1LJnarbFFOe6lOx4iuBxqtVzQHZO0Nm9gXcHy1ooVRWDEOBrjolMb80OL6INKwz5r7rBT6yHvGC42y3kYKRCU5gHtO1gZHKVAzM6tSsqScwHz9F%2FMiOByvvgB6Sl7BTslH%2BNbmbq%2Ba8eO7l0MGqldg1TjV9xRckQXUp8LB5V83FKj3xuUWaUURfuDkvY%2FojfV3fLoJfI5LMwhiFmhB%2FKnjuadNqTWFy4Bv6rmr1hJX6if%2FeJF2Q1ZzEMQK8m6iCHaNd0DY93BKREpizyyyTCw6kDVZu9QqDNk332NXUkS7Izr5A6j8939%2BREY90p9APIoIr1FJJBCTWoSqhDf1mrrMixOhrNOdOMkNad1lDtihQ5G25Ca1dFiana8RmgRoABP5%2BYVQV7ChU82xLGDEEvSVXdv4SmHOUWZS1NkkeIjiyQv9u7nVDrxXlpL%2Bks873UYB%2FYeMa4L2fC4M8IQVLh2bLlVfQEX35dQJjcys1tBZUuMs%2F39MgOICsSEV5gsNJRKojd%2B8mzqw1N%2B3r%2FzXZr4zvYuTDJjMbEBjqkAcMtMgsaWnJF776ud7OmexUN%2BVtiiahaY%2FNOpPdFsyJgZLit1%2BP4mGk9n60hxoL4XsNfMHb%2FtfTQ3nHxyYBRGWV981w74EGEtpJaldAxQBtyNKmeT%2FW9D5LjUYqBSOEGXANzsAQ%2BGZmT8J4%2Fu6emMpfbcYIFILrt4IPUt2UjSVoBIX%2FG3CGekgnj0l11%2FzGlX63yuz%2FOiLD5rUz3zwble6a7U4mF&X-Amz-Signature=7ef02259b1e032e3cf83f00af3054e50085de5856fe320545d001bd1ce4a9071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2CWGQ4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC4wjbZ3KgAMQNOn2qK%2FA8MwBoa9dXH9ru7dOSiWLEdWwIhAKR%2Fl%2FCOBqHVUVBZOXEcTaY%2BFoZuabtUwF%2BLiuMNm6CRKv8DCFUQABoMNjM3NDIzMTgzODA1IgzYW9CGE4NYp%2FKtVD0q3APUjpwNiW9oXClVcDxfy3TUEoyT7Wv3x2M8mSwAyhjYRYEya%2B8Ckfp2aBN032Nb%2BBRuudSbt8At%2F0ibPPPs0OE85xQZWnzhTJXY1LJnarbFFOe6lOx4iuBxqtVzQHZO0Nm9gXcHy1ooVRWDEOBrjolMb80OL6INKwz5r7rBT6yHvGC42y3kYKRCU5gHtO1gZHKVAzM6tSsqScwHz9F%2FMiOByvvgB6Sl7BTslH%2BNbmbq%2Ba8eO7l0MGqldg1TjV9xRckQXUp8LB5V83FKj3xuUWaUURfuDkvY%2FojfV3fLoJfI5LMwhiFmhB%2FKnjuadNqTWFy4Bv6rmr1hJX6if%2FeJF2Q1ZzEMQK8m6iCHaNd0DY93BKREpizyyyTCw6kDVZu9QqDNk332NXUkS7Izr5A6j8939%2BREY90p9APIoIr1FJJBCTWoSqhDf1mrrMixOhrNOdOMkNad1lDtihQ5G25Ca1dFiana8RmgRoABP5%2BYVQV7ChU82xLGDEEvSVXdv4SmHOUWZS1NkkeIjiyQv9u7nVDrxXlpL%2Bks873UYB%2FYeMa4L2fC4M8IQVLh2bLlVfQEX35dQJjcys1tBZUuMs%2F39MgOICsSEV5gsNJRKojd%2B8mzqw1N%2B3r%2FzXZr4zvYuTDJjMbEBjqkAcMtMgsaWnJF776ud7OmexUN%2BVtiiahaY%2FNOpPdFsyJgZLit1%2BP4mGk9n60hxoL4XsNfMHb%2FtfTQ3nHxyYBRGWV981w74EGEtpJaldAxQBtyNKmeT%2FW9D5LjUYqBSOEGXANzsAQ%2BGZmT8J4%2Fu6emMpfbcYIFILrt4IPUt2UjSVoBIX%2FG3CGekgnj0l11%2FzGlX63yuz%2FOiLD5rUz3zwble6a7U4mF&X-Amz-Signature=3f3593f3f4fcca4b4e9f4f05c59000d9790084d3aa2ff7ab10768c1c1f58e302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2CWGQ4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC4wjbZ3KgAMQNOn2qK%2FA8MwBoa9dXH9ru7dOSiWLEdWwIhAKR%2Fl%2FCOBqHVUVBZOXEcTaY%2BFoZuabtUwF%2BLiuMNm6CRKv8DCFUQABoMNjM3NDIzMTgzODA1IgzYW9CGE4NYp%2FKtVD0q3APUjpwNiW9oXClVcDxfy3TUEoyT7Wv3x2M8mSwAyhjYRYEya%2B8Ckfp2aBN032Nb%2BBRuudSbt8At%2F0ibPPPs0OE85xQZWnzhTJXY1LJnarbFFOe6lOx4iuBxqtVzQHZO0Nm9gXcHy1ooVRWDEOBrjolMb80OL6INKwz5r7rBT6yHvGC42y3kYKRCU5gHtO1gZHKVAzM6tSsqScwHz9F%2FMiOByvvgB6Sl7BTslH%2BNbmbq%2Ba8eO7l0MGqldg1TjV9xRckQXUp8LB5V83FKj3xuUWaUURfuDkvY%2FojfV3fLoJfI5LMwhiFmhB%2FKnjuadNqTWFy4Bv6rmr1hJX6if%2FeJF2Q1ZzEMQK8m6iCHaNd0DY93BKREpizyyyTCw6kDVZu9QqDNk332NXUkS7Izr5A6j8939%2BREY90p9APIoIr1FJJBCTWoSqhDf1mrrMixOhrNOdOMkNad1lDtihQ5G25Ca1dFiana8RmgRoABP5%2BYVQV7ChU82xLGDEEvSVXdv4SmHOUWZS1NkkeIjiyQv9u7nVDrxXlpL%2Bks873UYB%2FYeMa4L2fC4M8IQVLh2bLlVfQEX35dQJjcys1tBZUuMs%2F39MgOICsSEV5gsNJRKojd%2B8mzqw1N%2B3r%2FzXZr4zvYuTDJjMbEBjqkAcMtMgsaWnJF776ud7OmexUN%2BVtiiahaY%2FNOpPdFsyJgZLit1%2BP4mGk9n60hxoL4XsNfMHb%2FtfTQ3nHxyYBRGWV981w74EGEtpJaldAxQBtyNKmeT%2FW9D5LjUYqBSOEGXANzsAQ%2BGZmT8J4%2Fu6emMpfbcYIFILrt4IPUt2UjSVoBIX%2FG3CGekgnj0l11%2FzGlX63yuz%2FOiLD5rUz3zwble6a7U4mF&X-Amz-Signature=17af5a04e7b241b6d64991ad7d43a23093d9e2e1d3ea7a8564e6e102c2996b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKXEV2R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCIabjhvCuJbWiaNXGGX4HObEqcAi4%2FtA6OXVRw1xUTjAIhANMNsfJYOBHfFr6KSt3VjJO56OPp%2Bf2v76cKU7BC0vc5Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxmXsDpG2%2FVWbopGpkq3APEKRAlxcIea4tRBOWf78dC1y3ElVi6EPIUAO1vurrM9tJLA4LAucC65PJViqk2Cu28vGYwxMLqK0TuQ2pP%2Fs8UUHnQ%2BrX0FwgWXAsCuLj0hY5mk54eTaynaN%2FMFoR%2BwGWOhQbMGrovZdobwiTUJewuSI0n3dEqHcnHUD%2BZMt3YJ3tMxUnivWYm9aMVx5emOwi9nwqowxPFPG%2FlQEGGfwkDFI721DdKPlG2Z%2BpO2H89uRt5QDctHrDQ1XzFCyItRgye%2B%2FNQxJXXOvXIxQ40nnlGxjMNRIyyuhQDSW32LzG0YXwW3MwOVTvOBNAxE0AWgEIrN%2BvwwrDjfAhxBHcF8zc7fsUdIzFEio3JOgbT7rMiw9GIJDJrjq2rxLpcM9%2B9spuG%2BZFo02fTABOdwyWX2YkECBrHynGPhV%2BUEbjC0hBkucY0P6If721l4p%2FoiCw1BhhdBNCXdEa9DYHzJvMffAmbjyROr8hRMh8zM8lriSaG0%2BPoN%2B0JIINNIC5q8os1ueHzu0toDPg%2FdQNbBK93W8wTXslhwg4MT2wgKkrCMTrrS7nsimWi6I2fviOc%2BRombji5Q7hrPiNLfzAYIubZLIb0qIHV%2FH7rQnre3D1WC0qUymykqjhQTRsNIAeH7DDJjMbEBjqkAXZoeR4Ng5FrKT%2F%2BXcmSEjCkpPbmtHevjHQBHBlW8mVXSlkJD0mpZKVg2ZEZNgkFlTntrkHdW48TlTRAugvtZeDVvG%2BTPPIHLf5Ffssx0a%2FjiK01rY7J9FnxYzLcFcTwlR185gx8tQe%2Bq7fR6Rhna1nmKGAfNjrWRbzhfy7UH9TB%2BDFivW8N1C7nB1lgxrc8Ja5DSbZlJxVddl6AYmD%2FC9DJpzQ4&X-Amz-Signature=9c7d933d216b06f23eb839ef3d70ea0899d712306251852ab62230391fc305c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4IO6OJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC3IKYfd5jCHIxGJ%2BDCi%2BoTmidGJQAkcr7NibGIj%2F9gxQIhAPhJ095lMSqtmd0R7D%2BTHOKM%2BUjmg5%2BuOloa4V1YFMxpKv8DCFUQABoMNjM3NDIzMTgzODA1IgzK1CgIFZEkmOSxzC8q3AMwe4Cee3bFRr7BRNeiP%2BRgFN9gxeIsiCEvLGShGSOrrL2%2Bsw6huGatkr8DLBUlO29lEneHuhUGviA%2F7S7KrwywouDmWqScvJCZ2kw%2FIiGUqcmnDr4EHgakyF5iFEw%2BLTzjydgXPy5z%2BPu09W5l%2Fd%2BEZ4ChNmNbEfnWNpfU3uSgPYuRUQXU0e0TigfKGjTDlD8KxFzMEiUwBR9tZ1fyShlvAInLiKInDE7gKHz4lPuBxghSqcwDg0mOGbd5BZ257O6lIR2voeVSeYDLB%2ByPRdSAmoL5ePJIPzCor0o3dmoVglhspBvkR%2F4bRvU5DcEL%2FV%2Bj0nfhZoQuXTVRUM013MVqHU1zXuNT4wVcimGOZpYxKQ9%2BFhOv0QNJTkP%2FoFCTCUkedG7mPQwyVt090rUQnesBIjHAkUK%2BrxKbfVLsdgZc3b7Ff9aXhSPX2D8hnVeLkSyiLmDbpOcWbPmKj4FHZQO6QLBbOnXAdP796yI9F3iFVUgIU6JPZfZN6hUaTw8IgylrgqDA2Q%2Fh8Pvv0pt3%2BZt%2FFmOhynd7pEEHvBAhr0sewad0gpYhIQXSJoYCjkMUWzd493G5mkpQ93BkRHfWqLZ50E%2FLpuWYE%2B0%2F%2Bd5CLYCdo81jYad%2FYhHN7vGxujDAjMbEBjqkAdFI62BlKj9UcVpO2uNWipr%2FFC2qcVS5y5zSVwfJJuNjmONCiNGaQN2IfKyJZvQPhLuo91FDJUAK%2BYn%2FplTQoVdiC6yfPT0wkgo4qa2i7juHn9FQS4%2FNPgGTiUpG7FI0E8jOd699MRJAQSYqcAOO5r9PNFcyDGhQl0CEQoTX5aZN5LoV3pjZ7yTclw7diZpemPsMQ9Uy8SoZfNQ9NjHTFzT0SVLs&X-Amz-Signature=2916f5a17fe501ffa6d96cf830f6c9d945fd4d5515e87e2c351ce3fc97495add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2CWGQ4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC4wjbZ3KgAMQNOn2qK%2FA8MwBoa9dXH9ru7dOSiWLEdWwIhAKR%2Fl%2FCOBqHVUVBZOXEcTaY%2BFoZuabtUwF%2BLiuMNm6CRKv8DCFUQABoMNjM3NDIzMTgzODA1IgzYW9CGE4NYp%2FKtVD0q3APUjpwNiW9oXClVcDxfy3TUEoyT7Wv3x2M8mSwAyhjYRYEya%2B8Ckfp2aBN032Nb%2BBRuudSbt8At%2F0ibPPPs0OE85xQZWnzhTJXY1LJnarbFFOe6lOx4iuBxqtVzQHZO0Nm9gXcHy1ooVRWDEOBrjolMb80OL6INKwz5r7rBT6yHvGC42y3kYKRCU5gHtO1gZHKVAzM6tSsqScwHz9F%2FMiOByvvgB6Sl7BTslH%2BNbmbq%2Ba8eO7l0MGqldg1TjV9xRckQXUp8LB5V83FKj3xuUWaUURfuDkvY%2FojfV3fLoJfI5LMwhiFmhB%2FKnjuadNqTWFy4Bv6rmr1hJX6if%2FeJF2Q1ZzEMQK8m6iCHaNd0DY93BKREpizyyyTCw6kDVZu9QqDNk332NXUkS7Izr5A6j8939%2BREY90p9APIoIr1FJJBCTWoSqhDf1mrrMixOhrNOdOMkNad1lDtihQ5G25Ca1dFiana8RmgRoABP5%2BYVQV7ChU82xLGDEEvSVXdv4SmHOUWZS1NkkeIjiyQv9u7nVDrxXlpL%2Bks873UYB%2FYeMa4L2fC4M8IQVLh2bLlVfQEX35dQJjcys1tBZUuMs%2F39MgOICsSEV5gsNJRKojd%2B8mzqw1N%2B3r%2FzXZr4zvYuTDJjMbEBjqkAcMtMgsaWnJF776ud7OmexUN%2BVtiiahaY%2FNOpPdFsyJgZLit1%2BP4mGk9n60hxoL4XsNfMHb%2FtfTQ3nHxyYBRGWV981w74EGEtpJaldAxQBtyNKmeT%2FW9D5LjUYqBSOEGXANzsAQ%2BGZmT8J4%2Fu6emMpfbcYIFILrt4IPUt2UjSVoBIX%2FG3CGekgnj0l11%2FzGlX63yuz%2FOiLD5rUz3zwble6a7U4mF&X-Amz-Signature=836bfba7e83bacf531bef3edaca8e89c0bd47c77633b3d42ab1b32c8a9275b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
