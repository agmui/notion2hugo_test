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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWC7KVE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIET6GqJ46vyGEapn7qZSI7wcGHcyfPeRko4q%2FpJ1zVu%2FAiBqqL%2FiXy9eDFVvSX%2BcQzSes2tdc0hcBgYiUVCgWGHFyir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMkqI0Pfta%2Ft3n2mc3KtwD93lRtjPjshNHVLA3QXIBcSONengnEZ0LTKK62hqV86KdPa%2Fh82ZV592sYewN3PkeasjTCV1CaqulnBCBt35g%2B42iu2%2BBPjs78%2BpHyKuNDNmZtzqeWHQ0Q5Zv3OeG9%2FOHuc7zvEmz7D4fbvuh7FrdX%2FPEKQmqDMV4ms8kaHDvHGQUVU6whCVEXLUElnHWtd%2F4hYmq0DCrYQLiRveU5B5xvrE3Ao8YfkJ5ktwDw%2B5pSpwiDxw6936NIljbCTLvTbxfKoic83G1L1IqZiGCqoeNDneYQYj%2BgN68qqIVDzUcNIbRff0ZYkUBBe6EHXlrodVDl2Tj4bwwsu3SDvrHl%2BgRkUyaoVN%2F6DbKwbZjiZmj4jsX9Bnzn4igzL6emjNf1kTGCPF1xKWCE9sZ%2BzdQObribOPvzu5BOFO65Nts9Qi8yEzPvjTe2BQftrhfCKli3oIASg2ZdU6tyoSa2zwZnoMO8F4UgrMnUlvno2yBFc4wPXp4HWPyQsJ2CKFTDroXeol3oP%2FwJhwwDNsW5U6YkyH5zjEykNUhL%2BUrDSXb%2BTGo53S07l%2ByU%2F6oQa2CvEJoW4KEiPMM64nUqjnop3fKzN76B58A5tckJrapJkmBVw2wKCY9WVUzQ5x%2B7zPtvgIw9YP2wgY6pgFTdncdRFSyVDUGH5YLUCMowBI8ATsw6yylnNFmfe8LrZwUKe%2BcuNK6uu1Q1l2qbbRgmfU0%2FzUcDwHM93xQwnwG7ffayejnmjHgAw5T6ZAfwQsaJzi%2FwXX9HEGAFFKvPxnXRKMaipszUuSY5KJ2817BeWmBA930E4ySbNZX5hT1gKzoTsXOkbgvc8ioci9w4MKwndjxfo2EXiU8LlZEda%2Fe31OQxFUg&X-Amz-Signature=549d250054ae15be5f490300347815dba76d26c782f945bf9508b1e57640821b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWC7KVE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIET6GqJ46vyGEapn7qZSI7wcGHcyfPeRko4q%2FpJ1zVu%2FAiBqqL%2FiXy9eDFVvSX%2BcQzSes2tdc0hcBgYiUVCgWGHFyir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMkqI0Pfta%2Ft3n2mc3KtwD93lRtjPjshNHVLA3QXIBcSONengnEZ0LTKK62hqV86KdPa%2Fh82ZV592sYewN3PkeasjTCV1CaqulnBCBt35g%2B42iu2%2BBPjs78%2BpHyKuNDNmZtzqeWHQ0Q5Zv3OeG9%2FOHuc7zvEmz7D4fbvuh7FrdX%2FPEKQmqDMV4ms8kaHDvHGQUVU6whCVEXLUElnHWtd%2F4hYmq0DCrYQLiRveU5B5xvrE3Ao8YfkJ5ktwDw%2B5pSpwiDxw6936NIljbCTLvTbxfKoic83G1L1IqZiGCqoeNDneYQYj%2BgN68qqIVDzUcNIbRff0ZYkUBBe6EHXlrodVDl2Tj4bwwsu3SDvrHl%2BgRkUyaoVN%2F6DbKwbZjiZmj4jsX9Bnzn4igzL6emjNf1kTGCPF1xKWCE9sZ%2BzdQObribOPvzu5BOFO65Nts9Qi8yEzPvjTe2BQftrhfCKli3oIASg2ZdU6tyoSa2zwZnoMO8F4UgrMnUlvno2yBFc4wPXp4HWPyQsJ2CKFTDroXeol3oP%2FwJhwwDNsW5U6YkyH5zjEykNUhL%2BUrDSXb%2BTGo53S07l%2ByU%2F6oQa2CvEJoW4KEiPMM64nUqjnop3fKzN76B58A5tckJrapJkmBVw2wKCY9WVUzQ5x%2B7zPtvgIw9YP2wgY6pgFTdncdRFSyVDUGH5YLUCMowBI8ATsw6yylnNFmfe8LrZwUKe%2BcuNK6uu1Q1l2qbbRgmfU0%2FzUcDwHM93xQwnwG7ffayejnmjHgAw5T6ZAfwQsaJzi%2FwXX9HEGAFFKvPxnXRKMaipszUuSY5KJ2817BeWmBA930E4ySbNZX5hT1gKzoTsXOkbgvc8ioci9w4MKwndjxfo2EXiU8LlZEda%2Fe31OQxFUg&X-Amz-Signature=1602c31b6bcd2929b4b645fa0b7cc0c73f0755400716ab1dc0d9b2af357264eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWC7KVE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIET6GqJ46vyGEapn7qZSI7wcGHcyfPeRko4q%2FpJ1zVu%2FAiBqqL%2FiXy9eDFVvSX%2BcQzSes2tdc0hcBgYiUVCgWGHFyir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMkqI0Pfta%2Ft3n2mc3KtwD93lRtjPjshNHVLA3QXIBcSONengnEZ0LTKK62hqV86KdPa%2Fh82ZV592sYewN3PkeasjTCV1CaqulnBCBt35g%2B42iu2%2BBPjs78%2BpHyKuNDNmZtzqeWHQ0Q5Zv3OeG9%2FOHuc7zvEmz7D4fbvuh7FrdX%2FPEKQmqDMV4ms8kaHDvHGQUVU6whCVEXLUElnHWtd%2F4hYmq0DCrYQLiRveU5B5xvrE3Ao8YfkJ5ktwDw%2B5pSpwiDxw6936NIljbCTLvTbxfKoic83G1L1IqZiGCqoeNDneYQYj%2BgN68qqIVDzUcNIbRff0ZYkUBBe6EHXlrodVDl2Tj4bwwsu3SDvrHl%2BgRkUyaoVN%2F6DbKwbZjiZmj4jsX9Bnzn4igzL6emjNf1kTGCPF1xKWCE9sZ%2BzdQObribOPvzu5BOFO65Nts9Qi8yEzPvjTe2BQftrhfCKli3oIASg2ZdU6tyoSa2zwZnoMO8F4UgrMnUlvno2yBFc4wPXp4HWPyQsJ2CKFTDroXeol3oP%2FwJhwwDNsW5U6YkyH5zjEykNUhL%2BUrDSXb%2BTGo53S07l%2ByU%2F6oQa2CvEJoW4KEiPMM64nUqjnop3fKzN76B58A5tckJrapJkmBVw2wKCY9WVUzQ5x%2B7zPtvgIw9YP2wgY6pgFTdncdRFSyVDUGH5YLUCMowBI8ATsw6yylnNFmfe8LrZwUKe%2BcuNK6uu1Q1l2qbbRgmfU0%2FzUcDwHM93xQwnwG7ffayejnmjHgAw5T6ZAfwQsaJzi%2FwXX9HEGAFFKvPxnXRKMaipszUuSY5KJ2817BeWmBA930E4ySbNZX5hT1gKzoTsXOkbgvc8ioci9w4MKwndjxfo2EXiU8LlZEda%2Fe31OQxFUg&X-Amz-Signature=562fae6d8e6842c232e3b20e5e8e4891e8e03796a42dc65784ce7c3c73d3b8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPBU26G%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCbpQQnmlAKqU1J19tfX3Qv6NaDj4%2FVfrKZvo2ejA2d3gIgMZQLyPVnaXXfY%2BvLiJkqrjwE8cVIaFcd2hNvmZBY5yYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJFQNuYfycFFx1LvASrcA87wK1jcFE09WVIlJcpgRsMssFmOQQAIsvHvFEqorGpyEGXPhL7kTnCiAo27su95pbzpwjoxd49ESvmmsgcYzRJeVZYP35SYc%2FuiM7q6sAxZUPXS%2Fs8BIcxW3DJzZEdziOtsyDZ0D2a582799o25GvZeRV4D2jAUQ4%2Bjbsl82X2hO5Nk6aUPy%2FhyJDWKF9pbYgn3V3dSztbj2ilr7%2FS6KAJfaIY9SSvfFYPhl3CzynQb09UnbXtYKNITzY2%2FojHsoaNGNh%2BzTYf%2BdtDshDNBd%2Fuf7pZw5FL9RMb%2FXKzgYjx0zVmba3tiFhudWjwPEAa5giMNAgDYvXxJlS3esnSB%2F7LwPXz8cJs11M16oeo4BsQVbu1aENeFI%2BJ5CMtl4vtlt0IvlnOd2y8OjqGd7CeVpTLANePyDrWSvrLR7u87oFXQl2%2BAQsqiJIlKYL36b8%2FXe4CTXROx28R%2B9s8rTX6kH9kBdIIoM04NI9Y1VpTRezgr1sqWf21BTWrEswFfAVEjLQTk2esAjhATjAxNh4If6DO5LNcv1nlfDvDSiL61lE68kVwYVfXPP%2B9ZMwo0EgJHfkSQjtVCyRgJVwaDS8BINifQPwVMwphB0YWiijakIvy%2Fx%2BP18CTstg2jVCYpMIyE9sIGOqUBbCuFusPiSWOgYz6xUsGj2wZXgqAvsdXPILRxOhHTEoxXMOu3fv4cBTUW8AE6o494b7RivvrTp%2BV7zrnutM%2FVZB9WswfBpJZTa5AyN4M14NR4nFu89jySxLXll4BqpEsPTY9Y02khJDL02p84mCcjGUMu2QVml%2B0Qb4w45nAYVAVNBk5RBz1jC2eGHhatTVDAi1QCRTQvOcqc9ORjcOqMF6YqL2lV&X-Amz-Signature=27bba6b5b2ed57753b09c4e8d608f0cec3850c58a80780283cb392a97636370f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CF3QCW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD8Fu0EBAOdqOt1usIcovq393dU%2BnjILEZm3mxygau9KQIgHgxsk5hdRO1cqPIbdtsGM2LdvQmwAVfQHn3qRtoNR20q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJnWVnIXTN8oAYUmMCrcA529FK3BPLPaeHypThmHHE8DzWt4r685EEak1SyEsFwuBIcNK2lvREVdb%2F4BY4TMqlPc2Foujt4o2EajlL3FcbefwGEuBiTqSNMOnqe3EvNa8uUW0TAQxW6ipKbeWsmY3pJagufVxTOhfZhkyhr071fvlrd%2BDUmoaG%2B6xxhEldafXFV8jP1Ae9pr7HlIHUCmFMYgx1FlIDoumKMUzgXbB5tzCZXySDr87jQMW4%2FOgmVn%2FxB5V2HgRoD5zKCkpE6CFtbRkm57CmNXTd2J%2F4Ks85FqKS65z2fU4uqSAiM0Egcc3IunQfu3xvp6N2GUvHSdjfKxKDy8TRFlLL%2BhcZFQDo9tShC%2FOiHwSXJJyPPi0lbTuwnQLxbOUihOnLSyOOdZuGlYCNs5z92ZadEs%2BkasZKMZbCD6gdnK7%2BEvrKlyfEEdfRS%2Bi47xbeddJmhiklwQq4f7HgDGzCnWAVE%2Fl3%2FOn%2F6JbAlEDQO2IaSZ6m%2Bvm7%2FGVyoogu9I02lZmDfFLSUROBLzEsjQgZDqahcnhLSOtltjcwvwXtz5QQQTTOcGaqSGdTFyrN8AjMzstG2vVBeNVomdmFETScO3Pw2wsA025XaHSiBRrwiCV6ZhQLgBd5OhnJmk1FWvcs4OyG6aMP2D9sIGOqUB%2BwmFUi4YNyMgDqbdCe%2FrsYNcfgrXpyrji%2FdIse08%2FxGtRJpLRXcSceZw%2F9d30JsIq2ompR%2FZhLaPaLQmpbgJ43LWjkytB6rromX2LXB6mF6sIdhGFPFhZgWmPGoVjNQTlKTC5ioHkPajihajrR0rXoPJOe7L%2BaVPP%2BVi%2BL54C%2F%2F5lhhZY4hWKVo963CVkzGVjo3cc%2FfbUfGV1P%2BBKbowCRK4QjgZ&X-Amz-Signature=69ccc0223741cd22d97ac87f4ca94af599289aea012d8004096a66d8a0e5c170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWC7KVE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIET6GqJ46vyGEapn7qZSI7wcGHcyfPeRko4q%2FpJ1zVu%2FAiBqqL%2FiXy9eDFVvSX%2BcQzSes2tdc0hcBgYiUVCgWGHFyir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMkqI0Pfta%2Ft3n2mc3KtwD93lRtjPjshNHVLA3QXIBcSONengnEZ0LTKK62hqV86KdPa%2Fh82ZV592sYewN3PkeasjTCV1CaqulnBCBt35g%2B42iu2%2BBPjs78%2BpHyKuNDNmZtzqeWHQ0Q5Zv3OeG9%2FOHuc7zvEmz7D4fbvuh7FrdX%2FPEKQmqDMV4ms8kaHDvHGQUVU6whCVEXLUElnHWtd%2F4hYmq0DCrYQLiRveU5B5xvrE3Ao8YfkJ5ktwDw%2B5pSpwiDxw6936NIljbCTLvTbxfKoic83G1L1IqZiGCqoeNDneYQYj%2BgN68qqIVDzUcNIbRff0ZYkUBBe6EHXlrodVDl2Tj4bwwsu3SDvrHl%2BgRkUyaoVN%2F6DbKwbZjiZmj4jsX9Bnzn4igzL6emjNf1kTGCPF1xKWCE9sZ%2BzdQObribOPvzu5BOFO65Nts9Qi8yEzPvjTe2BQftrhfCKli3oIASg2ZdU6tyoSa2zwZnoMO8F4UgrMnUlvno2yBFc4wPXp4HWPyQsJ2CKFTDroXeol3oP%2FwJhwwDNsW5U6YkyH5zjEykNUhL%2BUrDSXb%2BTGo53S07l%2ByU%2F6oQa2CvEJoW4KEiPMM64nUqjnop3fKzN76B58A5tckJrapJkmBVw2wKCY9WVUzQ5x%2B7zPtvgIw9YP2wgY6pgFTdncdRFSyVDUGH5YLUCMowBI8ATsw6yylnNFmfe8LrZwUKe%2BcuNK6uu1Q1l2qbbRgmfU0%2FzUcDwHM93xQwnwG7ffayejnmjHgAw5T6ZAfwQsaJzi%2FwXX9HEGAFFKvPxnXRKMaipszUuSY5KJ2817BeWmBA930E4ySbNZX5hT1gKzoTsXOkbgvc8ioci9w4MKwndjxfo2EXiU8LlZEda%2Fe31OQxFUg&X-Amz-Signature=559d42b3116c4c1a23b34a03bac95b75c008ae35c6da1b4b461acf8948ca6752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
