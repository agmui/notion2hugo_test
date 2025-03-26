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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6AFCGA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB94mNiXnIEBQQ8am2mHUW24%2FBTafHjXLIhCrTjai6HBAiAHPwErGEak1jtPGRCwvQck0e19FaPrBlenbs%2FwstoxOir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7QYP7oZ93DEGlLT2KtwD5aX4PcnXsIqqDlcq6KJJqmvRWN%2BTonfPfDDuvqJ%2BcY1Yi1JNMRo8BNdZNmo4aN4SH4DBUfLyjvCldbaZcutXUKjo2HaqdBZCH%2FVLe4kwaqloYwcCXskbM%2BBXDiivQ3Y6XRuiCAd2lz4mWA4klWyEAMKj6rDbcZdajq28W9KvWifSC%2FN2Uuy2%2BYhfeGQy%2Bxf6F%2BupqOOneCKApH7QcCVS3sxlbUz%2FzhFOVdu9DcZr6XoX5uOApEUMnGmyRb5M7IsscCvMejhzYoYpKXeFMdRAxitr20DfzJWO7hLL24VWi1RPkuuFbaL9fbLchiHJeUw8a86KMRA7XRgZPLc0WrPTG4Jn24Se%2BSM%2FiDEBJOlwZOzzRMLWsJZjZbOxp0%2F62uF8bcZux2qb5c07W38kHg6EVWn7ZuvORJRmtudGGNKqkNGMMrQQyT8cIRp%2BfwLqIR8iBLBF0q6btxiqSCXe4I6XCW0NZF4gOMH%2Be8eOuJ2Y1oO2gRDuGoi0wqdNhLe5IN6AdQOOaSVQp6zC9e%2FuuSE6roVg03vPSOUH0mlNrNXlwvdgD70n5aLQv4u6DS2bGmc39ws05L8dq%2FYMEMzvquSj5f4GIQkMUztqjyTkPekadm3ZQsBoRo%2BMNpSpq7Uw6biQvwY6pgH5RsvRVmrOgypjdqwO0282u0oY%2B7SNdnXaGe4Qn0KzozQ%2F1dnam4PxJ8tZkQbghHZZPYddmdmUVUiErBvWURIix4mjzBlFaB8I%2B6%2F8g%2FYL5tQCvNATUgRS3t7InVB%2FPwESWIRB2gSCLf0stAioYoJaITX8JehuDGklVsoiU1KDylcAfcVO2P%2FAqgE%2BIqDbKsY%2B3sa7y4CDqbCIC2NC9hPCqhsgLC68&X-Amz-Signature=c2c2894ff28fd3a062c3e0862d35913889b18e875e086e4c2640af18266a8cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6AFCGA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB94mNiXnIEBQQ8am2mHUW24%2FBTafHjXLIhCrTjai6HBAiAHPwErGEak1jtPGRCwvQck0e19FaPrBlenbs%2FwstoxOir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7QYP7oZ93DEGlLT2KtwD5aX4PcnXsIqqDlcq6KJJqmvRWN%2BTonfPfDDuvqJ%2BcY1Yi1JNMRo8BNdZNmo4aN4SH4DBUfLyjvCldbaZcutXUKjo2HaqdBZCH%2FVLe4kwaqloYwcCXskbM%2BBXDiivQ3Y6XRuiCAd2lz4mWA4klWyEAMKj6rDbcZdajq28W9KvWifSC%2FN2Uuy2%2BYhfeGQy%2Bxf6F%2BupqOOneCKApH7QcCVS3sxlbUz%2FzhFOVdu9DcZr6XoX5uOApEUMnGmyRb5M7IsscCvMejhzYoYpKXeFMdRAxitr20DfzJWO7hLL24VWi1RPkuuFbaL9fbLchiHJeUw8a86KMRA7XRgZPLc0WrPTG4Jn24Se%2BSM%2FiDEBJOlwZOzzRMLWsJZjZbOxp0%2F62uF8bcZux2qb5c07W38kHg6EVWn7ZuvORJRmtudGGNKqkNGMMrQQyT8cIRp%2BfwLqIR8iBLBF0q6btxiqSCXe4I6XCW0NZF4gOMH%2Be8eOuJ2Y1oO2gRDuGoi0wqdNhLe5IN6AdQOOaSVQp6zC9e%2FuuSE6roVg03vPSOUH0mlNrNXlwvdgD70n5aLQv4u6DS2bGmc39ws05L8dq%2FYMEMzvquSj5f4GIQkMUztqjyTkPekadm3ZQsBoRo%2BMNpSpq7Uw6biQvwY6pgH5RsvRVmrOgypjdqwO0282u0oY%2B7SNdnXaGe4Qn0KzozQ%2F1dnam4PxJ8tZkQbghHZZPYddmdmUVUiErBvWURIix4mjzBlFaB8I%2B6%2F8g%2FYL5tQCvNATUgRS3t7InVB%2FPwESWIRB2gSCLf0stAioYoJaITX8JehuDGklVsoiU1KDylcAfcVO2P%2FAqgE%2BIqDbKsY%2B3sa7y4CDqbCIC2NC9hPCqhsgLC68&X-Amz-Signature=b79a27f14a06c40f67173b8f9b8903fa54725009a077139167f66bff5f8a0b41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
