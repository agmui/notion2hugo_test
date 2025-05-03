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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E6QHXM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDn7xilqeEREiM291TgfwqvBbTVAkZItEKaFmpa9C2Q5gIhAMtZCfhlzuwY7wO3ZSoTisxB7GR%2BRsC%2FeORyrwlprw%2FeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLqbbXDJqnFKE5Buwq3AN3GkLt%2FWYA%2F%2BvyZUQsj2eOGMncDZMa7qx2dXRr7NlWy8dCyUq6Qug5OBonjw%2Ftc2VnjK9uA9mYP4TcJVL8OTVsFHkJx36pps%2F7Yewtl5eKplvwyyU%2B%2FwJefuaHU9%2FxSpQbJm5Dm8e356o7PEsDFVb47nDq6tLsIYg09wTm6b7Gj9u4Y0M6DYttJPk4bIyhzFgzfkBMRg6u7QN4kcc41t1zSHPpAzIkga1oldRoVBsLqtKBk%2Bu%2FzhpQ3fuS1LM7ZeT0hR4O6goQYW%2FpeOVTMY2cnRnwnLusC9he68gIEJcYZ88HzeMZ%2F7raVZskrSwP7T4AZuC64RLleZ%2FjXL%2BkO6Xmvhm5qc0woUxGR3m9gNmru3yNhJHe4HfLF9reQKcTEefzfwObd%2Bn3cUm4Kt0KzHahKMnHRyxGVmVtiaCJAVnImJdWvdANPL87fJk2nC8IOpCRNZqngO2FvQ5uGM7zZ8FWESIPcYV8Mh%2F1sgXWmZQHZ84sFnL245nFoO0IabtHOVHQ8HjmtKv%2FgC818vhIOC4YmW8GIrVgenoFbFDPw9gjA5LD4LoFskKbmGbXtWNWRIYwxuwsi0e2A3ildYNHjEWSCCxIoW2ijfMUmA5h%2FMO%2FM8LowQO18bzNhUsXMzDKv9XABjqkAe2pFj7YqdxQanPpD6qQnrQtr65LCMUn%2BJOE%2Fwf%2BNjdTESNfdOutR%2BpIDeP2G2ToOEbB50%2BwWULx9YrOhfvb4Hyww9YuvjDs1trdUyNJlVSGauDKvF8F%2F%2FqSgWw%2BQqraxwvjR%2FzUEbjxxrSTXHysVOqcwrRNr4eVb7mZuQSyCMZUOji4BW47h8o%2FmXeFlxaQDazxscQjPOuAmjtJEwbC4wZTuk0j&X-Amz-Signature=0630551059c10202e5b4d227e8f37cb294875c3dd629e1366e3f7a138489c4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E6QHXM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDn7xilqeEREiM291TgfwqvBbTVAkZItEKaFmpa9C2Q5gIhAMtZCfhlzuwY7wO3ZSoTisxB7GR%2BRsC%2FeORyrwlprw%2FeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLqbbXDJqnFKE5Buwq3AN3GkLt%2FWYA%2F%2BvyZUQsj2eOGMncDZMa7qx2dXRr7NlWy8dCyUq6Qug5OBonjw%2Ftc2VnjK9uA9mYP4TcJVL8OTVsFHkJx36pps%2F7Yewtl5eKplvwyyU%2B%2FwJefuaHU9%2FxSpQbJm5Dm8e356o7PEsDFVb47nDq6tLsIYg09wTm6b7Gj9u4Y0M6DYttJPk4bIyhzFgzfkBMRg6u7QN4kcc41t1zSHPpAzIkga1oldRoVBsLqtKBk%2Bu%2FzhpQ3fuS1LM7ZeT0hR4O6goQYW%2FpeOVTMY2cnRnwnLusC9he68gIEJcYZ88HzeMZ%2F7raVZskrSwP7T4AZuC64RLleZ%2FjXL%2BkO6Xmvhm5qc0woUxGR3m9gNmru3yNhJHe4HfLF9reQKcTEefzfwObd%2Bn3cUm4Kt0KzHahKMnHRyxGVmVtiaCJAVnImJdWvdANPL87fJk2nC8IOpCRNZqngO2FvQ5uGM7zZ8FWESIPcYV8Mh%2F1sgXWmZQHZ84sFnL245nFoO0IabtHOVHQ8HjmtKv%2FgC818vhIOC4YmW8GIrVgenoFbFDPw9gjA5LD4LoFskKbmGbXtWNWRIYwxuwsi0e2A3ildYNHjEWSCCxIoW2ijfMUmA5h%2FMO%2FM8LowQO18bzNhUsXMzDKv9XABjqkAe2pFj7YqdxQanPpD6qQnrQtr65LCMUn%2BJOE%2Fwf%2BNjdTESNfdOutR%2BpIDeP2G2ToOEbB50%2BwWULx9YrOhfvb4Hyww9YuvjDs1trdUyNJlVSGauDKvF8F%2F%2FqSgWw%2BQqraxwvjR%2FzUEbjxxrSTXHysVOqcwrRNr4eVb7mZuQSyCMZUOji4BW47h8o%2FmXeFlxaQDazxscQjPOuAmjtJEwbC4wZTuk0j&X-Amz-Signature=39447b78204ef6f26c4b5080ea62568147b0883379e9ed7bf04594fb74c3ed67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E6QHXM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDn7xilqeEREiM291TgfwqvBbTVAkZItEKaFmpa9C2Q5gIhAMtZCfhlzuwY7wO3ZSoTisxB7GR%2BRsC%2FeORyrwlprw%2FeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLqbbXDJqnFKE5Buwq3AN3GkLt%2FWYA%2F%2BvyZUQsj2eOGMncDZMa7qx2dXRr7NlWy8dCyUq6Qug5OBonjw%2Ftc2VnjK9uA9mYP4TcJVL8OTVsFHkJx36pps%2F7Yewtl5eKplvwyyU%2B%2FwJefuaHU9%2FxSpQbJm5Dm8e356o7PEsDFVb47nDq6tLsIYg09wTm6b7Gj9u4Y0M6DYttJPk4bIyhzFgzfkBMRg6u7QN4kcc41t1zSHPpAzIkga1oldRoVBsLqtKBk%2Bu%2FzhpQ3fuS1LM7ZeT0hR4O6goQYW%2FpeOVTMY2cnRnwnLusC9he68gIEJcYZ88HzeMZ%2F7raVZskrSwP7T4AZuC64RLleZ%2FjXL%2BkO6Xmvhm5qc0woUxGR3m9gNmru3yNhJHe4HfLF9reQKcTEefzfwObd%2Bn3cUm4Kt0KzHahKMnHRyxGVmVtiaCJAVnImJdWvdANPL87fJk2nC8IOpCRNZqngO2FvQ5uGM7zZ8FWESIPcYV8Mh%2F1sgXWmZQHZ84sFnL245nFoO0IabtHOVHQ8HjmtKv%2FgC818vhIOC4YmW8GIrVgenoFbFDPw9gjA5LD4LoFskKbmGbXtWNWRIYwxuwsi0e2A3ildYNHjEWSCCxIoW2ijfMUmA5h%2FMO%2FM8LowQO18bzNhUsXMzDKv9XABjqkAe2pFj7YqdxQanPpD6qQnrQtr65LCMUn%2BJOE%2Fwf%2BNjdTESNfdOutR%2BpIDeP2G2ToOEbB50%2BwWULx9YrOhfvb4Hyww9YuvjDs1trdUyNJlVSGauDKvF8F%2F%2FqSgWw%2BQqraxwvjR%2FzUEbjxxrSTXHysVOqcwrRNr4eVb7mZuQSyCMZUOji4BW47h8o%2FmXeFlxaQDazxscQjPOuAmjtJEwbC4wZTuk0j&X-Amz-Signature=5f77cbab48580b71a3c103a47fffb0377be284a0577bedb494318d1d4ded0ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E6QHXM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDn7xilqeEREiM291TgfwqvBbTVAkZItEKaFmpa9C2Q5gIhAMtZCfhlzuwY7wO3ZSoTisxB7GR%2BRsC%2FeORyrwlprw%2FeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLqbbXDJqnFKE5Buwq3AN3GkLt%2FWYA%2F%2BvyZUQsj2eOGMncDZMa7qx2dXRr7NlWy8dCyUq6Qug5OBonjw%2Ftc2VnjK9uA9mYP4TcJVL8OTVsFHkJx36pps%2F7Yewtl5eKplvwyyU%2B%2FwJefuaHU9%2FxSpQbJm5Dm8e356o7PEsDFVb47nDq6tLsIYg09wTm6b7Gj9u4Y0M6DYttJPk4bIyhzFgzfkBMRg6u7QN4kcc41t1zSHPpAzIkga1oldRoVBsLqtKBk%2Bu%2FzhpQ3fuS1LM7ZeT0hR4O6goQYW%2FpeOVTMY2cnRnwnLusC9he68gIEJcYZ88HzeMZ%2F7raVZskrSwP7T4AZuC64RLleZ%2FjXL%2BkO6Xmvhm5qc0woUxGR3m9gNmru3yNhJHe4HfLF9reQKcTEefzfwObd%2Bn3cUm4Kt0KzHahKMnHRyxGVmVtiaCJAVnImJdWvdANPL87fJk2nC8IOpCRNZqngO2FvQ5uGM7zZ8FWESIPcYV8Mh%2F1sgXWmZQHZ84sFnL245nFoO0IabtHOVHQ8HjmtKv%2FgC818vhIOC4YmW8GIrVgenoFbFDPw9gjA5LD4LoFskKbmGbXtWNWRIYwxuwsi0e2A3ildYNHjEWSCCxIoW2ijfMUmA5h%2FMO%2FM8LowQO18bzNhUsXMzDKv9XABjqkAe2pFj7YqdxQanPpD6qQnrQtr65LCMUn%2BJOE%2Fwf%2BNjdTESNfdOutR%2BpIDeP2G2ToOEbB50%2BwWULx9YrOhfvb4Hyww9YuvjDs1trdUyNJlVSGauDKvF8F%2F%2FqSgWw%2BQqraxwvjR%2FzUEbjxxrSTXHysVOqcwrRNr4eVb7mZuQSyCMZUOji4BW47h8o%2FmXeFlxaQDazxscQjPOuAmjtJEwbC4wZTuk0j&X-Amz-Signature=3f18d969b4634961d1ff6ae291b020fd7f034f204b27e6f6146d9f9c3e74f66a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXQIQHS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIBzPk5doBUh2FMvRMS%2BBYexz%2FSkvR3EIfmqg4ryLmUjCAiEA0r1CpmvePHcDywXwbd%2BmvAKm0PpPlniaFPYIbExC%2FPIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9Q5xE%2BWPkmzCsHfircAx9b98nh5MBcmzf1djXEixdZuZ3fm%2BgPtdXSYOtZeq9IxDEiSkO9vN8%2FoDrhOyeFv1kf4F1lUXy8%2FJwWSxchU0aKtQbsntyNe4sWeE1cP8t%2By6MtrDbZOpq6x7BaQCPOS9UANjkmbJDEeqSy3gwEnCLg6GlIPrSM22yIHMajz7qLpepQVXx6I60KLM3%2FYN%2BArNIhYgbw3ngzdq%2B3H9HHWvB1S%2Byf295e77K0PczAj72%2BX2eTs1dxRI2t4q1gjxdfZXbscRdTxXV%2BW74lL9Yl4sUDectjrZDLm%2BXWtL0w4p33Aa2nJ25ghhE%2BwdAFQTZOByTqOcFs5MS9OiTovZnVaJ%2BsiHd92qEXoA3xLgfWwGKj4CSp5dOXBFD2mtBpbyCZYvJy0IpiE%2BnhQ0U6Bm8QMeD4He%2FRK3uqvP53KnnkteJGqyIRDH3jmHNXFabhBw3BaXAgkIYKOiH75ExAsfEurMC8NGZQ%2BOOcTAF9ypx%2BoDtiXq2IAEvyBd3k6fINeRh2ZvZPIaI6eJzFnHataswPDB1SzpSipEEjmrC%2Be3Z3wDBwmTdYcnoeLTDnDu%2BqTg%2By8hgBbA3d%2FZiUX4Cfc%2BOEOhCeWIuFQFK1YIlTHOkEH2pfT0yZLuSM94fSqI6hMIe%2F1cAGOqUBoYL8TMjYXjqnxrAGgIYGhlAW744qJmCup7zkzJLweHM56bfOutTr%2FxsWXuxW59ARLoiXrsuBwX7Oj4SNA9EwB%2B8hIZVCgLZhlpWUb2nzX1IY%2BGO%2BrqPCy%2BFFVDENtSWoFqSUIs5arLEzjwbgfIMl9CEQz2v0oJYKoLgUXDDMvCXUALII4mcv90I0x70vJD8i5cbffl%2F0cyCngsBi5J0jGcFGdt3E&X-Amz-Signature=0b957f18752e6691b285a1bf85b2f5edff246922bd52d7cdea748564bfa4a4da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E6QHXM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDn7xilqeEREiM291TgfwqvBbTVAkZItEKaFmpa9C2Q5gIhAMtZCfhlzuwY7wO3ZSoTisxB7GR%2BRsC%2FeORyrwlprw%2FeKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLqbbXDJqnFKE5Buwq3AN3GkLt%2FWYA%2F%2BvyZUQsj2eOGMncDZMa7qx2dXRr7NlWy8dCyUq6Qug5OBonjw%2Ftc2VnjK9uA9mYP4TcJVL8OTVsFHkJx36pps%2F7Yewtl5eKplvwyyU%2B%2FwJefuaHU9%2FxSpQbJm5Dm8e356o7PEsDFVb47nDq6tLsIYg09wTm6b7Gj9u4Y0M6DYttJPk4bIyhzFgzfkBMRg6u7QN4kcc41t1zSHPpAzIkga1oldRoVBsLqtKBk%2Bu%2FzhpQ3fuS1LM7ZeT0hR4O6goQYW%2FpeOVTMY2cnRnwnLusC9he68gIEJcYZ88HzeMZ%2F7raVZskrSwP7T4AZuC64RLleZ%2FjXL%2BkO6Xmvhm5qc0woUxGR3m9gNmru3yNhJHe4HfLF9reQKcTEefzfwObd%2Bn3cUm4Kt0KzHahKMnHRyxGVmVtiaCJAVnImJdWvdANPL87fJk2nC8IOpCRNZqngO2FvQ5uGM7zZ8FWESIPcYV8Mh%2F1sgXWmZQHZ84sFnL245nFoO0IabtHOVHQ8HjmtKv%2FgC818vhIOC4YmW8GIrVgenoFbFDPw9gjA5LD4LoFskKbmGbXtWNWRIYwxuwsi0e2A3ildYNHjEWSCCxIoW2ijfMUmA5h%2FMO%2FM8LowQO18bzNhUsXMzDKv9XABjqkAe2pFj7YqdxQanPpD6qQnrQtr65LCMUn%2BJOE%2Fwf%2BNjdTESNfdOutR%2BpIDeP2G2ToOEbB50%2BwWULx9YrOhfvb4Hyww9YuvjDs1trdUyNJlVSGauDKvF8F%2F%2FqSgWw%2BQqraxwvjR%2FzUEbjxxrSTXHysVOqcwrRNr4eVb7mZuQSyCMZUOji4BW47h8o%2FmXeFlxaQDazxscQjPOuAmjtJEwbC4wZTuk0j&X-Amz-Signature=87e651356f826a85a96ee66fd0cc27fe8dead71a5c6f3cedc84fba31bede4b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
