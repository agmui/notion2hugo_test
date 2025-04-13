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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBLQPKS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIExnhszA%2FI7HJNH8YtPNs1GXvnfSfjQ72nr83C0iTIloAiEAxRpJIQYXlQGckroKp7ivnvt%2FE2%2Fqa4HtwtugyPRAIckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO3kt8U3jYlVuhAsircA0Y5EoHd70dK12b1x45O1%2BDTOmoo6rt%2F1ShJWOx%2B4aj9LXM14461YmYk3NTQe3TfNDStS4v%2B%2Fl8%2F%2FMyGGQIAF505XxVwX6ruY4PiFhIkVjihbBVzz53sRts1vuehfLHWNKNF4HG23awVBoOsEXBYwUDFLnzrlpc5e4X1pIqdWKhql0HZHNw2LHxHi9F1g7Xx%2BrJaFYdvQKv%2F26PMyYTXbofGqE9%2FGHSwZljugIssa1pEbf1BpGn3676qs05HCNzP3TEAOv9eHpdKYlbHoH%2BkT9bEdltTHQXdSK8vOc7BrqSsIuqyfCE3z7VPGRsJz4hQBA0zz1w4a2sSLkQnczpH%2BtOEFWrR03R0OZTHMknGdPYJNak%2BBNuGf30gxUNzbKO8wEpIW7FIAOjgPrAHmX%2BArYp%2F3wh9S2vMEecmZlTcz1qokwI7CbHDaTnjRbn6saGHlpL0cHgjDzzjjGnWbb1p2kHpGTzmO1E1E2V3jPfsYcXTI%2Bk6ShM3d9nLcI2jh2%2BJ7nnbg8oQ4NyXcJgheNB5D2%2FLtroWc%2BjzZZT6%2BEQjHbpPlCkOOjA3V0tOy492AT8CgaJl3Fg90UlQWt21MUgG1uICviU8s7DRQR%2F%2BcumUNm%2BpTLLdQUvpt7tyYDjbMJWw8L8GOqUBfkpB1%2FCznMVQja8dbwvG7LZpXDPMpVMOVNQsls2INMfSaf50kJmM11d9rTfClVowXz76YDjEFCfP3yjkgJrbBeOZD%2FPnTx31ZOCDn%2BLZscyzZhxng6d4krEFIj4j8fsxQB5M3KVKCFwsz%2FjOF3%2FvGAHsiWXZ7v0VStWGFOSq6runTo%2Fui%2FJ9IUNpWoGV6IFOf9I8RaZgraOlbRatPCVQ7FOBxcaR&X-Amz-Signature=09d5c61ce8bcc039b6b3728d3c34242a6babcfbe5228e18a695f324b14bdcb09&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBLQPKS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIExnhszA%2FI7HJNH8YtPNs1GXvnfSfjQ72nr83C0iTIloAiEAxRpJIQYXlQGckroKp7ivnvt%2FE2%2Fqa4HtwtugyPRAIckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO3kt8U3jYlVuhAsircA0Y5EoHd70dK12b1x45O1%2BDTOmoo6rt%2F1ShJWOx%2B4aj9LXM14461YmYk3NTQe3TfNDStS4v%2B%2Fl8%2F%2FMyGGQIAF505XxVwX6ruY4PiFhIkVjihbBVzz53sRts1vuehfLHWNKNF4HG23awVBoOsEXBYwUDFLnzrlpc5e4X1pIqdWKhql0HZHNw2LHxHi9F1g7Xx%2BrJaFYdvQKv%2F26PMyYTXbofGqE9%2FGHSwZljugIssa1pEbf1BpGn3676qs05HCNzP3TEAOv9eHpdKYlbHoH%2BkT9bEdltTHQXdSK8vOc7BrqSsIuqyfCE3z7VPGRsJz4hQBA0zz1w4a2sSLkQnczpH%2BtOEFWrR03R0OZTHMknGdPYJNak%2BBNuGf30gxUNzbKO8wEpIW7FIAOjgPrAHmX%2BArYp%2F3wh9S2vMEecmZlTcz1qokwI7CbHDaTnjRbn6saGHlpL0cHgjDzzjjGnWbb1p2kHpGTzmO1E1E2V3jPfsYcXTI%2Bk6ShM3d9nLcI2jh2%2BJ7nnbg8oQ4NyXcJgheNB5D2%2FLtroWc%2BjzZZT6%2BEQjHbpPlCkOOjA3V0tOy492AT8CgaJl3Fg90UlQWt21MUgG1uICviU8s7DRQR%2F%2BcumUNm%2BpTLLdQUvpt7tyYDjbMJWw8L8GOqUBfkpB1%2FCznMVQja8dbwvG7LZpXDPMpVMOVNQsls2INMfSaf50kJmM11d9rTfClVowXz76YDjEFCfP3yjkgJrbBeOZD%2FPnTx31ZOCDn%2BLZscyzZhxng6d4krEFIj4j8fsxQB5M3KVKCFwsz%2FjOF3%2FvGAHsiWXZ7v0VStWGFOSq6runTo%2Fui%2FJ9IUNpWoGV6IFOf9I8RaZgraOlbRatPCVQ7FOBxcaR&X-Amz-Signature=88ead22ac923ee067057519ef3d39323289d38e85b89d912b7364f71848f948e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSTS7DF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGc5w4jmC3%2FBa9zl5whLtsk%2BKR7r%2BV%2Fj5cZCkdOApds4AiAtEmIZMzmMfmaAOi4ui8AU7j9ylIFhLRJFEy6MPICh6yqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSupLUM%2FAeIswFJLgKtwDvhKxCnStx7T1Dc7jxxF4vyv%2BWzM8rtkt8n3R8K7Ltg%2BQruDXcqkn9Ba6YfurfV%2FEiSd64AIivFTONy0LzGh9nkiPncS2X%2BQu1zh83sJzLNmb9qB1P%2F22u1KLIwdaP%2FvGhrJtmknyTFhcI4GL3cl0gx55LSGtZBsW5tk6P5JMY9HKxHhufSyeHS4fdX5xY0JRa4mNYhs0wjbTohdRUm46Z3GohiNlbtheRKAmyc2%2FB16RGwmp4DP2C%2BfRbUmowv5ib1qXeZ1bheDXHe87H4HFgu5dx3voD0c1HxbgvJ8jiTs6wx5NO86Dd14qsu26rFTVHsMDNBzSrG0kQYP9mqKHrCkNDmNQYfEtR01oFutz9LjDLo8%2BL1jaFa7%2F9ocnjdvUwpx8RgBaX57WuCN%2BgpwI9GtUD6rB0lFBueZHKm4%2BOnvl3Pj4qRYC0za2zveKaxGNNJuvMhJw%2B6oJ7VYRYrjU9oOuNl8LTu31%2FZXXZkKWWISxyMRieOfIyUEAk1xc0phT6NeouA583XHJJqIfpGER1oEii4iqlH%2FyUy8ErNn0mjGKcUbzbmJB54BUYpXVWqQcy0Bd35NVgkShIVz3U1lCTZatbzcGNq%2F%2BoEo1AHOhlBqvKgqGWkIGSWER8f4wlb3wvwY6pgFbVJgqT%2FKvHLLU2jCg8uSPzwjJ8cukOAgovFXAktjY7DHDNHDa%2BvPxPG5L9v3jcJlmAkoDb97JHFnL7zQWISbFK0tNZA5KKO%2B64KYMeJNz5Tp%2F66lAYNfvw3RAOD%2FyCtlG3o9rgi%2BrsUzEuVNZ%2FFCeotDAeuFeTM0SyFnocAyEljBk6IGX08p7nnlFGdcX4q3AUloyucE1LVVMX5irkozgXMeIH8IQ&X-Amz-Signature=757b59e1b09694e2b429535196d25fe121a755b336366122a1cfd5dce71c239e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBMO5TY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCG1Q3KPrYOcUtyyu3TroRRZJmx9v5dxvSTkXJBjYb0jQIhAPgXaDqYiABe%2BzebvZVyvw2EJKhp6JpS%2BUvjxumwEoqAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAEr02WCv1EP0IEPsq3AMyvSI7M%2BtI9zdAEjXaRoXH%2BJtOAWZZOFdypmSUK5%2B%2BfqC2v1oWvdtnj7sw1XM6zZJqn37DuuQMJS4eigMTW8e9VJXYqEG1DP9HvR0RQjl3fd4SjQema9x55upV5pmk%2F5gydmPabwL65bG8bBFbEUMIKZaLU19Q6zgpCFulkp%2FSR6ncX1tehQSf3pcQ1pY2aRNVVDg4wcwBQPnc49NpO749NSirTx1npsH8HCBp0Htzq0kYoATUV5xxjImp5matIEdu9OSw3RJ%2BNDKNdul%2FIBH0g%2FnNcJUAmV2z9jUv%2BkwxSjWnZ7ndCnx%2BzkiWCVHiQVIORBnPAwoprnChOL%2FwFBNasWkUk6W%2BeTmUWR1%2Fr7vMsWprQNzULx2m54XvzicPKd%2BWrCNdzfidbNtebtH8BlODB67ox6WC1aN2kIBS3Gp3mxnui0uO%2Bzb35Q0THI48TpRAxvmxUf411DFeJlZEyr0WU6grmr5fQnX%2BaBtMENxaHIjHvG%2FO48b5BrVmsep7YZUfH6itZSiHB2huG0dvYa1fLA6um0ie8TGkXkKlouWQSPunEbxCcAYUU98wCrJgIXyNFNb83bWrBEg0fYu3LB5Wr7V1vKpZyBwgHTPXEs7h%2Bsx3UVGsJpBQjw4iBzCVsPC%2FBjqkAXFVfD%2F922%2BufchnDhQXNvX3Shqt2p6bhDTmrSxu4jjWDSf%2BoM2hkl4SXbciarkxhQT3BoB5lHaB2ywpOTDTQPM1E4Xe2S4OgLbIKvtjYPChN4Z21UwpbDafiECvzAsB75ilSsDDb8619TcokJUEOX%2BmraMKG%2BSdcrjpbNX%2BGaXobNAmxU9m08sq8Ez8Pa8Ef9Gs1vZU7WS5vII8V2b9VMzzcLYc&X-Amz-Signature=afd7b1a6b2c93d6fbc52e697a1584539e6b465025651e7cb9140282426e067b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBLQPKS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIExnhszA%2FI7HJNH8YtPNs1GXvnfSfjQ72nr83C0iTIloAiEAxRpJIQYXlQGckroKp7ivnvt%2FE2%2Fqa4HtwtugyPRAIckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO3kt8U3jYlVuhAsircA0Y5EoHd70dK12b1x45O1%2BDTOmoo6rt%2F1ShJWOx%2B4aj9LXM14461YmYk3NTQe3TfNDStS4v%2B%2Fl8%2F%2FMyGGQIAF505XxVwX6ruY4PiFhIkVjihbBVzz53sRts1vuehfLHWNKNF4HG23awVBoOsEXBYwUDFLnzrlpc5e4X1pIqdWKhql0HZHNw2LHxHi9F1g7Xx%2BrJaFYdvQKv%2F26PMyYTXbofGqE9%2FGHSwZljugIssa1pEbf1BpGn3676qs05HCNzP3TEAOv9eHpdKYlbHoH%2BkT9bEdltTHQXdSK8vOc7BrqSsIuqyfCE3z7VPGRsJz4hQBA0zz1w4a2sSLkQnczpH%2BtOEFWrR03R0OZTHMknGdPYJNak%2BBNuGf30gxUNzbKO8wEpIW7FIAOjgPrAHmX%2BArYp%2F3wh9S2vMEecmZlTcz1qokwI7CbHDaTnjRbn6saGHlpL0cHgjDzzjjGnWbb1p2kHpGTzmO1E1E2V3jPfsYcXTI%2Bk6ShM3d9nLcI2jh2%2BJ7nnbg8oQ4NyXcJgheNB5D2%2FLtroWc%2BjzZZT6%2BEQjHbpPlCkOOjA3V0tOy492AT8CgaJl3Fg90UlQWt21MUgG1uICviU8s7DRQR%2F%2BcumUNm%2BpTLLdQUvpt7tyYDjbMJWw8L8GOqUBfkpB1%2FCznMVQja8dbwvG7LZpXDPMpVMOVNQsls2INMfSaf50kJmM11d9rTfClVowXz76YDjEFCfP3yjkgJrbBeOZD%2FPnTx31ZOCDn%2BLZscyzZhxng6d4krEFIj4j8fsxQB5M3KVKCFwsz%2FjOF3%2FvGAHsiWXZ7v0VStWGFOSq6runTo%2Fui%2FJ9IUNpWoGV6IFOf9I8RaZgraOlbRatPCVQ7FOBxcaR&X-Amz-Signature=3cb0b420cae0f52e4ce14c187a9add196eb2c21542f43665ffab4b71d3b07255&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
