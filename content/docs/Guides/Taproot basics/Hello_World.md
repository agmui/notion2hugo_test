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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VJC7IP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7usaavm65IVm8atIjVVM0BsCo7akxYfzO2sDgHhtaWgIhAPO6DAu9yn0bB%2FrfMv04XXd8gdoa0uGMrKGWaqEC98hrKv8DCCcQABoMNjM3NDIzMTgzODA1IgwYxYtbil0IPnCEM0Uq3AO6S%2Fxt8TpRb6aCT5TyGPsYyEEKZyBL6KKuILTYvOJPQs3W1e7mtkVPZmnomFgVwLhFKkabXfe7Yqwe1RcawrhcYHOlyz7cNnLammvWk%2BoN7WZkw%2FaKb8hZZxvd6W6Jpc9fYKuQ3R5WSHalEKyHUA%2BtPHqQkV4CDD%2B5urnWenZfE0QgjtBRbBwavEAA3IdxG9%2FoQlj1GvD%2FbKewL4I%2BSQhTOPLqKqTtfubnsoxk0jNGAPY8ZN9q5AUr2N4EkrivEB7C%2BsP1U1uMQezfD%2BQsDuOHtrM9wia04kElCEzkb%2BZcrj%2FiL2f%2FR4ndC3yeQk3acZG0%2BfWCwWa7nzGztrelzZIaf%2BL8UfQh26vjRzg1aGQw08JoHsjfX%2FpnkTXZlatC9giHM5AwOnxXYzZFhFo0rGrQ3bj54KkZ1n%2FuRbV4WZ7JRSneCSf9hJiKwiy8PpXdBPAeFZiXiZcmiSy27itnzdKZSFrlGRv5yzkXFo6VvNElQawgg3jn07QWR%2BNdmzanX3fhnXKkIQ9HZB5GFcbByFvMwSBIxm5rOPyfmuu8LNadefmoM4PRQ%2FFhm57sSKw4FeORtBVYAuPyT0UqMpstbOOs4b5wfU8x9%2FbhpYmIk5m%2F7JTfhjwMZrq%2FwwBAzDC60fDEBjqkAQNYghjKDjtTrgkFLLeDxe709w4V101uUFCLDJyhKvUU%2BfQ%2BdAonxM5z6BSTeEoM2cEpq%2Bh%2FlTM%2B5qYj8OGnaR2sxsZNhsoIRgIz39mcCkwBb0PCS5yofL1Ul9eaNb0H%2FEPyuiDHsHcRKMEjDpkXYHsxZaPAJkQmfZ7K6ATyE2LgvdijZWbPUxXtQ5VrcRE%2FWfDYFeTozibM%2FkAXFmCcrXqVXrk3&X-Amz-Signature=e99dfff67694d86cabc6a2f76e27994308830003de35a100d0bfe79873b0d24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VJC7IP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7usaavm65IVm8atIjVVM0BsCo7akxYfzO2sDgHhtaWgIhAPO6DAu9yn0bB%2FrfMv04XXd8gdoa0uGMrKGWaqEC98hrKv8DCCcQABoMNjM3NDIzMTgzODA1IgwYxYtbil0IPnCEM0Uq3AO6S%2Fxt8TpRb6aCT5TyGPsYyEEKZyBL6KKuILTYvOJPQs3W1e7mtkVPZmnomFgVwLhFKkabXfe7Yqwe1RcawrhcYHOlyz7cNnLammvWk%2BoN7WZkw%2FaKb8hZZxvd6W6Jpc9fYKuQ3R5WSHalEKyHUA%2BtPHqQkV4CDD%2B5urnWenZfE0QgjtBRbBwavEAA3IdxG9%2FoQlj1GvD%2FbKewL4I%2BSQhTOPLqKqTtfubnsoxk0jNGAPY8ZN9q5AUr2N4EkrivEB7C%2BsP1U1uMQezfD%2BQsDuOHtrM9wia04kElCEzkb%2BZcrj%2FiL2f%2FR4ndC3yeQk3acZG0%2BfWCwWa7nzGztrelzZIaf%2BL8UfQh26vjRzg1aGQw08JoHsjfX%2FpnkTXZlatC9giHM5AwOnxXYzZFhFo0rGrQ3bj54KkZ1n%2FuRbV4WZ7JRSneCSf9hJiKwiy8PpXdBPAeFZiXiZcmiSy27itnzdKZSFrlGRv5yzkXFo6VvNElQawgg3jn07QWR%2BNdmzanX3fhnXKkIQ9HZB5GFcbByFvMwSBIxm5rOPyfmuu8LNadefmoM4PRQ%2FFhm57sSKw4FeORtBVYAuPyT0UqMpstbOOs4b5wfU8x9%2FbhpYmIk5m%2F7JTfhjwMZrq%2FwwBAzDC60fDEBjqkAQNYghjKDjtTrgkFLLeDxe709w4V101uUFCLDJyhKvUU%2BfQ%2BdAonxM5z6BSTeEoM2cEpq%2Bh%2FlTM%2B5qYj8OGnaR2sxsZNhsoIRgIz39mcCkwBb0PCS5yofL1Ul9eaNb0H%2FEPyuiDHsHcRKMEjDpkXYHsxZaPAJkQmfZ7K6ATyE2LgvdijZWbPUxXtQ5VrcRE%2FWfDYFeTozibM%2FkAXFmCcrXqVXrk3&X-Amz-Signature=6a100591858e1ed3f624bf4f0a4d4b9905a9c29e35c333bfe5e75469c7695024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
