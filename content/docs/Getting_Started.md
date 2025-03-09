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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLXHSSG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAYAO9VOSwrpoFAJ7cF%2F0J2vJf6LKkW0grzWKVsG9CqQIhAIJ0p3rXf%2FxifAf8QVIS3bAL018WgkvXi2lqZCi6kn1XKv8DCHAQABoMNjM3NDIzMTgzODA1IgyiPZAOyNqHyq6mXu0q3AN7Ok4%2BhqdRbsKLZDHywqPraSsmPN6Yjs6EkaWi8H1kMJN2AvS1eXmv5eEKsoNW82WzZG2Ew4b12dHFRqRJ0fSPMpd43x%2FRESq0gtrUp7tMo0GzMcdrqANGbEBeb4RMhPV9J5E89IAOtA7j%2FLpw8eij2NeCgNgQFkKJeGLzxy5fbDIKltiNs5E2tN71ReHvRdrSN3mBuzQLwnd8Kewfq2o2rSP2p9SUFCWicz3EYzPA1vltzAQnKLNLrFJTtoP9R3kbfLU2ruEfMU5E%2BYWKsP5woC2J700zLKB6acTu5U8VVB0tCTt4boNt919sS0X7BHyBHUnBz8pSIaagyPndRYOUeyR4CnYq0vFiy4Wa0yn3AQb54BNsWzKZw%2Bhj4frS%2BmeV8mwvbnNWLoEiZ8U%2Bdh39fddwAlRZ4yuVo3lIBYOTDL7M%2FU0kh5easYIV0FtOJ6qV4A9ccg8Kdh8AQocWzV%2FFq1T0Ek63skI%2FHtNHehEyhN%2FKaFMz78Kq9FTSLYiiJG%2FuDWBXW5T1KWwEV4LexeR1JqFkwXtxfYUGESQ0ddSBhhvZz3co0e4HS48DGT8SvoiCLCYR6ChmTXMsd2SLUa59OJUnsWzfVMNHXlmIYGp%2FPLgfZxwnGHJlRAtkKjCd67S%2BBjqkAat5EIrp7eSoHA6itOeDiJl%2F4WcrXp63%2BN2Dn5jqZzPRzgEMzKH5qaOx8Lp74oeRWYMApbmzPJuwo2meEJVI8p%2BxhSUyWybz6Uqd7%2Fsx5tXzEevw2uhxqRekC0PqTq1juaQ%2BiIDNMgx3WTizJOgT5Qk8KJz3Ci0IYLHPnI4H3WXMfQFzz%2FzlXS%2B6vnpwKZDJy91jS66LTE4QusxPBNgi1hd6cbEm&X-Amz-Signature=b8219176b6b57e43d8ea8f82cde36f4c4710c6b26dc9f0a856c7e136b892fd71&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLXHSSG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAYAO9VOSwrpoFAJ7cF%2F0J2vJf6LKkW0grzWKVsG9CqQIhAIJ0p3rXf%2FxifAf8QVIS3bAL018WgkvXi2lqZCi6kn1XKv8DCHAQABoMNjM3NDIzMTgzODA1IgyiPZAOyNqHyq6mXu0q3AN7Ok4%2BhqdRbsKLZDHywqPraSsmPN6Yjs6EkaWi8H1kMJN2AvS1eXmv5eEKsoNW82WzZG2Ew4b12dHFRqRJ0fSPMpd43x%2FRESq0gtrUp7tMo0GzMcdrqANGbEBeb4RMhPV9J5E89IAOtA7j%2FLpw8eij2NeCgNgQFkKJeGLzxy5fbDIKltiNs5E2tN71ReHvRdrSN3mBuzQLwnd8Kewfq2o2rSP2p9SUFCWicz3EYzPA1vltzAQnKLNLrFJTtoP9R3kbfLU2ruEfMU5E%2BYWKsP5woC2J700zLKB6acTu5U8VVB0tCTt4boNt919sS0X7BHyBHUnBz8pSIaagyPndRYOUeyR4CnYq0vFiy4Wa0yn3AQb54BNsWzKZw%2Bhj4frS%2BmeV8mwvbnNWLoEiZ8U%2Bdh39fddwAlRZ4yuVo3lIBYOTDL7M%2FU0kh5easYIV0FtOJ6qV4A9ccg8Kdh8AQocWzV%2FFq1T0Ek63skI%2FHtNHehEyhN%2FKaFMz78Kq9FTSLYiiJG%2FuDWBXW5T1KWwEV4LexeR1JqFkwXtxfYUGESQ0ddSBhhvZz3co0e4HS48DGT8SvoiCLCYR6ChmTXMsd2SLUa59OJUnsWzfVMNHXlmIYGp%2FPLgfZxwnGHJlRAtkKjCd67S%2BBjqkAat5EIrp7eSoHA6itOeDiJl%2F4WcrXp63%2BN2Dn5jqZzPRzgEMzKH5qaOx8Lp74oeRWYMApbmzPJuwo2meEJVI8p%2BxhSUyWybz6Uqd7%2Fsx5tXzEevw2uhxqRekC0PqTq1juaQ%2BiIDNMgx3WTizJOgT5Qk8KJz3Ci0IYLHPnI4H3WXMfQFzz%2FzlXS%2B6vnpwKZDJy91jS66LTE4QusxPBNgi1hd6cbEm&X-Amz-Signature=8a8bed4919055a40faf3d46030c2bb7f646428c052b9e21f2a583d07a0693bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=cfb574fae19d50e08f3e31692f8f5a33822ae8a9f6f65d34a00615435b65aa96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLMWKYA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCUbo98fUlr0%2BA7TfM3lGHgtnOtIiKXAo6iVp8dr23oMAIhAO53PJH4Q6NRnpLKr%2F1H09FeCYcA6LuMa%2BjAzJ7MCEqqKv8DCHAQABoMNjM3NDIzMTgzODA1IgxFElpPg9KrkScXEmYq3ANv8nJAc30kYIXXGEKMxrbNGzLY2cfbTDE0LOtqm3IxrMU4VgubtxPg7Yz7SDc%2BRvjlar0SFYyNRrX9VhTJDZ6BYF1WneG6vbLSWBVWxoldpvoPXKngoX3yavytYs5IAYiYxNGZ8z560aeJG1uK0WONdA5FTyEtvRfysI8d4QSykgX3XHO7%2BwmPcX3wAMjU0qdetQcBmkfeduHuzsiJRjt9ksMpajilnxfnpyEXiIxZ2YYz8Neo6%2Bk8HQkqaz1hcsLewJFOx9RsJNRiDCmHCT1W9PXHJBdBqw9C%2BC1EsKwUpxDw97YlvR2cCfsr8Z9%2BH49tgbKMXRHMx0MuSlKeCaaT%2BDrEUyIAP7fxRmSjL6%2B%2BIxmfcyIOW2IsRaoy5Sy051bfiugpHtDn7X5g%2FWVKSQrslBNcjMEU8Jail58qku9Flk2m6MUqK05mlbc95ar0mjZY5Pj3dKtGBGqPkJDsLsoJjNadM3VhCftftj44XnAtEN2Nb9lVAY3GO8%2FwA%2Ff3nmKO0nC4J%2FAtl%2BwZEW%2BjJ9FUE6FqjSnB0at4fuixUFuanwy7X4Nk9l9mGGGWPgYKrVYM8o7zAaqRozEm7BKseZA%2BQh4CXd86cZYY%2B%2FX600GPMPcLanmFtHmA09dStzCY67S%2BBjqkAW5oz4CdCqvWbxqSA11NsYn1IBYm%2FKy%2FoUu30eFgrXXaw6YVBlH%2FRQTLCg4vL%2FOVS1XQ69NNGnaaSYZOfVhZAdQAfdjbTvap7yN5L4lSO7PTcOdGA1u8bW9KMMeGOT4u17EjdJtFa6ryymBzUwtPZzubQmOVDqtEvdDwOMzITUa%2BVy4aYSrctJtrz%2FFWhyv%2BAdDIoNskIrnuXZoC9GFYu%2BtzLA5J&X-Amz-Signature=92a76a44d998cdc6b4f1d1604ddc2db1e32beacbfe13b3b12c9c81df6dac035c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLXHSSG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCAYAO9VOSwrpoFAJ7cF%2F0J2vJf6LKkW0grzWKVsG9CqQIhAIJ0p3rXf%2FxifAf8QVIS3bAL018WgkvXi2lqZCi6kn1XKv8DCHAQABoMNjM3NDIzMTgzODA1IgyiPZAOyNqHyq6mXu0q3AN7Ok4%2BhqdRbsKLZDHywqPraSsmPN6Yjs6EkaWi8H1kMJN2AvS1eXmv5eEKsoNW82WzZG2Ew4b12dHFRqRJ0fSPMpd43x%2FRESq0gtrUp7tMo0GzMcdrqANGbEBeb4RMhPV9J5E89IAOtA7j%2FLpw8eij2NeCgNgQFkKJeGLzxy5fbDIKltiNs5E2tN71ReHvRdrSN3mBuzQLwnd8Kewfq2o2rSP2p9SUFCWicz3EYzPA1vltzAQnKLNLrFJTtoP9R3kbfLU2ruEfMU5E%2BYWKsP5woC2J700zLKB6acTu5U8VVB0tCTt4boNt919sS0X7BHyBHUnBz8pSIaagyPndRYOUeyR4CnYq0vFiy4Wa0yn3AQb54BNsWzKZw%2Bhj4frS%2BmeV8mwvbnNWLoEiZ8U%2Bdh39fddwAlRZ4yuVo3lIBYOTDL7M%2FU0kh5easYIV0FtOJ6qV4A9ccg8Kdh8AQocWzV%2FFq1T0Ek63skI%2FHtNHehEyhN%2FKaFMz78Kq9FTSLYiiJG%2FuDWBXW5T1KWwEV4LexeR1JqFkwXtxfYUGESQ0ddSBhhvZz3co0e4HS48DGT8SvoiCLCYR6ChmTXMsd2SLUa59OJUnsWzfVMNHXlmIYGp%2FPLgfZxwnGHJlRAtkKjCd67S%2BBjqkAat5EIrp7eSoHA6itOeDiJl%2F4WcrXp63%2BN2Dn5jqZzPRzgEMzKH5qaOx8Lp74oeRWYMApbmzPJuwo2meEJVI8p%2BxhSUyWybz6Uqd7%2Fsx5tXzEevw2uhxqRekC0PqTq1juaQ%2BiIDNMgx3WTizJOgT5Qk8KJz3Ci0IYLHPnI4H3WXMfQFzz%2FzlXS%2B6vnpwKZDJy91jS66LTE4QusxPBNgi1hd6cbEm&X-Amz-Signature=30bdd36757afa198c5ae3e9d2da55fe62c332865f65d0f8e592f5c8dcac2c323&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
