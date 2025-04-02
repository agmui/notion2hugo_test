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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV474E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDzhYO3JXBpcwieGIQZgoTs9aWuBOBJYdRz5yJST%2FnhLAiEAxW2TD5IgxkPt3wpfaXBLdWNDjQmZGt4POymwr5Ayoq4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUw1BkjolW%2Fn7pAMSrcAwuxboawAjnM2lbCO%2F%2BfLAruLZPxYmOWbhFBIONDnC%2BJKXFVzO1ssyqUxavM65qJHwr0TDlYDbA1HliIaKmhjpuP24Kz3uatBjCjAeyoHdzNAO7sBxDax5GML875%2Fz6%2BxrGVXmZ7GYlOLY%2FR1tZnpNwJqUBo9hwWqWStHH%2Fu4J7n80Us2itLVKVkwHNN4e5puRHi61lkATloqIxUFpPD5Bw2rrnWUxkB3B%2FVImInA4bIEPDj1CxXI4J62HcozmcDm0X0gpE6qPPvzRm0KeQcoUV4j8dmXEQ0PjDRVS6ffz9UTH%2BpuI1UtrS5HVylHSRQfE5D5dQWWSlu%2BiBo6TX%2BL%2BKG6qAFGwBsanVurlVWwpFKyGlKLPo%2FPmlK1VoLzG8IbExNUjEodKc8BQYJfGgVI5g16C1yi1rJtHYzPCD7uIUwXl9YcVoDoWlBiwFTsfWvbsNgNB2pZ%2Fr30irpgSu7MOjxQw5EOcRN3mVzDQJBMndHyf38DiGOlP8zQXspMPQU0a6AxP%2Bold7qOMnxaqXLyxH%2BaxWQusCf9rQKMEyUFl4LAOYWkAO3ylNKeGz0%2BjSsTXr8Fj4Nh1ea4q5leUnL8v57UPNbp11%2FPE7tuQPuVyjzdhFcDGuYzc9aIOHlMNjYtr8GOqUBf8RZwz0wpHc8Q59zc19FZWD9BHWHYUkJcSTdDufWuLIv80jQaBKZL5Y6IP79eeHYlX%2BilxDWQ6eE7NZyxDiaSt7Qe4RJCaPwqpPWM2IY0Pbl2pg%2F%2FDXX2xZeZGKvl%2Bw722aoUOVltAvdPKqNoL1fZnNEVfFp4fvhKwiQl7cCDB9gsD3h%2FQ%2FvR%2F59f7spiO8FI8MV50uXiY53kT0a7yglYsI5QMII&X-Amz-Signature=d2c1fa63e0b11725fd0a4558d75bb52f8e26766b5d3d734d1028a1822d230ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV474E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDzhYO3JXBpcwieGIQZgoTs9aWuBOBJYdRz5yJST%2FnhLAiEAxW2TD5IgxkPt3wpfaXBLdWNDjQmZGt4POymwr5Ayoq4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUw1BkjolW%2Fn7pAMSrcAwuxboawAjnM2lbCO%2F%2BfLAruLZPxYmOWbhFBIONDnC%2BJKXFVzO1ssyqUxavM65qJHwr0TDlYDbA1HliIaKmhjpuP24Kz3uatBjCjAeyoHdzNAO7sBxDax5GML875%2Fz6%2BxrGVXmZ7GYlOLY%2FR1tZnpNwJqUBo9hwWqWStHH%2Fu4J7n80Us2itLVKVkwHNN4e5puRHi61lkATloqIxUFpPD5Bw2rrnWUxkB3B%2FVImInA4bIEPDj1CxXI4J62HcozmcDm0X0gpE6qPPvzRm0KeQcoUV4j8dmXEQ0PjDRVS6ffz9UTH%2BpuI1UtrS5HVylHSRQfE5D5dQWWSlu%2BiBo6TX%2BL%2BKG6qAFGwBsanVurlVWwpFKyGlKLPo%2FPmlK1VoLzG8IbExNUjEodKc8BQYJfGgVI5g16C1yi1rJtHYzPCD7uIUwXl9YcVoDoWlBiwFTsfWvbsNgNB2pZ%2Fr30irpgSu7MOjxQw5EOcRN3mVzDQJBMndHyf38DiGOlP8zQXspMPQU0a6AxP%2Bold7qOMnxaqXLyxH%2BaxWQusCf9rQKMEyUFl4LAOYWkAO3ylNKeGz0%2BjSsTXr8Fj4Nh1ea4q5leUnL8v57UPNbp11%2FPE7tuQPuVyjzdhFcDGuYzc9aIOHlMNjYtr8GOqUBf8RZwz0wpHc8Q59zc19FZWD9BHWHYUkJcSTdDufWuLIv80jQaBKZL5Y6IP79eeHYlX%2BilxDWQ6eE7NZyxDiaSt7Qe4RJCaPwqpPWM2IY0Pbl2pg%2F%2FDXX2xZeZGKvl%2Bw722aoUOVltAvdPKqNoL1fZnNEVfFp4fvhKwiQl7cCDB9gsD3h%2FQ%2FvR%2F59f7spiO8FI8MV50uXiY53kT0a7yglYsI5QMII&X-Amz-Signature=7189e8366e92ff156e041d0183e79af7afeb61c8a6fc4145d96adca5416106bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
