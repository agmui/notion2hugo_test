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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLB6VKQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJW4fS%2B8KKcyGxqH9TmTQf9X1XZXgJeD5RcL2B5f9rUQIgBHq%2F%2BJvqskb9qwtuwjZq9CUTqPnWHkbKWBWa34%2Bt0fYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOegpySul6wtgrq8zircA%2FIJq1fk3oMMy4INI%2F7tySjvJfF%2BBPkWdkTVKU39j9ZRcjWBdgTwoa2XCEjPZSvgP9w6wkMGN2lw0B%2FyBf4wLC5f2tMF20yPNHcVYa9%2FgU6v28UnPMGj%2FcCO4p1bXR%2FMHeLojXkHq8Qkbv%2FRKmccckd9nKe5cmCI%2FPzHy2tOez47YOpYrkRxfLTjWzLkVFwoQ6uYJhVNsfkm%2B5EwAWBwECglYKDsExoEG%2BT8rEw4%2FOSo2wpDe7KD2YdG34jYu5C7p4z07b2Cs48xQ%2F6vYsBfpg6XFe7jY2YCjdUQfjRaF9OVTT4JubMGgmvYUhcgYXpTjYX2%2F7okLHvJy6oHajrFkCZqVzn%2FWcM%2B1rlgpdyrms%2BDZVAPUseKxgtzCizRqc74s8FGfGbwy8r2JnTZZyxOtcWhPgo6qzKwcj8KSpXYdQTh3F49drm29CCM2tr3eWU1kKIB8ybCcP3GbPCbWk8ydPlI8Zg5efG4cl%2F0qAg3fIueo6yT2KGp2VJxifDKaKBoflcA4h122h9d5CWcQoabAaTaBtZCvheudn8KqgbAFI5AZa3RH90M9Htq67LzN%2BFA71z%2BPRd03pzvncJuwvcBKEXE95VrIF132yUbtR%2BXq%2BC8rcm%2BGToG4R2QYeHEMKyLir8GOqUBzO3lzZLlDTHf88PLamdwZEw52nq0vzm139tPe0VU26XL2yc%2BhIH5Qj8vXeHaaWtTwObpTML3FQe4U9Dd%2B1yw%2FzFFa8N6n1bMBKTfe0S5JSWpoX58Ee41hbk8T6R0xyww%2Flg%2BBXjo9Nbgk%2FviS%2FIhkAyqlnrNcQIjSoHCioehXdYbTvqhZ2B%2Fsynk9uW05btF78m86c7MMnnuPuGLQwYL1Tr7a2OF&X-Amz-Signature=2f466d8c7bc7e28e9c8e5d87d516bfb16f25cccccf34a7d30113989811ab5361&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLB6VKQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJW4fS%2B8KKcyGxqH9TmTQf9X1XZXgJeD5RcL2B5f9rUQIgBHq%2F%2BJvqskb9qwtuwjZq9CUTqPnWHkbKWBWa34%2Bt0fYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOegpySul6wtgrq8zircA%2FIJq1fk3oMMy4INI%2F7tySjvJfF%2BBPkWdkTVKU39j9ZRcjWBdgTwoa2XCEjPZSvgP9w6wkMGN2lw0B%2FyBf4wLC5f2tMF20yPNHcVYa9%2FgU6v28UnPMGj%2FcCO4p1bXR%2FMHeLojXkHq8Qkbv%2FRKmccckd9nKe5cmCI%2FPzHy2tOez47YOpYrkRxfLTjWzLkVFwoQ6uYJhVNsfkm%2B5EwAWBwECglYKDsExoEG%2BT8rEw4%2FOSo2wpDe7KD2YdG34jYu5C7p4z07b2Cs48xQ%2F6vYsBfpg6XFe7jY2YCjdUQfjRaF9OVTT4JubMGgmvYUhcgYXpTjYX2%2F7okLHvJy6oHajrFkCZqVzn%2FWcM%2B1rlgpdyrms%2BDZVAPUseKxgtzCizRqc74s8FGfGbwy8r2JnTZZyxOtcWhPgo6qzKwcj8KSpXYdQTh3F49drm29CCM2tr3eWU1kKIB8ybCcP3GbPCbWk8ydPlI8Zg5efG4cl%2F0qAg3fIueo6yT2KGp2VJxifDKaKBoflcA4h122h9d5CWcQoabAaTaBtZCvheudn8KqgbAFI5AZa3RH90M9Htq67LzN%2BFA71z%2BPRd03pzvncJuwvcBKEXE95VrIF132yUbtR%2BXq%2BC8rcm%2BGToG4R2QYeHEMKyLir8GOqUBzO3lzZLlDTHf88PLamdwZEw52nq0vzm139tPe0VU26XL2yc%2BhIH5Qj8vXeHaaWtTwObpTML3FQe4U9Dd%2B1yw%2FzFFa8N6n1bMBKTfe0S5JSWpoX58Ee41hbk8T6R0xyww%2Flg%2BBXjo9Nbgk%2FviS%2FIhkAyqlnrNcQIjSoHCioehXdYbTvqhZ2B%2Fsynk9uW05btF78m86c7MMnnuPuGLQwYL1Tr7a2OF&X-Amz-Signature=5a3d9e84f928d8d18e6e0cebc7ddfc80798dbee8070cdd672ecb8f35efb3e375&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LIBXD5A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbuV17B3JTCHs%2FseZnOqhF1NwSTjL2t4HytukbtumV%2FQIgLc3SoCSzd%2BDzMgxY4FJCsAm3urePsqQORttgXSefEkYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIfFCZiBNzihnXrXmSrcA%2FPiBs9Ne7k%2B3EyCzf7LNLHgvZ8F2LvMx5wLXFLLVEBSLww2ANEYwumuVQHzqksmKOVjB1E10qfrUMhHapk08qFbVdXIyz8vj77exlQ1YCox1U9ihEJ0KBqODAuYcTO0tVg5l66DsYn1wwMeki4IZCQH%2FIlzCH0fjRqeWfY6E96%2FtMygFphHvYHP%2FdGOIvGW5VLCZ9of2xvXlsnjGZ5oDg6XcWQ9wsawrdkgtLhFWdse8XV%2FuBDfs1P9ZojaJ0v9gap4kHj6BudcZX4ziLjr3nGnsY4bdcyu4ZeOGBUC3BzE63PRYL%2FDFJ2PlTtRr6WDvDHKZF%2F35aOoQoE1HZjdkOHctqc8qriCC1PsTFVGHkDSaRTrqnylSrR9ZXvyUh9ioQAIckTN%2Bcf0lPw9kphcVpY3wjvB1wPHft8yW9oFV3Y4qpqOT6R%2BZsMcL6O1JPC5dju4KJKJYrH1EDsQ5RXj2Db7K2r7KWnelx6yCq7z%2FWaPgwRYNsinD%2BNpYNllwepCMbRHccWYMS1kav2lVw0XTDexws7WlayQ2dx%2FwsuIq14V9E%2BJXhrfh5CeLnczafrI4gIhZgMQFMp3BFzKic2MLSXzka6L8o%2BfbaZbXYyqSY%2Bg%2F9Hjm5bLFam4aWl8MP%2BJir8GOqUBovwo7aJty5be6IY1F1FNUGcJPwAFcBA2HiegWTigkaqu9BHM1j1dQgL%2FtCAk9%2FiiD2GMwhFdxUGOldrgxHgOpcgBeE48FI%2BHp08GKlelTe8ANzp9bBbvop7bI2dLpnnd1iO2buD8Y5X4D3WCnG%2Fiu3vsHtpVOztx1QVBfLjhCrj4Ty8bJxXN4P4ome0e2W5NwBUScW2eZb7vieOUAKbWtIfAamex&X-Amz-Signature=149b7f364c0b4f6952a413561517a5ca6bb2befdf3996b646db30a85b7964b34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ5S2UJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHJ368U%2Buvpzqg7perfNhh%2B7AOvA0jcT5HInHpAXumzgIhAKkToAQJnBWA77bn8lYnro1NxYOAH2hxwOvDxQLWsRL3Kv8DCBQQABoMNjM3NDIzMTgzODA1IgwVhNclhl8fM44wO5gq3AOHY%2F6CU%2BBSLKSsz6jm8ndTcFMXdeQpkEfZ8G1m%2BVa5552hvjiYDJFhRpLqeQQwBNUQuTMeMBvaqlFBJ3%2FKtq6nKLLVhbcYgPnCKYfuXBAju%2F1Lf%2FNRERyEiJdzfkmPyGDKxWQIXkmxSlb5AmVAbMj3VDDAm%2BIg2gofbNbwPHRVanBPAberFj3Pfmc88%2B5LfKmsJPT7hwxNmOCI3eH1BgMEDO7ItvJ5Com9z5K0K8aw9Try9JHbg2VgHvp%2FY4Q%2FI%2FjYTMb9kB%2FLzGShevHAjqaoZxnJ4wzbaQ83A75VtGZAnK21w9aaRqMNKuT%2FCwVSx8H2btAHX0YbEIPlP%2BCTeeg0M4bTnPjWkV1W57%2FVAEcCwFKr3MohttxL%2FPoRxQVbJD5m%2FeIfEE5zvQgmdVRpfi2Jq5BPxgCireYHIOL9zggltJWplZITm%2F0CRzAe%2BXaWPzJr99bBJPNYFof05JC1K8N9YY0Gm33LHckSRNCFB%2BpoCBkimhoyb1wp%2BtHWnBNEogpXE96WGR3PNXmADjiXDPsoz5Jpl6HU0uZK8JqTvbfIErKTVPZ4H8HEnsca1vcAp0G%2BdZyItZ0whFBVwR3atbL9wS7xzR0GpCud4XlCS5Q7MoZMy6ck%2BFtaefbezTCFi4q%2FBjqkAQfOVnQoK1S%2FSTs6MwgAxn%2BkopSqYgmDrnr%2BM01GtpsKSzYnu0xwoUXcqALewTiwnYq0iimwQ5Zu%2Bh%2FTrxBgkdgyChoLLTm7v6xX%2F2T%2FomT%2FUrTldc3J0fyWol8%2Bh6kgcyXfqrKAnvNOmg4nWAsDH52%2FN2ksxGEwb8EwS6a8305I5q5aLYJT6RJC%2Fv4KwuFu6rkY5ls1vlIjQArA1DDydiPzv%2BSV&X-Amz-Signature=101d81aa95cb52656304b1aaf4403d7681278a2acc8ba7c510d2a534d7e97c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLB6VKQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJW4fS%2B8KKcyGxqH9TmTQf9X1XZXgJeD5RcL2B5f9rUQIgBHq%2F%2BJvqskb9qwtuwjZq9CUTqPnWHkbKWBWa34%2Bt0fYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOegpySul6wtgrq8zircA%2FIJq1fk3oMMy4INI%2F7tySjvJfF%2BBPkWdkTVKU39j9ZRcjWBdgTwoa2XCEjPZSvgP9w6wkMGN2lw0B%2FyBf4wLC5f2tMF20yPNHcVYa9%2FgU6v28UnPMGj%2FcCO4p1bXR%2FMHeLojXkHq8Qkbv%2FRKmccckd9nKe5cmCI%2FPzHy2tOez47YOpYrkRxfLTjWzLkVFwoQ6uYJhVNsfkm%2B5EwAWBwECglYKDsExoEG%2BT8rEw4%2FOSo2wpDe7KD2YdG34jYu5C7p4z07b2Cs48xQ%2F6vYsBfpg6XFe7jY2YCjdUQfjRaF9OVTT4JubMGgmvYUhcgYXpTjYX2%2F7okLHvJy6oHajrFkCZqVzn%2FWcM%2B1rlgpdyrms%2BDZVAPUseKxgtzCizRqc74s8FGfGbwy8r2JnTZZyxOtcWhPgo6qzKwcj8KSpXYdQTh3F49drm29CCM2tr3eWU1kKIB8ybCcP3GbPCbWk8ydPlI8Zg5efG4cl%2F0qAg3fIueo6yT2KGp2VJxifDKaKBoflcA4h122h9d5CWcQoabAaTaBtZCvheudn8KqgbAFI5AZa3RH90M9Htq67LzN%2BFA71z%2BPRd03pzvncJuwvcBKEXE95VrIF132yUbtR%2BXq%2BC8rcm%2BGToG4R2QYeHEMKyLir8GOqUBzO3lzZLlDTHf88PLamdwZEw52nq0vzm139tPe0VU26XL2yc%2BhIH5Qj8vXeHaaWtTwObpTML3FQe4U9Dd%2B1yw%2FzFFa8N6n1bMBKTfe0S5JSWpoX58Ee41hbk8T6R0xyww%2Flg%2BBXjo9Nbgk%2FviS%2FIhkAyqlnrNcQIjSoHCioehXdYbTvqhZ2B%2Fsynk9uW05btF78m86c7MMnnuPuGLQwYL1Tr7a2OF&X-Amz-Signature=901167704897870d6a9a7f2f93246ee98757542f297cc4d84091c3c20750627c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
