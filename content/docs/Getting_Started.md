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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFA4UQ4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwUCMckQoiPX3W9cJg4zVktzNp5i9GYqpmEForiUoRQAIhAKOxXKGfTwKshiDLoH2CxRcr76rThFq0MNmhYhS6on5XKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf6wvrwCbSTw3Dcd8q3APorZWXhe20LtA8Ru%2FRPbe4Nd8otFZrOq7N%2FVjngvZtvEa0obXvthf%2FzsitrIzJy48hYlLSBb8OLkwzGBIgT1ms6AlvItqvPBDwm2Yel%2FkgIXIqveuOYf9vpuVGlObTKvrC8xPdJWgkMVqzsYsnqvP9oZaNMKe6Id92rbXp5yq%2FNYFlRF0AmAdPNifqHOvBNJBBDAoP48BD8%2BSUM52YjKdjYTW6DCw3IRpZZR%2FiKDlkEqzI5PCGhjBG4PYUXKF64ASE0Ot19Y1prYihbkNR6fxFcWCmnGRo4YESvmfvZGMXSy7jFw9xo4Qd4ppFqWmGL2Gwigq0gpit4pdgNxzL8K8SFpB7QeNzAvuYA%2F3x8J32ZJ5yztO5Vdh%2B5y4SQefEY4AUttOEZFnFoWP0DOAk29%2B%2B0XBifFgho%2F6UguPG%2BmpAar5%2BHsbYOSu53iDnlbm6kAkZpF2QetDgUKsY1KwreedHlMJmcpj5X18NOiebZqecR15pqG7y37pr%2FQSfqkcOZr0YI4fEoSMQs3mgqJsLqIlA%2BwAkI5vFT8ZowMP%2FJc%2FHQlaV2q4kCaUFMk6PK250Ftni5q3XTwwuklPRlb3xCiS3QRWkTb9mEciaF1eAZcn3VY3IIP4bYeL%2FwEHlxjD9%2B7i%2FBjqkAZ2UKLaoQklj5xrGJah0egbL8Lh4R0Ft%2Fyow%2Bm4kL8iX3jOb41OWzhSzRKsEd7syIog3WQ0pXCaMUiWYQK8OaGv7%2BBvn5qDdcxHdwmQl88fgNBifxP%2Fv7rN6%2FqG4QepMYMs1tx%2Fjqg%2BveIse5XYgBbpzi7DL7NlkYyZmCSZByS1MzzsiRlA17Mcmm802OoAAYaMxYx7nPW7mheiPCF2lpiTmxHbL&X-Amz-Signature=2cb01b331b08098035c274c8f4797ede1eb87bd9164b0b1785e0e90bddf94fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFA4UQ4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwUCMckQoiPX3W9cJg4zVktzNp5i9GYqpmEForiUoRQAIhAKOxXKGfTwKshiDLoH2CxRcr76rThFq0MNmhYhS6on5XKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf6wvrwCbSTw3Dcd8q3APorZWXhe20LtA8Ru%2FRPbe4Nd8otFZrOq7N%2FVjngvZtvEa0obXvthf%2FzsitrIzJy48hYlLSBb8OLkwzGBIgT1ms6AlvItqvPBDwm2Yel%2FkgIXIqveuOYf9vpuVGlObTKvrC8xPdJWgkMVqzsYsnqvP9oZaNMKe6Id92rbXp5yq%2FNYFlRF0AmAdPNifqHOvBNJBBDAoP48BD8%2BSUM52YjKdjYTW6DCw3IRpZZR%2FiKDlkEqzI5PCGhjBG4PYUXKF64ASE0Ot19Y1prYihbkNR6fxFcWCmnGRo4YESvmfvZGMXSy7jFw9xo4Qd4ppFqWmGL2Gwigq0gpit4pdgNxzL8K8SFpB7QeNzAvuYA%2F3x8J32ZJ5yztO5Vdh%2B5y4SQefEY4AUttOEZFnFoWP0DOAk29%2B%2B0XBifFgho%2F6UguPG%2BmpAar5%2BHsbYOSu53iDnlbm6kAkZpF2QetDgUKsY1KwreedHlMJmcpj5X18NOiebZqecR15pqG7y37pr%2FQSfqkcOZr0YI4fEoSMQs3mgqJsLqIlA%2BwAkI5vFT8ZowMP%2FJc%2FHQlaV2q4kCaUFMk6PK250Ftni5q3XTwwuklPRlb3xCiS3QRWkTb9mEciaF1eAZcn3VY3IIP4bYeL%2FwEHlxjD9%2B7i%2FBjqkAZ2UKLaoQklj5xrGJah0egbL8Lh4R0Ft%2Fyow%2Bm4kL8iX3jOb41OWzhSzRKsEd7syIog3WQ0pXCaMUiWYQK8OaGv7%2BBvn5qDdcxHdwmQl88fgNBifxP%2Fv7rN6%2FqG4QepMYMs1tx%2Fjqg%2BveIse5XYgBbpzi7DL7NlkYyZmCSZByS1MzzsiRlA17Mcmm802OoAAYaMxYx7nPW7mheiPCF2lpiTmxHbL&X-Amz-Signature=aca8f84005e52928d2a1b8c6f0cf51fe2b2d5b3ce9407aa6a1b5063e360a7db6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFZRGDX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZJ%2BCTtdiZC4EBiTSt8MIe74jZ9w%2FdrVledGQsYKWLMAiAZq7s4rYTg%2FoiSE5vgmIFpuRtw4GSgGxpGFefCdtOg%2BCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FrXXX6wyeuhXsrrKtwD3BYdBSsWPfuiLiTS2FASEo7D%2F9bLtgaLQqisPXgNaU5Eq%2BOk98prN3nezrPy4GdrpOMoODg01tcbFknoGuBCCyiZuU%2FlkXkw8YUDsagUzg63Gm%2FV5Rqf%2F4zQUpz06Gs1eBJ%2Fku5IVjK6HG1omXPbsraLHeJB4dOR%2BumU4ntwr7cV9B0rqFE8Yuyph9IZSiK7jqQE0sRvPz4G6PrYmJpaIChZsqa2C2jDw16yFPDzmDOcGj%2FQabK3A%2FA4n44fUaQ8oD%2B8nshnmChcJybGVPSO1nFeUgccJFMXdlc7EIh%2BGTb95j0%2BlR1V8Twgbb4%2FZIdguWYOtqLBFIiqPE3DAUnT7NJLZxAjJbDdhuSOcLrkUGDaQn8z1popQn%2FP5OMhpFuFQAtvQAF5P6cjMCIj2uIvpfuDl3nB83%2F3ZxODoDNlj0SvLZG7JNBn9vqbpUl2H0TOarEYQdCuaxVhCdEgmE%2F1tinlCT9QqNR8rw1NZQIu88RDHCPrOO4EvYNzQOtwnIVMNhjQVV%2F3FjDNPMdclIkH2ppB3Ek8zHK1w04nL%2Buf%2FoshMVDEiNH7mkjx6dxzw%2BIrZPsPMdtNggVUgqcu7jqTWcPfTvKIYp7pkXnE7rAAr8ul1QnPIq0HYkrhqfMw2vy4vwY6pgHDdXjtY4cB8FU5qkM9SQTuW9UKVjCMYaQjI3sSSLyit01YQVoBTB7GJggs%2Bvnzel4jPpnZsrMWRk%2B0oy5%2Fl688x0HOasdHK9Zg1ms3vJ%2FDEZFIApM%2BYOwitn46NIu3zDekA5moRs4ioY46%2B9HoTyhfYu20oC%2BBvX%2BbBqZxiavSZOwUFSpmn375Pg8LRklTdsJ%2BBfjh0S1vNzopipP1XAzubHpwFsrG&X-Amz-Signature=5e9bab6def5e6034ffaffa2c85811306e4eed77c8df165bf26d9c4e43265ddd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVISPHO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAynYiAPZYbJQnVyJWYg6ef81zXig%2Bcds%2FFhQFMxjcjjAiEAsUb7EhQ%2Fpz3u77VBbJlkVqsqSTVwidNdYdeKk7mBudQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdTDD%2FWR6qQk5XU4SrcA%2F%2FyLAMMY1kWdLrXyUKIgD6OOF%2FRTIXhLJKe4gZX%2F0KmT1aEMAQlML8oecjOCm%2B3ff4xwPMU%2BRS1IuNPWnHnKp01rBTmaHDR9oCgnAy%2Bh3S0ke36IguNE%2BrKSBnsd4zT36CMC1oFxQ5HlNVD4pBO6TojO1eDheCDLQLoz1n9C2gB1Oottm5pLxtl2uklgxyOXHQ%2FhMR6AoQ%2FOHjaU1IofPBgN0RfAqUpSnACP2p8hS5cfq5nRvvm31s57SYA7Z1zNwmrbREtmTvleSgH%2Fhvtbh099HqwsBFnNkjWG%2BoUInY8f%2FK0n4JynYr6L755Vr7D2Gfe5g6dgkDQsTlYgasuuT%2BhjL7%2FGvRvZhsZpl%2BR0afMEeYqZt8jCEh8%2FUlv%2ByPt6Sl3%2Fu3TCvdb2auegI1su9nvNsjdnwIYsXWlJgn%2BVLnv34C53iqw%2BObzfk7eQ8%2FdMfv9yO59wCVrxcA6CPQyE1aYAJFlcL%2BCaC5NWepqOtksIKqpRKdfZsLmGhtsce6qKMKwiastGxvp1q6nypgdSePL6aZ4ddkTUprqxG59Q5bIEu5UyaTY%2BkaaCuGhOVrXu1As6B98y0GeAJR%2BfJ2W5NaFG8APe9daT4TLLGq8E1nedkB%2FEEiL63e6V%2BQbMNL7uL8GOqUBmeebOeB0lNkB6EYD2xwy9RfMoarexJSm9xvqzu2F%2BruR4PzExabKg0sdrhkCJbhp2EdgoJhYBqCmUJogFqA146zkczalLeRYi4xIh20nyEtfj1ckbzrBcdCc%2F7wqxcfTsd75tbdYmeXq0AYD3Y7QvTqatjOAZvz45tZdtLv1Rsf0HFGazjqvCTLvTocvh4YSm834bFf26wvxoVCJG4oImG%2BIhReV&X-Amz-Signature=2ab14f3b413b8c2ce5e6c19ff1651696acb4241c7d03f5db222308fcc1d575c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFA4UQ4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwUCMckQoiPX3W9cJg4zVktzNp5i9GYqpmEForiUoRQAIhAKOxXKGfTwKshiDLoH2CxRcr76rThFq0MNmhYhS6on5XKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf6wvrwCbSTw3Dcd8q3APorZWXhe20LtA8Ru%2FRPbe4Nd8otFZrOq7N%2FVjngvZtvEa0obXvthf%2FzsitrIzJy48hYlLSBb8OLkwzGBIgT1ms6AlvItqvPBDwm2Yel%2FkgIXIqveuOYf9vpuVGlObTKvrC8xPdJWgkMVqzsYsnqvP9oZaNMKe6Id92rbXp5yq%2FNYFlRF0AmAdPNifqHOvBNJBBDAoP48BD8%2BSUM52YjKdjYTW6DCw3IRpZZR%2FiKDlkEqzI5PCGhjBG4PYUXKF64ASE0Ot19Y1prYihbkNR6fxFcWCmnGRo4YESvmfvZGMXSy7jFw9xo4Qd4ppFqWmGL2Gwigq0gpit4pdgNxzL8K8SFpB7QeNzAvuYA%2F3x8J32ZJ5yztO5Vdh%2B5y4SQefEY4AUttOEZFnFoWP0DOAk29%2B%2B0XBifFgho%2F6UguPG%2BmpAar5%2BHsbYOSu53iDnlbm6kAkZpF2QetDgUKsY1KwreedHlMJmcpj5X18NOiebZqecR15pqG7y37pr%2FQSfqkcOZr0YI4fEoSMQs3mgqJsLqIlA%2BwAkI5vFT8ZowMP%2FJc%2FHQlaV2q4kCaUFMk6PK250Ftni5q3XTwwuklPRlb3xCiS3QRWkTb9mEciaF1eAZcn3VY3IIP4bYeL%2FwEHlxjD9%2B7i%2FBjqkAZ2UKLaoQklj5xrGJah0egbL8Lh4R0Ft%2Fyow%2Bm4kL8iX3jOb41OWzhSzRKsEd7syIog3WQ0pXCaMUiWYQK8OaGv7%2BBvn5qDdcxHdwmQl88fgNBifxP%2Fv7rN6%2FqG4QepMYMs1tx%2Fjqg%2BveIse5XYgBbpzi7DL7NlkYyZmCSZByS1MzzsiRlA17Mcmm802OoAAYaMxYx7nPW7mheiPCF2lpiTmxHbL&X-Amz-Signature=deaffaf2e4395c8a1341d7be256268be2568bdebc172fd486c32f640567d5f37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
