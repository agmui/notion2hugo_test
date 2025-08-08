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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=6d5e8082122b90f5e3a0e59cd59673df0c7543aa6943eb0c3460dc845793823a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=6d740627957c0427905bc55735ec117bb3c3611010a7cb78655ba37d94688d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
