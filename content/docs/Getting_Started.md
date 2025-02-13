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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGMJSBT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqsb1DQWoCTDTo0vBR20GeECckwoY2Ffk71JJS38JszQIhAMETFzXVbOJ9Xp%2B95H53CQ3G64oSYz%2Fhxk%2BbEGmwd14pKv8DCB8QABoMNjM3NDIzMTgzODA1Igx7ImBe6%2FiuMFxY92Uq3APFANlnHuHOF3uHHDLj0gOnIiqizKG%2B2MNxvAm0xzkeMYderiHSCJUrpjr9N6kcdIkq49lQE%2BdeFR%2FMbV60yGWLlXICaDtR7b4dm3vTUL0Mmh4ep9oGq9NdjW6rIqFPAR4S%2Fi06dWR2SCm9cycCaik88WwVGwxDmdhQJRqtWpUOHdge6RdJjBrFSXK5jN7KT%2F6PCKWGEo8X%2BRZaHRa0w6g3j1Ip8NDVuqaowhQJom1Wjf%2Bju%2BcLDF1iq4bJNERmWdEhLb42N5ggFy8Ml%2BcmwpgEyK94g87Ev%2FokFRrwR%2BVXiPhBT%2BJDqfaO1ocjQjycc1FxmBNvjj4rod9T%2FxWcaOrDzuaGxcautAT9m2A67EGSkt31jojKi9N4L37IiseJNC9mliQSCpuKemcjRzNdSHBtWeb2diA%2Fy24lLMtQUBLVmYch%2FDVmGBz1MfnUi3jhnqw%2BqLz6qDOGu%2FD8%2FADALPe9112kwyy2Z2nRfpgMWMl6AdcPrLGaCC8oUEj7ccD0iHjcAJZqGMfhp9KXa46%2BOiR5LegwM3k3Q1HR4gpwX%2FSZOlmdnuxFglkQwmC8H3jfAvQrA%2BsBQrF%2FOTjIVIPNa7lYg%2F%2B7p9v96jNllFhXVSe64gPfuqM5iDxTgOFVbzDX2bm9BjqkAZdlurBNkMJtwxOQLB5yPWg45MWqtMyzmNuv0oUD%2Bp7RQZWw5ySIQ6ynnxAiWJ9QH5uivrlPYH2rzKLjixQwvfgsqV%2BC244bSBHwyS%2FIqE8encxtbpcOmgFlVzPJiY4XbV0EDOG0yhXrAsOY%2BJZ2wR4RRYRMPIofzvGBaspfJPufFIa8pdu9NLCqQ4bJxY8VBIfWWE%2BvBbRs%2FcwuUBimvlPfYyTn&X-Amz-Signature=e5f10188af2431b87d2df24035a17b751eb728c870a7df1924ba819331968429&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGMJSBT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqsb1DQWoCTDTo0vBR20GeECckwoY2Ffk71JJS38JszQIhAMETFzXVbOJ9Xp%2B95H53CQ3G64oSYz%2Fhxk%2BbEGmwd14pKv8DCB8QABoMNjM3NDIzMTgzODA1Igx7ImBe6%2FiuMFxY92Uq3APFANlnHuHOF3uHHDLj0gOnIiqizKG%2B2MNxvAm0xzkeMYderiHSCJUrpjr9N6kcdIkq49lQE%2BdeFR%2FMbV60yGWLlXICaDtR7b4dm3vTUL0Mmh4ep9oGq9NdjW6rIqFPAR4S%2Fi06dWR2SCm9cycCaik88WwVGwxDmdhQJRqtWpUOHdge6RdJjBrFSXK5jN7KT%2F6PCKWGEo8X%2BRZaHRa0w6g3j1Ip8NDVuqaowhQJom1Wjf%2Bju%2BcLDF1iq4bJNERmWdEhLb42N5ggFy8Ml%2BcmwpgEyK94g87Ev%2FokFRrwR%2BVXiPhBT%2BJDqfaO1ocjQjycc1FxmBNvjj4rod9T%2FxWcaOrDzuaGxcautAT9m2A67EGSkt31jojKi9N4L37IiseJNC9mliQSCpuKemcjRzNdSHBtWeb2diA%2Fy24lLMtQUBLVmYch%2FDVmGBz1MfnUi3jhnqw%2BqLz6qDOGu%2FD8%2FADALPe9112kwyy2Z2nRfpgMWMl6AdcPrLGaCC8oUEj7ccD0iHjcAJZqGMfhp9KXa46%2BOiR5LegwM3k3Q1HR4gpwX%2FSZOlmdnuxFglkQwmC8H3jfAvQrA%2BsBQrF%2FOTjIVIPNa7lYg%2F%2B7p9v96jNllFhXVSe64gPfuqM5iDxTgOFVbzDX2bm9BjqkAZdlurBNkMJtwxOQLB5yPWg45MWqtMyzmNuv0oUD%2Bp7RQZWw5ySIQ6ynnxAiWJ9QH5uivrlPYH2rzKLjixQwvfgsqV%2BC244bSBHwyS%2FIqE8encxtbpcOmgFlVzPJiY4XbV0EDOG0yhXrAsOY%2BJZ2wR4RRYRMPIofzvGBaspfJPufFIa8pdu9NLCqQ4bJxY8VBIfWWE%2BvBbRs%2FcwuUBimvlPfYyTn&X-Amz-Signature=2addc5ab36abf36ff5728f42e08763e0b62fa8ebf81fa3d6ee83d1a72e682b79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YJ6GP5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKMreIRXGvxjgBFhXZFY98jCbVzA7xVvGS2z%2FO62O68gIgexTbnQoMHYa97izmK%2BWn7SMQDXcFZal6hbUyA%2BCca48q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDGYCr0pg4zK7q1ZxJSrcA3T1caBoiTuJdU8TLDgx28iTMZwKYS7VRYkoeB0tfs8ArR7fcFD%2B3LRvlGe6RULV2XhwpBi9LTyQkKhgWVhBwCKVb63dRqq2HeVReL6vp4gafee6KIBNjwaN70x9dIYdhyYpj8OAa9VJP8F%2FI4HEOyohtnH9mQVqeou3LUaIantvTki9jdqd6ZXcKaO2vaN9NacSip9yW7PyA1Cly%2Bkcs4IAufyzPIkYwZlssqkmEjddbvwi2SXkzOwd3yiNa9Xzm5Kdpk7fxP%2B13yd7buyFKRNBKvUy%2FVzHPz6ksz8uk433rFN22Bo8kEZ9uQa1Z6yXhn7%2Bh%2Fw1YlEyIZWmXSYAIBRDRYb7ceVYNZvRFTFgKutmDWrqJOV7XnrLL9jA56%2FJ1%2BXiVPplYXfkIJNpCenn8Tm0j2ikIN4HZMG7QYzt4yqG9%2FRuBify4jCWbX1HOityoWDYZdUYa5PWp5Lt%2BZOdSRzTlG2MboElZ2BevMvj1qU9Kq9A5KpvF9BSU1PAJ8k%2FwuMLuOca9W20NRstjTH8grrTxt2UTi2uR%2FRQUKNJdrq0ifquHc4aagqpbpgLIknNO48EV6%2Fo6jIi%2FMp6ybKG6xw6m3Xne7HUOmMq%2Bvo%2FMMhw5zHh26LvRjLEOghaMInaub0GOqUBpouNGiyYPDfja9fhUxFxRLgPD6RzdV8zNVvWhny1Caa%2BuaLwpXPECp0vOYFltmDLXbvQVU4KA5U07bRFzsBkods6K%2BjUoWF7PYDvhKNpRFFPX0jJYCK4TfFUa%2FevXkeGFDR7Tg5tGA4ZS3iG%2BYOCX5lzZmfUktdX9k7dGHk4iETdG8Guz0%2Fa47jFEIlUEL96ioITfPp68qw66SV9SM%2F9wanVkAoh&X-Amz-Signature=221679949d36b4b28e84352f9af02e51cff81d775073721d8a47030b55f70b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDOSYTNL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM92p7BnbcackTy9zWSfg7UUQugbyuiWDK6V%2FFWxWVXAiEA1TLcqr%2BCUFJWxekbvTB1sHcMPl1V2LZWxB%2FQDT2Tnwwq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNWHN6eCcoSSQTxz4yrcA9XUQakC1%2B8Wq7u0zhL1T%2BuW4JyVwE3CnVqAbUxQA%2BB1gbGhD5QgLJiJXXfOi70bIlt5L%2F1amvPEOIcg%2F95rdsUCItdvOYaSNRHZQJerqzS29vcV0ZZzmn0R6iclN5NH4CWZ0I6nwcW0kyS6jgZ9T2LknSkSOVyawQHGZNxUHrlUVtdYBEqKwIAobsEcjsExSq4yJyeh9yENLZOPsAI4mC3wHQsQ53hCERRZNYySXyKqWxi3CgpoViy2ao8WMmtgSjN2raLO%2FEQ6FArqVS0PiHSN%2BLKDw20MtWDpWsjgiUg0yvE01evtywWIa95f51udX41TKpI3JFghK3vl9bNIYAzZX4bd%2FBWwrTyNjZDKoIty6BVOQTToPNRrwl5ucBTZtR8OzG8wm0wtYxLNpJp4fcFyyuPkd7mUUKWqWxqppHmCK%2B%2B%2FtyVMYhPtNh8udXYD6ez3q9R0PxjKFtyBlsSHfiIaNppPy%2FJcQPxrS8YtAl6MwwOWN0M4N6zLAAFfe8NY1ZxHaapP6nKNSWfvITJjs4SkLpKgrJv3ZVuWCvEJ3GTnQKDj3aK4VQiubMlsgrMY607vT5B2Z5xk52%2BwVi0IFTxflFIF62UmPiMW9hISD%2BaPIn8q6i2A1piuCA8hML3Zub0GOqUBW7HFU%2Fsr3smFHZ0J7lmA7eOHZzLovuN1CdWN%2BZCXegURtXtFb0t%2BWs%2Ft6zge0VyUY170qPh94oKGyyHOgYQyRq1LVDpZ%2F0K9NzIFvmrtSvThY4vmjdqtTN4wz%2Fjlk79y0iDJn4o7esBnVkar%2BHsUS3ojcQRHPgErqEPJJ4S%2FXYnlAPsVgamAB%2F8LCKPPfV14chZNwKcDDlU8Ce4gSs69HZrS3j3X&X-Amz-Signature=37869aaf6fc5d898a8c9353b4fd991b9b38fae071f0f70d6963ac0c13a69b0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGMJSBT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqsb1DQWoCTDTo0vBR20GeECckwoY2Ffk71JJS38JszQIhAMETFzXVbOJ9Xp%2B95H53CQ3G64oSYz%2Fhxk%2BbEGmwd14pKv8DCB8QABoMNjM3NDIzMTgzODA1Igx7ImBe6%2FiuMFxY92Uq3APFANlnHuHOF3uHHDLj0gOnIiqizKG%2B2MNxvAm0xzkeMYderiHSCJUrpjr9N6kcdIkq49lQE%2BdeFR%2FMbV60yGWLlXICaDtR7b4dm3vTUL0Mmh4ep9oGq9NdjW6rIqFPAR4S%2Fi06dWR2SCm9cycCaik88WwVGwxDmdhQJRqtWpUOHdge6RdJjBrFSXK5jN7KT%2F6PCKWGEo8X%2BRZaHRa0w6g3j1Ip8NDVuqaowhQJom1Wjf%2Bju%2BcLDF1iq4bJNERmWdEhLb42N5ggFy8Ml%2BcmwpgEyK94g87Ev%2FokFRrwR%2BVXiPhBT%2BJDqfaO1ocjQjycc1FxmBNvjj4rod9T%2FxWcaOrDzuaGxcautAT9m2A67EGSkt31jojKi9N4L37IiseJNC9mliQSCpuKemcjRzNdSHBtWeb2diA%2Fy24lLMtQUBLVmYch%2FDVmGBz1MfnUi3jhnqw%2BqLz6qDOGu%2FD8%2FADALPe9112kwyy2Z2nRfpgMWMl6AdcPrLGaCC8oUEj7ccD0iHjcAJZqGMfhp9KXa46%2BOiR5LegwM3k3Q1HR4gpwX%2FSZOlmdnuxFglkQwmC8H3jfAvQrA%2BsBQrF%2FOTjIVIPNa7lYg%2F%2B7p9v96jNllFhXVSe64gPfuqM5iDxTgOFVbzDX2bm9BjqkAZdlurBNkMJtwxOQLB5yPWg45MWqtMyzmNuv0oUD%2Bp7RQZWw5ySIQ6ynnxAiWJ9QH5uivrlPYH2rzKLjixQwvfgsqV%2BC244bSBHwyS%2FIqE8encxtbpcOmgFlVzPJiY4XbV0EDOG0yhXrAsOY%2BJZ2wR4RRYRMPIofzvGBaspfJPufFIa8pdu9NLCqQ4bJxY8VBIfWWE%2BvBbRs%2FcwuUBimvlPfYyTn&X-Amz-Signature=57d2775a572a99f7a870c04dfa5ac40d8e95610ceeeabfb0006ddfdd0712f6af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
