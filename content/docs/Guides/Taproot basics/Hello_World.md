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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXN3IAV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHFwIgFyp7NmyEbzvHuLjUFdRqn3FJrHT7O2%2BpMSL7LOAiEAswmrDHSCNb%2FyDo0OeasbhJ7BD0NNTxSH23uT4SGihucq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDNJdYooJrrT3eML4CrcAwJCfRRPOgaPfoOlLrqcliPhgDpeTOF0%2FTKLUTNpFjRlhGdLnOZV2kVuz1Jx%2FxiDCnMGGr0h21%2FgFNsu9zcOtQ7B%2BrBomAFW8hhAROx8bqliDJczgJeUJWd76TTzLhiSqLsZa2bL9EfK3Uvnj2BGFsQ1%2B0HTxUFoT4%2BJ%2BHUeX7tkwy528GEe2lEprSjeY5HkjylxD4VEfzCENZcwDP5ilQ2Ip19ufy2E6nYuXbTxT7JiunOJLeFO1T%2F7G4LuONM7UJ%2BUXYyOyxQwCn6yHxw%2BxjU%2FfYUkaQmr%2FXyBpDGgzvSpmlGO%2FqCxg2Osmj7Smwlugn9NnzhKnMGvEjDAToc5FjysvX84xJJhGC35AvSN6Ejm7%2FmhbVQ%2FRvH21%2BjQbS2NDzzYXUnsDuRm0ea%2BRNiScn3OeqDblJeBmQ9n9iQjOL%2BkBRnQF9Wcd24yATTmVa7B0FwenCb7iBtR07HRpPYaP9aPkHhUz0MwWIFKmadRNnHrODCVNhMpqmKK6u%2FSYEJvXwbto7kLxRDijl3B8WJ7p4ImvsdS%2F0p930jQaQqnebVwichiO328MjPg9eMOTg0J53DpQPXHISU8nTKw0tYjHYxMofa01mjUYbdRipOE9oaLT6NrjXSGXhzze3kyMJvNgb4GOqUBYwAQ7D3xZSEpyAre%2Fg4Ojxv17mUk5FEvgg945x8Pw2fSxAYcTRBWeYUqWlnEQ0CGT%2B4mD%2FqZ2rqWH3qdA6lB4H4TJgoqVUWtLHwXQkyz8x5o5QChFZvYSZDIOy1IGA7DnQOy3AYORNBoIbB1w%2BRMc2mPWHXBm96OTuYVvT5uxEUmcq3vZHiuBIojPPjc8pDcBZUAUaQ%2FmXtpjskA%2BiHv1LvY2PYM&X-Amz-Signature=67e29f823e0c7fd943b0108bd4f8bc02978dc91a398272e8f93d501e673005ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXN3IAV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHFwIgFyp7NmyEbzvHuLjUFdRqn3FJrHT7O2%2BpMSL7LOAiEAswmrDHSCNb%2FyDo0OeasbhJ7BD0NNTxSH23uT4SGihucq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDNJdYooJrrT3eML4CrcAwJCfRRPOgaPfoOlLrqcliPhgDpeTOF0%2FTKLUTNpFjRlhGdLnOZV2kVuz1Jx%2FxiDCnMGGr0h21%2FgFNsu9zcOtQ7B%2BrBomAFW8hhAROx8bqliDJczgJeUJWd76TTzLhiSqLsZa2bL9EfK3Uvnj2BGFsQ1%2B0HTxUFoT4%2BJ%2BHUeX7tkwy528GEe2lEprSjeY5HkjylxD4VEfzCENZcwDP5ilQ2Ip19ufy2E6nYuXbTxT7JiunOJLeFO1T%2F7G4LuONM7UJ%2BUXYyOyxQwCn6yHxw%2BxjU%2FfYUkaQmr%2FXyBpDGgzvSpmlGO%2FqCxg2Osmj7Smwlugn9NnzhKnMGvEjDAToc5FjysvX84xJJhGC35AvSN6Ejm7%2FmhbVQ%2FRvH21%2BjQbS2NDzzYXUnsDuRm0ea%2BRNiScn3OeqDblJeBmQ9n9iQjOL%2BkBRnQF9Wcd24yATTmVa7B0FwenCb7iBtR07HRpPYaP9aPkHhUz0MwWIFKmadRNnHrODCVNhMpqmKK6u%2FSYEJvXwbto7kLxRDijl3B8WJ7p4ImvsdS%2F0p930jQaQqnebVwichiO328MjPg9eMOTg0J53DpQPXHISU8nTKw0tYjHYxMofa01mjUYbdRipOE9oaLT6NrjXSGXhzze3kyMJvNgb4GOqUBYwAQ7D3xZSEpyAre%2Fg4Ojxv17mUk5FEvgg945x8Pw2fSxAYcTRBWeYUqWlnEQ0CGT%2B4mD%2FqZ2rqWH3qdA6lB4H4TJgoqVUWtLHwXQkyz8x5o5QChFZvYSZDIOy1IGA7DnQOy3AYORNBoIbB1w%2BRMc2mPWHXBm96OTuYVvT5uxEUmcq3vZHiuBIojPPjc8pDcBZUAUaQ%2FmXtpjskA%2BiHv1LvY2PYM&X-Amz-Signature=0ed7946cafda29c4e7d7e8ccb9a742112d3ea1e6af58d8f620e12c0a489ac259&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
