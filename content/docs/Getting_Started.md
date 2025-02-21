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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPZ6DRS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e0y5d0G4%2Bnpl60A1Mt8TgVS6NtOsGt9QkEAqpj5Y5AiBSwnn%2BfvolOuTMKGAUNy24p7G7MK18ZnhKmm%2FF9vUu%2BCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqLHij%2F%2BxmPhrlnKtwDJnk6bH%2FLwykKnEj11%2F8zmNk7g0KuZzmGP3DmHujwJ6ZCdC5hw1JZM626tXfZs3Id4xup738a%2FCNroa5mXLlZi1uiPcJMlwDmm%2BjMxeTXm1Kg3RNOs6S9RocOKISaU8835rnEX0UhS%2BZh7e31nwCp%2BGC3pB%2BtH0BImX91NIO2YDXj%2B2hncJgKwV%2FN%2FJGk3gt%2FoCx9TjD0Z%2FHbjHu2pc8WTdF%2BdHg7wW%2BYHcNwe9XZAhh6%2Fjc7ZTLNQEtCntoQAWI%2B8qtsN2cL7rsoVJNyIuhUDg3R%2B4feplkbvCdcxRtFu%2BsZgx0YTxwoo%2BUv9weeLDgIm7H7KOByWpoYMdKNJ9NeyVes4Gb4ZKg3gBj%2B8MiwwkrFXR3Beld4o3ltT9lOP3p3RT71mt2EStkwul9V1dG%2FXizyUj%2BnaKylyK5RdYG1OqBGM9lQoEsbPn9QCm6Ot%2B73T0NR8YKjQsjNUfNVjE4n35637Xq1kZi%2B9T4zmt6N%2Bydw79nI0hBS%2B2bFP%2BTefksb2m%2FeXyQLNPHD2eSA0De9uO%2BMBtaslkAo19SLc3ozfQ%2BEmJ6lSaBp52VStOsA02ZhhALxh082XVARt8aIhsGrDWsGXIHixjB4AJhhn%2BPbYzyIlG%2FT5%2BfDZ0elb5Qw%2FYPfvQY6pgEQTKO2Xla%2FF9cFyYV1A7RA7yO2dDreDKc%2Fvx%2BzVweRjy1hWB60lljz%2B5yk4QZnKk0YlA2BDSRwS4FK%2FkHeSSL%2BTbG8I2%2FHQIoIL%2BC4Zwu5PKeU7vDNJMz2DOZxGd71Nbv6lbxOlvWts9t01TTXmqd2Ki23VgHpW9mAxM%2FbSgmbF1NnVE5CSYBIxxgTIaSoGlU25Pd1eX9BfO4a%2BGYuXs8WHW7WRECd&X-Amz-Signature=14f1c8f67e9419053c374d90d3ef516422b30fe5bae3b0a725b30c4b9149af90&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPZ6DRS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e0y5d0G4%2Bnpl60A1Mt8TgVS6NtOsGt9QkEAqpj5Y5AiBSwnn%2BfvolOuTMKGAUNy24p7G7MK18ZnhKmm%2FF9vUu%2BCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqLHij%2F%2BxmPhrlnKtwDJnk6bH%2FLwykKnEj11%2F8zmNk7g0KuZzmGP3DmHujwJ6ZCdC5hw1JZM626tXfZs3Id4xup738a%2FCNroa5mXLlZi1uiPcJMlwDmm%2BjMxeTXm1Kg3RNOs6S9RocOKISaU8835rnEX0UhS%2BZh7e31nwCp%2BGC3pB%2BtH0BImX91NIO2YDXj%2B2hncJgKwV%2FN%2FJGk3gt%2FoCx9TjD0Z%2FHbjHu2pc8WTdF%2BdHg7wW%2BYHcNwe9XZAhh6%2Fjc7ZTLNQEtCntoQAWI%2B8qtsN2cL7rsoVJNyIuhUDg3R%2B4feplkbvCdcxRtFu%2BsZgx0YTxwoo%2BUv9weeLDgIm7H7KOByWpoYMdKNJ9NeyVes4Gb4ZKg3gBj%2B8MiwwkrFXR3Beld4o3ltT9lOP3p3RT71mt2EStkwul9V1dG%2FXizyUj%2BnaKylyK5RdYG1OqBGM9lQoEsbPn9QCm6Ot%2B73T0NR8YKjQsjNUfNVjE4n35637Xq1kZi%2B9T4zmt6N%2Bydw79nI0hBS%2B2bFP%2BTefksb2m%2FeXyQLNPHD2eSA0De9uO%2BMBtaslkAo19SLc3ozfQ%2BEmJ6lSaBp52VStOsA02ZhhALxh082XVARt8aIhsGrDWsGXIHixjB4AJhhn%2BPbYzyIlG%2FT5%2BfDZ0elb5Qw%2FYPfvQY6pgEQTKO2Xla%2FF9cFyYV1A7RA7yO2dDreDKc%2Fvx%2BzVweRjy1hWB60lljz%2B5yk4QZnKk0YlA2BDSRwS4FK%2FkHeSSL%2BTbG8I2%2FHQIoIL%2BC4Zwu5PKeU7vDNJMz2DOZxGd71Nbv6lbxOlvWts9t01TTXmqd2Ki23VgHpW9mAxM%2FbSgmbF1NnVE5CSYBIxxgTIaSoGlU25Pd1eX9BfO4a%2BGYuXs8WHW7WRECd&X-Amz-Signature=de09fc270c6f2e59c409561b41a56118ce4a58654626cea5cea14dcdb98a5a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLRILGF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPWyFgkvdDbHKBwZexxKf4Z%2FF2n%2B0OoHUdLI5Bu%2BgeQIgZ6VPW9cJFPCsM%2FpKqRc9Hk0f5UEyFB%2F3xRSFR55zV3gqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw2uN48fRpArXI3eircA7%2FK3Y7BQ0xrGSrZVKFzfiqSmtHJBsnpFJbMSksjUwoQnpM9JgdWgK8N5kUc37EjpJEQWy3Y%2FlsyslHPLj7wrtfi%2Fja83j8WmoLGlcfqc1q9OUGsdU0%2B4E6Uom%2BJLnGTutk1xBndlQMaOIaaqHhOmqn39HDpuGe%2BgVc6JxTH5a66jle8IIqVp8w3QmFAosO%2FVHAt1dW6vDVvU4EWaLRKPIbG6qQywVofq7mm7ll1cTUVDoEqWM21Xzc%2FGp2I10d9QTl8S3tzqdxDDkPeFU5%2BwTL1JqKEn0tGpJDRVDm6KWKnviq24pT8bRfRnseohsmEB1%2Bs9Cpk4Ap%2BdvrOJOunky9JKQJHYxtYdHVVQGMZzctuMNfRLb%2FitqgKwOpyDDfq57sKciweYMYI9lEUaNyPyrKh6SjbC0F18kOgci9vJnhsjderrsUqQAMtNXyYGU%2FcTq5bXxUH8z27cWVh3KLnFIWbMhIVSarhW2mq0OxEYBiGcJK9FSU2j4YPQHqTHeP34L64el4aDWtQ2m9Z%2FHqaem4gRckD2drgS5lEGuyHgS3tYIBitxkzWDbGF4wculNC2BuCtHs6CIq%2Fbym2mmV3uml%2FWHZzVGEP2r92Nt6ZQwK8LeVc%2FX7i84lWhAdsMKeE370GOqUBeW75NpCQtN2%2BMDuGECmyesypscxsz8fV6GMrirUK7QjOYllOu9kej77kmcukRaebOUyPa%2Brb4Ua74MoanzlWzBC7pkvb0f0%2BuO826MedVhOaHpDcDHgPJTRGVmQ7ZWMNJe68vJosmMAmJv5XAFa05OQNhPpNB2aGKfvkVsX3DWDENU7RfZygs8JKdhXBq2z76BY6DomXHFjdMCprb%2FIUK8H1d6Xb&X-Amz-Signature=e6b8eb0e36cb322256921657fcf477cd31dc5c3dceff1c0a076d0a93ee1e548e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQGIIVF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIOioNF6YSvFuQ8Qgi%2Fe9ocZQLu%2Fmebbf1Jba9tFOEgAiEA%2FqEfGwuBc%2F2PRr6kJpIfNpayhsjG3Rryk7X6zJRpTx0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtNZeLyK%2B%2FmiPUkgCrcA%2Bl3wPtKfWBt1rrguV9LykRaSMFplMfFhqJglG%2B2wuGRxLXAgdatDo%2Bzuilkgj68LrXnVgXR%2B0T7F900DxIg35csxXmbTZNTcqCt1TgO6panD4OZGgI77KpRJ0ORigMDuiPgftA4JTtQ2jvyGpRspuuCz4Ac37BnKDFs3RXHoju4C860E8o1u8D1qKDb8lpReWnZgub0ZklfvmuzVms%2FoX7jQxBiDw5BmPB8Ck%2FntX0%2FPhwUx325TSut3CbB31Ffi4AzNfLgo1whr6nPb4wqCkZVsT2YapkirivXmxllLb7JZ6%2F6vtc4IyjvllFQTJPAdHndx%2BiKpDelYdHWZIBKmiyZqPQ%2BsSLNyVPWT6par3blE3s7vcfbVMOgXbR65JN%2FzWxbEZ2dELzT5WQnmelG%2BYpelvon625rOIlgUOgK6ynh0qJ6S7kb8IFRlJNC%2BUGCQT2JSXwAdLNBUbOJJmRGxvkdstOVrXZ0CgmavKQQ7gN0u9hTWgu1lGU3yoi3WSVGHLld9B094rkX1mrhVMsamknmF4UBLlFyCZRh4GFFn7pj2BRKNHMTHCCXG24X1O14iHSE%2BdF4mCOMj%2BSt%2F7Km37bW4ZEf1ID4vzplE81ympKiT4fIn0yyxMR7ALONMPSE370GOqUBwMvoV0aYZt08YDeoTF7ZRDnyUbzfbvOqO41%2FgpZSMb2QlaXHvl4S5SJeHTsWQVJ0ZFkw6Cw6uCm4%2Bpm83njeoDg6Ah8scWhHibm1S5Wc7I7MAtxGu4TzBiYcEaqfTyZCoKG9SCwljMItEPO9SAjzqBAfOAJimsXkLWZ6KH6ERCXLuxVQT9Wjw%2BsiwCrLXwigSfOxojJlidF9q%2BAvohQq217CqvJ7&X-Amz-Signature=f1779b86b2713baeb3dba10ea4468fbe40cd4af6173c7380e370286d5ee4dbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPZ6DRS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e0y5d0G4%2Bnpl60A1Mt8TgVS6NtOsGt9QkEAqpj5Y5AiBSwnn%2BfvolOuTMKGAUNy24p7G7MK18ZnhKmm%2FF9vUu%2BCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnqLHij%2F%2BxmPhrlnKtwDJnk6bH%2FLwykKnEj11%2F8zmNk7g0KuZzmGP3DmHujwJ6ZCdC5hw1JZM626tXfZs3Id4xup738a%2FCNroa5mXLlZi1uiPcJMlwDmm%2BjMxeTXm1Kg3RNOs6S9RocOKISaU8835rnEX0UhS%2BZh7e31nwCp%2BGC3pB%2BtH0BImX91NIO2YDXj%2B2hncJgKwV%2FN%2FJGk3gt%2FoCx9TjD0Z%2FHbjHu2pc8WTdF%2BdHg7wW%2BYHcNwe9XZAhh6%2Fjc7ZTLNQEtCntoQAWI%2B8qtsN2cL7rsoVJNyIuhUDg3R%2B4feplkbvCdcxRtFu%2BsZgx0YTxwoo%2BUv9weeLDgIm7H7KOByWpoYMdKNJ9NeyVes4Gb4ZKg3gBj%2B8MiwwkrFXR3Beld4o3ltT9lOP3p3RT71mt2EStkwul9V1dG%2FXizyUj%2BnaKylyK5RdYG1OqBGM9lQoEsbPn9QCm6Ot%2B73T0NR8YKjQsjNUfNVjE4n35637Xq1kZi%2B9T4zmt6N%2Bydw79nI0hBS%2B2bFP%2BTefksb2m%2FeXyQLNPHD2eSA0De9uO%2BMBtaslkAo19SLc3ozfQ%2BEmJ6lSaBp52VStOsA02ZhhALxh082XVARt8aIhsGrDWsGXIHixjB4AJhhn%2BPbYzyIlG%2FT5%2BfDZ0elb5Qw%2FYPfvQY6pgEQTKO2Xla%2FF9cFyYV1A7RA7yO2dDreDKc%2Fvx%2BzVweRjy1hWB60lljz%2B5yk4QZnKk0YlA2BDSRwS4FK%2FkHeSSL%2BTbG8I2%2FHQIoIL%2BC4Zwu5PKeU7vDNJMz2DOZxGd71Nbv6lbxOlvWts9t01TTXmqd2Ki23VgHpW9mAxM%2FbSgmbF1NnVE5CSYBIxxgTIaSoGlU25Pd1eX9BfO4a%2BGYuXs8WHW7WRECd&X-Amz-Signature=e8cd4b51437fb7f20e592542704596fd38b17fe7a5b7b15e9dc66d3feaa15ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
