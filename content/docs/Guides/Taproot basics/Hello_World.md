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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBDOF6C%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC86JKUFP5HbBRu%2FP8BUjRrjWZk%2FQe3xp%2Bv%2B8cUjJUvOwIhAP%2FHpW9Jv9MjkmuvIVUhk7LQxJ4aJumwNDWLO613ASOrKv8DCDIQABoMNjM3NDIzMTgzODA1IgxQngX1FciiiZq4X3Mq3AN%2BL0MBdNLhMWtwUgSdWE5bkTKFbCZzdG%2FjOO8j5jlk5FWdDdc4DuXHcrLwnJ0flDZXID1NOBu%2Fl%2Bun1hRGWSXuDmu5Y9YipUMGPm1IEHLIp1mRlB3RUTjyXdgFhLCXhn%2Bnw3YKSeYlkLJ4%2FAOl6iFwaW%2FeOJSB9Q7WfPOmNiTjX01fQPK3JlBBRtdf1plLwTNZTfa2TT57SCUFz4ccLoMrLn6snXMqGOucK5mjie1MGML5n4Xq91Hx2zqCSyDPeCrjvkH0t6nNy4DR3FZR37oHUrvh85ylWgzT4jSI593%2F0Jt193OiSg5W9PZz4Fy0r%2BekpYBCkE36oRf6SHy%2ByjgUuxEjmwJMv2MVCGnX5clLCsmlku6QO8xLU4bUbO0gA0FN%2BmMY4enbrXNJHwXCTtIV2J92bXN96L99Z4M%2FGUAIsbeOrsLRLMjP4gKlxcfB1G90QPlNJR%2BwUeteQmdA963JpzC5V0lamg0Zre7lcrPLkB0X7W4uNSO282TCGbVSjvMUv0O0cTOMQ0%2BiCyLJPs75cdTJKLpw9vqvPwQdMmFNhftb516lbskMyCHyD4zw0oA%2BaF8%2FKquewPw0582x8obHSp9oFcMedJUOebJ%2Fk45pAJP2wmheI1M63wfCoDCXu6zOBjqkAQilY4vMTThrNN3qEpa7UaqSHDNPDPNQh8nzxLnghIy5KEESIne9lwfhB3I8iyG6FKgnCauBaeJXRKPnyPrQWQ9hzcvwhSDMjRCFzpGI2JBx0XnV9Fmj3x4S7mU9hRiadhf%2FyAsrov8%2FVUD7h25RBwOpEIvFgcIeQuecjyGPYOesuB3PQIvKlQH8%2BEFp9ubBM26tRjGhfwXJZYGZds60sHxVfBrQ&X-Amz-Signature=9506d5b8bfb94044d55a186623a1e5621dc6f03f92127acb308faa168b612eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBDOF6C%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC86JKUFP5HbBRu%2FP8BUjRrjWZk%2FQe3xp%2Bv%2B8cUjJUvOwIhAP%2FHpW9Jv9MjkmuvIVUhk7LQxJ4aJumwNDWLO613ASOrKv8DCDIQABoMNjM3NDIzMTgzODA1IgxQngX1FciiiZq4X3Mq3AN%2BL0MBdNLhMWtwUgSdWE5bkTKFbCZzdG%2FjOO8j5jlk5FWdDdc4DuXHcrLwnJ0flDZXID1NOBu%2Fl%2Bun1hRGWSXuDmu5Y9YipUMGPm1IEHLIp1mRlB3RUTjyXdgFhLCXhn%2Bnw3YKSeYlkLJ4%2FAOl6iFwaW%2FeOJSB9Q7WfPOmNiTjX01fQPK3JlBBRtdf1plLwTNZTfa2TT57SCUFz4ccLoMrLn6snXMqGOucK5mjie1MGML5n4Xq91Hx2zqCSyDPeCrjvkH0t6nNy4DR3FZR37oHUrvh85ylWgzT4jSI593%2F0Jt193OiSg5W9PZz4Fy0r%2BekpYBCkE36oRf6SHy%2ByjgUuxEjmwJMv2MVCGnX5clLCsmlku6QO8xLU4bUbO0gA0FN%2BmMY4enbrXNJHwXCTtIV2J92bXN96L99Z4M%2FGUAIsbeOrsLRLMjP4gKlxcfB1G90QPlNJR%2BwUeteQmdA963JpzC5V0lamg0Zre7lcrPLkB0X7W4uNSO282TCGbVSjvMUv0O0cTOMQ0%2BiCyLJPs75cdTJKLpw9vqvPwQdMmFNhftb516lbskMyCHyD4zw0oA%2BaF8%2FKquewPw0582x8obHSp9oFcMedJUOebJ%2Fk45pAJP2wmheI1M63wfCoDCXu6zOBjqkAQilY4vMTThrNN3qEpa7UaqSHDNPDPNQh8nzxLnghIy5KEESIne9lwfhB3I8iyG6FKgnCauBaeJXRKPnyPrQWQ9hzcvwhSDMjRCFzpGI2JBx0XnV9Fmj3x4S7mU9hRiadhf%2FyAsrov8%2FVUD7h25RBwOpEIvFgcIeQuecjyGPYOesuB3PQIvKlQH8%2BEFp9ubBM26tRjGhfwXJZYGZds60sHxVfBrQ&X-Amz-Signature=397f52ff487e490bf2254d30d526440f335e1a7c1e6f1d6145433646f923a6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
