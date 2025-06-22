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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY2WJLB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDkFx9phgELfE%2Fmu0FJgOWjam9Ha%2ForkSHrzKDp%2BDIbSAIgdpgWR60datwuURE%2F1VJD0IdrEgTsGm2DbUnL855H9T0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmIxPNuuJKdyobUfCrcAxgQ2UsjYVPC6etH%2BGcbCIkhH3Q9Swu7Bj3mB9tZaRu5vnia9ZhPhoj3SF5gFVz1sFwBenU4WC0o1GMfNHvMmlarr%2B5iwfw9MXxvH9aeI7bV%2BNF6UtAGZUpK7rvS4CILuZOdoRIfefoOR5PtaEjm3yBajqo7c81YlWb97Q1C6fS%2Fry%2FD3DsmxhnpJ8mWHuo1gim3UiuF0nHjhqFT%2Fe%2FlGnLzv4Ucud55L4P3adsfSwkiJD0x6DOsby33isK%2Ff%2Fp9ZfgVPDZsCE%2BxvjBfRmwBiTkfZJw5zvCpmeTIpOjqYNAx9hB1ggaYp1t%2Bd7HOLyLwJtLZm0kB6%2FHdELqZQGxJn7cpHT6Sg4WK7v29Chi5wY19mGQNITN7IxaRl2BLzaWC0drS2Ubb7WuE7g3XYR9iuaCJbAl2S7RKlCvb2af%2FvOy4uaFSnpxKq%2BWf13dSMSysmXm4IFQTj7KUo5xER6LyqOuwhMeec8N6n3lmetFvSsCWrdBKh6K3wXYTBu8CKDTmKmgrWa91YrmkuJXM0LAriC0SVBIn%2BLmX%2FdrvHbMbEjZgZMtwQV1J8ETUAEvfzUkzMIZQAHR1RvlqytPTKZHtSYBvFyd7rbmC8%2FtrRT3fIfkFqhRfVyhNu9IbbF6fMNiW38IGOqUBt246G9sgSLl63HjaDqUjomtYadD3ChO%2F8zhV3ofoNJwrvrA%2B8KPA40ADOtfVXAJkHX8gN4Ls2%2BlwAz9WwBI%2BN5nEDJ0IrgIynoqznXKCf%2BRtt8%2B9BCk5IUQlMkng9xEcTBYy7RmbN%2B6E6N6tFXcTD%2B%2FKXuGcF9xebJ0C4DoK1ofcEbj7rOLTDiucYTRJq3dwqmxxzLcspgY9PHMf5WhXQT8afhMP&X-Amz-Signature=800d6109aee0db494663342d696453f78891c35a543a478336771bb3c38912fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY2WJLB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDkFx9phgELfE%2Fmu0FJgOWjam9Ha%2ForkSHrzKDp%2BDIbSAIgdpgWR60datwuURE%2F1VJD0IdrEgTsGm2DbUnL855H9T0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmIxPNuuJKdyobUfCrcAxgQ2UsjYVPC6etH%2BGcbCIkhH3Q9Swu7Bj3mB9tZaRu5vnia9ZhPhoj3SF5gFVz1sFwBenU4WC0o1GMfNHvMmlarr%2B5iwfw9MXxvH9aeI7bV%2BNF6UtAGZUpK7rvS4CILuZOdoRIfefoOR5PtaEjm3yBajqo7c81YlWb97Q1C6fS%2Fry%2FD3DsmxhnpJ8mWHuo1gim3UiuF0nHjhqFT%2Fe%2FlGnLzv4Ucud55L4P3adsfSwkiJD0x6DOsby33isK%2Ff%2Fp9ZfgVPDZsCE%2BxvjBfRmwBiTkfZJw5zvCpmeTIpOjqYNAx9hB1ggaYp1t%2Bd7HOLyLwJtLZm0kB6%2FHdELqZQGxJn7cpHT6Sg4WK7v29Chi5wY19mGQNITN7IxaRl2BLzaWC0drS2Ubb7WuE7g3XYR9iuaCJbAl2S7RKlCvb2af%2FvOy4uaFSnpxKq%2BWf13dSMSysmXm4IFQTj7KUo5xER6LyqOuwhMeec8N6n3lmetFvSsCWrdBKh6K3wXYTBu8CKDTmKmgrWa91YrmkuJXM0LAriC0SVBIn%2BLmX%2FdrvHbMbEjZgZMtwQV1J8ETUAEvfzUkzMIZQAHR1RvlqytPTKZHtSYBvFyd7rbmC8%2FtrRT3fIfkFqhRfVyhNu9IbbF6fMNiW38IGOqUBt246G9sgSLl63HjaDqUjomtYadD3ChO%2F8zhV3ofoNJwrvrA%2B8KPA40ADOtfVXAJkHX8gN4Ls2%2BlwAz9WwBI%2BN5nEDJ0IrgIynoqznXKCf%2BRtt8%2B9BCk5IUQlMkng9xEcTBYy7RmbN%2B6E6N6tFXcTD%2B%2FKXuGcF9xebJ0C4DoK1ofcEbj7rOLTDiucYTRJq3dwqmxxzLcspgY9PHMf5WhXQT8afhMP&X-Amz-Signature=6e4ebfaea1c090cb7ebdce96d284f03891d243476a85d2dc390d8502941da02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY2WJLB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDkFx9phgELfE%2Fmu0FJgOWjam9Ha%2ForkSHrzKDp%2BDIbSAIgdpgWR60datwuURE%2F1VJD0IdrEgTsGm2DbUnL855H9T0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmIxPNuuJKdyobUfCrcAxgQ2UsjYVPC6etH%2BGcbCIkhH3Q9Swu7Bj3mB9tZaRu5vnia9ZhPhoj3SF5gFVz1sFwBenU4WC0o1GMfNHvMmlarr%2B5iwfw9MXxvH9aeI7bV%2BNF6UtAGZUpK7rvS4CILuZOdoRIfefoOR5PtaEjm3yBajqo7c81YlWb97Q1C6fS%2Fry%2FD3DsmxhnpJ8mWHuo1gim3UiuF0nHjhqFT%2Fe%2FlGnLzv4Ucud55L4P3adsfSwkiJD0x6DOsby33isK%2Ff%2Fp9ZfgVPDZsCE%2BxvjBfRmwBiTkfZJw5zvCpmeTIpOjqYNAx9hB1ggaYp1t%2Bd7HOLyLwJtLZm0kB6%2FHdELqZQGxJn7cpHT6Sg4WK7v29Chi5wY19mGQNITN7IxaRl2BLzaWC0drS2Ubb7WuE7g3XYR9iuaCJbAl2S7RKlCvb2af%2FvOy4uaFSnpxKq%2BWf13dSMSysmXm4IFQTj7KUo5xER6LyqOuwhMeec8N6n3lmetFvSsCWrdBKh6K3wXYTBu8CKDTmKmgrWa91YrmkuJXM0LAriC0SVBIn%2BLmX%2FdrvHbMbEjZgZMtwQV1J8ETUAEvfzUkzMIZQAHR1RvlqytPTKZHtSYBvFyd7rbmC8%2FtrRT3fIfkFqhRfVyhNu9IbbF6fMNiW38IGOqUBt246G9sgSLl63HjaDqUjomtYadD3ChO%2F8zhV3ofoNJwrvrA%2B8KPA40ADOtfVXAJkHX8gN4Ls2%2BlwAz9WwBI%2BN5nEDJ0IrgIynoqznXKCf%2BRtt8%2B9BCk5IUQlMkng9xEcTBYy7RmbN%2B6E6N6tFXcTD%2B%2FKXuGcF9xebJ0C4DoK1ofcEbj7rOLTDiucYTRJq3dwqmxxzLcspgY9PHMf5WhXQT8afhMP&X-Amz-Signature=27b6540a394c82013dd0a272d70cd827104c3811cefb19b6f6557b4ac6452c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3DQEYI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDnjHDADQ5IF3LoUrd6grPtqhzoWmFTtpgdzg%2Bf38Q6GQIhAN5bBqMhDVfazu3mPX8JHhlwXxzxvrkQpMjTJugbNK6kKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9apoRDItaMJa7v0Qq3ANKiBRZdcpuapzDQnM2rOc5iM1ojZjCewWqj5pmgPeg%2BWx8tzRcGiI%2BVkxMhA%2BHoJUXK9gTQ3vNj86gFlOkoSHWtqgcpoB0jlb%2FNn4FLPig3kBsN6KbK0o86bxuvt4g%2FCnDi7YZJeLTD4X4KHeF1MX8KRTk07%2FVsCDvjjbhxw%2BBY10JLnvFwhNlKXcJ8gjAJkTBO7XSd0yl9ZQJ3pdd0uEaX1ceURMkZI%2FegA8IDiZ5Zdd1lV3GcqlDKEctuOHVX2yQcSxtfPV%2FHf6xnlvBSor9FtHs%2BwDjQ4EjH6%2BTC4wVtzqlCwx%2Flsy0HX2QZWfouSh%2BJvhMMihGkoDF4vYaq%2BZFu88%2B4s98KlfKyxLlTI8eQm%2BkREHr6ubfDAmoxblpNqkEti5ra4YhBEi2LgmPPejAEQD3%2BcncmHISsxkKgzbjNUpg7FdTjOJy8IxgK6SNcSUh0EAQuT3XCwfPEcON6dXi4hIfwFPg205BVwpgLFL8p07UHkBb8LpZpTc9pPfGDdArGAr1OR%2BtyuxFkL9MA1jJ2%2FvH2R%2Fn0RcguzNg6oqKiq%2Fp6sQ6LIkjIYgpkP3QqWPXIDW3cWMUdZM8IUStcfbEtEb0qjKhL7QMbjMLD7fATu5Y%2FJs4za5D0IHM1jC9iN%2FCBjqkAciEUtGRtDRUtvz4xrH3sz3ViUcZPO5%2F9EKE5BR%2FQWAoh2zQoq9jCKsmv3tYdnzcPhqMtd21YNI0AoPHhwwkZs5vOR6qxUVWxbfq7gh5JCwdHFEUurJSTCokkc%2BYuhHDGZQQmaWMFOmULs%2FiMYRj7uaHFueHvU8WwZCMycS6jadtgknSU%2B4rZKy%2FuE8K0lwxzohzRQfZm1oTXPPfr2KqaoMWZnt8&X-Amz-Signature=650cbdf9b18fc415d9565d4b2b64208d0af8b8c9c381eb46594d935c03e570d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGEK2NI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9FYgZAHI%2BvO4BGsCfNSm%2FAZcs1WPSZcsA4Z%2FhFQD1GwIhALLsDz%2BmMWgHYO2NKp2nYie0CsGI1ZDZS21CqOtzMRm%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn75TSYRa5RoOmqloq3APicHCndzkDFw35C2Nm4BLAAVGeUFqWQ8yDraLDXxkO9wfw9nriG2Ryyz5EFu5UzYqLMtow4lqmA4U0VmbKbO9ql64UhuCealliuILCDRD36gZQ5BvCT9WiaXQbiasjHm60%2B1WBUC8DB5h2dNuKurrWvX0J0Fh3rkyzzZkV8UDCJk%2BxRTCfj3D7Sz5gIaT1cCD8bmdvqkGeu1bQhtvDvvwFdsjCpVnEZ%2FtyKWFK4liO9q89piDB%2FF48F9PV4vyed7vSVZ6B9BY1Y6hWKyour3LKJhEH7Mm9TMmSZIWY6ZpWOQjWBMU4rav%2F%2Br%2FpT23hbXWdWkxIlmu5wbUA%2FTmJyhlxMYT0w3prIniPlgaSeIO3CcVrgMK3d8n9NXzC1AhhDvJZxMfv2ngp4lJQgwpKmwdL6b5mYE75AAdvEr8JfuvgyXmeisOs38AnK8pdhtndriKFyqai4qSrmlGbOClQjCyGYLNlzz2v53nCpfuUQfQidcortXLSTYAzKbBbnH2ER3TXRqdWr5yWsKBcXR%2Bd%2BK1i14tPeOSd60P20n8Duyjk42adU97KuUwAbD655X4wgktygiWenjnTAJFNP0oavAqcVjLmp%2BWAKxUz5w7se%2FJBpFwTDo6xAalYrnn95jC1q97CBjqkAfGLVZFxlrnbE4UKIU0Jv64%2BoJRx%2FaPmM4AzlqZ466kXHUbOQQ0U728FrD5nzgSVef%2F3H8WIZL2kaQJkAgQRzaKDSQ9CTWSNLBiEfDjoNll5yQgSp0RpvPQjZpBp9EPl%2BFQKmHDchfCuSSK%2F8QinDBF8x3xyNhCJMKDcKrKO95LsmyGwFLH6ayardCS7McYpzzWGjAoD%2FLk%2FJQawLRwCqS82RtD%2B&X-Amz-Signature=697105f9f16ef94a8d365647fe591edfd6a3fe3794e6e038d604b44d56d0998b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY2WJLB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDkFx9phgELfE%2Fmu0FJgOWjam9Ha%2ForkSHrzKDp%2BDIbSAIgdpgWR60datwuURE%2F1VJD0IdrEgTsGm2DbUnL855H9T0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmIxPNuuJKdyobUfCrcAxgQ2UsjYVPC6etH%2BGcbCIkhH3Q9Swu7Bj3mB9tZaRu5vnia9ZhPhoj3SF5gFVz1sFwBenU4WC0o1GMfNHvMmlarr%2B5iwfw9MXxvH9aeI7bV%2BNF6UtAGZUpK7rvS4CILuZOdoRIfefoOR5PtaEjm3yBajqo7c81YlWb97Q1C6fS%2Fry%2FD3DsmxhnpJ8mWHuo1gim3UiuF0nHjhqFT%2Fe%2FlGnLzv4Ucud55L4P3adsfSwkiJD0x6DOsby33isK%2Ff%2Fp9ZfgVPDZsCE%2BxvjBfRmwBiTkfZJw5zvCpmeTIpOjqYNAx9hB1ggaYp1t%2Bd7HOLyLwJtLZm0kB6%2FHdELqZQGxJn7cpHT6Sg4WK7v29Chi5wY19mGQNITN7IxaRl2BLzaWC0drS2Ubb7WuE7g3XYR9iuaCJbAl2S7RKlCvb2af%2FvOy4uaFSnpxKq%2BWf13dSMSysmXm4IFQTj7KUo5xER6LyqOuwhMeec8N6n3lmetFvSsCWrdBKh6K3wXYTBu8CKDTmKmgrWa91YrmkuJXM0LAriC0SVBIn%2BLmX%2FdrvHbMbEjZgZMtwQV1J8ETUAEvfzUkzMIZQAHR1RvlqytPTKZHtSYBvFyd7rbmC8%2FtrRT3fIfkFqhRfVyhNu9IbbF6fMNiW38IGOqUBt246G9sgSLl63HjaDqUjomtYadD3ChO%2F8zhV3ofoNJwrvrA%2B8KPA40ADOtfVXAJkHX8gN4Ls2%2BlwAz9WwBI%2BN5nEDJ0IrgIynoqznXKCf%2BRtt8%2B9BCk5IUQlMkng9xEcTBYy7RmbN%2B6E6N6tFXcTD%2B%2FKXuGcF9xebJ0C4DoK1ofcEbj7rOLTDiucYTRJq3dwqmxxzLcspgY9PHMf5WhXQT8afhMP&X-Amz-Signature=30ef98259edbae782f678b10485dc316bfc62510ea8160001f39eed15ebf5b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
