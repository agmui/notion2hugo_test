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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7GTJCS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSDfZ%2B33BglNZlgy6%2FCdApUK3x3lixjCUE%2BWgOaaoeFAiEAykyI0wxJxp1jePOfGe%2BAx3WRkvgDoZaXvtTWfXPr5n8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B1UnlxycKD0cDevircAyRGQVzCqEcSfoVJVIOtT9Tl6GCE69YWofIzMVuFYi9s%2Bhrxy9y4O5nDt5SGJaeAWgSIb%2F3YMGA3J9JOCFia0btAYZ5S420ldQeN9yiGKeG6WuWXRJRO6fq1tDP9tBCy7we%2B8bDVNNiRKKkiffqFFGfSZSshyKKFSL8zVUuK9TGluDaR%2FiGWh6KGYRBzg6qM3C37Fa%2F9FUAoVg8Tjm9njm7FXX9Flelp2BO9nWCMQBLfIwrTSiZLXujJ8kQF4Kkg1jYNc2QO5LhQgLLkNIA5kDBNjteid5M6PoEmFAxFqG1UEvwO2eS0LQKj3xIXCLE9mxl00nMKLhEtXybTQrbaAaiyhT9g2XqS7k26uurCQW6qdk9seWUtoTnYIP95hzUSX0kmjFSBMGFNufz1U9RAlwGfU9TPJ7%2F5pQnXXBcHROKaCrgEwcdwe1DO4QY5Ucyr7MbwHfs5MBFKVH8xgaZb1bRXOV8fHLE7pJOMnUswa5a4hkhFisBTULLWS%2FNzrmsnT70WsQjvKG9%2BqGv9sP1PhMtYKadkPEckNh535myUWgSdC13MXa39ntqPoRC0qtu6JoOOAf1dOBDfH7XlvYLwM%2FVEgqU5L2WpSgjCyCm0yx0dRrQTIktccYNSCbk5MN6zzsIGOqUB7C6KJnRVKiF2ctGNst14HMGT9kU5eSnmdRctahmB0o%2F6ozw0uamya7lykSS1dx44TJPIOL2v%2BmxKrq1Sv6ibxmPKKz5CQHDiOR0jJDkmJ90tGnKhKEThlVtj6%2BBaN%2ByJFB6t048nHqdQXaU6eKPOOCWPykoKlon0cpK1zgV3jzmYO%2FFtjixLF5mY%2FKPZnqd6FTiV6oe6Q5mWM%2FG9C7EWCfjTVUBE&X-Amz-Signature=618b1b2f404ef6fabeb96d4b907f735810c478a5cc804c47c15489b7ec6189a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7GTJCS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSDfZ%2B33BglNZlgy6%2FCdApUK3x3lixjCUE%2BWgOaaoeFAiEAykyI0wxJxp1jePOfGe%2BAx3WRkvgDoZaXvtTWfXPr5n8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B1UnlxycKD0cDevircAyRGQVzCqEcSfoVJVIOtT9Tl6GCE69YWofIzMVuFYi9s%2Bhrxy9y4O5nDt5SGJaeAWgSIb%2F3YMGA3J9JOCFia0btAYZ5S420ldQeN9yiGKeG6WuWXRJRO6fq1tDP9tBCy7we%2B8bDVNNiRKKkiffqFFGfSZSshyKKFSL8zVUuK9TGluDaR%2FiGWh6KGYRBzg6qM3C37Fa%2F9FUAoVg8Tjm9njm7FXX9Flelp2BO9nWCMQBLfIwrTSiZLXujJ8kQF4Kkg1jYNc2QO5LhQgLLkNIA5kDBNjteid5M6PoEmFAxFqG1UEvwO2eS0LQKj3xIXCLE9mxl00nMKLhEtXybTQrbaAaiyhT9g2XqS7k26uurCQW6qdk9seWUtoTnYIP95hzUSX0kmjFSBMGFNufz1U9RAlwGfU9TPJ7%2F5pQnXXBcHROKaCrgEwcdwe1DO4QY5Ucyr7MbwHfs5MBFKVH8xgaZb1bRXOV8fHLE7pJOMnUswa5a4hkhFisBTULLWS%2FNzrmsnT70WsQjvKG9%2BqGv9sP1PhMtYKadkPEckNh535myUWgSdC13MXa39ntqPoRC0qtu6JoOOAf1dOBDfH7XlvYLwM%2FVEgqU5L2WpSgjCyCm0yx0dRrQTIktccYNSCbk5MN6zzsIGOqUB7C6KJnRVKiF2ctGNst14HMGT9kU5eSnmdRctahmB0o%2F6ozw0uamya7lykSS1dx44TJPIOL2v%2BmxKrq1Sv6ibxmPKKz5CQHDiOR0jJDkmJ90tGnKhKEThlVtj6%2BBaN%2ByJFB6t048nHqdQXaU6eKPOOCWPykoKlon0cpK1zgV3jzmYO%2FFtjixLF5mY%2FKPZnqd6FTiV6oe6Q5mWM%2FG9C7EWCfjTVUBE&X-Amz-Signature=1a9bdfa6cdffdecb68e057dd4481070f6f77cb84645454a194c37fc32310a3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
