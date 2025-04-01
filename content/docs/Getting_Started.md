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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMNNYXQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDaVCjR978D5gPR1F3w0aTG8Vg2p%2Frhh7tAiXK4odB9iAiEAxTYvH8Qohu5C9rhc%2BUHsgWbkInmsLnhqqsAhIaxOZNMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXIHSnm3IehEcIBircA8JV8IhpRtdMkTXei7Rxp5tU5aYnWYsPYZS0Ybowu7xsiXyWkIQpcAgQVFdR%2Bgh1LmyFDY3N4Xf8RGUPXYE1iQG%2BUc1oSqTxjHobgoXy3J6Um2SMgM0PuRsYMcGD8gFhd%2FmA8GqNo3dM%2FsZ9tLjzqcBpkN7NEkeO6rBbl%2BlTCzOpIU9a4CcLpXlYUMUyHboIZpWm%2FAfedI2eWnMGWfxuqNqdCG7Mhq24vZxv7OYX2N3wnObzQJe%2BBDMwOQ9Sw5C9%2BHvdnVaKJiEDjrUr0DpHvxUXf3ykUvLKqOt%2BmAfcdaSiUJYs84hRjBYyzaeFNT%2BVsJ0IPTajelcWUGYhrPG0ep3JuAUvouzU1Cul1T01UXGUIO7dCCz6SkFaXSZ5MylvDb2Xo%2FUmWuhR28ysuiO0U4Xds6bXPp668L1kkaDvqDbT8YFbff7n9N6x%2BFLZuK6KBAh7%2FkPQ6K4tqiWoIeVxeV4lPNPjgnJzH0mlqgmrpuzWKMuig75Zxt0W7n9vapa4W%2BQ3szz2drkyT4i7nhq0ofOb2oIfqK9cOjNJhGaiH5mmUU4MT3dZfphGxhSV07GbKFGMve9PPGe66X4jBDmSZz%2B8VwaAzMjHAycRhUAVIzKUicvEy%2BISWAK1BygdMKiyrr8GOqUBLp31I4fmWDJFaWn61nfRQOWpSb0qQl%2B5eAWVkK5eTJy5ARWuzCo03mZgmHh7JosGPmvMe572r7a3dVHqhuldD66cOjhiFBNp7n1wBiDQwPq8peQZNwpatG8wTxKiSOt8Bsx%2FopOXy%2BAcN3nAKfrXWu%2BiF5b227pq6AoAjmHh7O2HThkk3lNVlDBJytzEu%2FKpVSxXSm91OcPEGfc%2BOlPZVE1o5Wn%2B&X-Amz-Signature=558ca97a48f10db19bb9ac996c0450f89b578ae3fb6a4a954bcfb2004f5ebc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMNNYXQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDaVCjR978D5gPR1F3w0aTG8Vg2p%2Frhh7tAiXK4odB9iAiEAxTYvH8Qohu5C9rhc%2BUHsgWbkInmsLnhqqsAhIaxOZNMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXIHSnm3IehEcIBircA8JV8IhpRtdMkTXei7Rxp5tU5aYnWYsPYZS0Ybowu7xsiXyWkIQpcAgQVFdR%2Bgh1LmyFDY3N4Xf8RGUPXYE1iQG%2BUc1oSqTxjHobgoXy3J6Um2SMgM0PuRsYMcGD8gFhd%2FmA8GqNo3dM%2FsZ9tLjzqcBpkN7NEkeO6rBbl%2BlTCzOpIU9a4CcLpXlYUMUyHboIZpWm%2FAfedI2eWnMGWfxuqNqdCG7Mhq24vZxv7OYX2N3wnObzQJe%2BBDMwOQ9Sw5C9%2BHvdnVaKJiEDjrUr0DpHvxUXf3ykUvLKqOt%2BmAfcdaSiUJYs84hRjBYyzaeFNT%2BVsJ0IPTajelcWUGYhrPG0ep3JuAUvouzU1Cul1T01UXGUIO7dCCz6SkFaXSZ5MylvDb2Xo%2FUmWuhR28ysuiO0U4Xds6bXPp668L1kkaDvqDbT8YFbff7n9N6x%2BFLZuK6KBAh7%2FkPQ6K4tqiWoIeVxeV4lPNPjgnJzH0mlqgmrpuzWKMuig75Zxt0W7n9vapa4W%2BQ3szz2drkyT4i7nhq0ofOb2oIfqK9cOjNJhGaiH5mmUU4MT3dZfphGxhSV07GbKFGMve9PPGe66X4jBDmSZz%2B8VwaAzMjHAycRhUAVIzKUicvEy%2BISWAK1BygdMKiyrr8GOqUBLp31I4fmWDJFaWn61nfRQOWpSb0qQl%2B5eAWVkK5eTJy5ARWuzCo03mZgmHh7JosGPmvMe572r7a3dVHqhuldD66cOjhiFBNp7n1wBiDQwPq8peQZNwpatG8wTxKiSOt8Bsx%2FopOXy%2BAcN3nAKfrXWu%2BiF5b227pq6AoAjmHh7O2HThkk3lNVlDBJytzEu%2FKpVSxXSm91OcPEGfc%2BOlPZVE1o5Wn%2B&X-Amz-Signature=4a8ad035a249b92cd45a7181b39c3c9969d9b8c02afa2b6d1d0e551737ad7381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQV4JPA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD3Ap%2BoC0ZFdpiH8iNQdTq4iqwzc6b2iA%2BgsaXcVb7dzwIhALK5tkKRDJG6CXEbmL6o3pZqbZur48UZAPayLu10bXhLKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfetdyVYfLU0e2z%2BAq3AMQOWXr8s%2FsLwaPnomwY2eeCVzJggjYI8Vh6LipFVKC9payWEzcolPAHhNLzFlmGczssqb3%2FDWwin9hiBYm%2BuQ2zaSgiAJwqMLUnnol1YpqHacSNNuRIfYk05syQiyyTJTbLmcr3XrFmKswn1mxcUV2O8Ge8AweMNYXZxomaaJPBxXtaXQt52K5fkaZHKRq%2BRKRo4sCHqevWZTu8jxQLV8zI3DdFWLqlOBSOsZhqv6LjUXSfaBDZpud7y%2BDECBGB56C7eeN%2FWW7UnWutZUqu%2FJSekGK3qOA%2F1txXcOUQROX2Yaxrawei%2BxqdKXLhncUyY4wIKPTNMKlHSaY52HxS3HsyPhwqz1dPIqOs66Gg0D6zC7LFH50frVhAAii05eYCzJ3Vzfc8kC86GWVgIP2DM2nbcMFYyyuRJ5K3v5a%2B5cVj0%2BjNTSTfGYlIercaoN2xj97sH1pbwsO8H3%2BdIb0pnfvG3FDabsGICHc6hIng6Kb6Z6nGrePyey0St7v5Xfok9k4BOZE5UBQO7zzeeKOyW9lQ7%2FkSb1%2BmRf92WTRsGpkpQJSQd%2FTSqimKBqIIHm5IKKlky5uZZmK7XkzButuHRTb6BnFGK4DkQ7ynHsA2Wq%2F%2F9sT%2FtZaJcKCcSBbljCosq6%2FBjqkAc41jGARmaKKzLEaLS%2B850ChUoD5zhlwk1ixLn6ko5AYKp8TqWbsyE6f543sjB7gEqhW8iyr0KPrjVCcs18MJAcYNgmBhFojeYA7hGss6TQhkpRHlUlqSYkhFQIKS6GRAazXfEYKXhGHwtwF4TkMyt%2FwsHn0a32tf0WIh8qx4JZMUxNrYkZe85%2B7D0Ffaa1s7LBBGp7AgUdiXWkv25HA%2FCi7KhzP&X-Amz-Signature=38fb4e6369337cf7bdc224604252a5176e68b5f36089d627ebdd0537a43205de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3SWSTK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHdTnKqUlSk6XW6J3OoCLCSq8ojaHL7D5aM9lKGhu3I0AiAaQqML9F%2B5fdVdKwulpzW4kYPWz4qhNEChsuugqG%2FKjyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2BFjLssfr9aGTFh4KtwDpqnJNk0tw8S9897Dz8Ofz8bFlFwxrVLvChNzIF2OCZfa7C8iTv%2BPVpfp1ky63aua6Enu7aQdK03hpEcXh3QnMmQhFNE6KqSvd2eycMCthAq%2FkGxAqdA%2BIFQU26eDAIJGjVP%2F4n%2F5b2ezFI4SfkWkX4pL5957%2BVxVQmjEKKlVZlBDUByJcl1u%2BjnCayE7UCevyZTdMgZIBDRc7lZYAg7l%2FumL4ZoNgshRojAh%2F%2BqA5QdkPvDjJLXHd9rlS2tDW5GkiLUIqTmQBpz%2B1OsR6zvZtOVJllfnn5Ydo89pZXiU6zPwBFgQ%2BY%2BosA8Js6L8Q1qiXtckRJA4be0lLlBE54WvFHBMmrkalkQjVLFDBUbjlyHeUBQUdQ1nNpredlf%2BdX79BPLHnNzUSu%2BZ9QS3lVgsXE%2B2XzVbP7N8YG99yaHTaK4%2BQcmmCnkXh0BWwb98aWlTHjRi76nwits0UAonX%2FMXoDMYRB0lap3rMp9DTd26FbZM3kpZEpV9lfpKrR3T7p7MIXW9jXcQoD8TsWTLNp6xCe%2Bp0AwFuTlSf%2BAMcr9cmPQu8rHMkqCbmONSzTz3640HwYmy1Yc2th4MZVk7wEqLKlpEA9NN8vJMIR5Zozhtymy6N70Y%2B%2Fmlp%2B3G1g4wjLKuvwY6pgFeYoE5D4NmKzP4njuiYLPEdnTy2J1gJRs9aX22HJ0JUTsggOzHcg504yY2Vx0%2BTlaUiGpm%2F%2BRmd%2FQnN14wE6R6MduZhTbZ3vvABqIqBOv8BcC2HCeaXjh%2FesSmzXMN4TEROy2qn60%2BgVnDZrLhIa8vNw5hzlnqMJDUmCVMJa0n8ntCJWGXyYPYgmpIqPHKSoJctUHWSv4eHUeLvqpnWKNf2r172k5P&X-Amz-Signature=f7647a59db1269837a1b15c1e6d2fa55d28ad873f67c7895f80f7f22cbc0f9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMNNYXQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDaVCjR978D5gPR1F3w0aTG8Vg2p%2Frhh7tAiXK4odB9iAiEAxTYvH8Qohu5C9rhc%2BUHsgWbkInmsLnhqqsAhIaxOZNMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXIHSnm3IehEcIBircA8JV8IhpRtdMkTXei7Rxp5tU5aYnWYsPYZS0Ybowu7xsiXyWkIQpcAgQVFdR%2Bgh1LmyFDY3N4Xf8RGUPXYE1iQG%2BUc1oSqTxjHobgoXy3J6Um2SMgM0PuRsYMcGD8gFhd%2FmA8GqNo3dM%2FsZ9tLjzqcBpkN7NEkeO6rBbl%2BlTCzOpIU9a4CcLpXlYUMUyHboIZpWm%2FAfedI2eWnMGWfxuqNqdCG7Mhq24vZxv7OYX2N3wnObzQJe%2BBDMwOQ9Sw5C9%2BHvdnVaKJiEDjrUr0DpHvxUXf3ykUvLKqOt%2BmAfcdaSiUJYs84hRjBYyzaeFNT%2BVsJ0IPTajelcWUGYhrPG0ep3JuAUvouzU1Cul1T01UXGUIO7dCCz6SkFaXSZ5MylvDb2Xo%2FUmWuhR28ysuiO0U4Xds6bXPp668L1kkaDvqDbT8YFbff7n9N6x%2BFLZuK6KBAh7%2FkPQ6K4tqiWoIeVxeV4lPNPjgnJzH0mlqgmrpuzWKMuig75Zxt0W7n9vapa4W%2BQ3szz2drkyT4i7nhq0ofOb2oIfqK9cOjNJhGaiH5mmUU4MT3dZfphGxhSV07GbKFGMve9PPGe66X4jBDmSZz%2B8VwaAzMjHAycRhUAVIzKUicvEy%2BISWAK1BygdMKiyrr8GOqUBLp31I4fmWDJFaWn61nfRQOWpSb0qQl%2B5eAWVkK5eTJy5ARWuzCo03mZgmHh7JosGPmvMe572r7a3dVHqhuldD66cOjhiFBNp7n1wBiDQwPq8peQZNwpatG8wTxKiSOt8Bsx%2FopOXy%2BAcN3nAKfrXWu%2BiF5b227pq6AoAjmHh7O2HThkk3lNVlDBJytzEu%2FKpVSxXSm91OcPEGfc%2BOlPZVE1o5Wn%2B&X-Amz-Signature=a451b99ed20a1b941a321b2abcb7d6418b37b85f58049bafc54324e7d8f6adc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
