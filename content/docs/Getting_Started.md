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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJFOBDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMu49CfqYoUmaYRRBmallosQ4ieqpfBy2ULGKRT7E5AiBzVL9oXhm5lL777doL%2FZatfxNHCK27eWX%2B%2Fbf%2FyGicdCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMah6MqGGYfdAxPrvJKtwDwIihqpyNoypmfc0r1OADbqBiFkRQLBMqISdl%2BkmvIxeC%2BdQ3f%2Bvggx4qgvtIx7qJCVRui00AQq4JJWRaVCJgYxEDmY45GE5f0t9rD1qAbl4G34YqKf%2B2oT7keU4j4OXfgaNgdP3%2FlqlT4Z%2BtJ4oRu8NoenSevF39s97ahuTJBGpg0hKeYiTPlcVDTtvRiY8DkhU2b4v8F2nF2RTXnfOCYB75d8K%2FShT%2B8XH2PA3rWWldX0PYOyKI1QE6CCG%2B52rUl%2F0b7KNa7LRZmAm6XZCNeiAEggcWaPqjDF5aZRudma9ond5%2B%2BlZjr522yp7kxV6hgfWpRvSBG61NH%2FCB4R1MXs1DmrjullTDFVvDqIVzTiUHna9QccPfZtxQJGK5Cl76057SFYLZ1PbvOyHFAYOEt3ds3muVmxo2EbUBlDIn5CHxFkI1BlZjheEQPJiDxmq8GGTiiNq1A53TOtIy2rTTBiG3Jn0VEdfzbApHTYR5eHMAB0vIRYKAmhZsMclXn1RBOlDkG14Wepxay%2BRvsadoZMLFvqi7xKEK8sWsLFqksodadkPJWl%2FCUysxJPdJVJlDnGv5fy91po1M5%2F6h1VSxH5q0JEEnufKu2300nscTCHGnRFvY2cmzihhgqPEw74jHwgY6pgHxBDPLOEGfpt1NedbxJJ%2FCtRd2KEsuPbWpOh%2F7hrSCF69H%2BnNtoT1ifQHqP5gR5rwgKqGXugs07qozNkmR%2BbGb9tCr8M3T46hkzPkXAObcNyo4LUi5%2FMJ6siM0EK2QgZBkhl7ovTlG7oEmBfIE9lr80KKxpPi3v4bpfdprSLRYNiY5iTeYDr6TRJWNhsx%2FrOyDoVKw%2B0AHx%2Fb%2BCvMXwgFBWddoXEJv&X-Amz-Signature=b66821ad56087930eacdacf5055bb99d786491c1cea8cfc1561ff2d492c27381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJFOBDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMu49CfqYoUmaYRRBmallosQ4ieqpfBy2ULGKRT7E5AiBzVL9oXhm5lL777doL%2FZatfxNHCK27eWX%2B%2Fbf%2FyGicdCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMah6MqGGYfdAxPrvJKtwDwIihqpyNoypmfc0r1OADbqBiFkRQLBMqISdl%2BkmvIxeC%2BdQ3f%2Bvggx4qgvtIx7qJCVRui00AQq4JJWRaVCJgYxEDmY45GE5f0t9rD1qAbl4G34YqKf%2B2oT7keU4j4OXfgaNgdP3%2FlqlT4Z%2BtJ4oRu8NoenSevF39s97ahuTJBGpg0hKeYiTPlcVDTtvRiY8DkhU2b4v8F2nF2RTXnfOCYB75d8K%2FShT%2B8XH2PA3rWWldX0PYOyKI1QE6CCG%2B52rUl%2F0b7KNa7LRZmAm6XZCNeiAEggcWaPqjDF5aZRudma9ond5%2B%2BlZjr522yp7kxV6hgfWpRvSBG61NH%2FCB4R1MXs1DmrjullTDFVvDqIVzTiUHna9QccPfZtxQJGK5Cl76057SFYLZ1PbvOyHFAYOEt3ds3muVmxo2EbUBlDIn5CHxFkI1BlZjheEQPJiDxmq8GGTiiNq1A53TOtIy2rTTBiG3Jn0VEdfzbApHTYR5eHMAB0vIRYKAmhZsMclXn1RBOlDkG14Wepxay%2BRvsadoZMLFvqi7xKEK8sWsLFqksodadkPJWl%2FCUysxJPdJVJlDnGv5fy91po1M5%2F6h1VSxH5q0JEEnufKu2300nscTCHGnRFvY2cmzihhgqPEw74jHwgY6pgHxBDPLOEGfpt1NedbxJJ%2FCtRd2KEsuPbWpOh%2F7hrSCF69H%2BnNtoT1ifQHqP5gR5rwgKqGXugs07qozNkmR%2BbGb9tCr8M3T46hkzPkXAObcNyo4LUi5%2FMJ6siM0EK2QgZBkhl7ovTlG7oEmBfIE9lr80KKxpPi3v4bpfdprSLRYNiY5iTeYDr6TRJWNhsx%2FrOyDoVKw%2B0AHx%2Fb%2BCvMXwgFBWddoXEJv&X-Amz-Signature=9db09f3140333f62c7ea00c2db1d870442a3bd493d7dac085a02e1038c328b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJFOBDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMu49CfqYoUmaYRRBmallosQ4ieqpfBy2ULGKRT7E5AiBzVL9oXhm5lL777doL%2FZatfxNHCK27eWX%2B%2Fbf%2FyGicdCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMah6MqGGYfdAxPrvJKtwDwIihqpyNoypmfc0r1OADbqBiFkRQLBMqISdl%2BkmvIxeC%2BdQ3f%2Bvggx4qgvtIx7qJCVRui00AQq4JJWRaVCJgYxEDmY45GE5f0t9rD1qAbl4G34YqKf%2B2oT7keU4j4OXfgaNgdP3%2FlqlT4Z%2BtJ4oRu8NoenSevF39s97ahuTJBGpg0hKeYiTPlcVDTtvRiY8DkhU2b4v8F2nF2RTXnfOCYB75d8K%2FShT%2B8XH2PA3rWWldX0PYOyKI1QE6CCG%2B52rUl%2F0b7KNa7LRZmAm6XZCNeiAEggcWaPqjDF5aZRudma9ond5%2B%2BlZjr522yp7kxV6hgfWpRvSBG61NH%2FCB4R1MXs1DmrjullTDFVvDqIVzTiUHna9QccPfZtxQJGK5Cl76057SFYLZ1PbvOyHFAYOEt3ds3muVmxo2EbUBlDIn5CHxFkI1BlZjheEQPJiDxmq8GGTiiNq1A53TOtIy2rTTBiG3Jn0VEdfzbApHTYR5eHMAB0vIRYKAmhZsMclXn1RBOlDkG14Wepxay%2BRvsadoZMLFvqi7xKEK8sWsLFqksodadkPJWl%2FCUysxJPdJVJlDnGv5fy91po1M5%2F6h1VSxH5q0JEEnufKu2300nscTCHGnRFvY2cmzihhgqPEw74jHwgY6pgHxBDPLOEGfpt1NedbxJJ%2FCtRd2KEsuPbWpOh%2F7hrSCF69H%2BnNtoT1ifQHqP5gR5rwgKqGXugs07qozNkmR%2BbGb9tCr8M3T46hkzPkXAObcNyo4LUi5%2FMJ6siM0EK2QgZBkhl7ovTlG7oEmBfIE9lr80KKxpPi3v4bpfdprSLRYNiY5iTeYDr6TRJWNhsx%2FrOyDoVKw%2B0AHx%2Fb%2BCvMXwgFBWddoXEJv&X-Amz-Signature=cac4ca1fcaff696886ea338696d5d2ea599cb3839c8025b44d53398eb9cf706a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGCW37Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt3wzs1Y2%2BcsDJLlRu18xxtb6m8wBIl5b3LDnHipSzCwIgc3QgumMW8TYc%2FDOiKl2V%2Bd0vrtzD1DlSrMTzTSYG6Y4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN7Z0LrzW13x6LewjircA3wXvxnUl9HdtrtAb3psaZXNT7F4Go%2FpIcDCVjiejitvP7zfd0lfPDJerZ5NAKTKmCMre%2Bopf%2Ft2UrmX3GTEN7wcV3yTxPUOIQy3PbZ6Tz6zmFtF7L5TCmLozEH7wX%2FN1D9Gi47ChPRArsMHuXkfBulEk7QuU34ldJKUP4yyKQAyDBbi2P%2BWf4AijR5uHLpCJgByxMpV5BJE17CJPbramM%2FWYUlJoPoAtR3gCOuo72T6TWhVCRL126zkiMCmzjQ45CulfCcHapNZmy8DMuhiJ5EsZ5PGAMalQPzVUv48zAxj9i2mijxMSgj%2BPaSIIIib4vSBejUjRj%2FJOGYm%2FQ%2BTa7p9WJOgBfNmTXn1obfX0FlqeNe81miac7g5tty3%2F7TnmCxMMFfvCcEUb66Eack3PxqK2YbMJtctRXDbTBot%2B5R%2FMdgPdxHUzDkdAf9j%2BmL39GP5tYmpQn%2FMkgp0QtZ8gYimHiwqi%2FnojDSQ01FR8RfE78uoYY%2BBAQ8aR8fQX91eyd8tlqKNkW2omUTqGIZUuMOwLVXmFtTCYHGu4W%2FSDNUVsSZO8BB3ltkbBJke9FEKxZmdMt1wb266mW%2FLCV4tvmjuij9XKwHhCy2h%2Bb2UeMxb56AVpb7hWaZqqCNWMPSIx8IGOqUBCWp5G271xB8SytqbFkHg5b0a7W1JCssPqZQ06AFU4tYO%2BG5ihltjZU4k%2FhS%2B0mtkwvMX8lXBCqBibnVMieYQBiNJsrsuFgh6mOUW9aflFMoqcCDgN3bDAdNAXJkj8o1J5iPuomGSiQR8Ewv8Gx0We1vcPOXkGRk0CLv%2FEuMbFDMNy%2FNSP3Kw%2FbdgKQWhYw%2Bf%2BylRZ1pf93fO%2FcnYGj4ou2gRONBz&X-Amz-Signature=a845c0090d6418d66c7a0718145658c6dadb5ce92b638432874363cf0e4db0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA6AKYU3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXxordYUpvNrw4odUrETMoNYd9CFGHK0gwHhFOKzspzAiEAu7Qh1dMBFtQIQwgCQrgVRaYgu1Y%2Br3P4hV%2BHtUJy4dkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB4WC3BHIUvyVRvPhircA82IaDPnK5gK4zBralpTnzLcaX6v8%2FYaBqGhCniLchesvhEDoViedNNaI2iiPVf79B6gh3k6QWUxvDZrOUHSh5q4y94HI0CDb5KGOrGLyt%2B9B7LwCFHNwVWnZ20XnXNuADpuqtIcfgCe%2Bv0ceeKVhfXUUabc9DtV9ygNJFd6f431u2yB0zFdOuK3t3nc%2FYSd2upbV8kSrI7ANnwp96hG%2Bp%2FuoWIWqXbRwUKt0fcwSJFHTfTLbqpB%2FpZ4RQfQflCpplk%2F%2BCE4X62OIwBlZT0btaZNbKBtoAHfVcb2WofV2SwNvQGUPHA5HtB3kNc2y47P8QEGww3aU77gU12amDwSu%2FZQW6Os9n0qDOGATdilKjlJjRPGGwzVLaupLrkZWYsfXKGNEdj%2FAjWtNw0iPzXuFAZPiK0WvCUzGgy6jOIwmpGonK9gF37jgN6Cxx0DBXnbUCjcAR0%2F5UkzmVIAP15iVifYlLi%2FlSVZP7xFcYDNiOTu%2B%2F2k0TCEhmb%2FyLU7MDoFIdl9NIC%2FlHBLIXNEsd%2Br6lL81lJJpG36EMLX38d%2FF1Ij3bTFpIIwur6uVpL%2BYZ0PoHGvNmU3h3DXqzs%2FzenQttM17UqhnkFBesirJTYZtpLAlpLRG9IrFEzLTvp2MPeIx8IGOqUBB8wrScx397%2BfmO%2BkygXabqX4L9HK8I8DzvhBN6Io1zFLb3x0%2Fsji69aXa2rJ%2FSuIgJzwneBUlvLrEp%2F3Q%2BYKPzExGbxEh4J52URIV7hoowSm%2BgLecGsxnr8nMAjlZsI8RxY66QFevRzgVDogIkWdslUg3royAcs%2BNerKFMuMphZo4hMe3JyzIf%2BI%2BJwTaIyZbIHzoBQLNclTQ1wT2IA0EBXdTYZo&X-Amz-Signature=29c8705d95d1a8c24f79b39ef4fdfc336d1c3237cb99bffdbc7b39a652bdbb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJFOBDD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMu49CfqYoUmaYRRBmallosQ4ieqpfBy2ULGKRT7E5AiBzVL9oXhm5lL777doL%2FZatfxNHCK27eWX%2B%2Fbf%2FyGicdCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMah6MqGGYfdAxPrvJKtwDwIihqpyNoypmfc0r1OADbqBiFkRQLBMqISdl%2BkmvIxeC%2BdQ3f%2Bvggx4qgvtIx7qJCVRui00AQq4JJWRaVCJgYxEDmY45GE5f0t9rD1qAbl4G34YqKf%2B2oT7keU4j4OXfgaNgdP3%2FlqlT4Z%2BtJ4oRu8NoenSevF39s97ahuTJBGpg0hKeYiTPlcVDTtvRiY8DkhU2b4v8F2nF2RTXnfOCYB75d8K%2FShT%2B8XH2PA3rWWldX0PYOyKI1QE6CCG%2B52rUl%2F0b7KNa7LRZmAm6XZCNeiAEggcWaPqjDF5aZRudma9ond5%2B%2BlZjr522yp7kxV6hgfWpRvSBG61NH%2FCB4R1MXs1DmrjullTDFVvDqIVzTiUHna9QccPfZtxQJGK5Cl76057SFYLZ1PbvOyHFAYOEt3ds3muVmxo2EbUBlDIn5CHxFkI1BlZjheEQPJiDxmq8GGTiiNq1A53TOtIy2rTTBiG3Jn0VEdfzbApHTYR5eHMAB0vIRYKAmhZsMclXn1RBOlDkG14Wepxay%2BRvsadoZMLFvqi7xKEK8sWsLFqksodadkPJWl%2FCUysxJPdJVJlDnGv5fy91po1M5%2F6h1VSxH5q0JEEnufKu2300nscTCHGnRFvY2cmzihhgqPEw74jHwgY6pgHxBDPLOEGfpt1NedbxJJ%2FCtRd2KEsuPbWpOh%2F7hrSCF69H%2BnNtoT1ifQHqP5gR5rwgKqGXugs07qozNkmR%2BbGb9tCr8M3T46hkzPkXAObcNyo4LUi5%2FMJ6siM0EK2QgZBkhl7ovTlG7oEmBfIE9lr80KKxpPi3v4bpfdprSLRYNiY5iTeYDr6TRJWNhsx%2FrOyDoVKw%2B0AHx%2Fb%2BCvMXwgFBWddoXEJv&X-Amz-Signature=22d3f0dea3e01fc4e5c5a82208ed817f40ebe8a199dce991b350421a2014da61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
