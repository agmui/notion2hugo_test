---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=14d3fbcd5dcdceedacde1daaf0d8101987b7aa206c5228ec450f7de27d6f135a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=85eee49430263115160e007f639e66e7c0dc09bdefcfa65b0f3f9af3bc14ea0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=a6045da854c33074f6e557134ed889438149660a3f2792cbbd7976bffb61d5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFEQA4I%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9GnmBDUWlFnAUh6qvET00wuXJMl0shYMSHmCr3mN0JAiEAniIP9nHMMJSsanaMsQdgGu3Zj%2B4ggay5GlwSxOzjU8QqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMj87%2BCVwZyXgd0syrcAxOFYIuwSy4LxzLSkDZh3vVKwqhRA0hrs3ULhdmp%2BKm0tRLZALtT36yiq4ew8xCAhRNR7NT6nrMiWOWFdEFlta%2BUx2F1zn0sZ1JGhHBlLr2oRJfXqWlEz9fBGhCdz%2FHZ%2BU8loaAVnRgMEkVFeYgqETPBLztzIHo0S330eG8%2Ba%2BFJjXie0TcDP9WYIVNlUcrXt93HiuBO1tN2XDAlXo8EvdOHJrNVjsHK90E5aQ2jskI1ZLPsAnPjLgmjuET1N5SnozD%2BaScXPOiWLZg2jVH%2BUVkinyt0LsvUjhzisO9ck6WGwxgVJB0jzkfh9kIp4Oqo8FDCI8KKq7BGB0L6If7Jktwlzjkpszt5H7BmgJSFNUDLix0s%2FjGi1Ue%2FjHuAwS2Lk%2B%2ByaIP8G2nP0hLkd%2FPPhoAMLtSPMqGZRtSJmdDmpHfxS2KkZHFYFDOFPco8WsFmDER4dr17og5eEw6kEE62CN5v%2BAkuSgjMWOCjlOVvOt2e11LkaYvoAGzZJXcAMIRmtXMLR03jJSn%2FAnUAFE3wNAkltsQ2ASWMMXNXCzpNrzJUGh3bblVWUZDG3BsO5wBILrau0U2Lt%2Fsdx%2FVTvelnone1Nf%2B1UVmuPUB%2FuqV35TNWfqOFQd0f2ZgS%2F8haML7Yh9IGOqUBTPw5q1U5e%2F2GoQEs0FRBMI1Ls%2FlP0zGh0LQ79YPeqG4nfD3dzPtycZN7gR2O0unh9hFlA3PvUBn3qP3hv2UWrwsRpbEdAOQjs6vH0Q85tN2dkvbHa45Y0VM4uPJTFWSYiMiCaiIEwdOL0wnh21IAYAK0VaZK7N660ek02RBGzo3ufMEQgIgL4jO25EI1VsfCHEbJGZSAlgqzJq%2FUMPL0vH8zVuu6&X-Amz-Signature=d36f92e291ec6b2a13dec1d59e5201b56f43d3da36e91c20eb27a284c62ec8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNJX6Z4%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGy0%2FhoJg%2BdwevUHlR9VJ8eMRBMT0eAASTjbxOu6uGGQIgQf%2FisGAWPfnxwUjanXZdyIO4wC96maeeZna4y%2FuyWlcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWwn6cSzih9gWLyuyrcA%2BKLrATr1hqQb64hdqFf09Z%2FX24g1fJT6aQ8%2BjE%2B3DrpWVmyPQ%2B2JxyuGu7CbU%2FlbnmF6AVpgvaRrEz2R%2BhiLBzXGA9xXvtcYxGz9h32hcZmUaECCXK1kajJo4dcq4OoXz90wtQkicCec0%2FQRDvX%2BiNe5hqoRqIF0DTQyftjV%2FGQlN51IwcYAByIOddnH1Evv%2Bry1dVs4%2BBj6MO6obeizfUhgNlO8yHQ3aSD%2F4Av%2F%2FGu%2F4I5ZmLKNNHGKBqbq318i9ut8I5nTIUdAJSvfJ6dkSR1O267VAOsSc%2FwmXgcBqCzX0UBFEFQx5VYbBndlcglRgtrUzfUk8HSG%2FmNs8XW3RUaf96ROBtDcefKLFnel8pSmTTOHCz%2FjPPu653vBOaTyK%2FbR4Xo%2FybvrYvrdzwxxlcr9t64xe22hkQP4vBPDfEeKBWO7T%2F4uWHtknQ8S5BZdjHpUyPSFbifBD0b0YYIl1TvwyvX5wbRCIIfAdpTHJwA9f9waXr4rPlEYj7kBeF7WzOEAk7VMn9IDM9OPp4TM9fA3qZJr%2FDeQ4c%2BoQtOT3KrogqvnhdJX%2FjtbN6GMNjyk74lll%2Fz4Rn8hBz3wUu%2FaH4LdEMhI2sihFigb%2BwmKmyQL%2BOFZ1%2FH%2BRpSMuxlMI%2FWh9IGOqUBuDiD04swKth9tKH0i3pYam2nbSZ1yrpauRcFVylMRDqUPNsIFmE5gfA5PsYRXM7%2Bs5R55mPe0I7GyT33peesO2AmaGb2uSXakMmc%2BxoEGTiAH2o1UiM0fGselWXsfBtul7NtDcVy7tUsb76BHPK4MFoOudJT5jYQ78tm8else%2BP955hTMkDQuJdxZCFa4wIUGUpY6O9vKj%2Fys%2FM9yI92CoiEL6ix&X-Amz-Signature=4b7165e674f86ef08321639e443c3b1ba2a75ebc815c6fed399fd99ec83797cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTEQGBY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRYBsA%2FvcUi7EplKfmjckEHu04VM7U2qEDgmlBGh9HgIhAOSkElcoe%2FnjVOhxx6E2V62w%2BbMc%2BGGGFy%2FDP2wa%2B1LmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhetfMK%2F148q34qxwq3ANqNF1jjkL9TxyNkpG%2F0ZHEdgCRUEYNysq6v9sL6bfO6PxoqEtfHO7UxsP0IdjQADlfHPf14rhFA4yJlW%2BH7CoME8AGaBDqo8yUd1BVJGZN5RPPf1kXVAVkihNhRRyJO7r%2FQffQVofEFttJqtRp069pW6H5EwCoIV5SKetjJbNKsNqvUQp5R30K4D40qiyEKiurKqtGjsAybpZK96GxDJdchUO83N2ChRDt4awtSVT1Oh4HHLm1eJlGWFV%2BT6aqHB74PPDXjdpm6y%2Bu1OOuuH8wQDHcTN%2FHTBFDb%2BcOTG%2F5Bk7Hw5kTqLKFOXeIEkHZvp8XiAFaUj2g52Pkxd7rtzTo0zCTFFS4iPqwSHaiyCC1UH9xoWxxaaQ0fCoODBaufeGRZ00XXbEpMUcDbSUiVboAk9R1yNIgwzKykx4e15k1DTTOSH9HqWYYqf%2Bd9cCg7zVtrDqz%2F6COXtCvrBWn2NRHAP410m453zVQKsx3F9%2BHt%2FgmRRfUOzE1fqHIB7j70%2BDnFxwbj4vfbkxiuWO0SBEDO8id%2Bu8LF6u9%2FI1%2FhmOqcrDpuWPCb4PPWi70x%2BsPn9Ay0VWSq5rmQ76hZn%2Fa8l1xgIHSMKUMjycn9mWv6uNFVFamB3ntleAxCAK9aTCX2IfSBjqkAYLtq41ZXy0IWdUaS7kXaB8UTIGOwujbo2n26jCjDx64P62kdEo9LMmj9c%2BpW9D4CKl%2Fe3Vae7%2BnM09PywLkkVE2FZFUtH2LtpNQO0zIiKFABvn0%2FDwpPCnI%2F553%2B8FP1UJSzwr%2B0yL%2BKBuKb48O9eMGqlnKEPrdQFg5r8%2F9A4ekp9MDkkYlXMe8GXDYavBQgwxJunvF1qElyuvGEojbWE3WeOYE&X-Amz-Signature=e32e45ab62d2e2da9d4deca8a457d3d355b601e6463f5ef311d72a051dcef4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
