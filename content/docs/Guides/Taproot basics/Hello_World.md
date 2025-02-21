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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FXOZK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2F9n7R10WPnkUVQNUh3puK44pK6N%2FZhRu3obnH9VKggIgL2T2QLaGcBls%2BSPnlL%2Bab%2FJMpr3FcrMfj%2FFcWiAwEjwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmd7zPWOLPNzmQ7rSrcA%2BOBzkQ5M36CYRjxkAC25J1S4pjfzd4aGRVvFfp2jRJbVsTqwiv2HkRrCm5Ft56zExl0OFvasPLVGeSuKLRzbU57y106%2BHt32rA%2BBhIDsqfVGsEeIHdOEzq%2Fj2hSU6lmZFFNn%2FijWy3DsBO3XeNvGpLQWZ7UFx0p5%2FEm6n1QT93%2BOTnFt9kKoWePAtIoHJcTHwNk9apcXTNslwjy0QkXHt9dXr6EaoTiuftkTZoa28q6Py%2F7FRI9YsjN1pZLh7oh7NNSycYCylv7M2CMTp%2F7mmq83P0clg5JGpjwPfERWz5ekYtTUZfJF9GlMGuFyn6PWBA1MJB%2BnY4HmZh4zUNWfFI%2F4msnAAFefM39GjksAxYVkC03J28JpjPuObShkeVBv0GnJ%2BWnChdyzrTdneR3alr8eM9hOO5o7UU7XM35VfRydKugYJUWr35OAziADizMHFgULJej8VcqpyK5jgJtoRd%2FffqYAcdbPl7v8P%2BB7HYeFO7JVw9BW%2BGHB6%2FOK4Aw%2Fc%2BgBmVQHFR0SQuO5ZzZbuyPGG5E2TgYWGr8MfE5JsMwYkscBP5FjzKU35Ev8tvS1mkciN8PSSGswWwJ0BWLCaVJH9sHierFUOFd6otE%2Fo8S1QdAKYdH3lkxOBm5MIvl4b0GOqUB85RXh%2F5AUhYkZG%2BjvtRsi9AblACb%2BaF5dZK3WYFHNwyunxLlFhe3WT%2FvkSZDgVp3Y4FwXLp%2FFB0CIP6eddCOMCj9NbKAdkcmE3q8kNSftT1Hx7UpIkFU5I4hCt%2BVY%2BHDmtl9uc2FgzC6ybylFV9AlX2oWzlUphxvRFJq%2FcXgmQ5yF9tXeqAZwbaYfxb%2Bn0kmPJFhKM2rzctPqTLjErGtRXODLokC&X-Amz-Signature=e9455a72e4484297540489a37ecff09cf8233e7b5e83cd18ddd072d28be0bef0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3FXOZK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2F9n7R10WPnkUVQNUh3puK44pK6N%2FZhRu3obnH9VKggIgL2T2QLaGcBls%2BSPnlL%2Bab%2FJMpr3FcrMfj%2FFcWiAwEjwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmd7zPWOLPNzmQ7rSrcA%2BOBzkQ5M36CYRjxkAC25J1S4pjfzd4aGRVvFfp2jRJbVsTqwiv2HkRrCm5Ft56zExl0OFvasPLVGeSuKLRzbU57y106%2BHt32rA%2BBhIDsqfVGsEeIHdOEzq%2Fj2hSU6lmZFFNn%2FijWy3DsBO3XeNvGpLQWZ7UFx0p5%2FEm6n1QT93%2BOTnFt9kKoWePAtIoHJcTHwNk9apcXTNslwjy0QkXHt9dXr6EaoTiuftkTZoa28q6Py%2F7FRI9YsjN1pZLh7oh7NNSycYCylv7M2CMTp%2F7mmq83P0clg5JGpjwPfERWz5ekYtTUZfJF9GlMGuFyn6PWBA1MJB%2BnY4HmZh4zUNWfFI%2F4msnAAFefM39GjksAxYVkC03J28JpjPuObShkeVBv0GnJ%2BWnChdyzrTdneR3alr8eM9hOO5o7UU7XM35VfRydKugYJUWr35OAziADizMHFgULJej8VcqpyK5jgJtoRd%2FffqYAcdbPl7v8P%2BB7HYeFO7JVw9BW%2BGHB6%2FOK4Aw%2Fc%2BgBmVQHFR0SQuO5ZzZbuyPGG5E2TgYWGr8MfE5JsMwYkscBP5FjzKU35Ev8tvS1mkciN8PSSGswWwJ0BWLCaVJH9sHierFUOFd6otE%2Fo8S1QdAKYdH3lkxOBm5MIvl4b0GOqUB85RXh%2F5AUhYkZG%2BjvtRsi9AblACb%2BaF5dZK3WYFHNwyunxLlFhe3WT%2FvkSZDgVp3Y4FwXLp%2FFB0CIP6eddCOMCj9NbKAdkcmE3q8kNSftT1Hx7UpIkFU5I4hCt%2BVY%2BHDmtl9uc2FgzC6ybylFV9AlX2oWzlUphxvRFJq%2FcXgmQ5yF9tXeqAZwbaYfxb%2Bn0kmPJFhKM2rzctPqTLjErGtRXODLokC&X-Amz-Signature=30c5a27b9ee8be01fa41dcbc03d43b36aee761681742321352288352706f36ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
