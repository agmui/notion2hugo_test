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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXT3S6SE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJR9257tvlE58hhmV49WLVB75zwv1I2UtbjHfpnK0UOAiEAg8KQzbBu7N3p4yuKG1fdvyqO1HPHhUE%2Fvg9Q5JSzWYUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcsoiQLCwA0m5Er3yrcA04E9a%2B8tAQDHP8OjygVCJoKFhsE3MVvriI3gyYSDrZIxsXgmjhq%2Fpyko8yGJxwamIjakFzFQOqLWZ5QYRwFJ4lzLL7mzO97lRVpMNckNWg0%2B7r26fSThg%2FfxeND7sNd6pRWVKHl2HEGX0FjaG0ibdUgMnKyNGcQtrTDliw6EiMPGfgTy8iu9D%2FdvRBrHNTiWhwFHFP2OK9hwPlpVIdS2P6IOuoJ8HHIWlSL%2BffQ%2B5ftYIc%2BvextvHhHlmaDpnloaXtf4GC6dgbnkA4z%2FnHwCvso3oK6txIkPtDN4wopcIO%2FRbg9XAjw12x%2Fld0XNWcZRg12ytdf58l%2B7GbTLUIxAbUkKM9NWJ2vTRa3TcfEPT3KC5maomF3Pc0mmIwoXv4mjRpl4ZHYEtfVYIQrEyc38%2F8ablv8Sqn%2FXdpWH%2B%2FCLMQHTLbLzIKMY5jsZRf9GlIf%2F2v8Y6ae5y9Sc1EJXmn9P%2Bcbh8I5CikdE4oL04MwLhCGE3hnnoBzZHAuNaqb8h6Nr6DG%2FvTd6j%2BtXToFyegIYe1spFJYz0gSQDFGN73rqi8%2B7oSScG8r4fGju0HfXi85kLrPiFPbGNSI%2FP9STG8%2BTxSg5ADVnM8RDQUcZjNDQ%2B46HYi3xoHcVx4%2Fa7iEMJyw5MEGOqUBndKOPPUErAlrS2JWJHmiihTIaU6HfiHAOs4AnGGUatgsCn120Z%2BloZ9f6%2FaAs9kHpV0bkpmecO6w8%2BYE5g5mbGGdt%2FaI9R6Imco6RGTDfltXle%2F0X76yIy7CZCE9lVuOGGTJ1m8M%2BZfWAsX7WJ%2BoBfP97yimUqR%2FbyfX1MVmCEuykBTFSdOqh7eh5IzprlwCm%2BPNV4IQBmkK6ugRkGAj0weWfxeB&X-Amz-Signature=305df39b9e55932bf29ebafd68626ac2ae1bab5e10e0fb5e6fe1e6bb2e3887b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXT3S6SE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJR9257tvlE58hhmV49WLVB75zwv1I2UtbjHfpnK0UOAiEAg8KQzbBu7N3p4yuKG1fdvyqO1HPHhUE%2Fvg9Q5JSzWYUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcsoiQLCwA0m5Er3yrcA04E9a%2B8tAQDHP8OjygVCJoKFhsE3MVvriI3gyYSDrZIxsXgmjhq%2Fpyko8yGJxwamIjakFzFQOqLWZ5QYRwFJ4lzLL7mzO97lRVpMNckNWg0%2B7r26fSThg%2FfxeND7sNd6pRWVKHl2HEGX0FjaG0ibdUgMnKyNGcQtrTDliw6EiMPGfgTy8iu9D%2FdvRBrHNTiWhwFHFP2OK9hwPlpVIdS2P6IOuoJ8HHIWlSL%2BffQ%2B5ftYIc%2BvextvHhHlmaDpnloaXtf4GC6dgbnkA4z%2FnHwCvso3oK6txIkPtDN4wopcIO%2FRbg9XAjw12x%2Fld0XNWcZRg12ytdf58l%2B7GbTLUIxAbUkKM9NWJ2vTRa3TcfEPT3KC5maomF3Pc0mmIwoXv4mjRpl4ZHYEtfVYIQrEyc38%2F8ablv8Sqn%2FXdpWH%2B%2FCLMQHTLbLzIKMY5jsZRf9GlIf%2F2v8Y6ae5y9Sc1EJXmn9P%2Bcbh8I5CikdE4oL04MwLhCGE3hnnoBzZHAuNaqb8h6Nr6DG%2FvTd6j%2BtXToFyegIYe1spFJYz0gSQDFGN73rqi8%2B7oSScG8r4fGju0HfXi85kLrPiFPbGNSI%2FP9STG8%2BTxSg5ADVnM8RDQUcZjNDQ%2B46HYi3xoHcVx4%2Fa7iEMJyw5MEGOqUBndKOPPUErAlrS2JWJHmiihTIaU6HfiHAOs4AnGGUatgsCn120Z%2BloZ9f6%2FaAs9kHpV0bkpmecO6w8%2BYE5g5mbGGdt%2FaI9R6Imco6RGTDfltXle%2F0X76yIy7CZCE9lVuOGGTJ1m8M%2BZfWAsX7WJ%2BoBfP97yimUqR%2FbyfX1MVmCEuykBTFSdOqh7eh5IzprlwCm%2BPNV4IQBmkK6ugRkGAj0weWfxeB&X-Amz-Signature=21e12310a2671934e6c8030ec04c40475a679d1cbd339754074d25b437e909cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
