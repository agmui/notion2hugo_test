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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YU4MI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQykjWYiNHJDyvNHm0UcAi35kX1%2Fv1E5aZmHY3Q4IzHAiEAqioRaHl1t3GNhF7sV45HHGJiQCVuSyVEckVZgkM4GdoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScodp4YIk4og9jaSrcA3xdVrHA7cGq%2BJy%2B2x2wb82Z7D0jC5Uvl4AZ0LoomfstcH5V0PB%2BfGmrK5u3Uk7%2BfNJWOKXLtdncS0u5tprVx4szQDuYl9u9bpetMjTaRy7gVdeB3Z3kohAMi0EWKMLxFnV2vuu4ePlTzHUWNeKgbSllh2UPppdbhH1biwHwEP1WtZlRgenpXPvwm7Pc13blXnJZmuFtQz7uNyZ6UNfCJGKXOEyuuh%2FNQknwRdzmnaffqn7lBF9mqo%2BaS7GqeI%2B42FpeOPZaxlveLYPYdc7FVeWiIhLx46wlQZx4OJ6iNbIw38tXFtYlXwF9rbcw9EYwaRrsMaL5YrwaFXCs2pmGFr2xaUSq1XrqFM5HwdpiawQkw1jxbaDtQ3%2FEakTXbwQhSY%2BaJA3BMYlo0Gdwa%2F8I6nYdH%2FAKbkhG7%2F5MWK0o7%2FMTg%2Fc8xfFZJ6N8z%2BL9SPRL2TlR8DOinsq686gTx9tNF3DqLt4I5qrwwgXKOsAzg7gu8oiECAA0UDYpa22MC0t0RoM%2Bl%2BIFRcXWJmeLAqEAsHoQLAt5PHFpoV7v%2Fqbssm7avabgNIMyDTUr6xk1FINe6cKzzh8uAgmY3pUw6QIAkTYYVl%2B%2FJIkVueD7in7iXQhVBjSXBaTZkYqvdNVvMOX8yMMGOqUB5SiX%2BCT1WTKW%2FNoUb%2BawC20YQr0%2BWCvHX%2FAL7JeHfuthArr%2FOfKSP1Z4aoTnQuYVtesgtMhkLEDPIQCav5Pjw93MX1FAvgyLGS%2Bp4xvS9dMn2cBjmbmDAWUQBcezpMOeM6xz7kPe9wwDHdNdUwpjgKOtw6XH3kNEzmM6NWgMGJq0NUGP0PBQ7tBnFXp93rNYhLSdbm72baolVm3BPuDQAKrYUeSa&X-Amz-Signature=91199aaa6aef9edb440a0f0246fb45f7081dbf003c2e6f139cd6534e75cd7eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YU4MI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQykjWYiNHJDyvNHm0UcAi35kX1%2Fv1E5aZmHY3Q4IzHAiEAqioRaHl1t3GNhF7sV45HHGJiQCVuSyVEckVZgkM4GdoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScodp4YIk4og9jaSrcA3xdVrHA7cGq%2BJy%2B2x2wb82Z7D0jC5Uvl4AZ0LoomfstcH5V0PB%2BfGmrK5u3Uk7%2BfNJWOKXLtdncS0u5tprVx4szQDuYl9u9bpetMjTaRy7gVdeB3Z3kohAMi0EWKMLxFnV2vuu4ePlTzHUWNeKgbSllh2UPppdbhH1biwHwEP1WtZlRgenpXPvwm7Pc13blXnJZmuFtQz7uNyZ6UNfCJGKXOEyuuh%2FNQknwRdzmnaffqn7lBF9mqo%2BaS7GqeI%2B42FpeOPZaxlveLYPYdc7FVeWiIhLx46wlQZx4OJ6iNbIw38tXFtYlXwF9rbcw9EYwaRrsMaL5YrwaFXCs2pmGFr2xaUSq1XrqFM5HwdpiawQkw1jxbaDtQ3%2FEakTXbwQhSY%2BaJA3BMYlo0Gdwa%2F8I6nYdH%2FAKbkhG7%2F5MWK0o7%2FMTg%2Fc8xfFZJ6N8z%2BL9SPRL2TlR8DOinsq686gTx9tNF3DqLt4I5qrwwgXKOsAzg7gu8oiECAA0UDYpa22MC0t0RoM%2Bl%2BIFRcXWJmeLAqEAsHoQLAt5PHFpoV7v%2Fqbssm7avabgNIMyDTUr6xk1FINe6cKzzh8uAgmY3pUw6QIAkTYYVl%2B%2FJIkVueD7in7iXQhVBjSXBaTZkYqvdNVvMOX8yMMGOqUB5SiX%2BCT1WTKW%2FNoUb%2BawC20YQr0%2BWCvHX%2FAL7JeHfuthArr%2FOfKSP1Z4aoTnQuYVtesgtMhkLEDPIQCav5Pjw93MX1FAvgyLGS%2Bp4xvS9dMn2cBjmbmDAWUQBcezpMOeM6xz7kPe9wwDHdNdUwpjgKOtw6XH3kNEzmM6NWgMGJq0NUGP0PBQ7tBnFXp93rNYhLSdbm72baolVm3BPuDQAKrYUeSa&X-Amz-Signature=d7d9ffec76ec7e68566521b3802a1bac4d623d1d6e4a8be3f62f0623c7430e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YU4MI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQykjWYiNHJDyvNHm0UcAi35kX1%2Fv1E5aZmHY3Q4IzHAiEAqioRaHl1t3GNhF7sV45HHGJiQCVuSyVEckVZgkM4GdoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScodp4YIk4og9jaSrcA3xdVrHA7cGq%2BJy%2B2x2wb82Z7D0jC5Uvl4AZ0LoomfstcH5V0PB%2BfGmrK5u3Uk7%2BfNJWOKXLtdncS0u5tprVx4szQDuYl9u9bpetMjTaRy7gVdeB3Z3kohAMi0EWKMLxFnV2vuu4ePlTzHUWNeKgbSllh2UPppdbhH1biwHwEP1WtZlRgenpXPvwm7Pc13blXnJZmuFtQz7uNyZ6UNfCJGKXOEyuuh%2FNQknwRdzmnaffqn7lBF9mqo%2BaS7GqeI%2B42FpeOPZaxlveLYPYdc7FVeWiIhLx46wlQZx4OJ6iNbIw38tXFtYlXwF9rbcw9EYwaRrsMaL5YrwaFXCs2pmGFr2xaUSq1XrqFM5HwdpiawQkw1jxbaDtQ3%2FEakTXbwQhSY%2BaJA3BMYlo0Gdwa%2F8I6nYdH%2FAKbkhG7%2F5MWK0o7%2FMTg%2Fc8xfFZJ6N8z%2BL9SPRL2TlR8DOinsq686gTx9tNF3DqLt4I5qrwwgXKOsAzg7gu8oiECAA0UDYpa22MC0t0RoM%2Bl%2BIFRcXWJmeLAqEAsHoQLAt5PHFpoV7v%2Fqbssm7avabgNIMyDTUr6xk1FINe6cKzzh8uAgmY3pUw6QIAkTYYVl%2B%2FJIkVueD7in7iXQhVBjSXBaTZkYqvdNVvMOX8yMMGOqUB5SiX%2BCT1WTKW%2FNoUb%2BawC20YQr0%2BWCvHX%2FAL7JeHfuthArr%2FOfKSP1Z4aoTnQuYVtesgtMhkLEDPIQCav5Pjw93MX1FAvgyLGS%2Bp4xvS9dMn2cBjmbmDAWUQBcezpMOeM6xz7kPe9wwDHdNdUwpjgKOtw6XH3kNEzmM6NWgMGJq0NUGP0PBQ7tBnFXp93rNYhLSdbm72baolVm3BPuDQAKrYUeSa&X-Amz-Signature=53b3546deac527b5b70c0a08435aed33c4efa29aa554e3bbdf3fc069c0004053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP76PDO6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDlH%2FfunVC2Yhpwne2dKwhGuFYyMTVd1gJ%2Bc9sd%2B2gkAiB3XI%2Bd%2F%2BzMmIpB%2BTjFuZOZNDCWPCd%2BZdqEIwGASVbKtCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYDbZIgsuV8sAWrpOKtwDDfyvOaffa9x%2BoTjs6M12Kw0zreh6YRj7aTUGFaByR7cNmXFBCcoEiYI8yuRbpm7lfrUZUL3j6yupoh7ppfLHlfNeh27hkqo3GrvYYHxpkj5rhjqfKsmnzn5xHItE0QzqRWfIbXmpei62USFoCRK%2F77Z9AobUVNwSqsd1EEqnsEj0YBBi2h0%2Bk328jCorxJhhyyKbDQ8NEDi1JmVlQN14J3eGQRbwV3Ga8UnIQwGNrdQ%2BCOQ67uk246EiXsY1F6ch6tonEvDhGLNj6UbfNrvndxG%2Bc4TJwNYfrBiM9T2Wymsac1UD7YJh3MhtEsIE28UIrQPldUFOhrjFc%2BEsfrdScjDIt13%2BsX6PZeL1Bp%2BXrDrHs6EMbVLz8RaJFRsvDIFuAV2hjVrXbGRwNYqScufYdq6QNMINvMq3PmB2YoM%2FeIDS4g5Br9qOX3OqdO2fOwA5Pr%2BbP8UT18D9Vy4nEd4WilepA3fbF4JiQjMbBvcgDxSE2LVIuQ8WoDLxyUlqfxRX518xwa4wYbxvdiwHLel2tyTOK6e4L5TPRxwvRigOSN8RxQun7L1tgeFS5Jy2cQKlPtThYnTnSVlO%2BuAzTYb0l%2BJwM6lqqNGVb6c%2FqbqyH2heiPsZn3t%2B05VFenswk%2F3IwwY6pgHkDhfb3vOvlZS5rCEXYKrgohMuiDZnRb%2BIn91qQebh9lM8YWGpFpZYE%2BvvB38QShOxLBrX7CCHJSSbLcVGA02N8Td4aMCKMpd%2FH6RzHmnNuE1%2B5E%2BOA5%2F3rXh5jvzabjaCMUl1Ti5T24X86OjIsjH%2FgeIpxr17NLcfZ1ifl0Oh5OcYtAQU8FlfFv0kw3yZRAn2KkPzP4VV3yC%2B2e6y2EkiQoIwgTcj&X-Amz-Signature=b68fb0c5fbaa7a628f63a3e5b0b521eda01452ff49a599de59bce77ceabf3881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMK34XMR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgXzVoxwlTKgNCkz8qElqLnOxsQNz52pxpymJxRkFwgIhAJ3786fWX5H5obOOMkH8RQdPA8tKd4aMzS0KW0uVYPzpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ1t7A5BoWgqCxpLgq3AMY2uUxwLVzLr92pY9Hc%2FftMDI4em2bnCFsqj13bfKaKeimAIJDks2PBrb0Tngq2nPvcvl8FOjYNT7xxx6FDnaBRbrbrAxcBPOecoC%2FE3e6ZffWZ91aVh1Uw0atgl%2BUrOYw6dV6TuG%2BBCoRUePdcOAS%2FTkeEk1BLbF2mZqMUZbVUPjbFqIRVBi6UEUKUET2p7%2Bo%2FkXRSxssuDiPgw%2FwlwZiSnBXTzCDHL85iVGrhD7JIhUH6jlgZrKFwLilKcwxlX6MQkzWKQicBodVmCUOF9uz6jDezAf4OKetQ98xXF3wafSIRl%2FylP3jFGLm6cIXPpO3HBvmUjDrQjTv%2FV2I7mpjiHQOmm4M%2BAaUY8VIVuffeAlrzA3O770mRZtJ389U0foDXoFimyEwlU7WeXO%2B3JPX3TcnU7uDvPKs6j2CI9jA2ppeniQO8gDWKyEq9GXNh9ecULhNojxn2J0U3U443H6jUkFFBRuqJHgbT0NpTDCXzW7Xzutd4tmeiSgOq2bCnWOVx4BYjrYQO2A6wEBlyPSI%2F68ffe%2FKBuVB0fko%2BFNd6GmwnBYUxdSpaj04HflUZqpoPV9cmNozXqvf0%2FHKKnbfmuiJzSsTcKEvsv7X1LUt2MCYwBERSYooSDfU7DDa%2FMjDBjqkAaYppHQJRr9kqv7XKIWos8lwMkYbqz92hziCu1uDeY330cdtBe%2Fq5HMdoTHstYyRPKrYlSpsCuxEBxppMcwVSjsJf7I93yOxXeyqREEEixqQdb0aLEO8SoLkoRqNaysA7OYO9rtJqjeqR5vbqqVWCkltNvEOuX6gbFQJABxZDIusFRIZrFl%2FqAPjWCsS%2FLxaeF4SaZpWhb2ff%2FVuFg%2BIr4%2FMjMjT&X-Amz-Signature=4ddb8949101a437d7bd4ac04833e9307ee3d0188a94a836f771a4cd473f0e131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32YU4MI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQykjWYiNHJDyvNHm0UcAi35kX1%2Fv1E5aZmHY3Q4IzHAiEAqioRaHl1t3GNhF7sV45HHGJiQCVuSyVEckVZgkM4GdoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCScodp4YIk4og9jaSrcA3xdVrHA7cGq%2BJy%2B2x2wb82Z7D0jC5Uvl4AZ0LoomfstcH5V0PB%2BfGmrK5u3Uk7%2BfNJWOKXLtdncS0u5tprVx4szQDuYl9u9bpetMjTaRy7gVdeB3Z3kohAMi0EWKMLxFnV2vuu4ePlTzHUWNeKgbSllh2UPppdbhH1biwHwEP1WtZlRgenpXPvwm7Pc13blXnJZmuFtQz7uNyZ6UNfCJGKXOEyuuh%2FNQknwRdzmnaffqn7lBF9mqo%2BaS7GqeI%2B42FpeOPZaxlveLYPYdc7FVeWiIhLx46wlQZx4OJ6iNbIw38tXFtYlXwF9rbcw9EYwaRrsMaL5YrwaFXCs2pmGFr2xaUSq1XrqFM5HwdpiawQkw1jxbaDtQ3%2FEakTXbwQhSY%2BaJA3BMYlo0Gdwa%2F8I6nYdH%2FAKbkhG7%2F5MWK0o7%2FMTg%2Fc8xfFZJ6N8z%2BL9SPRL2TlR8DOinsq686gTx9tNF3DqLt4I5qrwwgXKOsAzg7gu8oiECAA0UDYpa22MC0t0RoM%2Bl%2BIFRcXWJmeLAqEAsHoQLAt5PHFpoV7v%2Fqbssm7avabgNIMyDTUr6xk1FINe6cKzzh8uAgmY3pUw6QIAkTYYVl%2B%2FJIkVueD7in7iXQhVBjSXBaTZkYqvdNVvMOX8yMMGOqUB5SiX%2BCT1WTKW%2FNoUb%2BawC20YQr0%2BWCvHX%2FAL7JeHfuthArr%2FOfKSP1Z4aoTnQuYVtesgtMhkLEDPIQCav5Pjw93MX1FAvgyLGS%2Bp4xvS9dMn2cBjmbmDAWUQBcezpMOeM6xz7kPe9wwDHdNdUwpjgKOtw6XH3kNEzmM6NWgMGJq0NUGP0PBQ7tBnFXp93rNYhLSdbm72baolVm3BPuDQAKrYUeSa&X-Amz-Signature=c6f8402f2e613920f5d69510de0a74343ee17328e8d301f5e704e46e89946ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
