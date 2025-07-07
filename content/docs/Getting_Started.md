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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRSAJOF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGTxGXJZm9SySS3GefBZRLNMEJM6KWRfRSRNMrxgweBcAiA2B7dASkpkyHC2jXp%2FPpMT3i7vTngN4zqFjn9LyXJkrir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMY7qN44%2BIxc3YZcwFKtwDiyJ8Kdhxlsi0NRvkv2z71OwtYX9xfRVDe%2FyaBJitUezvCdpYjytvfjH0sWCrMl9BIRHnIBDxzGN8F2aMi4kcBWikmVAe%2FIkouwh7j8tamhDCZsZVmOIInRcwT3lOZ2%2BTHffVRckYcqxA4g%2BDJC%2FvJNBrjDFB0f%2FplxEzXj6EVTSKK%2Bun4FoxsbtvXCd7jmy0wSPvBKp8aflzZ7wQeHcd%2FJX5m50K2%2FVHTuCeBjsfen4RSW0O3spSKAiLQkDTSDdGEnO0kHOWIJHpsfFd%2Fysxh5smrc1XYbWHUUkCObMK5U3lHXtCq8U5a9R8N0y1osQQ%2BA7B%2BPRHrO4Q6PdWCyBOuSmbrZBcJHyB%2FkZM8X%2BhS4lb83CmEJKMg69YO9kWoH0FP91o9YgHBkl1MBTgtvwxdkqRnW%2FC0pdx0ewYulFm2In66dx7iJwOD0tvFdXFDAvRiw7iEY7XO159785VZZ2jZdmMdsHXWbatH2NRNbzHdMawZ2NbqcdC7HNyTfOmkILS6gPIWobXMcFyopKydOqWhio%2BZ3L4qCuHYzqhKJIqnYzDzao89n5LGDOBZwr%2FeHVJGskUqclcm%2FN%2FruDAwDrgviGdu8GYNQkNtFjtpdYx2noSODLaf8TvztT0gRQwz5awwwY6pgGoW2uLR8fGDWElD14j3UMc8M4%2FKILeMkXGN5WqFtZhI0wINqeojIvE0DRiQeXt2HwiC4MpEOVFHU1xAjPsXYOg2OASsggCcbidKp14H02otBWN%2F%2BDPiraZKHN796znloASlm69W6%2B9V8%2BDP9RQL9unOUy%2FOf3mMO0qtFQ9LdvACyADFS6b5eFCgNCcN0SIVTQaERBi38JfXWMOUzfOGqL1%2BNKQZNNW&X-Amz-Signature=7fa291935cff83eea8c6393a0576ac95cdb7e549752b0355b0e8aeae49a398a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRSAJOF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGTxGXJZm9SySS3GefBZRLNMEJM6KWRfRSRNMrxgweBcAiA2B7dASkpkyHC2jXp%2FPpMT3i7vTngN4zqFjn9LyXJkrir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMY7qN44%2BIxc3YZcwFKtwDiyJ8Kdhxlsi0NRvkv2z71OwtYX9xfRVDe%2FyaBJitUezvCdpYjytvfjH0sWCrMl9BIRHnIBDxzGN8F2aMi4kcBWikmVAe%2FIkouwh7j8tamhDCZsZVmOIInRcwT3lOZ2%2BTHffVRckYcqxA4g%2BDJC%2FvJNBrjDFB0f%2FplxEzXj6EVTSKK%2Bun4FoxsbtvXCd7jmy0wSPvBKp8aflzZ7wQeHcd%2FJX5m50K2%2FVHTuCeBjsfen4RSW0O3spSKAiLQkDTSDdGEnO0kHOWIJHpsfFd%2Fysxh5smrc1XYbWHUUkCObMK5U3lHXtCq8U5a9R8N0y1osQQ%2BA7B%2BPRHrO4Q6PdWCyBOuSmbrZBcJHyB%2FkZM8X%2BhS4lb83CmEJKMg69YO9kWoH0FP91o9YgHBkl1MBTgtvwxdkqRnW%2FC0pdx0ewYulFm2In66dx7iJwOD0tvFdXFDAvRiw7iEY7XO159785VZZ2jZdmMdsHXWbatH2NRNbzHdMawZ2NbqcdC7HNyTfOmkILS6gPIWobXMcFyopKydOqWhio%2BZ3L4qCuHYzqhKJIqnYzDzao89n5LGDOBZwr%2FeHVJGskUqclcm%2FN%2FruDAwDrgviGdu8GYNQkNtFjtpdYx2noSODLaf8TvztT0gRQwz5awwwY6pgGoW2uLR8fGDWElD14j3UMc8M4%2FKILeMkXGN5WqFtZhI0wINqeojIvE0DRiQeXt2HwiC4MpEOVFHU1xAjPsXYOg2OASsggCcbidKp14H02otBWN%2F%2BDPiraZKHN796znloASlm69W6%2B9V8%2BDP9RQL9unOUy%2FOf3mMO0qtFQ9LdvACyADFS6b5eFCgNCcN0SIVTQaERBi38JfXWMOUzfOGqL1%2BNKQZNNW&X-Amz-Signature=b697aee241e4854e4b902e39c8bb458439b6d0de70781c9f8b23ce5033224bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRSAJOF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGTxGXJZm9SySS3GefBZRLNMEJM6KWRfRSRNMrxgweBcAiA2B7dASkpkyHC2jXp%2FPpMT3i7vTngN4zqFjn9LyXJkrir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMY7qN44%2BIxc3YZcwFKtwDiyJ8Kdhxlsi0NRvkv2z71OwtYX9xfRVDe%2FyaBJitUezvCdpYjytvfjH0sWCrMl9BIRHnIBDxzGN8F2aMi4kcBWikmVAe%2FIkouwh7j8tamhDCZsZVmOIInRcwT3lOZ2%2BTHffVRckYcqxA4g%2BDJC%2FvJNBrjDFB0f%2FplxEzXj6EVTSKK%2Bun4FoxsbtvXCd7jmy0wSPvBKp8aflzZ7wQeHcd%2FJX5m50K2%2FVHTuCeBjsfen4RSW0O3spSKAiLQkDTSDdGEnO0kHOWIJHpsfFd%2Fysxh5smrc1XYbWHUUkCObMK5U3lHXtCq8U5a9R8N0y1osQQ%2BA7B%2BPRHrO4Q6PdWCyBOuSmbrZBcJHyB%2FkZM8X%2BhS4lb83CmEJKMg69YO9kWoH0FP91o9YgHBkl1MBTgtvwxdkqRnW%2FC0pdx0ewYulFm2In66dx7iJwOD0tvFdXFDAvRiw7iEY7XO159785VZZ2jZdmMdsHXWbatH2NRNbzHdMawZ2NbqcdC7HNyTfOmkILS6gPIWobXMcFyopKydOqWhio%2BZ3L4qCuHYzqhKJIqnYzDzao89n5LGDOBZwr%2FeHVJGskUqclcm%2FN%2FruDAwDrgviGdu8GYNQkNtFjtpdYx2noSODLaf8TvztT0gRQwz5awwwY6pgGoW2uLR8fGDWElD14j3UMc8M4%2FKILeMkXGN5WqFtZhI0wINqeojIvE0DRiQeXt2HwiC4MpEOVFHU1xAjPsXYOg2OASsggCcbidKp14H02otBWN%2F%2BDPiraZKHN796znloASlm69W6%2B9V8%2BDP9RQL9unOUy%2FOf3mMO0qtFQ9LdvACyADFS6b5eFCgNCcN0SIVTQaERBi38JfXWMOUzfOGqL1%2BNKQZNNW&X-Amz-Signature=ff2edfb6c257cbce0f9bb4dfe2f3a0de677475312bd6f77fa08a28a713121944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z526B6V%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAlSaHmqA%2BT%2BLasVu3ieloE8eGKqwmltn3pamdCyCXPAiEAs2Onj03o%2FYplgxEZ6%2B6V%2F01IZ1xdLGfJZiOCLlw7hXkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDZlvcAZOunXBas92yrcA6fnru7mnrtOlveisYA%2BIyoDvbw4H1w%2BKv2OH2Ve57bBJfSG5mrZrV4zoRgc9QkMTWMkDZC0atZ2fYtPw%2Bb4b0gW3XMZJTSDL0yAIq0qATHxLohYdbm6WRG841a2r08gevHtaZE2dMMqiu8Xuhrc7DMdxQi9C86tL8y%2BzTZqf3ZIvGqdENUe79hOdS5j0q32ikkbLZ4tPOLDwXgX2dkl%2BzFolCeTj%2BjJZl6QGq5deBLNZSEQeS2J8Hn8hz0wn8w0vLmRXMuqBplXaKeYdmj3f%2BpkZiZwsS3wsj6nqZTIgjpODacTXanZxn4gV32wQxb1euBaw4Mc4xTAxKy2g1ICmBI%2FuW5TEImto55wDyWauryvDfYMNBYjL27j0bodlZXQTEwE8sRmNKyAPNcg8XwhncpoCpyhguxIy0aLibT7%2FGZL25rn0ujO5V%2BPxX6ilCF4Ptq2UMa%2BOszG3Heh2qf54pe4Y6uKUp2Ih3GtX%2Bg88fb%2FdtlHMxYReNa11DsZRbds%2FMsDyLHdlqSdDUP0ozdapicjddLje6DAlngh8KrW6z2J7M9GkqNrS4qkPOLpvvFqED0692ZRgRc6%2F23E7LdCo%2BluioxdW%2Fj9UdAvZQcmS4MKwg9M3J%2FirulneeJvMJCWsMMGOqUBG9DjJc5EJ4SvMOdIfWxDaessYCP6sjbPXxBUQn6gGfdXdpXIA6FHCyUFEEjZXXOIvdMrrcL%2FxbdVDj%2Fx90Gf77XoyvKFvZpLhiK8Do1vEhYqYGj7z1v7wQqcGRa5j2C02CZz1dgvd%2B8JkoaoWlSk0lkV8q1bjWsvdro9EDtikkV5tsH6DyHJtvBKPvJxIdEWAy%2BkdDkf7zZSonxpxwMMicKlZ%2FBK&X-Amz-Signature=3d1d51615fe7ca77e99016ce1c5dad9afb87bd39ab44d1ce2e3a9f577aa3c587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLILNJ4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDQPG5R%2F%2B33wLoHnF30fiePiTqf2dED8zYma%2BG6WRM55AiALJo5AtmnSJKjVp6xUpiWG4bk1QjclOjcBU6qzKCS0%2FCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMBjwhnTREF%2BqbCaoQKtwDgs6Vh78JLjEFyh6McYib%2FRRbaDb7q2%2Fb1keOMj%2BvHKwU4X4mDEfQd7qAxWjSGlOMxaGqJkBpBYj1qo70wKoQOLyJXRBNlaTP5JGeqejQSCP9CgeIlz3uBZrRHoGUN8xYVFY575AFBUfoon7SE2LlBZHDfNHGNZbkWxs1d21zF2GlBzQZGShTKrQKBpkUPraxrWIRDxMhs3agE0WV4fqvmB7oBiQdEpz7%2FtXACiDk%2BoCVgzOggrsuEAnLLd6jAVqcplBHBJnUx0wsPr09jfwjT7oUB%2FYB2pzCrCv1nEAURLE2gV63HC08guwGllNp3%2F9M6Cvj2NhuLFWss9CC3VkuwwhXmgmjB88Y%2B3pAGNTzYBd%2Bb767ZquLUfUlDCl9ZJrIRbD0KyqIyah%2BlnZad4d9q26RuPg8gBcyDXOu2s5Eaik5376hDxX0TfAekly17Bo9lw8QXzbyrEAdPysNMAIHnIzaTrnSHJX7RzT%2FxQ6iIE4UDaD5vgeTTQsiAhDkaQzvy8RWoVtMg0jpyAFVNwpAIdxN6t%2FnW2D3l7TbiQ%2BVL6rhlmg6MCINDtCkcnzuzv33i%2BDg9FKYTWyONoQGgkRPXIDNZrsd1hDJbOeFbY2xRmP%2BaGGebRVU2m%2Fmn7owz5awwwY6pgHtjDBk9UYAup26mXgp1Q0l%2Fb8X0XxqPIoY64LKSxfuY4moUmEjcLLRg33eQRQvl2LbRUejnOcQhO7SH2Sq8Lpkf2hzOdtU0ZyvIxMeo92quwCR9siNWiN8KD7vblGU5AOuUdeszeXxclsYsSAoCMVp9fUimZRpoM6Cc%2BxAVItSXWmYhg5FchyyGUvDxlvzIN3N%2BuktDSaNO5lXRZKC9D4BEBBheAQg&X-Amz-Signature=b7375b3940c072f1681730289a6230a8e0ce8ca335b5c32508b8721691b22a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRSAJOF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGTxGXJZm9SySS3GefBZRLNMEJM6KWRfRSRNMrxgweBcAiA2B7dASkpkyHC2jXp%2FPpMT3i7vTngN4zqFjn9LyXJkrir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMY7qN44%2BIxc3YZcwFKtwDiyJ8Kdhxlsi0NRvkv2z71OwtYX9xfRVDe%2FyaBJitUezvCdpYjytvfjH0sWCrMl9BIRHnIBDxzGN8F2aMi4kcBWikmVAe%2FIkouwh7j8tamhDCZsZVmOIInRcwT3lOZ2%2BTHffVRckYcqxA4g%2BDJC%2FvJNBrjDFB0f%2FplxEzXj6EVTSKK%2Bun4FoxsbtvXCd7jmy0wSPvBKp8aflzZ7wQeHcd%2FJX5m50K2%2FVHTuCeBjsfen4RSW0O3spSKAiLQkDTSDdGEnO0kHOWIJHpsfFd%2Fysxh5smrc1XYbWHUUkCObMK5U3lHXtCq8U5a9R8N0y1osQQ%2BA7B%2BPRHrO4Q6PdWCyBOuSmbrZBcJHyB%2FkZM8X%2BhS4lb83CmEJKMg69YO9kWoH0FP91o9YgHBkl1MBTgtvwxdkqRnW%2FC0pdx0ewYulFm2In66dx7iJwOD0tvFdXFDAvRiw7iEY7XO159785VZZ2jZdmMdsHXWbatH2NRNbzHdMawZ2NbqcdC7HNyTfOmkILS6gPIWobXMcFyopKydOqWhio%2BZ3L4qCuHYzqhKJIqnYzDzao89n5LGDOBZwr%2FeHVJGskUqclcm%2FN%2FruDAwDrgviGdu8GYNQkNtFjtpdYx2noSODLaf8TvztT0gRQwz5awwwY6pgGoW2uLR8fGDWElD14j3UMc8M4%2FKILeMkXGN5WqFtZhI0wINqeojIvE0DRiQeXt2HwiC4MpEOVFHU1xAjPsXYOg2OASsggCcbidKp14H02otBWN%2F%2BDPiraZKHN796znloASlm69W6%2B9V8%2BDP9RQL9unOUy%2FOf3mMO0qtFQ9LdvACyADFS6b5eFCgNCcN0SIVTQaERBi38JfXWMOUzfOGqL1%2BNKQZNNW&X-Amz-Signature=e94389155ac83166102fdbb303c21c02ae2015454a2cb70e3a5babca6c3940a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
