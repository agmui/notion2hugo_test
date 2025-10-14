---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IXHVC4%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNtHvRyJy5t%2FfgYRXofIg8vmwjTcFKx4MrnlAgf1o7iAiEA3fF2j%2BCsLW%2B955yyw6nrqRp093eBPsC3tH%2B%2B6d80ywQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLo6Xu6YzWtcRVLfbSrcA%2BKcumJnPA42f0QqC8hkoPfrwpgZ6AGG4MeUYdveQoOARlwb7oehCaiYtlvxNoS%2FdAfjcnHgYPSjBN4HGbUIAoAXSi9WE3nhlQ6iwPgaMLFCj9Ad6Q7DpYI%2FTuGdlT6uEVGMkJE6Bt%2Fx6fKd%2FpQpnwJrruF67XYpLKEdO0%2BuwnLshCCeN0HrwfHzb0gl4SRSEDWWyljD2G1IdI6uiv55%2BvYBN0bRO0xeSWFxlKfuekeCPsGy5b7N7w3Rjjvw%2BkzBGAWu5iwKrkwUJ1IN8zF0QAzPjDGZN6vnNO%2FczNRkk4QQcDdaSGnc5yROGX2nFiE0dGKsbLs0O7ddgtct9%2BVWM30%2FrkIWpqv6WVoAb8C1Ap5kHfPvHGr43AxnEStjAfTNYff3sw8YhHIHupZ7hXhIhwOTN1cWRMrJbF%2FuvYgGvwkNFSgoLyoDy3Yo%2B5ybO2C1iRY%2BquaXmpyGhar%2BW2qcfYL7kQw7NaVh0EkGJisL4HRuoU9zXSNIS9IPlzpYMH5NYJHvMLonXYN5EIcHwO%2Fep3O7bQJrtREQI6JnQzkOCfaV%2FlCIXnnFb9Jexf98DzIa6EjOz48Khb0exLvMz%2B86w0rdHMEN3AbfmkU1RHzi0ptarJUX%2FiIip389wsY8MP6ptscGOqUBh9p2yTC9PTyjkj1Mqt4OWVUNxT7LeAQg3cH4yQBgFRcIuwVspxX9zGMQ4Spg0GOjoOJ5okWasP%2FWONd5RNcpOu5eSd5fvHMy%2BHZdnD%2FTvW%2FOEzBtlxR23F18cMrTBmsW6neq1txxLvvp3qwKwUXDahdUuExeygDeuTgkN2Hy4yuGhs6jr5zkmd8oyfs5%2B9dpfzAXmfnxKs6mSC%2BSjO%2FVW7ejLdcZ&X-Amz-Signature=1ca641711df22dad8c0e2efd1531ab9131b2f6e557144d53d0a713cf4bb2b39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IXHVC4%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNtHvRyJy5t%2FfgYRXofIg8vmwjTcFKx4MrnlAgf1o7iAiEA3fF2j%2BCsLW%2B955yyw6nrqRp093eBPsC3tH%2B%2B6d80ywQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLo6Xu6YzWtcRVLfbSrcA%2BKcumJnPA42f0QqC8hkoPfrwpgZ6AGG4MeUYdveQoOARlwb7oehCaiYtlvxNoS%2FdAfjcnHgYPSjBN4HGbUIAoAXSi9WE3nhlQ6iwPgaMLFCj9Ad6Q7DpYI%2FTuGdlT6uEVGMkJE6Bt%2Fx6fKd%2FpQpnwJrruF67XYpLKEdO0%2BuwnLshCCeN0HrwfHzb0gl4SRSEDWWyljD2G1IdI6uiv55%2BvYBN0bRO0xeSWFxlKfuekeCPsGy5b7N7w3Rjjvw%2BkzBGAWu5iwKrkwUJ1IN8zF0QAzPjDGZN6vnNO%2FczNRkk4QQcDdaSGnc5yROGX2nFiE0dGKsbLs0O7ddgtct9%2BVWM30%2FrkIWpqv6WVoAb8C1Ap5kHfPvHGr43AxnEStjAfTNYff3sw8YhHIHupZ7hXhIhwOTN1cWRMrJbF%2FuvYgGvwkNFSgoLyoDy3Yo%2B5ybO2C1iRY%2BquaXmpyGhar%2BW2qcfYL7kQw7NaVh0EkGJisL4HRuoU9zXSNIS9IPlzpYMH5NYJHvMLonXYN5EIcHwO%2Fep3O7bQJrtREQI6JnQzkOCfaV%2FlCIXnnFb9Jexf98DzIa6EjOz48Khb0exLvMz%2B86w0rdHMEN3AbfmkU1RHzi0ptarJUX%2FiIip389wsY8MP6ptscGOqUBh9p2yTC9PTyjkj1Mqt4OWVUNxT7LeAQg3cH4yQBgFRcIuwVspxX9zGMQ4Spg0GOjoOJ5okWasP%2FWONd5RNcpOu5eSd5fvHMy%2BHZdnD%2FTvW%2FOEzBtlxR23F18cMrTBmsW6neq1txxLvvp3qwKwUXDahdUuExeygDeuTgkN2Hy4yuGhs6jr5zkmd8oyfs5%2B9dpfzAXmfnxKs6mSC%2BSjO%2FVW7ejLdcZ&X-Amz-Signature=1d10a4b9275a1c3fa3fd9686a46779c75acfcebde2ddc49efb0d1426da864846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IXHVC4%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNtHvRyJy5t%2FfgYRXofIg8vmwjTcFKx4MrnlAgf1o7iAiEA3fF2j%2BCsLW%2B955yyw6nrqRp093eBPsC3tH%2B%2B6d80ywQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLo6Xu6YzWtcRVLfbSrcA%2BKcumJnPA42f0QqC8hkoPfrwpgZ6AGG4MeUYdveQoOARlwb7oehCaiYtlvxNoS%2FdAfjcnHgYPSjBN4HGbUIAoAXSi9WE3nhlQ6iwPgaMLFCj9Ad6Q7DpYI%2FTuGdlT6uEVGMkJE6Bt%2Fx6fKd%2FpQpnwJrruF67XYpLKEdO0%2BuwnLshCCeN0HrwfHzb0gl4SRSEDWWyljD2G1IdI6uiv55%2BvYBN0bRO0xeSWFxlKfuekeCPsGy5b7N7w3Rjjvw%2BkzBGAWu5iwKrkwUJ1IN8zF0QAzPjDGZN6vnNO%2FczNRkk4QQcDdaSGnc5yROGX2nFiE0dGKsbLs0O7ddgtct9%2BVWM30%2FrkIWpqv6WVoAb8C1Ap5kHfPvHGr43AxnEStjAfTNYff3sw8YhHIHupZ7hXhIhwOTN1cWRMrJbF%2FuvYgGvwkNFSgoLyoDy3Yo%2B5ybO2C1iRY%2BquaXmpyGhar%2BW2qcfYL7kQw7NaVh0EkGJisL4HRuoU9zXSNIS9IPlzpYMH5NYJHvMLonXYN5EIcHwO%2Fep3O7bQJrtREQI6JnQzkOCfaV%2FlCIXnnFb9Jexf98DzIa6EjOz48Khb0exLvMz%2B86w0rdHMEN3AbfmkU1RHzi0ptarJUX%2FiIip389wsY8MP6ptscGOqUBh9p2yTC9PTyjkj1Mqt4OWVUNxT7LeAQg3cH4yQBgFRcIuwVspxX9zGMQ4Spg0GOjoOJ5okWasP%2FWONd5RNcpOu5eSd5fvHMy%2BHZdnD%2FTvW%2FOEzBtlxR23F18cMrTBmsW6neq1txxLvvp3qwKwUXDahdUuExeygDeuTgkN2Hy4yuGhs6jr5zkmd8oyfs5%2B9dpfzAXmfnxKs6mSC%2BSjO%2FVW7ejLdcZ&X-Amz-Signature=5e8247ca737e7c241e8b9d5c04884ff442551ebb2c18c3e186835bf92098f932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXET5LWO%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbQcAkT1uAM6HyLFLUpo%2FrL%2B%2FGJ3Ov8UlqyO1EwiaFqQIgB6hMFpbyiKhClbqBmEInuGuwjZkOz9SAZEgOIXiIMY4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCVoDVnJHnOGdgUwfCrcAyVIVZBPq6fhpMFZky9hv6jBu6Tbhl3Z4XU3nVkkBDPLBDn91SmBVgQdgSDfkn6%2BdVhb7oa7jjoWcBO%2BAoIAUbyFrKgJ5Nt%2FSo0jtbfPiB4HZrhTRzWrGNMlO5Q03n8ExVpBdb1706mmyyLcc5Gro19%2FGoz%2F0aUO08oOBqfWuReBM0TQ5LsdupnhreOR%2Ba6WNN0%2BL1T2mTqUnuD9rqb3bSAsDOvuZyNAZM%2Bna7rPIppiI4S%2BPRnhEFgN7OVdJJYwyZVEXY0pfCCrR2L%2BUkiyFIby7DYcFfwkHmdjITLSXnNxo5boP6yeGturFasJ3UYdUGcBi20RD7u6pxQdhGWi9cK96%2FHRBnAn6LyJoSk6SGuygXGaPiVt0c2PQpzKJCAwbL6a%2BgKOCfMxQkjZ9KXK7beWGwBZALDy0TvsavOnR9yNU4eG67%2Fl%2FQn92YPCmB1Hjjwce8xdIoMPFjcmclX73nRpwZSgJLOru6fFd0km%2BuGqsPnQSYyA%2F1ZP9OkcJODwU%2F%2Fgg6k2oqonAdYdK0o%2FgPZvOpVlMRVj4EuOZQ5W4kvvHs%2BAHBZ5x7d865%2F0nEgVrvOm3f8YmHBE%2FGobJpFUMh59O0iqwUCO%2FTxLCgTd55uGED68o8s3m%2FDTYzMoMLWqtscGOqUBKboNDE4EpgtrYf9S70jlgmzAb2SL%2BUj1Tcy5pdShKV5ATZyBN%2Fm8%2FeRzAhodi9iryXBmk2qfa9SYly%2BIicgTZ9LPYSI1JOyi3Sqb%2F0vGaFTEAAi8HB9U6PErlN3JIzy7D9xwzeUpZIe2exULfYRyk%2FxSaz2nB%2FAG3EEAKZxYqHXDZYirFRMxoE3ZzT136Hgqq1rD%2FEeVbuM4oPag2%2Fm77CEIhJZt&X-Amz-Signature=c1b51c95ef9dc475f128373e494590986b827be3c0b388bd14457f23736b0076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCGAVCZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwOxKENAA7D2FDK4mkkuYDg4ik7tZ0xJGS2NBK7mfL4wIhAMIayZ%2Fa%2FuUb9r2VeW%2Fey5DmbJsyRzAXDHgHE8Ix1DCnKv8DCFEQABoMNjM3NDIzMTgzODA1Igw2rF1zwcI%2BmgMXr7Yq3AOrWMQqr1zksJeH6wlIbD36PYQoV6fF%2FILUdiL0eX68eDp2iHq74LfHRD182k8LRSvwgsrQC8ENCBvynsUH%2FmMg4fdchJheFWAbh8YWDf3hc6hNul9GnaSK%2FkhCy%2FwWWwQjwcdZCRe8OIyHbJ6QhugCxpHpO2MvoypbltJD2v1QQBqMD8XrvNWCXPqK%2BrJl2FWMhZTR18ybCshmhO5s78Pnh%2F5cDibanKTRCIEKlocmwqIvwPQGK73%2Fws0tX7MXlkGSRizN5itiBsx8CerdWAz%2Bb%2By2%2BP5k5yOthg1VfcHxJMB%2FGQ56WzDrmeqkS1gZNkbHHw9xG9b6xoalF5ssmSEGqUzcpw7jhU4bQIGxzO4eHkU%2BckETc9PZywN2zMLbUZR6pp7Ts7mmmVpNBCRKtxwHyz6xSNx1NvcsMeKU9qEjX9EmSOdz1kcg2RYFfE7Els1ElYVBvuNDfK6Uy02r1L%2FzQymMT9pvHa2o3coUQZKGHpr32rb7qbPjTxZFT9dC37ivMURcTxDGZPaA8rHv3w8qA0XM8lVHN71daCfQVS0mWwOZYmO210Aw0XPndz2bjvMFebXNipwq6SDb6bVCTYbA1kno%2BNSkhNaJeeqlt3z%2BVq9vI%2BjQtwIG9v4R%2BDDXqrbHBjqkAVwavUYVp9sFlhM4SVcNp6px%2FSJZo8Ea0BF1p8C4VdDvnM%2FwvchPDokrZbzt7TBp%2F0Ldq7eOYtuDXwy8J7a9Cd15imYIB6kL6OJ8OieALBSuspAXgrz8MtFW04pZrRpZa8ZylJyGV5AL9tOiViqsrZeFns1wpRC7chM0aALGiAGUDGmfZQQZe38pL9fp%2B3uphsdKUrMqFFy8EY8WChA8cjmlowoR&X-Amz-Signature=bc84bc806f602287772a8779b109dfead209d04ec53994537c50f572cde2e3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IXHVC4%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNtHvRyJy5t%2FfgYRXofIg8vmwjTcFKx4MrnlAgf1o7iAiEA3fF2j%2BCsLW%2B955yyw6nrqRp093eBPsC3tH%2B%2B6d80ywQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLo6Xu6YzWtcRVLfbSrcA%2BKcumJnPA42f0QqC8hkoPfrwpgZ6AGG4MeUYdveQoOARlwb7oehCaiYtlvxNoS%2FdAfjcnHgYPSjBN4HGbUIAoAXSi9WE3nhlQ6iwPgaMLFCj9Ad6Q7DpYI%2FTuGdlT6uEVGMkJE6Bt%2Fx6fKd%2FpQpnwJrruF67XYpLKEdO0%2BuwnLshCCeN0HrwfHzb0gl4SRSEDWWyljD2G1IdI6uiv55%2BvYBN0bRO0xeSWFxlKfuekeCPsGy5b7N7w3Rjjvw%2BkzBGAWu5iwKrkwUJ1IN8zF0QAzPjDGZN6vnNO%2FczNRkk4QQcDdaSGnc5yROGX2nFiE0dGKsbLs0O7ddgtct9%2BVWM30%2FrkIWpqv6WVoAb8C1Ap5kHfPvHGr43AxnEStjAfTNYff3sw8YhHIHupZ7hXhIhwOTN1cWRMrJbF%2FuvYgGvwkNFSgoLyoDy3Yo%2B5ybO2C1iRY%2BquaXmpyGhar%2BW2qcfYL7kQw7NaVh0EkGJisL4HRuoU9zXSNIS9IPlzpYMH5NYJHvMLonXYN5EIcHwO%2Fep3O7bQJrtREQI6JnQzkOCfaV%2FlCIXnnFb9Jexf98DzIa6EjOz48Khb0exLvMz%2B86w0rdHMEN3AbfmkU1RHzi0ptarJUX%2FiIip389wsY8MP6ptscGOqUBh9p2yTC9PTyjkj1Mqt4OWVUNxT7LeAQg3cH4yQBgFRcIuwVspxX9zGMQ4Spg0GOjoOJ5okWasP%2FWONd5RNcpOu5eSd5fvHMy%2BHZdnD%2FTvW%2FOEzBtlxR23F18cMrTBmsW6neq1txxLvvp3qwKwUXDahdUuExeygDeuTgkN2Hy4yuGhs6jr5zkmd8oyfs5%2B9dpfzAXmfnxKs6mSC%2BSjO%2FVW7ejLdcZ&X-Amz-Signature=c40da1bd30e485f08dc6cf2304ed8c69b586dac0084648f868c3baa68fe9bcee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
