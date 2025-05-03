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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH55YHW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCrmLTnrUmkTlIu%2BgiD1avt2%2B7bmBLtkp6FFa5IWlLR5gIgM6MoQ32tTivpcEf%2FIYuYSb6NoU3YRUxeoePgiLejjA8qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAsTKG%2BOQWl7JvelircA5AiEV0UVEvkR%2BU%2FlCxm7KKU7xJ0%2BkuNQ17OOjp%2BoVl%2BHlAi5tkk%2BNX6qqGz4D%2BYnFxSKrtsdJ%2BZ4GdAVJOLyBk5C5aKTqkjuL9UjvIWjKSOOT%2FfECyUQvm9iEHF0Jz0HM8vFddl8glHOy2Z0b0u6Rhk0vgYX8kqSQOXyzkrTzRETNSzKaBvP8EXnjpSAjcPAmZ5r4OWz6HxtO%2BtIzj4UBYe2K76gCi30J83SNOArMC4y%2Bjgpfx8AL9aKL%2FQte6J4at62EyozM%2B5MzHL9HRuVjKx9vIV8o9P3HkZo7mwC26f3oVtbws5vJY7cbx9JXzKXYWa8et%2BaUSn83OKc3s94aWYRMgrMWtEewk4QrmTmat7ZxZJ9kCf0lHvPNqnBvnxwrCBbepcOJQtimCtM6JcEgJFzKQFBQq8CXY7yIZ0sEy8a%2BjHOL%2B1xj3R2g3J6PwtTd2MMaDxVAzsb6aZwIM67cVs7lw8j4OofamVAux9cemL4HaffabhOvZkZAeYshXKye9xvLg4plBrx2K%2F3HMX%2BYAOGB4B5NPsXhR4%2BnGqzQjr%2FDmFR3Z4FGRUW3bRIptyCn9PAd6EFI4ftfihzUkhUjRjmVTmAF4XC4D%2Bue%2BE%2F0990qFc0Y%2B5ZuG7DwIhMN7d2MAGOqUBbVO7lQJLJ67kRMam5%2FaSzPKcvBTQtfSEq90%2FrsDTxvUykNSwJXSiOOltonBrf0LmmMjEEAyDWrlXCrgjpmQVQM7FSQYm%2B5b4k6oNq9N%2Fn4btpwQJ%2BQUlNWYgkaradSRjbdiFJejPlEXGh4Whtt2ti1LOUxQvfIsRI0%2BNf9vNYlkpAwhy%2Fckv9LSMMkToQolxyb6J9bd5BPAqoXVCdPAhGypcXsAg&X-Amz-Signature=46a82aab5a8f32c42c9caf511ec7d7dc39fe76b69e884833d89477aa9fddd802&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH55YHW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCrmLTnrUmkTlIu%2BgiD1avt2%2B7bmBLtkp6FFa5IWlLR5gIgM6MoQ32tTivpcEf%2FIYuYSb6NoU3YRUxeoePgiLejjA8qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAsTKG%2BOQWl7JvelircA5AiEV0UVEvkR%2BU%2FlCxm7KKU7xJ0%2BkuNQ17OOjp%2BoVl%2BHlAi5tkk%2BNX6qqGz4D%2BYnFxSKrtsdJ%2BZ4GdAVJOLyBk5C5aKTqkjuL9UjvIWjKSOOT%2FfECyUQvm9iEHF0Jz0HM8vFddl8glHOy2Z0b0u6Rhk0vgYX8kqSQOXyzkrTzRETNSzKaBvP8EXnjpSAjcPAmZ5r4OWz6HxtO%2BtIzj4UBYe2K76gCi30J83SNOArMC4y%2Bjgpfx8AL9aKL%2FQte6J4at62EyozM%2B5MzHL9HRuVjKx9vIV8o9P3HkZo7mwC26f3oVtbws5vJY7cbx9JXzKXYWa8et%2BaUSn83OKc3s94aWYRMgrMWtEewk4QrmTmat7ZxZJ9kCf0lHvPNqnBvnxwrCBbepcOJQtimCtM6JcEgJFzKQFBQq8CXY7yIZ0sEy8a%2BjHOL%2B1xj3R2g3J6PwtTd2MMaDxVAzsb6aZwIM67cVs7lw8j4OofamVAux9cemL4HaffabhOvZkZAeYshXKye9xvLg4plBrx2K%2F3HMX%2BYAOGB4B5NPsXhR4%2BnGqzQjr%2FDmFR3Z4FGRUW3bRIptyCn9PAd6EFI4ftfihzUkhUjRjmVTmAF4XC4D%2Bue%2BE%2F0990qFc0Y%2B5ZuG7DwIhMN7d2MAGOqUBbVO7lQJLJ67kRMam5%2FaSzPKcvBTQtfSEq90%2FrsDTxvUykNSwJXSiOOltonBrf0LmmMjEEAyDWrlXCrgjpmQVQM7FSQYm%2B5b4k6oNq9N%2Fn4btpwQJ%2BQUlNWYgkaradSRjbdiFJejPlEXGh4Whtt2ti1LOUxQvfIsRI0%2BNf9vNYlkpAwhy%2Fckv9LSMMkToQolxyb6J9bd5BPAqoXVCdPAhGypcXsAg&X-Amz-Signature=7cf15e41202c2ef17e546c99a7ecdf0fc2be645df4e4e7e03f9d862d94147ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
