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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GSGWZK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdpXe3%2FlTcHGzhI4IWIIdxkXlb73KZvPhPklOfXZ8oAIgDWD6nq6VG2%2FUQKzzEdi3nfQDRKssPV1VNNtir09At00q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHhOAL%2FLFCHaLkJgfCrcAw4hSBLwZoLCkcGTLZ4aoCC57oXZT5NQvKb%2FvjhIyVqLsbaTQtko1sI%2B4aY5l49dnAP%2FkOCpD3JpQwBY%2FEhSASFVCFcN59H9J59VBrHurFLZMBkUOOaPEUkbiLQvU6ur%2FyMIwph3yKwwGsMtYpqi3bPrPuaxWT9%2BmLZHOmE79P24RPqhULEzV5YzF2ejc7vbi8XCdU70isdzq%2BbbBdEO2R76fgHh3D1m332qTanumZnXhw%2FjseARdWbMCot9LmQ8SBJhg1UcVk2epM35N8eb0JRATriLr09ANoxDAFWU%2F5cklSPtBMEidRqsDlj9NFieRjy4%2FJ07s67T77YXehq%2FTffrY30pGKeFQwVmhuHDi3BKtSX1DLEuXw9tmtR46z0oJtyZGvdfUevQixmbGQSQ9H%2FObHdYWYXb2Fbptipba2sgaJF0IjD1MWg0%2BwG2wXgt6dFmX1vI9rFLLbaZUWzEVoIdSerUELnaxPIyvz78z19PGyRAQNylbUKPlU8oyy8LrZuX4UHTkvGBN3XbHM2V5j4Rhf0ZpNaT1VYS%2FD0ry3Bil2mlq%2FCSd72VlTCIR%2FROqFdYLj4grNd%2FoNzAFFOZ0%2F2ytmzcsp3XkrJ5vyLvYJbvaHSMB3wV5zMi6ZSqMOej0L8GOqUB9Hi5Zf8jVhk5EPyHfknVtSi1BG5vNVTTO7FvOMkkmbOmQSEPCiD1nLIeH13xMSNUvpco8%2BisWDJoYdLo4q0rvnEDUhdlFd9x8iruTXeeZ4nWeWjq%2Fg7os%2FDjPlhcV4ATLIqB6iQa7ZAdjBjMRLeCPJkGkBnjCyAXDDZVpJqpBRMEN%2FX23bipydmsATWVGAg6V%2BUJnl1Pu9zu%2BwyrxTGiYgQb9aa9&X-Amz-Signature=ff90a3479642e4a8e089ed9cc398f37f73a113aac7b384927e1fb99cb50fb84c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GSGWZK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdpXe3%2FlTcHGzhI4IWIIdxkXlb73KZvPhPklOfXZ8oAIgDWD6nq6VG2%2FUQKzzEdi3nfQDRKssPV1VNNtir09At00q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHhOAL%2FLFCHaLkJgfCrcAw4hSBLwZoLCkcGTLZ4aoCC57oXZT5NQvKb%2FvjhIyVqLsbaTQtko1sI%2B4aY5l49dnAP%2FkOCpD3JpQwBY%2FEhSASFVCFcN59H9J59VBrHurFLZMBkUOOaPEUkbiLQvU6ur%2FyMIwph3yKwwGsMtYpqi3bPrPuaxWT9%2BmLZHOmE79P24RPqhULEzV5YzF2ejc7vbi8XCdU70isdzq%2BbbBdEO2R76fgHh3D1m332qTanumZnXhw%2FjseARdWbMCot9LmQ8SBJhg1UcVk2epM35N8eb0JRATriLr09ANoxDAFWU%2F5cklSPtBMEidRqsDlj9NFieRjy4%2FJ07s67T77YXehq%2FTffrY30pGKeFQwVmhuHDi3BKtSX1DLEuXw9tmtR46z0oJtyZGvdfUevQixmbGQSQ9H%2FObHdYWYXb2Fbptipba2sgaJF0IjD1MWg0%2BwG2wXgt6dFmX1vI9rFLLbaZUWzEVoIdSerUELnaxPIyvz78z19PGyRAQNylbUKPlU8oyy8LrZuX4UHTkvGBN3XbHM2V5j4Rhf0ZpNaT1VYS%2FD0ry3Bil2mlq%2FCSd72VlTCIR%2FROqFdYLj4grNd%2FoNzAFFOZ0%2F2ytmzcsp3XkrJ5vyLvYJbvaHSMB3wV5zMi6ZSqMOej0L8GOqUB9Hi5Zf8jVhk5EPyHfknVtSi1BG5vNVTTO7FvOMkkmbOmQSEPCiD1nLIeH13xMSNUvpco8%2BisWDJoYdLo4q0rvnEDUhdlFd9x8iruTXeeZ4nWeWjq%2Fg7os%2FDjPlhcV4ATLIqB6iQa7ZAdjBjMRLeCPJkGkBnjCyAXDDZVpJqpBRMEN%2FX23bipydmsATWVGAg6V%2BUJnl1Pu9zu%2BwyrxTGiYgQb9aa9&X-Amz-Signature=74fcf338ac8e114448ebe7df4db4c29c563450e3f3992afc840a5e6479c568d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3PCMQP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2SbFNP9NvEuAGCYtWIJhAkrCjatrzJOGhghy%2FGEzKtQIhAO8kiv9jfGNpHhPMjbDgeMR3m%2Bs8MyT7IsCn7buq1Wr4Kv8DCGMQABoMNjM3NDIzMTgzODA1Igy3FqcLnKlEokEARhMq3APgqlDDVsRfM%2F28SQZtXmjsp5ZuCknDMJRZoHeE%2BU9fvh39FGdOMh4cG4XgFIhe6fQvhhG8wVuEKJQ7UYJ2xgGurHI7hg7gglgPG%2FX8%2FKHDAOYO7UlW8lm6allyCU4zvZOG3zI940JH95UAojUwhaFARv7m73kMe6yLWR6ErOZvbvFyE91LS5ycbe8JZeFsJqJyZxuRzcrvsucMU8SKAyy2PmOPk%2FwhGGpzo8cA7LS%2FkDcitXon74VNi50KZtPJDe01H6ZyGmRmRxbKLO3fx6xOJDKF%2BKM2I745jRemL8pykI2Jq4JwHkGGCn4l6udfDRQ1AMT4RVOifLjsAS8OiE5lFNTTjF4Curo%2FsdrDXkjUO2jCXg%2BE4iKLFSHHw8gpkBPh0IAxX%2B2a88v0KoIdRoMjaX3%2Byjh64DAxhhWDwT3ne1feqIBwYXmOMwYRr5iUx48GhuU99ONPIJZuFfRIf1kJFso4RIspt4Cb2evewAtUVJub%2FAYYyf1bynRP1X5m2eGO2%2BrA0wj6D%2BrjFL3fdx6muAkhI%2F5qqOnec7CkUYL%2BYw5ab6biHWNRyz%2FrFEpuptgTIHSfwV%2B3pCxYHA2TdHp0Tn7dLm3k0libWYU2hoYE3cYuFL3eJF79EZ6YEzChpNC%2FBjqkAXBC%2FymptJk48P0wEBgJbizlMZiaL9E3ZwDRyph%2FZNYmEQp27wCUtdcoOEAkyqFWjWsqAunPJ5axtpaquSTtQzV1WwKc3%2BFXCh3jW00LrEtTKW4Y%2F%2BsjHkYvDoA2ujBeU9xs80pUsLYD8dZDNqJOogR70JFoe2He3bvSQOuKcPzIk%2FQGg6VvEd6%2BsxoeQqyXS7UPpy%2BBegs%2FRkx60oc%2FVRyCzZJn&X-Amz-Signature=3a366bb6404d67c96f3cc727d62cb4e21befabd74655a23dd41a0e4d49eef9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MABWKJQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVtdUbPF4To8qYhqUjXBUrmbkxyVIXbdaqbZ20W%2FeeBAiEA4boKSvGMMZgO3zEP0wa7nBfJBmdKX8Qq3mnzDb8%2Fo9oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHreXQ25kLaKBKOtmircAzgKgYgMMzZ8k8ChW3h9jivXYG%2FEEMycVR4RPcd8YMI0dlW5WC7D%2FyIkhyeB9YqcTGixR4%2BMYTCvNhkVqMTVrzygtkkHbTgHWOhPM%2Fyxp%2F3%2BKWDhuL827YtNcDz8%2FLlBJf83I5XtACC%2BPVU0Ocmy9iFrffr64kmE7OYaq01nFPmUtPqQI%2F%2FnMEPpJGFWIK3REKynmSqGGFp9preSxWhVLG3DNc8L8OmdBkF2o0pEXz%2FjGRrjJnXdccq5G0i%2BUQjp%2FxlS5%2F7g8E7ldylXJ8Jpll4U0%2FNCzvLDVgbbKmQgzOzig1InhP7dyhrDsO%2BWQAB6%2FWaUo01qvlPLPlGIoesHcRa57CpRYR2AVxjw47KPcyyiqJXcfeyNNegC3oZ3QNRvP0nu%2FuZkma9nUycS%2FvIv%2BSErvXrIpDtKQUVVQ5%2BZrX%2BcaReUy3kshSEzZ%2F3t9%2Fzs0GRVy%2Bp3DhZL5pc%2BO2y%2BhSe0bbahEA6rGxQoovIALXOM288GfjeGIU8O53Pc1c7Ll%2BGQ5Y0uOa9xIaze6ab7w5fV78MQ6Gn8IFTR%2F0E%2BSDg2B6ZEhLkKhQWR9RI1T06J5fOFY1KQUZLYKCl6W6B1T%2FvdbdH%2FXl8RskMnvxjMHm0GefXNA3cIXwVtfX5CMPik0L8GOqUB4k%2FYAnTgN%2FuiGm4uyoy8NU08DIZnU6QvJgfy0pWDgy%2B0FPEnklS8tFRCe%2F0SuxVvVpjDnFNJSO4%2Frr8GumM8uzgkPEHJvAXbEQ3I%2FgSXcYhnUdMB3%2Frgel7U5PSIVYiWjqzmIWkkcA0Y5gb9Bay2D%2BUdvBCrAqc4nlPS6KzW9%2F5qPtb963g4UmVSP0I6ZKAneWx4Q1OOdzmp%2Fok62GPEoiZsnim2&X-Amz-Signature=d096839ec42f21e44a7bdc1e16b8a8672648e0040767f374687053f189aba045&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GSGWZK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdpXe3%2FlTcHGzhI4IWIIdxkXlb73KZvPhPklOfXZ8oAIgDWD6nq6VG2%2FUQKzzEdi3nfQDRKssPV1VNNtir09At00q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHhOAL%2FLFCHaLkJgfCrcAw4hSBLwZoLCkcGTLZ4aoCC57oXZT5NQvKb%2FvjhIyVqLsbaTQtko1sI%2B4aY5l49dnAP%2FkOCpD3JpQwBY%2FEhSASFVCFcN59H9J59VBrHurFLZMBkUOOaPEUkbiLQvU6ur%2FyMIwph3yKwwGsMtYpqi3bPrPuaxWT9%2BmLZHOmE79P24RPqhULEzV5YzF2ejc7vbi8XCdU70isdzq%2BbbBdEO2R76fgHh3D1m332qTanumZnXhw%2FjseARdWbMCot9LmQ8SBJhg1UcVk2epM35N8eb0JRATriLr09ANoxDAFWU%2F5cklSPtBMEidRqsDlj9NFieRjy4%2FJ07s67T77YXehq%2FTffrY30pGKeFQwVmhuHDi3BKtSX1DLEuXw9tmtR46z0oJtyZGvdfUevQixmbGQSQ9H%2FObHdYWYXb2Fbptipba2sgaJF0IjD1MWg0%2BwG2wXgt6dFmX1vI9rFLLbaZUWzEVoIdSerUELnaxPIyvz78z19PGyRAQNylbUKPlU8oyy8LrZuX4UHTkvGBN3XbHM2V5j4Rhf0ZpNaT1VYS%2FD0ry3Bil2mlq%2FCSd72VlTCIR%2FROqFdYLj4grNd%2FoNzAFFOZ0%2F2ytmzcsp3XkrJ5vyLvYJbvaHSMB3wV5zMi6ZSqMOej0L8GOqUB9Hi5Zf8jVhk5EPyHfknVtSi1BG5vNVTTO7FvOMkkmbOmQSEPCiD1nLIeH13xMSNUvpco8%2BisWDJoYdLo4q0rvnEDUhdlFd9x8iruTXeeZ4nWeWjq%2Fg7os%2FDjPlhcV4ATLIqB6iQa7ZAdjBjMRLeCPJkGkBnjCyAXDDZVpJqpBRMEN%2FX23bipydmsATWVGAg6V%2BUJnl1Pu9zu%2BwyrxTGiYgQb9aa9&X-Amz-Signature=88380aeb0d26ad6e5a40e9dbb3a5bca2476a7f0b8d94f30c539db33867ff8989&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
