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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL7DEST%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP5%2BPcUPFvhUKVr7aa9Ye8wtn2Sw0t66WpyeiBiBU30AiAbyJ2xlZ8eWxOaWVSyv8Nch%2FM8BPGczosPRIVTXvYgMyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FeIa21KTkca1crPiKtwD6GQ1LEsf8IUQNaeU2xtLzBa0NDpHnaBiJ2vEGS3hNQtCEA7W4d6PAv7KiaKLfacUEOMR9Pal5%2FWlCN7hF93p1lhyhuc%2BtVZwuLCr40GKudTWmeVjq81cAGSvCPYCnKb1b0HGy7KYcJBNcDWg99%2FZ3NgpsMwnXcVp0WRAIL5kb3GvxcVpPR7l0vFD8cqyv5vcrc%2BdI94cIRNMBnDL%2By9LZk%2BJ%2BC6HYVx6L0SMz%2BqsHX6vv1S6vVdMmS4hOTdUbo4BskJPl6PkcuBeaSFk5vmdLJ5SnbApTmiGmo%2FEcXQpvc1k4EOuYpKufMGe9sIAR3mhGIBljomlPLvU8QQ30UiYj0tTAhX1UxY2xo%2BCUeF7MJmSGWVf%2B3T%2FOYJZySuDBVOaZdPZ4HgQtrAv7AToZci4a1F8D97DsJXFUgIdD1DFZXp3NSW4uqz8zSdrAeuWZTqETWeUfVAsUl35sEpNcnVLTVF6Y0SeS10zHvmnoOZ7irAouCFRsT5eWqFIa84PyUFC0%2BbWXsUzxxe%2F7%2F1ttdEJ1C7%2FAqj%2F4jlCSDHUpojStIfM1LHBdLgUzL6rnl17CV12UKxuFoWYaTsEkpjE%2FgCLov7W2I8J%2BWhe%2FbOd0%2Bc8sMntqYX1QiSYfL5OIXAwmaWqxAY6pgHMy0EARVHwst5gQHOg3WtcwqpaH14RB6h2jkTVJUBz5MGgDLtAHLet676BuofxrWZsrwAKoMblsQ7daYQRla1oix7O6dB%2Fxz4TSVEtkMhIYC9LgNE37i%2FCA8H7Ly9THzErJ4sgwzkUiAccCR5r22mVSI%2BA3Rqsxw9YU6bwq2TQdoiXVmPq5DTw%2FtH2uVYcSyhoeSh2WEyV0Fq9teF%2BE2zHQbEjXPGP&X-Amz-Signature=92c961c5adba9260696e7d779978fba1e28b780c56ac865e979d5796ad87372b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL7DEST%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP5%2BPcUPFvhUKVr7aa9Ye8wtn2Sw0t66WpyeiBiBU30AiAbyJ2xlZ8eWxOaWVSyv8Nch%2FM8BPGczosPRIVTXvYgMyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FeIa21KTkca1crPiKtwD6GQ1LEsf8IUQNaeU2xtLzBa0NDpHnaBiJ2vEGS3hNQtCEA7W4d6PAv7KiaKLfacUEOMR9Pal5%2FWlCN7hF93p1lhyhuc%2BtVZwuLCr40GKudTWmeVjq81cAGSvCPYCnKb1b0HGy7KYcJBNcDWg99%2FZ3NgpsMwnXcVp0WRAIL5kb3GvxcVpPR7l0vFD8cqyv5vcrc%2BdI94cIRNMBnDL%2By9LZk%2BJ%2BC6HYVx6L0SMz%2BqsHX6vv1S6vVdMmS4hOTdUbo4BskJPl6PkcuBeaSFk5vmdLJ5SnbApTmiGmo%2FEcXQpvc1k4EOuYpKufMGe9sIAR3mhGIBljomlPLvU8QQ30UiYj0tTAhX1UxY2xo%2BCUeF7MJmSGWVf%2B3T%2FOYJZySuDBVOaZdPZ4HgQtrAv7AToZci4a1F8D97DsJXFUgIdD1DFZXp3NSW4uqz8zSdrAeuWZTqETWeUfVAsUl35sEpNcnVLTVF6Y0SeS10zHvmnoOZ7irAouCFRsT5eWqFIa84PyUFC0%2BbWXsUzxxe%2F7%2F1ttdEJ1C7%2FAqj%2F4jlCSDHUpojStIfM1LHBdLgUzL6rnl17CV12UKxuFoWYaTsEkpjE%2FgCLov7W2I8J%2BWhe%2FbOd0%2Bc8sMntqYX1QiSYfL5OIXAwmaWqxAY6pgHMy0EARVHwst5gQHOg3WtcwqpaH14RB6h2jkTVJUBz5MGgDLtAHLet676BuofxrWZsrwAKoMblsQ7daYQRla1oix7O6dB%2Fxz4TSVEtkMhIYC9LgNE37i%2FCA8H7Ly9THzErJ4sgwzkUiAccCR5r22mVSI%2BA3Rqsxw9YU6bwq2TQdoiXVmPq5DTw%2FtH2uVYcSyhoeSh2WEyV0Fq9teF%2BE2zHQbEjXPGP&X-Amz-Signature=07ca47c7cb011062695d46420817a3bf46c69fc5f7f856a9c170ec150da2fe3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL7DEST%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP5%2BPcUPFvhUKVr7aa9Ye8wtn2Sw0t66WpyeiBiBU30AiAbyJ2xlZ8eWxOaWVSyv8Nch%2FM8BPGczosPRIVTXvYgMyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FeIa21KTkca1crPiKtwD6GQ1LEsf8IUQNaeU2xtLzBa0NDpHnaBiJ2vEGS3hNQtCEA7W4d6PAv7KiaKLfacUEOMR9Pal5%2FWlCN7hF93p1lhyhuc%2BtVZwuLCr40GKudTWmeVjq81cAGSvCPYCnKb1b0HGy7KYcJBNcDWg99%2FZ3NgpsMwnXcVp0WRAIL5kb3GvxcVpPR7l0vFD8cqyv5vcrc%2BdI94cIRNMBnDL%2By9LZk%2BJ%2BC6HYVx6L0SMz%2BqsHX6vv1S6vVdMmS4hOTdUbo4BskJPl6PkcuBeaSFk5vmdLJ5SnbApTmiGmo%2FEcXQpvc1k4EOuYpKufMGe9sIAR3mhGIBljomlPLvU8QQ30UiYj0tTAhX1UxY2xo%2BCUeF7MJmSGWVf%2B3T%2FOYJZySuDBVOaZdPZ4HgQtrAv7AToZci4a1F8D97DsJXFUgIdD1DFZXp3NSW4uqz8zSdrAeuWZTqETWeUfVAsUl35sEpNcnVLTVF6Y0SeS10zHvmnoOZ7irAouCFRsT5eWqFIa84PyUFC0%2BbWXsUzxxe%2F7%2F1ttdEJ1C7%2FAqj%2F4jlCSDHUpojStIfM1LHBdLgUzL6rnl17CV12UKxuFoWYaTsEkpjE%2FgCLov7W2I8J%2BWhe%2FbOd0%2Bc8sMntqYX1QiSYfL5OIXAwmaWqxAY6pgHMy0EARVHwst5gQHOg3WtcwqpaH14RB6h2jkTVJUBz5MGgDLtAHLet676BuofxrWZsrwAKoMblsQ7daYQRla1oix7O6dB%2Fxz4TSVEtkMhIYC9LgNE37i%2FCA8H7Ly9THzErJ4sgwzkUiAccCR5r22mVSI%2BA3Rqsxw9YU6bwq2TQdoiXVmPq5DTw%2FtH2uVYcSyhoeSh2WEyV0Fq9teF%2BE2zHQbEjXPGP&X-Amz-Signature=f1cdd0e4aab563a5c2729e553ea580a9190e80d262a571fd4115fd09a463a58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7PHMNF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3ECcG29feFCpIiNpqzD12IlZb4y7kRdK9kbeMKwBTbAiAVbvfasbm4%2FCMd8wlKbC1PsV5M%2Fuo5%2FPpsfdTzfO4j2iqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyeaw64lWcY4pR0ALKtwDMtNfTuMN3eQuBBeNhPGaFE0AHU08trPN%2F8EhbP9u9JbHxd2Nnmxz5rrT9GZjJ0nEYPMkbP1dxpJeJbT%2B4PTHt7qE9szMdSqh2FDGe3IaFLXfcEy8ujsrPMwCYngvExMUKiPolJNj3wKK5%2FaP7wyIjAfpCWQwXFqFTb%2FLPnXorerwE5%2FJGksxkVYs%2F%2B%2F7on4bAJquUcpejLy60vRfFPUU1vwlwUD6EQaXKOAcjA994nr%2F93ajhb%2Foi79xC6J2haxgNf4g9NOhSnlSAsEmQ75jdpQaX3lPmMaNpmgjdS53zEPsl4rN6WCgoiXrdBicPVESkOpXtwC3I3S%2BH1FPjo27nXt7yDTXa4oFA0V%2BB1CODg1MwZx0M3gtl%2BXAqLAHHqnkn%2B85ZK1yq6rUfJrv2LyVFAJm%2B71BWXAhE1p1j%2Bg%2BkNTA181VjW9dvscFWZE5GM94LH7hnmvjiMwUj0GE%2FOybiyojfYGecNWVXksyJXTzAf9O2%2BNFuse0n6Hfez%2B%2FGMzoJ1D6f56FomItSvM7nHQCkdZUWDn4nZuNPNH1krdX8qER68dff6Q%2B4Lo5QCJW0l4bVKKg%2BPEhB%2BA5JvMR3dDSvGhNDe%2FibBXcaxfpMQssgPI1rUl3xSgRFPqp%2BbowxqKqxAY6pgEC1hjkbQVxG3MWLRFvyenaaPIJrM8Cxp1jELABLJDwfdafH7OW1tTzm9UOJeD0FgQwSN3YqJhQTjmvNPUV8B2ElkqVpnz6wSKru9hLnsWwWhtX4ZgyEnHqprN7gAnnV2Ru9sDWi5UPa1R16mykvD8zzAlSlYxDyT6RK0g%2BaRtEzP5T01FMG79OJhpsiJeuzvh%2FVESWuVGgbdmg0Aza1vGHuRecBAVB&X-Amz-Signature=d523899818541b247c9a67e2c4e5a408d4c1e40250d90d823c337fb154f99a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5BJCJL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVzddsaM1tjzSSf0cMvxItg0y9HUY9oA84VIIrC73TQIgXRLDR4TPMbi3cblNBlga0%2BrImi3nRZhCKo9uqbal%2BUIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUB%2B1DmVgvBkmEQyrcAyd2NFD9wI3nAcVdpzT%2B9BUUO3%2B0SerDuQTLbu%2FCojPJjoN6B5FMBrudFquPNVjhafz2OfavpglPGdwzbSBQGuNJrBRbTVd5AhnW2mai9nt3e1hR7dmUWR9UhPrcZCIVQr7KFDNUbVzwsQEmEI9C%2FmN1aqJtr8EEf5w7j7YUgf6EW99KmJZ9yXQ9xfr8uSRqD7437Qom4pKpUD1f4vtry5rdPlHfQVltoDBwL0n29CWsbnEQskppdOGaAhv8pzt8FHQ9PznPAtvWJ2WjCmJjL6I6GHUPnsz%2BkaL0fWJRyrCPHiUZtjq8jDQqC9ZrhR14DnoFHMA5rbJRgkKDXKtoq6IbFSM8OGuihjID6puLXsQrK9MOIZFjhFtnKTTkDAFVe3i0eoWMUzx2SAKjjHY9ZTau4ZJ%2F9cP8P%2FLvMRuXRdqDgFL3Gb3jmx49n5qr7Q6DMus187rBE8RObf9XT2y4TBXQCAOY17HjgTekBUc391Oi5DjDk95EqqURpTwsWBMWZ2QCZZUWeTihifFe1eIy47LyQS8YTi324Q%2BIrqKxiB5YiEeU7ywDf0pHDuP7Ef4mcWwiEWS5ixFoTcCC2NtOdE%2BV6cm3kfd9IYAY6gpjmAgExr6vKDnGJgHH%2B32mMK%2BlqsQGOqUBtA4tWzpXvNPfpQs9kQPPZ%2BGU%2FuyYYkuNtiIr1WbtEisHl4lPRB5hOn8iYXBIKfyZn5WtUDHd0xqwJKlThEya1uFn1PVJw3R%2FDCXIXnOz%2BBztHIVjCYRyeD7nr78Av8Wr4lIJQG1g2aW9cDMx3pThQ5UsH%2Buu4pSAYlG1eCkMJklB%2FKtRojypW9RbZq1RA%2FjDw7WezOj%2FESLHj3pZh5Jlzv2BdN%2BJ&X-Amz-Signature=f47c9dcadbb7884c663d9b62656b86ef9ddb84a878937328080a1b0b92ef7944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL7DEST%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP5%2BPcUPFvhUKVr7aa9Ye8wtn2Sw0t66WpyeiBiBU30AiAbyJ2xlZ8eWxOaWVSyv8Nch%2FM8BPGczosPRIVTXvYgMyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FeIa21KTkca1crPiKtwD6GQ1LEsf8IUQNaeU2xtLzBa0NDpHnaBiJ2vEGS3hNQtCEA7W4d6PAv7KiaKLfacUEOMR9Pal5%2FWlCN7hF93p1lhyhuc%2BtVZwuLCr40GKudTWmeVjq81cAGSvCPYCnKb1b0HGy7KYcJBNcDWg99%2FZ3NgpsMwnXcVp0WRAIL5kb3GvxcVpPR7l0vFD8cqyv5vcrc%2BdI94cIRNMBnDL%2By9LZk%2BJ%2BC6HYVx6L0SMz%2BqsHX6vv1S6vVdMmS4hOTdUbo4BskJPl6PkcuBeaSFk5vmdLJ5SnbApTmiGmo%2FEcXQpvc1k4EOuYpKufMGe9sIAR3mhGIBljomlPLvU8QQ30UiYj0tTAhX1UxY2xo%2BCUeF7MJmSGWVf%2B3T%2FOYJZySuDBVOaZdPZ4HgQtrAv7AToZci4a1F8D97DsJXFUgIdD1DFZXp3NSW4uqz8zSdrAeuWZTqETWeUfVAsUl35sEpNcnVLTVF6Y0SeS10zHvmnoOZ7irAouCFRsT5eWqFIa84PyUFC0%2BbWXsUzxxe%2F7%2F1ttdEJ1C7%2FAqj%2F4jlCSDHUpojStIfM1LHBdLgUzL6rnl17CV12UKxuFoWYaTsEkpjE%2FgCLov7W2I8J%2BWhe%2FbOd0%2Bc8sMntqYX1QiSYfL5OIXAwmaWqxAY6pgHMy0EARVHwst5gQHOg3WtcwqpaH14RB6h2jkTVJUBz5MGgDLtAHLet676BuofxrWZsrwAKoMblsQ7daYQRla1oix7O6dB%2Fxz4TSVEtkMhIYC9LgNE37i%2FCA8H7Ly9THzErJ4sgwzkUiAccCR5r22mVSI%2BA3Rqsxw9YU6bwq2TQdoiXVmPq5DTw%2FtH2uVYcSyhoeSh2WEyV0Fq9teF%2BE2zHQbEjXPGP&X-Amz-Signature=f4ab1b21a82507213724a0f44e7b5f379404b260be8a838a57ec27552184c733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
