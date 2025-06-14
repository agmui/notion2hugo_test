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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPGUSNZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCx1QNLdF1J5WUcelaoJhKxd15qh7cN5ow%2Bz8%2B6ZUisWwIhAPxHvZEmiHDyA3GTIordid2wEaX5gRX3UeSspdN%2B2sTMKv8DCDUQABoMNjM3NDIzMTgzODA1Igx29j83%2B5oZetv4wlkq3AM%2FdxtmBXJYUmpcmgog9iDlB1Xe1yfcEWp%2BHyzbIz8l4zQh6c8xY8iBmdh8Bm%2BFnevgVQK1YfAJPsmIN6i%2FjhhwjaWiJGfjagqXfvNsWSIqxC6eF63ddqpk8qimddrGVkxMyQtYSm2xRFkk3Y4WFPXwHb0nWJr7G4Sk11JWkVT5kCD5PIdE2gV17HHiGifKxVtMqy3K27VQS4ANJfqG9GZwmRtWkpFuqajgbKRqYsEX9xTNk3%2Bl1qxUq0iLDrvS5pKZYvpYmO%2BezkmG%2FMcSNc8TJ5toY1Fku6ZGcJy9IGkOX%2FgjaGRk1DtAgqCGZmTgbQloqbrSaAMYjmpvdBFeZzgefuCDA9x2QX%2Fshsy8mhmQkSqnTBiNpBnAISAjAZoTREA24X6dHgErna6wdODa8LnMM7Df%2FLjyB9gLgB3uuHA3wkU1%2BLyKezYThL6Fh0d%2B6CM%2BYr3MbPv3HrrT9ZRr2YY9iZIJ5ixG3Vt5m9eykogNjgC1lzhJsyuJ2yYq6LCr2ZxwpBDh71R4dbsjC6ygD6sIavFS9irrcsjm6AyPOsohLD1TaCKJLXbV7aAhW5vbGFjMorM0YbvztxJ4GcKxxMYfzt4uQveyjqrHk%2BII%2FPILKOiaj5ABJLz%2Bkmmh8TC4pLfCBjqkATD9yt%2Fhco3Kqanu7zvL8TxjS7g%2FeK0aFPFns%2BaUOIGzPbFn4XKzTCerRvYtrlhxKXuyXdoxke1c1mivAndrLWmnkEqekswN6mVGJMNoGG%2FzkRP01ZOXjVqztFK8tg1IMeOoKUvB6YiOOpny0VZEgGdEyIIEtskxnxRWheaZ0eO855ppOg26chd%2BvXa6ve7lOYaQEd95OBcZ5i4MBT%2FrzchJBGA0&X-Amz-Signature=1e78add5c2c090749b26631b98de70649a24de23d131da07d42e40d81c86e81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPGUSNZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCx1QNLdF1J5WUcelaoJhKxd15qh7cN5ow%2Bz8%2B6ZUisWwIhAPxHvZEmiHDyA3GTIordid2wEaX5gRX3UeSspdN%2B2sTMKv8DCDUQABoMNjM3NDIzMTgzODA1Igx29j83%2B5oZetv4wlkq3AM%2FdxtmBXJYUmpcmgog9iDlB1Xe1yfcEWp%2BHyzbIz8l4zQh6c8xY8iBmdh8Bm%2BFnevgVQK1YfAJPsmIN6i%2FjhhwjaWiJGfjagqXfvNsWSIqxC6eF63ddqpk8qimddrGVkxMyQtYSm2xRFkk3Y4WFPXwHb0nWJr7G4Sk11JWkVT5kCD5PIdE2gV17HHiGifKxVtMqy3K27VQS4ANJfqG9GZwmRtWkpFuqajgbKRqYsEX9xTNk3%2Bl1qxUq0iLDrvS5pKZYvpYmO%2BezkmG%2FMcSNc8TJ5toY1Fku6ZGcJy9IGkOX%2FgjaGRk1DtAgqCGZmTgbQloqbrSaAMYjmpvdBFeZzgefuCDA9x2QX%2Fshsy8mhmQkSqnTBiNpBnAISAjAZoTREA24X6dHgErna6wdODa8LnMM7Df%2FLjyB9gLgB3uuHA3wkU1%2BLyKezYThL6Fh0d%2B6CM%2BYr3MbPv3HrrT9ZRr2YY9iZIJ5ixG3Vt5m9eykogNjgC1lzhJsyuJ2yYq6LCr2ZxwpBDh71R4dbsjC6ygD6sIavFS9irrcsjm6AyPOsohLD1TaCKJLXbV7aAhW5vbGFjMorM0YbvztxJ4GcKxxMYfzt4uQveyjqrHk%2BII%2FPILKOiaj5ABJLz%2Bkmmh8TC4pLfCBjqkATD9yt%2Fhco3Kqanu7zvL8TxjS7g%2FeK0aFPFns%2BaUOIGzPbFn4XKzTCerRvYtrlhxKXuyXdoxke1c1mivAndrLWmnkEqekswN6mVGJMNoGG%2FzkRP01ZOXjVqztFK8tg1IMeOoKUvB6YiOOpny0VZEgGdEyIIEtskxnxRWheaZ0eO855ppOg26chd%2BvXa6ve7lOYaQEd95OBcZ5i4MBT%2FrzchJBGA0&X-Amz-Signature=8298c2c811556023e3d39bf2080d453b723922c563701b487395ad07f5ee46a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPGUSNZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCx1QNLdF1J5WUcelaoJhKxd15qh7cN5ow%2Bz8%2B6ZUisWwIhAPxHvZEmiHDyA3GTIordid2wEaX5gRX3UeSspdN%2B2sTMKv8DCDUQABoMNjM3NDIzMTgzODA1Igx29j83%2B5oZetv4wlkq3AM%2FdxtmBXJYUmpcmgog9iDlB1Xe1yfcEWp%2BHyzbIz8l4zQh6c8xY8iBmdh8Bm%2BFnevgVQK1YfAJPsmIN6i%2FjhhwjaWiJGfjagqXfvNsWSIqxC6eF63ddqpk8qimddrGVkxMyQtYSm2xRFkk3Y4WFPXwHb0nWJr7G4Sk11JWkVT5kCD5PIdE2gV17HHiGifKxVtMqy3K27VQS4ANJfqG9GZwmRtWkpFuqajgbKRqYsEX9xTNk3%2Bl1qxUq0iLDrvS5pKZYvpYmO%2BezkmG%2FMcSNc8TJ5toY1Fku6ZGcJy9IGkOX%2FgjaGRk1DtAgqCGZmTgbQloqbrSaAMYjmpvdBFeZzgefuCDA9x2QX%2Fshsy8mhmQkSqnTBiNpBnAISAjAZoTREA24X6dHgErna6wdODa8LnMM7Df%2FLjyB9gLgB3uuHA3wkU1%2BLyKezYThL6Fh0d%2B6CM%2BYr3MbPv3HrrT9ZRr2YY9iZIJ5ixG3Vt5m9eykogNjgC1lzhJsyuJ2yYq6LCr2ZxwpBDh71R4dbsjC6ygD6sIavFS9irrcsjm6AyPOsohLD1TaCKJLXbV7aAhW5vbGFjMorM0YbvztxJ4GcKxxMYfzt4uQveyjqrHk%2BII%2FPILKOiaj5ABJLz%2Bkmmh8TC4pLfCBjqkATD9yt%2Fhco3Kqanu7zvL8TxjS7g%2FeK0aFPFns%2BaUOIGzPbFn4XKzTCerRvYtrlhxKXuyXdoxke1c1mivAndrLWmnkEqekswN6mVGJMNoGG%2FzkRP01ZOXjVqztFK8tg1IMeOoKUvB6YiOOpny0VZEgGdEyIIEtskxnxRWheaZ0eO855ppOg26chd%2BvXa6ve7lOYaQEd95OBcZ5i4MBT%2FrzchJBGA0&X-Amz-Signature=b36294396991dd21593f6f2ff53bee3067da976501942688b5bc6b4073fbc32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWK375FX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH9Uy6nsaX8DK6p8k3ev8D%2BHM5BUJlV03cqF5EwDZeCdAiEA5tglm5hV6t6PkslCPaDbqOcIP%2BQru1R2lKOB1MBQF1wq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKB4FsLqEtiPlPjOnSrcAzhZox0PxMchEx19xfYpYefQiKBAq2aT0gZb8cvEL5Lw2Nez%2Bdw3LIa%2F%2B%2BpCSSUvm807grmhxchNprQVUjet6o2iDsLAt68VXOxg7qHma%2FHFpErEzecXCMzbec5%2BB6Bw4k2UE%2FIamgikapLV1TWv5b9QSPO92NPsEhDgEwKv1xjrhfdt6dZBMOPMeeivI%2F%2BkZPmE2mauFapUvA%2BjefzOdyUeFaFNSEB9BEkSix72AhZkJdpVCZBqzflFZKmrNTWeDlLWy4Dug4yUffYCUm5tLH72pnAmXMRI2gLYEOWfr9BDShxWB%2Bv4Nkz2nB5db6rGXZTxPSXdohY9cLguymQ1BA77AlwAD9UeLDQM2orSn1t2WVwGG9CUdrmhezdAtWQiTX2at%2F%2F1ZCFrFTJ4NRwdGZ1pI6PGTJHCPrX0h9B5PqTjPxtf7fqcG%2FTOO%2Fgvzj8%2FTykcjvdpg4asmKUgCyDAlHVGg0Ju%2FzoXD0yMF5urIEHoNE2Cv3VTrPH5gmY4rJXDu0KhOMRi0xEi6TKZxf6ynFbQVGOeLt6jby73slXov8T6WshzDY0%2BS22djj9ODBx%2BFsM4Pu24a%2Fjgwd0AyTk%2Bcj%2B8qP27E4KBy%2FWrZmHP72E0RGonU15rHMGCt38zMKikt8IGOqUBJd0a0yADwHC4r0KBypkRPIZ0xL1ydKADZDCExY8Fr9AadieqfQyDArCnpEcGJqhGSENXGS5itzaTdQmqQOxmC1kgpyS%2Bz0Zbqk5BoBQND3Ck5t5sG0R5t7kzAwPnFt4ISmkoeekai06Eb7ceNJU854MSeN2P5Rs%2F%2BnkK1D8CnmzSZKtGrasFAPfjvzXk5MM0JfjDPtucQjyDladAPKi1s0jP%2FoNx&X-Amz-Signature=b562a7ec0186626ac13cd1cb36e03a4a57b7952e0d29f7595f81b8ae01252ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL2ZOVRD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCZSbDvsIfhbp2WY8S8LPhPI38NjS9XGU2rGHUEfW43eAIgUMFOW9h9EWGWx%2BL3WBaN16vEeMUHOvyOA3gpJcCDRG8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJqQGYOyAWOUDKlWyyrcA54Xvl7hhE2mtPjbAb06mn7SCE7PjEAoPeGdz%2BfjTu3znDXPPX01uku8k9KRej3kq4A%2FKL6oDm6br0EQalLIncMh2LSKrhqFvPodspxQ3wVGcX%2BaMZjZBDWTkDzpKvHb%2Fzm%2BoLa523HwCWpRe0odU5lBvwraKePjztivQmC%2FXGwWAISQCfOybWXFsUwPcQ1%2BpG%2BbtghpMtr9crUA693bRTakBb2ewLIqqGq%2B%2Fju9ITw260tZHOFiuUXNmsLgi%2BVm9esZhW0bX2FMewvqyTQAAZVtIjeIWA5sWMxXBD0vc1HqJchT3RbLbSZqtVvJIec47GOfCcBbx0%2BWXZyqHYoIT%2BExLgX4Ba4ew0BdcmE5eOmyrf3VnZGsa%2F8tFGFj3rcgyk8z%2BxogfHteugH1pU7BftaQNW3taNNWQRIxk7ZfRl%2FS2Uah92%2B9OBuKxtoRkgbxFA3GCWvh%2BQsePitPoFj9hxgos0ADGr9gNawut8nAzz%2Fo3kPobJuneGd536cTIZssOxak8UPOYllQFv0jIdEigclaTOtX1WaGDr5SKRliSPucnZuNseuwPsrmp%2Fiu%2FLIjAW9kVGDGN5fEWEueMd1GykFs9vl5GgJqTBK5MKOrTGDnATqF2Yr5CcXxo9h2MMKkt8IGOqUBI1aF8b8CCzjz9zIP%2FK%2BQIEBQkEpXHosj4JYY9E0GLw4lnBe7JyUNIsqu%2BO8eg4QJAuy8NfmorOP%2F%2BZEkp0Noe%2BCfSW0%2FsO2IDUvX5XJzX3FwVPWKzIoYzyF80ydiPJgevMdzguniJyYj6JmnDz%2FzS6%2BVqFtCkf5dCwQEmVT2BCEbulfEnRrGiwyDEyVZE1gYoXERdVIj8Y8nF2%2F93IxBzE4ImEid&X-Amz-Signature=6e97f8d6a74d101a21623e92ec5b88808a3ed5e27eebf40ed736d0d156be6a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPGUSNZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCx1QNLdF1J5WUcelaoJhKxd15qh7cN5ow%2Bz8%2B6ZUisWwIhAPxHvZEmiHDyA3GTIordid2wEaX5gRX3UeSspdN%2B2sTMKv8DCDUQABoMNjM3NDIzMTgzODA1Igx29j83%2B5oZetv4wlkq3AM%2FdxtmBXJYUmpcmgog9iDlB1Xe1yfcEWp%2BHyzbIz8l4zQh6c8xY8iBmdh8Bm%2BFnevgVQK1YfAJPsmIN6i%2FjhhwjaWiJGfjagqXfvNsWSIqxC6eF63ddqpk8qimddrGVkxMyQtYSm2xRFkk3Y4WFPXwHb0nWJr7G4Sk11JWkVT5kCD5PIdE2gV17HHiGifKxVtMqy3K27VQS4ANJfqG9GZwmRtWkpFuqajgbKRqYsEX9xTNk3%2Bl1qxUq0iLDrvS5pKZYvpYmO%2BezkmG%2FMcSNc8TJ5toY1Fku6ZGcJy9IGkOX%2FgjaGRk1DtAgqCGZmTgbQloqbrSaAMYjmpvdBFeZzgefuCDA9x2QX%2Fshsy8mhmQkSqnTBiNpBnAISAjAZoTREA24X6dHgErna6wdODa8LnMM7Df%2FLjyB9gLgB3uuHA3wkU1%2BLyKezYThL6Fh0d%2B6CM%2BYr3MbPv3HrrT9ZRr2YY9iZIJ5ixG3Vt5m9eykogNjgC1lzhJsyuJ2yYq6LCr2ZxwpBDh71R4dbsjC6ygD6sIavFS9irrcsjm6AyPOsohLD1TaCKJLXbV7aAhW5vbGFjMorM0YbvztxJ4GcKxxMYfzt4uQveyjqrHk%2BII%2FPILKOiaj5ABJLz%2Bkmmh8TC4pLfCBjqkATD9yt%2Fhco3Kqanu7zvL8TxjS7g%2FeK0aFPFns%2BaUOIGzPbFn4XKzTCerRvYtrlhxKXuyXdoxke1c1mivAndrLWmnkEqekswN6mVGJMNoGG%2FzkRP01ZOXjVqztFK8tg1IMeOoKUvB6YiOOpny0VZEgGdEyIIEtskxnxRWheaZ0eO855ppOg26chd%2BvXa6ve7lOYaQEd95OBcZ5i4MBT%2FrzchJBGA0&X-Amz-Signature=51d2a690bf94fdda1f731b58ac4d2704ed44c182d03ceca66b6176c242160ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
