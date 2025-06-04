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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWOGHJT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDZ65%2BBnoNxG89JvuXk9Qwbtw0pAIvfkI2SZ10LwS3exAiEAsGDBcIQLDohmSVTRk7tRb13Pvm5oFrnJFe8sDQ9Buckq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGRQp0k1FOYvqCDrgSrcAwp7njbj2zp%2Fdm8yrf6OdV80najZHgswNBPc22YtdoyLqfXPpv3Eh1xxRuntqDGLoOTocWYZxatrk7PJRVEn3Xe1LLCkqRtF2hYxGUEE20DvqRuAFOZIMdjrPyou6e3SUQOumyxp4Wxs7%2FIUz%2B7cQ7niMCxA66e3w%2BVdtq0isUina45j%2BGKlopIubvZgP4gQ0G1elt4ko7esNMGN8F1XcMpUxKS3WC%2BrspTKGbjylWnGtQHkQtfV5A6SQbbCKtz130XRKLAsm8%2B60N2208CH%2FnSsIV6FuW%2F3%2BDDtWal29MIgIY9r%2FMUpOWPz%2B%2FXJDvXKFORX6wSp7VARutkaUpdFfaG2J0HFjJZHag4DjBEPtGkxN%2BF7BzR%2BOsDQPh1bZEIzylzcqIlZ2HnXa7mAiol2wSgTcMTnIZUSs2rWcsKE8Ol4uHaTCWQqGhZHr%2F1gsME1VUZ831wcmiecpXASiy1xD%2FDnUDV2IzGQmYQH%2FbM55LCmUFC5U1mM7GXZM1MGx37kbwP09i17EN%2Bjq5A39N5hadJc8ERhASIk9%2BgBSwFMIamJtakU3615a%2FwEz2lyZM914OSKu5kbYjnN%2FzxMs5cKrPFqteRIPWdECLx9RW%2FFzNXY04DGKvJOl0MeGK81MMPUgsIGOqUB%2FofUJZ%2BtLR8drNMm9DHEseTpt9w6si7fDfajrA5PThNXpaWQOh5h1%2FVIYJTdzV3R7ZS3L2XAOUDXtAy3SFxJn3DA7VBTwMV2Gk9yopLPR7bjUFzZgsl3XrKrQ%2BeC5FhcxQ0JljMLrtRgErPr21uWfHX%2Birx9WbTE9c4vXPqmq2QRlzNSPdYAAPZlF8%2FHpkPM9QzNDBm3hKBMsZeVvVDhZ77bgOKo&X-Amz-Signature=2713f54e8c1a721dc01d72af036fb3c178463b85eea5a98a880ee176ef8e109a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWOGHJT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDZ65%2BBnoNxG89JvuXk9Qwbtw0pAIvfkI2SZ10LwS3exAiEAsGDBcIQLDohmSVTRk7tRb13Pvm5oFrnJFe8sDQ9Buckq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGRQp0k1FOYvqCDrgSrcAwp7njbj2zp%2Fdm8yrf6OdV80najZHgswNBPc22YtdoyLqfXPpv3Eh1xxRuntqDGLoOTocWYZxatrk7PJRVEn3Xe1LLCkqRtF2hYxGUEE20DvqRuAFOZIMdjrPyou6e3SUQOumyxp4Wxs7%2FIUz%2B7cQ7niMCxA66e3w%2BVdtq0isUina45j%2BGKlopIubvZgP4gQ0G1elt4ko7esNMGN8F1XcMpUxKS3WC%2BrspTKGbjylWnGtQHkQtfV5A6SQbbCKtz130XRKLAsm8%2B60N2208CH%2FnSsIV6FuW%2F3%2BDDtWal29MIgIY9r%2FMUpOWPz%2B%2FXJDvXKFORX6wSp7VARutkaUpdFfaG2J0HFjJZHag4DjBEPtGkxN%2BF7BzR%2BOsDQPh1bZEIzylzcqIlZ2HnXa7mAiol2wSgTcMTnIZUSs2rWcsKE8Ol4uHaTCWQqGhZHr%2F1gsME1VUZ831wcmiecpXASiy1xD%2FDnUDV2IzGQmYQH%2FbM55LCmUFC5U1mM7GXZM1MGx37kbwP09i17EN%2Bjq5A39N5hadJc8ERhASIk9%2BgBSwFMIamJtakU3615a%2FwEz2lyZM914OSKu5kbYjnN%2FzxMs5cKrPFqteRIPWdECLx9RW%2FFzNXY04DGKvJOl0MeGK81MMPUgsIGOqUB%2FofUJZ%2BtLR8drNMm9DHEseTpt9w6si7fDfajrA5PThNXpaWQOh5h1%2FVIYJTdzV3R7ZS3L2XAOUDXtAy3SFxJn3DA7VBTwMV2Gk9yopLPR7bjUFzZgsl3XrKrQ%2BeC5FhcxQ0JljMLrtRgErPr21uWfHX%2Birx9WbTE9c4vXPqmq2QRlzNSPdYAAPZlF8%2FHpkPM9QzNDBm3hKBMsZeVvVDhZ77bgOKo&X-Amz-Signature=96f1fcd496590629632e63b5e6db76c76270d94ee629b72d8c46b7015c7c4fef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWOGHJT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDZ65%2BBnoNxG89JvuXk9Qwbtw0pAIvfkI2SZ10LwS3exAiEAsGDBcIQLDohmSVTRk7tRb13Pvm5oFrnJFe8sDQ9Buckq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGRQp0k1FOYvqCDrgSrcAwp7njbj2zp%2Fdm8yrf6OdV80najZHgswNBPc22YtdoyLqfXPpv3Eh1xxRuntqDGLoOTocWYZxatrk7PJRVEn3Xe1LLCkqRtF2hYxGUEE20DvqRuAFOZIMdjrPyou6e3SUQOumyxp4Wxs7%2FIUz%2B7cQ7niMCxA66e3w%2BVdtq0isUina45j%2BGKlopIubvZgP4gQ0G1elt4ko7esNMGN8F1XcMpUxKS3WC%2BrspTKGbjylWnGtQHkQtfV5A6SQbbCKtz130XRKLAsm8%2B60N2208CH%2FnSsIV6FuW%2F3%2BDDtWal29MIgIY9r%2FMUpOWPz%2B%2FXJDvXKFORX6wSp7VARutkaUpdFfaG2J0HFjJZHag4DjBEPtGkxN%2BF7BzR%2BOsDQPh1bZEIzylzcqIlZ2HnXa7mAiol2wSgTcMTnIZUSs2rWcsKE8Ol4uHaTCWQqGhZHr%2F1gsME1VUZ831wcmiecpXASiy1xD%2FDnUDV2IzGQmYQH%2FbM55LCmUFC5U1mM7GXZM1MGx37kbwP09i17EN%2Bjq5A39N5hadJc8ERhASIk9%2BgBSwFMIamJtakU3615a%2FwEz2lyZM914OSKu5kbYjnN%2FzxMs5cKrPFqteRIPWdECLx9RW%2FFzNXY04DGKvJOl0MeGK81MMPUgsIGOqUB%2FofUJZ%2BtLR8drNMm9DHEseTpt9w6si7fDfajrA5PThNXpaWQOh5h1%2FVIYJTdzV3R7ZS3L2XAOUDXtAy3SFxJn3DA7VBTwMV2Gk9yopLPR7bjUFzZgsl3XrKrQ%2BeC5FhcxQ0JljMLrtRgErPr21uWfHX%2Birx9WbTE9c4vXPqmq2QRlzNSPdYAAPZlF8%2FHpkPM9QzNDBm3hKBMsZeVvVDhZ77bgOKo&X-Amz-Signature=0a47d103b07cb36170a667d33bf4468a5d362a4314e77c06a1d5cb3c81843992&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623Q47OV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD3rXHoUt4Yw%2BunoBXNbk%2BjnTyNWdIY0lEkN4q3D8kTfwIgH936CHDVSik8eNQWI9nUSgNzeLFIXIQHwq2C7sELBukq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDClAoI%2F8xLjBzHqwwSrcA1iG2g7HMpKKAcctVHimRVwuERi7%2Bo1yLIZJaZya4QWcnSHeB97dQ3HN8pwyHa8snQ34Qf6h%2F%2Bji1PY4ehXdD7B1Em05Uq%2BoXTJ2Pn9aWzqxtif5%2F%2BFAIU7Mx%2BA3tuZ45lJQ9P4cMakOIrMAE82ItmgWw%2FaO3S8JODVQaulS0CajsFZtH4TIwKkXgJymml8o3NhFzPxHIntiL71%2Bhk3gsAJTn9DFZsYN%2Fvr96z8gXAfOewAuVSx98mwN5dAI37RDzFlVnCVxJQcw3ax%2FRom7FBwqRDN02cOXOO9V5YDL4N03ER6gfrj6jjMWx5Ilkhs8SeiVlGDFLG2eIgVWOq2%2B162432jYWafbFuAYqBiU%2B2BwvBP0J435axl4gAeul2EjFMlYj%2BU5PDfTg0vdDkbHWW0oug2HRgYZp9RDvJZOWRB4O%2BSWctb5%2Bf1S3kilHTfyShnV9lQgs7wRjXa3tCu9Le11CYpuoMBhFrZNWZauaukxNX4QrrqSJv%2BzhUWy8GyZotyyZluckye8JK1AtEku%2Fd04Yx2xdFAxgIW6Yb7FppCCWChBkUhO%2ByG5ME5RIZ4f9xhh50octmaokrNrPGZMpZ%2BRGRbCV6T7SZ1qlEReMTXJO%2F6CDtEDipK%2BA15VMJvVgsIGOqUBt6ybtkVi%2BDiCqsxbssXjhODFf%2Fm00UjhnoMksGKocwUYAWnbFhPsT5zH59oT97uYCzzkT521Fqa28rFseJpK4AirsZWaeTqj1Nm2npuC8OtEA0%2BQDtq63JH1sa6RDn9K2t3%2BqwMiFhOWdMa%2BKbkgH3%2FtPv1vvy8UdxEEOuhJOkvMxVkIOhbJ4hON0UMyYrqe3mFXfFGvqUNgQpou3YPOEIHsnX3o&X-Amz-Signature=e782d026b4f1be799fa2e71e0011747993d0e9b4036a65f02e58c70e3d1d14cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6NW2OY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCTckSaDHrQ4dq5u02O9CkJCLIjiU%2BEdCWOkXL8Pk8%2FpgIgceRMroFx0%2FErqa9giHRkW1%2B4U%2B456MbGPNj0UDarG8sq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIAudL%2BVXGfdQqnC6ircA6zey8hIVgZacgun%2BUmwGgbiRlu7s5RgLJj1I%2B9BD08%2FUwVm2uYsVahlxbcH4qspNRQr9o3NU9BB1cAsQ6fJDTxIccc49Ol6YI67PzjzGZS7tH4LQ%2BhUx6%2Fc3IZSFxopZTlfr15jrw3ucAtmdhAzwwOXc8o%2FbDukVLFM8T9osSpEWZDtqIEGDIEFGhKA72ctrBp6JPV9aTJ5AUuScOPdIwyARuJXJ6MrBnNODYc9nhJODt1ibT1lNZKtuI4rSn9dcjjn%2Blq4GZmgJEjuSkhJWKtgKCOl4Tsxw96%2FWJ5vQUd%2B6ewyBDsoHY1Ns6ihRrcSYd0XflSExI1q6%2FOXVm4xEXazH4rir00dR0uiqikPdYPj6CPJMu6Q4xXdgr1A9KYLgJvlivKTd9D%2B56HUDBI6bk8vyWR0S6AhISpdc1YflN2B9MIaqJ1B3ZFiiHBxcCKiKRGEdCxOoZafgze5zEip95lEAfomJJeD6i6IP5au06fxN3vqZKvSiDigNbJRW6k6%2Bxx7FhutXJjtRVAzdhBTXdn2%2BHDDB1vthLfMmHbnOpqV9lsO7yPy7CyQ7bgOr0X9LtfM3t1HVdfxjcMbxwCqCpxAAaVWfVm6OlAtJQ1D5O4rNwWzLbsscpLqEYaHMOPUgsIGOqUBl84tyoshTVyZFb6CGwcQZmM%2FzomQ4W8tGUwLM6WDH8plJkd6RYTqKrJMbH8EYp3YmCAbEMvnETP6XoBl4NtGZU30gAdc%2BY%2BheIHVgfS6a7%2BvcnqA%2Brb0dQLUKnSyKl1iU0Gkj2QCsa494XS1jUSxIc%2FTYcZI%2Fw5SRQXB0%2BSkwMxT0HN13J8wHyIeQI98N5w3VfxoKgLlFT6kbnqsy4UwF5kG0OB%2B&X-Amz-Signature=ac8db6287186d4f652344dc70acd7da97bbc24373d404bef0331fbc42bdcd487&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWOGHJT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDZ65%2BBnoNxG89JvuXk9Qwbtw0pAIvfkI2SZ10LwS3exAiEAsGDBcIQLDohmSVTRk7tRb13Pvm5oFrnJFe8sDQ9Buckq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGRQp0k1FOYvqCDrgSrcAwp7njbj2zp%2Fdm8yrf6OdV80najZHgswNBPc22YtdoyLqfXPpv3Eh1xxRuntqDGLoOTocWYZxatrk7PJRVEn3Xe1LLCkqRtF2hYxGUEE20DvqRuAFOZIMdjrPyou6e3SUQOumyxp4Wxs7%2FIUz%2B7cQ7niMCxA66e3w%2BVdtq0isUina45j%2BGKlopIubvZgP4gQ0G1elt4ko7esNMGN8F1XcMpUxKS3WC%2BrspTKGbjylWnGtQHkQtfV5A6SQbbCKtz130XRKLAsm8%2B60N2208CH%2FnSsIV6FuW%2F3%2BDDtWal29MIgIY9r%2FMUpOWPz%2B%2FXJDvXKFORX6wSp7VARutkaUpdFfaG2J0HFjJZHag4DjBEPtGkxN%2BF7BzR%2BOsDQPh1bZEIzylzcqIlZ2HnXa7mAiol2wSgTcMTnIZUSs2rWcsKE8Ol4uHaTCWQqGhZHr%2F1gsME1VUZ831wcmiecpXASiy1xD%2FDnUDV2IzGQmYQH%2FbM55LCmUFC5U1mM7GXZM1MGx37kbwP09i17EN%2Bjq5A39N5hadJc8ERhASIk9%2BgBSwFMIamJtakU3615a%2FwEz2lyZM914OSKu5kbYjnN%2FzxMs5cKrPFqteRIPWdECLx9RW%2FFzNXY04DGKvJOl0MeGK81MMPUgsIGOqUB%2FofUJZ%2BtLR8drNMm9DHEseTpt9w6si7fDfajrA5PThNXpaWQOh5h1%2FVIYJTdzV3R7ZS3L2XAOUDXtAy3SFxJn3DA7VBTwMV2Gk9yopLPR7bjUFzZgsl3XrKrQ%2BeC5FhcxQ0JljMLrtRgErPr21uWfHX%2Birx9WbTE9c4vXPqmq2QRlzNSPdYAAPZlF8%2FHpkPM9QzNDBm3hKBMsZeVvVDhZ77bgOKo&X-Amz-Signature=f8206dc7b5d392d29fc04b61b226aa622729c98f972419036864290a6643e4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
