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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGNDWAA3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCvWrNyRMy0QcdkPYcSu6M1fD4LgdDkHujeTDG2JkkUygIgMoG4DmLnzmXQJT5KKirdOwuOdA0vTFEDDyzSnJ%2ByWKcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFxz9ZOYlxtRoRc8HSrcAwKcGr0Z1c0Ec%2BTdkxNCC%2FWsxwxq0%2F953ka8zS9K2n%2F1KEnDnCDC4XgAZ1GSKwUwBQeFP0EzgRwEU2Xy8qdOAkoeCDLMswrZ5oIZfMa3mA92tPCBYEk5wF6iSe0Q4My0YbNzX4dmxeIFSkry8Xg9QSOefZhrKWpEhcnwZzoxqtN7wha4lW4Y4aFxzZS5Vsh2WfC%2Bo90sbP1ir%2FPWWtGf7%2FTqLt1d9TO1tIZ9joUims9H%2Fjji97xagMxrU8mSmA%2BUDA7X94RRheI6durdoQi6LIZTEwSLTIylUuadFubuI%2BDJcNXB0l8BCOtLhPBzDUzGIt46ys2vSO0q%2Bw5kuPCmI%2B7n5Tb6InAtpAimf%2BjUQA9YRqMeQbyiYeLoCXh0xi%2FcxzTjIxvz2zvXjZClk2VhLxfGQB1H6BGk0ZIjdy6AeYwCA%2Fkp9p6paYoNRdVWWoVazjDYVl5iwLrPYcVsdyzwET2qW8zpbWG3Uv8Yn6nLp5F4kpT1ik0CXGcJEqCHQ2GUej8kGbTY8j0ozfrbRnsGpfJx0wVAjo51pmPSsmNoOXdHH%2B8PylW1vd%2BREpfDL2s1GieZfDd7gXQUpjST1C7F0t%2Bv9g9IC%2Fqto7vyiEVThweX%2B4AUIYo0IXxBOjW%2BMI3pwMQGOqUBlX6w8RrEly3MF5omlVQeCvErzQbI%2Bua%2Feqg%2BSKuDB9aSjFfa5n4xRy3EIYldGFl68v%2BINRQDBQyGp2sBIygC8uAriH8wcfnbL%2BSAhMXJcsTccQQ7%2ByLq%2BDodZ5tCGxCUTJi2A1SPyvnC8ebnSXv3mUvkARYHCzXl62IbYl2cRLnJybZs9NhsJFva7s7%2Fr2EqHfjrDbsbxz%2FGXtDp4Y1031qE3nqV&X-Amz-Signature=e881c566d9be8f159e5cd61150e9a88e8808edc1a21baca821e0ca16218e1c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGNDWAA3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCvWrNyRMy0QcdkPYcSu6M1fD4LgdDkHujeTDG2JkkUygIgMoG4DmLnzmXQJT5KKirdOwuOdA0vTFEDDyzSnJ%2ByWKcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFxz9ZOYlxtRoRc8HSrcAwKcGr0Z1c0Ec%2BTdkxNCC%2FWsxwxq0%2F953ka8zS9K2n%2F1KEnDnCDC4XgAZ1GSKwUwBQeFP0EzgRwEU2Xy8qdOAkoeCDLMswrZ5oIZfMa3mA92tPCBYEk5wF6iSe0Q4My0YbNzX4dmxeIFSkry8Xg9QSOefZhrKWpEhcnwZzoxqtN7wha4lW4Y4aFxzZS5Vsh2WfC%2Bo90sbP1ir%2FPWWtGf7%2FTqLt1d9TO1tIZ9joUims9H%2Fjji97xagMxrU8mSmA%2BUDA7X94RRheI6durdoQi6LIZTEwSLTIylUuadFubuI%2BDJcNXB0l8BCOtLhPBzDUzGIt46ys2vSO0q%2Bw5kuPCmI%2B7n5Tb6InAtpAimf%2BjUQA9YRqMeQbyiYeLoCXh0xi%2FcxzTjIxvz2zvXjZClk2VhLxfGQB1H6BGk0ZIjdy6AeYwCA%2Fkp9p6paYoNRdVWWoVazjDYVl5iwLrPYcVsdyzwET2qW8zpbWG3Uv8Yn6nLp5F4kpT1ik0CXGcJEqCHQ2GUej8kGbTY8j0ozfrbRnsGpfJx0wVAjo51pmPSsmNoOXdHH%2B8PylW1vd%2BREpfDL2s1GieZfDd7gXQUpjST1C7F0t%2Bv9g9IC%2Fqto7vyiEVThweX%2B4AUIYo0IXxBOjW%2BMI3pwMQGOqUBlX6w8RrEly3MF5omlVQeCvErzQbI%2Bua%2Feqg%2BSKuDB9aSjFfa5n4xRy3EIYldGFl68v%2BINRQDBQyGp2sBIygC8uAriH8wcfnbL%2BSAhMXJcsTccQQ7%2ByLq%2BDodZ5tCGxCUTJi2A1SPyvnC8ebnSXv3mUvkARYHCzXl62IbYl2cRLnJybZs9NhsJFva7s7%2Fr2EqHfjrDbsbxz%2FGXtDp4Y1031qE3nqV&X-Amz-Signature=492d2ad283a511837cb5fcff9b371a04d5d2967a843a37cdf31f70ae65e77ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGNDWAA3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCvWrNyRMy0QcdkPYcSu6M1fD4LgdDkHujeTDG2JkkUygIgMoG4DmLnzmXQJT5KKirdOwuOdA0vTFEDDyzSnJ%2ByWKcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFxz9ZOYlxtRoRc8HSrcAwKcGr0Z1c0Ec%2BTdkxNCC%2FWsxwxq0%2F953ka8zS9K2n%2F1KEnDnCDC4XgAZ1GSKwUwBQeFP0EzgRwEU2Xy8qdOAkoeCDLMswrZ5oIZfMa3mA92tPCBYEk5wF6iSe0Q4My0YbNzX4dmxeIFSkry8Xg9QSOefZhrKWpEhcnwZzoxqtN7wha4lW4Y4aFxzZS5Vsh2WfC%2Bo90sbP1ir%2FPWWtGf7%2FTqLt1d9TO1tIZ9joUims9H%2Fjji97xagMxrU8mSmA%2BUDA7X94RRheI6durdoQi6LIZTEwSLTIylUuadFubuI%2BDJcNXB0l8BCOtLhPBzDUzGIt46ys2vSO0q%2Bw5kuPCmI%2B7n5Tb6InAtpAimf%2BjUQA9YRqMeQbyiYeLoCXh0xi%2FcxzTjIxvz2zvXjZClk2VhLxfGQB1H6BGk0ZIjdy6AeYwCA%2Fkp9p6paYoNRdVWWoVazjDYVl5iwLrPYcVsdyzwET2qW8zpbWG3Uv8Yn6nLp5F4kpT1ik0CXGcJEqCHQ2GUej8kGbTY8j0ozfrbRnsGpfJx0wVAjo51pmPSsmNoOXdHH%2B8PylW1vd%2BREpfDL2s1GieZfDd7gXQUpjST1C7F0t%2Bv9g9IC%2Fqto7vyiEVThweX%2B4AUIYo0IXxBOjW%2BMI3pwMQGOqUBlX6w8RrEly3MF5omlVQeCvErzQbI%2Bua%2Feqg%2BSKuDB9aSjFfa5n4xRy3EIYldGFl68v%2BINRQDBQyGp2sBIygC8uAriH8wcfnbL%2BSAhMXJcsTccQQ7%2ByLq%2BDodZ5tCGxCUTJi2A1SPyvnC8ebnSXv3mUvkARYHCzXl62IbYl2cRLnJybZs9NhsJFva7s7%2Fr2EqHfjrDbsbxz%2FGXtDp4Y1031qE3nqV&X-Amz-Signature=80d79a647e56c4f37a6818f8b6b93065fe5f739888d360c585655cb92ecc3191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVQPWAT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIQCcG7F1mJCRktOPA%2F6WpRP%2FqHCIDwH%2FlHWHZAL0iDX3DgIfHHtT3d%2FURuyWPdNj35drYoGbCB0dqZL8wfNn%2BguvTir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM7cZu44fnXz8Q51O%2FKtwD7qb%2FMBc5sZAU7eQFs3nY7ogD9%2BImI2djTORrmNEqJMIAHlr8VPxdsG%2FBp7rLU3RI63%2Fx3WlNo0Dw0gbrVf%2FPy5%2FczKUgDK4aERXl3z%2FIZrYNh65L3RnSUGmcNPsZZhX%2BhOev9r%2BZqJROa%2BhzNzttb2YkIkqAHEEHFUFUTpj8wS4L%2FFb%2BV14EvFb4ze%2BPBzYEgsnKadpgIp2H%2BWKLK2PwLGPR3rM%2B6rG510%2FV5GmTB0pdL1jAALAy3Cip9KBPdfIHUirmBHEb4iVM2fH5gMcUaYUCHcyCFxRVo95TV0q6Ap2kY1j5owRn0Sp%2BPJ6Tfyp6kW8MgaQlGTsR3lUlNwgQ3KjmS4tyOfPxvQKYnSu6Bm8lvAvx1DKWL6Ug6NE02uoIBgC4rlt7msSWJ2tYQSH5MtAfdUY6jQBDzl2BpBDrdv1RVh1hQ3JY9BNDM2IJfXNTdprM7gNqSPQ%2BC7f9bOPSjUEeZMbyANxx7HvH71C1muRAuIFHqjTxNrxe3pngSQA36aFxAL1wiocuK3ZR1zgbPOFvtrU6qIs61PAYJUgMyLZhBI6wsP5wxW2oY6qsb4ppfXH3h1MRy%2F4PJLE629L6%2BLcKH6DxZNrL9vQYsXu%2BixlPouu93wjTwZfr4lUwwOnAxAY6pgH4qHs7xAY3OCa1OdL0wBnNQXESSF8Wssk%2BDnCYT4ZAxJBSKC3qak8d5VWICuUypFL6LytJXQtRiTGXiesHQ8MO5YbzE0ts0HnIRf29fknGE9d46IpzKqHXnCFXMGa2MOznG22q4JgSUykUL57kGTp%2F6XQqp6GOEVtNJzuYTPObCWuPIn6hU7v80%2BzhWmW9G2IHBJMjudM7afmxHrZDDy6euXseyJSG&X-Amz-Signature=36ddce98fbf56cb64605e4e561618768f24651a211268a25969b2312e2f1c492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAG4RBWS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCL12S4ZYJxcCLouozSzW3JR7w%2Fi%2FoAQjl1qeCBegEu4wIgRYIa7EVGrcZ1Y8BTp7mdwnLFwk0VZnN5sBM%2F3Z%2BRhrwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEITUscPAWjIW8J%2BCyrcA5QkkecJDIyjsZoS%2BNhe8LE4y6AXu%2BHBHWEeMf6Xs2W%2FTK1B5ddgY59h%2F%2F9CI4PuJPceiCjq47bz89gw1mS0WCTO4P3ZZcyJPr0%2BshVsp%2B2HyK5nHwWN9WemTrfBOq1%2BCqNvNqtTUWjRQVQkwu%2BERYBJb1Ku0AaP7R1arHLF580L%2FHKU2XZ4U%2B9WbVhjNFON7RrXX08R1%2BMgDKX47IcGWI5BIDqrcQQefLwUwng%2F%2BUxpbbi4LLe8BLtkBK2ml1bjeUe%2F9ESMURK2HLChEnZSvpe3JpHEPBojjLh9xqZO2H%2BxzO%2FGNOe0UZcIl8x6dt4iU6lspoWe50EkAptP8G95G7Ku2FIzLOF%2BmwGxDk%2BHr%2BYCOOyTiuG48MpFVbNNGGvk5y0LlqYLBVpWdECSn%2FCtbr2WbJxkhvYGfPvXS9x8i%2FFUloP8R3QsGj5TxvWLwYPVzVLLcm2gETvlGYqkSZQR4EDYyHkt9%2BTNyvt1j3j3VLo2i0MWr%2FQ8enDETf5YRH59v%2BAbi%2F0qGBmJHMkPGdmTWEr2uCj%2Fat5A6GpAUp9QDG%2Fvgo7tVu14lfNt3ZAnNTeyBqwMNZMJ2MIcRR8DEqx7tdPI01McNc9ND8JM17ivXAyRF6Ac79NizAStrin5MKPpwMQGOqUBaJTz1qR6VelzdWjqw5nheImsVwBfOewZXqqqemgja%2Fc7njXOAgtBLHaFDA4%2BiJSqEw3GL%2BSks6icfufn76ovNFezZfRxm%2FXDzLpP%2BVUqqH0srnPoa45rYxn4NQqghAO1Sa5vq0Thvn9yAOvRdQJJsUJNSz2nbvEUpZJ62646yl8A7EvgsYsj%2FlbB9sX414wPiKnRdjdC06P2vMTrp9%2Byru8BR5sm&X-Amz-Signature=8a1df6885d40b71d09b75f9ac456654bf39380c7a02bc0e3147f926c08cc4f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGNDWAA3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCvWrNyRMy0QcdkPYcSu6M1fD4LgdDkHujeTDG2JkkUygIgMoG4DmLnzmXQJT5KKirdOwuOdA0vTFEDDyzSnJ%2ByWKcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFxz9ZOYlxtRoRc8HSrcAwKcGr0Z1c0Ec%2BTdkxNCC%2FWsxwxq0%2F953ka8zS9K2n%2F1KEnDnCDC4XgAZ1GSKwUwBQeFP0EzgRwEU2Xy8qdOAkoeCDLMswrZ5oIZfMa3mA92tPCBYEk5wF6iSe0Q4My0YbNzX4dmxeIFSkry8Xg9QSOefZhrKWpEhcnwZzoxqtN7wha4lW4Y4aFxzZS5Vsh2WfC%2Bo90sbP1ir%2FPWWtGf7%2FTqLt1d9TO1tIZ9joUims9H%2Fjji97xagMxrU8mSmA%2BUDA7X94RRheI6durdoQi6LIZTEwSLTIylUuadFubuI%2BDJcNXB0l8BCOtLhPBzDUzGIt46ys2vSO0q%2Bw5kuPCmI%2B7n5Tb6InAtpAimf%2BjUQA9YRqMeQbyiYeLoCXh0xi%2FcxzTjIxvz2zvXjZClk2VhLxfGQB1H6BGk0ZIjdy6AeYwCA%2Fkp9p6paYoNRdVWWoVazjDYVl5iwLrPYcVsdyzwET2qW8zpbWG3Uv8Yn6nLp5F4kpT1ik0CXGcJEqCHQ2GUej8kGbTY8j0ozfrbRnsGpfJx0wVAjo51pmPSsmNoOXdHH%2B8PylW1vd%2BREpfDL2s1GieZfDd7gXQUpjST1C7F0t%2Bv9g9IC%2Fqto7vyiEVThweX%2B4AUIYo0IXxBOjW%2BMI3pwMQGOqUBlX6w8RrEly3MF5omlVQeCvErzQbI%2Bua%2Feqg%2BSKuDB9aSjFfa5n4xRy3EIYldGFl68v%2BINRQDBQyGp2sBIygC8uAriH8wcfnbL%2BSAhMXJcsTccQQ7%2ByLq%2BDodZ5tCGxCUTJi2A1SPyvnC8ebnSXv3mUvkARYHCzXl62IbYl2cRLnJybZs9NhsJFva7s7%2Fr2EqHfjrDbsbxz%2FGXtDp4Y1031qE3nqV&X-Amz-Signature=b2db80dfe64a4b4940492f7ca1e6d18b39197eb0dd55df164d8b59954bc2447a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
