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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGC7ZG6C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCICSQMsaFZIvl1hFfVjBKojMUQ761D7rZchatvg7Qv9eqAiBZ3BVlogO7kyVGUzm6vfCEDyLNm7T8s4iuIzViK%2BOwtSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf3qiQURFEp0NxTPqKtwDGLcMxyvP7NpwmHUXCxsqxHLHMWbrLkGLzL0k64%2BibmimNcVaxgrDRphZDfczr0spasyCzznCGj0SuLMUPBLJyhzgyoERky742XeJgWKosMqQLX6bsugzAMD9w%2B2aG%2Bd9mptMnXUCfmSJpyTWsCAt%2BFszx5rXfkU2LhXgBRDN%2Fk1QcOdVJ8dBHNL1S2eJS8408p9uXkPOeuF89z4LjI1dVUUUEBS0gMgb2TD8BWzh4M6TDRGC36sS59s15BlmCKwObUzOTvDcMB66Deuz8aBoAeqwW2HJaFgqx0GHZbZlOUo%2FnK4m3N7tTHioXL%2FOA9DVhz4K56J0vCsPFqt%2FeXoR7BfstRlo25yRyuqspLK5xysG802zdGqUNX76vk14vUoaFCjhaC0qretCEcRUDt43brTfILxg3m4aON6rjIfNE0XH4OYL0rtypxwPlKe8oPrx5no5OJn5zckq2y44IuhZ7zuKsA87f4hMorDhzh3C2nZAe1oW7nNPnm8JINZpeoXTt86KjUqHf8PAo4kAlQXM42C3WT6dFydL%2FfNdUZhxKnAtzcsP8caJhIbCy3mqhi9DUFQ%2BBgkvoLkTcszMs84XaiYu6x51ahoetPySUImaiK2YxvXbEiMSJHY9ZkMwrrzWvQY6pgEB%2FNLvq5hPmfnn9OIZnZ2VlZ7SvLlHKvskQR45%2BbykRDorqvJ%2BZooScEysXKhu1x1RkuhF147%2B7jj4eAdXCMoUfNG1PbwWv81NdWtVwhtHjeskK7NwVso1sIwKaIXmOxMx9AYEefDMBTvPI2F%2F8ziAiIc1r5VzXAdxyiBhE%2B9hBnYPOKQy6j9qud62ZQWWuzAFuTKutKuaFrXJf9ikZf53qwRKM6%2B5&X-Amz-Signature=f2afcedeba27bc35068c4a15c09a02f374ff85787d1dfeaf00d7ec1a6d9e6fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGC7ZG6C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCICSQMsaFZIvl1hFfVjBKojMUQ761D7rZchatvg7Qv9eqAiBZ3BVlogO7kyVGUzm6vfCEDyLNm7T8s4iuIzViK%2BOwtSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf3qiQURFEp0NxTPqKtwDGLcMxyvP7NpwmHUXCxsqxHLHMWbrLkGLzL0k64%2BibmimNcVaxgrDRphZDfczr0spasyCzznCGj0SuLMUPBLJyhzgyoERky742XeJgWKosMqQLX6bsugzAMD9w%2B2aG%2Bd9mptMnXUCfmSJpyTWsCAt%2BFszx5rXfkU2LhXgBRDN%2Fk1QcOdVJ8dBHNL1S2eJS8408p9uXkPOeuF89z4LjI1dVUUUEBS0gMgb2TD8BWzh4M6TDRGC36sS59s15BlmCKwObUzOTvDcMB66Deuz8aBoAeqwW2HJaFgqx0GHZbZlOUo%2FnK4m3N7tTHioXL%2FOA9DVhz4K56J0vCsPFqt%2FeXoR7BfstRlo25yRyuqspLK5xysG802zdGqUNX76vk14vUoaFCjhaC0qretCEcRUDt43brTfILxg3m4aON6rjIfNE0XH4OYL0rtypxwPlKe8oPrx5no5OJn5zckq2y44IuhZ7zuKsA87f4hMorDhzh3C2nZAe1oW7nNPnm8JINZpeoXTt86KjUqHf8PAo4kAlQXM42C3WT6dFydL%2FfNdUZhxKnAtzcsP8caJhIbCy3mqhi9DUFQ%2BBgkvoLkTcszMs84XaiYu6x51ahoetPySUImaiK2YxvXbEiMSJHY9ZkMwrrzWvQY6pgEB%2FNLvq5hPmfnn9OIZnZ2VlZ7SvLlHKvskQR45%2BbykRDorqvJ%2BZooScEysXKhu1x1RkuhF147%2B7jj4eAdXCMoUfNG1PbwWv81NdWtVwhtHjeskK7NwVso1sIwKaIXmOxMx9AYEefDMBTvPI2F%2F8ziAiIc1r5VzXAdxyiBhE%2B9hBnYPOKQy6j9qud62ZQWWuzAFuTKutKuaFrXJf9ikZf53qwRKM6%2B5&X-Amz-Signature=ffc9a8bdf9e22776d0beeaeb8450228f99036f6a59819850f4908a625fb670a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6UEQKB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAE1Y7LmDlVvpx4hpXg2q07c%2BeXqRHFLtU0mH9gpEf8kAiANvwKLbwmkYZ9RWrf%2FH05LfDBUH7EDAt8hDksvQBvUISqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh05IS428Dr5pucM%2BKtwDcfSeo6zx1CJ09C4y0ePcuJSCaETLDG6538k7RBO62Bf8uCtmlkNw29lvytUXF44s4D6zGPY%2FsLNBdUzJMY1TzcpCHkUOblYUfJu%2BoIJaZItjJJv93J9iDvXvNH0GrG9vpnqaL8I4kG3N4QnHdLhb1jtrGQnYMzObwdb0%2F1VxR%2B%2Biq48cajQPzq1bqOWvSS2jv3Sbz%2FA3frLSmZeYdk7S4%2FOZ4%2BDAtp5kGZKaEzymzh6%2F8OPQjg%2FwGGNDzPuICAfUHnVO6sus%2FqLd3HYiNcMaoNLgk06mn1GlIgBLI07E%2FLG1KPewDHJEuyKe62UlnyHlmPhB9YN6vgCb2%2BiXrjivlosL4y8fIoC33JjOGuYGM2%2BJJZJAEMiYmQs5KCVEMgFUZXgVN93ksSbBWkQVQ0Fn1H7ppCjzFwYUSnKvlrzgx6mLdi4Qredfr2S1eUxJnkBsrqYWMuRxUY30v98crPmJdgOPIJoJRUzKPSC2Rutwf2zLRxtJp73elA%2F5r1g7qMLhzEmy6gKKYyHjmOTuf2LrU5ZY5z8gNyr%2Bnf%2F9F6sEDvUisLhVZ0Wr1JQfYYfV0Gld%2FbK4sm281SuuZcc5mG6jZIv87g%2FZZutWvxawm2pMCretQkvxKsqj4rCzIUcw37vWvQY6pgGVPl2yKoDWECJRvWKNBUfkn1aGbZN%2FpyogaZaFyOFcOhvAZzjqFzrzRw1cguxlV6d60ZqFAcx8ch1e4911D7Mul7GNrPMtYO%2FVbR5yA%2B6rEa9aXqQ80Hvmlyvp1236xWYSxewdZ%2F1jhB9cSkZobj4Tj9eM5rEVEP4gw9E1G7KTyaIGJjkqKp40qQTpIhJmX2waucvpBkIQuWUgCciNU4Yg8FCRiGss&X-Amz-Signature=89124f8626d7f7382d542ad95b9e903eb0687d257185a37e20f14559f59d68a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVXPMHA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKQzug9eqoPcGohGT0vJJ67CJHt9yjopZpSBQKUAWQXAIhANhEAEDSvJj7X8tQfjTJsBrYFAM%2FpvY5GoN1CTheKNzsKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz99vhopSKHbyU11YUq3APvhmqH%2BlUpvL0lMM9hPQ4o%2F8p1PgEa4bGxDAVYrYyO0pGlkZuAvDwbxF5xnMxez5gGqnOXtGdILlT09Ih4ax%2BV9L6tVMxpTUrsZf%2BchWMFKtokXC70rgmIqOBPAGNSpPI%2FNFOAGzU3VjH49kEPkoBnhPWpaXCBmJd87FBgg19I%2BmscOw3Jmc8hVK%2FXzhV4N1IYDalNjBTL1DPKsJAliVKG%2BsGAkjUaykW46FsmTtXDWPSJzoBDpV9XV%2FScm5ufPC65CCB9sI4SI7LVCwgzB0fN7oRyTFjj1zOD66pnit%2BZPy8pbX0mi1ya00vbeE%2FV%2Fdj3yTaVmVaErTzF%2F0CjMlG8h0z59UjDZR6osFVjWCe02qQuidAs0EUdU3N4RZ53PkKU6U0QrvNKfiQdy%2Ffo2woWjD08OX1F034tMQcx7dPPsbzfcitZJDRtk8LI8q0gKzbjOeWXvlYqKYfg8gqOcRa2XnDqeqf1uLN6ztsd8DBJaqmW2xxwlRxbG9VsGGl%2F2NAbFQMGQ5epYVXptY4jdXyXQkxvG4LgcWakGUrM42qY7eRSB7QnL4sNH4p695%2BbtJBE%2Br5R7JC%2FxSz2CqRokXIYxWkCqj6ydqeKy6ds%2FF6PxRDiaZmAK1tCXikkXzDsu9a9BjqkAbztem3S6ZAKGnjARbDNmgEm64ygnJHeHOGnnoC9RvRdqbHEM%2F6daGUFWI04F2Z7VuGad77a1nkIitrr%2FBlNGOGU41XI9F20JqqidvyL0nSKCwhqpt5hMvAyFKG%2BI78f6M8FyiOD%2Fw%2BR81RYBElT3Qce63kJT8ZktTbl5rvet3Jet5aACYEAVxpVnF4HGKX7XhHIKFaIYl7zoVm%2BhTJ6T0GgIuKM&X-Amz-Signature=59968c879427857e84663c6c017719253748547a1d4536bd6f087165da1f72de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGC7ZG6C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCICSQMsaFZIvl1hFfVjBKojMUQ761D7rZchatvg7Qv9eqAiBZ3BVlogO7kyVGUzm6vfCEDyLNm7T8s4iuIzViK%2BOwtSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf3qiQURFEp0NxTPqKtwDGLcMxyvP7NpwmHUXCxsqxHLHMWbrLkGLzL0k64%2BibmimNcVaxgrDRphZDfczr0spasyCzznCGj0SuLMUPBLJyhzgyoERky742XeJgWKosMqQLX6bsugzAMD9w%2B2aG%2Bd9mptMnXUCfmSJpyTWsCAt%2BFszx5rXfkU2LhXgBRDN%2Fk1QcOdVJ8dBHNL1S2eJS8408p9uXkPOeuF89z4LjI1dVUUUEBS0gMgb2TD8BWzh4M6TDRGC36sS59s15BlmCKwObUzOTvDcMB66Deuz8aBoAeqwW2HJaFgqx0GHZbZlOUo%2FnK4m3N7tTHioXL%2FOA9DVhz4K56J0vCsPFqt%2FeXoR7BfstRlo25yRyuqspLK5xysG802zdGqUNX76vk14vUoaFCjhaC0qretCEcRUDt43brTfILxg3m4aON6rjIfNE0XH4OYL0rtypxwPlKe8oPrx5no5OJn5zckq2y44IuhZ7zuKsA87f4hMorDhzh3C2nZAe1oW7nNPnm8JINZpeoXTt86KjUqHf8PAo4kAlQXM42C3WT6dFydL%2FfNdUZhxKnAtzcsP8caJhIbCy3mqhi9DUFQ%2BBgkvoLkTcszMs84XaiYu6x51ahoetPySUImaiK2YxvXbEiMSJHY9ZkMwrrzWvQY6pgEB%2FNLvq5hPmfnn9OIZnZ2VlZ7SvLlHKvskQR45%2BbykRDorqvJ%2BZooScEysXKhu1x1RkuhF147%2B7jj4eAdXCMoUfNG1PbwWv81NdWtVwhtHjeskK7NwVso1sIwKaIXmOxMx9AYEefDMBTvPI2F%2F8ziAiIc1r5VzXAdxyiBhE%2B9hBnYPOKQy6j9qud62ZQWWuzAFuTKutKuaFrXJf9ikZf53qwRKM6%2B5&X-Amz-Signature=a3728788ea8874c3000556e6827af745859d4eb8290b3fd923859c50f7a954d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
