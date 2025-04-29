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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SOJNOI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx48obx0FfWuP458XCSqNFz%2Fgk%2BUaFxZc5EtKJZHLxzAiBvYdOTl%2B%2BAOrNP3DhQUNBUlmEQ2VWaDFEvsK4SaMBtViqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPd4XWSWuqP%2FAuV1HKtwDID631yFO%2BCZD4pBKDp6kjT9Stfe6SV%2FLxwomkmamtY6gwCqQSDRofEJIdXxUfFK1FiwIOmQABoO4vk74ZX5s0Pq%2BZdAU0oc4bUxbMdCIsjvjrAbzhvYf1eaojjkCnS%2FzC2fH6IuiiOwakyITtV5Q4zHdFOGn%2BBPP2YK6oHYTSHE4q38jumYisloinXjsXVb8rHJ5bCs3RpCZQLK2NLTLc1XiIj4RwIZwimRGmscqiQ%2FLGYptNDue6WKuA%2B2GwpCrcHo0PAemVkJPsFZhk%2FTY5agDJyy1coT9N3TQMY%2BRKobn%2BjLrDaajbemai%2F2HMVWaN7zuLOlkSfQ5oSsuCLMwcDk2hh6b0pNLp%2F81owU2gdJ38sEeZ2QzZVte50h071fWlt7YfzGQWW7DwXpNpA93I%2Bz0AY0emTowklXRSjP0grLWBGM9%2BEoAh4kX5I4f2No2k85sECaFJQbpI117bECeemmLNDHtlfB0AcjNDd5LNJaB7%2FwUft7t1XfB5zsUndVXte52kzBnFs%2F9ywbSiC%2F%2FKi74%2FCShvDkIoetbz4pf%2BBvUkhed4gKkkHKILUJBLAeErw%2F9g3dU70%2Fc5npBzmdYRGKi3yEWtzjd7log0mm87jXIBMOUrFm30PRkulEw95PEwAY6pgFfQlojzRjDSTeXlZp0il3CGyj9bMe3Qid0V2kfGtniRKZ2U4%2BxalpHqIPxA0XGx%2B2Z2gSiw69uOORhcpISquZ3bwWJR8ulX8H5%2FcoWY19%2FFLKuV6uEFmx5G8vAZ7TeDQOiI%2BejyuWrfa3IPxrKdVXKoYmXgB5WMoM6%2BHfHFGhQVZsfHXEbTdVc9q5ev2L7vOpKz%2BqJWRlSeNZR%2FPklshNJCvtpExMu&X-Amz-Signature=7c449460ef3a92b3067882846dccc2b6d5b6203080cfff6b14d77ad793e95753&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SOJNOI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx48obx0FfWuP458XCSqNFz%2Fgk%2BUaFxZc5EtKJZHLxzAiBvYdOTl%2B%2BAOrNP3DhQUNBUlmEQ2VWaDFEvsK4SaMBtViqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPd4XWSWuqP%2FAuV1HKtwDID631yFO%2BCZD4pBKDp6kjT9Stfe6SV%2FLxwomkmamtY6gwCqQSDRofEJIdXxUfFK1FiwIOmQABoO4vk74ZX5s0Pq%2BZdAU0oc4bUxbMdCIsjvjrAbzhvYf1eaojjkCnS%2FzC2fH6IuiiOwakyITtV5Q4zHdFOGn%2BBPP2YK6oHYTSHE4q38jumYisloinXjsXVb8rHJ5bCs3RpCZQLK2NLTLc1XiIj4RwIZwimRGmscqiQ%2FLGYptNDue6WKuA%2B2GwpCrcHo0PAemVkJPsFZhk%2FTY5agDJyy1coT9N3TQMY%2BRKobn%2BjLrDaajbemai%2F2HMVWaN7zuLOlkSfQ5oSsuCLMwcDk2hh6b0pNLp%2F81owU2gdJ38sEeZ2QzZVte50h071fWlt7YfzGQWW7DwXpNpA93I%2Bz0AY0emTowklXRSjP0grLWBGM9%2BEoAh4kX5I4f2No2k85sECaFJQbpI117bECeemmLNDHtlfB0AcjNDd5LNJaB7%2FwUft7t1XfB5zsUndVXte52kzBnFs%2F9ywbSiC%2F%2FKi74%2FCShvDkIoetbz4pf%2BBvUkhed4gKkkHKILUJBLAeErw%2F9g3dU70%2Fc5npBzmdYRGKi3yEWtzjd7log0mm87jXIBMOUrFm30PRkulEw95PEwAY6pgFfQlojzRjDSTeXlZp0il3CGyj9bMe3Qid0V2kfGtniRKZ2U4%2BxalpHqIPxA0XGx%2B2Z2gSiw69uOORhcpISquZ3bwWJR8ulX8H5%2FcoWY19%2FFLKuV6uEFmx5G8vAZ7TeDQOiI%2BejyuWrfa3IPxrKdVXKoYmXgB5WMoM6%2BHfHFGhQVZsfHXEbTdVc9q5ev2L7vOpKz%2BqJWRlSeNZR%2FPklshNJCvtpExMu&X-Amz-Signature=f91471c1ff027d378453f65e062f21c8503639aafefc3e2c219b985016d8c1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGLKVRI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHO8kO1nJ44y48nyfj1CRNtOczTGOx9%2B3RJfXuhYj9YAiEAqNEVxJtu3TNHBjLqVScBn9LKJiBd%2B6ik0MDYohL4DDwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjzXZ3ULRCGTU2qTSrcAwIroImn6nvWZOpI4cssnT8uWoDQUNRmyKdhLVuyVomcNKIFBMUWU8LHJMMJvEnBRfMpSdKSfrEUOmjQnJIvJIzqrNYGlh7Tqi52gy%2FDEorvpnnb%2Fh%2BJSl7g9hA9fIFIB%2BYxmPc1%2FIFlLYFD1PjrxALn4boGxlgLuDl6x0r%2FCbgdE82wvgcQyDqK83iHWBeBdKDNJWUhdIjR%2FVhsZutFyMgTGQNvAhPZUURGAfp5ekbN439hn9etvrotG2ApVsrt5zKTI95IfwOTGAwdwXKUCf4xx0azyDA%2Bj3B1Nmj4aevuW9CRxy9VZeoZgCKDn7uubsw46q1FPOmt4RLFZ4zoBhJ7qaW5dJqT3wc%2Bb8tEGVmW2TiRNj2w8EoSiBdE%2BpEjJyoBuMIhr2H7wkpZdfA34f5sW5vp%2FJVjGTRaDCvogHzQCApDeub0mZ54P9zVyx7ZW7gVBJS7TuobNEMpTb3JKcU2L9yg2%2F7lom8YgfWCVETA4ZkZlvYdOBLk7jxa4h%2FsY7CA%2Bq3oMBftZlqsqn4%2BUYfUL8e%2BII%2Fi2OinME%2FVsMI9ecX3fGDGqe0ju6v7HO7ZDZS9NHsEKccLN1r8g%2BtCpIaXyxoBVvRrzDPI2Iw5NytkJsT2g1fUQVJa2ZUcMKeUxMAGOqUBy0iGmLLw24oVb2FxpeOU23WLDLufTTv425nSHNRG3YLxykG05hKVWP2LSJOBZMZJAw3PjJKfRtWSdqD43V0aqNj86sN5pPIcOK%2F5ezujF2%2FuZVhtAl9t85ErtcPw1mmmFPPS0cooBbHBJek9DGPiHXszcZHF4p2v8TGf3YrelCK8eCJihr2uJzWINdq43TiS1KoewU9iWbUAPV1W%2Bbiwx%2FbfDB2Q&X-Amz-Signature=865bf90307c128569a011b0d0e5d6251f771c2b96beb1e9e211bed39554984bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R77RUTQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE86b2eK9iJkVXrZxCy%2Be6BnQ0rJF3SDlRV0yaS9VmV2AiAs5DPu%2Blq6GlCxozTW0o6nOPeZUb5qrR3O%2BuRGC1ALWSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMASYglHNdTw5x%2Bw%2FaKtwDd%2FdUL6HdetohQCYWudBJY8y%2FTj3wOrvg%2FPA3AMm0%2BKLXmCjCxVg0fc0Izu4Ecbg2qfIMNsvqMia5d17geGcCKj36TpUtmtg%2BvXs%2FppjhJ2vIxIdjYIt1bQ6P0d35LmxzwoXQw%2FF36pA8uL9KFZ1hF6j%2BCJ1vpX%2BCB%2Baxlcl1fTuxKRKy9w7CNmSV7EF21V2nudbFAI0jZbbb89az3rZ2YVesUd8becgoGsinxUo2DOUK4BTT%2Fg8jwAeT%2BouKBVHtr1SfTnNqRI0HJNwMAN76ObRGDPdTO07lbfCjuolrAn8FYK0k0%2Ff33zp40ovuRSFGHp7KvACtO1F9JMpC3PvZOnPgycJZawW8XhsLuH2%2FN%2FJLIiLkuj%2Bj5vDfT70eCVRU0dOCqubYJxubDUzbGfrw6nDn8OUbG%2BPN4BKBPF6B4GACLjAlusSb2bzeKCM%2FhaKIzI3346jzAcFlgbFKtmHQYgBPEaDAteqTLDVZl7sFMiG5DsFDo0bDpfUyUGb%2BQJyOFXGUyglKFsZqZ7AbyrHH7B%2FEvc9PKZckbldYI6v2Y7i7HINt0lg9QJM8IwjWz3yH70karcFsOqZWBZoD7rKYBUjciHkMlbH8100ssEtKYOrXkPIOClXqpcu84c8wtZTEwAY6pgFeFz6j%2BK0yGcOa5eqZStW6eWWalOPseDCBf9MuFWLH7Oesreq7DCMhbA5tdJE%2FJdTJr%2FGqYz7azAVNDoht8p9JhRqX8Bclm7gYzpKX84wTZELnRPL%2BDQU3O%2BvZjojUSar07wO3Vyms8SpBYH4EB7WPaDXQETJSsCvrM5hDVHkmQfwSarZhSgqbcyU%2FJEKxYZf3UUTjEwteEUES11MGoTfhfyQ6kN62&X-Amz-Signature=2000aa7c409e24e42067deec5e758fb01a7e384bb5c38ce8f43340f425989daa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SOJNOI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx48obx0FfWuP458XCSqNFz%2Fgk%2BUaFxZc5EtKJZHLxzAiBvYdOTl%2B%2BAOrNP3DhQUNBUlmEQ2VWaDFEvsK4SaMBtViqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPd4XWSWuqP%2FAuV1HKtwDID631yFO%2BCZD4pBKDp6kjT9Stfe6SV%2FLxwomkmamtY6gwCqQSDRofEJIdXxUfFK1FiwIOmQABoO4vk74ZX5s0Pq%2BZdAU0oc4bUxbMdCIsjvjrAbzhvYf1eaojjkCnS%2FzC2fH6IuiiOwakyITtV5Q4zHdFOGn%2BBPP2YK6oHYTSHE4q38jumYisloinXjsXVb8rHJ5bCs3RpCZQLK2NLTLc1XiIj4RwIZwimRGmscqiQ%2FLGYptNDue6WKuA%2B2GwpCrcHo0PAemVkJPsFZhk%2FTY5agDJyy1coT9N3TQMY%2BRKobn%2BjLrDaajbemai%2F2HMVWaN7zuLOlkSfQ5oSsuCLMwcDk2hh6b0pNLp%2F81owU2gdJ38sEeZ2QzZVte50h071fWlt7YfzGQWW7DwXpNpA93I%2Bz0AY0emTowklXRSjP0grLWBGM9%2BEoAh4kX5I4f2No2k85sECaFJQbpI117bECeemmLNDHtlfB0AcjNDd5LNJaB7%2FwUft7t1XfB5zsUndVXte52kzBnFs%2F9ywbSiC%2F%2FKi74%2FCShvDkIoetbz4pf%2BBvUkhed4gKkkHKILUJBLAeErw%2F9g3dU70%2Fc5npBzmdYRGKi3yEWtzjd7log0mm87jXIBMOUrFm30PRkulEw95PEwAY6pgFfQlojzRjDSTeXlZp0il3CGyj9bMe3Qid0V2kfGtniRKZ2U4%2BxalpHqIPxA0XGx%2B2Z2gSiw69uOORhcpISquZ3bwWJR8ulX8H5%2FcoWY19%2FFLKuV6uEFmx5G8vAZ7TeDQOiI%2BejyuWrfa3IPxrKdVXKoYmXgB5WMoM6%2BHfHFGhQVZsfHXEbTdVc9q5ev2L7vOpKz%2BqJWRlSeNZR%2FPklshNJCvtpExMu&X-Amz-Signature=ede9ce939ce759849b54fb5cccce21d54c53d70786822b90f55df36cf3bc3590&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
