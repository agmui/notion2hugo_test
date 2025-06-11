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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKTLRMX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtnNlSMr5Hzn3uEWpvJlY%2FyZLq5qqvfJgyAAb0NuKSRgIhAOaR8PcijXjCJCXZxjgTAg4dPCKJacRV1eq6W%2BSmwkBaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Q0Dy7F3yG9jUGD0q3AN852vocUYA%2FdBnztdht1NHVbfvYcqtQw35HAvX74d%2FqNWNuQBKW82fWXTTZ1zzG%2BbFxsExcIobKiByLQhUlTZ3Ce6SXYGSrPQbCei1vrZkPyJv7IRinzCLlcVL3QPhtPrHVjqxeBWP041fDEwpI1JZ696hE6IchGa8G2vCsOFRDNYkQvgJctcVL47zM%2FW6PKMXMlo4QBIr%2FXqnnGxQ6bkmP%2B2XRxd%2FMOnHJQ08buefUHZi27TbkFagg9BnfyFCoOMlnqy7gt%2Fs3Ls2IZi9K5M8Uyh7q5wtpgNOkXi6h5bb4NXTGu2dO3SePqIeg9AHOfhhWtvNTIuK2Ot4eVEat6qHiEaKDInyAm%2BO0TcL1czRMdi%2FNKb%2FxSIaJQaqKGVfZgHBwVcQ1fClie26njEVZohOY8x3RAER9G%2F%2Fl3gytZhwI2f0POZP6BkqTcmC%2BZ7ChzaQmlTE86My%2FJVa8x7IO%2FCFi9aOIYSjlq9I68z9x3K%2B4sOm1pg3CC73gi8G3Zqb1fCG7TcjDmUZTx5%2BI6EgPxRCkrLyV%2FGdjrHMAgNbnvQ4pwl6dzIPqbPGZxD3uqPl8hgPlhhYOhtzzp0xF4%2FheT%2FZEUJi2mnXUa1WIu4e5bdWLL6LtAoL9lx5WLG06jDiyaTCBjqkAYlpzg0%2BYNCSe20X%2BDZdqzIm2RkfN4hW1WZx17RhSP51XALE2RhW0AAhaoxYu1YCulG1hGbUFHky8%2BV1Jfkf71bJ7Sgchzx6OkN9K1iOjF785kPiKcHjj5ldmwvr6WdL0eYqkeoDAzQtQ5OzinTU7zAFdSxMifRZll%2FzgauJwOe3hyYNIfjwLvo77nS5HPogswVXw8pjjDvPJx93HvjkGHkHBLGq&X-Amz-Signature=7d9f37ac6d75c5a040707490f325da3feb1c17c0510df238925671b3f414b5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKTLRMX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtnNlSMr5Hzn3uEWpvJlY%2FyZLq5qqvfJgyAAb0NuKSRgIhAOaR8PcijXjCJCXZxjgTAg4dPCKJacRV1eq6W%2BSmwkBaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Q0Dy7F3yG9jUGD0q3AN852vocUYA%2FdBnztdht1NHVbfvYcqtQw35HAvX74d%2FqNWNuQBKW82fWXTTZ1zzG%2BbFxsExcIobKiByLQhUlTZ3Ce6SXYGSrPQbCei1vrZkPyJv7IRinzCLlcVL3QPhtPrHVjqxeBWP041fDEwpI1JZ696hE6IchGa8G2vCsOFRDNYkQvgJctcVL47zM%2FW6PKMXMlo4QBIr%2FXqnnGxQ6bkmP%2B2XRxd%2FMOnHJQ08buefUHZi27TbkFagg9BnfyFCoOMlnqy7gt%2Fs3Ls2IZi9K5M8Uyh7q5wtpgNOkXi6h5bb4NXTGu2dO3SePqIeg9AHOfhhWtvNTIuK2Ot4eVEat6qHiEaKDInyAm%2BO0TcL1czRMdi%2FNKb%2FxSIaJQaqKGVfZgHBwVcQ1fClie26njEVZohOY8x3RAER9G%2F%2Fl3gytZhwI2f0POZP6BkqTcmC%2BZ7ChzaQmlTE86My%2FJVa8x7IO%2FCFi9aOIYSjlq9I68z9x3K%2B4sOm1pg3CC73gi8G3Zqb1fCG7TcjDmUZTx5%2BI6EgPxRCkrLyV%2FGdjrHMAgNbnvQ4pwl6dzIPqbPGZxD3uqPl8hgPlhhYOhtzzp0xF4%2FheT%2FZEUJi2mnXUa1WIu4e5bdWLL6LtAoL9lx5WLG06jDiyaTCBjqkAYlpzg0%2BYNCSe20X%2BDZdqzIm2RkfN4hW1WZx17RhSP51XALE2RhW0AAhaoxYu1YCulG1hGbUFHky8%2BV1Jfkf71bJ7Sgchzx6OkN9K1iOjF785kPiKcHjj5ldmwvr6WdL0eYqkeoDAzQtQ5OzinTU7zAFdSxMifRZll%2FzgauJwOe3hyYNIfjwLvo77nS5HPogswVXw8pjjDvPJx93HvjkGHkHBLGq&X-Amz-Signature=f85eb8d421879cd385aef689cbebc40b5214bf51a67b82d07d78604ee5a32ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKTLRMX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtnNlSMr5Hzn3uEWpvJlY%2FyZLq5qqvfJgyAAb0NuKSRgIhAOaR8PcijXjCJCXZxjgTAg4dPCKJacRV1eq6W%2BSmwkBaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Q0Dy7F3yG9jUGD0q3AN852vocUYA%2FdBnztdht1NHVbfvYcqtQw35HAvX74d%2FqNWNuQBKW82fWXTTZ1zzG%2BbFxsExcIobKiByLQhUlTZ3Ce6SXYGSrPQbCei1vrZkPyJv7IRinzCLlcVL3QPhtPrHVjqxeBWP041fDEwpI1JZ696hE6IchGa8G2vCsOFRDNYkQvgJctcVL47zM%2FW6PKMXMlo4QBIr%2FXqnnGxQ6bkmP%2B2XRxd%2FMOnHJQ08buefUHZi27TbkFagg9BnfyFCoOMlnqy7gt%2Fs3Ls2IZi9K5M8Uyh7q5wtpgNOkXi6h5bb4NXTGu2dO3SePqIeg9AHOfhhWtvNTIuK2Ot4eVEat6qHiEaKDInyAm%2BO0TcL1czRMdi%2FNKb%2FxSIaJQaqKGVfZgHBwVcQ1fClie26njEVZohOY8x3RAER9G%2F%2Fl3gytZhwI2f0POZP6BkqTcmC%2BZ7ChzaQmlTE86My%2FJVa8x7IO%2FCFi9aOIYSjlq9I68z9x3K%2B4sOm1pg3CC73gi8G3Zqb1fCG7TcjDmUZTx5%2BI6EgPxRCkrLyV%2FGdjrHMAgNbnvQ4pwl6dzIPqbPGZxD3uqPl8hgPlhhYOhtzzp0xF4%2FheT%2FZEUJi2mnXUa1WIu4e5bdWLL6LtAoL9lx5WLG06jDiyaTCBjqkAYlpzg0%2BYNCSe20X%2BDZdqzIm2RkfN4hW1WZx17RhSP51XALE2RhW0AAhaoxYu1YCulG1hGbUFHky8%2BV1Jfkf71bJ7Sgchzx6OkN9K1iOjF785kPiKcHjj5ldmwvr6WdL0eYqkeoDAzQtQ5OzinTU7zAFdSxMifRZll%2FzgauJwOe3hyYNIfjwLvo77nS5HPogswVXw8pjjDvPJx93HvjkGHkHBLGq&X-Amz-Signature=e3df762fb5f92a96cbd4378c42b283bb706ba44e23dc4a649be843c6b2cee42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y66YCQ7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAPmCtglV3i9wC1ABzPkeTdAiCKw8WWK0wcrbVdcPoDAiEAzM6QbhmnuAtNv5c3WbzLi%2BK4z4WOwkk9yRtS1ZYQrfMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG17GeTOshKSHlyidSrcA6lFZlkWDxokq%2BndBV%2FA70DdJTGUvfg0AQhydBZ7uNz4GJ6u8KlASLX%2Feh01Vvm1MkRkIQWLNpqdWhWsQtzj4n%2FBVdUYQKplPO96UCtqP5UcVXCLVGXoD0U7cgvzA397QgdUYbEjVu%2Fkp3L0mhMH49KohFeb95T5p%2BTIQWJr1eyBaECM2CigHTfSwFRi1xO9kVMP7bFdZ2Pxr%2FbKzito1NBiJfLGEUDRI%2F2TAjMw%2BpCuqW%2B9BbxNDFaVTen%2Fj2rSK2CBOgAXl1EW0%2B49USdoj9FQuHnAi3KHsDeaTbMASsVLXexHohJ25y7%2BAtMuSPF7RPMqAWhoqDuQ0TgxwC2smQRl72q23L3GJY1YlVgQEo5KPXJlCP8ht1hwUS6d9WnrJeYzUT3jv97qZo4x%2BcFmJQeCzXdOWgopMVfR1q1xrCD3qDoU%2F1%2BFaJVhlaXYB16%2Fgfdqc78bg35uwknZVBcYK7XLhG%2FK1biPIhk76uvhObav8StjcDYDMcBy60v9Qicr%2FOKr4%2FDckSOZUkaUcqvmwjdz6BFtdjLkl4ladhHCjSGbLhCVMKX2p2umjNd5WV57F0xqxPzPUR5LM%2FV%2FIZ5WpzwCxJQPm3PAZRVokO054rwwxZCdbc8ZMsMBc2%2BXMPPJpMIGOqUBAYqfdsVqb%2FR4lR2sofGDCLPB9vC%2BsfxlV%2FdI9GmOVwvnfzJd29CHzuAFLJj%2BoNcmziRCoOkX75GS9o7nnqlXws89Mf8R1KrnqfsmkyEwj69ivjNPsJXyyqwIe5FVUysVsuBWhU9%2B2ghJ6pZMixkjctYZwh%2F1u3r6w7wup3BPIuC8vpu8fG5hjNCe1a29W0MAocpgS7r%2BH1oc5iJDu9%2BilQ4anYso&X-Amz-Signature=e35ea88d1c3539a608183fc25fc0ed3237196d17988dcb1e5b918a273fd14671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTFV4DE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjaiMWg7IJe44rtR5YLJAFI3RtylaECOn4s%2F%2FIAFc0hAiBM9SMTeGAelBhAO3eLWnpPKGDfl6Hna7GuISmv3NcHfyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2Bthe5Og5vSS5wXfKtwDwWcFP9HDNrebItlTpNwAdWMSRU3ZUaw6E9hG%2F1m8AZ7G9j0L18VKxXuxDL9xP4sjMz5lLS2ZVCGatD9zXvyX1KgFLwh3VzDzRksfFblY%2BBQfuB1JT6oh5LSv4dsvg%2FsJ99wpTSmv8VcrX3Vw8voAw6fGJ8SZ4JuNWepIUuNa1ohsiv95ZKSKguECocHtnl9%2BrcEvtZ8%2FRflQSnIm78a0j6CVmHP0Y%2BnGDlbqZAiWXQ4sYVFQ%2BwCaU6GDcXqtcc5iT5Y4YHkX8I8DZPVsrFenO44aujxn90Gk1XFopxWvajHduSuxmNT5F%2BGTgoF2f6R2syszRDv6ULcAG0EgDRf0tSyM0Ao2pGzuzuC9adDjtzFjSzcS7TAsqWeCrvVV%2FslkiMM%2BrgJPWNNxn5nZb1kVF9hK2FBxS1GCEdk73wWX%2F9o7yPExzZn4ArLjNLTJh%2FunQ7PY%2BOXG4MDvl3EdD6%2BlkXqTcJIz1zqNFTBmWjnKArIb953LfYcV8kGK4Byr%2FYoWuNd%2B47%2BYrOgHuxx7Q2Yyns2YiIFoKmFkrEhelHwZYCKCVjScTGq%2B%2FUqDk3OpixvA9yXvR1rn0KKX3WhWuxDqRwQWL%2FzbcS1mwswAX2HC0fp%2FUXGxweW9rY2BqaUw4smkwgY6pgFR3XS09dHy%2BMaFBeZm5%2FenptkGPG3FY4CWlOH4g3ZsAtI6UqLJCkAAlAO9ymsVpITmGFYBonJSEDuq%2FPCfvYgwADCGXKTqfL4Z74nxNYajmIO5qO%2Bi6MMIPOPmjdLdFC7I5aAGO5e1TMusvS5hPF2sRpNXsk7mishmxBSgyK%2FtAEJIOTjX8ts%2Fs7Vz9squj3KBHfKOlWzUiazud%2BL9DLBCjqzqyOd3&X-Amz-Signature=0427221dd5119b7b754013737944f0dc5cf8e1cf83b9c2b9cceff4024790869e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKTLRMX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtnNlSMr5Hzn3uEWpvJlY%2FyZLq5qqvfJgyAAb0NuKSRgIhAOaR8PcijXjCJCXZxjgTAg4dPCKJacRV1eq6W%2BSmwkBaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Q0Dy7F3yG9jUGD0q3AN852vocUYA%2FdBnztdht1NHVbfvYcqtQw35HAvX74d%2FqNWNuQBKW82fWXTTZ1zzG%2BbFxsExcIobKiByLQhUlTZ3Ce6SXYGSrPQbCei1vrZkPyJv7IRinzCLlcVL3QPhtPrHVjqxeBWP041fDEwpI1JZ696hE6IchGa8G2vCsOFRDNYkQvgJctcVL47zM%2FW6PKMXMlo4QBIr%2FXqnnGxQ6bkmP%2B2XRxd%2FMOnHJQ08buefUHZi27TbkFagg9BnfyFCoOMlnqy7gt%2Fs3Ls2IZi9K5M8Uyh7q5wtpgNOkXi6h5bb4NXTGu2dO3SePqIeg9AHOfhhWtvNTIuK2Ot4eVEat6qHiEaKDInyAm%2BO0TcL1czRMdi%2FNKb%2FxSIaJQaqKGVfZgHBwVcQ1fClie26njEVZohOY8x3RAER9G%2F%2Fl3gytZhwI2f0POZP6BkqTcmC%2BZ7ChzaQmlTE86My%2FJVa8x7IO%2FCFi9aOIYSjlq9I68z9x3K%2B4sOm1pg3CC73gi8G3Zqb1fCG7TcjDmUZTx5%2BI6EgPxRCkrLyV%2FGdjrHMAgNbnvQ4pwl6dzIPqbPGZxD3uqPl8hgPlhhYOhtzzp0xF4%2FheT%2FZEUJi2mnXUa1WIu4e5bdWLL6LtAoL9lx5WLG06jDiyaTCBjqkAYlpzg0%2BYNCSe20X%2BDZdqzIm2RkfN4hW1WZx17RhSP51XALE2RhW0AAhaoxYu1YCulG1hGbUFHky8%2BV1Jfkf71bJ7Sgchzx6OkN9K1iOjF785kPiKcHjj5ldmwvr6WdL0eYqkeoDAzQtQ5OzinTU7zAFdSxMifRZll%2FzgauJwOe3hyYNIfjwLvo77nS5HPogswVXw8pjjDvPJx93HvjkGHkHBLGq&X-Amz-Signature=4461ec7eedeb7537da231cd5488f53d99447a33c4e6ad96708f1da3f6cfea4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
