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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDILNEAW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIASDBCWTuUswvYgh%2FfNFMJ0nf3Dn3vP%2B%2FapDoekkG45WAiEAz0y5Dbc10LOSkXIgkJw5FssbmcBWPVq9Qysfi76IcT4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTz6yV4cTSAw3IXSircAySO5RSchtn%2Bwh9018wtCKPuLCsUbCop0Wf3EM%2B%2BGwg%2FdhZYokm6CWnTR5BsMo32GPiGtODAiV8C7swbAxRz%2BUW6r1ouNMzC2rfTIbdnNY9%2B96Z3rncgl%2FyHWtduoOK8ngKNmC9FUDfEtWd%2FWBOUUGdv1yO7nS2OpbUPAfal91Vrn8JsBVw%2FUN85a7bFDJ6OTS8tlwWJl3fnsXYTDfI9yUVwAvPt4ELb1XOHHlBzv9x%2BToioCnWO6ANpil7jtR5Gc0hb9kqLqXUFC%2Fj6iCtTCoUZfqyjgjzCNrmKAeGy8rHVbRDDx47bpYzoZLM3%2FsmuO2kGF8n723Fe%2BA9tFpkc7hgH%2FhXuch%2F4JjAUO0FVo8x7VoWVXQbPNnaIhHXNMKKrHyxQiKtPbja%2FuFEnGz3iMUR37q5qSwWVUbucaPAVA8JYOMtsv5zPnNrGWf2fXxhWRQPGvBt4yGWEIIPqGUAmBpoGq2jCHm9H2a7klj7HyS%2BFnERaYpYSWQBAPIHE0Fxz5r5rRxmkatVd5LYuySuE7MYJ%2FMiiIWHIFxbKScHh9BHSEHk00rwGQ0xprgdB1vsSLpPp0ZBnneYkbwXoiHWErkx%2FYzJGUvxVdt0bwMNCfBFhNdOvDzDsf4%2BEe7UBMLiKn8QGOqUBw7WmwlYs8MyFehgZ2VP%2BNkRWNBalT%2FRpcGKRdh1qAp10x9S4zHvn0lmCZ%2B2ZB3b6p%2FIiQQc8s%2FT3Q20dt9AjWVB4sAZtTemknu97tfoHgLK3D%2Fn4QKipyuUfO0Uh%2Bv%2Bp68azhnnmRragDu3rrfVu97XveijGgvi73ImHsXWzg%2Ffc58rmpxrwTPSHhGqUmreQtbwhIWAy1b8oTnO44o1SWYaIajKC&X-Amz-Signature=795f34f4616fdbab9e8b8035d1c893c284b403461de657a21dabf230b9722173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDILNEAW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIASDBCWTuUswvYgh%2FfNFMJ0nf3Dn3vP%2B%2FapDoekkG45WAiEAz0y5Dbc10LOSkXIgkJw5FssbmcBWPVq9Qysfi76IcT4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTz6yV4cTSAw3IXSircAySO5RSchtn%2Bwh9018wtCKPuLCsUbCop0Wf3EM%2B%2BGwg%2FdhZYokm6CWnTR5BsMo32GPiGtODAiV8C7swbAxRz%2BUW6r1ouNMzC2rfTIbdnNY9%2B96Z3rncgl%2FyHWtduoOK8ngKNmC9FUDfEtWd%2FWBOUUGdv1yO7nS2OpbUPAfal91Vrn8JsBVw%2FUN85a7bFDJ6OTS8tlwWJl3fnsXYTDfI9yUVwAvPt4ELb1XOHHlBzv9x%2BToioCnWO6ANpil7jtR5Gc0hb9kqLqXUFC%2Fj6iCtTCoUZfqyjgjzCNrmKAeGy8rHVbRDDx47bpYzoZLM3%2FsmuO2kGF8n723Fe%2BA9tFpkc7hgH%2FhXuch%2F4JjAUO0FVo8x7VoWVXQbPNnaIhHXNMKKrHyxQiKtPbja%2FuFEnGz3iMUR37q5qSwWVUbucaPAVA8JYOMtsv5zPnNrGWf2fXxhWRQPGvBt4yGWEIIPqGUAmBpoGq2jCHm9H2a7klj7HyS%2BFnERaYpYSWQBAPIHE0Fxz5r5rRxmkatVd5LYuySuE7MYJ%2FMiiIWHIFxbKScHh9BHSEHk00rwGQ0xprgdB1vsSLpPp0ZBnneYkbwXoiHWErkx%2FYzJGUvxVdt0bwMNCfBFhNdOvDzDsf4%2BEe7UBMLiKn8QGOqUBw7WmwlYs8MyFehgZ2VP%2BNkRWNBalT%2FRpcGKRdh1qAp10x9S4zHvn0lmCZ%2B2ZB3b6p%2FIiQQc8s%2FT3Q20dt9AjWVB4sAZtTemknu97tfoHgLK3D%2Fn4QKipyuUfO0Uh%2Bv%2Bp68azhnnmRragDu3rrfVu97XveijGgvi73ImHsXWzg%2Ffc58rmpxrwTPSHhGqUmreQtbwhIWAy1b8oTnO44o1SWYaIajKC&X-Amz-Signature=121fa15a287b721c1733b9e5496f62955d221605c699cb9aa34e921b81af25c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
