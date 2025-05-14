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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCRJFQQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFPIAiE8KHj2Pvh59rAIGAPV%2BK9c1fuWiQZ8x1TvP%2FQgAiEAuMIdLh4AbACjCy%2FQ6gt6hScE1Bfk%2F6zB7dON91RT8Xkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGMxrikxV4kEZqEpBSrcA7aqNwhxpuAXnV1qRMDqMVo2LfA%2BudHAz36Vzt%2Fd%2F6YbQ8CrLjDe%2FFTkYN2XbFMx69nn9wgEvhAq6GG4BGjnuD4T49CYIYhqSPgvYMA%2BOd722kNjOgN%2Fh56a301cu%2ByCfNS%2FhsMhUfc4vwc1FjzQ%2BzLeK0OBH1jC3JHxfsgKhvsjO5pRuqa%2F2StwIKu1%2F5yjEvfEJfZarFQ4TznIMEKgohpCCln%2FkVNWUWedXp1jHP3OOR%2FzH%2FmVnGPJwU%2BI2h0zU2LxcP41Ir%2Bp3IgflqRPb2j08W%2Bo%2BdRfY8CAGavMKmozY5FjOCbpsS%2FxHOHi2fohGcKbt2U6ReP1pGaoMZB2FAzYESd%2F8YF9mxoRYrXtvsLOkEeubmMZrnr61fExkfh7djwBg7Yr7X%2Fz9%2BnFymOOstg5ZoBE4q9AhAu39Y0IbORsM2uQ2a2QGaSG%2Bw0jPVsK6E%2FZUJ3Q%2BwvMu5M8AVfhmgRKa%2Bj3l%2BUSD0pnPUnH1jbXumPPNrtnR0qVNYbVUfkSdh33wQwgthacEyCNFZPWFV%2BsCM%2FDWBWDw2T3aNs0SeFvC%2FRSGOaWrHhIKR02xev%2FZTWmxWCufp18NyNheuoQqnQqOMHL8qhkcrLGjPxvarCCItAyDeXl20ecB%2BsxMMvQk8EGOqUBX4UqORBq296JpG4oMNQ9xj%2Fi%2ByZXBW7i%2F9Z4XeWlJCBUCuprRFk1oZ2r2O3w9EirwPKgc%2FLOw5niSrIb5uTKQKP%2FEwvVoVlkBt7%2BCaH88y8N%2FF11YpgvSkF3pAYjSxXq%2BajLfnyzQXBRgQ7uN7kFc3zU%2B%2Fi%2BScm%2Bel6QSqn%2B2uhR%2Bpl6LucZ%2FNge9NtP2OKr1vx%2BP96mt1VXbYq%2F8R4asId7dncp&X-Amz-Signature=4ace9f4b2d9a69e58eaaf9194f8da1fcbfa597c777cb59571bf666d4f51f2374&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCRJFQQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFPIAiE8KHj2Pvh59rAIGAPV%2BK9c1fuWiQZ8x1TvP%2FQgAiEAuMIdLh4AbACjCy%2FQ6gt6hScE1Bfk%2F6zB7dON91RT8Xkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGMxrikxV4kEZqEpBSrcA7aqNwhxpuAXnV1qRMDqMVo2LfA%2BudHAz36Vzt%2Fd%2F6YbQ8CrLjDe%2FFTkYN2XbFMx69nn9wgEvhAq6GG4BGjnuD4T49CYIYhqSPgvYMA%2BOd722kNjOgN%2Fh56a301cu%2ByCfNS%2FhsMhUfc4vwc1FjzQ%2BzLeK0OBH1jC3JHxfsgKhvsjO5pRuqa%2F2StwIKu1%2F5yjEvfEJfZarFQ4TznIMEKgohpCCln%2FkVNWUWedXp1jHP3OOR%2FzH%2FmVnGPJwU%2BI2h0zU2LxcP41Ir%2Bp3IgflqRPb2j08W%2Bo%2BdRfY8CAGavMKmozY5FjOCbpsS%2FxHOHi2fohGcKbt2U6ReP1pGaoMZB2FAzYESd%2F8YF9mxoRYrXtvsLOkEeubmMZrnr61fExkfh7djwBg7Yr7X%2Fz9%2BnFymOOstg5ZoBE4q9AhAu39Y0IbORsM2uQ2a2QGaSG%2Bw0jPVsK6E%2FZUJ3Q%2BwvMu5M8AVfhmgRKa%2Bj3l%2BUSD0pnPUnH1jbXumPPNrtnR0qVNYbVUfkSdh33wQwgthacEyCNFZPWFV%2BsCM%2FDWBWDw2T3aNs0SeFvC%2FRSGOaWrHhIKR02xev%2FZTWmxWCufp18NyNheuoQqnQqOMHL8qhkcrLGjPxvarCCItAyDeXl20ecB%2BsxMMvQk8EGOqUBX4UqORBq296JpG4oMNQ9xj%2Fi%2ByZXBW7i%2F9Z4XeWlJCBUCuprRFk1oZ2r2O3w9EirwPKgc%2FLOw5niSrIb5uTKQKP%2FEwvVoVlkBt7%2BCaH88y8N%2FF11YpgvSkF3pAYjSxXq%2BajLfnyzQXBRgQ7uN7kFc3zU%2B%2Fi%2BScm%2Bel6QSqn%2B2uhR%2Bpl6LucZ%2FNge9NtP2OKr1vx%2BP96mt1VXbYq%2F8R4asId7dncp&X-Amz-Signature=85213466e41b147fe3adbc4c543c9c8ecaabfece1080e24c0463bcab176ab245&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCRJFQQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFPIAiE8KHj2Pvh59rAIGAPV%2BK9c1fuWiQZ8x1TvP%2FQgAiEAuMIdLh4AbACjCy%2FQ6gt6hScE1Bfk%2F6zB7dON91RT8Xkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGMxrikxV4kEZqEpBSrcA7aqNwhxpuAXnV1qRMDqMVo2LfA%2BudHAz36Vzt%2Fd%2F6YbQ8CrLjDe%2FFTkYN2XbFMx69nn9wgEvhAq6GG4BGjnuD4T49CYIYhqSPgvYMA%2BOd722kNjOgN%2Fh56a301cu%2ByCfNS%2FhsMhUfc4vwc1FjzQ%2BzLeK0OBH1jC3JHxfsgKhvsjO5pRuqa%2F2StwIKu1%2F5yjEvfEJfZarFQ4TznIMEKgohpCCln%2FkVNWUWedXp1jHP3OOR%2FzH%2FmVnGPJwU%2BI2h0zU2LxcP41Ir%2Bp3IgflqRPb2j08W%2Bo%2BdRfY8CAGavMKmozY5FjOCbpsS%2FxHOHi2fohGcKbt2U6ReP1pGaoMZB2FAzYESd%2F8YF9mxoRYrXtvsLOkEeubmMZrnr61fExkfh7djwBg7Yr7X%2Fz9%2BnFymOOstg5ZoBE4q9AhAu39Y0IbORsM2uQ2a2QGaSG%2Bw0jPVsK6E%2FZUJ3Q%2BwvMu5M8AVfhmgRKa%2Bj3l%2BUSD0pnPUnH1jbXumPPNrtnR0qVNYbVUfkSdh33wQwgthacEyCNFZPWFV%2BsCM%2FDWBWDw2T3aNs0SeFvC%2FRSGOaWrHhIKR02xev%2FZTWmxWCufp18NyNheuoQqnQqOMHL8qhkcrLGjPxvarCCItAyDeXl20ecB%2BsxMMvQk8EGOqUBX4UqORBq296JpG4oMNQ9xj%2Fi%2ByZXBW7i%2F9Z4XeWlJCBUCuprRFk1oZ2r2O3w9EirwPKgc%2FLOw5niSrIb5uTKQKP%2FEwvVoVlkBt7%2BCaH88y8N%2FF11YpgvSkF3pAYjSxXq%2BajLfnyzQXBRgQ7uN7kFc3zU%2B%2Fi%2BScm%2Bel6QSqn%2B2uhR%2Bpl6LucZ%2FNge9NtP2OKr1vx%2BP96mt1VXbYq%2F8R4asId7dncp&X-Amz-Signature=377a23d92d386fb2f65cfd83a95f68c3a731e059eb3d0d0150b9eebe885b7af0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2O7BJ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDKsUUHpY2dgli333V8xA4%2Fd%2BqEeL%2FNVPjidNqjQHxqRgIhAL6PYify4kVoSq%2F%2B4pvXYK3jwKZHhbRp9PxTcHxQRPJMKv8DCBwQABoMNjM3NDIzMTgzODA1IgwoA52sc5MxBvN%2F8Ugq3AP3sR2lCVktw5AeU4cPyCpps6SVs2Ft%2FpYZk95yFhwnRNEljAvK0tw2y9yHQ8JtVdl2pBks7kgjRYBogr3eupIxyum5OsglReA3P2FqbqJSJgpkUwurYCtOF%2FX1IH5u9oDEIp9ovkerDduAfQsPyZeIGuhP0EfNdBG6NWoBFd42wdIY5D%2FHRiR%2FHUAwl1VOj30b7gJjMpjqyeo3gPvIfJa0URpb2Qh9FP%2FoydSef%2FeOjd0Z2BwPN57GavzTEpNb2arXYDegSJKg1r7Cm9%2BJIcJfv1S24TomeEriqUUTQl%2FIznE%2Fr4RQmjxaci%2FtIJRJkVsRTP2K7V9ukRl9wnIAHkL6JPRnRIVPIFMNjkSmsvcCHelq1jJwm6e0HQUUhsagN8EMml7EM2uPlGS6Sril86B0vmtcdlGy5yzUvxvVbioBxSe1%2Fpdi0MnioDpENOfsO5bAxFIlN113KYALyfD60og35weyC0MmzF6R%2FrrgkUqsnV9VhjIyofFxC%2BiYfsnfUumIhaEAJex7EOAeZZXV0JMWoPlPWpfGEADp5sKR2oBu79JGg2TdQu5dQBiMeO4ulSXC6ns%2FMPQxO0DB7mYNtvnYwAqZrxgpcPYtzVYtdSt9A2MDqCFnRBXyyokWdDDOz5PBBjqkAeAK6JjBEmdKkJymnLFRGp8nWQNxmr9zjvxVMrHOnYBFyg6AU8AyldfTXfJ3EqVUlUVvOEeQaNZ0KPNvCX7egGGdhSelgiLY6r6BLVlsn54Crg7qfu4nuGF18ptM%2BMlez2t0gSiM1ZNuKV%2FLpojdKA3pIWlW%2BxHdUsqQilZL%2FgBC5yNhu%2FUchcJeLNdC4XoMCwBM%2BiCLqW6%2BBmutpLoVBZ20JPTA&X-Amz-Signature=e7f1a44b75f859d6a98fdc1b09bb93035ef600bcd82af7462f83acca3d0ba2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD2SLEEW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC8hLePmd%2Fa6m9AGyekAms0%2Bm6sZhtnuIJOsqPomvgzewIhANHnsP8hzHAz0nfFAFVFkVAC6UbBWPOKllwN7ENe5eG3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgzvWSuNw9Co85s2VOwq3ANRqPTk0ap6OF18dGcqtEMOla1Y2J26UWmhrlepVAtIIJGiPOweH5jkSOILZFXeGTnsNFgSUWQ3QBa1axiNDz1pgYnPhnAKMxKvGUo29phmTtiPxnqo4p2PRucwkyWatF0F885mAO%2For8AxFcg5Q%2Bqhp6qEUsEEiTz0MJ8zvyHximcs52qyq1Icd9MBS%2FXMeTTfJMI3M%2FpR6lCs9ImrLW64M9rGyDi3CxUCoHIinrTmZmh%2FUcuj7fDSfjYd8MJMjpGmC3UtNMxl5nw1c867yKTK%2Fk%2Bq6sjGCNB9kTmU5kc2tRxCtYL8gBvIcmHaVcjt2lR3mzTnv1N2Gs25agJnq1d9IP%2BNT%2FvSF4ssygnbp1%2FTjaM3qIRKwFHmuvs34pL6nYleBjMMzIeDmz8kK6w6NmREthBC3yKJ6w7BZHCm%2BvabtuVlLkJ80JxZzTqldZ3gCCWieA36O%2BNktVoXZwJqqtwhkBJQV40GswKtMkUwU0p5P7G%2BtxLVEQIwmN%2FVeZ0ecC9h23gGqvrgniSOgLO59P8wIo7mFFi4SzuJQEWyvBuFxrFqr0woZNmeSpl8dseDl3JbZHM0iAmunQl1HSz9BNN3d%2FKgKYmrDskyivCEp7EBK78N56mJCz2aYVs%2FfDDBz5PBBjqkAY0fBg35dfyC6W%2BkSXVQBtWopGQZBIS2p8c1D6PXEcHXcHudP90grD9U4fOe2Uey7DMSSk7SAFsoD8NgBXtDAlWQcYVvFt9JdL6v6BDCOsI30sIzonNhD2tv16HKukx7uQ1imIQBNEpuDq3K9RGiQSjwmtOxzCJfJbsB6fBM4yn%2Bl2ccE6%2BFzv34JMi0N40KGDh8FVcH6dfye75H4me9LxsQEOpf&X-Amz-Signature=e2c6891b360d65314274ebf0bb71b3727d9ecedf2f03a895d638b77e375cf68a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCRJFQQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFPIAiE8KHj2Pvh59rAIGAPV%2BK9c1fuWiQZ8x1TvP%2FQgAiEAuMIdLh4AbACjCy%2FQ6gt6hScE1Bfk%2F6zB7dON91RT8Xkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGMxrikxV4kEZqEpBSrcA7aqNwhxpuAXnV1qRMDqMVo2LfA%2BudHAz36Vzt%2Fd%2F6YbQ8CrLjDe%2FFTkYN2XbFMx69nn9wgEvhAq6GG4BGjnuD4T49CYIYhqSPgvYMA%2BOd722kNjOgN%2Fh56a301cu%2ByCfNS%2FhsMhUfc4vwc1FjzQ%2BzLeK0OBH1jC3JHxfsgKhvsjO5pRuqa%2F2StwIKu1%2F5yjEvfEJfZarFQ4TznIMEKgohpCCln%2FkVNWUWedXp1jHP3OOR%2FzH%2FmVnGPJwU%2BI2h0zU2LxcP41Ir%2Bp3IgflqRPb2j08W%2Bo%2BdRfY8CAGavMKmozY5FjOCbpsS%2FxHOHi2fohGcKbt2U6ReP1pGaoMZB2FAzYESd%2F8YF9mxoRYrXtvsLOkEeubmMZrnr61fExkfh7djwBg7Yr7X%2Fz9%2BnFymOOstg5ZoBE4q9AhAu39Y0IbORsM2uQ2a2QGaSG%2Bw0jPVsK6E%2FZUJ3Q%2BwvMu5M8AVfhmgRKa%2Bj3l%2BUSD0pnPUnH1jbXumPPNrtnR0qVNYbVUfkSdh33wQwgthacEyCNFZPWFV%2BsCM%2FDWBWDw2T3aNs0SeFvC%2FRSGOaWrHhIKR02xev%2FZTWmxWCufp18NyNheuoQqnQqOMHL8qhkcrLGjPxvarCCItAyDeXl20ecB%2BsxMMvQk8EGOqUBX4UqORBq296JpG4oMNQ9xj%2Fi%2ByZXBW7i%2F9Z4XeWlJCBUCuprRFk1oZ2r2O3w9EirwPKgc%2FLOw5niSrIb5uTKQKP%2FEwvVoVlkBt7%2BCaH88y8N%2FF11YpgvSkF3pAYjSxXq%2BajLfnyzQXBRgQ7uN7kFc3zU%2B%2Fi%2BScm%2Bel6QSqn%2B2uhR%2Bpl6LucZ%2FNge9NtP2OKr1vx%2BP96mt1VXbYq%2F8R4asId7dncp&X-Amz-Signature=cbfb57af6e0516ed0f9f43cc945dd49dae802595786a4e2379f8d5fc1cfe5d94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
