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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=1f781d546b2929b10aeca94a6aae22d61b78896c977bd56e4c3623ffaeada8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=dc2215b4b449d89ec11ff1f42ee3bf5bfb899700d0756ddcf1561a0bc9211d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=3a48b56a037de27ec98b99d6b7efe7715e41d8154cf90eb2006e22d40cd9c374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOYG7IZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMlO9HrQWO0UjdYHFxcXfqOySmdMO23S%2B29NWnIk2iNgIhAI5veLi7%2BGvq8z71AMCTJTGKmSrESzTBSlU0Due5NZTUKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8EpNQx7DMXtgFxsoq3AMQSG0J%2BVZks7rh5e3P0CgH4ZXZ7b7d0uCu2yI1DainWbAwKOwUgZTe4J8yLIvqI69U7GbtZh7LewAeSt%2BdvzLyxGlUxSSQiZMYoSwaMSU%2By7AQkXk2Me3fd8DYlpkRWyfwgh%2FmNdgL0XHWH4L1rsw8%2BXsqAt%2B34lf0EiM0ifZjcmhFi9Dz5VxUchQsIGLy1aDztwBeizZtNADL5Gr9U89zHfwwsrMMNQQ9bgfWW%2FggZsmNXCPPinOkvpzT1Gj5OcJxmvGD%2FSKLU69Zhm1YYiQdpGm0GqX0buthJEs5RSLyqOxtKHeLQilqjGK6IVpQIo9IwxT8qdM3%2Bb7U%2Ffa8fXbfSKXRwwm%2BoAqGR0S8b%2BFlFwk0k1XGgIu4YyBSrg%2FVPCaA2h8qoOQmjJhKByNDZDRFvyAC8Tx2P%2BAAWJ2IrqlXV9Ra4kejoTmMYsa7LiiUuRKNQDJnIM7tMknYgUG14ZBRbkvVO31daqieG0atJhwrDliUs%2FzXUu7w%2BREMJ1N070IZkPchhU1aYJnIq7lamaT4oxn1LPqTCekuaw21TnzNRyrWJTpFJFBY%2BRQQhNgK%2FZ%2B3cB1sOQbZtijpNG%2BOEActqBKV%2B9jAHeSVBQYdcvWaUpTHh2%2FDHMg7%2B%2FMEHjDGx7zEBjqkASaQPfffyJBiQ84I7vptkT%2BtOysO%2Fk6A1s%2BkExbjTbVneG57xsSbl0L8FpiK4K5VfyN5%2BMdnGhAlad4Gak%2FHH5ScjqmuxOVVa4N8gItQ8%2Bo3YMY7iPsESDYilowTLv29WfaWAyWEytz6tJe5%2BZYoi6bL0h1inmviz%2BD%2FD7MCJvX%2FnomVIvstD2fQMcJENPriz3UtqgbPx4VaA%2BixYSByqMHbpJ6i&X-Amz-Signature=f16310e6a4e6c758229482b0d60f056bb93601501d6449320a4e2cb594855c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEN2AXME%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWJvY6BA4iMW41zDyEZRL2cpcPtb1esV1mHSVP9K1Y7AiEA6wCczgycDRe0KBdvlmu3rs6g8qdqWgEK%2FY3HRPUfUMEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNRq7MICf%2Fgq%2BOIAjircA7xoDiAbRIl2JPL16nA68Eu5xyCIUcreNAx44M2Az12xqqt7B4y6ulEDgKCpz3gMRs731ei%2Bu1DUaGFPhmJaCTXwUmsG%2FB5pAubLVp7Vtp5Axd5Oge03rpzpGASxeM9CyfFXXLksYuL8GwJZPf1hlrGUtwfWT71ZJUQZes3AT%2F3rQPeMNyeDf3MC7y%2Br5%2FgFiWD2sbg46lyvjJ363jRuBPS0pKLOqVTFL19YxZSDmIkEcP4K%2FEN5r%2BqS2b46a5ScgrWjD96voOU6IsvCRmKCY4HXSYbbWyKqagr%2BxETFMiRDIlRXnrrN164eduOmsfUMyMlF5J7R%2F3uNVFzf3L4zNQJicijOAXCiBTEASpeA9XEtF1tKLeTS7oIwAPeU9aqJowVpTArSikC1Hwylc8DGhI6Zl%2BOY%2FpcQT61GVIcgcp5h5X7JtKwfppjQxSZzyst9aVVYJyE6K5VKF8spl5B2oEPFdxDSFfQhhDsZwW041%2Bh91ZygDE7avkHKAFEn3quLE25LL6wRCTI57Ak%2BPjQ15e8%2Fa%2BE8C0dGkpdtlrD%2BEpzZuujZoO0DjS4QcCF0%2FY2H%2By4CAMlLls0W2MNr8o7ROtv1sls1mHPbtpUvGcS38dCL3XWVm5m4gKGplc8jMOfBvMQGOqUBn%2FjAPjJgxwLMui2EQSlnqN%2BUeu%2F15prlQztkfftpxKeCWLZF%2BVnJzTVUUT6NUEFQqe9XdlJOC21KhyHGU6S1nm5AoTh8faht43x7qb0qDtMsTU5NIl3EGFI5uN7nsKY%2FTpfPRvnPUa06LM1ldOiBlntXOfgvx1mpBj3nHspwHv1G%2FLYs34Xokiu0hF%2F8OxfFEf8LA89BO%2FFo3jAroCFZ%2FwBDhEhL&X-Amz-Signature=020ace2752372643aac99af28e220b39d37304ae4a486b955c7ca47fd6978108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=81475c282dbc023ae98735b32d3688518ece4e23a8994ad478cbb229e364f7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
