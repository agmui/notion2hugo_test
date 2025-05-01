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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UHMIUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJFMEMCIACDB5WN2%2FYUgS0uZtstrcnx52gUCm9RS%2FOv5dEnnMFFAh8h8BHDo9NJbPrpKc9eqXQGFJnrRU74vRa7f9EpXBa1KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv%2Bo4HNKBrDhWmissq3ANfLVPNdVsa486GPP44TeDd7wdHo0oUdnMdsmLQ3Ts9Qh%2FOBsuTsHBVIu8Vo2HIh%2FpfISU7O8fXc8eyvA5vBtyTbAv3NhP0pHsHiQpR3Iqk1CZXj05rILPGIsLzb8XDmejtOECZ93FD9H7yqdZ%2BYm8rjwYux5u35oyWAZCAI%2Fke10mETc1AytCU45ncUqxKZkyB5GD0fTpK%2B3hju0gUxw4QpMyHOLnKQdrm%2FwXn6LSeJqLsEKsW0bmOOxjyzOUcOGGJeuqVlv0WWewavZSRN5o42Cri8hw26SoRxgM4tfx0EkA5a%2FKw09pTJweos9Gqbzuva8PJfh6XruN%2BNtU6c2f1IPPw5CFBmKoC88y%2BkJQN4%2Fyi5yRigSb3T0b7Dzm%2BuxFnKddNxDGXauxtW8zU8AjV%2FBqqVRfX4%2BOHLCfULFtxZmw3StDdOzlUB%2Fq06MrlbmkGNpZ%2FAc%2FMoAPmk6jDcZRnLMVl1IpqMIEk9DGR5DN39TF%2F7DtRFht37ZP%2FsNaLPLZ%2FCCrewhWN2ZaEYfhxXjvHk47QxsRX1jTdt4ULP6WGMBl6q%2Bc1rWVkc5YnOOHmMaEB4W3ojHrrqp92BMLbt0%2FgEejgLwBgGrp4GTB4NWOqG9A7s1hX3BVytPhHUTCgoc7ABjqnAc6aqGmV%2Fp36iFTVkCV99zlnMC7ZMlC4tQboNqMQSeqVm225H%2BOstJS3U%2Bu0L8WZZay%2FwIFkzn8pALbprFm1hB2J203R9LlCi8rfuX6T%2BvSfNzBiEENnrw9nH4PtLEdBC36b8hF77jFXoedgZncF1HRAEWVL%2FRCUcwUA7i25YRwLGKXdfNUCJMxxH6e2fxLA3xN17GFkIf6J5z%2BWTaSMa3pEZOg6zGmO&X-Amz-Signature=c67fc025d423989a62c794668af70f8904ea41bcf0397e64463be3b6eff97cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UHMIUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJFMEMCIACDB5WN2%2FYUgS0uZtstrcnx52gUCm9RS%2FOv5dEnnMFFAh8h8BHDo9NJbPrpKc9eqXQGFJnrRU74vRa7f9EpXBa1KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv%2Bo4HNKBrDhWmissq3ANfLVPNdVsa486GPP44TeDd7wdHo0oUdnMdsmLQ3Ts9Qh%2FOBsuTsHBVIu8Vo2HIh%2FpfISU7O8fXc8eyvA5vBtyTbAv3NhP0pHsHiQpR3Iqk1CZXj05rILPGIsLzb8XDmejtOECZ93FD9H7yqdZ%2BYm8rjwYux5u35oyWAZCAI%2Fke10mETc1AytCU45ncUqxKZkyB5GD0fTpK%2B3hju0gUxw4QpMyHOLnKQdrm%2FwXn6LSeJqLsEKsW0bmOOxjyzOUcOGGJeuqVlv0WWewavZSRN5o42Cri8hw26SoRxgM4tfx0EkA5a%2FKw09pTJweos9Gqbzuva8PJfh6XruN%2BNtU6c2f1IPPw5CFBmKoC88y%2BkJQN4%2Fyi5yRigSb3T0b7Dzm%2BuxFnKddNxDGXauxtW8zU8AjV%2FBqqVRfX4%2BOHLCfULFtxZmw3StDdOzlUB%2Fq06MrlbmkGNpZ%2FAc%2FMoAPmk6jDcZRnLMVl1IpqMIEk9DGR5DN39TF%2F7DtRFht37ZP%2FsNaLPLZ%2FCCrewhWN2ZaEYfhxXjvHk47QxsRX1jTdt4ULP6WGMBl6q%2Bc1rWVkc5YnOOHmMaEB4W3ojHrrqp92BMLbt0%2FgEejgLwBgGrp4GTB4NWOqG9A7s1hX3BVytPhHUTCgoc7ABjqnAc6aqGmV%2Fp36iFTVkCV99zlnMC7ZMlC4tQboNqMQSeqVm225H%2BOstJS3U%2Bu0L8WZZay%2FwIFkzn8pALbprFm1hB2J203R9LlCi8rfuX6T%2BvSfNzBiEENnrw9nH4PtLEdBC36b8hF77jFXoedgZncF1HRAEWVL%2FRCUcwUA7i25YRwLGKXdfNUCJMxxH6e2fxLA3xN17GFkIf6J5z%2BWTaSMa3pEZOg6zGmO&X-Amz-Signature=ed5963fb365acfe7420198cd7cc4f87b72595ef460e94214ce3b067602742359&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UHMIUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJFMEMCIACDB5WN2%2FYUgS0uZtstrcnx52gUCm9RS%2FOv5dEnnMFFAh8h8BHDo9NJbPrpKc9eqXQGFJnrRU74vRa7f9EpXBa1KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv%2Bo4HNKBrDhWmissq3ANfLVPNdVsa486GPP44TeDd7wdHo0oUdnMdsmLQ3Ts9Qh%2FOBsuTsHBVIu8Vo2HIh%2FpfISU7O8fXc8eyvA5vBtyTbAv3NhP0pHsHiQpR3Iqk1CZXj05rILPGIsLzb8XDmejtOECZ93FD9H7yqdZ%2BYm8rjwYux5u35oyWAZCAI%2Fke10mETc1AytCU45ncUqxKZkyB5GD0fTpK%2B3hju0gUxw4QpMyHOLnKQdrm%2FwXn6LSeJqLsEKsW0bmOOxjyzOUcOGGJeuqVlv0WWewavZSRN5o42Cri8hw26SoRxgM4tfx0EkA5a%2FKw09pTJweos9Gqbzuva8PJfh6XruN%2BNtU6c2f1IPPw5CFBmKoC88y%2BkJQN4%2Fyi5yRigSb3T0b7Dzm%2BuxFnKddNxDGXauxtW8zU8AjV%2FBqqVRfX4%2BOHLCfULFtxZmw3StDdOzlUB%2Fq06MrlbmkGNpZ%2FAc%2FMoAPmk6jDcZRnLMVl1IpqMIEk9DGR5DN39TF%2F7DtRFht37ZP%2FsNaLPLZ%2FCCrewhWN2ZaEYfhxXjvHk47QxsRX1jTdt4ULP6WGMBl6q%2Bc1rWVkc5YnOOHmMaEB4W3ojHrrqp92BMLbt0%2FgEejgLwBgGrp4GTB4NWOqG9A7s1hX3BVytPhHUTCgoc7ABjqnAc6aqGmV%2Fp36iFTVkCV99zlnMC7ZMlC4tQboNqMQSeqVm225H%2BOstJS3U%2Bu0L8WZZay%2FwIFkzn8pALbprFm1hB2J203R9LlCi8rfuX6T%2BvSfNzBiEENnrw9nH4PtLEdBC36b8hF77jFXoedgZncF1HRAEWVL%2FRCUcwUA7i25YRwLGKXdfNUCJMxxH6e2fxLA3xN17GFkIf6J5z%2BWTaSMa3pEZOg6zGmO&X-Amz-Signature=1db1ef0502f1ff66b9b4e576ff7658acede45ed883449b1234cd7542dbdf4067&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4EL6ZBT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDKDevD8ghaOJ275KTceoItkvV6X%2Bc9oVz0WoTVFErBtAiEA2Xnio7Cev7fHjZl2WkKdQg6%2BsdqKcf%2BOTYczf6s3faQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH68DStl0mumZNu%2BaCrcAxj14fHcR0ykPXd1YBOgueJ3TgAnIKbFcQMflYzZmZSLHJLFSyBi%2ByqlJTk3wugVB5VDoIzF19gFIkNeh%2BZQlw3kAHupZ73el6LlYlC5abkz5LDMPlROIJmrGT3kNFPlz0%2FDr7MlXL5QaRjNnQscJqTLtmhT8EM99ok%2FctJlMmbrhFsMHOToIu77sZTB0Y9YJAbcs9m3XCDQSq1FPZbSYe4EiRQc3yRRCKHWaw8%2FHVgLG1EEf7dbKn3V%2F2AuYu%2Bz5XDqfghZY05DmLvl5WyWvkWh6Ztrilnq5vgM8qXkN9YFrBEPc9Jgt3kut0VKhoy6nt%2FPThV4C0%2FkgMwNbKaDto78Sk7zOvP9I4Rn%2FL%2Bh3I9LdOvOTP8GOzFGHI6o1q0LNH7qakxqGlLBJhZ8lJtxaS5uAfeGizNFHHEaxfrIARBvfFBOwArHdpAOJMY5eWeV4HbTdOR8osldKxCxiFHQYRIGuPqDEVEL%2FLD3Z6klh6xiwL4Vu7P%2F73Gs1So0suzcERIibgFxdEBtzcKWFyWbMMH%2F7cKdrAADOaZ1VdMT5qD%2FFcfZYmTvJiY3aCYif6IYmYazCOxprYduaNj2kD0y3UijJFtjYDrX8ECWDFZL07R%2FaTk%2FXVtjInzCyOtjMJahzsAGOqUBd5xYeKpst9S3NfBHYTzjQc5NapJZ68BKcrKGLzKaWQyqodwZv3XhIA%2BWqlnazISoXPrOhst4sHYXuW3cE5yETJHeauh4v46qgiyf1iww1AHesYFBQ%2FK3ofIbdM1fuGevgaM7W%2BAv%2FccqYJgbKPSril78phnqC4Cy9ZRcebE%2B0q3Dz%2FYm3jdlpqDfCX1rX%2BTBcqdCb7RSWr3lIS2GcyiH%2Ba7%2FG9X6&X-Amz-Signature=90531947b18039d39651825f992585b0d5e70006713f22235acdb34058e156fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ONZU5Q%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCMV%2BmXc9tjSuDmzlXU8HXw%2FfGnLTAWYHfOK6dJxQc5fAIgVTGY0fW0x%2FH%2FJbbZpVs50%2FvT5ngW3LB4Qf7HmBFZe4cqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxaV7na%2FOdOS6ktQyrcA5NS55iSRNJr7UegSDO6bHxX9MX3OP3pueXLuC8BHS33XCVes6s8fI05rxezy3Y9BT%2Fbl2Lk7qxfNVyTVCcQn8Qq6mm7KSFcq6%2BxfOPe%2Fy5ejidhqPsi1eaoFprwm3TDjoGISwUsIydjq9uQf501DNZcohlyocj4S5cLF5ZCVQTEAcA%2FBLTlIz8iDtkT4xpfIZTS9lMH8vMQd5MfmsPWZeh3byboDg4HglcTHtxA0K3qJ3Yvqqle0JoHdNO%2BvkVlEWgy5JjDzVkh9RoqxiGy9kEbWtPJlAYaL1Mt6%2FbD2oguABxZzVaSEVF6X571OF0AOakGDM%2F52LG9ubZu6QyMR9eHU9R6FaeUjC8rcCLbLgRLqd9ck9PZcGLxiahHQTw4tausuh1i%2FiY014Zv353UGDx4%2FokxpIzZScQOwkgAUVg6wJChBtB9%2BsT2mgOnvx06Hm2jqwpCG9jodshOZ1tGhsncma3YZQEozaRRVvH8lzyjWQRHQNHWDEN6RAewixSmYKlBHiaM01CpoD5HUnAGeyQ9nAFKCa9Pgwi1m3WxsJpcwbVJ7zzgRLbU%2F%2FIUxA4drR8%2BPys0HvO0JyQbPlm9kb4DEQw%2FwnfO5xNkFgS3HBlFwS04qs90g9MdtBxlMIKhzsAGOqUBo7gWnhKakw3H6NVWwnM%2BH%2FLg7dZ3t61shP9DR5ezZXBg%2BCGRroYkgYfvXr08Fs31F0QeUwEe%2BfFPKUejt7DtmuqaIDHdhohvqXKRDh3p9m%2F3kaEZvtc5szEMBU4b%2BNMQ%2BIFGshIZutrxLYqGC6vx1FPYntuu427CkJu27rv8KQm68EkhIcbXjPrxBTBWgI9u%2BoWts%2BILKHU0lhGkySgLurXtTVGC&X-Amz-Signature=1f14992d310b42a55a41fecb813403838c76439d5c0823406616be27d31fabb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UHMIUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJFMEMCIACDB5WN2%2FYUgS0uZtstrcnx52gUCm9RS%2FOv5dEnnMFFAh8h8BHDo9NJbPrpKc9eqXQGFJnrRU74vRa7f9EpXBa1KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv%2Bo4HNKBrDhWmissq3ANfLVPNdVsa486GPP44TeDd7wdHo0oUdnMdsmLQ3Ts9Qh%2FOBsuTsHBVIu8Vo2HIh%2FpfISU7O8fXc8eyvA5vBtyTbAv3NhP0pHsHiQpR3Iqk1CZXj05rILPGIsLzb8XDmejtOECZ93FD9H7yqdZ%2BYm8rjwYux5u35oyWAZCAI%2Fke10mETc1AytCU45ncUqxKZkyB5GD0fTpK%2B3hju0gUxw4QpMyHOLnKQdrm%2FwXn6LSeJqLsEKsW0bmOOxjyzOUcOGGJeuqVlv0WWewavZSRN5o42Cri8hw26SoRxgM4tfx0EkA5a%2FKw09pTJweos9Gqbzuva8PJfh6XruN%2BNtU6c2f1IPPw5CFBmKoC88y%2BkJQN4%2Fyi5yRigSb3T0b7Dzm%2BuxFnKddNxDGXauxtW8zU8AjV%2FBqqVRfX4%2BOHLCfULFtxZmw3StDdOzlUB%2Fq06MrlbmkGNpZ%2FAc%2FMoAPmk6jDcZRnLMVl1IpqMIEk9DGR5DN39TF%2F7DtRFht37ZP%2FsNaLPLZ%2FCCrewhWN2ZaEYfhxXjvHk47QxsRX1jTdt4ULP6WGMBl6q%2Bc1rWVkc5YnOOHmMaEB4W3ojHrrqp92BMLbt0%2FgEejgLwBgGrp4GTB4NWOqG9A7s1hX3BVytPhHUTCgoc7ABjqnAc6aqGmV%2Fp36iFTVkCV99zlnMC7ZMlC4tQboNqMQSeqVm225H%2BOstJS3U%2Bu0L8WZZay%2FwIFkzn8pALbprFm1hB2J203R9LlCi8rfuX6T%2BvSfNzBiEENnrw9nH4PtLEdBC36b8hF77jFXoedgZncF1HRAEWVL%2FRCUcwUA7i25YRwLGKXdfNUCJMxxH6e2fxLA3xN17GFkIf6J5z%2BWTaSMa3pEZOg6zGmO&X-Amz-Signature=a05635f520c5cc22daec6a71edefce1788d56092f1d9775b226c61100039b314&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
