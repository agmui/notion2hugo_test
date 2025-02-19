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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR5CT2XS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCAUCfWaR5LIKVX5uLk3WS5p5k2MDGessDFB6oDUh8DowIgdZt93tSAv4iIamN%2FSflSL9RFSrvLYkvJzS5NukAjDVQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS1Utq1v%2FgpN7uTeCrcA2Mxhzb%2Fj5Ua6rzgiZP%2FUFPqd%2FgqjpPmlWn8ydPBaEWSsZvfZ74CZ6wg1Et0qYQIyopw%2BUGvVI%2FctfuUImFciGDmMKfMvfVG43rhXpWl6RwYN%2BI4DmwwN%2BCDKc8potFhnA1nyVUkOHIE4cOM89p2k5nN9U%2FTpJKIfvs%2BRhaHRWJ03%2F0ddDzZZLliQ2uhpkDH1grsWLfLLwfshfHYeXSH4UVc9xCFgzdNrhBPmhzlJEqzg7nJthC6%2BXJ1bYf%2BncqZQ%2Fv1olNPwTaEZh5%2FLdMoixBaE5bc%2BydU4x4QoLBXFXhEhC84yp7GHxokdTBQg2Esddqjz5QjgcJSvG0UWb834F6hbkHuMAF10pWSFpYVaEzXM37%2BbjV79AzzUwfbbs%2BBdzBMfr8XTte3UG20sBT0nCOrd7SLXT2WGym9bwtnXX66PJYZTAVqD25gpMpYJSQ7JtpVfGL%2BdIhNDzdZhxg2hwlRlj9MlJG5iCifRyEAGUbCqY7%2BAs9otJhU94wvik0ElRZ54AVcU3%2BF0tURLSyFrCJr2XNYtwQrAoPmye3d%2BhxSglUBauFLVIHoQWsguA8nJLZAFcUjhlns0P8X41Gb%2F%2FAsgBHFONfSpCiz379VH2j9UVuAHVwmfiOQSMlvMLCf1r0GOqUBLQqH5g15caoZsLM8a1cStJfMCcqNXyQZ2rY0F3aV7RLF0Sm2dYHKHDpaSO8NjE9s1nReeyXHzdEhDmVLeduZFsl4CrPznhhMrDtOO%2FpsD1Vp5Mu%2BtfZAE%2BgCtdG9PCLKKLo2f5E5XGa8RV0jxw4HJqwJsvYii%2FPLEP2lDpVw5W%2BiA2OwR%2BEO3f5JYfHFjQKQxwtkUb1QJxfmIenTgXb3ODQ%2BoUJ2&X-Amz-Signature=ecccb3a4a093813710d972c03097ff500e2c26213c6bab06cc9130f6e383a922&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR5CT2XS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCAUCfWaR5LIKVX5uLk3WS5p5k2MDGessDFB6oDUh8DowIgdZt93tSAv4iIamN%2FSflSL9RFSrvLYkvJzS5NukAjDVQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS1Utq1v%2FgpN7uTeCrcA2Mxhzb%2Fj5Ua6rzgiZP%2FUFPqd%2FgqjpPmlWn8ydPBaEWSsZvfZ74CZ6wg1Et0qYQIyopw%2BUGvVI%2FctfuUImFciGDmMKfMvfVG43rhXpWl6RwYN%2BI4DmwwN%2BCDKc8potFhnA1nyVUkOHIE4cOM89p2k5nN9U%2FTpJKIfvs%2BRhaHRWJ03%2F0ddDzZZLliQ2uhpkDH1grsWLfLLwfshfHYeXSH4UVc9xCFgzdNrhBPmhzlJEqzg7nJthC6%2BXJ1bYf%2BncqZQ%2Fv1olNPwTaEZh5%2FLdMoixBaE5bc%2BydU4x4QoLBXFXhEhC84yp7GHxokdTBQg2Esddqjz5QjgcJSvG0UWb834F6hbkHuMAF10pWSFpYVaEzXM37%2BbjV79AzzUwfbbs%2BBdzBMfr8XTte3UG20sBT0nCOrd7SLXT2WGym9bwtnXX66PJYZTAVqD25gpMpYJSQ7JtpVfGL%2BdIhNDzdZhxg2hwlRlj9MlJG5iCifRyEAGUbCqY7%2BAs9otJhU94wvik0ElRZ54AVcU3%2BF0tURLSyFrCJr2XNYtwQrAoPmye3d%2BhxSglUBauFLVIHoQWsguA8nJLZAFcUjhlns0P8X41Gb%2F%2FAsgBHFONfSpCiz379VH2j9UVuAHVwmfiOQSMlvMLCf1r0GOqUBLQqH5g15caoZsLM8a1cStJfMCcqNXyQZ2rY0F3aV7RLF0Sm2dYHKHDpaSO8NjE9s1nReeyXHzdEhDmVLeduZFsl4CrPznhhMrDtOO%2FpsD1Vp5Mu%2BtfZAE%2BgCtdG9PCLKKLo2f5E5XGa8RV0jxw4HJqwJsvYii%2FPLEP2lDpVw5W%2BiA2OwR%2BEO3f5JYfHFjQKQxwtkUb1QJxfmIenTgXb3ODQ%2BoUJ2&X-Amz-Signature=31e7da02c67984b03c1360830d718b95654c46d3c13c252110f228c9d5cdf984&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
