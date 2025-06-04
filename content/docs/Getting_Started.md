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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNORIP6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC1A42R9zORygxHiV9hlTWJCU9%2FdjWh878zCU3GvNFbsQIhAIQ%2FDmd8A7q%2BjcRBWs8MOUVwQ53OuoOmJTP1z4vwqbsgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzF5wojFKeATEcrtrIq3AN5lviNUJw05j1rgcc%2FqAibG80pem5Tei9xbdfauaJoO%2B99cix8kcWZtHb7GDNUc%2BMCs5%2BRA4SD2RZI%2B7b6%2BAuKgEkGqg2GE2x3lJy9sC9GUlgrw2bcZV3vF4RjPPcl%2BGYVEmykgNM%2BZyQyQXk9wfT5st3En8dZ%2BS%2FbkprAFITwii8%2Bqzd3OYiOXUJtpBP1V%2BkdPV5SEAEcKX9KBaIzLf0I9rlaU8dbGwONZc5lVajP1NDiFllzGCyAilgWjG4FxNf7dlhgBFLxvheXh8ujKn5JzTaSt8GTt4f4mBI%2Bih4nmhmPP56vNoxrjeh38kZij3ffVpcVpfoxR8XY3rtKSTEYYc1wV7jzX6PbohzE8pZ5Jica2DWs6QU%2FO8Pqv4R0fOymyXK0v8gpRJW4s8BeOArEHCZx9bu%2BPHUYQAVeqUVA1C%2FsjEmun4G7V6LtoB59R90AgtNZ86aQYZ4ch%2FkJvvMp3GG9GfldPTPguQ2%2B1x80XIfmw0gjAgEMW0dvFeBLkQJLh5Fa3P%2BDYDR1ykmOc65tert1SviqOWcY1lNdzF7pIpV4J5qw9E1vS4PrUu9oNc0ONsnsWGF7kDswvCbutp%2Bt0K7CCWDrjGHgmBK6whTJeLSyQVEecTG0hxekTzDJhoLCBjqkAd9kcwwyqa8rssuYWm1aL8fktu3bC4ABTZn8qQV7pPw%2FMeCcYxPiIDD3QfJnPOb3Km8sKCyY9ZLafLNHp0pdACy4vURjXEz6bLTVw1%2F9uqQQXU9gjPJHhzFQZg1vqkRW3DVoT6Qrw5oxpJUsWJueqNs%2F0HK0PuyXKj1zZGiMaxZjQByUBtxqroq25a7yLhknJBu35sT%2BTTMxU6DXZD%2B9bJnRG6vB&X-Amz-Signature=c64b8360710c9729eefa644b8d39fb9c56aac739ea821724875fd68308356803&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNORIP6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC1A42R9zORygxHiV9hlTWJCU9%2FdjWh878zCU3GvNFbsQIhAIQ%2FDmd8A7q%2BjcRBWs8MOUVwQ53OuoOmJTP1z4vwqbsgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzF5wojFKeATEcrtrIq3AN5lviNUJw05j1rgcc%2FqAibG80pem5Tei9xbdfauaJoO%2B99cix8kcWZtHb7GDNUc%2BMCs5%2BRA4SD2RZI%2B7b6%2BAuKgEkGqg2GE2x3lJy9sC9GUlgrw2bcZV3vF4RjPPcl%2BGYVEmykgNM%2BZyQyQXk9wfT5st3En8dZ%2BS%2FbkprAFITwii8%2Bqzd3OYiOXUJtpBP1V%2BkdPV5SEAEcKX9KBaIzLf0I9rlaU8dbGwONZc5lVajP1NDiFllzGCyAilgWjG4FxNf7dlhgBFLxvheXh8ujKn5JzTaSt8GTt4f4mBI%2Bih4nmhmPP56vNoxrjeh38kZij3ffVpcVpfoxR8XY3rtKSTEYYc1wV7jzX6PbohzE8pZ5Jica2DWs6QU%2FO8Pqv4R0fOymyXK0v8gpRJW4s8BeOArEHCZx9bu%2BPHUYQAVeqUVA1C%2FsjEmun4G7V6LtoB59R90AgtNZ86aQYZ4ch%2FkJvvMp3GG9GfldPTPguQ2%2B1x80XIfmw0gjAgEMW0dvFeBLkQJLh5Fa3P%2BDYDR1ykmOc65tert1SviqOWcY1lNdzF7pIpV4J5qw9E1vS4PrUu9oNc0ONsnsWGF7kDswvCbutp%2Bt0K7CCWDrjGHgmBK6whTJeLSyQVEecTG0hxekTzDJhoLCBjqkAd9kcwwyqa8rssuYWm1aL8fktu3bC4ABTZn8qQV7pPw%2FMeCcYxPiIDD3QfJnPOb3Km8sKCyY9ZLafLNHp0pdACy4vURjXEz6bLTVw1%2F9uqQQXU9gjPJHhzFQZg1vqkRW3DVoT6Qrw5oxpJUsWJueqNs%2F0HK0PuyXKj1zZGiMaxZjQByUBtxqroq25a7yLhknJBu35sT%2BTTMxU6DXZD%2B9bJnRG6vB&X-Amz-Signature=33e36f7db1013e239da46a5d5ff9486ff789b1a51e6abde1732c418818f08b84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNORIP6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC1A42R9zORygxHiV9hlTWJCU9%2FdjWh878zCU3GvNFbsQIhAIQ%2FDmd8A7q%2BjcRBWs8MOUVwQ53OuoOmJTP1z4vwqbsgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzF5wojFKeATEcrtrIq3AN5lviNUJw05j1rgcc%2FqAibG80pem5Tei9xbdfauaJoO%2B99cix8kcWZtHb7GDNUc%2BMCs5%2BRA4SD2RZI%2B7b6%2BAuKgEkGqg2GE2x3lJy9sC9GUlgrw2bcZV3vF4RjPPcl%2BGYVEmykgNM%2BZyQyQXk9wfT5st3En8dZ%2BS%2FbkprAFITwii8%2Bqzd3OYiOXUJtpBP1V%2BkdPV5SEAEcKX9KBaIzLf0I9rlaU8dbGwONZc5lVajP1NDiFllzGCyAilgWjG4FxNf7dlhgBFLxvheXh8ujKn5JzTaSt8GTt4f4mBI%2Bih4nmhmPP56vNoxrjeh38kZij3ffVpcVpfoxR8XY3rtKSTEYYc1wV7jzX6PbohzE8pZ5Jica2DWs6QU%2FO8Pqv4R0fOymyXK0v8gpRJW4s8BeOArEHCZx9bu%2BPHUYQAVeqUVA1C%2FsjEmun4G7V6LtoB59R90AgtNZ86aQYZ4ch%2FkJvvMp3GG9GfldPTPguQ2%2B1x80XIfmw0gjAgEMW0dvFeBLkQJLh5Fa3P%2BDYDR1ykmOc65tert1SviqOWcY1lNdzF7pIpV4J5qw9E1vS4PrUu9oNc0ONsnsWGF7kDswvCbutp%2Bt0K7CCWDrjGHgmBK6whTJeLSyQVEecTG0hxekTzDJhoLCBjqkAd9kcwwyqa8rssuYWm1aL8fktu3bC4ABTZn8qQV7pPw%2FMeCcYxPiIDD3QfJnPOb3Km8sKCyY9ZLafLNHp0pdACy4vURjXEz6bLTVw1%2F9uqQQXU9gjPJHhzFQZg1vqkRW3DVoT6Qrw5oxpJUsWJueqNs%2F0HK0PuyXKj1zZGiMaxZjQByUBtxqroq25a7yLhknJBu35sT%2BTTMxU6DXZD%2B9bJnRG6vB&X-Amz-Signature=733e27a2f4d2554f1d27c04e1cba509a1326e23dfae34f272670a3516ab34b39&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTZ6GW2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDZgJE19P7xpt8iQnW2o8xbe4BGZ92o5D5HkV6K5XuSDwIgNuULbKSZLg1JoI%2Bkm2OgVztsNVBe42LfahLa3dPTWvMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJtGdCaK%2BvqrKhXMgSrcA6w%2BzgrOyFSwWL0VdSHXe7HqM4NA5pzbF2HCJCos5s7lYuFjoyqg3x%2FV%2FnP%2BlOXSnBh%2Bt4%2F90PSPnRqEclkWPdJ8OEonAQ9jl6KnA5JjqK%2BoRDhxAqP%2FDqA60iyq6uGGjU7qM7Gro42RcH7hcKNxZcbEhK2tCYLeX%2FWIlSMj2FhvOkMiZWFr6%2F9jPe5hdh5sABI%2Br7hAoaH170Pgdrq5ZTX1Bq2x2txIRQ%2BZ65KeXa1O5Be5tLHgpUsM2QC084tPCRN9gOQ1AYteDgdoKSUh%2BBXK%2FRGxIpJImWQ%2F8OJHYSLW5dK56hhcnHkGpy98fTMRlJ3cXEHNjqJFPTQYoLpEwIegF3EDJ5NnHdwvjyRD%2BsGNvB4yfmPsGMcOivRvPxljTNk7w6Xv0tVZURLcyjaiSV%2FxQGcw1goj7oTJrfd65uysoGFF3jJWw74JFlrK93ai%2BdrKoF7l17d8CO2Njc%2B%2BVvObA3nOrITepDpzQ1OlYpfURjP6liXPBoW4W20oi999odlRUbnb1JaI3QJTq%2B0qnVFCQeZSkh5Y6%2FfLdVkwOg6%2Frc2xZE2EXWLqbgpI3XIMy0YY69WT076aUl%2FQmd9owQKknkX9xAD1XLh84D%2B0NchHXsvJiBAANZW4xKouMPWGgsIGOqUBg6afZL%2B3kxL%2Fcx2GXTcnJKUmCGPjAm8tG0zy4nWOxNBlMUAOvgEf7xQwrusB0YW6Tya7WyuKMcwaLz%2Fa46uU2oUplGjyy5GjqsO05N6jcr%2FL1%2BrENyyHh72fyKhylkpuz2xm63vE7uSW4JERzdKdYR9Xa5ZaoUIwtd2zKFB94PxSiy3gR55BMkUu5%2Ff3LYbJc1iN3dd%2BUfayaRgSgy3soLKhx7ZU&X-Amz-Signature=3f378c02e214afa811450f7f497bc429497af984b8aec24db1678eb833b6f210&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVUMVHD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSgbZyaUO753DnFf3xdgKMJJm%2FYAZ%2BACTg5mPDf2pZCQIhAIP3L8VXOo%2FH5APj1KW9Kp7tMssx43fRKb2m8IfyNnqnKv8DCDMQABoMNjM3NDIzMTgzODA1IgwxTKjGJKO9eaUEIaAq3AM%2FK1Y2IGbZ0%2F9PlEel1jvkEMhhPzEMmyBL%2BN0fHJpN5G6veyPjRMG2q2VG4lR7ZaNcyPufl3tqGxH1V8oib6cvOb8PHizaKatVehplI%2BDpTZr3Ucqm9ie4S%2Fil1jC5Cj0j8uPCOy7SnFrwkKoPlMYEC3GtEi%2F0%2B1mM5%2FMnCTGnS9vI6AhFnaLXZ0K0c1TZ4u%2BVY9bCSvvTDibrBi61emfGsB2QcMdF8%2F0WpU94ASgZ%2Fv5HnQgLG%2Bwgn0HZeMoRomjaseRU047x9ehDyGKYGuLn05UO62l4bYb7nE4I%2BWGGZuX%2FMS5ayNAb7BbdrPFEqamaC36GXLdSO2i2wQHw1VxuaJOzSpBI48apiAYjn0SwkLfj0Qw1hNS382RLMa2i%2FW%2FELNmo8t%2Bx%2BtU2UlZABJMOy6kH1x87paZS0NlCAv5l%2FC6QMdD6q%2BNlgtE5umwT3XfkpJcr8dDKESxPVhKqChMZQd9w21ZaQmvz5xpJ2Z9LpqganrBdAopOQnlrSYXfsd7oOvNO8hbiWcIOzgqTG8PFUI7buCewWfVQQeMSgJxDmnR1O3WYcrh6cj39hC4Mb%2FMI0IDZoBl%2BMIxbkEh8pwdwxPRQJe29z%2BfoycthY1Z%2B1vX1mDKhFXq9pnCWqzDLhoLCBjqkAZGEt1jhS9Zva0ri%2BNOcBxGVXKOLXNIqGv3j%2FVFdM3hGe7TJ%2Ba5iCYCurxOGRW2YiboeuV9%2FduHbNglWoogtCCoQJ2nmbXq6qPhenc26sImDQR3he8qLtgnqNQDfmvcUe%2FquQ%2Be1L3TfA%2B5O094t%2B8fwtS%2B39hUIWowqhg7sZp4Ny7%2Bbggm5ZICmPb4KyUkNbkIOUZbDbEwm7WsVIygc9wklBAnC&X-Amz-Signature=e830211fac969e63870f53c30cbd96bd415406956c1819dc69ec293966e6cf6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNORIP6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC1A42R9zORygxHiV9hlTWJCU9%2FdjWh878zCU3GvNFbsQIhAIQ%2FDmd8A7q%2BjcRBWs8MOUVwQ53OuoOmJTP1z4vwqbsgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzF5wojFKeATEcrtrIq3AN5lviNUJw05j1rgcc%2FqAibG80pem5Tei9xbdfauaJoO%2B99cix8kcWZtHb7GDNUc%2BMCs5%2BRA4SD2RZI%2B7b6%2BAuKgEkGqg2GE2x3lJy9sC9GUlgrw2bcZV3vF4RjPPcl%2BGYVEmykgNM%2BZyQyQXk9wfT5st3En8dZ%2BS%2FbkprAFITwii8%2Bqzd3OYiOXUJtpBP1V%2BkdPV5SEAEcKX9KBaIzLf0I9rlaU8dbGwONZc5lVajP1NDiFllzGCyAilgWjG4FxNf7dlhgBFLxvheXh8ujKn5JzTaSt8GTt4f4mBI%2Bih4nmhmPP56vNoxrjeh38kZij3ffVpcVpfoxR8XY3rtKSTEYYc1wV7jzX6PbohzE8pZ5Jica2DWs6QU%2FO8Pqv4R0fOymyXK0v8gpRJW4s8BeOArEHCZx9bu%2BPHUYQAVeqUVA1C%2FsjEmun4G7V6LtoB59R90AgtNZ86aQYZ4ch%2FkJvvMp3GG9GfldPTPguQ2%2B1x80XIfmw0gjAgEMW0dvFeBLkQJLh5Fa3P%2BDYDR1ykmOc65tert1SviqOWcY1lNdzF7pIpV4J5qw9E1vS4PrUu9oNc0ONsnsWGF7kDswvCbutp%2Bt0K7CCWDrjGHgmBK6whTJeLSyQVEecTG0hxekTzDJhoLCBjqkAd9kcwwyqa8rssuYWm1aL8fktu3bC4ABTZn8qQV7pPw%2FMeCcYxPiIDD3QfJnPOb3Km8sKCyY9ZLafLNHp0pdACy4vURjXEz6bLTVw1%2F9uqQQXU9gjPJHhzFQZg1vqkRW3DVoT6Qrw5oxpJUsWJueqNs%2F0HK0PuyXKj1zZGiMaxZjQByUBtxqroq25a7yLhknJBu35sT%2BTTMxU6DXZD%2B9bJnRG6vB&X-Amz-Signature=10e81ad04e8151b08340abfff8748d377e8e8fade81949f0d841128b526c5caa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
