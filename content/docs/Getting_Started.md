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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXX365S%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNarsYedugk%2BgTVmvi9KxX%2BoNQHuo7VKbRUSuwGGzSpAIgUVMR2FemG1lfRmBVKrPLHC4zsS6R3xSh4137pbUjY0cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU8hW9RxwjKjztf8CrcA7kGiyD9xR6VeFIzBqZTvVFW0oTAwhBkljW4ta8YdOOUkYNTeF2Px3YfGhtN1yC1FlmDEvRLzcEZ5780dXs3RSX7Xhxnmvz1pB2%2BmCz9qoZEAJBnr3ewNN2x1chyOgrDS4dsxYfxzVI%2B%2Fg9pXZhrC8gnC8wANdEWf2hir0APfHK%2FZWUmS7UIrJ3LWkoKic%2BcGAX%2FUKwTvsLtyYnRa03B6XZh3hw4hsyAasbKTZC3H3gfyNcM1Psdna%2Bk8F9NP08JDnz0N44ezXLmCJpn9SWakwuA8kETpRt3VDFVd0Ixukdh%2FJpbm%2Fb%2BPLFDhciAyBunsEEQih8KjZlUd3peSUmDLhF7xCetmMa9N223MhN8RO3%2BI6JKVxCzqQYO6JInIF0PcDCSNgpcnhnVvsSaMFTAnejPX%2Fgm%2F%2BygxKaAvQ1vlBbLlZ6BvAdRek3s%2BOIFfTx3uYwkgLlTtzT%2FcVw8j7W42t56lw9E9C%2Br%2B03eqnXCfaJgWLa3gLWER7zdkkNBUGjK8guG%2BxbKeIajui7T3m3MVjULhHY4qdBW7owYBEUD%2FBrHPwbVY2eayGOwNYQElwJZcRMeC1pY4SzVrRmjj2Z9%2Byn2kneILk8yliix472jArXT1oJoFELIzhfXSdfAMJTJ%2BLwGOqUB8c5TUn6KOoJYgx4qz%2BtS24XOeH%2FBK%2FTPoOm%2Bk6vgVUzV01jzdDj79rPLcwc0VZB%2FHyGdWWuLKRRev74vvXflUO9v9LAVE3%2FReH1LnucUDA7ku12xh%2FTms31nkio7oO9e%2F%2F%2FAasxh3iBhRkzfOIdmz15vUBhPvU6CExCGm6hIBgwUaK5N7Dbs72JKQv3kUiw2alpupldcGmlejUXBH7BCMxChhJDB&X-Amz-Signature=4c53790ed69984fdcad2b6eb5f46a71074764344b4ba1234c18ef767b796a448&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXX365S%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNarsYedugk%2BgTVmvi9KxX%2BoNQHuo7VKbRUSuwGGzSpAIgUVMR2FemG1lfRmBVKrPLHC4zsS6R3xSh4137pbUjY0cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU8hW9RxwjKjztf8CrcA7kGiyD9xR6VeFIzBqZTvVFW0oTAwhBkljW4ta8YdOOUkYNTeF2Px3YfGhtN1yC1FlmDEvRLzcEZ5780dXs3RSX7Xhxnmvz1pB2%2BmCz9qoZEAJBnr3ewNN2x1chyOgrDS4dsxYfxzVI%2B%2Fg9pXZhrC8gnC8wANdEWf2hir0APfHK%2FZWUmS7UIrJ3LWkoKic%2BcGAX%2FUKwTvsLtyYnRa03B6XZh3hw4hsyAasbKTZC3H3gfyNcM1Psdna%2Bk8F9NP08JDnz0N44ezXLmCJpn9SWakwuA8kETpRt3VDFVd0Ixukdh%2FJpbm%2Fb%2BPLFDhciAyBunsEEQih8KjZlUd3peSUmDLhF7xCetmMa9N223MhN8RO3%2BI6JKVxCzqQYO6JInIF0PcDCSNgpcnhnVvsSaMFTAnejPX%2Fgm%2F%2BygxKaAvQ1vlBbLlZ6BvAdRek3s%2BOIFfTx3uYwkgLlTtzT%2FcVw8j7W42t56lw9E9C%2Br%2B03eqnXCfaJgWLa3gLWER7zdkkNBUGjK8guG%2BxbKeIajui7T3m3MVjULhHY4qdBW7owYBEUD%2FBrHPwbVY2eayGOwNYQElwJZcRMeC1pY4SzVrRmjj2Z9%2Byn2kneILk8yliix472jArXT1oJoFELIzhfXSdfAMJTJ%2BLwGOqUB8c5TUn6KOoJYgx4qz%2BtS24XOeH%2FBK%2FTPoOm%2Bk6vgVUzV01jzdDj79rPLcwc0VZB%2FHyGdWWuLKRRev74vvXflUO9v9LAVE3%2FReH1LnucUDA7ku12xh%2FTms31nkio7oO9e%2F%2F%2FAasxh3iBhRkzfOIdmz15vUBhPvU6CExCGm6hIBgwUaK5N7Dbs72JKQv3kUiw2alpupldcGmlejUXBH7BCMxChhJDB&X-Amz-Signature=11945c6f4724a84300e283ee29616c7d79a1b087c1b7df26f142814c4ebe0f87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245NH7IB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ5pXMxQ9NMpc5VIBDzuO7qr2WknlouZdVALqRrcwQgQIgQ5nYsslYa4clW2MQkqcTML0yzNybyVuVCRtvtwlQ1OgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbUG80SgKJFdWaSBCrcA1MQE5mSn44RZsmzW2G1Jjwh2dvawrxgICq2LSdBWBdSvy%2FnKI%2Bc2TYcmqSHQWmUEwDZvR%2BV%2F1b3tH9d6FWmgdQNw26LjWnlDN2dAsE3iz1kALR%2FvJ2VpuuShIx41TmjFg0blpjgCSopZPKzMLPzD%2BZPHQOD8LDwWlBQSpSbFhnfa3S7Qn%2B5bCoQI6XcqgF902SODFHPmh%2Fu3M5QGULk5njBEIuNLhEF4HVg6G%2Bx6qBfANdvQpu4MzjvMjxe9Ocml2fNVCot66iFi2j8k0JCsVWxU6%2FHwPzEzRntjE%2BEwVRoi7lV08H9S%2FDRwySn7VpQI9JGZzMNQGkb4fhEAhJsgG0ZRL6CHfPkTaB%2FIe9dOPWl%2BgT8AuIEx6LxDCXnl0zrvwrF84XAJJBWkWSfJ0IRXQfRG89nYUb48zNNuv8pBrEHXqzyTVz0m%2FNBXxzGLbhd80XOOBrYcSVzTrTDNPBVOfjE%2Fxb890VbI2hH9E7Bn%2Bmb4EmqZDfnS03Gu6NYvbldOHJsvXr8ugUnqWsAOUx7TI0xw%2Ftwe57Tm3xzLl1F%2FpcgsmqwjT2fDUcaZnqaKZQQMPG7i9F9FOj6%2BWzohvxnUYrFGoNJbncr5zOYgTIojVXfw2xbQiz3iZcQnWgGMObJ%2BLwGOqUBTRxOjxM%2BVOmmeiXIp%2B7fTI0Av%2Be8Bho4o8px8CZcPJP%2FDyrM1Gxd2yvPnFUqm0tvSrQxNBmxFjlUU875NZfehfGDrdsv7V%2BudBW%2BZ8VGwWmZbNKg%2BjG2uS%2FSMF5PxOIcrMrRDCtZZVB%2FHM9eNlYO2i7lpS%2BO4rEC%2BmO2E3KA049yF11MMvNUdh4Ah13jAx2%2BO%2FV5jV6nejcZrPUWJva9tPSuqljk&X-Amz-Signature=2ca53c31942fc69a1bb094626441ed88879ca91ebf3104f568b655a7c264059d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRH3RED%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlNxSOCfHS2JPHDimPhZFkjz8sL5nbY2sB6ddY%2BvAu5AiEAxyI0JWfyTI%2BggQug7Dje4qv%2B9TAhv9aY1lwPJJOcbKIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDER3s8Hky0HHlRUCmSrcA3FiQKxBi8KAAGP9eNTas5EKExS9EzlN68tNbvCPHZr1iWLoo2po0Z8jWrbWz89%2BUJht%2ByYlDlejnkb9enpjxnD%2B70%2BnwtuoZxUA%2F%2F211UQRC%2FGcsJTorlGjCgFZ11%2FuWXZlwUdw%2FQ%2B3zJgvM76gJsrnkWv24%2BnVeg%2FazzZ4w0tqCObDLZVERWz2Kvd8fTOIt8RlXCbKg%2BywIGx13zywTJVBznMbULsT%2FZyyibZQYvvVM0eAJk9FmWnxwaIWMouyybZaB1jPtWIG77bR2zUvB%2FWbSbCD1Ndiy29PezQEBlQYBrI3Z%2FbPLj6wgH46SiBLKFkkUQHd9tPAn4Aiu3MNxlCrRNtVdUmzJKY%2FUBlyK4wnGZIz5y9QE6NkAuJ6JcSc9PNwY2HIu19bX7Y3XLTrlMQSr9JAD8ZDD081UjMiXVyrPySVjXbfin9krJzap1jLYav%2BHFDozfO4CkW9YSR2UyFXGAFVQhtDF89a6B9Z4yJztCJpXJYBOPSH384E1GLnJS5WRs6ELU869Wz0Z2Ykm5IKBESa23%2Bnp44NZYzYeEXuYMa7prNxv%2BbQBF4QImR36v5U%2BeudmKJ%2FUoY84UCqoGuNlQ3Db3cv4W%2BGrx4cH%2BQp9DK10gYlihJluZj%2BMJ3I%2BLwGOqUB78kdl35lj0iDLy4zm1zPYbOe0OLWbz7p6%2FXhfPxQfwiURYUpqjBpMrYIjUt3Z0%2B0Zubvp%2BE%2Bu3I5aZEBEPSaTM0siejVrZHkuGuoCtDXByG5BFn7oJW%2BH0wlshQ8505xEs3A5DNLOvulXHZmEDeGHT%2BVU%2B22UpWHah6fxlGk6iMZgY6DWwdMwy1jq%2FqDyXrZkCSavug7mjmz9q6AZoy5YbGC84DI&X-Amz-Signature=7926e1a0378f24b61295f19dce0a48aad3234f7ef9c2e520f570f63316249b63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXX365S%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNarsYedugk%2BgTVmvi9KxX%2BoNQHuo7VKbRUSuwGGzSpAIgUVMR2FemG1lfRmBVKrPLHC4zsS6R3xSh4137pbUjY0cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU8hW9RxwjKjztf8CrcA7kGiyD9xR6VeFIzBqZTvVFW0oTAwhBkljW4ta8YdOOUkYNTeF2Px3YfGhtN1yC1FlmDEvRLzcEZ5780dXs3RSX7Xhxnmvz1pB2%2BmCz9qoZEAJBnr3ewNN2x1chyOgrDS4dsxYfxzVI%2B%2Fg9pXZhrC8gnC8wANdEWf2hir0APfHK%2FZWUmS7UIrJ3LWkoKic%2BcGAX%2FUKwTvsLtyYnRa03B6XZh3hw4hsyAasbKTZC3H3gfyNcM1Psdna%2Bk8F9NP08JDnz0N44ezXLmCJpn9SWakwuA8kETpRt3VDFVd0Ixukdh%2FJpbm%2Fb%2BPLFDhciAyBunsEEQih8KjZlUd3peSUmDLhF7xCetmMa9N223MhN8RO3%2BI6JKVxCzqQYO6JInIF0PcDCSNgpcnhnVvsSaMFTAnejPX%2Fgm%2F%2BygxKaAvQ1vlBbLlZ6BvAdRek3s%2BOIFfTx3uYwkgLlTtzT%2FcVw8j7W42t56lw9E9C%2Br%2B03eqnXCfaJgWLa3gLWER7zdkkNBUGjK8guG%2BxbKeIajui7T3m3MVjULhHY4qdBW7owYBEUD%2FBrHPwbVY2eayGOwNYQElwJZcRMeC1pY4SzVrRmjj2Z9%2Byn2kneILk8yliix472jArXT1oJoFELIzhfXSdfAMJTJ%2BLwGOqUB8c5TUn6KOoJYgx4qz%2BtS24XOeH%2FBK%2FTPoOm%2Bk6vgVUzV01jzdDj79rPLcwc0VZB%2FHyGdWWuLKRRev74vvXflUO9v9LAVE3%2FReH1LnucUDA7ku12xh%2FTms31nkio7oO9e%2F%2F%2FAasxh3iBhRkzfOIdmz15vUBhPvU6CExCGm6hIBgwUaK5N7Dbs72JKQv3kUiw2alpupldcGmlejUXBH7BCMxChhJDB&X-Amz-Signature=f6b7517d700544a21a1b1cca1fe2bdfdee677f7489635fb22df47075c2e8413e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
