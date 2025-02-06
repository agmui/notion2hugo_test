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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5IHK64I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1da2V7AqC860%2BKL6Vuk7WT893tkROiNRNfxBkE3UDzAIgMsUUAn6tk8JMk0mzqQDU%2FtDjmzjQDoHieo5Xh0j%2FLi8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIX0eCNMZpKuxJOhsircA3OOYS3jBbBYi4e4xtmSoOXh%2B3RiPa94zqe0rJx3XGlAROaLpyq5v514gli0uz0QLx3D2CAHEZjCzHknZCHrmbquQLpYh0gNlbsdeLyj3eecQJvo4TA6tPVoNA1MqaZX%2BjjIuj892D9dVhgzCLRGpZ%2F5sqPYW38Mu4Bew3BoiEBaQuwmW%2FChy71ocqNE9eXqHKNBCK4VXjAHLWWcW%2Bv2mnhjaYrI9aNHblh%2B%2Bx1wa685kwpyHiF%2FbqfkqoRur10OxrCK%2FI4trKKMOTYxvmEflvrPVrEnQD9S5CA69LC%2BDzvxA0gv2zJZ3qWYdHzNGSTgonsy5uQMLq6TtYfScv%2FxFO2LomDxJ2Pud7Cp5AOmdH2hF7Q%2BeHHMkzjbOC1Ibg02xiCNG1IETzN1Rc54LvxdvhhBT97hepqQEn89CgAnYXzP1DA%2BdcDu2fG%2BeU49T9rRTNsAJY%2BqW1L9MGp%2BI7QN6r%2BzyyNDhTpm7sWrn9D3MVwyNdU7u5FMLeMT0%2BsPxuXBLLhZt7mXUSKmXXG9jfpW7ZO9VZtvmdWStBN6P9wLK8fUEfU1BKCsg3N7WL6XtAIP9aNzN2mHTzeLF9ujGtHuMOMWQAQSowRro7jn5IScwLOtG8IUCNXd%2BseAbLOpMN36kr0GOqUBhbBQUiXQ3nGh%2FnzMKzCrf3%2FULL90EIJIAt8GL3HNnA%2Fbx3AJ2n2qjUNFp5YsZPOMjuZ8wcH%2B80aeO%2BpmE4fLDl51u5O%2BPO3mssiiuT1eO9d96MQHBBowPxsLzTICsl6JSk5oW%2FOx4a1EJoc0HwjsSqivxAw893Woy%2BROmxC1qUzy0Ee%2B0fzxKti3iGcaO0pa1gpR4fs1vVbkiAKKFJsMgs%2BMl1%2Fl&X-Amz-Signature=a18a86b29fc3f4270620c31f844bf005e79682b4571ea61df9810a77e6da0322&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5IHK64I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1da2V7AqC860%2BKL6Vuk7WT893tkROiNRNfxBkE3UDzAIgMsUUAn6tk8JMk0mzqQDU%2FtDjmzjQDoHieo5Xh0j%2FLi8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIX0eCNMZpKuxJOhsircA3OOYS3jBbBYi4e4xtmSoOXh%2B3RiPa94zqe0rJx3XGlAROaLpyq5v514gli0uz0QLx3D2CAHEZjCzHknZCHrmbquQLpYh0gNlbsdeLyj3eecQJvo4TA6tPVoNA1MqaZX%2BjjIuj892D9dVhgzCLRGpZ%2F5sqPYW38Mu4Bew3BoiEBaQuwmW%2FChy71ocqNE9eXqHKNBCK4VXjAHLWWcW%2Bv2mnhjaYrI9aNHblh%2B%2Bx1wa685kwpyHiF%2FbqfkqoRur10OxrCK%2FI4trKKMOTYxvmEflvrPVrEnQD9S5CA69LC%2BDzvxA0gv2zJZ3qWYdHzNGSTgonsy5uQMLq6TtYfScv%2FxFO2LomDxJ2Pud7Cp5AOmdH2hF7Q%2BeHHMkzjbOC1Ibg02xiCNG1IETzN1Rc54LvxdvhhBT97hepqQEn89CgAnYXzP1DA%2BdcDu2fG%2BeU49T9rRTNsAJY%2BqW1L9MGp%2BI7QN6r%2BzyyNDhTpm7sWrn9D3MVwyNdU7u5FMLeMT0%2BsPxuXBLLhZt7mXUSKmXXG9jfpW7ZO9VZtvmdWStBN6P9wLK8fUEfU1BKCsg3N7WL6XtAIP9aNzN2mHTzeLF9ujGtHuMOMWQAQSowRro7jn5IScwLOtG8IUCNXd%2BseAbLOpMN36kr0GOqUBhbBQUiXQ3nGh%2FnzMKzCrf3%2FULL90EIJIAt8GL3HNnA%2Fbx3AJ2n2qjUNFp5YsZPOMjuZ8wcH%2B80aeO%2BpmE4fLDl51u5O%2BPO3mssiiuT1eO9d96MQHBBowPxsLzTICsl6JSk5oW%2FOx4a1EJoc0HwjsSqivxAw893Woy%2BROmxC1qUzy0Ee%2B0fzxKti3iGcaO0pa1gpR4fs1vVbkiAKKFJsMgs%2BMl1%2Fl&X-Amz-Signature=a8e852b4fe9d5fee88f90d1be4ae86ae03e121f01e59f86d3b0413073e7ef6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOFFQPX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGo%2B0MmqNM3icvKfAiJ%2BzCTrYZmCRnEW16bpUGtYLwQWAiEA7JQjtKrdI3Tlslv5psqdaa1xfcbpmQc56Ogoq%2Bloy6Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFzDsi2Axcnk6VZmBircA5oklJT6VLcImKXgExlMc3lAHJOEaFZGUQEbEOGo5CFZ1blmeAJXAqTj0io2y0kzN74RZoc1HU18Ph3YhiKaoasCrCPDb9nSsJpUi0mYwasllp8SmEXz49JA9XMRJoWO4wJbqxX3RUY8nEkzC7SCfZqbbutQHdT%2Fgsyx72Y2VZrIkIKjHndLYS1jQqxwEtrtNyg%2FsX5fiVCI%2F6IoLrqz462GYBDqWeYiWD47j421GnGTkTtBuikH87%2Fco7sFccV5%2FMYN515fH0cmov9N%2FQoAyybgU5O48IvLrMwMtJYKq5XEzG4JRVXgut6rJQz120BVN1A%2B9%2F3e945BnhVF5ybChcOUUQ7QIHoZtshVgyF%2BPI9xqWSKUDTvxrEdcNeqrSGEzMTc1yomwjUAzIpXpA8INH1RCDIQ%2BVv9NDtEtLLJF4UD8fKc8kSco4XlCbYyUdn6s3WexwMNFrB%2Fly%2Bq%2F7vVW2D6lNQHNpU6LmT2LqR0aqPasKpwTefBdJ3D28yCLjDX%2BlvXQa1Y2oRhqz43QPQyPict1JCO1kZHzghO3WRueY2jIBU1pQAjog73y9giGVhS0pXm%2FfeVCKyaxSdmGULk%2F3N3GGVIC7W1ogFpAdo%2BzzufMeSiO%2FLtQrLwGIbtMLL7kr0GOqUBFhxaBt%2FFLdH8lITVmUR2%2F1FHEqlP8LY9eTahdvEKWOmzjy7%2FIRcGA9%2FJziVBZL%2B%2FwuIfnRrEboTlWznbL0DGZhvJ731Kn%2FgnvCacTyaPJ%2FszFk8ZD93FhoY0wqZv8k5oomITPPme2fsGgCelq7LLG60snxm6oKk2er5bquiwPuwyQ%2F87EbqFHOJh8KFwdWaE0hpNa8B5ld7ZDWp2F92lx4t0XG5D&X-Amz-Signature=511c02e0dd2fdfc6382fb0df42023827654841eb5e514f97f193c0211f16b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WPGBYQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAE6IztTtL5Eu9EQZTXPjWT9olwk%2FtVuiMPUfaF8Fvn2AiEA1SpH%2BYivfUw69YCEc9wRNckRhAGiOkvXIdOl%2FPFy%2BRkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNBjA%2FFyv%2FCorjwNrCrcA3y7mV5BM9IfiOGLIOEXABxt95EfstfUOmFBRd%2Bo%2F7PcI%2F5tIwCC2PrWsOAYIzBrl3k3RAPDhjX7gw71zWLpqPRKTj9v%2BWy5qIjbNeJVGKeDcX4Ao%2FmHD8CpqMUlqWjZ0PqTB%2F0j2pAY3j0sHYzOtee8p9%2BMxENZf3f%2Fz%2BAt6iZH6El4%2BwUbin%2FkiD%2FFZCm0e07tcCQ7%2BrSh0AyP62FRXis4qyYUIrCuwPqbYub%2FUuYiSGVSMaBZDjxJToi4KNyu%2FIIFZ1tZFEkOdwIE70uMr8rGirNQyO68MzgcUAJPt9dkJh601pLgfDyD9YztS8I2EVdN8wj%2FpM3n2PFtoGYxz6fE1uQpl7J167QWWN3yoYjWeRnhQIbT3%2Fu%2FPTXgttZyIE%2BEiYvrWnV0tqw9ZaZyMi6Wjtb81%2BYvRusU2HilFJJJqx6mAuHSa5ZVEDSvcbQMhtpOiRi7%2FiI%2F59SVUe9eYFO6AwZ8gRdjRYt9kx7W%2BDWFGiDRvOG0KTQAGlYE8nCwiaSD%2F9LHImzWFtXhQaBZ8GINVezUFtlVTo6UnA2jLQaezJRg9eUIYcEpYB%2BmDwJN8b73M6rIPLPZ50XF7miVQlGoHe7xUI2RxVsAD5CkMxIcyQ%2B7FAOL%2Bg6f5VxJMMb7kr0GOqUBKz1UTk07%2BogA%2BTzisqJXqHNVtcoxkbj08e%2BnQvYUw3O8TRCS%2B8Z60%2BWGWx%2FgfQ9vAkGJjRm0JELt8jqzYacafDY59%2FHUHBcXlzpYGgrAV7uszoiKXwFWVBCOk5OYwcCWowEow%2FqFHeoRCwaHsouJYxyxpgSqSPNUnfM6tLqlKVFvDZo66q%2B2yxls2am%2BSzA5jBVaPBcyudynMTTdSl9riJ7d%2FhJ5&X-Amz-Signature=33d32ff2752ece839d85d95a1f55ffc07ad8981ae28d770b3d0e7b047ed8830b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5IHK64I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1da2V7AqC860%2BKL6Vuk7WT893tkROiNRNfxBkE3UDzAIgMsUUAn6tk8JMk0mzqQDU%2FtDjmzjQDoHieo5Xh0j%2FLi8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIX0eCNMZpKuxJOhsircA3OOYS3jBbBYi4e4xtmSoOXh%2B3RiPa94zqe0rJx3XGlAROaLpyq5v514gli0uz0QLx3D2CAHEZjCzHknZCHrmbquQLpYh0gNlbsdeLyj3eecQJvo4TA6tPVoNA1MqaZX%2BjjIuj892D9dVhgzCLRGpZ%2F5sqPYW38Mu4Bew3BoiEBaQuwmW%2FChy71ocqNE9eXqHKNBCK4VXjAHLWWcW%2Bv2mnhjaYrI9aNHblh%2B%2Bx1wa685kwpyHiF%2FbqfkqoRur10OxrCK%2FI4trKKMOTYxvmEflvrPVrEnQD9S5CA69LC%2BDzvxA0gv2zJZ3qWYdHzNGSTgonsy5uQMLq6TtYfScv%2FxFO2LomDxJ2Pud7Cp5AOmdH2hF7Q%2BeHHMkzjbOC1Ibg02xiCNG1IETzN1Rc54LvxdvhhBT97hepqQEn89CgAnYXzP1DA%2BdcDu2fG%2BeU49T9rRTNsAJY%2BqW1L9MGp%2BI7QN6r%2BzyyNDhTpm7sWrn9D3MVwyNdU7u5FMLeMT0%2BsPxuXBLLhZt7mXUSKmXXG9jfpW7ZO9VZtvmdWStBN6P9wLK8fUEfU1BKCsg3N7WL6XtAIP9aNzN2mHTzeLF9ujGtHuMOMWQAQSowRro7jn5IScwLOtG8IUCNXd%2BseAbLOpMN36kr0GOqUBhbBQUiXQ3nGh%2FnzMKzCrf3%2FULL90EIJIAt8GL3HNnA%2Fbx3AJ2n2qjUNFp5YsZPOMjuZ8wcH%2B80aeO%2BpmE4fLDl51u5O%2BPO3mssiiuT1eO9d96MQHBBowPxsLzTICsl6JSk5oW%2FOx4a1EJoc0HwjsSqivxAw893Woy%2BROmxC1qUzy0Ee%2B0fzxKti3iGcaO0pa1gpR4fs1vVbkiAKKFJsMgs%2BMl1%2Fl&X-Amz-Signature=ac052e4e1f8badcb9d32fb268c2593276413c98bc9f54ebcd6b720cd185240c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
