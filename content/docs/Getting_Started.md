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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJCIPEF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAOkJzhTNdGw0fTWMDjJ9YueVPGdAQ6iQe%2BvnoVTpNE6AiEAzcoHWIo9NC9MYUCeER5Nh14i8XtEeer%2FKwUzHODfZLQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL8vgpqpPH5CkcAsyrcA0CR9JJKRum6HL0XEzrizvWOnILvwTS5c5tw8RJviYi7KyAdQ%2BdvaxhmNOhE36VxbNjWdPnyNKn%2BabCVjl%2FpcEuaOn5KiGygzMP%2F9LDNOG%2FyaiDYacqDT39yJjLjP%2FWrdv%2FfZwHBADclKloEMCI%2F8lgVqrUslATqdSeiev%2BIeup5vgvOrKkMXHEGFtLTzgSwlxK%2B1zbR68JxAc0fpuFkd62cz2QHsqTA25zhO6MEAaqdY4CQ30JG%2F9lyl9do8tsE92FKMDSy5odjV7V%2FCqfBciwZDp8qzGtwqG24kh5eRTTm1Jfp4D1Cx5W0Nq%2FFr8QTOOUHsa5pliXBJpljBygNa6Hh9qT0a2yRqHIJfsvuiQrryecR9m%2FmXyzY7%2FZ0pN6QDCQpiyZ%2BlIhgzy2EoR8Kg8wbtSFLA9M6GZd7fhfBJL06ie%2BJdfI8rsoDp8x%2F3ULS9AlbJQYytgPlPml7is0HcleXGvhBBPpZtG%2BXdUBdNaUkf4ThxjBjxDphAlWTtIbSwPRf6MCNvBLoxFhpJmT7G3vUYUxlcYJT%2B9VNzmSFWMOc5hUgTFlpN3yt2mfLZRvlZS5jApJfiVTmQ79%2FEiYnLRQsEf3tV9rIiacG3XsqQOg987Otb4mgjQ4XtVcWMNPVnMAGOqUBhl7dIBH1SfFhH9rPmOJ%2FBWgYoM%2B383gDxSwHfTaOcgHeS63e12ij20NwCEeOh3XS7f0ivY5NP0L%2F5abmjsjQ3Ghkg0yhBK05%2FxW86Dypr8NNoEzW4U4kGrueisrO2uwklj3zU%2FOGVELqveEWpAk%2FpkrPIFmMg0l2UrJbt%2FB9XqCIsofcAwLUIUoVYCU1t8xvlS3byNOqjT%2FqUBd%2Fmryk5FaOSpWY&X-Amz-Signature=1f570f54018999586629d27f4b8e35cfa39c2f372ccb9bc31b5ec630da7deecc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJCIPEF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAOkJzhTNdGw0fTWMDjJ9YueVPGdAQ6iQe%2BvnoVTpNE6AiEAzcoHWIo9NC9MYUCeER5Nh14i8XtEeer%2FKwUzHODfZLQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL8vgpqpPH5CkcAsyrcA0CR9JJKRum6HL0XEzrizvWOnILvwTS5c5tw8RJviYi7KyAdQ%2BdvaxhmNOhE36VxbNjWdPnyNKn%2BabCVjl%2FpcEuaOn5KiGygzMP%2F9LDNOG%2FyaiDYacqDT39yJjLjP%2FWrdv%2FfZwHBADclKloEMCI%2F8lgVqrUslATqdSeiev%2BIeup5vgvOrKkMXHEGFtLTzgSwlxK%2B1zbR68JxAc0fpuFkd62cz2QHsqTA25zhO6MEAaqdY4CQ30JG%2F9lyl9do8tsE92FKMDSy5odjV7V%2FCqfBciwZDp8qzGtwqG24kh5eRTTm1Jfp4D1Cx5W0Nq%2FFr8QTOOUHsa5pliXBJpljBygNa6Hh9qT0a2yRqHIJfsvuiQrryecR9m%2FmXyzY7%2FZ0pN6QDCQpiyZ%2BlIhgzy2EoR8Kg8wbtSFLA9M6GZd7fhfBJL06ie%2BJdfI8rsoDp8x%2F3ULS9AlbJQYytgPlPml7is0HcleXGvhBBPpZtG%2BXdUBdNaUkf4ThxjBjxDphAlWTtIbSwPRf6MCNvBLoxFhpJmT7G3vUYUxlcYJT%2B9VNzmSFWMOc5hUgTFlpN3yt2mfLZRvlZS5jApJfiVTmQ79%2FEiYnLRQsEf3tV9rIiacG3XsqQOg987Otb4mgjQ4XtVcWMNPVnMAGOqUBhl7dIBH1SfFhH9rPmOJ%2FBWgYoM%2B383gDxSwHfTaOcgHeS63e12ij20NwCEeOh3XS7f0ivY5NP0L%2F5abmjsjQ3Ghkg0yhBK05%2FxW86Dypr8NNoEzW4U4kGrueisrO2uwklj3zU%2FOGVELqveEWpAk%2FpkrPIFmMg0l2UrJbt%2FB9XqCIsofcAwLUIUoVYCU1t8xvlS3byNOqjT%2FqUBd%2Fmryk5FaOSpWY&X-Amz-Signature=5dc1924403d7d8a504c530a2efe476455c5618e2b03e1479f0ca1767fc01fc16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDCDA5X%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCjd4m%2BXi6QZeareBagJFpLp0OPBajHPIKPjI43rNRThgIgFTAMgjc4r3chbRQ%2B6SNQQZKYtbWY%2FKZ9RR%2Bb2fcw750qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbdXpMxtGdwileJuSrcA%2BNCkMcCjU37J5BtYO9H1fUW%2F9P6UDTWL0zJobpSw8GU39M5eiyls%2F9B%2FoUBWEiO8Rx9XEonwoSqRdOUViqif4ubb5Nzbz4Tl9Cmp3VzRkh836yYbGY5KHdFz4%2B1UTyt3GhFce%2FPomfVjaWbNXnXshBpTd1ZhgJEauwfQRZKJSgX3XPP3iLS5Jxptfxahz4EUPyJdtBRC7czzJjnGF6a3vQ7AaSsAUzOqnUljm9j0kLo06G7VmQhai16dJB%2F1QaYmf1q8iXjsoSquZWRBRgSt9opZyHmbxINZ80j%2BCMv8GLCcKeoqUB6mzBGovO1c%2BYWGxROio4mJVQ9tgS7KF5bS9vhY%2B%2Fn90DeZ091g5Y91LJeSjrjfWmlMfyndS5E%2F53iZmZwyd8N0cNDq3OWY9RQyKLuQCxbd2ZFPvuRhVjKk6gHj66iDDZPxG4JTS0gZxGMs3RKTMnUJ7L6oML1Q8GgJ1c3Cx%2BKEoMgJAEin1GRS7Z037pxdLsj6DxgLUktS97ueOYoptlViHVOKigc8iq%2B8R0EOzGs8HxjtTPvd6egPfz7hAYFoiIodLAABvyr2iDkXjAPruqvasZ3YNYlNy4PlCItHejhFYfq8jY%2B1S5NfoANK%2FKWg8LRot55PsaCMKzVnMAGOqUBw8EfKZ7HuVtDgcSasZz9y4L2FhKRUdYku4yXMFOUopJ%2BbCnPbaU6ieExVwFKQevC8%2Fx9zF82qre1Pl3KcwofCU2JiDpaZ7O%2B80JiNQXOuinC29ZZAWo3TXWD%2BelcQChiv8lU3R2CD76ojSO7w7WB6BqQsOV4UU6y%2F8o3t1ZQF%2BH4zSLL313%2FLEnPCE2X%2FBtbyq4BPA3z9%2BLb%2BE57jpcwqloMf7Gq&X-Amz-Signature=9d450a6659da8ebfe0cab6353f543d9b277b455cc4c9a92a3bec9b3fad727e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75QJ56E%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIFp8%2BFYkEF%2FahWFIXDMqEYt5M5nNl%2BDugZ1doTmKMmDRAiB%2BzU2MZ2CgScZWE4MuczVcFPMFzKC2EiLKaPQ2iOGUKSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrKTOfHEqVZnvvlSAKtwDOzjTvdgOqqf1RQJMG4QFs5WD4vC97AzC0u3Zmwf82xMQcNFsR%2Fr7KIZsK8pkwZHg5PlFBuPnjj2QaMBJLrsKDwGWf9myBZ%2BFHTLU%2FU5wYfEV75rfNvSY2FW8pNxeBy8eOEsoywyqAlP8XbdvqXfzPfM8jsYHZ0XAaLkxG5Buv21uYEapwIXmnC%2BQ96P7wjpDamShxx8jVCUYN5HDQHRoZOxdvwm3Lk32LlQOx1fMXA7uUpNQkIOa4m1Iaz0udALvxeW%2FoS2csOJF7xxiHpZdzphzvqsKckAKUAHVloblcQFWB8ij0Sfm25UP21uPvDW5SEI1HpgyCYT6Zjo2x9bwSTv%2FY8o4R7H%2FbHKn%2BBHUXjvZxIfGcwcJYK6PhwaqYxWcucBijLIeUjYsdWP3g8zmEFSqFEcFp%2B0zZaoFP0B9Jj8%2F6JtgMcr%2Fh%2Fk%2Fi8Z5xiUosN6rMDCUf9gy%2FpU6%2BbNhOwd5PD5wgyuA38ZWl09AqFVuWNgQrMSgsMJXAeYRZwufP5ioE5Q1CuKQCw8tSIMzfTteHQReDOVj33RxALaVgPgDZNawSMNEoHqqNCJnzMahzY6hC7iNkvdVMjQ5kstQsBWfU7eLmm7SlA1NtcYJAG5DTMqGtJ1VrJlFlMUwstWcwAY6pgGY9bSC5LsLzkSoEKWdY%2BDXpo1IEVMs5pyyOin%2Bvgc5yQT1OlmjboPsD13%2BKR0Zph6hT27vvPdVBGgxioHwem0qUh36%2FBsLWRcQu3hdpARDojX4uIzUfhstl9X6Xj6ndCqZI3y04W7rW5uH3r%2BvYbMJhs3GT2gmALnS15EHg4eq4hVXg8lAYEXNwNTuLtnheKWIMox3scrvPc9EjO4i05ER4mMQLq9R&X-Amz-Signature=76a8d8905a5c2bb5903821cf1cae6662ede20f5e4a5b015d6ec711e9c59c872a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJCIPEF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAOkJzhTNdGw0fTWMDjJ9YueVPGdAQ6iQe%2BvnoVTpNE6AiEAzcoHWIo9NC9MYUCeER5Nh14i8XtEeer%2FKwUzHODfZLQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL8vgpqpPH5CkcAsyrcA0CR9JJKRum6HL0XEzrizvWOnILvwTS5c5tw8RJviYi7KyAdQ%2BdvaxhmNOhE36VxbNjWdPnyNKn%2BabCVjl%2FpcEuaOn5KiGygzMP%2F9LDNOG%2FyaiDYacqDT39yJjLjP%2FWrdv%2FfZwHBADclKloEMCI%2F8lgVqrUslATqdSeiev%2BIeup5vgvOrKkMXHEGFtLTzgSwlxK%2B1zbR68JxAc0fpuFkd62cz2QHsqTA25zhO6MEAaqdY4CQ30JG%2F9lyl9do8tsE92FKMDSy5odjV7V%2FCqfBciwZDp8qzGtwqG24kh5eRTTm1Jfp4D1Cx5W0Nq%2FFr8QTOOUHsa5pliXBJpljBygNa6Hh9qT0a2yRqHIJfsvuiQrryecR9m%2FmXyzY7%2FZ0pN6QDCQpiyZ%2BlIhgzy2EoR8Kg8wbtSFLA9M6GZd7fhfBJL06ie%2BJdfI8rsoDp8x%2F3ULS9AlbJQYytgPlPml7is0HcleXGvhBBPpZtG%2BXdUBdNaUkf4ThxjBjxDphAlWTtIbSwPRf6MCNvBLoxFhpJmT7G3vUYUxlcYJT%2B9VNzmSFWMOc5hUgTFlpN3yt2mfLZRvlZS5jApJfiVTmQ79%2FEiYnLRQsEf3tV9rIiacG3XsqQOg987Otb4mgjQ4XtVcWMNPVnMAGOqUBhl7dIBH1SfFhH9rPmOJ%2FBWgYoM%2B383gDxSwHfTaOcgHeS63e12ij20NwCEeOh3XS7f0ivY5NP0L%2F5abmjsjQ3Ghkg0yhBK05%2FxW86Dypr8NNoEzW4U4kGrueisrO2uwklj3zU%2FOGVELqveEWpAk%2FpkrPIFmMg0l2UrJbt%2FB9XqCIsofcAwLUIUoVYCU1t8xvlS3byNOqjT%2FqUBd%2Fmryk5FaOSpWY&X-Amz-Signature=a815f503272f6a981a5f8e1a70603eee315c4666bb84083d22175887673d9b38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
