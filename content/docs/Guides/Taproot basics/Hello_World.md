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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKAS7K5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDcS0hHRttj0zCQtNyTQXA6YP9QdTnhZXJZu%2Fkc8IO0owIgV8ttSV6SCI5UFDiz%2Bc%2BatxLlnl0wKg7dLGiyPVUEpbkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVa95cnRVpdD8NwWyrcA7H4GhndwhxPbCjzBgodbAAEqxhoJVnIUXn19VPUWbM%2F86PJ6N8kYd6mcE40tfn%2BgfBNAtyrBfw4UrybY1UWKW39csc7k79GQloUJjdshLyzVnZmsW0b6YFKP9iK9cvABAvwWRQpqdeGIIuysNWrw0M8w6SQsZOS3zQdl%2Fj5O0WE%2Bpxy53M4H86lq%2BCyeWZS1Y38icJjzxnYPUTFLMdSnHl4qiEdYPT3qwFQ8VylBZmc%2B1XWmJ5EPOaBjTzjizH38FSfNChGVCnEs5WhQBvHj6iVCoB0uziW%2F4Q2fqFlemuH84xtWJaqaiqvwExNeJS3LOwLeZYzEUTgt2oLaniQMww%2FVBRpv8TbX%2FBqbs0HLjWNc757Dfwyfz3iz71%2FDUOUxhgT5lWcFkTgdAy0IxgrkIkOp6t669%2F4wK%2FryEQThrpwq58mvwVtNrQCNhF%2FWkH4xZyc%2BxR%2FPW%2F%2Ft%2Fu4DRG%2Bh1MCsicTC4ieY648ptgclriOZCqnsVoMvf%2FDfgHzr7OSLrpnVtomctH4ZdqDndKi3%2BiCQIoDv8HiNY4th53DEoN5cwbOppd4QyEFFD4cHoqKQR%2FmNBcbhTebxYJubobRQJHN%2Boa4qrLFxpVxEVfZHv3Q5KA3yZBIyI%2BVusVIMOWPnMQGOqUBM5YyS0sCpuJ%2Fo6Nd3mnTJ1937uhwO4xJDQOwqyfKHzl20LuUc8GK0n5R1xNlhgNIUU9wZbEcT%2BwhYsvcXfU0J0qW5%2Fqe14dDwDmCidCexOxWtbt2uOqn1rEm770TgZ3C%2FNYYgLFj82sbkOUrjtM5OEFA%2BMqQ8dObxTr8Lcq%2FmAVLjAtQRjNGYyJ63uddZfelxMD1m6a2EmBhyFKZ%2FTFQMQd86WjG&X-Amz-Signature=48624f17515650d0e5cb5e0feca175f05db3f4e20e024317f7d161a56fc19a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKAS7K5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDcS0hHRttj0zCQtNyTQXA6YP9QdTnhZXJZu%2Fkc8IO0owIgV8ttSV6SCI5UFDiz%2Bc%2BatxLlnl0wKg7dLGiyPVUEpbkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVa95cnRVpdD8NwWyrcA7H4GhndwhxPbCjzBgodbAAEqxhoJVnIUXn19VPUWbM%2F86PJ6N8kYd6mcE40tfn%2BgfBNAtyrBfw4UrybY1UWKW39csc7k79GQloUJjdshLyzVnZmsW0b6YFKP9iK9cvABAvwWRQpqdeGIIuysNWrw0M8w6SQsZOS3zQdl%2Fj5O0WE%2Bpxy53M4H86lq%2BCyeWZS1Y38icJjzxnYPUTFLMdSnHl4qiEdYPT3qwFQ8VylBZmc%2B1XWmJ5EPOaBjTzjizH38FSfNChGVCnEs5WhQBvHj6iVCoB0uziW%2F4Q2fqFlemuH84xtWJaqaiqvwExNeJS3LOwLeZYzEUTgt2oLaniQMww%2FVBRpv8TbX%2FBqbs0HLjWNc757Dfwyfz3iz71%2FDUOUxhgT5lWcFkTgdAy0IxgrkIkOp6t669%2F4wK%2FryEQThrpwq58mvwVtNrQCNhF%2FWkH4xZyc%2BxR%2FPW%2F%2Ft%2Fu4DRG%2Bh1MCsicTC4ieY648ptgclriOZCqnsVoMvf%2FDfgHzr7OSLrpnVtomctH4ZdqDndKi3%2BiCQIoDv8HiNY4th53DEoN5cwbOppd4QyEFFD4cHoqKQR%2FmNBcbhTebxYJubobRQJHN%2Boa4qrLFxpVxEVfZHv3Q5KA3yZBIyI%2BVusVIMOWPnMQGOqUBM5YyS0sCpuJ%2Fo6Nd3mnTJ1937uhwO4xJDQOwqyfKHzl20LuUc8GK0n5R1xNlhgNIUU9wZbEcT%2BwhYsvcXfU0J0qW5%2Fqe14dDwDmCidCexOxWtbt2uOqn1rEm770TgZ3C%2FNYYgLFj82sbkOUrjtM5OEFA%2BMqQ8dObxTr8Lcq%2FmAVLjAtQRjNGYyJ63uddZfelxMD1m6a2EmBhyFKZ%2FTFQMQd86WjG&X-Amz-Signature=0bfc9d212ee8bf6e02e202a51d33b0581c9214f21d142ec6a5e2aad30696fa72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
