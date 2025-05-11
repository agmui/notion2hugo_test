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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXLYQTV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEgTRlDhmBF0eUW7AU0ztjTabebcHisaOFPhiEVMNEERAiB0%2BXAKGYkrrsOOjBBz23ILzy8Qhr2tqGyAsOXMXNa%2BaiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomidwcyClvNk6Y5KKtwDBGR1Z8C3aSKhHchVtccV8LW%2FR1BYUijHQ4Bl6pw4z506xSS9fVK61QXBJnXhC9YstmPyNIFRMXS5gSIwGw5%2FI4SPmOffVWRq18nsz4pkvqvONj3WBVQhinav%2BxxqoNtCigWzOQHH2fMynoxkP4pCYV8h%2BnlGBiH%2BhneyP1DU74cI0hvPCNF2wMgjNqX1FSXupNwLriixvQeIogAoh4HI1Nli1GssjBD%2Bi1XdUURy03G%2FLuqQtyXuMzCaH34pPT7rGcwTZhKzsSnPpPeiVjCM15WOI7njileZPDHjq0ew5e2SSD4ppmaHY2Sq%2BKkNVTWS%2FzyaTblAzq6JB2pp9FZqi4452BfxXBDUdRCYdfKdUZdVQvjsj%2FaK8xqnM1%2BgTfod5HWjXectvTykPRJdUWiUJDVndeF7UJ32MU9WCP07ZAZ5MFs0qzqc9u7z7ja%2BB8kkaT6Id6zSbl3DtJeKBWAUbedTcSebPBPGA2XZAMDjb4rF31FFbi%2Fo6ZnCLdFh3XVI8aTa7ok9Bc6zHT270VDSTCqklymMwgowLJsiedvIDboPQD6R0WwF9o4C68DsXLY46NO08BIVe4bT7ib84Pylk7yMMlBoHqvnOlmH%2Ba0ZZLw0gkf%2FL5TWOuOuvxUw0t6AwQY6pgF5HLrCwvf4FP0fPrvrzzySWgzlFGgK7HymZitKkUrCDkTKTcPUB9kTEQIFqubfdkl0RwQ4ln96yrBIOSgH%2F5ZRu9yuaEpTF%2BCPw0TDpdxybh0G4Kr%2FJlvIGYwbac3%2FKthQpkODF42j9N3qW%2BmX%2FybHcdV3zijRCy7%2Ba%2FnBxrHjZexxfkkHQesL%2BizPfYx%2BatFOqPvKFaSkghy3Vh43ku7scd6Kprfs&X-Amz-Signature=7641df98f5080a72b39fac8ae39d6bedda29bfda683cdf5a5823a5e9d46bd9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXLYQTV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEgTRlDhmBF0eUW7AU0ztjTabebcHisaOFPhiEVMNEERAiB0%2BXAKGYkrrsOOjBBz23ILzy8Qhr2tqGyAsOXMXNa%2BaiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomidwcyClvNk6Y5KKtwDBGR1Z8C3aSKhHchVtccV8LW%2FR1BYUijHQ4Bl6pw4z506xSS9fVK61QXBJnXhC9YstmPyNIFRMXS5gSIwGw5%2FI4SPmOffVWRq18nsz4pkvqvONj3WBVQhinav%2BxxqoNtCigWzOQHH2fMynoxkP4pCYV8h%2BnlGBiH%2BhneyP1DU74cI0hvPCNF2wMgjNqX1FSXupNwLriixvQeIogAoh4HI1Nli1GssjBD%2Bi1XdUURy03G%2FLuqQtyXuMzCaH34pPT7rGcwTZhKzsSnPpPeiVjCM15WOI7njileZPDHjq0ew5e2SSD4ppmaHY2Sq%2BKkNVTWS%2FzyaTblAzq6JB2pp9FZqi4452BfxXBDUdRCYdfKdUZdVQvjsj%2FaK8xqnM1%2BgTfod5HWjXectvTykPRJdUWiUJDVndeF7UJ32MU9WCP07ZAZ5MFs0qzqc9u7z7ja%2BB8kkaT6Id6zSbl3DtJeKBWAUbedTcSebPBPGA2XZAMDjb4rF31FFbi%2Fo6ZnCLdFh3XVI8aTa7ok9Bc6zHT270VDSTCqklymMwgowLJsiedvIDboPQD6R0WwF9o4C68DsXLY46NO08BIVe4bT7ib84Pylk7yMMlBoHqvnOlmH%2Ba0ZZLw0gkf%2FL5TWOuOuvxUw0t6AwQY6pgF5HLrCwvf4FP0fPrvrzzySWgzlFGgK7HymZitKkUrCDkTKTcPUB9kTEQIFqubfdkl0RwQ4ln96yrBIOSgH%2F5ZRu9yuaEpTF%2BCPw0TDpdxybh0G4Kr%2FJlvIGYwbac3%2FKthQpkODF42j9N3qW%2BmX%2FybHcdV3zijRCy7%2Ba%2FnBxrHjZexxfkkHQesL%2BizPfYx%2BatFOqPvKFaSkghy3Vh43ku7scd6Kprfs&X-Amz-Signature=4b195662709d4d20b167c73e8731445a5d4cf19e78cb46b45edd8d57c315eeaa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXLYQTV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEgTRlDhmBF0eUW7AU0ztjTabebcHisaOFPhiEVMNEERAiB0%2BXAKGYkrrsOOjBBz23ILzy8Qhr2tqGyAsOXMXNa%2BaiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomidwcyClvNk6Y5KKtwDBGR1Z8C3aSKhHchVtccV8LW%2FR1BYUijHQ4Bl6pw4z506xSS9fVK61QXBJnXhC9YstmPyNIFRMXS5gSIwGw5%2FI4SPmOffVWRq18nsz4pkvqvONj3WBVQhinav%2BxxqoNtCigWzOQHH2fMynoxkP4pCYV8h%2BnlGBiH%2BhneyP1DU74cI0hvPCNF2wMgjNqX1FSXupNwLriixvQeIogAoh4HI1Nli1GssjBD%2Bi1XdUURy03G%2FLuqQtyXuMzCaH34pPT7rGcwTZhKzsSnPpPeiVjCM15WOI7njileZPDHjq0ew5e2SSD4ppmaHY2Sq%2BKkNVTWS%2FzyaTblAzq6JB2pp9FZqi4452BfxXBDUdRCYdfKdUZdVQvjsj%2FaK8xqnM1%2BgTfod5HWjXectvTykPRJdUWiUJDVndeF7UJ32MU9WCP07ZAZ5MFs0qzqc9u7z7ja%2BB8kkaT6Id6zSbl3DtJeKBWAUbedTcSebPBPGA2XZAMDjb4rF31FFbi%2Fo6ZnCLdFh3XVI8aTa7ok9Bc6zHT270VDSTCqklymMwgowLJsiedvIDboPQD6R0WwF9o4C68DsXLY46NO08BIVe4bT7ib84Pylk7yMMlBoHqvnOlmH%2Ba0ZZLw0gkf%2FL5TWOuOuvxUw0t6AwQY6pgF5HLrCwvf4FP0fPrvrzzySWgzlFGgK7HymZitKkUrCDkTKTcPUB9kTEQIFqubfdkl0RwQ4ln96yrBIOSgH%2F5ZRu9yuaEpTF%2BCPw0TDpdxybh0G4Kr%2FJlvIGYwbac3%2FKthQpkODF42j9N3qW%2BmX%2FybHcdV3zijRCy7%2Ba%2FnBxrHjZexxfkkHQesL%2BizPfYx%2BatFOqPvKFaSkghy3Vh43ku7scd6Kprfs&X-Amz-Signature=484bc32b3a044c1027bb1d76d858cd984fa24046aaa7345aa23f0490c17073d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF646RDA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIB1LYR4Fju4rjtEjhoZGWl87cC5s3QZrIDeEJxixEJfyAiEAtOp2qcKDQTUeQoWwy%2BGWWA0Q7DXQUOtyP8Qu6EF%2F5DEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtK21TSFIJWATGmOyrcA2JnwWPunDM2gSzMsbKm4r2KDoV%2BvvTYMnqZzjWv1uZtI1mWUOgrYjdU9UJjlQY3suioCeXEl%2FU8hQEb%2FUv69K%2BYTunepXVdb1EaO2lNO1dNKuMLTIWmL4pIf%2Bk9bY%2BwKLSLSF%2FzfUCLe6LTAW8vCi1lvLybhIJisRxMCpkGbHDe4ChLrBhaBCNIrJYGepokek7wtTQNM%2FM5EDX%2FinvkyVIYPzvcMF9%2FwItOMsaiLBMehtg7%2FMYo8cPRLPO8cT0hbBzSG%2BlhAYM3TrRMcMEtiAbGOkqars3Xu%2FvPHMpRqcui8NnhB%2B7Dsz9kk7m3u%2Fx4KiBLEiCYe%2FxtoNGZnZ3BUQ3YSrLL%2BWQHXROTSgyOeZP1PykS47tOROp%2B6R2n%2B6pw1uuoKuhoSiTI44%2FhKLbaTMz6rUVpqzNrPP1e1roWIu1FKXKdCjFiCZb6BGMoIDIlWVkcv%2BxccXBljtMpUxTR2zzzTyDl78yF6cya6KSPOLplVWV%2BdyVJgcSHTrVNgOfhgGfTfbgJeDHLkgOrSDNnlqypoy6vTADZx78tmHJtS5kryJ1sAVqlYPvbBdznJy7%2BHBd9O0P1tgdfn2b93%2FfOmxuAr%2BbIMfu%2F85eRDMMO2fN5H5%2BmOwP21XjAj2t1MNTegMEGOqUBUBiO70yc59pP%2FitSbzi89fANBXf2RXyHnKDGJ70rSYyKYt6dObaRoRuop3Pvd9Xl2NQcdJHgpbwHl6vI7qnLnRbeywPdgnf0XsTv09%2BAR0F7%2BOWAZa6apPmzl%2B3b7TSSWl9S8iK9TkYdhbMU45wFSoxZRyRBvsLpxZgUPEhd%2FucLkyUEY5DWfAkXlO0YdfYCbSaKFz4GeuqWncnSpW9iOOgllpi9&X-Amz-Signature=713e47531d6620a1f1b8334de943464c38f455570bdc8b7ef00efd9104edcb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OVI2P2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDkVaBGRGEaCTaIxCb02a9Mni72Af5sXsgGv7iMAbkoxQIgHrV4wvZp0Vvpxc8YsAo8EiF12rArnAX53pZH7vTgeeEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK8BVxF60uo0LvOlSrcA66AVJhj1jtP2Tf5OwtUZE0OCkp53abYVO8GxsjMy%2BWaVdMB7hxoGo5dRPOGVciBP7wZKmpidQPaumZlz9G7s%2BDpEgmVU44Tdeqbc9wmDmECe68huPxEevn%2BH5J1TtRP2%2BZWX%2F%2FP6pS7mYQiPjYmkAyyHmw8Zim87CaCE2ctrypUdniiYMvrlfn8CQ4oOzJkbuBXhond%2FTczqnyYykuVjFy27hR2ZAKCK2PGvaMouUp8JH1eJY4u9Jkkf7FuuJITCyaIeu6gF8T7%2BLU7fViyxnWdzb6UJ5K6nq%2FTJHqdntPY2SeoKtUWWmbPc9jHD%2FzezLpRwSZTx7D9LLgXJG7eZ116tC1rAS2qBzlkpFh1zk3tR1mLciAVJlSixWTQ10T1C2mXhMIEfvtAfp5ctHpgDdfggpJArHrwjn4qrvGQFvBhAwy%2FdlQnVBTbTVpOEXbJYG1c6D89i1b9wYLdwIZgdWnZ26AkeYVZJ9mCaMp6J9NPwAhH5hyRikHUe3Z0AWvHgkyNMruhMmXHKSLTzM2b3tSr2FIG6AGvKI0i2iO5pS7kvj9BDAyQLDiFi1WFtqbrcmHCKvFbtBQcnaT8o%2FL4ktFRyN2srJwijMheJet64bCMKiyDzszQzkqBM8RbMNTegMEGOqUBpGwksiz8jhoUG1cOkX9oUDxUHbeuVaVI5AFvIuR%2F%2FyK0j7y8ziXsZqW3yRBfPPX5t8iZ6jGBU%2B1kxIOLtOQtv8PVUdllRvB5zidRDCX4MUDROwBp3MW0LpoN%2BeMjL2YN7G9dScXMFYe0LE1kRbXtmEu%2FRmukFy%2B5%2BVwYBSidoe9IEZXSDswMRI7awdn2P6zYa0yymSz8XEFuDicDu7m%2F3BB9%2FfCg&X-Amz-Signature=6ffb893bc61ac3f743c13d8478bc879f5e5e2c92baa4c6b1053ba52ce23b3786&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXLYQTV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEgTRlDhmBF0eUW7AU0ztjTabebcHisaOFPhiEVMNEERAiB0%2BXAKGYkrrsOOjBBz23ILzy8Qhr2tqGyAsOXMXNa%2BaiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomidwcyClvNk6Y5KKtwDBGR1Z8C3aSKhHchVtccV8LW%2FR1BYUijHQ4Bl6pw4z506xSS9fVK61QXBJnXhC9YstmPyNIFRMXS5gSIwGw5%2FI4SPmOffVWRq18nsz4pkvqvONj3WBVQhinav%2BxxqoNtCigWzOQHH2fMynoxkP4pCYV8h%2BnlGBiH%2BhneyP1DU74cI0hvPCNF2wMgjNqX1FSXupNwLriixvQeIogAoh4HI1Nli1GssjBD%2Bi1XdUURy03G%2FLuqQtyXuMzCaH34pPT7rGcwTZhKzsSnPpPeiVjCM15WOI7njileZPDHjq0ew5e2SSD4ppmaHY2Sq%2BKkNVTWS%2FzyaTblAzq6JB2pp9FZqi4452BfxXBDUdRCYdfKdUZdVQvjsj%2FaK8xqnM1%2BgTfod5HWjXectvTykPRJdUWiUJDVndeF7UJ32MU9WCP07ZAZ5MFs0qzqc9u7z7ja%2BB8kkaT6Id6zSbl3DtJeKBWAUbedTcSebPBPGA2XZAMDjb4rF31FFbi%2Fo6ZnCLdFh3XVI8aTa7ok9Bc6zHT270VDSTCqklymMwgowLJsiedvIDboPQD6R0WwF9o4C68DsXLY46NO08BIVe4bT7ib84Pylk7yMMlBoHqvnOlmH%2Ba0ZZLw0gkf%2FL5TWOuOuvxUw0t6AwQY6pgF5HLrCwvf4FP0fPrvrzzySWgzlFGgK7HymZitKkUrCDkTKTcPUB9kTEQIFqubfdkl0RwQ4ln96yrBIOSgH%2F5ZRu9yuaEpTF%2BCPw0TDpdxybh0G4Kr%2FJlvIGYwbac3%2FKthQpkODF42j9N3qW%2BmX%2FybHcdV3zijRCy7%2Ba%2FnBxrHjZexxfkkHQesL%2BizPfYx%2BatFOqPvKFaSkghy3Vh43ku7scd6Kprfs&X-Amz-Signature=43065429a054ab5ada0cfbc329ae660fb6280bd5baeafea22d9dc36dbb903794&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
