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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI5RBM6G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAR60Que5ibOO%2FcvsQKjMKlBYy5qn%2FISdKltYQjnvsQIhALykPFWXJ%2Fe3ExTOfrKyW%2FPTO1yGvgIzfg2h%2F2ti1kvvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyu5BhG%2Fv91Y%2BkAIq3AP7xjLfwVLwH1TGMnuAAdb77NWHuUrhyz%2FLh5dbjSxsv14DH%2FE81b52jFyCMCzvquu4ohsYno1rzio1yZIJO0WGQqPeFrlHH35%2BaKwReM%2FdtmO7NwY%2BI26CkQ5Ri5kY5SkooLtNh751fCJwPjMHql7qws5BTkFjLLrTI3ofFPYreYd2abD%2FX30orGaQnVoBV9G0%2B7X0PB6fstWfma4JW4B8cBpZJUHi9w%2F7ZRU8tAGRYNYpYnRxlwhA5yB5IRdlhRITZ4PykODuJPu7yRS7E9R3RcYcgVaupKX7RDD%2BGrwJZUbJkzFPeR83EwS96tSUlPwfS5zXX%2FAcEnVr5U%2FSWlSpYrU9elQPZ%2BFiUp5PgaCsNvieVwKRmHTjmTlwLKP5m7RgAcq3zwdFB5VHlSQgiwaA3fnG6npJtEFIM7SCQqBhVQFacrbdSguIK1lfIWmKoK9SmR5Nr8jSFyPP5gc%2FVxBTnxATSS06tnqusNdLn7Xf8mOYBun74L2Ndh3K3nQ9aU5knhulJStzhhe8yTtEWnf9z%2BcWOAGmYy5Yt3Dd3xqSHXFNV4vmWHaXsT36fTkkCNgnbjpQnX0N%2F80cUVZbYSp3HK23zKRNlq2W3QGWVqBm1c1eIZkoac6UD4%2BXKTD8tP3ABjqkAZaEopjmGVw3wnwNMNVL60xXV%2BHBDNTYaTA%2FKOf6LIZrM6RCETxU1L1luMa%2FSWsxfifimvrbf6jaEDWtveayMFZ%2FTPr9GY8n%2BoCA82%2FBEhYoWUcB4VwBd6dAqz%2FydOUPOj5TdHWUusc7d%2F%2BdH7gdsYhNlHW7CIu2zMqVanE1H8WB1bh9Sd1K7a5%2BJ9c5M%2BleIgUL8%2BJJmDn08s3nB9f0MNTLzKZ%2F&X-Amz-Signature=4cef3d483b8c34abcd5891606af16c35b66485edebb5cbe89d297b789e3ffcae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI5RBM6G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAR60Que5ibOO%2FcvsQKjMKlBYy5qn%2FISdKltYQjnvsQIhALykPFWXJ%2Fe3ExTOfrKyW%2FPTO1yGvgIzfg2h%2F2ti1kvvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyu5BhG%2Fv91Y%2BkAIq3AP7xjLfwVLwH1TGMnuAAdb77NWHuUrhyz%2FLh5dbjSxsv14DH%2FE81b52jFyCMCzvquu4ohsYno1rzio1yZIJO0WGQqPeFrlHH35%2BaKwReM%2FdtmO7NwY%2BI26CkQ5Ri5kY5SkooLtNh751fCJwPjMHql7qws5BTkFjLLrTI3ofFPYreYd2abD%2FX30orGaQnVoBV9G0%2B7X0PB6fstWfma4JW4B8cBpZJUHi9w%2F7ZRU8tAGRYNYpYnRxlwhA5yB5IRdlhRITZ4PykODuJPu7yRS7E9R3RcYcgVaupKX7RDD%2BGrwJZUbJkzFPeR83EwS96tSUlPwfS5zXX%2FAcEnVr5U%2FSWlSpYrU9elQPZ%2BFiUp5PgaCsNvieVwKRmHTjmTlwLKP5m7RgAcq3zwdFB5VHlSQgiwaA3fnG6npJtEFIM7SCQqBhVQFacrbdSguIK1lfIWmKoK9SmR5Nr8jSFyPP5gc%2FVxBTnxATSS06tnqusNdLn7Xf8mOYBun74L2Ndh3K3nQ9aU5knhulJStzhhe8yTtEWnf9z%2BcWOAGmYy5Yt3Dd3xqSHXFNV4vmWHaXsT36fTkkCNgnbjpQnX0N%2F80cUVZbYSp3HK23zKRNlq2W3QGWVqBm1c1eIZkoac6UD4%2BXKTD8tP3ABjqkAZaEopjmGVw3wnwNMNVL60xXV%2BHBDNTYaTA%2FKOf6LIZrM6RCETxU1L1luMa%2FSWsxfifimvrbf6jaEDWtveayMFZ%2FTPr9GY8n%2BoCA82%2FBEhYoWUcB4VwBd6dAqz%2FydOUPOj5TdHWUusc7d%2F%2BdH7gdsYhNlHW7CIu2zMqVanE1H8WB1bh9Sd1K7a5%2BJ9c5M%2BleIgUL8%2BJJmDn08s3nB9f0MNTLzKZ%2F&X-Amz-Signature=895eb00835edd13c3eca23f9b9ae761db6d298034713d1d0849d3f498af86d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI5RBM6G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAR60Que5ibOO%2FcvsQKjMKlBYy5qn%2FISdKltYQjnvsQIhALykPFWXJ%2Fe3ExTOfrKyW%2FPTO1yGvgIzfg2h%2F2ti1kvvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyu5BhG%2Fv91Y%2BkAIq3AP7xjLfwVLwH1TGMnuAAdb77NWHuUrhyz%2FLh5dbjSxsv14DH%2FE81b52jFyCMCzvquu4ohsYno1rzio1yZIJO0WGQqPeFrlHH35%2BaKwReM%2FdtmO7NwY%2BI26CkQ5Ri5kY5SkooLtNh751fCJwPjMHql7qws5BTkFjLLrTI3ofFPYreYd2abD%2FX30orGaQnVoBV9G0%2B7X0PB6fstWfma4JW4B8cBpZJUHi9w%2F7ZRU8tAGRYNYpYnRxlwhA5yB5IRdlhRITZ4PykODuJPu7yRS7E9R3RcYcgVaupKX7RDD%2BGrwJZUbJkzFPeR83EwS96tSUlPwfS5zXX%2FAcEnVr5U%2FSWlSpYrU9elQPZ%2BFiUp5PgaCsNvieVwKRmHTjmTlwLKP5m7RgAcq3zwdFB5VHlSQgiwaA3fnG6npJtEFIM7SCQqBhVQFacrbdSguIK1lfIWmKoK9SmR5Nr8jSFyPP5gc%2FVxBTnxATSS06tnqusNdLn7Xf8mOYBun74L2Ndh3K3nQ9aU5knhulJStzhhe8yTtEWnf9z%2BcWOAGmYy5Yt3Dd3xqSHXFNV4vmWHaXsT36fTkkCNgnbjpQnX0N%2F80cUVZbYSp3HK23zKRNlq2W3QGWVqBm1c1eIZkoac6UD4%2BXKTD8tP3ABjqkAZaEopjmGVw3wnwNMNVL60xXV%2BHBDNTYaTA%2FKOf6LIZrM6RCETxU1L1luMa%2FSWsxfifimvrbf6jaEDWtveayMFZ%2FTPr9GY8n%2BoCA82%2FBEhYoWUcB4VwBd6dAqz%2FydOUPOj5TdHWUusc7d%2F%2BdH7gdsYhNlHW7CIu2zMqVanE1H8WB1bh9Sd1K7a5%2BJ9c5M%2BleIgUL8%2BJJmDn08s3nB9f0MNTLzKZ%2F&X-Amz-Signature=7aaa1e53bd501b351f8bd1dfcf7df232f19958c09d06533dac08bbb08d02fe6a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKXUOOA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3mTUlQW2MebJ7dT2vkPgiOwasi3hjgJL96IrdLN7aBAIgPXeZeRxanot82iysQ126KTGibxYrRQZ3rrsjXMwzjWoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BQ6MeCiQCGJ8jodyrcA8Z6vFROQ1bSCArd1pmfoOih1GukbSvdKYx0TORfBcJ2YuOFxXgtuZa6z8IIhZ4nE2rsom9W%2BrtEK6ok0Jq%2BxH1Shv2XaZqzhXskOg%2Bfm6kay1UduwfMTQfdb9Qr6%2FEay0lB7zoYSNR5wbFxkf6sfKcCiPUoDox6ZL1bAMyC95DgIFgM1Mnxw18bhRQ7DONYWBOAuJ%2BFy9QhKCFKZubvXU5k3g1e5yNelt07wBvsSll4gI%2FKthSVlP%2FB3za1pAlPNyizNH0Cf23y%2FtpVnicBxAzijrfgJFlcFAiDqJw7kA6DO%2B7i%2FAotdIdNzzr98gNgnpHyZvRgJJgfrGFHMGXlgdVAS4Kq58LaqMpL6HKSuF941ok7qJFzx%2BCwzuRpoHFe%2BPy1q8xN%2FALI6aPb2SQusiLfdOhR7uyMNiWh%2BP6KYC7XzbBDsinS68G%2BVu1aCcdfjqu7IQMdaZhYrcY7YpcSlw8%2FxaRNkD2WYwDoqeQSPiNBA0QgkVcLQNXOhATymxBAYUVNEYhH9TQEFikVu1fM0BmDlEgCEXgQSbtk4D7YylylwVI8TcRiDWVAauBRT4q%2Fyic3hoVlVecQwqrwAJu5bXT7pB3bB9OKlutQ9L6AM2CIGvyeixoBR0Sj9w0MMMKU%2FcAGOqUBlZjYAzmJ4AqqKm8mJrW8fB%2FE8phABD%2BESkyM7xGCJN766SczMy7M0O5zRUUxAhaEerPQn9E8y4VQAftYLQ1Kkvs4U5CQ8VmgFTDtjBv4HRxMptZk9GRL8gJTu682boI2eO93ssaFwab%2BH%2B%2FxtMwpy4IDfb3lgBl9VS0ExdlDLB9BCQhbyAlkfKwrXzXXDmOHESRp%2B3OXHPAfN3gHjRfj1GQg5xdX&X-Amz-Signature=5d23d0549ede44f340d6d070fcba7e643d426152371c814dfb4a65a4c37af54d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDA4GCH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRdzsKXzg3h%2FNLPxbkRrSjDr3nTmF9Dd4rVcWTUFCweAiEA5Jp9BNK%2FXW9w5iOq8cazvhcNa%2FLVO9xMbmt9%2BMmiY5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNuQ%2BZp98afjBs4CircA6E9H2BCw0GdC7UJccQ3jaRNOeZB2KzRdIH0Yh72Gr44TqpjEH1tyVeVuFeQrVTe3%2FcJ0mDzJLQqyKVIDUp8s3LhD4LgvZ0x%2FSlSs3kPry%2B08T5O8NPfAw7%2BZn0gZ%2BW1ey9wv5q6Ccv1HQ1GL7fqWdEODcOxbkNaGeH8A3h03wxLRV%2FPlZqVHAGxHOLKkNUlCQX0i4Zs0DYG66gdLaGiKkYqjuSJmPoa%2B9qXIf68uj2DEHlE8n8eYYcYF5BEXQh2jW28fqmTWFQYcCJTzdmJ1Y%2BAJOpJ%2FyBIKAjZ1o7TQa0PPy2nPwr2KRv%2F87Gv3KmSZiphJdP1caeguXQBzW%2FW2FOrl9Y4513ynrlIRZtRYwt112Wcf%2Fuik359lPgFz6bwVxg5992HZkBacMSgKPZfE%2BbcqlB%2Bv24B0AGDrl1FBqClOWWwV6FmcP0Tbo%2BBtc9qPF08piI6S5TXOmrR%2Bcr%2FU00ZwBiwhFXF84cjMo8qkP2DJvWvi7EK2thf0rLhW%2FAiNSqiJ7GdPrue8qXkzVEyBa%2FxvlFcuO13MIPQWljM7NEuZE0iTzTfBvtFwZIfnKVxFTxEvUmUv7KBX6pAhbt0pYOQHqJydo2r2qok%2B9be%2FMyumL9b9hceadjkyu7lMOmx%2FcAGOqUBhjl%2BNpW9%2BqIDaf%2B%2BHSCoK28x7LmEw1rtzoCFG67cOF59sqfQNOTff77MP%2BGh3aTX46%2FUKFpIc5FfX51Am0cTRSZmQmokPqLEch2FwgTiLYtdlPQatNcwjNuzEta4QmAji0c2OigbNGAu%2FuR6tSmEjaeOPmuGyi4c6iWNou6ZSZ4Fbx5ylcesheNKhC0BO0p7Y5sYkPokHeYCRrhMByTlXSALe54m&X-Amz-Signature=774e57fef5b3d43abc749e11ed2bad93bf20f2410d0244c83a18c1b2f35c8ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI5RBM6G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAR60Que5ibOO%2FcvsQKjMKlBYy5qn%2FISdKltYQjnvsQIhALykPFWXJ%2Fe3ExTOfrKyW%2FPTO1yGvgIzfg2h%2F2ti1kvvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyu5BhG%2Fv91Y%2BkAIq3AP7xjLfwVLwH1TGMnuAAdb77NWHuUrhyz%2FLh5dbjSxsv14DH%2FE81b52jFyCMCzvquu4ohsYno1rzio1yZIJO0WGQqPeFrlHH35%2BaKwReM%2FdtmO7NwY%2BI26CkQ5Ri5kY5SkooLtNh751fCJwPjMHql7qws5BTkFjLLrTI3ofFPYreYd2abD%2FX30orGaQnVoBV9G0%2B7X0PB6fstWfma4JW4B8cBpZJUHi9w%2F7ZRU8tAGRYNYpYnRxlwhA5yB5IRdlhRITZ4PykODuJPu7yRS7E9R3RcYcgVaupKX7RDD%2BGrwJZUbJkzFPeR83EwS96tSUlPwfS5zXX%2FAcEnVr5U%2FSWlSpYrU9elQPZ%2BFiUp5PgaCsNvieVwKRmHTjmTlwLKP5m7RgAcq3zwdFB5VHlSQgiwaA3fnG6npJtEFIM7SCQqBhVQFacrbdSguIK1lfIWmKoK9SmR5Nr8jSFyPP5gc%2FVxBTnxATSS06tnqusNdLn7Xf8mOYBun74L2Ndh3K3nQ9aU5knhulJStzhhe8yTtEWnf9z%2BcWOAGmYy5Yt3Dd3xqSHXFNV4vmWHaXsT36fTkkCNgnbjpQnX0N%2F80cUVZbYSp3HK23zKRNlq2W3QGWVqBm1c1eIZkoac6UD4%2BXKTD8tP3ABjqkAZaEopjmGVw3wnwNMNVL60xXV%2BHBDNTYaTA%2FKOf6LIZrM6RCETxU1L1luMa%2FSWsxfifimvrbf6jaEDWtveayMFZ%2FTPr9GY8n%2BoCA82%2FBEhYoWUcB4VwBd6dAqz%2FydOUPOj5TdHWUusc7d%2F%2BdH7gdsYhNlHW7CIu2zMqVanE1H8WB1bh9Sd1K7a5%2BJ9c5M%2BleIgUL8%2BJJmDn08s3nB9f0MNTLzKZ%2F&X-Amz-Signature=38e14079ad635585198ea4b96763dc8db8caf6d07050c37152474724707061c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
