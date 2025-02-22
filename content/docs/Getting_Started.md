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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTGNDBU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfz%2FCyNRXFpHyPMU90fpimFLduBhKvhRo8Hq9mWLs55AiEAw0HNqVLKJS0h35exHE%2F4eOIvhx8HzDkwPz6lsP77gBgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlm5HjE%2Fb%2BNyoAyDCrcA8fnMseyVAZJ2xoMKGDALYDCBfFR52dsEJ83XNqHWdpgfaIjnvSMPtFM8%2Bujolsf4fwJt7Aj8hh0xfgBZvzF%2FKzYoPAk%2F1PqlLEoF3ACmaWsy0xvLFoQAUfcB3Se0CNQQnkQLyEL60u%2BoM8c5ZGH%2Bfrj3TXI8HMnhISn7%2Fc2p0ycf7qrTJRGd5sv0jwtfQ7nxzQUJz2OCJU4b789qfLNDzrDGeZm7G%2BLw7N3haYHWQOXeTeJ5jfG84xZq0G6y%2BWDdq%2F%2B52dmDC4f9ST3tAMZypvYPrHf2YTNV4DMWQtZFujMN4pEnwBC8gyXB7npApsUEv7hWqsN0AVuXGID5W2jp%2B4B5uefF8%2BnhJ%2FNZLeuO01qCnEjm6tgGNZvlkJnBaU6PnJ1uelkow%2F%2FQ8J3k24dtAa7YKOwzujyl0uPkDAY3sXlO4CVXLHQqPME3%2BlqQHD1TJV9NxOZe3mkOHVBp%2BGrjxpkG4%2BWX1RKlBEm7Zprhq4qOpzHwy17v8%2BEoJa1S4MgcyL18EgjexHcI%2Bdc4uE9JIHyeepeYbYRdiDFzsRRUZmYS75pS%2BfRTyDVaumGVQnIN6MqHN9Faqnu9liJ%2BXJ95Bf6EM%2Bidx1PD1Nu6tfNDiFEulZczwjyrBXMm5kHMK7l5r0GOqUBlwmookqC8fEWBa0QjcLagfm8dar24%2BoDYILrJRTrRPoeTE7rWTpBJGFkJtDIzOo%2B7DYCQ%2BrGdgyA6ATh9vd5feLGCQz7kSoP%2BoQycMBnSiAzWlxTrcH7Ox%2BdszL5fNGpVhdJgC%2BT6ggh764o5Qiw3vzrdwXOGnSL%2BwXFftYO0Sc8EkXwiDkJIE%2BxMRD%2FgT2by59fOPWs4XvnR0g%2FjyYBLrg2iWwF&X-Amz-Signature=beb00400e758234a2f51744da67ef872d4d89713e57ed379713633c7842f6495&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTGNDBU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfz%2FCyNRXFpHyPMU90fpimFLduBhKvhRo8Hq9mWLs55AiEAw0HNqVLKJS0h35exHE%2F4eOIvhx8HzDkwPz6lsP77gBgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlm5HjE%2Fb%2BNyoAyDCrcA8fnMseyVAZJ2xoMKGDALYDCBfFR52dsEJ83XNqHWdpgfaIjnvSMPtFM8%2Bujolsf4fwJt7Aj8hh0xfgBZvzF%2FKzYoPAk%2F1PqlLEoF3ACmaWsy0xvLFoQAUfcB3Se0CNQQnkQLyEL60u%2BoM8c5ZGH%2Bfrj3TXI8HMnhISn7%2Fc2p0ycf7qrTJRGd5sv0jwtfQ7nxzQUJz2OCJU4b789qfLNDzrDGeZm7G%2BLw7N3haYHWQOXeTeJ5jfG84xZq0G6y%2BWDdq%2F%2B52dmDC4f9ST3tAMZypvYPrHf2YTNV4DMWQtZFujMN4pEnwBC8gyXB7npApsUEv7hWqsN0AVuXGID5W2jp%2B4B5uefF8%2BnhJ%2FNZLeuO01qCnEjm6tgGNZvlkJnBaU6PnJ1uelkow%2F%2FQ8J3k24dtAa7YKOwzujyl0uPkDAY3sXlO4CVXLHQqPME3%2BlqQHD1TJV9NxOZe3mkOHVBp%2BGrjxpkG4%2BWX1RKlBEm7Zprhq4qOpzHwy17v8%2BEoJa1S4MgcyL18EgjexHcI%2Bdc4uE9JIHyeepeYbYRdiDFzsRRUZmYS75pS%2BfRTyDVaumGVQnIN6MqHN9Faqnu9liJ%2BXJ95Bf6EM%2Bidx1PD1Nu6tfNDiFEulZczwjyrBXMm5kHMK7l5r0GOqUBlwmookqC8fEWBa0QjcLagfm8dar24%2BoDYILrJRTrRPoeTE7rWTpBJGFkJtDIzOo%2B7DYCQ%2BrGdgyA6ATh9vd5feLGCQz7kSoP%2BoQycMBnSiAzWlxTrcH7Ox%2BdszL5fNGpVhdJgC%2BT6ggh764o5Qiw3vzrdwXOGnSL%2BwXFftYO0Sc8EkXwiDkJIE%2BxMRD%2FgT2by59fOPWs4XvnR0g%2FjyYBLrg2iWwF&X-Amz-Signature=4b50173504285556b36aba18a0756e549e9c6c8b127906d1f600f222a84f4f92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4NJQJP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOVyZUR3Sk1Rgm7OdIHwZpIsd4%2FdYKR2lCLXFK6%2BJwaAiA6hBvMYLSRRDWJ1ynkZaCUTI2icpPQJevyNkx8qyAnZiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2g2JFVffO%2BJUzgsYKtwDfpfn2irqEdOiUbaLt%2B9q6fCO7BcbC%2BdynMTfKiQsINcfpGcFJ707C6b%2F3n12HW8AemiBwpUD2m3CQShA%2FNbijQ6uJUixnur0yx8apktcUAbYWLHlcfGreuJaWbONJtimyA2cx4Y5DisTng7aH6I8zNxacDE0MEBIrShnnx7IjXKlh2lGO6SUuTnUqdnBRcALDwcCgADxK6q1qVCDwopFK0Nc8xs8mP7kioRA%2BCBNNsMenc9N6HtyboVYpZGtgmFiGwQnIjvq9AiOR0pJ5235lk6fHZiXQ%2BOFzImZ5a188zBvoceCnEKJmklbzwgrBbz%2FMa32OpzT6EoELfugtmPMLesZAu4KcSQRT6TEv52QUOzunOpz7Y43I3yqlnkoOS73Km376t7vfssffJ6fH7aTzKCwm2sg6UdwxCtPy5y%2FEW%2FRGmaxS7r92gcnVrfJElGCKx7dnd%2FVFh9cJ8CuKL91OdNKW043iB8ZzqgyMN0XmnHXxBbiQbmt5WtljCSyRNNRjA0Xj9ersbdIg4bocs5frCD6yi3OLPRl0wB1iE5mUygL0wVpiS3%2BQJQ2CBnOQ0nvxRBonj7UlfqnrngfdZL9op7aUCDiFEvtuPMzY1OAFk%2BXwtr%2B7GCpx7afQxYwkJTnvQY6pgFNgHT9C0%2B5AQMUlmVCc3EUXiTWvi2trgjOxVkmBA70VrRpK87uVE%2BBGLFu9uAZJVcoB9bSdCfE5%2BhF0Oq2Y6rai00%2FYmgLe9dxDKO0agye9GOtX%2B7qWCYLcCt%2BHo%2FbVdSFgIilNmSx55bhYfvchtbDSBm8YYAGauktpxLSYinyGKJ7nFPtVfX6%2B%2Fw6EjSL0D8LZveY9jD43cHCJZ9ARsNg0ulxgvSg&X-Amz-Signature=ff6e1a9f749a7a86af23ef7a1b017ac252f9727699e93c742645bc7ca947227c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJCAB46%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqjdG1t6YMT5UaIP4YrM3MfDdrlD8GUnSVAYK5Y4PLrAiB569cij4tw65zDTbhIgFu0k8q5eE3Lhyxzqvw4RHgPtSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQmfEMatc%2FpAdDeFKtwDqft8OvvXObIJAvbIiI55WryJdZKzIkMn0r4jcrVWt1Ta1Z96VPPuErfRHhEihcHYh%2BXGJIboRTurJvhYtGpZZJ49OvSlPJ%2BwpNBvvjO%2BxkrV7hQ%2FUqFoQk6kSm88bbunTAbBlv%2FoCrSexi37EblP6GzR8p3VhkrwbI73zWCpUnydUtnxGtsEMzdqj2bH9VDPb6vHuGBqao3%2BIqZN98TuOplyCiBgyreDAEt3KgDgHPzSE9SpbLTDOxmiq3EIz0AcOkYHuNM5xylPVHEtKCvKv0gtPYU%2BvOhxyIjruTBoml0uWVvd4%2FB9Q8tNEzZDA7hyuAHOZHrQNCoSZsE%2Bo%2F8u1jkJpwjOmBNQG0bCs64h9Nd8pAYwJfuVJNkD0Bx5gWjUslCUqiOGjYlCedM2bO6cz6G7zzJX9cmmK3k%2FpoOtwQGbwCcqoOYCFpHvYB6UOzG3cNZTKvOvQMzNaRSPDsLWnuiP1KpN5C%2FTWfO0evmr4PvyQ0f%2B307DatjstTtP3gR8BYROIwvF09O38m4xy9IfkaByCx2M141G4GaQMRwCPzCN43%2BaKML%2B3txhkBQnUPwd8BttUFg6QF8kR3iDvXcToLcofhPwBt96HVLELOMiQWpcBlS9UfmzB4HDpMwwq%2BnmvQY6pgEiKZTGW2AtEML1qk1knBb%2BjDjuPh%2BWNSJCi4t2LWLdx7NszMqFF9z%2FZf82q6n5vnJDwsnTFhiHHBrMTAleNwlVwxWNWFoiLdcdDYMI%2FCSKKuoDo5bDD44ncqVHEyNy7qSpwwjbE7UbGPC6dY6OpBbJZaEqCDkHqzQzk%2B%2F8Zm%2Fls35quCp2SivADuuJhg3IM4IhGPCXto919pUSuvTgQeXmrsOJgAaW&X-Amz-Signature=3bdf2e588ea5881709e65f755869d57283117cec289260650a9877fb571e0c95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTGNDBU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfz%2FCyNRXFpHyPMU90fpimFLduBhKvhRo8Hq9mWLs55AiEAw0HNqVLKJS0h35exHE%2F4eOIvhx8HzDkwPz6lsP77gBgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlm5HjE%2Fb%2BNyoAyDCrcA8fnMseyVAZJ2xoMKGDALYDCBfFR52dsEJ83XNqHWdpgfaIjnvSMPtFM8%2Bujolsf4fwJt7Aj8hh0xfgBZvzF%2FKzYoPAk%2F1PqlLEoF3ACmaWsy0xvLFoQAUfcB3Se0CNQQnkQLyEL60u%2BoM8c5ZGH%2Bfrj3TXI8HMnhISn7%2Fc2p0ycf7qrTJRGd5sv0jwtfQ7nxzQUJz2OCJU4b789qfLNDzrDGeZm7G%2BLw7N3haYHWQOXeTeJ5jfG84xZq0G6y%2BWDdq%2F%2B52dmDC4f9ST3tAMZypvYPrHf2YTNV4DMWQtZFujMN4pEnwBC8gyXB7npApsUEv7hWqsN0AVuXGID5W2jp%2B4B5uefF8%2BnhJ%2FNZLeuO01qCnEjm6tgGNZvlkJnBaU6PnJ1uelkow%2F%2FQ8J3k24dtAa7YKOwzujyl0uPkDAY3sXlO4CVXLHQqPME3%2BlqQHD1TJV9NxOZe3mkOHVBp%2BGrjxpkG4%2BWX1RKlBEm7Zprhq4qOpzHwy17v8%2BEoJa1S4MgcyL18EgjexHcI%2Bdc4uE9JIHyeepeYbYRdiDFzsRRUZmYS75pS%2BfRTyDVaumGVQnIN6MqHN9Faqnu9liJ%2BXJ95Bf6EM%2Bidx1PD1Nu6tfNDiFEulZczwjyrBXMm5kHMK7l5r0GOqUBlwmookqC8fEWBa0QjcLagfm8dar24%2BoDYILrJRTrRPoeTE7rWTpBJGFkJtDIzOo%2B7DYCQ%2BrGdgyA6ATh9vd5feLGCQz7kSoP%2BoQycMBnSiAzWlxTrcH7Ox%2BdszL5fNGpVhdJgC%2BT6ggh764o5Qiw3vzrdwXOGnSL%2BwXFftYO0Sc8EkXwiDkJIE%2BxMRD%2FgT2by59fOPWs4XvnR0g%2FjyYBLrg2iWwF&X-Amz-Signature=fd08a132cea1a545f4e83e3e7667b93262b634aa17b1ed1126170f7ab1fc19a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
