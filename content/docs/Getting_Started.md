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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEKIN6X%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAIpeWz2IEVc3DM3ZUpdEoxbhtjEtavQpqzJbQ%2FeJp%2B9AiBFVooAkQsL0J%2BeZEC3VfLrdCodVaa%2FAPt372sPDFrTlyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM68VXv6peU%2FXT7FhTKtwDpFYotFmZOhgQ73DPLuitRFZkEqo%2BXCXkLB2hcQxI2k3o9GJf8beC0R%2BI5v4HAkhYZA55q2D5HavR9DJXPl%2FibhFGup41NW4V4wW%2B7zPdJnRxiI2cAnyka22umOhZYFceTonnOR9cZ54b0kPD1I88gf1scoGoYvtQ%2BOHJzhwAN6GkoI%2FOMn%2BsPG7%2BzmgGMriXkZ1yU4hlgsmExEL1GtBZnaahb94q4Sw5qphV%2BvlA5G6DpF%2BiU3WIPq7tzEqV5GH1IY1K9vmxcb6Tqvxaagdcc9Pn4HXwWjo3bCTVnn2gUsuFI%2BWkUxlzYT9cYGV%2FL2cCN26hGtcwKkbWUcEN4Awb55RXTY8EXokklwp%2Bntcw28Y5gvVoMXsAGqIlv9xSl7iejHrpWGGpxXVBBICaw3R7NlA6jHG2MTSKCSGVUcze7g4Dy3cOc84LGqjCbcHQm5ySAmgXoEP4FNSMzq%2B4MkifhkyM8vpC%2B%2BhZCrIX1DKphRyfxRAyZlVMTIRh80IxcPpmkz9hvOtgB%2BSyV5%2FROywxLx58yss82hK2wD2Dgr%2FGBiTcUM%2F%2BAczbEEvdFzqTh7Ww28FsEA%2F0tEWspNL4mJexhguYjNSmN8hPeleRXeKDy1nbw4Fm9chsdyDgb6Yw9KqPxAY6pgEdoN5gmS8Y11PLoef%2BjvX3wiKFE%2BCwMgnjV9t%2B8V0qTEtfyh5HV%2FgkOPhBwmQWcF4JBzyoJBJhmKmiP1G3eD6%2BcORoBwlLeSgIuaVIlY%2FmCek%2BlKjQNAGUkzY0AeJru6MjeDqjHQKAbcm6x0CghTtU4jEu72bVQgEvwvjtR5eEEaNccgQ%2BXemFks0DXadEAmvB7l0c2bXG%2FI0lQNHjZYLqfssVy8BJ&X-Amz-Signature=bea2331de0d1cb1f637049b0d9c0e726b525b50c790e9a3745a5d119d8dbaba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEKIN6X%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAIpeWz2IEVc3DM3ZUpdEoxbhtjEtavQpqzJbQ%2FeJp%2B9AiBFVooAkQsL0J%2BeZEC3VfLrdCodVaa%2FAPt372sPDFrTlyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM68VXv6peU%2FXT7FhTKtwDpFYotFmZOhgQ73DPLuitRFZkEqo%2BXCXkLB2hcQxI2k3o9GJf8beC0R%2BI5v4HAkhYZA55q2D5HavR9DJXPl%2FibhFGup41NW4V4wW%2B7zPdJnRxiI2cAnyka22umOhZYFceTonnOR9cZ54b0kPD1I88gf1scoGoYvtQ%2BOHJzhwAN6GkoI%2FOMn%2BsPG7%2BzmgGMriXkZ1yU4hlgsmExEL1GtBZnaahb94q4Sw5qphV%2BvlA5G6DpF%2BiU3WIPq7tzEqV5GH1IY1K9vmxcb6Tqvxaagdcc9Pn4HXwWjo3bCTVnn2gUsuFI%2BWkUxlzYT9cYGV%2FL2cCN26hGtcwKkbWUcEN4Awb55RXTY8EXokklwp%2Bntcw28Y5gvVoMXsAGqIlv9xSl7iejHrpWGGpxXVBBICaw3R7NlA6jHG2MTSKCSGVUcze7g4Dy3cOc84LGqjCbcHQm5ySAmgXoEP4FNSMzq%2B4MkifhkyM8vpC%2B%2BhZCrIX1DKphRyfxRAyZlVMTIRh80IxcPpmkz9hvOtgB%2BSyV5%2FROywxLx58yss82hK2wD2Dgr%2FGBiTcUM%2F%2BAczbEEvdFzqTh7Ww28FsEA%2F0tEWspNL4mJexhguYjNSmN8hPeleRXeKDy1nbw4Fm9chsdyDgb6Yw9KqPxAY6pgEdoN5gmS8Y11PLoef%2BjvX3wiKFE%2BCwMgnjV9t%2B8V0qTEtfyh5HV%2FgkOPhBwmQWcF4JBzyoJBJhmKmiP1G3eD6%2BcORoBwlLeSgIuaVIlY%2FmCek%2BlKjQNAGUkzY0AeJru6MjeDqjHQKAbcm6x0CghTtU4jEu72bVQgEvwvjtR5eEEaNccgQ%2BXemFks0DXadEAmvB7l0c2bXG%2FI0lQNHjZYLqfssVy8BJ&X-Amz-Signature=1ddfa12c0e6bd96aaf2db99d81009ee2877eb01c3d057f1cea7f79a5f4eee00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEKIN6X%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAIpeWz2IEVc3DM3ZUpdEoxbhtjEtavQpqzJbQ%2FeJp%2B9AiBFVooAkQsL0J%2BeZEC3VfLrdCodVaa%2FAPt372sPDFrTlyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM68VXv6peU%2FXT7FhTKtwDpFYotFmZOhgQ73DPLuitRFZkEqo%2BXCXkLB2hcQxI2k3o9GJf8beC0R%2BI5v4HAkhYZA55q2D5HavR9DJXPl%2FibhFGup41NW4V4wW%2B7zPdJnRxiI2cAnyka22umOhZYFceTonnOR9cZ54b0kPD1I88gf1scoGoYvtQ%2BOHJzhwAN6GkoI%2FOMn%2BsPG7%2BzmgGMriXkZ1yU4hlgsmExEL1GtBZnaahb94q4Sw5qphV%2BvlA5G6DpF%2BiU3WIPq7tzEqV5GH1IY1K9vmxcb6Tqvxaagdcc9Pn4HXwWjo3bCTVnn2gUsuFI%2BWkUxlzYT9cYGV%2FL2cCN26hGtcwKkbWUcEN4Awb55RXTY8EXokklwp%2Bntcw28Y5gvVoMXsAGqIlv9xSl7iejHrpWGGpxXVBBICaw3R7NlA6jHG2MTSKCSGVUcze7g4Dy3cOc84LGqjCbcHQm5ySAmgXoEP4FNSMzq%2B4MkifhkyM8vpC%2B%2BhZCrIX1DKphRyfxRAyZlVMTIRh80IxcPpmkz9hvOtgB%2BSyV5%2FROywxLx58yss82hK2wD2Dgr%2FGBiTcUM%2F%2BAczbEEvdFzqTh7Ww28FsEA%2F0tEWspNL4mJexhguYjNSmN8hPeleRXeKDy1nbw4Fm9chsdyDgb6Yw9KqPxAY6pgEdoN5gmS8Y11PLoef%2BjvX3wiKFE%2BCwMgnjV9t%2B8V0qTEtfyh5HV%2FgkOPhBwmQWcF4JBzyoJBJhmKmiP1G3eD6%2BcORoBwlLeSgIuaVIlY%2FmCek%2BlKjQNAGUkzY0AeJru6MjeDqjHQKAbcm6x0CghTtU4jEu72bVQgEvwvjtR5eEEaNccgQ%2BXemFks0DXadEAmvB7l0c2bXG%2FI0lQNHjZYLqfssVy8BJ&X-Amz-Signature=2300eee841ff503bbca06c9d03fd2958ab7e772ffd1505197c39d0fa17cd287f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNUWJ6I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICA62KdR1jO%2FRY%2FnAaVURHmHc%2BZM%2FBDsiQ%2B9gD96TXBmAiABYvS6EcPrL2tiThKLcux3Waa3aZwWbL49325g2%2FpMLCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLz5bqyduBxt47zAtKtwDAOp9nlQHJEwaJRDq3au2M%2BMaO%2FUMFAgoQH6b790rE1QfshdEVujQCfmE0VwuzUDCiG7%2F3ZFuGaWlWEdBfKjqpJSRU8B70qi2D8JlBUW62w5HC%2BaGPRpOyz4dm4%2BqzksAIx6dfFfZUjtMT4HkFalAE%2Fz%2F0nQ%2FfqfCge1wsZ4PeTdXw58CbnNuiabWnoV52%2Ffy4PG7F4AIB1FyJFP%2B2STHtHj4KT47xzTvjQ5D7fkL%2BQ0oLkKMmf3NM7bJ1VwQV3BGHiNYKfMeOVqLsGjjpikd3kIi1zmKVsI8VwZVoVruGEfkPAmPjGCdFslxNDkHVe4m0H3Z2MqmV9kn3cQaPhEjpfWBA7tKfvd%2B4yQqCb0fQ91Nwfdz2t5453NRhQ9czUx3%2Bx%2FHnmBA6v2M1e7joMj%2Fc77Vsa9zD1STZPMEx7aWF37FwxiExSd15cV9pA7cCIRiMBF50EIliKi5zyqZEYU%2FP%2FP3hjmAoqWIAfRMX4M0uwX7lLfyjNyNJp25nTpFS%2BIeBiI3Ij0DWLoslZemwPWb5G8TsMEPYQBbXBOnTomQK7HUx8Tl8Jxc8vd2ZE9ZMHDIJxOpNCUn6pDJCuILlXoEaOGoRhldl9OFiHwjKmJ9XkPxdoC1Wgnh7XZvVJQwzKqPxAY6pgHgoJBOqgdvoNxn7pFOYxknwn2C%2BNtaR4bBAaoeiW%2BIzz0b%2BZjKtR2JZ%2B2hOP%2FXARx985bDEnp%2BP1xLBxBmaY9lsbphgTR%2Fri90rDe%2F%2FcWS9YsOQsfBVTcm4IdsEREYgDH%2FzTZY5altkPudFCQPDk7CEyhaRCMVwJSNmVFJg2Rw%2F5rzYSq6nBF3Bc5BOfD%2BDo1HwZWi1BSY%2FpwVXn5ZQm4C4ilG%2BgVA&X-Amz-Signature=0f90c3dbc8a22febff4bcf3a59e75d0a2917314032d6b2571afc512c968acbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUWP6MQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDBG1b%2Fb8XuGwOuhi6AEZFiPQFvyFLGyqdCpRne17E9agIhAPDDmALyLithAzEneIdIBPZ8FzlwBPe3SSdCdV9nK0sSKv8DCEwQABoMNjM3NDIzMTgzODA1Igy%2FejQYAfKz3CHFb%2BQq3AMbndG7A%2Bvh4q48HcV1JeFuYGutsaQyQDS6y4WSkACSvf73Vfc7K7vakPGfdlXdZR%2BWb2KByGuAVDynJX%2Bdzl4ifAtmt1NVJfg4JSM4O2UfE5bZVEeHvMe97eTINBUPoZmQCDPNrR4KmY5Wr9oIW4UN2%2BuBIOQAP7%2FMCtVoNU9Fk5nDpaK6ubIlDountvsVnIB%2FbC1HRWm15c8jyCW65pwlbDUznABG3ZPbKW1pxHViXP8kcK73bDNOJ%2Bgslwial07RgSThhrDriVSJ5OIQM8EggDi0ZwdKWdWiNqjuzt9kZ13GSWAS4Mu3d4MfBmae%2B3KU33oEDqoT2pEsS6EjR6sEszNrj4Y4amTRtZdRnlQLVKRgOuakBu%2FBXT39MfBHe4vgDPaRxQOz2RgB%2Biz2cn%2F89Ic6XQEYCPRtCBluFhp93daeDr67WgOzXdLtKrMerCz%2FzJSkNTVVbuppbgkVXBHeUfBMF0VXOFH5vqNOc0mB9641ZIusa1ycGwt%2BdcJx93snm5VWhoKbOvqDAGNl6sUVyaY7r%2F58dNelAU4fKLwVhSfdv7OEEnW9a0d18pKN%2B5tD2XiZdDu0lYlIPO8WBvI7bpTJhpRdgcrl5pUuRneqYN86T%2F5jKOBVbBIrhjCUqo%2FEBjqkAYVGtuGl6Pn7qU%2BtKTQGrRi2nVuCQBsM%2BpOS9%2Bdobu%2BVoSA9X8b%2FSMnGxRcY%2FZ5QGa33R0bhen8msNyf%2FAWBNcMNIy%2BJ24bC9c%2FRaIyx4PrlS5GNueHlcpEWxo0xl%2FWCOwWzFlipEqoiB1K0KBgAlkTneNBJuZ%2Fo8mFHmTGGxkrAy%2BLILQnms%2BIxiBrqgSBQSwTrpR64Y5fcpFRoUNxIvjeCa%2Bh%2F&X-Amz-Signature=9b573b81b0e3a841686823fa849dffe955695afb419248faba1a18d491ded1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEKIN6X%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAIpeWz2IEVc3DM3ZUpdEoxbhtjEtavQpqzJbQ%2FeJp%2B9AiBFVooAkQsL0J%2BeZEC3VfLrdCodVaa%2FAPt372sPDFrTlyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM68VXv6peU%2FXT7FhTKtwDpFYotFmZOhgQ73DPLuitRFZkEqo%2BXCXkLB2hcQxI2k3o9GJf8beC0R%2BI5v4HAkhYZA55q2D5HavR9DJXPl%2FibhFGup41NW4V4wW%2B7zPdJnRxiI2cAnyka22umOhZYFceTonnOR9cZ54b0kPD1I88gf1scoGoYvtQ%2BOHJzhwAN6GkoI%2FOMn%2BsPG7%2BzmgGMriXkZ1yU4hlgsmExEL1GtBZnaahb94q4Sw5qphV%2BvlA5G6DpF%2BiU3WIPq7tzEqV5GH1IY1K9vmxcb6Tqvxaagdcc9Pn4HXwWjo3bCTVnn2gUsuFI%2BWkUxlzYT9cYGV%2FL2cCN26hGtcwKkbWUcEN4Awb55RXTY8EXokklwp%2Bntcw28Y5gvVoMXsAGqIlv9xSl7iejHrpWGGpxXVBBICaw3R7NlA6jHG2MTSKCSGVUcze7g4Dy3cOc84LGqjCbcHQm5ySAmgXoEP4FNSMzq%2B4MkifhkyM8vpC%2B%2BhZCrIX1DKphRyfxRAyZlVMTIRh80IxcPpmkz9hvOtgB%2BSyV5%2FROywxLx58yss82hK2wD2Dgr%2FGBiTcUM%2F%2BAczbEEvdFzqTh7Ww28FsEA%2F0tEWspNL4mJexhguYjNSmN8hPeleRXeKDy1nbw4Fm9chsdyDgb6Yw9KqPxAY6pgEdoN5gmS8Y11PLoef%2BjvX3wiKFE%2BCwMgnjV9t%2B8V0qTEtfyh5HV%2FgkOPhBwmQWcF4JBzyoJBJhmKmiP1G3eD6%2BcORoBwlLeSgIuaVIlY%2FmCek%2BlKjQNAGUkzY0AeJru6MjeDqjHQKAbcm6x0CghTtU4jEu72bVQgEvwvjtR5eEEaNccgQ%2BXemFks0DXadEAmvB7l0c2bXG%2FI0lQNHjZYLqfssVy8BJ&X-Amz-Signature=42615353c05c88b34acc22179a48f5f3006239a9cc88e4bac53a9d4aed8759a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
