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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJI4C47F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD0qqIitwxequ6rbwh1rORi0RNIYo%2B8ykS%2B0VJwd3jVdQIgNUsenXSu1Vx7lWkLyme3ZLVMa9%2FtXJCEpa5pgLRAvBgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMkuQ7Aw38IZC45PZircA8ZNR57g23rh0O2wt4hhMRZS5uy42jPCeSSdYbmerPG5LYuytnJ%2Bc6jezfOpHbyKxf0jusBehy%2BKdnYhgczw%2FFkb1GFUGKirtEGb7ZqU7nZ1F7QqgUElLKVboUuzfFdIspV%2BYPKXlbE8oXdhc4uVWMYX2pQ2o2PXkpusdsFPMmPN4eYxb5YWtyMavrI3FiLJLib%2BM96fbY1%2FR9jJlbRqlc0U8D8LOPSDTYRX3QBLVKb9d7gdwoGPWVsEk%2FfjGL%2BRF1sjcuGgyxc3b67171FDS%2Bwp4Oxc966KuVBPGAlLuvBfAEvVgWZRHadPrri8zXAYDKH%2BoZnTAPmL2LjXQ54u%2FKnpObFFXv8FnoCMrfVggz3gchZa0Kb1149zFKKoJbLyYlE72nldUUCDoJnT7fq4QOjebXFFksAQFlm75EDZsERgZYrIC9UPpGOCQU0SxYL4PRvBdr5WKyx8af9eUVXiKoayk8BzebY9hWRx57fwAnGhj6LJ1lUEEHXfqalqYqsD3izEhN38VYDB1CnrhAaM5zJQY%2BbFrR%2B23nBWoIxA%2BNTqmi4t7kkRNhT3QJx9sbohtry9WaLqpbkJAR7DSbJLI7skcDsjGZ8ClKNsX6Qxc3I0kH6nxauhKPUeiVClML%2Bk1cMGOqUBkP7c5MkbpXG85HLlwmYyU0Bg2RfdHhK%2Fpb3kOhbGWFOmOfsLPiH%2F5k95ZFFXmSka7EStik%2FG05xDS5EjvktAmFDYGtF9QnAUJr2RVoa9pnWmFdhsSEwyKABzbG19WZD0oRIfIVk935%2B9%2BAN6tSiRMF3BQ29dg%2Brpb9E6cxmtl50QRP%2FV8V4uXhmEDMibSC0sqyA1dx0762zdckijJnWFM2SWGDNv&X-Amz-Signature=c4a5bc436c0de820079063ea15b792df73f61389a793d34facd0d7ae12be7193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJI4C47F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD0qqIitwxequ6rbwh1rORi0RNIYo%2B8ykS%2B0VJwd3jVdQIgNUsenXSu1Vx7lWkLyme3ZLVMa9%2FtXJCEpa5pgLRAvBgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMkuQ7Aw38IZC45PZircA8ZNR57g23rh0O2wt4hhMRZS5uy42jPCeSSdYbmerPG5LYuytnJ%2Bc6jezfOpHbyKxf0jusBehy%2BKdnYhgczw%2FFkb1GFUGKirtEGb7ZqU7nZ1F7QqgUElLKVboUuzfFdIspV%2BYPKXlbE8oXdhc4uVWMYX2pQ2o2PXkpusdsFPMmPN4eYxb5YWtyMavrI3FiLJLib%2BM96fbY1%2FR9jJlbRqlc0U8D8LOPSDTYRX3QBLVKb9d7gdwoGPWVsEk%2FfjGL%2BRF1sjcuGgyxc3b67171FDS%2Bwp4Oxc966KuVBPGAlLuvBfAEvVgWZRHadPrri8zXAYDKH%2BoZnTAPmL2LjXQ54u%2FKnpObFFXv8FnoCMrfVggz3gchZa0Kb1149zFKKoJbLyYlE72nldUUCDoJnT7fq4QOjebXFFksAQFlm75EDZsERgZYrIC9UPpGOCQU0SxYL4PRvBdr5WKyx8af9eUVXiKoayk8BzebY9hWRx57fwAnGhj6LJ1lUEEHXfqalqYqsD3izEhN38VYDB1CnrhAaM5zJQY%2BbFrR%2B23nBWoIxA%2BNTqmi4t7kkRNhT3QJx9sbohtry9WaLqpbkJAR7DSbJLI7skcDsjGZ8ClKNsX6Qxc3I0kH6nxauhKPUeiVClML%2Bk1cMGOqUBkP7c5MkbpXG85HLlwmYyU0Bg2RfdHhK%2Fpb3kOhbGWFOmOfsLPiH%2F5k95ZFFXmSka7EStik%2FG05xDS5EjvktAmFDYGtF9QnAUJr2RVoa9pnWmFdhsSEwyKABzbG19WZD0oRIfIVk935%2B9%2BAN6tSiRMF3BQ29dg%2Brpb9E6cxmtl50QRP%2FV8V4uXhmEDMibSC0sqyA1dx0762zdckijJnWFM2SWGDNv&X-Amz-Signature=95d526982549914d7783695d06bea41a50225f6571a3946187554cdd381adfb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJI4C47F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD0qqIitwxequ6rbwh1rORi0RNIYo%2B8ykS%2B0VJwd3jVdQIgNUsenXSu1Vx7lWkLyme3ZLVMa9%2FtXJCEpa5pgLRAvBgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMkuQ7Aw38IZC45PZircA8ZNR57g23rh0O2wt4hhMRZS5uy42jPCeSSdYbmerPG5LYuytnJ%2Bc6jezfOpHbyKxf0jusBehy%2BKdnYhgczw%2FFkb1GFUGKirtEGb7ZqU7nZ1F7QqgUElLKVboUuzfFdIspV%2BYPKXlbE8oXdhc4uVWMYX2pQ2o2PXkpusdsFPMmPN4eYxb5YWtyMavrI3FiLJLib%2BM96fbY1%2FR9jJlbRqlc0U8D8LOPSDTYRX3QBLVKb9d7gdwoGPWVsEk%2FfjGL%2BRF1sjcuGgyxc3b67171FDS%2Bwp4Oxc966KuVBPGAlLuvBfAEvVgWZRHadPrri8zXAYDKH%2BoZnTAPmL2LjXQ54u%2FKnpObFFXv8FnoCMrfVggz3gchZa0Kb1149zFKKoJbLyYlE72nldUUCDoJnT7fq4QOjebXFFksAQFlm75EDZsERgZYrIC9UPpGOCQU0SxYL4PRvBdr5WKyx8af9eUVXiKoayk8BzebY9hWRx57fwAnGhj6LJ1lUEEHXfqalqYqsD3izEhN38VYDB1CnrhAaM5zJQY%2BbFrR%2B23nBWoIxA%2BNTqmi4t7kkRNhT3QJx9sbohtry9WaLqpbkJAR7DSbJLI7skcDsjGZ8ClKNsX6Qxc3I0kH6nxauhKPUeiVClML%2Bk1cMGOqUBkP7c5MkbpXG85HLlwmYyU0Bg2RfdHhK%2Fpb3kOhbGWFOmOfsLPiH%2F5k95ZFFXmSka7EStik%2FG05xDS5EjvktAmFDYGtF9QnAUJr2RVoa9pnWmFdhsSEwyKABzbG19WZD0oRIfIVk935%2B9%2BAN6tSiRMF3BQ29dg%2Brpb9E6cxmtl50QRP%2FV8V4uXhmEDMibSC0sqyA1dx0762zdckijJnWFM2SWGDNv&X-Amz-Signature=4ad13535079e340a15f4d65ce18bd382e5d3d399e0df14c5eddb006612726110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQDSZHG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCGrFhtNnYZM1bhSMXAnJkaq7JBXFG21oAX3rObBH80hQIhANtoWCKUn9bDGqsHjbomzNeTTAWuPwnFFX6JOFKnqmFbKv8DCDQQABoMNjM3NDIzMTgzODA1IgwvewBgCrXu1d5%2FcKkq3ANqaYAihj28JugUDKWI7hmy6WZZ3Ocicr6%2Ffuc%2FL18zSAhEGtghWOekA2RpOhsY9UNphtbdWaGwCuYJvMlJbLNzNg2pWrSLT0JCg87LicNtkkckoxN6NptvLDXcH9XTlcReiE8Cn20mT4t8OKsWGVfnqVmYcg6wLVMgZM5Ob0gbvGBGSrC%2FEJIvK%2FTCOJW0aU%2FjboRxZrH3PctPNXo4OdcsxDliuViibPh5258hFjj1T6%2FluDGSmDDIVOOfduN%2FTJOgKTd3J3jfBaERvAcHKMbk%2FfDYmVkhtY4PWQj98JZShYSgPR%2BA9%2FZihIHDche7%2F98ZX1RytKa0EbEqDfndoccbyyfNptP3bxd1hm9FpwplCtX9ECKG2u2xRpD6%2BBJOBwZoH1yo6gZcz91oleJUkNN1DTb767RbJMlaXPOJxqgrzAXvUDQmu6TqS%2BX%2BLILzBWcGlIXHHpHoEsKP1M06iXyQ%2FgqPafAvP9Ykgw8J1JGuJ%2FAwTIYNLiq%2FHDl1Vc5dRkSP6nFEexWcRujnY9d3vQ0i2OvPV%2BzoGAQJe%2FK12jG44AJ%2BgL2uKevzwNNX6sp2QluZoJ6%2FytSGRbO62QYgwulhNDiNvrF9rTDWdd7iiSLUgzc%2FpSWW6cmEXE19ujC9pNXDBjqkAWTJq66uqLzF32auQtby%2FyUIFsZxCVd%2BX1LTg0dwEFwl5kz5m87FDS56ch8unTdaTZDrTYJM1BTSlbN%2Fin74JB4p2zKONE%2FEqt8xGwdkVTUZm%2BJp32k8IHfzH%2BpsZe67gAkSW0V78aimzptpWUDVUTuMXmzHYLG3eL1H495H%2FC0zdzxT4ivtef3KnnHE6kBGa6EogOsRpP4ySUmjJQOpq5zk6UpA&X-Amz-Signature=4812b6ac4b05a264fd4a0430f6ab76c27c33f9e9387f8fed664b2f4002e71976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTENPFR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHTFziTSHtSHl5N4ylNj%2B5JrQ79R6MpJBeNvPYuS6Td%2BAiEA15C21c04mu9fVt0lcQcYWaPge2B%2B6SjZtM8Zy6ncJSYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAtFgnLeiwpCMsSNnyrcAwuU%2BGMD%2FdWbEuj%2BIDvaVOwubGFtArzAqHqKkYH4O%2Ftc38d5GDKQzIpZrWmC1adhhne0Soy29CPvx40rYWoIIWx9wSdthD0gywtjH7xkXUavPWf66kpsAAYpI%2BKw8p21IsZNzciURdXJyVjYPhIfOsh8YbnbUZom7bl7rp44BKyyZSNihPW7NrD073VnBQSOU0wAJoIBP5HuqfLDRWTHMuOhV%2BpMhALwH%2BPQAqV2etm6%2BXlXYR4jwdoNE9alDrLMI%2F%2Fq6YNWrqzVxfke7FDGhz5s5w7jR5%2Bqd2mfg5JMwOL73uL0T79WGrFH5nNbSCxOUSp2DJOPW4umhrPaYsq55r0sf6lBr2aLGyVRiF%2Fh3TRZnu6imMJx08Ln0bvzN2UzOswChqjNOoOn6dHEc3xATpuzXhOLkqF%2B20XHL3jAP6xKYSTLqEvagP1GsRRZ9LR72mwswIN3EYXwnngLHQNoiGQh5%2FCXF88MJL4rpzIBUjmx0LJ6waSc5mHxP5%2BG4XSWYCXXdZ44%2F9FeSc1bXp0R0NpQebBxw53rfw86aLB7spGQNvc6LQzZyH5XXzZIF4hDQjUgrtNJtf03UUOlaR76qLwD636vi36gpo8rGReZ1unstj4hdTaUAVZNLEZuMOik1cMGOqUBWt5cOuj9D0aeenwHX6Fd4db4Qospl5O30n8OoBJU2Zrgco2Xdq4JifYrXMRjz7D3f0xO6KB3VKVigTG%2FgPiC1XRUDgQ55TJblRQuvrcvVjU4wh0dVFlczuHtJSYPSteAYuON2SEM2OV1Wz64Om09gM9cPS%2FT2T9bSQXbfkrTZmhu1mRWP36L0Hz%2FFQzYecQNHwHhZzS4VyL1Wm1saGe1rjon1s8M&X-Amz-Signature=27d83f1670c7f609066c85063202251b9ab6481b399bbe2bde0fba2851d471e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJI4C47F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD0qqIitwxequ6rbwh1rORi0RNIYo%2B8ykS%2B0VJwd3jVdQIgNUsenXSu1Vx7lWkLyme3ZLVMa9%2FtXJCEpa5pgLRAvBgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMkuQ7Aw38IZC45PZircA8ZNR57g23rh0O2wt4hhMRZS5uy42jPCeSSdYbmerPG5LYuytnJ%2Bc6jezfOpHbyKxf0jusBehy%2BKdnYhgczw%2FFkb1GFUGKirtEGb7ZqU7nZ1F7QqgUElLKVboUuzfFdIspV%2BYPKXlbE8oXdhc4uVWMYX2pQ2o2PXkpusdsFPMmPN4eYxb5YWtyMavrI3FiLJLib%2BM96fbY1%2FR9jJlbRqlc0U8D8LOPSDTYRX3QBLVKb9d7gdwoGPWVsEk%2FfjGL%2BRF1sjcuGgyxc3b67171FDS%2Bwp4Oxc966KuVBPGAlLuvBfAEvVgWZRHadPrri8zXAYDKH%2BoZnTAPmL2LjXQ54u%2FKnpObFFXv8FnoCMrfVggz3gchZa0Kb1149zFKKoJbLyYlE72nldUUCDoJnT7fq4QOjebXFFksAQFlm75EDZsERgZYrIC9UPpGOCQU0SxYL4PRvBdr5WKyx8af9eUVXiKoayk8BzebY9hWRx57fwAnGhj6LJ1lUEEHXfqalqYqsD3izEhN38VYDB1CnrhAaM5zJQY%2BbFrR%2B23nBWoIxA%2BNTqmi4t7kkRNhT3QJx9sbohtry9WaLqpbkJAR7DSbJLI7skcDsjGZ8ClKNsX6Qxc3I0kH6nxauhKPUeiVClML%2Bk1cMGOqUBkP7c5MkbpXG85HLlwmYyU0Bg2RfdHhK%2Fpb3kOhbGWFOmOfsLPiH%2F5k95ZFFXmSka7EStik%2FG05xDS5EjvktAmFDYGtF9QnAUJr2RVoa9pnWmFdhsSEwyKABzbG19WZD0oRIfIVk935%2B9%2BAN6tSiRMF3BQ29dg%2Brpb9E6cxmtl50QRP%2FV8V4uXhmEDMibSC0sqyA1dx0762zdckijJnWFM2SWGDNv&X-Amz-Signature=957cbaa00fd276fe674511f8753063085c93a9ce7ee7b609edabd8a1bdcebaed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
