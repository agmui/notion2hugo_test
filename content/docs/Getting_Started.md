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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5EEBFT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMGd%2F%2Bxd6rKymYPgqDdUHKidqPgzoTJpFyFaC1rL4KgIgKJEc0Dxi5VouoCaBKa4kOjJYObJU%2BCm3VgsmdaMW6%2Fcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH6mkBh%2FKVNWtRJMOyrcA36Mty37ohLl6fqwTuahcj2EEeQ42q%2BbAFKf7adWBjxUco9HiVHN381Wu2y3CI%2FVhVtFW6C2tM3eLCD8fP4uULm79Yt1dzlNpDZpGY66kAyIhmvqfybJgwhqTp90RSQUr2avk12dXrzowNdeeOyxXeFNXSOM1HpIByW9D8L%2BZjqjkU47E%2BFJWSyPZaIwU3faoIdv7TRFx6wFygXWXCM1H3RSBXluCUTdxxW5TybxKQsAOeDDQZ8GV0i9M7naf4d%2FgOmQdNVjt9fyQACXsLaiEEtg25IArzh45KXxZ%2F0LsfikxJvAMavp3RXtZo6uoYVC1qa0OZNLgoAKOjop3W4OrY4SBTrKv%2BcnNQEEOgaEQNAcStr%2BRqoL0gxw4nE%2Bd3NDKh5ET53CKwf3D5s8g23HNPANkiztnEdy9ZSiyOo7yqZaa%2FEteTQ7j038sP5LRrOPy6DLyqAZSETwuAYXO63dYnTNHrGX0DCmDbEf8ZqDnc4a1DIGkYSJxukVMCfcF4EGolYdnQLSwGhiwXAePfp9Kq%2BOfWITTIDOeFY%2FeZG64UwGVPwWQAoEmPMToT5O4crLTU80KTcnIqyEJ9teLJpe6VYWYL%2BMpV5Tu7hNYnN6xkeuMQUg6pirCB33gq6cMOax1b4GOqUBULMHPdYHGWjk0EoWO%2BXNES6GInUNJKHOkRLegLfFg3nPdpYW%2BBKMNuBQg0vCBHnNkEBNSstNRhidWUUWZ3U0C1aSM8MZ0wUwZCZ8nbIzZhi4UYsmrdzjlCuwc7M7S7V1bncVyGuOoE2QvHHYU99lZR2xRaq8UrxTe5nijVXN039e6NKOf5%2B9A4wHiGmzbNsaONABRmcAHuRkHQJffimXvqRiuO33&X-Amz-Signature=ab47b8b80c4eaa76106457fade3f5193fce3a83cf455d713e6a66eab2d0a69ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5EEBFT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMGd%2F%2Bxd6rKymYPgqDdUHKidqPgzoTJpFyFaC1rL4KgIgKJEc0Dxi5VouoCaBKa4kOjJYObJU%2BCm3VgsmdaMW6%2Fcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH6mkBh%2FKVNWtRJMOyrcA36Mty37ohLl6fqwTuahcj2EEeQ42q%2BbAFKf7adWBjxUco9HiVHN381Wu2y3CI%2FVhVtFW6C2tM3eLCD8fP4uULm79Yt1dzlNpDZpGY66kAyIhmvqfybJgwhqTp90RSQUr2avk12dXrzowNdeeOyxXeFNXSOM1HpIByW9D8L%2BZjqjkU47E%2BFJWSyPZaIwU3faoIdv7TRFx6wFygXWXCM1H3RSBXluCUTdxxW5TybxKQsAOeDDQZ8GV0i9M7naf4d%2FgOmQdNVjt9fyQACXsLaiEEtg25IArzh45KXxZ%2F0LsfikxJvAMavp3RXtZo6uoYVC1qa0OZNLgoAKOjop3W4OrY4SBTrKv%2BcnNQEEOgaEQNAcStr%2BRqoL0gxw4nE%2Bd3NDKh5ET53CKwf3D5s8g23HNPANkiztnEdy9ZSiyOo7yqZaa%2FEteTQ7j038sP5LRrOPy6DLyqAZSETwuAYXO63dYnTNHrGX0DCmDbEf8ZqDnc4a1DIGkYSJxukVMCfcF4EGolYdnQLSwGhiwXAePfp9Kq%2BOfWITTIDOeFY%2FeZG64UwGVPwWQAoEmPMToT5O4crLTU80KTcnIqyEJ9teLJpe6VYWYL%2BMpV5Tu7hNYnN6xkeuMQUg6pirCB33gq6cMOax1b4GOqUBULMHPdYHGWjk0EoWO%2BXNES6GInUNJKHOkRLegLfFg3nPdpYW%2BBKMNuBQg0vCBHnNkEBNSstNRhidWUUWZ3U0C1aSM8MZ0wUwZCZ8nbIzZhi4UYsmrdzjlCuwc7M7S7V1bncVyGuOoE2QvHHYU99lZR2xRaq8UrxTe5nijVXN039e6NKOf5%2B9A4wHiGmzbNsaONABRmcAHuRkHQJffimXvqRiuO33&X-Amz-Signature=d85dfd86a64393885d1e7375698e634ff72690e58ef61a1908b527e2f244f0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYG4EG4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1B306sMBQcWpAgJvtVz5FEm7v8XpMwqRxIt%2F0IjtuMAiBRcm1SrdevXnly%2FnUJ81cd%2B6K3ZyEphL5xWOHYndgHbir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMDb0ex94vGjOeQy%2F7KtwDvJGXB2CDgEraLzVDXJeqNJjQxqLzvyXaH0JB7%2F52qjCLDyVD9YbnRP6Bg3naaQuculdWG689ichxuXhBc9Wip%2BVxF8Zgrex0BRn7jhOWeS356pBqN3%2Fk%2F92OmGaXvR43rM7TXguR%2F6FWsu81VpuF4JWsqd4PQgoyj9qzvD78ioOLGsqV%2BglivPUbj%2BnzShvwCufIR7sTa9x6qsA4I6AKYDON6R%2BPI%2BfHD9O0%2B2TFS3xfANChpRIsU23zRup5DCDI1dMTVZukJ51RsWrtDbIHEaN4wI4SKX4o9S7Zf2nVAkt3MtJIEPl5BZw5sVzf0MC%2BRFAjtTfbNLdeZNh3arSQGP5e%2BCbRLrpHiDAbRjwQt7VuWc8ZwODbCNMKzgqKZVOoa8KljvQ5mQTtnqfDsw2VLXJRv9pb3NKXySupvuX8QvxtTDd1CifUAWHzaORepgbkacAvIpi1nDl4rQlkUdDFgyDLzDt98sWnjHAERbAzfBuGLAFdv0MUMaJzU%2BaSvrA%2F%2BjlULZyk7I9I2vIN3rbyWe7S80Iwx4cLm%2BQ1tbcZze4oU4mIWvivgfcUdawuSr2cUTOXJmdhNecvAPuUmIuND%2FCM8GEXzkT6JcCrgO%2BXnu9FfAzyHU1XM8nEWykwl7LVvgY6pgGSsenrTtrQWv6MqnNsgHC%2F8l7tKGt7X4Lk%2FXdp8%2Fj3pYzVbxTN6qV9xLcb7azB7f9urmLar3S4lm6mPB3CIyaFOZNaWcd2lh1VrL5fv5FfiHVCg2FBuEaVuVs%2FVBsTMD5ksw50SC9B8b3KU6Tn9GAv%2FAuIEvPiQQVuVI8nOz6LpIaBXHI%2BYsm3BdMfHKjOkDPll9cE%2B1Q%2FI1Jw%2BQtH1goG1dMEZeuE&X-Amz-Signature=07c8c43a72d8d28ba9aeb9972c24ad2c34c208a4df83b45bc73b4cf48650c005&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFVPNSW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2B4zsYp%2BHIdQnTwnrNjAuY8IVHCqMdDH2WuA8op%2BuyCAiBw0jzdLn4ZcRjOuMdK3orOELH78Nou%2B0BU9hMTcbHkDSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMIWCAYA5QF0JBaKHhKtwDEbTIwltlkIY0J74NL6WSUVTCtHBuAoOzdZmSvV6RDrXTBDTmgnG%2B5wL9VHX4PSKPROIfRSSGp4yID%2B%2BALOrBP%2FKtDgdCk%2ByF2sw4mUAhHQ5blYjwR8eMEeA29X765gofZrXklJzMG4Q5cNGMk1ZWUYU0cjzwQfPRlilxJ7OezttWGBS8XYURMv3iCkta4724OFfG5vR22KtvlzPeoRKGsQtDFXhITieK9hZswgzInbWR7wC2NTvhIa0ADogN7QSZIARj6rNP9OxHd7RL%2FJFgvEqD3iqmyQGL9aSFItE%2FNyd7Yp1jX9hO3ymbD%2BlWz5JWbh1LrDQUKJxefHxXNhBfmj15y0fywbyErwPwkQIwXY0h8moHDptW8VfVrIMMeXgM8RO0rfT7t8Qr3vDT%2BG7B9oMncdkXuEsMmc3TRvak3OBtkxIX9U7h3ZnofeJGq5loevZSc3B7Xtu76YSuPSpn1r2ikG9T453yqvQCPj3w%2B3BurrSGwoAQwsJP7Yn4PvOPEdgbOghvp6kIxb3bkQge9s2bCNFahe6r2uEEYwJU%2FJZVmjYxuQpabyg6wNnsz%2BSOlscJz2ewec7RcajNrBwY0bV7Gi%2BvUKEwgyJ4MRFcQujWHv4iaA8ZOANQq6Ew67HVvgY6pgGIz1onhJ53xZIygkNBFbdSPh1MXSuktkzMGdjLZpkHPFeJKjwO8d2uxni3Pi1rAFtKkk0S3QnJ99yQsv0ojECuW8Ol4Em0rHQ5a114G1%2BNtvdXRyM6zlvya4r7mgvz4dty3QE0pt7JjdfzLrPvqDmpJkvs%2FTMeHwzR8MYNk93%2BfoKgzww8TY1sRP%2BcAIhppyzmaIt1sIElGLKHCQxbxiMmNQCiiWb1&X-Amz-Signature=d7493ec74ee1646915b2c74dc3ba32a811bdb8a22a2bbbac598bffc21767423c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5EEBFT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMGd%2F%2Bxd6rKymYPgqDdUHKidqPgzoTJpFyFaC1rL4KgIgKJEc0Dxi5VouoCaBKa4kOjJYObJU%2BCm3VgsmdaMW6%2Fcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH6mkBh%2FKVNWtRJMOyrcA36Mty37ohLl6fqwTuahcj2EEeQ42q%2BbAFKf7adWBjxUco9HiVHN381Wu2y3CI%2FVhVtFW6C2tM3eLCD8fP4uULm79Yt1dzlNpDZpGY66kAyIhmvqfybJgwhqTp90RSQUr2avk12dXrzowNdeeOyxXeFNXSOM1HpIByW9D8L%2BZjqjkU47E%2BFJWSyPZaIwU3faoIdv7TRFx6wFygXWXCM1H3RSBXluCUTdxxW5TybxKQsAOeDDQZ8GV0i9M7naf4d%2FgOmQdNVjt9fyQACXsLaiEEtg25IArzh45KXxZ%2F0LsfikxJvAMavp3RXtZo6uoYVC1qa0OZNLgoAKOjop3W4OrY4SBTrKv%2BcnNQEEOgaEQNAcStr%2BRqoL0gxw4nE%2Bd3NDKh5ET53CKwf3D5s8g23HNPANkiztnEdy9ZSiyOo7yqZaa%2FEteTQ7j038sP5LRrOPy6DLyqAZSETwuAYXO63dYnTNHrGX0DCmDbEf8ZqDnc4a1DIGkYSJxukVMCfcF4EGolYdnQLSwGhiwXAePfp9Kq%2BOfWITTIDOeFY%2FeZG64UwGVPwWQAoEmPMToT5O4crLTU80KTcnIqyEJ9teLJpe6VYWYL%2BMpV5Tu7hNYnN6xkeuMQUg6pirCB33gq6cMOax1b4GOqUBULMHPdYHGWjk0EoWO%2BXNES6GInUNJKHOkRLegLfFg3nPdpYW%2BBKMNuBQg0vCBHnNkEBNSstNRhidWUUWZ3U0C1aSM8MZ0wUwZCZ8nbIzZhi4UYsmrdzjlCuwc7M7S7V1bncVyGuOoE2QvHHYU99lZR2xRaq8UrxTe5nijVXN039e6NKOf5%2B9A4wHiGmzbNsaONABRmcAHuRkHQJffimXvqRiuO33&X-Amz-Signature=bf8d130165c4c7fd57dde5b1d0fe6253037928ec49562407aa4ea5d0ce67f711&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
