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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVZQEL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCEfCpnUTLJdZc%2F8SrSu2t4I807YKtm0jUxwwCVhGSWGQIgBWPYy7HarLmmYd8trRcd5nH6ZnIwyatlFMLphHBCpVEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5TVek8WMbD51O%2BtircA6Al2jD%2FySobPo9LwfbNVWgSDB%2BTF8QOnUpI08vcymcVnrBl7qjmHcKfDQAal3ypJfgqUnrQIEJZ5rXsjY%2FV0pfok1kq3diZFaPTLkKLELw893awnEZCC7Bh52zA%2B2JhEyhmFZOL111lVmusy3Z88FfxQ1XypKm4wjRZkAHVwZTJthpXafjtM8%2BkKuM687MZ%2BnxgkdNFigWIhbZDwGaog%2FtdekQCnsNfumDnEZkSm5lz1ncOXihWjwKlAsxMsxMcYcCmyHRI5CQroCK2ffYB84DVBd2yMCsiF9gP9on%2FKa0EH3B%2FdvzLtKd9r3%2BDkyEZope72Ovvgas1K7Om56pbHBUuqwU1%2B539Ar8kUK9K8YbZRPMpOfnZvtxg6pZFrQOzciRF5k9%2BT3Q8W6pzC8ZgLq9C8jpaKMqZD4Ab4lqPcvr%2B5Edsx9Rp0aN1XWTFJCIw%2BH86qljXnUcUi4cL80JjUQbg2U3LnsbZuKBMn5nqqIttrigIIYXWVyUQOq0T7AjNDpe4sC166kQuq7ilwzqtvZoE4e4qI3aoFbPLeN4h7lz3g%2Brt8w1JGMmzlqe%2BVFuS2PTsjvjDmCtRjIL8EIrxqrFpz9mnlwQRHczQDD2fqhjC8PeoE3BB%2F%2FNRa3MmMIf3%2Br4GOqUBhknf05Iar1usfhnPpxzoujgLKeyPuCNVx0n27%2FCIS6QjpIdrtqFcQEjsC%2FE3Z5jDH5KGg%2BKe%2FDP50rTuHXYOfOu43b3aWslQhe%2BKYqvUXs1VionFHghIsAj1A4qhoQPOOg%2F9575hJ7D9whP8cUWbVCKGITeTu8ohZiFqeF9KXYX19k4vOo%2BhBD1CA%2BLz%2Fl0HD3CFOc5UyBLrBiY3w2eWAfoWVmNH&X-Amz-Signature=73aba25c523cb0e21c8c86e0ee03f4a9c846d81b6521367b68b77bc0ff40cd29&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVZQEL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCEfCpnUTLJdZc%2F8SrSu2t4I807YKtm0jUxwwCVhGSWGQIgBWPYy7HarLmmYd8trRcd5nH6ZnIwyatlFMLphHBCpVEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5TVek8WMbD51O%2BtircA6Al2jD%2FySobPo9LwfbNVWgSDB%2BTF8QOnUpI08vcymcVnrBl7qjmHcKfDQAal3ypJfgqUnrQIEJZ5rXsjY%2FV0pfok1kq3diZFaPTLkKLELw893awnEZCC7Bh52zA%2B2JhEyhmFZOL111lVmusy3Z88FfxQ1XypKm4wjRZkAHVwZTJthpXafjtM8%2BkKuM687MZ%2BnxgkdNFigWIhbZDwGaog%2FtdekQCnsNfumDnEZkSm5lz1ncOXihWjwKlAsxMsxMcYcCmyHRI5CQroCK2ffYB84DVBd2yMCsiF9gP9on%2FKa0EH3B%2FdvzLtKd9r3%2BDkyEZope72Ovvgas1K7Om56pbHBUuqwU1%2B539Ar8kUK9K8YbZRPMpOfnZvtxg6pZFrQOzciRF5k9%2BT3Q8W6pzC8ZgLq9C8jpaKMqZD4Ab4lqPcvr%2B5Edsx9Rp0aN1XWTFJCIw%2BH86qljXnUcUi4cL80JjUQbg2U3LnsbZuKBMn5nqqIttrigIIYXWVyUQOq0T7AjNDpe4sC166kQuq7ilwzqtvZoE4e4qI3aoFbPLeN4h7lz3g%2Brt8w1JGMmzlqe%2BVFuS2PTsjvjDmCtRjIL8EIrxqrFpz9mnlwQRHczQDD2fqhjC8PeoE3BB%2F%2FNRa3MmMIf3%2Br4GOqUBhknf05Iar1usfhnPpxzoujgLKeyPuCNVx0n27%2FCIS6QjpIdrtqFcQEjsC%2FE3Z5jDH5KGg%2BKe%2FDP50rTuHXYOfOu43b3aWslQhe%2BKYqvUXs1VionFHghIsAj1A4qhoQPOOg%2F9575hJ7D9whP8cUWbVCKGITeTu8ohZiFqeF9KXYX19k4vOo%2BhBD1CA%2BLz%2Fl0HD3CFOc5UyBLrBiY3w2eWAfoWVmNH&X-Amz-Signature=e86eec3d19d2035e584617e38d35206939e8e9254b4202f553d9fe83b6858e58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
