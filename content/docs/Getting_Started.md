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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3AY2WB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnuoHAooeRPLl25JKizf5ChqFFSMp8w46JSSB%2FOge9UAiBf4PmnnC%2FUhgUlTyyXINlPLAVJjj4vZH0TjbZD2rBneSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMR%2BBLTKHMZKiB61LHKtwDqXe0%2ByoP9A2PmU8nRXcIq0g7gFaMYwIJ1uYkvgUXrjEt2VmDJDq%2FlMAzYU6Iwio6ZAHb3SQt2Sg7JxQppzkrbGWFBv6EI2YoR7QObA02BG5oKawMbNL1tfLIRxR%2BIl4WB0I9S9JhR%2BiziQpLUiBPzitnJNiTeNyDd3733H2sYD2baSpkf3c31Xm7kapB%2FNKBKTLSBhNR4RTQS4I1zU%2Fn29zKEGTLYwQf%2Bfy2FHFSlwWGBs0DE%2BgKBVeJBRl1bc5vayaHzpXP%2F6s9wK5manxPstkCyjz4rJqWSBm8c696L7ZaTJ63US%2BJa%2FIA24XEkh3zJEcNhB%2FjnQXuxZxhqtY5KXI4oISWpK02vYRbj%2BEqlGSF%2BDiDP8sueAjAanl13uXouH9%2BJ9ptBhGcTqzyWLVp7QT03VhsN3vryh7w%2FneUN%2BVcJxPpUClEhR73VuhLdJipZOWvt1NlNoGQcccUt5YcGankhDEUmY%2Bl8IHZ3xh3CZ37kcMCuKerhBWZ05nCM6xiLWqUulA6JZfxADb2mJPVsD6ecFIoEveE3eHCAb2MR8lx1%2FoBcj0qFzdL%2Ba%2F5r1VrI6zk%2Fq88plUCyNsobLOn1x6bngq27BOc3ziDMd4yDbbKg0fiYkWRNVbxJ9cwnMWLvwY6pgGpFDWXCo%2FL4lG0M0%2BMOP3zoc%2BR7gM5s5REMLAi%2BRu6J4BGBpUZkng9Pewv43jzOyoeKfPFGaTm9hes0wQw4naSOFTU%2FUjobb6lTL%2BWvPZVtbzQJ0Z50mspcd6%2FQI4RsPNWDSiZ2fnpZh4jG%2BKcQ1gMsfneL7F7OvOwLb5w6Sb0gCX8nQNA08oR%2FtQ5MO%2BxC5n75jt8Agodez7jeH2p4ayMC%2BaPjHZy&X-Amz-Signature=77115fbb646f1e3f1042b2398a0c74eff27bd0d117b39f8bc227481731d63d33&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3AY2WB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnuoHAooeRPLl25JKizf5ChqFFSMp8w46JSSB%2FOge9UAiBf4PmnnC%2FUhgUlTyyXINlPLAVJjj4vZH0TjbZD2rBneSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMR%2BBLTKHMZKiB61LHKtwDqXe0%2ByoP9A2PmU8nRXcIq0g7gFaMYwIJ1uYkvgUXrjEt2VmDJDq%2FlMAzYU6Iwio6ZAHb3SQt2Sg7JxQppzkrbGWFBv6EI2YoR7QObA02BG5oKawMbNL1tfLIRxR%2BIl4WB0I9S9JhR%2BiziQpLUiBPzitnJNiTeNyDd3733H2sYD2baSpkf3c31Xm7kapB%2FNKBKTLSBhNR4RTQS4I1zU%2Fn29zKEGTLYwQf%2Bfy2FHFSlwWGBs0DE%2BgKBVeJBRl1bc5vayaHzpXP%2F6s9wK5manxPstkCyjz4rJqWSBm8c696L7ZaTJ63US%2BJa%2FIA24XEkh3zJEcNhB%2FjnQXuxZxhqtY5KXI4oISWpK02vYRbj%2BEqlGSF%2BDiDP8sueAjAanl13uXouH9%2BJ9ptBhGcTqzyWLVp7QT03VhsN3vryh7w%2FneUN%2BVcJxPpUClEhR73VuhLdJipZOWvt1NlNoGQcccUt5YcGankhDEUmY%2Bl8IHZ3xh3CZ37kcMCuKerhBWZ05nCM6xiLWqUulA6JZfxADb2mJPVsD6ecFIoEveE3eHCAb2MR8lx1%2FoBcj0qFzdL%2Ba%2F5r1VrI6zk%2Fq88plUCyNsobLOn1x6bngq27BOc3ziDMd4yDbbKg0fiYkWRNVbxJ9cwnMWLvwY6pgGpFDWXCo%2FL4lG0M0%2BMOP3zoc%2BR7gM5s5REMLAi%2BRu6J4BGBpUZkng9Pewv43jzOyoeKfPFGaTm9hes0wQw4naSOFTU%2FUjobb6lTL%2BWvPZVtbzQJ0Z50mspcd6%2FQI4RsPNWDSiZ2fnpZh4jG%2BKcQ1gMsfneL7F7OvOwLb5w6Sb0gCX8nQNA08oR%2FtQ5MO%2BxC5n75jt8Agodez7jeH2p4ayMC%2BaPjHZy&X-Amz-Signature=8c3d9b6f77c927f13618944858c2d3fbd7078b16b70e58801d08c9a12f8d2647&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEKIQXH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4GtHnEGCF7tAZqN%2BpNQNnwmeun%2B0VZd9NbcBiTXaOdwIgBleSXjJZyUBAX%2F%2B8TNRu%2FOV8kgruUcXVA7QXOuQzwMkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDCjapvHn%2FEstChLEeSrcA6wXFoKtDnO3shLq%2BprWmm2%2BTCGy7aRhNXNs3AdsAkyYBJAyeXJlGGensu71%2F%2F%2BBornkJVx%2FcAocdPm7HJ0zp5VtycxJwy1bQ5t8yvjex6xoACvZdIhYaD2egaGI9IeXDwzHmiidCW9VHRr%2BlKux8dfNxLMaICUh4GF%2BB1FbJlaCmyaC%2BI65m9pIGy8dXwRraoEXO%2FZpzgMToXkvfGa5tSQqrdj3jeoqAcQ3K%2Fp%2BG1vqtnEtTF36siOTX0dC1C9Ae7QrWeDCHqJsdD9uye3qi5idRYVvdlFCTn2iG6g0QqwA%2BRPtcIPRQBQ1CJXJ0pdy6j5Xu8jgYVwLrxJxQwfxumipIh9or1%2BqRM9XqVPsEp%2BtqUGUvd3KrUnfIR5mcB4Tl6QBTB9xN509H%2BbXen7inRH4wbL4fwevL%2BDARdMy6zb6z2HhmMjzE3yt8ee7F%2FSLhHD67uAnV0ARA7QlL39bVlCAM4Cq%2FRJ761wtVjQpPwONxxLcoBe3hen7wWHE%2Bp30cyhDQ4atjGkckSNpaX1TvOReJ%2F2Ty5kye5NirEySQC2AVgR5%2Flg9DB8cGUdfwF%2BWy8B%2BNetOoLXdXy4FkHgJdI%2Fanr2bNddtd5umlPEDR7uYDCXnIACBvd2LQdfAMPDEi78GOqUBiiwWSfiDa0KSn9AqRA7T6B0a2hJlGSYgDA3%2BkR9hbeXiKZCbqZpdyGnDB5dvWxNpTE07%2FZ3xEIphspQaQEsrTEUiBH7i6IM8Z3swTTFVRy8X4%2FnxW6uyzmflQ5Bc2TvYwuKSsDYI6kQHGn00%2BwTkmXUIPpW20lOFHV9gDtF5Fd2wVYKvKEBSCKO08dQRVuA16qbI3%2BSq0xggy8EFjqHqw2P6A7yD&X-Amz-Signature=3e3c7f0bdd71de2d20ffd785e7fadbc270140ac963c04ac4114a94a7667ab303&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZOG7AH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH2kP9iuDlHgPbcAzty%2B19JzJ9%2FpO5LFoUAibF6IRasoCIQDxgfZBFcOrIv7GOXfTWEAmRtUua%2FnNn85I5MfKm%2FfK5Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMIOYBxOsBzYG8l3iwKtwD74oOq1bXc15%2BnrxLkNbU37U8sO%2FPe14PDrAmZmDVqKL6mZJED5H0An5%2FKj7EYtb5j0FHR%2Fj0H%2BUHzUu5nbVBxg7ghHeuqIi7QJkDD8DCGTUI6SUdrZnuAQpwI3pPzpZ7w2taRx%2BuVNCSBRfdoee29QG4pM66ErhD8tttSx0ksEw1N0yfrs2OnFYONdKxpMvIw%2BLkFL5rPVPons%2B5vwJolhdc4%2FoXYyMAKW%2FF5v3RUSDhJiY8iXygQXc%2BpoUr6hKa9DJFUdMkJNhoxImMr6l%2BtQlj8EXrY4l2r%2BlKtGtqhEqQGsH6l6k%2FPSKfymP5GhiyJZCTIrXF6yfwM2j7U%2F0vhqIEitttuMhZYonMkTqDPuz4eL1IHs%2BTU9XAoBiucoA7eZf5TnLYyAQJLxOK7gwBqzEysTbGJZwrxdWEE6G%2Fy76TFLhD2znOijpNISNghtWk%2FlyyjEl%2BrcK1TLyyRDQOCdUc9F7fcM1Pldpes7LPBDGnS7HR4Muw9x3NBsHtb2sCeoGHwF6qONle6fecEwiQ3IxRjGuAap3IRAy32Ydps1En4G6FlPTvyQPpkGlGjlZ%2BsvLyhVUvG3G3yLhHwH7RWtD2A1fr5cbdTNTpNWPMyqqWJ18o5MkbMYaQXTkwgsWLvwY6pgHS95EsvyN4dlIQ%2FdkP38%2FIW%2BZ8uPn4BPzcT9afR%2FYZsBeQLk1UK3K6u63ZdvrugHBfnCP1fT7PSDyVZjPR9NMa4PoG2pHoZU%2Fknrky%2By59ddAT1pC%2Bl6hO0N2oeenx0RY0VGARK2A2f7yrYJxUKCDSo455VvKoiV8dkZ%2FDrW%2BMTzDEvvEju21CLp%2FHmOYmL4J2keWbsruLEfXi6lzzKoTKJfW1L6MQ&X-Amz-Signature=89e1a1b1cba85cd08f7e7db0935d9a6c4a70e37e24b398d0cd89adba66cbfde3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3AY2WB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnuoHAooeRPLl25JKizf5ChqFFSMp8w46JSSB%2FOge9UAiBf4PmnnC%2FUhgUlTyyXINlPLAVJjj4vZH0TjbZD2rBneSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMR%2BBLTKHMZKiB61LHKtwDqXe0%2ByoP9A2PmU8nRXcIq0g7gFaMYwIJ1uYkvgUXrjEt2VmDJDq%2FlMAzYU6Iwio6ZAHb3SQt2Sg7JxQppzkrbGWFBv6EI2YoR7QObA02BG5oKawMbNL1tfLIRxR%2BIl4WB0I9S9JhR%2BiziQpLUiBPzitnJNiTeNyDd3733H2sYD2baSpkf3c31Xm7kapB%2FNKBKTLSBhNR4RTQS4I1zU%2Fn29zKEGTLYwQf%2Bfy2FHFSlwWGBs0DE%2BgKBVeJBRl1bc5vayaHzpXP%2F6s9wK5manxPstkCyjz4rJqWSBm8c696L7ZaTJ63US%2BJa%2FIA24XEkh3zJEcNhB%2FjnQXuxZxhqtY5KXI4oISWpK02vYRbj%2BEqlGSF%2BDiDP8sueAjAanl13uXouH9%2BJ9ptBhGcTqzyWLVp7QT03VhsN3vryh7w%2FneUN%2BVcJxPpUClEhR73VuhLdJipZOWvt1NlNoGQcccUt5YcGankhDEUmY%2Bl8IHZ3xh3CZ37kcMCuKerhBWZ05nCM6xiLWqUulA6JZfxADb2mJPVsD6ecFIoEveE3eHCAb2MR8lx1%2FoBcj0qFzdL%2Ba%2F5r1VrI6zk%2Fq88plUCyNsobLOn1x6bngq27BOc3ziDMd4yDbbKg0fiYkWRNVbxJ9cwnMWLvwY6pgGpFDWXCo%2FL4lG0M0%2BMOP3zoc%2BR7gM5s5REMLAi%2BRu6J4BGBpUZkng9Pewv43jzOyoeKfPFGaTm9hes0wQw4naSOFTU%2FUjobb6lTL%2BWvPZVtbzQJ0Z50mspcd6%2FQI4RsPNWDSiZ2fnpZh4jG%2BKcQ1gMsfneL7F7OvOwLb5w6Sb0gCX8nQNA08oR%2FtQ5MO%2BxC5n75jt8Agodez7jeH2p4ayMC%2BaPjHZy&X-Amz-Signature=96e4cfd1684233072a27c43065811a81da7e1330f7995c0a3e6746a0f5a5f6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
