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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5MXAPI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEPJRiXsKGGCY1yiCfvN9eCUG55vEuTnQe%2BBCj8GpGSXAiBXxpjEtiLhk3JvlcUnyLgSSmBdx5WEZz2l4nPITsJZ3CqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqP%2FosWhXBKxnaYUDKtwD0FkUmF%2FoaLNwnEaB2jqI3HHIhARU0mT2FADNKD7BwmwpJF4fKKbFtlWspT0JI9O9j7F4Wkl%2BWjUkG30Wi%2Fyl1DMcIk85%2BQN77pxC74IIS27DKqVpmW9oOEnry3SJlk2ORsB1ppWHV%2FzbCJMLspG%2BoVnb90NrH35qd998rrHPzoffe2jlyJbUBnw3NWSJRZinsHGxG5D92RXK8M%2Fql%2BMczgooxGmvOX%2FNqzXxnmH48tfMDKALfnUF%2BCoZ8SeqoqXKX0RIsVsh2%2FVH88QrO4kq7gwxK3NAXMkrsc8DcD0NFMRLsVaIJTrP33%2FOf1XeXWCEJSNpIYWduTecP3QwmThbq%2B2XvKoTP6VcOi3tGc%2FxIFaK%2FtoWPCRxELujzSR9opvzaw4EWvl8ettlUnEOtZEzT%2BircG4OONdfaBoql9DfnXeOdJ9D%2FN4YD%2BYsIj65%2B%2Fz8vIIk3zqpc9fS0nI0XzwFgKF6UuYH5JnqcTAZfVVaWi7D5V9OmgutnxVqnbCEmRy5KifTGvqBYjlQbURSwCgnwx8IpS8dxs9Fp1OJ3hHYaSbQduvHfVFKhVXWJmGV2Ict5Mlig7iYq0faya%2B2A9%2B5arAh9NrS48DYH8FwH4A51sCJaKnrB283LqCuvF4wvYq6vgY6pgGlgHuZklpM5Ui2yU8Rx0o%2BdB3oYyGaZ1NcNLsk5NH%2FvkuByo1EA8G%2BV0o7NOs1C1%2FeXZNyCEJQRoE2eW05wrBfKgLdLvbkmDkw5RSIPbIbU%2BJ96TZXcVFit46Vgfr6P1hgo3KOT9RJvejIn80MWTFPENpL%2BwcNxpoAxFsw4kKUAEwlpmpDkU0VPIDs2P02rcFolC278wPYR9hkEMO3UQcFWi4hnluR&X-Amz-Signature=066414aa5f9dae2b220bfa95ba9d939fe465e8d9143fa4cce19ea5f49088413f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5MXAPI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEPJRiXsKGGCY1yiCfvN9eCUG55vEuTnQe%2BBCj8GpGSXAiBXxpjEtiLhk3JvlcUnyLgSSmBdx5WEZz2l4nPITsJZ3CqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqP%2FosWhXBKxnaYUDKtwD0FkUmF%2FoaLNwnEaB2jqI3HHIhARU0mT2FADNKD7BwmwpJF4fKKbFtlWspT0JI9O9j7F4Wkl%2BWjUkG30Wi%2Fyl1DMcIk85%2BQN77pxC74IIS27DKqVpmW9oOEnry3SJlk2ORsB1ppWHV%2FzbCJMLspG%2BoVnb90NrH35qd998rrHPzoffe2jlyJbUBnw3NWSJRZinsHGxG5D92RXK8M%2Fql%2BMczgooxGmvOX%2FNqzXxnmH48tfMDKALfnUF%2BCoZ8SeqoqXKX0RIsVsh2%2FVH88QrO4kq7gwxK3NAXMkrsc8DcD0NFMRLsVaIJTrP33%2FOf1XeXWCEJSNpIYWduTecP3QwmThbq%2B2XvKoTP6VcOi3tGc%2FxIFaK%2FtoWPCRxELujzSR9opvzaw4EWvl8ettlUnEOtZEzT%2BircG4OONdfaBoql9DfnXeOdJ9D%2FN4YD%2BYsIj65%2B%2Fz8vIIk3zqpc9fS0nI0XzwFgKF6UuYH5JnqcTAZfVVaWi7D5V9OmgutnxVqnbCEmRy5KifTGvqBYjlQbURSwCgnwx8IpS8dxs9Fp1OJ3hHYaSbQduvHfVFKhVXWJmGV2Ict5Mlig7iYq0faya%2B2A9%2B5arAh9NrS48DYH8FwH4A51sCJaKnrB283LqCuvF4wvYq6vgY6pgGlgHuZklpM5Ui2yU8Rx0o%2BdB3oYyGaZ1NcNLsk5NH%2FvkuByo1EA8G%2BV0o7NOs1C1%2FeXZNyCEJQRoE2eW05wrBfKgLdLvbkmDkw5RSIPbIbU%2BJ96TZXcVFit46Vgfr6P1hgo3KOT9RJvejIn80MWTFPENpL%2BwcNxpoAxFsw4kKUAEwlpmpDkU0VPIDs2P02rcFolC278wPYR9hkEMO3UQcFWi4hnluR&X-Amz-Signature=7e1addb68aef2d81d68e8c76cee81637dc2b58a2dcb388e5d8149a960e9bc21d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
