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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPR7OWX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAacquzBS8bUHexL1TIXaJbYYKTMvAqihsI6d1LdT615AiAnHumulsckeRoQb8T9%2Bbscjp0WZmEBgyt4OApYivbERCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZG93wuNzmMEozatKtwDFU1fpbs0kcfhxTxO8WQloFeoCWr9FRpMBOgVBw79Lwct2jswdYRsIqcn5PamqxtBYMoOyL%2FOdZawzwsVTdn5En5Nn8x3hYtF6mbDjnUeCeMgYb1gm%2FiAkML05Z76Ltaf3u3Ipv%2BqT%2BUWrLigC3EXoWGxDsDf%2FqrFiQNbdYpkag6sNtSO1oHhPennrIABRp0I%2BdEHbSOuDo3KyNRFIzcuaVK09QU04%2FByKcc9ObQT07IJwax5vWSWW0Pr4kmcb%2BjGdhbHeD%2BTi6dObCp%2B0ULVwouL9iVjA%2F89BGyzm2AKa5Bq0vc17keiZPJY5T7fcRpBQkmcTsTjoERJQ3fC5wm6XEhnARHjcspZmWe5G9g7mCeggU3MAzXpvK%2BsZzn7hRXhpvTw7pT4V3d8YiK7pDorbAjsc98cS8ahX8ucIu%2F0XDN6aAH0RbDhrRUxV7B5uazB0kXib91SS1CyNY2nW4qzReu272PgTUqeKFCEc8fONU4oAfBhXvSJoDH0vR0RgPi0QN2eQBA8dTC6rwFDiolntR%2Fq4KIWSyJPrYccYiRDduvwLGyITeGTBy7pwhyFHsbwzVuwONXIt5yWe71PHFHkC1DVh%2BYAvZXE7eClFnxQ7EpJj7jvvi7ppcqAZ4Mwv43XwgY6pgEtjdiLlFxoVSzfDbMR3ssEMVrcyyO5h9h9OWMODIYGGrlLfHUA6cptrWougLL47usVMcGhWDsRfjdSJJ7WCvnHJXFN2gGgVFEvpawWAHvk%2BtZ6kkiJdqCTite1Ug7%2F7WQ%2BOfrNZHAc9L36h%2BkCkfKFdszD9FhU9euAMeXQYFTqWDKa3vXowJsgbT8rX1wETRxsNebUlL2MAuFif%2B0tSJC3cvX0ITGO&X-Amz-Signature=af20f0fafbc2b6813d4a0a36e7f66f4970b112121bd8b458667ece0fb4b1bc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPR7OWX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAacquzBS8bUHexL1TIXaJbYYKTMvAqihsI6d1LdT615AiAnHumulsckeRoQb8T9%2Bbscjp0WZmEBgyt4OApYivbERCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZG93wuNzmMEozatKtwDFU1fpbs0kcfhxTxO8WQloFeoCWr9FRpMBOgVBw79Lwct2jswdYRsIqcn5PamqxtBYMoOyL%2FOdZawzwsVTdn5En5Nn8x3hYtF6mbDjnUeCeMgYb1gm%2FiAkML05Z76Ltaf3u3Ipv%2BqT%2BUWrLigC3EXoWGxDsDf%2FqrFiQNbdYpkag6sNtSO1oHhPennrIABRp0I%2BdEHbSOuDo3KyNRFIzcuaVK09QU04%2FByKcc9ObQT07IJwax5vWSWW0Pr4kmcb%2BjGdhbHeD%2BTi6dObCp%2B0ULVwouL9iVjA%2F89BGyzm2AKa5Bq0vc17keiZPJY5T7fcRpBQkmcTsTjoERJQ3fC5wm6XEhnARHjcspZmWe5G9g7mCeggU3MAzXpvK%2BsZzn7hRXhpvTw7pT4V3d8YiK7pDorbAjsc98cS8ahX8ucIu%2F0XDN6aAH0RbDhrRUxV7B5uazB0kXib91SS1CyNY2nW4qzReu272PgTUqeKFCEc8fONU4oAfBhXvSJoDH0vR0RgPi0QN2eQBA8dTC6rwFDiolntR%2Fq4KIWSyJPrYccYiRDduvwLGyITeGTBy7pwhyFHsbwzVuwONXIt5yWe71PHFHkC1DVh%2BYAvZXE7eClFnxQ7EpJj7jvvi7ppcqAZ4Mwv43XwgY6pgEtjdiLlFxoVSzfDbMR3ssEMVrcyyO5h9h9OWMODIYGGrlLfHUA6cptrWougLL47usVMcGhWDsRfjdSJJ7WCvnHJXFN2gGgVFEvpawWAHvk%2BtZ6kkiJdqCTite1Ug7%2F7WQ%2BOfrNZHAc9L36h%2BkCkfKFdszD9FhU9euAMeXQYFTqWDKa3vXowJsgbT8rX1wETRxsNebUlL2MAuFif%2B0tSJC3cvX0ITGO&X-Amz-Signature=de67042990a0d5e6206e47f16c31bed34a188be85b2045793e05eb660b9546de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPR7OWX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAacquzBS8bUHexL1TIXaJbYYKTMvAqihsI6d1LdT615AiAnHumulsckeRoQb8T9%2Bbscjp0WZmEBgyt4OApYivbERCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZG93wuNzmMEozatKtwDFU1fpbs0kcfhxTxO8WQloFeoCWr9FRpMBOgVBw79Lwct2jswdYRsIqcn5PamqxtBYMoOyL%2FOdZawzwsVTdn5En5Nn8x3hYtF6mbDjnUeCeMgYb1gm%2FiAkML05Z76Ltaf3u3Ipv%2BqT%2BUWrLigC3EXoWGxDsDf%2FqrFiQNbdYpkag6sNtSO1oHhPennrIABRp0I%2BdEHbSOuDo3KyNRFIzcuaVK09QU04%2FByKcc9ObQT07IJwax5vWSWW0Pr4kmcb%2BjGdhbHeD%2BTi6dObCp%2B0ULVwouL9iVjA%2F89BGyzm2AKa5Bq0vc17keiZPJY5T7fcRpBQkmcTsTjoERJQ3fC5wm6XEhnARHjcspZmWe5G9g7mCeggU3MAzXpvK%2BsZzn7hRXhpvTw7pT4V3d8YiK7pDorbAjsc98cS8ahX8ucIu%2F0XDN6aAH0RbDhrRUxV7B5uazB0kXib91SS1CyNY2nW4qzReu272PgTUqeKFCEc8fONU4oAfBhXvSJoDH0vR0RgPi0QN2eQBA8dTC6rwFDiolntR%2Fq4KIWSyJPrYccYiRDduvwLGyITeGTBy7pwhyFHsbwzVuwONXIt5yWe71PHFHkC1DVh%2BYAvZXE7eClFnxQ7EpJj7jvvi7ppcqAZ4Mwv43XwgY6pgEtjdiLlFxoVSzfDbMR3ssEMVrcyyO5h9h9OWMODIYGGrlLfHUA6cptrWougLL47usVMcGhWDsRfjdSJJ7WCvnHJXFN2gGgVFEvpawWAHvk%2BtZ6kkiJdqCTite1Ug7%2F7WQ%2BOfrNZHAc9L36h%2BkCkfKFdszD9FhU9euAMeXQYFTqWDKa3vXowJsgbT8rX1wETRxsNebUlL2MAuFif%2B0tSJC3cvX0ITGO&X-Amz-Signature=a1772e23c2367efb8c8f59c6735a6be41a52cfcbb6f97a0d169ba9e296a4d052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWW6J2E%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG6HAcWAUcrUx9NyDKhrcRU0uy%2Bqz05wUKQP9wJ7VDQAiBqJqfGUFoxslc%2Bomjp7PTFLgqBoZ%2BiVY934BYaWLOftiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3I%2FmDdfLHaad%2BKaEKtwD4fMcw2B%2FbdqlhBxi%2B7Ell%2FOpVbT09HN4Ga6BjduPOpiZb%2FfG7lBO7%2FbW2bxiQF6s5wzbBstQWj4O782bUjV85yZZUdoN8GKVV56nlCn2Vj%2BULNygcGUbuj0%2Byh9oC4gyayLUehqGTpoAPaxbSwjZbLYlIRZNGBcSPkg33VrB9%2FaJqAjbmbTo5%2BEAcyPXjajsal7Pqo2UsEg3M1nzL4skcJs3vCTYNoJ4Ns6%2BbIy6L%2FHyiMK0bkhYXTxIt4%2BhlJ3HmGGdxV3x%2BXbEnfIkmfK55LcNfohwwgVW8hnsyAlwULHKjJDMyt8IiQwhxVa%2BHahJrIVEB0SLrxHHZaL3oSoWCAQGC%2BVR6lVqZ7OCQj9uYpiZPNepUFYIe5rYFjGPANx%2FTYcdwrr%2BHEnw16oWFEDyzDGmXF%2FxWLFVrXF3t5LGhLiC1EH88%2FlRihCAxK8dPGklVDPtbZBo8Pgzv5ci0ePgB0OJDusefOXvNrxzJZbcFpuLRXgBPSMYitnLxYGUT3oXhxD5tof%2BVB37L35sWYGBu6iszAcnm6qYd9sweOvdAbGyl561sal6cP4xslX2oSH7qhGKAJXSLo9RmxwUFIYI0mN%2Fdqn3YrR7127k62GU%2FHBGhuIurhnJw%2BaW5TYw67LWwgY6pgFfDHBujL5euh3twsY6e5BTRuAPm%2FP4KGmItRXFEvHdMMJOY%2FLUAeBvLYEbeaNwQfUFSe9t2OZwh2m8JBFWOZX8guYjbN%2FqGEx%2FJctKDXO8OYUzTY%2BYLD5sKo2uvaRgZU3hUWrMXouoD5VajKumfcChDyFIuAlkPiSRP%2BSZeqve4m2pJ6qOY8Qqh0ZGUGs2c1VzjYrcq%2FZ4cZOAz4NAoLhcAVx9P4fz&X-Amz-Signature=495bb1f93314086eff5223cb89b8c5e1445e4c2ee6cf678218fcd3b29f5cd8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TS2BB76%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6zyPziHdTMX1a9Vg8ysvo77pQE95T4cblI8Yt%2BV6HMgIgCvPTkcHRtWg0p%2FA%2BDtFoaY7YhappNTdxLMXvBgVK1WQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAZztnfCalp4LMpgyrcA7UGAbypyyEYwCpmJnMmtN4vXpPQxr4mcumFpurkkn7ZmKuneb7RVnf2D6s4gEssyib%2BvGFNR5PiXS44L4EJnq05aOruEVDl%2FRuxOWmKd5pG0JieyRKW5mkFRLjbWysGlHyw1S4EPZyIM6JSJroGaq1K%2B14gGxiHEs78W5kI%2BpSH4xRX3Y%2B%2BiqTmeFACoIeJSGZfvTERshLhNK%2F1AF%2BVQO6Q1Heb8o%2FKI2H5XVSVayug%2FZ0EQnnptOInK5%2FOOJZsMgVPvPDpA08KYmoBDP42ReQIpR1Urdr%2B5g3EbvZ5qdekFwGm%2BobroOS%2FZjE%2BzuFRK%2BdXtwI1UVUNiXS2kHJPPkkZ1yfxoLamHu7MiqFYgyn1PjW5mHaWlwBna0bFt%2BgpTWJ%2BMn5hefvnutfF4AP94MLwNdHBkKShna4VxOe4ITTDyI84jN8Z83KBwXGHE0S0CdDwH7VH0tMxcNR%2B1Vt%2BrNp5kvtosApT6V%2FfQtIr8E7exTY%2BENPF%2FCrgptPePFecNHmt6SIGj6kPfz%2FgTFWHjrIwe0D%2FGuCJBSxSjTDM%2FFSbEjrTVLN3l%2FUTjZjwCLIumRdEE5IbOIil18owqXWxQ%2BPo0GF9bOXILTh99Zes4JfYy9z9Xu5JbJ%2B9N4BBMKzQ1sIGOqUBTeRkWnlR7zZNC29Pc5bNjVMCdZSmHwqyxxOkNT2fGRmCG8vihCo7IMXMY0lXBY2JzJnTalTa7tw8QPgVqpW6RPmqC9YaJgdF%2BA7HYlXdahovgCpPRDzmK8OSwLRDedNr8UVyojZ%2BHC2hwK760sEs9lTo%2FQjcAIaS3w7HsV7wsEe0mM%2B7vZP%2F%2B%2Fk%2BgQ%2BQ78%2Fy%2BE3Y0gY05A6VY3dnR9DyvIBA8pZL&X-Amz-Signature=fb958746657e8dcabc0234270b74de3578caa36958bb04ba7399fd44616766e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPR7OWX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAacquzBS8bUHexL1TIXaJbYYKTMvAqihsI6d1LdT615AiAnHumulsckeRoQb8T9%2Bbscjp0WZmEBgyt4OApYivbERCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZG93wuNzmMEozatKtwDFU1fpbs0kcfhxTxO8WQloFeoCWr9FRpMBOgVBw79Lwct2jswdYRsIqcn5PamqxtBYMoOyL%2FOdZawzwsVTdn5En5Nn8x3hYtF6mbDjnUeCeMgYb1gm%2FiAkML05Z76Ltaf3u3Ipv%2BqT%2BUWrLigC3EXoWGxDsDf%2FqrFiQNbdYpkag6sNtSO1oHhPennrIABRp0I%2BdEHbSOuDo3KyNRFIzcuaVK09QU04%2FByKcc9ObQT07IJwax5vWSWW0Pr4kmcb%2BjGdhbHeD%2BTi6dObCp%2B0ULVwouL9iVjA%2F89BGyzm2AKa5Bq0vc17keiZPJY5T7fcRpBQkmcTsTjoERJQ3fC5wm6XEhnARHjcspZmWe5G9g7mCeggU3MAzXpvK%2BsZzn7hRXhpvTw7pT4V3d8YiK7pDorbAjsc98cS8ahX8ucIu%2F0XDN6aAH0RbDhrRUxV7B5uazB0kXib91SS1CyNY2nW4qzReu272PgTUqeKFCEc8fONU4oAfBhXvSJoDH0vR0RgPi0QN2eQBA8dTC6rwFDiolntR%2Fq4KIWSyJPrYccYiRDduvwLGyITeGTBy7pwhyFHsbwzVuwONXIt5yWe71PHFHkC1DVh%2BYAvZXE7eClFnxQ7EpJj7jvvi7ppcqAZ4Mwv43XwgY6pgEtjdiLlFxoVSzfDbMR3ssEMVrcyyO5h9h9OWMODIYGGrlLfHUA6cptrWougLL47usVMcGhWDsRfjdSJJ7WCvnHJXFN2gGgVFEvpawWAHvk%2BtZ6kkiJdqCTite1Ug7%2F7WQ%2BOfrNZHAc9L36h%2BkCkfKFdszD9FhU9euAMeXQYFTqWDKa3vXowJsgbT8rX1wETRxsNebUlL2MAuFif%2B0tSJC3cvX0ITGO&X-Amz-Signature=e1ecff30a2b50ecc7bfab4ae4fadcce00f0eff7ae2035c0d572172731d647eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
