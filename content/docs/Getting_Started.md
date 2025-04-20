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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=484b1367f881468e34b3bf828f601dab03599ed5eba05c3fa420da44b659ec88&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=8c74cdd92ed8e5654b2b55ceef3c4e53cfa21120e901427a08d9972f0128fa60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKZAPT7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHXb3eybDGA7WsioAlJVDeFWGBHUVcOV5T1cZ%2B16YrvyAiEAh8dTJ0EUdBa%2BiteWcRRqDIK8cReJ53Bhg14y4G4ucggqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvTid3Bfhd3CSnT0SrcA2QBrPi6UJ14IM8Bc8r0usxUVf4U2GsXgsCgAU%2Bna1HCfuH6IivwUoPBI4WyoGe7Ff2R4OUg%2F0DsW3TPWqh2A4JQpnomNmtUcyj2popNE6CUcyINeL1j9TlmrgKWhaLCVAOc7FYcRumDoUVintqwbGovc1g6aAuz4PvIaHMeSaYS2ocf5F1kmccf%2BPzTwoiZ%2FkkaQK3qAWKuhm9dzMYSzJchkXPc5JH2kH%2FBuXuHh3pUvcPbaSVo%2B7WGFdQq6m7WWLyxw3sGSuNloT%2FJgSWTkmiNno8ixHCIpza3u%2BmJqxDRO3bQcS2J%2BJXQheil5Ujpu4%2BdKkOfRGvJl%2FBLNkMHm%2BURmI8oeXtav2FKnso2laz0HGQz6ML3ycKhQqfJIbhgtHFhpS9P6Q3gV9WqZNbP%2B9x6m%2F0VJ1Bzt63huo10OcfvPw%2FHlbb2%2FLzKqeBirSmij1btp4V68bbXNgo0ldjHPnOq4W61q8IIJ9bLXwgO9TkZrNAOOzqwYpUPDkCGDWZK6qERi5UwNTBAGTIXdgAG86niVkXhbIOIXOQQ5iQ4GX5ir4xb%2Fy6hIu69OzF6GKIj5fcJ9nrrT%2F99%2B8RBdcAZstW9WbPDDvC1hp3sHfL7ylvn2K6nFH4G6Dr%2B24%2BiMLKkksAGOqUBWBL%2BL4DW2IM1vI2Kyr%2BYXt8V%2FVMv60ilodEkmWmr7XsXsYZDHUFLbeYt70Dh10o1rJ3V8MnLFNcLMkYBgDgN4VC2j6EjBEbYZ3%2BYvs4XLpSjUgJ3Qa%2FTPNJx0g1YZOZBiIbTICewD6zQKZluYOYnKlEScOC2mdWLihUzFrfmTUQamPXkTHMPOCM3Y2qXBObcUM4itVE0auUx8XsTCbffPVVsXvoh&X-Amz-Signature=9573ccd197ea073e8fe4acb4d44a8b3e230e3da14182aa87025b7657a7552fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDTQNAF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDh%2FIA3tzPi9ck5OfRnh%2Fd%2FlcE5s81WTv7%2Bcge9Eoc1kAIgA0ztsWbM%2B%2Fhnnmk92FcGMOnjB8%2BEAA%2FJfG8lu5v4mIQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2FriG7EYmiVxTb7ircA6v0Wota4aw4z0LlbLL4JhchVwz37MWTgTPKM6JN5l%2B90mCuykXNBOg%2B8nafhjizV%2BkLHxTfdu4e0gIHWYqFnFw65VaCIRHcLLJYhqYb2j96JwtLaokRKmtm7kxdNcMP4%2BT3UTF03aLzmZa6Yex22QJ6eOdolvO9fQoypFBfClcxynzpy8D1DK2HuYZhuO6MAwVjVW8PWGQDrMvh8S983qRXxogf9Hq%2BAiW35d3Q20AufNb6UAMXT%2FHBDB1gTG2Nag7q%2FmxO1XxUgxlgIeVJiY0n5K84VjMhNY38iZlUGfdYFDENSfowvXVaqOnwq%2Bqok24ansreOQHRyGR7QE3ezHDbqFdmdwYK5aWnId4HkQID1rFH3jcCVQ2rC%2BFb0qEy%2F7wOsY%2BypfMjKZBEj%2FYBOOd6hZW8QXBfDDIiuIwXPuu%2FljPLJwEEGB8F8rNCtE9hJnSoVfIywkLQw33kCe4FdETOF21B3lZ%2BDqzCCJikDQMhMZ0%2BBjvRKPEJ3TeQPqQ%2FDO3mVL4p1G4M0msj5QcOr6zGuSRMOaP454bIUd%2BXT%2FSuP6Oiii%2F5uCFQB2WxccEhUunsAbDaUULKfzDJhoAwy4yv82vIviyels3X4t%2FIy9wpJKqpk5L%2FYI8oucj%2FMICQk8AGOqUBNXAAfZZOZFnc7yO%2BifJOhSDlVim6BlMX%2BqIrvteLTm96N%2BtSy3itdQptRova89d1xlBHnrbSWng0aqfsfZe5wF1llt9%2FZkRfCVjsbe3W3jcP0HeUU6SQoS1aGicLd924sSHZzTBfJYoEhGMM%2B5T7VIZNSBJy4Qc44fx9szu5Is3UenUizZSOm3JXzFvij%2BYs7%2FKTSJJil9FGy0xDqlIVuCYTziY%2B&X-Amz-Signature=2a87fcdd289d3e81eb02ef36bf9e2beecc2607854fa6c2e4b94e69c7262e2f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=2c284938524ab35783530fd99a8b34b6044fdb1b609f060ebc3fa6fe1bae43ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
