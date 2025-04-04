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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAXX4RQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YmicE5gdoqcWjKdZkpWfI4a%2Fei7czfiNnabOMetk2QIgYa5WXDqdlqqwhsCk1JZtubcbnx7gBQQvPOAi4HkBXyoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIbJH%2FdYjBu5MpIAtyrcA8XixBuGrQYgS1d1BqSdlqPNwgLeyT58v6%2F0LTtQTjLCh%2BXGSmKts%2Fh2IFMx7TKhLefI%2FJdT1mXfal0jAab2QNmFgFIwT8G%2FvP2ELT5HqwOBHv1c%2F6LmKR%2FxocxwS1X0Z702x0K0G2A4X90XWflmd%2BMzongNzvWcKxQ6fjnHheGuE5s0zRtbz2dSxGN2BfDPnnj2sCzIKyzo%2BF%2Fjd66QnAolAWEL4zvyzXHpT%2BAPxgNPdzJHJi%2F9l%2BvReA9MNYriSxmRmfYIMnpOUU2YTT%2B7g0H68PZM%2B3tI61zYMVSgwItku6xLHfcQW7lT%2FZVWja2STeAGbl9RZQSWTDaRQriOlryY%2BqxIg4J4FauHEThCzbgIHCwIIdqVjIJwLMLyt78%2F6eKpx7igu56lNhoQsmVYaQ1RVAbd3wVYR5AMGUwFoPtyoZ121jItePjAGl39tCGEC50ytFPndJwzIJRvCoJdBcFSPz8J3hMKA6cK0swkBsApdmMF53XT%2F6KPRmghuM1Qg%2Fv5OgIr%2BGTEPbJn8sby9zla5dCU4sfZiAZZSbr5kKpfd5FP0irCA9uZ87RTkt%2FotYX%2FUkU1AFlaMVTxx%2FNck%2FZjKo2cQp4vK2PdrDwXtDaD2FMhSAngCiBD9j%2BfMPOIwb8GOqUBHpuq34X%2BYHWLsaRB6Ro5vnkkO5Xn4mEH3IYzJ5TDYxAzMJgJ5BRNf25FMhBAAJcgYgD67%2B2N4osOLRx391N7UwfqJbOscHQUUbRu1aMOJwZ2cKHtrBt5AOsz2Qjk4puTdXHS4TWxad0sCFLQTkKv9h8M7sy27fhCWYwOME5XAEuOmerWckeQppYh8gJBt6xjzWnhLD73FXIVfY7xbZZ7EjBZmMwm&X-Amz-Signature=c3314e5831f692da3df4c827556ef54a5cc8ff89fa3e9736c6c6eb7f5c0dfe7e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAXX4RQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YmicE5gdoqcWjKdZkpWfI4a%2Fei7czfiNnabOMetk2QIgYa5WXDqdlqqwhsCk1JZtubcbnx7gBQQvPOAi4HkBXyoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIbJH%2FdYjBu5MpIAtyrcA8XixBuGrQYgS1d1BqSdlqPNwgLeyT58v6%2F0LTtQTjLCh%2BXGSmKts%2Fh2IFMx7TKhLefI%2FJdT1mXfal0jAab2QNmFgFIwT8G%2FvP2ELT5HqwOBHv1c%2F6LmKR%2FxocxwS1X0Z702x0K0G2A4X90XWflmd%2BMzongNzvWcKxQ6fjnHheGuE5s0zRtbz2dSxGN2BfDPnnj2sCzIKyzo%2BF%2Fjd66QnAolAWEL4zvyzXHpT%2BAPxgNPdzJHJi%2F9l%2BvReA9MNYriSxmRmfYIMnpOUU2YTT%2B7g0H68PZM%2B3tI61zYMVSgwItku6xLHfcQW7lT%2FZVWja2STeAGbl9RZQSWTDaRQriOlryY%2BqxIg4J4FauHEThCzbgIHCwIIdqVjIJwLMLyt78%2F6eKpx7igu56lNhoQsmVYaQ1RVAbd3wVYR5AMGUwFoPtyoZ121jItePjAGl39tCGEC50ytFPndJwzIJRvCoJdBcFSPz8J3hMKA6cK0swkBsApdmMF53XT%2F6KPRmghuM1Qg%2Fv5OgIr%2BGTEPbJn8sby9zla5dCU4sfZiAZZSbr5kKpfd5FP0irCA9uZ87RTkt%2FotYX%2FUkU1AFlaMVTxx%2FNck%2FZjKo2cQp4vK2PdrDwXtDaD2FMhSAngCiBD9j%2BfMPOIwb8GOqUBHpuq34X%2BYHWLsaRB6Ro5vnkkO5Xn4mEH3IYzJ5TDYxAzMJgJ5BRNf25FMhBAAJcgYgD67%2B2N4osOLRx391N7UwfqJbOscHQUUbRu1aMOJwZ2cKHtrBt5AOsz2Qjk4puTdXHS4TWxad0sCFLQTkKv9h8M7sy27fhCWYwOME5XAEuOmerWckeQppYh8gJBt6xjzWnhLD73FXIVfY7xbZZ7EjBZmMwm&X-Amz-Signature=02abd24dda29ac350881c04d210ba5b06f299031a92879434372e6f2e5ebae9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
