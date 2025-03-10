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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSL4LO6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDTrrnOb%2BAN2HnP7bBnRpUxCBzzdwSbLJ1uztP1vaOaXAIgIY7O7PWv2SMdIPU1ItM1vM1Gp7aWhcShdFe%2BwatCdiMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTzEvte7Mx%2BgOrVvircA%2BMnAbeUdTokgBUwLs%2BWq%2FLNSnbkdR35hSnT%2By%2FlXwgHdbw4Y6G0H9RkR2Orbe3%2BbblI5xGs3bkp8a9ksE7NjMJ0gFhODkGa3C6Y5DfJJbBbyVExU1x0vgwY%2FGrEHHIFNQrlXMfhNRlxOuttirUM9pPrFAB%2BDSIFI%2F%2Fsy0b8AkC9L8eFVxWjmPmGn33Csn8bUkTBYftBGEGdeqenPZlojwUWyU4kWE3Zx4tF5AyEhlfRi7eHVaDAvaaJRd%2FU9rIVwHWXjA9EMWBj%2FMlO8sL9lltLNH7eyW1UqEfkbqBS9ApVZrYcFRzRNa%2FiVXJXmBK7%2Brhoc4P%2FocxQwv%2F%2BxOpjz%2F5bQ3S%2BvFQm8J%2FQg2wkv5qaOiOoCtnClT2VdNes3fiLWROHprtXNRIBOheud8jSNMHcVCboYSiwNeXcA7r9%2FvRcFWG7iuPYTkQHBZbT7mye5bY82KYhVgfLlqU0QoZqc385cR5HTMflqBVX%2Fh83i7W7XSl9GOuVJapD3NlNouSIp3l%2FvICvxq5Za4hxAWzUSF6C3hkoXcwXwVtjiDzR8pGO627O2U8jUCpsOB6jx1kIBQd9Vd4pHpnQV3wPwP7HA%2FO38379E%2FhVg12eCokKnXKjjAo94gAPwE%2F3mTmAMMypur4GOqUBYt0OcoB8K23iCMXm8yOmliE%2Fx2ljXR2GbCvMnASFdTy2DcDU93EJ9eK2c0RSYIFkwysPdoOP2zZ3wX%2FuIA7%2B6aNR7CNILkQWk%2B%2BzxJqUIuab3NWRi9edUeoRSCpUjY9yWwG6%2F8iHP961OY5ZHXeZyXKZgxVhnKwKPjQEA%2F4vuuX%2FjJ99x5VVPVc7ho%2FPYW7%2FOzXcSO5G98mA0990aLILo084n0dm&X-Amz-Signature=7dc62bd77a0b9b6403dde5f165f9c4a29109604cfb7904d2b96129279404a96f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSL4LO6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDTrrnOb%2BAN2HnP7bBnRpUxCBzzdwSbLJ1uztP1vaOaXAIgIY7O7PWv2SMdIPU1ItM1vM1Gp7aWhcShdFe%2BwatCdiMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTzEvte7Mx%2BgOrVvircA%2BMnAbeUdTokgBUwLs%2BWq%2FLNSnbkdR35hSnT%2By%2FlXwgHdbw4Y6G0H9RkR2Orbe3%2BbblI5xGs3bkp8a9ksE7NjMJ0gFhODkGa3C6Y5DfJJbBbyVExU1x0vgwY%2FGrEHHIFNQrlXMfhNRlxOuttirUM9pPrFAB%2BDSIFI%2F%2Fsy0b8AkC9L8eFVxWjmPmGn33Csn8bUkTBYftBGEGdeqenPZlojwUWyU4kWE3Zx4tF5AyEhlfRi7eHVaDAvaaJRd%2FU9rIVwHWXjA9EMWBj%2FMlO8sL9lltLNH7eyW1UqEfkbqBS9ApVZrYcFRzRNa%2FiVXJXmBK7%2Brhoc4P%2FocxQwv%2F%2BxOpjz%2F5bQ3S%2BvFQm8J%2FQg2wkv5qaOiOoCtnClT2VdNes3fiLWROHprtXNRIBOheud8jSNMHcVCboYSiwNeXcA7r9%2FvRcFWG7iuPYTkQHBZbT7mye5bY82KYhVgfLlqU0QoZqc385cR5HTMflqBVX%2Fh83i7W7XSl9GOuVJapD3NlNouSIp3l%2FvICvxq5Za4hxAWzUSF6C3hkoXcwXwVtjiDzR8pGO627O2U8jUCpsOB6jx1kIBQd9Vd4pHpnQV3wPwP7HA%2FO38379E%2FhVg12eCokKnXKjjAo94gAPwE%2F3mTmAMMypur4GOqUBYt0OcoB8K23iCMXm8yOmliE%2Fx2ljXR2GbCvMnASFdTy2DcDU93EJ9eK2c0RSYIFkwysPdoOP2zZ3wX%2FuIA7%2B6aNR7CNILkQWk%2B%2BzxJqUIuab3NWRi9edUeoRSCpUjY9yWwG6%2F8iHP961OY5ZHXeZyXKZgxVhnKwKPjQEA%2F4vuuX%2FjJ99x5VVPVc7ho%2FPYW7%2FOzXcSO5G98mA0990aLILo084n0dm&X-Amz-Signature=147c0fab9eba460cdbc81fa2b7e52e283fb9aa8049b08109efbe5febabdd08ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQYEGI4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEgSnmbhdbD5RdUq%2FZTHGNoACEowvYBZjEl27bMhltLoAiEAqB5y9JaCX6zZ3fOM7VYWx2fS%2FGFo8fpVr0VQdf3hFAkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItCIPL6oLFwzsnxUyrcA4TsPU0umn%2BunGrPsphJCzUm733VV%2FSDpd2chUiLfrEZ4UKgPdC4gaWxEDzMEUgSJz7M2cfFnC606LsEE2EeM6kaIJDkKh37l3lIm4dVxoBBVlhJ4wTmcNmDZvpKkfTgG4YeChLSpN%2FqvL1%2FQ3vhOn0Xl6DzlHd8D8LrIajjWqvrQKQBhVcoNF1jNIA8Tj9JwbY9XsjqDfH%2BY50sH0uFASZYpyNCHOeRUSnvueLGcOE6AYqbySAwZoQBXQMfB0B%2BvSyZlB45CYYOtmTPrlSeHcaETY3lQyFVL74urywYa6qhbfuiK3A5fXD9EWfe0Qm4wWzE5tAUaXtdUkiGKTWJxxocdQc%2Fmpl2I3R0pCSFWiBWelI1cZGsk2SyWNhzU154uNiw97dxTGPcifxpfc3qY%2F9pR1jxVzkIqD0L2N32ZL%2BHmDa1UlrRUHg8Z7Ub6gqPgsa2mzWpCUH%2BgDuNMFDq2tefq%2FraoJrqi122xGwjj9S9ayUiADbZ1my82mG4Jdn%2BK722z82vbHTmCtDhrZdZDt5B9bMYmkQyn1yWvhYyRJaLuGndtM0M7BDlvFOQM0T13h5ni%2BEJH%2FZq%2BkmWI%2F7oU8zAW3J7b%2Bb1YBIIqeaRrJE3DuKrrJEEkuZA8MyJMMOpur4GOqUBD6AnxTzAIgW9mK0XcpfB8zUyoqjsZQJSUZIgGS1E00vkaRUEqZZpp24mEDD5uBvu9EebXt%2FF9jaD5zOmMYihqrDDU9poS4gZAx48l4SQkfTa5GAqpHxlu2XzXkqynXX9O8K70DD7F%2BOKw9r79cngURqkcUaputBnI8qFSHOXxfReZqveUBFlA5CECqks1AoItf%2FjmUosGdY42AgHB2bAe%2BFDoGis&X-Amz-Signature=a0ba974a5ff42e120fe66a3f387976052befc0809e4d07bd84a6fefc53ae5158&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7F5542%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEBef3oy15k4N0xEznTtUaLIzlUUSjbLmGomS6yFUS4cAiEAr5JOVNKzsMgK%2BnoN069TE8IMJWCyL4ZGKAZfgRH1ZScqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMh3H7A3YsRDNiVSyrcA2cjXyJJgSrS6XAuo%2BJjioRqeyvke2PaFXd9KgD1StNSp6B2BvGGSwP7elo%2FblRsGAlf9prAFY10LGNthLYg0%2BfOpLQUtWeL43qNAMo%2B1umOIGSYqibmd1zgSYVzM6a1NWDdwLEFndo6vGIcZaQvudcC8JAKbawjwUOf2QvaUK0VnKhMr6bkdlwFNxOpIUYdOtcZvrnQOsFR6YOJIzn7O9xt0mkPqP9nqm1NX7GxtSUm8%2FV9O5BeQ3A6ga6RIBhZ%2Bs803A42WITBbBq4G3AOpR8LDtQapoISH%2BalNeXDMZD1jm0W01wb2y843ZWWqCrq%2F3Y1%2BT6GwzjN2aUCF58O34CoxzgXlPj%2FpUKRX7YsLnW1tHyKaE%2BR%2Bp05oPdQe%2BUqNV0ENmb1BfoTXo5SywhS1rWE5EFBrRgtGxqMaQBMW0c%2Fv%2FctKlQXL%2Fx9Oq86mrtLE3QiqjZ3p4r%2FWyCx0bRl72BQ4n%2FVrQoJrKEFoefFIoHBHzTGZb%2BvT%2F%2BrR6hLY98yE6E6WIMngn4hHfptpUlEmnpAjqipe5qQGjiE7EUzQ8hUy3TS21w%2BghIaSdbehW1jjsJcro%2Fopk8zHKKiftf2XkKPIa%2FrZTfQiUv%2FSM6wItLETkVSZnULnza2GUwNMO%2Bpur4GOqUBG1QryaKVfbQ%2F6WNOmda7Jc3%2FqeHJcrDJ3qIyz5AS%2FdqFNkvfts0ovymZg%2Boqo6P3d%2B5oBJfn8gyK41r9jU04FWk07PxSwRapaV1QEZPHdJ0jmN4o66DVQO%2BtcbUIK2FWNSMkgpiYcY1z1x9XLhw7lPgRqMhr%2F%2B6eNP4SyqtDgWbXdDSqVktvn1Sq836%2B%2BYzmLuiARgviWfPo2qtFg7KN4gHRbEen&X-Amz-Signature=3d24ec6f658b955bd753c577d21edbb89edae8557d551ee27f315f41d563d79a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSL4LO6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDTrrnOb%2BAN2HnP7bBnRpUxCBzzdwSbLJ1uztP1vaOaXAIgIY7O7PWv2SMdIPU1ItM1vM1Gp7aWhcShdFe%2BwatCdiMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTzEvte7Mx%2BgOrVvircA%2BMnAbeUdTokgBUwLs%2BWq%2FLNSnbkdR35hSnT%2By%2FlXwgHdbw4Y6G0H9RkR2Orbe3%2BbblI5xGs3bkp8a9ksE7NjMJ0gFhODkGa3C6Y5DfJJbBbyVExU1x0vgwY%2FGrEHHIFNQrlXMfhNRlxOuttirUM9pPrFAB%2BDSIFI%2F%2Fsy0b8AkC9L8eFVxWjmPmGn33Csn8bUkTBYftBGEGdeqenPZlojwUWyU4kWE3Zx4tF5AyEhlfRi7eHVaDAvaaJRd%2FU9rIVwHWXjA9EMWBj%2FMlO8sL9lltLNH7eyW1UqEfkbqBS9ApVZrYcFRzRNa%2FiVXJXmBK7%2Brhoc4P%2FocxQwv%2F%2BxOpjz%2F5bQ3S%2BvFQm8J%2FQg2wkv5qaOiOoCtnClT2VdNes3fiLWROHprtXNRIBOheud8jSNMHcVCboYSiwNeXcA7r9%2FvRcFWG7iuPYTkQHBZbT7mye5bY82KYhVgfLlqU0QoZqc385cR5HTMflqBVX%2Fh83i7W7XSl9GOuVJapD3NlNouSIp3l%2FvICvxq5Za4hxAWzUSF6C3hkoXcwXwVtjiDzR8pGO627O2U8jUCpsOB6jx1kIBQd9Vd4pHpnQV3wPwP7HA%2FO38379E%2FhVg12eCokKnXKjjAo94gAPwE%2F3mTmAMMypur4GOqUBYt0OcoB8K23iCMXm8yOmliE%2Fx2ljXR2GbCvMnASFdTy2DcDU93EJ9eK2c0RSYIFkwysPdoOP2zZ3wX%2FuIA7%2B6aNR7CNILkQWk%2B%2BzxJqUIuab3NWRi9edUeoRSCpUjY9yWwG6%2F8iHP961OY5ZHXeZyXKZgxVhnKwKPjQEA%2F4vuuX%2FjJ99x5VVPVc7ho%2FPYW7%2FOzXcSO5G98mA0990aLILo084n0dm&X-Amz-Signature=73c3dab43e9bb09abba8ff15b24dffe7edda8c88cdaafa4102c250832c943ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
