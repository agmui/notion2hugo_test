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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAAWWSG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCt%2Fod6EVY7jt9ACf7oTbTXBXvCiWTUtI83yyXxdQHcbAIgKbG4jlDUFQF0qO%2BwKXeZMhjzgeETngo8GdlLaROlV7gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDK8l4RyfgR%2BGKJf6kyrcAxBlO%2FUCK4s5MiqZA31VhX3E4XCkHQ4lK6LGskzRjZG0AYxwAzHnLAcBUhA3FL11An3iqiQQDmzTaoPAkT%2FGcpVghzWKosPARbDxUBVVEHhPMNPvxmmdHVeHig5MioBz2B6dTFnMJXiP0PdEmI%2BxVtbsjQb5IwjWUXpAfoANY7C%2FBxLXoeC7Rgxl7Cs%2B%2BgciLemIy2sV%2Fii7xNFl%2B54kfuSlAPpoYXcdCEEK7aM9z6J2k1AyS%2FQQhHa7fPY1i5x3vG%2BFQCSnt94M3ivXZTS70SsQHOP%2FznMCRoa%2BhQ%2B3Wp2uvkuwO0xafaWtJQYYPD3aE%2FEBaXuL5tUnclvHLzonY36I4wuTtqFUPuu8GoPAdhBO056yBJzmTfM7fh8qlTUzwjlGuLsQgF8N483t5DnhswovuMpDULvRVIT23xVZt5ywO9QHh0RYp3bzvzlCsv7Pq54pBfx6IqV15F2eoWRc%2Fk0iwIkzeQZvuYbZvH9xNQ%2BiCBY1x0acCi0P%2BDXnnUAzUgX0ATLLWtiVXcWv8RHpflPzkUQPYxktSCqr0PlDjTjHqYylubpfG3cgsD8h3xtSrYSsNw6qDSztFopGn36nRg6WgNOEvZpLV48zO8Ytkks9WARnYwh2qOtInF%2BHMPv%2FqsMGOqUBqquCV8iX4bhnHZs5SQegI9BFkAlsJT8xAejkjDo8EFtuhPutErV2ud3BNgmQaV6FIeC4hH7iLE2%2B4BLnkCCWxBDjIPgSxGZsYj%2FAHcPgH9afgfdpMnW5T2XPxzxqdXrcgVH3Eqyy5yIJArEA82LKEc%2BhTimTlPg5qwaj4vda6rGwzoo%2BxLxsAA17JrAzq70a7%2Farhr1mwm0ew08jFBPYfvArryM5&X-Amz-Signature=ac12deefc929728df11e1a0d14a1493c688562c3d35110e87c2c35267b820314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAAWWSG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCt%2Fod6EVY7jt9ACf7oTbTXBXvCiWTUtI83yyXxdQHcbAIgKbG4jlDUFQF0qO%2BwKXeZMhjzgeETngo8GdlLaROlV7gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDK8l4RyfgR%2BGKJf6kyrcAxBlO%2FUCK4s5MiqZA31VhX3E4XCkHQ4lK6LGskzRjZG0AYxwAzHnLAcBUhA3FL11An3iqiQQDmzTaoPAkT%2FGcpVghzWKosPARbDxUBVVEHhPMNPvxmmdHVeHig5MioBz2B6dTFnMJXiP0PdEmI%2BxVtbsjQb5IwjWUXpAfoANY7C%2FBxLXoeC7Rgxl7Cs%2B%2BgciLemIy2sV%2Fii7xNFl%2B54kfuSlAPpoYXcdCEEK7aM9z6J2k1AyS%2FQQhHa7fPY1i5x3vG%2BFQCSnt94M3ivXZTS70SsQHOP%2FznMCRoa%2BhQ%2B3Wp2uvkuwO0xafaWtJQYYPD3aE%2FEBaXuL5tUnclvHLzonY36I4wuTtqFUPuu8GoPAdhBO056yBJzmTfM7fh8qlTUzwjlGuLsQgF8N483t5DnhswovuMpDULvRVIT23xVZt5ywO9QHh0RYp3bzvzlCsv7Pq54pBfx6IqV15F2eoWRc%2Fk0iwIkzeQZvuYbZvH9xNQ%2BiCBY1x0acCi0P%2BDXnnUAzUgX0ATLLWtiVXcWv8RHpflPzkUQPYxktSCqr0PlDjTjHqYylubpfG3cgsD8h3xtSrYSsNw6qDSztFopGn36nRg6WgNOEvZpLV48zO8Ytkks9WARnYwh2qOtInF%2BHMPv%2FqsMGOqUBqquCV8iX4bhnHZs5SQegI9BFkAlsJT8xAejkjDo8EFtuhPutErV2ud3BNgmQaV6FIeC4hH7iLE2%2B4BLnkCCWxBDjIPgSxGZsYj%2FAHcPgH9afgfdpMnW5T2XPxzxqdXrcgVH3Eqyy5yIJArEA82LKEc%2BhTimTlPg5qwaj4vda6rGwzoo%2BxLxsAA17JrAzq70a7%2Farhr1mwm0ew08jFBPYfvArryM5&X-Amz-Signature=786d4525af295868bae39a5d360d0a2447356b95585f1ac9d68fb5a6ec2e75f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
