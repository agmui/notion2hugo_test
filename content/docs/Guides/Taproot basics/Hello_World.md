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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZW7LCYV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGbut%2FwbZdSYbGEVwLwfrNcr35Uin4D9%2FoQ%2FK8ha4zwIgd4K5GR2FM%2B6Jzo5e6NisoK1zSkxwXzB%2BWBZgZkE62UEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3w49uKuCs0S0YSVircA2N1tRGPjdyd1MdFX%2Fj6RgiTP1uscku1fZKjpja1sOK5SeTW94kpNWHZDQnMszl6KhA5d2ME6diaOCDMqDh3FNrKhoKb8f6%2BvMLr4QshRR%2FzPGzjlNLFovLl4TRhXLg1c4Z6Bb8dITxbi%2BXHyAi%2Br4sw82k70ve5A8LZoAux7IhXF0gFsHYR80y9bgX082iwnMayMswjn1gcjEtPPGBuGmA5BOXWsor9R5jyR64JF3IT6HtR4gXjqMzTZqu0jWFRcA%2Fr0slZG67OnvTamvHEGRTsC0dzfxkY1dmDl1prfVjG9y%2BCXYxb8BHPJYytT0DvMIEJgHM0ixTA6UmGjBCB0BGWlunEdIYh5VZvWquKUDznvthgBzYX%2FR3l0AD6jd6TIWQTY13qM2QjIJi4284cQN75BBBHjKzOGtr6p9tPmQLt481PH2u0xK%2BnwlQCBJbUTIIfw3gCGxovm4dFflGm0JEjlVV%2FoofEhurb21foZvcxk1MDoEfYeUjYEAaag2PNqdjRvrxCZ19NnEJyIImo2OHXrX5ZIGgHlIVKS9VSMx7%2FXuq1TJneltL1y%2B0lGHh5tUAP7rdgsca3aCY7EikjdBU%2Bad4FSRc6NWjdZdo6%2Bm6N1pckYRzqkMKR7WXEMMax5L0GOqUB%2FEzrOJGrDYlMcjgt5cerYVIMTJ5xcrwQNKm8vjz7N1XSMOzoBlgibzXvV5w4GM%2FSwamwKrDg9IIzCL%2FuChnvI6IYQKBGKLL6Z9ijp8dmjhRBcdZR6qW2mJhrUKTpeHjXI4myM5wGOcCtKGeV5xSdr82FMUlkkFefckrPK%2BawwtDkwzheCGOCP5iuuyhxCpkEX9ND4ZUW08lX%2FbPZCf9ZxDiY1W5H&X-Amz-Signature=48eb68c5b556f2e036d46d9a37a063d4245ed837038b800e5732188ea54bd5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZW7LCYV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGbut%2FwbZdSYbGEVwLwfrNcr35Uin4D9%2FoQ%2FK8ha4zwIgd4K5GR2FM%2B6Jzo5e6NisoK1zSkxwXzB%2BWBZgZkE62UEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3w49uKuCs0S0YSVircA2N1tRGPjdyd1MdFX%2Fj6RgiTP1uscku1fZKjpja1sOK5SeTW94kpNWHZDQnMszl6KhA5d2ME6diaOCDMqDh3FNrKhoKb8f6%2BvMLr4QshRR%2FzPGzjlNLFovLl4TRhXLg1c4Z6Bb8dITxbi%2BXHyAi%2Br4sw82k70ve5A8LZoAux7IhXF0gFsHYR80y9bgX082iwnMayMswjn1gcjEtPPGBuGmA5BOXWsor9R5jyR64JF3IT6HtR4gXjqMzTZqu0jWFRcA%2Fr0slZG67OnvTamvHEGRTsC0dzfxkY1dmDl1prfVjG9y%2BCXYxb8BHPJYytT0DvMIEJgHM0ixTA6UmGjBCB0BGWlunEdIYh5VZvWquKUDznvthgBzYX%2FR3l0AD6jd6TIWQTY13qM2QjIJi4284cQN75BBBHjKzOGtr6p9tPmQLt481PH2u0xK%2BnwlQCBJbUTIIfw3gCGxovm4dFflGm0JEjlVV%2FoofEhurb21foZvcxk1MDoEfYeUjYEAaag2PNqdjRvrxCZ19NnEJyIImo2OHXrX5ZIGgHlIVKS9VSMx7%2FXuq1TJneltL1y%2B0lGHh5tUAP7rdgsca3aCY7EikjdBU%2Bad4FSRc6NWjdZdo6%2Bm6N1pckYRzqkMKR7WXEMMax5L0GOqUB%2FEzrOJGrDYlMcjgt5cerYVIMTJ5xcrwQNKm8vjz7N1XSMOzoBlgibzXvV5w4GM%2FSwamwKrDg9IIzCL%2FuChnvI6IYQKBGKLL6Z9ijp8dmjhRBcdZR6qW2mJhrUKTpeHjXI4myM5wGOcCtKGeV5xSdr82FMUlkkFefckrPK%2BawwtDkwzheCGOCP5iuuyhxCpkEX9ND4ZUW08lX%2FbPZCf9ZxDiY1W5H&X-Amz-Signature=e32bb0cc4b366a1e909727f93e01223bb1ba4c1686178208ad878bb5827133a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
