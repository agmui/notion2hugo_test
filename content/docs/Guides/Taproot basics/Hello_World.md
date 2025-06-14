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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQM4DUD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDCMiOka%2BwRhHhT1EpYodz8OhGwdzy9z4GzP0dzcQ%2BVBAIhAIJkVCghc624%2F47Us7665QNYEAQTV6xELcPHC9QhVboiKv8DCCcQABoMNjM3NDIzMTgzODA1IgyA1SJAmMcU7MXuOJUq3AOCas3F19Bo3T3UZsdOzy4BGbsVhC7vJ77R9SmcQRrFcZja%2BOP0GLuYKz%2Fs1oGP2046bmVpPltb%2Bahj%2FEwd1JJRXmua5PBFEJ9tD3Lr3Zb8FyXtE3vLuavxF2LmHl6jOPm6JojreaUqBWjWyg1A%2FQJhs6%2B%2FmP%2B3Y6wkDa9FvWc4MCazFpiaOIKPerzYXLGn0jLPddMKVd5gcufJYRUTFaUPDgpX6SNSw6%2BvIX2R%2BagJXzF0QxkBe7iDfw8Zni%2BTIJ5Rm%2B4s2jRXdDuO1tebWMD63B90qIiER2lKhxTn5Kt8EoFgIR5U3pgV3xGBxYPUGAkcDwjIsus8pPu2K5OA4Qa39ZYowK%2BJEfZt10szd0A8rVmzLzfwDDa9iFs8iTCp%2BpOvTH23cETo6%2F3XHxwlPVjg1vmRyaZC967j1JQb3cuJBZkHurvAtTe0PJAKnz9Xg2QU18j240WvWk0RYqMB3JgY%2FvFpq7d0QB672gkuApICLo%2Fwq%2FJL0c%2FbAcgiR7wMHnT2yuOIYS1a9%2FJqw8cuYZ9nkuvUh4HGxja74LKQrv3oxPfV%2FTmH%2F%2FiGj8DB%2BS%2FW4Ne65dOvx4gpa4rsUuUtu47tY7KkzJj%2FE9Yhd%2FWwgdpw2m9dKfIZGu24xgj0yTDbk7TCBjqkAZ5niLbJqcgr0Rr0zONOLACfKOTonaYPJVe2HtLN0BlqnYGJkTJ2wHa5bavpn7sUrqOsZ0VksOmN1RO1pEOBGyQrJqLEBFRKFcBAwdnTE1GULLb%2FTyd62lIT4fsUl%2Fjp7zwS5KSrkTbGhBOCGxoKpQ15m6AY%2B6F6p25drzr%2BOxEujQ1AzZnVz9oWJxvTUDYtbsE%2BWXg3dV2tZ87EeU0T4sCB6Ijx&X-Amz-Signature=e3ff762e1e3798100f028431858659c4458e3367f9eba4c74e86ba8de2e71fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQM4DUD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDCMiOka%2BwRhHhT1EpYodz8OhGwdzy9z4GzP0dzcQ%2BVBAIhAIJkVCghc624%2F47Us7665QNYEAQTV6xELcPHC9QhVboiKv8DCCcQABoMNjM3NDIzMTgzODA1IgyA1SJAmMcU7MXuOJUq3AOCas3F19Bo3T3UZsdOzy4BGbsVhC7vJ77R9SmcQRrFcZja%2BOP0GLuYKz%2Fs1oGP2046bmVpPltb%2Bahj%2FEwd1JJRXmua5PBFEJ9tD3Lr3Zb8FyXtE3vLuavxF2LmHl6jOPm6JojreaUqBWjWyg1A%2FQJhs6%2B%2FmP%2B3Y6wkDa9FvWc4MCazFpiaOIKPerzYXLGn0jLPddMKVd5gcufJYRUTFaUPDgpX6SNSw6%2BvIX2R%2BagJXzF0QxkBe7iDfw8Zni%2BTIJ5Rm%2B4s2jRXdDuO1tebWMD63B90qIiER2lKhxTn5Kt8EoFgIR5U3pgV3xGBxYPUGAkcDwjIsus8pPu2K5OA4Qa39ZYowK%2BJEfZt10szd0A8rVmzLzfwDDa9iFs8iTCp%2BpOvTH23cETo6%2F3XHxwlPVjg1vmRyaZC967j1JQb3cuJBZkHurvAtTe0PJAKnz9Xg2QU18j240WvWk0RYqMB3JgY%2FvFpq7d0QB672gkuApICLo%2Fwq%2FJL0c%2FbAcgiR7wMHnT2yuOIYS1a9%2FJqw8cuYZ9nkuvUh4HGxja74LKQrv3oxPfV%2FTmH%2F%2FiGj8DB%2BS%2FW4Ne65dOvx4gpa4rsUuUtu47tY7KkzJj%2FE9Yhd%2FWwgdpw2m9dKfIZGu24xgj0yTDbk7TCBjqkAZ5niLbJqcgr0Rr0zONOLACfKOTonaYPJVe2HtLN0BlqnYGJkTJ2wHa5bavpn7sUrqOsZ0VksOmN1RO1pEOBGyQrJqLEBFRKFcBAwdnTE1GULLb%2FTyd62lIT4fsUl%2Fjp7zwS5KSrkTbGhBOCGxoKpQ15m6AY%2B6F6p25drzr%2BOxEujQ1AzZnVz9oWJxvTUDYtbsE%2BWXg3dV2tZ87EeU0T4sCB6Ijx&X-Amz-Signature=02afff10ff40eb1cea557cc4a187f8ea8d09763469cd024f2e59a139bfd202f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
