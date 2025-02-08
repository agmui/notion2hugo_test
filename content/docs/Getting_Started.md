---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3E5VFJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBNWNPlZz9HPkGviKmgZvk%2Bih21RljfWcKRhJYWPFnqfAiEAnolBgtQ2NIBQ8aCGjVocCkkEcyy9PAFL8NHosS48muUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2l3d0YA2IJTqEOZSrcA6QK2pb4LX11aJSQSf8jfmlkm5end0M9tGVBcaAynE0GUB8PD%2B4jK%2BEJpoU6lfS1M%2B2ylFnaQPzb6Cnd05MS6Roy8qjhbAzqX6beHUk0emFNYyNZP5OlbVyLr1QPwal%2FjbxEIEoajPlcun9HN%2BGObZiqJArzfbU0cG%2FDIorR%2FN7ME7K5kHYF62wkg01M0zW3vdpjK2NOPVm1Nf2bmEPYADut84R9b%2BDC97MuGiQ1Y4mnNC6HGa8Euu76vwZGaQt6i0aCxGrdYpl6LHnP8BM4tW8NB2AAmfnqsnEFlLkwMMymMakUSfP7WmuJo0fXgLH%2BS3eQL4j2s2xLl7s7%2BS0c5Zn0V%2F%2F7zuCJ6iQ4yCzih11HFAMgowtlBKS8QK8tov1EXEdq%2B4wjuFL1DjaiGW2vLbkvHijsjpgjJqUjFvwDlGxKSp9Km5EB6yH3i%2B6UHHjWeRUIEJb%2B1xGq5bLhv9EqZtttdP7p6bJ33kdQ8cWpiOKfODblhziybYyTSJ91glZ05kD1MqQi5lF72bVJ4%2BqvovmsfWrZ1gxZ0LuaGiVWdCg2YiaOCTmBr6SceMBUwiLRJFGyoplaAhzZNe7w8C88Dg48CBFxk%2FIorBXHSYzcKX4avulVm8neUOr3blUHMLnemr0GOqUBc1V16b7azRTGPRFAHn9v8%2B2yHL585nhfQ9MvYN28mRPIZxPotJzO0d9y6tj1Vm0ue8ebTd1y3J0xM7lk8w%2BIjCnzH3%2B2FqsaKZjau4nLbxxcSCXSFyvxmyJwPJ7vFbmzpZczU9VVQX%2FFkl5v%2Fx63WHOhyLaoOelBOVR6QZPQSKWqhIE6zdYatM4eJOIqgvQ2yiGs4tfH27hqOppReY8%2FWsRFpGx7&X-Amz-Signature=72af8ead0cd75bef263d640d75812e6144ba8e9582def8c30b03c1f7a9620414&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3E5VFJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBNWNPlZz9HPkGviKmgZvk%2Bih21RljfWcKRhJYWPFnqfAiEAnolBgtQ2NIBQ8aCGjVocCkkEcyy9PAFL8NHosS48muUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2l3d0YA2IJTqEOZSrcA6QK2pb4LX11aJSQSf8jfmlkm5end0M9tGVBcaAynE0GUB8PD%2B4jK%2BEJpoU6lfS1M%2B2ylFnaQPzb6Cnd05MS6Roy8qjhbAzqX6beHUk0emFNYyNZP5OlbVyLr1QPwal%2FjbxEIEoajPlcun9HN%2BGObZiqJArzfbU0cG%2FDIorR%2FN7ME7K5kHYF62wkg01M0zW3vdpjK2NOPVm1Nf2bmEPYADut84R9b%2BDC97MuGiQ1Y4mnNC6HGa8Euu76vwZGaQt6i0aCxGrdYpl6LHnP8BM4tW8NB2AAmfnqsnEFlLkwMMymMakUSfP7WmuJo0fXgLH%2BS3eQL4j2s2xLl7s7%2BS0c5Zn0V%2F%2F7zuCJ6iQ4yCzih11HFAMgowtlBKS8QK8tov1EXEdq%2B4wjuFL1DjaiGW2vLbkvHijsjpgjJqUjFvwDlGxKSp9Km5EB6yH3i%2B6UHHjWeRUIEJb%2B1xGq5bLhv9EqZtttdP7p6bJ33kdQ8cWpiOKfODblhziybYyTSJ91glZ05kD1MqQi5lF72bVJ4%2BqvovmsfWrZ1gxZ0LuaGiVWdCg2YiaOCTmBr6SceMBUwiLRJFGyoplaAhzZNe7w8C88Dg48CBFxk%2FIorBXHSYzcKX4avulVm8neUOr3blUHMLnemr0GOqUBc1V16b7azRTGPRFAHn9v8%2B2yHL585nhfQ9MvYN28mRPIZxPotJzO0d9y6tj1Vm0ue8ebTd1y3J0xM7lk8w%2BIjCnzH3%2B2FqsaKZjau4nLbxxcSCXSFyvxmyJwPJ7vFbmzpZczU9VVQX%2FFkl5v%2Fx63WHOhyLaoOelBOVR6QZPQSKWqhIE6zdYatM4eJOIqgvQ2yiGs4tfH27hqOppReY8%2FWsRFpGx7&X-Amz-Signature=def67926be86d30d00a933bf21c7d9bb8d81c90fe80f6789fa12b25a67ef9a13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNJE2SA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDBC6IkNReiGd17D3D80I%2FDARmOkQBKhle3AEM0QCudoAiB2FKrAR3JTwpHAWP0%2BrKhMAPVVEjJ0T0rNYVrxBSW9RiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAzXzyhTUKCGkYHuwKtwD%2BjBoC72WzpWRVZaIbVRsUAb3yKZ0CeG5zZc0PB8BmsxeOTdgQ4ZWV3k46njiJEZpAQ2iq3oKAP8wpYIc9%2BFYHIyKJ9m8Ur4XQAbXScMZkY7yLIQ4%2BdvSWl4r2yGNzPOSFViYEJ5cnGXbsjaIt0WjJppanu3UuVNug918ZaT0IsXY1GtcYG2%2FLFqAmd%2BxkFT%2BduN11J%2FndYokl%2By1LtiZCW9eZeEDOfIU35FiG%2BzUIvyK11y7razrHBhYvKg3tD8SVAxdYHCIu7um2mCL1AwXfH9u4LRbNRaZPlolbpyK7GCdYnzsiGDZuLLYN3DSZrS0WnQql1md9khKkmTlbt1kbPcCUvXkVBBRos94HIlwuDWGw7CoOfOXBiyvDbC60TG3HqLe%2BbIUHWaoHZAnXOs%2FyKm9K9flqN16BabcB3Km9nvbF9yFgNYlOUjKdavDqsx1kFEilPiHOp5VN8envL39PlgjAwfPKCSaYqeqQNHvnXB1qfTp5LA%2Fl0ZT7mTDAvMV%2F3FQ6KepbmjDkJcWIww2j%2B0h7JwVouWpHmWZxncyvZg5zNop%2BtA%2BTuU5aC85zcwplCXuvNQqtTTVJrx8qxmvcKP%2FkrcJP%2BBB3%2F834%2BYe%2FFBvbTlpYVR%2BOKVxF0Yw496avQY6pgGipEsPpVTqH80D6CPbQKjWGiTIt%2FlDXbY9RyGQrrms93wf1WZeB5mc9yOZsYYEEFieDhhi%2B8Gzw30oUyZwJO2rRvYTmlXs1CFZUsLis9%2B0SlubFr1mj6n5yfq27LNOWxN%2BiJL2FaEjLR9%2B3CgPqtQv8l%2FIaC2JpgwsWtIFFVdQPsYasuecIOuP2XUS9eh4mHeD6dvMrI80ioSpRwnqeFmJVmpHDhW6&X-Amz-Signature=49c9a46dec57f89b59d0d14643b94400437cd86787aec50ff26ac6cdf868e34f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPRKYHH6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFBoe9I4Q4NtgJW45m54iGECrab0tj82DwpEQTmHZV3tAiA78cqfi1BX8ZunnSRAvDj51IvjAVNS7OoquKspqrAMGiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUIf1DUBLj%2FUaVOJ2KtwDiZD6%2B6JRetuU8wIGW7YHTCV2ii1Ywnj%2FttTX8z2Zv8IXzI9YMM4iBdPE6wTh7OX8oW4YekF1xz63Pw%2FoYoyVQSoQxxevTgMIBDGv7XzRrZl0D3K7kDaXgzJUhhCTi2IGWxchc25O5%2BZcTb0Vo1DRL56RQo5rMkZsHHtCORjeKKanMh6heijMiqo8t4VbOC0BG2aabOpPNoCajqX5vVX0Vk3n1r4%2FDRSO2NZW41%2BKEyzRt5eIaopOersmqn3GHj00HrGOXjU12VoChInw6t%2FzMUI50s1X0AXG7hVXoTGNAfh3WD%2B91y33K2e8NA3hiZcr%2FoG7dHxPd6hAl9lyS1oNHgMDZhT6sXSaXqaZ2A5ddmDbgNfTcTdLOduXTHDQU0DJHcxuICV9ONJPHbDIflYu1%2BgChF6TAYppfebbSdzeL3z2w7kikr5HhUPWU3T%2Bz9osvMMAVXQ7CPuE4JkqD3m3LhTJAM8Z7m4TnNCAbW%2Fq2xuLVVd0ZdVOv137%2BFjiaebW%2FPFGSYHBMNseqBbdbzrrEDCw1g5jJt13synyyF%2FLIy8FHLGyQcv9bJlP1719aFoNxW6N8Ay8zZuqNLWWtDeMrAryeQs3s3kPlCO%2FbrP39FWpVHbF9Fz1t4gNOzUw0N6avQY6pgFMtu39ODJSeUIot60TvfIvHVU3qSuCtHk3nSVd4hlJ7UTaLzmTWiY2cFEtFOnFa9mCMGFjneLSu%2BoqslevC33IQItiNVJ2xxU4qNdG32YlwKRc%2BuBR6n0%2FnuHM4rbiGPh5viW852gkQdQneq1RVJDUMthg6syNQj2UNseuFd%2BH5vCoxhxp0U6hKLzIGtIGysJmUaw49NZoyBFAppytCWgfxrgbROZK&X-Amz-Signature=7a184304b907dd36ea0b7e7f50517fa3865720a6669dbe23d12162b82e2362b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3E5VFJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBNWNPlZz9HPkGviKmgZvk%2Bih21RljfWcKRhJYWPFnqfAiEAnolBgtQ2NIBQ8aCGjVocCkkEcyy9PAFL8NHosS48muUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2l3d0YA2IJTqEOZSrcA6QK2pb4LX11aJSQSf8jfmlkm5end0M9tGVBcaAynE0GUB8PD%2B4jK%2BEJpoU6lfS1M%2B2ylFnaQPzb6Cnd05MS6Roy8qjhbAzqX6beHUk0emFNYyNZP5OlbVyLr1QPwal%2FjbxEIEoajPlcun9HN%2BGObZiqJArzfbU0cG%2FDIorR%2FN7ME7K5kHYF62wkg01M0zW3vdpjK2NOPVm1Nf2bmEPYADut84R9b%2BDC97MuGiQ1Y4mnNC6HGa8Euu76vwZGaQt6i0aCxGrdYpl6LHnP8BM4tW8NB2AAmfnqsnEFlLkwMMymMakUSfP7WmuJo0fXgLH%2BS3eQL4j2s2xLl7s7%2BS0c5Zn0V%2F%2F7zuCJ6iQ4yCzih11HFAMgowtlBKS8QK8tov1EXEdq%2B4wjuFL1DjaiGW2vLbkvHijsjpgjJqUjFvwDlGxKSp9Km5EB6yH3i%2B6UHHjWeRUIEJb%2B1xGq5bLhv9EqZtttdP7p6bJ33kdQ8cWpiOKfODblhziybYyTSJ91glZ05kD1MqQi5lF72bVJ4%2BqvovmsfWrZ1gxZ0LuaGiVWdCg2YiaOCTmBr6SceMBUwiLRJFGyoplaAhzZNe7w8C88Dg48CBFxk%2FIorBXHSYzcKX4avulVm8neUOr3blUHMLnemr0GOqUBc1V16b7azRTGPRFAHn9v8%2B2yHL585nhfQ9MvYN28mRPIZxPotJzO0d9y6tj1Vm0ue8ebTd1y3J0xM7lk8w%2BIjCnzH3%2B2FqsaKZjau4nLbxxcSCXSFyvxmyJwPJ7vFbmzpZczU9VVQX%2FFkl5v%2Fx63WHOhyLaoOelBOVR6QZPQSKWqhIE6zdYatM4eJOIqgvQ2yiGs4tfH27hqOppReY8%2FWsRFpGx7&X-Amz-Signature=f99ff7c929be7dc9d3d589298110131cf755c4e517a7af5c6e17cf27c47361fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
