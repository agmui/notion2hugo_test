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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MP2UIH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsyYCw42l6CQV8coAzf%2BL70sA%2B4ntDFutD1N%2FO%2BJPYYAiABu3SiVFRhq4XI6H1WEPuWt7ZwN%2FwiSRBTY357KC3sHiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgZ9NHCN8x56NpQfKtwD8qG%2FTSB3emPxpWE2WQVsyQrNgFurg7H7P%2FizNVYTNUMKH7TEz1PCHHyMcbDhdKzFGdib7ZnD4l3CeRi8iuxcJQtFWizaRCkHs5jSUvefelQ3Y%2FwMc%2FEzMACwUOHgg6setdjIxogMqZg7ATddmk7rB%2BaiuOAUOS9GQdknprVUxYdNYS59XXYvA%2F7wsL6M9ii7pOeFf37baHlzWIVYMeY8m74SScnWyu%2FdCts%2B4X8EsTBr7fNHefoYbKqcKCFstAT0wKqxWUPYvFMQx5nArTnMLjXOZ04OlfalNixveGCrIFeDdj6KJdbiVokQZf08pfQ%2B8sK%2F0Q4fBMscJVMBUYPw8kexEWZ1UW%2BYIhCcq1hEQzdcZRrpuUlZlNI02fyPLMnm7JW%2FmwnEYmKVl1PokkVJZzNSbeu9K3yD%2F55iU%2FQPi0IKH8YVNLXDmBsebJufWU3PUeEG5u7mA5cldVnGDNFn7iB4LIqA5cIqoMoO6rTfwbPSQk1G0816Lf0zgzAfpHu5b5dKvV8GsBoJaRaVrwm5WyM%2Bh%2FWkfW9whAcuC75MrLNI0ZxC3MzJ76GLzo6apn4%2FaRUjHta0OqtBhSZIwlHM7T%2FLraOK1OHhA47h4IxethKEv08%2FRL8e2xNe0rswrq7LwwY6pgEpind%2BqFvdzLQdddJ8Tjg%2Fk83OxMU9BWcmPZLHitXIxMEVd2Rx5HbLCeWR48G4%2BblOLUY0SFFUFWpjvCQWF6QxgIoYQKU8DNsTmH1ZDxWgn4IPBSiQFfJfuDyu0EWm6Yzku%2FKGf82AAihddl0PS1DebECgnhKF6Fn5ULWWxdXqcsuox5JkVPkhWXXg7hha%2BekXr%2Ff0extS0aCXQOPrqeXfNaXVbcZh&X-Amz-Signature=f1101907a98355bc6fe5f28a076abdbdf944c410b9e3f6968c28323b03c1db75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MP2UIH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsyYCw42l6CQV8coAzf%2BL70sA%2B4ntDFutD1N%2FO%2BJPYYAiABu3SiVFRhq4XI6H1WEPuWt7ZwN%2FwiSRBTY357KC3sHiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgZ9NHCN8x56NpQfKtwD8qG%2FTSB3emPxpWE2WQVsyQrNgFurg7H7P%2FizNVYTNUMKH7TEz1PCHHyMcbDhdKzFGdib7ZnD4l3CeRi8iuxcJQtFWizaRCkHs5jSUvefelQ3Y%2FwMc%2FEzMACwUOHgg6setdjIxogMqZg7ATddmk7rB%2BaiuOAUOS9GQdknprVUxYdNYS59XXYvA%2F7wsL6M9ii7pOeFf37baHlzWIVYMeY8m74SScnWyu%2FdCts%2B4X8EsTBr7fNHefoYbKqcKCFstAT0wKqxWUPYvFMQx5nArTnMLjXOZ04OlfalNixveGCrIFeDdj6KJdbiVokQZf08pfQ%2B8sK%2F0Q4fBMscJVMBUYPw8kexEWZ1UW%2BYIhCcq1hEQzdcZRrpuUlZlNI02fyPLMnm7JW%2FmwnEYmKVl1PokkVJZzNSbeu9K3yD%2F55iU%2FQPi0IKH8YVNLXDmBsebJufWU3PUeEG5u7mA5cldVnGDNFn7iB4LIqA5cIqoMoO6rTfwbPSQk1G0816Lf0zgzAfpHu5b5dKvV8GsBoJaRaVrwm5WyM%2Bh%2FWkfW9whAcuC75MrLNI0ZxC3MzJ76GLzo6apn4%2FaRUjHta0OqtBhSZIwlHM7T%2FLraOK1OHhA47h4IxethKEv08%2FRL8e2xNe0rswrq7LwwY6pgEpind%2BqFvdzLQdddJ8Tjg%2Fk83OxMU9BWcmPZLHitXIxMEVd2Rx5HbLCeWR48G4%2BblOLUY0SFFUFWpjvCQWF6QxgIoYQKU8DNsTmH1ZDxWgn4IPBSiQFfJfuDyu0EWm6Yzku%2FKGf82AAihddl0PS1DebECgnhKF6Fn5ULWWxdXqcsuox5JkVPkhWXXg7hha%2BekXr%2Ff0extS0aCXQOPrqeXfNaXVbcZh&X-Amz-Signature=607f4d9d76b03aefd79f7ae11f5ecd06405871ae545e806ceca48a8de50cf3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MP2UIH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsyYCw42l6CQV8coAzf%2BL70sA%2B4ntDFutD1N%2FO%2BJPYYAiABu3SiVFRhq4XI6H1WEPuWt7ZwN%2FwiSRBTY357KC3sHiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgZ9NHCN8x56NpQfKtwD8qG%2FTSB3emPxpWE2WQVsyQrNgFurg7H7P%2FizNVYTNUMKH7TEz1PCHHyMcbDhdKzFGdib7ZnD4l3CeRi8iuxcJQtFWizaRCkHs5jSUvefelQ3Y%2FwMc%2FEzMACwUOHgg6setdjIxogMqZg7ATddmk7rB%2BaiuOAUOS9GQdknprVUxYdNYS59XXYvA%2F7wsL6M9ii7pOeFf37baHlzWIVYMeY8m74SScnWyu%2FdCts%2B4X8EsTBr7fNHefoYbKqcKCFstAT0wKqxWUPYvFMQx5nArTnMLjXOZ04OlfalNixveGCrIFeDdj6KJdbiVokQZf08pfQ%2B8sK%2F0Q4fBMscJVMBUYPw8kexEWZ1UW%2BYIhCcq1hEQzdcZRrpuUlZlNI02fyPLMnm7JW%2FmwnEYmKVl1PokkVJZzNSbeu9K3yD%2F55iU%2FQPi0IKH8YVNLXDmBsebJufWU3PUeEG5u7mA5cldVnGDNFn7iB4LIqA5cIqoMoO6rTfwbPSQk1G0816Lf0zgzAfpHu5b5dKvV8GsBoJaRaVrwm5WyM%2Bh%2FWkfW9whAcuC75MrLNI0ZxC3MzJ76GLzo6apn4%2FaRUjHta0OqtBhSZIwlHM7T%2FLraOK1OHhA47h4IxethKEv08%2FRL8e2xNe0rswrq7LwwY6pgEpind%2BqFvdzLQdddJ8Tjg%2Fk83OxMU9BWcmPZLHitXIxMEVd2Rx5HbLCeWR48G4%2BblOLUY0SFFUFWpjvCQWF6QxgIoYQKU8DNsTmH1ZDxWgn4IPBSiQFfJfuDyu0EWm6Yzku%2FKGf82AAihddl0PS1DebECgnhKF6Fn5ULWWxdXqcsuox5JkVPkhWXXg7hha%2BekXr%2Ff0extS0aCXQOPrqeXfNaXVbcZh&X-Amz-Signature=8f95b7a711ae3e0b63bcdd6aeeb50f260e2d0f5409f4c38082ac64529bd6c8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTP2RHAN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7v9NH6QFdtQRLIMYLPPjZwS195pteIP7jOEiI0nh2mQIgWNjsp6C9VGLhNY0rQZ6wJBT2ndJvYzvw7JX4PWrwwjYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEHixO1EB6bhbQs1SrcA2oorUyZVm80LAVpuBx7tMsAZTJ5fu%2FiJA73fUMhM5mwyJ2bxn35Ijk24utixD7ezMifQUamt0lHBrdGpHoOaw%2B81fiBgA1cA1iGaVVOqpKfdpGWpLOdwR2n86BtyBTCxNS6XeUJ82eSjIKW8UtUvteSQlWfDWq9XV327SO%2BDrWX2cw0IUaFZ3G%2FxiOV3KadSnDNRBdfu%2FDngbrYrc%2BOvn%2Fjiq1cbM80FeRH8MAPlxPf40zf%2FHbg4V3TD5T8xUjSXk3XZEc8I4cF2w3Xm8WHjfZMdfnOSD4RI96OAYE4OdrF8qUGkqDBTASl6R9YwFi89%2BY4LKRSAlalOvdh5HDVwShhqlJNfX2NZNWGBgzrdSuC%2Fm%2FECBD8sDJ%2B44Mxid5rV%2Bjo4rGZmCDJ10YCw1JgQCXfRkuPS1Nr4%2BSDQF5XsAGTeqj1zTe3ZHL%2FQ75FiFIpzun1DmkNXyesjpZ3fTRnPiNFdGNAotx7Twppd118kLLeT8t8RMQ79sbxx1hK%2FUo6oYuHTavCc8R1kvQmsqaI2thaABKSV5cNYP5sIeH8YdSbJo%2BCwbHyF17eL6gV6M4ODOFO0CLfryXYsu%2FCZeCyxdE%2BkjHbWTn25iM6SI27V6zeC5s4LczTp7FusMxAMOyty8MGOqUBQIgGij4vrOn0d5wpPR9L2mDlrtaLe8RMBeEHDeVPExpFem1ZsOoRwALulPIWHAYkZEpA7a4iZ9bxgrqvjxfDFtlkQbISSrgPd43HXmeDWBZvOolgAPiAOwhR%2BPhpUfC7hlnr7LzLh9L4mOV%2BGNuhwMjY8oF7FUszajfSDgHbSVH7XXI5hKWPTPGJHXP54vSzi5k11hhplsy5mE22KfQQrhedvRXg&X-Amz-Signature=2d184dfb838532984568e21fe8de5284b3ca038db32a9ec59f937bd30e3152a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2Z2GNY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqrNNhcYGaTftuF%2FR2z09oR9DW2diEZVoGVQIKQpnKYAiAX6KeMIKs70V4DZ2MJgkyXo4rAxElVjQMtwJlS%2BZu5CyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZIup4Ql5CNhkWZ%2BKtwDnVbpT3vawuprc8f1uI1Nnj1ZzLlvo4%2FLGr8A4RB0s4y99vdQha563q08U9%2FwQO37LzNUY2BSeM5ddb7ksbG0mX27EH78U51BKv5GN7eo0b6PSlEnCme%2FzS1GgBrAot2UIRyVlsASKklCYyvW9ZZ1o9aT2amMAdbrvweMacT5jFcHy1EPmycp9FkGR7KniMNAqPlinW2jdvgkSehylMogSqPNjUMqNMMpq7gPAf4QI0NERKf2WI5MghZTKLygLGjVqOkwxR7bxqZjqgGpSMk61HJe90%2F%2Fp894syENjzbyP2zo20zm2ulSAPQ%2BDew991A7FycpF%2F3MU7%2BdHSdOfNLQJFzORnauWC4TZGF%2BDf1zddW3Og4U2liWwwtdrnu%2Fhv5svZ%2B6xaguhO8iJpVyi6SAWsNIBqcy2sb8A7YGOYVg5AQvlJCS9JIcrPB1HQ%2BvG12n9CnJ9U71sLXGF9y%2F%2BLZ3G89cwLpBlVoO38ZE9xlvfCzABklmH%2FzxHRdjJilJ6NwOGJUDNK%2BIhdpI79FcqDyIFZmE%2F7gxtwDCkP0BEASTOMsP4WqunIEn02dEUprb5sQoL2ISJ3YbwKtB%2Bh7jmnCw7FQD%2FiUJ7V7JY3CsUjp0%2BEIAv29ZV99llOTV9AQwm67LwwY6pgEp9XRWYmYdBW1RD6uRYD1mRCoY2CYhcVYpMwaviSBTK%2FuS9apINmGk7I4l9O%2F4%2BKze%2B34BoiWKeu5EsrRWNDPbXBnWq%2Fm%2FL%2B4xqc8iy7tEx3%2FxFm9Hfndz0m6A9NbYnyQIDVml8XxZ5eenp5GxXv5o2%2F4H8O1A5Yh5jsU3wYdyJctPDRTqM4DuIiJPZsVKc5doyBa8T0GIWLy4UXJMnLDJI6wb84Vr&X-Amz-Signature=9e43eb6f487c30ed98dffcb0462468314b48619af966313e1513634b1d138d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MP2UIH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsyYCw42l6CQV8coAzf%2BL70sA%2B4ntDFutD1N%2FO%2BJPYYAiABu3SiVFRhq4XI6H1WEPuWt7ZwN%2FwiSRBTY357KC3sHiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgZ9NHCN8x56NpQfKtwD8qG%2FTSB3emPxpWE2WQVsyQrNgFurg7H7P%2FizNVYTNUMKH7TEz1PCHHyMcbDhdKzFGdib7ZnD4l3CeRi8iuxcJQtFWizaRCkHs5jSUvefelQ3Y%2FwMc%2FEzMACwUOHgg6setdjIxogMqZg7ATddmk7rB%2BaiuOAUOS9GQdknprVUxYdNYS59XXYvA%2F7wsL6M9ii7pOeFf37baHlzWIVYMeY8m74SScnWyu%2FdCts%2B4X8EsTBr7fNHefoYbKqcKCFstAT0wKqxWUPYvFMQx5nArTnMLjXOZ04OlfalNixveGCrIFeDdj6KJdbiVokQZf08pfQ%2B8sK%2F0Q4fBMscJVMBUYPw8kexEWZ1UW%2BYIhCcq1hEQzdcZRrpuUlZlNI02fyPLMnm7JW%2FmwnEYmKVl1PokkVJZzNSbeu9K3yD%2F55iU%2FQPi0IKH8YVNLXDmBsebJufWU3PUeEG5u7mA5cldVnGDNFn7iB4LIqA5cIqoMoO6rTfwbPSQk1G0816Lf0zgzAfpHu5b5dKvV8GsBoJaRaVrwm5WyM%2Bh%2FWkfW9whAcuC75MrLNI0ZxC3MzJ76GLzo6apn4%2FaRUjHta0OqtBhSZIwlHM7T%2FLraOK1OHhA47h4IxethKEv08%2FRL8e2xNe0rswrq7LwwY6pgEpind%2BqFvdzLQdddJ8Tjg%2Fk83OxMU9BWcmPZLHitXIxMEVd2Rx5HbLCeWR48G4%2BblOLUY0SFFUFWpjvCQWF6QxgIoYQKU8DNsTmH1ZDxWgn4IPBSiQFfJfuDyu0EWm6Yzku%2FKGf82AAihddl0PS1DebECgnhKF6Fn5ULWWxdXqcsuox5JkVPkhWXXg7hha%2BekXr%2Ff0extS0aCXQOPrqeXfNaXVbcZh&X-Amz-Signature=fdd04e0d0e9906c14c16c811305dbd799a7dc590639bd7b73976c1832ae67d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
