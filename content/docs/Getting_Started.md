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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATXPATR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ4eT1v4lROV81yJWEME%2FCXuYIm8pwEhY5IWZ7LzpFtAiAO6Yd3Yv52vHH4zqirnjqGziyZ6eS25mVC4GSfUFKIASqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQ0vXRjvDaLx7jfeKtwD8%2Bmap4tPpRYXtuv60LCGjjoF4rt%2Fkg9Q92rwOHJx3PzAyLXYyMdojib2q3WA82ajqfvzCgZj31Ir0Y4Qqrj87uF%2BG%2Ba5LKEH5AgJj%2BMmvM%2BbDVm750fZBHGO0kKrZb4hizIHok99UH8Lnb9eatp%2BWLeWYoSQZu%2FP1wuU9mx%2FHVOZsUFDlqH1iw77bt3TT7Oi6LDI4%2Bhl9See3hfiFP5SJ%2B%2BrSiDXoEU0fNKSQRDI7pgGkWP5lGl5jy79UJLV%2FxmF6bGxq5MErHLY6afnHg5B2B3P1IFeABo4SfHYjrVtXSZE%2B%2FgqFrtb7dR13jsco2BoKai%2B3HsrdNAw1zmDMtTWk42clzx4VPE9TvEapAX0A8pqlfpBr8azQntaAEcVtx8k07IncW9MO%2FIvKNSgr5xIEJTpYYYbN%2BxL8fLNrDh3hKwGuDv2LRsw4zSoZ%2BzjTb0sGK64WqKswEbIHjq5Wc3G2inyFMUla9jPvi9VNN0AAZJiiDM4fis7jbAibXQxwAQz3ZOTH20Jp0q%2BJPDzkXh2GBaEC3U2LnJcEClrU2tyeRcQx8JmMNQTpVLVA6KldvND9Lau9qnyEK7K5O7ZI9SRuNmDgBMzW%2BfSRCM5ftPbs%2Fhg%2FJfOnYY41pfTmr4wt8iuvQY6pgEA7MDVFkYUSNjNeNepkw9H%2BFe8WaM4sbbY3cT6cLMLW7%2Bew9vlok9LPa8rcSQOZ5V5bLoGH5rAqbuKBK7eWeE9DsU%2Be%2FjBnZxhtB2GP8OB88TFwJ8u9SnnhAY%2FvAGsVnSI7XBvBzGrlRUMGxCtrftiIDtzcsZ86usgp%2F6dzuO0avK%2BELVmndT%2BU04cO0VqaCCUQ4YbMDZ7V4%2FhklYcOlsOc5gzRPBb&X-Amz-Signature=1f4c7450e5e3ad24460ec4f7d62b9cada98e613935d1f033bb3742df2c273bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATXPATR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ4eT1v4lROV81yJWEME%2FCXuYIm8pwEhY5IWZ7LzpFtAiAO6Yd3Yv52vHH4zqirnjqGziyZ6eS25mVC4GSfUFKIASqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQ0vXRjvDaLx7jfeKtwD8%2Bmap4tPpRYXtuv60LCGjjoF4rt%2Fkg9Q92rwOHJx3PzAyLXYyMdojib2q3WA82ajqfvzCgZj31Ir0Y4Qqrj87uF%2BG%2Ba5LKEH5AgJj%2BMmvM%2BbDVm750fZBHGO0kKrZb4hizIHok99UH8Lnb9eatp%2BWLeWYoSQZu%2FP1wuU9mx%2FHVOZsUFDlqH1iw77bt3TT7Oi6LDI4%2Bhl9See3hfiFP5SJ%2B%2BrSiDXoEU0fNKSQRDI7pgGkWP5lGl5jy79UJLV%2FxmF6bGxq5MErHLY6afnHg5B2B3P1IFeABo4SfHYjrVtXSZE%2B%2FgqFrtb7dR13jsco2BoKai%2B3HsrdNAw1zmDMtTWk42clzx4VPE9TvEapAX0A8pqlfpBr8azQntaAEcVtx8k07IncW9MO%2FIvKNSgr5xIEJTpYYYbN%2BxL8fLNrDh3hKwGuDv2LRsw4zSoZ%2BzjTb0sGK64WqKswEbIHjq5Wc3G2inyFMUla9jPvi9VNN0AAZJiiDM4fis7jbAibXQxwAQz3ZOTH20Jp0q%2BJPDzkXh2GBaEC3U2LnJcEClrU2tyeRcQx8JmMNQTpVLVA6KldvND9Lau9qnyEK7K5O7ZI9SRuNmDgBMzW%2BfSRCM5ftPbs%2Fhg%2FJfOnYY41pfTmr4wt8iuvQY6pgEA7MDVFkYUSNjNeNepkw9H%2BFe8WaM4sbbY3cT6cLMLW7%2Bew9vlok9LPa8rcSQOZ5V5bLoGH5rAqbuKBK7eWeE9DsU%2Be%2FjBnZxhtB2GP8OB88TFwJ8u9SnnhAY%2FvAGsVnSI7XBvBzGrlRUMGxCtrftiIDtzcsZ86usgp%2F6dzuO0avK%2BELVmndT%2BU04cO0VqaCCUQ4YbMDZ7V4%2FhklYcOlsOc5gzRPBb&X-Amz-Signature=3d7c682e301ad6773a0dce2a24681b773182080f4c57d604190922051703a6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNXPFHE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHbrpxb5UaaAsbi3zzEp2LtbdZyagUlnfGPgxe6OMteAIhALOk3l%2FUxg7fhFdsSVCwuhkR%2FiBhvmLbVzhJosCk0nKXKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmgmwj92Ur%2FzigVQoq3APAX%2FddjSBHjbHbeg0pMkJU2xkfmjreM1GAsNKW5lCPQ8%2BObSwDtejeMG3h9KJjqmzMbSauMsXyfpV3XUgfxwsinsCF%2F2P4IkZpPqoU9votpD5jz7iKKSvBuW4otdps5f9yAzOcoTwJgUAwxgNVEDg%2FSmqJVOhp7yXgnSEyTRAdEGynlGliLOoQuFKX4qhaqEyZqDTgQGFS8BzRKStOurZWEBRnxJl4%2FSbHB6bqVHo6miRgPxVPrQbX1HAqoXZMtnKiv5lqBTNW0kNstonABYtvyozOj2XI0WvvgBZ2Cf%2FTKTL1Svg5DQeI9VXc8tOiYueAfX14mvPEckZrurG2f6QrET%2F85cpI7rEhPApy7IwBpSAEqYmMfuJ1TYRR0gMyIYYzWDLpSv3rPCGnabJqO0dLTn%2BmqroaA%2FI47PlpI8v7t%2BVsl67NKJ9L9IyWZ4DmjXMKI6XxXtpbbFfdhBYoiDSFQ4cRxhsDKy3npWimZb5OyZ0pngGbLbKSIENQM7jmxDTJVSLmyx11Akx4ga7WyaSNGvQEyKVV9JHKZsc86lzTZgGP3rCuejvBNSXayPG5ZGiqdUmxeBvHMV%2BS%2FKFM2TmKs1Nw49vjf8jT9L9Frymp4AzrzYq3guTVvqmzSjDXyK69BjqkAZDdDT%2FJ2%2F9ujAYJYl58HLU%2FyquHTT3dJgVRoji6iNvHkIAjLQrfuaOxG%2BIy4s%2Bt3RdH4kSdxArdlkN11a8hb%2FXgwIBmh5LoTK8DZboDM4qnYofVi1Ne1dVJEJi%2Bll2jFNp8EYKxSntG4jC8YDnWqJVo%2B3bgdlxMdvcK4NvreRuUWnHotASJRiBqlfN6mHjPEPbfkPWiduKriW6c%2BqhLKEm7ZF%2FO&X-Amz-Signature=2880e9dfa0687c1e3cf275dd99913e59302ad575e77d6f139af531ec9f292978&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKMSKII%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9vNvny5s3RA7X8Y0Gl%2Fk0B35AFYMte%2BoVZ2PGHlV9kQIhAK8IyHD8iHZc5O4d8%2B1vl82hn5gGeBEkklTUkah9TmN1KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG4%2BGzzfeZ7oRmsT8q3APqRDn1WNOlXH%2FQa1mz0VZpLEg11KrKWmh50yNdkkgtQfUH2MqRGCMTi5DWrDj74XR5O3drYZWHuTJK3UhwW8jPXCKKOHir6z8QLSKzv0o%2FwmRajRTdUWPiOqtWLs77F14r%2FHQ0w9wfuuaedWKM1Gi6Ct1WOybGWuTCU3VdeJcu9OPLwOmzsvpSe1bimQF3YomPgZhuFApLFGg6H8PUbNFv4PLP1xxyz62XvBGXuk17JblhesgiHi6JwzhQ3DpRl9DyO7Of1DPPyvzaSNgpLI1sg6i5sQYYMqVuI1WmaYHGs84n2H4p%2Blbs%2FwvV%2B3hwvCpmfNFZlqaFu0loDFxjid34P1sACnU%2FdBfz203Fg6BHkW0nkGxAUt3xQitSuz%2Fb1Ou8yUInTGzJ9AuAqsnBIZGH1wNrR9ONMNoaVIo9GddT5fhv4C2x4KZbHu4JTFdmsenbC7iuBwhkNvvpIYrpYQa01F%2B%2BgVooqFqOuSUVaTz%2FLtxMa3KNowKOhBWZ56C%2F%2FO2X3R789l3NcYdv%2FKLEH1jKE3qqN407cm8Pz7mMaQZ1JCiCfC3Byn7X5f2w%2FT47Abq1xWuImj1LTp8FtJyGnXmTsnqkr%2F9qhicWi%2Fl3qGOhV4eSbsHJz3oL0C0myjDjyK69BjqkAb9hPQwF2DzPSMrCH9r8JQGJkI8VwwgDq7qbxOObBGlSyUET0XXlDkflNCSa2e45pmKdmlsNp97UVfQh%2BPluyXsM6F0Cw9v7WT1SK0KVfPEnvEuoTkE2SMC4WWeIY97SilBPSg3%2F8Nwyuv48KIkWXjbk4jj6ydm1jyc8mxzVUdDOIfJPPlwKG4aAIMGtV%2FtboK1%2F5CPRE5nA94hz2GODTBbl0A5R&X-Amz-Signature=1cc0f43f5b4b55fc2ff180f29356ce51b6c2f0bb9dc5f37a50378860fef7f5ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATXPATR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ4eT1v4lROV81yJWEME%2FCXuYIm8pwEhY5IWZ7LzpFtAiAO6Yd3Yv52vHH4zqirnjqGziyZ6eS25mVC4GSfUFKIASqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQ0vXRjvDaLx7jfeKtwD8%2Bmap4tPpRYXtuv60LCGjjoF4rt%2Fkg9Q92rwOHJx3PzAyLXYyMdojib2q3WA82ajqfvzCgZj31Ir0Y4Qqrj87uF%2BG%2Ba5LKEH5AgJj%2BMmvM%2BbDVm750fZBHGO0kKrZb4hizIHok99UH8Lnb9eatp%2BWLeWYoSQZu%2FP1wuU9mx%2FHVOZsUFDlqH1iw77bt3TT7Oi6LDI4%2Bhl9See3hfiFP5SJ%2B%2BrSiDXoEU0fNKSQRDI7pgGkWP5lGl5jy79UJLV%2FxmF6bGxq5MErHLY6afnHg5B2B3P1IFeABo4SfHYjrVtXSZE%2B%2FgqFrtb7dR13jsco2BoKai%2B3HsrdNAw1zmDMtTWk42clzx4VPE9TvEapAX0A8pqlfpBr8azQntaAEcVtx8k07IncW9MO%2FIvKNSgr5xIEJTpYYYbN%2BxL8fLNrDh3hKwGuDv2LRsw4zSoZ%2BzjTb0sGK64WqKswEbIHjq5Wc3G2inyFMUla9jPvi9VNN0AAZJiiDM4fis7jbAibXQxwAQz3ZOTH20Jp0q%2BJPDzkXh2GBaEC3U2LnJcEClrU2tyeRcQx8JmMNQTpVLVA6KldvND9Lau9qnyEK7K5O7ZI9SRuNmDgBMzW%2BfSRCM5ftPbs%2Fhg%2FJfOnYY41pfTmr4wt8iuvQY6pgEA7MDVFkYUSNjNeNepkw9H%2BFe8WaM4sbbY3cT6cLMLW7%2Bew9vlok9LPa8rcSQOZ5V5bLoGH5rAqbuKBK7eWeE9DsU%2Be%2FjBnZxhtB2GP8OB88TFwJ8u9SnnhAY%2FvAGsVnSI7XBvBzGrlRUMGxCtrftiIDtzcsZ86usgp%2F6dzuO0avK%2BELVmndT%2BU04cO0VqaCCUQ4YbMDZ7V4%2FhklYcOlsOc5gzRPBb&X-Amz-Signature=aa9b2163b28b78d58df719c499c654480756cbde099ddbe208b2022089806cda&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
