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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP63ARAF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCP50D4D9BIUWlZRSniPDiGQvufVqfESMtS7Dm1BbddVAIhAPAgC0nn4MagaMJSx4TKmxhDX31s3jXNyaQH80RD4GNfKv8DCGYQABoMNjM3NDIzMTgzODA1IgwuYsTjgxpkt3Sqj04q3ANa%2Fs23M8cpsCDWTJNbQkPUsFLmQAvFmnPlHuBh24bBmumgE8V%2BIzGrNcdxHorqYOBthXkZMEdf%2FRuWuN0MwaY9CTeTlJbvW1u2%2BzX4nh4sPU2WIImmUS338OrmuyE2TsD8GbpvJQsUWa39QeIliELi0m3HsjDiEht1la0K3MWJ6zSSS1ZglGJtAnU%2FRoPjI3PM5nLjPYvgCIbpKWELvbREA07rpuiNaq5PYf%2FBsxb6SnwQkUPZqjB4C75T%2BHJb%2FXDYhUzS%2FJmJnqyZguBL5my%2FejsYEjzbgzUYA%2B8Y1%2B%2Bj523kjCfzqbDB7OGMO%2B0jyNN6JPXfjjO5M4B1tEwSDc3Jsl%2BBo5XdYgYy1lc%2FgZCsDOA3Teqg0gjHVgAfGBZJXPH8OlfmSo6DCsQ9Zl3f2MoqggdqYK7wcJXODn5oz3QDhgcXlmgpnfa9YQsFkVmIgFfbKHz5qG8xixYa%2BW%2BYciyGB10bxGxyF4ntKcyERKNzH4%2FwMJRN%2BEz%2FXcSL1go5FcfJARuv409LXthB2fQUoLFG3hb1ySsLy%2FU5idJySGxw6Cn8a2uJSwmyLszWV5Cx3l9H%2BB0zVpnL7NyfWVnYH6RFuzmVWdNtV0fwW%2FEZIKzQac6GtH1CfeMlF46f%2BTDwjcLCBjqkAZqO6rbvreTo2ZhNr8JALn5uA9wNRbk5SRsyoFv%2F3zKH1%2Fx%2BvmeOJAbMxVvYwcWadq%2BzYDeW2C8ehGJTD5RM87TFX7NSEP%2BBQUb9RwGbToxDCaS52wguPj70ZuRlAEls7cZ7Klcpkqa2kFgpQr%2FO6%2BbYXutEJ0PzoUoi7SC6TCcoWeycGMasRScV%2Bb9iPIEq1oBydUhIOzS%2FwodsaA39TlImrdzh&X-Amz-Signature=1e08f33d357cbc2a190edaaa47249303e83036f6cf3e0d166075eb6cbf8c1be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP63ARAF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCP50D4D9BIUWlZRSniPDiGQvufVqfESMtS7Dm1BbddVAIhAPAgC0nn4MagaMJSx4TKmxhDX31s3jXNyaQH80RD4GNfKv8DCGYQABoMNjM3NDIzMTgzODA1IgwuYsTjgxpkt3Sqj04q3ANa%2Fs23M8cpsCDWTJNbQkPUsFLmQAvFmnPlHuBh24bBmumgE8V%2BIzGrNcdxHorqYOBthXkZMEdf%2FRuWuN0MwaY9CTeTlJbvW1u2%2BzX4nh4sPU2WIImmUS338OrmuyE2TsD8GbpvJQsUWa39QeIliELi0m3HsjDiEht1la0K3MWJ6zSSS1ZglGJtAnU%2FRoPjI3PM5nLjPYvgCIbpKWELvbREA07rpuiNaq5PYf%2FBsxb6SnwQkUPZqjB4C75T%2BHJb%2FXDYhUzS%2FJmJnqyZguBL5my%2FejsYEjzbgzUYA%2B8Y1%2B%2Bj523kjCfzqbDB7OGMO%2B0jyNN6JPXfjjO5M4B1tEwSDc3Jsl%2BBo5XdYgYy1lc%2FgZCsDOA3Teqg0gjHVgAfGBZJXPH8OlfmSo6DCsQ9Zl3f2MoqggdqYK7wcJXODn5oz3QDhgcXlmgpnfa9YQsFkVmIgFfbKHz5qG8xixYa%2BW%2BYciyGB10bxGxyF4ntKcyERKNzH4%2FwMJRN%2BEz%2FXcSL1go5FcfJARuv409LXthB2fQUoLFG3hb1ySsLy%2FU5idJySGxw6Cn8a2uJSwmyLszWV5Cx3l9H%2BB0zVpnL7NyfWVnYH6RFuzmVWdNtV0fwW%2FEZIKzQac6GtH1CfeMlF46f%2BTDwjcLCBjqkAZqO6rbvreTo2ZhNr8JALn5uA9wNRbk5SRsyoFv%2F3zKH1%2Fx%2BvmeOJAbMxVvYwcWadq%2BzYDeW2C8ehGJTD5RM87TFX7NSEP%2BBQUb9RwGbToxDCaS52wguPj70ZuRlAEls7cZ7Klcpkqa2kFgpQr%2FO6%2BbYXutEJ0PzoUoi7SC6TCcoWeycGMasRScV%2Bb9iPIEq1oBydUhIOzS%2FwodsaA39TlImrdzh&X-Amz-Signature=62c577f26a64c96fa4de2b4debc584db447b9329ebace8b0c4cbfcf77d9b2f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
