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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SDZMIP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDaJaNgUCFgAJKRe01BZDrjOeSo%2FvoxDtS1AwXqXrcMLAiEAzT9eXk1Hr%2FX7dTkxoJYB1P8chodh5T9YcxV3qVyTdJEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbZLNCzcfo%2F8ILGNircA9z8%2Bqu01Q0R7fVuNEH38Au4XFjWlDwtIFyYPyw%2BLvtkHldjO0p3vpI2kH7e3wLKnBA1R61CXzzFIOzb%2FTKn17ltTuHAVGwWCEPM5Uv8ENK9MUs%2BzzShOWocWUo29DnU3a1x%2BZ4f3kqV40my8T9mCdcjlx0KFwxjng6UQwIRyEHySBW9%2BHbN5Oy%2FI8FbtytnrBCpzgog3fKVDAr9M1uY%2Fzb%2FEy%2Fb3Th7ZtAtNsL25gvqZyKm444jVmAoCaKjhgChdu0Rd4lOnthJDjlvW%2FwMbyySFnP5%2FLt099wPgmFqAygkcHqw0LayUQMqB4PSJ4Ycleyu9o8FQFsg0TQUtmdtYLM2UrkzQm9esN2Ls3VAsZBglziB%2FzMuja08RfWjvrzMU9yJ8xFUmI%2Fd8urvkpIX8k1PrILQJ%2BfNnUjczxNLQvONd0ljcRfQy79x2dhe9xyketwqqWEVCGokZc6zpGvua3fXw8fry%2FWbaRSqeCNQDz7fbZ4N6knJHUiHHX1k3%2B9FpDbdJ9LWJybOFWzbBt%2BkXMVyTnK08ehQBSJ%2BG5CNTGd3SJmMLAYe8lGCdrywN7Nbu3fjTRhh5x%2BJnmqbWNzT1Qxk6zwilGYkxkASmlThyBPmKzgZC6pne2Qr%2BiXpMKrHjb4GOqUBV6sB7dtdaHH0r9pGt%2Fvg%2F2LmSp0%2B5tP8MOxCTCnSG7lBAeiF3z%2BAUuHd40MrhtCAV0pe%2FFLM45Kv4z%2FtKdjoyjNjMMeZBcUfastV4XZhB44UdJwf7GepVJ76d0Y4auCFPM5bjSCoNZ4Sr41DMbKKrtTUdK%2FIHQVC%2B0QmUFXWdMzVeIe4kaKOQKiMCFLEz%2FF3uNEypNyRC2ZpUBuTY6qF8oHZC8Sn&X-Amz-Signature=0d526e3ce78749f9442caf2be83fa49d5ab03df85c91e63f0941dbd246b4cc77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SDZMIP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDaJaNgUCFgAJKRe01BZDrjOeSo%2FvoxDtS1AwXqXrcMLAiEAzT9eXk1Hr%2FX7dTkxoJYB1P8chodh5T9YcxV3qVyTdJEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbZLNCzcfo%2F8ILGNircA9z8%2Bqu01Q0R7fVuNEH38Au4XFjWlDwtIFyYPyw%2BLvtkHldjO0p3vpI2kH7e3wLKnBA1R61CXzzFIOzb%2FTKn17ltTuHAVGwWCEPM5Uv8ENK9MUs%2BzzShOWocWUo29DnU3a1x%2BZ4f3kqV40my8T9mCdcjlx0KFwxjng6UQwIRyEHySBW9%2BHbN5Oy%2FI8FbtytnrBCpzgog3fKVDAr9M1uY%2Fzb%2FEy%2Fb3Th7ZtAtNsL25gvqZyKm444jVmAoCaKjhgChdu0Rd4lOnthJDjlvW%2FwMbyySFnP5%2FLt099wPgmFqAygkcHqw0LayUQMqB4PSJ4Ycleyu9o8FQFsg0TQUtmdtYLM2UrkzQm9esN2Ls3VAsZBglziB%2FzMuja08RfWjvrzMU9yJ8xFUmI%2Fd8urvkpIX8k1PrILQJ%2BfNnUjczxNLQvONd0ljcRfQy79x2dhe9xyketwqqWEVCGokZc6zpGvua3fXw8fry%2FWbaRSqeCNQDz7fbZ4N6knJHUiHHX1k3%2B9FpDbdJ9LWJybOFWzbBt%2BkXMVyTnK08ehQBSJ%2BG5CNTGd3SJmMLAYe8lGCdrywN7Nbu3fjTRhh5x%2BJnmqbWNzT1Qxk6zwilGYkxkASmlThyBPmKzgZC6pne2Qr%2BiXpMKrHjb4GOqUBV6sB7dtdaHH0r9pGt%2Fvg%2F2LmSp0%2B5tP8MOxCTCnSG7lBAeiF3z%2BAUuHd40MrhtCAV0pe%2FFLM45Kv4z%2FtKdjoyjNjMMeZBcUfastV4XZhB44UdJwf7GepVJ76d0Y4auCFPM5bjSCoNZ4Sr41DMbKKrtTUdK%2FIHQVC%2B0QmUFXWdMzVeIe4kaKOQKiMCFLEz%2FF3uNEypNyRC2ZpUBuTY6qF8oHZC8Sn&X-Amz-Signature=bf1bea840fa422295e0d6884f9121969523bc9e349086c5c4b96358df9ef21a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
