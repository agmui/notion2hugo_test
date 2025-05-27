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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4A3NWL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxVvPpggkodlCtKSqtxlppDJul55Eeop7rjYTw1OlrlwIhAKim%2FnxJNsVxHFfTNBk2jseYsbgT%2BZ2%2BWi891oMFtRwqKv8DCGQQABoMNjM3NDIzMTgzODA1Igy74X3WR0%2BMm9%2B%2F%2Bwwq3APRdD%2FlGLrDg9oHDm8VzXYPVNxn75loh97Goz3Qw7z3lmeomEkp8D99y3i6ysZpA5hRHB3TqiML6OR1tcsSorE0%2F7iVtQGLYIVLZKb3%2Fn3O82CCgOtt3Srre%2Bnn9K6xGn9TQg0f3XRyilmKsAXkhWP0kVGNczXuk9Jy%2FXK9epzpGrApoqkt2mX6UkDcOz4oE8nU32PCE8y1Rmli1Tw1Kwd6f2dKxMFiZKUSP5K7TP0nhpszecMvPpjSMYPXdkqxM%2FNI%2FyKOf8nT%2FAKH%2FZtg53eD01buI8aO%2FBE9fnpbMFsjZb70MKcopl61G5x%2Bf75rDd%2BO%2BpoM8Z%2Fp%2BfZGjGbExHbNamwEWAQUAGRnMlNRBIAL%2BipvSOPC5q1a3s4CGuFbjueyn4tGr%2BTvUcF1ibqZsZ48NrrLEZdkMwfpaFdKp9nXE1QtReRgq6x2k2drjJlLQKBa9o%2Bb1dAwwe1s1Uo%2BNuL2J6Og7wfsS9Nzcyd9J%2Bt0eiGrJX%2BbzcVd86wR1J6U7Pi8nLNVtuoBGEuA5Sx%2F%2BgSzWFEJQT5E3yKOpz4vCMO5VJ42paxOYB%2F90BDslTb8sA4ouiLmEJYWo%2BRmyXIf%2F%2BtU5umRwLmAjUbWUywr1UDnJBES2H84Ceqa%2B%2FcadjCYltjBBjqkAe6LwQJshn8PWVmey4c%2FvkdQsvqNGUKmkJAh1OWPXxH0FXbxqnAo5jVOdQ%2FuIXR8NCJ5UCon8Lpup0rTBVqn08UZ%2BSUcRWFA89nckkhoyXJcRN9z0HNpxY%2Fpl7Rtfa%2B0vdklaUPnpY015VIj62ZJmbtxJqX4FQOAH3VbHlJdzp97TClDwekAmx2LXEKXQnqU3rZCFiTieq6WP85tM%2Bc0ViSyPs3P&X-Amz-Signature=086dd69def2392e96a6e4b13d358da03446ea72923f4fd9d7aa1c5675d4eab53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4A3NWL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxVvPpggkodlCtKSqtxlppDJul55Eeop7rjYTw1OlrlwIhAKim%2FnxJNsVxHFfTNBk2jseYsbgT%2BZ2%2BWi891oMFtRwqKv8DCGQQABoMNjM3NDIzMTgzODA1Igy74X3WR0%2BMm9%2B%2F%2Bwwq3APRdD%2FlGLrDg9oHDm8VzXYPVNxn75loh97Goz3Qw7z3lmeomEkp8D99y3i6ysZpA5hRHB3TqiML6OR1tcsSorE0%2F7iVtQGLYIVLZKb3%2Fn3O82CCgOtt3Srre%2Bnn9K6xGn9TQg0f3XRyilmKsAXkhWP0kVGNczXuk9Jy%2FXK9epzpGrApoqkt2mX6UkDcOz4oE8nU32PCE8y1Rmli1Tw1Kwd6f2dKxMFiZKUSP5K7TP0nhpszecMvPpjSMYPXdkqxM%2FNI%2FyKOf8nT%2FAKH%2FZtg53eD01buI8aO%2FBE9fnpbMFsjZb70MKcopl61G5x%2Bf75rDd%2BO%2BpoM8Z%2Fp%2BfZGjGbExHbNamwEWAQUAGRnMlNRBIAL%2BipvSOPC5q1a3s4CGuFbjueyn4tGr%2BTvUcF1ibqZsZ48NrrLEZdkMwfpaFdKp9nXE1QtReRgq6x2k2drjJlLQKBa9o%2Bb1dAwwe1s1Uo%2BNuL2J6Og7wfsS9Nzcyd9J%2Bt0eiGrJX%2BbzcVd86wR1J6U7Pi8nLNVtuoBGEuA5Sx%2F%2BgSzWFEJQT5E3yKOpz4vCMO5VJ42paxOYB%2F90BDslTb8sA4ouiLmEJYWo%2BRmyXIf%2F%2BtU5umRwLmAjUbWUywr1UDnJBES2H84Ceqa%2B%2FcadjCYltjBBjqkAe6LwQJshn8PWVmey4c%2FvkdQsvqNGUKmkJAh1OWPXxH0FXbxqnAo5jVOdQ%2FuIXR8NCJ5UCon8Lpup0rTBVqn08UZ%2BSUcRWFA89nckkhoyXJcRN9z0HNpxY%2Fpl7Rtfa%2B0vdklaUPnpY015VIj62ZJmbtxJqX4FQOAH3VbHlJdzp97TClDwekAmx2LXEKXQnqU3rZCFiTieq6WP85tM%2Bc0ViSyPs3P&X-Amz-Signature=5705b326bb3c5a41a5bae25755fc6404c1d38aa10f36424b52e91f6e4dc8c4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
