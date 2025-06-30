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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADMDWWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BBreigFNlHDAiiTCus9zmlpdCZwVU2Gwau7z3FkDzPAiAVSUAp8PmWG6E9ErQHGRINksJ%2Fyn00hRmmiWJbEf2vJCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXY9rpDstMUfwnkb%2BKtwDOAmY%2BolJD0Y1%2FjtfDnT%2Fo4pWzvOWMN9a1tMJlhooiY%2FPyUHKRRaORIy5gJULfJhAewTDZzunaQYNYtE1D%2F2g5OgsQ9STEy%2FDgOLfiOLjcnYWpgB9OdAFq18N%2F7wispxvhAlGPn8mjEkJ8x5yw46RAyNrswaJUaI8MEOvEYdPU1h%2FiB6fnJI%2FZHiBUDPcggFQGNBRbmkOB0zQaNPiEgPIObQcLjkmyKz7YwcqLMyRIHTdua8m7sHK%2Fg7ALSaDxMAJXBSZ0qahbYsl6G6rSgT8iCAR%2B1IzvlaIT5Z%2BwNat7uGi4wGr4mYoJia%2BTOPuq7R7FTDTKKveShkdM4sM8nCDZG16bnD%2FSUbdEsjQGZztiM8POyRzOX2ac682kyTBKdp71g5xUAoEJVLmwYubC2lXY9A7Un%2FN8JZrKwLyPMt1OzMknLvuF%2FMfxNO8kXFC7bnDZE%2FIScWoQbdGhL%2FXxZwqvpDMHJcVuKxmRqNlqd79wlGw9kR8Wd7tfeVFfM96wDhAS3I5w5Gt8lx%2B2POSg2aFiscTkCA8gNZxcUOkL2miYxy9PrYNeoYo4o7KtkCMvvnvE%2F69swzzCBbeEOp2ld7X4oqfwoLTFwlHVP9c2s9%2FBR%2BbujtSpItRwBbDa8swi86LwwY6pgGwe6oMHTQDIiA09UPqMfH32ZfXzeh9LZRJgDMB0RWZVGPnGYgiCea3oCAH8DuOjTc1LwPE8T2cnnUvqiY%2BQYAS%2B%2Fs9uW8jc8k1Qhhr7rpJ0diwct8JNWQnq89FoVmN8ICskobbnsPJ7AGD2a6lSNwFtS3IRVI%2BTnSLM6UInYwHuL9xDiyRDJwNY%2FyLTIOJxC%2BQrbRfYN1f3eho9p7LM5IWB9dGBO4I&X-Amz-Signature=5cf3fea1e6db4b20886cd20eea149236cc7841c268be15613bc2492ddf6e4ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADMDWWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BBreigFNlHDAiiTCus9zmlpdCZwVU2Gwau7z3FkDzPAiAVSUAp8PmWG6E9ErQHGRINksJ%2Fyn00hRmmiWJbEf2vJCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXY9rpDstMUfwnkb%2BKtwDOAmY%2BolJD0Y1%2FjtfDnT%2Fo4pWzvOWMN9a1tMJlhooiY%2FPyUHKRRaORIy5gJULfJhAewTDZzunaQYNYtE1D%2F2g5OgsQ9STEy%2FDgOLfiOLjcnYWpgB9OdAFq18N%2F7wispxvhAlGPn8mjEkJ8x5yw46RAyNrswaJUaI8MEOvEYdPU1h%2FiB6fnJI%2FZHiBUDPcggFQGNBRbmkOB0zQaNPiEgPIObQcLjkmyKz7YwcqLMyRIHTdua8m7sHK%2Fg7ALSaDxMAJXBSZ0qahbYsl6G6rSgT8iCAR%2B1IzvlaIT5Z%2BwNat7uGi4wGr4mYoJia%2BTOPuq7R7FTDTKKveShkdM4sM8nCDZG16bnD%2FSUbdEsjQGZztiM8POyRzOX2ac682kyTBKdp71g5xUAoEJVLmwYubC2lXY9A7Un%2FN8JZrKwLyPMt1OzMknLvuF%2FMfxNO8kXFC7bnDZE%2FIScWoQbdGhL%2FXxZwqvpDMHJcVuKxmRqNlqd79wlGw9kR8Wd7tfeVFfM96wDhAS3I5w5Gt8lx%2B2POSg2aFiscTkCA8gNZxcUOkL2miYxy9PrYNeoYo4o7KtkCMvvnvE%2F69swzzCBbeEOp2ld7X4oqfwoLTFwlHVP9c2s9%2FBR%2BbujtSpItRwBbDa8swi86LwwY6pgGwe6oMHTQDIiA09UPqMfH32ZfXzeh9LZRJgDMB0RWZVGPnGYgiCea3oCAH8DuOjTc1LwPE8T2cnnUvqiY%2BQYAS%2B%2Fs9uW8jc8k1Qhhr7rpJ0diwct8JNWQnq89FoVmN8ICskobbnsPJ7AGD2a6lSNwFtS3IRVI%2BTnSLM6UInYwHuL9xDiyRDJwNY%2FyLTIOJxC%2BQrbRfYN1f3eho9p7LM5IWB9dGBO4I&X-Amz-Signature=d732cd103e39ae6538f8a45ce209e706c7c937b15d380d758f6364b3daa1f267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADMDWWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BBreigFNlHDAiiTCus9zmlpdCZwVU2Gwau7z3FkDzPAiAVSUAp8PmWG6E9ErQHGRINksJ%2Fyn00hRmmiWJbEf2vJCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXY9rpDstMUfwnkb%2BKtwDOAmY%2BolJD0Y1%2FjtfDnT%2Fo4pWzvOWMN9a1tMJlhooiY%2FPyUHKRRaORIy5gJULfJhAewTDZzunaQYNYtE1D%2F2g5OgsQ9STEy%2FDgOLfiOLjcnYWpgB9OdAFq18N%2F7wispxvhAlGPn8mjEkJ8x5yw46RAyNrswaJUaI8MEOvEYdPU1h%2FiB6fnJI%2FZHiBUDPcggFQGNBRbmkOB0zQaNPiEgPIObQcLjkmyKz7YwcqLMyRIHTdua8m7sHK%2Fg7ALSaDxMAJXBSZ0qahbYsl6G6rSgT8iCAR%2B1IzvlaIT5Z%2BwNat7uGi4wGr4mYoJia%2BTOPuq7R7FTDTKKveShkdM4sM8nCDZG16bnD%2FSUbdEsjQGZztiM8POyRzOX2ac682kyTBKdp71g5xUAoEJVLmwYubC2lXY9A7Un%2FN8JZrKwLyPMt1OzMknLvuF%2FMfxNO8kXFC7bnDZE%2FIScWoQbdGhL%2FXxZwqvpDMHJcVuKxmRqNlqd79wlGw9kR8Wd7tfeVFfM96wDhAS3I5w5Gt8lx%2B2POSg2aFiscTkCA8gNZxcUOkL2miYxy9PrYNeoYo4o7KtkCMvvnvE%2F69swzzCBbeEOp2ld7X4oqfwoLTFwlHVP9c2s9%2FBR%2BbujtSpItRwBbDa8swi86LwwY6pgGwe6oMHTQDIiA09UPqMfH32ZfXzeh9LZRJgDMB0RWZVGPnGYgiCea3oCAH8DuOjTc1LwPE8T2cnnUvqiY%2BQYAS%2B%2Fs9uW8jc8k1Qhhr7rpJ0diwct8JNWQnq89FoVmN8ICskobbnsPJ7AGD2a6lSNwFtS3IRVI%2BTnSLM6UInYwHuL9xDiyRDJwNY%2FyLTIOJxC%2BQrbRfYN1f3eho9p7LM5IWB9dGBO4I&X-Amz-Signature=794a667a2e0391f5d8356167384e0ebd1f9d864b2ad8ecd15215b1eea34fef83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSESTWCF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGsaBgvjUuW096%2FsIufhdmCdN3HwKsIJLOl4wvamsJ9QIgJmE3WABj%2Bz0e09YtLGIDzrOZ5iTsHnu7pykqOtvR9UYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5BUwVyIQr5dD%2BSwCrcA39Fpt%2Br521T3jFUhq%2B3Xjwbv4LcLauKm8Xrq6HMKC1LKJvH%2FZ5E1HSCF3jOKegkjyFWfC%2BJ6ezEIRuy83xlGmtnxoKZAO5NcArsnmRQZCT%2BClmSplha165zYTCqk%2FAQuwY1vR9U27OMRU3pbr5ltG%2BcgTc2ZzhPIiDnFOM1axjB8QFIoJRP0iN6vRGpPhWGLoCUf%2BCQbKjPOZJ%2BMQBOHXxfjB1pV87cNuPAyQ7S64OEXMg0Atp5T5tW00VYQtyg%2FsgNQZsTvKV9VuO3p8nf3yIyHr60kXc7NXFv4RnFu3Kz1uAArTH7H70aNprt4TuU23Yv%2B3hnIHC5kXJzYblLaOXIehRRa9ozd1rBiVOSkTd8Jf8FSZCQ2wx4PUwqxouYXUA%2Fg23YeAvOqCDF%2FzFiHa%2F9OVgQBLkvDz9uxxs1nClmwtQiPkTZAR0EwlEy37EZfJTs8LIlUf0rzuDrc%2FTW60%2BNdu0f0vowIC1ZKP80OsmMg%2Bir8EKQyR1MsZ4uqESvLXYvwwwA9H0UOeNYquLUf3ckQbMOvX%2FrFSXGFcTL0%2F4DKLpKkvGu1wo86UbNmV8YQcc9LN97rOecy62pARDz8inG6mitInaQtCPOUc4dn%2Bj7qU7qpez%2FDKBv5x5CMPv4i8MGOqUB8gXV83j2yZAEl4Bohf41%2Fdhn7pskJuRfX8NDifdpod1EbZOgp%2BCRwQ%2FEBhXJuGzHqZKt7jmUjIbOj%2F8mjY5nFkxGXoPLAQJK2dTGx06ps9ipPF2hKkuatIriAy6HPT%2FIH2lVwr%2B0bwv3zoP9tbX0nRsqb6Uv5ngg%2Fcj%2Bi033a8PWNt8bj7MI8%2FkU3Z%2FZJpbt3eB7po9BKYxBB21U9hOdfUw%2BqoAG&X-Amz-Signature=130e463cd397328ab02b4de5c40467e2174de0314d1573720ef6c358ad421946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOOXNJ2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8Z7KFpsFGrs%2Fmajgqm5T8gWfDltRuKsHrCL5GFtQwVAiEAknCrDDHi0nPi96jv0hDAGPBJgb3OZG0rV3NoG9WMoJgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVrmkTLjbnr4XegiyrcAzsBosULA1Jkq75jacpI6hGcSF0x62QkThjwUbqjx%2FhXshEgOJ4ikNeNpbY1iUw3Qzr3yta5PlsDshUQRdudnEBSRwEpoWw48GuD%2BeoHDZQ6mRQNb7H4nv5A9lKIMyWqQ5aXM2qEZTPHYLsDVTjCeb6z%2F5vt%2BZ1meBRkCKlC%2BuBWkW%2B1TUez%2FKlBxCY%2FPtwNDMYFIjpLtdlrmH41QbaAN0Ia3quuQUwD5cN45%2B%2BwDL9yFcul10zZ5sM%2Bq0OEf7Wl01trGdmxLkQZbNcNj2lAlVq1FAC4IOVLHcbeOneJCoCdMfbQLMBtz85avtwjVseVgJ4Oo8Nhf0zffi%2F%2FXc%2FQ1e%2BCu9A1U4mjJJeRLMscHKYkPseHmxgklN8u5McDtApeSldbwqw6gGlbNC7IaWhEixdNEgQD3WfkAktIUwjO03W34Vlp%2FHlEAYnCLQUAGOFqdAWSBZr8tJruhi46u201d1yRbEVE0NMgDJQ35kjHssbF0mW6OSyii47M%2Fqf%2BTDG3qRVFISy%2BCoEdhlGEwA7%2BIqS8i%2FcbVVceXO0zjuIi%2FgeL2QXC44Dg8Kt2HKXaqS1LO0MHq3mu5H8JV0gWYsPamAj1zVssQR7QmB69V8VrWQ0iC5Td6ID2s0NaLDhWMNfOi8MGOqUBXMQIV5qs%2BwJnn%2BOThIcPfwRki%2B8RDaPn%2FqsTwlcFwnBXMmbWxOStHqArsVZ%2BPmprI4lj7rD9cJcSf%2BvLzS3MxETp0F%2BtP90YUcl%2BPafmK6td9uBfP8kK7S5D7SD5QwJav39InYOAqvi9pVLWEza57%2FBRu9ri6AXl9Yl7HHVRzDrilo7xudjTrnqqw19D1vzelfZDkhPmLtMSdTkzmud47fiQGzs5&X-Amz-Signature=03f4ee30c96b1a35ba5af210bd09af4fe746deaea3a1e0ca0d1cac2b4c25c4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADMDWWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BBreigFNlHDAiiTCus9zmlpdCZwVU2Gwau7z3FkDzPAiAVSUAp8PmWG6E9ErQHGRINksJ%2Fyn00hRmmiWJbEf2vJCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXY9rpDstMUfwnkb%2BKtwDOAmY%2BolJD0Y1%2FjtfDnT%2Fo4pWzvOWMN9a1tMJlhooiY%2FPyUHKRRaORIy5gJULfJhAewTDZzunaQYNYtE1D%2F2g5OgsQ9STEy%2FDgOLfiOLjcnYWpgB9OdAFq18N%2F7wispxvhAlGPn8mjEkJ8x5yw46RAyNrswaJUaI8MEOvEYdPU1h%2FiB6fnJI%2FZHiBUDPcggFQGNBRbmkOB0zQaNPiEgPIObQcLjkmyKz7YwcqLMyRIHTdua8m7sHK%2Fg7ALSaDxMAJXBSZ0qahbYsl6G6rSgT8iCAR%2B1IzvlaIT5Z%2BwNat7uGi4wGr4mYoJia%2BTOPuq7R7FTDTKKveShkdM4sM8nCDZG16bnD%2FSUbdEsjQGZztiM8POyRzOX2ac682kyTBKdp71g5xUAoEJVLmwYubC2lXY9A7Un%2FN8JZrKwLyPMt1OzMknLvuF%2FMfxNO8kXFC7bnDZE%2FIScWoQbdGhL%2FXxZwqvpDMHJcVuKxmRqNlqd79wlGw9kR8Wd7tfeVFfM96wDhAS3I5w5Gt8lx%2B2POSg2aFiscTkCA8gNZxcUOkL2miYxy9PrYNeoYo4o7KtkCMvvnvE%2F69swzzCBbeEOp2ld7X4oqfwoLTFwlHVP9c2s9%2FBR%2BbujtSpItRwBbDa8swi86LwwY6pgGwe6oMHTQDIiA09UPqMfH32ZfXzeh9LZRJgDMB0RWZVGPnGYgiCea3oCAH8DuOjTc1LwPE8T2cnnUvqiY%2BQYAS%2B%2Fs9uW8jc8k1Qhhr7rpJ0diwct8JNWQnq89FoVmN8ICskobbnsPJ7AGD2a6lSNwFtS3IRVI%2BTnSLM6UInYwHuL9xDiyRDJwNY%2FyLTIOJxC%2BQrbRfYN1f3eho9p7LM5IWB9dGBO4I&X-Amz-Signature=81776176d711c1d80370dda839fac46e8b4ae6bfa7f342ab6639382d714bb482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
