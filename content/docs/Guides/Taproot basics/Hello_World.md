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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMR4DH4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFiLlnLA6n74oon4jjsnsE2bFowlUzikYruSgQJwjuMUAiEA6HFE%2BsDi2WwaxTBKM0%2BlP%2Fn%2BgEVGMW9c3xCvrwqgJZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt5%2BYcZ%2FE07wW2WcyrcA4ujqIRxNG5Yttbo4qOJpvdx2jtJOWYMwanO5C735tIy7oOJ4FTiq0K9kkPg1VTMrM52wLlxOIUIAj%2BE107If1FCwFFadjYYwzSIj9Z8WB4QrFg9fLupBfXdbMgkQlhJuE2G98rkyugKabh93BY9SxqoFE%2FwtfYpaaTOddXKEILOyeKalDoTDjlBgZsMzLHuggZvtUyQlLO28dY6qxUIhaTDYG9jbRzRxUEGDYn%2BHL5T%2BmN2fcVl%2BiOwPS57zJNAaT8Y098NeYxAUNN19hIdP2d9Ky13lBAv0n41CrHALyrmSqKiL7anP1489blCIdRVfeCnFVTxQ9VLTOfXcCxDG1WOcFVSkMYsr9T1zyX4C4saGFICe2qD4YkW9uvlj2WZPKbyeEFIofW%2BB1cchNlZs96Ans7taO6v4SxfBSQla0GjPusncsOVG%2BmUHa3FVfLzgBqwLN44gjQhWbitDFFZ1NA23iK80TMMRMcTq8Rx84pw%2BGIKqxHKQEfrwbTxgvQMaE%2B9dyObDa0RLin2grtQstaz2U3%2FeZbsbKoL8IRtnfl0T6X4c3PZf6alSxbnSlYXC3no6X2PWg9Gf9lOpb%2B6xFMzn2R8zCygBY7lq%2Bz4hUfKGjg7m8kPalmPRSLQMODP38IGOqUBAGKOC%2BfiLaJalF9WTbDau4m62ec%2Fgrg7BYr9CmTUvsRHzSg3wxgk5zddw5kEBDJwtkvlfWPp09YLyHHg%2BiuSfy%2F7cmDe0KbpcfK33fLeJepfHnzN%2FluSmzWaeobUReTm6XNHkZZ2uZj0iW0GfPib2%2BnR5QI90rKHa%2FVq9N2ZKQ0cdYh27eZqirl%2Bh9S53CT3bFblZ1QV%2FHdcXU2qd%2B1G%2B%2B7Y93ly&X-Amz-Signature=019d53c00952736a084e0be78fb53cc275ab9172ab1bc783ab6d0e9c554619b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMR4DH4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFiLlnLA6n74oon4jjsnsE2bFowlUzikYruSgQJwjuMUAiEA6HFE%2BsDi2WwaxTBKM0%2BlP%2Fn%2BgEVGMW9c3xCvrwqgJZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt5%2BYcZ%2FE07wW2WcyrcA4ujqIRxNG5Yttbo4qOJpvdx2jtJOWYMwanO5C735tIy7oOJ4FTiq0K9kkPg1VTMrM52wLlxOIUIAj%2BE107If1FCwFFadjYYwzSIj9Z8WB4QrFg9fLupBfXdbMgkQlhJuE2G98rkyugKabh93BY9SxqoFE%2FwtfYpaaTOddXKEILOyeKalDoTDjlBgZsMzLHuggZvtUyQlLO28dY6qxUIhaTDYG9jbRzRxUEGDYn%2BHL5T%2BmN2fcVl%2BiOwPS57zJNAaT8Y098NeYxAUNN19hIdP2d9Ky13lBAv0n41CrHALyrmSqKiL7anP1489blCIdRVfeCnFVTxQ9VLTOfXcCxDG1WOcFVSkMYsr9T1zyX4C4saGFICe2qD4YkW9uvlj2WZPKbyeEFIofW%2BB1cchNlZs96Ans7taO6v4SxfBSQla0GjPusncsOVG%2BmUHa3FVfLzgBqwLN44gjQhWbitDFFZ1NA23iK80TMMRMcTq8Rx84pw%2BGIKqxHKQEfrwbTxgvQMaE%2B9dyObDa0RLin2grtQstaz2U3%2FeZbsbKoL8IRtnfl0T6X4c3PZf6alSxbnSlYXC3no6X2PWg9Gf9lOpb%2B6xFMzn2R8zCygBY7lq%2Bz4hUfKGjg7m8kPalmPRSLQMODP38IGOqUBAGKOC%2BfiLaJalF9WTbDau4m62ec%2Fgrg7BYr9CmTUvsRHzSg3wxgk5zddw5kEBDJwtkvlfWPp09YLyHHg%2BiuSfy%2F7cmDe0KbpcfK33fLeJepfHnzN%2FluSmzWaeobUReTm6XNHkZZ2uZj0iW0GfPib2%2BnR5QI90rKHa%2FVq9N2ZKQ0cdYh27eZqirl%2Bh9S53CT3bFblZ1QV%2FHdcXU2qd%2B1G%2B%2B7Y93ly&X-Amz-Signature=661bb42866236bb52e6c51e598199ed0f08d141286492d7b174aa6c68897d549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
