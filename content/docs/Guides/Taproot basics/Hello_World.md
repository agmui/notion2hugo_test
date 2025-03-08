---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFATPMV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFZefvViNNKwdAKdrftAoZUvz9beFNiBvLkDF71DobkIAiEA8FEoHqTA%2FNZF1fitIyhZYVrnCKZyVnDhWSNzV%2FY%2B4nwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB%2BFHKLBcyLF18Vy7CrcA6cdadCURn6UPKwTETh%2BfU8qhQ59SNYPUVCZj0dm2AMx2lhda49M5dATpG0v9yjqW1Ncb0YZxtKPFX2eJlOiupTLQpNKHXjkbHh504yu%2Fa7NNw2dIn4LYfNWHB1dUm657PV838r91HzWLUV17giNk08%2FLEVKdRkInQmsaDt6gMgYvUVucLPprMR4B8QcwARaqYkJ%2Ba0nczrI3utPmLHm6%2BPTXilWzY0nzDP1%2FKwl3xvzmUJzmo6aMNjSQ6rzgdpa5riRGhNOESpXD%2FVK0yQAxN2AEck4UiYbDhEBEZmvAz8s2B%2Ftz1SMarXuqzqAq168B246VqwYIjZGMb1QmxRE%2BOdRcb%2FwGBQNyI0GCRAgtli0yXSVdShtn6UaBHXAN%2Fr0BXTBEaABNcEM9KPe0Rh8WDh3%2F2CSkk2gwprBbeTjIYaXPXnu24B4E%2B4LV8seHfmAsnQgPZnFHibtSQgIzd3vczzDq71DGImIwNAs%2Fk99o871Onh4QnR0L1MZFQT%2BACH2kqjGnct%2FHDqh0EBw%2FGT992TbpGfw6iBdinipXQxv4xPF7kvBhkvc8Pc3TF4H%2BbVcxVeElLTgkCLDtBzGLpvJWV9KO5rFil38Hmt5kR%2FXYQgfY5mrjhXsozw0ocXrMKOzsb4GOqUBghRp%2BkbPYe06LKpj%2FZ8vxqdPamHN1LH3Zq%2FR2sverkpPT3HbRIRtod3V4sAGECJAuU2gC1YoTTQe1M%2FkD%2Fzd9llnzMK0%2F%2FRtTyVWMfhm3%2F%2F3DIp2aii9O%2FmdGeYBXw5Xl3NDUUeajljGd0uXJfK4zqiaJVmMuBqjxRHdlb9ZlfcFG38wFBMQ8AP1mnVLfEJ5j2hI20YDvNZhLZF8YnMNe%2B2BQ17K&X-Amz-Signature=ab53f0c8b1038d216dd03143a52a15044aa0389d6bfb984472cc9374ab186fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFATPMV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFZefvViNNKwdAKdrftAoZUvz9beFNiBvLkDF71DobkIAiEA8FEoHqTA%2FNZF1fitIyhZYVrnCKZyVnDhWSNzV%2FY%2B4nwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB%2BFHKLBcyLF18Vy7CrcA6cdadCURn6UPKwTETh%2BfU8qhQ59SNYPUVCZj0dm2AMx2lhda49M5dATpG0v9yjqW1Ncb0YZxtKPFX2eJlOiupTLQpNKHXjkbHh504yu%2Fa7NNw2dIn4LYfNWHB1dUm657PV838r91HzWLUV17giNk08%2FLEVKdRkInQmsaDt6gMgYvUVucLPprMR4B8QcwARaqYkJ%2Ba0nczrI3utPmLHm6%2BPTXilWzY0nzDP1%2FKwl3xvzmUJzmo6aMNjSQ6rzgdpa5riRGhNOESpXD%2FVK0yQAxN2AEck4UiYbDhEBEZmvAz8s2B%2Ftz1SMarXuqzqAq168B246VqwYIjZGMb1QmxRE%2BOdRcb%2FwGBQNyI0GCRAgtli0yXSVdShtn6UaBHXAN%2Fr0BXTBEaABNcEM9KPe0Rh8WDh3%2F2CSkk2gwprBbeTjIYaXPXnu24B4E%2B4LV8seHfmAsnQgPZnFHibtSQgIzd3vczzDq71DGImIwNAs%2Fk99o871Onh4QnR0L1MZFQT%2BACH2kqjGnct%2FHDqh0EBw%2FGT992TbpGfw6iBdinipXQxv4xPF7kvBhkvc8Pc3TF4H%2BbVcxVeElLTgkCLDtBzGLpvJWV9KO5rFil38Hmt5kR%2FXYQgfY5mrjhXsozw0ocXrMKOzsb4GOqUBghRp%2BkbPYe06LKpj%2FZ8vxqdPamHN1LH3Zq%2FR2sverkpPT3HbRIRtod3V4sAGECJAuU2gC1YoTTQe1M%2FkD%2Fzd9llnzMK0%2F%2FRtTyVWMfhm3%2F%2F3DIp2aii9O%2FmdGeYBXw5Xl3NDUUeajljGd0uXJfK4zqiaJVmMuBqjxRHdlb9ZlfcFG38wFBMQ8AP1mnVLfEJ5j2hI20YDvNZhLZF8YnMNe%2B2BQ17K&X-Amz-Signature=ef5d2e87b92893a354811cc478b864aa3fddb52abcd8e7d8efe698538e1a0374&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
