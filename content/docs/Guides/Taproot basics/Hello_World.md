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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JLHUYG5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCtmXxJ%2Br0ZryM6SPl0FQwZi0gA9qMTuEgiF80QWWTqXAIgfBuP1d%2Fq8Pbyk%2FGMdz43jibpjPIvZCdnnPz9CRQ3uK4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHcGi6DZLcvpN73UAircA7j8aFd5JVUBhjNQWa8fM6aCOd6w1v464rSNaYuTaTOkDJ4y4cKdxY1h83CL%2BprwmT2pzmalgdcEwX4%2FvaeauniXdAfN%2FfohJakAoZFGfbr7rnRlHa%2FDshLJqi6YLoNhM9Llh1%2Fsa8fgaFOPVFv4B%2FXm8HSp8Kj3RpM7CMvbIPJDGxVfAg9Tymo6Efn9gPlmScf8kLKbxkmeYdYcBAx1zDXxEQ7hCkpBaSrXKwvulmiMrNAcXp2hXKs4d7whgQdtv2vIS9CZSbIb%2FFNMVMaZ7FSpFA%2BuFcYoS8B6Ongq28yjIEi5qBwWgBJSdkVYIJ4%2FF6yTL36zNwhGi%2FK%2FCYh5u9mcY82I6l2Fl2itKBCoUiRgJyZO3lcCL0RAOneEwcTWo11LO0gQb%2Bjp74f%2BaM3UEIOlms4Zp9xbMA9MdBmfnKNJUX506jhCpL6Gr4NkS8GMcM2IO3vfWSV2gTEk5%2BmEO6JJPwnci4SEm%2FkHEGmcZvm4d6X7O%2F3YhjGX%2FxO4GRdcFmnVxIjd%2BbC6RCF%2F5vh%2BkPDiSiytla2NN0GWgYMOmyFoBxupXP0PBkIEKMzeWZVtHwZ8x52K7QyjbI5tlwWe0cy%2BLqwda8tBbW2LYIXojaAq3ARhV%2BqNl01cdTIYMJfWksEGOqUBAn%2BkDdgH%2F9sIrme0FAhwosHwsoNtx422dMmC%2BIBW3TiQrNEtr5DFMG1APkVDPdSrGJm0Q8QuEowGBy3OP9%2B2g%2F9hemzC0l5QHVD3w1W4UQOJtm9iVn5y7LhYeQjd8UF9UNZjxRvtu23IhbdIt%2FvP2%2FA26v2L2MyNXp0zC5%2BytsYvApDoqV6v3P21nGO0qtgbehvv5ujcOvuN0ndqvSM9W32d12ZO&X-Amz-Signature=2dd42307fa58ce9f1d29de80cb558879c2134b7ceac0a897f109051c00f5e00b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JLHUYG5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCtmXxJ%2Br0ZryM6SPl0FQwZi0gA9qMTuEgiF80QWWTqXAIgfBuP1d%2Fq8Pbyk%2FGMdz43jibpjPIvZCdnnPz9CRQ3uK4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHcGi6DZLcvpN73UAircA7j8aFd5JVUBhjNQWa8fM6aCOd6w1v464rSNaYuTaTOkDJ4y4cKdxY1h83CL%2BprwmT2pzmalgdcEwX4%2FvaeauniXdAfN%2FfohJakAoZFGfbr7rnRlHa%2FDshLJqi6YLoNhM9Llh1%2Fsa8fgaFOPVFv4B%2FXm8HSp8Kj3RpM7CMvbIPJDGxVfAg9Tymo6Efn9gPlmScf8kLKbxkmeYdYcBAx1zDXxEQ7hCkpBaSrXKwvulmiMrNAcXp2hXKs4d7whgQdtv2vIS9CZSbIb%2FFNMVMaZ7FSpFA%2BuFcYoS8B6Ongq28yjIEi5qBwWgBJSdkVYIJ4%2FF6yTL36zNwhGi%2FK%2FCYh5u9mcY82I6l2Fl2itKBCoUiRgJyZO3lcCL0RAOneEwcTWo11LO0gQb%2Bjp74f%2BaM3UEIOlms4Zp9xbMA9MdBmfnKNJUX506jhCpL6Gr4NkS8GMcM2IO3vfWSV2gTEk5%2BmEO6JJPwnci4SEm%2FkHEGmcZvm4d6X7O%2F3YhjGX%2FxO4GRdcFmnVxIjd%2BbC6RCF%2F5vh%2BkPDiSiytla2NN0GWgYMOmyFoBxupXP0PBkIEKMzeWZVtHwZ8x52K7QyjbI5tlwWe0cy%2BLqwda8tBbW2LYIXojaAq3ARhV%2BqNl01cdTIYMJfWksEGOqUBAn%2BkDdgH%2F9sIrme0FAhwosHwsoNtx422dMmC%2BIBW3TiQrNEtr5DFMG1APkVDPdSrGJm0Q8QuEowGBy3OP9%2B2g%2F9hemzC0l5QHVD3w1W4UQOJtm9iVn5y7LhYeQjd8UF9UNZjxRvtu23IhbdIt%2FvP2%2FA26v2L2MyNXp0zC5%2BytsYvApDoqV6v3P21nGO0qtgbehvv5ujcOvuN0ndqvSM9W32d12ZO&X-Amz-Signature=ec980e9c25e34547df0f915ef57e60715122f05cd2c2259d8a08f46f5e9aefc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
