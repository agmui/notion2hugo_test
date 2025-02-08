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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PB6WA3O%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1LWE%2FNZU6a7B%2BfxuOdMavPCpQzcmmgYo2towLP9II0QIgd06Wt0AJJuvqKqN9iLuAk%2BDEx4px%2BdX8FE54cezLLoUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeHqS6WISrLzimmcyrcAw1ajRoOGyJztpdzFEgXfh9SsRCccW5qUiHlzaTO5mBUdSH5Kco36qopyXKlA6nCFQmEx5JFhqeHM93WZdK0vyOKX7FUPCDJZK5QBI0XQhIdr6utqzF4Y21b%2F0iZ%2B4CDD3DdZ6HXXETu4U2TWAHLmn%2BCTnVuzT7Y8ydA%2BsdLw6myVuxSwR68u1id%2FAvIEB%2F%2BQ8%2Bn5d4diTnOxsKPCH1WvXvr3oaWFJb2pnSWmNmeGS3c4v5zqhvCAM8xyfVVm2fbUk9Ux32xMrQbXuAI6EmKVq%2BQn1NtShPr%2FaxDtBavSpugipgprMxr2VyYbIk5MyTDJdZw1xA8%2BbpT9DKa%2F6kjoGhn6iaR4puN82D95kNx1lVUthl5MKkpgH534ze45AghF7Zh%2BwsDhV%2B6XIVqQfTEMN4p2PDndU6aJBtt4F0SLl3bxbZVnRIxA8Nw8jzsQf6Y70fuN0EzSds3dJo6AmCcMSvXalWrfBCt1H0EBtjWjL9CT1XsruH%2BaCAo1nV92ZQkpwWbyTS%2BdI2TlipJSogcbGoZ1k6xDnlhs75KLa%2FFu2YT0fUEP4Yz%2Fa9T3rkYf2lHKbrKS9vASyKrvDFajuOw%2B4sOqLVOYll0afEyCNepjhw33JbAlBC4c%2Bc6NkBBMK2Gnb0GOqUBm7TOFEEveb1KM1Lq8I%2BtEMtgIZs0fPD16Q8N%2BFginPaSq3PjvrEsBuAGt7ADNxehXPS2KO%2B0fQQyEaa7UiB9GBO1AuuMF2VqRSd1MsCgvcSTlOAqCVdPZMxmQ2ZN8gFEKvfOFvuoez8jc18G22eGDADmfYr7oyRQbYBTBYZgbr2ta7G48VqBZxCT6aZPq2NqpRvU0%2Bt211QmyBfLattyxXnIttVM&X-Amz-Signature=03e47ed31adc380cdc86146dc5c97e041ff43c8ab8ad4359c1806715e744e6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PB6WA3O%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1LWE%2FNZU6a7B%2BfxuOdMavPCpQzcmmgYo2towLP9II0QIgd06Wt0AJJuvqKqN9iLuAk%2BDEx4px%2BdX8FE54cezLLoUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeHqS6WISrLzimmcyrcAw1ajRoOGyJztpdzFEgXfh9SsRCccW5qUiHlzaTO5mBUdSH5Kco36qopyXKlA6nCFQmEx5JFhqeHM93WZdK0vyOKX7FUPCDJZK5QBI0XQhIdr6utqzF4Y21b%2F0iZ%2B4CDD3DdZ6HXXETu4U2TWAHLmn%2BCTnVuzT7Y8ydA%2BsdLw6myVuxSwR68u1id%2FAvIEB%2F%2BQ8%2Bn5d4diTnOxsKPCH1WvXvr3oaWFJb2pnSWmNmeGS3c4v5zqhvCAM8xyfVVm2fbUk9Ux32xMrQbXuAI6EmKVq%2BQn1NtShPr%2FaxDtBavSpugipgprMxr2VyYbIk5MyTDJdZw1xA8%2BbpT9DKa%2F6kjoGhn6iaR4puN82D95kNx1lVUthl5MKkpgH534ze45AghF7Zh%2BwsDhV%2B6XIVqQfTEMN4p2PDndU6aJBtt4F0SLl3bxbZVnRIxA8Nw8jzsQf6Y70fuN0EzSds3dJo6AmCcMSvXalWrfBCt1H0EBtjWjL9CT1XsruH%2BaCAo1nV92ZQkpwWbyTS%2BdI2TlipJSogcbGoZ1k6xDnlhs75KLa%2FFu2YT0fUEP4Yz%2Fa9T3rkYf2lHKbrKS9vASyKrvDFajuOw%2B4sOqLVOYll0afEyCNepjhw33JbAlBC4c%2Bc6NkBBMK2Gnb0GOqUBm7TOFEEveb1KM1Lq8I%2BtEMtgIZs0fPD16Q8N%2BFginPaSq3PjvrEsBuAGt7ADNxehXPS2KO%2B0fQQyEaa7UiB9GBO1AuuMF2VqRSd1MsCgvcSTlOAqCVdPZMxmQ2ZN8gFEKvfOFvuoez8jc18G22eGDADmfYr7oyRQbYBTBYZgbr2ta7G48VqBZxCT6aZPq2NqpRvU0%2Bt211QmyBfLattyxXnIttVM&X-Amz-Signature=40928ca0baea89cf2c6d693060a8fcc42eddc8a6298bfe1a60730fff761520df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
