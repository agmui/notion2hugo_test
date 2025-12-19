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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2R5GF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj6ab%2F1UdfKtE5ZTSMNyTuShrdlTeRUM0kPi9M%2BD7cYAIhAPXOebEL0egWYCF%2FaL3WXpTQ5MR4zadBo0mOibPbVKeYKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyedU%2FCqfYc0xvSaKEq3AO8pVR6M84GIcw2Jhzn7rG926B3AuTWantNy6rluKaHgz42J3AfwW%2FXHjivF6KfGxSY7bm47RI8cIkXwq6vnUN0gjV8Zy0witRxjqOi%2B%2BtoERu%2FFgfOmv78TLR1YUpEJxX0f7eF0QdK5EXp06YOPYY9qk1YrRPswYyp4ziJRkNOl2LYGKxI9igzZytGk6nXsg3Q61f%2BeBgw8Hn2u%2B9KGzWufc8qXaehxC4Poj9fYzrEaA0u1OZn1C4hqISxBdDQTNxSpCrgMIwj341BS1n8w4vuRgQRYFhs7FFaj%2BBmm0G6a6WDXaQ245C5GKLkG6zmasm%2B3VTtQP0YuzoAVQitVPP7DLq%2FaSkYAi74HtiskzSoBIzXt7OWvD7ggPO5BfU8AsuQILEiOMiN5sGuP1Ze%2FYeTMAEuimtYPik7AwaRBVNmv2qAewnzO%2FI1rynUyyymLEB8deDFTnDZgDqNnLUmthr0oVCzSpUtXK4Cv5o99LvX5%2FqQJ0uJHhGDDhpZylPoh7f%2FaMdlhfGfwNpAmEPfxpN14eqhXvMy0y%2FPYp3hl7bSUvzCLWZQEdJm3gX9THaXkZEOp1zRpirf44ztZHMAob3ZwbIZi%2Bak4hsnvJ7E3YzlyxFYrxX7wHnHQkqI3jCOyJLKBjqkATZUtu3zVQ6x42XjL%2BrDNQWeRQ5PuGk3e8jZrRlGfBw1LY%2F9rDafn0OKvJUPM15VzSYOuN0WgfyVhpL%2B%2F0AgTgKtr5qGYMxgQzAWyFVo1fUPPlJXtP88PWpfcASRvZOUKABA4SX9behf07ulgxFoGcnpWxi33rs5%2BVmRYtfC98swmUuSIN6vl5%2FwHa7D3GcLUfJOZQkNafz1t6g5fGCaAxH1YIfD&X-Amz-Signature=dc424a285125ec574cccf3be3161b6349cd2668708a6ec9960746e95a660d395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H2R5GF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj6ab%2F1UdfKtE5ZTSMNyTuShrdlTeRUM0kPi9M%2BD7cYAIhAPXOebEL0egWYCF%2FaL3WXpTQ5MR4zadBo0mOibPbVKeYKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyedU%2FCqfYc0xvSaKEq3AO8pVR6M84GIcw2Jhzn7rG926B3AuTWantNy6rluKaHgz42J3AfwW%2FXHjivF6KfGxSY7bm47RI8cIkXwq6vnUN0gjV8Zy0witRxjqOi%2B%2BtoERu%2FFgfOmv78TLR1YUpEJxX0f7eF0QdK5EXp06YOPYY9qk1YrRPswYyp4ziJRkNOl2LYGKxI9igzZytGk6nXsg3Q61f%2BeBgw8Hn2u%2B9KGzWufc8qXaehxC4Poj9fYzrEaA0u1OZn1C4hqISxBdDQTNxSpCrgMIwj341BS1n8w4vuRgQRYFhs7FFaj%2BBmm0G6a6WDXaQ245C5GKLkG6zmasm%2B3VTtQP0YuzoAVQitVPP7DLq%2FaSkYAi74HtiskzSoBIzXt7OWvD7ggPO5BfU8AsuQILEiOMiN5sGuP1Ze%2FYeTMAEuimtYPik7AwaRBVNmv2qAewnzO%2FI1rynUyyymLEB8deDFTnDZgDqNnLUmthr0oVCzSpUtXK4Cv5o99LvX5%2FqQJ0uJHhGDDhpZylPoh7f%2FaMdlhfGfwNpAmEPfxpN14eqhXvMy0y%2FPYp3hl7bSUvzCLWZQEdJm3gX9THaXkZEOp1zRpirf44ztZHMAob3ZwbIZi%2Bak4hsnvJ7E3YzlyxFYrxX7wHnHQkqI3jCOyJLKBjqkATZUtu3zVQ6x42XjL%2BrDNQWeRQ5PuGk3e8jZrRlGfBw1LY%2F9rDafn0OKvJUPM15VzSYOuN0WgfyVhpL%2B%2F0AgTgKtr5qGYMxgQzAWyFVo1fUPPlJXtP88PWpfcASRvZOUKABA4SX9behf07ulgxFoGcnpWxi33rs5%2BVmRYtfC98swmUuSIN6vl5%2FwHa7D3GcLUfJOZQkNafz1t6g5fGCaAxH1YIfD&X-Amz-Signature=79b59ba3f7d55a6b4399a28fe5f33baf3d2bd9f0adcfcad44ee9ece1b530a4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
