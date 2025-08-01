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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FJN7HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmLlPKXWbMPJ6rZ%2B66gp%2Fss6JnoD3xhgrRATxv7GtlAIhAISOMg1%2Biur0gGGtaHF%2FBv10hoJD4sEhblStdG%2Ft3Dn9KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCHPxeyc5kwN9X1g0q3AMa%2BJ1%2FCf6Ogl%2F%2Ba6xFxtQ0xEuwI81l8%2FL3KC72HUeb%2FpBgVDP16rZtMAGhhp5W6PN2Y%2FUXlm2M2%2FO6nI7Q2ndn5aTXZcTWq6OFJY9tbF7AQPtX%2FISCesGR0i13myqXdZuAqn1mc5C5cVfPcP1RjGAFkqpaYwqZhRW6RmvzZpUP7XBMNHclp5v3Z8JNWL1TpQDOG%2FTUJwqotHziOHOXFyFUfhH5vhmwKGcGFhxqd8O8gatM9grY4ZzjCgsHQ5mvo2v3uE1yVYsj3Ec6p2CdCvDG9tFetf3W2wnoA09V45TwumlHM0g%2Fikxzyx5nUux2kJc7xSXwE7U75ihj1CDDdG4vBn0cQlg4zSuFI0XmL%2BQjChCJqZsnTGHPjKhefBlw%2BSfB%2FcS47bB7ehTMC%2BReDtRkHqaba5oRG%2BwJGfSIgGHq63nvr63%2BIioVx7VHjEn%2Fd%2BVE4NNFpV%2Fbe9vZc6tKy22uZw5jEuWLBo5KSgGAWFYhlmelRS8GS20067ESt2S%2FMBGq3ED6rslnerRBdQWDAff2h9zj5Qf5RS2BNkOgaQ2mFpL2anaSOct4w2U8gGR%2Bv2QhI%2FTgb9Ogj7jS2V1OjDfraEKL0W%2BD6tdu5rE9DYwENoLujIWeisQYImJ8ojCTobTEBjqkAbm2oi9pdfSlwkq8Wf2xZ1fq%2BuG%2BIAbN01qLeNf6wbS4%2FDpdHHqh6fr1kJFaCrIZHC97P1%2BhNCXS6JcJSjr4%2BNeB7sGF7HykrKXNUBNNLy%2FlMhTbO9jpErJ%2B9B9HSO6YSrPD8mzFrnKPEe%2BNBFUKBZicAd3aUzTAC008oTtn3hZgKTadk67%2BCj2CInS0MLcLScTq6vlKR93R0yIKn9frqXvPX3AY&X-Amz-Signature=6d8bc7f9b0875931954db893f6615e02e9dcbc192cb727f7932ff4e9b0691464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FJN7HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmLlPKXWbMPJ6rZ%2B66gp%2Fss6JnoD3xhgrRATxv7GtlAIhAISOMg1%2Biur0gGGtaHF%2FBv10hoJD4sEhblStdG%2Ft3Dn9KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCHPxeyc5kwN9X1g0q3AMa%2BJ1%2FCf6Ogl%2F%2Ba6xFxtQ0xEuwI81l8%2FL3KC72HUeb%2FpBgVDP16rZtMAGhhp5W6PN2Y%2FUXlm2M2%2FO6nI7Q2ndn5aTXZcTWq6OFJY9tbF7AQPtX%2FISCesGR0i13myqXdZuAqn1mc5C5cVfPcP1RjGAFkqpaYwqZhRW6RmvzZpUP7XBMNHclp5v3Z8JNWL1TpQDOG%2FTUJwqotHziOHOXFyFUfhH5vhmwKGcGFhxqd8O8gatM9grY4ZzjCgsHQ5mvo2v3uE1yVYsj3Ec6p2CdCvDG9tFetf3W2wnoA09V45TwumlHM0g%2Fikxzyx5nUux2kJc7xSXwE7U75ihj1CDDdG4vBn0cQlg4zSuFI0XmL%2BQjChCJqZsnTGHPjKhefBlw%2BSfB%2FcS47bB7ehTMC%2BReDtRkHqaba5oRG%2BwJGfSIgGHq63nvr63%2BIioVx7VHjEn%2Fd%2BVE4NNFpV%2Fbe9vZc6tKy22uZw5jEuWLBo5KSgGAWFYhlmelRS8GS20067ESt2S%2FMBGq3ED6rslnerRBdQWDAff2h9zj5Qf5RS2BNkOgaQ2mFpL2anaSOct4w2U8gGR%2Bv2QhI%2FTgb9Ogj7jS2V1OjDfraEKL0W%2BD6tdu5rE9DYwENoLujIWeisQYImJ8ojCTobTEBjqkAbm2oi9pdfSlwkq8Wf2xZ1fq%2BuG%2BIAbN01qLeNf6wbS4%2FDpdHHqh6fr1kJFaCrIZHC97P1%2BhNCXS6JcJSjr4%2BNeB7sGF7HykrKXNUBNNLy%2FlMhTbO9jpErJ%2B9B9HSO6YSrPD8mzFrnKPEe%2BNBFUKBZicAd3aUzTAC008oTtn3hZgKTadk67%2BCj2CInS0MLcLScTq6vlKR93R0yIKn9frqXvPX3AY&X-Amz-Signature=1856e4ba03e8fec41f1cd83271c2dd10c0c005cd1d874a9008d386b6079e956e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FJN7HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmLlPKXWbMPJ6rZ%2B66gp%2Fss6JnoD3xhgrRATxv7GtlAIhAISOMg1%2Biur0gGGtaHF%2FBv10hoJD4sEhblStdG%2Ft3Dn9KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCHPxeyc5kwN9X1g0q3AMa%2BJ1%2FCf6Ogl%2F%2Ba6xFxtQ0xEuwI81l8%2FL3KC72HUeb%2FpBgVDP16rZtMAGhhp5W6PN2Y%2FUXlm2M2%2FO6nI7Q2ndn5aTXZcTWq6OFJY9tbF7AQPtX%2FISCesGR0i13myqXdZuAqn1mc5C5cVfPcP1RjGAFkqpaYwqZhRW6RmvzZpUP7XBMNHclp5v3Z8JNWL1TpQDOG%2FTUJwqotHziOHOXFyFUfhH5vhmwKGcGFhxqd8O8gatM9grY4ZzjCgsHQ5mvo2v3uE1yVYsj3Ec6p2CdCvDG9tFetf3W2wnoA09V45TwumlHM0g%2Fikxzyx5nUux2kJc7xSXwE7U75ihj1CDDdG4vBn0cQlg4zSuFI0XmL%2BQjChCJqZsnTGHPjKhefBlw%2BSfB%2FcS47bB7ehTMC%2BReDtRkHqaba5oRG%2BwJGfSIgGHq63nvr63%2BIioVx7VHjEn%2Fd%2BVE4NNFpV%2Fbe9vZc6tKy22uZw5jEuWLBo5KSgGAWFYhlmelRS8GS20067ESt2S%2FMBGq3ED6rslnerRBdQWDAff2h9zj5Qf5RS2BNkOgaQ2mFpL2anaSOct4w2U8gGR%2Bv2QhI%2FTgb9Ogj7jS2V1OjDfraEKL0W%2BD6tdu5rE9DYwENoLujIWeisQYImJ8ojCTobTEBjqkAbm2oi9pdfSlwkq8Wf2xZ1fq%2BuG%2BIAbN01qLeNf6wbS4%2FDpdHHqh6fr1kJFaCrIZHC97P1%2BhNCXS6JcJSjr4%2BNeB7sGF7HykrKXNUBNNLy%2FlMhTbO9jpErJ%2B9B9HSO6YSrPD8mzFrnKPEe%2BNBFUKBZicAd3aUzTAC008oTtn3hZgKTadk67%2BCj2CInS0MLcLScTq6vlKR93R0yIKn9frqXvPX3AY&X-Amz-Signature=9e1b5685ccfbae082ba2978456b7527acf07acfe9ffe6b5dc35cf26da49f09d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQAKLR76%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4LE6tprYBc%2FhT1gJbzPUNtdlpkKB4Ur36eJ%2BAsQ9YbAiASYAJi%2BnIQjTY1lsZZyVl0o7uNvs%2BGPirrbXsSVNA2NiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeVCAM0F0E2sGFY4QKtwDdNHiO8%2Flp6a3rYoYb8cT9GlkkNxCZs0S1nmrNcs2pobnzLILWN3yXu3f%2FGaV%2FH%2FHBl6mEwDqkcNDmknWS193WztuoDGKgXkA7iTmgJ4mDrsbuyjF3fPUBNz8estiCcCw6UsJOs%2BSjc5LV8mx%2FI%2BPMppuP874h1DTvwTTUJjM1PrB9wtQsdV3nVnkxvADxT3qMS%2FqUTYMNvENYH6h6SWKOJtHdhROBXZytrzu9C6Lo03DZ%2F4eCwgWSb8p8jnwtRR%2BqRSt5IX%2BWY0DoHiIDEbpFOlfEar7VuLcnOx%2B4LAMhiWPMqPiVOQLVa%2BbCLLLwtWgNYFZ%2B24pHXNhNYOKPwzUWCTiOwtG%2FWcC2OU5ZwbcuTOIqUlMminrfO%2FppI5TB%2Fh9pfXdMPkH%2FWdI%2F%2B9nZD7e8gkYy4MClzsZGgI9L9LQI%2BT571EB8Kc%2FQ4Jv1jiMlNtvM7C1RryPW0Xe4Ley%2BFKVcDAujEuKHSbQt3cxqz%2BKYYydB%2BQ4vNMpVWeccXKdJJrnA%2FWz301Zum3YabzWsOu9MgtIPKJPIa9pEzyGlGmVov4SF25axF4jdvAr3CTR5P7tTV90LuxUa1IVbbaozCjmPaH8MdbkZxjy3%2FuS7UPe8qacfM6FtrxmTdxPyYsw9KG0xAY6pgFLF0Uyqzq%2BU4DasaXCnwvAWBlyB8CSq%2FN7jvPooo6qM8cdLsi%2FPeYPH52IhdjPoG%2FhCH%2BGjjHwmuJuqxV5hmrb3v5O%2FivwB5jjmY2GMxJJS2kShKkJ%2Fnoh17FHg%2BZ3Sqxugv06y3XITpArLRVNWi0AkL1Q6AhstuQqBUQnqSUN1wjq%2FvY9C03raj9rK%2FApuEGgF5yIaTIpYUzIs8LAjZlBWNagOvz8&X-Amz-Signature=9460f0de987cd8956677b9449a9046a1bbca19718ceef40d4fb8c11e761bc501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMSVXDE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG67jbZtnPtM6MI6jF6v7M0CftK0lJSu04yduxgVjtY1AiAzzjCVWQT9r2kmulonjle45hxmXcOWJ5dcR%2B9y5QArWSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgh%2BwRiBaLOYQOd2KtwDxjPXU01VFBFmVjzFu15olMctbu%2FqqDUFe3M5B2%2BTc5BnkHHsG0OroWzw%2BNZta%2F6Rm2i0Y7xFEI05y7dEL6zr2sDq4NFxP7c4lyCDwE56JdbFZ4xldGw8fICi5l2R1MmbhZ7V%2FDuA8Yi%2BabqXUSfzjfzWDKsfRr%2B3QLiwp1fiQuNMYktVu5ocKLyzd2%2B3QV6FJVDU%2FVjxMjSTrQqkKcHl1YaC48TLPW72E00CoyHUV2%2FPM7z3Gc0w%2B%2FZyOuImPIMHJXRUfWc48GkBEtOxGdih4jvJsVbyaYa3vVDZ4QKNdi7yRlNN%2BNTLrB70F8Co5%2BwNx3n0Ud9N3%2FB9yYjqmRKafEhubjFNRl9VLXj4Joy%2Fldbioh3eZFQMFuCBHVjvEBDVYrIgpQgH2EwRcSilZdcUDSnJwz4HChs8ewdXiBMDlglG9DqthK1YKsfPIDxSVS%2Ba1jLK3jiFCI%2B76SmZbKLTRSw64eN78FQz9uUJvDDcvo%2Bbg0YbTSpvUtC3a6urw8XiKflMwKFz%2B9hBHQ9wz0zUqIuuI2iFhw65MsrHSuJnSM6vx%2BPXD9lm3JG9HkexT75MH6FaTxGH41uAVX9CLYbIwOApdD%2FphDNMibhJ5ZvpnlBDPeLMt7dqo8UavbIwnfqzxAY6pgEgweEnhVjLuSoR1DxKSDVZRYtO0fnKI7DjONWDQ1nrUIfXUOdfcbjmWSkzTgtEhCjHCJN6zuQDwZGe0h9bv72GeU8aVhh9qvLj2aZXBUwJDBTbMQXf99Cv7jmbH4a7WqKu%2BEHlBJCm8qD67danHsoS9bMIT%2BA5yfzUaDR%2FFwP8YpYL%2F0OYh6qlql54QbtM8dWg2oBIzEdiWVWoAm0UoKX1T8HRTLzX&X-Amz-Signature=22255b94483748e8c111f08586e9d737ac6bac53a8a87d8694d86cbcedf53f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FJN7HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmLlPKXWbMPJ6rZ%2B66gp%2Fss6JnoD3xhgrRATxv7GtlAIhAISOMg1%2Biur0gGGtaHF%2FBv10hoJD4sEhblStdG%2Ft3Dn9KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCHPxeyc5kwN9X1g0q3AMa%2BJ1%2FCf6Ogl%2F%2Ba6xFxtQ0xEuwI81l8%2FL3KC72HUeb%2FpBgVDP16rZtMAGhhp5W6PN2Y%2FUXlm2M2%2FO6nI7Q2ndn5aTXZcTWq6OFJY9tbF7AQPtX%2FISCesGR0i13myqXdZuAqn1mc5C5cVfPcP1RjGAFkqpaYwqZhRW6RmvzZpUP7XBMNHclp5v3Z8JNWL1TpQDOG%2FTUJwqotHziOHOXFyFUfhH5vhmwKGcGFhxqd8O8gatM9grY4ZzjCgsHQ5mvo2v3uE1yVYsj3Ec6p2CdCvDG9tFetf3W2wnoA09V45TwumlHM0g%2Fikxzyx5nUux2kJc7xSXwE7U75ihj1CDDdG4vBn0cQlg4zSuFI0XmL%2BQjChCJqZsnTGHPjKhefBlw%2BSfB%2FcS47bB7ehTMC%2BReDtRkHqaba5oRG%2BwJGfSIgGHq63nvr63%2BIioVx7VHjEn%2Fd%2BVE4NNFpV%2Fbe9vZc6tKy22uZw5jEuWLBo5KSgGAWFYhlmelRS8GS20067ESt2S%2FMBGq3ED6rslnerRBdQWDAff2h9zj5Qf5RS2BNkOgaQ2mFpL2anaSOct4w2U8gGR%2Bv2QhI%2FTgb9Ogj7jS2V1OjDfraEKL0W%2BD6tdu5rE9DYwENoLujIWeisQYImJ8ojCTobTEBjqkAbm2oi9pdfSlwkq8Wf2xZ1fq%2BuG%2BIAbN01qLeNf6wbS4%2FDpdHHqh6fr1kJFaCrIZHC97P1%2BhNCXS6JcJSjr4%2BNeB7sGF7HykrKXNUBNNLy%2FlMhTbO9jpErJ%2B9B9HSO6YSrPD8mzFrnKPEe%2BNBFUKBZicAd3aUzTAC008oTtn3hZgKTadk67%2BCj2CInS0MLcLScTq6vlKR93R0yIKn9frqXvPX3AY&X-Amz-Signature=64a436bb19b6143f074454dd27c189a98d9dfe2410a179b7cd8c38116d147fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
