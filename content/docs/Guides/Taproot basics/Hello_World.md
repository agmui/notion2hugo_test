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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFJ7RAFK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDyr6XpzF4l7qEAyDpMzTxMoxC6wrbVU5mwNDEt9qXCVAiEAvvabTwx3F%2F9TOcV8JNmwHiy5y8tLzD7lMLELI18Ezf0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCtWfTKt8CdrBX3PpircAz0HIzL%2FmyMiQPtx2GnEer9IjyJk6JmsKpdqYae3rWTXXuhZULxB%2BJJwppNcowKsCYSLtNM%2Bum%2FE%2B6PO9XYrq9zPam9yhlkZ36gSEMFnyBe6hD0X4n691%2FEuVsi8qziGYZh06yAHAwQ8f9%2FJBgBeyZzbR8s6SUhAB6TO78hjfunTT2FjISaIMzhc6iFrghCLdL%2BsWvys8uF1OE%2BXBWbCwNS6MFnJPuJNxcpwg7hrbqIKkOFrPumecK96%2BC6c2nsBoxxaPrDQNjHunJaQfM5pbYZFjOFwc1ftm1F%2FJapLdp2ak7j3eOwwcs%2FwpCmgaknv1bzoJwI05lzXNYiEb81dDDrO99O2r44gAIfKykrVRCD2Ktq0kTzTjo5fuAXfD%2F7mWApelZkyEhF9V8rr3a%2BSrwLtnRbIk1AGQZ9bbpFNM3jE5zlSvq4KerVjJb%2Fl5p7q1r9aOrEweUuW%2Bybms9pAs8cBSkxEDc4%2F860I2dacO1qpcnB0Eo6vi%2BPOHkv9Yc90hwrjplI%2F6eUJZJ7VZFRu%2BL3aYG1%2BC%2F46iLnRZFk6CMVfXUyulWNDD4rSEQS6%2FrOze4%2FE8zTi7f4V5W52Fsx1%2FckhoqBzMgchxO6pDeoHLvLcKoOwtEh1Z%2FxMGjj2MJ2Ghr0GOqUBGZfO7lPR%2ByyFWeGZyMMeyB4die54ZlG6ZyMqZQb2tKsbBrtQ9rQePJyaYeK1DT0fGRyBLRkHXb0d%2BAual76w0xMvEsWaVaS7Lp2ZQaGOHxFauyvYZk%2F3n4z%2F%2FWVuZLssMq8RvR5E3QUOcrjEGWiz3MhdtE6%2BBtHtD81UDnE2kf3q6fjsCuRz6cOez%2BFTGOKKpK0M8ExYH7L7%2B2PNYRJTQgKxng08&X-Amz-Signature=0cc1afee871f89e034411638d7de3a68c7b7f9370f1abe90a3f53c6b22ce7a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFJ7RAFK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDyr6XpzF4l7qEAyDpMzTxMoxC6wrbVU5mwNDEt9qXCVAiEAvvabTwx3F%2F9TOcV8JNmwHiy5y8tLzD7lMLELI18Ezf0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCtWfTKt8CdrBX3PpircAz0HIzL%2FmyMiQPtx2GnEer9IjyJk6JmsKpdqYae3rWTXXuhZULxB%2BJJwppNcowKsCYSLtNM%2Bum%2FE%2B6PO9XYrq9zPam9yhlkZ36gSEMFnyBe6hD0X4n691%2FEuVsi8qziGYZh06yAHAwQ8f9%2FJBgBeyZzbR8s6SUhAB6TO78hjfunTT2FjISaIMzhc6iFrghCLdL%2BsWvys8uF1OE%2BXBWbCwNS6MFnJPuJNxcpwg7hrbqIKkOFrPumecK96%2BC6c2nsBoxxaPrDQNjHunJaQfM5pbYZFjOFwc1ftm1F%2FJapLdp2ak7j3eOwwcs%2FwpCmgaknv1bzoJwI05lzXNYiEb81dDDrO99O2r44gAIfKykrVRCD2Ktq0kTzTjo5fuAXfD%2F7mWApelZkyEhF9V8rr3a%2BSrwLtnRbIk1AGQZ9bbpFNM3jE5zlSvq4KerVjJb%2Fl5p7q1r9aOrEweUuW%2Bybms9pAs8cBSkxEDc4%2F860I2dacO1qpcnB0Eo6vi%2BPOHkv9Yc90hwrjplI%2F6eUJZJ7VZFRu%2BL3aYG1%2BC%2F46iLnRZFk6CMVfXUyulWNDD4rSEQS6%2FrOze4%2FE8zTi7f4V5W52Fsx1%2FckhoqBzMgchxO6pDeoHLvLcKoOwtEh1Z%2FxMGjj2MJ2Ghr0GOqUBGZfO7lPR%2ByyFWeGZyMMeyB4die54ZlG6ZyMqZQb2tKsbBrtQ9rQePJyaYeK1DT0fGRyBLRkHXb0d%2BAual76w0xMvEsWaVaS7Lp2ZQaGOHxFauyvYZk%2F3n4z%2F%2FWVuZLssMq8RvR5E3QUOcrjEGWiz3MhdtE6%2BBtHtD81UDnE2kf3q6fjsCuRz6cOez%2BFTGOKKpK0M8ExYH7L7%2B2PNYRJTQgKxng08&X-Amz-Signature=613c6b8d3a9232897527c0a050e1e56eb2398c28d9262d173579e90c5baf1985&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
