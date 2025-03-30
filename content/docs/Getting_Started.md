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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHVSK7J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIETSTgo0U%2FHmx%2BPRsDNosqcKVwFQSUfaQh5X47TQCXnlAiEA02Rorvkq2piJSFuGDiUltFcmWMerR%2BMCluHy6mjmEJQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBX7gYt7zuISObNG6ircA%2BucTow9eCt4KDHsYjRBLFf9omriEkugf1nmjnp%2BlnLEgDLI5Tkr9bpUha2FKBbfrY%2BjKcQ4To6%2By0WlPxWNkZe7klwdajM9cDTc8T2LrOrbBdQYmyM3u2UHPrNQsZkk%2FouOx63k5kYyl6HWU6ymwN2C7ckp176P7fXYZ92hAEMEdUK6R9za3zuRMqlVU%2FL10%2BT2GPhuTR1jn77oMWX6qvx8TT6KuP4A5xu0725xRSsZNXwKh%2F71KzSs8C1TvCRO8Bvvdc9ZY8KuOUvbo5rZd0KwRxsnapwel6cbf2zY8esf6VkENgqDsT6Ok6K3qS0TLP%2BCEUAvoqBdZ%2BT4KdQplMQ%2FiNKMj8SrPGuVJAiKtaVZ%2BGvAQcJbIpez%2BBa3Tjl%2Bkc3sf4135JyFah9BP51nfBOOjPeo83nQkvHMmjUQufu%2FtM3Xd4oySLa9yUbsljB9HttZAOrZH1PmBVcu%2B64TDnpf6i13%2BEMJEra89abPY%2B89gXkkHmWCeAJIWz3TwG9HyXCq%2FgI3IwHj4t2B1MFoDD2isEP5%2F%2FYbzLhMlKauZKhlPJpqBLk4IDzfo1NNjYqmQXnNGkHgurLCzGF4XGOuc3FCxDPYwspw4k8G%2FrbldrVQlF14usHozPFrPxMjMNvvo78GOqUB1SA2OwHdCMd6DA1H43K7egtguQQjbOULmn1odqcznS8BnlgYtfPnZrO4I2%2B%2BGaunHv9pQIRzFxGZddXpzNjY2FBHYJvewMEgPblLv0%2B4Cx7OXyL0JvGei%2BXTls1U17mSinzDAaZSnoqLygwr08gU1zPrLiTMnd9yLj083aLna%2Fkf%2Fxlvhr3kuP4Uip%2FXvang9R2O68lgx16IieWu2YIdBKnVWfi1&X-Amz-Signature=6bb69301b7c81cb6d79595c599062662a252ca378d3a8124a47c8351a846462b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHVSK7J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIETSTgo0U%2FHmx%2BPRsDNosqcKVwFQSUfaQh5X47TQCXnlAiEA02Rorvkq2piJSFuGDiUltFcmWMerR%2BMCluHy6mjmEJQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBX7gYt7zuISObNG6ircA%2BucTow9eCt4KDHsYjRBLFf9omriEkugf1nmjnp%2BlnLEgDLI5Tkr9bpUha2FKBbfrY%2BjKcQ4To6%2By0WlPxWNkZe7klwdajM9cDTc8T2LrOrbBdQYmyM3u2UHPrNQsZkk%2FouOx63k5kYyl6HWU6ymwN2C7ckp176P7fXYZ92hAEMEdUK6R9za3zuRMqlVU%2FL10%2BT2GPhuTR1jn77oMWX6qvx8TT6KuP4A5xu0725xRSsZNXwKh%2F71KzSs8C1TvCRO8Bvvdc9ZY8KuOUvbo5rZd0KwRxsnapwel6cbf2zY8esf6VkENgqDsT6Ok6K3qS0TLP%2BCEUAvoqBdZ%2BT4KdQplMQ%2FiNKMj8SrPGuVJAiKtaVZ%2BGvAQcJbIpez%2BBa3Tjl%2Bkc3sf4135JyFah9BP51nfBOOjPeo83nQkvHMmjUQufu%2FtM3Xd4oySLa9yUbsljB9HttZAOrZH1PmBVcu%2B64TDnpf6i13%2BEMJEra89abPY%2B89gXkkHmWCeAJIWz3TwG9HyXCq%2FgI3IwHj4t2B1MFoDD2isEP5%2F%2FYbzLhMlKauZKhlPJpqBLk4IDzfo1NNjYqmQXnNGkHgurLCzGF4XGOuc3FCxDPYwspw4k8G%2FrbldrVQlF14usHozPFrPxMjMNvvo78GOqUB1SA2OwHdCMd6DA1H43K7egtguQQjbOULmn1odqcznS8BnlgYtfPnZrO4I2%2B%2BGaunHv9pQIRzFxGZddXpzNjY2FBHYJvewMEgPblLv0%2B4Cx7OXyL0JvGei%2BXTls1U17mSinzDAaZSnoqLygwr08gU1zPrLiTMnd9yLj083aLna%2Fkf%2Fxlvhr3kuP4Uip%2FXvang9R2O68lgx16IieWu2YIdBKnVWfi1&X-Amz-Signature=99a21048a9822c48545b73b4d8f6fbd7db7df842da6f822a6e2a272356fceda4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNOUUXG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDdRNsIWDQcqKRSL5eXdTcAtTIE6002d2v4WOmqXwoTlQIgOqyvpKmhqQgsl8JZNWdji2v8CJUSMEfhR2FzyofSlbwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3PWhq3G4v1b%2FYVmircA881Tt%2BC%2FFIFiX17UHIVsH6ai2xYVKDNlhW3jiH2uGzlbLjrLddbFkEL17llbBbmOSm5WeuokZDk4UDmVkjVAZo3EqFUS%2BsT9RGAr9eO87n0h0GhPaQq%2BvCwwXgQlkh3e57bIzv%2BzB%2Be0Co8ZdnMEnt%2Fhk%2FqGiwz%2F%2B9N5P83p5Qhr1UH2HiGkuVmPPq5GX5Y9ELMGZeLSEsM9I8hKY%2FnY6UTLNUSjHFt5%2FRXUT27DUUiCUP9jC48Ti5Zn1TSyzrEQZczg%2BVcAX%2By%2Fydx63T0%2FJEwo57JhUER%2Bcb4xKNe0xVOnarhBe1UuJ%2FyChqw96n9PxoiOo6PvgQuQHfaMG3LGsJD%2FxOROQwAbnkyxJuk4Y545q9BxMYNUmr5KauK3rWermF6uh%2FzKWaA0SEdXSlxuaIYeDn4EHcEfD6lpeWZ60xnUEm1pri4qb0gdfhoLvvFIpiMC%2FMlbkBp31ArHdN492bH3kKrMB7vjCsYmORSfWtimAckg%2BR4WYkzCm67CK0zNathzeZ%2BWLizhTAq9lX%2Fsu5xZd5i5c64vzAzQ0dCttZVTi7mra%2BNVsZL6pSpd%2FZKdi9A6whKbL1pmg%2BtseVBRZg9kkfL4vHvC61PbnwvnMa%2Bp%2F7vALZpbnlvc95BMIbwo78GOqUB3GmpqVg%2BrNkO%2Blaahzt7kt%2BTihhlHwqP1E1TpwMrDnvXtyXtESEHL0FWpzNrV6TLXevmIAtf5dT%2FYnpM4R1Cc6HwrfsFpb9s6X81yQW8Y%2BtH37eH%2FeFGWOn1JUkMyezGgoBXQOFik2ef6UNfUntvpt1cqh27YHS%2Fy9l3xQp3Zdm6UvMejy5Mf4oFx8wanUvp2E9GThhZjjF4CnGd53ep83lgUQfw&X-Amz-Signature=76ea8eb724a9bdf1624c72a498730205e8309926a6736f52b8c732bc19830e28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEV33SZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDENWIVbhWk%2FpBiKU0oaWM9bnqjHgYtnrb0lGzYmJznzAIhAJT1%2B9mBYbXRBE7ArofzfAMYW4iKKF6BKaO8azIPDa2JKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxna6wYGy5xwCTlRK4q3AO0R52rx%2FFfPynsKyIrV1aKnhl69GVv3makLYb76uZQ5U5prGRv1KCGWYK60%2FbAF2YlDjPxXBBg%2FlGrRO327EDeU%2B5FzxPn7gq77yqO1s9tzQRDXDaZgTkUNZZVDK7B%2FaBv9A%2B%2FZktwEOkjKb0I%2FTep9Sc5Sw8FdjQ0MnGgS4ybfK5TUOCUEwfIMW75j3Doilbsjq1k44AG2Ce2BgxlgC%2FcJG0IIPxYYqwEK3Dhl6GJMJGSjldl2%2BXSgdfgUlkfrwMg7kB0hba5PrT64eRk9dmop7X6LZZbXC0cnWGuZq6pEqtbByAO8VFvelczimznmZ%2FRBAWnPL%2BQWorG43DrTwSeBITVNtYG7zcNBFRCHEBSxsUWaqalz56ERQHPpp9Evtsifu8aEv7RjOXbfDr351e3KZ3yiTIraq%2BL6x7YNlmCS3zpMupgxamKEholeGAHRIeOrm9MzF%2FLWRsflT5q5751KRwWB47BtA9QC9UJqnQZYaHQ7e5SCKxoErK6tmK%2BRrE2tv7qjSMKdL%2B6ov8sy9b2rHYociddizdENBRo9%2FFZTFL%2FW7BzSt8k9SRTFdlSLwi5Mfy%2BWHzvmOFLJI83BANXwX3cXPaFmFbXcTj63H%2FBfkYPtMvWY%2Bl8Pn4DozDF8KO%2FBjqkAao%2FStVWbSO5hp5DgVhllheGOJEk%2F6NwSzXnthx8gvWOmvSbGZOuMN8gmP5P%2Fxm5KiirKRHTTcU20bvFoPhZm6tHJLJiDAcjdsf0Ja2VmAP9s0h8tFVnU8tnTzeY%2BWRGy75GZVjTL8oJDCC%2FcdsKJxY3P6N8RdgW5x8%2BJUVSFjbsBQPtU3sqZ5syNopys%2FuUNG4Ui8A6bGhD4QCYak%2BsYLQVwYH7&X-Amz-Signature=d21974aac3f75f6b1f614561e41f2139bda0bc658f6abedfa83fac53b3cd4130&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHVSK7J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIETSTgo0U%2FHmx%2BPRsDNosqcKVwFQSUfaQh5X47TQCXnlAiEA02Rorvkq2piJSFuGDiUltFcmWMerR%2BMCluHy6mjmEJQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBX7gYt7zuISObNG6ircA%2BucTow9eCt4KDHsYjRBLFf9omriEkugf1nmjnp%2BlnLEgDLI5Tkr9bpUha2FKBbfrY%2BjKcQ4To6%2By0WlPxWNkZe7klwdajM9cDTc8T2LrOrbBdQYmyM3u2UHPrNQsZkk%2FouOx63k5kYyl6HWU6ymwN2C7ckp176P7fXYZ92hAEMEdUK6R9za3zuRMqlVU%2FL10%2BT2GPhuTR1jn77oMWX6qvx8TT6KuP4A5xu0725xRSsZNXwKh%2F71KzSs8C1TvCRO8Bvvdc9ZY8KuOUvbo5rZd0KwRxsnapwel6cbf2zY8esf6VkENgqDsT6Ok6K3qS0TLP%2BCEUAvoqBdZ%2BT4KdQplMQ%2FiNKMj8SrPGuVJAiKtaVZ%2BGvAQcJbIpez%2BBa3Tjl%2Bkc3sf4135JyFah9BP51nfBOOjPeo83nQkvHMmjUQufu%2FtM3Xd4oySLa9yUbsljB9HttZAOrZH1PmBVcu%2B64TDnpf6i13%2BEMJEra89abPY%2B89gXkkHmWCeAJIWz3TwG9HyXCq%2FgI3IwHj4t2B1MFoDD2isEP5%2F%2FYbzLhMlKauZKhlPJpqBLk4IDzfo1NNjYqmQXnNGkHgurLCzGF4XGOuc3FCxDPYwspw4k8G%2FrbldrVQlF14usHozPFrPxMjMNvvo78GOqUB1SA2OwHdCMd6DA1H43K7egtguQQjbOULmn1odqcznS8BnlgYtfPnZrO4I2%2B%2BGaunHv9pQIRzFxGZddXpzNjY2FBHYJvewMEgPblLv0%2B4Cx7OXyL0JvGei%2BXTls1U17mSinzDAaZSnoqLygwr08gU1zPrLiTMnd9yLj083aLna%2Fkf%2Fxlvhr3kuP4Uip%2FXvang9R2O68lgx16IieWu2YIdBKnVWfi1&X-Amz-Signature=1962232a5913663a1fcb155b3f7caf0fb83e5432564b922d0023cbb1899ce802&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
