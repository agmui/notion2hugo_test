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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHCDTN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX%2FYQL5gXTs%2B086hHq4rvXkN7PDN635rgJcTvcmkcMuAiAC%2B9gJ8BwVFE2pVvh%2Bur%2Fo9DQ2mlTpsb%2BKWg8bdVIlYyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Hkqpqj4sBu%2FWkgJKtwDKV%2BNydiXfa%2Bw7lWSaS%2FH%2FHfOAg5NjuuZMAuWQVeK1kdC3dacSITZnCCLkAqXvLqmYtvfJIttXSngyU4Y8k862RiLCgVb6oNzsL6MaDa8KTb2Wx%2FLPkVsoSz4lOmyLbVYUtfbzGmIgT7TmsPwgvxru%2Fqv%2FCDKpHWbd6mnsypy7ceocaeyCsdPca%2FhDAb6hjynER%2BcfwYJ4Iqr2%2BEC41QZBupC5Ll4sqhgAxAijSM7%2B0k2xT8iNi4Rx6kcjAgFT%2B%2BqSSmzzmMF1XLpHwZ5sr3LCCVNmuF0BZF59Z4%2FJY%2FRFHWpejbXch98c%2BE8T%2BB9Ocy5Wbk8Zlg4E5gRELy1ceva2Uz%2B5D81OJS5igI5%2BqwiheoKV0rsDjys7icmMv%2BZmdsE4J7pUKAiQOZ%2BBjQiF2%2B9KaycWSTSNG9x%2FicWKVzZZQ%2FEv6D2m2uWsIOqhRZAiYhzYI6VEPPFo9W4DRmXNhTNgg9vTGh5bNO%2Fehxky%2Bbslw7uafAtg5AKj%2BjlwV3Oc7GvGSSp84fIjZh05nrjMVBmcHYE9XqfV17zi68bzNf2c8XVgoEZXwOrPaJZXheh9jn5LmCnR76z4Z%2FBX%2FCWd7cY5hACr%2F0NpwgTUi%2FnzJG%2Fv7QPauCi1lfBOoKmDCEwobrjxAY6pgGNuRal6ZmcHCZJ9BqfGeSYeXxIBOXebApD7ZqGLwO38Nu%2FiysusM0DFQGUdZfCULi8WjFiLbujwWhXlPks2bU7VjSeqh5XjXzGSNz1JjzmvA9wbtCOsd0Llt8Gwe76S05d%2Fe1DE9hh9LzoPzD0lCKeKSBLxKqxO5wVCE5YfjAJEjiOc%2BpNyYlPEeCaQm0S%2Fg0z8OeQXK7%2BvFe6t%2Bydo50DIoCUlakZ&X-Amz-Signature=3bdd75f149700d26387a0229e68566d422815d72c8f6125d7727e310ad8b77c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHCDTN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX%2FYQL5gXTs%2B086hHq4rvXkN7PDN635rgJcTvcmkcMuAiAC%2B9gJ8BwVFE2pVvh%2Bur%2Fo9DQ2mlTpsb%2BKWg8bdVIlYyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Hkqpqj4sBu%2FWkgJKtwDKV%2BNydiXfa%2Bw7lWSaS%2FH%2FHfOAg5NjuuZMAuWQVeK1kdC3dacSITZnCCLkAqXvLqmYtvfJIttXSngyU4Y8k862RiLCgVb6oNzsL6MaDa8KTb2Wx%2FLPkVsoSz4lOmyLbVYUtfbzGmIgT7TmsPwgvxru%2Fqv%2FCDKpHWbd6mnsypy7ceocaeyCsdPca%2FhDAb6hjynER%2BcfwYJ4Iqr2%2BEC41QZBupC5Ll4sqhgAxAijSM7%2B0k2xT8iNi4Rx6kcjAgFT%2B%2BqSSmzzmMF1XLpHwZ5sr3LCCVNmuF0BZF59Z4%2FJY%2FRFHWpejbXch98c%2BE8T%2BB9Ocy5Wbk8Zlg4E5gRELy1ceva2Uz%2B5D81OJS5igI5%2BqwiheoKV0rsDjys7icmMv%2BZmdsE4J7pUKAiQOZ%2BBjQiF2%2B9KaycWSTSNG9x%2FicWKVzZZQ%2FEv6D2m2uWsIOqhRZAiYhzYI6VEPPFo9W4DRmXNhTNgg9vTGh5bNO%2Fehxky%2Bbslw7uafAtg5AKj%2BjlwV3Oc7GvGSSp84fIjZh05nrjMVBmcHYE9XqfV17zi68bzNf2c8XVgoEZXwOrPaJZXheh9jn5LmCnR76z4Z%2FBX%2FCWd7cY5hACr%2F0NpwgTUi%2FnzJG%2Fv7QPauCi1lfBOoKmDCEwobrjxAY6pgGNuRal6ZmcHCZJ9BqfGeSYeXxIBOXebApD7ZqGLwO38Nu%2FiysusM0DFQGUdZfCULi8WjFiLbujwWhXlPks2bU7VjSeqh5XjXzGSNz1JjzmvA9wbtCOsd0Llt8Gwe76S05d%2Fe1DE9hh9LzoPzD0lCKeKSBLxKqxO5wVCE5YfjAJEjiOc%2BpNyYlPEeCaQm0S%2Fg0z8OeQXK7%2BvFe6t%2Bydo50DIoCUlakZ&X-Amz-Signature=b04cf1fd4459ed3ba9569db0c30fd66bb78370a1645a195699bc49745eceee44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHCDTN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX%2FYQL5gXTs%2B086hHq4rvXkN7PDN635rgJcTvcmkcMuAiAC%2B9gJ8BwVFE2pVvh%2Bur%2Fo9DQ2mlTpsb%2BKWg8bdVIlYyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Hkqpqj4sBu%2FWkgJKtwDKV%2BNydiXfa%2Bw7lWSaS%2FH%2FHfOAg5NjuuZMAuWQVeK1kdC3dacSITZnCCLkAqXvLqmYtvfJIttXSngyU4Y8k862RiLCgVb6oNzsL6MaDa8KTb2Wx%2FLPkVsoSz4lOmyLbVYUtfbzGmIgT7TmsPwgvxru%2Fqv%2FCDKpHWbd6mnsypy7ceocaeyCsdPca%2FhDAb6hjynER%2BcfwYJ4Iqr2%2BEC41QZBupC5Ll4sqhgAxAijSM7%2B0k2xT8iNi4Rx6kcjAgFT%2B%2BqSSmzzmMF1XLpHwZ5sr3LCCVNmuF0BZF59Z4%2FJY%2FRFHWpejbXch98c%2BE8T%2BB9Ocy5Wbk8Zlg4E5gRELy1ceva2Uz%2B5D81OJS5igI5%2BqwiheoKV0rsDjys7icmMv%2BZmdsE4J7pUKAiQOZ%2BBjQiF2%2B9KaycWSTSNG9x%2FicWKVzZZQ%2FEv6D2m2uWsIOqhRZAiYhzYI6VEPPFo9W4DRmXNhTNgg9vTGh5bNO%2Fehxky%2Bbslw7uafAtg5AKj%2BjlwV3Oc7GvGSSp84fIjZh05nrjMVBmcHYE9XqfV17zi68bzNf2c8XVgoEZXwOrPaJZXheh9jn5LmCnR76z4Z%2FBX%2FCWd7cY5hACr%2F0NpwgTUi%2FnzJG%2Fv7QPauCi1lfBOoKmDCEwobrjxAY6pgGNuRal6ZmcHCZJ9BqfGeSYeXxIBOXebApD7ZqGLwO38Nu%2FiysusM0DFQGUdZfCULi8WjFiLbujwWhXlPks2bU7VjSeqh5XjXzGSNz1JjzmvA9wbtCOsd0Llt8Gwe76S05d%2Fe1DE9hh9LzoPzD0lCKeKSBLxKqxO5wVCE5YfjAJEjiOc%2BpNyYlPEeCaQm0S%2Fg0z8OeQXK7%2BvFe6t%2Bydo50DIoCUlakZ&X-Amz-Signature=d930e65f644d3e01f837525679d348908a1694e5272743be307e19999612e90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOX6MXV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWNDYvPdqwOB%2F%2FEg97oLFi9eHYuCoAWf1uESM4UiUKpAiBoq9Ok0QIJhSpDx%2B6SjljmFkylCznfdUczD1fpKlbOeyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM53JrXOcqdVrbS%2FDuKtwD8hjF6XdyhzIL7Y9SuCUYVUNoL%2BaNrt05y36O0WIuvYNRE1yVkZtQ7G8s7p64htaCUARIFZLVujmbcLv6698kEbf0UORYhl5yAUWC0gby6RYP2MCQSmL65WCPKUFaMUk7He4gsilpf1l500yZDiW6FFCvpdjWKyGsMPXO7O%2BKckHKj2ePCh08DpchbuBYj5i%2Ba1oJyrP14rcOff0UIf7sszWAMMg9LzcayB%2FPLJz6YG6zMYQoSsB1rTZrEQsL5Vyt1sNSpxCeAzzxx2Ql36BAuXAC0M5V9uPelSXvPFspQdCwuwPzXmo%2Fv8kSGMeAcNmpQmhhgntkG1inP0e3YLrNak%2BJEUVMfZ5r9z3dEkS3egbe5f4%2Bn%2BxPah4jPvjdH5SsgTbjciPQJgvWPjr%2BLrBbx9IYoWveIi9lHksVRU5sHOdt0G6%2FqVwL4fVg1gx06QXWyRC0vGdxbI7P%2FFQ5b58OhL1qG8mUBd60u%2BSFXPLgCCFWuZ5VpktfKGztIDSuB%2Fp4OsAThkI33ZfTarkCmxN8Aa45fdBzUni0mfGLCjhncvdNMmr7mi%2Fqpf7X7CdCb3jAUgrb5Qwrdoys3D2FNLvoNWBdGg2swTWpfc%2BZhsZFGVZLvY54JLdGRvk6dE4wl7rjxAY6pgFcCTRBO1mn5SL3m0%2BirCNZTgGTlidv8oEjNnAHml5AMkd52gw%2BAQ1Pq%2BRoLcfsZ564XiKbJoBUgSWDnaBa7SVAjdojr8MuMZTlaCtaU0JrArBf7rUiqO3Q1eial2utPV%2BSqDs5XJ%2FINYoAzUPV5lduM2JZFyiKq1gBlu6Uz9%2Bz5z8zvE22N%2F3AXAKfPBxP94Aaqlmk9ZwTg9k2LbbnYgnEQYac9uih&X-Amz-Signature=de634e861542b35b3a3663384778b2c5720f20b770318c4b9c683f6aac3cd470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSF65Q3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ZA0La2e7C%2BnzeHAOBNOdUFlfHvMgXHJlm%2FgjF%2BPuvAiEA%2FDbDyHtrVGajccpGAjWrOeNOJJy06yTGn5xuRGtkfrQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhTduJOVAf2JcIIkCrcA%2FT1W7SxRmg%2BE8%2FafhLZwc%2FUOThzZf%2Fl2K5BIt1zqUHYNXlBE%2BEV95xkStaUDSxrGOMkYnaoydiRmtaET1SQKzdFPBAApiDrffh%2BiDfKODgHHxXf1ezgnBMTfHOMr%2FJhsX8w%2B%2FxmsYfBIaj%2BQUqEGD3sWLMxYH2rjJxiubw33lFnA7DTTq4SRJKXGGUhfKLEOTmCVmmzN7UPTsM9Ykk76YfBFRUNAWtcG5a7tnbNI7q%2BOZyXLTWVvJYG2H4YIk%2FmswEBjRN7mYrvt4QaUCx9ZYKhhyR73G17Ze2mY0O2WEkbQnSLL3TdkU%2F8RY62iAW7yb4JUgEUaRlFGhnXul2pHA9Zq8e8Ml2WGpxdEtV8hclWm5Wu9B1QNX2mcrdMz4O1nQjYilHWlcuXZCegaMzUkofbS4ezNHpd8IYA%2BGp1H0qwS%2FdWlzJCrY0SflY4KQFK%2BkwsZ%2BexIXQY0Ue50fLex%2BpkpyoiDbUh7dGUXegYJ9%2BVgcQfLRpjGqq2p5r2oNIR6AxwCBAp%2FNiYxwUF95eCH26SrZC2PiKBwUAXNZ6Jv2OsnJ0vpjdkzBCOR1%2F9%2Fy0M78bWb0mKMsTORF2idDvjOnQ0i05GnQh8OsS7wMUcMzKZ%2BSLV13or6TCBChFEMJ2648QGOqUB%2BwQSKT%2FGAxYeP6lORmOX8IcJvk0oUkQeYDjC%2FIcTkVO5ezxIgJfL0zgik%2BvMFlz5qNHyN8Fv1NB8Sb9mC%2FBJ5Kq5cu59DObV%2FrBkMt3%2F8RdcSW8dk%2Bug9qTWVF7Yw%2BHC8IoGuJC6VrYJFSOeB%2Bnp84sWVIaL%2F7LpgfN1uQA4LZIOJH76deegcYE6EIKJHD1O6fxb7nWoBhe0d7bSH9kQ2j0udyBa&X-Amz-Signature=54646f8d0a9569ca13d98db3469008ff60ac20f427949c1a39f0d419b2cf3a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHCDTN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX%2FYQL5gXTs%2B086hHq4rvXkN7PDN635rgJcTvcmkcMuAiAC%2B9gJ8BwVFE2pVvh%2Bur%2Fo9DQ2mlTpsb%2BKWg8bdVIlYyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Hkqpqj4sBu%2FWkgJKtwDKV%2BNydiXfa%2Bw7lWSaS%2FH%2FHfOAg5NjuuZMAuWQVeK1kdC3dacSITZnCCLkAqXvLqmYtvfJIttXSngyU4Y8k862RiLCgVb6oNzsL6MaDa8KTb2Wx%2FLPkVsoSz4lOmyLbVYUtfbzGmIgT7TmsPwgvxru%2Fqv%2FCDKpHWbd6mnsypy7ceocaeyCsdPca%2FhDAb6hjynER%2BcfwYJ4Iqr2%2BEC41QZBupC5Ll4sqhgAxAijSM7%2B0k2xT8iNi4Rx6kcjAgFT%2B%2BqSSmzzmMF1XLpHwZ5sr3LCCVNmuF0BZF59Z4%2FJY%2FRFHWpejbXch98c%2BE8T%2BB9Ocy5Wbk8Zlg4E5gRELy1ceva2Uz%2B5D81OJS5igI5%2BqwiheoKV0rsDjys7icmMv%2BZmdsE4J7pUKAiQOZ%2BBjQiF2%2B9KaycWSTSNG9x%2FicWKVzZZQ%2FEv6D2m2uWsIOqhRZAiYhzYI6VEPPFo9W4DRmXNhTNgg9vTGh5bNO%2Fehxky%2Bbslw7uafAtg5AKj%2BjlwV3Oc7GvGSSp84fIjZh05nrjMVBmcHYE9XqfV17zi68bzNf2c8XVgoEZXwOrPaJZXheh9jn5LmCnR76z4Z%2FBX%2FCWd7cY5hACr%2F0NpwgTUi%2FnzJG%2Fv7QPauCi1lfBOoKmDCEwobrjxAY6pgGNuRal6ZmcHCZJ9BqfGeSYeXxIBOXebApD7ZqGLwO38Nu%2FiysusM0DFQGUdZfCULi8WjFiLbujwWhXlPks2bU7VjSeqh5XjXzGSNz1JjzmvA9wbtCOsd0Llt8Gwe76S05d%2Fe1DE9hh9LzoPzD0lCKeKSBLxKqxO5wVCE5YfjAJEjiOc%2BpNyYlPEeCaQm0S%2Fg0z8OeQXK7%2BvFe6t%2Bydo50DIoCUlakZ&X-Amz-Signature=25dd435428f47516867c837902068ef25319e4ebb6282cf86f9dd6cf432ed42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
