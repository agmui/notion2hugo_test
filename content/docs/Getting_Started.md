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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCP45GL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC3w6EWxZVw09%2FHyJ2IAW%2FHnLEgNV5n%2Fdoo1F1ezBQttAiEAiKidLtlRw%2FJWKgQRWLyNXAj3OV2JI9zBvZuATYPNlSoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYblAH9wIO13dVgNSrcA4Z2xDDbfrPZ5TymUgfjI5V8UM8ejCgoGZg%2B4c9BF82A1kpqFruL2ZkZujAu7q%2Bz0Eyf375WZec1uT1KGb7Ikqo0y9zqZKV4zKUAgt44%2FPXdMq%2BMo%2BA5cXyGXQpGgMMHd4SApyR9PcP1Y59EXO3HMKpC0GHVzzCK5AZR2Es4HVepPY%2BrDEi5tnj4eEmIyxDpnDWWs9sfvJaCiUfs6f1aWdDBwWMfFI2NBtVYbu4MlSNXlvjMiaUkEQRJ3EDhsGm7Cbkj%2BG%2B04%2BbBaty1409Ck%2FyimK5rIWlyBv538WSPzII7osifF2kWKBLlVn4RZ9ClUPYgatJK96awBbNdeZUnDHjKj9%2FeFPu7bRHNYf%2FAIv9xz0k2UTy4dUmyVcXAJSVJiCMzfCu9q2tC4ORJpejr91K%2BHWd9Uant2vvy5GY89oxEBwtY5OdoUaDtgItzMmoYG4le3%2BaNaSTtu3OMtzWLu%2B8k0yKgaPocRZrh83iVXAMzGilCN6Ha5Bj1cbW%2BNhwc%2FVV8NeRj1Nx9N%2FUApnDicswQg7UvdmA3Bolc4prPnitVr5cTGElXI1uNODUYMCHOIF3gJ1y6M9TjFfQfEy8D2v10LPnfY7mZ9ZFuqxpSVCYtapQvNzz2f0ldeJv%2BMI%2F7uL4GOqUB39WpLs5YGfhkn09qSWTZ%2BGKltrwDqSlshr%2FS2CfLCHvtqNg%2BiHc3GY67lpwiFAWrk%2BChLSkBC6q1PgF3osX5ENr%2Bsbkpw7Pu7HuQG%2FDg2QJV1YSc5W7eqEXa1e1JjA26A%2BSR8tvYs5MM1g9GDzw2HKB%2FvVMhWiIpangf0iJ6dgv1dlE5MwqBMIfswDj8uh4%2Bo6IN%2FRvVdjUv%2BWese%2F3weExGxs63&X-Amz-Signature=afab18f45e7f236eda7060639546d6b8d81f646061b82b9a9a4a88da25fef35a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCP45GL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC3w6EWxZVw09%2FHyJ2IAW%2FHnLEgNV5n%2Fdoo1F1ezBQttAiEAiKidLtlRw%2FJWKgQRWLyNXAj3OV2JI9zBvZuATYPNlSoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYblAH9wIO13dVgNSrcA4Z2xDDbfrPZ5TymUgfjI5V8UM8ejCgoGZg%2B4c9BF82A1kpqFruL2ZkZujAu7q%2Bz0Eyf375WZec1uT1KGb7Ikqo0y9zqZKV4zKUAgt44%2FPXdMq%2BMo%2BA5cXyGXQpGgMMHd4SApyR9PcP1Y59EXO3HMKpC0GHVzzCK5AZR2Es4HVepPY%2BrDEi5tnj4eEmIyxDpnDWWs9sfvJaCiUfs6f1aWdDBwWMfFI2NBtVYbu4MlSNXlvjMiaUkEQRJ3EDhsGm7Cbkj%2BG%2B04%2BbBaty1409Ck%2FyimK5rIWlyBv538WSPzII7osifF2kWKBLlVn4RZ9ClUPYgatJK96awBbNdeZUnDHjKj9%2FeFPu7bRHNYf%2FAIv9xz0k2UTy4dUmyVcXAJSVJiCMzfCu9q2tC4ORJpejr91K%2BHWd9Uant2vvy5GY89oxEBwtY5OdoUaDtgItzMmoYG4le3%2BaNaSTtu3OMtzWLu%2B8k0yKgaPocRZrh83iVXAMzGilCN6Ha5Bj1cbW%2BNhwc%2FVV8NeRj1Nx9N%2FUApnDicswQg7UvdmA3Bolc4prPnitVr5cTGElXI1uNODUYMCHOIF3gJ1y6M9TjFfQfEy8D2v10LPnfY7mZ9ZFuqxpSVCYtapQvNzz2f0ldeJv%2BMI%2F7uL4GOqUB39WpLs5YGfhkn09qSWTZ%2BGKltrwDqSlshr%2FS2CfLCHvtqNg%2BiHc3GY67lpwiFAWrk%2BChLSkBC6q1PgF3osX5ENr%2Bsbkpw7Pu7HuQG%2FDg2QJV1YSc5W7eqEXa1e1JjA26A%2BSR8tvYs5MM1g9GDzw2HKB%2FvVMhWiIpangf0iJ6dgv1dlE5MwqBMIfswDj8uh4%2Bo6IN%2FRvVdjUv%2BWese%2F3weExGxs63&X-Amz-Signature=eccde857a33e4dfba9b76c159f2d27646a95a9a714904727c339369c61ec9958&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3EBD7D%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDTa7bzAF52SwDynYv4zWuTPKHZBjkLsxnItP6ohHzXUAiBmLKra8p8CYPTd8pRAUI3XdwSIYN4j1QWGxLcv6dk5iyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsS0Q1reP08O7WlmXKtwD4P4sbjINYTu2oxTInAri0LZZHgEHFwZ93Hh%2F4xO%2Bse8CjH%2F6I3mnM0DUCYAxxEqrDF2vOir4k3NPlqHNEd3K0zZqlyPhKGyd8r1bfUYipKtPir42ax%2F4D3Vlq4iDeU1fGN4MFQ7AhwfJY2SSAxNnBUQ%2FbeF3Rb8R79PuRkPyA0zdtCcCLm43zOWFPs55YDJ%2BtkfP4C9wR%2BP3V1cFVHLlHQicfenXxZX0EMvRy%2BDIaolD9ucbKDXPpio0IAK33dipOzTawayE96RjEpSHfs7G9kYBotLA2zY2fbJp7WMc0A9UvxlmvULMxDX9NcvkGK3B0j2%2BT4WqOLeHJxd1pv4Zf6PAmXTxefFib1DUO6d6AQPbX3nXk3OMKFFbYZD7oxmm45FpMNR1Y8VNkkRGXWCxbNZZnrxWmRCp9dyei0LkQt7Q82pXKB%2FWZXHXl230MU5MD2FcHZ9%2BIgQuevd3gHurXphOZDxJB49EMNrPwyH%2BSk9Gae7OhOr06tbqu%2B%2BlexdYYyat9OXt7xuLrAPlmHuNqSgX1tKFqy6oQsna2MTrb78G8fA1oGYlJ1M36K%2FV1MqI4GqqNn9tycgGopTizhXABHyw13dxHYyoDo%2F8fLhoX11IqH6acSFZXugSBoIwmPu4vgY6pgG30wz863SRTikZnpbPYaOv3sH1OnBED7NBBzbteJL9jwk8JJ7op1lxWj4EFaWNaHlaLPs1V%2B85cQNDWhL48wwDYwGzX5Ol2v9lILZueiPE%2Bo%2BTiMQEVf8lAKJsVI%2B7NyDAqFvqeHCaqNbkjAA4vpR63puGZceZhyd3zMCxYvLGtVSTLkqlSMGf0%2FpBU30HG%2FKxopIVE%2BKeBSvxj5oTTt2AZSt6izKH&X-Amz-Signature=57277bc9acbeab7e28d9b954f568248756c6d7dc8aeb2c786b98c9a89b0041ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FRP5REO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCi12I8yHPV1wkR9TQ7Ua7IJplzfH%2FR%2BS5tILMroorwVQIgU4tSRkNN4nWoSjxyEkWDj%2BC77SLI14N47oRXZu5mMQwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRJ6x9Y1Gq8ixH71CrcA4txpTmlQwQzTYbyh9KajZkTp%2Fv5wQsN9Y373J411eNeifVsea6O3AFKeVWGBTCyuvZDyyOU8msV5OnNlHXzgqBaqqxUw0B%2BGG3%2BkEbD1yv33HFXxd%2FBst%2BLeiLtmoGzxQ1Fhg5efZwddxpvaQpgr5AAwp5R1tp3t0fQ%2B3rNPREZUR045ZdW6RogevvbmHMYbbnYYumogStb47v9mee0Ni0ligAGk%2FDdsRYIIVeyxSrnOpWk%2FRvoA4RacQW2oEHoa3Tdp6FNUjIyMZzonfv%2F5D1I1WVir%2FoiGQt%2FzNzLDWhZnpsEGzHeXeSzbuHR%2BzkBCn668ksBGPoNEVHvqgQMTW8xE0yxIiFVRFHCpLHehS9%2BqK8JrD7G6SgZmcrsePNK3jbAKM%2FQE18dA5paaKatLGdf8IWvyMn%2F99FPi7ahrFw90tKoV3zXyen5ftbrpOxu%2FeRAWHiW1CAMordttzHfc56s8CTZtZepV3yz3gV68kxHnU2doe7V4Ev%2BzVVaQQD23r7Z7HIp0sx%2FTP4GPh5nuekXzlMyFzHArn1Mk1A85ZcSfbl4cUTabeQtqjGtNvnWoXv8MjAYDw1sdvvGB6qWxVmpZ7M7TMmCk%2Ba5oOGaa7%2FJfLGI7RiSaUidTZuDMJz7uL4GOqUBdhLtxlsrP173d0X4U24pmEghtE2h9bF9GJ2zHtbrHL%2FkXuZvWIuzTvA2osOa3aBd01IWwC1nq1H2W7kkBFie3UiSqTfwbq3nENx5LorX4aOTA%2BK7V%2F3SKZpDbjw%2F%2F0ryeRqQbejtmvx4Vy0gagSaQWxCMA%2BauxQN3HhYHHq96cZhkxGd0YeHSyCGcL9hY2lQ5dot4zhjkAJt4mBy2kwNkjEWxc5f&X-Amz-Signature=5192dde893d2c145cfdea82f021d4eb3b467d322a0e8097f7f09751fafd411d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCP45GL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC3w6EWxZVw09%2FHyJ2IAW%2FHnLEgNV5n%2Fdoo1F1ezBQttAiEAiKidLtlRw%2FJWKgQRWLyNXAj3OV2JI9zBvZuATYPNlSoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYblAH9wIO13dVgNSrcA4Z2xDDbfrPZ5TymUgfjI5V8UM8ejCgoGZg%2B4c9BF82A1kpqFruL2ZkZujAu7q%2Bz0Eyf375WZec1uT1KGb7Ikqo0y9zqZKV4zKUAgt44%2FPXdMq%2BMo%2BA5cXyGXQpGgMMHd4SApyR9PcP1Y59EXO3HMKpC0GHVzzCK5AZR2Es4HVepPY%2BrDEi5tnj4eEmIyxDpnDWWs9sfvJaCiUfs6f1aWdDBwWMfFI2NBtVYbu4MlSNXlvjMiaUkEQRJ3EDhsGm7Cbkj%2BG%2B04%2BbBaty1409Ck%2FyimK5rIWlyBv538WSPzII7osifF2kWKBLlVn4RZ9ClUPYgatJK96awBbNdeZUnDHjKj9%2FeFPu7bRHNYf%2FAIv9xz0k2UTy4dUmyVcXAJSVJiCMzfCu9q2tC4ORJpejr91K%2BHWd9Uant2vvy5GY89oxEBwtY5OdoUaDtgItzMmoYG4le3%2BaNaSTtu3OMtzWLu%2B8k0yKgaPocRZrh83iVXAMzGilCN6Ha5Bj1cbW%2BNhwc%2FVV8NeRj1Nx9N%2FUApnDicswQg7UvdmA3Bolc4prPnitVr5cTGElXI1uNODUYMCHOIF3gJ1y6M9TjFfQfEy8D2v10LPnfY7mZ9ZFuqxpSVCYtapQvNzz2f0ldeJv%2BMI%2F7uL4GOqUB39WpLs5YGfhkn09qSWTZ%2BGKltrwDqSlshr%2FS2CfLCHvtqNg%2BiHc3GY67lpwiFAWrk%2BChLSkBC6q1PgF3osX5ENr%2Bsbkpw7Pu7HuQG%2FDg2QJV1YSc5W7eqEXa1e1JjA26A%2BSR8tvYs5MM1g9GDzw2HKB%2FvVMhWiIpangf0iJ6dgv1dlE5MwqBMIfswDj8uh4%2Bo6IN%2FRvVdjUv%2BWese%2F3weExGxs63&X-Amz-Signature=ab064673d86b3b059a2f28ef34ebcc018231fd55f68f89806e2a7592d5366b91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
