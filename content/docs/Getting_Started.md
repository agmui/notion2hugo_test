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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLJSU5G%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDGftMUUpCvwc6N%2BGSJ%2F%2Fwqv8%2By%2BjpN9Wlz%2FNloCWMbAiEAp7%2Ft2J209fTLfI%2Fi4vwdFEzFrMLyPSe7Y%2BD2npD1WM4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ2WNdKkgx5atTpuCrcAwYwXFxJTCksFJqcZ00kNVtES%2BEPgX9KmN1acXw3mGjJpVYowntrguQ2FBB%2BArPvDEn307olCdOgCKMMzoUKU24Wxr7eMHA6YXoCkrqfF1Mi%2FGerLfa8Jw2YrOFYh4CHVHCzQjVE%2FuTKysSzEAo4zLvRsspzmZPRig8IHmsiQffw2uVEyCgxDIw4%2B10ZlW2V4SPvzkmOxBd1PVfDucgcoHzxZGRxchigHa3OZdrY82jrEaBhSTOl%2FEAJKlrqUGZYu7sRf7WNJbBoxr1nu9I8RTtTPFly2fdsx%2FM%2FmMb28%2F1GXJJeg6bGEh%2Fns6LTUeUp0EC%2BGxjODn%2FynKh8Zjit3js7c5r%2BDtf1kvc2iZK1%2BHJoRROjODVc3uZbIb8%2Bv3lVHpmztqN1BtVQvKaaarpdQYoOanx8wEsfya%2Bt325nGWcex1E1LB%2B71t9Q7rpc%2B3qR6QECxFrqQCr3xOarVsui9YCH4gpFj6F%2FVAugu49qjBugfUcXAUnUBXdWQIO6F6YRxFtz0rydgdd%2Fgxjp03EoMOfkxDa10oF6RWpAjjWCR4IZ6%2F6WE7%2BTdGfoAMAzJJaMSoRb2yX3sgR9MSI5cutc6wyvEegc3Ej9CdOJbaWAmhim7KxP8xq4fFg6whchMOjEnr4GOqUBp8DZVi2mNyZmWhwH8AAnRKuHjawo9xEtmo8a4F7SAG7h54GaiKMoi6BKIThfOojj7df5A%2Ft9nC3B%2FjyTuqgnF48%2Ft0zoNwUrPE%2F8nmwmWtLj8RuPYW2UH84Md0Mg5DFY3fKlGEADbz77wawc%2FWGVp25CobIX%2FAO9Tw5xglGhrWdZDNWTgIoyNddnMhHBAsWwXSAbsDg32x6yoLbr%2F9bEuWQMVGJl&X-Amz-Signature=62323e62b7818f046936bde960925e3f76a530d973d345c44adc982dce5ac49c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLJSU5G%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDGftMUUpCvwc6N%2BGSJ%2F%2Fwqv8%2By%2BjpN9Wlz%2FNloCWMbAiEAp7%2Ft2J209fTLfI%2Fi4vwdFEzFrMLyPSe7Y%2BD2npD1WM4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ2WNdKkgx5atTpuCrcAwYwXFxJTCksFJqcZ00kNVtES%2BEPgX9KmN1acXw3mGjJpVYowntrguQ2FBB%2BArPvDEn307olCdOgCKMMzoUKU24Wxr7eMHA6YXoCkrqfF1Mi%2FGerLfa8Jw2YrOFYh4CHVHCzQjVE%2FuTKysSzEAo4zLvRsspzmZPRig8IHmsiQffw2uVEyCgxDIw4%2B10ZlW2V4SPvzkmOxBd1PVfDucgcoHzxZGRxchigHa3OZdrY82jrEaBhSTOl%2FEAJKlrqUGZYu7sRf7WNJbBoxr1nu9I8RTtTPFly2fdsx%2FM%2FmMb28%2F1GXJJeg6bGEh%2Fns6LTUeUp0EC%2BGxjODn%2FynKh8Zjit3js7c5r%2BDtf1kvc2iZK1%2BHJoRROjODVc3uZbIb8%2Bv3lVHpmztqN1BtVQvKaaarpdQYoOanx8wEsfya%2Bt325nGWcex1E1LB%2B71t9Q7rpc%2B3qR6QECxFrqQCr3xOarVsui9YCH4gpFj6F%2FVAugu49qjBugfUcXAUnUBXdWQIO6F6YRxFtz0rydgdd%2Fgxjp03EoMOfkxDa10oF6RWpAjjWCR4IZ6%2F6WE7%2BTdGfoAMAzJJaMSoRb2yX3sgR9MSI5cutc6wyvEegc3Ej9CdOJbaWAmhim7KxP8xq4fFg6whchMOjEnr4GOqUBp8DZVi2mNyZmWhwH8AAnRKuHjawo9xEtmo8a4F7SAG7h54GaiKMoi6BKIThfOojj7df5A%2Ft9nC3B%2FjyTuqgnF48%2Ft0zoNwUrPE%2F8nmwmWtLj8RuPYW2UH84Md0Mg5DFY3fKlGEADbz77wawc%2FWGVp25CobIX%2FAO9Tw5xglGhrWdZDNWTgIoyNddnMhHBAsWwXSAbsDg32x6yoLbr%2F9bEuWQMVGJl&X-Amz-Signature=09f88d273280e22909fbfd98e4329270e18f774f294f126010e075ba93f4e9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=05ba191a8c848275e6a970bc29ce6206714404b0ae58dd6432c58dfff3e89907&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXJO3DN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcii%2BezjSygTlcfv%2BC7NbsSrqDRVTjrh2%2BIF%2F9VYctEAiBuYhZ1jCE3dKrrkWrwVx%2F5v4Qa2BlHcBoPDxss6%2FM1pCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyobortmglhHr3j7pKtwDdIVecfxGAped6jqxCk54fv%2B03H295HOIHJypz8g3k9%2BhL5sQVEUffGBLCT%2Bdz%2FgaG4Mkylr6zOkqnS92OB3mcogMZ3doQDgL7ZHEA3AX4xL8rctHLef%2BqHajZP50GcPzg3bMnjMT82aGDcsjUfVzlI%2BSt4JN7vLb3E1B9Wxfs87MqjS81ho512OQLgkTdSZaVX0%2FqB8g9I0cGE4QaJVaztDzIFjnTqYfqcpMz3OOBovmip3lDDU5LjX73aZBYR6ZmueOlte5s1rhb5re%2B9rK877ory8PeMES7C3bJ4BVKuuxb5rHBIgUxMXloDDiViN4pz8qTwh46hwfsFdL6ooW41XQ7wvm8YW808Hsm8MB%2B38zT8muNN%2BQ7%2Fh8pf1hc6unDNAQvkK%2Fu9qemGWThTvAdmqWC5w0grizvJVSMeZgzEJJfcVMGSy6seexwO%2FGor0U%2FnkDF8I3sJi2x6r6NRToVOVL%2B7tmEoo8l8l31TiFbkpvb0IGpE6Rz9tXajy9p8rVVkAskGETQkftIChY2IgORdjt2rcOQ0wip18bEP9zk%2BrWsc7PcCrdHUV92jjQ1Rwwwud5DdfHyscg4uFeq%2FXbbJgYZGSx1A2j5oJC0RHCi1HSKwtQgaqhxbMWYtkwxcOevgY6pgFvP1yjwKFuPtEHZkwyURc0pOYmS7unKnP9OsfnePmEILZSeSvtdlN3lVich1BGC%2BM48wb4ShGjJqnoY1Gj1IxsYbcifK1ggTNfwYHa%2Fty91aR0oTvZSurB2V2B%2FQAFuqFkq3gmwji4nXnZtVpKBaxKSKryxyCkIliS4BXsBPFrE1lmcjriscOauil1ZcKu66od9ONBjzt6xgBBUeFKUVFq7j8WKNK6&X-Amz-Signature=97f9e8757b3c0fa4035734f6aeb4813bba377205961a4c00fd9df1066e317bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLJSU5G%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDGftMUUpCvwc6N%2BGSJ%2F%2Fwqv8%2By%2BjpN9Wlz%2FNloCWMbAiEAp7%2Ft2J209fTLfI%2Fi4vwdFEzFrMLyPSe7Y%2BD2npD1WM4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ2WNdKkgx5atTpuCrcAwYwXFxJTCksFJqcZ00kNVtES%2BEPgX9KmN1acXw3mGjJpVYowntrguQ2FBB%2BArPvDEn307olCdOgCKMMzoUKU24Wxr7eMHA6YXoCkrqfF1Mi%2FGerLfa8Jw2YrOFYh4CHVHCzQjVE%2FuTKysSzEAo4zLvRsspzmZPRig8IHmsiQffw2uVEyCgxDIw4%2B10ZlW2V4SPvzkmOxBd1PVfDucgcoHzxZGRxchigHa3OZdrY82jrEaBhSTOl%2FEAJKlrqUGZYu7sRf7WNJbBoxr1nu9I8RTtTPFly2fdsx%2FM%2FmMb28%2F1GXJJeg6bGEh%2Fns6LTUeUp0EC%2BGxjODn%2FynKh8Zjit3js7c5r%2BDtf1kvc2iZK1%2BHJoRROjODVc3uZbIb8%2Bv3lVHpmztqN1BtVQvKaaarpdQYoOanx8wEsfya%2Bt325nGWcex1E1LB%2B71t9Q7rpc%2B3qR6QECxFrqQCr3xOarVsui9YCH4gpFj6F%2FVAugu49qjBugfUcXAUnUBXdWQIO6F6YRxFtz0rydgdd%2Fgxjp03EoMOfkxDa10oF6RWpAjjWCR4IZ6%2F6WE7%2BTdGfoAMAzJJaMSoRb2yX3sgR9MSI5cutc6wyvEegc3Ej9CdOJbaWAmhim7KxP8xq4fFg6whchMOjEnr4GOqUBp8DZVi2mNyZmWhwH8AAnRKuHjawo9xEtmo8a4F7SAG7h54GaiKMoi6BKIThfOojj7df5A%2Ft9nC3B%2FjyTuqgnF48%2Ft0zoNwUrPE%2F8nmwmWtLj8RuPYW2UH84Md0Mg5DFY3fKlGEADbz77wawc%2FWGVp25CobIX%2FAO9Tw5xglGhrWdZDNWTgIoyNddnMhHBAsWwXSAbsDg32x6yoLbr%2F9bEuWQMVGJl&X-Amz-Signature=f87f62abf9c26c29c78ba2d131bf35da1eab314402f1f184dd2c4dfa3fbb8da6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
