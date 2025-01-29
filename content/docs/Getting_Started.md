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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXFMEVN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrK%2F7OiNM84bTAoCCzRmSIpwwUOUsVtxRfkoH7EUa0ZAiEAiIic00vTToFYxwKZRcKwVTc9M5eJDrHhDa0OXajfd5QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQMeLMA8fCyNFL1aircAyZj0ZI97ynaryMOl3ejVFN06OKLNQmVNv6sbnyhGH25Uq9I6uxJFWc7Vlatn6CrGGaag8IRfWr7gMa0vgtkWq5eDkzZEIoaOsG1VRIsbiftW1DYVBXyIpl6TARAf85y8sqju%2Fi0gkxdnv85%2BKqPziyxk9tEjyXqyUWRQEIbtSqLu%2FzAxGdj7rPeMeFhQ8NNzuw61ofm2PnUfBrVY8fz0t2GAzDnVP%2Fg1%2FZ9TPEzJBaJ84fsM1xXcGOYI5X9y9ZWzYEGNKoWguAFmVM%2FeFwHIwIVVX%2FkYvCwQ7skPFC9gtfHwqqNMJKe31n22Q5cEDsKnf6N5lShCoEKck0K5aHbH7sU%2BT6aqC6fWTbDYCgW39WvF5v7m5zZSk2wTuDHP18Jg50Z6nlTmChnmhCGGVxnMOvpTZgMROhuvcb5bdZBPR8JeoNbE3iXy7AB2tPv33pg76ckSTZebIHBNTZcJZBDLeQ0LIUCoNPUFdmQoNXvnTEfAR%2BQBelNYpv6LbnpqVboXuHc0dTF1srEs%2BkNAon4Ho9HttFeyF14WUK6Goj8JNSzVNxok5Oz5WBMpPQuP%2FVKFbbtCOUE4yCqbPeBoj14tkENhIMAqpgOwvGX1xIhnmY32ZiRFw06TrqOYwD%2FMPWE6bwGOqUBKDxipRWcyculwSmJHXYby8Unv1i%2B%2FTYGm852hmND2zfFn4kh1iHvGo4fX652YmTrh7%2F9Vt8V6XfZvCG9JvxVFZKJ0EX7XphkV%2FiEG3Kqgg5MpJsISGbzbqALAPZiWB5liPBk4xgMR%2B3iGHs%2FyPDk%2F7SadG5V6dPeZTzb9febQwk%2BCXA02Qh4Q37p7A9lj3KApNBe0auoyteoPHSFmCRiUSDDDIaC&X-Amz-Signature=90c74477552d5009adf1873023fb3d224b32a124d2f40a89ffdcda70e0c5100e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXFMEVN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrK%2F7OiNM84bTAoCCzRmSIpwwUOUsVtxRfkoH7EUa0ZAiEAiIic00vTToFYxwKZRcKwVTc9M5eJDrHhDa0OXajfd5QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQMeLMA8fCyNFL1aircAyZj0ZI97ynaryMOl3ejVFN06OKLNQmVNv6sbnyhGH25Uq9I6uxJFWc7Vlatn6CrGGaag8IRfWr7gMa0vgtkWq5eDkzZEIoaOsG1VRIsbiftW1DYVBXyIpl6TARAf85y8sqju%2Fi0gkxdnv85%2BKqPziyxk9tEjyXqyUWRQEIbtSqLu%2FzAxGdj7rPeMeFhQ8NNzuw61ofm2PnUfBrVY8fz0t2GAzDnVP%2Fg1%2FZ9TPEzJBaJ84fsM1xXcGOYI5X9y9ZWzYEGNKoWguAFmVM%2FeFwHIwIVVX%2FkYvCwQ7skPFC9gtfHwqqNMJKe31n22Q5cEDsKnf6N5lShCoEKck0K5aHbH7sU%2BT6aqC6fWTbDYCgW39WvF5v7m5zZSk2wTuDHP18Jg50Z6nlTmChnmhCGGVxnMOvpTZgMROhuvcb5bdZBPR8JeoNbE3iXy7AB2tPv33pg76ckSTZebIHBNTZcJZBDLeQ0LIUCoNPUFdmQoNXvnTEfAR%2BQBelNYpv6LbnpqVboXuHc0dTF1srEs%2BkNAon4Ho9HttFeyF14WUK6Goj8JNSzVNxok5Oz5WBMpPQuP%2FVKFbbtCOUE4yCqbPeBoj14tkENhIMAqpgOwvGX1xIhnmY32ZiRFw06TrqOYwD%2FMPWE6bwGOqUBKDxipRWcyculwSmJHXYby8Unv1i%2B%2FTYGm852hmND2zfFn4kh1iHvGo4fX652YmTrh7%2F9Vt8V6XfZvCG9JvxVFZKJ0EX7XphkV%2FiEG3Kqgg5MpJsISGbzbqALAPZiWB5liPBk4xgMR%2B3iGHs%2FyPDk%2F7SadG5V6dPeZTzb9febQwk%2BCXA02Qh4Q37p7A9lj3KApNBe0auoyteoPHSFmCRiUSDDDIaC&X-Amz-Signature=61e42bf50cac9aed1c6a7eae0d501ea1713cabb55af82477786923d1a7d782f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLDODYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACKxi5VIWrjLrL45dBsaflTI5vnQtcCh1vwA%2FPL9PRkAiEAh09L5m6fEfF2b7yOibCggmDoPKI7WgiH16P6hAo3wYIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGawcUBajRsGd220YyrcA7%2FzfF6BvmJSnmAImMcCC68Ltk97kIw%2FdiLuGW8F%2BFn7OCcAaPrakzzkI%2BVssJSrKGcPgJkXr%2FKKX%2FG%2BWU0GzvAYidSU3mkY7JL6YyV2oLUlgpAssl5GPufx9V6A206SARNdus%2FSUn4ME7FMQixqZ1gAIEgf7sCcj87YQ%2FonuC%2Fi6s9hcfpnoq%2FTzjyVf9Q%2Bcs1ep8eFvSuuX62t9f7IVO6xdg8torX2rXP5ttCbs%2F7f3R6bIxNnk5K7sw30j2wHZZVuU6%2FZHFMhtPHAOuGEOY6tv8GCedYgYQaLUsxNyNtjHCG8dPNnLtg%2FGLSlOIZ03mcnNskuiVREpr9rcBKMjBd3%2Ffm5UpambsQuEo3IN6NO%2FD46svzMW%2BxCru%2FgydYLHbT8jDoO3oy6RO%2FYlQEn8jaSyEOUSSR2jkK4eTLOJlUoiY7EKdtk77pBdstVw0eB6aSsXMsFnUtJzdsZseHQkMkgAWPU8nh%2FNLNGmJu63cUM8nyHu6AfuAwcY4yxA6WU3NwEhAMYRCm1mqEN91iehVAf%2Bz1lrwKdbusBAPdxRoWw%2Bqj8W8VlGNpNBdbWnNv0nug0aTFmzBcm9MnInWGbAvG24U9Xp7dIDXZPtqj5D%2BM6HN4TFv%2FVtRdoWXlYMMa96bwGOqUBpaXwVaQVb%2BQ67It1bKTFKYl1uMCBgZkJWpuLzgF3cZOLMsTk3mhR5Do5ep5lZR1wrRUOC%2BN1rouGQMg50eU%2BAahIlN6yFDY2mShmRRUiJGkb7cWqeIEeVOse1VMq1CXbRqxiWoyoS64%2FpMirCxhHa1fT6RkYyirTe0Uj%2F0yoE4byzTEIo5xOWX%2Bw6%2BSIBnW7rJVuiZ6lU%2FDXY6MLvh0geofSIobm&X-Amz-Signature=574da4b0af2f7f836fef321ed438978a38c536ddc3a9c5e4717ed3fe8a37496c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MNKL7K%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWMP6mqg%2Bck1j0RDBfKisW3zVZ%2B0dQD%2Bt96%2F6j5P%2BapgIhAOCsoBnjcTonhUEK1v0sNNw1qIpgfIp2FNNLPb9tH%2BlvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6yhrS8sb%2Bt64MdCcq3AMuRsaEoXIOzOFzpCDsRUo1OnJuO%2F9E%2BVeM7hmo%2BE3dxdRkks5DPn0H7r%2FYBUs7LtrNOGw9Ppwo0chJTt1QZYp2p6dDVnDIZ1%2BV3pLkWUCcieYNF2z0yk2%2F0XYwj%2FVci1cqSWq5lQdIFlu1rQtyf4YE%2BtyM7ZACuGXJ8wez4MAqxNWsG%2Bg5uUxUWUlTuKlm5PyRaedAFg3vBWB624RPN00NJvZmELVwtSjUOf5z1%2BmYHwNa0plYU%2FQJlPMDlIYYiCyMdLX7Qd%2FZfeZAWACrLUD%2B8AIeUaYAsDWDusoYjPAZWdU%2BijruyvClKcz52IdQoF75MqrfFITTIVP6tZGJQzddfZcxoVWJrYIcWwCsWPVLBMqG%2B6gk5j0dveZHxSTm5T26C7SKwvnIhF6fN3MppPbjgr%2FOr%2BIAXk%2B1Lmlr9FIukBRq80p9LqbK2U6hhYsWJob8CKdCBnTt7%2BtjoxDRiV82PFHIG5P8bzE%2FxG%2FRlWnpD%2BsoE8sDUDay2eZFwJY0LFbzGQNlnF6ZsYLW0lma%2FCGX3zg7BhKr2occyJdddlklCbXc5sDIpjCbezjJ2HrTy0SDum%2FG2%2Bgqm7oxuMSuBM5AQmcXqaKMD5Phb1kQvU9j%2FeN1%2FdyT70KZwmYkhDDchem8BjqkARgi9vaOcajfRUxyAJ5xD7BgydjBAa51OhFg99uFQxFWTkxRBDcN7KfXkmJJBToBFygcTIjbulZVky0c20xhlWGi62mJdaJkPAPzNIWr9KwjPuqjvP2kqLt0%2FC5AYqCylgTIfJntMV7TXVCi7rizVp5B4g014I8ozXCJSXgT0ErfUJwKhseQ7ymNtwce%2FFAUe0G7Jua2Qel6MFuGFQGVaydIpIRK&X-Amz-Signature=26020c81dc3aebcd060ceb55433788ef6a37d8c78004ffae291eba58aec4d8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXFMEVN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrK%2F7OiNM84bTAoCCzRmSIpwwUOUsVtxRfkoH7EUa0ZAiEAiIic00vTToFYxwKZRcKwVTc9M5eJDrHhDa0OXajfd5QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQMeLMA8fCyNFL1aircAyZj0ZI97ynaryMOl3ejVFN06OKLNQmVNv6sbnyhGH25Uq9I6uxJFWc7Vlatn6CrGGaag8IRfWr7gMa0vgtkWq5eDkzZEIoaOsG1VRIsbiftW1DYVBXyIpl6TARAf85y8sqju%2Fi0gkxdnv85%2BKqPziyxk9tEjyXqyUWRQEIbtSqLu%2FzAxGdj7rPeMeFhQ8NNzuw61ofm2PnUfBrVY8fz0t2GAzDnVP%2Fg1%2FZ9TPEzJBaJ84fsM1xXcGOYI5X9y9ZWzYEGNKoWguAFmVM%2FeFwHIwIVVX%2FkYvCwQ7skPFC9gtfHwqqNMJKe31n22Q5cEDsKnf6N5lShCoEKck0K5aHbH7sU%2BT6aqC6fWTbDYCgW39WvF5v7m5zZSk2wTuDHP18Jg50Z6nlTmChnmhCGGVxnMOvpTZgMROhuvcb5bdZBPR8JeoNbE3iXy7AB2tPv33pg76ckSTZebIHBNTZcJZBDLeQ0LIUCoNPUFdmQoNXvnTEfAR%2BQBelNYpv6LbnpqVboXuHc0dTF1srEs%2BkNAon4Ho9HttFeyF14WUK6Goj8JNSzVNxok5Oz5WBMpPQuP%2FVKFbbtCOUE4yCqbPeBoj14tkENhIMAqpgOwvGX1xIhnmY32ZiRFw06TrqOYwD%2FMPWE6bwGOqUBKDxipRWcyculwSmJHXYby8Unv1i%2B%2FTYGm852hmND2zfFn4kh1iHvGo4fX652YmTrh7%2F9Vt8V6XfZvCG9JvxVFZKJ0EX7XphkV%2FiEG3Kqgg5MpJsISGbzbqALAPZiWB5liPBk4xgMR%2B3iGHs%2FyPDk%2F7SadG5V6dPeZTzb9febQwk%2BCXA02Qh4Q37p7A9lj3KApNBe0auoyteoPHSFmCRiUSDDDIaC&X-Amz-Signature=60ddae02a9c7806b853042b76479d81e12138d304d40113b3d2af9da1c0dfbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
