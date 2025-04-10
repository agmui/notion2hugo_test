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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBMMA3D%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGW4aE83rsD50GaxWAbACnIOfCrd98bqAzkkek5WY2npAiEAqaR1Yg4a9so6ab7%2Bek9zXlkqm2M32BcdpLIUXgaVFecqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBROdeykzBapmehehSrcA3dBwhcGZ32FNNwH6HnaDNgP4zE60u7C71x94YDGm5x6%2B7oTCPu8qmKGrz%2B64ah16fiXtKruQaF2rHA0%2BZgIB6CeCWSsPK0kQ1DVivhQUVkztI2kL0EtAedOG%2F5REQIOw6BflOlD75y83P%2Bhqhs6E0%2BCXYgLNZW3q0iw1ZUP%2FRSgJ76OgUjDunNxAInLyWWEnxtiIpBwXWdlzvGej0tpw0en7sJPGBueUMLBX6wQ1F%2FLG8G%2BLcVg17%2B4lxFIDmTAgMwlGo6S44teJA5uWQSFUkbCCTkHRmGRtDLqhGNe65zUwcv5%2FXrxAqO8WIs0Y%2FwBfjjnoNDL0svtnmk1t3hCW2IJ7ylx2Gkixv0e%2B4VtYubsT7sZjnjXP3gyOPLIO4eAL90RamRE%2BTB3vB4%2Bfi68ToUQdTVeeTxD9bsnWYe0dD4rimn0NWUellk%2FXpKBdBsQ1zbO2dhOOeZHEiyN7Su7qLiMzjUVk71cQe9ZUEBYTgCguSDx%2FRm6K5%2BjnBuXTcy0ElXHPUjbnVMI43bW26zbPPZ1mMkhaGm3Q0WqhUeo375eCe1LY0xPHCagBVOMGVuuV6g8Z0mWbHvB0vtIgnD3v3A5rexC43QJZQFgw8bZSLdNUnJ0uwqlyubXRQsJMMDF3L8GOqUB6uwt80xpqi6XUF23BagE5FBXLOSIYzfeqOm4HZEdCYywnBB5tmWXuUtEKmxoCyqJANwQYREQjLM2xwd10NorZ9Gg3ZLNJcGq6cmxqVQC5mZxAz4sgmKrvgTK0Ks4xK4JcuYQ5V1dx4zV5fKgO5ZLbu2q9v9hNMmidHfHsO8E5Yi1iQRvLTcLVhVfB40xwoTYVVwwG60EHQzXhOYebP8Lnd5pVF5Y&X-Amz-Signature=539dddb2bc16ff187aadf5f7474349ee8b9a6143403640050ba421b520b37eed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBMMA3D%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGW4aE83rsD50GaxWAbACnIOfCrd98bqAzkkek5WY2npAiEAqaR1Yg4a9so6ab7%2Bek9zXlkqm2M32BcdpLIUXgaVFecqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBROdeykzBapmehehSrcA3dBwhcGZ32FNNwH6HnaDNgP4zE60u7C71x94YDGm5x6%2B7oTCPu8qmKGrz%2B64ah16fiXtKruQaF2rHA0%2BZgIB6CeCWSsPK0kQ1DVivhQUVkztI2kL0EtAedOG%2F5REQIOw6BflOlD75y83P%2Bhqhs6E0%2BCXYgLNZW3q0iw1ZUP%2FRSgJ76OgUjDunNxAInLyWWEnxtiIpBwXWdlzvGej0tpw0en7sJPGBueUMLBX6wQ1F%2FLG8G%2BLcVg17%2B4lxFIDmTAgMwlGo6S44teJA5uWQSFUkbCCTkHRmGRtDLqhGNe65zUwcv5%2FXrxAqO8WIs0Y%2FwBfjjnoNDL0svtnmk1t3hCW2IJ7ylx2Gkixv0e%2B4VtYubsT7sZjnjXP3gyOPLIO4eAL90RamRE%2BTB3vB4%2Bfi68ToUQdTVeeTxD9bsnWYe0dD4rimn0NWUellk%2FXpKBdBsQ1zbO2dhOOeZHEiyN7Su7qLiMzjUVk71cQe9ZUEBYTgCguSDx%2FRm6K5%2BjnBuXTcy0ElXHPUjbnVMI43bW26zbPPZ1mMkhaGm3Q0WqhUeo375eCe1LY0xPHCagBVOMGVuuV6g8Z0mWbHvB0vtIgnD3v3A5rexC43QJZQFgw8bZSLdNUnJ0uwqlyubXRQsJMMDF3L8GOqUB6uwt80xpqi6XUF23BagE5FBXLOSIYzfeqOm4HZEdCYywnBB5tmWXuUtEKmxoCyqJANwQYREQjLM2xwd10NorZ9Gg3ZLNJcGq6cmxqVQC5mZxAz4sgmKrvgTK0Ks4xK4JcuYQ5V1dx4zV5fKgO5ZLbu2q9v9hNMmidHfHsO8E5Yi1iQRvLTcLVhVfB40xwoTYVVwwG60EHQzXhOYebP8Lnd5pVF5Y&X-Amz-Signature=87538900576c3d96c9faeeec84b349d809eccfc9906827842c7c09a659db91d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WKCY7LI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHbSEaXXnoU3rkrP9U5w97%2Bwj9jOdF0rmIlxJR%2FstMe8AiBk32Nwouc9%2Bo2RtiUrEmchqnMVJZGWvrJV1eF9bMzbUyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc16bA3xFys4cr3hKtwD4nuzTrEsR5qgQ5PzgGVUJR5SfkPVDrNIoP3cIj2%2FZjNPZ3qcys0LO3kjXdA4bamVf68UUCG1mYdDS3p3DFkD1eIKi8ch4ULmoIdVKpF6ztkhw5Ak8KHzQiUwB3bqdyeUeT7Iz2J9OKepjCdvLVYCDaAz0ZxjfqA1xcJ%2F2yPJDFp1s3LMyPb8rZzYUnuRnY7atKNdvAPhFI5wyUfTk5GHxJDiboXn4w%2F4LfUVgSf10V6ERlbrpjt0QFGV%2BOt1XxLPGw7Oktf5CxuaRDiL1Lu1mfY5GFZwOhbvFCjZq6MFtAfz7eyQectyTiEADOcFMTB8JqyAqmgTaRUkyg%2BWsHiRcQSVaAume7q9XvQzvluxdhaxCh4ubaHR9Xm7HN54jCEDQvab%2BGfgmtN89RDMlNNu4n81UOo4%2FnasQFaAGDFjta7EpRnmsuJPsHqIdWzT1ylhdvzakWALXZo6fBdi2UeaPNy3KzXtUrDJhmBeOwaPFNXQHkdXvFlJegrnpLIzy2jZDqSfzCKBF7rKjns3DSv6sGAOYF2F3uKeIhi6I0561P2DWpcNW43zad%2FQZoSMXDM1ztr%2FXcTN%2B1%2FGPdFA2VdIRIm5juNdvbz07LzBFEsqDQVer1lXo0vZVx5kiQAw%2FsXcvwY6pgEfRhvVphfDreiPSv5UD%2B7%2FFCAu24tnP0ck0jSM%2B5CUdPFMJxxLWMMzcyxP2eYJJyduS4rPac5dCSGknIJl%2BViYWfShAAeGpQc%2BoHaXX7RcRzTreTImNrO1dr%2BG4TmYpMu8ZbH4vPoJ6i21k8Ni7prMrAWZSNyr5cFpMZILrU%2BWnvkwFAwAY2U8WUD3RaQBJuYWuzboPns77A4yQmVjm3rwssIJ5Ojf&X-Amz-Signature=1e2a17f92a326ebd40e8e30c4cdfd297e439a6311d97abfd3168aebd3600221c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F6NN6B%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDlk032a333YdCx4p%2FBzj0s5QpMg5QNjCGEc9PrBP2ucAiEAuou4Oy0f5MJ2EnkUS0tu3DEeevfKZqT4pXV2UEH8IGoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1G0qgfaYkLtWRUtCrcAxgvAsvyeITnhnGVMfKgu8DnEDR2avz5TFqfXifNcMazpbUhX73yFqkL3sBSA5xFUYgSmO7RKmH84EVV1FhFnn5XNgq29EjYxcKxtrZgKNoBBcdYbd9t5BUgmVB%2B8eut6f0prg1jmLFEK47fGEjnH7Q7jNJH5RP32d78P%2F%2FxhfZW80Jp1tss6hfy5OOA5tGORS5RcVUe2c8u0h3cLQM6M7GcPROspWhPun4YhsUrrtcjyGoNVoVK3FhZOTHVCgkbFuPsl5DPFCqetdXFaGX3MJvq0O0WJ76X7%2FOP0uz4HdIv71X2yGyObpncKdzh%2F2wG%2FUHwIaGMlqTunRAMfi1%2B68MQOIeMw%2FPqiGhYwpgh9dR8uyZjHTW3v%2Bm4gTmcuSksYj1iur1BgiIDPPSI1I%2F6W%2B89ylLakB%2BgYfubxySAW2NfjlecT83QDIIfjWusq7oaubflAdWBSrfNr%2BCSCwAvZdv1HGiFk3aHcRC1zkc58wb72ySYM9P3FRUTanXaGE5xMLkBrsBgnkh%2Fq7nJCMbfenOwjOsyr9Sox%2F%2B0TaB8SdgrUfs4sVlILvpi5zIo79gLhqcXK7aSbuE4ilNUHvNbRM%2FXfDGiFMO%2Fuxz97DwgfrIquaxjjFv%2B4aSihuMjMLzF3L8GOqUB86%2FIfWMx1KJODt8wGdgn%2FOFofu%2Bx6x0JVHNX2EiciqDw4OdFXToCyCCb82pQLPHvmi1mQWw%2F2iXYyQeblFoO3DQFo795OOBGDaiyYk8Y7%2BGuCz7havqCDGfZCtAvN4McYW%2F1eea8S14MiHGUO7hXg0Oq0d2eil7Ij6%2FAN%2FiknqOcArI4bLRPJaA4Hp2CNQcPbGpKJD5JFIBDu6sTsMnv7I4X4fjF&X-Amz-Signature=37dde9afa255c0c97efaa8d497c138afd911052fee3664036cd3c4f348d4f286&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBMMA3D%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGW4aE83rsD50GaxWAbACnIOfCrd98bqAzkkek5WY2npAiEAqaR1Yg4a9so6ab7%2Bek9zXlkqm2M32BcdpLIUXgaVFecqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBROdeykzBapmehehSrcA3dBwhcGZ32FNNwH6HnaDNgP4zE60u7C71x94YDGm5x6%2B7oTCPu8qmKGrz%2B64ah16fiXtKruQaF2rHA0%2BZgIB6CeCWSsPK0kQ1DVivhQUVkztI2kL0EtAedOG%2F5REQIOw6BflOlD75y83P%2Bhqhs6E0%2BCXYgLNZW3q0iw1ZUP%2FRSgJ76OgUjDunNxAInLyWWEnxtiIpBwXWdlzvGej0tpw0en7sJPGBueUMLBX6wQ1F%2FLG8G%2BLcVg17%2B4lxFIDmTAgMwlGo6S44teJA5uWQSFUkbCCTkHRmGRtDLqhGNe65zUwcv5%2FXrxAqO8WIs0Y%2FwBfjjnoNDL0svtnmk1t3hCW2IJ7ylx2Gkixv0e%2B4VtYubsT7sZjnjXP3gyOPLIO4eAL90RamRE%2BTB3vB4%2Bfi68ToUQdTVeeTxD9bsnWYe0dD4rimn0NWUellk%2FXpKBdBsQ1zbO2dhOOeZHEiyN7Su7qLiMzjUVk71cQe9ZUEBYTgCguSDx%2FRm6K5%2BjnBuXTcy0ElXHPUjbnVMI43bW26zbPPZ1mMkhaGm3Q0WqhUeo375eCe1LY0xPHCagBVOMGVuuV6g8Z0mWbHvB0vtIgnD3v3A5rexC43QJZQFgw8bZSLdNUnJ0uwqlyubXRQsJMMDF3L8GOqUB6uwt80xpqi6XUF23BagE5FBXLOSIYzfeqOm4HZEdCYywnBB5tmWXuUtEKmxoCyqJANwQYREQjLM2xwd10NorZ9Gg3ZLNJcGq6cmxqVQC5mZxAz4sgmKrvgTK0Ks4xK4JcuYQ5V1dx4zV5fKgO5ZLbu2q9v9hNMmidHfHsO8E5Yi1iQRvLTcLVhVfB40xwoTYVVwwG60EHQzXhOYebP8Lnd5pVF5Y&X-Amz-Signature=072812278f185d163ffb6e8b69f78a48a0eb2526b063dcaa628aaede89dd4d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
