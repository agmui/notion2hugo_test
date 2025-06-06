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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB4YY4E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fm1ki1mAV38A6oiU%2Bevb1PoZfkPN2ApSpkkFk3up0tAiEA8u%2Ffb76ZYBV7yTwc4S47kXAB7BZvblLF5KPdhg9nBwMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAGEzsMk1YGkWJ2r9CrcA8negGYLVmDV%2BRfWbdh2RoQEGnQsKeP%2FXGpXiUbD2IsRlDuYrg8O5cUcIUW%2Bjpm0kVR2hM%2FtV00AjjxuTWXT6ojwx%2FD%2FUovWmI2ElT6DhEugbAjwr7jzN0rDzPkgHrReG2Am0SgcSAL00qjiMf47j2aiFHwVs3oq6jqZNa43GdIGtoOfLEhKLxL5mRB0o26M%2FU6PYm0SSGqzih51S0b1vqqAPvvSQQgsQqTyxeJATzjk5Fd21avJQF1Y5CluPkUPkHN2PdMlZoGQAcUqgV9ZEWajiLEBHaROsVwyV%2FquFLtnHpvZb%2BCJLczJtZ4M%2FW%2B0jeSHe0I7SyY6NHzKLDv4576tyfdafzgxI7%2Fu4W2im89e55GgLQZBoF3mjeq4C3Ibn%2Fjwijv1rNISo2XKeFMFvJnWJN5V8RnLvvSeqx3DTgm2PAeLU6oWCMHSv8JvgUXjmPrAQacC%2BWwdg0qXbEBaDK6CLSuPdu9CBEBGdJmySQ6YtcDHzlH8JR9o0W1Fmv6bTv2%2FJ88s1GgUBMV4CLDKsQXNOMoF8Ea1TmXXjJz%2BySoUYzJzSCBvvTJUjWAcfiyBrkyNEYQeqLA%2FPVSYlHqjYkHn0gjY4e%2BNOWJBs%2FSzr8LX4ZQqir6jxTZXLN1sMLuGi8IGOqUBLdGJFr2JOpipc1P6gIFu7SsOni5bZb9x5bGWe29e0qST8wA%2BngRiNg6prt1M%2FaReLJYUJCktu5MC8zwDJnDR1Y0iFZousGW7wlboDhJOPnQSMsLFCeDnyQbaQ9zlP9JeUsA8bHl0duWWZ5qv4fWUldcPBbiX%2Fa2x%2BCEnXkLsSlGBHLg%2B2iKAQDd8jJClzdE0J9qs%2FfIUmMl%2BbcEyAWtrutSWSDZt&X-Amz-Signature=70d75a5a6afe8697df9d772a8503a7dfaf0ee9e25f9c1d7645587d9470d264ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB4YY4E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fm1ki1mAV38A6oiU%2Bevb1PoZfkPN2ApSpkkFk3up0tAiEA8u%2Ffb76ZYBV7yTwc4S47kXAB7BZvblLF5KPdhg9nBwMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAGEzsMk1YGkWJ2r9CrcA8negGYLVmDV%2BRfWbdh2RoQEGnQsKeP%2FXGpXiUbD2IsRlDuYrg8O5cUcIUW%2Bjpm0kVR2hM%2FtV00AjjxuTWXT6ojwx%2FD%2FUovWmI2ElT6DhEugbAjwr7jzN0rDzPkgHrReG2Am0SgcSAL00qjiMf47j2aiFHwVs3oq6jqZNa43GdIGtoOfLEhKLxL5mRB0o26M%2FU6PYm0SSGqzih51S0b1vqqAPvvSQQgsQqTyxeJATzjk5Fd21avJQF1Y5CluPkUPkHN2PdMlZoGQAcUqgV9ZEWajiLEBHaROsVwyV%2FquFLtnHpvZb%2BCJLczJtZ4M%2FW%2B0jeSHe0I7SyY6NHzKLDv4576tyfdafzgxI7%2Fu4W2im89e55GgLQZBoF3mjeq4C3Ibn%2Fjwijv1rNISo2XKeFMFvJnWJN5V8RnLvvSeqx3DTgm2PAeLU6oWCMHSv8JvgUXjmPrAQacC%2BWwdg0qXbEBaDK6CLSuPdu9CBEBGdJmySQ6YtcDHzlH8JR9o0W1Fmv6bTv2%2FJ88s1GgUBMV4CLDKsQXNOMoF8Ea1TmXXjJz%2BySoUYzJzSCBvvTJUjWAcfiyBrkyNEYQeqLA%2FPVSYlHqjYkHn0gjY4e%2BNOWJBs%2FSzr8LX4ZQqir6jxTZXLN1sMLuGi8IGOqUBLdGJFr2JOpipc1P6gIFu7SsOni5bZb9x5bGWe29e0qST8wA%2BngRiNg6prt1M%2FaReLJYUJCktu5MC8zwDJnDR1Y0iFZousGW7wlboDhJOPnQSMsLFCeDnyQbaQ9zlP9JeUsA8bHl0duWWZ5qv4fWUldcPBbiX%2Fa2x%2BCEnXkLsSlGBHLg%2B2iKAQDd8jJClzdE0J9qs%2FfIUmMl%2BbcEyAWtrutSWSDZt&X-Amz-Signature=66ff5cde7ba3d3db25564f2eedfe201037d7d6b61c05b06786def449607dc36d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB4YY4E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fm1ki1mAV38A6oiU%2Bevb1PoZfkPN2ApSpkkFk3up0tAiEA8u%2Ffb76ZYBV7yTwc4S47kXAB7BZvblLF5KPdhg9nBwMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAGEzsMk1YGkWJ2r9CrcA8negGYLVmDV%2BRfWbdh2RoQEGnQsKeP%2FXGpXiUbD2IsRlDuYrg8O5cUcIUW%2Bjpm0kVR2hM%2FtV00AjjxuTWXT6ojwx%2FD%2FUovWmI2ElT6DhEugbAjwr7jzN0rDzPkgHrReG2Am0SgcSAL00qjiMf47j2aiFHwVs3oq6jqZNa43GdIGtoOfLEhKLxL5mRB0o26M%2FU6PYm0SSGqzih51S0b1vqqAPvvSQQgsQqTyxeJATzjk5Fd21avJQF1Y5CluPkUPkHN2PdMlZoGQAcUqgV9ZEWajiLEBHaROsVwyV%2FquFLtnHpvZb%2BCJLczJtZ4M%2FW%2B0jeSHe0I7SyY6NHzKLDv4576tyfdafzgxI7%2Fu4W2im89e55GgLQZBoF3mjeq4C3Ibn%2Fjwijv1rNISo2XKeFMFvJnWJN5V8RnLvvSeqx3DTgm2PAeLU6oWCMHSv8JvgUXjmPrAQacC%2BWwdg0qXbEBaDK6CLSuPdu9CBEBGdJmySQ6YtcDHzlH8JR9o0W1Fmv6bTv2%2FJ88s1GgUBMV4CLDKsQXNOMoF8Ea1TmXXjJz%2BySoUYzJzSCBvvTJUjWAcfiyBrkyNEYQeqLA%2FPVSYlHqjYkHn0gjY4e%2BNOWJBs%2FSzr8LX4ZQqir6jxTZXLN1sMLuGi8IGOqUBLdGJFr2JOpipc1P6gIFu7SsOni5bZb9x5bGWe29e0qST8wA%2BngRiNg6prt1M%2FaReLJYUJCktu5MC8zwDJnDR1Y0iFZousGW7wlboDhJOPnQSMsLFCeDnyQbaQ9zlP9JeUsA8bHl0duWWZ5qv4fWUldcPBbiX%2Fa2x%2BCEnXkLsSlGBHLg%2B2iKAQDd8jJClzdE0J9qs%2FfIUmMl%2BbcEyAWtrutSWSDZt&X-Amz-Signature=8537e65f1cae522787e6489ac9a12d505499925584d505cf8a4a8c065ca82682&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GZN632%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZOCkV7RI7Va7mloIErBtR7GU2Z5Bu2M7DJCietGYzkAiBAoHktEZ5CttHZSTu%2FV9sZ0zzHeSFatOul5RS8SdB7KSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMDwr3FUMze9d0ozHBKtwDVGoDDLinHELqpbt4AYO4TSAAUXDkHV%2B18AFhXoRnbA2sRodFWuqwYyiEQ0vVEf5clgRCw9b5ixGDQAncwsyU7%2F7h%2BK5kDSQkmzrF71Fv7fhGIXqBkaX%2B4SHOldvp4Swt%2FtvUsU%2Fp9E81Nk5LFhJkyVsIAKAquEo%2FLGB%2BYtyzp2I5PtWVjoBn4a254uL%2BsnI0e30zKku9SOY2NLyFrbcd%2Fd2u59g25AGyCxChXpFos7NfvnsTNwFQEHnXNqRVop7Ztn5kw5e%2BWjp0LUqUtcqcjbrEUZwMMYXmiuJcwxbRezHaA%2BuH4dQaJBF2jXVWJHUlG7T3K4VdmDDmIwxqLlJSNoKXZLBaZQ%2FZAkTb97Zt30J9GaPcb7A%2Fm4JJRurM0M7mzuPO%2B9RXbkCfAXoexR7WhfvoGjuabeZ1wlXrcmsqfqDN9NuDSvMAzdPH%2BUmauZctSS67CnJtd6H2%2FjXnm4OkNy5hmqegoSpeuTjDehPmhnLX7YvqfBix%2BRvdh0mypQJD%2BUTTH%2F%2B3V24dPmMpXdRsqjVyy8pzk9Io0sGglA1%2FCgGV9ylvW2Kos%2FAP%2FDuccsi2KCGnV8O9QhQ5BJRox54vSKbDGMjsxRT3UOztVaARkam%2FSML4KlYlG3TEVQkw0ZuLwgY6pgFcJXiaShGH09DRVQjJayi4DMD0E7O3HKq%2FZGVrLyh5lW2WxFqFRL08v2irITb5oI4xHZkdIVSKdabIHdhDDi6mpkC%2FzsKqG1x7mx4dcyDpuRPnH3u9KOwA47%2FhzuHwRWttuwQ9z9xPOjPcuOw8i2rI3e3RMjPnWcIiOg2rB277kevhvq7RI537mvcYEu66SVXOOitG7fEm8eQpR4SSmrYttC%2BzpmXV&X-Amz-Signature=c4f2894d23cd5397ceb15ca506177a6dbc89c1339fad947586714f33fe2d61c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMSI2BV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMaSKtZBUEFhnPxvmYLwRDVAFYgLw6wllqeQQApFm0AiALxzUgbtn94pYtf26HLRumayijf2JS2VDrvIVDsew6lyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM9UFtMOVoRSzS%2BTNOKtwDt4t0sWnGrUcPgIe%2Ff%2Bn8jNwFKNFzy1o3d7FWKgun%2F01CI%2B8Rl6QdsvMDhzm1XpCnNHwTYtiZCH1UY%2F49K9tr%2BW06hjNZ6tnQYAIfmYHcQmYBmW77eVOookRzj4eMig2GGZCibRXicd5sj2StaNOO7LuIeIp0%2FIWeTsp5gr%2BMSBJRx4t37mKqfnL4FgKZgnW6uSxlQll5tHaqLzbOEPKsT1YYD%2BukoBzS6ijEVlDO2Ty5EQLpAl%2FUTvpoIEAeQcLrHGBp9Fey2k485YX8KUMNoijsIGlcJg44OaI5mbRIeQfZ5aiiKlqev%2B9b97jMUkvyF1r49u8X8CF9G1GpkUAcYiQCCAiNVHG7UohoQeQP%2Fby6hEIj2QYYeHW6Tw0hmapfQMippbfypbMEj195XZV5J0YgDLCXreYjwxixisi7AwXwzGU65DNXjOt3X4rw3x%2B2HVBtq05i9trwKBSwMEeouxfeY7P6fuGsn7njj%2BN2P4zCfi2vm%2FaxZdzAWGf3XGbHqUtkSbQm9WbOhjA%2BXaWyZS9zZdbgote612vgBiAVzOTtIWuamb54oH%2F9jam6%2FTHU2QfV1mE14Bs%2B4m6g88gsAKQ9j6JpGDAC1SQUj9nNup2ei3kn9z6C6xVwtgUwuoaLwgY6pgHvq14W5BEkPNiuu%2BfU74qHytTgTWII5SGOLjMD8rdlN%2BJaTEOPenGC1GVGoGuUoqNH7mAVs2PW3dDZgrmTOslutrS2zDh13lMpLr%2BCtxMcT1VsP4fmt7u74htrNMrAtRKHz7w8TyCvErlYtINc19YdKi%2F2x0vCu3hsMiaP6xuX0oQkBsoeNA%2BCXGa%2FPf3B4xHE%2BhXrt4d5JbjIzLbeqm1aLVaI9ImH&X-Amz-Signature=b6b975dcf92a5f8d6b8b5babbdbea9c29b018278f741acaf97461640ca6608de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB4YY4E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fm1ki1mAV38A6oiU%2Bevb1PoZfkPN2ApSpkkFk3up0tAiEA8u%2Ffb76ZYBV7yTwc4S47kXAB7BZvblLF5KPdhg9nBwMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAGEzsMk1YGkWJ2r9CrcA8negGYLVmDV%2BRfWbdh2RoQEGnQsKeP%2FXGpXiUbD2IsRlDuYrg8O5cUcIUW%2Bjpm0kVR2hM%2FtV00AjjxuTWXT6ojwx%2FD%2FUovWmI2ElT6DhEugbAjwr7jzN0rDzPkgHrReG2Am0SgcSAL00qjiMf47j2aiFHwVs3oq6jqZNa43GdIGtoOfLEhKLxL5mRB0o26M%2FU6PYm0SSGqzih51S0b1vqqAPvvSQQgsQqTyxeJATzjk5Fd21avJQF1Y5CluPkUPkHN2PdMlZoGQAcUqgV9ZEWajiLEBHaROsVwyV%2FquFLtnHpvZb%2BCJLczJtZ4M%2FW%2B0jeSHe0I7SyY6NHzKLDv4576tyfdafzgxI7%2Fu4W2im89e55GgLQZBoF3mjeq4C3Ibn%2Fjwijv1rNISo2XKeFMFvJnWJN5V8RnLvvSeqx3DTgm2PAeLU6oWCMHSv8JvgUXjmPrAQacC%2BWwdg0qXbEBaDK6CLSuPdu9CBEBGdJmySQ6YtcDHzlH8JR9o0W1Fmv6bTv2%2FJ88s1GgUBMV4CLDKsQXNOMoF8Ea1TmXXjJz%2BySoUYzJzSCBvvTJUjWAcfiyBrkyNEYQeqLA%2FPVSYlHqjYkHn0gjY4e%2BNOWJBs%2FSzr8LX4ZQqir6jxTZXLN1sMLuGi8IGOqUBLdGJFr2JOpipc1P6gIFu7SsOni5bZb9x5bGWe29e0qST8wA%2BngRiNg6prt1M%2FaReLJYUJCktu5MC8zwDJnDR1Y0iFZousGW7wlboDhJOPnQSMsLFCeDnyQbaQ9zlP9JeUsA8bHl0duWWZ5qv4fWUldcPBbiX%2Fa2x%2BCEnXkLsSlGBHLg%2B2iKAQDd8jJClzdE0J9qs%2FfIUmMl%2BbcEyAWtrutSWSDZt&X-Amz-Signature=b46931d18029410a559009f755fe7ae4f414e05794b512466f8eee47247e8405&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
