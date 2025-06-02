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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IWDCIV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC6r01bMUFQYPmwrPm%2BDOfVJdS4ncTo4ctU94pJpcIVsgIhAJF6HdPwCXcZPqNjz25bwCLdQcHEJsNnvHF4AndzHDU7KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCUp7adu3KvAcn7esq3AM3YUKMAW521pOJWzLy2Sa%2Bo9ku7INWgAbwp%2BwLhfx9M%2FgVCAMmGN%2B7d1twVeCQpwyQ8rVyW5cFi00fC%2FmGRfa8fdXukJuBvAYr21FFyDntirYqciRpyX%2Bq8KkVMbIuzLNJiom9osbXwt3jkrPfrpAcrAGph0RS3h7eJLKL43TjNDEsHWjP9niX%2FRJZEDQHnQAZjnrGmIysiY05L5SQoryz3xWF6lalloKnAPMtjoXxjioozU022ASpqK0Nh%2BHbwZvmovhkjHTrpDap37CYPk%2BEIwGlbsw0N2F8rx6rom8%2BlLaceY9eKHr4mL0ewmXKwpDC5BBTBDeNhcg3Vo7ibjrzhmPY%2Fm8zIwuE%2BpH31XkdNmMhBaTc8PP4k2s2JkFsBerjFm4fuxdqGFz%2BHFnAs9nC%2FfFJZtIXdecuA7jnJq7p2Vn76NsPBEjfy98jhBYUnkhjPQEJtpGMGI09VQokvKaGNLIyNpwu0R9E9QoqErMqfdST8nlGsRaY0E52ffgaoXoMLfEJyOV9SKcW%2B2JjF4wtQgwWOlCuDf9%2B5zGt8vG8HF4F0VVym7InQ%2FMFO6RLvQQBYCATUaBHd%2BbpvC9waacN3GwFPoNoiVQmhW%2F%2BICGw2uslDUp5wJgC5Sq8jDDY%2BfPBBjqkAey6OdqnIpE7svwb%2FRnlR0DbA16gQBXSWdDMa4DnEQT1XYWxmkLa3buNs6UXvv8veQ9NCkJSsQxk0ICBW%2FFDoCRwZW9Ut2g2QUs28nkFmZdkC3BP92aDEsyh86oO4oEaY01djP2jQT%2BfPKMREto9qBiksJV158ApMbHB2VVY%2F%2F74MjKDLMr%2ByIcbwGerfRa9WYhxHL9KHp%2B0%2BfK4vO5JD12QpvQW&X-Amz-Signature=aff1a5b4f92198dc2289c97348e4b06333ad9e4fe78ec20719ed0433489d3635&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IWDCIV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC6r01bMUFQYPmwrPm%2BDOfVJdS4ncTo4ctU94pJpcIVsgIhAJF6HdPwCXcZPqNjz25bwCLdQcHEJsNnvHF4AndzHDU7KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCUp7adu3KvAcn7esq3AM3YUKMAW521pOJWzLy2Sa%2Bo9ku7INWgAbwp%2BwLhfx9M%2FgVCAMmGN%2B7d1twVeCQpwyQ8rVyW5cFi00fC%2FmGRfa8fdXukJuBvAYr21FFyDntirYqciRpyX%2Bq8KkVMbIuzLNJiom9osbXwt3jkrPfrpAcrAGph0RS3h7eJLKL43TjNDEsHWjP9niX%2FRJZEDQHnQAZjnrGmIysiY05L5SQoryz3xWF6lalloKnAPMtjoXxjioozU022ASpqK0Nh%2BHbwZvmovhkjHTrpDap37CYPk%2BEIwGlbsw0N2F8rx6rom8%2BlLaceY9eKHr4mL0ewmXKwpDC5BBTBDeNhcg3Vo7ibjrzhmPY%2Fm8zIwuE%2BpH31XkdNmMhBaTc8PP4k2s2JkFsBerjFm4fuxdqGFz%2BHFnAs9nC%2FfFJZtIXdecuA7jnJq7p2Vn76NsPBEjfy98jhBYUnkhjPQEJtpGMGI09VQokvKaGNLIyNpwu0R9E9QoqErMqfdST8nlGsRaY0E52ffgaoXoMLfEJyOV9SKcW%2B2JjF4wtQgwWOlCuDf9%2B5zGt8vG8HF4F0VVym7InQ%2FMFO6RLvQQBYCATUaBHd%2BbpvC9waacN3GwFPoNoiVQmhW%2F%2BICGw2uslDUp5wJgC5Sq8jDDY%2BfPBBjqkAey6OdqnIpE7svwb%2FRnlR0DbA16gQBXSWdDMa4DnEQT1XYWxmkLa3buNs6UXvv8veQ9NCkJSsQxk0ICBW%2FFDoCRwZW9Ut2g2QUs28nkFmZdkC3BP92aDEsyh86oO4oEaY01djP2jQT%2BfPKMREto9qBiksJV158ApMbHB2VVY%2F%2F74MjKDLMr%2ByIcbwGerfRa9WYhxHL9KHp%2B0%2BfK4vO5JD12QpvQW&X-Amz-Signature=f198e2c7e20d09948e2af54ecfc44690504b73ef7323a06a5cbd14b5d01934ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IWDCIV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC6r01bMUFQYPmwrPm%2BDOfVJdS4ncTo4ctU94pJpcIVsgIhAJF6HdPwCXcZPqNjz25bwCLdQcHEJsNnvHF4AndzHDU7KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCUp7adu3KvAcn7esq3AM3YUKMAW521pOJWzLy2Sa%2Bo9ku7INWgAbwp%2BwLhfx9M%2FgVCAMmGN%2B7d1twVeCQpwyQ8rVyW5cFi00fC%2FmGRfa8fdXukJuBvAYr21FFyDntirYqciRpyX%2Bq8KkVMbIuzLNJiom9osbXwt3jkrPfrpAcrAGph0RS3h7eJLKL43TjNDEsHWjP9niX%2FRJZEDQHnQAZjnrGmIysiY05L5SQoryz3xWF6lalloKnAPMtjoXxjioozU022ASpqK0Nh%2BHbwZvmovhkjHTrpDap37CYPk%2BEIwGlbsw0N2F8rx6rom8%2BlLaceY9eKHr4mL0ewmXKwpDC5BBTBDeNhcg3Vo7ibjrzhmPY%2Fm8zIwuE%2BpH31XkdNmMhBaTc8PP4k2s2JkFsBerjFm4fuxdqGFz%2BHFnAs9nC%2FfFJZtIXdecuA7jnJq7p2Vn76NsPBEjfy98jhBYUnkhjPQEJtpGMGI09VQokvKaGNLIyNpwu0R9E9QoqErMqfdST8nlGsRaY0E52ffgaoXoMLfEJyOV9SKcW%2B2JjF4wtQgwWOlCuDf9%2B5zGt8vG8HF4F0VVym7InQ%2FMFO6RLvQQBYCATUaBHd%2BbpvC9waacN3GwFPoNoiVQmhW%2F%2BICGw2uslDUp5wJgC5Sq8jDDY%2BfPBBjqkAey6OdqnIpE7svwb%2FRnlR0DbA16gQBXSWdDMa4DnEQT1XYWxmkLa3buNs6UXvv8veQ9NCkJSsQxk0ICBW%2FFDoCRwZW9Ut2g2QUs28nkFmZdkC3BP92aDEsyh86oO4oEaY01djP2jQT%2BfPKMREto9qBiksJV158ApMbHB2VVY%2F%2F74MjKDLMr%2ByIcbwGerfRa9WYhxHL9KHp%2B0%2BfK4vO5JD12QpvQW&X-Amz-Signature=4a913398dc78523aa412e364f51d199685095c942fff38d2fbd9b64d63304629&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DXA2KTA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD7JV5AfDgqzyX347ZAEnc3iW2YbjV1onaAH25TzfTSewIgbV5O7JP6oJgo%2FiMyOazntLcDA9bzHMjw%2BE0xkeCEEWQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnk5uXBEshPXW3ikCrcA3J%2F7nwiC7PBoNWccnD3nWQ0MkWbwEv3aXET7BhsIz7FpCPfNwrhliiV9ph3KWmDMu44CQr1FPzhNrncw61UzmT1NE5c5cJMnI92t3qzTzLtB4iPo5utEkoDGwQZ8FAHKZizZg0WlukGYFw0ApDo9aK%2BoSuD26su5gcIsLY5xcIVkFagIUGI%2BrnJf9r8RYv8sdcnjH9sKQxS%2BmEjgVrV1maJrrgSpHKCfHNsi2YoGJaG%2BaqHZyj6AJ%2B3z92fHmP82xXn3vwAjTAoMD0PN927ZItV32jQXo5%2Fz1RgeSeD1zFFdVniMgjy6TCVko7VaCwXNJwNEi%2Bf%2F09tA2ySjEkeQngA1gtXe%2Flivp9IlLLU8YteyOgP4ie%2BeoLMeps%2Bh7KuINkPLgefnShjL4Yv6%2Bxv4BXWG9JGS40hTadmRUp6KPraHcS7k3cjT9lC6h%2FCeHpPnFkCMut1QJDhKnVyjbR3p%2FXQjcbqxApjkT979ZCuWQk6pHaE8K8180O0fnHPqmkB%2FibiRfLctqCHfcxcbjEKr3HOq5n5bhV64pv5CdHaB50zHoCzKU7RZ4fVAGtKviQVeVI88ycv8wFqxPGozk1JDGsBAK3YH1XnOsCngqykHSkWQFn9bizcvaVMPkVaMLX388EGOqUBpYMoQwp9rgfFvffr1fs7cY4fYYyZ4dJVOqE%2Fz2eA0fn6M%2FYrrG0SZhYJtgHMcU8Ghq8T77A63v%2Bs5Kv%2FM31uJjDAH0YU40MLl4ooTqun0nGGVDPVAW%2BQKHZ837y8sm21IKRxXObPD6%2B7qx8Df9wJGRlDb3r1zlzm7TfA9ailNfRjCXRiPiSv0FGBT2OH480IJi94gVUADhuq%2BUwWUh4RVLhTF56f&X-Amz-Signature=66953a787c4769bac24220a266dd7652586dcb5e5b9a6cc8d671197f53b66efb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4JY2JR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID5U1xh7S0f60PXm0BuAh3wfbpHFC5kxQyFxjQHVfekPAiBQxU0Pt6AhYljChULF%2FOZFSZ5mePuyj9mnIzfl%2BDQq%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwBv%2BfCqrTsER6jVKtwDoAv3vSoJukw06%2FUo3k2wFoQ%2FlD1rqnX3vxtbJ9AQP7k5aS0N7g14xr9kZaSNDeirloKS%2FPMqvAOdyh7GRhhqRktHpBLL1vJCq492c%2BuxRZaL%2BxZm66XMGqHJIXpzX07gyoFQVRwaXX3YTbMNo%2BXKH91m%2BcMH0GseueO8Xdwg8kAsNBD8ZVoE1BBBAbgHRZVOvnt2AUYkcj3wD4DKBW6F%2B4Mb90464kYhaIZuer%2F0xTnw7cuDP4yBAbT81AIKK%2FY0jL7BnH7yAv9NPTsNQOArPGc%2BjdLyXH5rkPFoz1NWNWBM5t8pCNnpEdqiGHM6pkT8vire5sOT5sXo%2BOk6jBXvcgxtL4CmNeRPTGX4hlPWhu8%2BM4kxTs0v5Ufipy2MUKwcxjq7Y0WF1wcjkEK7x2aWpGfI1cn2y3eMP2p%2B7ah6npQkoXkRV8P2k0bByg9JeY4TXAH4epi7keL%2F3xZc0Pi4OeJO%2F8wq5yW3CNODuTw4ONeABGS5zY%2BahPmMJ2%2FMMrlLFJlXmlbvIb6NBq8HvS%2ByHr85wvamj3xQ%2F1ZwwvotwT20YlNuxSCE8nsTcnPrFgdjRhwo2e%2BjSKJXXSMoyiWO29iAT8sFbEZeKUYR0uulECyiG48Bht3cNpW%2BLCYwnPfzwQY6pgFRTRcizkH2nYBVp1cjK7UW3mBADalo8LPlbbzoSbbq8yikvZiMvY7%2BnnOFx6eV6raYNXepfb0wTnnD87aUIq9WlsmtdmFi6VUwvsWPD35EJOA17G0c0qzzu6xApoeWStbBtziI4MSLsiS1r1SlOqy0dTr%2FzmqPBWgAvhDXSsyF53OKn%2BwSAjAdkcaoD9F6IM0mtHDrc124qYW8A4fr5WNpQ1%2FYfHcB&X-Amz-Signature=b91d248e32dcb1e1bde8e19ff6a0509de09b5259fb3cf2494a7d0b2343a11361&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IWDCIV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC6r01bMUFQYPmwrPm%2BDOfVJdS4ncTo4ctU94pJpcIVsgIhAJF6HdPwCXcZPqNjz25bwCLdQcHEJsNnvHF4AndzHDU7KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCUp7adu3KvAcn7esq3AM3YUKMAW521pOJWzLy2Sa%2Bo9ku7INWgAbwp%2BwLhfx9M%2FgVCAMmGN%2B7d1twVeCQpwyQ8rVyW5cFi00fC%2FmGRfa8fdXukJuBvAYr21FFyDntirYqciRpyX%2Bq8KkVMbIuzLNJiom9osbXwt3jkrPfrpAcrAGph0RS3h7eJLKL43TjNDEsHWjP9niX%2FRJZEDQHnQAZjnrGmIysiY05L5SQoryz3xWF6lalloKnAPMtjoXxjioozU022ASpqK0Nh%2BHbwZvmovhkjHTrpDap37CYPk%2BEIwGlbsw0N2F8rx6rom8%2BlLaceY9eKHr4mL0ewmXKwpDC5BBTBDeNhcg3Vo7ibjrzhmPY%2Fm8zIwuE%2BpH31XkdNmMhBaTc8PP4k2s2JkFsBerjFm4fuxdqGFz%2BHFnAs9nC%2FfFJZtIXdecuA7jnJq7p2Vn76NsPBEjfy98jhBYUnkhjPQEJtpGMGI09VQokvKaGNLIyNpwu0R9E9QoqErMqfdST8nlGsRaY0E52ffgaoXoMLfEJyOV9SKcW%2B2JjF4wtQgwWOlCuDf9%2B5zGt8vG8HF4F0VVym7InQ%2FMFO6RLvQQBYCATUaBHd%2BbpvC9waacN3GwFPoNoiVQmhW%2F%2BICGw2uslDUp5wJgC5Sq8jDDY%2BfPBBjqkAey6OdqnIpE7svwb%2FRnlR0DbA16gQBXSWdDMa4DnEQT1XYWxmkLa3buNs6UXvv8veQ9NCkJSsQxk0ICBW%2FFDoCRwZW9Ut2g2QUs28nkFmZdkC3BP92aDEsyh86oO4oEaY01djP2jQT%2BfPKMREto9qBiksJV158ApMbHB2VVY%2F%2F74MjKDLMr%2ByIcbwGerfRa9WYhxHL9KHp%2B0%2BfK4vO5JD12QpvQW&X-Amz-Signature=48471b58202b5ad11924eb0195ba4ede5b17d66526a747569ceee71c5513787f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
