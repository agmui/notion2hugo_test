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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R24VNIJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFCvAZv3cy1YkIhytnBnfHgHPcD3pbCPMkp%2FeFdFgy3XAiAHlTy%2Bza%2Bx7DYbOsRbNbQswQ4CUmqiv9igJ1xCKRNjdCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGhEw6g6Ty7e4NXE0KtwDosMGPHcxRgZeLcNFKWcfW1y4Jh7RoWZg%2BrvuJ1tjeIisD%2Bed%2F%2BawhwQOv2cXrAQPdk5vKg7V2n2ma5MRbOElXrZ1MP3OprmfcgJGPnThdRd7WGiItipZWHO9%2FeB5mQE0PxoE2dlZ4JYCT8lLc%2Bs%2BZAvQXsNtRkQNftWUAjbKU2Gnd4qCpfx7wErLe5MIfHCUubjeUrmiNRUm60fYY5%2Fu5EjaGG7sBQa5jqDBjgxy1Ke%2B5nMNT3sguxV2eXfRyKHeVmw32Dup3Bzhs4T48yCF9FNLpODG7PeUslmHKfrk7wmltam2xHrWrq1mR29sw%2BemtfUPIabByz80vU0Ap1vJCBIkqOf6%2FsDS3JucLpgAkQ%2FvKDLnIfW4X8QPHjOYEujLW%2Fga1XN92vOlxEeUVbb7BRMTb3ne7Kfg%2FYw%2BXYUPWfCfLVTHEPdVtI%2B8ee0bl5jIk%2FveSuNhDI7R1sPvitr6kdqR0YgtuIh7FsYloqKhfsAyj2Swu0w8W9MIvT8RVvpN675ZR4CZ2msNXp6qtMoL23PvTn97TN6rlrHdSUjLd0Zvnxj2%2BWu28iT2lZbNRDpddQ6FbaSjvEpaxBrhYx2E2p3aedXtkTdYL0hSHKWp%2FSjGa7R6bsqRvJgVeVYw3PrDvgY6pgEd6omvE2tY6Tk2Q7E3F0u%2BqIi3V5HZ7DslYnOn7dKqwGfaaSLf%2BZ%2BXoEUBiFVIDtT6Gt3P5aLo5J9ZTL2tqCzgTW1iBnzHtPdobMm0jEa8i7F1i3aCZg0jPf1%2BF20Nr1Kxrkj7XtI2l4nHfcZiiuXB9l8vlLuidFt2ku4bedgLy2NvkL%2FmY7YzKYR8DQ7iO3FEbk7k74RsHPAdX4i7qbVHpzEhpEnB&X-Amz-Signature=b66670dfebab93ee9df43ceb2da7d8d50c36e9e0f61703fb9e6d4961ddf824ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R24VNIJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFCvAZv3cy1YkIhytnBnfHgHPcD3pbCPMkp%2FeFdFgy3XAiAHlTy%2Bza%2Bx7DYbOsRbNbQswQ4CUmqiv9igJ1xCKRNjdCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGhEw6g6Ty7e4NXE0KtwDosMGPHcxRgZeLcNFKWcfW1y4Jh7RoWZg%2BrvuJ1tjeIisD%2Bed%2F%2BawhwQOv2cXrAQPdk5vKg7V2n2ma5MRbOElXrZ1MP3OprmfcgJGPnThdRd7WGiItipZWHO9%2FeB5mQE0PxoE2dlZ4JYCT8lLc%2Bs%2BZAvQXsNtRkQNftWUAjbKU2Gnd4qCpfx7wErLe5MIfHCUubjeUrmiNRUm60fYY5%2Fu5EjaGG7sBQa5jqDBjgxy1Ke%2B5nMNT3sguxV2eXfRyKHeVmw32Dup3Bzhs4T48yCF9FNLpODG7PeUslmHKfrk7wmltam2xHrWrq1mR29sw%2BemtfUPIabByz80vU0Ap1vJCBIkqOf6%2FsDS3JucLpgAkQ%2FvKDLnIfW4X8QPHjOYEujLW%2Fga1XN92vOlxEeUVbb7BRMTb3ne7Kfg%2FYw%2BXYUPWfCfLVTHEPdVtI%2B8ee0bl5jIk%2FveSuNhDI7R1sPvitr6kdqR0YgtuIh7FsYloqKhfsAyj2Swu0w8W9MIvT8RVvpN675ZR4CZ2msNXp6qtMoL23PvTn97TN6rlrHdSUjLd0Zvnxj2%2BWu28iT2lZbNRDpddQ6FbaSjvEpaxBrhYx2E2p3aedXtkTdYL0hSHKWp%2FSjGa7R6bsqRvJgVeVYw3PrDvgY6pgEd6omvE2tY6Tk2Q7E3F0u%2BqIi3V5HZ7DslYnOn7dKqwGfaaSLf%2BZ%2BXoEUBiFVIDtT6Gt3P5aLo5J9ZTL2tqCzgTW1iBnzHtPdobMm0jEa8i7F1i3aCZg0jPf1%2BF20Nr1Kxrkj7XtI2l4nHfcZiiuXB9l8vlLuidFt2ku4bedgLy2NvkL%2FmY7YzKYR8DQ7iO3FEbk7k74RsHPAdX4i7qbVHpzEhpEnB&X-Amz-Signature=e0b5202291d9db1c2affe4c6a9c2a9212fc74e1b25a1197f2498f96c22a35294&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
