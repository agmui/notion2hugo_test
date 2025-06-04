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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6QGGPQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBRgd6pqMKQyv6AnA%2F914rSFc4Uzr%2B26lyywh7i9nGiHAiEA097KbU8E2A1icfAUWPTeHEo2aG0JQLzXsbvNaAE252gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMMqlIyYkI5a5rBn%2ByrcAyC49fFsUUpN5ZpvxsGpY3oujN3t3mRlLY9SfCuluCWmmtJvRus%2BNr6bW%2F0UJns1oDpdqLoqKkReeQ%2BbTRWqCkjWnmh3XSLo%2B1qCTR%2B%2BZI%2B3fQWhRCGfR0960%2FJ%2B74RiYvCXUw61dxuAjNlw3Xlkaspm1MN6jd7boN3S4mzy1dhYlp%2FkAb2BLoT6K5fPu2ZcJhGbrH%2BAvMFBtQam7aV4Wh3bm9ONMMKE%2BotsU4iOOxcWVCVWceJZnfnOqNYohxG0YOPNPLE6ymw2BLxlTTloqYkTn41X1srJsGbVqI0kiEqjr5Db9VZOib4HOWLNI7ZtWMVVdMD1TZKRjgncd7kDgOVgABYuXzXTQeRH%2FIOoMGYmpdnWtWcajQ9vPtKVhYi9hjqUnqib4wpvozHnTCO4MRt6ZvEmDxd3WdM%2FMwfGV0WAdGrqkTLg%2Bh7zpIlJXi3KjyMekYwU1N9zDXR%2BVCAsbkOiNb%2FVDVNLZPWP23WY85jap%2FEJluf%2B%2Fy3414LHTAffy4Me7n%2Ff7o2iJEhPR0CvSbGrStPQ19I8J8q2lK8qTypzbnZZPUBNay%2Fnont5JHlmPR8WfxZECvxOpah3WYpAN0TMgH4zDvsq4vS4YENPYBP2Ag0Khj2Ars5lfiZzMLDm%2F8EGOqUB8maYy4%2FrwD2N8wX3JwMbYslYq1HxlgQKWNOtBReUFWkny0Dx74Bi7BD7dluNTFC%2FWHfoi7gpd6o%2FRu0O0DaDYsgNFOkkQSBi39eNCgV8xTt5BINw8s03i11sJjzC%2FVy1Wo%2Fd%2FoLkVbQ4zxfjmYR9vOZ1KMbzsp%2FksMFboUu0gL%2B8MHuZLYU%2Fp2kzXWmRWHuQCw6xKUnp1uCB4jFfuJTscZUC1rVL&X-Amz-Signature=2d666ae49fa4d43c16620d48db6cacee6681eb5cd6eb813e65bf5c5fa991cb52&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6QGGPQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBRgd6pqMKQyv6AnA%2F914rSFc4Uzr%2B26lyywh7i9nGiHAiEA097KbU8E2A1icfAUWPTeHEo2aG0JQLzXsbvNaAE252gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMMqlIyYkI5a5rBn%2ByrcAyC49fFsUUpN5ZpvxsGpY3oujN3t3mRlLY9SfCuluCWmmtJvRus%2BNr6bW%2F0UJns1oDpdqLoqKkReeQ%2BbTRWqCkjWnmh3XSLo%2B1qCTR%2B%2BZI%2B3fQWhRCGfR0960%2FJ%2B74RiYvCXUw61dxuAjNlw3Xlkaspm1MN6jd7boN3S4mzy1dhYlp%2FkAb2BLoT6K5fPu2ZcJhGbrH%2BAvMFBtQam7aV4Wh3bm9ONMMKE%2BotsU4iOOxcWVCVWceJZnfnOqNYohxG0YOPNPLE6ymw2BLxlTTloqYkTn41X1srJsGbVqI0kiEqjr5Db9VZOib4HOWLNI7ZtWMVVdMD1TZKRjgncd7kDgOVgABYuXzXTQeRH%2FIOoMGYmpdnWtWcajQ9vPtKVhYi9hjqUnqib4wpvozHnTCO4MRt6ZvEmDxd3WdM%2FMwfGV0WAdGrqkTLg%2Bh7zpIlJXi3KjyMekYwU1N9zDXR%2BVCAsbkOiNb%2FVDVNLZPWP23WY85jap%2FEJluf%2B%2Fy3414LHTAffy4Me7n%2Ff7o2iJEhPR0CvSbGrStPQ19I8J8q2lK8qTypzbnZZPUBNay%2Fnont5JHlmPR8WfxZECvxOpah3WYpAN0TMgH4zDvsq4vS4YENPYBP2Ag0Khj2Ars5lfiZzMLDm%2F8EGOqUB8maYy4%2FrwD2N8wX3JwMbYslYq1HxlgQKWNOtBReUFWkny0Dx74Bi7BD7dluNTFC%2FWHfoi7gpd6o%2FRu0O0DaDYsgNFOkkQSBi39eNCgV8xTt5BINw8s03i11sJjzC%2FVy1Wo%2Fd%2FoLkVbQ4zxfjmYR9vOZ1KMbzsp%2FksMFboUu0gL%2B8MHuZLYU%2Fp2kzXWmRWHuQCw6xKUnp1uCB4jFfuJTscZUC1rVL&X-Amz-Signature=912fe688fe332b96e93e6539ff7c85bf337e5e14f5b3d91b657e0f97939770f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6QGGPQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBRgd6pqMKQyv6AnA%2F914rSFc4Uzr%2B26lyywh7i9nGiHAiEA097KbU8E2A1icfAUWPTeHEo2aG0JQLzXsbvNaAE252gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMMqlIyYkI5a5rBn%2ByrcAyC49fFsUUpN5ZpvxsGpY3oujN3t3mRlLY9SfCuluCWmmtJvRus%2BNr6bW%2F0UJns1oDpdqLoqKkReeQ%2BbTRWqCkjWnmh3XSLo%2B1qCTR%2B%2BZI%2B3fQWhRCGfR0960%2FJ%2B74RiYvCXUw61dxuAjNlw3Xlkaspm1MN6jd7boN3S4mzy1dhYlp%2FkAb2BLoT6K5fPu2ZcJhGbrH%2BAvMFBtQam7aV4Wh3bm9ONMMKE%2BotsU4iOOxcWVCVWceJZnfnOqNYohxG0YOPNPLE6ymw2BLxlTTloqYkTn41X1srJsGbVqI0kiEqjr5Db9VZOib4HOWLNI7ZtWMVVdMD1TZKRjgncd7kDgOVgABYuXzXTQeRH%2FIOoMGYmpdnWtWcajQ9vPtKVhYi9hjqUnqib4wpvozHnTCO4MRt6ZvEmDxd3WdM%2FMwfGV0WAdGrqkTLg%2Bh7zpIlJXi3KjyMekYwU1N9zDXR%2BVCAsbkOiNb%2FVDVNLZPWP23WY85jap%2FEJluf%2B%2Fy3414LHTAffy4Me7n%2Ff7o2iJEhPR0CvSbGrStPQ19I8J8q2lK8qTypzbnZZPUBNay%2Fnont5JHlmPR8WfxZECvxOpah3WYpAN0TMgH4zDvsq4vS4YENPYBP2Ag0Khj2Ars5lfiZzMLDm%2F8EGOqUB8maYy4%2FrwD2N8wX3JwMbYslYq1HxlgQKWNOtBReUFWkny0Dx74Bi7BD7dluNTFC%2FWHfoi7gpd6o%2FRu0O0DaDYsgNFOkkQSBi39eNCgV8xTt5BINw8s03i11sJjzC%2FVy1Wo%2Fd%2FoLkVbQ4zxfjmYR9vOZ1KMbzsp%2FksMFboUu0gL%2B8MHuZLYU%2Fp2kzXWmRWHuQCw6xKUnp1uCB4jFfuJTscZUC1rVL&X-Amz-Signature=990e6521355fb1f65db192063c9e5cd774000dbf2ab8e92fedd01ee768fddd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGU3HLX2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIF5kiCiL0SWxhMGvAtWsNyKL6Uyi4Y4FjJn%2Bdbi3loGQAiBFauy0rrMWKUfUrOgm5r4jLyGLPcu8mgSfj6jhHOYI5yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2F5gqbC1ExkSKZHswKtwDIhzTFjPJOMyPYfZib2kezwqBCndIEO92qp5OMIAegJp87Ng9uSwooOR6%2FPYlEDO%2BD9FpvdArga14rgTi9blD7nxHsrfhCLJ%2Fkjl4fZ7pQQF7k2a6sIecgB0ro4P6YIiILqIq4u3pNCwS8lWgYKu1Aczsx9CaluUau8NnJG%2BcodXL76sUALLEJFa9Rhw3myMBV8OdtTnBOz8n%2BjzTyStf3fuWrDfAS%2FuKZX%2F5zZfF3FGRWYRwno%2Fc%2FlKpM%2FSyts9cCl7e6U4tuQQHSzt%2B8YKQfhQBTwPg5tzSuTgEwDp94jHnMgNr6vGPBjVL06Aoa26QumHu%2FkE1AK0Hu3oqVmq3RRpo%2F7GtH7PvRA8I8xnqDGLjAbz66QHjrKvx9BRD4J551E25L9ZPS2bjVU13zaauLPNkT%2FDKNHL%2B0Bn7l%2BiC4Dz%2BC43%2FueboCNX4ASVzRHapUQwImBuN%2Bmc2xKA4Jtp23A9mXRhRGhpO4F4TycHYFfZqhwPc50ogx%2Fq7H6ir%2FU1IbODitC%2BCInn8aLWC5QdMOD%2BTqBhj3QVtTjUYhqgHmgxW%2F3tiw8w%2FtjQaez8ZJM%2BBbbTSdSQ6uTJOtgbMhuF7WhJUWa%2F8iuX8zdPG3DmfEMQoCRJv5PeuB%2F9x9hwwref%2FwQY6pgHghmipmeCWl3wGHEQjpTM9MNjq7%2F7XyGMXMVmnSgysm5HjxaV8vT50w2Exy7bYaFmDXfwXpYpRxKFPCeX7UWufNaoEK8irVwp8AQ2EOCySWXiqUgcChJ1Z9bD%2Bu9rGXYR%2FlRe4UIcx1fYjZVv7eqyUsqGkWgznkMoz26mymvvIsa3DXeBfaFsgixNzAaj%2BKBvMmZuZlC4eJsfxl8UWyJ8QPJOIlCRU&X-Amz-Signature=0ffe4385b185f19ae72063646ad2e563a855fc9d091acdd2f7ee7cd11fa60289&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UBO4JU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAJk%2FEpFIERKnZ6O7UrjCrFdCEk9HuP9ZozPqkoGHp5kAiEAsOOC5iN0x1vJMBNpDVYbj3p5aUSp%2BLgiHbTfAp%2BR2VMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJX45vBFoysKLL505SrcAxKBCu3Vo%2Bizzfcnq2GRlklWdiEKwQiJE7KTCaXT9DQLf2Aqz9zwtrX%2FcQ8IxCClArDIiO5sTTuwfDIRMzQica%2BtdN6d62LseF0ksyObDfW8SfqEtccju6F79Sa3xK4XnWLBGdXobJucHkyteAJW%2BbA54mqgLBDrg6eoKX4KCBg6zxCFk9Mu9td3815YSpaj%2FW5xadDWW%2FSay32on8Owcy6MRzHCl4hl5sVPEQoKgOu6tVs0WYLR%2FX8SCYX44IbUTyJJ5vieO2fo4tcF3bmOGiGVV%2BORIc6bL6fwoVxkR2GOyljTFag%2FkggkjuuZ2HCsQsRBGRDOSuPauL96okXv9W58mE3btSUchWXWBjmsRnCq0DLBjv5omQ1hAOqyuDcFX5nrYHhdjPPghtn5WgNsK%2FsuVAXv2DNPaX8mPB%2FcoZZdZuzqbXX%2Ftzb%2FyM4wzdtGvPrwOKxkQCqyCZqqnkUHLOTNuWb7lK4NC2GqR11ix6HJh8tVSiewAirLypTMu%2ByQzhNHeX43vU%2FJHgqqFTCjGducrPK0GQhyB%2FoGEvVNfZIHt%2BOPYj9J9Syhfy1uCrDcVnqmCXPn27kcgQPZgdOLUUjb%2Fkd9wY225zhp4fYbUpfQl3%2BhtifttYYTUvNUMOvm%2F8EGOqUBAVrqaPmuWHTQrILk55PHvPxJWkpPQ991yITr9NqT20RM56AocW%2Fa3cH2qG0DlhTeTHY5bWOZTD3%2BEDVheYcsz4G9VDlFe6gFNmfNukFCQRVkjPUxSf9H1e7lC52KeojwcJKcSiL1sXuSbxNvbVOiDL7IgeEVq1d1%2FX0bR3l5bzD5MQ%2FXAEjQjsgHSdYBKLwqNKL5uc6KgL0W%2B%2FT6KGj9XMUbIB6w&X-Amz-Signature=cfa431435f817c6800e52dd274aa0f61c81f24c64b8b1de33336dc3c27c94d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6QGGPQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBRgd6pqMKQyv6AnA%2F914rSFc4Uzr%2B26lyywh7i9nGiHAiEA097KbU8E2A1icfAUWPTeHEo2aG0JQLzXsbvNaAE252gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMMqlIyYkI5a5rBn%2ByrcAyC49fFsUUpN5ZpvxsGpY3oujN3t3mRlLY9SfCuluCWmmtJvRus%2BNr6bW%2F0UJns1oDpdqLoqKkReeQ%2BbTRWqCkjWnmh3XSLo%2B1qCTR%2B%2BZI%2B3fQWhRCGfR0960%2FJ%2B74RiYvCXUw61dxuAjNlw3Xlkaspm1MN6jd7boN3S4mzy1dhYlp%2FkAb2BLoT6K5fPu2ZcJhGbrH%2BAvMFBtQam7aV4Wh3bm9ONMMKE%2BotsU4iOOxcWVCVWceJZnfnOqNYohxG0YOPNPLE6ymw2BLxlTTloqYkTn41X1srJsGbVqI0kiEqjr5Db9VZOib4HOWLNI7ZtWMVVdMD1TZKRjgncd7kDgOVgABYuXzXTQeRH%2FIOoMGYmpdnWtWcajQ9vPtKVhYi9hjqUnqib4wpvozHnTCO4MRt6ZvEmDxd3WdM%2FMwfGV0WAdGrqkTLg%2Bh7zpIlJXi3KjyMekYwU1N9zDXR%2BVCAsbkOiNb%2FVDVNLZPWP23WY85jap%2FEJluf%2B%2Fy3414LHTAffy4Me7n%2Ff7o2iJEhPR0CvSbGrStPQ19I8J8q2lK8qTypzbnZZPUBNay%2Fnont5JHlmPR8WfxZECvxOpah3WYpAN0TMgH4zDvsq4vS4YENPYBP2Ag0Khj2Ars5lfiZzMLDm%2F8EGOqUB8maYy4%2FrwD2N8wX3JwMbYslYq1HxlgQKWNOtBReUFWkny0Dx74Bi7BD7dluNTFC%2FWHfoi7gpd6o%2FRu0O0DaDYsgNFOkkQSBi39eNCgV8xTt5BINw8s03i11sJjzC%2FVy1Wo%2Fd%2FoLkVbQ4zxfjmYR9vOZ1KMbzsp%2FksMFboUu0gL%2B8MHuZLYU%2Fp2kzXWmRWHuQCw6xKUnp1uCB4jFfuJTscZUC1rVL&X-Amz-Signature=11299612d1022511de3c57a2712cd9f07eca8c9dee4b483fa42b595a1e46f628&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
