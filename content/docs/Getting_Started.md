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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VDMVBQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2FbldkPfL3HbPj%2FgJxMZ5pgUzMr2KMcjJhpUWJ0w5%2BxwIgUK7cnYB2zBhRHLHvZJvsg5t1kc6Rjca4%2BbhBaYDw8O4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPIKm8W8mjiWjGiHUyrcAwOrRUZCOZz%2BhD%2B%2Bt2C9DEc8roFiL%2BfKUNBnW%2Ftmt7c7D2A8KniIKIImbT9spGJdNvcPrSbID%2BMhrdYQ3kSIu5LgkVbVGDNrI2cqmzDxdwDoGyD0zpfsVrSGK19L01BllUuiat9CT8eiZeUVyqFzrFw2ebABxgDNFxzb0zRMbqLOdVJI4TqwtfVKYoa%2F9TV%2B1D6YXUNaqzXDghTIyUFFvmWX9ibQKqhCC%2F8REbYOEv6gnd0WQ1O9EQvgfnWQqh6alxVkZbI8rS01I5GHEpi1plUIE0fmPGx0lomkRXWEaAyNDKKUHRbuxRBn70t2upKIW%2FpEw980FsowApFvxcM70o3CjtuCXp5%2F1Ccj3B7U3TGytaGFBcjlyWj9%2BAguMMJSpTuq4Kqa%2Fus%2Fb1yBHn4PqXuXYle6MRMyV3jWRZnZvObCik0aKh8Wf233Ce80ytm7XO5xA5pEy5xXAFoWmQKQW52IfKa5OxAn1t1Yl5yqcYuS9M7Bi3siGZQKWWHI9YXaDf2ca73DJgbi%2F0FNrTtUZO2umFvbCtLdh3Y4vF7c4D%2BYLxGdJwA44LvFv6TylyOJ%2Bpr4%2FKxoo%2F9VaJfdD0DosX9Eo58Zas263S4RWbwWLacxksPKF2E1xaZnK9blMLqPisQGOqUB9P05GaknDLtirRWH%2FYAuxySr47SRCtEGru3mPJAVhiMQb0fYrmmLhyW9Hjh5%2FaJvzNgppAwqoMAFaMIpjdyEeLM5W%2B4eeobL1U35VrVAsU0iy9Hc8IuK1lZbCEzu%2BMIYa%2FdRZ69afG7Ja9GKGmNvvdl1nZthsa3M4LDgLJCh%2F3ZxSBB%2FPF8QWtZiYxzW%2BLA6FEW4YIw8eebdF%2FxldcObV8bpMDWe&X-Amz-Signature=42ce7953705c77db7c974500aef8ebf2f6df0e02d7a4a0a4f88e3671c6bb8d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VDMVBQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2FbldkPfL3HbPj%2FgJxMZ5pgUzMr2KMcjJhpUWJ0w5%2BxwIgUK7cnYB2zBhRHLHvZJvsg5t1kc6Rjca4%2BbhBaYDw8O4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPIKm8W8mjiWjGiHUyrcAwOrRUZCOZz%2BhD%2B%2Bt2C9DEc8roFiL%2BfKUNBnW%2Ftmt7c7D2A8KniIKIImbT9spGJdNvcPrSbID%2BMhrdYQ3kSIu5LgkVbVGDNrI2cqmzDxdwDoGyD0zpfsVrSGK19L01BllUuiat9CT8eiZeUVyqFzrFw2ebABxgDNFxzb0zRMbqLOdVJI4TqwtfVKYoa%2F9TV%2B1D6YXUNaqzXDghTIyUFFvmWX9ibQKqhCC%2F8REbYOEv6gnd0WQ1O9EQvgfnWQqh6alxVkZbI8rS01I5GHEpi1plUIE0fmPGx0lomkRXWEaAyNDKKUHRbuxRBn70t2upKIW%2FpEw980FsowApFvxcM70o3CjtuCXp5%2F1Ccj3B7U3TGytaGFBcjlyWj9%2BAguMMJSpTuq4Kqa%2Fus%2Fb1yBHn4PqXuXYle6MRMyV3jWRZnZvObCik0aKh8Wf233Ce80ytm7XO5xA5pEy5xXAFoWmQKQW52IfKa5OxAn1t1Yl5yqcYuS9M7Bi3siGZQKWWHI9YXaDf2ca73DJgbi%2F0FNrTtUZO2umFvbCtLdh3Y4vF7c4D%2BYLxGdJwA44LvFv6TylyOJ%2Bpr4%2FKxoo%2F9VaJfdD0DosX9Eo58Zas263S4RWbwWLacxksPKF2E1xaZnK9blMLqPisQGOqUB9P05GaknDLtirRWH%2FYAuxySr47SRCtEGru3mPJAVhiMQb0fYrmmLhyW9Hjh5%2FaJvzNgppAwqoMAFaMIpjdyEeLM5W%2B4eeobL1U35VrVAsU0iy9Hc8IuK1lZbCEzu%2BMIYa%2FdRZ69afG7Ja9GKGmNvvdl1nZthsa3M4LDgLJCh%2F3ZxSBB%2FPF8QWtZiYxzW%2BLA6FEW4YIw8eebdF%2FxldcObV8bpMDWe&X-Amz-Signature=cdd6ecc31462fe07fe973160c3f11ac914f5ea06281670ca3723c13d728c6a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VDMVBQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2FbldkPfL3HbPj%2FgJxMZ5pgUzMr2KMcjJhpUWJ0w5%2BxwIgUK7cnYB2zBhRHLHvZJvsg5t1kc6Rjca4%2BbhBaYDw8O4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPIKm8W8mjiWjGiHUyrcAwOrRUZCOZz%2BhD%2B%2Bt2C9DEc8roFiL%2BfKUNBnW%2Ftmt7c7D2A8KniIKIImbT9spGJdNvcPrSbID%2BMhrdYQ3kSIu5LgkVbVGDNrI2cqmzDxdwDoGyD0zpfsVrSGK19L01BllUuiat9CT8eiZeUVyqFzrFw2ebABxgDNFxzb0zRMbqLOdVJI4TqwtfVKYoa%2F9TV%2B1D6YXUNaqzXDghTIyUFFvmWX9ibQKqhCC%2F8REbYOEv6gnd0WQ1O9EQvgfnWQqh6alxVkZbI8rS01I5GHEpi1plUIE0fmPGx0lomkRXWEaAyNDKKUHRbuxRBn70t2upKIW%2FpEw980FsowApFvxcM70o3CjtuCXp5%2F1Ccj3B7U3TGytaGFBcjlyWj9%2BAguMMJSpTuq4Kqa%2Fus%2Fb1yBHn4PqXuXYle6MRMyV3jWRZnZvObCik0aKh8Wf233Ce80ytm7XO5xA5pEy5xXAFoWmQKQW52IfKa5OxAn1t1Yl5yqcYuS9M7Bi3siGZQKWWHI9YXaDf2ca73DJgbi%2F0FNrTtUZO2umFvbCtLdh3Y4vF7c4D%2BYLxGdJwA44LvFv6TylyOJ%2Bpr4%2FKxoo%2F9VaJfdD0DosX9Eo58Zas263S4RWbwWLacxksPKF2E1xaZnK9blMLqPisQGOqUB9P05GaknDLtirRWH%2FYAuxySr47SRCtEGru3mPJAVhiMQb0fYrmmLhyW9Hjh5%2FaJvzNgppAwqoMAFaMIpjdyEeLM5W%2B4eeobL1U35VrVAsU0iy9Hc8IuK1lZbCEzu%2BMIYa%2FdRZ69afG7Ja9GKGmNvvdl1nZthsa3M4LDgLJCh%2F3ZxSBB%2FPF8QWtZiYxzW%2BLA6FEW4YIw8eebdF%2FxldcObV8bpMDWe&X-Amz-Signature=903dc88652efc111fe750f8904233e39ea3746617aaf564acc7c46f95d2e1096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IV2KHCX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGHwrKBr96gFzzZKflEfmCY7qzSLvmYPOFbz%2BgaRBiG6AiBEdyMa4V3%2B44vb0fM%2BxGTd3VDXkI4Q1MuGgTc0Wb8GYyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMl7FvAeLqK1sNwBNJKtwDQAAqEiO0y56XMdT4uYIAMap1yyFMuwQQOueDxEifbtVBouQEJVWmtt0A7jt%2BVfoUYRv8j6awU%2BpO6Bm2OxLF8yAZRKG1sBnaor14Lg2Jm42tmyDVeWjsRvsodwYmvMYvi1QzOI95CgEjg2nMFTUga6n3Uia0jdGQL3bj4Z6ZvWU1NGlttHkU5benlZ7zE%2F1hsW6erAWmClNwCS%2FCj1Jaqz81uNkoJGxj%2F4SmfPNx%2BxPlvVZj7grzAVsuvunx60%2B5XOvCirApJSEvAnpNyj9sRsiQCC6lgTl79C3%2Bs55mbI54w9%2FUFSwk8DOh4O6Qibvtd5NqVzCZ9JLpmmoNg2Ut0uXxU8eXobgffVcv4CYnIOuhwRVcfrbc3SMZMB%2FhpQtqmexSOaAbAM0451O%2FUeo9YJk2xrTsIDdsjezrU2PnxUoiK2x0jrTqBmCeZzw9QmeuSl%2BZSMgzV76HsATKBFidPw1bCLLxokyF%2BiJd3NUcFAEW2L%2FDhkKyDZWNRrT2V6Ezwmybs8%2FxyZPu4xLzvOcFHZVsPBu7ApWhY1LMVtr6CvVzDYVM5ggKMvlG%2F6S9z%2FiyfYFDaoZWzTsGkme8bIcCoUhrMJNd5dhtPCmvewEroiCk82mEp0w3peefyA0wn4%2BKxAY6pgHmHsGdlrKmUMhXTbNNyXT0Ru9yZ28H%2Bk6Ys1EZzsFZp9YNbd%2BaoWTIyGVi67f8GbVYDfgW9EaLeO%2F%2Be52fGmpO2lZdw1n7BxH7UCRTG2eA6yVng6hcxfvNs7Lcy6Rv6jkS%2F0AOmKlBxH%2FysnMiNA3%2FDYt1pFGJ1xZ88N6NxeUCYjsCNExPK4Rl%2FDpZb8Ys7ZhBwVihHP8LP%2FP%2B0OoHeivsQZ4hNYqq&X-Amz-Signature=0a0bd74fc63cc09189ddfc63d44c767471dae324e2fe4f506b38462129edfc8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXWXJV6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICvPQtZ%2F3JEST6bAFRghmRqYfTON4sYrjx2ThCRuq%2BpzAiEA0LHM2xd%2FJw2Pqb1XPI2us5Xuhb7H60mTSwweO4PIWGMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNJncMcN5p3PR%2FpR5yrcA2eklriHS1YlHZTKDqviDB2OjvUSMXSizOy3ThnDoqPT02IMTzvmOSfOcrrpVphiVPpbKwlKCcoXgFtQWCuhaoxW4wm%2FDCXfElgr3Dl%2B8dAQ9u3bw%2FAwZafChpSlWLGI3GHnY26Hxb%2FE4l2TkFMSwrukIa5FqTAw3n6Beb1nfRw%2FZZz%2F69CnSa5i1a9Q5W5lftNSb8bXpNuFJFH30QHdJbIIjcQior%2FvqhCi2Apc3qiihVrYmu9Pm%2BNLXcj1msFA2VJszG9VAyaGe%2Bgm5BvWBiyejIbzTcJhjs8fLxYbZoZzVIOIJOmcLobdqb5svBnJv8JlXGep0OxbLDOvzIBiOkUg9i7lTxMS8SxoeLqQEBLuo09iTCc90h0W61N8arPpsRBWQUXVDl%2BiAHH96xFKtZFblZ42ZwtyWlW8gfiM%2F4LT7UAnvCjpBq%2BcjH1%2FRzWs2SVK0juPXuJMm47%2FtPWBrHHTXBWgWMPvjisYtvn1Vfmv3xYWHVMGwSWCshtfwoNmDiXdHMEwfmH0WNn7QqsG0RT9MiKYk8HkpKJjCilr2STUNah6Yu2izOfutkjubYZxRJyNoKg3PZcNjO2GBqfw5o%2Bo1lax7Dy%2F7IrOpYCAaP2qQoVBtdUmSQU%2FEurHMKCQisQGOqUBDUZrHzt%2FmyB1v7Z6gKnN2Wz5SwxEALMI%2BfoINQ%2BabuxmUYBetjxtQs9lPeKFUdyAQCG7ZIqVkqAe%2FK0%2B%2FstItWwUq670jwPbFDim4RnmYhWeR40N5Sg1j1s%2B9E47BduoJweL2D8gvQQQZIX4ADAFAHvNdliznhSTm9%2BG35g8c36BCFfnz%2FADFkJlb5EduBY8xJ0JJrVFFYgT2mb0wi2k7gE%2FpzYd&X-Amz-Signature=89de50a17e49341c1bbc97997e66435d80ba5b9d53472c23f7badc772114b507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VDMVBQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2FbldkPfL3HbPj%2FgJxMZ5pgUzMr2KMcjJhpUWJ0w5%2BxwIgUK7cnYB2zBhRHLHvZJvsg5t1kc6Rjca4%2BbhBaYDw8O4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPIKm8W8mjiWjGiHUyrcAwOrRUZCOZz%2BhD%2B%2Bt2C9DEc8roFiL%2BfKUNBnW%2Ftmt7c7D2A8KniIKIImbT9spGJdNvcPrSbID%2BMhrdYQ3kSIu5LgkVbVGDNrI2cqmzDxdwDoGyD0zpfsVrSGK19L01BllUuiat9CT8eiZeUVyqFzrFw2ebABxgDNFxzb0zRMbqLOdVJI4TqwtfVKYoa%2F9TV%2B1D6YXUNaqzXDghTIyUFFvmWX9ibQKqhCC%2F8REbYOEv6gnd0WQ1O9EQvgfnWQqh6alxVkZbI8rS01I5GHEpi1plUIE0fmPGx0lomkRXWEaAyNDKKUHRbuxRBn70t2upKIW%2FpEw980FsowApFvxcM70o3CjtuCXp5%2F1Ccj3B7U3TGytaGFBcjlyWj9%2BAguMMJSpTuq4Kqa%2Fus%2Fb1yBHn4PqXuXYle6MRMyV3jWRZnZvObCik0aKh8Wf233Ce80ytm7XO5xA5pEy5xXAFoWmQKQW52IfKa5OxAn1t1Yl5yqcYuS9M7Bi3siGZQKWWHI9YXaDf2ca73DJgbi%2F0FNrTtUZO2umFvbCtLdh3Y4vF7c4D%2BYLxGdJwA44LvFv6TylyOJ%2Bpr4%2FKxoo%2F9VaJfdD0DosX9Eo58Zas263S4RWbwWLacxksPKF2E1xaZnK9blMLqPisQGOqUB9P05GaknDLtirRWH%2FYAuxySr47SRCtEGru3mPJAVhiMQb0fYrmmLhyW9Hjh5%2FaJvzNgppAwqoMAFaMIpjdyEeLM5W%2B4eeobL1U35VrVAsU0iy9Hc8IuK1lZbCEzu%2BMIYa%2FdRZ69afG7Ja9GKGmNvvdl1nZthsa3M4LDgLJCh%2F3ZxSBB%2FPF8QWtZiYxzW%2BLA6FEW4YIw8eebdF%2FxldcObV8bpMDWe&X-Amz-Signature=0f7d2e8c0f9b0aad8ed32a9bef72860fb85ab838723297e76f486009a7e9f577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
