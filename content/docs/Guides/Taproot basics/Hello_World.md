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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEVETI2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCxIXGkoK16U9f5ZjWeFOb6JbAHa9dB%2FzmnLn0IcomrYwIgdlZ%2FeezUiWDINE2NQ9HHvnpA2BxdnSF2eEqS0Ds89Ywq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJoO4%2BdXFrpa7q8ikCrcA1VscyEtRxzVYDNClC%2BGJoHT0gCuXbOEZNg%2FFwEUEJmixO8nEWcfyZtZV%2Fi2tcLprc%2BNB3xoz%2BmRQhUwy7aWi9pYoLUL8NE8qGTaRfX5PzwQdnEC3GZgtfjZ9BGBk1QOBFO%2BAvt2U6wQKng9b%2FjXJPs4trAmoiHLXQ2eSO0zkQgMrZrDx4YyzFvpGclzbFNIeOF2h%2BONUsSiLw%2BP39930%2FyYvnTThOXVMrFVZRXNQuH%2FRKgMG9GGNPR6VLOCOnTS3%2FkO499%2FA2GVke%2B8GWrdw3AlFm5mAZIDl4YECxFuPc1Zm%2B0lb9a7zGbdCWw%2Bm%2FY5%2F4NCijRmpbNk2sQ4AK1v6zUDbgSDQWlSl3lLWV%2BpmJiYMeps8EoVnpFy1lsqRbDpE6HCrOc2swhIBY1nx6fZ32hKEMCPG7SZmNk%2FDVIipDqgwf2je%2Bz7BXdU75uFn%2Fl3DllZKBacqkTsIjEgLuvaKUrycMsOADa95s9hAO7YCx%2BuUhdp3ODVP42XqyRs1k7VRDvRJ%2BTy5ERCIieLYkhGQMV%2F8XgMFDegsRh03Bjhb%2B%2BL2V4h9Qzo3iS6boQvODySbnBmyQPaLzgip2U5C7LDurmy%2BQRB8D0EYcOD%2B39kV8LLLAELe8K%2B5qk%2B0FDFMJPRj8QGOqUBw52GTcDcCv7o0%2BQART1%2F9d9fewU5doF4gHdlAHtTRa1gz7v5xOl%2BVGRebJqP3Xz9RrpaP3Qexqeb3hrZoDCVSr5%2FfSxhdSzfQCDbp9Nb4fY2WUcCqmYA74WuuEeYb1Gu22ErkOb3YDag2eIjzv3PdoWubXAvLKcoYcs0D2Xq2tYpJwvmWnJOktkDrjPsgbBxIRW50etzCm3lNMj8ST7YuffJT6JE&X-Amz-Signature=ac776bf3d82f14ce2d2ea0984c4954f3fa9b4f1b12e78faf89a02767edf72ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEVETI2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCxIXGkoK16U9f5ZjWeFOb6JbAHa9dB%2FzmnLn0IcomrYwIgdlZ%2FeezUiWDINE2NQ9HHvnpA2BxdnSF2eEqS0Ds89Ywq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJoO4%2BdXFrpa7q8ikCrcA1VscyEtRxzVYDNClC%2BGJoHT0gCuXbOEZNg%2FFwEUEJmixO8nEWcfyZtZV%2Fi2tcLprc%2BNB3xoz%2BmRQhUwy7aWi9pYoLUL8NE8qGTaRfX5PzwQdnEC3GZgtfjZ9BGBk1QOBFO%2BAvt2U6wQKng9b%2FjXJPs4trAmoiHLXQ2eSO0zkQgMrZrDx4YyzFvpGclzbFNIeOF2h%2BONUsSiLw%2BP39930%2FyYvnTThOXVMrFVZRXNQuH%2FRKgMG9GGNPR6VLOCOnTS3%2FkO499%2FA2GVke%2B8GWrdw3AlFm5mAZIDl4YECxFuPc1Zm%2B0lb9a7zGbdCWw%2Bm%2FY5%2F4NCijRmpbNk2sQ4AK1v6zUDbgSDQWlSl3lLWV%2BpmJiYMeps8EoVnpFy1lsqRbDpE6HCrOc2swhIBY1nx6fZ32hKEMCPG7SZmNk%2FDVIipDqgwf2je%2Bz7BXdU75uFn%2Fl3DllZKBacqkTsIjEgLuvaKUrycMsOADa95s9hAO7YCx%2BuUhdp3ODVP42XqyRs1k7VRDvRJ%2BTy5ERCIieLYkhGQMV%2F8XgMFDegsRh03Bjhb%2B%2BL2V4h9Qzo3iS6boQvODySbnBmyQPaLzgip2U5C7LDurmy%2BQRB8D0EYcOD%2B39kV8LLLAELe8K%2B5qk%2B0FDFMJPRj8QGOqUBw52GTcDcCv7o0%2BQART1%2F9d9fewU5doF4gHdlAHtTRa1gz7v5xOl%2BVGRebJqP3Xz9RrpaP3Qexqeb3hrZoDCVSr5%2FfSxhdSzfQCDbp9Nb4fY2WUcCqmYA74WuuEeYb1Gu22ErkOb3YDag2eIjzv3PdoWubXAvLKcoYcs0D2Xq2tYpJwvmWnJOktkDrjPsgbBxIRW50etzCm3lNMj8ST7YuffJT6JE&X-Amz-Signature=01906942ae239812b735419aa0bbb6399340950ecb83746eaf456757f9a76d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
