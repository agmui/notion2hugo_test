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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCEGFDX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFkOR8C9nqpL6Zk4HkoSyRbeDnUXvc5xN5tAkBya%2BKxRAiEA4oaow82c9dqve0cP%2F%2BP%2BTWAtptOLuCyn3V3uEpTHwQEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG2myALisSsXo8pgXircAzxfjp3XsrgZFtkRheChOTMJqnqMsGVmIKKf3Yb5deyc%2F7e4E%2Ffk7VWI%2BIuiOeeNPit%2BLNIdvJsNn1wtxAehbS91V%2BVoN6Vm6t6aF36e6T0zL%2F%2B0h30FmuouEqy5v95c8yD6CxGUN454YnFAatLmRVZn048txmcpjKjr8ffGWzZfoWv37vTnthWR74wHSxp8RoReXOco3l8AdXgP6HWP9lnVqUy4e5L7o%2B4rsJE0H1WmFwNvcSFVS9ukY5EoNqF9sZtrbFkRf4Qnjcb0vQJwE0ghu8A%2BHHdYJQJED3gr9lu8TPQpO0o0LFrgUV99TaVju07kY7hZEcbwyt5YS6VBQ%2FwX5HoshyZrAEtXFj3L2DgPV4QNk6X42AeEf16L%2FQW%2FLuOKIZ6VQC942Zz6q14SeXbJrOVSPqap27iWQOj5lcUB4AQWPa57KeD9ZsOL56OyjQtq3YIFJTDIhMejpd4CfxIjpLHO1ENZ5ZPYXUuqIH0Z%2B0N0aTfAuH%2FXXPWAeH1XMwoZUmbEwSI1GhFsa1tJOkTSzCpyEMVaU7wKKeatQKLtkeTaoAXOgHziJq4WWUKDXOwp9Khaf8DQ2vdP%2BjYV4FTpUwQtSx4oEM0gm%2FZ7KIZ%2B%2Fp6RhjP81xat0LpoMKqhl8EGOqUBhvl%2B9HOObeMylj0S7xGfDa7bfILO%2FnzHC%2BHos2iQu2o655UOB2%2B4G0iM%2BsGxaP2eG8gpNAd47uj9DF1MnIzIA0BOqSETeMzG7pghrLP6mXjbw0J9pvSBjuahPgBcpF4%2F2lGl1GfadfU6Pu3r0fg8AF8f7%2FS17SuXQ8jCdLFaYWUZH6eRdFGnVAtGtZAsolWpBjJwsonu2HHUnuKO8QjrFKoAto4c&X-Amz-Signature=c4d49a51f289d56870085b8b1ef666a38f049dd095a4b5e9564389d0492c781b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCEGFDX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFkOR8C9nqpL6Zk4HkoSyRbeDnUXvc5xN5tAkBya%2BKxRAiEA4oaow82c9dqve0cP%2F%2BP%2BTWAtptOLuCyn3V3uEpTHwQEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG2myALisSsXo8pgXircAzxfjp3XsrgZFtkRheChOTMJqnqMsGVmIKKf3Yb5deyc%2F7e4E%2Ffk7VWI%2BIuiOeeNPit%2BLNIdvJsNn1wtxAehbS91V%2BVoN6Vm6t6aF36e6T0zL%2F%2B0h30FmuouEqy5v95c8yD6CxGUN454YnFAatLmRVZn048txmcpjKjr8ffGWzZfoWv37vTnthWR74wHSxp8RoReXOco3l8AdXgP6HWP9lnVqUy4e5L7o%2B4rsJE0H1WmFwNvcSFVS9ukY5EoNqF9sZtrbFkRf4Qnjcb0vQJwE0ghu8A%2BHHdYJQJED3gr9lu8TPQpO0o0LFrgUV99TaVju07kY7hZEcbwyt5YS6VBQ%2FwX5HoshyZrAEtXFj3L2DgPV4QNk6X42AeEf16L%2FQW%2FLuOKIZ6VQC942Zz6q14SeXbJrOVSPqap27iWQOj5lcUB4AQWPa57KeD9ZsOL56OyjQtq3YIFJTDIhMejpd4CfxIjpLHO1ENZ5ZPYXUuqIH0Z%2B0N0aTfAuH%2FXXPWAeH1XMwoZUmbEwSI1GhFsa1tJOkTSzCpyEMVaU7wKKeatQKLtkeTaoAXOgHziJq4WWUKDXOwp9Khaf8DQ2vdP%2BjYV4FTpUwQtSx4oEM0gm%2FZ7KIZ%2B%2Fp6RhjP81xat0LpoMKqhl8EGOqUBhvl%2B9HOObeMylj0S7xGfDa7bfILO%2FnzHC%2BHos2iQu2o655UOB2%2B4G0iM%2BsGxaP2eG8gpNAd47uj9DF1MnIzIA0BOqSETeMzG7pghrLP6mXjbw0J9pvSBjuahPgBcpF4%2F2lGl1GfadfU6Pu3r0fg8AF8f7%2FS17SuXQ8jCdLFaYWUZH6eRdFGnVAtGtZAsolWpBjJwsonu2HHUnuKO8QjrFKoAto4c&X-Amz-Signature=9f9bdeb5b6beb266993f1911bbe14ccb1dcbe13b909a81416c3e1c4e75fbd07f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCEGFDX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFkOR8C9nqpL6Zk4HkoSyRbeDnUXvc5xN5tAkBya%2BKxRAiEA4oaow82c9dqve0cP%2F%2BP%2BTWAtptOLuCyn3V3uEpTHwQEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG2myALisSsXo8pgXircAzxfjp3XsrgZFtkRheChOTMJqnqMsGVmIKKf3Yb5deyc%2F7e4E%2Ffk7VWI%2BIuiOeeNPit%2BLNIdvJsNn1wtxAehbS91V%2BVoN6Vm6t6aF36e6T0zL%2F%2B0h30FmuouEqy5v95c8yD6CxGUN454YnFAatLmRVZn048txmcpjKjr8ffGWzZfoWv37vTnthWR74wHSxp8RoReXOco3l8AdXgP6HWP9lnVqUy4e5L7o%2B4rsJE0H1WmFwNvcSFVS9ukY5EoNqF9sZtrbFkRf4Qnjcb0vQJwE0ghu8A%2BHHdYJQJED3gr9lu8TPQpO0o0LFrgUV99TaVju07kY7hZEcbwyt5YS6VBQ%2FwX5HoshyZrAEtXFj3L2DgPV4QNk6X42AeEf16L%2FQW%2FLuOKIZ6VQC942Zz6q14SeXbJrOVSPqap27iWQOj5lcUB4AQWPa57KeD9ZsOL56OyjQtq3YIFJTDIhMejpd4CfxIjpLHO1ENZ5ZPYXUuqIH0Z%2B0N0aTfAuH%2FXXPWAeH1XMwoZUmbEwSI1GhFsa1tJOkTSzCpyEMVaU7wKKeatQKLtkeTaoAXOgHziJq4WWUKDXOwp9Khaf8DQ2vdP%2BjYV4FTpUwQtSx4oEM0gm%2FZ7KIZ%2B%2Fp6RhjP81xat0LpoMKqhl8EGOqUBhvl%2B9HOObeMylj0S7xGfDa7bfILO%2FnzHC%2BHos2iQu2o655UOB2%2B4G0iM%2BsGxaP2eG8gpNAd47uj9DF1MnIzIA0BOqSETeMzG7pghrLP6mXjbw0J9pvSBjuahPgBcpF4%2F2lGl1GfadfU6Pu3r0fg8AF8f7%2FS17SuXQ8jCdLFaYWUZH6eRdFGnVAtGtZAsolWpBjJwsonu2HHUnuKO8QjrFKoAto4c&X-Amz-Signature=396566f84cb5448cb51080c3342c01df138a53d03f6e32731cca7848a61b0308&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVUXTXY4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICbKwIDyBYZPCpx6nKC%2BlwJ7%2F8c5Qmnhjnd1FWf%2FnZROAiEA69IWA7U09%2BtjAxqPoITxrFNVoeyShE4opUuZ8hslea0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOtdi3r0cxvEZIVPTCrcA5jm%2BLBNwhmca7Gv9G8gN%2BoURuyGAxDmNvtjhQVMEG9na4Fy4Dj%2BLUEQQdPZ%2Fq9dlonLSduT7HnLX9GlRivZz44POAXXCAFfI04cObyGquefAKdnG740RQbyQ2tBGnYyk6XDpRKPQ%2FjvDPYLEHCbCMfObSlcNBPbuWGrzKv%2F83UbZRxrNbTX9jVUKEQBiEcYsjx1cV6v2Avsrjh2u1nr7sSTcYpxIZhF6kSo4QTfC2%2B2NFJ2Gi2JAQvhKcs6okr59Ci56qkWGLQk8xenmzfbOlcZSDW57nwNKVyEqjHTC0f8GDeBO%2BI34eyHPYcv2VgZD5KeIlQhK6%2B0Qq5btvW8RIq%2Fi0jcn1CJyL9pZ%2FVu5tRXAe%2BQ%2Bh8hwdextKZX3qfPtKGkmwelr19bjB6UztLqcwjuzSglKCYz8ysRWTP2%2FqwhjfTqQzGEu4d4Om645ggLEjc4kS%2BgElVaolHOxkS5LwyOHjj5g2P%2FDCLigYoRHZhmZz1WxQtN0jhDSkEUcS7FTcLhU74AkG75ZeLFyo2CbLJQ%2FhWRAHXNs1aywWNgiHsBG5jhZ%2FOBS8NTWCabgwtUk1Coywoh%2B6uBV42E4VUo7vh3qf%2FkmLTsm%2Fk23iZtpAhPxRo1%2Bi7k9t7CcG4LMLqgl8EGOqUB8UvuyE9Tv6N5Ib6163SgNA0320aQpSFpwwVjlQur45ldyQJjJEbM%2Fg9tw99nmCndyK%2FLHQLAz50Bscvt7B%2F0G%2FF5fvCz4qEv%2FP9Dh%2FuF0sYK5pKVNALhbN%2F8xVUYPaQpx%2BgNcxbs0rvljquvTwmOk4qMK4d%2FkeVpZrnRIHYiNIWAeYz0YYg%2Bqle3C9dAT7MFafBta%2F98iUFHHN1OUTvlj%2BHSKi7x&X-Amz-Signature=d4adaf7cb43236afa4bb85a3cde34d40a871a8e06aac39ce76093ff59fc25419&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6SPGPC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2B1EcRiZukTOyI568HYHrFKR0iBYPcTOQ%2FEQOi2Q2NaQIhAMVCx%2F94zJt%2FMZi3IHU3q92G6%2FxoR12xxNsInarP3D8OKv8DCC0QABoMNjM3NDIzMTgzODA1IgznS73UzD%2FRIe6QBzcq3APoGGumUoEu4UxULQqoABZyQ6BJgN8tGu0%2BifQoTn1l0FByIdhovE719OzD5DI0G%2FoLE3tJ5ikE0cP%2Flywi3cVfLutdPtsN9apxzrZxwKhzlA%2BnC15633UbwvvMD8%2F5WHO6sVD%2FNEaNpU2NWVU2RToISLPYG7tyxp7M5qh0TH1bQBlgcIflm%2FMkJl%2FYbnyLmiy5zZq9j3Y9eSKKwn5HP1REwG%2FvqHFS4eUSoX5JxNUuhv1fLkpUDT5Y1BYljOrwPs%2F2hSK9ej5e0Qjw3duzYLOlmCisS2sIiYTfFd29kzBdk2XKyNvjtnCWeHZ4wvFGo3oTkGpjBf7MK5qlHpLBGiqHBiUEbVJSIQ%2Bg2lBrNts5FMgd3%2FS%2FNFeA6I4LhsoPgCGfCif6W1WbzAZK%2F04WKbcJUFt703rwE%2Bu4b1E9s9sIN7VJQCG7X1cKa3UPaQjcMk64COjrKDk2evPREpHKrpV%2BK2F9AEBJ88rayFoy3p3h343YeLBe1pEqbMGjK5aZUBagNdkTQgGkfPMWpOGBezDi4iTeBGltvXEkhJvZUvf6hlHQPmqHXcTlODeQ4obr464IIvhaGcndu6HqCGTwDzF9RIGk%2Fc5KWZ0YXK5k3RnGu%2F3TkLBDYF5lK%2BhKdjD6oJfBBjqkAcPn2IwJcn5lg3xM8Pwo0n%2FhuDFdyiwbg3bO5GHXwHwKScMQyrvE2sSqgIesL8dGnc0IuZrv2f%2B3ac4KA0SKTUhW9AwsocRHdvDKwLgZk2%2FhSwUlzNM%2BAuNLdoCigD4723UHCkRrebFWO1y%2FM4KsK%2B3VwqV%2FElF1gQoGDqdwNs5fQgRk5uYEObmK7sbFDoJ5A2fTzsf33XPfvulkyD5oB8oHMkC6&X-Amz-Signature=259f892c1b5c88242b8e1c6b1fd14345d85b2e952ef50cb10f8929dc246b4eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCEGFDX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFkOR8C9nqpL6Zk4HkoSyRbeDnUXvc5xN5tAkBya%2BKxRAiEA4oaow82c9dqve0cP%2F%2BP%2BTWAtptOLuCyn3V3uEpTHwQEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG2myALisSsXo8pgXircAzxfjp3XsrgZFtkRheChOTMJqnqMsGVmIKKf3Yb5deyc%2F7e4E%2Ffk7VWI%2BIuiOeeNPit%2BLNIdvJsNn1wtxAehbS91V%2BVoN6Vm6t6aF36e6T0zL%2F%2B0h30FmuouEqy5v95c8yD6CxGUN454YnFAatLmRVZn048txmcpjKjr8ffGWzZfoWv37vTnthWR74wHSxp8RoReXOco3l8AdXgP6HWP9lnVqUy4e5L7o%2B4rsJE0H1WmFwNvcSFVS9ukY5EoNqF9sZtrbFkRf4Qnjcb0vQJwE0ghu8A%2BHHdYJQJED3gr9lu8TPQpO0o0LFrgUV99TaVju07kY7hZEcbwyt5YS6VBQ%2FwX5HoshyZrAEtXFj3L2DgPV4QNk6X42AeEf16L%2FQW%2FLuOKIZ6VQC942Zz6q14SeXbJrOVSPqap27iWQOj5lcUB4AQWPa57KeD9ZsOL56OyjQtq3YIFJTDIhMejpd4CfxIjpLHO1ENZ5ZPYXUuqIH0Z%2B0N0aTfAuH%2FXXPWAeH1XMwoZUmbEwSI1GhFsa1tJOkTSzCpyEMVaU7wKKeatQKLtkeTaoAXOgHziJq4WWUKDXOwp9Khaf8DQ2vdP%2BjYV4FTpUwQtSx4oEM0gm%2FZ7KIZ%2B%2Fp6RhjP81xat0LpoMKqhl8EGOqUBhvl%2B9HOObeMylj0S7xGfDa7bfILO%2FnzHC%2BHos2iQu2o655UOB2%2B4G0iM%2BsGxaP2eG8gpNAd47uj9DF1MnIzIA0BOqSETeMzG7pghrLP6mXjbw0J9pvSBjuahPgBcpF4%2F2lGl1GfadfU6Pu3r0fg8AF8f7%2FS17SuXQ8jCdLFaYWUZH6eRdFGnVAtGtZAsolWpBjJwsonu2HHUnuKO8QjrFKoAto4c&X-Amz-Signature=d68898ab4718ac0b19822e67a5b428232923c23328ac83660c2fac13396f0351&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
