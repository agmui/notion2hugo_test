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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRN5COH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO%2F6wdQ5BcibqiRRxxSDciIFWZbqBLLaUZ%2FngGgnr6wIgNxgOVg8cj6yuzp8x6LFa5P76kT8OsMKRORd75E9ArCsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHO7fEjJxpVo3t8EeyrcA6i4lmNvPkIVuqBSxAlUt%2BE14t1mUX%2FT1iakoYgJQDgxgwXdvZcB7U93J1xSL6%2B9DXg2MN2US1e%2FjHfRjU%2BXt5mq6rskdzhzxy7KWxkFiHnh67OAEIumn0OWkKx1F1btYAGo51eUI56vMoQ5osIDdJD4zuXfMOxb%2F7SIlFGT1wGvh5eOP1T3xf4%2BXJ8RnbRuPlKXSc3nlGUiJ%2BmYoD3rDJ0oo4Skc0gWrg59Y8MpbFTmkjlr%2FWA27%2FlkYQgB4whJoOXG05iH6DY9%2Bin5kqF7O9TbnRC%2BHq%2BFm4v5jVEybEo%2F00X1LXi7Gd%2FWEBWGoprSY0HYdVctlJkhjCjb%2FFQCWxT1aeOBndxRLTtswrVzKvlhQ9AG8lZfK7UHNSioTZcFKGRamsMzQTyN52cbHHSE1Fnh1Wv0lkqs07ClyWdo3OiH%2FW9rITuGT%2FG9bfD5CdjP5icw1O5MhdcYK0UPtIxvkbTYaXLkKEaW0tC6e6XnTvztI49Ed1ObQivOy%2FjHmm%2F%2BrpE18eL0jZoUZG3xQjTSoicbzqSP1qs8w79aVohV2Y2L7YBlAAEFoyx7QkyESs%2Fgma%2FgmHK1WL%2Bms7kqyatXg6MLN9vsWP7jzhM68ddcC5Djp8XVi03Ygnvr9VbVMMnCxr8GOqUBHoxKyJVEj1SzEEtKyl2Y1a2BGwszNAl6B6VTU6Sdhd9Inih8MLJwCYwEy2FCaCZFYJD6YfwOEvjO%2B%2FCpM5R8UJDrxjrHOCvwMMgL68Vhrye7BRfb0TpUBE0p%2BANbMT1yUAQjXgZ9r7sOYxWInxrkaxby5ulNTIvWRI0DQxVgC0AR6TIp7I5qDLmP%2Bq2Xi2pkfEIZXDv3uoWRkwt3kRaU%2FaYKGAWi&X-Amz-Signature=1b4ff8ef0df86f2e3572d2436dcc647324a534371c0cfc8a36015b3895706e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRN5COH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO%2F6wdQ5BcibqiRRxxSDciIFWZbqBLLaUZ%2FngGgnr6wIgNxgOVg8cj6yuzp8x6LFa5P76kT8OsMKRORd75E9ArCsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHO7fEjJxpVo3t8EeyrcA6i4lmNvPkIVuqBSxAlUt%2BE14t1mUX%2FT1iakoYgJQDgxgwXdvZcB7U93J1xSL6%2B9DXg2MN2US1e%2FjHfRjU%2BXt5mq6rskdzhzxy7KWxkFiHnh67OAEIumn0OWkKx1F1btYAGo51eUI56vMoQ5osIDdJD4zuXfMOxb%2F7SIlFGT1wGvh5eOP1T3xf4%2BXJ8RnbRuPlKXSc3nlGUiJ%2BmYoD3rDJ0oo4Skc0gWrg59Y8MpbFTmkjlr%2FWA27%2FlkYQgB4whJoOXG05iH6DY9%2Bin5kqF7O9TbnRC%2BHq%2BFm4v5jVEybEo%2F00X1LXi7Gd%2FWEBWGoprSY0HYdVctlJkhjCjb%2FFQCWxT1aeOBndxRLTtswrVzKvlhQ9AG8lZfK7UHNSioTZcFKGRamsMzQTyN52cbHHSE1Fnh1Wv0lkqs07ClyWdo3OiH%2FW9rITuGT%2FG9bfD5CdjP5icw1O5MhdcYK0UPtIxvkbTYaXLkKEaW0tC6e6XnTvztI49Ed1ObQivOy%2FjHmm%2F%2BrpE18eL0jZoUZG3xQjTSoicbzqSP1qs8w79aVohV2Y2L7YBlAAEFoyx7QkyESs%2Fgma%2FgmHK1WL%2Bms7kqyatXg6MLN9vsWP7jzhM68ddcC5Djp8XVi03Ygnvr9VbVMMnCxr8GOqUBHoxKyJVEj1SzEEtKyl2Y1a2BGwszNAl6B6VTU6Sdhd9Inih8MLJwCYwEy2FCaCZFYJD6YfwOEvjO%2B%2FCpM5R8UJDrxjrHOCvwMMgL68Vhrye7BRfb0TpUBE0p%2BANbMT1yUAQjXgZ9r7sOYxWInxrkaxby5ulNTIvWRI0DQxVgC0AR6TIp7I5qDLmP%2Bq2Xi2pkfEIZXDv3uoWRkwt3kRaU%2FaYKGAWi&X-Amz-Signature=414d8e0dda0737c3ec2ec55cfb3792c3d225b3ce4341e53e91d12c88e2dca5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5KGM2N%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fkhy8tkPyWUwFky1V772KIR5L3Xvda7JmaUImpJSD%2FQIhAIOKQhIeVPeaXqU0qYrHCUOztcMqLzE%2F8%2B7UOuOYuXczKv8DCDcQABoMNjM3NDIzMTgzODA1IgzLSxAnjsWqUlPW5ucq3AMuEpTYD3aQ2OeudtDlj2%2FjmWNFipQpBD7%2BNcsbGuR5%2By3cwjU%2BP8EkDRKX2O9aq5o%2F%2FN7bNJSGeT6SztfHitALCFK279v4DffbmsMArxAvxE%2FUEqJFH%2B5p27qdCV8HN94nShUZ5khN8pfbh2G62RW%2Fe3Svnag9RcoipwpbDyctxxzB5AKWoR6c0AT%2BwEpYHKsfrY%2BLCygi5zivlmTAzcTu3c4Oyp7tRCn3Vdf8C%2FO1hyffcztun983MMONz2JvO3qppnBRmB%2FhuMEZEkKp2SbP%2FxNvDJ71cbcaNrXrfODFIph02lNk2vcUL9Rjaeysla3m5fY5gyMYnWScq7awLTYA1CkFiHbBmBNdAvuL512qPFwuspjIsz3%2B0bHxtXK0idYGkPKihuURQwwOZ4PfPsE5qAyEWFV3Tqs3eFxX7od4cZBO%2FQTIUvO0srRwlBuN5bwLoXm3%2FrreUkaiiUlL1VBYUDDU8Q5oVPVy%2FHpqNDQeHV%2Bbri75YxhSUXc3QR9CN4kE51JouWtpZb9pp7744htK2Ria9iZL4uri8PW14bJMrFpPr8znSBqJXQMSNyt0cRyvRJxobAthAiN1rviOKGgEvjSPV5d%2F6vc5P%2BkDP%2Buu5tJlZkeLi%2BuxlnuxnjCjw8a%2FBjqkAUNE%2Blgfo6jiSWs4NbE0ve6EVtok%2BpvJJzrMqrfsw2N7AUUc%2FlqCBiU%2FSNXoy0ex6INvsCWI7TMuWy%2FwlF1q%2FuBgrTTZc12PCkkUPY%2BfWCivmnHGbJvsu4R3LRm8AhbbxszD2r%2Fcx7UwLMkAIL6A7ItM77L1DKLXBNVvB2GEwOENEQfzHAz9ll1JRh%2F6sGfFPsAorgjnbNEzZrRuQZ%2BbUjkqeILO&X-Amz-Signature=ccae79090e3c33ffb37c5acc073e2479307182cec683a73d60dbd48d5c26b754&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPGH6KEN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFIgdD6hlw8yRZRRYc5gAsP4OTNot9%2B%2BvY6wouT10bXAiAhNhn4cZhTcPYDmi3%2FXoIkNdPpO4n5czrW77Cj54FeIyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmYzKO03TU1ZD%2BbG8KtwDKPUevF17AEfbjW4rJ6PEUspvyKwqDsVftcZlYmBsRg8SMMZ79udihie13L9onLUJ4YFMw3ul1FoVCQrPtlPheyI6%2FVKEX9qwBCq7DP2I6fYdvuxDAyP1Djtf1E4AakdflUhhUnYOzVL2JaXtPX9SGuY3O%2F0YsdT6%2FDhxsSB9N44M9u0TGUZkBGVF2cmEyJ7fnevu6t%2F0BbJW3DpFByzlVDCYFCM%2FmsYCUmAiXkNUlTkJCtCneoXFKsHWGCoqR0sKVZrIlRJwJiRB1X3paQ%2BPca%2FT09evqnUHvRQUfO4E4NsvEaQUpMDiiHL83bU7DR7FrIMvFMEKI4Y9Rm2f5q2f5T7NZw761tyC9L8pzMLXluEKOdg9Ytb5q%2FY9Fqnk7%2BvFrdYmAeCJ9FtlAPvY2TXHl8%2BsTrNsN1x4XtBs0LeNuWz27r6S5becc9eWpWwSESEukDD1Ol14h%2B6EjVvCG3mUukd1jARmOKbjLBWqV1BYz7JeZuUJc2k70c1GaT6qZe%2BJfgNvGCkBAqu6d8zIrjwU3rl%2FmJkZsjJIwzCRuVTklfUVxFN77piIFuV9%2BSL27FgyIQGguuJ47IvObQDpsFusxJMAzOPTnVsPuSJ%2FHxVZA%2FEKQ0ws0emnhI5jscQw0MLGvwY6pgFqfh7X5s0NfoVBQvYZIzY9zG4iK2pBNoTlFpbXUJgDrqp1NuNpPRATckskzGPuo%2FkYBIdm4MuvrW9s9e%2FOpiQtNFS7UcQgJ7YNSfj3FhxuvDCWkAFTW3u0pP4NLnvTMtFnZR4Mq6Jf%2B%2FFojSOMRi1knTW2oFwaJuZBb6353nBZCf669lfj%2BBAZvkJwrCj33Xy1oJXTUbIbbH3jT%2B4Jn4kxa5ZKRbqA&X-Amz-Signature=d4a2219ecd114ea75fd2589311488edd81493669854832d364ff589256aecdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRN5COH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO%2F6wdQ5BcibqiRRxxSDciIFWZbqBLLaUZ%2FngGgnr6wIgNxgOVg8cj6yuzp8x6LFa5P76kT8OsMKRORd75E9ArCsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHO7fEjJxpVo3t8EeyrcA6i4lmNvPkIVuqBSxAlUt%2BE14t1mUX%2FT1iakoYgJQDgxgwXdvZcB7U93J1xSL6%2B9DXg2MN2US1e%2FjHfRjU%2BXt5mq6rskdzhzxy7KWxkFiHnh67OAEIumn0OWkKx1F1btYAGo51eUI56vMoQ5osIDdJD4zuXfMOxb%2F7SIlFGT1wGvh5eOP1T3xf4%2BXJ8RnbRuPlKXSc3nlGUiJ%2BmYoD3rDJ0oo4Skc0gWrg59Y8MpbFTmkjlr%2FWA27%2FlkYQgB4whJoOXG05iH6DY9%2Bin5kqF7O9TbnRC%2BHq%2BFm4v5jVEybEo%2F00X1LXi7Gd%2FWEBWGoprSY0HYdVctlJkhjCjb%2FFQCWxT1aeOBndxRLTtswrVzKvlhQ9AG8lZfK7UHNSioTZcFKGRamsMzQTyN52cbHHSE1Fnh1Wv0lkqs07ClyWdo3OiH%2FW9rITuGT%2FG9bfD5CdjP5icw1O5MhdcYK0UPtIxvkbTYaXLkKEaW0tC6e6XnTvztI49Ed1ObQivOy%2FjHmm%2F%2BrpE18eL0jZoUZG3xQjTSoicbzqSP1qs8w79aVohV2Y2L7YBlAAEFoyx7QkyESs%2Fgma%2FgmHK1WL%2Bms7kqyatXg6MLN9vsWP7jzhM68ddcC5Djp8XVi03Ygnvr9VbVMMnCxr8GOqUBHoxKyJVEj1SzEEtKyl2Y1a2BGwszNAl6B6VTU6Sdhd9Inih8MLJwCYwEy2FCaCZFYJD6YfwOEvjO%2B%2FCpM5R8UJDrxjrHOCvwMMgL68Vhrye7BRfb0TpUBE0p%2BANbMT1yUAQjXgZ9r7sOYxWInxrkaxby5ulNTIvWRI0DQxVgC0AR6TIp7I5qDLmP%2Bq2Xi2pkfEIZXDv3uoWRkwt3kRaU%2FaYKGAWi&X-Amz-Signature=0b563baff8f26f5ea69a79ab49930eaa05f3a8706bc002c01db94936cd2b7b95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
