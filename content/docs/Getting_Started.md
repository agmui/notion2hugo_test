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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBBXCP5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHMldtq1K26EO%2F2LxYuAcyLDP089%2Bx9FT5fDk3sriDjJAiEAyyssQbb4pVc%2B5InVsECihAV6alLKoMLbuf7SH42cT6Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNpR7g7%2BUsAy8TcB6CrcAxpnu1Eln4Q3kZVhvG2Z6oI1bduUvjbdIjAFjoq9%2BaifoMLeTOhcQbmBTDWCq3N7prlrBmM0jhnw0Sedm7Tn8r3k0ej6ujBV062Hne6l8t%2FLZZY5G8x%2BU%2FWVgQlNczBlrSu%2BqmKKQV%2BT5zjfoeOc4BIXfLLMQl03vkl9%2F1KY8pwDcMBPGXKkp4gtgGeqmz1%2BPxie3fKRlPy4sjvFWYU0%2F8Eh1Psut0tWx2Kf1JJOWNH8tUPTs1ugavV9Sudw3nO8cGa1xvTJAgeG%2FVO4CqKN8EAs1wcMouv8Q%2BzRtd9AZi1zRCCZ4GdwsJO0QO8mjU38Z6uZ8wRGmvHvjoBJnC1PbYGavUm7r93Anky%2BYRfgCKFT6jUokLhydwT8K4gUVuUnNZDET%2BlwUP0urdErCmbTuETtAgb9aiklsIKcQp3LxPWo6ig2hPVOPMg4s3ZRAX45s2MuMei9cyUKeYjHwKE%2BUe6Fd07op4sAdK4%2FW0XzLz1A6a0tHu5U3nbV0QyvaS%2BLvj1y2l%2B5Paotno5JrpI8v1rdYXMS%2FsCtXMD5EtjREX0lDttUcYNM5y0NxDG5iiivUEGD1ZVPh%2F5JQYNh%2B6ocMLSnt8Pb%2FrcZDmGMYggoDZoiy9CIijGa%2BXaC5g%2BzMNeNncMGOqUBVHd2yLtp3spz12DKqsF9A7NDAVsCtNzdbfTaTmRVIeZfikDCKB5C03KVk%2FrET%2Bl62D6aNUiD86E5RsC%2FFnrOAEEzfSCCQUStZvRUHlhUQELyIHtiU25qcJWGywn0lFrS1hNx1iF%2BRe7Ic5SV%2BZPutOAnh6dc4NWqRO2I1N7JibaXQWimzZ3XxTlPy4974nq5nTBIYCP4yRMXXG2Ou20EkPvH8WOG&X-Amz-Signature=a4ffa33ecf1d7707b0689c1eb136cf8e7de31189bd4e8325b5e91b559f567e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBBXCP5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHMldtq1K26EO%2F2LxYuAcyLDP089%2Bx9FT5fDk3sriDjJAiEAyyssQbb4pVc%2B5InVsECihAV6alLKoMLbuf7SH42cT6Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNpR7g7%2BUsAy8TcB6CrcAxpnu1Eln4Q3kZVhvG2Z6oI1bduUvjbdIjAFjoq9%2BaifoMLeTOhcQbmBTDWCq3N7prlrBmM0jhnw0Sedm7Tn8r3k0ej6ujBV062Hne6l8t%2FLZZY5G8x%2BU%2FWVgQlNczBlrSu%2BqmKKQV%2BT5zjfoeOc4BIXfLLMQl03vkl9%2F1KY8pwDcMBPGXKkp4gtgGeqmz1%2BPxie3fKRlPy4sjvFWYU0%2F8Eh1Psut0tWx2Kf1JJOWNH8tUPTs1ugavV9Sudw3nO8cGa1xvTJAgeG%2FVO4CqKN8EAs1wcMouv8Q%2BzRtd9AZi1zRCCZ4GdwsJO0QO8mjU38Z6uZ8wRGmvHvjoBJnC1PbYGavUm7r93Anky%2BYRfgCKFT6jUokLhydwT8K4gUVuUnNZDET%2BlwUP0urdErCmbTuETtAgb9aiklsIKcQp3LxPWo6ig2hPVOPMg4s3ZRAX45s2MuMei9cyUKeYjHwKE%2BUe6Fd07op4sAdK4%2FW0XzLz1A6a0tHu5U3nbV0QyvaS%2BLvj1y2l%2B5Paotno5JrpI8v1rdYXMS%2FsCtXMD5EtjREX0lDttUcYNM5y0NxDG5iiivUEGD1ZVPh%2F5JQYNh%2B6ocMLSnt8Pb%2FrcZDmGMYggoDZoiy9CIijGa%2BXaC5g%2BzMNeNncMGOqUBVHd2yLtp3spz12DKqsF9A7NDAVsCtNzdbfTaTmRVIeZfikDCKB5C03KVk%2FrET%2Bl62D6aNUiD86E5RsC%2FFnrOAEEzfSCCQUStZvRUHlhUQELyIHtiU25qcJWGywn0lFrS1hNx1iF%2BRe7Ic5SV%2BZPutOAnh6dc4NWqRO2I1N7JibaXQWimzZ3XxTlPy4974nq5nTBIYCP4yRMXXG2Ou20EkPvH8WOG&X-Amz-Signature=664b8d0b20a111f0a8e401d6722a13cf06a687bb8ee84c66e6681933543fc038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBBXCP5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHMldtq1K26EO%2F2LxYuAcyLDP089%2Bx9FT5fDk3sriDjJAiEAyyssQbb4pVc%2B5InVsECihAV6alLKoMLbuf7SH42cT6Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNpR7g7%2BUsAy8TcB6CrcAxpnu1Eln4Q3kZVhvG2Z6oI1bduUvjbdIjAFjoq9%2BaifoMLeTOhcQbmBTDWCq3N7prlrBmM0jhnw0Sedm7Tn8r3k0ej6ujBV062Hne6l8t%2FLZZY5G8x%2BU%2FWVgQlNczBlrSu%2BqmKKQV%2BT5zjfoeOc4BIXfLLMQl03vkl9%2F1KY8pwDcMBPGXKkp4gtgGeqmz1%2BPxie3fKRlPy4sjvFWYU0%2F8Eh1Psut0tWx2Kf1JJOWNH8tUPTs1ugavV9Sudw3nO8cGa1xvTJAgeG%2FVO4CqKN8EAs1wcMouv8Q%2BzRtd9AZi1zRCCZ4GdwsJO0QO8mjU38Z6uZ8wRGmvHvjoBJnC1PbYGavUm7r93Anky%2BYRfgCKFT6jUokLhydwT8K4gUVuUnNZDET%2BlwUP0urdErCmbTuETtAgb9aiklsIKcQp3LxPWo6ig2hPVOPMg4s3ZRAX45s2MuMei9cyUKeYjHwKE%2BUe6Fd07op4sAdK4%2FW0XzLz1A6a0tHu5U3nbV0QyvaS%2BLvj1y2l%2B5Paotno5JrpI8v1rdYXMS%2FsCtXMD5EtjREX0lDttUcYNM5y0NxDG5iiivUEGD1ZVPh%2F5JQYNh%2B6ocMLSnt8Pb%2FrcZDmGMYggoDZoiy9CIijGa%2BXaC5g%2BzMNeNncMGOqUBVHd2yLtp3spz12DKqsF9A7NDAVsCtNzdbfTaTmRVIeZfikDCKB5C03KVk%2FrET%2Bl62D6aNUiD86E5RsC%2FFnrOAEEzfSCCQUStZvRUHlhUQELyIHtiU25qcJWGywn0lFrS1hNx1iF%2BRe7Ic5SV%2BZPutOAnh6dc4NWqRO2I1N7JibaXQWimzZ3XxTlPy4974nq5nTBIYCP4yRMXXG2Ou20EkPvH8WOG&X-Amz-Signature=df240478ed5622745ff703095425146c18c1a5123b3714f197ebf2ae914ae40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KT3HIH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBWkIhbiT4y1l0UUDR7GQghBQ87%2Bde1YLPMCwMz%2Bv4%2BQAiEAvLFWe0ZoPqBdGqCF9Byco7AXsAEpqpkpKPPg9kBcSf8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPHZQiusjNxTi5aXACrcA%2Ft2J2SHP3ViRglGVs1KVxAlzf977uGDym4ruoHYKDyTJvbevBCV7Qz5eS%2BIsuU%2FK1cHlFt8Pu6gCXJo8Rks%2FGmhwgzwnwJNYhg2L6ZeDfgMTc3cjHbxZMFZFQtd0d0rP3ldVWYr6OObGWoQx2EOqvkYLPeMCynRx55IWgiVnH6dj77zAtRgh9T3F7FIaMEcYKIRm%2F7UZ%2Fw1ajgD5WCeSrAlILj%2BcpKrHZYlISRMtoOAWb1dCHWJxGuI8vh56i2chkKZqgSHsHqEBBHFMMDyPHgama5PZtyc%2Fe2zN4Zz%2Bkkxh1yiFx87m%2BcymbpheLTe7n%2BH9OzfwcAQaiS2f8iGzE7ciQcIKRjXBMjJ94FOoekRHVhKE7OTd1TaUtyFkGR7C%2FJnT40KzS%2Fb7TmV1FihPGIBXC8sWjDzQqoTEnTDbxUvQmuqaE3Lzj5IET4ouSn9mnHXAqvnJ%2B6sLKQn2QlLUpLZvd7%2FwtqYuvp7y%2BhtSvWM1vL4ScM%2F44gxmBOFmgQbFyHx3RvZGW9yU4XPk%2FqRG6ygETK3aVF%2F6oTdrF91eubY6X4LvlpDeaF6au2sgzxYrMJ8u%2F%2FF3lmGqlut2F4K07l8iow0aJC%2FmbtfVvJ1YOPb500DJH8YY7jcsmrDMIGOncMGOqUByA2ErcstqH1WDM4z%2BlW8HhwzqEu9TYrrGD4EXvMzhyiSHlFYKhLYl%2FV5OyOcHAHtvUn4C4KkhztbMSAPBrO2XZVQrSsgr9Xhlhc5KIsMYHakA0%2FWDCx%2BOD1jbQppzQqeuXF8nEBKOGlVH2%2FEquSNT%2FSc%2Fthfo3JL4O3nbLXY%2FSX5gPpCRxNReWKFTv4yFaykK1zXs49o8PaJqa077Tz4hmh7h%2Fuq&X-Amz-Signature=2e91d60ac6c6cb8bc21b73ec1944995d6bf8c7ad0d0b28890418f07d94691bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIS6OREY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCKf6eSelHeW44gjm%2Fwig2D9tnQrYi2ycTL6rwdnf11ygIhAP5mu6TabD%2FMhyhIOtETK4rShbWgSG2tktgb4zEMYaJkKv8DCCQQABoMNjM3NDIzMTgzODA1IgyNoXyS1Xui8TSzzT8q3AMu2hThOaRW53ntdNkkClvmFoVMlQV9afHXyYb7Dagkj3SkvVLxi5ANweRhJdkASO97jCTYjEItt7%2BGsIZ%2FNhV%2FW7U4f5TEjYApaVvCdeaS6eDvy2OWqy82LYPaZT2MfWMT5uLvkRwi3h4U1oWfV%2BDB%2B%2BlPhYhl4ZCvzb1f2GMkRKHcpeGJzfEdhAR0%2FGmC0n502iahS6h7n1WQfrTz0DNqMQJ9uLZ7MQLfEXRlQQmpbotNEvN3PMTYsfIGSQMxwyoR4uxdwN8W6M%2FNtxtQhsT%2BroZCtM8WwMS1cAE1pAgYmMA61uosrriY7j4QyD85uMPNhqw1Ag21Fp%2B0koIMEQopCjGFqP0JDT49gmazyIP6aCRZvl5Wqko83IyhvhYn73dcp69%2F1QAQ43CehiWUHMF9rj93xHi%2BDRbp%2By0GeR7qR5sj8MsMnGpKANyD6A2endDgSVjHfgSo7FqsFjA81vtdxehOgvii5Tj%2BOZiKopMkGlugzfm0aYUYrOZGK5WofHKng%2BYWg7P%2BW1m6hc8g3yoZbVGpLCFj3REWxHTnpy6KnYNSrE%2FdiqYsMdbNSV3mt%2FpV0NZktux9wbFP6dGEnaw984OYdNlS%2Fs5%2FPJDZ0pliuisnsn53OvtIu0peeTDLjp3DBjqkAURT83j1Nh7YEC3%2BU1dsCYIjIETtVNTuZjjHqor4FBl34jPthtpTLc%2Fa3uBt2fzWMo6rSr29SjTNstrHf%2BZCZBDVQcXxK01wtTJyE%2FJpgWP8TTsX2dSOsXsijwzIKp04Jdf6jFH41EpKGWGUNgVwmuoBUVhNP6Zh7%2FhAjIQ0aqb0lesazW94Egeb2WSqvTJyerlDKbJVjENUUWYcibVa7K37JYeR&X-Amz-Signature=7ed8276d6e4dcd4ec0d993e4fc281d41317527f43b8b4e69a859a045df59cce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBBXCP5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHMldtq1K26EO%2F2LxYuAcyLDP089%2Bx9FT5fDk3sriDjJAiEAyyssQbb4pVc%2B5InVsECihAV6alLKoMLbuf7SH42cT6Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNpR7g7%2BUsAy8TcB6CrcAxpnu1Eln4Q3kZVhvG2Z6oI1bduUvjbdIjAFjoq9%2BaifoMLeTOhcQbmBTDWCq3N7prlrBmM0jhnw0Sedm7Tn8r3k0ej6ujBV062Hne6l8t%2FLZZY5G8x%2BU%2FWVgQlNczBlrSu%2BqmKKQV%2BT5zjfoeOc4BIXfLLMQl03vkl9%2F1KY8pwDcMBPGXKkp4gtgGeqmz1%2BPxie3fKRlPy4sjvFWYU0%2F8Eh1Psut0tWx2Kf1JJOWNH8tUPTs1ugavV9Sudw3nO8cGa1xvTJAgeG%2FVO4CqKN8EAs1wcMouv8Q%2BzRtd9AZi1zRCCZ4GdwsJO0QO8mjU38Z6uZ8wRGmvHvjoBJnC1PbYGavUm7r93Anky%2BYRfgCKFT6jUokLhydwT8K4gUVuUnNZDET%2BlwUP0urdErCmbTuETtAgb9aiklsIKcQp3LxPWo6ig2hPVOPMg4s3ZRAX45s2MuMei9cyUKeYjHwKE%2BUe6Fd07op4sAdK4%2FW0XzLz1A6a0tHu5U3nbV0QyvaS%2BLvj1y2l%2B5Paotno5JrpI8v1rdYXMS%2FsCtXMD5EtjREX0lDttUcYNM5y0NxDG5iiivUEGD1ZVPh%2F5JQYNh%2B6ocMLSnt8Pb%2FrcZDmGMYggoDZoiy9CIijGa%2BXaC5g%2BzMNeNncMGOqUBVHd2yLtp3spz12DKqsF9A7NDAVsCtNzdbfTaTmRVIeZfikDCKB5C03KVk%2FrET%2Bl62D6aNUiD86E5RsC%2FFnrOAEEzfSCCQUStZvRUHlhUQELyIHtiU25qcJWGywn0lFrS1hNx1iF%2BRe7Ic5SV%2BZPutOAnh6dc4NWqRO2I1N7JibaXQWimzZ3XxTlPy4974nq5nTBIYCP4yRMXXG2Ou20EkPvH8WOG&X-Amz-Signature=7e50b86b7b3990edff804d6ebeb1396e1047b7ccac0243944b8c70737ca24b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
