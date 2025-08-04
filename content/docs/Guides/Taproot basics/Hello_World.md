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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAF75AHT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDzvgMfIalhsmhG%2BwOT5uLZS8ct%2FPIhUV5V0Y24t63blAIhALkLUSaEW7R5u%2BFeoUdYnKEAJrJhQCvJuXDURvJuGluAKv8DCEoQABoMNjM3NDIzMTgzODA1IgwacCsebKkemMYvjlEq3APNMcRiEXKJQS9mJGadZYPObFcaSImBU8ojkvQMh7M5UkqbRdilz2PiCwXAW0AvdbDbW0Xzg20AZRp3D%2FBMEwb13Zs8ifOMjNMfsPBSAAhHfXEhyD3pR1UzBH%2BAlB4sXsSJ6nJsCl4UspbP5IooZmCbKP65l%2FZnyqoUVGcaNdWT81585XXU%2FKKIhfFLL6hBisHe35g%2Fx1MQrci6kluwfWMJfNf%2BIk%2BDvS18CBEyDt9ERiS3rRpcNL%2BTzpEhZXVHduO%2F5c5z%2FDeUQQOPQhMoKuH5C2sDpK1ba%2B%2BrSBfr3g2WH1uUjKQU83x5Z6%2By%2FE1%2Bqc5E0c%2FmG%2BK4hFDvF0RIqnv2B9wrqCn%2FCb6%2Bt%2FEOH537CgyRnR%2FzIAgiVHFY%2FEk%2F7OiyHHLexl2pnCNSl3X3S65Z4YTjS0D4jUjib5jRqCqUWg1Lfo9%2Fqxy2TpSH9ewpJyBRQxqLmO5qcZLH975tDtJ5HRj0boG2%2FS19IG0QX89kHWbMkYIdxf2NFX4JFhb2lO6z4AUFsHtvTC479omjWITgyrJIEWYDKI5F7FHI%2FezfoeKm9uMMRDzk%2BfeQ6FBqCBMRuUYfk6%2Filf%2Bqyn12IB3qQNVvc2JM5m9eYq3tAoOYzWq5vBSJYZ8AGbu5xjCHz8PEBjqkAUFBLsZe5O8VmPXzO8aIeiODr9p7a84ZpIuYwcEdVaoQkvaRxAgSIJnUwupPUxjFvrtKosEg0FktqWe4npDICA9tva2ZTDHrBQAMiuzY0PrjXR5lH26xMsU0Y0xkoGnQ0i82%2FToWy2WeBm4UhZDOq53z3C3AiWmtA3E6g%2BVfXficKKSAxyNqLVYjH1%2BIFeOLhzGEajr5A5jATsWSxLCvQ9KHDxl5&X-Amz-Signature=f2a2a9171cdfdae9998efec6cfa4a7a81988acd7cd95c95f5ae54d338fe8348f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAF75AHT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDzvgMfIalhsmhG%2BwOT5uLZS8ct%2FPIhUV5V0Y24t63blAIhALkLUSaEW7R5u%2BFeoUdYnKEAJrJhQCvJuXDURvJuGluAKv8DCEoQABoMNjM3NDIzMTgzODA1IgwacCsebKkemMYvjlEq3APNMcRiEXKJQS9mJGadZYPObFcaSImBU8ojkvQMh7M5UkqbRdilz2PiCwXAW0AvdbDbW0Xzg20AZRp3D%2FBMEwb13Zs8ifOMjNMfsPBSAAhHfXEhyD3pR1UzBH%2BAlB4sXsSJ6nJsCl4UspbP5IooZmCbKP65l%2FZnyqoUVGcaNdWT81585XXU%2FKKIhfFLL6hBisHe35g%2Fx1MQrci6kluwfWMJfNf%2BIk%2BDvS18CBEyDt9ERiS3rRpcNL%2BTzpEhZXVHduO%2F5c5z%2FDeUQQOPQhMoKuH5C2sDpK1ba%2B%2BrSBfr3g2WH1uUjKQU83x5Z6%2By%2FE1%2Bqc5E0c%2FmG%2BK4hFDvF0RIqnv2B9wrqCn%2FCb6%2Bt%2FEOH537CgyRnR%2FzIAgiVHFY%2FEk%2F7OiyHHLexl2pnCNSl3X3S65Z4YTjS0D4jUjib5jRqCqUWg1Lfo9%2Fqxy2TpSH9ewpJyBRQxqLmO5qcZLH975tDtJ5HRj0boG2%2FS19IG0QX89kHWbMkYIdxf2NFX4JFhb2lO6z4AUFsHtvTC479omjWITgyrJIEWYDKI5F7FHI%2FezfoeKm9uMMRDzk%2BfeQ6FBqCBMRuUYfk6%2Filf%2Bqyn12IB3qQNVvc2JM5m9eYq3tAoOYzWq5vBSJYZ8AGbu5xjCHz8PEBjqkAUFBLsZe5O8VmPXzO8aIeiODr9p7a84ZpIuYwcEdVaoQkvaRxAgSIJnUwupPUxjFvrtKosEg0FktqWe4npDICA9tva2ZTDHrBQAMiuzY0PrjXR5lH26xMsU0Y0xkoGnQ0i82%2FToWy2WeBm4UhZDOq53z3C3AiWmtA3E6g%2BVfXficKKSAxyNqLVYjH1%2BIFeOLhzGEajr5A5jATsWSxLCvQ9KHDxl5&X-Amz-Signature=8444de0f680975583ca9cda01da605b1edd6d2f9e916b8b87a6aee9b26817148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
