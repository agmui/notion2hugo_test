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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVTETEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFwOk4moZMjdU8iuFyTqkVBadOH%2FpVCi1gVx2bSvc8JSAiEAwFCxsnU%2FhlITfhiRu9tdnFHYsy%2BOH2oTEqYtSr%2B0gKUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgqt0bbfDbJUWfn3ircA39iZNbzKfxfIHR3aJQWRRJ7foZUlBwIdDaXjk3chs%2B4n5EBbKW36EbtMAfjYr5zgW%2FdFfFEq8teYG30KxJCoQehwmBLP18f1b5Ue0xZTLQkos0RBaEy4rdcOzw5eDBqRYQpBphfDJYZ0FqXirb7KyDwKQJmaQwm7oL%2Ffi5DN02gvVa1vm9bWLeVNXe2TAdo9fCgtQDh9BD3EJtUnNOf3f19Q66pm9Lm4Y8n%2BxmssiNN6N0rtgLQXnw94aMqK8w7NfDEKh4qPgA45E%2BkCDQwPD6rm%2Fccn4yeYSQYq5uYbJYYeTKSK90dJwGxBK8qOYpBUPziXzSNtJRzXBcug4IFz%2F6qF7O1bbsFWycJG5nZPrAZvXFeUQ3hFGWpOYocmGNAzQY7s7VQ2vB4luIJbm5vuLARVYJ7CF%2Bb%2BJwBvuLzEK2hoo65%2BS3dwmXkdaIzmG%2FGRTPkjjBqm%2Byc4x3hF8LMZr2eqjbphv6cRhqOWFMCVhUGbxW7gfrurNSCej6k8w2QsvXssf3eQuYGZC0R9Uu7qtYdjC5mhqAGHTrmrJDq%2BGTO0uKRlisMq7mwEnjxLpSe3hmiXD9vUmMM3miur32L20mxw95xUGnFyRn%2BS6BYuKqNHB0XctfJjBhNhBJZMNmxosQGOqUBzo6cav45qZkuAdMcO3Pa24qqJjTcP0M4zWVx0wVLZmbJm4n6VyUQtdHykBHiKoAMCgbs%2FI1xmUtqSZ1P57xq63YoKa88%2B7eitKlVpBY3JQ4OLXDeE4knGT5YkX95BECCJhHm3FX7YCoICKhMHBLRirv9PRC%2B6uD1efw9HJyDLwIDlmJP7Q9dWhI5ghsC4bU40mh2Ne%2Bvw3Qwb6NkTNG7bWIbX83x&X-Amz-Signature=8ecbfc4ac1f7a0a8d3e1c9d9a802afa6ef1bd8d000625c3364371c97815c0c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVTETEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFwOk4moZMjdU8iuFyTqkVBadOH%2FpVCi1gVx2bSvc8JSAiEAwFCxsnU%2FhlITfhiRu9tdnFHYsy%2BOH2oTEqYtSr%2B0gKUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgqt0bbfDbJUWfn3ircA39iZNbzKfxfIHR3aJQWRRJ7foZUlBwIdDaXjk3chs%2B4n5EBbKW36EbtMAfjYr5zgW%2FdFfFEq8teYG30KxJCoQehwmBLP18f1b5Ue0xZTLQkos0RBaEy4rdcOzw5eDBqRYQpBphfDJYZ0FqXirb7KyDwKQJmaQwm7oL%2Ffi5DN02gvVa1vm9bWLeVNXe2TAdo9fCgtQDh9BD3EJtUnNOf3f19Q66pm9Lm4Y8n%2BxmssiNN6N0rtgLQXnw94aMqK8w7NfDEKh4qPgA45E%2BkCDQwPD6rm%2Fccn4yeYSQYq5uYbJYYeTKSK90dJwGxBK8qOYpBUPziXzSNtJRzXBcug4IFz%2F6qF7O1bbsFWycJG5nZPrAZvXFeUQ3hFGWpOYocmGNAzQY7s7VQ2vB4luIJbm5vuLARVYJ7CF%2Bb%2BJwBvuLzEK2hoo65%2BS3dwmXkdaIzmG%2FGRTPkjjBqm%2Byc4x3hF8LMZr2eqjbphv6cRhqOWFMCVhUGbxW7gfrurNSCej6k8w2QsvXssf3eQuYGZC0R9Uu7qtYdjC5mhqAGHTrmrJDq%2BGTO0uKRlisMq7mwEnjxLpSe3hmiXD9vUmMM3miur32L20mxw95xUGnFyRn%2BS6BYuKqNHB0XctfJjBhNhBJZMNmxosQGOqUBzo6cav45qZkuAdMcO3Pa24qqJjTcP0M4zWVx0wVLZmbJm4n6VyUQtdHykBHiKoAMCgbs%2FI1xmUtqSZ1P57xq63YoKa88%2B7eitKlVpBY3JQ4OLXDeE4knGT5YkX95BECCJhHm3FX7YCoICKhMHBLRirv9PRC%2B6uD1efw9HJyDLwIDlmJP7Q9dWhI5ghsC4bU40mh2Ne%2Bvw3Qwb6NkTNG7bWIbX83x&X-Amz-Signature=12845d9e7a4a1ff4fac3ca08e2a0b85bbeaae7177bba0567e6eada00f22ae005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
