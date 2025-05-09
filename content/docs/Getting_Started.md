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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVI7XEYE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKhmkSjSM7p3kQGndGIdwNu4Ns2qPEQSDb%2FI3x9leHSAIgDcfkcbi476fYjcnW%2BS7hJEviw8A5PZc5LGUhTiWUIrYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArF1JD2GKlu%2BMB8yrcAwD7siDHg5Rc9zA3Iyho8tGAO2oK7en7lEIQ6qDupk%2B8U5ZclJIJWr%2BVsKK0%2Bks58pCQzvV4Uc3UpK1bHvA5lzkOhmSiiyzf8eDiWF2jkVNnvXO7GQpfbC6xdbEv6lQ%2F4TEa9%2B8HQfg%2B2gWAzglJ6l2JwLN1trR1yUW%2FJUcYH5ncMZ3VQtnGs32NqgggZiJAGZdBWQwUeRrdHUwfjjvpgx8o%2FkU%2F8W7J5ywZZaFp0XJ7GtS2Q37qHVmwL9%2FWKYoF9gxPQWETBN0nzJCqHMrwmwj7pZKlxQIGpYOUc2%2BdKRKCQ9U85lrzr8MZ1m8HRNPIPjzc0PDghz%2Ft5VT3xc%2FjumxQ25FpV5CH%2B81Nt05qtQzcDYqPqvCHicOVVE5Jf4N7EoYvDZpyD%2Fh5Z3l1xEiJABBprbnHjpBpCjOHt49JXIv2aURdko06oDmuj6Q1Rqqg%2B%2BrNVHpjWt8LiUEm%2BNadPMZciwdS6%2Bex2eCoWonUzYlomezgbuCAW%2BdbDoCyxHcVKQXWZWsAtN%2BnLnziU5G%2F%2Bs5ba75G%2BRAWS0qw%2FGPHuRoFJD189Yd02u%2BN6E8aFR7ngxdiYHkteX%2BIWqUSCNgjFP4fun%2BMdeUGk2I374KgSvacw%2B%2FmnvvQ9GzNFravMKnw%2BMAGOqUBtIR6usZ2vKCPCajls3CQ%2BVN2UQc2MRKyBRvsOqTBMrHaUgTdkAtuO77m%2BObZtTQ%2FNBpGRmn%2FnLyqQBXDGFs%2FPfLisWLkvbzetOIYYSURVyHOpJPrcqlErpVDjTWnp%2B2ktj5y48L1phyO74yxp0BBSN00hFMceTMpvbgGocrp9exap1VMA0X%2FhiI%2Bce2oSGA%2BAsp5efdSq%2BK1Rz8KHpZpmgM4Rf6a&X-Amz-Signature=1f00b6ef0d9681100a485d3627cd0939e23ae34cd8ac52d83fb1b7dc97fed057&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVI7XEYE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKhmkSjSM7p3kQGndGIdwNu4Ns2qPEQSDb%2FI3x9leHSAIgDcfkcbi476fYjcnW%2BS7hJEviw8A5PZc5LGUhTiWUIrYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArF1JD2GKlu%2BMB8yrcAwD7siDHg5Rc9zA3Iyho8tGAO2oK7en7lEIQ6qDupk%2B8U5ZclJIJWr%2BVsKK0%2Bks58pCQzvV4Uc3UpK1bHvA5lzkOhmSiiyzf8eDiWF2jkVNnvXO7GQpfbC6xdbEv6lQ%2F4TEa9%2B8HQfg%2B2gWAzglJ6l2JwLN1trR1yUW%2FJUcYH5ncMZ3VQtnGs32NqgggZiJAGZdBWQwUeRrdHUwfjjvpgx8o%2FkU%2F8W7J5ywZZaFp0XJ7GtS2Q37qHVmwL9%2FWKYoF9gxPQWETBN0nzJCqHMrwmwj7pZKlxQIGpYOUc2%2BdKRKCQ9U85lrzr8MZ1m8HRNPIPjzc0PDghz%2Ft5VT3xc%2FjumxQ25FpV5CH%2B81Nt05qtQzcDYqPqvCHicOVVE5Jf4N7EoYvDZpyD%2Fh5Z3l1xEiJABBprbnHjpBpCjOHt49JXIv2aURdko06oDmuj6Q1Rqqg%2B%2BrNVHpjWt8LiUEm%2BNadPMZciwdS6%2Bex2eCoWonUzYlomezgbuCAW%2BdbDoCyxHcVKQXWZWsAtN%2BnLnziU5G%2F%2Bs5ba75G%2BRAWS0qw%2FGPHuRoFJD189Yd02u%2BN6E8aFR7ngxdiYHkteX%2BIWqUSCNgjFP4fun%2BMdeUGk2I374KgSvacw%2B%2FmnvvQ9GzNFravMKnw%2BMAGOqUBtIR6usZ2vKCPCajls3CQ%2BVN2UQc2MRKyBRvsOqTBMrHaUgTdkAtuO77m%2BObZtTQ%2FNBpGRmn%2FnLyqQBXDGFs%2FPfLisWLkvbzetOIYYSURVyHOpJPrcqlErpVDjTWnp%2B2ktj5y48L1phyO74yxp0BBSN00hFMceTMpvbgGocrp9exap1VMA0X%2FhiI%2Bce2oSGA%2BAsp5efdSq%2BK1Rz8KHpZpmgM4Rf6a&X-Amz-Signature=11e22cc71d812f01a9dacb83bb072736e1602e1d2b13f2170987b026ec70362f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVI7XEYE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKhmkSjSM7p3kQGndGIdwNu4Ns2qPEQSDb%2FI3x9leHSAIgDcfkcbi476fYjcnW%2BS7hJEviw8A5PZc5LGUhTiWUIrYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArF1JD2GKlu%2BMB8yrcAwD7siDHg5Rc9zA3Iyho8tGAO2oK7en7lEIQ6qDupk%2B8U5ZclJIJWr%2BVsKK0%2Bks58pCQzvV4Uc3UpK1bHvA5lzkOhmSiiyzf8eDiWF2jkVNnvXO7GQpfbC6xdbEv6lQ%2F4TEa9%2B8HQfg%2B2gWAzglJ6l2JwLN1trR1yUW%2FJUcYH5ncMZ3VQtnGs32NqgggZiJAGZdBWQwUeRrdHUwfjjvpgx8o%2FkU%2F8W7J5ywZZaFp0XJ7GtS2Q37qHVmwL9%2FWKYoF9gxPQWETBN0nzJCqHMrwmwj7pZKlxQIGpYOUc2%2BdKRKCQ9U85lrzr8MZ1m8HRNPIPjzc0PDghz%2Ft5VT3xc%2FjumxQ25FpV5CH%2B81Nt05qtQzcDYqPqvCHicOVVE5Jf4N7EoYvDZpyD%2Fh5Z3l1xEiJABBprbnHjpBpCjOHt49JXIv2aURdko06oDmuj6Q1Rqqg%2B%2BrNVHpjWt8LiUEm%2BNadPMZciwdS6%2Bex2eCoWonUzYlomezgbuCAW%2BdbDoCyxHcVKQXWZWsAtN%2BnLnziU5G%2F%2Bs5ba75G%2BRAWS0qw%2FGPHuRoFJD189Yd02u%2BN6E8aFR7ngxdiYHkteX%2BIWqUSCNgjFP4fun%2BMdeUGk2I374KgSvacw%2B%2FmnvvQ9GzNFravMKnw%2BMAGOqUBtIR6usZ2vKCPCajls3CQ%2BVN2UQc2MRKyBRvsOqTBMrHaUgTdkAtuO77m%2BObZtTQ%2FNBpGRmn%2FnLyqQBXDGFs%2FPfLisWLkvbzetOIYYSURVyHOpJPrcqlErpVDjTWnp%2B2ktj5y48L1phyO74yxp0BBSN00hFMceTMpvbgGocrp9exap1VMA0X%2FhiI%2Bce2oSGA%2BAsp5efdSq%2BK1Rz8KHpZpmgM4Rf6a&X-Amz-Signature=b0b172d1ae9ed43c940bd691f8553d7fa5f620839369fc52b97924dc92726c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTXH73G%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD07vOJiN%2F8gQFLU4Uk%2FxLxirgK7jGHexL0DxkuIsu1ywIhAK1uLjyDQ0y9xjcjGr0IfxOkqBjbz%2BSoYKJlW1Hj7YTNKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1S%2BaV%2FX1RRK9eOkq3AOkmHxJz7NTB7XZiMrLYXyxnZ33aE7CZs3BixYwzokbZVZpVvgCE53WvHFiVa8Ptkr3bGH%2FZa8spXCjeYfbWL6QytAIA6i%2F2Flz7FPeUj7d1WUO3x8%2FZceM0fZTbIWpJLgh%2FaRWKZOAqsJiqowmyq5qzalHGv%2BKrz5x2LCu14dI6bTPq3uIK2Messwz7wmOGuXkt4ohJ3uy6u1Doi47z81wN4uC3g6KhOslsX01CSN7oWYOtHM1eRIBUEefbPHfKl6AnphP90sLn6FjAhTiAllgJQ2gH%2BwZL1BbX3QaVyeAu63s99qazTPEWxV3lfNfxflKaMhJOnBaYvVoKYDqdWi7vnQ%2BVlntWBsEUvGqbbjklHqzC7%2FjRcnnoxgxutDCiHJ3KhKm39gs1wwZiwQ3UyDi3qdobaFgvzsppm5twxaK8WSIJjSXBL34y1um02fbmpFt29W9Ax%2Fnby4uYEth6RgP4oPWISgN41tY50T6UnIcvl9P5OOsMadGAyX6tIFtC8WUFsevwPbVfGRhQTP00ODL9sVCGGOcgWvJl6SmPkMV6qD8Gbq4OGmL6rhthd4Ts2y8hdFAIv5mNTVo8qHE93iglr9hLbqWi7%2FwoYYKxKoSsm40GNZiGsIw7vXu0TCi8PjABjqkAaIIkeriXK%2BbKBI3TQuMVWgTQVV9515e5H8ZV2rbZJk2Jp5E1kvSLkwhqapF2oVrn4M%2Fjnu3Y2qG9%2FtL6QYLVuPZZ1oL0%2FWc9SNlTxgmx37xAhmajKvMUoUN%2BtT7S7uYl1HSoyAjvN4IaAR73f0buUFcs9OpsGax30Omf%2BuNT%2F0mtgtLhr%2B7l58dEgZ4%2B6GAcxsS3JJjdsvn4N0qEJgvBEd9IKC0&X-Amz-Signature=c6d60e720864fd0d60f2bc4b9649a9b541d2b52d97a00447c5c785b2cbb22aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CXCXSV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkw9xdLQpVBs4KlnLMBAb1v3r63STOXmM5%2BT9%2FR9BBQAiBeUJOBCTkKe7q7vJC8cr7HA5RjIhBnEQFZ7fi3oirXwyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSj7AHGDDX47bvKaSKtwDE8PvZry46h0AjpXJ9zLjoxlkVzTOFrqgfK2p5pQiZQsHn1Sg7elgW0lC3oWQqPl8Rty%2FAhKkuEzk7VH3wsyy738yl9llwU5TCQxUUtG9a80VJviD5QEPfSXUnPY%2BpwWIB4i7bjPp6iTc9M4zICNJan5d9Ejn7EIUK%2FYnpSuXAnnQXAN%2FtKBqYekaaRpHdWk2OXJghqMuqR2IqD7sv%2BsR6y5Jt24q0ScmWzr9rK5pPSHy%2BemPKDcKw6pC9oIMJx2PIGwv%2FMMUTrwNgOvsW9veWiKvt2gz3TFaAUjr4GBRN69AM7%2B8Ym%2BdxpNfziN9QJhhDeM1lEE%2FOfpDDg5tmePaHRbKS%2FrXipiu2r2JkWXoo5WVqCdiEN73kmp5fRT%2BRWrSs5C1dsQGbOz3bjsxRG2QtgFeio%2B1cM707SJscpwBOB5ouqC9P3MgEKXXTUOlmpw4p7N8Qp46%2F8Jm0b1pk6FENcul6imQOvw3dqBaObpQ29PNfag0kOpY8CdQAs9OsMjfqX3kPOK8peQ3TVSGkMtgiR2VRRkMJJi4%2FhnOcOj3omXpIZbbE%2FfSTY6tPIus3snQ7GuyMMT0jXh9fMLaYdQekHUFrM5Nl%2FMJ%2B60Ynph1eRpvbbb%2FYFVi0UIFK90w9qD5wAY6pgGq3ze5Ck%2FTjTnHuCnAC4jA9frRXJjEwu5eRkOa4l1v5TTUtBYAwqj46rrEF4dRcL1xF3fybXL6bLWSar%2FH1ayMYF9qXE%2BkWPAfhygxW6AtGqAk9%2FSnNO4PEl0fqAN7dhRrN%2BoJlPmzJU6Vn9On0araAgEO6cQOFCXIpVNLW8PHzre7z%2BdlRAn9N%2B60j%2BJ0vYF7HdkSJP3TXeYVqTzLKxH0I8x8Ny%2BA&X-Amz-Signature=72cf6ae07be91027a369b72aa81a4f60bfecdada33aca3e5a25a0e7685f4d59f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVI7XEYE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKhmkSjSM7p3kQGndGIdwNu4Ns2qPEQSDb%2FI3x9leHSAIgDcfkcbi476fYjcnW%2BS7hJEviw8A5PZc5LGUhTiWUIrYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFArF1JD2GKlu%2BMB8yrcAwD7siDHg5Rc9zA3Iyho8tGAO2oK7en7lEIQ6qDupk%2B8U5ZclJIJWr%2BVsKK0%2Bks58pCQzvV4Uc3UpK1bHvA5lzkOhmSiiyzf8eDiWF2jkVNnvXO7GQpfbC6xdbEv6lQ%2F4TEa9%2B8HQfg%2B2gWAzglJ6l2JwLN1trR1yUW%2FJUcYH5ncMZ3VQtnGs32NqgggZiJAGZdBWQwUeRrdHUwfjjvpgx8o%2FkU%2F8W7J5ywZZaFp0XJ7GtS2Q37qHVmwL9%2FWKYoF9gxPQWETBN0nzJCqHMrwmwj7pZKlxQIGpYOUc2%2BdKRKCQ9U85lrzr8MZ1m8HRNPIPjzc0PDghz%2Ft5VT3xc%2FjumxQ25FpV5CH%2B81Nt05qtQzcDYqPqvCHicOVVE5Jf4N7EoYvDZpyD%2Fh5Z3l1xEiJABBprbnHjpBpCjOHt49JXIv2aURdko06oDmuj6Q1Rqqg%2B%2BrNVHpjWt8LiUEm%2BNadPMZciwdS6%2Bex2eCoWonUzYlomezgbuCAW%2BdbDoCyxHcVKQXWZWsAtN%2BnLnziU5G%2F%2Bs5ba75G%2BRAWS0qw%2FGPHuRoFJD189Yd02u%2BN6E8aFR7ngxdiYHkteX%2BIWqUSCNgjFP4fun%2BMdeUGk2I374KgSvacw%2B%2FmnvvQ9GzNFravMKnw%2BMAGOqUBtIR6usZ2vKCPCajls3CQ%2BVN2UQc2MRKyBRvsOqTBMrHaUgTdkAtuO77m%2BObZtTQ%2FNBpGRmn%2FnLyqQBXDGFs%2FPfLisWLkvbzetOIYYSURVyHOpJPrcqlErpVDjTWnp%2B2ktj5y48L1phyO74yxp0BBSN00hFMceTMpvbgGocrp9exap1VMA0X%2FhiI%2Bce2oSGA%2BAsp5efdSq%2BK1Rz8KHpZpmgM4Rf6a&X-Amz-Signature=381324fdbaab76a0714433684bc142f5c99d78ab194d03aec1bec98261710bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
