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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=48483c4a7e8b7a4e1e27d4617f3be90b7cf437d5fb3fd83d8d517bebc611c668&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=fa2f362be1851406f29a0ceeceb7c8003d5f90589f136c423fd7c2d3c9c04f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3EG7P2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBSwo4X6XqzyTFX77WlgDreRZKXcSy7T6Af9g3KBzigBAiA6529ODE2QJNBHWTpYR1LEy5Q0H1AzwIDxGmMEDwsWWyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxCuHXYgpqpy%2BrBsKtwD9GrB2AOeYHl4uXARRwNIrDgc5T00mXboyVleBGcT36f7wSKANHtNplyVK%2Bl1QVwBmYwMFOIZ8kDejkeVLZ6wLpEQOtLkYjsKmKwvm59fh%2B%2FY437XXbUb3XPyP5rt3fn6ayF7DRyBKhJrCJsKWua3lE3km6BKrE9rcH1wKwqve0dGEPbh0GAH6jC8hU%2FU5gFrFmjVMDF640nIrvxTBmUagpzD25hcCun7PPbkfHsm%2FiLsfHYuVZ95Af3jRgSCqJg9Tqmlg%2FmszAlQJ3LkRDKALoY7CMnEMXi%2FQzUtfoQl4QWJ4qcIae%2Fpa2lpJ9N%2F1%2BZtcq6aKqei%2BlKYjnpn2iYodLiqcEpxYdCflWdVkR%2B52Ea5RYushrvVIkHoXwZFJALCu2VSTvOqBlDnUrV%2B21elnkzeGgjlDRdH2VvLpZwzfB2kZJpaiV8hxRvwx38zAstbALEJJiTgYfce%2FJcbux1lx1FtGlfOSKvK1FeIgFc16HE%2Fqfugq8PcVx1%2F0OrvuZtsDyFgH3OUGj82CR%2BndCZInuq3sMoP1HzobAQmFi7jsQaY2P9nDPc57aECmjQYNRqjug20z9vqf1nPfo%2F31VZRmWD57bt23a9BxXo4xftbFJJchm2%2FA%2BmH%2FYRRBuYwq73uvwY6pgHb49pwSX0Nlz5ulMKqR1zYoGnNwVfOlJlIGbsHsZR8HpytRtrg6%2FNnnFxjokbcHXgaPzKWF58JfZu0RK5NJaRwfjf0EsMEg1j9NGeZrElN6%2BfewfftEZ1kq%2FLPW7c%2FBFi8Y8yn44cjBH%2BubVY8bXpwJKVTNCXr2cE%2BmS2WcdBNL95yFE7u47ROW7MzXhvKAsvVES7Odvg7lCgAmJOw9NLFQR%2FDxlJd&X-Amz-Signature=740ca36801a707e28480ddeabd247c9dc1f709b067fdbefa5ba6ba47e266933a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USOWOPAQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCl9vMJ%2BX0VSAMns7Q%2BxYa5GS%2Beoq21btoRi04xuFs3jwIgHQ3k2KVe9irOK%2B3Mjjfy05OEIx35j6aoOw8TYM4FvZgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNuNFFLlElqFNosTyrcA9v9C6SPGnPxJ%2FKHA9ex4UhhcwkfNlPSlq2A7o5pbJQXVz0thnWEdEsUNS1FZVU6TuVBZ3ldUjsq2TzNqEV1Azp5NA75y8xQjtieLtPV0a0tsOF3DJGD7mpySXGSUPZk4jBxGjx36%2Fp6t%2BnUq3uSB%2BMxh%2BESJyP23S0v5dtlbgNfSIiPDQmEJJqJRx4fpe0z16g8iHaKrCHF2JtuyTlt7D1tjPVGX9Rp3gRF1MOdLVdxCbrdMQaSk8HrTD%2F5hNpcAoSG2D4ycK91eIk76Onl7sVHzvBtxCHBBYOXaq0l%2FxqcedQkBIQCLIK8lyVR8o%2BI5nfBX2kiwr7ALG3ZlfmJK5%2BzuISiHIbOjqoPXyyrTRFaYZOwAvOnxG2mT0bDiR8OXZt7Njujnvmnyx5IRC4SSIi%2B3DjLbSLV%2FnufEg4Gahs3m7KvjOCX6cavBrmFSgY9zvYcBoMJcaO3vk0JFj2sd2yj9okI0gU1V9n4KdYxcAUNCLg6hWu934Kd31jDBVAybb6evTbbNYFsF2NwnF4mbhv3NBCEXRmtwuwZISYDAVLluJJOE3Pt%2FAja8YQ8XWiohUBjxrUM7c%2BQxyk3%2FwZSkvxxMrXDbiTpHTg1ftLUWcrKmbjHFJgU%2BmYBeM9xMKu97r8GOqUBIktypgJ2iMdmoGuNRTyUGfnxY1cVa9i4l7b%2BdSxakn0VpB3dXES%2B3nHpqjtRa0%2FJTlNiLAAPFb0k3Wcew3CrfRBR6OlgHHICxaA25wimaDsyTYG%2FCejhBv5BP2PfHRpG8pEHXDIz1VCI4QcOG%2BBDB2qUmASlXeqRRABsTBf6olkvi9cV2YywrH8bz%2B%2FXS03NgDfUkwB0re%2BLxWEsICDLHGKtRHSm&X-Amz-Signature=991a1b88e568f021df00a91de5435735d118e0e2926a15a136bcbc84a1df238e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=2732a8d0ba37fc12fe3a52295f6dee5fa81e25aa220cb76d22c010f48516fd36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
