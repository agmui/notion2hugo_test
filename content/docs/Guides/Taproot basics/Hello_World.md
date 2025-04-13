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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJUHXDQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIH4JKKxnUS%2Bm%2FSegQSiO8NpJ3bKX73ORGZQgQxR4K1ysAiEA%2BTzbP1bNpX7oOrWKkgK8qg53jslYaBhGgVpeyGGFSI8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpV8%2F6g6FxUvE1Y5yrcA%2BA2Z2E4FbMukSZif5q%2BldyPHKYH7Z9NPt3CllF5DVmBSq13h9RZNcURZwhwcoaa9C8clgcJ9UHyvNW%2FbRXei%2BZw7OEdwWQ0EjpxqInzIHD5Hlxhk5umehJbnXmbsONl0tGzy%2FNtnLHGEy1nybUMf5LvzN5NGedIEfghsBtLq1el0rrwR8NVdEZPRrs9O6l1bX0zDBOuHOMokJ2sU7hpAjL8OE6v%2B6wkFDdtLVNVcb6F9nnqKlnuxUlw6TP0iNqPdBIsVIZicRJpxPZETZUZA4MWidZKTLN4TldGQgu3EsFPJCp%2BDgtPk6ZwBtJxRWTTGUNCKDL%2Frztn2T2NSG9d66IbHQu91Ws8LWhXijhgCktIB6u9AU8OIGrIirjD%2B4A81WAeC%2Bxz%2BV2%2B6K6uu3Xwquzb2zHKNsoOs3%2F50YF76FEqyYPV9c%2FkB1VeMRqsJIDKk2T1k%2Bw5fyr8flf2smMv2smaOSws0kB7ZGna9ZRx06%2B0gEBWPrpjHqm6ZPXZSmgWrTPFir1DRN9gCmI7F4IUFGL7KYFefH3%2Fpt2i5ThVf7q8Shbp78oxF4J1x9ol60PrkaHUPkWTNhaATWJhBVLLdZE8wf5Grr07xVrWV%2FoqmVH%2BI24RXhcCL0zc6lWSMJuC8b8GOqUBqfNuIQXOoRV9pK2SxiLAinzhBOPEvhPnpIg58LaWjQuFmRThhbc4ZUgoW6shrg7WqBPFhZxsoai14tH3IQr8rP1p%2B0GNo%2BeUuigEoIQnpBfn89fSHhRoG2jBcb%2F6f7FIaJCPDQwNzF%2Bnr01XuJmraFgmH9g7O2asce4i9DW2aL8h3yXjDwYWQtZs4%2BgJe%2BXL0K%2B1OSOckEc9bs2nzlQnOtvi46DZ&X-Amz-Signature=609610b5bd0b59bf87215ccfe84ff34fd74a2167c8765216076853b63baa10ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJUHXDQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIH4JKKxnUS%2Bm%2FSegQSiO8NpJ3bKX73ORGZQgQxR4K1ysAiEA%2BTzbP1bNpX7oOrWKkgK8qg53jslYaBhGgVpeyGGFSI8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpV8%2F6g6FxUvE1Y5yrcA%2BA2Z2E4FbMukSZif5q%2BldyPHKYH7Z9NPt3CllF5DVmBSq13h9RZNcURZwhwcoaa9C8clgcJ9UHyvNW%2FbRXei%2BZw7OEdwWQ0EjpxqInzIHD5Hlxhk5umehJbnXmbsONl0tGzy%2FNtnLHGEy1nybUMf5LvzN5NGedIEfghsBtLq1el0rrwR8NVdEZPRrs9O6l1bX0zDBOuHOMokJ2sU7hpAjL8OE6v%2B6wkFDdtLVNVcb6F9nnqKlnuxUlw6TP0iNqPdBIsVIZicRJpxPZETZUZA4MWidZKTLN4TldGQgu3EsFPJCp%2BDgtPk6ZwBtJxRWTTGUNCKDL%2Frztn2T2NSG9d66IbHQu91Ws8LWhXijhgCktIB6u9AU8OIGrIirjD%2B4A81WAeC%2Bxz%2BV2%2B6K6uu3Xwquzb2zHKNsoOs3%2F50YF76FEqyYPV9c%2FkB1VeMRqsJIDKk2T1k%2Bw5fyr8flf2smMv2smaOSws0kB7ZGna9ZRx06%2B0gEBWPrpjHqm6ZPXZSmgWrTPFir1DRN9gCmI7F4IUFGL7KYFefH3%2Fpt2i5ThVf7q8Shbp78oxF4J1x9ol60PrkaHUPkWTNhaATWJhBVLLdZE8wf5Grr07xVrWV%2FoqmVH%2BI24RXhcCL0zc6lWSMJuC8b8GOqUBqfNuIQXOoRV9pK2SxiLAinzhBOPEvhPnpIg58LaWjQuFmRThhbc4ZUgoW6shrg7WqBPFhZxsoai14tH3IQr8rP1p%2B0GNo%2BeUuigEoIQnpBfn89fSHhRoG2jBcb%2F6f7FIaJCPDQwNzF%2Bnr01XuJmraFgmH9g7O2asce4i9DW2aL8h3yXjDwYWQtZs4%2BgJe%2BXL0K%2B1OSOckEc9bs2nzlQnOtvi46DZ&X-Amz-Signature=a70ae227f8643af485ef337406ab0cca825480eb2d82152a1868f7258fef9216&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
