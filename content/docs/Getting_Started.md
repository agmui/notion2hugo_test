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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFZOUJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkJRl62EOMb8gDwWnUJmyHRz5maKR5uD2tGftxPUDRbgIgRl58gKYcIYRN2mb7gTRe0eiZNMaSfd3KBUJ73w5%2BikkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8kZUTIa%2BbJHWh7CrcAw9ZWOYuLQ9lKFvsIbOVE%2FYW74FkMz1fFRridIGELTAtWOA%2B1pF1i9nm4QCgG8g71Qw8h0eKwRiyXmjDoZnTK2Om38tv3v35BJadvN6KcrYsK2aELC%2BDtOBUHf71T83lm5ymOLKszrzHOQJii46pZPmtrcm79HymORfTrwBS5gmAJ21tCjz2NpmvlSnRL59cg%2BVdlV5WLTPewU5bhIpjdTFmefja1lSJ2YF0aDzWwicP8MIAkPq8EO3tbUlwK%2FGWBwez4Nk3OcpbPfXc1vNGSMoABdAZISMSZfBQAeTBg4GHrnSkk2x70PNQmj%2Fb0CDha5niSvaz%2FEfWUcsY4Mv8ncdT%2Fp2t2BtSLx5T9Dpnxw8EZNAY70rgiy54hzrSy8DpfNlhAH6A5Ifceb%2Be7jp2D0Uj7ykFluSxTU6cBbGjS3HoiIz7PnIo81%2FghfDiBbmt8MHnfCS%2FZlkACW9in6HYL30ilMHV90yHjtXBlolyhComV8LTruu1qiqGEyxUCEkau9FdByz41vRkpthEAh3TdbnR1%2Ba3Yxv3XhQ0vnpvJ5NTSn31y12pas%2BT5iT4G5llGiJTryzdm83S7SZAxQa3SoP3P%2BS4FaNZLbX6cFV56iYkPJUpBY2KSGFxzKT7ML%2BpjsEGOqUB%2FSBEQXTfe%2B1kxT8u0ySIEXCx2EITsYVoOBDaxlWjr1drND2nJ%2B%2BTKgn18TbYRgDlJy2wJeh6tEpEshuB4FpsAFV2J4RijjxiuwSrFMTmazfeh4ROBHliWGXGJikJN03dDZ5twXDWyemfbY%2B8stpNJh7INfdH7850QpjgMzWZ31M1VBnCvh9O9BHS1crjLO6kcSxLxSCdxbceWYVqsdEYuDRMjDmd&X-Amz-Signature=07c7e0627f98578c45cca0667ca64f0633280af3653f8bf5c88411c22c5e2740&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFZOUJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkJRl62EOMb8gDwWnUJmyHRz5maKR5uD2tGftxPUDRbgIgRl58gKYcIYRN2mb7gTRe0eiZNMaSfd3KBUJ73w5%2BikkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8kZUTIa%2BbJHWh7CrcAw9ZWOYuLQ9lKFvsIbOVE%2FYW74FkMz1fFRridIGELTAtWOA%2B1pF1i9nm4QCgG8g71Qw8h0eKwRiyXmjDoZnTK2Om38tv3v35BJadvN6KcrYsK2aELC%2BDtOBUHf71T83lm5ymOLKszrzHOQJii46pZPmtrcm79HymORfTrwBS5gmAJ21tCjz2NpmvlSnRL59cg%2BVdlV5WLTPewU5bhIpjdTFmefja1lSJ2YF0aDzWwicP8MIAkPq8EO3tbUlwK%2FGWBwez4Nk3OcpbPfXc1vNGSMoABdAZISMSZfBQAeTBg4GHrnSkk2x70PNQmj%2Fb0CDha5niSvaz%2FEfWUcsY4Mv8ncdT%2Fp2t2BtSLx5T9Dpnxw8EZNAY70rgiy54hzrSy8DpfNlhAH6A5Ifceb%2Be7jp2D0Uj7ykFluSxTU6cBbGjS3HoiIz7PnIo81%2FghfDiBbmt8MHnfCS%2FZlkACW9in6HYL30ilMHV90yHjtXBlolyhComV8LTruu1qiqGEyxUCEkau9FdByz41vRkpthEAh3TdbnR1%2Ba3Yxv3XhQ0vnpvJ5NTSn31y12pas%2BT5iT4G5llGiJTryzdm83S7SZAxQa3SoP3P%2BS4FaNZLbX6cFV56iYkPJUpBY2KSGFxzKT7ML%2BpjsEGOqUB%2FSBEQXTfe%2B1kxT8u0ySIEXCx2EITsYVoOBDaxlWjr1drND2nJ%2B%2BTKgn18TbYRgDlJy2wJeh6tEpEshuB4FpsAFV2J4RijjxiuwSrFMTmazfeh4ROBHliWGXGJikJN03dDZ5twXDWyemfbY%2B8stpNJh7INfdH7850QpjgMzWZ31M1VBnCvh9O9BHS1crjLO6kcSxLxSCdxbceWYVqsdEYuDRMjDmd&X-Amz-Signature=28d551132d41b4ecd7cbd675901c16e0ca646902b5df821eab2e2401dc37ef0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFZOUJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkJRl62EOMb8gDwWnUJmyHRz5maKR5uD2tGftxPUDRbgIgRl58gKYcIYRN2mb7gTRe0eiZNMaSfd3KBUJ73w5%2BikkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8kZUTIa%2BbJHWh7CrcAw9ZWOYuLQ9lKFvsIbOVE%2FYW74FkMz1fFRridIGELTAtWOA%2B1pF1i9nm4QCgG8g71Qw8h0eKwRiyXmjDoZnTK2Om38tv3v35BJadvN6KcrYsK2aELC%2BDtOBUHf71T83lm5ymOLKszrzHOQJii46pZPmtrcm79HymORfTrwBS5gmAJ21tCjz2NpmvlSnRL59cg%2BVdlV5WLTPewU5bhIpjdTFmefja1lSJ2YF0aDzWwicP8MIAkPq8EO3tbUlwK%2FGWBwez4Nk3OcpbPfXc1vNGSMoABdAZISMSZfBQAeTBg4GHrnSkk2x70PNQmj%2Fb0CDha5niSvaz%2FEfWUcsY4Mv8ncdT%2Fp2t2BtSLx5T9Dpnxw8EZNAY70rgiy54hzrSy8DpfNlhAH6A5Ifceb%2Be7jp2D0Uj7ykFluSxTU6cBbGjS3HoiIz7PnIo81%2FghfDiBbmt8MHnfCS%2FZlkACW9in6HYL30ilMHV90yHjtXBlolyhComV8LTruu1qiqGEyxUCEkau9FdByz41vRkpthEAh3TdbnR1%2Ba3Yxv3XhQ0vnpvJ5NTSn31y12pas%2BT5iT4G5llGiJTryzdm83S7SZAxQa3SoP3P%2BS4FaNZLbX6cFV56iYkPJUpBY2KSGFxzKT7ML%2BpjsEGOqUB%2FSBEQXTfe%2B1kxT8u0ySIEXCx2EITsYVoOBDaxlWjr1drND2nJ%2B%2BTKgn18TbYRgDlJy2wJeh6tEpEshuB4FpsAFV2J4RijjxiuwSrFMTmazfeh4ROBHliWGXGJikJN03dDZ5twXDWyemfbY%2B8stpNJh7INfdH7850QpjgMzWZ31M1VBnCvh9O9BHS1crjLO6kcSxLxSCdxbceWYVqsdEYuDRMjDmd&X-Amz-Signature=f32d742eb541027a14f38887067d8bd25d3ca56cced9b3f536a43d49f0b417dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BUPK5U3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEXwzGiHcu0M9K3EX7jitf2yNJJnsQjojB4cYLs3epMKAiA2kZMDExOl3fjamdSyvUBg9ptEpr2D7yrxdVmnc%2B%2BykiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEi5K17HHG8OI2w1KtwDNS48wRYQwLcuvVJA%2BbIr62Y6aOAf66r46YFNRVcHcrTTFsPOYPsslOJfTT5drGU%2BWPfPU4Pxw3hfH5bgmAwK06fb7fw328fnUUmx6UWM3KS1KfLS%2B0bMt5ruOsHo3tv6X8NqchOa2tWb1TaWYNUFqO2kguoJp65XmUFZUfdktFqKR6kDTDg9Un9fuQOHr%2FehblAZKxjljnzzk0MFtDJ3zKNh%2F8LjEMQdxlj6CKpAhzf31nGu4sQIoxQQ5JEjVsaZKSPJQUo%2BkhQDTZPyv8Hmhz2S9qXPVs0%2BLZEKa5IHsr3CgzVqKvFOvvHHra3Tkju8ycwUs3udR9oGwXjhtfHV6QXMVFpqNA0UIF%2Fdae9ocs%2BOXGY4Ahctn8dznmjCEqWEAS0Zgv%2FupCtTCpTRtsemWx9Q5RueJaANVl5Zw5aHOYNSRFFu4nR8iXu9O6vL7bq9F1yg%2F96puQZGs1WY%2FrpPzS92hwHMKsQrWnOzgETBQqD1Mzic0rjgIMJVA5Lfx%2BZ36d%2FHWvwc1swCTnRpbKgIkmSAscQADiz4fyn3o%2B5r5ESdq%2BqsfwI6hm6t%2FBBWl0L9rKO48V6eJjWmgvtVTQCAm%2Fwhze02XmynfkPWd2Rfh%2BzU4HF%2FyXNHaFlpgnEwkaqOwQY6pgHxqLKdTxmFh6ZY6OGkRcJM1PFhBm6AwtJF68dHELKhBHh8tjOfshK%2BUfxtriNVyP%2BXWbzSwNB9hVTyGH9ERT0KZCimuhFsIPftbA%2BefdkfXZBCwPm1OOxpGx%2FGnDShbPXQABCtggqmrq9ELVPpwz5mE%2BNb%2FlyNB1TalgTPCQz6CEtnFV%2F7eOyhakXa0CylM7OPWbYZ%2B0FjvBxvA0%2BEBZ4Oko%2FgwX9h&X-Amz-Signature=39a058f6e555f43621facf413980289b9f764c5b27d1c46fe06a1096bc356e15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSYSYIX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCID%2FqWEp0fmVndcRbP0ojAntd2XBJTUGY6DYmK7YgueAzAiBXkDL4nOT7ZWzfcA1WBiIh4yXVKy8ZYxJ%2BgQXjWVuRSCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdF7ai1UZvM%2BIV%2FA0KtwD85tJOy4vkqckd12B6Xv0JcEfGl4VqvLvxkaOejud1VYtO0Qo0fuKwwvYe9Ygpxnat7EUKv%2FBmR8IaBMUg%2FEHwOeYAQF97%2BijBQTsEUtl5aAHSrqXeshMGN8ZaJQQjchVOuU4bg%2BhtBl3D%2FUUg2gW%2Bjiz7TKK0maaBC4FeZ0o1fQqFG0W9e%2B98R5qhuECc2Qdm5qwPaGuAhftdwkPZhuopfpgz9DPiXC7%2F4frVUxleSiPJZ3E1QhPhppK9BLWIbAY9yF%2Bu8sfEH1VJOYS6G%2FkBGUR1LSDi2yysqjltskWewnquFOHvCyVE9KV3sCJw06JdTkx19O4RkjDVNHX9BL%2FsRnS5v2MMG2vipVhnY%2FjB0Hz6YGm8qd70l6OV1DZmC8gObg2G3Z74whQIX6wXuEeDmptQAAtsGaTEJCEJnsu30vEDsQymVn0uYmp0tg8otfptjoEfG%2FYgf2JFy56TBFTu1%2BCULqFyUZ1y4wo6LVyT%2BydCETFuKsyxd2erYpZExvrd20Yk5goMDmX9yU06ZR46dde0yZ2%2Bn2%2FAsRY1TJzKuOOEg4o2cy%2FvbRSI0mlInDSiAuW2wzTriF0tiHcYwM1dW8v5WOUmOf8LuqWcNKDB4XRZkS%2BD3Bjg%2BMgwjsw%2BamOwQY6pgHPrxqoGgBf8QoYw%2FLrpnZcQgV8bLk0G01nsX1vxJirbFZqM09FpORRMHZGEGpc8YuPbUO31QXj9NlsgtKLqWRLY6mJ7JZCyqyj%2Fz6wgqvONq3UlarDHEOLTcdYVKCkmcXQLV4l%2Fit7wzLaWQTkX6ts2dDKHrhslBH1%2B4r2IhjJAwhlBgbJznLUn7bQoy8UGuqHlsRxSxigsZOO8ZIlFPSUZ5nX7vR5&X-Amz-Signature=7c2ee0411bf8b9471b432a99438f81c11726c95b8772241d75930758f7707409&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFZOUJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkJRl62EOMb8gDwWnUJmyHRz5maKR5uD2tGftxPUDRbgIgRl58gKYcIYRN2mb7gTRe0eiZNMaSfd3KBUJ73w5%2BikkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8kZUTIa%2BbJHWh7CrcAw9ZWOYuLQ9lKFvsIbOVE%2FYW74FkMz1fFRridIGELTAtWOA%2B1pF1i9nm4QCgG8g71Qw8h0eKwRiyXmjDoZnTK2Om38tv3v35BJadvN6KcrYsK2aELC%2BDtOBUHf71T83lm5ymOLKszrzHOQJii46pZPmtrcm79HymORfTrwBS5gmAJ21tCjz2NpmvlSnRL59cg%2BVdlV5WLTPewU5bhIpjdTFmefja1lSJ2YF0aDzWwicP8MIAkPq8EO3tbUlwK%2FGWBwez4Nk3OcpbPfXc1vNGSMoABdAZISMSZfBQAeTBg4GHrnSkk2x70PNQmj%2Fb0CDha5niSvaz%2FEfWUcsY4Mv8ncdT%2Fp2t2BtSLx5T9Dpnxw8EZNAY70rgiy54hzrSy8DpfNlhAH6A5Ifceb%2Be7jp2D0Uj7ykFluSxTU6cBbGjS3HoiIz7PnIo81%2FghfDiBbmt8MHnfCS%2FZlkACW9in6HYL30ilMHV90yHjtXBlolyhComV8LTruu1qiqGEyxUCEkau9FdByz41vRkpthEAh3TdbnR1%2Ba3Yxv3XhQ0vnpvJ5NTSn31y12pas%2BT5iT4G5llGiJTryzdm83S7SZAxQa3SoP3P%2BS4FaNZLbX6cFV56iYkPJUpBY2KSGFxzKT7ML%2BpjsEGOqUB%2FSBEQXTfe%2B1kxT8u0ySIEXCx2EITsYVoOBDaxlWjr1drND2nJ%2B%2BTKgn18TbYRgDlJy2wJeh6tEpEshuB4FpsAFV2J4RijjxiuwSrFMTmazfeh4ROBHliWGXGJikJN03dDZ5twXDWyemfbY%2B8stpNJh7INfdH7850QpjgMzWZ31M1VBnCvh9O9BHS1crjLO6kcSxLxSCdxbceWYVqsdEYuDRMjDmd&X-Amz-Signature=a84c919ace0d2ec5b746d328c7aa70f5855a944163597b9137b034b0e27450a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
