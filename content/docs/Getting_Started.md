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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL35WSD4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2B2rlwTzNRp20JArS63JYac6N7ASAg9R5fjQFRGg0ogIgMuhhxhR42tXfEJfGpLX6tIISw4yhyQ%2FoxvpfUfGeUgwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIt3vvd8PPPjDaLJEyrcA5KCtUXTBz350t132fJPZTmje11H%2F20P3jSzozHLQ8ZLstcX5Upp1eiyNtTmqQbtFm%2Fdz3UC0mNiN7EDkLWHUcZbOHlFEcFGTe2VsHfwKLV9iszjIBx6Y5CoDU2qFHZAKPV7wbSlnX0VEvZaojPBmM7WUUOBgmVaTVqSfK4%2BKa84g%2FErj3R5nGoEotNWaHfoqADBdjfY3YRPy%2FPNkYRDaGmfK5BVwoqDAAfIaam%2BajnU6zzjRitkbSAxtei1C1QqAN9qvPo5monpGWhamP527Xs8fNDKYUmtLsIX%2BJoP6j1zVjseXu8%2FsoDp1jR3jc61sG66s2jKMKICAHktKPJ%2FRUEl4J1mjtmVFvWfe%2FHRFYyyA5fWpCioiHrv461K1EOiUqew%2FQIiXuOd0rqkFVnKo6GXvt0khPvGYGsUhpy93otufMDGTCw7CdpajT1Jlm6XIGVakIaiMqN9EooAXy3k3rXi72i1ysV0eu77kqTgvWV7wh4oddiwBjopVRCReKC8395hjsusnD8mlK0C%2Bw2QdoXrcVkJ24ZXpD%2Fvfeg67QiOZ2K36oG%2FY8AbOcni%2BJeHwcQFNAygRim0Q%2B7Lrlw9bwhdZAAqYJBRbqoP7VuJ5xuvCs7hojzT5XLJiDGAMIuVs8MGOqUBFr0%2FjQNvIbiRgS8rBuSA7dJKpLHfssLsL5VmSfIFf6z86TrdIXFCwGNLcv9FutCiHK%2FkpNpm6IUVK5%2BHxao8tjPIaUbObhZ4OLwYXfaZiR1tY%2BrO4YzypN%2FLhtT%2BzdC3SSf66jdNA3z0CJLv6EsaXSRAC6vjuxJqMq4UHKqu8P1Kdqf%2B5221jLm2t4pfoaxBYV31Bpy6wi6pgRouWWvvV5OJDH9j&X-Amz-Signature=b49f8a8d71c0a6e62a0e0d64a1854c368ace183e7e42111039aba8c45f900717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL35WSD4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2B2rlwTzNRp20JArS63JYac6N7ASAg9R5fjQFRGg0ogIgMuhhxhR42tXfEJfGpLX6tIISw4yhyQ%2FoxvpfUfGeUgwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIt3vvd8PPPjDaLJEyrcA5KCtUXTBz350t132fJPZTmje11H%2F20P3jSzozHLQ8ZLstcX5Upp1eiyNtTmqQbtFm%2Fdz3UC0mNiN7EDkLWHUcZbOHlFEcFGTe2VsHfwKLV9iszjIBx6Y5CoDU2qFHZAKPV7wbSlnX0VEvZaojPBmM7WUUOBgmVaTVqSfK4%2BKa84g%2FErj3R5nGoEotNWaHfoqADBdjfY3YRPy%2FPNkYRDaGmfK5BVwoqDAAfIaam%2BajnU6zzjRitkbSAxtei1C1QqAN9qvPo5monpGWhamP527Xs8fNDKYUmtLsIX%2BJoP6j1zVjseXu8%2FsoDp1jR3jc61sG66s2jKMKICAHktKPJ%2FRUEl4J1mjtmVFvWfe%2FHRFYyyA5fWpCioiHrv461K1EOiUqew%2FQIiXuOd0rqkFVnKo6GXvt0khPvGYGsUhpy93otufMDGTCw7CdpajT1Jlm6XIGVakIaiMqN9EooAXy3k3rXi72i1ysV0eu77kqTgvWV7wh4oddiwBjopVRCReKC8395hjsusnD8mlK0C%2Bw2QdoXrcVkJ24ZXpD%2Fvfeg67QiOZ2K36oG%2FY8AbOcni%2BJeHwcQFNAygRim0Q%2B7Lrlw9bwhdZAAqYJBRbqoP7VuJ5xuvCs7hojzT5XLJiDGAMIuVs8MGOqUBFr0%2FjQNvIbiRgS8rBuSA7dJKpLHfssLsL5VmSfIFf6z86TrdIXFCwGNLcv9FutCiHK%2FkpNpm6IUVK5%2BHxao8tjPIaUbObhZ4OLwYXfaZiR1tY%2BrO4YzypN%2FLhtT%2BzdC3SSf66jdNA3z0CJLv6EsaXSRAC6vjuxJqMq4UHKqu8P1Kdqf%2B5221jLm2t4pfoaxBYV31Bpy6wi6pgRouWWvvV5OJDH9j&X-Amz-Signature=f261739557d81d752c82eb1035b3e7dda2a582a64c2c071ab4beb1d5d2053c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL35WSD4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2B2rlwTzNRp20JArS63JYac6N7ASAg9R5fjQFRGg0ogIgMuhhxhR42tXfEJfGpLX6tIISw4yhyQ%2FoxvpfUfGeUgwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIt3vvd8PPPjDaLJEyrcA5KCtUXTBz350t132fJPZTmje11H%2F20P3jSzozHLQ8ZLstcX5Upp1eiyNtTmqQbtFm%2Fdz3UC0mNiN7EDkLWHUcZbOHlFEcFGTe2VsHfwKLV9iszjIBx6Y5CoDU2qFHZAKPV7wbSlnX0VEvZaojPBmM7WUUOBgmVaTVqSfK4%2BKa84g%2FErj3R5nGoEotNWaHfoqADBdjfY3YRPy%2FPNkYRDaGmfK5BVwoqDAAfIaam%2BajnU6zzjRitkbSAxtei1C1QqAN9qvPo5monpGWhamP527Xs8fNDKYUmtLsIX%2BJoP6j1zVjseXu8%2FsoDp1jR3jc61sG66s2jKMKICAHktKPJ%2FRUEl4J1mjtmVFvWfe%2FHRFYyyA5fWpCioiHrv461K1EOiUqew%2FQIiXuOd0rqkFVnKo6GXvt0khPvGYGsUhpy93otufMDGTCw7CdpajT1Jlm6XIGVakIaiMqN9EooAXy3k3rXi72i1ysV0eu77kqTgvWV7wh4oddiwBjopVRCReKC8395hjsusnD8mlK0C%2Bw2QdoXrcVkJ24ZXpD%2Fvfeg67QiOZ2K36oG%2FY8AbOcni%2BJeHwcQFNAygRim0Q%2B7Lrlw9bwhdZAAqYJBRbqoP7VuJ5xuvCs7hojzT5XLJiDGAMIuVs8MGOqUBFr0%2FjQNvIbiRgS8rBuSA7dJKpLHfssLsL5VmSfIFf6z86TrdIXFCwGNLcv9FutCiHK%2FkpNpm6IUVK5%2BHxao8tjPIaUbObhZ4OLwYXfaZiR1tY%2BrO4YzypN%2FLhtT%2BzdC3SSf66jdNA3z0CJLv6EsaXSRAC6vjuxJqMq4UHKqu8P1Kdqf%2B5221jLm2t4pfoaxBYV31Bpy6wi6pgRouWWvvV5OJDH9j&X-Amz-Signature=2acdf4783613c59efd4b9db8558854ea26d9ce2e7eebf8d82e57e3abb5f388a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTEBGYV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2xmv7AuF1YAhQArTHXsZT5Hjz1jvJJMrNNEJGCIuVLgIhAJLqKT1hfd3l5xxPkIXWkbbzbESeyfj6prrInqyXM3U6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUhmI6YXblR8NqWsgq3ANlXjPvdkAiL5BXCniObq2QCfpSHpfDcLbDl22sVqUJ%2BRMtagGCWC%2Brh%2BpSxG%2BEkh5vtvF13wpEOlz7PylshVhDOgMq3Pq7Rvm7UZA9Hgyl4V6Az1Aj2Qpmd0hTDJKCaKRvoRcbk9ES%2FyOirwjvAiuamd6XY953%2BYw6BhAGUan0YJb%2FSoMtApb1D6%2BZJsgBcBhF4b0lwYsyeQDJ%2FwXqsZACnK0Wjre8hAUxool12%2B7CylzInyLLPy%2BnqptpH7ilky2l5xtbInFoSS8fBEZzv%2BC8iOxAtHUVMsjpN63cx%2Fc9mfguMjGt0ngdRfHJ%2F1yXmMt%2FeJSleg635LjorI6vC2wyaP4loOFrVE4dJIsdoV4QUpJjODG9Q64deT%2Ffa8pfTGCB9TEKmvNx7Lt9C0KzSD%2F0jUb83O%2Bzqr7uawZ%2FRih%2Bd3pr70QYBS0kCBinM%2B4ceDP3Vl6%2BOBSI%2B4NU5EJY4s%2Fow2uaBlY6DNgrPGjlbE6SkoEX0ca%2BjzZYyuEGe5gHUDxEf3ESNsgrsFrsON49u4dNl0cdgDos7rmjE2iwvRSBUv6VFWr%2Bs0AWZFjJ0N1T7G%2BVCftM10A%2FGmgYseUmn%2F2nKpCRkN6PWjYhUGA8Yz7rJyL1WMZneS15Ap1g4zCUlbPDBjqkAbfxrE6gz6u6drvxdUhuE9iewhLAZppepqGproBqaoY6P4CnSxLZD1VlTDmGLoB2UvJyIZiifUFEh32e0METgTjVlt6SNVx%2B9oq2S94RAazNNJt6UI3UlbtxJvIjMh5X%2F5UWWdCwCMTwam3s%2Fs66Uu8OPyjK3vgj7HcQnf5ZmUD8aNWh8hcSsLfFGBfxsntLmvtuvpTEcEnr5LJfAANayPvSh%2BAE&X-Amz-Signature=2dda7f2b06a38195c888b5e4871cb269c9a1e09e5fa12aa2e4ae04d570b5deb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SROMDNVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnQfoYi1D9qFXhOErwOLU6nku%2FZia%2F0eMWEZWNvJM6yAiEAmc8BCOva1sCxqObFT4Ba209oamr4qrF4zGnYxvQ3nWMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyHMp%2F%2FpdOVBEARMCrcA%2B9EHsnFZzi0tMMhu9VEMIt0%2BlCU0PDpwd%2FeDbOKoWo1BblMhpjPehaLe4FGEvfjT5RADZ9q0ezVJydgpatTVRDvvs9tkMO7vnwV0DWVHETHX2gn2fGFI3PgmFFAUJXlKb%2FhQMM42hObfPp1IfeqXbO%2B1wcLIvAuaZEDK9y%2FLUGSlG8p5vf5hH1Jk8%2BS9zB4m67nO%2FzrdlF1sNSHQS1%2F6JCIyTUBFvbO2OlvQLU0m5NtbIG33Vl%2Bxo0LMUlw5WWFD2f5lul5P8SB2kzYLj%2FlvJEVJL0JKPldMhgjiMbKwQ4EUbfS0lvaKRCaDASB0wxVNpfFnwms0HSkQY%2FjvJMaUAMai8Lr5R6CcfsBJ%2BgmAHz%2BYdbfgG20jbeKfzKHQxe0AbeDszE1lFNEcr%2ByZ0t3DYoc%2Bd4a3kdJ82AKyWIy86fpv%2FU%2Bn2T5tlAMhcbaThA8E4Vi1Kj81FeoKglo6fMKG197GzH%2F%2Bk9JK4pivMXmFT3CcrED32qAT8smcsV9Mj4wXmF3Bqxc%2BQOjp8Hehh2JenzAEe7TrAxy5vpVGa3f9mdzujbYPRLxfpHp69n7El%2BIa%2BvzZ38b8oELjY6mZPxzClhnPUv3OlwiWw3FgPB7oaPEiKwlg9qSqzdpKB%2BqMICVs8MGOqUBlvHNWL2q%2Frddjw0j13rfdDU265Ckt6ZeFIme4p8pxowBv0yjZs4mw5peujSCQ4I7g%2F1uHDHKzSt4%2FU9%2FJtXPD5%2FNHXW1ABE1DfDQ127r9w%2BIDom5Rs4MpRGR7eL2Ht7tjZTf0FIjlcQEH8O8Ps7jcf4rjn9v8iNpBPJkX6Zbn54UXxKXj9mMd4Runc0yd29%2BKRAdFHlD6uNiIMqeucuDVRAIbbiu&X-Amz-Signature=1390464cad497bfe42c0b8b5529e489f692219d090fc8188398fa2488881330b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL35WSD4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2B2rlwTzNRp20JArS63JYac6N7ASAg9R5fjQFRGg0ogIgMuhhxhR42tXfEJfGpLX6tIISw4yhyQ%2FoxvpfUfGeUgwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIt3vvd8PPPjDaLJEyrcA5KCtUXTBz350t132fJPZTmje11H%2F20P3jSzozHLQ8ZLstcX5Upp1eiyNtTmqQbtFm%2Fdz3UC0mNiN7EDkLWHUcZbOHlFEcFGTe2VsHfwKLV9iszjIBx6Y5CoDU2qFHZAKPV7wbSlnX0VEvZaojPBmM7WUUOBgmVaTVqSfK4%2BKa84g%2FErj3R5nGoEotNWaHfoqADBdjfY3YRPy%2FPNkYRDaGmfK5BVwoqDAAfIaam%2BajnU6zzjRitkbSAxtei1C1QqAN9qvPo5monpGWhamP527Xs8fNDKYUmtLsIX%2BJoP6j1zVjseXu8%2FsoDp1jR3jc61sG66s2jKMKICAHktKPJ%2FRUEl4J1mjtmVFvWfe%2FHRFYyyA5fWpCioiHrv461K1EOiUqew%2FQIiXuOd0rqkFVnKo6GXvt0khPvGYGsUhpy93otufMDGTCw7CdpajT1Jlm6XIGVakIaiMqN9EooAXy3k3rXi72i1ysV0eu77kqTgvWV7wh4oddiwBjopVRCReKC8395hjsusnD8mlK0C%2Bw2QdoXrcVkJ24ZXpD%2Fvfeg67QiOZ2K36oG%2FY8AbOcni%2BJeHwcQFNAygRim0Q%2B7Lrlw9bwhdZAAqYJBRbqoP7VuJ5xuvCs7hojzT5XLJiDGAMIuVs8MGOqUBFr0%2FjQNvIbiRgS8rBuSA7dJKpLHfssLsL5VmSfIFf6z86TrdIXFCwGNLcv9FutCiHK%2FkpNpm6IUVK5%2BHxao8tjPIaUbObhZ4OLwYXfaZiR1tY%2BrO4YzypN%2FLhtT%2BzdC3SSf66jdNA3z0CJLv6EsaXSRAC6vjuxJqMq4UHKqu8P1Kdqf%2B5221jLm2t4pfoaxBYV31Bpy6wi6pgRouWWvvV5OJDH9j&X-Amz-Signature=47ff6fde7929fc156d6a3f40c9898892e0f0fb48e33dee90fa2b24c7af8203ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
