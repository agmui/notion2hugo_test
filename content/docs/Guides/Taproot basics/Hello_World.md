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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIFOGSK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQlWU3YikC%2FqFUDrhng0fN0Ez4d8gXW3TcAB33m44RwAiEA7WDbRn3BkcLlhHVL8cg5CpvaNTwrN7ubjK9dBZB5PwIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEaJI6Ly3uFXNKRwAircA4%2FXsHbVBiJBsUCmvT9RkCiJpI1gBnuawnBSTCA4QluvdqKlctGHosODfIuwQYi%2BCdO4BkwpICi4zZp9EBzI3Ry100b97KndHqENSseT%2FPeQ5fC6IBstSgX%2Fv2kgsVlweGYnPgYXw2KxiWcEgFuzCCHBXpY%2Bquy6UNQtuyE%2Fgb0Pd5SQ%2BFabSlo6X20KCUB3ARVYRxjkY6wa2BqgDzwIMnJyDz2bUwSbeSyey1aqqk6pxiiKG%2F04e5dO7gTyxgflb3GMQ%2FpZrxDNraZbmhN%2BJ4msPZRGDCHOf9ZZHAHqcSJdjtEt5lBBcReA6RaDbGrFbqe27W3eYFX%2BaU32GyfpqrM00xu9aAGj1MRjv9LBFmExZnnFfumNsGkk4G%2FSPkf1yjfCynaZJJH8KFh0gxUAL8aVRtMiFlxjL9Mw5xVtDq6zWbYtUp0X1q3PXzouz5CrXWw1JKyawLfV%2FZvSF3XWraYmtUU9WL9%2BjGZfRIDK1Cv8QaW88pHD%2B1VcqDCBOcx3ZXHskQVzS1RQWBdfwvGz0UG%2ByOFO%2B0Zwitqqy2rPJu8jo%2B%2FBJbmFwdt4%2FxM8uv%2BMHLVSmvNkVsxp32l657hBZ3nfwkDfhSHGbaY0wVxLPT%2Fix%2BqD%2Bs1rIFqcnBMjMI6ptMAGOqUBVDHvPiOAUla01OK140ST9FuCtYX8t0ohk9%2BUtC631Hl3rom5uxViJxmW5K7SK9ezRu0tAxgsWqAK9RPR%2Fc6XplDnXOBVT5pgycTkuFUBH3aw%2FLbsLL%2FUCTKwKPJxlEHrQbpeziYsJpGYVw3eoh4%2FpEWcG4ujYWmZzPtqrJscMQKZIM3VJozAtG3LEMsydnBxLrFzZm3PFliiYMWnxNlcXdHc%2Bi2r&X-Amz-Signature=2e7f830be42af23383fee27327ea1c44c7bc77d7e3c75759541ad5f829f07ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIFOGSK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQlWU3YikC%2FqFUDrhng0fN0Ez4d8gXW3TcAB33m44RwAiEA7WDbRn3BkcLlhHVL8cg5CpvaNTwrN7ubjK9dBZB5PwIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEaJI6Ly3uFXNKRwAircA4%2FXsHbVBiJBsUCmvT9RkCiJpI1gBnuawnBSTCA4QluvdqKlctGHosODfIuwQYi%2BCdO4BkwpICi4zZp9EBzI3Ry100b97KndHqENSseT%2FPeQ5fC6IBstSgX%2Fv2kgsVlweGYnPgYXw2KxiWcEgFuzCCHBXpY%2Bquy6UNQtuyE%2Fgb0Pd5SQ%2BFabSlo6X20KCUB3ARVYRxjkY6wa2BqgDzwIMnJyDz2bUwSbeSyey1aqqk6pxiiKG%2F04e5dO7gTyxgflb3GMQ%2FpZrxDNraZbmhN%2BJ4msPZRGDCHOf9ZZHAHqcSJdjtEt5lBBcReA6RaDbGrFbqe27W3eYFX%2BaU32GyfpqrM00xu9aAGj1MRjv9LBFmExZnnFfumNsGkk4G%2FSPkf1yjfCynaZJJH8KFh0gxUAL8aVRtMiFlxjL9Mw5xVtDq6zWbYtUp0X1q3PXzouz5CrXWw1JKyawLfV%2FZvSF3XWraYmtUU9WL9%2BjGZfRIDK1Cv8QaW88pHD%2B1VcqDCBOcx3ZXHskQVzS1RQWBdfwvGz0UG%2ByOFO%2B0Zwitqqy2rPJu8jo%2B%2FBJbmFwdt4%2FxM8uv%2BMHLVSmvNkVsxp32l657hBZ3nfwkDfhSHGbaY0wVxLPT%2Fix%2BqD%2Bs1rIFqcnBMjMI6ptMAGOqUBVDHvPiOAUla01OK140ST9FuCtYX8t0ohk9%2BUtC631Hl3rom5uxViJxmW5K7SK9ezRu0tAxgsWqAK9RPR%2Fc6XplDnXOBVT5pgycTkuFUBH3aw%2FLbsLL%2FUCTKwKPJxlEHrQbpeziYsJpGYVw3eoh4%2FpEWcG4ujYWmZzPtqrJscMQKZIM3VJozAtG3LEMsydnBxLrFzZm3PFliiYMWnxNlcXdHc%2Bi2r&X-Amz-Signature=d00e92232e0599c4d824f7fe3d6bd9f68c6a2148881b77995ce30b3d277eddb2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
