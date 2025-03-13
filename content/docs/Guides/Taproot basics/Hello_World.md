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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BFTJTA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqPGdfCOWNydd2a1jMDHVQi1PXD046pi%2FSwU%2BRRCJ6tAiBQIohyFlTogLjSJnuCDUyKqQEsuUOqq3TBcCdkS%2Fqg9iqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgKhL1THUzxT6v8b7KtwDAWYf592e86QGxbWmxv8xTzXuhnpFBuNvmTybIQeCwil4i2Cpkm4Dla%2FLEqZ%2B9P3a1rw2fHiuAjJBjiOvo60eqkp9m3VOYkL1C1hreK6C9EoNi59ZFFgH9Id6zoqtoNNAgIf8C%2FtxU1cdXn%2BL%2FLBYSVmrO1Vd3SHpII6mZ7ogpqvw5u3K6LnHOy3QGbWQGrkA%2BL9BFxCFoJe%2F%2FOw8m2Nh3YC3VTnhdEi8SYdgPMRSZOwkFCxNm9B1VYOjXaRI6CWSj6FQnXzJHnpXNJedP7XZ3Kc3inujVcdRodifAdgwH88rjOnGRBkrE3nb0Crj3JIeqYdY3%2B5k4wMNUrnT14XSYBVMl5JigeYjTOXPz8SZMmuwGni4QRWtV6o1qRpzbJp3WdCsEYqOg2SZ%2FWaILqK1V5zai385fUgjAR0hxiL7NZKFZ%2BZqeXTaiaPwalDq8MtXqcamNomxl1G7BkTHn%2Bz7YdfYTjTraim5BpXWObYI3gdbsvvFUnIu7qLnG%2BUcy3sSUBHS7zJWI2KEhl%2F7%2FwdTi3A8yaK3LNgF9PN2yRjysgmS4Km5XbUQISnIN3a%2Fvtc1aSOr6H7xyIL%2B6c37FPt6lD3g0m1FVpEWZ0jr13Ohgtakkt%2FwRm4pFxCpDZUwp%2BbJvgY6pgEBS%2FLM02i8RZr9QoiI6MZF7z8adidepN1QwapF1v9WnpCrTCJu1IYfD6Y%2FXEPo2%2FZ0wyDC0t4MOLB5VnD0et8dqW0Ly7CTVvaxYz%2F5iMbmDwL8DB76kvr3r3qWr6pbEoY3R6N7agNzkIAyy9TamoMZhGgTt%2FwePBnRBqthxkXeSESiOaFfM8j%2FEAEwg%2BGr1EoniQgYBjwkYHLrU2Nv1mrx4KeVUPig&X-Amz-Signature=d97cd4a6005f1a689baa981ae027e470e1674650d6cc2b30274bf6a74a95b0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BFTJTA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqPGdfCOWNydd2a1jMDHVQi1PXD046pi%2FSwU%2BRRCJ6tAiBQIohyFlTogLjSJnuCDUyKqQEsuUOqq3TBcCdkS%2Fqg9iqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgKhL1THUzxT6v8b7KtwDAWYf592e86QGxbWmxv8xTzXuhnpFBuNvmTybIQeCwil4i2Cpkm4Dla%2FLEqZ%2B9P3a1rw2fHiuAjJBjiOvo60eqkp9m3VOYkL1C1hreK6C9EoNi59ZFFgH9Id6zoqtoNNAgIf8C%2FtxU1cdXn%2BL%2FLBYSVmrO1Vd3SHpII6mZ7ogpqvw5u3K6LnHOy3QGbWQGrkA%2BL9BFxCFoJe%2F%2FOw8m2Nh3YC3VTnhdEi8SYdgPMRSZOwkFCxNm9B1VYOjXaRI6CWSj6FQnXzJHnpXNJedP7XZ3Kc3inujVcdRodifAdgwH88rjOnGRBkrE3nb0Crj3JIeqYdY3%2B5k4wMNUrnT14XSYBVMl5JigeYjTOXPz8SZMmuwGni4QRWtV6o1qRpzbJp3WdCsEYqOg2SZ%2FWaILqK1V5zai385fUgjAR0hxiL7NZKFZ%2BZqeXTaiaPwalDq8MtXqcamNomxl1G7BkTHn%2Bz7YdfYTjTraim5BpXWObYI3gdbsvvFUnIu7qLnG%2BUcy3sSUBHS7zJWI2KEhl%2F7%2FwdTi3A8yaK3LNgF9PN2yRjysgmS4Km5XbUQISnIN3a%2Fvtc1aSOr6H7xyIL%2B6c37FPt6lD3g0m1FVpEWZ0jr13Ohgtakkt%2FwRm4pFxCpDZUwp%2BbJvgY6pgEBS%2FLM02i8RZr9QoiI6MZF7z8adidepN1QwapF1v9WnpCrTCJu1IYfD6Y%2FXEPo2%2FZ0wyDC0t4MOLB5VnD0et8dqW0Ly7CTVvaxYz%2F5iMbmDwL8DB76kvr3r3qWr6pbEoY3R6N7agNzkIAyy9TamoMZhGgTt%2FwePBnRBqthxkXeSESiOaFfM8j%2FEAEwg%2BGr1EoniQgYBjwkYHLrU2Nv1mrx4KeVUPig&X-Amz-Signature=6c506b36fccb0e8b816c88964003b753d48f2e2c4c5df7bab53bcbc4fb71f39a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
