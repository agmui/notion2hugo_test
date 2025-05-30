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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHRN52E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwgbiSZdkw8rq2Gnw7kodl%2Be5Y0q5KgGjM2pJqFRip8AiBtDZ7opRTZLtewk91XxlWRkyZwHT8s20jvlXOm985x8CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzW2tJvWVWpI7nLzCKtwDT9SIWLOQmvr19fuOTmexzPywPP1AYnj1QVRpCDf07wGTbWeCin2QtxtUKipPpj3Rw3%2BzW1pSG9nsgzJ4gtX%2FKy%2BNtFwW1nyKVAFPWpNCu0fSAz3bSLUa5HlrEH4y3y6%2BvY40r9Xrl0FMlrFPzWdAEL1gr%2FP9ZBvCfj3jDH5LUeNeeem8PoayF%2FueIYT0fWBVnzHSQCQJ55wgFkcH12OfAyGjKJjvo2bpDoiw4ZZmdF3m8%2Bd1tsqqx0VLonzH5evMJE5qg8O3ieik3EuZ5%2FGP77lo3dTFE6BKiu%2BRciZW2sJx2UwqzWanLPv592Z0Z9WGE732PTG33qEZeYkDG2PhmTML1h87JNgCksAx9ij6WiHE77F%2BXkW4eCwg%2BqttgYzUxSkZ1N8Xcc7NgtQiGlR%2BVxMh65XflglCBKpJbOotAR26P8HIRPqqh%2FzhuQInUNnHkpMbnXjsJdd1nobp%2FwzNq4jzGT7w7LbdzdqUBEp3svO6vgF9lak6ZmwITJdMf4Eox44YDICLCl0loWZExR4Z4OFZF3M0qJJXoroPT%2FyQ4s8xrWU9idB1dV8izE5PqYXTnPRE9cyx2wgUijB7eV2Kxk4VjLdTmzCNjARymncNDvqZ89M8Bmugt7sz0S0w18%2FmwQY6pgE2SyBVUupwnkdfgSaUZL44IJEVegfkrQLCkxy1qxd6fY3OZe5%2Btp2PcDS%2BaQ1LIY6XVc6%2B8Y6IxoZPMd03aYJQ16zJvM8pDYd6JH6zFQy94YvosDswpn3RMozact%2FPWQMgKdVM3HAOwf4VYzzSt4AE%2FxDsLlpO0PvkHR76DZ4nXbrcS5c0NeBkvcI33ZBCgGtEvvQdvSQpeaL7%2Bl%2BSCtGdQ0k0AmuG&X-Amz-Signature=58e325362664a51f670fe3ac1dbe0b92c2cdc81a9df74d2403946f2b495b13c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHRN52E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwgbiSZdkw8rq2Gnw7kodl%2Be5Y0q5KgGjM2pJqFRip8AiBtDZ7opRTZLtewk91XxlWRkyZwHT8s20jvlXOm985x8CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzW2tJvWVWpI7nLzCKtwDT9SIWLOQmvr19fuOTmexzPywPP1AYnj1QVRpCDf07wGTbWeCin2QtxtUKipPpj3Rw3%2BzW1pSG9nsgzJ4gtX%2FKy%2BNtFwW1nyKVAFPWpNCu0fSAz3bSLUa5HlrEH4y3y6%2BvY40r9Xrl0FMlrFPzWdAEL1gr%2FP9ZBvCfj3jDH5LUeNeeem8PoayF%2FueIYT0fWBVnzHSQCQJ55wgFkcH12OfAyGjKJjvo2bpDoiw4ZZmdF3m8%2Bd1tsqqx0VLonzH5evMJE5qg8O3ieik3EuZ5%2FGP77lo3dTFE6BKiu%2BRciZW2sJx2UwqzWanLPv592Z0Z9WGE732PTG33qEZeYkDG2PhmTML1h87JNgCksAx9ij6WiHE77F%2BXkW4eCwg%2BqttgYzUxSkZ1N8Xcc7NgtQiGlR%2BVxMh65XflglCBKpJbOotAR26P8HIRPqqh%2FzhuQInUNnHkpMbnXjsJdd1nobp%2FwzNq4jzGT7w7LbdzdqUBEp3svO6vgF9lak6ZmwITJdMf4Eox44YDICLCl0loWZExR4Z4OFZF3M0qJJXoroPT%2FyQ4s8xrWU9idB1dV8izE5PqYXTnPRE9cyx2wgUijB7eV2Kxk4VjLdTmzCNjARymncNDvqZ89M8Bmugt7sz0S0w18%2FmwQY6pgE2SyBVUupwnkdfgSaUZL44IJEVegfkrQLCkxy1qxd6fY3OZe5%2Btp2PcDS%2BaQ1LIY6XVc6%2B8Y6IxoZPMd03aYJQ16zJvM8pDYd6JH6zFQy94YvosDswpn3RMozact%2FPWQMgKdVM3HAOwf4VYzzSt4AE%2FxDsLlpO0PvkHR76DZ4nXbrcS5c0NeBkvcI33ZBCgGtEvvQdvSQpeaL7%2Bl%2BSCtGdQ0k0AmuG&X-Amz-Signature=86479507025073c9739184284740ffd96194a70f4512d08067f65740f99377d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHRN52E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwgbiSZdkw8rq2Gnw7kodl%2Be5Y0q5KgGjM2pJqFRip8AiBtDZ7opRTZLtewk91XxlWRkyZwHT8s20jvlXOm985x8CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzW2tJvWVWpI7nLzCKtwDT9SIWLOQmvr19fuOTmexzPywPP1AYnj1QVRpCDf07wGTbWeCin2QtxtUKipPpj3Rw3%2BzW1pSG9nsgzJ4gtX%2FKy%2BNtFwW1nyKVAFPWpNCu0fSAz3bSLUa5HlrEH4y3y6%2BvY40r9Xrl0FMlrFPzWdAEL1gr%2FP9ZBvCfj3jDH5LUeNeeem8PoayF%2FueIYT0fWBVnzHSQCQJ55wgFkcH12OfAyGjKJjvo2bpDoiw4ZZmdF3m8%2Bd1tsqqx0VLonzH5evMJE5qg8O3ieik3EuZ5%2FGP77lo3dTFE6BKiu%2BRciZW2sJx2UwqzWanLPv592Z0Z9WGE732PTG33qEZeYkDG2PhmTML1h87JNgCksAx9ij6WiHE77F%2BXkW4eCwg%2BqttgYzUxSkZ1N8Xcc7NgtQiGlR%2BVxMh65XflglCBKpJbOotAR26P8HIRPqqh%2FzhuQInUNnHkpMbnXjsJdd1nobp%2FwzNq4jzGT7w7LbdzdqUBEp3svO6vgF9lak6ZmwITJdMf4Eox44YDICLCl0loWZExR4Z4OFZF3M0qJJXoroPT%2FyQ4s8xrWU9idB1dV8izE5PqYXTnPRE9cyx2wgUijB7eV2Kxk4VjLdTmzCNjARymncNDvqZ89M8Bmugt7sz0S0w18%2FmwQY6pgE2SyBVUupwnkdfgSaUZL44IJEVegfkrQLCkxy1qxd6fY3OZe5%2Btp2PcDS%2BaQ1LIY6XVc6%2B8Y6IxoZPMd03aYJQ16zJvM8pDYd6JH6zFQy94YvosDswpn3RMozact%2FPWQMgKdVM3HAOwf4VYzzSt4AE%2FxDsLlpO0PvkHR76DZ4nXbrcS5c0NeBkvcI33ZBCgGtEvvQdvSQpeaL7%2Bl%2BSCtGdQ0k0AmuG&X-Amz-Signature=d21a18190457a7427fa4ef7569707451da0eb00ded494704e0087e7a9401fd41&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KR26OAF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9ctyNVgl5d3be%2FccRSSOsm8nXVlYRB184Po2aPNGIhAiEA71sS66RngcKcxnOwRqfN7bbgnhDClxrOWFrgNCJoSroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc%2BQBKFkMJ%2FykopXCrcA41PQkzNJUPdblK62ZNovMGjZ9ZtM5YrTAkYrcs2in8AsBDKIPgWS3Pc6BADqYlVx7Kjc9ZDodRCAQUJEYxS9LuR8te2uGqW3QuZMlhX7TYgu8Xk9fJ5llYfeQU3FTpBGrdHSplaYBT4zKrs%2FJmJt7Oel9hocMacalgxwF7unEbBTygVJ7M06Fz2zG%2BhMHohsSq5hSeNSj309jagDnKb6IyeWlvJ%2FPf020h1vvsK7AL%2FfXixIUWsOOJ%2Fx0UatTVzbQgtw4XiZY8a7mFRmoEa50SC9zSqNMB8cbKcG1lMfWSDemi%2FK12IxemMn2ALmwxhy8j0kmRjIrmlZM5yQkaNHy8zs4%2FkxhFolQDeexPpauuOH7Xgs5Anw7ZOa6EVedAGBPAA3crPG%2BXJFljLacJYqgQY7i8g1t8y26UC2iUwwZ7F0Zmn0RotGcGjXDtaalKp57l72ChGNN3nuFtqS8Vx%2Bp3gL6gXCMQq2cJbD3hn4UX81fDUn%2BBPyZIGyRWN%2Fv77TPyUMBy8be2bI69HW79OEEy0ZxPv9nYlrgs%2B2n%2FugIEEVl%2BKts1U%2Bu8MPM7cEmSaZGnyZ6L%2B7z4EUaebjm5UpRihPI0enVRiv91OtvaqIH3Fz9pvmwwSxpv6upAIMM%2FP5sEGOqUBQg9WHzU9CZ20q981mL4a%2BH1PjenvSzyJnhbkgLkmv5IXuO6wvDW6od4OCduNuCx%2BL6Nd8D6GhaIZUxAI5PF3%2BmOmBsS%2FhP6nwcoWf1clDLiOPlX3yHcW%2F4wAoRrXaJrQJ2JAxlSnSEmB3bPZ%2BDQa9WIZFtz1z7QgFMvMSHLBCct1OSlAD6JTtKFZdttLbQbIanJ%2Bbrg5R1Bw7wo65IOsOLRWQLDW&X-Amz-Signature=b066675040959fcf1844bce281746df4d25dcda01d8b2c595e1ba04373e4eaf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOUTLTJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbM5n2pkaaDxxQze3aUgzFXnyUDC14I%2BI09iAQdDTU5gIgH6fYPL6BT1jQ09Vd%2FyB1IcnKUGTvvvd3oplds2ZF5y8qhgQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc6FAN3eB7cqs0iSCraA4ZvTdoX%2BTrLgQgHveQiIKdHX2dSJB%2FdkXw5BjKYV3hGuH7SU5NHeTX7CbrxBWDhotQhJNhwdDXE6INoUQK2hCBsA0cPbTpR2hsXWkpzQP7AsYGWEp437G3BuVonYbjL2JZw%2BYth4ci3%2BvQn7vfipNHPmAKjoSnsB7%2FnlBtMPN4U6NGMo5OphYqmP5L0Z9VR7TO6ya5SKOODCv36gpfFSMRHuiX00qk8oyttLGTIqadXksL2uvhQPCJJJ2fSJn%2Bo2hgj6yjBPJ2swo3GXjpGkpma5EKoSWOjI%2BYVF5npmSFi2x5WOEzY6C7OxVCApTXrffNMlodLTjCAHrqXEu1S2aXYmOVxR2e2VG2aw4Z7b2Qg6NF%2FQHGLiCw%2FGQG9bpK0h%2Blfe%2BIFpTJEcwvPGT7Ca7V1dYbAIzW8fsUmmu4mbbu971uGfrnr%2BXVMSRKf6mTMdqXOgfhT0tEonRO8HfVO9xryuSZkUuBaQqkKVdc7PZkzkBGZB%2FB6SQorIQ47Ji%2F5KkKbuj4aDTtmMdpxtQoQ%2BikoLc1wdnY4nJCm%2FqG0ddGKUoJJIIKOJDNYKGEHX3%2Bc8oM5vZf7oyr2XkhMPfrLhV1JqPpI%2F0sJ2j9jMAP5MsbVp46zUDJCYEQILjCrzebBBjqlAcGpdcgzC6Xn1bQlcHVLU7Wf1ivaVtaAgfvU5ER8cHR0o8BkZzlvCbrB9phd4sFnh79isQeA9deEb4yJb8RfFJZXAPgNQlCyqnpbun7PqqJMRgv7OxVPixFebpHqJRCvfD9pozOk1i5iKU%2F29DILwwqqkEckKu1DDbSBUcS2CCkiOaPRGDRY%2BlI2DWSPhHcCrpjLML8nIObda7MbQOBKHR%2B2VM6XMQ%3D%3D&X-Amz-Signature=34753a5d22c67a643b36ec3f415ec8a014a9826ee37979b2ccf80f50032ec419&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHRN52E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwgbiSZdkw8rq2Gnw7kodl%2Be5Y0q5KgGjM2pJqFRip8AiBtDZ7opRTZLtewk91XxlWRkyZwHT8s20jvlXOm985x8CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzW2tJvWVWpI7nLzCKtwDT9SIWLOQmvr19fuOTmexzPywPP1AYnj1QVRpCDf07wGTbWeCin2QtxtUKipPpj3Rw3%2BzW1pSG9nsgzJ4gtX%2FKy%2BNtFwW1nyKVAFPWpNCu0fSAz3bSLUa5HlrEH4y3y6%2BvY40r9Xrl0FMlrFPzWdAEL1gr%2FP9ZBvCfj3jDH5LUeNeeem8PoayF%2FueIYT0fWBVnzHSQCQJ55wgFkcH12OfAyGjKJjvo2bpDoiw4ZZmdF3m8%2Bd1tsqqx0VLonzH5evMJE5qg8O3ieik3EuZ5%2FGP77lo3dTFE6BKiu%2BRciZW2sJx2UwqzWanLPv592Z0Z9WGE732PTG33qEZeYkDG2PhmTML1h87JNgCksAx9ij6WiHE77F%2BXkW4eCwg%2BqttgYzUxSkZ1N8Xcc7NgtQiGlR%2BVxMh65XflglCBKpJbOotAR26P8HIRPqqh%2FzhuQInUNnHkpMbnXjsJdd1nobp%2FwzNq4jzGT7w7LbdzdqUBEp3svO6vgF9lak6ZmwITJdMf4Eox44YDICLCl0loWZExR4Z4OFZF3M0qJJXoroPT%2FyQ4s8xrWU9idB1dV8izE5PqYXTnPRE9cyx2wgUijB7eV2Kxk4VjLdTmzCNjARymncNDvqZ89M8Bmugt7sz0S0w18%2FmwQY6pgE2SyBVUupwnkdfgSaUZL44IJEVegfkrQLCkxy1qxd6fY3OZe5%2Btp2PcDS%2BaQ1LIY6XVc6%2B8Y6IxoZPMd03aYJQ16zJvM8pDYd6JH6zFQy94YvosDswpn3RMozact%2FPWQMgKdVM3HAOwf4VYzzSt4AE%2FxDsLlpO0PvkHR76DZ4nXbrcS5c0NeBkvcI33ZBCgGtEvvQdvSQpeaL7%2Bl%2BSCtGdQ0k0AmuG&X-Amz-Signature=79be78d5c01bc92e7a144b305a4f3984ab88ed76d9e31beaa4a26257f1f73531&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
