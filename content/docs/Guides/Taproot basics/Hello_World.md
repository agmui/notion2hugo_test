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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQIV73K%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSJeqBU8NsGKu4u%2BkyiE6qMFhF81GhNaK55s3VFL4apwIhAIa8j9y1uaLdBodLRaOoi5Lc%2F46qyE0FneH9JUgoK7OGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnqmEYccqSv6hPvBcq3AMogkexK8ovIVDpCNmQ4ykjcyypL0i14bYPNycqon%2F1zGCh5I3gIB2l3%2FggFEP8nINc9mCdpP08KAi4YyvCiII%2FpQMLCzK75PD4d3LPhUoyOdluaQHo8e21JYXWsbVrwOSAYCbPoA8q5qpttJtmhI2KmkezyR3fu35tEBKGnV2ZCQ%2FO1zGASC9B7s3v8mrY7FW9604hR3sDW3OxqlGgs756fZaD5782p1sfZMbmSoKkhUBrfnJN0HWvb9KEu27gg%2BpmUoodFNIMmKcQEBLwvuND0q3y%2Fl2423PE3Aem2HuN72h2A7DFrybE6oOrSB6Y7hDqgslISMl1cw5ypJO79EKTylhUY4qY1sCxgGPTa7r9ZgcglZQy29kpm5mGOzIJ7un9br0DJ3ZNHd0nI2zwUE3pYP%2BEBuLZ9wHeIW%2FFFVMJgD%2FJfx%2FB%2B1PZZ8G86JRZPFUTYjaZXzQas%2BP6cKC%2FUj0K%2FVVuNhbiWN8KPezKT28n8QnTpXuKX%2F%2FB%2BV%2FU%2Bow0KXrDPgotbBPg6Uq11fhSjnpPYIZktpHiZSiTZ0wXU%2FZYKA16m7saSgP99z7Wbi4LTQc3rk6vSjKT%2BXLEUJ3PLRD7H2F9%2Bg6tp4XnqjUwkkVMTGpLlr3iKgU9u3D1kjDD77rDBjqkATcSw45eaG0Sj9Op665sJxbdP2fpOmXc5jSGFl64HSHo%2BpR5p%2BR6l9bZSNB0zWX3cN7KdknZeon%2FYJFDxJgE7BGTVomAc5RHLkPuyaU71zTa9he%2BGbIWfh5FW2HipTHyjDrNYSF7Mdr2ttusjYaJhVHaMbKxFhpP56uiHjbx4ZZM7QJ%2FqGWvbaM1updnPe%2FRMxwWcwKingqiADj8FaGUTzvyC9rI&X-Amz-Signature=c26344e7b02bc462148192654ef6a85c6b327f63f0832281e55e1e7b5283cd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQIV73K%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSJeqBU8NsGKu4u%2BkyiE6qMFhF81GhNaK55s3VFL4apwIhAIa8j9y1uaLdBodLRaOoi5Lc%2F46qyE0FneH9JUgoK7OGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnqmEYccqSv6hPvBcq3AMogkexK8ovIVDpCNmQ4ykjcyypL0i14bYPNycqon%2F1zGCh5I3gIB2l3%2FggFEP8nINc9mCdpP08KAi4YyvCiII%2FpQMLCzK75PD4d3LPhUoyOdluaQHo8e21JYXWsbVrwOSAYCbPoA8q5qpttJtmhI2KmkezyR3fu35tEBKGnV2ZCQ%2FO1zGASC9B7s3v8mrY7FW9604hR3sDW3OxqlGgs756fZaD5782p1sfZMbmSoKkhUBrfnJN0HWvb9KEu27gg%2BpmUoodFNIMmKcQEBLwvuND0q3y%2Fl2423PE3Aem2HuN72h2A7DFrybE6oOrSB6Y7hDqgslISMl1cw5ypJO79EKTylhUY4qY1sCxgGPTa7r9ZgcglZQy29kpm5mGOzIJ7un9br0DJ3ZNHd0nI2zwUE3pYP%2BEBuLZ9wHeIW%2FFFVMJgD%2FJfx%2FB%2B1PZZ8G86JRZPFUTYjaZXzQas%2BP6cKC%2FUj0K%2FVVuNhbiWN8KPezKT28n8QnTpXuKX%2F%2FB%2BV%2FU%2Bow0KXrDPgotbBPg6Uq11fhSjnpPYIZktpHiZSiTZ0wXU%2FZYKA16m7saSgP99z7Wbi4LTQc3rk6vSjKT%2BXLEUJ3PLRD7H2F9%2Bg6tp4XnqjUwkkVMTGpLlr3iKgU9u3D1kjDD77rDBjqkATcSw45eaG0Sj9Op665sJxbdP2fpOmXc5jSGFl64HSHo%2BpR5p%2BR6l9bZSNB0zWX3cN7KdknZeon%2FYJFDxJgE7BGTVomAc5RHLkPuyaU71zTa9he%2BGbIWfh5FW2HipTHyjDrNYSF7Mdr2ttusjYaJhVHaMbKxFhpP56uiHjbx4ZZM7QJ%2FqGWvbaM1updnPe%2FRMxwWcwKingqiADj8FaGUTzvyC9rI&X-Amz-Signature=81c07ef7732eb048f7f4b38501ec42c85189f3c672d2396f04b9990a3c797d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
