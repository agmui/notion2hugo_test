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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUT2E45%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy564ifSiD%2FluSf742yaoOPrWNQGuUPB6jb2sdXvH16AiEA7KzzXpkw55vxw%2B4CS51xIYDn4Re%2BTO3ORffIC6TepzIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAX3TBC33J8%2F%2BsY5PSrcAwIvtTS834rU7Kia6SPnGstPwEcP%2BXGjHz1U0y5R0kBJPnPbvclHiZyVFOcWPuGOoSnYTJupWsokL%2FITT1E%2Blccu%2BPj76S6jwSV04xN19cEFxp%2B06cJhORz3%2Fmt2QfhIL3NzNZraOkjmWsyZnEokj8SCOl36QJpFEU%2FPQWeSIlEI4Hqr%2BqIir7BpckeOzfkGI5xzk%2BNzt4JMZUOP16dmxFow4EbrNP9ymKUansRdvVeI1w2Mdf8VykCAeAADj7iiPE%2F3EAB6GNKd3HuiXqWK3erlRSqZvyQmO9IdxE3hT5eT%2FJ0y3KP0TfgwkoYgd16vbQOkTmcL7Ds2v1cvjoO5Q0you0dGQmyGHaxSgRJzqO9GcWJXlbyGJ47tqUvuREyszTAImGojXF%2BSG7lM8H05gYLOmQiOrMKSYmnjrfljhftaip7gZnsHX%2F1I61honL8BYxj%2B38gPPmwzdf83fS%2FeQrQjAYICIXsUGspUEnXr49Fn5gBALmj%2B8aofNf4PfTeWLSwPzeOiH5O%2Fe%2FLTpz92X%2FFfjnxNSJmQUukke8lpUGOIM5EaSfSEXDGE4QoQitgl3gaCKwRdvnIoXx2JQFrnECB7QH2dazybwtecX%2FdiBqOOCYs5j76Ru45GsF7MMI2hnsIGOqUBzrxCisFi%2BCWs6ZU%2FFE6mxJfjTyHYe5UVWdAiJkslxJvEETWjIaq%2BG02tZ4XiIMoDbxlG%2FCLbbQEtSRlcj6YODlwGWJD%2BYtl9z92LB6vnLTEUcZQm2ehBX%2FQaGY%2FPRdXlsix8FzEfk2kLt1VElkzJUf46IOA4o4FWCfEas5UFmIpSNsDJ0pDVoGhFcmPrfUK3O9slIQEFt%2BMrh4BR4pHDAtnUCmrC&X-Amz-Signature=1ae7db6cf451a021f8844bdf746c7dec21c75713ab7dbcf531cc594d8116e934&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUT2E45%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy564ifSiD%2FluSf742yaoOPrWNQGuUPB6jb2sdXvH16AiEA7KzzXpkw55vxw%2B4CS51xIYDn4Re%2BTO3ORffIC6TepzIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAX3TBC33J8%2F%2BsY5PSrcAwIvtTS834rU7Kia6SPnGstPwEcP%2BXGjHz1U0y5R0kBJPnPbvclHiZyVFOcWPuGOoSnYTJupWsokL%2FITT1E%2Blccu%2BPj76S6jwSV04xN19cEFxp%2B06cJhORz3%2Fmt2QfhIL3NzNZraOkjmWsyZnEokj8SCOl36QJpFEU%2FPQWeSIlEI4Hqr%2BqIir7BpckeOzfkGI5xzk%2BNzt4JMZUOP16dmxFow4EbrNP9ymKUansRdvVeI1w2Mdf8VykCAeAADj7iiPE%2F3EAB6GNKd3HuiXqWK3erlRSqZvyQmO9IdxE3hT5eT%2FJ0y3KP0TfgwkoYgd16vbQOkTmcL7Ds2v1cvjoO5Q0you0dGQmyGHaxSgRJzqO9GcWJXlbyGJ47tqUvuREyszTAImGojXF%2BSG7lM8H05gYLOmQiOrMKSYmnjrfljhftaip7gZnsHX%2F1I61honL8BYxj%2B38gPPmwzdf83fS%2FeQrQjAYICIXsUGspUEnXr49Fn5gBALmj%2B8aofNf4PfTeWLSwPzeOiH5O%2Fe%2FLTpz92X%2FFfjnxNSJmQUukke8lpUGOIM5EaSfSEXDGE4QoQitgl3gaCKwRdvnIoXx2JQFrnECB7QH2dazybwtecX%2FdiBqOOCYs5j76Ru45GsF7MMI2hnsIGOqUBzrxCisFi%2BCWs6ZU%2FFE6mxJfjTyHYe5UVWdAiJkslxJvEETWjIaq%2BG02tZ4XiIMoDbxlG%2FCLbbQEtSRlcj6YODlwGWJD%2BYtl9z92LB6vnLTEUcZQm2ehBX%2FQaGY%2FPRdXlsix8FzEfk2kLt1VElkzJUf46IOA4o4FWCfEas5UFmIpSNsDJ0pDVoGhFcmPrfUK3O9slIQEFt%2BMrh4BR4pHDAtnUCmrC&X-Amz-Signature=7441fcb4ecc02676329f710123e9aafa2f0c592f55e6ce6337ca8b20057de28a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUT2E45%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy564ifSiD%2FluSf742yaoOPrWNQGuUPB6jb2sdXvH16AiEA7KzzXpkw55vxw%2B4CS51xIYDn4Re%2BTO3ORffIC6TepzIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAX3TBC33J8%2F%2BsY5PSrcAwIvtTS834rU7Kia6SPnGstPwEcP%2BXGjHz1U0y5R0kBJPnPbvclHiZyVFOcWPuGOoSnYTJupWsokL%2FITT1E%2Blccu%2BPj76S6jwSV04xN19cEFxp%2B06cJhORz3%2Fmt2QfhIL3NzNZraOkjmWsyZnEokj8SCOl36QJpFEU%2FPQWeSIlEI4Hqr%2BqIir7BpckeOzfkGI5xzk%2BNzt4JMZUOP16dmxFow4EbrNP9ymKUansRdvVeI1w2Mdf8VykCAeAADj7iiPE%2F3EAB6GNKd3HuiXqWK3erlRSqZvyQmO9IdxE3hT5eT%2FJ0y3KP0TfgwkoYgd16vbQOkTmcL7Ds2v1cvjoO5Q0you0dGQmyGHaxSgRJzqO9GcWJXlbyGJ47tqUvuREyszTAImGojXF%2BSG7lM8H05gYLOmQiOrMKSYmnjrfljhftaip7gZnsHX%2F1I61honL8BYxj%2B38gPPmwzdf83fS%2FeQrQjAYICIXsUGspUEnXr49Fn5gBALmj%2B8aofNf4PfTeWLSwPzeOiH5O%2Fe%2FLTpz92X%2FFfjnxNSJmQUukke8lpUGOIM5EaSfSEXDGE4QoQitgl3gaCKwRdvnIoXx2JQFrnECB7QH2dazybwtecX%2FdiBqOOCYs5j76Ru45GsF7MMI2hnsIGOqUBzrxCisFi%2BCWs6ZU%2FFE6mxJfjTyHYe5UVWdAiJkslxJvEETWjIaq%2BG02tZ4XiIMoDbxlG%2FCLbbQEtSRlcj6YODlwGWJD%2BYtl9z92LB6vnLTEUcZQm2ehBX%2FQaGY%2FPRdXlsix8FzEfk2kLt1VElkzJUf46IOA4o4FWCfEas5UFmIpSNsDJ0pDVoGhFcmPrfUK3O9slIQEFt%2BMrh4BR4pHDAtnUCmrC&X-Amz-Signature=e90f6f48536244b6f01c2f90e853c6a7d61e8ce016d3511fc747ce55a872500f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPVQHEG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKQBw6jETPGv0%2FwvZXGf2K0%2Bnta6vaIET4C34pSciStAiEAp7lZN2pXXNEPmGSAsN1OQC2LQ1v%2Bk1PNrOOmMhTEmBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbl22DFCwGEgzPdEyrcA9duzE2%2Bvya2xN6abooPtauCM4nszvx61CKrvaaY7pKV1CM6WQP7wtDiplHqZp2JeDsi0aO%2B0a1g0wDyGbeBras7xzShFYK7AaajIPXlj%2B8JHykFPIWGL5WLA0M8h7dkL7uyZRDHGONZa%2BgyKiPn83Qtsnr%2FfUHtn3Um6HgGDxdp4q%2BsDSVowdpg45PTXaQYOnFEk37xySRMVSOAGx2Po2wsKYPjeofwYqSM1Q3qcyX2ydUxUG2aKggM9JWzJ07jiPSiGZZWE9cHQpARpIfkLs%2BhCH%2Fq5JbnMM7UFrzgn1DaHLivKGtUFThWmltfE05c8KuL7aBmZmwmLRHs63HY%2FhQw38%2F%2B2wXH8dr4Au33bXhqjLGhbu8mzKB3Ss0Eg99LZBnqfKnl0CHiGnkn6RUckXPXydu7AcoRNqfc19FWU0KfyjhW2p2KerRbiD%2FHy0B06f7iBlhNGUymr42oRV4J61%2FoXjHP33%2FsINwCNTZoDHjNOlpU%2F2y556CAQjJ43vo4Nqw6OuXFT5aVF94WRJPHst8MJyavHE4g2J4e50PLB5nekmZdDE3kvp3xKwnVTGQat9h%2BnDv0RZW1uEYs%2BQHb%2FjqIRwXuuI8pEwF3umtbGOKedrJypq55SFi1ZQGtMN6unsIGOqUBc9s0KMu7Ur9dfpzMqLZ7mmkCvDrCSB8VKxZ6HZ1EwXoxp2xXAPc4wglyDwsLwd0DcvQ%2Fr5srfzkp%2FK4O8QNmWi4QMA%2Bk%2BBcFinGx%2F6zkEFsCJOoNkRnqs6mUVhc43Ku13trBtTBF8y1A3svUZFvEV8g0scxRxEma2Xr3tcdHZbXz1rkjPa5yo2kyLFN89gCAQ%2FUM9IxVlsLu9baiaz5R%2FAtzHfPW&X-Amz-Signature=6fab956d75c307085157afbf5946e005f0aadfc0408e0722aeeee382f3d719d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LDLOVCA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5HvXr6gD%2FRoTyBQtQMqEQbarnlywO7hTs6d81cVnuiQIgJmGiMgeUiAw9ymnhAbpX5KMvz6uCcCey4isM1t9MeuwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPPMJblaeM%2FQfNnxSrcA3ESQKiNhmvZoyNOcUQlTKTXAp%2F2X5MIt0IBIDHCRFw2tvQfsdWy8WnksqCRwJyo7M2RtRqUCD52bgtzT3EBzXM16%2BuN%2FHhqIpJAEfgZAnEvF1ZeOWU50cTaYcJkQEytVkcrzig0HnnwkP8bTsiFZ8hYMVSE3YTyjFjZMKmC00PJKJTag2TbvhIgTEC8Toa3PajZS8m5ZhUsACtMwy%2FwsVhngFY1Ksm0KWZGrw19A0gBQEwjQa0Jjo9hYVx9IGs8H5XAcjA5zkDpwqnWW9g7Xy7isc7QmBtiPUWAl4GIodeUiXhb2lofh7ulF%2BOpiLW422tLO1BqspcLSYZaicHoxA4uw27yZubJqn3zX0PGYrLjVaTZyFj5d0PjkT0HzxjRIqGMQcJie%2Fkf1JAl0Bn7yKZ2rfH%2Bu8TY1Jkkpkin6%2FmwREHgW9SMAiFd1TnXOKPRNz5HGE%2Fr3bWZOtVXdaKjQx6SsMmJ4%2BBOeros%2BC3xqki9%2BODD81xa%2FaVsCf8mEp9oYNipQn2yGdaQ3UPpl%2F39bSdPtRxO3DRHao7D4HBUtzjf0pSFuGvJxf87z3QbI%2BJNk8rBXU6nFCioI0HBibvY4Pj%2Bicn8k8ZWrlvd%2BtBzrMLJEPmD%2FSgBy6APxdA%2BMM2gnsIGOqUBzeHmWcd7fO4TqyDihkoNo7fmRZJHaRxMdveNowhW1sYJ1a6E69g9dhcFUO%2FiWeBj2EGroq1ZkV5%2B9sGSN5s5maItb%2BE4VD9TgFWrdyrNvkB0snPk0XPL%2BQVh%2BCN8zTqZdOwCIBcihuSJ7qW51XNiSX2LpCtXkR3jzvb09c%2FBktWe2JPpQ4N279WFwOzlJTaUaK7szCo6Sp0hK6RqfgJsrj0gC4J4&X-Amz-Signature=34995e0266bf1cb6cccdecb853e658e577809d90dbad0dc9d3d8794ec941e95a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUT2E45%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy564ifSiD%2FluSf742yaoOPrWNQGuUPB6jb2sdXvH16AiEA7KzzXpkw55vxw%2B4CS51xIYDn4Re%2BTO3ORffIC6TepzIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAX3TBC33J8%2F%2BsY5PSrcAwIvtTS834rU7Kia6SPnGstPwEcP%2BXGjHz1U0y5R0kBJPnPbvclHiZyVFOcWPuGOoSnYTJupWsokL%2FITT1E%2Blccu%2BPj76S6jwSV04xN19cEFxp%2B06cJhORz3%2Fmt2QfhIL3NzNZraOkjmWsyZnEokj8SCOl36QJpFEU%2FPQWeSIlEI4Hqr%2BqIir7BpckeOzfkGI5xzk%2BNzt4JMZUOP16dmxFow4EbrNP9ymKUansRdvVeI1w2Mdf8VykCAeAADj7iiPE%2F3EAB6GNKd3HuiXqWK3erlRSqZvyQmO9IdxE3hT5eT%2FJ0y3KP0TfgwkoYgd16vbQOkTmcL7Ds2v1cvjoO5Q0you0dGQmyGHaxSgRJzqO9GcWJXlbyGJ47tqUvuREyszTAImGojXF%2BSG7lM8H05gYLOmQiOrMKSYmnjrfljhftaip7gZnsHX%2F1I61honL8BYxj%2B38gPPmwzdf83fS%2FeQrQjAYICIXsUGspUEnXr49Fn5gBALmj%2B8aofNf4PfTeWLSwPzeOiH5O%2Fe%2FLTpz92X%2FFfjnxNSJmQUukke8lpUGOIM5EaSfSEXDGE4QoQitgl3gaCKwRdvnIoXx2JQFrnECB7QH2dazybwtecX%2FdiBqOOCYs5j76Ru45GsF7MMI2hnsIGOqUBzrxCisFi%2BCWs6ZU%2FFE6mxJfjTyHYe5UVWdAiJkslxJvEETWjIaq%2BG02tZ4XiIMoDbxlG%2FCLbbQEtSRlcj6YODlwGWJD%2BYtl9z92LB6vnLTEUcZQm2ehBX%2FQaGY%2FPRdXlsix8FzEfk2kLt1VElkzJUf46IOA4o4FWCfEas5UFmIpSNsDJ0pDVoGhFcmPrfUK3O9slIQEFt%2BMrh4BR4pHDAtnUCmrC&X-Amz-Signature=e5dce0f06e33bccec8d81a963e2ae3ed75867e6327aa85360363fc1bf99a404b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
