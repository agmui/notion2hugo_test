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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJO2N6Y%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqTcTYtfO3msoAB3ZTxRW2GMe3z7F6p6oXYmhclheUZAiAQRcXWclEgToj5vRd2NrhBze7fgxbatsz%2BQaLj5rtTKSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMwa6k%2FrgEHDad4j4CKtwDcSkYMyLApr9pfME%2FYxSXadlkFogekoimpcKYit7riue0NC1qwYbM7t%2B9Q33OPyTY04X3d3QOf4zw2I%2FsfH2ZO4OXq2MsRjGLl5XlUQjumzzVE8CvrT6vGUXW0xc9F%2BQpfGgM3Pu9oQyUaLHjK9Yl5A3RPCm3s7gO%2BAFlH%2BSKHOnJqR1WTPqb2mErkRTbNnRizkFAGp6y4af%2Fowunbxj6tuhhx5KbxTOwt5nLcpXRPO%2BvfOsTSvSCi79p91c5U75g9xeFEIgOjrZuzJetnJ105zCgZ%2BQxs2QG0lT4tc6F6DHOAOJr%2FOGgsBOYbr63E3SUxFyQQgrfvPAiGq0rq8k3Bzz5bwfEp7amr4kbLeTL%2FEysbaCVHEBs8ZiPdW9PsWQHJUdYu8txagfnYix7EKMk%2BIPxc%2FlOBPIRzUnAzLWYEFKjAvR4c7oevxMqOD7Dx9ZD0ZL3udWGIaX9M180uXkJez6VJBPfM8l4s%2Bk0n3QiG6Ki3y6oahdCsgNmI%2BXp9uuIJbH9rEYxnfFOAAW8hgEr%2BzS%2FYPyVM7XB0QzBRQyg%2Bi3SVux8WcGhQJiT2psekEeNBMNZX9tWFL7DHlpN6Qv0yDk0Id%2FgZ0qI%2BZd362QCfDdcMeZnMOx0YyY4gzwwv6qxwAY6pgHy98SaYKVSegt6N0u%2FI%2FEYlmTwyGoclguzBRhS%2FleiVZs00BmQZ1%2BK71k9V83USCpCq1dZlOZBD9M8xT%2FyMZ7Vu01J0PV6yASg%2B7xY76ESkZbZ0j%2FprmhdwQWX57h7huI0%2FvnGtCVxv5moYoFPwgSqAGoXlV%2Fg2U4bLhlh9d%2F5uQWySwex7WblARlqofy8wPALS5TPb2VypPjsDN6ONf9RjT1csGv3&X-Amz-Signature=feb78450fc1e250e19e766f21bb1f8087d55f46600904a8e93f23ba6af5bebcf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJO2N6Y%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqTcTYtfO3msoAB3ZTxRW2GMe3z7F6p6oXYmhclheUZAiAQRcXWclEgToj5vRd2NrhBze7fgxbatsz%2BQaLj5rtTKSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMwa6k%2FrgEHDad4j4CKtwDcSkYMyLApr9pfME%2FYxSXadlkFogekoimpcKYit7riue0NC1qwYbM7t%2B9Q33OPyTY04X3d3QOf4zw2I%2FsfH2ZO4OXq2MsRjGLl5XlUQjumzzVE8CvrT6vGUXW0xc9F%2BQpfGgM3Pu9oQyUaLHjK9Yl5A3RPCm3s7gO%2BAFlH%2BSKHOnJqR1WTPqb2mErkRTbNnRizkFAGp6y4af%2Fowunbxj6tuhhx5KbxTOwt5nLcpXRPO%2BvfOsTSvSCi79p91c5U75g9xeFEIgOjrZuzJetnJ105zCgZ%2BQxs2QG0lT4tc6F6DHOAOJr%2FOGgsBOYbr63E3SUxFyQQgrfvPAiGq0rq8k3Bzz5bwfEp7amr4kbLeTL%2FEysbaCVHEBs8ZiPdW9PsWQHJUdYu8txagfnYix7EKMk%2BIPxc%2FlOBPIRzUnAzLWYEFKjAvR4c7oevxMqOD7Dx9ZD0ZL3udWGIaX9M180uXkJez6VJBPfM8l4s%2Bk0n3QiG6Ki3y6oahdCsgNmI%2BXp9uuIJbH9rEYxnfFOAAW8hgEr%2BzS%2FYPyVM7XB0QzBRQyg%2Bi3SVux8WcGhQJiT2psekEeNBMNZX9tWFL7DHlpN6Qv0yDk0Id%2FgZ0qI%2BZd362QCfDdcMeZnMOx0YyY4gzwwv6qxwAY6pgHy98SaYKVSegt6N0u%2FI%2FEYlmTwyGoclguzBRhS%2FleiVZs00BmQZ1%2BK71k9V83USCpCq1dZlOZBD9M8xT%2FyMZ7Vu01J0PV6yASg%2B7xY76ESkZbZ0j%2FprmhdwQWX57h7huI0%2FvnGtCVxv5moYoFPwgSqAGoXlV%2Fg2U4bLhlh9d%2F5uQWySwex7WblARlqofy8wPALS5TPb2VypPjsDN6ONf9RjT1csGv3&X-Amz-Signature=50b49c93325d5942263b3e5c7076d0e41944e8fed51fa3fd36eb6e9139d39062&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=2680c5b0b79511fac6d979d4fbd6fba72f7d091f033de5e759a53dc7599e1d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EO22JFM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEV5KJ1l7cShwkkj2TqoXsBhDEjFV3dlJH8VhKdO7TYQAiEA4dUGca54a1Idg%2By3kmsG1%2BuAmQE7ZY8mucI3IuOzm0Iq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGXk82xCkXeQbjWUSCrcAx8rivpaY9qizCcYd%2BEkHoVKR3KssJCZ6%2BzMKPvZMucrg6r2iyxKg0KMgv%2FaCPAmZ7L6MNlzdqtgYnpA4w68BQljaC%2BBD%2Bs4XKxRnA5c9id8dtf3sCdQNTjRKKawGEPZy5HWJagXESZULIWzL7EOZuZLwbxootbH9n%2B90Cgq2XtS2Iz92xlvt9EX%2Fd%2FmOal0pW%2F6fvCNxhvOeauzmDGPVBdGbX9EneGLi7nVIQt311HYC6LkItBYPm4CM6wSXgcRazXfi%2Fh%2Bp1ogD6wy6%2FZNa5bNFF%2FXfHDXMCmEQK96GaxbdDwjFY9YGEpvYDcTWsXS5SpwPzv5F7Z8lFhj%2B68Kgiuv8bCTZauho0eWea%2FsGO1Wm7I1yNxBjLgl%2Fs%2BKoOWNn4Oe5z%2FwyZoyX2TQbZMc8YxxNL0lruBnLjOJ%2Fdcop6XV7f6GON2DJgPihKR0VHn%2B366mu8aEyQUN9C4YVBK4YINjrbA%2FtUhhw73MGrKuxFxXWVfHhcgQQXbE3SEo%2F8U8LTKH2zPtvTnm3PtaDW56SszovamBX4Gv49nTujRGOCCqfG48INyfZUVdy%2Fi3xGwnwbRsP9vBW5AvFO7%2B4wsXHkmydGGLPn56LRTnMEaXnX36MfyfW4g4lkgXiAZmMOuqscAGOqUBFcVLoTJwt0%2Bm4Ugh4%2Bf%2FCpUjYUmMnLuhTKF3HPkjbxskgBRNsthz5TOq2SB53QTgD3H%2BxzAk9XCaYgfuky%2BrOIM8TKVpuDpEprCOOv4VTEulHoB%2FUhScK2k5%2BBF7UG%2FqXBWcDsAmCRmYTaIqOb4fAGpU91e3zpb1P7RaXWrRY8CBBR%2BtZB%2Fhnr%2BWTZifHteSe5AUzVWCL2MOdjeAM377XFo3uq6R&X-Amz-Signature=6703478836bc54835bf458770f3a5d0c925a86127860b43fc40dc45f75fb4b95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJO2N6Y%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqTcTYtfO3msoAB3ZTxRW2GMe3z7F6p6oXYmhclheUZAiAQRcXWclEgToj5vRd2NrhBze7fgxbatsz%2BQaLj5rtTKSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMwa6k%2FrgEHDad4j4CKtwDcSkYMyLApr9pfME%2FYxSXadlkFogekoimpcKYit7riue0NC1qwYbM7t%2B9Q33OPyTY04X3d3QOf4zw2I%2FsfH2ZO4OXq2MsRjGLl5XlUQjumzzVE8CvrT6vGUXW0xc9F%2BQpfGgM3Pu9oQyUaLHjK9Yl5A3RPCm3s7gO%2BAFlH%2BSKHOnJqR1WTPqb2mErkRTbNnRizkFAGp6y4af%2Fowunbxj6tuhhx5KbxTOwt5nLcpXRPO%2BvfOsTSvSCi79p91c5U75g9xeFEIgOjrZuzJetnJ105zCgZ%2BQxs2QG0lT4tc6F6DHOAOJr%2FOGgsBOYbr63E3SUxFyQQgrfvPAiGq0rq8k3Bzz5bwfEp7amr4kbLeTL%2FEysbaCVHEBs8ZiPdW9PsWQHJUdYu8txagfnYix7EKMk%2BIPxc%2FlOBPIRzUnAzLWYEFKjAvR4c7oevxMqOD7Dx9ZD0ZL3udWGIaX9M180uXkJez6VJBPfM8l4s%2Bk0n3QiG6Ki3y6oahdCsgNmI%2BXp9uuIJbH9rEYxnfFOAAW8hgEr%2BzS%2FYPyVM7XB0QzBRQyg%2Bi3SVux8WcGhQJiT2psekEeNBMNZX9tWFL7DHlpN6Qv0yDk0Id%2FgZ0qI%2BZd362QCfDdcMeZnMOx0YyY4gzwwv6qxwAY6pgHy98SaYKVSegt6N0u%2FI%2FEYlmTwyGoclguzBRhS%2FleiVZs00BmQZ1%2BK71k9V83USCpCq1dZlOZBD9M8xT%2FyMZ7Vu01J0PV6yASg%2B7xY76ESkZbZ0j%2FprmhdwQWX57h7huI0%2FvnGtCVxv5moYoFPwgSqAGoXlV%2Fg2U4bLhlh9d%2F5uQWySwex7WblARlqofy8wPALS5TPb2VypPjsDN6ONf9RjT1csGv3&X-Amz-Signature=753e94d342578fbe10532c59186e35ceedd5a7e5752bafb71c1fd3694a02d2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
