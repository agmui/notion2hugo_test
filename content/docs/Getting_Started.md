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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5Y7E6Y%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlgKvLDlVagy0kVFeccXFSdGRC8q5LlQzGmtvzbhWuBQIhAPBmmMzuOW3l62Dk91jRfqmXeYLeQFWwClnXAhjpzOLIKv8DCEsQABoMNjM3NDIzMTgzODA1IgwoPEg2KmBRpe1azPUq3ANAtZX4LU%2Bs1%2Bk0jTkPrzj6cQ66dwhG427CquqJSLKf6ALQjZDK8VuD%2BN4FmVeuDt5zj9JG6ZcWk%2BJD4lHtfLShPySGWNeYUmPP6nW3PObZj8ok3MEOr%2FTDr1dfjP13Uo3SAqQJlz05CLpXRxlBfNP7EiLO2mj6F6t6il72qnHJAt%2BlB3S%2F8UR4Q04kn0sq7HDnAN0cgNpzFPwm6PIF7Tg0HYOwCC42hTbTqwNTGrD8GRENW3R6vLOXSJgG3dgXD5XuYWpA%2FHC5G598NqHREUT9NOcVuSUfZAeVZZ9cSXbUTzGD%2B2NFQsx59YotTYx06FkSybOOZPtMK2i8AJRwfKxZiTNTc9Pa3zyCfxcqy9Hk%2Fxw67IFcd3R57eKRfJPSAWO%2F1H6OmZNlTeFb5li7evkGhYKcoBQGpN53MTssplYa2ooDnLxdzRFfjrflio3s6OYCYWudmeIA9jxCAGdEk5GO7REq6%2FlppHslQ2Y7yG08Vi5FVlfzh4LpNuYRWzh3Gxdn6UZm%2BEqMMfmIIRAXAagUPVF0mNvd7rjH2NMH1h9inaNp2I94XjA5epZNjiHdhQda0YiVqw2QniT%2F1NJxgvKNoSKzhcDBFBuuQilgm65rNo4KZOzsEQRbpzIZkTDuopa%2FBjqkAajyuMAB9%2Bf1GDkCySnClA1vToTKtDdh916CjvBjnZ1OL4bWKFq6nxqu0oFhxTkpCR%2Fexaoo8H1V5nYlfvmyRuDWsjG10y%2BcnIHkqZnOnYzpzAonhAfRnVXW8mXyg4wFU4Llx7Wbz6X8wlj%2BEKrk4gUFMb%2Fsh%2FL6JlSY5NsKXsVx7EDmIDM%2FZo7F%2BJKZoVpXWjyI7eNW43hjYUSwI4BJQzXYs2rx&X-Amz-Signature=410c61a600c981d9b970ec82c651d039078922cf2920dac0621405f126e64c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5Y7E6Y%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlgKvLDlVagy0kVFeccXFSdGRC8q5LlQzGmtvzbhWuBQIhAPBmmMzuOW3l62Dk91jRfqmXeYLeQFWwClnXAhjpzOLIKv8DCEsQABoMNjM3NDIzMTgzODA1IgwoPEg2KmBRpe1azPUq3ANAtZX4LU%2Bs1%2Bk0jTkPrzj6cQ66dwhG427CquqJSLKf6ALQjZDK8VuD%2BN4FmVeuDt5zj9JG6ZcWk%2BJD4lHtfLShPySGWNeYUmPP6nW3PObZj8ok3MEOr%2FTDr1dfjP13Uo3SAqQJlz05CLpXRxlBfNP7EiLO2mj6F6t6il72qnHJAt%2BlB3S%2F8UR4Q04kn0sq7HDnAN0cgNpzFPwm6PIF7Tg0HYOwCC42hTbTqwNTGrD8GRENW3R6vLOXSJgG3dgXD5XuYWpA%2FHC5G598NqHREUT9NOcVuSUfZAeVZZ9cSXbUTzGD%2B2NFQsx59YotTYx06FkSybOOZPtMK2i8AJRwfKxZiTNTc9Pa3zyCfxcqy9Hk%2Fxw67IFcd3R57eKRfJPSAWO%2F1H6OmZNlTeFb5li7evkGhYKcoBQGpN53MTssplYa2ooDnLxdzRFfjrflio3s6OYCYWudmeIA9jxCAGdEk5GO7REq6%2FlppHslQ2Y7yG08Vi5FVlfzh4LpNuYRWzh3Gxdn6UZm%2BEqMMfmIIRAXAagUPVF0mNvd7rjH2NMH1h9inaNp2I94XjA5epZNjiHdhQda0YiVqw2QniT%2F1NJxgvKNoSKzhcDBFBuuQilgm65rNo4KZOzsEQRbpzIZkTDuopa%2FBjqkAajyuMAB9%2Bf1GDkCySnClA1vToTKtDdh916CjvBjnZ1OL4bWKFq6nxqu0oFhxTkpCR%2Fexaoo8H1V5nYlfvmyRuDWsjG10y%2BcnIHkqZnOnYzpzAonhAfRnVXW8mXyg4wFU4Llx7Wbz6X8wlj%2BEKrk4gUFMb%2Fsh%2FL6JlSY5NsKXsVx7EDmIDM%2FZo7F%2BJKZoVpXWjyI7eNW43hjYUSwI4BJQzXYs2rx&X-Amz-Signature=d951d75caf2cd0d8458e9defcddf9f7b275b640566f0f7c6ef7f0909ef0a280e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDOJ27G3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8%2Fs%2BMWkZfK7DXJl5UkLORllWH3i17ml%2Br3VMZyrlM8AiEA2Y3zeK7vp9Pi%2BkQd4PWtZc7bBkK53t9LWzQTx7OtuuAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD58m6suvzxJjJs%2BlCrcA28vnjIEH%2FgxIMTIZA%2FDQpae5fXKbaJdsxiVkUVZjdqZEnSQ1RyH%2BsH5PK5WO7z0hxbCvtwSi4bQE944%2Fmixlz%2BLLEjvjqZDVa1U6IFDVPMmRIkWDSP7wVQSUBJVrRati2AVBZv%2BiSkJv9wAYMXZBKoEXrhcl0MyOT0V18ISWjdwKD280w8%2BxWPeG8%2Fs5n2%2BmICqyUD%2FHGFOS2RRU2oelU2nig1tZjf6TsQ2OdtfBUmuuQTCkfIMTx7soaHP%2BSk7ZUuAwmbz7mtdpKG4laRcW1OgnP0x1%2F79VACp8Kt3%2FTKYzJUmhSw5SaeQRMC6TEmcJxXP47hdlcskYecIkljB5vLKumMTCej4DbJoqbSTENaLyXbKU3fmAfj3OXSiVxf5AJ6Vm%2FwQtFKV9Qm8Y%2Bd9RvZrXAmTVo8lz0wBxgB4fz2%2BJh4dq9WnO%2BT4%2FSt%2Bi9T98cSuS5W79fkVN1opSrkeCI3FZ3ZDqel%2BBrm6DBW0rr%2F3iUUzpvcz4fAJ1Ul9dWOJCgAHCR0zNm11A4zZku4g5%2BqTw5SPu18tCEpJlhq7yIAp8M%2BcpfU3Gbdt1qp%2FcMXUGdxPlnU7WrqH8vxXyGM7%2Bgl32QW7GlqQL1%2BcnPwWS04w0ItZBX8enCjCyuSNMPailr8GOqUBln52AZslkxH9AflCMiMQmy84tCpf%2Fq0b6E439tzKagVgexZvBPIcndkegj8mXUQE35R5lDDKbizFpm86THzjIlAq4bzzk58KYZflw2gOxzPrILnH0G2JcB8TEuZ%2FLrqjjkfBQWBGc6aWK0%2ByTEALVyaVWL124gI9oyGqtrVChAXkWhgsSgSbKl6PGYuJsINfuqc0t6Bey%2FR1bpvL92yO7cEJzIjs&X-Amz-Signature=f6c76228cf7a2d1cb66e13b584fece28ef2b7c98108e8b99ab02b2ec64b6b17d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666665DEQP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7D6bavrJ9%2BZQFZfNmKKbcwkC5G7P1aTbLdEn7AzCnJAiEA8Q7P74w8EbLLCfuqg2kPRaSeL0VhhsljTreIR5Bf4AMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGLH2l1yn69rXYExIircA81cW9CBFjYvZAoqCRCFHj%2FsEEbQYiB6MAXj1Dwwwqbb9SPDuhoKvKs08%2F6a1J8veshOrROv5N%2Foy%2BbeI3y1Z4kn5o89tSYBVjrF0I1%2FlmFUDqdzXWhPy4lvBX%2B1%2BzkQlhMQMUoX9WAJW8l8zDF%2BP7ImvM1dU%2FBaf0GR3vi4SnDCOWh1L%2F5UjpgusQnr4qQoNaXh4D9ookzX2TYzNKyuYJULcSHty8bNca2qs%2FFEXtagq3GPCk3BzLu6kIVaJmAPFAJBq0XWrYtTlcMQ2wqgAR8fhkBL5m%2Fq4LGzll%2BRl3pGM%2FnyP6FUDDlvCaY9%2BSi6lWCe6z%2B%2F0dqrb32Z3keIBnFl24grCLdvbj1%2B9ZJWRcQMkRdXFWCHwt11WxRi60QrRi0aB8DFLR0u%2F6zMe2pWU%2FwDzStyccBPYF4PR6HrFXp4Tfi6lGep8LmSet0Tk8ZptiDCTpJvb6NK4TzjI%2FGmxup2siBT8k2o2282j0wCZhZKK6XpA0fkAplaRsuakvKs6s10y0kGOZgFH3%2FbnfaeduWSP8uSZQDoP0QgIVfuXvA9go0PlVDUE9dlMIaN03%2Bw6XE0sudm7KdGW52oOTg%2BvCK%2FBE5uK7faMEqHj2HT3c3nsVr0%2FQv9pGTSP3zJMMyilr8GOqUBA8sh4MklUnDO22nVoRgfkEj8epxAu3s3Pxqlmw339HkFDxq08Gz%2FP%2Fn2LApZmNgEqbaybfWtIKb%2Br0wdVngc6T2wdnYoJ9VPJa0XVwdGpOFU6cyo%2BE6ydbbxRoDHfjCSgq7T2%2B32HxNVlZkkJ0XbljYo73RVZBkgG2PZgJjQGqZ6cmfk8uUnjp1iA%2F%2Fy1C0OUqMua8nh0%2FwTVt1we2CPc1cPxGcD&X-Amz-Signature=2e044b7d5e8d8020bd4cf60da9e372d43f80971874c2067bbc01bc2b63163922&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5Y7E6Y%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlgKvLDlVagy0kVFeccXFSdGRC8q5LlQzGmtvzbhWuBQIhAPBmmMzuOW3l62Dk91jRfqmXeYLeQFWwClnXAhjpzOLIKv8DCEsQABoMNjM3NDIzMTgzODA1IgwoPEg2KmBRpe1azPUq3ANAtZX4LU%2Bs1%2Bk0jTkPrzj6cQ66dwhG427CquqJSLKf6ALQjZDK8VuD%2BN4FmVeuDt5zj9JG6ZcWk%2BJD4lHtfLShPySGWNeYUmPP6nW3PObZj8ok3MEOr%2FTDr1dfjP13Uo3SAqQJlz05CLpXRxlBfNP7EiLO2mj6F6t6il72qnHJAt%2BlB3S%2F8UR4Q04kn0sq7HDnAN0cgNpzFPwm6PIF7Tg0HYOwCC42hTbTqwNTGrD8GRENW3R6vLOXSJgG3dgXD5XuYWpA%2FHC5G598NqHREUT9NOcVuSUfZAeVZZ9cSXbUTzGD%2B2NFQsx59YotTYx06FkSybOOZPtMK2i8AJRwfKxZiTNTc9Pa3zyCfxcqy9Hk%2Fxw67IFcd3R57eKRfJPSAWO%2F1H6OmZNlTeFb5li7evkGhYKcoBQGpN53MTssplYa2ooDnLxdzRFfjrflio3s6OYCYWudmeIA9jxCAGdEk5GO7REq6%2FlppHslQ2Y7yG08Vi5FVlfzh4LpNuYRWzh3Gxdn6UZm%2BEqMMfmIIRAXAagUPVF0mNvd7rjH2NMH1h9inaNp2I94XjA5epZNjiHdhQda0YiVqw2QniT%2F1NJxgvKNoSKzhcDBFBuuQilgm65rNo4KZOzsEQRbpzIZkTDuopa%2FBjqkAajyuMAB9%2Bf1GDkCySnClA1vToTKtDdh916CjvBjnZ1OL4bWKFq6nxqu0oFhxTkpCR%2Fexaoo8H1V5nYlfvmyRuDWsjG10y%2BcnIHkqZnOnYzpzAonhAfRnVXW8mXyg4wFU4Llx7Wbz6X8wlj%2BEKrk4gUFMb%2Fsh%2FL6JlSY5NsKXsVx7EDmIDM%2FZo7F%2BJKZoVpXWjyI7eNW43hjYUSwI4BJQzXYs2rx&X-Amz-Signature=0f2e459b62a7ee1f4f6811527bbdf18accb6f59ebc5561361fe08a4a10a295a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
