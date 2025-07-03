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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHKNDL6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHzhNKB8V6vz%2BS1du2s1eELUY%2BriYg8DwQ7KvSvTRFPQAiEA3xHzJjOCxTqrg3zjENQIKmzW2itdSI0BM4FG5Pql9toq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAi5kvLXd8EYsXeDVCrcAzvvNokPt4fsblvm7jBiPb6KjeCbmavAc6dQsXSyvecBYuPO8SOgH2UOHnHTgtEqcnbyETgE37%2B2yPJiq0jFDySTpQbNrXvXi3YvSA9iowv%2BWKbMDGLBC0yX3A5KV7rr4EG3UjuJfjyBusoiJ1wkaHZkabg9Q1yG3%2BQ21%2BkcLlwHGcXn0aGlG5WdXCcKaKVAnU8RAZz1HkGE57I2SM6%2BzLaGlvdKIdVUEvD0AAMgYV2DKqKJ%2B1vhpGv9REv%2BB0xeozNewvjkYgMxEp8gFd%2FqAIvdfKJ4JWStQ7%2BYccFywOPOi2rI%2BOCkwMExwbRGJwvuFBBb%2FA54m%2FglnngcEL6pWA74pQ2YLp4RvZDSEgRbgoEGWjLmvTDcACH7RcwuQQvXSo2nEcdb%2FPooRkp4rU6W1%2F7mrBoPJwWAKmnEezIZjA7utkw2NYTjPcI4Gk5pwyjPG0zejdol%2FD02aWE5xih77UdVSjTLYPI03Xj7Q%2FRCj8HjJo6zN9IBMOHCfDkt4AxlGvzn7opI3BOyep1soY3CD0oIROMtmHow0kWJ%2F9ETnJ0npj8mCY4ONQpo0tGz9MmX8xqm6xfatfzLAqQt1R5ukvvFoJHS7zpayPU44IJM9KIgokqR8zwBrJ01bu8vMMDlmsMGOqUB%2BWvxGASlGwQsQE62vXPBF7CF8qHDVKYNVEFAX9K%2F5tK2FAJFZhhGneW8Qa2zhAnBOOSbks18VBIcr35oSzFveb3nh2TksJ23zo6CkJ9Y%2Bwx7c2U74lSsuEnwHbvUYY4YRTTRn7aJsQ7MIbInCBXpDTJp9zVRPkVBdBmLCkuqQ53i35erIJjehyTdC2IeAPmafeHJF6PoLyyOVaMEugrpokpCrmqa&X-Amz-Signature=33c06fd4ac928ab5a09106f5e1fcac4065361e0e0ae4f732353c4cc3b196bfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHKNDL6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHzhNKB8V6vz%2BS1du2s1eELUY%2BriYg8DwQ7KvSvTRFPQAiEA3xHzJjOCxTqrg3zjENQIKmzW2itdSI0BM4FG5Pql9toq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAi5kvLXd8EYsXeDVCrcAzvvNokPt4fsblvm7jBiPb6KjeCbmavAc6dQsXSyvecBYuPO8SOgH2UOHnHTgtEqcnbyETgE37%2B2yPJiq0jFDySTpQbNrXvXi3YvSA9iowv%2BWKbMDGLBC0yX3A5KV7rr4EG3UjuJfjyBusoiJ1wkaHZkabg9Q1yG3%2BQ21%2BkcLlwHGcXn0aGlG5WdXCcKaKVAnU8RAZz1HkGE57I2SM6%2BzLaGlvdKIdVUEvD0AAMgYV2DKqKJ%2B1vhpGv9REv%2BB0xeozNewvjkYgMxEp8gFd%2FqAIvdfKJ4JWStQ7%2BYccFywOPOi2rI%2BOCkwMExwbRGJwvuFBBb%2FA54m%2FglnngcEL6pWA74pQ2YLp4RvZDSEgRbgoEGWjLmvTDcACH7RcwuQQvXSo2nEcdb%2FPooRkp4rU6W1%2F7mrBoPJwWAKmnEezIZjA7utkw2NYTjPcI4Gk5pwyjPG0zejdol%2FD02aWE5xih77UdVSjTLYPI03Xj7Q%2FRCj8HjJo6zN9IBMOHCfDkt4AxlGvzn7opI3BOyep1soY3CD0oIROMtmHow0kWJ%2F9ETnJ0npj8mCY4ONQpo0tGz9MmX8xqm6xfatfzLAqQt1R5ukvvFoJHS7zpayPU44IJM9KIgokqR8zwBrJ01bu8vMMDlmsMGOqUB%2BWvxGASlGwQsQE62vXPBF7CF8qHDVKYNVEFAX9K%2F5tK2FAJFZhhGneW8Qa2zhAnBOOSbks18VBIcr35oSzFveb3nh2TksJ23zo6CkJ9Y%2Bwx7c2U74lSsuEnwHbvUYY4YRTTRn7aJsQ7MIbInCBXpDTJp9zVRPkVBdBmLCkuqQ53i35erIJjehyTdC2IeAPmafeHJF6PoLyyOVaMEugrpokpCrmqa&X-Amz-Signature=2746a1a1a43574b60733a2aca40a573838bd3aa34f2c6844bfaff2bc7bff5ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHKNDL6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHzhNKB8V6vz%2BS1du2s1eELUY%2BriYg8DwQ7KvSvTRFPQAiEA3xHzJjOCxTqrg3zjENQIKmzW2itdSI0BM4FG5Pql9toq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAi5kvLXd8EYsXeDVCrcAzvvNokPt4fsblvm7jBiPb6KjeCbmavAc6dQsXSyvecBYuPO8SOgH2UOHnHTgtEqcnbyETgE37%2B2yPJiq0jFDySTpQbNrXvXi3YvSA9iowv%2BWKbMDGLBC0yX3A5KV7rr4EG3UjuJfjyBusoiJ1wkaHZkabg9Q1yG3%2BQ21%2BkcLlwHGcXn0aGlG5WdXCcKaKVAnU8RAZz1HkGE57I2SM6%2BzLaGlvdKIdVUEvD0AAMgYV2DKqKJ%2B1vhpGv9REv%2BB0xeozNewvjkYgMxEp8gFd%2FqAIvdfKJ4JWStQ7%2BYccFywOPOi2rI%2BOCkwMExwbRGJwvuFBBb%2FA54m%2FglnngcEL6pWA74pQ2YLp4RvZDSEgRbgoEGWjLmvTDcACH7RcwuQQvXSo2nEcdb%2FPooRkp4rU6W1%2F7mrBoPJwWAKmnEezIZjA7utkw2NYTjPcI4Gk5pwyjPG0zejdol%2FD02aWE5xih77UdVSjTLYPI03Xj7Q%2FRCj8HjJo6zN9IBMOHCfDkt4AxlGvzn7opI3BOyep1soY3CD0oIROMtmHow0kWJ%2F9ETnJ0npj8mCY4ONQpo0tGz9MmX8xqm6xfatfzLAqQt1R5ukvvFoJHS7zpayPU44IJM9KIgokqR8zwBrJ01bu8vMMDlmsMGOqUB%2BWvxGASlGwQsQE62vXPBF7CF8qHDVKYNVEFAX9K%2F5tK2FAJFZhhGneW8Qa2zhAnBOOSbks18VBIcr35oSzFveb3nh2TksJ23zo6CkJ9Y%2Bwx7c2U74lSsuEnwHbvUYY4YRTTRn7aJsQ7MIbInCBXpDTJp9zVRPkVBdBmLCkuqQ53i35erIJjehyTdC2IeAPmafeHJF6PoLyyOVaMEugrpokpCrmqa&X-Amz-Signature=6bd188ce4a55e5a89441f6bc0594a344f05352818dec2ec56390d1b351eec2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U74GEP3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDYXGPiy1cIAburpY4%2Bz3Bli5FPnw19LHu%2BjmJCLwB9%2FAIgYZHDitzTp0cnYJN7%2Bb9%2B7WNKQ%2FhXuIbF%2FOgpytK66%2Fsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAhsEfevyqOvPyLBrircA0jRVRNPKQCIJPBJB%2FkCLLgUfq2nnjMLpGyG0%2FdZtPptTRTtOKbnRgJRjY9fNG74e2wjMZyYNVare4EMA%2BL%2B5LNJ6RFI%2FgwGYdhGCTDa8NV7ngQnsRmq7ZN5tv%2BU9XRJwVdPDCYak0oDkUWAIQakxWjvP8gn9nJGxvaOnUvVr%2BAkgeuxnAQdiUUZ3YVq4a4PjTCFuxIknX5iRr7CBgzTsJi0SFLr0jv%2FLH%2BlUZD226tp6miSb2MlZLwYt0BnWgt3BRQcWJpttvMWVFPL0vj9yMvzH0UgvWJ9V8Vz%2BvFevZSr2HIGyk6JlEIc5A64hXmzaNbBssmo5mn%2BudNnwvRjUtysGdE%2Fr5ZfzfBsU6oqexwkF1GSFQruxwRfW7%2FRSgXZaeIMJxBKRBR9H1oVz0A0MTGtu65XYWV%2FL9ldwRh9ZTsNQSlwPUd1Ax7XtV4lsC1GKVraEbzTYKjt%2BYMeDCaQbI09%2BCvTkjWZPL0D0xvIwO4xr81nMl6BiMWGn9xiT3qLLcrAkQIGv3QxFc29r4h%2BcIXNSQ538auctx7oZGuRIxtUOUi6uN4YOUih47D2ai6hCJBuNt72EUmIZ02MajeGWWfxqXQ8Hcv2TgdjsRNAnQSxhHHq%2FbjGOtnJjkQJMP7lmsMGOqUBKKBx%2F7DrLBPZlLoUOxFmbgkKz0X9HPWXoogTmHXEblTWzNBie%2Fq4fyOOZ6hEN6UZFTihEoC5wWMoFfMj%2BW%2FCNxQBMrVOYhTl5gR%2BoTicBsqLY1CXkP83eSrnhzAbTU9JwTXXHEj6Bc90fneVF%2FzxnMLre2uuLsmxEKfdoEM7%2FdGStURHfuoEjrPH6MMpCHUfUVL%2BBiQXvN7Q1NLzxH6PkxweQAT4&X-Amz-Signature=5236653b05a3d42e5003f7cb3163e2b3d7ef8d44c1345c753876e6afa6fb4f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOYEMS2N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDpM702UwUAi8YWwfW%2FtAkcwfR2o2x4nS3QpK2b61EaMgIhAOsr7VQVPa%2FuSsFt2TqiV2srpmwCj2%2Be7CqGmraxNORrKv8DCBoQABoMNjM3NDIzMTgzODA1IgyBSOmuynYDcL5HR1Eq3AOgAViNTNK5%2Fk74gl94QkwZ006hQ0jnlUWb2apMkof%2F4%2FNjGwWpJj92%2F6N7wLmuX6%2BqDWZA6M1jSaK4sVCazh4EVkAy9z3BvA%2FuuZKkmn3ij7yIhlYqXThIZpj6lU%2BwEgMcBUHz778%2FMCDQdquNQIH0%2FSIgccyEh%2BK6kP7ubDoiYshKMXOaZhqckdyKGLCru0bNH4HhHuaYHaP%2FyXIRZWH%2BSoR%2FTCuubyrZBVdHxp%2FTgThCg%2Bc6c11XPc9arbiuQiXxS0PDvjDMqd%2BLjQrF0JxNeGpbEULw1frjIFZLFgls0Vke37sFfgI8gc1FpcQVhAtEq8OIR3M4G8JXoyUHfBPPeH7BAfl%2F79aztCfFKTIesMf1s3KyzPQT6M9Braerq6pnzhHKdShttaouBxpnkSXRG1ScPfeaRtZ%2BBj%2FsKCLPdq2iuYDyVTYbGE4zWdehpZC0IDEolp6bifkFngUHyj%2FmadtzE4WlZHojF9LlUzq1EBZQQcdHERqZ4jSvJiIZw4ce8zysI%2F84bJNx48EMIOnKQaneqhk6oYJIZywz%2FT0wuIhTob1CiI42uXIk5MSQGoFndTissZs4ucvJ1KRik9bGEF9YUhgyBacyZmMq9w5Sv0p9p5gDQk%2Feh%2BIxqjDz5ZrDBjqkAZAJFE%2FnrzoJ8eci6Ws4bXQF38H7ZhLFbrpVEX3yDJJANkaLQOWWVz%2BkCj%2FsWjMAy8okscTaYIoroAL%2FIeKJWKAAvoDto2nYQzp4iAH%2BFd2%2B9ht2tj%2B3aZLtEsPXH1YIBj67OSN0odiJiWw9ZS8kW9F1qVAO%2BMebwHaRPPbJ75JbLMQUyD7wJ9969DxLj3H%2BNRwnSNxF0O385TevPLY90mq8BYq4&X-Amz-Signature=a6432821303c3b17471791e5a3dae237f93d0ac15c1ddf815db56ed293f707ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHKNDL6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHzhNKB8V6vz%2BS1du2s1eELUY%2BriYg8DwQ7KvSvTRFPQAiEA3xHzJjOCxTqrg3zjENQIKmzW2itdSI0BM4FG5Pql9toq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAi5kvLXd8EYsXeDVCrcAzvvNokPt4fsblvm7jBiPb6KjeCbmavAc6dQsXSyvecBYuPO8SOgH2UOHnHTgtEqcnbyETgE37%2B2yPJiq0jFDySTpQbNrXvXi3YvSA9iowv%2BWKbMDGLBC0yX3A5KV7rr4EG3UjuJfjyBusoiJ1wkaHZkabg9Q1yG3%2BQ21%2BkcLlwHGcXn0aGlG5WdXCcKaKVAnU8RAZz1HkGE57I2SM6%2BzLaGlvdKIdVUEvD0AAMgYV2DKqKJ%2B1vhpGv9REv%2BB0xeozNewvjkYgMxEp8gFd%2FqAIvdfKJ4JWStQ7%2BYccFywOPOi2rI%2BOCkwMExwbRGJwvuFBBb%2FA54m%2FglnngcEL6pWA74pQ2YLp4RvZDSEgRbgoEGWjLmvTDcACH7RcwuQQvXSo2nEcdb%2FPooRkp4rU6W1%2F7mrBoPJwWAKmnEezIZjA7utkw2NYTjPcI4Gk5pwyjPG0zejdol%2FD02aWE5xih77UdVSjTLYPI03Xj7Q%2FRCj8HjJo6zN9IBMOHCfDkt4AxlGvzn7opI3BOyep1soY3CD0oIROMtmHow0kWJ%2F9ETnJ0npj8mCY4ONQpo0tGz9MmX8xqm6xfatfzLAqQt1R5ukvvFoJHS7zpayPU44IJM9KIgokqR8zwBrJ01bu8vMMDlmsMGOqUB%2BWvxGASlGwQsQE62vXPBF7CF8qHDVKYNVEFAX9K%2F5tK2FAJFZhhGneW8Qa2zhAnBOOSbks18VBIcr35oSzFveb3nh2TksJ23zo6CkJ9Y%2Bwx7c2U74lSsuEnwHbvUYY4YRTTRn7aJsQ7MIbInCBXpDTJp9zVRPkVBdBmLCkuqQ53i35erIJjehyTdC2IeAPmafeHJF6PoLyyOVaMEugrpokpCrmqa&X-Amz-Signature=1b1a060ce8b93f4019d1a0819c00bb8397fd87f0229b97b62f869843d7457913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
