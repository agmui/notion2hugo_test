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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIL2PRD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB7kPOeWGUNQcry7CgQh33Rct9y%2FzHuEwPprluEgRojXAiBMs7Kp2mLEGefJUn%2F5uKKSlfFPIdBey8AYG5R81mXqzCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCMjKxpxnU6qvQW5mKtwDWM434khDcY0f1xITKb9j3NNEOiyhyo7OH95LVhg%2FTqRFds%2FKICTZZAg7bkm0dNqy%2FYFNvFzbxC4lfAa5o9xzfW3tT0Un5IZ1lZNb8BqzSGE%2BITx%2BufgXXnE7SczTRCatKSuJXdUyZJJUB4LTHR0LT13wscJHl3LmgOPom5V8OXxatN4elsYYCHg6HzJGqns8QpMMxO9vxdLFakf%2BSh4BCrnucdId47hEdRrEviUkoHI8HJVo85ltDaIt%2Fcf%2BLITwiCIwZh%2BIIcfj0oSyDEpYLfLlorhZcHR22LFQLoXX47iIRZftYctr3%2BH%2FImlDZxVaVoAHFKIxmf8CBrejj9N5UEgagmsmKCz5Bj%2BEMOye1haZtROQlOucuEP1tG5w6Kp6oI5dGxaaYX%2FHlvXATnB1Iu9uHO3459OjkhB1thtp%2FTVjWs3Y6oROSBDGLZ%2BKhr6jbzwKe3dZUB2WbsMGfburCnYSJ0DLrmHVKfipdmkzEvCnVEEITobyZP6nGPM4jBYU3yKVln4t9bWtkE2zcCBpH4Z7dGXx4HNmJrEep9N0rP969cDeNAcxAcTQkqKXWavgtMK%2Bd32FRRBmeamUS1xlaiWst8qtUN%2FHGBLPh%2BdsuqffQ95Pbrga63hdTiAwl53ExAY6pgFy8bi%2BLW46mzAc5N4LoHKZ5RIO4ZwcVDPC%2B17S5svoXmSegh0AFZvx1xORYTnDCewrCkVaZoY0ukWU3VLWvk8IPyutHaeqadXp1WMKRVIocCB1nuuGUon1%2BdOIwlVfrdUPtBqT%2BZyEx3bNljLGfyvIIFh1Efq%2BTbRA80qmV1zRVa%2FGvyeKxutUvaV01Ub%2BWDDSArpcG7DXk2WoqUrvRF2W64UzVoCr&X-Amz-Signature=3a566c17f49159dd936f9b23a16a574a39232efdce23ed37dec1d48707fe9c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIL2PRD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB7kPOeWGUNQcry7CgQh33Rct9y%2FzHuEwPprluEgRojXAiBMs7Kp2mLEGefJUn%2F5uKKSlfFPIdBey8AYG5R81mXqzCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCMjKxpxnU6qvQW5mKtwDWM434khDcY0f1xITKb9j3NNEOiyhyo7OH95LVhg%2FTqRFds%2FKICTZZAg7bkm0dNqy%2FYFNvFzbxC4lfAa5o9xzfW3tT0Un5IZ1lZNb8BqzSGE%2BITx%2BufgXXnE7SczTRCatKSuJXdUyZJJUB4LTHR0LT13wscJHl3LmgOPom5V8OXxatN4elsYYCHg6HzJGqns8QpMMxO9vxdLFakf%2BSh4BCrnucdId47hEdRrEviUkoHI8HJVo85ltDaIt%2Fcf%2BLITwiCIwZh%2BIIcfj0oSyDEpYLfLlorhZcHR22LFQLoXX47iIRZftYctr3%2BH%2FImlDZxVaVoAHFKIxmf8CBrejj9N5UEgagmsmKCz5Bj%2BEMOye1haZtROQlOucuEP1tG5w6Kp6oI5dGxaaYX%2FHlvXATnB1Iu9uHO3459OjkhB1thtp%2FTVjWs3Y6oROSBDGLZ%2BKhr6jbzwKe3dZUB2WbsMGfburCnYSJ0DLrmHVKfipdmkzEvCnVEEITobyZP6nGPM4jBYU3yKVln4t9bWtkE2zcCBpH4Z7dGXx4HNmJrEep9N0rP969cDeNAcxAcTQkqKXWavgtMK%2Bd32FRRBmeamUS1xlaiWst8qtUN%2FHGBLPh%2BdsuqffQ95Pbrga63hdTiAwl53ExAY6pgFy8bi%2BLW46mzAc5N4LoHKZ5RIO4ZwcVDPC%2B17S5svoXmSegh0AFZvx1xORYTnDCewrCkVaZoY0ukWU3VLWvk8IPyutHaeqadXp1WMKRVIocCB1nuuGUon1%2BdOIwlVfrdUPtBqT%2BZyEx3bNljLGfyvIIFh1Efq%2BTbRA80qmV1zRVa%2FGvyeKxutUvaV01Ub%2BWDDSArpcG7DXk2WoqUrvRF2W64UzVoCr&X-Amz-Signature=6898ca8e8c10c132cc02fc3b5ccee413ef4e942c649959a085df5754e929d728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
