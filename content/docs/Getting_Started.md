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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5DUUF5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcXyPlVzgdHpLZIH91vpPKAz6KdS4Mpc6u47m8vBTTyAiEA%2FCtyS6vJBrsOzLW4OwiXKiV3EA44O6TSfWLW7%2BKJ57kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2jj0AvCLJ%2FNGk7MircA2dsT8HZ7t1LYzks4BaCjV6IHLMJ5OR3kk4u8e%2F6oikI6azWj4A%2BmCc5FJgGgT9aRZI2iLx%2BbghSvKXsGRTewGU5BAnvH9G7W0PzMK97A4hQkZTxTaHywhiG6Sm2MP1UhQ1ZzEnizQ%2BnKbOgzjw%2FjrLHS3A4Kmd1t9BWeq0zuL5N7jniaUop2CAb%2FhXZf3MPGdSxFodMvDP9d8EfPqZ0Y2LDN0DVu4mL6n%2BrpBFOIi774MdGWt7jxIgdwUI3kTVLa1mGlcU9YdZz13Kf%2Bfm8bkMRv4l6b%2BoVeY7G5gubwr6QmEGbPz42o%2B9HxFuOgRteTIljdix8jgClRgdexWN9LGnVQe%2BhFW37VekZDcFYNFQOAyHriaWe4bzuwzv0dCrdZ2Na%2BP2vbpMOSPh9SoAARitCevNxQZWz5wWy3i7wuI4XdzjZdbGqW3SibQqh4c8UQz3s%2B9vVeip%2BQ6HrU93IsS7LyB%2BVi6Fspe3EhIXsAM8sFcgSvKSw%2FMDRVIkuMyY0QjV0byHrZnJ9ZwIsrSXwG0XuUFJCZGbxgZmKBwHdpVyINZTGAdQqk2HH8sfGdo4LvNPIHwyRjwyv2A6oxhEcKPosJwvDOTkGOngu2PwPAF%2Fv9akAuRIK2C%2BMyiQvMNGm7MEGOqUBPvN3sE6S2A9%2BXwfj0WeWvi4vCDwg5B4LRfmbMv77uNBPFphj47TIuE0%2BcQ7xorX3YKiPkn6G5Zas%2B7IppmLPhuffxLsCOAydKI9XJnfXW5bEv%2BGctR6TfBxhN219WmGbW6zGuXHrKQtuml9UI7DGxVJJwgpmnjJiFpRSIVhwvo0ansvyHQHgAbcUT9UUYV64j7FDiXlrR6DsKZ2chrCq6skneAqx&X-Amz-Signature=3d901ee5757e8bc150943b21021a47192d12611401613b56a7c656bf87eebd0f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5DUUF5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcXyPlVzgdHpLZIH91vpPKAz6KdS4Mpc6u47m8vBTTyAiEA%2FCtyS6vJBrsOzLW4OwiXKiV3EA44O6TSfWLW7%2BKJ57kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2jj0AvCLJ%2FNGk7MircA2dsT8HZ7t1LYzks4BaCjV6IHLMJ5OR3kk4u8e%2F6oikI6azWj4A%2BmCc5FJgGgT9aRZI2iLx%2BbghSvKXsGRTewGU5BAnvH9G7W0PzMK97A4hQkZTxTaHywhiG6Sm2MP1UhQ1ZzEnizQ%2BnKbOgzjw%2FjrLHS3A4Kmd1t9BWeq0zuL5N7jniaUop2CAb%2FhXZf3MPGdSxFodMvDP9d8EfPqZ0Y2LDN0DVu4mL6n%2BrpBFOIi774MdGWt7jxIgdwUI3kTVLa1mGlcU9YdZz13Kf%2Bfm8bkMRv4l6b%2BoVeY7G5gubwr6QmEGbPz42o%2B9HxFuOgRteTIljdix8jgClRgdexWN9LGnVQe%2BhFW37VekZDcFYNFQOAyHriaWe4bzuwzv0dCrdZ2Na%2BP2vbpMOSPh9SoAARitCevNxQZWz5wWy3i7wuI4XdzjZdbGqW3SibQqh4c8UQz3s%2B9vVeip%2BQ6HrU93IsS7LyB%2BVi6Fspe3EhIXsAM8sFcgSvKSw%2FMDRVIkuMyY0QjV0byHrZnJ9ZwIsrSXwG0XuUFJCZGbxgZmKBwHdpVyINZTGAdQqk2HH8sfGdo4LvNPIHwyRjwyv2A6oxhEcKPosJwvDOTkGOngu2PwPAF%2Fv9akAuRIK2C%2BMyiQvMNGm7MEGOqUBPvN3sE6S2A9%2BXwfj0WeWvi4vCDwg5B4LRfmbMv77uNBPFphj47TIuE0%2BcQ7xorX3YKiPkn6G5Zas%2B7IppmLPhuffxLsCOAydKI9XJnfXW5bEv%2BGctR6TfBxhN219WmGbW6zGuXHrKQtuml9UI7DGxVJJwgpmnjJiFpRSIVhwvo0ansvyHQHgAbcUT9UUYV64j7FDiXlrR6DsKZ2chrCq6skneAqx&X-Amz-Signature=b7383faad753322dcc48d3b0f2b6ee461d7a04a6e763abb4ad3c4deda83070dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5DUUF5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcXyPlVzgdHpLZIH91vpPKAz6KdS4Mpc6u47m8vBTTyAiEA%2FCtyS6vJBrsOzLW4OwiXKiV3EA44O6TSfWLW7%2BKJ57kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2jj0AvCLJ%2FNGk7MircA2dsT8HZ7t1LYzks4BaCjV6IHLMJ5OR3kk4u8e%2F6oikI6azWj4A%2BmCc5FJgGgT9aRZI2iLx%2BbghSvKXsGRTewGU5BAnvH9G7W0PzMK97A4hQkZTxTaHywhiG6Sm2MP1UhQ1ZzEnizQ%2BnKbOgzjw%2FjrLHS3A4Kmd1t9BWeq0zuL5N7jniaUop2CAb%2FhXZf3MPGdSxFodMvDP9d8EfPqZ0Y2LDN0DVu4mL6n%2BrpBFOIi774MdGWt7jxIgdwUI3kTVLa1mGlcU9YdZz13Kf%2Bfm8bkMRv4l6b%2BoVeY7G5gubwr6QmEGbPz42o%2B9HxFuOgRteTIljdix8jgClRgdexWN9LGnVQe%2BhFW37VekZDcFYNFQOAyHriaWe4bzuwzv0dCrdZ2Na%2BP2vbpMOSPh9SoAARitCevNxQZWz5wWy3i7wuI4XdzjZdbGqW3SibQqh4c8UQz3s%2B9vVeip%2BQ6HrU93IsS7LyB%2BVi6Fspe3EhIXsAM8sFcgSvKSw%2FMDRVIkuMyY0QjV0byHrZnJ9ZwIsrSXwG0XuUFJCZGbxgZmKBwHdpVyINZTGAdQqk2HH8sfGdo4LvNPIHwyRjwyv2A6oxhEcKPosJwvDOTkGOngu2PwPAF%2Fv9akAuRIK2C%2BMyiQvMNGm7MEGOqUBPvN3sE6S2A9%2BXwfj0WeWvi4vCDwg5B4LRfmbMv77uNBPFphj47TIuE0%2BcQ7xorX3YKiPkn6G5Zas%2B7IppmLPhuffxLsCOAydKI9XJnfXW5bEv%2BGctR6TfBxhN219WmGbW6zGuXHrKQtuml9UI7DGxVJJwgpmnjJiFpRSIVhwvo0ansvyHQHgAbcUT9UUYV64j7FDiXlrR6DsKZ2chrCq6skneAqx&X-Amz-Signature=0534164195a88f18b0811e8031f498f9b8f7d7311e2580699a91f95991253cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GN5Q2YE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmrTUviSxB2fnaD68b6oQU9RjWPnWV1YvODK%2F%2BlOnhsAiEAth0T5JFescemyhHZLpL5GEH2T5%2FtdM8GWngy63v2X5AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJi4nMTUpeV817BZircA5xAmP77xQW19OQ8%2BmI3JfXB81qQm4v5g6%2Fxgmx2Ck0Qxwj1pJA0VOpeGRyMDxpFQrUNVQ5GYARg3H3asY%2FtA%2BPLuNresyCKSYLNHe06qzd2buxGNantpvNNSGYzZJ7NYMsOPo57Om1bj7XbETaPt44xUY3TBam3DjV4ihJN2GrpVfDsyxmG%2FYTKwOT%2BwW%2BJeb9SKt8ZaISud3bG8HM7qEJrgCY0BNkmszAtsPgceGXbIpzthMEEAB7kvyhunD2p5he6QGtVlHxPKSyIDRxjZWOZdH9iE7zkLwWtxePo3CtO%2BCtEQgZ%2BtvKopYHx6ROc7a8Xr%2F6hZ3oh8wH7MHRXHDni%2BvBd9Z2kP6QjFKcoIBqi5HtYHiWr2SPS3QqDc%2BiFL3xTpy%2FOC3RutV2yf4rEMVgWzfoFZZH1XW3GTji50koSeqFufwHLSn4Urfie8%2BSKbc9nkpFo5a%2BlnQphA8m3cvwAZe57EmXQDLjyLW6qHyXV%2BwxAmZSkPPOJiER5iIBWs4zpKH4kevvESdIrcwAqgFsB%2BNZ%2BY8w5ckXrk258QqFg7f4Qslyn6UYCMVjHU%2FYAIkHR1U2VWfLiey%2FP283q9FkJqTZYVXK7UbMe3xMCv1LTo7%2FubApDiJKO5PngMLf57MEGOqUBp1i6atKU5crlFYfCWJJtLc1%2Fi9uMI28c8Dh0zRfkFUPYLlabgyeA1Zpjf2TqLEPIDBbHFLQ3EG56JtW%2Bqr999V%2FzE58NGzYy%2Fc7HZvJ2v0iCNVCeRDWw1TTJOyamHg7CJ85ICdJIsHXmagaLHo801auo4Iz1VE7I32rdjeYkaSHqHzNWSPhWP7kE0fUd4mhtZI4bOpUjrE9lSta41GpzF2e9%2BlUJ&X-Amz-Signature=19d005ab6e8c25081d598a076cad307d481bcdea4f8c7ef5e6676996d75d76c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFBU3M6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH7j3ZbazwYhNJ%2FaU381r2QXJt0ncB8klb3aw2lMDZZwIhAOGgcTOG2Ub0loB9QgToGppEmhj25vCiXcNxzKK5W8FmKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qXeLLqaRV33vMEIq3AMqdMAKHhyZu8w67Hoy29ZeJo%2B28Bhg4A32l8ihYO30ck%2BZ6zIluj8vS9iedLn04iN18nWJtq8fFxLNiBJrdGn4BKNQtH2TqTcBqfdXY0y2NJVfLZzIagXBf2vvXp8xZYFbnQUpK39WHP223WGboLI8qTjPSnbQfi9fKq6uiXT2Mx9u%2Fol%2B5rdfBs%2FSDdZMSqmkSGgC8zTRVZCWUyxq22iJEq29lBdl%2FQJdGpo3fiJpubcoc%2FDuyqD8RCwQ2sS63vaCRN5T5CaJL5Z6wCbJOGxATujdf2%2FXOq4Hx0aq%2BtCh3oThPwtXj6xorYzjr3gsRnM0uQIVQbOY1NlUpiSb6Nx6RV%2BfgHBA2b2t0IHbQdpLRzXDE6%2FCQSPt%2FzIEKpq5ns7IoyWudlr0eV8EUP7nfLJjopbA2JZTW1%2FloJkJ7V%2BeSWwk1AgP6pQi9GtBPoZF9o0bayfDfIcdq00ejBov2RXloe7LLSb1bWLwrtmQld3l%2BCA9UGDdNsF%2Bj6z9QV5uznrg15rZdL7C5QRQn%2FDHICwvKGNofnqZnoR1e5xBXSGhtWPMEJIqIsAzsGbp0olW5PIsJ20bQzeJvZo9qaayHBItDRSkNrJb4oR8c5PTNLvM40nMYS2Omg7pFR7nDzCCqOzBBjqkAYtRuQQVopU7%2B%2BurioeBBE09nrx16ZaVOyg1uSdx8ZHLFJMa1yOMG4rurDdD1m0%2FPaJ6I8lE0wC6a%2F9tFFShh0LmPJqNnyNidmvKmM%2B1iMenTshM6LwKckP2xh0qHThi2zfdZG9VSg2OgNmnkEmMvNgqj2KDjMMwDp20dtTysew36ViX4Yl0DnPHTNnQpfTdYEjp7vzw%2Fp%2Fyz7QHakGyijlg%2FLtt&X-Amz-Signature=ecab005ea692b2a2ed416202c8fcfa9d15f19af42ae857a7d94252614409a4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5DUUF5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcXyPlVzgdHpLZIH91vpPKAz6KdS4Mpc6u47m8vBTTyAiEA%2FCtyS6vJBrsOzLW4OwiXKiV3EA44O6TSfWLW7%2BKJ57kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2jj0AvCLJ%2FNGk7MircA2dsT8HZ7t1LYzks4BaCjV6IHLMJ5OR3kk4u8e%2F6oikI6azWj4A%2BmCc5FJgGgT9aRZI2iLx%2BbghSvKXsGRTewGU5BAnvH9G7W0PzMK97A4hQkZTxTaHywhiG6Sm2MP1UhQ1ZzEnizQ%2BnKbOgzjw%2FjrLHS3A4Kmd1t9BWeq0zuL5N7jniaUop2CAb%2FhXZf3MPGdSxFodMvDP9d8EfPqZ0Y2LDN0DVu4mL6n%2BrpBFOIi774MdGWt7jxIgdwUI3kTVLa1mGlcU9YdZz13Kf%2Bfm8bkMRv4l6b%2BoVeY7G5gubwr6QmEGbPz42o%2B9HxFuOgRteTIljdix8jgClRgdexWN9LGnVQe%2BhFW37VekZDcFYNFQOAyHriaWe4bzuwzv0dCrdZ2Na%2BP2vbpMOSPh9SoAARitCevNxQZWz5wWy3i7wuI4XdzjZdbGqW3SibQqh4c8UQz3s%2B9vVeip%2BQ6HrU93IsS7LyB%2BVi6Fspe3EhIXsAM8sFcgSvKSw%2FMDRVIkuMyY0QjV0byHrZnJ9ZwIsrSXwG0XuUFJCZGbxgZmKBwHdpVyINZTGAdQqk2HH8sfGdo4LvNPIHwyRjwyv2A6oxhEcKPosJwvDOTkGOngu2PwPAF%2Fv9akAuRIK2C%2BMyiQvMNGm7MEGOqUBPvN3sE6S2A9%2BXwfj0WeWvi4vCDwg5B4LRfmbMv77uNBPFphj47TIuE0%2BcQ7xorX3YKiPkn6G5Zas%2B7IppmLPhuffxLsCOAydKI9XJnfXW5bEv%2BGctR6TfBxhN219WmGbW6zGuXHrKQtuml9UI7DGxVJJwgpmnjJiFpRSIVhwvo0ansvyHQHgAbcUT9UUYV64j7FDiXlrR6DsKZ2chrCq6skneAqx&X-Amz-Signature=62f5dee4a9cc49152b9c95a94241f91971270e69043dd11cb8ab3cdc5e3fa59a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
