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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSATOQLK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDfjX%2B8fT8OnziTlUe3RNwpopnPNp34N0sFiQ9sjUSd4gIgedb9MxjyPUkPPc33iQOi%2B5sf6F2%2BEwlijGhjCVqqpxEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBCAGMXgldrLGCSJwCrcA5%2BMPx8WwhRWVaEnAKTOP3SyLKyxc5dQadLSih5Ved3qQfNRw6q96tBEeidULE122%2Fru0LNBI6js4gHMkGC79HpkTDSvcE52BjO53I7NAZyTxTrA3%2F1GmdGBq7B53DClMcRX20BhzU5tmkcVjF8MOoWXkS9ERais436fK11PlCQtBgE9y34RgVKEvyoS8EYvKe6yPMmS7uvEhFHHZdUxZba11uoBKRa0Dau3z1afSHarym7KGYizZuFVICOEMMUKdIA7D7oK2vkh6YKMamOkORZXtZqWjlxcqIa4pNAfKFj6aCOCjQ1eElRAf8L81u0smoqhI4WO2Yb%2BD2fwkiGz7JKmAJVYSBVuRImhDVwa0PUpkTX4ugHHrNuajwdux%2BZhGSzM%2F1yPiPBQCA5UJwnNOUGvfYZJxdgxhYjm2qMU1sg9zxTadQZdKJkR34nHiHMoqHDpv4QiEwWBxyNySpg85yjmH3%2FUSyRfuAMDny62iWbC3DX5j3HFGz0Fyk7s7F8a%2F1UIRv9kfnaMe7293AdBzGRAy5jGYGDZoBNpaL%2B30UYqfOhtxGvUYg962kwtp5Wf6sLq7BmUNEpTqc5klCzq%2BjWeNljIKIqW52mkm0qnDDL%2B%2Fz6R4zyYIpm8214iMLCgqcAGOqUBaW3tXaO22J1OgIQhf5ilPbjM4u5oJbrfkIrwX48puLNK0%2FBz9M621WHP4Ek%2B3zGZhJktz9vcM37CklF5zUx0WQ1aA1quwtVbr75RzPuz%2Bgjoh42RkUZ%2BoQMz0%2BpeOrfEAy86fNZlhm06V0Ux045052dqC8xMovUXB6W1iFaEMvqM7ZPMZ5Q%2FN5TtcPG5skVfwQA9ew50IVDDLDM60y9p2whxrrN6&X-Amz-Signature=8a7e88b98a4dffc0245beb837b3f0749827ff71e48bf29dd635565ea85db0a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSATOQLK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDfjX%2B8fT8OnziTlUe3RNwpopnPNp34N0sFiQ9sjUSd4gIgedb9MxjyPUkPPc33iQOi%2B5sf6F2%2BEwlijGhjCVqqpxEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBCAGMXgldrLGCSJwCrcA5%2BMPx8WwhRWVaEnAKTOP3SyLKyxc5dQadLSih5Ved3qQfNRw6q96tBEeidULE122%2Fru0LNBI6js4gHMkGC79HpkTDSvcE52BjO53I7NAZyTxTrA3%2F1GmdGBq7B53DClMcRX20BhzU5tmkcVjF8MOoWXkS9ERais436fK11PlCQtBgE9y34RgVKEvyoS8EYvKe6yPMmS7uvEhFHHZdUxZba11uoBKRa0Dau3z1afSHarym7KGYizZuFVICOEMMUKdIA7D7oK2vkh6YKMamOkORZXtZqWjlxcqIa4pNAfKFj6aCOCjQ1eElRAf8L81u0smoqhI4WO2Yb%2BD2fwkiGz7JKmAJVYSBVuRImhDVwa0PUpkTX4ugHHrNuajwdux%2BZhGSzM%2F1yPiPBQCA5UJwnNOUGvfYZJxdgxhYjm2qMU1sg9zxTadQZdKJkR34nHiHMoqHDpv4QiEwWBxyNySpg85yjmH3%2FUSyRfuAMDny62iWbC3DX5j3HFGz0Fyk7s7F8a%2F1UIRv9kfnaMe7293AdBzGRAy5jGYGDZoBNpaL%2B30UYqfOhtxGvUYg962kwtp5Wf6sLq7BmUNEpTqc5klCzq%2BjWeNljIKIqW52mkm0qnDDL%2B%2Fz6R4zyYIpm8214iMLCgqcAGOqUBaW3tXaO22J1OgIQhf5ilPbjM4u5oJbrfkIrwX48puLNK0%2FBz9M621WHP4Ek%2B3zGZhJktz9vcM37CklF5zUx0WQ1aA1quwtVbr75RzPuz%2Bgjoh42RkUZ%2BoQMz0%2BpeOrfEAy86fNZlhm06V0Ux045052dqC8xMovUXB6W1iFaEMvqM7ZPMZ5Q%2FN5TtcPG5skVfwQA9ew50IVDDLDM60y9p2whxrrN6&X-Amz-Signature=94a6607adb9af136521fa873419796eb05076e445d6470734b9ce2ed22de08de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXCGWU6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCnNyvd6wRsKu57mvm%2BdEMVeVUeEqDTpbhaffcsXBrySQIgXdO6%2BoaWFv8YKMAiJgmV6IZr57Blvbsuixo015nz35oq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNcIYeI5RYGNHM9EXyrcAwrdJR8hHZQYaRsqykCJ6DduI3gUyaCa6nrMwcbfPbpTcvwYuSoE0tdO63vIj064Qrh2Cp0qrXaLwVH%2F7r1TuPXBZ4uu5QXl9kgDqcTHSjXyzw3tea%2BgrMBXd%2FnHHLngKmIMn3HKZpuf4JUYbskgWxunSGaxt%2F%2FMt8Xy0GLHSF1cN32l1jD7fOQJ0Yn9yNJwKD%2FG2u3m%2BtIEzCe9q3%2F6uHciy6ovxA9vuBNy68wKLz%2BbH%2FNI5R6cY3hjJfl8vV62dZO7U1rCCk8ztAR6k74Gw2OetWkZ5AZWCmUDpXgaa%2FpWcHlbZVcExmfl17H0FJAmynnN5iiPhIeSYGL37nSylxxrd3r2sbNDzwXjDub1LDFeCsPvWADjMauu8HMjxQBBE2zvRl2TMlAEDMJQAwBr40NJBpKxEkObyrzoOqJjtIHznSR5AbLq%2FSIxfHIP6uYUla63Yrwg7OBtmUwkJfL6oEIXu%2BPQELrGFtncNwsDId9FFwvtPhSaH60DWoJHLtWrHV5h3%2BHpvYTlG8HYZEeNrqk4dCv12cMj76aOQIRr9RggiU3LytCK6k%2BmN6TJ5TUdQ%2FEzJlaDel1nOIKcttmDxfC8X0vc19PthGVae%2FLRCPQp2OP%2Bk6dghK%2Bp1m3UMOCfqcAGOqUBBhp8cyjp%2Fcmy7sNEofc9r0d9Cito3L4xja2N0bavKJ22TOi9Lld5TA8mXe4aAfaWqlcY0JwPPegBZ1cOvItRAId%2FL8rN2PDYlSkJxzg0O7yPxAr6y6WsLjLevvASzD7%2FMltgefECENWXbznSuhVuC1hGZdqkSAKNyweJHyWTEV371o%2FnVY3RqW%2BPbyfBya5PvJOFM1W76kGhLIIWDEP%2F8d3bv5kL&X-Amz-Signature=ca1ca781506898c2a88068b2848592d0fe13a85ddb47bedf9ecf2b733c34254f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVZ45R4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIH76KV45vG1Y1RvwPfs5hww1hAr%2FypvCB1yUwwhu8BvFAiAna%2FoHKSt8VDW8XspLq3smJOPfgi%2FfN2kXX13Yt5ljPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM37Y921xoGcL99PElKtwDyZHRN8WOgc%2FSW2%2BRa967AhfsHawbNDpofRyNCWZFlha4whK6CkfLZ5y2GmUggU8MPLhw8zFp5SbAYoBexPLWatM5WAAf4KMpe%2FiJ9yuwDkoBxojIrC1rrzsyirC1mlBEMig%2Bm4NVUF4KI75pOn%2F%2BQOfGIEnhQpxjdANAWj6W6f4QpjTw0FruR4zf7IYIeI2R9MfKQPYidTDcX%2FWEV0PfhvWar6bghSbUgNoy1t3vpJWJAQhPLF%2BDtyx%2Bvi3%2BLn2hO%2BbXGzA904HZs6rHC4peuBvLD8wPfA4QvwF1eRLS2mBjdyBa0c15ufFs22oa2FJjqyESUJkFZqpeYTqaqUkMXQ3D7Qy3sUyCd0Ok2fYjDeC5MaClKWp2UEuniWbHAIoWcz4S8H%2F3cIPDY3LjiFWSEsNvbMHx8QV2f4w%2FHxiPndRYt77s1uAtIfSu9EqRmx7RdlfEOL%2BSTVppKdhH%2BGeH%2FqRQsqJnNEGBkxbMt6ivkcv%2BvfFXdEmEjhSOyqMdkgyqLTv0ctVHZxQc8W7hd2JX%2B%2BIkA6zhQdHeRBappnU7xAY7Smm5U7OZp58IMZbsTUgIR12JtuEyU44wi8M1Hox%2BFVv%2B3DzsBBi6EWqA0ZLvMp2HfgHjWyIa7EtbwQEw0p%2BpwAY6pgGnUDBFiiWidtpnyXbuMAuPIqKGF8hsFY8KpgFilcr5%2FG%2Bma%2BPdCKCZnDOoq%2F3qUGd9H%2FDCEAdREK8tTLoGbKIXIzlN7qDFtnQNfa4ljR5slfykWhhJ9dhQ6U5BA0IHEqa%2BbM0ZH0g062suD1bwx42phThcgjpQJOgwkVfiktVqo0FoYE5fhC8tCu94snPNcKlM%2BxqxBsx0xKhU9QuOhqPFZaqLSzS6&X-Amz-Signature=8fc1279cad055d6b29bce15236a8d305ca6b9f8ff125dde18b274acdc24d4a79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSATOQLK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDfjX%2B8fT8OnziTlUe3RNwpopnPNp34N0sFiQ9sjUSd4gIgedb9MxjyPUkPPc33iQOi%2B5sf6F2%2BEwlijGhjCVqqpxEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBCAGMXgldrLGCSJwCrcA5%2BMPx8WwhRWVaEnAKTOP3SyLKyxc5dQadLSih5Ved3qQfNRw6q96tBEeidULE122%2Fru0LNBI6js4gHMkGC79HpkTDSvcE52BjO53I7NAZyTxTrA3%2F1GmdGBq7B53DClMcRX20BhzU5tmkcVjF8MOoWXkS9ERais436fK11PlCQtBgE9y34RgVKEvyoS8EYvKe6yPMmS7uvEhFHHZdUxZba11uoBKRa0Dau3z1afSHarym7KGYizZuFVICOEMMUKdIA7D7oK2vkh6YKMamOkORZXtZqWjlxcqIa4pNAfKFj6aCOCjQ1eElRAf8L81u0smoqhI4WO2Yb%2BD2fwkiGz7JKmAJVYSBVuRImhDVwa0PUpkTX4ugHHrNuajwdux%2BZhGSzM%2F1yPiPBQCA5UJwnNOUGvfYZJxdgxhYjm2qMU1sg9zxTadQZdKJkR34nHiHMoqHDpv4QiEwWBxyNySpg85yjmH3%2FUSyRfuAMDny62iWbC3DX5j3HFGz0Fyk7s7F8a%2F1UIRv9kfnaMe7293AdBzGRAy5jGYGDZoBNpaL%2B30UYqfOhtxGvUYg962kwtp5Wf6sLq7BmUNEpTqc5klCzq%2BjWeNljIKIqW52mkm0qnDDL%2B%2Fz6R4zyYIpm8214iMLCgqcAGOqUBaW3tXaO22J1OgIQhf5ilPbjM4u5oJbrfkIrwX48puLNK0%2FBz9M621WHP4Ek%2B3zGZhJktz9vcM37CklF5zUx0WQ1aA1quwtVbr75RzPuz%2Bgjoh42RkUZ%2BoQMz0%2BpeOrfEAy86fNZlhm06V0Ux045052dqC8xMovUXB6W1iFaEMvqM7ZPMZ5Q%2FN5TtcPG5skVfwQA9ew50IVDDLDM60y9p2whxrrN6&X-Amz-Signature=05c16fa334ffde9436aed39e673fa449ea9e11b68d9942bc3145749e49b62c46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
