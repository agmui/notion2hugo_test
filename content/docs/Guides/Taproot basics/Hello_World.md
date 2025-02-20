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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6T7O3N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC21P9GXxXs8Ax4W3JcNpAbM%2BNESGHO%2FRpGJOwlEhW2xAiBVoitllYbgJ8uYnoVTQnUz3ZAvH7atGEZkHHhZ4hk2oSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjtybdy6H1SS6zzbBKtwDpiUbW0rzI1FHH4VJm%2FIkOUM5TyWKWHOUHB%2Fr%2BaBbGIDdL6v9y0RS1emeYxEe624mmb8zV1UYMrxhDkbs2ri0%2F76be8LWTQ2VIFgwOGIYJ1NrE%2FgKnKFFENM5yhPPRNgBp7sU2N9WQizN9dg6%2BJIZUjcd2fYC9m3VGld2MX1vYoDIcp1MjbtePnnK3d25zp%2BxDdi6vY4oN2vwDx1bQJ0ky%2BkBRWVWYL5YkeykoPUlQVCNwpUHBvN4qyQ1VHasWq8ddKsbRfiqUDeK6Ghi%2B84AdO%2FDcxMrvifwmy39NtwFAjch8kB1kNQ42Q7Ull5KTIVJE5WdwssQNBn%2Bfk%2BL40CNECk51FkZMOp8a6newd%2BEtuPcoAlDb4XwoPvDuu0TouRDUFFmaHPilbbEs4ZdoGcqAH3XtEPZxjLf0rba6FPl%2BGWmeZmjwkG0YOdGg2vBrHl1mineANwEtSKCQt5Z9Ifl2HvxUTb%2B8asqsWU69KLjA4Cm9VcZ1pw9%2FBqpjOEeYZYcbhjp4GsRXnNNWwGn3Jxhxe83UmGdHXoX1nU31lACgIkADe8ggYJBtnKLLNNvr0uvV4h4vcsCPcQgPkWJxJzC31HA6InPaTLZJ74W0aFKkzgXMZw3KxjuSzzOf2cw2MPavQY6pgHxfe3wfsU08Jmoy4gBXpaF6dN%2BV20Lsnu2wEKsIDM7%2FEkHGZaEfUpfFcWAeusfCi3f7F3nYiXQAHgkRLUHtH7hs2%2Bx5BfZUfEaH%2FkiX65GB%2BhVkc2C01rMUZYvBAJrJJT13wSDCOHSxSPJvRqdyF2rTxyCyl5aWj8FtBJ3uhMJjCDOI5LKnBbztUxcuZitSVYuEPAfa0wMqNX%2B1N8XfsT0eKU7W6oQ&X-Amz-Signature=081a10fccf7580351b9b5676b1a78207ddbb1a0d1683af03d7c84279e7ac1355&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6T7O3N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC21P9GXxXs8Ax4W3JcNpAbM%2BNESGHO%2FRpGJOwlEhW2xAiBVoitllYbgJ8uYnoVTQnUz3ZAvH7atGEZkHHhZ4hk2oSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjtybdy6H1SS6zzbBKtwDpiUbW0rzI1FHH4VJm%2FIkOUM5TyWKWHOUHB%2Fr%2BaBbGIDdL6v9y0RS1emeYxEe624mmb8zV1UYMrxhDkbs2ri0%2F76be8LWTQ2VIFgwOGIYJ1NrE%2FgKnKFFENM5yhPPRNgBp7sU2N9WQizN9dg6%2BJIZUjcd2fYC9m3VGld2MX1vYoDIcp1MjbtePnnK3d25zp%2BxDdi6vY4oN2vwDx1bQJ0ky%2BkBRWVWYL5YkeykoPUlQVCNwpUHBvN4qyQ1VHasWq8ddKsbRfiqUDeK6Ghi%2B84AdO%2FDcxMrvifwmy39NtwFAjch8kB1kNQ42Q7Ull5KTIVJE5WdwssQNBn%2Bfk%2BL40CNECk51FkZMOp8a6newd%2BEtuPcoAlDb4XwoPvDuu0TouRDUFFmaHPilbbEs4ZdoGcqAH3XtEPZxjLf0rba6FPl%2BGWmeZmjwkG0YOdGg2vBrHl1mineANwEtSKCQt5Z9Ifl2HvxUTb%2B8asqsWU69KLjA4Cm9VcZ1pw9%2FBqpjOEeYZYcbhjp4GsRXnNNWwGn3Jxhxe83UmGdHXoX1nU31lACgIkADe8ggYJBtnKLLNNvr0uvV4h4vcsCPcQgPkWJxJzC31HA6InPaTLZJ74W0aFKkzgXMZw3KxjuSzzOf2cw2MPavQY6pgHxfe3wfsU08Jmoy4gBXpaF6dN%2BV20Lsnu2wEKsIDM7%2FEkHGZaEfUpfFcWAeusfCi3f7F3nYiXQAHgkRLUHtH7hs2%2Bx5BfZUfEaH%2FkiX65GB%2BhVkc2C01rMUZYvBAJrJJT13wSDCOHSxSPJvRqdyF2rTxyCyl5aWj8FtBJ3uhMJjCDOI5LKnBbztUxcuZitSVYuEPAfa0wMqNX%2B1N8XfsT0eKU7W6oQ&X-Amz-Signature=85a4ce262bf252288568c468a4e6b224b314faf1ceedb8e7ec099d89a963f0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
