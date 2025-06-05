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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DTKH5U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCdXHaD5ZiNBAli7dudZLZ8JTAcMlGUyJHzLm%2BcCOP%2FKgIhAPS6aOzOQcbiku2TouccONuvc7D3Wvm3NS4GlG71zfgJKv8DCEAQABoMNjM3NDIzMTgzODA1IgzFGWsNAoxlxQy1ibwq3AOqdYrYtGL5HpC3iUL6FevRF0aWbVsU6r83e%2FCqVklbCxqp4UpXj1BxfhB8zgKGQh1JVYUTLxVdx%2BPM6S6UoW8CE1JvVylM4UjOGMNCXn7%2FUQbfKswlktd%2BCphKFdG3lTwynamHz4VvKaJFJpHy3SGEU9I47PSp5zHB4p68uZxxQqcvwyIm9%2B5IqACLyuz7ZZY3p06%2FevRnFpoY3QNBesu0%2B6EcruiOu4tiEjKFlfN%2B9F0NOWINR66CwEzoad6Q5b0jDUSvLC8ibkIPV0Rwos6tQ6sF8WL%2BQDDgGGh0%2F%2BDyGvl5kfinio%2B7N9Y%2FKBFVN%2F%2FvRjPZh37Nt23iMZ5GG5m3eCZ3fmCFqJl6hmPaBynJDfGLHgfTaaZom2h34uoMbhKUnAkQwyVVMvatUcmN9PR48SwouuxkxNYGR4kVGfuS2cC1OFsaiuPLKeuZ8pjLU5KqeyR1YJAxhjKwHMSl6O9OvZzAHNsGCLIF%2FGaKSwWUqqQhKi8tR02c2HeguBgF%2FLwdQBsMm%2BMAR9ctXS5sPUieg6dvgbOVgvzOiTsNusCUXcGidYhbdhW5Tb1QprWDoN%2F7sYM6PqFWgXOdOIpft6O4IWZtkhZegBjy%2B4TalV9%2Bkm5TpK1NiFZvEBBzcDDpioXCBjqkARKcr6f%2BkMfY0n8bQpC%2BikFB%2BYWY415EEkGjmDnCwqACo9GhDc1Y9wW9KIGPBllw89dZm4zlF1%2BPWnZfc85YX1f7eLJDRxhXbIOHt9bP6KYfxjAqmy5xLxUCDMIn4iITssfHTrT1%2BpSbD%2Fr%2B3ZMuWGAKykUug%2FkT1w7M9ds8XqhxflBNOvNQE1Vg9Kpa8zcDjt4EXBXUTdMfMdowPA00%2BX6NrCS7&X-Amz-Signature=03a121bc28f3f0518fcaa2e701eddf43b30e8051a6451fa210617229d941a27b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DTKH5U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCdXHaD5ZiNBAli7dudZLZ8JTAcMlGUyJHzLm%2BcCOP%2FKgIhAPS6aOzOQcbiku2TouccONuvc7D3Wvm3NS4GlG71zfgJKv8DCEAQABoMNjM3NDIzMTgzODA1IgzFGWsNAoxlxQy1ibwq3AOqdYrYtGL5HpC3iUL6FevRF0aWbVsU6r83e%2FCqVklbCxqp4UpXj1BxfhB8zgKGQh1JVYUTLxVdx%2BPM6S6UoW8CE1JvVylM4UjOGMNCXn7%2FUQbfKswlktd%2BCphKFdG3lTwynamHz4VvKaJFJpHy3SGEU9I47PSp5zHB4p68uZxxQqcvwyIm9%2B5IqACLyuz7ZZY3p06%2FevRnFpoY3QNBesu0%2B6EcruiOu4tiEjKFlfN%2B9F0NOWINR66CwEzoad6Q5b0jDUSvLC8ibkIPV0Rwos6tQ6sF8WL%2BQDDgGGh0%2F%2BDyGvl5kfinio%2B7N9Y%2FKBFVN%2F%2FvRjPZh37Nt23iMZ5GG5m3eCZ3fmCFqJl6hmPaBynJDfGLHgfTaaZom2h34uoMbhKUnAkQwyVVMvatUcmN9PR48SwouuxkxNYGR4kVGfuS2cC1OFsaiuPLKeuZ8pjLU5KqeyR1YJAxhjKwHMSl6O9OvZzAHNsGCLIF%2FGaKSwWUqqQhKi8tR02c2HeguBgF%2FLwdQBsMm%2BMAR9ctXS5sPUieg6dvgbOVgvzOiTsNusCUXcGidYhbdhW5Tb1QprWDoN%2F7sYM6PqFWgXOdOIpft6O4IWZtkhZegBjy%2B4TalV9%2Bkm5TpK1NiFZvEBBzcDDpioXCBjqkARKcr6f%2BkMfY0n8bQpC%2BikFB%2BYWY415EEkGjmDnCwqACo9GhDc1Y9wW9KIGPBllw89dZm4zlF1%2BPWnZfc85YX1f7eLJDRxhXbIOHt9bP6KYfxjAqmy5xLxUCDMIn4iITssfHTrT1%2BpSbD%2Fr%2B3ZMuWGAKykUug%2FkT1w7M9ds8XqhxflBNOvNQE1Vg9Kpa8zcDjt4EXBXUTdMfMdowPA00%2BX6NrCS7&X-Amz-Signature=1bad88e05f7438276b97ff47ccc2fd7ff8ab98c951f59f57a1c52c49244f5c08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
