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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JSGPLI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJVotC4BqRoIzNu0MCGozUCwLYSPMePlvHZWsNYwGdqAiAdxBpxZ9RkI%2Fiv8WJexY1GHZ3JJ8634lKSsFszWciYEyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BZ4yejV3N2UlhmJ6KtwDDK2SS3yq9%2F7AfTQ%2F3ywy8y1kB4UlnkrTp%2FOFWUUcGL22wM4j0siyEYwHI9qJkfViTZlci2dal1o15gsP3MfT5fgGykhlPHzy2%2BiMDeFZRgPx%2F44zR3mZFag%2BhaoZ6h5XDTv%2FoXLjFQ4JYoG2AWMsJymbB9TuzMPqVbt4hhOxSL8cYoLtzPZN9gXmA8WtPOQ5Z5yuU702FDp%2FUKUwChPWmiNscI%2BJEi5P2ZCrsc8mQoGdy1Di2givmoq2M32NJa5BKgAPskvGgpxVccMTuWS9qiLxar4%2B7B00M8btmif4f7%2F6CzzZ6sMhNs0gS7xnAVmQP2uw6m2xrToddW7kLocdbu5kWK9VG4%2F2SY5AtqS1nJ1%2FXUQBs0Lpc3D1V6HcY5zrMYmBDG72z2SmRLO4r91KdLx2fqtUIy5bzbZ8sr5%2FkXbfxfxjQ1mh%2FCdbtmvYnn0mSnB3tjvh0lcMjqD9%2FnDAvjBkio%2BpO43iF4j3Szf5UOqcHKteijY3Kk7z42iZe1ncs3mZN2sN37oAvQcHysZncTaZzhrRjisVRWjx2llt%2FY8znq7H4urBuDWUApWd5xocnCpH9FfZY0mc54zzYsepRH9tFW8HWvMWmqPuXTCpoPPSW%2F1oxQtsi7dOdEswudmMwgY6pgHUNtFcMhMMxRPErZ56rsPl%2F5a1KBg8QfeUKxbrexBbtQzq21EUXzzC4aiJd4lZQ64heeKCCTkfqr9JqOQCBVVCqeXdyKVMm%2BXlfT%2FUMWAUSencmI7T40T%2FGKSlucxiZUGJh0HkuiF4nuhfxT81%2F7plPjELmdqSn7un4NAMHR3JcFi4em49BxkZv%2Fv%2Bs0DRBO4GdIRpVqYxUQAhvPtKmIXzY62WvgVQ&X-Amz-Signature=f93ecd19d2b0f7dde89573b481480c7e77b7e0cbdf6711f77818a5d3fafdc784&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JSGPLI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJVotC4BqRoIzNu0MCGozUCwLYSPMePlvHZWsNYwGdqAiAdxBpxZ9RkI%2Fiv8WJexY1GHZ3JJ8634lKSsFszWciYEyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BZ4yejV3N2UlhmJ6KtwDDK2SS3yq9%2F7AfTQ%2F3ywy8y1kB4UlnkrTp%2FOFWUUcGL22wM4j0siyEYwHI9qJkfViTZlci2dal1o15gsP3MfT5fgGykhlPHzy2%2BiMDeFZRgPx%2F44zR3mZFag%2BhaoZ6h5XDTv%2FoXLjFQ4JYoG2AWMsJymbB9TuzMPqVbt4hhOxSL8cYoLtzPZN9gXmA8WtPOQ5Z5yuU702FDp%2FUKUwChPWmiNscI%2BJEi5P2ZCrsc8mQoGdy1Di2givmoq2M32NJa5BKgAPskvGgpxVccMTuWS9qiLxar4%2B7B00M8btmif4f7%2F6CzzZ6sMhNs0gS7xnAVmQP2uw6m2xrToddW7kLocdbu5kWK9VG4%2F2SY5AtqS1nJ1%2FXUQBs0Lpc3D1V6HcY5zrMYmBDG72z2SmRLO4r91KdLx2fqtUIy5bzbZ8sr5%2FkXbfxfxjQ1mh%2FCdbtmvYnn0mSnB3tjvh0lcMjqD9%2FnDAvjBkio%2BpO43iF4j3Szf5UOqcHKteijY3Kk7z42iZe1ncs3mZN2sN37oAvQcHysZncTaZzhrRjisVRWjx2llt%2FY8znq7H4urBuDWUApWd5xocnCpH9FfZY0mc54zzYsepRH9tFW8HWvMWmqPuXTCpoPPSW%2F1oxQtsi7dOdEswudmMwgY6pgHUNtFcMhMMxRPErZ56rsPl%2F5a1KBg8QfeUKxbrexBbtQzq21EUXzzC4aiJd4lZQ64heeKCCTkfqr9JqOQCBVVCqeXdyKVMm%2BXlfT%2FUMWAUSencmI7T40T%2FGKSlucxiZUGJh0HkuiF4nuhfxT81%2F7plPjELmdqSn7un4NAMHR3JcFi4em49BxkZv%2Fv%2Bs0DRBO4GdIRpVqYxUQAhvPtKmIXzY62WvgVQ&X-Amz-Signature=99f1af6908f3012d857efd3df498af31c61253031e50f779b9a1b515a99fe606&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JSGPLI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJVotC4BqRoIzNu0MCGozUCwLYSPMePlvHZWsNYwGdqAiAdxBpxZ9RkI%2Fiv8WJexY1GHZ3JJ8634lKSsFszWciYEyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BZ4yejV3N2UlhmJ6KtwDDK2SS3yq9%2F7AfTQ%2F3ywy8y1kB4UlnkrTp%2FOFWUUcGL22wM4j0siyEYwHI9qJkfViTZlci2dal1o15gsP3MfT5fgGykhlPHzy2%2BiMDeFZRgPx%2F44zR3mZFag%2BhaoZ6h5XDTv%2FoXLjFQ4JYoG2AWMsJymbB9TuzMPqVbt4hhOxSL8cYoLtzPZN9gXmA8WtPOQ5Z5yuU702FDp%2FUKUwChPWmiNscI%2BJEi5P2ZCrsc8mQoGdy1Di2givmoq2M32NJa5BKgAPskvGgpxVccMTuWS9qiLxar4%2B7B00M8btmif4f7%2F6CzzZ6sMhNs0gS7xnAVmQP2uw6m2xrToddW7kLocdbu5kWK9VG4%2F2SY5AtqS1nJ1%2FXUQBs0Lpc3D1V6HcY5zrMYmBDG72z2SmRLO4r91KdLx2fqtUIy5bzbZ8sr5%2FkXbfxfxjQ1mh%2FCdbtmvYnn0mSnB3tjvh0lcMjqD9%2FnDAvjBkio%2BpO43iF4j3Szf5UOqcHKteijY3Kk7z42iZe1ncs3mZN2sN37oAvQcHysZncTaZzhrRjisVRWjx2llt%2FY8znq7H4urBuDWUApWd5xocnCpH9FfZY0mc54zzYsepRH9tFW8HWvMWmqPuXTCpoPPSW%2F1oxQtsi7dOdEswudmMwgY6pgHUNtFcMhMMxRPErZ56rsPl%2F5a1KBg8QfeUKxbrexBbtQzq21EUXzzC4aiJd4lZQ64heeKCCTkfqr9JqOQCBVVCqeXdyKVMm%2BXlfT%2FUMWAUSencmI7T40T%2FGKSlucxiZUGJh0HkuiF4nuhfxT81%2F7plPjELmdqSn7un4NAMHR3JcFi4em49BxkZv%2Fv%2Bs0DRBO4GdIRpVqYxUQAhvPtKmIXzY62WvgVQ&X-Amz-Signature=77e3aebce63636cf14b1d4fcee968f02aa9b20ff2dbde0afb671a542676f390d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVVFM3Z%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHccR3kee34BUh%2Blvuvfdq5zB0IvKhupTqHVBzStpgO%2FAiAFnerbq64mPAD7VyYjj9bZ3VYtZPafdpxgaannUKFMSir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM7Y8vR%2FVhsY6a2P7EKtwDer9YHAoovwl13j37HARIcvDN0spoaU8e0M4i6sbDlGusT22YvKEdhzezj%2FhwGP605Be1Zdp8kb3AD%2FRQaC184oFLCKXb8ZCAia1sZmkPc0bcRtq4GfRwgl7PT8mmIYmrkI7hW1YR26knS7YlcPjOGXSrOhSolfZuXT%2FEl6tx1wljBQ68Xu3d2ypTocSCo1HdJJ3ebLhcg3weSFR1OaTUPuKZ243Po4v5rvwvbyY5yuRTQDz9M0aqgI%2FfvKSHBnrb6DRf3rLcedQvaq0a2YN97Yi3d9TxGRBCyP9gUEz3k8IDiBeJ%2BObzAri6yl1c5YVzZ6paN6OIt3%2Bp8nLZQdzqNZ3Gnx51UbEuqKRFai8YBP%2BxrXRL3ny9nmSVjMDVF3gXupumONgaeN8hnftHjUuq37%2B7asr0tCDKZv1%2FJ05K4ZR1aTGvMnNw3zMj5HMUCwZpxD8UMxYhUtTCjIWvHxNEI%2BAmEwGG8UPVLAPpkMb03lPJygLRZmD1fUGROFF7vkk0SthTFZg9QCpav2ql8A%2B1q0hdXls7HWMZDbs4qwduuaW3Ie0Yvyo81QlF2d%2FMJqsiswH7YH7YnLumXkB4e7YYjtD%2FEK9PoO3RGFdvCEoOWchX4BS5UYaF863xEKwwgdeMwgY6pgGNJ%2B1l2%2BkHBMBauE5sG3hEynNwHF4uLtQFpk4VGlbkdFa39ZwObGPjMVqi%2FDAvjbVATyRmxEZ9t2KmmDM%2Bbjl6gcE%2F4dbcnHBQiJU4ap7vDdXILWgKlpUEzIC8b4r8Mn52qkM3g2X2gb3M9s16%2Fk6BAaltjXsSlx5hqsPTy73sBtsixa%2BFfMj07gqx53280IZmHPaGQSerdSrINTtvLv28Vm2rEX05&X-Amz-Signature=5f1cb3f62096a119528257e85da4c3faa5005a4cb0f111613ac818c53f76edc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQQOXSK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerd09GdRhC1W1gBBKA7u2lxFIgtnBLUKE7zreJjXw9gIhAIDvsxn%2BT9UOsVBV8zqdl9k3hgOgI5r6BbJwTYUW%2FYGuKv8DCGMQABoMNjM3NDIzMTgzODA1IgxyBN%2Fms%2F%2BK51ohR3gq3AMDUdh2hT%2BfWcF3HMTblTVRnBuwlstXe0XPpnvkP5VKu%2B1seIGVWKYNGfpWIX4QJ7UvgdkuwYiRYhz7CH8%2Bi%2Bt2wwA1tLdYpq0XQCFH%2BcC9N8FWlNxQEg44nv2WZC%2FDdix%2BMcpUKDFdKYp8ubt4zN7%2FsAdDc31fCWgX5RMZ2gAQzObxVDgOZMN9h5Q3LQNIsHdhPRGqiWi8nTq9obrV4EFSGczG%2BGAyLkxBBx1mTpCvH8IzrUbjdjsStngxlwWs20wWPTZhc0ilNokHjkM7ZH95mKae%2BdMpvieCu7aFA%2BnLAQsLeGNvXCGmIU965P2yMDXKJX3SkjnE6OMyB4HOBg24Oadiuu5R6V41AtcVgVs0H8JqZpB11BuATUKUaff0BDnM%2BeurhqMpfTAstGicJuFzk%2FfXvQBBNBkBb%2Fri8ElXuNxVj9tL3BoeXPdcS%2F%2B0GV6sdXHl0Efh4mmXcLRuZaYVgKDG91vkp2aefzxMH2mDpuwdAN1M4zUDebxKCRd5Fae8yYb3ShHSBprVG%2FUFJG9yaIh6Y1iXwosFrMvixjuxK9zkI3btZq5Y%2FAWZeI%2FTkYpcHVwufEgCIOPCjjDxia3RkmO7yRBmGmlRMv0Jc8d0C3%2Bck3aXCP8Zdj0r6TDK1ozCBjqkAZ3vE%2BNUAaOVqcifXvqE8pCvpd1od0hxvCarl%2Fo6hsZ6cvseEsow%2FNwvvSx9T4gR4t2qVujaXqYimyLzZeOlPvY9PfcDYR67Thauf7DsVZfKZfDfRKcZmiXbrl1hWTj%2FWHE4NLefLZrl5hhz%2BGVoms%2BfQK%2FU%2B8%2BseIMQFuIdikQL0HGOaumVHjCJPMD6CP2LHQRXcKXki1jlESVbt8hdtwChbIRR&X-Amz-Signature=947ff3981a9ed4e8279ff62b8e0e74620b48dc464d433c24085c309c95b48590&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JSGPLI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJVotC4BqRoIzNu0MCGozUCwLYSPMePlvHZWsNYwGdqAiAdxBpxZ9RkI%2Fiv8WJexY1GHZ3JJ8634lKSsFszWciYEyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BZ4yejV3N2UlhmJ6KtwDDK2SS3yq9%2F7AfTQ%2F3ywy8y1kB4UlnkrTp%2FOFWUUcGL22wM4j0siyEYwHI9qJkfViTZlci2dal1o15gsP3MfT5fgGykhlPHzy2%2BiMDeFZRgPx%2F44zR3mZFag%2BhaoZ6h5XDTv%2FoXLjFQ4JYoG2AWMsJymbB9TuzMPqVbt4hhOxSL8cYoLtzPZN9gXmA8WtPOQ5Z5yuU702FDp%2FUKUwChPWmiNscI%2BJEi5P2ZCrsc8mQoGdy1Di2givmoq2M32NJa5BKgAPskvGgpxVccMTuWS9qiLxar4%2B7B00M8btmif4f7%2F6CzzZ6sMhNs0gS7xnAVmQP2uw6m2xrToddW7kLocdbu5kWK9VG4%2F2SY5AtqS1nJ1%2FXUQBs0Lpc3D1V6HcY5zrMYmBDG72z2SmRLO4r91KdLx2fqtUIy5bzbZ8sr5%2FkXbfxfxjQ1mh%2FCdbtmvYnn0mSnB3tjvh0lcMjqD9%2FnDAvjBkio%2BpO43iF4j3Szf5UOqcHKteijY3Kk7z42iZe1ncs3mZN2sN37oAvQcHysZncTaZzhrRjisVRWjx2llt%2FY8znq7H4urBuDWUApWd5xocnCpH9FfZY0mc54zzYsepRH9tFW8HWvMWmqPuXTCpoPPSW%2F1oxQtsi7dOdEswudmMwgY6pgHUNtFcMhMMxRPErZ56rsPl%2F5a1KBg8QfeUKxbrexBbtQzq21EUXzzC4aiJd4lZQ64heeKCCTkfqr9JqOQCBVVCqeXdyKVMm%2BXlfT%2FUMWAUSencmI7T40T%2FGKSlucxiZUGJh0HkuiF4nuhfxT81%2F7plPjELmdqSn7un4NAMHR3JcFi4em49BxkZv%2Fv%2Bs0DRBO4GdIRpVqYxUQAhvPtKmIXzY62WvgVQ&X-Amz-Signature=9d75d420d1d925e318c453f1a5d8df7a3c18e8d4261677effeeb955c92039615&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
