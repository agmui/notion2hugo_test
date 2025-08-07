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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGGSD35%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICSCZx3Pl%2F9RN8wa0CnJR%2F1unDRQC5r3nA6zrt%2Bo%2BbjhAiAh4ochQuBIDwPNa5UVusapyWmD1sU8kX64Vpw8rQztdyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcypVZw4DlGF%2Bq48KtwDix4uT9fX7Ocdj718CBAvUOfzts9tyF7yvf00HeuxbtV0aUhmUoSdGFMQOXMJNPE%2F5ZnhOYZ2adp3YBfynXjLP%2BWp%2FkDlW1WOqlZnRBrdDu7uEZMEbcnwCTZcLmW2Kako9NGTipDMfFIjLD4ry0z9HiUVdH8%2BiaXyylqIbA%2B8YGbJpN%2BP%2FNYzs79CJRUtN3IG9cZJsX7KJx3gnMCgqfPjoAytBGPo%2FRF6L7vy%2BJ0rJRHTaqVTFqUuKCokewK7wjQLi4w6h%2FzI%2B7Q1c%2BrAOXX9rjCUQ0aE3dElbTyijUTwVAVSEtTunTVkM4ihm1r6YLPaxoJa95Z4gYOh8%2BGrrgykDRiwtWn7qNc09ShPSPQQ%2FkJlx4QuaGJw6skOeR625AuNFP1z7s4U6pN44qcITHO7j9SYhYDhPED9HxZk1aJkQ54mW0jPz1n52xULBeqtfLLVT8n3kpuJfR71xBsPAFEVj4FGhWvteZjfx3cJHacho7WVIT%2BqCUG2ZrsWBMicGbk7c6yNinjA2qrokcBqEJkuwey7A3MfCy4BkPqzy%2FE0rJkzZYolC1dvgAzzfGmvoDMmVcruKu4h8eG%2FIhPlhcPpNh1MZSocm8ko9CPjudsMRRGq2qcI7w9%2BqDJyGpMwrcrTxAY6pgHF2%2BZblen%2BLPDm8QER%2FiJ%2B%2BlbxBG6%2FaYCYRh1%2F0TaWo5JmZGk%2FhsFpELLbs1Me2SFilcsMJANhClvRusIuYubWPPuQSdM9AwOWJqqXBvoSDPBGh5pYZWmKvJUfbHQQLCp6wTqFvMlMUg26Y1jiuPUXTgdXx7WGVpWoGFMJkJlYsHs0gme6rpNQHMcf%2FEUaKpaXEvaGozidOg4eTRPyPk0aPf0V3u%2Fo&X-Amz-Signature=8f265d01955bd26840ce0dfecfe808c060f1de61149a81e4c601f92a2e8fd9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGGSD35%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICSCZx3Pl%2F9RN8wa0CnJR%2F1unDRQC5r3nA6zrt%2Bo%2BbjhAiAh4ochQuBIDwPNa5UVusapyWmD1sU8kX64Vpw8rQztdyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcypVZw4DlGF%2Bq48KtwDix4uT9fX7Ocdj718CBAvUOfzts9tyF7yvf00HeuxbtV0aUhmUoSdGFMQOXMJNPE%2F5ZnhOYZ2adp3YBfynXjLP%2BWp%2FkDlW1WOqlZnRBrdDu7uEZMEbcnwCTZcLmW2Kako9NGTipDMfFIjLD4ry0z9HiUVdH8%2BiaXyylqIbA%2B8YGbJpN%2BP%2FNYzs79CJRUtN3IG9cZJsX7KJx3gnMCgqfPjoAytBGPo%2FRF6L7vy%2BJ0rJRHTaqVTFqUuKCokewK7wjQLi4w6h%2FzI%2B7Q1c%2BrAOXX9rjCUQ0aE3dElbTyijUTwVAVSEtTunTVkM4ihm1r6YLPaxoJa95Z4gYOh8%2BGrrgykDRiwtWn7qNc09ShPSPQQ%2FkJlx4QuaGJw6skOeR625AuNFP1z7s4U6pN44qcITHO7j9SYhYDhPED9HxZk1aJkQ54mW0jPz1n52xULBeqtfLLVT8n3kpuJfR71xBsPAFEVj4FGhWvteZjfx3cJHacho7WVIT%2BqCUG2ZrsWBMicGbk7c6yNinjA2qrokcBqEJkuwey7A3MfCy4BkPqzy%2FE0rJkzZYolC1dvgAzzfGmvoDMmVcruKu4h8eG%2FIhPlhcPpNh1MZSocm8ko9CPjudsMRRGq2qcI7w9%2BqDJyGpMwrcrTxAY6pgHF2%2BZblen%2BLPDm8QER%2FiJ%2B%2BlbxBG6%2FaYCYRh1%2F0TaWo5JmZGk%2FhsFpELLbs1Me2SFilcsMJANhClvRusIuYubWPPuQSdM9AwOWJqqXBvoSDPBGh5pYZWmKvJUfbHQQLCp6wTqFvMlMUg26Y1jiuPUXTgdXx7WGVpWoGFMJkJlYsHs0gme6rpNQHMcf%2FEUaKpaXEvaGozidOg4eTRPyPk0aPf0V3u%2Fo&X-Amz-Signature=3eac996b420459ab06b30a0116233cd78da65b8a0bddb1306527b18920363504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGGSD35%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICSCZx3Pl%2F9RN8wa0CnJR%2F1unDRQC5r3nA6zrt%2Bo%2BbjhAiAh4ochQuBIDwPNa5UVusapyWmD1sU8kX64Vpw8rQztdyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcypVZw4DlGF%2Bq48KtwDix4uT9fX7Ocdj718CBAvUOfzts9tyF7yvf00HeuxbtV0aUhmUoSdGFMQOXMJNPE%2F5ZnhOYZ2adp3YBfynXjLP%2BWp%2FkDlW1WOqlZnRBrdDu7uEZMEbcnwCTZcLmW2Kako9NGTipDMfFIjLD4ry0z9HiUVdH8%2BiaXyylqIbA%2B8YGbJpN%2BP%2FNYzs79CJRUtN3IG9cZJsX7KJx3gnMCgqfPjoAytBGPo%2FRF6L7vy%2BJ0rJRHTaqVTFqUuKCokewK7wjQLi4w6h%2FzI%2B7Q1c%2BrAOXX9rjCUQ0aE3dElbTyijUTwVAVSEtTunTVkM4ihm1r6YLPaxoJa95Z4gYOh8%2BGrrgykDRiwtWn7qNc09ShPSPQQ%2FkJlx4QuaGJw6skOeR625AuNFP1z7s4U6pN44qcITHO7j9SYhYDhPED9HxZk1aJkQ54mW0jPz1n52xULBeqtfLLVT8n3kpuJfR71xBsPAFEVj4FGhWvteZjfx3cJHacho7WVIT%2BqCUG2ZrsWBMicGbk7c6yNinjA2qrokcBqEJkuwey7A3MfCy4BkPqzy%2FE0rJkzZYolC1dvgAzzfGmvoDMmVcruKu4h8eG%2FIhPlhcPpNh1MZSocm8ko9CPjudsMRRGq2qcI7w9%2BqDJyGpMwrcrTxAY6pgHF2%2BZblen%2BLPDm8QER%2FiJ%2B%2BlbxBG6%2FaYCYRh1%2F0TaWo5JmZGk%2FhsFpELLbs1Me2SFilcsMJANhClvRusIuYubWPPuQSdM9AwOWJqqXBvoSDPBGh5pYZWmKvJUfbHQQLCp6wTqFvMlMUg26Y1jiuPUXTgdXx7WGVpWoGFMJkJlYsHs0gme6rpNQHMcf%2FEUaKpaXEvaGozidOg4eTRPyPk0aPf0V3u%2Fo&X-Amz-Signature=71a4ddce9d2a37c13f66c4964d7f04c3bd5a656236d96338f1dc38f2d59e14d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHSMQKTU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2BgfyL7WDl%2BBmaL0F2AiiJ69aRKDRygDpFZaZtOKsZqgIhAKPmo%2FSsWShuImP2l9Gx7uEhX1cNngekHdUt5TCHsriSKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbtK5FqsMd9imx6nsq3ANGcjlQGwaVQCUPZb%2Fuk%2BDL7C7022U9LHm31rAnGYGna6qzabfowfuaAjbqT2jrlFfclf7Navc2diwKWyKeVzkaGsMVnneccqgl26WjvzSKe%2B3f5yn8LNrcESiIgcHXSQ%2FfJUudV3T09rgiHt5A5zVRKbqUewQ87mIn56%2FC%2FVQ0wvauSak6elloFIDEhaNep%2FMTFKYPUIGLugTYlgiMHH3KKKwDSRw7PmSUHi8uTE4LED6rrXT0ZnK%2FTobbu3tKzemKywejKqoSBZLPVPb8xRfrHfiHbCBld2ehI%2BOpxtUpUC3AXsmf%2B9cQlemE6M504W6j0xP6Rwo2hlL5dcbWECq3iDm0RCxxgS4JvbBWOjQhgXNkeL8QaoX5eskoAoX1fTRKBi7JDRfRjyl9zjXYpGZnYHcG0DDQcLzlay9DDX%2FwU9leE5TLIDhRLvemfQAPg7dqCTfmIaulP90kahTFGf2fZK3wXLZ5AJrVjDHtRU54511yiYtdQxwhEFO1aXknFvtQ7f2ZksyfyojdS9nzCszOZeLvX%2BeI0OHkh1K4UBf%2BGXhf1nnZQQ7ewqaBIEFcQAK%2F%2B8%2FSqFJXHCfzjMOVCVaNutw6KeFp8UTVshVetvukERyUturGVnov59gOJTCvydPEBjqkATPFvkUQqrNbakBxEEWKucXHfG3vE%2BBq4rrYBmcRUVPkRW9kZ24lukSHIntkfMTiCASHGx4i5SRo1JdjOzyRah2Yjouz9MOhqmZXYrmBfOwlUBBtWjyYXAiF1HsS0mchYJ33mRWFuZ5COUaJbaPUvETmlpCBmnqSiXevW6Xxpbyho1tuYt7H%2FLheXI9U0UrRP8%2BnjpC6Us0sVccpSkU74Vatfqsu&X-Amz-Signature=75d3dc41b18315a7ac1df5e3bd47a284a721484f7fd2f17a81aa9dab9a128c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672Q74JJI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIC61Ab%2FoVDqa7Z%2Bl%2Bs2nnZqEJi8YlDxtcFwekOPIk%2FSaAiEAgYnxdHfajAnd%2FOl2ed%2BcFpDuQVUmVIAAWSKJAq24tVEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXh49U239wYqEerrircA%2Bb015%2BxfhfpIt6AOvADMG3Sotv6JQ%2FoMIEJbE%2FTO3TsiyecPvb1lzqG9%2BmQuizxufTCwP94EgWiIolshE%2FTHaHlhp%2Fe%2FdPRyT%2FI%2BUrzPy2ColebLmmef1dtK4z3Z%2Bn%2BdkuILA43Wj1HzADPcdfHGUqwO9CMTY5%2B6qyPMKBkMdpWY%2BaZlJ6SXQ83xVoe4UhgDPcuUO6Z2ypny2fk7dYhCKQ%2FbxQe8GwZSBpRNaZx3LmHE3a2jSnnTZHFqOwACl4LnAKrU9yBg%2FZgL9L%2BINLmtdHcImbuWK%2FyMJzPrm%2BTvBaS5%2BV9OG5wGO2KSUtiy5qq3e0psed0CVp8NK4EzaDDixJhJi4U4Ft54OC8CTa8mFYBjaPC6AJQKL8sav1p3UkN56f1MTeRTphDn25ov1C%2F7kfPwOyicQ70y3trcyX%2BnftNuDTmB8ww%2B1RJvHzxhEYAr2G7vvF5gOKfXrIb%2FxAh3dkDKPifc8UX0zVlraRbc5A9ogVUFc0WTVuc8Ud%2B0OtvYVn2kIYfUNcBGZVFm8el549PEcPy6gKdas8XCyALZVEqtgqAwoh0D31zBCb%2BHg5AjEIkrA6jt761rhIN%2BsdDnU2h0oK1cWBWNzrURbOWlHwckVqXJzhWPVHtS3rEMMnJ08QGOqUB8%2FM9XyLpYTpkRwISCReM3TYcnZw9CK16nKQt2r6%2FXctReTwb4YWWLZDDANDoMJKgsGaBpXdoUV8%2BuVgs8fDBdqydQnzfICnQEbkC1U2zcL3tTRlnOZBGbrOWRlU%2F3G5j9pVkNpnDsE6AovL7Z8kvakl1ncr7GLKi64jmUUPF6FLWE3ItUDfMS%2FZIPAL5ZlA1QzBogf2STgGpGdUm20R8HvPuuZ%2BQ&X-Amz-Signature=6b214f12e2d39441009e5b8bea6ca3133c39f2a7ffef2942e7e72415e17c1d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGGSD35%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICSCZx3Pl%2F9RN8wa0CnJR%2F1unDRQC5r3nA6zrt%2Bo%2BbjhAiAh4ochQuBIDwPNa5UVusapyWmD1sU8kX64Vpw8rQztdyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcypVZw4DlGF%2Bq48KtwDix4uT9fX7Ocdj718CBAvUOfzts9tyF7yvf00HeuxbtV0aUhmUoSdGFMQOXMJNPE%2F5ZnhOYZ2adp3YBfynXjLP%2BWp%2FkDlW1WOqlZnRBrdDu7uEZMEbcnwCTZcLmW2Kako9NGTipDMfFIjLD4ry0z9HiUVdH8%2BiaXyylqIbA%2B8YGbJpN%2BP%2FNYzs79CJRUtN3IG9cZJsX7KJx3gnMCgqfPjoAytBGPo%2FRF6L7vy%2BJ0rJRHTaqVTFqUuKCokewK7wjQLi4w6h%2FzI%2B7Q1c%2BrAOXX9rjCUQ0aE3dElbTyijUTwVAVSEtTunTVkM4ihm1r6YLPaxoJa95Z4gYOh8%2BGrrgykDRiwtWn7qNc09ShPSPQQ%2FkJlx4QuaGJw6skOeR625AuNFP1z7s4U6pN44qcITHO7j9SYhYDhPED9HxZk1aJkQ54mW0jPz1n52xULBeqtfLLVT8n3kpuJfR71xBsPAFEVj4FGhWvteZjfx3cJHacho7WVIT%2BqCUG2ZrsWBMicGbk7c6yNinjA2qrokcBqEJkuwey7A3MfCy4BkPqzy%2FE0rJkzZYolC1dvgAzzfGmvoDMmVcruKu4h8eG%2FIhPlhcPpNh1MZSocm8ko9CPjudsMRRGq2qcI7w9%2BqDJyGpMwrcrTxAY6pgHF2%2BZblen%2BLPDm8QER%2FiJ%2B%2BlbxBG6%2FaYCYRh1%2F0TaWo5JmZGk%2FhsFpELLbs1Me2SFilcsMJANhClvRusIuYubWPPuQSdM9AwOWJqqXBvoSDPBGh5pYZWmKvJUfbHQQLCp6wTqFvMlMUg26Y1jiuPUXTgdXx7WGVpWoGFMJkJlYsHs0gme6rpNQHMcf%2FEUaKpaXEvaGozidOg4eTRPyPk0aPf0V3u%2Fo&X-Amz-Signature=58d4be4fab0767d11d30227f77adcd0b8d445469b4f860e17cee76a21168ed14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
