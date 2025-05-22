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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636S2G3US%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAaAQfumGMCZBQlpJGpLqIQbkdgkajDKavCd82SVvowVAiEAkBrCQ%2FnYdBj0WLVyne6hE3fmgKTWrgGl4Abua5ESHoUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFl6fS3KczcukN6EzircA6MtO0n75K%2Byr9Xk1Vx%2BeTsBhwWtG0K9VVaeg6uml%2BxDgiei8ZQ%2FTI3qE6dE2tdFbSLb5%2FPCGD%2F6E2PzM%2B3i%2FxILTdo9Mc33n0tS8L%2FA%2Bso4VluF3vdlMjc5qBEu%2BIv%2BMMmcdGH7rSHyllGUj%2F9M38IsDeTOIdWj3AoKIjzvimh%2Ba9OXn8lqxkg%2BANkmH%2F0HDzi8EjvpwU1WXY8MGlrpvJpjZdH5Oo4A2p84dj56RmODCuWHDkoLRCS%2B5cJoC9fsnjPDjqgjoMcvK3LFVT4ZibSI2cM3FXW%2F5gOlZKyOTnW9o3NOUO6XIqNLSEzotJlgf%2F4u372snXq%2BlVPgW9iUZj5i8ZUh6FRur6TCqS8Qo1aGsXKcV%2Fh8UiluSz7iwAoTu0uaIqUfV5UqQEnX5KY701R3NOAgZ%2BOzmGGJ123i0HBpdMkE%2BQnIe9dctWU2Uz0RSq%2BG%2FjmhbRK2wpHwqIPTBNTbvpJyYBdEjxyAl5SAfUpGWLqt5Dm74Tr%2FhaKH5o3Ozm2iUwiYO2%2Bzcmn46nEqCEjwjQ2GgrhmnCC2Mv63lcwePYQB5%2BVO%2FF2cQJojlIpZtNtcSex2oYcItiGKtaBwez8R6U7CYvkgOmdqG8OfS%2FBeg75d3EGcwaJ5hq4BMPDdu8EGOqUBUmRzLjRy8JKwABcNUdZ1EPhgJ%2FPPT8mzioTV4eEC38t9rn0KGobBBDqR7eYWFzifuqGgomlfhPVTUMJNWBwbWvmC8FIkrahIb7uDGELkwwHP4GNj3CV6z%2FDl6DmhPFLx%2FBS9cSsmZ57lJg2q1yAWFtAyseCbKIdV8Zzw1jN9MjwiSkJ6%2Fryiy3CPP0Zwj3Oy6TFXJxaQKsi%2Bra21X339m2sqdvUx&X-Amz-Signature=53bff09cbfda8059bf0841c0c41b01933e16085d7f99a0ecc3f6b0afa8fe858a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636S2G3US%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAaAQfumGMCZBQlpJGpLqIQbkdgkajDKavCd82SVvowVAiEAkBrCQ%2FnYdBj0WLVyne6hE3fmgKTWrgGl4Abua5ESHoUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFl6fS3KczcukN6EzircA6MtO0n75K%2Byr9Xk1Vx%2BeTsBhwWtG0K9VVaeg6uml%2BxDgiei8ZQ%2FTI3qE6dE2tdFbSLb5%2FPCGD%2F6E2PzM%2B3i%2FxILTdo9Mc33n0tS8L%2FA%2Bso4VluF3vdlMjc5qBEu%2BIv%2BMMmcdGH7rSHyllGUj%2F9M38IsDeTOIdWj3AoKIjzvimh%2Ba9OXn8lqxkg%2BANkmH%2F0HDzi8EjvpwU1WXY8MGlrpvJpjZdH5Oo4A2p84dj56RmODCuWHDkoLRCS%2B5cJoC9fsnjPDjqgjoMcvK3LFVT4ZibSI2cM3FXW%2F5gOlZKyOTnW9o3NOUO6XIqNLSEzotJlgf%2F4u372snXq%2BlVPgW9iUZj5i8ZUh6FRur6TCqS8Qo1aGsXKcV%2Fh8UiluSz7iwAoTu0uaIqUfV5UqQEnX5KY701R3NOAgZ%2BOzmGGJ123i0HBpdMkE%2BQnIe9dctWU2Uz0RSq%2BG%2FjmhbRK2wpHwqIPTBNTbvpJyYBdEjxyAl5SAfUpGWLqt5Dm74Tr%2FhaKH5o3Ozm2iUwiYO2%2Bzcmn46nEqCEjwjQ2GgrhmnCC2Mv63lcwePYQB5%2BVO%2FF2cQJojlIpZtNtcSex2oYcItiGKtaBwez8R6U7CYvkgOmdqG8OfS%2FBeg75d3EGcwaJ5hq4BMPDdu8EGOqUBUmRzLjRy8JKwABcNUdZ1EPhgJ%2FPPT8mzioTV4eEC38t9rn0KGobBBDqR7eYWFzifuqGgomlfhPVTUMJNWBwbWvmC8FIkrahIb7uDGELkwwHP4GNj3CV6z%2FDl6DmhPFLx%2FBS9cSsmZ57lJg2q1yAWFtAyseCbKIdV8Zzw1jN9MjwiSkJ6%2Fryiy3CPP0Zwj3Oy6TFXJxaQKsi%2Bra21X339m2sqdvUx&X-Amz-Signature=8d43b4177569048f71a5ed1abe6b6f176a74af071a732786356272b1fc915eff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
