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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77ZVFAN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaaEs6t918YU%2FEZo8u2RlsJDWRo%2FEDxD1Hl5nJkt8uAIhANlZPypYRYlF9PNREpVrEKfK0APVk6mhMvPcYISkVXxVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwRKnKJvo%2B%2F21e5K2Yq3AMtjeHcVTvUQayFOamJlo69yQyfFgpX%2Fk6YjdTP07h87VY0B3K4G0%2BJPsO31JcqrCcV1Tpkyy7X4MwytJXXi2I8q9lFjA8sVEulBJ8p3Rms345tdcSLqJg9%2F8RnvNKVkg4opAbKthFaQg%2BYuAj2VNtb%2F4Bzhx%2FRVA3HUHbJihvtj8JEeQ7d4os%2BB5SmPxk6HuRt6tDof0Xv%2FR%2FgCo6P3ZfNVi0KdQ%2FSONTfp1A%2FBq403fsTpJSFwSRBTnl5Mue0BXq8tOSFJwYSveEeOIQtrI7Tq0iLyyEubihTRR%2BLPcYvuZJhvOHnZL%2BmO2ZkeUptT4dG%2Bfi%2B3TGabFTdMizVhTY9upe91fO%2BfRY%2F%2Bf32xElXV9wlYPc%2FxK4%2B%2FW0RPFiIL8fQew%2Btw%2Bq7yACwFFWAbZfnplS4v85y7HDeRgc8lnYJ4tTMb8YH3kdo0t2erU5UPibnS6ZcS6yHiWpJiy7mU2iqxTwTdYJrCbQ0K0WRgpVAYnuGmOwLIi5Vo0bedYXaliNebkW8YWW7X5jUKDFbd1Wf0jXMPb4i2iU0ubdhTfKjAELOrOFgFx64T19a51xsU7lm2hF3Zy%2FQC0KvBJP7nhVxfbGy4HxOg91Jeuaz%2Ba%2BooEDlosU1yVU0A2M1lDDPkJ7BBjqkAZTmWgO%2FPeWe7WHx8KdSHaCX6aeswbRK%2BQW3smZofldPi6uV1qxhA4UYbvgJdYk4KQcdheECgkfn7WbfAVjSL%2FqYC4brjqtjyX1yOHYwCrCRstudsg1QhX%2FfF%2BQ05aAnFFeM3cGkhTpWY8xwKhXmyFe1O%2FEGk8n8JZNCe9WTAqh9oaSlrhkU65yLK%2BXg%2B5fvjaNDWY7Si%2BrESUXKqSCmbzuR7lw3&X-Amz-Signature=a401e1ffe578700e9e184b156c748bcd6db4e1b0661cc83be678cbac1aca9213&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77ZVFAN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaaEs6t918YU%2FEZo8u2RlsJDWRo%2FEDxD1Hl5nJkt8uAIhANlZPypYRYlF9PNREpVrEKfK0APVk6mhMvPcYISkVXxVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwRKnKJvo%2B%2F21e5K2Yq3AMtjeHcVTvUQayFOamJlo69yQyfFgpX%2Fk6YjdTP07h87VY0B3K4G0%2BJPsO31JcqrCcV1Tpkyy7X4MwytJXXi2I8q9lFjA8sVEulBJ8p3Rms345tdcSLqJg9%2F8RnvNKVkg4opAbKthFaQg%2BYuAj2VNtb%2F4Bzhx%2FRVA3HUHbJihvtj8JEeQ7d4os%2BB5SmPxk6HuRt6tDof0Xv%2FR%2FgCo6P3ZfNVi0KdQ%2FSONTfp1A%2FBq403fsTpJSFwSRBTnl5Mue0BXq8tOSFJwYSveEeOIQtrI7Tq0iLyyEubihTRR%2BLPcYvuZJhvOHnZL%2BmO2ZkeUptT4dG%2Bfi%2B3TGabFTdMizVhTY9upe91fO%2BfRY%2F%2Bf32xElXV9wlYPc%2FxK4%2B%2FW0RPFiIL8fQew%2Btw%2Bq7yACwFFWAbZfnplS4v85y7HDeRgc8lnYJ4tTMb8YH3kdo0t2erU5UPibnS6ZcS6yHiWpJiy7mU2iqxTwTdYJrCbQ0K0WRgpVAYnuGmOwLIi5Vo0bedYXaliNebkW8YWW7X5jUKDFbd1Wf0jXMPb4i2iU0ubdhTfKjAELOrOFgFx64T19a51xsU7lm2hF3Zy%2FQC0KvBJP7nhVxfbGy4HxOg91Jeuaz%2Ba%2BooEDlosU1yVU0A2M1lDDPkJ7BBjqkAZTmWgO%2FPeWe7WHx8KdSHaCX6aeswbRK%2BQW3smZofldPi6uV1qxhA4UYbvgJdYk4KQcdheECgkfn7WbfAVjSL%2FqYC4brjqtjyX1yOHYwCrCRstudsg1QhX%2FfF%2BQ05aAnFFeM3cGkhTpWY8xwKhXmyFe1O%2FEGk8n8JZNCe9WTAqh9oaSlrhkU65yLK%2BXg%2B5fvjaNDWY7Si%2BrESUXKqSCmbzuR7lw3&X-Amz-Signature=b9a8483cbd1d78a4b4dc0c2b1a92f188a09b6ead7559b199f1187d543dbfb692&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77ZVFAN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaaEs6t918YU%2FEZo8u2RlsJDWRo%2FEDxD1Hl5nJkt8uAIhANlZPypYRYlF9PNREpVrEKfK0APVk6mhMvPcYISkVXxVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwRKnKJvo%2B%2F21e5K2Yq3AMtjeHcVTvUQayFOamJlo69yQyfFgpX%2Fk6YjdTP07h87VY0B3K4G0%2BJPsO31JcqrCcV1Tpkyy7X4MwytJXXi2I8q9lFjA8sVEulBJ8p3Rms345tdcSLqJg9%2F8RnvNKVkg4opAbKthFaQg%2BYuAj2VNtb%2F4Bzhx%2FRVA3HUHbJihvtj8JEeQ7d4os%2BB5SmPxk6HuRt6tDof0Xv%2FR%2FgCo6P3ZfNVi0KdQ%2FSONTfp1A%2FBq403fsTpJSFwSRBTnl5Mue0BXq8tOSFJwYSveEeOIQtrI7Tq0iLyyEubihTRR%2BLPcYvuZJhvOHnZL%2BmO2ZkeUptT4dG%2Bfi%2B3TGabFTdMizVhTY9upe91fO%2BfRY%2F%2Bf32xElXV9wlYPc%2FxK4%2B%2FW0RPFiIL8fQew%2Btw%2Bq7yACwFFWAbZfnplS4v85y7HDeRgc8lnYJ4tTMb8YH3kdo0t2erU5UPibnS6ZcS6yHiWpJiy7mU2iqxTwTdYJrCbQ0K0WRgpVAYnuGmOwLIi5Vo0bedYXaliNebkW8YWW7X5jUKDFbd1Wf0jXMPb4i2iU0ubdhTfKjAELOrOFgFx64T19a51xsU7lm2hF3Zy%2FQC0KvBJP7nhVxfbGy4HxOg91Jeuaz%2Ba%2BooEDlosU1yVU0A2M1lDDPkJ7BBjqkAZTmWgO%2FPeWe7WHx8KdSHaCX6aeswbRK%2BQW3smZofldPi6uV1qxhA4UYbvgJdYk4KQcdheECgkfn7WbfAVjSL%2FqYC4brjqtjyX1yOHYwCrCRstudsg1QhX%2FfF%2BQ05aAnFFeM3cGkhTpWY8xwKhXmyFe1O%2FEGk8n8JZNCe9WTAqh9oaSlrhkU65yLK%2BXg%2B5fvjaNDWY7Si%2BrESUXKqSCmbzuR7lw3&X-Amz-Signature=bf82e291824ea6d8b2f7abf8d7e71bb8d123c0bb5cc1e486bbc132f9e431ff02&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNYC27W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgifCooFtsIW2AfWFs2nxnIGrKahF4VgcKw20HJEKqIAiEA7cRY49HpihiKg5HI%2FmJ%2BX%2FpHE5EX02rt8Myzz4jZQc8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGNTiM%2Bg0fHEafq4WCrcAykkMo2biUfEMdReMOHB01ZB9qxBYiWrpPgvS2aRjUtsMjlxw8XnOuAwBAQjULlH8jGW6A2531m%2FwJg2gsbS6dhy5xTZMvWDhnkA7FPT86CcwFaab3noeXtj40Gwy%2FKd2R%2BOY4gQZA0h%2BLTHNhpM%2FWLWbODuw9JGeg3leGWRPwrnwfAdWtM2d85%2BKh5C%2FSGoNTBzcrs%2FRl0OwWplr5a7sGLwRNRRAdCfC9xKhxvkw7xVQTsnPOo7LbT7WD%2FWbQTL7nhYlW2mDN5kq2OTlQSUkjfoAY%2FQuwSAoZZ52IkuXXnAm59yPNPgp8gZERULSKq2TGDAGfPLpZYoGnscB89vZFzQTi4QuXanZbOTAXKG1IyJCRAuC3vgZAZ63K6IZJrKRxfyYcrvIIyaHQCUgc5y3FDMQHTuyylZtIFi1czgrg%2FhC%2BrF4fqgtnDZu8s7FzZHOXvQeeyElriUgBMnuVb5LG6zYbYNFVbedmA%2BEXYUCZZakFqfPfqH8FCjR2TItu32YB%2B4je%2Bu8QrZSIh5rKbN%2Bp5zAcZr0kmL%2BbnEEXsOxRoe%2BA5FdwAqhb%2FQhyUD1pnQpAHU0lg2Ba3%2B4pndGUkfVi05UGqZ3Xy1t7P1daAX24xrnJkW2dcFTniSsNMyMIGQnsEGOqUBV98O23%2FqhiHNwMGpovwoCVVaWSdhdQVfVMNdG2%2Bzl7FmmvNzWY6WL42VT546GyV0cZgXC4McYYLfb2UKTnWR5kD4P%2FuSxkN3f183t8W7eyJ0gNR5ZCuckZDFIG2bkgnpEwtQLf3mDeLboOVft3L9f6oiS9olYUrwRTYWRYGFAMrA4rTa%2F2jh1jYIG%2F%2BptaVux5Phz41MMpvo%2BDAIIe9uY6DPbazB&X-Amz-Signature=8081d285dfb7c4582eef28c4824ed0298e68b9d54e10cd10c0f6018bdd3fc5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PCHX5Z%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSeaPY9P4hzEUIixixgLzOTwQauG8Sm2aNW%2BGi%2F%2FXRbwIgHwoQuVyxiOJJ%2BjP2cVSjJG42T3nWYzO2PZ3nK0aEJ%2FQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJr7Hd32guGnQe3XaSrcA3fBjxoqsAmk%2BuuHStytwlXWp1eEgcK1HtQ3GLzbNPnkvLvXx3Fdu3js3IbKak76smZWzGIHBOUTVxCxKKVOmZrL1ZuXO28RE5y8F%2BuB3L4zMaUOmFb8pF4A6bm041wZ39GleZDpDVRraqEEtIZCMgu%2BBXsJoLasrkC5mVHOujlZaRUov3ip5FzdpOyPMJks8HuVGuVp0NfSsmPfPEdUyPa%2BXPQ%2FfQOWFIPYNUnBgrNzi5oPxBPSRVF9RXSvBm%2Bk5IuqA9ppboiqBZxQZ9sLkohjuySJ1gLABA0eHLmULJD5e0N3rC3B9NiNUSGk%2B%2FOBq3At8bw1G3Nqac2hPU2ojlgPpKrFWkKGexvAawZ%2Bzj%2BQ3%2B0xbH9uJAHD6fJJxZW7xiw9uFFAJZ6qIl9u40O7E%2BeAXkIStK3Uk%2FZAJXs4VZpSmndt3s8hPmY1hJ5qnNOnHy%2FzJE2F1pZWOPxl42wIZyzTwoOrMcB8TpXTFA6agmudR1geMHlaquenU3mK43cIGoCX194ocDQwGESy1iMav0GWXoqP64wE5jhDyotv5h0Yjx0fw9lBzJPK1Ad7eXK5M5et2EoKZJGwkscvFq88fd7%2Fv%2FAE8VRat9GA0MdiKDwElaNS0jaHXondBH9tMNiQnsEGOqUBU%2BtENbjmcIOSP8zEP%2Fg7rJReV0%2BjPulxBIlLQCCIoU3QsU%2FKdIcaeiWplkMOoTvPy%2FVf%2BG6WAVBXg2i3uo6D1TIzeQQ364%2BV94rI6x6YIVtDROjDZ2FoB%2Bsp5ITW60QYOTUkL0xOw9X4AnLuReazzAcKz9wz6uvuj0OU1LQ2R7MOPfFLzmJ2TmwSmiNyiHgG3Rg%2BkRZnx57GSuqCOEO7Woziiq5V&X-Amz-Signature=dcd7c9e12c8bb6a6b5d063b59058767a02b6c7251eccd09abb462f9e875060d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77ZVFAN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaaEs6t918YU%2FEZo8u2RlsJDWRo%2FEDxD1Hl5nJkt8uAIhANlZPypYRYlF9PNREpVrEKfK0APVk6mhMvPcYISkVXxVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwRKnKJvo%2B%2F21e5K2Yq3AMtjeHcVTvUQayFOamJlo69yQyfFgpX%2Fk6YjdTP07h87VY0B3K4G0%2BJPsO31JcqrCcV1Tpkyy7X4MwytJXXi2I8q9lFjA8sVEulBJ8p3Rms345tdcSLqJg9%2F8RnvNKVkg4opAbKthFaQg%2BYuAj2VNtb%2F4Bzhx%2FRVA3HUHbJihvtj8JEeQ7d4os%2BB5SmPxk6HuRt6tDof0Xv%2FR%2FgCo6P3ZfNVi0KdQ%2FSONTfp1A%2FBq403fsTpJSFwSRBTnl5Mue0BXq8tOSFJwYSveEeOIQtrI7Tq0iLyyEubihTRR%2BLPcYvuZJhvOHnZL%2BmO2ZkeUptT4dG%2Bfi%2B3TGabFTdMizVhTY9upe91fO%2BfRY%2F%2Bf32xElXV9wlYPc%2FxK4%2B%2FW0RPFiIL8fQew%2Btw%2Bq7yACwFFWAbZfnplS4v85y7HDeRgc8lnYJ4tTMb8YH3kdo0t2erU5UPibnS6ZcS6yHiWpJiy7mU2iqxTwTdYJrCbQ0K0WRgpVAYnuGmOwLIi5Vo0bedYXaliNebkW8YWW7X5jUKDFbd1Wf0jXMPb4i2iU0ubdhTfKjAELOrOFgFx64T19a51xsU7lm2hF3Zy%2FQC0KvBJP7nhVxfbGy4HxOg91Jeuaz%2Ba%2BooEDlosU1yVU0A2M1lDDPkJ7BBjqkAZTmWgO%2FPeWe7WHx8KdSHaCX6aeswbRK%2BQW3smZofldPi6uV1qxhA4UYbvgJdYk4KQcdheECgkfn7WbfAVjSL%2FqYC4brjqtjyX1yOHYwCrCRstudsg1QhX%2FfF%2BQ05aAnFFeM3cGkhTpWY8xwKhXmyFe1O%2FEGk8n8JZNCe9WTAqh9oaSlrhkU65yLK%2BXg%2B5fvjaNDWY7Si%2BrESUXKqSCmbzuR7lw3&X-Amz-Signature=2ff1affd1fb213d91304b8c6cb121692b6466b53f595ab54cdc6025f0f909346&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
