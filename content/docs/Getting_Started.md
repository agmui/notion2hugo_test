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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUODD5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJHj%2BxewcJg9EPISkciwLA7kr5qyIoQ66Erc3vKalJEAIhAMmT1ECVLWrMmAhZSsewVHZ42AI2sjASmaGbq51qjdoBKv8DCGYQABoMNjM3NDIzMTgzODA1IgzLpQsp4YuexkK77vQq3APSGPgXVhbtCmeiCwVvuW1yd5XkMjUcEUzy09BPi7aXuzZLBesM7UU72m4VtO4bWsLGttHSMksEpEVn1hWZYLTQhVpOvSIGFNKGB7juFJKEFUZilPU3trSkDzfW7srji2ve1Gqz%2FNjnrsgAW%2FCDvGk%2FuaDGcR3x4Xv%2FFJ%2FCObibKGB0TW9HPvL0HTz%2BF4K27GI5pndDYS4WUSqPhqaLmljX4%2Bm6OERfFzacQja3JTlU3yxET865LpdaXAOVMYUn3UNbU2o6t5u66zjVZ0xQuvor2XKhxdG3G8V2rlRn1OcGlgzMd4hV8sR7t9zm5X1rxLOpGyyQJkqgYHFgpKAW0rDDAWacr23mHQZYCzhMjaQsumrTIPxQvmp6mKHqf27%2FoPpSw0P9xUQisiPJZCY0gmqJQcm0lLO%2BxgDdObPOzxcJroH%2FLcb8Mota0MC9elDDVoOfM%2BDmxFERo4QTIgxxxcZYqZD8xTgQaWQmAJRkcyxB0jfZcbfjqdH7JxMQYgfFYp7PWEy2qb4hyPRgclajt8YSlvXPkVp9PWBRFqw9Sv1ztH0AlzT8b7XwvobHlvSY3aGI5pFyNPbyiefSvTom%2BvPUovb3VcE1oQGUrkJDX%2B38lRfjXd2FohNQZECHiTC2jpy%2FBjqkASFWrgDccBFxLGqawbAfmCn1yTI7EX6lIWKI%2Bj2P5Pv5TP7FW3gXqYvjYd1DRWELfcNNNnh2HLn4C3BMDRlKxReUAYToTmgTNbVySXjCPxekeCbV4luLYEFbYuLkr2OnzUJCbKPVKDBBKmHz%2BAgdaB0poiWMovma4mLimx1cmNvplYhSbjZ92NfkrNL06qhZ3%2BU1Sp9xEbRlYTPp33VTRPZoeWZO&X-Amz-Signature=99d574292c055e176669b191ebf742615d1db1001b93dc42d448c8fa82fef215&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUODD5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJHj%2BxewcJg9EPISkciwLA7kr5qyIoQ66Erc3vKalJEAIhAMmT1ECVLWrMmAhZSsewVHZ42AI2sjASmaGbq51qjdoBKv8DCGYQABoMNjM3NDIzMTgzODA1IgzLpQsp4YuexkK77vQq3APSGPgXVhbtCmeiCwVvuW1yd5XkMjUcEUzy09BPi7aXuzZLBesM7UU72m4VtO4bWsLGttHSMksEpEVn1hWZYLTQhVpOvSIGFNKGB7juFJKEFUZilPU3trSkDzfW7srji2ve1Gqz%2FNjnrsgAW%2FCDvGk%2FuaDGcR3x4Xv%2FFJ%2FCObibKGB0TW9HPvL0HTz%2BF4K27GI5pndDYS4WUSqPhqaLmljX4%2Bm6OERfFzacQja3JTlU3yxET865LpdaXAOVMYUn3UNbU2o6t5u66zjVZ0xQuvor2XKhxdG3G8V2rlRn1OcGlgzMd4hV8sR7t9zm5X1rxLOpGyyQJkqgYHFgpKAW0rDDAWacr23mHQZYCzhMjaQsumrTIPxQvmp6mKHqf27%2FoPpSw0P9xUQisiPJZCY0gmqJQcm0lLO%2BxgDdObPOzxcJroH%2FLcb8Mota0MC9elDDVoOfM%2BDmxFERo4QTIgxxxcZYqZD8xTgQaWQmAJRkcyxB0jfZcbfjqdH7JxMQYgfFYp7PWEy2qb4hyPRgclajt8YSlvXPkVp9PWBRFqw9Sv1ztH0AlzT8b7XwvobHlvSY3aGI5pFyNPbyiefSvTom%2BvPUovb3VcE1oQGUrkJDX%2B38lRfjXd2FohNQZECHiTC2jpy%2FBjqkASFWrgDccBFxLGqawbAfmCn1yTI7EX6lIWKI%2Bj2P5Pv5TP7FW3gXqYvjYd1DRWELfcNNNnh2HLn4C3BMDRlKxReUAYToTmgTNbVySXjCPxekeCbV4luLYEFbYuLkr2OnzUJCbKPVKDBBKmHz%2BAgdaB0poiWMovma4mLimx1cmNvplYhSbjZ92NfkrNL06qhZ3%2BU1Sp9xEbRlYTPp33VTRPZoeWZO&X-Amz-Signature=d145adcaaf1f99bd1974704efe70af2c100f4b19f11add866401a504f1172bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKO64HJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPqRTypzPAQENPb4rjjCIwrxNPIbXk7ojUb%2BGzEsd1%2FAIhAO%2F6cmkZjScHti7YiMOp%2B4lrgvRoLvS6gFRJUSScUy5bKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXROwZDU9dRILr8xAq3AN8%2FFA5%2F4E%2BjhEZDeEJIPI5I3iC1Rzy3qZemqpRiaP%2Bq1Si9R6u3uI5X6MmSGMq4FMR6uokaXnQta%2BgNGBx%2F%2Fgkpnu9a3A2Yo5iMs0GWX67pLjCJsDQ2vP1s6iuYhGrYnyeLrp0OgxDmZbL37A8DOcxdEBVjJc056cQPME3aZx6mILeuhXZJG42BhWPKNdRlnnj6KAQIS7IaF9ELGcKcegrD2cChpJVf7HPmNnFNDZ5kCN1W%2BINGzSGVrdh6OVUFVKe97tUGZx%2FGcyjcb4uGQIGZwuOvvH5esjLJVlhGHb7dJ2U%2FKFIN7s%2B8sLoTC6CJfu4mHVWWzpxkzjKj9q2NM9haonCyBurxlt21BxP%2F%2BuTWYccnAD4Q4QAsVfZLrRlAgeBPV81chX4bUUnWlZneqE1Cp%2F%2BwqCRAx2BgWeSXzLnlKt1A4yudjQP2JW3l6JwM9w3HzFMfNocH0xsUNj5bxBWl6js4Dv6q7S9lFk5UNQDgJY0CyF9rDiQTS2b5zGl1EQTFw6Q13S3w2nJF0uh9V5e78wL7kl2oPiBODVclJCAPgCDP%2FJBNVi6r3b4CvkwisoZ%2F%2FSZQbzaI1KfbXC9s7UsFUacnqFitNCarGJkL6BjfSRAmjGkmXZKrL0PHDDzjpy%2FBjqkAXfBdXa67AMwGQ4prOXVnPDvAOFM2nv5YT0dCsqkwNciwP4MxpcihwHO9SOyg2T3Wk7BjtwIjU2LiBsbBr1cvt0v0cxbWEoqjgwBq3pwXhIB03sxvIJMvhzz7pc61qFxqy1ywAqEEvl9bcExejDRXH%2BIyD%2Bs%2BuzecWs%2BUDtL4RlK8%2Fk7D9r93wZTiNw136PPRoRg9zcon7qEQ8wJBx%2BzMmgWIWdo&X-Amz-Signature=7d61ef0b1a949924dcc0627b975937caa01752c0a2102d815641a3148d9df978&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQW7CHL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH7rydujMWdLNik5nfIOesGA1eqsNBeE2Ir31puLr7MwIgBI81CkrSTe2iqssdSvKUjypa01LFREZrO6CdsCkzPXwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD2AZtoShySYs1MCrCrcA7To%2FSm1K8NoED8qWTyXUYr8NTB8m9RddY5fu2YuZudpBojvTc%2BWj649xRfo2CguL04r4klAmlaNs1g0xh93OAuSXG63IEKuFJ2HxsF%2BIaHAT%2FQsfNR53d9o3IytYq3ruQ8k5ICfL71AYcROO2wmTg9%2B%2BG6swL%2BmNiB0vBbv2S7FKOlK%2BmZgKddYON8sM%2FpqQjCJCTGh0DOJ8yFzCJMrnDZGSNKFuVg6%2BzMUchHF7LEaHt2ec80O2SkEvnAI4LQYVdJFsxjwcHbG8BQJOS7N%2BzFHrh3MFxKysvPp0tyFdwkqTDLC6FZXN6vqK%2BlVUe8A%2FPAGRp7K2Z74cGEenxoKCvfZ2aOaCW0ESXFNYxJZVo%2FDK2ttezsAemz00bowL%2B5TO3DZYvtmHPBMOLOn8UVpMrSpiTYVBA5N7ayVHyyd4yPbDNiYZMrfhlQopE8QFNflVOz%2Fj6NTE9eldxR0b2vLLVjZJLUsgoW%2BJjfGyPNKB84u5jIla%2BBRaZYbnsMvoGF9kmrC7Lj2JSOmnR%2FVztlB8%2BHlmULIYZrwIBrVT9uMgetSobmPmHtqP8JqkQqm5vdYXB3LE%2For8DzuU9YuvLSGUPpYsCO5oOrujiGV2125hjfcoQrwlrKG2%2FTEicb%2BMMiOnL8GOqUBhDQG0gK1mljUGVgdZ1%2BbizMR91Bq%2BRtQe5ISGR96E5EXx%2F3LfVGEvnah4iF6EwKgvP7jT8AaQUsZXKwNRk754gkk%2FkVOZaZv8i0jSmvbMBbZeysQuoJkC%2B50%2B9jHWQEZYNjxzLSMu1rv07j33DAYdwWQiv0XNQxSKE5JK0s5w9bthxeZFF2su2gurcef7luTzDCFtBHhZwWWfiK59CUDBuLBjB%2Bv&X-Amz-Signature=b82d47cdc8fa2b87a362dadf09997a5cffae8a92657eafeeb6785f257e441bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUODD5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJHj%2BxewcJg9EPISkciwLA7kr5qyIoQ66Erc3vKalJEAIhAMmT1ECVLWrMmAhZSsewVHZ42AI2sjASmaGbq51qjdoBKv8DCGYQABoMNjM3NDIzMTgzODA1IgzLpQsp4YuexkK77vQq3APSGPgXVhbtCmeiCwVvuW1yd5XkMjUcEUzy09BPi7aXuzZLBesM7UU72m4VtO4bWsLGttHSMksEpEVn1hWZYLTQhVpOvSIGFNKGB7juFJKEFUZilPU3trSkDzfW7srji2ve1Gqz%2FNjnrsgAW%2FCDvGk%2FuaDGcR3x4Xv%2FFJ%2FCObibKGB0TW9HPvL0HTz%2BF4K27GI5pndDYS4WUSqPhqaLmljX4%2Bm6OERfFzacQja3JTlU3yxET865LpdaXAOVMYUn3UNbU2o6t5u66zjVZ0xQuvor2XKhxdG3G8V2rlRn1OcGlgzMd4hV8sR7t9zm5X1rxLOpGyyQJkqgYHFgpKAW0rDDAWacr23mHQZYCzhMjaQsumrTIPxQvmp6mKHqf27%2FoPpSw0P9xUQisiPJZCY0gmqJQcm0lLO%2BxgDdObPOzxcJroH%2FLcb8Mota0MC9elDDVoOfM%2BDmxFERo4QTIgxxxcZYqZD8xTgQaWQmAJRkcyxB0jfZcbfjqdH7JxMQYgfFYp7PWEy2qb4hyPRgclajt8YSlvXPkVp9PWBRFqw9Sv1ztH0AlzT8b7XwvobHlvSY3aGI5pFyNPbyiefSvTom%2BvPUovb3VcE1oQGUrkJDX%2B38lRfjXd2FohNQZECHiTC2jpy%2FBjqkASFWrgDccBFxLGqawbAfmCn1yTI7EX6lIWKI%2Bj2P5Pv5TP7FW3gXqYvjYd1DRWELfcNNNnh2HLn4C3BMDRlKxReUAYToTmgTNbVySXjCPxekeCbV4luLYEFbYuLkr2OnzUJCbKPVKDBBKmHz%2BAgdaB0poiWMovma4mLimx1cmNvplYhSbjZ92NfkrNL06qhZ3%2BU1Sp9xEbRlYTPp33VTRPZoeWZO&X-Amz-Signature=4a37a3c1ccc7cb5a4b930ef775ff19d8745b50dbb622d4e141eff4cf361bee3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
