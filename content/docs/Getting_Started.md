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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEI6W4J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcj8QFquh%2FzRztxA83gjemM5ONhHD%2FX3NzMK0UChz06AiEArFA5iIJkpDrstenwbeI2NEfhYJh2hjZ6tKpRyD%2FCuggqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6huxgSkBzR43dWdCrcA2wpDIUNNj%2B%2FA5mTgNATFeQUdAgj8hGyU0gBV%2BNgl7oCqZQaIvrhXSo6Fgre5Yzh30RM0YlrCILvEQ2dlpq6NHZhPGkwgbIDra%2FE4XDvmg5OADGx1Bm%2FK8wDuVsyroP%2BEb39mNfTIfXeU1%2FqyFDJE8%2FmRaXm4X%2FGTzyVmhVzdHRqYWe82LUxsP6IJHUP2U%2BZN%2F33oDWTLC8YP%2FGm7QSexwbZ%2Fk9K%2BU8l2Yfl%2BVTVK3eyZgn%2B4RcMDq9cSnOkYff49u9e7FMtGzRxMgZHKBD1clyoqS%2Bzbta18bWPP9LWwq2Fz4mgVrmqvyF3RhRzYIHgnQ0G6jXXP3GdSef%2FRYMS9PfffCxWF78%2FmvAcuJ%2BqW%2Bph%2FecYgZqnTE%2BZ%2Bp7OIIqjPElDRpa7m5KLZ5kdqKuUjUmLI6Msm9pezH3EGFL6%2F1vRdUM%2F%2FQkaRoz%2BjWZlzkdRboPqCbGASMcs9Tdjr4FJSeWPMPwgPah%2FZWnnbN7pmRgayV3vKDVjl2mPTCitRMObw9xyIEsz167LZQYKc1yrXHcXjxyi461b6geAzr%2F3%2FmZcu7Tg5Gx9jjSLOmyGdAqy7y0r%2BQCDG8G4uP6qE%2F%2FhW3BGfY8MgsTMmP8VZB%2B%2BZ22WG5lI9i%2BlSl7BpW%2FcMKrl57wGOqUB%2FdLLzhOBsTvQqrsTU9jEtltVfnXwkFaBfOlvRxRX3bKjhQn8YbyEYNcCHp1VDxveL1PXynQ%2Fi6fmKArR7cWQpYtEkBK%2FtXQCC1vpXG40CwzURtk6%2FgHrgqGbfaNmFk0brhvZ%2B2ui3T5%2FeVPzJRHf6P%2FATkDfcBlt%2B%2Fu2rJ8Kyy4jWDXEqNKukEdRQ7qt2sL4D65gpiD9YJ13j4gZvU6w6y8MPkl%2B&X-Amz-Signature=d602444264530cc8504386f10a5b28facb7498cf0ba9bb7662767d8794ddac2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEI6W4J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcj8QFquh%2FzRztxA83gjemM5ONhHD%2FX3NzMK0UChz06AiEArFA5iIJkpDrstenwbeI2NEfhYJh2hjZ6tKpRyD%2FCuggqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6huxgSkBzR43dWdCrcA2wpDIUNNj%2B%2FA5mTgNATFeQUdAgj8hGyU0gBV%2BNgl7oCqZQaIvrhXSo6Fgre5Yzh30RM0YlrCILvEQ2dlpq6NHZhPGkwgbIDra%2FE4XDvmg5OADGx1Bm%2FK8wDuVsyroP%2BEb39mNfTIfXeU1%2FqyFDJE8%2FmRaXm4X%2FGTzyVmhVzdHRqYWe82LUxsP6IJHUP2U%2BZN%2F33oDWTLC8YP%2FGm7QSexwbZ%2Fk9K%2BU8l2Yfl%2BVTVK3eyZgn%2B4RcMDq9cSnOkYff49u9e7FMtGzRxMgZHKBD1clyoqS%2Bzbta18bWPP9LWwq2Fz4mgVrmqvyF3RhRzYIHgnQ0G6jXXP3GdSef%2FRYMS9PfffCxWF78%2FmvAcuJ%2BqW%2Bph%2FecYgZqnTE%2BZ%2Bp7OIIqjPElDRpa7m5KLZ5kdqKuUjUmLI6Msm9pezH3EGFL6%2F1vRdUM%2F%2FQkaRoz%2BjWZlzkdRboPqCbGASMcs9Tdjr4FJSeWPMPwgPah%2FZWnnbN7pmRgayV3vKDVjl2mPTCitRMObw9xyIEsz167LZQYKc1yrXHcXjxyi461b6geAzr%2F3%2FmZcu7Tg5Gx9jjSLOmyGdAqy7y0r%2BQCDG8G4uP6qE%2F%2FhW3BGfY8MgsTMmP8VZB%2B%2BZ22WG5lI9i%2BlSl7BpW%2FcMKrl57wGOqUB%2FdLLzhOBsTvQqrsTU9jEtltVfnXwkFaBfOlvRxRX3bKjhQn8YbyEYNcCHp1VDxveL1PXynQ%2Fi6fmKArR7cWQpYtEkBK%2FtXQCC1vpXG40CwzURtk6%2FgHrgqGbfaNmFk0brhvZ%2B2ui3T5%2FeVPzJRHf6P%2FATkDfcBlt%2B%2Fu2rJ8Kyy4jWDXEqNKukEdRQ7qt2sL4D65gpiD9YJ13j4gZvU6w6y8MPkl%2B&X-Amz-Signature=99e373b7980a60b42c5f3de952a8d287b2bc23262163fb9950a704fcae51187e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPO2TVYO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FJFSMGvTH6AvbCACRrr4ENeEtUblYjAzhhX8MamN3sAiApJ%2BP1yWouaHMJLUvrnFgk0yQi5PAbuR%2B3ZLTDgbGfKSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn6DFvvRwEHiBnvpEKtwDjj%2BW2xj9oK39hyTlK%2B5sSfqlstKQUoTgl0fS8rAT7%2BSFfy3D6Ssl1UVPtwEYIgbHd4Zfqskw06P0ILW42ax9ggvYI2UcM%2BLlkPlsG0FWqdFgGgGW9Vh7%2BQNqws3yzS7YM%2FzC5UBa93xz%2FCSsOt2wyOuK6qYJJGG%2BDwJiDB8EvPl7zagN%2BP4iXlYAghF8G353BVCHwzkSbqc1PP9LDYdsdIXR7Mdng0HSUrDAW8YePKrQxTDWlxSb3z849Q3o2zA2HontBrS%2FoMMgs%2FoGSclHEM%2FtRQm7MK1ec6v4X5uV3qd7a9y%2BAwlsKRDJfqwEqarUFY6aw7TAoRpzuRIQ21%2F03etLaF1LjnznLuUzUtmjn2mbuIWSYi5vGTZmia3QB2qsOShQoCHLzLqdyexPkwCXpRBin4zTNX4h0nukMMz2ga2HKLwKrDCL2pH3DRbhq%2F9OwQ%2FoYq4ycsb8%2FSXiItxAWyaJdDJtvQuYCQjaVRJR71GOy2O31PmavBg6kfwtdDIXqwwJTW3A6yq01dIJm0muWEb%2FWV04Z4uIBinnmp1JKj3fz3e2OeUUBZYN2mYejv2gZ7Oe7hxl6ndhoyo8J0OKyzO%2FSFE3rNwZBDbl1xQgbL8FQHW4hRq1rCW%2FSdUw6ObnvAY6pgGrcjGUE8XpO7lUknTOB03AqkNd8PRQgItgwxqJFUN7q7CvRP9Z8VgjXvm3yv3r08jGrm%2BYIEVv7ruA1a%2FGGJp0YvwjRcZG0F4xj3W%2Bd5eZFl4C7xVgzWDDm%2FEwLXE93bM9o2rZ0doFwA08teFCMeeFE4pHv4%2Fh4tT51S8jqPEoqltjTE5nwCAYsSNia71eiS11T4e3k1P4R%2FPVmjJBUVGSKwGl1nWx&X-Amz-Signature=a4ea82f8fdc1d691b797d60f6230b129bda8aa80cd059205405800b3f86faca8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DLHUAHJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIPEmuBn4rZaqrrwJFdIgmk5YQ4f253%2BfOJnR1bFSUZAiB70Xo08yQAO85J4sujBR%2BrfytsorP4bMBXKh9QB4sCYiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxL%2F1b6oIRQ0OV2RUKtwDsbtJFOP7ZaiAl0DWHUz54wcNWibhWIyWLXJiuRraYuVES%2F8Rqhm0IgWNLlXp%2FB1QWIEVSDoCVRPb%2FZ0Pm3JTsVpxZbWB4EnUVokVWRLJEdXpYAJHWXfnqBOwp8drqt9%2BwcIXCo82trVk7uG2sOVpTpwIMgIjRj86WR6XKQAXddnAI78ean3p7paD3MlEF8hBe%2FBJ1UlWIBZMo4laWPHMBT6RdvnKlaauZMryb5rhA00KZOnsERnsIKpa5uegOS54JsQQ6PiuMr69G1Ax8SzTufI3QGZ3jXWC5jMSLvEyndJOH3%2BINQQt7Y4fSZdNvbE5qnltFWIsxNtBkQG%2F2RTAn3tv7TmI3hajm4xQ39%2F5iYGLgN6ria8CaEiN5oaWh%2BprCERvNq2z48FCzb7AQh2A%2FwTerY2uYqHZ%2BK7haFyr4JSgD1oXxqaHlEaqLhsWGptZ0oBK7MgiHfwb4FCvKmjUeN0MCjqdR4GJowLIIZ%2FLSIg%2B063LZYzq%2FswbTuVu1%2B5NkY10Ubhj3FUwfsyeN0YmGVCWq0h%2FtCz4d9%2BQ2N65uv69L3FDE%2BckyEgxBJQx6yS9bhPNlK5qd7ENSPnXfWO4J%2FmD7kP2F1dLHgdCKs7Aqcce3GCwQ3VrQCSlEMUw8%2BXnvAY6pgEGprpGuAo0VpMPLM9M2xWE35cAtFzGozRAY9FtJcj5knoyKvbCs1sHllknTbO8PRvZHjDqpA%2Bo5wAhbsDaa0KPzvcPdt1afh5sZixqvPyO88hroQY71Ppzg85xyZbHNGZHXUIEzN5oq30cCfooQLa9SctSoNF2l2E2WKSXI8sC3BASIHy8Bm3xb5kjiGd8Xoe6Q%2B8deK%2BJTJNoFAJtiUrAd%2Ftn9AlH&X-Amz-Signature=b9add870aa2444ef6241920f97c9eee9cc083fa53f525c18a587c0432fe60b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEI6W4J%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcj8QFquh%2FzRztxA83gjemM5ONhHD%2FX3NzMK0UChz06AiEArFA5iIJkpDrstenwbeI2NEfhYJh2hjZ6tKpRyD%2FCuggqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6huxgSkBzR43dWdCrcA2wpDIUNNj%2B%2FA5mTgNATFeQUdAgj8hGyU0gBV%2BNgl7oCqZQaIvrhXSo6Fgre5Yzh30RM0YlrCILvEQ2dlpq6NHZhPGkwgbIDra%2FE4XDvmg5OADGx1Bm%2FK8wDuVsyroP%2BEb39mNfTIfXeU1%2FqyFDJE8%2FmRaXm4X%2FGTzyVmhVzdHRqYWe82LUxsP6IJHUP2U%2BZN%2F33oDWTLC8YP%2FGm7QSexwbZ%2Fk9K%2BU8l2Yfl%2BVTVK3eyZgn%2B4RcMDq9cSnOkYff49u9e7FMtGzRxMgZHKBD1clyoqS%2Bzbta18bWPP9LWwq2Fz4mgVrmqvyF3RhRzYIHgnQ0G6jXXP3GdSef%2FRYMS9PfffCxWF78%2FmvAcuJ%2BqW%2Bph%2FecYgZqnTE%2BZ%2Bp7OIIqjPElDRpa7m5KLZ5kdqKuUjUmLI6Msm9pezH3EGFL6%2F1vRdUM%2F%2FQkaRoz%2BjWZlzkdRboPqCbGASMcs9Tdjr4FJSeWPMPwgPah%2FZWnnbN7pmRgayV3vKDVjl2mPTCitRMObw9xyIEsz167LZQYKc1yrXHcXjxyi461b6geAzr%2F3%2FmZcu7Tg5Gx9jjSLOmyGdAqy7y0r%2BQCDG8G4uP6qE%2F%2FhW3BGfY8MgsTMmP8VZB%2B%2BZ22WG5lI9i%2BlSl7BpW%2FcMKrl57wGOqUB%2FdLLzhOBsTvQqrsTU9jEtltVfnXwkFaBfOlvRxRX3bKjhQn8YbyEYNcCHp1VDxveL1PXynQ%2Fi6fmKArR7cWQpYtEkBK%2FtXQCC1vpXG40CwzURtk6%2FgHrgqGbfaNmFk0brhvZ%2B2ui3T5%2FeVPzJRHf6P%2FATkDfcBlt%2B%2Fu2rJ8Kyy4jWDXEqNKukEdRQ7qt2sL4D65gpiD9YJ13j4gZvU6w6y8MPkl%2B&X-Amz-Signature=dac94300d185625fd5d0c8076fd0f8bab5947be0f630e7a3604f3a35b6068bab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
