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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJOTFFQA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFSPBYTEb%2BkHBvvdRT5fQiI4sI%2FXuBBqvM2qDMEBdx9AAiBYJEzRpcaQizUPL6SpYZby83BumbSDplts3y9YlDO1UyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Urzb1zqPSOggjJJKtwDilvJkprSW8RidUxs9fXsqursu44UPQTp4ulWWl8UscS%2F%2F3otXRQ0zLnqe7RSHQYZMcyxwhqzhAohfWXybDEBCuEd9IKn%2FkXc3ZkYeQJ%2FOmbCK8oWw2gvpnxsEb9rkm7UfiEybIQq70EXZq8N1CRtH4oJOqi0IekPDq1xiX3YpJPJ7LwtqN8Fc84uXgfqUJC9aOnadSS%2BJ5aDoEoOKj8n63Di%2FkoRVvrElhIMGrFikVQEQqRJMv4HF%2F7tbyVklugMnwLlFKO2rdDNSOXKkg77faa9ZizR4Yl7k8nTae%2FdN1aFSRWE4V5uEfxdEQr6kznMNP3y%2F98we9uWl%2B2TIYJbqhxsx6Hwxm30iCnAUNqzYmJMhD1XhL7TS0A%2BuB0MF2L9J3F1lsac8IzvtEmRuVwTAtEhI7UL3cjyIlF4NbL3WqFPSBJaP5lnOteQOe8Hai4HvQPwSSVfbMgZfu2%2Fg5LxVeWbkAlYkfJ%2BWpS3%2BtQ1R%2F2hHL%2FcD%2B0%2Bgq6iNwByu6sQorrHuG%2Fli1WHZqBxA%2Bn%2B7kKKFN0Ur16wZYmM3yaQzBsHSgc%2B%2FJx6zroBT7Fha%2FyTXx0%2FPjrOc4gw31taXfi3PCBQk6scOSlvcbf%2FSF4sgM5GSwXgXoU1NJSfwOQwpvu0vwY6pgFS1rIfQa41lbmX%2B2MWFuzNhWTsm7Jnm8DLKVEHIfCiTqjlxrozgbMXBGS9xp4S2hLAV73H2DaoU0jyvGPZud1i8Pcl4MMY1yBjScumXAqvuvHp9Od1Jt7oaxnM9vRDcRro%2FxRDq8cuFg7wrJrjVqLJ%2F4D7GoP5F9AbhLR9C85Hl37JIIp2HS7LORilKEQrusXJ%2Bacg%2B%2BdgPFHpL%2BlKwvStGeW98OR7&X-Amz-Signature=8a453ec550d065cb8a1c4c1c692e3205536c0122c1ab0d34dcff06714c7426c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJOTFFQA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFSPBYTEb%2BkHBvvdRT5fQiI4sI%2FXuBBqvM2qDMEBdx9AAiBYJEzRpcaQizUPL6SpYZby83BumbSDplts3y9YlDO1UyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Urzb1zqPSOggjJJKtwDilvJkprSW8RidUxs9fXsqursu44UPQTp4ulWWl8UscS%2F%2F3otXRQ0zLnqe7RSHQYZMcyxwhqzhAohfWXybDEBCuEd9IKn%2FkXc3ZkYeQJ%2FOmbCK8oWw2gvpnxsEb9rkm7UfiEybIQq70EXZq8N1CRtH4oJOqi0IekPDq1xiX3YpJPJ7LwtqN8Fc84uXgfqUJC9aOnadSS%2BJ5aDoEoOKj8n63Di%2FkoRVvrElhIMGrFikVQEQqRJMv4HF%2F7tbyVklugMnwLlFKO2rdDNSOXKkg77faa9ZizR4Yl7k8nTae%2FdN1aFSRWE4V5uEfxdEQr6kznMNP3y%2F98we9uWl%2B2TIYJbqhxsx6Hwxm30iCnAUNqzYmJMhD1XhL7TS0A%2BuB0MF2L9J3F1lsac8IzvtEmRuVwTAtEhI7UL3cjyIlF4NbL3WqFPSBJaP5lnOteQOe8Hai4HvQPwSSVfbMgZfu2%2Fg5LxVeWbkAlYkfJ%2BWpS3%2BtQ1R%2F2hHL%2FcD%2B0%2Bgq6iNwByu6sQorrHuG%2Fli1WHZqBxA%2Bn%2B7kKKFN0Ur16wZYmM3yaQzBsHSgc%2B%2FJx6zroBT7Fha%2FyTXx0%2FPjrOc4gw31taXfi3PCBQk6scOSlvcbf%2FSF4sgM5GSwXgXoU1NJSfwOQwpvu0vwY6pgFS1rIfQa41lbmX%2B2MWFuzNhWTsm7Jnm8DLKVEHIfCiTqjlxrozgbMXBGS9xp4S2hLAV73H2DaoU0jyvGPZud1i8Pcl4MMY1yBjScumXAqvuvHp9Od1Jt7oaxnM9vRDcRro%2FxRDq8cuFg7wrJrjVqLJ%2F4D7GoP5F9AbhLR9C85Hl37JIIp2HS7LORilKEQrusXJ%2Bacg%2B%2BdgPFHpL%2BlKwvStGeW98OR7&X-Amz-Signature=0d7d86bf4ed7af6fe3c0281bfa2292f453ae27a5399636ad8f48f33cf0cb47d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONMQL3P%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCtyTqBJRw5oFVPSZD6UYE5hvF%2BIrX%2F8rjzPSCJaXahtgIhAMwZHHPdhwR5Ft4UB0Ku%2BdtpnJUo6YmYyPmWfPv63kWIKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkCa0T4CMoee%2BIBRYq3APvAxKa3YM2z1oUHAEp5c49HZXGNP6BXJu6C5VLZ5%2B%2FfvVYypyFBShNtDV3AgiXwwpfLL9spzdoEHidt2LOeQSak4xGMrMkJeX5Ihh13SLtYJkKsGMgN%2BDnoUCi8GhjCKQPKbA3kenqh2pIs0mr%2Bp74%2BLwsu7tOnTyyUlzPIXI%2Fk5dfr%2Fw1N1hD%2B33490gFmexDDVaPw791pig%2BtcGPlYKFfrr%2BCB3vJXCswEKCRyDPvrg7ppH7un3ABLD8ylmpRKNChZE%2FLCcJsuMtK2alkuYtAeJ44x%2BzQnERwb%2FnWnAVNMHSMVnI3AIIMViP67o%2Bs6TwJp7TNkOKTxUcEmpiarRuYS5lyRAVdi%2BuOm4%2B0LROpqecVGe3ANh%2F6t1BP%2Bdn2EtpEJsLMenyWSZ7L9Csu2NnJDrQkG1EXh%2FrZsxNgNtoSe8EJa2sw4LJLKl8yfQSuuXTemsHJAr2S%2BqXz5YnWGedIgbIEggfX2fPj83kSWzcZXQuqy2qYLbWmlJx0XZ%2FohZaeA7tpMMQglOKZZBdWSFZDO1S19d3Ik9fHuxzhYwCfxJ6b3Scv48vFZxxjUFDONBrGcGovlaoB%2BuqlcaZQPxRgQbzOB%2FTKF1DZdsoViK18q4L485qEhmTXL5TqzD1%2BrS%2FBjqkAY37HW%2FvhE9tV4niQ6dRn8k8fQWxLsnZU2wZR0BeoI3xsPB3DkgZpX8Ku%2FSg9U3exyyaJMZryKiaX7IrZJvdhHTJmdJXXtOcm0%2F3p4fAIOcCsw0N9nAQHXsDmsx0sGTIc035VtaNsmLrpteeEQJYtTulYW8PrhohxDWPjoUY3fIsLvg7gmdhbpkGqPTWKESRMuUsm8JIuTNlR%2BOPOLHkI1R86Mn6&X-Amz-Signature=8a197087de7a106515111398c1b5de58c19451b43c2a9311e292d0eb1dc6db40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BWPC5L%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2Bq4w6H%2BxNSknTQPEnOWTIh5iQ7Sw7b8APmhLRD8jzogIhAJdzTgX%2B2MSZ%2BN8LLHl2%2F1MVz%2Fu%2BYlFgGooLE50BsgzmKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgpzW%2F6A5YW5132Woq3ANdAT5GrErYCMv5D4vnIxDJD%2Bh3W0dyU5vTV%2FEeBpuST4LUGzmVSAkPOL3roru5D5PhGc4YKwk39dG7VhxJaElW6RnioAo94P9d9C9CkuSdMsIlNj32XY%2FhjgWbBwyA2Rl12IBljKmJBFuvZ0o3ZFE2l11RkvL9f56Tp1zsgWvh8UxPzgQnLCV%2Bb0DDwoasAdtXJo%2F0vlgG2jQJ3YQr%2BhJe0YIjtM9yIj3Zw326zuvEWXKcfFTzDjDLwKYs%2B0AHi9YH5QdyJW42EkbBj0opqBDELxqm2xbquobnGx6zCT7qTk2Jqq08UyqTrSKsaaiHXDEUUsuCxU4Ah1NxBTH%2BVSFWY1rkHysevzMuBy6pGOXUmkw9lj1CBa2TzDZxNH6VH8akDrPPStoXGiLM%2FK3sI66KNlgmRTPwDPboQ7o%2BFEj0qS7j3Do6%2BdXLdGBnuL8OWt0lbMCgipjTINGZzHqTXXSpONn7FPYX0NQTVFUbHQJ3LavlLM7twVdFpYTJ1AV7vM%2BW%2BMg7IpjWREHJN7Pf40dhqGhsJCmbgKRyk%2FRIjx4RmSAIuHMrKqCsgZgk9TXcpGq4eOZdjst%2FLra4q8EqBNYc1jFVFT%2BvFxDgMzp9VoOZy47n6JYRhivCY7u0YTC%2F%2BrS%2FBjqkAb9pfq%2BdBqYRoEpq8kldxdEQ8csT75E8AXnckt1LY5MVDiTJxeqqulZ6wDXhXpozM7P502eRcaZukZo%2BMyZZ4CJR%2BzwAtaxosCcItegIoYxSYpg4fJC3YCClmd8ChwFLy5KWh73LVjEPfWMA5hqb9iMCjQmPn7EVn2uKwaWsvHTMkUWfUpbB5LyG8sUJad7Vp8KdjurYmvZNDR8T5VVnfAZslGmw&X-Amz-Signature=4f001e26f5c593250ff006281a7e0d5a5378e4afff456308027d4ad40fcc9de6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJOTFFQA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFSPBYTEb%2BkHBvvdRT5fQiI4sI%2FXuBBqvM2qDMEBdx9AAiBYJEzRpcaQizUPL6SpYZby83BumbSDplts3y9YlDO1UyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Urzb1zqPSOggjJJKtwDilvJkprSW8RidUxs9fXsqursu44UPQTp4ulWWl8UscS%2F%2F3otXRQ0zLnqe7RSHQYZMcyxwhqzhAohfWXybDEBCuEd9IKn%2FkXc3ZkYeQJ%2FOmbCK8oWw2gvpnxsEb9rkm7UfiEybIQq70EXZq8N1CRtH4oJOqi0IekPDq1xiX3YpJPJ7LwtqN8Fc84uXgfqUJC9aOnadSS%2BJ5aDoEoOKj8n63Di%2FkoRVvrElhIMGrFikVQEQqRJMv4HF%2F7tbyVklugMnwLlFKO2rdDNSOXKkg77faa9ZizR4Yl7k8nTae%2FdN1aFSRWE4V5uEfxdEQr6kznMNP3y%2F98we9uWl%2B2TIYJbqhxsx6Hwxm30iCnAUNqzYmJMhD1XhL7TS0A%2BuB0MF2L9J3F1lsac8IzvtEmRuVwTAtEhI7UL3cjyIlF4NbL3WqFPSBJaP5lnOteQOe8Hai4HvQPwSSVfbMgZfu2%2Fg5LxVeWbkAlYkfJ%2BWpS3%2BtQ1R%2F2hHL%2FcD%2B0%2Bgq6iNwByu6sQorrHuG%2Fli1WHZqBxA%2Bn%2B7kKKFN0Ur16wZYmM3yaQzBsHSgc%2B%2FJx6zroBT7Fha%2FyTXx0%2FPjrOc4gw31taXfi3PCBQk6scOSlvcbf%2FSF4sgM5GSwXgXoU1NJSfwOQwpvu0vwY6pgFS1rIfQa41lbmX%2B2MWFuzNhWTsm7Jnm8DLKVEHIfCiTqjlxrozgbMXBGS9xp4S2hLAV73H2DaoU0jyvGPZud1i8Pcl4MMY1yBjScumXAqvuvHp9Od1Jt7oaxnM9vRDcRro%2FxRDq8cuFg7wrJrjVqLJ%2F4D7GoP5F9AbhLR9C85Hl37JIIp2HS7LORilKEQrusXJ%2Bacg%2B%2BdgPFHpL%2BlKwvStGeW98OR7&X-Amz-Signature=12fcd2911083e1ddde613103e3566ba534c91099c47a442e5ca9fa5d99779743&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
