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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQ5BLMP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAbSI5tDJZtIFleip2DLzfZrVNviPYT59iqAapMyN8%2BGAiEA%2BvfvYQEXvCTbGUPIanklyGt5P%2BDgON5FidBlDOtLYKoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONDYpSoYqLN9vVAaSrcA2ilbQZiYvgZa3lri4IoNz%2B%2BKJ2g2%2BBSjA9RnZziJDBWmpEXCO0WQv6M96j3UhMUnZFPByggdObz%2BdsH7anu8%2FGbZ79MgC%2BPxU%2FaXuxuxlABmuAeGBwAY6RnT9F03UOCGTviKoG%2FnL4O57aG%2FGO%2F0Ps8G1xBb4%2F2tbP4hyNNWr7wJiPjueThPpJ8G%2F%2B%2Fl%2Ba3l4e50ncgiEB6E%2BebfQcni0raWjd76bXikg0zAIUdFmlUrQyLjqpdE%2F50uGGZ9wlK1FowaEpKSFkmZuaXO2A5kw0%2BnVejGqALEjV6dMwbbHdg7oC5HuCuEENwL3yPa3tZShSAKyZOaPq0dTL6JpYrUDVaVTwUvhl9gXJCgk6Ju5YRl5eDrtGkcw4dpbnjGZGSq5PAm9EYtgy%2B8nQTeeuixZ7DugzwKgCW0MunS9a9FfnXO5357qskspdKUYRNEo0ZVf2xI0FGsFadmRTXX1VI0XIQYHbZKPy9FUCLIp4UQAERWeEI2xISwAbDYiFBF3KsAS2Wj0RbvUsrgbilJOQdXcYy1wFeReyJxq0SJj%2FFgoNmyCmVEtC9LUxyLJFrFGYWu6ph%2Bjq0Sz3rF%2Fvvq0%2FJo0zFjM0CCclnfDF6P4SzsKEqw%2BeoDKDOnUY3d6ByMPjLrr8GOqUBBJsr4Ej5Px%2FLJnriaBWQnT%2BogFuXl7jwGm1tVSbb1zQvTn%2BukJ4xoMr1SUia8Mar8lFqTRnQwAjx1cjvQbOVeUCiq%2BsrKdq1tpI8p3L7VrM9K3lFLSMGSfDouTcHh5b7CqG0O5ggcoG9iDykriL80PIro12%2FnAYl1baBjexcBi9n12XkT3MOWnGQTm2BpaWN4x%2BNtaKFlqkI2ZqzyY2cOuyat7XZ&X-Amz-Signature=35a5184cc0e11cea6e204843ef5c9d99e63cdf30b3d8715e81f67233e9c09298&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQ5BLMP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAbSI5tDJZtIFleip2DLzfZrVNviPYT59iqAapMyN8%2BGAiEA%2BvfvYQEXvCTbGUPIanklyGt5P%2BDgON5FidBlDOtLYKoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONDYpSoYqLN9vVAaSrcA2ilbQZiYvgZa3lri4IoNz%2B%2BKJ2g2%2BBSjA9RnZziJDBWmpEXCO0WQv6M96j3UhMUnZFPByggdObz%2BdsH7anu8%2FGbZ79MgC%2BPxU%2FaXuxuxlABmuAeGBwAY6RnT9F03UOCGTviKoG%2FnL4O57aG%2FGO%2F0Ps8G1xBb4%2F2tbP4hyNNWr7wJiPjueThPpJ8G%2F%2B%2Fl%2Ba3l4e50ncgiEB6E%2BebfQcni0raWjd76bXikg0zAIUdFmlUrQyLjqpdE%2F50uGGZ9wlK1FowaEpKSFkmZuaXO2A5kw0%2BnVejGqALEjV6dMwbbHdg7oC5HuCuEENwL3yPa3tZShSAKyZOaPq0dTL6JpYrUDVaVTwUvhl9gXJCgk6Ju5YRl5eDrtGkcw4dpbnjGZGSq5PAm9EYtgy%2B8nQTeeuixZ7DugzwKgCW0MunS9a9FfnXO5357qskspdKUYRNEo0ZVf2xI0FGsFadmRTXX1VI0XIQYHbZKPy9FUCLIp4UQAERWeEI2xISwAbDYiFBF3KsAS2Wj0RbvUsrgbilJOQdXcYy1wFeReyJxq0SJj%2FFgoNmyCmVEtC9LUxyLJFrFGYWu6ph%2Bjq0Sz3rF%2Fvvq0%2FJo0zFjM0CCclnfDF6P4SzsKEqw%2BeoDKDOnUY3d6ByMPjLrr8GOqUBBJsr4Ej5Px%2FLJnriaBWQnT%2BogFuXl7jwGm1tVSbb1zQvTn%2BukJ4xoMr1SUia8Mar8lFqTRnQwAjx1cjvQbOVeUCiq%2BsrKdq1tpI8p3L7VrM9K3lFLSMGSfDouTcHh5b7CqG0O5ggcoG9iDykriL80PIro12%2FnAYl1baBjexcBi9n12XkT3MOWnGQTm2BpaWN4x%2BNtaKFlqkI2ZqzyY2cOuyat7XZ&X-Amz-Signature=de90ac80a4bec10b09f51e33e4565eed2e347d0d8e080df9a646ced560fa5ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
