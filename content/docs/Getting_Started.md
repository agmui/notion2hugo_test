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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJXMUL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcyXR2Kd23nWvA%2F08%2FJHWXnVyUL83SM7CxuTBNJC673AiBF3xju7%2BdEB6wvrAswCUQahUS497mw35xse%2Bj3K2IJtSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8StleuIbIHfFFCHKtwDU6HOk%2B%2B3h8FhccQ2Ivgbgy6%2BTNugNgnzdQvISxwjaAaINk6qlqkLc8aclN4I4tUhyPwn6bPQAUR3yW0dLDcmlBqFGI%2FtUYTK%2FRf6ZmNywBUTRkUSvWS0YHId6KE%2F%2FPcUD6j4o4ra4C8a3ajTGaYaSI5yYl9f56nqNUXTWaiFYt65uS0DjRkBD7SlvVAyv%2BI7wDG6IMW%2B4%2BV7ZquT4J4ELWx5smQy1m0JmWXdJzNFhReGcfNOkJAlNSjD9Zl9OjCdDdvUS%2F4WGtUGrPHcjSpBrfD4hes3CKKjB5AQbrnHkCODmKr0%2BKHfDB4BvdEcrHJ48m76h4%2FVyxW7mU0QSMGvWMpYVkPKNVOupclix47tYbvdkciKF3B1zqC8Q6QArARihX1TBZKIJK8rzXIe3Da3ndl99OuhG9yBBoJbzwkOlE1L60ol8JFNUt7StrskzV90wadRhby4g7g6lb9j%2BLqoa%2BaKK9qQwH9Cf7BHzVgXU3QMAvWd8alaMtip48RGJEo9FQ60R4Ryic%2Bv4yHfRKBh1m4RhqW2J3cngkqjyrjcKPWuqmqnAgOFCJG8JpoCXy2f5SeYrfpFDl2KElLH5Ifq%2B2XSS86XorVhmQMfkTH7bxOXlwQrSpeFyACRFisw1OqVwwY6pgF9uLMaA%2F1mQFKqqzGvVvEMzz6q5PSxmNxiKAwafLyoXxIxVp270TpocOGTgpolMQf8eWRrttnPfYi8x%2BPLzUPD7weDqPdB3roFDXq%2FixH%2Bs0vGyx3OcUF7afAmrxKcSwQXxf4sO23W85CHztvUQnPdBnxMqUPLsJUM8%2F34wPdIr9p2hTIM%2FgOPs7hr0nXHN4IiHGFVCXhdVj6M9PJZQi0PSXQv4iku&X-Amz-Signature=b4f251b49f7acf50321757348fde01ba26eb88cf6a2e1ddf045ea47a5d8e8445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJXMUL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcyXR2Kd23nWvA%2F08%2FJHWXnVyUL83SM7CxuTBNJC673AiBF3xju7%2BdEB6wvrAswCUQahUS497mw35xse%2Bj3K2IJtSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8StleuIbIHfFFCHKtwDU6HOk%2B%2B3h8FhccQ2Ivgbgy6%2BTNugNgnzdQvISxwjaAaINk6qlqkLc8aclN4I4tUhyPwn6bPQAUR3yW0dLDcmlBqFGI%2FtUYTK%2FRf6ZmNywBUTRkUSvWS0YHId6KE%2F%2FPcUD6j4o4ra4C8a3ajTGaYaSI5yYl9f56nqNUXTWaiFYt65uS0DjRkBD7SlvVAyv%2BI7wDG6IMW%2B4%2BV7ZquT4J4ELWx5smQy1m0JmWXdJzNFhReGcfNOkJAlNSjD9Zl9OjCdDdvUS%2F4WGtUGrPHcjSpBrfD4hes3CKKjB5AQbrnHkCODmKr0%2BKHfDB4BvdEcrHJ48m76h4%2FVyxW7mU0QSMGvWMpYVkPKNVOupclix47tYbvdkciKF3B1zqC8Q6QArARihX1TBZKIJK8rzXIe3Da3ndl99OuhG9yBBoJbzwkOlE1L60ol8JFNUt7StrskzV90wadRhby4g7g6lb9j%2BLqoa%2BaKK9qQwH9Cf7BHzVgXU3QMAvWd8alaMtip48RGJEo9FQ60R4Ryic%2Bv4yHfRKBh1m4RhqW2J3cngkqjyrjcKPWuqmqnAgOFCJG8JpoCXy2f5SeYrfpFDl2KElLH5Ifq%2B2XSS86XorVhmQMfkTH7bxOXlwQrSpeFyACRFisw1OqVwwY6pgF9uLMaA%2F1mQFKqqzGvVvEMzz6q5PSxmNxiKAwafLyoXxIxVp270TpocOGTgpolMQf8eWRrttnPfYi8x%2BPLzUPD7weDqPdB3roFDXq%2FixH%2Bs0vGyx3OcUF7afAmrxKcSwQXxf4sO23W85CHztvUQnPdBnxMqUPLsJUM8%2F34wPdIr9p2hTIM%2FgOPs7hr0nXHN4IiHGFVCXhdVj6M9PJZQi0PSXQv4iku&X-Amz-Signature=db9c27bfdc56c50ea211becd4f3a6c44f5dea77a1cc726de8751576e6a4c5ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJXMUL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcyXR2Kd23nWvA%2F08%2FJHWXnVyUL83SM7CxuTBNJC673AiBF3xju7%2BdEB6wvrAswCUQahUS497mw35xse%2Bj3K2IJtSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8StleuIbIHfFFCHKtwDU6HOk%2B%2B3h8FhccQ2Ivgbgy6%2BTNugNgnzdQvISxwjaAaINk6qlqkLc8aclN4I4tUhyPwn6bPQAUR3yW0dLDcmlBqFGI%2FtUYTK%2FRf6ZmNywBUTRkUSvWS0YHId6KE%2F%2FPcUD6j4o4ra4C8a3ajTGaYaSI5yYl9f56nqNUXTWaiFYt65uS0DjRkBD7SlvVAyv%2BI7wDG6IMW%2B4%2BV7ZquT4J4ELWx5smQy1m0JmWXdJzNFhReGcfNOkJAlNSjD9Zl9OjCdDdvUS%2F4WGtUGrPHcjSpBrfD4hes3CKKjB5AQbrnHkCODmKr0%2BKHfDB4BvdEcrHJ48m76h4%2FVyxW7mU0QSMGvWMpYVkPKNVOupclix47tYbvdkciKF3B1zqC8Q6QArARihX1TBZKIJK8rzXIe3Da3ndl99OuhG9yBBoJbzwkOlE1L60ol8JFNUt7StrskzV90wadRhby4g7g6lb9j%2BLqoa%2BaKK9qQwH9Cf7BHzVgXU3QMAvWd8alaMtip48RGJEo9FQ60R4Ryic%2Bv4yHfRKBh1m4RhqW2J3cngkqjyrjcKPWuqmqnAgOFCJG8JpoCXy2f5SeYrfpFDl2KElLH5Ifq%2B2XSS86XorVhmQMfkTH7bxOXlwQrSpeFyACRFisw1OqVwwY6pgF9uLMaA%2F1mQFKqqzGvVvEMzz6q5PSxmNxiKAwafLyoXxIxVp270TpocOGTgpolMQf8eWRrttnPfYi8x%2BPLzUPD7weDqPdB3roFDXq%2FixH%2Bs0vGyx3OcUF7afAmrxKcSwQXxf4sO23W85CHztvUQnPdBnxMqUPLsJUM8%2F34wPdIr9p2hTIM%2FgOPs7hr0nXHN4IiHGFVCXhdVj6M9PJZQi0PSXQv4iku&X-Amz-Signature=81295041ed07f2182a79328355e6807c1a0c4ebdd0e7349cde6b89c316fb7242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQ4Y72S%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEx6B1eoQYJrVxCBPUZhwALe%2BFg2TZxGJbf%2BsPKNpPOAIgTmNEjUYC8XQ6aj2fdHsYVrhmoNxxNvv89hQ3ehERmAsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmcR9d2AuigqvyRDSrcA2u77xwGYlTI48cKemrE%2FZ1Nz3fjpffRCBGM%2FQWp7wVDtJnDhRXhpXwa7%2FqodUD1nTAXD%2FD2Oqz1%2BwTcJ6g4%2F9aeL0Fb2uJ39auNIYm762rLGQjytsEu4SeS4FaZ3dLeJ4pbHMLVmtnSjYLmTSaj5NwdIcO7qS1YXUGvxPI8NlBzpaIhTppVNe%2FJDB%2FPD8BlljawO9QP0zMJ3p0tLAynfuyCH%2BYwSyI6NKPp1%2F%2B64Ppc20IdTnXsi2FGDPKC6PxIzTPxTbz2IbG1zf6aGtMbym30QCjXUHUDfJ3ooSGs0jbG3mwqX6X2vBjdbjdlefgfYzkRbD0kHjnFFE0DqmVcYWsUQTiHbaBQngnLb3jFbT2sCaVdCZLtY1cP2Br%2FyJOEjnUbXr2NnCwCUeqLBJQ7Pk119iCiwFjN6YdV%2Bnu%2BFFLEFaAFmMHBhvZ%2BcWFfG77Ew4Vsye7Gr%2F0fjhAhA4HoTesChqacyt3DSs%2F2mM0dsV%2BMjphMrZU%2FrQ1oYdHYt8ebTbidN7CelF1lO9yyIRbmOaFXawAe5OoK2fI57Q59LDfedvsJhUdBSUYf1VkzUNJfQv3HOyCx88YvCcexxNUjmKj%2B%2F2GPD%2B7ut3eVl7BggEmiUbtRVkvzSH7dyb%2FbMPzplcMGOqUB4WiW%2FVljqN5JQU5mD6itrUJkVG9O%2FUHTLiwb4JloC4XHJKAYb8l6Zuf6FZ7Nynhm8uq82ufS0Zv5P4tO4GPMsOCxVaYoCl45HN2VvklKdAIVhgpbmtV9DTNjZ0YNeIb9IH1cCsB7AUpcJonYS5YZLf7U3nuKORlFzKWQEywUmlMbzoeGKHBmirxHAyKXJTR%2BonQQOsPg9z%2BmzdiV%2FwLyOGPm6qIz&X-Amz-Signature=698693aa775e7361ea6e534deaf0fe793e6ce79032c167a031c61da50792e23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOS7N7EI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbjS19Wdx2Mkbz7mC86p9KDGZ1pMzVwFW8JtHDVVTpNwIgRJJRV0dG2XgrV0X%2FgN1qOzzDvNBeEWP526BCLWwW%2BtAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN52FYcq6IQVLxflCrcA0hG7ekKgHlP9U1FspQdPR128X6r%2B9RLDLdovqMw9IxTIrNIKgpsl9UWnmkD2g%2FirF%2BXwpphs7fdVyvjksh17euRIjgIvS3j7tdGA%2BV2839ZLoLFJaq6SAK%2Bfb9XskCNX6Z%2Fh3cmO1Jyq%2BcYow3Q7uBuT88OmExwMYSse1%2BVr5GHjqTlbzCo6sqREbvfpOLSxSmID3cYJOuAl6%2FUs3URxdO13AI9WESJ7szWMlJdP6gF4Zb4j2CqgR4ZHiph7fo3i7cM4CGlwSvTjh9ML00KOR37JcNYmm5lrAnchei2ZR%2Bxz38xmksqI8lIBoSD2BhnwyEHZCUWBXPxQ2EqiT66GJwuQTHedUBIZouQGKwV5GEYQYYvW40j0Fx0vuXxZg%2F2aS9freaZNajcWZIuXpUI87uef3NDk3NHRkUmPBKSoetiGbcGO0KSvaUN7XQqtajik6qdnzrPYlfkH6FtTwuCvvVd2od7QSWpCcMJfprGwNOBKzbIku9MuQKp%2BgpYGhB6fylIc26CgRmMFdymozWQrWElzG21NYEDnX8oukSwwxKXdFSJrGxtUL%2BW9QtOwnM4MeoPNdKpvwo%2BidhjMC5%2BCkfgQPbaRAdh3IvCBJNAyTgamQCAaXXua2wiW7FpMI3qlcMGOqUBx1qPDUEM87B7ffYaItsHwKwhGgQAn6hyeP0tDK7ep64rRBQ7jed7V01P9BWU%2Fsc0qBIYgcBCS%2B0%2FOEZWICi%2Bp%2Bua9RqF0zzlQFSid1Vgl7fDnZ5Tgm5ysrCpnlg7jiCVMYlAz6qPsffjZf8PcV8hd7PYb7PoKzjAXYtJcQacTuZHGi5rHe9qLJeKUvdj2n8qJCxIQraMcIF4yhWQfAv1Noj0svq0&X-Amz-Signature=8cb7b203e2545f80cc29b8f3a9962a45c82dca12c1c3a9165c73c5f5b0ea2579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJXMUL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcyXR2Kd23nWvA%2F08%2FJHWXnVyUL83SM7CxuTBNJC673AiBF3xju7%2BdEB6wvrAswCUQahUS497mw35xse%2Bj3K2IJtSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8StleuIbIHfFFCHKtwDU6HOk%2B%2B3h8FhccQ2Ivgbgy6%2BTNugNgnzdQvISxwjaAaINk6qlqkLc8aclN4I4tUhyPwn6bPQAUR3yW0dLDcmlBqFGI%2FtUYTK%2FRf6ZmNywBUTRkUSvWS0YHId6KE%2F%2FPcUD6j4o4ra4C8a3ajTGaYaSI5yYl9f56nqNUXTWaiFYt65uS0DjRkBD7SlvVAyv%2BI7wDG6IMW%2B4%2BV7ZquT4J4ELWx5smQy1m0JmWXdJzNFhReGcfNOkJAlNSjD9Zl9OjCdDdvUS%2F4WGtUGrPHcjSpBrfD4hes3CKKjB5AQbrnHkCODmKr0%2BKHfDB4BvdEcrHJ48m76h4%2FVyxW7mU0QSMGvWMpYVkPKNVOupclix47tYbvdkciKF3B1zqC8Q6QArARihX1TBZKIJK8rzXIe3Da3ndl99OuhG9yBBoJbzwkOlE1L60ol8JFNUt7StrskzV90wadRhby4g7g6lb9j%2BLqoa%2BaKK9qQwH9Cf7BHzVgXU3QMAvWd8alaMtip48RGJEo9FQ60R4Ryic%2Bv4yHfRKBh1m4RhqW2J3cngkqjyrjcKPWuqmqnAgOFCJG8JpoCXy2f5SeYrfpFDl2KElLH5Ifq%2B2XSS86XorVhmQMfkTH7bxOXlwQrSpeFyACRFisw1OqVwwY6pgF9uLMaA%2F1mQFKqqzGvVvEMzz6q5PSxmNxiKAwafLyoXxIxVp270TpocOGTgpolMQf8eWRrttnPfYi8x%2BPLzUPD7weDqPdB3roFDXq%2FixH%2Bs0vGyx3OcUF7afAmrxKcSwQXxf4sO23W85CHztvUQnPdBnxMqUPLsJUM8%2F34wPdIr9p2hTIM%2FgOPs7hr0nXHN4IiHGFVCXhdVj6M9PJZQi0PSXQv4iku&X-Amz-Signature=e4bfe605091ff76aa3479e1e2d66d09ed593e8b11e3f6a8cf4af83fc983bd390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
