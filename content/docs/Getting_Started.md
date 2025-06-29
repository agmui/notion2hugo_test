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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LSLMOM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL0Zq53gWuDBRPo77kg%2B8Fly%2BfXh%2B4dYwdDo3n%2FiZ8MwIhAOY7jIVREuxnU%2BADahjMCEq%2BM03KYgVt42NN9FoNkfpZKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsSuECGc481trD3EUq3AOo8m5G9XZQwoRTqeYMt%2F5Ly3Jr%2FxMGtv%2BNmZ2v4DUMWEFnUlxqrEK3gn3a%2Fpq8IB%2Bne7dROejcg4i9LiIMtknXkIksolsb33rCJnQ0iZbGPPpGzLjpKfpcyUzrWa2L4ZpKMVPUTiTFvls9TLdEP8l5BIuD8w6NtkUdv64Ibv9haonOn6N6K%2FDUiJ9mk6tcUYBpiAoLUsrK4rJTN6mnenQhvmUnDsV1rl9Mtj3bOr6%2FJum1S9nKMnkUW2j7wx6VHHHT9zQgQvUe10dwyd89GA7y3i1kF1x6KvxvmI3ouLhMcPo6IYwzYX7bRRf7PMfNK2PxhseIPf6m%2BB2S2u9%2Fo0NgqGkhkRl6DADhcjJQrBGFZThsj%2Fk6YpnviA69SuClnJ0B0D4KIkFVR2nBgCXCvCL1fmpN4AE39MGzVUlS0oKQ1WsTPiTykRvkQE0djiOiRq8NM2CmZhlfef%2BkLjDW5as6GAF32fRMGzbS4Dew2DCg7YfkDWem%2BXm3M0A4vHuV9GhCq8AQPGxY7lcPlLIhHPEwuC4MN%2FvNMZonHx%2FLUZXzfQNNRkOZT6ebh3RJTI6t4l4dpMVlZLhDZ0w4bQeti%2FGAAvugCbXf2B3ROfgTdG%2BqK44yvLBjpNAidL1k5TCA%2B4XDBjqkAWR5mDF44Dr%2BIW0RGdvqa%2FI7jWrfXSCjztdRo9VlCrgpHIA5DRYqwdCDcgytUbPTlydRO2XNss3V77N65NVn9OY5Qvzs7BnXLvvdPmx%2FrsvtSML4A6UdrfPqMA8dlKrlulq02M2YzEspZQjR1e0vGWIgMVb%2FrXNumK8r%2FRl9bvFC%2BR19AalKpzJkqjhCJEtpcz59JNVu7kuDzpF88PyyAq%2FFHQgl&X-Amz-Signature=4e2ce59543c0c193e193da3cfdf066369ca5f3ca736c46d40bfd3ed67c8ff0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LSLMOM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL0Zq53gWuDBRPo77kg%2B8Fly%2BfXh%2B4dYwdDo3n%2FiZ8MwIhAOY7jIVREuxnU%2BADahjMCEq%2BM03KYgVt42NN9FoNkfpZKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsSuECGc481trD3EUq3AOo8m5G9XZQwoRTqeYMt%2F5Ly3Jr%2FxMGtv%2BNmZ2v4DUMWEFnUlxqrEK3gn3a%2Fpq8IB%2Bne7dROejcg4i9LiIMtknXkIksolsb33rCJnQ0iZbGPPpGzLjpKfpcyUzrWa2L4ZpKMVPUTiTFvls9TLdEP8l5BIuD8w6NtkUdv64Ibv9haonOn6N6K%2FDUiJ9mk6tcUYBpiAoLUsrK4rJTN6mnenQhvmUnDsV1rl9Mtj3bOr6%2FJum1S9nKMnkUW2j7wx6VHHHT9zQgQvUe10dwyd89GA7y3i1kF1x6KvxvmI3ouLhMcPo6IYwzYX7bRRf7PMfNK2PxhseIPf6m%2BB2S2u9%2Fo0NgqGkhkRl6DADhcjJQrBGFZThsj%2Fk6YpnviA69SuClnJ0B0D4KIkFVR2nBgCXCvCL1fmpN4AE39MGzVUlS0oKQ1WsTPiTykRvkQE0djiOiRq8NM2CmZhlfef%2BkLjDW5as6GAF32fRMGzbS4Dew2DCg7YfkDWem%2BXm3M0A4vHuV9GhCq8AQPGxY7lcPlLIhHPEwuC4MN%2FvNMZonHx%2FLUZXzfQNNRkOZT6ebh3RJTI6t4l4dpMVlZLhDZ0w4bQeti%2FGAAvugCbXf2B3ROfgTdG%2BqK44yvLBjpNAidL1k5TCA%2B4XDBjqkAWR5mDF44Dr%2BIW0RGdvqa%2FI7jWrfXSCjztdRo9VlCrgpHIA5DRYqwdCDcgytUbPTlydRO2XNss3V77N65NVn9OY5Qvzs7BnXLvvdPmx%2FrsvtSML4A6UdrfPqMA8dlKrlulq02M2YzEspZQjR1e0vGWIgMVb%2FrXNumK8r%2FRl9bvFC%2BR19AalKpzJkqjhCJEtpcz59JNVu7kuDzpF88PyyAq%2FFHQgl&X-Amz-Signature=61c50dfc05730ce7b7b78902b271726964785402e331003b5e2ebeb5bb9715cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LSLMOM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL0Zq53gWuDBRPo77kg%2B8Fly%2BfXh%2B4dYwdDo3n%2FiZ8MwIhAOY7jIVREuxnU%2BADahjMCEq%2BM03KYgVt42NN9FoNkfpZKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsSuECGc481trD3EUq3AOo8m5G9XZQwoRTqeYMt%2F5Ly3Jr%2FxMGtv%2BNmZ2v4DUMWEFnUlxqrEK3gn3a%2Fpq8IB%2Bne7dROejcg4i9LiIMtknXkIksolsb33rCJnQ0iZbGPPpGzLjpKfpcyUzrWa2L4ZpKMVPUTiTFvls9TLdEP8l5BIuD8w6NtkUdv64Ibv9haonOn6N6K%2FDUiJ9mk6tcUYBpiAoLUsrK4rJTN6mnenQhvmUnDsV1rl9Mtj3bOr6%2FJum1S9nKMnkUW2j7wx6VHHHT9zQgQvUe10dwyd89GA7y3i1kF1x6KvxvmI3ouLhMcPo6IYwzYX7bRRf7PMfNK2PxhseIPf6m%2BB2S2u9%2Fo0NgqGkhkRl6DADhcjJQrBGFZThsj%2Fk6YpnviA69SuClnJ0B0D4KIkFVR2nBgCXCvCL1fmpN4AE39MGzVUlS0oKQ1WsTPiTykRvkQE0djiOiRq8NM2CmZhlfef%2BkLjDW5as6GAF32fRMGzbS4Dew2DCg7YfkDWem%2BXm3M0A4vHuV9GhCq8AQPGxY7lcPlLIhHPEwuC4MN%2FvNMZonHx%2FLUZXzfQNNRkOZT6ebh3RJTI6t4l4dpMVlZLhDZ0w4bQeti%2FGAAvugCbXf2B3ROfgTdG%2BqK44yvLBjpNAidL1k5TCA%2B4XDBjqkAWR5mDF44Dr%2BIW0RGdvqa%2FI7jWrfXSCjztdRo9VlCrgpHIA5DRYqwdCDcgytUbPTlydRO2XNss3V77N65NVn9OY5Qvzs7BnXLvvdPmx%2FrsvtSML4A6UdrfPqMA8dlKrlulq02M2YzEspZQjR1e0vGWIgMVb%2FrXNumK8r%2FRl9bvFC%2BR19AalKpzJkqjhCJEtpcz59JNVu7kuDzpF88PyyAq%2FFHQgl&X-Amz-Signature=347f47632e8a1d261b4234f0476752bed35c33273f4637d308650c7bb6d9b0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS5FDQK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBzrnfcIg26fu%2B3RY7Uh6FkQkpoJVY81pcEfBkz7fPUwIgY6QgwZkIMd1%2Fs8A3xYHMa3Yi3AAuN8vS%2B6F%2F%2BKI9WmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNRXL0jVRA5oLTuIyrcAz2YfXPYUOucBaZ1JcPwEL%2BJ1WzCflZjEaahuW5Xf%2F1NspHW4Tx4DSH3gcH8xL2VZPkGGv469quJOC7CVipV2gNlUh9ZNg2OCcAI%2Fq3vAHwFuLvXTMlYFUbEsyVoWUpLa066lxRil39M0GiIR%2FrYt5JJVSx0y2WPO0LqX8%2F2ZsschzNcnrGozuOIzLFiJCFKVjQN0xHliGIwPlcukIoGHntBU%2F89Vq5KaHAXxhGk%2Fqhoa2gvQBxrs2YlWkgTVxpEsE6x0NubCKBCNaiV%2BWMLXCufyWf%2BbeMiLxQ7MMB%2B5ASEfE1ux68DGhIsoPqTUWka%2BHmeIMkTCfNwumDw0hjN6Tz4U7%2FRnO8gq1X4qqQ0dh48DGKwuNCNYJv3dRj8KJHpH5gDL3EpKo0CRib1ZzTQigBz9qJu%2BZ7iACK46mzJjjiqLl1B7LGssleh%2B5LCl7IrOoPW8n2PY9N8v5o8wT8ftbDrhe9d%2BWiWTwRRDeoEPrVw4XsUjaNUZMdH36IW5dKNgHhjH%2B80XdsaQ6HuUI7H7HO331mILWBYT8kVSbLN7BQGThjnYkPMv3y78wXA8wopP4e8Jnfn4V5WJrXKEeZRRjIKdpZzrmZ%2BBWRQ4EahhZ2DZhMrlqLCLTUnHf9iMKH7hcMGOqUBgnKzjpio53FzeIqacm5tCeiXfeNTL6SEBYxH3sS5hL%2BSlFPx1pe39193ctCfaiNa5lfUrcsox7z84xVm%2FWj1aNRos9lGLd2XAHTaLLJ9CQAp1%2B4%2FxCPSOVR8UCGC7mESTCthHFelKVKS5xngN7lt8YTE16drdLiXLxzb7B%2BcGhE9ZzWn4vsY8FIjBx1caP%2FAc0cExioauqxN44u7KfAfbAac8Wsp&X-Amz-Signature=08b102f57e614a36313609f00b44f2383eee92bef10677eb2902cb4aabaad86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XNTP5J%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0y%2BRDdJbfSAJwMvW5P4ccT7wHhmkfWTUhNVextUNZ0gIhAMmh8qJb2wEByrLfnq9mId%2BWyXVpBTbtVLVa09GFw1JhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr%2FWZSMisVEsp51fMq3AOCxy%2BKXfcuy25FzdeIZsE%2Fz95MuFELAvjDlurUqbo4FTBpUzXrO%2F8vVNqRR3oQogRlOWx%2FvYs%2BRiz4O%2BsSVoLJpwrV6uRXCpzV%2FHuRJ5w6zHGaE8gixK%2BOrTpROuImuF%2F8YYjRPBFXVRikz%2BndLPlkPNMAjDAuh7V2jA0JfP3ZPHt0RiTPlZefq9U%2BxowEcmBY3eq1dCszBRtylt4USEqxaZoNdaiGMaFPkWoDBdg7WWVyw%2BwmLz%2FJKS%2Fac0WxuXlD6iEshunOQ8s%2B9zRO1uPzeqXCxG2Z1vy9cmPCvziOb74WTuhdPxHLrHWGqIbezLJtjzuHft1i%2BWU1IW%2BLB09Q2wi8FJ%2F1tEh0X%2FbYJ4y%2FLdzt4qAChVqYGO83YgYRbo2cpLhw1YaT8n%2BIqzuPESlgF0VrG2wrAafURYZZ44O1zV5%2Bp8XZWU0DJ7IwE2XjlleieBMskso9A2rJgyNHbAT3vgsgEPwh1%2BLLO9vS4v99od00Jtik3%2FD%2FuZmu3gu1spN8DydU29GRuvsoYNbwdnRl9zkFmgbUCDI%2FnJl2essvzlSSPo7cTeji9a7BphZVzuPftyQ%2BUrtz7D%2FETRKONT3vhQTiqT%2FrMA3ANeZSlUqvMT2KIhQXmb1Q0uO5pTCB%2B4XDBjqkAWnnwTGuV2i%2BjyEGzhu%2F7yK2SINa4N9ZY7ynpyPxxG4bZUCe6a7%2BtThaDIzBTCP%2FxFGGlnQvPH%2F6DM%2BYoipYwQuLTzuSYExH7pbOmGjDfCcc1TN545c1yRr7aUPmA5ZE3m5Ict6ds8NZgSD4hseaGIilDDY7ha50Dnl0PL5s4W%2BcpmqAQZCPGtHrKGlEo0%2FluKhb1Lhqs%2FOmDBXZkcAewAPmxO9g&X-Amz-Signature=24b78c2c4429eb0e1c1569516ac87025ddfff4266c1258d35a36a31422691f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LSLMOM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL0Zq53gWuDBRPo77kg%2B8Fly%2BfXh%2B4dYwdDo3n%2FiZ8MwIhAOY7jIVREuxnU%2BADahjMCEq%2BM03KYgVt42NN9FoNkfpZKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsSuECGc481trD3EUq3AOo8m5G9XZQwoRTqeYMt%2F5Ly3Jr%2FxMGtv%2BNmZ2v4DUMWEFnUlxqrEK3gn3a%2Fpq8IB%2Bne7dROejcg4i9LiIMtknXkIksolsb33rCJnQ0iZbGPPpGzLjpKfpcyUzrWa2L4ZpKMVPUTiTFvls9TLdEP8l5BIuD8w6NtkUdv64Ibv9haonOn6N6K%2FDUiJ9mk6tcUYBpiAoLUsrK4rJTN6mnenQhvmUnDsV1rl9Mtj3bOr6%2FJum1S9nKMnkUW2j7wx6VHHHT9zQgQvUe10dwyd89GA7y3i1kF1x6KvxvmI3ouLhMcPo6IYwzYX7bRRf7PMfNK2PxhseIPf6m%2BB2S2u9%2Fo0NgqGkhkRl6DADhcjJQrBGFZThsj%2Fk6YpnviA69SuClnJ0B0D4KIkFVR2nBgCXCvCL1fmpN4AE39MGzVUlS0oKQ1WsTPiTykRvkQE0djiOiRq8NM2CmZhlfef%2BkLjDW5as6GAF32fRMGzbS4Dew2DCg7YfkDWem%2BXm3M0A4vHuV9GhCq8AQPGxY7lcPlLIhHPEwuC4MN%2FvNMZonHx%2FLUZXzfQNNRkOZT6ebh3RJTI6t4l4dpMVlZLhDZ0w4bQeti%2FGAAvugCbXf2B3ROfgTdG%2BqK44yvLBjpNAidL1k5TCA%2B4XDBjqkAWR5mDF44Dr%2BIW0RGdvqa%2FI7jWrfXSCjztdRo9VlCrgpHIA5DRYqwdCDcgytUbPTlydRO2XNss3V77N65NVn9OY5Qvzs7BnXLvvdPmx%2FrsvtSML4A6UdrfPqMA8dlKrlulq02M2YzEspZQjR1e0vGWIgMVb%2FrXNumK8r%2FRl9bvFC%2BR19AalKpzJkqjhCJEtpcz59JNVu7kuDzpF88PyyAq%2FFHQgl&X-Amz-Signature=3620476a2a8c4a8f8f4d97de917a2ab5d68cba4e0f13b05216a1ee967d574168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
