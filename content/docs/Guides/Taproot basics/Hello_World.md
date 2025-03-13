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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XMJCXR3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2aYW%2BJqVEJ4OE%2BjrxD0b41jTdZ2uELaOtGkw3JdNbgIgJaob5QRT3aud53Ww1FFSkM0L%2FSeGs3Dn2yWBONtjrJUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSjqYalXz2ieAlJbircA%2Bem19do%2B1dUDJlvXWsGCZU7gDcamKxxckBk2%2F0PIiq4b74I1nwO6zEl4TxGSEi5Lqsla0658ER5AdTFcHgmvV0JQ5CftrA%2BhCe%2FHcIJVb0EskBikTyL%2BRzao6hyILpkQxslWWMaX9wPew0MvC0zOB9vB6v8FkQ9USZU%2Fb5KKBBRTK6xFFuOaGPOwXW1eJlwSssYYNk2oVFKxygHJm0mApSEs1ujytpdE%2Br%2B4mjLuv2uQ42Wnm2hI%2FxpUC07edda2O0P3s%2FX2qXKVxMCL4z8Ulii2louFm2wu34s%2BjhEA0aV1PzKLhgdMJYnBPpWz0vCtIRAqWZf5SyBW0uISFWNJTMkhHvnN8aXalOAeepu2TJNwaUAvC3RJ96F5mqcWdh7vge8wpyZ%2BRFqCsUwxXrdz%2BYhi4%2BksBA5j0zaS5%2FR8ZMyvqqGSAyihyg2kb%2B4nls72r6kzl992JlL8UB3jk%2F%2BbFutoQyVsTtBSPuqJ%2F0YlofohJ4mkjBHRjlD0vAyD6Gs0IBBT6LaOhaT7GPcdgbBqBQnSTd5v4cZ0QwB3YCfT1wYmyk%2F49PqXd3rkucCRf%2Bja8ZCoE12Oy93qWxKv9fUAO03Xc32fe3asQQ%2FLq45YrOZ5qTJbnBLcLJojAX%2BMNGjyr4GOqUBLJ0HGanWhi8KAaCwnzqzLE%2FLW8ayP5QSDlJCZyZNNW3bLEdDnYWbwLsmiXPlX7JmiJ2k5SUr1EHZsX60PBODJTnNqU8PSqTl0Ew3q1%2FEsRt73bNHLW7k1e8hGLkm9YcEAYKKCtycO3sky6yMwEpzNjTJxkUhr9yFbWWm3UGHfJUe8yhDmLCdA7SFNyiFr3PDUASrT%2FM50jK22DftytHX0Wstscnp&X-Amz-Signature=652c6ee78c7558ed06a70db6571475514352ae80cde75e8df54c8570e23c656c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XMJCXR3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2aYW%2BJqVEJ4OE%2BjrxD0b41jTdZ2uELaOtGkw3JdNbgIgJaob5QRT3aud53Ww1FFSkM0L%2FSeGs3Dn2yWBONtjrJUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSjqYalXz2ieAlJbircA%2Bem19do%2B1dUDJlvXWsGCZU7gDcamKxxckBk2%2F0PIiq4b74I1nwO6zEl4TxGSEi5Lqsla0658ER5AdTFcHgmvV0JQ5CftrA%2BhCe%2FHcIJVb0EskBikTyL%2BRzao6hyILpkQxslWWMaX9wPew0MvC0zOB9vB6v8FkQ9USZU%2Fb5KKBBRTK6xFFuOaGPOwXW1eJlwSssYYNk2oVFKxygHJm0mApSEs1ujytpdE%2Br%2B4mjLuv2uQ42Wnm2hI%2FxpUC07edda2O0P3s%2FX2qXKVxMCL4z8Ulii2louFm2wu34s%2BjhEA0aV1PzKLhgdMJYnBPpWz0vCtIRAqWZf5SyBW0uISFWNJTMkhHvnN8aXalOAeepu2TJNwaUAvC3RJ96F5mqcWdh7vge8wpyZ%2BRFqCsUwxXrdz%2BYhi4%2BksBA5j0zaS5%2FR8ZMyvqqGSAyihyg2kb%2B4nls72r6kzl992JlL8UB3jk%2F%2BbFutoQyVsTtBSPuqJ%2F0YlofohJ4mkjBHRjlD0vAyD6Gs0IBBT6LaOhaT7GPcdgbBqBQnSTd5v4cZ0QwB3YCfT1wYmyk%2F49PqXd3rkucCRf%2Bja8ZCoE12Oy93qWxKv9fUAO03Xc32fe3asQQ%2FLq45YrOZ5qTJbnBLcLJojAX%2BMNGjyr4GOqUBLJ0HGanWhi8KAaCwnzqzLE%2FLW8ayP5QSDlJCZyZNNW3bLEdDnYWbwLsmiXPlX7JmiJ2k5SUr1EHZsX60PBODJTnNqU8PSqTl0Ew3q1%2FEsRt73bNHLW7k1e8hGLkm9YcEAYKKCtycO3sky6yMwEpzNjTJxkUhr9yFbWWm3UGHfJUe8yhDmLCdA7SFNyiFr3PDUASrT%2FM50jK22DftytHX0Wstscnp&X-Amz-Signature=3160d51f23d30afdc8ac2c1f167bcd7707ae0b21c5187668789e80105b674798&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
