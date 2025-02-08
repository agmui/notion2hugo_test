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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH66MINK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFCbTHf%2FiJFFg%2F6OYVjyTzk0soA2mE9abSUxOY8HR2J%2FAiANKHgP4rSxjUSaskc2UYQJwK4491FdrQjfInOjDD%2FbpiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKW070gzSKlvSc9gKtwDyKHkZTeyaqI5MzhpZiwQXEewR15JhAUBH5LnE6rGUIneUN1%2F0cXMeZtRBfca9YOCgJKMl6iK5TmZ%2F525HAVPbCH%2FIbgNE6aGrvX7RngqonRXqmg0gnI78oi8QzYbL9IOVxY6iYeIOH8qE9lXGLSXleseyawnDJmVTvN%2FpF0s3BRmUfuGJSp8%2Fb9Qhy1C90jn2IsdwlT4sQp3I6Ks0AMDwUEf%2F8Nt8V8DVF%2BbEHVF9o5v%2F839RforuEiINQd0DOBxCo3vS5WHW103%2Bu7HjjT%2FR7xaLmhX26ZaXtoZpwWwzedizEkHjZ3%2Ba%2BY4yzALy8z3Fbvs1wxQlJn6hiUdc960dQGrmT%2FwyNePk2G6BZ4lGEMORjr0WdMp5dXS%2F2oYCWzEURrZKxuRFwgjYNC4LF43vtxWBjhDzEr8xVvdJfEwhEOBG2FgR9zjmrUuD0LMco2qG2Eequ58dfNDzDUbEcBk6U811jj%2FkEmOmMlaJlpjFNQFvJbHMd2cW%2BazxPfNzeRxofHoFDrRJv7BAZrh5Ue%2BZ9%2BVmJhkIpb230rCzBL7K2cM5XB7ypURH8MadRlQuf1y1deAFIHqwkw8Ga2V43Y4nWcChZkJZ9Wo7KU4m%2FUceQP1z2oLrzSZ1N75VLkwu5CcvQY6pgEr%2FzMmHY2%2FTflMi3ZqhGoMKf6WwmK5ipj4DPxiUoWQPmJvYwrnntqUx05uz04CnxSHyt6ymkr44srVWdvawW%2BPOJw3nAjyWAuAtzOI743cw8uIpzRJa7KBY2rtJmHVojlYSl5%2BvW4n2pngNH%2FP9MFoVoOyGrpEwCQqJAjYi%2Fcyak12fzBsH2b2GXh2lb%2BnGyg1i%2FO876%2B2%2FlRAG78n6k8tznZoV4T3&X-Amz-Signature=7b74ab90c130007970d905daf97085042f558c44b94edbf67ac9d7522bf0dc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH66MINK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFCbTHf%2FiJFFg%2F6OYVjyTzk0soA2mE9abSUxOY8HR2J%2FAiANKHgP4rSxjUSaskc2UYQJwK4491FdrQjfInOjDD%2FbpiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKW070gzSKlvSc9gKtwDyKHkZTeyaqI5MzhpZiwQXEewR15JhAUBH5LnE6rGUIneUN1%2F0cXMeZtRBfca9YOCgJKMl6iK5TmZ%2F525HAVPbCH%2FIbgNE6aGrvX7RngqonRXqmg0gnI78oi8QzYbL9IOVxY6iYeIOH8qE9lXGLSXleseyawnDJmVTvN%2FpF0s3BRmUfuGJSp8%2Fb9Qhy1C90jn2IsdwlT4sQp3I6Ks0AMDwUEf%2F8Nt8V8DVF%2BbEHVF9o5v%2F839RforuEiINQd0DOBxCo3vS5WHW103%2Bu7HjjT%2FR7xaLmhX26ZaXtoZpwWwzedizEkHjZ3%2Ba%2BY4yzALy8z3Fbvs1wxQlJn6hiUdc960dQGrmT%2FwyNePk2G6BZ4lGEMORjr0WdMp5dXS%2F2oYCWzEURrZKxuRFwgjYNC4LF43vtxWBjhDzEr8xVvdJfEwhEOBG2FgR9zjmrUuD0LMco2qG2Eequ58dfNDzDUbEcBk6U811jj%2FkEmOmMlaJlpjFNQFvJbHMd2cW%2BazxPfNzeRxofHoFDrRJv7BAZrh5Ue%2BZ9%2BVmJhkIpb230rCzBL7K2cM5XB7ypURH8MadRlQuf1y1deAFIHqwkw8Ga2V43Y4nWcChZkJZ9Wo7KU4m%2FUceQP1z2oLrzSZ1N75VLkwu5CcvQY6pgEr%2FzMmHY2%2FTflMi3ZqhGoMKf6WwmK5ipj4DPxiUoWQPmJvYwrnntqUx05uz04CnxSHyt6ymkr44srVWdvawW%2BPOJw3nAjyWAuAtzOI743cw8uIpzRJa7KBY2rtJmHVojlYSl5%2BvW4n2pngNH%2FP9MFoVoOyGrpEwCQqJAjYi%2Fcyak12fzBsH2b2GXh2lb%2BnGyg1i%2FO876%2B2%2FlRAG78n6k8tznZoV4T3&X-Amz-Signature=afa8e348e15aa76a0f417a029bb9624b0fb9bb0deceb556fe9a37f1c5d2cc8af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4ANVXK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCj4PQ6DObkuXhYNtKsv6ge5QIepJ%2FdDM8ZB4IQ8IIxmQIhAOGQTCB0cobQ0KdbdR7GXTpT%2Bq4gsbR7%2BDQAum5syDqbKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BqzghFa8cdWYvZ5Yq3AOdRMortxpxUfUhgi9nqKRy1%2FBVQb%2FWj8DfdPVZfHJDcZw%2BLYo7LJq9lCLXeLU5K0wpWBaRFGvB4E9Krgq0XjQ383UgIHXqKZM70zXrnYrLimrX6VqY2u2Vkrn3wZLJroSVaALY4Z6Ukz%2BQvc%2FTF6H1PcaMShN8QshqHk2FRiELrMfyKkcYiHAaRgMwcbL01V5Ui4UdRsxi%2Fjq4zNM%2BGSgAjMexIQffpkgXX6xV5OlsR3hYHe2aMUx7g7KdIx73xRKQazH7lOc1x7PQz16WGtiEiiYNWIswgAR4grJ55IdjFmzK7EIqCJkJnEdtuX5npR2XgxUzWnMoD1v5mL9j7J6oo7k3R0S%2BFG0IsHF0gsZDSV4gYrIL9HCwmwNJkpGDvs0P%2BlJJb9Sr8ZPEGntI5OaPE%2FI3FnMhCuPJWrh62ycLDuZwqIRP7QVRE6pG75aZ3NIZtJKpYJ29wSraEON%2FmJTYcUjqtArUUaKlGhrKShDw8WAJPfAXEhh7WYOYDUfji194RiwrDWZV5%2BHGZvvaqj%2Ba38%2B2WeZggCtFF8PrXIduf7oxjFCHH7FaOGPAKnrt07j%2BnwGYvU6LRM0xXoWeBY%2F5oC8j%2FEzTYVTgvbhuqVbcL5FbOQUmkLorLrllojDmj5y9BjqkAcM4W8MmsmLk%2FOsFJdoftdyKR%2BAYqqkPIMmWo2KKZsdf%2BFDCZdMExzThEslulBcDuHaSIdOPihaF3YhuLJITkz7Su6EHbXxD1hyUzUGO%2FR05l7NH%2BJvEvvmZEuijPm65ePvd7V1Q%2FEqjqu%2BBUAgi2Tc%2FqtjMXKrJ4sxB6YWYb3%2FUgZBWtKJTqDZWekHKz28mWpSBTenDA9hhFHBxJ7KBrN58GbKA&X-Amz-Signature=144eb4d8b59177e2168cd74d95dae1bbc47c7c080cbeb7900919540e6169b5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AJ4DEWI%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHgK0TSpUIOTcKgDU14qmBhhSSS2ef5YTsoSRKerF7tIAiEA5URAwis2k12acFVDg1IOfhOYUHWVOlBB0pT3WCxvguYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsjftpw8vPmK4By%2ByrcAx7CV1Gtov4zE3SN2sPuuyv6APSmNlxkfWrxU4lbXLCEEtJP5JvnyZoJixWfFATi4%2FGa5c1KPB%2Be1GC4aMVyek4MpDR5%2Bk8FpMYSd2WeoEpQoi0vUVaApu7NGz4e%2FEMeulbTxIV0j02Ztns%2FvDKmulAmlznztWZXu9hs%2Fw1D9Z6syl2402Hovi6nhxrnTrQfQgS4q8Z0eQCi3iG0Fq2bWZZnbO5c89xdpBiABZ3cVBhd3O6WyQyogQNRInRuLfmqdidw2kEm4ozKri0ELUiO29HjW2NJ1mwi5Kmu%2FySkVBMDUIc9LN0QtG5FbAm2PQHYGYidYvtypTzi2YLIhj3OyPAhqOnvjZUD8w1BHk0f2MwXiQ%2B7talRWMi17fGKZp8jhiz2%2FvxyPfbBBHuP7jJNtM5xj5aWL%2BeU4XQUf%2B5yFZrdSDMe%2Bvwk1DLbMROuRla1nOXuLi5t3RdTn6ot2qRg6w3MDPaR4bOP%2BG8uZlPlC2vOtQCmFO%2FSe5JA9TLzIipFMbruUXAPe4GgjRzcTCDmp6cAI31ML9w3RzPT63BHedPJCW4lnKkpOujpqKb%2BdAJ6jJYYjgOdZ1GSx0EX6F%2BXqD3m8l%2FPIzZXIvSFPLEOLmCdjaGXRTBu3mVpg1BlMNWPnL0GOqUBxyQarZVRh66MCl%2BQ9Znl4TUHZITvEIYK6ShyMV%2FzkWHn8NoYZhrU%2BbkjtdnonP4sttPTXo2MJI9PrLiBpzBgROW95ASAxLSmvz0HH2H1KMD7HNThA7bVOghV20D9aoT7x%2FprGVPDReNV0eSRChbA2OcVPzVwDu8gyn6wa5lw6oi2FCEzm2MKF3kcZDyuyekVSyXmalPlXwdMbE%2Fxi8%2BZocDNjCFk&X-Amz-Signature=c2bd35d6df89ae6e385b649af3e4251ebc14dd91b44ce45b14be4f042d91a448&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH66MINK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFCbTHf%2FiJFFg%2F6OYVjyTzk0soA2mE9abSUxOY8HR2J%2FAiANKHgP4rSxjUSaskc2UYQJwK4491FdrQjfInOjDD%2FbpiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkKW070gzSKlvSc9gKtwDyKHkZTeyaqI5MzhpZiwQXEewR15JhAUBH5LnE6rGUIneUN1%2F0cXMeZtRBfca9YOCgJKMl6iK5TmZ%2F525HAVPbCH%2FIbgNE6aGrvX7RngqonRXqmg0gnI78oi8QzYbL9IOVxY6iYeIOH8qE9lXGLSXleseyawnDJmVTvN%2FpF0s3BRmUfuGJSp8%2Fb9Qhy1C90jn2IsdwlT4sQp3I6Ks0AMDwUEf%2F8Nt8V8DVF%2BbEHVF9o5v%2F839RforuEiINQd0DOBxCo3vS5WHW103%2Bu7HjjT%2FR7xaLmhX26ZaXtoZpwWwzedizEkHjZ3%2Ba%2BY4yzALy8z3Fbvs1wxQlJn6hiUdc960dQGrmT%2FwyNePk2G6BZ4lGEMORjr0WdMp5dXS%2F2oYCWzEURrZKxuRFwgjYNC4LF43vtxWBjhDzEr8xVvdJfEwhEOBG2FgR9zjmrUuD0LMco2qG2Eequ58dfNDzDUbEcBk6U811jj%2FkEmOmMlaJlpjFNQFvJbHMd2cW%2BazxPfNzeRxofHoFDrRJv7BAZrh5Ue%2BZ9%2BVmJhkIpb230rCzBL7K2cM5XB7ypURH8MadRlQuf1y1deAFIHqwkw8Ga2V43Y4nWcChZkJZ9Wo7KU4m%2FUceQP1z2oLrzSZ1N75VLkwu5CcvQY6pgEr%2FzMmHY2%2FTflMi3ZqhGoMKf6WwmK5ipj4DPxiUoWQPmJvYwrnntqUx05uz04CnxSHyt6ymkr44srVWdvawW%2BPOJw3nAjyWAuAtzOI743cw8uIpzRJa7KBY2rtJmHVojlYSl5%2BvW4n2pngNH%2FP9MFoVoOyGrpEwCQqJAjYi%2Fcyak12fzBsH2b2GXh2lb%2BnGyg1i%2FO876%2B2%2FlRAG78n6k8tznZoV4T3&X-Amz-Signature=50ac1e941a383bd1ca3f4bdef2108357eeb272b7a3a780f4e0c1c32e00ac7cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
