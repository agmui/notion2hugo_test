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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOZZAHO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUdfKP8zkGsscK8PXbF8taVt%2FT5XvYI7AYDgWqqXOFiAiEA3gq3oVSodZg9YgaXva9AvqwVEKSOXkiBdeTCZSK%2BFXIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXgMtk0kdARree7uSrcA53ETNbqvw2V9%2BTXxRefLBx8QkaH%2FnPYkqxRrLE2fNyh4lXQVgi1ItKKkVUgjHpvoNZeh8qu%2Br5pvoTe8xedASZZhWr6UoppM1ND7399s6%2B2Ei%2Bmx6V%2Bmi45HysIdM0Nc3wzBopGWRx1s8kvZ0iOhk7mxoYi6xVzei9WK7uXPLofTHr6uYtkDZoECtVPyBhhYXB%2BgPHtpk0tC1m8wXjNXUV72utg%2B5WhqmLQFLg6MhVNsmhb5b5zENTnVIWDBoe%2FVSK17svmMIelL63y2TVFvDfH40WoWA7dPwI%2BohSW%2FwsZKjLjYzikgcZx2T3zXumcggdcshg3SFihjR6PdNIm3Rt09YtLnly9gEz%2BmLmeHRAMzuv%2FvQBqpEvr4Cy%2BW9TyN1cPxkcCQp74E1sRwngaqUyP2ToUYA%2FHzlvbasPTDWrmjKRfrg6pb%2Fh0OqX%2FHh0fe3uHmLH8BmwMf5XfEdaoZNcoYeXhaWUuHVnM%2F5KAa5dVz3Zcic8XC5pjzf7Er4%2BkGXTLpqwoplt%2FyqEFd%2B8T41zQwokEk6k1X7XksuBCQrOSmo%2F1V0f2t2NA5Yn8S3CAM%2Bh8FABzr2RShQwzAbrWaoGdUxlZMGrf4i9Fwzkjqk9zyoIdsKTIUYPf6f4GMMzEyMAGOqUB5lQjZivmKWdUGfv%2BgZkNOQJQFYgop0ial7ILZIKW%2F%2BPPSX2kS2DO2rToFu2cvw8OVMoeXrSO8ekF6a%2BBgShfpHMampn4OVtPVnMVkvmuHTqSYwdMSy%2BIj2sG97nFtr%2Bjx5yTY%2Bj5voj%2BsF%2BYz4OmJUZaTqGcdjlzv6W6Y%2BJkIxccbFT3YjbMywpDenHyAxe%2FBCBeAg2GiVQX78CMt4ajgDTOMrJQ&X-Amz-Signature=a9619d7d892151dafc621557790ded8a3b86020df2ce7279551020d7e399ab8c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOZZAHO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAUdfKP8zkGsscK8PXbF8taVt%2FT5XvYI7AYDgWqqXOFiAiEA3gq3oVSodZg9YgaXva9AvqwVEKSOXkiBdeTCZSK%2BFXIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXgMtk0kdARree7uSrcA53ETNbqvw2V9%2BTXxRefLBx8QkaH%2FnPYkqxRrLE2fNyh4lXQVgi1ItKKkVUgjHpvoNZeh8qu%2Br5pvoTe8xedASZZhWr6UoppM1ND7399s6%2B2Ei%2Bmx6V%2Bmi45HysIdM0Nc3wzBopGWRx1s8kvZ0iOhk7mxoYi6xVzei9WK7uXPLofTHr6uYtkDZoECtVPyBhhYXB%2BgPHtpk0tC1m8wXjNXUV72utg%2B5WhqmLQFLg6MhVNsmhb5b5zENTnVIWDBoe%2FVSK17svmMIelL63y2TVFvDfH40WoWA7dPwI%2BohSW%2FwsZKjLjYzikgcZx2T3zXumcggdcshg3SFihjR6PdNIm3Rt09YtLnly9gEz%2BmLmeHRAMzuv%2FvQBqpEvr4Cy%2BW9TyN1cPxkcCQp74E1sRwngaqUyP2ToUYA%2FHzlvbasPTDWrmjKRfrg6pb%2Fh0OqX%2FHh0fe3uHmLH8BmwMf5XfEdaoZNcoYeXhaWUuHVnM%2F5KAa5dVz3Zcic8XC5pjzf7Er4%2BkGXTLpqwoplt%2FyqEFd%2B8T41zQwokEk6k1X7XksuBCQrOSmo%2F1V0f2t2NA5Yn8S3CAM%2Bh8FABzr2RShQwzAbrWaoGdUxlZMGrf4i9Fwzkjqk9zyoIdsKTIUYPf6f4GMMzEyMAGOqUB5lQjZivmKWdUGfv%2BgZkNOQJQFYgop0ial7ILZIKW%2F%2BPPSX2kS2DO2rToFu2cvw8OVMoeXrSO8ekF6a%2BBgShfpHMampn4OVtPVnMVkvmuHTqSYwdMSy%2BIj2sG97nFtr%2Bjx5yTY%2Bj5voj%2BsF%2BYz4OmJUZaTqGcdjlzv6W6Y%2BJkIxccbFT3YjbMywpDenHyAxe%2FBCBeAg2GiVQX78CMt4ajgDTOMrJQ&X-Amz-Signature=e4b7f7a1e87b4cb93657b58b9a5a443df1472f802c828d8467e30b163f2c889c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
