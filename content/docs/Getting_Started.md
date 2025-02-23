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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJW5YYG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGWjRDWXVIxuQzocvsPsLhozTqd%2BeS59cunArH%2FpcIcQIgYkqtnGDF4SmczxRM%2FbVnJycSVyFfsTEbWOguKeGUTj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH%2FXcXBN3D8tN3mkeCrcA5PlbcYgD9Okrha5AZZELDkVbMkUTyjQ4Cw9VCHuNQ%2FVJcKPdkFOfMmgbWOWlCRrYq5xidbq1j%2Ffx1R%2BYx7ZdvIJBnLRoJcgNvfbOmzWzxnjp1uLTXmPvGPQ%2F%2BjYEOtF6LSV9ffwYLdM1sXQ0Pb5e5zkx5%2Bh9YVABzn500KhT9HsL%2Fn4YQXWl9JpHTmkm%2FYF2hQ2t1bkBFnY7BslwDm6qivV3gCgs7RdpO%2FxnprCx5ggrDeDuYXAiZz%2FfpRlZCa2S%2BvIaReX6igJhFD0FF6oV8bozpuPgJrhsalcbFYH6EGirfHX63MlLpYmBJYtd0Xk3dg6j02yKnAhBet0SJuHLQAUUMjz6INbkr7XfQwP3927WYC77vJ1J%2BIMSfQ%2F8pB%2BJ3iS8lvyTWu9NTIuqtiep5durRTq0LrnLOIHQpDxFWto5jGXaOHu8aeRTwg%2Fb8SXEw0UwSrAstuDNtLUvp%2BLNYUw%2BDN0pNmF4puws6KK2RVFNUtLQR%2FJUmbECo0VAvggPBJfd2ZSgskUKK4MQypcpfbscK7WEA%2BwYqdUHFzzVqpoq5kF6mWxzZrnN5%2BAJQzlhs8zZNZhkKWDOQMnglr6pFZVJ16wtrRNaSj5FOebO0vqhk6mGz%2BGap3DHM4OMNHn7b0GOqUBYVbCugmPaw9UlBZ26wDytQaKmwJRBVr9Lz5TCK2Jtx82pOsteBett0fxVCtzQW7OuNeNln%2FyAZ4DNsJ4xM6sAXgVmX00OHinZRNAWwSh%2FbvAj5phJOuAkdaoy%2BtqIFUPy4%2FCJhqmlYamBQr1ZVFIaDG96fLuDzBZpwjFuP2F%2BdzVPvdljbSzdlw5PP6xLCwOdsih2emZIvq2UZQs8NxMLulhEVAT&X-Amz-Signature=6d634927cf4f27274107d73d13e90e0d75d00934725c92911cc385b69293243d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJW5YYG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGWjRDWXVIxuQzocvsPsLhozTqd%2BeS59cunArH%2FpcIcQIgYkqtnGDF4SmczxRM%2FbVnJycSVyFfsTEbWOguKeGUTj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH%2FXcXBN3D8tN3mkeCrcA5PlbcYgD9Okrha5AZZELDkVbMkUTyjQ4Cw9VCHuNQ%2FVJcKPdkFOfMmgbWOWlCRrYq5xidbq1j%2Ffx1R%2BYx7ZdvIJBnLRoJcgNvfbOmzWzxnjp1uLTXmPvGPQ%2F%2BjYEOtF6LSV9ffwYLdM1sXQ0Pb5e5zkx5%2Bh9YVABzn500KhT9HsL%2Fn4YQXWl9JpHTmkm%2FYF2hQ2t1bkBFnY7BslwDm6qivV3gCgs7RdpO%2FxnprCx5ggrDeDuYXAiZz%2FfpRlZCa2S%2BvIaReX6igJhFD0FF6oV8bozpuPgJrhsalcbFYH6EGirfHX63MlLpYmBJYtd0Xk3dg6j02yKnAhBet0SJuHLQAUUMjz6INbkr7XfQwP3927WYC77vJ1J%2BIMSfQ%2F8pB%2BJ3iS8lvyTWu9NTIuqtiep5durRTq0LrnLOIHQpDxFWto5jGXaOHu8aeRTwg%2Fb8SXEw0UwSrAstuDNtLUvp%2BLNYUw%2BDN0pNmF4puws6KK2RVFNUtLQR%2FJUmbECo0VAvggPBJfd2ZSgskUKK4MQypcpfbscK7WEA%2BwYqdUHFzzVqpoq5kF6mWxzZrnN5%2BAJQzlhs8zZNZhkKWDOQMnglr6pFZVJ16wtrRNaSj5FOebO0vqhk6mGz%2BGap3DHM4OMNHn7b0GOqUBYVbCugmPaw9UlBZ26wDytQaKmwJRBVr9Lz5TCK2Jtx82pOsteBett0fxVCtzQW7OuNeNln%2FyAZ4DNsJ4xM6sAXgVmX00OHinZRNAWwSh%2FbvAj5phJOuAkdaoy%2BtqIFUPy4%2FCJhqmlYamBQr1ZVFIaDG96fLuDzBZpwjFuP2F%2BdzVPvdljbSzdlw5PP6xLCwOdsih2emZIvq2UZQs8NxMLulhEVAT&X-Amz-Signature=91f6969b89704fb8910a811972a32985a29ac03528af4ae39078df41d2720cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWXZPOK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8RyA%2Bz3dq5piLmW74sgYLS8prKAdIj2apSmLqwlbUlwIgPo7wnZjqHxXuuBWD8QAPW3sfTcCGHykaAwqBCFfyg3Iq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDMFIARNPmM4YzLgpNyrcA0ZOsUgeXjnFoa0xJgH46iF%2BDQiV0Ho5Arn%2F%2FKzsafO1aHTHIHnYAR5WcW56s0EopY7GRtx9P2viuQe0ZMV126LkIRiobN1hCFQUp%2FVwOLzktXDjOnuL4X6KX0H8X%2FoRWoljhfjZAVw0gsn5LiKUn7fHTHVMs0lmGt0XnRdDN%2Faay3oJLJ%2BF8gqxguVKyyEQnfBtzzuGNLyE0y87ssSDjzdm34TpYheBTc%2BLsAg47%2Bd7rf9KNf5Yfnf9VFDJctXGCWaOfMbvwDYP7cQPWc1b5%2FLIbaP3lxH2bS9oRK0rjIUBvxS6W5Atyx%2BsddZjkPHQFJIYpFRC7N9jK%2Fl%2BKE0GRePcB7T7YFc9zld4iA3UpNGrPQ4CxbuOQnafHRkfY796xl%2FdxT%2F84FGvm%2FlLesXhxf23Ip0Sqz2IgpmCD9IOkksS6K0DUGSMPYaXjG0TfUiOZ5RkE0cQwjqJDDhRaCi6S2iLleHtxmct0x73MoIPH7Y9CLa6MgwxzkoIdwNvE5udAtVFcHbHm9dGw8B1rLO4xBJZa8ZaEQ0mJyNhX%2Fnf8fl%2F10ThY3QfSKI4XdDFtOakO2pXqpP%2FvFtQwLkFROHs3DnkPxDY%2FVKLrHjLzyNRNgo3wQvWPOoPkwsuRdkcMOmG7b0GOqUBkI0QmkDXEJeMurrH7gphit65mzZJPEgNGrqh4cN9IFzTpItqUixtS2tYbdOPz51vrrefZFdqJhzrd1pJ7u3yxu9gTmOM99Jmyh5lt6ysr8xY2zWz5WcW1sIHCey6YjaqhT8A%2BjBHsCzSoxrIjqlH%2BF4%2FdxSTGtWATyNIGYcoe8cVEOy%2FYdYpng9kRaXU%2FsVbDLfoAJhUUFrN5qX1RDPfWoXq12Yi&X-Amz-Signature=cbb64b4464a8244b9bcfa877c817548e2d753781f320f39722d721002ac4e253&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBOHFARO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiIaxmeMXBll43YgHJVjZg0fryrw%2FFCF8gEShF5VcxnQIgFwmSOmTebauN5y7QJcsM8unMRHvRpuk0KC5HpdHWYaMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEqPJS7JCMxoe7HuHircA7E0E9jO0GnNHIhVj6O4DDPhG%2FWuplluq63jxP7kB1f1YABSX%2FafGx3Ed4G2I51WNZdjMMatLGxn%2FZlVMXgBScb7QlapqDcIjWwMO8imy3jW62cyRqbyVS%2F%2FuxLIE%2FduuuZ6FyEJ4mR%2FBNeFEE9W3O%2FllUz7a7m%2FZfuGE0ztFoC%2BUlFrM3fjRsw4HQdDfOvNmYp%2BOt43rFaSEqWsDYKy3Hsy1bVT6c8bq%2FNjF8J14gd0EeRjKjCi1BdWm4exGjkUo6wISQtyyQ2r%2Fpl01sSJw%2B9a%2BuRT0nXPXICvqXl4sSHr%2B4sH7crtO7D5TdGNhr6q63CCI5TUXpJLlWakMxFkGACjpv4z8uLSzP2bXU1ep5bo1MH26IIwAtAXfd7sc02w4I7cyUkGPheYmOX0OP50fOtrNW1wB4ZGWFCOPM4PrfOQgsvO2aihS663vuad1kpgGs7taKOZOxRpFPt0y%2FkGueyPvFAtdMtz05dy9Kt1b4d9DUP4Y%2FISoG5OQfOBtbra2HjPxqnTSaHqYNdEf3Er5p23anrFUhlp1V8xpEJJ6Smo%2BvwDqCAL%2Bbr2vLGh9THYbHJE4uq7iTkbQayWI92DsqXwBiLlk4OA2Om3s5etcLO7v%2B%2FkAEnzcP1d9Ys3MKKk7b0GOqUBBtWUg7WDJyPBPMtXiK%2Broe2DPudT2Bdnraerh9TEnN65ICKQVg5tBrlPm3m26f1qtFm%2BU25FzE4v%2F%2B270iKhs9adwXSXMHyNosYTQ2yz4BwnaNDGDuvsZjDDotkHu3YkDLr46jFO2gnmb%2BO8Mf2svmktO9V88QYIYkP32BJ6Is9%2FytPS7rxjPQm7Rya3u5o%2BJQcnbknRz%2FhB36%2FTphBpXG4RVd18&X-Amz-Signature=01d9b7cba8d314dffc1b5b2c81ee96a8bc423ed962a86062e6bffa7f76ce571b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJW5YYG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGWjRDWXVIxuQzocvsPsLhozTqd%2BeS59cunArH%2FpcIcQIgYkqtnGDF4SmczxRM%2FbVnJycSVyFfsTEbWOguKeGUTj0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH%2FXcXBN3D8tN3mkeCrcA5PlbcYgD9Okrha5AZZELDkVbMkUTyjQ4Cw9VCHuNQ%2FVJcKPdkFOfMmgbWOWlCRrYq5xidbq1j%2Ffx1R%2BYx7ZdvIJBnLRoJcgNvfbOmzWzxnjp1uLTXmPvGPQ%2F%2BjYEOtF6LSV9ffwYLdM1sXQ0Pb5e5zkx5%2Bh9YVABzn500KhT9HsL%2Fn4YQXWl9JpHTmkm%2FYF2hQ2t1bkBFnY7BslwDm6qivV3gCgs7RdpO%2FxnprCx5ggrDeDuYXAiZz%2FfpRlZCa2S%2BvIaReX6igJhFD0FF6oV8bozpuPgJrhsalcbFYH6EGirfHX63MlLpYmBJYtd0Xk3dg6j02yKnAhBet0SJuHLQAUUMjz6INbkr7XfQwP3927WYC77vJ1J%2BIMSfQ%2F8pB%2BJ3iS8lvyTWu9NTIuqtiep5durRTq0LrnLOIHQpDxFWto5jGXaOHu8aeRTwg%2Fb8SXEw0UwSrAstuDNtLUvp%2BLNYUw%2BDN0pNmF4puws6KK2RVFNUtLQR%2FJUmbECo0VAvggPBJfd2ZSgskUKK4MQypcpfbscK7WEA%2BwYqdUHFzzVqpoq5kF6mWxzZrnN5%2BAJQzlhs8zZNZhkKWDOQMnglr6pFZVJ16wtrRNaSj5FOebO0vqhk6mGz%2BGap3DHM4OMNHn7b0GOqUBYVbCugmPaw9UlBZ26wDytQaKmwJRBVr9Lz5TCK2Jtx82pOsteBett0fxVCtzQW7OuNeNln%2FyAZ4DNsJ4xM6sAXgVmX00OHinZRNAWwSh%2FbvAj5phJOuAkdaoy%2BtqIFUPy4%2FCJhqmlYamBQr1ZVFIaDG96fLuDzBZpwjFuP2F%2BdzVPvdljbSzdlw5PP6xLCwOdsih2emZIvq2UZQs8NxMLulhEVAT&X-Amz-Signature=9d2cd69f4d286e037cbebace95a5fc005afb84725c0a02931e9ab92090fc0ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
