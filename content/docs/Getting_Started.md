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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636B42JFZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDOYDK%2F%2FTIcSA9ZamF47XPDpkjXcuAT2dPUqbk2neF3RAiEA1gEl3xOcdRJ1mi4fPUVion%2FmOd7ZaOMx48Ulr2XYv5Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKKGjgLod1Ps8iyFNircA%2F%2FOUKte1aH%2BLLkTkM%2BPnyQIUIZsKZVn%2BjAZMo7VYt2MSHq01VxH0eFym8zoodhISaEherlcMbWWL%2ByKtv3DRxq0gQWRquGmigiUw98kLLfN4%2FxC%2By2rSBCSd4qC4z9uZiOBkK0fVkha02tOFuC8evbSV%2BAFPiWXh%2BvFx1AVyrl6k9W8tJPmqegrI34DDTZkw2nTSBftRvnLpv6%2BZif2rWHbhnXoGM%2FdtAEFhubEgJGXAVbDvKy1PO9YACdjHSml1hCZYV5S0pLDvIkVjHa94SDKYoE36v5FFDg7lctrQFf8CYNyMo3%2BimeAKxOzeiu9E76Yx6LlZHwDcWekaU30B6lEzoty5bpwPud4FRMf7T4hdBMNqLMogRodVYqfcfmrnkdp8jedrveCK2kWweWlsJdS1jx16Z1dufvcamgpE4WMZuQ8OLyX0QjlW4xeZkGFiUOsRRycZuTvCA9Xr9MECcgqC1v7cajZgA7N0BMbCQtmH9G9au6dB65JZlYJxcBobv532e3fWq8o8qvQy31Z1mB3IWDF2TFrDEwyGix5k2rae7SI%2FpYBQhfDAPlno0u88qG1JnZQyenRR29V4zwHrL4vA5A8%2FczTryM3ZuKHpe2vXV1lWdVxZ6ky92GvMNu6lsQGOqUBjbvKDrhjUwtLgbSpsLDdmD18%2BNyMysVha0y9p%2BCHI20hpLqjeoxeUrzmH8UjHwofsps0bVcaMwtz5fJu3LYkfUxJfopF1zgHMr4bCcQTIPANz9ZRZe%2BVjt8FgkIU%2FnS8NgiTa02hykjcAEl9tY6CldHpBfrnk1codLk0PIwkUcAQeBT81xaGj6NgP%2BnY8l%2FIXh5Rac518kVT0%2F5N7P85Fykszrid&X-Amz-Signature=ae51275d5033c59659299882232b99ac2ed411055c488fce10b2c63b691cb8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636B42JFZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDOYDK%2F%2FTIcSA9ZamF47XPDpkjXcuAT2dPUqbk2neF3RAiEA1gEl3xOcdRJ1mi4fPUVion%2FmOd7ZaOMx48Ulr2XYv5Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKKGjgLod1Ps8iyFNircA%2F%2FOUKte1aH%2BLLkTkM%2BPnyQIUIZsKZVn%2BjAZMo7VYt2MSHq01VxH0eFym8zoodhISaEherlcMbWWL%2ByKtv3DRxq0gQWRquGmigiUw98kLLfN4%2FxC%2By2rSBCSd4qC4z9uZiOBkK0fVkha02tOFuC8evbSV%2BAFPiWXh%2BvFx1AVyrl6k9W8tJPmqegrI34DDTZkw2nTSBftRvnLpv6%2BZif2rWHbhnXoGM%2FdtAEFhubEgJGXAVbDvKy1PO9YACdjHSml1hCZYV5S0pLDvIkVjHa94SDKYoE36v5FFDg7lctrQFf8CYNyMo3%2BimeAKxOzeiu9E76Yx6LlZHwDcWekaU30B6lEzoty5bpwPud4FRMf7T4hdBMNqLMogRodVYqfcfmrnkdp8jedrveCK2kWweWlsJdS1jx16Z1dufvcamgpE4WMZuQ8OLyX0QjlW4xeZkGFiUOsRRycZuTvCA9Xr9MECcgqC1v7cajZgA7N0BMbCQtmH9G9au6dB65JZlYJxcBobv532e3fWq8o8qvQy31Z1mB3IWDF2TFrDEwyGix5k2rae7SI%2FpYBQhfDAPlno0u88qG1JnZQyenRR29V4zwHrL4vA5A8%2FczTryM3ZuKHpe2vXV1lWdVxZ6ky92GvMNu6lsQGOqUBjbvKDrhjUwtLgbSpsLDdmD18%2BNyMysVha0y9p%2BCHI20hpLqjeoxeUrzmH8UjHwofsps0bVcaMwtz5fJu3LYkfUxJfopF1zgHMr4bCcQTIPANz9ZRZe%2BVjt8FgkIU%2FnS8NgiTa02hykjcAEl9tY6CldHpBfrnk1codLk0PIwkUcAQeBT81xaGj6NgP%2BnY8l%2FIXh5Rac518kVT0%2F5N7P85Fykszrid&X-Amz-Signature=67dbf6c5f875610de6efd7741fd8270235c4a9fb430876eb656a2eff6c70ac40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636B42JFZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDOYDK%2F%2FTIcSA9ZamF47XPDpkjXcuAT2dPUqbk2neF3RAiEA1gEl3xOcdRJ1mi4fPUVion%2FmOd7ZaOMx48Ulr2XYv5Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKKGjgLod1Ps8iyFNircA%2F%2FOUKte1aH%2BLLkTkM%2BPnyQIUIZsKZVn%2BjAZMo7VYt2MSHq01VxH0eFym8zoodhISaEherlcMbWWL%2ByKtv3DRxq0gQWRquGmigiUw98kLLfN4%2FxC%2By2rSBCSd4qC4z9uZiOBkK0fVkha02tOFuC8evbSV%2BAFPiWXh%2BvFx1AVyrl6k9W8tJPmqegrI34DDTZkw2nTSBftRvnLpv6%2BZif2rWHbhnXoGM%2FdtAEFhubEgJGXAVbDvKy1PO9YACdjHSml1hCZYV5S0pLDvIkVjHa94SDKYoE36v5FFDg7lctrQFf8CYNyMo3%2BimeAKxOzeiu9E76Yx6LlZHwDcWekaU30B6lEzoty5bpwPud4FRMf7T4hdBMNqLMogRodVYqfcfmrnkdp8jedrveCK2kWweWlsJdS1jx16Z1dufvcamgpE4WMZuQ8OLyX0QjlW4xeZkGFiUOsRRycZuTvCA9Xr9MECcgqC1v7cajZgA7N0BMbCQtmH9G9au6dB65JZlYJxcBobv532e3fWq8o8qvQy31Z1mB3IWDF2TFrDEwyGix5k2rae7SI%2FpYBQhfDAPlno0u88qG1JnZQyenRR29V4zwHrL4vA5A8%2FczTryM3ZuKHpe2vXV1lWdVxZ6ky92GvMNu6lsQGOqUBjbvKDrhjUwtLgbSpsLDdmD18%2BNyMysVha0y9p%2BCHI20hpLqjeoxeUrzmH8UjHwofsps0bVcaMwtz5fJu3LYkfUxJfopF1zgHMr4bCcQTIPANz9ZRZe%2BVjt8FgkIU%2FnS8NgiTa02hykjcAEl9tY6CldHpBfrnk1codLk0PIwkUcAQeBT81xaGj6NgP%2BnY8l%2FIXh5Rac518kVT0%2F5N7P85Fykszrid&X-Amz-Signature=a79d284d40274f1377878cf38a5f437eae42a4c6b990ffb4e1a133ba9c7f6f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSE62AQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCN1QZ2kxXAaPHbUqHgv0HgHulNpHHQnSNofz%2F6R3VWOAIhAMt0aLVGW4lBPgfgkOp3NSg29M%2BjGe6GJdU470Cey3kqKv8DCG0QABoMNjM3NDIzMTgzODA1IgyOmtCg7MsLbWbOs70q3ANRLLls9JIM%2Bzp5EpZWAzpK%2FrLDeUvkPSwkcO5P7eDMngvcARo%2BsUXBT3RUdVoY6SU5bwDXYnYVryjkiucVDlSDPMOqSqc0hiHEXWrEfyL9rfyE5%2B1PzcDw3Mh1eTH9QNgCSqOwTPAu8UOSmEHz2gXe7X7rRbJk9W7Ss4IotXeYrvVdj93Ruj8ohqlHkXNMoVMiC%2FJjDk0eMgeQZPua9UdiejihfzoS%2F2AVemsRCDvmmuAntIvu7tXY4aJmD1hKfh4ujmbDKpve56i3ckkpPPYOoPFRwv4Ww2LsY%2FCRypJ4wq0VZNgh9WMawuZO%2FpD6HjtiUpr%2Bns92zJygw5%2Fqdtzrodlf6pOxro8mGkMvyapvPcoQ6YsS8X2AN%2BojxWy%2FsUDe5Au7JFtPpJiHNQhc2U91Wf%2Fx%2B5sPv5ZJ5OY90rrkfiETjoOIGNbh13QOTiRR%2B5ac%2FMxifRVF7lUnBgMm3MY1MCKJLQInjFa6C12Zlf%2FhQxPkYPJsWDViLain0JtZuPGitU6YGfg%2F8LNyVIUyeOQmBPXfvOJIau10BduyvmbPpZTI6yUMnXCoymAwcLboXaEVU%2Fcs73tpBHNzQtNXcxO5xqkVSTDvWz63d%2BEVFp24yBFKpW6sp9Yj0Tep4DDQupbEBjqkAfqAgLrIuGnDrmFuTVlEzCm4%2B6HKSymE7GgIXcR8xfHI5PnvObZXOY1X208KQZGQ0JN%2FU8WSrb674AkePevYvaVv2WlSC31nna3EauGN7sVkjEgE%2Bb89myA5IQXURxeunwfDQFWengJSL9H8auanVUePULEOLYLOav7%2BqAoI8%2F9L%2F%2Fm0aD84ui9wsIZYs26hq76NbxJXyOfnKtuTdh%2BAqXqs0xIY&X-Amz-Signature=cb690c9c190227e599d7c0bf8a540ce44023a60e3f5ed7bee97e48c110840d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJ7NHTM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIA0S5NUJkV8l0AM87RWfKER990XhiGWfd2uyOqU2BECzAiEA6SvJ%2BhnQA%2BvB7t466UzkApbB45IqyHmE41gtcxU3d%2BQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEz2GvkOY499HAphyircAxKKLU7S2U%2BjQ4Lu7pgdeaULkzIDaBkvf0QOQNsHznk%2FpXAutqxHoAsvUIfXrYCI7Fj4HoykiuubCO3ZmBqnGgPvcsxMlfwsST%2FCeO8viU2BJyO%2FjAnDislHhDy61L1HZB2Lk3GOp7bSdSVf3YzmxRUHuTmeCi50HYFEKvLfb%2BS50V8hrVE14pQU1QPq7Slefa92SisZLoLT9UD5ALlSgevxUzx13WfzhH8XvT6ccS%2FyfJlUQIcKgA65UtCy2TmJ7u4L0ZxwR8zKjenrIU4ZGuYm%2FxXFPEPh56GYTuHlN6%2BMbmD6pQL6pQxsPfg2mhd83CUh3huH26hfHw085E8H%2F8K%2Bx6uSJ39jMWMiJ7A1KFMZ5%2BOr8zF81RgUGya7GUD2%2BXxrkh7NI6CZuB7qlfZMinZKhHiTGWwwWbnNNOscZ8C%2B%2FMGTcjcfbYxbuYv%2BKsXPhu8kgj2WaJOBooXf6gEfcD9k1TllLXePEvDJqNr%2FbwG7czMA7pMLNqjPCn4%2FgqLIufkaN9R4l8AIv4uJ9lFmds%2BgjroqdxzMY2oGlw7mJxVRp9c0dS6hU0Y6id1tAc%2FjOqlRV4YKaFxDFoE7tKZ95dtJZcKZ8wG3QiFcZTVWtxoFgHRsxz5dkoTzwj00MM%2B6lsQGOqUBVkJsTap%2F79y08GbFtClXBYcyvzRD33yCung62FgG%2B4UU0hVd%2F1Ro7JCsADYjb2BcrKmGKSdiVneYde41pvTai6Z91wJLraZynrWSRopyVfRpkjJ6%2Fg%2BvONlEeQq1bkDIsH%2F9330SkZ2nlhv4Z2Qe9TgF1dRRlRU3TIXKCrzManBFmplu1PIIyID20erMiB18g8a0h%2FzeXDnBKS77tApV0d9GvBkY&X-Amz-Signature=aad3b0770950292f2547ec996841574ccc720076fd9b4aa851512418d8922976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636B42JFZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDOYDK%2F%2FTIcSA9ZamF47XPDpkjXcuAT2dPUqbk2neF3RAiEA1gEl3xOcdRJ1mi4fPUVion%2FmOd7ZaOMx48Ulr2XYv5Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKKGjgLod1Ps8iyFNircA%2F%2FOUKte1aH%2BLLkTkM%2BPnyQIUIZsKZVn%2BjAZMo7VYt2MSHq01VxH0eFym8zoodhISaEherlcMbWWL%2ByKtv3DRxq0gQWRquGmigiUw98kLLfN4%2FxC%2By2rSBCSd4qC4z9uZiOBkK0fVkha02tOFuC8evbSV%2BAFPiWXh%2BvFx1AVyrl6k9W8tJPmqegrI34DDTZkw2nTSBftRvnLpv6%2BZif2rWHbhnXoGM%2FdtAEFhubEgJGXAVbDvKy1PO9YACdjHSml1hCZYV5S0pLDvIkVjHa94SDKYoE36v5FFDg7lctrQFf8CYNyMo3%2BimeAKxOzeiu9E76Yx6LlZHwDcWekaU30B6lEzoty5bpwPud4FRMf7T4hdBMNqLMogRodVYqfcfmrnkdp8jedrveCK2kWweWlsJdS1jx16Z1dufvcamgpE4WMZuQ8OLyX0QjlW4xeZkGFiUOsRRycZuTvCA9Xr9MECcgqC1v7cajZgA7N0BMbCQtmH9G9au6dB65JZlYJxcBobv532e3fWq8o8qvQy31Z1mB3IWDF2TFrDEwyGix5k2rae7SI%2FpYBQhfDAPlno0u88qG1JnZQyenRR29V4zwHrL4vA5A8%2FczTryM3ZuKHpe2vXV1lWdVxZ6ky92GvMNu6lsQGOqUBjbvKDrhjUwtLgbSpsLDdmD18%2BNyMysVha0y9p%2BCHI20hpLqjeoxeUrzmH8UjHwofsps0bVcaMwtz5fJu3LYkfUxJfopF1zgHMr4bCcQTIPANz9ZRZe%2BVjt8FgkIU%2FnS8NgiTa02hykjcAEl9tY6CldHpBfrnk1codLk0PIwkUcAQeBT81xaGj6NgP%2BnY8l%2FIXh5Rac518kVT0%2F5N7P85Fykszrid&X-Amz-Signature=ba170b2f51da4ee0c6526d0d1fe7176cb3598e374adbf54303e3794e6175e68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
