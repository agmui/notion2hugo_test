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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HM6MPJS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVzxiI%2BA5uj4tnK1YsmAtFUgUafD8%2FOnvGTFqapj5aTAiEA0Sq3hSFzlz2zChviliOfnXNlyy8qxqPLDQMdA%2Frn2kkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBzFyYmX6FAcHSIt6CrcAwSsqZhPfeRPqdyjkH5wTuCtKzcBIAcEuePGfmAZzJfFBeniOdnIU2LJH1%2B6DJZJIeg6GYafw0xVKYJrZ5iaqRBIU02RuMnk%2BYWkOcPaCbWqW20KAlHf%2FYIuMQce6AfHhEHUkigW5LderBOd3HK0tay3B%2BcoDmi%2BcvUhN5Z5HE30q6dv4ODAmXuZDr6FKiuW2LunwyTpkrjsjK0TWABiy8vR9PR6AOP%2BHZtIJA04tw1t2K%2BSHq64SxNz%2FlXQHVP9wL%2FJZ0M0Sf1rLbgdRnW1zIiGrzyg%2Fx55sJVC0IqevWGq0SWGwradxTojF6t%2B5SoEFYzrFeXSiLD0TR%2BMMDZcvQoxbiMwwHf4AiuIOpcsxG0ozJcFOk7eF8h7OEcp8X85U0apIuAZg44zJOqhTMyMRMSvVA7qsbvE%2FMtq5CTjaytLSIFw035ZFCbXF3Yt75zE2pkI0Nf87bSoV7kDA2ubS2v639TAPYciMiqDcn%2F4uunoBv8IeRUaU1ugRSHCvo9UIpON5TzZg5Ql9HzAxXr9JfFbeTs4YjRYkD%2BCAFHEu4xlxBNKWq2e8WrZN6WWiMeCRj6SL0fgO1ZEFmq6KA46WMnpEaR2E157Tf49WBJeffOr037xR06TOOiknjh0MJn56sAGOqUBIHPHOevsdIL6a8sFJBbgkdLXAOTdIICM7JFUcaJIEGQbLiKWPTD9btKQjs%2BLOF68crVIVpAUlom1gveL0rF9UD%2F1AW3ErRqB6gGpuOM38CpCeF4ogy1Nng4aYXvhs5v5r24WG8kKmL24f9AP3sq%2Bi52zKxd8lN3KqGacf%2F%2BACddHgwFTrlrAQhGBEYhNr9kdJ2%2Bp6OjehzUWmNRTxegrFUI0Z2YM&X-Amz-Signature=bc2fed626443e96ab9ac286dc62d50f401f2123dedc1a401ab7f702ff5250779&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HM6MPJS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVzxiI%2BA5uj4tnK1YsmAtFUgUafD8%2FOnvGTFqapj5aTAiEA0Sq3hSFzlz2zChviliOfnXNlyy8qxqPLDQMdA%2Frn2kkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBzFyYmX6FAcHSIt6CrcAwSsqZhPfeRPqdyjkH5wTuCtKzcBIAcEuePGfmAZzJfFBeniOdnIU2LJH1%2B6DJZJIeg6GYafw0xVKYJrZ5iaqRBIU02RuMnk%2BYWkOcPaCbWqW20KAlHf%2FYIuMQce6AfHhEHUkigW5LderBOd3HK0tay3B%2BcoDmi%2BcvUhN5Z5HE30q6dv4ODAmXuZDr6FKiuW2LunwyTpkrjsjK0TWABiy8vR9PR6AOP%2BHZtIJA04tw1t2K%2BSHq64SxNz%2FlXQHVP9wL%2FJZ0M0Sf1rLbgdRnW1zIiGrzyg%2Fx55sJVC0IqevWGq0SWGwradxTojF6t%2B5SoEFYzrFeXSiLD0TR%2BMMDZcvQoxbiMwwHf4AiuIOpcsxG0ozJcFOk7eF8h7OEcp8X85U0apIuAZg44zJOqhTMyMRMSvVA7qsbvE%2FMtq5CTjaytLSIFw035ZFCbXF3Yt75zE2pkI0Nf87bSoV7kDA2ubS2v639TAPYciMiqDcn%2F4uunoBv8IeRUaU1ugRSHCvo9UIpON5TzZg5Ql9HzAxXr9JfFbeTs4YjRYkD%2BCAFHEu4xlxBNKWq2e8WrZN6WWiMeCRj6SL0fgO1ZEFmq6KA46WMnpEaR2E157Tf49WBJeffOr037xR06TOOiknjh0MJn56sAGOqUBIHPHOevsdIL6a8sFJBbgkdLXAOTdIICM7JFUcaJIEGQbLiKWPTD9btKQjs%2BLOF68crVIVpAUlom1gveL0rF9UD%2F1AW3ErRqB6gGpuOM38CpCeF4ogy1Nng4aYXvhs5v5r24WG8kKmL24f9AP3sq%2Bi52zKxd8lN3KqGacf%2F%2BACddHgwFTrlrAQhGBEYhNr9kdJ2%2Bp6OjehzUWmNRTxegrFUI0Z2YM&X-Amz-Signature=e775e740895d0695eff8c2887d16f4130ad36305e961b44031d3e256266cd074&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HM6MPJS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVzxiI%2BA5uj4tnK1YsmAtFUgUafD8%2FOnvGTFqapj5aTAiEA0Sq3hSFzlz2zChviliOfnXNlyy8qxqPLDQMdA%2Frn2kkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBzFyYmX6FAcHSIt6CrcAwSsqZhPfeRPqdyjkH5wTuCtKzcBIAcEuePGfmAZzJfFBeniOdnIU2LJH1%2B6DJZJIeg6GYafw0xVKYJrZ5iaqRBIU02RuMnk%2BYWkOcPaCbWqW20KAlHf%2FYIuMQce6AfHhEHUkigW5LderBOd3HK0tay3B%2BcoDmi%2BcvUhN5Z5HE30q6dv4ODAmXuZDr6FKiuW2LunwyTpkrjsjK0TWABiy8vR9PR6AOP%2BHZtIJA04tw1t2K%2BSHq64SxNz%2FlXQHVP9wL%2FJZ0M0Sf1rLbgdRnW1zIiGrzyg%2Fx55sJVC0IqevWGq0SWGwradxTojF6t%2B5SoEFYzrFeXSiLD0TR%2BMMDZcvQoxbiMwwHf4AiuIOpcsxG0ozJcFOk7eF8h7OEcp8X85U0apIuAZg44zJOqhTMyMRMSvVA7qsbvE%2FMtq5CTjaytLSIFw035ZFCbXF3Yt75zE2pkI0Nf87bSoV7kDA2ubS2v639TAPYciMiqDcn%2F4uunoBv8IeRUaU1ugRSHCvo9UIpON5TzZg5Ql9HzAxXr9JfFbeTs4YjRYkD%2BCAFHEu4xlxBNKWq2e8WrZN6WWiMeCRj6SL0fgO1ZEFmq6KA46WMnpEaR2E157Tf49WBJeffOr037xR06TOOiknjh0MJn56sAGOqUBIHPHOevsdIL6a8sFJBbgkdLXAOTdIICM7JFUcaJIEGQbLiKWPTD9btKQjs%2BLOF68crVIVpAUlom1gveL0rF9UD%2F1AW3ErRqB6gGpuOM38CpCeF4ogy1Nng4aYXvhs5v5r24WG8kKmL24f9AP3sq%2Bi52zKxd8lN3KqGacf%2F%2BACddHgwFTrlrAQhGBEYhNr9kdJ2%2Bp6OjehzUWmNRTxegrFUI0Z2YM&X-Amz-Signature=54373630ead52c79c6f01107db396abfe3c0c77212421a7b1e5e8c0acbb52d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGNT4QS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0uRwdrR%2B0XfJdqeNCldKwBNFAxe7xx6RaLknFU4gnAiEAwmzVZbfTyqMTnHomDYDFsOsiPwcmTV5aQioKO3x8F1Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCwh1siPzljYN%2FxMhyrcA1b6X5kdFOmLB17eASlac39YGnBbzIOwIhTT89Vt%2B65rUFAp%2BS9y2zLCdJXoJLZofMXOk9M6lexcXEDIX5Oc00dUKhKGc0KHAMzFwCEpZVhUlhBe5mgKpSVhaQrMAHs%2FEosIuC1HMIfFbmrhZr3Yn%2F3%2F3f6mermLSiH1V7X92devRxsW3qvr0s19I5GFkQxrNfRxXFzrfyer4PoFwvNfwRAhKjztzFsrIdGHgJrQ8vBIbVLtO4C%2Fg25%2BHuVtTgZynbkLJMBT3MJ%2BqhLqJlKcGETo1H4gGKeJ%2BYNPaxiNviUBoZyhStaWjh77%2Bz4JsUDiFn9%2Fk6oUkpsICavzQWDaKvA79d0Rt0Ds9PfNUo%2FaQEbWH6x7Nyy7tpuOdReXJ6mEVpu%2FS7eQbPXEM0e85bYIqQCkqi61oufLnvNjkNKiu6q4jCxpJLL9BBigrkVhdDPUN2FRnttXWzr2wKvcFU48Of6tcbyir6%2F0VjN%2FT8v56KlPz60DvZMtzzA9OvU%2FY%2BkAKljaxJ6ZFa81amlNcRUtigjLFFgvM9m7Bbiu3Nu4%2B5uefHr8%2F6ESH2JoU8eB%2F3Mvui60OHhb1bot04I7PRxkY69YRzDFLtYafuWH6yN4x%2FN6Qm%2FPwqWQah6OygBHMKr46sAGOqUBnYsoIau1Ws4YRkTPouEDUau8mof0gzFslGudOXjiWOEpNWzUPjSmGMC%2FEgCd1j79GKhu024vue4eECsvgwtQ7Kcseqvn13gt8OGiK90pNh%2BpVs3Sh6hGR%2BC%2Fppe0nVIfGf5MO2Z3I75yw6x7EGHp3bIIFt%2BFwMieAT0Rz7rMalhb63pKCkwLNVWsFpHnI%2FRS0s64IPu3nHHUlhU8629vO2E2%2FMgE&X-Amz-Signature=201e72853dee6e6b5c5ad0424792c5fedae54dc58e1565c26020a0c4d70a2a15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMAFMBL4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuOOFNrkgtCUix9HzT%2B7ePy6RNKHoxU6xJS2xGVEc3QIgayWReo9N0JK1BJFvB2XJR1HZyHzUfnB4c4U81zsz904q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCPu6UGTJ%2BK9wo2vRircA1P%2Bv%2FUavQpA3%2BZMSbWgk6YjZk5K1oUwmw9pnnve513kK5TZli5h36WCKph3UBdMvse%2FVk33D0QvhtFklGWwXBPQQzqIqteC6bQjjte7CK2jCVYF6dhh3LPy7vbl227tCDMv7I6OHrO78FPKFzNU11CowG0in50v%2BWHkNNLyveZPgn07Nih5nwmOErdQT49LTUnFAIPdZ8vrbgVU3oMC6EkVPae1EZHheRZGiSDbqeG5lvLTvbCZl1dnbDV9hsHGce9ynaDKIVkKjQKeMC6YGQKM5gKeWLuvjhrnFYwcLmlIe7tg7ezZszjDLHmf9SXJMIekSo1Y8SFpVHTOGL2z5V96vYBFhwiVYFE7typrhIx%2FXLuwcLKL6%2BtuTRZq3O40H2UNdRiKe%2BYivR124jjTpfJANMK0zuWlFs54iLADZgMuG2MkV1JBAGyGWb35G1Pay3n1rZvemtR8YHt8nykKZR7Dtq8NYhQfrbor8pJu6YAkEI7Ypxv3fXm3jsKsVLJUYCxVpv%2FN721X27x5l4%2FMJ5Dx8FoJtDQ043iOiN8MCyxIrKcBKh%2F%2BuotBnt7cZa8RL2cmUr1v3Hg2%2FA5mwSeWAJ9Xc2oKiDNd4H3xgxtP5YiuRqvHjiEvVJ%2Bwsvy2MNP46sAGOqUBDuzXNWdpc3ArAt3gs6AB8TFq7IskEkyoqon9evDlCeHo92VLBkh17vyHtdGZVjAqjo6ozPWa7qGqEUsF00I2Mm5LWBij03kqEo%2B1cuVLJi7T9Tl6mpMuNBuehqJNkfSSk61%2BL2yNj5EZj8hKuouSwMCBC8Gjb2Kt6vD17kWx9un9Tse6Q12xlpbduk4XisQWRBRJddP5g4S%2BCJbzKhBXXPWZXVyi&X-Amz-Signature=0625661740e15163e3a1ce09e159136c658668c8890652df38d875b765e9c81f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HM6MPJS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVzxiI%2BA5uj4tnK1YsmAtFUgUafD8%2FOnvGTFqapj5aTAiEA0Sq3hSFzlz2zChviliOfnXNlyy8qxqPLDQMdA%2Frn2kkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBzFyYmX6FAcHSIt6CrcAwSsqZhPfeRPqdyjkH5wTuCtKzcBIAcEuePGfmAZzJfFBeniOdnIU2LJH1%2B6DJZJIeg6GYafw0xVKYJrZ5iaqRBIU02RuMnk%2BYWkOcPaCbWqW20KAlHf%2FYIuMQce6AfHhEHUkigW5LderBOd3HK0tay3B%2BcoDmi%2BcvUhN5Z5HE30q6dv4ODAmXuZDr6FKiuW2LunwyTpkrjsjK0TWABiy8vR9PR6AOP%2BHZtIJA04tw1t2K%2BSHq64SxNz%2FlXQHVP9wL%2FJZ0M0Sf1rLbgdRnW1zIiGrzyg%2Fx55sJVC0IqevWGq0SWGwradxTojF6t%2B5SoEFYzrFeXSiLD0TR%2BMMDZcvQoxbiMwwHf4AiuIOpcsxG0ozJcFOk7eF8h7OEcp8X85U0apIuAZg44zJOqhTMyMRMSvVA7qsbvE%2FMtq5CTjaytLSIFw035ZFCbXF3Yt75zE2pkI0Nf87bSoV7kDA2ubS2v639TAPYciMiqDcn%2F4uunoBv8IeRUaU1ugRSHCvo9UIpON5TzZg5Ql9HzAxXr9JfFbeTs4YjRYkD%2BCAFHEu4xlxBNKWq2e8WrZN6WWiMeCRj6SL0fgO1ZEFmq6KA46WMnpEaR2E157Tf49WBJeffOr037xR06TOOiknjh0MJn56sAGOqUBIHPHOevsdIL6a8sFJBbgkdLXAOTdIICM7JFUcaJIEGQbLiKWPTD9btKQjs%2BLOF68crVIVpAUlom1gveL0rF9UD%2F1AW3ErRqB6gGpuOM38CpCeF4ogy1Nng4aYXvhs5v5r24WG8kKmL24f9AP3sq%2Bi52zKxd8lN3KqGacf%2F%2BACddHgwFTrlrAQhGBEYhNr9kdJ2%2Bp6OjehzUWmNRTxegrFUI0Z2YM&X-Amz-Signature=d6407a1614eca6680e176d0bda4b7ee23e77f1d0c88f3af3ac15094b7cb47e97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
