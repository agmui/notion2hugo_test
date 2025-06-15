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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIIIYC7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFgLYkmxJmldVRix2NIfcUKPAuGKOYP6Q8QuTzfHtdbsAiEAl%2BpKYq22%2F4%2B3fVFTawNK0K8IIWI0uGEOiCLHKEEGwjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAxyqm%2BoHeb%2BqyEBuSrcA7myijwnwCNAC9OePAe6xTiW%2FkYB%2BFDrgzFnaQbHyojtSl%2F9tAcaDUOkoSWar2s4zZ5rvjAFmXG%2BvH9Sge5x912bf%2FXdpknbb0pbeQguWOQQC1P7dqkaB1OCJFyiqZ%2FoomiwyFyU01Yylep1F1V4oP2%2BWmEI%2FUa4n%2FLaIPw9vXIbEPxpHockmkaFVNgAiqmpogIHG%2FkNvv0nGTApZB6pME6fBBfyRZy7H5gOR%2FOjnvAPBxbSfglSrRBIv6R7NJs%2BOaeaI4qxsQLy8e7sFuzyvx2OFeouz8v8BMPnOiRyrD2Hfe8W0D7aDIlt%2F%2BzEnGAkaDWo1dTOA8H%2F7JEP%2FUoDRPnq2j7FEcs5lBA3AsgMPh43yN5tQkcxMc8pmsvH%2Fbcw%2FacF8X4kAii3WFujqBncOSATZJo6HpDXBo4mPMU351WeGuMvfMPXInF0b4naisezNxPXtMoBQjA5nwyalCzIfdBM7U7P1zb8kLuv9zTl5Aa5iFOoBGAM25mJxILQzqWSCB4%2B8pFawo7ejJhfCHI%2BtVXEFpypCJscJaEuuKkbUlLd2PJdUsONRpDvj0CzuGQkyRljrWgamJjAc38VYWLqojwVfoJ0xdoyqP7ArNeZd9NdbIzMRyTN9EtUtNTtMIunvMIGOqUBE6ottn7MK3t4zDu5LcZW6SytZtQrzIwKfrYWvoP51BeWiZHEq%2FndtO2IFGKNC8c36bKw4UX6aLVfcL2fFsj4yjKGlqAcH9q2z0nntGIW8kWcgu10cDATGujkvO5eEqHSdG%2FVxlW3ubHTJFpdaeQDEB91rhlxp9bit2TaBzyaYI5%2B34xkDQthqDDlIJWq6i12ZNiq5IDJbvMF6yKVibfht7JCtnyZ&X-Amz-Signature=10352cc1595a482b8e7e0538abe3d364d6e390011531455a2dd9f7e2e9e7cb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIIIYC7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFgLYkmxJmldVRix2NIfcUKPAuGKOYP6Q8QuTzfHtdbsAiEAl%2BpKYq22%2F4%2B3fVFTawNK0K8IIWI0uGEOiCLHKEEGwjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAxyqm%2BoHeb%2BqyEBuSrcA7myijwnwCNAC9OePAe6xTiW%2FkYB%2BFDrgzFnaQbHyojtSl%2F9tAcaDUOkoSWar2s4zZ5rvjAFmXG%2BvH9Sge5x912bf%2FXdpknbb0pbeQguWOQQC1P7dqkaB1OCJFyiqZ%2FoomiwyFyU01Yylep1F1V4oP2%2BWmEI%2FUa4n%2FLaIPw9vXIbEPxpHockmkaFVNgAiqmpogIHG%2FkNvv0nGTApZB6pME6fBBfyRZy7H5gOR%2FOjnvAPBxbSfglSrRBIv6R7NJs%2BOaeaI4qxsQLy8e7sFuzyvx2OFeouz8v8BMPnOiRyrD2Hfe8W0D7aDIlt%2F%2BzEnGAkaDWo1dTOA8H%2F7JEP%2FUoDRPnq2j7FEcs5lBA3AsgMPh43yN5tQkcxMc8pmsvH%2Fbcw%2FacF8X4kAii3WFujqBncOSATZJo6HpDXBo4mPMU351WeGuMvfMPXInF0b4naisezNxPXtMoBQjA5nwyalCzIfdBM7U7P1zb8kLuv9zTl5Aa5iFOoBGAM25mJxILQzqWSCB4%2B8pFawo7ejJhfCHI%2BtVXEFpypCJscJaEuuKkbUlLd2PJdUsONRpDvj0CzuGQkyRljrWgamJjAc38VYWLqojwVfoJ0xdoyqP7ArNeZd9NdbIzMRyTN9EtUtNTtMIunvMIGOqUBE6ottn7MK3t4zDu5LcZW6SytZtQrzIwKfrYWvoP51BeWiZHEq%2FndtO2IFGKNC8c36bKw4UX6aLVfcL2fFsj4yjKGlqAcH9q2z0nntGIW8kWcgu10cDATGujkvO5eEqHSdG%2FVxlW3ubHTJFpdaeQDEB91rhlxp9bit2TaBzyaYI5%2B34xkDQthqDDlIJWq6i12ZNiq5IDJbvMF6yKVibfht7JCtnyZ&X-Amz-Signature=5dd66cebfea6c86cc6b0c3dfd7059fdfd5ec2f0705370de71269fe7d2bc282e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIIIYC7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFgLYkmxJmldVRix2NIfcUKPAuGKOYP6Q8QuTzfHtdbsAiEAl%2BpKYq22%2F4%2B3fVFTawNK0K8IIWI0uGEOiCLHKEEGwjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAxyqm%2BoHeb%2BqyEBuSrcA7myijwnwCNAC9OePAe6xTiW%2FkYB%2BFDrgzFnaQbHyojtSl%2F9tAcaDUOkoSWar2s4zZ5rvjAFmXG%2BvH9Sge5x912bf%2FXdpknbb0pbeQguWOQQC1P7dqkaB1OCJFyiqZ%2FoomiwyFyU01Yylep1F1V4oP2%2BWmEI%2FUa4n%2FLaIPw9vXIbEPxpHockmkaFVNgAiqmpogIHG%2FkNvv0nGTApZB6pME6fBBfyRZy7H5gOR%2FOjnvAPBxbSfglSrRBIv6R7NJs%2BOaeaI4qxsQLy8e7sFuzyvx2OFeouz8v8BMPnOiRyrD2Hfe8W0D7aDIlt%2F%2BzEnGAkaDWo1dTOA8H%2F7JEP%2FUoDRPnq2j7FEcs5lBA3AsgMPh43yN5tQkcxMc8pmsvH%2Fbcw%2FacF8X4kAii3WFujqBncOSATZJo6HpDXBo4mPMU351WeGuMvfMPXInF0b4naisezNxPXtMoBQjA5nwyalCzIfdBM7U7P1zb8kLuv9zTl5Aa5iFOoBGAM25mJxILQzqWSCB4%2B8pFawo7ejJhfCHI%2BtVXEFpypCJscJaEuuKkbUlLd2PJdUsONRpDvj0CzuGQkyRljrWgamJjAc38VYWLqojwVfoJ0xdoyqP7ArNeZd9NdbIzMRyTN9EtUtNTtMIunvMIGOqUBE6ottn7MK3t4zDu5LcZW6SytZtQrzIwKfrYWvoP51BeWiZHEq%2FndtO2IFGKNC8c36bKw4UX6aLVfcL2fFsj4yjKGlqAcH9q2z0nntGIW8kWcgu10cDATGujkvO5eEqHSdG%2FVxlW3ubHTJFpdaeQDEB91rhlxp9bit2TaBzyaYI5%2B34xkDQthqDDlIJWq6i12ZNiq5IDJbvMF6yKVibfht7JCtnyZ&X-Amz-Signature=c12de2c277f38e2c14c5ec28a5d01da6418f3226f8e4ac9af0c2f2ac912074ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGR2XMWG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGBi38Uu2C34Jb7y279ALoVKMPb9wzWxA%2FvWkyxaZR2%2BAiEAl%2BiOc5Y1YTA2rxn8EoRfjXvRgH%2BI1qmF33VliGY6ZGIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGe9H6oGs00BkluRgSrcA%2FdrrCYNttrW6l5y9kPjHOzgbt1eAI%2BMKQpDAanYCr8hFfXuTpWXeInkaD0Ff1v2jhoR%2BNCWUxJOqtOcNs0V754WJ3vV4ObCSsJZVgqOX6BApOiRy2GZdT7MTNDHUUxLuPskp10jDbgwfKP1%2BHdn4bLwgu1jSLa14Dk7LyV6D0MnwpYpn3QnVvBjJ8KBvBMlWuNXl56lQZ5H7C7RJGSjy3bXoMqN121M6w0xXzib9JC1wOJcjQBt8Tpiw8x1Tmb29IepaM3rCoMUo5VkRp1BIpGiVL3zYK6LrJxohdoRWkjY3ZCl7%2BlD27ZftUXQJR7lq3VM5ASYiwld09E0kmTV%2B0Fwqw8xfNl5yq4%2BsiH3pHOYEJakVW0RPRxcu6NHx9vEUftOsrLTgeZeYkl5mQiS6YMVhQHfS1PuCexKxj06WcfXNvxiAMWkCuwV4JuEw9zOdWcHVeHmPxQ%2FqBxSHrCAjvcahjtahKpw9nQjG8MpZCfl7HbBLSnR6HnvF1hlVQx0q5HzrXYAY04TwbJTP%2FuRw0RxR7MxJkv%2Fu6MJVbg5Wb7PwZVUevOk%2Bj4YPE4IdJbMGqNteLAQETAB%2Ft9skrXcQBcHT6Uy4M5Z5m6tvUKXcnNvE9Bo6u9I4J%2BTx%2FJdMMynvMIGOqUB4PwF%2BnBfSI8mSmu7xgSHV03EMvU9BZ9XEy5IO%2BtJNnhlBORDan6gzCutdgbdJvL5Ru0mBCOPr4t%2BWroEavx1IMB4WcG5B%2BfMC5v8qr3UVKMAB0qMHzmAi3Ka4orWEsJWuc3TVszCAbalYrR5GT1Oe69TUu%2BEyE%2FqfJcDGUnI%2BFw1oAxL8BSRLe3RPCtLnSjs72kVVtRhtBX1M9BtIFidw5Bq%2FRT6&X-Amz-Signature=44aec47552fc814abe91a93b4a2a36fa1f2c3d4df49a1adc1e453db564c1d26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVTNEDO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEQSJPAev%2FqnLbbChmAMTK4Se%2Feg0Tx%2FyrVu2zSaIROPAiBNLsHTxQFGgvYihCZRVm76B4uA60F%2F%2BckoJRPj8eil8ir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxWzvSU%2FPhxSLfC4aKtwD1XesWSfy4k2OI%2FKunXfCx9Q6YwSUdeUEevyuKx75oTuEdps%2FoymETRjeZTrkd%2BUCs32URP2uS3fNxe3Jip70dM%2FesHLDHK0JJfQdpKoH4%2FzyNZ4pTsBDLCzs6RDwOSPDzOjghq%2Ba4lbxwApoRgoVPXcYQ4hwkSctLz74ugY9WIGGrKged2Ybgn%2BVQEvfiJeUajai0tizb21KriCteqfTr4If1ZcKfYKR%2FrdMwSDV0UjRXTpnam1AvoajTBRr%2FlmvqIdra0nl4mVqnYKw2jX%2B9MJDc3BymI92L0SEkUj5%2BoNrjvYlDarcDKhbdKpOrmUi237Xv5YbH4sY9kYLPxJaD62ui4j0bI121t6H0AUyrqPqy9lYAgwDIudWUOEk5hp5wlOj0EdDN5ALxKCpRnfkSFdf1IwL6pXnssho6kTcBKAqYTE9Oo1U9I%2FQELFEYaVuBMktut4p3b9cr%2BIj4q4Cz77vdJyoOPhErFccnmiPR%2FjFiseKb2NCj%2B3T1OgRiW3rJs1bkVw0OBeT0UN4OKL7Vm8e%2F6vlCDYd4hNOKJcc%2BBiI0sJVbrLpAeFAXXXzCDGk%2B2Oji%2FUPJVGAEFS92C7A1V2732B3dRe4zsUHEIZp6QHVZ9F91D7m%2BZoftC4wrKe8wgY6pgF70dr%2F88msbj%2Bn1EQtiVWsZcrPdUSA0IXG7ZjKmNnfWDdxx6xH5vVE0yYgrWs1G%2B%2F0rhueXngqUzqUlAtxQMmBrt%2FtLJii8Ry1zLj%2F1j4CZkrFAYODP5BxxkEltT4FqgnciY5ZyTesE2o6tq5Vwn4sm4UZozbXh%2BZXi6V7%2FuBIoz1dluOGItPFfLVE6yyK0ShLDziMR2Z1nHE%2B1BOajIB21wYMfCmN&X-Amz-Signature=5a840cac97e1d7cee493dfc3939446c61b9139535213d83e644885bfa7c7f5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIIIYC7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFgLYkmxJmldVRix2NIfcUKPAuGKOYP6Q8QuTzfHtdbsAiEAl%2BpKYq22%2F4%2B3fVFTawNK0K8IIWI0uGEOiCLHKEEGwjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAxyqm%2BoHeb%2BqyEBuSrcA7myijwnwCNAC9OePAe6xTiW%2FkYB%2BFDrgzFnaQbHyojtSl%2F9tAcaDUOkoSWar2s4zZ5rvjAFmXG%2BvH9Sge5x912bf%2FXdpknbb0pbeQguWOQQC1P7dqkaB1OCJFyiqZ%2FoomiwyFyU01Yylep1F1V4oP2%2BWmEI%2FUa4n%2FLaIPw9vXIbEPxpHockmkaFVNgAiqmpogIHG%2FkNvv0nGTApZB6pME6fBBfyRZy7H5gOR%2FOjnvAPBxbSfglSrRBIv6R7NJs%2BOaeaI4qxsQLy8e7sFuzyvx2OFeouz8v8BMPnOiRyrD2Hfe8W0D7aDIlt%2F%2BzEnGAkaDWo1dTOA8H%2F7JEP%2FUoDRPnq2j7FEcs5lBA3AsgMPh43yN5tQkcxMc8pmsvH%2Fbcw%2FacF8X4kAii3WFujqBncOSATZJo6HpDXBo4mPMU351WeGuMvfMPXInF0b4naisezNxPXtMoBQjA5nwyalCzIfdBM7U7P1zb8kLuv9zTl5Aa5iFOoBGAM25mJxILQzqWSCB4%2B8pFawo7ejJhfCHI%2BtVXEFpypCJscJaEuuKkbUlLd2PJdUsONRpDvj0CzuGQkyRljrWgamJjAc38VYWLqojwVfoJ0xdoyqP7ArNeZd9NdbIzMRyTN9EtUtNTtMIunvMIGOqUBE6ottn7MK3t4zDu5LcZW6SytZtQrzIwKfrYWvoP51BeWiZHEq%2FndtO2IFGKNC8c36bKw4UX6aLVfcL2fFsj4yjKGlqAcH9q2z0nntGIW8kWcgu10cDATGujkvO5eEqHSdG%2FVxlW3ubHTJFpdaeQDEB91rhlxp9bit2TaBzyaYI5%2B34xkDQthqDDlIJWq6i12ZNiq5IDJbvMF6yKVibfht7JCtnyZ&X-Amz-Signature=4a0c4169404bbe0457356f9b1330251e168c6259c683d888a2ce07d8373cd370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
