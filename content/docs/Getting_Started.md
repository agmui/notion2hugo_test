---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MCYNCU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRae5fxrkmeAW8%2FK0dJHv83pwCITIxOnnjFkSFP9Q7fAIhAOZBbLTYhJP3vZ4mD35MYwiWRywCsEkSryono6DC%2FmrBKv8DCE8QABoMNjM3NDIzMTgzODA1IgydCb5Fjc9ElVhFv4gq3ANr%2FLoQkvBj%2FfIvZ81T6Sbz7yIi9hER1%2BPaiVtjXH33%2BlpEAQ1G%2Fb9ONdj7Ctr2cL5%2Bz7CoUf9ZF8scnSd7GPCTz5MG7xpWGF2069h6bFwbEFSaJmeGyN8j%2FBmZs%2FHfKOb0DHFdgSQ841NznEbXgXTpy85n%2BMtNDipHv672cUirlx033t4Tta16Rp6A1ObeVBpmolNnUDcpfsBK%2F3xSMh0sgiyBAU0T%2FGOCzgVkbJearC75%2BDt1tbb0RVYWdshi%2FUcTIMIjqZyF00gpKELmskIpqAENbkBTmdUht973gpSuq1ce8qKGsOpEHPWUHs84jRgWzUMR4R7cMmXtQNz9vaKpLvbjCiBGKQquQaVRUJDjLCxzbied%2FYaomsX7z%2FuvtIQhCySA8YC3rMJ19DgXzjLLXA5NPT95cnWT2mQJNrOwJ8zyK8bFJDn3D%2FFTyoTshs752IgH26hYWnK%2FIiGqwfdUaL6p5K7AtM7uNyol2jmmP8rf41klulbKzNV6UnRikoOB%2Bb34%2BAH4UhwJf2UBKGNCqOn63mlIvObHY9LMaboI1KLGodbWY8WeiYQ7tjaPNzszL0ndugDDYcoZ5CLXvaJ9r1m5guf6ydcYW5gAvesfZzuKWI5wAVELiO%2BBsjDV9Mu%2FBjqkAeeDAzcPGlYyRHM%2F%2FcGorWk9iEj9gBJzNELYDg3G4Q54mRTWctTlKJWBbfLiB30uzlf0SHtzYCtaYW5TGA3pK8uN7VIxIkQWJhY94k65AhE%2FDLBzAFmCQMtb8ObFmsB%2BMBOnq%2BElucugJK96kVCMpBFQbf7PFqHFLKSHIiSIV3%2FI4grmnvLulmM2g7cPf5DJ2V3%2BOVdHeKTlSDS8ddKKgcXqCXBm&X-Amz-Signature=8d96e1af97730680986257879c96d30f9e052ec926ab14b0e0f1df1686886f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MCYNCU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRae5fxrkmeAW8%2FK0dJHv83pwCITIxOnnjFkSFP9Q7fAIhAOZBbLTYhJP3vZ4mD35MYwiWRywCsEkSryono6DC%2FmrBKv8DCE8QABoMNjM3NDIzMTgzODA1IgydCb5Fjc9ElVhFv4gq3ANr%2FLoQkvBj%2FfIvZ81T6Sbz7yIi9hER1%2BPaiVtjXH33%2BlpEAQ1G%2Fb9ONdj7Ctr2cL5%2Bz7CoUf9ZF8scnSd7GPCTz5MG7xpWGF2069h6bFwbEFSaJmeGyN8j%2FBmZs%2FHfKOb0DHFdgSQ841NznEbXgXTpy85n%2BMtNDipHv672cUirlx033t4Tta16Rp6A1ObeVBpmolNnUDcpfsBK%2F3xSMh0sgiyBAU0T%2FGOCzgVkbJearC75%2BDt1tbb0RVYWdshi%2FUcTIMIjqZyF00gpKELmskIpqAENbkBTmdUht973gpSuq1ce8qKGsOpEHPWUHs84jRgWzUMR4R7cMmXtQNz9vaKpLvbjCiBGKQquQaVRUJDjLCxzbied%2FYaomsX7z%2FuvtIQhCySA8YC3rMJ19DgXzjLLXA5NPT95cnWT2mQJNrOwJ8zyK8bFJDn3D%2FFTyoTshs752IgH26hYWnK%2FIiGqwfdUaL6p5K7AtM7uNyol2jmmP8rf41klulbKzNV6UnRikoOB%2Bb34%2BAH4UhwJf2UBKGNCqOn63mlIvObHY9LMaboI1KLGodbWY8WeiYQ7tjaPNzszL0ndugDDYcoZ5CLXvaJ9r1m5guf6ydcYW5gAvesfZzuKWI5wAVELiO%2BBsjDV9Mu%2FBjqkAeeDAzcPGlYyRHM%2F%2FcGorWk9iEj9gBJzNELYDg3G4Q54mRTWctTlKJWBbfLiB30uzlf0SHtzYCtaYW5TGA3pK8uN7VIxIkQWJhY94k65AhE%2FDLBzAFmCQMtb8ObFmsB%2BMBOnq%2BElucugJK96kVCMpBFQbf7PFqHFLKSHIiSIV3%2FI4grmnvLulmM2g7cPf5DJ2V3%2BOVdHeKTlSDS8ddKKgcXqCXBm&X-Amz-Signature=c4fe1e9cdc0c2bfde03307ac18e54368d226c202d2f32253dcd0817b745ed4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZQ64KL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BZ2mKe1Q8kBwaUzNC6H393b57N%2BPJkvgQjLdmATGXrwIgfHfvsBIhHeWcG42AsKvMtYQgbEUZsyV1QZYZEMnCfOwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIKRsjNR1KnN6cAwoCrcA3KWmtHKWp5y7AII%2FV6UKjwwvDSvVxNDfAE2Wwr4aR580fYXx5okIws4lNwq5gaCG7GV2cKj6lgvsybJvkfAcueaXFHXPJYEk1S6IAzz1osAz6XDIAKq80ywcR3a5Od5tkoePLu9nquM%2FDycH4fIgl5JFwqHnp%2FrlBpeHRiqIupvDEed%2BTJVXvwBoiQZ29sG763wZXrtPK9hHj9eORIaZAr1gE8UN3QAD7RUs7b70mIOm6osB4ymSr6zgNPT3wqotCUYZbeMeu0ZSXDU1o3gOpaNi8DpTX9EDsxnFwqZVSe%2BlzI%2Bc%2FBHPILlN05HJPc6CeOjugD3w4wCevWe5xmqtJXhFkiEg96PE5SuWOwFremsvTNpPiqtAY2LXU6bszzVfme2D6SInr4pkl%2BeP0Rx8o9rDE5G0jqkmTmw7uasn%2F9MqFfgIiq6psuGYefn2QvOvPts0jjqxP6OMCLT0qfzvY%2FjeS2e%2FzJlUD6D6uXVwmv8hNQ2lD87hkwgwYaRDm8J4DSaYKJjq7QuDCNMK%2FmuSF0kfp3qFIi9J7duF3aGpia5PKM7pIANL1T2B2fZt6nYHPX8G6%2BU6jcQyvMY9R6OdVWsidM6RZTs9Thq%2BZVl%2FqWWA5AL85uegwvPQLC%2BMPf0y78GOqUBNze11DBHoTOiQ1zcfo0t51sZed5V9LRDV15vbDormifLHJeLMzSFf2JGsppk8dT9h2uoJXIcpZ1oRAZLPakWLv%2BY47GLwGhlSywT6XtyQ9Qk8%2BXJXhA%2BkLFTvtvgVH2Tc0LEqZgFx3vBkJApcLxFA5upuf3aVZJkWVuk77BT0SS7gLYLhtOBKY3R64c66pe%2FPLfVDk0A6Tq7Up2zeTgS5%2Bz%2BamqT&X-Amz-Signature=02bc3fef358e365e4c651166619f5ea91aab476a32f78e617378b6b4e4037cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJUI6EQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA2cjNCQ9%2FREvU6zVoQe4IPgWqfO3IrGFq98y83gL8gAiEAnmcPYm1udkFkNVNz6VyJC0%2BFmq8sLFOOaNwTo3TmhvQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEhWHuvT%2FUTozjzzoircA9zmabfSGArpdj1HOflKa37%2Fp%2FAQMCsppveNTWZYvg3q75Pwyu3ANMD7lWLyfhZ1%2Fr9lsYhsspgcpPrt9TYWcqOV4sRse8EVuUXYsCuCK25SbRB6j4AKJQFXeNMwXI1WPxt8ode2%2FJs%2BOBlYvrOQXAPiFg0FX%2BGywcmdXiD63qAx%2B%2BWWVVmRyYGlX54yWZTS9ECvBH8Lz1L7ko2SVCMw53lO30NQPYnNb0gFR%2FoiUVD%2FvzsKoAh8%2FfvUBA4oERGOdeOaKtZx1%2FAZiPoEQI1tEN6oIfFw%2BX1kcI1Kn5uzmD3gQYKNurXd4K050h9iPFUi13J%2BgmYZpEUeXp%2BSU8QQV9Qn4BS4mdHMpbtxH83UoM8d05pKplHBX7VI9g%2BLWMVDxtmWD8rc13GVKkV1orXQnoAV0OGMLXuumFH0MFYZk7Dlqk9uaX4R7x5x0PJd50PKyATHLXVrX2DsQ%2FuBkruHxSdBMabR3erOdBl7Fxwi6twnRkH%2BOjjWfSx16H%2FdtckWxG5BJlpmeMfrZFleQZx1sRtGdEa7SmYok%2BILw4dh0k9DaIPxTxKQ2nx5Pdv8XvqGXSyzBLA4C1YjiVlhcrGsGr2Dj%2Ft%2FmIkErz1dnT%2FSHzk2Xr6ml2l0PVHaO%2BSbMPH0y78GOqUBbe4XWqKoy5jFomMW2%2Fog3T6%2FHUYPlkUmDpYrKSI91pHwb2wdGhcw0okUsl4LUtxTaskmkYGaizE1TI6bYCoIj9BAs8Hl40nG39aVH33XpYyMDH7VA5xrLz0YboLctHvKQnEBZLYAU24JagLjpbY%2B1y5nB8ruQjbcJYjfsf8ovyLvt1HdCV0ho8b9VuPS8Sd34dAF7u0gircacr6953CwSJCKIy2z&X-Amz-Signature=bd8debf226eb9e7541d760333bdaa7b937db2f4e1756898159c3f78c59006916&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MCYNCU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRae5fxrkmeAW8%2FK0dJHv83pwCITIxOnnjFkSFP9Q7fAIhAOZBbLTYhJP3vZ4mD35MYwiWRywCsEkSryono6DC%2FmrBKv8DCE8QABoMNjM3NDIzMTgzODA1IgydCb5Fjc9ElVhFv4gq3ANr%2FLoQkvBj%2FfIvZ81T6Sbz7yIi9hER1%2BPaiVtjXH33%2BlpEAQ1G%2Fb9ONdj7Ctr2cL5%2Bz7CoUf9ZF8scnSd7GPCTz5MG7xpWGF2069h6bFwbEFSaJmeGyN8j%2FBmZs%2FHfKOb0DHFdgSQ841NznEbXgXTpy85n%2BMtNDipHv672cUirlx033t4Tta16Rp6A1ObeVBpmolNnUDcpfsBK%2F3xSMh0sgiyBAU0T%2FGOCzgVkbJearC75%2BDt1tbb0RVYWdshi%2FUcTIMIjqZyF00gpKELmskIpqAENbkBTmdUht973gpSuq1ce8qKGsOpEHPWUHs84jRgWzUMR4R7cMmXtQNz9vaKpLvbjCiBGKQquQaVRUJDjLCxzbied%2FYaomsX7z%2FuvtIQhCySA8YC3rMJ19DgXzjLLXA5NPT95cnWT2mQJNrOwJ8zyK8bFJDn3D%2FFTyoTshs752IgH26hYWnK%2FIiGqwfdUaL6p5K7AtM7uNyol2jmmP8rf41klulbKzNV6UnRikoOB%2Bb34%2BAH4UhwJf2UBKGNCqOn63mlIvObHY9LMaboI1KLGodbWY8WeiYQ7tjaPNzszL0ndugDDYcoZ5CLXvaJ9r1m5guf6ydcYW5gAvesfZzuKWI5wAVELiO%2BBsjDV9Mu%2FBjqkAeeDAzcPGlYyRHM%2F%2FcGorWk9iEj9gBJzNELYDg3G4Q54mRTWctTlKJWBbfLiB30uzlf0SHtzYCtaYW5TGA3pK8uN7VIxIkQWJhY94k65AhE%2FDLBzAFmCQMtb8ObFmsB%2BMBOnq%2BElucugJK96kVCMpBFQbf7PFqHFLKSHIiSIV3%2FI4grmnvLulmM2g7cPf5DJ2V3%2BOVdHeKTlSDS8ddKKgcXqCXBm&X-Amz-Signature=9d4b424fd9fb69b6ca99350946efd4ae387f3e450ba01d869ce4e2d6aca71c51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
