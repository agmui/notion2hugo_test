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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEGHEXE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDslw5H%2F6nHxmJLZGqA6BB31w6dtuGXc3dkcI%2BBst%2F22AiEAsyW1h4ZaX4cto%2FbddXqa3twCM1ycNAAFhuRB4IqiMWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Cu23BMGYrFuVVPCrcAz3DaH7oQsrFFzvVjcZzHNwvgyMlkdZR0gw655cpI%2B30O2loiSV61uBlCfnBDonXSu3a4N8Pq1la5%2FrU0G4HT%2BDPP9G20S2XSy1FUDo3dUZXaa%2FzuU%2Bxa6rPnQOa%2BGhu%2F8dCV5FOzjUmcYPZIGfLJjuFRPOkq3CY5KDcWYp5O0pcl8x67bujBZNU2%2BUHmG2jGvKQUAu0nwaT8b9zFuq31%2BYMKOh2OOP4UhCEy9Ml1%2BnP8RWnze9D6sF2L5BdWYe9DKcATXrgsUK1GehX%2BgNBB9UyrF3Mz%2FdsxOHyCYOX96G6APM%2FJFpAI%2FZuIBZqSx5t3R4Yyt71sFw6IHMEq6Iqav4nL6argTQKLRM4xBU49v9BWw3cy9it%2B%2BVOsRrRhhJUiFka%2B2B%2FAZaIRwtZuG%2B2bTQwmXwwxZnbAULOK%2BHEJ6t6yvdMv4nKgN470PdYFlImiZ%2FbC%2BddeEpyGDu%2BkEf%2FyMePzMvHXigVBGAZ%2FKaG0%2FhONsFSu281tY%2Fop%2BnO4sVLSECGulGjMFyLwDVfH3Xgo7dhK1mfR6jxfHkV8WPRCBIs3Yv07eFJN9ba2MJXTgMVOmAwfe0ii2M%2BVqeFFgA6UhjhEsW9TLzv%2FIICExiLM6dAdS0qhSbDsO6sR70NMNzE28QGOqUBjBGV9px8lltg5m688gaq5Mfg2PZq0aarM%2BdPFxgQO%2FSt5dR6GnQ2L2EnPCTAXPf1zP0XvXa7e7Zq5Dhl3TWjisVtu01dxNy0AybuVKl2l6dLyv6VjhR7G7S67xXKEz1u92KBVLgAl1c0dOlM7WwhgWHrI7MBm9BWbcQ489UvofXHIyxTPJziAy06RcGOEwaKwW6qLH%2FjznNpWS2lfUMzWUHClePy&X-Amz-Signature=848ea27529e0ce69672481f557389f361a0bcd84dfb47bb7a79d042a23fcf376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEGHEXE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDslw5H%2F6nHxmJLZGqA6BB31w6dtuGXc3dkcI%2BBst%2F22AiEAsyW1h4ZaX4cto%2FbddXqa3twCM1ycNAAFhuRB4IqiMWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Cu23BMGYrFuVVPCrcAz3DaH7oQsrFFzvVjcZzHNwvgyMlkdZR0gw655cpI%2B30O2loiSV61uBlCfnBDonXSu3a4N8Pq1la5%2FrU0G4HT%2BDPP9G20S2XSy1FUDo3dUZXaa%2FzuU%2Bxa6rPnQOa%2BGhu%2F8dCV5FOzjUmcYPZIGfLJjuFRPOkq3CY5KDcWYp5O0pcl8x67bujBZNU2%2BUHmG2jGvKQUAu0nwaT8b9zFuq31%2BYMKOh2OOP4UhCEy9Ml1%2BnP8RWnze9D6sF2L5BdWYe9DKcATXrgsUK1GehX%2BgNBB9UyrF3Mz%2FdsxOHyCYOX96G6APM%2FJFpAI%2FZuIBZqSx5t3R4Yyt71sFw6IHMEq6Iqav4nL6argTQKLRM4xBU49v9BWw3cy9it%2B%2BVOsRrRhhJUiFka%2B2B%2FAZaIRwtZuG%2B2bTQwmXwwxZnbAULOK%2BHEJ6t6yvdMv4nKgN470PdYFlImiZ%2FbC%2BddeEpyGDu%2BkEf%2FyMePzMvHXigVBGAZ%2FKaG0%2FhONsFSu281tY%2Fop%2BnO4sVLSECGulGjMFyLwDVfH3Xgo7dhK1mfR6jxfHkV8WPRCBIs3Yv07eFJN9ba2MJXTgMVOmAwfe0ii2M%2BVqeFFgA6UhjhEsW9TLzv%2FIICExiLM6dAdS0qhSbDsO6sR70NMNzE28QGOqUBjBGV9px8lltg5m688gaq5Mfg2PZq0aarM%2BdPFxgQO%2FSt5dR6GnQ2L2EnPCTAXPf1zP0XvXa7e7Zq5Dhl3TWjisVtu01dxNy0AybuVKl2l6dLyv6VjhR7G7S67xXKEz1u92KBVLgAl1c0dOlM7WwhgWHrI7MBm9BWbcQ489UvofXHIyxTPJziAy06RcGOEwaKwW6qLH%2FjznNpWS2lfUMzWUHClePy&X-Amz-Signature=74485728288af02d4dc49fe333e5cc0dc3da97b5ad72a22d76a29948a431fdd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEGHEXE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDslw5H%2F6nHxmJLZGqA6BB31w6dtuGXc3dkcI%2BBst%2F22AiEAsyW1h4ZaX4cto%2FbddXqa3twCM1ycNAAFhuRB4IqiMWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Cu23BMGYrFuVVPCrcAz3DaH7oQsrFFzvVjcZzHNwvgyMlkdZR0gw655cpI%2B30O2loiSV61uBlCfnBDonXSu3a4N8Pq1la5%2FrU0G4HT%2BDPP9G20S2XSy1FUDo3dUZXaa%2FzuU%2Bxa6rPnQOa%2BGhu%2F8dCV5FOzjUmcYPZIGfLJjuFRPOkq3CY5KDcWYp5O0pcl8x67bujBZNU2%2BUHmG2jGvKQUAu0nwaT8b9zFuq31%2BYMKOh2OOP4UhCEy9Ml1%2BnP8RWnze9D6sF2L5BdWYe9DKcATXrgsUK1GehX%2BgNBB9UyrF3Mz%2FdsxOHyCYOX96G6APM%2FJFpAI%2FZuIBZqSx5t3R4Yyt71sFw6IHMEq6Iqav4nL6argTQKLRM4xBU49v9BWw3cy9it%2B%2BVOsRrRhhJUiFka%2B2B%2FAZaIRwtZuG%2B2bTQwmXwwxZnbAULOK%2BHEJ6t6yvdMv4nKgN470PdYFlImiZ%2FbC%2BddeEpyGDu%2BkEf%2FyMePzMvHXigVBGAZ%2FKaG0%2FhONsFSu281tY%2Fop%2BnO4sVLSECGulGjMFyLwDVfH3Xgo7dhK1mfR6jxfHkV8WPRCBIs3Yv07eFJN9ba2MJXTgMVOmAwfe0ii2M%2BVqeFFgA6UhjhEsW9TLzv%2FIICExiLM6dAdS0qhSbDsO6sR70NMNzE28QGOqUBjBGV9px8lltg5m688gaq5Mfg2PZq0aarM%2BdPFxgQO%2FSt5dR6GnQ2L2EnPCTAXPf1zP0XvXa7e7Zq5Dhl3TWjisVtu01dxNy0AybuVKl2l6dLyv6VjhR7G7S67xXKEz1u92KBVLgAl1c0dOlM7WwhgWHrI7MBm9BWbcQ489UvofXHIyxTPJziAy06RcGOEwaKwW6qLH%2FjznNpWS2lfUMzWUHClePy&X-Amz-Signature=ed67155489b8b268b47002db0dec704599319ded070985d56d2de7e731caf748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEXPUGIO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDiozmn3Ix8rBBkSBlxaHNq8%2BSCaZacE7SOLaeWYz7kSgIhAI%2B8jUzv4YLI5uGa9clV087LomZgt3vgfzkyoCUXdqkmKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy834JocFgRMswiCToq3APhIavNbnZ2N6E8DvpVmgbCrgieDYRSGa1kOrOF4ykM0o2ZLXflydX3ggLfJsylnXEm8980dy5%2Bal0mootzUkb8VFdeiyuLeKNhB%2BJDsyhtoSJQiAgZggtAsxdHUBrbKgERVNOlrwmwcyXYDL8JsIw88TZFwwhK5ANkqmtkevycYuEPN6zsI8bSbjgdJqPSg2osbOzFaGJese4BG4ETlwlQFWwAqGwJGIIHBTkHHsz719PQcOL4LN3bZoGAmcVn5N5%2FkbcxkJhN7WRWNiJ7k8vrDftAO%2BtZGv%2BpJexNkRzXVAOv4j3%2BheS8a%2BWaMYqey8%2B3AOhFVZMdWraYrHX0MlwRo9dH8zcEzzOr9%2BOa1eujsNGc9KIZCKrB3zCP6i%2BgqTGpHetBHMZ7fKLQwZtNNyBO0ChRRl01n7E%2Bpm4cX8%2BrfpauEXni15QQcHGqnFKTiOSmSBBEomB6v7Xs%2FA8guZpDYFHCzwEv4WmH1VmpA655BZKUisHqaR68NxQRzIKdP8oT6X%2BgBqY%2BeikH9ECffhBqlj6c0hueOxnSwhnMo%2F2D1tmyAQD7KSqfth62eY83%2ByKEogMfMM1oT6Q4%2FyMouS%2FbvGbi5BBIuX9CK1rt0vIN0nSKWlWj%2BOq1L2gjPDD0xNvEBjqkAeZauPzL9Myzdcf7bVxXgVq0l7dLWfXnaCE8AV%2B%2B%2BBifZU%2FdUiYyeq4JpLUKzwq4YJZCHNvyNcmdr2f2JAsrdq9FN2RADtcrkRUP4YPH0D1nhOQYgT%2BgySu%2F1kBXVi%2F1%2B6drrvJUU%2F5gUDm8U0oFVn%2BGK7esKXo74b%2FCbO8diAFGwOXYsuxqRuV3Bi6HIartrZwlizrEeCUmPG2ZXyp%2BYyX5cG0D&X-Amz-Signature=e66de7ff08fc9f5cd3748c5735a57bd8d1ba491284c2bce7f98d8061d518314e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCZ3QQR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEaXizB97n2KXHcLXFA8kukLPlsDVUuoUBiVMn1d1uaQIgcZm%2BfKEchdi1d4%2F2MlmJkhG1jt72znYM%2Ffemu4vj2GIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeU4ITQoog14PzP7SrcA0DwLcbYYNN4tpuHbohkRApGZdwUGkLHORg1S%2BPRFgidOPS%2FDSZj9vsmTYElUoXikjjONVjhm8aEMcxoIBddcBPQ5hjf3C44gvZ72KW6iEW9ywjPM%2B7sVVRHXPRRTXC9aTPNy7M93m9MRkaCb4D5MD7LxUrIzJTCQsHJ7hjTqtsaw4vySxjMgB2g%2FmwfPf0sTxPBc2t3VNodEpCtxTG6LBDZ5K6Ok5zDYcUh5gwtKJLzi6mG65eNo3dQ3XFv5XqWnSoD1Oxlfs487LnYM6yzLUKC3eojnLxy3BIRVheQnm%2BlO36vxxs2f53s00sY%2FcQq3aZYTWgwqZ3WWEWoyFoo9qKRlUhFE5tvvAF6M92hmoXT2N0KrDER%2FUSG41uNTfmVPx01Xbu%2BJCYlnINxFeCxjoQLj%2BkiYRIwv5upOD%2FjJTbVjxLCkzhXu57WER0Tny0sA2JTzMt6y9hrdXIkRxA5jRSdXaEpLmEJjRF49G5L670QyN%2BMq86KudPgC7WX9VWDhxuRHKgQTn0SsdfUcZGpz7D7QkRe3EpU4NU2Pu6JOk7J7p88ocRyxDh4%2FZOdi%2BhrGBF2PFisAuqKY8d5RPHGKIGZSZD2WNri0yqQ%2BzQKHreCRTZlt268%2FJIkUjHvMOrE28QGOqUBjj0Ayc737wJLKY1Wyl9eOHnQvq9g5CKTLPB1O2ncShJmrRqsjWZrWEYmN8tejDgCmpq5TvIfYYRKeEH%2Bi4sg8uqM1kRsmPLTwmSB2fFIygKT2asw5IGnAFDLqCYfMKf5QbjdJa3dkMbmMT6mEU793RU2DpyBpqPSgoMcA1LBUz634Szcl0qMH18RhP9072VN3wGg6gr%2BNYJBs3xjWsJPRhCZL2xj&X-Amz-Signature=83fda809c8b659863bd41e90426a554670a1f5cab5d4de1be44edf5aa565b252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEGHEXE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDslw5H%2F6nHxmJLZGqA6BB31w6dtuGXc3dkcI%2BBst%2F22AiEAsyW1h4ZaX4cto%2FbddXqa3twCM1ycNAAFhuRB4IqiMWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8Cu23BMGYrFuVVPCrcAz3DaH7oQsrFFzvVjcZzHNwvgyMlkdZR0gw655cpI%2B30O2loiSV61uBlCfnBDonXSu3a4N8Pq1la5%2FrU0G4HT%2BDPP9G20S2XSy1FUDo3dUZXaa%2FzuU%2Bxa6rPnQOa%2BGhu%2F8dCV5FOzjUmcYPZIGfLJjuFRPOkq3CY5KDcWYp5O0pcl8x67bujBZNU2%2BUHmG2jGvKQUAu0nwaT8b9zFuq31%2BYMKOh2OOP4UhCEy9Ml1%2BnP8RWnze9D6sF2L5BdWYe9DKcATXrgsUK1GehX%2BgNBB9UyrF3Mz%2FdsxOHyCYOX96G6APM%2FJFpAI%2FZuIBZqSx5t3R4Yyt71sFw6IHMEq6Iqav4nL6argTQKLRM4xBU49v9BWw3cy9it%2B%2BVOsRrRhhJUiFka%2B2B%2FAZaIRwtZuG%2B2bTQwmXwwxZnbAULOK%2BHEJ6t6yvdMv4nKgN470PdYFlImiZ%2FbC%2BddeEpyGDu%2BkEf%2FyMePzMvHXigVBGAZ%2FKaG0%2FhONsFSu281tY%2Fop%2BnO4sVLSECGulGjMFyLwDVfH3Xgo7dhK1mfR6jxfHkV8WPRCBIs3Yv07eFJN9ba2MJXTgMVOmAwfe0ii2M%2BVqeFFgA6UhjhEsW9TLzv%2FIICExiLM6dAdS0qhSbDsO6sR70NMNzE28QGOqUBjBGV9px8lltg5m688gaq5Mfg2PZq0aarM%2BdPFxgQO%2FSt5dR6GnQ2L2EnPCTAXPf1zP0XvXa7e7Zq5Dhl3TWjisVtu01dxNy0AybuVKl2l6dLyv6VjhR7G7S67xXKEz1u92KBVLgAl1c0dOlM7WwhgWHrI7MBm9BWbcQ489UvofXHIyxTPJziAy06RcGOEwaKwW6qLH%2FjznNpWS2lfUMzWUHClePy&X-Amz-Signature=a96cac2251f7fc91eb1248332d8371ccabe25075cf7b45db160628603d5843f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
