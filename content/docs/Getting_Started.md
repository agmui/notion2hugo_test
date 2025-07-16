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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ATOWPW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBJdl4VFl6TQl8s5AJS6eSdZHABHm1zVQUIpQbeg7wwbAiA9o3LRscloePApucjLd4zzItyDGvP%2BsrB4Cpy36Njrnyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM4PYt5xANhgP0VTC4KtwDWj73r%2BF7H0BAjH%2FUHMQ5JasrJku8XeRvwol%2F5qnqsHl6A%2Fg3ZhB7FjVnVcHgNmUPqya0HvO2qDTLfy8cyrvkyQp9X5zKxu%2B%2FGdcDfC%2FcnelvireKDaITZmrfMiVLqYb2lROZxftJgiMH5WB53P%2BPmd8IBhqp30sxqfYkF8MlPG5nC0S%2FPoch%2FjIzt%2FIK12XJ9%2F8JwaV6%2Fp7h5rlorzFYiy59C0%2BQvVT6Zh9hboQzdeJrttoPHBbOk50x9j%2F6lrcitdoO1HXd32sVqoxHWHoDByf3CIlEXbkVI1QMjG0JZ02k%2BwxNmOScFZuhP0uU87yWvqq3DXfQ2y3AASCqzkrFagAyMGwSQ%2FQHZfU2%2FtTqeEzG4TQJihp86XiyDs%2FAyiLpJTV0c8QwEsAmg0%2B908x3l%2BmboPELocdyXAIucaL8Xb5yBhfewR8u8Smjo%2BSwzYQ1d3X6dL3izWwQNxwRBAEAqSpBnPlXEY5MQD2MBkb2s9wKfN3hB6jlqx6U7%2BowyLpuPtilOsnnN90OYgapVGm30eA7kpCE4eGvUZGl5A0TsXzLvuIpeT5HXKtZ9HW%2FFvldYNTyWa5yUfPNrds8EgvNpY3TbFF7ES%2BHPqCElU%2FjmVaB%2BUz16e3O1I9Wtk4wmt3cwwY6pgEHddNVejxU4TgcbFb1Ug91H02QM5IurHtaMzhMynT4fpcNrfP%2FZkmcxwmW2QN3vzhUoCHCV7buGB1fkul8LQ7t05XIYeVgT0T5hMew5zoiL9DIRmDVP3MWcBPs9yDWP0fVxVXHZ49cQ9uiUKrZpHkO68Px7BUCiLnoTGWYB03fn6sMU%2BmjCG508JFRK2oc0PVWZgoyl97%2B2iXcxsKmxW%2BAoFgqnkuM&X-Amz-Signature=03d5ab3b8c74f4ba6551671c64e4c7dce45f61a912b95aa2b15447c96600d126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ATOWPW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBJdl4VFl6TQl8s5AJS6eSdZHABHm1zVQUIpQbeg7wwbAiA9o3LRscloePApucjLd4zzItyDGvP%2BsrB4Cpy36Njrnyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM4PYt5xANhgP0VTC4KtwDWj73r%2BF7H0BAjH%2FUHMQ5JasrJku8XeRvwol%2F5qnqsHl6A%2Fg3ZhB7FjVnVcHgNmUPqya0HvO2qDTLfy8cyrvkyQp9X5zKxu%2B%2FGdcDfC%2FcnelvireKDaITZmrfMiVLqYb2lROZxftJgiMH5WB53P%2BPmd8IBhqp30sxqfYkF8MlPG5nC0S%2FPoch%2FjIzt%2FIK12XJ9%2F8JwaV6%2Fp7h5rlorzFYiy59C0%2BQvVT6Zh9hboQzdeJrttoPHBbOk50x9j%2F6lrcitdoO1HXd32sVqoxHWHoDByf3CIlEXbkVI1QMjG0JZ02k%2BwxNmOScFZuhP0uU87yWvqq3DXfQ2y3AASCqzkrFagAyMGwSQ%2FQHZfU2%2FtTqeEzG4TQJihp86XiyDs%2FAyiLpJTV0c8QwEsAmg0%2B908x3l%2BmboPELocdyXAIucaL8Xb5yBhfewR8u8Smjo%2BSwzYQ1d3X6dL3izWwQNxwRBAEAqSpBnPlXEY5MQD2MBkb2s9wKfN3hB6jlqx6U7%2BowyLpuPtilOsnnN90OYgapVGm30eA7kpCE4eGvUZGl5A0TsXzLvuIpeT5HXKtZ9HW%2FFvldYNTyWa5yUfPNrds8EgvNpY3TbFF7ES%2BHPqCElU%2FjmVaB%2BUz16e3O1I9Wtk4wmt3cwwY6pgEHddNVejxU4TgcbFb1Ug91H02QM5IurHtaMzhMynT4fpcNrfP%2FZkmcxwmW2QN3vzhUoCHCV7buGB1fkul8LQ7t05XIYeVgT0T5hMew5zoiL9DIRmDVP3MWcBPs9yDWP0fVxVXHZ49cQ9uiUKrZpHkO68Px7BUCiLnoTGWYB03fn6sMU%2BmjCG508JFRK2oc0PVWZgoyl97%2B2iXcxsKmxW%2BAoFgqnkuM&X-Amz-Signature=575ebee6f756addf2e9c1eb1eb10df23fb2b7bde45452c2c30f05688afdd561c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ATOWPW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBJdl4VFl6TQl8s5AJS6eSdZHABHm1zVQUIpQbeg7wwbAiA9o3LRscloePApucjLd4zzItyDGvP%2BsrB4Cpy36Njrnyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM4PYt5xANhgP0VTC4KtwDWj73r%2BF7H0BAjH%2FUHMQ5JasrJku8XeRvwol%2F5qnqsHl6A%2Fg3ZhB7FjVnVcHgNmUPqya0HvO2qDTLfy8cyrvkyQp9X5zKxu%2B%2FGdcDfC%2FcnelvireKDaITZmrfMiVLqYb2lROZxftJgiMH5WB53P%2BPmd8IBhqp30sxqfYkF8MlPG5nC0S%2FPoch%2FjIzt%2FIK12XJ9%2F8JwaV6%2Fp7h5rlorzFYiy59C0%2BQvVT6Zh9hboQzdeJrttoPHBbOk50x9j%2F6lrcitdoO1HXd32sVqoxHWHoDByf3CIlEXbkVI1QMjG0JZ02k%2BwxNmOScFZuhP0uU87yWvqq3DXfQ2y3AASCqzkrFagAyMGwSQ%2FQHZfU2%2FtTqeEzG4TQJihp86XiyDs%2FAyiLpJTV0c8QwEsAmg0%2B908x3l%2BmboPELocdyXAIucaL8Xb5yBhfewR8u8Smjo%2BSwzYQ1d3X6dL3izWwQNxwRBAEAqSpBnPlXEY5MQD2MBkb2s9wKfN3hB6jlqx6U7%2BowyLpuPtilOsnnN90OYgapVGm30eA7kpCE4eGvUZGl5A0TsXzLvuIpeT5HXKtZ9HW%2FFvldYNTyWa5yUfPNrds8EgvNpY3TbFF7ES%2BHPqCElU%2FjmVaB%2BUz16e3O1I9Wtk4wmt3cwwY6pgEHddNVejxU4TgcbFb1Ug91H02QM5IurHtaMzhMynT4fpcNrfP%2FZkmcxwmW2QN3vzhUoCHCV7buGB1fkul8LQ7t05XIYeVgT0T5hMew5zoiL9DIRmDVP3MWcBPs9yDWP0fVxVXHZ49cQ9uiUKrZpHkO68Px7BUCiLnoTGWYB03fn6sMU%2BmjCG508JFRK2oc0PVWZgoyl97%2B2iXcxsKmxW%2BAoFgqnkuM&X-Amz-Signature=1ff8faf401ba225a396130c948a4551f1545536eb9ce1e636ce3ab2595f45463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6MYLEFX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDLuPua%2FZtE2TsDqP9QL4nU19gcNdmiyR3CAxZVwJPGCQIgJrDFHkYFsIp7HtT7JWqynY5rwO2Parb9fG9FOmg1Zmkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBEsgZT1WhEyv4d97CrcA61WHEblutDPgSsvdKUpQxWrec35x6xmO87rCZ1d1u%2BvcwhH5putwMWIqFqmH1huub1NKCghW60JMh8y6Du9ahS9IZgL60R4aCceiCuCDodQ%2FZOnDnbcF6FUdok8e4jWL3QaXRM2M7C6ubPtYxA35eKQ19s5SdPwtKpoZRDgiE1b5xqsLHNHX%2Bdg3mHL%2FG6I4ElnX7x2c6OtYygWmiLhciZJPRT8GVo2vX1A6EBjCX%2BXAtFWcdOKS4c52NNf13ssQDZv9B2stEHZBIYpogkztdG3eHqcSu2VTwoMugm662clqAvNXt29ztVtz4g0yc9LVdNylD%2BkCTmv7pVgRjvCHIgi%2Bi1y9%2F9a9461zMMIObwgZjmNI7k3ZrNTMwpn5BQe9W8GSZ9nKGqRvo%2Fu%2BsuCQH7u8HlaOvbwCZaEBgqpTpOFZwFmUPiYCkIsJ5jHluwNlUTYIKO9nGtyFlSymUF0IFGAT7TsaLRHO5FCs8z8jzMCrlv3gMISBACx9pVeKgQtFoX5%2FKfYEFQ9BgBLfOJ5UK5%2FqnwkJAUy5GcV1tnNQi4DnKk%2Bi3riyl9QxXZu4iWz9a2V7f2kJkxdYGsRTRCLOXTYCC6qDc7lLFabx9U0rRoRLdnNFr0089uIUu90MPbc3MMGOqUBY2D9TgaqRbDsWm0%2Fzl%2FQXASIlS6bJ0cmdpxnw%2Bdg5HuC1cVeB3Bpa27oFcTkpvpi3UKB7fSrMzG2TQcBzUASrh2%2B8HquRR2G3hePz02%2B9lqpj5xUUFxgBt1oo7fBEpF6d%2B3LF%2F0jiK2LJS3tfEXmOYX%2FA5oTXU%2BHkiPH0UG6GQxEkIRUAsk5scdpex8K0oPSKajRhAxLqDKgXRdvFKXaRYQw6dQe&X-Amz-Signature=0f653a7576b151778bb54b09412fa37b580d3573bdf648318c3c55b347763063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ7UAXB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBUZ%2Fb04Z4wbD3LOyMyL0NXV%2BHh1eWcScFcwUVz721aTAiEAyGSAd1bNz3hPI8UkhZO%2F79snneoxlRIKKb0Djz1DrmYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEwS%2BesNSj5G6RdM%2BircA4jw2qoDfEF93w88EuI8xNMmqg7APZ63azlbgYR7inwnxPO0ctOCw4WSad%2BTTfQRvVXoGUEoYJzzCT0cB%2FoqoaPwCe8zUeFHEbItWE%2BzPqzk11qhXP98lC77S5nI7ap%2Bm60tcKZ7PRE%2FOGNBagTp%2FhtMSUVxJ9c4hkhglEUj8xIkK%2BVcckmRlZnf98iXs8jd%2BAZB6zIPeJajYDM4Vb7dwM%2B0ZEar3KmaH9y90WQKkdwvWW1Crm4WghW%2BeZrh1CghzQVQ4JHt%2B%2B1KtbkDwjKi3UK06Qzn7FYGNk6vKnPIwgpGNp1UJ2Rqfy09pNwPuQFKHSMFax7XikLbs67RrQzamzcpKrrDQ8PJFBedBXUPJU8E2HsPuW%2FaKYrLPMA09SDcWu0KbQuiPMwIp%2BTOGbCKd0%2Fo1rTDLP73x4Q0CP7VoNGMPrZUMzuSaCdy6qDX%2BqYFhFvApe9goAJ3bwgUIwYw7YwgaV6ivuIfyaQ1EXvYPm5lYyjLN7AVjbMjWcRiCfoxV%2FrjXa64mEZrW1uSVUI5uDLXznBNIOG%2BzNYtarptTIomuKiz7zAjkQuyCaMdQuoYedgrHzhmIvibXUijGXlqkUZFVfOHK8iCE7btS0FLPW8H40hU0UWD8vSWjtCEMJPd3MMGOqUB%2FRVSYfHpi4y4aeeGM3DMYQxng4egCHKpOJ98kJ1AKTHb5eIAXrt3R9P%2BLB3K5CEmT1J9OYeVgVqG19M3x3WwoAX9VLquJOpSE1akdQIDD2cJ0MULV49kBTSFwPJPxmF%2BhbHivEFx%2FFcUYgJGXfE1LeTr3Lgt1IDym43WjrsqzL13J7P3zQ7f8NjGn2oZz3p03S9%2BSAEHwPnrN93Jaa54piJMvyiv&X-Amz-Signature=18277dcd97426a3dc85180edc2ca6ff24f54ab78c2a4cf5b44d4ae43e8ecf586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ATOWPW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBJdl4VFl6TQl8s5AJS6eSdZHABHm1zVQUIpQbeg7wwbAiA9o3LRscloePApucjLd4zzItyDGvP%2BsrB4Cpy36Njrnyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM4PYt5xANhgP0VTC4KtwDWj73r%2BF7H0BAjH%2FUHMQ5JasrJku8XeRvwol%2F5qnqsHl6A%2Fg3ZhB7FjVnVcHgNmUPqya0HvO2qDTLfy8cyrvkyQp9X5zKxu%2B%2FGdcDfC%2FcnelvireKDaITZmrfMiVLqYb2lROZxftJgiMH5WB53P%2BPmd8IBhqp30sxqfYkF8MlPG5nC0S%2FPoch%2FjIzt%2FIK12XJ9%2F8JwaV6%2Fp7h5rlorzFYiy59C0%2BQvVT6Zh9hboQzdeJrttoPHBbOk50x9j%2F6lrcitdoO1HXd32sVqoxHWHoDByf3CIlEXbkVI1QMjG0JZ02k%2BwxNmOScFZuhP0uU87yWvqq3DXfQ2y3AASCqzkrFagAyMGwSQ%2FQHZfU2%2FtTqeEzG4TQJihp86XiyDs%2FAyiLpJTV0c8QwEsAmg0%2B908x3l%2BmboPELocdyXAIucaL8Xb5yBhfewR8u8Smjo%2BSwzYQ1d3X6dL3izWwQNxwRBAEAqSpBnPlXEY5MQD2MBkb2s9wKfN3hB6jlqx6U7%2BowyLpuPtilOsnnN90OYgapVGm30eA7kpCE4eGvUZGl5A0TsXzLvuIpeT5HXKtZ9HW%2FFvldYNTyWa5yUfPNrds8EgvNpY3TbFF7ES%2BHPqCElU%2FjmVaB%2BUz16e3O1I9Wtk4wmt3cwwY6pgEHddNVejxU4TgcbFb1Ug91H02QM5IurHtaMzhMynT4fpcNrfP%2FZkmcxwmW2QN3vzhUoCHCV7buGB1fkul8LQ7t05XIYeVgT0T5hMew5zoiL9DIRmDVP3MWcBPs9yDWP0fVxVXHZ49cQ9uiUKrZpHkO68Px7BUCiLnoTGWYB03fn6sMU%2BmjCG508JFRK2oc0PVWZgoyl97%2B2iXcxsKmxW%2BAoFgqnkuM&X-Amz-Signature=c476968576c9a5fbd1a55a579aabfa9142e768d685c7ab07b082b22ce4d13c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
