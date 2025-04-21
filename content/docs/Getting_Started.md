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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOFERZO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHe5ry2x8SaEN%2FRrqNPlKRDHKk47M%2FuPMd%2BnMsHke3dbAiBsmXyXYzWGAXP1aQ%2FI5yrmlNQWBuRsoowOiO3k9KEaFyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkCP4ToXERtmmDDjPKtwDlc5aRS0IkspPB66jghEGivLepAmwUMXtF1Y15gMeW2MHKmyvFTH%2Fnn0nvqEcuzawdT9RQaWUKgWUkavJLBqccRT2%2BOl8oHmeqEwoYSA1KJ6si0hchxlIbMV7SEtULmSiRkGLH5BS9wfPdRX6z8T2Vhtnj2qhrUIvSoMKjPYwt%2FCe5hGoJv7fgA3vv0xefD7wKFO68FlTHO8p0gRKoWPHnd3TFyvegz%2FBwQxgTRY6fenoEYyEekGVSWhAgncYfZ8LCtg7Lc7YQkrlIJkaaaluWpJN18Za29Pjje5Odh2B5saB1d%2FebYw5AdGWpceXP0oZoWAL1hOi2iFQPYZTSNqI1qMB37mY9MLSBS184%2FNbCl9p6gAouwVuzsStUvTXoxJrhkfmCDjB%2FVjSxt1N2UcsmJcAkQ8%2B7l8yH0OlBgo3CYRmHiHrw0gY1NX0vg7hgRxSKn%2Fp7JF1sVZrT3sSSkysN%2F3NWqhWMU4qlkAqzSP0UTylENYBWdZP2vTojEb6bNqKyz6wGsauE9NeoD7XZ3dF8IaqfkOp0XJajNE1WfzouYfuMlEarlx5GobXIPL85nhJANaPPIcFvcaF6PozuOtqe8wcbVKgp8V202toatcd%2F3mcyINcMgGNX7gsnB8wxOyYwAY6pgHsJoyHBLGJvy6ttx5eStqh6SDbfOlq2oNRSGxKzj5AzqusirYPKcgAx83S2P24U4W4L5wCJEIwRNkGdzt%2FXkmJYcxqSMWk8BtYb8%2B4o%2BF6hHEGAjQ8WBZmmNdzOooiiwxMyae6qDJojnYUJ3Ig4Grd40zWu0UqvcPcMY3AypvLNXDWnx6m5zV7gOt7MPduTSjrMNfGDycGhOTyTXYq8Qi6slaWsIN4&X-Amz-Signature=6049d3cdbeec347261065f2e5d459904faa48c890d01871b248c9d1c3a4c86e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOFERZO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHe5ry2x8SaEN%2FRrqNPlKRDHKk47M%2FuPMd%2BnMsHke3dbAiBsmXyXYzWGAXP1aQ%2FI5yrmlNQWBuRsoowOiO3k9KEaFyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkCP4ToXERtmmDDjPKtwDlc5aRS0IkspPB66jghEGivLepAmwUMXtF1Y15gMeW2MHKmyvFTH%2Fnn0nvqEcuzawdT9RQaWUKgWUkavJLBqccRT2%2BOl8oHmeqEwoYSA1KJ6si0hchxlIbMV7SEtULmSiRkGLH5BS9wfPdRX6z8T2Vhtnj2qhrUIvSoMKjPYwt%2FCe5hGoJv7fgA3vv0xefD7wKFO68FlTHO8p0gRKoWPHnd3TFyvegz%2FBwQxgTRY6fenoEYyEekGVSWhAgncYfZ8LCtg7Lc7YQkrlIJkaaaluWpJN18Za29Pjje5Odh2B5saB1d%2FebYw5AdGWpceXP0oZoWAL1hOi2iFQPYZTSNqI1qMB37mY9MLSBS184%2FNbCl9p6gAouwVuzsStUvTXoxJrhkfmCDjB%2FVjSxt1N2UcsmJcAkQ8%2B7l8yH0OlBgo3CYRmHiHrw0gY1NX0vg7hgRxSKn%2Fp7JF1sVZrT3sSSkysN%2F3NWqhWMU4qlkAqzSP0UTylENYBWdZP2vTojEb6bNqKyz6wGsauE9NeoD7XZ3dF8IaqfkOp0XJajNE1WfzouYfuMlEarlx5GobXIPL85nhJANaPPIcFvcaF6PozuOtqe8wcbVKgp8V202toatcd%2F3mcyINcMgGNX7gsnB8wxOyYwAY6pgHsJoyHBLGJvy6ttx5eStqh6SDbfOlq2oNRSGxKzj5AzqusirYPKcgAx83S2P24U4W4L5wCJEIwRNkGdzt%2FXkmJYcxqSMWk8BtYb8%2B4o%2BF6hHEGAjQ8WBZmmNdzOooiiwxMyae6qDJojnYUJ3Ig4Grd40zWu0UqvcPcMY3AypvLNXDWnx6m5zV7gOt7MPduTSjrMNfGDycGhOTyTXYq8Qi6slaWsIN4&X-Amz-Signature=9257d0feb69989a7b947d299634d9b05036d035feca48fc8c88622bf8738c81e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRH25ZS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCs7%2BmS9HdpxD5F2MEl1ypCJTLnpdNhpiH06wcAgKJJEQIhAOAIo%2BETFZfFjIWDlPoHIzGXjE5CvOwFW3uzfR8o%2FxhXKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmf46HlmwkhG%2FbM1Yq3APSBwN4ynF3Y2oEHk1qCZ%2FmVmrS6RaFnrpJVhKuY9gSJHcnVeZAuTFfMMQ8ypJeHU5t0Bf3D6U24kf5nW2yFpHMPzicZyPzJU2AvAAe3YP%2F6TGjUEOWkJX%2FedrzLo7R3UaxXMQTy8OxXX8Osvkx1utqtUCwEHL64K4Zz4ZTAqh8ZykC3Bcqe3mXgufJLmISKAMMroWnaj3Fjgk1wQewIj55jhnpWbdKMbFi%2FH25Am9Cd2xNUtZdNWQCRv3HOWkkzNvybwHB8kpYxbLlMYOHANxK6O4LrkgypPHUAhOdnGl%2BSK3ExzoNnKmR9J2atHwYgOz%2FoNGXjtFMuK%2F%2FoPcWqs%2BsD8sJHM1RgnlEXpICLgyd%2BMeHiQI06zymUPFvTcFtBbQh0AeWKsnJSGr6jwAS6O47ZpUkTfogh0AYBYHGVK3DRdWi68Dp580pkGBDT352Pdk5h%2BF5%2B%2FvX67dpb75ez%2F%2Bj%2BLIZOtOaepXdZsXS6BUmIlkbJo0BInjzbgevjbaHq61p8sH6RyK94PnCHl4YBOLt%2BNZIuROKeZUKHPGMjHcN8R%2FxBHJoHkC%2BDOUElGU%2BWOPucnld6lejX0XPbw68A4iBch9Abra9d5ek7W%2F3pwXFF4OPzmQeA2Nlf10SUTDD7JjABjqkAfHn%2FPBVwP2ZY%2FPzNYUytpqiBNdGSoTw2g7eByu4045snBwYYV4dXn0E%2BaMkZ7SUEzKRKYnMDObQ8HKe2DA8AYk6u1eIrKx0ZMYB6Cv%2Fj%2Fd7pLyUMzmDwXBf2KNrDkSEdkZOdfQHPNn7P5BDxdPGxgXi7PHXUdqHPwF798sMI2E5GXgQHLHpoPUSB6sb%2BIBobojCTUJcSxmHGaj6xqRwuWOGgSW4&X-Amz-Signature=9020656b412964827ab69b1dc7303f46e9fcdcd6f63ac2f3aecad67d33dc4766&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SXM4B5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGvlxEIRovBS0Ftkdw5ap4SA9AujDac3DNFzP7P1nh5GAiA9VSgz3rmMHRY3F3OTYMklCuraomPJ6Bu1SFGWCmjZbCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDZBG%2FJnO66IfFfj8KtwDJ3ip4JgDyEU6zEH6weZDk31ytxwlAsWEgYy6JCQGwjYdnvzCKh1WWG74uDJEQ46HKWM8Zp54O7v%2FMHxEHqbGJh9Rd3XHupffY9v56rpSMDdU5Cme4AQldjcSa2B4qPhU39kBlfRhUlrvdMRBBrLVi599Sy4An3hrxQReQ5zTCgDZWaVUxMEwnWis7dsJu7W22BxQ4mF1r5p07CblD%2B1kmEeIPNx9NeUR1gcAxOQqjuIG6G1JJ9mVdsaHz4xKX8EjZGUHiXUDHrpVgJp4LAJ%2BkpB3KP8oeibs%2BVbY8OVSbedMETbLNj968dW%2F%2BU8%2FBjMILBBXtXQMyyDX%2BlOLa0fv44kdgjJAz5zzl1lfbZ%2FXH7j1BeZLY%2BiOfS1tWaXyQRwC7e%2FyD1eUOX688aosOaY4J%2B783KSU6ZmZYeOh68Pnh2XlDt5eVTP4vk%2Fn%2FS%2FcIDlqlGg2EO1ntsZg6kfe1Mx4OlW0uK6s2P0%2BH%2B%2F7K%2FgTCip4c3ROzYC1olpvoa6pvw0j5sYS5OOUBeiOp%2Bym6UT2fKqIy%2BZma537Wg4Mf0bOUbpMuDnDY%2BJJtK3s9Gp5MxVQqGmXxKY65Eh%2BQwy5%2B5%2BmyOM%2Ba3yYNm5aURDEl1teUNPLvFFETHgPYrZwKW4wi9WYwAY6pgF36FC3FXOuWyH24iY%2F8u%2BVeuzER8h2gPJzSCEosaJcitjTEBQyr2%2Bn37aVE1856jlsRWlqTcXQ8cOlgt19QTZTeKtmg4yKgrEC2xzlscMutSy%2B2Vi4fv9SxwqEsVoFR8oQXV%2BflJRcXwDSoQvCWUnqncDN9ZDMcrOOIxw1FQksRMzADX4FXpJfYvsXq438XB7me0NZk6N60ns3B6WQzAqNkaZx67Lo&X-Amz-Signature=0138d0fd6dc87026fb7430c479dc8be4c60acb0e46ecd845e40146f9c6633059&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOFERZO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHe5ry2x8SaEN%2FRrqNPlKRDHKk47M%2FuPMd%2BnMsHke3dbAiBsmXyXYzWGAXP1aQ%2FI5yrmlNQWBuRsoowOiO3k9KEaFyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkCP4ToXERtmmDDjPKtwDlc5aRS0IkspPB66jghEGivLepAmwUMXtF1Y15gMeW2MHKmyvFTH%2Fnn0nvqEcuzawdT9RQaWUKgWUkavJLBqccRT2%2BOl8oHmeqEwoYSA1KJ6si0hchxlIbMV7SEtULmSiRkGLH5BS9wfPdRX6z8T2Vhtnj2qhrUIvSoMKjPYwt%2FCe5hGoJv7fgA3vv0xefD7wKFO68FlTHO8p0gRKoWPHnd3TFyvegz%2FBwQxgTRY6fenoEYyEekGVSWhAgncYfZ8LCtg7Lc7YQkrlIJkaaaluWpJN18Za29Pjje5Odh2B5saB1d%2FebYw5AdGWpceXP0oZoWAL1hOi2iFQPYZTSNqI1qMB37mY9MLSBS184%2FNbCl9p6gAouwVuzsStUvTXoxJrhkfmCDjB%2FVjSxt1N2UcsmJcAkQ8%2B7l8yH0OlBgo3CYRmHiHrw0gY1NX0vg7hgRxSKn%2Fp7JF1sVZrT3sSSkysN%2F3NWqhWMU4qlkAqzSP0UTylENYBWdZP2vTojEb6bNqKyz6wGsauE9NeoD7XZ3dF8IaqfkOp0XJajNE1WfzouYfuMlEarlx5GobXIPL85nhJANaPPIcFvcaF6PozuOtqe8wcbVKgp8V202toatcd%2F3mcyINcMgGNX7gsnB8wxOyYwAY6pgHsJoyHBLGJvy6ttx5eStqh6SDbfOlq2oNRSGxKzj5AzqusirYPKcgAx83S2P24U4W4L5wCJEIwRNkGdzt%2FXkmJYcxqSMWk8BtYb8%2B4o%2BF6hHEGAjQ8WBZmmNdzOooiiwxMyae6qDJojnYUJ3Ig4Grd40zWu0UqvcPcMY3AypvLNXDWnx6m5zV7gOt7MPduTSjrMNfGDycGhOTyTXYq8Qi6slaWsIN4&X-Amz-Signature=9923992c2d7cb8425eb245a61c0e0ca6dbd4f2cac7285fcabd793c84b35e89d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
