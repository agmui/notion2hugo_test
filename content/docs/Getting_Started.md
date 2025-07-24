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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFET36US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAUNhOugrZP1Gz1pgry5NTEzlpNKvpzxXHdXeD75HV%2FeAiEA9fqAeup09o%2F7semy%2FYwD%2FEWHavAuZbCP4hk7vQja%2BL0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOTqpPCIF3NJakal8SrcAxAkm3SdC6EH9dzWUA5nIgcfTWrzbJZnvXZbU2Bk%2Fiq%2BzKiN6GJ2%2B7Fyvh8u3rUkdhr1yBcK%2FsW9N9o25DPzADUPK53704nxrPHaNHfvXHvb7X4MZhASLLqtf4qqDmnzBF48e70dxG4VqEeb3ftT8mNeOEyaCyEGsQ2y0qiebnzVDiyEX%2Fl9iaZ%2B3Yx8pgPBTug8Dnl13EDjdZtjEvGl4XfYmpc89PL5ZuHc2AWa%2FbHaqGMTIYhUgzu6FjQsgVSZ0rVQyc4xJ3bfTpym4CD5wvu%2BM%2B%2BJvJD3ZO0UMFIyHKaxkv%2BNVVAANIDE7jSGnB%2BfCpD%2F1YdETu8sZ5aTraZzE2IXx0za1IyV1DCMp%2BBxinaQyzPd4dppXV831wzdvX2c%2Fo2Reup5PVONAhgOTeyxmTUg%2BJTK8%2BJBcySTqy0A1NqnnlZRpisZm2X7SVe6NnGcOWGycP9P%2Fo8CYdbdqvyxCpf47nxYYQguWIiiYvz239ZrtmaI5bW6JbPo3WekDGLnag6tyrPgMnuESrH6WphOPh883JPnLbkU70FbnUcNzvfwZsGhyFqW06rsrPck4iq8Sbt50y%2B6zIAkoHaATjXmaDfV6lClkR6IQhsxuy8O%2BHo%2FkncKgjIQa8EGC5yfMNTZiMQGOqUBEWvxMnXjqosSosYCX73k%2FAJf%2BNHD7JREY%2BezzA6U9EmyrTgg%2BrPMXyswmjRbH5o7ifEevPuVpxOLcQ1m%2FVGnDxs6o8whGUu%2FCeVTrstT8Zhgdr150GFKYKRyENReLO9Mfhv0eNhG%2BUohT4dDrWSIpt4s88N%2FURoy8oGod5eTf9Rrcie%2FH8nvN%2BHwBQtS0nAi7bxDa1YN1DFk%2B58XqP8d1yTAhMmN&X-Amz-Signature=2fb2309888b0e5d8f63a03cd08778a8a3707e748b9769217278b4100ebff9060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFET36US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAUNhOugrZP1Gz1pgry5NTEzlpNKvpzxXHdXeD75HV%2FeAiEA9fqAeup09o%2F7semy%2FYwD%2FEWHavAuZbCP4hk7vQja%2BL0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOTqpPCIF3NJakal8SrcAxAkm3SdC6EH9dzWUA5nIgcfTWrzbJZnvXZbU2Bk%2Fiq%2BzKiN6GJ2%2B7Fyvh8u3rUkdhr1yBcK%2FsW9N9o25DPzADUPK53704nxrPHaNHfvXHvb7X4MZhASLLqtf4qqDmnzBF48e70dxG4VqEeb3ftT8mNeOEyaCyEGsQ2y0qiebnzVDiyEX%2Fl9iaZ%2B3Yx8pgPBTug8Dnl13EDjdZtjEvGl4XfYmpc89PL5ZuHc2AWa%2FbHaqGMTIYhUgzu6FjQsgVSZ0rVQyc4xJ3bfTpym4CD5wvu%2BM%2B%2BJvJD3ZO0UMFIyHKaxkv%2BNVVAANIDE7jSGnB%2BfCpD%2F1YdETu8sZ5aTraZzE2IXx0za1IyV1DCMp%2BBxinaQyzPd4dppXV831wzdvX2c%2Fo2Reup5PVONAhgOTeyxmTUg%2BJTK8%2BJBcySTqy0A1NqnnlZRpisZm2X7SVe6NnGcOWGycP9P%2Fo8CYdbdqvyxCpf47nxYYQguWIiiYvz239ZrtmaI5bW6JbPo3WekDGLnag6tyrPgMnuESrH6WphOPh883JPnLbkU70FbnUcNzvfwZsGhyFqW06rsrPck4iq8Sbt50y%2B6zIAkoHaATjXmaDfV6lClkR6IQhsxuy8O%2BHo%2FkncKgjIQa8EGC5yfMNTZiMQGOqUBEWvxMnXjqosSosYCX73k%2FAJf%2BNHD7JREY%2BezzA6U9EmyrTgg%2BrPMXyswmjRbH5o7ifEevPuVpxOLcQ1m%2FVGnDxs6o8whGUu%2FCeVTrstT8Zhgdr150GFKYKRyENReLO9Mfhv0eNhG%2BUohT4dDrWSIpt4s88N%2FURoy8oGod5eTf9Rrcie%2FH8nvN%2BHwBQtS0nAi7bxDa1YN1DFk%2B58XqP8d1yTAhMmN&X-Amz-Signature=e2bd20571d852f7d11086cdbffd7024e0db06960c0205d5b23657e9c56bbb538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFET36US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAUNhOugrZP1Gz1pgry5NTEzlpNKvpzxXHdXeD75HV%2FeAiEA9fqAeup09o%2F7semy%2FYwD%2FEWHavAuZbCP4hk7vQja%2BL0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOTqpPCIF3NJakal8SrcAxAkm3SdC6EH9dzWUA5nIgcfTWrzbJZnvXZbU2Bk%2Fiq%2BzKiN6GJ2%2B7Fyvh8u3rUkdhr1yBcK%2FsW9N9o25DPzADUPK53704nxrPHaNHfvXHvb7X4MZhASLLqtf4qqDmnzBF48e70dxG4VqEeb3ftT8mNeOEyaCyEGsQ2y0qiebnzVDiyEX%2Fl9iaZ%2B3Yx8pgPBTug8Dnl13EDjdZtjEvGl4XfYmpc89PL5ZuHc2AWa%2FbHaqGMTIYhUgzu6FjQsgVSZ0rVQyc4xJ3bfTpym4CD5wvu%2BM%2B%2BJvJD3ZO0UMFIyHKaxkv%2BNVVAANIDE7jSGnB%2BfCpD%2F1YdETu8sZ5aTraZzE2IXx0za1IyV1DCMp%2BBxinaQyzPd4dppXV831wzdvX2c%2Fo2Reup5PVONAhgOTeyxmTUg%2BJTK8%2BJBcySTqy0A1NqnnlZRpisZm2X7SVe6NnGcOWGycP9P%2Fo8CYdbdqvyxCpf47nxYYQguWIiiYvz239ZrtmaI5bW6JbPo3WekDGLnag6tyrPgMnuESrH6WphOPh883JPnLbkU70FbnUcNzvfwZsGhyFqW06rsrPck4iq8Sbt50y%2B6zIAkoHaATjXmaDfV6lClkR6IQhsxuy8O%2BHo%2FkncKgjIQa8EGC5yfMNTZiMQGOqUBEWvxMnXjqosSosYCX73k%2FAJf%2BNHD7JREY%2BezzA6U9EmyrTgg%2BrPMXyswmjRbH5o7ifEevPuVpxOLcQ1m%2FVGnDxs6o8whGUu%2FCeVTrstT8Zhgdr150GFKYKRyENReLO9Mfhv0eNhG%2BUohT4dDrWSIpt4s88N%2FURoy8oGod5eTf9Rrcie%2FH8nvN%2BHwBQtS0nAi7bxDa1YN1DFk%2B58XqP8d1yTAhMmN&X-Amz-Signature=b6aba993644ec371c85a837440f1492626490d27e181f0ebf556efb8c45ba141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMVAW4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIC3agunP%2BdrF%2F5duP%2FLQhrRu7fbnJo9Mz%2Bw7EQty0GjrAiEAvN2wGsANUlH9bjMuz%2BjTMLmdYXoRySsXOH2S36i6y7sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEU%2FoONByXFK2blisyrcA5ncmB0zfzr5bH1yd6JtGl%2BINbXZXVoTOd2lVi8jToXb9L0Nv%2BPW5jecpCNWaz1EOCqFOzYKbT4rKRN4DsovuqfFSUlKVGD6lDJdQau21nq06S0%2BnURvOqB9fCE08Kt%2BNQ2osCA8%2BWuvAtBTucLowgwW2kDCT%2FbPmTic74PKgtRvBFgOeTq0GMvh9JUlbl2h0NwTcZ8%2BoGtMzdpUR0j1Y3QLBnoboXnF%2FmKusXOTGxgHLQ9fpAL2TSDfi1I3kOpVXJUFGN6E5VfsDshSGrVgujKVkFmDhI6nf4OIkJwf2uzg8eL%2FDFZa0aTZuIWusYadIgugwHnr3vPfyrmw5%2BS8Og%2FCwgfkMy%2FbBZ2qmFQHuFD%2FykxetCnlKtRntgXJ2KazcgoLd452Xn5w8bn8OH7bkVgYVxT4q2IKwwvZ148j%2FCRyazQO5qtjoEOdN8vPg02WHDzsZ6YxeFz%2Bf3HKPXMMrR9f8bVezTeF1Jrj8SuB6Rbrdu%2F7v%2Bcqyfkttd%2Fp1nuxrrqo3mt4Y7M949zTdJH7dDRyESNkXe%2FOHb9wELX8PkNY2R6UjV%2BtyrL5oY48myJOSa5lZdIoKSFakygmdBZV%2BnoYP1hN5CUz00uLmfx1nMqebAZ7KQqR3Z4CYt2pMKHaiMQGOqUBZYexUil3YwGlVxt7gpJnTrayEdRUghy5mo2Kv0nkAdeoy2gJGVCNA7xaA2fe7eiLLDktUPQWq%2BG1H915z56bixajZSVxm%2FkwOa1eBTXWZBr9XkSyW6NxCeLpNFhXmfNjRH%2FXfcCtzZK6w%2BD5Gx6%2FAt18k9NJ5L8kYI7xgS1w2UXLUMIePG9dez2u0z%2BtCfpLOvfSNMHN298%2BIeQQRnrn6Nl%2FYZ2X&X-Amz-Signature=876a5a1362b9add2cf4c48d619d2c4be0383545037371cda9004b1029925ebf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIBXO6J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDIZwBLoLxKJMINIaKxrIMXjv4aqAAtk3eoAkfA6ltM0AIhAOjW9ozyFmSkdD%2BkKrwIrU1ZcsH5pba4oC%2B2yQ515zv0Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzIQHHPbBdqiTkWUiAq3AOC3YvHIim5WvkHffRvnwmL0R%2FCYkCz7V%2BJgGZ64mfUehJgLus3cDgYEF2Mk75NiSJUsXwwInTrY6YitlzDOZ%2FP6tulfJNLmVkjw2o%2BhxtOTnm43SQYak262iQA9Sf3FGbdzxzP7gNZna6KIgqDqR2u0C0r30qjxZNsgxa4UnJbUlr82ogB9KnJXLKFbwQZ9PC78m4rGd49mVE5CJAanHMOq6x9cKLXyjsb62kEDfvw6VpqMl2ze%2F7Y09Rq6L%2B8RzzmcoYRxY8WHSE2MNboOMeng7dTfkqu9ZNG7gRRdThqdLB8A6PuTSgX%2FZWddifyH8R2TdGiehGdrYmF9B24WFZiAQjhD%2B%2B3JZ8dKT%2B9ptoiubhW9jFXB2%2B90J0MlEdJti1uKQQgfGP28P8NU1YwAo2GTE3uSs59ojxNA2DryzRcAncj2iJej2UPV4J%2B3UxrwE4EZgDxUeBtIRVKebKaz6%2Fty9FBcxEoaj2din71zRHf4OLJuFO6B0MGvul6BENGMVsvQV8R5abDLPjqT3Lv2IS9uQs9fGkXXDKJkkbSVXuuSUIBSRtSDVQdJjcUpy8xizz6K2rFVTzr70gESbhFDoG4%2F9pbnkIBholbgG8pZ2Iru9DiQCXkC8fdB35XXjDI2YjEBjqkAfpFcj3DI5YuGMFF69j2huLrezrO241nCtQ2ZaWuEUzkwiLOm86NksJjAqp7xA9u6efR%2F3%2BeZR2k2I0FHx7U2S9Gi2%2FgUC0pLy5hgSPFQAxdFxtlsR7I%2BUK6m3rMjJveoIQITO%2FdDF8nHzqpYwDrQnfcGqIKiEIEI6F7h5fBmCjoDdev4r9pmm7gRr6%2FXmTGQe9shVhZjXuoDsbQpVdBMDuPp1Wt&X-Amz-Signature=98bc45b7ac3f6240b40c797847bffb2b68ab512e1ad1d0cd9553e1466e8c7708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFET36US%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAUNhOugrZP1Gz1pgry5NTEzlpNKvpzxXHdXeD75HV%2FeAiEA9fqAeup09o%2F7semy%2FYwD%2FEWHavAuZbCP4hk7vQja%2BL0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOTqpPCIF3NJakal8SrcAxAkm3SdC6EH9dzWUA5nIgcfTWrzbJZnvXZbU2Bk%2Fiq%2BzKiN6GJ2%2B7Fyvh8u3rUkdhr1yBcK%2FsW9N9o25DPzADUPK53704nxrPHaNHfvXHvb7X4MZhASLLqtf4qqDmnzBF48e70dxG4VqEeb3ftT8mNeOEyaCyEGsQ2y0qiebnzVDiyEX%2Fl9iaZ%2B3Yx8pgPBTug8Dnl13EDjdZtjEvGl4XfYmpc89PL5ZuHc2AWa%2FbHaqGMTIYhUgzu6FjQsgVSZ0rVQyc4xJ3bfTpym4CD5wvu%2BM%2B%2BJvJD3ZO0UMFIyHKaxkv%2BNVVAANIDE7jSGnB%2BfCpD%2F1YdETu8sZ5aTraZzE2IXx0za1IyV1DCMp%2BBxinaQyzPd4dppXV831wzdvX2c%2Fo2Reup5PVONAhgOTeyxmTUg%2BJTK8%2BJBcySTqy0A1NqnnlZRpisZm2X7SVe6NnGcOWGycP9P%2Fo8CYdbdqvyxCpf47nxYYQguWIiiYvz239ZrtmaI5bW6JbPo3WekDGLnag6tyrPgMnuESrH6WphOPh883JPnLbkU70FbnUcNzvfwZsGhyFqW06rsrPck4iq8Sbt50y%2B6zIAkoHaATjXmaDfV6lClkR6IQhsxuy8O%2BHo%2FkncKgjIQa8EGC5yfMNTZiMQGOqUBEWvxMnXjqosSosYCX73k%2FAJf%2BNHD7JREY%2BezzA6U9EmyrTgg%2BrPMXyswmjRbH5o7ifEevPuVpxOLcQ1m%2FVGnDxs6o8whGUu%2FCeVTrstT8Zhgdr150GFKYKRyENReLO9Mfhv0eNhG%2BUohT4dDrWSIpt4s88N%2FURoy8oGod5eTf9Rrcie%2FH8nvN%2BHwBQtS0nAi7bxDa1YN1DFk%2B58XqP8d1yTAhMmN&X-Amz-Signature=e0448f6b86226e190c5f0a48eaf466e94c1af2943c067933a02b6e26bd756a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
