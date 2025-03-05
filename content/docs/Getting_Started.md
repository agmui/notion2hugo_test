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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBILFEC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbOmy1Sx62Gq033CVTrQnnpTsRqjRNM52UTA7DgZ5QuAiAIgKaKAYXg%2Baru6%2BklGO%2BKv9CNEHdHay7F1FgbytECASr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMxxGAAZppfsf7H0oVKtwDVQTnfKrDMRC843kNwB7UZIqn3pX5ypUN8xYMC7pMRt42nHokFeZCJLx1vBQ9rq4R6pvDg8U9%2B2pNMebkzfFB4Kon6Zi%2BK93HFnk78iqTpmJ4WSTOaWFqKdXLvYb%2Fg09fLB1VQVk9qAO%2Bbro2Of1cQtne3dGuKBTfOutRTl7DjqkFZnTmFdgW0C7whplSlq3v%2BfNcRx4NhPCV5d9cJrSPhDvZr9Ovtz8KedpvSyOOb5UWezaD6M1NpPsulh1Dqim8JHpjjHmfXCipnFBtqxouAANIa9vf1gKWzxXIzr2MX4MtrkTqQdxRoCoW4XRj0mZk7puq7Pu7I7k2oIiNBPllQcDyDWf3UzBE%2Fmyec44Sp9f%2B5ezL104eMFl2bHg7OZNti5iqCYMzjrRChR0KLV5Z1Ftw4wH%2BjMkE%2FZSuEygDN2VFuCnvyZHWj0DEhEwtva1CZ6WD4ZdEL%2Bwrh3Uklq1efgM8lGRzEVldZZH53MfEkbqhLtJajI%2BkvJXBSJSyu7Ed3iHEaaFryfbSpxPIY0EEyo03vKQFPXltKTuVfYX1VNtcK43dAOgHxgNICucKbDdrW4dOAAl2Lbi0383ymeqF3Ol77TCWFws15ZwGDLhCDeL9otI9upGN1t5c55kwgoSivgY6pgGXtCGEat0zSaS7AjgaTF13hzRDxLHOK0yv9MYoQa8DBHxsAlRQ078vwWpH9UapoKIZ%2BU1fDs2VqXYNnkN6%2BbZ3f6cDn82z%2B8IH7LN5AK6wlibjgUAiGfI9NoSSP8EHnKW5y1b1LiAUAHRFhl4maPlj3VyM2%2F2zdZ7qylPvYP7%2F8nTy8qN86JJRd4W8DCmBydw39mBAeUMOGrbpHYse2vFZDi36eAKv&X-Amz-Signature=232041f6ed6c575fc827c38866ce7f2d870e2b8c422ade35971a8fad8622fc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBILFEC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbOmy1Sx62Gq033CVTrQnnpTsRqjRNM52UTA7DgZ5QuAiAIgKaKAYXg%2Baru6%2BklGO%2BKv9CNEHdHay7F1FgbytECASr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMxxGAAZppfsf7H0oVKtwDVQTnfKrDMRC843kNwB7UZIqn3pX5ypUN8xYMC7pMRt42nHokFeZCJLx1vBQ9rq4R6pvDg8U9%2B2pNMebkzfFB4Kon6Zi%2BK93HFnk78iqTpmJ4WSTOaWFqKdXLvYb%2Fg09fLB1VQVk9qAO%2Bbro2Of1cQtne3dGuKBTfOutRTl7DjqkFZnTmFdgW0C7whplSlq3v%2BfNcRx4NhPCV5d9cJrSPhDvZr9Ovtz8KedpvSyOOb5UWezaD6M1NpPsulh1Dqim8JHpjjHmfXCipnFBtqxouAANIa9vf1gKWzxXIzr2MX4MtrkTqQdxRoCoW4XRj0mZk7puq7Pu7I7k2oIiNBPllQcDyDWf3UzBE%2Fmyec44Sp9f%2B5ezL104eMFl2bHg7OZNti5iqCYMzjrRChR0KLV5Z1Ftw4wH%2BjMkE%2FZSuEygDN2VFuCnvyZHWj0DEhEwtva1CZ6WD4ZdEL%2Bwrh3Uklq1efgM8lGRzEVldZZH53MfEkbqhLtJajI%2BkvJXBSJSyu7Ed3iHEaaFryfbSpxPIY0EEyo03vKQFPXltKTuVfYX1VNtcK43dAOgHxgNICucKbDdrW4dOAAl2Lbi0383ymeqF3Ol77TCWFws15ZwGDLhCDeL9otI9upGN1t5c55kwgoSivgY6pgGXtCGEat0zSaS7AjgaTF13hzRDxLHOK0yv9MYoQa8DBHxsAlRQ078vwWpH9UapoKIZ%2BU1fDs2VqXYNnkN6%2BbZ3f6cDn82z%2B8IH7LN5AK6wlibjgUAiGfI9NoSSP8EHnKW5y1b1LiAUAHRFhl4maPlj3VyM2%2F2zdZ7qylPvYP7%2F8nTy8qN86JJRd4W8DCmBydw39mBAeUMOGrbpHYse2vFZDi36eAKv&X-Amz-Signature=093fb4ac63a3c9802548d05e559f47a4795d4cdc91e16d52a079029b27b5f833&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTBJU5H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiViSMj4xyMBwW30uLTgccc75ZVALYbOvxaW8x2n1twIgZK1yGbfPPb6Kxqsgi1RQ%2FXbE7wW5kFO9KKxbcry5nQMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHLZM%2Fhti%2BO%2FWH%2FToSrcAyO2eFubdGPSopNn9CsVTXyJNH9ZJvpaWo61%2B5AlwHmMgnpEjc3FMazWlXOfYzuTHAtoO0M5tUbpG3O8Jxjq5Se5ivrinGHRmlGZ5kQEsTjErhaHWrUIYPtw0ovtLgc1HrZbBv0IPjttRhzYZd40565veLsXBt7373AZH8bUFZP0Spelfl55MiOaMls1tpDWIHxh03JWiHC7%2BE2fbQ6Icsb3lRngbBAYVLGBfwyac4njz16udAecuFuydjhLUCKUg1vrkey1ffotCN0TjN0FzLamPUltqznqFqcBwiq3mtYVl3RYvqXndEOb9hCvTgaq99uugnpDlhQE3CNsX16oulDXyS%2F099wJ7d%2FZAVL4vqUk27GqjsSBgLnwrJQ3TOVNrgx19L%2ByOvANQZGSAq9tyUw%2BR4BMZ77pIi3i3yR%2FPp5%2Fy2Cz%2F036nbaQGFwqIWfKdjEdlKsP1BLoyyxwxxOxlRnmfIX8g9fMvP%2FOtlACa%2BV1MlBESuduQQIqFjHdPUgV%2B4TZFYXs1skiXtQy%2Bl8eF9iTuwAAif8Y3hT8V81RgH1y6FpUb2MvvKwJOSSRw2krkMlMDde%2BqX%2Fp7O5NkQvywGm5OyrUWNUJa%2BPJly53GpPK29CcCUJdO5ViDePBMM6Dor4GOqUBxZ9JqQIk3bMgJtb4cQ0QJA%2F6SpDv63iPVJcLag%2F4cKIR7Z1zl8noPV1iO9Mr1pKdexfgFiWqR5nHiCXI7v9zWnyAIeZJeU8ajTBgkZzhc1SGntfKd9SaA%2Bx9fShkh2wYvWSbHjLCBbPqFTxWdd5uaPUG3yWPaW8nq8ZtgN0xWQf3jnKQS6%2Fw0W0oyLYMU4bXJuaMMpulmlHiPOlAEewHhnn%2B86YX&X-Amz-Signature=773342793ec52bf1dd18813a308c74025173b91d18b4a17eb57c1ab385d8172c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLVKOHH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2FfLi%2FWMZ3UPNTUlrRO2im23FcxpS26XzpWTFTihtxgIhANdDVANnRu2zcMMa3XTWWyQHa2BsdebUplkuuwHzygNbKv8DCBoQABoMNjM3NDIzMTgzODA1IgwhMx5TWjJjI30x%2BXkq3AN0hchfCUrZuaTCalp5DXNdDPK0hYfYtB5cZpig5RnieOq4JD1UPLtK4u9DYMcqHxIAIjk9kjL1Gim0qvA3aXuteYlMu1aZW33FvodRq2MX8AsbeRpRB%2FMqlC%2BwrHUdDS2WtfT%2FckT3hCGQLdamVkhALEhiwM6hE%2BqLMzy68dm3p2cq0uJCamkKun9R1FGHRlFDPt83CMDxzVZGiFTjNMo7efzDY47reKLIFgbMUobTk%2B5WhVV3GOc5mp3Qqp8N0U1CkPe7CvQMyXPIcFm3cTmTjcyOdwLfRLAoxeoTvDWW8preOE5lGBPKGNs3M7rbS3TUe3CVWl00AjwNrfo9QL8PoZ%2BdCPimWDHAmNKyPtDg%2Bkr2jZ47Ym3aDKlHpj3j3CneSxvFM6H%2FPDB52Rbv%2BNssc4yM5DeRCZ2Tpui%2FibNKSocjfqup7t59RbqAhMQshEwAUqUUStrxLxzvKBYz89HhGkE%2B7YLAx%2Biv19EgmHlaX4qin%2FTdGlytXtgcKnqoSThYN0VQPKLAiCS3SdtriGLy61G8Yq8TZLY1N1JPlvpUySZtR6kmhAcqp8Uzw3GU%2FJmvZBPgt3XwmasFTCnQHvTh0b9%2BGIUwy%2FhMRyTCQ6Nt3Zt9%2B9xo%2B5jGPDUAZjDIg6K%2BBjqkAeepYKkH7HPMfyspGNKpsC5Pa%2Bs4gAC%2FfWoIiaHmUPvaEzluJl6lOoks9zhuU78ytnkD6xSsmIj54XegbQ5T5g99skQQLbG%2Bw0cWZpR8EDreF6HqQenQ0DSg1CeTxP9JP8oNMhB5eaKp%2BmoaFdyVopyWrU5V2Ou3mw8r6rcKXphBzI%2BWqAJOgjMr9fUovjFVaw0RDK9dfryr2Ydcr7UhTyA%2BqHEz&X-Amz-Signature=4c7c708999a287318743629b5e885e8e03f8485d452a731401fcc0a48a6e394a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBILFEC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbOmy1Sx62Gq033CVTrQnnpTsRqjRNM52UTA7DgZ5QuAiAIgKaKAYXg%2Baru6%2BklGO%2BKv9CNEHdHay7F1FgbytECASr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMxxGAAZppfsf7H0oVKtwDVQTnfKrDMRC843kNwB7UZIqn3pX5ypUN8xYMC7pMRt42nHokFeZCJLx1vBQ9rq4R6pvDg8U9%2B2pNMebkzfFB4Kon6Zi%2BK93HFnk78iqTpmJ4WSTOaWFqKdXLvYb%2Fg09fLB1VQVk9qAO%2Bbro2Of1cQtne3dGuKBTfOutRTl7DjqkFZnTmFdgW0C7whplSlq3v%2BfNcRx4NhPCV5d9cJrSPhDvZr9Ovtz8KedpvSyOOb5UWezaD6M1NpPsulh1Dqim8JHpjjHmfXCipnFBtqxouAANIa9vf1gKWzxXIzr2MX4MtrkTqQdxRoCoW4XRj0mZk7puq7Pu7I7k2oIiNBPllQcDyDWf3UzBE%2Fmyec44Sp9f%2B5ezL104eMFl2bHg7OZNti5iqCYMzjrRChR0KLV5Z1Ftw4wH%2BjMkE%2FZSuEygDN2VFuCnvyZHWj0DEhEwtva1CZ6WD4ZdEL%2Bwrh3Uklq1efgM8lGRzEVldZZH53MfEkbqhLtJajI%2BkvJXBSJSyu7Ed3iHEaaFryfbSpxPIY0EEyo03vKQFPXltKTuVfYX1VNtcK43dAOgHxgNICucKbDdrW4dOAAl2Lbi0383ymeqF3Ol77TCWFws15ZwGDLhCDeL9otI9upGN1t5c55kwgoSivgY6pgGXtCGEat0zSaS7AjgaTF13hzRDxLHOK0yv9MYoQa8DBHxsAlRQ078vwWpH9UapoKIZ%2BU1fDs2VqXYNnkN6%2BbZ3f6cDn82z%2B8IH7LN5AK6wlibjgUAiGfI9NoSSP8EHnKW5y1b1LiAUAHRFhl4maPlj3VyM2%2F2zdZ7qylPvYP7%2F8nTy8qN86JJRd4W8DCmBydw39mBAeUMOGrbpHYse2vFZDi36eAKv&X-Amz-Signature=6ec1b42cecd234b39d66b96b4628e2c3b77deeb0fbf31bba24652f936d58cc68&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
