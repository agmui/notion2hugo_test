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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTIDSGX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaHn%2FUGy13nDA9rb7yVP5KECajPdvRxX%2BxzONNGDQE7AiEA2%2BzxD7CfAtpq75B2UgpT2rMm9CDAFWdaUjSUfRKFmFEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF1GRt%2BEyWhBKJHayrcA6JgYZIQrovjxDveghAYF6QU%2FLWesndxRpkGh%2BhZlfHe0l0PbdNoi5%2BLH5E8vbLFY8NQOCFlp7DLtenh055z8ytyC%2BOQ4XXbZqbB1oPE5gdtVgAXjF%2F8bzcXupALEeweAukWlaCNLFUUytFatjQoPVVSp3SPAHlMB2d0s6WDWs%2B3eSBVQvi2RtZ8QAW0vhMq3iM9Xb16xnScPcTF5MykpfAzIrXoq6eW3nr%2Bxsq49c%2FVCzMJ6jz04oxDMBjH%2Bo5hZXmJ0hVTI8LtwoG1ruMyxXD0BE2moSwEpzFuqFeBhv%2FUa7QGV1kIu0emV0Egy9TQ%2FSc8EyEPX3BtLwMMokgTeHDryV%2BF4Z635BcLFN6MchGl1IjQEiKgSN5AFOZeH7p%2BwPrKwRclHgj69ah%2B9QZudKOi77NzijhK3lOD77D0EyDR9Uln7MyOZp4sAEOYXsI4EV77f%2FbEzNvDKHctC6UnyGzZgwem%2FoH7BiPbjP8dxwAPYZcdGh1e1GTbkaobas%2FkHTGEZzFpEGr6oBTzR%2FApozq%2FtP%2B3cGnANp8raWRpwUWXoNBtkEpOvjjvZEy%2BUPefSrzU3wQ8jZOa7DlYV36Ad7pA48m%2FdUSymHzzo400ncOX6ohaxwRIf6SV9fUTMOaFjMAGOqUBcJ1QNhCG0lsEVwsNTE4ArnKG3jW%2FG3lpSnLwcssfangNDUsU3I%2FBdTLpxnriGFuotbYsWjfWVXZwMqH1gizBfYMViIyl3rrscWBA0ERx%2BHAzCIFpS1zmgVkVpzjwkLL%2FVhtz2UgMxRIhQ6SRBKnHw30gRVoIjHsSBSVGvdk%2FjQ%2Fscf3BFoCl6dKvaUF8jV5JOSlQNHWLz%2BYLzfTVELCmrsRTkvv8&X-Amz-Signature=133e9cf10ae8016d63a5fd4139e4760d66369997d58db9acf75664eda902e8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTIDSGX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaHn%2FUGy13nDA9rb7yVP5KECajPdvRxX%2BxzONNGDQE7AiEA2%2BzxD7CfAtpq75B2UgpT2rMm9CDAFWdaUjSUfRKFmFEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF1GRt%2BEyWhBKJHayrcA6JgYZIQrovjxDveghAYF6QU%2FLWesndxRpkGh%2BhZlfHe0l0PbdNoi5%2BLH5E8vbLFY8NQOCFlp7DLtenh055z8ytyC%2BOQ4XXbZqbB1oPE5gdtVgAXjF%2F8bzcXupALEeweAukWlaCNLFUUytFatjQoPVVSp3SPAHlMB2d0s6WDWs%2B3eSBVQvi2RtZ8QAW0vhMq3iM9Xb16xnScPcTF5MykpfAzIrXoq6eW3nr%2Bxsq49c%2FVCzMJ6jz04oxDMBjH%2Bo5hZXmJ0hVTI8LtwoG1ruMyxXD0BE2moSwEpzFuqFeBhv%2FUa7QGV1kIu0emV0Egy9TQ%2FSc8EyEPX3BtLwMMokgTeHDryV%2BF4Z635BcLFN6MchGl1IjQEiKgSN5AFOZeH7p%2BwPrKwRclHgj69ah%2B9QZudKOi77NzijhK3lOD77D0EyDR9Uln7MyOZp4sAEOYXsI4EV77f%2FbEzNvDKHctC6UnyGzZgwem%2FoH7BiPbjP8dxwAPYZcdGh1e1GTbkaobas%2FkHTGEZzFpEGr6oBTzR%2FApozq%2FtP%2B3cGnANp8raWRpwUWXoNBtkEpOvjjvZEy%2BUPefSrzU3wQ8jZOa7DlYV36Ad7pA48m%2FdUSymHzzo400ncOX6ohaxwRIf6SV9fUTMOaFjMAGOqUBcJ1QNhCG0lsEVwsNTE4ArnKG3jW%2FG3lpSnLwcssfangNDUsU3I%2FBdTLpxnriGFuotbYsWjfWVXZwMqH1gizBfYMViIyl3rrscWBA0ERx%2BHAzCIFpS1zmgVkVpzjwkLL%2FVhtz2UgMxRIhQ6SRBKnHw30gRVoIjHsSBSVGvdk%2FjQ%2Fscf3BFoCl6dKvaUF8jV5JOSlQNHWLz%2BYLzfTVELCmrsRTkvv8&X-Amz-Signature=b59f5c01d27b9f46bbb5eecc9fa304a3d78fd87d55ce9408a85a3e16acbac99b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMXXSPI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqldpZnaDcm5aFwXdreK72PzSOwG%2F1Acd7l1ttx5%2BEGAiBr%2FBoxE7MIqd4TkGflBgP%2BeCaKXMCfIWY2JF%2BlhTe45yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyonv7R%2BjuYltdBHKtwDKkIE1PPB%2BYXWA2C9uobPR82mBnzx9d%2FQqNSKQHYY9g2Q4kAcDywTgfLIw1wc8yKkGZlOWbdqjsF3pKI5X0jbS5rPTUHUtws1XxgOYCkJ6U8zjnfsgnIyqIugWVraR1MgymcDjEPwQIhqT7aHUwhjTEt4Vm0EePzG1kzs85ouQ%2BCElNmm6Yf0SReQrbTo%2BrKoogYKp1PVoZpeuVOCtFZ9zrK3glTd7lo8pEcdHhF%2FpC6LOTVRqzk9s8SEhMk89tHkO9wGBQOlCpdeLevsKDBXZb4KJXu23B%2FhZ5oh7f3j8k3YemXXuLc6tMESQP9TRJFkHkSQJeTN1owfRrJiDwxqqMdf%2F14eGGNUfUIxQls%2F47zuIb8qyZMybnNtAuVxDl5e6LEn73qOhhd7%2BFNHbv7CfQyU2YCv%2Bgr2xc79tmaiXEDWP9pEj3chEKoa8LcQ8JWXglDA0WwDXDuTBFPl24ug%2Br%2FPNfH5Iz2E6ny5njS2oX4Wb7awJns%2BA9ltI3qVNWXKJkDv5jafjApEeP7l6Kpoknz8vxtuvZ4Yuxn0aZEZQHKL3zZvlH0GPldJfivgGnIRWnrcSpDJpCkYRlKfMPFzbP4Bk0C15VP2CqPNoosbY742Wev0IIu%2Fyw0SMWYw9YWMwAY6pgGxRag7gswckRLAjFhDVmQxf4OnLAfqXfelM6xXh16J11PLFIQtzYqMj7KKEVm0QoSqn77iGgf5ciQ%2BW3kwVS0AeM1PCGFJcfQervfPEMlsKVVXmNOiSWzH%2F7pLbneaaesaeHZjiYZmstjulIni3F7jK4RQe5xLGDRY8Q3HUsTTJqwl%2B94pG3yEldcRBj14GyZJgUeZ7d%2BT%2BmBbPfSlyKtUCBlf4md5&X-Amz-Signature=4e4eca146153e57526527affe86381cc718e541a3c02fb267e02a22621f75b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUNDG4T%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPaCN3%2B4mc2lbgZHrKpXl4cUr8460UrD8pGJOjOCcrJAiEA%2BU4%2FO%2FSrkGJJIiHljcjjo9Xo9XnOx8tqdXcY%2FPinjwkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKGnmIm7JQF5Cu%2FnircA6su0RkxXHC1AuFaBnMbLMAwZy%2Bq2ZxnTPTVTP9sc6rBjAeSZBqCue5U1488dya8Uz%2FbSBkCZALzHfeIntdJcferpEMNMBI6qWi8pUxZMVtjUUBEhl%2FAQQ066O8OUmjubH1v6saFKpNzwjiy07h190kPw3vXJ9YSIVsMOeVPsk6FT7HYmltuG9TUXl%2BTf9VpZKYIrfDYvMIwnpKmd4xOFwVlfKK4YB8zvznofVYMipyKQxpoyDRK4OM%2BPkjCT%2Bn9LUvV0yEVDTa2oBUyF5ae%2FcvYJEYJl2uHAN604zv%2FFiCpEwDeQwx7KX052q%2FD3CthI9JZNipldnB1j2jNXKBK20C9KNR7DJh%2BaEx%2ByYwxxIkiaw%2BphmPk%2FAk%2Bw2US2FZ76KPJY8V6yYa85h9UnpXL6yhcgDgA3nFTHXC1kPPDkzEJERfgH6HzSU%2BBm11s9%2Fwyp03IjZ49Ja5hSGqWzFw0LvdQwJICMQ32UwbURq%2BIBD7Zd2mfsuERXee7x83sS2w0fTU4ULnf2rhAKcGUC9beyPeXw8nPY1hwpa4axl7Zw0p0Dp3ZP4SwL4N00hzjTp%2BeT7pdJZiHtnN6bpaOygCwlPngAGUZfcVILKDZdsFtgbc0oz3Vqv%2F546uPa7mnMMOGjMAGOqUBfhjhYyQlIqPuAS9CAWkD5Ofb7Sx72j7wnKJRmGBV8y32ETEIMcWBR8Mpn%2BY7RWlLvlmu0xa9Og2gm2aeneg7R2FDmJgOyBF%2BiLvAl2US8J9g%2FDapojhCR6JNU8%2F5tE4ju4nC8W01Vj1OxsmxmWZpZ3bSyeh0zE0Emndj%2BFinwNP2tYF23CxS7NK4TVJfiQOUu9HFJuaxQwQkFgdMW3%2F0oOq7oTkC&X-Amz-Signature=1334465d9ff34786e6fae3ab161c2563cc4f9b86ad77093030d54b6f1cd987e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTIDSGX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaHn%2FUGy13nDA9rb7yVP5KECajPdvRxX%2BxzONNGDQE7AiEA2%2BzxD7CfAtpq75B2UgpT2rMm9CDAFWdaUjSUfRKFmFEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF1GRt%2BEyWhBKJHayrcA6JgYZIQrovjxDveghAYF6QU%2FLWesndxRpkGh%2BhZlfHe0l0PbdNoi5%2BLH5E8vbLFY8NQOCFlp7DLtenh055z8ytyC%2BOQ4XXbZqbB1oPE5gdtVgAXjF%2F8bzcXupALEeweAukWlaCNLFUUytFatjQoPVVSp3SPAHlMB2d0s6WDWs%2B3eSBVQvi2RtZ8QAW0vhMq3iM9Xb16xnScPcTF5MykpfAzIrXoq6eW3nr%2Bxsq49c%2FVCzMJ6jz04oxDMBjH%2Bo5hZXmJ0hVTI8LtwoG1ruMyxXD0BE2moSwEpzFuqFeBhv%2FUa7QGV1kIu0emV0Egy9TQ%2FSc8EyEPX3BtLwMMokgTeHDryV%2BF4Z635BcLFN6MchGl1IjQEiKgSN5AFOZeH7p%2BwPrKwRclHgj69ah%2B9QZudKOi77NzijhK3lOD77D0EyDR9Uln7MyOZp4sAEOYXsI4EV77f%2FbEzNvDKHctC6UnyGzZgwem%2FoH7BiPbjP8dxwAPYZcdGh1e1GTbkaobas%2FkHTGEZzFpEGr6oBTzR%2FApozq%2FtP%2B3cGnANp8raWRpwUWXoNBtkEpOvjjvZEy%2BUPefSrzU3wQ8jZOa7DlYV36Ad7pA48m%2FdUSymHzzo400ncOX6ohaxwRIf6SV9fUTMOaFjMAGOqUBcJ1QNhCG0lsEVwsNTE4ArnKG3jW%2FG3lpSnLwcssfangNDUsU3I%2FBdTLpxnriGFuotbYsWjfWVXZwMqH1gizBfYMViIyl3rrscWBA0ERx%2BHAzCIFpS1zmgVkVpzjwkLL%2FVhtz2UgMxRIhQ6SRBKnHw30gRVoIjHsSBSVGvdk%2FjQ%2Fscf3BFoCl6dKvaUF8jV5JOSlQNHWLz%2BYLzfTVELCmrsRTkvv8&X-Amz-Signature=0a4985925bee07adef164da24e2b9c5697ad1751926a0d763f2abe866f0e606d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
