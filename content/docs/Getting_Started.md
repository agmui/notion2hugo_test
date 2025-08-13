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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4PWE3Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7CxfxMZGK3CuQTa9zv28qSY97t%2FmQ87kthLu920ViwIgMSM8JAE%2FqrYnNYUXg95W4xHDvc6%2F8HuHR%2FbTn8wk6Agq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAakVm%2BcJy%2Bg8WWAUSrcA5E%2FZeXZ1nE%2FmDRskErtxpTUcDHEFcdTgBZ9AWRaNvImSe8H5vd1V0J%2FQHOgW55YQCVfszztgWC%2B3v8CUWJ%2FUII%2FxWX1iTeKFwEOZjZGrkWSL95TX1JreMzx2F7CQ%2BYnzmz3WYbgmB%2BUdTOyjsAJsMCPAtrYyQLnm4OhOymgrtTJw7e%2BPzGO0oDAs3zP%2FhcdwGoEB9z7BMLze2YpRHiAJR4HxexLJkP%2F9ZiBgS5GgiaV5WS5ZwalDOU81yOGoQNe2HPbCUjnGirxgyTEEsp8R05DA7fvu5pY2Pt30QK5HcFMbvb3ELC2CDqjn8PzmJwKHe9yx%2FT0HkN%2Ba0FhjwAXZJEMQjTwK0bBq1Bg9SEyxlKvEcW7Ri%2FTqjM3aoDI70HMUvJwOJXjBkteLPdKPHaeRnOEtcX%2Bi4UneRdULUhKsHRtiH6tp7G%2BW1lcx%2FFcbFrTV2tVyL42X%2FFnI44voNLXyJpCPdP5NcLJGEJuvLa2%2FEkIP%2BqoMt0gYcU%2Bb%2Fe8CKe%2Bw6o185Gm%2F7VqhU1ctAdUVQlgE7PqipB0e1CJUB%2F609hPxoVRX6vXKAeWmhKoOiKddvXqtDCLcWlyDbO1rG9yw%2Ffek8yJg38bcitXIl6Gw7JroB1rxGAJbf6jrvLwMLLG8cQGOqUBWVbB3hWlqmsJgJoeuPf9n1Ot%2B5NGBo80JCFvTE0Fog%2FotYnuAAjF%2FvUeBvO3JbheE7YLhJpyiuDO1hPafe0g5VxWD%2BWMFayUfHbdcOpxodhT5C0jgZJ0egFb4xn7bOaoJ4Dry6O2luWwLNZI%2Bh81K4Cw%2Bv2yZWaAAK6T1ARHzxRlJ%2BpCZZ%2BqP%2Fq6K%2FvbjsG%2FxDA%2BiibKSqctxn3YTKus07LrA9c3&X-Amz-Signature=d686ff341cd332ace8844d8038f5251365ada267ff1d8beb1e851f471a7ed109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4PWE3Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7CxfxMZGK3CuQTa9zv28qSY97t%2FmQ87kthLu920ViwIgMSM8JAE%2FqrYnNYUXg95W4xHDvc6%2F8HuHR%2FbTn8wk6Agq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAakVm%2BcJy%2Bg8WWAUSrcA5E%2FZeXZ1nE%2FmDRskErtxpTUcDHEFcdTgBZ9AWRaNvImSe8H5vd1V0J%2FQHOgW55YQCVfszztgWC%2B3v8CUWJ%2FUII%2FxWX1iTeKFwEOZjZGrkWSL95TX1JreMzx2F7CQ%2BYnzmz3WYbgmB%2BUdTOyjsAJsMCPAtrYyQLnm4OhOymgrtTJw7e%2BPzGO0oDAs3zP%2FhcdwGoEB9z7BMLze2YpRHiAJR4HxexLJkP%2F9ZiBgS5GgiaV5WS5ZwalDOU81yOGoQNe2HPbCUjnGirxgyTEEsp8R05DA7fvu5pY2Pt30QK5HcFMbvb3ELC2CDqjn8PzmJwKHe9yx%2FT0HkN%2Ba0FhjwAXZJEMQjTwK0bBq1Bg9SEyxlKvEcW7Ri%2FTqjM3aoDI70HMUvJwOJXjBkteLPdKPHaeRnOEtcX%2Bi4UneRdULUhKsHRtiH6tp7G%2BW1lcx%2FFcbFrTV2tVyL42X%2FFnI44voNLXyJpCPdP5NcLJGEJuvLa2%2FEkIP%2BqoMt0gYcU%2Bb%2Fe8CKe%2Bw6o185Gm%2F7VqhU1ctAdUVQlgE7PqipB0e1CJUB%2F609hPxoVRX6vXKAeWmhKoOiKddvXqtDCLcWlyDbO1rG9yw%2Ffek8yJg38bcitXIl6Gw7JroB1rxGAJbf6jrvLwMLLG8cQGOqUBWVbB3hWlqmsJgJoeuPf9n1Ot%2B5NGBo80JCFvTE0Fog%2FotYnuAAjF%2FvUeBvO3JbheE7YLhJpyiuDO1hPafe0g5VxWD%2BWMFayUfHbdcOpxodhT5C0jgZJ0egFb4xn7bOaoJ4Dry6O2luWwLNZI%2Bh81K4Cw%2Bv2yZWaAAK6T1ARHzxRlJ%2BpCZZ%2BqP%2Fq6K%2FvbjsG%2FxDA%2BiibKSqctxn3YTKus07LrA9c3&X-Amz-Signature=5a9e723af18e978416c16a8efc16b4c77d914642824dd37d1c410e484d9b2fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4PWE3Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7CxfxMZGK3CuQTa9zv28qSY97t%2FmQ87kthLu920ViwIgMSM8JAE%2FqrYnNYUXg95W4xHDvc6%2F8HuHR%2FbTn8wk6Agq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAakVm%2BcJy%2Bg8WWAUSrcA5E%2FZeXZ1nE%2FmDRskErtxpTUcDHEFcdTgBZ9AWRaNvImSe8H5vd1V0J%2FQHOgW55YQCVfszztgWC%2B3v8CUWJ%2FUII%2FxWX1iTeKFwEOZjZGrkWSL95TX1JreMzx2F7CQ%2BYnzmz3WYbgmB%2BUdTOyjsAJsMCPAtrYyQLnm4OhOymgrtTJw7e%2BPzGO0oDAs3zP%2FhcdwGoEB9z7BMLze2YpRHiAJR4HxexLJkP%2F9ZiBgS5GgiaV5WS5ZwalDOU81yOGoQNe2HPbCUjnGirxgyTEEsp8R05DA7fvu5pY2Pt30QK5HcFMbvb3ELC2CDqjn8PzmJwKHe9yx%2FT0HkN%2Ba0FhjwAXZJEMQjTwK0bBq1Bg9SEyxlKvEcW7Ri%2FTqjM3aoDI70HMUvJwOJXjBkteLPdKPHaeRnOEtcX%2Bi4UneRdULUhKsHRtiH6tp7G%2BW1lcx%2FFcbFrTV2tVyL42X%2FFnI44voNLXyJpCPdP5NcLJGEJuvLa2%2FEkIP%2BqoMt0gYcU%2Bb%2Fe8CKe%2Bw6o185Gm%2F7VqhU1ctAdUVQlgE7PqipB0e1CJUB%2F609hPxoVRX6vXKAeWmhKoOiKddvXqtDCLcWlyDbO1rG9yw%2Ffek8yJg38bcitXIl6Gw7JroB1rxGAJbf6jrvLwMLLG8cQGOqUBWVbB3hWlqmsJgJoeuPf9n1Ot%2B5NGBo80JCFvTE0Fog%2FotYnuAAjF%2FvUeBvO3JbheE7YLhJpyiuDO1hPafe0g5VxWD%2BWMFayUfHbdcOpxodhT5C0jgZJ0egFb4xn7bOaoJ4Dry6O2luWwLNZI%2Bh81K4Cw%2Bv2yZWaAAK6T1ARHzxRlJ%2BpCZZ%2BqP%2Fq6K%2FvbjsG%2FxDA%2BiibKSqctxn3YTKus07LrA9c3&X-Amz-Signature=36852f5df768f96a8bc5dbb147570d62cf9427650a32c6f68cd7c898673cb3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FS2ZEBF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7kvfRPxCxPSlhyzHInok17267tPZ3oQp6pSWFg7%2FHCQIhAI%2Fr1oRQ7cQHf1K%2Bxjy4%2FcSaHnvMqJvlPkXNx%2FwvyOBFKv8DCCsQABoMNjM3NDIzMTgzODA1IgwQkXneTZwulz98uwIq3ANsbaqTW%2BEMX%2FhhZZgS2Zgn3BJ%2FMjaLpTFcRTpqoBrB2J75Wfr32hVpyp3OH8L3EFcb1ZB0OUD70jHYdmTX0BOTszoPb7L%2Fvz6SJTdqC9ELDihSgEfLKJ9wgBy%2FiLZCIC02QnSx9B%2BsIhf%2FjkSUDF%2BKF8om2QqY6wZ0dSBsrSpHQKUkkMOmtWjOpPYKIhrvZjgVlumNViNSoqvvtpVRBfsdwa3japKeCnJBqB1rlhNoPRw2bA1GhJS8G%2Ff9wjLyL5f6KvBX22PwjUTRrCdEAr20Gng80KDv47rs3WQ3Z7pgo8a0arP%2F4pUAHIx1nRbGz8SeuhHDTx9aHzCLYdaqcDz5MMnJyXa2so%2FMICZsLyeXw7yg35QdcH7pIRdEvrtKKLNQdbgEQ1T37QCwGOiFSMFZOJD3I8lkEVValg2NXapIE6LznqxhOQUq1tIQME6na%2BfEm1hyhYhNHftjJjw%2FoX%2FRStPsh9bo2QBGJhaxEL6EvCIzdWSGVb2QIMD%2FkA%2BkGm%2F7rUOr9wRWWRFLuNviNTenKle7Pdh1bDlkb47drGuYREbuKSO7%2FZ7Vz6wVQT4fXQ%2FY5krymUksaSm2UmjakHQ1Cz66lIC3lScC5UwTGJ4a61LMrtW3OJ%2B4%2BYURmTD9xfHEBjqkAVZ0zUO%2FZq91HnlKy9JhT75eLNczBOwloC%2FBiYE3w5AtNyvShPsb6%2FBdrjO4iXnA%2BoG9DNaj1hkfePMrlvKOww6sL7pFcdTXvTE6HyFcXShDw1jA9qEwkSDh2ZLAQzMsKMbHaINbUHaptgO%2Fkywm%2BgbCsgDWNmNFaRrJ%2FIFGwLAt1mKF%2Bp9t%2FUp4cYdY0nivoBk423Bmm7PNOSeuu8Q75KwgENhg&X-Amz-Signature=3f74195c5428c51e205933125021d243b75c66a708edd43261b9ef411118d91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UGCUHT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqwJOVr6QmRLu699rJQdIGJdMpgXfQhBe2yCO33p2ZVAiBYYd%2FW7cPXws0xzDPZr8C16iAxcrcgTW%2B2e%2BaP7DT1oCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9Ho5SH3sgyqrqiJwKtwDZq%2Be3zLYgTAsaBeVRo6lCyTjcSqncbK%2BBYfRQbH6cdD3y3cRBuUKsDXNMpprw5zAO6t72sTWbOzTuTsN%2BljoRKsfadOn1HqUtQozCHwbbeiPNNWgbvrFG%2BKkXAlqrsqvVp9OvlDeAP8Z8TNEmiLWF8H66yZPhXlxIFL43d4kzZq28chiDWFHku%2B3J%2B1Cj%2BNEz9mjUrBdHDSBBfkPGNmnSeoqD5YShfKVxda3abHN61XmXwHG42Q7tIPIVzDUQ%2BrfEz26MlNskMFkwzjvdBjQTnHQXqQ%2BNbKOlHhrv9f2xCeo%2BGtMtOuX%2FvTJfAGpU%2FigVcYbanfaK2UREkH%2B8QMh5nNQh3jaL7xGrAwT4wD%2BIZKoP%2Bn33r5gigLz%2BXpzRSsflUmPRZIO7NIjk5EjOae2IFYK4XmdaJMQVCu%2Fv%2B5GqoW995zUE2vqgu9MGu8%2BZJAbyIf0dKGYePcr1yAeS9nrtOjhWGEWbyVy0ZwyDhE%2BxkJj5JltoHfTsuPBRvn81%2BOczPKnaawgvSSyuMYf428ytoQcSedh6tI5TbVjEL4D5RRwidje7y0ziaa8i7EdaN3A6zrxo%2FA4AMIy4NcLMRBEew9MaqGpvfeCEW4DyKPbUwpTy4TyAcw1zihrSO4wp8bxxAY6pgGKCCFAPCeYFR6FWqBTQA5Hc%2FXBK6%2BWoITx4MgVHlrDZpjepy0iQ%2Bdn3aJkHZCyyC%2Fn4DcyKToHELzIDTKKdW7BkkHEaxZX7QE7TyBMI5qqv%2FiW6ISyUpjsEjQ%2FFddgeuhGWmio%2BscmQ5wTkjsK9uW%2B0frzQCjrg2KkMikRbm394EyO7Byk0a5ukG2etFHmodnM6iBFnOq%2FBHd2EWHP9dpVRTChOp2T&X-Amz-Signature=5c3d48ae14c9274e5a9a47ab64b7de4054c112350df6700b91d9b59204235676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4PWE3Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7CxfxMZGK3CuQTa9zv28qSY97t%2FmQ87kthLu920ViwIgMSM8JAE%2FqrYnNYUXg95W4xHDvc6%2F8HuHR%2FbTn8wk6Agq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAakVm%2BcJy%2Bg8WWAUSrcA5E%2FZeXZ1nE%2FmDRskErtxpTUcDHEFcdTgBZ9AWRaNvImSe8H5vd1V0J%2FQHOgW55YQCVfszztgWC%2B3v8CUWJ%2FUII%2FxWX1iTeKFwEOZjZGrkWSL95TX1JreMzx2F7CQ%2BYnzmz3WYbgmB%2BUdTOyjsAJsMCPAtrYyQLnm4OhOymgrtTJw7e%2BPzGO0oDAs3zP%2FhcdwGoEB9z7BMLze2YpRHiAJR4HxexLJkP%2F9ZiBgS5GgiaV5WS5ZwalDOU81yOGoQNe2HPbCUjnGirxgyTEEsp8R05DA7fvu5pY2Pt30QK5HcFMbvb3ELC2CDqjn8PzmJwKHe9yx%2FT0HkN%2Ba0FhjwAXZJEMQjTwK0bBq1Bg9SEyxlKvEcW7Ri%2FTqjM3aoDI70HMUvJwOJXjBkteLPdKPHaeRnOEtcX%2Bi4UneRdULUhKsHRtiH6tp7G%2BW1lcx%2FFcbFrTV2tVyL42X%2FFnI44voNLXyJpCPdP5NcLJGEJuvLa2%2FEkIP%2BqoMt0gYcU%2Bb%2Fe8CKe%2Bw6o185Gm%2F7VqhU1ctAdUVQlgE7PqipB0e1CJUB%2F609hPxoVRX6vXKAeWmhKoOiKddvXqtDCLcWlyDbO1rG9yw%2Ffek8yJg38bcitXIl6Gw7JroB1rxGAJbf6jrvLwMLLG8cQGOqUBWVbB3hWlqmsJgJoeuPf9n1Ot%2B5NGBo80JCFvTE0Fog%2FotYnuAAjF%2FvUeBvO3JbheE7YLhJpyiuDO1hPafe0g5VxWD%2BWMFayUfHbdcOpxodhT5C0jgZJ0egFb4xn7bOaoJ4Dry6O2luWwLNZI%2Bh81K4Cw%2Bv2yZWaAAK6T1ARHzxRlJ%2BpCZZ%2BqP%2Fq6K%2FvbjsG%2FxDA%2BiibKSqctxn3YTKus07LrA9c3&X-Amz-Signature=5ac587a5c6925608bb4ffdbb4410529b41bef75bfb1efcf368505e98cb42b789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
