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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFR3Q2Q%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCx4CpNXjxgC0XAJAt2x716M4YE6EVhBrAMM1CBkV0F%2FgIgQ5cUr6Cfuzcn8nQqCwQzLPv7dPO74Jv9QuUUQB3S0Y4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnrCaO95N%2B7w6WKiircA4vvVq1RNoxXrcHzRPrmnZoydXZj3%2BAj2gjF1gpYqNkXp4PGLy0XiDf98dvL412vkwHufvEGvgvfdE15xDQ8BCmCBvBWzLNWihn015qBosStx7RTKn6y3xPvwlPRasQBNigWaRdElMxShtpve4neRHGMhcpWD8ccOrARGuHTLyfE5wmlMnd%2Ff825oq4xP5I8BlirvBoaRxPw%2F9WpX1%2BV%2BcnHIfRuSzPiM0Pe38clBDSulbTAcvw6w8eoyLxuD0JpoRQRZOhDkGqprJRadzmef%2F%2FQmIWFW9vNIHAIMPruH3aKt1D8rGUBCvvcoqeiso%2BVTvdOHSoEceS3K3NdO681we4gameSixC7434oihyBjQTc6vZDvrp7SD1%2B5K2pJS2bYCr0R0%2Fp3prEnbAoAilKxvvjqhNImufnZxuAPj4cv2et7Hiw91fk%2FbE1ZCVay4hy0rGVdtJdoaxyzQBuHhMO5RLJ0kdIx0iyd69YTqaTmCtTcbcWzAoBTwqtACyIVaxaqBZjBuqnXoHJUJaTfPKGzskAYBsMvmIDAmilUenxdgSd2cvHZnzQ%2FQaPGGqVBdTCpOdMHMXCnQntbz4K9%2BeUV6TfVxIA22Rbx2K9fNeQMWSvHHL6A6PqgL%2BhYA8sMKHu38IGOqUBiX7S1ZNB%2FcYNyohBR1dcbTQDlC6bSwvMuaR6SdkLKA%2Fj2HBIJ9kHVwEmQ8XZKcW4jRMO%2BC5iGHCYb4SWpAylAEt8LvC5B%2FFxwOyuthC6o6gWfWrW8pXPrLTebvRdKlVEJRjHOv781kf%2FUHeIb0qI8feGV4Vhy93Em3rmrE%2BlL%2F9Pslb1%2FsXR3ipncdUTF9UqE01AUzOpy2DKof3svtqoOP%2Bq4PfX&X-Amz-Signature=9897a0c18b4879965875082f232b057366bfb1ef0f6d619d3bcc39b10691fa77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFR3Q2Q%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCx4CpNXjxgC0XAJAt2x716M4YE6EVhBrAMM1CBkV0F%2FgIgQ5cUr6Cfuzcn8nQqCwQzLPv7dPO74Jv9QuUUQB3S0Y4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnrCaO95N%2B7w6WKiircA4vvVq1RNoxXrcHzRPrmnZoydXZj3%2BAj2gjF1gpYqNkXp4PGLy0XiDf98dvL412vkwHufvEGvgvfdE15xDQ8BCmCBvBWzLNWihn015qBosStx7RTKn6y3xPvwlPRasQBNigWaRdElMxShtpve4neRHGMhcpWD8ccOrARGuHTLyfE5wmlMnd%2Ff825oq4xP5I8BlirvBoaRxPw%2F9WpX1%2BV%2BcnHIfRuSzPiM0Pe38clBDSulbTAcvw6w8eoyLxuD0JpoRQRZOhDkGqprJRadzmef%2F%2FQmIWFW9vNIHAIMPruH3aKt1D8rGUBCvvcoqeiso%2BVTvdOHSoEceS3K3NdO681we4gameSixC7434oihyBjQTc6vZDvrp7SD1%2B5K2pJS2bYCr0R0%2Fp3prEnbAoAilKxvvjqhNImufnZxuAPj4cv2et7Hiw91fk%2FbE1ZCVay4hy0rGVdtJdoaxyzQBuHhMO5RLJ0kdIx0iyd69YTqaTmCtTcbcWzAoBTwqtACyIVaxaqBZjBuqnXoHJUJaTfPKGzskAYBsMvmIDAmilUenxdgSd2cvHZnzQ%2FQaPGGqVBdTCpOdMHMXCnQntbz4K9%2BeUV6TfVxIA22Rbx2K9fNeQMWSvHHL6A6PqgL%2BhYA8sMKHu38IGOqUBiX7S1ZNB%2FcYNyohBR1dcbTQDlC6bSwvMuaR6SdkLKA%2Fj2HBIJ9kHVwEmQ8XZKcW4jRMO%2BC5iGHCYb4SWpAylAEt8LvC5B%2FFxwOyuthC6o6gWfWrW8pXPrLTebvRdKlVEJRjHOv781kf%2FUHeIb0qI8feGV4Vhy93Em3rmrE%2BlL%2F9Pslb1%2FsXR3ipncdUTF9UqE01AUzOpy2DKof3svtqoOP%2Bq4PfX&X-Amz-Signature=6de2f9a4891c5739abd464d6d65ec2300693688c84d5ef61acc7c39ed35b7a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFR3Q2Q%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCx4CpNXjxgC0XAJAt2x716M4YE6EVhBrAMM1CBkV0F%2FgIgQ5cUr6Cfuzcn8nQqCwQzLPv7dPO74Jv9QuUUQB3S0Y4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnrCaO95N%2B7w6WKiircA4vvVq1RNoxXrcHzRPrmnZoydXZj3%2BAj2gjF1gpYqNkXp4PGLy0XiDf98dvL412vkwHufvEGvgvfdE15xDQ8BCmCBvBWzLNWihn015qBosStx7RTKn6y3xPvwlPRasQBNigWaRdElMxShtpve4neRHGMhcpWD8ccOrARGuHTLyfE5wmlMnd%2Ff825oq4xP5I8BlirvBoaRxPw%2F9WpX1%2BV%2BcnHIfRuSzPiM0Pe38clBDSulbTAcvw6w8eoyLxuD0JpoRQRZOhDkGqprJRadzmef%2F%2FQmIWFW9vNIHAIMPruH3aKt1D8rGUBCvvcoqeiso%2BVTvdOHSoEceS3K3NdO681we4gameSixC7434oihyBjQTc6vZDvrp7SD1%2B5K2pJS2bYCr0R0%2Fp3prEnbAoAilKxvvjqhNImufnZxuAPj4cv2et7Hiw91fk%2FbE1ZCVay4hy0rGVdtJdoaxyzQBuHhMO5RLJ0kdIx0iyd69YTqaTmCtTcbcWzAoBTwqtACyIVaxaqBZjBuqnXoHJUJaTfPKGzskAYBsMvmIDAmilUenxdgSd2cvHZnzQ%2FQaPGGqVBdTCpOdMHMXCnQntbz4K9%2BeUV6TfVxIA22Rbx2K9fNeQMWSvHHL6A6PqgL%2BhYA8sMKHu38IGOqUBiX7S1ZNB%2FcYNyohBR1dcbTQDlC6bSwvMuaR6SdkLKA%2Fj2HBIJ9kHVwEmQ8XZKcW4jRMO%2BC5iGHCYb4SWpAylAEt8LvC5B%2FFxwOyuthC6o6gWfWrW8pXPrLTebvRdKlVEJRjHOv781kf%2FUHeIb0qI8feGV4Vhy93Em3rmrE%2BlL%2F9Pslb1%2FsXR3ipncdUTF9UqE01AUzOpy2DKof3svtqoOP%2Bq4PfX&X-Amz-Signature=061c53ea7b8384b0412ce8c8e0d6c1c884b8fec8560c59c09dc5124f4f53e02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY34TN2B%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH4JvuT2E3JRPIs%2FsEkaePCTtor%2BhejBTNk%2BvOtUac9lAiEA1Mdl6RyQiEHW0wt%2Fglo%2Flaq%2F2JlHwESchdis1uBdovkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoIMiqu0V77PSJHByrcAw1Fj6MpsjGVWfS23Ononcn5oSVUlVzmq9QC0m2BnMzaSBHWBGTJWBezZEbwVF8mvlvIehN4xKnBVfrf4MiZKL25%2BJ3TkCPZYCbeSYcVy5FFHzU1N%2Bp7BhY6oxAyBcY75GCBv5SZI%2F5K5yqSKdfc8KG1ciaZtRtgajPVXoDLD6jvbJ8ua23E6BcyOp88LzhH3ILzdEwDniiJjND0YGqKiMkHnlICmNfZmB2ddLFnOS8iLr5l1zFA6Rj8Uz7Wz06nP6%2Fa7%2BxDC09tklb34EC9F72TiUHJDYpq2GyTwEYErt20XwjUsvnh4inNEVEFnMFcWeyLHgjosYcwUJkYMVxPjQSfqvt1mQBYFLoJ0iOvuHNXiwdYIyUuvuVubY60%2FGa6SwWExi5y5hwffvov8GSyXlwVoYd%2FjnYrcqz%2FZXXo%2BahzU1D7FHMJCu046iQpjQ%2Bi1m5nsV01c%2BOmpw88VKZSF4QAmDlEuQRCyja7No41mD%2B3%2BaAMFubtYMHSI3pNfCfH1rvb4sxfl2ztlKGJ408NCCJWv%2FWQ%2FquZt4cjSfq1sI1Fq4EjIG6M5n42HrrhlE2LcUJFd2N319GdzmzBMy8mEZMEXxHg%2BozbuPLr5RR9A%2BzyB0ie0ADpcVPnD4V5MIy338IGOqUBbos9t%2B7sJHhMzW9DkOSFwWRyVUhYCyD3MnkzP9jhbXVOs%2BpyIp66xr4%2B8DhwIbUhRSVqgF%2FfUHXxuZZVcxPvg3I92rAauz1xCG2OU9SWKea%2BmUnq3GvG99Pm1%2BNcgWNMN2zDPVePiZtGybRp9pNpCIm0xsDS6Ior0F0VbjU6E5WI1ZcBqx5ARkUdqfWw2d63eypoE8t%2FtkyR5eFkrul4g08UiF1j&X-Amz-Signature=2767e60c4a2f062d46ffa008e267a436c4ba654c717c86cbe4b09a192ef2c10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3NZPJF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAELPsvIF2YAs3Bm0jI9K9mD9966yFo9dYE4jaSuoMXuAiEA3kaDipJY%2B1ohKtijyIFXk9Ua09CWDzchAeGT0ubkDzcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKDxJXCjcGzGbXPfSrcA16wO7zGrMEuOeag4JAUrp76kx1%2F0vu17VSzWuhxK%2BQfnsSuR3MndZHbs755aufawLSwCYVJQ28vlgGkvMvLmfRK8ljRyNt%2BPsH%2B2%2F09z65QIFMFCHvjO3jXOmNAzDEhd6jjygJ3fPYfzOm%2BShZokFZsM3zBgcWd9xvbXhnIAjTK9gu3ZQQRKWlASBbvd6KS9Skpp1qFzhvzrQX73PorzTqa6DiXpinV%2BKvQG5JNizxFMfzGi4Ss1HMyE%2FAt0JiAi1OIkoZe5nHD%2B4oHL35kpeDq9sVQ7FEZ964cRUPWmaVfAQqRpj6bERiRdsfM41nK6oCy6tJbPwZchKnupIhCc4Ga9qtF5YwUjPkpu5on%2B3dYwJyW7dyDPJ3FSOujizLHXAzsKEjUhF9TwwcjNvBbtaspHCsNRz3%2BgSp9R6ej%2FPh2DUFsyB5q629%2F4Vwr2dMta9T6y3dzlPYqtSQpKAkd9FXRCjjGYN7utNuqblENm%2FIHzEbVh0HNCs8zr0sJCqtK0t9pcHsT9UJyKbwiaKXOUGzvCFnRE34wQY37PzjAbh8VGKxiW0n5Zy61vulPqadvtjuPFLEaE2CV2RtQTGu0IgLpBhq3WFL%2FEt1XdT4qymm2PyH88OSU3mpE9ErMMNrh38IGOqUBbTsP4rVPXiAqP5%2F1l%2F7%2BlHX6t9peUKToJoILsYqGXf9AFaVrDmLlPAf4NE4T0%2FDs7CBWbsVIJcWzpKkmbAIGkWhmHojUE%2BO5V0GCeTS3K8%2Fn8zgrFpW80ZBm7Otv%2BUy%2FhheOh1XKViKlfwziZRhRTIdR6g7UXA594ihElHm8sI4UdFoI%2BgU2aIqSrJvsqknqiM6ZCSFX9BQ4pG4dvaJ1eVDmIGpT&X-Amz-Signature=f2728984cc58531f12274507e9950bc01f912d7ca50f05d38c8c5bd7f2e753e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFR3Q2Q%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCx4CpNXjxgC0XAJAt2x716M4YE6EVhBrAMM1CBkV0F%2FgIgQ5cUr6Cfuzcn8nQqCwQzLPv7dPO74Jv9QuUUQB3S0Y4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnrCaO95N%2B7w6WKiircA4vvVq1RNoxXrcHzRPrmnZoydXZj3%2BAj2gjF1gpYqNkXp4PGLy0XiDf98dvL412vkwHufvEGvgvfdE15xDQ8BCmCBvBWzLNWihn015qBosStx7RTKn6y3xPvwlPRasQBNigWaRdElMxShtpve4neRHGMhcpWD8ccOrARGuHTLyfE5wmlMnd%2Ff825oq4xP5I8BlirvBoaRxPw%2F9WpX1%2BV%2BcnHIfRuSzPiM0Pe38clBDSulbTAcvw6w8eoyLxuD0JpoRQRZOhDkGqprJRadzmef%2F%2FQmIWFW9vNIHAIMPruH3aKt1D8rGUBCvvcoqeiso%2BVTvdOHSoEceS3K3NdO681we4gameSixC7434oihyBjQTc6vZDvrp7SD1%2B5K2pJS2bYCr0R0%2Fp3prEnbAoAilKxvvjqhNImufnZxuAPj4cv2et7Hiw91fk%2FbE1ZCVay4hy0rGVdtJdoaxyzQBuHhMO5RLJ0kdIx0iyd69YTqaTmCtTcbcWzAoBTwqtACyIVaxaqBZjBuqnXoHJUJaTfPKGzskAYBsMvmIDAmilUenxdgSd2cvHZnzQ%2FQaPGGqVBdTCpOdMHMXCnQntbz4K9%2BeUV6TfVxIA22Rbx2K9fNeQMWSvHHL6A6PqgL%2BhYA8sMKHu38IGOqUBiX7S1ZNB%2FcYNyohBR1dcbTQDlC6bSwvMuaR6SdkLKA%2Fj2HBIJ9kHVwEmQ8XZKcW4jRMO%2BC5iGHCYb4SWpAylAEt8LvC5B%2FFxwOyuthC6o6gWfWrW8pXPrLTebvRdKlVEJRjHOv781kf%2FUHeIb0qI8feGV4Vhy93Em3rmrE%2BlL%2F9Pslb1%2FsXR3ipncdUTF9UqE01AUzOpy2DKof3svtqoOP%2Bq4PfX&X-Amz-Signature=7e292be7ddb6bde5fd16c6a43ed29d953056abb11f9e795134bce213ec48f56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
