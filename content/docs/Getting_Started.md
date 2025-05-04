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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V56O2IU3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICxm%2F0M5ZJboGleO8suANTq1EXP0pzzhAH%2Bppkk%2B4VduAiEAndcGfRMoT84iCobgZUdAux9nAmXaehOgRhbaKQtlEN4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxSihelBL%2FU8%2By6FyrcA1v42QgwmHKeokhW5RqdM9pEtZ9xEIQfSKfIqcKG6S7h00BC5m9t6C4jPfPwXDyRHgGIbA8QlRUJHk1qUUMDnyf%2BLwpcuRXWV3uViLhE6qJkBfrkE7fZd6TkS6HWtAa0obaKhvtoaNeb4TN22TYrbAf3FqmZdJzZM0OTckdq5LV%2FKETIq%2BlxgMEqipMoi8GsM%2BPvWBA%2FLdv5hu%2F17UWudJJa6pYZrxOwBKMRowqECVSS%2Bylv%2B2nRgZRS17cF%2FNnMBZsGJ0vVD7rDjUcXYNpP1rHLpOkNpeP8pvKxrZ9bXnVc1pKsyWvruCThIFgSb%2BJ2Jfrke4WhKnYqTKZ4mBD0q2SHS6osIBpLC5QXncEBQlcx3TjF3hh5RtrP8%2FVjRD6SMrO%2F3QeVdJtQCWrms3%2BKyyGKvHfWy3whytIPaGGd7Dly6kazQ24fX%2B9oBnRPOmqYDLM1W3dZvoFxA%2BxH25fQE5ySbodrjWRLazmjhvxUCiqUyVPI4O4TqO2vb3KhOtI%2F%2BYJmKBvctqGxsRoiJJ8K2jWwRI%2FCi0uO1vrt4Z9F%2BgC8SRxjT77%2FwPnhvhEHYcHXRgyIiBYME68Ia%2FXFB%2Fh%2Fpz5TV4RyJ9c2CU%2BjoJw%2FRIUuih3zqyJqMslgwCwFMJDx2sAGOqUBTNe3RVHYQKCN5weGp%2BOigCARWl4F33j3WY9%2Bq2GDrD79DFKcLXmDVOcpcdCiBzwuZzuB9b%2FlNtWmic%2BYTfvz9hsMUfBHp1DR%2BGABdJoAraqjy6EibhLmlhsuxGaLGJm4DZ0ZZxwYTGiz6qXrlo02Tt2%2FP1jQDCl3S3NRVHjdetPh6ZRJcdT3R09QYnfwoMZ47QlFbe8tO27CFj7L36afSEZWV48M&X-Amz-Signature=556e0f7cec6196660ab2180997655fd5165569e96adaa21e708a76709d4cee4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V56O2IU3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICxm%2F0M5ZJboGleO8suANTq1EXP0pzzhAH%2Bppkk%2B4VduAiEAndcGfRMoT84iCobgZUdAux9nAmXaehOgRhbaKQtlEN4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxSihelBL%2FU8%2By6FyrcA1v42QgwmHKeokhW5RqdM9pEtZ9xEIQfSKfIqcKG6S7h00BC5m9t6C4jPfPwXDyRHgGIbA8QlRUJHk1qUUMDnyf%2BLwpcuRXWV3uViLhE6qJkBfrkE7fZd6TkS6HWtAa0obaKhvtoaNeb4TN22TYrbAf3FqmZdJzZM0OTckdq5LV%2FKETIq%2BlxgMEqipMoi8GsM%2BPvWBA%2FLdv5hu%2F17UWudJJa6pYZrxOwBKMRowqECVSS%2Bylv%2B2nRgZRS17cF%2FNnMBZsGJ0vVD7rDjUcXYNpP1rHLpOkNpeP8pvKxrZ9bXnVc1pKsyWvruCThIFgSb%2BJ2Jfrke4WhKnYqTKZ4mBD0q2SHS6osIBpLC5QXncEBQlcx3TjF3hh5RtrP8%2FVjRD6SMrO%2F3QeVdJtQCWrms3%2BKyyGKvHfWy3whytIPaGGd7Dly6kazQ24fX%2B9oBnRPOmqYDLM1W3dZvoFxA%2BxH25fQE5ySbodrjWRLazmjhvxUCiqUyVPI4O4TqO2vb3KhOtI%2F%2BYJmKBvctqGxsRoiJJ8K2jWwRI%2FCi0uO1vrt4Z9F%2BgC8SRxjT77%2FwPnhvhEHYcHXRgyIiBYME68Ia%2FXFB%2Fh%2Fpz5TV4RyJ9c2CU%2BjoJw%2FRIUuih3zqyJqMslgwCwFMJDx2sAGOqUBTNe3RVHYQKCN5weGp%2BOigCARWl4F33j3WY9%2Bq2GDrD79DFKcLXmDVOcpcdCiBzwuZzuB9b%2FlNtWmic%2BYTfvz9hsMUfBHp1DR%2BGABdJoAraqjy6EibhLmlhsuxGaLGJm4DZ0ZZxwYTGiz6qXrlo02Tt2%2FP1jQDCl3S3NRVHjdetPh6ZRJcdT3R09QYnfwoMZ47QlFbe8tO27CFj7L36afSEZWV48M&X-Amz-Signature=a8fd612971a4a93b3f21f864a311fbfbcd5e98b753f94e8c20e1de9042e6d9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V56O2IU3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICxm%2F0M5ZJboGleO8suANTq1EXP0pzzhAH%2Bppkk%2B4VduAiEAndcGfRMoT84iCobgZUdAux9nAmXaehOgRhbaKQtlEN4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxSihelBL%2FU8%2By6FyrcA1v42QgwmHKeokhW5RqdM9pEtZ9xEIQfSKfIqcKG6S7h00BC5m9t6C4jPfPwXDyRHgGIbA8QlRUJHk1qUUMDnyf%2BLwpcuRXWV3uViLhE6qJkBfrkE7fZd6TkS6HWtAa0obaKhvtoaNeb4TN22TYrbAf3FqmZdJzZM0OTckdq5LV%2FKETIq%2BlxgMEqipMoi8GsM%2BPvWBA%2FLdv5hu%2F17UWudJJa6pYZrxOwBKMRowqECVSS%2Bylv%2B2nRgZRS17cF%2FNnMBZsGJ0vVD7rDjUcXYNpP1rHLpOkNpeP8pvKxrZ9bXnVc1pKsyWvruCThIFgSb%2BJ2Jfrke4WhKnYqTKZ4mBD0q2SHS6osIBpLC5QXncEBQlcx3TjF3hh5RtrP8%2FVjRD6SMrO%2F3QeVdJtQCWrms3%2BKyyGKvHfWy3whytIPaGGd7Dly6kazQ24fX%2B9oBnRPOmqYDLM1W3dZvoFxA%2BxH25fQE5ySbodrjWRLazmjhvxUCiqUyVPI4O4TqO2vb3KhOtI%2F%2BYJmKBvctqGxsRoiJJ8K2jWwRI%2FCi0uO1vrt4Z9F%2BgC8SRxjT77%2FwPnhvhEHYcHXRgyIiBYME68Ia%2FXFB%2Fh%2Fpz5TV4RyJ9c2CU%2BjoJw%2FRIUuih3zqyJqMslgwCwFMJDx2sAGOqUBTNe3RVHYQKCN5weGp%2BOigCARWl4F33j3WY9%2Bq2GDrD79DFKcLXmDVOcpcdCiBzwuZzuB9b%2FlNtWmic%2BYTfvz9hsMUfBHp1DR%2BGABdJoAraqjy6EibhLmlhsuxGaLGJm4DZ0ZZxwYTGiz6qXrlo02Tt2%2FP1jQDCl3S3NRVHjdetPh6ZRJcdT3R09QYnfwoMZ47QlFbe8tO27CFj7L36afSEZWV48M&X-Amz-Signature=c2b636c6701c4c45c5b520e4e1d1e261362b0bfb70c55d77134f5b4366d1bbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQYG3PB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIF2H0Nf63%2FQih%2BslxlHQQLV7239bODpbpJTWr85y%2Bt68AiBIjQfynw%2BcRsQia4Ip7vhCVV4oLMJGrLgmyfDrM5p0USqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpoxDGwWbOj5oC9KBKtwDM6fFp7ZvxQJj%2Bcuv6mhP6EnIOkHZLnojh9tyQijmrGXqjD9X8yeBuU90Om53mFgjHewYB%2BYV%2BT5JSdbGpU4ScO5SkorgL2q%2FbVBM58ESfRbn6jD%2BgGK9hGsUGcK1jYvJc1Iuk6diAC%2FSHCxCFY9U9fab8irgK50Ngjjt%2FkIJnDoJon9UZS1h%2FaCbXtRwIwyEIfojM5acwO%2Bu6WOEigx%2FJh74RndlCT7%2BOkkqGoHmpm1ov4Q87YdH3MDQGAyqauEjZr%2FZXVW%2BKG5bYHLlcbbUKeoE3eHgRwQRzBKrpGUPq5VAKtlmdiQSJJC2ypLLUVN8Es8JJAPU6DFeUBXJ%2FMqH%2FQ4KTa6bY4Hs9TaYEBdIkY70sw%2FxkGI5UsNMmyqNtfvTdZ%2FXSatrh6AGb%2BdpIudMP6aYAupFkhiMEXlFJbzeWzROszEihbgr%2F0wmHMgn2g2ilgBo9ntqSsS6%2Fjl9f3fD0qHaP%2B2ZWldaPP2bTbCMz%2FZBrD8FjuakfCXviwMKOLSuXMrZ5psA4ke15mYcN9Z5yM23oPWGDy5v%2BkRp7OVFjx49raMY024gZMZb%2FCVv60wydinKM9MmgYnL0TRr3ZKxCT7PBjiI3CRRxD6nEbva%2FN%2B44%2B94cNM9Wn%2BLracw7vDawAY6pgHHs5XgZCFr5id72aKNWBrKXKcP8QGurQFujbbnT0puUdBAUiJQ%2BSd7EtQXgJ%2B8e853e3WOKX6d3mklz8nfbDdXsyoX02yfKP%2BSdm48F%2Bcgvgem6d3%2FfJow9l7h67ms8A%2FYthog%2Ftk6vXzNatW%2BuH1g2j6jUwP5%2FdBFswyroT3lFgwVzqfP7G2FBfCCtAxa11rYHWgZSZBvW%2BLDWkXAUuwbSeCLgLu2&X-Amz-Signature=40c4b228a8c9fc919aa9db9c905546fc0e5e177d092298b8b29b8749d8189a52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JEYX65Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC29PVvswf23bzjCGXUGd2dqgnXx%2FOt22bDX4LMZFaaZgIhAN3edEY5S9WOfqTlnCYKbWQISnJsUA7J3AK8QLwxl5M8KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZOOxXQnV0ol7UE4Aq3AP4kuHVgnGz59OKfGFGdBh%2FE9LMX1P6%2BUi29MHV5INd8mPcMdCwXXP1bj7pu%2BRB0F%2B6eGBOljTqdMEV%2Fos%2FGFo8W7Ehmf7hVrXB8%2FjkMO6IhweLg3X2Icb%2B7XppxHVJnePqb3jynIQbpC6Zdz27xhd14i6W0%2FZQ%2BGm%2BBFwWoJF2zZqICxkzq%2BFxEfrCkcIsBQa4tPCK5dlCPH1wFNTH4D1sb6HXkw7MaGr4cABgG%2F1ICe1HrwwyAsSmVK4ieAnXJBNjba9MacHZv02h82GapYMvcX46I8%2BlEasbKh0iI2U3d8FHdQ071Chp9Q9xd0tQLT8s3FZpEVudSxPd1oPO2gFyBKWqdZ%2FbNi9S7xdh4dgQimJISL6dAYRy6eedMG6mbJ1MaO66OVhY6uDF8VRz1x3IYZqFfyiDTFWMfRdHVqXvW66a%2BDg%2FhH%2FreGsoUyuWFm%2B8ftnH0pwnBrDWv7TZyKpOm18bDMe2YV120h86o3ieYeJfMqLubUFSfXeLrxP8MBEEYGRb3jBknmIBwfJzMGZZHZdi98yCnlezuGCiyK%2FMII7%2FXVudOtkcth0Q5W2ij0Yrz5LktgdofTK%2FhrdPVdX38v38rVIHoKqd7PAkXA0WHagFCJT0Cc7SppINwTDk8NrABjqkAbZLc9WhnlQZe9f1gmZG9OowpdiraV%2BOvDYZBFtLIg7rrH%2FVczLSRWB6shgmQW8diGfmYdznZgMCrscFJ%2F%2FJaGv5%2Fg6i7EBKS89XTJwqs3UENeHg7ExH6CGOrCo6EApGH4%2FxAN%2BLDN9P%2FzpqHwFpfICFkbixhYXGCTMBS68ABMovTR%2B37YFGse6U4YaWYJrQUFcIBUrteA1edOvxM8AwGG83Fj%2Bw&X-Amz-Signature=1ad0748d1142a2c1a406c17651d3a91ad569d6219431f4d613521e5701f2ebd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V56O2IU3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICxm%2F0M5ZJboGleO8suANTq1EXP0pzzhAH%2Bppkk%2B4VduAiEAndcGfRMoT84iCobgZUdAux9nAmXaehOgRhbaKQtlEN4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxSihelBL%2FU8%2By6FyrcA1v42QgwmHKeokhW5RqdM9pEtZ9xEIQfSKfIqcKG6S7h00BC5m9t6C4jPfPwXDyRHgGIbA8QlRUJHk1qUUMDnyf%2BLwpcuRXWV3uViLhE6qJkBfrkE7fZd6TkS6HWtAa0obaKhvtoaNeb4TN22TYrbAf3FqmZdJzZM0OTckdq5LV%2FKETIq%2BlxgMEqipMoi8GsM%2BPvWBA%2FLdv5hu%2F17UWudJJa6pYZrxOwBKMRowqECVSS%2Bylv%2B2nRgZRS17cF%2FNnMBZsGJ0vVD7rDjUcXYNpP1rHLpOkNpeP8pvKxrZ9bXnVc1pKsyWvruCThIFgSb%2BJ2Jfrke4WhKnYqTKZ4mBD0q2SHS6osIBpLC5QXncEBQlcx3TjF3hh5RtrP8%2FVjRD6SMrO%2F3QeVdJtQCWrms3%2BKyyGKvHfWy3whytIPaGGd7Dly6kazQ24fX%2B9oBnRPOmqYDLM1W3dZvoFxA%2BxH25fQE5ySbodrjWRLazmjhvxUCiqUyVPI4O4TqO2vb3KhOtI%2F%2BYJmKBvctqGxsRoiJJ8K2jWwRI%2FCi0uO1vrt4Z9F%2BgC8SRxjT77%2FwPnhvhEHYcHXRgyIiBYME68Ia%2FXFB%2Fh%2Fpz5TV4RyJ9c2CU%2BjoJw%2FRIUuih3zqyJqMslgwCwFMJDx2sAGOqUBTNe3RVHYQKCN5weGp%2BOigCARWl4F33j3WY9%2Bq2GDrD79DFKcLXmDVOcpcdCiBzwuZzuB9b%2FlNtWmic%2BYTfvz9hsMUfBHp1DR%2BGABdJoAraqjy6EibhLmlhsuxGaLGJm4DZ0ZZxwYTGiz6qXrlo02Tt2%2FP1jQDCl3S3NRVHjdetPh6ZRJcdT3R09QYnfwoMZ47QlFbe8tO27CFj7L36afSEZWV48M&X-Amz-Signature=668eac714e668c92d7582597babdcaeacc89c845b305dce4edd4e5e0f6177dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
