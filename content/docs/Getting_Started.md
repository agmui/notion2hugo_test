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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRXBQTT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FdpRUkKeBHPc3tYmioORjVTgnjS%2FpJiyahess3QAsMQIhAPh7kx3zojqlkww%2BHeyBNtvNpmaSHr4SiqYmg24JkhymKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyivjq9ESFJ3pgxaXgq3ANjHp%2BZKMMSOhxhgNjLAvVjJaYoy%2BE065HYWIPR0la1zeC%2BhjvXi3QLoMoqYsAe8VACmsq9R8%2FGHPh0hqfJhjwfTZah%2FJEUwPNbTZjFY7xeZw53oUCzITHO0oyOAmX8GfBG%2F9LWf6DRHV3Fp9aPDCuh4ecP4nQSU9ilHHVEuSj3V%2FiKk1uhIGse55GIHOPp5qNAz4lixN8dj0J48P%2BPDEkYbXim%2BulM3x24yYsJIwi4pbG5IFmMjcW%2BWOFVdVjK3x%2F4tyUjBGivccLMK5H434il8Wo7Q%2BvOWDYe2ZihHcsIzxEyn2A1c08k4t%2BUYWQcUd0LSl62oSTJruDDSFlZQF1sUTJuWyosgcl%2Bp6IIc4%2BAgI1G65YITyikCoIAuW%2BrUMl8AE7A5DWoGn7ZiWWYZdiJKVX%2BbhuRuLYFANErOGmDt4UwMtIm2sqjqH0ZR7vSC5KRXLgXRsleIGIpUX0ndqSu1MNvYzL0olsLGLVAmsRuU%2FlGZUdAQCQ6DA0ERPoaZmR13lFTeIalOHaZc%2BdW1uFJjRxP%2BWSHNlPJLYR0sb0f0rIdcg0ZU%2Fdm9Tr8LZaFIT%2Bd7u1FZG7MslH3eGISaLJS1duVrtNxZ4HVTsLgG9j2G5aDUh9r5nFmfdxxLTCPgN7EBjqkAZV4ZXIO5Nz3qIsBIWIrshWLq5WhOh5d5cDQEMzTEKqGkQ33FrsVTV5eneLe%2BPGI2Q4i24Dx12YDkgjUEQQn7%2FbIEuYuJmg5lvAKSqbeU%2Bra97GFrspTlzC8Q3oUo4SCkY1T3l6JUhv%2BAWOakTrsSUc2NZHU%2FwUr6dZo8Rly3gvK%2Fn%2FxVIuaah7iGeYFYtF2bvxF%2B%2F6SNnQw02O8un63%2F1LP2eEV&X-Amz-Signature=995b2b342aa989a16c3778c2fba2faeaafe6acc610fed85a91bda8edaae85c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRXBQTT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FdpRUkKeBHPc3tYmioORjVTgnjS%2FpJiyahess3QAsMQIhAPh7kx3zojqlkww%2BHeyBNtvNpmaSHr4SiqYmg24JkhymKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyivjq9ESFJ3pgxaXgq3ANjHp%2BZKMMSOhxhgNjLAvVjJaYoy%2BE065HYWIPR0la1zeC%2BhjvXi3QLoMoqYsAe8VACmsq9R8%2FGHPh0hqfJhjwfTZah%2FJEUwPNbTZjFY7xeZw53oUCzITHO0oyOAmX8GfBG%2F9LWf6DRHV3Fp9aPDCuh4ecP4nQSU9ilHHVEuSj3V%2FiKk1uhIGse55GIHOPp5qNAz4lixN8dj0J48P%2BPDEkYbXim%2BulM3x24yYsJIwi4pbG5IFmMjcW%2BWOFVdVjK3x%2F4tyUjBGivccLMK5H434il8Wo7Q%2BvOWDYe2ZihHcsIzxEyn2A1c08k4t%2BUYWQcUd0LSl62oSTJruDDSFlZQF1sUTJuWyosgcl%2Bp6IIc4%2BAgI1G65YITyikCoIAuW%2BrUMl8AE7A5DWoGn7ZiWWYZdiJKVX%2BbhuRuLYFANErOGmDt4UwMtIm2sqjqH0ZR7vSC5KRXLgXRsleIGIpUX0ndqSu1MNvYzL0olsLGLVAmsRuU%2FlGZUdAQCQ6DA0ERPoaZmR13lFTeIalOHaZc%2BdW1uFJjRxP%2BWSHNlPJLYR0sb0f0rIdcg0ZU%2Fdm9Tr8LZaFIT%2Bd7u1FZG7MslH3eGISaLJS1duVrtNxZ4HVTsLgG9j2G5aDUh9r5nFmfdxxLTCPgN7EBjqkAZV4ZXIO5Nz3qIsBIWIrshWLq5WhOh5d5cDQEMzTEKqGkQ33FrsVTV5eneLe%2BPGI2Q4i24Dx12YDkgjUEQQn7%2FbIEuYuJmg5lvAKSqbeU%2Bra97GFrspTlzC8Q3oUo4SCkY1T3l6JUhv%2BAWOakTrsSUc2NZHU%2FwUr6dZo8Rly3gvK%2Fn%2FxVIuaah7iGeYFYtF2bvxF%2B%2F6SNnQw02O8un63%2F1LP2eEV&X-Amz-Signature=7feb4a16178d78443a5bc12bcb5d91ba7e6ee560709a6b4ec0099606050ffec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRXBQTT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FdpRUkKeBHPc3tYmioORjVTgnjS%2FpJiyahess3QAsMQIhAPh7kx3zojqlkww%2BHeyBNtvNpmaSHr4SiqYmg24JkhymKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyivjq9ESFJ3pgxaXgq3ANjHp%2BZKMMSOhxhgNjLAvVjJaYoy%2BE065HYWIPR0la1zeC%2BhjvXi3QLoMoqYsAe8VACmsq9R8%2FGHPh0hqfJhjwfTZah%2FJEUwPNbTZjFY7xeZw53oUCzITHO0oyOAmX8GfBG%2F9LWf6DRHV3Fp9aPDCuh4ecP4nQSU9ilHHVEuSj3V%2FiKk1uhIGse55GIHOPp5qNAz4lixN8dj0J48P%2BPDEkYbXim%2BulM3x24yYsJIwi4pbG5IFmMjcW%2BWOFVdVjK3x%2F4tyUjBGivccLMK5H434il8Wo7Q%2BvOWDYe2ZihHcsIzxEyn2A1c08k4t%2BUYWQcUd0LSl62oSTJruDDSFlZQF1sUTJuWyosgcl%2Bp6IIc4%2BAgI1G65YITyikCoIAuW%2BrUMl8AE7A5DWoGn7ZiWWYZdiJKVX%2BbhuRuLYFANErOGmDt4UwMtIm2sqjqH0ZR7vSC5KRXLgXRsleIGIpUX0ndqSu1MNvYzL0olsLGLVAmsRuU%2FlGZUdAQCQ6DA0ERPoaZmR13lFTeIalOHaZc%2BdW1uFJjRxP%2BWSHNlPJLYR0sb0f0rIdcg0ZU%2Fdm9Tr8LZaFIT%2Bd7u1FZG7MslH3eGISaLJS1duVrtNxZ4HVTsLgG9j2G5aDUh9r5nFmfdxxLTCPgN7EBjqkAZV4ZXIO5Nz3qIsBIWIrshWLq5WhOh5d5cDQEMzTEKqGkQ33FrsVTV5eneLe%2BPGI2Q4i24Dx12YDkgjUEQQn7%2FbIEuYuJmg5lvAKSqbeU%2Bra97GFrspTlzC8Q3oUo4SCkY1T3l6JUhv%2BAWOakTrsSUc2NZHU%2FwUr6dZo8Rly3gvK%2Fn%2FxVIuaah7iGeYFYtF2bvxF%2B%2F6SNnQw02O8un63%2F1LP2eEV&X-Amz-Signature=34293280dc8729e46cd277a8b06c863019f0874ee1909af478ede153a0a5d465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPHZAB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDosnh1O5VNSDnYTYYjtCmINw1mZEL46zTrO8y8r2vN3AiAhjVBk7LaR0GNdFKM5WhFtByDTYwe1ocwxYEqlecngiSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIv%2FhmuI9X6Jn2IqxKtwD23gkh76xrqg6VCaLTtyDpy%2BINzBqSDk%2FmfoxkoL%2BQUhpLtwbqyl3ptDlwgF6Y7Q5XUlJs2lMazhkpBbwp0irEtsjbqYtBEi7hSCt1KA5uiAYtJrxhHA415ITsuT2UZPMrlONX3dRa6UlfTF3sn%2B5Zs7SpnR0cW9LLPWASKSAP4MtN1X%2FMggmbWrrhU5Ecl2PI15kbjfw1MNovQLv0sjT2rK8MnCsIx8Ggera1iJSMptkfU6Y4%2BvDAWwPZPliiAlZ%2BU8jple%2B4YWJvitSyWdGCB4SDAsCC%2Bwoww%2Fq59RAGpgimA4q7BpyrEhUZYbv8bh7OB4yWFg2i%2BdNShgwyuGpz4Bcabsjz9NzM5P2K6egeGjei0FEvIUhsR6LGNLVjen0PWuRNwG1fbaGf%2BL2fW1vLMxoxfBQSuZ%2BE%2FKXsntLd8Q6b0gY%2BueTAgFkez1QMqT2%2FWIB7tZjdigRG63fLXn5aMsoYKlOrv1ZDk83nlBboNSp2TlYdxKrH30J%2BaxCo5I36rXq8kadp%2FHlxfKN2ItB53kyhZ%2BksW3VjaYdbD0aIt7gAwJFJ7DW0xd0TKx5dpjwq1m2V01URzLV9i6q0tHhA52qdIOpe89utb8QnJc4nn2BMg1BvbojjL9%2BlLAw347exAY6pgHdunWWPE6tlpCZFI3Htx1f5XODZevAVH36dTQjABBftQ23dqmniA9nGvYhgEYANm5eoAvO3E%2F%2BhoTmqctQ3qk3bIeuBxAQ53%2Fr6JDl2gA7jYyqPZpjzaA%2FS9S8e5mFthe0DVYrrrfGSoQjlp7%2FEhZd1da8JRr9UUNVoTAGufRWJS5kd6A3oaWMhVffnYnuef8wy578rpd9IvJ1PROJDXjudLjSrozf&X-Amz-Signature=b8ab3c86dd9ce921f148eef1e26b82bdff436fc71a0f00ab7ee7f413a8dfa050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVZZQKKM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXkvTzSgNcU4mB4I9NwHmw80EYyGgbayTDAd%2BC09U4dAiEAyPDO7RoMDzPRjbKThs7Fbxx1PBtcuTsej7TfZKtYzloqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs2l9QzhRewVZL1oCrcA9hliBaEJbnTzFN6eH6UDkM1L826K2LpDGLKDmKOxBrmvw5VpdUi3m7Kqgen3MhTX7Ut%2FxUMCMbR03FcKzQWMNtRYtvScwKu0CdYGquRs6lBaahtdL%2BxP2u77s3PeQKqbsJxs62sSSeczGx2VpE8KCTYSBXAk4Sfwt9Gzdln52XBQ9JfHNY%2BNQPSKT7unGtRPM5KnIA79C8EnOy1oKNbdTHWkFj3EstyS%2F01PKZ0M4L3TLLjiBkLMhBcsMuNrSEqZwAXsoM29poQ9xzrrmPn1wfRcGjdRvkHAZQbhfpOil0rfLz08DZmgrEpnlN2HYSlB%2FQU%2BPpnz0ipiIOHcZxiZdAmnV3mn1wWE%2BDLgN%2Fei0j5kNsxlpDwGrTW3Ep5XwGeZCHGOcQoYT1Te9UHE%2FhzHoCs8YioRdKerNEeuayOK9veoRVCWxGORY8qv%2FicsBIvJaOEd2h%2F%2FI82MH%2FH12eK18NdQxIPGBp3yV%2F6GKHdsUnNHbcOILXgICItylGGEm4eJRsBePWD3ICk2lrp7EJS6B2F8ZWWVroD3JS3lwqb1UM6crlpUOu%2FVBGzFifdSdFuYcBmZahgDTGIiQfNLxn6tCgAQT7jqBalStwzE69%2B0%2BrbltiaML56vx%2BHfLwyMKSO3sQGOqUBP6v%2BDALQ2J4eecUfZV%2BjUasflOPM2uZ05rGBpYAjmt%2Bz6WSyYVMiMyMZVXlLZUUZJ062WtHR2skvyYBneT3PhSvodLai1lNkdNhg5jDTfffS4I9NafqsF%2Bw1t5s61QeXk9f1Olk1BwUuaccU%2BeDkhz%2B432FmssPVKcwXMNM6%2BiY7wk37RJUCEng28ZJ9BDUrC0R%2BY%2F7eH0m7cIKrh%2Fi3esXuAWuB&X-Amz-Signature=418d57d811d6dfa51d1409d4f27f82fe3b5a30001c7bf1c4a04133d43dd3e0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRXBQTT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FdpRUkKeBHPc3tYmioORjVTgnjS%2FpJiyahess3QAsMQIhAPh7kx3zojqlkww%2BHeyBNtvNpmaSHr4SiqYmg24JkhymKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyivjq9ESFJ3pgxaXgq3ANjHp%2BZKMMSOhxhgNjLAvVjJaYoy%2BE065HYWIPR0la1zeC%2BhjvXi3QLoMoqYsAe8VACmsq9R8%2FGHPh0hqfJhjwfTZah%2FJEUwPNbTZjFY7xeZw53oUCzITHO0oyOAmX8GfBG%2F9LWf6DRHV3Fp9aPDCuh4ecP4nQSU9ilHHVEuSj3V%2FiKk1uhIGse55GIHOPp5qNAz4lixN8dj0J48P%2BPDEkYbXim%2BulM3x24yYsJIwi4pbG5IFmMjcW%2BWOFVdVjK3x%2F4tyUjBGivccLMK5H434il8Wo7Q%2BvOWDYe2ZihHcsIzxEyn2A1c08k4t%2BUYWQcUd0LSl62oSTJruDDSFlZQF1sUTJuWyosgcl%2Bp6IIc4%2BAgI1G65YITyikCoIAuW%2BrUMl8AE7A5DWoGn7ZiWWYZdiJKVX%2BbhuRuLYFANErOGmDt4UwMtIm2sqjqH0ZR7vSC5KRXLgXRsleIGIpUX0ndqSu1MNvYzL0olsLGLVAmsRuU%2FlGZUdAQCQ6DA0ERPoaZmR13lFTeIalOHaZc%2BdW1uFJjRxP%2BWSHNlPJLYR0sb0f0rIdcg0ZU%2Fdm9Tr8LZaFIT%2Bd7u1FZG7MslH3eGISaLJS1duVrtNxZ4HVTsLgG9j2G5aDUh9r5nFmfdxxLTCPgN7EBjqkAZV4ZXIO5Nz3qIsBIWIrshWLq5WhOh5d5cDQEMzTEKqGkQ33FrsVTV5eneLe%2BPGI2Q4i24Dx12YDkgjUEQQn7%2FbIEuYuJmg5lvAKSqbeU%2Bra97GFrspTlzC8Q3oUo4SCkY1T3l6JUhv%2BAWOakTrsSUc2NZHU%2FwUr6dZo8Rly3gvK%2Fn%2FxVIuaah7iGeYFYtF2bvxF%2B%2F6SNnQw02O8un63%2F1LP2eEV&X-Amz-Signature=ec1a4b8ae4e225813d665628644a15f4c9ea1abf4c26dcc2c5c202c9b9692b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
