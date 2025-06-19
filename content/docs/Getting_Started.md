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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5PP6L7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfYLWRLjvzSAaxY4dBbN2DhyxWLH7bxOnwI2LzvuGUXAiBIgbi3WNdIzgvRLkehEfR5j48PO7RDM2xOyxlGmVv8GSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiDaszc2B8P2%2BoDKtwDwAssyK6JZfVTJX5U2KRvSBpefKW%2Fi0QP7La6snop8DSypbMvr%2FzGXBJq%2F9Lb06EZb%2FiR9HKkZb09oxQ%2F3vWl5nggnew3GNsy1zvYUiQCIJiXZrgYN9t%2Fun1DbJ8Ts2M%2F040dUscmj0MnQrmTovJZlxkUkjH2CMy7xXiWE%2FRpfxqfBZ1QQj08531PT0GWYUJ8Be08qbq8KHT1MQdlL6dIGJcdgSLssAVfQqHSG%2Bqn4%2BBwymCUJWgOZTZolEbSOJRl7D2duz%2BGD%2B%2F2Pok4b9EWrhqZF9AxepAjb0UVd%2BEXuPd74ODcjZErsFyqu2IP%2F%2FNbObooXhlbGzrmTQT0lf2U0RfriVyW7ru0ATBYBCCuerAC63n0lzZ9qlZjbrrFQHR%2F1f2g3moQO%2BCGCyW3o%2FlMGZH%2FqbLHTc9hSfXZvTp8UzWyj3ASiiuVnQXsQCSqFg6GnLrgE3KTJ3t6Jq92HJo2D6QmLZ%2FKsoq3gk4SBO%2FM2KD9%2FoIMLddu09kfPuJxIYNitd%2BiJKyqKCnPYnF0o6Qni48Wd4IBKRSa%2FMAYfGeepXZeMGtakocTO0dlbUJOXJjNA7mBon6vIhS1L7ELkFvH%2F5QIHm3ys6AH4t36R4Ya%2FuEEmb4%2F3ggBX%2B3YADsw%2B97QwgY6pgEwHJrfBGIQZN68o6E%2B1bd5uzvl4CJhkG5JKrF11iV1niLgGM54oPgABUhcgb2SQjFPtuwL4oJFg9c%2FErpj707VljSeR%2F2wLEBpmelhsCm9t0F1epnp9mjaxCq9c65oKDxO1qi4qfHFi9YXxEmufQbzghvB%2FuT26iPMD9SQ%2BGEdnW98p452BfrtjxTBX1%2BODPf66B2%2FX4VxK75v7niH6RuvLVmWgDv2&X-Amz-Signature=332d15cc4fa0050f5c24243e9202b6e48a705605d686c1fc54e22f1f35c30eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5PP6L7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfYLWRLjvzSAaxY4dBbN2DhyxWLH7bxOnwI2LzvuGUXAiBIgbi3WNdIzgvRLkehEfR5j48PO7RDM2xOyxlGmVv8GSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiDaszc2B8P2%2BoDKtwDwAssyK6JZfVTJX5U2KRvSBpefKW%2Fi0QP7La6snop8DSypbMvr%2FzGXBJq%2F9Lb06EZb%2FiR9HKkZb09oxQ%2F3vWl5nggnew3GNsy1zvYUiQCIJiXZrgYN9t%2Fun1DbJ8Ts2M%2F040dUscmj0MnQrmTovJZlxkUkjH2CMy7xXiWE%2FRpfxqfBZ1QQj08531PT0GWYUJ8Be08qbq8KHT1MQdlL6dIGJcdgSLssAVfQqHSG%2Bqn4%2BBwymCUJWgOZTZolEbSOJRl7D2duz%2BGD%2B%2F2Pok4b9EWrhqZF9AxepAjb0UVd%2BEXuPd74ODcjZErsFyqu2IP%2F%2FNbObooXhlbGzrmTQT0lf2U0RfriVyW7ru0ATBYBCCuerAC63n0lzZ9qlZjbrrFQHR%2F1f2g3moQO%2BCGCyW3o%2FlMGZH%2FqbLHTc9hSfXZvTp8UzWyj3ASiiuVnQXsQCSqFg6GnLrgE3KTJ3t6Jq92HJo2D6QmLZ%2FKsoq3gk4SBO%2FM2KD9%2FoIMLddu09kfPuJxIYNitd%2BiJKyqKCnPYnF0o6Qni48Wd4IBKRSa%2FMAYfGeepXZeMGtakocTO0dlbUJOXJjNA7mBon6vIhS1L7ELkFvH%2F5QIHm3ys6AH4t36R4Ya%2FuEEmb4%2F3ggBX%2B3YADsw%2B97QwgY6pgEwHJrfBGIQZN68o6E%2B1bd5uzvl4CJhkG5JKrF11iV1niLgGM54oPgABUhcgb2SQjFPtuwL4oJFg9c%2FErpj707VljSeR%2F2wLEBpmelhsCm9t0F1epnp9mjaxCq9c65oKDxO1qi4qfHFi9YXxEmufQbzghvB%2FuT26iPMD9SQ%2BGEdnW98p452BfrtjxTBX1%2BODPf66B2%2FX4VxK75v7niH6RuvLVmWgDv2&X-Amz-Signature=712387ccd089d829dbb1d84a1a5ac911507f0591b9affab581e98d2f44acbccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5PP6L7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfYLWRLjvzSAaxY4dBbN2DhyxWLH7bxOnwI2LzvuGUXAiBIgbi3WNdIzgvRLkehEfR5j48PO7RDM2xOyxlGmVv8GSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiDaszc2B8P2%2BoDKtwDwAssyK6JZfVTJX5U2KRvSBpefKW%2Fi0QP7La6snop8DSypbMvr%2FzGXBJq%2F9Lb06EZb%2FiR9HKkZb09oxQ%2F3vWl5nggnew3GNsy1zvYUiQCIJiXZrgYN9t%2Fun1DbJ8Ts2M%2F040dUscmj0MnQrmTovJZlxkUkjH2CMy7xXiWE%2FRpfxqfBZ1QQj08531PT0GWYUJ8Be08qbq8KHT1MQdlL6dIGJcdgSLssAVfQqHSG%2Bqn4%2BBwymCUJWgOZTZolEbSOJRl7D2duz%2BGD%2B%2F2Pok4b9EWrhqZF9AxepAjb0UVd%2BEXuPd74ODcjZErsFyqu2IP%2F%2FNbObooXhlbGzrmTQT0lf2U0RfriVyW7ru0ATBYBCCuerAC63n0lzZ9qlZjbrrFQHR%2F1f2g3moQO%2BCGCyW3o%2FlMGZH%2FqbLHTc9hSfXZvTp8UzWyj3ASiiuVnQXsQCSqFg6GnLrgE3KTJ3t6Jq92HJo2D6QmLZ%2FKsoq3gk4SBO%2FM2KD9%2FoIMLddu09kfPuJxIYNitd%2BiJKyqKCnPYnF0o6Qni48Wd4IBKRSa%2FMAYfGeepXZeMGtakocTO0dlbUJOXJjNA7mBon6vIhS1L7ELkFvH%2F5QIHm3ys6AH4t36R4Ya%2FuEEmb4%2F3ggBX%2B3YADsw%2B97QwgY6pgEwHJrfBGIQZN68o6E%2B1bd5uzvl4CJhkG5JKrF11iV1niLgGM54oPgABUhcgb2SQjFPtuwL4oJFg9c%2FErpj707VljSeR%2F2wLEBpmelhsCm9t0F1epnp9mjaxCq9c65oKDxO1qi4qfHFi9YXxEmufQbzghvB%2FuT26iPMD9SQ%2BGEdnW98p452BfrtjxTBX1%2BODPf66B2%2FX4VxK75v7niH6RuvLVmWgDv2&X-Amz-Signature=590296fcba289ae0245425c78a04117b79f88cf341a2788c7f9cd7a1da0b48bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QIIVAG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCicLWS6x3gQmrlxOqSpvxYrpUFd0mA7I37J3kmeUpNBwIgG1FlvXpuY0I2iJfrQ9gyJdvfuuVrZl7bSmw9Vt5VpgoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWocgh03suZ9kiQyrcA9qi0sK6n5PhCKoch3mi%2F6Fjq%2FQ4qFWc1EsgjFvwrdEklRJIw7FgqCoe8jBtrsCmLxPDE3tIpO9zYFTtdmzZwb195Fn34U95kYAGD744ySsTXuUszBxnpp5Ym2nR4B23Aqbh4A9qqGRTYmCNs4qYUekG%2Fh5%2BmQxH28Xs0rLeh2VUMT8AMb5%2B0N2XDzCp7rs6VtF9WXxV6msOtLPIvMuh9XuLas6e%2BORPUGJqmJB7eLjttkAY7R8ECHgP6VVKJQ%2BHF%2FjT8ruHZh5E7dQ5K5ZbI9fBkexGZVPAIh3TdN6dHfiJOV%2FhHsxVFZwLJY2JToyr97g3f4v3T0nTqhEz3%2FgKLe9x4o6uyUkZXtFD8N003g5WKoke3F3yuU06BAGLAD52iAfqNs43r%2FR3gdZxHx8FS0rO2iaTZFRqVzTNXFdCvMS4gKdlat5B5snV0%2B%2FDGyqLoW%2FQV98foDHREiFPt7zJYkGM75P17heAc26aI3%2FWIlFYl5thDHk3Dgj6swFRk0dQC6DS3XYHb0uj36FKdkkB7jqHv84Z%2B0MLdh6%2FXLJukjMHq9vvEn0%2BOAErEy5KFRclSyn47GP%2Bc6qTpfXwj6l9zdkx3RPe%2Bw2MmJUZYpnRTnpljBRz9hfGh5BUi%2BNaMK3e0MIGOqUBx%2Bym5819LTFwISn%2BjSeE2dWTIhbFQSQykYBeA1tShW2PgMGY2a7mhuPHvRP4Veau4kORipz9U4MJfgrhTJfsW9MKBOjuJVJgNKlorFVdI8SrFijeD1OR815IrHPlIduV6RuXEfrGbk3INEDbAIViijKctsDpiyv68Z%2BfakQXdGaU4uYJoTWdkTrKrhTkEfFgPmeJqbvAR1Cpm14i8ZC9VokiYVkY&X-Amz-Signature=da79ed4e1ed4a91e59295497f495e69cafefa29fc979a97ffdd43eb402d3abde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AYLZ6RI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDec6V8Xg91NXk6CyV1Qe1t%2BrH2E5goWeySu88ajuvEiAiEA7%2BQmxUh%2BJ%2FyL6w3mC5TKL56pKkhVDiHr7UI9aokwCdAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPRjk0ANEurmBvKdSrcA6jRl%2FBfDk3AieyDScqpiKDz%2FaucgvliULYKo4nlcPQKITbh9Z108G6TwqCjANoBxbZWojjY4NytaYeADoKFx8BpWzpPeewYbIFhxBCPr37Zv%2B1twRQrSPfZB0WrD3ka%2B%2Fvl1UJ4N9iixL2zwZPLgGOTnJvbwGKuAXc5GAfGn3sTASUfTNbL4In1uDckxHNesMYgg41MUkUTR9D9Kg%2BrDorETX9v9Lip4nSPpdxEhdrQBOQYDDBGc8gRHYsPou26sv0ww4mfGDcfaTiYtbz3RSXtHfx5exUAFbpKjKDZo%2BAP1uRbg6KIfwi6Jf5wXu9zbVpPkiAQj26JFeqUrijLlwBoI53ERsdR15Jbny44nT6oT5n1hUO3we1Gu4rljXfRlR4HdqbkVMysOYjsoRDu7cPs4wgCvl%2BPRgxScdVXnZBOGp8M0Q6YmmJEL2MvjhbVEo11KVK4fZbZq%2Bz6CC%2BIu60%2FflzNzbUbPkEae%2BC0FRWfeTPn6SwE6FTnqwUl7LUBcthPIwlU3kWIXLyZE07g5yKWIpSWRN4VBp73pFDZ8WAVDMh5bdlyIGHpRrxJWMpjJtY9Ng3hufK443z%2BVmAE%2F24fAjTsBo1tRlSrG%2BFQZfP%2FS4RWv7o7zEMZNR8EMNbd0MIGOqUB0zTXoFwZG6brurrhjFL9Ub%2FBaip7gO3LXDKPgPn4UDyRH5SFFtP0c9mzkfzUo3o0y9gl1qQmKJvLxgmLjBYLDECg%2BOBbO%2Boq%2BAGHvl0tlVqPlPwWIGN01GYUSCfGgPqXeNgUvpAMXFSNYSu3Bu4Iif5dbuURByNWUJkFZrOlr9G%2FhPxG5t9Dm3nkXuxqmiCqRZqlopjD2oemaAtXMQ20i%2Faaf0WZ&X-Amz-Signature=624b8cb868bdaad7ab4e4aafe4708b3d24a767fd36ef96ae1e9250d688d28e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5PP6L7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfYLWRLjvzSAaxY4dBbN2DhyxWLH7bxOnwI2LzvuGUXAiBIgbi3WNdIzgvRLkehEfR5j48PO7RDM2xOyxlGmVv8GSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSiDaszc2B8P2%2BoDKtwDwAssyK6JZfVTJX5U2KRvSBpefKW%2Fi0QP7La6snop8DSypbMvr%2FzGXBJq%2F9Lb06EZb%2FiR9HKkZb09oxQ%2F3vWl5nggnew3GNsy1zvYUiQCIJiXZrgYN9t%2Fun1DbJ8Ts2M%2F040dUscmj0MnQrmTovJZlxkUkjH2CMy7xXiWE%2FRpfxqfBZ1QQj08531PT0GWYUJ8Be08qbq8KHT1MQdlL6dIGJcdgSLssAVfQqHSG%2Bqn4%2BBwymCUJWgOZTZolEbSOJRl7D2duz%2BGD%2B%2F2Pok4b9EWrhqZF9AxepAjb0UVd%2BEXuPd74ODcjZErsFyqu2IP%2F%2FNbObooXhlbGzrmTQT0lf2U0RfriVyW7ru0ATBYBCCuerAC63n0lzZ9qlZjbrrFQHR%2F1f2g3moQO%2BCGCyW3o%2FlMGZH%2FqbLHTc9hSfXZvTp8UzWyj3ASiiuVnQXsQCSqFg6GnLrgE3KTJ3t6Jq92HJo2D6QmLZ%2FKsoq3gk4SBO%2FM2KD9%2FoIMLddu09kfPuJxIYNitd%2BiJKyqKCnPYnF0o6Qni48Wd4IBKRSa%2FMAYfGeepXZeMGtakocTO0dlbUJOXJjNA7mBon6vIhS1L7ELkFvH%2F5QIHm3ys6AH4t36R4Ya%2FuEEmb4%2F3ggBX%2B3YADsw%2B97QwgY6pgEwHJrfBGIQZN68o6E%2B1bd5uzvl4CJhkG5JKrF11iV1niLgGM54oPgABUhcgb2SQjFPtuwL4oJFg9c%2FErpj707VljSeR%2F2wLEBpmelhsCm9t0F1epnp9mjaxCq9c65oKDxO1qi4qfHFi9YXxEmufQbzghvB%2FuT26iPMD9SQ%2BGEdnW98p452BfrtjxTBX1%2BODPf66B2%2FX4VxK75v7niH6RuvLVmWgDv2&X-Amz-Signature=425601cc59bc2d320cbf9a66ab8f05c339f447ea8fdc9b0b6800882b11554eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
