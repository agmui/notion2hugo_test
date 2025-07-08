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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYSGZXT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCbPaG2eVK88n%2FyxqX9NY9CrdFXxjyZ3pO5soAjLO1RhgIhAP%2BPVoJg%2Fhb0nHmhp3M%2FNMwTJkbNUziZ7UdY5eJZbSs3KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH7IsSF1A9Xi2DZdkq3AM18ifF%2B%2FfbvS9FEVLtlZ8Vo7i4Ews5HloPk4wqVsVwBbVKAip1cVgKf88IgBZOZZ87ZePFeDDAk%2F9O3e2sQoY3Ug0ko2Ctx9fD9vHjjxsNUQGskqxGwZXK2KnRfUsK%2Fv0ohpCNLWjI95qE5XHQIE9%2B003it110rN%2BEW8a4Se5nShyDo33r%2BJ4m%2Bksx1RvbZ%2BWbdx6Ws%2BSz9hWUFKPxLbTVglMPSI%2FO2mbWf3hCpuwpbrChHtBoiznMoGAW3heKhU1D7ykP4Wh5P3mewcxsOZOVL2OGxWxClY29g4kpH6mtsI%2B%2FYt5LLDN6WWbFtgbxzNySNvy02Rg%2Fno69JEI009QoG9GXfPKUbfEqemQNlWJuLfUYzNidUPKCCe0NTu7khBx39BRDAo8EiDLDYZUNRmvS57bMWtUWGEHzMywiSJnbIJ1EKQfCi9CKTcp5cfAQCUc8v8FjBxsjjEuJw9mcv9s9eBo3Z8%2Fi2xwjCwD2Zcx4XVoqvkemj4bGvQqVC3CCtLa1DU4pi64muhGQkrHVEyi5VP5x4YgLCSeTCwxDQw%2BjVlAkyxFGcrHkSumL1jZeF6a2pLiPsF4LTW6h0aB1s0HVXupIBqfTQ%2FhT7qXC4OqHV2%2BIIw3V6vkXwVUTrDCRhbLDBjqkAfN5gayPHtfR5ISTfrX1icyW1re1d9wqI8QbA1Ud4hSlrQkYD%2Bz5SJjcN0pA0vFoWuDVzZKtaWDloelsgwbN7NCf0E4dZGX%2FQGXKgUteAxgsArj2HvgUQfLLb6Z1IoyXB4WclO%2BC%2BUENm0ixm7fzUqeAgwZ78OuPzbsVFCCcy9WfFwbJ6mHoVyhufd4YRJEUPey1FrmL12v%2B6N2AxdPlS1LeVdP6&X-Amz-Signature=c2255996518bcb9517528b78408c4fc90d9ff74c08e4ac1749a3c1b8a2cb7ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYSGZXT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCbPaG2eVK88n%2FyxqX9NY9CrdFXxjyZ3pO5soAjLO1RhgIhAP%2BPVoJg%2Fhb0nHmhp3M%2FNMwTJkbNUziZ7UdY5eJZbSs3KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH7IsSF1A9Xi2DZdkq3AM18ifF%2B%2FfbvS9FEVLtlZ8Vo7i4Ews5HloPk4wqVsVwBbVKAip1cVgKf88IgBZOZZ87ZePFeDDAk%2F9O3e2sQoY3Ug0ko2Ctx9fD9vHjjxsNUQGskqxGwZXK2KnRfUsK%2Fv0ohpCNLWjI95qE5XHQIE9%2B003it110rN%2BEW8a4Se5nShyDo33r%2BJ4m%2Bksx1RvbZ%2BWbdx6Ws%2BSz9hWUFKPxLbTVglMPSI%2FO2mbWf3hCpuwpbrChHtBoiznMoGAW3heKhU1D7ykP4Wh5P3mewcxsOZOVL2OGxWxClY29g4kpH6mtsI%2B%2FYt5LLDN6WWbFtgbxzNySNvy02Rg%2Fno69JEI009QoG9GXfPKUbfEqemQNlWJuLfUYzNidUPKCCe0NTu7khBx39BRDAo8EiDLDYZUNRmvS57bMWtUWGEHzMywiSJnbIJ1EKQfCi9CKTcp5cfAQCUc8v8FjBxsjjEuJw9mcv9s9eBo3Z8%2Fi2xwjCwD2Zcx4XVoqvkemj4bGvQqVC3CCtLa1DU4pi64muhGQkrHVEyi5VP5x4YgLCSeTCwxDQw%2BjVlAkyxFGcrHkSumL1jZeF6a2pLiPsF4LTW6h0aB1s0HVXupIBqfTQ%2FhT7qXC4OqHV2%2BIIw3V6vkXwVUTrDCRhbLDBjqkAfN5gayPHtfR5ISTfrX1icyW1re1d9wqI8QbA1Ud4hSlrQkYD%2Bz5SJjcN0pA0vFoWuDVzZKtaWDloelsgwbN7NCf0E4dZGX%2FQGXKgUteAxgsArj2HvgUQfLLb6Z1IoyXB4WclO%2BC%2BUENm0ixm7fzUqeAgwZ78OuPzbsVFCCcy9WfFwbJ6mHoVyhufd4YRJEUPey1FrmL12v%2B6N2AxdPlS1LeVdP6&X-Amz-Signature=33e6dca20eb8843475794f936d91b8fd3c744adab939aeb0ac1b0d1a8c8720d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYSGZXT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCbPaG2eVK88n%2FyxqX9NY9CrdFXxjyZ3pO5soAjLO1RhgIhAP%2BPVoJg%2Fhb0nHmhp3M%2FNMwTJkbNUziZ7UdY5eJZbSs3KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH7IsSF1A9Xi2DZdkq3AM18ifF%2B%2FfbvS9FEVLtlZ8Vo7i4Ews5HloPk4wqVsVwBbVKAip1cVgKf88IgBZOZZ87ZePFeDDAk%2F9O3e2sQoY3Ug0ko2Ctx9fD9vHjjxsNUQGskqxGwZXK2KnRfUsK%2Fv0ohpCNLWjI95qE5XHQIE9%2B003it110rN%2BEW8a4Se5nShyDo33r%2BJ4m%2Bksx1RvbZ%2BWbdx6Ws%2BSz9hWUFKPxLbTVglMPSI%2FO2mbWf3hCpuwpbrChHtBoiznMoGAW3heKhU1D7ykP4Wh5P3mewcxsOZOVL2OGxWxClY29g4kpH6mtsI%2B%2FYt5LLDN6WWbFtgbxzNySNvy02Rg%2Fno69JEI009QoG9GXfPKUbfEqemQNlWJuLfUYzNidUPKCCe0NTu7khBx39BRDAo8EiDLDYZUNRmvS57bMWtUWGEHzMywiSJnbIJ1EKQfCi9CKTcp5cfAQCUc8v8FjBxsjjEuJw9mcv9s9eBo3Z8%2Fi2xwjCwD2Zcx4XVoqvkemj4bGvQqVC3CCtLa1DU4pi64muhGQkrHVEyi5VP5x4YgLCSeTCwxDQw%2BjVlAkyxFGcrHkSumL1jZeF6a2pLiPsF4LTW6h0aB1s0HVXupIBqfTQ%2FhT7qXC4OqHV2%2BIIw3V6vkXwVUTrDCRhbLDBjqkAfN5gayPHtfR5ISTfrX1icyW1re1d9wqI8QbA1Ud4hSlrQkYD%2Bz5SJjcN0pA0vFoWuDVzZKtaWDloelsgwbN7NCf0E4dZGX%2FQGXKgUteAxgsArj2HvgUQfLLb6Z1IoyXB4WclO%2BC%2BUENm0ixm7fzUqeAgwZ78OuPzbsVFCCcy9WfFwbJ6mHoVyhufd4YRJEUPey1FrmL12v%2B6N2AxdPlS1LeVdP6&X-Amz-Signature=918e39a3ee7db481beea37b5e85539f8b86e6b06484da8bb55d438c4643986b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAKGLJ67%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCj0%2BDnmMVsXvtu%2Byz%2BIJqMZn4zRhuM5u0ynA5YYnzK5QIgcWg3PCST%2BrQhaBY1gtm4FCzNHQ94GPKzBpQjUPbLI9oqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwRqQchYGUpIUHo%2BCrcAyYfZ%2FOgvtlj%2B19ZgVcSfpm36ZbrL4vBLqyOoW4IStK13TIKR3O9XwuTJxgz4bB2KTilx38%2BIo4CKgrevT4A06m8yFSQY%2BFPV6IlgivBD7DjJZzrPpB3wtzfCzoD6qcoKvixhLAl89ct1ecL%2BDRGxxgB2DT3hg%2FVofd924cGjpV3e5X9CxiIRvPPOWdHH3jHZlW502Z78Puy5npDrJVdYZz30lKh8Av2mONJwpqad%2F%2BgkJKdxibU6kjhqFAwLLJcSbo5Pllp3CjG7YNgGTUp8JvIYWQQ6EohW2KayrjVMNRNEJUqO52FDLixk6s3IEbvgJ2%2B%2BQM7RuM%2BS86JLwyoxOLt5wIce6mijVTmJrEabGIr1sZYij55jQxSzMgBo5CV6bkeIel9g8nqBqyk%2FDIAOVrtx0dNqIPu88KeQxZTSjWYm57XOJxzufewgCcMUfrTGuASl7cebjd5eD9kCznGZqNZ4siUDGthA05WKgC2hOp1YL%2FmvVxga0dl2SDSxxsZ%2BwiCb6cjAjaxIiY7aK4kcPKMErFfRe0DB9emuZLBBMuXlLvmdwALG8Xk9Y7OlMAZFTCqb1A89%2BJeAmZx7K1XqVeBnubA1Cqp6WQFv%2FIkWmaLU4yjDOJuVWz9%2BiMWMMuEssMGOqUBLoxb2c6LeDp6aQPfvqNKslOgMA4TEFfk1FHZS8MQn0Zz2cgOM878pcpzVBWJrR5kOcJewiEOkUZYzHtZWSkV%2FArSh40TuOmJQ7USAjZB2COkhkYgPrXpykLz6ML2Cazq3LPbywMY3tbr7W8miWEhTFJTdZAVP0U2WP0V18YBAGL8E7CaRIdcblD8BCbmIdG1dBiI51v77eSKM8CaSS%2BSpbSVpM1%2F&X-Amz-Signature=db59e13308cbcd47123647faaeba85c6768de0f747b868b9ed3426d523c6b701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TU6IFW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDgDI3iFTbVbflFSoOB6Ak2KeCJ0DsZSQ2nq1RYXH0JdAiEA5mdWw2TLjgM6OGCsqfRroqJKGlxTcoVjaY%2B%2BqQT47FAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9%2FPGGQOto047j0gSrcA6Xr4pGdYf0NkMHZBlnInXAzDWNjYXT46R7PlEcDP5OjMaKIOuRC9g7fdumE4rLvfAq1Wmmnp45TqrOROvomTbafUl5AUPpdVXSYKtDUG2KqIRPTKD7jLBFyi7Itoo1lvUrO4VYUa25ANdMGLycfP59YhGjpTKQll6m1IuAj%2BJJQ17gAESOEd8aN4BKQ7cPT70CY5kIsbaJmu9R1xmlRXE7Vvn8Hk5aldNe3yOb7CITHPT85u6hPOb%2B7rAb%2F8Kv8NS54nTTkMWxS%2F6jKGtZ8Trl4yAN7h8em87P%2FJDhRUlTjTL%2B0XdC1c77NZhqGd7MAFVLtR44Rk72Yj%2FVL3Sd8VN84Rv%2BzOAcwrK1wq%2BfLTVyRg8gcElp8V88tdWz8BzAHmE89wVp6fmKV6P5YMMdGD2Mui06suEqiI72aw3Tj68qOHqlQTYneXwOGnKiilK%2FdGst%2BSizrTRydcyG1EYCSJFPPIrA60X9qsenSVqQRxunh7xuVpRzk4RGqh%2FbLqDTHVl1HZxFLmgNCk45vHjPJgV3bK1Epdoul3FLslMRV%2BbFFGG2DWHClXSqEmN%2Fi2ugs7IomVhpAPc9xWwo7qUCY1l8DLJZAmy7Qn4PRSmmLtgfAZ8HuZaDf91WucCBxMMqEssMGOqUBP2s5hMs4pQZbKR6bv4Di2QoB6oNpDZgiA7sfirko6h2bhuUyp5SKulfR8vOtbnm9R7%2BJkxhSdg4S%2Fkx%2BkjdDD4JgIG7EIpyXUNpvV1vbpqwxq8mXr6gzDX%2Bh%2BmmiSl8Z34SfUE3ZiaoBC7aVoSDz0mDoD5%2Fdxupf6QD%2F8kOzdp%2Bu8xkgmB59FZ3IM%2B0emOwRkGifNxKci4TdnhhTo0TKeZygkLkx&X-Amz-Signature=77e84498c418caef7d6a88c70ac11c226ab986a611943332c6cb61ccafc9541c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYSGZXT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCbPaG2eVK88n%2FyxqX9NY9CrdFXxjyZ3pO5soAjLO1RhgIhAP%2BPVoJg%2Fhb0nHmhp3M%2FNMwTJkbNUziZ7UdY5eJZbSs3KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH7IsSF1A9Xi2DZdkq3AM18ifF%2B%2FfbvS9FEVLtlZ8Vo7i4Ews5HloPk4wqVsVwBbVKAip1cVgKf88IgBZOZZ87ZePFeDDAk%2F9O3e2sQoY3Ug0ko2Ctx9fD9vHjjxsNUQGskqxGwZXK2KnRfUsK%2Fv0ohpCNLWjI95qE5XHQIE9%2B003it110rN%2BEW8a4Se5nShyDo33r%2BJ4m%2Bksx1RvbZ%2BWbdx6Ws%2BSz9hWUFKPxLbTVglMPSI%2FO2mbWf3hCpuwpbrChHtBoiznMoGAW3heKhU1D7ykP4Wh5P3mewcxsOZOVL2OGxWxClY29g4kpH6mtsI%2B%2FYt5LLDN6WWbFtgbxzNySNvy02Rg%2Fno69JEI009QoG9GXfPKUbfEqemQNlWJuLfUYzNidUPKCCe0NTu7khBx39BRDAo8EiDLDYZUNRmvS57bMWtUWGEHzMywiSJnbIJ1EKQfCi9CKTcp5cfAQCUc8v8FjBxsjjEuJw9mcv9s9eBo3Z8%2Fi2xwjCwD2Zcx4XVoqvkemj4bGvQqVC3CCtLa1DU4pi64muhGQkrHVEyi5VP5x4YgLCSeTCwxDQw%2BjVlAkyxFGcrHkSumL1jZeF6a2pLiPsF4LTW6h0aB1s0HVXupIBqfTQ%2FhT7qXC4OqHV2%2BIIw3V6vkXwVUTrDCRhbLDBjqkAfN5gayPHtfR5ISTfrX1icyW1re1d9wqI8QbA1Ud4hSlrQkYD%2Bz5SJjcN0pA0vFoWuDVzZKtaWDloelsgwbN7NCf0E4dZGX%2FQGXKgUteAxgsArj2HvgUQfLLb6Z1IoyXB4WclO%2BC%2BUENm0ixm7fzUqeAgwZ78OuPzbsVFCCcy9WfFwbJ6mHoVyhufd4YRJEUPey1FrmL12v%2B6N2AxdPlS1LeVdP6&X-Amz-Signature=3287a7896659a1b4acbe39301c3c76b0c22d5c11f6ddeae081be37d6e42e24d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
