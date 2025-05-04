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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKORG2QH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGWCZ4cOLhzapdlcfAH2M2Wmo4Ry2HFnpuGadMEtDsB3AiAOixBT3CmQnAhSMcwULWjMVXIvjjvZTIIit%2FixD3wipyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM5OEw9xNPkO2IBgm%2FKtwDwTtaXK34pIs9SEIbCLRI7xDxR3T2bwAeqPb1v3u9fwY2RcYG9UuxbnmmVzIUpxPfNgDbUNBqPMIFc3zFGHhoVS6e6e8qtfDwximm2rxEmkS433yoyPLiMP6GPGkqwsnwJpJWRX%2B8zjGOcrRMiG4k1RUS%2Bxz7Uv0omEhM5KbM2VO2Eo0mflEP73aAOPLNEinEggtUsP7HnjGjjCo%2Fn2agaF046ErQJaKcvw3gxdSfHjt7wtqhn%2BS%2FQ937Se62ukJRCWLFhB9Ipr%2FBvd7ITuBQqlKX7FCNgq6%2FL3mOnR4o%2Bj7kh1lc4veB61o1i%2FSywoPB5LgX48txHcW6GA2zuHz8mszUE2emMWRFrsbJk%2Bx2XgYMtK2e%2FXmR6qFGje8zCRnMRrSBNLM52bqhfePj3woQur0t1N5Ri4vAMii%2Fv24U801J1I1F%2BlphXMMb%2FVskLg60actov3B0ZC1NwX3vKJDyRRnlr2b1BGrXjVMBm54RyJE6r4BIJjcOi1%2FEgR1fEiupuOFrR6tgqAw6R27HHyn2q0%2FkV9cbwNqI3fnDOj75eDSanGv%2F8urEAPm7L38XvuSb4HJJ4ibu81%2B%2FQFt%2BOnyx5302Y36eB13NykewPtcmY%2FnDw7LpweXBmpeqnTcwpYvdwAY6pgHfnchYqYvXtO1k%2BKhl2e1WRoPxAuV2c6s9w%2FNkKpcIWfPzK8UWg04iNpoNprOvNNgz1nkGfpXybYfq34W5gVEWUm7rWDmFS%2BUNpwHsOem05w4JYHp0%2FHT7FOl3pGpgpoawq1JTait%2BK0O8xoCIDFBCzf7am99AJV4qJcpgpNRB8KdAZVMk5wYg%2FeUA7CW1hUnX43fKpqaRS42CU%2BlaivEcMA5E61Qs&X-Amz-Signature=d73b1c33f900f8eaba1d0908fc300053162db5e3c2e4078edf62f3be81ed51e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKORG2QH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGWCZ4cOLhzapdlcfAH2M2Wmo4Ry2HFnpuGadMEtDsB3AiAOixBT3CmQnAhSMcwULWjMVXIvjjvZTIIit%2FixD3wipyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM5OEw9xNPkO2IBgm%2FKtwDwTtaXK34pIs9SEIbCLRI7xDxR3T2bwAeqPb1v3u9fwY2RcYG9UuxbnmmVzIUpxPfNgDbUNBqPMIFc3zFGHhoVS6e6e8qtfDwximm2rxEmkS433yoyPLiMP6GPGkqwsnwJpJWRX%2B8zjGOcrRMiG4k1RUS%2Bxz7Uv0omEhM5KbM2VO2Eo0mflEP73aAOPLNEinEggtUsP7HnjGjjCo%2Fn2agaF046ErQJaKcvw3gxdSfHjt7wtqhn%2BS%2FQ937Se62ukJRCWLFhB9Ipr%2FBvd7ITuBQqlKX7FCNgq6%2FL3mOnR4o%2Bj7kh1lc4veB61o1i%2FSywoPB5LgX48txHcW6GA2zuHz8mszUE2emMWRFrsbJk%2Bx2XgYMtK2e%2FXmR6qFGje8zCRnMRrSBNLM52bqhfePj3woQur0t1N5Ri4vAMii%2Fv24U801J1I1F%2BlphXMMb%2FVskLg60actov3B0ZC1NwX3vKJDyRRnlr2b1BGrXjVMBm54RyJE6r4BIJjcOi1%2FEgR1fEiupuOFrR6tgqAw6R27HHyn2q0%2FkV9cbwNqI3fnDOj75eDSanGv%2F8urEAPm7L38XvuSb4HJJ4ibu81%2B%2FQFt%2BOnyx5302Y36eB13NykewPtcmY%2FnDw7LpweXBmpeqnTcwpYvdwAY6pgHfnchYqYvXtO1k%2BKhl2e1WRoPxAuV2c6s9w%2FNkKpcIWfPzK8UWg04iNpoNprOvNNgz1nkGfpXybYfq34W5gVEWUm7rWDmFS%2BUNpwHsOem05w4JYHp0%2FHT7FOl3pGpgpoawq1JTait%2BK0O8xoCIDFBCzf7am99AJV4qJcpgpNRB8KdAZVMk5wYg%2FeUA7CW1hUnX43fKpqaRS42CU%2BlaivEcMA5E61Qs&X-Amz-Signature=9606f2c972c3aa6b9b9f86512509a87f83340f80e9c6e5dcb8ed571f9f86e3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKORG2QH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGWCZ4cOLhzapdlcfAH2M2Wmo4Ry2HFnpuGadMEtDsB3AiAOixBT3CmQnAhSMcwULWjMVXIvjjvZTIIit%2FixD3wipyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM5OEw9xNPkO2IBgm%2FKtwDwTtaXK34pIs9SEIbCLRI7xDxR3T2bwAeqPb1v3u9fwY2RcYG9UuxbnmmVzIUpxPfNgDbUNBqPMIFc3zFGHhoVS6e6e8qtfDwximm2rxEmkS433yoyPLiMP6GPGkqwsnwJpJWRX%2B8zjGOcrRMiG4k1RUS%2Bxz7Uv0omEhM5KbM2VO2Eo0mflEP73aAOPLNEinEggtUsP7HnjGjjCo%2Fn2agaF046ErQJaKcvw3gxdSfHjt7wtqhn%2BS%2FQ937Se62ukJRCWLFhB9Ipr%2FBvd7ITuBQqlKX7FCNgq6%2FL3mOnR4o%2Bj7kh1lc4veB61o1i%2FSywoPB5LgX48txHcW6GA2zuHz8mszUE2emMWRFrsbJk%2Bx2XgYMtK2e%2FXmR6qFGje8zCRnMRrSBNLM52bqhfePj3woQur0t1N5Ri4vAMii%2Fv24U801J1I1F%2BlphXMMb%2FVskLg60actov3B0ZC1NwX3vKJDyRRnlr2b1BGrXjVMBm54RyJE6r4BIJjcOi1%2FEgR1fEiupuOFrR6tgqAw6R27HHyn2q0%2FkV9cbwNqI3fnDOj75eDSanGv%2F8urEAPm7L38XvuSb4HJJ4ibu81%2B%2FQFt%2BOnyx5302Y36eB13NykewPtcmY%2FnDw7LpweXBmpeqnTcwpYvdwAY6pgHfnchYqYvXtO1k%2BKhl2e1WRoPxAuV2c6s9w%2FNkKpcIWfPzK8UWg04iNpoNprOvNNgz1nkGfpXybYfq34W5gVEWUm7rWDmFS%2BUNpwHsOem05w4JYHp0%2FHT7FOl3pGpgpoawq1JTait%2BK0O8xoCIDFBCzf7am99AJV4qJcpgpNRB8KdAZVMk5wYg%2FeUA7CW1hUnX43fKpqaRS42CU%2BlaivEcMA5E61Qs&X-Amz-Signature=fadd216f505ef0242020c5353d5f33a272157673eb23d03827245c7b591fddc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELTQS5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDEPOcIKeqDMm%2Fh%2B%2BK0cBeWDUkRhd3AXmOV3AHudkVvIQIhAMNJsGeZWE2bCah8kjy97aPHUnkHU7kiOk76wZJM7m9lKv8DCBQQABoMNjM3NDIzMTgzODA1Igyasbdy%2Bs%2FPi12gFlgq3AM8Nj9%2F4trH%2FI3FKClal%2FWtPDENvfqsU0fcOOe0IZuMPcPuGvzdnjRDqQMC76py7TbmFtM8iE58kcfrFkCTnzjnvTJRvAmiTN79NQdHMr7L9An0z4J68iDNhBYn%2F7sBVTcTYsz4BTncJg1dZ0IX6p52CESmt0KpwCKAdztaVDJnVlxB9aZu0UtNM1ujlIOK%2FjLpfxzyAy7p5cgO62GxTpV91hyUjSzxYzRUxKVtenDBqLk%2FA8tT%2FP%2B%2F2Gu8oTx8ktjPLZknpG6bA6Aon%2F%2FpxQO4VuLcoOlDwK%2BJuopx%2BUyfTfxCKBM%2BFcwx33GWqh3MyWzjk6LDT8JNEEZK2ui3exPcEwIBpvMnFJ6EyTpz4NtNDEdtlZmWPgglPq%2B9rykbo2xlvb6CAaI%2BGfmgdvaztlIYaiE1JeNwk6eWOufmukjNam6jsA%2F6OESl8DbIKm%2Bx7R8dof3U2%2Fo9KaMrMkpPD3a5fm2Ibc0icQJbfwbkOOsil5Nah8r6TUcSQkZHDLk%2FSSHIMI25406zjkU%2FA51AXWF80uqaM6BELynJ71b8gYCDhXwqWzkXvJHv2JhGLuC3BMQnOQrzRh31ibbYhameic0Q%2B5%2Fo0rSU%2FocLI1V9wpMQrJhVYwJaqN3rmttZzDCQit3ABjqkAcVn9KpnRJP1ccMm9CTnkZZqpqgVhtqJPHbKGrztkLLuFo6oZu2oto0dlq0xoTVftmA%2Fr0WWmD9FQDcsYQh%2BwzWbYQuV%2Fr7xVMXJkv4kBuokiwaRdvT6v2TV%2B6iSSUBecNFrWODQ%2FcvfUmS3eU9InE%2FyHT1vFhV7yDpvmFIvN3DfCaRxePg5WT3jtiWvNcjTRRGwpNRwhWbEMb7FeQqQzmjppLEp&X-Amz-Signature=e7f28b981214f6e6618a7d607133407d03fe369ec5998d4a067b0c0b19c52f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS2OHJIL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCID6JKh7iuouj0r28%2FVUw%2BAlTgVVPP9ao9VTP3FaybDJwAiEAxLecucLqfUV7zeBJsP%2FITL8%2FYigFrw7miH3jasqw3y4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPeCJsF4%2BJYSyDxx5SrcA2fi1Y1NaCpgFhn9owEgbWLgNpCpi74tSG2Obga0mQH6tqfbnWbZtSX%2B5SBQZKqr8EDh24utWsm0W0kx7KCUaa%2BYkljNZqNIf3iC%2B8lKYsyAacvJ3b2mJxeIeswXJ5uRj2lq1l4XVV6ju%2FoVl9g7M3TyefKh3sR0nwpgY1cKuFIAAHX6RfItq3HBVNHhFkXgBzOwBsZl5t3c%2FRjvs%2F%2BFWA3ebcWbr3CdizE9tN4zvtn9OcGzlwDbGDWJqMkhKwrgt%2FyUHf248cfz%2BmDPVb2dvAU1AvniA2ghbcgAinZyW8eCK8vuJYqV5emQL3eAiMQtvRVtu4TeyagFUhGF9KCoviwKG7JRtrRIapTSgfFr9Y0qm38%2Fo%2BQDtXnV%2FeDV6DytR8RuigJ5uRTt7AEYuqzjW08yw8hyy%2FCctplQTcC%2BiKCmBkzvvkuCtbz2WAOk4TZUUZUe0lKIOkgeTzGlvYqlbkvH8D9ZwFe31Gs0GYsTIq4qPlrIDVL%2F0g7mqeOwYkzVcgr%2FiblrEoXuezoARbH2TT7wVryiK8O%2BCDtguM8FAF%2FyTwwAGCS0zQQgfJX5SkV8i203O5gWOIkv7th7%2FzeYWo9f7bfgvvyUtaBRK5zuwhEDr7%2F0w%2BNKVoCw%2FX%2FTMMPq3MAGOqUBfWLNAY4TYxN6LHNMCU8T%2BafWt3BZbw76Azk%2BHQqFN1A3PRk%2BipRtZdWJlNIVV1p4S5XO7Is3mnqnDOXouQO54VRiP9Ye%2Bzu20dOGU9gA4uJfwKzNNnvt8H1io4pA3IXg0NVllvLglOxkfhurBARmURB%2BtOE6r7JR8U43JbJMY4gcRODQHFVZdfmkJZA9jQaRDdpX3cKI84MAb96HcPq9oqf2tu3d&X-Amz-Signature=5ca811a5639ce062250e9228a80fb07bc237c07062156c9da361e7e03c5d502f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKORG2QH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGWCZ4cOLhzapdlcfAH2M2Wmo4Ry2HFnpuGadMEtDsB3AiAOixBT3CmQnAhSMcwULWjMVXIvjjvZTIIit%2FixD3wipyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM5OEw9xNPkO2IBgm%2FKtwDwTtaXK34pIs9SEIbCLRI7xDxR3T2bwAeqPb1v3u9fwY2RcYG9UuxbnmmVzIUpxPfNgDbUNBqPMIFc3zFGHhoVS6e6e8qtfDwximm2rxEmkS433yoyPLiMP6GPGkqwsnwJpJWRX%2B8zjGOcrRMiG4k1RUS%2Bxz7Uv0omEhM5KbM2VO2Eo0mflEP73aAOPLNEinEggtUsP7HnjGjjCo%2Fn2agaF046ErQJaKcvw3gxdSfHjt7wtqhn%2BS%2FQ937Se62ukJRCWLFhB9Ipr%2FBvd7ITuBQqlKX7FCNgq6%2FL3mOnR4o%2Bj7kh1lc4veB61o1i%2FSywoPB5LgX48txHcW6GA2zuHz8mszUE2emMWRFrsbJk%2Bx2XgYMtK2e%2FXmR6qFGje8zCRnMRrSBNLM52bqhfePj3woQur0t1N5Ri4vAMii%2Fv24U801J1I1F%2BlphXMMb%2FVskLg60actov3B0ZC1NwX3vKJDyRRnlr2b1BGrXjVMBm54RyJE6r4BIJjcOi1%2FEgR1fEiupuOFrR6tgqAw6R27HHyn2q0%2FkV9cbwNqI3fnDOj75eDSanGv%2F8urEAPm7L38XvuSb4HJJ4ibu81%2B%2FQFt%2BOnyx5302Y36eB13NykewPtcmY%2FnDw7LpweXBmpeqnTcwpYvdwAY6pgHfnchYqYvXtO1k%2BKhl2e1WRoPxAuV2c6s9w%2FNkKpcIWfPzK8UWg04iNpoNprOvNNgz1nkGfpXybYfq34W5gVEWUm7rWDmFS%2BUNpwHsOem05w4JYHp0%2FHT7FOl3pGpgpoawq1JTait%2BK0O8xoCIDFBCzf7am99AJV4qJcpgpNRB8KdAZVMk5wYg%2FeUA7CW1hUnX43fKpqaRS42CU%2BlaivEcMA5E61Qs&X-Amz-Signature=604951ae4c5a84277d5bf72a97f53c038388cb638a65d4b2b134be5dd5d217de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
