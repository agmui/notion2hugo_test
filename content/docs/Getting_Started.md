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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z323WC2P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHisRFplTMLa89nFrH7pRfDYg0Ef6Nps8y%2Bk3SaRAwKCAiEAzpbDYfDRTdW%2Ba2nJUJXLGNUNecachP4JZ8wyKImYaRoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKeY3sckDxDt3SuvRSrcA3Xgn5Zht63xSKwDI27iF8k%2F4W0GAM%2BDsRkrzd3f%2B7xEWzDEZH32t7UMTTd%2BbCMSmLHLJcbhYBG6zBk%2F742%2F9VkiWb2dNY09XlFUNdAAu2PKHB47NoyhyWxv2htAAsulAh2vaXEN0nxTMUWWOSBtl6W%2FYNtSVqQUXhM2lUVoK%2BUMdfa05LJjPerkMBU%2Fn5e8YWvJlDzbjSLEmysxb4OF3f0AhFxWbb7M4ZDSjQvX5ckAlzKskzOxgmUqjLg2Dh7Gs%2BO%2FFB03DM3VwKHceGge3FVEEuLiKhEQieSU2sIpEZ%2FnwwV%2BiV1nvNux0VsGbL9RvTlfGYKPu8J%2FtHuBRkgGRI0kUctMiAAWRWN4msJAPMMB3l1wPWCpX9f%2FeeNiNdt%2FTxPNJWIyoU1EM3zf4VkS3lQZ5uBKG24rGpeacXWcf7GJnKEcwnmz2LFOyJWPgsGzd%2FLIqQIjnIpxwDiONXqWJu7hJhCORdc60mplEmdDSM2HjpKYi7onu%2FeAjdX5obPl88irvIm0wu7xK9iihoq58qPblHCohj1zTa27iPCgYCawUBm4bxvYDX9XDU5o1TfWSICq5ZJ%2BrVvkZEZPP2l0mwaOsgaw3pLvzOhGPYmo7u81TFs%2FTxG0RxXXTswdMLqKosMGOqUBT9%2BBxUInwD%2FKaZPn%2BEFBD%2B6haWUvzoTmcxye7U6Ruy6tl816sJwYtwQAklxmEa1I8eo0Nm6x59iEpY8vGgkVnYZlD0Ap7fDg7vUH7DDIir86G1KmQTITusK19fiDOVKOyduNZ7Aqdht8ILnHhSKTYQnMufgjp1HfDN1lMpAB30nPTDyVEBXl80oGiI%2Fgmttnh8QCvffpvdMlf50zPmhM%2BZKmTXAA&X-Amz-Signature=0b4adb440b5dbcc492356838d7e620b4fec35a57fdb316a7bcbf398b2c47b4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z323WC2P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHisRFplTMLa89nFrH7pRfDYg0Ef6Nps8y%2Bk3SaRAwKCAiEAzpbDYfDRTdW%2Ba2nJUJXLGNUNecachP4JZ8wyKImYaRoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKeY3sckDxDt3SuvRSrcA3Xgn5Zht63xSKwDI27iF8k%2F4W0GAM%2BDsRkrzd3f%2B7xEWzDEZH32t7UMTTd%2BbCMSmLHLJcbhYBG6zBk%2F742%2F9VkiWb2dNY09XlFUNdAAu2PKHB47NoyhyWxv2htAAsulAh2vaXEN0nxTMUWWOSBtl6W%2FYNtSVqQUXhM2lUVoK%2BUMdfa05LJjPerkMBU%2Fn5e8YWvJlDzbjSLEmysxb4OF3f0AhFxWbb7M4ZDSjQvX5ckAlzKskzOxgmUqjLg2Dh7Gs%2BO%2FFB03DM3VwKHceGge3FVEEuLiKhEQieSU2sIpEZ%2FnwwV%2BiV1nvNux0VsGbL9RvTlfGYKPu8J%2FtHuBRkgGRI0kUctMiAAWRWN4msJAPMMB3l1wPWCpX9f%2FeeNiNdt%2FTxPNJWIyoU1EM3zf4VkS3lQZ5uBKG24rGpeacXWcf7GJnKEcwnmz2LFOyJWPgsGzd%2FLIqQIjnIpxwDiONXqWJu7hJhCORdc60mplEmdDSM2HjpKYi7onu%2FeAjdX5obPl88irvIm0wu7xK9iihoq58qPblHCohj1zTa27iPCgYCawUBm4bxvYDX9XDU5o1TfWSICq5ZJ%2BrVvkZEZPP2l0mwaOsgaw3pLvzOhGPYmo7u81TFs%2FTxG0RxXXTswdMLqKosMGOqUBT9%2BBxUInwD%2FKaZPn%2BEFBD%2B6haWUvzoTmcxye7U6Ruy6tl816sJwYtwQAklxmEa1I8eo0Nm6x59iEpY8vGgkVnYZlD0Ap7fDg7vUH7DDIir86G1KmQTITusK19fiDOVKOyduNZ7Aqdht8ILnHhSKTYQnMufgjp1HfDN1lMpAB30nPTDyVEBXl80oGiI%2Fgmttnh8QCvffpvdMlf50zPmhM%2BZKmTXAA&X-Amz-Signature=665d3cf9da1a95a376a6c0dad539a6f4f2795db417355d5469994303cc43838f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z323WC2P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHisRFplTMLa89nFrH7pRfDYg0Ef6Nps8y%2Bk3SaRAwKCAiEAzpbDYfDRTdW%2Ba2nJUJXLGNUNecachP4JZ8wyKImYaRoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKeY3sckDxDt3SuvRSrcA3Xgn5Zht63xSKwDI27iF8k%2F4W0GAM%2BDsRkrzd3f%2B7xEWzDEZH32t7UMTTd%2BbCMSmLHLJcbhYBG6zBk%2F742%2F9VkiWb2dNY09XlFUNdAAu2PKHB47NoyhyWxv2htAAsulAh2vaXEN0nxTMUWWOSBtl6W%2FYNtSVqQUXhM2lUVoK%2BUMdfa05LJjPerkMBU%2Fn5e8YWvJlDzbjSLEmysxb4OF3f0AhFxWbb7M4ZDSjQvX5ckAlzKskzOxgmUqjLg2Dh7Gs%2BO%2FFB03DM3VwKHceGge3FVEEuLiKhEQieSU2sIpEZ%2FnwwV%2BiV1nvNux0VsGbL9RvTlfGYKPu8J%2FtHuBRkgGRI0kUctMiAAWRWN4msJAPMMB3l1wPWCpX9f%2FeeNiNdt%2FTxPNJWIyoU1EM3zf4VkS3lQZ5uBKG24rGpeacXWcf7GJnKEcwnmz2LFOyJWPgsGzd%2FLIqQIjnIpxwDiONXqWJu7hJhCORdc60mplEmdDSM2HjpKYi7onu%2FeAjdX5obPl88irvIm0wu7xK9iihoq58qPblHCohj1zTa27iPCgYCawUBm4bxvYDX9XDU5o1TfWSICq5ZJ%2BrVvkZEZPP2l0mwaOsgaw3pLvzOhGPYmo7u81TFs%2FTxG0RxXXTswdMLqKosMGOqUBT9%2BBxUInwD%2FKaZPn%2BEFBD%2B6haWUvzoTmcxye7U6Ruy6tl816sJwYtwQAklxmEa1I8eo0Nm6x59iEpY8vGgkVnYZlD0Ap7fDg7vUH7DDIir86G1KmQTITusK19fiDOVKOyduNZ7Aqdht8ILnHhSKTYQnMufgjp1HfDN1lMpAB30nPTDyVEBXl80oGiI%2Fgmttnh8QCvffpvdMlf50zPmhM%2BZKmTXAA&X-Amz-Signature=b3b121ae8e7fe736fad16352f827659acc6859610d266fbde8fbab12a7c29d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR33TCUC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDJ4R7F6m7KehfgBf7zSY7trsFz8HYtIhoteYbNgl197gIhAPuQwUvDDagpm%2By7uUmh4msrlYrw6EePNmDIjyml%2B5uLKv8DCDsQABoMNjM3NDIzMTgzODA1IgwAyFmeWqyqpuSN9%2Bcq3AN81%2F73OhwXV4FFeziWE%2BAhw2iNepV%2FElWE4Y55OT5kJFfhb0LG9ebR%2BFhh%2FyJUOzJkIeqoSbMAHrJ8lVZQiQvUleNEj9vcgtXwjHLe7ZI3NlxpWisGKdEi4NI2EfHvnSxY2hX4nPwNFNHBkAZeBfoYJRAQLOa7bMSzNPggjA1CFcrkAUY0TkGm8%2BHlnNAWer8w1EjR0toD1dsRyHm442sVuyi%2Fh%2B12MX5udev3d9TYw8y%2BJEFdVb9amN2KmXYGVDGHG8U0jzeL%2BY%2BCLjp0xXBzy3HeAyiobQK4H7C1ScYxwPCTQ4FW3B711qrxbxlAcxa%2F%2Fq6AiCVb3CbAPpicTvGwv0gxsQiAeyob7P8%2FQWgMF0%2Bcln9J0HmH%2BT5TSFXEgnx74q73lZxIvBLnD1NfNBCvZzCP41WjcCwAnivPF2tyD47aD9oL3W4glMh2dWix4wfx4%2FqzCwLpkRyvMeYg%2FgC5fIuRt%2FrImsZZy830uFSDm6lynul3DBRtYPSQcySLfmEHdXOr4lCediIOmG1H%2FlK8dlb5E45so2RqLolYG56WFtvc22EAEz61cCJz0Ze1krkV2K%2FWdfQn21iW70QDZyM9AnBVgB96iBLGTbeHBd0XPdJLTX5JP50tNqAD7DDPjaLDBjqkAYgpWwoELbj0gf%2FqjyTAu7RftOTnUgIxLCXu9tCgxUpr4B9%2Fts6gKYu0IuodjGJKpx0RjqJr9xSXwPefKtzJ1KJX%2FXvjrAIRJpCwNHjxyiYw%2FTG0XKELy5UbICKN83gpcGHZqWU9bekNn7OYubHYrbSns5KnULUrfCbNeu1SHf4TIik%2Fb438JxU75%2FAWvE%2Fr%2FdssT%2Ba2KPNFebG4Cm%2FB6fcyLU%2FA&X-Amz-Signature=2745569fb826ea4e7c761ad5882caaa990b730abee7ccfd7c8b10301185ba9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DBUC7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDBjbAu%2B7%2FWpN54HFYjQtFGR%2F6nFJhFG4nRMJPnYOUQ4QIhANey2bB0joPbj9kaoj7qL2iyPqsbarq%2BvCVJx1jyqm%2F0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyQoqhAaMO%2F52PUXEYq3AOWeomGVQw%2FjsTIl%2BP%2BaLykm27ajnvmI1sdifMH9Peor3USMeQSnycONqiU%2FhvGuepQjkIHTPBnmC3Ie0NgCwzmg0dGnqIZFz3xhvgkbsDBSLf0nhF2qgmveAcudCQL%2Bd%2FZuMPxJa8AetPRCrIp8cNqkEwcl2TOxagS2C0x0XhyIYTvw%2B%2FG%2BT%2F5w9fKJTjbUOF0LWLYrhY4BVCed5rPNwUCq2yIqZ3i1IfagZHyO2nsTtP3TjEa9zs2PJ26KnmVtDfaSsL%2F7kJ2izGdNnfsmHGNxmevgX0NrWFMSNErHx0mG%2BLh7av4kC3hW7WBlFtd2moA7L2jilYABq1GP3QQxCBbUPWaPB%2BrbRbEbv7yhO%2FrS%2F8YzuL2gBNc00PnPgV4DEyFzz7yITx%2BS4e6GQBRNvq9GJjyuet0fYYfdvKE7HTkwqbvzh973mFP%2FFXu1AgTYY%2FXobg5N4flsT2XrX81Y2yx%2FTMdZ0pcrlYY2GnHfMA4Xz5XoFqkNTd96MbjSaHIBFNqle%2BrhcYP8X3Oq0XO18a2fcfPrbSGLDuJ7fRsQVeGs1WKaDUJF09Br5YWlzeHzoHqs%2Fh%2B8pSE2B6%2BV38fxf48c%2FQNT2mvv6PPx%2BrjZIj3GAfZd8jxIM0lLCGBjjC3jaLDBjqkARtN20hOxpPIqnvImqv%2BD3HNW%2Bv9ESKaI6GKTqFprPgi1O3U56rGLyb%2BPNDTdlyAXo5tZUWhHKHeMEXPxrHp95lA9TNwd3vX8VgiWooa2BzcWA08jOX0IYGms8xKqS%2FUIiEgW3MQLip%2FQc9UvgEFib6LQQl9D5LZd1CnjaMzB0PcYWLjrn5%2BJR2QsM384tEoryR%2Bu3iHH7sq5QWdmtkCqwb%2FAA34&X-Amz-Signature=94bfd20be29d0f98270f72470d105ed7a46dfa557559e7ec3263a113db5def23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z323WC2P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHisRFplTMLa89nFrH7pRfDYg0Ef6Nps8y%2Bk3SaRAwKCAiEAzpbDYfDRTdW%2Ba2nJUJXLGNUNecachP4JZ8wyKImYaRoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKeY3sckDxDt3SuvRSrcA3Xgn5Zht63xSKwDI27iF8k%2F4W0GAM%2BDsRkrzd3f%2B7xEWzDEZH32t7UMTTd%2BbCMSmLHLJcbhYBG6zBk%2F742%2F9VkiWb2dNY09XlFUNdAAu2PKHB47NoyhyWxv2htAAsulAh2vaXEN0nxTMUWWOSBtl6W%2FYNtSVqQUXhM2lUVoK%2BUMdfa05LJjPerkMBU%2Fn5e8YWvJlDzbjSLEmysxb4OF3f0AhFxWbb7M4ZDSjQvX5ckAlzKskzOxgmUqjLg2Dh7Gs%2BO%2FFB03DM3VwKHceGge3FVEEuLiKhEQieSU2sIpEZ%2FnwwV%2BiV1nvNux0VsGbL9RvTlfGYKPu8J%2FtHuBRkgGRI0kUctMiAAWRWN4msJAPMMB3l1wPWCpX9f%2FeeNiNdt%2FTxPNJWIyoU1EM3zf4VkS3lQZ5uBKG24rGpeacXWcf7GJnKEcwnmz2LFOyJWPgsGzd%2FLIqQIjnIpxwDiONXqWJu7hJhCORdc60mplEmdDSM2HjpKYi7onu%2FeAjdX5obPl88irvIm0wu7xK9iihoq58qPblHCohj1zTa27iPCgYCawUBm4bxvYDX9XDU5o1TfWSICq5ZJ%2BrVvkZEZPP2l0mwaOsgaw3pLvzOhGPYmo7u81TFs%2FTxG0RxXXTswdMLqKosMGOqUBT9%2BBxUInwD%2FKaZPn%2BEFBD%2B6haWUvzoTmcxye7U6Ruy6tl816sJwYtwQAklxmEa1I8eo0Nm6x59iEpY8vGgkVnYZlD0Ap7fDg7vUH7DDIir86G1KmQTITusK19fiDOVKOyduNZ7Aqdht8ILnHhSKTYQnMufgjp1HfDN1lMpAB30nPTDyVEBXl80oGiI%2Fgmttnh8QCvffpvdMlf50zPmhM%2BZKmTXAA&X-Amz-Signature=80d84ab19f69caf64d543db7a59482afcc334897e8501e9c876b116a47d67fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
