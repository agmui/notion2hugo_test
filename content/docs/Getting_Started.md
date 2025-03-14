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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUNTMLC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd49koA8zfak1ZbrAVw%2BSxtvSC8KM1H8427cSMpCS0LAIhANJbEvrlTGsnZIc78woXTyaCdKdqTPFb3bF76P7%2BDmDuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8QvUHXf8pBw7tymcq3ANbyVpp8xCboHHhxEcXXLvLRDTtctPTSA%2FjvGDMIba%2F5LXncYX7at5yW7evP7jrtjTonYCdIE4Bi3KpZOu8gl8GUmGye5indM5%2BHPX54XSmMOTWjoAwoEx6z77aryuBHnSRujDtqwDoWQfouWan18ww9pCEDtRUhUbCYvfw9euS8BQF4ROUC3kVu9mhgLgEOIqL9G2Nkhjn%2B7Krw42vGdX4r%2BoK66tjKx85Mu7yGjp%2F6wyG3N5RM3mTbAGWsAioOT8Ozi%2F0itsWgG6AncFYnbGGVl4dVl%2B080hjM%2Fi%2Bm%2Fv12NB%2F1udYn%2BQ7Fxn0%2FdbVzWUwMbtoAOq1jFDEox73ReoSMABfWxplqUYwhK6ITzgh9qVP8lqKCVnGPr0vIzqli93F79SvYiIN2tXXyuF80WqqlA7x6Cn4t6kfhv3Q%2FplCL2TNUAYm2Laa%2FYcGx81NrvZXNlMnI7EmeKqnIe546CFv9nteDKe6vR9r9%2FEb%2BYI9FF2nu7DzWAmFA7xX12aTcd%2Ftg17z76FMA6YrNhZACTGcNsp1kXFlm%2BLUImoXMMsWvLenkfJLXiqPvn7NiXJx0SYmByKenKaZEsFP8FESn163E3lL27aY%2F%2FZORx52MzC0TwTeAItognFVEXPjFTDav9G%2BBjqkAXVVa1TF%2Foxm30pBY9CGsv0DL5UYaqQqyLOA05QWYbqY%2FZSz3kO0doLQL5DlmTSF%2FNhg8tAAz5lB5quInQynksK5qzBJY37oqNeo0ct3DNjsgswuAJdOVan8BE8E30aZg9aQ4Oqd1xjKdnQ%2FdwQPPioCqWWGOYK52OzoKgOgXsxYy2UyizSsWdiaNXMO8iHRjYTNlV5bXfYZ5e6dMldpCU%2FkGrJS&X-Amz-Signature=e2b286fe1fab43cff0fbfe9aa9f354939dc0bc8998d1d68c5e5012f5f49aaa11&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUNTMLC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd49koA8zfak1ZbrAVw%2BSxtvSC8KM1H8427cSMpCS0LAIhANJbEvrlTGsnZIc78woXTyaCdKdqTPFb3bF76P7%2BDmDuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8QvUHXf8pBw7tymcq3ANbyVpp8xCboHHhxEcXXLvLRDTtctPTSA%2FjvGDMIba%2F5LXncYX7at5yW7evP7jrtjTonYCdIE4Bi3KpZOu8gl8GUmGye5indM5%2BHPX54XSmMOTWjoAwoEx6z77aryuBHnSRujDtqwDoWQfouWan18ww9pCEDtRUhUbCYvfw9euS8BQF4ROUC3kVu9mhgLgEOIqL9G2Nkhjn%2B7Krw42vGdX4r%2BoK66tjKx85Mu7yGjp%2F6wyG3N5RM3mTbAGWsAioOT8Ozi%2F0itsWgG6AncFYnbGGVl4dVl%2B080hjM%2Fi%2Bm%2Fv12NB%2F1udYn%2BQ7Fxn0%2FdbVzWUwMbtoAOq1jFDEox73ReoSMABfWxplqUYwhK6ITzgh9qVP8lqKCVnGPr0vIzqli93F79SvYiIN2tXXyuF80WqqlA7x6Cn4t6kfhv3Q%2FplCL2TNUAYm2Laa%2FYcGx81NrvZXNlMnI7EmeKqnIe546CFv9nteDKe6vR9r9%2FEb%2BYI9FF2nu7DzWAmFA7xX12aTcd%2Ftg17z76FMA6YrNhZACTGcNsp1kXFlm%2BLUImoXMMsWvLenkfJLXiqPvn7NiXJx0SYmByKenKaZEsFP8FESn163E3lL27aY%2F%2FZORx52MzC0TwTeAItognFVEXPjFTDav9G%2BBjqkAXVVa1TF%2Foxm30pBY9CGsv0DL5UYaqQqyLOA05QWYbqY%2FZSz3kO0doLQL5DlmTSF%2FNhg8tAAz5lB5quInQynksK5qzBJY37oqNeo0ct3DNjsgswuAJdOVan8BE8E30aZg9aQ4Oqd1xjKdnQ%2FdwQPPioCqWWGOYK52OzoKgOgXsxYy2UyizSsWdiaNXMO8iHRjYTNlV5bXfYZ5e6dMldpCU%2FkGrJS&X-Amz-Signature=b5be9e941652f6a58e3f8bf3cefcb68e6fa910b216c4fa162f683e0b55bab885&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ65GJIW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPH13I%2Fdxmr0LtL88qaTPBicZyHTXtIDqCrKJIU7wNjAiEAmkuqC728Pa%2BMOBsUceDIlcr%2BZTFxp72gJ6Y93AayfWAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnBlxQxUHBUMevpfyrcA9CJeZC7OxKs8DtKyJicNy12ALMFQ8uJ3gMOdUsu0MI7OUddmcI%2Fg2CYR%2FxSYfmDAWSUtMYnrCN10vo8gl7dNVcmc9K5TACPNC2bAq2hIbDHcxIa6zntGDKYPT9seqPXUH5xp8NS5xSR6SIJSQ9AxXKufLZ44VZd8DfP5qhJAdcrpRRpiFRYmtP6wSYL4qr21pvKmdq2HBaAZ5DsyBkrAdqjfUM0WF5o960SSuPORXG6ytyl5zLQvXraYd%2BIPyVHoSrqmr4SY%2FK626vH9J7ZMzqEXJdosp4mWaTsIoTgutj0Hrr49f8CL59145MMTxuw8ET5QM0R1AgVN21i9xzohK5fQu19qH0WOy%2F5ssJpnh7CEtIYnW7p%2BpO3MogIX5Z032EsZzRfgbR2CpUBEge3zlzqiXXTL2uwGLk7SwCF%2Bl%2FSQk7hyLFePCAMwZAhNkednDJG%2FC739xyxSCAUEmiB7Px0TbAHQ3I8CxoEaBDkgtYtQhcT7%2BqhFVh00XcQXGQgyNGhEg%2BwIOvBSHqSxXs9gcvl2xm1yYKCbEkNoYq4SRy37YJ6x6Ka85wXNrfEJ%2F6Zrb90L2w9pfXywFue%2BQGXX5qhiGwq4s5FLi2FvDPLjjK0jmPeZLu0pIYdHlKRMM%2B%2F0b4GOqUBRNayFxiv2pcJbgOn9yOecKDwhkI8vx3BGJZnoTBdxGenD7OeWhvENJoBU82KiIpI41BMyY%2BloEYRChNHeXlxoOW32%2BPeDiO0IOFWJ6ufYwBcAPhHuoyKR9ZY2R3ZVSTFTqjRVlul151YB7y%2B7G6RSQz2S5YwzMxPLb5C9rvzV4fMhEn0dWg%2BU3XHZT8bwpg8thIcPTrquYUbaJ%2FPzH0Kyaak7AfG&X-Amz-Signature=b5704b9dd54927604f9c6a9a77cb3db486d7ad941d8ce2bb92081c1eaf6674c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MU6RA7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnrxCTQhPpkq%2FIgdGYTNLuwptc5%2B8Ozp3adXyEKZR%2BBAiB4bdivwS7qHV6okXB6YMhiKXTp07%2B0IrpUtqRcU%2F27CyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxtI6mjjUix3AKSaKtwDH9A4D5iQUq2s%2BiEvnTiBZ0QJCXVOxOdgNMEBLq7IPjJTI8y3IlKUhITHKzpoFZjoGHzRWX5Yo8Mp7GINgYsxL%2F54i31I2bcJxgORQyj%2FnUmXqMbe3CII%2FcMJA5lrBp0urZNOWCH%2FJ2tLdeIXFT1lL6JSi%2FjGV00G3QBP5uaQYWt5b%2FFQo9xIXoeikk6%2FSw6z6qn6ZEI0ijE7O6o7Se9IEG2OiTDC%2B0nMQ6DcZN6SDOfyuN1ZMpJWXdBA6ODfEtIUSV6C1iy5Q%2BLhMwzCsVmj%2Fjsptpkhvk4nUXENUvhV8C4OAjyupsx30zCr93Rhlhe496qreZ5G7M4N5g2CpmhxZZThzu0l1%2Fr9TnL9B0BDlv4wTaOLXJi9DElrKVjty0NP4B45UR1EVXGTfoSjsKdvL%2Bfgwf2PUCCGGW2Sk0%2BqYciXkXX%2BXhBQXZuQ74XHep%2BQFzpyLU0AKhc50vXCwmJ5yluRxVWVfTZ3IsoAQ81TlFCXqQHhZ%2F1cABWlD%2FIeSwnGhyIa4EJYf8NntuPwxD86u51wpVqlGohiKEbq1S2DjKpVFEXJ0AT7f1QOul5RZj8Na7jjLLmocis4HqyUjg91Qhg4X9Jj9zjIQ2APo9RmxOsdOZncBeD%2B36OYe5kw5r%2FRvgY6pgF5Xk4nCpQTzuSLgxmqx6%2BD2G9EvppywqoS06zq0nXeHKdoFXorMrC9XuHzwJIHak3assJu4WyIIAa3ljGR8TwDuAJITflByqX%2FMKswgRRa9c2gf%2B52BYUXFdTAiDp6eccKpyAIs%2BD2SkVaISCY2V9YeCma3Ixt49u0ABJwqtPELvkcemQO8h5eQ5WW60YzVB7V34hdGcDLu0oD9ib5SSsl3%2BJ94HzY&X-Amz-Signature=bc106dec61e4c9e7ab4a1b1de302bf01a052ee5ccdb4c6208d26581af7223461&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUNTMLC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd49koA8zfak1ZbrAVw%2BSxtvSC8KM1H8427cSMpCS0LAIhANJbEvrlTGsnZIc78woXTyaCdKdqTPFb3bF76P7%2BDmDuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8QvUHXf8pBw7tymcq3ANbyVpp8xCboHHhxEcXXLvLRDTtctPTSA%2FjvGDMIba%2F5LXncYX7at5yW7evP7jrtjTonYCdIE4Bi3KpZOu8gl8GUmGye5indM5%2BHPX54XSmMOTWjoAwoEx6z77aryuBHnSRujDtqwDoWQfouWan18ww9pCEDtRUhUbCYvfw9euS8BQF4ROUC3kVu9mhgLgEOIqL9G2Nkhjn%2B7Krw42vGdX4r%2BoK66tjKx85Mu7yGjp%2F6wyG3N5RM3mTbAGWsAioOT8Ozi%2F0itsWgG6AncFYnbGGVl4dVl%2B080hjM%2Fi%2Bm%2Fv12NB%2F1udYn%2BQ7Fxn0%2FdbVzWUwMbtoAOq1jFDEox73ReoSMABfWxplqUYwhK6ITzgh9qVP8lqKCVnGPr0vIzqli93F79SvYiIN2tXXyuF80WqqlA7x6Cn4t6kfhv3Q%2FplCL2TNUAYm2Laa%2FYcGx81NrvZXNlMnI7EmeKqnIe546CFv9nteDKe6vR9r9%2FEb%2BYI9FF2nu7DzWAmFA7xX12aTcd%2Ftg17z76FMA6YrNhZACTGcNsp1kXFlm%2BLUImoXMMsWvLenkfJLXiqPvn7NiXJx0SYmByKenKaZEsFP8FESn163E3lL27aY%2F%2FZORx52MzC0TwTeAItognFVEXPjFTDav9G%2BBjqkAXVVa1TF%2Foxm30pBY9CGsv0DL5UYaqQqyLOA05QWYbqY%2FZSz3kO0doLQL5DlmTSF%2FNhg8tAAz5lB5quInQynksK5qzBJY37oqNeo0ct3DNjsgswuAJdOVan8BE8E30aZg9aQ4Oqd1xjKdnQ%2FdwQPPioCqWWGOYK52OzoKgOgXsxYy2UyizSsWdiaNXMO8iHRjYTNlV5bXfYZ5e6dMldpCU%2FkGrJS&X-Amz-Signature=deed91a63abc0b97c67977c722428656a9e9d6d4cb8d5adf718447905bd584f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
