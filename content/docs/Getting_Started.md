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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSOI23KW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fuqX0WXD5rvfG9oKvHLjQE7QGRTskVd0g7IPfDpj5AIgTOEPtVZmYV0nq%2BElYUVLXtQj0ogt8VR2vOEHIR87GVIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDIpaBGhbIZ2Eg9hMCrcA97Kv3LROgjU9JAFV2tAmSeFPRyHHmULpNqRBqCuvGUmmXutHCiYLzCMgBgOOD%2FRHsMCT6sA8l0fE12yAI3fZ%2Fo%2BrkMNI1n2B1PUMckTAdIZLkK8xVRGwAhXC0KUD9iVHBPmk9M151zlbDlexjJyQqe12vtTsZjVjmXSzSCCQyIzfV7E%2B5tJq2lTEVXUfv3njvhXDk7zYdg7C6d4T6bXP505qfb0D%2F%2Bt%2FHAuVMbFHKs8tcRMySnEPOblhc9cJ0KM%2FYLL1Jq9r3yNDtwzMetiHLVgR%2BmG4SMMa03sgpxki8quoO66th9hTh6vM4Ncl9%2BJ4%2BtMlkgbHT4QZ%2FdTQWF%2Bs%2B8AkKaeoUNYRg%2BXCl4ML2cQdMoQUvi0e%2FvHQbUSyomKnpgLyEd9e10VUzOQ1Qc0pLIssNDikSoAfEgQzprwXTnFAZdvtq3jzBcvv24Pyw%2FvxUND36mOl5wb3IzIPiZLGLYhWJOv%2BcRc5uqiR8p8gb0MrPpftP5S6o60vO4B8YFwXCpobDLGZB5u1P6Tv2ZezYnlwL%2FS0c9qvyI9rBx1xWpEs5EZx%2BKVEiT%2BXJLs63BOIK9hzlX2RdAg%2FzGIWM8SOVjamw6TW9Iuhl9XwYmrIR1%2BJTgUO0UgvHDzCJLnMKOS374GOqUBk%2BG%2BeufQA8cSSp%2F1Ddq4jrJsuoQJwPlDNaxaDD8Y%2Bzl0DHaQfp9RVDVrwHCw8XZbpj0ln572ma3p%2F2qrrYEq1mFBKbcgSMnzsKDM422IcQU2Uhd4HHmsdLcRqJDP5HowoRRxIyv541qw4MBp7ViLOJPh95OM3TBdZ2u9cXXgSoA8CTdMSiw%2BWgKeFIJMoqAD2rlUwJ5CvNqgheFbQCwWro0VX8Ri&X-Amz-Signature=c5c8e55eb6a1b86364b29e965564494aed4018d97820dbd718c0edb8b2fcbf8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSOI23KW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fuqX0WXD5rvfG9oKvHLjQE7QGRTskVd0g7IPfDpj5AIgTOEPtVZmYV0nq%2BElYUVLXtQj0ogt8VR2vOEHIR87GVIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDIpaBGhbIZ2Eg9hMCrcA97Kv3LROgjU9JAFV2tAmSeFPRyHHmULpNqRBqCuvGUmmXutHCiYLzCMgBgOOD%2FRHsMCT6sA8l0fE12yAI3fZ%2Fo%2BrkMNI1n2B1PUMckTAdIZLkK8xVRGwAhXC0KUD9iVHBPmk9M151zlbDlexjJyQqe12vtTsZjVjmXSzSCCQyIzfV7E%2B5tJq2lTEVXUfv3njvhXDk7zYdg7C6d4T6bXP505qfb0D%2F%2Bt%2FHAuVMbFHKs8tcRMySnEPOblhc9cJ0KM%2FYLL1Jq9r3yNDtwzMetiHLVgR%2BmG4SMMa03sgpxki8quoO66th9hTh6vM4Ncl9%2BJ4%2BtMlkgbHT4QZ%2FdTQWF%2Bs%2B8AkKaeoUNYRg%2BXCl4ML2cQdMoQUvi0e%2FvHQbUSyomKnpgLyEd9e10VUzOQ1Qc0pLIssNDikSoAfEgQzprwXTnFAZdvtq3jzBcvv24Pyw%2FvxUND36mOl5wb3IzIPiZLGLYhWJOv%2BcRc5uqiR8p8gb0MrPpftP5S6o60vO4B8YFwXCpobDLGZB5u1P6Tv2ZezYnlwL%2FS0c9qvyI9rBx1xWpEs5EZx%2BKVEiT%2BXJLs63BOIK9hzlX2RdAg%2FzGIWM8SOVjamw6TW9Iuhl9XwYmrIR1%2BJTgUO0UgvHDzCJLnMKOS374GOqUBk%2BG%2BeufQA8cSSp%2F1Ddq4jrJsuoQJwPlDNaxaDD8Y%2Bzl0DHaQfp9RVDVrwHCw8XZbpj0ln572ma3p%2F2qrrYEq1mFBKbcgSMnzsKDM422IcQU2Uhd4HHmsdLcRqJDP5HowoRRxIyv541qw4MBp7ViLOJPh95OM3TBdZ2u9cXXgSoA8CTdMSiw%2BWgKeFIJMoqAD2rlUwJ5CvNqgheFbQCwWro0VX8Ri&X-Amz-Signature=b1412a5d94e9633b2ff9056c07fbe82479cc693ba7cc2ccb169447fd37788c20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUTRBLM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fu%2BWkevJqrcbL9ivByq78y8ItEVS5dZrdjfNQLAC9zgIgIA5F2LEvlSo%2BBRv0zrrlH81mwHybF8YzzWfWEc837aIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDD2TyvJgpEi5USBPeircA%2BxRZ5riMAhbVxL2chrVJtitFDYmJmLAjYTodinJwGJpz2wGz8P2o4YBSIO9epzZqj2cgBgmdO8UquZ9eA7yr5VEhh0PjKz5Ow4qPqMWAq2GZGhGYGMouSSHGwaWkenynnb4Kcj5OslRjk0hDHWQv7Q9Re05eOng%2BuMEoyjuu1y0lgICVJ6zcXmO7PjoehvdZk6%2BFuimcm4VTQGJCYFsxUwYDzuBwviHem3m9FueDc53VkmW0NRPyX10gBV3jx6bDRtzwZtkyrBqHWL2Rn9YO2M1nEEQvshtzjw2jEcJK6wtRO8C1DSsK0kWL0umeg3ltC%2BuWYGfz3EB%2FiaD42w7ebUCxlyrgx4MxIF9HxMhR7WgAZNMRiU8XTCp8hl1L5mDPq24fnlWRfbUKPNKwGM67OxL22QKEKC9G%2B8jtaI8Zozref3hNK%2Bx4sBOAhyD5P7v3S94NXdZzM0A4OymxDZ9JRYVfCy4dIlQu6CQXo%2FNBtmVZufWRzJzF%2BguS9PxiYTdK1LO1Yw%2BtEVhspzIGONqjtiAG2rRzOZv4czqfbQGRCQJJpOR6%2B%2Bem5L%2F69BdkWMvS1dc6gF%2FgTsDu%2BhAQdUQ6NVybmIwU8k5sLMEbemPoES1e0azs%2FtQijumHSwyMLWT374GOqUBN2Vl6iVHj66O3z0A2z9zZVMtZjrQlNx8DFGg4WCWCA4OVi6yaumF5MwLN25NztK51CzwZnurur5LS9gmVnDt%2FaS7QwhjXBo1I2tY742PCj2rKCCit8Yr53pChDKs%2Bh8BX3rJEnZLs%2F%2FARiEOUKuq9XOiQxb4WXVy9o1vcrQuoZ9iUJx%2Ffa60BQFPJW8FXqgkctRTZmnX%2F6WV93nHtdZI%2Fzz0PHW%2B&X-Amz-Signature=b60026dc836c8fd2b3e32cc119e157e2d8972c306dbba6a23c7e5af08b18d023&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4CMEZA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgK%2FaKbTpjeyPqNKOgo4iFn8%2F8Lc%2Ba3VyXwdEmysa8AIgSh1%2Bbo%2FmWJ0qgcd8nRhJCmSry5DSEm9fs6lypmvBpbQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDF5N3PO9uhNQ8StyMCrcA3xhrgVj7lKpZh7nO7o8XTBcXaI9DOubLpEO%2F3SZ0ofIPEh5PSU24dLNkEHHhY5RcC4U6VavuOV6lH2CNcGBRb%2BPVO%2FTwZ54jlO8GWjldgNigMytFvVAVMBYxnd2iASFY82cjipKR8pFOUfk9NYh1a39GIyf3exghNRK5Lu%2FsLKwbZutWrCAKUuAoumG5q0LIUKZcwbhWxOZ3UWNDyeDgxQL1hyNANGOoGFI6uGV54mow2nle3XxFegzfujMs9B4YUW9Epp0ShGoBoOiTUdzzhkkxTvjaYufIsda9rYUAvqeVkHELibuaGCeYFNVYjXowaV7YjKZpmtgrE1jFqGR4e6SmRzG6yiTyr4hNqOANMJXV4LjZLKMRpSnpxAbbXXFTTp7lYnJ7SV4hOEveZfr1TZ%2FaHNjiIKB9TA0ykcSOTxyAJU5eYG%2Fuad719eO0%2BehS1FkOtC0zciSMaOge9NWlrEsRDtb0qy7ZqmqLmHPtWaasnjJmLUETi%2Fyx4FypvOSMku6nH4xdZ4cy%2FioMQJfjTGW7ciVlt18pEMFBgG2GY5fsY%2FiQdMgDpiChxFMnSgdxgm0Uak6toC0dssfYIhrme32pHSyFyugErTWQmRhAlWryqO2g4bYif0cmy%2B7MKqS374GOqUBbdPldR3PPRZJLwkpPNDJ4NTPoi4dAhb0tvjasaA6mjEf49o0g0cLWJWB0wZWfQpMruA5AAOzaO%2FSiG3mt8mQHuRfx48xoDoZZx2qNjt63QMOaUdxkuKQ59uuedU4zPqZVmF7bk3itSgyrbWGI5OXBqEJ28ReBvc3BKYyuZPYyqIZvh%2FMw%2FmBh5YA%2FrJh6CF4ZBJoxUJudBim7HT2fjw%2FPAiRxbvt&X-Amz-Signature=483e18e05ae1a488fcb068de9ae7d19713fb08e8bbd497c58545a34afa7cfdb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSOI23KW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fuqX0WXD5rvfG9oKvHLjQE7QGRTskVd0g7IPfDpj5AIgTOEPtVZmYV0nq%2BElYUVLXtQj0ogt8VR2vOEHIR87GVIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDIpaBGhbIZ2Eg9hMCrcA97Kv3LROgjU9JAFV2tAmSeFPRyHHmULpNqRBqCuvGUmmXutHCiYLzCMgBgOOD%2FRHsMCT6sA8l0fE12yAI3fZ%2Fo%2BrkMNI1n2B1PUMckTAdIZLkK8xVRGwAhXC0KUD9iVHBPmk9M151zlbDlexjJyQqe12vtTsZjVjmXSzSCCQyIzfV7E%2B5tJq2lTEVXUfv3njvhXDk7zYdg7C6d4T6bXP505qfb0D%2F%2Bt%2FHAuVMbFHKs8tcRMySnEPOblhc9cJ0KM%2FYLL1Jq9r3yNDtwzMetiHLVgR%2BmG4SMMa03sgpxki8quoO66th9hTh6vM4Ncl9%2BJ4%2BtMlkgbHT4QZ%2FdTQWF%2Bs%2B8AkKaeoUNYRg%2BXCl4ML2cQdMoQUvi0e%2FvHQbUSyomKnpgLyEd9e10VUzOQ1Qc0pLIssNDikSoAfEgQzprwXTnFAZdvtq3jzBcvv24Pyw%2FvxUND36mOl5wb3IzIPiZLGLYhWJOv%2BcRc5uqiR8p8gb0MrPpftP5S6o60vO4B8YFwXCpobDLGZB5u1P6Tv2ZezYnlwL%2FS0c9qvyI9rBx1xWpEs5EZx%2BKVEiT%2BXJLs63BOIK9hzlX2RdAg%2FzGIWM8SOVjamw6TW9Iuhl9XwYmrIR1%2BJTgUO0UgvHDzCJLnMKOS374GOqUBk%2BG%2BeufQA8cSSp%2F1Ddq4jrJsuoQJwPlDNaxaDD8Y%2Bzl0DHaQfp9RVDVrwHCw8XZbpj0ln572ma3p%2F2qrrYEq1mFBKbcgSMnzsKDM422IcQU2Uhd4HHmsdLcRqJDP5HowoRRxIyv541qw4MBp7ViLOJPh95OM3TBdZ2u9cXXgSoA8CTdMSiw%2BWgKeFIJMoqAD2rlUwJ5CvNqgheFbQCwWro0VX8Ri&X-Amz-Signature=050fdfe76978cb547113f2e2b14ac83778242cefcc2d1af076e833d0f796a756&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
