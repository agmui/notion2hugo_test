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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL5ONER%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBgxHBfORI7BA4HBg4EEKhNqQelPV4w9KX8CmT4feFWMAiEA1NO%2Fv%2BX2jD9uulB9afqmpaKPqyb%2B0ej9difHqWKxrTIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMbcd4M5PIuMXp7NVCrcA%2BIg%2BuI5wYJr6GT9TcP2DCpVF8fqxjwKeF1v7rQR%2Fn%2Bn0X5U7J3elFyGpMLi3CFiCAQoID9HlExYgs%2BMtoSNyZevJuhrTg9lHGZZJ79mvi7rg6TYuQw1KdbaK4qgCgB7EFel2yUTFWviSDciTQL%2FSU7CQ04FTtsbn1jPTT7tzyJcymyl8no486FJg3y3emKEZVumjOiRcTivmS5BybOFGWanQFMFX4uOISOyC1xPvfpXY1x4Pcxve2gjCR%2BhfUw5b1G3gyUGII4t6CDS7xOTc2b32N86CdkNiuEvsAOXlqPbXWpl4zs%2FRlTc5KXROPc2GmUezQ1q6Q8Cf4I%2BXZ32yy1%2BKshiyuSdbXF4jX3hDoQIIoBStmKdjzMyKV6sikIR2WRHAcXfYX9hU9H3AznJCEbX3nNXpNt0Bu6Qaodjs5fPnxLAHOLnmVI5xyXgSI7FixtqCfNulsaYlSY76OqQF7kTagaIFbmcSWgWiOu6BDpMlT0ux1qFG0XsFMpqpgo6MSOGUepTHoubVC0MzSp6e93HONJEKSa%2FMl4lx3mg5zPgzacoKSM7cG3G0ZJqHncQxX%2F58fCIg0jn7qaN%2BcfOGmsE4uFcmSSks1RN7l%2BsHxARj4R6iawET5KXJPzRMKX1w70GOqUBflOxrAPEEL%2FKLtohn45Ivrnr0aw9OMoJed1V2GtR0Gdq2WkP5s1MWyGldXCSClNEZcSyS19aQ39zmIrhUp2%2BE1GlcFII3O2DA7JsIyFeSIb5rFzQ12rlxMGQrsw3q72lqeIUieypGnnywc1ZZQMKD%2FKiSBnqFeTwqjtT0LcRv4EVc1kNBG%2B4NkpzE9v74UBm3gMlxj2Z1KWC9n5GxsXic7b2UI9l&X-Amz-Signature=a7531a9d5c05e30c6c458580d0f0ae2e7fc219cb25a14ed4731322ff91f8be25&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL5ONER%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBgxHBfORI7BA4HBg4EEKhNqQelPV4w9KX8CmT4feFWMAiEA1NO%2Fv%2BX2jD9uulB9afqmpaKPqyb%2B0ej9difHqWKxrTIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMbcd4M5PIuMXp7NVCrcA%2BIg%2BuI5wYJr6GT9TcP2DCpVF8fqxjwKeF1v7rQR%2Fn%2Bn0X5U7J3elFyGpMLi3CFiCAQoID9HlExYgs%2BMtoSNyZevJuhrTg9lHGZZJ79mvi7rg6TYuQw1KdbaK4qgCgB7EFel2yUTFWviSDciTQL%2FSU7CQ04FTtsbn1jPTT7tzyJcymyl8no486FJg3y3emKEZVumjOiRcTivmS5BybOFGWanQFMFX4uOISOyC1xPvfpXY1x4Pcxve2gjCR%2BhfUw5b1G3gyUGII4t6CDS7xOTc2b32N86CdkNiuEvsAOXlqPbXWpl4zs%2FRlTc5KXROPc2GmUezQ1q6Q8Cf4I%2BXZ32yy1%2BKshiyuSdbXF4jX3hDoQIIoBStmKdjzMyKV6sikIR2WRHAcXfYX9hU9H3AznJCEbX3nNXpNt0Bu6Qaodjs5fPnxLAHOLnmVI5xyXgSI7FixtqCfNulsaYlSY76OqQF7kTagaIFbmcSWgWiOu6BDpMlT0ux1qFG0XsFMpqpgo6MSOGUepTHoubVC0MzSp6e93HONJEKSa%2FMl4lx3mg5zPgzacoKSM7cG3G0ZJqHncQxX%2F58fCIg0jn7qaN%2BcfOGmsE4uFcmSSks1RN7l%2BsHxARj4R6iawET5KXJPzRMKX1w70GOqUBflOxrAPEEL%2FKLtohn45Ivrnr0aw9OMoJed1V2GtR0Gdq2WkP5s1MWyGldXCSClNEZcSyS19aQ39zmIrhUp2%2BE1GlcFII3O2DA7JsIyFeSIb5rFzQ12rlxMGQrsw3q72lqeIUieypGnnywc1ZZQMKD%2FKiSBnqFeTwqjtT0LcRv4EVc1kNBG%2B4NkpzE9v74UBm3gMlxj2Z1KWC9n5GxsXic7b2UI9l&X-Amz-Signature=34c42ff9c724d541c12016df40efef66a3fce54f6c1aec980c55772b334894bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFONC3V%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCehHpQs2ePmCUNrs%2F6ToedzIIMCk%2BAX37xh%2B1uN7ZexQIhAMTrolD5k%2BoVCptRoMaKk03%2FbqOWVXhmOHdkbAjp%2BI6GKv8DCE4QABoMNjM3NDIzMTgzODA1IgyqLcMmr9gB4q1LcUQq3AMHmwux3Fg7u2lU5kT%2B7%2B6j%2F3SSWy3mg1cwOfPIDSpEz2Em1aC80OsyLViOYYhItTK2hqpDgGXZ%2FOlWl41FRc6QDoIDvmtTOGMSr%2BBU3DJHCNrW8JWkx%2F2z3L86HIltUKEECyqTu4QbLY6gSXcYrUgy5puF9TG5jmesh%2FvOqjFVp3e6ven%2Fu7bL%2FdNDynpOmMFGU%2BLylwPBEr%2FUOS9gpC6VWOOMR5LnCcJKd%2BY6w121Dl9xoDQIdmdeCDjUwygWxQV5TFpIQbZbGCY8gXffTEKaxuWldYfnOKz8sS%2BeADPgBTcxl0ZRQWkrBy5Jmvnl8Ipnh2u9PFwrLIM56v2nSWfZw1N%2FbFkTsNHAQSqGymkA2xA3zBtQtqYJu46ihCh3IqHG0piVoBZK6cpJ3Eips5oxhZ617%2F6VtZzvEG6otMHyOeBNVB96DLqwqpYBg8ECFo81ZnTbecUPZFHBX1F2kso5itELVl75YdPRHHkPl8RVGrKlVWlf3whDApdKMnzgb5VYXIIcw3kBhu93hSnBRXo9iSFJFZo00M1Gmtw1mhfj6YCnnYiUFDJMEgZPvHXErkU2Mh8MmFQil95LTWXgilkasXwMcBrcjcQZzkZPVYITcrr6SNjAEwqiwhjBCjDW9cO9BjqkATS7enu46TV%2B1eD9Z5NBwA3chABNh8iFQiNFl1gVVRel2gVhtzJOlhlKxUiF8v7EFz%2BfDdy68wAr8tSkY6p01FP6uwEkZKB7UoMLZf86vWwajTtneXLPCNPm6vi4VhAhyKscqLaBrsezxV783HFRDarM%2BwcHH9yjTR43gGfuqZ%2BPcbVtNdilI3A9yzLsO6bZdrSuFqMNgpHBJzwjb%2Fw23uglia%2BH&X-Amz-Signature=e0c52c720d364f90acad5538ccef7de78bd433174f5b3e5fcb3707bb52abaa8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HY266E%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDRq39PzBXHg9ybjsOJpGkM2hAKfWl7priSoDa13LgiLQIhAKOfyTHi%2FXGK45mOaSnoPKf9LYxdp1P8I9NqQz2IcrqKKv8DCE4QABoMNjM3NDIzMTgzODA1IgxU4Nx%2FKWvrgBmxeYEq3AMu%2B%2F3DNKVmYhBR3B45K%2FNKsuO2k7flenMdsZw1A0NMW2ZjfkRHAEgJpLI31Vge4uUiRu8%2BoU7VThLETVqgs0kzZ4e1%2BNhrWA4KuUylYQ8HKlku%2F4TnlNwBPLRRWvNA0VRkyXxDssmDL3Tw6T%2F7ZgyOUvNAJTlUFtLcG8u9JnBiDJVWVm2VdHN6KuWTSTYXTgzzsemTq0JbDCtt4QQgJ2xgIbngOrHdH0F58WYzkPdU558NOTvkyafigC8sjT7akiheXW5E%2BIPlu6PsyTplxt6Gtj%2FgkUTwAZJvAmTQZPKBdn5PPpNtWx9b1iw77uT0KA82KRbx6SIWcgicGLGH%2FJTjBj3TzjLT4bGsk2AJc4DLBDhFqGo3J8Pm6ek4zqRHn2nKX1HV%2F0n0FnNSmz%2BfCs94WMW2ZMbnovyBqzprOCu9Nd209Htzn%2Brb8Tm6WiIl%2FfYyxMMhMspm9XXAotCoZTjMMa8ojSVfI8pFhcBbIO52Jqy0xzIet7LYZOJlO1WbsnSA4kImjYWsOWCmo0Atvo0MxMeR5IhdPGDH5YZ3FSsmd%2BfoBVMvI50QB8YYFo9%2FxXBtQwuUFnOntFGqzqpYE0X51V9KxwZXOFgnL%2FlDHlA1uK0yLHut4UzQUV6dEzCh9cO9BjqkAUGeUJPuMBDx5M%2FutgWIO3IssI70zLuDkk0M5MB42YX1BRRRKw6OVl02aDJa33fd4NuFI1Aa%2B2vGO9%2F1WJS85zIjucWL5eWC%2FuojoTo3bMXC4yZ0pV%2BKIAbs2c7oIWcLon50qp9YBAoTZngJmdYQm9%2BDdaV6v7NNBgBXZS%2FAR5k0DAX1uUec0AyotkP0SPy75crgyDHnWclNPoWeA%2FoWe4OcHJpP&X-Amz-Signature=a5b5a3f1d5f2fadaf2e495784fdfcee1a511ad57c8e9d2b05618f33c56367256&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JL5ONER%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBgxHBfORI7BA4HBg4EEKhNqQelPV4w9KX8CmT4feFWMAiEA1NO%2Fv%2BX2jD9uulB9afqmpaKPqyb%2B0ej9difHqWKxrTIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMbcd4M5PIuMXp7NVCrcA%2BIg%2BuI5wYJr6GT9TcP2DCpVF8fqxjwKeF1v7rQR%2Fn%2Bn0X5U7J3elFyGpMLi3CFiCAQoID9HlExYgs%2BMtoSNyZevJuhrTg9lHGZZJ79mvi7rg6TYuQw1KdbaK4qgCgB7EFel2yUTFWviSDciTQL%2FSU7CQ04FTtsbn1jPTT7tzyJcymyl8no486FJg3y3emKEZVumjOiRcTivmS5BybOFGWanQFMFX4uOISOyC1xPvfpXY1x4Pcxve2gjCR%2BhfUw5b1G3gyUGII4t6CDS7xOTc2b32N86CdkNiuEvsAOXlqPbXWpl4zs%2FRlTc5KXROPc2GmUezQ1q6Q8Cf4I%2BXZ32yy1%2BKshiyuSdbXF4jX3hDoQIIoBStmKdjzMyKV6sikIR2WRHAcXfYX9hU9H3AznJCEbX3nNXpNt0Bu6Qaodjs5fPnxLAHOLnmVI5xyXgSI7FixtqCfNulsaYlSY76OqQF7kTagaIFbmcSWgWiOu6BDpMlT0ux1qFG0XsFMpqpgo6MSOGUepTHoubVC0MzSp6e93HONJEKSa%2FMl4lx3mg5zPgzacoKSM7cG3G0ZJqHncQxX%2F58fCIg0jn7qaN%2BcfOGmsE4uFcmSSks1RN7l%2BsHxARj4R6iawET5KXJPzRMKX1w70GOqUBflOxrAPEEL%2FKLtohn45Ivrnr0aw9OMoJed1V2GtR0Gdq2WkP5s1MWyGldXCSClNEZcSyS19aQ39zmIrhUp2%2BE1GlcFII3O2DA7JsIyFeSIb5rFzQ12rlxMGQrsw3q72lqeIUieypGnnywc1ZZQMKD%2FKiSBnqFeTwqjtT0LcRv4EVc1kNBG%2B4NkpzE9v74UBm3gMlxj2Z1KWC9n5GxsXic7b2UI9l&X-Amz-Signature=14ada356410672e271df798fb47862fa5bc35e21266874be94eaa3cb28162229&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
