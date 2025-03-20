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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URLZPMBZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxLK4AeIrgYYMTVShoO45qZ8EYSjzy9JYwVbk4%2FoQ90QIgXI6OqRT%2FfvVg0OaE%2B4q7nK7WNk93%2BdbX2MJnc2NM04UqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqck4vjeuW1lvICHCrcA7pIZw8pUycgOXJsrQBA7SwWv5GDFF9he6DyD%2F4xXBEgGoIAXYRVtPzHcaoQLeuTTdBQa%2BpGW8Zr1%2B%2FAYumJ%2BHudLv3fLGxw9VXk7Ksn6AsbAA93rYge8xTeipM9%2FJYb18wFPBz%2Bbweh1sKBqNnZk%2BbdnDC26i7eiP0NM%2FkXNLP10sOoWrrWxfMj76lyIijPV3AQLHx00GGKL%2BvgAtEFFnQkf1TEPkvSntEQs%2BqrBUn7p%2Bjn77l%2BcHeW0H%2FMcdie5Z4jbYJNvB3%2B6QVG8eX7NTi%2Bz5WpLJoneZRUj0%2BfciwzJX7mnr2Gi3w5GegJdGeEf2WCzWdRqQ4vHrNN0WJetsinYXuQ5Q66hl9ZFLr6ZycYBKUL%2BayvQovwCgEcGX62N%2FgSH2jqxGVujg52H4OlizFjW7Cg8TH1eGaOQXaARciu2X01e6w%2Fc1TcGCDf2Aw%2FCvL2oESjAAZxjzbt09NJF%2FDsVeTd%2BEYloGHsqcnUEb5nxBC8PkRTDU2tP1xq7mBNYnhAol7PEr8AEthdYc%2BEmP132Fzh8qdgpJgGgYol0G6OYwITp%2B7K5XGqc%2B9Qf6GGYmf%2B1VE2j2Dl4HZqWTYOYDl4zV7ccXVUaX0pLBQyU6eqgCMJ7zW73%2Fq08o2xMJWF8b4GOqUBLlIhaTqnLbLP%2F1qsoimAUGOWByHqlq%2BGFlTaR80f%2BxcjxOEAXRYK01P6%2B%2BkYbnYERDmcMr6DK%2BGMX5kXLht%2FwB81HGfhGlpN6HbwduFKVH9lKwi45suXjVcG1oR996kpfKscmiNHkIKRi4As0V6mNJjtPw9ccPnOD89UWPpCYwZ1lmBDo0r71rVl9Iu54hrP2NWYr2qEzrixmRwibc1RBRrbGoZW&X-Amz-Signature=2b4c74deac3eae189bc9c59c5b2c35a6051bb5d780823af9e123ba61cb060364&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URLZPMBZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxLK4AeIrgYYMTVShoO45qZ8EYSjzy9JYwVbk4%2FoQ90QIgXI6OqRT%2FfvVg0OaE%2B4q7nK7WNk93%2BdbX2MJnc2NM04UqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqck4vjeuW1lvICHCrcA7pIZw8pUycgOXJsrQBA7SwWv5GDFF9he6DyD%2F4xXBEgGoIAXYRVtPzHcaoQLeuTTdBQa%2BpGW8Zr1%2B%2FAYumJ%2BHudLv3fLGxw9VXk7Ksn6AsbAA93rYge8xTeipM9%2FJYb18wFPBz%2Bbweh1sKBqNnZk%2BbdnDC26i7eiP0NM%2FkXNLP10sOoWrrWxfMj76lyIijPV3AQLHx00GGKL%2BvgAtEFFnQkf1TEPkvSntEQs%2BqrBUn7p%2Bjn77l%2BcHeW0H%2FMcdie5Z4jbYJNvB3%2B6QVG8eX7NTi%2Bz5WpLJoneZRUj0%2BfciwzJX7mnr2Gi3w5GegJdGeEf2WCzWdRqQ4vHrNN0WJetsinYXuQ5Q66hl9ZFLr6ZycYBKUL%2BayvQovwCgEcGX62N%2FgSH2jqxGVujg52H4OlizFjW7Cg8TH1eGaOQXaARciu2X01e6w%2Fc1TcGCDf2Aw%2FCvL2oESjAAZxjzbt09NJF%2FDsVeTd%2BEYloGHsqcnUEb5nxBC8PkRTDU2tP1xq7mBNYnhAol7PEr8AEthdYc%2BEmP132Fzh8qdgpJgGgYol0G6OYwITp%2B7K5XGqc%2B9Qf6GGYmf%2B1VE2j2Dl4HZqWTYOYDl4zV7ccXVUaX0pLBQyU6eqgCMJ7zW73%2Fq08o2xMJWF8b4GOqUBLlIhaTqnLbLP%2F1qsoimAUGOWByHqlq%2BGFlTaR80f%2BxcjxOEAXRYK01P6%2B%2BkYbnYERDmcMr6DK%2BGMX5kXLht%2FwB81HGfhGlpN6HbwduFKVH9lKwi45suXjVcG1oR996kpfKscmiNHkIKRi4As0V6mNJjtPw9ccPnOD89UWPpCYwZ1lmBDo0r71rVl9Iu54hrP2NWYr2qEzrixmRwibc1RBRrbGoZW&X-Amz-Signature=662ba8acb42620856e22d2b0130113ff5ba23e5606c619bc5e3497f754380875&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKJ3MS6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHLbtCapxaNGrSP%2FCKfF%2BgIhAuPokC56fbPY5jWm1iAVAiAqpQU204kXwGuldxgp2iGuwJ4nzNm%2B5X6enUpg%2FyPijSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1PEIl86ySoH5%2FYTAKtwDlr%2Fnfpuv4yOxPE8owUvfQaxI%2B6nqmcJhGnyor0wKZEn0xD7iRPgx0MAor4AVCiHrvIulIYP%2FLMk7Pz9%2F4qE8MGm3nyUVhu9zhNX9bnDdL6PeOHZLAQTnar1HusopAcKyDpJBHqM2pFf8uZ%2BM%2FV96QNB1CKy%2BfirHh8fj1EXzeudmT7nSplUdF5ZTkx%2Fx4bHJW2nlhlMD9Jy1B4MVENEUBrSdt%2BCzxYhzuLV0JQ7oQjIZrweoJQfQxcjVG%2BX8XfvMRmC5bVpWRHkVzuvQLdYMbfpEydESjJ5Jjd67cVjXmCyuh6nNRwer%2B4hfbE3U4vgfJNOaWcL3ninPBANSMfIfEo6CPLEdoPRlUrrYnaFo78YG3AO17a6ImfEejIo0xVKhgcS6P9k0VZ5Hj2%2BoOL0slIuHB6%2BwE%2FZtG0zNnye%2FWE1wzFoDeXlyCUAaUFlfAvpMiEw4aGWqJyrLPA12uLkrjRIYvGc4m1nKa3H9dGxbdEHG82hm39qdRG8QIU7AjBjcH%2BUxG2owyUswl%2F4LRx2vBxbSaiwQADntXbHwjAXk2c%2BT%2BplRP3t6I2NOWNymzkMgCndyf1k9KT0S230dJXNE%2BJoaIwTICtLSRXSqTMY1m7NJaObtLuNLLcwvmiow9ITxvgY6pgFuJObK818orsKsNpK9bEv4wKT1doXZulthI4CvGpOW4QZywU%2FWPGjGRhpDSGyhlv%2FsPDsgXKQZrCf5RGQ63%2Fcwi9h%2F%2F5BdjvDkaHi3Rzg%2Bco1gMXxJDqA8i1%2Fx%2Fwmfep5jKIRGuWbuVjaYvYhezUvxyZOJ74%2Fdno1QSGinDurVU9HGYJTUNkLhByk5FBuqN7OcJ3XVncMXrBv1hMGEHJbeAVGj1N8H&X-Amz-Signature=65101314b36e28373dd4d6ac8139cdc5cd591814ba0ad1af873b8090e5556b86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZP6M3S%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAGpIz%2FJHNOKgya8af6KhKjEe%2BbDcNT5e%2BWkpxiPPqVPAiBPhBPlPpRmsuX6BZpCsWjJspsgjc0AUsEgE5R77vg8wiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdWzVh0mv6MDN%2B%2FBKtwDH94exsGoFdpq%2Fmtcx2RAZ0vfOMXjzM%2FkwcVFMxaKNVJAEPcE91ii0ExVnRtH2faQBC3qLsE6%2BW1UyJwNCBDMHiJp7JcBHLKWLerF3bXMxa58XJ%2B3U6aCiTfZ027BW9YF8OUMJDdTTsbG7T%2B7mjLu23LPU7E8983TM9xJeE29NcN7qsMKjyVudkmhCjuRZo%2FxPiiWrh3QW%2BSBP%2Bn75slMZ6ZKS5CWWoTk9aQlLtscKabDG%2BuMzBH29l2koIdgwlmMIXkaJeTfcfU4dOLrUw9o6%2FjVMkGtJNqutne1ITHwGTpjK7kmD8EnTe%2F5753TWHfN2gjAd7zyqVpeswJKUsjgaYP%2FHRRrLUvQ%2FdA6mEJybxDz0wJOzdS1WDohtQuMlco3dieG97ETrRsRfJESeC5KMfoU0bqQYjrCpy9Jwbjf2293OYRd0euyfHgtaOBnYGIvLdtpEo7tug6OI86GbYtl9018Nfat0SAeO525Ry%2BXdC226W8yzXr5lOGVJiXT1QTgQqpqovVoteObRlWLO3zI5l6%2FheXiz336N6XyLq3vWWjhI6SbXXXmTl755RUF1xit3Q83NoJLIaQba7wCwPPozWzQ%2B8Hcj50uOF4Kpql%2FVDF3Eic7vFuHDquMTWww7YTxvgY6pgEzVNkWOdqbB89yHvKd60re%2BIEWCoBvvCF4tTCAlmAq5Uluv1cS2Sejhyh2g2haDUR6jkw1nGfQg%2BkmMGo6UgohYSXlPm%2FOaLHAs9yx8M2uOyEVc0SFijT1myt1YlciHsmw6y6ffkCF6%2BeTr%2FFjKKRbcYQYmFRdcN%2FqawGg%2Fcl6mIQvQwcOlC8tm7bDzt6c8pK3tRlyFxTN8ut%2BEVuBvv7%2BpeBnWF8V&X-Amz-Signature=d64f5195f00ba04051fb12b2a258d2bdaf671a9674dc853670f5b2f4e3bf45b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URLZPMBZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxLK4AeIrgYYMTVShoO45qZ8EYSjzy9JYwVbk4%2FoQ90QIgXI6OqRT%2FfvVg0OaE%2B4q7nK7WNk93%2BdbX2MJnc2NM04UqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqck4vjeuW1lvICHCrcA7pIZw8pUycgOXJsrQBA7SwWv5GDFF9he6DyD%2F4xXBEgGoIAXYRVtPzHcaoQLeuTTdBQa%2BpGW8Zr1%2B%2FAYumJ%2BHudLv3fLGxw9VXk7Ksn6AsbAA93rYge8xTeipM9%2FJYb18wFPBz%2Bbweh1sKBqNnZk%2BbdnDC26i7eiP0NM%2FkXNLP10sOoWrrWxfMj76lyIijPV3AQLHx00GGKL%2BvgAtEFFnQkf1TEPkvSntEQs%2BqrBUn7p%2Bjn77l%2BcHeW0H%2FMcdie5Z4jbYJNvB3%2B6QVG8eX7NTi%2Bz5WpLJoneZRUj0%2BfciwzJX7mnr2Gi3w5GegJdGeEf2WCzWdRqQ4vHrNN0WJetsinYXuQ5Q66hl9ZFLr6ZycYBKUL%2BayvQovwCgEcGX62N%2FgSH2jqxGVujg52H4OlizFjW7Cg8TH1eGaOQXaARciu2X01e6w%2Fc1TcGCDf2Aw%2FCvL2oESjAAZxjzbt09NJF%2FDsVeTd%2BEYloGHsqcnUEb5nxBC8PkRTDU2tP1xq7mBNYnhAol7PEr8AEthdYc%2BEmP132Fzh8qdgpJgGgYol0G6OYwITp%2B7K5XGqc%2B9Qf6GGYmf%2B1VE2j2Dl4HZqWTYOYDl4zV7ccXVUaX0pLBQyU6eqgCMJ7zW73%2Fq08o2xMJWF8b4GOqUBLlIhaTqnLbLP%2F1qsoimAUGOWByHqlq%2BGFlTaR80f%2BxcjxOEAXRYK01P6%2B%2BkYbnYERDmcMr6DK%2BGMX5kXLht%2FwB81HGfhGlpN6HbwduFKVH9lKwi45suXjVcG1oR996kpfKscmiNHkIKRi4As0V6mNJjtPw9ccPnOD89UWPpCYwZ1lmBDo0r71rVl9Iu54hrP2NWYr2qEzrixmRwibc1RBRrbGoZW&X-Amz-Signature=a657ccd32befc4ea1c6a85a80ef55b27c7f8814d7ca7620511983f91c8ed092c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
