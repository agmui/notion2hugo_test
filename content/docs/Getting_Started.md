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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKQPJ2V%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFMhRkHHbGtquHTrDE1NI1fx%2BafAOgovvExIkGKtduljAiEAyQ%2FofB6Ew%2FArKjCgylepL9R0vhvfFiRjahge2pCKvUQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4VsQitz4WmpB9%2FOSrcA8bKLwqV02W1AKaCuniKOvqd5XjD15pD06KwusdSYRsF8seBqMCEisLmSTYU4d3pVlikTqVd12Wb79Xh9iUdLGp15QS8pKTtr8YYtkwnko5Q7Vk%2BcZuV1VsgJL7lxoak3k%2FEkoytUy6FpmDi3F5e1QLsU3qcUIydYdXaHd60WIF6BBqfShBW7fHKz12eX49KxjSEvhfhkS8LuUlFQP%2F9jgbt8NvSKsRPUN6odqnBXHQAorHw15O6%2Fj8i1MmZyQ17OiUBdqLX%2BtjoDEPkeV%2BR9F1GVUpYEaCTopdxCoqUEXdLrl2aCNv4uyRuusk76olo1cWnsdLG4mvvSDDJbNKzlrID2puSWOTOE0BKj7lniWAHQfr1VjLmpxtfPZh%2FTCYjeb6Ce6oo7LbFjpZQyLaQicnoKVHTwWPeHv2Tlg5GfHCGzVBgXa5i8e5k4L0Be9hbGEY1hRNMWOu0VuwMA4AZk5yYZrudPfr68L5ZPBjZzTUFmeKthMR8jbUdGHVOYCqgzc%2BnuBQRRBh7nxIcTkdDASj2EwXsWgopl1HVrr%2Fae2L3W9f03ajgiBkBGzO9LSsKMApanui1xbVkjt3ZROI4%2Bj59ETe08sddAwKEvtkArAimMIcewE6Opi3ieRt1MJmLs78GOqUBVXn1sXYzh1pfFylFLYoASbKA7KN92DUDjjNsV2C1G9q0Eq7%2FyEen0gOlS2WGuK%2BxFYsbi%2B3OdkdC4rzsqkCCxEigPendct6WZbmspMFAW2qNlslePfmabQa%2FPzCX%2Bbtc4zwRVYMsI9DA%2BgtInFr1b37DX9t7D5Pjwl20TvqOfM3ZI8dahfJ0LcUBchmu3yrVeRO9N5eI2hF5vH2SWUs53%2FheRuW3&X-Amz-Signature=9b5044ad394a1ca95459058f36538e0a04970a6c116302c48fcc886dfe5ceada&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKQPJ2V%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFMhRkHHbGtquHTrDE1NI1fx%2BafAOgovvExIkGKtduljAiEAyQ%2FofB6Ew%2FArKjCgylepL9R0vhvfFiRjahge2pCKvUQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4VsQitz4WmpB9%2FOSrcA8bKLwqV02W1AKaCuniKOvqd5XjD15pD06KwusdSYRsF8seBqMCEisLmSTYU4d3pVlikTqVd12Wb79Xh9iUdLGp15QS8pKTtr8YYtkwnko5Q7Vk%2BcZuV1VsgJL7lxoak3k%2FEkoytUy6FpmDi3F5e1QLsU3qcUIydYdXaHd60WIF6BBqfShBW7fHKz12eX49KxjSEvhfhkS8LuUlFQP%2F9jgbt8NvSKsRPUN6odqnBXHQAorHw15O6%2Fj8i1MmZyQ17OiUBdqLX%2BtjoDEPkeV%2BR9F1GVUpYEaCTopdxCoqUEXdLrl2aCNv4uyRuusk76olo1cWnsdLG4mvvSDDJbNKzlrID2puSWOTOE0BKj7lniWAHQfr1VjLmpxtfPZh%2FTCYjeb6Ce6oo7LbFjpZQyLaQicnoKVHTwWPeHv2Tlg5GfHCGzVBgXa5i8e5k4L0Be9hbGEY1hRNMWOu0VuwMA4AZk5yYZrudPfr68L5ZPBjZzTUFmeKthMR8jbUdGHVOYCqgzc%2BnuBQRRBh7nxIcTkdDASj2EwXsWgopl1HVrr%2Fae2L3W9f03ajgiBkBGzO9LSsKMApanui1xbVkjt3ZROI4%2Bj59ETe08sddAwKEvtkArAimMIcewE6Opi3ieRt1MJmLs78GOqUBVXn1sXYzh1pfFylFLYoASbKA7KN92DUDjjNsV2C1G9q0Eq7%2FyEen0gOlS2WGuK%2BxFYsbi%2B3OdkdC4rzsqkCCxEigPendct6WZbmspMFAW2qNlslePfmabQa%2FPzCX%2Bbtc4zwRVYMsI9DA%2BgtInFr1b37DX9t7D5Pjwl20TvqOfM3ZI8dahfJ0LcUBchmu3yrVeRO9N5eI2hF5vH2SWUs53%2FheRuW3&X-Amz-Signature=926756978a5b2d497777fac266c63b986644130cb1a5cd97c8655db42180ee04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBGUSRD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBRGY6qCNqXoztMb%2FkXAfI06qkdqgDI77pXPCMvC8%2BmJAiBLIvoQJx8V6M2ycP3wz3SbXWujyYsPx83%2FMxCJJqRDACqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFvfKuLUAztspgmPEKtwD7gT%2BCOZbttyDpPFNCyHINCgOW2q82ImBlukgE4JFFvZcVeF1MhpFDB%2F1rAua6qK5n278oXNKUl6zs3AEEdnHyfT2UMfbmfZp6nWflLUYzx%2B0bbsfKyRmK7EKf7WZobs8VYVWxhEGiggqaQvycknkLIEm1VYkXtl5TILSy6zE8r94z%2FzkAPSSUSGvmkdBQi6CbWTi%2FVLB8ca2z6%2FQzx6aRYM6AcisL4eszIqKw8XSkTNVvni3oesr7VNDenN%2FBWDgl4P0zq63TGY%2FkQVm8EYqukJbtaGnhBXix7DK0H0Y71wZCrXQmXEAh3f3hoMTuyDilBeaIK5lMKY3enpGLnRxrkumvEMjOAcBjVZiPG2blV31hfp6F4T9tdaeH3iOVVJ4HHqKVaXrJKNbECxE5Db73g0tSj5JzcBatcV0rpAiiQm%2B7gZTM%2F%2B4NjMwLNBK3n3sLU%2F48RfqsYSXjdzcGpDHHNYAYTbd6NPGCORTiIRgLhPwD6AEF6uvpGxKqCcVJoFoSICdiTBeugArL5uTa7yMAMNNftMKrWi6M3%2FiseUK%2BMez7zMYEqOMhvZeB3EJaStqjOLycSfwidTeGoEFQZZ5eAazqHMQzD2mOEd%2BZkvJ%2BvoofhnYCNaEZH9BWx8wqouzvwY6pgHih8gnX4OBzaKunMMWLXY9m%2B0%2Foi2W2Pa0oWO5Im0isvtV9UY%2FOm1RmLx3TPQ5ZdvXOG7JDoXNj98WLCZtcQt4hfnrIKuOkCn81nwFR0yMUCJ1uZ%2FQNu23xogmUND1K0PfB8viwl%2Bdp64uHDanzypG66ONv4alSNXF8Zsw6bgHUqXTmkGplsvoWkKAXD8Y2MP0fKYPo3bK0g8Wdsm9MkY90oXhYT3s&X-Amz-Signature=6b948ceccf19f25024759fd0f4862c0678e010b7deaa1a1b07280b660a00c88f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4OHGH2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD0BmcvLwQd6ePdBfcHImH9fn3DzfokjbMZdXeHALQYwQIgRl765DiKk0IvA2%2BkTFl6odV0k6c2nlx0o7DDzPeV%2FN4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLtPow8SCXVr4%2B1mCrcA3MNYDvy9vlX1rf0mtkMLZAxwiGENGftCXRp%2BJklcFdKheE9TOrZOtTFSunsoN2sa8kShGPOuEkpmve%2B7cDMv67YD%2FZ%2F4qm1eOYGbh5swrQq50V0kL2vY%2BnqhUdtJzPI99ewgP7ae1nlHZq1rclGkhBgM8cNlt4lbTCcVM5B1eNglP7Wtmvyni97aH4rXKL%2FIN4hMqF3mUhNo7hvghjG43BFL2E2hm8p8QCU2LpeStncS4GYo6vqnq0LlxAzajOGA3Oc%2FFm%2Bqjni0%2BoDndIMbZXrPa1ZDpgsWMHYlQa4Tmg4kQj74gAWmMUmCbO2Kyr4aQ6CUupzu%2BZuPi0SF2lLw7pSH2T5G%2FcPRvrqQNBK2wBpkb%2F4lD4aJewbQKNqJzkunireujoANMHvy0hddm9vwxvHkOgOkd2RPTftGR8haYbe4TmCmcGtjVHA1nJV0YuLHA44dd6%2BNOqAHSGTeK40WMUEREHyZI0IrOA3FyIVDurTMmtYt4GIK8dsfSqwsWLfFOYexoSVEwsWOcDa57pdQCVQZhkb6V0e3RilAfZwQ0ZY6A6kYN2%2BhER0Qh8N34j7huM6kVyNL4RLGP%2Bqp1GetvXDFvxypHSpX5ieCK60SGEPseO7lxR5jy4T12RuMN%2BKs78GOqUB3fipE2Y4tOa%2BtuHv1C3GcdS9YeJKzVWQNBTbDScINJ0ybXt5B4oS8%2F0DMdvczuGH16uFT1hPJTUFYQqO0u%2Bni%2Bh%2Bxa48QhQL%2FBNxH%2BtlQR0ZAGErh7B%2FtjY5JKKfFOl0LcfpMgVBldpxWPNE2V5eo2AmbaTkegMG6IZx7VeTAJRwSmUXi9ckbJ4%2FFkJeRzZffhBFGWsXA0HfaqjWC1x5H7xpgcMb&X-Amz-Signature=9776fc4c9cae5fb59828af03bee7de8530ac38d1e7afbe1f08ed670f0ae675c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKQPJ2V%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFMhRkHHbGtquHTrDE1NI1fx%2BafAOgovvExIkGKtduljAiEAyQ%2FofB6Ew%2FArKjCgylepL9R0vhvfFiRjahge2pCKvUQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4VsQitz4WmpB9%2FOSrcA8bKLwqV02W1AKaCuniKOvqd5XjD15pD06KwusdSYRsF8seBqMCEisLmSTYU4d3pVlikTqVd12Wb79Xh9iUdLGp15QS8pKTtr8YYtkwnko5Q7Vk%2BcZuV1VsgJL7lxoak3k%2FEkoytUy6FpmDi3F5e1QLsU3qcUIydYdXaHd60WIF6BBqfShBW7fHKz12eX49KxjSEvhfhkS8LuUlFQP%2F9jgbt8NvSKsRPUN6odqnBXHQAorHw15O6%2Fj8i1MmZyQ17OiUBdqLX%2BtjoDEPkeV%2BR9F1GVUpYEaCTopdxCoqUEXdLrl2aCNv4uyRuusk76olo1cWnsdLG4mvvSDDJbNKzlrID2puSWOTOE0BKj7lniWAHQfr1VjLmpxtfPZh%2FTCYjeb6Ce6oo7LbFjpZQyLaQicnoKVHTwWPeHv2Tlg5GfHCGzVBgXa5i8e5k4L0Be9hbGEY1hRNMWOu0VuwMA4AZk5yYZrudPfr68L5ZPBjZzTUFmeKthMR8jbUdGHVOYCqgzc%2BnuBQRRBh7nxIcTkdDASj2EwXsWgopl1HVrr%2Fae2L3W9f03ajgiBkBGzO9LSsKMApanui1xbVkjt3ZROI4%2Bj59ETe08sddAwKEvtkArAimMIcewE6Opi3ieRt1MJmLs78GOqUBVXn1sXYzh1pfFylFLYoASbKA7KN92DUDjjNsV2C1G9q0Eq7%2FyEen0gOlS2WGuK%2BxFYsbi%2B3OdkdC4rzsqkCCxEigPendct6WZbmspMFAW2qNlslePfmabQa%2FPzCX%2Bbtc4zwRVYMsI9DA%2BgtInFr1b37DX9t7D5Pjwl20TvqOfM3ZI8dahfJ0LcUBchmu3yrVeRO9N5eI2hF5vH2SWUs53%2FheRuW3&X-Amz-Signature=e5e60d6cef0f5748f9758d31c861e739c2645ae78f501ed54e806da0790ac536&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
