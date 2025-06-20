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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUSRL6I%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWekdL24nJKOF%2BfhXxp1yTGle7sMYUSFn8WBY8%2FnfcuQIgLQJzjjf0YNVGcbhTo1c6Bp1j%2FAYs5b1NmphD7gsfg2EqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOobmW8qY9cb2akFhyrcA5W7GTA4tC0RpF4FW64zMlZCJdZ4hN7ll%2FcFLyseHAonqwwTwE1QVhbn1w%2BtZACbzz%2BisChuXp7oX4y%2Fo3duaQT%2Bvz5waYuXXj9pVDyOtHg9743bGWmB%2BgRN%2FGgq8ojv8OT9Ot3eerl9qxpG1jSZpqO5tGwntOOqTXaKUPDNeMPaKBNCIH4vN%2FbrtqQT5euwZbteJU3%2BRZhmF6pOZJcRfzMJno%2FvpOhs1P4R%2BGPesOUPEPUKhc5YoheMoAsMAhx2EADTEDeYvRH7u5EyMXB5dH56X1S8s18qQN38L1P6X0o3OFgu6UMSa7s4p6%2BaSNhHgoap5ANZuKwYKWyEv9In5u4qJhMkJ13vn8OCTrSO6yselP0U7dAPJ6ZpHMS0C9kARXIgXxiVkUBeM53TiCAG0jkXYWGCtVGpzvGxjR2xPVreNC7ZmLXTG1m%2FwIuV%2BqXSf05xmZ5D0U7DT86qDyckVVADTzsraaD%2FojKfrQCvsfHP%2BrWw%2FvdQiyz711XRg6riXsk83vd7dipRs%2Bev4Z8avKCtLLLmuzYrwTRkf5b5fPJcGYc00yiCcbqMcZmjBzEsh%2FCQMB03xQCqDoqIARcoeobUQwvAPKSNnBY2Si1MRTO28eNlBKFVx6SaXvRcMP%2Bx1sIGOqUB4mwVGbNXgOg66%2FA5hnfVJs6AbPe1QeIhZq8ihyl6D7m%2FX8OBdC3I9QpJcNMJhAxRNaVlqWksrx8lXTSzwe%2BJj2gX3uo49MvUFoPCkLU%2F%2Bfg9lICloWbj%2FUTA%2FH9W9yVaJcNmxzpHLaWRiPZIUtKlHxC4uUlTxQF%2Fr53z1Os0aN31ZHDj%2Bl3i4h7%2FA0XlQEXplnrvADyg7cdCnGi4lw6aIo0m8nUM&X-Amz-Signature=ccf1a7737bef15e90c2317614e4cbc12ec859bf2d88fd7e4b005958f16a4e39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUSRL6I%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWekdL24nJKOF%2BfhXxp1yTGle7sMYUSFn8WBY8%2FnfcuQIgLQJzjjf0YNVGcbhTo1c6Bp1j%2FAYs5b1NmphD7gsfg2EqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOobmW8qY9cb2akFhyrcA5W7GTA4tC0RpF4FW64zMlZCJdZ4hN7ll%2FcFLyseHAonqwwTwE1QVhbn1w%2BtZACbzz%2BisChuXp7oX4y%2Fo3duaQT%2Bvz5waYuXXj9pVDyOtHg9743bGWmB%2BgRN%2FGgq8ojv8OT9Ot3eerl9qxpG1jSZpqO5tGwntOOqTXaKUPDNeMPaKBNCIH4vN%2FbrtqQT5euwZbteJU3%2BRZhmF6pOZJcRfzMJno%2FvpOhs1P4R%2BGPesOUPEPUKhc5YoheMoAsMAhx2EADTEDeYvRH7u5EyMXB5dH56X1S8s18qQN38L1P6X0o3OFgu6UMSa7s4p6%2BaSNhHgoap5ANZuKwYKWyEv9In5u4qJhMkJ13vn8OCTrSO6yselP0U7dAPJ6ZpHMS0C9kARXIgXxiVkUBeM53TiCAG0jkXYWGCtVGpzvGxjR2xPVreNC7ZmLXTG1m%2FwIuV%2BqXSf05xmZ5D0U7DT86qDyckVVADTzsraaD%2FojKfrQCvsfHP%2BrWw%2FvdQiyz711XRg6riXsk83vd7dipRs%2Bev4Z8avKCtLLLmuzYrwTRkf5b5fPJcGYc00yiCcbqMcZmjBzEsh%2FCQMB03xQCqDoqIARcoeobUQwvAPKSNnBY2Si1MRTO28eNlBKFVx6SaXvRcMP%2Bx1sIGOqUB4mwVGbNXgOg66%2FA5hnfVJs6AbPe1QeIhZq8ihyl6D7m%2FX8OBdC3I9QpJcNMJhAxRNaVlqWksrx8lXTSzwe%2BJj2gX3uo49MvUFoPCkLU%2F%2Bfg9lICloWbj%2FUTA%2FH9W9yVaJcNmxzpHLaWRiPZIUtKlHxC4uUlTxQF%2Fr53z1Os0aN31ZHDj%2Bl3i4h7%2FA0XlQEXplnrvADyg7cdCnGi4lw6aIo0m8nUM&X-Amz-Signature=cd34dabe73b15b65f207dcf21cbb0e2eadd8b38d2543c8a3c83ef6eb98f64dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
