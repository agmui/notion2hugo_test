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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3XJ3JT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG%2FfcWRt4mCs1bTpYWShiooxHZZJKhVup6SX0Hpt4K6cAiBFB5BLxU0snHwhhbrgve2x%2BsxpKSP%2FRu6lZ68HhWefICr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPyy8kmpW%2FkaYGWsdKtwD2QwtDSbwUrhe%2Fbo6Brr5xntvWS1An1ApS7e1cprZk%2BDmmRkjxG4LX6YUFr%2FXnV1Bp4GDEMDc0KBOkP6kZSjfYwSCCKyAJai72CC3Wq%2FhbvBDhmIbwLGh9i%2Ba4jg5cTMMhvGcATqbYmOYVb5UB6%2FcwHro4KYDFCchuhC4JnnNNq6%2F1SAsUuCg6Ad58aAqWUiqhynna0VPezP4e4WhRiwpLMMUdQrSSJ1i6ecqmmQXZDENJO%2BSBIDif3r66RkUOkVOF6kgKir73NA7Y2SJZmmhzYpRrYURrwgI2bEvuGhGnlxjD9W1XUQUNuPBx%2FtObwjMKb6pN3CjX2W1IEjFgGjRxBHXw2VPj5LJJ%2BeOnFddtelEDGz9A1zboZd7r5c5jbdb2FpF0Mf%2BO6zaPsF0NtCt8D7ufJ4QreKVtDl2rddLd3JLtZ9a4%2FN2ZSumhVrFwhebz%2BFyMTfsFQ0JuVOjBUmwmKZuzHzssrlUT59AxzzBdKsFc8xZKg4uz1h%2BvfayIRRpVqLjKHcmErnVXXyNaAkSokpy4r2Vcva3QLVJKhd82ARKIsM7gcPEz4TTLS4XXS7r3ac01qgVlrqnriE9S%2BmqKA4lIetFqY3QP5tKAqVz3xwOaDpkyNXx47X5F1kwkZbtwgY6pgGUdVIt1L%2FKQcHgviJ6rJRZe0jOXzEFxmreeOg7YEJb4rw1291EqyIjP0dVXQ6ZecuQr2CDWm9r2wr5ZEH0aWbJbR7R4%2FWFC4g6qQCaJ399Ly3DtMZq6IYWCBFGAYARkN06mijsK6DRCJYzBv3aXtg8JNtQ2pQpJJgS4pgWE7yS7289ogOGPIT%2F9%2FeJYaR2T50yzrmKl3dnUVga7lHWzfSgbBduEZFU&X-Amz-Signature=79bbc1e59d5760507cc366153581d6440a1e2716b87934845c083fdf6c3f9095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3XJ3JT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG%2FfcWRt4mCs1bTpYWShiooxHZZJKhVup6SX0Hpt4K6cAiBFB5BLxU0snHwhhbrgve2x%2BsxpKSP%2FRu6lZ68HhWefICr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPyy8kmpW%2FkaYGWsdKtwD2QwtDSbwUrhe%2Fbo6Brr5xntvWS1An1ApS7e1cprZk%2BDmmRkjxG4LX6YUFr%2FXnV1Bp4GDEMDc0KBOkP6kZSjfYwSCCKyAJai72CC3Wq%2FhbvBDhmIbwLGh9i%2Ba4jg5cTMMhvGcATqbYmOYVb5UB6%2FcwHro4KYDFCchuhC4JnnNNq6%2F1SAsUuCg6Ad58aAqWUiqhynna0VPezP4e4WhRiwpLMMUdQrSSJ1i6ecqmmQXZDENJO%2BSBIDif3r66RkUOkVOF6kgKir73NA7Y2SJZmmhzYpRrYURrwgI2bEvuGhGnlxjD9W1XUQUNuPBx%2FtObwjMKb6pN3CjX2W1IEjFgGjRxBHXw2VPj5LJJ%2BeOnFddtelEDGz9A1zboZd7r5c5jbdb2FpF0Mf%2BO6zaPsF0NtCt8D7ufJ4QreKVtDl2rddLd3JLtZ9a4%2FN2ZSumhVrFwhebz%2BFyMTfsFQ0JuVOjBUmwmKZuzHzssrlUT59AxzzBdKsFc8xZKg4uz1h%2BvfayIRRpVqLjKHcmErnVXXyNaAkSokpy4r2Vcva3QLVJKhd82ARKIsM7gcPEz4TTLS4XXS7r3ac01qgVlrqnriE9S%2BmqKA4lIetFqY3QP5tKAqVz3xwOaDpkyNXx47X5F1kwkZbtwgY6pgGUdVIt1L%2FKQcHgviJ6rJRZe0jOXzEFxmreeOg7YEJb4rw1291EqyIjP0dVXQ6ZecuQr2CDWm9r2wr5ZEH0aWbJbR7R4%2FWFC4g6qQCaJ399Ly3DtMZq6IYWCBFGAYARkN06mijsK6DRCJYzBv3aXtg8JNtQ2pQpJJgS4pgWE7yS7289ogOGPIT%2F9%2FeJYaR2T50yzrmKl3dnUVga7lHWzfSgbBduEZFU&X-Amz-Signature=4bd3369508f18bc0402658a8a05299399b5ed41f2c6b70058d83206f477d3bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
