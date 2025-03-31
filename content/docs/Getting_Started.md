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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUWC5AG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDScHpZgfR%2FGAx%2FWQotuQoUZHv%2Fv0tuv02QMGOUmRcaAAIgYD4CPkz%2B99cI%2BzkakmncdncNSGJEOUS4izdjeIGEMM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUJ4bwIohKlTtuwQyrcA4tug50OrawA8sACEh8Qah8mZ3el%2FTRkUs%2BFFBbAlj8tRGBsdv7sbNQttX4GRUOKuNahRQa5NBF9kf38E963BxwtsYzsH0%2BC0r39fRZB4QPAZjL6zXcRYgcYTqhIiLuAVRusxt239L6zpc07c0G59IgV%2BSyGUUOeX1JbC%2FkEvBd0tDDlt7vQUt4qGMgCJM5ERDqiCMavEgNhqSIG8CyUY8QNSdt39Rhq3%2BP5mcDWE9nyaBGAXl1fEoARRmAr2QP5u4kpTkM42PO9BfoeJC3KbWKE1Y5JAHkLtkYVR88Ss72VwR3d8elcsgqx%2FhXVRzs%2BKMmOQ4SGuGdYG%2BndqeI5823I2pbAzM6QMqY1ct6BwjAHTIyro0onnZp4ybztxL4zuQQsQntZMj8XQiU76hp%2FfOpf0UJiMnyl%2Bdqin9odhObVcAga059T%2B71PEAJuSLIg4EhSdHalae%2BQgOZnJpe9JJwhPEkjHtWS7jRsgy870rTekfxpU8gZmYZSQH3z5tSAefdO64Sak2g2kJdKniDidwvrtoJ362nTQiJD17cxlgYPALpJ8HTOjOMEZm7ox1ENs63Qa%2FhN9%2FzWpAwQIeYbNCJCHNxSRbkNQuGBcIKyQrnGmGE%2FqkGrG4fqm3uJMJzlqL8GOqUBC1pSntuuzoddQNRlX%2FD9wtTgXJgRQWvv2AHfB2MWeze4JQVQ7fFBXdkH7mbijtK8jewpAOx%2FjKQzCLDMmffF8eWYhLNuG04dZId%2BaReFIJbABkar3Gy%2BBNYH1k6cBuL1RlPiDhRCyJ9XbGWDSH2arPjTXM2Q7wXmCgEKVrwyLS0cZbP0QT2Jol7WmMkvp9FoigtsWeSIvZZyPP1yD4PGzazj9aG9&X-Amz-Signature=2552faf2c0c0730403854c0a663d3a9cdd78d93358506f6b0aac4f04f7524df2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUWC5AG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDScHpZgfR%2FGAx%2FWQotuQoUZHv%2Fv0tuv02QMGOUmRcaAAIgYD4CPkz%2B99cI%2BzkakmncdncNSGJEOUS4izdjeIGEMM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUJ4bwIohKlTtuwQyrcA4tug50OrawA8sACEh8Qah8mZ3el%2FTRkUs%2BFFBbAlj8tRGBsdv7sbNQttX4GRUOKuNahRQa5NBF9kf38E963BxwtsYzsH0%2BC0r39fRZB4QPAZjL6zXcRYgcYTqhIiLuAVRusxt239L6zpc07c0G59IgV%2BSyGUUOeX1JbC%2FkEvBd0tDDlt7vQUt4qGMgCJM5ERDqiCMavEgNhqSIG8CyUY8QNSdt39Rhq3%2BP5mcDWE9nyaBGAXl1fEoARRmAr2QP5u4kpTkM42PO9BfoeJC3KbWKE1Y5JAHkLtkYVR88Ss72VwR3d8elcsgqx%2FhXVRzs%2BKMmOQ4SGuGdYG%2BndqeI5823I2pbAzM6QMqY1ct6BwjAHTIyro0onnZp4ybztxL4zuQQsQntZMj8XQiU76hp%2FfOpf0UJiMnyl%2Bdqin9odhObVcAga059T%2B71PEAJuSLIg4EhSdHalae%2BQgOZnJpe9JJwhPEkjHtWS7jRsgy870rTekfxpU8gZmYZSQH3z5tSAefdO64Sak2g2kJdKniDidwvrtoJ362nTQiJD17cxlgYPALpJ8HTOjOMEZm7ox1ENs63Qa%2FhN9%2FzWpAwQIeYbNCJCHNxSRbkNQuGBcIKyQrnGmGE%2FqkGrG4fqm3uJMJzlqL8GOqUBC1pSntuuzoddQNRlX%2FD9wtTgXJgRQWvv2AHfB2MWeze4JQVQ7fFBXdkH7mbijtK8jewpAOx%2FjKQzCLDMmffF8eWYhLNuG04dZId%2BaReFIJbABkar3Gy%2BBNYH1k6cBuL1RlPiDhRCyJ9XbGWDSH2arPjTXM2Q7wXmCgEKVrwyLS0cZbP0QT2Jol7WmMkvp9FoigtsWeSIvZZyPP1yD4PGzazj9aG9&X-Amz-Signature=cce1fdb0dd2a0a055a5fca7e7909bfa93fa085fbb1e3aae103923de090245af1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBKZBR2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC5aJtErefaHZQ5LoTDlyeakLUz23TYCpNUZzmE1rKZNwIgWncsQ9qN%2F9OU%2BYHpirYwB5IC9dt5AbjYv7ttjvj495gqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOd6%2F%2BPF6HpmslLcSrcA5pwANGV%2BBthpWER6jNKJKINg7yvQhaP3VwKliMqA4qxviaQGhBEEln7DMljehhPSIyrbZ2ghS2br8JN7jPKNuhahKWifLsYQmPzB2YIPLSiIE%2BmdStLqWMLoHQuiCQF%2B1USRA3oMAAS64dZ9oX%2BfJz0hvIQvKiwnGI0%2FsiD4ny%2B2gxC%2F7g%2FRIuT5Gu2TEHamD6E9y8pBkmLG2CfuitjUUoDTcdYfNKxbe2asGQUcWVI9znHGuAD69TDPeTjfATUDcMAtLSD%2BQau0bOR7myqiNwOUmstGOBRSMEWeOU%2Ff6I7K6a%2FKUixrKiOGrXMeJC3YM7fDQkszQ5GsDFM0NpsHFueRAqtW3TnVmxysnFsPRNEEod4S1vpDdqvp4jSbO%2FjRLCHrivsKdJSO0Ti%2FWxwcCGCXJynb2YaVPgjZvbCCthqcp4aozpc647Nx%2FWGY00Aya9T1Hkj%2Fz0Kdb5etE0XThpVBgChCHVeggvStR4%2BstA85ILhEKNFGS42Qv5Jrbh86GEoF5r29tiVcSu7kYVEtIe94OX5qPc41me8YL1Jq%2BfTtgrj1bS42pCBSH8I17H%2BZp92cmS2Gawpfr4tMiI8h4x%2FRiL%2BN7gIqF1d5wU2AzsZNIE5jjGRY4SMgekyMOTkqL8GOqUB03N0UEBQdnuxm4tpRccN3CCXbOS2UDkyl2Ekhz%2FeZgJ436L7LqpqgSi8CGz1qWpV6g7YQh84g8XKsMnOR0SZniIIB5VoumqQQD1gNrPSzrxztGMmpMelFb6kPfioHeyVTo%2Bun8LfAkSPOQ3xT%2Bokly%2FP7QvxGTqEzvL22BYQyA%2F8Yidi39F8Ohg5DhK9TlTwLi%2FuJvM620P3vJOm%2BWfC7pu3y5bR&X-Amz-Signature=77d8fe0824e3adb448735f79cc937015ee1c9257b2ee8509158791fb98e12f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVKB7PQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCpDKYBsQJUbmRfonxATUT24GOMIPoxgJNEhP5N%2BzMihAIhALxCmiIogbTMH8Xpgp9nGCZw6z1yHlrrK3QDr3q7itrAKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkLmD4yScmyzFgMtAq3ANUCZgWVeg75llHTXrNosmp0Qmj2I6H78fQLdlkGZAXPk3cq5NPUqzrd4vKb8wDkq0nLP9mnqw3tKMFMwUL7%2Bnne%2FHVAq%2BvcvXedqCkLPI%2BccfFIATqlLBSrCGMVoMAtb%2FC1leiRhlnHEHUE%2F0i5UbZXJlWOfuLp1JQM5pWDxTUnqz7tYrEnNxkkPEazHzv%2FFk8va5DjubSQAIAWaqzwA%2Fu8XRv0yRaXGYRhbBUxN3mna%2BI8aVl3UwnW9IDDFii6boobtTxI6eVv4U7oUr4Ihaxoyo1KFz1mR256AhC7LfwmsoI26r4CAaQwEQm8ptFSVugHcmc84vM%2BT81WqPn2kq0iq%2FA5SL7vyV8YJETNeE8a5Z1A4BSChck%2BtOaXMkmngdgL7NzGGFA9NJLR%2FtNCN1Ywnrff47XV%2FtNydhgRe176XIwmM8r5RvAj0PM6HXynztZ22HnUaVX5XbMxm%2BgIec1QZlIhgAYTZkS8q9vcitiOSJq4RAN0JS9PSFXdNzBg3f14P%2FFM20ybNRdNMM3hL2i4o5awKHeKT7%2FaMz5iLQUcXrH9XIzFLfjSdLALwS3Tc%2BtrrSvFh6Uuo%2B7nLYQzbEa7kFRBQzH0R2z1i%2B5F0rHUzDP5zqOPSegKQz8zTD946i%2FBjqkAYbr7Lj6%2Bv7eRj2qyemy4Sf8eQvECfKL97cI7f4Gzz62ostmEo9pzM7BehH%2FPJtrdE0s8iVRfKTDFfyw3rsBOyXd%2BGegU3vCxGpt1cfacKRuoNnMcpdqA1mOs4sJhCcbSJjTE37opWCcLgVBjbAaClqVzXBVJ8%2B3oEahUhmdA4i4Sg3PaDH0vVlUkkPhex%2B0tzsrESSglHjVk3Fi0Xv3al7wmJXT&X-Amz-Signature=9a3ef76c271795d951a2f35c20a59accd5d23225d41d4af0c78533578723d085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUWC5AG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDScHpZgfR%2FGAx%2FWQotuQoUZHv%2Fv0tuv02QMGOUmRcaAAIgYD4CPkz%2B99cI%2BzkakmncdncNSGJEOUS4izdjeIGEMM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUJ4bwIohKlTtuwQyrcA4tug50OrawA8sACEh8Qah8mZ3el%2FTRkUs%2BFFBbAlj8tRGBsdv7sbNQttX4GRUOKuNahRQa5NBF9kf38E963BxwtsYzsH0%2BC0r39fRZB4QPAZjL6zXcRYgcYTqhIiLuAVRusxt239L6zpc07c0G59IgV%2BSyGUUOeX1JbC%2FkEvBd0tDDlt7vQUt4qGMgCJM5ERDqiCMavEgNhqSIG8CyUY8QNSdt39Rhq3%2BP5mcDWE9nyaBGAXl1fEoARRmAr2QP5u4kpTkM42PO9BfoeJC3KbWKE1Y5JAHkLtkYVR88Ss72VwR3d8elcsgqx%2FhXVRzs%2BKMmOQ4SGuGdYG%2BndqeI5823I2pbAzM6QMqY1ct6BwjAHTIyro0onnZp4ybztxL4zuQQsQntZMj8XQiU76hp%2FfOpf0UJiMnyl%2Bdqin9odhObVcAga059T%2B71PEAJuSLIg4EhSdHalae%2BQgOZnJpe9JJwhPEkjHtWS7jRsgy870rTekfxpU8gZmYZSQH3z5tSAefdO64Sak2g2kJdKniDidwvrtoJ362nTQiJD17cxlgYPALpJ8HTOjOMEZm7ox1ENs63Qa%2FhN9%2FzWpAwQIeYbNCJCHNxSRbkNQuGBcIKyQrnGmGE%2FqkGrG4fqm3uJMJzlqL8GOqUBC1pSntuuzoddQNRlX%2FD9wtTgXJgRQWvv2AHfB2MWeze4JQVQ7fFBXdkH7mbijtK8jewpAOx%2FjKQzCLDMmffF8eWYhLNuG04dZId%2BaReFIJbABkar3Gy%2BBNYH1k6cBuL1RlPiDhRCyJ9XbGWDSH2arPjTXM2Q7wXmCgEKVrwyLS0cZbP0QT2Jol7WmMkvp9FoigtsWeSIvZZyPP1yD4PGzazj9aG9&X-Amz-Signature=9712ea7031f5b37aec7562fe3d9451c205d66058e5002cd5f19b2af11b7e4b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
