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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WAT36U%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFp%2BfZTF908H7OjqhR9XNs%2FJ%2FtMq1V897OMJ8APTaclvAiEAowheA%2Bz2BOI9vKMLJwCP1Q%2BNZ5JcnmvR81nlPEKNcRgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP6aDjjI7ouJQuT81ircA0pz3YMwJ8rj%2FGKPWT0cmqhkGdLgkeYNTr%2BFemCogqiclWSrJ0DqStQIUKHUqEE47kFIMmONpLcVyFnF3qAJBQstjPQIQcL18E8KD44BGFSn4ZFefKgmP09elLO5Wiib%2BS%2BHU5Zu9Y%2B30DnZbv90Q0cI6otEiU1N9JJqPjwzwC3SgfbKVQw72%2Fv5DfnNRjwncFHxfm37%2FTUrweyWWXtLVWfasuU9Aw89QOKywbhBrhcbEFV%2Fq5AFSpPkmmVMxwwzPO4MBBXWd7SgjW182bpWErabrO9D1%2F228sXHRJOD11DREW9cbqKJYwagk81F9D1vaAqbu0KYi3%2FnspbrrIWkt7TSDWmhe1VSDQe%2F0T4EWxx29BFmPZx%2FW8u5q4a%2Bkr6BDLfwMpLDbgBeVb1Fyi9ave3d0MPWSi5hfLL%2BtNojHtJc45rZSq4UYdfyD5RlCFsOPusXHlFs7uKPDCTbWJeIa7BKFQlDdqZ%2F5v0IZwuC2siTGUdSml%2F3BduKa7GZjsfmVkR3Q5YXNawBwkrP92%2BENu68RZFbSKVKT8X1Z%2F8la9GvXWFypGH%2FsTCbK%2Fxd22PrSNL7XApg2d03GBzPkrw5oZz8ozatTVXDwkXjSyfFCnCW4HuKkJhZD1RVCKpoMNi%2B68IGOqUBQQ%2B5J4xc2fCvpIDBasH8qVIQghuQnD8SZLiX1sP1LXB7olC5%2B%2B42AsXs%2BedLLD939y2NknEKpF%2FXYkWj0lyaZv5rQPQDnwEIBU194LRQ1jPhkMTmy6HaA4AHxdszjcGarOkhwIkDVIZIiSXi1NcQPnEf09eZY76P293oHT7ztR6rjSxCyiOrfp8VLMgzyaVhshzXKfsD9SdEZPplNCuXbR5kH6Yx&X-Amz-Signature=d78c9c6d5c678ab629fe6c16df69854081587ec058b3ab31ca29b30e1bab5945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WAT36U%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFp%2BfZTF908H7OjqhR9XNs%2FJ%2FtMq1V897OMJ8APTaclvAiEAowheA%2Bz2BOI9vKMLJwCP1Q%2BNZ5JcnmvR81nlPEKNcRgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP6aDjjI7ouJQuT81ircA0pz3YMwJ8rj%2FGKPWT0cmqhkGdLgkeYNTr%2BFemCogqiclWSrJ0DqStQIUKHUqEE47kFIMmONpLcVyFnF3qAJBQstjPQIQcL18E8KD44BGFSn4ZFefKgmP09elLO5Wiib%2BS%2BHU5Zu9Y%2B30DnZbv90Q0cI6otEiU1N9JJqPjwzwC3SgfbKVQw72%2Fv5DfnNRjwncFHxfm37%2FTUrweyWWXtLVWfasuU9Aw89QOKywbhBrhcbEFV%2Fq5AFSpPkmmVMxwwzPO4MBBXWd7SgjW182bpWErabrO9D1%2F228sXHRJOD11DREW9cbqKJYwagk81F9D1vaAqbu0KYi3%2FnspbrrIWkt7TSDWmhe1VSDQe%2F0T4EWxx29BFmPZx%2FW8u5q4a%2Bkr6BDLfwMpLDbgBeVb1Fyi9ave3d0MPWSi5hfLL%2BtNojHtJc45rZSq4UYdfyD5RlCFsOPusXHlFs7uKPDCTbWJeIa7BKFQlDdqZ%2F5v0IZwuC2siTGUdSml%2F3BduKa7GZjsfmVkR3Q5YXNawBwkrP92%2BENu68RZFbSKVKT8X1Z%2F8la9GvXWFypGH%2FsTCbK%2Fxd22PrSNL7XApg2d03GBzPkrw5oZz8ozatTVXDwkXjSyfFCnCW4HuKkJhZD1RVCKpoMNi%2B68IGOqUBQQ%2B5J4xc2fCvpIDBasH8qVIQghuQnD8SZLiX1sP1LXB7olC5%2B%2B42AsXs%2BedLLD939y2NknEKpF%2FXYkWj0lyaZv5rQPQDnwEIBU194LRQ1jPhkMTmy6HaA4AHxdszjcGarOkhwIkDVIZIiSXi1NcQPnEf09eZY76P293oHT7ztR6rjSxCyiOrfp8VLMgzyaVhshzXKfsD9SdEZPplNCuXbR5kH6Yx&X-Amz-Signature=4b2f4e4b9c15542a7b995f3f87355906e49b5fb943a87e8ad5d77a05084091fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
