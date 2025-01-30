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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKO64L2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf3ZWiHvRzHxwo%2Bry8bM7dzlwqksECxoiWKspjgIM8GAIgREO8h90904G2eADAm5HQUXUNwz0D9xJxdZWr%2BaZ4HYwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6fJko93J7Nl%2FaDhSrcA3SIHWzlYEcthBdSmH3t0DtXz4fA%2FE73pivshUH77cnyYnO4GIp3OpRcCvIT1re12MBOHsG%2FqFpgFu5kiuK5g5Da92DU2KrMW7C45Z7VWhejQg4AuuIEIbFwIqCs4EBpBUTJl4PJRlkDpJP9KU41bY9NlFhvu2%2FM2HfVmr717xP99c0OXT7NYxQZJ%2Bbel6yvH7m1%2FG%2FQHWNaU5EF7Xqfly6KYO14g%2F6Z2j27GXclUWp5kRX%2Fkz5%2B5fNzfIfp5mUznjeKnU89MdOICGRH8jJluEKSoRkpLQDzNR8DysUpsjgtN724LxDmddDpXa0ljVstTJ47pO2HpBNfzBKgRYMetx4Z3L%2BK9hIJ5c8G6Qr0LXHkQC4BnIrjFyeItIVXjsy19gXFmm%2BXVHUJctEttapNP6JyUtfwCQqL376FmOrhmWREQUQXdr6ccDTiULkQGOUgfTKy83cwxRQlf6j%2FsCnIExk1nB6MLoHIFhyTrlv6PkkdY5VTwyGliwxyvN75iaKy8E76yK8CQbbkb%2B7PCjsiGWtxISns%2BQj7kVvjBB%2FLeeXET3SAPwLqRkyPGeD23hHoxEdKJ2kLZpxuK7sQbDmtQB0z%2FanlfFgGJtuDSWV3jL0f7fEOE4UL4V2DTgHFMITH77wGOqUBeoiGPzL0QgHvgvhsD7qSxx8LyP4kja7K0013OJ9lKgIgfY69d3XZlhrZy7p9Nu3bUeutdvTn8C7%2FpsquW4eAyCSHcOC8WAnztfdR9aSHUDqr0bp5bYGxLLyY8YMi4ce1llv8Ys0unkGqcOykuAp9nUC75JAYuxh7OtRyjDQoZLzrf0c4eCTksPa0SNGkNDNVuhtPPxF%2FKJdrewwz4rNOJeCt0PLJ&X-Amz-Signature=106804ff1e26ba876a3f72cecb5b56d0848e05b9efe4937f72ad14d7219cbe71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKO64L2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf3ZWiHvRzHxwo%2Bry8bM7dzlwqksECxoiWKspjgIM8GAIgREO8h90904G2eADAm5HQUXUNwz0D9xJxdZWr%2BaZ4HYwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6fJko93J7Nl%2FaDhSrcA3SIHWzlYEcthBdSmH3t0DtXz4fA%2FE73pivshUH77cnyYnO4GIp3OpRcCvIT1re12MBOHsG%2FqFpgFu5kiuK5g5Da92DU2KrMW7C45Z7VWhejQg4AuuIEIbFwIqCs4EBpBUTJl4PJRlkDpJP9KU41bY9NlFhvu2%2FM2HfVmr717xP99c0OXT7NYxQZJ%2Bbel6yvH7m1%2FG%2FQHWNaU5EF7Xqfly6KYO14g%2F6Z2j27GXclUWp5kRX%2Fkz5%2B5fNzfIfp5mUznjeKnU89MdOICGRH8jJluEKSoRkpLQDzNR8DysUpsjgtN724LxDmddDpXa0ljVstTJ47pO2HpBNfzBKgRYMetx4Z3L%2BK9hIJ5c8G6Qr0LXHkQC4BnIrjFyeItIVXjsy19gXFmm%2BXVHUJctEttapNP6JyUtfwCQqL376FmOrhmWREQUQXdr6ccDTiULkQGOUgfTKy83cwxRQlf6j%2FsCnIExk1nB6MLoHIFhyTrlv6PkkdY5VTwyGliwxyvN75iaKy8E76yK8CQbbkb%2B7PCjsiGWtxISns%2BQj7kVvjBB%2FLeeXET3SAPwLqRkyPGeD23hHoxEdKJ2kLZpxuK7sQbDmtQB0z%2FanlfFgGJtuDSWV3jL0f7fEOE4UL4V2DTgHFMITH77wGOqUBeoiGPzL0QgHvgvhsD7qSxx8LyP4kja7K0013OJ9lKgIgfY69d3XZlhrZy7p9Nu3bUeutdvTn8C7%2FpsquW4eAyCSHcOC8WAnztfdR9aSHUDqr0bp5bYGxLLyY8YMi4ce1llv8Ys0unkGqcOykuAp9nUC75JAYuxh7OtRyjDQoZLzrf0c4eCTksPa0SNGkNDNVuhtPPxF%2FKJdrewwz4rNOJeCt0PLJ&X-Amz-Signature=bc42d437771c5cb1797c7ca3e8918fb2cd095804fc654b24fcb3eabc7d36a74c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
