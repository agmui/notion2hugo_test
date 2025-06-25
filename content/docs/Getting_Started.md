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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNQTF7R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBm0D1YkKTBg6ZMCzCm8SpWHMXtEphBGGVwUtnELIXkrAiBslcwuvFeJZZba2A1nB1pQWAtHhHX%2FZgcuvdbRPh%2F3Nir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3FGwKKz8AEiqMgZQKtwDJ7v1gunXeiTQxo2eXz6%2Bzdw%2BmiT91ru%2B0pGS0oQV5ydgaEG0aCPeRUB6IbsnkHLyzSzQXw5sdcq8ENjbm%2BMUf8b8vqIfO4GJOeIK4XN2CCuEUyK7ralk9eMiu5yzBn2g7WV9Yz81L%2FZsddUr68hft64PTqcc01nt9c54QPhHRyocPdQtZH80jvg4E8UklACBzZbqSDP39QypKZ1ISyIacMxu2PiZ8fGfGIIQSJlFrmhGLPtKMLYc30WcoT%2FW%2F%2BpOPt0fjx9NU5gYqokvdNmzZoYRGefY9bLHd0Ep11T%2FS2oRAhsM5fDrkuSbxOsaNwPiiLlZT3JL%2Bca6Pj5fvQOItK0hJDp%2BlLA41krpKMx81xaGDLKBHLQJJxMRDqVBaQoueO7R4nrlbH2YadblowTjU8rapb3kZknBIseWl1yypEcc0riI7UPLqJOY8T92EvNm4HOSLGJIy2Wp7MhjVOZqsl9PZUo%2BlRfIE1lYmjW2t3%2FPLLn8J4eQ5m%2BByasncBTVB9vKmJ9%2Bx3TVs1N4xyw7FuUM47S0Qo8t3SYc%2BEurg8YusGsjmXLCvM%2BXBMhyRhoRfRR33mRJo44nsIg1VHtaeYk9LzhGFAzt3E7pSXnCqYStDvE8K3DRhrhGFXYwkcPtwgY6pgGlmVxyZSYC1yiGRSmDbM1bYiQY0R%2BG%2BiUOD2IgPqN0T04A5cAxC6r12VFnQFB3EBUrcQMI0tyIbO0%2FNB71atRdv7B%2F9Zcx%2BynGoCkEQwlaliXNkG%2FZrQSG4pFZ1MpieRg131HreI%2FUqCqkh7zmSxyfdOBZ29i8MJ4UajUn54ak3GaqQ2rHeP%2Bf1pNgkmSA891zZR5oAZguUL1LmHIbfGNNSulqlbq1&X-Amz-Signature=137a7938bb60b44a2cf03762206a204546683fe876b86b2ada9067db1a710754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNQTF7R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBm0D1YkKTBg6ZMCzCm8SpWHMXtEphBGGVwUtnELIXkrAiBslcwuvFeJZZba2A1nB1pQWAtHhHX%2FZgcuvdbRPh%2F3Nir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3FGwKKz8AEiqMgZQKtwDJ7v1gunXeiTQxo2eXz6%2Bzdw%2BmiT91ru%2B0pGS0oQV5ydgaEG0aCPeRUB6IbsnkHLyzSzQXw5sdcq8ENjbm%2BMUf8b8vqIfO4GJOeIK4XN2CCuEUyK7ralk9eMiu5yzBn2g7WV9Yz81L%2FZsddUr68hft64PTqcc01nt9c54QPhHRyocPdQtZH80jvg4E8UklACBzZbqSDP39QypKZ1ISyIacMxu2PiZ8fGfGIIQSJlFrmhGLPtKMLYc30WcoT%2FW%2F%2BpOPt0fjx9NU5gYqokvdNmzZoYRGefY9bLHd0Ep11T%2FS2oRAhsM5fDrkuSbxOsaNwPiiLlZT3JL%2Bca6Pj5fvQOItK0hJDp%2BlLA41krpKMx81xaGDLKBHLQJJxMRDqVBaQoueO7R4nrlbH2YadblowTjU8rapb3kZknBIseWl1yypEcc0riI7UPLqJOY8T92EvNm4HOSLGJIy2Wp7MhjVOZqsl9PZUo%2BlRfIE1lYmjW2t3%2FPLLn8J4eQ5m%2BByasncBTVB9vKmJ9%2Bx3TVs1N4xyw7FuUM47S0Qo8t3SYc%2BEurg8YusGsjmXLCvM%2BXBMhyRhoRfRR33mRJo44nsIg1VHtaeYk9LzhGFAzt3E7pSXnCqYStDvE8K3DRhrhGFXYwkcPtwgY6pgGlmVxyZSYC1yiGRSmDbM1bYiQY0R%2BG%2BiUOD2IgPqN0T04A5cAxC6r12VFnQFB3EBUrcQMI0tyIbO0%2FNB71atRdv7B%2F9Zcx%2BynGoCkEQwlaliXNkG%2FZrQSG4pFZ1MpieRg131HreI%2FUqCqkh7zmSxyfdOBZ29i8MJ4UajUn54ak3GaqQ2rHeP%2Bf1pNgkmSA891zZR5oAZguUL1LmHIbfGNNSulqlbq1&X-Amz-Signature=49fd25584481522e34973440b744738fb3869d640d3e23894afcd88d39a34471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNQTF7R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBm0D1YkKTBg6ZMCzCm8SpWHMXtEphBGGVwUtnELIXkrAiBslcwuvFeJZZba2A1nB1pQWAtHhHX%2FZgcuvdbRPh%2F3Nir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3FGwKKz8AEiqMgZQKtwDJ7v1gunXeiTQxo2eXz6%2Bzdw%2BmiT91ru%2B0pGS0oQV5ydgaEG0aCPeRUB6IbsnkHLyzSzQXw5sdcq8ENjbm%2BMUf8b8vqIfO4GJOeIK4XN2CCuEUyK7ralk9eMiu5yzBn2g7WV9Yz81L%2FZsddUr68hft64PTqcc01nt9c54QPhHRyocPdQtZH80jvg4E8UklACBzZbqSDP39QypKZ1ISyIacMxu2PiZ8fGfGIIQSJlFrmhGLPtKMLYc30WcoT%2FW%2F%2BpOPt0fjx9NU5gYqokvdNmzZoYRGefY9bLHd0Ep11T%2FS2oRAhsM5fDrkuSbxOsaNwPiiLlZT3JL%2Bca6Pj5fvQOItK0hJDp%2BlLA41krpKMx81xaGDLKBHLQJJxMRDqVBaQoueO7R4nrlbH2YadblowTjU8rapb3kZknBIseWl1yypEcc0riI7UPLqJOY8T92EvNm4HOSLGJIy2Wp7MhjVOZqsl9PZUo%2BlRfIE1lYmjW2t3%2FPLLn8J4eQ5m%2BByasncBTVB9vKmJ9%2Bx3TVs1N4xyw7FuUM47S0Qo8t3SYc%2BEurg8YusGsjmXLCvM%2BXBMhyRhoRfRR33mRJo44nsIg1VHtaeYk9LzhGFAzt3E7pSXnCqYStDvE8K3DRhrhGFXYwkcPtwgY6pgGlmVxyZSYC1yiGRSmDbM1bYiQY0R%2BG%2BiUOD2IgPqN0T04A5cAxC6r12VFnQFB3EBUrcQMI0tyIbO0%2FNB71atRdv7B%2F9Zcx%2BynGoCkEQwlaliXNkG%2FZrQSG4pFZ1MpieRg131HreI%2FUqCqkh7zmSxyfdOBZ29i8MJ4UajUn54ak3GaqQ2rHeP%2Bf1pNgkmSA891zZR5oAZguUL1LmHIbfGNNSulqlbq1&X-Amz-Signature=715d0cf01ae52d18dd46d5fd618406a15640e836a663129b15306886996dc1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKFNMA36%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCzVA0YiU41DI4QCREX85XcNFkWSlQPvCxO4wXG0OqCVwIhAMxmC69ya6ckWNGVuQKbzLRtwfNEX%2BlMwql%2BwSgb9ePpKv8DCDwQABoMNjM3NDIzMTgzODA1IgwMu6pSBGCK6qhRaRcq3APIRSTzgVYf8zR3gsjduY5q7HIpGMdG94AmLhAoYXnmGXbtLcf26cdkh9RX%2BjIySr%2FRxR%2F3DnKXvXZe79XxOBIH%2FQiIQkC6alD3FdsPws1fJrekuHGm1ThWdLfYhvVriVzXQTw87ohEyM5SW46VhsSKVC9RfsUEHKt9H3hmiBj8vFLte%2B1pDWA9KFNQKVgzxEM7kkb6yyZvTpYs%2FlZNPpQZwbiLXQLsGE8FI0P23YjaPsgDLJKmopIpe6HmScTewTpYYG%2BiWEhLDSA6vARxF0dTUPeRcjo7er8iaC5qI6PbAeL78aSwGH2k%2FPmJP%2BGRVIekinyhUOR2gW3btXMysDGbcnjjtBy6XqxIYpD15ZYa7J3r%2BHrXfXz3gFuE7nmx2ysx6ApWgZDemZJnVXbql6Mj8wvTCR6CbOeVOA3wVzbp%2FfDZrS67SDQQlh7BPBC7xRFcaAjwydOjsMnTLEw1lBz19FUZ5j2oll7KpG5V4FfIzvZSRUfjnQtUEIaYutYXA2KJ5uPbvhUxJZN1wcwbRMTXFYcPJMLybgAHit5fMzz874O7x3ZDFxeWKfP3Q6OwobicLg2z7ZQcJCLA9jW0CJ3o7W36nqYBsFk4gS8wVj5uLIwpRs9EprbB63eltjC8yu3CBjqkAamOyFU6jD4MaX%2FFpwPoPmIlm%2BTfJPIv%2FBAgalExFQ6adXZ4VmJFSX1qV26K3k9SzBFqKBOHtMsiBUTvgcqzmkENTyqnVVmgx8q2fYjid%2Fbtls4wGT%2BRzmbst1GDfMqhXRH1tGJx78WWPSUB5rVX%2FVLr43ADCPRRZ0kVnJMpSDAyGrqQtj9ijn8NkV2Ioo1IFEFGN3SdC0hAO%2Bdsuf%2FMs7CQhXc6&X-Amz-Signature=24a3044c2df12175f6402217a0fb374e016aac418c85995dfdbae9bf5a21bb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DBUWNH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDDjVHqbxlWdtIGTr7Us7j3CJ%2Fg%2FPBer%2FeztP%2FC6pUorAIgRjylkyLQGU2aLae4KHZVbuoYzepov0lQD6PGX0sbvBoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFxXELH6F3ySSOAkpyrcA14PZLGj2v7ZSmqr4U2AttNBSOpHCoeww6ZX4l4Qq%2FKi5Ne3nL2BUfC8Re5thEBpNmK0vX4f4J4rPgIqVlab56s8RV4FtjWVJoxyZI2di010hT%2Fy7PtbE69b3vitYw9L43u%2B0rLBq%2BywU%2BeFHGyDkzeMG%2BziHJA2dh4QdmIXxJRvFZl4evQLwrmnOKRqKGEtXwRFbY93%2BNMAav4dptk6mJ6owvvktMi0zhpCZcA847g40lNeLzagmiv2DHb7VZBz%2FNX1%2F52n5iThh%2B70b6hx1udy%2Ft%2Bz5J8n5HkwKtST0xXC8EeZRjuCp5pxjEr4BKwqbrqxocDj5Q1JKBHFCkQ6ogjPu1fRf1f1sXQVeKy8lVvqr6VvtnBMO9Vyc70cKASokksyCWtKWFtQh9OfZh5UpNi17CqClt9iho9%2BeqO5SL%2BAN7H4VAhuo8tOplyCrB1hQ6Cy8l9UXuV96%2FR5aAsy5AMZyUY1F0ktSY5QyqFGWNom1aduNgPjrnGbkX8JD9tlV0I0w7ihuiL6TqA%2Fnt9U96Tdh7U5OP9idcLM7022JR2ZSg%2FNp6rF5NnCEjOzMsDzwy6gX%2FAPoqhdv7c%2Bl5VUHWSQiej7V%2FlWVtzr%2F3CBxgoCOTbXhz9jFPExtzQdMJLC7cIGOqUBcdYWTeRfSYUqoMHTEwM7rzh9U8NT3vf7%2B0UAm0nIOWs8%2B2bmWnI%2FBeeRQ4TXm8PnXLc%2BZX7lIdW2vn%2FWgxw0s7JrNhiu9bvZSuXY4ocf4ExYID2y2uNz8XKFoYWokNxIH0WR%2Bpj6Q0xhQolQ7mbVR9bCB10yiGlj61pQww%2B0CfNtEWuTDRJr94CP5WzU1nqKzP4wQjB58yoYGhI5sT2wbz7P%2Bu3J&X-Amz-Signature=b7704ce0736b453953016c6545e458cc51eee30fe631b05000f03266a303629f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNQTF7R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBm0D1YkKTBg6ZMCzCm8SpWHMXtEphBGGVwUtnELIXkrAiBslcwuvFeJZZba2A1nB1pQWAtHhHX%2FZgcuvdbRPh%2F3Nir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3FGwKKz8AEiqMgZQKtwDJ7v1gunXeiTQxo2eXz6%2Bzdw%2BmiT91ru%2B0pGS0oQV5ydgaEG0aCPeRUB6IbsnkHLyzSzQXw5sdcq8ENjbm%2BMUf8b8vqIfO4GJOeIK4XN2CCuEUyK7ralk9eMiu5yzBn2g7WV9Yz81L%2FZsddUr68hft64PTqcc01nt9c54QPhHRyocPdQtZH80jvg4E8UklACBzZbqSDP39QypKZ1ISyIacMxu2PiZ8fGfGIIQSJlFrmhGLPtKMLYc30WcoT%2FW%2F%2BpOPt0fjx9NU5gYqokvdNmzZoYRGefY9bLHd0Ep11T%2FS2oRAhsM5fDrkuSbxOsaNwPiiLlZT3JL%2Bca6Pj5fvQOItK0hJDp%2BlLA41krpKMx81xaGDLKBHLQJJxMRDqVBaQoueO7R4nrlbH2YadblowTjU8rapb3kZknBIseWl1yypEcc0riI7UPLqJOY8T92EvNm4HOSLGJIy2Wp7MhjVOZqsl9PZUo%2BlRfIE1lYmjW2t3%2FPLLn8J4eQ5m%2BByasncBTVB9vKmJ9%2Bx3TVs1N4xyw7FuUM47S0Qo8t3SYc%2BEurg8YusGsjmXLCvM%2BXBMhyRhoRfRR33mRJo44nsIg1VHtaeYk9LzhGFAzt3E7pSXnCqYStDvE8K3DRhrhGFXYwkcPtwgY6pgGlmVxyZSYC1yiGRSmDbM1bYiQY0R%2BG%2BiUOD2IgPqN0T04A5cAxC6r12VFnQFB3EBUrcQMI0tyIbO0%2FNB71atRdv7B%2F9Zcx%2BynGoCkEQwlaliXNkG%2FZrQSG4pFZ1MpieRg131HreI%2FUqCqkh7zmSxyfdOBZ29i8MJ4UajUn54ak3GaqQ2rHeP%2Bf1pNgkmSA891zZR5oAZguUL1LmHIbfGNNSulqlbq1&X-Amz-Signature=0a044a22ab24dfc256507f48a5148bd62f3fc7f19c2e41f5dd8c0299fca69508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
