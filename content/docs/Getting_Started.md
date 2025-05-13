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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRU2H2B%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCCJq6qZTh0lJuogLjXfswJxopOwpQow9MDnWVBpFufCwIgZemaFq3WzHjdk2n8uJwun1jbpbsTzc0OFwdu3RLjqUMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9%2FU%2F0o%2FCwY0v6zmyrcA4SQU2%2F72afppdQinL7AhViWpukOmIGQANmRvPXpg76pajbqSlVIUL5HKd9eNJgV%2Ft%2BzI9JpnP2T7%2BUwXj1Lf9Xj%2Fosn%2FiFTx8miG1mldg2zwFVH6VarrJHvAkdyj2K%2FMevkzXRQrGpvoEafcWtdZ4BSu%2BMjvcgpTDy6Mdz6xan%2FySBldjBPszbjNgjGhbuuRdxjUoyxPG9qUSBgevEPcZWGt9BlmkE1llP33%2Fek8k1WcxQvc9gS1PoHUtm84ecbKu%2FmOX0vgS9BGI1sChORE4ce1oCV88Yp%2FxEXcIiDLab5qQJrpAXo2SyaDzdd%2Bm5r6Dt%2BxWaV42VTWpzrSEM5LKu7Ga9wyvL79R0Rgl7AWpsUTesS%2BrLwRf8XLhtR%2Bs%2FsmYFR%2Bxt8FWJLmGFl%2F3bmfpH8Y6M7dz9pPEns2j4lEGjEGExy5SZqofHQf%2BTpqxmBbmhvpB%2BoTtIjrnDWAtoeVTUNqSBnudAxo0BLS%2B%2FFbVfESg3gW4UmKOmq4z6zQthficHMQEjEYpZ3qlROrQ1POc7T77YuugUde9uLhHxFTAI4InJZ%2BAXwP%2BdiRVqEOlzXjBQ03do74O8M8AWn60DfWZbE4hGRXjEoNpZupNE%2BLE9j%2Bg8Xdu35sWPWOeWLMMXajMEGOqUB%2FxgOEvVkzmYe6v3zwTE%2Fk8oQ4hgqFWr27zKhuskkhicznUQL9nC7aolq6JI8HTiaGRjfrX9Imttkmy8sFOWGGcXWZW%2BYrV4vTYeCw0pHXgdblevuGQ2TtTsM3xXPSBD0F4uxg8gFvbVdMLnImOlyrH0iPBCREsoFFHhznSkrF4wD%2FlQBbEXq9MERnt4%2BpAHtcWWs9PZvgkeuFK9MMQkp63ynLfHs&X-Amz-Signature=b75b011b20fc1c2af8285be0de1fc184cde134a769b5a1236942627274c356d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRU2H2B%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCCJq6qZTh0lJuogLjXfswJxopOwpQow9MDnWVBpFufCwIgZemaFq3WzHjdk2n8uJwun1jbpbsTzc0OFwdu3RLjqUMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9%2FU%2F0o%2FCwY0v6zmyrcA4SQU2%2F72afppdQinL7AhViWpukOmIGQANmRvPXpg76pajbqSlVIUL5HKd9eNJgV%2Ft%2BzI9JpnP2T7%2BUwXj1Lf9Xj%2Fosn%2FiFTx8miG1mldg2zwFVH6VarrJHvAkdyj2K%2FMevkzXRQrGpvoEafcWtdZ4BSu%2BMjvcgpTDy6Mdz6xan%2FySBldjBPszbjNgjGhbuuRdxjUoyxPG9qUSBgevEPcZWGt9BlmkE1llP33%2Fek8k1WcxQvc9gS1PoHUtm84ecbKu%2FmOX0vgS9BGI1sChORE4ce1oCV88Yp%2FxEXcIiDLab5qQJrpAXo2SyaDzdd%2Bm5r6Dt%2BxWaV42VTWpzrSEM5LKu7Ga9wyvL79R0Rgl7AWpsUTesS%2BrLwRf8XLhtR%2Bs%2FsmYFR%2Bxt8FWJLmGFl%2F3bmfpH8Y6M7dz9pPEns2j4lEGjEGExy5SZqofHQf%2BTpqxmBbmhvpB%2BoTtIjrnDWAtoeVTUNqSBnudAxo0BLS%2B%2FFbVfESg3gW4UmKOmq4z6zQthficHMQEjEYpZ3qlROrQ1POc7T77YuugUde9uLhHxFTAI4InJZ%2BAXwP%2BdiRVqEOlzXjBQ03do74O8M8AWn60DfWZbE4hGRXjEoNpZupNE%2BLE9j%2Bg8Xdu35sWPWOeWLMMXajMEGOqUB%2FxgOEvVkzmYe6v3zwTE%2Fk8oQ4hgqFWr27zKhuskkhicznUQL9nC7aolq6JI8HTiaGRjfrX9Imttkmy8sFOWGGcXWZW%2BYrV4vTYeCw0pHXgdblevuGQ2TtTsM3xXPSBD0F4uxg8gFvbVdMLnImOlyrH0iPBCREsoFFHhznSkrF4wD%2FlQBbEXq9MERnt4%2BpAHtcWWs9PZvgkeuFK9MMQkp63ynLfHs&X-Amz-Signature=c97e85b234cab92f2446ff74dd1edd0afb02fba2b5340d8a7b10ef5422c64610&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRU2H2B%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCCJq6qZTh0lJuogLjXfswJxopOwpQow9MDnWVBpFufCwIgZemaFq3WzHjdk2n8uJwun1jbpbsTzc0OFwdu3RLjqUMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9%2FU%2F0o%2FCwY0v6zmyrcA4SQU2%2F72afppdQinL7AhViWpukOmIGQANmRvPXpg76pajbqSlVIUL5HKd9eNJgV%2Ft%2BzI9JpnP2T7%2BUwXj1Lf9Xj%2Fosn%2FiFTx8miG1mldg2zwFVH6VarrJHvAkdyj2K%2FMevkzXRQrGpvoEafcWtdZ4BSu%2BMjvcgpTDy6Mdz6xan%2FySBldjBPszbjNgjGhbuuRdxjUoyxPG9qUSBgevEPcZWGt9BlmkE1llP33%2Fek8k1WcxQvc9gS1PoHUtm84ecbKu%2FmOX0vgS9BGI1sChORE4ce1oCV88Yp%2FxEXcIiDLab5qQJrpAXo2SyaDzdd%2Bm5r6Dt%2BxWaV42VTWpzrSEM5LKu7Ga9wyvL79R0Rgl7AWpsUTesS%2BrLwRf8XLhtR%2Bs%2FsmYFR%2Bxt8FWJLmGFl%2F3bmfpH8Y6M7dz9pPEns2j4lEGjEGExy5SZqofHQf%2BTpqxmBbmhvpB%2BoTtIjrnDWAtoeVTUNqSBnudAxo0BLS%2B%2FFbVfESg3gW4UmKOmq4z6zQthficHMQEjEYpZ3qlROrQ1POc7T77YuugUde9uLhHxFTAI4InJZ%2BAXwP%2BdiRVqEOlzXjBQ03do74O8M8AWn60DfWZbE4hGRXjEoNpZupNE%2BLE9j%2Bg8Xdu35sWPWOeWLMMXajMEGOqUB%2FxgOEvVkzmYe6v3zwTE%2Fk8oQ4hgqFWr27zKhuskkhicznUQL9nC7aolq6JI8HTiaGRjfrX9Imttkmy8sFOWGGcXWZW%2BYrV4vTYeCw0pHXgdblevuGQ2TtTsM3xXPSBD0F4uxg8gFvbVdMLnImOlyrH0iPBCREsoFFHhznSkrF4wD%2FlQBbEXq9MERnt4%2BpAHtcWWs9PZvgkeuFK9MMQkp63ynLfHs&X-Amz-Signature=ad4742662b538c1ff00af6625ce56c6dc762a0e101fcd65f7eab9664514b60c9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6YM2UJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCBkgVwPCue7%2B%2FTFd8CLFR2d3QJkFq3tlKn5bKQOBFzKQIhANhj7dF8OdUXjFb3fXmFFSJzEP%2BJLinJYbXmNYVRRiEFKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqsVx6un3eo773csq3AOWe5Tnyk%2FZSsJuf56PI6%2B44R0rqmPMJblY9XabNR%2FGJfqfLlMnMc3Qv9YJmEwjg%2BW9I1myg2y3mygrrUnjUA63svttE%2F%2Fpc%2BB3bgsylVdd7pWPJ1AL1uLzptLl5o%2F0ETjIS6HLBllMhqJN9j3pFSpCp34opKMO%2Fxdg41rcEhh%2BWEw8o3q8EThpAGLqJ8j900yyYm%2BE%2B8taPl98%2FG2j6byOOUieHXIMD7ZqdEi1XHxt5P%2FNySCqym4GayyPeHDp%2B4%2FRemmVjLY06Ecov3pdDZwZxVojHCfvXLYxwnIcjb4nsnSGvUF0hzVaJN%2F8yu4KFecYQGD2WOE8wE%2FrzULwjfvD%2BGKFq1sABtYWZCDWJwA5SSYAf4kyOIpTQDbzxLkm1fNGzpb60jOT8bTEPh84Ttrb844vab1nVc6OMxXS%2FsISd5F%2BcoA%2FC40APl2SS%2BpK3%2FCEVGhd%2FRPMlJ0V%2B%2BaHnz8w%2Fq9RsmyTog9bTnJ%2BknsYfPxQyqNXKzD05Ki58RBOUIr3swdNAUtmcMTQ4UyjA48zbEJy4Qy11x6OWtJPjjYX519KfHs21yes0HQll74re2TK178RTieqklLgkUlGQ5n%2FERrUHhuwWS%2Be4ikzwUiFwLM6KoEWtEJ5zQ1g3TDr2ozBBjqkATsfx%2BsLCyJaQk%2FzZztvVTapH%2B7%2FaiuI7YXnH370k2wgyjZDOUDsp1KQxA73fsQtQBgpb674oidMo%2F68zf3LhwI8awyNkhxBoNFUzhUSr2HeIll5xP6XcNU9uPxg4Jq54V5ypYTlYxywJr2iQVFyOUDobkFv7Pibecb2ggvWz9bzc27QV5sVINNtq8Z6%2FHZo7lOG98VbUT2jUPPn8npm64bdWGfJ&X-Amz-Signature=7de00d67427a6df48da4ff19e91507961d3df794b2969cfa0993b8bacd4ae997&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKZ5LG4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBmQvPz%2BeFYL07VFd4OUQ1vsezs%2BWsm44d3tBsvqVLKjAiEA5pWRGWj0%2FvjrFb%2BIoEv9DiwtZaI4GR66fxTpkn%2BEzXQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx8NZDRDHtzg6vGeCrcA%2FFJOPmcm9MoKynJFT0HNL5%2FptheGYVVGKVPA503tu20s88%2F9F7itljVzKXqmdodKS6b0bM3XBKqwIYeFsDrOhU9FJy7mYSwb3osYchmZwOjrrotAsTRtjxByxQVYS7kkGn3nKx5dR7fJZ1%2F95jHCrh0M9RNzt%2FDrcfYs8q7kIZWkuRGFoDJBBvius3dWQrj%2FqHl0Sw9vS%2B9CVqZGAMZHPYZToTRifBa0FXQbmjVoOKE5z9z6tQDLThyqcYWHaIDiYMXEVrC9MlRIER%2BpkJdglLsoriZJD0eAAuFiiUQnyBwwYggazvoZ%2FP2ydX62krrwcJyRGguMD7TWyertoJ91KVv0%2B7B%2BNZx6i2FwWQdCZNaFJE2Ljq5h8fKjnudQmWCh7f6duuyMMSysL785Mq87PDOE14mX7OfRZpQykUmf5lL7793Dvy%2B3cNWqUPnbBMLnBZpACEO2lN1iCWvYc25QcH3WYIUe%2BWbxJivLngr5kxm9lTFd5OM2cP1%2BAT3hjA5V9RZCyUNtxAJtfn1KOX6ITBnqtIv4qdQ5M%2B6dqxq7oLTjf55Q1ehFpmREaSaVBxMZ1ZhojYci1GnnOS6lNZWUFHxTnTpT%2BgF3unZ7pGXdiFOZpcgMivTt5vTKRunMIjajMEGOqUB5Lqil%2FEEy%2BS8mk9sdvmpmKL6AazGy39nM4TbQBIubHtdRtwT122haHFfj5RvQM%2BacaObgB2zOy5oj9EGb6Sd9%2FprgZ1K8IvFqNN0ndsGialvYf6bEkE8DmoBHhrdrteMBIrT4BcdDjittJS7EYqiAfmO7v1joV9n80vpSHOT4qDWY2Ab39wIRHbDD58FrmNOsJq4IOs5kCyxGcGz3uzTDULbybaR&X-Amz-Signature=a934d858b1901969921ab273c91f9a578f3f9ba716933f78c7d5245671181e53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRU2H2B%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCCJq6qZTh0lJuogLjXfswJxopOwpQow9MDnWVBpFufCwIgZemaFq3WzHjdk2n8uJwun1jbpbsTzc0OFwdu3RLjqUMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9%2FU%2F0o%2FCwY0v6zmyrcA4SQU2%2F72afppdQinL7AhViWpukOmIGQANmRvPXpg76pajbqSlVIUL5HKd9eNJgV%2Ft%2BzI9JpnP2T7%2BUwXj1Lf9Xj%2Fosn%2FiFTx8miG1mldg2zwFVH6VarrJHvAkdyj2K%2FMevkzXRQrGpvoEafcWtdZ4BSu%2BMjvcgpTDy6Mdz6xan%2FySBldjBPszbjNgjGhbuuRdxjUoyxPG9qUSBgevEPcZWGt9BlmkE1llP33%2Fek8k1WcxQvc9gS1PoHUtm84ecbKu%2FmOX0vgS9BGI1sChORE4ce1oCV88Yp%2FxEXcIiDLab5qQJrpAXo2SyaDzdd%2Bm5r6Dt%2BxWaV42VTWpzrSEM5LKu7Ga9wyvL79R0Rgl7AWpsUTesS%2BrLwRf8XLhtR%2Bs%2FsmYFR%2Bxt8FWJLmGFl%2F3bmfpH8Y6M7dz9pPEns2j4lEGjEGExy5SZqofHQf%2BTpqxmBbmhvpB%2BoTtIjrnDWAtoeVTUNqSBnudAxo0BLS%2B%2FFbVfESg3gW4UmKOmq4z6zQthficHMQEjEYpZ3qlROrQ1POc7T77YuugUde9uLhHxFTAI4InJZ%2BAXwP%2BdiRVqEOlzXjBQ03do74O8M8AWn60DfWZbE4hGRXjEoNpZupNE%2BLE9j%2Bg8Xdu35sWPWOeWLMMXajMEGOqUB%2FxgOEvVkzmYe6v3zwTE%2Fk8oQ4hgqFWr27zKhuskkhicznUQL9nC7aolq6JI8HTiaGRjfrX9Imttkmy8sFOWGGcXWZW%2BYrV4vTYeCw0pHXgdblevuGQ2TtTsM3xXPSBD0F4uxg8gFvbVdMLnImOlyrH0iPBCREsoFFHhznSkrF4wD%2FlQBbEXq9MERnt4%2BpAHtcWWs9PZvgkeuFK9MMQkp63ynLfHs&X-Amz-Signature=63ea7355455aa264d281eacf32e1d433254e4c0a294c4fc7c3c7fa840f69f54e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
