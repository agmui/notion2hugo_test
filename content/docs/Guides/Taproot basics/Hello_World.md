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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJHJ2AE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCjXwdbI63O9cnXor3%2Fsxvefc2%2FvNoCqyb01pD2oh0n8QIgNHZ0ba3A8B95db3%2Bvf2GK%2B%2FryvJg%2BrtT9uQpCDBcu9IqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn2LOwJ0OldrMRM6yrcAyCz8px3QDk6HymAksacDQ1rwkO4DCjhBongRgIaz4%2BE5JEARl5r2SR83dboBcbUWGWgUy50rJM2Z2NqGrbexsQdxVVKcx5VgDIdB6mt3ormzsXraCyS9rHJd8nuGy2asP%2F0HTck7Qxq8Em4is78RhO34oFMydGcwpbqoLGFmHLv5HUHLKCYgf4ZSrFHRoW0B3JJ2m4ZTmyvehn5Pz3D1Z2i3kATqxD%2FCQNJmMmVUgftx3Y0zI7%2FxfAES01TG9whWL4xtoNwuarKJ%2FEbRmeOcK%2FBBikfwCMn30RhRIXNw5G8NanG%2FaRFFV89nzBZ3pHMP3Q0BUvblaQDPlpagfxu%2BDFt%2FTRFtn3QuR64qUh9SKmd%2FSMJ3RGmZeePvc4rVvkP8u5ySfE8itAUY0g534Yy5iuLMAi0PDfUdhh41UXtlmZBW0hCg2GfWq6%2B%2BN2RRX7R3V2pzaCeF0oEjQHca6hRjjF7%2FMkkppy28jIa1url5XZ0yfXUwI4T43avcOanxBrHtb6FuYgwmB5VKBquUmMZEE3%2FMgaRYyTkHeu%2BR47BsrLd0TYBqV4TrOrltjCNV%2BlsjX52FBzOw59iz7Uef57actCuhfiV1i%2FlacgtbUMN7uajGOubbQi4fBBwbfyFMJGdycAGOqUBr01MIU8ke3nfb3%2BqXvvDQaewqszHCHG9KT5LmL4v4%2FpvPtb8Dzmx0dwpm2HxOoYnyITnjvLN%2BUMPvKXeW0bdjd%2FmAsvinpMkhsXR4wx3cdRLq7VdYpS8%2BAwmS2dkPZD9HQ6kYX1%2F8g783Qht8gBjGCnPxNlGWnZMRAmq%2BR3%2FcOgleLOLE1hITvDgwyWjZ6HmHElJ98FJzRXnpzNV098Mip27oFRj&X-Amz-Signature=241510fed6a2d39f669678506b35febb14b6f8d8fe4c104ec79fe0cac8b3440c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJHJ2AE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCjXwdbI63O9cnXor3%2Fsxvefc2%2FvNoCqyb01pD2oh0n8QIgNHZ0ba3A8B95db3%2Bvf2GK%2B%2FryvJg%2BrtT9uQpCDBcu9IqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn2LOwJ0OldrMRM6yrcAyCz8px3QDk6HymAksacDQ1rwkO4DCjhBongRgIaz4%2BE5JEARl5r2SR83dboBcbUWGWgUy50rJM2Z2NqGrbexsQdxVVKcx5VgDIdB6mt3ormzsXraCyS9rHJd8nuGy2asP%2F0HTck7Qxq8Em4is78RhO34oFMydGcwpbqoLGFmHLv5HUHLKCYgf4ZSrFHRoW0B3JJ2m4ZTmyvehn5Pz3D1Z2i3kATqxD%2FCQNJmMmVUgftx3Y0zI7%2FxfAES01TG9whWL4xtoNwuarKJ%2FEbRmeOcK%2FBBikfwCMn30RhRIXNw5G8NanG%2FaRFFV89nzBZ3pHMP3Q0BUvblaQDPlpagfxu%2BDFt%2FTRFtn3QuR64qUh9SKmd%2FSMJ3RGmZeePvc4rVvkP8u5ySfE8itAUY0g534Yy5iuLMAi0PDfUdhh41UXtlmZBW0hCg2GfWq6%2B%2BN2RRX7R3V2pzaCeF0oEjQHca6hRjjF7%2FMkkppy28jIa1url5XZ0yfXUwI4T43avcOanxBrHtb6FuYgwmB5VKBquUmMZEE3%2FMgaRYyTkHeu%2BR47BsrLd0TYBqV4TrOrltjCNV%2BlsjX52FBzOw59iz7Uef57actCuhfiV1i%2FlacgtbUMN7uajGOubbQi4fBBwbfyFMJGdycAGOqUBr01MIU8ke3nfb3%2BqXvvDQaewqszHCHG9KT5LmL4v4%2FpvPtb8Dzmx0dwpm2HxOoYnyITnjvLN%2BUMPvKXeW0bdjd%2FmAsvinpMkhsXR4wx3cdRLq7VdYpS8%2BAwmS2dkPZD9HQ6kYX1%2F8g783Qht8gBjGCnPxNlGWnZMRAmq%2BR3%2FcOgleLOLE1hITvDgwyWjZ6HmHElJ98FJzRXnpzNV098Mip27oFRj&X-Amz-Signature=04fc075c9efb5b7a5412f0e7e6eaff2253fac65b5df061e3466e8ea69c2661a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
