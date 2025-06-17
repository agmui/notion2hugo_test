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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAK7UIO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM4vdvCa9Wej7gIIP%2FGxsxPoJjaTvEiHLC5c%2B52uwD0gIhAJQgEGpOuJht80PVkLWAMhHhYgALGNidUqkXmQt7%2BTyRKv8DCGkQABoMNjM3NDIzMTgzODA1IgxvuhiQzdeO%2Bg%2Fefb0q3AMarv8xUzjB4Spce3kTpZvB4ACAEnCfPF6rvw8K2XNz1P1nLfXTcI8ZblLJYZCEpjaN2mtjq3fRrtaSQxmlqhMKkhpPT4Wp%2Fi0D%2BSIbUFnMTlJ4rYgqNF1aQ5M%2FG0V4qO5DdAWmfyW44WbJT8UqgE1xTaLNUvcDTDN17KuxSR1QyrWECWBOlWwYO6vn0FUBASPM2%2B5yczOojMx3tRQ9ryncMyq75YIg1Gd5MoQp5p%2BShgwpzfqhwbgyvQSQsaLE3CUPUHlO2nC9vozz2Es1x7xQngN08G9nybiZ5FOuGnWbBzoeR2T4sRWgTODvQyXmRV0sxW2yg%2F9M2sImsSmhbKqoteeYhkEsx6P4eAkAiIVZc9EnOX9uuzrbqE3Hv8wHqTGc7gcv0QmJKDY5IAhbbrzerYJgT05yN2LJsPoIUAl1u74TwGcQ3CQGuKKSCDm4NR1cuA1cffyJQ99BuAoNlL2LbL%2FAMUTDS26FBbZnFm3b1GIbji%2B0s2sJ1epJiau6CLjsCQ3phuR3JaxBmLXn8VuatTCBoyW687viUEw%2Fdpbg4QwV%2BxqOxn79O7Ak%2FMEFWMzXWyYTlEw6Ae04QmjNMDyttoAwNSZ7gsNxzz8DvdSSEWFMM%2B8BMctKQSef9TCm3sLCBjqkAcOPsAoARK4ZZ9QqZHkiw0G7rGmQIMwojaO1M%2BIpY2%2FM%2FM90mQAK2M2isOpewBKDcakYzUEpFNovUVewCkEArDaG7o26AvTgtpCqvZBCWG7tUGXAneHure9KJiK0sPWJnvywKhcoyrL5syoRisStP%2Fz8jFgBl7cECwleggW%2B58%2FUSKQJi9d5SIO%2FAXLrU2q87zwQY4Fl71cUYZIaf9FOswobA2bv&X-Amz-Signature=d81f812265cf49d0407f07967840c09e339b0135c438ef8e0e4497623f39f414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAK7UIO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM4vdvCa9Wej7gIIP%2FGxsxPoJjaTvEiHLC5c%2B52uwD0gIhAJQgEGpOuJht80PVkLWAMhHhYgALGNidUqkXmQt7%2BTyRKv8DCGkQABoMNjM3NDIzMTgzODA1IgxvuhiQzdeO%2Bg%2Fefb0q3AMarv8xUzjB4Spce3kTpZvB4ACAEnCfPF6rvw8K2XNz1P1nLfXTcI8ZblLJYZCEpjaN2mtjq3fRrtaSQxmlqhMKkhpPT4Wp%2Fi0D%2BSIbUFnMTlJ4rYgqNF1aQ5M%2FG0V4qO5DdAWmfyW44WbJT8UqgE1xTaLNUvcDTDN17KuxSR1QyrWECWBOlWwYO6vn0FUBASPM2%2B5yczOojMx3tRQ9ryncMyq75YIg1Gd5MoQp5p%2BShgwpzfqhwbgyvQSQsaLE3CUPUHlO2nC9vozz2Es1x7xQngN08G9nybiZ5FOuGnWbBzoeR2T4sRWgTODvQyXmRV0sxW2yg%2F9M2sImsSmhbKqoteeYhkEsx6P4eAkAiIVZc9EnOX9uuzrbqE3Hv8wHqTGc7gcv0QmJKDY5IAhbbrzerYJgT05yN2LJsPoIUAl1u74TwGcQ3CQGuKKSCDm4NR1cuA1cffyJQ99BuAoNlL2LbL%2FAMUTDS26FBbZnFm3b1GIbji%2B0s2sJ1epJiau6CLjsCQ3phuR3JaxBmLXn8VuatTCBoyW687viUEw%2Fdpbg4QwV%2BxqOxn79O7Ak%2FMEFWMzXWyYTlEw6Ae04QmjNMDyttoAwNSZ7gsNxzz8DvdSSEWFMM%2B8BMctKQSef9TCm3sLCBjqkAcOPsAoARK4ZZ9QqZHkiw0G7rGmQIMwojaO1M%2BIpY2%2FM%2FM90mQAK2M2isOpewBKDcakYzUEpFNovUVewCkEArDaG7o26AvTgtpCqvZBCWG7tUGXAneHure9KJiK0sPWJnvywKhcoyrL5syoRisStP%2Fz8jFgBl7cECwleggW%2B58%2FUSKQJi9d5SIO%2FAXLrU2q87zwQY4Fl71cUYZIaf9FOswobA2bv&X-Amz-Signature=8b58db1564491da3b487cf318bb35d3a9dece28717954a21e894fb7e6abe497b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAK7UIO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM4vdvCa9Wej7gIIP%2FGxsxPoJjaTvEiHLC5c%2B52uwD0gIhAJQgEGpOuJht80PVkLWAMhHhYgALGNidUqkXmQt7%2BTyRKv8DCGkQABoMNjM3NDIzMTgzODA1IgxvuhiQzdeO%2Bg%2Fefb0q3AMarv8xUzjB4Spce3kTpZvB4ACAEnCfPF6rvw8K2XNz1P1nLfXTcI8ZblLJYZCEpjaN2mtjq3fRrtaSQxmlqhMKkhpPT4Wp%2Fi0D%2BSIbUFnMTlJ4rYgqNF1aQ5M%2FG0V4qO5DdAWmfyW44WbJT8UqgE1xTaLNUvcDTDN17KuxSR1QyrWECWBOlWwYO6vn0FUBASPM2%2B5yczOojMx3tRQ9ryncMyq75YIg1Gd5MoQp5p%2BShgwpzfqhwbgyvQSQsaLE3CUPUHlO2nC9vozz2Es1x7xQngN08G9nybiZ5FOuGnWbBzoeR2T4sRWgTODvQyXmRV0sxW2yg%2F9M2sImsSmhbKqoteeYhkEsx6P4eAkAiIVZc9EnOX9uuzrbqE3Hv8wHqTGc7gcv0QmJKDY5IAhbbrzerYJgT05yN2LJsPoIUAl1u74TwGcQ3CQGuKKSCDm4NR1cuA1cffyJQ99BuAoNlL2LbL%2FAMUTDS26FBbZnFm3b1GIbji%2B0s2sJ1epJiau6CLjsCQ3phuR3JaxBmLXn8VuatTCBoyW687viUEw%2Fdpbg4QwV%2BxqOxn79O7Ak%2FMEFWMzXWyYTlEw6Ae04QmjNMDyttoAwNSZ7gsNxzz8DvdSSEWFMM%2B8BMctKQSef9TCm3sLCBjqkAcOPsAoARK4ZZ9QqZHkiw0G7rGmQIMwojaO1M%2BIpY2%2FM%2FM90mQAK2M2isOpewBKDcakYzUEpFNovUVewCkEArDaG7o26AvTgtpCqvZBCWG7tUGXAneHure9KJiK0sPWJnvywKhcoyrL5syoRisStP%2Fz8jFgBl7cECwleggW%2B58%2FUSKQJi9d5SIO%2FAXLrU2q87zwQY4Fl71cUYZIaf9FOswobA2bv&X-Amz-Signature=37af548e78c3ce29fc9f2fe4c9b59ebac9468256dbcab3c0a7e8fb313a34820e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJZ662M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgs%2BQz5%2BU7r6tfY9d5hXNe%2F25HV6ndrFbZoq73xHluYwIhAJrV%2BSU7KwQXkG%2FRIRopxreoDNt5A9u5moJuVKvXiRlxKv8DCGkQABoMNjM3NDIzMTgzODA1IgzRpIcOdYSh9l7%2F6sQq3AOFUgbWlJOH8ZxS0MoZ7kxnhGhSQMx%2FMEACtYkkct1W7RtoOGRxPNLK20JoIT0yEg75qWlHRTptMFWdUIW74WJqg4nS6F7OPKSgravMOLGSxY74wTdoXGf948VuKqR%2Bu8xEHk22zdfJaPE6EpfmrG2CbqvOYqk7aPX4D2A%2FbkvwLv2BY%2FznHvwK1ZzLJyODpv5%2FtZXoxE6NnjcFQzeDTY5bSkyBNXlukPBIue8z4MatdyrF7r6FyN2TdmsPqOK%2BWDZ87iYDNCwCsXVGN%2FSuErsIdcoU405PsKOiQvkehaUZJB59BQFAT%2BGnCYRA2LfpxtAGabsS9MSJf9Hg7pBKaO37CQaI%2FbzU9b5%2Fjs1HNAehRqwoFMOyBmeMn%2B3qBIP6GyzKISSlN21zugiy0oooREnyy1rgGYIcjKo70mCsRGTEOIBdzJSfp2Zh%2FQf5t9qsGmap85hS9eVvtBLrPS5XhQ%2Bw7EEH9GvAXVlPl%2BeQ5oQeFMS7Xe%2BslN1%2B%2BRNdds4g8Xw2XdcJGVXoxL%2BcsKbiBH5cfQoINZpu6lJhSNdj1rF7jWKE5JsPQbU0ULL68pZP%2BONWI6Zs1WnUHB57jfXJyvXmGUAtFryfqDYqKGuphfHGdl8GzkQDl2GVQF3wPDCk3sLCBjqkAQsKT8vSJHOecUOMG%2BNsyj7ePrYixJZq7Hd0jQi6Rfb9zAPXe8fLk0Ykw3xHVYfmFXZSgItPmL1QBO09%2FVSWumT8Y433PfTH%2F0tH0akNSJEnKccNJ%2B2PVhotFQSbiB7kt7zbNeE4QbaV3YX89RwyYr8qSEe9OJs6eanHS5w7SNoinOSCVmCL65zsvxcxCqE1cqzapup0r5jUgaIFBnoiiNmOcL4m&X-Amz-Signature=be8af6bb918627954ea1f8157208e9232aa23a24d651d05056bc2e9822b87221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5WF7K4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeMMGbVxW8YAlnp6RJd8%2FCMDE7M4LuTci7RG7wx1T2cAiEAtHQ4hp0dnuddhzWs8kNFxFYp58jTze%2BqSDsTiXWneyoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFLXzvn2zdhdhTjSCircAxiHl%2F6trgKu0okMdfTrgqIKm%2Bc1UP6rFKFTMeXIB0fn8zqqh8t%2BCVQVpYOF15Wt507MZG08iAxCD8I8raIJ16RBiSitsl3DTTcVIcHBl9ms%2F80LkBKR4uEi2Wy9HP9isWlXgTtYupLwWvJ8Xi5%2FJzRkRJfyqNS6xnpTpaC65Zpxgs7iD6cMqrL3E5jkDQn6iTgBpr8W4r9pGGT6lC5ejbsDYhSHlQ2ULwOjIQpXSFcw%2BLUP51HT9cgY6qu%2Fw%2FYDdP3L0w8V8Sw5KlSjRjTXAfq6p1a4O26kwT%2FwNCKd0R7DlkP0LHaTCSLDoQWQAmxvCD%2FoGl8kdJEQXo%2FD5%2BxFlPJ4QcXZlubuylq96cFYLqHWcNOv%2BY0qdkbCQXy2Fa%2F9eHhUloANhnLMxWCFmW5yq929DZLZk2EiRNi8RT1PmUTGm%2Fbu4WtLx1KJyRzAwqsPQMmMw99M6yb6QFF0og6uBVxi4p2GMpMTk2ZfoVa%2FdKsQJwPdEUvkbw%2FtbOomgMWsBsGdBncP1jCRUtE7KQ%2FemFPSamZS%2BRhda2U3bNHS%2FX9xUw2uBbvtrYAZTEqMiGrHnVI7%2FlDjzZB7vcK7DdHa96%2FpbVKnQaV5m6m7oS19LaF0x6NbDXFDy%2FVCdNh4MNTewsIGOqUBJx9dqnJusYBHM2C6Ng6FJ4P9aF5F34ATsv0F7TnEWCOYaT%2BGbmm0eQUvNo6Qj2EUIyv3CtZLNeyhkI9w6dNY7y57R57%2BNAEZmr26GcqoA6RSYluNQsWgppAYrrGLd2YFi6BGi2MiKyUWu8%2FEfOjd1qwE2h4ODLnOebpZYtZ7Zh0XZQ4BrK5FVzx1L7fZG6Y48%2BUEwwRmHgrRCUiT38YvlJGmZL0P&X-Amz-Signature=0ea73b045c1e2f43ac5877f7da9b2856004ab8ffc2beded0276dadf1ad09f808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAK7UIO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM4vdvCa9Wej7gIIP%2FGxsxPoJjaTvEiHLC5c%2B52uwD0gIhAJQgEGpOuJht80PVkLWAMhHhYgALGNidUqkXmQt7%2BTyRKv8DCGkQABoMNjM3NDIzMTgzODA1IgxvuhiQzdeO%2Bg%2Fefb0q3AMarv8xUzjB4Spce3kTpZvB4ACAEnCfPF6rvw8K2XNz1P1nLfXTcI8ZblLJYZCEpjaN2mtjq3fRrtaSQxmlqhMKkhpPT4Wp%2Fi0D%2BSIbUFnMTlJ4rYgqNF1aQ5M%2FG0V4qO5DdAWmfyW44WbJT8UqgE1xTaLNUvcDTDN17KuxSR1QyrWECWBOlWwYO6vn0FUBASPM2%2B5yczOojMx3tRQ9ryncMyq75YIg1Gd5MoQp5p%2BShgwpzfqhwbgyvQSQsaLE3CUPUHlO2nC9vozz2Es1x7xQngN08G9nybiZ5FOuGnWbBzoeR2T4sRWgTODvQyXmRV0sxW2yg%2F9M2sImsSmhbKqoteeYhkEsx6P4eAkAiIVZc9EnOX9uuzrbqE3Hv8wHqTGc7gcv0QmJKDY5IAhbbrzerYJgT05yN2LJsPoIUAl1u74TwGcQ3CQGuKKSCDm4NR1cuA1cffyJQ99BuAoNlL2LbL%2FAMUTDS26FBbZnFm3b1GIbji%2B0s2sJ1epJiau6CLjsCQ3phuR3JaxBmLXn8VuatTCBoyW687viUEw%2Fdpbg4QwV%2BxqOxn79O7Ak%2FMEFWMzXWyYTlEw6Ae04QmjNMDyttoAwNSZ7gsNxzz8DvdSSEWFMM%2B8BMctKQSef9TCm3sLCBjqkAcOPsAoARK4ZZ9QqZHkiw0G7rGmQIMwojaO1M%2BIpY2%2FM%2FM90mQAK2M2isOpewBKDcakYzUEpFNovUVewCkEArDaG7o26AvTgtpCqvZBCWG7tUGXAneHure9KJiK0sPWJnvywKhcoyrL5syoRisStP%2Fz8jFgBl7cECwleggW%2B58%2FUSKQJi9d5SIO%2FAXLrU2q87zwQY4Fl71cUYZIaf9FOswobA2bv&X-Amz-Signature=c3032e08f927309177021004b4cbcd8d3dac4e779aa04095badb7202ab55525b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
