---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74IALWW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5n79jjosYaLnbjNwPGsHzeBaLLbC9cEAFgKtfHQ9KAIhALt1yBIu4gCl75sOUrpoL0hdmPCc4A%2B%2Fpba79dovW5VQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gbgfQqfQImQpH7cq3ANuiT8hmL3PD8%2FlRh7IEiT1tAOgU04qBFj4aunZaEK1GwAkAbO7JqRxA%2F%2B6DIP%2Fba97Hw4ruZ%2BAsnDQxixHRwGchHbKbCVabDahZhJzKzsL%2BJp0qkvUhJkKlYCuWDGsGRYP5us0fi0S4fG9Rm8FCltPjbJgxHjbX%2FY7nU0J01zk2zMV6zGwbfl%2FzeP9dnmR5d03D5nKq%2BvTM57Q%2B5WHMNta3gLSdYRiT4juvRFOc0Oy%2B%2FW2B7GAYzhQpkTjWOEd6WURRuDQ58obml1kH03dY%2Fu71xOQZefhn3ocM2zEWy5MAEDh%2BPgOdHsRa9HE6Jt0dYZxvyRev5QPrrPIAWXzboJhZsOcrCUU1Crai24ZFjJ%2BMtv5wSf2Cj6YT0NWILmOO2W8YRn657GSe6kcwsMZuBZxo%2BDgM9A6uJPIis0Cnbj%2BWXyVs2nlekhKJ1itBQw%2FY2hbcoDURJ9sqFuie1SHluVVc4f2RMlPcHg0w9Jm6G11Qapsr%2BzjdxwlQR66j6d2cpJLYOAMmxks43eHP8tRy5YxYXAjeGLpB1ygnImDiwX7KQcNwG2W7CwsgkhlmQOqumyh747kXH9zCgnUgxSOeawQjm9HdlmY0DQDq%2BS9pu9G8UXjMZ2qUmjwYpVb4TDbzPi8BjqkAbwpGBePRojkhHal6FQDknWRMJuoEJ0Y3Vcrmjg0LazhwllhxaHkxFBszI58ttE4I8cJPkGHpNBOcnART2JFjViBsB1EMhl4kQ4%2FNsDG3gFbpdp5ib70%2FncOfz%2FBnfoUgNfWHW%2B7Mxa1l%2Fs1p0t9Uu%2FsTAw%2FVqzlVtS3fbuofes2XJvyAA3CqJ%2B9jAkHr4z5KMVLlASBv3Gicey1u%2Bs%2BLh4zRtOR&X-Amz-Signature=7b65ff4a4a3e8405b7564fd0ccf31c751b7af0ec36450e133b517d22e1425222&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74IALWW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5n79jjosYaLnbjNwPGsHzeBaLLbC9cEAFgKtfHQ9KAIhALt1yBIu4gCl75sOUrpoL0hdmPCc4A%2B%2Fpba79dovW5VQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gbgfQqfQImQpH7cq3ANuiT8hmL3PD8%2FlRh7IEiT1tAOgU04qBFj4aunZaEK1GwAkAbO7JqRxA%2F%2B6DIP%2Fba97Hw4ruZ%2BAsnDQxixHRwGchHbKbCVabDahZhJzKzsL%2BJp0qkvUhJkKlYCuWDGsGRYP5us0fi0S4fG9Rm8FCltPjbJgxHjbX%2FY7nU0J01zk2zMV6zGwbfl%2FzeP9dnmR5d03D5nKq%2BvTM57Q%2B5WHMNta3gLSdYRiT4juvRFOc0Oy%2B%2FW2B7GAYzhQpkTjWOEd6WURRuDQ58obml1kH03dY%2Fu71xOQZefhn3ocM2zEWy5MAEDh%2BPgOdHsRa9HE6Jt0dYZxvyRev5QPrrPIAWXzboJhZsOcrCUU1Crai24ZFjJ%2BMtv5wSf2Cj6YT0NWILmOO2W8YRn657GSe6kcwsMZuBZxo%2BDgM9A6uJPIis0Cnbj%2BWXyVs2nlekhKJ1itBQw%2FY2hbcoDURJ9sqFuie1SHluVVc4f2RMlPcHg0w9Jm6G11Qapsr%2BzjdxwlQR66j6d2cpJLYOAMmxks43eHP8tRy5YxYXAjeGLpB1ygnImDiwX7KQcNwG2W7CwsgkhlmQOqumyh747kXH9zCgnUgxSOeawQjm9HdlmY0DQDq%2BS9pu9G8UXjMZ2qUmjwYpVb4TDbzPi8BjqkAbwpGBePRojkhHal6FQDknWRMJuoEJ0Y3Vcrmjg0LazhwllhxaHkxFBszI58ttE4I8cJPkGHpNBOcnART2JFjViBsB1EMhl4kQ4%2FNsDG3gFbpdp5ib70%2FncOfz%2FBnfoUgNfWHW%2B7Mxa1l%2Fs1p0t9Uu%2FsTAw%2FVqzlVtS3fbuofes2XJvyAA3CqJ%2B9jAkHr4z5KMVLlASBv3Gicey1u%2Bs%2BLh4zRtOR&X-Amz-Signature=fcb90b907da46d9a94f6733764df808a12b3955e200648072cd217f599579c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F3L4B2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDJQWow9eRp%2FxXDnYdH14WMb10hsWhkE0HJTIINeYrdAiEA7fFzrTOOcQo0CSJKkNiUIYSPzhDSICeV0ixeLjbxs0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWoYNw4s58xJJxvuCrcA1ZpDkMf%2FFOK9YPCA4ZQM9%2BmhSoCDwYqxn4X3ocWoO6voVf3GNjhSSDgu068VpfhX7VHLwkO4wxveAvlhiZUg%2Be7K%2BxVWsQS509z8hUelC02yYan1Pjx3B1TZDhd7koC1HMGjDO%2BQAiqwLgDRHtB1S75HNOpPF9rM24nLaRuu9rTNAnPRGFEOnYS0CijQzFICpkWd25hFXnpu6uqLKSpu4QaJ4Vzo%2FGraH9Zm4Ql8ODYksrQJY2UqPpoEw1qZdaf%2BVN3hcFqv1gz%2FULToMaH9hcU%2BuGVrzr5NjCv%2FrdbcTPSao6GEztiUYyasAndE%2FGw7Uggxnk1uuKy%2Fhe6fTvhfSTIrUag2cgqMolHhYGeXkD%2BovECHJCyuqvC82liBFn34LMNvQ32xZwB5%2FgWenbsLfzA%2FDTnWvUrPy%2FLAjqKuTRFIDEZlENvrHmBfPCGpnI3Goag%2FmXruoSLymEo%2FRkBSZHFgGgRJPi%2FhuwmXmf9dYKaQQM6hAgVLksppH4Osp7awDNSI4%2BV7OlOBQnkCw5g0GSjhI2i1bbbDxUFeRo96Von2%2FRyn6BJn5ftpGjIulxNp8Pmu0s%2Bc0Gbzsu5Ci%2BY4NX2w52SuStFQTCOmxkfXfPBxPtwoYmdvOWExNyMMJrD%2BLwGOqUBLHYoxHaWzn0clHpA6o39wf%2FdapDqlcf637h8%2F24sQWop5IrW%2FZ2RP%2BUdvtvSjZI98J6ajGh87dT5PdlLcfUqgss%2B0CQHRuv4TJ%2B021uzDAv99rQuN6KAUF1wdJOTXlaGoUyuZkqOuRks5NbqC4xgaREGkxQtuHioK0UAIyvacysEjirPMi8eV%2BVHej0cgclO9cob%2Bwphig76Hx%2BPrF%2BDEnH1usYy&X-Amz-Signature=80e83ae4b6b14ceec582afe38e5b1f3449f5891c5c4277a73f89805a57faae93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZX3PIK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAwinFNV7qUqq%2Be%2FyFfC1ewyebm5Dp3pLAJpE7M3xrfAiEA7fRmOvfRUSA6LVBm1xgCsjNhtNKDtxdhFDCf7cd7XVQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCEH4UAklqn2lTZQCrcA%2BWEtuKvz1S%2FQfHwgpovJi6MsOeN8%2Flw1CV7oEIsm3%2BrkZ4f5x50udZHzAFU60FaWGJNDPpcis2yk7mMI0YcH5YulGNz3g7xKm47BxoUzdufpRPw7lPr2yj6DtplBlVlXCwhxxNMEZexVCUutDGQmdhY7NXGa3oaDSpbQONmGvHJwMd%2BolMgWNTDARepCJTPPjR%2BGxQ9jtuh5InWqFrHZXD%2FfL2ps8JRPxLG7pCqakHpcmhz5W8ZWoQUoV2xEuOX4C9%2BoMvzo0p7fCq989CamEIP9XpZhggCo692tjdPJMG9S2503AJ15geyu%2B%2F2HG6YdynMbmgb5Fk4XDDJJbghZUArABBP3XkpleCCEvDSNXj250puqKfyeENk1MSRa3xOXIOXp6QAEd5dFmP16NWPP3bsyofakFwL0PUV6wFOsHyNFMf%2BupHCKd%2F0ltSrlosbY7KlP1zCBhcJxxryeXDN4YaHP9Bm2%2FVU4XvReIhLnwcuvX4HCn%2FWjCiq8FSDa8c16p%2FLOPym4QLhK7dk7DdRz0zf3LuSNiEu76aisHicSy804Dz9BOjwaWj4yRQcVoc4GdINeMjngw87l%2F5Lt9l%2Fn4h965Z63S4yCytOiDbVB%2FZIQvPs5yr%2Fam7Sjf7xMPbD%2BLwGOqUBa2DyVPkROYU%2FzheBayzM3VlC8LBgw3rqpZa%2FkqWUanQeN1%2FR6o2N%2FZ077PfBF7Ck8rb4xvHHtaa%2FbvH%2Bqa5XnMUY6o5r1xDPz9dBAEb56A%2Bl%2F%2B9xDMy%2BexcIT3RAO54OnPANvhN2tGMq6rYgpfX84V47ilnMbVzDqse0dWvwtau1xk00Ldcylq6hKnwaBd6lZIbd%2F6jqatCo3Mw6tlF8Go%2BEKY%2FU&X-Amz-Signature=b13147532c6295a6d4cef1d5e548ce4901da6c0fef78218a389315ebbf141cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74IALWW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5n79jjosYaLnbjNwPGsHzeBaLLbC9cEAFgKtfHQ9KAIhALt1yBIu4gCl75sOUrpoL0hdmPCc4A%2B%2Fpba79dovW5VQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gbgfQqfQImQpH7cq3ANuiT8hmL3PD8%2FlRh7IEiT1tAOgU04qBFj4aunZaEK1GwAkAbO7JqRxA%2F%2B6DIP%2Fba97Hw4ruZ%2BAsnDQxixHRwGchHbKbCVabDahZhJzKzsL%2BJp0qkvUhJkKlYCuWDGsGRYP5us0fi0S4fG9Rm8FCltPjbJgxHjbX%2FY7nU0J01zk2zMV6zGwbfl%2FzeP9dnmR5d03D5nKq%2BvTM57Q%2B5WHMNta3gLSdYRiT4juvRFOc0Oy%2B%2FW2B7GAYzhQpkTjWOEd6WURRuDQ58obml1kH03dY%2Fu71xOQZefhn3ocM2zEWy5MAEDh%2BPgOdHsRa9HE6Jt0dYZxvyRev5QPrrPIAWXzboJhZsOcrCUU1Crai24ZFjJ%2BMtv5wSf2Cj6YT0NWILmOO2W8YRn657GSe6kcwsMZuBZxo%2BDgM9A6uJPIis0Cnbj%2BWXyVs2nlekhKJ1itBQw%2FY2hbcoDURJ9sqFuie1SHluVVc4f2RMlPcHg0w9Jm6G11Qapsr%2BzjdxwlQR66j6d2cpJLYOAMmxks43eHP8tRy5YxYXAjeGLpB1ygnImDiwX7KQcNwG2W7CwsgkhlmQOqumyh747kXH9zCgnUgxSOeawQjm9HdlmY0DQDq%2BS9pu9G8UXjMZ2qUmjwYpVb4TDbzPi8BjqkAbwpGBePRojkhHal6FQDknWRMJuoEJ0Y3Vcrmjg0LazhwllhxaHkxFBszI58ttE4I8cJPkGHpNBOcnART2JFjViBsB1EMhl4kQ4%2FNsDG3gFbpdp5ib70%2FncOfz%2FBnfoUgNfWHW%2B7Mxa1l%2Fs1p0t9Uu%2FsTAw%2FVqzlVtS3fbuofes2XJvyAA3CqJ%2B9jAkHr4z5KMVLlASBv3Gicey1u%2Bs%2BLh4zRtOR&X-Amz-Signature=b4ad3bc93e5ec4f7659eaa8e7b2c6c958584bebdc4c53767419cdfbbb0cf45b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
