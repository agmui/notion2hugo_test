---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTUZIHU%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCTDQ1RH2Gl%2Bo78Vsm%2BZmSsFWrZQ2LHtTAllsVKEb5IsgIgGEA9IeGmk50WfEzqLZsOc3Ro%2BVQQJXPk%2B0hee21jrPYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBAgMOwQoCQCLhA0HyrcA56DZsyvVp5NvNd%2BynVOdTx2fVsNSWG3rRefgm%2ByiETSZAkmMtri6rOo%2B9mVciUCD2Xz3hmxzw2EVIJ8MtWgXS8MDUBA5GARlfzNYCPpJdM9SW1JkvcHIzFI%2BimwERbrri5R4qpP0QLiFMRyuWdQByXt2UgAjvDCfmuwblPVEfJH6372qKtTKPomCwmc%2FTWDocL0KVGspSb04ehbxag4w0xAjpBrL3ruZWlMrJtR7dtrhLrDjdXrfOksHKCmGcPxRiMxDvQmtRwiC41RJ%2Bbugs1jhhyNFjOjzg%2FjnrUSSM7iK665D8VMmzqlmXJmxfRkSOu21FRp689mXC55XbkTyvGiR%2B2LUhPaz%2B1ocukJvPDRDb35Yb28tp4nu2Q0WRtm9hPHDEMdTLIEjVxtP3kHeaBVV01HshVpujz5rmaBhIicPpGn4E1CnHRv0xpsjrYajD1Ep5FILalX3HgpuhpyWFFhBT0k0FJHIG8LywcXcPVQWnwY%2Bf%2Fe2XX2dwQ%2BkORMdn5nQpIbxvgVn1MRBimDUFVTvQUHEW2NZFRhuONkYkUfOB2gmWpCOXIjSUPO6SeEY520enzNfejWmIjRK1COPbIXjEw4X%2B96cnKTJh6NXpePMVlJjIiJYtOzYMdTMN66rM4GOqUB6%2BPrUfoZ1xGrrXjMbFTTuqelNAbwn%2F9wwrdkwYXnvmYpEbKdSfOiukpJv2IRtVTpsD5MEzDXg2aueLGirXnqwcR9%2F%2B8UH%2BTp%2BzyLlPKRNMflQYcROhiJ02cohZCqoAGWzcjNjjJgzHIaZqgWL3tNc%2F1V67GgaJ9r8Ci9iZlAiL7R6X%2FNi%2F0AstiEfodXD8asVBvZ64NIyNNufPx42Eo4lmZSTzMQ&X-Amz-Signature=379a9ee4f55b145199e638cf2d67084a44bfcc8f85ae0632ea1bac0a7a3290fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTUZIHU%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCTDQ1RH2Gl%2Bo78Vsm%2BZmSsFWrZQ2LHtTAllsVKEb5IsgIgGEA9IeGmk50WfEzqLZsOc3Ro%2BVQQJXPk%2B0hee21jrPYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBAgMOwQoCQCLhA0HyrcA56DZsyvVp5NvNd%2BynVOdTx2fVsNSWG3rRefgm%2ByiETSZAkmMtri6rOo%2B9mVciUCD2Xz3hmxzw2EVIJ8MtWgXS8MDUBA5GARlfzNYCPpJdM9SW1JkvcHIzFI%2BimwERbrri5R4qpP0QLiFMRyuWdQByXt2UgAjvDCfmuwblPVEfJH6372qKtTKPomCwmc%2FTWDocL0KVGspSb04ehbxag4w0xAjpBrL3ruZWlMrJtR7dtrhLrDjdXrfOksHKCmGcPxRiMxDvQmtRwiC41RJ%2Bbugs1jhhyNFjOjzg%2FjnrUSSM7iK665D8VMmzqlmXJmxfRkSOu21FRp689mXC55XbkTyvGiR%2B2LUhPaz%2B1ocukJvPDRDb35Yb28tp4nu2Q0WRtm9hPHDEMdTLIEjVxtP3kHeaBVV01HshVpujz5rmaBhIicPpGn4E1CnHRv0xpsjrYajD1Ep5FILalX3HgpuhpyWFFhBT0k0FJHIG8LywcXcPVQWnwY%2Bf%2Fe2XX2dwQ%2BkORMdn5nQpIbxvgVn1MRBimDUFVTvQUHEW2NZFRhuONkYkUfOB2gmWpCOXIjSUPO6SeEY520enzNfejWmIjRK1COPbIXjEw4X%2B96cnKTJh6NXpePMVlJjIiJYtOzYMdTMN66rM4GOqUB6%2BPrUfoZ1xGrrXjMbFTTuqelNAbwn%2F9wwrdkwYXnvmYpEbKdSfOiukpJv2IRtVTpsD5MEzDXg2aueLGirXnqwcR9%2F%2B8UH%2BTp%2BzyLlPKRNMflQYcROhiJ02cohZCqoAGWzcjNjjJgzHIaZqgWL3tNc%2F1V67GgaJ9r8Ci9iZlAiL7R6X%2FNi%2F0AstiEfodXD8asVBvZ64NIyNNufPx42Eo4lmZSTzMQ&X-Amz-Signature=2b411a7356513e883269821c5e3b5a097604ec48949dd4f3a630ac9db79f9af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTUZIHU%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCTDQ1RH2Gl%2Bo78Vsm%2BZmSsFWrZQ2LHtTAllsVKEb5IsgIgGEA9IeGmk50WfEzqLZsOc3Ro%2BVQQJXPk%2B0hee21jrPYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBAgMOwQoCQCLhA0HyrcA56DZsyvVp5NvNd%2BynVOdTx2fVsNSWG3rRefgm%2ByiETSZAkmMtri6rOo%2B9mVciUCD2Xz3hmxzw2EVIJ8MtWgXS8MDUBA5GARlfzNYCPpJdM9SW1JkvcHIzFI%2BimwERbrri5R4qpP0QLiFMRyuWdQByXt2UgAjvDCfmuwblPVEfJH6372qKtTKPomCwmc%2FTWDocL0KVGspSb04ehbxag4w0xAjpBrL3ruZWlMrJtR7dtrhLrDjdXrfOksHKCmGcPxRiMxDvQmtRwiC41RJ%2Bbugs1jhhyNFjOjzg%2FjnrUSSM7iK665D8VMmzqlmXJmxfRkSOu21FRp689mXC55XbkTyvGiR%2B2LUhPaz%2B1ocukJvPDRDb35Yb28tp4nu2Q0WRtm9hPHDEMdTLIEjVxtP3kHeaBVV01HshVpujz5rmaBhIicPpGn4E1CnHRv0xpsjrYajD1Ep5FILalX3HgpuhpyWFFhBT0k0FJHIG8LywcXcPVQWnwY%2Bf%2Fe2XX2dwQ%2BkORMdn5nQpIbxvgVn1MRBimDUFVTvQUHEW2NZFRhuONkYkUfOB2gmWpCOXIjSUPO6SeEY520enzNfejWmIjRK1COPbIXjEw4X%2B96cnKTJh6NXpePMVlJjIiJYtOzYMdTMN66rM4GOqUB6%2BPrUfoZ1xGrrXjMbFTTuqelNAbwn%2F9wwrdkwYXnvmYpEbKdSfOiukpJv2IRtVTpsD5MEzDXg2aueLGirXnqwcR9%2F%2B8UH%2BTp%2BzyLlPKRNMflQYcROhiJ02cohZCqoAGWzcjNjjJgzHIaZqgWL3tNc%2F1V67GgaJ9r8Ci9iZlAiL7R6X%2FNi%2F0AstiEfodXD8asVBvZ64NIyNNufPx42Eo4lmZSTzMQ&X-Amz-Signature=ebe0e32c94f271dbbf6319dd27ec70c2ca0f3be1736ce70e171a005f533b3bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBDOF6C%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC86JKUFP5HbBRu%2FP8BUjRrjWZk%2FQe3xp%2Bv%2B8cUjJUvOwIhAP%2FHpW9Jv9MjkmuvIVUhk7LQxJ4aJumwNDWLO613ASOrKv8DCDIQABoMNjM3NDIzMTgzODA1IgxQngX1FciiiZq4X3Mq3AN%2BL0MBdNLhMWtwUgSdWE5bkTKFbCZzdG%2FjOO8j5jlk5FWdDdc4DuXHcrLwnJ0flDZXID1NOBu%2Fl%2Bun1hRGWSXuDmu5Y9YipUMGPm1IEHLIp1mRlB3RUTjyXdgFhLCXhn%2Bnw3YKSeYlkLJ4%2FAOl6iFwaW%2FeOJSB9Q7WfPOmNiTjX01fQPK3JlBBRtdf1plLwTNZTfa2TT57SCUFz4ccLoMrLn6snXMqGOucK5mjie1MGML5n4Xq91Hx2zqCSyDPeCrjvkH0t6nNy4DR3FZR37oHUrvh85ylWgzT4jSI593%2F0Jt193OiSg5W9PZz4Fy0r%2BekpYBCkE36oRf6SHy%2ByjgUuxEjmwJMv2MVCGnX5clLCsmlku6QO8xLU4bUbO0gA0FN%2BmMY4enbrXNJHwXCTtIV2J92bXN96L99Z4M%2FGUAIsbeOrsLRLMjP4gKlxcfB1G90QPlNJR%2BwUeteQmdA963JpzC5V0lamg0Zre7lcrPLkB0X7W4uNSO282TCGbVSjvMUv0O0cTOMQ0%2BiCyLJPs75cdTJKLpw9vqvPwQdMmFNhftb516lbskMyCHyD4zw0oA%2BaF8%2FKquewPw0582x8obHSp9oFcMedJUOebJ%2Fk45pAJP2wmheI1M63wfCoDCXu6zOBjqkAQilY4vMTThrNN3qEpa7UaqSHDNPDPNQh8nzxLnghIy5KEESIne9lwfhB3I8iyG6FKgnCauBaeJXRKPnyPrQWQ9hzcvwhSDMjRCFzpGI2JBx0XnV9Fmj3x4S7mU9hRiadhf%2FyAsrov8%2FVUD7h25RBwOpEIvFgcIeQuecjyGPYOesuB3PQIvKlQH8%2BEFp9ubBM26tRjGhfwXJZYGZds60sHxVfBrQ&X-Amz-Signature=ed87022a708dbb01a66df965c50997209c608f13c49d021e02f8573a67fdc45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEB65PMD%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDy5k9CXW1PYIyrjeegi%2F4cS1X4NOCIKNLoH0JVNYDfjAiEAhpOETfA7mGNmGEvJpvk5hvzTSCYPfmSQ7LNBMd8V28oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIRrRF2IIxtchKBbaSrcAwNwsRZ2dw7B83lvqSPh2U0hLinvO5TyWjiur4VOUaGrmwDIo4JSVdskUm4wQpLNh4XKP1A49RYeXIhX1iGhgHQNLiiSugoKuNv93W5Uxz1rclXjFnDJ8sa9e%2Ft2zijZ%2B%2F2cl90HmlUCfw8sNRdpyiKwxqpRuCWqP4fZBtOUZ1pyAHhENVGSQ8QZaTzNRHNZJHcaEEOUGi02O%2B5ZFw%2B9gBRUaRLMDEnUseDrSrn4mwsus%2BOzheyXzpX17gGDs%2FbMgcwUqJ8xBg1UJqdI%2B4GELOxGme8A5gdm%2B%2BeueJdTxyKL7en9lKwe4CDk7k4cZ7RxY7Kvw3Yzk39ULlisRrtTG0cM2l2%2BAR%2FVg3B8Ex5rPVLyWHLjIjJPCkUrADCb%2BXF9Up2OZJTqLtHkdietOOqYnV%2BQ8MOW50r7IZzKO6kxJ%2BPdhmcRuREjw8SpNHRjSIQx7eOadvI0beAOWZ9J9cm1q%2BZBnzac20Q0bMvDFDQJwFjVnbvfDimTz5UaJNo571iJNX2HTBjdR2tiXafU5e9rfAeFD%2B%2BdUHRCqEzFX2eQJEKkmao7hUs1EzP%2BWkj7qhkowNCL9qkHl2n3Xw2sb29iS5A4SkPT744RH2ghhmcszbWvrXzMm8KAvFTWnfjhMJa8rM4GOqUBGKPt%2BtRkNow6rklJkKH2yqgCw0XYdFgYY73GdYTa6kR3IedWLxA8RaULhpRJbWHZ%2BL41PAkuirdaxWMGY%2Bev8ghqxiD37E1ME0ZOZj5vSUzFcXNLJXJnj%2F2Cu5u9dd%2B1IwrYmLlfA%2FjzNaZ0eS0PEPwDGwZ%2F7eD9S6bK8eC3lJoELWejaakBxNSi6EjA2tuA0xzN47ihfPnZ2XWKP8t6JGLL4%2B6t&X-Amz-Signature=77078580c689d667da81caef41ab969a235ffdb8c0e644c24da53c00b98fff13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTUZIHU%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCTDQ1RH2Gl%2Bo78Vsm%2BZmSsFWrZQ2LHtTAllsVKEb5IsgIgGEA9IeGmk50WfEzqLZsOc3Ro%2BVQQJXPk%2B0hee21jrPYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBAgMOwQoCQCLhA0HyrcA56DZsyvVp5NvNd%2BynVOdTx2fVsNSWG3rRefgm%2ByiETSZAkmMtri6rOo%2B9mVciUCD2Xz3hmxzw2EVIJ8MtWgXS8MDUBA5GARlfzNYCPpJdM9SW1JkvcHIzFI%2BimwERbrri5R4qpP0QLiFMRyuWdQByXt2UgAjvDCfmuwblPVEfJH6372qKtTKPomCwmc%2FTWDocL0KVGspSb04ehbxag4w0xAjpBrL3ruZWlMrJtR7dtrhLrDjdXrfOksHKCmGcPxRiMxDvQmtRwiC41RJ%2Bbugs1jhhyNFjOjzg%2FjnrUSSM7iK665D8VMmzqlmXJmxfRkSOu21FRp689mXC55XbkTyvGiR%2B2LUhPaz%2B1ocukJvPDRDb35Yb28tp4nu2Q0WRtm9hPHDEMdTLIEjVxtP3kHeaBVV01HshVpujz5rmaBhIicPpGn4E1CnHRv0xpsjrYajD1Ep5FILalX3HgpuhpyWFFhBT0k0FJHIG8LywcXcPVQWnwY%2Bf%2Fe2XX2dwQ%2BkORMdn5nQpIbxvgVn1MRBimDUFVTvQUHEW2NZFRhuONkYkUfOB2gmWpCOXIjSUPO6SeEY520enzNfejWmIjRK1COPbIXjEw4X%2B96cnKTJh6NXpePMVlJjIiJYtOzYMdTMN66rM4GOqUB6%2BPrUfoZ1xGrrXjMbFTTuqelNAbwn%2F9wwrdkwYXnvmYpEbKdSfOiukpJv2IRtVTpsD5MEzDXg2aueLGirXnqwcR9%2F%2B8UH%2BTp%2BzyLlPKRNMflQYcROhiJ02cohZCqoAGWzcjNjjJgzHIaZqgWL3tNc%2F1V67GgaJ9r8Ci9iZlAiL7R6X%2FNi%2F0AstiEfodXD8asVBvZ64NIyNNufPx42Eo4lmZSTzMQ&X-Amz-Signature=80c9be0cd4d1b22c97397862ef0d9905532ad754fd5d4ed6a15621887ee1f58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
