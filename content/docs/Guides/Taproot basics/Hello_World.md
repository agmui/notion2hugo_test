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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPZ22OA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFxOTix2gsA4C2mi%2FyB%2BHjS4TDPRhftRiatHbYX2pJ7WAiEA%2BBAyqjP9RueiaNYnlwxIA7MSVR3LeUmCX86cKyKfrsEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFz8aq5f3IQysqyF2SrcA%2B7ha27C572QGKa9aS8JlhBN1des7G%2B%2FB0tMH3krf5rsffkqWYkR73mTCUC%2BDu59uGOcAPH3OeSHrrIYiz2DLydMUAururjK7F2HKQDefHJKAKrP4sF%2F64bNhJmR2p90g4BxgYSgAwQWdX2Vgru840l1S2DT6oie0kkTqzMYbh%2FtlGLQyLO1ZW%2B4mCg6rYVNZTYO5q3YroIkz9nrdlHRh8NmdmEAWcxfZnzBF8rqgtdP8PeWVh%2BIGctaIjvoieBOqgwBGNsKL0ZhwnyKi5f9MRVSU1ZsTTTw3YcRjx8VwUS2xTi4YPGh5ue9GbqQbsU6Cy3BwPXNzD5WLW4SkbdP%2BeQcPpPIf%2FDnjrjrt4uT%2BerTanwRQcoNpy%2BKH6KrGPFM2qkNk3MXu2OTnAFdjLtnttEiw5zrIW68HzzywvAaql3MqO3OLdc6i7V59ecXq0Kga0LrdSNoJpiVBzXKPI6LwIdDpvsO91bhiTBo%2FIb9alw5YTQNVO49EQTpBsZbGC%2FW83So3%2BpUz1cbIQNg86YPQTd5rmPVSpII9SyiJpKRKxJtUg6igWV1COXiwRnwwX5JgZB0Z4lCm%2Fo5WEGjxzNPej9cne3hYtKRG4%2FhaQxFiu1uL2tIvt1vWcV4zbsYMOn1zb0GOqUBx1gK4hcPUZCh7cIQB1pjKX96aGrvzGwokrCafiYTEulPjQDRqHvBTCDQ62%2Bct8KK7x%2Fa4SWP2ywGD4z1TMlRHlNS1KHMDf4xBMFPoAABbZpQn9Uw6FuCx2NWOiMMMzliQ93Kbl1bNVoHFpY2%2Blzn7vcDBOYtDFfNLRocpm9XB0qpeW8o7Hr2GXRVJhctSKQ50iSsCYI1QcmnAxLLIhYI3GOgggeS&X-Amz-Signature=52955624a3433943610d483b7d525b0ccdafb9631cb3da1304c75952d2fcaf1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPZ22OA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFxOTix2gsA4C2mi%2FyB%2BHjS4TDPRhftRiatHbYX2pJ7WAiEA%2BBAyqjP9RueiaNYnlwxIA7MSVR3LeUmCX86cKyKfrsEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFz8aq5f3IQysqyF2SrcA%2B7ha27C572QGKa9aS8JlhBN1des7G%2B%2FB0tMH3krf5rsffkqWYkR73mTCUC%2BDu59uGOcAPH3OeSHrrIYiz2DLydMUAururjK7F2HKQDefHJKAKrP4sF%2F64bNhJmR2p90g4BxgYSgAwQWdX2Vgru840l1S2DT6oie0kkTqzMYbh%2FtlGLQyLO1ZW%2B4mCg6rYVNZTYO5q3YroIkz9nrdlHRh8NmdmEAWcxfZnzBF8rqgtdP8PeWVh%2BIGctaIjvoieBOqgwBGNsKL0ZhwnyKi5f9MRVSU1ZsTTTw3YcRjx8VwUS2xTi4YPGh5ue9GbqQbsU6Cy3BwPXNzD5WLW4SkbdP%2BeQcPpPIf%2FDnjrjrt4uT%2BerTanwRQcoNpy%2BKH6KrGPFM2qkNk3MXu2OTnAFdjLtnttEiw5zrIW68HzzywvAaql3MqO3OLdc6i7V59ecXq0Kga0LrdSNoJpiVBzXKPI6LwIdDpvsO91bhiTBo%2FIb9alw5YTQNVO49EQTpBsZbGC%2FW83So3%2BpUz1cbIQNg86YPQTd5rmPVSpII9SyiJpKRKxJtUg6igWV1COXiwRnwwX5JgZB0Z4lCm%2Fo5WEGjxzNPej9cne3hYtKRG4%2FhaQxFiu1uL2tIvt1vWcV4zbsYMOn1zb0GOqUBx1gK4hcPUZCh7cIQB1pjKX96aGrvzGwokrCafiYTEulPjQDRqHvBTCDQ62%2Bct8KK7x%2Fa4SWP2ywGD4z1TMlRHlNS1KHMDf4xBMFPoAABbZpQn9Uw6FuCx2NWOiMMMzliQ93Kbl1bNVoHFpY2%2Blzn7vcDBOYtDFfNLRocpm9XB0qpeW8o7Hr2GXRVJhctSKQ50iSsCYI1QcmnAxLLIhYI3GOgggeS&X-Amz-Signature=256a1e7c022033dcdbdcef3c0ba9603a0fb329da417f0acd35ca736d5608150a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
