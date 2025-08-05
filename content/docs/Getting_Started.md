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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJZAFWG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGJHijbPMg6coN0sAONRz7jFMdZQrmBM8q5HBcNGOBrxAiEAsABmAXwm5YOD3YXF%2B2tJ5JDTWD63%2BdSTYbmVeYRccEAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ1tX7IDCNVeLHNTCircA4xynZ0RMLUVdpT2ziVWUpY6bXjwRwDzjzah3bQ5e71niqbOhXtAi1NjmQx5Nwmo70i1kaDAmV1ONC7GzQiguUqmL93F2koecZbinaJM1ohpZWWeYtEPZawnQvkFrR%2F0B05gG8FULKUzaXW%2B7GinZbWaryVTmQke35bCCGuydNXauY%2FJr4gHWtF%2FTEdKVYihqHRAf7UQHZlABFtPec3SEjB8O%2B%2BY9Ds4XTIpk3CCPIflF6nJtafrMLPV8TLfUorx3XXbLawjvbjPdifznMKN7dtA6kTcZ43nyMzKl4QHojfa4nA%2FzmH52CYA0fVos9i8AO23aYCV45T6bp1ODXD4hci4g6ATbqrQU4mH0ZZLxtckg2rSmTyW7p6%2B79fTUqZdEzUyxCqcWq4XaV7nVMpY5Hlieh6KzwQvV8%2FAi6DUEUJEwayRvARHW8d%2Fz0fBmnXY3R%2Bs7VU5nwPYOqVOK%2Blgt%2BiipsKijMTlP04dzG5wrnrt%2FX8TXvQU3mTar%2BcXDiIQXdqc76UCrCr5fp%2BXHn%2BGKw288uqimFa6An5BgdzkArcjy73Gzd8067u4wv76K7GPpBU41kGOnH57IlvuXsMT92386%2BHexZCq7kWMJkvTeNUDx%2FagfyCyLkh1gPHgMLSIysQGOqUBVGIy%2FJ6146vT8DCj%2F0K%2BTjN3NHt3Nt3VTiOa9K90SwijMiuP1Z7PmKdFU%2BADhODzccDU95QeleSTpxzOge%2BVjF9%2FwI8%2B2FFZoUHqbYC4TcQSsvgZuWDwwkVEzmUZf3qUd02gr5J2nUoaVNNsrGqGe8ilKzMygIdMmkGuohy2eTSSa%2BANkigAz3qasrJWqtM8lL9rRQ95Mlmamxy3rkPLhEyMGfCl&X-Amz-Signature=6c7015d292fa767e48da665d8c099e46b72b0e0107fd8c7341557df3230d5f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJZAFWG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGJHijbPMg6coN0sAONRz7jFMdZQrmBM8q5HBcNGOBrxAiEAsABmAXwm5YOD3YXF%2B2tJ5JDTWD63%2BdSTYbmVeYRccEAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ1tX7IDCNVeLHNTCircA4xynZ0RMLUVdpT2ziVWUpY6bXjwRwDzjzah3bQ5e71niqbOhXtAi1NjmQx5Nwmo70i1kaDAmV1ONC7GzQiguUqmL93F2koecZbinaJM1ohpZWWeYtEPZawnQvkFrR%2F0B05gG8FULKUzaXW%2B7GinZbWaryVTmQke35bCCGuydNXauY%2FJr4gHWtF%2FTEdKVYihqHRAf7UQHZlABFtPec3SEjB8O%2B%2BY9Ds4XTIpk3CCPIflF6nJtafrMLPV8TLfUorx3XXbLawjvbjPdifznMKN7dtA6kTcZ43nyMzKl4QHojfa4nA%2FzmH52CYA0fVos9i8AO23aYCV45T6bp1ODXD4hci4g6ATbqrQU4mH0ZZLxtckg2rSmTyW7p6%2B79fTUqZdEzUyxCqcWq4XaV7nVMpY5Hlieh6KzwQvV8%2FAi6DUEUJEwayRvARHW8d%2Fz0fBmnXY3R%2Bs7VU5nwPYOqVOK%2Blgt%2BiipsKijMTlP04dzG5wrnrt%2FX8TXvQU3mTar%2BcXDiIQXdqc76UCrCr5fp%2BXHn%2BGKw288uqimFa6An5BgdzkArcjy73Gzd8067u4wv76K7GPpBU41kGOnH57IlvuXsMT92386%2BHexZCq7kWMJkvTeNUDx%2FagfyCyLkh1gPHgMLSIysQGOqUBVGIy%2FJ6146vT8DCj%2F0K%2BTjN3NHt3Nt3VTiOa9K90SwijMiuP1Z7PmKdFU%2BADhODzccDU95QeleSTpxzOge%2BVjF9%2FwI8%2B2FFZoUHqbYC4TcQSsvgZuWDwwkVEzmUZf3qUd02gr5J2nUoaVNNsrGqGe8ilKzMygIdMmkGuohy2eTSSa%2BANkigAz3qasrJWqtM8lL9rRQ95Mlmamxy3rkPLhEyMGfCl&X-Amz-Signature=428f5c0a6928b3575b4814f2246956215209d5c7df28d4af2ede9ef6bfcac28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJZAFWG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGJHijbPMg6coN0sAONRz7jFMdZQrmBM8q5HBcNGOBrxAiEAsABmAXwm5YOD3YXF%2B2tJ5JDTWD63%2BdSTYbmVeYRccEAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ1tX7IDCNVeLHNTCircA4xynZ0RMLUVdpT2ziVWUpY6bXjwRwDzjzah3bQ5e71niqbOhXtAi1NjmQx5Nwmo70i1kaDAmV1ONC7GzQiguUqmL93F2koecZbinaJM1ohpZWWeYtEPZawnQvkFrR%2F0B05gG8FULKUzaXW%2B7GinZbWaryVTmQke35bCCGuydNXauY%2FJr4gHWtF%2FTEdKVYihqHRAf7UQHZlABFtPec3SEjB8O%2B%2BY9Ds4XTIpk3CCPIflF6nJtafrMLPV8TLfUorx3XXbLawjvbjPdifznMKN7dtA6kTcZ43nyMzKl4QHojfa4nA%2FzmH52CYA0fVos9i8AO23aYCV45T6bp1ODXD4hci4g6ATbqrQU4mH0ZZLxtckg2rSmTyW7p6%2B79fTUqZdEzUyxCqcWq4XaV7nVMpY5Hlieh6KzwQvV8%2FAi6DUEUJEwayRvARHW8d%2Fz0fBmnXY3R%2Bs7VU5nwPYOqVOK%2Blgt%2BiipsKijMTlP04dzG5wrnrt%2FX8TXvQU3mTar%2BcXDiIQXdqc76UCrCr5fp%2BXHn%2BGKw288uqimFa6An5BgdzkArcjy73Gzd8067u4wv76K7GPpBU41kGOnH57IlvuXsMT92386%2BHexZCq7kWMJkvTeNUDx%2FagfyCyLkh1gPHgMLSIysQGOqUBVGIy%2FJ6146vT8DCj%2F0K%2BTjN3NHt3Nt3VTiOa9K90SwijMiuP1Z7PmKdFU%2BADhODzccDU95QeleSTpxzOge%2BVjF9%2FwI8%2B2FFZoUHqbYC4TcQSsvgZuWDwwkVEzmUZf3qUd02gr5J2nUoaVNNsrGqGe8ilKzMygIdMmkGuohy2eTSSa%2BANkigAz3qasrJWqtM8lL9rRQ95Mlmamxy3rkPLhEyMGfCl&X-Amz-Signature=c75c96e445a63abfafeb389a582a6afdf6390994d924c37a3c209a46799ba33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYQN3FE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICY4IvqaeJgSGS2YNYFkCMvdXxl60Mwwwp7CnzODGoVHAiBf%2F18R5Uh8X14QkIAOVIJhMIwpSv7JtJgh5%2B8Rn7aRAir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM3U4hbN6qba4kNYMzKtwDlTHyZkfVZpbYfK4DrKkIGjoekWiPR7p3r8YBVXDRvaTNlXWFBkCb78cnbIwa4Skz%2FH9VIV7CjxSqXSxeX7551GB%2Bw3DBrPN7UR3Vd%2FFcvlD6AHdIEyhwDtgxdfgUw47fZNzDFOlsyMyB5Ke3luPn4ZEtfLhi%2BueK26QoDO8%2FnbpLqD9iQJrex4EwyCSPEP9wTLqRkSw4%2BCFmDANEAluSFEHH5QOOBTYUyBqkB2QviFatCTKCFX%2FYboDKXqtWnQWVfWYH1Og2obpV1zGPcJJH67cVrWoot1jg%2Fz6%2F4Q2rQYWHYzy019Fhwm6%2Bd6p4TTiH6ZHgTbgg1tzfE7HPfG4GbizhTeSvZk4e%2B2g9%2FzsxPixo2ozNKKICJYSOxzNXsVMyvIay7IOz0Xlwr%2B5P%2FH5MLaClITpeRO9jPsr05h5V1JUGtS8y0n%2B204PxPL8NHeBRMjy5FzGPUhRWxA8eUnRneDQkzeZnJ0nitTYLDB5TNyizbbyeefrhTOg%2BpdchGkq1o9%2FBDByUxAisDRPhubctuXLPf93%2FcDBmofQcuf1ZpG1GDeW9G5nm9XZ3Pp0gxh29hbN7vzAXbOC0YGGwtb%2FXB7v0S6PYTi9SCq12RYwXYBToBWNoCGzgHfCcF8owg4jKxAY6pgFQ8uCmLs4RcHLkFd4RMJmWcAQrkAQJiaRjluLT4BobnX8%2FjNglIUST932LnorCcKU2VBa1%2BdkfHEXyEZkLV4hsdQy5mV5020b0dbu%2Bx48HXVyFfd6dcP1gsnqUXeaNAQtP1z1UYtlztoNifuGO89RChIKcR0LLsURu%2Bf5Khk%2FWQeKRDdIXSy21KdmGRsDoedfCo%2F6K5ObnQFfHoYKrfFjXgGtxbNyN&X-Amz-Signature=798c403342e1401ab5b5679edaaa3a38f6d8efdbbc6487a50ad668009adca5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2O2RGT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG0Nb9kjN%2FYqolwL1g6zzQvr9TLhP7P1NpPKZuxzlx0EAiEA9fSbDcDKvNovD1KQ98xIaCVOfYKmAya%2B%2BhidnwAcUUwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFSsX9g26M%2BhDS0W5SrcAwlilNvi1V5yZ5ip%2FZNMEealYzdunWiPluGpAoIliL2pOgSHhJV%2Fw%2FN%2B2x0A9Vt0jUkXQHzsy5DKCrMVj7k6jYgI1DMqIsTrRuJhUHGX7LOBohLBpe0wgJOUAcFXQLz55OqScLbu521oQFw%2FhQzLcaHbxTrIUGjm4hnSEyNw%2F9zmT7sMQVsuGOJmYEUePT4wi4%2BM2ThtouDJj44dlaQqmThig2l3HWhBZpilpwcqctfptHMLjKV1A2rhAbjSn80Y6SXi9%2FqNh5xYOo6qOWcXz6d4UfGp5uurqJ1OmWG4UvDmh7khFP2Y1azShFWX9f7C8zFXHtPrDjOXUsTTBiOafw8R3fKu%2FKJsMFXFts7wxIExxj8mceu2%2F7BzW1PFDR2MLPLkLaP1TbE%2F3psHCbtKxyKwK5jBe94AMJt%2Bb2sQTcLgC4RFyjWbJO0Rc45ZZp9mGL7%2Bm05LlyoxzOFDm2CTH96zMCeOK%2B%2BUhw8UBH5LjUffoEDuHf88civtaKoh%2FaaAFZGDbuU6v6lpL0KuC%2FdJL%2BBK6FiWLc%2FfhJA7Tf5yXhOEWNMukJpvLDXLkTeehwlCttzwJ5dtpavtL67tEa%2BHL90JvszCoAqlz%2BRNpEbS7%2FsktITk9VPPhFH3USSNMI%2BIysQGOqUBZWWJettIixK1a8xX8eUEEvN%2BWGmYQIEfyDdtTQQtENLtGEdlT8IRrHDoifOtQRUgB8nnTR7tcDwEz5BXWVTyKcl4QHsaEgAuHCZ0PumEHpX8LUjYvJUPwy%2Btlq02nVmVwUYAIrfNSW1%2F%2BL4RSMFqZTZEOPguchhsqGpNI9bTazuqgXckSR4U4CJauxxF0fvJ8F3TM8jYoLHVzfV6BdzhSM9s%2FvIu&X-Amz-Signature=fb28942de9f129fc5cc0069976025106955c353b34691e381df1a265b897c596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJZAFWG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGJHijbPMg6coN0sAONRz7jFMdZQrmBM8q5HBcNGOBrxAiEAsABmAXwm5YOD3YXF%2B2tJ5JDTWD63%2BdSTYbmVeYRccEAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ1tX7IDCNVeLHNTCircA4xynZ0RMLUVdpT2ziVWUpY6bXjwRwDzjzah3bQ5e71niqbOhXtAi1NjmQx5Nwmo70i1kaDAmV1ONC7GzQiguUqmL93F2koecZbinaJM1ohpZWWeYtEPZawnQvkFrR%2F0B05gG8FULKUzaXW%2B7GinZbWaryVTmQke35bCCGuydNXauY%2FJr4gHWtF%2FTEdKVYihqHRAf7UQHZlABFtPec3SEjB8O%2B%2BY9Ds4XTIpk3CCPIflF6nJtafrMLPV8TLfUorx3XXbLawjvbjPdifznMKN7dtA6kTcZ43nyMzKl4QHojfa4nA%2FzmH52CYA0fVos9i8AO23aYCV45T6bp1ODXD4hci4g6ATbqrQU4mH0ZZLxtckg2rSmTyW7p6%2B79fTUqZdEzUyxCqcWq4XaV7nVMpY5Hlieh6KzwQvV8%2FAi6DUEUJEwayRvARHW8d%2Fz0fBmnXY3R%2Bs7VU5nwPYOqVOK%2Blgt%2BiipsKijMTlP04dzG5wrnrt%2FX8TXvQU3mTar%2BcXDiIQXdqc76UCrCr5fp%2BXHn%2BGKw288uqimFa6An5BgdzkArcjy73Gzd8067u4wv76K7GPpBU41kGOnH57IlvuXsMT92386%2BHexZCq7kWMJkvTeNUDx%2FagfyCyLkh1gPHgMLSIysQGOqUBVGIy%2FJ6146vT8DCj%2F0K%2BTjN3NHt3Nt3VTiOa9K90SwijMiuP1Z7PmKdFU%2BADhODzccDU95QeleSTpxzOge%2BVjF9%2FwI8%2B2FFZoUHqbYC4TcQSsvgZuWDwwkVEzmUZf3qUd02gr5J2nUoaVNNsrGqGe8ilKzMygIdMmkGuohy2eTSSa%2BANkigAz3qasrJWqtM8lL9rRQ95Mlmamxy3rkPLhEyMGfCl&X-Amz-Signature=7df36c19740c955365ab772a8287c0bff9ce71a585238f405329a51165df1e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
