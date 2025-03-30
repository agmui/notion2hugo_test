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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZ4QANS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDVqM8jscSscw%2FnhkCL9wYkT7F43kgGrPsJgfCyeSSVzgIgBZpgUhW%2BNEp5YKUnZv2Khhejgz%2F4Km%2FgZFuPggBU12AqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeYxfbiEqGFAazUbSrcA%2Bomrc%2F9KOZFC8qnjFrhcn0mvXwvsqfabpX8l7OlT9qVrDdXWhIrje8mTADmenIeSE0XbzuQSSe8g1rRAH0ntSu43A7cm%2F3YTq7M1GYp5BlTGQJ9SBKq1o45nyrcGyu4BWgecCkVDRXLHDKa7DH6bek5CFsO6hYY6rqEOffs8a8dA%2BY%2BTUdprGI793coPoZ4myIXzfBNtGxyVOw0a89pvJ7G%2F0hVsyOj0n3r0xCo1euiTc6DGAdFGsrV1EQ%2B0NkDqdcFpXF%2Bdf%2FrXDZlhWk%2B%2F00CprQbwOTi0a7f5hjy6i4BIsh6dE2trE3%2FNdDE6nigzebBNrQ10FoYCEbjeV45UXMwK0dYhaDJcEhd9Mz4Dd8bvpHBFmxp3npyY7p2MCOxRNzsS0AF6OsiSjNUoG33NuAyYsqHQhC5Cy5dRjdFToa7lyHl5lWX6Ki4nml%2FcMlRjd6k5ozZtEQwbx380Rla2jLFUG4CpYfgE8RLt%2BXrEEi2WghmYNFPFf97LbeyHDnWWjKf1ktfChjn1xc8pfzv4uaMQVyxdUg%2By0nGG%2BJ7fU0j3e8KLc86MTLoL2IvfFXdT8pE%2B6Bb%2F5PGv3mzMPpMGsogjMHhsjqMKHg4QqmmX8KvnUVxlcOzzF9ajuIzMPjpor8GOqUBzejujHqUL%2BdO2DWOTf0jeLEf%2F2zJwpAASzoDncCSyjvpU1KpmcrH4LI4%2FweaUBuOQD6z5ilruk1VbZ09cE5rmIuGQJg8TFb4vPtpddnQuTrE7DxmhsrMWaRqx5vI7PoyVlSOboUK20dgvdkpHvmjXP0zOZbeceoYEARlYeOPP9zQ38X3%2BIVueBi3NKuOBamY9ZT1JLBOEsbJf4eaX7tjQRdJRJ0l&X-Amz-Signature=46f1d2147352583d27c195440df976c203d747e59ef9583296d98aa6f7cd1637&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZ4QANS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDVqM8jscSscw%2FnhkCL9wYkT7F43kgGrPsJgfCyeSSVzgIgBZpgUhW%2BNEp5YKUnZv2Khhejgz%2F4Km%2FgZFuPggBU12AqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeYxfbiEqGFAazUbSrcA%2Bomrc%2F9KOZFC8qnjFrhcn0mvXwvsqfabpX8l7OlT9qVrDdXWhIrje8mTADmenIeSE0XbzuQSSe8g1rRAH0ntSu43A7cm%2F3YTq7M1GYp5BlTGQJ9SBKq1o45nyrcGyu4BWgecCkVDRXLHDKa7DH6bek5CFsO6hYY6rqEOffs8a8dA%2BY%2BTUdprGI793coPoZ4myIXzfBNtGxyVOw0a89pvJ7G%2F0hVsyOj0n3r0xCo1euiTc6DGAdFGsrV1EQ%2B0NkDqdcFpXF%2Bdf%2FrXDZlhWk%2B%2F00CprQbwOTi0a7f5hjy6i4BIsh6dE2trE3%2FNdDE6nigzebBNrQ10FoYCEbjeV45UXMwK0dYhaDJcEhd9Mz4Dd8bvpHBFmxp3npyY7p2MCOxRNzsS0AF6OsiSjNUoG33NuAyYsqHQhC5Cy5dRjdFToa7lyHl5lWX6Ki4nml%2FcMlRjd6k5ozZtEQwbx380Rla2jLFUG4CpYfgE8RLt%2BXrEEi2WghmYNFPFf97LbeyHDnWWjKf1ktfChjn1xc8pfzv4uaMQVyxdUg%2By0nGG%2BJ7fU0j3e8KLc86MTLoL2IvfFXdT8pE%2B6Bb%2F5PGv3mzMPpMGsogjMHhsjqMKHg4QqmmX8KvnUVxlcOzzF9ajuIzMPjpor8GOqUBzejujHqUL%2BdO2DWOTf0jeLEf%2F2zJwpAASzoDncCSyjvpU1KpmcrH4LI4%2FweaUBuOQD6z5ilruk1VbZ09cE5rmIuGQJg8TFb4vPtpddnQuTrE7DxmhsrMWaRqx5vI7PoyVlSOboUK20dgvdkpHvmjXP0zOZbeceoYEARlYeOPP9zQ38X3%2BIVueBi3NKuOBamY9ZT1JLBOEsbJf4eaX7tjQRdJRJ0l&X-Amz-Signature=38d5af2e9ed5267fa0b80555a3aa48f6a9a6279ce9346bc3af4bd44ca0c9df9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSA6OPF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDBvK7hVW4yurYRqek3KLWsih2fhBCAK3usFmljDF87UAIhALLWs7%2FMIYJYvne%2FM7Mkf%2B8vLytMEd%2FafHkLW7WmU25zKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyziORd38712OXNbhsq3AN9Of1QlJJyYm3WBv%2FonEL3bG6y1h%2BKQTXWcgGz4nqLlQjN%2F73NknnirznzLrg9saC3AzNeIHWgMVYCWhjychTPIo8NvTUTndnJkqyQHO5J6tRaunZNDavdjEMZca0Yb7spVFWr1KMBDACWR3Kd98ARmUrGBAlElLb4FRRLqyf4qsbGDPb8%2B8orkPlY4duWMNBRPclfH5rVuUKZsqE56deUSWyh7o%2BoViL9uYZLLzvE0xjwVrCegnjxXmIQPeWopOyXL37Gt9vRzSMtylSM3R7WmMTplS4DyHZ7aNBh2G4K2Ub5YeF2DDXQpoU1PekPkVpxFb3pHeH1h5B%2BuMUMElgl32ssIs%2B2fzPLKj51mtgiFputAo5oNnlrf07nndhZqywCg3GcF6FhAfdPZge9RUNV11HSUz9tlBCf73hvsnT6qFvLioWn9myz8P6BhY0wJk3ISGzXv2PabGUg25I7k6DHASZW%2Bk6Pkl9gAmPmYy%2BYCkJVG%2FYpxZKe34qFYPbred8m1ASI2WMNzEPZAOs%2BNWno4msNrGthupYVmEpeuqT%2FUvxVv61CrnGBuM4o9C7Uo0eSuWH2LlwUNj1OEgrxE0BH%2B56AU0MuhCgOtHQDyme8lS7hen%2FIu3WGNQIq0zCW6qK%2FBjqkATuFYsUgbRgiatIaodeaWEUz%2B2SizmpTxyn%2FCPQ%2Bh5TesOy5U0Ba%2FcmgtpqgDECK3tMhbN4YySNbuVBK8sUP1MIDmLD1XMyXbTwIycvAgELYfwtNUeGA991n5BpF2iwyiD8WGPAhhSTZpRdJTdi1m5uhwqOit6iMNdQP%2BJLNFheBqWtJNvfOpa%2FjSZctk0LDUCnTu2peKjAKTXG1xrOMSCmFAQY6&X-Amz-Signature=2872b7b3a1d375cba51f737bec57fbf4820820989d5d3ee625e9937e2c1bd1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DAU2ZI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCXVXgLc9Bcuw8fyBr%2BPz2CvLay6BN0va8UMV27%2Boh02gIgL8nyc4IgWIdkhjOoAVLc4%2BkeDNo%2BUBtBlNqSel2nkhEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqMot8Jd6j6SvMuuircA%2Fq2weaZfyOPox7RDRvyGSL9yDgNul%2Bd6I0kRjdcQrQXa3Hf3L93BQSkoTFMcPd5eNQZcWEySw2nJW5i6nyPkypklDfbQvZ%2B%2Fl5g64M4LgMlenkUJvPkCTMOfzZFU0xyHYGGabr5IAFsi4kCGwNbnONbJ84UqmvBIofSvHrbH1cTGWSblXZlPdSsPGyvV%2FsIRpN7QtRvOFEoGuZOS28wvuYxWH46g2bmx%2B9K%2F2m%2FwDDNC5Np%2BTuEpk187pCD%2BeFzA0yGEqv4KsdWV%2FQfbuFed%2BrvXD3JAMOQkwUAXcczBio672P0t2ejN6Ny43iY7KjmgIT91%2BW%2B3JoIYs%2Fwn6rnUhpjph9WH4ui8XfKBJRLoR4QK5CXm%2FXdnXkoGt7ozZ0rW1ukTiDxdFJilqOTyC5Ep0gwLraAEtKoHlsHaPJ6H16pTIvr0gSGqead%2FQ4ctbwCXA3Um44BScbfIwDJYzSD1ABbCqnX%2F79Cas7clXScn3QmE%2B0E3aX5sTHB2kl3HVtK%2BQfqjfTTicL3gFcBp%2BOPCHALqm44ksn6QH8aPi0vRNXY1PEJdL4Ap26JUAb%2BuvB8iez4DbMf%2F0oluc4pqf7ikB%2B4sP9P8tXzbg9Uzh4S%2BhOr5DrVpel5tdaCnoYFMPfpor8GOqUBg9kvUjeLZ5Qf1pTCqpOIBfrIQarKwn6RebJapnFLfbMWSpweOWSGVWx41rjMGtYMcyPNvnvtE42fjVUSfIbY3%2Fyu6lMu47BovQQHrB4ImPdIQWs7mZcl5lnpMHzzHQ1wyAoDjzhEngAHtw0RPRN%2B5slpo4P0WYPbjN8uelhStNppXQ0jALA6qqD7XsR2TdaAbIJ48QQwIn8QEh2sWrydV143vEe4&X-Amz-Signature=cceb33a16a239c25c74bd56a79e722b95612aa2a4093beccb6a526d477a76ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZ4QANS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDVqM8jscSscw%2FnhkCL9wYkT7F43kgGrPsJgfCyeSSVzgIgBZpgUhW%2BNEp5YKUnZv2Khhejgz%2F4Km%2FgZFuPggBU12AqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeYxfbiEqGFAazUbSrcA%2Bomrc%2F9KOZFC8qnjFrhcn0mvXwvsqfabpX8l7OlT9qVrDdXWhIrje8mTADmenIeSE0XbzuQSSe8g1rRAH0ntSu43A7cm%2F3YTq7M1GYp5BlTGQJ9SBKq1o45nyrcGyu4BWgecCkVDRXLHDKa7DH6bek5CFsO6hYY6rqEOffs8a8dA%2BY%2BTUdprGI793coPoZ4myIXzfBNtGxyVOw0a89pvJ7G%2F0hVsyOj0n3r0xCo1euiTc6DGAdFGsrV1EQ%2B0NkDqdcFpXF%2Bdf%2FrXDZlhWk%2B%2F00CprQbwOTi0a7f5hjy6i4BIsh6dE2trE3%2FNdDE6nigzebBNrQ10FoYCEbjeV45UXMwK0dYhaDJcEhd9Mz4Dd8bvpHBFmxp3npyY7p2MCOxRNzsS0AF6OsiSjNUoG33NuAyYsqHQhC5Cy5dRjdFToa7lyHl5lWX6Ki4nml%2FcMlRjd6k5ozZtEQwbx380Rla2jLFUG4CpYfgE8RLt%2BXrEEi2WghmYNFPFf97LbeyHDnWWjKf1ktfChjn1xc8pfzv4uaMQVyxdUg%2By0nGG%2BJ7fU0j3e8KLc86MTLoL2IvfFXdT8pE%2B6Bb%2F5PGv3mzMPpMGsogjMHhsjqMKHg4QqmmX8KvnUVxlcOzzF9ajuIzMPjpor8GOqUBzejujHqUL%2BdO2DWOTf0jeLEf%2F2zJwpAASzoDncCSyjvpU1KpmcrH4LI4%2FweaUBuOQD6z5ilruk1VbZ09cE5rmIuGQJg8TFb4vPtpddnQuTrE7DxmhsrMWaRqx5vI7PoyVlSOboUK20dgvdkpHvmjXP0zOZbeceoYEARlYeOPP9zQ38X3%2BIVueBi3NKuOBamY9ZT1JLBOEsbJf4eaX7tjQRdJRJ0l&X-Amz-Signature=a4de25ccd6e45ff5ef81a4f67ed9847d9ac0f545c5067f8b7f9819121b4b2f27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
