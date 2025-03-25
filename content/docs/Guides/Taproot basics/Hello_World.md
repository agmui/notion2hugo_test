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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOVAEB7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSBnoGF1qN6%2B7A7llR8cKN1tqIgbKA6Lz%2FGudRN9ACFAiEAotCJZVllMK9zLIUZpVRaKAo%2FwrgxmLzWsZlWlXCX6NEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL6V22gDB2UM9qO6CrcAw7%2FlmzEEvkR%2FA5nhqFu9%2BImyCjA3d53sKL2rcHNUd%2Bi6zQCTaU4MMXQIr2IIP7FaY3SHSfCHMoBdluMfA1tdyiYslRxHkvjKVhovzvClZ31nQCz%2FKnDj8BeOMA07TMvcR15Am%2FZCae0teH01KFetYeINwstdgK4s2QtiCHZuwFBDfli783Bm4lKOAeLHDhYJqniR%2FBvkVptWaOUwiMyk1EI8kMG82AgMGJ5%2FypHt4iBiGv1JGp4aCaAH9raSqOq0wfww7Jxl%2FQWyJYI34lr88Kj%2BLzK4AdkJuqCH7OYqYlALi1bBM8kJvngyynmKnbNeDI0hDSTLUiUiK6ita%2FzDkPXBqZo9K1GCF8XYNabECXlO%2FFtX5ZS3kyN8Rksm4btZGhPXJCzd3k%2F4krUwX6vzxazn7b%2BPL%2F94Y1irOmAL6EcTmgS5Fl1F5PuTo92yZGP0bVMQo2P7BI0FSc3%2B681scJg08sYCGDCgvQrz9ptMGWGHudGSciVPZSidqW52DLx1z%2FjOsuuhz8pFpZ0RyJGipF6O1EdPk%2B3ZpMN7eriFvfSN3tWVmilqKnMZyaLiPRiGw1eYuD5TPDzqX4xphcMGQ9D2ZUmzBd1Bod3KEMhEazHcEMIvulNeskue1WtMPKOib8GOqUBFL52t6vmr6IzH4qSaSwGtKGl9vii1H5KQwlgXXxhCZRwWnOIG24aMWTVgirBr9mzMtmwizELa%2BTbLw%2FLlBA7pI0TKZzCZNTAIXC57EGpxBzOnZYiw14aLbzsMuJ6lKKJINSDd86VBZl9ObwWZkN6CaXMVB9R8YAcynqq3K9%2BVeIeyqEPcbcwlkkJQoeW0aP%2B0yOBSKHEcnaY%2Bazjxk%2BRiIL5l%2BVa&X-Amz-Signature=61e8db8405fb95c8d682919a52f6cc61775e7363bbcaa28407b7155c86def9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOVAEB7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSBnoGF1qN6%2B7A7llR8cKN1tqIgbKA6Lz%2FGudRN9ACFAiEAotCJZVllMK9zLIUZpVRaKAo%2FwrgxmLzWsZlWlXCX6NEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL6V22gDB2UM9qO6CrcAw7%2FlmzEEvkR%2FA5nhqFu9%2BImyCjA3d53sKL2rcHNUd%2Bi6zQCTaU4MMXQIr2IIP7FaY3SHSfCHMoBdluMfA1tdyiYslRxHkvjKVhovzvClZ31nQCz%2FKnDj8BeOMA07TMvcR15Am%2FZCae0teH01KFetYeINwstdgK4s2QtiCHZuwFBDfli783Bm4lKOAeLHDhYJqniR%2FBvkVptWaOUwiMyk1EI8kMG82AgMGJ5%2FypHt4iBiGv1JGp4aCaAH9raSqOq0wfww7Jxl%2FQWyJYI34lr88Kj%2BLzK4AdkJuqCH7OYqYlALi1bBM8kJvngyynmKnbNeDI0hDSTLUiUiK6ita%2FzDkPXBqZo9K1GCF8XYNabECXlO%2FFtX5ZS3kyN8Rksm4btZGhPXJCzd3k%2F4krUwX6vzxazn7b%2BPL%2F94Y1irOmAL6EcTmgS5Fl1F5PuTo92yZGP0bVMQo2P7BI0FSc3%2B681scJg08sYCGDCgvQrz9ptMGWGHudGSciVPZSidqW52DLx1z%2FjOsuuhz8pFpZ0RyJGipF6O1EdPk%2B3ZpMN7eriFvfSN3tWVmilqKnMZyaLiPRiGw1eYuD5TPDzqX4xphcMGQ9D2ZUmzBd1Bod3KEMhEazHcEMIvulNeskue1WtMPKOib8GOqUBFL52t6vmr6IzH4qSaSwGtKGl9vii1H5KQwlgXXxhCZRwWnOIG24aMWTVgirBr9mzMtmwizELa%2BTbLw%2FLlBA7pI0TKZzCZNTAIXC57EGpxBzOnZYiw14aLbzsMuJ6lKKJINSDd86VBZl9ObwWZkN6CaXMVB9R8YAcynqq3K9%2BVeIeyqEPcbcwlkkJQoeW0aP%2B0yOBSKHEcnaY%2Bazjxk%2BRiIL5l%2BVa&X-Amz-Signature=3df30c3b263a8904ed76c40a4eb2afdb86b17438fadb970574e900b5196f7e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
