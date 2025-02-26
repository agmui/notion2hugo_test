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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZYWIFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHTwIJ7czFalbOVtGVSLuWap7xo9s%2FIe8CPrtkmM2V8uAiEAiC1GS0yL84wYPKDVMxHCd7mpCMqlso%2B%2BQdy56dwpVMQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD0Tijvw5TSak1z2bCrcA3wltCfaVLy%2BXm82zmYxxobLaXDATgRBzSM%2FMtTYfsJS%2FQLAREDZbDPxjMBlYX9cdiVWBJ%2BHusJDwcYc92EExPIOBVm9G0CL3QKU28uxWr7vWT1RvABLJYasduL%2FAXpkLVREPKvuE9a6kJrGd4n4idBElyWA5l4V1VVZdK9h3HOAgvTnH46m2O32WvooW0KykjlvfSQv4VXgeZ1ZrJEyHT4Dxja9g9l5eFUmgbH0dvq4zL2sTZrvGo3ro5p5oki%2BdVQgIqJmM1jdESu26Nvv8cz4xbLXMkS57Y5oZ3FyqtsbW69n1ebRUo0rrZEge9zdXoUGUFIYuEHeTGEwRDGApZV0gTjhLOGOs%2FFC9RLgrCokeuN0EcbCef7%2FRUoI7dyfXM2icNfKpEVNbSPcdTZ9xDXNciEGxNjn%2Bk7W0%2FaaAM5LF4nOkX67mwCEwQxbTIjFMc%2FmXbAZhGh8nCyM7NTbbGva1z68H75H1BA3xWxrYYYeBl%2Bgy0iXuHcMlHhe2rM29YyoS9%2BjURZJCrTjVN89MvreGLzXBF0t74dLPMlXb2%2BXZ2Vu%2F4M2OzyJZIy2hss84R%2B7D8Hbg%2BEOg4oblKP6%2Fz7AvbwP5QcHcEMFEVnluGopA8wO3LIOR1dku2TmMOuA%2Fr0GOqUBJaDJUAi%2FQ%2FElyN0JSSyfD2TmW51d5prR%2Fwiaw5kJVvqLtcec4l8Mo9ls9bm5Pmf2s2OdJfFGry76irmv6pZIOv12Fpyisy%2BkhnDkcCD8CSAt38Y4VvC16kKpRDYujiM4VqLxGzcLQfDxvjXncBjQOqOoL0UhN2ENKkehmkunnUt%2FN8xxZbr%2F%2BRCHKYOUOctTEoWbxkTFc0kuwgrTyyLl7OvE0qo9&X-Amz-Signature=5e27b25666a6ba7dd5dc472b469988d8315a2707562cc7619cdc4e5967ca67df&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZYWIFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHTwIJ7czFalbOVtGVSLuWap7xo9s%2FIe8CPrtkmM2V8uAiEAiC1GS0yL84wYPKDVMxHCd7mpCMqlso%2B%2BQdy56dwpVMQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD0Tijvw5TSak1z2bCrcA3wltCfaVLy%2BXm82zmYxxobLaXDATgRBzSM%2FMtTYfsJS%2FQLAREDZbDPxjMBlYX9cdiVWBJ%2BHusJDwcYc92EExPIOBVm9G0CL3QKU28uxWr7vWT1RvABLJYasduL%2FAXpkLVREPKvuE9a6kJrGd4n4idBElyWA5l4V1VVZdK9h3HOAgvTnH46m2O32WvooW0KykjlvfSQv4VXgeZ1ZrJEyHT4Dxja9g9l5eFUmgbH0dvq4zL2sTZrvGo3ro5p5oki%2BdVQgIqJmM1jdESu26Nvv8cz4xbLXMkS57Y5oZ3FyqtsbW69n1ebRUo0rrZEge9zdXoUGUFIYuEHeTGEwRDGApZV0gTjhLOGOs%2FFC9RLgrCokeuN0EcbCef7%2FRUoI7dyfXM2icNfKpEVNbSPcdTZ9xDXNciEGxNjn%2Bk7W0%2FaaAM5LF4nOkX67mwCEwQxbTIjFMc%2FmXbAZhGh8nCyM7NTbbGva1z68H75H1BA3xWxrYYYeBl%2Bgy0iXuHcMlHhe2rM29YyoS9%2BjURZJCrTjVN89MvreGLzXBF0t74dLPMlXb2%2BXZ2Vu%2F4M2OzyJZIy2hss84R%2B7D8Hbg%2BEOg4oblKP6%2Fz7AvbwP5QcHcEMFEVnluGopA8wO3LIOR1dku2TmMOuA%2Fr0GOqUBJaDJUAi%2FQ%2FElyN0JSSyfD2TmW51d5prR%2Fwiaw5kJVvqLtcec4l8Mo9ls9bm5Pmf2s2OdJfFGry76irmv6pZIOv12Fpyisy%2BkhnDkcCD8CSAt38Y4VvC16kKpRDYujiM4VqLxGzcLQfDxvjXncBjQOqOoL0UhN2ENKkehmkunnUt%2FN8xxZbr%2F%2BRCHKYOUOctTEoWbxkTFc0kuwgrTyyLl7OvE0qo9&X-Amz-Signature=aa07e29997b80dcd2215ce41eea1f121b3b263bca9e0e5c2f8d2f9331201107e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6GX5BTJ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCQCivRYSagTp6ufIKIzgGhIy9tXNxgyuj79bQsdp64MQIgAv6xMMg0wa1jVjDBbv9upGHRFeUyKR8pvnY7BIwdVwAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNy%2FG2iUoeNazw8%2FircA1NSfOOdkZ5QeAJasHgZp0E8iIvS35VVfWdodzLgqGeshOMRsSAl65xnvKV1BC5pIyr6q4sU%2FQ5hwUM20JQmUgRXroQvB8Ebc8D53s2pNY2Db15FDxDZrrPUa72nb8p4diwTPvJUD0qPg%2BO6%2BBJqNm96qR2F6%2B73UeIfl5mvOgl3P1H3bLDQ1dAMmZShcFutM7SeuQMdudzg3Hv78nT8kKO1MVGR8PwAwMjAy8DPJKRCyiyP8T5hTKuns%2FeTnq%2BVfSHOpW2mJ%2Bum6b%2FBpaj%2FrJoRrSkjppCvCejMXY95ys%2B3IshdOiMJ4F8z9oKxozfdu3o1TcgJDlHqdUxMksIC%2Bv4arHPK4PFYwK4StRq4tCsYkMeRDRJz6Wm7Uxbx563BbPuXFP4Qa3P2RYprdRoOqx3YZvR4%2Bn%2BSaXsMFmN2XeNvHTFhR129R2KABlmU3522PHeZWkOpEDe0l5B4VpBYnVfyX8arA9XvyQkgMFJlBtUbaGMmQNnj2C4wr4gmUor02P%2BoMiESAzhRH9wyqnpK8qnO37GoxVtFi2OUqLor484bUah1xFJ5Uk3o5qF7zcN7AQhY0h82Kg2WO%2FP%2Fk9%2Bd9Og%2F1%2F0c9UbVZgEh4c9PqqgucoBbiKs3S0tJz7SAMNqA%2Fr0GOqUBVT%2FKrnywJJuM9tK15%2F4sZ1tpO2PV7kBGUVBLYkX4fpqogn0ECqJUmw%2FuA%2FEJ85vyQlDj0TKgWVCHJPkGN4HdyC308jgiD%2BmkFH8PUXq3oNrufjF4dxOk%2FzLzZLsME%2F3sxeuSGIpWKKiD2VewFyBs%2BMdlXSkMkOs6vYTf2nokWQopRxRcrYQHIXC0BjSmCAk1o1DrRIfthy%2F7dE0L4LiIyLniMTyd&X-Amz-Signature=4d050978f99ddb07c2e667292ef7d7056cd9ec12f91398eb999a1f1e6e83296c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJXWJDF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDl1f4cngq9HkpKXTP4uTNd6PZxdi%2BFSy12%2FWwjVGls8AIhAIR0jvP%2FVAD%2FxlumQT4nOtahfR9p1cpfyIJGu0JD3rcOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzISeBe43%2BQHNws4jwq3AOjfeitotkZ3pUTcnpADm6reM9b7ebriQIxgfZPaeODI04ElbCW9YXCGV3aTqK05oybIb2pJtnh67%2BgjJ5oIjybeydv2%2F221ROQtBb5Vo55%2Fto5E9bgX2ULTNWgz%2FPuFlH%2FWNnhIN8Zpdr%2BsIbVsd08rcqQ12WPnFL%2BMRA5EKr1o5P0FJO%2BVJD23Tdny%2BKbtMNhiTu%2Bsxv%2B%2FPdZpD0JDyIyF3xaPGMlkL5PU8vcLJlE28wo7nU0A%2FDOBfgQijNcL3xLOFOEz7bmxV4KwpDdwPOM1Z3i7fXJ40eDwcscIuEUHKlxYL81ltR9MziEFmolB84fRKhi5ASNx1MvUHca40flQ5UOwlfiidkm%2F12X7WDHs5AgCQhE%2BlVysBZRWNoIEEk1BS336KzEzbdwOvWbw4NWOUQIAV4tDFIUuImbbiabnIsiDV4TnbgWdKf9T5C3fmpoaTkw%2F%2F11kCsEdlfSSL0lhaMNBxoy67OUKf%2Fr8ReY2XH663ZcQg2toewKiNmGiGQwoRfKwNLpFO5si3CUMdMvAHUESoCll5RjEg2lBF66VgQNg8KTM9jC8KTrA496p14hdFfuwVXLqAAQFi8%2BJX86A04wYUuQ5XXtHyyS5gIfMyQGc6al%2BjYKqUFWGTCOgf69BjqkAYHSwKoO5Jf0j7v%2FOoJ%2Fnv27qNMgGY4BeFrPxGaX0x0DbqJsNExrzMErhTLKzN1nCi3y7jETCJZe9uaqyekLCCN9%2FeYjGWsKTfmegO%2FVxsaKJ6Gc7HxupNz3YxS5PBEG9YC%2F5y5Srze7uffK2JnE39tXivg1V8L%2F%2BUEI3Nt6xZ3ry1wrxHlQZtfwn1EJcYnzenrj7l19NknBwtT2kGKOt4XHUVDX&X-Amz-Signature=c71b73ae27b3c5397eeb4187aff24b8e0adb4c6dc609561cfbf0b06053164913&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZYWIFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHTwIJ7czFalbOVtGVSLuWap7xo9s%2FIe8CPrtkmM2V8uAiEAiC1GS0yL84wYPKDVMxHCd7mpCMqlso%2B%2BQdy56dwpVMQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD0Tijvw5TSak1z2bCrcA3wltCfaVLy%2BXm82zmYxxobLaXDATgRBzSM%2FMtTYfsJS%2FQLAREDZbDPxjMBlYX9cdiVWBJ%2BHusJDwcYc92EExPIOBVm9G0CL3QKU28uxWr7vWT1RvABLJYasduL%2FAXpkLVREPKvuE9a6kJrGd4n4idBElyWA5l4V1VVZdK9h3HOAgvTnH46m2O32WvooW0KykjlvfSQv4VXgeZ1ZrJEyHT4Dxja9g9l5eFUmgbH0dvq4zL2sTZrvGo3ro5p5oki%2BdVQgIqJmM1jdESu26Nvv8cz4xbLXMkS57Y5oZ3FyqtsbW69n1ebRUo0rrZEge9zdXoUGUFIYuEHeTGEwRDGApZV0gTjhLOGOs%2FFC9RLgrCokeuN0EcbCef7%2FRUoI7dyfXM2icNfKpEVNbSPcdTZ9xDXNciEGxNjn%2Bk7W0%2FaaAM5LF4nOkX67mwCEwQxbTIjFMc%2FmXbAZhGh8nCyM7NTbbGva1z68H75H1BA3xWxrYYYeBl%2Bgy0iXuHcMlHhe2rM29YyoS9%2BjURZJCrTjVN89MvreGLzXBF0t74dLPMlXb2%2BXZ2Vu%2F4M2OzyJZIy2hss84R%2B7D8Hbg%2BEOg4oblKP6%2Fz7AvbwP5QcHcEMFEVnluGopA8wO3LIOR1dku2TmMOuA%2Fr0GOqUBJaDJUAi%2FQ%2FElyN0JSSyfD2TmW51d5prR%2Fwiaw5kJVvqLtcec4l8Mo9ls9bm5Pmf2s2OdJfFGry76irmv6pZIOv12Fpyisy%2BkhnDkcCD8CSAt38Y4VvC16kKpRDYujiM4VqLxGzcLQfDxvjXncBjQOqOoL0UhN2ENKkehmkunnUt%2FN8xxZbr%2F%2BRCHKYOUOctTEoWbxkTFc0kuwgrTyyLl7OvE0qo9&X-Amz-Signature=ca8fca2fc444892df1153630352255ba896690c9b4cb532dba99e9d9bdd2d843&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
