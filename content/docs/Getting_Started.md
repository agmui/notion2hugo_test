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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOR35V2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHnJfaFztj5DSu7YIU1h7UzoA%2BF0zuJ3K9Jij7LNGkcgIgEt2jiwI9oylxe0gQMNoy0fUsQIv9vAh1DGkgF00B0BMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOBx462x%2FzjGGE4nVircA7m5Uyc3WCFNoYMpjsTF1N3y0s7z%2FbOBfO5v25qZ1ZAN7rxoKLulXte0r62L1rP%2BAZ0MxZIDKznccGI0kE1oC7%2BpaDJOpe6qVVOBCi%2FDvwde9O%2BAR5sX5Wni3h2oWpCpPMqIhqYCgDbeLSq5gG6ZpbCBMHwOgelpNR17jwXsTg8YGuiETFHeYrJk%2FJAAyj7vqE%2F5PwiYOgui17CY0amAm4iD3IUyNi2M19s1J%2BQY%2F17D1cSGLNMIiLmokXmBfN%2FUTi2NF%2BHL5oVCR6UOMjv5cxV6ye5ZnPDQt32%2BA0IijAf1GY%2FlQNSThZab5rTHF4%2FcrHHNlrBR5fO9NtpsFFRFGQL4YD47uHQQujieWbIILHpb90sJduj3XvnBhcM76bW15WtdtwIqtdnKWQl7zxYMoEzeD4C6jwxM5x8BWLfKFRa3pUHe8AGjoM%2BhZA31B4k33Y%2B4c%2FlhvNZKuYaIlgqMVwLdghvHixIjYiaUrxdq4ARhj3x%2F%2BLDYnDeM4bR14%2BwbU4eh3UCP34Z0YUNa0I89AJrCjzH8XoOCho8NhqVDfYztWGagLn64qwUqlGktWjorV1cuA9s3HizFueyun1rPyumhUb1VT9wD3USonMSddzqZuIy8CvyuvOYx4KGOMOTf8cAGOqUB6I7Mkbx1gcVH8iHNpaiouo3aAG3YEvYawzD2XpmNtAfwquHfzPtAVE7HBLLkoFubbbe00iFq%2FdNqeFP0vm5HFUP9DNBgghxC45CoRgxcEJu8d7203O5h6mz5J5Lw5WEHNwO8DpsilL7DLDO1S2jC6MeMX8YGkl%2Bhk7rXc0Q5tMxmOf4Z9%2BbK5Cj0wo2bsHj7xCvFbX%2BrI6TgmAi90jzVU1TvfSSH&X-Amz-Signature=9b84d552cc366297c8050b6f4879839f7779d4d922c2431b6935dbdb46476179&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOR35V2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHnJfaFztj5DSu7YIU1h7UzoA%2BF0zuJ3K9Jij7LNGkcgIgEt2jiwI9oylxe0gQMNoy0fUsQIv9vAh1DGkgF00B0BMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOBx462x%2FzjGGE4nVircA7m5Uyc3WCFNoYMpjsTF1N3y0s7z%2FbOBfO5v25qZ1ZAN7rxoKLulXte0r62L1rP%2BAZ0MxZIDKznccGI0kE1oC7%2BpaDJOpe6qVVOBCi%2FDvwde9O%2BAR5sX5Wni3h2oWpCpPMqIhqYCgDbeLSq5gG6ZpbCBMHwOgelpNR17jwXsTg8YGuiETFHeYrJk%2FJAAyj7vqE%2F5PwiYOgui17CY0amAm4iD3IUyNi2M19s1J%2BQY%2F17D1cSGLNMIiLmokXmBfN%2FUTi2NF%2BHL5oVCR6UOMjv5cxV6ye5ZnPDQt32%2BA0IijAf1GY%2FlQNSThZab5rTHF4%2FcrHHNlrBR5fO9NtpsFFRFGQL4YD47uHQQujieWbIILHpb90sJduj3XvnBhcM76bW15WtdtwIqtdnKWQl7zxYMoEzeD4C6jwxM5x8BWLfKFRa3pUHe8AGjoM%2BhZA31B4k33Y%2B4c%2FlhvNZKuYaIlgqMVwLdghvHixIjYiaUrxdq4ARhj3x%2F%2BLDYnDeM4bR14%2BwbU4eh3UCP34Z0YUNa0I89AJrCjzH8XoOCho8NhqVDfYztWGagLn64qwUqlGktWjorV1cuA9s3HizFueyun1rPyumhUb1VT9wD3USonMSddzqZuIy8CvyuvOYx4KGOMOTf8cAGOqUB6I7Mkbx1gcVH8iHNpaiouo3aAG3YEvYawzD2XpmNtAfwquHfzPtAVE7HBLLkoFubbbe00iFq%2FdNqeFP0vm5HFUP9DNBgghxC45CoRgxcEJu8d7203O5h6mz5J5Lw5WEHNwO8DpsilL7DLDO1S2jC6MeMX8YGkl%2Bhk7rXc0Q5tMxmOf4Z9%2BbK5Cj0wo2bsHj7xCvFbX%2BrI6TgmAi90jzVU1TvfSSH&X-Amz-Signature=9738f1addc0450868e133489f69d5aaefb000a80dbfcab02d910cfb6dcf4c3bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOR35V2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHnJfaFztj5DSu7YIU1h7UzoA%2BF0zuJ3K9Jij7LNGkcgIgEt2jiwI9oylxe0gQMNoy0fUsQIv9vAh1DGkgF00B0BMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOBx462x%2FzjGGE4nVircA7m5Uyc3WCFNoYMpjsTF1N3y0s7z%2FbOBfO5v25qZ1ZAN7rxoKLulXte0r62L1rP%2BAZ0MxZIDKznccGI0kE1oC7%2BpaDJOpe6qVVOBCi%2FDvwde9O%2BAR5sX5Wni3h2oWpCpPMqIhqYCgDbeLSq5gG6ZpbCBMHwOgelpNR17jwXsTg8YGuiETFHeYrJk%2FJAAyj7vqE%2F5PwiYOgui17CY0amAm4iD3IUyNi2M19s1J%2BQY%2F17D1cSGLNMIiLmokXmBfN%2FUTi2NF%2BHL5oVCR6UOMjv5cxV6ye5ZnPDQt32%2BA0IijAf1GY%2FlQNSThZab5rTHF4%2FcrHHNlrBR5fO9NtpsFFRFGQL4YD47uHQQujieWbIILHpb90sJduj3XvnBhcM76bW15WtdtwIqtdnKWQl7zxYMoEzeD4C6jwxM5x8BWLfKFRa3pUHe8AGjoM%2BhZA31B4k33Y%2B4c%2FlhvNZKuYaIlgqMVwLdghvHixIjYiaUrxdq4ARhj3x%2F%2BLDYnDeM4bR14%2BwbU4eh3UCP34Z0YUNa0I89AJrCjzH8XoOCho8NhqVDfYztWGagLn64qwUqlGktWjorV1cuA9s3HizFueyun1rPyumhUb1VT9wD3USonMSddzqZuIy8CvyuvOYx4KGOMOTf8cAGOqUB6I7Mkbx1gcVH8iHNpaiouo3aAG3YEvYawzD2XpmNtAfwquHfzPtAVE7HBLLkoFubbbe00iFq%2FdNqeFP0vm5HFUP9DNBgghxC45CoRgxcEJu8d7203O5h6mz5J5Lw5WEHNwO8DpsilL7DLDO1S2jC6MeMX8YGkl%2Bhk7rXc0Q5tMxmOf4Z9%2BbK5Cj0wo2bsHj7xCvFbX%2BrI6TgmAi90jzVU1TvfSSH&X-Amz-Signature=a86faa6446b4745d26d96230bcb7f81da5c17ef6804ce6bd88d3df8ab7742895&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZSVIPB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv7D93u%2F%2FGUt79KTOSiPN9HEE%2FCNXKpBmmer8B9diNGAiBn7q%2FyfPTxjgYsdjzlCA47tUzFgoWi6tVcV3ZEtF9JNir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA806Ojq6w8QyOmcxKtwDN%2FGuOnWqHqTQE5jZ%2FEImrFBkPZPGeCApPMIEV6OF7zLW30hVJko2JJdQrLKCwKluILyXz44Q73Zv8I767n5Q2dJHIRAYyYdiqNXTWsS6I899Zha0VM3m65FCBV1HzsGZoJFBFrut5brBsw4A1bI41e2FYxYQ60ENleH9N6ij0S%2FOQ9A%2Fyzohc2fpGXhoo7S3PySBdVcZX16R0NqZCDLjATwIIsNl1bl9cAoxWDeis49kr1X3JpACPCZ5Jq6j8WYQVmmB4j4oQikSmndbyDcmLA%2BB%2BkXHUP9d3jLoRiY4DS%2FUUuEj0F0Iw%2BvDIRRDqmxHWBKYj8AFXCfn0YP0GUXn9lDKMqhgilqsFg%2Fl6WOSMYNGm4by5hLHpvkLpTd84rA4F%2BVBBLUtFqypIvEcPTWLuiCiwmAA6VrsdewFWSbX8w6e%2BOiNoJgkaEALgBb%2BxhjSdwRbQceWYdGVAyBPr5wRXhzA1NMlZimGq%2BejH72a2W0dyPe7WOcmaZCrjIyvkL1yShuuH%2FjV5CZmqoiEGFRw4L8DMU1UW1vXq7K3iuT6FVGqH7vBDIsW%2BG2vsCrk6j1xoV0G2jZwB%2BLTtinFr8OJyWvQp1SAeW5nZFUT4gyE3%2FBV0SsJ15n1MsS1MgAw%2FN%2FxwAY6pgE49RBDHuNNM%2Bi73yQxCyPpbsY3FW2JlGKD6b1agWPQdjVWHS6m7cy2mptqvmnAKmc8gmgpDxi7iB1K4LxysdH8vKxNhmpAgiiYrwWkVB7ms4e3bJLApKPzYCVm2%2BH1ExOcwQhyIAOKRZGW7JEqHZ0zMA%2Bq%2Bfap2MJWmPV0L3njrh7yUG0zudVKys7%2BTx50fE7oxrZlEA1NlVgAICq%2FE1W%2FToIkLVG6&X-Amz-Signature=774f15fd95b6ee6d471d3fbab5c964b39c3b3dd16cfa3cd0a61a0b16c07a65f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3FSP4W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMRpCzZxH1VdWDN2CnFYKN2PZGssY7wYS6KX7Ql5lYrAIhAO25XhgTTKIpCsVlRfRbvz%2BqYavfVy5BcETsmUeaTDdWKv8DCHIQABoMNjM3NDIzMTgzODA1IgyVu%2BZvzznUfTWsbCAq3AOrpFKiruFzikS%2FL8gQVuN4VHFsG%2FTVgQXPwx0l4FI3bH2knkZ16KUvgxlHctW57f1q8p7QannRyFnXSW3GjIFZcBxF4WHjMocsi5nBPtQTPVSy6uJpNESLB3HSQCctcmwCixlfXzkTOgSPNMvAjkztOR3rmKYGim7I4%2Bmk8lbkvHByVLhwOtstlmEagDCekWvkDU5Oi%2FvQ4IoWMzqC%2BPM0RsKbwgDeQE3COZWdeNADO7CHimroNiBOsonfPp0fY8KYlsNiJjYJSjq9R5TfqLAqWb42cR87A8dVGKFbLn%2BI9YKuSzuHtNyl7ZwWor5euAA8Zeo2FH2yoYNNCLGH5FKHjVC41BmY1XNhqFxxOgjPBIMNbud%2BgwJYa0cD7SuLRz48SZnjXpudMWRzuloW71kGBtCJqGNH8%2Bhicn3Tb%2FN0IclhZ3XEiwQb9q5I0LR%2B8O3yt1KvyJMUUNMI%2F95Dh%2BwmkA9PHSjGqCZcl2ELO6aButxmoSzDrRZDjn%2FQ1kNCk%2ByaJMsaqmPOS9N0oTftE%2BneoG9WqoWfqcp19%2FfPZeHeQ3jH3qxI0mAksBqcpNwwmOpV3dSofEafGJ52K0QqB0SBhjg2j5GMshFV038WnSWwJ9Q1H2%2BPRn5b2Ka9TDD74PHABjqkAS%2F%2FaO%2Ff5%2FhR8NwWOhK9cnZj2C35nHXGhQ4%2FOjm48M2kt4P25T1%2Fv%2BXI4x81T1r4DPk66EztEpJHtHH0qZXw6RrWNJwtsdv%2F6ztSdZpfytTxCem5e4AjkAxBE1FSdBsPy8dIfJVIAdB727za5NRiayBPYBDLNEVj%2BWOClrVt13uk%2FPv%2BvXfzBfTz32jDhN8o6JbpFtSwU6Y%2BXw4e2eX5TDr7xHoE&X-Amz-Signature=b79fcfa530f615fd3c221712361903b9a9f5f9801e6018614f68debcf817a934&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOR35V2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHnJfaFztj5DSu7YIU1h7UzoA%2BF0zuJ3K9Jij7LNGkcgIgEt2jiwI9oylxe0gQMNoy0fUsQIv9vAh1DGkgF00B0BMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOBx462x%2FzjGGE4nVircA7m5Uyc3WCFNoYMpjsTF1N3y0s7z%2FbOBfO5v25qZ1ZAN7rxoKLulXte0r62L1rP%2BAZ0MxZIDKznccGI0kE1oC7%2BpaDJOpe6qVVOBCi%2FDvwde9O%2BAR5sX5Wni3h2oWpCpPMqIhqYCgDbeLSq5gG6ZpbCBMHwOgelpNR17jwXsTg8YGuiETFHeYrJk%2FJAAyj7vqE%2F5PwiYOgui17CY0amAm4iD3IUyNi2M19s1J%2BQY%2F17D1cSGLNMIiLmokXmBfN%2FUTi2NF%2BHL5oVCR6UOMjv5cxV6ye5ZnPDQt32%2BA0IijAf1GY%2FlQNSThZab5rTHF4%2FcrHHNlrBR5fO9NtpsFFRFGQL4YD47uHQQujieWbIILHpb90sJduj3XvnBhcM76bW15WtdtwIqtdnKWQl7zxYMoEzeD4C6jwxM5x8BWLfKFRa3pUHe8AGjoM%2BhZA31B4k33Y%2B4c%2FlhvNZKuYaIlgqMVwLdghvHixIjYiaUrxdq4ARhj3x%2F%2BLDYnDeM4bR14%2BwbU4eh3UCP34Z0YUNa0I89AJrCjzH8XoOCho8NhqVDfYztWGagLn64qwUqlGktWjorV1cuA9s3HizFueyun1rPyumhUb1VT9wD3USonMSddzqZuIy8CvyuvOYx4KGOMOTf8cAGOqUB6I7Mkbx1gcVH8iHNpaiouo3aAG3YEvYawzD2XpmNtAfwquHfzPtAVE7HBLLkoFubbbe00iFq%2FdNqeFP0vm5HFUP9DNBgghxC45CoRgxcEJu8d7203O5h6mz5J5Lw5WEHNwO8DpsilL7DLDO1S2jC6MeMX8YGkl%2Bhk7rXc0Q5tMxmOf4Z9%2BbK5Cj0wo2bsHj7xCvFbX%2BrI6TgmAi90jzVU1TvfSSH&X-Amz-Signature=dfb445f9697bfd28ce78a8dd8efa4d3cfa64ac87acaa4c0a3ed5105cc1833f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
