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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFD2IDH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvotAk65LQZ8ggyqWNB7vqAc2oTNjW12xSrpaBZW6JvwIhAOQ4mzP6SlB8cp3jULdEnMspxobTGktBgeY4pQF6ce6EKv8DCDEQABoMNjM3NDIzMTgzODA1IgxSz9gt8xLErIdl2yIq3APkaLoLiQfoOrU5qWWdC95cCJ64luBgsSqfK9zrYv5HGqcbZXcEmut%2FEGhmO7%2BIUSZMtjFZP9PRFU8NMlpKfyNPc%2FTS8EBnhyML2B3Lgr4gp0F29wVpJaZ63TKVRbW%2BqW4530TAU6Ug2Eq7QnmnsS%2F96Bwx6QmnaHs0ihzXJWkLC6MoAjr39CM2LXTDGsvf6Q4F83kSw6wgPVsXAzkxhKTybw%2Fo%2BzvRO0calP277UinqJtQKOr3kJT2%2FTTkGUHw%2BfSQFU611mOiyXXjIK8gi5yNSJVtmiBhpUzwJQjxg7FWGcBM1j%2BnHM43Um%2B2toRuwD2agk2elc0TPUrdobRKh9RmpE9pokjltRTk4o%2FN7bym68gWFcXJ6Mgd7IV82KzRDdF%2B%2BCmM%2B0mexu11dWWN3l8dEi7S0MMD7PV4ILMeuuWVr2q8BH5ZS%2F2lCmn20Ao7ndk7Z03BUNtuMd1w66q49E3Txs%2FEWnMg9FoWp%2Ftq%2B5W8zh2DH1987GyXFWsktoAcwWGGhoPUrtk%2F57J9Wv3nALB7hEneJH8qgaSqYu0q0Uj0bwQSj1Bpf7GLMRf4Tu0MXVJHhJ3m%2Fpmp3Jstavz8ZV6uErQs2oXjfNax9lRfTq4OFzzVR8fwM1CZ%2FrS%2BAzD9yOPABjqkAYd5VDl2fZaJwz4zCpWTRQGta7G7fI4g1KWMFiv5NGWl2UD86QbY8CeL1MKhz9%2BQ%2BX8XlufSpzWjnYVJhH2lQgYqy1iWCoQxLp93cHIHRix4DaEsitKCrZtkTYJWc%2ByLlRnYPRDjHrvacLDce0AikzT29O8OrcsUwX7EaUfnZ4qAaywD1VrHFMFfTkZ3swHFavVX5wq0GsyXTPuZM%2FfOXp7frzc8&X-Amz-Signature=f2f530fb36301c2994276da93bf8e68f5771efddd98243deb9cbc5969c679f12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFD2IDH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvotAk65LQZ8ggyqWNB7vqAc2oTNjW12xSrpaBZW6JvwIhAOQ4mzP6SlB8cp3jULdEnMspxobTGktBgeY4pQF6ce6EKv8DCDEQABoMNjM3NDIzMTgzODA1IgxSz9gt8xLErIdl2yIq3APkaLoLiQfoOrU5qWWdC95cCJ64luBgsSqfK9zrYv5HGqcbZXcEmut%2FEGhmO7%2BIUSZMtjFZP9PRFU8NMlpKfyNPc%2FTS8EBnhyML2B3Lgr4gp0F29wVpJaZ63TKVRbW%2BqW4530TAU6Ug2Eq7QnmnsS%2F96Bwx6QmnaHs0ihzXJWkLC6MoAjr39CM2LXTDGsvf6Q4F83kSw6wgPVsXAzkxhKTybw%2Fo%2BzvRO0calP277UinqJtQKOr3kJT2%2FTTkGUHw%2BfSQFU611mOiyXXjIK8gi5yNSJVtmiBhpUzwJQjxg7FWGcBM1j%2BnHM43Um%2B2toRuwD2agk2elc0TPUrdobRKh9RmpE9pokjltRTk4o%2FN7bym68gWFcXJ6Mgd7IV82KzRDdF%2B%2BCmM%2B0mexu11dWWN3l8dEi7S0MMD7PV4ILMeuuWVr2q8BH5ZS%2F2lCmn20Ao7ndk7Z03BUNtuMd1w66q49E3Txs%2FEWnMg9FoWp%2Ftq%2B5W8zh2DH1987GyXFWsktoAcwWGGhoPUrtk%2F57J9Wv3nALB7hEneJH8qgaSqYu0q0Uj0bwQSj1Bpf7GLMRf4Tu0MXVJHhJ3m%2Fpmp3Jstavz8ZV6uErQs2oXjfNax9lRfTq4OFzzVR8fwM1CZ%2FrS%2BAzD9yOPABjqkAYd5VDl2fZaJwz4zCpWTRQGta7G7fI4g1KWMFiv5NGWl2UD86QbY8CeL1MKhz9%2BQ%2BX8XlufSpzWjnYVJhH2lQgYqy1iWCoQxLp93cHIHRix4DaEsitKCrZtkTYJWc%2ByLlRnYPRDjHrvacLDce0AikzT29O8OrcsUwX7EaUfnZ4qAaywD1VrHFMFfTkZ3swHFavVX5wq0GsyXTPuZM%2FfOXp7frzc8&X-Amz-Signature=253133c696a24ee1db7a8923d889a4710392bc0674e008ff9e2f45952126e7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFD2IDH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvotAk65LQZ8ggyqWNB7vqAc2oTNjW12xSrpaBZW6JvwIhAOQ4mzP6SlB8cp3jULdEnMspxobTGktBgeY4pQF6ce6EKv8DCDEQABoMNjM3NDIzMTgzODA1IgxSz9gt8xLErIdl2yIq3APkaLoLiQfoOrU5qWWdC95cCJ64luBgsSqfK9zrYv5HGqcbZXcEmut%2FEGhmO7%2BIUSZMtjFZP9PRFU8NMlpKfyNPc%2FTS8EBnhyML2B3Lgr4gp0F29wVpJaZ63TKVRbW%2BqW4530TAU6Ug2Eq7QnmnsS%2F96Bwx6QmnaHs0ihzXJWkLC6MoAjr39CM2LXTDGsvf6Q4F83kSw6wgPVsXAzkxhKTybw%2Fo%2BzvRO0calP277UinqJtQKOr3kJT2%2FTTkGUHw%2BfSQFU611mOiyXXjIK8gi5yNSJVtmiBhpUzwJQjxg7FWGcBM1j%2BnHM43Um%2B2toRuwD2agk2elc0TPUrdobRKh9RmpE9pokjltRTk4o%2FN7bym68gWFcXJ6Mgd7IV82KzRDdF%2B%2BCmM%2B0mexu11dWWN3l8dEi7S0MMD7PV4ILMeuuWVr2q8BH5ZS%2F2lCmn20Ao7ndk7Z03BUNtuMd1w66q49E3Txs%2FEWnMg9FoWp%2Ftq%2B5W8zh2DH1987GyXFWsktoAcwWGGhoPUrtk%2F57J9Wv3nALB7hEneJH8qgaSqYu0q0Uj0bwQSj1Bpf7GLMRf4Tu0MXVJHhJ3m%2Fpmp3Jstavz8ZV6uErQs2oXjfNax9lRfTq4OFzzVR8fwM1CZ%2FrS%2BAzD9yOPABjqkAYd5VDl2fZaJwz4zCpWTRQGta7G7fI4g1KWMFiv5NGWl2UD86QbY8CeL1MKhz9%2BQ%2BX8XlufSpzWjnYVJhH2lQgYqy1iWCoQxLp93cHIHRix4DaEsitKCrZtkTYJWc%2ByLlRnYPRDjHrvacLDce0AikzT29O8OrcsUwX7EaUfnZ4qAaywD1VrHFMFfTkZ3swHFavVX5wq0GsyXTPuZM%2FfOXp7frzc8&X-Amz-Signature=8dfc905523a9232c66a3bf5e2abbbe88e72d8a92f6785ab5c4e66b888520b5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK5TWVQY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmXkrw0uPOvQTGKD7pyLiyV8YvIfb2Eb2WdI7KTxldkQIhAK7sN8IW8otISO3%2BrrM5WN9UUgKcfeOeWyP%2BGRkhSmAIKv8DCDEQABoMNjM3NDIzMTgzODA1IgzmOZkBMFMM0pyW1VYq3APCXLAyzarZDOl%2B3dPjSY0bXNBU3pVB9TtNrOfPbAL2a95SJG1sX9byY9zkr3wyDlH0CY%2Fl6Ef5MS5VCL7WgLwQYs6fCNnnLAzC%2BHUzgpvQs%2FQedHc3wL1hzsNXTd1W3zux97c5dCnQit9fQHpgfeMvPB6qDi2vmfBPjesN%2FpgIynENYsRh4zaD%2FAW%2F3WXgmmb6Q7d8zgdNBYmqr70PIqB7VUwINSuCg%2BFGKK7gDCSBny7FX1LoOxSLxt8BFdUrXmhBPdU9aaByFrZDQL7eOe3ITspLiBXfM95HddoR5AHhYQhbTBkBT4ql0c7P7yofpxe%2By%2B%2Bj0SlwqmiyxDhz7%2FpBAug8HoNrJ2YjDrnLn4qpE3thshPzu5GrUnsq6Md2W6tGT%2B7AQ3Z9N2na9wH1sjPa3I%2FUE3sQyQ294ukU83WvSF2SU%2FnSX2Zgbs9ndYsKA8X36WQw%2FbALfjtFU30mzgLd0jkvMgboRqLNUUt9DfEcvBJ3e50nBfZSE4kEsLHmiXEC7o7Gx9ueb6icNZUZtUgnp9bjfJxS0JqErh9xbwAZPFVW2nZEwcuCfylCotgfm5sC07fuYOG9Rr29pasRCCmrkZmMyjTdrGf8FD%2Bl2gvCUHos1roV%2FvM8NZfyWTDlyePABjqkAVM24UaOvWfUuPPFmRDAADeqBdcgwYEZTyaXgP5wwKa6TrAA9IdH6nLu0W4EgZR6owSzTi9ekwMOp7otvsRPmXslH2q6frPlfSbs0n5fhkI8TygLGKtb%2Bjtdo4Ez0kCh%2FUCUg%2Fxu%2BKsFrpT8wpTidhvQV4hrhBAtD%2B1rMSNUcHkCa2coQ9EaCrgWfKj5thprUE%2FF%2Fk0qJD3YCBCwah6ImbdOH83q&X-Amz-Signature=d4354eb201b7338d46d50b6ddacb289aac4083d95b762cbc000d385b25ef7394&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERZAV3K%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKgSTnvXpE%2FtFtG1CvoMJ1eTb5ilR7dAY5H0pMF3bRsAiAZ%2FpYfUPGT2QlNUWjHgcMtHFv%2B%2F7oiaUw5m5as4XvXsyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMupCpbsnd90%2BrLLbxKtwDCSYq%2BELKvnHv83EkB4wVvEFFCKxLbq8uqu9R3%2FCGZroDpa%2FCOsWm7bFkO8684OHSdSDjMriWPNMjott5rZYA2XIJrCYDv2VVPv65tW5TqkvYpmyvk695kJuwl9tkU00n8mKYjdz543M8kHCvp%2FXY14Zdub2RQPwzzInDC0uoTsR6P63IuM9otU02BhFEnfXN9KOStQj%2FzmXlkzktuormXOOZUEhjy9kTkxKhsUa%2BoXUM9yulmB8%2BgtlT2y9y3%2Fz3caOLajqFLOo3j6qWa8IhxMQ%2Fw0K%2BZws%2B0QMVfSnPO7zkYzikrmMFFCj0kmbaRMoOl%2Fz0E%2FSQpWHdzH7hVFoIqHy3Se6%2FYGhvSFVRjq1xw9LFZ%2BhOdD2AZH9Aw39JtfVxsuG3yfq307CcwFE5Zm%2Fph18kZAhTZ5I0%2FH2tY8x5fSQiPLIs1warVrqPvqk1HNbdGsx%2B7FuggkXHpSFyKyMjaFcs6XLxnmaA46gvR%2BpGPacLiQ%2F%2BVxDo%2FgnqsBYWIDgRwJypSx6eh4DzXua%2BUJ2XJNbNAudJ8A5rtS7JvhAbYwwvLt%2ButdGEubjjmeT14znZWGdTfCnK4R8cu7OiZ9LyWjVdGocsvl%2BWM55xtO5GS10jNQon%2BYipjdcRniEwjcnjwAY6pgGT%2FUh1RsXgndSQiSHa5UlnxiDvnAW4ssetm3d%2BLhmtb5zrWEaPwNufNu22P07o5XMPlPGuUQp%2FHg2tMTpFAamkNCV7hWU0UkqLr6vdqPuoKleAFZu1rDirnyZC9HOMTfZnSq8%2FlGQTokzD7Gr%2BeF%2BbwuIHnOfrOortuTf0l2HCDOVN95q9j%2F2sCtVCOovPyTb8MTij6e%2BzO%2BG6NA3%2Bhq%2FtnsX5UzEU&X-Amz-Signature=cf80358eda9b117da5fe109e55d4b457e7188c89d4ac40e232708ddb9066d799&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFD2IDH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvotAk65LQZ8ggyqWNB7vqAc2oTNjW12xSrpaBZW6JvwIhAOQ4mzP6SlB8cp3jULdEnMspxobTGktBgeY4pQF6ce6EKv8DCDEQABoMNjM3NDIzMTgzODA1IgxSz9gt8xLErIdl2yIq3APkaLoLiQfoOrU5qWWdC95cCJ64luBgsSqfK9zrYv5HGqcbZXcEmut%2FEGhmO7%2BIUSZMtjFZP9PRFU8NMlpKfyNPc%2FTS8EBnhyML2B3Lgr4gp0F29wVpJaZ63TKVRbW%2BqW4530TAU6Ug2Eq7QnmnsS%2F96Bwx6QmnaHs0ihzXJWkLC6MoAjr39CM2LXTDGsvf6Q4F83kSw6wgPVsXAzkxhKTybw%2Fo%2BzvRO0calP277UinqJtQKOr3kJT2%2FTTkGUHw%2BfSQFU611mOiyXXjIK8gi5yNSJVtmiBhpUzwJQjxg7FWGcBM1j%2BnHM43Um%2B2toRuwD2agk2elc0TPUrdobRKh9RmpE9pokjltRTk4o%2FN7bym68gWFcXJ6Mgd7IV82KzRDdF%2B%2BCmM%2B0mexu11dWWN3l8dEi7S0MMD7PV4ILMeuuWVr2q8BH5ZS%2F2lCmn20Ao7ndk7Z03BUNtuMd1w66q49E3Txs%2FEWnMg9FoWp%2Ftq%2B5W8zh2DH1987GyXFWsktoAcwWGGhoPUrtk%2F57J9Wv3nALB7hEneJH8qgaSqYu0q0Uj0bwQSj1Bpf7GLMRf4Tu0MXVJHhJ3m%2Fpmp3Jstavz8ZV6uErQs2oXjfNax9lRfTq4OFzzVR8fwM1CZ%2FrS%2BAzD9yOPABjqkAYd5VDl2fZaJwz4zCpWTRQGta7G7fI4g1KWMFiv5NGWl2UD86QbY8CeL1MKhz9%2BQ%2BX8XlufSpzWjnYVJhH2lQgYqy1iWCoQxLp93cHIHRix4DaEsitKCrZtkTYJWc%2ByLlRnYPRDjHrvacLDce0AikzT29O8OrcsUwX7EaUfnZ4qAaywD1VrHFMFfTkZ3swHFavVX5wq0GsyXTPuZM%2FfOXp7frzc8&X-Amz-Signature=e187283f6ed224153b705d12cf84eb4653c72540b5aa9b38a3f7d94fd7b061ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
