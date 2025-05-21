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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSVE2OE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHsub37TFsBfGdne7jLHxxCHpYVrU4Z5tyn0WQEYQ5JpAiEAu0TQmN8%2BOnZZQGzlEzoNMdT8E06OP5mz9912jGyQlLUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNJdYiHkZROmaauVSrcA8i%2BiyO29blO2NAg9S7vMNVYW50j8L%2BJm9sZwAw0aGozNteyknaN%2Bth%2BUWF3FXM5iLuvUXosPZrIxM31r7HpSrrNF7SX69UVOQ3hCNhE9QtEvG%2F0VXakBdn%2FvCi%2F2Wnq2on6obPnn8MM3dkRX2%2FyVPqHeWQ8HJ2mokxvHMHkfxFPh6yQBlhXhkh8SxBug38lY8vx1b2yefNo%2B0%2FHFuYbaTC2NTwfmrg0BGVgVys3h71t4Eto6nm6pp8Om1O041zeqONkI5qd7pquj2GR95xRMcwEArwdLDP3FZdkWR5qgmdUlmOeW2p8S6Gpg79VXXmEb5xQwG94%2BbHfeUc0wH6ZXpF2g84Ep28YVJEV7AvRe0R64CLbjG%2FS3HDseTZB%2FhEJnN6aKBUjjRDxv5%2BNV3YEyyj5RbdClpdovPFZZqiT82gh6aT3VNHpoFi9dg5i39ukXMDSf%2BmW4931pvEM1gMfmBubbfb4sUqudO7zpd2kPOiYrpheBqy4Q%2Bz4kFQcaN6FmSTi8EwCh0ngPaocaDjJ5KA05fNZ610Iqmj5SOVUnQ6%2B2nfEkFr0RyCGFekZQRmq7qDyuivxygC5D%2FDShMsZP63McfJ4a3ynxuan8tdjx662xzYnhPVXCb%2Fw6DQjMM3wuMEGOqUBscZjvYkRpGP3o0xuYYhkkw6W2KFN2I2qFCeZBIUiRmv4kkyRLwmyWuB8On%2ForfJAE5%2FuJR19vXJED6Ffw7w63ch5jee0aEfeKjGCbjoQKf404kWQ7XLrzpK1jvaWGF3GGJSfoz2ToIR%2Fs0fR4PoVEOq1K6Yj8w58kTtsYD4TRpCXK3YHlrQaFkPpNCvU4fFLAhTPfEcjMy1mn3VtyccPXoGN9%2F1D&X-Amz-Signature=4f519c3fa037492f84c84a5e94c1f1f1e0aa9e2222c014276a7dae50e4bd142f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSVE2OE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHsub37TFsBfGdne7jLHxxCHpYVrU4Z5tyn0WQEYQ5JpAiEAu0TQmN8%2BOnZZQGzlEzoNMdT8E06OP5mz9912jGyQlLUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNJdYiHkZROmaauVSrcA8i%2BiyO29blO2NAg9S7vMNVYW50j8L%2BJm9sZwAw0aGozNteyknaN%2Bth%2BUWF3FXM5iLuvUXosPZrIxM31r7HpSrrNF7SX69UVOQ3hCNhE9QtEvG%2F0VXakBdn%2FvCi%2F2Wnq2on6obPnn8MM3dkRX2%2FyVPqHeWQ8HJ2mokxvHMHkfxFPh6yQBlhXhkh8SxBug38lY8vx1b2yefNo%2B0%2FHFuYbaTC2NTwfmrg0BGVgVys3h71t4Eto6nm6pp8Om1O041zeqONkI5qd7pquj2GR95xRMcwEArwdLDP3FZdkWR5qgmdUlmOeW2p8S6Gpg79VXXmEb5xQwG94%2BbHfeUc0wH6ZXpF2g84Ep28YVJEV7AvRe0R64CLbjG%2FS3HDseTZB%2FhEJnN6aKBUjjRDxv5%2BNV3YEyyj5RbdClpdovPFZZqiT82gh6aT3VNHpoFi9dg5i39ukXMDSf%2BmW4931pvEM1gMfmBubbfb4sUqudO7zpd2kPOiYrpheBqy4Q%2Bz4kFQcaN6FmSTi8EwCh0ngPaocaDjJ5KA05fNZ610Iqmj5SOVUnQ6%2B2nfEkFr0RyCGFekZQRmq7qDyuivxygC5D%2FDShMsZP63McfJ4a3ynxuan8tdjx662xzYnhPVXCb%2Fw6DQjMM3wuMEGOqUBscZjvYkRpGP3o0xuYYhkkw6W2KFN2I2qFCeZBIUiRmv4kkyRLwmyWuB8On%2ForfJAE5%2FuJR19vXJED6Ffw7w63ch5jee0aEfeKjGCbjoQKf404kWQ7XLrzpK1jvaWGF3GGJSfoz2ToIR%2Fs0fR4PoVEOq1K6Yj8w58kTtsYD4TRpCXK3YHlrQaFkPpNCvU4fFLAhTPfEcjMy1mn3VtyccPXoGN9%2F1D&X-Amz-Signature=a9838f353986d6f871092ed83c5f72ed9e2858512f2bf5e5febf00edffbb39f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSVE2OE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHsub37TFsBfGdne7jLHxxCHpYVrU4Z5tyn0WQEYQ5JpAiEAu0TQmN8%2BOnZZQGzlEzoNMdT8E06OP5mz9912jGyQlLUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNJdYiHkZROmaauVSrcA8i%2BiyO29blO2NAg9S7vMNVYW50j8L%2BJm9sZwAw0aGozNteyknaN%2Bth%2BUWF3FXM5iLuvUXosPZrIxM31r7HpSrrNF7SX69UVOQ3hCNhE9QtEvG%2F0VXakBdn%2FvCi%2F2Wnq2on6obPnn8MM3dkRX2%2FyVPqHeWQ8HJ2mokxvHMHkfxFPh6yQBlhXhkh8SxBug38lY8vx1b2yefNo%2B0%2FHFuYbaTC2NTwfmrg0BGVgVys3h71t4Eto6nm6pp8Om1O041zeqONkI5qd7pquj2GR95xRMcwEArwdLDP3FZdkWR5qgmdUlmOeW2p8S6Gpg79VXXmEb5xQwG94%2BbHfeUc0wH6ZXpF2g84Ep28YVJEV7AvRe0R64CLbjG%2FS3HDseTZB%2FhEJnN6aKBUjjRDxv5%2BNV3YEyyj5RbdClpdovPFZZqiT82gh6aT3VNHpoFi9dg5i39ukXMDSf%2BmW4931pvEM1gMfmBubbfb4sUqudO7zpd2kPOiYrpheBqy4Q%2Bz4kFQcaN6FmSTi8EwCh0ngPaocaDjJ5KA05fNZ610Iqmj5SOVUnQ6%2B2nfEkFr0RyCGFekZQRmq7qDyuivxygC5D%2FDShMsZP63McfJ4a3ynxuan8tdjx662xzYnhPVXCb%2Fw6DQjMM3wuMEGOqUBscZjvYkRpGP3o0xuYYhkkw6W2KFN2I2qFCeZBIUiRmv4kkyRLwmyWuB8On%2ForfJAE5%2FuJR19vXJED6Ffw7w63ch5jee0aEfeKjGCbjoQKf404kWQ7XLrzpK1jvaWGF3GGJSfoz2ToIR%2Fs0fR4PoVEOq1K6Yj8w58kTtsYD4TRpCXK3YHlrQaFkPpNCvU4fFLAhTPfEcjMy1mn3VtyccPXoGN9%2F1D&X-Amz-Signature=9280d1ee8bb51e2b189125754ad11611c1b336367ac8315b30919c2c7392cc01&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KU25NFL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDNMH3S8NSyz4xNGhyHnZ4Ky3vrh78PV8SqPY8einl90AIhAN72xv9A9XffiP1phJfndWoeNStoI5orWfd%2F2K6z919CKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAa7xsP46XzRQlSuoq3AO%2BVzHoYxOCxQAFOz1A4Cqcb%2FqnaKbmDW6qRJm3hWPeZS9Nd93o%2BB4TwQqtiyVkEjB6VnZN6nf4AiiigJkFLHAB3Vs8WX6icROqME8ZLBeMikTWz%2FqKQsYcmmcGKQ3bu9%2FW24m6LrfopiJpeUG8kTD36H8v4BuoLD96RrSbGgVlSUpfGyWL8OqQCKXuSLSDiWzmLQqMdyNqGDQJJq7N6sHDsbAKqzJkV8U3JWF56wUI%2FgYepe%2BTjXkMXMYb7rgUBYLHuQUk43Mtt7sCaYrGevWZUVv4pK%2B3h%2BkgJGRurPxYXZSwa8tlf9%2B%2FDIcWwoPppfXJRCPsPgKPfmPTb%2BLa1KrGNGIYK1oaOZtK9R%2FvWNDDU%2By2WbNnL7NFTT2PLCB7pEQJXFCKAETaVmBTgn9DO4CXXNuZPgwqw6zyJoNV1YK07dN9%2FRhzfbr6pQUSKrn3U%2BhlAUeZF2b5I4bdCDmXBcdEyPKZcdF%2FhX%2FVVR5Z8s4aRLhb%2Buw0dc4%2BNn%2B25WXT1LZ5%2B4ucX4QAww12HFe6dpkqeQN4%2BRnFGTTFzJVJIO0Y8tC0BnfixalcobpS%2BY0jqRkvTT7AiVMa6NuM7SCEDiVXA98ed5uMjfj7u%2FkqodRz%2B%2FxXZYQw9QedYY4vZTCV77jBBjqkAa5Nj%2BjjGsyRtdZkhpG%2BCX8cJlafMim3b7aCkWqMj4C1%2FTOZQw%2BKmlQntRZiEIGA6gXseTyT%2BVMSUYNBVcQ%2FZqj0o66B7CQlpxF91dQFGwnM%2BWU8AIdGTc6MlFEhuMkpHVPDulbVVkPuw2UkeS6G2oV9crj63LQGstkWi2uKkwAslunYBqMKL27Galn7Pz40IwGUiCjYmHIT4PJ%2FrvBRWYa78hWV&X-Amz-Signature=8897e9512fd4749fcf9948d55f9a4973589d3e9c4611a9c34cb22109e43a780d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WDAY6RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDwjBCj8rE8tex91VcVJOjvObojriScvLY%2B9CWZQzCgkAIhALnuCBiDJzo9SaUjXhvv3OBj3hwOGfH5Bihbm1jCGEi%2BKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtPp1JSrS%2B5d1Xgkgq3APF9oIdYnjblCMCe%2FyoeBxeD4o51bWnGAwOA%2FTNLnNR1Vdt5l7InrI5pAy2Tkv3OP6%2BaEPDVoI%2BKfxTi4Fm%2F6HndpAXjY17FNqhP2TjZwGVeCnZmVSUox27cTzQZuIuidhI2YXv%2B9nAeq86SxRb4wrb3bwx%2FfyVyWrvMTdCx1lW93hlb1HwlqqKfiuETtKhOqv1wvpayPVJqkU1iA4OAOVj3BUFXiGavqk7cGalisVTo13CuRIxl99S7bgaPtl11qXkzozWR5PTTRRcHFWqWG9Wg06MzMkBnx8JZBBeDJzR2MxAXmrz0vUegXsZk0fLbXILWfvOhQwubexT%2F3%2FuFZXJ3KelWNKt7TsCGY0e4yrc%2BUrhmZH%2BMvT01Ayi6ljA1FALYsh7uhZeSMMBzwWn3U2OnS9BHcUDp3GtAMM98JZnf%2B9Vehwz6EwD1SNNmaLef052sfsTQhI3OMOwrTKuSvlxyn9TycULSgc7yYVF5DtOVhOsf71boYcS9uKyzkLJ4X6GYTKZIozm3pYgW4Vx1cddez6qzRvZ8NB6rDXuWjE415%2BNevXqgsEXwDZg67qs2TDTwfcqpqIwOPk%2FwQ%2BwcIe67z%2BJSVnX5hJiHLT7zQoHj0W%2BYyoGov6ckAgRTTDh77jBBjqkAaB52j18rTILyMLjDmIcUAL4NbLv4gk2U6KjLk24u7RY0fvy7I1Ck1G%2B0y3qFUN%2FiEIeIZd03vm93S7V5ScJqUPGaP9RrSZ0EQA1IY3fKE4sFIwme75hbAC%2BlaYZAskFrXfqNDo8CLS%2BsnijfAe%2BLegZG%2BNStkB1VIKlJWmcE%2FrJkFp7G3JBQ4f5XZdlzxqeRDxeHYqXK3SODh8ri3GmoMjtb83D&X-Amz-Signature=eb87e828eb07a606d22152bf4c4a430647084e7de84f3bcc7350388cce67ce27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSVE2OE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHsub37TFsBfGdne7jLHxxCHpYVrU4Z5tyn0WQEYQ5JpAiEAu0TQmN8%2BOnZZQGzlEzoNMdT8E06OP5mz9912jGyQlLUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNJdYiHkZROmaauVSrcA8i%2BiyO29blO2NAg9S7vMNVYW50j8L%2BJm9sZwAw0aGozNteyknaN%2Bth%2BUWF3FXM5iLuvUXosPZrIxM31r7HpSrrNF7SX69UVOQ3hCNhE9QtEvG%2F0VXakBdn%2FvCi%2F2Wnq2on6obPnn8MM3dkRX2%2FyVPqHeWQ8HJ2mokxvHMHkfxFPh6yQBlhXhkh8SxBug38lY8vx1b2yefNo%2B0%2FHFuYbaTC2NTwfmrg0BGVgVys3h71t4Eto6nm6pp8Om1O041zeqONkI5qd7pquj2GR95xRMcwEArwdLDP3FZdkWR5qgmdUlmOeW2p8S6Gpg79VXXmEb5xQwG94%2BbHfeUc0wH6ZXpF2g84Ep28YVJEV7AvRe0R64CLbjG%2FS3HDseTZB%2FhEJnN6aKBUjjRDxv5%2BNV3YEyyj5RbdClpdovPFZZqiT82gh6aT3VNHpoFi9dg5i39ukXMDSf%2BmW4931pvEM1gMfmBubbfb4sUqudO7zpd2kPOiYrpheBqy4Q%2Bz4kFQcaN6FmSTi8EwCh0ngPaocaDjJ5KA05fNZ610Iqmj5SOVUnQ6%2B2nfEkFr0RyCGFekZQRmq7qDyuivxygC5D%2FDShMsZP63McfJ4a3ynxuan8tdjx662xzYnhPVXCb%2Fw6DQjMM3wuMEGOqUBscZjvYkRpGP3o0xuYYhkkw6W2KFN2I2qFCeZBIUiRmv4kkyRLwmyWuB8On%2ForfJAE5%2FuJR19vXJED6Ffw7w63ch5jee0aEfeKjGCbjoQKf404kWQ7XLrzpK1jvaWGF3GGJSfoz2ToIR%2Fs0fR4PoVEOq1K6Yj8w58kTtsYD4TRpCXK3YHlrQaFkPpNCvU4fFLAhTPfEcjMy1mn3VtyccPXoGN9%2F1D&X-Amz-Signature=a4403e125e770195692ab77b8cfb71b2124ef0c33c9c28292a949cdf65639e05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
