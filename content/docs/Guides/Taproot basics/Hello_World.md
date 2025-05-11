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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CB5U6F%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDfc%2BTjfjOA6YE%2FxFp45GT8iMXhpXFnDbRHEEk28td1wIhAIhIB2BUjP6pWUHUE%2BLICpn9IFXuL12nw5qSQn65tm%2BTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BQbZ5viZupJQfxm4q3AMm4ebagFFS%2BFiOpJhix2Nz7dfuvPIFdgeSefnNYRsUEDhkJ09jw%2FX25aDW2jrV4lX5mxGjkM0QO877BtlbguOUVdefKFlKShUz%2F9TATk9e%2Bfhaq4qS9uV19MfvyEI6X9Vpl944E51eOAWsqfb1ICH3Tj9CwWkN2hPVdbl0ahV8jJmyYM8wk0hC7tBEYQmpakcc5G2CY7dYqBb%2B6NViucfNMj5iE45E1nEQBiB0WiLk0p8AIcQe41Shk%2BDTmA%2BoY7QHRLG%2BG920vx2aI0U3QpcFS6CkhkGIcP%2B%2FrbXH7jnZ2LZ3x6fD4iRU%2Ft797pIiA6v1esTcuhBh%2FgrWQCixOBuSsYrR7Gu6%2BpsRjzz592Bp0VicTD3yZ2QobsvlgYLkufCvYl2uFDWCcOA4EE6HG7h392ppCbP8vb0lKgxamjz4uZRWT1sLIgrOschmjQgI23%2BMBNzoV9uKckAsG0QIpu4c8v3sGGnS8klAksfBr9Q4PB744Zb5reenwYbl4FGx9CeUCyfg9eqi5G60xywyqOYxDGEdHPkUasYuhy%2B%2BcRVQCGlZJRBZKAoSq5kXUOIcmGbYVwcmuK3i%2FkR7k7u71HvHOmDVn4Vn26L4y01D9skWrOqvYsoIT7PIK0YVnjDlhIDBBjqkAYBndFlqYZ%2FwZtiXf8%2BX85BkzCbs4mGw1reskLcu8%2BTkp4Vspy35t%2FCqnZuRVVWa0Ve1A9QzVemq%2FxsiNR3XT3LJYmjrvfEExnCjim%2FPCibL5%2F6Zabwijn25BRI5IUjDh1PugcWMLgHINY8cvEZILYEoBYYVwikmk6eUKcb9hdRYgyetV%2B7VMh0Kf%2F9kBuJioqS%2BADtDcMMY8LMjdmrKUv%2FPto3L&X-Amz-Signature=546c581eaf5715597b64b40a4e6b27498810d0ccda815adda3796e007a823d09&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CB5U6F%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDfc%2BTjfjOA6YE%2FxFp45GT8iMXhpXFnDbRHEEk28td1wIhAIhIB2BUjP6pWUHUE%2BLICpn9IFXuL12nw5qSQn65tm%2BTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BQbZ5viZupJQfxm4q3AMm4ebagFFS%2BFiOpJhix2Nz7dfuvPIFdgeSefnNYRsUEDhkJ09jw%2FX25aDW2jrV4lX5mxGjkM0QO877BtlbguOUVdefKFlKShUz%2F9TATk9e%2Bfhaq4qS9uV19MfvyEI6X9Vpl944E51eOAWsqfb1ICH3Tj9CwWkN2hPVdbl0ahV8jJmyYM8wk0hC7tBEYQmpakcc5G2CY7dYqBb%2B6NViucfNMj5iE45E1nEQBiB0WiLk0p8AIcQe41Shk%2BDTmA%2BoY7QHRLG%2BG920vx2aI0U3QpcFS6CkhkGIcP%2B%2FrbXH7jnZ2LZ3x6fD4iRU%2Ft797pIiA6v1esTcuhBh%2FgrWQCixOBuSsYrR7Gu6%2BpsRjzz592Bp0VicTD3yZ2QobsvlgYLkufCvYl2uFDWCcOA4EE6HG7h392ppCbP8vb0lKgxamjz4uZRWT1sLIgrOschmjQgI23%2BMBNzoV9uKckAsG0QIpu4c8v3sGGnS8klAksfBr9Q4PB744Zb5reenwYbl4FGx9CeUCyfg9eqi5G60xywyqOYxDGEdHPkUasYuhy%2B%2BcRVQCGlZJRBZKAoSq5kXUOIcmGbYVwcmuK3i%2FkR7k7u71HvHOmDVn4Vn26L4y01D9skWrOqvYsoIT7PIK0YVnjDlhIDBBjqkAYBndFlqYZ%2FwZtiXf8%2BX85BkzCbs4mGw1reskLcu8%2BTkp4Vspy35t%2FCqnZuRVVWa0Ve1A9QzVemq%2FxsiNR3XT3LJYmjrvfEExnCjim%2FPCibL5%2F6Zabwijn25BRI5IUjDh1PugcWMLgHINY8cvEZILYEoBYYVwikmk6eUKcb9hdRYgyetV%2B7VMh0Kf%2F9kBuJioqS%2BADtDcMMY8LMjdmrKUv%2FPto3L&X-Amz-Signature=4386207303b8b95221db5282f5f39b27c5ac5096ce0443d8b2eb716db861adcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
