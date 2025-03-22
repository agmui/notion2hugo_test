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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFPZNB7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD1r8ukevFbLrVeKQc71%2BwM78muBXNA%2BUQFlttU4r81MgIgOY9tG2ScbJI6XE%2Fc9hsP2%2BU0sxigxxbT13VZrsIIHsAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzAwHvdT%2BtxMQt7xSrcAzzmby6hLkued4NEh36TOEJ8xk%2BcsC1QhI%2Frc9x7yMVawGs0dk96T%2BgvNuytbdQ8590eEed5%2BO9UN5zbJ9zzJMgoiP81nBQTfdBAJjZdEyhfdydqYqYLSHn%2FDLhYkm9gFunaKOXIg4YAhccriY8GZVnpNTwF%2BXDVdVjQTn%2FOKuzSNysuRjBhk6CYQdc610YJwMsTtFD06ec9R8DzomBEGXy6cZt0SfAcWerRaLdFKOvBbXIVdLIq2duscKtYtfdPm%2B8GzdIMTUwEUAuOFCJGwRwyLcDncWb%2BlnhTe7Xl%2Bz82uV3O%2B6PzP5kMiO1lw7B3PkWEeBcDZ86ZdVwZ%2FaLhVEGtRlumUDoPUP5YuubGhbQ3kgPHj8mqL4%2FsuuS%2B6i8b3wHhorQpgOM%2FLAWSFJ8BIRUTvFYGs3HVNznJ18xoghNFKakLm5dWJ%2FAcI%2F64DS4EYu7uWNjFVC6KBJDOuHne7dbrWaua4Gxhdntll5GuFSB0ezAIiYGYovZgKTvYL807uVcjq6yrjP%2BeX6YT9oqmso9%2B5Gw%2B9K%2ByjGp2HMkvYLNre46DbSyNPF2L%2Fae0hxVB0hMc%2BAegu44HbzWQ8KpV2r5YO3vUkSFWa0ioxT7nCYc1tW2%2Bivz0X%2Fji6K9QMMSK%2Bb4GOqUBuuVs%2BXb1dCAhOeH%2B4LcEXwdn4kO17bgpx2Q5Ve8GKiFvRr8Dt1U7IQ%2BqRgtlPuFWHrgKErIN7w%2FVhiSv4eZTE6E0ZaTIjZX3xAJ9fFz4UHjl9UiCInxG3DLPF7Urs%2BAqnczITW4%2FiiRdLedgTnoQCWLzK78NTC3SLe1nSeLXXJEvAg2zCEDh7kkQ4iNoq%2FLFSphfGDUaAW1YKVlAl1uiEGxzVGww&X-Amz-Signature=c2299316b4755bbad8df2264f0eef7e1187752ceddd5a5d7e35d620702f3cd43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFPZNB7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD1r8ukevFbLrVeKQc71%2BwM78muBXNA%2BUQFlttU4r81MgIgOY9tG2ScbJI6XE%2Fc9hsP2%2BU0sxigxxbT13VZrsIIHsAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzAwHvdT%2BtxMQt7xSrcAzzmby6hLkued4NEh36TOEJ8xk%2BcsC1QhI%2Frc9x7yMVawGs0dk96T%2BgvNuytbdQ8590eEed5%2BO9UN5zbJ9zzJMgoiP81nBQTfdBAJjZdEyhfdydqYqYLSHn%2FDLhYkm9gFunaKOXIg4YAhccriY8GZVnpNTwF%2BXDVdVjQTn%2FOKuzSNysuRjBhk6CYQdc610YJwMsTtFD06ec9R8DzomBEGXy6cZt0SfAcWerRaLdFKOvBbXIVdLIq2duscKtYtfdPm%2B8GzdIMTUwEUAuOFCJGwRwyLcDncWb%2BlnhTe7Xl%2Bz82uV3O%2B6PzP5kMiO1lw7B3PkWEeBcDZ86ZdVwZ%2FaLhVEGtRlumUDoPUP5YuubGhbQ3kgPHj8mqL4%2FsuuS%2B6i8b3wHhorQpgOM%2FLAWSFJ8BIRUTvFYGs3HVNznJ18xoghNFKakLm5dWJ%2FAcI%2F64DS4EYu7uWNjFVC6KBJDOuHne7dbrWaua4Gxhdntll5GuFSB0ezAIiYGYovZgKTvYL807uVcjq6yrjP%2BeX6YT9oqmso9%2B5Gw%2B9K%2ByjGp2HMkvYLNre46DbSyNPF2L%2Fae0hxVB0hMc%2BAegu44HbzWQ8KpV2r5YO3vUkSFWa0ioxT7nCYc1tW2%2Bivz0X%2Fji6K9QMMSK%2Bb4GOqUBuuVs%2BXb1dCAhOeH%2B4LcEXwdn4kO17bgpx2Q5Ve8GKiFvRr8Dt1U7IQ%2BqRgtlPuFWHrgKErIN7w%2FVhiSv4eZTE6E0ZaTIjZX3xAJ9fFz4UHjl9UiCInxG3DLPF7Urs%2BAqnczITW4%2FiiRdLedgTnoQCWLzK78NTC3SLe1nSeLXXJEvAg2zCEDh7kkQ4iNoq%2FLFSphfGDUaAW1YKVlAl1uiEGxzVGww&X-Amz-Signature=726ff9c076b74a6f01addb826e032bb1660333e3201c99c45495e2937bb17635&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUQJEP7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDuJ%2Bh5OIU%2FNA5%2B6zdsshaH6lY0cknTAoNa2WeSytRfgAIhAOy6e8XDA9m9I%2FMhmgoqWnUyd%2BDQaLvySQkz7US1yaM6KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyshk7ww5C1Zb13L%2FEq3AMuumceBil%2B%2B4TF72uoqtPFyRNOCtdOhstk6HC5dUd8aXcC5yfeE0j2l1qnna1rbimYIRh8AxYf41UkKdHRh31gxtX5Xxc%2Fa42T4%2FWSLeBWiwHJ4MShQ%2F11RLI%2FU27CV%2BaN4H%2FT3gc8m0m9Vt3e37DjKGHcsdGJWiaSUxHR2H9WR4nDA7iU27fdAbPPIjCxPwpzpfd7WSLagLD%2B0hrVi6eW1guPkIk9qjGur79eE0v1WYyI5klW3FrKpBzGQr43h4EIh99RS4jIvbK%2FaXhRdB4JuTCojjvMTNL2kCVNM33B8LwzpzM6E%2FMaQ0tsK4DRgC8QCfWvPlNIavclBDEZjWvfMCR9fE5rOmaICWGpZp83PytJyc%2B9eEIVnS8h7hsuq4ldHUBbb%2BepsCBwDqRebqiuE4PmwUON9sTLmNh2F%2FHUU%2BqwopLHNYAAz2T%2FpqrE7mDYIgrnjKfY6lEnx5kiBki94tAbcLrn5XwAOuEyFuNAIh%2BqvRKspBLBWWCINDXeAe7thGHHRVKrCmAY3tizr9pjkDpx5akGz5ev%2Bx3YTQknLjyts%2BTxxLtaAXoBamcBo2vqKfGBg6%2Bo4PrC1t1y8m0nN8ZAu%2B0WCoCTtOltIGPMLHKjf7nRn5JkB%2BxcaTDUivm%2BBjqkAZ9uR0Ut4tj%2Fp48u3bFxqmxm3bnfyhFgsVzId5%2FO0%2FF38Z7muFDLiCf%2Fr2FpmS5URpI0aJy8rZ4VgP8%2FAbay0e8VccrFwaQtbmOQvitlp%2BsiJMQ657MHCK74G%2BgQ028qmcKqi1Ej%2F7zlO4zZcz04wFbaFh7us9BEkBCOs%2B%2F1SD7XoBeiFgMBpIWk%2B%2F6QhQcEBZzKNJBm2VKxkkO2eiPDRVV5ULRg&X-Amz-Signature=9d078df51c2bf688b101b485dc54c0b6d19c2b725404b947c8be6d6f4c1a0f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2B66NX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFIdtQDcgIaj289JihnjWDVvcrIcH4PKMTedrkCwt7k2AiBWiGmZce%2BY0zypD2cqZ%2BV%2FhSNkT96%2F5UK%2FTYOytrnV2yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjtChvguhgD2jB7fKKtwDoXBm0z0mQbgMRQ6%2BZOxZ%2FiUsjP0X%2F%2Fg79mBbiaPXvTmYS1YNAN2DrKWXPk6JEjbaIBu3bgqHiuX319IzFToPLIAGXbfRYvSfWpcRhtoaj22kmgVLkPYTneT7x2OSpfp959r36q8OiK%2F8h5ane3vWi93IntpgCIKDfsPlxs8KxJD100zuySPxQ5fzTSyKoouNy2xtTiA1Tf6bnXw57e7wiqZLYvBV8CNaMjcWUI0%2FjaN2kV5oURnuE89xlfdm3q9QbatEPc6bmIDhii%2BORhI%2BZBZr4fWdu38f1ZFfW1QS9xv8SZGUbUEPTlkLc4hfwAQ0KvkmENWnqJOqSEEm6UBKyZOzlPBgefLFn5uNa2rIkPuUE5PbZX6YAmvj%2B6D89F3LmevSDyaY%2FK01FFu%2B1VHe8b5PB9pvne2SeKewl5fx6VX8KTDSsg%2BseCe%2BV9cRjA%2BUXE8PYq8aNIA5pcAnNYGF%2BsC9aN1Yg57mRrKg0JogMoySEenK%2FjbiB0oVkaawMJ8uJXBY3iT0oQRlbN%2BWux4tgtrM0Yyru%2BNsqw3TWZJzK2MhspbYFGUFXwM2PdQLUMsNeY3UsZABpNp78QHhX9Yr%2FSov3sRdYCXtTFd2l6p3mjy6WDeBiXWbnfN9vJ8woYv5vgY6pgFYCRJFIHmXaDCgWgE16mIdU4g4xzP532VP%2BkOlKbBKslEyQcWI2wrM8R%2B4ppF%2FU7Q7a%2FhkpqsKitJsPsplvA73btlhO9WLnEGP8Cjg%2FnTZKQHny4ZcMAePBNvmS9wsnDK6BtB5GNS3ALZtcMVRYxH4ow7jeCwtKW2BWAUvEtQQTuC15EAIb5ePUE8C4ON%2F5gJTg3XsN9a1dieJ3YwvnsCBz4jzTw8j&X-Amz-Signature=3656152dbaecd4912c58e9ff9c11ad6d7bfdb4de0fd4800533d00347d21017bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFPZNB7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD1r8ukevFbLrVeKQc71%2BwM78muBXNA%2BUQFlttU4r81MgIgOY9tG2ScbJI6XE%2Fc9hsP2%2BU0sxigxxbT13VZrsIIHsAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzAwHvdT%2BtxMQt7xSrcAzzmby6hLkued4NEh36TOEJ8xk%2BcsC1QhI%2Frc9x7yMVawGs0dk96T%2BgvNuytbdQ8590eEed5%2BO9UN5zbJ9zzJMgoiP81nBQTfdBAJjZdEyhfdydqYqYLSHn%2FDLhYkm9gFunaKOXIg4YAhccriY8GZVnpNTwF%2BXDVdVjQTn%2FOKuzSNysuRjBhk6CYQdc610YJwMsTtFD06ec9R8DzomBEGXy6cZt0SfAcWerRaLdFKOvBbXIVdLIq2duscKtYtfdPm%2B8GzdIMTUwEUAuOFCJGwRwyLcDncWb%2BlnhTe7Xl%2Bz82uV3O%2B6PzP5kMiO1lw7B3PkWEeBcDZ86ZdVwZ%2FaLhVEGtRlumUDoPUP5YuubGhbQ3kgPHj8mqL4%2FsuuS%2B6i8b3wHhorQpgOM%2FLAWSFJ8BIRUTvFYGs3HVNznJ18xoghNFKakLm5dWJ%2FAcI%2F64DS4EYu7uWNjFVC6KBJDOuHne7dbrWaua4Gxhdntll5GuFSB0ezAIiYGYovZgKTvYL807uVcjq6yrjP%2BeX6YT9oqmso9%2B5Gw%2B9K%2ByjGp2HMkvYLNre46DbSyNPF2L%2Fae0hxVB0hMc%2BAegu44HbzWQ8KpV2r5YO3vUkSFWa0ioxT7nCYc1tW2%2Bivz0X%2Fji6K9QMMSK%2Bb4GOqUBuuVs%2BXb1dCAhOeH%2B4LcEXwdn4kO17bgpx2Q5Ve8GKiFvRr8Dt1U7IQ%2BqRgtlPuFWHrgKErIN7w%2FVhiSv4eZTE6E0ZaTIjZX3xAJ9fFz4UHjl9UiCInxG3DLPF7Urs%2BAqnczITW4%2FiiRdLedgTnoQCWLzK78NTC3SLe1nSeLXXJEvAg2zCEDh7kkQ4iNoq%2FLFSphfGDUaAW1YKVlAl1uiEGxzVGww&X-Amz-Signature=202d0f338149ae62086ee4f569a52403afbce10b0ce1ac4c8271d929258e40f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
