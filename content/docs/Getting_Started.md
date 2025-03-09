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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7S6TMZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC6BgfY%2F8Kau8vTB4hLQalJT55J5PoChANJ0WQTtXFy3QIgNhLN0hog%2BfeIyxEMa0ZJcgqNF6DSkyFxRibLKiCItn4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLiA3bY5BkDaTUWMRSrcA7KaSfdlQN3NMmjTyoTklPZVeam1qH7qPoXKxM6NYfjSSzLMIYgUAmelTfSRAlwCdrNhoskcQcxQQtP2gA6fEIsTz0H19hTMt1uZcET3isP%2B67VrwCF6Ocj1hJuGD1ZSL3%2FhGxR7c8IfvgvaYeNQT5UnXM7nJjHLhcqGh5Az65eU1b2KrP597pNJAQtikzw4CUPn3dPEj6ot6XC2Vwns3LAsZ%2BhR0Oc50owHyZpQEAnUM%2B%2FXcoG6p%2FM%2Bmhe%2Bx%2BXKybX62xXC%2FUOa92hS7%2BYkQ2ZNP%2BHZw3DcgPdJP2YQCnFM8t7q4Jd4C1sh1foMfgZV95dr%2FJwzurldlK8FP1bq9a9t4d2nCs7sLp6ldhMtL00R1eNYG%2BoTIMbSI68dNl1sfFhDC4YX7KSpnfYCpwH1BSBfafleKP5lyoki8ygYX6I9h4WAQ3laQU99GzBOiEcwU%2BirXp2Gm7RbYfMd3ZrcHQy4oKowELh2XGGsNUBOsCv0NUpPJaezUBPJ9XWfwTLiaHHRJQGFuxrb%2B0Hl1XdSV%2Fq2aFSikcBaDOof6nR0JP%2FOFcaouVYxcjkPd9VIEYqygu9pMdtzEw7l%2FfTw2T%2FF6PrgxS3GQVp6AMYk7C995HhnIP%2BBBWiZQIGG5mlcMOjrtL4GOqUBKptYX7%2FS9S9TJvxopFb1PY%2BuyLNLo%2BlcdO0uUIDvCha%2BkNgi9zEvly9lB9bsZcDw6D4KCS2CXF52VCGqecVPnyjn9OgCdOS3VSLcpKQKlJkSpAMPsbDPuuFFbXU9lIzX%2BooQVNDXrDwCEawlW6MAU4701GTypyrb43Yq1cdhyxalT6TMpG3S4Z9SPYrIkGs71zJ0PD7YyZfz%2B9WDAj6CD6e2szSe&X-Amz-Signature=fb73486f288aec9392defa255b76bc9ac22d3e4c6b0fa51a59598290ada6972f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7S6TMZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC6BgfY%2F8Kau8vTB4hLQalJT55J5PoChANJ0WQTtXFy3QIgNhLN0hog%2BfeIyxEMa0ZJcgqNF6DSkyFxRibLKiCItn4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLiA3bY5BkDaTUWMRSrcA7KaSfdlQN3NMmjTyoTklPZVeam1qH7qPoXKxM6NYfjSSzLMIYgUAmelTfSRAlwCdrNhoskcQcxQQtP2gA6fEIsTz0H19hTMt1uZcET3isP%2B67VrwCF6Ocj1hJuGD1ZSL3%2FhGxR7c8IfvgvaYeNQT5UnXM7nJjHLhcqGh5Az65eU1b2KrP597pNJAQtikzw4CUPn3dPEj6ot6XC2Vwns3LAsZ%2BhR0Oc50owHyZpQEAnUM%2B%2FXcoG6p%2FM%2Bmhe%2Bx%2BXKybX62xXC%2FUOa92hS7%2BYkQ2ZNP%2BHZw3DcgPdJP2YQCnFM8t7q4Jd4C1sh1foMfgZV95dr%2FJwzurldlK8FP1bq9a9t4d2nCs7sLp6ldhMtL00R1eNYG%2BoTIMbSI68dNl1sfFhDC4YX7KSpnfYCpwH1BSBfafleKP5lyoki8ygYX6I9h4WAQ3laQU99GzBOiEcwU%2BirXp2Gm7RbYfMd3ZrcHQy4oKowELh2XGGsNUBOsCv0NUpPJaezUBPJ9XWfwTLiaHHRJQGFuxrb%2B0Hl1XdSV%2Fq2aFSikcBaDOof6nR0JP%2FOFcaouVYxcjkPd9VIEYqygu9pMdtzEw7l%2FfTw2T%2FF6PrgxS3GQVp6AMYk7C995HhnIP%2BBBWiZQIGG5mlcMOjrtL4GOqUBKptYX7%2FS9S9TJvxopFb1PY%2BuyLNLo%2BlcdO0uUIDvCha%2BkNgi9zEvly9lB9bsZcDw6D4KCS2CXF52VCGqecVPnyjn9OgCdOS3VSLcpKQKlJkSpAMPsbDPuuFFbXU9lIzX%2BooQVNDXrDwCEawlW6MAU4701GTypyrb43Yq1cdhyxalT6TMpG3S4Z9SPYrIkGs71zJ0PD7YyZfz%2B9WDAj6CD6e2szSe&X-Amz-Signature=b91c23db5bcd1f2434840428477ef16130b23baa383aaeb90c256308e5d5425a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPJNOMK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIB7lu3OkAIU6BJWdSyo1T%2Fx0TpswfStqgqWK4EKGy5NoAiBUhK693vQj5PVQZvVT87kpImQbRYn%2F6U8WzhC9kkAbgCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2Bmimy2AUrt10TtNUKtwD3oGlWdO1VU7ozVaHldGRIqAUebSStoRtHN%2BkSHhIXbw6tazJBHYg6ua%2BDamd4gLM%2BC0pnqlF7dPatfYikilyVvfemx4IAHFmQGSbNCRTlbcl7izVELAhLswaUMYQde955Far820STWqyGxzxTx%2B9QQQ5X36%2BSBQpwUCnUWovkxxU3nqBLZf1nwpAeZ5VWIdAfU2vF5Z6m9Acb8pEPsCQG%2BgA7R2%2B4kL4Vwko3LtgLnzeQf9bkQmErpR6SnyKU9xfXsyuRQ7vN0EtSr6PjlrSchZE4KIFTNcv0UfD6QtzsIhYLJaXJ11J0E76qdTwdN3gNCV4I%2FId6K3TDs9bqgZm%2BWoNs3lHOWapWVklMx8Ra5xMZMhjez1CDllejhtTqINEPzNvRXpTp8OdOzegCyqLvdM6ZY33Q2Sl4qLQ7ZDYCV55EV%2FrkzVS7eYhFxpyid9PJMWcV7SH2hwNR%2Fk%2FeQUHxyLCprhzlpjzFa9Oa65JiToaeBrzLwWs42sT7SGPhcSxNt5m%2BpNiFh7yTPuiS7V7I0thNSsgr8enNNPLEcBzGwGWTWe5AYGqWhJuYd%2FpBvQYG7TIBpkW8jmnSDOrBAiCuLw8byh7wOMrTlS4GUd0NXbycd0eYPXSmkMeoakwn%2Bu0vgY6pgF04%2FFYbc14k0%2BeW4d0dNKHIvflErRuMalC3MADejPXgZi2urVF55LHj%2FP7aEJRdkfWusV5EeLW4lqZTZ7dQjl%2FsgEvy%2FBWDiW2QUVlznEabHyHwacVsvwGJ5xQ3hwJ5pnFPodCXBeSJ7NcBLlARb5YgaLMBCMP2H83S4N%2BncBU8jh6BnBWElmhe9ek02r1VBps83kkcn7EEAScUZfrPc%2BFfxRo2q%2Bw&X-Amz-Signature=8c84f7a25f77abb82b2c972c2342b8646f849bad9553cb1697aa0b1387ed85da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL3UQYH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCeq5XSKYhWSxRCdQLESpoFW%2B8J%2BCvzBnXjDZjC2%2Bfz7QIgUUvvx5lrBEHGOzkuTqxaadJefBSdDWyRMRETLMFHtwsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJaxIu9NumP34hTMJSrcA8FQ0j%2Be6DZvgrtYBukC4Eptw3AfDKBHNzDUHR4yxjvEHIRTUE5Mtcq5txxm6QrcKdKcKLwJiC65ITDpk0%2BSn3K%2BPExzCSa%2Fv586ElSPJcv7NseHLyj1EnpuEluR1uSxW68Ye3KVfVHDf9PtWnG3IPZgljASRutF84vgfKnLn4pxjMNs1gld3dkm6M20NWlTjL5LxwUkJHcv%2Fm0npBou7HijAtLOdhZqYkkB%2FebrNoJ9vH6DAimfFGMdzI9B62MyAjm53c7rEasaeIQUQ%2BJElF0yd0qTtrbdtQVLW9oRBpU0KHReTHbgWpMS8g4msWquJqxJo3KHZ5dFoMklbO8Ilme0x9fQQT0qRPWT1wdtR0Ui6dQpAQ7W0wgWGqAxgk8VsF%2BAPEQ5B8Bu3HATSZnRCvGDBk2SoNRA5Axf2Vvrj3dYIQ%2FhK%2BLkbvnOj%2FwpwfIGY6LYkcaxL2Fx6KMfK63sWEFa2zsimq9fwRkH4qTBbfYmki%2BnGsXtFP4Pw1wZlrl4NFarxSVK5ey%2FxSNAVHjTGb3ezq%2BPqw2zv%2F5rpzL%2FhzeP%2F%2BfaU1mXV%2FIghQwnlgLje5mTvT8OmRYXcec44roEzd%2FPKWPfa1EKkEm1RjJqvm6bm63APpfUhRz4lLSOMLzrtL4GOqUBcjZGC0vmOsn60uyzNMpCJujtYqQ9YhIg5ERMGbMDEKLkROFysB3iZsczue67asU9Ac7k71mt2llRQpfOGMD3%2BegDn3zfm5E8EeKp7cOZeUIlAGD1TeMmnqwMa7gczagcEFae2Rqy%2FtY0azRuf8Q80ARW1yJMN91o8CtgA51tHTEf05J7%2BQtPcy8QNj9p34PUCHQYzDqto3vb7GfHLu4hf6xpNIaf&X-Amz-Signature=bf75383eef05672e59b3ab28ebf46eec83153d26f4d6497c754c8c8abd8e2cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7S6TMZE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC6BgfY%2F8Kau8vTB4hLQalJT55J5PoChANJ0WQTtXFy3QIgNhLN0hog%2BfeIyxEMa0ZJcgqNF6DSkyFxRibLKiCItn4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLiA3bY5BkDaTUWMRSrcA7KaSfdlQN3NMmjTyoTklPZVeam1qH7qPoXKxM6NYfjSSzLMIYgUAmelTfSRAlwCdrNhoskcQcxQQtP2gA6fEIsTz0H19hTMt1uZcET3isP%2B67VrwCF6Ocj1hJuGD1ZSL3%2FhGxR7c8IfvgvaYeNQT5UnXM7nJjHLhcqGh5Az65eU1b2KrP597pNJAQtikzw4CUPn3dPEj6ot6XC2Vwns3LAsZ%2BhR0Oc50owHyZpQEAnUM%2B%2FXcoG6p%2FM%2Bmhe%2Bx%2BXKybX62xXC%2FUOa92hS7%2BYkQ2ZNP%2BHZw3DcgPdJP2YQCnFM8t7q4Jd4C1sh1foMfgZV95dr%2FJwzurldlK8FP1bq9a9t4d2nCs7sLp6ldhMtL00R1eNYG%2BoTIMbSI68dNl1sfFhDC4YX7KSpnfYCpwH1BSBfafleKP5lyoki8ygYX6I9h4WAQ3laQU99GzBOiEcwU%2BirXp2Gm7RbYfMd3ZrcHQy4oKowELh2XGGsNUBOsCv0NUpPJaezUBPJ9XWfwTLiaHHRJQGFuxrb%2B0Hl1XdSV%2Fq2aFSikcBaDOof6nR0JP%2FOFcaouVYxcjkPd9VIEYqygu9pMdtzEw7l%2FfTw2T%2FF6PrgxS3GQVp6AMYk7C995HhnIP%2BBBWiZQIGG5mlcMOjrtL4GOqUBKptYX7%2FS9S9TJvxopFb1PY%2BuyLNLo%2BlcdO0uUIDvCha%2BkNgi9zEvly9lB9bsZcDw6D4KCS2CXF52VCGqecVPnyjn9OgCdOS3VSLcpKQKlJkSpAMPsbDPuuFFbXU9lIzX%2BooQVNDXrDwCEawlW6MAU4701GTypyrb43Yq1cdhyxalT6TMpG3S4Z9SPYrIkGs71zJ0PD7YyZfz%2B9WDAj6CD6e2szSe&X-Amz-Signature=05515fd4e6968661c698c2b235bdf01d33d791906038c646eba0fbe66bab9e71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
