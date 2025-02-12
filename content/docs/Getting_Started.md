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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F464G4X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8h%2BKnGMoHRYJtIA67GbEzuiXynVpb3OAazuAzinDdAIgVadfxGoUY2uPZKeTqaHwVwq7ouGEV1i9yqLNgJnDNmIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwbckNZ%2FLOn5sUYRSrcAxc%2BqD02v3IZ5zrIhoLPIL6q7RqFkqZK3EMOkqo7Q4s6PQ8SNn%2FceIbGMIUUKAvuhb%2B2FNxsM1tGrUZOngHmq%2FPh%2BpOBceDfEo9xHF6TGxQrXzq8i%2Fn42CqIgbiObeFZfKigjae%2BJ8To9mR9VuDFIyKAtvMLXOmEsibleyxXQBLyMfS2%2FDOr8KYTRS%2FblDhCoSt5d1YVRKhhFituAN5RdkoVRiUBDkz7Ylev3stecKhuPkpOrtubdLGGP8e8HyYgnLeLwJr2gxQQzVgNBfK4P1056WHPInIo9yZeYd%2BfGsbOsOuEo3q2CF2RfRVAcAEuRo37PpTsbOBhswhqw5dBOkbHnHJCKX99hIhTBrsJE4hRY4ITVzc%2BryY7JtZxKHoqjidmzY%2Bo0oAkKOcLv%2BJFeRhzIZxyiRgGScheS%2BTdJxJACCK7NnCNIjhv6W%2FLqTzMOtfP%2B9Hd5Ji7o9xbszx7opUeV8p4HnFuJuaJ2Khd5ETSdSnZqcXgLpTRsYhaQsuOg1mnF3qoYeJXNY8kN0BFbN13Y03%2Bt3zFOwC48zMcLEmjDynL0EyQxofdLa5b4smAccEY4mnwo2UsXP6SsKfjQZkxKU3r2QQ83BWJ%2F3vTCvusaoloV9iRs2ugwoIxMMinsr0GOqUB8JAYOdwclS9r%2FVV2SboymgDUtEPJzg%2FClAI7dQjY5hRELa3eeh6Abn%2BtHDMSmff77xI5J3V11hliIB1W7CMzrmPMNJpCZ%2B%2B7NBrdUmbRiI97L2zIiIMwdghbsgpqA5ABPQEKWwr2GgflkbuLmT%2Bil8cm5nnpgZdatB5vfUzxOs2On8IIoJPIx2OJ5h2bWLtUPhVG2DaJrTD7boTRbTy6j9v8B4Te&X-Amz-Signature=4b0e66203fd451f199df15fbe5cc57ff059eda95edb510c9bc7ad22d2bdeffa9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F464G4X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8h%2BKnGMoHRYJtIA67GbEzuiXynVpb3OAazuAzinDdAIgVadfxGoUY2uPZKeTqaHwVwq7ouGEV1i9yqLNgJnDNmIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwbckNZ%2FLOn5sUYRSrcAxc%2BqD02v3IZ5zrIhoLPIL6q7RqFkqZK3EMOkqo7Q4s6PQ8SNn%2FceIbGMIUUKAvuhb%2B2FNxsM1tGrUZOngHmq%2FPh%2BpOBceDfEo9xHF6TGxQrXzq8i%2Fn42CqIgbiObeFZfKigjae%2BJ8To9mR9VuDFIyKAtvMLXOmEsibleyxXQBLyMfS2%2FDOr8KYTRS%2FblDhCoSt5d1YVRKhhFituAN5RdkoVRiUBDkz7Ylev3stecKhuPkpOrtubdLGGP8e8HyYgnLeLwJr2gxQQzVgNBfK4P1056WHPInIo9yZeYd%2BfGsbOsOuEo3q2CF2RfRVAcAEuRo37PpTsbOBhswhqw5dBOkbHnHJCKX99hIhTBrsJE4hRY4ITVzc%2BryY7JtZxKHoqjidmzY%2Bo0oAkKOcLv%2BJFeRhzIZxyiRgGScheS%2BTdJxJACCK7NnCNIjhv6W%2FLqTzMOtfP%2B9Hd5Ji7o9xbszx7opUeV8p4HnFuJuaJ2Khd5ETSdSnZqcXgLpTRsYhaQsuOg1mnF3qoYeJXNY8kN0BFbN13Y03%2Bt3zFOwC48zMcLEmjDynL0EyQxofdLa5b4smAccEY4mnwo2UsXP6SsKfjQZkxKU3r2QQ83BWJ%2F3vTCvusaoloV9iRs2ugwoIxMMinsr0GOqUB8JAYOdwclS9r%2FVV2SboymgDUtEPJzg%2FClAI7dQjY5hRELa3eeh6Abn%2BtHDMSmff77xI5J3V11hliIB1W7CMzrmPMNJpCZ%2B%2B7NBrdUmbRiI97L2zIiIMwdghbsgpqA5ABPQEKWwr2GgflkbuLmT%2Bil8cm5nnpgZdatB5vfUzxOs2On8IIoJPIx2OJ5h2bWLtUPhVG2DaJrTD7boTRbTy6j9v8B4Te&X-Amz-Signature=aeeb626eadb3030f31f3e304dd12c14a14c58f7e9b6da3a10f27082b9cde5129&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNS2CC7Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBSJAKPCR626zTIZQ6tAHeOW%2B7no7mVtyYoHw%2BslbIUAiEA%2BbKJaUTlRChDoE6R%2F2WqWsvHeDu8L23nG5xaoJ4Uz3AqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEFGt6Ag4hDQnh%2FsSrcA6U4jtfsk6gDKPXgFm4PIib%2Fu5pTim9XPIWGFn8QK%2BoqNh%2BKBPRHoXHQrZePvqMFqpB4BOzdKz44G7ws30H3HlnTixUliHqTjjaLkcpyOwcKjk%2FB%2F3OKKhM9JT8Z5izA7W3HFHx0kAFbjVthT09tmw2tpf2WuYxuy7LI2N60a8UU3g5r2gwz6juUjF53tXU4SVaiFSjk9TKP1gwHaufm%2BOeoL1x3zkzaVIsoU2egD4PJYx41ioB7iyO1MudxjFcLTv0KxSZzTZEgeZKAjpqXcbrSSF1es2ajxYamH8Jcb9UNnsrMWG0qHA2lL17Un5l3LN1q8XwalHSaSG7W4ezCZ6TPWcyrPHkTcfGVeGBjOjq7dW7bwvzzsXYpfrJM263PlGnKXpqJtjfrZ%2BQ3%2B0P600s4i74E7G%2BxIzuI5IjSZ38P46kxyFR1LbbzXcQ2ffpt%2FlNEs41KaKasf5R5RC2yg1%2Fx%2F6d%2BRpnSRSaxzzA3q9fsPDvLMcJ1Mu715sj6AoeBU9MnQ1L5yv2NL0BM08SshClA7Vlo67eLyDMPQTzSkNu75tTv11Yw86BztFSTvWXM%2BceiRQlNpECnOtCKHFJhYdVGmhHxGxEwzQlNfa063AmBZYR9zOj9JBiyFzEmMOWrsr0GOqUBfCKTgn3EnBoEnBFHrvBzuxChx27dK0SDTmdqnXNo2Ou%2FY8q8pqcquPc6t0ZGydbKTgUM%2BGg7KwCO0slygVLrqU2W5M6TkQSfShxYuBXWBM%2BAnZG%2BvILtBFxGsDqcX4gBEpa%2FLgbbujBovXubxa5AdpvKg8Njksao3fRjhSr37X5sLbjbRDs86kUv%2BKNWOfQbxb3OuOhmT%2FLwKNiFZHGu7KZngjvV&X-Amz-Signature=8fdee727e2b31ca99280d0de937a485dc9ad31071bdb81e2ceec4c28f41dd7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIHUKDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuQ13cQbNiRRjKmehouDWdZ3TRxyX8v50n3kwJ3z2iyQIhAJIeehLZ68dSTRnKI5SvzyZaJqdMpWdX5TRgmLkGo5KoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx7FEjLkCBgQCYh%2F4q3APyPA0s0JxsXsfYoqZ8KbqmhsEs9quIUeqS7otbFhGwfvaiYWRzH9gSaLDiJj%2BNZ3AUqMFCYH%2BCSjqa%2B4vtYrBK9%2FyVAKQu9mVtlYdaZgurAc4WhY%2BO4Iz2aLYQgL2E%2Fy9pWm3239GBeb%2FS3P5PvgWcWKAhpE4%2FILFTaJ%2BmbEpiKQpBQzb5PH1zVPC9KOazMuZNDcQcAcNkjFDBMLkuFBY%2B8J4d3zMbpHUEhffnLVb4EvodYklQqPyyeemYcesd0OhKTeUSBjVtTvus4pVWnK6faOne2CgIdByY0TWOMCQG3O4PcWWHtPNp94wbdtRAXYKDsRV4gMTO6FnmEYYFRbwrYNTTQM5cF2kGYyCIhVLDGas3DxIg5%2FsxzcdxMnoTkpkX5RvHICkKmGn8u43tqTbtvO6fl3KwpRXfANqBZH4TItj1nBruhyG%2BJDy0wYKEeOaQPCkzpAv88vS9roDE%2BRKjmnncG5R8X%2Fc04CMfieSXBKMV8EPQWW1qxC07o874rrC6FR0N5%2BDTXWZi7oEvPuxT%2FAo5XUU1bc49kDaUKFII8Oi2t7r3DGP8qYZzmfe9uRcL%2BzpuquiJ%2Baxf1k%2B5aUaxguU%2BraXzlMnXVMa55WKrlAVFdxMjFvASh%2BbIczCOrLK9BjqkAWGtT7Zi24mRXosjvPyhg1qQ0eYIzBDuGiiFHQudukbQWWFhTbTE8ynUgJO2IEPC735CPa4RWdCbEgljbB6Cp%2Bzwu%2Bya%2FbDI%2F9nA5nYB%2BvvyQEY1EQ5oPOL7q9OqzoymWctmOFyUzRtFO9HIyRL3ItAhIpc%2B%2B%2BD%2Bux0LNP5h0CtMkvQOikLuG8wU9CJ%2BA%2B81FYvJQjHRDSEenUY9JusqewnA9hOS&X-Amz-Signature=28fb6641511b457020983a0358f833468a5be5469d2144db0b9bf07c930f3b31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F464G4X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8h%2BKnGMoHRYJtIA67GbEzuiXynVpb3OAazuAzinDdAIgVadfxGoUY2uPZKeTqaHwVwq7ouGEV1i9yqLNgJnDNmIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwbckNZ%2FLOn5sUYRSrcAxc%2BqD02v3IZ5zrIhoLPIL6q7RqFkqZK3EMOkqo7Q4s6PQ8SNn%2FceIbGMIUUKAvuhb%2B2FNxsM1tGrUZOngHmq%2FPh%2BpOBceDfEo9xHF6TGxQrXzq8i%2Fn42CqIgbiObeFZfKigjae%2BJ8To9mR9VuDFIyKAtvMLXOmEsibleyxXQBLyMfS2%2FDOr8KYTRS%2FblDhCoSt5d1YVRKhhFituAN5RdkoVRiUBDkz7Ylev3stecKhuPkpOrtubdLGGP8e8HyYgnLeLwJr2gxQQzVgNBfK4P1056WHPInIo9yZeYd%2BfGsbOsOuEo3q2CF2RfRVAcAEuRo37PpTsbOBhswhqw5dBOkbHnHJCKX99hIhTBrsJE4hRY4ITVzc%2BryY7JtZxKHoqjidmzY%2Bo0oAkKOcLv%2BJFeRhzIZxyiRgGScheS%2BTdJxJACCK7NnCNIjhv6W%2FLqTzMOtfP%2B9Hd5Ji7o9xbszx7opUeV8p4HnFuJuaJ2Khd5ETSdSnZqcXgLpTRsYhaQsuOg1mnF3qoYeJXNY8kN0BFbN13Y03%2Bt3zFOwC48zMcLEmjDynL0EyQxofdLa5b4smAccEY4mnwo2UsXP6SsKfjQZkxKU3r2QQ83BWJ%2F3vTCvusaoloV9iRs2ugwoIxMMinsr0GOqUB8JAYOdwclS9r%2FVV2SboymgDUtEPJzg%2FClAI7dQjY5hRELa3eeh6Abn%2BtHDMSmff77xI5J3V11hliIB1W7CMzrmPMNJpCZ%2B%2B7NBrdUmbRiI97L2zIiIMwdghbsgpqA5ABPQEKWwr2GgflkbuLmT%2Bil8cm5nnpgZdatB5vfUzxOs2On8IIoJPIx2OJ5h2bWLtUPhVG2DaJrTD7boTRbTy6j9v8B4Te&X-Amz-Signature=e623094cb0d0b46e9189b35ef6e4587945b19687b4b98a8ccc741cc584684a10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
