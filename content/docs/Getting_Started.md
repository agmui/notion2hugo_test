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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BVDB3Q%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDatFgC%2BhLHa7lysN88nGFWEqli7bCQZxx8sbGClOe2nAIgONZH2hIxCbAg1T%2Fv0Lgrf7KpMfA86UhY6wnBAwEf7YEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhncDvGYNkkd7vySrcA2kPz%2BKtzP08K6giU8PouMjR%2FsyzXQMdfxzEOw1RYir1UU4seUBw0oHTg0SQEQBLY4m8Z5yWz%2F1A9r%2FHiZuY3xk8mJhVXUBYuCfcdGwb1AgevXPTHLBAei%2BPto%2FoLUTzpZNHLwH2LtDlpcktkKQdUIUUZaEYYqzYE00MblBULLz3fTC7vsQyz%2FZC0SPum29Ar0ZwIMPImGghi%2FfuyQuUpJSm5J0RTYvqUixJepCc8DMGp%2Fg4EcKE%2FAbUWGNKCHue6Gwl8nMEg6Ta4pDZ5sOGncABY8P6iBR007oJmjXW%2FPaTkl3Bb%2F1Oq%2BN2DZg0plljjz%2FxwO%2FziHP5lbNKF2hkwEsZBKOk%2B3NdQ2X0iKZwnFopcZqTQhbxJ1QLT8IfFMLb0pLKphTE4MFesuHsmiLGT6pwAcRDBCWu3xRgdJXwdVZeisL1NUL5y%2B9%2Fceex8GqPPCG09fL%2B%2Bp5fzfWihc8eg37xcU0kstWAtssPpFZ0TzXTeXKZXYbWMr%2F5ovo7yIzW4dZslxHX2Icv2KCRCwEJOfknn0NQ8cxAVTE78vVc75qeYT1pIZ3fnUtQsjgbpa3tQnUNMcRaL%2BQhoFyZfC6%2Fsp8vPfo6qK%2BlQpMi1iSk3W%2BHvfxpgbqDorKQmQ6BMPShw8EGOqUBd1BotXQ%2BhytnPqtYsEZ6U2kxY%2FB2oUpD%2FqwRyQpRCNL1BFKC9g6lgWpSS2LnR1THnsknjV1EvuQpisLkbb69M3XE2o77yGTMYEtItSOc4CY7yYVPKhtcdylXy%2FKcnbUhMm5hcILgpgvC9J0yVtfzKXKq1PbfWJ91KXzVzZ2dLMD57DcRwrcz0HD4B%2FbL5iDDcb39kxYKwbLMHWO3qz3RfWYOs9TY&X-Amz-Signature=ab0a800fecf9b948ac6e11467b1b4c9e1a5bc9fa0d842b91511a51829b9a2b91&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BVDB3Q%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDatFgC%2BhLHa7lysN88nGFWEqli7bCQZxx8sbGClOe2nAIgONZH2hIxCbAg1T%2Fv0Lgrf7KpMfA86UhY6wnBAwEf7YEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhncDvGYNkkd7vySrcA2kPz%2BKtzP08K6giU8PouMjR%2FsyzXQMdfxzEOw1RYir1UU4seUBw0oHTg0SQEQBLY4m8Z5yWz%2F1A9r%2FHiZuY3xk8mJhVXUBYuCfcdGwb1AgevXPTHLBAei%2BPto%2FoLUTzpZNHLwH2LtDlpcktkKQdUIUUZaEYYqzYE00MblBULLz3fTC7vsQyz%2FZC0SPum29Ar0ZwIMPImGghi%2FfuyQuUpJSm5J0RTYvqUixJepCc8DMGp%2Fg4EcKE%2FAbUWGNKCHue6Gwl8nMEg6Ta4pDZ5sOGncABY8P6iBR007oJmjXW%2FPaTkl3Bb%2F1Oq%2BN2DZg0plljjz%2FxwO%2FziHP5lbNKF2hkwEsZBKOk%2B3NdQ2X0iKZwnFopcZqTQhbxJ1QLT8IfFMLb0pLKphTE4MFesuHsmiLGT6pwAcRDBCWu3xRgdJXwdVZeisL1NUL5y%2B9%2Fceex8GqPPCG09fL%2B%2Bp5fzfWihc8eg37xcU0kstWAtssPpFZ0TzXTeXKZXYbWMr%2F5ovo7yIzW4dZslxHX2Icv2KCRCwEJOfknn0NQ8cxAVTE78vVc75qeYT1pIZ3fnUtQsjgbpa3tQnUNMcRaL%2BQhoFyZfC6%2Fsp8vPfo6qK%2BlQpMi1iSk3W%2BHvfxpgbqDorKQmQ6BMPShw8EGOqUBd1BotXQ%2BhytnPqtYsEZ6U2kxY%2FB2oUpD%2FqwRyQpRCNL1BFKC9g6lgWpSS2LnR1THnsknjV1EvuQpisLkbb69M3XE2o77yGTMYEtItSOc4CY7yYVPKhtcdylXy%2FKcnbUhMm5hcILgpgvC9J0yVtfzKXKq1PbfWJ91KXzVzZ2dLMD57DcRwrcz0HD4B%2FbL5iDDcb39kxYKwbLMHWO3qz3RfWYOs9TY&X-Amz-Signature=201a09e54d7bbdca6411ba1915773f746305c1f9755f8a425e420ba5e8e7c07f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BVDB3Q%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDatFgC%2BhLHa7lysN88nGFWEqli7bCQZxx8sbGClOe2nAIgONZH2hIxCbAg1T%2Fv0Lgrf7KpMfA86UhY6wnBAwEf7YEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhncDvGYNkkd7vySrcA2kPz%2BKtzP08K6giU8PouMjR%2FsyzXQMdfxzEOw1RYir1UU4seUBw0oHTg0SQEQBLY4m8Z5yWz%2F1A9r%2FHiZuY3xk8mJhVXUBYuCfcdGwb1AgevXPTHLBAei%2BPto%2FoLUTzpZNHLwH2LtDlpcktkKQdUIUUZaEYYqzYE00MblBULLz3fTC7vsQyz%2FZC0SPum29Ar0ZwIMPImGghi%2FfuyQuUpJSm5J0RTYvqUixJepCc8DMGp%2Fg4EcKE%2FAbUWGNKCHue6Gwl8nMEg6Ta4pDZ5sOGncABY8P6iBR007oJmjXW%2FPaTkl3Bb%2F1Oq%2BN2DZg0plljjz%2FxwO%2FziHP5lbNKF2hkwEsZBKOk%2B3NdQ2X0iKZwnFopcZqTQhbxJ1QLT8IfFMLb0pLKphTE4MFesuHsmiLGT6pwAcRDBCWu3xRgdJXwdVZeisL1NUL5y%2B9%2Fceex8GqPPCG09fL%2B%2Bp5fzfWihc8eg37xcU0kstWAtssPpFZ0TzXTeXKZXYbWMr%2F5ovo7yIzW4dZslxHX2Icv2KCRCwEJOfknn0NQ8cxAVTE78vVc75qeYT1pIZ3fnUtQsjgbpa3tQnUNMcRaL%2BQhoFyZfC6%2Fsp8vPfo6qK%2BlQpMi1iSk3W%2BHvfxpgbqDorKQmQ6BMPShw8EGOqUBd1BotXQ%2BhytnPqtYsEZ6U2kxY%2FB2oUpD%2FqwRyQpRCNL1BFKC9g6lgWpSS2LnR1THnsknjV1EvuQpisLkbb69M3XE2o77yGTMYEtItSOc4CY7yYVPKhtcdylXy%2FKcnbUhMm5hcILgpgvC9J0yVtfzKXKq1PbfWJ91KXzVzZ2dLMD57DcRwrcz0HD4B%2FbL5iDDcb39kxYKwbLMHWO3qz3RfWYOs9TY&X-Amz-Signature=07c1cc39c24ee0c041fb5594bcbc0f7de756e83eb0aa7c8a420fa4d20f5ed38a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDGJ3MK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCVKDTG8Ym6CJyeEBhqLOSvOwigwuRCCQb%2BaH%2FbLGQfowIgWsAuMaUJBUZaKJtPHDcoW3bfXlCo0k7ajASfIPQReogqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbehyP3R%2FF96wkhFCrcA07nOToBOddieIN3loX%2FDsKPGB9sqIy2sjUXMV2KqA4whqWJ5L6xKhhjyw%2BaNkEwve%2Biv4E3Khb0rjUK5SXFCtXfuuzXnWPes3cqDbM9dzmpE6TEcq0zZaR0joB2zjR%2FmvL%2B5hg42Z5zJrx2eUCvDkrcaSPs28ugcKB6OM4LMJf8hQuOgiHOkN1zXzHNaBmENfg7wBkYOwTdEzKXixpXPbFvxRCznR4lrflo8rkfEM%2FeKbSt%2BPhaouzR08WldptHRw4SNz%2FwX9%2FbzO4mG99Zz%2BHv1Tj5ld1Y8024F%2FsFGcwzphCkYB%2F9joBD0DR%2FMVAFj5hWOIbocT%2FIfdC6rUALzxqk0JQlBcO0iVFN2lZOLmyLpcIITiJC4yHE9GDkGkeBz11HIyp2UM27sZ7zARiGXFzoDkTILTzOqGzkWUSe2WQU%2B3FWRJjvCxakCQ0tLzXlH8VpmcS9Nmvr9SjBjk5lP3XTLEpc8X6257r0PDwgAhay3pRvvJ7kJvC2PmhTH3cAFppfZ1N8c%2B5H%2B31C1DUGJhJz5DC%2BvqxZEQKCZs8wCohJauyeNS2j%2FA8S7aksL%2BzAnuvQETHU6Edz%2BieLphXyUPAb5Xzd2fb9aunRaSvWRcUlxtN2GxaiDaoF1OobMMahw8EGOqUBs%2Bj%2Bs8xJk6m1Fxl31htzYFz4kM87yozyLE4GKvdHQsRSnVjlwuNE83%2FxuHcCXlkSvl37b3aeDN5qJFYfgsSAw1Tk7Z33x%2FqSyuRUZme5epGNl%2Byg5vkcx8%2BnyAAZpo2rFdj%2Bjd%2F94eaCN2uky3uN15OEuMr42czrdVw%2FcBOtRlWHd2HSnUpxD%2BOoZedcNhUtf7AYLIw%2F2aPgbQadYNOQHVEvITKa&X-Amz-Signature=cc00249f4f9ff1bf5c8e117a5ac7cd66554ad34f9735b60994e4a05f833db4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UWSTF2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID6cwfrWUcyHFt765arGQKSSZI%2FZmHN1uey5bSA2dW7wAiA6lBZXS9o%2B6t21vCzvZF2VWMK0SraNqmP3gye9n94lwiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnGYzQFRX7cF5yWrKtwDY6mworj5q%2FA3WppKe7K4771iZMK6hrCzDXG5EvdH2tnhVQuNqw36B%2FiNg5mH5z1ODic7EEBOt8RZNbSn7Gb%2FC%2B5H7t0zV11lkEaJulUtHLkvoCgkw5%2BaM%2F%2BjlqsYwt%2BLwaf4RU5pR5aifHUAX%2BneIzzKoDkSBY1iodAIVk3YbtkZxYWsdSEANkH3UEwTWEC2gyytuZ3%2FU9%2F1W8TxUV%2F7YNvjrwdouPj0DN65xpcDAh7BJKaTrETzAKu4SQhiwO3aawGyirmQLC2UCsVSRAoXOVGBdE9JzNP%2BGGBZlW2bJg46lgZDsJ5voFA%2B7zIFn%2FRY7RUAHopmY06xb1%2FwwDM6E1ETBsG%2BacskLIw1BI61sIed4Eya5l1PBXzrNrV7dRkb75hf76Ym73Zl%2BHUNNRsc9ILj8Hd5RJKrsaTmcyyt%2B4aJxoT64RAqG3wUhbW3%2FTA%2FGo9Yz3ffgMdif38Z6517nOYluyy%2F5spa4l1UaEYNx2KVYdrjzQKGx6DESaCwpomMmJGAeDCp%2BHm5UBLxMA2IIxdSCOcjmuFHO3RRGiHj5OYg17ZFZrVbO6Vs4tqI6VM12H39edkBND82A8a44bDLWofsOm2ExXsZCUi%2Fb5zjLGUnGjrn1iaphnRFqA4woaLDwQY6pgGHd2cHllRVTz%2Fk8MF4sx5U%2BdbcDg6PNlqo%2FBQLWk9KZ%2BIhGPjX%2F25X5GhK5eLxP1uls5KcGBBk%2B6QcbRVFSQ3iPBf78V3eK9WZ17te0EqkaN6t%2FmjLFuTvg4j1sduLzJ3rKex5bi%2FWeXV3Yb2ITEKCVhiEq22s6wG7bW0QgJrhDVW9tZCQM8wMK8TkNs4FqyyGMWbs6pRUvfkGDbrf6QUcG9MupxHX&X-Amz-Signature=e0aa62e8e92cccdf7e69d22ecc73714665aeb64f20bd2ff90e04a1c30a8e86ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BVDB3Q%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDatFgC%2BhLHa7lysN88nGFWEqli7bCQZxx8sbGClOe2nAIgONZH2hIxCbAg1T%2Fv0Lgrf7KpMfA86UhY6wnBAwEf7YEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhncDvGYNkkd7vySrcA2kPz%2BKtzP08K6giU8PouMjR%2FsyzXQMdfxzEOw1RYir1UU4seUBw0oHTg0SQEQBLY4m8Z5yWz%2F1A9r%2FHiZuY3xk8mJhVXUBYuCfcdGwb1AgevXPTHLBAei%2BPto%2FoLUTzpZNHLwH2LtDlpcktkKQdUIUUZaEYYqzYE00MblBULLz3fTC7vsQyz%2FZC0SPum29Ar0ZwIMPImGghi%2FfuyQuUpJSm5J0RTYvqUixJepCc8DMGp%2Fg4EcKE%2FAbUWGNKCHue6Gwl8nMEg6Ta4pDZ5sOGncABY8P6iBR007oJmjXW%2FPaTkl3Bb%2F1Oq%2BN2DZg0plljjz%2FxwO%2FziHP5lbNKF2hkwEsZBKOk%2B3NdQ2X0iKZwnFopcZqTQhbxJ1QLT8IfFMLb0pLKphTE4MFesuHsmiLGT6pwAcRDBCWu3xRgdJXwdVZeisL1NUL5y%2B9%2Fceex8GqPPCG09fL%2B%2Bp5fzfWihc8eg37xcU0kstWAtssPpFZ0TzXTeXKZXYbWMr%2F5ovo7yIzW4dZslxHX2Icv2KCRCwEJOfknn0NQ8cxAVTE78vVc75qeYT1pIZ3fnUtQsjgbpa3tQnUNMcRaL%2BQhoFyZfC6%2Fsp8vPfo6qK%2BlQpMi1iSk3W%2BHvfxpgbqDorKQmQ6BMPShw8EGOqUBd1BotXQ%2BhytnPqtYsEZ6U2kxY%2FB2oUpD%2FqwRyQpRCNL1BFKC9g6lgWpSS2LnR1THnsknjV1EvuQpisLkbb69M3XE2o77yGTMYEtItSOc4CY7yYVPKhtcdylXy%2FKcnbUhMm5hcILgpgvC9J0yVtfzKXKq1PbfWJ91KXzVzZ2dLMD57DcRwrcz0HD4B%2FbL5iDDcb39kxYKwbLMHWO3qz3RfWYOs9TY&X-Amz-Signature=922fc7c100a9d07f345f16497786aa24e0ff7d8c4e806b775874f538537662cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
