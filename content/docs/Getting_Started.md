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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2N5KW3H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4IbcWPgxlPyIzStJI%2BNo1D8Z0TP1Rzfxi6Cq0YxsaZQIgQC3X1bYJexjhdk0bt81%2FeqjulxidBGRPfFWQOkVVRWYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCAlCeIMGJVzfR%2B7XSrcA32u7hY9ufaOwItWZi3sh7GlcMlzj5DuYV7T7NGvP0wud6IdidrWYxAwaKnKk3quko%2B2hCMd9moKM3dV68UeELaE3kQkbKsDR5v109I47N0qRhWuH98kwf8CpIZHeaXA%2BPn4T1UcuEy2nG7THZKX%2Bz6PJw253ntUdP2eRUCQdmYdMRBh%2BzGsky60%2F%2FOy2KWcUky3sRo7nq2bqRHEYCdcvsq%2BFl%2FXSNWawQ8tsgcgAosvfj34PJ9PQuJCAKeejhWX9usTsfnDKqxwc8RKXvLodn9Bb4LwwaS3JluPqj0EenLckkZsj2XDSEMqDpZU%2FuFSs2hCeQjhwyOhkYoYpOAfxS6Up6lmbz66w7omvljT60sWps8zDb%2FVrp1P2tJwooveuxGzYb%2BHyp8bW%2FkgAPHivCREfsRwQzN73K1NpOCz%2BqAsXMxX6fcJ6lG%2F5E95xN73so4jW2hN32r3Yj%2F6EAOQVr5oni6rnioD3c70eXa0Xmu5QtxEwVnYWxT3MEslzGjrF3F7ofsAjCWStHCEV2CRKOT93Qvm4K5raZA5FAuohBWOgMyJiesyavAzXuT1gz7D7WWCXN5p4%2FmhIqYOTX1l1WDgtI%2BvudoVr6VaRBiBxvdf1NhrWSD9ZnlNu%2F9QMNea4cAGOqUBs13ibRRvBgU0Nj2Id46dIbiMmHnnupWvc4SI3NMIuiUbY1oC1gMF98hNHZrqjtCWWH6i7LShJHTfmK1xlp6RUqZwaGG%2FsZT0XQRDTNtnqL%2BUy6fRm4CYlD6wQ2Zhk5xuIfmT1MKcB8%2BBayE6EHicdaYv4Wyi2iHGBy5%2Bemjft8MySGQAwqZFaYOMt%2BsS96PT5h7F737JIMta%2FZMpWVXfJ1XwB5fN&X-Amz-Signature=809053fa1db93d9648279997e655139c27ff1f8b918c6a215a8da63083fc8a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2N5KW3H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4IbcWPgxlPyIzStJI%2BNo1D8Z0TP1Rzfxi6Cq0YxsaZQIgQC3X1bYJexjhdk0bt81%2FeqjulxidBGRPfFWQOkVVRWYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCAlCeIMGJVzfR%2B7XSrcA32u7hY9ufaOwItWZi3sh7GlcMlzj5DuYV7T7NGvP0wud6IdidrWYxAwaKnKk3quko%2B2hCMd9moKM3dV68UeELaE3kQkbKsDR5v109I47N0qRhWuH98kwf8CpIZHeaXA%2BPn4T1UcuEy2nG7THZKX%2Bz6PJw253ntUdP2eRUCQdmYdMRBh%2BzGsky60%2F%2FOy2KWcUky3sRo7nq2bqRHEYCdcvsq%2BFl%2FXSNWawQ8tsgcgAosvfj34PJ9PQuJCAKeejhWX9usTsfnDKqxwc8RKXvLodn9Bb4LwwaS3JluPqj0EenLckkZsj2XDSEMqDpZU%2FuFSs2hCeQjhwyOhkYoYpOAfxS6Up6lmbz66w7omvljT60sWps8zDb%2FVrp1P2tJwooveuxGzYb%2BHyp8bW%2FkgAPHivCREfsRwQzN73K1NpOCz%2BqAsXMxX6fcJ6lG%2F5E95xN73so4jW2hN32r3Yj%2F6EAOQVr5oni6rnioD3c70eXa0Xmu5QtxEwVnYWxT3MEslzGjrF3F7ofsAjCWStHCEV2CRKOT93Qvm4K5raZA5FAuohBWOgMyJiesyavAzXuT1gz7D7WWCXN5p4%2FmhIqYOTX1l1WDgtI%2BvudoVr6VaRBiBxvdf1NhrWSD9ZnlNu%2F9QMNea4cAGOqUBs13ibRRvBgU0Nj2Id46dIbiMmHnnupWvc4SI3NMIuiUbY1oC1gMF98hNHZrqjtCWWH6i7LShJHTfmK1xlp6RUqZwaGG%2FsZT0XQRDTNtnqL%2BUy6fRm4CYlD6wQ2Zhk5xuIfmT1MKcB8%2BBayE6EHicdaYv4Wyi2iHGBy5%2Bemjft8MySGQAwqZFaYOMt%2BsS96PT5h7F737JIMta%2FZMpWVXfJ1XwB5fN&X-Amz-Signature=488d12122439a216292e9de815e5d8188d05b568f6144543917177999e94f2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2N5KW3H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4IbcWPgxlPyIzStJI%2BNo1D8Z0TP1Rzfxi6Cq0YxsaZQIgQC3X1bYJexjhdk0bt81%2FeqjulxidBGRPfFWQOkVVRWYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCAlCeIMGJVzfR%2B7XSrcA32u7hY9ufaOwItWZi3sh7GlcMlzj5DuYV7T7NGvP0wud6IdidrWYxAwaKnKk3quko%2B2hCMd9moKM3dV68UeELaE3kQkbKsDR5v109I47N0qRhWuH98kwf8CpIZHeaXA%2BPn4T1UcuEy2nG7THZKX%2Bz6PJw253ntUdP2eRUCQdmYdMRBh%2BzGsky60%2F%2FOy2KWcUky3sRo7nq2bqRHEYCdcvsq%2BFl%2FXSNWawQ8tsgcgAosvfj34PJ9PQuJCAKeejhWX9usTsfnDKqxwc8RKXvLodn9Bb4LwwaS3JluPqj0EenLckkZsj2XDSEMqDpZU%2FuFSs2hCeQjhwyOhkYoYpOAfxS6Up6lmbz66w7omvljT60sWps8zDb%2FVrp1P2tJwooveuxGzYb%2BHyp8bW%2FkgAPHivCREfsRwQzN73K1NpOCz%2BqAsXMxX6fcJ6lG%2F5E95xN73so4jW2hN32r3Yj%2F6EAOQVr5oni6rnioD3c70eXa0Xmu5QtxEwVnYWxT3MEslzGjrF3F7ofsAjCWStHCEV2CRKOT93Qvm4K5raZA5FAuohBWOgMyJiesyavAzXuT1gz7D7WWCXN5p4%2FmhIqYOTX1l1WDgtI%2BvudoVr6VaRBiBxvdf1NhrWSD9ZnlNu%2F9QMNea4cAGOqUBs13ibRRvBgU0Nj2Id46dIbiMmHnnupWvc4SI3NMIuiUbY1oC1gMF98hNHZrqjtCWWH6i7LShJHTfmK1xlp6RUqZwaGG%2FsZT0XQRDTNtnqL%2BUy6fRm4CYlD6wQ2Zhk5xuIfmT1MKcB8%2BBayE6EHicdaYv4Wyi2iHGBy5%2Bemjft8MySGQAwqZFaYOMt%2BsS96PT5h7F737JIMta%2FZMpWVXfJ1XwB5fN&X-Amz-Signature=3442de854189c1e5e72b75dd5ccdd89f66824b83b8f6fdfbc77d56ce66a35a78&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYIU2TR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCOrEuzFbsMRFo%2B7XHHnVsEhJm1psS9LdkA8hH98MifVgIgVN0nTqKO8cpzcG2gLFTLSRzF6qHY%2FZ6ZGUorb3WoFy0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJAX1TvZdr%2FdVQ9H%2FSrcA4amxPaJVMFhufdKYb0gTYVwG0mCcHqyu9Y5nTWuMmlryuQk9WqNXjO%2FSv4Kaoah8KrS3cOO3xuw4bKxe29g%2BnfkaXxp%2B2SzeMJteth%2FdfCEw0hxCWAqLRgU9ocIdj53%2BlxBieA%2BGoDeCzZfe2wWHfw3raOtilLrbkEm5Kt8ijb0BgTUwTwY%2FnAqBsayVV%2FHNL3hhIN9GaN%2BbjYnc3fe9Pg0l4Okks4%2FZybBybRFyDFcQSY7NklM8o5CdDweSNmnGdCSWXB5ZSjpgJWsPRxI8TRp%2BuzAF1sql3Xe06n0iiv4esqP%2BzWWtzAkrl%2F3xHmfM%2FhqaaWtWae1GyxZe0boNwESLIaYV3A5f2vR8oqpyNa43DTsw2Al7nuxDMAciPqsHNZeJpCnKMql2THnldA04ceh7l3s2NfYyZvUw0LA4N4YGI%2FIT955YtZibofgMuFAzA8JxRpIuk7Rlx2s2fGepFzrHt4zlEqT6OWnEcPxB3k4gGHbAGsP2Dwk%2FN5v%2BOTu4n4mQEpxGKHBj8jMEBCIVqwl%2FTy7zBIZZtuMRsyT3iCXzJtVECH4X9PqhjN6lka0fvD%2BASlz49QyKC4sZ9DSTTH7vI%2BiMUpTJLP3Yq9h7aOjJlmd6cpup3Nt%2FBc4MMya4cAGOqUBDxC7ZEi%2BAekQ%2F%2F%2BqGPoWRqj1%2FPouLKSXOtbXo4eW52VX7Obsep2oLs46gyF95p%2FvlczgtYAp2SZN3wxv3aMvZlEtHNtybwsKVs5xuZXU%2BC7IpikPdwy8NY3g3EUotBjolvxcT4i9scsrgmRGZrOiZXbV7ADlXiySqiDSPds9Wryj%2ByVJubKGRG8RM%2Fhz5rz35nWR7T%2BFacvRfrjCM1WXNw0hnJUF&X-Amz-Signature=e2ab60794df144965306ea4b5fe4082f4302378bbf85f1c8507baef1a413ac5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646O7VVAN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBwFD7CKrLySbN0ga2lKfjzPpyR54R5fgg1ImUWZ0N0NAiAflYoUC%2BEXgVt5SDMyPViBLbzRHgAWkoY6s2NEBztMWCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMJGSV7YEo4L01Ph7OKtwDsfpqXZ5TEZJ2TsIwXymgBsisd98mdHP%2FqtTiw8%2F8koMqE305Rt6Eu9G%2BfiRe6K7j213M5934dRd%2B79TzeMwa47J6X%2FOsqfGjjDEae1joczBbZKM5mxJrs3%2BghIwgHBFHASPXQp%2BFgDYeQco2QyeXQq7L%2BnJGAv%2ByRgjqh73CxuK2dk4hq0p6uBdeZOCwIAOjKcQTiHelLmn8e6W1F3ZC%2F3q3A4e6hC1HH%2FclwEP%2FUJkbc%2F%2FWoTn9kfy9OzLniGYPHMxI2BtEufomtmchG%2F2dNdh%2FwNuqYjoI2xRFi5a1hNPylJN8akcKwlVUnoXgJxJ%2FKVxgi6eoczuP6c2I7VuT9hhj%2BkkrW0DKgn115Vh8lSUJ0odcexoaCmmUcoNPobU1HUPNlAQB%2F1toS%2FiR5piA1SB8o78OOCKTwj0WFPPn04uzEdGEKnvbEb33rwmzWSfr07Dg161iv%2BUY%2BiTI6oN%2BArzJwsEU%2BgIf%2FUthf1%2BP%2FW5CE0ZCSPYB7xGUT5xh%2F%2BM3nNYsiaNqnYFg3LW3SrAUqp17W2NibFg4XSL47AzHQKOM33ZRkKh%2FCEJpbt%2Bk4GPBRjugcjKAt36z%2FgB0cg6r8HZXyixKFwc8tujRcAgMuDKVGmQoBJkQSjBRWoYw95rhwAY6pgHZNpnBDE8q2x3u5rT7yqQWXaK5EtoYrjuweIQWShj0MqW0nJehOKlx1TrMX2I8rRFkcdbpjLsVhBQPqlXCq47NzPhtqAKrZwAPwCQarsPVqFu0jOY7eNTHOF9hKCfB02Am1mZ2VPfzFoKzeRqBOiQY4kWRPWDtME50IX26I0Bdc8KSC4kCWz5jH4e%2BvNrHRfcfwXc6gYkX84NwklSGc6z9b82IgeUd&X-Amz-Signature=bd9aec9dc1999b0f671b6e19d54133d468236d5dfa36ce78c48adce8169ea3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2N5KW3H%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4IbcWPgxlPyIzStJI%2BNo1D8Z0TP1Rzfxi6Cq0YxsaZQIgQC3X1bYJexjhdk0bt81%2FeqjulxidBGRPfFWQOkVVRWYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCAlCeIMGJVzfR%2B7XSrcA32u7hY9ufaOwItWZi3sh7GlcMlzj5DuYV7T7NGvP0wud6IdidrWYxAwaKnKk3quko%2B2hCMd9moKM3dV68UeELaE3kQkbKsDR5v109I47N0qRhWuH98kwf8CpIZHeaXA%2BPn4T1UcuEy2nG7THZKX%2Bz6PJw253ntUdP2eRUCQdmYdMRBh%2BzGsky60%2F%2FOy2KWcUky3sRo7nq2bqRHEYCdcvsq%2BFl%2FXSNWawQ8tsgcgAosvfj34PJ9PQuJCAKeejhWX9usTsfnDKqxwc8RKXvLodn9Bb4LwwaS3JluPqj0EenLckkZsj2XDSEMqDpZU%2FuFSs2hCeQjhwyOhkYoYpOAfxS6Up6lmbz66w7omvljT60sWps8zDb%2FVrp1P2tJwooveuxGzYb%2BHyp8bW%2FkgAPHivCREfsRwQzN73K1NpOCz%2BqAsXMxX6fcJ6lG%2F5E95xN73so4jW2hN32r3Yj%2F6EAOQVr5oni6rnioD3c70eXa0Xmu5QtxEwVnYWxT3MEslzGjrF3F7ofsAjCWStHCEV2CRKOT93Qvm4K5raZA5FAuohBWOgMyJiesyavAzXuT1gz7D7WWCXN5p4%2FmhIqYOTX1l1WDgtI%2BvudoVr6VaRBiBxvdf1NhrWSD9ZnlNu%2F9QMNea4cAGOqUBs13ibRRvBgU0Nj2Id46dIbiMmHnnupWvc4SI3NMIuiUbY1oC1gMF98hNHZrqjtCWWH6i7LShJHTfmK1xlp6RUqZwaGG%2FsZT0XQRDTNtnqL%2BUy6fRm4CYlD6wQ2Zhk5xuIfmT1MKcB8%2BBayE6EHicdaYv4Wyi2iHGBy5%2Bemjft8MySGQAwqZFaYOMt%2BsS96PT5h7F737JIMta%2FZMpWVXfJ1XwB5fN&X-Amz-Signature=ba06c5380c15b8c2053a1ab239a7279a33533094bfe98bc1b58c3a940020673c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
