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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTI2HPGF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEWI4mwDN3%2F2Z2WIlKOjgdLCVtuw7vfGWQlYU1TFe2BtAiEA8EuGycWe7oIZRFMqSiYwvSMiBXGglbGy3QMnXuQA4GAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGw8nFYcwl1EtZ6obyrcAzGurV2yYw3fe9F5Q0dOqHD9u5%2FVjZvJerOQ6nZ7rS6MxHbcKSU%2BIkbVRc554%2F4%2FQ0%2B%2FOdarXf3JErXGmnkwEL3%2ByWV6z3bbuffZKOTkHFk32qjDTC8Xb%2FI%2FRhDDmW4ZQi38FQNQZtsuydFX0pblRqVfSkcFrHzcYsXHP4XsYAUpCTvib3pQw%2FCPfRV24f5bMWmK%2FuKAOPn26CWh4d6fBV9k5EHq8pdm%2BCpuw0QTZY5HuhOeunBzJXb354qZrrKGLSGd7Vx5JAEjpEzeeb65rss5tOZ6%2BF0yollJrANVr86Il16mJoplLfG9ivLbQp5T2z6AYnFPbmGJXzOtgHxMxI7ds7oXZUcwEElO%2BH2Hqt2khA6rMVSAgUV%2Fk9MpE%2BUOdysRy29SlpBgLken5dtZ9oxZluMiNcafe4dLVSW66SklPTSiP2hsg3pyk%2Ba2gmD6k7cf4Hcsjq%2FocTyRlhuNRrqMLXZ4VI8npW%2BwYzw1xKMPfgikX3KIe7eRaNJ%2BfT9ZZjC0she%2FlEbH1UStb6ZoCCwXv1u%2FYkBFOkowgzKOSo7hXkhJotNdOBDJxooyikRXP6hNnEUM%2FKtuDASIQYLojQDmO4N%2BbJ2WZg2yfaXfL%2Fp5qj%2Bl3s0K9dMqn5fPMIqY874GOqUBCWagFcicvb663YH8vRz9NjlRmK68NlJQJqS%2BXZcL6Op0WCb3nTRvdjFidfGKPK%2BbRBxjAFyxk0NLLqhNZ%2Fn9v9Xs1nBWM%2FyDdknWGg%2F9XuptQm0QMZNvy7ovrXH2sFFuUfUmCY2S3T6ICbtpv4SsMwcdLU3Op0OFioGFpK3HZP2kVqS5PVI72Bsr2%2FBOW8L8p75H59NFLTdmjD0BbprRVP0Lnnv5&X-Amz-Signature=5ffd450c9235d8ac590699fae918a15eaa47c5b447d44719b98f82ece3571625&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTI2HPGF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEWI4mwDN3%2F2Z2WIlKOjgdLCVtuw7vfGWQlYU1TFe2BtAiEA8EuGycWe7oIZRFMqSiYwvSMiBXGglbGy3QMnXuQA4GAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGw8nFYcwl1EtZ6obyrcAzGurV2yYw3fe9F5Q0dOqHD9u5%2FVjZvJerOQ6nZ7rS6MxHbcKSU%2BIkbVRc554%2F4%2FQ0%2B%2FOdarXf3JErXGmnkwEL3%2ByWV6z3bbuffZKOTkHFk32qjDTC8Xb%2FI%2FRhDDmW4ZQi38FQNQZtsuydFX0pblRqVfSkcFrHzcYsXHP4XsYAUpCTvib3pQw%2FCPfRV24f5bMWmK%2FuKAOPn26CWh4d6fBV9k5EHq8pdm%2BCpuw0QTZY5HuhOeunBzJXb354qZrrKGLSGd7Vx5JAEjpEzeeb65rss5tOZ6%2BF0yollJrANVr86Il16mJoplLfG9ivLbQp5T2z6AYnFPbmGJXzOtgHxMxI7ds7oXZUcwEElO%2BH2Hqt2khA6rMVSAgUV%2Fk9MpE%2BUOdysRy29SlpBgLken5dtZ9oxZluMiNcafe4dLVSW66SklPTSiP2hsg3pyk%2Ba2gmD6k7cf4Hcsjq%2FocTyRlhuNRrqMLXZ4VI8npW%2BwYzw1xKMPfgikX3KIe7eRaNJ%2BfT9ZZjC0she%2FlEbH1UStb6ZoCCwXv1u%2FYkBFOkowgzKOSo7hXkhJotNdOBDJxooyikRXP6hNnEUM%2FKtuDASIQYLojQDmO4N%2BbJ2WZg2yfaXfL%2Fp5qj%2Bl3s0K9dMqn5fPMIqY874GOqUBCWagFcicvb663YH8vRz9NjlRmK68NlJQJqS%2BXZcL6Op0WCb3nTRvdjFidfGKPK%2BbRBxjAFyxk0NLLqhNZ%2Fn9v9Xs1nBWM%2FyDdknWGg%2F9XuptQm0QMZNvy7ovrXH2sFFuUfUmCY2S3T6ICbtpv4SsMwcdLU3Op0OFioGFpK3HZP2kVqS5PVI72Bsr2%2FBOW8L8p75H59NFLTdmjD0BbprRVP0Lnnv5&X-Amz-Signature=9a0f0e080bdee1c222c7addf0b827c343df33900a62685528e4074eedcfe1332&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRENDR4K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIC016bxJJeLkmlDW3qAA7CmIlzBU79moZYc5edgkS312AiEA%2BvtqZYKJKfPBnxDWzKKRGg9gIOBI8OKgIxtOvkbCLF8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQfwddlAiVpbETvyrcAz9iC6cuDzIYfspV2dY5SRiTCS9v2mwnFHXdQPA0Wh7bQhn9Wq1mp2VUwMsvEMtyjCpY30XS1GZZlVj%2BVSUiK1pPBArTeZzZOwBONDyHYf3M0ezgmjy7guFHl62NgdbKw7hp6sK5I0BWfQlr8FaOnrE4%2BVpt0i6nP2EDWN54UO47wc3jClxP%2BqFHo4RWQGBIk4evGO1XZA1wy8UtDtsvZOmeFz2EKaA7Zf3kbrUPAjCdmUt4W5mn0lIg8AtXnTWdCz1UerP5HK80BjJyx%2Fne6FglzexNwvEU42Xi86EZC05vGSLp1qeFxnc%2B0Gr56qU%2FSbyIi36Z%2FtIOJV1ri87AfvQAgrwngJY3IZO4y6gnGbX9s%2Bmam5RHZYOUxb1HpSxeEDq1QowAszgna5WtDUof1vbB%2F3QQCZg3ttc0LbqvXWV817VN9lqI5zh7sqwFJHVh0DibFlV9sL%2FCsh5qONicLaSWepZlFHWh5nnt%2FJ6yiSHLI4lAbKXlm%2FBtqpZGj4eECRjBxb0SmMieqGthJ%2BWlDvwCb%2BXj046pInjaCGIM%2F8J6BX4CdN2KY5v2UDPIeqsb9LqlqH3q%2BKE4bHCFNQIn9O2rNxyW%2FWGtfxuBOObbqWr7kJqgvhfqmQUQUOMAMP2X874GOqUBaAuCkjT8RNVElobSVYW%2FNVeNHosAhBE9%2FqZ%2BMdT8iVSTEzlR3rMDbBmKUTmBHfdNSy82ZOdaR1pZthbyBPJJhnounPPGrd3F%2FPx016YpZBn9rlDDUtLxA6zN3E3FYvjASGwnmaFhEP8RF4HzqOwoz9pd5x2ZmR3F1dQ6ELg33Qrl4hbVS8h8cfQE4a3%2Fm4XzjwnTl0QX%2BGcHcFL84FfQQ3Yu%2B6Uy&X-Amz-Signature=fc02ecd42f8aade562183e8859d4dd6f492c8d6c6f4c766a7740cdee29e24685&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VORESTT6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIA0iQojeBaImjm6uJ9%2BYdwZd8TrXoinGC1VgR2MfLBYAAiEA9X5D8ugiLIwpXgvIF4EvNb4ZTE9A8FFdKasEXBQyoGsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWGFsPWEXABzR%2BTgSrcAzcmwEzHshZaGTqRj1R7qyEFsCmFxRfAcliL8tOLES9KIVUwgrVltR6KPOpWSgW8gHIi4phhiUmzWRBsMpXgdJGt0h7VvulNtS%2BdAKFbYyuoKvRH7xxmnKDcFI2rM%2Bo%2BM69MT32AItvEttYRZK4ECYTvOav%2BFfXJCfo2tV9A7J6KXpijKwhzqgMKPubj43S3GLY1693GrIINh3zTSuiuN3H4g%2ByfRFUK5JwQRvWWhaMR8WrHksvyjiN0wRg1FfBbNulOL%2FNX0SU%2FiuwoKbiUhQhcSJsh6ChULy2SRMEbnAkVB84hNPOtaoohQEt3e%2BMruJJw7DrepdQ10%2BlvdPQMFMQLyBfUUlYzdcUyNDdANkjZaH3anOIfzHNeY%2B5bUlHG5uFrcZMXZ7qkm0lV9Oa3KTdT9bVjm33V5F9B%2FQiTOxELO6okKBUlE5%2FyJSMz3NmIqWyx4UccXW5xCpz%2B43NQ0H%2B6BXfGlnolTVnuV7jJlj2cUDuGzGCoVzZHI4ttZx4uVp0nrrNwbS0BQwv%2FG23tFEpSyS1yLFuIj9%2BrbmjUBOdSeXX6nRtM9IezOYQZjLq5PC%2BtqwPGwub%2BPSk0xuf5OMuzRuYdWcPy6hASlI2fQTuv05Uz6DWw1aXLKJ09MI%2BZ874GOqUBqerMmpkSO6CqZBlbjcRFom8G5O7cukJHdXOpLicEnWrt9MY9CsG0JBSa79tJ29A5VJAA5CTZlGcIqhNmhXyayrkXz%2FwwE2UG%2Fh4sNnQRYWICFXdIhdtmn1GeiSBdOIEUSXkK5lh69ye3sZny9EPLYWr%2FPNG1AOfP26k5oAFbOxzAxSuVqPFbAFRpH4tlNe5YI%2FDNR5dnQ8l6UfJ%2F4VzUW9R%2BAVRQ&X-Amz-Signature=fd495d7c44d532441214207acdc1f3928c209e4e19b49af0bf0492ee11048692&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTI2HPGF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEWI4mwDN3%2F2Z2WIlKOjgdLCVtuw7vfGWQlYU1TFe2BtAiEA8EuGycWe7oIZRFMqSiYwvSMiBXGglbGy3QMnXuQA4GAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGw8nFYcwl1EtZ6obyrcAzGurV2yYw3fe9F5Q0dOqHD9u5%2FVjZvJerOQ6nZ7rS6MxHbcKSU%2BIkbVRc554%2F4%2FQ0%2B%2FOdarXf3JErXGmnkwEL3%2ByWV6z3bbuffZKOTkHFk32qjDTC8Xb%2FI%2FRhDDmW4ZQi38FQNQZtsuydFX0pblRqVfSkcFrHzcYsXHP4XsYAUpCTvib3pQw%2FCPfRV24f5bMWmK%2FuKAOPn26CWh4d6fBV9k5EHq8pdm%2BCpuw0QTZY5HuhOeunBzJXb354qZrrKGLSGd7Vx5JAEjpEzeeb65rss5tOZ6%2BF0yollJrANVr86Il16mJoplLfG9ivLbQp5T2z6AYnFPbmGJXzOtgHxMxI7ds7oXZUcwEElO%2BH2Hqt2khA6rMVSAgUV%2Fk9MpE%2BUOdysRy29SlpBgLken5dtZ9oxZluMiNcafe4dLVSW66SklPTSiP2hsg3pyk%2Ba2gmD6k7cf4Hcsjq%2FocTyRlhuNRrqMLXZ4VI8npW%2BwYzw1xKMPfgikX3KIe7eRaNJ%2BfT9ZZjC0she%2FlEbH1UStb6ZoCCwXv1u%2FYkBFOkowgzKOSo7hXkhJotNdOBDJxooyikRXP6hNnEUM%2FKtuDASIQYLojQDmO4N%2BbJ2WZg2yfaXfL%2Fp5qj%2Bl3s0K9dMqn5fPMIqY874GOqUBCWagFcicvb663YH8vRz9NjlRmK68NlJQJqS%2BXZcL6Op0WCb3nTRvdjFidfGKPK%2BbRBxjAFyxk0NLLqhNZ%2Fn9v9Xs1nBWM%2FyDdknWGg%2F9XuptQm0QMZNvy7ovrXH2sFFuUfUmCY2S3T6ICbtpv4SsMwcdLU3Op0OFioGFpK3HZP2kVqS5PVI72Bsr2%2FBOW8L8p75H59NFLTdmjD0BbprRVP0Lnnv5&X-Amz-Signature=c6bcd0c2d4994c6fd21434782b05aae60f3e9497852b8cb0073cbacc8cfa93bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
