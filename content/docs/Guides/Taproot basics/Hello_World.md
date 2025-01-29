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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXPXEIE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF9TZq5Tcw52xpO57oVyBb1vztsYhZFP%2BraKTFhiadqAiEA%2BF4t67iiHjtkUd4YPWJ0TA%2BltZGjLRaemEu1pfaKtcwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaiRRlndCIqIIRlzyrcA0N3Y7zADs7EqxYyiyZQzCeVYdmugBbsEXpSWkzB2agC6jsTZPz%2FdDlqWqmLcZEw5HfSYYrv%2Bsp2EgBWJimjLNEpeFJC5ivs5jLo2Cko25p%2B3OF%2F4QgN7h5bqrmpz6ovNj7eghiVUSbZ%2BUK8SU%2B00VESIWTRQDcf8fycSArwTyasfFFdaElHIHNWbg%2B8bH6Z%2FrUffjz0utSQJfTgN5R9pqFijjrOQyzlmBD%2BdwcFeiQ8Z4XEbV7ZAGExgpkVhQUHzZp%2FHLbc5Yn7XwAY1YTPpsPMduqj3WYV41qp%2B%2BWiOZwiwzYbDm5WLeZYmS9MN8e2X%2BfWLfxWspGa8SlDVIIZc%2F062kcXSRJlas1sQKN7mutqUQ%2F0%2FHMJA8K985muf9ih4c9p%2BI15NV01%2Fohhsc1upGyw6kC6vSjhtvuVQzKpypmSzkGN9jo%2B6G6gTJFPKX6ieBCjvIBoWutEkMf3lHjs8XIxLTKsxumQd8TCzgc3kBZsioIoB2zqJJ8PTThv4DvUZMx9vGyNUPca%2BGT7nZvYhBzMpJKifpbdL3okNSypAbJKN54fPAGZVt8hJr4OEsyWVO111Z%2FoOsZbCQaSepJvJDrpxQrAjkKYQasRVWxMF8qpeSF0r4KFSXcO2U6jMK7M6LwGOqUBI%2BEu3n3XLnXAXJtaEJIn%2BDdJMBavQ2uMjsxexdGcUOaRXeoKFXDPH0XI5eD%2FdVD6V8T7t5ephKlIhm4glLH%2FLi8e9OG4MEjlfqylwcgVV%2BbNJClULhwnr1hVN8VQlUnwpxP3zMvEe5rzV%2BiELlEcIoePZCKEKUPWXLuoylHiLOxV3YQ0Ar2Mite8z9FGjaSq0DNF0HvD6nj7oOjMUwR8PVK6rhlq&X-Amz-Signature=929701cf90143cd0ea2a3c42ce3888978d96c12b1e911a63095b2939c1fc27b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXPXEIE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF9TZq5Tcw52xpO57oVyBb1vztsYhZFP%2BraKTFhiadqAiEA%2BF4t67iiHjtkUd4YPWJ0TA%2BltZGjLRaemEu1pfaKtcwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaiRRlndCIqIIRlzyrcA0N3Y7zADs7EqxYyiyZQzCeVYdmugBbsEXpSWkzB2agC6jsTZPz%2FdDlqWqmLcZEw5HfSYYrv%2Bsp2EgBWJimjLNEpeFJC5ivs5jLo2Cko25p%2B3OF%2F4QgN7h5bqrmpz6ovNj7eghiVUSbZ%2BUK8SU%2B00VESIWTRQDcf8fycSArwTyasfFFdaElHIHNWbg%2B8bH6Z%2FrUffjz0utSQJfTgN5R9pqFijjrOQyzlmBD%2BdwcFeiQ8Z4XEbV7ZAGExgpkVhQUHzZp%2FHLbc5Yn7XwAY1YTPpsPMduqj3WYV41qp%2B%2BWiOZwiwzYbDm5WLeZYmS9MN8e2X%2BfWLfxWspGa8SlDVIIZc%2F062kcXSRJlas1sQKN7mutqUQ%2F0%2FHMJA8K985muf9ih4c9p%2BI15NV01%2Fohhsc1upGyw6kC6vSjhtvuVQzKpypmSzkGN9jo%2B6G6gTJFPKX6ieBCjvIBoWutEkMf3lHjs8XIxLTKsxumQd8TCzgc3kBZsioIoB2zqJJ8PTThv4DvUZMx9vGyNUPca%2BGT7nZvYhBzMpJKifpbdL3okNSypAbJKN54fPAGZVt8hJr4OEsyWVO111Z%2FoOsZbCQaSepJvJDrpxQrAjkKYQasRVWxMF8qpeSF0r4KFSXcO2U6jMK7M6LwGOqUBI%2BEu3n3XLnXAXJtaEJIn%2BDdJMBavQ2uMjsxexdGcUOaRXeoKFXDPH0XI5eD%2FdVD6V8T7t5ephKlIhm4glLH%2FLi8e9OG4MEjlfqylwcgVV%2BbNJClULhwnr1hVN8VQlUnwpxP3zMvEe5rzV%2BiELlEcIoePZCKEKUPWXLuoylHiLOxV3YQ0Ar2Mite8z9FGjaSq0DNF0HvD6nj7oOjMUwR8PVK6rhlq&X-Amz-Signature=fc3970e4f5363fab3ea498a151608e2ad84d0d84c41d5c2470c16d7c00a4c26f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
