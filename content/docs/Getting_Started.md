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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3PWY45%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC2n4SwUv%2Bg8oAsDLW%2Bxw8KDc9SkGv8ulTJSxOH51n0CAIhAPzkZXAxagBuBo7AusgxydHfFAIQiPDlDECgyHippIZ0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKAgn%2F6cOMuBbn6gq3APgph4FWZR3DsCtAaCEQvqOKWWvuBOBTO8Ecpwjy5CvGL8xqvnW6HnxdTakkUDbQpC%2BN4yt1%2FwJKKt%2F1STlsTn04tP6IZLcEcZHop3lJ3wnB0j0rjpnUKjwnjVIFaTzJPs8FhCsIImIsU8555UqTMwB63i1rG%2FvmEYPWMAqRb%2Ftkmr6LnhrRa31Q2Qp5XfMLzrOFIHr%2Fhfo0jd38cEaHO0g%2BSZnUO0u7FfmD6yAepOxsUevGr%2BNqHpvfLVPErC5o3KpVrAQVZtq6Za2JXmUmhruqO2KYECBlEfrLHx3gzQ7a6pZNwgc3%2FjKc5WR2r5w82VhaVesLGlSgq7NBTb48Zi8bGUx11H%2FAOYIPzKsFT5DsxUQjoFMOo1P1qNz6iZZO2WAB9e7j3At8JaCUvBU7o6tBb9TpYgzku3u3%2BydcEnAZiGToHVbXopeHtXi1yoxi1WG3k9hzck4pPjXGoqJ08dqt88m7GpdeWlwa2%2Bj9qMwQMhbMT%2BzKqDc%2FS2dS33diARhl98X0jEINjF%2FWf4xO%2BKNEfiKzA659s4SZgsaAxbwiMOrpABXRbO5o9xt6AoaiFA2bbmZmJAEw54INwuNHIn6T%2FcTQcUG8LVFFlbAvQIZrIvNS9ykSXpRqsYnYDDI2JfABjqkAe5m4ZWz4YZ3yJ1USwUxr0ZfN%2FnhxJqGFm0yHoh7qtkic1mJP%2FPoWsdqQCNB1N2SRl7qY6TmdTgH7ZgEQdiWDwUcAtfX9kzOl2AILSKo7beUpblBXiD5yUdt7k58SsW%2FrT51P4GcICPRItau0j%2Bv7lT7EyHBHQT6BDTFHZD4vSzpm4aprUG35CpEelHebWnWGyPqxLY0UoNSx40g%2BTcaSMikN0sy&X-Amz-Signature=cfbba5fb9186ada0c3d4de5ec8ba1194e55e4a7cc320028da4b97ee254cbaedd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3PWY45%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC2n4SwUv%2Bg8oAsDLW%2Bxw8KDc9SkGv8ulTJSxOH51n0CAIhAPzkZXAxagBuBo7AusgxydHfFAIQiPDlDECgyHippIZ0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKAgn%2F6cOMuBbn6gq3APgph4FWZR3DsCtAaCEQvqOKWWvuBOBTO8Ecpwjy5CvGL8xqvnW6HnxdTakkUDbQpC%2BN4yt1%2FwJKKt%2F1STlsTn04tP6IZLcEcZHop3lJ3wnB0j0rjpnUKjwnjVIFaTzJPs8FhCsIImIsU8555UqTMwB63i1rG%2FvmEYPWMAqRb%2Ftkmr6LnhrRa31Q2Qp5XfMLzrOFIHr%2Fhfo0jd38cEaHO0g%2BSZnUO0u7FfmD6yAepOxsUevGr%2BNqHpvfLVPErC5o3KpVrAQVZtq6Za2JXmUmhruqO2KYECBlEfrLHx3gzQ7a6pZNwgc3%2FjKc5WR2r5w82VhaVesLGlSgq7NBTb48Zi8bGUx11H%2FAOYIPzKsFT5DsxUQjoFMOo1P1qNz6iZZO2WAB9e7j3At8JaCUvBU7o6tBb9TpYgzku3u3%2BydcEnAZiGToHVbXopeHtXi1yoxi1WG3k9hzck4pPjXGoqJ08dqt88m7GpdeWlwa2%2Bj9qMwQMhbMT%2BzKqDc%2FS2dS33diARhl98X0jEINjF%2FWf4xO%2BKNEfiKzA659s4SZgsaAxbwiMOrpABXRbO5o9xt6AoaiFA2bbmZmJAEw54INwuNHIn6T%2FcTQcUG8LVFFlbAvQIZrIvNS9ykSXpRqsYnYDDI2JfABjqkAe5m4ZWz4YZ3yJ1USwUxr0ZfN%2FnhxJqGFm0yHoh7qtkic1mJP%2FPoWsdqQCNB1N2SRl7qY6TmdTgH7ZgEQdiWDwUcAtfX9kzOl2AILSKo7beUpblBXiD5yUdt7k58SsW%2FrT51P4GcICPRItau0j%2Bv7lT7EyHBHQT6BDTFHZD4vSzpm4aprUG35CpEelHebWnWGyPqxLY0UoNSx40g%2BTcaSMikN0sy&X-Amz-Signature=21320493673972d4c4105c1c18af77a31418c5c5f8224347f17a8a447c6b58f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3AKKGJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD%2Brl%2BsPBH2LMxEi6HB9SXvSJ%2F9KxqbqYhI5hHBXC%2FXfAIhAPdRK7mMS1%2Bd%2BlLDo9OaJLror3eRu6nvGXvjJjGrt7%2BoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrCO8FpRc9HcpYFoq3APCMGgo6mOJS7w%2Bk%2By7q9H3%2FV3ui35aLmFFh8K4OZSUavrds4nl9d%2FZeOLqrVs28iand3ednaO%2Bq33c7aaldf0OMo1XXyaXuaTtwSd7XJDbjDU7vTNufxu7GljLfWmOIqSgBtH8S2ERkLdAO6kc52TwtSqsf5fMhl72NzMPE2VMGUOl0CG75bkidvMJVxbz%2B929WwyUlFDvaspi%2BTOIckS9PsraXPhu1pc7lYrdi7PeZ4kC8WUvz0UKkJlzaog2DWDPH1OnAQvDTDkrLrBHk67IX75RPuKf%2F8FEyYdtdpprEpYTADvDtuU%2ByZwAmFXRNLZcuxfMTvTzjBQTEkvESCT3JVzRQv%2BMQMEoZGR2HDlpoOvUAxal2rWfPk2ZvUP8Ond0a0x09D%2FL7T0KJ%2B7bdgywMIQFSCqWTUFjyITiZDsuqdktXRg40AHW2DIyHs7LjoILZ7fBPDL%2BZTdKfLfYckGqKo0lkO4tyxfh%2Bh5Tzq5EVk3dlBgsUecL4UYh5WbayTCsgSNLXjf7weziyeDkqxCNvn%2F2AYSUBcXJK9%2FpP6WL2zc%2FB5ALW8XHj5x67tjDcvFHMUMzVlI9wC4WRrBXAJXNwEz%2F8dPGxhByAR%2BiqUfiTpfE%2BaZEZUNBfRMs7zDC2JfABjqkAVLw271BXW5en8mJWCC0%2FscFhM9Mn4CbTZLnhIJ%2B2E%2FBdhK%2BZhPrEy7Bua7jiJ%2FWaO%2FK2A99%2BlV0bCsRgVLoMLhaNtMg47nm5e8OrgILTB%2B5pFOHDgtDcrwPrUfT4c%2BQgKbJ1eep6ysdeEjtl26rC9g9OfzWBhYsi9LxnX0kiQM9nJkN2WKhjgg0iMzDOKt%2FeSmNk0Zf8%2Buvm%2FLcTtLd5ZrUkeGT&X-Amz-Signature=3a93063f2c6aaf3bba6a6be3ec1e16f2412990c5fd165e54a1a6ca06fb0e6530&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SASTZ6DO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCdv7GdNSa1CEqHhxwXKtPoTTKyR4B2Uvh65ZeXHzMcTQIhAIKMjbCPBxtv6hrmlRiKyfKprFAqWM%2FImApkVPIsaPmPKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAeYRo%2Bat89Jdw1Qgq3ANZ1%2BQsHx6av1joPuySotN5qD7mqT3C15fW7uw2sDMzWIEapmpXIKBG%2FdxHNB%2B%2BcqfxbyRgNqJgpUMZag356SNUgJkn%2Fjm2Y%2Fu6f0FHjCab10yidVr0WkrL6F9KHNE%2BkBeZd6JLTew9F%2Fl1D7CxqXtvlF4ZeuqMAOLKQSlqI%2FTHu5Azjtcrn6KX5KAnt2dnBN33oa8zQg6MVfRXpQCZXs6M1MiqF%2BdI6gK%2FniU8%2BZvCLsRWIJQq6ZJfqJjfFyDIGrZZFIRvTy3PvZIE7AQoNGP%2Fw1X17BDEr08ZFOa3ej1Fcoc0P4C5gpfrRL19CWJDrp2o6o6HeqBi0mYGtqRd5mrZRdRtjk81%2FUyzA551nBO1SlIsRDSiGt6u21HsYjnor5HRDgZmvsagcBORPKQTO8OKawpueqJArLQqz8zbBsiSgTvNwaUgkp1Ch4Uysjbw%2B8XBtucWS7RhaZcXrhEllomOTHpOrenUUEIAkiD1RKvcmKKhRzvl6jlelOv4IbhLAtt4xE1uC99fDtUEv6zZJ43km%2Fl03TC5Wz%2Fs9XeeLt%2FivbjJ64a9XmfiqzQzGH254tu5AzP9nPf%2BQCKssqCf4cNDHXfu%2BneYDElfUceK1v4wHMQtCxB%2BGOsnpSSZ%2BjD02JfABjqkAZCF%2BNCto2vnqQyy7qBavhqtqJeKEyMHzLXQNU7cgy%2FhbByqlv01KHpxBrewEEGZG%2F1Ebth3JbQU4Ey%2Bp%2FpY2YA3ww0TvzZ8GjGCGboISJ6QwY9bxsYALxfsiT0p4KtAoKhnK3K8sNUzi2ruLaaovZ9dtQfe3nATDtQJIa6Hvf8HmeFfgmE87vS2Xrd1e2s0K3J7DIzvub5IaSiZTE%2FUR6sGWDOd&X-Amz-Signature=96f6b876e97773b822ce8e8df14dd8e61de1a0032137984a980eddc96208512f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3PWY45%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC2n4SwUv%2Bg8oAsDLW%2Bxw8KDc9SkGv8ulTJSxOH51n0CAIhAPzkZXAxagBuBo7AusgxydHfFAIQiPDlDECgyHippIZ0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKAgn%2F6cOMuBbn6gq3APgph4FWZR3DsCtAaCEQvqOKWWvuBOBTO8Ecpwjy5CvGL8xqvnW6HnxdTakkUDbQpC%2BN4yt1%2FwJKKt%2F1STlsTn04tP6IZLcEcZHop3lJ3wnB0j0rjpnUKjwnjVIFaTzJPs8FhCsIImIsU8555UqTMwB63i1rG%2FvmEYPWMAqRb%2Ftkmr6LnhrRa31Q2Qp5XfMLzrOFIHr%2Fhfo0jd38cEaHO0g%2BSZnUO0u7FfmD6yAepOxsUevGr%2BNqHpvfLVPErC5o3KpVrAQVZtq6Za2JXmUmhruqO2KYECBlEfrLHx3gzQ7a6pZNwgc3%2FjKc5WR2r5w82VhaVesLGlSgq7NBTb48Zi8bGUx11H%2FAOYIPzKsFT5DsxUQjoFMOo1P1qNz6iZZO2WAB9e7j3At8JaCUvBU7o6tBb9TpYgzku3u3%2BydcEnAZiGToHVbXopeHtXi1yoxi1WG3k9hzck4pPjXGoqJ08dqt88m7GpdeWlwa2%2Bj9qMwQMhbMT%2BzKqDc%2FS2dS33diARhl98X0jEINjF%2FWf4xO%2BKNEfiKzA659s4SZgsaAxbwiMOrpABXRbO5o9xt6AoaiFA2bbmZmJAEw54INwuNHIn6T%2FcTQcUG8LVFFlbAvQIZrIvNS9ykSXpRqsYnYDDI2JfABjqkAe5m4ZWz4YZ3yJ1USwUxr0ZfN%2FnhxJqGFm0yHoh7qtkic1mJP%2FPoWsdqQCNB1N2SRl7qY6TmdTgH7ZgEQdiWDwUcAtfX9kzOl2AILSKo7beUpblBXiD5yUdt7k58SsW%2FrT51P4GcICPRItau0j%2Bv7lT7EyHBHQT6BDTFHZD4vSzpm4aprUG35CpEelHebWnWGyPqxLY0UoNSx40g%2BTcaSMikN0sy&X-Amz-Signature=1d849de0da5e0047c5e2e0f3b385f93d6bd90b94d191dbcd836b1199e56c10ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
