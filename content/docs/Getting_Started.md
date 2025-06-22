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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTWVFNN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2F46uT2CtTmdVAV0TME%2F7%2Bpa3vCaOuFbHzmB27LZZAgIhAKFLjsVoVshxcZnVKbZ%2FK4v9%2BbY1PURY5C0dNkVhlH5FKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtv5OwXQv5NBEQb84q3AMY4%2FQE5xfZKgntICRbn94W9rd5FXG7Va5%2FgGmhX0UfrMqNW8uUh9x12K%2BpcJqHrn7TksoiqkKINJgxYK8OVB0n3z2El12zc47SOS%2FXJCNlTJG5s5l4FiDpCS0vQvxWnldtdAS7QOQ60rkj48trwdd%2FnUgTkt3GjL6H0XfsvAXbjbs5tBzsjzzpHuOLdqG6tZ%2F18qYJJzGocxb%2BlrMzHL2tJR0O6eNphzevl9JjOjisz8ORnCDZ%2F0n9wPSrxS1LuBDFvEbitmLzq8voVR8Dr7dYKhyWl%2FgU3VRJ%2F92AMwLJ1vSzXTtEnkxK1oEX3Ip4oBNKNUN5UHPzVtOyscljpCQtzjZz51hrD4OHzTbe%2BPa9NKbynh4AehsLqAVPUPrbwMUHfRKF8%2FP09YLxfRliLEyB8K0eIuDzFy4w9eMEdA1k%2Fw0KruUDoZnIVMYu%2BuauR5v1eZBvN%2BXb%2BsgY7ORPsFaA8%2BbyOjb6lAFrvut3ni%2F8eN8NbveVlpZtqTqL%2B%2Bqv9rygVu1XKlrQLiTtYIqR2s1Bdun0imhiTOxjpiHssxqy9Khl8AHwWrdrIIaAcC2SDvXAySqBZoddc%2FJzw9HhVgQIvGRSHweCph48zk%2FnKSPMnAhTRnL1vv3%2Fz8ry5DDQtt7CBjqkAXJVVOoX2YFlPyottCz6lOv3i2ua2IcdLvm3RplmT%2BsDMGLqwxtda7RcVS5ELOGYLntM66uk%2Buy8OGkbDhdLs4RhzFWG%2F6ovu9gvOnsLMqmpkR7xRpPXC2jVgDlEp0oCfoUMBEG3jrUompbiMSDJoTbxbghjEst434UB%2B6tS2jgq9lbsKKLtUa6Dk4%2FrkZ9%2BcC9S4Lda5p520c%2FFPyhA%2FZ4Kqght&X-Amz-Signature=b76ad02d74102a9b8ccb83101ee1e23bb323a69816c4a1d714ea978a1d51bbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTWVFNN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2F46uT2CtTmdVAV0TME%2F7%2Bpa3vCaOuFbHzmB27LZZAgIhAKFLjsVoVshxcZnVKbZ%2FK4v9%2BbY1PURY5C0dNkVhlH5FKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtv5OwXQv5NBEQb84q3AMY4%2FQE5xfZKgntICRbn94W9rd5FXG7Va5%2FgGmhX0UfrMqNW8uUh9x12K%2BpcJqHrn7TksoiqkKINJgxYK8OVB0n3z2El12zc47SOS%2FXJCNlTJG5s5l4FiDpCS0vQvxWnldtdAS7QOQ60rkj48trwdd%2FnUgTkt3GjL6H0XfsvAXbjbs5tBzsjzzpHuOLdqG6tZ%2F18qYJJzGocxb%2BlrMzHL2tJR0O6eNphzevl9JjOjisz8ORnCDZ%2F0n9wPSrxS1LuBDFvEbitmLzq8voVR8Dr7dYKhyWl%2FgU3VRJ%2F92AMwLJ1vSzXTtEnkxK1oEX3Ip4oBNKNUN5UHPzVtOyscljpCQtzjZz51hrD4OHzTbe%2BPa9NKbynh4AehsLqAVPUPrbwMUHfRKF8%2FP09YLxfRliLEyB8K0eIuDzFy4w9eMEdA1k%2Fw0KruUDoZnIVMYu%2BuauR5v1eZBvN%2BXb%2BsgY7ORPsFaA8%2BbyOjb6lAFrvut3ni%2F8eN8NbveVlpZtqTqL%2B%2Bqv9rygVu1XKlrQLiTtYIqR2s1Bdun0imhiTOxjpiHssxqy9Khl8AHwWrdrIIaAcC2SDvXAySqBZoddc%2FJzw9HhVgQIvGRSHweCph48zk%2FnKSPMnAhTRnL1vv3%2Fz8ry5DDQtt7CBjqkAXJVVOoX2YFlPyottCz6lOv3i2ua2IcdLvm3RplmT%2BsDMGLqwxtda7RcVS5ELOGYLntM66uk%2Buy8OGkbDhdLs4RhzFWG%2F6ovu9gvOnsLMqmpkR7xRpPXC2jVgDlEp0oCfoUMBEG3jrUompbiMSDJoTbxbghjEst434UB%2B6tS2jgq9lbsKKLtUa6Dk4%2FrkZ9%2BcC9S4Lda5p520c%2FFPyhA%2FZ4Kqght&X-Amz-Signature=a892f53bee32ffebc93b20b5bd411d67521fae9c78429358ccb2339539933d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTWVFNN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2F46uT2CtTmdVAV0TME%2F7%2Bpa3vCaOuFbHzmB27LZZAgIhAKFLjsVoVshxcZnVKbZ%2FK4v9%2BbY1PURY5C0dNkVhlH5FKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtv5OwXQv5NBEQb84q3AMY4%2FQE5xfZKgntICRbn94W9rd5FXG7Va5%2FgGmhX0UfrMqNW8uUh9x12K%2BpcJqHrn7TksoiqkKINJgxYK8OVB0n3z2El12zc47SOS%2FXJCNlTJG5s5l4FiDpCS0vQvxWnldtdAS7QOQ60rkj48trwdd%2FnUgTkt3GjL6H0XfsvAXbjbs5tBzsjzzpHuOLdqG6tZ%2F18qYJJzGocxb%2BlrMzHL2tJR0O6eNphzevl9JjOjisz8ORnCDZ%2F0n9wPSrxS1LuBDFvEbitmLzq8voVR8Dr7dYKhyWl%2FgU3VRJ%2F92AMwLJ1vSzXTtEnkxK1oEX3Ip4oBNKNUN5UHPzVtOyscljpCQtzjZz51hrD4OHzTbe%2BPa9NKbynh4AehsLqAVPUPrbwMUHfRKF8%2FP09YLxfRliLEyB8K0eIuDzFy4w9eMEdA1k%2Fw0KruUDoZnIVMYu%2BuauR5v1eZBvN%2BXb%2BsgY7ORPsFaA8%2BbyOjb6lAFrvut3ni%2F8eN8NbveVlpZtqTqL%2B%2Bqv9rygVu1XKlrQLiTtYIqR2s1Bdun0imhiTOxjpiHssxqy9Khl8AHwWrdrIIaAcC2SDvXAySqBZoddc%2FJzw9HhVgQIvGRSHweCph48zk%2FnKSPMnAhTRnL1vv3%2Fz8ry5DDQtt7CBjqkAXJVVOoX2YFlPyottCz6lOv3i2ua2IcdLvm3RplmT%2BsDMGLqwxtda7RcVS5ELOGYLntM66uk%2Buy8OGkbDhdLs4RhzFWG%2F6ovu9gvOnsLMqmpkR7xRpPXC2jVgDlEp0oCfoUMBEG3jrUompbiMSDJoTbxbghjEst434UB%2B6tS2jgq9lbsKKLtUa6Dk4%2FrkZ9%2BcC9S4Lda5p520c%2FFPyhA%2FZ4Kqght&X-Amz-Signature=a43049a1d1c8e2bf62faf8e61dda33bee198f012fa4b7614ee4e57ee0ce3ef4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFVJR5V%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJwdzpsOpOzrRMo0laz7Vilkt%2FwAYw%2Bajmf7rxAkOM3AIgFtlBgCs9Q4tSpTaT%2BwiI9atQN7u1THrzfTUpL65spyIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoL%2Be%2FUxC2%2FCy%2FMESrcA4xzVXZq4um%2BKEEb3InLycLU4rubv8RquwKl6nT%2FD8IJUmLPwweWCfn3IxQ1QOCuq6A%2Fwjw%2FypwGMSJlNzsZJCfNhNY6UIXuD5FeQu67TW%2B4h2qskKOtAt9U%2Bc00HJcU3pN2mKYz6KZNtE%2F3dIqsYA9Kvip02y%2BIKFqc33XiJSTXJ3O%2FxdfIik755ZZHB3yR8eyYSggeSt2FTya6EOXnBBEcN0oy2STvMF1jjlinI8uXUrjIfgDS71yYF4OisHd%2BYYj27Ja8NMbmGTq8Vf5U0YBREfWeXL2BzvdqENlce0BvbPhrrevqjOirFw%2BYvd9oG7w5%2Fkrh%2B4Uw8Rvfg9zZdPBFgjQvZvpBCnlFGQA%2Fk4pjAcZEaMQ7eNhd2aE4YATjV0JK9cKicUT2HsiUSWB9gCVRUXiPcd3AELlZZAH4MzYKIA6Asvk%2F75lng5CECI%2BdCBDZG8MllP8ttjVTX7jQCQuult%2F5sVCTZ1vdKH6Funvs6af1Ut7j9%2FVVPJqJdjwRsAL5eN%2FIdhS57jb%2F%2FPK91iiJhvLxRjsf9evVboI0eim8Ny86JVnzU%2F9wQyUeyurxBZc%2Fy2izPxUc76eLkgTCfDHIugTuwCNzWeK6DAHVvVfTdDH38zK9KNWSs6c2MLOo3sIGOqUB%2B4Hr1GLBQD8lfmexb50GRiaj5RAHdP85p%2Fq4oFDvQqZYLUAEn9ztB2Uw%2BbPXvLanIvxZhimDDt1ZpPql9reem8Gu3iRvxrOhnX2TQ4c5ooeVjDFsMqOplKhciLutNC97Ucanjz1zt9W8MdVF7cbO4tVosaGnjDfGLbq0JRo7RMY52SW%2B1%2FbQeSYuATj7fBXAMxs1BkNgK821p2eYERI2p02OkLed&X-Amz-Signature=b99b6628fe5f72882c5250292455f6674f36fa755e4addf8ac3df39b6c71cd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGCUR47%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU5wibMKFBbG%2Fr1u5FGlZF2rKR1e5b%2FMTiEcmRIm54iQIgJE%2Fb1nbfvbjG%2BqQkBkuWTnUa2joYKa1lX7P1p8h2MTQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqv0%2Bny3TYom5PM6yrcA4%2FlBE8H4NqW1l35LSDt9JVmJ0urYIYI5LDsaPkOUUIrIkJohsFlabyWj37OrCv7kZ11wWhfz86akOvwOpH7%2B0NXEPnhVAOVNQkkkVpraHth%2BmkCB%2B5vPP8G63%2BAqRYnOXjnxbU3XpneKiapXD%2BfiIjDWHS9JO3enHJfKyWU8KcHyQw8O%2BVr8cKgFJTJ6jMbyJFtZrJ2XeBnN%2BQT2dq4QbY7A4Ql63JnyxlWXKiqvDx9JUsGaOS0%2Bh1QfLib5xR2Mkm%2B%2B9Tp%2Fc0O61r2SAUxcQt8JacRmcKNQF3m7J%2FRrFy7Ir0YRHZ5hbX%2FYzN%2B%2B0VUjQ5vuc%2F5lGabDh4sf5cMIQkMA3nFlBVYRGNnWz5HFZkawSg8JzKUd6LO39sPLe9Q9%2BIr9TG%2B3lpMxHBiboOMSV82XmNq7lw%2BYpVFooThpQczNd2TO%2BxocrmnnlObr0Ce4wlleu9JlBvnKLtFx8fJQx%2FH7jA%2FC6LagEAGk%2F4ZOL%2FpspYOYNnPcYD5uvBqlYZ2y65dUHft%2FhtTR4LJDjAYx2%2FXl9sNaN1idojhW5Ul0LuWj3E%2FmPK81LsBLomVZ2aodtlUlXXnIAypMaDkm8s7fXxS%2FKK%2BOX2jgay2mwQVBo6AfFYtHUOUOlepDbEqMLuo3sIGOqUBLVNsbdDfJprqDx4leLMc%2FZhEmsRcQztA2HZdvYtWTJXFrrbN74TuLUI4qHrYRizmxKCojzsycyy9GPPemmyxHohS0gVzyHKh3tvw%2FthnkmZBfHMjDKjQ%2F8CMz%2BaIfA%2F%2B%2BCjxY7pMId3nnq18vAsCIYdWtcLLl6PLTUvLibnIqvzqZwzsSf19IM9inwIrQw6FsT%2Fu%2FhLMUPnlzxF3pfgTAcZ7Eidg&X-Amz-Signature=59c0f69cf977c754e610ba2df0fccf72e46bc46a80d17f5eb5d97b0cb22b994c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTWVFNN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2F46uT2CtTmdVAV0TME%2F7%2Bpa3vCaOuFbHzmB27LZZAgIhAKFLjsVoVshxcZnVKbZ%2FK4v9%2BbY1PURY5C0dNkVhlH5FKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtv5OwXQv5NBEQb84q3AMY4%2FQE5xfZKgntICRbn94W9rd5FXG7Va5%2FgGmhX0UfrMqNW8uUh9x12K%2BpcJqHrn7TksoiqkKINJgxYK8OVB0n3z2El12zc47SOS%2FXJCNlTJG5s5l4FiDpCS0vQvxWnldtdAS7QOQ60rkj48trwdd%2FnUgTkt3GjL6H0XfsvAXbjbs5tBzsjzzpHuOLdqG6tZ%2F18qYJJzGocxb%2BlrMzHL2tJR0O6eNphzevl9JjOjisz8ORnCDZ%2F0n9wPSrxS1LuBDFvEbitmLzq8voVR8Dr7dYKhyWl%2FgU3VRJ%2F92AMwLJ1vSzXTtEnkxK1oEX3Ip4oBNKNUN5UHPzVtOyscljpCQtzjZz51hrD4OHzTbe%2BPa9NKbynh4AehsLqAVPUPrbwMUHfRKF8%2FP09YLxfRliLEyB8K0eIuDzFy4w9eMEdA1k%2Fw0KruUDoZnIVMYu%2BuauR5v1eZBvN%2BXb%2BsgY7ORPsFaA8%2BbyOjb6lAFrvut3ni%2F8eN8NbveVlpZtqTqL%2B%2Bqv9rygVu1XKlrQLiTtYIqR2s1Bdun0imhiTOxjpiHssxqy9Khl8AHwWrdrIIaAcC2SDvXAySqBZoddc%2FJzw9HhVgQIvGRSHweCph48zk%2FnKSPMnAhTRnL1vv3%2Fz8ry5DDQtt7CBjqkAXJVVOoX2YFlPyottCz6lOv3i2ua2IcdLvm3RplmT%2BsDMGLqwxtda7RcVS5ELOGYLntM66uk%2Buy8OGkbDhdLs4RhzFWG%2F6ovu9gvOnsLMqmpkR7xRpPXC2jVgDlEp0oCfoUMBEG3jrUompbiMSDJoTbxbghjEst434UB%2B6tS2jgq9lbsKKLtUa6Dk4%2FrkZ9%2BcC9S4Lda5p520c%2FFPyhA%2FZ4Kqght&X-Amz-Signature=c05d8db5291ad2048705537c6e8647559f153773eadd40966f5042d9ac69636a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
