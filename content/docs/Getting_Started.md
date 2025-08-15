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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V754NMNN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDLChDD4Q1n%2BMEBLJ69zrCqHwJQYyVEvJlQ9ltuV%2BwL%2FgIgJl2EZr%2Ftg6ARdWAOtrnBqXWqvKVMCATwZeIj%2BMBeU4Yq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBIQL9IXfsrR%2FQ7I4yrcA0k9p5aE57QVkkKkk6DjjmYrTseCVcbL2B63dINEUOqyYi%2B59QCGH9ocF%2BTY9s%2FC82uvkMZaY6Os3txDWxDgtgx%2F5flLUV%2Fwgp0V993KSwbf7K6dcFFDRdvJ34MtoRP%2FPWOoU8Gn9yE%2FCZ5y36HQZl6IzKbawMmeWq4QSOglgYq7bKePLkBgd%2BLTx3nmaCEpRg4ohnH8gsaRe8FIhI77Rw52zLqjwz95TMn7T9mSetYqfJMU6hR%2BX28FfUwTVYABuWDPSTXBP%2F9nkOyAMGLEWFW9eK3Sf8Nf1HGWrVMx99VTCt4G%2BArsms1EAu0ZARHO3DtXN30odDvHJRV6XUFjsRSY%2FdG5YhLF7TsfnauBdSg%2BYrdGJcT%2BMinCsGyzMbDqlkX8GoQiVoPpPCdiCM4CzKeyo%2Bt0HDCmFvPeLYfwU368GHxNr9a6llJT%2BxhanCEZSTjrn2IqTxlI1uxWAFJT%2FeaUr%2FN7wH2VLMyxzkB7Jz3c7L3ckzTf5O4lqgmFnqsCVpE7jPuDmv9ub6ylzWMrC3SoLiKW%2B3bEvUTgX9WUW%2F3V%2Fp9DFYj769gDZjuxi4JeFg9DP27%2BE0VHvnyhpgFo3CfU%2BJGY%2BjhPlxmrbv45UC0OfudNfMRaKrI3pT9zMO%2FX%2FsQGOqUB1cUomcD1yeE5bYBgOPfJkKYk8fS0upSbhCxo%2FueEdbPdd7cfsWV5lLnysqKMoBGoU87RGKn3%2Fz3Oi4GqP%2BgzKdBn%2FXpav1RQpt7jkn0aqzIS0F5ZPNS8Gq%2FttwTSKlPO%2Fa3Yl573cM%2B7HO9N0fN3jUGA7xduhK4Qzdpk2bSDoafpeRGPdLzM3%2F%2F7olQZFHM8HQRk1ZxZUONhGlC3Q9iDsmQEpp9u&X-Amz-Signature=977cf5389a99b8550de4317b2b46443d05f82712fb1355416b87fa5e014ea7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V754NMNN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDLChDD4Q1n%2BMEBLJ69zrCqHwJQYyVEvJlQ9ltuV%2BwL%2FgIgJl2EZr%2Ftg6ARdWAOtrnBqXWqvKVMCATwZeIj%2BMBeU4Yq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBIQL9IXfsrR%2FQ7I4yrcA0k9p5aE57QVkkKkk6DjjmYrTseCVcbL2B63dINEUOqyYi%2B59QCGH9ocF%2BTY9s%2FC82uvkMZaY6Os3txDWxDgtgx%2F5flLUV%2Fwgp0V993KSwbf7K6dcFFDRdvJ34MtoRP%2FPWOoU8Gn9yE%2FCZ5y36HQZl6IzKbawMmeWq4QSOglgYq7bKePLkBgd%2BLTx3nmaCEpRg4ohnH8gsaRe8FIhI77Rw52zLqjwz95TMn7T9mSetYqfJMU6hR%2BX28FfUwTVYABuWDPSTXBP%2F9nkOyAMGLEWFW9eK3Sf8Nf1HGWrVMx99VTCt4G%2BArsms1EAu0ZARHO3DtXN30odDvHJRV6XUFjsRSY%2FdG5YhLF7TsfnauBdSg%2BYrdGJcT%2BMinCsGyzMbDqlkX8GoQiVoPpPCdiCM4CzKeyo%2Bt0HDCmFvPeLYfwU368GHxNr9a6llJT%2BxhanCEZSTjrn2IqTxlI1uxWAFJT%2FeaUr%2FN7wH2VLMyxzkB7Jz3c7L3ckzTf5O4lqgmFnqsCVpE7jPuDmv9ub6ylzWMrC3SoLiKW%2B3bEvUTgX9WUW%2F3V%2Fp9DFYj769gDZjuxi4JeFg9DP27%2BE0VHvnyhpgFo3CfU%2BJGY%2BjhPlxmrbv45UC0OfudNfMRaKrI3pT9zMO%2FX%2FsQGOqUB1cUomcD1yeE5bYBgOPfJkKYk8fS0upSbhCxo%2FueEdbPdd7cfsWV5lLnysqKMoBGoU87RGKn3%2Fz3Oi4GqP%2BgzKdBn%2FXpav1RQpt7jkn0aqzIS0F5ZPNS8Gq%2FttwTSKlPO%2Fa3Yl573cM%2B7HO9N0fN3jUGA7xduhK4Qzdpk2bSDoafpeRGPdLzM3%2F%2F7olQZFHM8HQRk1ZxZUONhGlC3Q9iDsmQEpp9u&X-Amz-Signature=642de5b57384c10c04ce17c2f8d3d3a92234a400fd7e51c74db5fbf4d4a7ee6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V754NMNN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDLChDD4Q1n%2BMEBLJ69zrCqHwJQYyVEvJlQ9ltuV%2BwL%2FgIgJl2EZr%2Ftg6ARdWAOtrnBqXWqvKVMCATwZeIj%2BMBeU4Yq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBIQL9IXfsrR%2FQ7I4yrcA0k9p5aE57QVkkKkk6DjjmYrTseCVcbL2B63dINEUOqyYi%2B59QCGH9ocF%2BTY9s%2FC82uvkMZaY6Os3txDWxDgtgx%2F5flLUV%2Fwgp0V993KSwbf7K6dcFFDRdvJ34MtoRP%2FPWOoU8Gn9yE%2FCZ5y36HQZl6IzKbawMmeWq4QSOglgYq7bKePLkBgd%2BLTx3nmaCEpRg4ohnH8gsaRe8FIhI77Rw52zLqjwz95TMn7T9mSetYqfJMU6hR%2BX28FfUwTVYABuWDPSTXBP%2F9nkOyAMGLEWFW9eK3Sf8Nf1HGWrVMx99VTCt4G%2BArsms1EAu0ZARHO3DtXN30odDvHJRV6XUFjsRSY%2FdG5YhLF7TsfnauBdSg%2BYrdGJcT%2BMinCsGyzMbDqlkX8GoQiVoPpPCdiCM4CzKeyo%2Bt0HDCmFvPeLYfwU368GHxNr9a6llJT%2BxhanCEZSTjrn2IqTxlI1uxWAFJT%2FeaUr%2FN7wH2VLMyxzkB7Jz3c7L3ckzTf5O4lqgmFnqsCVpE7jPuDmv9ub6ylzWMrC3SoLiKW%2B3bEvUTgX9WUW%2F3V%2Fp9DFYj769gDZjuxi4JeFg9DP27%2BE0VHvnyhpgFo3CfU%2BJGY%2BjhPlxmrbv45UC0OfudNfMRaKrI3pT9zMO%2FX%2FsQGOqUB1cUomcD1yeE5bYBgOPfJkKYk8fS0upSbhCxo%2FueEdbPdd7cfsWV5lLnysqKMoBGoU87RGKn3%2Fz3Oi4GqP%2BgzKdBn%2FXpav1RQpt7jkn0aqzIS0F5ZPNS8Gq%2FttwTSKlPO%2Fa3Yl573cM%2B7HO9N0fN3jUGA7xduhK4Qzdpk2bSDoafpeRGPdLzM3%2F%2F7olQZFHM8HQRk1ZxZUONhGlC3Q9iDsmQEpp9u&X-Amz-Signature=e2100a2610bff591aaa097ddba8d040fc9ec5d86a700f53b52d3e0778fb70472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WAYCTE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDey10IYhbOTN5nUF3OlHiAkHsDy08wyMEFQq%2B0DFGSlgIgLy7mWb4EHt1ogim%2FY1aUUiGlAhY%2FunG1NROeAWPmplMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBL%2Bd1%2FoH7M%2BqxxN9ircAzPQiPWu1FpDTxJgckyJR%2Fdfnvhra7ocjU6HESgpQmIarcckC5MssNwCjAzsW%2F0%2BuJkJHxUxdDbnYBvCbA70bY8JXoC8kEhEfSrVFOcQSLLpgKYjkLdV6rJyFCF28qfs3S7SlmNJrjA%2FIGWj%2BQ9rxGzl%2BjTDDWRRGUpShmA420Bl3wZXoE0s0Su2Ow8Gr4bbZ3NLSB7ERaPGYMssya3Fy7iQKF02s1qt2maYzm4jl%2F%2FSB60MUBCBIvDf3umvos%2BQktyWaOtUURFbnDEtwnSnZmNPxPQiJwMRl1NLrpotVgRhKDTXRG06hVvaANl22aQd3AGcG6TGsePRrNtlHl27AsdZjSZaLQSr%2BQkqENupVIZ%2FYqWf5MfBgJh16RhDOyUrHHTXla1KYhcMoUp12CgB7pYMMFFn5Zxv%2FD2%2BzqC1rhiJQ1%2FJCISHcZn7KHP%2Bylqpwfi3gUNIUPLLfiBtmRhd4BRT7FTgpng%2BCoku4hUdvboo%2BwFiYcJHqDiWYwMlecYr9A18h6wyc%2BdJs9JSMsA89wYAKUg9EZ0xKdHN30spv6qZRXvEeZm2g5u%2Bu1R70hfn9If4gV4gCWmST41A4d6PsmweRS856YXkezsxVrcf%2Fytmzcihndc2R6k1xGW6ML7Y%2FsQGOqUBz%2BqozDGNMvjrcqq8pJu3fk%2F74GHCyD%2FJOVfZ6pN0IYBuErAaFwdgGXHeuB8i7egJfYbvDzgnY88KIVfJAPT5WcI7SdKAB%2F31z3V%2BwRzR2bVqwo63tzsccye08yxy3SiowzqfCUTBcIi%2Bk0ApYKi1XdG2pC3t9mBBspoX5nGJCxjUKhVgTKejzl3EaGUi5zvJHfuY2vgTPX9%2BFKAsdKIq7Hy9roxG&X-Amz-Signature=f0f1e009d9c510a422b61a9e8bb505d512ea533f280ef7a56ca5f62bccf6e2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJEITXI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC5fVXiCgC1XNZfPhGLFgblNJV00CC1jovbU6S8P0ZHvQIhALjWVMT6OqNDsxcnwxL%2BQbBgCn41WH5uGWqUk%2FkAuI6wKv8DCGcQABoMNjM3NDIzMTgzODA1IgzhrZlxYeuZ65Q2kZ0q3ANe%2FRqxIszaBYZ73Uaxqr6cth%2BANwn6P99KNSc%2FCM8iVsQjTDWWMefymdCpNdo3ULlP9QmjHaOe02bdUiFbvLS96w3Dp0%2Fqm6%2BoUYVIpqp48G9273aE1Esckdjw6MNiJRuR8V%2BBr5aAK1yA9b5gkvP9qkZsVB%2BVZfYb8w8jrgiAEy7COmyhYQl5H2Hp9vxrMmp59MHzZnIcmuLyfVpIfakPuNagIur0ch7JKGOFb5Tm43yUB8ImDD8zJVSnsDuuuoUVwLwNlp6flnJoCRpy0QE963CF8Bc5fMa4QesDVQ56U2ZmfVc5Lum%2BFkzBp0sCKdf6jykTt2PDnrzirtP61w3A%2Bc5NzpLwdzcUFXoVwxLBW1HPIGmN1Py5drNKdAISkjji8sNZEJIJCA3cvMVKlyzTY%2FBf0ntXpLmdkuu2z7VuOcK5EqruClbO%2BiuJVw4u9%2FEHzM5ssGbkQO4kH5G%2F1o8Fm%2FhQJ%2BFjVniESrfWnzBSwVxRMQuV2Mcyyj9Ge6kzddxe%2FIXxi1XY2bnGOVQpLvaiIMOEEL2tBNtRi1Hadde5GQGmIiPAoWGrOzMsssr9ODKqEAVGE9STpYLFGOm28tTrt9Xe4DA6GHzjlXjT0K%2F09VNH%2B4rjCOpMLHmgADD81%2F7EBjqkAbR9XeNJU4HzlyQDQrdMEwKCtCtZCIhYlBK3sztdQ3UMnxtWx5YZoDaJSG4RkxNwzUQ30t0TwElWa7xYgaehYQHhrWDDy4fMrYD3n602lBt%2FHYnvnUQvFTCCPAqo5FZ5aosq0OsbcpWJFNbeElPzpSqUiomSjfaVE36sqLL8IKd4GGEAmUUq03X7ML511qssWAnQXpnblLaJhWtUgVY3YjzziAW2&X-Amz-Signature=69df1220e7af8b538fd33b7d2e552680970bdd0c78ae67145c63368248b8e5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V754NMNN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDLChDD4Q1n%2BMEBLJ69zrCqHwJQYyVEvJlQ9ltuV%2BwL%2FgIgJl2EZr%2Ftg6ARdWAOtrnBqXWqvKVMCATwZeIj%2BMBeU4Yq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBIQL9IXfsrR%2FQ7I4yrcA0k9p5aE57QVkkKkk6DjjmYrTseCVcbL2B63dINEUOqyYi%2B59QCGH9ocF%2BTY9s%2FC82uvkMZaY6Os3txDWxDgtgx%2F5flLUV%2Fwgp0V993KSwbf7K6dcFFDRdvJ34MtoRP%2FPWOoU8Gn9yE%2FCZ5y36HQZl6IzKbawMmeWq4QSOglgYq7bKePLkBgd%2BLTx3nmaCEpRg4ohnH8gsaRe8FIhI77Rw52zLqjwz95TMn7T9mSetYqfJMU6hR%2BX28FfUwTVYABuWDPSTXBP%2F9nkOyAMGLEWFW9eK3Sf8Nf1HGWrVMx99VTCt4G%2BArsms1EAu0ZARHO3DtXN30odDvHJRV6XUFjsRSY%2FdG5YhLF7TsfnauBdSg%2BYrdGJcT%2BMinCsGyzMbDqlkX8GoQiVoPpPCdiCM4CzKeyo%2Bt0HDCmFvPeLYfwU368GHxNr9a6llJT%2BxhanCEZSTjrn2IqTxlI1uxWAFJT%2FeaUr%2FN7wH2VLMyxzkB7Jz3c7L3ckzTf5O4lqgmFnqsCVpE7jPuDmv9ub6ylzWMrC3SoLiKW%2B3bEvUTgX9WUW%2F3V%2Fp9DFYj769gDZjuxi4JeFg9DP27%2BE0VHvnyhpgFo3CfU%2BJGY%2BjhPlxmrbv45UC0OfudNfMRaKrI3pT9zMO%2FX%2FsQGOqUB1cUomcD1yeE5bYBgOPfJkKYk8fS0upSbhCxo%2FueEdbPdd7cfsWV5lLnysqKMoBGoU87RGKn3%2Fz3Oi4GqP%2BgzKdBn%2FXpav1RQpt7jkn0aqzIS0F5ZPNS8Gq%2FttwTSKlPO%2Fa3Yl573cM%2B7HO9N0fN3jUGA7xduhK4Qzdpk2bSDoafpeRGPdLzM3%2F%2F7olQZFHM8HQRk1ZxZUONhGlC3Q9iDsmQEpp9u&X-Amz-Signature=9ccba65c254df861f601028e78700c41a7dab29280812e3351b3342ab5d25488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
