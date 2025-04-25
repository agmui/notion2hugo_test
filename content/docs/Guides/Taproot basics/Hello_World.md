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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORPPI3S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jH9yTdNNtK1vgZdK6%2BRQGQ5zIAzq0EprHJ0nTolKwgIgCqPtc8igxfcrbgVu8Ug829yKFurlmS%2FVrEyZ77K5mmMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBDL8NVPgikeiCPK5ircA2NvK9Qya0A348H%2FcS5f%2FFlKQQl3ldXc9syjPux7kONloaxsyPixJmGNb2CfXr7CxmCZW0yFW%2FI4Z4jpJy6YSuXbfKV8UD1qkfTrqcRftQxJpMwOQd6eNYb9IawNs0MxA5JckCFmd6Aue7APqnKEhQlW0WEPUeCYCztRHdqp8EMiHsF0UOi2O0LYTN9szOUh4h9%2BtQSXl1rRuS%2B6bDZae%2F8E51cStEZePPmq8Gzxl4erOINvU2CNb%2B4Sx87%2F4GOtRpqixy%2Bj2x%2B6on1xnAQpYx9wYgAPAqGzLLxDvqpqwvOSx%2BsG001lEYjqApmIZhm7FXE2IIFIT8R4TBl%2BDLxWb%2FyyoVJfyMUiwSnIB1SFdoXOWVV6nm2i5v1D9yyCtqdVZOER0r4dJ9%2B4BPSaAPc%2BV8zS5CRkvFcO%2FQePBhBNQ2D2nAkq1nzdvM7kjv2zjxB9MLJOv%2FmSMy7Snb5AppzVyrySn1PzF6U13q8b9%2BF7dQWDEOt5flQLLwJ99OqjvOCSAEYhEBx63AFvMLNSY2oqfzlGwxY%2B43QG6mFivxrCEiIbNLY3EHF2GQqR%2BhhHi43lHzM3XHUByQnGblSJcx3kE7Z2EHc8%2FUvoSnVbxKgb%2BNJtehTKAH2HiNjBFEi2MMPsr8AGOqUBnJ2JVo8kORhEZznBJj30A9HNFGB01a27hCQlBqUJbT47CAX2rxlReoqSNZH1t3OXX6nOHuvsnKpOXUBEHaSUL3sXCSRFU%2BaAiQMHEDZE6k%2BWENnDAOesfLH9KeTkEFcEEFWcpcShUy5og%2Bdg1GAi%2BFJ7nhdKzBY0rrtxDgmIZTT2goo4krGlicmMuMGAfrNF79TRlNanH8VJZRlDtNNSSArL6EE%2F&X-Amz-Signature=138f19255823b34d2a96333b2ca1dc33cdcb9da297964fbc48b2dc32bf189633&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORPPI3S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jH9yTdNNtK1vgZdK6%2BRQGQ5zIAzq0EprHJ0nTolKwgIgCqPtc8igxfcrbgVu8Ug829yKFurlmS%2FVrEyZ77K5mmMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBDL8NVPgikeiCPK5ircA2NvK9Qya0A348H%2FcS5f%2FFlKQQl3ldXc9syjPux7kONloaxsyPixJmGNb2CfXr7CxmCZW0yFW%2FI4Z4jpJy6YSuXbfKV8UD1qkfTrqcRftQxJpMwOQd6eNYb9IawNs0MxA5JckCFmd6Aue7APqnKEhQlW0WEPUeCYCztRHdqp8EMiHsF0UOi2O0LYTN9szOUh4h9%2BtQSXl1rRuS%2B6bDZae%2F8E51cStEZePPmq8Gzxl4erOINvU2CNb%2B4Sx87%2F4GOtRpqixy%2Bj2x%2B6on1xnAQpYx9wYgAPAqGzLLxDvqpqwvOSx%2BsG001lEYjqApmIZhm7FXE2IIFIT8R4TBl%2BDLxWb%2FyyoVJfyMUiwSnIB1SFdoXOWVV6nm2i5v1D9yyCtqdVZOER0r4dJ9%2B4BPSaAPc%2BV8zS5CRkvFcO%2FQePBhBNQ2D2nAkq1nzdvM7kjv2zjxB9MLJOv%2FmSMy7Snb5AppzVyrySn1PzF6U13q8b9%2BF7dQWDEOt5flQLLwJ99OqjvOCSAEYhEBx63AFvMLNSY2oqfzlGwxY%2B43QG6mFivxrCEiIbNLY3EHF2GQqR%2BhhHi43lHzM3XHUByQnGblSJcx3kE7Z2EHc8%2FUvoSnVbxKgb%2BNJtehTKAH2HiNjBFEi2MMPsr8AGOqUBnJ2JVo8kORhEZznBJj30A9HNFGB01a27hCQlBqUJbT47CAX2rxlReoqSNZH1t3OXX6nOHuvsnKpOXUBEHaSUL3sXCSRFU%2BaAiQMHEDZE6k%2BWENnDAOesfLH9KeTkEFcEEFWcpcShUy5og%2Bdg1GAi%2BFJ7nhdKzBY0rrtxDgmIZTT2goo4krGlicmMuMGAfrNF79TRlNanH8VJZRlDtNNSSArL6EE%2F&X-Amz-Signature=367f7f53f07895f1267605005d5b0740c8ee101e7426ed171916d2e54d860944&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
