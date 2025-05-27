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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TNLC36%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7To1HFO0pRtOShAieYXQHgQj%2F46k6gh%2FYElHnKXB9QIhAOLxzlqlxNPw86TpXI0XrS8wok2ljgsaka1rvZL%2Fms9jKv8DCFYQABoMNjM3NDIzMTgzODA1Igw75aELvzeSxIy%2Ffwsq3AOqEBPMJxWw%2BpdWkAPvPhepVybH7VzvV%2BcmqLKD7w2jmPmjCupjwy3dYCXCpJJCuUJ7aY4cHuoy2k7uRjI%2BBCqiWPLAJwDzixUeigv%2BY2P1wMtHu%2BK4EaLUVjJoUJmgxNZA44mvJusI0uJ3JsOZBZ6OiUn6fqizafeqpm6cDikQ5%2BxLQwvC%2FqK%2BbzHhs46bxEEWjkW0G%2B2dl1caQ4nZ65OBCp%2BEZTBQh8u3FjNA3TNyt3xF528uY%2BPvh3PEdlCGRUdul82r2rm9HdT0v9B2UGb2ntKkwX4j74jqz621ieIEG5cbM%2Bpvjm80ZoWasK0rjYwdVd9a7wDOA01JZzSIeGQP0h3L506IhsIkxRlewxjBzQbH6eWcpnnfBLybZHIxMns5q1zLzrGCKZp0iUCkcZmsF7m9sJ4bJUH1G8MrL3ZkB6D%2BDiuZrZdQpgnss9TiFyBYJGowAz8rhsJwfi9GXmqRK6bXabPp7qaTVZKcENw8NHv88f5UY0hj%2BxEWl5mvALgm5udf27EbWH4xipdyyAgwX7lNRsVYDgkMxrk6%2BwKUEEY%2F9%2Fr7MszEq0PgUolDkVY%2FN6LU4pnT%2BAyV4oXQxmzAFxYzgApRizhTJoLS3A%2FMzeuX1FJbb5xDp7e7bTCZkNXBBjqkAdbXvXepsJUO%2BCYweP2%2FDAB789LY7Xejf98T06%2FXINrOFHabJ5aroyf468YyAyZlELENpWmijhaxQn%2FPIsWfC9Q0HYcB%2F8AM2aODsEgWI4YburIO4SRcnhRyQh26HpEX82%2FF9TdP2r9pbtMGk5aaVHtMcfoePsnOSSSuicHrfJr1ileun05ge1kVfFWvjMqTefC9W9rCbcMKCERDCvCNRVAStoug&X-Amz-Signature=4b10989a51dff9ebb1837ba1f2e1f2bfc94944bc2b9ef7b4c82e8382b7453ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TNLC36%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7To1HFO0pRtOShAieYXQHgQj%2F46k6gh%2FYElHnKXB9QIhAOLxzlqlxNPw86TpXI0XrS8wok2ljgsaka1rvZL%2Fms9jKv8DCFYQABoMNjM3NDIzMTgzODA1Igw75aELvzeSxIy%2Ffwsq3AOqEBPMJxWw%2BpdWkAPvPhepVybH7VzvV%2BcmqLKD7w2jmPmjCupjwy3dYCXCpJJCuUJ7aY4cHuoy2k7uRjI%2BBCqiWPLAJwDzixUeigv%2BY2P1wMtHu%2BK4EaLUVjJoUJmgxNZA44mvJusI0uJ3JsOZBZ6OiUn6fqizafeqpm6cDikQ5%2BxLQwvC%2FqK%2BbzHhs46bxEEWjkW0G%2B2dl1caQ4nZ65OBCp%2BEZTBQh8u3FjNA3TNyt3xF528uY%2BPvh3PEdlCGRUdul82r2rm9HdT0v9B2UGb2ntKkwX4j74jqz621ieIEG5cbM%2Bpvjm80ZoWasK0rjYwdVd9a7wDOA01JZzSIeGQP0h3L506IhsIkxRlewxjBzQbH6eWcpnnfBLybZHIxMns5q1zLzrGCKZp0iUCkcZmsF7m9sJ4bJUH1G8MrL3ZkB6D%2BDiuZrZdQpgnss9TiFyBYJGowAz8rhsJwfi9GXmqRK6bXabPp7qaTVZKcENw8NHv88f5UY0hj%2BxEWl5mvALgm5udf27EbWH4xipdyyAgwX7lNRsVYDgkMxrk6%2BwKUEEY%2F9%2Fr7MszEq0PgUolDkVY%2FN6LU4pnT%2BAyV4oXQxmzAFxYzgApRizhTJoLS3A%2FMzeuX1FJbb5xDp7e7bTCZkNXBBjqkAdbXvXepsJUO%2BCYweP2%2FDAB789LY7Xejf98T06%2FXINrOFHabJ5aroyf468YyAyZlELENpWmijhaxQn%2FPIsWfC9Q0HYcB%2F8AM2aODsEgWI4YburIO4SRcnhRyQh26HpEX82%2FF9TdP2r9pbtMGk5aaVHtMcfoePsnOSSSuicHrfJr1ileun05ge1kVfFWvjMqTefC9W9rCbcMKCERDCvCNRVAStoug&X-Amz-Signature=e74cf398c412178e92f490612c0fe84635ec8d396ff58285d0a4635d45fcd833&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TNLC36%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7To1HFO0pRtOShAieYXQHgQj%2F46k6gh%2FYElHnKXB9QIhAOLxzlqlxNPw86TpXI0XrS8wok2ljgsaka1rvZL%2Fms9jKv8DCFYQABoMNjM3NDIzMTgzODA1Igw75aELvzeSxIy%2Ffwsq3AOqEBPMJxWw%2BpdWkAPvPhepVybH7VzvV%2BcmqLKD7w2jmPmjCupjwy3dYCXCpJJCuUJ7aY4cHuoy2k7uRjI%2BBCqiWPLAJwDzixUeigv%2BY2P1wMtHu%2BK4EaLUVjJoUJmgxNZA44mvJusI0uJ3JsOZBZ6OiUn6fqizafeqpm6cDikQ5%2BxLQwvC%2FqK%2BbzHhs46bxEEWjkW0G%2B2dl1caQ4nZ65OBCp%2BEZTBQh8u3FjNA3TNyt3xF528uY%2BPvh3PEdlCGRUdul82r2rm9HdT0v9B2UGb2ntKkwX4j74jqz621ieIEG5cbM%2Bpvjm80ZoWasK0rjYwdVd9a7wDOA01JZzSIeGQP0h3L506IhsIkxRlewxjBzQbH6eWcpnnfBLybZHIxMns5q1zLzrGCKZp0iUCkcZmsF7m9sJ4bJUH1G8MrL3ZkB6D%2BDiuZrZdQpgnss9TiFyBYJGowAz8rhsJwfi9GXmqRK6bXabPp7qaTVZKcENw8NHv88f5UY0hj%2BxEWl5mvALgm5udf27EbWH4xipdyyAgwX7lNRsVYDgkMxrk6%2BwKUEEY%2F9%2Fr7MszEq0PgUolDkVY%2FN6LU4pnT%2BAyV4oXQxmzAFxYzgApRizhTJoLS3A%2FMzeuX1FJbb5xDp7e7bTCZkNXBBjqkAdbXvXepsJUO%2BCYweP2%2FDAB789LY7Xejf98T06%2FXINrOFHabJ5aroyf468YyAyZlELENpWmijhaxQn%2FPIsWfC9Q0HYcB%2F8AM2aODsEgWI4YburIO4SRcnhRyQh26HpEX82%2FF9TdP2r9pbtMGk5aaVHtMcfoePsnOSSSuicHrfJr1ileun05ge1kVfFWvjMqTefC9W9rCbcMKCERDCvCNRVAStoug&X-Amz-Signature=e9ccb7f0c579024ba4990804421134e3420156b866a9b1c04b868ccc6d978730&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBH4WTPJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCS5RGceFdw0tg8MFzDMj3JkfDUfyCvUlcDhzW0nwa%2FAiAKgy0InonCa2Qye8oCWTjbWyKDiDVP9c%2BpofJ5ZTWF6yr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMm5tIlzx8wEcb63JQKtwDikrfQPx6%2BzGRLEjSzt0Esm279uk%2B3OS8%2FFROS4zBng%2F3s3dlsSmcIpCEQBY1mcpRq2nQNUqpk3PZdsPB8HQ1BtH5tbtXJNySLywgZmrrZiR9WpueMyOpird3wiQ2iZcuhXRNoFQ9v5ne1S4NgV%2FLOSmNMG8ZE3cZxN5pDFghHSoItdG%2BIaaANf2SytUCIo18nALpeoXMnEktv6UsgJNGprRAwXcNk0OduaUYJEAnDgBJLldsx98TElA7tGLzA9Q5u3xbsrvZAeUh24TUNzEu0WsfoEnhTqEFFmtywJbA9AJ1s9TxdSWnFjttNTkvNBktoyCoL59PRAEGCWPd5CVrNYATlYmkpi9Hnm8m33PaKHnvlnFBq7uHKBDfrFY5GhmxWYh6bIVGv2zPxrAwykxdQDyaKIgyRpPtoZoNDSYYjCLQymReGZs3VzNG7Lq3TlWUirGXQgR4jorK3YuTo9lkghtHhC9d9QQ%2B45sdLIAWRJLIC7JjSCT2fp8dAjPQMtwyUXMUDPbf6R1etxRRwLCTIytCNW6uutcLzqJDMSGEAXj5hJDuFiQLg6ec6D1TLBi2fzSbouVrzJNNOY7ieqRtjSY63W4FtaBZbCpCN499LTSnGHO7Pvs3fVtPD2swvZDVwQY6pgFKgoOCTAgLuwtlzAg9matSVZrk1leGlWBiJnj31WxvupHaG2fYFrMnJO1Fy2Ecok1IfhjstKOPSHrvmHDm0Tb5rKyoxPAh3UG7crC2J5zS5H7JQQBTc7y1KE8gyrwmwG7djK5aYCzwmJZ8AtSxgHFzGDxKLQRHrnoCSavPTZnMGp103J7jxdEoNuVA6bFjYjaMg%2FoFQmLjKG16kFhxVuw7fmLiAcOV&X-Amz-Signature=13b85a6c92566d338e63eb36b7672bfd31d631159e41042e60b9d498e853673e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBJFCOM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BnvGlPLceuPttZVFp3LaLOV9o3w5iN2J%2Fy3M0BiCEFwIgKZDrInChAwaDWAUqdBlRIRItuNb%2FYCBXZzX7Ga7ji7kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIJ%2BCP6YqzxTFjqShCrcAwwoI8123qbX84krthWRZZvDRSkcXOyU3rFEStTBaGICu2Kolg2OrPkyOtdczW%2Bbh%2F5VUUl%2FPEDTUZOQw1W5CqwL8nwj6rM%2FhNxjmFJK5Cf3qo1exiDXLSRh%2FpBWe2AzFYGvPdw3%2BkiCy55DSL%2Bc46x%2BEitv%2F71ueFlxPR0zG6ydAScG8BrTGCbgHhZ1MyNEcunhpAfJg2qR%2FR%2BqZvv54hrL6SKLn2VmxHvOSQzy4GZlN%2Fm22z9UWWBW1rsJsYhsRX%2BNoi1B3n7Gz3vi16Zp0TdZhc7Ey%2BE7L6heB7qvGlO%2BipJaBpCSKuqQ6Bo%2BEYleLwqI4H184whDBnPfo4flaXkxz0b4Z40K2JGVPZnR9eG40h%2Frh2fZ9WprtW9psnGdZlrh8J8q92Vhp4KyVnlXZ3wcHaYY0%2FA8RbZcVFOiMqVAIsEoYIKD1keidEiqzuc%2Byt1x%2FHURqGvcMmoye2j1S8I%2ByYRK5BBo6m5zrjhEPGwVsNx1SwshMi4%2BpAq41HA72H4yVydgfW8WfrLLAJVjUTddmVrN0SrDvwBjqJJ3GuoAr7QlleGhMOuVLNqkX39wQMeQnr0Caa8lcApCN6b1gEElFyir2zCNMrNjkCIId4ZFFKBVoGzaciAqPD8wMPiQ1cEGOqUBuWfKTZ%2FUBjLTWymhUWkko1XEzzKpuRvqLA7S6vnCVFmjqEyxWwEUOBN26oIuSV72HpybunWDj2T0kOaaUb4sBzBMxSa6%2FbgZR%2BLWyslw0UZzSVrrspRm0fcHLxhqw6SskbgJHv8qU92nepC8EmhWzQYDnaEX5jgqNJO%2BciTLEFqB%2Bw%2FnGngf8mfDf6EmWo37GiPVGvv9xNA64X5Bfp%2B2%2BdCkmDZf&X-Amz-Signature=1766e0f75def4fe8c3b9995e812c6faec8a8588da69c5ecd0d97e804a51ed4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TNLC36%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7To1HFO0pRtOShAieYXQHgQj%2F46k6gh%2FYElHnKXB9QIhAOLxzlqlxNPw86TpXI0XrS8wok2ljgsaka1rvZL%2Fms9jKv8DCFYQABoMNjM3NDIzMTgzODA1Igw75aELvzeSxIy%2Ffwsq3AOqEBPMJxWw%2BpdWkAPvPhepVybH7VzvV%2BcmqLKD7w2jmPmjCupjwy3dYCXCpJJCuUJ7aY4cHuoy2k7uRjI%2BBCqiWPLAJwDzixUeigv%2BY2P1wMtHu%2BK4EaLUVjJoUJmgxNZA44mvJusI0uJ3JsOZBZ6OiUn6fqizafeqpm6cDikQ5%2BxLQwvC%2FqK%2BbzHhs46bxEEWjkW0G%2B2dl1caQ4nZ65OBCp%2BEZTBQh8u3FjNA3TNyt3xF528uY%2BPvh3PEdlCGRUdul82r2rm9HdT0v9B2UGb2ntKkwX4j74jqz621ieIEG5cbM%2Bpvjm80ZoWasK0rjYwdVd9a7wDOA01JZzSIeGQP0h3L506IhsIkxRlewxjBzQbH6eWcpnnfBLybZHIxMns5q1zLzrGCKZp0iUCkcZmsF7m9sJ4bJUH1G8MrL3ZkB6D%2BDiuZrZdQpgnss9TiFyBYJGowAz8rhsJwfi9GXmqRK6bXabPp7qaTVZKcENw8NHv88f5UY0hj%2BxEWl5mvALgm5udf27EbWH4xipdyyAgwX7lNRsVYDgkMxrk6%2BwKUEEY%2F9%2Fr7MszEq0PgUolDkVY%2FN6LU4pnT%2BAyV4oXQxmzAFxYzgApRizhTJoLS3A%2FMzeuX1FJbb5xDp7e7bTCZkNXBBjqkAdbXvXepsJUO%2BCYweP2%2FDAB789LY7Xejf98T06%2FXINrOFHabJ5aroyf468YyAyZlELENpWmijhaxQn%2FPIsWfC9Q0HYcB%2F8AM2aODsEgWI4YburIO4SRcnhRyQh26HpEX82%2FF9TdP2r9pbtMGk5aaVHtMcfoePsnOSSSuicHrfJr1ileun05ge1kVfFWvjMqTefC9W9rCbcMKCERDCvCNRVAStoug&X-Amz-Signature=13e6d543ccf5a1a96cfdbdeb0380e816b79874bbcc8cf58be2801b1936fa8efe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
