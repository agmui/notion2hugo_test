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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWLKX34%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID3GqSW2DcGZgkRbi7SJSbqU88av54Nhl2i3u6AusIFVAiEAovk7NPG9PYB%2B9OkQSdLFykfjtZouj4XvJ4CkFKaY0TkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIp476JuTKTrRnUiyrcAwneNyKZ0qu0UHagb2U2p9wmA2sqUK5tnlYmsXyMP5pPtIJ1putlyORLBJUyY0pV1JdiibevYWxc02JQskCnqmZq9517kElN6plFidYbXQPiOK%2FHcU4PANb1s3zA0Y2zndrS7%2F7h9G6tJxFgufbtQMmPW7TNI1pep5nZlR2vF%2FsRnHBTvROzWb4WP%2FJno840HvUJc4pqXieSY89gwzwMSugsWWz7QIgfX75%2B3jF9DTC9j1PLVgmViNNcXDUCDoN4V9HALfZ2Yln22wZDlYIPpbBiM%2B3nsNm%2BR56%2FAvl5LGi2fhHbGINru%2Fs1TRVF04H%2BN8UOTJI%2Bt%2B8%2BoqDB3gKe6rBUtD3GqCeJrNXK%2F3uL4XXYjJfnUbp5UTPYQkA36gun%2BghlBJLLqJh8nQjH%2FzdiSosi86Plnt3S99pMcuhFudNiTz%2FvAttT2GV9qCL%2FLAyID5cv4Im2Moya5BsERqGbqc9XfgxNqhiw6rSDwEDqvox2Ec5x7NOi64QMADipG8a9E%2FE6Th0RJQnvVai54%2BND9oYu4mrpv9clhumzqL46AAJUAenKM4QsY6wRKS48fjaFQAnSnSgQ6c2vcYHturGAtIeNZ1O0UcOTfAgDadYOb0363G21crMW%2FS%2FllslDMO7b0b0GOqUBZxOvbFKJBUdYHpJcfMFlG%2FuMaWL6nWvVrNbfIZiYKhiJdHn1mrdxTbvS%2BydyLQf%2BzBvtS3du2Pia522szqAo0v6THteiqXQEcvgKRXMJ5JMFRsVzDuUyWZZQI8hl5onjySmKPH7jCu21EapKRC%2BoTx32llSlTK3CLCpSIp9aUN5FbrXZlo7BXKZwPH6WNcPi5%2FGuAitgdlOY45TQJWWUK5Cr%2FLOi&X-Amz-Signature=4ae05548bea71d636839ab8d39b218ea4d645d7366b24a015a2ed5f4e5f86084&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWLKX34%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID3GqSW2DcGZgkRbi7SJSbqU88av54Nhl2i3u6AusIFVAiEAovk7NPG9PYB%2B9OkQSdLFykfjtZouj4XvJ4CkFKaY0TkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIp476JuTKTrRnUiyrcAwneNyKZ0qu0UHagb2U2p9wmA2sqUK5tnlYmsXyMP5pPtIJ1putlyORLBJUyY0pV1JdiibevYWxc02JQskCnqmZq9517kElN6plFidYbXQPiOK%2FHcU4PANb1s3zA0Y2zndrS7%2F7h9G6tJxFgufbtQMmPW7TNI1pep5nZlR2vF%2FsRnHBTvROzWb4WP%2FJno840HvUJc4pqXieSY89gwzwMSugsWWz7QIgfX75%2B3jF9DTC9j1PLVgmViNNcXDUCDoN4V9HALfZ2Yln22wZDlYIPpbBiM%2B3nsNm%2BR56%2FAvl5LGi2fhHbGINru%2Fs1TRVF04H%2BN8UOTJI%2Bt%2B8%2BoqDB3gKe6rBUtD3GqCeJrNXK%2F3uL4XXYjJfnUbp5UTPYQkA36gun%2BghlBJLLqJh8nQjH%2FzdiSosi86Plnt3S99pMcuhFudNiTz%2FvAttT2GV9qCL%2FLAyID5cv4Im2Moya5BsERqGbqc9XfgxNqhiw6rSDwEDqvox2Ec5x7NOi64QMADipG8a9E%2FE6Th0RJQnvVai54%2BND9oYu4mrpv9clhumzqL46AAJUAenKM4QsY6wRKS48fjaFQAnSnSgQ6c2vcYHturGAtIeNZ1O0UcOTfAgDadYOb0363G21crMW%2FS%2FllslDMO7b0b0GOqUBZxOvbFKJBUdYHpJcfMFlG%2FuMaWL6nWvVrNbfIZiYKhiJdHn1mrdxTbvS%2BydyLQf%2BzBvtS3du2Pia522szqAo0v6THteiqXQEcvgKRXMJ5JMFRsVzDuUyWZZQI8hl5onjySmKPH7jCu21EapKRC%2BoTx32llSlTK3CLCpSIp9aUN5FbrXZlo7BXKZwPH6WNcPi5%2FGuAitgdlOY45TQJWWUK5Cr%2FLOi&X-Amz-Signature=ed3317fe1868baf395bf94645fb4e3aa06081dff94aeadd7d10e87ea00793148&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQC4CJ2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICNf1VPLuA5U0njjNvfJjf61M1xjzY9m5CJs7B6IZsV9AiA4HxH0t7c0kr18cv84BQH6sw3SJgxQS5I4vdno0G2cmyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uW%2B62nEoC522x%2FcKtwDjlDdmLk%2BwAnVun2BbbMfT1gjc8QI0YwdbHbs0GWpYAI7AzfBo27ILSoxLrTN3C2z5yQHXmDGZfPoLAXNGgJbYVP9ZU2v069lxyCehxAp%2F9D1xwXj1%2Bj0jugd3ZRpg2yIzNDpGzAWg%2Byk9KNdoRy1BvDKGp0jauXWKTNwrceNkDWDMFX44SFnYxLKy9yyjzZyIEhHNYdoAK2NvzeJ8SNusaotxfPRGNp5JLZX9pfdPSB2IsFavzyOIq2x6fmaZO9yGM3cp%2BtkdwCEkysoanvKjKU1cCvh4HBsnG5xnPlgW1bxs0OgGM76oVdwxBEIL0aO%2Bm5J7sXHAVNGJWFBh0pFXkmxvJ6UlqtwbxBfiuIb0%2FTcm0SLO8tuGhDMIWeLbXJUGLhHiYYCb%2BLafl77SC62AAgltrCO0FZp6xu7ERRpmfLJuVzkVNPggPU0velOSFzzS1OdGvfreHN1smfvt84S6tuFK%2FVqmRZ2d1yEQ%2BbRZ6qjqTAY1e4gdLu5HZYOr9qlqxRYvCckSOi6RYCKQVqnLzKcjM8UvO0rv2swHrJ1eAgnVz2DYL7DLUIYKG9IWiDVpreY%2FJ4RvYhliyW47UA9j8XjRhIwkMmMWzKtqYGFHIfLpbUUMtyEjcqumlQw5tvRvQY6pgFN%2F55vWwBS2MyaZAlYNpBeJ8rxSzJVbk%2FGlMLIVurcx3MWKjC2PIzg8PcjWphlkQJCN5Hq0r03zOF9WYZbOPMN1lX9RGh2hMU0rj628MQKnelDpiK7hnLp2P3%2Fw%2BUSWcZKT7F1VJwrdo2Fv%2BmGmDf%2F3BY9hU%2F6beddDzrylBDe88D5oUtiDzKxhhXl9fu31sXInI%2B0W4IdNWFn8llnqR4Wzayke7Ev&X-Amz-Signature=cf7421ec1305f8d9897fdce40207ee3a266520723d02553b82dee9e21de2b9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS45NFC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQClFvFk1FFm53cNZesAH5VZOcEAIeTjNRunk%2BVH0id7kQIgcRuCLRWRt5Qe4%2FGfl1y98%2Bwhi9dNLgcN9qXphPiIzOIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGysCzD2kfBoUwcsdyrcAyKmghGCGvj%2BSwmLLT06d0vOxmo%2Fk4xn4%2B428d4gFTMGsotogLxutJw4o3OHjiko08mbEvXPYkmVFMOop1JLbKwPJMRSBoqlQiJs43w8Zrrn3bTLYKpGL%2F6TDj1VJ2oCuVpFiOU7PSHsZL4g4W3FLGGIyOuVlxhaeOXLfpz3222V%2FJnlgRS%2FrNL2CIiiKCrohOkV3m2%2FkEHJt%2B%2B7dHoAV9NNIlDFcYInMPCYE08VNJgHMtkYQRQoDZHo4bMv%2FZrtsYtrCR%2BAamjK0AUEubzXF2Wy2OUaoafjs3CogpmKwcRaQl6W5EvGnV0HwvIfOEwHQ1DeSwie5vC%2BIlYI60BGwq%2BZgPh71z9jdqiKw8KJhjCfRenZIE1LLCZvcQl%2F5%2FZQV8m3T2UEobvy6Yg6m9kloTx4pILphW%2F2D6tTyZrhIocdTLbrOzo70dXSb%2Fn2jjh46D25RcQAQ8zzc8G8sRTf6qvr6LSf3nBECb1%2FCPxIWFO5EOcsrd%2BSIZIf3lvpXjnSEW%2Fh3BTpF3VEGUL5rKy6f2DGcsvAI4ttElcqa%2F1Uuxvb0vQRNKR2brFY3sWDgdJc9UY7i2lAhk1QVoEDyV%2FkskhH%2BHNwdhVQUQPqcBOqRFo9TIXCDi8ACSdFr9j0MLLb0b0GOqUB9IbA00%2B%2BwKhc08q5YrXVDjmr%2BhCstSGLF0zaL%2B4CHzINkfxaDLkiiMJEyhbwI4yfIWy3olaBw2Oe3d%2BWTY5%2FNckykACJtlgwYmUYV6j0rz1mfq9%2FJ%2ByHNe2AQ%2BnGaphT9SUaZBeo7E4qNynkT1bMRHchy67Qq6efAIQxsCV9AdAMNA7rTS639QZO04gYCeIlLcrM7f81F0TSHIGjK4hmLnnG4X12&X-Amz-Signature=d6fde53b2fffedc3819b7f60b73583db448ddf7fff93cd6fb462a68f06421920&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWLKX34%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID3GqSW2DcGZgkRbi7SJSbqU88av54Nhl2i3u6AusIFVAiEAovk7NPG9PYB%2B9OkQSdLFykfjtZouj4XvJ4CkFKaY0TkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIp476JuTKTrRnUiyrcAwneNyKZ0qu0UHagb2U2p9wmA2sqUK5tnlYmsXyMP5pPtIJ1putlyORLBJUyY0pV1JdiibevYWxc02JQskCnqmZq9517kElN6plFidYbXQPiOK%2FHcU4PANb1s3zA0Y2zndrS7%2F7h9G6tJxFgufbtQMmPW7TNI1pep5nZlR2vF%2FsRnHBTvROzWb4WP%2FJno840HvUJc4pqXieSY89gwzwMSugsWWz7QIgfX75%2B3jF9DTC9j1PLVgmViNNcXDUCDoN4V9HALfZ2Yln22wZDlYIPpbBiM%2B3nsNm%2BR56%2FAvl5LGi2fhHbGINru%2Fs1TRVF04H%2BN8UOTJI%2Bt%2B8%2BoqDB3gKe6rBUtD3GqCeJrNXK%2F3uL4XXYjJfnUbp5UTPYQkA36gun%2BghlBJLLqJh8nQjH%2FzdiSosi86Plnt3S99pMcuhFudNiTz%2FvAttT2GV9qCL%2FLAyID5cv4Im2Moya5BsERqGbqc9XfgxNqhiw6rSDwEDqvox2Ec5x7NOi64QMADipG8a9E%2FE6Th0RJQnvVai54%2BND9oYu4mrpv9clhumzqL46AAJUAenKM4QsY6wRKS48fjaFQAnSnSgQ6c2vcYHturGAtIeNZ1O0UcOTfAgDadYOb0363G21crMW%2FS%2FllslDMO7b0b0GOqUBZxOvbFKJBUdYHpJcfMFlG%2FuMaWL6nWvVrNbfIZiYKhiJdHn1mrdxTbvS%2BydyLQf%2BzBvtS3du2Pia522szqAo0v6THteiqXQEcvgKRXMJ5JMFRsVzDuUyWZZQI8hl5onjySmKPH7jCu21EapKRC%2BoTx32llSlTK3CLCpSIp9aUN5FbrXZlo7BXKZwPH6WNcPi5%2FGuAitgdlOY45TQJWWUK5Cr%2FLOi&X-Amz-Signature=6411872812aac32d8ac5467b3e746a2c1c24eca408e7465e6d3e1066819eaf92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
