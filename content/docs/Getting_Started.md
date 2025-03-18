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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VXZQ5P%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8mW1iP0QX%2Fwqu8kZStO%2Bep5g6HAbPC120dO%2BldermGAiBTUtaWRB%2F4%2BYVb8n%2B6jXf1UrXxSwtwtA17sWOSv55k4yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMNG%2F7X5IlGRG7zx8FKtwDgbtXoBgrNs7Pw6UrBhrJCbabG9LFZBG03jpb6qzoZzQ5f538lHZtw4S65ahUXQOPbrqmnHFjYNhkOau4G0qcZQzHnyVdmXAcS0%2BvsiMGZkCDcVRQ1NI7XoPS87ZX1wwQsk4r2TPPmeU0FkXisSKuJ6lgQ4vgtLd4z3Lly%2FWm%2Bp957JHOhnyAimiEaipnHzcxBrjX6CmDw4ROuDreUbsPaWbrbdDOyMleapCcTPptivCiJ%2BUHbwxYLJfGslpAFqP0j2Iv31i5mqwxjXRTupS9X0ut%2BmI8Q4AA32BEAqXfw5LPBBxLfXNN1qVd6yrMnMaJiAIk4hq8dAEj0wNhEoHnpCY%2BIcDDRbVTvZu3VIK9NKyRg9ba6wbDJWuQHxzZQZDTjke%2B6u9ze0IzNJv1cMVcA%2BUbHgJAW97MP9Jo0wxu5tH%2Bu6rKxLHCvkvv8s0JMXn1Jz1SuTk6LLZQ8R7HruwPm4KcDKG5Xv2JxbNmZN9Od5b8r3K2HyBuGhpBhX4riT8K%2BPV3tzJDcxA%2B%2BSuDLFSRvI5P8eZWR50k1lSASNvCf%2FL6MPsZiLvMLb4pvmIDDWzAGyJO5yFMoMA3U%2FYniErAztIXIWqp15yLykr3oSOhAEjEiv1Lily9n7R5rgowuOzivgY6pgG9PnQrtBhchBYKhOSsVBfGFtJ3Mn1g8QvmlWDU0xJOvGGmTtMe1nnDroDiEbFX9I2mUKNxBvasa7ug6ngRWm5rR8aqbl6a2D7cVgqUe%2BSm6xdS3jkjqoxhvH1FDeXDLlLB3tmB44rLBDCeNTM5asMS15SKLU3%2BussRRDu%2FWD4ttSyg6Iv3rhqj9elLB4XiV%2B%2Bm1ROo0N8fI%2FzPsSW%2Fwycp8i4ZkS7%2F&X-Amz-Signature=871dcd48aa8ae787053cbfd6d7d415db5c966a342e6adc73bd1cef94d4279b77&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VXZQ5P%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8mW1iP0QX%2Fwqu8kZStO%2Bep5g6HAbPC120dO%2BldermGAiBTUtaWRB%2F4%2BYVb8n%2B6jXf1UrXxSwtwtA17sWOSv55k4yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMNG%2F7X5IlGRG7zx8FKtwDgbtXoBgrNs7Pw6UrBhrJCbabG9LFZBG03jpb6qzoZzQ5f538lHZtw4S65ahUXQOPbrqmnHFjYNhkOau4G0qcZQzHnyVdmXAcS0%2BvsiMGZkCDcVRQ1NI7XoPS87ZX1wwQsk4r2TPPmeU0FkXisSKuJ6lgQ4vgtLd4z3Lly%2FWm%2Bp957JHOhnyAimiEaipnHzcxBrjX6CmDw4ROuDreUbsPaWbrbdDOyMleapCcTPptivCiJ%2BUHbwxYLJfGslpAFqP0j2Iv31i5mqwxjXRTupS9X0ut%2BmI8Q4AA32BEAqXfw5LPBBxLfXNN1qVd6yrMnMaJiAIk4hq8dAEj0wNhEoHnpCY%2BIcDDRbVTvZu3VIK9NKyRg9ba6wbDJWuQHxzZQZDTjke%2B6u9ze0IzNJv1cMVcA%2BUbHgJAW97MP9Jo0wxu5tH%2Bu6rKxLHCvkvv8s0JMXn1Jz1SuTk6LLZQ8R7HruwPm4KcDKG5Xv2JxbNmZN9Od5b8r3K2HyBuGhpBhX4riT8K%2BPV3tzJDcxA%2B%2BSuDLFSRvI5P8eZWR50k1lSASNvCf%2FL6MPsZiLvMLb4pvmIDDWzAGyJO5yFMoMA3U%2FYniErAztIXIWqp15yLykr3oSOhAEjEiv1Lily9n7R5rgowuOzivgY6pgG9PnQrtBhchBYKhOSsVBfGFtJ3Mn1g8QvmlWDU0xJOvGGmTtMe1nnDroDiEbFX9I2mUKNxBvasa7ug6ngRWm5rR8aqbl6a2D7cVgqUe%2BSm6xdS3jkjqoxhvH1FDeXDLlLB3tmB44rLBDCeNTM5asMS15SKLU3%2BussRRDu%2FWD4ttSyg6Iv3rhqj9elLB4XiV%2B%2Bm1ROo0N8fI%2FzPsSW%2Fwycp8i4ZkS7%2F&X-Amz-Signature=bb32099678ba7906a9ed5ba832baacab50239cbb5cc16a65875903d5667e3f64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEN6RVDB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHPneuz17%2FmJ9GQeNBEAqvb4cQJKC9QUskmZMvI91E3gIgMudHzxKqYQKSmpXqfcDOkXj2LWKtODgTKvkJiriqMd0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCAr7KB7CbrbxApBzCrcA6MmZI3Zr%2FSLOzLSL5ei12483oreMqZxZhV5QQHFMNtGv23uGcjA4Ppa1Y%2BEY5iyHEiTxSHrt%2FfTPRWeDwdgz9Rd%2FG%2BYM74At02HEf4wurndejvWkL5d7zQ3DgNZMpY47wYGjU1HsQoc34y69tFyqU0Ufd1QTSdxTNlpbn6kWp4sk2V5j4Kcqugcde4DxSJZ6WEMQQpNszHZNQTqe1Zi%2BYFHG3nDFpWUpVnZxrfAvJJNvVmK8KF%2Fx%2F8hVngGJEKFxvl7nqSyio1hloMUOb9I8zeHVtgqQ2dVrxDx6dZQG%2Bhtx8V0%2FW3xVcBE%2BrldMef3zrBDfw00VVclyt%2B9YWEoNztvvZ2GrjQHlj5KHQ4OL%2BUO%2F1a5IeIHz5l8iTa4jQnbwAOCg%2BxWdLgBf8o3IpuWORJK1QMM%2Fbiv1c4kuw8nkpxled%2FPr0bNX9aCWjNHTtbxUT%2B9kCTr%2Fd30Nad%2Bt4I4bSIaoEIXiwnJkV3LjbrhSZ1gk9sEth5TPLCE2RLzOz%2FqwP3mc4novHWVw7WjUDMZpMtGKYCtjQa27TNzqRI8tP%2B0EqHBO8ejyc2eGFyW%2BIVkjJ2iptw8ct5rEtvJVddemuBE47obzYlF9nSfcAQHnZMAWQZgJF7NGA7GiF2qMMzs4r4GOqUBoAZkQjIuscZzkISrYeZic6WEEPwP1iAizlIZ4TGRl7hXxDjMv4VWHo%2B76nYH6FX3gMZrNGGcWhxnL3tcz8qS6tU6MhoVIQYpuVJ9BGF3GmcVz0TZPx0ha6GFbucsEvhOBs23UC2MbiF2WjlyHN168DuTCGUtr6YAuw4XKz2Tk2bFPhDfDmdniFV%2Bx%2FDGXO01Wyr%2FUr41iXitYh%2Fv1t%2BFNg9oJhu4&X-Amz-Signature=3cb5a91a2d47b336213dc94f6db466d6d20471eeb67483b611f62692c8237c60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ2FRSPE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzimnGjCddnubJ%2BnOYLbxNHMAkUbQ%2BQeH0FOZDFc0XNwIgH0KttJqxONCjF5PLLj2hbP6ApiRaBfSkX2V6rhsZsG0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMwzDcthHWgLK1XCGircA1hjA5ub539tycUOWm5Ui75BJ3XMfxyhYpTHiQyzDQei5XvMolOQuSHDxzUxPjjXrIRDLzgy6JMEpPmkUdpCBU3SplAgWE0dBiul8s7NcBFA50zaKb1aorTT%2FS1r6zCLcoTdtIdUu3pxoTrUdqsaVEcpBGufRGWNxv8xuD8eLKcCA5gdqq9chJgk7Yofv%2FvunPSdP%2BUqQ3bjrWoTb4Yl6FWvBThFVuBaBurTGoUCBKFHfjPyghmjf1QhgCvbOxfTKBmLt66gigHAsWR44khZwz3kff%2FMNuIKD7jCjvirEouACnBa2DH0AkH9XeKjL5%2FXlP%2BtkVuqLM8y9%2FBlwLSxA3nF%2FyGL7VFzbx6BqbOdld%2BZQ2%2BeEQUrzkUKT24%2FaZIJsW%2FnCR%2Bcm2JkoSoShhNCGRH90elHKCdrFdkemXvZKKWTzBTGfLNIZbVyaVcoFS6U2uBRusDhFn81lX7mwdN%2Ff%2Bk9nOy2Gvpxq%2BCbIHZVFLkGqIntXYDctecRDC7sQeMAUxqjdIqPlFbArJsyWlN2k3q9lc1oYnRQHFWYkcPv8Bbms50l4TofqljC2480PHqogDy0hL%2FP3oxtRTXKLcvOB9TuamvhSrgCol%2BXVAhb1RvpJ7FkM9%2BJqMYh%2BGYFMMHt4r4GOqUBqm7bXCY34aaoi%2BIPJR%2B%2FG33RaWqd6C7E3fOEfZiuo3BVgm%2BdTftacjHEt9KRnFsaUlspEX%2BE%2F8orNy1%2BIJst%2BL1Pr3Bi%2FE2ADQ8oV%2B6AlPvvG%2F4D6mWcnp5QrcquhYKJhjYufRr%2BCF4E7a43bGbnJ22Mbrpv6L0uqR0LiGeb4aR%2FfKa5rU5cdzWRWLPnt1fzxGdIWrc1UI4Rv4VzXBtc6ZuUckMo&X-Amz-Signature=5d20459b5189fd4fe8313ed2ebab6d00b7494adab8c9c0351843499fd4dd9fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VXZQ5P%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8mW1iP0QX%2Fwqu8kZStO%2Bep5g6HAbPC120dO%2BldermGAiBTUtaWRB%2F4%2BYVb8n%2B6jXf1UrXxSwtwtA17sWOSv55k4yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMNG%2F7X5IlGRG7zx8FKtwDgbtXoBgrNs7Pw6UrBhrJCbabG9LFZBG03jpb6qzoZzQ5f538lHZtw4S65ahUXQOPbrqmnHFjYNhkOau4G0qcZQzHnyVdmXAcS0%2BvsiMGZkCDcVRQ1NI7XoPS87ZX1wwQsk4r2TPPmeU0FkXisSKuJ6lgQ4vgtLd4z3Lly%2FWm%2Bp957JHOhnyAimiEaipnHzcxBrjX6CmDw4ROuDreUbsPaWbrbdDOyMleapCcTPptivCiJ%2BUHbwxYLJfGslpAFqP0j2Iv31i5mqwxjXRTupS9X0ut%2BmI8Q4AA32BEAqXfw5LPBBxLfXNN1qVd6yrMnMaJiAIk4hq8dAEj0wNhEoHnpCY%2BIcDDRbVTvZu3VIK9NKyRg9ba6wbDJWuQHxzZQZDTjke%2B6u9ze0IzNJv1cMVcA%2BUbHgJAW97MP9Jo0wxu5tH%2Bu6rKxLHCvkvv8s0JMXn1Jz1SuTk6LLZQ8R7HruwPm4KcDKG5Xv2JxbNmZN9Od5b8r3K2HyBuGhpBhX4riT8K%2BPV3tzJDcxA%2B%2BSuDLFSRvI5P8eZWR50k1lSASNvCf%2FL6MPsZiLvMLb4pvmIDDWzAGyJO5yFMoMA3U%2FYniErAztIXIWqp15yLykr3oSOhAEjEiv1Lily9n7R5rgowuOzivgY6pgG9PnQrtBhchBYKhOSsVBfGFtJ3Mn1g8QvmlWDU0xJOvGGmTtMe1nnDroDiEbFX9I2mUKNxBvasa7ug6ngRWm5rR8aqbl6a2D7cVgqUe%2BSm6xdS3jkjqoxhvH1FDeXDLlLB3tmB44rLBDCeNTM5asMS15SKLU3%2BussRRDu%2FWD4ttSyg6Iv3rhqj9elLB4XiV%2B%2Bm1ROo0N8fI%2FzPsSW%2Fwycp8i4ZkS7%2F&X-Amz-Signature=528c79841301a8402332ab1a90c398a52ad1eadf51301addfc3178997b51475c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
