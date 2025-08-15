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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQ64YPM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHvtE2Shr3cG%2BNE1LxhO7QFqMt7LgmpA8sZtW8QfBq6qAiEAzF9mfL4roLkEboI19eQGMBBxaYLnxs%2FlSVNF4M8i6Lgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLlcd6kDeFT8kZho7ircA%2B9OrXsabMXSxp9Kx%2BGuBP68iUh%2BKtQpm6JaXLbXDtuGB5%2BQuCEFzui3B%2FTGlywP0oRka3IzCGzdq8P%2BJoUKD7h5RaT%2Bx%2BfQtoQjRUvIulLpYefoMYwN%2BFbKmq5NfY1PrtxR2AWbn7HI9tIOn1WdOwHZb2fjMdT609VqhfGMXZ%2BBWcOXFGq1aYrG13CCFkdNSp8HQzhfqTxrUkBoySXbN0HPLLeEU96VLHQYfuU%2Bt9UnoGie34o2lItmNSw5xLUOHCTWl7MdpjRd4x7lLmAMiGupBZ6qbHIDg7ST4qEx7rpWXZ2k3mScEvPJH4YxFyNT27P2ZXlUQQhwkmkAnrr0tJW0YEBrq2hmd4gS3P0hsyi7t7uqrahDqXbCjL64dt67pUrUCHy%2FvTwil7zkU7k47kFhEoSnWSkYdRIVc%2BbdC3ihCtqYHJDOogu5RdWSYAvpuAVy0wCWq3WZ1NgQ8vY1onTBMe5yLzC8FrrTQMvCROGbbtxMePqJ6pMJeJVoMGACbEoMRukc4lWtsDS3LBSIoS8TrPsuL7h%2BaWsVz0FStBR0K5XHgbQh%2FdRaxLLSYY887crG%2FYRLbRUghH%2FCyR9j03izIhmtgFElO0bIfuY9wihSpry6agVtTzvCfA7%2FMLvK%2B8QGOqUBFHW5%2BuqvfP84Ql7LZJdifcvn7s%2F6ueoU%2FfSYqBCPHmPLfNl08rySYCo3RtFuB4GqJMjGWW1BuEOygYii%2BAcS5fB3zO0vr5TJoSVNM0Aj09r8s%2FffpKBfghHkd%2F7ze557FTC0xLNXQDhmvvmqNPJ4BgSTD%2FR2tW25Jz%2BUtMo28h28%2BygOJ1GQ7bO6CGOc7sZzOKDBdn0Nz8yQ2D8q5zRdYMfVYC5m&X-Amz-Signature=55c2f2774bc416e80d134353487f569b85092d2d4a1a9dc14ed0ed80b8cfb99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQ64YPM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHvtE2Shr3cG%2BNE1LxhO7QFqMt7LgmpA8sZtW8QfBq6qAiEAzF9mfL4roLkEboI19eQGMBBxaYLnxs%2FlSVNF4M8i6Lgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLlcd6kDeFT8kZho7ircA%2B9OrXsabMXSxp9Kx%2BGuBP68iUh%2BKtQpm6JaXLbXDtuGB5%2BQuCEFzui3B%2FTGlywP0oRka3IzCGzdq8P%2BJoUKD7h5RaT%2Bx%2BfQtoQjRUvIulLpYefoMYwN%2BFbKmq5NfY1PrtxR2AWbn7HI9tIOn1WdOwHZb2fjMdT609VqhfGMXZ%2BBWcOXFGq1aYrG13CCFkdNSp8HQzhfqTxrUkBoySXbN0HPLLeEU96VLHQYfuU%2Bt9UnoGie34o2lItmNSw5xLUOHCTWl7MdpjRd4x7lLmAMiGupBZ6qbHIDg7ST4qEx7rpWXZ2k3mScEvPJH4YxFyNT27P2ZXlUQQhwkmkAnrr0tJW0YEBrq2hmd4gS3P0hsyi7t7uqrahDqXbCjL64dt67pUrUCHy%2FvTwil7zkU7k47kFhEoSnWSkYdRIVc%2BbdC3ihCtqYHJDOogu5RdWSYAvpuAVy0wCWq3WZ1NgQ8vY1onTBMe5yLzC8FrrTQMvCROGbbtxMePqJ6pMJeJVoMGACbEoMRukc4lWtsDS3LBSIoS8TrPsuL7h%2BaWsVz0FStBR0K5XHgbQh%2FdRaxLLSYY887crG%2FYRLbRUghH%2FCyR9j03izIhmtgFElO0bIfuY9wihSpry6agVtTzvCfA7%2FMLvK%2B8QGOqUBFHW5%2BuqvfP84Ql7LZJdifcvn7s%2F6ueoU%2FfSYqBCPHmPLfNl08rySYCo3RtFuB4GqJMjGWW1BuEOygYii%2BAcS5fB3zO0vr5TJoSVNM0Aj09r8s%2FffpKBfghHkd%2F7ze557FTC0xLNXQDhmvvmqNPJ4BgSTD%2FR2tW25Jz%2BUtMo28h28%2BygOJ1GQ7bO6CGOc7sZzOKDBdn0Nz8yQ2D8q5zRdYMfVYC5m&X-Amz-Signature=08211f71d0f40123e16a24a35aa910dab8f4b7ca9025be9db9b6783c2aa45e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQ64YPM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHvtE2Shr3cG%2BNE1LxhO7QFqMt7LgmpA8sZtW8QfBq6qAiEAzF9mfL4roLkEboI19eQGMBBxaYLnxs%2FlSVNF4M8i6Lgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLlcd6kDeFT8kZho7ircA%2B9OrXsabMXSxp9Kx%2BGuBP68iUh%2BKtQpm6JaXLbXDtuGB5%2BQuCEFzui3B%2FTGlywP0oRka3IzCGzdq8P%2BJoUKD7h5RaT%2Bx%2BfQtoQjRUvIulLpYefoMYwN%2BFbKmq5NfY1PrtxR2AWbn7HI9tIOn1WdOwHZb2fjMdT609VqhfGMXZ%2BBWcOXFGq1aYrG13CCFkdNSp8HQzhfqTxrUkBoySXbN0HPLLeEU96VLHQYfuU%2Bt9UnoGie34o2lItmNSw5xLUOHCTWl7MdpjRd4x7lLmAMiGupBZ6qbHIDg7ST4qEx7rpWXZ2k3mScEvPJH4YxFyNT27P2ZXlUQQhwkmkAnrr0tJW0YEBrq2hmd4gS3P0hsyi7t7uqrahDqXbCjL64dt67pUrUCHy%2FvTwil7zkU7k47kFhEoSnWSkYdRIVc%2BbdC3ihCtqYHJDOogu5RdWSYAvpuAVy0wCWq3WZ1NgQ8vY1onTBMe5yLzC8FrrTQMvCROGbbtxMePqJ6pMJeJVoMGACbEoMRukc4lWtsDS3LBSIoS8TrPsuL7h%2BaWsVz0FStBR0K5XHgbQh%2FdRaxLLSYY887crG%2FYRLbRUghH%2FCyR9j03izIhmtgFElO0bIfuY9wihSpry6agVtTzvCfA7%2FMLvK%2B8QGOqUBFHW5%2BuqvfP84Ql7LZJdifcvn7s%2F6ueoU%2FfSYqBCPHmPLfNl08rySYCo3RtFuB4GqJMjGWW1BuEOygYii%2BAcS5fB3zO0vr5TJoSVNM0Aj09r8s%2FffpKBfghHkd%2F7ze557FTC0xLNXQDhmvvmqNPJ4BgSTD%2FR2tW25Jz%2BUtMo28h28%2BygOJ1GQ7bO6CGOc7sZzOKDBdn0Nz8yQ2D8q5zRdYMfVYC5m&X-Amz-Signature=f4272237dcd153acb5148c020509d5fb5aac5c0acd2c906d9cf24dfdbdfce971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPAYE6L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIQDq0a7zpCJ8PJz7I82G4DM1th7xsczI6VBT2Z6HKib4qAIfajSenBM%2Fd%2FHEDdTCBYEjPxxV%2Bgo17DZgyPmTMGtfFSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMurWLijNWWa%2BCKoONKtwD7pKJ%2Fz%2Fp2miJ73ef1cWARmbtR%2BmtKzfnGDIMiaq1U65Qmc1JJP7QsFhe0GIPrIcZ1Se4KX4RaK8ZLwGu9Wa2BfYiaOfpIfMaUfHuCVUKKY7aBCYzfDb7L%2FlVVrAc0yUWXVJIyuZ6CyEg6i2ZIpaCBUTn9HjQkX2ah4%2BWf7W%2FplkI%2B1PgWp%2F%2F3lP2sFyVT42kXUMkc8f5vfEL8EPdKf5mLJlFoCZvijLbnFOVK7541hYQ99snNPszBIXyDtdqd3RSXpmhR%2FXFWrjq0qYjI85%2BmEo5So5F61m6flVAN%2FGgsPHSBUxvyVDCDvedY61WyoErkN8m%2BfUJXsI%2BRI6QSyKIeQYJMUAX3R7mD2C57V2hiJYHSKcLsaX9tlGo%2Fl9cwg4VidwxicWxxGauOMHtrS6duGsKiNXmVEj3JsF76ncEZp9CxAvg24kKOlhFv7MN8Hd96EL5He1eYNoGZbgI%2B2IUaPMvw%2FgLpXI7HcCNsPq6pmmyhBdbUuvqzpMiJgEgoLWGPG7j%2F0BqLihGgJo8XHLT9Wa83rGGl2Sggr3%2FQNRURMOZHgLi5yEyp8VXrL87D%2B0iyofKK8l17enm0RQ7dI8vZIWP9q1pcDpVxMRzNUy2QmIeMj8U0UcyWxTQO%2Fkw1sr7xAY6pgEYUMmx3oJsbGHmnixXhnXy0ysYUY7ncKvkNrBZMDNf0XBR6mBR0Esb3mKJt1lZL7suFVZ0Uttj7B1lia59JhupSSKxJTzNSzvOo8hwE3uaMIbcgkI1ckW2GS1vbbON0Urzzr5bmD1Ekia7MobB4sncNQlTiEtysq5NA6OQ5vSFEdhsr049obdPtBizkFVO3w%2BpvLXDGp6sLLD1mboMHFquNfCpEF6R&X-Amz-Signature=1116159e5f0dff6bbd08dddb78fc8309ee4e4e442c1bb1e68547fec4a3ceccff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2ASPLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDEtfNiY2lOQTN%2FT2Hz8ralVaTmQ%2BDLfgpgy508mQHHSAiALcAJmNkIvUtJdqLLwnJQJ0QUB01mUAqPXznORguP7ASr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2BstMgJ0PPXS%2Bw%2FHBKtwDRmCfAQH4Ov2Z2E1xz6f%2FlVypdXfxGoz2DhbuVpWa5pokzTFW98flTPaklTJPOl1JQ5g7TROG2Ij19hh1jpk9sqKJCcQ69tmOZtCb6xJ%2FP1hbE9tNsOTwXZtu6NUSH3VVaY%2FkdoC1j5Qwif5%2FYUwKwKy99FDu1kvMLURilfIYK%2BNurq85lx3reATQfRFUrgTFO%2BkO0%2BbAqwEfka7Vdkg5VteQzZN94oDfxWcFe70qaaGjUEcVFmRPNwFSLe7eXIkQDYrSaWP0Dmx0sD8Q60nmQ9K9DRiblu3bNiooNMK8uicPFpnaFnCV8ez1xW5Eo9W1a3yJeT8mRJDcN71LP3K65%2FwE9%2BstQPRgNvILZ%2FDcu2JEbYJjx31Ebnql82ScOHppN5arXRjYbY%2FyIiBIfGAklmEwNnnSzXf1zIs9Ln8MX02Qw%2Fx8uGUTZICLUbxFoxeeTM4C1YHt4P2mejzD%2F%2Bn5noXzkBCFrIMjDG9iMnoGJNMm4Na0I2W9ic3wWX0cNlrCEHLTkHZ4v0mxZQg5n%2BaAJwDW61OtnwcM1x%2BemITAPTDxhdGrQNlZJ02Ul8CsyqSIBmcHAMWZ%2BjxM%2BBxpYH1UNV74MyLuMYTiuLatF1tfYsw244mq6sToUI4wFJkwusr7xAY6pgHmf0A4ad6MaP224%2BmEbDCZzyb7flsCIxUO3m8P65meFvmqrsokiYEB4zZTlX2UbtQ0lcFFnRMmKj73MjR%2B0B35F%2Bu%2Bad9uQ7FWb8Gx7d6eoQtnKWJcZ8zhQds7vOfmRLMQ6UvlPamEi1rsW6O4h2rSbc3e5IQaez1mKxkbkDACVTwAMOFLz15QvPmSXi%2F9o5d6F%2F3u9%2FulrAvOESVZMorByQn96C%2FA&X-Amz-Signature=43350b3bb2850234b2380013e467aac557a48b5752d438f841708a584a84b84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQ64YPM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHvtE2Shr3cG%2BNE1LxhO7QFqMt7LgmpA8sZtW8QfBq6qAiEAzF9mfL4roLkEboI19eQGMBBxaYLnxs%2FlSVNF4M8i6Lgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLlcd6kDeFT8kZho7ircA%2B9OrXsabMXSxp9Kx%2BGuBP68iUh%2BKtQpm6JaXLbXDtuGB5%2BQuCEFzui3B%2FTGlywP0oRka3IzCGzdq8P%2BJoUKD7h5RaT%2Bx%2BfQtoQjRUvIulLpYefoMYwN%2BFbKmq5NfY1PrtxR2AWbn7HI9tIOn1WdOwHZb2fjMdT609VqhfGMXZ%2BBWcOXFGq1aYrG13CCFkdNSp8HQzhfqTxrUkBoySXbN0HPLLeEU96VLHQYfuU%2Bt9UnoGie34o2lItmNSw5xLUOHCTWl7MdpjRd4x7lLmAMiGupBZ6qbHIDg7ST4qEx7rpWXZ2k3mScEvPJH4YxFyNT27P2ZXlUQQhwkmkAnrr0tJW0YEBrq2hmd4gS3P0hsyi7t7uqrahDqXbCjL64dt67pUrUCHy%2FvTwil7zkU7k47kFhEoSnWSkYdRIVc%2BbdC3ihCtqYHJDOogu5RdWSYAvpuAVy0wCWq3WZ1NgQ8vY1onTBMe5yLzC8FrrTQMvCROGbbtxMePqJ6pMJeJVoMGACbEoMRukc4lWtsDS3LBSIoS8TrPsuL7h%2BaWsVz0FStBR0K5XHgbQh%2FdRaxLLSYY887crG%2FYRLbRUghH%2FCyR9j03izIhmtgFElO0bIfuY9wihSpry6agVtTzvCfA7%2FMLvK%2B8QGOqUBFHW5%2BuqvfP84Ql7LZJdifcvn7s%2F6ueoU%2FfSYqBCPHmPLfNl08rySYCo3RtFuB4GqJMjGWW1BuEOygYii%2BAcS5fB3zO0vr5TJoSVNM0Aj09r8s%2FffpKBfghHkd%2F7ze557FTC0xLNXQDhmvvmqNPJ4BgSTD%2FR2tW25Jz%2BUtMo28h28%2BygOJ1GQ7bO6CGOc7sZzOKDBdn0Nz8yQ2D8q5zRdYMfVYC5m&X-Amz-Signature=9484ea4c08f4498425553dd4684ddaf3e2caeba2e00098bc6cdd2c7f8947a245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
