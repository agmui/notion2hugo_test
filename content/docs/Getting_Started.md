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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHLHRWB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNg%2BFyMXf673yPr2EfxxNyaGTMibiBuybbs6Xf1DNEbAiEA3IsyQ%2FVhcu94AtCcX42ryNKa35AMGS0UdXDLPJMQ6RYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5DksvGC%2BHb25fNMircA9o7TcgGlC2ByCK%2BoljhZq2VGVXl5igpe52FSUIK8xGJLbGJR8qtPNaFWRJke0p4KqPG%2FmIBA3g4dBbpCCxKPNAW8sKazmoGJY1ZJKNMe37jKx7VewLZnyH%2FdhFpqvSmwbvkQHsuWo8AtpH7EdJQ0CFFFy88nIcR%2Bk%2F99%2Fcz75oz1TGI9Nz8O3naF%2Bv36WkaidvAoWnzofV891mM9cKhXT%2BTXLUa7zurmhAnvrnktswJceJROLyzobCIw3%2F%2Fd4kDEhFfv3iMHawSsQB61nsNODoxJX%2FVL4IC9Y3v9RdqDuRihibsyrhsjV6vktzO9bfRsJWYYnrp2V8NLQKwZx385SJ%2FmgMhutVAbEIvPEa4Jtv91y88XWQ4GZqEwbbgWhq1LcbT696u49AKzl4zDkJzCzEWFxjGy10UpUDRnmBdlgbVQn7cbeiOvjqcUG%2FWbhkV8CJveygvYWoDumGTF8kG0qC6RMJ%2Fw52Hon3WiSxExERWqBCK27ZGVW17zu9zMQVX4c%2BWryDQolwEiouRq6nIheD6SLX1O870GnlDfHug2oi3GrwS%2BCfxIuGRXfuw2ja33YwEQYrScM5%2ByxJ50DF9yYCBTXP9Hdhki6ZPAvKagREhoI5Bi%2F0ILFqn8ak8MNq12L0GOqUBfTXQxd9WwSYuvSamuWbTrbkHUqOo3Ujx15kYq8Qc%2FMDpf2E4T0yRr%2FnuI7qjGyMt6Stbr%2Bs6zckLv7JpRiIpOEe8qy6UiixrI28n7vdbVg%2F2CZFHKhlT10GCan873Rs4XFO%2B1g0Vzk5poHItAwGX6tjp7LrHWOJDvk1hXGBFAWjkd7s%2FBMcSijoACqrnx3xMOcXHUp%2BF41ecudcIXtv%2FGi5PRGh4&X-Amz-Signature=749c95a30ef274b6d5ce6ac4cb374f06d2341544a1409ddfd0dca73a27ec4f89&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHLHRWB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNg%2BFyMXf673yPr2EfxxNyaGTMibiBuybbs6Xf1DNEbAiEA3IsyQ%2FVhcu94AtCcX42ryNKa35AMGS0UdXDLPJMQ6RYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5DksvGC%2BHb25fNMircA9o7TcgGlC2ByCK%2BoljhZq2VGVXl5igpe52FSUIK8xGJLbGJR8qtPNaFWRJke0p4KqPG%2FmIBA3g4dBbpCCxKPNAW8sKazmoGJY1ZJKNMe37jKx7VewLZnyH%2FdhFpqvSmwbvkQHsuWo8AtpH7EdJQ0CFFFy88nIcR%2Bk%2F99%2Fcz75oz1TGI9Nz8O3naF%2Bv36WkaidvAoWnzofV891mM9cKhXT%2BTXLUa7zurmhAnvrnktswJceJROLyzobCIw3%2F%2Fd4kDEhFfv3iMHawSsQB61nsNODoxJX%2FVL4IC9Y3v9RdqDuRihibsyrhsjV6vktzO9bfRsJWYYnrp2V8NLQKwZx385SJ%2FmgMhutVAbEIvPEa4Jtv91y88XWQ4GZqEwbbgWhq1LcbT696u49AKzl4zDkJzCzEWFxjGy10UpUDRnmBdlgbVQn7cbeiOvjqcUG%2FWbhkV8CJveygvYWoDumGTF8kG0qC6RMJ%2Fw52Hon3WiSxExERWqBCK27ZGVW17zu9zMQVX4c%2BWryDQolwEiouRq6nIheD6SLX1O870GnlDfHug2oi3GrwS%2BCfxIuGRXfuw2ja33YwEQYrScM5%2ByxJ50DF9yYCBTXP9Hdhki6ZPAvKagREhoI5Bi%2F0ILFqn8ak8MNq12L0GOqUBfTXQxd9WwSYuvSamuWbTrbkHUqOo3Ujx15kYq8Qc%2FMDpf2E4T0yRr%2FnuI7qjGyMt6Stbr%2Bs6zckLv7JpRiIpOEe8qy6UiixrI28n7vdbVg%2F2CZFHKhlT10GCan873Rs4XFO%2B1g0Vzk5poHItAwGX6tjp7LrHWOJDvk1hXGBFAWjkd7s%2FBMcSijoACqrnx3xMOcXHUp%2BF41ecudcIXtv%2FGi5PRGh4&X-Amz-Signature=0358c5f079bb76b14387608763b3f75ed9911cf8cfbb425f0fe97ca61c4755eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRTEF4W%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJn%2BFMFX%2FSZtRi8YgE9aBQ1H%2BnMe%2Bfw7jr4ZCfaWGBKAiEAwwrod8kTDudf46PhQ3cEq%2BbrgyzaUuPvwn21ASxTyzAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN03GuYf5X48dNXtgCrcA1%2FBSVSLl7LXJp%2FkLByuu45zxNBfl58V%2F5xvUXU9PI3zS674BBWWvVyAk5AxXJ9vJGx%2F2fZZPgvWA0C%2FIATld3FsYp2o1DKJ2YpnbqNfR4%2Bndugnby1o0xG8G40BrRgfWNJw2%2BT8jDILeNVGcOUQOl7dNbNWHr%2FMDcC84JduKqzXm7z0F%2BuiXYNW9QvCj0ThuDTTjOdpZ1zO%2FX86OeHLcK2qBFXcu8vnJ0uLz0%2BFyXuilp2Wr3uR5OH4YRcbL%2BJv3y7%2F1p0IMiQ5nOkq2XfdZJQWWiJWd94RC6%2BWJOmDthInmbd4QqDGcL0VxdxNwZ5zLQ%2FSUt2UzU%2FE%2B4KzWQvWmEbMDWiYfwi67TysuVjPzw5QwdzRFB2zFBKGTAzPkmWJlPj73Xkkpv1VgL3Xc1%2B29rFReKJIjk5aJY8%2FEZm%2BdZu2mYC1vyrJWS6RbTCjdtu%2FeKcrEcXgL6dRG0H7y4M2ZHAwFpxoe3%2FH2dUZYaHCguB3K1Nh0bHtP85%2BZgCzPtCtg5HNiI0%2BQXov87jM6XTpK%2FdeP%2B5ZImejN7WJ4is1yHfKNR1Tdnj2B%2B5lQrATy%2BRwirDdagXkj%2BYjpdOMy0Zj%2BmpAdJSgxPbJB6atj7oRKc7SueGpSHhkK5Ov%2BM%2FEMO612L0GOqUBbICAFe25gYQDlBU1rixWTzvuQYNctPrRY9LB0y8K0TCesT15DGYsBok7A%2FU8YQGIOGMPuf%2BGebsXMTu4KUSimSntVI1yv6mbeKdQ6kjlbZLbdxGmxxFrkQkqyMSafXVkigQ4LVA40deCNVx90bjQVukwDve%2Flux3XAkQfF39jDoUP5luuUYDya764TU6Y0osCdYW7Z5YmsjZnlj8EDpnY88yCos5&X-Amz-Signature=ac512f21d657f1e9ee2971dab490a72600e19009907c33ab9f242c9a810123b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLLARDPV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZynj1okMcQ7zfgEIr3QQRcy15NoIf2DlO2kzXxZP8zQIge%2F06rn8lKvy8Dlwv%2FXzysZml3mtk0%2BnjkzzLY5xQF64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOI93RiCRbCLwAIAuCrcA7IUMRuJ9IK6ZJGzWT%2Fbji9bMm5w979BuGPCQUMJ2AGv2TO5zKMLAg%2FY1%2BOht46OWBCQRvEbbT2fT2wUxDXwhCouGAMfnF%2FoBpWS9Oth1pMY4mJAVHNgNbJ9PIXKqsIzUfu0Sb2EZvMZYjZeIkD0MHD6SSD0MWtTcvzZsFAkwQw79lxPub1BGRjapJK1J%2FzHWznyD%2FNRhZd2DEmFbRv26WYcXUo%2Fw5Nk%2BTmr%2Fpe5KwiceHR86g7Cfa50ChAhSft%2FcLGg4hBO6D5vYbx1bZJQy%2BFsCiq8aNLSR3ebmduYPJczklkMoSLw9JCA9oodueTWnlvZIBua7MoYVMvMbD19zCdAp2oi7QwtWbTZUcBaYImbAIPO2DhaSw%2BjuNEerQuKy5FsVIrBjJ8IOVYOiSkUk%2FzhhV9IIb%2Bgsu%2BquAiCvRv0PNNVfZlXZEWNO1kZMejlh9alElbsIgeB%2BkTLI3Ls0Uy%2FDFlq7yqbiThQb1i9QoUVUQtyWDvFa6Bh4cyLjUxNdedajqTUrXiYNvbGAM%2F1KiS4GvHUPtsYCXWAB13%2BeOsSToXuz0mDpcePpbV6IWYVWP3B1XpYy1MokPKeDxgjAXuZqBRrGVz%2BZY0ih7CjRnGYCT3JLeEUcvExYqpYMJW22L0GOqUBrKtJmo8MbrUnd3r5KcYRrrA6y8icMwOvWcXaC1enE%2Fj%2F1DADgjDg%2BUqwZOsGctcnFvjA360nfMwjbcXv2mx7w0111Un5CeDEn5tb2bgEBMQQ5zVZjTHmu%2Fmsel2hasP6xnARHXW2VF3zzNemhO8STrh0z9%2FEy2BPM5Zv2f4OQWwFd9MC5PtgYbGzNOGxD19ZB501Z7KrEFsp0dwRkcK1FFSG12pz&X-Amz-Signature=87c60759fc90eaa50652c612980d067cbcd7d8f6848143957fa091895a02f726&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHLHRWB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNg%2BFyMXf673yPr2EfxxNyaGTMibiBuybbs6Xf1DNEbAiEA3IsyQ%2FVhcu94AtCcX42ryNKa35AMGS0UdXDLPJMQ6RYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5DksvGC%2BHb25fNMircA9o7TcgGlC2ByCK%2BoljhZq2VGVXl5igpe52FSUIK8xGJLbGJR8qtPNaFWRJke0p4KqPG%2FmIBA3g4dBbpCCxKPNAW8sKazmoGJY1ZJKNMe37jKx7VewLZnyH%2FdhFpqvSmwbvkQHsuWo8AtpH7EdJQ0CFFFy88nIcR%2Bk%2F99%2Fcz75oz1TGI9Nz8O3naF%2Bv36WkaidvAoWnzofV891mM9cKhXT%2BTXLUa7zurmhAnvrnktswJceJROLyzobCIw3%2F%2Fd4kDEhFfv3iMHawSsQB61nsNODoxJX%2FVL4IC9Y3v9RdqDuRihibsyrhsjV6vktzO9bfRsJWYYnrp2V8NLQKwZx385SJ%2FmgMhutVAbEIvPEa4Jtv91y88XWQ4GZqEwbbgWhq1LcbT696u49AKzl4zDkJzCzEWFxjGy10UpUDRnmBdlgbVQn7cbeiOvjqcUG%2FWbhkV8CJveygvYWoDumGTF8kG0qC6RMJ%2Fw52Hon3WiSxExERWqBCK27ZGVW17zu9zMQVX4c%2BWryDQolwEiouRq6nIheD6SLX1O870GnlDfHug2oi3GrwS%2BCfxIuGRXfuw2ja33YwEQYrScM5%2ByxJ50DF9yYCBTXP9Hdhki6ZPAvKagREhoI5Bi%2F0ILFqn8ak8MNq12L0GOqUBfTXQxd9WwSYuvSamuWbTrbkHUqOo3Ujx15kYq8Qc%2FMDpf2E4T0yRr%2FnuI7qjGyMt6Stbr%2Bs6zckLv7JpRiIpOEe8qy6UiixrI28n7vdbVg%2F2CZFHKhlT10GCan873Rs4XFO%2B1g0Vzk5poHItAwGX6tjp7LrHWOJDvk1hXGBFAWjkd7s%2FBMcSijoACqrnx3xMOcXHUp%2BF41ecudcIXtv%2FGi5PRGh4&X-Amz-Signature=b9e102e016c9fe8fae5b94987838885d8d6ae5c5b786b5b79d73d04e9b09de5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
