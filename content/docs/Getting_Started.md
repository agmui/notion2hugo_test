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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622X4A4IA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2MhMIzh3Dmar%2FdYIVMeamMt23sKCMJOE%2F3k9Y4N0%2FQIhANz0JiYLqa2w7G4qhtr%2BSPbC5zGHKkooaLGvITyeXVj4Kv8DCB0QABoMNjM3NDIzMTgzODA1IgyX%2B1vXPEETDHJe%2FeAq3ANjXSTjY52AkSJpvqv33uXAG%2Bu9iTeOptL4MCRACZIVXaZxEKrme6XbzpFHEa3nqE%2Fk56d%2FfYKGYiQh4tCMTHDUdj8SvlI%2FX%2BxEELKzwGaZB9RKw6IBiJSTBPO2S%2FuqqY%2Fr40n7X0bOq1w6r3jSnFYNxhScjeuVR4ojpkayFJn5w4Am%2FE2dnpwW1yllCmZ0mKmuffCO%2F3mdeBIUvoG1ppxYmIr81L2CpfZ2gUK4z6Hc%2BGVk4lIfLib7ofpsd5OpjtNYUYwdES8bc0lJvzpsQ8owpYbodnMgHzbM2U2wH4mQpQpMPWulMyZsZc556hPaC62dcwbIK7K6Ku5BsVJmENn6k3S6keKaIMyqlaDFJcz5WPhvsopr3jykV7ITqzSH7GwR7Vn8eHXANQmtkgeM3THlJpaLK4%2BJ1TnUh8Xlgs%2FWDewfHw4YW0ZFGZtpiVvt0c03wUthwmtviNHfPL6KOX3aD3EWPIA32LW0V0uke74yV1Cuco78NXVvUHKO7kFl6ANHXDj%2F0Rcv9rjOP%2B%2BQQUV67N%2FVg53anKKZAHOUo8ubkkvnWdfMk%2Fgz9rEzf6X5KyJLQCeagvkFeyMARQd7wjTqcz7I1HeDoz4cnAiOe0IgFcBzZiPEtWt5D1NYmTCpmIy%2FBjqkATRidfuxye9jF5Q%2Fz53bhED7izAxAxUn2f5AysVxpPM%2FInE7bUw2kdYjUBytnf%2BNgT9HY6M6Y6VDYYbrD%2BzWFdaSoC0LJCe9MM75BL%2FkGFIW5rBbbaURwZUJCEKuGYUadVjDba28HRx6ODfHUvb7T%2FZtxht1bTliDmYKSQMD3883IqTsxao0PpxGEaA0XfFBzQfg4pgN40l0Z9%2F5or118%2F5YHEI2&X-Amz-Signature=51a40f76ffaf5b38ebe36a65aeadbd229e34e8de2ddb50ccb260e95ed19b983c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622X4A4IA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2MhMIzh3Dmar%2FdYIVMeamMt23sKCMJOE%2F3k9Y4N0%2FQIhANz0JiYLqa2w7G4qhtr%2BSPbC5zGHKkooaLGvITyeXVj4Kv8DCB0QABoMNjM3NDIzMTgzODA1IgyX%2B1vXPEETDHJe%2FeAq3ANjXSTjY52AkSJpvqv33uXAG%2Bu9iTeOptL4MCRACZIVXaZxEKrme6XbzpFHEa3nqE%2Fk56d%2FfYKGYiQh4tCMTHDUdj8SvlI%2FX%2BxEELKzwGaZB9RKw6IBiJSTBPO2S%2FuqqY%2Fr40n7X0bOq1w6r3jSnFYNxhScjeuVR4ojpkayFJn5w4Am%2FE2dnpwW1yllCmZ0mKmuffCO%2F3mdeBIUvoG1ppxYmIr81L2CpfZ2gUK4z6Hc%2BGVk4lIfLib7ofpsd5OpjtNYUYwdES8bc0lJvzpsQ8owpYbodnMgHzbM2U2wH4mQpQpMPWulMyZsZc556hPaC62dcwbIK7K6Ku5BsVJmENn6k3S6keKaIMyqlaDFJcz5WPhvsopr3jykV7ITqzSH7GwR7Vn8eHXANQmtkgeM3THlJpaLK4%2BJ1TnUh8Xlgs%2FWDewfHw4YW0ZFGZtpiVvt0c03wUthwmtviNHfPL6KOX3aD3EWPIA32LW0V0uke74yV1Cuco78NXVvUHKO7kFl6ANHXDj%2F0Rcv9rjOP%2B%2BQQUV67N%2FVg53anKKZAHOUo8ubkkvnWdfMk%2Fgz9rEzf6X5KyJLQCeagvkFeyMARQd7wjTqcz7I1HeDoz4cnAiOe0IgFcBzZiPEtWt5D1NYmTCpmIy%2FBjqkATRidfuxye9jF5Q%2Fz53bhED7izAxAxUn2f5AysVxpPM%2FInE7bUw2kdYjUBytnf%2BNgT9HY6M6Y6VDYYbrD%2BzWFdaSoC0LJCe9MM75BL%2FkGFIW5rBbbaURwZUJCEKuGYUadVjDba28HRx6ODfHUvb7T%2FZtxht1bTliDmYKSQMD3883IqTsxao0PpxGEaA0XfFBzQfg4pgN40l0Z9%2F5or118%2F5YHEI2&X-Amz-Signature=f2d616fb35362dc91287500465fa38d2e1df353ee4e0844f424e11e9909720c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSM7ZN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BUZ5XGO7cpD3bM0lvZeXBvq%2BarK8Gtm4GO8ZYcuhpRAiAL2HZnThkHQ7II5GyCKzBTjIiTLQvLFl%2BK4E%2F%2BkIDo%2Byr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMl5K2a1iLMJpyoMzMKtwD6Xx7T%2BtUrfJVpbIav3qtzaE%2FwKcBdUL3Cv4%2Fz43ECF%2FrLh4QP%2BMBthODEDJlVdEcuqf6ydBmpFmTkdn2uB36FGX17caL5DSCNsXT8CBOr63bcL5lfDA9YbOb8vWy7LbA3YA8Hr3MMVDZ%2B3BpBELxfw5daI3pk4gdZ72sBWePGfDSKeJ09AMA7SNsVdm8YJQ9QG1w7lyil%2BnQkWhVmNnG3GxNiVVL6mKVv88Cb%2B%2Fs1xBaiJZ2%2BI85Wv4N3sG09IidO%2BHBJoFxobcOPDzowUzTz3NG9DHualkbm5RZkkaGp%2ByECtzPCv%2BN0PFkK43tALHtoitsbdB6Z8zVvBw%2B8WXWXtuL8%2FcV%2Fi3m7SNgSIZTLovSfcnaqoTZoCTu30R9uGac9Ys8ZXQSpM0Q3WFXRTor0ha%2FMBZUlj1mbX4wZ%2B%2FtnNFNagqiIjqI79qVlNgkqd%2Btl9J5HP4SbQB9b4aa2RGbAHOLhbX8z2MyJlgMRMtSOTcY3y%2F0R%2FTP3W4CEAW8DD4q%2BdwgGo5vknrgax7G1ldOgasfTx5U46LLmgk9j2nssZRgYQV0MCnjMRUsmX1SnxwvD3hTF0rP3EThvv4g6fLt6PTmqSC70iaUnLNizCam8LRbxPdv5vjjsbgCg1gw9JeMvwY6pgFJqRk%2BGKh5PS0N7Fjve%2BLtrJdiFvXHkFTY3XCoSsVWfHGsfpZYdwZFOh68H%2Bm8DaxEM%2F%2BtR6JSBe1q07KklxrYrY8EoOh9unNuaZ7CWUwVU5zpnw2N%2FH2FT6qoYaLzIqgA6caPM3VCdERVxhNKB%2BQfkEp8YTLm2cLjNMN%2FVfQLS2H38zTDCw38GzQ80r8pwJsDJdO%2Fx5V0WtJeMfMHzdxXHeW7qk1z&X-Amz-Signature=4930f034601f3cfc17493fae26f400321683109051a0557a72d980ca9a84e559&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3TS44S%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7mwVE29uDsAmC798MP%2B9oZ4asMgmJtEVkKyS64JC5dgIgISeeFte7fPyH5KWo5HbzUyyueImVAzlsHpw2FPvThIgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDxYEgQBD8d2LtR9TSrcA8zDtOu%2B6N5fsnrrsZVwaz8cr3pVuysq%2BmixJ7rh0%2F%2BAmdstLB4b7fy%2FqPik7qk0iS%2Bz4AQYB7zDFU57OxOdIRTqB17Ig49sQlIHMr8c2r%2FvdmeQFV1qOH0sSIZo25q2fqyMAwKD3xzC5wc%2FOy6%2Bubh6a%2BtwdrnzfmBjvDD9Ql4qaxfWjzqnwrWD%2BIB%2FHUi8kuk5O2cfym6Rq3RFhxuQRuQSigECaPbGrO5olkQJdkYe%2F6uuyTCIigXjwZECDuUOc6eQIkPJbe%2FdAjtNb2fwR2xODnFz21DmxAIAl4FVOjxlovIVxY0m3823nFGvqV5oun5rXY%2FSi4DEzGttv7c55En2mBtZLwdDHUa0e1uF7tOs16%2FYSHGkDeNPBxxuq3kizMe%2FHehOmQ4HvcRf5%2FC6jJgmqQAmlHNBPo2XXK9cMjfelz5390T%2F5KRFVcJyBSDODRW%2BKklW%2FYYSqYhEDJ8rdzBt4xELzgusZ70N8%2FUOXshffAbtAQto9R%2Bcn5X0YG8YVQ%2Fqex7k2LWYLOYVK0IrD0JUr%2BJxwe7J%2BXejBQ7tLs8MYxVqEGHw0SUxHBsvvTFpGvN7grZLT81uVVKj6DjekPqczZ00KuYlnZducx5AWrPhxuTTzc5YmEq5tIaGMLKYjL8GOqUBxyWxcsk1BNkpWSj9L%2B%2FYdT%2FuoVqtweD9bMkrf8iIjtwnzSkibq%2FSFlJ%2F%2BhxJ2uVfGfFdJE4%2FhzDZ0XbdLCjMpE9LqI2Gmd1ILhajQnKhwV3nQQF5IAK4j80HSF7QO%2F9n9%2Fib3z7%2B7yJ5Fo3b01ns5GTMMNaAXRNXs6VC41KqLTzEPVNNOKKafUQiRF5pzHEQTJ221jrU%2FDo3Kpu4h5YtTSwxaElE&X-Amz-Signature=01ad319ce6497964ee60ead8c461842455be26fefb6443c3e3df3693ffeae157&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622X4A4IA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2MhMIzh3Dmar%2FdYIVMeamMt23sKCMJOE%2F3k9Y4N0%2FQIhANz0JiYLqa2w7G4qhtr%2BSPbC5zGHKkooaLGvITyeXVj4Kv8DCB0QABoMNjM3NDIzMTgzODA1IgyX%2B1vXPEETDHJe%2FeAq3ANjXSTjY52AkSJpvqv33uXAG%2Bu9iTeOptL4MCRACZIVXaZxEKrme6XbzpFHEa3nqE%2Fk56d%2FfYKGYiQh4tCMTHDUdj8SvlI%2FX%2BxEELKzwGaZB9RKw6IBiJSTBPO2S%2FuqqY%2Fr40n7X0bOq1w6r3jSnFYNxhScjeuVR4ojpkayFJn5w4Am%2FE2dnpwW1yllCmZ0mKmuffCO%2F3mdeBIUvoG1ppxYmIr81L2CpfZ2gUK4z6Hc%2BGVk4lIfLib7ofpsd5OpjtNYUYwdES8bc0lJvzpsQ8owpYbodnMgHzbM2U2wH4mQpQpMPWulMyZsZc556hPaC62dcwbIK7K6Ku5BsVJmENn6k3S6keKaIMyqlaDFJcz5WPhvsopr3jykV7ITqzSH7GwR7Vn8eHXANQmtkgeM3THlJpaLK4%2BJ1TnUh8Xlgs%2FWDewfHw4YW0ZFGZtpiVvt0c03wUthwmtviNHfPL6KOX3aD3EWPIA32LW0V0uke74yV1Cuco78NXVvUHKO7kFl6ANHXDj%2F0Rcv9rjOP%2B%2BQQUV67N%2FVg53anKKZAHOUo8ubkkvnWdfMk%2Fgz9rEzf6X5KyJLQCeagvkFeyMARQd7wjTqcz7I1HeDoz4cnAiOe0IgFcBzZiPEtWt5D1NYmTCpmIy%2FBjqkATRidfuxye9jF5Q%2Fz53bhED7izAxAxUn2f5AysVxpPM%2FInE7bUw2kdYjUBytnf%2BNgT9HY6M6Y6VDYYbrD%2BzWFdaSoC0LJCe9MM75BL%2FkGFIW5rBbbaURwZUJCEKuGYUadVjDba28HRx6ODfHUvb7T%2FZtxht1bTliDmYKSQMD3883IqTsxao0PpxGEaA0XfFBzQfg4pgN40l0Z9%2F5or118%2F5YHEI2&X-Amz-Signature=d1b5049e1a5caac25afe50e43019404960dac6bbfd8deee74c3b3f35e25f63d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
