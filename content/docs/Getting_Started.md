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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZEGUCN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDwaR0N%2BQczi%2B1RNANKOmtSIdhN0qyHdAUOR0k0qKT76QIhAKF4h4X%2BwDJHCOdRTjJhvFL%2F%2F%2F%2FzCJ9zcu0bpNtzKIYbKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0OnWZpyGhgB0iXeMq3ANkATKd7V64GJApO4U7JUzvk5fY7ntVzW36N0qM0dDkY3U%2BHt0xtgEQ9ewGgcQwHBap77kIBPGkwjewXhj%2FuMitcgY0GgZvvjtuvIiSkTkrr8FTt%2F20XEqhlnNcg3t3UjpWTG%2B86QfOp9uy7a7rL8m3MaVVu4gesVz8sJuf0V1PkmIyPMu2finijJ%2FCEh4mjkphl46dfMyWxhMSQ3El6CMw9W%2FVVaMM%2BCZ54%2FRFZgh2REDe4VGvBNr%2FEI9RePw384c2auAnQ0KEaNYspBYeoplBA0RQQmxXc4FKu3wcdJA8h8qrt%2F5GmKnF5vSDDB0xHyWqx6gGzdADQ3LPh12wLKDQbrAEx9W6hcTx7x560MpSaiEcPAwccRcFBuNgHP5NnmSy7A7NY55G7Q5jkdlNYTXub6q55IDjG5%2BeZmQ82pg2WEZf4xJ6JnAtPmus9OJ8xqXCOjymEAHYj5QZ1G9791ug2YpsF%2BWQLA6E1YCgvawo9lUPDl0cGpjywfKjwHUnO0C0UfAchNn8Ci2sqgO6rBgVNT6ln8ze8Z4L8PpKV6RnKtjmpQz6lY8raoC8R4QBDRNTaqY7u65%2BV186BmeTF10nyJibtb12IYpt0RLmiguBjXuvmc1lNCKoGB3pUjCd7JDBBjqkAUDIxgvmo0FQDKn8hRN66Mr%2F3WQFcqF%2BZJTJJebuo9%2F0BEIlgAYTyAkvD8ped%2BOy7TLaEUDKTTydOQwh%2BYhKiP1XdwLbH%2F3CjzckGTwbbeOhYNORy%2Bj8l6OMu1zAFuZFSR32%2F7a1jVARepV12CUisjkFlgMmG9ufKM842CGHys7xeO%2FoPUvDjaf9zdsTiClq7tyfVFpIDG7e%2BcnyAqXlcmBaxTtL&X-Amz-Signature=e1245ecb0d2d701c27cc7756a16be03cc1b9847fea1c8913ae49633870c618f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZEGUCN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDwaR0N%2BQczi%2B1RNANKOmtSIdhN0qyHdAUOR0k0qKT76QIhAKF4h4X%2BwDJHCOdRTjJhvFL%2F%2F%2F%2FzCJ9zcu0bpNtzKIYbKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0OnWZpyGhgB0iXeMq3ANkATKd7V64GJApO4U7JUzvk5fY7ntVzW36N0qM0dDkY3U%2BHt0xtgEQ9ewGgcQwHBap77kIBPGkwjewXhj%2FuMitcgY0GgZvvjtuvIiSkTkrr8FTt%2F20XEqhlnNcg3t3UjpWTG%2B86QfOp9uy7a7rL8m3MaVVu4gesVz8sJuf0V1PkmIyPMu2finijJ%2FCEh4mjkphl46dfMyWxhMSQ3El6CMw9W%2FVVaMM%2BCZ54%2FRFZgh2REDe4VGvBNr%2FEI9RePw384c2auAnQ0KEaNYspBYeoplBA0RQQmxXc4FKu3wcdJA8h8qrt%2F5GmKnF5vSDDB0xHyWqx6gGzdADQ3LPh12wLKDQbrAEx9W6hcTx7x560MpSaiEcPAwccRcFBuNgHP5NnmSy7A7NY55G7Q5jkdlNYTXub6q55IDjG5%2BeZmQ82pg2WEZf4xJ6JnAtPmus9OJ8xqXCOjymEAHYj5QZ1G9791ug2YpsF%2BWQLA6E1YCgvawo9lUPDl0cGpjywfKjwHUnO0C0UfAchNn8Ci2sqgO6rBgVNT6ln8ze8Z4L8PpKV6RnKtjmpQz6lY8raoC8R4QBDRNTaqY7u65%2BV186BmeTF10nyJibtb12IYpt0RLmiguBjXuvmc1lNCKoGB3pUjCd7JDBBjqkAUDIxgvmo0FQDKn8hRN66Mr%2F3WQFcqF%2BZJTJJebuo9%2F0BEIlgAYTyAkvD8ped%2BOy7TLaEUDKTTydOQwh%2BYhKiP1XdwLbH%2F3CjzckGTwbbeOhYNORy%2Bj8l6OMu1zAFuZFSR32%2F7a1jVARepV12CUisjkFlgMmG9ufKM842CGHys7xeO%2FoPUvDjaf9zdsTiClq7tyfVFpIDG7e%2BcnyAqXlcmBaxTtL&X-Amz-Signature=62544084d42036e0fca9861803a0d426b68807393734dd51efd4ba032d169661&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZEGUCN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDwaR0N%2BQczi%2B1RNANKOmtSIdhN0qyHdAUOR0k0qKT76QIhAKF4h4X%2BwDJHCOdRTjJhvFL%2F%2F%2F%2FzCJ9zcu0bpNtzKIYbKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0OnWZpyGhgB0iXeMq3ANkATKd7V64GJApO4U7JUzvk5fY7ntVzW36N0qM0dDkY3U%2BHt0xtgEQ9ewGgcQwHBap77kIBPGkwjewXhj%2FuMitcgY0GgZvvjtuvIiSkTkrr8FTt%2F20XEqhlnNcg3t3UjpWTG%2B86QfOp9uy7a7rL8m3MaVVu4gesVz8sJuf0V1PkmIyPMu2finijJ%2FCEh4mjkphl46dfMyWxhMSQ3El6CMw9W%2FVVaMM%2BCZ54%2FRFZgh2REDe4VGvBNr%2FEI9RePw384c2auAnQ0KEaNYspBYeoplBA0RQQmxXc4FKu3wcdJA8h8qrt%2F5GmKnF5vSDDB0xHyWqx6gGzdADQ3LPh12wLKDQbrAEx9W6hcTx7x560MpSaiEcPAwccRcFBuNgHP5NnmSy7A7NY55G7Q5jkdlNYTXub6q55IDjG5%2BeZmQ82pg2WEZf4xJ6JnAtPmus9OJ8xqXCOjymEAHYj5QZ1G9791ug2YpsF%2BWQLA6E1YCgvawo9lUPDl0cGpjywfKjwHUnO0C0UfAchNn8Ci2sqgO6rBgVNT6ln8ze8Z4L8PpKV6RnKtjmpQz6lY8raoC8R4QBDRNTaqY7u65%2BV186BmeTF10nyJibtb12IYpt0RLmiguBjXuvmc1lNCKoGB3pUjCd7JDBBjqkAUDIxgvmo0FQDKn8hRN66Mr%2F3WQFcqF%2BZJTJJebuo9%2F0BEIlgAYTyAkvD8ped%2BOy7TLaEUDKTTydOQwh%2BYhKiP1XdwLbH%2F3CjzckGTwbbeOhYNORy%2Bj8l6OMu1zAFuZFSR32%2F7a1jVARepV12CUisjkFlgMmG9ufKM842CGHys7xeO%2FoPUvDjaf9zdsTiClq7tyfVFpIDG7e%2BcnyAqXlcmBaxTtL&X-Amz-Signature=e1baf4a3e34e63d8a15a37a9de2619a1cc7f8004b03ac09267f6ff66fe7dc235&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TWTCIBR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEzAuUdsWNpTDbP%2FGl0Gp%2BlOosJce5iOOcldEgNEqbT9AiEA7idaCESq34js2moR%2FLGUwtSBE3SirQFW8GW%2BjjekFuMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjziqRg6HpRysj9oyrcAwLB8Sl2y05SeNFMn5yL8Pov1zJNOIppbbydPkAD5F1BTrgF3D%2F36WLxzkQmBZrLr7sRDF0tMNwlmam1PbYR0KBImplTUY%2BHRwFEJLGjUQgx3n1QJVKuwoM%2F5uRO9kiWTVghJZC8gnl61ywArcd7uBRJB6js4SAx8rLbUwsCyIejLkQtiIksBhkVZ1g4e5d%2FCT8OgVYG0WZhImZAkthPz3X5r8C%2F6HKG4EyQJNdPqxGEkviY82BA%2B6NStzXI0bkSNF1%2BmIetrSqSGoWAyUJ98oCmh85J1JOFpcvxUrlhnLf%2FRW%2FHyhx8fvaV3qVtzY8GFfKaM6%2F%2FLvwce5qFrKR0pbyJm53dEDddNiAVfCTlZdGInxrLHmONreirF0ZqprJsuEjfrWN%2FloVCbdqZ%2FkHkigu%2FpGWaqZfk%2B%2FlHL%2BEvi5DDASAZPOtoS5pzcS9T7%2Bjo%2Bvd6muz%2FtZ%2FH36vBvpz6QHhoku8CGt4FVE7gT%2BRYBktePLr1iK92OieYt2r1j8Xo0ucIlXOrUw0bzucOk4jWw9FYDIFkDNibqQRav%2BVc61bi8z1GhPk9WoUtNCj5D8qEdLmVj1WfXO8bf9pk70Rz03D6vNeQ284u3ULm8RVJtWvHHOpgTuWIHZov636cMITskMEGOqUBqDDKVsDb7xEIqHLbLqJitBP649Y%2FfIkcVIVaSTIktWAWo8SIhjoKrG9WO%2Fg6Ts%2BxrEE2gnEn25%2FaUbp0Vv7kRKUBB5TATBmeceT9wDkziW6P1%2F94uLoX8Ye86QVoaBBhUIRpu4RgDJ5OiNyhspKZY7yQhElAZq0E7X0eGI0whngbJLQyxQqzay2P39%2BW00jaN63KXWKY5UmtA17PLvacw8gKAAbz&X-Amz-Signature=1fe90ded462573bee913a661712a1c2f1df8adc715aeae8e684898fd48766def&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLWWQ7Z%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFUJUykqRClfNMQzzFW5vtSdKFCQiiwOdKiWbjcuNU%2BtAiA4kNjFapmDtu3Sqmh%2BgsUXiu24oj0Fb3%2Ft9GjqdLHrqyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJq3NfwSqphXH%2BRJ7KtwDVWcl7kXhGVcOQBSvGDq%2BzcFpHD6igtVSzEGYEJ7Oie0PHRqeEHa49Q6wLafJLDT%2BWeUYON2XLwoeAXqjKqd6ugWs1rwbeQytPqKe2%2FwNGZPYOc1qQa8umS%2BVopcO3%2Bp3kSKtLUO2KLrYKJt3s%2BWuRHlgUu7i%2FQTNJDXuuHhd%2Fcqss5LezleGmVDyfLMHwszzG7PSZPjhHEqgPybHAixY3MWWRn2rd5G37wf25vCxytlErZYo6uqtzQWn7fd3MXoWtw8xNlPMOFl1awO%2BOkLmupvU%2FGYR6sRHsdFZJjpVB0W0ouLytD89Rd55eHo2F6KDmEx%2B%2BVpUGbJfOKtAKXBNnp%2Bp2c5MZ2B91XfBO8Oecv6Zuufl%2Brj76x1%2BnrQaCsa4c9QDoKLMDByMVB4AouINiQjW0rtUV5vDfRhF5wkik%2FBbclA9SvugxHJ5QzY%2BIeB5JM%2Fg29mmg0Vr9UcuojEk8ztvw6o1NdV71Kkz3oGAs4SoAhUyp3EemQjhAx%2BF0vWL7OLrCNXDPoETOW%2BKfzLBJ3ZbR%2B7J79CNGEwnwWVpFHGY%2B8UVdd5NzPvnvziPoDiv8ZdwLtsXXyWZLquWOAIdY8YMl6Nl0SghYm2qj4xXVxo01de33OX4bW7mjrIwheyQwQY6pgGVXtqemccn54jZctNFlXJfmjEhqA06U%2FDfe8ZjDHFRq5i2%2BsRRRTiCETm0pcAduPbWA8XQN0kUMaF837ZvWWllNd0va6BLM0gIriyJGTEBMmwJ%2BMdK08W98jJGog6REoLtBOWz2RTLqKrubD7%2FE%2FIQ9KNZEnT%2B%2BXbjFUpKtf9UJaydI08wyWJqvxNSSh2n2QPtw5g4ZvkDFyTd9zsc3Hvg6tTbO7DG&X-Amz-Signature=6e450281f0672b287ab66539085dc8bf992e5b0cea24d6b486cfe328f3832c66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZEGUCN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDwaR0N%2BQczi%2B1RNANKOmtSIdhN0qyHdAUOR0k0qKT76QIhAKF4h4X%2BwDJHCOdRTjJhvFL%2F%2F%2F%2FzCJ9zcu0bpNtzKIYbKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0OnWZpyGhgB0iXeMq3ANkATKd7V64GJApO4U7JUzvk5fY7ntVzW36N0qM0dDkY3U%2BHt0xtgEQ9ewGgcQwHBap77kIBPGkwjewXhj%2FuMitcgY0GgZvvjtuvIiSkTkrr8FTt%2F20XEqhlnNcg3t3UjpWTG%2B86QfOp9uy7a7rL8m3MaVVu4gesVz8sJuf0V1PkmIyPMu2finijJ%2FCEh4mjkphl46dfMyWxhMSQ3El6CMw9W%2FVVaMM%2BCZ54%2FRFZgh2REDe4VGvBNr%2FEI9RePw384c2auAnQ0KEaNYspBYeoplBA0RQQmxXc4FKu3wcdJA8h8qrt%2F5GmKnF5vSDDB0xHyWqx6gGzdADQ3LPh12wLKDQbrAEx9W6hcTx7x560MpSaiEcPAwccRcFBuNgHP5NnmSy7A7NY55G7Q5jkdlNYTXub6q55IDjG5%2BeZmQ82pg2WEZf4xJ6JnAtPmus9OJ8xqXCOjymEAHYj5QZ1G9791ug2YpsF%2BWQLA6E1YCgvawo9lUPDl0cGpjywfKjwHUnO0C0UfAchNn8Ci2sqgO6rBgVNT6ln8ze8Z4L8PpKV6RnKtjmpQz6lY8raoC8R4QBDRNTaqY7u65%2BV186BmeTF10nyJibtb12IYpt0RLmiguBjXuvmc1lNCKoGB3pUjCd7JDBBjqkAUDIxgvmo0FQDKn8hRN66Mr%2F3WQFcqF%2BZJTJJebuo9%2F0BEIlgAYTyAkvD8ped%2BOy7TLaEUDKTTydOQwh%2BYhKiP1XdwLbH%2F3CjzckGTwbbeOhYNORy%2Bj8l6OMu1zAFuZFSR32%2F7a1jVARepV12CUisjkFlgMmG9ufKM842CGHys7xeO%2FoPUvDjaf9zdsTiClq7tyfVFpIDG7e%2BcnyAqXlcmBaxTtL&X-Amz-Signature=ec2229709df53d9081e960b1324daea7edbc1ea45ef8e3d1fec5f35219acf463&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
