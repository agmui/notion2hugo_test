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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFDWV4H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSUGypDyZdUDn1Z2bglon%2FmH1c42KGdSktA4NcJJojiAiEAxmr9FkQSoVEn3NkWR%2FxfF%2F%2Fy2VYQTbMiVfcOeVh2PL0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT%2Fi9ulzn7gx4mH9yrcA27qmPKO9dzHRmLhbHlUDtZ4KHXlz7%2BbuqmTiXoGTQ4ZEha1cybERlriuTGkwnp5dknqUMQvqz89FOmjeCnLwFkJfmk2Wbwzve18emjgGDzxTljdx%2BpZJR6y5%2FydBy%2BNshsMy35yhnu6nO2WD78FV50OTU2wcyvnMW73WDmQnbRdX%2FqxB3jkg0pqkzfHbdcwWAZSOkPOuRwReR%2BRn9jOMoJNjqtlgzEwhss1k6RhRaRGfucwVpp9Rp7LRQqZ%2BanS8AqJ%2BKfqBDNacoQycLHYyHymkkOM60Z9%2BV5i0rsZktVfhv1RPS5boIbmHJaO02BLK1IO78L%2BDFDZpToZ0gcxlJs5MnqrFRVw%2B4CAzEe3FPFmcha%2BNuzQjZDavfPb9J3ehhW0tqPvs295uNSK%2BO5tz7IfTEpi08BsJqh%2BTrnREzxZ664x%2FiwGQRw3bzLlQD1CtvcP1Kxvdupxs1XQWfqCrWsqbqlSsP2CmYuNAY3f93F6JkqyEjvjBPVXSK4qhVkqEb2XNEQ1lVT7kt9Q%2BJ81R2qxFj3kKtnebXzYsbpd7aWvN5uYsKI6MFqleCfXlPY2EQ%2FoFZ07l99h0lPdY%2BcRYI77NBxkxhlSP%2FGdkDLKxThC06Y4hrA5JIn0NJdwMPyG1L4GOqUBid1N0gO5Yve6TMbX8vL1gXmMUezXbeVgxETcYh%2FaM%2BiiCMVQGk07ewCYgQu543e%2Bi678U9fHOE0yk3%2Bx%2BCJ0tD1aRn1X9oteeyzXC6GolstGUp3Vf9HfSe0TidLEwyyQrYqpfCRjMBBu6u3nQkhyuT6onC1PeNB%2FTFk1Wn5ga9AFrqTqlA0rwv%2BBmlsMa%2BKnu0U2gWkNNk3Q9248FTxuWqWPCAJ9&X-Amz-Signature=501bdc6d91dd2e84665cf4f9c04b6a0548885a9da5c392d34c2324102d3bd4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFDWV4H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSUGypDyZdUDn1Z2bglon%2FmH1c42KGdSktA4NcJJojiAiEAxmr9FkQSoVEn3NkWR%2FxfF%2F%2Fy2VYQTbMiVfcOeVh2PL0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT%2Fi9ulzn7gx4mH9yrcA27qmPKO9dzHRmLhbHlUDtZ4KHXlz7%2BbuqmTiXoGTQ4ZEha1cybERlriuTGkwnp5dknqUMQvqz89FOmjeCnLwFkJfmk2Wbwzve18emjgGDzxTljdx%2BpZJR6y5%2FydBy%2BNshsMy35yhnu6nO2WD78FV50OTU2wcyvnMW73WDmQnbRdX%2FqxB3jkg0pqkzfHbdcwWAZSOkPOuRwReR%2BRn9jOMoJNjqtlgzEwhss1k6RhRaRGfucwVpp9Rp7LRQqZ%2BanS8AqJ%2BKfqBDNacoQycLHYyHymkkOM60Z9%2BV5i0rsZktVfhv1RPS5boIbmHJaO02BLK1IO78L%2BDFDZpToZ0gcxlJs5MnqrFRVw%2B4CAzEe3FPFmcha%2BNuzQjZDavfPb9J3ehhW0tqPvs295uNSK%2BO5tz7IfTEpi08BsJqh%2BTrnREzxZ664x%2FiwGQRw3bzLlQD1CtvcP1Kxvdupxs1XQWfqCrWsqbqlSsP2CmYuNAY3f93F6JkqyEjvjBPVXSK4qhVkqEb2XNEQ1lVT7kt9Q%2BJ81R2qxFj3kKtnebXzYsbpd7aWvN5uYsKI6MFqleCfXlPY2EQ%2FoFZ07l99h0lPdY%2BcRYI77NBxkxhlSP%2FGdkDLKxThC06Y4hrA5JIn0NJdwMPyG1L4GOqUBid1N0gO5Yve6TMbX8vL1gXmMUezXbeVgxETcYh%2FaM%2BiiCMVQGk07ewCYgQu543e%2Bi678U9fHOE0yk3%2Bx%2BCJ0tD1aRn1X9oteeyzXC6GolstGUp3Vf9HfSe0TidLEwyyQrYqpfCRjMBBu6u3nQkhyuT6onC1PeNB%2FTFk1Wn5ga9AFrqTqlA0rwv%2BBmlsMa%2BKnu0U2gWkNNk3Q9248FTxuWqWPCAJ9&X-Amz-Signature=16aa8c8bfd85494fc6119b3594a5e3eb713d6bf4137cd4fa544f7779a89e1648&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JHM2KO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxqU1SKfXjuPUbPpgPeGaW8da4recIFET7N9Gkbx2BEgIgbTyw95ZtCni2jyUk7wJpd16UZoTW8cU61U322YbAjXUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtqBmckhWDJm1fiuircA3myXmyHFRuR9TahwWBvGCuLwAfx1Imdn3SxsfKuND37w5xTAxKBRfmapbBC3FfTnTG281aWaWgrp35WzNGyhjEreiE9kIl1rH%2FVQXMIYDUK6KqUf7fswFY0CdpR41SCMXdwsPraROMevAWv2uhERtJu1xoYuHQ88v3CAN3zWaZaFOu4BrCEmnhMXhYW1aJ8wY9EnSGmHmcgKnGBsqjcJttSrBO%2BAnM0h4X4cuDasU41tVxruGRQUi7qvWtKWCB%2BDzyYGKertpNRXIeGA9okcj3I3Bd%2FjQC%2BFS5Lo83Or10VBqnh2yv77s0UCTFtYv8Y4N2Fot3w5fbF3ZfTRGp57ufm%2Flywgiz8GaiDaEjQLU6ycvJ954NUBs1Y1WLCTLMijR92pkaUcQK8mtwHdOcp6OtHxCY64MfFm5uPbJwhBgfJ5B6jC9tgBXPl5gSit0FFzkTgy12QyjFiY5kWft9m1Tf6sKR6xkc1xQFGn65gL6WEMvqVPH6exSWo5%2BVwNRfD7ssOVTDP%2FGAU06JkR%2FV5ADxV50a226wuScKU%2FyAowH5HShgkVze6diZDL3YFC49gQzc%2FpvorDNtBycd0oHPCgtqs0%2BPch3FDPNAVDCggH2GHc%2F9nauadLpFB79NcMJyH1L4GOqUBkBB5Kyy%2BIQuIHMIIQ%2Bx%2FYy38IHJbAiSNmhGKhAD5Peuxl4NVJ5ichHy404v5MOpYlOqNiS%2F5JrIeMRKgDaxeVA%2BH9%2Fu%2Bfo4j50r6m1xRpVArlvr5B4KMQJ8%2FHGkXQMzE4y%2BKNwdutOgMVNikw%2BlHYRR7GnHDsdjHYMSnus1i2vLuOUpiFjaC70ksBbeYiejCc2aWPmaw1bcZedjJOJ6vfIgwuMiM&X-Amz-Signature=586dc80e1732c514921797311feb702ee9286e46bee13322b1d790bdaf6fb55d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4FLFDT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICojzPHQRWQJTPNz%2FwilI9i19GiOc3ggadtm6eOMjVdpAiA58oyKd%2B%2BZDg3QVnOwfjNqKmatP%2FmwGzxRvVyXrCbitCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLzbpnUu2Sirna0IpKtwDHcRo6%2BMMw5PL3pJ4Lr0Hj5by0BbcXagQsnK8bJ6445biFiqaJdwrq%2FN5xmo0SSR%2BbTGezppx7vPlIwk8cqviM7cAk0WM0HRUW%2B71u0QbMRA%2FtL3qSj2XsIfaBF3TaUCqufWG7GL3p%2BF7hBYvSzjaD5UJYMY58X0I1lqDs%2BP%2BpJxRqrldb1eWpvg8ckjhDBzqvMxNupkFwJd8b7X7IZ16AZDT2BMI2FPPVJOGEXyYkdeQwb6yWHe4xauYE2hP%2FqI1NqvtDyHTd5QpX%2BIKC6bly%2BBdTudLJbZAKTPvtAZX5SXJXVeO%2Ba8V94MVzfhYmAUwq1F7W%2FlFNXRD4Ls6ytc4wi%2FJR1ERpYduU0SdSG9pmeBAx7HHSFg3J4PMvyycaHXSG0w0e5QMkkQLHxF2RC8T%2B5ubcC4DsM8Qpxx72wWEwQ6oTjzXlnlDUWDc3NeozyX8TeMg7PsBf7A82NeF3QBClJiPxzb6v4BrdfOSsUvPsqTUb4P3VItaAVakAYe2AOdBnQjdngzoBOaHiwZYRE42V9aCYjCsk1cLBIgenw0SzxmzdDEFRP076YouqhJ75OE4WiQjhMnOEYRNJFBefbvE9vNzIIDQrkVTX7%2BDw85cdsrYQYIFVGvDzpFdRa4wn4fUvgY6pgFsTgUwyBuv3GsscmxVxc%2Bl%2FlXOV3XAr4e0zzG25QQz%2Fp8P4VtwD9ijk3YcCa%2BmkwquuiXYIf8NOlF3dkEeJKtcl9sc9DEv1%2FBOlnjlx7K5FQ9vBHjLeXyZp7bGn%2FT98KGegxAVVb65zpv41SnOZHAZkRdf4ufrOtDHhbJL%2F4SOHKBc1KaYtsts4cyOdrQhEfcejS1OmWRMS0p%2FkQE34KRLNUQmE6GK&X-Amz-Signature=a5bc56a86ea54a50c9f7158903e56f9c6ddf9d766880b0995fa9350deb7ea204&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFDWV4H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSUGypDyZdUDn1Z2bglon%2FmH1c42KGdSktA4NcJJojiAiEAxmr9FkQSoVEn3NkWR%2FxfF%2F%2Fy2VYQTbMiVfcOeVh2PL0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT%2Fi9ulzn7gx4mH9yrcA27qmPKO9dzHRmLhbHlUDtZ4KHXlz7%2BbuqmTiXoGTQ4ZEha1cybERlriuTGkwnp5dknqUMQvqz89FOmjeCnLwFkJfmk2Wbwzve18emjgGDzxTljdx%2BpZJR6y5%2FydBy%2BNshsMy35yhnu6nO2WD78FV50OTU2wcyvnMW73WDmQnbRdX%2FqxB3jkg0pqkzfHbdcwWAZSOkPOuRwReR%2BRn9jOMoJNjqtlgzEwhss1k6RhRaRGfucwVpp9Rp7LRQqZ%2BanS8AqJ%2BKfqBDNacoQycLHYyHymkkOM60Z9%2BV5i0rsZktVfhv1RPS5boIbmHJaO02BLK1IO78L%2BDFDZpToZ0gcxlJs5MnqrFRVw%2B4CAzEe3FPFmcha%2BNuzQjZDavfPb9J3ehhW0tqPvs295uNSK%2BO5tz7IfTEpi08BsJqh%2BTrnREzxZ664x%2FiwGQRw3bzLlQD1CtvcP1Kxvdupxs1XQWfqCrWsqbqlSsP2CmYuNAY3f93F6JkqyEjvjBPVXSK4qhVkqEb2XNEQ1lVT7kt9Q%2BJ81R2qxFj3kKtnebXzYsbpd7aWvN5uYsKI6MFqleCfXlPY2EQ%2FoFZ07l99h0lPdY%2BcRYI77NBxkxhlSP%2FGdkDLKxThC06Y4hrA5JIn0NJdwMPyG1L4GOqUBid1N0gO5Yve6TMbX8vL1gXmMUezXbeVgxETcYh%2FaM%2BiiCMVQGk07ewCYgQu543e%2Bi678U9fHOE0yk3%2Bx%2BCJ0tD1aRn1X9oteeyzXC6GolstGUp3Vf9HfSe0TidLEwyyQrYqpfCRjMBBu6u3nQkhyuT6onC1PeNB%2FTFk1Wn5ga9AFrqTqlA0rwv%2BBmlsMa%2BKnu0U2gWkNNk3Q9248FTxuWqWPCAJ9&X-Amz-Signature=ffd92dd44ce9234a41231663fa26d446606c52a6b7b3dfcf2cc69c80c6f27ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
