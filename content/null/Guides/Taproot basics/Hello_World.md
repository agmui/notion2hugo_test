---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUF6VC3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIASfGS0l%2BQ2H2Cy6nUHmBbLTHhiyw7k0x4u0B%2FwP3COnAiEAndpxF77Ce387ekbrVhQU1UUNrVygOCA7R%2B%2FrV3nH2Rkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAv%2F80Ybjt0vx4Fk0yrcA9mpdRTGiY59yYKJ57JgolHP7SchK9aqXrCtuDG012gmt2QEY1IE6nofj7GxiKfCeEEdFdKTr%2BR3dlWpeInqCWXZZvoQj2sdZj7VD0gYFR0sJAaiWBTvmBmS%2BUFbNxu5H3ztzGG5mhqCEfYgaVIKsJx2xiS547kUbRwDtvhIbjnkFl0smK05XNVjYw4LbJi3gawjOu%2FE3cuUNXBt9hUeU85ustNBrFBDxFiptPOHwyV2czcilvrIzBnOCUlnsV77MfRAbhvmc1JaRPrm6JTiGgMadMB7bTrZbot%2FfDDGSJr3HM629hnzdgZ4YWx7n84l1WKrM7WqnVsOxu7QL1Wby2oC9UY0YrTZex6n0DHV4EBoF29GcZGNQk%2F3m%2Ft5ChOPCwuQt%2BCdw76s0I%2FeTgGneM1n9h8ykQRsxerSyn6YTAZ1zU9OcM0OOQ5hixkUFGzuVFfSc%2FMZInavdZQz6WNF8mSG1JhUA%2BgkAry0598LEh%2BYh83K%2F6J9tMenhFbd7AmQUn4zWq3g1%2B6MgLyzJpY2AvxZkMJIEFbE1sjC7UJVEpAolWxDvUnr1mSA%2FG0lyyryGNrUrP09v1p2hnhujAKR24d7kOckqY0qY1j7wlPKBeoC6ywiXRN49kfEGVXuMNPPir0GOqUBA5iRX2rxrro5NaXBVWtdenvEgpPE5oqJ3AGqj10mWHNxvhebhUle02ysdW5F%2B%2FbUEvdD3Tv%2B%2BJ2%2FCt%2BWcF1jcgKvQQvuHdoiY1AApXbK7toIngDxbc5arLREmUsKrviKlPqnjTS076swVIl2pU5TO0M3asaAhM1vvz9do9Y9m1CkcTqePV9jQPOHXZ22uUSEkhbEOeTldfbojd7s6MMOQVMt5XmV&X-Amz-Signature=3e6c4c4342b57144d8e5f3a24da52748b120211679540434fdc2dcd028dbf79c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUF6VC3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIASfGS0l%2BQ2H2Cy6nUHmBbLTHhiyw7k0x4u0B%2FwP3COnAiEAndpxF77Ce387ekbrVhQU1UUNrVygOCA7R%2B%2FrV3nH2Rkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAv%2F80Ybjt0vx4Fk0yrcA9mpdRTGiY59yYKJ57JgolHP7SchK9aqXrCtuDG012gmt2QEY1IE6nofj7GxiKfCeEEdFdKTr%2BR3dlWpeInqCWXZZvoQj2sdZj7VD0gYFR0sJAaiWBTvmBmS%2BUFbNxu5H3ztzGG5mhqCEfYgaVIKsJx2xiS547kUbRwDtvhIbjnkFl0smK05XNVjYw4LbJi3gawjOu%2FE3cuUNXBt9hUeU85ustNBrFBDxFiptPOHwyV2czcilvrIzBnOCUlnsV77MfRAbhvmc1JaRPrm6JTiGgMadMB7bTrZbot%2FfDDGSJr3HM629hnzdgZ4YWx7n84l1WKrM7WqnVsOxu7QL1Wby2oC9UY0YrTZex6n0DHV4EBoF29GcZGNQk%2F3m%2Ft5ChOPCwuQt%2BCdw76s0I%2FeTgGneM1n9h8ykQRsxerSyn6YTAZ1zU9OcM0OOQ5hixkUFGzuVFfSc%2FMZInavdZQz6WNF8mSG1JhUA%2BgkAry0598LEh%2BYh83K%2F6J9tMenhFbd7AmQUn4zWq3g1%2B6MgLyzJpY2AvxZkMJIEFbE1sjC7UJVEpAolWxDvUnr1mSA%2FG0lyyryGNrUrP09v1p2hnhujAKR24d7kOckqY0qY1j7wlPKBeoC6ywiXRN49kfEGVXuMNPPir0GOqUBA5iRX2rxrro5NaXBVWtdenvEgpPE5oqJ3AGqj10mWHNxvhebhUle02ysdW5F%2B%2FbUEvdD3Tv%2B%2BJ2%2FCt%2BWcF1jcgKvQQvuHdoiY1AApXbK7toIngDxbc5arLREmUsKrviKlPqnjTS076swVIl2pU5TO0M3asaAhM1vvz9do9Y9m1CkcTqePV9jQPOHXZ22uUSEkhbEOeTldfbojd7s6MMOQVMt5XmV&X-Amz-Signature=6811d5e5ccc31258a0185fb61bdd43146cd0bc607d62a1fd0383392dd3a04c00&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
