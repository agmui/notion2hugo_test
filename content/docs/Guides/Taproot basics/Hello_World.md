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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJLP2YL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr0UZhn2SpRfjPULOEeje87%2FT1mhe55MaamgP2JsolOAiEAw%2Fa3T4xweGfcW%2Bxi0gnQkO2hyGdl9s8EDrT25Pzryrgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAmkIi5NxdZFbZ9ygyrcAz7GZ4odalBJnw8momhxoaFw6jZLsoctQ3a1Xe3gibbwXftIxKFLcvRYQsPFAfUENFQfjVk%2BG6J1q8crBZXLrBmJzBb6QcvHE8qfXL1%2FN%2FqPJd6cio%2BolSHoVYbTABbHMzf7H6JpyqETXx45MG0qX4T2y0nQ7fgkio3UMDrCsEKEe1zQb%2ByPQTeEY6EEalevL37KVDH2U9icYpEuQdER2VQKw14ABUbEqON1uaX6y1CgZvtzITizn8uxHo9GIZtqE2890IVGicFfkk3ZnYrY90flckDOqVKFwtw91HGKWFtHLoHZ6SacEN%2BRcZAr4febbf%2BIvFAflcb1cVvbBAA0E03jX7xzWqxXj6YPazcKtyeW%2FuTvMuXz1yztehosTBdklPJ0GDjhzihWymkf8kKob6SdBHtVekYh2to5GiYzd9sBzl1Km3VMuq7mqt2VuKKDOtxUixbSPShtTodmlzuyq4LwW0wf0TD53J9bg3e6LC4aEFqcN2PZlKr2XcefDKerN7FChYvZVI2YB%2FafpPV26tFjRivH3qyTZdAEg11olm40MGklPM1wU5h0FO8TfaU0JKPmvKzGl8Y%2FENh17YGCgGo1CU6qrhQAAIThbzS%2F9bwP44igYGRc3RiZwJSZMNucyr8GOqUB329C4r3cmdZ2TqM8eRhD3%2FSE535RTyg%2FF5a7IfWMryTy3qc4KH50oCgt5WB%2BwzwUk1JoHPBWIeA1k%2Bd9M0nZ0F%2Bzb4Y8sGW5GsSKArUK5dY%2BokJJ2Z%2B%2Bp%2BTwRTFt7eWSeMXznfHoOrYwdVAqO3xSx1OcGVk%2B9aXhAAHzOE7nNJgRxRKEmK3%2BpCueuO3bp2ZksgG1%2Fw08wdX6AlwrnhQ9GgXzb1Zc&X-Amz-Signature=e110bd6c310dbbb309f6affa35859e92b6e9307f18bd0d1805a3c106d585faed&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJLP2YL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr0UZhn2SpRfjPULOEeje87%2FT1mhe55MaamgP2JsolOAiEAw%2Fa3T4xweGfcW%2Bxi0gnQkO2hyGdl9s8EDrT25Pzryrgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAmkIi5NxdZFbZ9ygyrcAz7GZ4odalBJnw8momhxoaFw6jZLsoctQ3a1Xe3gibbwXftIxKFLcvRYQsPFAfUENFQfjVk%2BG6J1q8crBZXLrBmJzBb6QcvHE8qfXL1%2FN%2FqPJd6cio%2BolSHoVYbTABbHMzf7H6JpyqETXx45MG0qX4T2y0nQ7fgkio3UMDrCsEKEe1zQb%2ByPQTeEY6EEalevL37KVDH2U9icYpEuQdER2VQKw14ABUbEqON1uaX6y1CgZvtzITizn8uxHo9GIZtqE2890IVGicFfkk3ZnYrY90flckDOqVKFwtw91HGKWFtHLoHZ6SacEN%2BRcZAr4febbf%2BIvFAflcb1cVvbBAA0E03jX7xzWqxXj6YPazcKtyeW%2FuTvMuXz1yztehosTBdklPJ0GDjhzihWymkf8kKob6SdBHtVekYh2to5GiYzd9sBzl1Km3VMuq7mqt2VuKKDOtxUixbSPShtTodmlzuyq4LwW0wf0TD53J9bg3e6LC4aEFqcN2PZlKr2XcefDKerN7FChYvZVI2YB%2FafpPV26tFjRivH3qyTZdAEg11olm40MGklPM1wU5h0FO8TfaU0JKPmvKzGl8Y%2FENh17YGCgGo1CU6qrhQAAIThbzS%2F9bwP44igYGRc3RiZwJSZMNucyr8GOqUB329C4r3cmdZ2TqM8eRhD3%2FSE535RTyg%2FF5a7IfWMryTy3qc4KH50oCgt5WB%2BwzwUk1JoHPBWIeA1k%2Bd9M0nZ0F%2Bzb4Y8sGW5GsSKArUK5dY%2BokJJ2Z%2B%2Bp%2BTwRTFt7eWSeMXznfHoOrYwdVAqO3xSx1OcGVk%2B9aXhAAHzOE7nNJgRxRKEmK3%2BpCueuO3bp2ZksgG1%2Fw08wdX6AlwrnhQ9GgXzb1Zc&X-Amz-Signature=eb806c9587061e903c8fb1a05b9e7f8e3e20c43fae5bb3c596c38c80b1b0242b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
