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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRZAXW2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDW9d81829Dd9yHtOdV8Ip%2FiLmEd4nOmT%2F%2FJGdjzU2xAwIgWHQQPQvAOZ3yZUV%2BV6mtxmOrauk8IwRQfx2ZGwoZMLEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmBoCAe5JOAnd29jyrcA%2BQ67SAMksz2xh%2Frl7%2BwwAmzmI9gaLsz0WBTodr4AsMTMU7t8L0zbTbgu6s0hXxwnY4AzDgKbVkp%2FKfu2pYdTH974j7m9gcGNssvXfxKh%2BznHmzfvATrSyLbX2hSdjVW%2FX3awFYJURYJ1Farl806%2Fkku5sk5fLuBAjBOAFaeKJhox00Zk5vi3kwaKOrX4B0b62HrPwR643TCP6%2BOgdBmMxblw6gr8%2B4HC9RABvYC8u1FLH7A8Ud0PmKPjni8fklyAKyYnEd8o%2F7Sc6tFphoNYo7laWtr7U3gvbl9bG%2BhfUTdPhbsoA%2B5d95Usd3b%2B9AODr%2Fs6udnFC%2B4RiHEF24HSSNQv1%2FibpKOAH%2BqGHlHZexPCSQujguwyd07gX%2F%2BSnLXGKnyMzbj5xEDe9E%2FN2VRJW8UQYTFuYvJHhjNNJUBFFnmiLstCWjr9WewcLTT8EBoRTKefBcKUDxMwgDwgupHI%2Bso5liG6JguQswJvhg90jw0%2BwXIEE6o5zvZyRHe%2FKkvE4tKtL%2B4J7yADqOrO77BKYP1ZrhAb5FRTwuzoPFyu2tfMLOi1Vu0hMLFuZJjw%2FP8vhQUFsenNk8M404iOmnHegNXxqHnj%2BNMu02MR0WiRdc7mrZ3Gd%2FVghGaHZ8TMLDe8MEGOqUB7EgpMUTQI%2BZ8B17tYbgNycvE090tpOEe%2FV2U3BMMSibzG8vMCx9IwG%2B4fj0UIWaE4iO4NSUP2LQpgftwPMiuQumZLhKSoZQRI%2BYGBWZt8dQD6ZlsxNpMtscAquW%2FtwvjvygCOU8kcjrYPZq5Crqo1Piac7y7cXdIlTJixgBWdO2y6RO26gts165OdrfCJ5WPfIBcID7EZa8IHWyKt0Bll0iarXSc&X-Amz-Signature=854a293fdae1e81a1c41f20ef49444bc7ef62ea5f744f9e427c9f38fbb5aee12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRZAXW2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDW9d81829Dd9yHtOdV8Ip%2FiLmEd4nOmT%2F%2FJGdjzU2xAwIgWHQQPQvAOZ3yZUV%2BV6mtxmOrauk8IwRQfx2ZGwoZMLEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmBoCAe5JOAnd29jyrcA%2BQ67SAMksz2xh%2Frl7%2BwwAmzmI9gaLsz0WBTodr4AsMTMU7t8L0zbTbgu6s0hXxwnY4AzDgKbVkp%2FKfu2pYdTH974j7m9gcGNssvXfxKh%2BznHmzfvATrSyLbX2hSdjVW%2FX3awFYJURYJ1Farl806%2Fkku5sk5fLuBAjBOAFaeKJhox00Zk5vi3kwaKOrX4B0b62HrPwR643TCP6%2BOgdBmMxblw6gr8%2B4HC9RABvYC8u1FLH7A8Ud0PmKPjni8fklyAKyYnEd8o%2F7Sc6tFphoNYo7laWtr7U3gvbl9bG%2BhfUTdPhbsoA%2B5d95Usd3b%2B9AODr%2Fs6udnFC%2B4RiHEF24HSSNQv1%2FibpKOAH%2BqGHlHZexPCSQujguwyd07gX%2F%2BSnLXGKnyMzbj5xEDe9E%2FN2VRJW8UQYTFuYvJHhjNNJUBFFnmiLstCWjr9WewcLTT8EBoRTKefBcKUDxMwgDwgupHI%2Bso5liG6JguQswJvhg90jw0%2BwXIEE6o5zvZyRHe%2FKkvE4tKtL%2B4J7yADqOrO77BKYP1ZrhAb5FRTwuzoPFyu2tfMLOi1Vu0hMLFuZJjw%2FP8vhQUFsenNk8M404iOmnHegNXxqHnj%2BNMu02MR0WiRdc7mrZ3Gd%2FVghGaHZ8TMLDe8MEGOqUB7EgpMUTQI%2BZ8B17tYbgNycvE090tpOEe%2FV2U3BMMSibzG8vMCx9IwG%2B4fj0UIWaE4iO4NSUP2LQpgftwPMiuQumZLhKSoZQRI%2BYGBWZt8dQD6ZlsxNpMtscAquW%2FtwvjvygCOU8kcjrYPZq5Crqo1Piac7y7cXdIlTJixgBWdO2y6RO26gts165OdrfCJ5WPfIBcID7EZa8IHWyKt0Bll0iarXSc&X-Amz-Signature=24ea68194111d00c37be2e126d1a621ecb6eebf80d68768666a52797813966b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRZAXW2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDW9d81829Dd9yHtOdV8Ip%2FiLmEd4nOmT%2F%2FJGdjzU2xAwIgWHQQPQvAOZ3yZUV%2BV6mtxmOrauk8IwRQfx2ZGwoZMLEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmBoCAe5JOAnd29jyrcA%2BQ67SAMksz2xh%2Frl7%2BwwAmzmI9gaLsz0WBTodr4AsMTMU7t8L0zbTbgu6s0hXxwnY4AzDgKbVkp%2FKfu2pYdTH974j7m9gcGNssvXfxKh%2BznHmzfvATrSyLbX2hSdjVW%2FX3awFYJURYJ1Farl806%2Fkku5sk5fLuBAjBOAFaeKJhox00Zk5vi3kwaKOrX4B0b62HrPwR643TCP6%2BOgdBmMxblw6gr8%2B4HC9RABvYC8u1FLH7A8Ud0PmKPjni8fklyAKyYnEd8o%2F7Sc6tFphoNYo7laWtr7U3gvbl9bG%2BhfUTdPhbsoA%2B5d95Usd3b%2B9AODr%2Fs6udnFC%2B4RiHEF24HSSNQv1%2FibpKOAH%2BqGHlHZexPCSQujguwyd07gX%2F%2BSnLXGKnyMzbj5xEDe9E%2FN2VRJW8UQYTFuYvJHhjNNJUBFFnmiLstCWjr9WewcLTT8EBoRTKefBcKUDxMwgDwgupHI%2Bso5liG6JguQswJvhg90jw0%2BwXIEE6o5zvZyRHe%2FKkvE4tKtL%2B4J7yADqOrO77BKYP1ZrhAb5FRTwuzoPFyu2tfMLOi1Vu0hMLFuZJjw%2FP8vhQUFsenNk8M404iOmnHegNXxqHnj%2BNMu02MR0WiRdc7mrZ3Gd%2FVghGaHZ8TMLDe8MEGOqUB7EgpMUTQI%2BZ8B17tYbgNycvE090tpOEe%2FV2U3BMMSibzG8vMCx9IwG%2B4fj0UIWaE4iO4NSUP2LQpgftwPMiuQumZLhKSoZQRI%2BYGBWZt8dQD6ZlsxNpMtscAquW%2FtwvjvygCOU8kcjrYPZq5Crqo1Piac7y7cXdIlTJixgBWdO2y6RO26gts165OdrfCJ5WPfIBcID7EZa8IHWyKt0Bll0iarXSc&X-Amz-Signature=982f520daa2415d1e966df891add082d14eaf4983e6137a9304b60b136c919b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKJI6BI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFZRLJN4Z5ym4Ca4BJohyh9susXvho%2FArCCiNKimJD07AiBQqJPImDjIBDFsKa7eGzp33tqgulRqpxTLL56FkSrl7iqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90qI%2F0%2BKgj2P5yPUKtwD626De7XfF551GHcpW9bLX7qNO%2BUYTJld%2FDJvG0Vte6KE8N1bcHY4pMIxf6%2FdLz%2Fs0mVH0XRFgI%2BPH2lcZgdEIpcHk0W97GBooF4BlWVa%2F9BkgW3xGVGDgRFUsqfWxRLEX5RmIRU0o3lHAa6AGsWlpuM4hcfpIHct4bulG0z5cVIW5zjw9tNf7JC6O6ihiARxw4%2FDuF8bjqkIcSjCTS2EziRp36n%2BpfAw%2BOKvIebV8HuzNG%2BQ1q622sy3%2Fy8Tv51US%2BX%2Frs2Ln1%2BNTzWLXrLlXyMW%2BEVvrEbkfL5i7sjnNt6kFfDZ3mloQIr6A0ILGJpm8CHdsUwQxk%2BUFWQjjCcD0O%2BL99LrOa%2BUxFF7OlwzPbG8%2FJ5GqXOqRLSPdzos7p3xV0fsH0l4QqkBd7JvMSqDixSx7Ps0Z4LAn4f2H94Az%2FesXpzL6upS6uUYctDxRSNJHusiJLEnOkQgrfchl%2FVnWtb5UxTj73MErOukmYHf0Xzdn%2BGNntgX3ZX%2BdAkHXysyMwqWWb3x89plk5BEyGGSpC8JyThXRlGfP21JJAc4POzGdGX5ueFWQsEWTRmMZqKR5tYfd1iFGYHK%2FcDSKAYgtzGMKYGeANbv5EW3U0SvSONZNMeBl4De2fKKnOgw9t7wwQY6pgGXJ5dvzk%2F4ixqVFOtlzUUheatQdVzhkFtWpcKkp4%2FnrCGJA542wmP54HI2gmAwtCxJKBRamSAV8w0gRducSUw5sjzO%2FQSZcXAQOGQrjyIN9J%2FpKYHL910zQN1S%2BX%2FyVweWx%2F%2FLuDpLPfjeIo%2B%2FacVyJ0dpLDjQc3exIUg5dN9v%2FUp13OdAHdHs%2BM5IT2XsPA9d2wd7MgHVzCKsepYmnHrDURV0JYTU&X-Amz-Signature=da14ca3ab2272b9fc3706a44acabcee83f0cc33b94fd147f75669ca084b4f98b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KFKQ3WN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICjSjfMSyejEnQSSBiwtI5y9hN6UT4qqHa7%2Fw45s%2FhWOAiEA94uh4h0rR0uCLlPyGZjzjbwllM4us8ESK2voqIrMYgoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdbGkWI6nmoNZ3cICrcA4i7md7WgU%2FCN2S7KHXPF%2FifCAuGIG5MIx%2FTPiOEXDHNzCelswOCjy9t3PAb6mSRqihl5yWMbAQXLFVjc5UtORyAOMYKmCMcRV7IyXUmU%2B5jPVYWRwPgrIYsZsckm%2B3%2FOCewLFzyxYM%2FoUq%2Bi7Sev9oz0oNlG%2Fca7npopovYZZdXBWNsqPIOfqlhVHvkv7QGdsZjxWtZJbnX6xmKJAkc5gJbJb7H9pWwmygYwrtZqc7txkRDjone3fe%2BtZAM83ePCefUWPw%2FmeBnsmiTGqYkEzYt4aoyRPaJEx3VIW6jDfv4obxv9kZyqqWC8OSfQBj8MbidKqjYvYPoLtVMBitZbOPMzlBGClIGLC5IlcQkGcYnx1yDtHsclIjcGeJTF64YrjZJzlFqyCJR6v3I7T1X2Nq9FzGkN0RTZJIWR%2FGRICYkoVKM5e4IyOpcn4k7WUfhdnrk12YhFMnieMHCjUhwo3OL8us5gBL2iafCAy5ShHfx8J771SxS6QE%2BGCswbLId5LB4AcUgNuGhQqHcSXVEU2gWnX0sWc2meVXQSfNoNxIGua84FJWW%2FRQcERlQwM74EOkBCAbUqlsPp1RqO%2BORM9m54EXJVnLvbC%2FVFBKawoyj%2BPYJXTaVY0Sxez2DMNPf8MEGOqUBXbMcYLKHyqLp95aBOpr0SLfD4sIMtX5RR42kc1gPUt5pno7gum5ev9MoQli8EMruUktwFg6crS%2BX4YfpDd%2F1VJ%2Fq1rd5RNwrIQRCPmAGp34Q0RJHquvZm7e1IBmD8eoq0gXsnB8k%2Fgstr7fm06ySjO0Tsz7D0B5t6g05BBrv2HZGySxPOhBMgUj%2BTmvG0LmH51pcjMEBXeIQit1Xh%2FZwipf5KJ1Y&X-Amz-Signature=123d41461ba87be39d04eba6e0f866291b1f997ca2093f47238ee58134d5a854&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRZAXW2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDW9d81829Dd9yHtOdV8Ip%2FiLmEd4nOmT%2F%2FJGdjzU2xAwIgWHQQPQvAOZ3yZUV%2BV6mtxmOrauk8IwRQfx2ZGwoZMLEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmBoCAe5JOAnd29jyrcA%2BQ67SAMksz2xh%2Frl7%2BwwAmzmI9gaLsz0WBTodr4AsMTMU7t8L0zbTbgu6s0hXxwnY4AzDgKbVkp%2FKfu2pYdTH974j7m9gcGNssvXfxKh%2BznHmzfvATrSyLbX2hSdjVW%2FX3awFYJURYJ1Farl806%2Fkku5sk5fLuBAjBOAFaeKJhox00Zk5vi3kwaKOrX4B0b62HrPwR643TCP6%2BOgdBmMxblw6gr8%2B4HC9RABvYC8u1FLH7A8Ud0PmKPjni8fklyAKyYnEd8o%2F7Sc6tFphoNYo7laWtr7U3gvbl9bG%2BhfUTdPhbsoA%2B5d95Usd3b%2B9AODr%2Fs6udnFC%2B4RiHEF24HSSNQv1%2FibpKOAH%2BqGHlHZexPCSQujguwyd07gX%2F%2BSnLXGKnyMzbj5xEDe9E%2FN2VRJW8UQYTFuYvJHhjNNJUBFFnmiLstCWjr9WewcLTT8EBoRTKefBcKUDxMwgDwgupHI%2Bso5liG6JguQswJvhg90jw0%2BwXIEE6o5zvZyRHe%2FKkvE4tKtL%2B4J7yADqOrO77BKYP1ZrhAb5FRTwuzoPFyu2tfMLOi1Vu0hMLFuZJjw%2FP8vhQUFsenNk8M404iOmnHegNXxqHnj%2BNMu02MR0WiRdc7mrZ3Gd%2FVghGaHZ8TMLDe8MEGOqUB7EgpMUTQI%2BZ8B17tYbgNycvE090tpOEe%2FV2U3BMMSibzG8vMCx9IwG%2B4fj0UIWaE4iO4NSUP2LQpgftwPMiuQumZLhKSoZQRI%2BYGBWZt8dQD6ZlsxNpMtscAquW%2FtwvjvygCOU8kcjrYPZq5Crqo1Piac7y7cXdIlTJixgBWdO2y6RO26gts165OdrfCJ5WPfIBcID7EZa8IHWyKt0Bll0iarXSc&X-Amz-Signature=4137bde4a347bd486afbbfb36fb8d20a5053a94d7d10590c5c9eacab81b65265&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
