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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAYFSTC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFLvSedaz%2BVDCH01hfHRnbLYiyVpBChHO2tDNtTH6AVoAiEAsBjwlhbLp5kZ3ZYkKtBahPQADXaKfV2mLxFJACXPAYIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJNJ5xdIbcSPolLXyrcAyrlHpxmv60nJMKp%2FTxQQge06ITQg2i3vhTG7CFqKsInHbgCF6G95x2DcCRdRt%2F%2Fyr%2BEtazRz0vPMzLZY4Ae5Qb6NGinTPETj%2FYT7HWV3rZi%2FtATAVQpaX6O%2Bzf%2FsVTdGp%2FY%2B3iwJyaw4HY0guxRXXYKLp4A6u%2B2bmh%2BBncbSpoLuoFP1D4hVcKKDA%2F2Qz%2B4mZkSY56bHJvNtVVjSrXFbLYNxdBULNcEyoy5LU9K235scFMufmwDBMUf%2FaxUYHZsuBbXMv1wg4UWLlmJ3140EoOsRyZlGCcrfJ7fmZgzyeDuPI5S%2F%2BW5DjFjwibJ08WiSgD2mdVbN%2BuWoCqsZ3aeOU3zfBxctnsx2oOMEmdl0%2B8QvFO2cPGE5UCodEw8D5qLp7uC7VPdLLBmY3O4pFJqCjXSew1NVyj%2FyE0hywWnpzbkBFMXwGzERc%2Bz833IeExnI1omjf0tm2jQhxofG2pGup%2F7ohAf%2BRnOOYi4myX57%2FhOz68zUAHYnx%2F%2FgcMJgPQ0mA%2BDRY2yRj8OaF7QORtuSyqA4Sdbe9wd2qdYdTkAOBEq%2BwOs3do%2BQPtgsOEJ9S%2BodRTp0M2LyFFFFd%2Fekv3PKvKkSkW1WUX6Wli9UmvSv%2BNJnUvj1vmSf2LKYqMTML6GucEGOqUBEChCRTzg7p7QttFgLypOPnnPbr0QWbZ1ctFd3FIf%2Br%2Bmqd8VD%2FTjmeO5Go66eqb%2BFAZNoBBi2bwHYqEcDgRr6jw3HyUB8%2BqedmnmJu030E9TnvxHRFuxM%2F41%2FPTO6VeVZRMUhiTHok6dPRgw7WC0t4gsVsmiKQc%2Bn5vFujCUjwI5YKcHEekQW7vSfQ0Nn4j2lBRsatIm67QJgc2aAhPnWgpyBZgG&X-Amz-Signature=2430607fc1052557469c2f21b332ef1d9eb7d6adbfdf60851cf5cc0de1ca3c54&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAYFSTC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFLvSedaz%2BVDCH01hfHRnbLYiyVpBChHO2tDNtTH6AVoAiEAsBjwlhbLp5kZ3ZYkKtBahPQADXaKfV2mLxFJACXPAYIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJNJ5xdIbcSPolLXyrcAyrlHpxmv60nJMKp%2FTxQQge06ITQg2i3vhTG7CFqKsInHbgCF6G95x2DcCRdRt%2F%2Fyr%2BEtazRz0vPMzLZY4Ae5Qb6NGinTPETj%2FYT7HWV3rZi%2FtATAVQpaX6O%2Bzf%2FsVTdGp%2FY%2B3iwJyaw4HY0guxRXXYKLp4A6u%2B2bmh%2BBncbSpoLuoFP1D4hVcKKDA%2F2Qz%2B4mZkSY56bHJvNtVVjSrXFbLYNxdBULNcEyoy5LU9K235scFMufmwDBMUf%2FaxUYHZsuBbXMv1wg4UWLlmJ3140EoOsRyZlGCcrfJ7fmZgzyeDuPI5S%2F%2BW5DjFjwibJ08WiSgD2mdVbN%2BuWoCqsZ3aeOU3zfBxctnsx2oOMEmdl0%2B8QvFO2cPGE5UCodEw8D5qLp7uC7VPdLLBmY3O4pFJqCjXSew1NVyj%2FyE0hywWnpzbkBFMXwGzERc%2Bz833IeExnI1omjf0tm2jQhxofG2pGup%2F7ohAf%2BRnOOYi4myX57%2FhOz68zUAHYnx%2F%2FgcMJgPQ0mA%2BDRY2yRj8OaF7QORtuSyqA4Sdbe9wd2qdYdTkAOBEq%2BwOs3do%2BQPtgsOEJ9S%2BodRTp0M2LyFFFFd%2Fekv3PKvKkSkW1WUX6Wli9UmvSv%2BNJnUvj1vmSf2LKYqMTML6GucEGOqUBEChCRTzg7p7QttFgLypOPnnPbr0QWbZ1ctFd3FIf%2Br%2Bmqd8VD%2FTjmeO5Go66eqb%2BFAZNoBBi2bwHYqEcDgRr6jw3HyUB8%2BqedmnmJu030E9TnvxHRFuxM%2F41%2FPTO6VeVZRMUhiTHok6dPRgw7WC0t4gsVsmiKQc%2Bn5vFujCUjwI5YKcHEekQW7vSfQ0Nn4j2lBRsatIm67QJgc2aAhPnWgpyBZgG&X-Amz-Signature=ca52ea44ba41b7810a807bee5a74da6901eb1bc38f983fe553628d7eb5b3cbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAYFSTC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFLvSedaz%2BVDCH01hfHRnbLYiyVpBChHO2tDNtTH6AVoAiEAsBjwlhbLp5kZ3ZYkKtBahPQADXaKfV2mLxFJACXPAYIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJNJ5xdIbcSPolLXyrcAyrlHpxmv60nJMKp%2FTxQQge06ITQg2i3vhTG7CFqKsInHbgCF6G95x2DcCRdRt%2F%2Fyr%2BEtazRz0vPMzLZY4Ae5Qb6NGinTPETj%2FYT7HWV3rZi%2FtATAVQpaX6O%2Bzf%2FsVTdGp%2FY%2B3iwJyaw4HY0guxRXXYKLp4A6u%2B2bmh%2BBncbSpoLuoFP1D4hVcKKDA%2F2Qz%2B4mZkSY56bHJvNtVVjSrXFbLYNxdBULNcEyoy5LU9K235scFMufmwDBMUf%2FaxUYHZsuBbXMv1wg4UWLlmJ3140EoOsRyZlGCcrfJ7fmZgzyeDuPI5S%2F%2BW5DjFjwibJ08WiSgD2mdVbN%2BuWoCqsZ3aeOU3zfBxctnsx2oOMEmdl0%2B8QvFO2cPGE5UCodEw8D5qLp7uC7VPdLLBmY3O4pFJqCjXSew1NVyj%2FyE0hywWnpzbkBFMXwGzERc%2Bz833IeExnI1omjf0tm2jQhxofG2pGup%2F7ohAf%2BRnOOYi4myX57%2FhOz68zUAHYnx%2F%2FgcMJgPQ0mA%2BDRY2yRj8OaF7QORtuSyqA4Sdbe9wd2qdYdTkAOBEq%2BwOs3do%2BQPtgsOEJ9S%2BodRTp0M2LyFFFFd%2Fekv3PKvKkSkW1WUX6Wli9UmvSv%2BNJnUvj1vmSf2LKYqMTML6GucEGOqUBEChCRTzg7p7QttFgLypOPnnPbr0QWbZ1ctFd3FIf%2Br%2Bmqd8VD%2FTjmeO5Go66eqb%2BFAZNoBBi2bwHYqEcDgRr6jw3HyUB8%2BqedmnmJu030E9TnvxHRFuxM%2F41%2FPTO6VeVZRMUhiTHok6dPRgw7WC0t4gsVsmiKQc%2Bn5vFujCUjwI5YKcHEekQW7vSfQ0Nn4j2lBRsatIm67QJgc2aAhPnWgpyBZgG&X-Amz-Signature=c66987af92c3ed2f2c58701c2a0c0cae5bb4b1f03c76b68abe4b9884125d752a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XMWQTY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDpLDFiZUF5slpCcN0B%2Ba2FEKTMKLZW7R5g%2FI8C1N%2BxOAIgdZtm40xZJoItWI93n3wM60WForDkpXdvticM1Sb1KOEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL83%2F%2BWbWY6gewwBAyrcAxlAieXSDMeRpmQYpHViFoUEVjOVsP5Z2HQlQ7M2rqFAQQLRnwFTY72zFf5EluzberSbkNUUxs8KwmxwANCDtA5VW4hLyOgTSfKEdY1itk%2Bwc5Drn6ed36UqeIZXzVfgUaFYP5R4PWbLizxYqVDK5B3IQh71upwSAtAyKjX5zISO%2FHbwL%2BZ7jvCToX8TQ83T4nYZzLrUmNHfc9MUoIJDytG%2BVgAXsQEV7r7IuxyIyWIOHelmkZmir%2ByoGms%2FgubvYc%2BNYgrR5LCPpXV%2FSImus6zl88fYiIwvEEAuKRiTBhgAUNhYENJEca%2BizLDQp6k3%2F20mq5R9%2Bg1XZ7nU3Av6RgE38vgckYrHDZUnrijdSPhxobzsyG4zkulai7wY%2FIYygB8XxHiVTHrhnZQAhKhGCS1iw1pk276Ixfhn7BAakVbbdVEG7wng77w86qKrqRcEy69RHyIHeC%2B8lgga9oov%2BN19reIm1wGxpGL8QIXOF%2BmIRcqDZ%2B5425InyXw4qkUkPSgVkBVXR4FIXTfObbryCiAL44SHpwm1QitmklUO%2BG37LoBDHSEWlFbZpX1vkoyLaXAx7Ioi4QutkM4vazj9dojlRxxJKH0X%2BjP6lhcE1%2BWN041qgLSqte6WiiuqML6GucEGOqUBMCax2PlLwZsYGevtWPd%2BkBKQGkC8NHbk1u6qli3msQcLwYyUV%2BzNOph4%2Bk2CtMDsilFpSGaQWFdMPguaixDEgDkRzaUg5OM9SY%2BM5OlRRQ5odE7aD2592QwWhUQkugJBZQKdjopZLoSV5AJClhq3%2BgTYKhCtewPH0vIlyX1vRs9PQNqKaublTQtMalC99ydnwiw1REQ5oOEFdpgLQkIC0dFETYOD&X-Amz-Signature=1b4b8e0e0c611ba15f57943ba6242aafc9fa3eeaa2de8e1da1cf578d72e0326f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7MTA3C%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCA9J4wX2sPAcn8UohqXE5zXrHLE3rdnFNRMI7eV3mvIQIhANhTy2%2FOU19Z2rVLHCBjAGuSpVKdLkIO3NrcHEKH4dG5KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5qhWfjAY2b%2F%2BHa5cq3AM6p4v3slc08akMnOhh8iOi7Rkm7G41bjPxyfcff6tHkUMPNYpRnxMNj9NCPmQfzjTWbx%2Bga%2BOGOrMaZGJmctTByFXQakU8eVlIG56akKBj4WgHC0AUwedl7lVX1NQmwuW8yHhKbejL5RCnXE3XF6tsoDfYdx44hGVX%2Bi%2BxNyjrz5zK7LA%2BGNOMraV%2F0YW2cmQWorov1yekUaMC%2B1uFHYFdoHFHjW4QIDUNT%2F%2FzMvKWuWolOwHE4Up00kKwkKzwimXsGN1boIx9t%2B5D%2FvDUANVrAzhrR%2B%2Fpg0Ufsh6OwzBWeIYVZfn2LoVipINUWFTr7EddTMc5GkGhV6i9DlSmi0ihxfsiHnyFQGsWe3THOJMTYWxixIgkssziF7k57IJN06S0wpH0LHsQlM%2B8CB6WMKbGL%2FfmHx6sPo32258HszAQgM%2BM5hoID%2FS2OtY0nHNYQeg2xiT5pi7lA21Gm1f5IVt%2Fi1SVLFmAwO%2FgsX4IeeOas8qavgL0HFoNykUaHa%2FIActcUhuz2FIpPi%2FljpaoeQwxa7LPeGV7nyMQ9se7Xr3wUsHhlkByOmR09uWBTvuJzae5Bdfo3hWvJDwYme1pZ7meFPDGR%2FNAvPwnXkUUAQMH3Q5gSjX4VqEvl9FzHDDGhrnBBjqkAa1Dnevt898CFMYZyv%2B27rbVEu0MToAf7Yws7eiLse0PW5Eo7ICBqCjIj4z9aKHfeFdcsSHY7dIVUniMh1NymEkbwjIjjNFtX%2FXdw47Go8J6kgCR1jv7SwLb6ylrcnwVgvrN%2FS5BtxeN2cAOkDUb0nW%2FTgOClXwjfj%2F9SLT57m30d8IgRQgznmVvJQMNO8%2F3t9yLlgAhdR4Ff7UahFEioFf9CQHe&X-Amz-Signature=d8ac17e7381b194ed3b1687c347455a3db014bec5adf6c93af549089151d3923&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAYFSTC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFLvSedaz%2BVDCH01hfHRnbLYiyVpBChHO2tDNtTH6AVoAiEAsBjwlhbLp5kZ3ZYkKtBahPQADXaKfV2mLxFJACXPAYIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJNJ5xdIbcSPolLXyrcAyrlHpxmv60nJMKp%2FTxQQge06ITQg2i3vhTG7CFqKsInHbgCF6G95x2DcCRdRt%2F%2Fyr%2BEtazRz0vPMzLZY4Ae5Qb6NGinTPETj%2FYT7HWV3rZi%2FtATAVQpaX6O%2Bzf%2FsVTdGp%2FY%2B3iwJyaw4HY0guxRXXYKLp4A6u%2B2bmh%2BBncbSpoLuoFP1D4hVcKKDA%2F2Qz%2B4mZkSY56bHJvNtVVjSrXFbLYNxdBULNcEyoy5LU9K235scFMufmwDBMUf%2FaxUYHZsuBbXMv1wg4UWLlmJ3140EoOsRyZlGCcrfJ7fmZgzyeDuPI5S%2F%2BW5DjFjwibJ08WiSgD2mdVbN%2BuWoCqsZ3aeOU3zfBxctnsx2oOMEmdl0%2B8QvFO2cPGE5UCodEw8D5qLp7uC7VPdLLBmY3O4pFJqCjXSew1NVyj%2FyE0hywWnpzbkBFMXwGzERc%2Bz833IeExnI1omjf0tm2jQhxofG2pGup%2F7ohAf%2BRnOOYi4myX57%2FhOz68zUAHYnx%2F%2FgcMJgPQ0mA%2BDRY2yRj8OaF7QORtuSyqA4Sdbe9wd2qdYdTkAOBEq%2BwOs3do%2BQPtgsOEJ9S%2BodRTp0M2LyFFFFd%2Fekv3PKvKkSkW1WUX6Wli9UmvSv%2BNJnUvj1vmSf2LKYqMTML6GucEGOqUBEChCRTzg7p7QttFgLypOPnnPbr0QWbZ1ctFd3FIf%2Br%2Bmqd8VD%2FTjmeO5Go66eqb%2BFAZNoBBi2bwHYqEcDgRr6jw3HyUB8%2BqedmnmJu030E9TnvxHRFuxM%2F41%2FPTO6VeVZRMUhiTHok6dPRgw7WC0t4gsVsmiKQc%2Bn5vFujCUjwI5YKcHEekQW7vSfQ0Nn4j2lBRsatIm67QJgc2aAhPnWgpyBZgG&X-Amz-Signature=79f735a73fd08bf3a2911dd74650c7329890cfe087dec1e6b9e0ad608b3749db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
