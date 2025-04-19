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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWP4BQEH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDA0qrg9y2Jrd2iV8Y%2BsxLJLh%2FDa8oamgpPmM2RURGDJAIgKueDkSSrU%2BXs9Tk6Yk%2B8YemrZUuTyjrOgxwLDWKKxVkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsQLNkm5lOZs1x3BSrcA2wOX05EVzIYJur1N1tqNKEaiiNZvTRp%2BszpDLNd9i1YwzUVsnCIZfU231swmPfcDu8JVcJ9EQA%2BFDYGgN0uLGXxK0hhzqOx12RUZ74ls1%2BqHEh9U7E3iIuhVAeOaSNN8CmuptPr6wUMv7uTZsjAnbgJAiw%2F54PVRaaA%2FqRrDCOOje69%2BywIFkoA0z5yCM2ApD07J0cZRvGFnhWzTu4c3FzThIpwNtFONkTnTgTqdKOZAqgP3L5%2ByzUOxdlPnCtpp1BnczdGJwHASGMzrIP9qCJtM%2BMusVMgEXGOA%2BQnkvSj6qWqyO9HTbLaStiwwAJRsPOaYmSNVwGJb9ZS9%2FFpMNWdWRUalnV3vc6oGGnSP5F4ZSu2ak%2B2qEkuPFDK2FBA0bUQ7mjrv1KtpPcyxVNvqc019o7IvYSggXaBMGCrN%2FH7qwd%2BReJhXMEWRqGq8k0P%2BFTdqaHluU0nMG6pbN2T%2FsyhMHy9BpnetbLOLKKyvIG0u%2FckJW88sTcRruDmSo9PPbLygm0pv8fIiQnwLxpObCfGFy1uNLy8ugSUUVczjamEjySqYIYDzMu1mXAqE4MztSNiTq%2FHc86lMqkZdd8yH%2FMU0Y6YPDeT%2FY6PZJx%2FNQa%2BWvPBXjEmdvWBvrkgMK2gj8AGOqUBhqVavItSPIHEhVJBobiRMyMJGAZlWGKq2NY5TwR6hkCS%2B8sEtR6bn%2Fex526pe5rZLcRr6eeu3vHyqAlrH8GVxsZo8TKgbEDd6WMMfBR%2F3hWbh7VFZGQhqQAKW6xqMArhR5T3m4DZ2mMAtmTdBV8%2B0S0S%2Fa3BrL4i362Dh1vKACilbKdy8AtJ9LmeJ8mdF0qudA9HcNThp2KMUKBwMfRQbF8TmNeT&X-Amz-Signature=58ea14e09dc69b1916f1e4e3ccf92b78c3f937b0e1e56c1255585610749d2e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWP4BQEH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDA0qrg9y2Jrd2iV8Y%2BsxLJLh%2FDa8oamgpPmM2RURGDJAIgKueDkSSrU%2BXs9Tk6Yk%2B8YemrZUuTyjrOgxwLDWKKxVkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsQLNkm5lOZs1x3BSrcA2wOX05EVzIYJur1N1tqNKEaiiNZvTRp%2BszpDLNd9i1YwzUVsnCIZfU231swmPfcDu8JVcJ9EQA%2BFDYGgN0uLGXxK0hhzqOx12RUZ74ls1%2BqHEh9U7E3iIuhVAeOaSNN8CmuptPr6wUMv7uTZsjAnbgJAiw%2F54PVRaaA%2FqRrDCOOje69%2BywIFkoA0z5yCM2ApD07J0cZRvGFnhWzTu4c3FzThIpwNtFONkTnTgTqdKOZAqgP3L5%2ByzUOxdlPnCtpp1BnczdGJwHASGMzrIP9qCJtM%2BMusVMgEXGOA%2BQnkvSj6qWqyO9HTbLaStiwwAJRsPOaYmSNVwGJb9ZS9%2FFpMNWdWRUalnV3vc6oGGnSP5F4ZSu2ak%2B2qEkuPFDK2FBA0bUQ7mjrv1KtpPcyxVNvqc019o7IvYSggXaBMGCrN%2FH7qwd%2BReJhXMEWRqGq8k0P%2BFTdqaHluU0nMG6pbN2T%2FsyhMHy9BpnetbLOLKKyvIG0u%2FckJW88sTcRruDmSo9PPbLygm0pv8fIiQnwLxpObCfGFy1uNLy8ugSUUVczjamEjySqYIYDzMu1mXAqE4MztSNiTq%2FHc86lMqkZdd8yH%2FMU0Y6YPDeT%2FY6PZJx%2FNQa%2BWvPBXjEmdvWBvrkgMK2gj8AGOqUBhqVavItSPIHEhVJBobiRMyMJGAZlWGKq2NY5TwR6hkCS%2B8sEtR6bn%2Fex526pe5rZLcRr6eeu3vHyqAlrH8GVxsZo8TKgbEDd6WMMfBR%2F3hWbh7VFZGQhqQAKW6xqMArhR5T3m4DZ2mMAtmTdBV8%2B0S0S%2Fa3BrL4i362Dh1vKACilbKdy8AtJ9LmeJ8mdF0qudA9HcNThp2KMUKBwMfRQbF8TmNeT&X-Amz-Signature=f6db306de960dd9bc82fc4c11c7eb803540f732e3cf786fca6e799595c1a6cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBUIRKJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBnk6%2F%2BTcal16Wd23veM3zOZvPYyGm9lsqtQ2oqrCRZ2AiEAq4L%2Bvm%2FfwUgds60NhantZJvwojQ8YXSLlWuBKVyxgzsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEepc3Q2FlOniLX%2B9yrcA6euIXt%2B5n6w6Fwg4mKcprw%2BNxUTFekVDKT18JkStrxu%2BjV2OyONjjKRI5h74xndyhAb174e1E47f8Sr4AWSMW6w%2BqU70bv2PzGhLe7mw2WMvs3d7hWn%2BEXNvrkypJVLGOG4LU8%2FoiUmlyncgU4Mnrx3IwmTA8v3xEEhCMZO9fScAz19G7yNbKduDvPD%2F4j%2BFC0gA5yL02WT76yRWqfXnhgZE%2FWnUj1eFvoefSobBvV3EfrVBJNF2ugTswgcwDuteNAUM00Zs%2FJTLjk84Q5NEirAeYOxbGLlvWdVrWWuIfsUh3Ih47G3ZsrRoIYKiuz9yMXJ3M2034h4Rz8JM1UH9OqqC%2F8a3am%2FV063CvzEDA%2B%2F3cSQ0gPnJD0%2FthH8fyIQoLcGj4J2rwZOFTEMr0ToMTHSzJFt27QUM9LrCP8etnAuVKlVk89RdGxL3vV1ZqpIHWUbrEsDh23m8IqA0Abgvsgi1RdwSxV%2FdTegK6ELwV%2BbbNZrRJwLO95T99hF0GwjShakZ20gB1WOk3E0s2favBXo2dDUJ4u%2BQCXwu%2BB9MqIf9iKi5M1oJKmujzpQHp4qlgEP6K1sZq2mVHx7%2F13VyOrng0SiBI2zrKMvkPWd0nLgIGmQmq%2FgAsr7WNZYMLqgj8AGOqUBFGRPZdnJAHnnqGhUIVy69EQdGiWNxb%2BzOx1sD18UPZ%2F0aB%2BFCUXAsPqHVfAtQ5vPEf77Yf6eqz3supq3SN4xqP3u%2BhT0xjcoOrOK7zHSXpIc1%2FpfuCF7SjyNpvBjDnSokpAfyIiipMbZiN%2ByS2uD0fyG50CTl2UH%2FaKuTB9Nz3AjWRbjCzWoM4wiB4a101mmFucRoWUT6MpIlJe76TIMA64ZyuBK&X-Amz-Signature=45bc182cea8dab902fffdb9099ae7cad014c3074f9954e0f2df41318316d22b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJQEWL7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCFvrpRz9S55R5eM%2FoThN4xjMBtBX6RRSOWyVicDlLXGAIhAIql7JUAFHz6zhmal4WjhEtiCSlokXz3rN2HzqkkOW34KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylAjm13ofUoDcqLOAq3AMmfXAYhe3mYIv%2FlHE0RqOB9TanpgU%2Fe73wD8F47wLZKL7hTp05c7Siv6ulSeQLz8oj7WzL03vck9RLD9HRK6rNycE%2Fe1utE4U1DO01sa31SoHpqEuUfEUchR1er0%2F4Q6AKKm5xlP%2Fd6m1WqNL9AJI96qU%2BX%2FwT849f4WlKaVdb%2F4IEC0ZKm8c%2Bcr9O%2BttOQhtL9x4ldLfpjVnhbyLBlb%2FvSpn%2BdCs0KSyXb85VF83x%2FPDl1SxEnsMtCnVUIdxzrSQyYHHaoNpIZI%2BztTwk6Vetv9O31G%2FSLRHyh%2BjJ3F0xQWJ8D%2BZBx5790bGbqp%2By%2F1LUuNsydmVDEf0ZZc6oeJ4LK8%2BSqAmNsDGsf9ueIPphW7TW8iAuEM5B4HKI1gRVWd28AzjSHefiHrhDt3i95cXEq81ru0bye5kgLD%2FTZVvdgNr3umvviXY3mB2x5NcufFg9vI84Y4TOepKIlRuS1m4xwpcrNS8fMkmwH%2FvKiY7Ya%2BTGQrZYgdEdHhcnZuypLrntA%2FDaoCmGsETWVb04J3vMJ4jK%2BOuuuw6bZ96%2Fbd3CUq0s7%2BHf1SNxQHQO8i3X3gPL5onDulWacu%2FbQ6ooWg%2FXl6epdGUFHifuj%2FyC9ASko6LuewKAGJGdkkLwrTCcoI%2FABjqkAVDH0W9HGyUXR%2BKhZ144s%2FUFm8GGhjKIqjd8e%2BGF3QaNyA6rDDiOZATa3YhTaeim%2BM9CTJVH4TvIwUD7HpK2XH5%2BBilJRvknpZUv6qEzJgOqP7QVkK0RUqepVSajNnT%2Fk%2F8gGrNYE7EwW0jN%2Bo%2BwqaNhBnOewMnW4C4owarSJ6qig3UqQxAGH8%2FwBXIh7olQyCf8Y%2Fzbd%2BLPDMbpkWDa44TLmZAm&X-Amz-Signature=c110f85b0c18e68856c61098574800b5c3c7a362a83eccbbee362c807d3ce76b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWP4BQEH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDA0qrg9y2Jrd2iV8Y%2BsxLJLh%2FDa8oamgpPmM2RURGDJAIgKueDkSSrU%2BXs9Tk6Yk%2B8YemrZUuTyjrOgxwLDWKKxVkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsQLNkm5lOZs1x3BSrcA2wOX05EVzIYJur1N1tqNKEaiiNZvTRp%2BszpDLNd9i1YwzUVsnCIZfU231swmPfcDu8JVcJ9EQA%2BFDYGgN0uLGXxK0hhzqOx12RUZ74ls1%2BqHEh9U7E3iIuhVAeOaSNN8CmuptPr6wUMv7uTZsjAnbgJAiw%2F54PVRaaA%2FqRrDCOOje69%2BywIFkoA0z5yCM2ApD07J0cZRvGFnhWzTu4c3FzThIpwNtFONkTnTgTqdKOZAqgP3L5%2ByzUOxdlPnCtpp1BnczdGJwHASGMzrIP9qCJtM%2BMusVMgEXGOA%2BQnkvSj6qWqyO9HTbLaStiwwAJRsPOaYmSNVwGJb9ZS9%2FFpMNWdWRUalnV3vc6oGGnSP5F4ZSu2ak%2B2qEkuPFDK2FBA0bUQ7mjrv1KtpPcyxVNvqc019o7IvYSggXaBMGCrN%2FH7qwd%2BReJhXMEWRqGq8k0P%2BFTdqaHluU0nMG6pbN2T%2FsyhMHy9BpnetbLOLKKyvIG0u%2FckJW88sTcRruDmSo9PPbLygm0pv8fIiQnwLxpObCfGFy1uNLy8ugSUUVczjamEjySqYIYDzMu1mXAqE4MztSNiTq%2FHc86lMqkZdd8yH%2FMU0Y6YPDeT%2FY6PZJx%2FNQa%2BWvPBXjEmdvWBvrkgMK2gj8AGOqUBhqVavItSPIHEhVJBobiRMyMJGAZlWGKq2NY5TwR6hkCS%2B8sEtR6bn%2Fex526pe5rZLcRr6eeu3vHyqAlrH8GVxsZo8TKgbEDd6WMMfBR%2F3hWbh7VFZGQhqQAKW6xqMArhR5T3m4DZ2mMAtmTdBV8%2B0S0S%2Fa3BrL4i362Dh1vKACilbKdy8AtJ9LmeJ8mdF0qudA9HcNThp2KMUKBwMfRQbF8TmNeT&X-Amz-Signature=acee84520a9fe0aa143b4cd7872c60cc756cf7ee99637bc66283bc271690373f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
